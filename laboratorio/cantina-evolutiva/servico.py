"""Pedido persistente: regras e transação, sem dependência da interface."""
import sqlite3
from datetime import date, datetime
from pathlib import Path
from zoneinfo import ZoneInfo


class ErroPedido(Exception):
    def __init__(self, mensagem: str, status: int = 400):
        super().__init__(mensagem)
        self.status = status


class Cantina:
    def __init__(self, caminho: Path, hoje=None):
        self.caminho = Path(caminho)
        self.hoje = hoje or (lambda: datetime.now(ZoneInfo('America/Sao_Paulo')).date())

    def conectar(self):
        conn = sqlite3.connect(self.caminho, timeout=5, isolation_level=None)
        conn.row_factory = sqlite3.Row
        conn.execute('PRAGMA foreign_keys = ON')
        if conn.execute('PRAGMA foreign_keys').fetchone()[0] != 1:
            conn.close()
            raise RuntimeError('Relacionamentos do banco não foram habilitados.')
        return conn

    def preparar(self):
        self.caminho.parent.mkdir(parents=True, exist_ok=True)
        conn = self.conectar()
        try:
            if not conn.execute("SELECT 1 FROM sqlite_master WHERE name='produto' AND type='table'").fetchone():
                conn.executescript(Path(__file__).with_name('schema-inicial.sql').read_text())
                conn.execute('BEGIN IMMEDIATE')
                try:
                    conn.executemany('INSERT INTO produto VALUES (?,?,?,?)', [
                        (1, 'Água', 300, 20), (2, 'Suco', 600, 15),
                        (3, 'Salgado', 800, 10), (4, 'Sanduíche', 1200, 8),
                        (5, 'Chocolate', 500, 12),
                    ])
                    conn.commit()
                except Exception:
                    conn.rollback()
                    raise
            self._migrar_cupom(conn)
        finally:
            conn.close()

    @staticmethod
    def _migrar_cupom(conn):
        conn.execute('BEGIN IMMEDIATE')
        try:
            versao = conn.execute('PRAGMA user_version').fetchone()[0]
            if versao == 0:
                script = Path(__file__).with_name('migracao-02-cupom.sql').read_text()
                # Este arquivo contém só comandos SQL simples, sem triggers.
                for comando in script.split(';'):
                    if comando.strip():
                        conn.execute(comando)
                conn.execute('INSERT INTO cupom VALUES (?,?,?,?,0)', ('MBB10', 10, 3000, '2099-12-31'))
            elif versao != 2:
                raise RuntimeError('Versão do banco não suportada por esta evolução.')
            conn.commit()
        except Exception:
            conn.rollback()
            raise

    def produtos(self):
        conn = self.conectar()
        try:
            return [dict(r) for r in conn.execute('SELECT * FROM produto ORDER BY id')]
        finally:
            conn.close()

    @staticmethod
    def agrupar(itens):
        if not itens:
            raise ErroPedido('Adicione ao menos um produto ao pedido.')
        quantidades = {}
        for item in itens:
            pid, qtd = item.get('produto_id'), item.get('quantidade')
            if type(pid) is not int or pid < 1:
                raise ErroPedido('Informe um identificador inteiro positivo para o produto.')
            if type(qtd) is not int or not 1 <= qtd <= 10:
                raise ErroPedido('A quantidade deve ser um número inteiro entre 1 e 10.')
            quantidades[pid] = quantidades.get(pid, 0) + qtd
        if any(qtd > 10 for qtd in quantidades.values()):
            raise ErroPedido('Somando os itens, cada produto pode ter no máximo 10 unidades.')
        return quantidades

    def calcular_cupom(self, conn, codigo, subtotal):
        if codigo is None or (type(codigo) is str and not codigo.strip()):
            return None, 0
        if type(codigo) is not str:
            raise ErroPedido('Informe o código do cupom como texto.')
        codigo = codigo.strip().upper()
        cupom = conn.execute('SELECT * FROM cupom WHERE codigo=?', (codigo,)).fetchone()
        if cupom is None:
            raise ErroPedido('Cupom não encontrado.')
        if cupom['utilizado']:
            raise ErroPedido('Este cupom já foi utilizado.', 409)
        try:
            validade = date.fromisoformat(cupom['validade'])
        except ValueError:
            raise ErroPedido('A validade deste cupom precisa ser corrigida no laboratório.')
        if self.hoje() > validade:
            raise ErroPedido('Este cupom está vencido.')
        if subtotal < cupom['minimo_centavos']:
            minimo = cupom['minimo_centavos']
            raise ErroPedido(f'O cupom exige pedido de pelo menos R$ {minimo // 100},{minimo % 100:02d}.')
        # Arredondamento de metade para cima, sempre em centavos inteiros.
        desconto = (subtotal * cupom['percentual'] + 50) // 100
        if not 0 <= desconto <= subtotal:
            raise ErroPedido('O desconto precisa ser corrigido no laboratório.')
        return codigo, desconto

    def registrar(self, itens, cupom=None):
        quantidades = self.agrupar(itens)
        conn = self.conectar()
        try:
            # Serializa as escritas antes de ler os saldos usados na venda.
            conn.execute('BEGIN IMMEDIATE')
            produtos = {}
            for pid, qtd in quantidades.items():
                produto = conn.execute('SELECT * FROM produto WHERE id=?', (pid,)).fetchone()
                if produto is None:
                    raise ErroPedido('Produto não encontrado.', 404)
                if produto['estoque'] < qtd:
                    raise ErroPedido(f"Estoque insuficiente para {produto['nome']}.", 409)
                produtos[pid] = produto
            subtotal = sum(produtos[pid]['preco_centavos'] * qtd for pid, qtd in quantidades.items())
            codigo, desconto = self.calcular_cupom(conn, cupom, subtotal)
            pedido_id = conn.execute('INSERT INTO pedido (cupom_codigo,desconto_centavos) VALUES (?,?)', (codigo, desconto)).lastrowid
            for pid, qtd in quantidades.items():
                atualizado = conn.execute('UPDATE produto SET estoque=estoque-? WHERE id=? AND estoque>=?', (qtd, pid, qtd))
                if atualizado.rowcount != 1:
                    raise ErroPedido('O estoque mudou. Atualize os produtos e confira o pedido.', 409)
                conn.execute('INSERT INTO item_pedido VALUES (?,?,?,?)', (pedido_id, pid, qtd, produtos[pid]['preco_centavos']))
            if codigo:
                usado = conn.execute('UPDATE cupom SET utilizado=1 WHERE codigo=? AND utilizado=0', (codigo,))
                if usado.rowcount != 1:
                    raise ErroPedido('Este cupom já foi utilizado.', 409)
            # Consulta dentro da mesma transação; a resposta representa a venda gravada.
            resultado = self._consultar(conn, pedido_id)
            conn.commit()
            return resultado
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    @staticmethod
    def _consultar(conn, pedido_id):
        row = conn.execute('SELECT * FROM resumo_pedido WHERE id=?', (pedido_id,)).fetchone()
        if row is None:
            raise ErroPedido('Pedido não encontrado.', 404)
        result = dict(row)
        result['total_centavos'] = result['subtotal_centavos'] - result['desconto_centavos']
        result['itens'] = [dict(r) for r in conn.execute('''
            SELECT i.produto_id, p.nome, i.quantidade, i.preco_unitario_centavos
            FROM item_pedido i JOIN produto p ON p.id=i.produto_id
            WHERE i.pedido_id=? ORDER BY i.produto_id
        ''', (pedido_id,))]
        return result

    def consultar(self, pedido_id):
        conn = self.conectar()
        try:
            return self._consultar(conn, pedido_id)
        finally:
            conn.close()
