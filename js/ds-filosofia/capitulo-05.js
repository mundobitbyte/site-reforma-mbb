(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Arte e experiência',
      technical:'estética • arte • beleza • gosto • experiência estética • representação • expressão • forma • contexto • definição de arte • interpretação • fotografia • autoria',
      title:'Por que algumas coisas são chamadas de arte — e outras não?',
      objective:'<strong>Objetivo:</strong> compreender a estética como reflexão filosófica sobre experiências e juízos ligados à arte e também à natureza; distinguir gosto pessoal de argumentação estética; comparar diferentes maneiras de explicar o que torna algo uma obra de arte; analisar representação, expressão, forma, contexto e intenção sem reduzir arte a beleza, habilidade manual ou preferência individual.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">“Isso é arte? Eu tenho um igual no banheiro.”</strong>
            <p>Em 1917, Marcel Duchamp apresentou um urinol industrial comprado pronto, girado de posição, assinado “R. Mutt” e chamado <em>Fountain</em>. O objeto foi recusado na exposição da Society of Independent Artists e acabou perdido. O que ficou famoso foi, entre outras evidências, uma fotografia feita por Alfred Stieglitz.</p>
            <p>Um estudante pode olhar para a imagem e perguntar: <strong>se o objeto não foi fabricado pelo artista e nem foi escolhido por ser “bonito”, por que ele entrou para a história da arte?</strong></p>
            <p class="central-question"><strong>Pergunta central:</strong> existe uma característica única que transforma algo em arte ou precisamos observar também intenção, contexto, história, forma e experiência?</p>
          </div>
        </section>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Marcel_Duchamp,_1917,_Fountain,_photograph_by_Alfred_Stieglitz.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Marcel_Duchamp,_1917,_Fountain,_photograph_by_Alfred_Stieglitz.jpg?width=1000" alt="Fotografia em preto e branco de 1917 do urinol apresentado por Marcel Duchamp como Fountain, assinado R. Mutt." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong><em>Fountain</em>: o objeto original se perdeu, mas a pergunta permaneceu</strong>
            <span>A fotografia de Alfred Stieglitz é uma fonte histórica central para conhecermos o trabalho de 1917. Duchamp deslocou um objeto industrial de sua função habitual e o colocou num contexto artístico, desafiando a ideia de que arte precisa ser feita manualmente pelo artista ou ser bela.</span>
            <small>Marcel Duchamp, <em>Fountain</em>, 1917. Fotografia: Alfred Stieglitz. Wikimedia Commons — domínio público nos Estados Unidos. O original foi perdido ou destruído; versões posteriores são réplicas autorizadas.</small>
          </figcaption>
        </figure>

        ${choice('1','Uma primeira resposta','Qual conclusão é mais cuidadosa diante de <em>Fountain</em>?',[['a','Se não é bonito, então não pode ser arte'],['b','O caso mostra que beleza e habilidade manual talvez não sejam condições necessárias para algo ser considerado arte'],['c','Qualquer objeto vira automaticamente arte assim que alguém disser que é']],'b','Correto. O caso pressiona definições baseadas apenas em beleza ou fabricação manual, mas não prova que qualquer objeto em qualquer contexto seja arte.','Duchamp torna a definição mais difícil; ele não elimina a necessidade de critérios.')}

        <h3>1. Estética não é apenas “estudar o belo”</h3>
        <p>No uso cotidiano, “estética” costuma significar aparência: estética de um site, de uma roupa ou de um ambiente. Na Filosofia, o campo é mais amplo. Ele investiga <strong>experiência estética, beleza, feiura, gosto, interpretação, valor artístico e a própria definição de arte</strong>.</p>
        <p>Além disso, uma experiência estética não precisa ocorrer diante de uma obra de arte. Podemos fazer juízos estéticos sobre <strong>paisagens naturais, sons, arquitetura, objetos de design e outras experiências sensíveis</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Juízo descritivo</strong><p>“A pintura mede aproximadamente 74 × 92 cm e usa óleo sobre tela.” Pode ser verificado documentalmente.</p></div>
          <div class="mini-card"><strong>Juízo interpretativo</strong><p>“Os movimentos do céu tornam a cena mais intensa.” Precisa ser justificado pela obra.</p></div>
          <div class="mini-card"><strong>Juízo avaliativo</strong><p>“Esta obra é excelente.” Exige critérios e razões; não é equivalente a informar uma medida.</p></div>
        </div>

        <div class="concept-box"><strong>Gosto pessoal existe, mas discutir arte pode ir além de “gostei / não gostei”.</strong><p>Duas pessoas podem reagir de modos diferentes e ainda assim oferecer razões melhores ou piores para suas interpretações. Conhecer técnica, contexto, gênero e história pode mudar a experiência sem obrigar todos a gostar da mesma coisa.</p></div>

        ${choice('2','Gosto e argumento','Dois estudantes discordam sobre uma pintura. Um diz apenas “é ruim porque não gostei”; o outro identifica composição, contraste, técnica e contexto para justificar sua avaliação. O que podemos dizer?',[['a','Como gosto é subjetivo, nenhum argumento pode ser melhor que outro'],['b','O segundo apresentou uma avaliação mais articulada, mesmo que outra pessoa ainda possa discordar'],['c','O segundo provou matematicamente que todos devem gostar da obra']],'b','Isso. Juízos estéticos podem ser discutidos com razões, embora não funcionem exatamente como medidas físicas.','Argumentar esteticamente não significa transformar gosto em cálculo objetivo.')}

        <h3>2. O que pode tornar algo arte?</h3>
        <p>A Filosofia da Arte não encontrou uma definição única aceita por todos. Diferentes teorias destacam aspectos diferentes, e obras difíceis funcionam como testes para essas definições.</p>

        <div class="four-col">
          <div class="mini-card"><strong>Representação / imitação</strong><p>Uma tradição antiga relaciona arte à representação de pessoas, ações, objetos ou aspectos do mundo. É importante, mas não explica bem toda arte abstrata ou conceitual.</p></div>
          <div class="mini-card"><strong>Expressão</strong><p>Algumas teorias destacam a expressão ou comunicação de emoções, atitudes e modos de perceber. Também não explica sozinha toda produção artística.</p></div>
          <div class="mini-card"><strong>Forma</strong><p>Outras abordagens enfatizam relações de cor, linha, ritmo, composição, textura, som e estrutura perceptível.</p></div>
          <div class="mini-card"><strong>Contexto e história</strong><p>Teorias institucionais e históricas observam relações com práticas, artistas, públicos, tradições, instituições e história da arte.</p></div>
        </div>

        <div class="note-box"><strong>Uma teoria pode explicar bem muitos casos e ainda enfrentar contraexemplos.</strong><p>Esse é um exercício tipicamente filosófico: propor critérios, testá-los em casos difíceis e revisar a definição quando ela inclui coisas demais ou exclui coisas que parecem claramente artísticas.</p></div>

        <p><a href="https://plato.stanford.edu/entries/art-definition/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — The Definition of Art</a></p>

        ${choice('3','Teste a definição','Se definirmos arte como “qualquer coisa bela”, qual problema aparece imediatamente?',[['a','Nada; todas as obras de arte são belas e somente obras de arte podem ser belas'],['b','Há coisas belas que não são obras de arte e há obras intencionalmente desconfortáveis, feias ou conceituais'],['c','A definição falha apenas porque ninguém consegue perceber beleza']],'b','Correto. Uma boa definição precisa evitar ser estreita demais e ampla demais.','Beleza é central para parte da estética, mas não basta para definir toda arte.')}

        <h3>3. A mesma noite pode ser observada e transformada</h3>
        <p>Em junho de 1889, Vincent van Gogh pintou <em>The Starry Night</em> em Saint-Rémy. A obra se relaciona com o ambiente que ele observava, mas não funciona como uma fotografia literal: o artista reorganizou elementos, alterou formas, intensificou cores e construiu uma linguagem visual própria.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=1400" alt="Reprodução da pintura A Noite Estrelada, de Vincent van Gogh, com céu azul turbulento, estrelas luminosas, cipreste e vila." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong><em>The Starry Night</em>: representar não significa copiar</strong>
            <span>O MoMA descreve a obra como simultaneamente ligada à observação e afastada dela. O vilarejo foi baseado em outras vistas, o cipreste foi aproximado e o céu recebeu formas e luminosidade alteradas. A imagem permite discutir como percepção, memória, composição e expressão podem trabalhar juntas.</span>
            <small>Vincent van Gogh, <em>The Starry Night</em>, Saint-Rémy, junho de 1889, óleo sobre tela. Obra em domínio público; reprodução via Google Art Project/Wikimedia Commons. Coleção do Museum of Modern Art, Nova York.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">Evite transformar biografia em explicação automática</strong>
          <p>Saber aspectos da vida do artista pode ajudar a interpretar uma obra, mas não devemos reduzir cada cor, linha ou forma a um diagnóstico psicológico. A interpretação precisa voltar à <strong>obra, às fontes e ao contexto</strong>.</p>
          <p><a href="https://www.moma.org/collection/works/79802" target="_blank" rel="noopener noreferrer">Fonte: MoMA — Vincent van Gogh, <em>The Starry Night</em></a></p>
        </div>

        ${choice('4','Interpretação com evidência','Qual interpretação é metodologicamente mais forte?',[['a','“O céu gira porque Van Gogh era louco”; a biografia basta'],['b','“A composição usa linhas curvas, contrastes e alterações da paisagem observada; essas escolhas podem ser analisadas na própria obra e comparadas com fontes sobre sua produção”'],['c','“A pintura significa exatamente o que cada pessoa quiser, sem relação com a imagem”']],'b','Correto. Uma interpretação ganha força quando combina observação da obra, contexto e fontes sem transformar hipótese em certeza.','Biografia pode contribuir, mas não substitui evidência visual e histórica.')}

        <h3>4. Beleza não é o único tipo de experiência estética</h3>
        <p>Obras e experiências podem ser <strong>belas, inquietantes, grotescas, sublimes, engraçadas, melancólicas, delicadas, violentas ou conceitualmente provocadoras</strong>. Algumas nos atraem; outras produzem desconforto intencional.</p>
        <p>Por isso, perguntar “é bonito?” é apenas uma entre várias perguntas possíveis. Também podemos perguntar: <strong>como a obra organiza a experiência? que resposta provoca? que ideia põe em jogo? que relação cria entre forma e conteúdo?</strong></p>

        <div class="source-box">
          <strong class="card-title">Kant e o problema do gosto</strong>
          <p>Kant tratou o juízo de gosto como baseado numa experiência subjetiva de prazer ou desprazer, mas observou que, ao chamar algo de belo, normalmente não falamos como quem apenas relata uma preferência privada do tipo “gosto de café”. Esperamos que nossa avaliação possa ser compartilhada e discutida.</p>
          <p><a href="https://plato.stanford.edu/entries/aesthetic-judgment/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Aesthetic Judgment</a></p>
        </div>

        <h3>5. Uma fotografia pode informar e ser arte ao mesmo tempo</h3>
        <p>Em 1936, a fotógrafa Dorothea Lange registrou Florence Owens Thompson e seus filhos na Califórnia. A imagem conhecida como <em>Migrant Mother</em> foi produzida no contexto documental da Farm Security Administration e tornou-se também uma das fotografias mais discutidas da história da fotografia.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Lange-MigrantMother.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Lange-MigrantMother.jpg?width=1000" alt="Fotografia em preto e branco de Florence Owens Thompson, com expressão séria, e duas crianças apoiadas em seus ombros." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong><em>Migrant Mother</em>: documento, composição e experiência</strong>
            <span>A fotografia informa sobre uma pessoa e um contexto histórico, mas sua força também depende de enquadramento, expressão, posição dos corpos, direção dos olhares e seleção do instante. Função documental e dimensão estética podem coexistir.</span>
            <small>Dorothea Lange, <em>Migrant Mother</em>, Nipomo, Califórnia, 1936. Farm Security Administration. Imagem preservada pela Library of Congress e disponível em domínio público nos Estados Unidos.</small>
          </figcaption>
        </figure>

        <div class="note-box"><strong>Uma imagem real não é “a realidade inteira”.</strong><p>Toda fotografia envolve posição da câmera, enquadramento, momento escolhido e contexto de circulação. Isso não torna a fotografia falsa; significa que devemos interpretar também <strong>como</strong> a evidência visual foi produzida.</p></div>
        <p><a href="https://www.loc.gov/item/93506674/" target="_blank" rel="noopener noreferrer">Fonte: Library of Congress — <em>Migrant Mother and children — California</em></a></p>

        ${choice('5','Documento e obra','Uma fotografia documental pode ter valor estético?',[['a','Não; se informa sobre um fato, deixa de poder ser arte'],['b','Sim; função documental e qualidades de composição, expressão e interpretação podem coexistir'],['c','Só se a fotografia deixar de mostrar qualquer pessoa ou acontecimento real']],'b','Isso. Funções diferentes podem coexistir no mesmo objeto ou imagem.','A oposição “ou documento ou arte” é rígida demais para muitos casos reais.')}

        <h3>6. O contexto muda a experiência?</h3>
        <p>Ver uma obra no celular, num livro, numa reprodução impressa ou diante do original pode produzir experiências diferentes. Escala, textura, material, luminosidade, ambiente e presença física podem mudar o que percebemos.</p>
        <p>Isso não torna a reprodução inútil. Reproduções democratizam acesso, permitem comparação e estudo detalhado. Mas é importante distinguir <strong>a obra, sua reprodução e o contexto em que a encontramos</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Objeto / obra</strong><p>Material, dimensões, técnica, suporte, estado de conservação.</p></div>
          <div class="mini-card"><strong>Reprodução</strong><p>Fotografia, impressão, tela, digitalização, recorte ou edição.</p></div>
          <div class="mini-card"><strong>Contexto</strong><p>Museu, rua, sala, feed, livro, exposição, ritual, performance ou arquivo.</p></div>
        </div>

        <h3>7. E quando a criação envolve IA?</h3>
        <p>Ferramentas generativas tornam ainda mais visível um problema antigo: <strong>autoria e arte não são conceitos idênticos a “quem executou manualmente cada detalhe”</strong>. Fotógrafos usam câmeras; cineastas trabalham com equipes; artistas conceituais podem especificar uma obra que outros executam.</p>
        <p>Mas isso não resolve automaticamente o caso da IA. Perguntas relevantes incluem: quem formulou a intenção? que escolhas foram feitas? como o resultado foi selecionado ou transformado? qual é o papel do sistema? que fontes e direitos estão envolvidos? que tradição ou contexto artístico dá sentido à proposta?</p>
        <div class="concept-box"><strong>Não há atalho filosófico.</strong><p>“Foi feito por IA, então não é arte” e “foi feito por IA, então qualquer saída é arte” são respostas rápidas demais. O capítulo fornece critérios para reconstruir o caso e argumentar.</p></div>

        ${choice('6','Arte e IA','Qual pergunta é mais filosófica diante de uma imagem gerada por IA?',[['a','“Usou IA? Então a resposta já está decidida.”'],['b','“Que intenção, escolhas, autoria, contexto, processo e critérios de apresentação estão envolvidos — e como isso se compara a outras práticas artísticas?”'],['c','“Quantos segundos o computador levou para gerar?”']],'b','Correto. O uso da ferramenta é um fato do processo; a avaliação artística exige reconstruir o conjunto de relações relevantes.','Evite decidir a questão apenas pelo nome da ferramenta.')}

        <h3>8. Caderno de investigação — quinta etapa</h3>
        <div class="field-box">
          <strong class="card-title">Escolha uma experiência estética real desta semana</strong>
          <p>Pode ser uma música, fotografia, filme, edifício, paisagem, objeto de design ou obra artística que você realmente encontrou.</p>
          <p><strong>Registre:</strong></p>
          <ol>
            <li>o que você observou ou ouviu antes de pesquisar qualquer explicação;</li>
            <li>duas características concretas da forma ou composição;</li>
            <li>uma reação pessoal que a experiência provocou;</li>
            <li>uma interpretação que você consegue justificar com evidências;</li>
            <li>uma informação de contexto que mudou — ou não mudou — sua percepção;</li>
            <li>uma pergunta que permaneceu aberta.</li>
          </ol>
        </div>

        <div class="chapter-checkpoint">
          <h3>Desafio final — Comissão de uma mostra escolar</h3>
          <div class="challenge-box">
            <p>A escola recebeu quatro propostas: <strong>uma pintura feita à mão, uma fotografia documental, um objeto cotidiano deslocado de sua função e uma imagem produzida com IA e editada por um estudante</strong>.</p>
            <p>Você não pode aceitar nem rejeitar uma proposta apenas pelo tipo de técnica. Para cada item, indique:</p>
            <ol>
              <li>que critérios usaria para avaliar se faz sentido apresentá-lo como arte;</li>
              <li>que informações sobre intenção, processo e contexto pediria;</li>
              <li>que diferença existe entre dizer “não gosto” e dizer “não há justificativa artística suficiente”;</li>
              <li>qual teoria ou abordagem do capítulo ajuda mais a analisar o caso — e qual limitação ela possui.</li>
            </ol>
            <details>
              <summary>Ver um caminho possível</summary>
              <p>Uma boa resposta evita critérios automáticos. A pintura pode ser analisada por forma, expressão e representação; a fotografia pode unir documento e composição; o objeto cotidiano exige investigar intenção e contexto histórico/institucional; a imagem com IA exige reconstruir autoria, escolhas e processo. Em todos os casos, a justificativa precisa explicar <strong>por que</strong> os critérios escolhidos são relevantes.</p>
            </details>
          </div>
        </div>

        <details class="curriculum-box">
          <summary>Essência do capítulo</summary>
          <p><strong>Estética</strong> investiga experiências e juízos ligados ao belo, ao feio, ao gosto, à arte e à percepção. <strong>Arte</strong> não possui uma definição simples aceita por todos: representação, expressão, forma, intenção, história e contexto explicam aspectos diferentes. <strong>Interpretar</strong> não é inventar qualquer sentido; é construir uma leitura que dialogue com a obra, suas características e fontes relevantes. <strong>Gosto pessoal</strong> importa, mas argumentação estética pode ir além dele.</p>
        </details>
      `,
      init(root) {
        MBB.initChoiceQuestions(root);
      }
    });
  }

  MBB.enableChapter?.('05 Estética', showChapter);
})();