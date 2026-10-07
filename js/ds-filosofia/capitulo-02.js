(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Conhecimento e verdade',
      technical:'crença • conhecimento • justificação • verdade • percepção • testemunho • ciência • hipótese • evidência • falseabilidade • replicação • consenso científico',
      title:'Como sabemos que algo é verdadeiro?',
      objective:'<strong>Objetivo:</strong> distinguir crença, opinião, conhecimento e verdade; avaliar fontes e justificações; compreender a ciência como investigação pública, sistemática e revisável; reconhecer que evidência, crítica e replicação fortalecem conclusões sem transformar ciência em argumento de autoridade.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Três respostas para a mesma pergunta</strong>
            <p>Um estudante pesquisa uma dúvida de Ciências. Um vídeo curto dá uma resposta muito segura, uma ferramenta de IA apresenta outra e um artigo de uma instituição científica apresenta uma terceira — com dados, método e referências.</p>
            <p>As três respostas podem parecer convincentes. Mas <strong>parecer convincente não é o mesmo que ser verdadeiro</strong>, e uma resposta correta por acaso não é necessariamente conhecimento.</p>
            <p class="central-question"><strong>Pergunta central:</strong> que razões temos para dizer que sabemos alguma coisa?</p>
          </div>
        </section>

        <div class="argument-chain">
          <span>afirmação</span><b>→</b><span>fonte</span><b>→</b><span>evidência</span><b>→</b><span>inferência</span><b>→</b><span>crítica</span><b>→</b><span>conclusão provisória</span>
        </div>

        ${choice('1','Acertar não basta','Uma pessoa lança uma moeda, sem olhar, e afirma com total confiança que caiu cara. Por sorte, realmente caiu cara. Isso basta para dizer que ela sabia o resultado?',[['a','Sim, porque a frase era verdadeira'],['b','Não; uma crença verdadeira por sorte ainda pode não estar adequadamente justificada'],['c','Sim, porque confiança transforma crença em conhecimento']],'b','Correto. Acertar por acaso é diferente de saber. A justificação importa.','Uma crença pode coincidir com a verdade sem ter sido formada por boas razões.')}

        <h3>1. Crença, verdade e conhecimento não são a mesma coisa</h3>
        <p>Na epistemologia, uma distinção inicial muito útil é separar <strong>aquilo que alguém acredita</strong> daquilo que é <strong>verdadeiro</strong> e daquilo que pode ser chamado de <strong>conhecimento</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Crença</strong><p>É uma atitude mental: considerar que uma afirmação é verdadeira. Uma pessoa pode acreditar sinceramente e ainda estar errada.</p></div>
          <div class="mini-card"><strong>Verdade</strong><p>Diz respeito à afirmação e ao que a torna verdadeira. A sinceridade de quem fala não decide a verdade.</p></div>
          <div class="mini-card"><strong>Conhecimento</strong><p>Exige mais do que simplesmente acreditar e acertar; precisamos examinar que tipo de justificação sustenta a crença.</p></div>
        </div>

        <div class="concept-box">
          <strong>Um mapa clássico — mas não uma solução final.</strong>
          <p>Uma análise tradicional diz que saber que <em>P</em> envolve: <strong>P ser verdadeiro + a pessoa acreditar em P + ter justificação para acreditar em P</strong>. Esse modelo é excelente para começar, mas a filosofia contemporânea mostra que ele não resolve todos os casos.</p>
        </div>

        <p>Em 1963, Edmund Gettier apresentou exemplos em que alguém possui uma crença verdadeira e aparentemente justificada, mas chega à verdade por uma coincidência inesperada. Esses casos mostraram que a análise tradicional de “crença verdadeira justificada” é importante, porém provavelmente incompleta.</p>

        ${choice('2','Conhecimento e sorte','Por que os casos de Gettier são filosoficamente importantes?',[['a','Porque mostram que qualquer crença verdadeira é conhecimento'],['b','Porque sugerem que verdade, crença e justificação podem ainda não ser suficientes quando a conclusão depende de sorte epistêmica'],['c','Porque provam que ninguém pode conhecer nada']],'b','Isso. O problema não destrói o conhecimento; ele mostra que definir conhecimento com precisão é mais difícil do que parecia.','Gettier não conclui que conhecimento é impossível; ele testa uma definição de conhecimento.')}

        <h3>2. De onde vêm nossas razões para acreditar?</h3>
        <p>Grande parte do que sabemos não foi descoberta diretamente por nós. Usamos diferentes fontes de justificação, e cada uma pode funcionar bem ou falhar.</p>

        <div class="four-col">
          <div class="mini-card"><strong>Percepção</strong><p>Vemos, ouvimos e medimos o mundo, mas percepção pode sofrer ilusões, limitações do instrumento e condições ruins de observação.</p></div>
          <div class="mini-card"><strong>Memória</strong><p>Preserva informações importantes, mas não é uma gravação perfeita e pode se deteriorar ou reconstruir detalhes.</p></div>
          <div class="mini-card"><strong>Razão e inferência</strong><p>Permitem derivar conclusões, identificar contradições e construir explicações, mas uma inferência válida pode partir de premissas falsas.</p></div>
          <div class="mini-card"><strong>Testemunho</strong><p>Aprendemos com professores, especialistas, livros, jornais e outras pessoas. Testemunho é indispensável, mas precisa ser avaliado.</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Confiar não é o mesmo que aceitar cegamente</strong>
          <p>Ao avaliar um testemunho, pergunte: <strong>a fonte tem competência no assunto? teve acesso à evidência? mostra como chegou à conclusão? outras fontes independentes convergem? existe interesse ou incentivo que mereça atenção?</strong></p>
          <p>Isso vale para uma pessoa, um livro, um site, um vídeo e também para uma resposta produzida por IA.</p>
          <p><a href="https://plato.stanford.edu/entries/testimony-episprob/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Epistemological Problems of Testimony</a></p>
        </div>

        ${choice('3','Autoridade e evidência','Um especialista afirma algo sobre sua própria área. Qual é a atitude mais racional?',[['a','Aceitar automaticamente porque especialista nunca erra'],['b','Ignorar automaticamente porque autoridade não vale nada'],['c','Dar peso à competência relevante, mas também considerar evidência, método, transparência e convergência com outras fontes']],'c','Correto. Especialização é epistemicamente relevante, mas não substitui evidência nem torna alguém infalível.','O erro está tanto em tratar autoridade como prova absoluta quanto em fingir que expertise não possui valor.')}

        <h3>3. “É verdade para mim” resolve a questão?</h3>
        <p>Em conversas comuns, dizemos “essa é a minha verdade” para expressar experiência pessoal, perspectiva ou convicção. Isso pode ser legítimo quando falamos de <strong>experiência subjetiva</strong>. Mas não devemos usar essa expressão para apagar a diferença entre experiência e afirmação factual.</p>
        <p>Se duas pessoas discordam sobre a massa de um objeto, a data de um documento ou a presença de determinado elemento químico numa amostra, a verdade da afirmação <strong>não é decidida pela preferência de cada uma</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Correspondência</strong><p>Em linhas gerais, uma afirmação é verdadeira quando corresponde adequadamente à realidade ou aos fatos relevantes.</p></div>
          <div class="mini-card"><strong>Coerência</strong><p>Algumas teorias enfatizam a relação consistente de uma crença com um sistema mais amplo de crenças.</p></div>
          <div class="mini-card"><strong>Pragmatismo</strong><p>Outras destacam a relação entre verdade, investigação, verificação e práticas pelas quais crenças resistem ao exame.</p></div>
        </div>

        <div class="note-box">
          <strong>Teorias filosóficas da verdade não significam “cada um inventa a própria realidade”.</strong>
          <p>Correspondência, coerência e pragmatismo oferecem análises diferentes do conceito de verdade. Em afirmações empíricas, evidências e confronto com o mundo continuam sendo indispensáveis.</p>
        </div>

        <p><a href="https://plato.stanford.edu/entries/truth/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Truth</a></p>

        ${choice('4','Perspectiva ou fato?','Duas pessoas olham a mesma obra e uma a considera bela; a outra, desagradável. Depois discordam sobre o ano em que a obra foi produzida. Essas duas discordâncias são do mesmo tipo?',[['a','Sim, porque toda discordância é apenas gosto pessoal'],['b','Não; uma envolve avaliação estética, enquanto a outra pode ser investigada por documentação e evidências históricas'],['c','Sim, porque datas também dependem da preferência de quem observa']],'b','Isso. Nem toda pergunta pede o mesmo tipo de justificação. O método adequado depende do tipo de afirmação.','Não confunda avaliação subjetiva com afirmação factual verificável.')}

        <h3>4. Observar não é apenas “olhar”: Galileo e a Lua</h3>
        <p>Em 1610, Galileo Galilei publicou no <em>Sidereus Nuncius</em> desenhos baseados em observações telescópicas da Lua. As regiões de luz e sombra ajudavam a interpretar uma superfície irregular, com relevo — algo importante numa época em que havia concepções filosóficas e cosmológicas diferentes sobre a perfeição dos corpos celestes.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:Galileo%27s_sketches_of_the_moon_%28cropped%29.png" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Galileo%27s_sketches_of_the_moon_%28cropped%29.png?width=1200" alt="Três desenhos da Lua feitos por Galileo e publicados em 1610, mostrando áreas iluminadas, sombras e irregularidades próximas ao terminador lunar." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Um instrumento amplia a percepção — mas ainda precisamos interpretar</strong>
            <span>O telescópio permitiu observar detalhes invisíveis a olho nu. Porém, transformar manchas de luz e sombra em uma conclusão sobre relevo exigiu comparação, raciocínio geométrico e discussão com outros conhecimentos.</span>
            <small>Galileo Galilei, <em>Sidereus Nuncius</em>, 1610. Reprodução em domínio público via Wikimedia Commons.</small>
          </figcaption>
        </figure>

        <p>A lição filosófica é importante: <strong>dados não “falam sozinhos”</strong>. Instrumentos produzem registros; pesquisadores precisam calibrar equipamentos, distinguir ruído de sinal, interpretar resultados e testar se outras explicações seriam possíveis.</p>

        ${choice('5','Evidência e interpretação','O que os desenhos de Galileo ajudam a perceber sobre conhecimento científico?',[['a','Que observar com instrumento elimina qualquer necessidade de interpretação'],['b','Que evidência observacional pode ser ampliada por instrumentos, mas ainda precisa ser analisada e relacionada a hipóteses'],['c','Que uma imagem antiga vale menos do que qualquer opinião atual']],'b','Correto. Instrumentos ampliam capacidades humanas, mas não dispensam inferência, controle de erro e interpretação.','A ciência não é apenas “ver”; é construir e testar explicações a partir de evidências.')}

        <h3>5. Existe “o método científico” como uma receita única?</h3>
        <p>Livros didáticos às vezes apresentam uma sequência fixa: observação → problema → hipótese → experimento → conclusão. Essa sequência pode ser útil para começar, mas a pesquisa real é mais variada.</p>

        <div class="argument-chain">
          <span>problema</span><b>↔</b><span>modelo ou hipótese</span><b>↔</b><span>dados</span><b>↔</b><span>teste</span><b>↔</b><span>crítica</span><b>↔</b><span>revisão</span>
        </div>

        <p>Astronomia não pode colocar uma estrela dentro de um laboratório; geologia trabalha com processos que podem durar milhões de anos; epidemiologia combina observação, estatística e diferentes desenhos de estudo; física experimental pode controlar condições com enorme precisão. Há <strong>métodos científicos</strong>, não uma única receita mecânica que todas as áreas executam do mesmo jeito.</p>

        <div class="two-col">
          <div class="mini-card"><strong>O que reaparece em muitas ciências?</strong><p>Observação sistemática, medição, hipóteses e modelos, inferência, teste de previsões, comparação de explicações, transparência metodológica e crítica pública.</p></div>
          <div class="mini-card"><strong>O que muda?</strong><p>O tipo de evidência, a possibilidade de experimento controlado, o papel da estatística, a escala temporal, os instrumentos e o modo de replicar ou reproduzir resultados.</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Popper: uma ideia influente, não uma definição completa de ciência</strong>
          <p>Karl Popper destacou que uma hipótese científica precisa correr o risco de estar errada: deve fazer afirmações que possam ser confrontadas com observações capazes de contrariá-la. A <strong>falseabilidade</strong> tornou-se uma ideia muito influente, mas a filosofia da ciência posterior mostrou que a prática científica é mais complexa do que um único critério de demarcação.</p>
          <p><a href="https://plato.stanford.edu/entries/scientific-method/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Scientific Method</a></p>
        </div>

        <h3>6. Ciência é também uma prática coletiva</h3>
        <p>Conhecimento científico moderno frequentemente depende de equipes, instrumentos caros, bancos de dados, software, revisão por outros pesquisadores e cooperação internacional. Isso não torna a ciência “verdadeira por votação”. Significa que muitas alegações são submetidas a controles que nenhum indivíduo conseguiria realizar sozinho.</p>

        <figure class="philo-figure">
          <a href="https://www.eso.org/public/images/dscf5685-cc/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.eso.org/images/screen/dscf5685-cc.jpg" alt="Fotografia de várias antenas brancas do observatório ALMA no planalto de Chajnantor, no deserto do Atacama, sob céu azul." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Conhecimento científico pode depender de uma infraestrutura inteira</strong>
            <span>As antenas do ALMA trabalham em conjunto para captar sinais em comprimentos de onda milimétricos e submilimétricos. Um resultado científico moderno pode envolver sensores, relógios precisos, armazenamento de dados, software, modelos matemáticos, equipes independentes e revisão.</span>
            <small>Foto: M. Roselund/ESO, 2015. ESO — Creative Commons Attribution 4.0 International (CC BY 4.0).</small>
          </figcaption>
        </figure>

        <p>O ALMA também integrou a rede do Event Horizon Telescope nas observações de 2017 usadas para construir imagens de buracos negros. Esse é um bom exemplo de como uma “imagem científica” pode ser o resultado final de uma cadeia enorme de coleta, sincronização, processamento e reconstrução de dados — e não simplesmente uma fotografia tirada por uma câmera comum.</p>

        <div class="two-col">
          <div class="mini-card"><strong>Reprodutibilidade</strong><p>Em pesquisa computacional, outros pesquisadores devem conseguir obter resultados consistentes usando os mesmos dados, código, métodos e condições de análise.</p></div>
          <div class="mini-card"><strong>Replicabilidade</strong><p>Novos estudos coletam seus próprios dados para investigar a mesma questão e verificar se resultados semelhantes aparecem novamente.</p></div>
        </div>

        <p>Esses termos variam entre áreas; aqui usamos as definições adotadas pelas National Academies dos EUA em seu relatório sobre o tema.</p>
        <p><a href="https://www.nationalacademies.org/read/25303/chapter/2" target="_blank" rel="noopener noreferrer">Aprofundamento: National Academies — Reproducibility and Replicability in Science</a></p>

        ${choice('6','Consenso científico','O que significa dizer que existe forte consenso científico sobre uma conclusão?',[['a','Que cientistas fizeram uma votação e a maioria criou a verdade'],['b','Que especialistas relevantes convergem porque múltiplas linhas de evidência, métodos e críticas sustentam aquela conclusão, embora ela continue aberta a revisão diante de evidência melhor'],['c','Que a conclusão se tornou impossível de revisar']],'b','Correto. Consenso é consequência da convergência de evidências e investigação especializada, não uma fonte mágica de verdade.','A ciência é revisável, mas “revisável” não significa que toda hipótese concorrente tenha automaticamente o mesmo apoio.')}

        <h3>7. Ciência, senso comum e pseudociência</h3>
        <p><strong>Senso comum</strong> reúne conhecimentos práticos, hábitos e generalizações construídas na vida cotidiana. Ele é indispensável e muitas vezes funciona muito bem. O problema surge quando uma intuição cotidiana é tratada como prova suficiente para questões que exigem investigação mais rigorosa.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Investigação científica</strong><p>Torna métodos e evidências examináveis, aceita controle de erro, admite revisão e procura testes que possam contrariar suas próprias hipóteses.</p></div>
          <div class="mini-card"><strong>Pseudociência</strong><p>Imita a linguagem ou a aparência da ciência, mas tende a escapar de testes sérios, selecionar apenas confirmações favoráveis ou proteger alegações contra qualquer possibilidade real de refutação.</p></div>
        </div>

        <div class="note-box">
          <strong>Cuidado com um atalho.</strong>
          <p>Não existe uma pergunta de cinco segundos que identifique toda pseudociência em qualquer área. Avaliar uma alegação pode exigir conhecimento especializado sobre métodos, dados e histórico de pesquisa. “É falseável?” é uma pergunta útil, mas não resolve sozinha todo problema de demarcação.</p>
        </div>

        <h3>8. Caderno de investigação — segunda etapa</h3>
        <div class="field-box">
          <strong class="card-title">Volte à pergunta escolhida no capítulo 01</strong>
          <p>Agora acrescente cinco itens ao seu registro:</p>
          <ol>
            <li>Que parte da pergunta é <strong>factual</strong> e que parte envolve <strong>avaliação</strong> ou conceito?</li>
            <li>Que tipo de evidência seria relevante?</li>
            <li>Que fonte ou especialista teria competência para ajudar?</li>
            <li>Como você poderia buscar uma fonte independente?</li>
            <li>O que faria você <strong>revisar</strong> sua conclusão atual?</li>
          </ol>
          <p><strong>Regra:</strong> não procure apenas algo que confirme o que você já pensa. Registre pelo menos uma evidência ou objeção que poderia desafiar sua posição.</p>
        </div>

        <div class="chapter-checkpoint">
          <h3>Desafio final — “Está na internet, então é verdade?”</h3>
          <div class="challenge-box">
            <p>Uma postagem viral afirma: <strong>“Um cientista famoso disse isso; portanto está cientificamente provado.”</strong> A postagem não mostra artigo, dados, método nem fonte original.</p>
            <p>Construa uma análise curta que:</p>
            <ol>
              <li>diferencie <strong>autoridade</strong> de <strong>evidência</strong>;</li>
              <li>explique que informação ainda falta;</li>
              <li>proponha duas verificações independentes;</li>
              <li>diga que resultado faria você aceitar provisoriamente a afirmação;</li>
              <li>diga que resultado faria você rejeitá-la ou suspender o julgamento.</li>
            </ol>
            <details>
              <summary>Ver um caminho possível</summary>
              <p>Primeiro eu tentaria localizar a fala ou publicação original, verificar contexto e identificar se o autor possui competência relevante para aquela afirmação. Depois procuraria estudos, dados e fontes independentes que investiguem a mesma questão. O nome de uma pessoa pode aumentar ou diminuir a credibilidade inicial, mas não substitui o caminho da evidência. Se múltiplas pesquisas independentes, metodologicamente adequadas, convergissem, eu teria razão melhor para aceitar a conclusão provisoriamente. Se a frase estivesse fora de contexto, sem dados ou contradita por evidência mais forte, eu a rejeitaria ou manteria o julgamento suspenso.</p>
            </details>
          </div>
        </div>

        <details class="curriculum-box">
          <summary>Conexão com o percurso da 1ª série</summary>
          <p>Este capítulo articula conhecimento, verdade, ciência, senso comum, evidência, testemunho, método e revisão crítica. Ele prepara o capítulo 03, em que a pergunta deixa de ser “o que podemos saber?” e passa a ser “como devemos agir e por que somos responsáveis por nossas escolhas?”.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> acreditar não é o mesmo que saber; verdade não é criada pela intensidade da convicção; ciência não é infalibilidade nem opinião de especialistas. Conhecimento exige razões adequadas, e a força de uma conclusão cresce quando evidências, métodos, crítica e verificações independentes convergem — mantendo sempre a possibilidade racional de revisão.</div>
      `
    });
  }

  MBB.enableChapter?.('02 Conhecimento, verdade e ciência', showChapter);
})();