(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function renderBalanceBase(root, mode='wide') {
    const svg = $('#balanceBaseSvg', root);
    const out = $('#balanceBaseFeedback', root);
    if (!svg || !out) return;

    const setups = {
      wide:{left:[145,185],right:[255,185],zone:[115,160,170,55],label:'base mais ampla',note:'Com os pés mais separados, a base de apoio costuma oferecer mais margem para manter o centro do corpo dentro de uma região estável.'},
      narrow:{left:[185,185],right:[225,185],zone:[165,160,80,55],label:'base mais estreita',note:'Aproximar os pés reduz a base de apoio e pode aumentar a exigência de controle. Isso não significa automaticamente que seja “melhor”.'},
      tandem:{left:[190,195],right:[210,155],zone:[175,140,50,80],label:'pés quase em linha',note:'Colocar um pé mais à frente do outro cria outro desafio de equilíbrio. Use apoio próximo e não feche os olhos nesta experiência escolar.'}
    };
    const s = setups[mode] || setups.wide;
    svg.innerHTML = `
      <rect x="5" y="5" width="390" height="235" rx="14" fill="#f7fbfa" stroke="#b8dacf" stroke-width="2"/>
      <rect x="${s.zone[0]}" y="${s.zone[1]}" width="${s.zone[2]}" height="${s.zone[3]}" rx="12" fill="#dcefe8" stroke="#77aa98" stroke-dasharray="7 5"/>
      <line x1="200" y1="70" x2="200" y2="160" stroke="#1f6f5c" stroke-width="7" stroke-linecap="round"/>
      <circle cx="200" cy="48" r="20" fill="#1f6f5c"/>
      <line x1="200" y1="100" x2="160" y2="125" stroke="#1f6f5c" stroke-width="6" stroke-linecap="round"/>
      <line x1="200" y1="100" x2="240" y2="125" stroke="#1f6f5c" stroke-width="6" stroke-linecap="round"/>
      <line x1="200" y1="158" x2="${s.left[0]}" y2="${s.left[1]}" stroke="#1f6f5c" stroke-width="7" stroke-linecap="round"/>
      <line x1="200" y1="158" x2="${s.right[0]}" y2="${s.right[1]}" stroke="#1f6f5c" stroke-width="7" stroke-linecap="round"/>
      <circle cx="200" cy="120" r="6" fill="#d97706"/>
      <text x="200" y="225" text-anchor="middle" font-size="12" fill="#56665f">diagrama simplificado de base de apoio</text>`;
    out.innerHTML = `<strong>${s.label}</strong><p>${s.note}</p><p>O desenho serve para visualizar uma relação mecânica simples; equilíbrio real também depende de visão, sistema vestibular, informações dos músculos e articulações, atenção e experiência.</p>`;
  }

  function updateProgression(root) {
    const capacity = $('#progressCapacity', root)?.value || 'strength';
    const variable = $('#progressVariable', root)?.value || 'control';
    const out = $('#progressFeedback', root);
    if (!out) return;

    const capacities = {
      strength:'força',
      mobility:'mobilidade',
      balance:'equilíbrio',
      coordination:'coordenação'
    };
    const variables = {
      control:'manter a tarefa igual e buscar execução mais controlada e repetível',
      range:'aumentar discretamente a amplitude somente se continuar confortável e estável',
      time:'aumentar um pouco o tempo de prática sem transformar a estação em exaustão',
      complexity:'acrescentar uma pequena exigência de atenção ou sequência, preservando segurança'
    };

    out.innerHTML = `<strong>Progressão para ${capacities[capacity]}:</strong><p>${variables[variable]}.</p><p><strong>Regra MbB:</strong> progressão não é “deixar tudo mais difícil”. É alterar uma variável, observar a resposta e decidir se a mudança melhora a aprendizagem.</p>`;
  }

  function updateCircuit(root) {
    const duration = Number($('#circuitDuration', root)?.value || 20);
    const rounds = Number($('#circuitRounds', root)?.value || 1);
    const transition = 15;
    const active = duration * 4 * rounds;
    const transitions = transition * 3 * rounds;
    const total = active + transitions;
    const min = Math.floor(total / 60);
    const sec = total % 60;
    const out = $('#circuitFeedback', root);
    if (!out) return;

    out.innerHTML = `<strong>Circuito estimado: ${min} min ${String(sec).padStart(2,'0')} s.</strong><p>${rounds} volta(s), quatro estações de ${duration} s e transições aproximadas de ${transition} s.</p><p>O tempo é apenas organização. A turma deve reduzir, adaptar ou interromper qualquer tarefa que provoque dor, tontura, desconforto incomum ou perda clara de controle.</p>`;
  }

  function init(root) {
    $$('[data-balance-base]', root).forEach(button => {
      button.addEventListener('click', () => renderBalanceBase(root, button.dataset.balanceBase));
    });
    renderBalanceBase(root, 'wide');

    $('#progressCapacity', root)?.addEventListener('change', () => updateProgression(root));
    $('#progressVariable', root)?.addEventListener('change', () => updateProgression(root));
    updateProgression(root);

    $('#circuitDuration', root)?.addEventListener('change', () => updateCircuit(root));
    $('#circuitRounds', root)?.addEventListener('change', () => updateCircuit(root));
    updateCircuit(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Ginástica',
      technical:'força • mobilidade • equilíbrio • coordenação • controle motor • progressão • adaptação • prática corporal',
      title:'05 — Força, mobilidade, equilíbrio e coordenação',
      objective:'<strong>Objetivo:</strong> experimentar capacidades físicas diferentes, reconhecer como elas aparecem em tarefas cotidianas e práticas corporais e aprender a montar uma sequência curta, segura, progressiva e adaptável sem transformar a aula em teste de desempenho.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Um circuito que tenha motivo</span>
          <div class="hero-box">
            <strong class="card-title">Depois de várias aulas sentado, a turma quer criar um circuito curto para o intervalo. Alguém sugere: “faz umas flexões”. Outro responde: “é só alongar”.</strong>
            <p>Mas levantar de uma cadeira, alcançar um objeto, estabilizar-se numa mudança de direção e combinar braços e pernas são problemas corporais diferentes. Um único exercício não resolve tudo — e “fazer qualquer movimento” não ensina por que ele está ali.</p>
            <p>A missão da turma será construir um <strong>Circuito das Quatro Capacidades</strong>: cada estação precisa ter um objetivo claro, uma versão acessível e uma forma simples de perceber se o movimento está sob controle.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como escolher e progredir exercícios quando o objetivo é aprender a usar melhor o corpo — e não apenas cansar?</p>
          </div>
        </section>

        <div class="ef-tags"><span>força</span><span>mobilidade</span><span>equilíbrio</span><span>coordenação</span><span>controle</span><span>progressão</span></div>

        <h3>1. Capacidades diferentes resolvem problemas diferentes</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Força</strong><p>Produzir tensão para empurrar, puxar, sustentar, levantar ou controlar o próprio corpo e outros objetos.</p></div>
          <div class="mini-card"><strong>Mobilidade</strong><p>Usar articulações em amplitudes adequadas à tarefa com controle. Não é simplesmente “ser flexível”.</p></div>
          <div class="mini-card"><strong>Equilíbrio</strong><p>Controlar a posição do corpo parado ou em movimento diante de mudanças de apoio, direção e ambiente.</p></div>
          <div class="mini-card"><strong>Coordenação</strong><p>Organizar movimentos no espaço e no tempo: combinar segmentos, ritmo, direção e sequência para cumprir uma tarefa.</p></div>
        </div>

        <div class="note-box"><strong>Na vida real, elas aparecem misturadas.</strong><p>Levantar do chão pode exigir força, mobilidade, equilíbrio e coordenação ao mesmo tempo. Separar as capacidades na aula é uma estratégia para <strong>observar melhor cada relação</strong>, não para dizer que o corpo funciona em quatro gavetas.</p></div>

        ${choice('1','Capacidade não é rótulo','Levantar de uma cadeira exige principalmente força das pernas, mas pode também envolver equilíbrio e coordenação. O que isso mostra?',[
          ['a','As capacidades podem participar juntas de uma mesma tarefa'],
          ['b','Só uma capacidade pode existir de cada vez'],
          ['c','Capacidades físicas só aparecem em esportes competitivos']
        ],'a','Isso. O corpo resolve tarefas combinando capacidades em proporções diferentes.','Use as categorias para observar e planejar; não para separar artificialmente tudo o que o corpo faz.')}

        <h3>2. Antes de fazer: segurança, controle e escolha</h3>
        <div class="safety-box">
          <strong>Este capítulo não é teste máximo.</strong>
          <p>Use espaço livre, cadeira firme encostada quando necessário e parede estável para apoio. Faça movimentos confortáveis, sem prender a respiração de propósito, sem carga máxima e sem competir por número de repetições. Dor forte, tontura, sensação de desmaio, desconforto no peito ou falta de ar incomum são sinais para interromper e avisar o professor ou responsável. Orientações individuais da escola e de profissionais de saúde devem ser respeitadas.</p>
        </div>

        <p>Para adolescentes, atividades que fortalecem músculos e ossos fazem parte das recomendações de atividade física. A ideia, porém, é <strong>progressão adequada, variedade e oportunidade segura</strong>, não transformar a aula em treinamento de alto rendimento.</p>

        <h3>3. Estação de força — controlar o corpo contra uma resistência</h3>
        <div class="practice-box">
          <strong class="card-title">Escolha uma versão: sentar e levantar OU empurrar a parede</strong>
          <div class="move-options">
            <div class="move-option"><strong>A — sentar e levantar</strong><small>Use uma cadeira firme. Levante-se e sente-se de modo controlado, com os pés apoiados. Use as mãos como apoio se precisar.</small></div>
            <div class="move-option"><strong>B — empurrar a parede</strong><small>Com as mãos apoiadas numa parede estável, flexione e estenda os braços em pequena amplitude confortável, mantendo o corpo controlado.</small></div>
            <div class="move-option"><strong>C — versão assistida</strong><small>Reduza amplitude, ritmo ou tempo e use apoio adicional. O objetivo é produzir força com controle, não provar independência.</small></div>
          </div>
          <p><strong>Experimente por 20 segundos</strong> em ritmo confortável. Depois responda: onde você percebeu produção de força? Conseguiu manter o mesmo padrão do início ao fim?</p>
        </div>

        ${choice('2','Força com sentido','Por que contar o máximo de repetições em 20 segundos não é necessário nesta experiência?',[
          ['a','Porque o objetivo é perceber produção de força, controle e possibilidade de progressão, não criar um ranking'],
          ['b','Porque força nunca pode ser treinada por adolescentes'],
          ['c','Porque quantidade nunca pode ser registrada em Educação Física']
        ],'a','Correto. Podemos registrar repetições em outros contextos, mas aqui o critério principal é compreender e controlar a tarefa.','A pergunta vem antes da medida: o que estamos tentando aprender com esta estação?')}

        <h3>4. Estação de mobilidade — amplitude útil, não disputa de alongamento</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência: alcance controlado dos braços</strong>
          <ol>
            <li>Em pé ou sentado, mantenha uma posição confortável.</li>
            <li>Eleve os braços à frente e para cima até onde o movimento continuar confortável e controlado.</li>
            <li>Volte devagar.</li>
            <li>Repita algumas vezes percebendo se você precisa compensar com dor, impulso ou tensão excessiva.</li>
          </ol>
          <p>A questão não é “quem chega mais longe”. Mobilidade útil depende da tarefa, das articulações envolvidas e do controle disponível.</p>
        </div>

        <div class="note-box"><strong>Mobilidade ≠ alongamento forçado.</strong><p>Alongamentos podem fazer parte de algumas práticas, mas amplitude máxima e dor não são metas educativas. Neste capítulo, mobilidade significa explorar movimento articular confortável e funcional para a tarefa.</p></div>

        <h3>5. Estação de equilíbrio — a base de apoio muda o problema</h3>
        <div class="studio-box">
          <strong class="card-title">Diagrama de base de apoio</strong>
          <p>Observe antes de experimentar. Depois faça somente as versões indicadas pelo professor, com parede ou cadeira firme ao alcance.</p>
          <div class="choice-row"><button type="button" data-balance-base="wide">Pés mais afastados</button><button type="button" data-balance-base="narrow">Pés próximos</button><button type="button" data-balance-base="tandem">Um à frente do outro</button></div>
          <svg id="balanceBaseSvg" viewBox="0 0 400 245" role="img" aria-label="Diagrama simplificado mostrando diferentes bases de apoio para equilíbrio" style="width:100%;max-width:680px;height:auto;display:block;margin:12px auto"></svg>
          <div id="balanceBaseFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <div class="practice-box">
          <strong class="card-title">Experiência: três bases, sem fechar os olhos</strong>
          <p>Com apoio estável próximo, fique aproximadamente 15–20 segundos com pés confortavelmente afastados. Depois aproxime um pouco os pés. Se estiver seguro e o professor autorizar, coloque um pé um pouco à frente do outro. <strong>Não é preciso ficar sobre um pé só.</strong></p>
          <p>O que muda na quantidade de ajustes que você sente fazer? Qual base permite mais controle?</p>
        </div>

        ${choice('3','Equilíbrio e dificuldade','Se aproximar os pés torna a tarefa mais instável, devemos sempre usar a base mais difícil?',[
          ['a','Não. A dificuldade deve servir ao objetivo e permanecer segura e controlável'],
          ['b','Sim. Mais difícil é sempre melhor'],
          ['c','Sim, desde que ninguém use apoio']
        ],'a','Isso. Progressão só tem valor quando mantém propósito, segurança e possibilidade real de aprendizagem.','Dificuldade não é objetivo por si só.')}

        <h3>6. Estação de coordenação — organizar sequência e ritmo</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência: toque cruzado progressivo</strong>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Comece simples</strong><p>Toque a mão direita na coxa direita e a esquerda na coxa esquerda, alternando devagar.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Cruze</strong><p>Direita toca a coxa esquerda; esquerda toca a direita. Faça devagar até encontrar uma sequência.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>Adicione ritmo</strong><p>Use uma contagem 1–2–3–4 e tente manter regularidade, sem acelerar demais.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Adapte</strong><p>Pode ser feito sentado, com menor amplitude ou apenas com as mãos. O desafio é organizar a sequência.</p></div>
          </div>
        </div>

        <p>Coordenação melhora quando o problema está <strong>difícil o suficiente para exigir atenção, mas simples o bastante para permitir tentativas com algum sucesso</strong>. Errar faz parte da informação que o corpo usa para reorganizar a sequência.</p>

        <h3>7. Progressão não significa “sofrer mais”</h3>
        <div class="studio-box">
          <strong class="card-title">Laboratório de progressão</strong>
          <p>Escolha uma capacidade e uma variável. O objetivo é pensar como alterar a experiência sem transformar tudo ao mesmo tempo.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Capacidade</strong><select id="progressCapacity" style="width:100%"><option value="strength">Força</option><option value="mobility">Mobilidade</option><option value="balance">Equilíbrio</option><option value="coordination">Coordenação</option></select></label>
            <label class="mini-card"><strong>Variável</strong><select id="progressVariable" style="width:100%"><option value="control">Controle</option><option value="range">Amplitude</option><option value="time">Tempo</option><option value="complexity">Complexidade</option></select></label>
          </div>
          <div id="progressFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Primeiro</strong><p>Consigo compreender a tarefa e realizá-la de modo seguro?</p></div>
          <div class="mini-card"><strong>Depois</strong><p>Consigo repetir com algum controle e perceber o que estou fazendo?</p></div>
          <div class="mini-card"><strong>Então</strong><p>Qual única variável vale modificar?</p></div>
          <div class="mini-card"><strong>Por fim</strong><p>A mudança melhorou aprendizagem ou só tornou tudo mais difícil?</p></div>
        </div>

        <h3>8. Volte à missão: monte o Circuito das Quatro Capacidades</h3>
        <div class="studio-box">
          <strong class="card-title">Planejador rápido do circuito</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Tempo por estação</strong><select id="circuitDuration" style="width:100%"><option value="20">20 segundos</option><option value="30">30 segundos</option><option value="40">40 segundos</option></select></label>
            <label class="mini-card"><strong>Voltas</strong><select id="circuitRounds" style="width:100%"><option value="1">1 volta</option><option value="2">2 voltas</option></select></label>
          </div>
          <div id="circuitFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Aplicação — circuito para um intervalo escolar</strong>
          <p>Em grupo, montem quatro estações curtas:</p>
          <ol>
            <li><strong>força:</strong> sentar/levantar ou empurrar a parede;</li>
            <li><strong>mobilidade:</strong> alcance controlado ou outra proposta confortável definida pelo professor;</li>
            <li><strong>equilíbrio:</strong> mudança simples de base com apoio próximo;</li>
            <li><strong>coordenação:</strong> sequência cruzada, ritmo ou tarefa equivalente.</li>
          </ol>
          <p>Cada estação precisa ter: objetivo em uma frase, versão principal, adaptação mais simples, regra de segurança e uma pergunta de observação. Outra dupla experimenta e responde: <strong>“entendi o que esta estação queria desenvolver ou apenas fiz o movimento?”</strong></p>
        </div>

        <h3>9. E depois da escola?</h3>
        <p>Força, mobilidade, equilíbrio e coordenação aparecem em esportes, dança, lutas, lazer e também em tarefas comuns. A contribuição mais importante deste capítulo não é entregar uma “rotina perfeita”, mas ensinar um raciocínio que o aluno possa levar para outras práticas: <strong>qual é meu objetivo → qual tarefa combina com ele → como começo → o que observo → como progrido?</strong></p>

        <div class="source-box"><strong class="card-title">Referências para aprofundar</strong><p>A Organização Mundial da Saúde recomenda atividade física variada para crianças e adolescentes e inclui atividades que fortaleçam músculos e ossos. A orientação também destaca começar com quantidades menores e progredir gradualmente. Materiais do American College of Sports Medicine apontam que treinamento de resistência pode integrar programas para jovens quando há planejamento, técnica correta e supervisão adequada.</p><p><a href="https://www.who.int/publications/i/item/9789240015128" target="_blank" rel="noopener noreferrer">OMS • Diretrizes de atividade física e comportamento sedentário</a> · <a href="https://www.acsm.org/wp-content/uploads/2025/02/NYSHSI-Youth-Resistance-Training-PDF.pdf" target="_blank" rel="noopener noreferrer">ACSM • Youth Resistance Training</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Ginástica escolar não precisa ser série de exercícios aleatórios nem treino para exaustão. Ela pode ensinar o aluno a <strong>reconhecer capacidades físicas, experimentar tarefas, adaptar movimentos, observar controle e progredir com propósito</strong>. O circuito final só faz sentido se cada estação conseguir responder: “por que estamos fazendo isto?”</p></div>
          <div class="ef-tags"><span>Entender</span><span>Experimentar</span><span>Observar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('05 Força', showChapter);
})();
