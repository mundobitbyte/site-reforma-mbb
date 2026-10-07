const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('./catalogo-core.js');
const principal = require('./catalogo.json');
const extra = require('./catalogo-seguranca-dados.json');

const raiz = path.resolve(__dirname, '..');

function catalogoComSeguranca() {
  return core.validar({ ...principal, unidades: [...principal.unidades, ...extra.unidades] });
}

test('Segurança de Dados possui 17 etapas catalogadas e páginas existentes', () => {
  assert.equal(extra.unidades.length, 17);
  const ids = new Set(principal.unidades.map(item => item.conteudo_id));
  for (const unidade of extra.unidades) {
    assert.match(unidade.conteudo_id, /^seg-dados-\d+$/);
    assert.equal(ids.has(unidade.conteudo_id), false);
    assert.equal(fs.existsSync(path.join(raiz, unidade.localizacao_atual)), true,
      `Página ausente: ${unidade.localizacao_atual}`);
  }
  core.validar(catalogoComSeguranca());
});

test('pesquisa encontra certificado digital e SQL Injection no novo módulo', () => {
  const catalogo = catalogoComSeguranca();
  const certificado = core.pesquisar(catalogo, 'certificado digital');
  const sql = core.pesquisar(catalogo, 'SQL Injection');
  assert.equal(certificado.some(item => item.conteudo_id === 'seg-dados-07'), true);
  assert.equal(sql.some(item => item.conteudo_id === 'seg-dados-09'), true);
});

test('Home apresenta Segurança da Informação como área própria', () => {
  const global = fs.readFileSync(path.join(raiz, 'js/mbb-busca-global.js'), 'utf8');
  assert.match(global, /seguranca-dados\/index\.html/);
  assert.match(global, /Segurança da Informação/);
  assert.match(global, /Tecnologia aplicada à Gestão/);
  assert.doesNotMatch(global, /5\. Segurança de Dados e Informação/);
});

test('projeto final contém a atividade visual encontre os riscos', () => {
  const html = fs.readFileSync(path.join(raiz, 'pages/seguranca-dados/16-projeto-final.html'), 'utf8');
  assert.match(html, /Atividade visual — encontre os riscos de segurança/);
  assert.match(html, /pessoa do lado de fora/i);
  assert.match(html, /crachá virado/i);
  assert.match(html, /senha escrita e colada no monitor/i);
});
