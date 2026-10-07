import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const modo = await fs.readFile('MODO_MBB.md', 'utf8');
const busca = await fs.readFile('js/mbb-busca-global.js', 'utf8');
const visitas = await fs.readFile('meu-mbb/visitas-diretas.js', 'utf8');
const seletor = await fs.readFile('js/mbb-visualizador-site.js', 'utf8');

assert(modo.includes('Regra obrigatória de legibilidade e ampliação visual'), 'MODO_MBB.md: regra de ampliação visual não está formalizada.');
assert(modo.includes('Se ampliar ajuda a compreender'), 'MODO_MBB.md: critério pedagógico de ampliação ausente.');
assert(modo.includes('Revisão transversal obrigatória ao tocar em conteúdo antigo'), 'MODO_MBB.md: revisão transversal de conteúdo alterado ausente.');
assert(busca.includes('mbb-visualizador-site.js'), 'mbb-busca-global.js: visualizador seletivo não é carregado globalmente.');
assert(busca.includes('data-mbb-visualizador-site') || busca.includes('mbbVisualizadorSite'), 'mbb-busca-global.js: proteção contra carregamento duplicado ausente.');
assert(!visitas.includes("pagina.startsWith('pages/qts/') || pagina.startsWith('pages/seguranca-dados/')"), 'visitas-diretas.js: ainda existe exceção específica de QTS/Segurança para o visualizador.');
assert(seletor.includes('if (!changed && !window.MBBVisualizador) return;'), 'mbb-visualizador-site.js: núcleo não está em carregamento seletivo/lazy.');
assert(seletor.includes('.risk-scene-wrap'), 'mbb-visualizador-site.js: cena de riscos de SDI não está contemplada entre os visuais técnicos explícitos.');

async function paginasDoModulo(dir) {
  return (await fs.readdir(dir, { withFileTypes:true }))
    .filter(entrada => entrada.isFile() && entrada.name.endsWith('.html'))
    .map(entrada => path.posix.join(dir.replaceAll('\\', '/'), entrada.name))
    .sort();
}

const modulos = [
  { nome:'SDI', dir:'pages/seguranca-dados', paginas:await paginasDoModulo('pages/seguranca-dados') },
  { nome:'QTS', dir:'pages/qts', paginas:await paginasDoModulo('pages/qts') }
];

const candidates = ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) {
  try { await fs.access(candidate); executablePath = candidate; break; } catch {}
}
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({ executablePath, headless:true, args:['--no-sandbox','--disable-dev-shm-usage'] });
const resumo = [];

