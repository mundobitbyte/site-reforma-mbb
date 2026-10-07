import { solicitar } from './api.mjs';

export async function avancarPedido(base, pedidoConsultado) {
  if (!pedidoConsultado.proximo_status) {
    throw new Error('O pedido consultado não tem uma próxima etapa disponível.');
  }
  return solicitar(base, `pedidos/${pedidoConsultado.id}/status`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: pedidoConsultado.proximo_status,
      estado_esperado: pedidoConsultado.status,
    }),
  });
}
