const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const core = require('./catalogo-core.js');
const catalogo = require('./catalogo.json');

test('Firebase ausente: falha isolada e pesquisa pública continua acessível', async () => {
  const janela = {};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'conta.js'), 'utf8'), { window: janela });
  await assert.rejects(janela.MBBMeuConta.iniciar(), /Autenticação indisponível/);
  assert.equal(janela.MBBMeuConta.atual(), null);
  assert.ok(core.pesquisar(catalogo, 'git status').length > 0);
  const pagina = fs.readFileSync(path.join(__dirname, 'pesquisar.html'), 'utf8');
  assert.doesNotMatch(pagina, /firebase-config|conta\.js|academia-storage/);
});

test('configuração própria, App Check e regras mantêm a Academia isolada', () => {
  const configuracao = fs.readFileSync(path.join(__dirname, 'firebase-config.js'), 'utf8');
  const conta = fs.readFileSync(path.join(__dirname, 'conta.js'), 'utf8');
  const regrasAcademia = fs.readFileSync(path.resolve(__dirname, '../firestore.rules'), 'utf8');
  const regrasMeuMbb = fs.readFileSync(path.join(__dirname, 'firestore.rules'), 'utf8');
  assert.match(configuracao, /projectId:\s*'meu-mbb-producao'/);
  assert.match(configuracao, /appCheckSiteKey:\s*'[^']+'/);
  assert.match(conta, /ReCaptchaEnterpriseProvider/);
  assert.match(conta, /isTokenAutoRefreshEnabled:\s*true/);
  const estilos = fs.readFileSync(path.join(__dirname, 'estilo.css'), 'utf8');
  assert.match(estilos, /\.mbb-abas\[hidden\][^{]*\{\s*display:\s*none/);
  assert.doesNotMatch(configuracao, /academia-mundo-bit-byte/);
  assert.doesNotMatch(regrasAcademia, /match \/meuMbb\//);
  assert.match(regrasMeuMbb, /match \/meuMbb\/\{uid\}\/registros\/\{conteudoId\}/);
});

test('navegação pública mantém suas páginas e o script da home independente da conta', () => {
  const inicio = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const git = fs.readFileSync(path.resolve(__dirname, '../pages/git.html'), 'utf8');
  assert.match(inicio, /<script src="js\/home\.js/);
  assert.match(git, /<script src="\.\.\/js\/git-core-canonico\.js/);
  assert.ok(inicio.indexOf('js/home.js') < inicio.indexOf('meu-mbb/conta.js'));
  assert.ok(git.indexOf('git-core-canonico.js') < git.indexOf('meu-mbb/conta.js'));
});
