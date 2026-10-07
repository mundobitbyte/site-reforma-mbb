PRIORIDADES = {1: "alta", 2: "média", 3: "baixa"}
ESTADOS_VALIDOS = {"aberto", "concluído"}


def validar_texto(valor: str, campo: str) -> str:
    """Normalize texto obrigatório ou sinalize a ausência do campo."""
    normalizado = valor.strip()
    if not normalizado:
        raise ValueError(f"{campo} não pode ficar vazio")
    return normalizado


def validar_prioridade(valor: int) -> int:
    """Retorne uma prioridade aceita pela regra da Central."""
    if valor not in PRIORIDADES:
        raise ValueError("prioridade deve ser 1, 2 ou 3")
    return valor


def validar_estado(valor: str) -> str:
    """Retorne um estado normalizado quando a transição for reconhecida."""
    normalizado = valor.strip().lower()
    if normalizado not in ESTADOS_VALIDOS:
        raise ValueError("estado inválido")
    return normalizado


def nome_prioridade(valor: int) -> str:
    """Converta o nível numérico para o nome apresentado ao usuário."""
    validar_prioridade(valor)
    return PRIORIDADES[valor]
