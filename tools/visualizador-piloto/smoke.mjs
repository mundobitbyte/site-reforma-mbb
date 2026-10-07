import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const requiredFiles = [
  'css/mbb-visualizador.css',
  'js/mbb-visualizador.js',
  'js/mbb-visualizador-site.js',
  'js/mbb-visualizador-piloto.js',
  'js/analise-sistemas-visuais-autocritica.js',
  'js/appinventor.js',
  'js/arduino-destaques-mbb.js',
  'js/bancodedados.js',
  'js/reactnative-ajustes-finais-mbb.js',
  'js/infraestrutura/destaques-mbb.js',
  'js/informatica-produtividade/destaques-mbb.js',
  'js/ds-fisica/app.js',
  'js/ds-quimica/app.js',
  'js/ds-matematica/navegacao.js',
  'pages/python.html',
  'pages/analise-sistemas/05-processo-to-be-bpmn.html'
];

for (const file of requiredFiles) {
  try { await fs.access(file); } catch { failures.push(`Arquivo obrigatório ausente: ${file}`); }
}

const hookedFiles = [
  'js/analise-sistemas-visuais-autocritica.js',
  'js/appinventor.js',
  'js/arduino-destaques-mbb.js',
  'js/bancodedados.js',
  'js/reactnative-ajustes-finais-mbb.js',
  'js/infraestrutura/destaques-mbb.js',
  'js/informatica-produtividade/destaques-mbb.js',
  'js/ds-fisica/app.js',
  'js/ds-quimica/app.js',
  'js/ds-matematica/navegacao.js',
  'pages/python.html'
];
for (const file of hookedFiles) {
  const text = await fs.readFile(file, 'utf8');
  assert(text.includes('mbb-visualizador-site.js'), `${file}: não carrega a camada seletiva global.`);
}

const candidates = ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) { try { await fs.access(candidate); executablePath = candidate; break; } catch {} }
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({ executablePath, headless:true, args:['--no-sandbox','--disable-dev-shm-usage'] });

async function newPage(width, height) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error?.message || error)));
  await page.setViewport({ width, height, deviceScaleFactor:1 });
  return { page, errors };
}

async function testAnaliseTable(width, height, requireViewer) {
  const label = `Análise ${width}x${height}`;
  const { page, errors } = await newPage(width, height);
  await page.goto(`${base}/pages/analise-sistemas/05-processo-to-be-bpmn.html`, { waitUntil:'networkidle0' });
  await wait(250);

  const tableInfo = await page.evaluate(() => {
    const table = [...document.querySelectorAll('table')].find(t => t.querySelector('th')?.textContent.trim() === 'Problema observado');
    const host = table?.closest('.table-wrap') || table;
    return {
      exists: Boolean(table),
      marked: host?.dataset.mbbAmpliavel === 'tabela',
      trigger: host?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]') || false,
      columns: table?.querySelectorAll('thead th').length || 0,
      globalOverflow: document.documentElement.scrollWidth - window.innerWidth,
      localDiagramStillLocal: [...document.querySelectorAll('.visual[data-zoomable="true"]')].every(v => !v.dataset.mbbAmpliavel)
    };
  });
  assert(tableInfo.exists && tableInfo.columns === 3, `${label}: tabela AS-IS × TO-BE não encontrada.`);
  assert(tableInfo.globalOverflow <= 2, `${label}: criou overflow horizontal global (${tableInfo.globalOverflow}px).`);
  assert(tableInfo.localDiagramStillLocal, `${label}: visualizador global invadiu diagramas já tratados pelo visualizador local.`);
  if (requireViewer) {
    assert(tableInfo.marked && tableInfo.trigger, `${label}: tabela larga não recebeu “Ver tabela completa”.`);
  }

  // Prova de seletividade: uma tabela pequena de 2 colunas não deve ganhar botão.
  await page.evaluate(() => {
    const wrap = document.createElement('div');
    wrap.id = 'smoke-small-table';
    wrap.className = 'table-wrap';
    wrap.innerHTML = '<table><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>A</td><td>1</td></tr></tbody></table>';
    document.querySelector('main')?.appendChild(wrap);
  });
  await wait(180);
  const smallMarked = await page.$eval('#smoke-small-table', el => Boolean(el.dataset.mbbAmpliavel));
  assert(!smallMarked, `${label}: tabela pequena de 2 colunas foi marcada indevidamente.`);

  if (tableInfo.marked) {
    await page.evaluate(() => {
      const table = [...document.querySelectorAll('table')].find(t => t.querySelector('th')?.textContent.trim() === 'Problema observado');
      const host = table?.closest('.table-wrap') || table;
      host?.nextElementSibling?.click();
    });
    await wait(80);
    const opened = await page.evaluate(() => ({
      hidden: document.getElementById('mbbVisualizador')?.hidden,
      tag: document.querySelector('#mbbVisualizador .mbb-visualizador-table-clone')?.tagName,
      headers: document.querySelectorAll('#mbbVisualizador .mbb-visualizador-table-clone th').length,
      rotateHidden: document.querySelector('[data-mbb-view-action="rotate"]')?.hidden,
      readableHidden: document.querySelector('[data-mbb-view-action="readable"]')?.hidden
    }));
    assert(opened.hidden === false && opened.tag === 'TABLE', `${label}: tabela não abriu como HTML real.`);
    assert(opened.headers === 3, `${label}: clone perdeu colunas.`);
    assert(opened.rotateHidden === false && opened.readableHidden === false, `${label}: controles da tabela estão incompletos.`);

    await page.click('[data-mbb-view-action="rotate"]');
    const rotated = await page.$eval('.mbb-visualizador-table-clone', el => el.style.transform || '');
    assert(rotated.includes('rotate(90deg)'), `${label}: Girar não aplicou 90°.`);
    await page.click('[data-mbb-view-action="rotate"]');
    const normal = await page.$eval('.mbb-visualizador-table-clone', el => el.style.transform || '');
    assert(!normal.includes('rotate(90deg)'), `${label}: segundo Girar não voltou à orientação normal.`);
    await page.keyboard.press('Escape');
  }

  assert(errors.length === 0, `${label}: erros JavaScript: ${errors.join(' | ')}`);
  await page.close();
}

