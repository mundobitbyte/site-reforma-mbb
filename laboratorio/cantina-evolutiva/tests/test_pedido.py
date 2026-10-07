from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import sys
import sqlite3

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from app import criar_app


@pytest.fixture
def ambiente(tmp_path):
    caminho = tmp_path / 'cantina.sqlite3'
    app = criar_app(caminho)
    with TestClient(app) as client:
        yield client, app.state.cantina, caminho


def enviar(client, *itens):
    return client.post('/api/pedidos', json={'itens': list(itens)})


def estado_banco(cantina):
    conn = cantina.conectar()
    try:
        return (conn.execute('SELECT COUNT(*) FROM pedido').fetchone()[0],
                conn.execute('SELECT COUNT(*) FROM item_pedido').fetchone()[0],
                [tuple(r) for r in conn.execute('SELECT id,estoque FROM produto ORDER BY id')])
    finally:
        conn.close()


def test_fluxo_api_interface_e_persistencia(ambiente):
    client, cantina, caminho = ambiente
    assert client.get('/').status_code == 200
    assert client.get('/app.js').status_code == 200
    assert client.get('/api/produtos').json()[0]['preco_centavos'] == 300
    resposta = enviar(client, {'produto_id': 1, 'quantidade': 2})
    assert resposta.status_code == 201
    pedido = resposta.json()
    assert pedido['total_centavos'] == 600 and pedido['status'] == 'Novo'
    assert client.get('/api/pedidos/1').json()['itens'][0]['quantidade'] == 2
    assert estado_banco(cantina)[2][0] == (1, 18)
    with TestClient(criar_app(caminho)) as reaberto:
        assert reaberto.get('/api/pedidos/1').json()['total_centavos'] == 600
        assert reaberto.get('/api/produtos').json()[0]['estoque'] == 18


@pytest.mark.parametrize('quantidade', [0, -1, 11, 1.5, True, '2'])
def test_tipo_ou_quantidade_invalida_sem_efeitos(ambiente, quantidade):
    client, cantina, _ = ambiente
    antes = estado_banco(cantina)
    resposta = enviar(client, {'produto_id': 1, 'quantidade': quantidade})
    assert resposta.status_code == 422
    assert 'inteiro entre 1 e 10' in resposta.json()['detail']
    assert estado_banco(cantina) == antes


def test_agrupa_repeticao_e_rejeita_soma_excessiva(ambiente):
    client, cantina, _ = ambiente
    item = {'produto_id': 1, 'quantidade': 5}
    result = enviar(client, item, item)
    assert result.status_code == 201
    assert len(result.json()['itens']) == 1 and result.json()['itens'][0]['quantidade'] == 10
    antes = estado_banco(cantina)
    result = enviar(client, item, {'produto_id': 1, 'quantidade': 6})
    assert result.status_code == 400
    assert estado_banco(cantina) == antes


def test_estoque_insuficiente_apos_agrupamento(ambiente):
    client, cantina, _ = ambiente
    antes = estado_banco(cantina)
    result = enviar(client, {'produto_id': 4, 'quantidade': 5}, {'produto_id': 4, 'quantidade': 5})
    assert result.status_code == 409
    assert estado_banco(cantina) == antes


@pytest.mark.parametrize('itens', [[], [{'produto_id': 1, 'quantidade': 1}, {'produto_id': 999, 'quantidade': 1}]])
def test_pedido_invalido_sem_gravacao_parcial(ambiente, itens):
    client, cantina, _ = ambiente
    antes = estado_banco(cantina)
    assert enviar(client, *itens).status_code in (404, 422)
    assert estado_banco(cantina) == antes


def test_falha_durante_gravacao_reverte_tudo(ambiente):
    client, cantina, _ = ambiente
    conn = cantina.conectar()
    conn.execute("CREATE TRIGGER falha_test BEFORE INSERT ON item_pedido WHEN NEW.produto_id=2 BEGIN SELECT RAISE(ABORT,'falha ficticia'); END")
    conn.close()
    antes = estado_banco(cantina)
    response = enviar(client, {'produto_id': 1, 'quantidade': 2}, {'produto_id': 2, 'quantidade': 1})
    assert response.status_code == 503
    assert estado_banco(cantina) == antes


def test_disputa_pelo_ultimo_saldo(ambiente):
    client, cantina, _ = ambiente
    conn = cantina.conectar()
    conn.execute('UPDATE produto SET estoque=1 WHERE id=1')
    conn.close()
    with ThreadPoolExecutor(max_workers=2) as pool:
        responses = list(pool.map(lambda _: enviar(client, {'produto_id': 1, 'quantidade': 1}), range(2)))
    assert sorted(r.status_code for r in responses) == [201, 409]
    count, itens, stocks = estado_banco(cantina)
    assert count == itens == 1 and stocks[0] == (1, 0)


def test_preco_historico_nao_muda(ambiente):
    client, cantina, _ = ambiente
    assert enviar(client, {'produto_id': 1, 'quantidade': 2}).status_code == 201
    conn = cantina.conectar()
    conn.execute('UPDATE produto SET preco_centavos=999 WHERE id=1')
    assert conn.execute('PRAGMA foreign_keys').fetchone()[0] == 1
    with pytest.raises(sqlite3.IntegrityError):
        conn.execute('INSERT INTO item_pedido VALUES (999,999,1,300)')
    conn.close()
    assert client.get('/api/pedidos/1').json()['total_centavos'] == 600


def test_pedido_inexistente_e_campos_desconhecidos(ambiente):
    client, cantina, _ = ambiente
    assert client.get('/api/pedidos/999').status_code == 404
    response = client.post('/api/pedidos', json={'itens': [{'produto_id': 1, 'quantidade': 1}], 'desconto': 100})
    assert response.status_code == 422
    assert 'somente os itens e o cupom opcional' in response.json()['detail']
    assert estado_banco(cantina)[0] == 0
