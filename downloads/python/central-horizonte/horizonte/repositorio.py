import sqlite3
from pathlib import Path

from .modelos import Atendimento


class RepositorioAtendimentos:
    """Isole as operações SQLite usadas pela aplicação."""

    def __init__(self, caminho_banco: Path) -> None:
        caminho_banco.parent.mkdir(parents=True, exist_ok=True)
        self._conexao = sqlite3.connect(caminho_banco)
        self._criar_tabela()

    def _criar_tabela(self) -> None:
        with self._conexao:
            self._conexao.execute(
                """
                CREATE TABLE IF NOT EXISTS atendimento (
                    id INTEGER PRIMARY KEY,
                    patrimonio TEXT NOT NULL,
                    descricao TEXT NOT NULL,
                    prioridade INTEGER NOT NULL,
                    estado TEXT NOT NULL
                )
                """
            )

    def inserir(self, atendimento: Atendimento) -> int:
        with self._conexao:
            cursor = self._conexao.execute(
                """
                INSERT INTO atendimento
                    (patrimonio, descricao, prioridade, estado)
                VALUES (?, ?, ?, ?)
                """,
                (
                    atendimento.patrimonio,
                    atendimento.descricao,
                    atendimento.prioridade,
                    atendimento.estado,
                ),
            )
        return int(cursor.lastrowid)

    def listar(self, estado: str | None = None) -> list[Atendimento]:
        consulta = "SELECT id, patrimonio, descricao, prioridade, estado FROM atendimento"
        parametros: tuple[str, ...] = ()
        if estado is not None:
            consulta += " WHERE estado = ?"
            parametros = (estado,)
        consulta += " ORDER BY prioridade, id"

        cursor = self._conexao.execute(consulta, parametros)
        return [
            Atendimento(
                identificador=linha[0],
                patrimonio=linha[1],
                descricao=linha[2],
                prioridade=linha[3],
                estado=linha[4],
            )
            for linha in cursor
        ]

    def concluir(self, identificador: int) -> bool:
        with self._conexao:
            cursor = self._conexao.execute(
                "UPDATE atendimento SET estado = ? WHERE id = ?",
                ("concluído", identificador),
            )
        return cursor.rowcount == 1

    def fechar(self) -> None:
        self._conexao.close()
