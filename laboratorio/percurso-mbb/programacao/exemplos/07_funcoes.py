def subtotal_item(preco_centavos, quantidade):
    return preco_centavos * quantidade


total = 0
for item in [
    {"preco_centavos": 300, "quantidade": 2},
    {"preco_centavos": 800, "quantidade": 2},
]:
    total = total + subtotal_item(item["preco_centavos"], item["quantidade"])
print("Subtotal em centavos:", total)
