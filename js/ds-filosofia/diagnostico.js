(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Argumento',prompt:'Qual opção apresenta um argumento, e não apenas uma opinião?',options:['“Eu gosto mais desta ideia.”','“Esta conclusão é mais plausível porque se apoia nestas duas evidências verificáveis.”','“Todo mundo pensa assim.”','Ainda não sei'],answer:1},
    {area:'Razões e conclusão',prompt:'Em um argumento, para que servem as razões ou premissas?',options:['Para apoiar uma conclusão','Para substituir qualquer evidência','Para impedir perguntas','Ainda não sei'],answer:0},
    {area:'Coerência',prompt:'Uma pessoa afirma ao mesmo tempo “nenhuma regra deve ter exceção” e “esta regra precisa ter exceção”. O que devemos fazer primeiro?',options:['Verificar se há contradição ou se as frases usam sentidos diferentes','Aceitar as duas sem examinar','Escolher a frase de que mais gostamos','Ainda não sei'],answer:0},
    {area:'Contraexemplo',prompt:'Alguém diz: “Todos os estudantes aprendem melhor do mesmo jeito”. O que enfraqueceria essa afirmação universal?',options:['Um caso bem documentado de estudante que aprende melhor de outra maneira','Repetir a frase em voz mais alta','Trocar a palavra “todos” por uma cor','Ainda não sei'],answer:0},
    {area:'Fato e avaliação',prompt:'Qual frase é principalmente uma avaliação, e não uma descrição factual?',options:['“A reunião começou às 14h.”','“Esta música é bela.”','“O documento tem três páginas.”','Ainda não sei'],answer:1},
    {area:'Ciência e revisão',prompt:'Qual atitude combina melhor com investigação científica?',options:['Nunca rever uma crença já adotada','Rever uma conclusão quando novas evidências confiáveis a contradizem','Escolher primeiro a resposta preferida e procurar apenas dados favoráveis','Ainda não sei'],answer:1},
    {area:'Ética',prompt:'Se uma ação é permitida por lei, isso prova automaticamente que ela é moralmente correta em qualquer situação?',options:['Sim, legalidade e moralidade são exatamente a mesma coisa','Não; questões éticas podem exigir também examinar razões, consequências, deveres e princípios','Sim, desde que a maioria aprove','Ainda não sei'],answer:1},
    {area:'Liberdade e responsabilidade',prompt:'Qual relação é mais consistente entre liberdade e responsabilidade?',options:['Escolhas livres podem gerar consequências pelas quais precisamos responder','Ser livre significa nunca responder por escolhas','Responsabilidade só existe quando não houve escolha','Ainda não sei'],answer:0},
    {area:'Estética',prompt:'Duas pessoas discordam sobre uma obra de arte. Qual atitude filosófica é mais produtiva?',options:['Concluir que nenhuma delas pode apresentar razões','Comparar critérios, experiências e argumentos usados por cada uma','Decidir que a pessoa mais velha está automaticamente certa','Ainda não sei'],answer:1},
    {area:'Justiça e pluralismo',prompt:'Pessoas discordam sobre uma regra comum. Qual procedimento favorece uma análise racional?',options:['Comparar princípios, razões, consequências e possíveis objeções','Descobrir qual lado grita mais','Pressupor que discordância torna qualquer posição igualmente bem fundamentada','Ainda não sei'],answer:0},
    {area:'Concepção inicial: Filosofia',prompt:'Estudar Filosofia é principalmente decorar nomes e frases famosas de filósofos?',options:['Sim','Não; envolve também formular problemas, compreender argumentos, comparar respostas e justificar conclusões','Somente em provas','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: discordância',prompt:'Quando duas pessoas discordam, isso significa que todas as respostas possuem automaticamente a mesma qualidade?',options:['Sim, porque toda opinião vale exatamente o mesmo','Não; posições podem ser comparadas pela coerência, pelas razões e pelas evidências relevantes','Só quando o assunto é difícil','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Argumento':'Diferencie preferência pessoal de uma conclusão sustentada por razões.',
    'Razões e conclusão':'Treine identificar o que está sendo defendido e quais premissas tentam sustentar essa conclusão.',
    'Coerência':'Verifique se afirmações podem ser verdadeiras ao mesmo tempo e se os termos mantêm o mesmo sentido.',
    'Contraexemplo':'Afirmações universais podem ser testadas procurando casos que as contradigam.',
    'Fato e avaliação':'Separe descrições verificáveis de juízos de valor e reconheça quando uma frase mistura os dois.',
    'Ciência e revisão':'Uma investigação rigorosa precisa aceitar revisão diante de evidências melhores.',
    'Ética':'Questões morais pedem razões; legalidade, costume e preferência pessoal não resolvem tudo automaticamente.',
    'Liberdade e responsabilidade':'Escolhas, consequências e capacidade de responder por atos serão retomadas no percurso.',
    'Estética':'Discordância estética pode ser analisada por critérios, contexto e argumentos, sem exigir gosto idêntico.',
    'Justiça e pluralismo':'Compare posições por princípios, razões, efeitos e objeções, não por identidade partidária ou força retórica.'
  };

  function markup(q,index) {
    const name = `filoDiag${index}`;
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
      technical:'argumento • coerência • evidência • ciência • ética • liberdade • estética • justiça',
      title:'Como você analisa uma ideia antes de aceitá-la?',
      objective:'<strong>Objetivo:</strong> identificar conhecimentos prévios sobre argumentos, coerência, evidências, valores e tomada de posição antes de iniciar o percurso de Filosofia.',
      html:`
        <div class="hero-box">
          <strong class="card-title">Este diagnóstico não vale nota.</strong>
          <p>Responda sem pesquisar. Marcar <em>Ainda não sei</em> é melhor do que transformar dúvida em chute. Aqui não queremos descobrir “em que você acredita”, mas observar <strong>como você examina uma afirmação e justifica uma conclusão</strong>.</p>
        </div>
        <div class="diagnostic-intro">
          <div class="mini-card"><strong>Não é teste de opinião política</strong><p>As questões avaliam raciocínio, distinções conceituais e uso de razões. Nenhuma posição partidária é solicitada.</p></div>
          <div class="mini-card"><strong>Duas questões não contam pontos</strong><p>Elas registram ideias iniciais sobre o que é Filosofia e sobre como lidar com discordâncias.</p></div>
        </div>
        <section id="filoDiagnostic">
          ${questions.map(markup).join('')}
          <div class="quiz-actions">
            <button class="action-button primary" id="checkFiloDiagnostic" type="button">Conferir diagnóstico</button>
            <button class="action-button" id="resetFiloDiagnostic" type="button">Refazer</button>
          </div>
          <div id="filoDiagnosticResult" class="quiz-result" aria-live="polite"></div>
        </section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkFiloDiagnostic',root);
    const reset = $('#resetFiloDiagnostic',root);
    const result = $('#filoDiagnosticResult',root);

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
      const message=score>=9?'Base muito consistente para argumentação.':score>=7?'Boa base; há poucos pontos a reforçar.':score>=5?'Há fundamentos importantes para desenvolver durante o percurso.':'Vale fortalecer a análise de argumentos antes de acelerar.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O resultado orienta o estudo; não mede inteligência, maturidade ou “qualidade” das suas opiniões.</p></div>${unique.length?`<div class="review-panel"><h3>Revisar o que preciso</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento durante o percurso.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();
