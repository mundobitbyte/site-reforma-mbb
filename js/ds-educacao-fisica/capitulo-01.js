(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  let timerId = null;
  let timerRemaining = 30;
  let timerInitial = 30;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function renderTimer(root) {
    const display = $('#efTimerDisplay', root);
    if (display) display.textContent = formatTime(timerRemaining);
  }

  function setPhase(root, seconds, label) {
    stopTimer();
    timerInitial = seconds;
    timerRemaining = seconds;
    renderTimer(root);
    const phase = $('#efTimerPhase', root);
    if (phase) phase.innerHTML = `<strong>${label}</strong><br><small>Quando estiver pronto, pressione iniciar.</small>`;
  }

  function startTimer(root) {
    if (timerId || timerRemaining <= 0) return;
    const phase = $('#efTimerPhase', root);
    if (phase) phase.querySelector('small')?.replaceWith(document.createTextNode(' Tempo em andamento.'));
    timerId = setInterval(() => {
      timerRemaining -= 1;
      renderTimer(root);
      if (timerRemaining <= 0) {
        stopTimer();
        const phaseNow = $('#efTimerPhase', root);
        if (phaseNow) phaseNow.innerHTML += '<br><strong>Tempo concluído.</strong> Registre como você se sente antes de avançar.';
      }
    }, 1000);
  }

  function resetTimer(root) {
    stopTimer();
    timerRemaining = timerInitial;
    renderTimer(root);
  }

  function rpeDescription(value) {
    const v = Number(value);
    if (v === 0) return '0 — repouso / nenhum esforço percebido';
    if (v <= 2) return `${v} — muito leve`; 
    if (v <= 4) return `${v} — leve a moderado`;
    if (v <= 6) return `${v} — moderado a difícil`;
    if (v <= 8) return `${v} — muito difícil`;
    return `${v} — esforço muito alto; não é objetivo desta experiência`;
  }

  function updateRpe(root) {
    $$('[data-rpe]', root).forEach(input => {
      const target = root.querySelector(`[data-rpe-readout="${input.id}"]`);
      if (target) target.textContent = rpeDescription(input.value);
    });
  }

  function updateRecoveryChart(root) {
    const ids = ['rpeBefore','rpeEasy','rpeModerate','rpeRecovery'];
    const values = ids.map(id => Number($(`#${id}`, root)?.value || 0));
    const svg = $('#recoveryChart', root);
    const note = $('#recoveryNote', root);
    if (!svg || !note) return;

    const xs = [70,230,390,550];
    const y = value => 205 - value * 16;
    const points = values.map((value,index) => `${xs[index]},${y(value)}`).join(' ');
    const labels = ['Antes','Leve','Moderado','Recuperação'];
    const circles = values.map((value,index) => `<circle cx="${xs[index]}" cy="${y(value)}" r="7" fill="#1f6f5c"/><text x="${xs[index]}" y="${y(value)-13}" text-anchor="middle" font-size="12" font-weight="800" fill="#174c40">${value}</text><text x="${xs[index]}" y="228" text-anchor="middle" font-size="11" fill="#66736e">${labels[index]}</text>`).join('');

    svg.innerHTML = `
      <rect width="620" height="245" rx="14" fill="#f7fbfa"/>
      <line x1="50" y1="205" x2="580" y2="205" stroke="#cbdad4"/>
      <line x1="50" y1="45" x2="50" y2="205" stroke="#cbdad4"/>
      <text x="18" y="52" font-size="10" fill="#66736e">10</text>
      <text x="24" y="208" font-size="10" fill="#66736e">0</text>
      <polyline points="${points}" fill="none" stroke="#d97706" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      ${circles}`;

    const peak = Math.max(...values);
    const recovery = values[3];
    if (values.every(v => v === 0)) {
      note.innerHTML = '<strong>Seu gráfico ainda está vazio.</strong> Depois da experiência, ajuste os quatro controles para registrar como o esforço mudou.';
    } else if (recovery < peak) {
      note.innerHTML = `<strong>Observe a tendência:</strong> seu maior valor registrado foi ${peak}/10 e, na etapa de recuperação, você marcou ${recovery}/10. O importante aqui é perceber a mudança ao longo do tempo, não comparar seus números com os de outra pessoa.`;
    } else {
      note.innerHTML = '<strong>Seu registro não mostrou queda após a recuperação.</strong> Isso pode acontecer por vários motivos. Não force uma conclusão: registre o que ocorreu e converse com o professor se a sensação continuar desconfortável.';
    }
  }

  function updateDecisionLab(root) {
    const situation = $('#dailySituation', root);
    const out = $('#dailyDecision', root);
    if (!situation || !out) return;
    const cases = {
      sitting:'Depois de muito tempo sentado, o objetivo pode ser simplesmente interromper a imobilidade: levantar-se, caminhar um pouco ou fazer movimentos confortáveis, sem transformar a pausa em teste de desempenho.',
      before:'Antes de uma prática mais exigente, vale começar de forma progressiva e aproximar gradualmente os movimentos daquilo que será feito depois.',
      after:'Depois de esforço mais elevado, reduza a intensidade gradualmente e observe respiração, fala e sensação de esforço durante a recuperação.',
      tired:'Quando o corpo está muito cansado ou desconfortável, a decisão mais madura pode ser reduzir, adaptar ou interromper a atividade em vez de “compensar” com mais esforço.'
    };
    out.innerHTML = `<strong>Decisão:</strong><p>${cases[situation.value]}</p>`;
  }

  function init(root) {
    $$('[data-rpe]', root).forEach(input => {
      input.addEventListener('input', () => {
        updateRpe(root);
        updateRecoveryChart(root);
      });
    });
    updateRpe(root);
    updateRecoveryChart(root);

    $$('[data-timer-phase]', root).forEach(button => {
      button.addEventListener('click', () => setPhase(root, Number(button.dataset.seconds), button.dataset.timerPhase));
    });
    $('#efTimerStart', root)?.addEventListener('click', () => startTimer(root));
    $('#efTimerPause', root)?.addEventListener('click', stopTimer);
    $('#efTimerReset', root)?.addEventListener('click', () => resetTimer(root));
    setPhase(root, 30, 'Observação inicial — 30 segundos');

    $('#dailySituation', root)?.addEventListener('change', () => updateDecisionLab(root));
    updateDecisionLab(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Corpo, movimento e saúde',
      technical:'atividade física • exercício físico • intensidade • percepção de esforço • teste da fala • aquecimento • recuperação • autonomia',
      title:'01 — Movimento, esforço e recuperação',
      objective:'<strong>Objetivo:</strong> experimentar diferentes níveis de movimento, perceber como o corpo responde ao esforço e usar sinais simples — fala, respiração e percepção subjetiva — para tomar decisões mais conscientes antes, durante e depois da prática.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Primeira experiência corporal</span>
          <div class="hero-box">
            <strong class="card-title">Você passa parte da manhã sentado em aula. No intervalo, sobe uma escada rápido porque está atrasado.</strong>
            <p>Em poucos segundos a respiração muda, o coração parece bater mais forte e falar uma frase longa pode ficar menos confortável. Depois de algum tempo parado ou caminhando devagar, essas sensações tendem a diminuir.</p>
            <p>Nada disso exige ser atleta para perceber. Educação Física começa quando você aprende a <strong>observar o movimento acontecendo no próprio corpo</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como saber se uma atividade está leve, moderada ou pesada para você — sem transformar a aula numa competição?</p>
          </div>
        </section>

        <div class="ef-tags"><span>sentir</span><span>mover</span><span>comparar</span><span>registrar</span><span>recuperar</span><span>decidir</span></div>

        <h3>1. Movimento cotidiano e exercício não são exatamente a mesma coisa</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Atividade física</strong><p>Movimento corporal que aumenta o gasto de energia em relação ao repouso: caminhar até a sala, subir escadas, brincar, dançar, carregar materiais.</p></div>
          <div class="mini-card"><strong>Exercício físico</strong><p>É uma forma planejada e estruturada de atividade física, realizada com um objetivo: praticar uma habilidade, melhorar uma capacidade, treinar ou cuidar da saúde.</p></div>
        </div>

        ${choice('1','Cotidiano × planejado','Uma pessoa caminha 15 minutos porque decidiu fazer isso todos os dias como prática planejada. O exemplo se aproxima mais de:',[
          ['a','Exercício físico, porque existe planejamento e intenção'],
          ['b','Ausência de atividade física'],
          ['c','Esporte competitivo obrigatoriamente']
        ],'a','Isso. A mesma ação corporal pode assumir sentidos diferentes conforme contexto, planejamento e finalidade.','Não olhe apenas para o movimento; observe também por que, como e com qual objetivo ele está sendo realizado.')}

        <h3>2. Intensidade não é “quem é mais rápido”</h3>
        <p>Uma mesma caminhada pode parecer muito leve para uma pessoa e exigente para outra. Temperatura, terreno, experiência, sono, ritmo e várias condições do momento podem alterar a sensação.</p>

        <div class="rpe-box">
          <strong class="card-title">Escala simples de percepção de esforço — 0 a 10</strong>
          <p>Mova o controle. A escala é subjetiva: ela registra <strong>como o esforço parece para você naquele momento</strong>. Não é diagnóstico médico nem nota.</p>
          <input id="rpeExplore" data-rpe type="range" min="0" max="10" value="2" aria-label="Percepção de esforço de zero a dez">
          <div class="rpe-scale"><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span></div>
          <div class="rpe-readout" data-rpe-readout="rpeExplore"></div>
        </div>

        <div class="note-box"><strong>Para esta experiência, não busque esforço máximo.</strong><p>Nosso objetivo é perceber diferenças entre repouso, movimento confortável, movimento um pouco mais exigente e recuperação. Mais intenso não significa “melhor”.</p></div>

        ${choice('2','Percepção','Dois colegas fazem a mesma atividade e escolhem valores diferentes na escala de esforço. Isso significa que:',[
          ['a','A percepção de esforço pode ser diferente e ainda assim ambos estarem registrando honestamente a própria experiência'],
          ['b','O menor número sempre está errado'],
          ['c','A escala só funciona se todos escolherem o mesmo valor']
        ],'a','Correto. O registro serve para comparar momentos da própria prática, não para criar um ranking da turma.','A escala é subjetiva. Ela fica mais útil quando você compara seu próprio esforço em situações diferentes.')}

        <h3>3. Outro instrumento simples: o teste da fala</h3>
        <div class="body-signal-grid">
          <div class="body-signal"><strong>Movimento leve</strong><p>Falar costuma permanecer confortável.</p></div>
          <div class="body-signal"><strong>Movimento moderado</strong><p>Você ainda consegue falar, mas pode perceber a respiração mais presente.</p></div>
          <div class="body-signal"><strong>Esforço alto</strong><p>Falar frases longas pode ficar bem mais difícil.</p></div>
          <div class="body-signal"><strong>Importante</strong><p>O teste da fala é uma pista prática, não um diagnóstico e não substitui orientação profissional quando necessária.</p></div>
        </div>

        <h3>4. Antes de se mover: escolha uma versão segura</h3>
        <div class="safety-box">
          <strong>Regra de segurança para a experiência</strong>
          <p>Use um espaço livre de obstáculos, calçado e condições adequadas ao local e movimentos confortáveis. Não faça saltos, sprints nem esforço máximo. Se houver dor forte, tontura, sensação de desmaio, desconforto no peito ou falta de ar incomum, <strong>interrompa a atividade e avise o professor ou responsável</strong>. Restrições individuais e orientações da escola devem ser respeitadas.</p>
        </div>

        <div class="move-options">
          <div class="move-option"><strong>Opção A — caminhada</strong><small>Caminhe pelo espaço em ritmo confortável e depois um pouco mais ativo, sem correr.</small></div>
          <div class="move-option"><strong>Opção B — marcha no lugar</strong><small>Alterne os pés sem deslocamento. Aumente discretamente o ritmo na segunda etapa.</small></div>
          <div class="move-option"><strong>Opção C — versão sentada</strong><small>Alterne braços e pernas dentro de uma amplitude confortável, aumentando um pouco o ritmo na segunda etapa.</small></div>
        </div>

        <h3>5. Vamos experimentar de verdade</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência: quatro momentos, um mesmo corpo</strong>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Observar</strong><p>30 s parado ou confortável. Perceba respiração, fala e tensão corporal.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Mover leve</strong><p>60 s em uma das opções. Deve parecer confortável.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>Subir um pouco</strong><p>60 s um pouco mais ativo, sem buscar máximo. Você controla o ritmo.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Recuperar</strong><p>60 s reduzindo ou parando conforme orientação. Observe a mudança.</p></div>
          </div>

          <div class="timer-panel">
            <div class="timer-display" id="efTimerDisplay">00:30</div>
            <div id="efTimerPhase"><strong>Observação inicial — 30 segundos</strong></div>
            <div class="timer-controls">
              <button type="button" data-timer-phase="Observação inicial — 30 segundos" data-seconds="30">Preparar 30 s</button>
              <button type="button" data-timer-phase="Movimento leve — 60 segundos" data-seconds="60">Leve 60 s</button>
              <button type="button" data-timer-phase="Movimento um pouco mais ativo — 60 segundos" data-seconds="60">Moderado 60 s</button>
              <button type="button" data-timer-phase="Recuperação — 60 segundos" data-seconds="60">Recuperar 60 s</button>
              <button type="button" id="efTimerStart">Iniciar</button>
              <button type="button" id="efTimerPause">Pausar</button>
              <button type="button" id="efTimerReset">Reiniciar</button>
            </div>
          </div>
        </div>

        <h3>6. Agora transforme sensação em registro</h3>
        <p>Depois da prática, marque aproximadamente como você percebeu o esforço em cada momento. Não tente “acertar” um número.</p>
        <div class="comparison-grid">
          <label class="rpe-box"><strong>Antes</strong><input id="rpeBefore" data-rpe type="range" min="0" max="10" value="0"><div class="rpe-readout" data-rpe-readout="rpeBefore"></div></label>
          <label class="rpe-box"><strong>Movimento leve</strong><input id="rpeEasy" data-rpe type="range" min="0" max="10" value="2"><div class="rpe-readout" data-rpe-readout="rpeEasy"></div></label>
          <label class="rpe-box"><strong>Um pouco mais ativo</strong><input id="rpeModerate" data-rpe type="range" min="0" max="10" value="4"><div class="rpe-readout" data-rpe-readout="rpeModerate"></div></label>
          <label class="rpe-box"><strong>Após recuperação</strong><input id="rpeRecovery" data-rpe type="range" min="0" max="10" value="1"><div class="rpe-readout" data-rpe-readout="rpeRecovery"></div></label>
        </div>
        <svg id="recoveryChart" class="recovery-chart" viewBox="0 0 620 245" role="img" aria-label="Gráfico da percepção de esforço nos quatro momentos da experiência"></svg>
        <div id="recoveryNote" class="field-note" aria-live="polite"></div>

        ${choice('3','Leitura do próprio registro','Qual uso faz mais sentido para esse gráfico?',[
          ['a','Comparar como o seu esforço mudou entre os quatro momentos'],
          ['b','Descobrir quem da turma é fisicamente superior'],
          ['c','Diagnosticar doenças apenas pelo valor da escala']
        ],'a','Exatamente. O registro ajuda a observar uma sequência de respostas no próprio corpo.','Nem escala subjetiva nem gráfico escolar devem ser usados para ranking ou diagnóstico médico.')}

        <h3>7. O que você pode ter percebido?</h3>
        <div class="body-signal-grid">
          <div class="body-signal"><strong>Respiração</strong><p>Pode ficar mais rápida ou profunda quando a demanda do movimento aumenta.</p></div>
          <div class="body-signal"><strong>Fala</strong><p>Pode passar de muito confortável para um pouco mais entrecortada conforme o esforço sobe.</p></div>
          <div class="body-signal"><strong>Músculos</strong><p>Você pode perceber mais tensão, trabalho ou fadiga local conforme o movimento exige mais.</p></div>
          <div class="body-signal"><strong>Recuperação</strong><p>Ao reduzir o esforço, muitos sinais tendem gradualmente a se aproximar de uma condição mais confortável.</p></div>
        </div>
        <div class="source-box"><strong class="card-title">O nome vem depois da experiência</strong><p>Respiração, circulação, músculos e sistema nervoso participam das respostas ao movimento. Neste momento não precisamos decorar fisiologia: precisamos perceber que <strong>o organismo ajusta seu funcionamento à demanda</strong> e que essas respostas mudam quando a intensidade muda.</p></div>

        <h3>8. Aquecimento não é uma cerimônia obrigatória</h3>
        <p>A ideia central é <strong>preparar progressivamente para a tarefa</strong>. Antes de um jogo, por exemplo, pode fazer mais sentido começar com deslocamentos, mudanças de direção e gestos semelhantes aos que aparecerão na prática do que realizar movimentos aleatórios sem relação com o que virá.</p>
        ${choice('4','Progressão','Qual aquecimento combina melhor com essa lógica?',[
          ['a','Começar com movimentos controlados e aproximar gradualmente intensidade e gestos da atividade principal'],
          ['b','Fazer sempre o mesmo ritual independentemente da atividade'],
          ['c','Começar diretamente no esforço máximo']
        ],'a','Isso. Aquecimento ganha sentido quando prepara progressivamente para a demanda que virá.','A palavra-chave é progressão, não sofrimento nem repetição automática de um ritual.')}

        <h3>9. Força, resistência, mobilidade, equilíbrio e coordenação não são a mesma coisa</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Força</strong><p>Capacidade de produzir tensão para empurrar, puxar, sustentar ou controlar movimentos.</p></div>
          <div class="mini-card"><strong>Resistência</strong><p>Capacidade de sustentar uma atividade ao longo do tempo em determinada intensidade.</p></div>
          <div class="mini-card"><strong>Mobilidade</strong><p>Possibilidade de movimentar articulações dentro de amplitudes funcionais para a tarefa.</p></div>
          <div class="mini-card"><strong>Equilíbrio</strong><p>Controle da posição corporal em situações estáticas ou em movimento.</p></div>
          <div class="mini-card"><strong>Coordenação</strong><p>Organização de movimentos no espaço e no tempo para realizar uma tarefa.</p></div>
          <div class="mini-card"><strong>Contexto</strong><p>Uma mesma prática pode combinar várias capacidades em proporções diferentes.</p></div>
        </div>

        <h3>10. Leve para um dia comum</h3>
        <div class="studio-box">
          <strong class="card-title">Decision Lab — qual é a necessidade deste momento?</strong>
          <label><strong>Situação</strong><select id="dailySituation" style="width:100%;margin-top:8px"><option value="sitting">Passei muito tempo sentado</option><option value="before">Vou iniciar uma prática mais exigente</option><option value="after">Acabei de fazer um esforço maior</option><option value="tired">Estou muito cansado ou desconfortável</option></select></label>
          <div id="dailyDecision" class="field-note" aria-live="polite"></div>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Aplicação: uma pausa de movimento que faça sentido</strong>
          <p>Em dupla, criem uma pausa de 4 a 6 minutos para um dia com muitas horas sentado. Ela deve ter:</p>
          <ol>
            <li>um início confortável;</li>
            <li>movimentos que possam ser feitos com pouco espaço;</li>
            <li>uma opção em pé e uma adaptação sentada;</li>
            <li>intensidade que permita continuar falando;</li>
            <li>uma pergunta final: <strong>“como me sinto agora em comparação com antes?”</strong></li>
          </ol>
          <p>Testem com outra dupla e revisem o que estiver confuso ou desconfortável.</p>
        </div>

        <div class="source-box"><strong class="card-title">Por que começamos por aqui?</strong><p>O Plano de Curso 1062 do Centro Paula Souza inclui, em Corpo, Movimento e Saúde, benefícios das atividades corporais, capacidades físicas e habilidades motoras, atividade física/exercício e efeitos fisiológicos, morfológicos e psicossociais. A BNCC também pede que o estudante selecione movimentos conscientemente e valorize práticas corporais como autoconhecimento e autocuidado.</p><p><a href="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/77/2025/12/Desenvolvimento-de-Sistemas-2026-MTec-1062-1a-serie.pdf" target="_blank" rel="noopener noreferrer">Centro Paula Souza • Plano 1062 • 2026</a> · <a href="https://basenacionalcomum.mec.gov.br/" target="_blank" rel="noopener noreferrer">BNCC</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Educação Física não começa medindo quem é o mais rápido. Começa aprendendo a <strong>perceber a própria resposta ao movimento, ajustar intensidade, reconhecer sinais, recuperar-se e tomar decisões responsáveis</strong>. Esse conhecimento será usado nos jogos, esportes, ginástica, dança, lutas e práticas de aventura dos próximos capítulos.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Experimentar</span><span>Observar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('01 Movimento', showChapter);
})();
