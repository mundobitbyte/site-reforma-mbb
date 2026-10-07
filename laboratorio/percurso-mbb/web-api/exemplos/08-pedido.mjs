import { solicitar } from './api.mjs';

export async function registrarPedido(base, itens, cupom = null) {
  const entrada = {
    itens: itens.map(item => ({
      produto_id: item.produto_id,
      quantidade: item.quantidade,
    })),
    cupom,
  };
  return solicitar(base, 'pedidos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entrada),
  });
}
