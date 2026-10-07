import tempfile
import unittest
from pathlib import Path

from horizonte_desktop.regras import criar_atendimento
from horizonte_desktop.repositorio import Repositorio


class TestRegras(unittest.TestCase):
    def test_limpa_e_valida_campos(self) -> None:
        atendimento = criar_atendimento("  Lia  ", " Rede ", "ALTA")
        self.assertEqual(atendimento.estudante, "Lia")
        self.assertEqual(atendimento.categoria, "Rede")
        self.assertEqual(atendimento.prioridade, "alta")

    def test_recusa_nome_curto(self) -> None:
        with self.assertRaisesRegex(ValueError, "pelo menos dois"):
            criar_atendimento("L", "Rede", "alta")


class TestRepositorio(unittest.TestCase):
    def test_persiste_e_lista_atendimento(self) -> None:
        with tempfile.TemporaryDirectory() as diretorio:
            caminho = Path(diretorio) / "teste.db"
            repositorio = Repositorio(caminho)
            codigo = repositorio.adicionar(
                criar_atendimento("Lia", "Rede", "alta")
            )
            repositorio.fechar()

            reaberto = Repositorio(caminho)
            itens = reaberto.listar()
            reaberto.fechar()

        self.assertEqual(codigo, 1)
        self.assertEqual(len(itens), 1)
        self.assertEqual(itens[0].estudante, "Lia")


if __name__ == "__main__":
    unittest.main()
