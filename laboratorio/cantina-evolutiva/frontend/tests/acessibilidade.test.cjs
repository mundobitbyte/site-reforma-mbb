// Ensaios de lógica com elementos de teste: não renderizam navegador ou leitor de tela.
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

async function interfaceDeTeste(estoqueAgua = 20, memoria = new Map(), endereco = 'http://ensaio.invalid/') {
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
    contains(elemento) { return this === elemento || this.children.some(f => f.contains(elemento)); }
    replaceChildren() {
      if (this.children.some(f => f.contains(document.activeElement))) document.activeElement = document.body;
      this.children = [];
    }
    get disabled() { return this._disabled; }
    set disabled(valor) {
      this._disabled = valor;
      if (valor && document.activeElement === this) document.activeElement = document.body;
    }
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
    'acompanhamento', 'historico', 'form-consulta', 'consulta-ajuda', 'estoque-status',
  ].map(id => ['#' + id, new Elemento()]));
  ids.get('#cupom').value = '';
  ids.get('#pedido-id').value = '';
  document.body = new Elemento();
  document.activeElement = document.body;
  ids.get('#produtoTemplate').content = {
    cloneNode() {
      const fragmento = new Elemento();
      fragmento.append(...['nome', 'estoque', 'preco', 'quantidade', 'adicionar']
        .map(classe => new Elemento(classe)));
      return fragmento;
    },
  };
  document.querySelector = seletor => ids.get(seletor);
  document.getElementById = id => {
    function buscar(node) {
      if (node.id === id) return node;
      for (const filho of node.children) { const n = buscar(filho); if (n) return n; }
      return null;
    }
    for (const node of ids.values()) { const n = buscar(node); if (n) return n; }
    return ids.get('#' + id) || null;
  };
  document.createElement = () => new Elemento();
  const produtos = [
    { id: 1, nome: 'Água', preco_centavos: 300, estoque: estoqueAgua },
    { id: 2, nome: 'Suco', preco_centavos: 600, estoque: 15 },
  ];
  let responder = async () => { throw new Error('Requisição inesperada no ensaio'); };
  const requisicoes = [];
  const sessionStorage = { getItem: chave => memoria.get(chave) ?? null, setItem: (chave, valor) => memoria.set(chave, valor) };
  const contexto = vm.createContext({ document, URL, sessionStorage, location: { href: endereco },
    fetch: async (url, opcoes) => {
      requisicoes.push({ rota: url.pathname, opcoes });
      if (url.pathname === '/api/produtos') return { ok: true, json: async () => produtos };
      return responder(url, opcoes);
    } });
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
  const resposta = funcao => { responder = funcao; };
  return { document, ids, estado, cartao, adicionar, resposta, produtos, requisicoes,
    carregar: () => vm.runInContext('carregarProdutos()', contexto) };
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

function pedido(status = 'Novo', proximo = 'Confirmado') {
  return { id: 1, status, proximo_status: proximo, total_centavos: 600,
    desconto_centavos: 0, itens: [{ quantidade: 2, nome: 'Água' }], historico_status: [] };
}
const sucesso = dados => ({ ok: true, json: async () => dados });
const recusa = detail => ({ ok: false, json: async () => ({ detail }) });
function pendencia() {
  let concluir;
  const promessa = new Promise(resolve => { concluir = resolve; });
  return { promessa, concluir };
}

test('async: registro confirmado dirige foco ao resultado e mantém o contrato do pedido', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  ui.resposta(async () => sucesso(pedido()));
  ui.ids.get('#finalizar').focus();
  await ui.ids.get('#finalizar').listeners.click();
  assert.equal(ui.document.activeElement, ui.ids.get('#consulta-resultado'));
  assert.equal(ui.ids.get('#finalizar').disabled, false);
  const envio = ui.requisicoes.find(r => r.rota === '/api/pedidos').opcoes;
  assert.equal(envio.method, 'POST');
  assert.deepEqual(JSON.parse(envio.body), { itens: [{ produto_id: 1, quantidade: 2 }], cupom: null });
});

test('async: registro recusado devolve foco ao botão e preserva o carrinho', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  ui.resposta(async () => recusa('Cupom não encontrado.'));
  ui.ids.get('#finalizar').focus();
  await ui.ids.get('#finalizar').listeners.click();
  assert.equal(ui.document.activeElement, ui.ids.get('#finalizar'));
  assert.equal(ui.estado().carrinho.length, 1);
  assert.match(ui.ids.get('#mensagem').textContent, /Cupom não encontrado/);
});

