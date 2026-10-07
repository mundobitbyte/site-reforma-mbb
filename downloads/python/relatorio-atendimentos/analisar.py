import argparse
from pathlib import Path

import pandas as pd


COLUNAS = {"id", "categoria", "prioridade", "tempo_min", "resolvido"}
ORDEM_PRIORIDADE = ["baixa", "média", "alta"]


def carregar_dados(caminho: Path) -> pd.DataFrame:
    dados = pd.read_csv(caminho)
    ausentes = COLUNAS.difference(dados.columns)
    if ausentes:
        raise ValueError(f"colunas ausentes: {', '.join(sorted(ausentes))}")

    dados = dados.copy()
    dados["prioridade"] = dados["prioridade"].astype(str).str.strip().str.lower()
    dados["categoria"] = dados["categoria"].astype(str).str.strip()
    dados["tempo_min"] = pd.to_numeric(dados["tempo_min"], errors="raise")

    invalidas = set(dados["prioridade"]).difference(ORDEM_PRIORIDADE)
    if invalidas:
        raise ValueError(f"prioridades inválidas: {', '.join(sorted(invalidas))}")
    if (dados["tempo_min"] < 0).any():
        raise ValueError("tempo_min não pode ser negativo")
    return dados


def resumir(dados: pd.DataFrame) -> pd.DataFrame:
    resumo = (
        dados.groupby("prioridade", observed=True)
        .agg(quantidade=("id", "count"), tempo_medio=("tempo_min", "mean"))
        .reindex(ORDEM_PRIORIDADE)
        .dropna(how="all")
        .reset_index()
    )
    resumo["quantidade"] = resumo["quantidade"].astype(int)
    resumo["tempo_medio"] = resumo["tempo_medio"].round(1)
    return resumo


def salvar_produtos(resumo: pd.DataFrame, pasta: Path) -> None:
    pasta.mkdir(parents=True, exist_ok=True)
    resumo.to_csv(pasta / "resumo.csv", index=False)

    import matplotlib

    matplotlib.use("Agg")
    from matplotlib import pyplot as plt

    figura, eixo = plt.subplots(figsize=(7, 4.5))
    eixo.bar(resumo["prioridade"], resumo["tempo_medio"], color="#2f6f89")
    eixo.set(title="Tempo médio por prioridade", xlabel="Prioridade", ylabel="Minutos")
    eixo.spines[["top", "right"]].set_visible(False)
    figura.tight_layout()
    figura.savefig(pasta / "tempo-medio.png", dpi=160)
    plt.close(figura)

    maior = resumo.loc[resumo["tempo_medio"].idxmax()]
    texto = (
        "Leitura dos dados fictícios\n"
        f"A prioridade com maior tempo médio foi {maior['prioridade']}: "
        f"{maior['tempo_medio']:.1f} minutos.\n"
        "Este resultado descreve a amostra; não demonstra uma causa.\n"
    )
    (pasta / "conclusao.txt").write_text(texto, encoding="utf-8")


def ler_argumentos() -> argparse.Namespace:
    base = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser(description="Analise atendimentos fictícios")
    parser.add_argument("--entrada", type=Path, default=base / "dados" / "atendimentos.csv")
    parser.add_argument("--saida", type=Path, default=base / "saidas")
    return parser.parse_args()


def main() -> None:
    argumentos = ler_argumentos()
    try:
        dados = carregar_dados(argumentos.entrada)
        resumo = resumir(dados)
        salvar_produtos(resumo, argumentos.saida)
    except (OSError, ValueError) as erro:
        raise SystemExit(f"Análise interrompida: {erro}") from erro
    print(resumo.to_string(index=False))
    print(f"Produtos salvos em {argumentos.saida}")


if __name__ == "__main__":
    main()
