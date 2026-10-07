import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { solicitar } from '../exemplos/api.mjs';
import { consultarProdutos, consultarPedido } from '../exemplos/07-consulta.mjs';
import { registrarPedido } from '../exemplos/08-pedido.mjs';
import { avancarPedido } from '../exemplos/09-estados.mjs';

const base = 'http://127.0.0.1:8001/';

test('consulta resolve a rota da API e lê o JSON', async t => {
  let recebido;
  t.mock.method(globalThis, 'fetch', async (url, opcoes) => {
    recebido = [url.href, opcoes];
    return new Response(JSON.stringify([{ id: 1, nome: 'Água' }]), { status: 200 });
  });
  assert.deepEqual(await consultarProdutos(base), [{ id: 1, nome: 'Água' }]);
  assert.equal(recebido[0], base + 'api/produtos');
  assert.equal(recebido[1].method, undefined);
});

test('consultar não registra uma venda', async t => {
  let recebido;
  t.mock.method(globalThis, 'fetch', async (url, opcoes) => {
    recebido = [url.href, opcoes];
    return new Response('{"id":7,"total_centavos":600}');
  });
  assert.equal((await consultarPedido(base, 7)).id, 7);
  assert.equal(recebido[0], base + 'api/pedidos/7');
  assert.equal(recebido[1].body, undefined);
});

for (const id of [0, -1, 1.5, '1']) {
  test(`identificador ${JSON.stringify(id)} recusado antes da rede`, async t => {
    const rede = t.mock.method(globalThis, 'fetch', async () => new Response('{}'));
    await assert.rejects(consultarPedido(base, id), /inteiro positivo/);
    assert.equal(rede.mock.callCount(), 0);
  });
}

test('erro HTTP conserva motivo e código para a interface', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response('{"detail":"Estoque insuficiente."}', { status: 409 }));
  await assert.rejects(consultarProdutos(base), erro => erro.status === 409 && erro.message === 'Estoque insuficiente.');
});

test('erro HTTP sem detail usa mensagem alternativa', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 503 }));
  await assert.rejects(consultarProdutos(base), erro => erro.status === 503 && /recusada/.test(erro.message));
});

test('HTML recebido onde se espera JSON é tratado', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response('<html>erro</html>', { status: 503 }));
  await assert.rejects(consultarProdutos(base), erro => erro.status === 503 && /JSON válido/.test(erro.message));
});

test('venda manda campos do contrato e aceita retorno 201', async t => {
  let recebido;
  t.mock.method(globalThis, 'fetch', async (url, opcoes) => {
    recebido = [url.href, opcoes];
    return new Response('{"id":1,"total_centavos":600}', { status: 201 });
  });
  const itens = [{ produto_id: 1, quantidade: 2, preco_centavos: 1 }];
  assert.equal((await registrarPedido(base, itens)).total_centavos, 600);
  assert.equal(recebido[0], base + 'api/pedidos');
  assert.equal(recebido[1].method, 'POST');
  assert.equal(recebido[1].headers['Content-Type'], 'application/json');
  assert.deepEqual(JSON.parse(recebido[1].body), { itens: [{ produto_id: 1, quantidade: 2 }], cupom: null });
  assert.equal(itens[0].preco_centavos, 1);
});

test('cupom é enviado ao servidor sem desconto calculado pelo cliente', async t => {
  let entrada;
  t.mock.method(globalThis, 'fetch', async (_, opcoes) => {
    entrada = JSON.parse(opcoes.body);
    return new Response('{"total_centavos":2700}', { status: 201 });
  });
  await registrarPedido(base, [{ produto_id: 2, quantidade: 5 }], ' mbb10 ');
  assert.equal(entrada.cupom, ' mbb10 ');
  assert.equal(Object.hasOwn(entrada, 'desconto_centavos'), false);
});

test('falha de comunicação não repete POST e não altera a entrada', async t => {
  const rede = t.mock.method(globalThis, 'fetch', async () => { throw new TypeError('rede'); });
  const itens = [{ produto_id: 1, quantidade: 2 }];
  await assert.rejects(registrarPedido(base, itens), /não reenvie/);
  assert.equal(rede.mock.callCount(), 1);
  assert.deepEqual(itens, [{ produto_id: 1, quantidade: 2 }]);
});

test('recusa 422 do servidor não faz nova tentativa', async t => {
  const rede = t.mock.method(globalThis, 'fetch', async () => new Response('{"detail":"Quantidade inválida."}', { status: 422 }));
  await assert.rejects(registrarPedido(base, [{ produto_id: 1, quantidade: 0 }]), erro => erro.status === 422);
  assert.equal(rede.mock.callCount(), 1);
});

test('avanço envia o próximo e o estado da consulta', async t => {
  let recebido;
  t.mock.method(globalThis, 'fetch', async (url, opcoes) => {
    recebido = [url.href, JSON.parse(opcoes.body)];
    return new Response('{"id":1,"status":"Confirmado"}');
  });
  await avancarPedido(base, { id: 1, status: 'Novo', proximo_status: 'Confirmado' });
  assert.equal(recebido[0], base + 'api/pedidos/1/status');
  assert.deepEqual(recebido[1], { status: 'Confirmado', estado_esperado: 'Novo' });
});

test('pedido finalizado não envia avanço', async t => {
  const rede = t.mock.method(globalThis, 'fetch', async () => new Response('{}'));
  await assert.rejects(avancarPedido(base, { id: 1, status: 'Entregue', proximo_status: null }), /próxima etapa/);
  assert.equal(rede.mock.callCount(), 0);
});

test('consulta antiga recusada exige nova consulta, sem avanço automático', async t => {
  const rede = t.mock.method(globalThis, 'fetch', async () => new Response('{"detail":"O estado mudou."}', { status: 409 }));
  await assert.rejects(avancarPedido(base, { id: 1, status: 'Novo', proximo_status: 'Confirmado' }), erro => erro.status === 409);
  assert.equal(rede.mock.callCount(), 1);
});

test('importar os módulos não dispara venda ou consulta', () => {
  const urls = ['api.mjs', '07-consulta.mjs', '08-pedido.mjs', '09-estados.mjs']
    .map(nome => new URL('../exemplos/' + nome, import.meta.url).href);
  const codigo = `let chamadas=0;
    globalThis.fetch=async()=>{chamadas++;return new Response('{}');};
    for(const url of ${JSON.stringify(urls)}) await import(url);
    await new Promise(resolve=>setImmediate(resolve));
    if(chamadas!==0) throw new Error('Importação disparou rede');`;
  const resultado = spawnSync(process.execPath, ['--input-type=module', '-e', codigo], { encoding: 'utf8' });
  assert.equal(resultado.status, 0, resultado.stderr);
  assert.equal(resultado.stdout, '');
});
