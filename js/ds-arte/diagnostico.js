(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Leitura visual',prompt:'Na obra A, “A Grande Onda de Kanagawa”, qual recurso ajuda mais a produzir sensação de movimento?',options:['Curvas, diagonais e repetição das ondas','Somente o título da obra','A ausência total de formas','Ainda não sei'],answer:0},
    {area:'Expressão e cor',prompt:'Na obra B, “O Grito”, as deformações e as cores podem ser analisadas principalmente como:',options:['Recursos que ajudam a construir uma atmosfera emocional','Erros que anulam a obra','Elementos sem relação com o sentido','Ainda não sei'],answer:0},
    {area:'Composição',prompt:'Na obra C, “Mona Lisa”, observar pose, olhar, luz e fundo ajuda a compreender:',options:['Como escolhas de composição orientam nossa leitura do retrato','Apenas a idade exata da pessoa retratada','Somente o preço atual da obra','Ainda não sei'],answer:0},
    {area:'Música e escuta',prompt:'Dois instrumentos tocam a mesma nota, mas soam diferentes. Qual elemento ajuda a explicar essa diferença?',options:['Timbre','Moldura','Perspectiva linear','Ainda não sei'],answer:0},
    {area:'Dança e movimento',prompt:'Ao analisar uma dança, além dos passos, o que também importa?',options:['Relações entre corpo, espaço, tempo, peso e fluência','Somente a roupa usada','Apenas a quantidade de pessoas','Ainda não sei'],answer:0},
    {area:'Teatro e cena',prompt:'Uma cena teatral muda completamente quando iluminação, figurino, cenário e trilha são alterados. Isso mostra que:',options:['A cena é construída por vários elementos que produzem sentido juntos','Somente o texto falado importa','Os elementos visuais nunca interferem na interpretação','Ainda não sei'],answer:0},
    {area:'Fotografia e audiovisual',prompt:'Uma fotografia pode mudar de sentido quando o fotógrafo aproxima, corta ou escolhe outro ângulo. Esse processo envolve principalmente:',options:['Enquadramento e ponto de vista','Afinação musical','Escultura em pedra','Ainda não sei'],answer:0},
    {area:'Patrimônio e cultura',prompt:'Uma festa tradicional transmitida entre gerações pode ser reconhecida como patrimônio cultural mesmo sem ser um prédio ou objeto?',options:['Sim, práticas e saberes também podem integrar o patrimônio cultural','Não, patrimônio é sempre um edifício antigo','Somente se houver ingresso pago','Ainda não sei'],answer:0},
    {area:'Arte e tecnologia',prompt:'Uma ferramenta digital ou de IA participa de uma criação artística. Qual pergunta continua sendo necessária?',options:['Quais escolhas, referências, intenções, autoria e responsabilidades orientam o uso da ferramenta?','A ferramenta torna qualquer resultado automaticamente uma grande obra','Tecnologia elimina a necessidade de decisões humanas','Ainda não sei'],answer:0},
    {area:'Processo de criação',prompt:'Durante uma criação, experimentar, errar, comparar versões e revisar faz parte do processo?',options:['Sim, o processo de criação inclui exploração e revisão','Não, arte verdadeira precisa surgir pronta de primeira','Somente artistas famosos podem revisar','Ainda não sei'],answer:0},
    {area:'Concepção inicial: talento',prompt:'Para estudar e criar Arte é obrigatório “nascer com dom”?',options:['Sim','Não; percepção, repertório, técnica, experimentação e reflexão podem ser desenvolvidos','Só vale para quem desenha bem','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: gosto e análise',prompt:'Dizer “eu não gostei” encerra toda análise de uma obra?',options:['Sim, gosto pessoal é a única coisa que importa','Não; gosto é válido, mas também podemos observar linguagem, contexto, técnica, intenção e efeitos','Toda obra precisa agradar todo mundo','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Leitura visual':'Observe linhas, formas, direções, contrastes, ritmo visual, escala e relação entre figura e fundo.',
    'Expressão e cor':'Cor, distorção, textura e intensidade podem construir atmosferas e afetar a percepção.',
    'Composição':'Treine perceber onde seu olhar entra na imagem e como os elementos foram organizados.',
    'Música e escuta':'Escute ritmo, timbre, intensidade, textura, repetição, silêncio e relação entre partes.',
    'Dança e movimento':'Analise corpo, espaço, tempo, peso, fluência, relação com o grupo e com o ambiente.',
    'Teatro e cena':'Texto, corpo, voz, espaço, iluminação, cenário, figurino e som atuam juntos na cena.',
    'Fotografia e audiovisual':'Enquadramento, ângulo, corte, duração, montagem, som e sequência mudam o que percebemos.',
    'Patrimônio e cultura':'Patrimônio pode ser material ou imaterial e envolve memória, identidade, preservação e disputa de sentidos.',
    'Arte e tecnologia':'Ferramentas digitais ampliam possibilidades, mas autoria, ética, referência e intenção continuam importantes.',
    'Processo de criação':'Criar envolve testar, escolher, combinar, revisar e refletir — não apenas produzir um resultado final.'
  };

  function markup(q,index) {
    const name = `artDiag${index}`;
    const unscored = q.scored === false;
    return `<div class="quiz-item${unscored?' is-unscored':''}" data-area="${q.area}" data-answer="${q.answer}" data-scored="${unscored?'false':'true'}">
      ${unscored?'<span class="question-tag">Concepção inicial • não vale ponto</span>':''}
      <p>${index+1}. ${q.prompt}</p>
      ${q.options.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function showDiagnostic() {
    MBB.showLesson({
      unit:'Antes de começar',
      technical:'percepção • artes visuais • música • dança • teatro • audiovisual • patrimônio • criação',
      title:'Quanto você já percebe quando encontra arte?',
      objective:'<strong>Objetivo:</strong> identificar repertórios e modos de observar, escutar, interpretar e criar antes de iniciar o percurso da 1ª série.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Diagnóstico visual e sensorial</span>
          <div class="hero-box">
            <strong class="card-title">Arte não começa decorando nomes de movimentos artísticos.</strong>
            <p>Ela começa quando você <strong>observa, escuta, sente, compara, pergunta e tenta explicar por que algo produz determinado efeito</strong>. Este diagnóstico quer descobrir como você já faz isso — mesmo sem usar palavras técnicas.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que você percebe antes mesmo de saber o nome da técnica?</p>
          </div>
        </section>

        <div class="diagnostic-intro">
          <div class="mini-card"><strong>Você não precisa “saber desenhar”</strong><p>Arte envolve percepção, escuta, corpo, repertório, criação, interpretação, pesquisa, tecnologia e muitas formas de expressão.</p></div>
          <div class="mini-card"><strong>Imagem aqui é evidência</strong><p>As obras abaixo não estão decorando a página. Elas serão usadas para observar composição, movimento, cor e expressão.</p></div>
        </div>

        <div class="art-gallery" aria-label="Três obras para observação">
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Katsushika_Hokusai_The_Great_Wave_off_Kanagawa_1830.jpg?width=800" alt="Gravura A Grande Onda de Kanagawa, de Hokusai, com uma grande onda curva sobre barcos e o Monte Fuji ao fundo.">
            <figcaption class="artwork-meta"><strong>Obra A — A Grande Onda de Kanagawa</strong><small>Katsushika Hokusai, c. 1830–1832 • xilogravura.</small><a href="https://commons.wikimedia.org/wiki/File:Katsushika_Hokusai_The_Great_Wave_off_Kanagawa_1830.jpg" target="_blank" rel="noopener noreferrer">Fonte e licença: Wikimedia Commons</a></figcaption>
          </figure>
          <figure class="artwork-card portrait">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png?width=700" alt="Pintura O Grito, de Edvard Munch, com figura central de expressão intensa, linhas onduladas e céu em cores fortes.">
            <figcaption class="artwork-meta"><strong>Obra B — O Grito</strong><small>Edvard Munch, 1893 • pintura.</small><a href="https://commons.wikimedia.org/wiki/File:The_Scream_by_Edvard_Munch,_1893_-_Nasjonalgalleriet.png" target="_blank" rel="noopener noreferrer">Fonte e licença: Wikimedia Commons</a></figcaption>
          </figure>
          <figure class="artwork-card portrait">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Leonardo_da_Vinci_-_Mona_Lisa_(Louvre%2C_Paris).jpg?width=700" alt="Retrato Mona Lisa, de Leonardo da Vinci, com figura sentada diante de uma paisagem ao fundo.">
            <figcaption class="artwork-meta"><strong>Obra C — Mona Lisa</strong><small>Leonardo da Vinci, início do século XVI • pintura.</small><a href="https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_-_Mona_Lisa_(Louvre,_Paris).jpg" target="_blank" rel="noopener noreferrer">Fonte e licença: Wikimedia Commons</a></figcaption>
          </figure>
        </div>

        <div class="studio-box"><strong>Antes de responder:</strong><p>Olhe as três obras por alguns segundos sem pesquisar. Repare em direção das linhas, posição das figuras, cores, repetição, equilíbrio, tensão e onde seu olhar vai primeiro.</p></div>

        <section id="artDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkArtDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetArtDiagnostic" type="button">Refazer</button></div><div id="artDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkArtDiagnostic',root);
    const reset = $('#resetArtDiagnostic',root);
    const result = $('#artDiagnosticResult',root);

    check?.addEventListener('click',()=>{
      let score=0,total=0;
      const gaps=[];
      $$('[data-scored]',root).forEach(box=>{
        if (box.dataset.scored==='false') return;
        total++;
        const selected = $('input:checked',box);
        if (selected && Number(selected.value)===Number(box.dataset.answer)) score++;
        else gaps.push(box.dataset.area);
      });
      const unique=[...new Set(gaps)];
      const message=score>=9?'Seu olhar já percebe muitos elementos importantes.':score>=7?'Boa base de percepção para aprofundar o repertório.':score>=5?'Você já percebe algumas pistas; vamos aprender a nomeá-las e relacioná-las.':'Ótimo ponto de partida para treinar o olhar, a escuta e a criação passo a passo.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O resultado não mede talento artístico. Ele indica quais formas de observar e interpretar vamos fortalecer.</p></div>${unique.length?`<div class="review-panel"><h3>O que merece atenção</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento nos próximos capítulos.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong><p>Agora transforme percepção em repertório, análise e criação.</p></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      document.getElementById('lessonContent')?.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();