quantidade = 0
while quantidade < 1 or quantidade > 10:
    quantidade = int(input("Quantidade de águas (1 a 10): "))
    if quantidade < 1 or quantidade > 10:
        print("Tente novamente com um inteiro de 1 a 10.")
subtotal_centavos = 300 * quantidade
print("Subtotal em centavos:", subtotal_centavos)
