(() => {
'use strict';
const $=s=>document.querySelector(s), {names,levels,G,P}=window.DSMathGeneratorData;
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
let current=null,progress=load('dsMathProgress',{correct:0,review:0,total:0}),seen=new Set(load('dsMathSeen',[]));
const saveSeen=()=>localStorage.setItem('dsMathSeen',JSON.stringify([...seen].slice(-500)));
function update(){const e=$('#exerciseProgress');if(e)e.textContent=`Nesta máquina: ${progress.correct} marcados como acertados, ${progress.review} para revisar, ${progress.total} avaliados.`}
function topic(){const v=$('#exerciseTopic').value;return v==='mixed'?P(Object.keys(names)):v}
function unique(t,l){let e,k;for(let i=0;i<25;i++){e=G[t](l);k=`${t}|${l}|${e.key}`;if(!seen.has(k))break}seen.add(k);saveSeen();return e}
function generate(){const l=+$('#exerciseLevel').value,t=topic();current={...unique(t,l),topic:t,level:l};$('#exerciseTopicBadge').textContent=names[t];$('#exerciseLevelBadge').textContent=`Nível ${l} — ${levels[l]}`;$('#exerciseQuestion').innerHTML=current.question;$('#exerciseFeedback').innerHTML=''}
function mark(type){if(!current)return;progress.total++;progress[type]++;localStorage.setItem('dsMathProgress',JSON.stringify(progress));update();$('#exerciseFeedback').innerHTML=type==='correct'?'<div class="ok-box"><strong>Registrado.</strong> Continue para outro exercício.</div>':'<div class="note-box"><strong>Registrado.</strong> Veja a resolução, identifique o ponto que precisa rever e tente outro do mesmo assunto.</div>'}
function printList(){const sel=$('#exerciseTopic').value,l=+$('#exerciseLevel').value,list=[];for(let i=0;i<10;i++){const t=sel==='mixed'?P(Object.keys(names)):sel;list.push({t,e:G[t](l)})}const body=`<h1>DS Matemática — Lista de exercícios</h1><p>1ª Série · Nível ${l} — ${levels[l]}</p>${list.map((x,i)=>`<div class="item"><h2>${i+1}. ${names[x.t]}</h2><p>${x.e.question}</p></div>`).join('')}`;const w=open('','_blank','width=900,height=700');if(!w){alert('O navegador bloqueou a janela de impressão. Permita pop-ups para gerar a lista.');return}w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DS Matemática — Exercícios</title><style>body{font-family:Arial,sans-serif;color:#111;margin:24mm 18mm}h1{font-size:22px}h2{font-size:15px;margin:0 0 6px}.item{margin:18px 0;break-inside:avoid}p{line-height:1.45}@media print{body{margin:12mm}}</style></head><body>${body}<script>window.onload=()=>window.print()<\/script></body></html>`);w.document.close()}
function init(){
  const s=$('#exerciseTopic');if(!s)return;
  s.innerHTML='<option value="mixed">Misturado — todos os assuntos</option>'+Object.entries(names).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  const preset=sessionStorage.getItem('dsMathPracticeTopic');if(preset&&names[preset]){s.value=preset;sessionStorage.removeItem('dsMathPracticeTopic')}
  $('#newExercise').onclick=generate;s.onchange=generate;$('#exerciseLevel').onchange=generate;
  $('#showHint').onclick=()=>{if(current)$('#exerciseFeedback').innerHTML=`<div class="note-box"><strong>Dica:</strong> ${current.hint}</div>`};
  $('#showSolution').onclick=()=>{if(current)$('#exerciseFeedback').innerHTML=`<div class="ok-box"><strong>Resolução:</strong> ${current.solution}</div>`};
  $('#markCorrect').onclick=()=>mark('correct');$('#markReview').onclick=()=>mark('review');$('#printExercises').onclick=printList;update();generate();
}
window.DSMathExercises={init};
})();