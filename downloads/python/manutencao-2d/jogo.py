from random import Random

import pygame

from motor import (
    ALTURA,
    LARGURA,
    META,
    TAMANHO_ALERTA,
    TAMANHO_JOGADOR,
    Estado,
    atualizar,
    mover,
    sortear_alerta,
)


FUNDO = "#0b172a"
PAINEL = "#132944"
TEXTO = "#eef7ff"
DESTAQUE = "#69d2b0"
ALERTA = "#ffca58"


def desenhar(tela: pygame.Surface, fonte: pygame.font.Font, estado: Estado) -> None:
    tela.fill(FUNDO)
    pygame.draw.rect(tela, PAINEL, (0, 0, LARGURA, 70))
    placar = fonte.render(
        f"Alertas: {estado.pontos}/{META}     Tempo: {estado.segundos:04.1f}s",
        True,
        TEXTO,
    )
    tela.blit(placar, (24, 21))

    pygame.draw.rect(
        tela,
        ALERTA,
        (estado.alerta_x, estado.alerta_y, TAMANHO_ALERTA, TAMANHO_ALERTA),
        border_radius=5,
    )
    pygame.draw.rect(
        tela,
        DESTAQUE,
        (estado.jogador_x, estado.jogador_y, TAMANHO_JOGADOR, TAMANHO_JOGADOR),
        border_radius=8,
    )

    if estado.terminou:
        mensagem = "Missão concluída!" if estado.venceu else "O tempo terminou."
        linha_1 = fonte.render(mensagem, True, TEXTO)
        linha_2 = fonte.render("Enter reinicia · Esc sai", True, TEXTO)
        caixa = pygame.Rect(190, 170, 420, 120)
        pygame.draw.rect(tela, PAINEL, caixa, border_radius=14)
        tela.blit(linha_1, linha_1.get_rect(center=(400, 210)))
        tela.blit(linha_2, linha_2.get_rect(center=(400, 252)))

    pygame.display.flip()


def main() -> None:
    pygame.init()
    tela = pygame.display.set_mode((LARGURA, ALTURA))
    pygame.display.set_caption("Manutenção 2D — Escola Horizonte")
    relogio = pygame.time.Clock()
    fonte = pygame.font.Font(None, 32)
    sorteador = Random()
    estado = Estado()
    sortear_alerta(estado, sorteador)
    ativo = True

    while ativo:
        delta = relogio.tick(60) / 1000
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                ativo = False
            elif evento.type == pygame.KEYDOWN and evento.key == pygame.K_ESCAPE:
                ativo = False
            elif (
                evento.type == pygame.KEYDOWN
                and evento.key == pygame.K_RETURN
                and estado.terminou
            ):
                estado = Estado()
                sortear_alerta(estado, sorteador)

        teclas = pygame.key.get_pressed()
        horizontal = int(teclas[pygame.K_RIGHT] or teclas[pygame.K_d]) - int(
            teclas[pygame.K_LEFT] or teclas[pygame.K_a]
        )
        vertical = int(teclas[pygame.K_DOWN] or teclas[pygame.K_s]) - int(
            teclas[pygame.K_UP] or teclas[pygame.K_w]
        )
        mover(estado, horizontal, vertical, delta)
        atualizar(estado, delta, sorteador)
        desenhar(tela, fonte, estado)

    pygame.quit()


if __name__ == "__main__":
    main()
