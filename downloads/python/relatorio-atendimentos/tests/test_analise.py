import tempfile
import unittest
from pathlib import Path

from analisar import carregar_dados, resumir, salvar_produtos


BASE = Path(__file__).resolve().parents[1]


class TestAnalise(unittest.TestCase):
    def test_resumo_preserva_ordem_e_calculos(self) -> None:
        dados = carregar_dados(BASE / "dados" / "atendimentos.csv")
        resumo = resumir(dados)
        self.assertEqual(resumo["prioridade"].tolist(), ["baixa", "média", "alta"])
        self.assertEqual(resumo["quantidade"].tolist(), [4, 4, 4])
        self.assertEqual(resumo["tempo_medio"].tolist(), [11.2, 23.8, 51.5])

    def test_gera_tres_produtos(self) -> None:
        resumo = resumir(carregar_dados(BASE / "dados" / "atendimentos.csv"))
        with tempfile.TemporaryDirectory() as diretorio:
            pasta = Path(diretorio)
            salvar_produtos(resumo, pasta)
            nomes = {caminho.name for caminho in pasta.iterdir()}
        self.assertEqual(nomes, {"resumo.csv", "tempo-medio.png", "conclusao.txt"})

    def test_recusa_coluna_ausente(self) -> None:
        with tempfile.TemporaryDirectory() as diretorio:
            caminho = Path(diretorio) / "incompleto.csv"
            caminho.write_text("id,prioridade\n1,alta\n", encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "colunas ausentes"):
                carregar_dados(caminho)


if __name__ == "__main__":
    unittest.main()
