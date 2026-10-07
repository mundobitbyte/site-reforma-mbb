(() => {
  'use strict';

  const MBB = window.MBBBiologia = window.MBBBiologia || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Ecologia',prompt:'Em uma cadeia capim → gafanhoto → sapo, qual organismo é produtor?',options:['Capim','Gafanhoto','Sapo','Ainda não sei'],answer:0},
    {area:'Fluxo de energia',prompt:'A energia disponível tende a aumentar ou diminuir ao passar para níveis tróficos mais altos?',options:['Aumentar sempre','Diminuir, porque parte é dissipada em cada transferência','Permanecer exatamente igual','Ainda não sei'],answer:1},
    {area:'Fotossíntese',prompt:'Qual ideia descreve melhor a fotossíntese?',options:['Produção de matéria orgânica usando energia luminosa','Transformação de oxigênio em nitrogênio','Digestão realizada apenas por animais','Ainda não sei'],answer:0},
    {area:'Respiração celular',prompt:'Plantas realizam respiração celular?',options:['Não, só fazem fotossíntese','Sim, células vegetais também usam respiração celular para obter energia utilizável','Somente durante a noite','Ainda não sei'],answer:1},
    {area:'Clima',prompt:'Qual afirmação diferencia tempo e clima?',options:['Tempo descreve condições de curto prazo; clima descreve padrões de longo prazo','São sinônimos','Clima muda a cada hora','Ainda não sei'],answer:0},
    {area:'Células',prompt:'Qual estrutura delimita todas as células conhecidas?',options:['Membrana plasmática','Parede celular','Cloroplasto','Ainda não sei'],answer:0},
    {area:'Evolução',prompt:'Quando bactérias resistentes sobrevivem a um antibiótico e deixam mais descendentes, qual ideia ajuda a explicar o processo?',options:['Seleção natural','Uso e desuso dirigido pela necessidade','Transformação instantânea de todos os indivíduos','Ainda não sei'],answer:0},
    {area:'Genética',prompt:'Um alelo é:',options:['Uma versão de um gene','Um órgão do corpo','Uma bactéria','Ainda não sei'],answer:0},
    {area:'Leitura de dados',prompt:'Uma população passa de 200 para 260 indivíduos. Qual foi o aumento numérico?',options:['40','60','260','Ainda não sei'],answer:1},
    {area:'Evidência científica',prompt:'Um estudo encontra correlação entre duas variáveis. Isso prova automaticamente que uma causa a outra?',options:['Sim, sempre','Não; correlação sozinha não demonstra causalidade','Sim, se o gráfico for colorido','Ainda não sei'],answer:1},
    {area:'Concepção inicial: ecossistema',prompt:'Um ecossistema é formado apenas pelos seres vivos?',options:['Sim','Não; inclui seres vivos e fatores abióticos em interação','Depende do tamanho do lugar','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: evolução',prompt:'Evolução biológica significa que um indivíduo muda porque precisa se adaptar durante a vida?',options:['Sim','Não; evolução envolve mudanças herdáveis em populações ao longo das gerações','Somente em animais','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Ecologia':'Revise níveis de organização, fatores bióticos/abióticos e relações alimentares.',
    'Fluxo de energia':'Lembre que matéria circula, mas a energia flui e parte se dissipa como calor.',
    'Fotossíntese':'Reforce a transformação de energia luminosa em energia química e produção de matéria orgânica.',
    'Respiração celular':'Reforce que a respiração celular ocorre em plantas, animais, fungos e muitos microrganismos.',
    'Clima':'Separe condição momentânea da atmosfera de padrões climáticos de longo prazo.',
    'Células':'Reveja estruturas comuns às células e diferenças entre procariontes e eucariontes.',
    'Evolução':'Reforce população, variação herdável, seleção natural e tempo geracional.',
    'Genética':'Reveja gene, alelo, genótipo, fenótipo e probabilidade.',
    'Leitura de dados':'Treine diferenças, proporções e interpretação antes de tirar conclusões.',
    'Evidência científica':'Separe correlação, hipótese, evidência e relação causal.'
  };

  function markup(q,index) {
    const name = `bioDiag${index}`;
    const unscored = q.scored === false;
    return `<div class="quiz-item${unscored?' is-unscored':''}" data-area="${q.area}" data-answer="${q.answer}" data-scored="${unscored?'false':'true'}">
      ${unscored?'<span class="question-tag">Concepção inicial • não vale ponto</span>':''}
      <p>${index+1}. ${q.prompt}</p>
      ${q.options.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function showDiagnostic() {
    MBB.showLesson({
      unit:'Antes de começar',
      technical:'Diagnóstico • conhecimentos prévios e raciocínio científico',
      title:'O que você já sabe para começar Biologia?',
      objective:'<strong>Objetivo:</strong> identificar conhecimentos prévios sobre ecologia, metabolismo, clima, células, evolução, genética e leitura de evidências antes de avançar.',
      html:`
        <div class="hero-box"><strong class="card-title">Este diagnóstico não vale nota.</strong><p>Responda sem pesquisar. Se realmente não souber, marque <em>Ainda não sei</em>. O resultado servirá para apontar o que precisa ser reconstruído antes ou durante os capítulos.</p></div>
        <div class="diagnostic-intro"><div class="mini-card"><strong>Não chute para parecer que sabe</strong><p>Um erro identificado é útil; um acerto por sorte pode esconder uma lacuna.</p></div><div class="mini-card"><strong>Duas questões não contam pontos</strong><p>Elas registram concepções comuns que serão retomadas ao longo do módulo.</p></div></div>
        <section id="bioDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkBioDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetBioDiagnostic" type="button">Refazer</button></div><div id="bioDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkBioDiagnostic',root);
    const reset = $('#resetBioDiagnostic',root);
    const result = $('#bioDiagnosticResult',root);
    check?.addEventListener('click',()=>{
      let score=0,total=0;
      const gaps=[];
      $$('[data-scored]',root).forEach(box=>{
        if (box.dataset.scored==='false') return;
        total++;
        const selected = $('input:checked',box);
        if (selected && Number(selected.value)===Number(box.dataset.answer)) score++;
        else gaps.push(box.dataset.area);
      });
      const unique=[...new Set(gaps)];
      const message=score>=9?'Base muito consistente.':score>=7?'Boa base; há poucos pontos a reforçar.':score>=5?'Há fundamentos importantes para revisar durante o percurso.':'Vale reconstruir a base com atenção antes de acelerar.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O objetivo não é classificar você, e sim orientar a revisão.</p></div>${unique.length?`<div class="review-panel"><h3>Revisar o que preciso</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse conceito antes de avançar.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong></div>'}`;
    });
    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();
