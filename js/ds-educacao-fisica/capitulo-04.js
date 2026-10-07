(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function renderTacticalBoard(root, mode='support') {
    const svg = $('#collectiveBoard', root);
    const out = $('#collectiveBoardFeedback', root);
    if (!svg || !out) return;

    const setups = {
      cluster:{
        attackers:[[210,135],[250,115],[260,165]], defenders:[[300,130],[305,175]], ball:[210,135],
        lines:[[210,135,250,115],[210,135,260,165]],
        text:'Os três atacantes ocupam quase a mesma região. Há passes curtos, mas poucos ângulos e pouco espaço para obrigar a defesa a se deslocar.'
      },
      width:{
        attackers:[[105,140],[245,70],[360,165]], defenders:[[245,135],[315,120]], ball:[105,140],
        lines:[[105,140,245,70],[105,140,360,165]],
        text:'A equipe usa largura e profundidade. A defesa precisa escolher o que proteger, e aparecem linhas de passe diferentes.'
      },
      support:{
        attackers:[[120,150],[235,90],[300,190]], defenders:[[225,150],[335,120]], ball:[120,150],
        lines:[[120,150,235,90],[120,150,300,190],[235,90,300,190]],
        text:'Quem está sem a bola oferece apoios em ângulos diferentes. O portador pode decidir entre mais de uma solução e, depois do passe, precisa voltar a criar espaço.'
      },
      transition:{
        attackers:[[145,95],[250,135],[360,190]], defenders:[[195,165],[330,105]], ball:[250,135],
        lines:[[250,135,145,95],[250,135,360,190]],
        text:'Após recuperar a posse, a equipe precisa perceber rapidamente quem oferece apoio, quem dá profundidade e onde a defesa ainda está desorganizada. Se perder a bola, a lógica se inverte.'
      }
    };

    const s = setups[mode] || setups.support;
    const attackerSvg = s.attackers.map((p,i) => `<circle cx="${p[0]}" cy="${p[1]}" r="19" fill="#1f6f5c"/><text x="${p[0]}" y="${p[1]+5}" text-anchor="middle" fill="#fff" font-size="13" font-weight="900">${String.fromCharCode(65+i)}</text>`).join('');
    const defenderSvg = s.defenders.map((p,i) => `<circle cx="${p[0]}" cy="${p[1]}" r="18" fill="#3478a0"/><text x="${p[0]}" y="${p[1]+5}" text-anchor="middle" fill="#fff" font-size="12" font-weight="900">${i+1}</text>`).join('');
    const lineSvg = s.lines.map(l => `<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" stroke="#d97706" stroke-width="4" stroke-dasharray="8 6"/>`).join('');

    svg.innerHTML = `
      <rect x="5" y="5" width="470" height="255" rx="16" fill="#f5faf8" stroke="#b8dacf" stroke-width="2"/>
      <rect x="5" y="5" width="55" height="255" fill="#e8f3ef" opacity=".9"/>
      <rect x="420" y="5" width="55" height="255" fill="#e8f3ef" opacity=".9"/>
      <line x1="240" y1="5" x2="240" y2="260" stroke="#b8dacf" stroke-width="2" stroke-dasharray="7 7"/>
      <text x="32" y="24" text-anchor="middle" font-size="10" fill="#56665f">zona</text>
      <text x="447" y="24" text-anchor="middle" font-size="10" fill="#56665f">zona</text>
      ${lineSvg}${defenderSvg}${attackerSvg}
      <circle cx="${s.ball[0]}" cy="${s.ball[1]}" r="7" fill="#d97706" stroke="#fff" stroke-width="2"/>`;

    out.innerHTML = `<strong>Leitura do quadro:</strong><p>${s.text}</p><p>O desenho é uma hipótese. No jogo real, adversários, colegas e bola se movem o tempo todo; por isso a decisão precisa ser atualizada continuamente.</p>`;
  }

  function updateDecisionLab(root) {
    const situation = $('#decisionSituation', root)?.value || 'pressed';
    const action = $('#decisionAction', root)?.value || 'scan';
    const out = $('#decisionFeedback', root);
    if (!out) return;

    const situations = {
      pressed:'Você recebe a bola e um defensor se aproxima.',
      offball:'Seu colega está com a bola e você está marcado atrás de um adversário.',
      turnover:'Sua equipe acabou de perder a posse.',
      recover:'Sua equipe recuperou a posse e a defesa adversária ainda está se reorganizando.'
    };
    const actions = {
      scan:'Olhar antes e durante a ação ajuda a perceber colegas, adversários, alvo e espaço disponível.',
      support:'Criar apoio significa oferecer uma opção útil de passe em distância e ângulo adequados, e não apenas correr em direção à bola.',
      width:'Abrir o espaço pode afastar defensores e criar novas linhas de passe; abrir sem observar o jogo, porém, também pode deixar o colega isolado.',
      reorganize:'Na transição defensiva, a prioridade costuma ser reorganizar-se entre bola e alvo, comunicar e reduzir espaços perigosos sem fazer contato desnecessário.'
    };

    out.innerHTML = `<strong>Situação:</strong><p>${situations[situation]}</p><strong>Foco escolhido:</strong><p>${actions[action]}</p><p><strong>Teste no jogo:</strong> a escolha resolveu o problema ou criou outro? A resposta depende da posição dos demais jogadores e das regras da modalidade.</p>`;
  }

  function updateTransfer(root) {
    const sport = $('#collectiveSport', root)?.value || 'futsal';
    const out = $('#transferFeedback', root);
    if (!out) return;

    const sports = {
      futsal:{logic:'invasão',common:'criar linhas de passe, apoiar, ocupar largura/profundidade, proteger a meta e reagir às transições',specific:'controle com os pés, passe, condução, finalização e regras próprias do futsal'},
      handball:{logic:'invasão',common:'criar linhas de passe, apoiar, ocupar espaços, atacar uma meta e recompor após perder a posse',specific:'recepção com as mãos, passe, drible, arremesso, passos permitidos e regras próprias do handebol'},
      basketball:{logic:'invasão',common:'criar linhas de passe, ocupar espaços, oferecer apoio, atacar uma cesta e proteger a própria',specific:'passe, recepção, drible, arremesso, pivô e regras próprias do basquetebol'},
      volleyball:{logic:'rede/quadra dividida',common:'ler trajetórias, comunicar, ocupar zonas e antecipar a próxima ação dos colegas',specific:'saque, recepção, levantamento, ataque, bloqueio e a lógica de enviar a bola para o outro lado sem invasão do espaço adversário'},
      peteca:{logic:'rede/quadra dividida',common:'ler trajetória, ocupar espaço e tomar decisões sobre direção, profundidade e recuperação de posição',specific:'golpes próprios, controle da peteca e regras da modalidade'}
    };
    const s = sports[sport];
    out.innerHTML = `<strong>Lógica predominante: ${s.logic}.</strong><p><strong>Princípios que podem transferir:</strong> ${s.common}.</p><p><strong>O que precisa ser aprendido especificamente:</strong> ${s.specific}.</p><p>Transferir um princípio não significa tratar esportes diferentes como se fossem iguais.</p>`;
  }

  function init(root) {
    $$('[data-collective-board]', root).forEach(button => {
      button.addEventListener('click', () => renderTacticalBoard(root, button.dataset.collectiveBoard));
    });
    renderTacticalBoard(root, 'support');

    $('#decisionSituation', root)?.addEventListener('change', () => updateDecisionLab(root));
    $('#decisionAction', root)?.addEventListener('change', () => updateDecisionLab(root));
    updateDecisionLab(root);

    $('#collectiveSport', root)?.addEventListener('change', () => updateTransfer(root));
    updateTransfer(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Esporte',
      technical:'esportes coletivos • fundamento técnico • tática • espaço • apoio • oposição • transição • decisão • cooperação',
      title:'04 — Esportes coletivos: fundamento, espaço e decisão',
      objective:'<strong>Objetivo:</strong> experimentar fundamentos técnicos dentro de situações reais de decisão, compreender como espaço, apoio, oposição e transições organizam esportes coletivos e transferir princípios entre modalidades sem apagar suas diferenças.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Treinar para jogar — jogar para aprender</span>
          <div class="hero-box">
            <strong class="card-title">A turma vai disputar um jogo no interclasses. Nos treinos, alguns alunos ficam passando e chutando sem oposição; quando começa a partida, parecem “esquecer” tudo.</strong>
            <p>O passe que funcionava parado agora precisa acontecer com um marcador aproximando, um colega se deslocando e um alvo para atacar. Quem está sem a bola também precisa decidir: aproximar, abrir, cortar, recuar ou proteger espaço?</p>
            <p>O problema não é abandonar fundamentos. É perceber que <strong>fundamento técnico e decisão precisam se encontrar</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como transformar passe, recepção, condução, arremesso ou finalização em ações que realmente resolvem problemas de jogo?</p>
          </div>
        </section>

        <div class="ef-tags"><span>perceber</span><span>decidir</span><span>executar</span><span>reposicionar</span><span>cooperar</span><span>reagir</span></div>

        <h3>1. “Esporte coletivo” não é uma única coisa</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Invasão ou territorial</strong><p>As equipes compartilham o espaço e tentam avançar até uma meta adversária enquanto protegem a própria. Futsal, futebol, handebol e basquetebol são exemplos.</p></div>
          <div class="mini-card"><strong>Rede ou quadra dividida</strong><p>As equipes ficam separadas e enviam a bola ou objeto para o campo adversário buscando dificultar a devolução. Voleibol e peteca são exemplos.</p></div>
          <div class="mini-card"><strong>Campo e taco</strong><p>Há alternância entre rebater/percorrer e recuperar a bola/impedir avanço. Beisebol e softball são exemplos.</p></div>
          <div class="mini-card"><strong>O que muda?</strong><p>As técnicas específicas e os problemas de decisão dependem da lógica da modalidade. Por isso, não existe uma única “tática de esporte coletivo”.</p></div>
        </div>

        ${choice('1','Lógica do jogo','Futsal e voleibol são coletivos. Por que não podem ser ensinados exatamente pela mesma lógica?',[
          ['a','Porque no futsal há invasão de um espaço compartilhado e, no voleibol, as equipes atuam em quadras separadas pela rede'],
          ['b','Porque apenas o futsal possui regras'],
          ['c','Porque no voleibol não existe tomada de decisão']
        ],'a','Isso. Ambos exigem técnica, comunicação e decisão, mas os problemas criados pelas regras e pelo espaço são diferentes.','Observe onde as equipes podem se deslocar, como o objeto circula e como o ponto é construído.')}

        <h3>2. Fundamento técnico é ferramenta — não exercício isolado para sempre</h3>
        <p>Treinar um gesto sem oposição pode ajudar a perceber partes do movimento. Mas, no jogo, a técnica precisa responder a <strong>tempo, espaço, alvo, colegas e adversários</strong>. Um passe tecnicamente bonito para um colega marcado pode ser uma decisão ruim.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Perceber</strong><p>Antes de agir: onde estão bola, alvo, colegas, adversários e espaços livres?</p></div>
          <div class="mini-card"><strong>Decidir</strong><p>Qual ação parece resolver melhor o problema agora: passar, conduzir, finalizar, proteger ou reposicionar?</p></div>
          <div class="mini-card"><strong>Executar e continuar</strong><p>Depois da ação, o jogo não termina. O aluno precisa voltar a observar e criar uma nova opção.</p></div>
        </div>

        ${choice('2','Passe com sentido','Você domina um passe, mas o colega está atrás de um defensor. Qual leitura é mais adequada?',[
          ['a','Executar o passe mesmo assim porque técnica correta sempre garante a jogada'],
          ['b','Reavaliar: esperar, deslocar-se ou buscar outra linha de passe pode ser melhor'],
          ['c','Parar de participar do jogo']
        ],'b','Correto. Técnica e decisão não competem; uma dá meios para executar aquilo que a leitura da situação pede.','Pergunte primeiro se existe uma linha de passe útil, não apenas se você sabe realizar o gesto.')}

        <h3>3. Veja o espaço antes de entrar nele</h3>
        <div class="studio-box">
          <strong class="card-title">Quadro tático — o que muda quando a equipe ocupa o espaço de outro jeito?</strong>
          <p>Os círculos verdes representam a equipe com a bola; os azuis, defensores. As linhas tracejadas mostram opções possíveis, não passes obrigatórios.</p>
          <div class="choice-row"><button type="button" data-collective-board="cluster">Todos juntos</button><button type="button" data-collective-board="width">Abrir o espaço</button><button type="button" data-collective-board="support">Criar apoios</button><button type="button" data-collective-board="transition">Transição</button></div>
          <svg id="collectiveBoard" viewBox="0 0 480 270" role="img" aria-label="Diagrama tático de esporte de invasão com atacantes, defensores e linhas de passe" style="width:100%;max-width:820px;height:auto;display:block;margin:12px auto"></svg>
          <div id="collectiveBoardFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <div class="note-box"><strong>O diagrama entra no lugar de uma fotografia.</strong><p>Neste capítulo, uma foto congelaria uma jogada específica e acrescentaria muitos elementos difíceis de controlar. O quadro tático simplifica a cena para que o aluno consiga <strong>ver relações de espaço e depois testá-las no jogo real</strong>.</p></div>

        <h3>4. Vamos experimentar — Jogo da Zona Final</h3>
        <div class="safety-box">
          <strong>Sem contato corporal e sem disputa física pela bola.</strong>
          <p>Use bola macia ou objeto adequado ao grupo. Marque um retângulo e uma zona final em cada extremidade. Não são permitidos empurrões, agarrões, carrinhos ou arremessos fortes contra pessoas. Ajuste espaço, velocidade e material às condições da turma.</p>
        </div>

        <div class="practice-box">
          <strong class="card-title">Rodada 1 — descubra o problema antes de receber a solução</strong>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Equipes pequenas</strong><p>Comece com 3 × 3 ou 4 × 4. Quanto menos gente, mais oportunidades de perceber e decidir.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Com bola</strong><p>Quem recebe não corre com a bola. Pode pivotar ou girar confortavelmente e precisa procurar um passe.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>Ponto</strong><p>Vale 1 quando um colega recebe um passe dentro da zona final adversária.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Observe</strong><p>Sem interromper toda hora, perceba: a equipe se amontoa? Há linhas de passe? Quem passa fica parado?</p></div>
          </div>
        </div>

        <div class="move-options">
          <div class="move-option"><strong>Versão móvel</strong><small>Caminhada ou trote controlado, conforme espaço e orientação do professor.</small></div>
          <div class="move-option"><strong>Versão de baixa mobilidade</strong><small>Jogadores ocupam zonas menores ou posições combinadas; o desafio fica na orientação, passe e criação de linhas.</small></div>
          <div class="move-option"><strong>Versão sentada/fixa</strong><small>Organize posições estáveis e ajuste distâncias. O problema tático permanece: criar opções, proteger linhas e decidir para onde enviar a bola.</small></div>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Pausa de investigação</strong>
          <p>Após uma rodada curta, a equipe não recebe uma “tática pronta”. Responda:</p>
          <ol><li>Quando a bola chegava a alguém, quantas opções de passe essa pessoa normalmente tinha?</li><li>Depois de passar, os jogadores criavam outra linha ou ficavam assistindo?</li><li>O grupo ocupava espaços diferentes ou corria todo para a bola?</li></ol>
          <p>Escolha <strong>um</strong> foco para a segunda rodada: abrir largura, criar apoio em ângulo ou mover-se novamente depois do passe.</p>
        </div>

        <h3>5. Rodada 2 — teste um princípio, não uma jogada decorada</h3>
        <div class="studio-box">
          <strong class="card-title">Laboratório de decisão</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Situação de jogo</strong><select id="decisionSituation" style="width:100%"><option value="pressed">Recebi e estou pressionado</option><option value="offball">Estou sem bola e marcado</option><option value="turnover">Acabamos de perder a posse</option><option value="recover">Acabamos de recuperar a posse</option></select></label>
            <label class="mini-card"><strong>Foco para experimentar</strong><select id="decisionAction" style="width:100%"><option value="scan">Olhar e perceber</option><option value="support">Criar apoio</option><option value="width">Abrir espaço</option><option value="reorganize">Reorganizar defensivamente</option></select></label>
          </div>
          <div id="decisionFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="note-box"><strong>Não transforme o foco em mandamento.</strong><p>“Abrir” não é sempre melhor; “aproximar” não é sempre errado. A pergunta é: <strong>o que a situação pede agora?</strong> A Educação Física ganha sentido quando o aluno aprende a justificar a escolha e revisá-la depois da tentativa.</p></div>

        <h3>6. Fundamento sob pressão progressiva</h3>
        <p>Antes de exigir uma partida completa, podemos aumentar a complexidade em etapas. Use o mesmo fundamento em três situações:</p>
        <div class="three-col">
          <div class="mini-card"><strong>1 — Sem oposição</strong><p>Dupla ou trio pratica passe e recepção com distância confortável, observando controle e direção.</p></div>
          <div class="mini-card"><strong>2 — Oposição passiva</strong><p>Um defensor apenas ocupa uma linha e obriga o passador a procurar outro ângulo, sem tentar roubar a bola.</p></div>
          <div class="mini-card"><strong>3 — Oposição real reduzida</strong><p>Em espaço seguro, o defensor tenta interceptar sem contato. Agora técnica, percepção e decisão acontecem juntas.</p></div>
        </div>

        ${choice('3','Progressão','Por que começar sem oposição e depois acrescentar um defensor pode ser útil?',[
          ['a','Porque permite observar o gesto e depois testar se ele continua funcional quando surge um problema de decisão'],
          ['b','Porque jogos coletivos não precisam de adversários'],
          ['c','Porque a oposição deve ser evitada para sempre']
        ],'a','Isso. A progressão aumenta a complexidade sem abandonar nem a técnica nem o problema real do jogo.','O objetivo não é ficar eternamente no exercício isolado, mas chegar à tomada de decisão com recursos técnicos suficientes.')}

        <h3>7. Ataque e defesa mudam em segundos: isso é transição</h3>
        <p>Nos esportes de invasão, uma equipe pode estar atacando e perder a bola imediatamente. Quem estava avançando precisa reorganizar-se para defender; quem recuperou pode aproveitar espaços antes que o adversário se recomponha.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Perdeu a posse</strong><p>Reagir, comunicar, proteger o caminho para a meta e reorganizar-se — sem procurar culpado durante a jogada.</p></div>
          <div class="mini-card"><strong>Recuperou a posse</strong><p>Levantar a cabeça, identificar apoio e espaço livre e decidir se vale acelerar ou manter controle.</p></div>
        </div>

        ${choice('4','Depois do erro','Um colega perde a bola. Qual resposta ajuda mais a equipe naquele instante?',[
          ['a','Parar para reclamar com ele'],
          ['b','Reorganizar-se imediatamente e comunicar onde estão bola, espaço e adversários'],
          ['c','Abandonar a jogada porque a posse acabou']
        ],'b','Correto. O erro técnico já aconteceu; a próxima aprendizagem é reagir à nova situação.','Esporte coletivo exige continuidade. A equipe precisa resolver o problema que existe agora, não o que existia dois segundos atrás.')}

        <h3>8. O que transfere — e o que não transfere — entre modalidades</h3>
        <div class="studio-box">
          <strong class="card-title">Transferência consciente</strong>
          <label><strong>Escolha uma modalidade</strong><select id="collectiveSport" style="width:100%;margin-top:8px"><option value="futsal">Futsal</option><option value="handball">Handebol</option><option value="basketball">Basquetebol</option><option value="volleyball">Voleibol</option><option value="peteca">Peteca</option></select></label>
          <div id="transferFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <p>Perceber espaço, comunicar e antecipar podem aparecer em várias modalidades. Mas a forma de controlar a bola, os limites de contato, as regras, os alvos e a organização do espaço mudam. O aluno precisa aprender <strong>princípios gerais e especificidades</strong>.</p>

        <h3>9. Fair play também aparece na forma de jogar</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Com o colega</strong><p>Não ridicularizar erros, oferecer opções e permitir que diferentes pessoas participem das decisões.</p></div>
          <div class="mini-card"><strong>Com o adversário</strong><p>Respeitar limites de contato, regras e integridade física mesmo quando a disputa aumenta.</p></div>
          <div class="mini-card"><strong>Com a arbitragem</strong><p>Questionar de modo respeitoso, reconhecer infrações próprias e entender que conflito de interpretação não autoriza agressão.</p></div>
        </div>

        <h3>10. Aplicação — construa um treino curto que termine em jogo</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio do interclasses</strong>
          <p>Em grupo, escolham futsal, handebol, basquetebol, voleibol ou outra modalidade coletiva disponível na escola e montem uma sequência de 12 a 15 minutos:</p>
          <ol>
            <li>definam <strong>um problema real</strong> da turma: passe sem direção, pouca oferta de apoio, dificuldade de recepção, organização defensiva etc.;</li>
            <li>criem uma tarefa curta sem oposição para perceber o fundamento;</li>
            <li>acrescentem oposição ou pressão de forma progressiva;</li>
            <li>terminem em jogo reduzido que obrigue o fundamento a aparecer dentro de decisões;</li>
            <li>parem por 30 segundos e perguntem: <strong>“o que funcionou no exercício e desapareceu quando entrou oposição?”</strong>;</li>
            <li>façam uma nova rodada e revisem a proposta.</li>
          </ol>
          <p>Se o grupo tiver diferentes possibilidades de mobilidade, altere espaço, material, alvo, posição ou função preservando o problema de aprendizagem.</p>
        </div>

        <div class="source-box"><strong class="card-title">Por que ensinar assim?</strong><p>Materiais oficiais da BNCC tratam esportes com técnicas individuais, tática, equipe, estratégias, diversidade e criação de formas de jogar. A lógica é avançar do gesto para problemas progressivamente mais complexos, mantendo protagonismo, cooperação e reflexão sobre a prática.</p><p><a href="https://basenacionalcomum.mec.gov.br/implementacao/praticas/caderno-de-praticas/ensino-medio/84-vivendo-a-cultura-corporal-de-movimento-no-ensino-medio" target="_blank" rel="noopener noreferrer">BNCC • Vivendo a cultura corporal de movimento no Ensino Médio</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Nos esportes coletivos, fundamento técnico é importante, mas não vive sozinho. O aluno precisa <strong>perceber a situação, decidir, executar, reposicionar-se e reagir à mudança de posse</strong>. É assim que um passe deixa de ser apenas um gesto e se torna solução para um problema de jogo.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Experimentar</span><span>Observar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('04 Esportes coletivos', showChapter);
})();
