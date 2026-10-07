import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
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
  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});

  await page.goto(`${base}/index.html`, {waitUntil: 'networkidle0'});
  const home = await page.evaluate(() => {
    const brand = document.querySelector('header .brand');
    const pesquisar = document.querySelector('.mbb-home-actions a:first-child');
    const entrar = document.querySelector('.mbb-home-actions a:last-child');
    const visivel = elemento => {
      if (!elemento) return false;
      const css = getComputedStyle(elemento);
      const box = elemento.getBoundingClientRect();
      return css.display !== 'none' && css.visibility !== 'hidden' && box.width > 0 && box.height > 0;
    };
    return {
      brand: brand?.textContent.trim() || '',
      brandVisivel: visivel(brand),
      pesquisarVisivel: visivel(pesquisar),
      entrarVisivel: visivel(entrar),
      pesquisarIcone: pesquisar ? getComputedStyle(pesquisar, '::before').backgroundImage : 'none',
      entrarIcone: entrar ? getComputedStyle(entrar, '::before').backgroundImage : 'none',
      largura: document.documentElement.scrollWidth,
      tela: innerWidth
    };
  });
  if (home.brand !== 'Professor Ronaldo Lavestein' || !home.brandVisivel) throw new Error('Assinatura do professor não está visível no cabeçalho mobile.');
  if (!home.pesquisarVisivel || !home.entrarVisivel) throw new Error('Pesquisar ou Entrar não está visível no cabeçalho mobile.');
  if (home.pesquisarIcone === 'none' || home.entrarIcone === 'none') throw new Error('Ações da home perderam diferenciação visual por ícones.');
  if (home.largura > home.tela + 2) throw new Error('Cabeçalho refinado criou rolagem horizontal na home.');

  await page.goto(`${base}/pages/ia/index.html`, {waitUntil: 'networkidle0'});
  await page.waitForSelector('.mbb-busca-global');
  const atalho = await page.$eval('.mbb-busca-global', elemento => {
    const box = elemento.getBoundingClientRect();
    const css = getComputedStyle(elemento);
    return {
      width: box.width,
      height: box.height,
      position: css.position,
      aria: elemento.getAttribute('aria-label'),
      noCabecalho: Boolean(elemento.closest('.topbar, header, .site-header, .course-header'))
    };
  });
  if (atalho.width > 40 || atalho.height > 40) throw new Error(`Atalho mobile não ficou compacto: ${atalho.width}x${atalho.height}.`);
  if (atalho.position === 'fixed') throw new Error('Pesquisa mobile voltou a flutuar sobre o conteúdo.');
  if (!atalho.noCabecalho) throw new Error('Pesquisa mobile não foi inserida no cabeçalho.');
  if (atalho.aria !== 'Pesquisar conteúdos do Mundo bit Byte') throw new Error('Atalho compacto perdeu o rótulo acessível.');

  await page.goto(`${base}/fundamentos-informatica/index.html`, {waitUntil: 'networkidle0'});
  await page.waitForSelector('.site-header .mbb-busca-global');
  const fundamentos = await page.evaluate(() => ({
    largura: document.documentElement.scrollWidth,
    tela: innerWidth,
    buscaNoHeader: Boolean(document.querySelector('.site-header .mbb-busca-global')),
    menuExiste: Boolean(document.querySelector('#openMenu'))
  }));
  if (!fundamentos.buscaNoHeader || !fundamentos.menuExiste) throw new Error('Fundamentos perdeu a busca no cabeçalho ou o botão Conteúdos.');
  if (fundamentos.largura > fundamentos.tela + 2) throw new Error('Pesquisa no cabeçalho criou rolagem horizontal em Fundamentos.');

  await page.setViewport({width: 1366, height: 768, deviceScaleFactor: 1});
  await page.goto(`${base}/pages/analise-sistemas/index.html`, {waitUntil: 'networkidle0'});
  await page.waitForSelector('.course-header .mbb-busca-global');
  const analise = await page.evaluate(() => {
    const busca = document.querySelector('.course-header .mbb-busca-global');
    const brand = document.querySelector('.course-header .brand');
    const css = getComputedStyle(busca);
    return {
      position: css.position,
      texto: busca.textContent.trim(),
      antesDaAssinatura: busca.nextElementSibling === brand,
      largura: document.documentElement.scrollWidth,
      tela: innerWidth
    };
  });
  if (analise.position === 'fixed') throw new Error('Pesquisa desktop ainda está flutuando sobre o menu lateral.');
  if (analise.texto !== 'Pesquisar') throw new Error('Pesquisa desktop perdeu o texto Pesquisar.');
  if (!analise.antesDaAssinatura) throw new Error('Pesquisa não ficou imediatamente antes da assinatura no cabeçalho de Análise de Sistemas.');
  if (analise.largura > analise.tela + 2) throw new Error('Pesquisa no cabeçalho criou rolagem horizontal em Análise de Sistemas.');

  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});
  await page.reload({waitUntil: 'networkidle0'});
  await page.waitForSelector('.course-header .mbb-busca-global');
  const analiseMobile = await page.evaluate(() => {
    const busca = document.querySelector('.course-header .mbb-busca-global');
    const box = busca.getBoundingClientRect();
    return {
      width: box.width,
      height: box.height,
      position: getComputedStyle(busca).position,
      menuVisivel: (() => {
        const menu = document.querySelector('.course-header .menu-toggle');
        if (!menu) return false;
        const css = getComputedStyle(menu);
        const rect = menu.getBoundingClientRect();
        return css.display !== 'none' && rect.width > 0 && rect.height > 0;
      })(),
      largura: document.documentElement.scrollWidth,
      tela: innerWidth
    };
  });
  if (analiseMobile.width > 40 || analiseMobile.height > 40) throw new Error('Pesquisa não ficou compacta no mobile de Análise de Sistemas.');
  if (analiseMobile.position === 'fixed') throw new Error('Pesquisa mobile de Análise de Sistemas voltou a flutuar sobre a navegação.');
  if (!analiseMobile.menuVisivel) throw new Error('Menu mobile de Análise de Sistemas deixou de ficar visível.');
  if (analiseMobile.largura > analiseMobile.tela + 2) throw new Error('Cabeçalho mobile de Análise de Sistemas criou rolagem horizontal.');

  await page.setViewport({width: 1366, height: 768, deviceScaleFactor: 1});
  await page.goto(`${base}/pages/reactnative.html`, {waitUntil: 'networkidle0'});
  await page.waitForSelector('header .mbb-busca-global');
  const reactNative = await page.evaluate(() => ({
    academia: Boolean(document.getElementById('mbb-academia-react-native-preview')),
    buscaAntesDaAssinatura: document.querySelector('header .mbb-busca-global')?.nextElementSibling === document.querySelector('header .brand'),
    largura: document.documentElement.scrollWidth,
    tela: innerWidth
  }));
  if (reactNative.academia) throw new Error('React Native ainda exibe o botão de prévia da Academia no título.');
  if (!reactNative.buscaAntesDaAssinatura) throw new Error('Pesquisa não ficou antes da assinatura no cabeçalho do React Native.');
  if (reactNative.largura > reactNative.tela + 2) throw new Error('Cabeçalho do React Native criou rolagem horizontal.');

  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});
  await page.reload({waitUntil: 'networkidle0'});
  await page.waitForSelector('header .mbb-busca-global');
  const reactNativeMobile = await page.evaluate(() => {
    const busca = document.querySelector('header .mbb-busca-global');
    const box = busca.getBoundingClientRect();
    return {
      academia: Boolean(document.getElementById('mbb-academia-react-native-preview')),
      width: box.width,
      height: box.height,
      position: getComputedStyle(busca).position,
      largura: document.documentElement.scrollWidth,
      tela: innerWidth
    };
  });
  if (reactNativeMobile.academia) throw new Error('Atalho da Academia reapareceu no React Native mobile.');
  if (reactNativeMobile.width > 40 || reactNativeMobile.height > 40) throw new Error('Pesquisa não ficou compacta no React Native mobile.');
  if (reactNativeMobile.position === 'fixed') throw new Error('Pesquisa do React Native mobile voltou a flutuar.');
  if (reactNativeMobile.largura > reactNativeMobile.tela + 2) throw new Error('Cabeçalho do React Native mobile criou rolagem horizontal.');

  await page.goto(`${base}/meu-mbb/pesquisar.html`, {waitUntil: 'networkidle0'});
  const placeholder = await page.$eval('#consulta', elemento => elemento.getAttribute('placeholder') || '');
  if (/git status|pasta de rede/i.test(placeholder)) throw new Error('Campo de pesquisa ainda cita o exemplo do piloto Git.');
  if (!/frações/i.test(placeholder) || !/Python/i.test(placeholder) || !/sensores/i.test(placeholder)) throw new Error('Campo de pesquisa perdeu o exemplo geral aprovado.');

  await page.goto(`${base}/pages/bancodedados.html#bd-subconsultas`, {waitUntil: 'networkidle0'});
  const banco = await page.evaluate(() => ({
    capitulo: document.querySelector('#mod-avancado')?.classList.contains('active'),
    destino: document.getElementById('bd-subconsultas')?.getBoundingClientRect().top,
    largura: document.documentElement.scrollWidth,
    tela: innerWidth
  }));
  if (!banco.capitulo || banco.destino == null || banco.destino < -100 || banco.destino > 844) throw new Error('Subconsultas não abriu no capítulo e tópico corretos.');
  if (banco.largura > banco.tela + 2) throw new Error('O destino de Banco de Dados criou rolagem horizontal no celular.');

  await page.goto(`${base}/pages/arduino.html#p6`, {waitUntil: 'networkidle0'});
  const arduino = await page.evaluate(() => ({
    sensores: document.querySelector('#arduinoModuleMenu .module-btn[data-module="sensores"]')?.classList.contains('active'),
    destino: document.getElementById('p6')?.getBoundingClientRect().top
  }));
  if (!arduino.sensores || arduino.destino == null || arduino.destino < -100 || arduino.destino > 844) throw new Error('Sensor LDR não abriu na seção correta.');

  console.log('VALIDAÇÃO VISUAL DA BUSCA E CABEÇALHO: OK');
} finally {
  await browser.close();
}
