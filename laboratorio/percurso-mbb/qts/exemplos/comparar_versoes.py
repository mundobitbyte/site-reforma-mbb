"""Compara a v1 preservada e a evolução com bancos temporários, sem navegador.

Falhas conhecidas da v1 são observações esperadas do laboratório, não aprovação
de seus requisitos. Cada cenário ganha um banco novo em cada versão.
"""
from contextlib import contextmanager
from datetime import date
import importlib.util
import json
from pathlib import Path
import sqlite3
import sys
import tempfile

from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[4]
sys.path.insert(0, str(ROOT / 'laboratorio/cantina-evolutiva'))
from app import criar_app


def carregar_v1():
    spec = importlib.util.spec_from_file_location(
        'cantina_v1_comparacao', ROOT / 'qts/cantina-horizonte-v1/backend/app.py')
    modulo = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = modulo
    spec.loader.exec_module(modulo)
    return modulo


@contextmanager
def ambiente(versao, pasta):
    banco = Path(pasta) / (versao + '.sqlite3')
    if versao == 'v1':
        modulo = carregar_v1()
        modulo.DB_PATH = banco
        app = modulo.app
    else:
        app = criar_app(banco, hoje=lambda: date(2026, 10, 7))
    with TestClient(app) as client:
        yield client, banco


def snapshot(banco):
    with sqlite3.connect(banco) as conn:
        tabelas = conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").fetchall()
        return {nome: conn.execute('SELECT * FROM "' + nome + '" ORDER BY rowid').fetchall()
                for (nome,) in tabelas}


# Status da v1 são caracterização histórica; os da evolução vêm do contrato.
CASOS = [
    ('Q-01', 'RF-03', 'limite inferior', [1], None, False, 201, 201),
    ('Q-02', 'RF-03', 'limite superior', [10], None, False, 201, 201),
    ('Q-03', 'RF-03', 'zero', [0], None, False, 201, 422),
    ('Q-04', 'RF-03', 'negativa', [-1], None, False, 201, 422),
    ('Q-05', 'RF-03', 'acima do limite', [11], None, False, 400, 422),
    ('Q-06', 'RF-04/RF-08', 'saldo insuficiente', [2], None, True, 201, 409),
    ('Q-07', 'RF-02/RF-03', 'repetição soma 12', [6, 6], None, False, 201, 400),
    ('Q-08', 'RF-05', 'cupom abaixo do mínimo', [2], 'MBB10', False, 201, 400),
    ('Q-09', 'RF-09', 'salto Novo para Entregue', [2], None, False, 200, 409),
]


def executar():
    resultados = []
    for codigo, rf, descricao, quantidades, cupom, saldo_baixo, http_v1, http_evolucao in CASOS:
        for versao, esperado in [('v1', http_v1), ('evolucao', http_evolucao)]:
            with tempfile.TemporaryDirectory(prefix='mbb-qts-') as pasta:
                with ambiente(versao, pasta) as (client, banco):
                    produto = 'produtos' if versao == 'v1' else 'produto'
                    if saldo_baixo:
                        with sqlite3.connect(banco) as conn:
                            conn.execute(f'UPDATE {produto} SET estoque=1 WHERE id=1')
                    antes = snapshot(banco)
                    resposta = client.post('/api/pedidos', json={
                        'itens': [{'produto_id': 1, 'quantidade': q} for q in quantidades],
                        'cupom': cupom})
                    if codigo == 'Q-09':
                        assert resposta.status_code == 201
                        pedido = resposta.json()
                        antes = snapshot(banco)
                        entrada = {'status': 'Entregue'}
                        if versao == 'evolucao':
                            entrada['estado_esperado'] = 'Novo'
                        resposta = client.post(f"/api/pedidos/{pedido['id']}/status", json=entrada)
                    assert resposta.status_code == esperado, (codigo, versao, resposta.text)
                    depois = snapshot(banco)
                    recusou = resposta.status_code >= 400
                    if recusou:
                        assert depois == antes, (codigo, versao, 'recusa alterou o banco')
                    if codigo in ['Q-01', 'Q-02']:
                        with sqlite3.connect(banco) as conn:
                            saldo = conn.execute(f'SELECT estoque FROM {produto} WHERE id=1').fetchone()[0]
                        assert saldo == 20 - quantidades[0]
                        valor = resposta.json()['total' if versao == 'v1' else 'total_centavos']
                        assert valor == quantidades[0] * (3 if versao == 'v1' else 300)
                    observacao = {'id': codigo, 'rf': rf, 'cenario': descricao,
                                  'versao': versao, 'http': resposta.status_code,
                                  'recusou': recusou, 'banco_preservado': antes == depois,
                                  'resposta': resposta.json()}
                    if codigo == 'Q-09':
                        assert client.get('/api/pedidos/1').json()['status'] == (
                            'Entregue' if versao == 'v1' else 'Novo')
                    resultados.append(observacao)
    return {'cenarios': len(CASOS), 'observacoes': len(resultados),
            'bancos_temporarios': True, 'navegador_testado': False,
            'v1_aprovada_para_uso': False, 'resultados': resultados}


if __name__ == '__main__':
    print(json.dumps(executar(), ensure_ascii=False, indent=2))
