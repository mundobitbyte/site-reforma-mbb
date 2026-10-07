"""Regressão da leitura SQL em Windows com codificação padrão cp1252."""
from pathlib import Path
import sqlite3
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from servico import Cantina

BASE = Path(__file__).resolve().parents[1]
LER_TEXTO = Path.read_text


def ler_com_padrao_windows(caminho, encoding=None, errors=None):
    return LER_TEXTO(caminho, encoding=encoding or 'cp1252', errors=errors)


class LeituraSqlUtf8(unittest.TestCase):
    def verificar_sequencia(self, cantina):
        pedido = cantina.registrar([{'produto_id': 1, 'quantidade': 2}])
        for indice, (origem, destino) in enumerate(zip(Cantina.ESTADOS, Cantina.ESTADOS[1:]), 1):
            atual = cantina.alterar_status(pedido['id'], destino, origem)
            self.assertEqual(atual['status'], destino)
            self.assertEqual(len(atual['historico_status']), indice)
            self.assertEqual(atual['historico_status'][-1]['estado_novo'], destino)
            self.assertEqual(atual['total_centavos'], 600)
        reaberta = Cantina(cantina.caminho)
        self.assertEqual(reaberta.consultar(pedido['id']), atual)
        self.assertEqual(reaberta.produtos()[0]['estoque'], 18)

    def test_banco_novo_com_padrao_cp1252_chega_a_entregue(self):
        with tempfile.TemporaryDirectory() as pasta:
            cantina = Cantina(Path(pasta) / 'novo.sqlite3')
            with patch.object(Path, 'read_text', ler_com_padrao_windows):
                cantina.preparar()
                self.verificar_sequencia(cantina)

    def test_migracao_v2_com_padrao_cp1252_preserva_acentos_no_historico(self):
        with tempfile.TemporaryDirectory() as pasta:
            banco = Path(pasta) / 'v2.sqlite3'
            with sqlite3.connect(banco) as conn:
                conn.executescript((BASE / 'schema-inicial.sql').read_text(encoding='utf-8'))
                conn.executescript((BASE / 'migracao-02-cupom.sql').read_text(encoding='utf-8'))
                conn.execute("INSERT INTO produto VALUES (1, 'Água', 300, 20)")
            cantina = Cantina(banco)
            with patch.object(Path, 'read_text', ler_com_padrao_windows):
                cantina.preparar()
                self.verificar_sequencia(cantina)


if __name__ == '__main__':
    unittest.main()
