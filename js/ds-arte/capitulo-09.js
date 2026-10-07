(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const choice = MBB.choice;

  function seeded(seed) {
    let value = Number(seed) || 1;
    return () => {
      value = (value * 9301 + 49297) % 233280;
      return value / 233280;
    };
  }

  function updatePixelLab(root) {
    const grid = $('#pixelGrid', root);
    const rule = $('#pixelRule', root);
    const seed = $('#pixelSeed', root);
    const svg = $('#pixelCanvas', root);
    const out = $('#pixelFeedback', root);
    if (!grid || !rule || !seed || !svg || !out) return;

    const size = Number(grid.value);
    const random = seeded(seed.value);
    const palette = ['#172033','#7a3e73','#b45f35','#e0b95c','#f4eadb'];
    const cell = 320 / size;
    let html = '<rect width="320" height="320" fill="#f6f0e7"/>';

    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        let index = 0;
        if (rule.value === 'diagonal') index = (x + y) % palette.length;
        if (rule.value === 'wave') index = Math.abs(Math.round(Math.sin((x + y * .55) * .8) * 4)) % palette.length;
        if (rule.value === 'mirror') index = (Math.min(x, size - 1 - x) + y) % palette.length;
        if (rule.value === 'random') index = Math.floor(random() * palette.length);
        html += `<rect x="${(x * cell).toFixed(2)}" y="${(y * cell).toFixed(2)}" width="${(cell + .25).toFixed(2)}" height="${(cell + .25).toFixed(2)}" fill="${palette[index]}"/>`;
      }
    }
    svg.innerHTML = html;

    const names = {
      diagonal:'repetição diagonal',
      wave:'regra ondulatória',
      mirror:'simetria',
      random:'variação pseudoaleatória'
    };
    out.innerHTML = `<strong>O que mudou?</strong> Você está vendo uma grade de <strong>${size} × ${size}</strong> unidades organizada por <strong>${names[rule.value]}</strong>. A imagem não foi “desenhada pixel por pixel”: uma regra decidiu muitas partes. Troque apenas uma variável e compare.`;
  }

  function updateRuleStudio(root) {
    const repeat = $('#ruleRepeat', root);
    const symmetry = $('#ruleSymmetry', root);
    const variation = $('#ruleVariation', root);
    const svg = $('#ruleCanvas', root);
    const out = $('#ruleFeedback', root);
    if (!repeat || !symmetry || !variation || !svg || !out) return;

    const count = Number(repeat.value);
    const mirror = symmetry.value === 'yes';
    const varied = variation.value === 'yes';
    let marks = '<rect width="600" height="240" rx="18" fill="#f7f1e8"/>';

    for (let i = 0; i < count; i += 1) {
      const x = 55 + i * (490 / Math.max(1, count - 1));
      const radius = varied ? 14 + (i % 4) * 7 : 22;
      const y = 120 + (varied ? Math.sin(i * 1.4) * 48 : 0);
      marks += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${radius}" fill="#7a3e73" opacity="${(.48 + (i % 3) * .18).toFixed(2)}"/>`;
      if (mirror) marks += `<circle cx="${(600 - x).toFixed(1)}" cy="${(240 - y).toFixed(1)}" r="${radius}" fill="#b45f35" opacity=".58"/>`;
    }
    svg.innerHTML = marks;
    out.innerHTML = `<strong>Regra criada:</strong> repetir ${count} vezes${mirror ? ', espelhar a estrutura' : ''}${varied ? ' e variar tamanho/posição' : ' mantendo regularidade'}. Em arte generativa, o artista pode criar <strong>um sistema de decisões</strong> em vez de determinar manualmente cada marca.`;
  }

  function updateInteractionLab(root) {
    const level = $('#interactionLevel', root);
    const mapping = $('#interactionMapping', root);
    const svg = $('#interactionCanvas', root);
    const out = $('#interactionFeedback', root);
    if (!level || !mapping || !svg || !out) return;

    const value = Number(level.value);
    const scale = .55 + value / 100 * 1.15;
    const rotation = value * 1.8;
    const spacing = 48 + value * 1.25;
    const opacity = .25 + value / 100 * .7;

    const circles = [0,1,2,3,4].map((i) => {
      const x = 300 + Math.cos((i * 72 + rotation) * Math.PI / 180) * spacing;
      const y = 150 + Math.sin((i * 72 + rotation) * Math.PI / 180) * spacing;
      const r = (18 + i * 3) * scale;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${i % 2 ? '#b45f35' : '#7a3e73'}" opacity="${opacity.toFixed(2)}"/>`;
    }).join('');
    svg.innerHTML = `<rect width="600" height="300" rx="18" fill="#101827"/>${circles}<circle cx="300" cy="150" r="13" fill="#e0b95c"/>`;

    const maps = {
      distance:'distância do visitante → expansão e aproximação das formas',
      sound:'intensidade sonora → tamanho e transparência',
      time:'tempo de permanência → rotação e densidade',
      touch:'toque/controle → deslocamento e escala'
    };
    out.innerHTML = `<strong>Entrada → regra → resposta.</strong> Nesta simulação: <strong>${maps[mapping.value]}</strong>. O valor atual é ${value}. Numa obra interativa, a participação do público entra no próprio funcionamento da obra.`;
  }

  function updateLicenseRadar(root) {
    const source = $('#licenseSource', root);
    const out = $('#licenseFeedback', root);
    if (!source || !out) return;
    const cases = {
      own:'Você criou o material. Ainda assim, se houver pessoas identificáveis, marcas, músicas de terceiros ou outros conteúdos incorporados, esses elementos precisam ser considerados.',
      public:'Domínio público permite reutilização da obra sem pedir autorização patrimonial; indicar autor e fonte continua sendo uma boa prática de pesquisa e transparência.',
      ccby:'CC BY permite reutilizar e adaptar desde que a atribuição exigida pela licença seja feita corretamente.',
      ccbysa:'CC BY-SA permite reutilizar e adaptar com atribuição, e a adaptação deve ser compartilhada sob a mesma licença ou licença compatível.',
      internet:'“Achei na internet” não é uma licença. Antes de copiar, procure autoria, fonte original e condições de uso. Uso educacional não significa automaticamente que qualquer reprodução pública esteja liberada.'
    };
    out.innerHTML = `<strong>Radar de uso:</strong><p>${cases[source.value]}</p><p><strong>Regra prática:</strong> antes de remixar, descubra <em>quem criou, de onde veio e sob quais condições pode ser reutilizado</em>.</p>`;
  }

  function updateAiDilemma(root) {
    const scenario = $('#aiScenario', root);
    const out = $('#aiFeedback', root);
    if (!scenario || !out) return;
    const cases = {
      prompt:'Gerar uma imagem a partir de instruções pode fazer parte do processo criativo, mas vale registrar suas escolhas: intenção, seleção, versões rejeitadas, edição posterior e como a ferramenta participou do resultado.',
      classmate:'Usar a foto identificável de um colega exige atenção a consentimento, finalidade e exposição. A possibilidade técnica de transformar uma imagem não elimina direitos e respeito à pessoa retratada.',
      living:'Pedir uma imitação muito próxima de um artista vivo levanta questões éticas e autorais. Em vez de copiar uma assinatura visual, é mais formativo analisar características e criar uma solução própria com referências diversas.',
      edit:'Usar IA como uma etapa entre pesquisa, esboço, seleção, edição e revisão deixa mais visível a autoria humana do processo — mas ainda exige cuidado com fontes, materiais incorporados e transparência sobre o uso da ferramenta.'
    };
    out.innerHTML = `<strong>Dilema selecionado:</strong><p>${cases[scenario.value]}</p><p><strong>Perguntas antes de publicar:</strong> De onde vieram os materiais? Alguém identificável foi usado? Estou imitando ou transformando? O que eu realmente decidi? Preciso informar que usei IA? Tenho direito de publicar todos os elementos?</p>`;
  }

  function init(root) {
    ['#pixelGrid','#pixelRule','#pixelSeed'].forEach(sel => $(sel, root)?.addEventListener('input', () => updatePixelLab(root)));
    updatePixelLab(root);

    ['#ruleRepeat','#ruleSymmetry','#ruleVariation'].forEach(sel => $(sel, root)?.addEventListener('input', () => updateRuleStudio(root)));
    updateRuleStudio(root);

    ['#interactionLevel','#interactionMapping'].forEach(sel => $(sel, root)?.addEventListener('input', () => updateInteractionLab(root)));
    updateInteractionLab(root);

    $('#licenseSource', root)?.addEventListener('change', () => updateLicenseRadar(root));
    updateLicenseRadar(root);

    $('#aiScenario', root)?.addEventListener('change', () => updateAiDilemma(root));
    updateAiDilemma(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Cultura digital',
      technical:'imagem digital • pixel • resolução • algoritmo • arte generativa • interatividade • instalação • projeção • remix • licença • inteligência artificial • autoria • ética digital',
      title:'09 — Arte, tecnologia e novas mídias',
      objective:'<strong>Objetivo:</strong> experimentar tecnologias digitais como meios de criação artística, compreender como regras, interfaces e participação alteram a obra e tomar decisões responsáveis sobre autoria, remix, licenças, dados e inteligência artificial.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão digital</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” ganhou um espaço vazio com uma tela, um projetor e um computador.</strong>
            <p>A equipe não quer apenas passar um vídeo. A proposta é criar algo que <strong>mude quando o visitante participa</strong>: aproximar-se pode alterar formas; um clique pode reorganizar a imagem; o tempo pode transformar cores; uma regra pode gerar versões diferentes da mesma obra.</p>
            <p>Agora tecnologia deixa de ser somente ferramenta de apresentação e passa a fazer parte da própria linguagem.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quando a tecnologia apenas executa uma ideia e quando ela passa a participar da criação?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Elementos da arte e tecnologia">
          <span>pixel</span><span>regra</span><span>código</span><span>interação</span><span>rede</span><span>remix</span><span>autoria</span><span>IA</span><span>ética</span>
        </div>

        <h3>1. Arte e tecnologia não começaram com a inteligência artificial</h3>
        <div class="source-box">
          <strong class="card-title">Uma história brasileira: Waldemar Cordeiro + Giorgio Moscati</strong>
          <p>No fim dos anos 1960, o artista Waldemar Cordeiro e o físico Giorgio Moscati, na USP, experimentaram o computador como meio para processar imagens. Cordeiro chamou parte dessa pesquisa de <strong>arteônica</strong>. Ou seja: artistas brasileiros já perguntavam há décadas o que acontece quando cálculo, máquina, imagem e circulação entram no processo artístico.</p>
          <p><a href="https://www5.usp.br/uspdestaque/giorgio-moscati-e-waldemar-cordeiro-quando-o-computador-encontrou-a-arte/" target="_blank" rel="noopener noreferrer">Referência: USP — quando o computador encontrou a arte</a></p>
        </div>
        <div class="note-box"><strong>Não precisa decorar “arteônica”.</strong><p>O importante é perceber a ideia: tecnologia não aparece de repente em 2026. Fotografia, cinema, gravação sonora, vídeo, computador, internet, sensores e IA foram ampliando maneiras de criar, distribuir e experimentar arte.</p></div>

        ${choice('1','Tecnologia e criação','Qual afirmação é mais adequada?',[
          ['a','Uma obra deixa de ser arte quando utiliza computador'],
          ['b','Tecnologias podem ser ferramentas, materiais, ambientes ou até partes do sistema que produz a experiência artística'],
          ['c','Arte digital é apenas desenho feito no computador']
        ],'b','Correto. O digital pode participar da imagem, do som, da interação, da circulação, da regra de geração e de muitas outras dimensões da obra.','Amplie a ideia de tecnologia: ela pode participar do processo e da experiência, não apenas substituir lápis e tinta.')}

        <h3>2. Antes do nome técnico: aproxime e veja a grade</h3>
        <div class="studio-box">
          <strong class="card-title">Laboratório de Pixels</strong>
          <p>Altere a quantidade de unidades e a regra. Observe o que acontece com a aparência da imagem.</p>
          <div class="three-col">
            <label class="mini-card"><strong>Grade</strong><select id="pixelGrid" style="width:100%;margin-top:8px"><option value="8">8 × 8</option><option value="12">12 × 12</option><option value="16" selected>16 × 16</option><option value="24">24 × 24</option></select></label>
            <label class="mini-card"><strong>Regra</strong><select id="pixelRule" style="width:100%;margin-top:8px"><option value="diagonal">Diagonais</option><option value="wave">Ondas</option><option value="mirror">Espelhamento</option><option value="random">Variação</option></select></label>
            <label class="mini-card"><strong>Semente da variação</strong><input id="pixelSeed" type="range" min="1" max="30" value="7" style="width:100%"><small>troca o resultado sem trocar a regra</small></label>
          </div>
          <svg id="pixelCanvas" viewBox="0 0 320 320" role="img" aria-label="Composição digital formada por uma grade de pixels" style="width:100%;max-height:420px;border-radius:14px"></svg>
          <div id="pixelFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>
        <div class="source-box"><strong class="card-title">Agora o nome.</strong><p><strong>Pixel</strong> é uma unidade da imagem digital rasterizada. <strong>Resolução</strong>, em sentido simples, está relacionada à quantidade de informação visual disponível. Mais unidades podem permitir mais detalhe, mas qualidade também depende de captura, compressão, tamanho de exibição e outros fatores.</p></div>

        ${choice('2','Pixel e resolução','Ao aumentar a grade de 8 × 8 para 24 × 24, o que muda primeiro nesta experiência?',[
          ['a','A quantidade de unidades disponíveis para construir a imagem'],
          ['b','A autoria da obra passa automaticamente para o computador'],
          ['c','A imagem deixa de obedecer à regra escolhida']
        ],'a','Isso. A grade oferece mais unidades para organizar detalhe; a regra continua sendo uma decisão do sistema criado.','Observe separadamente duas coisas: quantidade de unidades e regra de organização.')}

        <h3>3. E se o artista criar a regra em vez de desenhar cada marca?</h3>
        <div class="studio-box">
          <strong class="card-title">Ateliê de Regras</strong>
          <p>Você não vai posicionar cada círculo. Vai decidir um conjunto de regras e observar o resultado.</p>
          <div class="three-col">
            <label class="mini-card"><strong>Repetições</strong><input id="ruleRepeat" type="range" min="3" max="12" value="7" style="width:100%"></label>
            <label class="mini-card"><strong>Espelhar?</strong><select id="ruleSymmetry" style="width:100%;margin-top:8px"><option value="no">Não</option><option value="yes">Sim</option></select></label>
            <label class="mini-card"><strong>Variar?</strong><select id="ruleVariation" style="width:100%;margin-top:8px"><option value="no">Não</option><option value="yes" selected>Sim</option></select></label>
          </div>
          <svg id="ruleCanvas" viewBox="0 0 600 240" role="img" aria-label="Composição abstrata gerada por regras de repetição, simetria e variação" style="width:100%;border-radius:14px"></svg>
          <div id="ruleFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>
        <div class="source-box"><strong class="card-title">Agora o nome.</strong><p>Quando um sistema de regras produz variações de uma obra, podemos falar em <strong>processos generativos</strong>. O algoritmo não precisa ser misterioso: em essência, é uma sequência de regras e procedimentos. Criativamente, a questão passa a ser <strong>quem escolheu as regras, quais variáveis podem mudar e o que o sistema permite ou impede</strong>.</p></div>

        <h3>4. Uma obra pode esperar que o visitante faça alguma coisa</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Sandbox_with_interactive_projection_at_31c3.jpg?width=850" alt="Pessoas interagindo com uma caixa de areia cuja superfície recebe projeções topográficas que respondem à forma do relevo.">
          <figcaption class="artwork-meta"><strong>Projeção interativa sobre caixa de areia</strong><small>Um sensor percebe mudanças no relevo e o sistema atualiza a projeção. Aqui, participação e resposta tecnológica fazem parte da experiência.</small><a href="https://commons.wikimedia.org/wiki/File:Sandbox_with_interactive_projection_at_31c3.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC0</a></figcaption>
        </figure>

        <div class="studio-box">
          <strong class="card-title">Laboratório de Interação</strong>
          <p>Imagine que o controle abaixo representa uma informação captada da presença do visitante. Mude a entrada e observe a resposta visual.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Entrada simulada</strong><input id="interactionLevel" type="range" min="0" max="100" value="45" style="width:100%"></label>
            <label class="mini-card"><strong>O que o sistema percebe?</strong><select id="interactionMapping" style="width:100%;margin-top:8px"><option value="distance">Distância</option><option value="sound">Som</option><option value="time">Tempo de permanência</option><option value="touch">Toque/controle</option></select></label>
          </div>
          <svg id="interactionCanvas" viewBox="0 0 600 300" role="img" aria-label="Composição interativa que muda conforme uma entrada simulada" style="width:100%;border-radius:14px"></svg>
          <div id="interactionFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>
        <div class="source-box"><strong class="card-title">Agora o nome.</strong><p><strong>Interatividade</strong> ocorre quando ações do participante entram no funcionamento da obra e produzem respostas previstas pelo sistema. Isso pode envolver clique, toque, câmera, microfone, sensores, localização, tempo, dados da internet ou outras entradas.</p></div>

        ${choice('3','Interatividade','O que distingue melhor uma obra interativa de um vídeo que apenas fica repetindo sozinho?',[
          ['a','A existência obrigatória de uma tela grande'],
          ['b','A ação do participante influencia algum estado ou resposta do sistema'],
          ['c','O uso de internet de alta velocidade']
        ],'b','Correto. O participante deixa de ser apenas observador e passa a fornecer alguma entrada que altera a experiência.','Tela e internet podem existir, mas não são o critério principal. Procure entrada, regra e resposta.')}

        <h3>5. Novas mídias misturam linguagens</h3>
        <div class="art-gallery">
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/GeoVision_V2.png?width=850" alt="Instalação artística digital com projeção e estruturas tridimensionais em um ambiente expositivo.">
            <figcaption class="artwork-meta"><strong>GeoVision — instalação interativa, 2024</strong><small>Software, projeção, espaço e objetos tridimensionais participam do mesmo trabalho.</small><a href="https://commons.wikimedia.org/wiki/File:GeoVision_V2.png" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC BY-SA 4.0</a></figcaption>
          </figure>
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/FA%C3%87ADE_2015_on_September_7th%2C_2015_%28Projection_Mapping%29_%2821239424135%29.jpg?width=850" alt="Projeção de imagens coloridas sobre a fachada de um edifício durante evento de projection mapping.">
            <figcaption class="artwork-meta"><strong>Projeção mapeada em arquitetura</strong><small>A imagem é calculada para dialogar com superfícies e volumes reais do edifício.</small><a href="https://commons.wikimedia.org/wiki/File:FA%C3%87ADE_2015_on_September_7th,_2015_(Projection_Mapping)_(21239424135).jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC BY 2.0</a></figcaption>
          </figure>
        </div>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Arte na web</strong><p>A obra pode existir como página, interação em rede, banco de dados, narrativa navegável ou experiência colaborativa.</p></div>
          <div class="mini-card"><strong>Instalação digital</strong><p>Espaço, projeção, som, software, objetos e presença do público podem formar um único sistema.</p></div>
          <div class="mini-card"><strong>Realidade aumentada / virtual</strong><p>Camadas digitais podem ser associadas ao espaço físico ou construir ambientes imersivos.</p></div>
          <div class="mini-card"><strong>Jogos e experiências lúdicas</strong><p>Regras, escolha, desafio, narrativa, imagem e som também podem ser investigados artisticamente.</p></div>
        </div>

        <h3>6. Remix não significa “copiar qualquer coisa da internet”</h3>
        <div class="studio-box">
          <strong class="card-title">Radar de Licenças</strong>
          <p>Escolha de onde veio o material que você deseja incorporar à sua obra.</p>
          <label class="mini-card"><strong>Origem/licença</strong><select id="licenseSource" style="width:100%;margin-top:8px"><option value="own">Material criado por mim</option><option value="public">Domínio público</option><option value="ccby">Creative Commons BY</option><option value="ccbysa">Creative Commons BY-SA</option><option value="internet">Imagem/música encontrada na internet sem licença identificada</option></select></label>
          <div id="licenseFeedback" class="source-box" aria-live="polite"></div>
        </div>
        <div class="note-box"><strong>Direito autoral não desaparece na escola.</strong><p>O fato de um conteúdo estar disponível on-line não significa que esteja livre para qualquer reprodução, adaptação ou publicação. No Brasil, obras artísticas, literárias e científicas são protegidas pela legislação autoral; por isso, autoria, origem, licença e finalidade precisam entrar no processo de criação digital.</p><p><a href="https://www.gov.br/bn/pt-br/atuacao/direitos-autorais-1/perguntas-frequentes-1/copy_of_orientacoes-gerais" target="_blank" rel="noopener noreferrer">Referência: Fundação Biblioteca Nacional — Direitos Autorais</a></p></div>

        ${choice('4','Remix responsável','Você encontrou uma fotografia perfeita para sua obra em um site qualquer. Qual é o próximo passo mais responsável?',[
          ['a','Baixar imediatamente porque o projeto é escolar'],
          ['b','Localizar autoria, fonte original e condições de reutilização antes de incorporar a imagem'],
          ['c','Apagar a assinatura e escrever seu próprio nome']
        ],'b','Correto. Pesquisa de fonte e licença faz parte do próprio processo de criação e publicação responsável.','Estar disponível para visualizar não equivale automaticamente a estar liberado para reutilizar.')}

        <h3>7. Inteligência artificial: ferramenta, sistema e problema artístico</h3>
        <div class="source-box"><strong class="card-title">Primeiro, sem resposta simplista.</strong><p>Ferramentas generativas podem produzir texto, imagem, som, vídeo e código a partir de instruções e dados. Isso cria possibilidades artísticas, mas também questões sobre <strong>autoria humana, materiais de referência, consentimento, vieses, transparência e direitos</strong>. No Brasil, a relação entre IA e direito autoral segue sendo objeto de análise jurídica; portanto, não trate frases como “a IA é dona da obra” ou “tudo feito por IA é livre” como regras prontas.</p></div>

        <div class="studio-box">
          <strong class="card-title">Dilemas de IA</strong>
          <label class="mini-card"><strong>Situação</strong><select id="aiScenario" style="width:100%;margin-top:8px"><option value="prompt">Gerar uma imagem por instruções e escolher uma versão</option><option value="classmate">Transformar a foto de um colega sem perguntar</option><option value="living">Pedir “faça exatamente no estilo” de um artista vivo</option><option value="edit">Usar IA num processo com pesquisa, esboço e edição própria</option></select></label>
          <div id="aiFeedback" class="source-box" aria-live="polite"></div>
        </div>
        <div class="note-box"><strong>O processo importa.</strong><p>Para aprender Arte, não basta apertar “gerar” e escolher a imagem mais bonita. Registre intenção, referências, decisões, versões, cortes, edições, combinações e justificativas. Assim fica possível analisar <strong>o que a ferramenta fez e o que você decidiu</strong>.</p></div>

        <h3>8. Se a obra percebe o público, ela pode coletar dados</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Necessidade</strong><p>O sistema realmente precisa de câmera, microfone, localização ou identificação?</p></div>
          <div class="mini-card"><strong>Transparência</strong><p>O visitante sabe o que está sendo captado e para quê?</p></div>
          <div class="mini-card"><strong>Minimização</strong><p>É possível produzir a interação com menos dados ou sem armazená-los?</p></div>
        </div>
        <div class="note-box"><strong>Projeto escolar seguro.</strong><p>Prefira interações que não gravem nem identifiquem pessoas quando isso não for necessário. Para uma obra reagir à presença, por exemplo, talvez um botão, um controle de distância simulado ou um sensor local sem armazenamento já resolva o problema artístico.</p></div>

        ${choice('5','Ética digital','Uma instalação precisa apenas saber se alguém se aproximou. Qual projeto é mais cuidadoso?',[
          ['a','Gravar continuamente rosto, nome e voz de todos, mesmo sem necessidade'],
          ['b','Usar a menor quantidade de informação necessária para produzir a interação e explicar ao público como funciona'],
          ['c','Coletar tudo agora e decidir depois para que servirá']
        ],'b','Correto. Necessidade, transparência e minimização ajudam a construir experiências digitais mais responsáveis.','Tecnologia disponível não significa dado necessário. Comece pela intenção da obra e colete apenas o indispensável.')}

        <h3>9. Por que isso faz parte de Arte no Ensino Médio?</h3>
        <div class="source-box">
          <strong class="card-title">Porque cultura digital também é linguagem.</strong>
          <p>A Competência 7 de Linguagens da BNCC prevê explorar tecnologias digitais, compreender seus impactos, utilizá-las de modo <strong>ético, criativo, responsável e crítico</strong> e produzir projetos autorais e colaborativos em ambientes digitais. Para nossos alunos de Desenvolvimento de Sistemas, isso cria uma ponte particularmente fértil: compreender tecnologia não só como funcionamento técnico, mas também como <strong>meio de expressão, escolha cultural e responsabilidade</strong>.</p>
          <p><a href="https://basenacionalcomum.mec.gov.br/" target="_blank" rel="noopener noreferrer">Referência: Base Nacional Comum Curricular</a></p>
        </div>

        <h3>10. Missão final — protótipo de obra digital para a mostra</h3>
        <div class="challenge-box">
          <strong class="card-title">“A obra reage”</strong>
          <p>Crie em dupla ou trio um protótipo em que uma decisão do visitante altere a experiência. Não precisa começar pelo código; comece pela intenção.</p>
          <ol>
            <li>Defina a pergunta ou sensação que deseja provocar.</li>
            <li>Escolha uma <strong>entrada</strong>: clique, toque, tempo, escolha, som, distância simulada ou outra.</li>
            <li>Defina a <strong>regra</strong>: “quando X acontecer, Y muda”.</li>
            <li>Escolha a <strong>resposta</strong>: imagem, forma, texto, luz, som, sequência ou movimento.</li>
            <li>Faça uma primeira versão simples.</li>
            <li>Teste com outra pessoa sem explicar tudo antes.</li>
            <li>Pergunte o que ela percebeu e revise.</li>
            <li>Liste fontes e licenças dos materiais utilizados.</li>
            <li>Se usar IA, registre onde ela entrou e quais decisões humanas vieram depois.</li>
            <li>Se coletar qualquer dado, justifique por que é necessário e como protegerá o participante.</li>
          </ol>
        </div>

        <div class="three-col">
          <div class="mini-card"><strong>Caminho A — sem código</strong><p>Storyboard interativo, apresentação com escolhas, vídeo ramificado ou protótipo desenhado com regras bem especificadas.</p></div>
          <div class="mini-card"><strong>Caminho B — lógica visual</strong><p>Ferramenta por blocos ou ambiente que permita eventos, condições, animação e interação.</p></div>
          <div class="mini-card"><strong>Caminho C — web</strong><p>HTML, CSS e JavaScript para transformar clique, tempo e controles em respostas visuais ou sonoras.</p></div>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Na arte tecnológica, o digital pode ser ferramenta, material, regra, ambiente ou participante da obra. Pixels e algoritmos organizam informação; interfaces transformam ações em respostas; redes ampliam circulação; remix e IA exigem atenção a autoria, licença, consentimento e transparência. Criar com tecnologia não é apertar um botão: é <strong>projetar relações, observar efeitos e assumir responsabilidade pelas escolhas</strong>.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('09 Arte', showChapter);
})();