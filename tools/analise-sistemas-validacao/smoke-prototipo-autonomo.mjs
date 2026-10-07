import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base=process.env.MBB_BASE_URL||'http://127.0.0.1:4173';
const failures=[];
const assert=(condition,message)=>{if(!condition)failures.push(message);};
const settle=()=>new Promise(resolve=>setTimeout(resolve,700));
const candidates=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath=null;
for(const candidate of candidates){try{await fs.access(candidate);executablePath=candidate;break;}catch{}}
if(!executablePath)throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser=await puppeteer.launch({executablePath,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage();
  const pageErrors=[];
  page.on('pageerror',error=>pageErrors.push(String(error?.message||error)));
  await page.setViewport({width:1366,height:900});
  await page.goto(`${base}/pages/analise-sistemas/prototipo-assistencia-tecnica-conecta.html`,{waitUntil:'networkidle0'});

  const structure=await page.evaluate(()=>({
    context:document.getElementById('comece-aqui')?.innerText||'',
    map:document.getElementById('roteiro-principal')?.innerText||'',
    guide:Boolean(document.getElementById('guia-execucao')),
    guideTitle:document.getElementById('guia-titulo')?.textContent?.trim()||'',
    guideProgress:document.getElementById('guia-progresso')?.textContent?.trim()||'',
    challenges:document.querySelectorAll('.challenge').length,
    scrollWidth:document.documentElement.scrollWidth,
    innerWidth:window.innerWidth
  }));
  assert(/Ana Souza/.test(structure.context)&&/Notebook Orion 14/.test(structure.context)&&/#1042/.test(structure.context),'Contexto inicial precisa identificar cliente, equipamento e OS.');
  assert(/Aguardando diagnóstico/.test(structure.context),'Contexto inicial precisa declarar o estado inicial.');
  assert(/1\. Entender/.test(structure.map)&&/2\. Executar/.test(structure.map)&&/3\. Explorar/.test(structure.map)&&/4\. Validar/.test(structure.map),'Mapa deve apresentar a macro-ordem da atividade.');
  assert(structure.guide,'Guia progressivo precisa existir junto da interface.');
  assert(structure.guideProgress==='1 de 7',`Guia deveria começar em 1 de 7; encontrou ${structure.guideProgress}.`);
  assert(/primeiro bloqueio/.test(structure.guideTitle),'Primeiro passo deve começar pelo bloqueio sem diagnóstico.');
  assert(structure.challenges===3,'Validação guiada deve continuar com três desafios.');
  assert(structure.scrollWidth<=structure.innerWidth+2,'Protótipo criou rolagem horizontal no desktop.');

  const guide=async()=>page.evaluate(()=>({
    title:document.getElementById('guia-titulo')?.textContent?.trim()||'',
    progress:document.getElementById('guia-progresso')?.textContent?.trim()||'',
    action:document.getElementById('guia-acao')?.textContent?.trim()||'',
    result:document.getElementById('guia-resultado')?.textContent?.trim()||''
  }));

  await page.click('#reset');
  await page.click('[data-role="tecnico"]');
  await page.evaluate(()=>{const b=[...document.querySelectorAll('[data-go="ordem"]')].find(el=>el.offsetParent!==null);b?.click();});
  await page.click('#tentar-reparo');
  await settle();
  let g=await guide();
  assert(g.progress==='2 de 7'&&/registre o diagnóstico/.test(g.title),'Após bloquear reparo sem diagnóstico, guia deve avançar ao passo 2.');
  assert(/Registrar diagnóstico/.test(g.action)&&/Aguardando aprovação/.test(g.result),'Passo 2 deve dizer ação e resultado esperado.');

  await page.click('[data-go="diagnostico"]');
  await page.click('#salvar-diag');
  await settle();
  g=await guide();
  assert(g.progress==='3 de 7'&&/regra antes da decisão/.test(g.title),'Após diagnóstico, guia deve avançar ao teste da RN01.');

  await page.click('#tentar-reparo');
  await settle();
  g=await guide();
  assert(g.progress==='4 de 7'&&/perspectiva do cliente/.test(g.title),'Após RN01 bloquear orçamento pendente, guia deve levar à visão do cliente.');

  await page.click('[data-role="cliente"]');
  await page.evaluate(()=>{document.getElementById('cliente-os').value='1042';document.getElementById('cliente-confirmacao').value='Ana Souza';});
  await page.click('#consultar');
  await settle();
  g=await guide();
  assert(g.progress==='5 de 7'&&/decisão do cliente/.test(g.title),'Após consulta do cliente, guia deve levar ao registro da decisão.');

  await page.click('[data-role="atendente"]');
  const decisionVisible=await page.$eval('#registrar-decisao',el=>el.offsetParent!==null&&!el.classList.contains('hidden'));
  if(!decisionVisible)await page.evaluate(()=>{const b=[...document.querySelectorAll('[data-go="ordem"]')].find(el=>el.offsetParent!==null);b?.click();});
  await page.click('#registrar-decisao');
  await page.click('#aprovar');
  await settle();
  g=await guide();
  assert(g.progress==='6 de 7'&&/reparo autorizado/.test(g.title),'Após aprovação, guia deve levar ao reparo.');

  await page.click('[data-role="tecnico"]');
  await page.click('#tentar-reparo');
  await page.click('#concluir-reparo');
  await settle();
  g=await guide();
  assert(g.progress==='7 de 7'&&/feche o ciclo/.test(g.title),'Após concluir reparo, guia deve pedir conferência final do cliente.');

  await page.click('[data-role="cliente"]');
  await settle();
  const resultVisible=await page.$eval('#cliente-resultado',el=>!el.classList.contains('hidden'));
  if(resultVisible)await page.click('#nova-consulta');
  await page.evaluate(()=>{document.getElementById('cliente-os').value='1042';document.getElementById('cliente-confirmacao').value='Ana Souza';});
  await page.click('#consultar');
  await settle();
  g=await guide();
  assert(g.progress==='7 de 7'&&g.title==='Fluxo principal concluído','Guia deve fechar explicitamente o fluxo principal.');
  assert(/Caminhos complementares/.test(g.action),'Após fluxo principal, guia deve indicar a próxima seção cronológica.');

  await page.click('#reset');
  g=await guide();
  assert(g.title==='Fluxo principal concluído','Reinício após conclusão deve preparar novos cenários sem fazer o aluno perder o marco do fluxo principal.');

  const stage10=await browser.newPage();
  await stage10.goto(`${base}/pages/analise-sistemas/10-ux-prototipo.html`,{waitUntil:'networkidle0'});
  const practice=await stage10.evaluate(()=>({
    items:[...document.querySelectorAll('.practice-card ol li')].map(li=>li.textContent.trim()),
    href:[...document.querySelectorAll('.tool-card a')].find(a=>a.href.includes('prototipo-assistencia-tecnica-conecta.html'))?.getAttribute('href')||''
  }));
  assert(/roteiro principal/.test(practice.items[0]),'Etapa 10 deve mandar começar pelo exemplo guiado.');
  assert(/caminhos complementares/.test(practice.items[1]),'Etapa 10 deve colocar caminhos complementares depois do fluxo principal.');
  assert(/validação guiada/.test(practice.items[2]),'Validação deve vir após executar e explorar o protótipo.');
  assert(/próprio backlog/.test(practice.items[3]),'Aplicação autônoma deve vir somente após o exemplo completo.');
  assert(practice.href==='prototipo-assistencia-tecnica-conecta.html','Link da Etapa 10 deve abrir o topo do protótipo.');
  await stage10.close();

  await page.setViewport({width:360,height:800});
  await page.reload({waitUntil:'networkidle0'});
  const mobile=await page.evaluate(()=>({innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,guide:Boolean(document.getElementById('guia-execucao')),mapCards:document.querySelectorAll('.guided-map>div').length}));
  assert(mobile.scrollWidth<=mobile.innerWidth+2,`Protótipo criou rolagem horizontal no celular: ${mobile.scrollWidth}px > ${mobile.innerWidth}px.`);
  assert(mobile.guide&&mobile.mapCards===4,'Mapa e guia devem permanecer presentes no celular.');
  assert(pageErrors.length===0,`Erros JavaScript: ${pageErrors.join(' | ')}`);

  if(failures.length){console.error('FALHAS — GUIA PROGRESSIVO DO PROTÓTIPO');failures.forEach(item=>console.error(`- ${item}`));process.exit(1);}
  console.log('GUIA PROGRESSIVO DO PROTÓTIPO: OK');
}finally{await browser.close();}
