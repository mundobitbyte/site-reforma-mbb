import unittest

from regras import subtotal_item, validar_quantidade


class TestRegras(unittest.TestCase):
    def test_limites_inclusivos(self):
        self.assertEqual(validar_quantidade(1), 1)
        self.assertEqual(validar_quantidade(10), 10)

    def test_quantidades_recusadas(self):
        for quantidade in [0, -1, 11, 1.5, True, "2"]:
            with self.subTest(quantidade=quantidade):
                with self.assertRaises(ValueError):
                    validar_quantidade(quantidade)

    def test_preco_conhecido_e_quantidade(self):
        self.assertEqual(subtotal_item(300, 2), 600)
        self.assertEqual(subtotal_item(800, 2), 1600)


if __name__ == "__main__":
    unittest.main()
