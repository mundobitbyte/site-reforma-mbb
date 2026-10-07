// Executar somente contra uma API de teste com banco novo e dados fictícios.
// O roteiro registra vendas. Não apontar para banco de trabalho ou produção.
import assert from 'node:assert/strict';
import { solicitar } from '../exemplos/api.mjs';
import { consultarProdutos, consultarPedido } from '../exemplos/07-consulta.mjs';
import { registrarPedido } from '../exemplos/08-pedido.mjs';
import { avancarPedido } from '../exemplos/09-estados.mjs';

const base = process.argv[2];
assert.ok(base, 'Passe a URL da API temporária criada para este roteiro.');
assert.ok(['127.0.0.1', 'localhost'].includes(new URL(base).hostname), 'Roteiro restrito ao host local.');
let requisicoes = 0;
const fetchReal = globalThis.fetch;
globalThis.fetch = (...args) => { requisicoes++; return fetchReal(...args); };

const cardapio = await consultarProdutos(base);
assert.equal(cardapio.length, 5);
assert.equal(cardapio[0].preco_centavos, 300);
assert.equal(cardapio[0].estoque, 20);
const venda = await registrarPedido(base, [{ produto_id: 1, quantidade: 2 }]);
assert.equal(venda.total_centavos, 600);
assert.equal(venda.status, 'Novo');
const consultado = await consultarPedido(base, venda.id);
assert.equal(consultado.total_centavos, 600);
assert.equal((await consultarProdutos(base))[0].estoque, 18);
const confirmado = await avancarPedido(base, consultado);
assert.equal(confirmado.status, 'Confirmado');
await assert.rejects(avancarPedido(base, consultado), erro => erro.status === 409);
let atual = await consultarPedido(base, venda.id);
for (const estado of ['Em preparação', 'Pronto', 'Entregue']) {
  atual = await avancarPedido(base, atual);
  assert.equal(atual.status, estado);
}
assert.equal(atual.historico_status.length, 4);
const antesFinalizado = requisicoes;
await assert.rejects(avancarPedido(base, atual), /próxima etapa/);
assert.equal(requisicoes, antesFinalizado);

const cupom = await registrarPedido(base, [{ produto_id: 2, quantidade: 5 }], ' mbb10 ');
assert.equal(cupom.subtotal_centavos, 3000);
assert.equal(cupom.desconto_centavos, 300);
assert.equal(cupom.total_centavos, 2700);
assert.equal((await consultarPedido(base, cupom.id)).total_centavos, 2700);
await assert.rejects(registrarPedido(base, [{ produto_id: 2, quantidade: 5 }], 'MBB10'), erro => erro.status === 409);
await assert.rejects(registrarPedido(base, [{ produto_id: 1, quantidade: '2' }]), erro => erro.status === 422);
await assert.rejects(solicitar(base, 'pedidos', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ itens: [{ produto_id: 1, quantidade: 2 }], preco_centavos: 1 }),
}), erro => erro.status === 422);
const saldo = await consultarProdutos(base);
assert.equal(saldo[0].estoque, 18);
assert.equal(saldo[1].estoque, 10);
assert.equal((await consultarPedido(base, venda.id)).total_centavos, 600);
console.log(JSON.stringify({ requisicoes, pedido_agua: venda.id, total_agua: 600, estado_final: atual.status, eventos: 4, pedido_cupom: cupom.id, total_cupom: 2700, banco_temporario: true, navegador_testado: false }));
