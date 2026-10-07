(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Revoluções e direitos',
      technical:'Independência dos EUA • Revolução Francesa • direitos • cidadania • escravidão • Antigo Regime • soberania',
      title:'Se todos eram declarados iguais, quem continuou excluído?',
      objective:'<strong>Objetivo:</strong> comparar a Independência dos Estados Unidos e a Revolução Francesa, relacionando ideias de liberdade, direitos e soberania às condições concretas de cidadania, escravidão, gênero, propriedade e participação política.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Uma frase pode ser universal e uma sociedade continuar desigual?</strong>
            <p>No fim do século XVIII, documentos políticos afirmaram que seres humanos possuíam direitos e que governos deveriam existir com base no consentimento dos governados. Ao mesmo tempo, milhões de pessoas continuavam escravizadas, mulheres eram excluídas da cidadania política e diferentes grupos não tinham os mesmos direitos.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como ideias de liberdade e igualdade puderam conviver com exclusões tão profundas?</p>
          </div>
        </section>

        <h3>1. As Treze Colônias não começaram querendo criar os Estados Unidos</h3>
        <p>Na década de 1760, após guerras custosas, o governo britânico ampliou impostos e controles sobre suas colônias na América do Norte. Muitos colonos contestaram medidas tomadas por um Parlamento no qual não elegiam representantes.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Impostos e controle</strong><p>Novas taxas e regras comerciais aumentaram tensões entre autoridades britânicas e parte dos colonos.</p></div>
          <div class="mini-card"><strong>Representação</strong><p>O problema não era simplesmente “ninguém queria pagar imposto”, mas quem tinha autoridade para criá-lo e com qual representação política.</p></div>
          <div class="mini-card"><strong>Escalada</strong><p>Protestos, repressão, confrontos e organização política transformaram uma disputa imperial em guerra de independência.</p></div>
        </div>

        ${choice('1','Causa histórica','Qual explicação evita reduzir a Independência dos EUA a uma causa única?',[['a','Os colonos apenas não gostavam de impostos'],['b','Impostos, representação, autonomia colonial, conflitos imperiais e mobilização política se combinaram'],['c','A independência aconteceu de repente porque todos já queriam formar um novo país']],'b','Correto. A independência foi resultado de uma escalada de conflitos políticos, econômicos e militares.','Procure relações entre vários fatores, não uma causa isolada.')}

        <h3>2. 1776: declarar independência também significava justificar uma ruptura</h3>
        <p>A <strong>Declaração de Independência</strong>, aprovada em 1776, não apenas anunciou separação da Grã-Bretanha. Ela apresentou uma justificativa política: certos direitos seriam inerentes às pessoas e governos derivariam sua autoridade do consentimento dos governados.</p>
        <div class="source-box">
          <span class="source-label">Fonte histórica — síntese da Declaração de Independência, 1776</span>
          <p>O documento afirma que as pessoas possuem direitos e que governos são instituídos para protegê-los, recebendo poderes legítimos do consentimento dos governados.</p>
          <p class="source-meta">Síntese didática do argumento central; não é citação literal do documento.</p>
        </div>
        <div class="concept-box"><strong>Documento político também é ação.</strong><p>A Declaração procurava convencer públicos, justificar a ruptura e construir legitimidade para a nova experiência política. Por isso deve ser analisada tanto pelo que afirma quanto pelo contexto em que foi produzida.</p></div>

        ${choice('2','Fonte política','Por que a Declaração de Independência deve ser analisada além de seu conteúdo literal?',[['a','Porque documentos políticos não têm valor histórico'],['b','Porque também buscava justificar uma ruptura e produzir legitimidade'],['c','Porque foi escrita depois da Revolução Francesa']],'b','Isso. Uma fonte política tem autoria, público, finalidade e contexto.','Retome o capítulo 01: uma fonte não apenas informa; ela também foi produzida para agir em seu tempo.')}

        <h3>3. “Todos” não significava participação política de todos</h3>
        <p>As ideias universais da Declaração conviviam com uma sociedade marcada pela <strong>escravidão</strong>. Pessoas africanas e afrodescendentes escravizadas não receberam liberdade geral com a independência. Povos indígenas também enfrentaram perda de territórios e guerras, e mulheres permaneceram sem direitos políticos equivalentes aos dos homens.</p>
        <p>Mesmo entre homens livres, o direito ao voto foi definido pelos estados e muitas vezes esteve ligado a critérios como propriedade, renda, religião ou raça, que mudaram ao longo do tempo.</p>
        <div class="note-box"><strong>Não é preciso escolher entre “ideais importantes” e “hipocrisia total”.</strong><p>Historicamente, é mais produtivo investigar a tensão: ideias de direitos abriram novas linguagens de reivindicação, mas foram aplicadas de modo limitado e desigual.</p></div>

        ${choice('3','Direitos e exclusões','Qual análise é mais adequada sobre 1776?',[['a','A declaração de direitos tornou todos os habitantes imediatamente iguais'],['b','As ideias de direitos foram politicamente importantes, mas coexistiram com escravidão e cidadania restrita'],['c','Como havia escravidão, as ideias de direitos não tiveram qualquer efeito histórico']],'b','Correto. A contradição entre princípios e práticas é justamente um dos problemas históricos mais importantes do período.','Evite tanto idealizar quanto descartar: investigue como ideias e relações sociais coexistiram e entraram em conflito.')}

        <h3>4. Na França, crise financeira virou crise política</h3>
        <p>Na década de 1780, a monarquia francesa enfrentava grave crise fiscal. O sistema tributário era desigual, e grupos privilegiados resistiam a reformas. Em 1789, Luís XVI convocou os <strong>Estados Gerais</strong>, assembleia organizada pelos três estados do Antigo Regime.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Primeiro Estado</strong><p>Clero, com privilégios e posição jurídica própria.</p></div>
          <div class="mini-card"><strong>Segundo Estado</strong><p>Nobreza, também associada a privilégios e isenções importantes.</p></div>
          <div class="mini-card"><strong>Terceiro Estado</strong><p>A imensa maioria da população, reunindo grupos muito diferentes — de camponeses e trabalhadores urbanos à burguesia.</p></div>
        </div>
        <p>A disputa sobre representação e votação ajudou a transformar a reunião numa crise de soberania: quem representava a nação e quem tinha autoridade para fazer leis?</p>

        ${choice('4','Crise do Antigo Regime','Por que a crise financeira francesa se tornou também uma crise política?',[['a','Porque discutir impostos exigiu enfrentar privilégios, representação e quem possuía autoridade para decidir'],['b','Porque não existiam diferenças sociais na França'],['c','Porque o rei decidiu abolir espontaneamente a monarquia']],'a','Correto. A questão fiscal expôs conflitos sobre privilégios, representação e soberania.','O dinheiro foi parte da crise, mas as regras de poder e privilégio transformaram o problema em conflito político.')}

        <h3>5. 1789: acontecimentos rápidos, processos profundos</h3>
        <div class="timeline">
          <div class="timeline-item"><strong>Junho de 1789</strong><p>Representantes do Terceiro Estado e aliados passaram a se afirmar como Assembleia Nacional, reivindicando representar a nação.</p></div>
          <div class="timeline-item"><strong>14 de julho</strong><p>A tomada da Bastilha tornou-se um poderoso símbolo da revolução, mas não foi sua causa única nem seu único acontecimento decisivo.</p></div>
          <div class="timeline-item"><strong>Agosto</strong><p>A Assembleia avançou contra privilégios do Antigo Regime e aprovou a Declaração dos Direitos do Homem e do Cidadão.</p></div>
        </div>
        <div class="note-box"><strong>Revolução não é um dia.</strong><p>“Revolução Francesa” designa um processo com diferentes fases, grupos, conflitos e mudanças. 1789 é decisivo, mas a revolução continuou e se radicalizou nos anos seguintes.</p></div>

        <h3>6. Direitos do Homem e do Cidadão: universalidade escrita, cidadania disputada</h3>
        <p>A declaração francesa de 1789 afirmou princípios como liberdade, igualdade jurídica e soberania da nação. Ela atacava a sociedade de privilégios do Antigo Regime e tornou-se referência para debates políticos posteriores.</p>
        <div class="source-box">
          <span class="source-label">Fonte histórica — síntese da Declaração de 1789</span>
          <p>Os indivíduos são apresentados como livres e iguais em direitos, e a autoridade política é vinculada à nação, não apenas à vontade pessoal do monarca.</p>
          <p class="source-meta">Síntese didática dos princípios; não é reprodução literal dos artigos.</p>
        </div>
        <p>Mas a aplicação concreta desses princípios permaneceu disputada. As primeiras regras eleitorais revolucionárias não deram participação política igual a toda a população, e mulheres continuaram excluídas da cidadania política formal.</p>

        ${choice('5','Igualdade','O que significa dizer que a Revolução atacou a desigualdade jurídica sem eliminar imediatamente todas as desigualdades?',[['a','Privilégios legais foram questionados, mas gênero, riqueza, escravidão e outras diferenças continuaram limitando direitos'],['b','Nada mudou em 1789'],['c','Todos passaram a ter exatamente o mesmo poder econômico e político']],'a','Isso. Igualdade jurídica e igualdade social ou política plena não são a mesma coisa.','Observe qual tipo de igualdade está sendo discutido e quem efetivamente acessa os direitos.')}

        <h3>7. Quem estava fora também usou a linguagem dos direitos</h3>
        <p>As novas ideias não ficaram restritas aos grupos que inicialmente controlavam as instituições. Mulheres, pessoas escravizadas, negros livres e outros grupos passaram a mobilizar a própria linguagem universal dos direitos para denunciar exclusões.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Olympe de Gouges</strong><p>Em 1791, publicou a <em>Declaração dos Direitos da Mulher e da Cidadã</em>, expondo a contradição entre direitos proclamados como universais e a exclusão política feminina.</p></div>
          <div class="mini-card"><strong>Revolução Haitiana</strong><p>Na colônia francesa de Saint-Domingue, pessoas escravizadas e livres de cor transformaram a linguagem de liberdade e igualdade numa luta revolucionária contra escravidão e domínio colonial.</p></div>
        </div>
        <div class="concept-box"><strong>Uma ideia pode ganhar sentidos que seus primeiros formuladores não controlam.</strong><p>Quando direitos são proclamados como universais, grupos excluídos podem perguntar: “se são universais, por que não valem para nós?” Essa disputa muda a própria história dos direitos.</p></div>

        ${choice('6','Universalidade','Por que grupos excluídos podiam usar declarações de direitos contra a própria ordem que os excluía?',[['a','Porque princípios universais forneciam argumentos para questionar limites de cidadania e escravidão'],['b','Porque os documentos proibiam qualquer debate'],['c','Porque direitos só podiam ser reivindicados por reis']],'a','Correto. A linguagem universal dos direitos tornou-se também ferramenta de contestação.','Ideias políticas circulam, são apropriadas e podem produzir consequências além das intenções iniciais.')}

        <h3>8. Comparar as duas revoluções: sem transformar uma na cópia da outra</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Questão</th><th>Independência dos EUA</th><th>Revolução Francesa</th></tr></thead>
          <tbody>
            <tr><td>Problema inicial</td><td>Conflito entre colônias e governo imperial britânico</td><td>Crise fiscal, privilégios e disputa sobre representação e soberania</td></tr>
            <tr><td>Ruptura</td><td>Formação de um Estado independente</td><td>Transformação profunda da ordem política e social francesa</td></tr>
            <tr><td>Linguagem política</td><td>Direitos, consentimento, independência</td><td>Liberdade, igualdade jurídica, soberania nacional</td></tr>
            <tr><td>Contradições</td><td>Escravidão, exclusão indígena, feminina e eleitoral</td><td>Cidadania limitada, exclusão feminina, conflitos coloniais e escravidão</td></tr>
          </tbody>
        </table></div>
        <div class="ok-box"><strong>Sem “receita da revolução”.</strong><p>As duas experiências dialogaram com ideias iluministas e debates atlânticos, mas nasceram de contextos diferentes e tiveram trajetórias próprias.</p></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — promessa e acesso</h3>
          <div class="challenge-box">
            <strong>Desafio: quando um direito é realmente universal?</strong>
            <p>Compare as duas declarações estudadas. Em 5 a 7 frases, explique uma semelhança entre seus princípios, uma diferença de contexto e pelo menos duas exclusões concretas que mostram a distância entre direitos proclamados e direitos efetivamente acessíveis.</p>
            <details><summary>Critério de uma boa resposta</summary><p>A resposta deve usar evidências dos dois processos, diferenciar princípio de prática e evitar a conclusão simplista de que “nada mudou” ou de que “todos ficaram iguais”. O ponto é explicar como novos direitos ampliaram possibilidades políticas enquanto continuavam sendo disputados.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha formação dos Estados Unidos, Revolução Francesa, Antigo Regime, Iluminismo, cidadania, direitos, desigualdades, protagonismo histórico e análise de documentos políticos, articulando política, ética, trabalho e diferentes experiências sociais.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> as revoluções do fim do século XVIII ampliaram radicalmente a linguagem de direitos e soberania, mas a pergunta “quem está incluído?” continuou aberta. A história da cidadania também é a história de grupos que transformaram promessas universais em novas reivindicações.</div>
      `
    });
  }

  MBB.enableChapter?.('08 Estados Unidos', showChapter);
})();
