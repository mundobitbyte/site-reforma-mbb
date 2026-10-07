(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Investigar o passado',
      technical:'Conhecimento histórico • fontes • memória • tempo • narrativa • evidência',
      title:'Como podemos saber o que aconteceu no passado?',
      objective:'<strong>Objetivo:</strong> compreender como o conhecimento histórico é construído a partir de fontes, perguntas e comparação de evidências, distinguindo passado, memória, narrativa e investigação histórica.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Uma fotografia, três histórias</strong>
            <p>Você encontra uma fotografia antiga de uma praça lotada. No verso há apenas uma data. Uma pessoa da família diz que era uma festa; outra lembra de uma manifestação; um texto da prefeitura da época chama o evento de “celebração pública”.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como decidir o que aquela fotografia realmente permite afirmar — e o que ainda precisa ser investigado?</p>
          </div>
        </section>

        <h3>1. O passado aconteceu; a História investiga</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Passado</strong><p>É o conjunto de acontecimentos e experiências que já ocorreram. Ele não pode ser repetido como um experimento.</p></div>
          <div class="mini-card"><strong>Conhecimento histórico</strong><p>É uma reconstrução argumentada sobre o passado, produzida a partir de perguntas, fontes, comparação de evidências e debate entre interpretações.</p></div>
        </div>
        <div class="note-box"><strong>História não é “inventar uma versão”.</strong><p>O historiador interpreta, mas não está livre para afirmar qualquer coisa. A interpretação precisa ser compatível com as evidências disponíveis e com métodos explícitos de análise.</p></div>

        <h3>2. O que pode virar fonte histórica?</h3>
        <p>Fonte histórica é qualquer vestígio do passado que possa ser interrogado para responder a uma pergunta. O mesmo objeto pode dizer coisas diferentes dependendo da questão feita.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Escritas</strong><p>Cartas, leis, jornais, diários, atas, livros contábeis, mensagens.</p></div>
          <div class="mini-card"><strong>Visuais e audiovisuais</strong><p>Fotografias, pinturas, cartazes, filmes, mapas e gravações.</p></div>
          <div class="mini-card"><strong>Materiais</strong><p>Edifícios, ferramentas, moedas, roupas, objetos arqueológicos e paisagens transformadas.</p></div>
          <div class="mini-card"><strong>Orais e digitais</strong><p>Depoimentos, tradições orais, sites, bancos de dados, publicações e registros eletrônicos.</p></div>
        </div>
        <div class="concept-box"><strong>As categorias podem se sobrepor.</strong><p>Um cartaz é ao mesmo tempo texto, imagem e objeto material. A classificação ajuda a organizar, mas o que importa é a pergunta histórica feita à fonte.</p></div>

        <h3>3. Fonte não é uma janela transparente para o passado</h3>
        <p>Uma fonte foi produzida por alguém, em determinado contexto, com linguagem, interesses, limites e público. Por isso não basta perguntar “o que ela diz?”.</p>
        <div class="method-box">
          <strong class="card-title">Protocolo MbB de leitura de fontes</strong>
          <div class="method-grid">
            <div class="method-step"><span>1</span><strong>Identifique</strong><p>Quem produziu? Quando? Onde?</p></div>
            <div class="method-step"><span>2</span><strong>Contextualize</strong><p>Em que situação histórica a fonte foi produzida?</p></div>
            <div class="method-step"><span>3</span><strong>Interrogue</strong><p>Para quem? Com qual finalidade? Que linguagem usa?</p></div>
            <div class="method-step"><span>4</span><strong>Compare</strong><p>O que mostra, o que silencia e com quais outras fontes pode ser confrontada?</p></div>
          </div>
        </div>

        ${choice('1','Fonte e evidência','Um relatório oficial afirma que uma obra pública foi “um grande sucesso”. Qual é a atitude historicamente mais cuidadosa?',[['a','Aceitar a frase porque é oficial'],['b','Descartar o relatório porque é oficial'],['c','Investigar quem produziu, a finalidade e comparar com outras evidências']],'c','Isso. O relatório é uma fonte útil, mas sua autoria, finalidade e contexto precisam ser analisados.','Nem aceitar automaticamente nem descartar automaticamente: a fonte precisa ser interrogada.')}

        <h3>4. Memória e História não são a mesma coisa</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Memória</strong><p>É vivida e lembrada por indivíduos ou grupos. É seletiva, pode mudar ao longo do tempo e está ligada a identidades, afetos e experiências.</p></div>
          <div class="mini-card"><strong>História</strong><p>Transforma memórias em possíveis fontes, compara versões, verifica contextos e procura construir explicações que possam ser discutidas publicamente.</p></div>
        </div>
        <p>Isso não torna a memória “falsa”. Um depoimento pode ser valioso justamente porque mostra como uma pessoa ou grupo viveu, sentiu e depois recordou determinado processo.</p>
        <div class="example-box"><strong class="card-title">A mesma escola, lembranças diferentes</strong><p>Dois ex-alunos podem recordar a mesma escola de maneiras muito distintas. Um enfatiza oportunidades; outro, exclusões. O historiador não precisa escolher imediatamente “quem está certo”: pode investigar trajetórias, regras da instituição, documentos, fotografias e outros depoimentos para entender por que as experiências foram diferentes.</p></div>

        ${choice('2','Memória','Qual afirmação é mais adequada?',[['a','Memória e História são sinônimos'],['b','Memórias podem ser fontes históricas, mas precisam ser contextualizadas e comparadas'],['c','Memórias nunca podem ser usadas por historiadores']],'b','Correto. Memórias são evidências importantes quando analisadas em contexto e em relação com outras fontes.','Memória pode ser fonte; o ponto é não tratá-la como registro neutro e completo.')}

        <h3>5. Toda fonte tem perspectiva — e isso não significa que seja inútil</h3>
        <p>Uma fonte pode defender interesses, justificar decisões, denunciar problemas ou tentar convencer um público. A perspectiva faz parte da evidência.</p>
        <div class="source-box">
          <span class="source-label">Situação didática simulada — não é documento histórico real</span>
          <blockquote>“A reorganização da praça trouxe ordem e progresso ao centro da cidade.”</blockquote>
          <p class="source-meta">Imagine que a frase tenha sido publicada por uma administração municipal após retirar barracas de vendedores da praça.</p>
        </div>
        <p>A frase informa mais do que a opinião de que houve “progresso”. Ela também permite perguntar: que grupo definiu o que era “ordem”? Quem ganhou espaço? Quem perdeu? Como os vendedores descreveriam a mesma mudança?</p>

        ${choice('3','Perspectiva','Na fonte simulada, qual pergunta amplia melhor a investigação?',[['a','Qual era a cor do papel?'],['b','Quais grupos foram afetados e como descreviam a reorganização?'],['c','Se a frase é curta, então é verdadeira']],'b','Isso. Comparar experiências de grupos afetados ajuda a revelar interesses, conflitos e silêncios.','A análise histórica busca autoria, contexto, grupos envolvidos e evidências comparáveis.')}

        <h3>6. Tempo histórico é mais do que decorar datas</h3>
        <p>Datas ajudam a localizar acontecimentos, mas processos históricos têm durações diferentes. Uma lei pode ser aprovada em um dia; mudanças culturais podem atravessar gerações.</p>
        <div class="timeline">
          <div class="timeline-item"><strong>Evento</strong><p>Algo situado em tempo relativamente curto, como uma votação, batalha ou assinatura.</p></div>
          <div class="timeline-item"><strong>Processo</strong><p>Conjunto de mudanças e relações que se desenvolvem durante um período, como urbanização, colonização ou formação de um Estado.</p></div>
          <div class="timeline-item"><strong>Mudanças e permanências</strong><p>Em um mesmo processo, algumas estruturas mudam rapidamente enquanto outras persistem.</p></div>
        </div>
        <div class="note-box"><strong>Cuidado com o anacronismo.</strong><p>Anacronismo acontece quando projetamos conceitos, valores ou instituições de uma época sobre outra sem considerar o contexto. Comparar períodos é possível; tratá-los como se fossem iguais é que cria o problema.</p></div>
        <div class="concept-box"><strong>Séculos em 20 segundos</strong><p>Anos 1–100 formam o século I; 101–200, o século II. Assim, 1789 pertence ao século XVIII e 2001 ao século XXI. A regra localiza datas; compreender o processo exige muito mais.</p></div>

        ${choice('4','Anacronismo','Qual situação apresenta maior risco de anacronismo?',[['a','Perguntar como funcionava a cidadania em Atenas'],['b','Julgar automaticamente a cidadania ateniense como se tivesse exatamente as mesmas regras e conceitos jurídicos do Brasil atual'],['c','Comparar duas sociedades deixando claras suas diferenças de contexto']],'b','Correto. O problema é transportar categorias atuais como se funcionassem do mesmo modo em outro contexto histórico.','Comparar é legítimo quando as diferenças de contexto permanecem explícitas.')}

        <h3>7. Narrativas diferentes não significam que “qualquer versão vale”</h3>
        <p>Historiadores podem discordar porque fazem perguntas diferentes, usam conjuntos de fontes distintos ou atribuem pesos diferentes a certos fatores. O debate faz parte do conhecimento histórico.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Divergência legítima</strong><p>Interpretações apresentam argumentos, indicam evidências e podem ser criticadas por outros pesquisadores.</p></div>
          <div class="mini-card"><strong>Afirmação sem sustentação</strong><p>Ignora evidências contrárias, inventa documentos ou escolhe apenas o que confirma uma conclusão já pronta.</p></div>
        </div>
        <div class="ok-box"><strong>Critério central:</strong> interpretações históricas são discutíveis, mas não arbitrárias. Evidências, contexto, coerência do argumento e crítica pública colocam limites ao que pode ser sustentado.</div>

        ${choice('5','Narrativas e evidências','Duas interpretações históricas discordam. O que devemos fazer?',[['a','Concluir que nenhuma pode ser avaliada'],['b','Comparar perguntas, fontes, argumentos e compatibilidade com as evidências'],['c','Escolher a que mais combina com nossa opinião pessoal']],'b','Isso. Divergências são avaliadas pela qualidade das perguntas, fontes, argumentos e evidências.','História não é votação de preferências; interpretações precisam ser examinadas criticamente.')}

        <h3>8. Um pequeno laboratório de investigação histórica</h3>
        <div class="source-box">
          <span class="source-label">Duas fontes didáticas simuladas</span>
          <p><strong>Fonte A — relatório da administração:</strong> “A nova regulamentação tornou a praça mais organizada e segura.”</p>
          <p><strong>Fonte B — carta de uma trabalhadora:</strong> “Depois da mudança, muitos vendedores perderam o ponto onde trabalhavam havia anos.”</p>
          <p class="source-meta">As duas frases são inventadas exclusivamente para treinar o método de análise; não representam documentos reais.</p>
        </div>
        <div class="evidence-grid">
          <div class="mini-card"><strong>O que A permite investigar?</strong><p>Objetivos e linguagem da administração, ideia de ordem, justificativa da medida e imagem pública pretendida.</p></div>
          <div class="mini-card"><strong>O que B permite investigar?</strong><p>Impactos sobre trabalhadores, experiência cotidiana e possíveis custos sociais da mudança.</p></div>
        </div>
        <p>As fontes não precisam “se anular”. Juntas, podem mostrar que uma mesma política foi apresentada como modernização por um grupo e vivida como perda por outro.</p>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — pense como historiador</h3>
          <div class="challenge-box">
            <strong>Desafio: construa uma conclusão provisória</strong>
            <p>Usando apenas as fontes simuladas A e B, escreva uma conclusão de duas ou três frases que seja cuidadosa e indique também o que ainda precisaríamos investigar.</p>
            <details><summary>O que uma boa resposta precisa conter?</summary><p>Ela deve reconhecer que a regulamentação foi apresentada pela administração como melhoria de organização e segurança, enquanto pelo menos uma experiência relatada aponta perda de espaço de trabalho. Também deve evitar generalizar para toda a população e sugerir novas fontes — por exemplo, a própria regulamentação, dados sobre vendedores, jornais, fotografias, atas, outros depoimentos ou registros de conflitos.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo estabelece a base para estudar História na 1ª série: produção do conhecimento histórico, tempo e espaço, memória, cultura, identidade, diversidade, diferentes fontes e narrativas e análise crítica de evidências. Os próximos capítulos aplicarão esse método a sociedades e processos concretos.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> História é uma investigação argumentada sobre o passado. Fontes não falam sozinhas: nós as interrogamos, contextualizamos, comparamos e usamos para construir explicações que permanecem abertas à crítica e a novas evidências.</div>
      `
    });
  }

  MBB.enableChapter?.('01 História', showChapter);
})();