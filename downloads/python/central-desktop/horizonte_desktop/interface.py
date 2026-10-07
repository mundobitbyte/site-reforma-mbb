import sqlite3
import tkinter as tk
from tkinter import messagebox, ttk

from .regras import PRIORIDADES, criar_atendimento
from .repositorio import Repositorio


class CentralApp:
    def __init__(self, janela: tk.Tk, repositorio: Repositorio) -> None:
        self.janela = janela
        self.repositorio = repositorio
        janela.title("Central Horizonte")
        janela.geometry("760x480")
        janela.minsize(620, 420)
        janela.protocol("WM_DELETE_WINDOW", self.fechar)

        self.estudante = tk.StringVar()
        self.categoria = tk.StringVar()
        self.prioridade = tk.StringVar(value="média")
        self.status = tk.StringVar(value="Preencha o formulário.")

        formulario = ttk.LabelFrame(janela, text="Novo atendimento", padding=16)
        formulario.pack(fill="x", padx=16, pady=16)

        ttk.Label(formulario, text="Estudante").grid(row=0, column=0, sticky="w")
        entrada_estudante = ttk.Entry(formulario, textvariable=self.estudante)
        entrada_estudante.grid(row=1, column=0, sticky="ew", padx=(0, 10))

        ttk.Label(formulario, text="Categoria").grid(row=0, column=1, sticky="w")
        ttk.Entry(formulario, textvariable=self.categoria).grid(
            row=1, column=1, sticky="ew", padx=(0, 10)
        )

        ttk.Label(formulario, text="Prioridade").grid(row=0, column=2, sticky="w")
        ttk.Combobox(
            formulario,
            textvariable=self.prioridade,
            values=PRIORIDADES,
            state="readonly",
        ).grid(row=1, column=2, sticky="ew", padx=(0, 10))

        ttk.Button(formulario, text="Cadastrar", command=self.cadastrar).grid(
            row=1, column=3
        )
        for coluna in range(3):
            formulario.columnconfigure(coluna, weight=1)

        colunas = ("id", "estudante", "categoria", "prioridade")
        self.tabela = ttk.Treeview(janela, columns=colunas, show="headings")
        for coluna, titulo in zip(
            colunas, ("ID", "Estudante", "Categoria", "Prioridade"), strict=True
        ):
            self.tabela.heading(coluna, text=titulo)
        self.tabela.column("id", width=60, stretch=False)
        self.tabela.pack(fill="both", expand=True, padx=16)

        ttk.Label(janela, textvariable=self.status, padding=16).pack(fill="x")
        self.atualizar_tabela()
        entrada_estudante.focus()

    def cadastrar(self) -> None:
        try:
            atendimento = criar_atendimento(
                self.estudante.get(), self.categoria.get(), self.prioridade.get()
            )
            codigo = self.repositorio.adicionar(atendimento)
        except (ValueError, OSError, sqlite3.Error) as erro:
            messagebox.showerror("Não foi possível cadastrar", str(erro))
            self.status.set(f"Cadastro recusado: {erro}")
            return

        self.estudante.set("")
        self.categoria.set("")
        self.status.set(f"Atendimento {codigo} cadastrado.")
        self.atualizar_tabela()

    def atualizar_tabela(self) -> None:
        for item in self.tabela.get_children():
            self.tabela.delete(item)
        for atendimento in self.repositorio.listar():
            self.tabela.insert(
                "",
                "end",
                values=(
                    atendimento.id,
                    atendimento.estudante,
                    atendimento.categoria,
                    atendimento.prioridade,
                ),
            )

    def fechar(self) -> None:
        self.repositorio.fechar()
        self.janela.destroy()
