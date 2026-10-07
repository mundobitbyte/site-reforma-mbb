produtos = {
    1: {"nome": "Água", "preco_centavos": 300},
    2: {"nome": "Suco", "preco_centavos": 600},
    3: {"nome": "Salgado", "preco_centavos": 800},
}
itens = [
    {"produto_id": 1, "quantidade": 2},
    {"produto_id": 3, "quantidade": 2},
    {"produto_id": 2, "quantidade": 2},
]
subtotal_centavos = 0
quantidades = {}
for item in itens:
    produto_id = item["produto_id"]
    quantidade = item["quantidade"]
    produto = produtos[produto_id]
    quantidades[produto_id] = quantidades.get(produto_id, 0) + quantidade
    subtotal_centavos = subtotal_centavos + produto["preco_centavos"] * quantidade
    print(produto["nome"], quantidade)
print("Quantidades:", quantidades)
print("Subtotal em centavos:", subtotal_centavos)
