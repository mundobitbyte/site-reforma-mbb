(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Primeiras sociedades',
      technical:'Mesopotâmia • Egito • rios • agricultura • cidades • Estado • escrita • desigualdade',
      title:'Por que algumas das primeiras grandes sociedades cresceram junto aos rios?',
      objective:'<strong>Objetivo:</strong> comparar Mesopotâmia e Egito relacionando ambiente, agricultura, trabalho, poder, escrita, religião e desigualdades, sem tratar os rios como causa única do surgimento de cidades e Estados.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Um rio cria uma civilização sozinho?</strong>
            <p>Imagine duas regiões com grandes rios. As duas têm água e terras férteis em parte do ano. Mesmo assim, uma pode desenvolver cidades, redes de irrigação, governos e escrita em ritmos e formas diferentes da outra.</p>
            <p class="central-question"><strong>Pergunta central:</strong> se o rio é importante, por que ele não explica sozinho o surgimento de sociedades complexas?</p>
          </div>
        </section>

        <h3>1. O ambiente cria possibilidades e problemas; as sociedades constroem respostas</h3>
        <p>Mesopotâmia e Egito se desenvolveram em regiões onde grandes rios favoreciam agricultura em áreas cercadas por ambientes mais secos. Água, sedimentos e rotas de circulação foram importantes, mas não produziram automaticamente cidades ou Estados.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Possibilidade</strong><p>Água para pessoas, animais e cultivos; solos aluviais férteis; transporte e circulação.</p></div>
          <div class="mini-card"><strong>Problema</strong><p>Cheias, secas, canais que exigem manutenção, disputas pelo uso da água e necessidade de armazenar alimentos.</p></div>
          <div class="mini-card"><strong>Resposta social</strong><p>Cooperação, trabalho organizado, técnicas, instituições, regras e também conflitos e desigualdades.</p></div>
        </div>
        <div class="note-box"><strong>Evite o determinismo geográfico.</strong><p>Dizer “o rio criou a civilização” apaga decisões humanas, relações de poder, conhecimentos técnicos, conflitos e diferenças regionais. O ambiente influencia; não escreve sozinho a História.</p></div>

        ${choice('1','Rios e sociedades','Qual explicação é historicamente mais adequada?',[['a','Grandes rios produzem automaticamente Estados centralizados'],['b','Rios criam condições e desafios que podem ser organizados de formas diferentes por cada sociedade'],['c','O ambiente não tem qualquer importância histórica']],'b','Correto. Ambiente e sociedade interagem; não existe uma relação automática entre rio e forma política.','Nem determinismo ambiental nem desprezo pelo ambiente: o importante é analisar como sociedades responderam a condições concretas.')}

        <h3>2. Mesopotâmia: entre Tigre e Eufrates</h3>
        <p><strong>Mesopotâmia</strong> significa, em grego, “terra entre rios”. O nome é usado para uma ampla região do Oriente Próximo associada principalmente aos rios Tigre e Eufrates, onde diferentes povos e Estados existiram ao longo de milhares de anos.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Não era um único país</strong><p>Sumérios, acádios, babilônios, assírios e outros grupos participaram de histórias diferentes na região. Cidades como Uruk, Ur e Babilônia tiveram papéis importantes em períodos distintos.</p></div>
          <div class="mini-card"><strong>Água precisava ser administrada</strong><p>Em várias áreas, canais e diques ajudavam a levar água aos campos e controlar parte das cheias. Essas obras exigiam manutenção, coordenação e decisões sobre quem usaria a água.</p></div>
        </div>
        <p>Nas planícies do sul mesopotâmico, algumas das primeiras grandes cidades conhecidas cresceram a partir do IV milênio a.C. Mas urbanização foi um processo: aldeias, centros maiores, redes de troca, templos, trabalho especializado e autoridades se transformaram ao longo do tempo.</p>
        <div class="concept-box"><strong>Cidade não é apenas “muita gente junta”.</strong><p>Concentração populacional, especialização de atividades, espaços religiosos e administrativos, trocas, armazenamento e relações políticas ajudam a distinguir processos de urbanização de simples crescimento de uma aldeia.</p></div>

        <h3>3. Egito: o Nilo e uma longa faixa habitável</h3>
        <p>No nordeste da África, o vale e o delta do <strong>Nilo</strong> concentravam áreas cultiváveis em meio a extensas zonas áridas. Durante milênios, o ciclo anual do rio ajudou a renovar solos e organizar ritmos agrícolas.</p>
        <p>Isso não significa que o Nilo “deu” sozinho origem ao Egito. Comunidades precisaram desenvolver formas de cultivo, armazenamento, transporte, medição, administração e poder. A unificação política do Egito ocorreu por volta do fim do IV milênio a.C., e a história egípcia também teve períodos de fragmentação, disputas e mudanças.</p>
        <div class="note-box"><strong>“O Egito é uma dádiva do Nilo” é uma frase famosa, mas incompleta.</strong><p>Ela destaca a importância ambiental do rio, porém pode esconder o trabalho humano e a organização social necessários para transformar água e solo em produção, cidades, monumentos e poder político.</p></div>

        ${choice('2','Comparação','Qual comparação é mais cuidadosa?',[['a','Mesopotâmia e Egito eram praticamente a mesma sociedade porque dependiam de rios'],['b','Ambas usaram grandes sistemas fluviais, mas desenvolveram trajetórias políticas, religiosas e urbanas próprias'],['c','Apenas o Egito praticava agricultura']],'b','Isso. Comparar não significa apagar diferenças; condições parecidas podem gerar trajetórias distintas.','Os rios permitem uma comparação importante, mas não tornam as duas sociedades equivalentes.')}

        <h3>4. Produzir excedentes muda possibilidades — mas também relações sociais</h3>
        <p>Quando comunidades conseguem produzir e armazenar alimentos além do consumo imediato, parte da população pode dedicar mais tempo a outras atividades: artesanato, comércio, construção, administração, guerra ou funções religiosas.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Especialização</strong><p>Oleiros, escribas, construtores, comerciantes, soldados e administradores aparecem em diferentes contextos.</p></div>
          <div class="mini-card"><strong>Armazenamento</strong><p>Guardar grãos exige espaços, registros, proteção e decisões sobre distribuição.</p></div>
          <div class="mini-card"><strong>Tributos e trabalho</strong><p>Governos e instituições podem recolher produtos, organizar obras e exigir trabalho.</p></div>
          <div class="mini-card"><strong>Desigualdade</strong><p>Acesso desigual à terra, alimentos, cargos, riqueza e prestígio pode se ampliar.</p></div>
        </div>
        <div class="note-box"><strong>Excedente não produz automaticamente desigualdade extrema.</strong><p>Ele cria novas possibilidades de organização. A maneira como recursos são controlados, distribuídos e legitimados depende de instituições e disputas históricas.</p></div>

        ${choice('3','Excedente','Por que o armazenamento de alimentos pode se tornar uma questão política?',[['a','Porque armazenar elimina qualquer disputa social'],['b','Porque decidir quem coleta, controla e distribui recursos envolve poder'],['c','Porque alimentos armazenados não têm valor social']],'b','Correto. Controle de estoques, tributos e distribuição pode concentrar autoridade e gerar conflitos.','Recursos materiais e decisões sobre sua distribuição estão ligados a relações de poder.')}

        <h3>5. Templos, palácios e governos: poder precisava ser organizado e legitimado</h3>
        <p>Na Mesopotâmia, templos e palácios participaram de atividades religiosas, econômicas e políticas em diferentes períodos. Cidades-Estado podiam ter seus próprios governantes, divindades tutelares, territórios e rivalidades.</p>
        <p>No Egito, a monarquia faraônica desenvolveu uma forte associação entre autoridade política e ordem religiosa. O faraó ocupava posição central na organização do Estado, mas o governo dependia de funcionários, escribas, administradores locais, trabalhadores e instituições.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Mesopotâmia</strong><p>História marcada por várias cidades e reinos, alternância de centros de poder, conquistas e impérios.</p></div>
          <div class="mini-card"><strong>Egito</strong><p>Longos períodos de centralização monárquica, intercalados por fases de fragmentação e reunificação.</p></div>
        </div>
        <div class="concept-box"><strong>Religião e política estavam profundamente conectadas.</strong><p>Isso não quer dizer que “religião era apenas uma ferramenta de manipulação”. Crenças faziam parte da própria forma como muitas pessoas compreendiam ordem, natureza, autoridade, morte e comunidade.</p></div>

        <h3>6. A escrita não nasceu para escrever livros escolares</h3>
        <p>Na Mesopotâmia, sistemas de escrita cuneiforme se desenvolveram a partir do fim do IV milênio a.C. e foram usados para registros administrativos, contratos, listas, cartas, literatura, leis e muitos outros fins.</p>
        <p>No Egito, hieróglifos aparecem desde o fim do IV milênio a.C.; outras formas de escrita egípcia foram usadas em papiros, administração e atividades cotidianas. Monumentos, tumbas e templos também traziam inscrições.</p>
        <div class="source-box">
          <span class="source-label">Exercício didático — descrição, não reprodução de uma fonte específica</span>
          <p><strong>Imagine uma tabuinha registrando entregas de cevada:</strong> nomes, quantidades e destino do produto aparecem organizados em colunas.</p>
          <p class="source-meta">Uma fonte desse tipo permite investigar administração e circulação de recursos, mas não revela sozinha o que toda a população pensava sobre o sistema.</p>
        </div>
        <p>A escrita aumentou a capacidade de registrar informações à distância e ao longo do tempo, mas não substituiu oralidade, memória, imagens e objetos. E saber escrever era uma habilidade restrita a grupos específicos em muitos períodos.</p>

        ${choice('4','Escrita como fonte','Uma lista de tributos registra dezenas de entregas de grãos. O que ela permite afirmar com mais segurança?',[['a','Que todos os habitantes eram alfabetizados'],['b','Que existia algum sistema de registro e administração dessas entregas'],['c','Que não havia comércio']],'b','Correto. O documento sustenta a existência de práticas de registro e administração; outras conclusões exigem outras fontes.','Use a fonte para responder apenas ao que ela realmente sustenta.')}

        <h3>7. Leis escritas não significam igualdade perante a lei como entendemos hoje</h3>
        <p>Conjuntos legais mesopotâmicos, como o associado ao rei Hammurabi no século XVIII a.C., são fontes valiosas para estudar autoridade, propriedade, família, trabalho, punições e diferenças de status.</p>
        <p>Mas é preciso cuidado: um texto legal mostra normas e ideais de governo; ele não prova que todas as regras eram cumpridas do mesmo modo em cada situação. Além disso, as próprias penalidades podiam variar conforme posição social e gênero.</p>
        <div class="note-box"><strong>Lei escrita é fonte sobre poder, não fotografia perfeita da sociedade.</strong><p>Para entender práticas reais, historiadores comparam leis com contratos, cartas, julgamentos, registros econômicos, arqueologia e outras evidências.</p></div>

        ${choice('5','Lei e prática','Por que um código legal não basta para reconstruir sozinho a vida cotidiana?',[['a','Porque leis não são fontes históricas'],['b','Porque normas mostram o que se pretendia regular, mas prática social pode divergir e precisa de outras evidências'],['c','Porque toda lei antiga era inventada por historiadores modernos']],'b','Isso. Textos legais são fontes fundamentais, mas precisam ser comparados com práticas e outros registros.','A existência de uma regra não prova automaticamente como ela era aplicada em cada caso.')}

        <h3>8. Monumentos também são argumentos sobre poder</h3>
        <p>Pirâmides, templos, palácios, muralhas, estelas e grandes obras exigiram materiais, planejamento e trabalho. Além de funções práticas ou religiosas, elas podiam comunicar força, continuidade, devoção e autoridade.</p>
        <div class="two-col">
          <div class="mini-card"><strong>O monumento mostra</strong><p>Capacidade de mobilizar recursos, técnicas construtivas, símbolos, prioridades e formas de representar poder.</p></div>
          <div class="mini-card"><strong>O monumento não mostra sozinho</strong><p>Como cada trabalhador viveu a obra, como todos os grupos percebiam o governante ou qual foi o custo social exato da construção.</p></div>
        </div>
        <p>Por isso, uma pirâmide não deve ser lida apenas como “prova de grandeza”. Ela também convida a investigar trabalho, administração, crenças funerárias, distribuição de recursos e organização social.</p>

        ${choice('6','Monumentos','Qual pergunta histórica é mais produtiva diante de uma grande construção antiga?',[['a','É bonita ou feia?'],['b','Que recursos, conhecimentos, trabalhadores e relações de poder tornaram a obra possível?'],['c','Se é grande, então todos apoiavam o governante']],'b','Correto. Monumentos podem ser investigados como resultado de trabalho, técnica, crença e poder.','Tamanho não prova consenso; investigue as condições históricas da construção.')}

        <h3>9. Comparar Mesopotâmia e Egito sem transformar diferenças em caricaturas</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Questão</th><th>Mesopotâmia</th><th>Egito</th></tr></thead>
          <tbody>
            <tr><td>Rios principais</td><td>Tigre e Eufrates</td><td>Nilo</td></tr>
            <tr><td>Organização política</td><td>Diversas cidades, reinos e impérios em diferentes períodos</td><td>Longos períodos de monarquia centralizada, com fases de fragmentação</td></tr>
            <tr><td>Escrita</td><td>Cuneiforme em diferentes línguas e usos</td><td>Hieróglifos e outras formas de escrita egípcia</td></tr>
            <tr><td>Ambiente</td><td>Planícies aluviais, irrigação e cheias com dinâmicas próprias</td><td>Vale e delta do Nilo, ciclo fluvial decisivo para agricultura</td></tr>
            <tr><td>O que não devemos concluir</td><td colspan="2">Que ambiente determinou sozinho política, religião, tecnologia ou desigualdade.</td></tr>
          </tbody>
        </table></div>
        <div class="ok-box"><strong>Comparar é procurar relações e diferenças.</strong><p>O objetivo não é decidir qual sociedade era “mais avançada”, e sim compreender como cada uma combinou ambiente, trabalho, instituições, crenças, escrita e poder.</p></div>

        <h3>10. Laboratório de evidências: por que esta cidade cresceu?</h3>
        <div class="source-box">
          <span class="source-label">Conjunto didático simulado — não são documentos históricos reais</span>
          <p><strong>Vestígio A:</strong> canais antigos ligam áreas de cultivo a um rio.</p>
          <p><strong>Vestígio B:</strong> depósitos contêm grandes quantidades de grãos e selos administrativos.</p>
          <p><strong>Vestígio C:</strong> oficinas mostram produção especializada de cerâmica e metal.</p>
          <p><strong>Vestígio D:</strong> inscrições registram entregas de produtos a uma instituição.</p>
          <p><strong>Vestígio E:</strong> casas têm tamanhos muito diferentes.</p>
          <p class="source-meta">O conjunto foi inventado para treinar relações entre evidências; não representa um sítio arqueológico específico.</p>
        </div>
        <div class="method-box"><strong class="card-title">Não escolha uma causa única</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Ambiente</strong><p>Que papel água e solo tiveram?</p></div>
          <div class="method-step"><span>2</span><strong>Economia</strong><p>Há produção, armazenamento e especialização?</p></div>
          <div class="method-step"><span>3</span><strong>Poder</strong><p>Quem registra, controla ou redistribui recursos?</p></div>
          <div class="method-step"><span>4</span><strong>Sociedade</strong><p>Há indícios de diferenças de riqueza ou status?</p></div>
        </div></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — construa uma explicação histórica</h3>
          <div class="challenge-box">
            <strong>Desafio: o rio foi importante, mas não trabalhou sozinho</strong>
            <p>Usando pelo menos quatro dos vestígios simulados, explique em 4 a 6 frases por que a cidade pode ter crescido e por que seria inadequado dizer apenas “ela cresceu porque ficava perto de um rio”.</p>
            <details><summary>O que uma boa resposta precisa conter?</summary><p>Deve relacionar água/agricultura com canais; armazenamento e administração com depósitos e registros; especialização com oficinas; e possíveis desigualdades com diferenças entre moradias. A conclusão deve mostrar interação entre ambiente, trabalho, organização econômica e poder, sem transformar qualquer vestígio isolado em causa total.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha Mesopotâmia e Egito articulando tempo e espaço, território, relações entre sociedade e natureza, política, trabalho, cultura, produção material e análise de fontes. A comparação prepara o estudo das diferentes formas de organização política e cidadania nos próximos capítulos.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> rios foram fundamentais para Mesopotâmia e Egito, mas sociedades complexas surgiram da interação entre ambiente, conhecimentos, produção, trabalho, instituições, crenças, conflitos e relações de poder.</div>
      `
    });
  }

  MBB.enableChapter?.('03 Mesopotâmia', showChapter);
})();
