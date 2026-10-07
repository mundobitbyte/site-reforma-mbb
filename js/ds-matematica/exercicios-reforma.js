(() => {
  'use strict';
  const $=s=>document.querySelector(s);
  const {names,levels,G,P}=window.DSMathGeneratorData;
  const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
  let current=null;
  let progress=load('dsMathProgress',{correct:0,review:0,total:0});
  let seen=new Set(load('dsMathSeen',[]));

  const saveSeen=()=>localStorage.setItem('dsMathSeen',JSON.stringify([...seen].slice(-700)));
  const parseNumber=value=>{
    let text=String(value).trim().replace(/\s/g,'');
    if(text.includes(',')&&text.includes('.')) text=text.replace(/\./g,'').replace(',','.');
    else text=text.replace(',','.');
    return Number(text);
  };

  const familyPlans={
    1:[0,1,2],
    2:[0,1,2,3],
    3:[1,2,3,4],
    4:[2,3,4,3],
    5:[3,4,4,3]
  };
  const finalChallengePlans={
    reta:[4],
    partes:[3,4],
    parabola:[3,4],
    quadrado:[4],
    transformacoes:[4],
    tangente:[3,4],
    porcentagem:[4],
    ladrilhamento:[3,4],
    dados:[3,4]
  };
  const shuffle=a=>{
    const b=[...a];
    for(let i=b.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [b[i],b[j]]=[b[j],b[i]];
    }
    return b;
  };
  function primeFamily(topic,level){
    const bags=window.__DSMathVarietyBags;
    if(!bags)return;
    const key=`${topic}|${level}`;
    if(!Array.isArray(bags[key])||!bags[key].length){
      const plan=level===5&&finalChallengePlans[topic]
        ? finalChallengePlans[topic]
        : (familyPlans[level]||familyPlans[3]);
      bags[key]=shuffle(plan);
    }
  }
  function nextExercise(topic,level){
    primeFamily(topic,level);
    return G[topic](level);
  }

  function updateProgress(){
    const e=$('#exerciseProgress');
    if(e)e.textContent=`Neste navegador: ${progress.correct} acertos registrados, ${progress.review} respostas para revisar, ${progress.total} exercícios avaliados.`;
  }

  function selectedTopic(){
    const v=$('#exerciseTopic').value;
    return v==='mixed'?P(Object.keys(names)):v;
  }

  function unique(topic,level){
    let exercise,key;
    for(let i=0;i<40;i++){
      exercise=nextExercise(topic,level);
      key=`${topic}|${level}|${exercise.key||exercise.question}`;
      if(!seen.has(key))break;
    }
    seen.add(key);saveSeen();return exercise;
  }

  function uniqueForList(topic,level,localSeen){
    let exercise,key;
    for(let i=0;i<40;i++){
      exercise=nextExercise(topic,level);
      key=`${topic}|${level}|${exercise.key||exercise.question}`;
      if(!localSeen.has(key))break;
    }
    localSeen.add(key);
    return exercise;
  }

  function setManualButtons(show){
    const a=$('#markCorrect'),r=$('#markReview');
    if(a)a.style.display=show?'':'none';
    if(r)r.style.display=show?'':'none';
  }

  function renderResponse(){
    let host=$('#generatedResponse');
    if(!host){
      host=document.createElement('div');host.id='generatedResponse';host.className='generated-response';
      $('#exerciseQuestion').insertAdjacentElement('afterend',host);
    }
    host.innerHTML='';
    const auto=current.kind==='number'||current.kind==='mc';
    setManualButtons(!auto);
    if(!auto)return;

    if(current.kind==='number'){
      host.innerHTML=`<label class="generated-answer-label" for="generatedAnswer">Sua resposta</label><div class="generated-answer-row"><input id="generatedAnswer" inputmode="decimal" autocomplete="off" placeholder="Digite o resultado"><button id="checkGenerated" class="action-button primary" type="button">Conferir</button></div><p class="generated-help">Use vírgula ou ponto para números decimais.</p>`;
      const input=$('#generatedAnswer');
      const check=()=>{
        if(!input.value.trim())return showFeedback(false,'Digite uma resposta antes de conferir.',false);
        const value=parseNumber(input.value);
        if(Number.isNaN(value))return showFeedback(false,'Não consegui interpretar esse valor como número.',false);
        const tolerance=current.tolerance??0;
        const ok=Math.abs(value-Number(current.answer))<=tolerance;
        evaluate(ok);
      };
      $('#checkGenerated').onclick=check;
      input.onkeydown=e=>{if(e.key==='Enter')check();};
    }

    if(current.kind==='mc'){
      host.innerHTML=`<div class="generated-choice-grid">${current.options.map(o=>`<button type="button" data-generated-choice="${o.id}">${o.label}</button>`).join('')}</div>`;
      host.querySelectorAll('[data-generated-choice]').forEach(btn=>{
        btn.onclick=()=>{
          const ok=btn.dataset.generatedChoice===String(current.answer);
          host.querySelectorAll('[data-generated-choice]').forEach(b=>b.classList.remove('is-right','is-wrong'));
          btn.classList.add(ok?'is-right':'is-wrong');
          evaluate(ok);
          if(ok)host.querySelectorAll('[data-generated-choice]').forEach(b=>b.disabled=true);
        };
      });
    }
  }

  function record(ok){
    if(current.recorded)return;
    current.recorded=true;
    progress.total++;
    if(ok)progress.correct++; else progress.review++;
    localStorage.setItem('dsMathProgress',JSON.stringify(progress));
    updateProgress();
  }

  function showFeedback(ok,message,recordResult=true){
    if(recordResult)record(ok);
    const box=$('#exerciseFeedback');
    box.innerHTML=`<div class="${ok?'ok-box':'note-box'}"><strong>${ok?'Correto.':'Ainda não.'}</strong> ${message}</div>`;
  }

  function evaluate(ok){
    current.attempts=(current.attempts||0)+1;
    if(ok){
      showFeedback(true,`Confira o raciocínio: ${current.solution}`);
    }else{
      const extra=current.attempts>=2?` <strong>Dica:</strong> ${current.hint}`:'';
      showFeedback(false,`A resposta não confere.${extra}`);
    }
  }

  function generate(){
    const level=Number($('#exerciseLevel').value),topic=selectedTopic();
    current={...unique(topic,level),topic,level,attempts:0,recorded:false};
    $('#exerciseTopicBadge').textContent=names[topic];
    $('#exerciseLevelBadge').textContent=`Nível ${level} — ${levels[level]}`;
    $('#exerciseQuestion').innerHTML=current.question;
    $('#exerciseFeedback').innerHTML='';
    renderResponse();
  }

  function manualMark(type){
    if(!current||current.kind==='number'||current.kind==='mc')return;
    if(!current.recorded){
      current.recorded=true;progress.total++;progress[type]++;
      localStorage.setItem('dsMathProgress',JSON.stringify(progress));updateProgress();
    }
    $('#exerciseFeedback').innerHTML=type==='correct'
      ?'<div class="ok-box"><strong>Registrado.</strong> Compare com a resolução antes de seguir para confirmar o raciocínio.</div>'
      :'<div class="note-box"><strong>Registrado para revisão.</strong> Abra a dica ou a resolução e tente outro do mesmo assunto.</div>';
  }

  function printList(){
    const selected=$('#exerciseTopic').value,level=Number($('#exerciseLevel').value),list=[],localSeen=new Set();
    for(let i=0;i<10;i++){
      const topic=selected==='mixed'?P(Object.keys(names)):selected;
      list.push({topic,exercise:uniqueForList(topic,level,localSeen)});
    }
    const body=`<h1>DS Matemática — Lista de exercícios</h1><p>1ª Série · Nível ${level} — ${levels[level]}</p>${list.map((x,i)=>`<div class="item"><h2>${i+1}. ${names[x.topic]}</h2><p>${x.exercise.question}</p></div>`).join('')}`;
    const w=open('','_blank','width=900,height=700');
    if(!w){alert('O navegador bloqueou a janela de impressão. Permita pop-ups para gerar a lista.');return;}
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DS Matemática — Exercícios</title><style>body{font-family:Arial,sans-serif;color:#111;margin:24mm 18mm}h1{font-size:22px}h2{font-size:15px;margin:0 0 6px}.item{margin:18px 0;break-inside:avoid}p{line-height:1.45}@media print{body{margin:12mm}}</style></head><body>${body}<script>window.onload=()=>window.print()<\/script></body></html>`);
    w.document.close();
  }

  function init(){
    const select=$('#exerciseTopic');if(!select)return;
    select.innerHTML='<option value="mixed">Misturado — todos os assuntos</option>'+Object.entries(names).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
    const preset=sessionStorage.getItem('dsMathPracticeTopic');
    if(preset&&names[preset]){select.value=preset;sessionStorage.removeItem('dsMathPracticeTopic');}
    $('#newExercise').onclick=generate;
    select.onchange=generate;
    $('#exerciseLevel').onchange=generate;
    $('#showHint').onclick=()=>{if(current)$('#exerciseFeedback').innerHTML=`<div class="note-box"><strong>Dica:</strong> ${current.hint}</div>`;};
    $('#showSolution').onclick=()=>{if(current)$('#exerciseFeedback').innerHTML=`<div class="ok-box"><strong>Resolução:</strong> ${current.solution}</div>`;};
    $('#markCorrect').onclick=()=>manualMark('correct');
    $('#markReview').onclick=()=>manualMark('review');
    $('#printExercises').onclick=printList;
    updateProgress();generate();
  }

  window.DSMathExercises={init};
})();
