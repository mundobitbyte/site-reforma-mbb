quantidade_total = 0
for numero in range(1, 4):
    quantidade = int(input(f"Águas na linha {numero}: "))
    quantidade_total = quantidade_total + quantidade
if quantidade_total < 1 or quantidade_total > 10:
    print("Soma recusada: o produto pode ter de 1 a 10 unidades.")
else:
    print("Quantidade consolidada:", quantidade_total)
    print("Subtotal em centavos:", quantidade_total * 300)
