import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const stages = [
  '00-antes-do-sistema.html','01-stakeholders-escopo.html','02-levantamento.html','03-processo-as-is.html',
  '04-analise-estruturada.html','05-processo-to-be-bpmn.html','06-requisitos.html','07-casos-de-uso.html',
  '08-uml-essencial.html','09-agile-backlog-mvp.html','10-ux-prototipo.html','11-qualidade-integracoes.html',
  '12-viabilidade-riscos-rastreabilidade.html','13-documentacao-ia.html','14-integracao-final.html'
];
const expectedVersions=[2,1,1,2,2,2,1,2,2,1,1,1,1,1,1];
const expectedDiagrams={3:1,4:2,5:1,7:1,8:4};
const forbiddenBackstage={
  '05-processo-to-be-bpmn.html':['pedagogicamente pior'],
  '06-requisitos.html':['Uma volta na espiral','Autocrítica da sequência'],
  '08-uml-essencial.html':['Crítica circular'],
  '10-ux-prototipo.html':['validação em espiral'],
  '11-qualidade-integracoes.html':['Segunda volta dos RNFs','Crítica circular'],
  '12-viabilidade-riscos-rastreabilidade.html':['A espiral da viabilidade','Crítica circular'],
  '13-documentacao-ia.html':['Crítica circular'],
  '14-integracao-final.html':['O módulo já vinha trabalhando','Volta final ao começo']
};
const viewports = [
  {name:'mobile-360',width:360,height:800},
  {name:'mobile-390',width:390,height:844},
  {name:'tablet-768',width:768,height:1024},
  {name:'tablet-1024',width:1024,height:900},
  {name:'desktop-1366',width:1366,height:900}
];
const failures=[];
const assert=(condition,message)=>{if(!condition) failures.push(message);};

for(const file of stages){
  try{ await fs.access(`pages/analise-sistemas/${file}`); }catch{ failures.push(`Etapa ausente: ${file}`); }
}
for(const file of ['pages/analise-sistemas/index.html','css/analise-sistemas.css','js/analise-sistemas.js','js/analise-sistemas-visuais.js']){
  try{ await fs.access(file); }catch{ failures.push(`Arquivo obrigatório ausente: ${file}`); }
}

