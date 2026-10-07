import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

for (const file of [
  'pages/analise-sistemas/14-integracao-final.html',
  'pages/analise-sistemas/dossie-final-assistencia-tecnica-conecta.html',
  'css/analise-sistemas-final.css'
]) {
  try { await fs.access(file); } catch { failures.push(`Arquivo obrigatório ausente: ${file}`); }
}

const candidates = ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) {
  try { await fs.access(candidate); executablePath = candidate; break; } catch {}
}
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] });

try {
  for (const viewport of [
    {name:'mobile-360', width:360, height:800},
    {name:'mobile-390', width:390, height:844},
    {name:'desktop-1366', width:1366, height:900}
  ]) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error?.message || error)));
    await page.setViewport({width:viewport.width, height:viewport.height, deviceScaleFactor:1});

    await page.goto(`${base}/pages/analise-sistemas/14-integracao-final.html`, {waitUntil:'networkidle0'});
    const finalStage = await page.evaluate(() => ({
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      stages: document.querySelectorAll('.stage-link').length,
      approaches: document.querySelectorAll('.approach-card').length,
      spiral: Boolean(document.querySelector('.spiral-visual svg')),
      spiralText: document.querySelector('.spiral-note')?.textContent || '',
      dossierHref: document.querySelector('.dossier-launch a')?.getAttribute('href') || '',
      dossierLabel: document.querySelector('.dossier-launch a')?.textContent?.trim() || '',
      hasCascade: document.body.textContent.includes('Cascata'),
      hasIterative: document.body.textContent.includes('Iterativo e Incremental'),
      hasAgile: document.body.textContent.includes('Abordagem Ágil'),
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    }));

    assert(finalStage.h1.includes('Integração final'), `${viewport.name}: H1 final inesperado.`);
    assert(finalStage.stages === 15, `${viewport.name}: o módulo deve continuar com 15 etapas; encontrou ${finalStage.stages}.`);
    assert(finalStage.approaches === 4, `${viewport.name}: deveriam existir 4 modelos/abordagens; encontrou ${finalStage.approaches}.`);
    assert(finalStage.spiral, `${viewport.name}: representação visual do Modelo Espiral ausente.`);
    assert(finalStage.spiralText.includes('planejar') && finalStage.spiralText.includes('analisar riscos') && finalStage.spiralText.includes('construir/prototipar') && finalStage.spiralText.includes('avaliar') && finalStage.spiralText.includes('revisar') && finalStage.spiralText.includes('avançar'), `${viewport.name}: ciclo do Modelo Espiral incompleto.`);
    assert(finalStage.hasCascade && finalStage.hasIterative && finalStage.hasAgile, `${viewport.name}: modelos de desenvolvimento incompletos.`);
    assert(finalStage.dossierHref === 'dossie-final-assistencia-tecnica-conecta.html', `${viewport.name}: link do Dossiê Final incorreto: ${finalStage.dossierHref}.`);
    assert(finalStage.dossierLabel === 'Abrir Dossiê Final', `${viewport.name}: ação do Dossiê Final não está clara.`);
    assert(finalStage.scrollWidth <= finalStage.innerWidth + 2, `${viewport.name}: etapa 14 criou overflow global.`);

    await page.goto(`${base}/pages/analise-sistemas/dossie-final-assistencia-tecnica-conecta.html`, {waitUntil:'networkidle0'});
    const dossier = await page.evaluate(() => ({
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      sections: document.querySelectorAll('.dossier-section').length,
      tables: document.querySelectorAll('.dossier-document table').length,
      printButton: [...document.querySelectorAll('button')].some(button => button.textContent.includes('Imprimir')),
      hasProblem: document.body.textContent.includes('Problema e contexto'),
      hasStakeholders: document.body.textContent.includes('Stakeholders e escopo'),
      hasAsIs: document.body.textContent.includes('Processo AS-IS'),
      hasToBe: document.body.textContent.includes('Processo TO-BE'),
      hasRequirements: document.body.textContent.includes('Requisitos funcionais, regras e critérios de aceitação'),
      hasRnfs: document.body.textContent.includes('Requisitos não funcionais'),
      hasUseCases: document.body.textContent.includes('Casos de Uso e modelos UML necessários'),
      hasBacklog: document.body.textContent.includes('Backlog, MVP e Story Map'),
      hasPrototype: document.body.textContent.includes('Protótipo e validações'),
      hasSecurity: document.body.textContent.includes('Segurança, privacidade, acessibilidade e integrações'),
      hasViability: document.body.textContent.includes('Viabilidade e riscos'),
      hasTraceability: document.body.textContent.includes('Rastreabilidade'),
      hasDecisions: document.body.textContent.includes('Decisões importantes'),
      hasPending: document.body.textContent.includes('Pendências conhecidas'),
      hasHandoff: document.body.textContent.includes('Condições para início do desenvolvimento'),
      hasNoFakeResults: document.body.textContent.includes('O modelo não inventa resultados que ainda não foram observados'),
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    }));

    assert(dossier.h1 === 'Dossiê Final da Assistência Técnica Conecta', `${viewport.name}: Dossiê Final não abriu corretamente.`);
    assert(dossier.sections >= 18, `${viewport.name}: Dossiê deveria consolidar ao menos 18 blocos; encontrou ${dossier.sections}.`);
    assert(dossier.tables >= 10, `${viewport.name}: Dossiê perdeu tabelas de consolidação; encontrou ${dossier.tables}.`);
    assert(dossier.printButton, `${viewport.name}: Dossiê não oferece impressão/salvar PDF.`);
    assert(dossier.hasProblem && dossier.hasStakeholders && dossier.hasAsIs && dossier.hasToBe, `${viewport.name}: Dossiê perdeu núcleo problema/processos.`);
    assert(dossier.hasRequirements && dossier.hasRnfs && dossier.hasUseCases, `${viewport.name}: Dossiê perdeu especificação/modelagem.`);
    assert(dossier.hasBacklog && dossier.hasPrototype && dossier.hasSecurity, `${viewport.name}: Dossiê perdeu produto/validação/qualidade.`);
    assert(dossier.hasViability && dossier.hasTraceability && dossier.hasDecisions, `${viewport.name}: Dossiê perdeu viabilidade/rastreabilidade/decisões.`);
    assert(dossier.hasPending && dossier.hasHandoff, `${viewport.name}: Dossiê precisa explicitar pendências e condição de passagem.`);
    assert(dossier.hasNoFakeResults, `${viewport.name}: Dossiê deveria deixar explícito que não inventa resultados de teste.`);
    assert(dossier.scrollWidth <= dossier.innerWidth + 2, `${viewport.name}: Dossiê criou overflow horizontal global.`);
    assert(errors.length === 0, `${viewport.name}: erros JavaScript: ${errors.join(' | ')}`);

    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('FALHAS — FECHAMENTO ANÁLISE DE SISTEMAS');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log('FECHAMENTO ANÁLISE DE SISTEMAS: OK — modelos + Dossiê Final validados.');
