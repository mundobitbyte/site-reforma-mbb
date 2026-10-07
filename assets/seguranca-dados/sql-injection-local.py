import sqlite3


def preparar_banco():
    conexao = sqlite3.connect(":memory:")
    cursor = conexao.cursor()
    cursor.execute("CREATE TABLE clientes (id INTEGER PRIMARY KEY, nome TEXT, cidade TEXT)")
    cursor.executemany(
        "INSERT INTO clientes (nome, cidade) VALUES (?, ?)",
        [
            ("Ana", "Campinas"),
            ("Bruno", "Sorocaba"),
            ("Carla", "Jundiaí"),
        ],
    )
    conexao.commit()
    return conexao


def mostrar(linhas):
    if not linhas:
        print("Nenhum cliente encontrado.")
        return
    for id_cliente, nome, cidade in linhas:
        print(f"{id_cliente} | {nome} | {cidade}")


def busca_vulneravel(conexao, nome):
    sql = "SELECT id, nome, cidade FROM clientes WHERE nome = '" + nome + "'"
    print("\nConsulta montada por concatenação:")
    print(sql)
    try:
        linhas = conexao.execute(sql).fetchall()
        print("Resultado da versão vulnerável:")
        mostrar(linhas)
    except sqlite3.Error as erro:
        print("O banco recusou a consulta:", erro)


def busca_parametrizada(conexao, nome):
    sql = "SELECT id, nome, cidade FROM clientes WHERE nome = ?"
    print("\nConsulta parametrizada:")
    print(sql, "  valor separado:", repr(nome))
    linhas = conexao.execute(sql, (nome,)).fetchall()
    print("Resultado da versão parametrizada:")
    mostrar(linhas)


def main():
    print("LABORATÓRIO LOCAL — SQL INJECTION")
    print("Use somente neste arquivo didático, no seu próprio computador.\n")
    print("Primeiro teste com: Ana")
    print("Depois, para observar a diferença no laboratório, teste com: ' OR 1=1 --")

    conexao = preparar_banco()
    while True:
        nome = input("\nDigite o nome para pesquisar (ou SAIR): ")
        if nome.upper() == "SAIR":
            break
        busca_vulneravel(conexao, nome)
        busca_parametrizada(conexao, nome)
        print("\nCompare: na versão segura, o texto informado permanece um valor, não vira parte do comando.")

    conexao.close()
    print("Laboratório encerrado.")


if __name__ == "__main__":
    main()
