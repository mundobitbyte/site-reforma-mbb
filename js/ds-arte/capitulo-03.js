(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  const materialData = {
    watercolor: {
      title:'Aquarela',
      strength:'transparência, sobreposição, manchas, gradações e relação direta entre pigmento, água e papel',
      limit:'a água se espalha, o papel reage e algumas marcas são difíceis de controlar ou apagar completamente',
      best:'atmosfera, luminosidade, passagem suave, transparência e gesto fluido',
      preview:`<svg viewBox="0 0 600 260" role="img" aria-label="Simulação abstrata de manchas transparentes de aquarela" style="width:100%;display:block;background:#faf7f2;border-radius:10px">
        <rect width="600" height="260" fill="#faf7f2"/>
        <circle cx="205" cy="130" r="92" fill="#4f86c6" opacity=".55"/>
        <circle cx="310" cy="105" r="82" fill="#e56b6f" opacity=".48"/>
        <circle cx="375" cy="165" r="76" fill="#e9c46a" opacity=".52"/>
        <path d="M70 200 C160 155, 230 225, 320 180 S475 125, 545 170" fill="none" stroke="#355070" stroke-width="12" opacity=".25" stroke-linecap="round"/>
      </svg>`
    },
    woodcut: {
      title:'Gravura em relevo',
      strength:'contraste, repetição, textura da matriz e possibilidade de imprimir várias cópias a partir de uma imagem preparada',
      limit:'a imagem depende do que fica alto ou baixo na matriz; detalhes muito frágeis podem desaparecer e a impressão tende a inverter lateralmente a composição',
      best:'contraste forte, linhas expressivas, repetição, textura e circulação de múltiplas cópias',
      preview:`<svg viewBox="0 0 600 260" role="img" aria-label="Simulação de gravura em alto contraste" style="width:100%;display:block;background:#f4efe7;border-radius:10px">
        <rect width="600" height="260" fill="#f4efe7"/>
        <path d="M0 210 L110 80 L155 145 L250 45 L338 150 L420 75 L600 220 L600 260 L0 260 Z" fill="#151515"/>
        <path d="M45 42 L555 212 M80 20 L590 190 M15 80 L490 250" stroke="#151515" stroke-width="9"/>
        <circle cx="475" cy="65" r="36" fill="none" stroke="#151515" stroke-width="10"/>
      </svg>`
    },
    mosaic: {
      title:'Mosaico',
      strength:'construção por unidades, ritmo, repetição, resistência e possibilidade de integrar imagem à arquitetura ou ao espaço',
      limit:'curvas e gradações dependem do tamanho, formato e quantidade das peças; a imagem é construída fragmento por fragmento',
      best:'padrão, ritmo, superfície, monumentalidade, textura e composição modular',
      preview:`<svg viewBox="0 0 600 260" role="img" aria-label="Simulação abstrata de mosaico por pequenas peças" style="width:100%;display:block;background:#eadfce;border-radius:10px">
        <defs><pattern id="tiles03" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="27" height="27" rx="3" fill="#e9c46a"/><rect x="15" y="15" width="12" height="12" rx="2" fill="#2a9d8f"/></pattern></defs>
        <rect width="600" height="260" fill="url(#tiles03)"/>
        <path d="M75 205 Q165 40 300 130 T530 80" fill="none" stroke="#9c3f4b" stroke-width="28" stroke-linecap="square" stroke-dasharray="22 8"/>
        <circle cx="305" cy="132" r="58" fill="#264653" opacity=".88"/>
      </svg>`
    },
    collage: {
      title:'Colagem',
      strength:'justaposição de materiais, imagens e texturas de origens diferentes, produzindo novas relações por corte, sobreposição e deslocamento de contexto',
      limit:'bordas, espessuras, aderência e diferenças entre papéis ou objetos permanecem visíveis e passam a fazer parte da obra',
      best:'contraste de fontes, choque de contextos, composição por camadas, apropriação e montagem',
      preview:`<svg viewBox="0 0 600 260" role="img" aria-label="Simulação abstrata de colagem com papéis sobrepostos" style="width:100%;display:block;background:#f3eee8;border-radius:10px">
        <rect width="600" height="260" fill="#f3eee8"/>
        <rect x="55" y="35" width="220" height="150" fill="#355070" transform="rotate(-7 165 110)"/>
        <rect x="250" y="55" width="245" height="145" fill="#e56b6f" opacity=".92" transform="rotate(5 370 125)"/>
        <circle cx="330" cy="145" r="75" fill="#e9c46a" opacity=".9"/>
        <path d="M85 210 L235 95 L390 230" fill="none" stroke="#111" stroke-width="14"/>
        <rect x="390" y="25" width="140" height="65" fill="#2a9d8f"/>
      </svg>`
    }
  };

  function init(root) {
    const material = $('#materialChoice', root);
    const intention = $('#materialIntention', root);
    const preview = $('#materialPreview', root);
    const reading = $('#materialReading', root);

    const intentions = {
      atmosphere:'criar atmosfera e passagem suave',
      contrast:'obter contraste e impacto imediato',
      repetition:'trabalhar repetição e ritmo',
      fragments:'construir sentido por fragmentos e sobreposições'
    };

    const updateMaterialLab = () => {
      if (!material || !intention || !preview || !reading) return;
      const item = materialData[material.value] || materialData.watercolor;
      preview.innerHTML = item.preview;
      const goal = intentions[intention.value] || intentions.atmosphere;
      reading.innerHTML = `<strong>${item.title} para ${goal}?</strong><p><strong>Potência:</strong> ${item.strength}.</p><p><strong>Limite produtivo:</strong> ${item.limit}.</p><p><strong>Vale testar especialmente quando você busca:</strong> ${item.best}.</p>`;
    };

    material?.addEventListener('change', updateMaterialLab);
    intention?.addEventListener('change', updateMaterialLab);
    updateMaterialLab();

    const process = $('#processChoice', root);
    const processOutput = $('#processOutput', root);
    const processNotes = {
      transparent:'Camadas transparentes deixam partes anteriores aparecerem. O resultado depende de ordem, água, absorção e tempo de secagem.',
      relief:'Na gravura em relevo, o que permanece alto recebe tinta. A matriz é uma etapa do processo e não apenas um suporte.',
      modular:'No mosaico, a imagem nasce da relação entre pequenas unidades. Distância de observação muda o quanto percebemos cada peça ou o conjunto.',
      montage:'Na colagem, recortar e deslocar um fragmento para outro contexto altera relações de escala, autoria, significado e narrativa.'
    };
    const updateProcess = () => {
      if (!process || !processOutput) return;
      processOutput.innerHTML = `<strong>O que observar no processo:</strong> ${processNotes[process.value] || processNotes.transparent}`;
    };
    process?.addEventListener('change', updateProcess);
    updateProcess();
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Materialidades',
      technical:'materialidade • suporte • ferramenta • técnica • processo • matriz • transparência • módulo • montagem • experimentação',
      title:'03 — Materiais, técnicas e experimentação',
      objective:'<strong>Objetivo:</strong> compreender como materiais, suportes, ferramentas e processos interferem nas possibilidades de criação, analisando técnicas distintas e usando limites materiais como parte do pensamento artístico.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Oficina da mostra</span>
          <div class="hero-box">
            <strong class="card-title">A equipe da mostra precisa produzir três versões da mesma ideia — mas cada bancada oferece materiais diferentes.</strong>
            <p>Na primeira há papel, água e pigmento. Na segunda, uma matriz de relevo e tinta para impressão. Na terceira, pequenas peças coloridas que precisam ser montadas uma a uma.</p>
            <p>O desenho inicial pode até ser o mesmo, mas o resultado <strong>não será apenas uma cópia em outro material</strong>. Cada técnica permite algumas ações, dificulta outras e deixa marcas próprias.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o material apenas recebe a ideia ou também participa da criação dela?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Dimensões da materialidade artística">
          <span>material</span><span>suporte</span><span>ferramenta</span><span>gesto</span><span>tempo</span><span>acaso</span><span>processo</span><span>vestígio</span>
        </div>

        <h3>1. Material não é embalagem da ideia</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Material</strong><p>Aquilo com que a obra é feita ou processada: pigmento, madeira, pedra, papel, argila, tecido, som, luz, dados digitais...</p></div>
          <div class="mini-card"><strong>Suporte</strong><p>A superfície ou estrutura que recebe ou sustenta a ação: papel, tela, parede, corpo, espaço, tela digital...</p></div>
          <div class="mini-card"><strong>Ferramenta</strong><p>Intermedeia o gesto: pincel, rolo, câmera, cinzel, matriz, tesoura, software, sensor...</p></div>
          <div class="mini-card"><strong>Processo</strong><p>É a sequência de decisões, testes, tempos, acidentes, revisões e transformações que produz o trabalho.</p></div>
        </div>

        ${choice('1','Materialidade','Se a mesma imagem for realizada em aquarela, xilogravura e mosaico, o que tende a acontecer?',[
          ['a','Nada muda porque a ideia é a única coisa importante'],
          ['b','Mudam textura, ritmo, gesto, contraste, tempo de execução e possibilidades de detalhe; o material participa do sentido'],
          ['c','Somente o preço do trabalho muda']
        ],'b','Isso. Material e técnica interferem na experiência e podem transformar até decisões de composição.','Compare o que cada processo permite fazer, quanto controle oferece e que marcas deixa visíveis.')}

        <div class="source-box"><strong class="card-title">Uma ideia importante</strong><p>Em Arte, um limite pode virar recurso. Papel que absorve água, madeira que resiste ao corte, pequenas peças que obrigam a simplificar uma curva ou um arquivo digital que permite desfazer ações são condições diferentes de criação.</p></div>

        <h3>2. Xilogravura: pensar por matriz e impressão</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Four_Horsemen_of_the_Apocalypse_by_D%C3%BCrer.png?width=800" alt="Xilogravura Os Quatro Cavaleiros do Apocalipse, de Albrecht Dürer, com forte contraste entre áreas negras e claras e muitas linhas gravadas.">
          <div>
            <span class="lesson-kicker">Madeira → matriz → tinta → papel</span>
            <strong class="card-title">Os Quatro Cavaleiros do Apocalipse — Albrecht Dürer, c. 1497–1498</strong>
            <p>Na xilogravura, partes da superfície são retiradas e outras permanecem em relevo para receber tinta. Isso exige imaginar não apenas a imagem final, mas também <strong>a matriz que produzirá essa imagem</strong>.</p>
            <p>Observe como linhas, áreas escuras e vazios constroem movimento e profundidade sem depender de uma paleta extensa de cores.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Four_Horsemen_of_the_Apocalypse_by_D%C3%BCrer.png" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></p>
          </div>
        </div>

        ${choice('2','Matriz e múltiplo','Qual característica muda o modo de pensar uma gravura?',[
          ['a','A existência de uma matriz permite produzir impressões e exige prever o que será transferido para o papel'],
          ['b','A gravura só existe quando é feita com tinta azul'],
          ['c','A matriz não participa do processo']
        ],'a','Correto. A matriz introduz etapas, inversões, repetição e decisões específicas de corte e impressão.','Na gravura, pense em duas coisas: a superfície preparada e a imagem que será transferida.')}

        <div class="note-box"><strong>Experimentação segura na escola.</strong><p>Para experimentar a lógica do relevo não é necessário começar com ferramentas cortantes. Uma placa de EVA ou espuma pode receber marcas com ponta sem corte e funcionar como matriz simples para impressão com tinta apropriada e supervisão.</p></div>

        <h3>3. Aquarela: controlar e aceitar o fluxo</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Turner_1828.jpg?width=900" alt="Aquarela de J. M. W. Turner representando Tintern Abbey, com áreas luminosas e passagens suaves de cor e água.">
          <figcaption class="artwork-meta">
            <strong>Tintern Abbey — J. M. W. Turner, 1828</strong>
            <small>Aquarela: pigmento, água, transparência, absorção e papel participam do aspecto final.</small>
            <a href="https://commons.wikimedia.org/wiki/File:Turner_1828.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • obra em domínio público</a>
          </figcaption>
        </figure>

        <div class="two-col">
          <div class="mini-card"><strong>Camada transparente</strong><p>A luz do papel pode atravessar visualmente camadas finas de pigmento e produzir luminosidade.</p></div>
          <div class="mini-card"><strong>Água como agente</strong><p>Quantidade de água, inclinação, absorção, umidade e tempo de secagem mudam bordas e misturas.</p></div>
        </div>

        ${choice('3','Controle e acaso','Por que “controlar tudo” pode ser uma expectativa inadequada em algumas técnicas aquosas?',[
          ['a','Porque água, papel, gravidade e tempo também influenciam o resultado e podem ser incorporados ao processo'],
          ['b','Porque o artista não faz nenhuma escolha'],
          ['c','Porque aquarela não utiliza pigmento']
        ],'a','Isso. Experimentar é negociar intenção com comportamento do material — não abandonar decisões.','O acaso pode participar, mas o artista continua escolhendo quantidade de água, gesto, suporte, camadas e quando intervir.')}

        <h3>4. Mosaico: a imagem nasce peça por peça</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Roman_Mosaic_%2828450901000%29.jpg?width=900" alt="Mosaico romano formado por muitas pequenas peças coloridas organizadas para criar figuras e padrões.">
          <div>
            <span class="lesson-kicker">Fragmento → módulo → conjunto</span>
            <strong class="card-title">Mosaico romano</strong>
            <p>De perto você percebe peças individuais; de longe, elas se integram numa imagem. O tamanho, a cor, a direção e a distância entre as unidades modificam curvas, contornos e texturas.</p>
            <p>Isso mostra que <strong>escala de observação também participa da experiência</strong>: fragmento e conjunto coexistem.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Roman_Mosaic_(28450901000).jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC0</a></p>
          </div>
        </div>

        ${choice('4','Unidade e conjunto','Qual frase descreve melhor o funcionamento visual do mosaico?',[
          ['a','Cada peça é irrelevante porque só o desenho geral importa'],
          ['b','As unidades individuais e a organização do conjunto trabalham juntas; tamanho e direção das peças afetam a imagem'],
          ['c','Mosaico é apenas pintura dividida em quadrados']
        ],'b','Correto. A unidade material permanece perceptível e participa de ritmo, textura e contorno.','Observe como cada módulo ocupa espaço e como vários módulos constroem uma relação maior.')}

        <h3>5. Material Lab: escolha antes de produzir</h3>
        <div class="studio-box">
          <strong class="card-title">Você precisa criar uma imagem para a mostra. Que material conversa melhor com sua intenção?</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Material/processo</strong><select id="materialChoice" style="width:100%;margin-top:8px"><option value="watercolor">Aquarela</option><option value="woodcut">Gravura em relevo</option><option value="mosaic">Mosaico</option><option value="collage">Colagem</option></select></label>
            <label class="mini-card"><strong>Intenção</strong><select id="materialIntention" style="width:100%;margin-top:8px"><option value="atmosphere">Atmosfera suave</option><option value="contrast">Contraste e impacto</option><option value="repetition">Repetição e ritmo</option><option value="fragments">Fragmentos e sobreposição</option></select></label>
          </div>
          <div id="materialPreview" style="overflow:hidden;border-radius:10px;margin:12px 0"></div>
          <div id="materialReading" class="source-box" aria-live="polite"></div>
          <p><strong>Teste importante:</strong> não procure uma resposta automática. Troque material e intenção e observe quais combinações oferecem possibilidades ou dificuldades interessantes.</p>
        </div>

        <h3>6. Técnica é um modo de fazer — não uma receita imutável</h3>
        <div class="studio-box">
          <strong class="card-title">Process Explorer</strong>
          <p>Selecione uma lógica de processo e veja qual aspecto merece atenção.</p>
          <label class="mini-card"><strong>Processo</strong><select id="processChoice" style="width:100%;margin-top:8px"><option value="transparent">Camadas transparentes</option><option value="relief">Matriz de relevo</option><option value="modular">Construção modular</option><option value="montage">Montagem/colagem</option></select></label>
          <div id="processOutput" class="source-box" aria-live="polite"></div>
        </div>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Técnica ≠ fórmula</strong><p>Conhecer procedimentos amplia controle e repertório, mas artistas também adaptam, misturam e reinventam técnicas.</p></div>
          <div class="mini-card"><strong>Erro ≠ lixo automático</strong><p>Uma mancha, falha de impressão ou rasgo pode exigir correção — ou abrir uma solução que não estava prevista.</p></div>
        </div>

        ${choice('5','Experimentação','O que diferencia experimentação de simplesmente “fazer qualquer coisa”?',[
          ['a','Experimentar envolve testar uma hipótese ou possibilidade, observar o resultado, comparar e decidir o próximo passo'],
          ['b','Não existe diferença: experimentar é agir sem observar'],
          ['c','Experimentação só vale quando o primeiro resultado fica perfeito']
        ],'a','Exatamente. Experimentação artística envolve intenção aberta, observação, comparação, decisão e revisão.','Experimento não precisa ter resultado previsto, mas precisa gerar observação e aprendizagem sobre escolhas e materiais.')}

        <h3>7. Desafio de transferência: três versões, uma ideia</h3>
        <div class="challenge-box">
          <strong class="card-title">Produza sem precisar de materiais caros</strong>
          <ol>
            <li>Escolha uma ideia simples: <strong>movimento, silêncio, conflito, cidade ou memória</strong>.</li>
            <li>Faça uma versão com <strong>manchas e transparências</strong> usando lápis de cor bem leve, aquarela escolar ou ferramenta digital.</li>
            <li>Faça uma versão pensando como <strong>gravura</strong>: apenas claro/escuro e linhas essenciais.</li>
            <li>Faça uma versão <strong>modular</strong>: construa a imagem com pequenos quadrados de papel, formas geométricas ou pixels.</li>
            <li>Coloque as três lado a lado e responda: <strong>o que cada processo obrigou você a mudar?</strong></li>
          </ol>
          <details><summary>Critério de qualidade</summary><p>Não é “qual ficou mais bonita?”. É conseguir explicar como material, suporte, gesto e processo alteraram composição, tempo, textura, detalhe, controle e efeito.</p></details>
        </div>

        <h3>8. Fechando a oficina da mostra</h3>
        <div class="source-box">
          <p>Agora a equipe já consegue tomar uma decisão mais madura. Antes de escolher um material, pode perguntar:</p>
          <p><strong>O que quero produzir? Que ações esse material permite? Que resistência ele oferece? Que vestígios deixa? O que pode acontecer que eu não controlo completamente? Esse limite ajuda ou atrapalha minha intenção?</strong></p>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Material, técnica e processo não são apenas meios para executar uma ideia pronta. Eles participam da criação: oferecem possibilidades, impõem limites, deixam vestígios e provocam decisões. Experimentar é observar essas relações e usá-las conscientemente.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('03 Materiais', showChapter);
})();