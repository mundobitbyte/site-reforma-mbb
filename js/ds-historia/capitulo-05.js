(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Mundo antigo',
      technical:'Grécia • pólis • Atenas • democracia • cidadania • Roma • República • Império • escravidão',
      title:'Quem podia ser cidadão no mundo antigo?',
      objective:'<strong>Objetivo:</strong> comparar formas de participação política e cidadania em sociedades gregas e romanas, reconhecendo que direitos, pertencimento e exclusões mudaram ao longo do tempo e não correspondem automaticamente ao conceito contemporâneo de cidadania.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Uma assembleia com a porta aberta — mas não para todos</strong>
            <p>Imagine uma cidade em que decisões públicas importantes são debatidas por cidadãos reunidos em assembleia. Parece muito próximo da ideia de democracia. Agora descubra que mulheres, pessoas escravizadas e muitos estrangeiros residentes não podem participar politicamente da mesma forma.</p>
            <p class="central-question"><strong>Pergunta central:</strong> podemos chamar uma sociedade de participativa sem perguntar primeiro quem era reconhecido como cidadão?</p>
          </div>
        </section>

        <h3>1. “Grécia Antiga” não era um país único</h3>
        <p>Quando falamos em <strong>Grécia Antiga</strong>, reunimos povos que compartilhavam elementos de língua, religião e cultura, mas viviam em diferentes comunidades políticas. Muitas dessas comunidades eram <strong>pólis</strong>, cidades com instituições, territórios, leis e identidades próprias.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Atenas</strong><p>Ficou conhecida por experiências democráticas e ampla participação dos cidadãos masculinos em assembleias durante parte do período clássico.</p></div>
          <div class="mini-card"><strong>Esparta</strong><p>Possuía organização política e social distinta, com reis, conselho, magistrados e assembleia, além de forte estrutura militar.</p></div>
          <div class="mini-card"><strong>Outras pólis</strong><p>Corinto, Tebas, Mileto e muitas outras desenvolveram instituições e trajetórias próprias.</p></div>
        </div>
        <div class="note-box"><strong>Não transforme Atenas em sinônimo de toda a Grécia.</strong><p>O modelo ateniense é importante para estudar democracia, mas não representa todas as sociedades gregas nem permaneceu igual ao longo dos séculos.</p></div>

        ${choice('1','Pólis','Qual afirmação é mais adequada sobre a Grécia Antiga?',[['a','Era um Estado nacional unificado semelhante à Grécia atual'],['b','Reunia diferentes comunidades políticas, entre elas numerosas pólis com instituições próprias'],['c','Todas as cidades possuíam exatamente o mesmo governo']],'b','Correto. Havia vínculos culturais, mas também autonomia política, rivalidades e grande diversidade institucional.','Evite projetar o Estado nacional moderno sobre o mundo grego antigo.')}

        <h3>2. Atenas: democracia significava participação direta de cidadãos</h3>
        <p>Entre reformas iniciadas no fim do século VI a.C. e transformações do século V a.C., Atenas desenvolveu instituições em que cidadãos podiam participar diretamente de decisões públicas. A assembleia discutia guerra, alianças, leis e outras questões; vários cargos e conselhos também envolviam participação cidadã.</p>
        <div class="concept-box"><strong>Direta não significa universal.</strong><p>Os cidadãos não escolhiam simplesmente representantes para decidir tudo por eles. Muitos participavam pessoalmente de assembleias e funções públicas. Porém, o grupo reconhecido como cidadão político era apenas parte da população.</p></div>
        <div class="method-box"><strong class="card-title">Antes de dizer “era democracia”, pergunte</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Quem participa?</strong><p>Quem é reconhecido como cidadão?</p></div>
          <div class="method-step"><span>2</span><strong>Como participa?</strong><p>Assembleia, sorteio, eleição, magistraturas?</p></div>
          <div class="method-step"><span>3</span><strong>Quem fica fora?</strong><p>Quais grupos não possuem os mesmos direitos?</p></div>
          <div class="method-step"><span>4</span><strong>Em que contexto?</strong><p>As regras mudaram durante a história da pólis?</p></div>
        </div></div>

        <h3>3. Cidadania ateniense era um privilégio delimitado</h3>
        <p>Na Atenas clássica, a participação política estava ligada sobretudo a <strong>homens adultos reconhecidos como cidadãos atenienses</strong>. O número de cidadãos era muito menor que a população total.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Cidadãos masculinos</strong><p>Podiam participar politicamente segundo regras e períodos específicos da pólis.</p></div>
          <div class="mini-card"><strong>Mulheres</strong><p>Participavam intensamente da vida familiar, religiosa e social, mas não possuíam os mesmos direitos políticos dos cidadãos homens.</p></div>
          <div class="mini-card"><strong>Metecos</strong><p>Estrangeiros livres residentes podiam trabalhar, comerciar e viver na cidade, mas não tinham cidadania política ateniense.</p></div>
          <div class="mini-card"><strong>Pessoas escravizadas</strong><p>Não eram cidadãos e estavam submetidas a relações de propriedade e coerção.</p></div>
        </div>
        <div class="note-box"><strong>Uma sociedade pode ampliar participação para alguns e manter profundas exclusões.</strong><p>A democracia ateniense representou uma experiência histórica importante de participação direta, mas não pode ser descrita como sufrágio universal nem copiada automaticamente para o presente.</p></div>

        ${choice('2','Cidadania ateniense','Por que é inadequado dizer apenas “em Atenas todos participavam da democracia”?',[['a','Porque não existiam assembleias'],['b','Porque a participação política estava restrita aos cidadãos e excluía grandes grupos da população'],['c','Porque apenas reis tomavam decisões']],'b','Isso. A pergunta central é quem recebia o status político de cidadão e quem ficava fora dele.','A existência de democracia ateniense não significa participação política universal.')}

        <h3>4. Participação política também dependia de trabalho e desigualdades sociais</h3>
        <p>Debater cidadania sem olhar para a economia pode esconder parte importante da sociedade. Agricultura, oficinas, comércio, trabalho doméstico e escravidão sustentavam a vida cotidiana das pólis.</p>
        <p>Em Atenas, pessoas escravizadas realizavam atividades variadas; metecos tinham papel relevante no comércio e no artesanato; mulheres administravam dimensões importantes da casa e participavam de cultos e festivais. Mesmo sem cidadania política, esses grupos eram parte da cidade.</p>
        <div class="ok-box"><strong>Uma cidade não é formada apenas por quem aparece na assembleia.</strong><p>Para entender uma sociedade, investigue também quem produz, quem cuida, quem luta, quem possui recursos e quais relações de dependência tornam possível a participação de outros.</p></div>

        ${choice('3','Sociedade e política','Qual pergunta amplia melhor o estudo da democracia ateniense?',[['a','Além dos cidadãos, quais grupos sustentavam a vida econômica e social da pólis?'],['b','Qual era apenas a cor dos prédios da assembleia?'],['c','Como provar que todos tinham exatamente os mesmos direitos?']],'a','Correto. Cidadania política precisa ser analisada junto com trabalho, gênero, origem e escravidão.','A vida da pólis envolvia muitos grupos que não possuíam participação política equivalente.')}

        <h3>5. Roma também mudou: monarquia, República e Império não são a mesma coisa</h3>
        <p>A história romana atravessou muitos séculos. Por convenção, costuma-se falar em <strong>Monarquia, República e Império</strong>, mas cada período contém transformações internas.</p>
        <div class="timeline">
          <div class="timeline-item"><strong>República — tradicionalmente 509–27 a.C.</strong><p>Magistraturas, Senado e assembleias distribuíam funções políticas entre diferentes instituições, embora poder e participação fossem profundamente desiguais.</p></div>
          <div class="timeline-item"><strong>Conflitos sociais</strong><p>Durante a República, plebeus conquistaram direitos e instituições em processos longos de disputa com grupos aristocráticos.</p></div>
          <div class="timeline-item"><strong>Império — a partir de 27 a.C.</strong><p>O imperador concentrou progressivamente poderes, enquanto Senado, magistraturas, cidades e administrações provinciais continuaram existindo em novas relações.</p></div>
        </div>
        <div class="note-box"><strong>“Roma” não teve um único sistema político.</strong><p>Uma instituição pode conservar o mesmo nome e mudar de poder, função ou importância ao longo de séculos.</p></div>

        <h3>6. Na República, cidadania romana envolvia direitos, deveres e hierarquias</h3>
        <p>Ser cidadão romano podia significar proteção jurídica, direitos familiares e patrimoniais e, para certos cidadãos homens em determinados contextos, participação política. Mas direitos variavam segundo período, sexo, riqueza, posição social e local de residência.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Participação</strong><p>Assembleias elegiam magistrados e votavam determinadas decisões, mas o sistema de votação não dava o mesmo peso político a todos.</p></div>
          <div class="mini-card"><strong>Hierarquia</strong><p>Riqueza, família, prestígio, gênero e condição livre ou escravizada criavam diferenças profundas entre habitantes de Roma e de seus territórios.</p></div>
        </div>
        <p>Os conflitos entre patrícios e plebeus, por exemplo, mostram que “cidadãos romanos” também não formavam um bloco social sem disputas. Direitos foram negociados e transformados.</p>

        ${choice('4','Roma republicana','Qual frase evita uma visão simplista da República Romana?',[['a','Todos os cidadãos tinham poder político idêntico'],['b','Havia instituições participativas, mas riqueza, status e regras de votação produziam fortes desigualdades'],['c','Não existia nenhuma participação pública']],'b','Correto. A existência de assembleias e eleições não eliminava hierarquias sociais e políticas.','Participação e desigualdade podem existir ao mesmo tempo.')}

        <h3>7. Conquistar territórios também transformou a ideia de ser romano</h3>
        <p>À medida que Roma expandiu seu domínio pela Itália e depois pelo Mediterrâneo, surgiu um problema político: como governar populações com diferentes estatutos, cidades e direitos?</p>
        <p>A cidadania romana foi sendo concedida de modos variados a indivíduos e comunidades. Após conflitos como a Guerra Social, no início do século I a.C., grande parte dos aliados livres da Itália recebeu cidadania. Durante o Império, novas concessões continuaram ampliando o número de cidadãos.</p>
        <div class="concept-box"><strong>Cidadania também podia ser uma ferramenta de integração imperial.</strong><p>Conceder direitos ajudava a criar vínculos com Roma, mas não apagava identidades locais nem eliminava desigualdades entre regiões e classes.</p></div>

        <h3>8. Em 212 d.C., a cidadania romana foi ampliada de forma extraordinária</h3>
        <p>O imperador Caracala promulgou a chamada <strong>Constitutio Antoniniana</strong>, que concedeu cidadania romana à grande maioria dos habitantes livres do Império.</p>
        <p>Isso mostra como o significado de “cidadão romano” havia mudado muito desde a pequena cidade dos primeiros séculos. Porém, cidadania jurídica ampla não significou democracia imperial nem igualdade social: pessoas escravizadas continuaram excluídas, e diferenças de riqueza, gênero e status permaneceram enormes.</p>
        <div class="note-box"><strong>Cuidado com uma falsa equivalência.</strong><p>“Mais pessoas receberam cidadania” não significa automaticamente “mais pessoas passaram a governar”. Direitos jurídicos, participação política e igualdade social são dimensões relacionadas, mas diferentes.</p></div>

        ${choice('5','Cidadania romana','O que a ampliação da cidadania em 212 d.C. NÃO permite concluir?',[['a','Que o significado e a extensão da cidadania romana mudaram ao longo do tempo'],['b','Que praticamente todos os habitantes livres passaram a ter exatamente o mesmo poder político que cidadãos atenienses numa assembleia'],['c','Que cidadania podia existir em um Império sem democracia direta']],'b','Correto. Cidadania jurídica romana no Império não equivale à participação política direta de Atenas clássica.','Não use a mesma palavra “cidadania” como se tivesse significado idêntico em sociedades diferentes.')}

        <h3>9. Atenas e Roma: a mesma palavra, experiências diferentes</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Questão</th><th>Atenas clássica</th><th>Roma</th></tr></thead>
          <tbody>
            <tr><td>Escala</td><td>Uma pólis e seu território</td><td>De cidade a domínio mediterrânico e vasto império</td></tr>
            <tr><td>Participação política</td><td>Forte participação direta dos cidadãos homens em momentos democráticos</td><td>Instituições republicanas com votação e magistraturas; depois forte concentração imperial</td></tr>
            <tr><td>Quem era cidadão?</td><td>Grupo relativamente restrito da população</td><td>Status que se ampliou progressivamente e chegou a grande parte da população livre do Império</td></tr>
            <tr><td>Exclusões</td><td>Mulheres, metecos e escravizados sem cidadania política equivalente</td><td>Escravizados sem cidadania; direitos e poder marcados por gênero, riqueza, posição e período</td></tr>
            <tr><td>Lição histórica</td><td colspan="2">Cidadania não possui um significado eterno: ela é definida, disputada, ampliada e limitada historicamente.</td></tr>
          </tbody>
        </table></div>

        ${choice('6','Comparação histórica','Qual comparação entre Atenas e Roma é mais cuidadosa?',[['a','Cidadania significava exatamente a mesma coisa nas duas sociedades'],['b','Ambas desenvolveram formas de pertencimento cívico, mas regras, escala, direitos e participação mudaram muito'],['c','Roma simplesmente copiou todas as instituições atenienses']],'b','Isso. Comparar ajuda a perceber semelhanças e diferenças sem apagar contextos históricos.','A mesma palavra pode nomear experiências institucionais muito diferentes.')}

        <h3>10. Laboratório de cidadania: quem aparece e quem desaparece?</h3>
        <div class="source-box">
          <span class="source-label">Situação didática simulada — não é documento histórico real</span>
          <p><strong>Fonte A:</strong> um cidadão ateniense celebra o direito de falar e votar na assembleia.</p>
          <p><strong>Fonte B:</strong> uma mulher ateniense descreve responsabilidades religiosas e familiares, mas não participação na assembleia.</p>
          <p><strong>Fonte C:</strong> um comerciante meteco paga obrigações à cidade e trabalha no porto, mas não é cidadão político.</p>
          <p><strong>Fonte D:</strong> séculos depois, um habitante livre de uma província romana recebe cidadania por uma decisão imperial.</p>
          <p class="source-meta">As situações foram criadas para comparação de perspectivas; não são citações de pessoas históricas específicas.</p>
        </div>
        <div class="method-box"><strong class="card-title">Analise antes de julgar</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Status</strong><p>Quem é reconhecido juridicamente?</p></div>
          <div class="method-step"><span>2</span><strong>Direito</strong><p>Que direitos possui?</p></div>
          <div class="method-step"><span>3</span><strong>Participação</strong><p>Tem poder político efetivo?</p></div>
          <div class="method-step"><span>4</span><strong>Exclusão</strong><p>Quem fica fora e por quê?</p></div>
        </div></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — cidadania é uma construção histórica</h3>
          <div class="challenge-box">
            <strong>Desafio: responda sem anacronismo</strong>
            <p>Um colega afirma: “Atenas já tinha democracia como a nossa, enquanto Roma só tinha ditadura”. Escreva de 5 a 7 frases corrigindo a afirmação. Mostre pelo menos uma característica da democracia ateniense, uma exclusão, uma característica da República Romana e uma mudança ocorrida durante o Império.</p>
            <details><summary>O que uma boa resposta precisa conter?</summary><p>Deve reconhecer a participação direta de cidadãos atenienses sem confundi-la com sufrágio universal; mencionar grupos excluídos; mostrar que a República Romana possuía assembleias, magistraturas e Senado, embora com desigualdades; e explicar que o Império concentrou poder no imperador ao mesmo tempo em que a cidadania jurídica se ampliou, especialmente em 212 d.C.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha Grécia e Roma articulando política, cidadania, ética, trabalho, desigualdade, território e diferentes formas de organização social. Também reforça comparação de processos históricos e análise crítica de conceitos que mudam de significado ao longo do tempo.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> perguntar “quem era cidadão?” revela tanto direitos quanto exclusões. Atenas e Roma produziram experiências políticas importantes, mas cidadania, participação e igualdade tinham limites e significados próprios em cada contexto.</div>
      `
    });
  }

  MBB.enableChapter?.('05 Grécia', showChapter);
})();
