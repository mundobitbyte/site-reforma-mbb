from dataclasses import dataclass


@dataclass(frozen=True)
class Atendimento:
    estudante: str
    categoria: str
    prioridade: str
    id: int | None = None
