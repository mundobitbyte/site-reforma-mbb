from pathlib import Path
import sqlite3

import pytest
from laboratorio_bd import preparar, consultar, transacao, verificar, copiar_banco, conectar_leitura, exportar_sql, restaurar_sql


@pytest.fixture
def pasta(tmp_path):
    preparar(tmp_path)
    return tmp_path


def test_consultas_do_roteiro_reconstroem_dados_e_relacoes(pasta):
    cardapio = consultar('01-cardapio', pasta)
    assert [r['estoque'] for r in cardapio] == [18, 10, 10, 8, 12]
    assert [r['id'] for r in consultar('02-saldo-baixo', pasta)] == [4, 2, 3]
    pedido = consultar('03-pedido-completo', pasta)
    assert pedido == [{'pedido_id': 1, 'status': 'Em preparação', 'nome': 'Água',
                       'quantidade': 2, 'preco_unitario_centavos': 300, 'valor_item_centavos': 600}]
    resumos = consultar('04-resumo-pedidos', pasta)
    assert [r['total_centavos'] for r in resumos] == [600, 2700]
    assert [r['id'] for r in consultar('05-nunca-vendidos', pasta)] == [3, 4, 5]
    vendas = consultar('06-vendas-por-produto', pasta)
    assert [r['unidades_vendidas'] for r in vendas] == [2, 5, 0, 0, 0]
    assert [r['pedidos_com_produto'] for r in vendas] == [1, 1, 0, 0, 0]
    assert sum(r['subtotal_vendido_centavos'] for r in vendas) == 3600
    historico = consultar('07-historico', pasta)
    assert len(historico) == 3 and historico[-1]['estado_novo'] is None
    assert [r['estado_novo'] for r in historico[:2]] == ['Confirmado', 'Em preparação']
    assert consultar('08-cupom', pasta)[0]['utilizado'] == 1


def test_subconsulta_cte_janela_ranking_e_plano(pasta):
    assert consultar('09-sem-venda-exists', pasta) == consultar('05-nunca-vendidos', pasta)
    assert consultar('10-cte', pasta) == [{'id': 2, 'total_centavos': 2700}]
    acumulado = consultar('11-acumulado', pasta)
    assert [r['acumulado_centavos'] for r in acumulado] == [600, 3300]
    ranking = consultar('12-ranking', pasta)
    assert [r['id'] for r in ranking] == [2, 1, 3, 4, 5]
    assert [r['posicao'] for r in ranking] == [1, 2, 3, 3, 3]
    plano = consultar('13-plano-historico', pasta)
    assert any('historico_status_pedido' in r['detail'] for r in plano)


def test_consulta_somente_leitura_e_rejeicao_de_caminho(pasta):
    conn = conectar_leitura(pasta / 'cantina.sqlite3')
    try:
        with pytest.raises(sqlite3.OperationalError):
            conn.execute('UPDATE produto SET estoque=0')
    finally:
        conn.close()
    with pytest.raises(ValueError):
        consultar('../../servico', pasta)
    assert consultar('01-cardapio', pasta)[0]['estoque'] == 18


@pytest.mark.parametrize('modo', ['rollback', 'falha'])
def test_experimento_sem_commit_preserva_banco(pasta, modo):
    antes = consultar('04-resumo-pedidos', pasta)
    resultado = transacao(modo, pasta)
    assert resultado['antes'] == resultado['depois'] == {'estoque_chocolate': 12, 'pedidos': 2}
    assert consultar('04-resumo-pedidos', pasta) == antes
    assert verificar(pasta / 'cantina.sqlite3')['violacoes_fk'] == []


def test_commit_preservado_em_nova_conexao_sem_segunda_baixa(pasta):
    resultado = transacao('commit', pasta)
    assert resultado['depois'] == {'estoque_chocolate': 11, 'pedidos': 3}
    assert consultar('04-resumo-pedidos', pasta)[-1]['total_centavos'] == 500
    assert consultar('01-cardapio', pasta)[-1]['estoque'] == 11


def conteudo(caminho):
    conn = conectar_leitura(caminho)
    try:
        tabelas = ('produto', 'pedido', 'item_pedido', 'cupom', 'historico_status')
        return {t: [tuple(r) for r in conn.execute('SELECT * FROM ' + t + ' ORDER BY 1,2')]
                for t in tabelas}
    finally:
        conn.close()


def test_backup_e_restauracao_recuperam_snapshot_sem_substituir_origem(pasta):
    origem, backup, restaurado = [pasta / n for n in ('cantina.sqlite3', 'backup.sqlite3', 'restaurado.sqlite3')]
    esperado = conteudo(origem)
    assert copiar_banco(origem, backup)['verificacao']['integridade'] == ['ok']
    transacao('commit', pasta)
    assert copiar_banco(backup, restaurado)['verificacao']['contagens']['pedido'] == 2
    assert conteudo(backup) == conteudo(restaurado) == esperado
    assert conteudo(origem) != esperado
    assert verificar(origem)['contagens']['pedido'] == 3


def test_reexecucao_nao_apaga_banco_ou_copias(pasta):
    origem, backup = pasta / 'cantina.sqlite3', pasta / 'backup.sqlite3'
    copiar_banco(origem, backup)
    antes = conteudo(origem), conteudo(backup)
    with pytest.raises(ValueError):
        preparar(pasta)
    with pytest.raises(ValueError):
        copiar_banco(origem, backup)
    assert (conteudo(origem), conteudo(backup)) == antes


def test_ausencia_de_banco_nao_cria_arquivo_vazio(tmp_path):
    with pytest.raises(ValueError):
        conectar_leitura(tmp_path / 'ausente.sqlite3')
    assert not (tmp_path / 'ausente.sqlite3').exists()


def test_dump_sql_recupera_estrutura_registros_e_relacoes(pasta):
    esperado = conteudo(pasta / 'cantina.sqlite3')
    exportar_sql(pasta)
    script = (pasta / 'cantina.sql').read_text()
    assert 'CREATE TABLE produto' in script and 'INSERT INTO "item_pedido"' in script
    assert 'CREATE VIEW resumo_pedido' in script and 'CREATE INDEX historico_status_pedido' in script
    transacao('commit', pasta)
    resultado = restaurar_sql(pasta)
    assert resultado['verificacao']['contagens']['pedido'] == 2
    assert resultado['verificacao']['versao'] == 3
    assert resultado['verificacao']['violacoes_fk'] == []
    assert conteudo(pasta / 'restaurado-sql.sqlite3') == esperado
    assert verificar(pasta / 'cantina.sqlite3')['contagens']['pedido'] == 3


def test_exportacao_e_restauracao_sql_nao_substituem_destinos(pasta):
    exportar_sql(pasta)
    restaurar_sql(pasta)
    script = (pasta / 'cantina.sql').read_bytes()
    dados = conteudo(pasta / 'restaurado-sql.sqlite3')
    with pytest.raises(ValueError):
        exportar_sql(pasta)
    with pytest.raises(ValueError):
        restaurar_sql(pasta)
    assert (pasta / 'cantina.sql').read_bytes() == script
    assert conteudo(pasta / 'restaurado-sql.sqlite3') == dados
