const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('./catalogo-core.js');
const catalogo = require('./catalogo.json');

test('catálogo único preserva as 12 etapas do piloto e alcança os módulos públicos', () => {
  core.validar(catalogo);
  assert.equal(core.atuais(catalogo).filter(unidade => unidade.obrigatorio !== false).length, 12);
  assert.ok(core.atuais(catalogo).length > 100);
  for (const unidade of catalogo.unidades) {
    const [pagina, ancora] = unidade.localizacao_atual.split('#');
    assert.ok(fs.existsSync(path.resolve(__dirname, '..', pagina)));
    if (unidade.conteudo_id.startsWith('git-local-')) assert.match(ancora, /^git-(?:[1-9]|1[0-2])$/);
  }
  assert.equal(core.progresso(catalogo, {}).total, 12);
});

test('pesquisa pública encontra termos reais em módulos diferentes', () => {
  assert.equal(core.pesquisar(catalogo, 'git status')[0].conteudo_id, 'git-local-05');
  assert.ok(core.pesquisar(catalogo, 'git status').some(item => item.conteudo_id === 'git-local-05'));
  assert.ok(core.pesquisar(catalogo, 'pasta de rede').some(item => item.conteudo_id === 'git-local-03'));
  assert.ok(core.pesquisar(catalogo, 'useState').some(item => item.localizacao_atual === 'pages/reactnative.html'));
  assert.ok(core.pesquisar(catalogo, 'metodologia ágil').some(item => item.localizacao_atual === 'pages/analise-sistemas/09-agile-backlog-mvp.html'));
  assert.ok(core.pesquisar(catalogo, 'sensor LDR').some(item => item.localizacao_atual === 'pages/arduino.html'));
  assert.ok(core.pesquisar(catalogo, 'subconsulta').some(item => item.localizacao_atual === 'pages/bancodedados.html'));
  assert.equal(core.pesquisar(catalogo, 'xyzconteudoinexistente').length, 0);
});

test('tópicos de pesquisa levam ao conteúdo sem mudar a identidade pedagógica', () => {
  for (const [termo, destino] of [
    ['subconsulta', 'pages/bancodedados.html#bd-subconsultas'],
    ['sensor LDR', 'pages/arduino.html#p6']
  ]) {
    const encontrado = core.pesquisar(catalogo, termo)[0];
    assert.equal(encontrado.localizacao_pesquisa, destino);
    const original = catalogo.unidades.find(unidade => unidade.conteudo_id === encontrado.conteudo_id);
    assert.equal(encontrado.localizacao_atual, original.localizacao_atual);
    assert.equal(encontrado.versao_conteudo, original.versao_conteudo);
    assert.ok(fs.readFileSync(path.resolve(__dirname, '..', destino.split('#')[0]), 'utf8').includes(`id="${destino.split('#')[1]}"`));
  }
});

test('destinos de seções reais cobrem Banco de Dados, React Native e Análise', () => {
  const casos = [
    ['CTE', 'pages/bancodedados.html#bd-topico-avancado-bloco-6-cte-dando-nome-a-uma-etapa-da-consulta'],
    ['useState', 'pages/reactnative.html#rn-state-state-7-state'],
    ['BPMN', 'pages/analise-sistemas/05-processo-to-be-bpmn.html#:~:text=BPMN%20%E2%80%94%20o%20que%20essas%20letras%20significam%3F']
  ];
  for (const [termo, destino] of casos) {
    const encontrado = core.pesquisar(catalogo, termo)[0];
    assert.equal(encontrado.localizacao_pesquisa, destino);
    assert.equal(encontrado.conteudo_id, catalogo.unidades.find(item => item.localizacao_atual === destino.split('#')[0]).conteudo_id);
  }
});

test('campo de pesquisa usa exemplo geral do portal, não o exemplo do piloto Git', () => {
  const html = fs.readFileSync(path.resolve(__dirname, 'pesquisar.html'), 'utf8');
  const placeholder = html.match(/placeholder="([^"]+)"/)?.[1] || '';
  assert.match(placeholder, /frações/i);
  assert.match(placeholder, /Python/i);
  assert.match(placeholder, /sensores/i);
  assert.doesNotMatch(placeholder, /git status|pasta de rede/i);
});

