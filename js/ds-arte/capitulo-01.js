(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  const cases = {
    amphora: {
      title:'Ânfora de Exéquias',
      intention:'Investigue para que o objeto servia e por que recebeu uma cena cuidadosamente planejada.',
      language:'Observe figuras, linhas, padrões, repetição, contraste e a organização da narrativa no corpo do vaso.',
      material:'Argila, forma do recipiente e técnica de figuras negras participam do resultado.',
      context:'Foi produzida na Atenas arcaica, num contexto muito diferente de um museu atual.',
      function:'O objeto podia ter função prática e, ao mesmo tempo, construir narrativa, prestígio e experiência visual.',
      circulation:'Hoje circula como patrimônio artístico e arqueológico, embora sua vida original não fosse a de uma peça isolada numa tela.'
    },
    kandinsky: {
      title:'Composition VII',
      intention:'Em vez de procurar “o objeto representado”, pergunte que experiência linhas, cores e tensões podem construir.',
      language:'Ritmo visual, direção, contraste, sobreposição, cor e densidade organizam a pintura.',
      material:'Tinta e tela não mudam, mas a maneira de organizar esses materiais rompe com a expectativa de imitação direta.',
      context:'A obra participa das experiências da arte abstrata do início do século XX.',
      function:'Pode provocar percepção, emoção, pensamento e interpretação sem contar uma história figurativa evidente.',
      circulation:'Museus, livros e reproduções ajudaram a consolidar sua presença na história da arte, mas isso não substitui a análise da obra.'
    },
    goya: {
      title:'O 3 de Maio de 1808',
      intention:'Observe como a cena organiza violência, medo, poder e vulnerabilidade.',
      language:'Luz, contraste, gestos, direção dos corpos e oposição entre indivíduos e pelotão conduzem a leitura.',
      material:'A pintura usa recursos visuais para transformar um acontecimento histórico em experiência sensível e memória.',
      context:'A obra se relaciona às violências da ocupação napoleônica na Espanha e à construção de memória histórica.',
      function:'Arte também pode denunciar, lembrar, inquietar e disputar sentidos — não precisa apenas decorar.',
      circulation:'Sua leitura muda quando é vista como documento histórico, pintura, símbolo político ou experiência estética; nenhuma dessas lentes precisa agir sozinha.'
    }
  };

  function playPattern(root, expressive) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const feedback = $('#soundFeedback', root);
    if (!AudioCtx) {
      if (feedback) feedback.textContent = 'Seu navegador não disponibilizou o recurso de áudio desta experiência.';
      return;
    }

    const ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.03);
    master.connect(ctx.destination);

    const simple = [
      [261.63,0,.24],[293.66,.28,.24],[329.63,.56,.24],[392,.84,.24],[329.63,1.12,.24],[293.66,1.40,.24]
    ];
    const shaped = [
      [261.63,0,.15],[329.63,.20,.34],[293.66,.62,.13],[392,.82,.42],[329.63,1.32,.18],[293.66,1.58,.32]
    ];
    const sequence = expressive ? shaped : simple;

    sequence.forEach(([frequency,start,duration], index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = expressive && index % 2 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime + start);
      const peak = expressive ? (index === 3 ? 0.24 : 0.13 + index * 0.01) : 0.14;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(peak, ctx.currentTime + start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(master);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + duration + 0.03);
    });

    const end = expressive ? 2.05 : 1.75;
    master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + end);
    setTimeout(() => ctx.close?.(), Math.ceil((end + .2) * 1000));

    if (feedback) feedback.innerHTML = expressive
      ? '<strong>Versão B:</strong> as alturas são parecidas, mas duração, pausa, intensidade e timbre foram reorganizados. Você percebeu mudança de caráter?'
      : '<strong>Versão A:</strong> uma sequência regular e quase uniforme. Agora compare com a versão B.';
  }

  function init(root) {
    $$('[data-sound-pattern]', root).forEach(button => {
      button.addEventListener('click', () => playPattern(root, button.dataset.soundPattern === 'b'));
    });

    const work = $('#lensWork', root);
    const lens = $('#lensDimension', root);
    const output = $('#lensOutput', root);

    const updateLens = () => {
      if (!work || !lens || !output) return;
      const item = cases[work.value];
      const text = item?.[lens.value];
      output.innerHTML = item && text
        ? `<strong>${item.title}</strong><p>${text}</p>`
        : '<strong>Escolha uma obra e uma lente.</strong>';
    };

    work?.addEventListener('change', updateLens);
    lens?.addEventListener('change', updateLens);
    updateLens();
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Perceber e perguntar',
      technical:'arte • experiência estética • intenção • linguagem • materialidade • contexto • função • recepção',
      title:'01 — O que faz algo ser arte?',
      objective:'<strong>Objetivo:</strong> investigar diferentes modos de reconhecer e analisar práticas artísticas, entendendo que beleza, habilidade técnica, utilidade ou presença em museu não funcionam isoladamente como uma definição universal de arte.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão de curadoria</span>
          <div class="hero-box">
            <strong class="card-title">A escola vai montar a mostra “Isso é arte?” — e você entrou para a equipe de curadoria.</strong>
            <p>Chegaram trabalhos e objetos muito diferentes. Alguns parecem “arte” imediatamente; outros confundem. O problema é que a mostra não aceita uma plaquinha dizendo apenas <strong>“é arte porque eu gostei”</strong> ou <strong>“não é arte porque eu não entendi”</strong>.</p>
            <p>Sua tarefa será observar, escutar, comparar e construir critérios para explicar <strong>o que cada caso faz, como foi construído, em que contexto circula e que experiência propõe</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> existe uma característica única que transforma qualquer coisa em arte?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Lentes de investigação artística">
          <span>intenção</span><span>linguagem</span><span>materialidade</span><span>contexto</span><span>função</span><span>circulação</span>
        </div>

        <h3>1. Primeiro caso: um objeto útil pode ser arte?</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Achilles_and_Ajax_playing_dice%2C_Attic_black-figured_amphora%2C_signed_by_Exekias_as_both_painter_and_potter%2C_540-530_BC%2C_inv._16757_-_Museo_Gregoriano_Etrusco_-_Vatican_Museums_-_DSC01049.jpg?width=700" alt="Ânfora grega atribuída a Exéquias, com Aquiles e Ájax sentados jogando diante um do outro.">
          <div>
            <span class="lesson-kicker">Peça 1 da mostra</span>
            <strong class="card-title">Ânfora com Aquiles e Ájax jogando</strong>
            <p>Exéquias, cerca de 540–530 a.C. O formato pertence a um recipiente; a superfície recebe uma composição narrativa cuidadosamente executada.</p>
            <p><strong>Observe antes de ler uma definição:</strong> para onde seu olhar vai? Como as lanças, os corpos inclinados e o tabuleiro criam concentração no centro?</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Achilles_and_Ajax_playing_dice,_Attic_black-figured_amphora,_signed_by_Exekias_as_both_painter_and_potter,_540-530_BC,_inv._16757_-_Museo_Gregoriano_Etrusco_-_Vatican_Museums_-_DSC01049.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • fotografia CC0</a></p>
          </div>
        </div>

        ${choice('1','Arte e utilidade','Se a ânfora foi também um objeto funcional, qual conclusão é mais cuidadosa?',[
          ['a','Então ela não pode ser arte'],
          ['b','Utilidade e dimensão artística podem coexistir; é preciso analisar forma, técnica, imagens, função e contexto'],
          ['c','Todo objeto útil é automaticamente uma obra de arte']
        ],'b','Isso. A fronteira entre arte, artesanato, design e objeto de uso pode ser porosa. Função prática não apaga escolhas estéticas e culturais.','Evite a regra “se serve para alguma coisa, não é arte”. Muitos objetos históricos combinam uso, técnica, símbolo e experiência estética.')}

        <div class="source-box">
          <strong class="card-title">Primeira descoberta da equipe</strong>
          <p><strong>“Não ter utilidade” não é um teste seguro para reconhecer arte.</strong> Arquitetura, cerâmica, tecidos, objetos rituais, design e muitas outras produções podem articular uso, linguagem, memória, identidade e criação.</p>
        </div>

        <h3>2. Segundo caso: arte precisa parecer com alguma coisa?</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Wassily_Kandinsky_Composition_VII.jpg?width=1000" alt="Pintura abstrata Composition VII, de Wassily Kandinsky, formada por muitas linhas, curvas, manchas e áreas coloridas sobrepostas.">
          <figcaption class="artwork-meta">
            <strong>Peça 2 — Composition VII</strong>
            <small>Wassily Kandinsky, 1913 • pintura abstrata.</small>
            <a href="https://commons.wikimedia.org/wiki/File:Wassily_Kandinsky_Composition_VII.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a>
          </figcaption>
        </figure>

        <div class="two-col">
          <div class="mini-card"><strong>Olhar 1 — “O que está representado?”</strong><p>Essa pergunta pode ser útil em muitas obras, mas aqui talvez não seja suficiente.</p></div>
          <div class="mini-card"><strong>Olhar 2 — “O que as formas fazem?”</strong><p>Direção, contraste, cor, ritmo, densidade, equilíbrio e tensão também produzem experiência e sentido.</p></div>
        </div>

        ${choice('2','Representação','Uma obra precisa imitar fielmente pessoas, paisagens ou objetos para ser arte?',[
          ['a','Sim; sem semelhança não existe arte'],
          ['b','Não; a arte pode trabalhar relações de forma, cor, som, gesto, espaço, conceito e muitas outras possibilidades'],
          ['c','Somente fotografias podem ser consideradas arte']
        ],'b','Correto. Representar o mundo visível é uma possibilidade artística, não uma obrigação universal.','Pense em música instrumental, dança, abstração e muitas práticas em que o sentido não depende de copiar visualmente um objeto.')}

        <div class="studio-box">
          <strong class="card-title">Experimento de percepção</strong>
          <p>Olhe para a pintura por alguns segundos sem tentar “descobrir o desenho escondido”. Escolha três palavras para descrever <strong>movimento, intensidade ou atmosfera</strong>. Depois compare suas palavras com as de um colega. Vocês perceberam as mesmas relações?</p>
        </div>

        <h3>3. Terceiro caso: arte precisa ser bonita e agradável?</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg?width=900" alt="Pintura O 3 de Maio de 1808, de Francisco de Goya, mostrando um pelotão apontando armas para civis durante uma execução noturna.">
          <div>
            <span class="lesson-kicker">Peça 3 da mostra</span>
            <strong class="card-title">O 3 de Maio de 1808</strong>
            <p>Francisco de Goya, 1814. A cena representa violência, medo e morte. É difícil chamar o assunto de “bonito” — e justamente por isso ele testa nosso critério.</p>
            <p><strong>Procure escolhas:</strong> quem recebe luz? Quem aparece quase sem rosto? Para onde as armas apontam? Que diferença existe entre indivíduo e grupo?</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_in_Google_Earth.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></p>
          </div>
        </div>

        ${choice('3','Beleza e experiência','Se uma obra provoca desconforto ou mostra um tema terrível, isso a impede de ser arte?',[
          ['a','Sim, arte precisa ser agradável'],
          ['b','Não; arte também pode inquietar, denunciar, lembrar, questionar e produzir experiências difíceis'],
          ['c','Sim, porque temas políticos nunca pertencem à arte']
        ],'b','Isso. “Bonito” e “artístico” não são sinônimos. Uma obra pode buscar choque, memória, denúncia, tensão, humor, estranhamento ou contemplação.','Pergunte o que a obra procura fazer e como suas escolhas produzem esse efeito — não apenas se ela é agradável.')}

        <h3>4. Quarto caso: e quando não há imagem nenhuma?</h3>
        <p>A equipe recebe uma proposta sonora de poucos segundos para tocar numa sala escura. Não há personagem, desenho ou objeto para observar. Há apenas uma sequência de sons.</p>

        <div class="waveform" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>

        <div class="studio-box">
          <strong class="card-title">Escuta comparativa — som original gerado no navegador</strong>
          <p>As duas versões usam alturas semelhantes. Compare o que acontece quando mudamos duração, pausa, intensidade e timbre.</p>
          <div class="choice-row">
            <button class="action-button" type="button" data-sound-pattern="a">Ouvir versão A</button>
            <button class="action-button primary" type="button" data-sound-pattern="b">Ouvir versão B</button>
          </div>
          <p id="soundFeedback" aria-live="polite">Comece pela versão A e depois ouça a B.</p>
        </div>

        ${choice('4','Música e escolha','O que o experimento sonoro demonstra melhor?',[
          ['a','Som é artístico apenas quando possui letra'],
          ['b','Ritmo, duração, silêncio, timbre, intensidade e organização também são materiais de criação'],
          ['c','Toda sequência aleatória de notas é automaticamente uma obra-prima']
        ],'b','Correto. Na música, o artista organiza som e silêncio no tempo; letra é apenas uma das possibilidades.','A linguagem musical possui materiais próprios. Não dependa da existência de palavras ou imagem para reconhecer escolhas artísticas.')}

        <div class="source-box">
          <strong class="card-title">A mostra já começou a desmontar quatro mitos</strong>
          <div class="two-col">
            <div class="mini-card"><strong>“Arte não pode ser útil.”</strong><p>Pode haver uso, técnica e criação na mesma produção.</p></div>
            <div class="mini-card"><strong>“Arte precisa copiar o real.”</strong><p>Abstração, música, dança e outras linguagens mostram que não.</p></div>
            <div class="mini-card"><strong>“Arte precisa ser bonita.”</strong><p>Pode provocar também desconforto, crítica, memória ou estranhamento.</p></div>
            <div class="mini-card"><strong>“Arte é só imagem.”</strong><p>Som, corpo, cena, espaço, palavra, tecnologia e ação também podem constituir práticas artísticas.</p></div>
          </div>
        </div>

        <h3>5. Então basta a intenção do artista?</h3>
        <p>Também não é tão simples. Dizer “eu quis fazer arte” não encerra a análise. A intenção é uma pista, mas a obra circula entre outras pessoas, linguagens, tradições, instituições e contextos.</p>

        ${choice('5','Intenção e recepção','Uma pessoa afirma que qualquer coisa é arte apenas porque ela decidiu chamar assim. Qual resposta é mais cuidadosa?',[
          ['a','A intenção importa, mas precisamos também observar escolhas, contexto, linguagem, processo, função e modos de recepção'],
          ['b','Intenção nunca importa'],
          ['c','Só o preço de mercado decide']
        ],'a','Exatamente. A intenção participa da análise, mas não precisa agir sozinha. Arte é uma prática cultural e relacional.','Evite substituir um critério absoluto por outro. Nem “o artista decidiu” nem “o museu decidiu” explicam todos os casos.')}

        <h3>6. Uma lente melhor que “é ou não é?”</h3>
        <p>Em vez de procurar uma fórmula mágica, a equipe de curadoria passa a investigar cada caso por várias dimensões. Experimente trocar a obra e a lente abaixo.</p>

        <div class="studio-box">
          <strong class="card-title">Lente do curador</strong>
          <div class="two-col">
            <label><strong>Obra</strong><br><select id="lensWork"><option value="amphora">Ânfora de Exéquias</option><option value="kandinsky">Composition VII</option><option value="goya">O 3 de Maio de 1808</option></select></label>
            <label><strong>Lente</strong><br><select id="lensDimension"><option value="intention">Intenção</option><option value="language">Linguagem</option><option value="material">Materialidade</option><option value="context">Contexto</option><option value="function">Função</option><option value="circulation">Circulação e recepção</option></select></label>
          </div>
          <div id="lensOutput" class="source-box" aria-live="polite"></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Não estamos fugindo da pergunta</strong>
          <p>Estamos tornando a pergunta melhor. Ao longo da história, sociedades e grupos construíram critérios diferentes para reconhecer, produzir e valorizar arte. Por isso, <strong>não existe uma única propriedade física simples — como “ser bonito” ou “estar num museu” — capaz de resolver todos os casos</strong>.</p>
        </div>

        <h3>7. Arte, artesanato, design, entretenimento: fronteiras que conversam</h3>
        <p>Essas palavras ajudam a destacar finalidades e tradições diferentes, mas não precisam formar uma escada de “superior” e “inferior”. Uma peça pode envolver projeto, técnica artesanal, uso e elaboração artística ao mesmo tempo.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Artesanato</strong><p>Pode valorizar saberes, materiais, técnicas e tradições transmitidas e transformadas por comunidades e criadores.</p></div>
          <div class="mini-card"><strong>Design</strong><p>Relaciona projeto, comunicação, função, experiência de uso e escolhas visuais ou materiais.</p></div>
          <div class="mini-card"><strong>Arte</strong><p>Pode explorar experiência, expressão, forma, crítica, memória, identidade, imaginação e muitas outras funções.</p></div>
        </div>

        ${choice('6','Fronteiras','Qual atitude é mais adequada ao comparar arte, artesanato e design?',[
          ['a','Criar uma hierarquia automática em que um sempre vale mais que os outros'],
          ['b','Investigar objetivos, processos, contextos e tradições, reconhecendo possíveis sobreposições'],
          ['c','Considerar que técnica manual impede qualquer dimensão artística']
        ],'b','Correto. As categorias ajudam a analisar, mas produções reais podem atravessar mais de uma delas.','Não transforme categorias históricas e culturais em uma escala fixa de valor.')}

        <h3>8. Gosto pessoal e análise não são inimigos</h3>
        <p>Você pode não gostar de Kandinsky, preferir Goya ou se interessar mais pela ânfora. O problema aparece quando a frase “não gostei” tenta substituir toda investigação.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Preferência</strong><p>“Eu gostei mais da ânfora.” É uma resposta pessoal legítima.</p></div>
          <div class="mini-card"><strong>Análise</strong><p>“A composição concentra as figuras no centro e usa linhas inclinadas para direcionar o olhar.” É uma afirmação que aponta evidências observáveis.</p></div>
        </div>

        ${choice('7','Fruição e crítica','Qual frase oferece uma análise mais desenvolvida?',[
          ['a','“É feio, então não presta.”'],
          ['b','“Não é meu estilo, mas o contraste de luz e a posição dos corpos aumentam a tensão da cena.”'],
          ['c','“Gostei porque sim e não há mais nada a observar.”']
        ],'b','Isso. Preferência e análise podem coexistir: você não precisa gostar de uma obra para perceber e justificar como ela funciona.','Procure uma frase que se apoie em escolhas visíveis ou audíveis, e não apenas no gosto pessoal.')}

        <h3>9. Sua primeira etiqueta de curador</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio — 6 linhas para fazer alguém olhar melhor</strong>
          <p>Escolha uma das três obras deste capítulo e escreva uma etiqueta curta para a mostra da escola. Ela deve:</p>
          <ol>
            <li>identificar a obra;</li>
            <li>apontar <strong>duas escolhas observáveis</strong>;</li>
            <li>relacionar pelo menos uma escolha ao efeito produzido;</li>
            <li>acrescentar uma informação de contexto;</li>
            <li>terminar com uma pergunta que convide o visitante a olhar novamente.</li>
          </ol>
          <details><summary>Exemplo de estrutura — não copie</summary><p><strong>Obra:</strong> ...<br><strong>Observe:</strong> ... e ...<br><strong>Isso pode produzir:</strong> ...<br><strong>No contexto:</strong> ...<br><strong>Pergunta ao visitante:</strong> ...?</p></details>
        </div>

        <h3>10. Transferência: transforme o cotidiano em proposta</h3>
        <div class="studio-box">
          <strong class="card-title">Miniestúdio — mude o modo de perceber algo comum</strong>
          <p>Escolha <strong>um objeto, som ou movimento cotidiano</strong>: uma cadeira, o sinal da escola, passos no corredor, chaves, uma embalagem, o ruído de um ventilador. Agora imagine uma pequena intervenção que faça as pessoas percebê-lo de outra maneira.</p>
          <p><strong>Defina:</strong> intenção → material/ação → organização → espaço de apresentação → experiência desejada.</p>
          <p>Você não precisa afirmar que sua proposta “é arte” por decreto. Sua tarefa é muito mais interessante: <strong>construir uma proposta e justificar suas escolhas</strong>.</p>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box">
            <strong class="card-title">Fechamento MbB</strong>
            <p><strong>Entender:</strong> arte não cabe numa única regra como beleza, utilidade ou imitação.</p>
            <p><strong>Experimentar:</strong> você observou objeto, pintura figurativa, abstração e composição sonora.</p>
            <p><strong>Analisar:</strong> usou intenção, linguagem, materialidade, contexto, função e circulação como lentes.</p>
            <p><strong>Aplicar:</strong> produziu uma etiqueta de curadoria e transformou uma experiência cotidiana em proposta criativa.</p>
          </div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('01 O que', showChapter);
})();
