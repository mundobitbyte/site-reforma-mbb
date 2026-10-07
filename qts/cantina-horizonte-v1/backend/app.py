from __future__ import annotations

from contextlib import asynccontextmanager
from pathlib import Path
import sqlite3
from typing import Literal

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent.parent
DB_PATH = BASE_DIR / "cantina.db"
FRONTEND_DIR = BASE_DIR / "frontend"


@asynccontextmanager
async def lifespan(_: FastAPI):
    preparar_banco()
    yield


app = FastAPI(title="Cantina Horizonte", version="0.1.0", lifespan=lifespan)


class ItemPedido(BaseModel):
    produto_id: int
    quantidade: int


class PedidoEntrada(BaseModel):
    itens: list[ItemPedido] = Field(min_length=1)
    cupom: str | None = None


class StatusEntrada(BaseModel):
    status: Literal["Novo", "Confirmado", "Em preparação", "Pronto", "Entregue"]


def conectar() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def preparar_banco() -> None:
    conn = conectar()
    cur = conn.cursor()
    cur.executescript(
        """
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            preco REAL NOT NULL,
            estoque INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS cupons (
            codigo TEXT PRIMARY KEY,
            percentual REAL NOT NULL,
            valor_minimo REAL NOT NULL,
            validade TEXT NOT NULL,
            utilizado INTEGER NOT NULL DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS pedidos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subtotal REAL NOT NULL,
            desconto REAL NOT NULL,
            total REAL NOT NULL,
            cupom TEXT,
            status TEXT NOT NULL DEFAULT 'Novo'
        );

        CREATE TABLE IF NOT EXISTS itens_pedido (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pedido_id INTEGER NOT NULL,
            produto_id INTEGER NOT NULL,
            quantidade INTEGER NOT NULL,
            preco_unitario REAL NOT NULL,
            FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
            FOREIGN KEY (produto_id) REFERENCES produtos(id)
        );
        """
    )

    total = cur.execute("SELECT COUNT(*) FROM produtos").fetchone()[0]
    if total == 0:
        cur.executemany(
            "INSERT INTO produtos (id, nome, preco, estoque) VALUES (?, ?, ?, ?)",
            [
                (1, "Água", 3.00, 20),
                (2, "Suco", 6.00, 15),
                (3, "Salgado", 8.00, 10),
                (4, "Sanduíche", 12.00, 8),
                (5, "Chocolate", 5.00, 12),
            ],
        )
        cur.execute(
            "INSERT INTO cupons (codigo, percentual, valor_minimo, validade, utilizado) VALUES (?, ?, ?, ?, ?)",
            ("MBB10", 10.0, 30.0, "2099-12-31", 0),
        )
    conn.commit()
    conn.close()


def validar_quantidade(quantidade: int) -> bool:
    return quantidade <= 10


def calcular_subtotal(preco: float, quantidade: int) -> float:
    return round(preco * quantidade, 2)


def calcular_desconto(conn: sqlite3.Connection, codigo: str | None, subtotal: float) -> float:
    if not codigo:
        return 0.0
    cupom = conn.execute("SELECT * FROM cupons WHERE codigo = ?", (codigo.upper(),)).fetchone()
    if not cupom:
        return 0.0
    return round(subtotal * (cupom["percentual"] / 100), 2)


@app.get("/api/produtos")
def listar_produtos():
    conn = conectar()
    produtos = [dict(row) for row in conn.execute("SELECT * FROM produtos ORDER BY id").fetchall()]
    conn.close()
    return produtos


@app.post("/api/pedidos", status_code=201)
def criar_pedido(entrada: PedidoEntrada):
    conn = conectar()
    subtotal = 0.0
    itens_resolvidos: list[tuple[sqlite3.Row, int]] = []

    for item in entrada.itens:
        produto = conn.execute("SELECT * FROM produtos WHERE id = ?", (item.produto_id,)).fetchone()
        if not produto:
            conn.close()
            raise HTTPException(status_code=404, detail="Produto não encontrado.")
        if not validar_quantidade(item.quantidade):
            conn.close()
            raise HTTPException(status_code=400, detail="Quantidade inválida.")

        subtotal += calcular_subtotal(produto["preco"], item.quantidade)
        itens_resolvidos.append((produto, item.quantidade))

    subtotal = round(subtotal, 2)
    desconto = calcular_desconto(conn, entrada.cupom, subtotal)
    total = round(subtotal - desconto, 2)

    cur = conn.cursor()
    cur.execute(
        "INSERT INTO pedidos (subtotal, desconto, total, cupom, status) VALUES (?, ?, ?, ?, 'Novo')",
        (subtotal, desconto, total, entrada.cupom.upper() if entrada.cupom else None),
    )
    pedido_id = cur.lastrowid

    for produto, quantidade in itens_resolvidos:
        cur.execute(
            "INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)",
            (pedido_id, produto["id"], quantidade, produto["preco"]),
        )
        cur.execute(
            "UPDATE produtos SET estoque = estoque - ? WHERE id = ?",
            (quantidade, produto["id"]),
        )

    conn.commit()
    pedido = dict(conn.execute("SELECT * FROM pedidos WHERE id = ?", (pedido_id,)).fetchone())
    conn.close()
    return pedido


@app.get("/api/pedidos/{pedido_id}")
def consultar_pedido(pedido_id: int):
    conn = conectar()
    pedido = conn.execute("SELECT * FROM pedidos WHERE id = ?", (pedido_id,)).fetchone()
    if not pedido:
        conn.close()
        raise HTTPException(status_code=404, detail="Pedido não encontrado.")
    itens = [
        dict(row)
        for row in conn.execute(
            """
            SELECT i.produto_id, p.nome, i.quantidade, i.preco_unitario
            FROM itens_pedido i
            JOIN produtos p ON p.id = i.produto_id
            WHERE i.pedido_id = ?
            """,
            (pedido_id,),
        ).fetchall()
    ]
    resultado = dict(pedido)
    resultado["itens"] = itens
    conn.close()
    return resultado


@app.post("/api/pedidos/{pedido_id}/status")
def alterar_status(pedido_id: int, entrada: StatusEntrada):
    conn = conectar()
    pedido = conn.execute("SELECT id FROM pedidos WHERE id = ?", (pedido_id,)).fetchone()
    if not pedido:
        conn.close()
        raise HTTPException(status_code=404, detail="Pedido não encontrado.")

    conn.execute("UPDATE pedidos SET status = ? WHERE id = ?", (entrada.status, pedido_id))
    conn.commit()
    atualizado = dict(conn.execute("SELECT * FROM pedidos WHERE id = ?", (pedido_id,)).fetchone())
    conn.close()
    return atualizado


app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
