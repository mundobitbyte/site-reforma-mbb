"""Evidências da nova interface; todos os bancos são temporários."""
import json
from pathlib import Path
import sys

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from servico import Cantina
from terminal import main


def executar(capsys, pasta, *args):
    codigo = main(list(args), pasta=pasta)
    return codigo, capsys.readouterr().out


def test_sem_preparar_nao_cria_banco(tmp_path, capsys):
    codigo, saida = executar(capsys, tmp_path, 'produtos')
    assert codigo == 1 and 'Primeiro execute' in saida
    assert not (tmp_path / 'cantina.sqlite3').exists()


def test_preparar_recusa_repeticao_sem_perder_venda(tmp_path, capsys):
    assert executar(capsys, tmp_path, 'preparar')[0] == 0
    assert executar(capsys, tmp_path, 'registrar', '--item', '1:2')[0] == 0
    codigo, saida = executar(capsys, tmp_path, 'preparar')
    assert codigo == 1 and 'não os reinicia' in saida
    codigo, saida = executar(capsys, tmp_path, 'consultar', '1')
    assert codigo == 0 and json.loads(saida)['total_centavos'] == 600
    assert Cantina(tmp_path / 'cantina.sqlite3').produtos()[0]['estoque'] == 18


def test_fluxo_consolida_reabre_e_avanca(tmp_path, capsys):
    assert executar(capsys, tmp_path, 'preparar')[0] == 0
    codigo, saida = executar(capsys, tmp_path, 'registrar', '--item', '1:2', '--item', '1:3')
    pedido = json.loads(saida)
    assert codigo == 0 and len(pedido['itens']) == 1
    assert pedido['itens'][0]['quantidade'] == 5 and pedido['total_centavos'] == 1500
    codigo, saida = executar(capsys, tmp_path, 'consultar', str(pedido['id']))
    assert codigo == 0 and json.loads(saida)['status'] == 'Novo'
    codigo, saida = executar(capsys, tmp_path, 'avancar', '1', '--estado-esperado', 'Novo')
    assert codigo == 0 and json.loads(saida)['status'] == 'Confirmado'
    codigo, saida = executar(capsys, tmp_path, 'avancar', '1', '--estado-esperado', 'Novo')
    assert codigo == 1 and 'mudou' in saida
    salvo = Cantina(tmp_path / 'cantina.sqlite3').consultar(1)
    assert salvo['status'] == 'Confirmado' and len(salvo['historico_status']) == 1


@pytest.mark.parametrize('itens', [
    ['--item', '1:0'], ['--item', '1:11'], ['--item', '999:1'],
    ['--item', '4:9'], ['--item', '1:6', '--item', '1:5'],
])
def test_recusa_sem_pedido_ou_baixa(tmp_path, capsys, itens):
    assert executar(capsys, tmp_path, 'preparar')[0] == 0
    cantina = Cantina(tmp_path / 'cantina.sqlite3')
    antes = cantina.produtos()
    assert executar(capsys, tmp_path, 'registrar', *itens)[0] == 1
    assert cantina.produtos() == antes
    conn = cantina.conectar()
    try:
        assert conn.execute('SELECT COUNT(*) FROM pedido').fetchone()[0] == 0
    finally:
        conn.close()


@pytest.mark.parametrize('texto', ['1:2.5', 'agua:2', '1:2:3'])
def test_argumento_invalido_nao_cria_banco(tmp_path, capsys, texto):
    with pytest.raises(SystemExit) as erro:
        main(['registrar', '--item', texto], pasta=tmp_path)
    assert erro.value.code == 2
    assert not (tmp_path / 'cantina.sqlite3').exists()


def test_cupom_e_total_persistido(tmp_path, capsys):
    assert executar(capsys, tmp_path, 'preparar')[0] == 0
    codigo, saida = executar(capsys, tmp_path, 'registrar', '--item', '2:5', '--cupom', ' mbb10 ')
    pedido = json.loads(saida)
    assert codigo == 0 and pedido['desconto_centavos'] == 300 and pedido['total_centavos'] == 2700
    assert executar(capsys, tmp_path, 'registrar', '--item', '2:5', '--cupom', 'MBB10')[0] == 1
    assert Cantina(tmp_path / 'cantina.sqlite3').produtos()[1]['estoque'] == 10


def test_entregue_e_pedido_ausente(tmp_path, capsys):
    assert executar(capsys, tmp_path, 'preparar')[0] == 0
    assert executar(capsys, tmp_path, 'consultar', '999')[0] == 1
    assert executar(capsys, tmp_path, 'registrar', '--item', '1:1')[0] == 0
    for estado in ['Novo', 'Confirmado', 'Em preparação', 'Pronto']:
        assert executar(capsys, tmp_path, 'avancar', '1', '--estado-esperado', estado)[0] == 0
    assert executar(capsys, tmp_path, 'avancar', '1', '--estado-esperado', 'Entregue')[0] == 1
    pedido = Cantina(tmp_path / 'cantina.sqlite3').consultar(1)
    assert len(pedido['historico_status']) == 4
    assert Cantina(tmp_path / 'cantina.sqlite3').produtos()[0]['estoque'] == 19
