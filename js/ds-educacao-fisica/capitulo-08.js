(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function renderRoute(root, mode = 'safe') {
    const svg = $('#adventureRouteSvg', root);
    const out = $('#adventureRouteFeedback', root);
    if (!svg || !out) return;

    const routes = {
      short:{
        path:'M70 190 L155 145 L235 118 L330 62',
        dash:'',
        text:'A rota curta economiza distância, mas passa perto de uma área marcada como piso molhado. Se essa condição existe de verdade, “mais curto” não significa “melhor”.'
      },
      safe:{
        path:'M70 190 L90 85 L210 62 L330 62',
        dash:'',
        text:'A rota alternativa é um pouco maior, mas evita a área molhada e mantém passagem mais ampla. Planejar aventura também é saber escolher uma opção menos direta quando o contexto pede.'
      },
      accessible:{
        path:'M70 190 L95 165 L95 90 L210 62 L330 62',
        dash:'7 6',
        text:'A rota acessível prioriza superfície regular e evita o trecho com degrau. Em uma atividade coletiva, acessibilidade precisa entrar no planejamento antes da largada, não como correção improvisada depois.'
      }
    };
    const r = routes[mode] || routes.safe;

    svg.innerHTML = `
      <rect x="5" y="5" width="390" height="230" rx="16" fill="#f7fbfa" stroke="#b8dacf" stroke-width="2"/>
      <rect x="210" y="105" width="86" height="58" rx="8" fill="#dbeafe" stroke="#5b8db8"/>
      <text x="253" y="136" text-anchor="middle" font-size="11" fill="#315f7d">piso molhado</text>
      <rect x="118" y="55" width="38" height="72" rx="6" fill="#f3e8ff" stroke="#8b5fa3"/>
      <text x="137" y="93" text-anchor="middle" font-size="10" fill="#6d3f80" transform="rotate(-90 137 93)">degrau</text>
      <rect x="305" y="35" width="56" height="54" rx="9" fill="#dcfce7" stroke="#4f8b66"/>
      <text x="333" y="66" text-anchor="middle" font-size="10" fill="#346044">P5</text>
      <circle cx="70" cy="190" r="15" fill="#1f6f5c"/><text x="70" y="194" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">INÍCIO</text>
      <circle cx="330" cy="62" r="14" fill="#d97706"/><text x="330" y="66" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">P5</text>
      <path d="${r.path}" fill="none" stroke="#1f6f5c" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${r.dash}"/>
      <text x="198" y="218" text-anchor="middle" font-size="10" fill="#56665f">mapa simplificado: não representa uma escola real</text>`;

    out.innerHTML = `<strong>Leitura da rota:</strong><p>${r.text}</p><p>Uma decisão segura depende das condições reais do dia. O mapa ajuda a pensar, mas nunca substitui observar o ambiente antes e durante a atividade.</p>`;
  }

  function updateRiskLab(root) {
    const surface = $('#riskSurface', root)?.value || 'dry';
    const flow = $('#riskFlow', root)?.value || 'low';
    const weather = $('#riskWeather', root)?.value || 'stable';
    const out = $('#riskFeedback', root);
    if (!out) return;

    const flags = [];
    if (surface === 'wet') flags.push('há piso molhado ou escorregadio');
    if (surface === 'uneven') flags.push('há irregularidade no piso');
    if (flow === 'high') flags.push('há muita circulação de pessoas');
    if (weather === 'heat') flags.push('há calor intenso ou exposição ao sol');
    if (weather === 'rain') flags.push('há chuva ou possibilidade de mudança rápida das condições');

    if (!flags.length) {
      out.innerHTML = '<strong>Condições favoráveis não significam risco zero.</strong><p>O grupo ainda precisa verificar rota, regras, acessibilidade, comunicação e pontos de parada. Segurança não é um selo permanente: depende do que realmente está acontecendo.</p>';
      return;
    }

    out.innerHTML = `<strong>Antes de iniciar, revise o plano.</strong><p>${flags.join('; ')}.</p><p>A resposta não é “ser corajoso”: pode ser mudar a rota, reduzir velocidade, adiar a atividade, criar sombra/pausa, isolar um trecho ou simplesmente não usar aquele espaço.</p>`;
  }

  function updateCheckpoint(root) {
    const skill = $('#checkpointSkill', root)?.value || 'observe';
    const out = $('#checkpointFeedback', root);
    if (!out) return;

    const ideas = {
      observe:'No ponto, o grupo identifica duas características do ambiente que influenciam a rota: piso, largura, fluxo, sombra, sinalização ou obstáculo.',
      decide:'No ponto, o grupo recebe duas rotas possíveis e precisa justificar qual escolheria com base nas condições observadas.',
      orient:'No ponto, o grupo usa um mapa simples para identificar onde está, para onde precisa ir e qual referência física confirma sua posição.',
      care:'No ponto, o grupo registra uma ação de cuidado com o espaço: não bloquear passagem, não danificar vegetação, recolher material usado ou respeitar área restrita.'
    };
    out.innerHTML = `<strong>Missão do checkpoint:</strong><p>${ideas[skill]}</p><p>O ponto de controle deve produzir <strong>observação e decisão</strong>, não apenas “cheguei primeiro”.</p>`;
  }

  function init(root) {
    $$('[data-adventure-route]', root).forEach(button => {
      button.addEventListener('click', () => renderRoute(root, button.dataset.adventureRoute));
    });
    renderRoute(root, 'safe');

    ['riskSurface','riskFlow','riskWeather'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updateRiskLab(root));
    });
    updateRiskLab(root);

    $('#checkpointSkill', root)?.addEventListener('change', () => updateCheckpoint(root));
    updateCheckpoint(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Práticas corporais de aventura',
      technical:'aventura • risco controlado • perigo • ambiente • orientação • rota • tomada de decisão • segurança • acessibilidade • impacto ambiental',
      title:'08 — Risco, ambiente e decisão',
      objective:'<strong>Objetivo:</strong> compreender práticas corporais de aventura como experiências de desafio e imprevisibilidade que exigem leitura do ambiente, planejamento e controle de riscos, vivenciando uma proposta escolar segura de orientação e tomada de decisão.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Aventura não é imprudência</span>
          <div class="hero-box">
            <strong class="card-title">A escola quer montar um “Circuito de Aventura”. Logo aparecem ideias: correr nas escadas, pular um muro baixo, fazer a rota mais rápido possível.</strong>
            <p>O nome parece empolgante, mas há um problema: desafio não precisa nascer de exposição desnecessária ao perigo. Aventura também pode estar em <strong>ler um ambiente, escolher uma rota, lidar com informação incompleta e decidir quando mudar o plano</strong>.</p>
            <p>A missão da turma será construir uma <strong>Rota de Decisão</strong> dentro de uma área segura da escola: caminhada, mapa simples, checkpoints e escolhas justificadas.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como criar desafio e imprevisibilidade sem transformar risco em irresponsabilidade?</p>
          </div>
        </section>

        <div class="ef-tags"><span>aventura</span><span>ambiente</span><span>rota</span><span>risco</span><span>decisão</span><span>orientação</span><span>cuidado</span></div>

        <h3>1. O desafio vem da relação com o ambiente</h3>
        <p>Práticas corporais de aventura podem acontecer na cidade ou na natureza. O que elas têm em comum é que o ambiente cria <strong>incertezas e problemas de decisão</strong>: terreno, obstáculos, clima, direção, distância, velocidade, equipamentos e outras pessoas podem modificar a experiência.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Desafio</strong><p>Algo que exige atenção, planejamento, adaptação ou domínio corporal. Não precisa envolver grande perigo.</p></div>
          <div class="mini-card"><strong>Perigo</strong><p>Uma fonte capaz de causar dano: piso escorregadio, veículo em circulação, altura sem proteção, calor intenso ou equipamento inadequado.</p></div>
          <div class="mini-card"><strong>Risco</strong><p>Depende da exposição ao perigo e das condições concretas da situação. Ele pode mudar mesmo no mesmo lugar.</p></div>
          <div class="mini-card"><strong>Controle</strong><p>Planejar, adaptar, usar limites, equipamentos e supervisão adequados — ou decidir não realizar a atividade.</p></div>
        </div>

        ${choice('1','Aventura e risco','Uma atividade ficou mais perigosa porque começou a chover e o piso ficou liso. Qual decisão demonstra melhor gestão de risco?',[
          ['a','Continuar igual para provar coragem'],
          ['b','Reavaliar a rota e mudar, interromper ou adiar a prática se as condições deixaram de ser adequadas'],
          ['c','Aumentar a velocidade para terminar antes']
        ],'b','Correto. A condição mudou; o plano também pode precisar mudar.','Gestão de risco exige observar o ambiente continuamente. O plano inicial não vale mais que a realidade.')}

        <h3>2. Orientação transforma espaço em problema de decisão</h3>
        <div class="two-col">
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Orienteering_checkpoint.jpg?width=900" alt="Posto de controle de orientação com marcador branco e laranja em ambiente externo." style="display:block;width:100%;max-height:360px;object-fit:cover;border-radius:10px">
            <figcaption><strong class="card-title">Checkpoint de orientação</strong><p>Um posto de controle não serve apenas para marcar passagem. Ele conecta mapa, posição real, rota escolhida e decisão do participante.</p><p><a href="https://commons.wikimedia.org/wiki/File:Orienteering_checkpoint.jpg" target="_blank" rel="noopener noreferrer">Eirik U. Birkeland • CC BY-SA 3.0 • Wikimedia Commons</a></p></figcaption>
          </figure>
          <div class="source-box"><strong class="card-title">Na escola, vamos reconstruir a ideia</strong><p>Não precisamos de floresta nem competição oficial. Podemos usar cartões numerados em locais previamente verificados, um mapa simplificado e caminhada. O desafio será <strong>orientar-se, observar condições e justificar escolhas</strong>.</p><p>A BNCC admite que práticas de aventura sejam adaptadas às condições da escola e realizadas de forma simulada, respeitando o contexto e as possibilidades materiais.</p></div>
        </div>

        <h3>3. O caminho mais curto pode não ser o melhor</h3>
        <div class="studio-box">
          <strong class="card-title">Mapa de decisão</strong>
          <p>Compare três possibilidades. O desenho é propositalmente simples: queremos analisar critérios, não aprender cartografia técnica.</p>
          <div class="choice-row"><button type="button" data-adventure-route="short">Rota curta</button><button type="button" data-adventure-route="safe">Rota alternativa</button><button type="button" data-adventure-route="accessible">Rota acessível</button></div>
          <svg id="adventureRouteSvg" viewBox="0 0 400 240" role="img" aria-label="Mapa simplificado com rotas diferentes, piso molhado e trecho com degrau" style="width:100%;max-width:720px;height:auto;display:block;margin:12px auto"></svg>
          <div id="adventureRouteFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${choice('2','Escolha de rota','Duas rotas chegam ao mesmo ponto. A mais curta passa por um piso molhado; a outra é um pouco maior e está seca. O que deve orientar a escolha?',[
          ['a','Somente a distância'],
          ['b','As condições reais, o grupo, a acessibilidade e o objetivo da atividade'],
          ['c','Sempre escolher a rota mais difícil']
        ],'b','Isso. Aventura escolar não é competição para descobrir quem aceita mais risco.','Distância é apenas uma variável. Segurança, acessibilidade, fluxo e condições do ambiente também entram na decisão.')}

        <h3>4. Antes de sair: faça uma leitura do ambiente</h3>
        <div class="studio-box">
          <strong class="card-title">Leitura rápida de condições</strong>
          <div class="three-col">
            <label class="mini-card"><strong>Piso</strong><select id="riskSurface" style="width:100%"><option value="dry">Seco e regular</option><option value="wet">Molhado / escorregadio</option><option value="uneven">Irregular</option></select></label>
            <label class="mini-card"><strong>Fluxo</strong><select id="riskFlow" style="width:100%"><option value="low">Pouca circulação</option><option value="high">Muita circulação</option></select></label>
            <label class="mini-card"><strong>Condição ambiental</strong><select id="riskWeather" style="width:100%"><option value="stable">Estável</option><option value="heat">Calor / sol intenso</option><option value="rain">Chuva / mudança rápida</option></select></label>
          </div>
          <div id="riskFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="note-box"><strong>Não existe “nota automática de risco” que resolva tudo.</strong><p>Uma matriz pode ajudar a conversar, mas contexto importa. Um piso irregular pode ser irrelevante para uma caminhada muito controlada e impeditivo para outra tarefa. A decisão precisa considerar <strong>quem participa, como participa e em quais condições</strong>.</p></div>

        <h3>5. Experiência prática — micro-orientação na escola</h3>
        <div class="safety-box"><strong>Somente em área previamente vistoriada e autorizada.</strong><p>Sem correr, escalar, saltar corrimões, atravessar ruas, entrar em áreas de veículos, subir estruturas, acessar locais restritos ou improvisar obstáculos. O professor define limites visíveis e interrompe a prática se as condições mudarem.</p></div>

        <div class="practice-box">
          <strong class="card-title">Rota de Decisão — 4 ou 5 checkpoints</strong>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Leia o mapa</strong><p>Localize início, limites da área e primeiro ponto. Antes de andar, diga qual referência real pretende procurar.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Caminhe e confirme</strong><p>Desloque-se em grupo pequeno, sem corrida. Compare mapa e ambiente: corredor, árvore, quadra, banco ou outro marco autorizado.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>Resolva o ponto</strong><p>No checkpoint, execute uma tarefa de observação ou decisão — não um desafio de risco.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Revise a rota</strong><p>Se aparecer obstáculo, fluxo de pessoas ou condição diferente, pare e decida se vale adaptar o caminho.</p></div>
          </div>
        </div>

        <p>O objetivo não é terminar primeiro. É conseguir responder: <strong>“como sabíamos onde estávamos e por que escolhemos este caminho?”</strong></p>

        <h3>6. Um checkpoint precisa exigir leitura, não velocidade</h3>
        <div class="studio-box">
          <strong class="card-title">Construtor de checkpoint</strong>
          <label class="mini-card"><strong>Qual habilidade será exigida?</strong><select id="checkpointSkill" style="width:100%"><option value="observe">Observar o ambiente</option><option value="decide">Escolher entre rotas</option><option value="orient">Orientar-se pelo mapa</option><option value="care">Cuidar do espaço</option></select></label>
          <div id="checkpointFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <h3>7. Aventura também envolve ambiente e acesso</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Impacto</strong><p>Uma prática pode degradar trilhas, vegetação, mobiliário ou espaço público se o grupo não respeitar limites e descarte de materiais.</p></div>
          <div class="mini-card"><strong>Acesso</strong><p>Equipamentos, deslocamento e locais especializados podem excluir pessoas. A escola pode recriar experiências com baixo custo e objetivos equivalentes.</p></div>
          <div class="mini-card"><strong>Acessibilidade</strong><p>Rota, piso, distância e tarefas devem permitir adaptações. Uma atividade não é inclusiva apenas porque oferece “outra coisa” a quem não consegue seguir o percurso principal.</p></div>
          <div class="mini-card"><strong>Responsabilidade coletiva</strong><p>O grupo cuida do próprio movimento, dos colegas, das pessoas que circulam e do lugar onde a prática acontece.</p></div>
        </div>

        ${choice('3','Aventura e ambiente','Durante a rota, um atalho atravessa um jardim delimitado. Qual é a melhor decisão?',[
          ['a','Usar o atalho porque aventura permite sair das regras'],
          ['b','Manter-se nas áreas autorizadas e escolher outra rota'],
          ['c','Passar correndo para reduzir o impacto']
        ],'b','Correto. A prática corporal não justifica degradar ou invadir uma área protegida ou restrita.','Cuidar do ambiente faz parte da qualidade da prática, não é um tema separado.')}

        <h3>8. Volte à missão: crie a Rota de Decisão</h3>
        <div class="challenge-box">
          <strong class="card-title">Projeto final — uma aventura escolar que vale a pena</strong>
          <p>Em grupo, planejem uma rota curta com 4 ou 5 checkpoints dentro de área autorizada. O plano precisa incluir:</p>
          <ol>
            <li>um mapa simples com início, fim, limites e pontos;</li>
            <li>uma vistoria do espaço antes da prática;</li>
            <li>um critério de acessibilidade da rota;</li>
            <li>pelo menos duas decisões reais de percurso ou observação;</li>
            <li>um sinal de parada e um ponto de encontro;</li>
            <li>uma regra ambiental e de convivência;</li>
            <li>uma alternativa caso chuva, calor, fluxo de pessoas ou outra condição torne o plano inadequado.</li>
          </ol>
          <p>Outra equipe lê o plano antes de realizá-lo e responde: <strong>“onde está o desafio? Onde está o risco? O que foi feito para controlar esse risco?”</strong>. Se essas respostas não estiverem claras, o percurso deve ser redesenhado.</p>
        </div>

        <div class="source-box"><strong class="card-title">Por que ensinar aventura assim?</strong><p>Materiais da BNCC destacam que práticas corporais de aventura envolvem ambientes desafiadores e risco controlado e podem ser reconstruídas conforme as possibilidades materiais da escola. Uma experiência de implementação no Ensino Médio cita corrida de orientação, slackline, parkour e escalada, articulando as vivências a preservação ambiental, acesso e autoconhecimento.</p><p><a href="https://basenacionalcomum.mec.gov.br/implementacao/praticas/caderno-de-praticas/ensino-medio/84-vivendo-a-cultura-corporal-de-movimento-no-ensino-medio" target="_blank" rel="noopener noreferrer">BNCC • Vivendo a cultura corporal de movimento no Ensino Médio</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Aventura não é procurar perigo. É enfrentar um desafio em que <strong>ambiente, incerteza, percepção e decisão</strong> importam. Na escola, aprender a observar, planejar, adaptar e até cancelar uma rota pode ser mais educativo do que realizar uma manobra arriscada.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Observar</span><span>Planejar</span><span>Experimentar</span><span>Decidir</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('08 Risco', showChapter);
})();
