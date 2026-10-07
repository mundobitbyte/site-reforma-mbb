(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Perguntar e argumentar',
      technical:'origens da Filosofia • atitude filosófica • problema • conceito • argumento • objeção • Sócrates • campos da Filosofia • perspectivismo',
      title:'Filosofar é ter opinião ou aprender a examinar razões?',
      objective:'<strong>Objetivo:</strong> reconhecer a atitude filosófica como investigação de problemas por meio de conceitos, razões, objeções e revisão; contextualizar a tradição filosófica grega sem transformar sua origem em mito simplificador; distinguir opinião de argumento e identificar diferentes campos da Filosofia.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Uma nova regra aparece na escola</strong>
            <p>A escola decide limitar o uso de celular durante as aulas. Um estudante diz: “é justo porque a regra vale para todos”. Outro responde: “uma regra igual pode ser injusta se as situações forem diferentes”. Um terceiro encerra: “não adianta discutir; regra é regra”.</p>
            <p>As três frases expressam posições. Mas elas ainda deixam perguntas abertas: <strong>o que é justiça? igualdade basta? obedecer torna uma regra correta? que razões sustentam cada resposta?</strong></p>
            <p class="central-question"><strong>Pergunta central:</strong> quando deixamos de apenas reagir e começamos realmente a filosofar?</p>
          </div>
        </section>

        <div class="argument-chain">
          <span>situação concreta</span><b>→</b><span>pergunta</span><b>→</b><span>conceitos</span><b>→</b><span>razões</span><b>→</b><span>objeções</span><b>→</b><span>revisão</span>
        </div>

        ${choice('1','Opinião ou investigação?','Qual atitude transforma melhor a discussão sobre a regra do celular em um problema filosófico?',[['a','Escolher rapidamente o lado de que mais gostamos'],['b','Definir o que queremos dizer por justiça, comparar razões e examinar objeções'],['c','Concluir que toda discordância é inútil']],'b','Correto. Filosofar não exige eliminar a opinião inicial, mas colocá-la sob exame por meio de conceitos, razões e objeções.','A atitude filosófica começa quando a posição deixa de ser apenas reação e passa a ser examinada.')}

        <h3>1. Atitude filosófica: transformar o “óbvio” em problema</h3>
        <p>Filosofar não é duvidar de tudo por esporte. É perceber que certas ideias usadas diariamente — <strong>verdade, justiça, liberdade, conhecimento, beleza, responsabilidade</strong> — parecem simples até tentarmos explicá-las com precisão.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Perguntar</strong><p>Que problema existe aqui? A pergunta está bem formulada?</p></div>
          <div class="mini-card"><strong>Conceituar</strong><p>O que exatamente significam as palavras centrais?</p></div>
          <div class="mini-card"><strong>Argumentar</strong><p>Quais razões sustentam a conclusão?</p></div>
          <div class="mini-card"><strong>Revisar</strong><p>Uma objeção forte exige corrigir ou abandonar parte da posição?</p></div>
        </div>
        <div class="concept-box"><strong>Filosofia não é “opinião sem resposta”.</strong><p>Questões filosóficas podem admitir respostas concorrentes, mas isso não torna todos os argumentos igualmente bons. Coerência, clareza conceitual, relevância das razões e capacidade de enfrentar objeções permitem comparar posições.</p></div>

        ${choice('2','O que faz um argumento melhor?','Duas pessoas discordam sobre justiça. Uma apresenta razões coerentes e responde às objeções; a outra repete “é assim porque eu acho”. O que podemos concluir?',[['a','As duas posições têm automaticamente a mesma força'],['b','A primeira está melhor justificada, mesmo que ainda possa ser criticada'],['c','A segunda vence porque opinião pessoal não pode ser analisada']],'b','Isso. Uma conclusão pode continuar discutível e, ainda assim, estar melhor fundamentada que outra.','Pluralidade de perspectivas não significa equivalência automática entre argumentos.')}

        <h3>2. Onde entra a Grécia antiga?</h3>
        <p>O termo <em>philosophía</em> vem do grego e a tradição que chamamos de <strong>filosofia ocidental</strong> tomou forma no mundo grego antigo. Mas seria simplificador dizer que ali surgiu, pela primeira vez, toda reflexão racional da humanidade. Índia, China, África e outras sociedades desenvolveram antigas tradições de investigação sobre natureza, conhecimento, vida boa e organização social.</p>
        <p>O ponto histórico específico é outro: no mundo grego, especialmente entre os séculos VI e IV a.C., consolidou-se uma tradição de debate que buscava <strong>explicações, definições e argumentos discutíveis publicamente</strong>, deixando uma enorme documentação e influência sobre a filosofia posterior.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Ancient_agora_of_Athens.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Ancient_agora_of_Athens.jpg?width=1400" alt="Fotografia atual das ruínas da Ágora Antiga de Atenas, com estruturas arqueológicas e a Acrópole ao fundo." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Ágora de Atenas: filosofia não surgiu em uma sala de aula moderna</strong>
            <span>A Ágora era um centro político, administrativo, comercial e social de Atenas. A fotografia não mostra Sócrates conversando — ela mostra o espaço histórico em que cidadãos circulavam, negócios eram feitos e discussões públicas aconteciam. Isso ajuda a situar o ambiente social de parte da filosofia ateniense.</span>
            <small>Foto: SiaKou96, 16/02/2018, Wikimedia Commons — CC BY-SA 4.0. A imagem é uma fotografia contemporânea de um sítio arqueológico, não uma reprodução da Atenas do século V a.C.</small>
          </figcaption>
        </figure>

        <div class="note-box"><strong>Evite o clichê “mito acabou e nasceu a razão”.</strong><p>Narrativas míticas, religião, poesia, investigação racional e debate político continuaram coexistindo no mundo grego. A filosofia não apareceu em uma noite substituindo tudo o que existia antes. O que muda é a expansão de formas de explicar e discutir que exigem razões passíveis de exame.</p></div>

        ${choice('3','Origem sem simplificação','Qual afirmação é historicamente mais cuidadosa?',[['a','Na Grécia, o mito desapareceu e foi imediatamente substituído pela ciência moderna'],['b','A tradição filosófica grega consolidou novas formas de argumentação e investigação, convivendo com outras formas de pensamento'],['c','Nenhuma sociedade antes dos gregos formulou questões racionais sobre o mundo']],'b','Correto. A mudança histórica é importante, mas não foi uma substituição instantânea nem exclusividade humana de pensar racionalmente.','Procure continuidades e mudanças; evite narrativas de “antes irracional, depois racional”.')}

        <h3>3. Antes de Sócrates, já havia filosofia</h3>
        <p>Autores frequentemente chamados de <strong>pré-socráticos</strong> investigaram problemas sobre a natureza, mudança, permanência e constituição do cosmos. Tales, Anaximandro, Heráclito, Parmênides e outros não formavam uma única escola nem defendiam a mesma resposta.</p>
        <p>Sócrates, no século V a.C., tornou-se especialmente importante porque as fontes antigas o apresentam examinando conceitos ligados à vida humana: coragem, justiça, piedade, virtude, conhecimento. Ele não escreveu livros. O que sabemos sobre ele vem principalmente de autores posteriores ou contemporâneos, como Platão e Xenofonte, além de representações literárias de Aristófanes.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Bust_Socrates_Musei_Capitolini_MC1163.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Bust_Socrates_Musei_Capitolini_MC1163.jpg?width=900" alt="Busto de mármore representando Sócrates, cópia romana de um original grego helenístico, preservado nos Museus Capitolinos em Roma." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Isto não é uma “foto de Sócrates”</strong>
            <span>O busto é uma cópia romana de uma representação grega posterior. Ele é uma fonte sobre como Sócrates foi representado e lembrado, não um retrato fotográfico nem uma prova direta de sua aparência exata.</span>
            <small>Museus Capitolinos, Roma. Fotografia: Marie-Lan Nguyen, 2006, dedicada ao domínio público. Objeto: mármore, cópia romana de original grego helenístico.</small>
          </figcaption>
        </figure>

        ${choice('4','Leia a fonte','Por que não devemos apresentar o busto acima como “a aparência comprovada de Sócrates”?',[['a','Porque é uma representação posterior e deve ser interpretada como fonte, não como fotografia contemporânea'],['b','Porque esculturas nunca podem ser fontes históricas'],['c','Porque Sócrates escreveu uma descrição exata do próprio rosto']],'a','Isso. A peça é uma evidência real, mas responde a uma pergunta diferente da fotografia: mostra uma tradição de representação posterior.','Fonte real não significa resposta automática; é preciso perguntar quando, por quem e para quê foi produzida.')}

        <h3>4. O gesto socrático: pedir uma explicação</h3>
        <p>Nos diálogos antigos, Sócrates frequentemente pergunta algo aparentemente simples: <strong>“o que é coragem?”, “o que é justiça?”, “o que é conhecimento?”</strong>. O interlocutor oferece uma resposta; Sócrates testa a definição com exemplos e objeções; surgem dificuldades; a posição precisa ser revista.</p>
        <div class="argument-chain"><span>proponha uma definição</span><b>→</b><span>teste casos</span><b>→</b><span>procure contradições</span><b>→</b><span>revise</span></div>
        <p>Isso não deve ser transformado numa receita mecânica chamada “método socrático” que Sócrates teria deixado escrita. Ele não escreveu um manual. O que temos são retratos literários de conversas, sobretudo em Platão e Xenofonte, que influenciaram profundamente a prática filosófica.</p>
        <div class="source-box">
          <strong class="card-title">Uma limitação que faz parte da própria Filosofia</strong>
          <p>O chamado <strong>problema socrático</strong> nasce porque as fontes sobre Sócrates não concordam em tudo. Em vez de esconder essa incerteza, uma abordagem rigorosa a usa para ensinar algo central: precisamos distinguir o personagem histórico das interpretações feitas sobre ele.</p>
          <p><a href="https://plato.stanford.edu/entries/socrates/" target="_blank" rel="noopener noreferrer">Consultar Stanford Encyclopedia of Philosophy — Socrates</a></p>
        </div>

        ${choice('5','Questionar não é humilhar','Qual uso das perguntas está mais próximo do espírito de investigação filosófica?',[['a','Fazer perguntas apenas para constranger quem discorda'],['b','Usar perguntas para esclarecer conceitos, testar razões e localizar dificuldades'],['c','Evitar perguntas que possam mudar nossa opinião']],'b','Correto. A finalidade é examinar a posição, inclusive a nossa, e não vencer uma disputa pessoal.','Pergunta filosófica é instrumento de investigação, não arma para humilhar interlocutores.')}

        <h3>5. Filosofia tem campos diferentes — e eles se cruzam</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Lógica e argumentação</strong><p>Quando uma conclusão decorre das razões? Há contradição, ambiguidade ou falácia?</p></div>
          <div class="mini-card"><strong>Epistemologia</strong><p>O que é conhecimento? Que papel têm evidência, percepção, testemunho e dúvida?</p></div>
          <div class="mini-card"><strong>Ética</strong><p>Como devemos agir? O que torna uma ação correta, responsável ou injusta?</p></div>
          <div class="mini-card"><strong>Metafísica</strong><p>Que tipos de coisas existem? O que são identidade, causalidade, tempo ou possibilidade?</p></div>
          <div class="mini-card"><strong>Estética</strong><p>Como pensamos beleza, arte, experiência estética, interpretação e valor artístico?</p></div>
          <div class="mini-card"><strong>Filosofia política</strong><p>Como justificar autoridade, direitos, liberdade, justiça e regras de convivência?</p></div>
        </div>
        <p>Essas fronteiras são didáticas. Uma discussão sobre inteligência artificial, por exemplo, pode envolver epistemologia (o sistema “sabe”?), ética (como deve ser usado?), filosofia política (quem regula?) e estética (uma produção gerada pode ser arte?).</p>

        ${choice('6','Campos que se cruzam','Uma escola discute se trabalhos produzidos com IA devem ser aceitos. Por que essa pergunta pode envolver mais de um campo filosófico?',[['a','Porque pode envolver conhecimento, responsabilidade, regras justas e autoria ao mesmo tempo'],['b','Porque Filosofia não possui nenhum tipo de distinção entre problemas'],['c','Porque tecnologia elimina questões éticas']],'a','Isso. Problemas reais raramente respeitam fronteiras perfeitas entre campos filosóficos.','Use os campos como lentes diferentes para um mesmo problema, não como gavetas isoladas.')}

        <h3>6. Perspectivismo não significa “qualquer coisa vale”</h3>
        <p>O Plano de Curso recomenda reconhecer diferentes perspectivas. Isso significa compreender que um problema pode ser formulado e respondido a partir de pressupostos diferentes. Mas <strong>pluralidade não obriga a tratar como equivalentes argumentos incompatíveis com fatos bem estabelecidos, contraditórios ou sem razões suficientes</strong>.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Compreender uma perspectiva</strong><p>Reconstruir seus conceitos, premissas e conclusão da forma mais fiel possível.</p></div>
          <div class="mini-card"><strong>Avaliá-la</strong><p>Depois, perguntar se é coerente, se as premissas são aceitáveis, quais objeções enfrenta e o que explica ou deixa de explicar.</p></div>
        </div>
        <div class="note-box"><strong>Regra MbB para Filosofia:</strong><p>apresentar uma corrente não é recomendá-la. O aluno deve conseguir explicar uma posição antes de criticá-la — e criticá-la por seus argumentos, não por rótulo político, religioso ou social.</p></div>

        <h3>7. Caderno de investigação — primeira etapa</h3>
        <div class="field-box">
          <strong class="card-title">Escolha uma pergunta real que você consiga revisar ao longo do módulo</strong>
          <p>Exemplos: “usar IA em um trabalho escolar é sempre desonesto?”, “uma regra igual para todos é necessariamente justa?”, “uma obra precisa ter sido feita por uma pessoa para ser arte?”, “ser livre é poder fazer qualquer coisa?”. Você também pode formular outra pergunta.</p>
          <p><strong>Registro mínimo:</strong> escreva a pergunta + sua resposta inicial em duas frases + duas razões que hoje sustentam sua posição + uma objeção que alguém poderia fazer.</p>
          <p><strong>Importante:</strong> não procure “a resposta certa” agora. Nos próximos capítulos você poderá modificar sua posição. Mudar de ideia diante de razões melhores não é fracasso; é parte da investigação.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final</span>
          <div class="challenge-box">
            <strong class="card-title">Transforme uma opinião em argumento</strong>
            <p>Escolha uma destas frases: <strong>“celular atrapalha a aula”</strong>, <strong>“todo mundo deveria poder dizer qualquer coisa”</strong> ou <strong>“arte é apenas questão de gosto”</strong>.</p>
            <p>Construa uma resposta com quatro partes: <strong>(1)</strong> defina um conceito central; <strong>(2)</strong> apresente uma conclusão; <strong>(3)</strong> dê pelo menos duas razões relevantes; <strong>(4)</strong> formule uma objeção séria contra sua própria posição.</p>
            <details><summary>O que caracteriza uma boa resposta?</summary><p>Ela não precisa chegar à mesma conclusão de outra pessoa. Precisa tornar claros os conceitos, oferecer razões relacionadas à conclusão e reconhecer uma objeção que realmente desafie a posição. A qualidade está no raciocínio, não na adesão a uma opinião específica.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>Trabalha diretamente as origens da Filosofia, a atitude filosófica, os períodos e campos de investigação e a orientação curricular de contextualizar problemas do cotidiano, reconhecer perspectivas e desenvolver reflexão e debate por argumentos.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> filosofar é transformar uma questão em investigação. Perguntar, definir conceitos, justificar conclusões, ouvir objeções e revisar ideias permite sair da simples reação. A Filosofia não exige concordância automática; exige que saibamos explicar por que pensamos o que pensamos.</div>
      `
    });
  }

  MBB.enableChapter?.('01 Filosofia', showChapter);
})();