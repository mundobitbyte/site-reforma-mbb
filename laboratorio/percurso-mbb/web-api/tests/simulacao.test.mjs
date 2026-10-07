// Handler exercitado com elementos controlados: não é teste de navegador.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const codigo = readFileSync(new URL('../exemplos/04-simulacao/app.js', import.meta.url), 'utf8');

function executar(valor) {
  let callback;
  let impedido = false;
  const saida = { textContent: 'mensagem inicial' };
  const elementos = {
    '#simulacao': { addEventListener(nome, funcao) { assert.equal(nome, 'submit'); callback = funcao; } },
    '#quantidade': { value: valor },
    '#resultado': saida,
  };
  vm.runInNewContext(codigo, { document: { querySelector: seletor => elementos[seletor] } });
  assert.equal(saida.textContent, 'mensagem inicial');
  callback({ preventDefault() { impedido = true; } });
  return { texto: saida.textContent, impedido };
}

for (const [entrada, subtotal] of [['1', 300], ['2', 600], ['10', 3000]]) {
  test(`simulação ${entrada} usa preço conhecido e indica ausência de venda`, () => {
    const resultado = executar(entrada);
    assert.equal(resultado.impedido, true);
    assert.equal(resultado.texto, `Simulação: ${subtotal} centavos. Nenhuma venda registrada.`);
  });
}

for (const entrada of ['0', '-1', '11', '2.5', 'duas', '']) {
  test(`handler recusa ${JSON.stringify(entrada)} sem calcular subtotal`, () => {
    const resultado = executar(entrada);
    assert.equal(resultado.impedido, true);
    assert.equal(resultado.texto, 'Use uma quantidade inteira de 1 a 10.');
  });
}