test('async: concluir registro não tira foco de outro controle escolhido durante a espera', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  const p = pendencia();
  ui.resposta(() => p.promessa);
  ui.ids.get('#finalizar').focus();
  const envio = ui.ids.get('#finalizar').listeners.click();
  ui.ids.get('#cupom').focus();
  p.concluir(sucesso(pedido()));
  await envio;
  assert.equal(ui.document.activeElement, ui.ids.get('#cupom'));
});

test('async: consulta iniciada pelo campo dirige foco ao resultado depois de reabilitar controles', async () => {
  const ui = await interfaceDeTeste();
  ui.ids.get('#pedido-id').value = '1';
  ui.ids.get('#pedido-id').focus();
  ui.resposta(async () => sucesso(pedido()));
  await ui.ids.get('#form-consulta').listeners.submit({ preventDefault() {} });
  assert.equal(ui.document.activeElement, ui.ids.get('#consulta-resultado'));
  assert.equal(ui.ids.get('#pedido-id').disabled, false);
});

test('async: consulta recusada dirige foco à mensagem de resultado', async () => {
  const ui = await interfaceDeTeste();
  ui.ids.get('#pedido-id').value = '1';
  ui.ids.get('#consultar').focus();
  ui.resposta(async () => recusa('Pedido não encontrado.'));
  await ui.ids.get('#form-consulta').listeners.submit({ preventDefault() {} });
  assert.equal(ui.document.activeElement, ui.ids.get('#consulta-resultado'));
  assert.equal(ui.ids.get('#consulta-resultado').textContent, 'Pedido não encontrado.');
});

test('async: resposta de consulta superada não troca resultado ou foco de outra ação', async () => {
  const ui = await interfaceDeTeste();
  ui.ids.get('#pedido-id').value = '1';
  ui.ids.get('#consultar').focus();
  const p = pendencia();
  ui.resposta(() => p.promessa);
  const consulta = ui.ids.get('#form-consulta').listeners.submit({ preventDefault() {} });
  ui.estado().versaoConsulta++;
  ui.ids.get('#consulta-resultado').textContent = 'Outra ação assumiu a consulta.';
  ui.ids.get('#cupom').focus();
  p.concluir(sucesso(pedido()));
  await consulta;
  assert.equal(ui.document.activeElement, ui.ids.get('#cupom'));
  assert.equal(ui.ids.get('#consulta-resultado').textContent, 'Outra ação assumiu a consulta.');
});

test('async: avanço intermediário reabilita controles e dirige foco ao novo estado para leitura', async () => {
  const ui = await interfaceDeTeste();
  ui.estado().consultado = pedido();
  ui.ids.get('#avancar').focus();
  ui.resposta(async () => sucesso(pedido('Confirmado', 'Em preparação')));
  await ui.ids.get('#avancar').listeners.click();
  assert.equal(ui.document.activeElement, ui.ids.get('#consulta-resultado'));
  assert.equal(ui.ids.get('#avancar').disabled, false);
  assert.equal(ui.ids.get('#avancar').textContent, 'Avançar para Em preparação');
  const envio = ui.requisicoes.find(r => r.rota.endsWith('/status')).opcoes;
  assert.deepEqual(JSON.parse(envio.body), { status: 'Confirmado', estado_esperado: 'Novo' });
});

test('async: entrega final dirige foco ao resultado em vez do botão desabilitado', async () => {
  const ui = await interfaceDeTeste();
  ui.estado().consultado = pedido('Pronto', 'Entregue');
  ui.ids.get('#avancar').focus();
  ui.resposta(async () => sucesso(pedido('Entregue', null)));
  await ui.ids.get('#avancar').listeners.click();
  assert.equal(ui.document.activeElement, ui.ids.get('#consulta-resultado'));
  assert.equal(ui.ids.get('#avancar').disabled, true);
});

test('async: conflito de estado dirige foco à mensagem e pede nova consulta', async () => {
  const ui = await interfaceDeTeste();
  ui.estado().consultado = pedido();
  ui.ids.get('#avancar').focus();
  ui.resposta(async () => recusa('O estado mudou.'));
  await ui.ids.get('#avancar').listeners.click();
  assert.equal(ui.document.activeElement, ui.ids.get('#consulta-resultado'));
  assert.equal(ui.estado().consultado, null);
  assert.match(ui.ids.get('#consulta-resultado').textContent, /Consulte o pedido/);
});

