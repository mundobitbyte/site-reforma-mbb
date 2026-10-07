(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Literatura e cultura',
      technical:'literatura • contexto de produção e circulação • repertório • cânone • conotação • permanência • ruptura • tradução • curadoria literária',
      title:'07 — Literatura e repertórios',
      objective:'<strong>Objetivo:</strong> ler textos literários relacionando linguagem, contexto e circulação; reconhecer permanências, rupturas e diálogos entre repertórios; e ampliar a leitura para produções brasileiras, portuguesas, indígenas, africanas e latino-americanas sem reduzi-las a uma única tradição.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">Por que ler um texto escrito há séculos se ele não fala como nós?</strong>
          <p>Uma turma abre uma edição antiga de <em>Os Lusíadas</em>. O vocabulário, a ortografia e o mundo representado parecem distantes. Em seguida, encontra uma narrativa indígena contemporânea, um romance africano e um conto brasileiro. Os textos são diferentes, mas todos podem discutir temas como <strong>viagem, memória, pertencimento, conflito, poder, amor ou perda</strong>.</p>
          <p>Literatura não é um museu de “textos difíceis”. É uma forma de linguagem que cria experiências, reorganiza palavras, preserva memórias e disputa maneiras de representar o mundo.</p>
          <p class="central-question"><strong>Pergunta central:</strong> como ler obras de épocas e culturas diferentes sem tratá-las como iguais — nem como mundos incomunicáveis?</p>
        </div>

        ${choice('1','Primeira leitura','Ao encontrar um texto literário antigo com linguagem diferente da atual, qual atitude é mais produtiva?',[['a','Concluir que o texto não tem mais valor'],['b','Observar linguagem, contexto, gênero e questões humanas que o texto constrói'],['c','Modernizar todas as palavras antes de tentar lê-lo']], 'b','A leitura literária articula forma, contexto e sentidos. A distância histórica pode ser parte da experiência de leitura.','Não precisamos fingir que um texto antigo é contemporâneo; precisamos construir pontes para compreendê-lo.')}

        <h3>1. Literatura é linguagem em trabalho</h3>
        <p>Textos literários podem narrar, descrever, argumentar, criar vozes, ritmos e imagens. O que os caracteriza não é uma “fórmula única”, mas o uso elaborado da linguagem e a forma como circulam e são reconhecidos em práticas literárias.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Uso mais denotativo</strong><p>“A chuva começou às 17h.”</p><p><small>O foco principal está numa informação direta.</small></p></div>
          <div class="mini-card"><strong>Uso conotativo</strong><p>“A tarde desabou em água.”</p><p><small>“Desabou” amplia o efeito de sentido e constrói uma imagem.</small></p></div>
        </div>

        <p>Denotação e conotação não formam dois mundos totalmente separados. Um mesmo texto pode combinar usos mais diretos e mais figurados, e o sentido depende do contexto.</p>

        ${choice('2','Linguagem literária','Na frase “A cidade acordou cansada”, o verbo “acordou” aplicado à cidade produz principalmente:',[['a','Uma informação meteorológica'],['b','Um efeito figurado que atribui característica humana à cidade'],['c','Um erro que impede qualquer interpretação']], 'b','O emprego figurado cria uma imagem e orienta a leitura para além do sentido literal.','Literatura explora possibilidades de sentido sem abandonar a necessidade de interpretar pelas pistas do texto.')}

        <h3>2. Obra, época e circulação</h3>
        <p>Uma obra nasce em condições históricas específicas: língua, suportes, formas de publicação, leitores possíveis, debates e valores de seu tempo. Conhecer esse contexto <strong>não substitui a leitura</strong>, mas ajuda a compreender escolhas e referências.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/BookFrontOsLusiadas1572.jpg?width=900" alt="Página de rosto da edição de 1572 de Os Lusíadas, de Luís de Camões">
          <figcaption>
            <strong>Um livro também é um objeto histórico.</strong>
            <span>A página de rosto de <em>Os Lusíadas</em>, publicada em Lisboa em 1572, registra título, autoria, impressão e marcas do sistema editorial da época. Ler a obra hoje envolve também perceber a distância entre aquele contexto e o nosso.</span>
            <small>Imagem: página de rosto de <em>Os Lusíadas</em>, 1572. Wikimedia Commons, reprodução de obra em domínio público. <a href="https://commons.wikimedia.org/wiki/File:BookFrontOsLusiadas1572.jpg" target="_blank" rel="noopener">Fonte e licença</a>.</small>
          </figcaption>
        </figure>

        <div class="concept-box">
          <strong class="card-title">Cânone não é sinônimo de “único repertório que importa”</strong>
          <p>Algumas obras permanecem muito presentes na escola, na crítica e na história literária. Estudá-las ajuda a compreender referências e diálogos posteriores. Mas ampliar repertório significa também ler autores, gêneros e tradições que ficaram menos visíveis em determinados processos de seleção cultural.</p>
        </div>

        ${choice('3','Permanência e ruptura','Quando uma obra brasileira dialoga com uma tradição portuguesa, isso significa necessariamente que ela apenas copia o modelo anterior?',[['a','Sim; diálogo literário é sempre cópia'],['b','Não; pode assimilar formas, transformá-las, contestá-las ou romper com elas'],['c','Não existe relação possível entre literaturas de épocas diferentes']], 'b','A história literária envolve continuidades, apropriações, transformações e rupturas.','Comparar tradições é observar o que permanece e o que muda — não procurar uma linha simples de imitação.')}

        <h3>3. Um repertório maior muda as perguntas</h3>
        <p>O próprio plano da 1ª série pede repertórios de leitura e apreciação de <strong>literatura brasileira, portuguesa, indígena, africana e latino-americana</strong>. Isso não significa transformar cada grupo em uma “caixinha”. Significa reconhecer que existem muitas tradições, línguas, experiências históricas e formas de circulação.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Portuguesa</strong><p>Camões, Gil Vicente e Fernando Pessoa são exemplos de autores muito presentes na tradição escolar, em épocas e gêneros diferentes.</p></div>
          <div class="mini-card"><strong>Brasileira</strong><p>Machado de Assis, Carolina Maria de Jesus, Conceição Evaristo e Guimarães Rosa mostram que “literatura brasileira” também não é uma voz única.</p></div>
          <div class="mini-card"><strong>Indígena</strong><p>Eliane Potiguara, Daniel Munduruku e Graça Graúna são exemplos de autoria indígena contemporânea. Literatura indígena não deve ser confundida com textos sobre indígenas escritos por não indígenas.</p></div>
          <div class="mini-card"><strong>Africana</strong><p>Autores como Mia Couto, Paulina Chiziane e Pepetela permitem contato com experiências de diferentes países africanos; “literatura africana” não é uma tradição única.</p></div>
          <div class="mini-card"><strong>Latino-americana</strong><p>Gabriel García Márquez, Jorge Luis Borges, Isabel Allende e muitas outras vozes ajudam a perceber aproximações e diferenças históricas e culturais no continente.</p></div>
          <div class="mini-card"><strong>Repertório é escolha</strong><p>Quem monta uma lista decide o que entra e o que fica de fora. Por isso, curadoria literária também pode ser analisada criticamente.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Evite duas simplificações</strong>
          <p><strong>“Todo autor representa seu povo.”</strong> Não: uma obra é uma produção situada, não a voz total de uma cultura.</p>
          <p><strong>“Todos os textos podem ser lidos do mesmo jeito.”</strong> Também não: gênero, língua, tradição, suporte, tradução e contexto interferem na leitura.</p>
        </div>

        ${choice('4','Diversidade de repertório','Qual proposta amplia repertório sem criar uma hierarquia simplista?',[['a','Ler apenas obras europeias porque são mais antigas'],['b','Substituir todo o cânone por uma única tradição contemporânea'],['c','Ler obras de tradições diversas, contextualizando cada uma e comparando formas, temas e circulação']], 'c','Ampliar repertório não exige apagar obras anteriores; exige diversificar a leitura e contextualizar as escolhas.','O objetivo é construir mais referências e melhores comparações.')}

        <h3>4. Oralidade, escrita, tradução e preservação</h3>
        <p>Nem toda tradição literária nasce como livro impresso. Narrativas podem circular oralmente, ser registradas posteriormente, passar por transcrição, tradução e edição. Cada etapa pode preservar elementos e também transformar a forma como novos leitores acessam o texto.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Empiezan_las_historias(titlepage).jpg?width=900" alt="Página inicial do manuscrito do Popol Vuh associado à transcrição e tradução de Francisco Ximénez">
          <figcaption>
            <strong>O caminho até o leitor também faz parte da história do texto.</strong>
            <span>O manuscrito do <em>Popol Vuh</em>, ligado à tradição K’iche’ Maya, foi transcrito no início do século XVIII por Francisco Ximénez em K’iche’ e espanhol. A cópia preservada hoje é um ponto de acesso a uma tradição anterior a esse manuscrito.</span>
            <small>Imagem: página do manuscrito associado ao <em>Popol Vuh</em>. Wikimedia Commons, domínio público. Contexto do manuscrito: Newberry Library, Ayer MS 1515. <a href="https://commons.wikimedia.org/wiki/File:Empiezan_las_historias(titlepage).jpg" target="_blank" rel="noopener">Imagem</a> • <a href="https://www.newberry.org/collection/research-guide/popol-vuh" target="_blank" rel="noopener">Newberry Library</a>.</small>
          </figcaption>
        </figure>

        ${choice('5','Transmissão e tradução','Ao ler uma obra traduzida ou preservada por uma transcrição posterior, qual atitude é mais adequada?',[['a','Ignorar totalmente a tradução e a história do documento'],['b','Reconhecer que mediações de língua, edição e registro podem influenciar o acesso ao texto'],['c','Concluir que toda tradução é necessariamente falsa']], 'b','Tradução e edição são mediações importantes; analisá-las amplia a compreensão sem tornar a leitura impossível.','Perguntar quem registrou, traduziu, editou e publicou ajuda a reconstruir a circulação da obra.')}

        <h3>5. Ler literatura é formular hipóteses e voltar ao texto</h3>
        <p>Uma interpretação literária não precisa ter uma única resposta possível, mas precisa ser <strong>sustentada</strong>. O leitor observa palavras, imagens, estrutura, voz narrativa, ritmo, relações entre personagens e contexto para justificar sua leitura.</p>

        <div class="source-box">
          <strong class="card-title">Roteiro MbB de leitura literária</strong>
          <p><strong>1. Primeiro contato:</strong> o que chamou atenção antes de pesquisar sobre a obra?</p>
          <p><strong>2. Forma:</strong> quem fala? Como o texto organiza tempo, imagens, ritmo, descrição ou diálogo?</p>
          <p><strong>3. Linguagem:</strong> quais palavras ou construções produzem efeitos de sentido?</p>
          <p><strong>4. Contexto:</strong> o que precisamos saber sobre autoria, época, língua, gênero e circulação?</p>
          <p><strong>5. Hipótese:</strong> que interpretação podemos defender?</p>
          <p><strong>6. Evidência:</strong> quais elementos do texto sustentam essa hipótese?</p>
          <p><strong>7. Comparação:</strong> outra obra trata questão semelhante de maneira diferente?</p>
        </div>

        ${choice('6','Interpretação','Dois leitores propõem interpretações diferentes para um conto. Como compará-las?',[['a','Escolher a opinião do leitor mais velho'],['b','Examinar quais interpretações explicam melhor elementos concretos do texto e seu contexto'],['c','Dizer que todas são igualmente fortes, mesmo sem evidências']], 'b','A literatura admite debate interpretativo, mas argumentos de leitura podem ser avaliados pelas evidências que mobilizam.','Interpretação não é adivinhação: é hipótese sustentada pelo texto e contextualizada.')}

        <h3>6. Aplicação: curadoria de uma pequena mostra literária</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <p>Sua turma vai montar uma mostra com o tema <strong>“Viagem, memória e pertencimento”</strong>. Escolha três obras ou textos disponíveis na biblioteca, em acervo digital legal ou indicados pelo professor:</p>
          <ol>
            <li>uma obra brasileira ou portuguesa;</li>
            <li>uma obra de autoria indígena ou africana;</li>
            <li>uma obra latino-americana de outra tradição ou país.</li>
          </ol>
          <p>Para cada escolha, registre autoria, contexto, gênero, uma questão central e um aspecto de linguagem. Depois escreva um parágrafo comparando <strong>uma aproximação e uma diferença</strong> entre as três obras.</p>
          <details><summary>O que caracteriza uma boa curadoria?</summary><p>As escolhas não são apenas uma lista de nomes. Elas têm justificativa, contexto, variedade real de repertórios e uma pergunta comum que permite comparação sem apagar as diferenças entre as obras.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Literatura envolve linguagem, contexto, circulação e repertório; uma tradição pode dialogar com outras por permanências, transformações e rupturas.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso sustentar uma interpretação com evidências e montar uma curadoria que inclua repertórios diferentes sem tratá-los como equivalentes ou isolados.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Mobiliza EM13LP48 e objetos de conhecimento ligados a condições de produção, circulação e recepção de textos artístico-literários; curadoria de repertório; leitura de obras fundamentais da Literatura Portuguesa; linguagem denotativa e conotativa; e repertórios de leitura e apreciação de literatura brasileira, portuguesa, indígena, africana e latino-americana.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('07 ', showChapter);
})();
