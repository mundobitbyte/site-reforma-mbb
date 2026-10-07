(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  const curationOptions = {
    focus: {
      question:'organizar a mostra por perguntas que atravessem linguagens diferentes',
      dialogue:'aproximar trabalhos que criem diálogos inesperados entre imagem, som, corpo, memória e tecnologia',
      process:'evidenciar esboços, testes, erros, versões e decisões para mostrar que criação é processo',
      community:'destacar relações entre arte, escola, bairro, memória e participação da comunidade'
    },
    order: {
      chapters:'seguir uma sequência próxima do percurso estudado ao longo do módulo',
      themes:'agrupar por temas e problemas, mesmo misturando linguagens e datas',
      contrast:'alternar propositalmente trabalhos muito diferentes para produzir contraste',
      open:'criar núcleos sem impor um único começo ou fim ao visitante'
    }
  };

  function updateCurationLab(root) {
    const focus = $('#curationFocus', root);
    const order = $('#curationOrder', root);
    const out = $('#curationFeedback', root);
    if (!focus || !order || !out) return;

    out.innerHTML = `
      <strong>Sua hipótese curatorial</strong>
      <p>Você propõe <strong>${curationOptions.focus[focus.value]}</strong> e pretende <strong>${curationOptions.order[order.value]}</strong>.</p>
      <p><strong>Teste:</strong> essa organização ajuda o visitante a perceber relações ou apenas separa trabalhos por categoria? Que produção importante ficaria de fora — e por quê?</p>
    `;
  }

  function updateRouteLab(root) {
    const route = $('#routeMode', root);
    const sound = $('#soundMode', root);
    const svg = $('#routeMap', root);
    const note = $('#routeFeedback', root);
    if (!route || !sound || !svg || !note) return;

    const nodes = ['routeA','routeB','routeC','routeD','routeE','routeF'].map(id => $(`#${id}`, svg));
    const labels = ['routeLabelA','routeLabelB','routeLabelC','routeLabelD','routeLabelE','routeLabelF'].map(id => $(`#${id}`, svg));
    const path = $('#routeLine', svg);
    const settings = {
      linear:{
        points:[[90,85],[205,85],[320,85],[435,85],[435,220],[205,220]],
        line:'M90 85 L205 85 L320 85 L435 85 L435 220 L205 220',
        text:'um percurso mais dirigido facilita uma narrativa sequencial, mas reduz escolhas do visitante'
      },
      clusters:{
        points:[[135,90],[220,135],[390,90],[470,145],[155,235],[385,235]],
        line:'M135 90 Q180 110 220 135 M390 90 Q430 115 470 145 M155 235 Q270 190 385 235',
        text:'núcleos permitem concentrar relações temáticas e criar transições entre conjuntos'
      },
      open:{
        points:[[110,85],[300,70],[485,100],[145,235],[315,220],[490,240]],
        line:'M110 85 M300 70 M485 100 M145 235 M315 220 M490 240',
        text:'um espaço aberto oferece escolhas e leituras múltiplas, mas exige sinalização e relações visuais claras'
      }
    };
    const current = settings[route.value] || settings.linear;
    nodes.forEach((node,index) => {
      node?.setAttribute('cx', current.points[index][0]);
      node?.setAttribute('cy', current.points[index][1]);
      labels[index]?.setAttribute('x', current.points[index][0]);
      labels[index]?.setAttribute('y', current.points[index][1] + 5);
    });
    path?.setAttribute('d', current.line);

    const soundNotes = {
      separate:'som concentrado em uma área reduz interferência, mas pode isolar o trabalho sonoro do restante da mostra',
      headphones:'fones ou escuta individual controlam vazamento de som, mas mudam a experiência coletiva e exigem higiene/organização',
      zones:'zonas sonoras com distância e volume planejados permitem convivência, mas precisam ser testadas no espaço real'
    };
    note.innerHTML = `<strong>Leia sua planta:</strong> ${current.text}. Para o som, sua escolha indica que ${soundNotes[sound.value]}.`;
  }

  const labelCases = {
    visual:{title:'Composição em camadas',author:'Grupo 2',data:'papel, fotografia impressa e desenho, 2026',context:'O trabalho nasceu de três versões da mesma imagem e investiga o que acontece quando partes são escondidas, repetidas e deslocadas.'},
    sound:{title:'Entre o sinal e o silêncio',author:'Dupla 4',data:'composição sonora, 18 s, 2026',context:'A vinheta usa sons gravados na escola, pausas e duas camadas rítmicas para transformar ruídos cotidianos em material musical.'},
    heritage:{title:'Memórias do corredor B',author:'Grupo 5',data:'fotografias, mapa e relatos, 2026',context:'O mini-inventário reúne evidências sobre um espaço da escola e diferencia lembranças pessoais, observações atuais e informações confirmadas.'},
    digital:{title:'A imagem responde',author:'Trio 1',data:'protótipo digital interativo, 2026',context:'Cores, escala e posição mudam conforme a escolha do visitante. O grupo documentou as regras usadas e os materiais de terceiros.'}
  };

  function updateLabelLab(root) {
    const work = $('#labelWork', root);
    const mode = $('#labelMode', root);
    const out = $('#labelPreview', root);
    if (!work || !mode || !out) return;
    const item = labelCases[work.value] || labelCases.visual;

    const extra = {
      minimal:'',
      context:`<p>${item.context}</p>`,
      question:`<p>${item.context}</p><p><strong>Pergunta ao visitante:</strong> qual decisão você percebe primeiro — e o que muda quando permanece mais tempo diante da obra?</p>`
    };
    out.innerHTML = `
      <span class="lesson-kicker">Etiqueta de exposição</span>
      <strong class="card-title">${item.title}</strong>
      <p>${item.author}<br><small>${item.data}</small></p>
      ${extra[mode.value]}
    `;
  }

  function updateAccessLab(root) {
    const barrier = $('#accessBarrier', root);
    const response = $('#accessResponse', root);
    const out = $('#accessFeedback', root);
    if (!barrier || !response || !out) return;

    const barriers = {
      visual:'uma obra depende fortemente de informação visual que parte do público pode não perceber',
      hearing:'um vídeo ou trabalho sonoro traz informações importantes apenas pelo áudio',
      mobility:'o percurso tem passagem estreita, objeto baixo ou estação que só funciona em pé',
      language:'os textos estão longos, técnicos e difíceis para visitantes iniciantes',
      sensory:'som, luz ou movimento podem ser intensos e não há informação prévia nem alternativa de fruição'
    };
    const responses = {
      audio:'audiodescrição ou descrição textual dos elementos visuais relevantes',
      captions:'legendas descritivas, transcrição e, quando possível, recursos em Libras',
      route:'rota livre de barreiras, alturas alcançáveis, espaço de aproximação e alternativa equivalente de interação',
      simple:'texto curto em linguagem simples, boa hierarquia visual e possibilidade de aprofundamento opcional',
      warning:'informação prévia sobre estímulos, controle de volume/brilho quando possível e alternativa menos intensa'
    };
    out.innerHTML = `
      <strong>Barreira identificada:</strong><p>${barriers[barrier.value]}.</p>
      <strong>Resposta escolhida:</strong><p>${responses[response.value]}.</p>
      <p><strong>Autocrítica:</strong> esse recurso realmente reduz a barreira escolhida? A melhor solução pode combinar mais de uma medida e deve ser testada com pessoas reais, não apenas presumida pela equipe.</p>
    `;
  }

  function updateShareLab(root) {
    const channel = $('#shareChannel', root);
    const material = $('#shareMaterial', root);
    const out = $('#shareFeedback', root);
    if (!channel || !material || !out) return;

    const channels = {
      school:'cartaz, mural, convite interno e apresentação presencial para a comunidade escolar',
      social:'post ou vídeo curto em rede social, considerando duração, enquadramento, legenda e exposição pública',
      site:'página web da mostra com imagens, textos, créditos, alternativas textuais e navegação acessível',
      archive:'registro organizado para memória do projeto: fotos autorizadas, ficha das obras, versões, créditos e reflexão final'
    };
    const materials = {
      own:'material integralmente criado pela própria equipe',
      cc:'material de terceiros com licença Creative Commons identificada',
      public:'obra ou reprodução em domínio público com fonte conhecida',
      unclear:'imagem, música ou vídeo “achado na internet” sem autoria/licença confirmada'
    };
    const warning = material.value === 'unclear'
      ? '<strong>Alerta:</strong> antes de publicar, localize a fonte original e as condições de uso. “Está na internet” não é autorização.'
      : '<strong>Antes de publicar:</strong> registre autoria, fonte, licença quando houver, consentimentos necessários e eventuais adaptações.';

    out.innerHTML = `<strong>Plano de circulação:</strong><p>${channels[channel.value]}.</p><p><strong>Material:</strong> ${materials[material.value]}.</p><p>${warning}</p>`;
  }

  function updateReadiness(root) {
    const boxes = $$('[data-ready]', root);
    const out = $('#readinessFeedback', root);
    if (!boxes.length || !out) return;
    const done = boxes.filter(box => box.checked).length;
    const total = boxes.length;
    const message = done === total
      ? 'Checklist completo. Ainda faça um teste real de visita antes de abrir a mostra.'
      : done >= total - 2
        ? 'Quase pronto. Os itens restantes podem parecer pequenos, mas costumam virar problemas justamente na abertura.'
        : 'Ainda há decisões importantes antes de divulgar. Montagem, acesso, créditos e teste com público fazem parte da criação.';
    out.innerHTML = `<strong>${done}/${total} itens verificados.</strong> ${message}`;
  }

  function init(root) {
    ['#curationFocus','#curationOrder'].forEach(sel => $(sel, root)?.addEventListener('change', () => updateCurationLab(root)));
    updateCurationLab(root);

    ['#routeMode','#soundMode'].forEach(sel => $(sel, root)?.addEventListener('change', () => updateRouteLab(root)));
    updateRouteLab(root);

    ['#labelWork','#labelMode'].forEach(sel => $(sel, root)?.addEventListener('change', () => updateLabelLab(root)));
    updateLabelLab(root);

    ['#accessBarrier','#accessResponse'].forEach(sel => $(sel, root)?.addEventListener('change', () => updateAccessLab(root)));
    updateAccessLab(root);

    ['#shareChannel','#shareMaterial'].forEach(sel => $(sel, root)?.addEventListener('change', () => updateShareLab(root)));
    updateShareLab(root);

    $$('[data-ready]', root).forEach(box => box.addEventListener('change', () => updateReadiness(root)));
    updateReadiness(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Autoria e circulação',
      technical:'processo de criação • curadoria • seleção • expografia • mediação • montagem • acessibilidade • autoria • crédito • circulação • documentação • avaliação',
      title:'10 — Criar, curar e compartilhar',
      objective:'<strong>Objetivo:</strong> integrar aprendizagens do módulo ao planejar uma mostra artística, compreendendo curadoria, expografia, mediação, acessibilidade, autoria, circulação e documentação como escolhas que também produzem sentidos.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">A mostra vai abrir</span>
          <div class="hero-box">
            <strong class="card-title">Há 22 produções, mas a sala não comporta tudo ao mesmo tempo.</strong>
            <p>Existem imagens, colagens, uma vinheta sonora, uma pequena dança, uma microcena, fotografias, vídeos, um inventário de memória e um protótipo digital. A equipe precisa escolher <strong>o que entra, o que conversa com o quê, onde cada trabalho fica e como o público poderá compreender e participar</strong>.</p>
            <p>Agora surge uma decisão difícil: montar uma mostra não é apenas “pendurar tudo que ficou bonito”. Toda seleção cria relações, destaca coisas e deixa outras de fora.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como transformar produções separadas em uma experiência coerente, acessível e responsável para quem visita?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Etapas do fechamento da mostra">
          <span>selecionar</span><span>relacionar</span><span>montar</span><span>mediar</span><span>acessar</span><span>creditar</span><span>compartilhar</span><span>documentar</span><span>revisar</span>
        </div>

        <h3>1. Criar não termina quando a primeira versão fica pronta</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Produzir</strong><p>Gerar imagens, sons, movimentos, cenas, textos, objetos ou sistemas.</p></div>
          <div class="mini-card"><strong>Selecionar</strong><p>Comparar versões e decidir o que realmente sustenta a intenção.</p></div>
          <div class="mini-card"><strong>Revisar</strong><p>Observar o efeito, receber retorno e alterar escolhas.</p></div>
          <div class="mini-card"><strong>Apresentar</strong><p>Decidir como outra pessoa encontrará o trabalho e que informações terá.</p></div>
        </div>
        <div class="note-box"><strong>Autoria também aparece na revisão.</strong><p>Guardar esboços, testes e versões ajuda a perceber que criar é tomar decisões. Uma obra não precisa esconder o processo que a tornou possível.</p></div>

        ${choice('1','Processo de criação','Um grupo fez cinco versões de um cartaz. Qual decisão demonstra melhor autoria consciente?',[
          ['a','Escolher a primeira porque foi feita mais rápido'],
          ['b','Comparar versões, identificar qual comunica melhor a intenção e justificar ajustes'],
          ['c','Usar todas obrigatoriamente para não desperdiçar trabalho']
        ],'b','Correto. Selecionar e revisar fazem parte do processo criativo, não são sinais de fracasso da primeira tentativa.','Quantidade de versões não substitui decisão. Pergunte o que cada versão produz no público e qual sustenta melhor a proposta.')}

        <h3>2. Curadoria: escolher e construir relações</h3>
        <div class="source-box">
          <strong class="card-title">Antes do nome técnico</strong>
          <p>Imagine três trabalhos: uma fotografia de um corredor vazio, uma composição sonora feita com passos e uma cena em que alguém espera sozinho. Colocados lado a lado, eles podem criar um núcleo sobre <strong>presença e ausência</strong>, mesmo sendo de linguagens diferentes.</p>
          <p>Quando pesquisamos, selecionamos, aproximamos, separamos e construímos relações entre trabalhos para uma apresentação, entramos no campo da <strong>curadoria</strong>.</p>
        </div>
        <div class="studio-box">
          <strong class="card-title">Laboratório de Curadoria</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Foco</strong><select id="curationFocus" style="width:100%;margin-top:8px"><option value="question">Perguntas</option><option value="dialogue">Diálogos entre linguagens</option><option value="process">Processos de criação</option><option value="community">Arte e comunidade</option></select></label>
            <label class="mini-card"><strong>Organização</strong><select id="curationOrder" style="width:100%;margin-top:8px"><option value="chapters">Percurso estudado</option><option value="themes">Núcleos temáticos</option><option value="contrast">Contrastes</option><option value="open">Percurso aberto</option></select></label>
          </div>
          <div id="curationFeedback" class="source-box" aria-live="polite"></div>
        </div>
        <div class="note-box"><strong>Curadoria não é concurso de “melhor obra”.</strong><p>Uma seleção pode considerar coerência com a pergunta da mostra, diversidade de linguagens e perspectivas, espaço disponível, duração, segurança, acessibilidade e relações entre trabalhos. Sempre haverá outras seleções possíveis.</p></div>

        <h3>3. Expografia: o espaço também fala</h3>
        <div class="art-gallery">
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vue_du_grand_Salon_carr%C3%A9_au_Mus%C3%A9e_du_Louvre_%281861%29.jpg?width=850" alt="Representação do Salon Carré do Louvre em 1861, com numerosas pinturas ocupando grande parte das paredes em várias alturas.">
            <figcaption class="artwork-meta"><strong>Salon Carré, Louvre, 1861</strong><small>Muitas obras dividem simultaneamente o campo visual. Densidade, altura e proximidade influenciam comparação e atenção.</small><a href="https://commons.wikimedia.org/wiki/File:Vue_du_grand_Salon_carr%C3%A9_au_Mus%C3%A9e_du_Louvre_%281861%29.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></figcaption>
          </figure>
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/MASP_-_Sala_Georges_Wildenstein_02.jpg?width=850" alt="Galeria do MASP com pinturas apresentadas em cavaletes de cristal, permitindo ao visitante circular entre as obras.">
            <figcaption class="artwork-meta"><strong>Cavaletes de cristal do MASP</strong><small>A proposta de Lina Bo Bardi retira as pinturas das paredes e permite circulação entre elas. O espaço aberto oferece outras relações entre obras e visitantes.</small><a href="https://commons.wikimedia.org/wiki/File:MASP_-_Sala_Georges_Wildenstein_02.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • Dornicke • CC BY-SA 4.0</a></figcaption>
          </figure>
        </div>
        <div class="source-box"><strong class="card-title">Agora o nome técnico</strong><p><strong>Expografia</strong> é o modo como a exposição ganha forma no espaço: posição, altura, distância, iluminação, suportes, circulação, som, textos e relações físicas entre trabalhos. Não é decoração posterior; pode alterar profundamente a experiência.</p><p>O MASP explica que seus cavaletes de cristal criam uma galeria aberta e permeável, com múltiplas possibilidades de leitura e sem um roteiro único predeterminado.</p><p><a href="https://www.masp.org.br/exposicoes/acervo-em-transformacao-2020" target="_blank" rel="noopener noreferrer">Referência: MASP — Acervo em transformação</a></p></div>

        <h3>4. Route Lab — desenhe a experiência antes de carregar mesas</h3>
        <div class="studio-box">
          <strong class="card-title">Planta simplificada da mostra</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Percurso</strong><select id="routeMode" style="width:100%;margin-top:8px"><option value="linear">Mais linear</option><option value="clusters">Por núcleos</option><option value="open">Mais aberto</option></select></label>
            <label class="mini-card"><strong>Som</strong><select id="soundMode" style="width:100%;margin-top:8px"><option value="separate">Área sonora separada</option><option value="headphones">Escuta individual</option><option value="zones">Zonas sonoras</option></select></label>
          </div>
          <svg id="routeMap" viewBox="0 0 580 320" role="img" aria-label="Planta esquemática com seis núcleos de exposição" style="width:100%;max-height:390px;border-radius:14px;background:#f4eadb">
            <rect x="25" y="25" width="530" height="270" rx="20" fill="#fffaf4" stroke="#bfae99" stroke-width="3"/>
            <rect x="25" y="125" width="42" height="70" fill="#e8ddd0"/><text x="31" y="164" font-size="13" fill="#4e244a">ENTRA</text>
            <path id="routeLine" d="M90 85 L205 85 L320 85 L435 85 L435 220 L205 220" fill="none" stroke="#b45f35" stroke-width="5" stroke-linecap="round" stroke-dasharray="8 8"/>
            <circle id="routeA" cx="90" cy="85" r="28" fill="#7a3e73"/><circle id="routeB" cx="205" cy="85" r="28" fill="#b45f35"/><circle id="routeC" cx="320" cy="85" r="28" fill="#7a3e73"/><circle id="routeD" cx="435" cy="85" r="28" fill="#b45f35"/><circle id="routeE" cx="435" cy="220" r="28" fill="#7a3e73"/><circle id="routeF" cx="205" cy="220" r="28" fill="#b45f35"/>
            <g fill="#fff" font-size="14" font-weight="700" text-anchor="middle"><text id="routeLabelA" x="90" y="90">A</text><text id="routeLabelB" x="205" y="90">B</text><text id="routeLabelC" x="320" y="90">C</text><text id="routeLabelD" x="435" y="90">D</text><text id="routeLabelE" x="435" y="225">E</text><text id="routeLabelF" x="205" y="225">F</text></g>
          </svg>
          <div id="routeFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${choice('2','Montagem','Por que testar a planta antes da montagem real é útil?',[
          ['a','Porque permite antecipar circulação, interferência sonora, distâncias, visibilidade e barreiras'],
          ['b','Porque depois disso não será necessário testar o espaço de verdade'],
          ['c','Porque toda exposição precisa seguir um percurso linear']
        ],'a','Isso. O desenho antecipa problemas, mas o espaço real ainda precisa ser testado com corpos, som, luz e circulação reais.','Planta é hipótese. A montagem real pode revelar problemas de escala, ruído, acesso e visibilidade que o desenho não mostrou.')}

        <h3>5. Mediação: não é explicar tudo pelo visitante</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Etiqueta</strong><p>Identifica obra, autoria, materiais, data e informações essenciais.</p></div>
          <div class="mini-card"><strong>Texto de núcleo</strong><p>Apresenta uma pergunta ou relação entre vários trabalhos.</p></div>
          <div class="mini-card"><strong>Conversa / atividade</strong><p>Cria condições para observar, comparar, perguntar e construir interpretações.</p></div>
        </div>
        <div class="note-box"><strong>Mediação não precisa matar a descoberta.</strong><p>Um texto pode orientar sem entregar uma “resposta certa”. Em alguns contextos, até a decisão de deixar a primeira aproximação mais livre faz parte da proposta.</p></div>

        <div class="studio-box">
          <strong class="card-title">Label Lab — quanta informação colocar?</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Trabalho</strong><select id="labelWork" style="width:100%;margin-top:8px"><option value="visual">Artes visuais</option><option value="sound">Som</option><option value="heritage">Memória/patrimônio</option><option value="digital">Interativo digital</option></select></label>
            <label class="mini-card"><strong>Camada de texto</strong><select id="labelMode" style="width:100%;margin-top:8px"><option value="minimal">Só identificação</option><option value="context">Identificação + contexto</option><option value="question">Contexto + pergunta</option></select></label>
          </div>
          <div id="labelPreview" class="source-box" aria-live="polite"></div>
        </div>

        <h3>6. Acessibilidade faz parte da concepção</h3>
        <div class="source-box"><strong class="card-title">Pergunta de projeto</strong><p>Não pergunte apenas “como uma pessoa com deficiência vai entrar?”. Pergunte também: <strong>como ela circula, percebe, compreende, participa e cria?</strong> Acessibilidade pode envolver dimensões arquitetônicas, comunicacionais e atitudinais.</p><p>Orientações brasileiras para projetos culturais incluem recursos como rotas acessíveis, Libras, audiodescrição, legendas, linguagem simples, textos compatíveis com leitores de tela e participação de pessoas com deficiência na construção das soluções.</p><p><a href="https://www.gov.br/cultura/pt-br/acesso-a-informacao/legislacao-e-normativas/instrucao-normativa-minc-no-10-de-28-de-dezembro-de-2023" target="_blank" rel="noopener noreferrer">Referência: Ministério da Cultura — acessibilidade em projetos culturais</a></p></div>

        <div class="studio-box">
          <strong class="card-title">Access Lab — encontre a barreira, não “o problema na pessoa”</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Barreira</strong><select id="accessBarrier" style="width:100%;margin-top:8px"><option value="visual">Informação apenas visual</option><option value="hearing">Informação apenas sonora</option><option value="mobility">Circulação/interação física</option><option value="language">Texto complexo</option><option value="sensory">Estímulo intenso</option></select></label>
            <label class="mini-card"><strong>Possível resposta</strong><select id="accessResponse" style="width:100%;margin-top:8px"><option value="audio">Descrição/audiodescrição</option><option value="captions">Legenda/transcrição/Libras</option><option value="route">Rota e interação acessíveis</option><option value="simple">Linguagem simples</option><option value="warning">Informação e alternativa sensorial</option></select></label>
          </div>
          <div id="accessFeedback" class="source-box" aria-live="polite"></div>
        </div>

        <h3>7. Compartilhar muda o trabalho</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Na sala</strong><p>Escala, percurso, encontro entre pessoas e presença física importam.</p></div>
          <div class="mini-card"><strong>No celular</strong><p>Tela pequena, poucos segundos, legenda e rolagem alteram a atenção.</p></div>
          <div class="mini-card"><strong>No site</strong><p>Navegação, texto alternativo, resolução, links, créditos e contexto precisam ser planejados.</p></div>
          <div class="mini-card"><strong>No arquivo</strong><p>Registrar processo, autoria e versões permite que o projeto seja compreendido depois da exposição.</p></div>
        </div>

        <div class="studio-box">
          <strong class="card-title">Sharing Lab</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Destino</strong><select id="shareChannel" style="width:100%;margin-top:8px"><option value="school">Comunidade escolar</option><option value="social">Rede social</option><option value="site">Site da mostra</option><option value="archive">Arquivo do projeto</option></select></label>
            <label class="mini-card"><strong>Origem do material</strong><select id="shareMaterial" style="width:100%;margin-top:8px"><option value="own">Produção própria</option><option value="cc">Creative Commons</option><option value="public">Domínio público</option><option value="unclear">Achei na internet</option></select></label>
          </div>
          <div id="shareFeedback" class="source-box" aria-live="polite"></div>
        </div>

        ${choice('3','Circulação','Um vídeo criado para ser projetado na mostra será publicado também em rede social. O que é mais adequado?',[
          ['a','Publicar exatamente igual; mudar formato sempre destrói a obra'],
          ['b','Reavaliar enquadramento, duração, legenda, créditos, consentimentos e como a mudança de contexto altera a experiência'],
          ['c','Retirar os créditos para sobrar mais espaço']
        ],'b','Correto. Circulação é parte do projeto: mudar de ambiente pode exigir adaptação sem apagar autoria e responsabilidade.','O mesmo arquivo pode produzir experiências diferentes em uma sala, num celular ou numa página web.')}

        <h3>8. O público não é uma prova de “certo ou errado”</h3>
        <div class="challenge-box"><strong class="card-title">Teste de visita de 5 minutos</strong><ol><li>Convide alguém que não participou da montagem.</li><li>Não explique o percurso antes.</li><li>Observe onde a pessoa para, volta, hesita ou ignora.</li><li>Pergunte: “o que você percebeu primeiro?”, “onde ficou confuso?” e “o que gostaria de explorar mais?”.</li><li>Separe gosto pessoal de problema de comunicação.</li><li>Altere apenas o necessário e teste novamente.</li></ol></div>
        <div class="note-box"><strong>Feedback não é ordem.</strong><p>O visitante não “manda” na obra. Mas sua experiência produz evidências sobre legibilidade, circulação, barreiras e efeitos que a equipe talvez não tivesse previsto.</p></div>

        <h3>9. Checklist de abertura</h3>
        <div class="studio-box">
          <strong class="card-title">A mostra está pronta para receber pessoas?</strong>
          <div class="comparison-grid">
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Curadoria</strong><p>Consigo explicar por que esses trabalhos estão juntos.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Montagem</strong><p>Alturas, distâncias, cabos, suportes e circulação foram testados.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Som/luz</strong><p>Interferências e estímulos foram testados no espaço real.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Acessibilidade</strong><p>Barreiras foram identificadas e há respostas concretas.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Créditos</strong><p>Autores, fontes, licenças e consentimentos estão registrados.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Mediação</strong><p>Textos e perguntas ajudam sem transformar tudo em explicação.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Teste</strong><p>Alguém de fora da equipe percorreu a mostra.</p></label>
            <label class="mini-card"><input type="checkbox" data-ready> <strong>Registro</strong><p>Processo e versões serão documentados com autorização.</p></label>
          </div>
          <div id="readinessFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <h3>10. Missão final — abra a mostra “Isso é arte?”</h3>
        <div class="challenge-box">
          <strong class="card-title">Projeto integrador</strong>
          <p>Em equipes, transformem as produções dos capítulos anteriores numa pequena experiência de exposição. Não é necessário usar tudo.</p>
          <ol>
            <li>Escrevam a pergunta central da mostra em uma frase.</li>
            <li>Selecionem trabalhos e justifiquem inclusões e exclusões.</li>
            <li>Organizem relações entre pelo menos três linguagens diferentes.</li>
            <li>Desenhem a planta e testem circulação, som, luz e segurança.</li>
            <li>Produzam etiquetas e um texto curto de abertura.</li>
            <li>Identifiquem pelo menos duas barreiras de acesso e proponham respostas possíveis.</li>
            <li>Revisem créditos, fontes, licenças e consentimentos.</li>
            <li>Façam uma visita-teste com alguém de fora da equipe.</li>
            <li>Ajustem com base nas evidências observadas.</li>
            <li>Depois da abertura, documentem o que funcionou, o que mudou e o que fariam diferente.</li>
          </ol>
        </div>

        <div class="source-box"><strong class="card-title">Por que isso pertence ao Ensino Médio?</strong><p>A BNCC prevê que os estudantes participem de processos de criação autorais individuais e coletivos nas artes visuais, audiovisual, dança, música e teatro, inclusive nas intersecções entre essas linguagens. Este capítulo junta exatamente essas experiências em um problema real de criação, apresentação e participação.</p><p><a href="https://basenacionalcomum.mec.gov.br/" target="_blank" rel="noopener noreferrer">Referência: BNCC • EM13LGG603</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Criar, curar e compartilhar fazem parte do mesmo ciclo. A obra ganha novas relações quando é selecionada, colocada no espaço, acompanhada por textos, encontrada por diferentes públicos e levada para outros meios. Uma boa apresentação não é apenas bonita: ela tem <strong>intenção, coerência, acesso, autoria transparente, teste e revisão</strong>.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('10 Criar', showChapter);
})();
