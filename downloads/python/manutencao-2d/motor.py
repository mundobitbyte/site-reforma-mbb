from dataclasses import dataclass
from random import Random


LARGURA = 800
ALTURA = 450
TAMANHO_JOGADOR = 34
TAMANHO_ALERTA = 24
META = 8


@dataclass
class Estado:
    jogador_x: float = 80
    jogador_y: float = 210
    alerta_x: float = 620
    alerta_y: float = 210
    pontos: int = 0
    segundos: float = 60.0

    @property
    def terminou(self) -> bool:
        return self.pontos >= META or self.segundos <= 0

    @property
    def venceu(self) -> bool:
        return self.pontos >= META


def limitar(valor: float, minimo: float, maximo: float) -> float:
    return max(minimo, min(valor, maximo))


def mover(estado: Estado, horizontal: float, vertical: float, delta: float) -> None:
    if estado.terminou:
        return
    velocidade = 240
    estado.jogador_x = limitar(
        estado.jogador_x + horizontal * velocidade * delta,
        0,
        LARGURA - TAMANHO_JOGADOR,
    )
    estado.jogador_y = limitar(
        estado.jogador_y + vertical * velocidade * delta,
        70,
        ALTURA - TAMANHO_JOGADOR,
    )


def colidem(estado: Estado) -> bool:
    return (
        estado.jogador_x < estado.alerta_x + TAMANHO_ALERTA
        and estado.jogador_x + TAMANHO_JOGADOR > estado.alerta_x
        and estado.jogador_y < estado.alerta_y + TAMANHO_ALERTA
        and estado.jogador_y + TAMANHO_JOGADOR > estado.alerta_y
    )


def sortear_alerta(estado: Estado, sorteador: Random) -> None:
    for _ in range(100):
        estado.alerta_x = sorteador.randint(30, LARGURA - TAMANHO_ALERTA - 30)
        estado.alerta_y = sorteador.randint(90, ALTURA - TAMANHO_ALERTA - 30)
        if not colidem(estado):
            return
    raise RuntimeError("não foi possível posicionar um alerta livre")


def atualizar(estado: Estado, delta: float, sorteador: Random) -> None:
    if estado.terminou:
        return
    estado.segundos = max(0.0, estado.segundos - delta)
    if colidem(estado):
        estado.pontos += 1
        if estado.pontos < META:
            sortear_alerta(estado, sorteador)
