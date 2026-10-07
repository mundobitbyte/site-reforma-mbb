import tempfile
import unittest
from pathlib import Path

from organizador import aplicar_plano, criar_plano, normalizar_nome


class TestOrganizador(unittest.TestCase):
    def test_normalizar_nome(self) -> None:
        self.assertEqual(normalizar_nome(" Relatório Final  "), "relatorio-final")

    def test_plano_nao_altera_arquivo(self) -> None:
        with tempfile.TemporaryDirectory() as temporario:
            pasta = Path(temporario)
            origem = pasta / "Relatório Final.TXT"
            origem.write_text("teste", encoding="utf-8")

            plano = criar_plano(pasta)

            self.assertTrue(origem.exists())
            self.assertEqual(plano[0].destino, "relatorio-final.txt")

    def test_aplicar_renomeia_sem_apagar_conteudo(self) -> None:
        with tempfile.TemporaryDirectory() as temporario:
            pasta = Path(temporario)
            (pasta / "Foto Sala.JPG").write_bytes(b"dados-ficticios")
            plano = criar_plano(pasta)

            aplicar_plano(pasta, plano)

            destino = pasta / "foto-sala.jpg"
            self.assertEqual(destino.read_bytes(), b"dados-ficticios")

    def test_destinos_repetidos_sao_recusados(self) -> None:
        with tempfile.TemporaryDirectory() as temporario:
            pasta = Path(temporario)
            (pasta / "Relatório.txt").touch()
            (pasta / "Relatorio.TXT").touch()
            with self.assertRaises(ValueError):
                criar_plano(pasta)


if __name__ == "__main__":
    unittest.main()