test('atalho público de pesquisa está presente em todas as páginas HTML do portal', () => {
  const raiz = path.resolve(__dirname, '..');
  function percorrer(dir) {
    for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entrada.isDirectory()) {
        if (!['.git', 'assets', 'downloads'].includes(entrada.name)) percorrer(path.join(dir, entrada.name));
      } else if (entrada.name.endsWith('.html')) {
        const pagina = path.join(dir, entrada.name);
        assert.match(fs.readFileSync(pagina, 'utf8'), /mbb-busca-global\.js/, path.relative(raiz, pagina));
      }
    }
  }
  percorrer(raiz);
  assert.doesNotMatch(fs.readFileSync(path.join(raiz, 'js/mbb-busca-global.js'), 'utf8'), /firebase-config\.js|MBBMeuConta/);
});

test('atalho abre a pesquisa na raiz mesmo em página aninhada e sem autenticação', () => {
  const elementos = [];
  const documento = {
    currentScript: { src: 'https://www.mundobitbyte.com.br/js/mbb-busca-global.js?v=mbb-busca-1' },
    querySelectorAll: () => [],
    createElement: tag => ({ tag, setAttribute(chave, valor) { this[chave] = valor; } }),
    head: { appendChild: elemento => elementos.push(elemento) },
    body: { appendChild: elemento => elementos.push(elemento) }
  };
  require('node:vm').runInNewContext(fs.readFileSync(path.resolve(__dirname, '../js/mbb-busca-global.js'), 'utf8'),
    { document: documento, location: { pathname: '/pages/analise-sistemas/09-agile-backlog-mvp.html' }, URL });
  assert.equal(elementos.at(-1).href, 'https://www.mundobitbyte.com.br/meu-mbb/pesquisar.html');
  assert.equal(elementos.at(-1).textContent, 'Pesquisar');
});

test('mover mantém ID, progresso e encaminha para URL nova', () => {
  const copia = structuredClone(catalogo);
  const unidade = copia.unidades[2];
  unidade.status = 'movido'; unidade.localizacao_atual = 'pages/git.html#git-4'; unidade.versao_conteudo = 2;
  core.validar(copia);
  assert.equal(core.resolver(copia, unidade.conteudo_id).unidade.localizacao_atual, 'pages/git.html#git-4');
  assert.equal(core.progresso(copia, { [unidade.conteudo_id]: { concluido: true, versaoVista: 1 } }).concluidas, 1);
});

test('substituir, dividir e remover preservam histórico e não criam links quebrados', () => {
  const copia = structuredClone(catalogo);
  const [substituido, dividido, removido] = copia.unidades;
  substituido.status = 'substituido'; substituido.destino_id = copia.unidades[3].conteudo_id; substituido.preservar_conclusao = true;
  dividido.status = 'dividido'; dividido.destino_id = copia.unidades[4].conteudo_id;
  removido.status = 'removido'; removido.proximo_id = copia.unidades[3].conteudo_id;
  core.validar(copia);
  assert.equal(core.resolver(copia, substituido.conteudo_id).unidade.conteudo_id, copia.unidades[3].conteudo_id);
  assert.equal(core.resolver(copia, dividido.conteudo_id).unidade.conteudo_id, copia.unidades[4].conteudo_id);
  assert.equal(core.resolver(copia, removido.conteudo_id).unidade.conteudo_id, copia.unidades[3].conteudo_id);
  assert.equal(core.progresso(copia, { [removido.conteudo_id]: { concluido: true } }).total, 9);
  assert.equal(core.progresso(copia, { [substituido.conteudo_id]: { concluido: true } }).concluidas, 1);
  assert.ok(!core.pesquisar(copia, removido.titulo).some(item => item.conteudo_id === removido.conteudo_id));
});

test('catálogo rejeita ciclos e conteúdo removido sem orientação', () => {
  const copia = structuredClone(catalogo);
  copia.unidades[0].status = 'removido';
  assert.throws(() => core.validar(copia));
  copia.unidades[0].proximo_id = copia.unidades[1].conteudo_id;
  copia.unidades[1].status = 'removido'; copia.unidades[1].proximo_id = copia.unidades[0].conteudo_id;
  assert.throws(() => core.validar(copia), /Ciclo/);
});
