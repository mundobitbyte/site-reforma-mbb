from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import sqlite3

import pytest
from fastapi.testclient import TestClient
from app import criar_app
from test_pedido import ambiente, estado_banco


# Oráculo RF-09 do documento original, incluindo o estado final.
SEQUENCIA = ['Novo', 'Confirmado', 'Em preparação', 'Pronto', 'Entregue']


def registrar(client):
    resposta = client.post('/api/pedidos', json={
        'itens': [{'produto_id': 2, 'quantidade': 5}], 'cupom': 'MBB10',
    })
    assert resposta.status_code == 201
    return resposta.json()


def avancar(client, destino, esperado, pid=1):
    return client.post(f'/api/pedidos/{pid}/status', json={
        'status': destino, 'estado_esperado': esperado,
    })


def chegar(client, destino):
    for origem, proximo in zip(SEQUENCIA, SEQUENCIA[1:]):
        if origem == destino:
            break
        assert avancar(client, proximo, origem).status_code == 200


def snapshot(client, cantina):
    conn = cantina.conectar()
    try:
        uso = conn.execute('SELECT codigo,utilizado FROM cupom ORDER BY codigo').fetchall()
        return client.get('/api/pedidos/1').json(), estado_banco(cantina), [tuple(r) for r in uso]
    finally:
        conn.close()


def test_sequencia_completa_historico_reabertura_e_valores_preservados(ambiente):
    client, cantina, caminho = ambiente
    inicial = registrar(client)
    estoque = estado_banco(cantina)
    assert inicial['historico_status'] == [] and inicial['proximo_status'] == 'Confirmado'
    for indice, (origem, destino) in enumerate(zip(SEQUENCIA, SEQUENCIA[1:]), 1):
        resposta = avancar(client, destino, origem)
        assert resposta.status_code == 200
        atual = resposta.json()
        assert atual['status'] == destino
        assert len(atual['historico_status']) == indice
        assert atual['historico_status'][-1]['estado_anterior'] == origem
        assert atual['historico_status'][-1]['estado_novo'] == destino
        assert atual['historico_status'][-1]['alterado_em']
        for campo in ('itens', 'subtotal_centavos', 'desconto_centavos', 'total_centavos', 'cupom_codigo'):
            assert atual[campo] == inicial[campo]
        assert estado_banco(cantina) == estoque
    assert atual['proximo_status'] is None
    with TestClient(criar_app(caminho)) as reaberto:
        assert reaberto.get('/api/pedidos/1').json() == atual


@pytest.mark.parametrize('origem,destino', [
    (origem, destino)
    for indice, origem in enumerate(SEQUENCIA)
    for destino in SEQUENCIA
    if indice == len(SEQUENCIA) - 1 or destino != SEQUENCIA[indice + 1]
])
def test_recusa_salto_retorno_repeticao_e_saida_de_entregue(ambiente, origem, destino):
    client, cantina, _ = ambiente
    registrar(client)
    chegar(client, origem)
    antes = snapshot(client, cantina)
    resposta = avancar(client, destino, origem)
    assert resposta.status_code == 409
    assert resposta.json()['detail']
    assert snapshot(client, cantina) == antes


def test_consulta_desatualizada_nao_avanca_mais_uma_etapa(ambiente):
    client, cantina, _ = ambiente
    registrar(client)
    assert avancar(client, 'Confirmado', 'Novo').status_code == 200
    antes = snapshot(client, cantina)
    resposta = avancar(client, 'Em preparação', 'Novo')
    assert resposta.status_code == 409 and 'Consulte novamente' in resposta.json()['detail']
    assert snapshot(client, cantina) == antes


@pytest.mark.parametrize('entrada', [
    {'status': 'Cancelado', 'estado_esperado': 'Novo'},
    {'status': 'Confirmado', 'estado_esperado': 'Desconhecido'},
])
def test_estado_desconhecido_recusado(ambiente, entrada):
    client, cantina, _ = ambiente
    registrar(client)
    antes = snapshot(client, cantina)
    assert client.post('/api/pedidos/1/status', json=entrada).status_code == 400
    assert snapshot(client, cantina) == antes


