(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function updateCameraLab(root) {
    const shot = $('#cameraShot', root);
    const angle = $('#cameraAngle', root);
    const light = $('#cameraLight', root);
    const svg = $('#cameraFrame', root);
    const note = $('#cameraNote', root);
    if (!shot || !angle || !light || !svg || !note) return;

    const views = {
      wide:'0 0 600 340',
      medium:'155 38 310 265',
      close:'225 58 165 155',
      detail:'275 105 76 72'
    };
    svg.setAttribute('viewBox', views[shot.value] || views.wide);

    const camera = $('#cameraMarker', svg);
    const ray = $('#cameraRay', svg);
    const angleSettings = {
      eye:[72,165,302,145,'altura próxima dos olhos tende a produzir relação mais neutra com a figura'],
      high:[78,52,302,145,'câmera acima aponta para baixo e altera proporções e relação espacial'],
      low:[78,300,302,145,'câmera abaixo aponta para cima e pode ampliar sensação de altura ou presença']
    };
    const [cx,cy,tx,ty,angleText] = angleSettings[angle.value] || angleSettings.eye;
    camera?.setAttribute('cx', cx); camera?.setAttribute('cy', cy);
    ray?.setAttribute('x1', cx); ray?.setAttribute('y1', cy);
    ray?.setAttribute('x2', tx); ray?.setAttribute('y2', ty);

    const glow = $('#sceneGlow', svg);
    const subject = $('#cameraSubject', svg);
    const lightSettings = {
      front:['#fff4cc','0.32','#efc9a8','luz frontal reduz sombras no rosto e tende a tornar volumes mais uniformes'],
      side:['#ffd38a','0.22','#d39b78','luz lateral acentua diferença entre claro e escuro e evidencia volume'],
      back:['#d9ecff','0.18','#6b7280','contraluz destaca contorno e pode reduzir detalhes da face, criando silhueta']
    };
    const [fill,opacity,subjectFill,lightText] = lightSettings[light.value] || lightSettings.front;
    glow?.setAttribute('fill', fill); glow?.setAttribute('opacity', opacity);
    subject?.setAttribute('fill', subjectFill);

    const shotText = {
      wide:'o plano aberto mostra bastante ambiente e ajuda a situar onde a ação acontece',
      medium:'o plano médio aproxima a pessoa sem eliminar completamente o ambiente',
      close:'o primeiro plano dá prioridade ao rosto e reduz informações do espaço',
      detail:'o plano detalhe recorta uma pequena parte e transforma algo mínimo em informação principal'
    }[shot.value];

    note.innerHTML = `<strong>Leia sua escolha:</strong> ${shotText}; ${angleText}; ${lightText}.`;
  }

  const sequenceShots = {
    room:{title:'Plano geral',text:'corredor vazio com uma caixa no chão',svg:'<svg viewBox="0 0 160 95" aria-hidden="true"><rect width="160" height="95" fill="#e8edf4"/><path d="M0 70L80 45L160 70V95H0Z" fill="#cbd5e1"/><rect x="69" y="58" width="22" height="16" rx="2" fill="#8b5e3c"/></svg>'},
    hand:{title:'Detalhe',text:'uma mão hesita antes de tocar a caixa',svg:'<svg viewBox="0 0 160 95" aria-hidden="true"><rect width="160" height="95" fill="#25324a"/><rect x="84" y="46" width="42" height="28" rx="3" fill="#9a6b45"/><path d="M18 58C42 42 58 42 77 55L65 68C49 60 36 62 23 72Z" fill="#e5b897"/></svg>'},
    face:{title:'Primeiro plano',text:'um rosto olha para fora do quadro',svg:'<svg viewBox="0 0 160 95" aria-hidden="true"><rect width="160" height="95" fill="#111827"/><circle cx="84" cy="48" r="28" fill="#d9aa88"/><circle cx="94" cy="43" r="3" fill="#111827"/><path d="M97 59Q107 63 115 57" stroke="#7c4a36" stroke-width="2" fill="none"/></svg>'},
    door:{title:'Plano médio',text:'uma porta começa a abrir ao fundo',svg:'<svg viewBox="0 0 160 95" aria-hidden="true"><rect width="160" height="95" fill="#d9e2ec"/><rect x="55" y="12" width="50" height="76" fill="#6b4f3a"/><polygon points="65,18 99,25 99,85 65,82" fill="#b88a5d"/><circle cx="93" cy="55" r="2" fill="#111827"/></svg>'}
  };

  function renderSequence(root, key) {
    const container = $('#sequencePreview', root);
    const note = $('#sequenceNote', root);
    if (!container || !note) return;
    const presets = {
      discover:{order:['room','hand','face'],text:'Do espaço para o detalhe e depois para a reação: o espectador primeiro entende a situação, depois percebe a ação e por fim lê uma possível emoção.'},
      suspense:{order:['hand','face','door'],text:'Começar pelo detalhe esconde o contexto. O rosto amplia expectativa e a porta só depois introduz uma nova informação. A ordem produz suspense.'},
      reveal:{order:['face','door','room'],text:'A reação aparece antes da causa. O espectador recebe uma pergunta, depois uma pista e só no final entende melhor o espaço.'}
    };
    const preset = presets[key] || presets.discover;
    container.innerHTML = preset.order.map((id,index) => {
      const shot = sequenceShots[id];
      return `<article class="mini-card"><span class="lesson-kicker">${index + 1}</span>${shot.svg}<strong>${shot.title}</strong><p>${shot.text}.</p></article>`;
    }).join('');
    note.innerHTML = `<strong>Montagem:</strong> ${preset.text}`;
  }

  function updateCaptionLab(root) {
    const select = $('#captionChoice', root);
    const output = $('#captionFeedback', root);
    if (!select || !output) return;
    const options = {
      neutral:'“Pátio do Colégio, São Paulo, 1887.” A legenda identifica lugar e data sem impor uma interpretação extensa.',
      nostalgia:'“Uma São Paulo simples que desapareceu.” A frase introduz nostalgia e uma avaliação que não está contida automaticamente na fotografia.',
      progress:'“A cidade prestes a entrar na modernidade.” A legenda cria uma narrativa histórica. Pode ser defensável, mas exige outras fontes além desta imagem.',
      evidence:'“Edificações, via, pessoas e organização do espaço podem ser observadas; causas, sentimentos e julgamentos precisam de outras evidências.” Esta formulação separa melhor observação de inferência.'
    };
    output.innerHTML = `<strong>Legenda escolhida:</strong> ${options[select.value] || options.neutral}`;
  }

  function init(root) {
    ['#cameraShot','#cameraAngle','#cameraLight'].forEach(sel => {
      $(sel, root)?.addEventListener('change', () => updateCameraLab(root));
    });
    updateCameraLab(root);

    $$('[data-sequence]', root).forEach(button => {
      button.addEventListener('click', () => renderSequence(root, button.dataset.sequence));
    });
    renderSequence(root, 'discover');

    $('#captionChoice', root)?.addEventListener('change', () => updateCaptionLab(root));
    updateCaptionLab(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Audiovisual',
      technical:'fotografia • enquadramento • plano • ângulo • luz • foco • ponto de vista • sequência • montagem • continuidade • storyboard',
      title:'07 — Fotografia, cinema e narrativa visual',
      objective:'<strong>Objetivo:</strong> compreender fotografia e cinema como linguagens construídas por escolhas de enquadramento, luz, ponto de vista, duração e montagem, analisando evidências visuais e criando pequenas narrativas com imagens.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão audiovisual</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” precisa de um vídeo de 30 segundos para convidar a escola.</strong>
            <p>Você tem um celular, um corredor, as obras da mostra, alguns colegas e pouco tempo. Parece simples: apontar e gravar. Mas surge o problema: <strong>o que mostrar primeiro? De perto ou de longe? A câmera fica alta ou baixa? O rosto aparece antes da obra? O que fica fora do quadro?</strong></p>
            <p>Fotografia e cinema começam justamente aí: toda imagem é também uma seleção.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como enquadramento e montagem fazem uma imagem mostrar uma coisa e esconder outras?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Elementos da linguagem audiovisual">
          <span>quadro</span><span>plano</span><span>ângulo</span><span>luz</span><span>foco</span><span>tempo</span><span>sequência</span><span>montagem</span><span>ponto de vista</span>
        </div>

        <h3>1. Fotografar não é copiar o mundo inteiro</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Milit%C3%A3o_Augusto_de_Azevedo_-_Pal%C3%A1cio%2C_Secretaria_do_Governo_e_Igreja_do_Col%C3%A9gio%2C_1887.jpg?width=900" alt="Fotografia histórica do Pátio do Colégio em São Paulo, realizada por Militão Augusto de Azevedo em 1887.">
          <div>
            <span class="lesson-kicker">São Paulo, 1887</span>
            <strong class="card-title">Militão Augusto de Azevedo — Pátio do Colégio</strong>
            <p>A fotografia registra elementos que estavam diante da câmera, mas não mostra a cidade inteira nem explica sozinha o que aquelas pessoas pensavam, por que o espaço era assim ou o que aconteceria depois.</p>
            <p><strong>Fotografia é evidência e também recorte.</strong> Posição da câmera, horário, tecnologia, escolha do assunto e enquadramento participam do resultado.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Milit%C3%A3o_Augusto_de_Azevedo_-_Pal%C3%A1cio,_Secretaria_do_Governo_e_Igreja_do_Col%C3%A9gio,_1887.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></p>
          </div>
        </div>

        ${choice('1','Fotografia como evidência','Qual afirmação é mais rigorosa ao analisar uma fotografia histórica?',[
          ['a','Tudo o que precisamos saber sobre o passado está visível na imagem'],
          ['b','A fotografia oferece evidências visuais, mas interpretação histórica exige contexto e outras fontes'],
          ['c','Fotografias antigas não servem como fonte porque são apenas arte']
        ],'b','Correto. A imagem pode oferecer evidências valiosas, mas não responde sozinha a todas as perguntas.','Separe o que você observa diretamente daquilo que está inferindo sobre causas, intenções e contexto.')}

        <h3>2. Quadro: escolher é também excluir</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Dentro do quadro</strong><p>O que a câmera deixa visível e disponível para nossa atenção.</p></div>
          <div class="mini-card"><strong>Fora de quadro</strong><p>O que não vemos, mas pode existir e até influenciar a cena: alguém olhando, um som, uma saída, uma ameaça, uma continuação.</p></div>
        </div>
        <div class="note-box"><strong>Imagem não é sinônimo de neutralidade.</strong><p>Mesmo sem manipulação digital, enquadrar já é decidir. Isso não torna toda fotografia “falsa”; significa que precisamos perguntar <strong>quem fotografou, de onde, quando, para quê e o que ficou de fora</strong>.</p></div>

        <h3>3. Camera Lab — mude a forma de olhar</h3>
        <div class="studio-box">
          <strong class="card-title">A mesma pessoa, o mesmo corredor, quatro planos</strong>
          <div class="three-col">
            <label class="mini-card"><strong>Plano</strong><select id="cameraShot" style="width:100%;margin-top:8px"><option value="wide">Aberto / geral</option><option value="medium">Médio</option><option value="close">Primeiro plano</option><option value="detail">Detalhe</option></select></label>
            <label class="mini-card"><strong>Ângulo</strong><select id="cameraAngle" style="width:100%;margin-top:8px"><option value="eye">Altura dos olhos</option><option value="high">Câmera alta</option><option value="low">Câmera baixa</option></select></label>
            <label class="mini-card"><strong>Luz</strong><select id="cameraLight" style="width:100%;margin-top:8px"><option value="front">Frontal</option><option value="side">Lateral</option><option value="back">Contraluz</option></select></label>
          </div>
          <svg id="cameraFrame" viewBox="0 0 600 340" role="img" aria-label="Laboratório gráfico de enquadramento com uma pessoa em um corredor" style="width:100%;max-height:390px;border-radius:14px;background:#dfe8f2">
            <rect width="600" height="340" fill="#dfe8f2"/>
            <rect id="sceneGlow" width="600" height="340" fill="#fff4cc" opacity=".32"/>
            <path d="M0 255L300 170L600 255V340H0Z" fill="#b9c7d6"/>
            <path d="M0 70L300 170L600 70" fill="none" stroke="#8aa0b5" stroke-width="4"/>
            <rect x="440" y="95" width="90" height="150" fill="#718096"/>
            <rect x="452" y="107" width="66" height="138" fill="#9a6b45"/>
            <g>
              <circle cx="302" cy="124" r="25" fill="#d9aa88"/>
              <rect id="cameraSubject" x="270" y="148" width="64" height="102" rx="24" fill="#efc9a8"/>
              <line x1="280" y1="178" x2="245" y2="222" stroke="#26364a" stroke-width="13" stroke-linecap="round"/>
              <line x1="324" y1="178" x2="360" y2="210" stroke="#26364a" stroke-width="13" stroke-linecap="round"/>
              <line x1="286" y1="245" x2="277" y2="305" stroke="#26364a" stroke-width="15" stroke-linecap="round"/>
              <line x1="318" y1="245" x2="330" y2="305" stroke="#26364a" stroke-width="15" stroke-linecap="round"/>
            </g>
            <circle id="cameraMarker" cx="72" cy="165" r="14" fill="#111827" opacity=".82"/>
            <line id="cameraRay" x1="72" y1="165" x2="302" y2="145" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 7"/>
          </svg>
          <div id="cameraNote" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${choice('2','Plano e informação','Se o objetivo é mostrar a relação entre uma pessoa e a organização inteira da mostra, qual plano tende a oferecer mais contexto espacial?',[
          ['a','Plano geral ou aberto'],
          ['b','Plano detalhe de um olho'],
          ['c','Qualquer plano mostra exatamente a mesma quantidade de informação']
        ],'a','Isso. Planos mais abertos costumam incluir mais ambiente. Planos próximos podem destacar expressão ou detalhe, mas reduzem contexto espacial.','Pergunte sempre: qual informação precisa permanecer visível para a intenção desta imagem?')}

        <h3>4. Luz e foco organizam atenção</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Luz frontal</strong><p>Tende a reduzir sombras muito marcadas sobre o que está voltado para a câmera.</p></div>
          <div class="mini-card"><strong>Luz lateral</strong><p>Pode acentuar volume, textura e contraste entre claro e escuro.</p></div>
          <div class="mini-card"><strong>Contraluz</strong><p>Pode transformar detalhes em silhueta e destacar contornos.</p></div>
          <div class="mini-card"><strong>Foco</strong><p>Em muitas imagens, nitidez e desfoque ajudam a estabelecer hierarquia entre planos.</p></div>
        </div>
        <div class="note-box"><strong>Sem receita fixa.</strong><p>Luz baixa não significa automaticamente “tristeza”; câmera baixa não significa obrigatoriamente “poder”. Esses efeitos dependem da combinação com ação, contexto, som, atuação, cor e montagem.</p></div>

        <h3>5. Cinema acrescenta tempo e sequência</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Grava%C3%A7%C3%B5es_Hei_de_Vencer.png?width=900" alt="Registro de filmagem do filme brasileiro Hei de Vencer, de 1924, com equipe e câmera de cinema.">
          <div>
            <span class="lesson-kicker">Cinema brasileiro, 1924</span>
            <strong class="card-title">Nos bastidores de Hei de Vencer</strong>
            <p>Uma produção cinematográfica precisa decidir posição de câmera, duração, ação, repetição, cenário e sequência. O filme final é construído a partir de tomadas que podem ter sido registradas separadamente.</p>
            <p><strong>Tomada</strong> é um trecho registrado continuamente entre iniciar e interromper a gravação. <strong>Plano</strong> também é usado para falar do enquadramento/escala visual de uma tomada.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Grava%C3%A7%C3%B5es_Hei_de_Vencer.png" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC BY 2.5</a></p>
          </div>
        </div>

        <h3>6. Montagem: a ordem também conta</h3>
        <div class="studio-box">
          <strong class="card-title">Sequence Lab</strong>
          <p>As imagens são parecidas, mas a ordem muda o que o espectador sabe e quando sabe.</p>
          <div class="choice-row">
            <button type="button" data-sequence="discover">Contexto → ação → reação</button>
            <button type="button" data-sequence="suspense">Detalhe → reação → pista</button>
            <button type="button" data-sequence="reveal">Reação → pista → contexto</button>
          </div>
          <div id="sequencePreview" class="three-col" aria-live="polite"></div>
          <div id="sequenceNote" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${choice('3','Montagem','Por que trocar a ordem dos mesmos planos pode mudar a narrativa?',[
          ['a','Porque o espectador recebe informações em momentos diferentes e cria relações entre os planos'],
          ['b','Porque a ordem não interfere; montagem só serve para cortar erros'],
          ['c','Porque todo primeiro plano significa a mesma coisa em qualquer sequência']
        ],'a','Correto. Montagem organiza tempo, informação, expectativa e relações entre imagens e sons.','Pense no que o espectador sabe no primeiro, segundo e terceiro momento. A ordem controla essa descoberta.')}

        <h3>7. Continuidade e ruptura são escolhas</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Continuidade</strong><p>Busca fazer cortes parecerem coerentes: direção de olhar, posição, movimento e espaço ajudam o espectador a acompanhar a ação.</p></div>
          <div class="mini-card"><strong>Ruptura</strong><p>Também pode ser intencional: saltos, repetições, cortes bruscos e desorientação podem produzir estranhamento ou chamar atenção para a própria montagem.</p></div>
        </div>
        ${choice('4','Corte','Um corte “estranho” é sempre erro?',[
          ['a','Sim, cinema correto nunca deixa o espectador perceber cortes'],
          ['b','Não. Pode ser erro de continuidade ou uma ruptura deliberada; é preciso analisar o efeito e a intenção'],
          ['c','Só filmes sem fala podem usar cortes']
        ],'b','Isso. Linguagem audiovisual possui convenções, mas artistas também podem quebrá-las conscientemente.','Antes de classificar como erro, observe se a ruptura produz um efeito coerente com a proposta.')}

        <h3>8. Imagem + legenda: o texto também enquadra</h3>
        <div class="studio-box">
          <strong class="card-title">Caption Lab</strong>
          <p>Volte mentalmente à fotografia de São Paulo. A imagem é a mesma; troque a legenda e observe como a leitura é conduzida.</p>
          <label class="mini-card"><strong>Legenda</strong><select id="captionChoice" style="width:100%;margin-top:8px"><option value="neutral">Identificação factual</option><option value="nostalgia">Leitura nostálgica</option><option value="progress">Narrativa de progresso</option><option value="evidence">Separar observação e inferência</option></select></label>
          <div id="captionFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <div class="source-box"><strong class="card-title">Isso vale para redes sociais.</strong><p>Uma foto recortada, uma legenda, uma trilha e três segundos retirados de um vídeo podem orientar interpretações muito diferentes. Ler criticamente imagem digital exige observar <strong>origem, contexto, recorte, sequência e edição</strong>, não apenas perguntar se “a foto é real”.</p></div>

        <h3>9. Cinema também inventa mundos</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Trip-to-moon-1902.jpg?width=700" alt="Cartaz histórico de Viagem à Lua, filme de Georges Méliès de 1902, com uma nave atingindo o rosto da Lua.">
          <figcaption class="artwork-meta">
            <strong>Viagem à Lua — Georges Méliès, 1902</strong>
            <small>Desde cedo, cinema não serviu apenas para registrar acontecimentos: cenário, atuação, trucagens, corte e imaginação permitiram criar acontecimentos impossíveis diante da câmera.</small>
            <a href="https://commons.wikimedia.org/wiki/File:Trip-to-moon-1902.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a>
          </figcaption>
        </figure>

        ${choice('5','Registro e criação','Qual afirmação descreve melhor fotografia e cinema?',[
          ['a','São sempre registros neutros do que aconteceu'],
          ['b','Podem documentar, interpretar, encenar, inventar, persuadir ou combinar essas funções'],
          ['c','Só se tornam arte quando não mostram pessoas reais']
        ],'b','Correto. As linguagens fotográfica e audiovisual podem assumir funções muito diferentes, e a análise precisa considerar contexto e escolhas de produção.','Evite opor “documento” e “arte” como se fossem categorias que nunca se misturam.')}

        <h3>10. Storyboard: pense antes de apertar REC</h3>
        <div class="challenge-box">
          <strong class="card-title">Seu convite de 30 segundos</strong>
          <p>Planeje de 5 a 7 planos para apresentar a mostra “Isso é arte?”. Pode desenhar com bonecos simples; qualidade do desenho não é o objetivo.</p>
          <ol>
            <li>Defina <strong>para quem</strong> é o vídeo e o que essa pessoa precisa entender.</li>
            <li>Escolha um plano de contexto para situar a mostra.</li>
            <li>Inclua pelo menos um plano próximo ou detalhe.</li>
            <li>Decida onde haverá movimento de câmera — se realmente for necessário.</li>
            <li>Planeje a ordem dos planos e a duração aproximada de cada um.</li>
            <li>Indique voz, som ambiente, música original ou silêncio.</li>
            <li>Faça o teste sem gravar: mostre o storyboard a alguém e pergunte <strong>“o que você entendeu primeiro?”</strong></li>
            <li>Revise antes de filmar.</li>
          </ol>
        </div>

        <div class="note-box"><strong>Produção responsável.</strong><p>Antes de fotografar ou filmar pessoas, respeite autorização, privacidade e regras da escola. Não exponha colegas em situações constrangedoras nem publique imagem de terceiros sem considerar consentimento e finalidade.</p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Fotografia e cinema não apenas mostram: eles <strong>selecionam e organizam</strong>. Enquadramento, plano, ângulo, luz, foco, duração, som, sequência e montagem determinam que informações aparecem, em que ordem e de qual ponto de vista. Ler imagens criticamente e produzi-las com intenção são duas partes do mesmo aprendizado.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('07 Fotografia', showChapter);
})();