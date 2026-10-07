(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Poder e Estados',
      technical:'Estados nacionais • centralização monárquica • Portugal • Espanha • França • Inglaterra • Absolutismo • Antigo Regime',
      title:'Como reis conseguiram concentrar tanto poder?',
      objective:'<strong>Objetivo:</strong> compreender a formação de monarquias territoriais mais centralizadas na Europa Ocidental e analisar o Absolutismo e o Antigo Regime como processos históricos marcados por administração, impostos, guerras, privilégios e limites ao poder real.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Um rei manda porque usa uma coroa?</strong>
            <p>Imagine um governante que deseja cobrar impostos em todo o território, manter soldados, aplicar leis, nomear funcionários e impedir que nobres locais decidam tudo sozinhos. A coroa não resolve nenhum desses problemas automaticamente.</p>
            <p class="central-question"><strong>Pergunta central:</strong> que estruturas transformam a autoridade de um rei em poder realmente exercido sobre um território?</p>
          </div>
        </section>

        <h3>1. Centralizar poder foi um processo, não um botão</h3>
        <p>Entre o fim da Idade Média e a Época Moderna, várias monarquias europeias ampliaram sua capacidade de governar territórios. Isso envolveu guerras, alianças, impostos, tribunais, funcionários, diplomacia e negociação com grupos locais.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Impostos</strong><p>Sem receitas regulares, manter exércitos, cortes e funcionários era difícil.</p></div>
          <div class="mini-card"><strong>Administração</strong><p>Conselhos, tribunais, oficiais e registros permitiam fazer decisões chegarem a diferentes regiões.</p></div>
          <div class="mini-card"><strong>Força militar</strong><p>Exércitos e fortificações ampliavam a capacidade de defender fronteiras e impor decisões.</p></div>
          <div class="mini-card"><strong>Legitimidade</strong><p>Religião, tradição dinástica, cerimônias e leis ajudavam a justificar a autoridade.</p></div>
        </div>
        <div class="note-box"><strong>“Estado nacional” exige cuidado.</strong><p>Essas monarquias ajudaram a formar Estados territoriais, mas não eram Estados-nação democráticos como os atuais. Identidades locais, línguas, privilégios e instituições regionais continuavam fortes.</p></div>

        ${choice('1','Centralização','Qual situação mostra melhor uma monarquia aumentando sua capacidade de governo?',[['a','O rei usa uma coroa mais luxuosa'],['b','O governo amplia arrecadação, tribunais, funcionários e força militar sobre o território'],['c','Todas as comunidades passam a ter a mesma cultura imediatamente']],'b','Correto. Centralização depende de instituições e recursos, não apenas de símbolos.','Símbolos importam, mas exercer poder exige estruturas administrativas, fiscais e militares.')}

        <h3>2. Portugal: uma monarquia territorial relativamente precoce</h3>
        <p>Portugal consolidou sua monarquia durante a expansão cristã na Península Ibérica e estabilizou fronteiras com Castela ainda na Idade Média. A Coroa, nobres, municípios e Igreja negociavam poderes e recursos; portanto, centralização não significava eliminar todas as autonomias.</p>
        <p>Nos séculos seguintes, a monarquia portuguesa fortaleceu administração, tributação e capacidade marítima. Isso ajudaria a sustentar a expansão ultramarina, mas essa história será tratada apenas quando for necessária ao currículo — aqui o foco é a construção do poder régio.</p>

        <h3>3. Espanha: união dinástica não significou uniformidade imediata</h3>
        <p>O casamento de Isabel de Castela e Fernando de Aragão, no século XV, aproximou duas grandes coroas da Península Ibérica. Porém, Castela e Aragão continuaram mantendo leis, instituições e tradições próprias.</p>
        <div class="concept-box"><strong>Uma coroa pode governar territórios diferentes sem torná-los iguais.</strong><p>Monarquias da Época Moderna eram frequentemente compostas: o mesmo soberano podia governar regiões com impostos, tribunais e privilégios distintos.</p></div>

        ${choice('2','União dinástica','Por que é simplista dizer que o casamento dos Reis Católicos criou instantaneamente uma Espanha totalmente unificada?',[['a','Porque Castela e Aragão continuaram com instituições e regras próprias'],['b','Porque não existiam monarquias na Península Ibérica'],['c','Porque todas as fronteiras desapareceram na Europa']],'a','Isso. A união dinástica aproximou coroas, mas não apagou imediatamente suas estruturas políticas próprias.','Centralização e unificação são processos graduais e incompletos.')}

        <h3>4. França e Inglaterra seguiram caminhos diferentes</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>França</strong><p>Após conflitos prolongados, inclusive a Guerra dos Cem Anos, a monarquia ampliou tributação, forças militares e administração. Nos séculos seguintes, o poder régio se tornou referência clássica de centralização.</p></div>
          <div class="mini-card"><strong>Inglaterra</strong><p>A monarquia também se fortaleceu, especialmente sob os Tudor, mas conviveu com instituições como o Parlamento e tradições jurídicas que criavam uma relação diferente entre Coroa e representação política.</p></div>
        </div>
        <div class="ok-box"><strong>Não existe uma única receita para formar um Estado.</strong><p>Portugal, Espanha, França e Inglaterra combinaram guerras, acordos, dinastias, instituições e recursos de maneiras diferentes.</p></div>

        ${choice('3','Comparação','O que aprendemos comparando França e Inglaterra?',[['a','Todos os Estados europeus seguiram exatamente o mesmo caminho'],['b','Centralização ocorreu por trajetórias diferentes e conviveu com instituições distintas'],['c','Parlamentos e monarquias nunca coexistiram']],'b','Correto. Comparação histórica serve justamente para perceber padrões e diferenças.','Evite transformar um caso, como a França de Luís XIV, em modelo automático de toda a Europa.')}

        <h3>5. Absolutismo: concentração forte não significa poder sem qualquer limite</h3>
        <p>Chamamos de <strong>Absolutismo</strong> formas de monarquia nas quais o soberano reivindicava ampla autoridade para legislar, governar, administrar justiça e conduzir guerra e diplomacia sem depender de um parlamento soberano nos moldes atuais.</p>
        <p>Mas “absoluto” não significa que o rei conseguia fazer qualquer coisa que desejasse. Costumes, leis fundamentais, privilégios de ordens e regiões, recursos financeiros, tribunais, elites e resistências colocavam limites concretos à ação real.</p>
        <div class="note-box"><strong>O ideal de poder e o poder praticado não são idênticos.</strong><p>Uma teoria pode apresentar o rei como autoridade máxima; a investigação histórica pergunta até onde suas ordens eram realmente executadas e com quem ele precisava negociar.</p></div>

        ${choice('4','Absolutismo','Qual definição é mais cuidadosa?',[['a','Absolutismo significa que o rei tinha poder mágico e ilimitado na prática'],['b','É uma forte concentração e reivindicação de autoridade monárquica, exercida dentro de estruturas e limites históricos concretos'],['c','É sinônimo de democracia representativa']],'b','Isso. O conceito descreve concentração de autoridade, mas não elimina instituições, costumes, recursos escassos ou resistências.','Diferencie a pretensão política do soberano da capacidade real de executar tudo sem limites.')}

        <h3>6. Luís XIV virou símbolo porque tornou o poder visível</h3>
        <p>Na França do século XVII, Luís XIV tornou-se uma referência do absolutismo. Governo, corte, cerimônias, administração e a residência régia em Versailles ajudaram a projetar a imagem de uma monarquia poderosa e central.</p>
        <div class="source-box">
          <span class="source-label">Leitura de evidência — representação do poder</span>
          <p>Imagine analisar um retrato oficial do rei com roupas de coroação, símbolos dinásticos e cenário cuidadosamente organizado.</p>
          <p class="source-meta">A pergunta histórica não é apenas “como ele se vestia?”, mas “que imagem de autoridade o retrato pretende construir?”.</p>
        </div>
        <p>Representação não é detalhe decorativo. Cerimônias, arquitetura, arte e etiqueta de corte também organizavam hierarquias e comunicavam quem estava próximo ou distante do poder.</p>

        ${choice('5','Representação','O que um retrato oficial de um monarca permite investigar melhor?',[['a','A imagem de autoridade que o governo desejava comunicar'],['b','Se todos os súditos aprovavam o rei'],['c','Tudo o que ocorreu durante o reinado']],'a','Correto. Um retrato oficial é excelente fonte para estudar representação e legitimidade, mas não mede sozinho apoio social.','Pergunte quem produziu a imagem, para qual público e com que finalidade.')}

        <h3>7. Antigo Regime: sociedade de privilégios e desigualdade jurídica</h3>
        <p>A expressão <strong>Antigo Regime</strong> está especialmente ligada à França anterior à Revolução de 1789. Ela reúne estruturas políticas e sociais marcadas por monarquia, privilégios e uma sociedade organizada juridicamente em ordens ou estados.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Clero</strong><p>Possuía funções religiosas e privilégios próprios, embora internamente fosse socialmente diverso.</p></div>
          <div class="mini-card"><strong>Nobreza</strong><p>Reunia grupos com privilégios, títulos e relações distintas com propriedade, cargos e corte.</p></div>
          <div class="mini-card"><strong>Terceiro Estado</strong><p>Incluía uma enorme variedade: burgueses, artesãos, trabalhadores urbanos e principalmente camponeses.</p></div>
        </div>
        <div class="concept-box"><strong>Desigualdade não era apenas econômica.</strong><p>Diferentes grupos podiam ter direitos, deveres fiscais, acesso a cargos e tratamentos jurídicos distintos. A ideia contemporânea de igualdade de todos perante a lei ainda não estruturava aquela sociedade.</p></div>

        ${choice('6','Antigo Regime','Por que dizer apenas “ricos contra pobres” não explica bem a sociedade do Antigo Regime?',[['a','Porque além da riqueza havia ordens, privilégios jurídicos, impostos e posições sociais diferentes'],['b','Porque não existiam desigualdades'],['c','Porque todos pertenciam à nobreza']],'a','Correto. Riqueza importa, mas a estrutura de privilégios e ordens também organizava direitos e obrigações.','A sociedade era desigual econômica e juridicamente, e cada ordem também tinha diferenças internas.')}

        <h3>8. Laboratório MbB: o rei é mesmo “absoluto”?</h3>
        <div class="source-box">
          <span class="source-label">Conjunto didático simulado — não são documentos históricos reais</span>
          <p><strong>A:</strong> um decreto afirma que o rei tem autoridade para criar um novo imposto.</p>
          <p><strong>B:</strong> uma carta de um funcionário relata dificuldade para cobrar o imposto em determinada província.</p>
          <p><strong>C:</strong> um registro mostra que um grupo possui isenção fiscal reconhecida por privilégio antigo.</p>
          <p><strong>D:</strong> contas do governo revelam forte necessidade de dinheiro para financiar uma guerra.</p>
        </div>
        <div class="method-box"><strong class="card-title">Da teoria à prática</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Pretensão</strong><p>O que o decreto diz que o rei pode fazer?</p></div>
          <div class="method-step"><span>2</span><strong>Execução</strong><p>A ordem chega a todo o território?</p></div>
          <div class="method-step"><span>3</span><strong>Limites</strong><p>Que privilégios ou resistências interferem?</p></div>
          <div class="method-step"><span>4</span><strong>Necessidade</strong><p>Por que o governo busca mais recursos?</p></div>
        </div></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — explique poder sem simplificar</h3>
          <div class="challenge-box">
            <strong>Desafio: “rei absoluto” não é o fim da explicação</strong>
            <p>Usando pelo menos três evidências do laboratório, escreva uma explicação de 4 a 6 frases mostrando como um monarca podia concentrar grande autoridade e, ao mesmo tempo, enfrentar limites práticos.</p>
            <details><summary>O que uma boa resposta precisa conter?</summary><p>Ela deve separar autoridade declarada de capacidade efetiva, relacionar arrecadação à guerra e administração e reconhecer que privilégios, instituições locais e resistência podiam limitar a execução das decisões. O objetivo é explicar a tensão entre centralização e negociação.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha a formação dos Estados nacionais de Portugal, Espanha, França e Inglaterra, além do Absolutismo e do Antigo Regime, articulando política, território, trabalho, desigualdades, instituições e análise crítica de fontes.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> reis concentraram poder construindo instituições, arrecadação, força militar e legitimidade. O Absolutismo foi uma forma forte de autoridade monárquica, mas nunca eliminou completamente leis, privilégios, negociações, recursos limitados e resistências.</div>
      `
    });
  }

  MBB.enableChapter?.('06 Estados', showChapter);
})();
