(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    return audioCtx;
  }

  function playPulse(bpm = 96, beats = 8) {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const interval = 60 / bpm;
    for (let i = 0; i < beats; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = i % 4 === 0 ? 760 : 520;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * interval);
      gain.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + i * interval + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * interval + 0.09);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * interval);
      osc.stop(ctx.currentTime + i * interval + 0.11);
    }
  }

  function renderFormation(root, mode = 'circle') {
    const svg = $('#danceFormation', root);
    const out = $('#danceFormationFeedback', root);
    if (!svg || !out) return;

    const formations = {
      line: {
        points:[[80,125],[160,125],[240,125],[320,125]],
        text:'A linha cria leitura frontal clara e facilita movimentos em uníssono, mas pode limitar encontros e trocas entre participantes.'
      },
      circle: {
        points:[[200,55],[305,125],[200,195],[95,125]],
        text:'A roda distribui atenção entre participantes e pode favorecer alternância, resposta, entrada no centro e sensação de participação coletiva.'
      },
      diagonal: {
        points:[[90,185],[165,145],[240,105],[315,65]],
        text:'A diagonal explora profundidade e deslocamento pelo espaço. Pequenas mudanças de distância já alteram bastante a leitura do grupo.'
      },
      pairs: {
        points:[[120,90],[165,90],[250,165],[295,165]],
        text:'Em pares, podem aparecer espelho, pergunta–resposta, aproximação e afastamento. Contato físico não é obrigatório: relação também se cria por olhar, direção e distância.'
      }
    };

    const f = formations[mode] || formations.circle;
    const circles = f.points.map((p,i) => `<circle cx="${p[0]}" cy="${p[1]}" r="20" fill="#1f6f5c"/><text x="${p[0]}" y="${p[1]+5}" text-anchor="middle" fill="#fff" font-size="12" font-weight="900">${String.fromCharCode(65+i)}</text>`).join('');
    svg.innerHTML = `
      <rect x="5" y="5" width="390" height="235" rx="16" fill="#f7fbfa" stroke="#b8dacf" stroke-width="2"/>
      <text x="200" y="28" text-anchor="middle" font-size="11" fill="#56665f">espaço de apresentação</text>
      ${circles}`;
    out.innerHTML = `<strong>O que esta formação favorece?</strong><p>${f.text}</p><p>Formação não é decoração: ela muda quem vê quem, quanto cada pessoa precisa se deslocar e como o público percebe o conjunto.</p>`;
  }

  function updatePhrase(root) {
    const tempo = $('#danceTempo', root)?.value || 'medium';
    const space = $('#danceSpace', root)?.value || 'forward';
    const level = $('#danceLevel', root)?.value || 'middle';
    const relation = $('#danceRelation', root)?.value || 'unison';
    const out = $('#dancePhraseFeedback', root);
    if (!out) return;

    const tempoText = {
      slow:'mais lento, com tempo para perceber transições e sustentar posições',
      medium:'moderado, permitindo continuidade sem transformar a tarefa em corrida',
      fast:'mais rápido, exigindo simplificação e maior atenção à segurança e ao espaço'
    }[tempo];
    const spaceText = {
      forward:'deslocamento para frente e retorno, trabalhando direção',
      side:'deslocamento lateral, explorando largura do espaço',
      turn:'mudança de direção sem exigir giro completo',
      place:'sem deslocamento, usando braços, tronco, cabeça e transferência de peso'
    }[space];
    const levelText = {
      low:'nível mais baixo dentro de uma amplitude confortável, sem exigir ajoelhar ou agachar profundamente',
      middle:'nível médio, próximo da postura habitual em pé ou sentada',
      high:'nível mais alto, usando extensão do corpo e alcance dos braços sem salto obrigatório'
    }[level];
    const relationText = {
      unison:'uníssono: todos realizam a mesma ideia ao mesmo tempo',
      canon:'cânone: a mesma ideia começa em momentos diferentes',
      mirror:'espelho: uma pessoa propõe e outra responde visualmente, sem contato obrigatório',
      contrast:'contraste: partes do grupo fazem qualidades diferentes de movimento'
    }[relation];

    out.innerHTML = `<strong>Frase de movimento proposta:</strong><p>Use ritmo ${tempoText}; combine ${spaceText}; explore ${levelText}; e organize o grupo em ${relationText}.</p><p>Depois de testar, mude <strong>apenas uma dessas escolhas</strong> e observe como o sentido e a dificuldade se transformam.</p>`;
  }

  function init(root) {
    $$('[data-dance-pulse]', root).forEach(button => {
      button.addEventListener('click', () => playPulse(Number(button.dataset.dancePulse || 96), 8));
    });

    $$('[data-dance-formation]', root).forEach(button => {
      button.addEventListener('click', () => renderFormation(root, button.dataset.danceFormation));
    });
    renderFormation(root, 'circle');

    ['danceTempo','danceSpace','danceLevel','danceRelation'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updatePhrase(root));
    });
    updatePhrase(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Dança',
      technical:'ritmo • pulso • gesto • espaço • nível • direção • formação • relação • criação • cultura • expressão',
      title:'06 — Ritmo, criação e cultura',
      objective:'<strong>Objetivo:</strong> experimentar ritmo, gesto, espaço e relações em pequenas criações corporais, compreender a dança como prática cultural e expressiva e participar de propostas coletivas sem exigir virtuosismo, cópia de coreografias ou um único padrão corporal.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Criar em vez de copiar</span>
          <div class="hero-box">
            <strong class="card-title">A escola vai abrir uma mostra cultural e pede à turma uma apresentação corporal de cerca de 40 segundos.</strong>
            <p>A primeira sugestão é simples: procurar uma coreografia na internet, decorar e repetir. Mas parte da turma diz que “não sabe dançar”; outra parte não quer aparecer copiando passos que não entende.</p>
            <p>A missão muda: criar uma sequência curta usando <strong>ritmo, gesto, espaço e relação entre pessoas</strong>. Ninguém precisa executar salto, acrobacia ou passo difícil. O grupo precisa conseguir explicar as próprias escolhas.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como construir dança quando o ponto de partida não é copiar passos, mas organizar movimento com intenção?</p>
          </div>
        </section>

        <div class="ef-tags"><span>escutar</span><span>mover</span><span>observar</span><span>criar</span><span>relacionar</span><span>contextualizar</span></div>

        <h3>1. Dança não começa em “saber coreografia”</h3>
        <p>Dançar pode envolver técnica muito elaborada, mas a Educação Física escolar não precisa começar por desempenho virtuoso. Podemos começar por algo mais básico: <strong>perceber ritmo, escolher gestos, organizar espaço e criar relações entre movimentos</strong>.</p>

        ${choice('1','Dança na escola','Qual proposta combina melhor com este capítulo?',[
          ['a','Só participa quem já sabe reproduzir passos com precisão'],
          ['b','Todos podem experimentar relações de ritmo, gesto e espaço em níveis de complexidade adaptáveis'],
          ['c','Dança deve ser estudada apenas por texto para evitar constrangimento']
        ],'b','Isso. A prática pode começar simples, permitir adaptações e ganhar complexidade conforme o grupo se sente seguro.','A aprendizagem corporal não depende de todos começarem com a mesma experiência ou habilidade.')}

        <div class="note-box"><strong>Você não precisa “dançar bonito”.</strong><p>O critério aqui é conseguir <strong>perceber, escolher, experimentar, revisar e explicar</strong>. Movimentos podem ser grandes ou pequenos, em pé ou sentados, com ou sem deslocamento.</p></div>

        <h3>2. Ritmo: primeiro escute, depois mova</h3>
        <p>Ritmo não é sinônimo de música rápida. Uma forma simples de começar é perceber um <strong>pulso regular</strong> e escolher como o corpo se relaciona com ele: acompanhar cada batida, mover a cada duas, fazer pausa, antecipar ou sustentar um gesto.</p>

        <div class="studio-box">
          <strong class="card-title">Laboratório de pulso — som gerado no navegador</strong>
          <p>Ouça oito batidas. O primeiro som de cada grupo de quatro é um pouco mais agudo para ajudar a localizar a organização.</p>
          <div class="choice-row"><button type="button" data-dance-pulse="72">Lento — 72 bpm</button><button type="button" data-dance-pulse="96">Moderado — 96 bpm</button><button type="button" data-dance-pulse="124">Mais rápido — 124 bpm</button></div>
          <p><strong>Experimente:</strong> marque o pulso apenas com uma mão. Depois use ombros ou cabeça. Em seguida, mova somente a cada duas batidas. O que muda na sensação de tempo?</p>
        </div>

        <div class="safety-box"><strong>Movimento com escolha e respeito.</strong><p>Use espaço livre e amplitude confortável. Contato físico só acontece com consentimento claro e quando fizer sentido à proposta; sempre existe alternativa sem toque. Não force flexibilidade, giros rápidos, saltos ou movimentos que provoquem dor ou tontura.</p></div>

        <h3>3. O mesmo gesto muda quando tempo e espaço mudam</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência: transformar um gesto cotidiano</strong>
          <ol>
            <li>Escolha um gesto simples: acenar, alcançar algo, abrir espaço, apontar, virar o tronco ou transferir peso.</li>
            <li>Faça uma vez em ritmo habitual.</li>
            <li>Repita mais lentamente, sustentando uma parte.</li>
            <li>Faça novamente mudando direção ou nível.</li>
            <li>Compare: continua parecendo o mesmo gesto? Que impressão mudou?</li>
          </ol>
        </div>

        ${choice('2','Gesto e sentido','Duas pessoas fazem o mesmo gesto, mas uma o executa lentamente e outra de modo rápido e interrompido. O que podemos concluir?',[
          ['a','Velocidade e qualidade temporal podem modificar a leitura do gesto'],
          ['b','Se o gesto é o mesmo, o sentido nunca muda'],
          ['c','Só passos tradicionais podem comunicar alguma coisa']
        ],'a','Correto. Tempo, continuidade, pausa, direção e amplitude participam da expressividade do movimento.','Em dança, não observamos apenas “qual gesto”, mas também “como ele acontece”.')}

        <h3>4. Formação também cria significado</h3>
        <div class="studio-box">
          <strong class="card-title">Mapa de formação</strong>
          <p>Os círculos representam participantes. Compare configurações antes de experimentar no espaço real.</p>
          <div class="choice-row"><button type="button" data-dance-formation="line">Linha</button><button type="button" data-dance-formation="circle">Roda</button><button type="button" data-dance-formation="diagonal">Diagonal</button><button type="button" data-dance-formation="pairs">Pares</button></div>
          <svg id="danceFormation" viewBox="0 0 400 245" role="img" aria-label="Diagrama com formações espaciais para uma criação coletiva" style="width:100%;max-width:700px;height:auto;display:block;margin:12px auto"></svg>
          <div id="danceFormationFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <p>Na missão da mostra, escolher roda, linha, diagonal ou pares não é apenas questão estética. A formação altera <strong>distância, orientação, quem observa quem, possibilidade de deslocamento e relação com o público</strong>.</p>

        <h3>5. Danças são práticas culturais, não catálogos de passos</h3>
        <div class="two-col">
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Frevo_no_Carnaval_do_Recife.jpg?width=900" alt="Apresentação coletiva de frevo durante o Carnaval do Recife, com passistas ocupando o espaço em diferentes direções e níveis." style="display:block;width:100%;max-height:360px;object-fit:cover;border-radius:10px">
            <figcaption><strong class="card-title">Frevo — Recife, Pernambuco</strong><p>Observe ocupação do espaço, energia, direção dos corpos e relação entre dança, música e contexto carnavalesco. A fotografia registra uma manifestação viva; ela não ensina “o passo correto” sozinha.</p><p><a href="https://commons.wikimedia.org/wiki/File:Frevo_no_Carnaval_do_Recife.jpg" target="_blank" rel="noopener noreferrer">Carlos Augusto Horta Gomes • CC BY-SA 4.0 • Wikimedia Commons</a></p></figcaption>
          </figure>
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Samba_de_Roda_do_Rec%C3%B4ncavo_-_Bahia_-_3909_005.jpg?width=900" alt="Samba de roda no Recôncavo Baiano, mostrando participantes, músicos e organização coletiva da manifestação." style="display:block;width:100%;max-height:360px;object-fit:cover;border-radius:10px">
            <figcaption><strong class="card-title">Samba de roda — Recôncavo Baiano</strong><p>Observe a relação entre roda, música, presença coletiva e entrada de participantes. A prática envolve história, comunidade, musicalidade e modos próprios de participação.</p><p><a href="https://commons.wikimedia.org/wiki/File:Samba_de_Roda_do_Rec%C3%B4ncavo_-_Bahia_-_3909_005.jpg" target="_blank" rel="noopener noreferrer">Maria Eugenia Tita • CC BY 4.0 • Wikimedia Commons</a></p></figcaption>
          </figure>
        </div>

        <div class="note-box"><strong>Contexto importa.</strong><p>Frevo, samba de roda, funk, passinho, forró, danças urbanas, indígenas, populares, de salão ou contemporâneas não são apenas “listas de movimentos”. Elas carregam histórias, grupos, lugares, disputas, identidades e formas de circulação. Aprender sobre uma dança inclui perguntar <strong>quem pratica, onde, quando, com que música, com que sentido e como ela mudou</strong>.</p></div>

        ${choice('3','Cultura e movimento','Por que copiar alguns movimentos de uma manifestação não significa compreendê-la?',[
          ['a','Porque práticas corporais também possuem contexto, história, relações sociais e sentidos compartilhados'],
          ['b','Porque movimentos não fazem parte da dança'],
          ['c','Porque manifestações culturais nunca podem mudar']
        ],'a','Isso. O gesto importa, mas não existe isolado das pessoas e dos contextos que o produzem e recriam.','Pergunte sempre de onde veio, quem pratica, em quais situações e com quais sentidos.')}

        <h3>6. Preconceito também entra na quadra</h3>
        <p>Frases como “isso é dança de menina”, “homem não dança assim”, “meu corpo não serve para dançar” ou “essa dança é inferior” não são comentários neutros. Elas podem limitar participação e reproduzir preconceitos sobre gênero, corpo, classe, território e cultura.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Corpo</strong><p>Não existe um único formato corporal autorizado a participar. A proposta precisa permitir diferentes amplitudes, ritmos e modos de presença.</p></div>
          <div class="mini-card"><strong>Gênero</strong><p>Movimento não precisa obedecer rótulos de “masculino” e “feminino”. O aluno pode experimentar qualidades corporais sem policiamento dos colegas.</p></div>
          <div class="mini-card"><strong>Cultura</strong><p>Evite caricaturar ou imitar de modo desrespeitoso uma prática cultural. Pesquisar origem e contexto faz parte da aula.</p></div>
          <div class="mini-card"><strong>Exposição</strong><p>Participar não significa ser obrigado a fazer solo. Há criação em grupo, observação, marcação rítmica e funções de composição.</p></div>
        </div>

        <h3>7. Laboratório de criação — monte uma frase de movimento</h3>
        <div class="studio-box">
          <strong class="card-title">Escolha quatro variáveis</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Ritmo</strong><select id="danceTempo" style="width:100%"><option value="slow">Lento</option><option value="medium" selected>Moderado</option><option value="fast">Mais rápido</option></select></label>
            <label class="mini-card"><strong>Espaço</strong><select id="danceSpace" style="width:100%"><option value="forward">Frente e retorno</option><option value="side">Lateral</option><option value="turn">Mudar direção</option><option value="place">Sem deslocamento</option></select></label>
            <label class="mini-card"><strong>Nível</strong><select id="danceLevel" style="width:100%"><option value="low">Mais baixo</option><option value="middle" selected>Médio</option><option value="high">Mais alto</option></select></label>
            <label class="mini-card"><strong>Relação</strong><select id="danceRelation" style="width:100%"><option value="unison">Uníssono</option><option value="canon">Cânone</option><option value="mirror">Espelho</option><option value="contrast">Contraste</option></select></label>
          </div>
          <div id="dancePhraseFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="practice-box">
          <strong class="card-title">Teste em 4 × 8 tempos — ou sem contagem rígida</strong>
          <p>Em grupo pequeno, escolham quatro gestos simples. Organizem uma primeira versão curta. Depois mudem apenas uma variável: formação, ritmo, direção, nível, pausa ou relação entre pessoas. Compare qual versão comunica melhor a intenção escolhida.</p>
          <p>Se a contagem em oito não fizer sentido para a proposta, use outra organização temporal. A contagem é ferramenta de composição, não uma lei universal da dança.</p>
        </div>

        <h3>8. Volte à missão da mostra cultural</h3>
        <div class="challenge-box">
          <strong class="card-title">Criação final — cerca de 40 segundos</strong>
          <p>A turma ou grupos menores devem criar uma sequência que contenha:</p>
          <ol>
            <li>um ponto de partida ou intenção em uma frase;</li>
            <li>pelo menos quatro gestos ou ações corporais;</li>
            <li>uma mudança perceptível de direção, nível ou formação;</li>
            <li>uma relação coletiva: uníssono, cânone, espelho, contraste ou outra criada pelo grupo;</li>
            <li>uma pausa ou mudança de ritmo intencional;</li>
            <li>uma versão adaptada para quem precisar reduzir deslocamento ou amplitude;</li>
            <li>uma explicação curta das escolhas — sem dizer apenas “porque ficou bonito”.</li>
          </ol>
          <p>Depois de apresentar para outro grupo, recebam duas perguntas: <strong>“o que você percebeu primeiro?”</strong> e <strong>“qual escolha espacial ou rítmica ficou mais clara?”</strong>. Revisem uma parte e testem novamente.</p>
        </div>

        <div class="source-box"><strong class="card-title">Por que ensinar dança assim?</strong><p>Materiais de implementação da BNCC para o Ensino Médio descrevem experiências de dança que começam de forma brincante, relativizam a exigência técnica inicial e avançam para expressividade, afetividade, sociedade, julgamentos e respeito às diferenças. A cultura corporal é tratada como experiência prática, crítica e criativa.</p><p><a href="https://basenacionalcomum.mec.gov.br/implementacao/praticas/caderno-de-praticas/ensino-medio/84-vivendo-a-cultura-corporal-de-movimento-no-ensino-medio" target="_blank" rel="noopener noreferrer">BNCC • Vivendo a cultura corporal de movimento no Ensino Médio</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Dança na Educação Física não precisa começar pela cópia de uma coreografia. Ela pode começar por <strong>escutar, perceber, criar, organizar espaço, relacionar-se com outras pessoas e compreender contextos culturais</strong>. O aluno não precisa provar que “sabe dançar”; precisa participar do processo de construir e interpretar movimento.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Escutar</span><span>Experimentar</span><span>Analisar</span><span>Criar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('06 Ritmo', showChapter);
})();
