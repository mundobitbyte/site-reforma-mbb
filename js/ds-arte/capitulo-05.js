(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function init(root) {
    const level = $('#movementLevel', root);
    const path = $('#movementPath', root);
    const time = $('#movementTime', root);
    const weight = $('#movementWeight', root);
    const flow = $('#movementFlow', root);
    const figure = $('#movementFigure', root);
    const trail = $('#movementTrail', root);
    const floor = $('#movementFloor', root);
    const note = $('#movementNote', root);

    const updateMovement = () => {
      if (!level || !path || !time || !weight || !flow || !figure || !trail || !floor || !note) return;

      const levelY = { low: 175, middle: 120, high: 70 }[level.value] || 120;
      figure.setAttribute('transform', `translate(0 ${levelY - 120})`);

      const trails = {
        straight: 'M85 205 L515 205',
        diagonal: 'M90 220 L500 72',
        curve: 'M80 205 C180 45 410 45 520 205',
        zigzag: 'M80 205 L180 85 L285 205 L390 85 L520 205'
      };
      trail.setAttribute('d', trails[path.value] || trails.straight);

      const pace = time.value === 'quick' ? 'rápido e recortado' : time.value === 'mixed' ? 'alternando aceleração e sustentação' : 'sustentado e prolongado';
      const force = weight.value === 'strong' ? 'com peso/força mais marcados' : 'com leveza e menor sensação de peso';
      const continuity = flow.value === 'free' ? 'com fluxo mais livre e contínuo' : 'com fluxo mais controlado e interrompido';
      const levelText = level.value === 'low' ? 'nível baixo, próximo ao chão' : level.value === 'high' ? 'nível alto, ampliando a verticalidade' : 'nível médio';
      const pathText = { straight:'trajeto direto', diagonal:'trajeto diagonal', curve:'trajeto curvo', zigzag:'trajeto quebrado em zigue-zague' }[path.value];

      figure.style.opacity = weight.value === 'light' ? '.72' : '1';
      trail.style.strokeWidth = weight.value === 'strong' ? '8' : '4';
      trail.style.strokeDasharray = flow.value === 'bound' ? '14 10' : '0';
      floor.style.opacity = level.value === 'low' ? '.95' : '.45';
      note.innerHTML = `<strong>Leia a frase corporal:</strong> ${levelText}; ${pathText}; tempo ${pace}; movimento ${force}; ${continuity}. Mude apenas uma variável e observe como a intenção percebida se transforma.`;
    };

    [level,path,time,weight,flow].forEach(control => control?.addEventListener('change', updateMovement));
    updateMovement();

    const relation = $('#relationMode', root);
    const relationPreview = $('#relationPreview', root);
    const relationNote = $('#relationNote', root);

    const updateRelation = () => {
      if (!relation || !relationPreview || !relationNote) return;
      const figures = $$('[data-relation-figure]', relationPreview);
      figures.forEach(item => item.style.display = 'none');
      const mode = relation.value;
      $$(`[data-relation-figure="${mode}"]`, relationPreview).forEach(item => item.style.display = 'block');
      const texts = {
        solo:'Uma pessoa ocupa o espaço sozinha. Direção, escala e pausa ganham grande responsabilidade na leitura.',
        mirror:'Duas pessoas espelham gestos. Sem tocar, criam relação por direção, timing e semelhança.',
        contrast:'Duas pessoas fazem qualidades opostas: alto/baixo, rápido/sustentado ou leve/forte. O contraste vira estrutura.',
        circle:'O grupo organiza uma roda. Centro, periferia, entrada, saída, observação e participação passam a produzir sentido.'
      };
      relationNote.innerHTML = `<strong>Relação escolhida:</strong> ${texts[mode]}`;
    };

    relation?.addEventListener('change', updateRelation);
    updateRelation();
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Corpo e movimento',
      technical:'corpo • espaço • nível • direção • trajetória • tempo • peso • fluxo • relação • presença • composição',
      title:'05 — Dança, corpo, espaço e presença',
      objective:'<strong>Objetivo:</strong> compreender a dança como linguagem artística organizada por escolhas de corpo, espaço, tempo, peso, fluxo e relação, analisando diferentes contextos e criando pequenas composições corporais inclusivas e intencionais.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Corpo em cena</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” precisa de uma transição de 40 segundos entre a entrada e a primeira sala.</strong>
            <p>A equipe pensou em colocar três pessoas simplesmente caminhando pelo corredor. Alguém perguntou: <strong>“Se todo mundo se move todos os dias, quando movimento vira dança?”</strong></p>
            <p>Em vez de decorar passos, vocês vão investigar como um gesto comum muda quando recebe <strong>direção, tempo, peso, pausa, trajetória, relação com outras pessoas e intenção</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como o corpo pode organizar movimento para produzir presença e sentido?</p>
          </div>
        </section>

        <div class="source-box"><strong class="card-title">Você não precisa “saber dançar” para estudar este capítulo.</strong><p>As experiências podem ser feitas em pé, sentado, com braços e tronco, com deslocamento reduzido, observando outra pessoa ou planejando graficamente. O foco é perceber e criar relações de movimento — não medir habilidade atlética.</p></div>

        <div class="art-dimensions" aria-label="Lentes para analisar movimento">
          <span>corpo</span><span>espaço</span><span>tempo</span><span>peso</span><span>fluxo</span><span>relação</span><span>presença</span>
        </div>

        <h3>1. Movimento cotidiano e movimento organizado</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Gesto cotidiano</strong><p>Levantar a mão, caminhar, sentar, virar a cabeça ou entregar um objeto já possuem direção, duração e energia.</p></div>
          <div class="mini-card"><strong>Transformação</strong><p>Repetir, ampliar, desacelerar, inverter, interromper ou combinar o gesto muda sua qualidade.</p></div>
          <div class="mini-card"><strong>Composição</strong><p>Quando escolhas são organizadas no tempo e no espaço, o movimento pode construir uma experiência artística.</p></div>
        </div>

        ${choice('1','Do cotidiano à dança','Qual transformação mostra melhor que um gesto comum pode entrar num processo coreográfico?',[
          ['a','Repetir o gesto com variações de tempo, direção, escala e relação com outro corpo'],
          ['b','Executar exatamente qualquer gesto uma única vez, sem observar nenhuma escolha'],
          ['c','Usar obrigatoriamente um passo de dança famoso']
        ],'a','Isso. Coreografar não depende apenas de passos codificados: envolve selecionar e organizar qualidades, trajetórias, relações e durações.','Dança pode transformar movimentos cotidianos. O ponto central é a organização consciente das relações de movimento.')}

        <h3>2. O espaço não é um fundo vazio</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Frevo_dancer_-_Recife%2C_Pernambuco%2C_Brazil.jpg?width=900" alt="Passista de frevo em Recife realizando movimento amplo com uma pequena sombrinha colorida.">
          <div>
            <span class="lesson-kicker">Referência brasileira</span>
            <strong class="card-title">Frevo — Recife, Pernambuco</strong>
            <p>Observe a relação entre <strong>corpo, amplitude, direção, níveis e objeto</strong>. A sombrinha participa visualmente da ação; braços e pernas ampliam direções; o corpo parece ocupar muito mais espaço do que sua posição física isolada.</p>
            <p>Em vez de tentar copiar um passo, pergunte: <strong>que linhas o corpo desenha no espaço?</strong> Onde há expansão? Onde aparece mudança de nível?</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Frevo_dancer_-_Recife,_Pernambuco,_Brazil.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • marcusrg • CC BY 2.0</a></p>
          </div>
        </div>

        <div class="two-col">
          <div class="mini-card"><strong>Níveis</strong><p>Baixo, médio e alto descrevem relações do corpo com a verticalidade e o chão. Não são “notas de qualidade”.</p></div>
          <div class="mini-card"><strong>Direções</strong><p>Frente, trás, lados, diagonais, cima e baixo alteram foco e orientação.</p></div>
          <div class="mini-card"><strong>Trajetória</strong><p>Um deslocamento pode ser direto, curvo, circular, quebrado, aproximar ou afastar corpos.</p></div>
          <div class="mini-card"><strong>Espaço pessoal e compartilhado</strong><p>O movimento também negocia proximidade, distância, centro, borda e circulação.</p></div>
        </div>

        ${choice('2','Espaço','Uma pessoa permanece praticamente no mesmo lugar, mas move braços e tronco em grandes diagonais. Ela está usando espaço?',[
          ['a','Não; espaço só existe quando há caminhada'],
          ['b','Sim; alcance, direção, nível e desenho corporal também organizam espaço'],
          ['c','Somente se houver cenário']
        ],'b','Correto. Deslocamento é apenas uma das maneiras de organizar espaço. Alcance e orientação corporal já produzem desenho espacial.','Observe que o espaço começa na relação do corpo consigo mesmo, com o chão, com direções e com o entorno.')}

        <h3>3. Tempo não é apenas “rápido ou devagar”</h3>
        <div class="source-box"><strong class="card-title">Tempo também organiza expectativa.</strong><p>Movimentos podem ser rápidos, sustentados, regulares, irregulares, simultâneos ou defasados. Uma pausa pode concentrar atenção tanto quanto uma sequência intensa. O capítulo anterior mostrou isso no som; agora o corpo torna essa organização visível.</p></div>

        <div class="challenge-box"><strong class="card-title">Experimento de 20 segundos</strong><ol><li>Escolha um gesto simples e confortável: abrir a mão, elevar um braço, girar o punho ou inclinar o tronco.</li><li>Faça uma vez em aproximadamente 1 segundo.</li><li>Repita o mesmo gesto em 5 segundos.</li><li>Inclua uma pausa antes de concluí-lo.</li><li>Compare: a ação parece ter a mesma intenção?</li></ol></div>

        ${choice('3','Tempo e pausa','Ao desacelerar um gesto e inserir uma pausa, o que necessariamente acontece?',[
          ['a','A estrutura temporal muda e pode alterar expectativa, atenção e interpretação'],
          ['b','O gesto deixa automaticamente de ser dança'],
          ['c','Nada muda porque a forma final do corpo é a mesma']
        ],'a','Isso. Em dança, o percurso temporal do movimento importa tanto quanto a posição final.','Não observe apenas “onde o corpo chegou”. Observe como, quanto tempo e com quais interrupções ele chegou.')}

        <h3>4. Peso e fluxo: qualidades percebidas</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Leve ↔ forte</strong><p>Não significa força física real. Descreve a qualidade percebida: delicada, suspensa, pressionada, firme, incisiva...</p></div>
          <div class="mini-card"><strong>Livre ↔ controlado</strong><p>Um movimento pode parecer continuar sem bloqueio ou ser contido, interrompido e cuidadosamente controlado.</p></div>
        </div>
        <div class="note-box"><strong>Evite transformar essas palavras em caixas rígidas.</strong><p>Um mesmo movimento pode combinar qualidades e mudar durante sua execução. Os termos servem para observar e criar, não para etiquetar pessoas ou estilos inteiros.</p></div>

        <h3>5. Movement Lab — desenhe uma frase corporal</h3>
        <div class="studio-box">
          <strong class="card-title">Movement Lab</strong>
          <p>Mude uma variável por vez. O desenho abaixo não pretende “simular uma dança”; ele ajuda a visualizar decisões que depois podem ser experimentadas pelo corpo.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Nível</strong><select id="movementLevel" style="width:100%;margin-top:8px"><option value="low">Baixo</option><option value="middle" selected>Médio</option><option value="high">Alto</option></select></label>
            <label class="mini-card"><strong>Trajetória</strong><select id="movementPath" style="width:100%;margin-top:8px"><option value="straight">Direta</option><option value="diagonal">Diagonal</option><option value="curve" selected>Curva</option><option value="zigzag">Zigue-zague</option></select></label>
            <label class="mini-card"><strong>Tempo</strong><select id="movementTime" style="width:100%;margin-top:8px"><option value="sustained">Sustentado</option><option value="quick">Rápido</option><option value="mixed" selected>Variado</option></select></label>
            <label class="mini-card"><strong>Peso percebido</strong><select id="movementWeight" style="width:100%;margin-top:8px"><option value="light">Leve</option><option value="strong" selected>Forte</option></select></label>
            <label class="mini-card"><strong>Fluxo</strong><select id="movementFlow" style="width:100%;margin-top:8px"><option value="free" selected>Livre</option><option value="bound">Controlado/interrompido</option></select></label>
          </div>
          <svg id="movementPreview" viewBox="0 0 600 260" role="img" aria-label="Diagrama de uma figura humana e uma trajetória que mudam conforme os controles" style="width:100%;border-radius:12px;background:#f7f3f6;border:1px solid #ddcfd8">
            <line id="movementFloor" x1="40" y1="225" x2="560" y2="225" stroke="#7f6577" stroke-width="3"/>
            <path id="movementTrail" d="M80 205 C180 45 410 45 520 205" fill="none" stroke="#a24f78" stroke-width="4" stroke-linecap="round"/>
            <g id="movementFigure" transform="translate(0 0)" stroke="#3f2537" stroke-width="8" stroke-linecap="round" fill="none">
              <circle cx="300" cy="62" r="22" fill="#f4d6c8" stroke-width="5"/>
              <line x1="300" y1="86" x2="300" y2="150"/>
              <line x1="300" y1="105" x2="245" y2="132"/>
              <line x1="300" y1="105" x2="355" y2="78"/>
              <line x1="300" y1="150" x2="258" y2="205"/>
              <line x1="300" y1="150" x2="350" y2="194"/>
            </g>
          </svg>
          <div id="movementNote" class="choice-feedback" aria-live="polite"></div>
        </div>

        <h3>6. Dança também acontece entre pessoas</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Samba_de_Roda.jpg?width=1000" alt="Celebração de samba de roda em comunidade quilombola na Bahia, com participantes organizados coletivamente no espaço.">
          <div>
            <span class="lesson-kicker">Relação e comunidade</span>
            <strong class="card-title">Samba de roda — Bahia</strong>
            <p>A roda não é apenas um “formato bonito”. Ela organiza <strong>quem ocupa o centro, quem observa, quem participa, como alguém entra ou sai e como o grupo sustenta o acontecimento</strong>.</p>
            <p>Ao analisar uma dança coletiva, olhe além do indivíduo: proximidade, direção do olhar, resposta entre corpos e organização espacial também fazem parte da linguagem.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Samba_de_Roda.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CAMBRISA • CC BY-SA 4.0</a></p>
          </div>
        </div>

        ${choice('4','Relação','Em uma dança coletiva, qual análise é mais completa?',[
          ['a','Observar somente se cada pessoa executou o mesmo passo'],
          ['b','Observar também formação, proximidade, resposta, simultaneidade, contraste, entradas, saídas e atenção entre participantes'],
          ['c','Ignorar o espaço porque apenas a música importa']
        ],'b','Correto. Relação é parte da composição: corpos podem acompanhar, contrastar, espelhar, responder, sustentar ou reorganizar uns aos outros.','Dança coletiva não é apenas soma de indivíduos; a relação entre eles também produz forma e sentido.')}

        <h3>7. Relation Lab — mude a organização do grupo</h3>
        <div class="studio-box">
          <strong class="card-title">Relation Lab</strong>
          <label class="mini-card"><strong>Organização</strong><select id="relationMode" style="width:100%;margin-top:8px"><option value="solo">Solo</option><option value="mirror" selected>Dupla espelhada</option><option value="contrast">Dupla em contraste</option><option value="circle">Roda/grupo</option></select></label>
          <svg id="relationPreview" viewBox="0 0 600 230" role="img" aria-label="Diagramas de relações entre corpos no espaço" style="width:100%;border-radius:12px;background:#fff;border:1px solid #ddcfd8;margin-top:12px">
            <g data-relation-figure="solo"><circle cx="300" cy="72" r="20" fill="#b15c83"/><line x1="300" y1="92" x2="300" y2="155" stroke="#4b3042" stroke-width="8"/><line x1="300" y1="112" x2="245" y2="90" stroke="#4b3042" stroke-width="8"/><line x1="300" y1="112" x2="352" y2="138" stroke="#4b3042" stroke-width="8"/></g>
            <g data-relation-figure="mirror"><circle cx="220" cy="72" r="18" fill="#b15c83"/><circle cx="380" cy="72" r="18" fill="#6d6fa8"/><line x1="220" y1="90" x2="220" y2="155" stroke="#4b3042" stroke-width="7"/><line x1="380" y1="90" x2="380" y2="155" stroke="#4b3042" stroke-width="7"/><line x1="220" y1="110" x2="285" y2="85" stroke="#4b3042" stroke-width="7"/><line x1="380" y1="110" x2="315" y2="85" stroke="#4b3042" stroke-width="7"/></g>
            <g data-relation-figure="contrast"><circle cx="210" cy="155" r="18" fill="#b15c83"/><circle cx="400" cy="55" r="18" fill="#6d6fa8"/><line x1="210" y1="173" x2="210" y2="205" stroke="#4b3042" stroke-width="7"/><line x1="400" y1="73" x2="400" y2="145" stroke="#4b3042" stroke-width="7"/></g>
            <g data-relation-figure="circle"><circle cx="300" cy="115" r="68" fill="none" stroke="#d7a9bf" stroke-width="3"/><circle cx="300" cy="42" r="15" fill="#b15c83"/><circle cx="365" cy="78" r="15" fill="#6d6fa8"/><circle cx="365" cy="152" r="15" fill="#b15c83"/><circle cx="300" cy="188" r="15" fill="#6d6fa8"/><circle cx="235" cy="152" r="15" fill="#b15c83"/><circle cx="235" cy="78" r="15" fill="#6d6fa8"/></g>
          </svg>
          <div id="relationNote" class="choice-feedback" aria-live="polite"></div>
        </div>

        <h3>8. Presença não é “fazer cara de artista”</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Contemporary_Dance.jpg?width=1000" alt="Artistas em uma apresentação de dança contemporânea no palco, usando diferentes níveis e relações corporais.">
          <figcaption class="artwork-meta"><strong>Dança contemporânea — apresentação de 2022</strong><small>Observe direção do olhar, distribuição dos corpos, relação com o chão, distância e atenção entre participantes.</small><a href="https://commons.wikimedia.org/wiki/File:Contemporary_Dance.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • GFF2023 • CC BY-SA 4.0</a></figcaption>
        </figure>
        <div class="source-box"><strong class="card-title">Presença é relação de atenção.</strong><p>Em cena, presença envolve como a pessoa sustenta escolhas, percebe espaço, tempo, parceiros e público. Não existe uma única “postura correta” de presença. Imobilidade pode ser tão intensa quanto movimento amplo, dependendo da composição.</p></div>

        <h3>9. Contexto importa: não reduza uma dança a “passinhos”</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Quem dança?</strong><p>Indivíduo, grupo, comunidade, profissionais, participantes ocasionais?</p></div>
          <div class="mini-card"><strong>Onde e quando?</strong><p>Rua, palco, festa, ritual, competição, celebração, vídeo, escola?</p></div>
          <div class="mini-card"><strong>Para quê?</strong><p>Celebrar, conviver, narrar, protestar, investigar movimento, competir, brincar, preservar memória?</p></div>
          <div class="mini-card"><strong>Como circula?</strong><p>Aprendizagem comunitária, escola, companhia, mídia, redes, festivais, patrimônio?</p></div>
        </div>
        <div class="note-box"><strong>Cuidado com estereótipos.</strong><p>Não existe “o corpo brasileiro” nem uma única forma de dançar frevo, samba, dança contemporânea ou qualquer outra prática. Analise situações, grupos, histórias e escolhas concretas sem transformar diversidade cultural em caricatura.</p></div>

        <h3>10. Missão final — coreografe a transição da mostra</h3>
        <div class="challenge-box">
          <strong class="card-title">40 segundos: chegada → encontro → abertura</strong>
          <p>Em grupo pequeno, criem uma sequência possível para o espaço da escola. Ela pode ser executada em pé, sentada ou com mobilidade reduzida.</p>
          <ol>
            <li>Escolham <strong>um gesto cotidiano</strong> como matéria inicial.</li>
            <li>Transformem-no por repetição, escala, direção ou velocidade.</li>
            <li>Usem pelo menos <strong>dois níveis ou alcances</strong>.</li>
            <li>Definam uma trajetória: direta, curva, diagonal, circular ou outra.</li>
            <li>Incluam uma mudança de tempo e uma pausa.</li>
            <li>Organizem uma relação: espelho, contraste, resposta, uníssono, roda ou entrada/saída.</li>
            <li>Apresentem e expliquem: <strong>qual escolha tornou a intenção mais perceptível?</strong></li>
          </ol>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Dança não é apenas coleção de passos. Corpo, espaço, tempo, peso, fluxo, relação e presença podem ser organizados para criar experiências e sentidos. Analisar dança exige observar escolhas formais e também considerar contexto, história, participação e circulação cultural.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('05 Dança', showChapter);
})();