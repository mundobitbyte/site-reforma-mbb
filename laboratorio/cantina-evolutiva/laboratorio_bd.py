"""Práticas de BD no mesmo schema/serviço da Cantina, em cópia didática própria."""
import argparse
import json
from pathlib import Path
import sqlite3

from servico import Cantina

BASE = Path(__file__).resolve().parent
PASTA = BASE / 'dados' / 'bd-didatico'
SQL = BASE.parent / 'percurso-mbb' / 'banco-de-dados' / 'sql'


def conectar_leitura(caminho):
    if not caminho.is_file():
        raise ValueError('Banco didático ausente. Execute preparar primeiro.')
    conn = sqlite3.connect(caminho.resolve().as_uri() + '?mode=ro', uri=True)
    conn.row_factory = sqlite3.Row
    conn.execute('PRAGMA query_only = ON')
    return conn


def preparar(pasta=PASTA):
    pasta.mkdir(parents=True, exist_ok=True)
    caminho = pasta / 'cantina.sqlite3'
    if caminho.exists():
        raise ValueError('O banco didático já existe; nenhum dado foi apagado ou reiniciado.')
    cantina = Cantina(caminho)
    cantina.preparar()
    primeiro = cantina.registrar([{'produto_id': 1, 'quantidade': 2}])
    cantina.registrar([{'produto_id': 2, 'quantidade': 5}], 'MBB10')
    cantina.alterar_status(primeiro['id'], 'Confirmado', 'Novo')
    cantina.alterar_status(primeiro['id'], 'Em preparação', 'Confirmado')
    return {'resultado': 'Banco didático criado pelo mesmo serviço da aplicação.',
            'banco': str(caminho), 'pedidos_iniciais': 2}


def consultar(nome, pasta=PASTA):
    # Apenas arquivos de consulta conhecidos; não recebe caminho arbitrário.
    nomes = [p.stem for p in SQL.glob('*.sql')]
    if nome not in nomes:
        raise ValueError('Escolha uma das consultas oferecidas pelo roteiro.')
    conn = conectar_leitura(pasta / 'cantina.sqlite3')
    try:
        return [dict(r) for r in conn.execute((SQL / (nome + '.sql')).read_text())]
    finally:
        conn.close()


def saldo_e_pedidos(conn):
    return {'estoque_chocolate': conn.execute('SELECT estoque FROM produto WHERE id=5').fetchone()[0],
            'pedidos': conn.execute('SELECT COUNT(*) FROM pedido').fetchone()[0]}


def transacao(modo, pasta=PASTA):
    if modo not in ('commit', 'rollback', 'falha'):
        raise ValueError('Modo de transação desconhecido.')
    caminho = pasta / 'cantina.sqlite3'
    if not caminho.is_file():
        raise ValueError('Banco didático ausente. Execute preparar primeiro.')
    conn = Cantina(caminho).conectar()
    try:
        antes = saldo_e_pedidos(conn)
        conn.execute('BEGIN IMMEDIATE')
        produto = conn.execute('SELECT preco_centavos FROM produto WHERE id=5').fetchone()
        baixado = conn.execute('UPDATE produto SET estoque=estoque-1 WHERE id=5 AND estoque>=1')
        if baixado.rowcount != 1:
            raise ValueError('Sem chocolate para esta experiência; nenhuma venda foi registrada.')
        pid = conn.execute('INSERT INTO pedido DEFAULT VALUES').lastrowid
        conn.execute('INSERT INTO item_pedido VALUES (?,?,?,?)', (pid, 5, 1, produto['preco_centavos']))
        if modo == 'falha':
            # Falha deliberada por produto inexistente, depois da baixa e do primeiro item.
            try:
                conn.execute('INSERT INTO item_pedido VALUES (?,?,?,?)', (pid, 9999, 1, 100))
            except sqlite3.IntegrityError as erro:
                if 'FOREIGN KEY' not in str(erro):
                    raise
                conn.rollback()
                return {'resultado': 'Falha esperada de FK; transação revertida.',
                        'antes': antes, 'depois': saldo_e_pedidos(conn)}
            raise RuntimeError('A FK não bloqueou o item inválido.')
        durante = saldo_e_pedidos(conn)
        if modo == 'commit':
            conn.commit()
        else:
            conn.rollback()
        return {'resultado': modo.upper(), 'antes': antes, 'durante': durante,
                'depois': saldo_e_pedidos(conn)}
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def verificar(caminho):
    conn = conectar_leitura(caminho)
    try:
        integridade = [r[0] for r in conn.execute('PRAGMA integrity_check')]
        fks = [tuple(r) for r in conn.execute('PRAGMA foreign_key_check')]
        if integridade != ['ok'] or fks:
            raise ValueError('A verificação encontrou problema de integridade no banco didático.')
        return {'integridade': integridade, 'violacoes_fk': fks,
                'versao': conn.execute('PRAGMA user_version').fetchone()[0],
                'contagens': {t: conn.execute('SELECT COUNT(*) FROM ' + t).fetchone()[0]
                             for t in ('produto', 'pedido', 'item_pedido', 'cupom', 'historico_status')}}
    finally:
        conn.close()


