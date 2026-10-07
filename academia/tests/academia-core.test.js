const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

global.window = global;
require('../js/curso-embarcados-dados.js');
const core = require('../js/academia-core.js');
const curso = global.MBB_CURSO_EMBARCADOS;

test('IDs de módulos e aulas são únicos e permanentes', () => {
  const modulos = curso.modulos.map(item => item.id);
  const aulas = curso.aulas.map(item => item.id);
  assert.equal(new Set(modulos).size, modulos.length);
  assert.equal(new Set(aulas).size, aulas.length);
  aulas.forEach(id => assert.match(id, /^emb-(?:\d{2})-(?:\d{2}|cp|final|dominio)$/));
  curso.aulas.forEach(aula => assert.ok(modulos.includes(aula.modulo), `${aula.id} aponta para módulo inexistente`));
});

test('pontuação deriva somente de atividades únicas concluídas', () => {
  const atividades = {
    'emb-01-03': { state: 'concluida', points: 9999 },
    'emb-02-01': { state: 'concluida', points: 9999 }
  };
  assert.equal(core.totalPontos(curso, atividades), 40);
  atividades['emb-01-03'] = { state: 'concluida', points: 0 };
  assert.equal(core.totalPontos(curso, atividades), 40);
});

test('progresso ignora atividades opcionais do laboratório 99', () => {
  const obrigatorias = curso.aulas.filter(aula => aula.obrigatoria !== false);
  const activities = Object.fromEntries(obrigatorias.map(aula => [aula.id, { state: 'concluida' }]));
  assert.equal(core.percentual(curso, activities), 100);
});

test('conquistas exigem os marcos reais configurados', () => {
  assert.equal(core.conquistasDesbloqueadas(curso, {}).length, 0);
  const atividades = { 'emb-01-03': { state: 'concluida' }, 'emb-02-01': { state: 'concluida' } };
  assert.deepEqual(core.conquistasDesbloqueadas(curso, atividades).map(item => item.id), ['primeiro-circuito', 'primeira-entrada']);
});

test('todos os links internos apontam para páginas e âncoras existentes', () => {
  for (const aula of curso.aulas) {
    for (const fonte of aula.fontes) {
      const [arquivoRelativo, ancora] = fonte.url.replace('../../../pages/', '').split('#');
      const arquivo = path.resolve(__dirname, '../../pages', arquivoRelativo);
      assert.ok(fs.existsSync(arquivo), `${aula.id}: arquivo ausente ${arquivoRelativo}`);
      if (ancora) {
        const html = fs.readFileSync(arquivo, 'utf8');
        assert.ok(html.includes(`id="${ancora}"`) || html.includes(`id='${ancora}'`), `${aula.id}: âncora ausente #${ancora}`);
      }
    }
  }
});

test('cada aula contém ação, observação, sucesso, diagnóstico e aplicação', () => {
  for (const aula of curso.aulas) {
    for (const campo of ['contexto', 'antes', 'fazer', 'observar', 'sucesso', 'diagnostico', 'aplicar']) {
      assert.ok(aula[campo] && aula[campo].trim().length >= 12, `${aula.id}: campo ${campo} insuficiente`);
    }
    assert.equal(aula.pontos, curso.pontos[aula.tipo], `${aula.id}: pontos fora da configuração central`);
  }
});
test('inicialização Web aguarda o estado da instância do Firebase Auth', () => {
  const storage = fs.readFileSync(path.resolve(__dirname, '../js/academia-storage.js'), 'utf8');
  assert.match(storage, /await auth\.authStateReady\(\);/);
  assert.doesNotMatch(storage, /authSdk\.authStateReady/);
});
