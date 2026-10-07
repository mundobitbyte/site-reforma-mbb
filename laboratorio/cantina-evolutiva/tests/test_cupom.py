from concurrent.futures import ThreadPoolExecutor
from datetime import date
from pathlib import Path
import sqlite3

import pytest
from fastapi.testclient import TestClient
from test_pedido import ambiente, estado_banco
from app import criar_app


def pedido(client, pid=2, qtd=5, cupom='MBB10'):
    return client.post('/api/pedidos', json={'itens': [{'produto_id': pid, 'quantidade': qtd}], 'cupom': cupom})


def configurar(cantina, sql):
    conn = cantina.conectar()
    try:
        conn.execute(sql)
    finally:
        conn.close()


def usado(cantina):
    conn = cantina.conectar()
    try:
        return conn.execute("SELECT utilizado FROM cupom WHERE codigo='MBB10'").fetchone()[0]
    finally:
        conn.close()


def test_minimo_inclusivo_e_codigo_normalizado(ambiente):
    client, cantina, caminho = ambiente
    result = pedido(client, cupom=' mbb10 ')
    assert result.status_code == 201
    dados = result.json()
    assert dados['subtotal_centavos'] == 3000 and dados['desconto_centavos'] == 300
    assert dados['total_centavos'] == 2700 and dados['cupom_codigo'] == 'MBB10'
    assert usado(cantina) == 1
    with TestClient(criar_app(caminho)) as reaberto:
        assert reaberto.get('/api/pedidos/1').json()['total_centavos'] == 2700
        antes = estado_banco(cantina)
        assert pedido(reaberto).status_code == 409
        assert estado_banco(cantina) == antes


@pytest.mark.parametrize('caso,mensagem', [
    ('minimo', 'pelo menos R$ 30,00'), ('vencido', 'vencido'),
    ('utilizado', 'já foi utilizado'), ('desconhecido', 'não encontrado'),
    ('data_invalida', 'validade'),
])
def test_recusa_sem_pedido_ou_estoque_alterado(ambiente, caso, mensagem):
    client, cantina, _ = ambiente
    qtd, codigo = 5, 'MBB10'
    if caso == 'minimo': qtd = 1
    if caso == 'vencido': configurar(cantina, "UPDATE cupom SET validade='2000-01-01'")
    if caso == 'utilizado': configurar(cantina, 'UPDATE cupom SET utilizado=1')
    if caso == 'desconhecido': codigo = 'INEXISTENTE'
    if caso == 'data_invalida': configurar(cantina, "UPDATE cupom SET validade='sem-data'")
    antes, uso = estado_banco(cantina), usado(cantina)
    result = pedido(client, qtd=qtd, cupom=codigo)
    assert result.status_code in (400, 409)
    assert mensagem in result.json()['detail']
    assert estado_banco(cantina) == antes and usado(cantina) == uso


def test_validade_inclui_dia_final(ambiente):
    client, cantina, _ = ambiente
    cantina.hoje = lambda: date(2026, 10, 7)
    configurar(cantina, "UPDATE cupom SET validade='2026-10-07'")
    assert pedido(client).status_code == 201


def test_estoque_insuficiente_nao_consume_cupom(ambiente):
    client, cantina, _ = ambiente
    assert pedido(client, pid=4, qtd=10).status_code == 409
    assert usado(cantina) == 0 and estado_banco(cantina)[0] == 0


def test_falha_final_reverte_uso_pedido_e_estoque(ambiente):
    client, cantina, _ = ambiente
    configurar(cantina, "CREATE TRIGGER falha_cupom BEFORE UPDATE ON cupom BEGIN SELECT RAISE(ABORT,'falha ficticia'); END")
    antes = estado_banco(cantina)
    assert pedido(client).status_code == 503
    assert estado_banco(cantina) == antes and usado(cantina) == 0


def test_arredondamento_e_snapshot_do_desconto(ambiente):
    client, cantina, _ = ambiente
    configurar(cantina, 'UPDATE produto SET preco_centavos=305 WHERE id=1')
    configurar(cantina, 'UPDATE cupom SET minimo_centavos=0')
    dados = pedido(client, pid=1, qtd=1).json()
    assert dados['desconto_centavos'] == 31 and dados['total_centavos'] == 274
    configurar(cantina, 'UPDATE cupom SET percentual=99')
    assert client.get('/api/pedidos/1').json()['desconto_centavos'] == 31


def test_desconto_integral_nao_produz_total_negativo(ambiente):
    client, cantina, _ = ambiente
    configurar(cantina, 'UPDATE cupom SET percentual=100')
    result = pedido(client)
    assert result.status_code == 201 and result.json()['total_centavos'] == 0


def test_duas_tentativas_disputam_mesmo_cupom(ambiente):
    client, cantina, _ = ambiente
    with ThreadPoolExecutor(max_workers=2) as pool:
        respostas = list(pool.map(lambda _: pedido(client), range(2)))
    assert sorted(r.status_code for r in respostas) == [201, 409]
    assert usado(cantina) == 1 and estado_banco(cantina)[0] == 1
    assert estado_banco(cantina)[2][1] == (2, 10)


def test_migra_banco_primeira_fatia_sem_perder_venda(tmp_path):
    caminho = tmp_path / 'legado.sqlite3'
    conn = sqlite3.connect(caminho)
    conn.executescript(Path(__file__).resolve().parents[1].joinpath('schema-inicial.sql').read_text())
    conn.execute("INSERT INTO produto VALUES (1,'Água',300,18)")
    conn.execute('INSERT INTO pedido(id) VALUES (1)')
    conn.execute('INSERT INTO item_pedido VALUES (1,1,2,300)')
    conn.commit(); conn.close()
    with TestClient(criar_app(caminho)) as client:
        antigo = client.get('/api/pedidos/1').json()
        assert antigo['total_centavos'] == 600 and antigo['desconto_centavos'] == 0
        assert antigo['cupom_codigo'] is None
        assert client.get('/api/produtos').json()[0]['estoque'] == 18


def test_tipo_do_codigo_deve_ser_texto(ambiente):
    client, cantina, _ = ambiente
    assert pedido(client, cupom=10).status_code == 422
    assert estado_banco(cantina)[0] == 0
