const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const codigo = fs.readFileSync(path.join(__dirname, 'visitas-diretas.js'), 'utf8');
const indice = require('./visitas-diretas.json');
const pagina = 'pages/bancodedados.html';
const ancora = indice[pagina].ancoras.find(item => item.includes('cte-'));

async function abrir(usuario, url, substituicoes = {}) {
  const visitas = [], scripts = [], ouvintes = {}, salvos = [], notasSalvas = [], elementos = [];
  const registro = { notas: [] };
  const location = new URL(url);
  const conta = {
    iniciar: async () => {}, atual: () => usuario,
    visitar: async (unidade, hash) => { visitas.push([unidade, hash]); },
    obter: async () => registro,
    salvar: async (unidade, campos) => { salvos.push([unidade, campos]); },
    notasDoRegistro: dados => dados.notas,
    alterarNota: async (unidade, texto, indice) => {
      notasSalvas.push([unidade, texto, indice]);
      if (indice === null) registro.notas.push(texto);
      else registro.notas[indice] = texto;
    }
  };
  Object.assign(conta, substituicoes);
  const janela = { addEventListener: (tipo, handler) => { ouvintes[tipo] = handler; } };
  function elemento(tag) {
    return {
      tag, listeners: {}, filhos: [], hidden: false, value: '', textContent: '',
      setAttribute(chave, valor) { this[chave] = valor; },
      append(...filhos) { this.filhos.push(...filhos); },
      replaceChildren() { this.filhos = []; },
      click() { return this.listeners.click(); },
      addEventListener(tipo, handler) { this.listeners[tipo] = handler; }
    };
  }
  const document = {
    currentScript: { src: 'https://www.mundobitbyte.com.br/meu-mbb/visitas-diretas.js?v=mbb-visitas-1' },
    createElement: elemento,
    head: { appendChild(script) {
      if (script.tag === 'link') return;
      scripts.push(script.src);
      if (script.src.includes('/conta.js')) janela.MBBMeuConta = conta;
      if (script.onload) queueMicrotask(() => script.onload());
    } },
    body: { append(...novos) { elementos.push(...novos); } }
  };
  vm.runInNewContext(codigo, { document, window: janela, location,
    fetch: async () => ({ ok: true, json: async () => indice }), URL });
  await new Promise(setImmediate);
  return { visitas, scripts, ouvintes, location, salvos, notasSalvas, elementos };
}

test('visita pendente termina antes da leitura das anotações existentes', async () => {
  let concluirVisita;
  const espera = new Promise(resolve => { concluirVisita = resolve; });
  let visitaConcluida = false;
  const paginaAberta = await abrir({ uid: 'teste', emailVerified: true },
    `https://www.mundobitbyte.com.br/${pagina}#${ancora}`, {
      visitar: async () => { await espera; visitaConcluida = true; },
      obter: async () => ({ notas: visitaConcluida ? ['Nota anterior'] : [] })
    });
  assert.equal(paginaAberta.elementos.length, 0);
  concluirVisita();
  await new Promise(setImmediate);
  assert.equal(paginaAberta.elementos.length, 2);
  const painel = paginaAberta.elementos[1];
  await new Promise(setImmediate);
  assert.equal(painel.filhos[8].filhos[1].filhos[0].textContent, 'Nota anterior');
});

test('visita direta com login registra página e tópico para retomar', async () => {
  const paginaAberta = await abrir({ uid: 'teste', emailVerified: true }, `https://www.mundobitbyte.com.br/${pagina}#${ancora}`);
  assert.equal(paginaAberta.visitas.length, 1);
  assert.equal(paginaAberta.visitas[0][0].conteudo_id, indice[pagina].conteudo_id);
  assert.equal(paginaAberta.visitas[0][1], ancora);
  assert.equal(paginaAberta.elementos[0].textContent, 'Meu estudo');
  const painel = paginaAberta.elementos[1];
  const favorito = painel.filhos[2], concluir = painel.filhos[3];
  const anotacao = painel.filhos[5], salvar = painel.filhos[6];
  await favorito.listeners.click();
  await concluir.listeners.click();
  anotacao.value = 'Rever o exemplo antes da aula.';
  await salvar.listeners.click();
  assert.deepEqual(paginaAberta.salvos.map(item => Object.keys(item[1])[0]), ['favorito', 'concluido']);
  assert.equal(paginaAberta.notasSalvas[0][1], 'Rever o exemplo antes da aula.');
  assert.equal(paginaAberta.notasSalvas[0][2], null);
  const lista = painel.filhos[8];
  assert.equal(lista.filhos[1].filhos[0].textContent, 'Rever o exemplo antes da aula.');
  await lista.filhos[1].filhos[1].listeners.click();
  anotacao.value = 'Revisado após a aula.';
  await salvar.listeners.click();
  assert.equal(paginaAberta.notasSalvas[1][2], 0);
  assert.equal(lista.filhos[1].filhos[0].textContent, 'Revisado após a aula.');
  assert.equal(paginaAberta.salvos[0][0].conteudo_id, indice[pagina].conteudo_id);
  paginaAberta.location.hash = '';
  paginaAberta.ouvintes.hashchange();
  await new Promise(setImmediate);
  assert.equal(paginaAberta.visitas.at(-1)[1], '');
});

test('sem login e fora do catálogo não escreve dados pessoais', async () => {
  const semConta = await abrir(null, `https://www.mundobitbyte.com.br/${pagina}`);
  assert.equal(semConta.visitas.length, 0);
  const semConfirmacao = await abrir({ uid: 'teste', emailVerified: false }, `https://www.mundobitbyte.com.br/${pagina}`);
  assert.equal(semConfirmacao.visitas.length, 0);
  assert.equal(semConfirmacao.elementos.length, 0);
  const fora = await abrir({ uid: 'teste', emailVerified: true }, 'https://www.mundobitbyte.com.br/meu-mbb/pesquisar.html');
  assert.equal(fora.scripts.length, 0);
  assert.equal(fora.visitas.length, 0);
  assert.equal(indice['pages/git.html'], undefined);
});