const candidates=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath=null;
for(const candidate of candidates){try{await fs.access(candidate);executablePath=candidate;break;}catch{}}
if(!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser=await puppeteer.launch({executablePath,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage();
  const pageErrors=[];
  page.on('pageerror',error=>pageErrors.push(String(error?.message||error)));

  await page.setViewport({width:1366,height:900});
  await page.goto(`${base}/index.html#programacao-desenvolvimento`,{waitUntil:'networkidle0'});
  const homeSnapshot=await page.evaluate(()=>{
    const section=document.getElementById('programacao-desenvolvimento');
    const cards=[...section.querySelectorAll('.module-card')];
    const first=cards[0];
    return {
      areaText:section.querySelector('.view-heading p')?.textContent||'',
      firstTitle:first?.querySelector('h3')?.textContent?.trim()||'',
      firstHref:first?.getAttribute('href')||'',
      moduleCount:cards.length,
      scrollWidth:document.documentElement.scrollWidth,
      innerWidth:window.innerWidth
    };
  });
  assert(homeSnapshot.areaText.includes('Análise'),'Descrição de Programação e Desenvolvimento não menciona Análise.');
  assert(homeSnapshot.firstTitle==='Análise de Sistemas',`Primeiro módulo deveria ser Análise de Sistemas; encontrou ${homeSnapshot.firstTitle}.`);
  assert(homeSnapshot.firstHref==='pages/analise-sistemas/index.html',`Link do card de Análise de Sistemas incorreto: ${homeSnapshot.firstHref}.`);
  assert(homeSnapshot.scrollWidth<=homeSnapshot.innerWidth+2,'Home criou rolagem horizontal no desktop.');

  await page.goto(`${base}/pages/analise-sistemas/index.html`,{waitUntil:'networkidle0'});
  const indexSnapshot=await page.evaluate(()=>({
    cards:document.querySelectorAll('.stage-card').length,
    navLinks:document.querySelectorAll('.stage-link').length,
    hasProject:document.body.textContent.includes('Assistência Técnica Conecta'),
    hasQuestion:document.body.textContent.includes('O que precisamos descobrir agora'),
    hookHidden:getComputedStyle(document.getElementById('meuMbbHook')).display==='none'
  }));
  assert(indexSnapshot.cards===15,`Índice deveria ter 15 cards; encontrou ${indexSnapshot.cards}.`);
  assert(indexSnapshot.navLinks===15,`Navegação deveria ter 15 etapas; encontrou ${indexSnapshot.navLinks}.`);
  assert(indexSnapshot.hasProject,'Índice perdeu o projeto condutor.');
  assert(indexSnapshot.hasQuestion,'Índice perdeu a pergunta-guia MbB.');
  assert(indexSnapshot.hookHidden,'Slot vazio do Meu MbB deveria permanecer invisível.');

  for(let i=0;i<stages.length;i++){
    await page.goto(`${base}/pages/analise-sistemas/${stages[i]}`,{waitUntil:'networkidle0'});
    const snap=await page.evaluate(()=>({
      h1:document.querySelector('h1')?.textContent?.trim()||'',
      current:document.body.dataset.stage,
      id:document.body.dataset.conteudoId,
      version:document.body.dataset.versaoConteudo,
      nav:document.querySelectorAll('.stage-link').length,
      active:document.querySelectorAll('.stage-link.active').length,
      footer:document.querySelectorAll('.stage-footer a').length,
      notebook:Boolean(document.querySelector('.notebook')),
      diagrams:document.querySelectorAll('.visual[data-zoomable="true"]').length,
      text:document.body.innerText
    }));
    assert(Boolean(snap.h1),`${stages[i]} sem H1.`);
    assert(Number(snap.current)===i,`${stages[i]} com data-stage incorreto: ${snap.current}.`);
    assert(snap.id===`analise-sistemas-${String(i).padStart(2,'0')}`,`${stages[i]} com conteudo_id incorreto: ${snap.id}.`);
    assert(snap.version===String(expectedVersions[i]),`${stages[i]} deveria estar na versão pedagógica ${expectedVersions[i]}; encontrou ${snap.version}.`);
    assert(snap.nav===15,`${stages[i]} perdeu etapas no menu.`);
    assert(snap.active===1,`${stages[i]} deveria ter exatamente uma etapa ativa.`);
    assert(snap.footer>=2,`${stages[i]} perdeu navegação de rodapé.`);
    assert(snap.notebook,`${stages[i]} não possui evidência no Caderno da Análise.`);
    if(expectedDiagrams[i]) assert(snap.diagrams===expectedDiagrams[i],`${stages[i]} deveria ter ${expectedDiagrams[i]} diagrama(s) ampliável(is); encontrou ${snap.diagrams}.`);
    for(const term of forbiddenBackstage[stages[i]]||[]) assert(!snap.text.includes(term),`${stages[i]} expõe linguagem de bastidor: ${term}`);
  }

  for(const viewport of viewports){
    await page.setViewport({width:viewport.width,height:viewport.height,deviceScaleFactor:1});
    for(const target of ['index.html','03-processo-as-is.html','04-analise-estruturada.html','05-processo-to-be-bpmn.html','07-casos-de-uso.html','08-uml-essencial.html','10-ux-prototipo.html','14-integracao-final.html']){
      await page.goto(`${base}/pages/analise-sistemas/${target}`,{waitUntil:'networkidle0'});
      const layout=await page.evaluate(()=>({
        innerWidth:window.innerWidth,
        scrollWidth:document.documentElement.scrollWidth,
        h1Visible:Boolean(document.querySelector('h1')?.getBoundingClientRect().height),
        toggleDisplay:getComputedStyle(document.getElementById('menuToggle')).display,
        headerHeight:document.querySelector('.course-header')?.getBoundingClientRect().height||0,
        diagramOverflow:[...document.querySelectorAll('.visual[data-zoomable="true"]')].some(v=>{
          const svg=v.querySelector('svg'); if(!svg) return false;
          return svg.getBoundingClientRect().width>v.getBoundingClientRect().width+2;
        })
      }));
      assert(layout.scrollWidth<=layout.innerWidth+2,`${viewport.name}/${target}: rolagem horizontal global ${layout.scrollWidth}px > ${layout.innerWidth}px.`);
      assert(layout.h1Visible,`${viewport.name}/${target}: H1 não visível.`);
      assert(layout.headerHeight<110,`${viewport.name}/${target}: cabeçalho alto demais (${layout.headerHeight}px).`);
      assert(!layout.diagramOverflow,`${viewport.name}/${target}: prévia de diagrama ultrapassa o próprio quadro.`);
      if(viewport.width<=820) assert(layout.toggleDisplay!=='none',`${viewport.name}/${target}: botão Etapas deveria aparecer.`);
      if(viewport.width>820) assert(layout.toggleDisplay==='none',`${viewport.name}/${target}: botão Etapas não deveria aparecer no desktop.`);
    }

    await page.goto(`${base}/index.html#programacao-desenvolvimento`,{waitUntil:'networkidle0'});
    const homeLayout=await page.evaluate(()=>({innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,firstTitle:document.querySelector('#programacao-desenvolvimento .module-card h3')?.textContent?.trim()||''}));
    assert(homeLayout.scrollWidth<=homeLayout.innerWidth+2,`${viewport.name}/home: rolagem horizontal ${homeLayout.scrollWidth}px > ${homeLayout.innerWidth}px.`);
    assert(homeLayout.firstTitle==='Análise de Sistemas',`${viewport.name}/home: card de Análise deixou de ser o primeiro.`);
  }

  await page.setViewport({width:1366,height:900});
  await page.goto(`${base}/pages/analise-sistemas/04-analise-estruturada.html`,{waitUntil:'networkidle0'});
  const beforeCollapse=await page.evaluate(()=>document.querySelector('.course-main').getBoundingClientRect().width);
  await page.click('#desktopNavCollapse');
  await new Promise(resolve=>setTimeout(resolve,220));
  const collapsed=await page.evaluate(()=>({active:document.body.classList.contains('nav-collapsed'),mainWidth:document.querySelector('.course-main').getBoundingClientRect().width,label:document.getElementById('desktopNavCollapse').textContent.trim()}));
  assert(collapsed.active,'Menu lateral desktop não recolheu.');
  assert(collapsed.mainWidth>beforeCollapse+100,`Recolher menu deveria liberar área útil; antes ${beforeCollapse}, depois ${collapsed.mainWidth}.`);
  assert(collapsed.label==='☰','Botão recolhido deveria mostrar ☰.');

  await page.setViewport({width:390,height:844});
  await page.goto(`${base}/pages/analise-sistemas/04-analise-estruturada.html`,{waitUntil:'networkidle0'});
  const diagramBefore=await page.evaluate(()=>({count:document.querySelectorAll('.diagram-preview').length,buttons:document.querySelectorAll('.diagram-expand').length,scrollWidth:document.documentElement.scrollWidth,innerWidth:window.innerWidth}));
  assert(diagramBefore.count===2,'Etapa 4 deveria exibir Contexto e DFD corrigidos.');
  assert(diagramBefore.buttons===2,'Etapa 4 deveria oferecer botão Ampliar em ambos os diagramas.');
  assert(diagramBefore.scrollWidth<=diagramBefore.innerWidth+2,'Etapa 4 criou rolagem horizontal global no celular.');
  await page.click('.diagram-preview:nth-of-type(2) .diagram-expand').catch(async()=>{ await page.evaluate(()=>document.querySelectorAll('.diagram-expand')[1]?.click()); });
  await new Promise(resolve=>setTimeout(resolve,80));
  const viewerOpen=await page.evaluate(()=>({hidden:document.getElementById('diagramViewer').hidden,svg:Boolean(document.querySelector('#diagramViewer .diagram-viewer-svg')),label:document.getElementById('diagramZoomLabel').textContent}));
  assert(!viewerOpen.hidden,'Visualizador de diagrama não abriu no celular.');
  assert(viewerOpen.svg,'Visualizador não clonou o SVG.');
  await page.click('[data-diagram-action="plus"]');
  const zoomed=await page.evaluate(()=>document.getElementById('diagramZoomLabel').textContent);
  assert(zoomed==='125%',`Zoom + deveria ir a 125%; encontrou ${zoomed}.`);
  await page.click('[data-diagram-action="rotate"]');
  const rotated=await page.evaluate(()=>getComputedStyle(document.querySelector('.diagram-viewer-svg')).transform!=='none');
  assert(rotated,'Controle Girar não aplicou transformação ao diagrama.');
  await page.click('[data-diagram-action="close"]');
  assert(await page.evaluate(()=>document.getElementById('diagramViewer').hidden),'Visualizador não fechou.');

  await page.goto(`${base}/pages/analise-sistemas/06-requisitos.html`,{waitUntil:'networkidle0'});
  await page.click('#menuToggle');
  await new Promise(resolve=>setTimeout(resolve,300));
  const mobileMenu=await page.evaluate(()=>({
    open:document.body.classList.contains('nav-open'),
    navLeft:document.getElementById('courseNav').getBoundingClientRect().left,
    navWidth:document.getElementById('courseNav').getBoundingClientRect().width,
    expanded:document.getElementById('menuToggle').getAttribute('aria-expanded')
  }));
  assert(mobileMenu.open,'Menu móvel não abriu.');
  assert(mobileMenu.navLeft>=-1,'Menu móvel permaneceu fora da tela após a transição.');
  assert(mobileMenu.navWidth<=390,'Menu móvel ultrapassou a largura da tela.');
  assert(mobileMenu.expanded==='true','aria-expanded não acompanha menu móvel.');

  assert(pageErrors.length===0,`Erros JavaScript: ${pageErrors.join(' | ')}`);

  if(failures.length){
    console.error('FALHAS — ANÁLISE DE SISTEMAS');
    failures.forEach(item=>console.error(`- ${item}`));
    process.exit(1);
  }
  console.log('VALIDAÇÃO ANÁLISE DE SISTEMAS: OK');
  console.log(JSON.stringify({etapas:stages.length,viewports,homeSnapshot,indexSnapshot,collapsed,viewerOpen,mobileMenu},null,2));
}finally{
  await browser.close();
}
