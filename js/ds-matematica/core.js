(() => {
  'use strict';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const home=$('#seriesHome'), course=$('#courseView'), menu=$('#lessonMenu'), content=$('#lessonContent');
  let current=null;
  const groups=['Antes de começar','Números e Álgebra','Geometria e Medidas','Probabilidade e Estatística','Prática'];

  function buildMenu(){
    menu.innerHTML='';
    groups.forEach(group=>{
      const lessons=DS_MATH_LESSONS.filter(l=>l.unit===group).sort((a,b)=>a.order-b.order);
      if(!lessons.length)return;
      const h=document.createElement('div'); h.className='menu-group-title'; h.textContent=group; menu.appendChild(h);
      lessons.forEach(l=>{const b=document.createElement('button'); b.type='button'; b.className='menu-item'; b.dataset.lesson=l.id; b.textContent=l.menu; b.onclick=()=>showLesson(l.id); menu.appendChild(b);});
    });
  }

  function showCourse(){
    home.hidden=true; course.hidden=false; showLesson(current||'diagnostico');
    scrollTo({top:0,behavior:'auto'});
  }

  function showLesson(id){
    const l=DS_MATH_LESSONS.find(x=>x.id===id)||DS_MATH_LESSONS[0]; current=l.id;
    history.replaceState?.(null,'',`#${l.id}`);
    $('#unitName').textContent=l.unit;
    $('#technicalTitle').textContent=l.technical;
    $('#lessonTitle').textContent=l.title;
    const objective=$('#lessonObjective');
    const purpose=document.createElement('strong'); purpose.textContent='Propósito:';
    objective.replaceChildren(purpose,document.createTextNode(` ${l.objective}`));
    content.innerHTML=l.content;
    $$('.menu-item').forEach(b=>b.classList.toggle('active',b.dataset.lesson===l.id));
    menu.classList.remove('open'); $('#openMenu').setAttribute('aria-expanded','false');
    if(innerWidth<=900)scrollTo({top:0,behavior:'smooth'});
    initLesson(l.id);
  }

  function initLesson(id){
    if(id==='diagnostico')diagnostic();
    if(id==='variacao')proportionLab();
    if(id==='reta')slope();
    if(id==='parabola')parabola();
    if(id==='exercicios')window.DSMathExercises?.init();
    choiceQuestions();
    $$('[data-practice-topic]',content).forEach(b=>b.onclick=()=>{
      sessionStorage.setItem('dsMathPracticeTopic',b.dataset.practiceTopic);
      showLesson('exercicios');
    });
  }

  function choiceQuestions(){
    $$('[data-choice-question]',content).forEach(box=>{
      const correct=box.dataset.correct;
      const feedback=$('[data-choice-feedback]',box);
      $$('[data-choice]',box).forEach(btn=>{
        btn.onclick=()=>{
          const ok=btn.dataset.choice===correct;
          $$('[data-choice]',box).forEach(b=>b.classList.remove('choice-correct','choice-wrong','choice-selected'));
          btn.classList.add('choice-selected',ok?'choice-correct':'choice-wrong');
          if(feedback){
            feedback.className=`choice-feedback ${ok?'is-correct':'is-wrong'}`;
            feedback.innerHTML=`<strong>${ok?'Correto.':'Ainda não.'}</strong> ${ok?feedback.dataset.correctText:feedback.dataset.wrongText}`;
          }
        };
      });
    });
  }

  function proportionLab(){
    const rate=$('#propRate'), fixed=$('#propFixed'), body=$('#propTableBody'), svg=$('#propGraph');
    if(!rate||!fixed||!body||!svg)return;
    const draw=()=>{
      const k=Number(rate.value), b=Number(fixed.value);
      $('#propRateValue').textContent=k; $('#propFixedValue').textContent=b;
      $('#propEquation').textContent=b===0?`y = ${k}x`:`y = ${k}x + ${b}`;
      body.innerHTML=[0,1,2,3,4,5].map(x=>{
        const y=k*x+b;
        const ratio=x===0?'—':Number(y/x).toLocaleString('pt-BR',{maximumFractionDigits:2});
        return `<tr><td>${x}</td><td>${y}</td><td>${ratio}</td></tr>`;
      }).join('');

      const left=58,bottom=250,right=530,top=24,xMax=5;
      const yMax=Math.max(10,k*xMax+b);
      const sx=(right-left)/xMax, sy=(bottom-top)/yMax;
      const grid=[];
      for(let x=0;x<=xMax;x++){
        const px=left+x*sx;
        grid.push(`<line class="graph-grid" x1="${px}" y1="${top}" x2="${px}" y2="${bottom}"/>`);
        grid.push(`<text class="graph-text" x="${px}" y="${bottom+20}" text-anchor="middle">${x}</text>`);
      }
      for(let i=0;i<=4;i++){
        const y=yMax*i/4, py=bottom-y*sy;
        grid.push(`<line class="graph-grid" x1="${left}" y1="${py}" x2="${right}" y2="${py}"/>`);
        grid.push(`<text class="graph-text" x="${left-8}" y="${py+4}" text-anchor="end">${Number(y.toFixed(1)).toLocaleString('pt-BR')}</text>`);
      }
      const pts=[];
      for(let x=0;x<=xMax;x++){
        const y=k*x+b, px=left+x*sx, py=bottom-y*sy;
        pts.push(`${px},${py}`);
      }
      svg.innerHTML=`${grid.join('')}<line class="graph-axis" x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}"/><line class="graph-axis" x1="${left}" y1="${bottom}" x2="${left}" y2="${top}"/><polyline class="graph-line" points="${pts.join(' ')}"/>${pts.map(p=>{const [x,y]=p.split(',');return `<circle class="graph-point" cx="${x}" cy="${y}" r="5"/>`;}).join('')}`;
      svg.setAttribute('aria-label',b===0?`Reta y igual a ${k}x, passando pela origem`:`Reta y igual a ${k}x mais ${b}, sem passar pela origem`);
      $('#propConclusion').innerHTML=b===0
        ?`<strong>Proporcional.</strong> Para x diferente de zero, y/x permanece ${k}; além disso, y(0)=0 e a reta passa pela origem.`
        :`<strong>Não é proporcionalidade direta.</strong> Existe um valor inicial ${b}. A razão y/x muda e a reta cruza o eixo vertical em ${b}, não na origem.`;
    };
    rate.oninput=draw; fixed.oninput=draw; draw();
  }

  function diagnostic(){
    const check=$('#checkDiagnostic'),reset=$('#resetDiagnostic'); if(!check||!reset)return;
    check.onclick=()=>{
      const items=$$('.quiz-item',$('#diagnosticQuiz'));let ok=0,blank=0,gaps=[];
      items.forEach(item=>{const i=$('input',item),sel=$(`input[name="${i.name}"]:checked`,item);if(!sel){blank++;gaps.push(item.dataset.area)}else if(sel.value===item.dataset.answer)ok++;else gaps.push(item.dataset.area)});
      const u=[...new Set(gaps)],out=$('#diagnosticResult');
      if(blank===items.length){out.innerHTML='<div class="note-box"><strong>Responda às questões</strong> para receber um diagnóstico.</div>';return}
      const msg=ok>=9?'Base muito consistente.':ok>=7?'Boa base, com poucos pontos para revisar.':ok>=5?'Há alguns fundamentos que vale reforçar.':'Reforce os fundamentos antes de avançar.';
      out.innerHTML=`<div class="${ok>=7?'ok-box':'note-box'}"><strong>${ok}/${items.length} — ${msg}</strong>${u.length?`<p>Revise: ${u.join(', ')}.</p>`:'<p>Você acertou todas as questões respondidas.</p>'}${blank?`<p>Questões sem resposta: ${blank}.</p>`:''}</div>`;
      localStorage.setItem('dsMathDiagnostic',JSON.stringify({score:ok,total:items.length,gaps:u,date:new Date().toISOString()}));
    };
    reset.onclick=()=>{$$('input[type="radio"]',$('#diagnosticQuiz')).forEach(i=>i.checked=false);$('#diagnosticResult').innerHTML='';};
  }

  function slope(){
    const r=$('#slopeRange'),svg=$('#slopeGraph');if(!r||!svg)return;
    const draw=()=>{const m=+r.value;$('#slopeValue').textContent=m;const cx=280,cy=140,sx=45,sy=28,x1=-5,x2=5;svg.innerHTML=`<line class="graph-axis" x1="40" y1="140" x2="530" y2="140"/><line class="graph-axis" x1="280" y1="20" x2="280" y2="250"/><line class="graph-line" x1="${cx+x1*sx}" y1="${cy-m*x1*sy}" x2="${cx+x2*sx}" y2="${cy-m*x2*sy}"/>`;$('#slopeText').textContent=m>0?'m positivo: a reta é crescente.':m<0?'m negativo: a reta é decrescente.':'m = 0: a reta é horizontal e a função é constante.';};r.oninput=draw;draw();
  }

  function parabola(){
    const r=$('#parabolaRange'),svg=$('#parabolaGraph');if(!r||!svg)return;
    const draw=()=>{let a=+r.value;if(a===0)a=1;$('#parabolaValue').textContent=a;const pts=[],cx=280,cy=140,sx=45,sy=15;for(let x=-4.5;x<=4.5;x+=.15)pts.push(`${cx+x*sx},${cy-a*x*x*sy}`);svg.innerHTML=`<line class="graph-axis" x1="40" y1="140" x2="525" y2="140"/><line class="graph-axis" x1="280" y1="15" x2="280" y2="265"/><polyline class="graph-line" points="${pts.join(' ')}"/>`;$('#parabolaText').textContent=a>0?'a positivo: concavidade para cima e mínimo no vértice.':'a negativo: concavidade para baixo e máximo no vértice.';};r.oninput=draw;draw();
  }

  buildMenu();
  $('.series-card.active').onclick=showCourse;
  $('#backToSeries').onclick=()=>{course.hidden=true;home.hidden=false;menu.classList.remove('open');scrollTo({top:0,behavior:'smooth'});};
  $('#openMenu').onclick=()=>{const o=menu.classList.toggle('open');$('#openMenu').setAttribute('aria-expanded',String(o));};
  const hash=location.hash.slice(1);if(hash&&DS_MATH_LESSONS.some(l=>l.id===hash)){current=hash;showCourse();}
  addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(DS_MATH_LESSONS.some(l=>l.id===id))showLesson(id);});
})();
