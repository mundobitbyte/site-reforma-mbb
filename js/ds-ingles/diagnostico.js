(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'To be',prompt:'Você quer dizer “Eu sou estudante”. Complete: “I ___ a student.”',options:['am','is','are','Ainda não sei'],answer:0},
    {area:'Pronomes',prompt:'Qual pronome substitui “Maria and I”?',options:['He','She','We','Ainda não sei'],answer:2},
    {area:'Simple present',prompt:'Você fala da rotina do seu irmão: “My brother ___ games after school.”',options:['play','plays','playing','Ainda não sei'],answer:1},
    {area:'Perguntas no presente',prompt:'Você quer perguntar sobre preferência. Qual estrutura está correta?',options:['Do you like music?','You do like music?','Are you like music?','Ainda não sei'],answer:0},
    {area:'There is / there are',prompt:'Você quer dizer que existem dois computadores no laboratório: “___ two computers in the lab.”',options:['There is','There are','It is','Ainda não sei'],answer:1},
    {area:'Present continuous',prompt:'“They are studying now.” apresenta principalmente',options:['uma rotina','uma ação em andamento','um fato passado','Ainda não sei'],answer:1},
    {area:'Simple past',prompt:'Você relata ontem: “Yesterday we ___ a new app.”',options:['test','tested','testing','Ainda não sei'],answer:1},
    {area:'Passado irregular',prompt:'Qual frase relata corretamente uma ida à escola ontem?',options:['She go to school yesterday.','She went to school yesterday.','She goes to school yesterday.','Ainda não sei'],answer:1},
    {area:'Futuro',prompt:'“I am going to study tonight.” apresenta principalmente',options:['um plano/intenção','um fato passado','uma obrigação','Ainda não sei'],answer:0},
    {area:'Modais',prompt:'Qual frase tem força de conselho?',options:['You should rest.','You can swim.','You must enter now.','Ainda não sei'],answer:0},
    {area:'Leitura',prompt:'Em “Meeting: Friday, 2 p.m., Room 8”, você precisa apenas do horário. O mais eficiente é',options:['procurar diretamente a informação de tempo','traduzir tudo antes','ignorar números','Ainda não sei'],answer:0},
    {area:'Interação',prompt:'Você não entendeu uma fala importante. Qual resposta mantém a comunicação?',options:['Could you repeat that, please?','I understand everything.','No.','Ainda não sei'],answer:0},
    {area:'Produção',prompt:'Você consegue escrever 4 frases simples sobre quem é, do que gosta e sua rotina?',options:['Sim, sem modelo','Com algum apoio','Ainda não','Não sei avaliar'],answer:0,scored:false},
    {area:'Compreensão oral',prompt:'Ao ouvir inglês simples, você consegue identificar assunto e alguns detalhes como números ou nomes?',options:['Frequentemente','Às vezes','Raramente','Não sei avaliar'],answer:0,scored:false}
  ];

  const reviews = {
    'To be':'Comece pela relação entre sujeito e identidade/estado: I am, he/she/it is, you/we/they are.',
    'Pronomes':'Revise I, you, he, she, it, we e they e use-os para decidir a forma verbal.',
    'Simple present':'Associe o tempo a rotina, hábito e fatos gerais; depois observe a 3ª pessoa com -s.',
    'Perguntas no presente':'Com verbos comuns, perguntas usam do/does; com to be, o próprio verbo vai para a frente.',
    'There is / there are':'Diferencie existência (there is/are), localização (the computer is...) e posse (the lab has...).',
    'Present continuous':'Pense em ação em andamento: am/is/are + verbo-ing.',
    'Simple past':'Localize primeiro o tempo do acontecimento; depois escolha was/were, -ed ou forma irregular.',
    'Passado irregular':'Aprenda os verbos frequentes dentro de frases e relatos, não como lista solta.',
    'Futuro':'Going to costuma destacar plano/intenção; will aparece muito em decisões, ofertas e previsões.',
    'Modais':'Escolha pela força da mensagem: possibilidade, pedido, conselho, obrigação ou proibição.',
    'Leitura':'Defina o objetivo da leitura antes de decidir se precisa da ideia geral ou de um detalhe.',
    'Interação':'Pedir repetição e confirmação faz parte da competência comunicativa.'
  };

  function markup(q,index) {
    const name = `enDiag${index}`;
    const unscored = q.scored === false;
    return `<div class="quiz-item${unscored?' is-unscored':''}" data-area="${q.area}" data-answer="${q.answer}" data-scored="${unscored?'false':'true'}">
      ${unscored?'<span class="question-tag">Autoavaliação • não vale ponto</span>':''}
      <p>${index+1}. ${q.prompt}</p>
      ${q.options.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function showDiagnostic() {
    MBB.showLesson({
      unit:'Antes de começar',
      technical:'diagnóstico linguístico • significado • forma • uso • leitura • interação • produção',
      title:'00 — O que você já consegue fazer em inglês?',
      objective:'<strong>Objetivo:</strong> identificar sua base real antes do percurso e entender como o módulo será estudado: contexto, descoberta, explicação, prática e transferência.',
      html:`
        <div class="hero-box"><strong class="card-title">Este diagnóstico não existe para separar “quem sabe” de “quem não sabe”.</strong><p>Ele procura descobrir quais relações entre <strong>significado, forma e uso</strong> você já controla. Responda sem pesquisar. <em>Ainda não sei</em> é informação útil.</p></div>

        <h3>Como você vai aprender neste módulo</h3>
        <div class="three-col">
          <div class="mini-card"><strong>1. Necessidade</strong><p>Uma situação mostra por que precisamos daquela língua.</p></div>
          <div class="mini-card"><strong>2. Perceber</strong><p>Você observa exemplos e tenta identificar o padrão.</p></div>
          <div class="mini-card"><strong>3. Entender</strong><p>A regra é explicada com significado, contraste e erro comum.</p></div>
          <div class="mini-card"><strong>4. Praticar</strong><p>Questões curtas verificam se a ideia ficou clara.</p></div>
          <div class="mini-card"><strong>5. Produzir</strong><p>Você cria frases, textos ou falas próprias.</p></div>
          <div class="mini-card"><strong>6. Retomar</strong><p>A estrutura reaparece depois em uma situação nova.</p></div>
        </div>
        <div class="concept-box"><strong class="card-title">Por que fazemos assim?</strong><p>Aprender inglês não é apenas “descobrir sozinho” nem decorar regra pronta. O objetivo é encontrar a forma dentro de um uso compreensível, receber explicação clara quando ela ajuda e depois usar a língua sem depender do exemplo.</p></div>

        <section id="enDiagnostic">
          ${questions.map(markup).join('')}
          <div class="quiz-actions"><button class="action-button primary" id="checkEnDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetEnDiagnostic" type="button">Refazer</button></div>
          <div id="enDiagnosticResult" class="quiz-result" aria-live="polite"></div>
        </section>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Produção inicial</span><h3>Teste sem alternativas</h3><div class="challenge-box">
          <p>Tente escrever ou dizer, sem consultar:</p><ol><li>quem você é e de onde vem;</li><li>uma coisa que faz normalmente;</li><li>o que está fazendo agora;</li><li>algo que fez ontem;</li><li>algo que pretende fazer amanhã.</li></ol>
          <details><summary>Modelo apenas para conferir depois</summary><p><strong>My name is Ana. I’m from Brazil. I study in the morning. I’m studying English now. Yesterday I watched a video. Tomorrow I’m going to visit my grandmother.</strong></p></details>
          <p>Se você só consegue depois de abrir o modelo, isso também é diagnóstico: reconhecer ainda não é o mesmo que produzir.</p>
        </div></section>`,
      init
    });
  }

  function init(root) {
    const check = $('#checkEnDiagnostic',root);
    const reset = $('#resetEnDiagnostic',root);
    const result = $('#enDiagnosticResult',root);

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
      const message=score>=11?'Base muito boa para avançar.':score>=8?'Você já tem uma base útil, com pontos claros para consolidar.':score>=5?'Há conhecimentos importantes, mas alguns fundamentos precisam ser reconstruídos.':'Vamos construir a base passo a passo, começando pela função da língua.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O número mostra reconhecimento de estruturas. Sua produção acima é igualmente importante para decidir o que realmente está consolidado.</p></div>${unique.length?`<div class="review-panel"><h3>Prioridades de revisão</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome este ponto durante o percurso.'}</p></div>`).join('')}</div></div>`:''}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();