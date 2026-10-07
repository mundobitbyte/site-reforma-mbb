const itens = [
  { produto_id: 1, quantidade: 2, preco_centavos: 300 },
  { produto_id: 3, quantidade: 2, preco_centavos: 800 },
];
let subtotal_centavos = 0;
for (const item of itens) {
  subtotal_centavos = subtotal_centavos + item.quantidade * item.preco_centavos;
}
console.log("Subtotal previsto em centavos:", subtotal_centavos);
const entrada = itens.map(item => ({
  produto_id: item.produto_id,
  quantidade: item.quantidade,
}));
console.log(JSON.stringify({ itens: entrada, cupom: null }));
