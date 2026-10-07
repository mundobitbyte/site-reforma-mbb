(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function init(root) {
    const palette = $('#compositionPalette', root);
    const focus = $('#compositionFocus', root);
    const balance = $('#compositionBalance', root);
    const preview = $('#compositionPreview', root);
    const note = $('#compositionNote', root);

    const palettes = {
      warm: ['#f15b3a','#f4a261','#ffd166','#5c2a2a'],
      cool: ['#264653','#2a9d8f','#8ecae6','#e9f5f2'],
      contrast: ['#111827','#f9fafb','#ef233c','#ffd60a'],
      mono: ['#30263b','#65506f','#a78bb3','#eee7f1']
    };

    const updateComposition = () => {
      if (!palette || !focus || !balance || !preview || !note) return;
      const colors = palettes[palette.value] || palettes.warm;
      const focal = $('#compFocal', preview);
      const secondary = $('#compSecondary', preview);
      const accent = $('#compAccent', preview);
      const ground = $('#compGround', preview);

      ground?.setAttribute('fill', colors[3]);
      focal?.setAttribute('fill', colors[0]);
      secondary?.setAttribute('fill', colors[1]);
      accent?.setAttribute('fill', colors[2]);

      const positions = {
        center:[300,150],
        left:[175,145],
        right:[425,145],
        upper:[300,90]
      };
      const [x,y] = positions[focus.value] || positions.center;
      focal?.setAttribute('cx', x);
      focal?.setAttribute('cy', y);

      if (balance.value === 'sym') {
        secondary?.setAttribute('x','105'); secondary?.setAttribute('y','78');
        accent?.setAttribute('x','415'); accent?.setAttribute('y','78');
        secondary?.setAttribute('width','80'); accent?.setAttribute('width','80');
      } else if (balance.value === 'asym') {
        secondary?.setAttribute('x','70'); secondary?.setAttribute('y','205');
        accent?.setAttribute('x','448'); accent?.setAttribute('y','58');
        secondary?.setAttribute('width','155'); accent?.setAttribute('width','58');
      } else {
        secondary?.setAttribute('x','65'); secondary?.setAttribute('y','64');
        accent?.setAttribute('x','400'); accent?.setAttribute('y','205');
        secondary?.setAttribute('width','115'); accent?.setAttribute('width','125');
      }

      const paletteText = {
        warm:'cores quentes tendem a aumentar sensação de energia e proximidade nesta composição',
        cool:'cores frias mudam a atmosfera e reduzem a sensação de calor visual',
        contrast:'contraste forte cria diferenças imediatas e acelera a hierarquia visual',
        mono:'variações próximas de uma mesma família reduzem contraste cromático e destacam forma e valor'
      }[palette.value];
      const focusText = focus.value === 'center' ? 'o foco está centralizado' : 'o foco foi deslocado e a leitura ficou menos estática';
      const balanceText = balance.value === 'sym' ? 'a distribuição é quase simétrica' : balance.value === 'asym' ? 'o equilíbrio é assimétrico: pesos diferentes se compensam' : 'os elementos criam uma diagonal visual';
      note.innerHTML = `<strong>Leia sua composição:</strong> ${paletteText}; ${focusText}; ${balanceText}.`;
    };

    [palette,focus,balance].forEach(control => control?.addEventListener('change', updateComposition));
    updateComposition();

    const cropImage = $('#cropImage', root);
    const cropNote = $('#cropNote', root);
    $$('[data-crop]', root).forEach(button => {
      button.addEventListener('click', () => {
        if (!cropImage || !cropNote) return;
        const mode = button.dataset.crop;
        const settings = {
          full:['50% 50%','1','A visão completa permite relacionar céu, cipreste e vila.'],
          sky:['58% 12%','1.55','Ao aproximar o céu, redemoinhos, estrelas e pinceladas dominam a leitura.'],
          tree:['4% 48%','1.7','Ao privilegiar o cipreste, uma forma escura vertical passa a comandar o enquadramento.'],
          village:['55% 93%','1.75','Ao aproximar a vila, o mesmo quadro parece mais terrestre e menos dominado pelo céu.']
        };
        const [position,scale,text] = settings[mode] || settings.full;
        cropImage.style.objectPosition = position;
        cropImage.style.transform = `scale(${scale})`;
        cropNote.innerHTML = `<strong>O que mudou?</strong> ${text} O conteúdo da obra não mudou, mas o recorte alterou a hierarquia do que percebemos.`;
      });
    });
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Artes visuais',
      technical:'linha • forma • cor • valor • textura • espaço • contraste • equilíbrio • hierarquia • enquadramento',
      title:'02 — Imagem, cor, forma e composição',
      objective:'<strong>Objetivo:</strong> perceber como elementos visuais e decisões de composição orientam o olhar, constroem atmosferas e alteram o sentido de imagens, aplicando esses princípios em análises e pequenas criações.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Laboratório visual</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” ganhou uma nova tarefa: criar o cartaz de entrada.</strong>
            <p>A equipe recebeu três propostas. Todas têm as mesmas informações — nome da mostra, data e local — mas uma parece calma, outra urgente e outra confusa. Ninguém mudou as palavras. Mudaram <strong>cor, tamanho, posição, contraste e espaço</strong>.</p>
            <p>Seu desafio agora é descobrir como uma imagem <strong>organiza o olhar antes mesmo de explicar alguma coisa por escrito</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como escolhas visuais fazem seus olhos entrar, parar e circular por uma imagem?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Elementos da linguagem visual">
          <span>linha</span><span>forma</span><span>cor</span><span>valor</span><span>textura</span><span>espaço</span><span>contraste</span><span>equilíbrio</span>
        </div>

        <h3>1. Linha não serve apenas para contornar</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vincent_van_Gogh_Starry_Night.jpg?width=1000" alt="A Noite Estrelada, de Vincent van Gogh, com céu azul cheio de curvas e espirais luminosas sobre uma vila e um cipreste escuro.">
          <div>
            <span class="lesson-kicker">Observe o movimento</span>
            <strong class="card-title">A Noite Estrelada — Vincent van Gogh, 1889</strong>
            <p>O quadro é parado, mas o céu parece se mover. Isso acontece porque linhas curvas, pinceladas repetidas, direções e contrastes organizam uma sensação de fluxo.</p>
            <p><strong>Faça o percurso com os olhos:</strong> comece no cipreste escuro, passe pelo redemoinho central e procure os círculos luminosos das estrelas. Seu olhar percorreu uma rota?</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_Starry_Night.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></p>
          </div>
        </div>

        ${choice('1','Direção e movimento','Qual observação explica melhor a sensação de movimento do céu?',[
          ['a','As linhas curvas, pinceladas direcionais e repetições conduzem o olhar'],
          ['b','O movimento existe apenas porque sabemos que o céu tem vento'],
          ['c','Somente o tamanho da moldura produz movimento']
        ],'a','Correto. Elementos visuais podem sugerir direção e ritmo mesmo em uma imagem imóvel.','Procure evidências dentro da própria imagem: direção das linhas, repetição, curvas, contraste e ritmo visual.')}

        <div class="source-box"><strong class="card-title">Linha também pode ser percurso</strong><p>Uma linha pode separar áreas, sugerir contorno, conduzir o olhar, indicar direção, criar ritmo ou transmitir estabilidade e tensão. Nem toda linha precisa estar desenhada: alinhamentos de figuras e contrastes também podem produzir <strong>linhas implícitas</strong>.</p></div>

        <h3>2. Cor não trabalha sozinha</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Matiz</strong><p>É a família da cor: vermelho, azul, verde, amarelo...</p></div>
          <div class="mini-card"><strong>Valor ou luminosidade</strong><p>É o quanto uma área parece clara ou escura. Ajuda a construir contraste e volume.</p></div>
          <div class="mini-card"><strong>Saturação</strong><p>Indica intensidade cromática: uma cor pode parecer mais viva ou mais acinzentada.</p></div>
          <div class="mini-card"><strong>Relação</strong><p>A mesma cor parece diferente dependendo das cores ao redor, da luz, da área ocupada e do contexto.</p></div>
        </div>

        <div class="note-box"><strong>Cuidado com receitas prontas.</strong><p>“Vermelho significa paixão” ou “azul significa tristeza” podem funcionar em certos contextos, mas não são leis universais. Significados cromáticos dependem de cultura, situação, combinação, intensidade e finalidade.</p></div>

        ${choice('2','Cor e contexto','Qual afirmação é mais adequada?',[
          ['a','Cada cor possui um significado universal e fixo'],
          ['b','A cor participa da construção de sentido em relação com outras cores, contexto, cultura e composição'],
          ['c','Cor serve apenas para deixar a imagem bonita']
        ],'b','Isso. Cor é linguagem, mas seu efeito não pode ser reduzido a uma tabela fixa de emoções.','Analise relação, contraste, contexto e finalidade antes de atribuir um significado fechado.')}

        <h3>3. Contraste cria foco</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Girl_with_a_Pearl_Earring.jpg?width=750" alt="Moça com Brinco de Pérola, de Johannes Vermeer, com uma jovem iluminada contra um fundo muito escuro.">
          <div>
            <span class="lesson-kicker">Onde seus olhos param?</span>
            <strong class="card-title">Moça com Brinco de Pérola — Johannes Vermeer, c. 1665</strong>
            <p>O fundo escuro reduz distrações. Rosto, tecido claro, azul e amarelo e o brilho do brinco ganham destaque.</p>
            <p><strong>Experimente mentalmente:</strong> se o fundo tivesse a mesma luminosidade do rosto, o foco seria igualmente forte?</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Girl_with_a_Pearl_Earring.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></p>
          </div>
        </div>

        ${choice('3','Hierarquia visual','Por que o rosto tende a atrair atenção rapidamente nessa imagem?',[
          ['a','Porque áreas iluminadas e detalhes do rosto contrastam fortemente com o fundo escuro'],
          ['b','Porque todo retrato obriga o olhar a começar sempre no mesmo ponto'],
          ['c','Porque contraste não interfere na percepção']
        ],'a','Correto. Diferenças de luminosidade, cor, nitidez e posição podem criar hierarquia e ponto focal.','Pergunte: qual área se diferencia mais das vizinhas e por quais características?')}

        <h3>4. Composição é a organização das relações</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Mondrian_-_Composition_with_Blue%2C_Yellow%2C_and_Red%2C_1927.jpg?width=900" alt="Composição abstrata de Piet Mondrian formada por linhas pretas verticais e horizontais, áreas brancas e blocos de azul, amarelo e vermelho.">
          <figcaption class="artwork-meta">
            <strong>Composition with Blue, Yellow, and Red — Piet Mondrian, 1927</strong>
            <small>Linhas, retângulos, áreas vazias e poucas cores constroem equilíbrio sem depender de uma figura central.</small>
            <a href="https://commons.wikimedia.org/wiki/File:Mondrian_-_Composition_with_Blue,_Yellow,_and_Red,_1927.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a>
          </figcaption>
        </figure>

        <div class="three-col">
          <div class="mini-card"><strong>Equilíbrio</strong><p>É a relação entre pesos visuais. Não significa obrigatoriamente dividir tudo ao meio.</p></div>
          <div class="mini-card"><strong>Hierarquia</strong><p>Organiza o que percebemos primeiro, depois e por último.</p></div>
          <div class="mini-card"><strong>Espaço</strong><p>Áreas vazias também participam da composição; “não preencher” pode ser uma escolha ativa.</p></div>
        </div>

        ${choice('4','Equilíbrio','Uma composição assimétrica pode parecer equilibrada?',[
          ['a','Não; equilíbrio exige duas metades idênticas'],
          ['b','Sim; tamanhos, posições, cores e contrastes diferentes podem compensar pesos visuais'],
          ['c','Somente composições circulares podem ser equilibradas']
        ],'b','Isso. Simetria é uma forma de equilíbrio, não a única. O equilíbrio assimétrico distribui pesos diferentes de modo convincente.','Não confunda equilíbrio com espelhamento. Compare tamanho, cor, contraste, posição e espaço ao redor.')}

        <h3>5. Laboratório: altere a composição</h3>
        <div class="studio-box">
          <strong class="card-title">Composition Lab</strong>
          <p>Os mesmos elementos podem produzir leituras diferentes quando você muda paleta, foco e equilíbrio.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Paleta</strong><select id="compositionPalette" style="width:100%;margin-top:8px;padding:8px"><option value="warm">Quente</option><option value="cool">Fria</option><option value="contrast">Alto contraste</option><option value="mono">Quase monocromática</option></select></label>
            <label class="mini-card"><strong>Ponto focal</strong><select id="compositionFocus" style="width:100%;margin-top:8px;padding:8px"><option value="center">Centro</option><option value="left">Esquerda</option><option value="right">Direita</option><option value="upper">Parte superior</option></select></label>
            <label class="mini-card"><strong>Equilíbrio</strong><select id="compositionBalance" style="width:100%;margin-top:8px;padding:8px"><option value="sym">Quase simétrico</option><option value="asym">Assimétrico</option><option value="diag">Diagonal</option></select></label>
          </div>
          <svg id="compositionPreview" viewBox="0 0 600 300" role="img" aria-label="Composição abstrata interativa com formas coloridas" style="width:100%;max-height:330px;border-radius:12px;border:1px solid var(--line);background:#fff">
            <rect id="compGround" x="0" y="0" width="600" height="300" fill="#5c2a2a"></rect>
            <rect id="compSecondary" x="105" y="78" width="80" height="95" rx="8" fill="#f4a261"></rect>
            <rect id="compAccent" x="415" y="78" width="80" height="95" rx="8" fill="#ffd166"></rect>
            <circle id="compFocal" cx="300" cy="150" r="62" fill="#f15b3a"></circle>
            <line x1="55" y1="245" x2="545" y2="55" stroke="#ffffff" stroke-opacity=".35" stroke-width="4"></line>
          </svg>
          <div id="compositionNote" class="ok-box" aria-live="polite"></div>
        </div>

        <div class="challenge-box"><strong class="card-title">Não existe botão “ficou bonito”.</strong><p>O laboratório não decide se sua composição é boa. Ele ajuda você a <strong>nomear as relações que mudou</strong>. A pergunta é: que efeito sua escolha produziu e ela serve ao objetivo visual que você tinha?</p></div>

        <h3>6. Enquadrar também é escolher</h3>
        <p>Fotografia, cinema, cartaz e até a maneira de reproduzir uma pintura numa tela dependem de recorte. Mostrar tudo, aproximar ou deslocar o centro altera a hierarquia visual.</p>
        <div class="studio-box">
          <strong class="card-title">Enquadramento Lab — uma obra, quatro leituras</strong>
          <div style="overflow:hidden;border-radius:12px;height:310px;background:#111;margin:12px 0">
            <img id="cropImage" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vincent_van_Gogh_Starry_Night.jpg?width=1200" alt="A Noite Estrelada usada em um experimento de enquadramento" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;transform:scale(1);transition:transform .35s ease,object-position .35s ease">
          </div>
          <div class="choice-row" aria-label="Escolhas de enquadramento">
            <button type="button" data-crop="full">Visão geral</button>
            <button type="button" data-crop="sky">Priorizar céu</button>
            <button type="button" data-crop="tree">Priorizar cipreste</button>
            <button type="button" data-crop="village">Priorizar vila</button>
          </div>
          <div id="cropNote" class="source-box" aria-live="polite"><strong>Comece pela visão geral.</strong><p>Depois altere o recorte e observe o que ganhou ou perdeu importância.</p></div>
        </div>

        ${choice('5','Enquadramento','Ao cortar uma imagem e privilegiar apenas uma parte dela, o que pode acontecer?',[
          ['a','Nada; o sentido visual permanece sempre exatamente igual'],
          ['b','A hierarquia, o contexto e as relações entre elementos podem mudar'],
          ['c','Toda imagem recortada deixa automaticamente de ser arte']
        ],'b','Correto. Recortar não muda a obra original, mas muda o que a reprodução mostra e como o observador encontra suas relações.','Pense no que desapareceu, no que ficou maior e em qual elemento passou a dominar a imagem.')}

        <h3>7. O cartaz da mostra volta para sua mesa</h3>
        <div class="source-box">
          <strong class="card-title">Briefing real da equipe</strong>
          <p>O cartaz precisa ser visto de longe no corredor. A informação principal é <strong>“Mostra — Isso é arte?”</strong>. Data e local precisam ser encontrados logo depois. A equipe quer energia, mas não quer transformar tudo em competição visual.</p>
        </div>

        ${choice('6','Decisão de design','Qual solução responde melhor ao briefing?',[
          ['a','Todos os textos do mesmo tamanho, muitas cores igualmente intensas e elementos ocupando cada espaço vazio'],
          ['b','Título com maior hierarquia, contraste suficiente, data/local em segundo nível e espaço para separar grupos de informação'],
          ['c','Esconder data e local porque somente a imagem importa']
        ],'b','Isso. Hierarquia, contraste e espaço ajudam o cartaz a comunicar sem exigir que tudo grite ao mesmo tempo.','Volte ao objetivo: o que precisa ser percebido primeiro, depois e por último?')}

        <h3>8. Miniestúdio — componha antes de decorar</h3>
        <div class="studio-box">
          <strong class="card-title">Crie uma versão do cartaz em 10 minutos</strong>
          <ol>
            <li>Defina qual informação será o <strong>ponto focal</strong>.</li>
            <li>Escolha apenas <strong>duas ou três cores principais</strong> e explique a relação entre elas.</li>
            <li>Use pelo menos uma direção dominante: horizontal, vertical, diagonal ou curva.</li>
            <li>Deixe uma área de respiro: espaço vazio também organiza.</li>
            <li>Mostre a um colega por três segundos e pergunte: <strong>o que você viu primeiro?</strong></li>
            <li>Se a resposta não corresponder à sua intenção, revise a composição.</li>
          </ol>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Imagem não é um recipiente neutro. Linha, forma, cor, luminosidade, textura, espaço, contraste, equilíbrio, escala e enquadramento constroem caminhos para o olhar. Uma composição funciona quando suas escolhas ajudam a produzir a experiência e a comunicação pretendidas.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('02 Imagem', showChapter);
})();
