"""Regressão do módulo temporário em caminho acentuado sob padrão cp1252.

Não inicia servidor, navegador ou Node. Da raiz:
python -m unittest discover -s laboratorio/percurso-mbb/web-api/tests -p test_previa_utf8.py -v
"""
import os
from pathlib import Path
import runpy
import subprocess
import tempfile
import unittest
from unittest.mock import patch


ROTEIRO = Path(__file__).with_name('verificar_http_local.py')
GRAVAR = Path.write_text
PASTA_TEMPORARIA = tempfile.TemporaryDirectory


class ModuloConferido(Exception):
    pass


class PreviaUtf8(unittest.TestCase):
    def test_modulo_compila_em_caminho_acentuado_com_padrao_cp1252(self):
        def gravar(caminho, texto, encoding=None, errors=None, **kwargs):
            return GRAVAR(caminho, texto, encoding=encoding or 'cp1252',
                          errors=errors, **kwargs)

        def conferir_modulo(*args, **kwargs):
            pasta = Path(kwargs['env']['PYTHONPATH'].split(os.pathsep)[0])
            arquivo = pasta / 'http_cantina14.py'
            texto = arquivo.read_bytes().decode('utf-8')
            self.assertIn('João', texto)
            compile(texto, str(arquivo), 'exec')
            raise ModuloConferido()

        with PASTA_TEMPORARIA(prefix='mbb-João-') as pasta:
            with patch.object(Path, 'write_text', gravar), \
                 patch.object(tempfile, 'TemporaryDirectory',
                              side_effect=lambda: PASTA_TEMPORARIA(dir=pasta)), \
                 patch.object(subprocess, 'Popen', side_effect=conferir_modulo):
                with self.assertRaises(ModuloConferido):
                    runpy.run_path(str(ROTEIRO), run_name='__main__')


if __name__ == '__main__':
    unittest.main()
