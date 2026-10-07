"""Verifica defeitos de cópia sem alterar páginas, bancos ou navegador.

Da raiz: python -m unittest discover -s laboratorio/percurso-mbb/tests -v
"""
from contextlib import redirect_stdout
import io
import json
from pathlib import Path
import runpy
import unittest
from unittest.mock import patch


BASE = Path(__file__).resolve().parents[1]
VERIFICADOR = BASE / 'verificar_percurso.py'
PAGINA = BASE / 'programacao/01-sequencia.html'
COMANDO = BASE / 'acompanhamento.html'
LER_TEXTO = Path.read_text


class VerificacaoCopia(unittest.TestCase):
    def verificar_mutacao(self, pagina, original, alterado):
        texto = LER_TEXTO(pagina, encoding='utf-8')
        self.assertEqual(texto.count(original), 1)
        modificado = texto.replace(original, alterado)

        def ler(caminho, *args, **kwargs):
            if caminho.resolve() == pagina.resolve():
                return modificado
            return LER_TEXTO(caminho, *args, **kwargs)

        saida = io.StringIO()
        with patch.object(Path, 'read_text', ler), redirect_stdout(saida):
            with self.assertRaises(SystemExit) as resultado:
                runpy.run_path(str(VERIFICADOR), run_name='__main__')
        self.assertEqual(resultado.exception.code, 1)
        return json.loads(saida.getvalue())

    def test_recusa_texto_extra_no_bloco_sem_perder_o_codigo_original(self):
        resultado = self.verificar_mutacao(
            PAGINA, '<pre id="arquivo-01_sequencia-py"><code>',
            '<pre id="arquivo-01_sequencia-py"><code>Texto que não pertence ao arquivo\n',
        )
        self.assertTrue(any(e[1] == 'canonical copy not exact' for e in resultado['erros']))
        self.assertEqual(resultado['codigo_canonico_com_copia_exata'], 47)

    def test_recusa_codigo_visivel_sem_botao_associado(self):
        resultado = self.verificar_mutacao(
            PAGINA, ' data-copy="arquivo-01_sequencia-py"', '',
        )
        self.assertTrue(any(e[1] == 'canonical copy not exact' for e in resultado['erros']))
        self.assertFalse(any(e[1] == 'canonical code absent' for e in resultado['erros']))
        self.assertEqual(resultado['codigo_canonico_com_copia_exata'], 47)

    def test_recusa_botao_com_comando_vazio(self):
        resultado = self.verificar_mutacao(
            COMANDO, 'python laboratorio/percurso-mbb/verificar_percurso.py', '',
        )
        self.assertTrue(any(e[1] == 'copy empty' for e in resultado['erros']))
        self.assertEqual(resultado['codigo_canonico_com_copia_exata'], 48)


if __name__ == '__main__':
    unittest.main()
