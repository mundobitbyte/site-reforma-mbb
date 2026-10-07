from backend.app import DB_PATH, preparar_banco


def main() -> None:
    if DB_PATH.exists():
        DB_PATH.unlink()
    preparar_banco()
    print("Dados da Cantina Horizonte restaurados para o estado inicial.")


if __name__ == "__main__":
    main()