@pytest.mark.parametrize('entrada', [
    {'status': 'Confirmado'},
    {'status': 1, 'estado_esperado': 'Novo'},
    {'status': 'Confirmado', 'estado_esperado': True},
    {'status': 'Confirmado', 'estado_esperado': 'Novo', 'total_centavos': 0},
])
def test_contrato_de_entrada_nao_aceita_coercao_ou_campos_extras(ambiente, entrada):
    client, cantina, _ = ambiente
    registrar(client)
    antes = snapshot(client, cantina)
    resposta = client.post('/api/pedidos/1/status', json=entrada)
    assert resposta.status_code == 422 and 'ambos como texto' in resposta.json()['detail']
    assert snapshot(client, cantina) == antes


def test_pedido_inexistente(ambiente):
    client, cantina, _ = ambiente
    assert avancar(client, 'Confirmado', 'Novo', pid=999).status_code == 404
    assert estado_banco(cantina)[0] == 0


def test_duas_tentativas_disputam_mesmo_avanco(ambiente):
    client, cantina, _ = ambiente
    registrar(client)
    antes = estado_banco(cantina)
    with ThreadPoolExecutor(max_workers=2) as pool:
        respostas = list(pool.map(lambda _: avancar(client, 'Confirmado', 'Novo'), range(2)))
    assert sorted(r.status_code for r in respostas) == [200, 409]
    atual = client.get('/api/pedidos/1').json()
    assert atual['status'] == 'Confirmado' and len(atual['historico_status']) == 1
    assert estado_banco(cantina) == antes


def test_falha_de_historico_reverte_mudanca_de_status(ambiente):
    client, cantina, _ = ambiente
    registrar(client)
    conn = cantina.conectar()
    conn.execute("CREATE TRIGGER falha_historico BEFORE INSERT ON historico_status BEGIN SELECT RAISE(ABORT,'falha ficticia'); END")
    conn.close()
    antes = snapshot(client, cantina)
    assert avancar(client, 'Confirmado', 'Novo').status_code == 503
    assert snapshot(client, cantina) == antes


def test_migracao_preserva_pedido_v2_sem_inventar_historico(tmp_path):
    caminho = tmp_path / 'versao2.sqlite3'
    base = Path(__file__).resolve().parents[1]
    conn = sqlite3.connect(caminho)
    conn.executescript(base.joinpath('schema-inicial.sql').read_text(encoding='utf-8'))
    conn.executescript(base.joinpath('migracao-02-cupom.sql').read_text(encoding='utf-8'))
    conn.execute("INSERT INTO produto VALUES (1,'Água',300,18)")
    conn.execute("INSERT INTO cupom VALUES ('MBB10',10,0,'2099-12-31',1)")
    conn.execute("INSERT INTO pedido(id,status,cupom_codigo,desconto_centavos) VALUES (1,'Confirmado','MBB10',60)")
    conn.execute('INSERT INTO item_pedido VALUES (1,1,2,300)')
    conn.commit(); conn.close()
    with TestClient(criar_app(caminho)) as client:
        antigo = client.get('/api/pedidos/1').json()
        assert antigo['status'] == 'Confirmado' and antigo['historico_status'] == []
        assert antigo['total_centavos'] == 540 and antigo['desconto_centavos'] == 60
        assert client.get('/api/produtos').json()[0]['estoque'] == 18
        assert avancar(client, 'Em preparação', 'Confirmado').status_code == 200
    with TestClient(criar_app(caminho)) as reaberto:
        assert len(reaberto.get('/api/pedidos/1').json()['historico_status']) == 1
        conn = reaberto.app.state.cantina.conectar()
        assert conn.execute('PRAGMA user_version').fetchone()[0] == 3
        assert conn.execute('SELECT utilizado FROM cupom').fetchone()[0] == 1
        conn.close()


def test_historico_exige_pedido_e_transicao_conhecidos(ambiente):
    client, cantina, _ = ambiente
    registrar(client)
    conn = cantina.conectar()
    try:
        with pytest.raises(sqlite3.IntegrityError):
            conn.execute("INSERT INTO historico_status(pedido_id,estado_anterior,estado_novo) VALUES (999,'Novo','Confirmado')")
        with pytest.raises(sqlite3.IntegrityError):
            conn.execute("INSERT INTO historico_status(pedido_id,estado_anterior,estado_novo) VALUES (1,'Novo','Entregue')")
    finally:
        conn.close()
