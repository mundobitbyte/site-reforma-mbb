"""Regras de exercício: não substituem as validações do serviço Cantina."""


def validar_quantidade(quantidade):
    if type(quantidade) is not int or quantidade < 1 or quantidade > 10:
        raise ValueError("Use um inteiro de 1 a 10; booleano não é quantidade.")
    return quantidade


def subtotal_item(preco_centavos, quantidade):
    validar_quantidade(quantidade)
    return preco_centavos * quantidade
