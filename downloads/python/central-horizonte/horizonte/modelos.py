from dataclasses import dataclass


@dataclass
class Atendimento:
    """Represente um atendimento persistido ou pronto para persistir."""

    patrimonio: str
    descricao: str
    prioridade: int
    estado: str = "aberto"
    identificador: int | None = None
