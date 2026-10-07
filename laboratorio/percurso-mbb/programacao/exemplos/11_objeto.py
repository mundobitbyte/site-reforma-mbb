class LeitorResumo:
    def __init__(self, pedido):
        self.pedido = pedido

    def total_centavos(self):
        return self.pedido["subtotal_centavos"] - self.pedido["desconto_centavos"]


pedido = {"subtotal_centavos": 3000, "desconto_centavos": 300}
resumo = LeitorResumo(pedido)
print("Total em centavos:", resumo.total_centavos())
