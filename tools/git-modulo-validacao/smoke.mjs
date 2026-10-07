import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const legacyFiles = [
  'js/git.js',
  'js/git-versoes.js',
  'js/git-mbb-continuidad.js',
  'js/git-mbb-fechamento.js',
  'js/git-mbb-fechamento-ajustes.js',
  'js/git-pasta-rede.js',
  'js/git-mbb-recuperacao-didatica.js',
  'js/git-mbb-github-didatico.js',
  'js/git-mbb-compreensao.js',
  'js/git-mbb-comandos.js',
  'js/git-mbb-comandos-rede.js',
  'js/git-mbb-checkpoint-comandos.js',
  'js/git-mbb-remover-repositorio.js',
  'js/git-mbb-auditoria-iniciante.js',
  'js/git-mbb-auditoria-iniciante-rede.js'
];
const canonicalScripts = [
  'git-conteudo-canonico.js',
  'git-exercicios-canonico.js',
  'git-comandos-canonico.js',
  'git-core-canonico.js',
  'git-ui-canonico.js'
];
const optionalPilotScripts = [
  'firebase-config.js',
  'catalogo-core.js',
  'conta.js',
  'piloto-git.js'
];
const transversalScripts = ['mbb-visualizador-site.js'];

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const file of legacyFiles) {
  try {
    await fs.access(file);
    failures.push(`Arquivo legado ainda existe: ${file}`);
  } catch {}
}

const candidates = ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) {
  try {
    await fs.access(candidate);
    executablePath = candidate;
    break;
  } catch {}
}
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});

