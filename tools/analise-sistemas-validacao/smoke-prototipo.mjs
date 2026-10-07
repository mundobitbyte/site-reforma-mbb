import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base=process.env.MBB_BASE_URL||'http://127.0.0.1:4173';
const failures=[];
const assert=(condition,message)=>{if(!condition)failures.push(message);};
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
  await page.goto(`${base}/pages/analise-sistemas/prototipo-assistencia-tecnica-conecta.html#validacao-guiada`,{waitUntil:'networkidle0'});

  const initial=await page.evaluate(()=>({
    h1:document.querySelector('h1')?.textContent?.trim()||'',
    challenges:document.querySelectorAll('.challenge').length,
    checks:document.querySelectorAll('[data-validation-check]').length,
    disabledChecks:[...document.querySelectorAll('[data-validation-check]')].filter(c=>c.disabled).length,
    progress:document.getElementById('validation-progress')?.textContent?.trim()||'',
    summaryHidden:document.getElementById('validation-summary')?.classList.contains('hidden'),
    searchScript:[...document.scripts].some(s=>s.src.includes('mbb-busca-global.js')),
    prototypeScript:[...document.scripts].some(s=>s.src.includes('analise-sistemas-prototipo.js')),
    scrollWidth:document.documentElement.scrollWidth,
    innerWidth:window.innerWidth,
    visibleText:document.body.innerText
  }));
  assert(initial.h1==='Da análise para uma solução que pode ser testada',`H1 inesperado: ${initial.h1}`);
  assert(initial.challenges===3,`Validação guiada deveria ter 3 desafios; encontrou ${initial.challenges}.`);
  assert(initial.checks===3,`Validação guiada deveria ter 3 fechamentos; encontrou ${initial.checks}.`);
  assert(initial.disabledChecks===3,'Os três fechamentos devem começar bloqueados até existir evidência escrita.');
  assert(initial.progress==='0 de 3 desafios analisados',`Progresso inicial inesperado: ${initial.progress}.`);
  assert(initial.summaryHidden,'Resumo final deveria começar oculto.');
  assert(initial.searchScript&&initial.prototypeScript,'Protótipo perdeu integração de scripts esperada.');
  assert(initial.scrollWidth<=initial.innerWidth+2,'Protótipo criou rolagem horizontal no desktop.');
  assert(!/2ª volta da espiral|complete uma volta na espiral|Volta concluída\./.test(initial.visibleText),'Protótipo expõe rótulos internos da metodologia.');

  const stage10Page=await browser.newPage();
  await stage10Page.setViewport({width:1366,height:900});
  await stage10Page.goto(`${base}/pages/analise-sistemas/10-ux-prototipo.html`,{waitUntil:'networkidle0'});
  const stage10Link=await stage10Page.evaluate(()=>{
    const link=[...document.querySelectorAll('a')].find(a=>a.getAttribute('href')?.includes('prototipo-assistencia-tecnica-conecta.html'));
    const task=[...document.querySelectorAll('.evidence-card p')].find(p=>p.textContent.includes('notebook'));
    return {href:link?.getAttribute('href')||'',task:task?.textContent?.trim()||''};
  });
  assert(stage10Link.href==='prototipo-assistencia-tecnica-conecta.html',`Link do protótipo deve abrir no topo; encontrou ${stage10Link.href}.`);
  assert(stage10Link.task.includes('Instrução ao participante:'),'A tarefa do notebook precisa explicitar que o texto é dirigido ao participante do teste.');
  await stage10Page.close();

  await page.click('[data-prepare="clarity"]');
  const clarity=await page.evaluate(()=>({
    clienteAtivo:document.getElementById('cliente').classList.contains('active'),
    consultaVisivel:!document.getElementById('cliente-consulta').classList.contains('hidden'),
    resultadoOculto:document.getElementById('cliente-resultado').classList.contains('hidden'),
    os:document.getElementById('cliente-os').value,
    confirmacao:document.getElementById('cliente-confirmacao').value,
    foco:document.activeElement?.id||''
  }));
  assert(clarity.clienteAtivo,'Cenário 1 deveria abrir a visão do cliente.');
  assert(clarity.consultaVisivel&&clarity.resultadoOculto,'Cenário 1 deveria abrir a consulta limpa.');
  assert(clarity.os==='1042','Cenário 1 deveria preparar a OS 1042.');
  assert(clarity.confirmacao==='','Cenário 1 deveria limpar o dado de confirmação para testar clareza.');
  assert(clarity.foco!=='cliente-confirmacao','Cenário 1 não deve induzir o usuário colocando foco no campo ambíguo.');

  await page.type('#cliente-confirmacao','banana');
  await page.click('#consultar');
  assert(await page.evaluate(()=>document.getElementById('cliente-resultado').classList.contains('hidden')),'Confirmação parcial/indevida não pode localizar a ordem.');
  await page.evaluate(()=>{document.getElementById('cliente-confirmacao').value='Ana Souza';});
  await page.click('#consultar');
  assert(await page.evaluate(()=>!document.getElementById('cliente-resultado').classList.contains('hidden')),'Consulta válida não exibiu o resultado.');

  await page.click('[data-prepare="decision"]');
  const decisionReady=await page.evaluate(()=>({
    internoAtivo:document.getElementById('interno').classList.contains('active'),
    decisaoVisivel:!document.getElementById('decisao').classList.contains('hidden'),
    aprovar:Boolean(document.getElementById('aprovar')),
    recusar:Boolean(document.getElementById('recusar')),
    atendenteAtivo:!document.querySelector('[data-role="atendente"]').classList.contains('secondary')
  }));
  assert(decisionReady.internoAtivo&&decisionReady.decisaoVisivel&&decisionReady.aprovar&&decisionReady.recusar&&decisionReady.atendenteAtivo,'Cenário 2 não preparou o registro da decisão pelo Atendente.');
  await page.click('#recusar');
  const refused=await page.evaluate(()=>({
    status:document.getElementById('order-status')?.textContent?.trim()||'',
    timeline:document.getElementById('timeline')?.textContent||'',
    audit:document.getElementById('decision-audit')?.textContent||''
  }));
  assert(refused.status==='Orçamento recusado',`Visão interna deveria refletir recusa; encontrou ${refused.status}.`);
  assert(/Orçamento recusado/.test(refused.timeline)&&!/Reparo autorizado/.test(refused.timeline),'Linha do tempo deve encerrar coerentemente na recusa.');
  assert(/Atendente demonstrativo/.test(refused.audit)&&/Recusado/.test(refused.audit)&&/Data\/hora/.test(refused.audit),'Recusa deveria manter decisão, autor e data/hora.');
  await page.click('[data-role="tecnico"]');
  await page.click('#tentar-reparo');
  const blocked=await page.evaluate(()=>document.getElementById('ordem-msg')?.textContent||'');
  assert(/RN01 aplicada/.test(blocked)&&/recusado/.test(blocked),'RN01 deveria bloquear reparo após recusa.');

  await page.click('[data-prepare="decision"]');
  await page.click('#aprovar');
  await page.click('[data-role="tecnico"]');
  await page.click('#tentar-reparo');
  assert(await page.evaluate(()=>!document.getElementById('reparo').classList.contains('hidden')),'Reparo aprovado não abriu a etapa de reparo para o Técnico.');

  await page.click('[data-prepare="roles"]');
  const attendant=await page.evaluate(()=>({
    internoAtivo:document.getElementById('interno').classList.contains('active'),
    homeVisivel:!document.getElementById('interno-home').classList.contains('hidden'),
    novaOsVisivel:!document.querySelector('[data-go="nova-os"]').classList.contains('hidden'),
    descricao:document.getElementById('perfil-descricao')?.textContent||''
  }));
  assert(attendant.internoAtivo&&attendant.homeVisivel&&attendant.novaOsVisivel&&/Atendente/.test(attendant.descricao),'Visão Atendente não apresentou responsabilidade esperada.');
  await page.click('[data-role="tecnico"]');
  const technician=await page.evaluate(()=>({
    novaOsOculta:document.querySelector('[data-go="nova-os"]').classList.contains('hidden'),
    descricao:document.getElementById('perfil-descricao')?.textContent||''
  }));
  assert(technician.novaOsOculta&&/Técnico/.test(technician.descricao),'Visão Técnico deveria ocultar abertura de OS e explicar seu papel.');

  for(let n=1;n<=3;n++){
    const check=`[data-validation-check="${n}"]`;
    assert(await page.$eval(check,el=>el.disabled),`Desafio ${n} deveria permanecer bloqueado sem evidência.`);
    await page.type(`#evidencia-${n}`,'Evidência observada no teste.');
    await page.type(`#origem-${n}`,'Artefato de origem');
    await page.type(`#mudanca-${n}`,'Decisão justificada e forma de reteste.');
    assert(!(await page.$eval(check,el=>el.disabled)),`Desafio ${n} deveria liberar após os três registros.`);
    await page.click(check);
  }
  const completed=await page.evaluate(()=>({
    progress:document.getElementById('validation-progress')?.textContent?.trim()||'',
    done:document.querySelectorAll('.challenge.done').length,
    summaryHidden:document.getElementById('validation-summary')?.classList.contains('hidden')
  }));
  assert(completed.progress==='3 de 3 desafios analisados',`Progresso final inesperado: ${completed.progress}.`);
  assert(completed.done===3,`Três desafios deveriam estar concluídos; encontrou ${completed.done}.`);
  assert(!completed.summaryHidden,'Resumo final deveria aparecer após os três desafios com evidência.');

  await page.setViewport({width:360,height:800});
  await page.reload({waitUntil:'networkidle0'});
  const mobile=await page.evaluate(()=>({innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,challenges:document.querySelectorAll('.challenge').length,h1Visible:Boolean(document.querySelector('h1')?.getBoundingClientRect().height)}));
  assert(mobile.scrollWidth<=mobile.innerWidth+2,`Protótipo criou rolagem horizontal no celular: ${mobile.scrollWidth}px > ${mobile.innerWidth}px.`);
  assert(mobile.challenges===3&&mobile.h1Visible,'Atividade guiada não permaneceu íntegra no celular.');
  assert(pageErrors.length===0,`Erros JavaScript: ${pageErrors.join(' | ')}`);

  if(failures.length){console.error('FALHAS — PROTÓTIPO CONECTA');failures.forEach(item=>console.error(`- ${item}`));process.exit(1);}
  console.log('VALIDAÇÃO PROTÓTIPO CONECTA: OK');
  console.log(JSON.stringify({initial,clarity,decisionReady,refused,attendant,technician,completed,mobile},null,2));
}finally{await browser.close();}
