(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Orientação',prompt:'Se o Sol nasce aproximadamente no leste, para que lado fica o oeste?',options:['No mesmo lado','No lado oposto','Sempre ao norte','Ainda não sei'],answer:1},
    {area:'Escala cartográfica',prompt:'Qual mapa costuma mostrar mais detalhes de ruas e quarteirões?',options:['Um mapa do Brasil inteiro','Um mapa de um bairro','Um mapa-múndi','Ainda não sei'],answer:1},
    {area:'Paisagem',prompt:'Qual afirmação descreve melhor uma paisagem geográfica?',options:['É apenas aquilo que é natural','É o conjunto de formas visíveis e perceptíveis de um espaço, incluindo marcas naturais e sociais','É somente uma fotografia bonita','Ainda não sei'],answer:1},
    {area:'Lugar',prompt:'Em Geografia, o conceito de lugar ajuda principalmente a compreender:',options:['Relações vividas, pertencimento e experiências ligadas a um espaço','Somente fronteiras internacionais','Apenas coordenadas matemáticas','Ainda não sei'],answer:0},
    {area:'Território e poder',prompt:'Uma área controlada, usada ou disputada por diferentes grupos envolve especialmente qual ideia?',options:['Território','Latitude','Clima','Ainda não sei'],answer:0},
    {area:'Escalas geográficas',prompt:'Uma enchente em um bairro pode estar ligada também a decisões municipais e a mudanças climáticas mais amplas?',options:['Não, fenômenos locais nunca se relacionam com outras escalas','Sim, problemas podem combinar processos locais, regionais e globais','Só quando aparece num mapa','Ainda não sei'],answer:1},
    {area:'Fluxos',prompt:'Rodovias, redes digitais, deslocamentos de pessoas e circulação de mercadorias ajudam a estudar:',options:['Fluxos e conexões entre lugares','Somente relevo','Somente vegetação','Ainda não sei'],answer:0},
    {area:'Sociedade e natureza',prompt:'Quando uma área verde é substituída por ruas, prédios e redes de infraestrutura, o que ocorreu?',options:['Uma transformação do espaço pela ação social','A natureza deixou de existir em todo o planeta','Nada mudou geograficamente','Ainda não sei'],answer:0},
    {area:'Leitura de dados',prompt:'Um mapa temático mostra maior concentração de um fenômeno em determinada área. Qual atitude é mais cuidadosa?',options:['Perguntar o que foi medido, em que data, com qual fonte e qual escala','Concluir imediatamente a causa','Ignorar legenda e fonte','Ainda não sei'],answer:0},
    {area:'Vulnerabilidade',prompt:'Duas chuvas de mesma intensidade atingem bairros diferentes. Um sofre muito mais danos. Isso pode estar relacionado a:',options:['Infraestrutura, ocupação, renda, relevo e acesso a serviços','Somente ao nome do bairro','Apenas à distância do centro','Ainda não sei'],answer:0},
    {area:'Concepção inicial: Geografia',prompt:'Geografia é principalmente decorar capitais, rios e nomes de lugares?',options:['Sim','Não; envolve explicar relações espaciais, sociedade, natureza, redes, poder e escalas','Somente em provas','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: mapa',prompt:'Um mapa é uma cópia neutra e completa da realidade?',options:['Sim, todo mapa mostra tudo','Não; todo mapa seleciona informações conforme objetivo, escala, fonte e linguagem','Só mapas digitais fazem escolhas','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Orientação':'Retome pontos cardeais e formas básicas de localização.',
    'Escala cartográfica':'Reforce a ideia de que escala relaciona o tamanho representado ao espaço real e influencia o nível de detalhe.',
    'Paisagem':'Observe paisagem como conjunto de marcas naturais e sociais perceptíveis, sempre em transformação.',
    'Lugar':'Relacione espaço vivido, experiência, identidade e pertencimento.',
    'Território e poder':'Procure quem controla, usa, regula ou disputa uma área.',
    'Escalas geográficas':'Treine conectar fenômenos locais, regionais, nacionais e globais sem misturá-los.',
    'Fluxos':'Observe circulação de pessoas, mercadorias, informações, capitais e energia entre lugares.',
    'Sociedade e natureza':'Reforce que o espaço geográfico é produzido pela interação entre processos naturais e ações sociais.',
    'Leitura de dados':'Leia título, legenda, fonte, data, unidade e escala antes de tirar conclusões.',
    'Vulnerabilidade':'Diferencie a existência de uma ameaça das condições sociais e territoriais que aumentam ou reduzem seus impactos.'
  };

  function markup(q,index) {
    const name = `geoDiag${index}`;
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
      technical:'Diagnóstico • orientação • paisagem • território • escala • dados • sociedade e natureza',
      title:'Como você já lê o espaço onde vive?',
      objective:'<strong>Objetivo:</strong> identificar conhecimentos prévios sobre localização, paisagem, lugar, território, escalas, fluxos, dados e relações sociedade-natureza antes de avançar.',
      html:`
        <div class="hero-box"><strong class="card-title">Este diagnóstico não vale nota.</strong><p>Responda sem pesquisar. Marcar <em>Ainda não sei</em> é melhor do que transformar dúvida em chute. O resultado serve para indicar o que merece mais atenção durante o percurso.</p></div>
        <div class="diagnostic-intro"><div class="mini-card"><strong>Geografia começa olhando relações</strong><p>Não queremos testar uma lista de capitais. Queremos perceber como você localiza, compara, interpreta dados e explica transformações do espaço.</p></div><div class="mini-card"><strong>Duas questões não contam pontos</strong><p>Elas registram ideias iniciais sobre o que é Geografia e sobre como mapas representam a realidade.</p></div></div>
        <section id="geoDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkGeoDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetGeoDiagnostic" type="button">Refazer</button></div><div id="geoDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkGeoDiagnostic',root);
    const reset = $('#resetGeoDiagnostic',root);
    const result = $('#geoDiagnosticResult',root);

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
      const message=score>=9?'Base muito consistente.':score>=7?'Boa base; há poucos pontos a reforçar.':score>=5?'Há fundamentos importantes para reconstruir durante o percurso.':'Vale fortalecer a leitura espacial antes de acelerar.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O diagnóstico mostra onde concentrar atenção; não é uma nota final sobre sua capacidade de aprender Geografia.</p></div>${unique.length?`<div class="review-panel"><h3>Revisar o que preciso</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento antes de avançar.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();
