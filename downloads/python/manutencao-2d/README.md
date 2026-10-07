# Manutenção 2D

Jogo pequeno e completo com Pygame. A missão é coletar alertas de manutenção no
laboratório antes que o tempo termine. Não há imagens ou sons externos: os
elementos são desenhados pelo próprio programa.

## Preparar e jogar

```bash
python -m venv .venv
```

Ative o ambiente conforme seu sistema e execute:

```bash
python -m pip install -r requirements.txt
python jogo.py
```

Use as setas ou `WASD`. Colete oito alertas em 60 segundos. Ao terminar,
pressione `Enter` para reiniciar ou `Esc` para sair.

## Testar a lógica sem abrir janela

```bash
python -m unittest -v
```

`motor.py` não importa Pygame. Essa separação permite testar movimento,
limites, colisão, pontuação e vitória sem depender da interface gráfica.
