import sqlite3
from pathlib import Path

from .modelos import Atendimento


class Repositorio:
    def __init__(self, caminho: str | Path) -> None:
        caminho = Path(caminho)
        caminho.parent.mkdir(parents=True, exist_ok=True)
        self._conexao = sqlite3.connect(caminho)
        self._conexao.execute(
            """
            CREATE TABLE IF NOT EXISTS atendimentos (
                id INTEGER PRIMARY KEY,
                estudante TEXT NOT NULL,
                categoria TEXT NOT NULL,
                prioridade TEXT NOT NULL
            )
            """
        )
        self._conexao.commit()

    def adicionar(self, atendimento: Atendimento) -> int:
        cursor = self._conexao.execute(
            """INSERT INTO atendimentos (estudante, categoria, prioridade)
               VALUES (?, ?, ?)""",
            (atendimento.estudante, atendimento.categoria, atendimento.prioridade),
        )
        self._conexao.commit()
        if cursor.lastrowid is None:
            raise RuntimeError("o banco não retornou o identificador")
        return cursor.lastrowid

    def listar(self) -> list[Atendimento]:
        linhas = self._conexao.execute(
            """SELECT id, estudante, categoria, prioridade
               FROM atendimentos ORDER BY id DESC"""
        ).fetchall()
        return [
            Atendimento(
                id=linha[0],
                estudante=linha[1],
                categoria=linha[2],
                prioridade=linha[3],
            )
            for linha in linhas
        ]

    def fechar(self) -> None:
        self._conexao.close()
