preco_centavos = 300
estoque = 20
quantidade = int(input("Quantidade de águas: "))
if quantidade < 1 or quantidade > 10:
    print("Quantidade recusada: use um inteiro de 1 a 10.")
elif quantidade > estoque:
    print("Estoque insuficiente.")
else:
    subtotal_centavos = preco_centavos * quantidade
    print(f"Simulação aceita: {subtotal_centavos} centavos.")
