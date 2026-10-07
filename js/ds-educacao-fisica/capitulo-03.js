(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  let attemptData = {
    run:['','',''],
    jump:['','',''],
    throw:['','','']
  };

  function renderThrowArc(root, mode='medium') {
    const svg = $('#throwArc', root);
    const out = $('#throwArcFeedback', root);
    if (!svg || !out) return;

    const paths = {
      low:{d:'M55 195 Q185 125 330 178',target:'trajetória mais baixa e direta',note:'Pode ser útil para certos alvos próximos ou passes rápidos, mas perde altura e tempo de voo.'},
      medium:{d:'M55 195 Q190 58 335 170',target:'trajetória intermediária',note:'Cria um arco mais alto sem exagerar. Em muitas tarefas de alvo, é um bom ponto de comparação — não uma regra universal.'},
      high:{d:'M55 195 Q205 10 330 175',target:'trajetória alta',note:'Aumenta o tempo no ar e pode ajudar a superar um obstáculo, mas também pode reduzir precisão ou ultrapassar o alvo.'}
    };
    const p = paths[mode] || paths.medium;
    svg.innerHTML = `
      <rect x="5" y="5" width="380" height="230" rx="14" fill="#f7fbfa" stroke="#b8dacf" stroke-width="2"/>
      <line x1="35" y1="200" x2="355" y2="200" stroke="#93aaa1" stroke-width="2"/>
      <circle cx="55" cy="195" r="8" fill="#d97706"/>
      <path d="${p.d}" fill="none" stroke="#1f6f5c" stroke-width="5" stroke-linecap="round"/>
      <rect x="320" y="150" width="28" height="50" rx="5" fill="#3478a0" opacity=".88"/>
      <text x="334" y="218" text-anchor="middle" font-size="11" fill="#56665f">alvo</text>
      <text x="55" y="218" text-anchor="middle" font-size="11" fill="#56665f">saída</text>`;
    out.innerHTML = `<strong>${p.target}</strong><p>${p.note}</p><p><strong>Importante:</strong> não existe um “ângulo mágico” que sirva para toda tarefa. Altura de saída, distância, objeto, objetivo e técnica mudam o resultado.</p>`;
  }

  function updateAttempt(root, station, index, value) {
    attemptData[station][index] = value.trim();
    const out = $(`[data-attempt-feedback="${station}"]`, root);
    if (!out) return;
    const values = attemptData[station].filter(Boolean);
    if (values.length < 2) {
      out.innerHTML = '<strong>Registre pelo menos duas tentativas.</strong> O objetivo é comparar o que mudou quando você alterou apenas um aspecto da execução.';
      return;
    }
    out.innerHTML = `<strong>${values.length} tentativas registradas.</strong><p>Agora responda oralmente ou no caderno: <em>o que você mudou entre elas e que evidência observou?</em> Um número maior ou menor, sozinho, não explica a técnica.</p>`;
  }

  function resetAttempts(root, station) {
    attemptData[station] = ['','',''];
    $$(`[data-attempt="${station}"]`, root).forEach(input => { input.value=''; });
    const out = $(`[data-attempt-feedback="${station}"]`, root);
    if (out) out.innerHTML = '<strong>Registro limpo.</strong> Faça uma tentativa confortável antes de escolher o que pretende modificar.';
  }

  function updateFocusLab(root) {
    const station = $('#focusStation', root)?.value || 'run';
    const focus = $('#focusVariable', root)?.value || 'one';
    const out = $('#focusFeedback', root);
    if (!out) return;

    const stationText = {
      run:'Na corrida curta, observe postura, ritmo, direção dos braços e controle do início ao fim.',
      jump:'No salto horizontal, observe aproximação ou preparação, impulsão, participação dos braços e aterrissagem controlada.',
      throw:'No lançamento com objeto macio, observe base dos pés, participação do tronco, direção do braço e momento de soltura.'
    }[station];

    const focusText = {
      one:'Mude somente um aspecto por vez. Assim fica mais fácil relacionar a mudança ao efeito observado.',
      rhythm:'Priorize ritmo e continuidade, sem tentar “forçar” velocidade, distância ou potência máxima.',
      control:'Priorize controle e repetibilidade. Uma execução que você consegue repetir e explicar vale mais que um resultado isolado.'
    }[focus];

    out.innerHTML = `<strong>Plano de observação:</strong><p>${stationText}</p><p>${focusText}</p>`;
  }

  function init(root) {
    $$('[data-throw-arc]', root).forEach(button => {
      button.addEventListener('click', () => renderThrowArc(root, button.dataset.throwArc));
    });
    renderThrowArc(root, 'medium');

    $$('[data-attempt]', root).forEach(input => {
      input.addEventListener('input', () => {
        updateAttempt(root, input.dataset.attempt, Number(input.dataset.index), input.value);
      });
    });
    $$('[data-reset-attempts]', root).forEach(button => {
      button.addEventListener('click', () => resetAttempts(root, button.dataset.resetAttempts));
    });

    $('#focusStation', root)?.addEventListener('change', () => updateFocusLab(root));
    $('#focusVariable', root)?.addEventListener('change', () => updateFocusLab(root));
    updateFocusLab(root);
  }

  function attemptPanel(station, label, placeholder) {
    return `
      <div class="field-note">
        <strong>${label} — registro de três tentativas</strong>
        <p>O campo é opcional. Você pode registrar tempo, distância, acertos ou uma palavra como “controlado”. Compare apenas suas próprias tentativas.</p>
        <div class="three-col">
          ${[0,1,2].map(i => `<label class="mini-card"><strong>Tentativa ${i+1}</strong><input data-attempt="${station}" data-index="${i}" type="text" inputmode="decimal" placeholder="${placeholder}" style="width:100%"></label>`).join('')}
        </div>
        <div class="choice-row"><button type="button" data-reset-attempts="${station}">Limpar registros</button></div>
        <div class="choice-feedback" data-attempt-feedback="${station}"><strong>Comece pela tentativa 1.</strong> Depois escolha uma única mudança para testar.</div>
      </div>`;
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Esporte',
      technical:'atletismo • corrida • ritmo • aceleração • impulsão • aterrissagem • lançamento • trajetória • técnica • registro',
      title:'03 — Correr, saltar e lançar',
      objective:'<strong>Objetivo:</strong> experimentar fundamentos simples de corrida, salto e lançamento, observar fases do movimento e comparar tentativas próprias com foco em técnica, controle, segurança e aprendizagem — não apenas em quem chega mais rápido ou vai mais longe.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Festival de movimento</span>
          <div class="hero-box">
            <strong class="card-title">A escola vai organizar um pequeno festival com corrida, salto e lançamento.</strong>
            <p>A primeira ideia é montar um placar com “mais rápido”, “mais longe” e “mais forte”. Mas isso produziria uma aula em que alguns participam muito e outros já entram acreditando que vão perder.</p>
            <p>A turma recebe então outra missão: em cada estação, faça uma tentativa inicial, escolha <strong>um aspecto da técnica</strong>, teste novamente e explique o que mudou. Pode haver medida e desafio, mas o centro da aprendizagem passa a ser <strong>perceber e melhorar a própria execução</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que muda quando correr, saltar e lançar deixam de ser apenas provas de resultado e passam a ser movimentos que podemos observar, testar e compreender?</p>
          </div>
        </section>

        <div class="ef-tags"><span>correr</span><span>saltar</span><span>lançar</span><span>observar</span><span>ajustar</span><span>comparar</span></div>

        <h3>1. Atletismo começa em movimentos muito humanos</h3>
        <p>Correr, saltar e lançar aparecem em jogos, brincadeiras, deslocamentos e esportes muito antes de virarem provas oficiais. No atletismo competitivo, esses movimentos são organizados em regras, distâncias, setores e técnicas específicas. Na escola, podemos <strong>adaptar a prática para aprender os princípios sem copiar a exigência de atletas de alto rendimento</strong>.</p>

        ${choice('1','Prática escolar','Qual proposta combina melhor com este capítulo?',[
          ['a','Copiar a técnica de atletas de elite e exigir desempenho máximo'],
          ['b','Experimentar fundamentos de forma segura, comparar tentativas próprias e compreender por que certas escolhas alteram o movimento'],
          ['c','Aprender apenas nomes de provas sem se mover']
        ],'b','Isso. A escola pode usar o atletismo para aprender movimento, técnica, observação, autonomia e convivência.','O objetivo não é reproduzir treinamento de alto rendimento, mas compreender e experimentar princípios do movimento.')}

        <h3>2. Uma imagem pode revelar aquilo que o olho perde em velocidade real</h3>
        <div class="two-col">
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Descriptive_Zoopraxography_Athletes_Running.jpg?width=900" alt="Sequência histórica de imagens de atletas correndo, mostrando posições consecutivas do corpo durante o movimento." style="display:block;width:100%;max-height:360px;object-fit:contain;border-radius:10px;background:#fff">
            <figcaption><strong class="card-title">Corrida vista em sequência</strong><p>As posições consecutivas ajudam a perceber apoio, passagem do corpo, ação de braços e momentos sem contato com o solo.</p><p><a href="https://commons.wikimedia.org/wiki/File:Descriptive_Zoopraxography_Athletes_Running.jpg" target="_blank" rel="noopener noreferrer">Eadweard Muybridge, 1893 • domínio público • Wikimedia Commons</a></p></figcaption>
          </figure>
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Descriptive_Zoopraxography_Athlete%2C_Running_Long_Jump.jpg?width=900" alt="Sequência histórica de um atleta realizando corrida de aproximação e salto em distância, com várias fases do movimento." style="display:block;width:100%;max-height:360px;object-fit:contain;border-radius:10px;background:#fff">
            <figcaption><strong class="card-title">O salto não acontece só no ar</strong><p>A sequência mostra que aproximação, preparação, impulsão, voo e aterrissagem fazem parte de um mesmo movimento.</p><p><a href="https://commons.wikimedia.org/wiki/File:Descriptive_Zoopraxography_Athlete,_Running_Long_Jump.jpg" target="_blank" rel="noopener noreferrer">Eadweard Muybridge, 1893 • domínio público • Wikimedia Commons</a></p></figcaption>
          </figure>
        </div>

        <div class="note-box"><strong>Por que essas imagens entram aqui?</strong><p>Não são decoração nem modelo de “corpo perfeito”. São registros históricos de movimento usados para <strong>parar o tempo e enxergar fases que passam rápido demais ao vivo</strong>. Depois de observar, volte para a prática e procure essas relações no seu próprio movimento.</p></div>

        <h3>3. Estação 1 — correr: ritmo antes de pressa</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência: três percursos curtos</strong>
          <p>O professor define um trecho seguro, por exemplo entre 8 e 15 metros, com espaço para desacelerar depois da linha. O objetivo não é sprint máximo.</p>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Primeira passagem</strong><p>Corra ou desloque-se em ritmo confortável. Observe como começa, mantém direção e termina.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Escolha um foco</strong><p>Ex.: braços acompanhando o ritmo, olhar à frente, início progressivo ou passos mais regulares.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>Teste</strong><p>Repita sem aumentar para esforço máximo. Tente perceber se o foco deixou o movimento mais organizado.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Explique</strong><p>O que você mudou? O que ficou diferente? O resultado combinou com sua percepção?</p></div>
          </div>
        </div>

        <div class="safety-box"><strong>Corrida segura</strong><p>Use percurso sem obstáculos e com área suficiente para desacelerar. Corra em uma direção combinada, sem cruzar na frente dos colegas. Não é necessário largar agachado, usar bloco, competir em velocidade máxima nem medir quem é o “melhor”. Quem não puder correr pode fazer caminhada rápida, marcha, deslocamento reduzido ou outra adaptação orientada.</p></div>

        ${attemptPanel('run','Estação 1','ex.: 4,8 s ou controlado')}

        ${choice('2','Técnica e resultado','Uma tentativa ficou um pouco mais lenta, mas o aluno relatou melhor controle de direção e desaceleração. Como analisar?',[
          ['a','Foi necessariamente pior porque só o menor tempo importa'],
          ['b','Pode ter sido uma tentativa tecnicamente mais controlada; é preciso considerar o objetivo definido para aquela rodada'],
          ['c','Controle não faz parte da corrida']
        ],'b','Correto. Resultado numérico só faz sentido quando sabemos qual aspecto estava sendo treinado e observado.','Se o foco era controle e organização, não use apenas velocidade como critério.')}

        <h3>4. Estação 2 — saltar: preparar, impulsionar e aterrissar</h3>
        <p>No salto em distância oficial, atletas usam uma corrida de aproximação e saltam a partir de uma tábua para uma caixa de areia. A World Athletics descreve fases como aproximação, últimos passos, impulsão, ação no ar e aterrissagem. Na escola, porém, <strong>a prática precisa ser adaptada ao espaço e à segurança disponíveis</strong>.</p>

        <div class="practice-box">
          <strong class="card-title">Experiência escolar: salto horizontal controlado</strong>
          <div class="move-options">
            <div class="move-option"><strong>Versão A — sem corrida</strong><small>Parta parado atrás de uma linha, use balanço confortável dos braços e aterrisse em zona segura.</small></div>
            <div class="move-option"><strong>Versão B — aproximação curta</strong><small>Somente se houver espaço e superfície adequados: use poucos passos e priorize controle da impulsão.</small></div>
            <div class="move-option"><strong>Versão adaptada</strong><small>Se saltar não for adequado, experimente transferência de peso, alcance de marca ou outra tarefa equivalente definida pelo professor.</small></div>
          </div>
        </div>

        <div class="safety-box"><strong>Aterrissagem vem antes da distância.</strong><p>Não faça salto máximo em piso duro ou escorregadio. Use área apropriada, livre e definida pelo professor. Aterrisse de modo controlado, com espaço à frente e sem colegas na zona de queda. Se a escola tiver caixa de areia e condições adequadas, o professor pode ampliar a experiência; sem isso, mantenha a versão adaptada.</p></div>

        ${choice('3','Fases do salto','Por que a corrida de aproximação não pode ser vista como “parte separada” do salto?',[
          ['a','Porque velocidade, ritmo e preparação dos passos influenciam a impulsão que vem depois'],
          ['b','Porque só o tempo no ar interfere no resultado'],
          ['c','Porque a aterrissagem acontece antes da aproximação']
        ],'a','Isso. O salto é uma sequência; mudar uma fase altera as condições das fases seguintes.','Observe o encadeamento: aproximação → preparação → impulsão → voo → aterrissagem.')}

        ${attemptPanel('jump','Estação 2','ex.: 1,45 m ou estável')}

        <h3>5. Estação 3 — lançar: direção antes de força</h3>
        <div class="safety-box"><strong>Nesta aula não usamos dardo, peso, disco ou objetos rígidos.</strong><p>Use bola de espuma, meia enrolada, saquinho de feijão ou outro material macio aprovado pelo professor. Todos lançam para o mesmo setor vazio e só recolhem os objetos após o sinal. Nunca lance em direção a pessoas.</p></div>

        <div class="practice-box">
          <strong class="card-title">Experiência: acertar uma zona, não “mandar o mais longe possível”</strong>
          <ol>
            <li>Marque uma zona-alvo ampla no chão ou em uma parede segura apropriada.</li>
            <li>Faça uma primeira tentativa confortável.</li>
            <li>Escolha um foco: base dos pés, participação do tronco, direção do braço ou momento da soltura.</li>
            <li>Repita mantendo o objeto e o alvo iguais.</li>
            <li>Compare precisão e sensação de controle.</li>
          </ol>
        </div>

        <div class="studio-box">
          <strong class="card-title">Trajetória visual — o mesmo lançamento pode seguir arcos diferentes</strong>
          <p>Use o diagrama como hipótese. Depois compare com um lançamento real de objeto macio.</p>
          <div class="choice-row"><button type="button" data-throw-arc="low">Arco baixo</button><button type="button" data-throw-arc="medium">Arco intermediário</button><button type="button" data-throw-arc="high">Arco alto</button></div>
          <svg id="throwArc" viewBox="0 0 390 240" role="img" aria-label="Diagrama de diferentes trajetórias de lançamento" style="width:100%;max-width:720px;height:auto;display:block;margin:12px auto"></svg>
          <div id="throwArcFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${attemptPanel('throw','Estação 3','ex.: 2 acertos ou preciso')}

        <h3>6. Técnica não é uma pose congelada</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Corrida</strong><p>O corpo organiza apoio, ritmo, braços, direção e transição entre acelerar e desacelerar.</p></div>
          <div class="mini-card"><strong>Salto</strong><p>Preparação, impulsão e aterrissagem precisam conversar entre si.</p></div>
          <div class="mini-card"><strong>Lançamento</strong><p>Base, tronco, braço, direção e soltura formam uma sequência coordenada.</p></div>
          <div class="mini-card"><strong>Aprender</strong><p>Observe uma relação de cada vez, teste, receba feedback e tente novamente.</p></div>
        </div>

        <div class="note-box"><strong>Copiar aparência não basta.</strong><p>Duas pessoas podem realizar a mesma tarefa com pequenas diferenças corporais e ainda cumprir bem o objetivo. Técnica escolar não deve virar tentativa de encaixar todos em uma única “foto perfeita”.</p></div>

        <h3>7. Laboratório de foco — escolha o que observar antes da próxima tentativa</h3>
        <div class="studio-box">
          <div class="two-col">
            <label class="mini-card"><strong>Estação</strong><select id="focusStation" style="width:100%"><option value="run">Corrida</option><option value="jump">Salto</option><option value="throw">Lançamento</option></select></label>
            <label class="mini-card"><strong>Tipo de foco</strong><select id="focusVariable" style="width:100%"><option value="one">Mudar uma variável</option><option value="rhythm">Ritmo e continuidade</option><option value="control">Controle e repetibilidade</option></select></label>
          </div>
          <div id="focusFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <h3>8. E se quisermos uma “mini-Olimpíada”?</h3>
        <p>Podemos ter festival, equipes, marcas, tempos e desafios. O problema aparece quando <strong>o ranking vira a única experiência de aprendizagem</strong>. Uma versão MbB pode manter o entusiasmo do evento e acrescentar outras formas de sucesso.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Resultado</strong><p>Tempo, distância ou acerto podem existir quando fizerem sentido.</p></div>
          <div class="mini-card"><strong>Evolução</strong><p>Compare tentativa inicial e final da própria pessoa, sem exigir que todos cheguem ao mesmo número.</p></div>
          <div class="mini-card"><strong>Explicação</strong><p>O aluno precisa dizer qual variável testou e que evidência observou.</p></div>
          <div class="mini-card"><strong>Cooperação</strong><p>Colegas podem observar, registrar, organizar espaço e oferecer feedback respeitoso.</p></div>
          <div class="mini-card"><strong>Adaptação</strong><p>Distância, material, deslocamento e forma de participação podem mudar preservando o princípio da tarefa.</p></div>
          <div class="mini-card"><strong>Segurança</strong><p>Nenhuma medalha justifica esforço máximo mal preparado, superfície inadequada ou lançamento em área ocupada.</p></div>
        </div>

        <h3>9. Aplicação — organize uma estação que ensine alguma coisa</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio do Festival de Movimento</strong>
          <p>Em grupo, escolha corrida, salto ou lançamento e monte uma estação de 6 a 8 minutos. Ela precisa conter:</p>
          <ol>
            <li>um objetivo claro de movimento;</li>
            <li>uma versão inicial acessível;</li>
            <li>uma regra de segurança;</li>
            <li>uma variável técnica que possa ser testada;</li>
            <li>duas ou três tentativas;</li>
            <li>uma forma simples de registrar evidência;</li>
            <li>uma adaptação para quem não puder realizar a versão principal;</li>
            <li>uma pergunta final: <strong>“o que mudou e por quê?”</strong></li>
          </ol>
          <p>Outro grupo experimenta a estação e devolve feedback. Depois vocês revisam a proposta.</p>
        </div>

        <div class="source-box"><strong class="card-title">Referências para aprofundar</strong><p>Materiais oficiais e de referência tratam corrida, salto e lançamento como famílias fundamentais do atletismo. A World Athletics descreve o salto em distância por fases, e materiais da BNCC defendem experimentação, estratégias e progressão de aprendizagem nas práticas corporais. O capítulo adapta esses princípios para uma experiência escolar segura e inclusiva.</p><p><a href="https://worldathletics.org/disciplines/jumps/long-jump" target="_blank" rel="noopener noreferrer">World Athletics • Long Jump</a> · <a href="https://basenacionalcomum.mec.gov.br/" target="_blank" rel="noopener noreferrer">BNCC</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Correr, saltar e lançar podem continuar sendo desafiadores e até competitivos, mas a Educação Física escolar ganha muito quando o aluno aprende a <strong>observar fases do movimento, modificar uma variável, testar novamente, explicar o efeito e respeitar segurança e diferenças individuais</strong>.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Observar</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('03 Correr', showChapter);
})();
