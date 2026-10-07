import re
import unicodedata
from dataclasses import asdict, dataclass
from pathlib import Path


@dataclass(frozen=True)
class Mudanca:
    origem: str
    destino: str


def normalizar_nome(nome: str) -> str:
    """Produza um nome simples sem alterar a extensão recebida separadamente."""
    sem_acentos = "".join(
        caractere
        for caractere in unicodedata.normalize("NFD", nome)
        if unicodedata.category(caractere) != "Mn"
    )
    minusculo = sem_acentos.lower().strip()
    return re.sub(r"[^a-z0-9]+", "-", minusculo).strip("-") or "arquivo"


def criar_plano(pasta: Path) -> list[Mudanca]:
    """Calcule mudanças sem tocar nos arquivos."""
    mudancas = []
    destinos = set()

    for caminho in sorted(pasta.iterdir()):
        if not caminho.is_file():
            continue
        destino = f"{normalizar_nome(caminho.stem)}{caminho.suffix.lower()}"
        if destino in destinos:
            raise ValueError(f"dois arquivos produziriam o destino {destino}")
        destinos.add(destino)
        if caminho.name != destino:
            mudancas.append(Mudanca(caminho.name, destino))

    for mudanca in mudancas:
        alvo = pasta / mudanca.destino
        if alvo.exists():
            raise FileExistsError(f"destino já existe: {mudanca.destino}")
    return mudancas


def aplicar_plano(pasta: Path, mudancas: list[Mudanca]) -> None:
    """Aplique um plano previamente validado, sem sobrescrever destinos."""
    for mudanca in mudancas:
        origem = pasta / mudanca.origem
        destino = pasta / mudanca.destino
        if not origem.is_file():
            raise FileNotFoundError(f"origem não encontrada: {origem.name}")
        if destino.exists():
            raise FileExistsError(f"destino já existe: {destino.name}")

    for mudanca in mudancas:
        origem = pasta / mudanca.origem
        destino = pasta / mudanca.destino
        origem.rename(destino)


def serializar_plano(mudancas: list[Mudanca]) -> list[dict[str, str]]:
    return [asdict(mudanca) for mudanca in mudancas]
