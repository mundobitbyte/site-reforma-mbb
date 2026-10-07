const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('./catalogo-core.js');
const catalogo = require('./catalogo.json');

test('painel retoma o tópico visitado sem contar visita como conclusão', async () => {
  const elementos = new Map();
  function criarElemento(tag = 'div') {
    return {
      tag, filhos: [], textContent: '', hidden: true,
      append(...itens) { this.filhos.push(...itens); },
      replaceChildren() { this.filhos = []; this.textContent = ''; },
      addEventListener() {}
    };
  }
  for (const id of ['mensagem', 'painel', 'sair', 'continuar', 'recentes',
    'favoritos', 'anotacoes', 'progresso', 'limpar-recentes',
    'limpar-favoritos', 'limpar-anotacoes', 'limpar-progresso', 'excluir-conta', 'verificacao', 'conta-dados',
    'reenviar-email', 'verificar-email']) elementos.set(id, criarElemento());
  const unidade = core.pesquisar(catalogo, 'CTE')[0];
  const anterior = core.pesquisar(catalogo, 'BPMN')[0];
  const ancora = new URL(`https://www.mundobitbyte.com.br/${unidade.localizacao_pesquisa}`).hash.slice(1);
  const registros = {
    [unidade.conteudo_id]: {
      ultimoAcesso: '2026-09-29T05:00:00Z',
      versaoVista: unidade.versao_conteudo,
      ancora,
      notas: ['Primeira nota', 'Segunda nota']
    },
    [anterior.conteudo_id]: {
      ultimoAcesso: '2026-09-28T05:00:00Z',
      versaoVista: anterior.versao_conteudo
    }
  };
  const conta = { iniciar: async () => {}, atual: () => ({ uid: 'teste', emailVerified: true }),
    notasDoRegistro: registro => registro.notas || (registro.anotacao ? [registro.anotacao] : []),
    listar: async () => registros };
  const contexto = {
    document: { getElementById: id => elementos.get(id), createElement: criarElemento },
    window: { MBBMeuConta: conta, MBBCatalogo: core },
    location: { href: 'https://www.mundobitbyte.com.br/meu-mbb/index.html' },
    fetch: async () => ({ ok: true, json: async () => catalogo }),
    URL, Date
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'painel.js'), 'utf8'), contexto);
  await new Promise(setImmediate);

  const continuar = elementos.get('continuar').filhos[0].filhos[0];
  const recente = elementos.get('recentes').filhos[0].filhos[0];
  const destino = `https://www.mundobitbyte.com.br/${unidade.localizacao_pesquisa}`;
  assert.equal(continuar.href, destino);
  assert.equal(recente.href, new URL(`../${anterior.localizacao_atual}`, contexto.location.href).href);
  assert.match(continuar.textContent, /CTE/);
  assert.equal(elementos.get('anotacoes').filhos[0].filhos[1].textContent, 'Primeira nota');
  assert.equal(elementos.get('anotacoes').filhos[0].filhos[2].textContent, 'Segunda nota');
  assert.match(elementos.get('progresso').filhos[0].textContent, /Nenhum conteúdo concluído ainda/);
  assert.equal(elementos.get('limpar-recentes').hidden, false);
  assert.equal(elementos.get('limpar-favoritos').hidden, true);
});
