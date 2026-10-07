(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  let timerId = null;
  let timerRemaining = 60;
  let timerInitial = 60;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function setTimer(root, seconds, label) {
    stopTimer();
    timerInitial = seconds;
    timerRemaining = seconds;
    const display = $('#finalTimerDisplay', root);
    const phase = $('#finalTimerPhase', root);
    if (display) display.textContent = formatTime(timerRemaining);
    if (phase) phase.innerHTML = `<strong>${label}</strong><br><small>Pressione iniciar quando o espaço estiver livre e você estiver pronto.</small>`;
  }

  function startTimer(root) {
    if (timerId || timerRemaining <= 0) return;
    timerId = setInterval(() => {
      timerRemaining -= 1;
      const display = $('#finalTimerDisplay', root);
      if (display) display.textContent = formatTime(timerRemaining);
      if (timerRemaining <= 0) {
        stopTimer();
        const phase = $('#finalTimerPhase', root);
        if (phase) phase.innerHTML += '<br><strong>Tempo concluído.</strong> Registre o que percebeu antes de avançar.';
      }
    }, 1000);
  }

  function resetTimer(root) {
    stopTimer();
    timerRemaining = timerInitial;
    const display = $('#finalTimerDisplay', root);
    if (display) display.textContent = formatTime(timerRemaining);
  }

  function updateFestivalMap(root, mode = 'balanced') {
    const svg = $('#festivalMapSvg', root);
    const out = $('#festivalMapFeedback', root);
    if (!svg || !out) return;

    const configs = {
      crowded:{
        points:[['A',165,95],['B',220,105],['C',245,150],['D',195,175],['E',275,185]],
        route:'M45 120 L165 95 L220 105 L245 150 L195 175 L275 185',
        text:'Quase todas as estações foram concentradas no mesmo setor. Isso aumenta cruzamento de fluxos, disputa por espaço e chance de interferência entre práticas.'
      },
      balanced:{
        points:[['A',85,80],['B',220,75],['C',335,95],['D',115,190],['E',300,190]],
        route:'M45 120 L85 80 L220 75 L335 95 L300 190 L115 190',
        text:'As estações foram distribuídas em zonas diferentes, deixando corredores mais livres. Ainda é necessário conferir acessibilidade, som, piso e circulação real.'
      },
      accessible:{
        points:[['A',80,80],['B',205,80],['C',320,90],['D',320,190],['E',80,190]],
        route:'M45 120 L80 80 L205 80 L320 90 L320 190 L320 225 L120 225 L80 190 L45 120',
        text:'Além da distribuição, o percurso principal contorna o trecho com degrau e mantém uma rota mais ampla. Acessibilidade precisa ser pensada antes da abertura, não improvisada depois.'
      }
    };
    const c = configs[mode] || configs.balanced;
    const nodes = c.points.map(([label,x,y]) => `<circle cx="${x}" cy="${y}" r="20" fill="#1f6f5c"/><text x="${x}" y="${y+5}" text-anchor="middle" fill="#fff" font-size="13" font-weight="900">${label}</text>`).join('');

    svg.innerHTML = `
      <rect x="5" y="5" width="390" height="235" rx="16" fill="#f7fbfa" stroke="#b8dacf" stroke-width="2"/>
      <rect x="170" y="160" width="55" height="60" rx="5" fill="#f3e8ff" stroke="#8b5fa3"/>
      <text x="198" y="194" text-anchor="middle" font-size="10" fill="#6d3f80">degrau</text>
      <path d="M35 120 H365" stroke="#c9d8d2" stroke-width="16" stroke-linecap="round"/>
      <path d="M55 35 V210" stroke="#dce7e3" stroke-width="18" stroke-linecap="round"/>
      <path d="${c.route}" fill="none" stroke="#d97706" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      ${nodes}
      <text x="200" y="229" text-anchor="middle" font-size="10" fill="#66736e">mapa fictício do festival</text>`;
    out.innerHTML = `<strong>Leitura do mapa:</strong><p>${c.text}</p><p>Organizar espaço também é decisão corporal: muda deslocamento, segurança, participação e experiência de quem entra.</p>`;
  }

  function updateSkillChecklist(root) {
    const checks = $$('[data-final-skill]', root);
    const out = $('#finalSkillFeedback', root);
    if (!checks.length || !out) return;
    const count = checks.filter(item => item.checked).length;
    const msg = count === checks.length
      ? 'Você reconheceu as 10 competências. Agora escolha duas e demonstre com uma prática ou decisão concreta — marcar não substitui fazer.'
      : count >= 7
        ? 'Há uma base forte. Os itens ainda não marcados mostram onde vale retomar uma experiência antes do desafio final.'
        : count >= 4
          ? 'Você já percebe parte importante do percurso, mas ainda há competências que precisam ser revisitadas na prática.'
          : 'Use esta lista como mapa de revisão. Retome capítulos específicos e volte depois para comparar sua percepção.';
    out.innerHTML = `<strong>${count}/10 competências reconhecidas.</strong><p>${msg}</p>`;
  }

  function updateFinalPlan(root) {
    const goal = $('#finalGoal', root)?.value || 'participation';
    const format = $('#finalFormat', root)?.value || 'stations';
    const evidence = $('#finalEvidence', root)?.value || 'observation';
    const out = $('#finalPlanFeedback', root);
    if (!out) return;

    const goals = {
      participation:'aumentar participação sem transformar desempenho em ranking',
      autonomy:'ajudar o participante a tomar decisões e adaptar a própria prática',
      cooperation:'resolver problemas corporais em grupo com regras claras',
      wellbeing:'criar uma experiência corporal possível, segura e significativa'
    };
    const formats = {
      stations:'3 estações curtas de linguagens corporais diferentes',
      sequence:'uma sequência contínua com início leve, desafio central e recuperação',
      game:'um jogo adaptável com pausas para análise e revisão',
      route:'uma rota de decisão com checkpoints e tarefas corporais seguras'
    };
    const evidences = {
      observation:'observação do que mudou entre tentativa inicial e revisão',
      rpe:'percepção de esforço e recuperação, sem comparação entre pessoas',
      participation:'registro de participação, decisões ou oportunidades de ação',
      reflection:'explicação curta sobre o que funcionou, o que não funcionou e o que mudar'
    };

    out.innerHTML = `<strong>Esqueleto do projeto:</strong><p>Objetivo: ${goals[goal]}. Formato: ${formats[format]}. Evidência principal: ${evidences[evidence]}.</p><p>Agora falta a parte humana: espaço, segurança, adaptação, Plano B e a pergunta que o participante deverá conseguir responder depois da experiência.</p>`;
  }

  function init(root) {
    $$('[data-final-timer]', root).forEach(button => {
      button.addEventListener('click', () => setTimer(root, Number(button.dataset.seconds), button.dataset.finalTimer));
    });
    $('#finalTimerStart', root)?.addEventListener('click', () => startTimer(root));
    $('#finalTimerPause', root)?.addEventListener('click', stopTimer);
    $('#finalTimerReset', root)?.addEventListener('click', () => resetTimer(root));
    setTimer(root, 60, 'Movimento leve — 1 minuto');

    $$('[data-festival-map]', root).forEach(button => {
      button.addEventListener('click', () => updateFestivalMap(root, button.dataset.festivalMap));
    });
    updateFestivalMap(root, 'balanced');

    $$('[data-final-skill]', root).forEach(item => item.addEventListener('change', () => updateSkillChecklist(root)));
    updateSkillChecklist(root);

    ['finalGoal','finalFormat','finalEvidence'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updateFinalPlan(root));
    });
    updateFinalPlan(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'esforço • jogos • esporte • capacidades físicas • dança • lutas • aventura • saúde • mídia • autonomia • adaptação • decisão',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> integrar os conhecimentos da 1ª série para perceber o corpo, tomar decisões em práticas corporais, adaptar situações, analisar riscos e informações e construir experiências seguras, inclusivas e possíveis para a vida real.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Missão final da 1ª série</span>
          <div class="hero-box">
            <strong class="card-title">A escola vai abrir amanhã o Festival “Movimento que Vale a Pena” — e cada estação tem um problema.</strong>
            <p>Uma atividade começa intensa demais. Um jogo deixa metade da turma quase sem tocar na bola. O circuito premia apenas quem faz mais repetições. A dança virou cópia. A estação de luta está mal explicada. A rota de aventura ignora um piso molhado. Um cartaz promete “corpo ideal”. E o relógio quer transformar tudo em número.</p>
            <p>Seu trabalho agora não é repetir os capítulos. É <strong>usar o que aprendeu para corrigir o festival antes que ele abra</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> você consegue tomar uma decisão corporal melhor, justificar por que ela é melhor e revisar quando a primeira solução não funciona?</p>
          </div>
        </section>

        <div class="note-box"><strong>Como usar este fechamento.</strong><p>Tente responder sem voltar aos capítulos. Quando errar, leia o feedback e descubra <strong>qual observação ou decisão faltou</strong>. Depois das questões, haverá tarefas em que não existe alternativa pronta: você precisará experimentar, registrar e justificar.</p></div>

        <h3>1. O corpo responde — e você precisa perceber</h3>
        ${choice('1','Esforço e recuperação','Um aluno começa uma atividade já ofegante porque tentou acompanhar o colega mais condicionado. Qual é a melhor primeira decisão?',[
          ['a','Aumentar ainda mais o ritmo para “acostumar”'],
          ['b','Reduzir a intensidade, observar respiração/fala e reorganizar o esforço a partir da própria resposta'],
          ['c','Parar toda atividade física definitivamente']
        ],'b','Correto. Regular o próprio esforço é uma competência; comparação não deve comandar intensidade.','Antes de pensar em desempenho, recupere controle e observe como o corpo responde.')}

        ${choice('2','Recuperação','Depois de uma sequência mais ativa, a percepção de esforço continua muito alta e não cai mesmo após redução do ritmo. O que fazer?',[
          ['a','Ignorar porque recuperação não importa'],
          ['b','Continuar até o cronômetro acabar'],
          ['c','Interromper, observar sintomas e avisar o professor; não force uma conclusão nem mais esforço']
        ],'c','Isso. Recuperação fornece informação. Persistir por obrigação pode transformar observação em risco.','Se a resposta não está voltando ao esperado ou há desconforto incomum, a decisão prudente é interromper e buscar orientação.')}

        <div class="practice-box">
          <strong class="card-title">Desafio prático 1 — 3 minutos, três momentos</strong>
          <p>Escolha caminhada, marcha no lugar ou versão sentada. Use movimentos confortáveis e espaço livre.</p>
          <div class="choice-row"><button type="button" data-final-timer="Movimento leve — 1 minuto" data-seconds="60">Leve — 1 min</button><button type="button" data-final-timer="Um pouco mais ativo — 1 minuto" data-seconds="60">Mais ativo — 1 min</button><button type="button" data-final-timer="Recuperação leve — 1 minuto" data-seconds="60">Recuperação — 1 min</button></div>
          <div class="timer-panel"><span id="finalTimerDisplay">01:00</span><div id="finalTimerPhase"></div><div class="choice-row"><button id="finalTimerStart" type="button">Iniciar</button><button id="finalTimerPause" type="button">Pausar</button><button id="finalTimerReset" type="button">Reiniciar</button></div></div>
          <p>Depois responda em uma frase: <strong>o que mudou na respiração, fala, calor corporal ou sensação de esforço entre os três momentos?</strong> “Não percebi diferença” também é um registro válido.</p>
        </div>
        <div class="safety-box"><strong>Não é teste máximo.</strong><p>Dor, tontura, mal-estar ou falta de ar incomum são sinais para interromper. A tarefa pode ser totalmente sentada.</p></div>

        <h3>2. Jogo bom não é apenas jogo que termina</h3>
        ${choice('3','Participação e regra','Num jogo 4×4, dois alunos dominam todas as ações e os demais quase não participam. Qual intervenção combina melhor com o percurso da 1ª série?',[
          ['a','Deixar igual porque os melhores devem decidir tudo'],
          ['b','Alterar uma regra ou o espaço, jogar novamente e observar se a participação muda sem destruir o desafio'],
          ['c','Dar ponto automático para quem não participa']
        ],'b','Correto. Regra é uma variável que pode ser testada. A nova versão precisa ser observada, não apenas declarada “mais inclusiva”.','Mude uma variável, jogue novamente e compare evidências de participação e qualidade do jogo.')}

        ${choice('4','Estratégia coletiva','Uma equipe de invasão corre inteira atrás da bola. Qual princípio tende a melhorar as opções de passe?',[
          ['a','Criar largura, profundidade e apoios em posições diferentes'],
          ['b','Aproximar todos ainda mais da bola'],
          ['c','Proibir reposicionamento depois do passe']
        ],'a','Isso. Ocupação do espaço cria linhas de passe e distribui decisões.','“Ajudar” não significa necessariamente ficar perto da bola; muitas vezes significa ocupar um espaço útil.')}

        ${choice('5','Fundamento sob pressão','Um aluno executa muito bem o passe em fila, mas erra quando aparece um defensor. O que isso indica?',[
          ['a','O fundamento não serve para jogos'],
          ['b','Ele precisa transferir o gesto para situações com percepção, decisão e oposição progressiva'],
          ['c','Basta repetir mais vezes exatamente a mesma fila']
        ],'b','Correto. Fundamento e decisão precisam se encontrar.','Aumente gradualmente a oposição para aproximar o exercício do problema real do jogo.')}

        <h3>3. Medir pode ajudar — desde que você saiba o que está medindo</h3>
        ${choice('6','Corrida, salto e lançamento','No salto, um aluno melhora a distância depois de ajustar a aterrissagem e a aproximação. Qual registro é pedagogicamente mais rico?',[
          ['a','Somente “saltei mais longe”'],
          ['b','A marca e a variável técnica testada, explicando o que mudou entre tentativas'],
          ['c','A posição no ranking da turma']
        ],'b','Isso. Resultado ganha sentido quando conectado a uma hipótese e a uma mudança observável.','Medir pode ser útil, mas a pergunta “o que mudou e por quê?” é o que transforma marca em aprendizagem.')}

        ${choice('7','Progressão','Num circuito de força, um aluno executa o movimento com controle. Qual progressão é mais analisável?',[
          ['a','Aumentar ao mesmo tempo velocidade, repetições, dificuldade e duração'],
          ['b','Alterar uma variável de cada vez e observar técnica e esforço'],
          ['c','Fazer até a falha porque progressão significa exaustão']
        ],'b','Correto. Uma variável por vez permite perceber melhor o efeito da mudança.','Progressão não é sofrimento crescente; é ajuste planejado.')}

        ${choice('8','Equilíbrio e adaptação','Uma tarefa de equilíbrio ficou difícil demais para parte da turma. Qual adaptação preserva melhor o objetivo?',[
          ['a','Aumentar a base de apoio ou oferecer apoio próximo e manter o desafio de controle'],
          ['b','Excluir quem não consegue a versão mais difícil'],
          ['c','Transformar a tarefa em corrida']
        ],'a','Isso. Adaptar não significa retirar o objetivo; significa criar outra forma de acessá-lo.','Pergunte qual variável torna a tarefa impossível e ajuste essa variável sem abandonar a competência central.')}

        <h3>4. Cultura corporal também é criação, regra e relação</h3>
        ${choice('9','Dança','Uma apresentação copia exatamente uma coreografia viral, mas ninguém consegue explicar por que escolheu ritmo, formação ou espaço. Qual avanço seria mais coerente?',[
          ['a','Copiar com mais precisão'],
          ['b','Criar ou transformar movimentos e justificar escolhas de ritmo, espaço, relação e contexto cultural'],
          ['c','Retirar qualquer criação coletiva']
        ],'b','Correto. Dança na escola pode trabalhar repertório, mas precisa produzir experiência, escolha e criação.','O foco não é ser “original a qualquer custo”, e sim compreender e transformar elementos de movimento com intenção.')}

        ${choice('10','Lutas','Em um jogo de oposição, alguém continua se movendo depois do sinal “PAROU”. Qual avaliação é correta?',[
          ['a','A pessoa mostrou boa competitividade'],
          ['b','Há falha essencial de autocontrole e segurança, mesmo que a pessoa tenha muita habilidade'],
          ['c','O sinal só vale para quem está perdendo']
        ],'b','Isso. Responder à regra e ao sinal de parada faz parte da competência corporal da prática.','Sem confiança na interrupção, a oposição regulada deixa de ser segura.')}

        <h3>5. Aventura exige decisão antes de coragem</h3>
        ${choice('11','Risco e ambiente','A rota mais curta passa por piso molhado e a alternativa é um pouco maior. Qual decisão é mais madura?',[
          ['a','Escolher a curta porque aventura exige risco'],
          ['b','Avaliar condições, grupo e acessibilidade e escolher a alternativa mais adequada — inclusive cancelar se necessário'],
          ['c','Correr no piso molhado para reduzir tempo de exposição']
        ],'b','Correto. Gestão de risco significa adaptar o plano à realidade do ambiente.','Aventura não é prova de coragem; é leitura de ambiente, decisão e controle de risco.')}

        <div class="studio-box">
          <strong class="card-title">Desafio visual — organize o festival</strong>
          <p>O mapa fictício possui cinco estações. Compare três distribuições e pense no fluxo de pessoas.</p>
          <div class="choice-row"><button type="button" data-festival-map="crowded">Concentrado</button><button type="button" data-festival-map="balanced">Distribuído</button><button type="button" data-festival-map="accessible">Com rota acessível</button></div>
          <svg id="festivalMapSvg" viewBox="0 0 400 245" role="img" aria-label="Mapa fictício do festival com cinco estações e um trecho com degrau" style="width:100%;max-width:720px;height:auto;display:block;margin:12px auto"></svg>
          <div id="festivalMapFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <h3>6. Saúde não é aparência — e número não é veredito</h3>
        ${choice('12','Imagem corporal','Um cartaz do festival diz: “Faça exercício para conquistar o corpo certo”. Qual correção é mais adequada?',[
          ['a','Trocar por uma mensagem sobre movimento, capacidade, bem-estar e participação sem definir um corpo ideal'],
          ['b','Manter porque aparência é a melhor medida de saúde'],
          ['c','Trocar “corpo certo” por “corpo perfeito”']
        ],'a','Correto. Educação Física não deve transformar aparência em obrigação ou diagnóstico.','Uma mensagem de saúde pode incentivar movimento sem humilhar, comparar ou impor padrão corporal.')}

        ${choice('13','Métrica tecnológica','Um relógio estima 520 kcal gastas. Como usar esse número?',[
          ['a','Como valor exato para decidir quanto comer'],
          ['b','Como estimativa que pode ajudar a observar tendências, entendendo limites do algoritmo'],
          ['c','Como prova de que o treino foi bom ou ruim']
        ],'b','Isso. Métricas podem informar sem comandar culpa, alimentação ou valor pessoal.','Pergunte sempre o que o sensor realmente mede, o que o algoritmo estima e qual decisão o número deveria apoiar.')}

        ${choice('14','Evidência','Um vídeo promete “resultado garantido para qualquer adolescente” usando apenas antes/depois e depoimentos. Qual pergunta é mais importante?',[
          ['a','A edição do vídeo ficou bonita?'],
          ['b','Qual é a afirmação, qual é a fonte, qual é a evidência e para quem ela realmente vale?'],
          ['c','Quantos seguidores o perfil tem?']
        ],'b','Correto. Popularidade e imagem não substituem evidência verificável.','Separe persuasão de demonstração. Procure fonte, método, população e limites.')}

        <h3>7. Autonomia é o que fica depois da aula</h3>
        ${choice('15','Plano que não funcionou','Um aluno planejou quatro sessões semanais, conseguiu uma e não gostou da modalidade. Qual decisão é mais útil?',[
          ['a','Concluir que não tem disciplina'],
          ['b','Revisar frequência, duração, logística ou até a prática escolhida e testar outra versão'],
          ['c','Dobrar a meta na semana seguinte']
        ],'b','Isso. Um plano que não aconteceu produz informação para a próxima versão.','Autonomia é observar e revisar, não obedecer ao primeiro plano por culpa.')}

        ${choice('16','Plano B','A prática dependia de caminhar ao ar livre, mas choveu forte. O que demonstra autonomia?',[
          ['a','Fazer mesmo assim para não “quebrar a sequência”'],
          ['b','Usar uma alternativa interna segura, mudar o momento ou adiar sem transformar isso em fracasso'],
          ['c','Abandonar o plano por várias semanas']
        ],'b','Correto. Flexibilidade aumenta chance de continuidade e respeita as condições reais.','Plano B não é desculpa; é parte do planejamento.')}

        <h3>8. Cinco desafios sem alternativas</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio A — corrija uma estação</strong>
          <p>Escolha uma das situações do festival: jogo com pouca participação, circuito que valoriza só repetições, dança copiada, luta mal explicada ou rota insegura. Escreva:</p>
          <ol><li>qual é o problema;</li><li>uma mudança concreta;</li><li>o que você observaria depois da mudança;</li><li>em que condição voltaria atrás ou faria nova revisão.</li></ol>
          <p><strong>Uma boa resposta precisa mostrar:</strong> problema identificável + mudança testável + evidência + possibilidade de revisão.</p>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio B — adapte sem excluir</strong>
          <p>Escolha uma prática deste módulo e crie uma versão para alguém que precise reduzir deslocamento, impacto ou amplitude. Depois explique <strong>qual objetivo corporal foi preservado</strong>.</p>
          <p><strong>Uma boa resposta precisa mostrar:</strong> adaptação real, segurança e manutenção da competência central — não simplesmente “dar outra atividade”.</p>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio C — antes e depois</strong>
          <p>Faça uma tentativa inicial curta de alguma tarefa segura: passe com <strong>bola macia</strong> contra uma parede autorizada e em espaço livre, sequência rítmica, equilíbrio com base confortável, caminhada, circuito leve ou outra prática autorizada. Escolha <strong>uma variável</strong>, altere-a e repita.</p>
          <p>Registre: <strong>o que mudou? a mudança ajudou? qual evidência sustenta sua resposta?</strong></p>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio D — desmonte uma mensagem fitness</strong>
          <p>Use uma mensagem fictícia ou fornecida pelo professor. Separe em quatro partes: <strong>afirmação • fonte • evidência • interesse</strong>. Depois reescreva a mensagem para que informe sem promessa milagrosa, humilhação corporal ou certeza indevida.</p>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio E — minha prática possível</strong>
          <p>Escolha uma prática que você aceitaria testar por duas semanas e defina: sentido, momento real, duração inicial, intensidade, Plano B, adaptação e critério para decidir se vale repetir.</p>
          <p>Depois responda: <strong>o que faria você revisar o plano — e não apenas desistir?</strong></p>
        </div>

        <h3>9. O que você consegue fazer agora?</h3>
        <div class="studio-box">
          <strong class="card-title">Autoavaliação — não é nota</strong>
          <p>Marque apenas o que você acredita conseguir <strong>demonstrar</strong> em uma situação nova.</p>
          <div class="comparison-grid">
            <label class="mini-card"><input type="checkbox" data-final-skill> Regular esforço e observar recuperação</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Alterar regra e analisar participação</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Relacionar fundamento, espaço e decisão</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Progredir ou adaptar uma capacidade física</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Criar movimento com ritmo, espaço e relação</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Participar de oposição com autocontrole e respeito</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Ler ambiente e controlar risco</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Questionar mídia e padrões corporais</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Interpretar métricas sem tratá-las como verdade absoluta</label>
            <label class="mini-card"><input type="checkbox" data-final-skill> Construir e revisar uma prática possível para a vida</label>
          </div>
          <div id="finalSkillFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <h3>10. Desafio integrador — abra o festival</h3>
        <div class="studio-box">
          <strong class="card-title">Gerador de esqueleto do projeto</strong>
          <div class="three-col">
            <label class="mini-card"><strong>Objetivo central</strong><select id="finalGoal" style="width:100%"><option value="participation">Participação</option><option value="autonomy">Autonomia</option><option value="cooperation">Cooperação</option><option value="wellbeing">Bem-estar e movimento</option></select></label>
            <label class="mini-card"><strong>Formato</strong><select id="finalFormat" style="width:100%"><option value="stations">Estações</option><option value="sequence">Sequência corporal</option><option value="game">Jogo adaptável</option><option value="route">Rota de decisão</option></select></label>
            <label class="mini-card"><strong>Evidência</strong><select id="finalEvidence" style="width:100%"><option value="observation">Tentativa × revisão</option><option value="rpe">Esforço/recuperação</option><option value="participation">Participação/decisão</option><option value="reflection">Reflexão final</option></select></label>
          </div>
          <div id="finalPlanFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Projeto final — Movimento que Vale a Pena</strong>
          <p>Em grupo, criem uma experiência de <strong>20 a 30 minutos</strong> que outra equipe consiga realmente experimentar. Ela deve integrar pelo menos <strong>três dimensões diferentes</strong> da 1ª série, por exemplo: jogo + capacidade física + ritmo; esporte + saúde + autonomia; aventura + cooperação + adaptação.</p>
          <p>O projeto precisa conter:</p>
          <ol>
            <li>um problema ou objetivo claro;</li>
            <li>prática corporal real, não apenas explicação;</li>
            <li>progressão ou sequência compreensível;</li>
            <li>uma adaptação que preserve o objetivo;</li>
            <li>regra de segurança e critério de interrupção;</li>
            <li>um Plano B para espaço, clima, material ou participação;</li>
            <li>uma evidência que permita comparar tentativa e revisão;</li>
            <li>uma pergunta final que faça o participante explicar uma decisão;</li>
            <li>nenhum ranking de corpo, peso, aparência ou “talento” como critério central.</li>
          </ol>
          <p>Depois da primeira aplicação, o grupo deve mudar <strong>uma variável</strong> e testar de novo. O projeto só termina quando puder responder: <strong>“o que aprendemos com a experiência que não saberíamos apenas lendo a regra?”</strong></p>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência da 1ª série.</strong><p>Educação Física não é apenas correr, jogar ou decorar benefícios do exercício. É aprender a <strong>perceber, experimentar, decidir, adaptar, analisar e continuar</strong>. A prática vale mais quando você entende o que está fazendo e consegue levar esse conhecimento para situações novas.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Experimentar</span><span>Observar</span><span>Analisar</span><span>Adaptar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();
