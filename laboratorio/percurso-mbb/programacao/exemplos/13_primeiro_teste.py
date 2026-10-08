from regras import subtotal_item

resultado = subtotal_item(300, 2)
assert resultado == 600, "Duas águas devem somar 600 centavos."
print("Teste passou: 600 centavos")
