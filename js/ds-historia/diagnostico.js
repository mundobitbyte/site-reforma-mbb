(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Tempo histórico',prompt:'O ano de 1789 pertence a qual século?',options:['Século XVII','Século XVIII','Século XIX','Ainda não sei'],answer:1},
    {area:'Cronologia',prompt:'Se o acontecimento A ocorreu em 1500 e o acontecimento B em 1800, qual afirmação é correta?',options:['A ocorreu antes de B','B ocorreu antes de A','Os dois ocorreram ao mesmo tempo','Ainda não sei'],answer:0},
    {area:'Fontes históricas',prompt:'Qual item pode ser usado como fonte para investigar o passado?',options:['Uma carta antiga','Uma fotografia','Um objeto arqueológico','Todos os anteriores'],answer:3},
    {area:'Evidência e conclusão',prompt:'Um documento afirma que uma cidade era “próspera”. O que um historiador deveria fazer antes de aceitar essa afirmação como descrição completa?',options:['Comparar com outras evidências e perguntar quem produziu o documento','Aceitar porque está escrito','Descartar qualquer documento escrito','Ainda não sei'],answer:0},
    {area:'Perspectiva',prompt:'Duas pessoas que viveram o mesmo acontecimento podem deixar relatos diferentes?',options:['Não; apenas um relato pode existir','Sim; posição social, experiência e interesse podem influenciar o relato','Só se uma delas estiver mentindo','Ainda não sei'],answer:1},
    {area:'Causa e sequência',prompt:'Se um fato aconteceu antes de outro, isso prova que o primeiro causou o segundo?',options:['Sim, sempre','Não; a ordem temporal sozinha não prova causalidade','Sim, se a diferença for menor que dez anos','Ainda não sei'],answer:1},
    {area:'Mudança e permanência',prompt:'Ao estudar uma sociedade ao longo do tempo, por que é útil observar mudanças e permanências?',options:['Porque nem tudo muda ao mesmo tempo nem do mesmo modo','Porque tudo sempre permanece igual','Porque apenas datas importam','Ainda não sei'],answer:0},
    {area:'Espaço e território',prompt:'Um mapa histórico pode ajudar a compreender:',options:['Fronteiras, deslocamentos e organização do espaço','Somente a temperatura do dia','A opinião pessoal do leitor','Ainda não sei'],answer:0},
    {area:'Diversidade cultural',prompt:'Julgar outra sociedade usando apenas os valores da nossa própria cultura, tratando-os como padrão universal, aproxima-se de qual problema?',options:['Etnocentrismo','Cronologia','Arqueologia','Ainda não sei'],answer:0},
    {area:'Leitura crítica',prompt:'Qual pergunta ajuda mais a analisar uma fonte?',options:['Quem produziu, quando, para quem e com qual finalidade?','A fonte tem muitas cores?','O texto é longo?','Ainda não sei'],answer:0},
    {area:'Concepção inicial: História',prompt:'História é apenas decorar datas e nomes?',options:['Sim','Não; envolve investigar evidências, processos, mudanças e diferentes experiências humanas','Somente quando há prova','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: narrativas',prompt:'Se existem interpretações diferentes sobre um processo histórico, então qualquer versão vale do mesmo modo?',options:['Sim, toda opinião tem o mesmo valor histórico','Não; interpretações precisam dialogar com evidências e métodos de análise','Depende apenas de quem fala mais alto','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Tempo histórico':'Revise séculos, ordem cronológica e a diferença entre data e processo histórico.',
    'Cronologia':'Reforce como ordenar acontecimentos no tempo sem confundir sequência com explicação.',
    'Fontes históricas':'Lembre que textos, imagens, objetos, relatos orais e registros digitais podem funcionar como fontes.',
    'Evidência e conclusão':'Treine comparar fontes e separar o que uma evidência mostra do que estamos inferindo.',
    'Perspectiva':'Observe autoria, posição social, interesses e experiência de quem produziu um relato.',
    'Causa e sequência':'Evite transformar “aconteceu antes” em “causou” sem investigar mecanismos e contexto.',
    'Mudança e permanência':'Procure o que se transforma e o que continua em diferentes ritmos.',
    'Espaço e território':'Use mapas para relacionar tempo, fronteiras, circulação, ocupação e poder.',
    'Diversidade cultural':'Reforce diversidade, contexto e o risco de usar uma cultura como medida universal das outras.',
    'Leitura crítica':'Use perguntas de autoria, data, público, finalidade, contexto, conteúdo e silêncios.'
  };

  function markup(q,index) {
    const name = `histDiag${index}`;
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
      technical:'Diagnóstico • tempo, fontes, evidências e leitura histórica',
      title:'O que você já sabe para começar História?',
      objective:'<strong>Objetivo:</strong> identificar conhecimentos prévios sobre tempo histórico, fontes, evidências, perspectivas, causalidade, território e leitura crítica antes de avançar.',
      html:`
        <div class="hero-box"><strong class="card-title">Este diagnóstico não vale nota.</strong><p>Responda sem pesquisar. Marcar <em>Ainda não sei</em> é melhor do que esconder uma dúvida com um chute. O resultado serve para orientar o caminho, não para rotular você.</p></div>
        <div class="diagnostic-intro"><div class="mini-card"><strong>História não começa pela memorização</strong><p>O mais importante aqui é perceber como você organiza tempo, evidências e explicações.</p></div><div class="mini-card"><strong>Duas questões não contam pontos</strong><p>Elas registram ideias iniciais sobre o que é História e sobre o peso das interpretações.</p></div></div>
        <section id="histDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkHistDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetHistDiagnostic" type="button">Refazer</button></div><div id="histDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkHistDiagnostic',root);
    const reset = $('#resetHistDiagnostic',root);
    const result = $('#histDiagnosticResult',root);

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
      const message=score>=9?'Base muito consistente.':score>=7?'Boa base; há poucos pontos a reforçar.':score>=5?'Há fundamentos importantes para reconstruir durante o percurso.':'Vale fortalecer a leitura histórica antes de acelerar.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O diagnóstico mostra onde concentrar atenção; não é uma nota final sobre o que você é capaz de aprender.</p></div>${unique.length?`<div class="review-panel"><h3>Revisar o que preciso</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento antes de avançar.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();