test('async: reconstruir produtos mantém foco e quantidade em edição', async () => {
  const ui = await interfaceDeTeste();
  const anterior = ui.cartao(0).querySelector('.quantidade');
  anterior.value = '5';
  anterior.focus();
  await ui.carregar();
  const atual = ui.cartao(0).querySelector('.quantidade');
  assert.notEqual(atual, anterior);
  assert.equal(ui.document.activeElement, atual);
  assert.equal(atual.value, '5');
});

test('async: produto esgotado dirige foco do antigo Adicionar à quantidade do mesmo produto', async () => {
  const ui = await interfaceDeTeste();
  ui.cartao(0).querySelector('.adicionar').focus();
  ui.produtos[0].estoque = 0;
  await ui.carregar();
  assert.equal(ui.document.activeElement, ui.cartao(0).querySelector('.quantidade'));
  assert.equal(ui.cartao(0).querySelector('.adicionar').disabled, true);
});


test('pedido vazio explica Adicionar e dirige foco ao primeiro produto sem enviar venda', async () => {
  const ui = await interfaceDeTeste();
  await ui.ids.get('#finalizar').listeners.click();
  assert.equal(ui.document.activeElement, ui.cartao(0).querySelector('.quantidade'));
  assert.match(ui.ids.get('#mensagem').textContent, /Adicionar ao pedido antes de registrar/);
  assert.equal(ui.requisicoes.filter(r => r.rota === '/api/pedidos').length, 0);
});

test('número confirmado reaparece na nova página e consulta usa esse ID sem registrar de novo', async () => {
  const memoria = new Map();
  const primeira = await interfaceDeTeste(20, memoria);
  primeira.adicionar(0, 2);
  primeira.resposta(async () => sucesso({ ...pedido(), id: 7 }));
  await primeira.ids.get('#finalizar').listeners.click();
  const segunda = await interfaceDeTeste(20, memoria);
  assert.equal(Number(segunda.ids.get('#pedido-id').value), 7);
  assert.match(segunda.ids.get('#consulta-ajuda').textContent, /#7/);
  segunda.resposta(async url => {
    assert.equal(url.pathname, '/api/pedidos/7');
    return sucesso({ ...pedido(), id: 7 });
  });
  await segunda.ids.get('#form-consulta').listeners.submit({ preventDefault() {} });
  assert.match(segunda.ids.get('#consulta-resultado').textContent, /Pedido #7/);
  assert.equal(segunda.requisicoes.filter(r => r.opcoes?.method === 'POST').length, 0);
});

test('armazenamento bloqueado não impede registro e consulta', async () => {
  const bloqueada = { get() { throw new Error('bloqueado'); }, set() { throw new Error('bloqueado'); } };
  const ui = await interfaceDeTeste(20, bloqueada);
  ui.adicionar(0, 2);
  ui.resposta(async () => sucesso(pedido()));
  await ui.ids.get('#finalizar').listeners.click();
  assert.match(ui.ids.get('#consulta-resultado').textContent, /Pedido #1/);
  assert.equal(ui.estado().carrinho.length, 0);
});

test('número inválido lembrado não preenche a consulta', async () => {
  for (const valor of ['0', '-1', 'NaN', '1.5', '9007199254740992']) {
    const ui = await interfaceDeTeste(20, new Map([['mbb-cantina-ultimo-pedido', valor]]));
    assert.equal(ui.ids.get('#pedido-id').value, '');
  }
});

test('consultar estoque dá retorno junto ao controle e preserva o carrinho', async () => {
  const ui = await interfaceDeTeste();
  ui.adicionar(0, 2);
  ui.ids.get('#recarregar').focus();
  await ui.ids.get('#recarregar').listeners.click();
  assert.match(ui.ids.get('#estoque-status').textContent, /Estoque consultado/);
  assert.equal(ui.estado().carrinho[0].quantidade, 2);
  assert.equal(ui.document.activeElement, ui.ids.get('#recarregar'));
  assert.equal(ui.ids.get('#recarregar').disabled, false);
});


test('rotas da API continuam na raiz quando a aplicação é aberta pelo retorno do percurso', async () => {
  const ui = await interfaceDeTeste(20, new Map(), 'http://ensaio.invalid/curso/laboratorio/cantina-evolutiva/frontend/index.html');
  ui.adicionar(0, 2);
  ui.resposta(async url => {
    assert.equal(url.pathname, '/api/pedidos');
    return sucesso(pedido());
  });
  await ui.ids.get('#finalizar').listeners.click();
  assert.match(ui.ids.get('#consulta-resultado').textContent, /Pedido #1/);
});
