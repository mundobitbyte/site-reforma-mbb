const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const codigo = fs.readFileSync(path.join(__dirname, 'pesquisar.js'), 'utf8');
const unidade = {
  conteudo_id: 'mod-pages-bancodedados',
  titulo: 'Banco de Dados',
  titulo_pesquisa: 'BLOCO 6 — CTE',
  localizacao_atual: 'pages/bancodedados.html',
  localizacao_pesquisa: 'pages/bancodedados.html#bd-cte',
  area: 'Dados', modulo: 'Banco de Dados', texto_busca: 'CTE'
};

async function executar(conta) {
  const elementos = new Map();
  function elemento() {
    return {
      filhos: [], listeners: {}, value: '', textContent: '',
      append(...itens) { this.filhos.push(...itens); },
      appendChild(item) { this.filhos.push(item); },
      replaceChildren() { this.filhos = []; },
      addEventListener(tipo, handler) { this.listeners[tipo] = handler; }
    };
  }
  for (const id of ['consulta', 'resumo', 'resultados']) elementos.set(id, elemento());
  const navegacoes = [];
  const scripts = [];
  const janela = { MBBCatalogo: { validar: valor => valor, pesquisar: () => [unidade] } };
  const contexto = {
    document: { getElementById: id => elementos.get(id), createElement: elemento,
      createTextNode: texto => ({ textContent: texto }),
      head: { appendChild(script) {
        scripts.push(script.src);
        if (script.src.includes('/conta.js')) janela.MBBMeuConta = conta;
        queueMicrotask(() => script.onload());
      } } },
    window: janela,
    location: { href: 'https://www.mundobitbyte.com.br/meu-mbb/pesquisar.html', search: '',
      assign: url => navegacoes.push(url) },
    fetch: async () => ({ ok: true, json: async () => ({ unidades: [unidade] }) }),
    URL, URLSearchParams, setTimeout
  };
  vm.runInNewContext(codigo, contexto);
  await new Promise(setImmediate);
  const campo = elementos.get('consulta');
  campo.value = 'CTE';
  campo.listeners.input();
  const link = elementos.get('resultados').filhos[0].filhos[0];
  return { link, navegacoes, scripts };
}

test('pesquisa sem conta continua abrindo o resultado público', async () => {
  const { link, scripts, navegacoes } = await executar(null);
  assert.equal(scripts.length, 0);
  assert.equal(link.href, 'https://www.mundobitbyte.com.br/pages/bancodedados.html#bd-cte');
  await link.listeners.click({ button: 0, defaultPrevented: false, preventDefault() {} });
  assert.equal(scripts.length, 2);
  assert.equal(navegacoes[0], link.href);
});

test('visita autenticada guarda unidade e tópico antes de navegar', async () => {
  const visitas = [];
  const conta = { iniciar: async () => true, atual: () => ({ uid: 'teste' }),
    visitar: async (...args) => visitas.push(args) };
  const { link, navegacoes } = await executar(conta);
  let impedido = false;
  await link.listeners.click({ button: 0, defaultPrevented: false,
    preventDefault() { impedido = true; } });
  assert.equal(impedido, true);
  assert.equal(visitas.length, 1);
  assert.equal(visitas[0][0].conteudo_id, unidade.conteudo_id);
  assert.equal(visitas[0][1], 'bd-cte');
  assert.equal(navegacoes[0], link.href);
});

test('falha de conta não impede a navegação pública', async () => {
  const conta = { iniciar: async () => { throw Error('indisponível'); }, atual: () => null };
  const { link, navegacoes } = await executar(conta);
  await link.listeners.click({ button: 0, defaultPrevented: false, preventDefault() {} });
  assert.equal(navegacoes[0], link.href);
});