try {
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(String(error?.message || error)));
  await page.setViewport({width: 1366, height: 900});
  await page.goto(`${base}/pages/git.html`, {waitUntil: 'networkidle0'});
  await page.waitForFunction(() => window.__MBB_GIT_CANONICAL_READY__ === true, {timeout: 20000});

  const scripts = await page.$$eval('script[src]', elements =>
    elements.map(element => new URL(element.src).pathname.split('/').pop())
  );
  assert(JSON.stringify(scripts) === JSON.stringify([...transversalScripts, ...canonicalScripts, ...optionalPilotScripts, 'mbb-busca-global.js']),
    `Scripts carregados divergem da arquitetura canônica, transversal e do piloto: ${scripts.join(', ')}`);
  await fs.mkdir('artifacts/meu-mbb', {recursive: true});
  await page.screenshot({path: 'artifacts/meu-mbb/git-desktop.png', fullPage: true});

  const snapshotCounts = await page.evaluate(() => ({
    git: window.__MBB_GIT_CANONICAL_SNAPSHOT__.gitSteps.length,
    github: window.__MBB_GIT_CANONICAL_SNAPSHOT__.githubSteps.length,
    exercicios: window.__MBB_GIT_CANONICAL_SNAPSHOT__.exerciseSteps.length,
    comandos: window.__MBB_GIT_CANONICAL_SNAPSHOT__.commandSteps.length
  }));
  const expectedCounts = {git: 12, github: 10, exercicios: 23, comandos: 12};
  for (const [module, expected] of Object.entries(expectedCounts)) {
    assert(snapshotCounts[module] === expected, `${module}: esperado ${expected}; encontrado ${snapshotCounts[module]}.`);
    await page.evaluate(moduleName => window.setModule(moduleName, null, false), module);
    const menuCount = await page.$$eval('#menu .nav-btn', buttons => buttons.length);
    assert(menuCount === expected, `${module}: menu esperado ${expected}; encontrado ${menuCount}.`);
  }

  const critical = [
    ['git', '2', 'Git CMD'],
    ['git', '3', 'safe.directory'],
    ['git', '4', 'git init'],
    ['github', '1', 'escolha Public'],
    ['github', '9', 'git merge --no-edit teste-reservas'],
    ['github', '10', 'git pull --no-rebase --no-edit'],
    ['exercicios', 'e2', 'detected dubious ownership'],
    ['exercicios', 'e20', 'git merge --no-edit teste-divulgacao'],
    ['comandos', 'rede', 'safe.directory'],
    ['comandos', 'diagnostico', 'rmdir /s /q .git'],
    ['comandos', 'checkpoint', 'Perdeu uma aula']
  ];

  for (const [module, id, needle] of critical) {
    await page.evaluate((moduleName, stepId) => window.setModule(moduleName, stepId, false), module, id);
    const text = await page.$eval('#lesson', element => element.textContent);
    assert(text.includes(needle), `${module}/${id}: não encontrou "${needle}".`);
  }

  await page.evaluate(() => window.setModule('comandos', 'diagnostico', false));
  const destructiveCopy = await page.$$eval('[data-copy-text],[data-rede-copy]', buttons =>
    buttons.some(button => (button.getAttribute('data-copy-text') || button.getAttribute('data-rede-copy') || '').includes('rmdir /s /q .git'))
  );
  assert(!destructiveCopy, 'Diagnóstico voltou a oferecer botão Copiar para rmdir /s /q .git.');

  await page.evaluate(() => window.setModule('comandos', 'checkpoint', false));
  assert(await page.$('[data-checkpoint-open]') !== null, 'Checkpoint perdeu o botão Abrir arquivo.');
  assert(await page.$('[data-checkpoint-download]') !== null, 'Checkpoint perdeu o botão Baixar .TXT.');
  const checkpoint = await page.evaluate(async () => {
    const response = await fetch('../assets/git-github-checkpoint-comandos.txt?v=7');
    return {ok: response.ok, text: response.ok ? await response.text() : ''};
  });
  assert(checkpoint.ok, 'Checkpoint .TXT não pôde ser carregado.');
  assert(checkpoint.text.includes('safe.directory'), 'Checkpoint perdeu safe.directory.');
  assert(checkpoint.text.includes('%(prefix)///'), 'Checkpoint perdeu a orientação %(prefix)///.');

  await page.evaluate(() => window.setModule('git', '1', false));
  const next = await page.$('.lesson-footer [data-step-nav]');
  assert(next !== null, 'Rodapé não criou navegação para a próxima etapa.');
  if (next) {
    await next.click();
    await page.waitForFunction(() => document.getElementById('stepTitle')?.textContent?.startsWith('2 —'), {timeout: 5000});
  }

  await page.evaluate(() => window.setModule('git', '4', true));
  const currentHash = await page.evaluate(() => location.hash);
  assert(currentHash === '#git-4', `Hash de navegação incorreto: ${currentHash}`);

  await page.evaluate(() => window.setModule('comandos', null, false));
  const lastCommandButton = await page.$('#menu .nav-btn:last-child');
  assert(lastCommandButton !== null, 'Comandos não possui última etapa no menu.');
  if (lastCommandButton) {
    await lastCommandButton.click();
    const completion = await page.$eval('.lesson-footer button:last-child', element => element.textContent.trim());
    assert(completion === 'Comandos concluídos', `Fechamento de Comandos incorreto: ${completion}`);
  }

  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});
  await page.reload({waitUntil: 'networkidle0'});
  await page.waitForFunction(() => window.__MBB_GIT_CANONICAL_READY__ === true, {timeout: 20000});
  const mobile = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    title: document.getElementById('stepTitle')?.textContent || '',
    buttons: document.querySelectorAll('.module-btn').length
  }));
  assert(mobile.scrollWidth <= mobile.innerWidth + 2, `Layout móvel criou rolagem horizontal: ${mobile.scrollWidth}px para ${mobile.innerWidth}px.`);
  assert(mobile.buttons === 4, `Layout móvel perdeu botões de módulo: ${mobile.buttons}.`);
  assert(Boolean(mobile.title), 'Layout móvel não renderizou o título da etapa.');
  await page.screenshot({path: 'artifacts/meu-mbb/git-celular.png', fullPage: true});

  await page.setViewport({width: 1366, height: 900});
  await page.goto(`${base}/meu-mbb/pesquisar.html`, {waitUntil: 'networkidle0'});
  await page.type('#consulta', 'git status');
  await page.waitForFunction(() => document.querySelectorAll('.mbb-resultado').length > 0);
  const resultados = await page.$$eval('.mbb-resultado a', links => links.map(link => link.getAttribute('href')));
  assert(resultados[0]?.includes('pages/git.html#git-5'), 'Pesquisa não priorizou a etapa principal de git status.');
  assert(resultados.some(href => href.includes('pages/git.html#git-5')), 'Pesquisa não encontrou a etapa de git status.');
  await page.screenshot({path: 'artifacts/meu-mbb/pesquisa-desktop.png', fullPage: true});
  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});
  const larguraBusca = await page.evaluate(() => ({tela: innerWidth, pagina: document.documentElement.scrollWidth}));
  assert(larguraBusca.pagina <= larguraBusca.tela + 2, 'Pesquisa criou rolagem horizontal no celular.');
  await page.screenshot({path: 'artifacts/meu-mbb/pesquisa-celular.png', fullPage: true});
  await page.goto(`${base}/meu-mbb/entrar.html`, {waitUntil: 'networkidle0'});
  assert(await page.$('#form-entrar') !== null && await page.$('#form-criar') !== null, 'Formulários de conta ausentes.');
  await page.screenshot({path: 'artifacts/meu-mbb/entrar-celular.png', fullPage: true});
  await page.setViewport({width: 1366, height: 900});
  await page.screenshot({path: 'artifacts/meu-mbb/entrar-desktop.png', fullPage: true});
  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});

  // Interrompe a camada Firebase e repete o acesso público sem fazer login.
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.url().includes('gstatic.com/firebasejs')) request.abort();
    else request.continue();
  });
  await page.goto(`${base}/index.html`, {waitUntil: 'networkidle0'});
  assert(await page.$('#areas') !== null, 'Home falhou com Firebase indisponível.');
  assert(await page.$('a[href="meu-mbb/pesquisar.html"]') !== null, 'Home perdeu a pesquisa pública.');
  const larguraHome = await page.evaluate(() => ({tela: innerWidth, pagina: document.documentElement.scrollWidth}));
  assert(larguraHome.pagina <= larguraHome.tela + 2, 'Home criou rolagem horizontal no celular.');
  await page.screenshot({path: 'artifacts/meu-mbb/home-celular-firebase-indisponivel.png', fullPage: true});
  await page.click('[data-area-link="programacao-desenvolvimento"]');
  assert(await page.$eval('#programacao-desenvolvimento', element => !element.hidden), 'Home não abriu área de Programação.');
  assert(await page.$('#programacao-desenvolvimento a[href="pages/reactnative.html"]') !== null,
    'Home perdeu módulo React Native.');
  await page.click('#programacao-desenvolvimento [data-back]');
  await page.waitForFunction(() => !document.getElementById('areas').hidden);
  await page.goto(`${base}/pages/git.html#git-3`, {waitUntil: 'networkidle0'});
  assert((await page.$eval('#lesson', element => element.textContent)).includes('safe.directory'), 'Git não abriu sem Firebase.');
  await page.goto(`${base}/meu-mbb/pesquisar.html`, {waitUntil: 'networkidle0'});
  await page.type('#consulta', 'pasta de rede');
  await page.waitForFunction(() => document.querySelectorAll('.mbb-resultado').length > 0);
  assert((await page.$$eval('.mbb-resultado a', links => links.map(link => link.href))).some(href => href.includes('#git-3')),
    'Pesquisa pública falhou com Firebase indisponível.');
  await page.setRequestInterception(false);

  assert(pageErrors.length === 0, `Erros JavaScript no navegador: ${pageErrors.join(' | ')}`);

  if (failures.length) {
    console.error('FALHAS DA VALIDAÇÃO PERMANENTE DO MÓDULO GIT:');
    failures.forEach(item => console.error(`- ${item}`));
    process.exit(1);
  }

  console.log('VALIDAÇÃO PERMANENTE DO MÓDULO GIT: OK');
  console.log(JSON.stringify({snapshotCounts, scripts, criticalChecks: critical.length, mobile}, null, 2));
} finally {
  await browser.close();
}
