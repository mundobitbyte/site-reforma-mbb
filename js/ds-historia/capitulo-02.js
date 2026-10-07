(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Primeiras sociedades',
      technical:'África • origens humanas • Paleolítico • Neolítico • arqueologia • mobilidade • agricultura',
      title:'De onde vieram os seres humanos e como seus modos de vida mudaram?',
      objective:'<strong>Objetivo:</strong> compreender a origem africana de nossa espécie e analisar, a partir de evidências arqueológicas, como diferentes grupos humanos viveram, migraram, produziram alimentos e transformaram seus ambientes sem tratar a história humana como uma marcha simples de “atraso” para “progresso”.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Um lugar sem texto escrito pode ter História?</strong>
            <p>Imagine que arqueólogos encontrem ferramentas de pedra, restos de fogueiras, sementes carbonizadas, ossos de animais, pinturas e vestígios de antigas moradias — mas nenhum documento escrito.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que essas evidências permitem descobrir sobre as pessoas que viveram ali?</p>
          </div>
        </section>

        <h3>1. A história humana começa muito antes da escrita</h3>
        <p>Durante muito tempo, livros escolares usaram a palavra <strong>Pré-História</strong> para designar o período anterior ao aparecimento da escrita. A expressão ainda é usada como convenção, mas precisa de cuidado: sociedades sem escrita <strong>não estão fora da História</strong>.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Sem escrita não significa sem evidência</strong><p>Ferramentas, fósseis, sepultamentos, arte rupestre, restos de alimentos, construções, paisagens e tradições orais podem ser investigados historicamente.</p></div>
          <div class="mini-card"><strong>Escrita não surgiu em todo lugar ao mesmo tempo</strong><p>Usar a escrita como uma fronteira universal pode fazer sociedades diferentes parecerem “atrasadas” apenas porque desenvolveram outras formas de registrar e transmitir conhecimento.</p></div>
        </div>
        <div class="note-box"><strong>Uma periodização é uma ferramenta, não uma lei da natureza.</strong><p>Paleolítico, Neolítico, Antiguidade e outras divisões ajudam a organizar o estudo, mas seus limites variam conforme a região e a pergunta histórica.</p></div>

        ${choice('1','Periodização','Qual afirmação é historicamente mais cuidadosa?',[['a','Povos sem escrita não possuem História'],['b','A escrita é uma das formas de produzir registros; sociedades sem escrita também podem ser estudadas por outras evidências'],['c','Toda sociedade começou a escrever na mesma época']],'b','Correto. A investigação histórica pode usar fontes materiais, visuais, orais, ambientais e muitas outras.','Não confunda ausência de escrita com ausência de história ou de evidências.')}

        <h3>2. África: o continente central para compreender nossas origens</h3>
        <p>Fósseis, genética e outros vestígios mostram que a história evolutiva humana mais antiga está profundamente ligada à <strong>África</strong>. Nossa espécie, <em>Homo sapiens</em>, surgiu no continente africano há pelo menos cerca de 300 mil anos.</p>
        <p>Hoje, porém, é inadequado imaginar um único “ponto de nascimento” isolado para toda a espécie. Evidências recentes favorecem um quadro mais complexo, no qual <strong>populações africanas de diferentes regiões interagiram ao longo do tempo</strong>.</p>
        <div class="concept-box"><strong>Origem africana não significa uma história linear.</strong><p>Houve diferentes populações humanas, migrações, encontros, separações e misturas. A evolução humana se parece mais com uma árvore muito ramificada — e, em alguns momentos, com ramos que voltam a se encontrar — do que com uma fila de espécies substituindo umas às outras.</p></div>
        <div class="timeline">
          <div class="timeline-item"><strong>Milhões de anos</strong><p>Grande parte das etapas mais antigas da evolução humana conhecida ocorreu na África.</p></div>
          <div class="timeline-item"><strong>≥ 300 mil anos atrás</strong><p>Há fósseis de <em>Homo sapiens</em> na África com aproximadamente essa antiguidade.</p></div>
          <div class="timeline-item"><strong>Depois</strong><p>Populações de <em>Homo sapiens</em> se dispersaram para outras regiões e também interagiram com outros grupos humanos.</p></div>
        </div>

        ${choice('2','Origem humana','Qual frase representa melhor o conhecimento atual sobre a origem de Homo sapiens?',[['a','A espécie surgiu em um único ponto africano perfeitamente identificado e isolado'],['b','A espécie tem origem africana, provavelmente envolvendo populações de diferentes regiões que interagiram'],['c','A espécie surgiu primeiro na Europa e depois migrou para a África']],'b','Isso. A origem africana é fortemente sustentada, mas o quadro atual é mais complexo do que um único “berço” geográfico isolado.','A evidência sustenta origem africana, mas não uma narrativa simples de um único ponto isolado.')}

        <h3>3. Como sabemos alguma coisa sobre grupos tão antigos?</h3>
        <p>Retome o método do capítulo 01: uma conclusão histórica depende da pergunta e da combinação de fontes. Para períodos muito antigos, a arqueologia e outras ciências oferecem evidências fundamentais.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Fósseis</strong><p>Ossos e dentes ajudam a investigar anatomia, idade, saúde, dieta e relações evolutivas.</p></div>
          <div class="mini-card"><strong>Artefatos</strong><p>Ferramentas de pedra, pontas, recipientes e adornos mostram técnicas, escolhas e atividades.</p></div>
          <div class="mini-card"><strong>Vestígios ambientais</strong><p>Pólen, carvão, sementes, ossos de animais e sedimentos ajudam a reconstruir clima, alimentação e uso do espaço.</p></div>
          <div class="mini-card"><strong>Genética</strong><p>Comparações de DNA ajudam a investigar parentescos, migrações e encontros entre populações.</p></div>
        </div>
        <div class="method-box">
          <strong class="card-title">Da descoberta à interpretação</strong>
          <div class="method-grid">
            <div class="method-step"><span>1</span><strong>Localize</strong><p>Onde o vestígio foi encontrado e em que camada?</p></div>
            <div class="method-step"><span>2</span><strong>Date</strong><p>Que método permite estimar sua idade e qual a margem de incerteza?</p></div>
            <div class="method-step"><span>3</span><strong>Relacione</strong><p>Que outros vestígios aparecem juntos?</p></div>
            <div class="method-step"><span>4</span><strong>Limite a conclusão</strong><p>O que a evidência sustenta e o que ainda é hipótese?</p></div>
          </div>
        </div>

        ${choice('3','Evidência arqueológica','Um sítio contém sementes carbonizadas e pedras de moagem. Qual conclusão é mais cuidadosa?',[['a','Prova que todas as pessoas do local eram agricultoras'],['b','Sugere processamento de vegetais; outras evidências são necessárias para saber se havia cultivo'],['c','Prova a existência de escrita']],'b','Correto. Os vestígios sustentam uma hipótese sobre processamento de plantas, mas cultivo exige evidências adicionais.','Uma evidência pode sugerir práticas sem provar, sozinha, todo o modo de vida do grupo.')}

        <h3>4. Paleolítico: mobilidade, conhecimento e adaptação</h3>
        <p>O termo <strong>Paleolítico</strong> (“pedra antiga”) é uma grande categoria arqueológica associada a períodos em que ferramentas de pedra lascada aparecem com frequência. Ela cobre um intervalo enorme e diferentes espécies humanas; por isso não deve ser tratada como uma sociedade única.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Obter alimento</strong><p>Caça, coleta, pesca e aproveitamento de recursos variavam conforme ambiente, estação e conhecimento local.</p></div>
          <div class="mini-card"><strong>Mobilidade</strong><p>Muitos grupos se deslocavam periodicamente. Isso podia ser uma estratégia planejada para acompanhar água, plantas, animais, clima e redes sociais.</p></div>
          <div class="mini-card"><strong>Tecnologia</strong><p>Ferramentas de pedra, madeira, osso e fibras exigiam conhecimento de materiais e técnicas transmitidas entre gerações.</p></div>
          <div class="mini-card"><strong>Vida simbólica</strong><p>Sepultamentos, pigmentos, adornos e arte mostram que não podemos reduzir esses grupos apenas à busca imediata por alimento.</p></div>
        </div>
        <div class="note-box"><strong>Evite a palavra “primitivo” como sinônimo de incapaz.</strong><p>Grupos caçadores-coletores desenvolveram conhecimentos sofisticados sobre plantas, animais, territórios, estações e técnicas. Mobilidade não é ausência de organização.</p></div>

        ${choice('4','Mobilidade','Por que chamar grupos móveis de “pessoas que vagavam sem rumo” é uma simplificação ruim?',[['a','Porque deslocamentos podiam seguir recursos, estações, rotas conhecidas e relações sociais'],['b','Porque todos eram agricultores sedentários'],['c','Porque mobilidade só existiu depois das cidades']],'a','Isso. A mobilidade podia ser estratégica e depender de profundo conhecimento do ambiente.','Deslocar-se não significa mover-se ao acaso; muitas rotas estavam relacionadas a recursos e redes sociais.')}

        <h3>5. Neolítico: produzir alimentos transformou possibilidades — não de uma vez nem em todo lugar</h3>
        <p>Nas últimas dezenas de milhares de anos, e especialmente em diferentes regiões durante aproximadamente os últimos 12 mil anos, algumas populações passaram a <strong>cultivar plantas e manejar ou domesticar animais</strong>. Essas mudanças são associadas ao Neolítico em muitas regiões.</p>
        <p>Às vezes se fala em “Revolução Neolítica”. O termo destaca transformações profundas, mas pode dar a impressão de uma mudança rápida e mundial. Na realidade, <strong>agricultura e domesticação surgiram em tempos e lugares diferentes</strong>, e muitas sociedades combinaram cultivo, pastoreio, caça, pesca e coleta.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Produção e armazenamento</strong><p>Em alguns contextos, produzir excedentes permitiu guardar alimentos e sustentar grupos maiores por mais tempo num mesmo lugar.</p></div>
          <div class="mini-card"><strong>Assentamentos</strong><p>Algumas comunidades se tornaram mais sedentárias; outras mantiveram mobilidade parcial ou sazonal.</p></div>
          <div class="mini-card"><strong>Novas relações sociais</strong><p>Divisão de tarefas, propriedade, troca, autoridade e desigualdade puderam se transformar — mas não de maneira automática ou igual em toda sociedade.</p></div>
        </div>
        <div class="note-box"><strong>Agricultura não deve ser narrada como “subir um degrau”.</strong><p>Ela criou novas possibilidades, mas também novos riscos: dependência de colheitas, trabalho intenso, conflitos por terra e água, exposição a doenças e diferenças sociais. Diferentes modos de vida continuaram coexistindo.</p></div>

        ${choice('5','Neolítico','Qual frase evita uma visão simplista do Neolítico?',[['a','A agricultura surgiu uma única vez e substituiu imediatamente caça e coleta no mundo inteiro'],['b','A produção de alimentos apareceu em diferentes regiões e se combinou de modos variados com mobilidade, coleta, caça e pastoreio'],['c','Agricultura sempre eliminou desigualdades']],'b','Correto. As transições foram diversas, graduais e regionais.','Não houve um único calendário mundial nem uma substituição instantânea de todos os modos de vida.')}

        <h3>6. Sedentarização, aldeias e transformação do ambiente</h3>
        <p>Quando uma comunidade permanece mais tempo num lugar, surgem novas possibilidades: construções duráveis, áreas de armazenamento, manejo de água, espaços coletivos e redes de troca mais estáveis. Mas sedentarização e agricultura não são exatamente a mesma coisa: há exemplos de maior permanência antes da agricultura e de grupos produtores de alimentos que continuaram móveis.</p>
        <div class="example-box"><strong class="card-title">Causa única? Quase nunca.</strong><p>Uma aldeia maior pode resultar de uma combinação de disponibilidade de água, plantas domesticadas, segurança, redes de troca, condições climáticas, decisões culturais e relações de poder. A História procura conexões, não uma explicação mágica que sirva para todos os lugares.</p></div>
        <p>Além de se adaptar ao ambiente, seres humanos também o transformaram: queimadas controladas, cultivo, pastoreio, construção de canais, retirada de madeira e seleção de espécies modificaram paisagens ao longo do tempo.</p>

        ${choice('6','Causa histórica','Ao explicar a formação de aldeias mais permanentes, qual abordagem é melhor?',[['a','Buscar uma única causa universal'],['b','Analisar combinação de ambiente, tecnologia, alimentação, relações sociais e decisões locais'],['c','Assumir que todas as aldeias surgiram no mesmo século']],'b','Isso. Processos históricos complexos costumam resultar de fatores que interagem de formas diferentes em cada contexto.','Evite explicações universais de causa única para processos que variaram muito entre regiões.')}

        <h3>7. O que mudou — e o que permaneceu?</h3>
        <div class="evidence-grid">
          <div class="mini-card"><strong>Mudanças possíveis</strong><p>Produção de alimentos, novas ferramentas, armazenamento, assentamentos maiores, manejo mais intenso da paisagem e novas formas de organização.</p></div>
          <div class="mini-card"><strong>Permanências e combinações</strong><p>Caça, coleta, pesca, mobilidade sazonal, conhecimentos ambientais e redes de parentesco continuaram importantes em muitas sociedades.</p></div>
        </div>
        <div class="ok-box"><strong>Não existe uma linha única da humanidade.</strong><p>Em diferentes épocas e regiões, grupos humanos fizeram escolhas variadas e viveram combinações diferentes de mobilidade, produção de alimentos, caça, coleta, pastoreio e troca.</p></div>

        <h3>8. Laboratório de evidências: o que este sítio permite afirmar?</h3>
        <div class="source-box">
          <span class="source-label">Conjunto arqueológico didático simulado — não representa um sítio real específico</span>
          <p><strong>Camada estudada:</strong> fundações de pequenas construções, várias pedras de moagem, sementes carbonizadas de uma mesma espécie vegetal, ossos de animais de diferentes idades e cavidades usadas para armazenamento.</p>
          <p><strong>Outro dado:</strong> ainda não há evidência de escrita nessa camada.</p>
        </div>
        <div class="method-box">
          <strong class="card-title">Construa uma hipótese sem ultrapassar as evidências</strong>
          <div class="method-grid">
            <div class="method-step"><span>1</span><strong>Observe</strong><p>Quais vestígios aparecem juntos?</p></div>
            <div class="method-step"><span>2</span><strong>Relacione</strong><p>Que atividades eles podem indicar?</p></div>
            <div class="method-step"><span>3</span><strong>Evite exageros</strong><p>O que não pode ser provado apenas com esses dados?</p></div>
            <div class="method-step"><span>4</span><strong>Peça novas fontes</strong><p>Que análises ou vestígios ajudariam a testar a hipótese?</p></div>
          </div>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — explique a transformação</h3>
          <div class="challenge-box">
            <strong>Desafio: escreva uma conclusão provisória</strong>
            <p>Com base apenas no conjunto arqueológico simulado, escreva de três a cinco frases sobre o modo de vida possível desse grupo. Depois indique <strong>uma conclusão que você não poderia afirmar</strong> e uma nova evidência que gostaria de encontrar.</p>
            <details><summary>O que uma boa resposta precisa conter?</summary><p>Ela pode sugerir maior permanência no local, processamento e possível cultivo de plantas, armazenamento e manejo de animais, mas deve reconhecer que os vestígios sozinhos não provam como toda a sociedade se organizava nem permitem afirmar que caça e coleta haviam desaparecido. Novas evidências poderiam incluir análise dos ossos, pólen, restos de plantas, ferramentas, áreas de descarte, datações e comparação com outros sítios.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo desenvolve África como referência fundamental para a história da humanidade, Paleolítico e Neolítico, diferentes formas de organização e ocupação do espaço, relações entre sociedade e natureza e investigação por fontes materiais e arqueológicas. Também reforça diversidade cultural e evita interpretar sociedades humanas por uma escala única de “atraso” e “progresso”.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> nossa espécie tem origem africana, e as primeiras sociedades humanas foram diversas. Mobilidade, caça, coleta, agricultura, pastoreio e sedentarização não formam degraus obrigatórios: são estratégias e processos históricos que variaram conforme ambiente, conhecimento, relações sociais e escolhas humanas.</div>
      `
    });
  }

  MBB.enableChapter?.('02 África', showChapter);
})();