async function prepareProgramacao(page) {
  await page.goto(`${base}/pages/programacao.html`, { waitUntil:'networkidle0' });
  await page.evaluate(() => document.querySelector('button[data-module="pensar"]')?.click());
  await wait(100);
  const count = await page.$$eval('#menu button', buttons => buttons.length);
  for (let index = 0; index < count; index++) {
    const buttons = await page.$$('#menu button');
    await buttons[index]?.click();
    await wait(70);
    const found = await page.evaluate(() => [...document.querySelectorAll('.flowchart-panel-v3')].some(panel =>
      panel.querySelector('.flowchart-panel-heading strong')?.textContent.trim().startsWith('Fluxograma 4')
    ));
    if (found) return true;
  }
  return false;
}

async function testProgramacaoGraphic() {
  const { page, errors } = await newPage(390, 844);
  const found = await prepareProgramacao(page);
  assert(found, 'Programação: Fluxograma 4 não encontrado.');
  await wait(180);
  const state = await page.evaluate(() => {
    const panel = [...document.querySelectorAll('.flowchart-panel-v3')].find(p => p.querySelector('.flowchart-panel-heading strong')?.textContent.trim().startsWith('Fluxograma 4'));
    return {
      marked: panel?.dataset.mbbAmpliavel === 'grafico',
      trigger: panel?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]') || false,
      overflow: document.documentElement.scrollWidth - window.innerWidth
    };
  });
  assert(state.marked && state.trigger, 'Programação: Fluxograma 4 não recebeu ampliador seletivo.');
  assert(state.overflow <= 2, `Programação: overflow global de ${state.overflow}px.`);
  await page.evaluate(() => {
    const panel = [...document.querySelectorAll('.flowchart-panel-v3')].find(p => p.querySelector('.flowchart-panel-heading strong')?.textContent.trim().startsWith('Fluxograma 4'));
    panel?.nextElementSibling?.click();
  });
  await wait(80);
  assert(await page.$eval('#mbbVisualizador', el => !el.hidden), 'Programação: visualizador não abriu.');
  assert(await page.$eval('[data-mbb-view-action="readable"]', el => el.hidden), 'Programação: gráfico não deve mostrar “Tamanho legível”.');
  await page.keyboard.press('Escape');
  assert(errors.length === 0, `Programação: erros JavaScript: ${errors.join(' | ')}`);
  await page.close();
}

async function testBancoDer() {
  const { page, errors } = await newPage(390, 844);
  await page.goto(`${base}/pages/bancodedados.html`, { waitUntil:'networkidle0' });
  await page.click('#btn-modelagem');
  await wait(220);
  const state = await page.evaluate(() => {
    const der = document.querySelector('svg .der-entity')?.closest('svg');
    const target = der?.closest('[data-mbb-ampliavel="grafico"]');
    return { found:Boolean(der), marked:Boolean(target), trigger:target?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]') || false };
  });
  assert(state.found, 'Banco de Dados: DER não encontrado.');
  assert(state.marked && state.trigger, 'Banco de Dados: DER técnico não recebeu ampliador.');
  assert(errors.length === 0, `Banco de Dados: erros JavaScript: ${errors.join(' | ')}`);
  await page.close();
}

async function testAppInventorBlock() {
  const { page, errors } = await newPage(390, 844);
  await page.goto(`${base}/pages/appinventor.html`, { waitUntil:'networkidle0' });
  const image = await page.$('img[src*="bloco_whatsapp.webp"]');
  assert(Boolean(image), 'App Inventor: imagem de blocos WhatsApp não encontrada.');
  if (image) {
    await image.evaluate(el => el.scrollIntoView({ block:'center' }));
    await page.evaluate(async () => {
      const img = document.querySelector('img[src*="bloco_whatsapp.webp"]');
      if (img && !img.complete) await new Promise(resolve => { img.addEventListener('load', resolve, {once:true}); setTimeout(resolve, 1500); });
      await window.MBBVisualizadorSite?.scan(document);
    });
    await wait(120);
    const state = await page.evaluate(() => {
      const img = document.querySelector('img[src*="bloco_whatsapp.webp"]');
      const target = img?.closest('[data-mbb-ampliavel="grafico"]');
      return { marked:Boolean(target), trigger:target?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]') || false };
    });
    assert(state.marked && state.trigger, 'App Inventor: imagem técnica de blocos não recebeu ampliador.');
  }
  assert(errors.length === 0, `App Inventor: erros JavaScript: ${errors.join(' | ')}`);
  await page.close();
}

try {
  await testAnaliseTable(360, 800, true);
  await testAnaliseTable(390, 844, true);
  await testAnaliseTable(1366, 900, false);
  await testProgramacaoGraphic();
  await testBancoDer();
  await testAppInventorBlock();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nFalhas do visualizador global seletivo MbB:');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}
console.log('Visualizador global seletivo MbB validado: tabela real, rotação, seletividade e visuais técnicos.');
