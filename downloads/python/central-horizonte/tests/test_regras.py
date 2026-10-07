import unittest

from horizonte.regras import nome_prioridade, validar_prioridade, validar_texto


class TestRegras(unittest.TestCase):
    def test_prioridades_validas(self) -> None:
        self.assertEqual(nome_prioridade(1), "alta")
        self.assertEqual(nome_prioridade(2), "média")
        self.assertEqual(nome_prioridade(3), "baixa")

    def test_prioridade_invalida_gera_erro(self) -> None:
        with self.assertRaises(ValueError):
            validar_prioridade(8)

    def test_texto_e_normalizado(self) -> None:
        self.assertEqual(validar_texto("  NB-07  ", "patrimônio"), "NB-07")

    def test_texto_vazio_gera_erro(self) -> None:
        with self.assertRaises(ValueError):
            validar_texto("   ", "descrição")


if __name__ == "__main__":
    unittest.main()
