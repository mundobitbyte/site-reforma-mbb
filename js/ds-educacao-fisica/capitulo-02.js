(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  let timerId = null;
  let timerRemaining = 90;
  let timerInitial = 90;
  let roundOne = null;

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
    const display = $('#gameTimerDisplay', root);
    if (display) display.textContent = formatTime(timerRemaining);
  }

  function setRound(root, seconds, label) {
    stopTimer();
    timerInitial = seconds;
    timerRemaining = seconds;
    renderTimer(root);
    const phase = $('#gameTimerPhase', root);
    if (phase) phase.innerHTML = `<strong>${label}</strong><br><small>Organize o espaço e só então pressione iniciar.</small>`;
  }

  function startTimer(root) {
    if (timerId || timerRemaining <= 0) return;
    timerId = setInterval(() => {
      timerRemaining -= 1;
      renderTimer(root);
      if (timerRemaining <= 0) {
        stopTimer();
        const phase = $('#gameTimerPhase', root);
        if (phase) phase.innerHTML += '<br><strong>Rodada encerrada.</strong> Pare o jogo e observe os registros antes de mudar qualquer regra.';
      }
    }, 1000);
  }

  function resetTimer(root) {
    stopTimer();
    timerRemaining = timerInitial;
    renderTimer(root);
  }

  function getCounts(root) {
    return [1,2,3,4].map(n => Number($(`[data-count="p${n}"]`, root)?.textContent || 0));
  }

  function participationStats(counts) {
    const total = counts.reduce((sum, value) => sum + value, 0);
    const active = counts.filter(value => value > 0).length;
    const max = Math.max(...counts);
    const min = Math.min(...counts);
    return { total, active, range:max-min };
  }

  function updateParticipation(root) {
    const counts = getCounts(root);
    const stats = participationStats(counts);
    const out = $('#participationFeedback', root);
    if (!out) return;

    if (stats.total === 0) {
      out.innerHTML = '<strong>Nenhum toque registrado ainda.</strong> Um observador pode tocar no botão de cada participante sempre que essa pessoa receber ou controlar a bola/objeto.';
      return;
    }

    out.innerHTML = `<strong>${stats.total} participações registradas.</strong> ${stats.active}/4 participantes tocaram no objeto. A diferença entre a maior e a menor contagem foi ${stats.range}. <span style="display:block;margin-top:5px">Esses números não dão uma nota para ninguém: servem para perguntar <em>como a regra, o espaço e as decisões do grupo distribuíram a participação</em>.</span>`;
  }

  function resetParticipation(root) {
    $$('[data-count]', root).forEach(el => { el.textContent = '0'; });
    updateParticipation(root);
  }

  function saveRoundOne(root) {
    roundOne = getCounts(root);
    const out = $('#roundCompare', root);
    if (out) {
      const stats = participationStats(roundOne);
      out.innerHTML = `<strong>Rodada 1 guardada.</strong> Houve ${stats.total} participações; ${stats.active}/4 pessoas tocaram no objeto. Agora altere <strong>uma regra por vez</strong>, zere o contador e faça a segunda rodada.`;
    }
  }

  function compareRounds(root) {
    const out = $('#roundCompare', root);
    if (!out) return;
    if (!roundOne) {
      out.innerHTML = '<strong>Primeiro guarde a rodada 1.</strong> Sem uma referência anterior, não dá para atribuir a mudança à nova regra.';
      return;
    }

    const roundTwo = getCounts(root);
    const a = participationStats(roundOne);
    const b = participationStats(roundTwo);
    const activeChange = b.active - a.active;
    const rangeChange = b.range - a.range;
    const activeText = activeChange > 0 ? `mais pessoas participaram diretamente (${a.active} → ${b.active})` : activeChange < 0 ? `menos pessoas participaram diretamente (${a.active} → ${b.active})` : `o número de participantes com toque permaneceu ${b.active}`;
    const rangeText = rangeChange < 0 ? `a distribuição ficou menos concentrada pela medida simples usada aqui (${a.range} → ${b.range})` : rangeChange > 0 ? `a diferença entre as contagens aumentou (${a.range} → ${b.range})` : `a diferença entre as contagens permaneceu ${b.range}`;

    out.innerHTML = `<strong>Comparação:</strong><p>Na segunda rodada, ${activeText}; ${rangeText}.</p><p><strong>Cuidado:</strong> isso não prova sozinho que uma regra é “melhor”. Pergunte também se o jogo continuou desafiador, compreensível, seguro e divertido e se diferentes pessoas puderam tomar decisões reais.</p>`;
  }

  function updateRuleLab(root) {
    const participation = $('#ruleParticipation', root)?.value || 'free';
    const space = $('#ruleSpace', root)?.value || 'medium';
    const out = $('#ruleLabFeedback', root);
    if (!out) return;

    const participationText = {
      free:'Sem exigência de passes diferentes, a equipe tem liberdade total — mas pode concentrar decisões sempre nas mesmas pessoas.',
      three:'Exigir três participantes diferentes antes do ponto tende a distribuir mais o contato com o objeto, embora possa também tornar a tarefa mais difícil.',
      all:'Exigir participação de todos antes do ponto amplia a inclusão direta, mas pode deixar o jogo previsível ou lento em certos grupos.'
    }[participation];

    const spaceText = {
      small:'Espaço menor costuma aumentar pressão, encontros e velocidade de decisão; exige mais cuidado com segurança e controle.',
      medium:'Espaço intermediário equilibra deslocamento e aproximação e é um bom ponto de partida para observar o grupo.',
      large:'Espaço maior cria mais linhas de passe e deslocamentos, mas pode aumentar a exigência física e excluir quem não consegue cobrir grandes distâncias.'
    }[space];

    out.innerHTML = `<strong>Hipótese antes de jogar:</strong><p>${participationText}</p><p>${spaceText}</p><p>Teste e observe. Estratégia não nasce de uma regra isolada, mas da relação entre <strong>objetivo, pessoas, espaço, tempo e oposição</strong>.</p>`;
  }

  function renderStrategy(root, mode) {
    const board = $('#strategyBoard', root);
    const out = $('#strategyFeedback', root);
    if (!board || !out) return;

    const setups = {
      cluster:{players:[[190,120],[225,135],[210,170]],ball:[208,145],lines:[[208,145,190,120],[208,145,225,135],[208,145,210,170]],text:'Todos se aproximam da bola. Isso pode facilitar um passe curto, mas também ocupa o mesmo espaço e facilita a marcação.'},
      spread:{players:[[95,80],[305,80],[200,190]],ball:[95,80],lines:[[95,80,305,80],[95,80,200,190]],text:'A equipe ocupa largura e profundidade. Surgem opções diferentes de passe, mas as distâncias também aumentam.'},
      support:{players:[[120,145],[205,85],[285,160]],ball:[120,145],lines:[[120,145,205,85],[120,145,285,160],[205,85,285,160]],text:'Quem está sem a bola cria apoios em ângulos diferentes. O portador não precisa resolver tudo sozinho.'}
    };
    const s = setups[mode] || setups.support;
    const circles = s.players.map((p,i) => `<circle cx="${p[0]}" cy="${p[1]}" r="18" fill="#1f6f5c"/><text x="${p[0]}" y="${p[1]+5}" text-anchor="middle" fill="#fff" font-size="13" font-weight="900">${String.fromCharCode(65+i)}</text>`).join('');
    const lines = s.lines.map(l => `<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" stroke="#d97706" stroke-width="4" stroke-dasharray="8 6"/>`).join('');

    board.innerHTML = `<rect x="5" y="5" width="390" height="220" rx="14" fill="#f5faf8" stroke="#b8dacf" stroke-width="2"/><rect x="175" y="15" width="50" height="8" rx="4" fill="#3478a0"/><rect x="175" y="207" width="50" height="8" rx="4" fill="#3478a0"/>${lines}${circles}<circle cx="${s.ball[0]}" cy="${s.ball[1]}" r="7" fill="#d97706" stroke="#fff" stroke-width="2"/>`;
    out.innerHTML = `<strong>O que esta organização favorece?</strong><p>${s.text}</p><p>Não existe desenho tático universalmente correto. A melhor decisão depende da situação criada pelo jogo.</p>`;
  }

  function init(root) {
    $$('[data-participation]', root).forEach(button => {
      button.addEventListener('click', () => {
        const target = $(`[data-count="${button.dataset.participation}"]`, root);
        if (target) target.textContent = String(Number(target.textContent || 0) + 1);
        updateParticipation(root);
      });
    });
    $('#resetParticipation', root)?.addEventListener('click', () => resetParticipation(root));
    $('#saveRoundOne', root)?.addEventListener('click', () => saveRoundOne(root));
    $('#compareRounds', root)?.addEventListener('click', () => compareRounds(root));
    updateParticipation(root);

    $$('[data-game-round]', root).forEach(button => {
      button.addEventListener('click', () => setRound(root, Number(button.dataset.seconds || 90), button.dataset.gameRound));
    });
    $('#gameTimerStart', root)?.addEventListener('click', () => startTimer(root));
    $('#gameTimerPause', root)?.addEventListener('click', stopTimer);
    $('#gameTimerReset', root)?.addEventListener('click', () => resetTimer(root));
    setRound(root, 90, 'Rodada de observação — 90 segundos');

    $('#ruleParticipation', root)?.addEventListener('change', () => updateRuleLab(root));
    $('#ruleSpace', root)?.addEventListener('change', () => updateRuleLab(root));
    updateRuleLab(root);

    $$('[data-strategy]', root).forEach(button => {
      button.addEventListener('click', () => renderStrategy(root, button.dataset.strategy));
    });
    renderStrategy(root, 'support');
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Brincadeiras e jogos',
      technical:'regras • cooperação • oposição • espaço • participação • decisão • estratégia • adaptação • fair play',
      title:'02 — Brincadeiras, jogos e estratégia',
      objective:'<strong>Objetivo:</strong> experimentar como regras, espaço e organização do grupo alteram participação e decisões em um jogo, construindo estratégias, adaptações e critérios de inclusão sem reduzir a aula a “ganhar ou perder”.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">A regra muda o jogo</span>
          <div class="hero-box">
            <strong class="card-title">No intervalo, uma turma começa um jogo com bola. Em poucos minutos, duas pessoas quase sempre ficam com ela; outras correm, mas pouco participam.</strong>
            <p>Alguém propõe: “É assim mesmo — quem joga melhor pega mais na bola”. Outra pessoa responde: “Então não adianta mandar todo mundo jogar”.</p>
            <p>O problema não precisa ser resolvido com uma palestra nem separando “bons” e “ruins”. Podemos <strong>mudar uma regra, jogar novamente e observar o que acontece</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como regras e estratégias podem criar um jogo mais participativo sem eliminar o desafio?</p>
          </div>
        </section>

        <div class="ef-tags"><span>jogar</span><span>decidir</span><span>cooperar</span><span>opor</span><span>adaptar</span><span>observar</span></div>

        <h3>1. Jogo não é apenas “tempo livre com uma bola”</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Brincadeira e jogo</strong><p>Podem assumir regras criadas ou adaptadas pelo próprio grupo. O valor não está só no resultado: existe desafio, imaginação, convivência, decisão e prazer de participar.</p></div>
          <div class="mini-card"><strong>Esporte</strong><p>Também é uma prática corporal, mas costuma possuir regras mais institucionalizadas, modalidades reconhecidas e formas organizadas de competição. Nos próximos capítulos veremos diferentes tipos de esporte.</p></div>
        </div>

        <div class="note-box"><strong>As fronteiras não são caixas perfeitas.</strong><p>Uma brincadeira pode virar jogo organizado; um jogo pode se aproximar de um esporte; e um esporte pode ser adaptado pela escola para outra finalidade. O importante aqui é observar <strong>como as regras organizam a experiência</strong>.</p></div>

        ${choice('1','Regra e comportamento','Se uma regra permite que uma pessoa segure a bola pelo tempo que quiser, qual efeito pode aparecer?',[
          ['a','A posse pode se concentrar e reduzir decisões dos colegas'],
          ['b','Todos necessariamente participarão da mesma forma'],
          ['c','A regra nunca interfere no comportamento do grupo']
        ],'a','Isso. Regras criam possibilidades e limites; por isso alteram o tipo de decisão que aparece no jogo.','Pergunte o que a regra permite, proíbe ou incentiva os participantes a fazer.')}

        <h3>2. Estratégia é resolver um problema em movimento</h3>
        <p>Estratégia não significa “fazer qualquer coisa para ganhar”. Em um jogo, o grupo precisa ler espaço, colegas, adversários, objetivo e regras para escolher ações possíveis.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Perceber</strong><p>Onde há espaço? Quem está livre? Qual portal está disponível? O que o outro grupo está tentando fazer?</p></div>
          <div class="mini-card"><strong>Decidir</strong><p>Passar agora, esperar, deslocar-se, criar apoio, mudar direção ou proteger determinado espaço?</p></div>
          <div class="mini-card"><strong>Revisar</strong><p>A decisão funcionou? Se não funcionou, o problema foi execução, posicionamento, comunicação ou leitura da situação?</p></div>
        </div>

        <div class="studio-box">
          <strong class="card-title">Quadro tático — mova a ideia, não as pessoas</strong>
          <p>Compare três formas simples de ocupar o espaço. Depois leve a hipótese para o jogo real.</p>
          <div class="choice-row"><button type="button" data-strategy="cluster">Todos perto da bola</button><button type="button" data-strategy="spread">Abrir o espaço</button><button type="button" data-strategy="support">Criar apoios</button></div>
          <svg id="strategyBoard" viewBox="0 0 400 230" role="img" aria-label="Quadro tático com posições de três participantes" style="width:100%;max-width:700px;height:auto;display:block;margin:12px auto"></svg>
          <div id="strategyFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <h3>3. Antes de jogar: segurança e material</h3>
        <div class="safety-box">
          <strong>Jogo sem contato corporal</strong>
          <p>Use bola macia, bola de espuma ou uma meia enrolada. Marque os portais com cones, fita ou objetos leves e estáveis — nunca vidro. Limpe o espaço de obstáculos. Não são permitidos empurrões, agarrões, carrinhos, arremessos fortes contra pessoas nem disputa física pela bola. Se o local não permitir deslocamento seguro, use a versão reduzida ou sentada.</p>
        </div>

        <h3>4. Vamos experimentar — Jogo dos Portais</h3>
        <div class="practice-box">
          <strong class="card-title">Objetivo: completar um passe através de um portal para um colega</strong>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Montar</strong><p>Forme grupos pequenos. Crie 2 ou 3 portais com cerca de 1 metro de largura, ajustando ao espaço disponível.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Começar simples</strong><p>Quem recebe o objeto não se desloca com ele. Pode pivotar ou girar confortavelmente e precisa passar.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>Pontuar</strong><p>Vale 1 ponto quando o passe atravessa um portal e é controlado por um colega do outro lado.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Observar</strong><p>Uma pessoa registra quem recebe/controla o objeto. Depois da rodada, o observador pode entrar no jogo.</p></div>
          </div>

          <div class="move-options">
            <div class="move-option"><strong>Versão com deslocamento</strong><small>Participantes caminham ou trotam conforme espaço e orientação do professor.</small></div>
            <div class="move-option"><strong>Versão reduzida</strong><small>Menos espaço e sem corrida. Priorize passe, orientação corporal e criação de apoio.</small></div>
            <div class="move-option"><strong>Versão sentada/sem deslocamento</strong><small>Organize participantes em posições fixas e ajuste distância, altura e forma do passe para que todos possam decidir e participar.</small></div>
          </div>
        </div>

        <div class="timer-panel">
          <div><div id="gameTimerDisplay" class="timer-display">01:30</div><div id="gameTimerPhase"><strong>Rodada de observação — 90 segundos</strong></div></div>
          <div class="timer-controls"><button type="button" id="gameTimerStart">Iniciar</button><button type="button" id="gameTimerPause">Pausar</button><button type="button" id="gameTimerReset">Reiniciar</button><button type="button" data-game-round="Rodada 1 — regra inicial" data-seconds="90">Rodada 1</button><button type="button" data-game-round="Rodada 2 — regra modificada" data-seconds="90">Rodada 2</button></div>
        </div>

        <h3>5. Transforme impressão em evidência simples</h3>
        <div class="field-note">
          <strong>Contador de participação — exemplo para grupo de quatro</strong>
          <p>O observador toca no nome sempre que aquela pessoa recebe/controla o objeto. Se o grupo tiver outro tamanho, use papel para adaptar o mesmo princípio.</p>
          <div class="choice-row">
            <button type="button" data-participation="p1">Pessoa 1: <span data-count="p1">0</span></button>
            <button type="button" data-participation="p2">Pessoa 2: <span data-count="p2">0</span></button>
            <button type="button" data-participation="p3">Pessoa 3: <span data-count="p3">0</span></button>
            <button type="button" data-participation="p4">Pessoa 4: <span data-count="p4">0</span></button>
          </div>
          <div class="choice-row"><button type="button" id="saveRoundOne">Guardar rodada 1</button><button type="button" id="resetParticipation">Zerar contadores</button><button type="button" id="compareRounds">Comparar com rodada 1</button></div>
          <div id="participationFeedback" class="choice-feedback" aria-live="polite"></div>
          <div id="roundCompare" class="choice-feedback" aria-live="polite" style="margin-top:10px"></div>
        </div>

        <div class="note-box"><strong>Participação não é apenas tocar na bola.</strong><p>Deslocar-se para abrir espaço, comunicar, defender uma região, observar e decidir também fazem parte do jogo. O contador é uma <strong>evidência parcial</strong>, útil para enxergar concentração de posse — não para medir o valor de cada jogador.</p></div>

        <h3>6. Agora mude uma regra — e apenas uma</h3>
        <div class="studio-box">
          <strong class="card-title">Laboratório de regras</strong>
          <p>Antes da segunda rodada, escolha uma hipótese. Evite mudar tudo ao mesmo tempo: se várias coisas mudam juntas, fica difícil saber o que produziu o efeito.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Participação antes do ponto</strong><select id="ruleParticipation" style="width:100%"><option value="free">Sem exigência</option><option value="three">3 pessoas diferentes precisam tocar</option><option value="all">Todos precisam tocar</option></select></label>
            <label class="mini-card"><strong>Tamanho do espaço</strong><select id="ruleSpace" style="width:100%"><option value="small">Menor</option><option value="medium" selected>Médio</option><option value="large">Maior</option></select></label>
          </div>
          <div id="ruleLabFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${choice('2','Teste justo','Por que é útil modificar apenas uma regra por vez ao comparar duas rodadas?',[
          ['a','Porque fica mais fácil relacionar a diferença observada à mudança realizada'],
          ['b','Porque jogos nunca podem ter mais de uma regra'],
          ['c','Porque observar o resultado não tem importância']
        ],'a','Correto. É uma pequena lógica experimental aplicada à prática corporal.','Se você altera espaço, tempo, pontuação e participantes ao mesmo tempo, perde a referência do que realmente influenciou o jogo.')}

        <h3>7. Ganhar não é o único critério de um bom jogo escolar</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Desafio</strong><p>O jogo precisa apresentar problemas reais para resolver — não ser tão fácil que a decisão deixe de importar.</p></div>
          <div class="mini-card"><strong>Participação</strong><p>Diferentes pessoas precisam ter oportunidades reais de perceber, decidir e agir.</p></div>
          <div class="mini-card"><strong>Segurança</strong><p>A regra deve reduzir riscos desnecessários e respeitar o espaço, os materiais e as condições do grupo.</p></div>
          <div class="mini-card"><strong>Sentido</strong><p>O grupo deve entender o objetivo e poder discutir por que uma regra existe e quando vale adaptá-la.</p></div>
        </div>

        ${choice('3','Inclusão com desafio','Uma regra faz todos tocarem na bola, mas a rodada ficou lenta e previsível. Qual é a melhor atitude?',[
          ['a','Manter a regra para sempre porque inclusão significa todos fazerem exatamente a mesma coisa'],
          ['b','Analisar o efeito e testar outra adaptação que preserve participação e também decisões interessantes'],
          ['c','Voltar imediatamente para uma regra que exclua quem tem menos habilidade']
        ],'b','Isso. Adaptar é equilibrar objetivos e observar consequências, não buscar uma fórmula definitiva.','Inclusão não significa apagar desafio; significa criar condições para que diferentes pessoas participem do problema do jogo.')}

        <h3>8. Fair play é mais do que “não trapacear”</h3>
        <p>Respeitar combinados, reconhecer uma falta própria, evitar humilhar quem erra, devolver o jogo após uma interrupção, cuidar do corpo do outro e discutir regras sem agressão são aprendizagens corporais e sociais.</p>

        <div class="challenge-box">
          <strong class="card-title">Pausa tática de 30 segundos</strong>
          <p>No meio de uma rodada, pare o jogo e cada equipe responde apenas três perguntas:</p>
          <ol><li>Onde está sobrando espaço?</li><li>Quem está oferecendo apoio para quem possui a bola?</li><li>Uma pessoa está tomando quase todas as decisões? O que podemos mudar sem “tirar” essa pessoa do jogo?</li></ol>
          <p>Retome por mais 60–90 segundos e veja se o comportamento muda.</p>
        </div>

        <h3>9. Leve a lógica para outros jogos</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Pega-pega</strong><p>O que muda se existir zona de proteção? E se ninguém puder ser pegador duas vezes seguidas?</p></div>
          <div class="mini-card"><strong>Queimada</strong><p>O que muda se eliminar pessoas deixar de ser o objetivo e acertar alvos no fundo da quadra virar a pontuação?</p></div>
          <div class="mini-card"><strong>Jogo de alvo</strong><p>O que muda quando a distância, o tamanho do alvo ou o tipo de objeto usado são adaptados?</p></div>
        </div>

        <div class="note-box"><strong>Não existe obrigação de usar esses exemplos exatamente assim.</strong><p>A função do capítulo é ensinar um método: <strong>defina um problema → altere uma condição → jogue → observe evidências → converse → revise</strong>.</p></div>

        <h3>10. Aplicação — redesenhe um jogo da escola</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <ol>
            <li>Escolha um jogo ou brincadeira que a turma realmente conhece.</li>
            <li>Identifique um problema observável: pouca participação, espera excessiva, contato físico, dificuldade muito alta ou baixa, espaço inadequado etc.</li>
            <li>Proponha <strong>uma</strong> mudança de regra.</li>
            <li>Preveja o que você acha que vai acontecer.</li>
            <li>Teste por uma rodada curta.</li>
            <li>Registre pelo menos uma evidência.</li>
            <li>Decida: manter, ajustar ou abandonar a mudança — e explique por quê.</li>
          </ol>
        </div>

        <div class="source-box"><strong class="card-title">Por que isso é Educação Física?</strong><p>Na Educação Física escolar, compreender regras e organizar atividades permite que aspectos estratégicos dos jogos se tornem problemas do próprio grupo. Materiais da BNCC para o Ensino Médio também enfatizam diversidade, criatividade, ludicidade, técnicas, tática, equipe, respeito às diferenças e criação de novas formas de jogar.</p><p><a href="https://basenacionalcomum.mec.gov.br/implementacao/praticas/caderno-de-praticas/ensino-medio/84-vivendo-a-cultura-corporal-de-movimento-no-ensino-medio" target="_blank" rel="noopener noreferrer">BNCC • Vivendo a cultura corporal de movimento no Ensino Médio</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Jogar bem não é apenas executar um gesto técnico ou vencer. É <strong>ler a situação, tomar decisões, cooperar, lidar com oposição, respeitar regras, adaptar condições e revisar estratégias</strong>. Uma regra aparentemente pequena pode transformar quem participa, onde o jogo acontece e quais decisões se tornam possíveis.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Experimentar</span><span>Observar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('02 Brincadeiras', showChapter);
})();
