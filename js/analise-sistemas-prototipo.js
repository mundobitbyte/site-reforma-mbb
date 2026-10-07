(()=>{
let state={diagnostico:false,aprovado:false,recusado:false,reparo:false,finalizado:false,decididoPor:'',decididoEm:''};
let perfil='atendente';
let guiado={bloqueioSemDiagnostico:false,bloqueioSemAprovacao:false,consultaDiagnostico:false,consultaFinal:false};
let ultimoPassoGuia='';
const screens={interno:document.getElementById('interno'),cliente:document.getElementById('cliente')};
const subs=[...document.querySelectorAll('.subscreen')];
const normalize=v=>v.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ');
const roteiro=document.getElementById('roteiro-principal');
if(roteiro){
  roteiro.innerHTML='<h2>Como esta atividade está organizada</h2><p>Você não precisa decorar uma sequência longa antes de começar. Use este mapa apenas para entender o percurso; durante a execução, o <strong>Guia passo a passo</strong> mostrará uma ação de cada vez.</p><div class="guided-map"><div><strong>1. Entender</strong><span>Conheça o caso, os atores e o estado inicial da OS #1042.</span></div><div><strong>2. Executar</strong><span>Percorra o atendimento completo seguindo o guia interativo.</span></div><div><strong>3. Explorar</strong><span>Teste a recusa do orçamento e a abertura de uma nova ordem.</span></div><div><strong>4. Validar</strong><span>Use evidências do que ocorreu para revisar a análise.</span></div></div><div class="notice"><strong>Para a primeira execução:</strong> siga o guia até ele informar que o fluxo principal foi concluído. Depois continue para os caminhos complementares e para a validação guiada.</div>';
}
const rolebar=document.querySelector('.rolebar');
if(rolebar){
  rolebar.insertAdjacentHTML('beforebegin','<section class="guided-panel card" id="guia-execucao" aria-live="polite"><div class="guided-head"><div><p class="guided-kicker">Guia passo a passo</p><h2 id="guia-titulo">Preparando...</h2></div><span id="guia-progresso" class="guided-progress"></span></div><p id="guia-contexto" class="guided-context"></p><div class="guided-action"><strong>Faça agora</strong><p id="guia-acao"></p></div><div class="guided-result"><strong>O que deve acontecer</strong><p id="guia-resultado"></p></div><p id="guia-motivo" class="guided-why"></p></section>');
}
const passosGuia=[
  {id:'bloqueio-sem-diagnostico',titulo:'Passo 1 — descubra o primeiro bloqueio',contexto:'A OS #1042 acabou de ser aberta e ainda não possui diagnóstico. Antes de registrar qualquer informação nova, veja o que acontece se o Técnico tentar reparar o equipamento cedo demais.',acao:'Clique em Reiniciar caso #1042. Escolha Visão Técnico, abra a OS #1042 e clique em Iniciar reparo.',resultado:'O sistema deve impedir o reparo e informar que primeiro é necessário registrar o diagnóstico técnico.',motivo:'Por quê? Uma regra de negócio fica mais fácil de compreender quando você vê o sistema impedir uma ação inadequada.'},
  {id:'registrar-diagnostico',titulo:'Passo 2 — registre o diagnóstico',contexto:'Agora já vimos que o reparo não pode começar sem diagnóstico. O próximo fato cronológico é o Técnico descobrir o problema e registrar o orçamento.',acao:'Ainda na Visão Técnico, clique em Registrar diagnóstico e depois em Salvar diagnóstico e solicitar aprovação.',resultado:'A OS deve mudar para Aguardando aprovação e mostrar o diagnóstico e o orçamento de R$ 280,00.',motivo:'Por quê? O orçamento só pode ser decidido depois que existe um diagnóstico associado à ordem.'},
  {id:'bloqueio-sem-aprovacao',titulo:'Passo 3 — teste a regra antes da decisão',contexto:'Já existe diagnóstico e orçamento, mas o cliente ainda não tomou uma decisão. Este é o momento de testar a RN01.',acao:'Na OS #1042, clique novamente em Iniciar reparo.',resultado:'O sistema deve bloquear o reparo porque o orçamento ainda está pendente de aprovação.',motivo:'Por quê? Diagnóstico pronto não significa autorização para executar o serviço.'},
  {id:'consulta-cliente',titulo:'Passo 4 — observe pela perspectiva do cliente',contexto:'O Técnico terminou sua parte inicial. Agora precisamos conferir se o cliente consegue entender o que aconteceu com o equipamento e qual decisão precisa tomar.',acao:'Escolha Visão do cliente. Informe 1042 e Ana Souza e clique em Consultar.',resultado:'O cliente deve ver o diagnóstico, o orçamento de R$ 280,00 e a orientação para comunicar sua decisão ao atendimento.',motivo:'Por quê? A mesma OS precisa fazer sentido para atores diferentes, cada um vendo somente o que precisa para cumprir sua parte.'},
  {id:'registrar-aprovacao',titulo:'Passo 5 — registre a decisão do cliente',contexto:'No escopo deste protótipo, o cliente decide, mas não altera diretamente a ordem. A decisão chega ao atendimento e é registrada pelo Atendente.',acao:'Escolha Visão Atendente, abra a OS #1042, clique em Registrar decisão do orçamento e depois em Registrar aprovação.',resultado:'A OS deve mostrar Orçamento aprovado e preservar quem registrou a decisão e a data/hora.',motivo:'Por quê? Uma decisão importante precisa deixar rastro para ser posteriormente comprovada.'},
  {id:'concluir-reparo',titulo:'Passo 6 — execute o reparo autorizado',contexto:'Agora a aprovação existe e a RN01 deixa de bloquear o serviço. O processo volta para o Técnico.',acao:'Escolha Visão Técnico. Abra a OS #1042, clique em Iniciar reparo e depois em Concluir reparo e liberar para retirada.',resultado:'A OS deve chegar ao estado Pronto para retirada.',motivo:'Por quê? O reparo só aparece como consequência de todos os fatos anteriores: diagnóstico, orçamento e aprovação.'},
  {id:'consulta-final',titulo:'Passo 7 — feche o ciclo com o cliente',contexto:'O atendimento interno terminou. Falta verificar se a mudança final também aparece corretamente para quem deixou o equipamento na assistência.',acao:'Escolha Visão do cliente e consulte novamente a OS 1042 com Ana Souza.',resultado:'O cliente deve ver que o serviço foi concluído e que o equipamento está liberado para retirada.',motivo:'Por quê? Um processo só está coerente quando o estado final é percebido corretamente por todos os atores envolvidos.'}
];
function passoAtual(){
  if(guiado.consultaFinal)return 7;
  if(!guiado.bloqueioSemDiagnostico)return 0;
  if(!state.diagnostico)return 1;
  if(!guiado.bloqueioSemAprovacao)return 2;
  if(!guiado.consultaDiagnostico)return 3;
  if(!state.aprovado)return 4;
  if(!state.finalizado)return 5;
  return 6;
}
function updateGuide(scroll=false){
  const painel=document.getElementById('guia-execucao');if(!painel)return;
  const index=passoAtual();
  if(index===passosGuia.length){
    document.getElementById('guia-titulo').textContent='Fluxo principal concluído';
    document.getElementById('guia-progresso').textContent='7 de 7';
    document.getElementById('guia-contexto').textContent='Você acompanhou a mesma OS do diagnóstico até a liberação para retirada e viu a RN01 agir nos momentos corretos.';
    document.getElementById('guia-acao').innerHTML='Agora desça para <a href="#testes-complementares"><strong>Caminhos complementares</strong></a>. Depois faça a validação guiada.';
    document.getElementById('guia-resultado').textContent='Você deve conseguir explicar, em ordem, quem fez cada ação, por que o reparo foi bloqueado e quando passou a ser permitido.';
    document.getElementById('guia-motivo').textContent='Antes de explorar exceções, confirme que você compreendeu o fluxo normal completo.';
    painel.classList.add('complete');
  }else{
    const p=passosGuia[index];
    document.getElementById('guia-titulo').textContent=p.titulo;
    document.getElementById('guia-progresso').textContent=`${index+1} de ${passosGuia.length}`;
    document.getElementById('guia-contexto').textContent=p.contexto;
    document.getElementById('guia-acao').textContent=p.acao;
    document.getElementById('guia-resultado').textContent=p.resultado;
    document.getElementById('guia-motivo').textContent=p.motivo;
    painel.classList.remove('complete');
  }
  const id=index===passosGuia.length?'concluido':passosGuia[index].id;
  if(scroll&&ultimoPassoGuia&&ultimoPassoGuia!==id)painel.scrollIntoView({behavior:'smooth',block:'center'});
  ultimoPassoGuia=id;
}
function showRole(role){
  if(role==='cliente'){screens.interno.classList.remove('active');screens.cliente.classList.add('active');renderCliente();}
  else{perfil=role;screens.cliente.classList.remove('active');screens.interno.classList.add('active');renderPermissions();renderInterno();}
  document.querySelectorAll('[data-role]').forEach(b=>b.classList.toggle('secondary',b.dataset.role!==role));
}
function renderPermissions(){
  document.getElementById('perfil-descricao').textContent=perfil==='atendente'?'Atendente abre ordens, consulta andamento e registra a decisão informada pelo cliente.':'Técnico registra diagnóstico e executa o reparo quando a regra permitir.';
  document.querySelectorAll('[data-permission]').forEach(el=>el.classList.toggle('hidden',el.dataset.permission!==perfil));
}
function go(name){subs.forEach(s=>s.classList.add('hidden'));document.getElementById(name==='home'?'interno-home':name).classList.remove('hidden');renderPermissions();renderInterno();}
function statusText(){if(state.finalizado)return 'Pronto para retirada';if(state.reparo)return 'Em reparo';if(state.aprovado)return 'Orçamento aprovado';if(state.recusado)return 'Orçamento recusado';if(state.diagnostico)return 'Aguardando aprovação';return 'Aguardando diagnóstico';}
function statusClass(){if(state.recusado)return 'status danger';if(state.finalizado||state.aprovado)return 'status ok';if(state.reparo)return 'status';return 'status warn';}
function timelineItems(){
  const items=[{t:'Ordem aberta',c:'done'}];
  if(!state.diagnostico){items.push({t:'Aguardando diagnóstico',c:'current'});return items;}
  items.push({t:'Diagnóstico registrado',c:'done'});
  if(state.recusado){items.push({t:'Orçamento recusado',c:'refused'});return items;}
  if(!state.aprovado){items.push({t:'Aguardando decisão do orçamento',c:'current'});return items;}
  items.push({t:'Orçamento aprovado',c:'done'});
  if(state.finalizado){items.push({t:'Reparo concluído',c:'done'},{t:'Liberado para retirada',c:'current'});return items;}
  if(state.reparo){items.push({t:'Reparo iniciado',c:'current'});return items;}
  items.push({t:'Reparo autorizado',c:'current'});return items;
}
function renderInterno(){
  ['home-status','order-status'].forEach(id=>{const el=document.getElementById(id);el.textContent=statusText();el.className=statusClass();});
  document.getElementById('timeline').innerHTML=timelineItems().map(item=>`<div class="step ${item.c}"><strong>${item.t}</strong></div>`).join('');
  document.getElementById('decision-audit').innerHTML=state.decididoPor?`<h3>Registro da decisão</h3><p><strong>Decisão:</strong> ${state.aprovado?'Aprovado':'Recusado'}<br><strong>Registrado por:</strong> ${state.decididoPor}<br><strong>Data/hora:</strong> ${state.decididoEm}</p>`:'';
}
function renderCliente(){
  const st=document.getElementById('cliente-status');st.textContent=statusText();st.className=statusClass();const detalhe=document.getElementById('cliente-detalhe');
  if(!state.diagnostico){detalhe.innerHTML='<p>Seu equipamento foi recebido e aguarda diagnóstico técnico.</p>';return;}
  if(state.recusado){detalhe.innerHTML='<p class="alert error">Orçamento recusado. O reparo não poderá ser iniciado.</p>';return;}
  if(!state.aprovado){detalhe.innerHTML='<p><strong>Diagnóstico:</strong> Fonte de alimentação apresenta falha e precisa ser substituída.</p><p><strong>Orçamento:</strong> R$ 280,00</p><p>O orçamento aguarda sua decisão. Neste escopo, informe sua resposta ao atendimento para que ela seja registrada na ordem.</p>';return;}
  if(state.finalizado){detalhe.innerHTML='<p class="alert success">Serviço concluído. Equipamento liberado para retirada.</p>';return;}
  if(state.reparo){detalhe.innerHTML='<p>Seu orçamento foi aprovado e o equipamento está em reparo.</p>';return;}
  detalhe.innerHTML='<p class="alert success">Orçamento aprovado. O reparo já pode ser iniciado pela assistência.</p>';
}
function showClientQuery(){document.getElementById('cliente-consulta').classList.remove('hidden');document.getElementById('cliente-resultado').classList.add('hidden');document.getElementById('consulta-msg').innerHTML='';}
function showClientResult(){document.getElementById('cliente-consulta').classList.add('hidden');document.getElementById('cliente-resultado').classList.remove('hidden');renderCliente();}
function registerDecision(approved){
  state.aprovado=approved;state.recusado=!approved;state.reparo=false;state.finalizado=false;state.decididoPor='Atendente demonstrativo';state.decididoEm=new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date());
  go('ordem');document.getElementById('ordem-msg').innerHTML=`<p class="alert ${approved?'success':'error'}">Decisão registrada com autor e data/hora: orçamento ${approved?'aprovado':'recusado'}.</p>`;updateGuide(true);
}
function challengeReady(n){return [...document.querySelectorAll(`[data-validation-field="${n}"]`)].every(el=>el.value.trim().length>0);}
function updateValidationAvailability(n){const check=document.querySelector(`[data-validation-check="${n}"]`);const ready=challengeReady(n);check.disabled=!ready;if(!ready)check.checked=false;updateValidation();}
function updateValidation(){const checks=[...document.querySelectorAll('[data-validation-check]')];const done=checks.filter(c=>c.checked&&!c.disabled).length;document.getElementById('validation-progress').textContent=`${done} de ${checks.length} desafios analisados`;checks.forEach(c=>document.querySelector(`[data-challenge="${c.dataset.validationCheck}"]`)?.classList.toggle('done',c.checked&&!c.disabled));document.getElementById('validation-summary').classList.toggle('hidden',done!==checks.length);}
document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>showRole(b.dataset.role));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
document.getElementById('criar-os').onclick=()=>{document.getElementById('nova-msg').innerHTML='<p class="alert success">OS #1043 criada e vinculada ao cliente e ao equipamento. Nesta demonstração, continuaremos usando a OS #1042 para testar o fluxo completo.</p>';};
document.getElementById('salvar-diag').onclick=()=>{state.diagnostico=true;state.aprovado=false;state.recusado=false;state.reparo=false;state.finalizado=false;state.decididoPor='';state.decididoEm='';go('ordem');document.getElementById('ordem-msg').innerHTML='<p class="alert success">Diagnóstico registrado. O orçamento aguarda decisão do cliente.</p>';updateGuide(true);};
document.getElementById('registrar-decisao').onclick=()=>{const msg=document.getElementById('ordem-msg');if(!state.diagnostico){msg.innerHTML='<p class="alert error">Primeiro é necessário existir diagnóstico e orçamento.</p>';return;}go('decisao');};
document.getElementById('aprovar').onclick=()=>registerDecision(true);document.getElementById('recusar').onclick=()=>registerDecision(false);
document.getElementById('tentar-reparo').onclick=()=>{const msg=document.getElementById('ordem-msg');if(!state.diagnostico){guiado.bloqueioSemDiagnostico=true;msg.innerHTML='<p class="alert error">Primeiro registre o diagnóstico técnico.</p>';updateGuide(true);return;}if(!state.aprovado){if(!state.recusado)guiado.bloqueioSemAprovacao=true;msg.innerHTML=`<p class="alert error">RN01 aplicada: o reparo não pode começar porque o orçamento está ${state.recusado?'recusado':'pendente de aprovação'}.</p>`;updateGuide(true);return;}state.reparo=true;go('reparo');};
document.getElementById('concluir-reparo').onclick=()=>{state.reparo=true;state.finalizado=true;go('ordem');document.getElementById('ordem-msg').innerHTML='<p class="alert success">Reparo concluído. A ordem está pronta para retirada.</p>';updateGuide(true);};
document.getElementById('consultar').onclick=()=>{const os=document.getElementById('cliente-os').value.trim(),conf=normalize(document.getElementById('cliente-confirmacao').value);if(os!=='1042'||conf!=='ana souza'){document.getElementById('consulta-msg').innerHTML='<p class="alert error">Não foi possível localizar a ordem com os dados informados.</p>';return;}showClientResult();if(state.finalizado)guiado.consultaFinal=true;else if(state.diagnostico&&!state.aprovado&&!state.recusado)guiado.consultaDiagnostico=true;updateGuide(true);};
document.getElementById('nova-consulta').onclick=showClientQuery;
document.getElementById('reset').onclick=()=>{const fluxoConcluido=guiado.consultaFinal;state={diagnostico:false,aprovado:false,recusado:false,reparo:false,finalizado:false,decididoPor:'',decididoEm:''};if(!fluxoConcluido)guiado={bloqueioSemDiagnostico:false,bloqueioSemAprovacao:false,consultaDiagnostico:false,consultaFinal:false};document.getElementById('ordem-msg').innerHTML='';document.getElementById('nova-msg').innerHTML='';showClientQuery();showRole('atendente');go('home');updateGuide();};
document.querySelectorAll('[data-prepare]').forEach(button=>button.onclick=()=>{const tipo=button.dataset.prepare;if(tipo==='clarity'){showRole('cliente');showClientQuery();document.getElementById('cliente-os').value='1042';document.getElementById('cliente-confirmacao').value='';}else if(tipo==='decision'){state={diagnostico:true,aprovado:false,recusado:false,reparo:false,finalizado:false,decididoPor:'',decididoEm:''};showRole('atendente');go('decisao');}else if(tipo==='roles'){showRole('atendente');go('home');}document.querySelector('.rolebar')?.scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelectorAll('[data-validation-field]').forEach(field=>field.addEventListener('input',()=>updateValidationAvailability(field.dataset.validationField)));
document.querySelectorAll('[data-validation-check]').forEach(c=>c.addEventListener('change',updateValidation));
renderPermissions();renderInterno();['1','2','3'].forEach(updateValidationAvailability);updateValidation();updateGuide();
})();