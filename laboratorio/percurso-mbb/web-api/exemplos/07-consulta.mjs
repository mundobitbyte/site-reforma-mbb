import { solicitar } from './api.mjs';

export async function consultarProdutos(base) {
  return solicitar(base, 'produtos');
}

export async function consultarPedido(base, id) {
  if (!Number.isInteger(id) || id < 1) {
    throw new Error('Informe um identificador inteiro positivo.');
  }
  return solicitar(base, `pedidos/${id}`);
}
