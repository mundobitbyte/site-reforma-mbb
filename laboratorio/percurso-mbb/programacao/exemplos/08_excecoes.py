def validar_quantidade(quantidade):
    if type(quantidade) is not int or quantidade < 1 or quantidade > 10:
        raise ValueError("Use um inteiro de 1 a 10; booleano não é quantidade.")
    return quantidade


while True:
    texto = input("Quantidade de águas (1 a 10): ")
    try:
        quantidade = validar_quantidade(int(texto))
    except ValueError as erro:
        print("Entrada recusada:", erro)
    else:
        break
print("Subtotal em centavos:", quantidade * 300)
