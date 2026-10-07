(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Atividade e exercício',prompt:'Qual situação é melhor descrita como exercício físico?',options:['Subir uma escada porque o elevador está ocupado','Fazer uma caminhada planejada de 20 minutos com intenção de se exercitar','Levantar para buscar água','Ainda não sei'],answer:1},
    {area:'Intensidade',prompt:'Duas pessoas caminham na mesma velocidade, mas uma relata esforço 2/10 e outra 6/10. O que isso mostra?',options:['A intensidade percebida pode variar entre pessoas e situações','Uma das duas está necessariamente mentindo','Velocidade define sozinha o esforço de qualquer pessoa','Ainda não sei'],answer:0},
    {area:'Aquecimento',prompt:'Antes de uma prática mais intensa, qual ideia é mais adequada?',options:['Começar progressivamente, preparando movimentos e intensidade para a tarefa','Fazer sempre alongamentos máximos e dolorosos','Começar já no esforço máximo para economizar tempo','Ainda não sei'],answer:0},
    {area:'Segurança',prompt:'Durante uma atividade aparece dor forte, tontura ou falta de ar incomum. Qual é a atitude mais responsável?',options:['Parar a atividade e avisar o professor ou responsável','Continuar para não parecer fraco','Aumentar a intensidade para ver se passa','Ainda não sei'],answer:0},
    {area:'Jogos',prompt:'Num jogo, mudar uma regra pode alterar estratégias e participação?',options:['Sim; regras organizam possibilidades de ação e relação entre jogadores','Não; regra não interfere no modo de jogar','Só interfere no placar final','Ainda não sei'],answer:0},
    {area:'Esporte',prompt:'Aprender um esporte significa apenas jogar uma partida completa?',options:['Não; fundamentos, decisões, regras, espaço e situações reduzidas também fazem parte da aprendizagem','Sim; qualquer treino antes do jogo é perda de tempo','Só é preciso decorar as regras','Ainda não sei'],answer:0},
    {area:'Capacidades físicas',prompt:'Força, resistência, mobilidade, equilíbrio e coordenação são:',options:['Capacidades diferentes que podem participar de várias práticas corporais','Nomes diferentes para a mesma coisa','Características que só atletas profissionais precisam desenvolver','Ainda não sei'],answer:0},
    {area:'Inclusão',prompt:'Uma prática corporal pode ser adaptada quando alguém precisa realizar o movimento sentado ou com menor deslocamento?',options:['Sim; adaptar regras, espaço, materiais e formas de participação pode preservar o objetivo da atividade','Não; qualquer adaptação deixa de ser Educação Física','Só se a pessoa não participar do grupo','Ainda não sei'],answer:0},
    {area:'Corpo e mídia',prompt:'Uma postagem promete “o corpo perfeito em 15 dias”. Qual atitude é mais crítica?',options:['Questionar fonte, evidências, interesses comerciais, riscos e padrões de corpo envolvidos','Aceitar porque muitas pessoas compartilharam','Concluir que toda atividade física é inútil','Ainda não sei'],answer:0},
    {area:'Recuperação',prompt:'Depois de um esforço, perceber respiração e sensação de esforço diminuindo gradualmente ajuda a observar:',options:['O processo de recuperação do organismo após a atividade','Que todo cansaço significa lesão','Que a atividade não produziu nenhum efeito','Ainda não sei'],answer:0},
    {area:'Relação com a prática',prompt:'Quando você pensa em Educação Física, qual frase mais se aproxima da sua experiência?',options:['Gosto de várias práticas','Gosto de algumas e evito outras','Quase nunca me sinto à vontade','Ainda estou descobrindo'],answer:3,scored:false},
    {area:'Preferências',prompt:'Qual campo você teria mais curiosidade de experimentar melhor?',options:['Jogos e esportes','Força, mobilidade e condicionamento','Dança, lutas ou aventura','Ainda não sei'],answer:3,scored:false}
  ];

  const reviews = {
    'Atividade e exercício':'Diferencie movimento cotidiano de exercício planejado e perceba que ambos podem contribuir para uma vida mais ativa.',
    'Intensidade':'Aprenda a observar esforço por sinais como fala, respiração e percepção subjetiva, sem depender apenas de velocidade ou comparação.',
    'Aquecimento':'Retome a ideia de progressão: preparar corpo e movimentos de acordo com a tarefa que virá.',
    'Segurança':'Prática responsável inclui reconhecer sinais de alerta e respeitar limites e orientações da escola.',
    'Jogos':'Regras criam possibilidades, estratégias, cooperação, conflito e formas diferentes de participação.',
    'Esporte':'Fundamento e tomada de decisão precisam aparecer antes e durante o jogo completo.',
    'Capacidades físicas':'Força, resistência, mobilidade, equilíbrio e coordenação têm funções diferentes e podem ser desenvolvidas progressivamente.',
    'Inclusão':'Uma prática pode manter seu objetivo mesmo com adaptações de espaço, regras, materiais e movimentos.',
    'Corpo e mídia':'Promessas sobre corpo e saúde precisam ser analisadas com evidências, contexto e atenção a interesses e estereótipos.',
    'Recuperação':'Observar como seu corpo retorna gradualmente a um estado mais confortável ajuda a compreender resposta ao esforço.'
  };

  function markup(q,index) {
    const name = `efDiag${index}`;
    const unscored = q.scored === false;
    return `<div class="quiz-item${unscored?' is-unscored':''}" data-area="${q.area}" data-answer="${q.answer}" data-scored="${unscored?'false':'true'}">
      ${unscored?'<span class="question-tag">Experiência pessoal • não vale ponto</span>':''}
      <p>${index+1}. ${q.prompt}</p>
      ${q.options.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function showDiagnostic() {
    MBB.showLesson({
      unit:'Antes de começar',
      technical:'movimento • esforço • segurança • jogos • esporte • capacidades físicas • inclusão • saúde • recuperação',
      title:'O que você já sabe sobre mover-se com consciência?',
      objective:'<strong>Objetivo:</strong> identificar como você já interpreta esforço, prática corporal, segurança, esporte e saúde antes de iniciar as experiências da 1ª série.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Diagnóstico sem teste físico</span>
          <div class="hero-box">
            <strong class="card-title">Aqui ninguém precisa correr mais rápido, saltar mais longe ou fazer mais repetições para “provar” que sabe Educação Física.</strong>
            <p>Este diagnóstico investiga decisões: como você entende esforço, segurança, jogos, esporte, corpo e recuperação. Condicionamento físico, habilidade esportiva e aparência <strong>não são usados como nota</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> você consegue tomar boas decisões antes, durante e depois de uma prática corporal?</p>
          </div>
        </section>

        <div class="diagnostic-intro">
          <div class="mini-card"><strong>Não é seleção de atletas</strong><p>O módulo parte do princípio de que qualquer estudante pode aprender sobre cultura corporal, mesmo com experiências, preferências e possibilidades de movimento diferentes.</p></div>
          <div class="mini-card"><strong>Não pedimos dados de saúde</strong><p>Você não precisa informar peso, medidas, diagnóstico, frequência cardíaca ou histórico médico para realizar este diagnóstico.</p></div>
        </div>

        <div class="source-box"><strong class="card-title">O que o CPS espera na 1ª série</strong><p>O Plano de Curso 1062 inclui Brincadeiras e Jogos, Esporte, Dança, Ginástica, Luta, Práticas Corporais de Aventura e Corpo, Movimento e Saúde. O percurso abaixo começa por aquilo que atravessa todas essas unidades: perceber o próprio movimento e tomar decisões responsáveis.</p><p><a href="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/77/2025/12/Desenvolvimento-de-Sistemas-2026-MTec-1062-1a-serie.pdf" target="_blank" rel="noopener noreferrer">Fonte: Centro Paula Souza • Plano de Curso 1062 • 2026</a></p></div>

        <section id="efDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkEfDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetEfDiagnostic" type="button">Refazer</button></div><div id="efDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init
    });
  }

  function init(root) {
    const check = $('#checkEfDiagnostic',root);
    const reset = $('#resetEfDiagnostic',root);
    const result = $('#efDiagnosticResult',root);

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
      const message=score>=9?'Você já toma muitas decisões consistentes sobre prática corporal.':score>=7?'Boa base para transformar conhecimento em experiência.':score>=5?'Há uma base importante; a prática guiada vai ajudar a conectar conceitos e sensações.':'Ótimo ponto de partida para aprender observando o próprio movimento, sem comparação com colegas.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>Este resultado não mede condicionamento, talento esportivo nem valor pessoal. Ele apenas indica conceitos que merecem ser observados nas próximas práticas.</p></div>${unique.length?`<div class="review-panel"><h3>O que merece atenção</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento nos próximos capítulos.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão conceitual obrigatória identificada.</strong><p>Agora a questão muda: você consegue perceber essas ideias acontecendo no próprio corpo e nas práticas do grupo?</p></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      document.getElementById('lessonContent')?.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();
