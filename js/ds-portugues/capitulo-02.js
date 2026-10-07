(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Estudar e pesquisar',
      technical:'pergunta de pesquisa • palavras-chave • curadoria • autoria • evidência • referência • síntese • fontes independentes',
      title:'02 — Estudo, pesquisa e curadoria',
      objective:'<strong>Objetivo:</strong> transformar uma dúvida em pesquisa, selecionar fontes adequadas, registrar informações com rastreabilidade e produzir sínteses próprias apoiadas em evidências.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">O primeiro resultado da busca é a melhor fonte?</strong>
          <p>Seu grupo precisa produzir um texto sobre <strong>uso de inteligência artificial nos estudos</strong>. Uma busca rápida mostra um vídeo curto, um blog, uma matéria jornalística, uma página institucional e um artigo acadêmico. Todos aparecem na mesma tela, mas <strong>não cumprem a mesma função nem oferecem o mesmo tipo de evidência</strong>.</p>
          <p>Pesquisar bem não é abrir muitos links. É saber <strong>o que você procura, por que uma fonte serve para aquela pergunta e como registrar o caminho usado</strong>.</p>
          <p class="central-question"><strong>Pergunta central:</strong> como transformar informação encontrada em conhecimento pesquisado?</p>
        </div>

        ${choice('1','Busca não é fonte','Um buscador mostra dez resultados sobre um tema. Qual afirmação é mais correta?',[['a','O buscador já comprovou a qualidade dos dez resultados'],['b','O buscador ajuda a localizar conteúdos; cada fonte ainda precisa ser avaliada'],['c','O primeiro resultado é sempre o mais confiável']], 'b','Mecanismos de busca ajudam a localizar materiais, mas não substituem a avaliação das fontes.','Encontrar uma página e avaliar sua qualidade são etapas diferentes.')}

        <h3>1. Comece pela pergunta, não pelo navegador</h3>
        <p>Uma pesquisa melhora quando a pergunta é <strong>clara, delimitada e possível de investigar</strong>. Perguntas muito amplas geram buscas vagas e respostas superficiais.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Ampla demais</strong><p>“Inteligência artificial é boa ou ruim?”</p><p><small>Mistura vários contextos, critérios e tipos de uso.</small></p></div>
          <div class="mini-card"><strong>Mais pesquisável</strong><p>“Quais usos de IA generativa podem apoiar a revisão de textos escolares e quais cuidados são necessários?”</p><p><small>Define contexto, finalidade e foco da investigação.</small></p></div>
        </div>

        <div class="pt-process">
          <span>dúvida</span><b>→</b>
          <span>pergunta delimitada</span><b>→</b>
          <span>palavras-chave</span><b>→</b>
          <span>fontes</span><b>→</b>
          <span>comparação</span><b>→</b>
          <span>síntese</span>
        </div>

        ${choice('2','Pergunta de pesquisa','Qual pergunta tende a orientar melhor uma pesquisa escolar?',[['a','“Tecnologia”'],['b','“Tudo sobre redes sociais”'],['c','“Como diferentes redes sociais usam recomendações algorítmicas para organizar o feed?”']], 'c','Ela delimita objeto e aspecto de análise, permitindo definir palavras-chave e fontes mais adequadas.','Uma boa pergunta reduz a amplitude do tema e orienta o que precisa ser procurado.')}

        <h3>2. Palavras-chave são ferramentas de busca</h3>
        <p>Depois da pergunta, separe os conceitos principais e pense em <strong>sinônimos, termos mais específicos e expressões equivalentes</strong>. Isso evita depender de uma única formulação.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Tema central</strong><p>IA generativa</p></div>
          <div class="mini-card"><strong>Contexto</strong><p>educação • estudo • escrita</p></div>
          <div class="mini-card"><strong>Ação ou efeito</strong><p>revisão • aprendizagem • autoria</p></div>
        </div>

        <div class="text-box">
          <strong class="card-title">Exemplo de combinação</strong>
          <p><code>"IA generativa" educação revisão de texto</code></p>
          <p>Se a busca estiver estreita demais, retire um termo. Se estiver ampla demais, acrescente contexto ou uma expressão específica.</p>
        </div>

        ${choice('3','Estratégia de busca','Você pesquisou “IA” e recebeu milhões de resultados muito diferentes. Qual ajuste ajuda mais?',[['a','Adicionar termos que delimitem contexto e objetivo'],['b','Clicar aleatoriamente em vários resultados'],['c','Usar somente letras maiúsculas']], 'a','Delimitar a busca com conceitos relacionados aproxima os resultados da pergunta de pesquisa.','A busca precisa refletir o recorte definido na pergunta.')}

        <h3>3. Curadoria: selecionar é parte da pesquisa</h3>
        <p><strong>Curadoria de informação</strong> é o processo de selecionar, organizar e justificar quais materiais serão usados. Não significa procurar apenas fontes que confirmem o que você já pensa.</p>

        <div class="evidence-grid">
          <div class="mini-card"><strong>Autoria</strong><p>Quem produziu? Há identificação e competência relacionada ao assunto?</p></div>
          <div class="mini-card"><strong>Instituição e publicação</strong><p>Onde foi publicado? A página informa responsabilidade editorial?</p></div>
          <div class="mini-card"><strong>Data e atualização</strong><p>O assunto exige informação recente? A data está visível?</p></div>
          <div class="mini-card"><strong>Evidências</strong><p>Há dados, documentos, referências, método ou fontes verificáveis?</p></div>
          <div class="mini-card"><strong>Finalidade</strong><p>Informar, vender, convencer, divulgar pesquisa, entreter ou defender uma posição?</p></div>
          <div class="mini-card"><strong>Adequação</strong><p>A fonte realmente responde à sua pergunta ou apenas menciona o tema?</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Não existe um selo mágico de “fonte perfeita”</strong>
          <p>Uma fonte pode ser excelente para descobrir <strong>o que uma instituição declarou</strong> e insuficiente para provar <strong>se a declaração está correta</strong>. Avaliar fonte depende também da pergunta que está sendo feita.</p>
        </div>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Copyright_Card_Catalog_Drawer.jpg?width=1200" alt="Gavetas de catálogo de fichas da Library of Congress, usadas para localizar registros de direitos autorais anteriores a 1978">
          <figcaption>
            <strong>Curadoria existia antes do buscador.</strong>
            <span>Catálogos físicos organizavam registros por metadados para que uma pessoa pudesse localizar uma fonte. Hoje os sistemas são digitais, mas continuamos precisando identificar autoria, título, data, assunto e localização.</span>
            <small>Foto: Michael Holley (Swtpc6800), 2009, Copyright Card Catalog da Library of Congress. Wikimedia Commons, domínio público. <a href="https://commons.wikimedia.org/wiki/File:Copyright_Card_Catalog_Drawer.jpg" target="_blank" rel="noopener">Fonte e licença</a>.</small>
          </figcaption>
        </figure>

        ${choice('4','Adequação da fonte','Você quer saber o texto exato de uma nova regra publicada por uma instituição. Qual fonte tende a ser mais adequada como ponto de partida?',[['a','O documento oficial da instituição'],['b','Um comentário anônimo que resume a regra'],['c','Uma imagem sem autoria compartilhada em grupo']], 'a','Para saber o conteúdo oficial de uma regra, o documento original é a fonte mais direta. Depois, outras fontes podem ajudar a interpretar impactos e controvérsias.','A pergunta determina qual tipo de fonte é mais adequado.')}

        <h3>4. Fonte primária, fonte secundária e rastreabilidade</h3>
        <p>Uma <strong>fonte primária</strong> apresenta o material original relevante para a investigação: uma lei, entrevista, conjunto de dados, obra, relatório ou documento. Uma <strong>fonte secundária</strong> analisa, interpreta ou contextualiza materiais anteriores.</p>
        <p>As duas podem ser úteis. O importante é saber <strong>qual papel cada uma desempenha</strong> e conseguir voltar ao material de origem quando necessário.</p>

        <div class="concept-box">
          <strong class="card-title">Rastreabilidade</strong>
          <p>Uma pesquisa é mais confiável quando outra pessoa consegue identificar de onde veio uma informação. Por isso, anote durante a pesquisa — e não só no final — autor ou instituição, título, data, endereço ou publicação e o trecho/ideia utilizado.</p>
        </div>

        ${choice('5','Rastreabilidade','Você anotou um dado importante, mas não registrou de qual página ele veio. Qual é o problema principal?',[['a','Nenhum; basta lembrar aproximadamente'],['b','Fica difícil verificar o dado, contextualizá-lo e referenciá-lo corretamente'],['c','O dado se torna automaticamente falso']], 'b','Sem rastreabilidade, a verificação e a referência ficam comprometidas, mesmo que o dado seja verdadeiro.','Pesquisar inclui registrar a origem da informação.')}

        <h3>5. Anotar não é copiar: citação, paráfrase e resumo</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Citação</strong><p>Reproduz palavras da fonte de forma identificada e referenciada.</p></div>
          <div class="mini-card"><strong>Paráfrase</strong><p>Reformula uma ideia com suas próprias palavras, sem esconder a origem da ideia.</p></div>
          <div class="mini-card"><strong>Resumo</strong><p>Condensa as ideias centrais de um material maior, preservando o sentido essencial.</p></div>
        </div>

        <p>Trocar algumas palavras por sinônimos não transforma automaticamente uma cópia em texto autoral. Para produzir síntese, você precisa <strong>compreender, selecionar, relacionar e reorganizar</strong> as informações.</p>

        <h3>6. Compare fontes antes de concluir</h3>
        <p>Uma única fonte pode conter erro, recorte limitado ou interesse específico. Quando a questão é importante, compare <strong>fontes independentes</strong> e procure entender por que elas convergem ou divergem.</p>

        <div class="source-box">
          <strong class="card-title">Ficha mínima de pesquisa</strong>
          <p><strong>Pergunta:</strong> o que quero descobrir?</p>
          <p><strong>Fonte:</strong> quem publicou, onde e quando?</p>
          <p><strong>Ideia ou dado:</strong> o que esta fonte acrescenta?</p>
          <p><strong>Evidência:</strong> em que ela se apoia?</p>
          <p><strong>Limite:</strong> o que esta fonte não permite concluir?</p>
          <p><strong>Referência:</strong> como volto ao material original?</p>
        </div>

        ${choice('6','Síntese','Três fontes confiáveis apresentam dados diferentes sobre o mesmo tema. O que fazer?',[['a','Escolher a que combina com sua opinião'],['b','Comparar período, método, população, definições e contexto antes de explicar a diferença'],['c','Somar os números e dividir por três']], 'b','Dados podem divergir porque medem coisas diferentes ou usam métodos e períodos distintos. A síntese precisa explicar essas condições.','Comparar fontes exige observar como cada informação foi produzida.')}

        <h3>7. E a inteligência artificial?</h3>
        <p>Ferramentas de IA podem ajudar a <strong>gerar palavras-chave, organizar perguntas ou sugerir caminhos</strong>, mas uma resposta gerada não deve substituir a consulta às fontes que sustentam a pesquisa. Se uma IA citar um dado, documento ou estudo, o pesquisador precisa localizar e verificar o material original antes de usá-lo.</p>

        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência — monte um plano de pesquisa</strong>
          <p>Pergunta: <strong>“A leitura em tela e a leitura em papel produzem diferenças de compreensão em situações de estudo?”</strong></p>
          <ol>
            <li>Delimite melhor a pergunta: idade, tipo de texto ou situação de estudo.</li>
            <li>Escreva pelo menos cinco palavras-chave ou combinações de busca.</li>
            <li>Liste três tipos de fonte que seriam úteis e explique a função de cada uma.</li>
            <li>Crie uma ficha de registro para duas fontes hipotéticas.</li>
            <li>Explique o que você faria se os resultados das fontes fossem diferentes.</li>
          </ol>
          <details><summary>O que caracteriza uma boa resposta?</summary><p>Ela mostra que o aluno sabe delimitar a pergunta, buscar com estratégia, justificar fontes, registrar origem e comparar evidências antes de concluir.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Busca, fonte, evidência e síntese são etapas diferentes. Curadoria exige critérios e rastreabilidade.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso formular uma pergunta pesquisável, montar palavras-chave, avaliar fontes e registrar informações sem perder a origem.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Habilidades mobilizadas: EM13LP12, EM13LP11, EM13LP28, EM13LP32A e EM13LGG704. Objetos relacionados: procedimentos de estudo; organização, anotações e resumo; curadoria de informação; seleção de dados em diferentes fontes; sínteses, resumos e esquemas; produção de textos com sustentação em fontes confiáveis.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('02 ', showChapter);
})();
