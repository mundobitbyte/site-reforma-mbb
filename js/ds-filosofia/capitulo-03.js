(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Agir e escolher',
      technical:'ética • moral • liberdade • autonomia • coerção • responsabilidade • voluntariedade • virtude • dever • consequências • livre-arbítrio • determinismo',
      title:'Ser livre significa poder fazer qualquer coisa?',
      objective:'<strong>Objetivo:</strong> analisar a relação entre liberdade e responsabilidade; distinguir escolha, coerção, ignorância e negligência; comparar ética das virtudes, deontologia e consequencialismo sem tratar uma corrente como resposta obrigatória; reconhecer os limites entre moralidade, lei e costume e compreender por que o debate sobre livre-arbítrio permanece filosoficamente aberto.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">“O celular é meu. Eu respondo se quiser.”</strong>
            <p>Você está de carona quando o motorista recebe uma mensagem marcada como urgente. O celular vibra ao lado do volante. Ele olha para a tela e diz: “sou livre para responder; ninguém manda em mim”.</p>
            <p>A frase parece defender liberdade. Mas há outras pessoas na rua, passageiros dentro do carro, riscos previsíveis e uma escolha que pode afetar quem não participou da decisão.</p>
            <p class="central-question"><strong>Pergunta central:</strong> liberdade é apenas conseguir fazer o que queremos ou envolve também razões, limites e responsabilidade pelo que escolhemos?</p>
          </div>
        </section>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Cell_phone_use_while_driving.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Cell_phone_use_while_driving.jpg?width=1200" alt="Fotografia de uma pessoa dirigindo enquanto segura um telefone celular junto ao ouvido." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Uma escolha individual pode criar risco para outras pessoas</strong>
            <span>A fotografia torna concreto o problema: o motorista controla o aparelho, mas a consequência potencial de sua escolha ultrapassa o próprio motorista. A questão ética não é só “posso fazer?”, mas também “o que devo considerar antes de fazer?”.</span>
            <small>Foto: Ed Brown / Edbrown05, 02/04/2007, Wikimedia Commons — CC BY-SA 2.5. Em 2024, a NHTSA registrou 3.208 mortes e mais de 315 mil feridos em acidentes envolvendo motoristas distraídos nos Estados Unidos.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">Dado real, uso cuidadoso</strong>
          <p>O número acima não prova que todo uso de celular produz acidente nem resolve sozinho a questão moral. Ele mostra que a distração ao dirigir é um risco documentado e que uma decisão aparentemente privada pode atingir terceiros.</p>
          <p><a href="https://www.nhtsa.gov/risky-driving/distracted-driving" target="_blank" rel="noopener noreferrer">Fonte: National Highway Traffic Safety Administration — Distracted Driving</a></p>
        </div>

        ${choice('1','Liberdade sem limites?','Qual afirmação é filosoficamente mais cuidadosa?',[['a','Ser livre significa nunca encontrar limites, regras ou consequências'],['b','Liberdade envolve alguma forma de controle sobre a ação, mas isso não elimina consequências, deveres ou a liberdade de outras pessoas'],['c','Se uma ação é escolhida, ela se torna automaticamente correta']],'b','Correto. Poder escolher é diferente de ter justificativa moral para qualquer escolha.','Liberdade e correção moral são questões relacionadas, mas não idênticas.')}

        <h3>1. Ética e moral: uma distinção útil, não uma regra absoluta</h3>
        <p>No uso cotidiano, <strong>ética</strong> e <strong>moral</strong> muitas vezes aparecem como sinônimos. Em cursos de Filosofia, porém, é comum usar uma distinção didática: moral pode designar normas, valores e práticas que orientam uma pessoa ou grupo; ética pode designar a reflexão crítica sobre como devemos agir e por quê.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Moral</strong><p>“Na minha família, comunidade ou profissão, esta conduta é considerada correta ou errada.”</p></div>
          <div class="mini-card"><strong>Ética</strong><p>“Que razões justificam essa norma? Ela é coerente? Respeita as pessoas envolvidas? Que objeções existem?”</p></div>
        </div>
        <div class="note-box"><strong>Cuidado com uma definição rígida.</strong><p>Filósofos e tradições diferentes usam os termos de modos diferentes. O importante aqui é aprender a passar do costume ou da reação imediata para a <strong>justificação racional da ação</strong>.</p></div>

        <h3>2. Liberdade não é uma palavra com um único sentido</h3>
        <p>Quando alguém diz “sou livre”, pode estar falando de coisas diferentes. Separar esses sentidos evita discussões em que as pessoas usam a mesma palavra para problemas diferentes.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Liberdade de ação</strong><p>Conseguir realizar uma ação sem impedimento físico ou coerção externa decisiva.</p></div>
          <div class="mini-card"><strong>Autonomia</strong><p>Conseguir deliberar, examinar razões e orientar a própria ação, em vez de apenas reagir a impulsos ou pressão.</p></div>
          <div class="mini-card"><strong>Livre-arbítrio</strong><p>Questão filosófica mais profunda sobre que tipo de controle temos sobre escolhas e se poderíamos agir de outro modo.</p></div>
        </div>

        <div class="concept-box"><strong>“Eu quis” não encerra a análise.</strong><p>Uma pessoa pode querer algo sob ameaça, vício, manipulação, informação falsa ou forte pressão. Por isso, avaliar liberdade exige observar as condições reais da escolha.</p></div>

        ${choice('2','Escolha e coerção','Uma pessoa entrega a carteira porque alguém a ameaça com uma arma. Por que esse caso importa para pensar responsabilidade?',[['a','Porque toda ação física realizada por alguém é igualmente livre'],['b','Porque coerção pode reduzir de modo decisivo o controle sobre a escolha e precisa entrar na avaliação da responsabilidade'],['c','Porque ameaças transformam automaticamente qualquer ação em moralmente correta']],'b','Isso. Responsabilidade não é julgada apenas pelo movimento realizado, mas também pelas condições de controle e conhecimento.','Coerção pode reduzir responsabilidade, mas cada caso ainda exige examinar circunstâncias e alternativas reais.')}

        <h3>3. Responsabilidade: controle, conhecimento e circunstâncias</h3>
        <p>Responsabilizar alguém costuma pressupor que a ação tenha uma relação adequada com o próprio agente. Duas perguntas são especialmente importantes:</p>
        <div class="two-col">
          <div class="mini-card"><strong>Condição de controle</strong><p>A pessoa tinha domínio relevante sobre o que fazia? Havia coerção, impedimento ou incapacidade que alterava a escolha?</p></div>
          <div class="mini-card"><strong>Condição epistêmica</strong><p>A pessoa sabia — ou deveria razoavelmente saber — o que estava fazendo e quais consequências relevantes poderiam ocorrer?</p></div>
        </div>

        <p>Isso ajuda a diferenciar <strong>ignorância inevitável</strong> de <strong>negligência</strong>. Não saber algo que era impossível descobrir é diferente de escolher não verificar um risco que era previsível e que a pessoa tinha obrigação de considerar.</p>

        <h3>4. Aristóteles já relacionava voluntariedade e responsabilidade</h3>
        <p>Na <em>Ética a Nicômaco</em>, Aristóteles distingue ações voluntárias e involuntárias e relaciona elogio e censura às condições em que alguém age. Em linhas gerais, uma ação voluntária tem sua origem no agente e envolve conhecimento das circunstâncias relevantes. Ele também reconhece situações de coerção e pressão em que a avaliação precisa considerar o contexto.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Aristotle_Altemps_Inv8575.jpg?width=900" alt="Busto de mármore representando Aristóteles, cópia romana baseada em um original grego atribuído a Lisipo." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Aristóteles: agir bem envolve mais do que obedecer a uma lista</strong>
            <span>Na ética aristotélica, caráter, hábitos, virtudes e sabedoria prática ajudam a formar alguém capaz de deliberar bem diante de situações concretas. A imagem é uma representação histórica posterior, não um retrato fotográfico do filósofo.</span>
            <small>Busto de Aristóteles, mármore, cópia romana baseada em original grego do século IV a.C.; Palazzo Altemps, Roma. Fotografia: Jastrow, Wikimedia Commons — domínio público.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">Uma ideia antiga que continua atual</strong>
          <p>A discussão sobre voluntariedade mostra por que não basta perguntar “quem fez?”. Também precisamos perguntar <strong>em que condições, com qual conhecimento e com que grau de controle?</strong></p>
          <p><a href="https://plato.stanford.edu/entries/freedom-ancient/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Ancient Theories of Freedom and Determinism</a></p>
        </div>

        ${choice('3','Responsabilidade e conhecimento','Um técnico ignora deliberadamente um aviso de segurança que fazia parte de sua função ler e depois alega “eu não sabia”. O que deve ser examinado?',[['a','Apenas se ele pronunciou a frase com sinceridade'],['b','Se a ignorância era inevitável ou se resultou de negligência diante de uma obrigação previsível'],['c','Nada; desconhecimento sempre elimina responsabilidade']],'b','Correto. A condição de conhecimento inclui perguntar não só o que a pessoa sabia, mas também o que tinha razões e dever de verificar.','Ignorância pode reduzir responsabilidade em alguns casos, mas não funciona como desculpa automática.')}

        <h3>5. Três grandes maneiras de organizar uma avaliação moral</h3>
        <p>Na ética normativa contemporânea, três famílias de teorias aparecem com frequência. Elas não são partidos nem “times” que o aluno precisa escolher. São <strong>modelos de raciocínio</strong> que destacam aspectos diferentes.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Ética das virtudes</strong><p>Pergunta que tipo de caráter e de disposição devemos cultivar: coragem, justiça, honestidade, temperança, prudência. Aristóteles é uma referência histórica central.</p></div>
          <div class="mini-card"><strong>Deontologia</strong><p>Destaca deveres, proibições, direitos e princípios que orientam o que é permitido, obrigatório ou proibido. Kant é uma referência histórica importante, mas há várias formas de deontologia.</p></div>
          <div class="mini-card"><strong>Consequencialismo</strong><p>Avalia ações em função das consequências e dos estados de coisas que elas produzem. O utilitarismo é sua forma histórica mais conhecida, mas não é a única.</p></div>
        </div>

        <div class="note-box"><strong>Não transforme as três lentes em caricaturas.</strong><p>Uma teoria centrada em virtudes também pode considerar consequências; uma teoria deontológica não precisa ignorá-las; um consequencialista não precisa pensar apenas em benefício próprio. O que muda é <strong>qual aspecto tem papel fundamental na justificação</strong>.</p></div>

        ${choice('4','Três lentes','Um estudante encontra uma carteira perdida. Qual associação está correta?',[['a','Virtudes: que caráter a devolução expressa; deontologia: que dever ou direito está envolvido; consequencialismo: quais efeitos as alternativas produzem'],['b','Virtudes: obedecer ao mais forte; deontologia: fazer o que der vontade; consequencialismo: ignorar consequências'],['c','As três teorias sempre fornecem respostas opostas em qualquer caso']],'a','Isso. Muitas vezes elas podem recomendar a mesma ação, mas justificá-la de maneiras diferentes.','Comparar teorias significa reconstruir suas razões, não inventar diferenças onde elas não existem.')}

        <div class="source-box">
          <strong class="card-title">Para aprofundar sem escolher “um lado”</strong>
          <p><a href="https://plato.stanford.edu/entries/ethics-virtue/" target="_blank" rel="noopener noreferrer">Virtue Ethics</a> •
          <a href="https://plato.stanford.edu/entries/ethics-deontological/" target="_blank" rel="noopener noreferrer">Deontological Ethics</a> •
          <a href="https://plato.stanford.edu/entries/consequentialism-rule/" target="_blank" rel="noopener noreferrer">Rule Consequentialism</a></p>
        </div>

        <h3>6. Lei, costume e moralidade não são a mesma coisa</h3>
        <p>Leis regulam condutas por meio de instituições públicas. Costumes são práticas socialmente consolidadas. Juízos morais perguntam o que é correto, justo, devido ou censurável. Esses três campos se influenciam, mas não coincidem automaticamente.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Legal ≠ automaticamente moral</strong><p>Uma conduta pode estar permitida juridicamente e ainda ser criticada moralmente.</p></div>
          <div class="mini-card"><strong>Ilegal ≠ definição completa de imoral</strong><p>A lei fornece uma razão institucional relevante, mas a avaliação moral pode perguntar também pela justiça da própria norma.</p></div>
          <div class="mini-card"><strong>Comum ≠ correto</strong><p>O fato de “todo mundo fazer” descreve um costume; não demonstra que a conduta seja moralmente justificada.</p></div>
        </div>

        <p>No caso do celular ao volante, a existência de uma proibição legal é relevante. No Brasil, o Código de Trânsito Brasileiro estabelece no art. 252 que dirigir segurando ou manuseando telefone celular caracteriza infração gravíssima. Mas a reflexão ética vai além da multa: considera risco imposto a terceiros, dever de cuidado, prudência, previsibilidade e responsabilidade.</p>
        <p><a href="https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm" target="_blank" rel="noopener noreferrer">Fonte legal: Código de Trânsito Brasileiro — art. 252</a></p>

        ${choice('5','Lei e moral','Qual raciocínio evita confundir legalidade e moralidade?',[['a','Se é legal, então é moralmente correto por definição'],['b','Se é comum, então não pode ser criticado'],['c','A lei é uma razão institucional importante, mas ainda podemos discutir moralmente a ação e a própria norma por meio de argumentos']],'c','Correto. Ética não ignora a lei, mas também não reduz toda moralidade ao que está escrito nela.','Legalidade, costume e moralidade se relacionam, mas não são conceitos idênticos.')}

        <h3>7. E se nossas escolhas tiverem causas? O problema do livre-arbítrio</h3>
        <p>Nossas decisões têm história: educação, personalidade, hábitos, corpo, ambiente, experiências e circunstâncias influenciam o que fazemos. Isso gera uma pergunta filosófica difícil: <strong>se nossas escolhas estão inseridas numa cadeia de causas, ainda somos livres e responsáveis?</strong></p>

        <div class="three-col">
          <div class="mini-card"><strong>Compatibilismo</strong><p>Defende que liberdade e responsabilidade podem ser compatíveis com determinismo, desde que exista o tipo relevante de controle, resposta a razões ou ausência de certas coerções.</p></div>
          <div class="mini-card"><strong>Libertarismo metafísico (não político)</strong><p>É uma forma de incompatibilismo: defende que a liberdade exigida pela responsabilidade não é compatível com determinismo e sustenta que possuímos algum tipo de liberdade não determinada desse modo.</p></div>
          <div class="mini-card"><strong>Ceticismo / incompatibilismo duro</strong><p>Questiona se possuímos a liberdade necessária para certos tipos de merecimento moral, seja o determinismo verdadeiro ou não.</p></div>
        </div>

        <div class="concept-box"><strong>A ciência não encerrou essa disputa filosófica.</strong><p>Estudos de cérebro, comportamento e ambiente podem revelar fatores que influenciam decisões. Mas transformar esses resultados diretamente em “a ciência provou que o livre-arbítrio existe” ou “a ciência provou que não existe” exige premissas filosóficas adicionais sobre o que conta como liberdade e responsabilidade.</p></div>

        ${choice('6','Determinismo e liberdade','Qual alternativa representa corretamente o debate filosófico?',[['a','Todo filósofo concorda que determinismo elimina necessariamente qualquer responsabilidade'],['b','Compatibilistas e incompatibilistas discordam justamente sobre se o tipo relevante de liberdade pode coexistir com determinismo'],['c','A neurociência já resolveu definitivamente o conceito filosófico de livre-arbítrio']],'b','Isso. A controvérsia permanece aberta porque diferentes teorias entendem de modos diferentes o controle necessário para liberdade e responsabilidade.','Não transforme uma disputa filosófica real em consenso inexistente.')}

        <div class="source-box">
          <strong class="card-title">Debate aberto, não slogan</strong>
          <p><a href="https://plato.stanford.edu/entries/freewill/" target="_blank" rel="noopener noreferrer">Free Will</a> •
          <a href="https://plato.stanford.edu/entries/compatibilism/" target="_blank" rel="noopener noreferrer">Compatibilism</a> •
          <a href="https://plato.stanford.edu/entries/moral-responsibility/" target="_blank" rel="noopener noreferrer">Moral Responsibility</a></p>
        </div>

        <h3>8. Caderno de investigação — terceira etapa: transforme uma opinião moral em análise</h3>
        <div class="field-box">
          <strong class="card-title">Continue o mesmo caderno iniciado no capítulo 01</strong>
          <p>Escolha uma decisão cotidiana concreta e não íntima: copiar uma tarefa, devolver um objeto encontrado, interromper alguém para ajudar, cumprir uma regra escolar, compartilhar uma informação, assumir um erro.</p>
          <p>Registre:</p>
          <ol>
            <li><strong>A ação:</strong> quais alternativas reais existem?</li>
            <li><strong>Liberdade:</strong> existe coerção, pressão ou impedimento relevante?</li>
            <li><strong>Conhecimento:</strong> que consequências a pessoa conhece ou deveria prever?</li>
            <li><strong>Virtude:</strong> que traço de caráter uma alternativa expressaria?</li>
            <li><strong>Dever/direito:</strong> há obrigação ou direito relevante?</li>
            <li><strong>Consequências:</strong> quem pode ser beneficiado ou prejudicado?</li>
            <li><strong>Revisão:</strong> sua resposta inicial mudou depois de comparar essas razões?</li>
          </ol>
          <p><strong>Regra MbB:</strong> não escreva apenas “eu acho”. Registre a conclusão e pelo menos duas razões que possam ser examinadas por outra pessoa.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final</span>
          <div class="challenge-box">
            <strong class="card-title">O motorista e a mensagem urgente</strong>
            <p>Retome a situação inicial. O motorista sabe que usar o celular tira sua atenção da via, mas recebe uma mensagem dizendo que há uma emergência familiar. Ele pensa em responder imediatamente enquanto continua dirigindo.</p>
            <p><strong>Construa uma análise em cinco passos:</strong></p>
            <ol>
              <li>identifique o que está sob controle do motorista e o que não está;</li>
              <li>aponte duas consequências previsíveis relevantes;</li>
              <li>apresente uma razão baseada em virtude, uma em dever/direito e uma em consequências;</li>
              <li>explique por que “a mensagem é urgente” não basta, sozinha, para resolver o problema;</li>
              <li>proponha uma alternativa que preserve melhor os valores em conflito.</li>
            </ol>
            <details>
              <summary>Ver uma resposta possível</summary>
              <p>O motorista não controla a existência da emergência, mas controla, em condições normais, se continuará dirigindo enquanto manipula o aparelho. Entre as consequências previsíveis estão reduzir a atenção e impor risco a passageiros e terceiros. Pela lente das virtudes, prudência e responsabilidade contam contra dirigir distraído; pela lente de deveres e direitos, há dever de cuidado e terceiros têm interesse legítimo em não serem expostos a risco evitável; pela lente consequencialista, responder enquanto dirige pode produzir danos graves. A urgência cria uma razão importante para responder, mas não determina <em>como</em> responder. Uma alternativa é parar em local seguro antes de usar o aparelho ou pedir que um passageiro faça o contato. A análise não depende de escolher uma única teoria ética como verdadeira.</p>
            </details>
          </div>

          <div class="curriculum-box">
            <details>
              <summary>Essência do capítulo</summary>
              <p><strong>Liberdade não é ausência total de limites.</strong> Avaliar responsabilidade exige examinar controle, conhecimento, coerção, negligência e circunstâncias. Ética das virtudes, deontologia e consequencialismo oferecem estruturas diferentes para justificar ações; lei, costume e moralidade não são sinônimos. O debate sobre livre-arbítrio e determinismo permanece filosoficamente aberto.</p>
            </details>
          </div>
        </section>
      `
    });
  }

  MBB.enableChapter?.('03 Ética, liberdade e responsabilidade', showChapter);
})();