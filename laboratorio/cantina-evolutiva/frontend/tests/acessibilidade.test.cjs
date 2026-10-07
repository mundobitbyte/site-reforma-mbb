// Ensaios de lógica com elementos de teste: não renderizam navegador ou leitor de tela.
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

async function interfaceDeTeste(estoqueAgua = 20) {
  const document = { activeElement: null };
  class Elemento {
    constructor(classe = '') {
      this.className = classe;
      this.children = [];
      this.attributes = {};
      this.listeners = {};
      this.value = '1';
      this.textContent = '';
      this.disabled = false;
    }
    setAttribute(nome, valor) { this.attributes[nome] = valor; }
    addEventListener(nome, funcao) { this.listeners[nome] = funcao; }
    replaceChildren() { this.children = []; }
    append(...elementos) { this.children.push(...elementos); }
    appendChild(elemento) { this.children.push(elemento); return elemento; }
    querySelector(seletor) {
      const classe = seletor.slice(1);
      for (const filho of this.children) {
        if (filho.className.split(' ').includes(classe)) return filho;
        const encontrado = filho.querySelector(seletor);
        if (encontrado) return encontrado;
      }
      return null;
    }
    focus() { document.activeElement = this; }
  }
  const ids = new Map([
    'mensagem', 'produtos', 'produtoTemplate', 'itensCarrinho', 'total', 'finalizar',
    'cupom', 'pedido-id', 'recarregar', 'consultar', 'avancar', 'consulta-resultado',
    'acompanhamento', 'historico', 'form-consulta',
  ].map(id => ['#' + id, new Elemento()]));
  ids.get('#produtoTemplate').content = {
    cloneNode() {
      const fragmento = new Elemento();
      fragmento.append(...['nome', 'estoque', 'preco', 'quantidade', 'adicionar']
        .map(classe => new Elemento(classe)));
      return fragmento;
    },
  };
  document.querySelector = seletor => ids.get(seletor);
  document.createElement = () => new Elemento();
  const produtos = [
    { id: 1, nome: 'Água', preco_centavos: 300, estoque: estoqueAgua },
    { id: 2, nome: 'Suco', preco_centavos: 600, estoque: 15 },
  ];
  const contexto = vm.createContext({ document, URL, location: { href: 'http://ensaio.invalid/' },
    fetch: async () => ({ ok: true, json: async () => produtos }) });
  const fonte = process.env.MBB_INTERFACE_SOURCE || join(__dirname, '..', 'app.js');
  vm.runInContext(readFileSync(fonte, 'utf8'), contexto);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(ids.get('#produtos').children.length, 2, ids.get('#mensagem').textContent);
  const estado = () => vm.runInContext('estado', contexto);
  const cartao = indice => ids.get('#produtos').children[indice];
  const adicionar = (indice, quantidade) => {
    const node = cartao(indice);
    node.querySelector('.quantidade').value = String(quantidade);
    node.querySelector('.adicionar').listeners.click();
  };
  return { document, ids, estado, cartao, adicionar };
}

test('os nomes acessíveis distinguem o produto e mantêm Quantidade/Adicionar', async () => {
  const ui = await interfaceDeTeste();
  for (const [indice, nome] of ['Água', 'Suco'].entries()) {
    assert.equal(ui.cartao(indice).querySelector('.quantidade').attributes['aria-label'],
      `Quantidade de ${nome}`);
    assert.equal(ui.cartao(indice).querySelector('.adicionar').attributes['aria-label'],
      `Adicionar ${nome} ao pedido`);
  }
});

test('quantidade recusada mantém carrinho vazio e dirige foco ao campo a corrigir', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 0);
  assert.equal(ui.estado().carrinho.length, 0);
  assert.equal(ui.document.activeElement, ui.cartao(0).querySelector('.quantidade'));
  assert.match(ui.ids.get('#mensagem').textContent, /inteira entre 1 e 10/);
});

test('recusa por estoque devolve foco ao campo sem adicionar item', async () => {
  const ui = await interfaceDeTeste(1);
  ui.adicionar(0, 2);
  assert.equal(ui.estado().carrinho.length, 0);
  assert.equal(ui.document.activeElement, ui.cartao(0).querySelector('.quantidade'));
  assert.match(ui.ids.get('#mensagem').textContent, /Estoque insuficiente para Água/);
});

test('remover o último item atualiza total, informa a remoção e dirige foco ao cupom', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  const remover = ui.ids.get('#itensCarrinho').querySelector('.remover');
  remover.focus();
  remover.listeners.click();
  assert.equal(ui.estado().carrinho.length, 0);
  assert.equal(ui.document.activeElement, ui.ids.get('#cupom'));
  assert.match(ui.ids.get('#mensagem').textContent, /Produto removido do pedido: Água/);
  assert.equal(ui.ids.get('#total').textContent,
    (0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
});

test('remover um item dirige foco ao botão remanescente, mantendo o outro produto', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  ui.adicionar(1, 1);
  const antigo = ui.ids.get('#itensCarrinho').querySelector('.remover');
  antigo.focus();
  antigo.listeners.click();
  assert.equal(ui.estado().carrinho.length, 1);
  assert.equal(ui.estado().carrinho[0].produto.nome, 'Suco');
  const novo = ui.ids.get('#itensCarrinho').querySelector('.remover');
  assert.notEqual(novo, antigo);
  assert.equal(ui.document.activeElement, novo);
});

test('durante envio, remover não modifica carrinho nem muda foco', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  const remover = ui.ids.get('#itensCarrinho').querySelector('.remover');
  remover.focus();
  ui.estado().enviando = true;
  remover.listeners.click();
  assert.equal(ui.estado().carrinho.length, 1);
  assert.equal(ui.document.activeElement, remover);
  assert.equal(ui.ids.get('#itensCarrinho').querySelector('.remover'), remover);
});
