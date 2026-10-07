(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  if (typeof MBB.showLesson !== 'function' || MBB.__realImagesWrapped) return;
  MBB.__realImagesWrapped = true;

  const originalShowLesson = MBB.showLesson;

  const visuals = {
    'Como podemos saber o que aconteceu no passado?': {
      placement: { type:'after-first-paragraph', heading:'2. O que pode virar fonte histórica?' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rosetta_Stone,_British_Museum.jpg?width=1200',
      alt:'Pedra de Roseta exposta no Museu Britânico, com inscrições em hieróglifos, demótico e grego antigo.',
      title:'Uma fonte pode ser escrita e material ao mesmo tempo',
      caption:'Pedra de Roseta, estela produzida em 196 a.C. O objeto, suas inscrições e o contexto em que foi produzido precisam ser interrogados em conjunto — exatamente como fazemos com qualquer fonte histórica.',
      credit:'Foto: APK / Wikimedia Commons — CC BY 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Rosetta_Stone,_British_Museum.jpg'
    },
    'De onde vieram os seres humanos e como seus modos de vida mudaram?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blombo.jpg?width=1200',
      alt:'Peça de ocre gravada encontrada na Caverna de Blombos, na África do Sul, com padrão de aproximadamente 70 mil anos.',
      title:'Uma evidência real de um passado sem textos escritos',
      caption:'Ocre gravado encontrado na Caverna de Blombos, África do Sul, com padrão de aproximadamente 70 mil anos. O objeto não “conta sua história sozinho”: contexto arqueológico, datação e comparação com outros vestígios ajudam a investigar modos de vida e comportamentos simbólicos de populações humanas antigas.',
      credit:'Chris S. Henshilwood / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Blombo.jpg'
    },
    'Por que algumas das primeiras grandes sociedades cresceram junto aos rios?': {
      placement: { type:'after-first-paragraph', heading:'6. A escrita não nasceu para escrever livros escolares' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cuneiform_tablet_showing_grain_transaction_of_two_types_of_grain,_circa_3000_BCE,_Iraq,_British_Museum,_London.jpg?width=1200',
      alt:'Tabuinha de argila com escrita cuneiforme usada para registrar transação de grãos na Mesopotâmia, por volta de 3000 a.C.',
      title:'Aqui está um registro administrativo real',
      caption:'Tabuinha cuneiforme de cerca de 3000 a.C., do atual Iraque, registrando uma transação envolvendo dois tipos de grão. Ela mostra por que escrita, armazenamento e administração aparecem conectados no capítulo.',
      credit:'Foto: SpeakingArch / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Cuneiform_tablet_showing_grain_transaction_of_two_types_of_grain,_circa_3000_BCE,_Iraq,_British_Museum,_London.jpg'
    },
    'Existia uma única forma de viver nas Américas antes da chegada dos europeus?': {
      placement: { type:'after-first-paragraph', heading:'4. Incas: um Estado andino chamado Tawantinsuyu' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/%C3%81rea_de_cultivo_Inca_em_Machu_Picchu,_Peru.jpg?width=1200',
      alt:'Terraços agrícolas incas em Machu Picchu, no Peru, construídos em encostas íngremes.',
      title:'A paisagem também é uma fonte histórica',
      caption:'Terraços agrícolas incas em Machu Picchu. A imagem permite observar como técnica, ambiente e trabalho humano se combinavam para transformar encostas andinas em áreas de cultivo — sem reduzir a sociedade inca apenas a “grandes construções”.',
      credit:'Foto: Angeoribeiro / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:%C3%81rea_de_cultivo_Inca_em_Machu_Picchu,_Peru.jpg'
    },
    'Quem podia ser cidadão no mundo antigo?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bema,_Pnyx.jpg?width=1200',
      alt:'Bema da Pnyx, plataforma de pedra em Atenas de onde oradores se dirigiam à assembleia dos cidadãos.',
      title:'Um espaço real de participação política — para quem era cidadão',
      caption:'Bema da Pnyx, em Atenas, plataforma de onde oradores se dirigiam à assembleia. O espaço ajuda a concretizar a participação política ateniense e, ao mesmo tempo, a perguntar quem era reconhecido como cidadão e quem permanecia excluído desse direito.',
      credit:'Foto: GeorgeKokkos / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Bema,_Pnyx.jpg'
    },
    'Como reis conseguiram concentrar tanto poder?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hall_of_mirrors_at_Chateau_de_Versailles.jpg?width=1200',
      alt:'Galeria dos Espelhos do Palácio de Versalhes, grande salão cerimonial associado à monarquia francesa de Luís XIV.',
      title:'Arquitetura também comunica poder',
      caption:'Galeria dos Espelhos do Palácio de Versalhes. O espaço ajuda a observar como a monarquia francesa transformava arquitetura, cerimônia e corte em linguagem política. A imagem não prova que o rei governava sem limites; ela mostra como o poder também era representado e encenado.',
      credit:'Foto: Dan Dickinson / Wikimedia Commons — CC BY 2.0',
      source:'https://commons.wikimedia.org/wiki/File:Hall_of_mirrors_at_Chateau_de_Versailles.jpg'
    },
    'De onde veio a ideia de que o poder do governante deve ter limites?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/English_Bill_of_Rights_of_1689.jpg?width=900',
      alt:'Reprodução do documento inglês Bill of Rights de 1689, preservado nos Arquivos Nacionais do Reino Unido.',
      title:'Um documento real sobre limites ao poder',
      caption:'Reprodução do Bill of Rights inglês de 1689. O documento registra limites à atuação da Coroa e garantias ligadas ao Parlamento; como toda fonte normativa, mostra o que se pretendia estabelecer e precisa ser lido no contexto dos conflitos políticos do século XVII.',
      credit:'Parlamento da Inglaterra / The National Archives (UK), via Wikimedia Commons — domínio público',
      source:'https://commons.wikimedia.org/wiki/File:English_Bill_of_Rights_of_1689.jpg'
    },
    'Se todos eram declarados iguais, quem continuou excluído?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg?width=1200',
      alt:'Representação de 1789 da Declaração dos Direitos do Homem e do Cidadão, com o texto dos artigos e figuras alegóricas.',
      title:'Direitos proclamados também podem ser lidos como fonte',
      caption:'Representação da Declaração dos Direitos do Homem e do Cidadão, de 1789. O documento ajuda a investigar a linguagem universal dos direitos e, ao mesmo tempo, a perguntar quem tinha acesso real à cidadania, à participação política e à liberdade naquele contexto.',
      credit:'Jean-Jacques-François Le Barbier / Paris Musées, Musée Carnavalet — CC0',
      source:'https://commons.wikimedia.org/wiki/File:Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg'
    },
    'Como a ideia de “civilização” foi usada para justificar dominação?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kongokonferenz.jpg?width=1200',
      alt:'Ilustração publicada em 1884 mostrando participantes europeus da Conferência de Berlim reunidos em torno de uma mesa.',
      title:'Olhe também para quem não está à mesa',
      caption:'Ilustração contemporânea à Conferência de Berlim, publicada em 1884. Não é uma fotografia. Ela é útil justamente como fonte: mostra representantes europeus debatendo a África e permite perguntar quais povos africanos aparecem — ou não aparecem — na cena.',
      credit:'Adalbert von Roessler, 1884 / Wikimedia Commons — domínio público',
      source:'https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg'
    },
    'Por que sociedades ainda disputam o passado?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Defaced-lee-statue-2020.jpg?width=1200',
      alt:'Monumento equestre de Robert E. Lee em Richmond coberto por grafites após protestos de 2020.',
      title:'Quando um monumento deixa de ser apenas monumento',
      caption:'Monumento de Robert E. Lee, em Richmond, após os protestos de 2020. A fotografia não responde se uma estátua deve permanecer, ser retirada ou reinterpretada; ela mostra que monumentos podem se tornar lugares de disputa sobre memória, homenagem, racismo e espaço público.',
      credit:'Foto: Mk17b / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Defaced-lee-statue-2020.jpg'
    }
  };

  function figureHTML(item) {
    return `
      <figure class="history-figure history-figure-real" data-history-real-image>
        <a class="history-figure-link" href="${item.source}" target="_blank" rel="noopener noreferrer" aria-label="Abrir fonte e licença da imagem em nova aba">
          <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
        </a>
        <figcaption>
          <strong>${item.title}</strong>
          <span>${item.caption}</span>
          <small>${item.credit}. <a href="${item.source}" target="_blank" rel="noopener noreferrer">Fonte e licença</a>.</small>
        </figcaption>
      </figure>`;
  }

  function findHeading(root, startsWith) {
    return [...root.querySelectorAll('h3')].find(h => h.textContent.trim().startsWith(startsWith));
  }

  function injectVisual(title) {
    const item = visuals[title];
    const root = document.getElementById('lessonContent');
    if (!item || !root || root.querySelector('[data-history-real-image]')) return;

    if (item.placement.type === 'after-opening') {
      const opening = root.querySelector('.history-opening');
      if (opening) opening.insertAdjacentHTML('afterend', figureHTML(item));
      return;
    }

    if (item.placement.type === 'after-first-paragraph') {
      const heading = findHeading(root, item.placement.heading);
      if (!heading) return;
      let target = heading.nextElementSibling;
      while (target && target.tagName !== 'P') target = target.nextElementSibling;
      (target || heading).insertAdjacentHTML('afterend', figureHTML(item));
    }
  }

  MBB.showLesson = function(args) {
    originalShowLesson(args);
    injectVisual(args?.title || '');
  };
})();
