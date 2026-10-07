"""API e interface local da primeira fatia evolutiva."""
from contextlib import asynccontextmanager
from pathlib import Path
import sqlite3

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr

from servico import Cantina, ErroPedido

BASE = Path(__file__).resolve().parent


class ItemEntrada(BaseModel):
    model_config = ConfigDict(extra='forbid')
    produto_id: StrictInt = Field(gt=0)
    quantidade: StrictInt = Field(ge=1, le=10)


class PedidoEntrada(BaseModel):
    model_config = ConfigDict(extra='forbid')
    itens: list[ItemEntrada] = Field(min_length=1)
    cupom: StrictStr | None = None


def criar_app(caminho=None, hoje=None):
    cantina = Cantina(caminho or BASE / 'dados' / 'cantina-evolutiva.sqlite3', hoje)

    @asynccontextmanager
    async def lifespan(_):
        cantina.preparar()
        yield

    app = FastAPI(title='Cantina Horizonte — pedido e cupom', lifespan=lifespan)
    app.state.cantina = cantina

    @app.exception_handler(ErroPedido)
    async def erro_pedido(_, erro):
        return JSONResponse(status_code=erro.status, content={'detail': str(erro)})

    @app.exception_handler(RequestValidationError)
    async def entrada_invalida(_, erro):
        campos = [e['loc'] for e in erro.errors()]
        if any('quantidade' in c for c in campos):
            mensagem = 'A quantidade deve ser um número inteiro entre 1 e 10.'
        elif any('produto_id' in c for c in campos):
            mensagem = 'Informe um identificador inteiro positivo para o produto.'
        elif any('cupom' in c for c in campos):
            mensagem = 'Informe o código do cupom como texto.'
        elif any(e['type'] == 'extra_forbidden' for e in erro.errors()):
            mensagem = 'Envie somente os itens e o cupom opcional.'
        else:
            mensagem = 'Envie um pedido com pelo menos um item válido.'
        return JSONResponse(status_code=422, content={'detail': mensagem})

    @app.exception_handler(sqlite3.Error)
    async def banco_indisponivel(_, erro):
        return JSONResponse(status_code=503, content={'detail': 'Não foi possível registrar a operação. O banco não confirmou esta tentativa.'})

    @app.get('/api/produtos')
    def produtos():
        return cantina.produtos()

    @app.post('/api/pedidos', status_code=201)
    def registrar(entrada: PedidoEntrada):
        return cantina.registrar([item.model_dump() for item in entrada.itens], entrada.cupom)

    @app.get('/api/pedidos/{pedido_id}')
    def consultar(pedido_id: int):
        return cantina.consultar(pedido_id)

    app.mount('/', StaticFiles(directory=BASE / 'frontend', html=True), name='interface')
    return app


app = criar_app()
