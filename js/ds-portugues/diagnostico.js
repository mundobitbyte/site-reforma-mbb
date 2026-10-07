(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Contexto e propósito',prompt:'A mesma frase pode produzir sentidos diferentes dependendo de quem fala, para quem, onde e com qual objetivo?',options:['Não; palavras têm sempre um único sentido','Sim; contexto de produção e circulação participa da construção de sentidos','Só em textos literários','Ainda não sei'],answer:1},
    {area:'Leitura e estudo',prompt:'Ao estudar um texto difícil, qual procedimento tende a ajudar mais?',options:['Grifar tudo','Identificar objetivo da leitura, ideias principais, anotar e resumir','Ler apenas o título','Ainda não sei'],answer:1},
    {area:'Curadoria de fontes',prompt:'Você encontra três páginas com afirmações diferentes sobre o mesmo tema. Qual é a melhor primeira atitude?',options:['Escolher a que aparece primeiro','Comparar autoria, data, fonte, evidências e finalidade de cada publicação','Usar a que tem mais imagens','Ainda não sei'],answer:1},
    {area:'Notícia e enquadramento',prompt:'Dois veículos relatam o mesmo fato com títulos e recortes diferentes. Isso significa necessariamente que um deles inventou o acontecimento?',options:['Sim','Não; é preciso comparar fatos, fontes, seleção de dados e enquadramento antes de concluir','Títulos nunca influenciam leitura','Ainda não sei'],answer:1},
    {area:'Checagem',prompt:'Uma foto viral é apresentada como sendo de um acontecimento de hoje. O que é importante verificar?',options:['Somente se a imagem parece verdadeira','Fonte, autoria, data, local, publicação original e comparação com outras fontes','A quantidade de curtidas','Ainda não sei'],answer:1},
    {area:'Persuasão',prompt:'Um anúncio usa música, imagem, depoimento e uma frase de impacto. Esses elementos podem:',options:['Produzir efeitos de sentido e persuasão em conjunto','Ser ignorados porque só as palavras importam','Provar automaticamente que o produto é bom','Ainda não sei'],answer:0},
    {area:'Variação linguística',prompt:'Uma pessoa usa uma variedade regional da língua em conversa informal. Isso significa que ela “não sabe português”?',options:['Sim, porque só existe uma forma correta de falar','Não; a língua varia, e adequação ao contexto é diferente de dizer que uma variedade é inferior','Só se ela escrever do mesmo jeito','Ainda não sei'],answer:1},
    {area:'Norma-padrão',prompt:'Quando a norma-padrão é especialmente relevante?',options:['Em qualquer situação, inclusive conversa espontânea entre amigos','Em contextos formais que a exigem, sem transformar outras variedades em erro moral ou intelectual','Nunca','Ainda não sei'],answer:1},
    {area:'Literatura',prompt:'Para compreender melhor uma obra literária, qual procedimento é mais adequado?',options:['Considerar texto, linguagem, contexto de produção, circulação e relações com outras obras','Usar somente a biografia do autor','Procurar uma única “mensagem correta” escondida','Ainda não sei'],answer:0},
    {area:'Retextualização',prompt:'Transformar uma entrevista oral em uma notícia escrita exige:',options:['Copiar palavra por palavra sem adaptação','Reorganizar informações conforme o novo gênero, finalidade e público, preservando o sentido essencial','Inventar informações para o texto ficar melhor','Ainda não sei'],answer:1},
    {area:'Concepção inicial: Português',prompt:'Estudar Língua Portuguesa no Ensino Médio é principalmente decorar regras gramaticais?',options:['Sim','Não; envolve leitura, produção, oralidade, literatura, mídia, pesquisa e análise da língua em uso','Somente para vestibular','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: neutralidade da linguagem',prompt:'Todo texto apenas “transmite informação”, sem escolhas de linguagem, recorte ou ponto de vista?',options:['Sim','Não; escolhas linguísticas e multissemióticas podem orientar sentidos e precisam ser analisadas','Só propagandas fazem escolhas','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Contexto e propósito':'Observe quem produz o texto, para quem, em qual situação, com qual objetivo e onde ele circula.',
    'Leitura e estudo':'Treine leitura com propósito: formular perguntas, localizar ideias centrais, anotar, sintetizar e revisar.',
    'Curadoria de fontes':'Compare autoria, instituição, data, evidências, referências e finalidade antes de selecionar uma fonte.',
    'Notícia e enquadramento':'Diferencie o acontecimento relatado das escolhas de título, destaque, fonte e recorte editorial.',
    'Checagem':'Verifique origem, data, local, autoria e contexto; compare com fontes independentes antes de compartilhar.',
    'Persuasão':'Analise como palavras, imagens, sons, enquadramento e recursos gráficos trabalham juntos para convencer.',
    'Variação linguística':'Reforce que a língua varia historicamente, regionalmente, socialmente e conforme a situação de uso.',
    'Norma-padrão':'Aprenda adequação: a norma-padrão é uma variedade de referência importante em determinados contextos formais.',
    'Literatura':'Leia a obra antes de procurar explicações prontas; relacione linguagem, forma, contexto, tradição e experiência de leitura.',
    'Retextualização':'Ao mudar de gênero ou mídia, preserve informações essenciais e adapte organização, linguagem e recursos ao novo contexto.'
  };

  function markup(q,index) {
    const name = `ptDiag${index}`;
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
      technical:'Diagnóstico • leitura • fontes • mídia • persuasão • variação linguística • literatura • produção textual',
      title:'Como você já lê, interpreta e produz sentidos?',
      objective:'<strong>Objetivo:</strong> identificar conhecimentos prévios sobre leitura, estudo, curadoria de fontes, mídia, checagem, persuasão, variação linguística, literatura e retextualização antes de avançar.',
      html:`
        <div class="hero-box"><strong class="card-title">Este diagnóstico não vale nota.</strong><p>Responda sem pesquisar. Marcar <em>Ainda não sei</em> é melhor do que transformar dúvida em chute. O resultado serve para mostrar quais habilidades merecem mais atenção durante o percurso.</p></div>
        <div class="diagnostic-intro"><div class="mini-card"><strong>Português é língua em uso</strong><p>Não vamos medir apenas regras gramaticais. O diagnóstico observa como você lê situações, fontes, notícias, argumentos, variedades da língua, literatura e transformação de textos.</p></div><div class="mini-card"><strong>Duas questões não contam pontos</strong><p>Elas registram ideias iniciais sobre o que significa estudar Língua Portuguesa e sobre como escolhas de linguagem constroem sentidos.</p></div></div>
        <section id="ptDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkPtDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetPtDiagnostic" type="button">Refazer</button></div><div id="ptDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkPtDiagnostic',root);
    const reset = $('#resetPtDiagnostic',root);
    const result = $('#ptDiagnosticResult',root);

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
      const message=score>=9?'Base muito consistente.':score>=7?'Boa base; há poucos pontos a reforçar.':score>=5?'Há habilidades importantes para reconstruir durante o percurso.':'Vale fortalecer leitura e análise de linguagem antes de acelerar.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O diagnóstico indica onde concentrar atenção; não é uma nota final sobre sua capacidade de aprender Língua Portuguesa.</p></div>${unique.length?`<div class="review-panel"><h3>Revisar o que preciso</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento antes de avançar.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();
