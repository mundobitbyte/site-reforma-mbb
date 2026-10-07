import argparse
import json
import logging
from pathlib import Path

from organizador import aplicar_plano, criar_plano, serializar_plano


logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
BASE = Path(__file__).resolve().parent
PASTA_ENTRADA = BASE / "laboratorio" / "entrada"
ARQUIVO_PLANO = BASE / "laboratorio" / "plano.json"


def ler_argumentos() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Organizador seguro de laboratório")
    parser.add_argument(
        "--aplicar",
        action="store_true",
        help="aplica o plano; sem esta opção, apenas simula",
    )
    return parser.parse_args()


def main() -> None:
    argumentos = ler_argumentos()
    PASTA_ENTRADA.mkdir(parents=True, exist_ok=True)

    try:
        mudancas = criar_plano(PASTA_ENTRADA)
    except (OSError, ValueError) as erro:
        logging.error("Plano recusado: %s", erro)
        return

    ARQUIVO_PLANO.write_text(
        json.dumps(serializar_plano(mudancas), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    if not mudancas:
        print("Nenhuma mudança necessária.")
        return

    for mudanca in mudancas:
        print(f"{mudanca.origem} -> {mudanca.destino}")

    if not argumentos.aplicar:
        print(f"SIMULAÇÃO: plano salvo em {ARQUIVO_PLANO}")
        return

    try:
        aplicar_plano(PASTA_ENTRADA, mudancas)
    except OSError as erro:
        logging.error("Aplicação interrompida: %s", erro)
        return
    print("Plano aplicado sem exclusões.")


if __name__ == "__main__":
    main()
