preco_centavos = 300
texto = input("Quantidade de águas: ")
quantidade = int(texto)
subtotal_centavos = preco_centavos * quantidade
print(f"Subtotal: R$ {subtotal_centavos // 100},{subtotal_centavos % 100:02d}")