def copiar_banco(origem, destino):
    if destino.exists():
        raise ValueError('Destino já existe; nenhuma cópia anterior foi substituída.')
    fonte = conectar_leitura(origem)
    copia = None
    try:
        copia = sqlite3.connect(destino)
        fonte.backup(copia)
    except Exception:
        if copia is not None:
            copia.close()
            copia = None
            destino.unlink(missing_ok=True)
        raise
    finally:
        fonte.close()
        if copia is not None:
            copia.close()
    return {'destino': str(destino), 'verificacao': verificar(destino)}


def exportar_sql(pasta=PASTA):
    destino = pasta / 'cantina.sql'
    conn = conectar_leitura(pasta / 'cantina.sqlite3')
    try:
        conn.execute('BEGIN')
        with destino.open('x', encoding='utf-8') as arquivo:
            arquivo.write('-- Exportação didática SQLite: estrutura e registros da Cantina.\n')
            arquivo.write('-- Restaurar somente em banco novo, conforme o roteiro.\n')
            for linha in conn.iterdump():
                arquivo.write(linha + '\n')
            arquivo.write('PRAGMA user_version = ' + str(conn.execute('PRAGMA user_version').fetchone()[0]) + ';\n')
    except FileExistsError:
        raise ValueError('Exportação já existe; nenhum script anterior foi substituído.')
    finally:
        conn.close()
    return {'arquivo': str(destino), 'conteudo': 'Estrutura e registros; não inclui contas MySQL ou ambiente da máquina.'}


def restaurar_sql(pasta=PASTA):
    origem, destino = pasta / 'cantina.sql', pasta / 'restaurado-sql.sqlite3'
    if not origem.is_file():
        raise ValueError('Exportação SQL ausente. Execute exportar primeiro.')
    if destino.exists():
        raise ValueError('Destino SQL já existe; nenhum banco anterior foi substituído.')
    # O dump próprio pode inserir filhos antes dos pais. Valida FK ao final.
    conn = sqlite3.connect(destino)
    try:
        conn.executescript(origem.read_text(encoding='utf-8'))
        conn.execute('PRAGMA foreign_keys = ON')
        if conn.execute('PRAGMA foreign_keys').fetchone()[0] != 1:
            raise ValueError('A conexão de restauração não habilitou FK.')
    except Exception:
        conn.close()
        destino.unlink(missing_ok=True)
        raise
    else:
        conn.close()
    return {'destino': str(destino), 'verificacao': verificar(destino)}


def main():
    consultas = sorted(p.stem for p in SQL.glob('*.sql'))
    parser = argparse.ArgumentParser(description='Banco didático da Cantina; não usa o banco da aplicação.')
    subs = parser.add_subparsers(dest='acao', required=True)
    subs.add_parser('preparar')
    consulta = subs.add_parser('consultar')
    consulta.add_argument('nome', choices=consultas)
    experimento = subs.add_parser('transacao')
    experimento.add_argument('modo', choices=['commit', 'rollback', 'falha'])
    subs.add_parser('verificar')
    subs.add_parser('backup')
    subs.add_parser('restaurar')
    subs.add_parser('exportar')
    subs.add_parser('restaurar-sql')
    args = parser.parse_args()
    try:
        if args.acao == 'preparar': resultado = preparar()
        elif args.acao == 'consultar': resultado = consultar(args.nome)
        elif args.acao == 'transacao': resultado = transacao(args.modo)
        elif args.acao == 'verificar': resultado = verificar(PASTA / 'cantina.sqlite3')
        elif args.acao == 'backup': resultado = copiar_banco(PASTA / 'cantina.sqlite3', PASTA / 'backup.sqlite3')
        elif args.acao == 'restaurar': resultado = copiar_banco(PASTA / 'backup.sqlite3', PASTA / 'restaurado.sqlite3')
        elif args.acao == 'exportar': resultado = exportar_sql()
        else: resultado = restaurar_sql()
    except (ValueError, sqlite3.Error) as erro:
        parser.exit(1, str(erro) + '\n')
    print(json.dumps(resultado, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
