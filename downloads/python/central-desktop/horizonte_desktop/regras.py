from .modelos import Atendimento


PRIORIDADES = ("baixa", "média", "alta")


def criar_atendimento(
    estudante: str,
    categoria: str,
    prioridade: str,
) -> Atendimento:
    """Valide texto vindo da interface e construa um atendimento."""
    estudante_limpo = estudante.strip()
    categoria_limpa = categoria.strip()
    prioridade_limpa = prioridade.strip().lower()

    if len(estudante_limpo) < 2:
        raise ValueError("informe um nome com pelo menos dois caracteres")
    if not categoria_limpa:
        raise ValueError("informe a categoria")
    if prioridade_limpa not in PRIORIDADES:
        raise ValueError("escolha baixa, média ou alta")

    return Atendimento(estudante_limpo, categoria_limpa, prioridade_limpa)