async function auditarPagina(page, arquivo, modulo) {
  const errors = [];
  const onError = error => errors.push(String(error?.message || error));
  page.on('pageerror', onError);
  await page.setViewport({ width:360, height:800, deviceScaleFactor:1 });
  await page.goto(`${base}/${arquivo}`, { waitUntil:'networkidle0' });
  await wait(280);

  const state = await page.evaluate(() => {
    const hostDaTabela = table => table.closest('.table-wrap,.table-responsive,.responsive-table,.table-container,[class*="table-wrap"],[class*="table-responsive"]') || table;
    const tabelas = [...document.querySelectorAll('table')];
    const detalhes = tabelas.map((table, indice) => {
      const host = hostDaTabela(table);
      const elegivel = Boolean(window.MBBVisualizadorSite?.tableNeedsViewer?.(table));
      const marcado = host?.dataset?.mbbAmpliavel === 'tabela';
      const trigger = Boolean(host?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]'));
      return {
        indice: indice + 1,
        colunas: table.rows?.[0]?.cells?.length || 0,
        elegivel,
        marcado,
        trigger,
        titulo: table.querySelector('caption')?.textContent?.trim() || table.closest('section,article')?.querySelector('h2,h3')?.textContent?.trim() || `Tabela ${indice + 1}`
      };
    });

    const ampliaveisGraficos = [...document.querySelectorAll('[data-mbb-ampliavel="grafico"]')].map((host, indice) => ({
      indice: indice + 1,
      trigger: Boolean(host.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]')),
      titulo: host.dataset.mbbTitulo || host.querySelector('img,svg')?.getAttribute('alt') || `Visual ${indice + 1}`
    }));

    const riskHost = document.querySelector('.risk-scene')?.closest('.risk-scene-wrap');
    const riskScene = riskHost ? {
      marcado: riskHost.dataset.mbbAmpliavel === 'grafico',
      trigger: Boolean(riskHost.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]'))
    } : null;

    return {
      siteLoaded: window.__MBB_VISUALIZADOR_SITE__ === true,
      tabelas: detalhes,
      graficos: ampliaveisGraficos,
      riskScene,
      imagens: document.querySelectorAll('img').length,
      svgs: document.querySelectorAll('svg').length,
      overflow: document.documentElement.scrollWidth - window.innerWidth
    };
  });

  assert(state.siteLoaded, `${modulo} · ${arquivo}: camada global de visualização não carregou.`);
  assert(state.overflow <= 2, `${modulo} · ${arquivo}: criou overflow horizontal global (${state.overflow}px).`);
  assert(errors.length === 0, `${modulo} · ${arquivo}: erros JavaScript: ${errors.join(' | ')}`);

  for (const tabela of state.tabelas) {
    if (tabela.elegivel) {
      assert(tabela.marcado && tabela.trigger,
        `${modulo} · ${arquivo} · tabela ${tabela.indice} (${tabela.titulo}): deveria ampliar, mas não recebeu o botão.`);
    }
  }
  for (const grafico of state.graficos) {
    assert(grafico.trigger,
      `${modulo} · ${arquivo} · visual ${grafico.indice} (${grafico.titulo}): foi marcado como ampliável, mas ficou sem botão.`);
  }

  if (modulo === 'SDI' && arquivo.endsWith('/16-projeto-final.html')) {
    assert(state.riskScene, 'SDI · projeto final: cena “encontre os riscos” não foi encontrada.');
    assert(state.riskScene?.marcado && state.riskScene?.trigger,
      'SDI · projeto final: cena “encontre os riscos” deveria receber o botão de ampliar.');
  }

  resumo.push({
    modulo,
    arquivo,
    tabelas: state.tabelas.length,
    elegiveis: state.tabelas.filter(item => item.elegivel).length,
    ampliadas: state.tabelas.filter(item => item.marcado && item.trigger).length,
    graficos: state.graficos.length,
    imagens: state.imagens,
    svgs: state.svgs
  });
  page.off('pageerror', onError);
}

try {
  const page = await browser.newPage();
  for (const modulo of modulos) {
    assert(modulo.paginas.length > 0, `${modulo.nome}: nenhuma página HTML encontrada.`);
    for (const arquivo of modulo.paginas) await auditarPagina(page, arquivo, modulo.nome);
  }
  await page.close();
} finally {
  await browser.close();
}

const total = (campo, modulo = null) => resumo
  .filter(item => !modulo || item.modulo === modulo)
  .reduce((soma, item) => soma + item[campo], 0);

for (const modulo of modulos) {
  const paginas = resumo.filter(item => item.modulo === modulo.nome);
  console.log(`${modulo.nome}: ${paginas.length} páginas, ${total('tabelas', modulo.nome)} tabelas, ${total('elegiveis', modulo.nome)} tabelas que pedem ampliação, ${total('ampliadas', modulo.nome)} com botão, ${total('graficos', modulo.nome)} visuais técnicos ampliáveis.`);
}

if (failures.length) {
  console.error('\nFalhas da varredura visual MbB em SDI e QTS:');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log('Varredura visual MbB concluída em todas as páginas de SDI e QTS: tabelas elegíveis e visuais técnicos relevantes possuem ampliação.');
