from pathlib import Path
import tkinter as tk

from horizonte_desktop.interface import CentralApp
from horizonte_desktop.repositorio import Repositorio


def main() -> None:
    base = Path(__file__).resolve().parent
    repositorio = Repositorio(base / "dados" / "atendimentos.db")
    janela = tk.Tk()
    CentralApp(janela, repositorio)
    janela.mainloop()


if __name__ == "__main__":
    main()
