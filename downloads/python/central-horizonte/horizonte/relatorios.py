from .modelos import Atendimento
from .regras import nome_prioridade


def linha_atendimento(atendimento: Atendimento) -> str:
    """Produza uma linha legível sem realizar entrada ou persistência."""
    return (
        f"#{atendimento.identificador} | {atendimento.patrimonio} | "
        f"{nome_prioridade(atendimento.prioridade)} | {atendimento.estado} | "
        f"{atendimento.descricao}"
    )
