import logging
from pathlib import Path

from horizonte.modelos import Atendimento
from horizonte.regras import validar_prioridade, validar_texto
from horizonte.relatorios import linha_atendimento
from horizonte.repositorio import RepositorioAtendimentos


logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
BASE = Path(__file__).resolve().parent


def ler_prioridade() -> int:
    while True:
        try:
            return validar_prioridade(int(input("Prioridade (1-alta, 2-média, 3-baixa): ")))
        except ValueError as erro:
            print(f"Dado recusado: {erro}")


def cadastrar(repositorio: RepositorioAtendimentos) -> None:
    try:
        patrimonio = validar_texto(input("Patrimônio: ").upper(), "patrimônio")
        descricao = validar_texto(input("Descrição: "), "descrição")
        prioridade = ler_prioridade()
        atendimento = Atendimento(patrimonio, descricao, prioridade)
        identificador = repositorio.inserir(atendimento)
        logging.info("Atendimento %s cadastrado", identificador)
        print(f"Atendimento #{identificador} cadastrado.")
    except ValueError as erro:
        print(f"Cadastro não realizado: {erro}")


def listar(repositorio: RepositorioAtendimentos) -> None:
    atendimentos = repositorio.listar()
    if not atendimentos:
        print("Nenhum atendimento cadastrado.")
        return
    for atendimento in atendimentos:
        print(linha_atendimento(atendimento))


def concluir(repositorio: RepositorioAtendimentos) -> None:
    try:
        identificador = int(input("Id do atendimento: "))
    except ValueError:
        print("Digite um id inteiro.")
        return
    if repositorio.concluir(identificador):
        print("Atendimento concluído.")
    else:
        print("Atendimento não encontrado.")


def main() -> None:
    repositorio = RepositorioAtendimentos(BASE / "dados" / "horizonte.db")
    try:
        while True:
            print("\n1. Cadastrar  2. Listar  3. Concluir  0. Sair")
            opcao = input("Opção: ").strip()
            match opcao:
                case "1": cadastrar(repositorio)
                case "2": listar(repositorio)
                case "3": concluir(repositorio)
                case "0": break
                case _: print("Opção desconhecida.")
    finally:
        repositorio.fechar()


if __name__ == "__main__":
    main()
