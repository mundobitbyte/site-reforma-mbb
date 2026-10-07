(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Sociedade e natureza',
      technical:'sociedade • natureza • transformação do espaço • água • relevo • vegetação • impactos • agentes • escalas • evidências',
      title:'Toda transformação da natureza produz o mesmo resultado para todos?',
      objective:'<strong>Objetivo:</strong> analisar transformações do espaço relacionando processos naturais, trabalho, técnica, agentes e interesses; distinguir mudança, impacto e degradação; comparar consequências em diferentes grupos, lugares, tempos e escalas usando imagens e dados como evidência.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Quando um rio vira reservatório</strong>
            <p>Uma barragem pode produzir eletricidade para milhões de pessoas e, ao mesmo tempo, mudar profundamente o rio, a área alagada e as condições de vida de quem depende daquele ambiente.</p>
            <p>Em Porto Primavera, no rio Paraná, imagens Landsat registraram a área antes e depois do início da formação do reservatório. O caso permite observar uma transformação concreta e perguntar quem se beneficia, quem enfrenta custos e quais efeitos só aparecem quando procuramos outras evidências.</p>
            <p class="central-question"><strong>Pergunta central:</strong> uma mesma transformação pode ser positiva para alguns, negativa para outros e ainda produzir efeitos diferentes conforme o lugar e a escala?</p>
          </div>
        </section>

        <figure class="geo-figure">
          <div class="geo-figure-grid">
            <div class="geo-figure-panel">
              <a href="https://eoimages.gsfc.nasa.gov/images/imagerecords/8000/8696/portoprimavera_tm5_1987073_lrg.jpg" target="_blank" rel="noopener noreferrer">
                <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/8000/8696/portoprimavera_tm5_1987073_lrg.jpg" alt="Imagem Landsat da região de Porto Primavera em 14 de março de 1987, antes da formação do grande reservatório, com o rio Paraná ocupando faixa mais estreita." loading="lazy" decoding="async" style="height:auto;max-height:520px;object-fit:contain">
              </a>
            </div>
            <div class="geo-figure-panel">
              <a href="https://eoimages.gsfc.nasa.gov/images/imagerecords/8000/8696/portoprimavera_etm_2000133_lrg.jpg" target="_blank" rel="noopener noreferrer">
                <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/8000/8696/portoprimavera_etm_2000133_lrg.jpg" alt="Imagem Landsat da região de Porto Primavera em 12 de maio de 2000, após o início do enchimento do reservatório, mostrando área de água muito mais extensa." loading="lazy" decoding="async" style="height:auto;max-height:520px;object-fit:contain">
              </a>
            </div>
          </div>
          <figcaption>
            <strong>Uma decisão técnica transforma processos naturais e o espaço vivido</strong>
            <span>À esquerda, 14/03/1987; à direita, 12/05/2000. Compare principalmente a extensão da superfície de água, o desenho das margens e as áreas que deixaram de aparecer como terra emersa.</span>
            <small>NASA Earth Observatory. Imagens criadas por Jesse Allen com dados Landsat do Global Land Cover Facility. Landsat 5 TM (1987) e Landsat 7 ETM+ (2000). Fonte consultada: NASA Earth Observatory, “Porto Primavera Reservoir, Brazil”.</small>
          </figcaption>
        </figure>

        ${choice('1','Leia a evidência antes de explicar','Qual conclusão é diretamente sustentada pela comparação das duas imagens?',[['a','O reservatório passou a ocupar uma área muito maior do que o canal do rio observado em 1987'],['b','Todas as famílias da região ficaram mais ricas depois da barragem'],['c','A barragem foi construída exclusivamente por causa da agricultura']],'a','Isso. A mudança na extensão da água é visível nas imagens; renda e motivações exigem outras fontes.','Separe o que a imagem mostra diretamente daquilo que precisaria ser investigado em documentos, dados ou depoimentos.')}

        <h3>1. Natureza não é cenário: é um conjunto de processos relacionados</h3>
        <p>Na análise geográfica, <strong>natureza</strong> não significa um espaço intocado e separado da sociedade. Água, relevo, solos, vegetação, clima e seres vivos interagem entre si e também com obras, técnicas e formas de uso do território.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Água</strong><p>Circula, infiltra, evapora, transporta sedimentos e conecta diferentes pontos de uma bacia hidrográfica.</p></div>
          <div class="mini-card"><strong>Relevo e solos</strong><p>Influenciam escoamento, erosão, estabilidade das encostas, possibilidades de ocupação e áreas que podem ser inundadas.</p></div>
          <div class="mini-card"><strong>Vegetação</strong><p>Protege o solo, interfere na infiltração, no escoamento e nos habitats e participa das trocas de água e energia.</p></div>
        </div>
        <div class="geo-process"><span>decisão social</span><b>→</b><span>técnica e trabalho</span><b>→</b><span>mudança física</span><b>→</b><span>novos fluxos e consequências</span></div>
        <p>É por isso que relevo, água, vegetação e clima entram aqui quando ajudam a explicar um problema real — não como listas isoladas para decorar.</p>

        ${choice('2','Relações naturais','Se a vegetação de uma encosta é removida e o solo fica exposto, qual relação merece ser investigada primeiro?',[['a','Possíveis mudanças na infiltração, no escoamento superficial e na erosão'],['b','Somente a longitude do lugar'],['c','A cor das casas mais próximas']],'a','Correto. Vegetação, água, solo e relevo funcionam de maneira relacionada.','Procure a cadeia de processos físicos que pode mudar quando a cobertura do solo é alterada.')}

        <h3>2. Transformação, impacto e degradação não são sinônimos</h3>
        <p><strong>Transformação</strong> é qualquer mudança relevante no espaço. <strong>Impacto</strong> é uma consequência dessa mudança sobre componentes ambientais ou sociais. <strong>Degradação</strong> é uma perda de qualidade, função ou capacidade do ambiente.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Uma transformação pode atender a uma necessidade</strong><p>Barragens podem gerar energia; estradas podem melhorar deslocamentos; irrigação pode ampliar a produção de alimentos.</p></div>
          <div class="mini-card"><strong>Mas toda intervenção produz relações e custos</strong><p>É preciso investigar alterações na água, no solo, na biodiversidade, no uso da terra, na economia e na vida dos grupos envolvidos.</p></div>
        </div>
        <div class="note-box"><strong>Evite dois erros opostos.</strong><p>Nem toda transformação humana deve ser chamada automaticamente de “destruição”, nem todo benefício econômico torna irrelevantes os impactos ambientais e sociais. Geografia exige comparar evidências.</p></div>

        ${choice('3','Impactos','Uma obra gera eletricidade e também altera o fluxo de um rio. Qual leitura é mais geográfica?',[['a','Escolher apenas um dos efeitos e ignorar o outro'],['b','Analisar benefícios e impactos, identificando onde, quando e para quem cada efeito ocorre'],['c','Concluir que toda obra produz exatamente o mesmo resultado']],'b','Isso. A análise precisa relacionar efeitos distintos e sua distribuição no território.','A questão central não é escolher um único rótulo, mas explicar relações, escalas, agentes e consequências.')}

        <h3>3. O efeito não termina no ponto onde a obra aparece</h3>
        <p>Segundo a NASA Earth Observatory, reservatórios alteram o funcionamento do rio, incluindo fluxo de água, frequência de inundações, transporte de nutrientes para áreas sazonalmente inundadas e condições de temperatura a jusante. No caso de Porto Primavera, estudo citado pela NASA identificou efeitos sobre a reprodução de peixes a jusante.</p>
        <div class="scale-strip">
          <div class="scale-card"><strong>Área diretamente transformada</strong><p>Margens, ilhas, vegetação, propriedades, vias e habitats que ficam dentro ou junto do reservatório.</p></div>
          <div class="scale-card"><strong>Trechos conectados pelo rio</strong><p>Mudanças no fluxo podem produzir efeitos a jusante, longe da barragem.</p></div>
          <div class="scale-card"><strong>Rede regional</strong><p>A energia produzida pode atender lugares muito distantes da área que sofreu a transformação física.</p></div>
        </div>
        <div class="concept-box"><strong>Conexão é uma chave geográfica.</strong><p>Um rio liga lugares. Uma rede elétrica também. A transformação ocorre em um ponto, mas seus benefícios e impactos podem circular por redes diferentes e alcançar territórios diferentes.</p></div>

        ${choice('4','Escalas','Por que observar apenas a área imediatamente ao lado de uma barragem é insuficiente?',[['a','Porque rios e redes de energia conectam lugares e podem distribuir efeitos em outras áreas'],['b','Porque toda consequência ocorre obrigatoriamente no mundo inteiro'],['c','Porque a localização da barragem não importa']],'a','Correto. Processos físicos e redes técnicas fazem os efeitos ultrapassarem o local da obra.','Compare a área diretamente transformada com trechos conectados pelo rio e com a rede que recebe a energia.')}

        <h3>4. Quem transforma, quem decide e quem recebe os resultados?</h3>
        <p>Uma transformação territorial envolve <strong>agentes</strong> com papéis e poderes diferentes. Em vez de falar genericamente em “o ser humano”, pergunte quem planeja, financia, executa, regula, utiliza e vive os efeitos.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Poder público</strong><p>Autoriza, regula, fiscaliza, planeja políticas e pode participar do investimento.</p></div>
          <div class="mini-card"><strong>Empresas e operadores</strong><p>Executam obras, produzem bens ou serviços e administram infraestruturas.</p></div>
          <div class="mini-card"><strong>Moradores e trabalhadores locais</strong><p>Vivem transformações do cotidiano, do acesso, do trabalho e do ambiente próximo.</p></div>
          <div class="mini-card"><strong>Usuários distantes</strong><p>Podem receber energia, produtos ou serviços sem viver diretamente a alteração da paisagem.</p></div>
        </div>
        <p>Isso não permite afirmar, sem pesquisa, que um grupo sempre ganha e outro sempre perde. Permite formular a pergunta correta: <strong>como os benefícios, riscos e custos foram distribuídos?</strong></p>

        ${choice('5','Agentes e interesses','Qual pergunta ajuda mais a investigar se os resultados de uma transformação foram distribuídos de maneira desigual?',[['a','Quem tomou decisões, quem recebeu benefícios, quem viveu os impactos e que evidências demonstram isso?'],['b','Qual elemento da paisagem é mais bonito?'],['c','Qual é o nome do continente onde ocorreu a obra?']],'a','Correto. A distribuição territorial dos benefícios e impactos exige identificar agentes e buscar evidências para cada grupo.','Procure poder de decisão, benefícios, impactos e evidências — não apenas uma descrição visual.')}

        <h3>5. Imagem de satélite é evidência poderosa — mas não responde tudo</h3>
        <p>As imagens Landsat permitem verificar uma mudança espacial extensa com precisão muito maior do que a memória de uma pessoa. Mas elas não mostram diretamente quem decidiu a obra, quem recebeu indenização, como mudou a renda de uma família ou o que moradores pensaram sobre a transformação.</p>
        <div class="evidence-grid">
          <div class="mini-card"><strong>Para ver mudança física</strong><p>Imagens de satélite, fotografias, mapas de uso e cobertura da terra, hidrografia e modelos de relevo.</p></div>
          <div class="mini-card"><strong>Para explicar causas e efeitos sociais</strong><p>Documentos públicos, estudos ambientais, dados econômicos, legislação, entrevistas, pesquisas e registros históricos.</p></div>
        </div>
        <div class="data-box">
          <strong class="card-title">Geotecnologia também acompanha transformações em andamento</strong>
          <p>No Brasil, o <strong>TerraBrasilis</strong>, desenvolvido pelo INPE, disponibiliza mapas, dados e serviços dos programas de monitoramento da vegetação nativa, como PRODES e DETER. O dado oficial ajuda a localizar e medir mudanças, mas ainda precisa ser interpretado conforme método, escala, período e finalidade.</p>
          <p><a href="https://terrabrasilis.dpi.inpe.br/" target="_blank" rel="noopener noreferrer">Abrir TerraBrasilis / INPE</a></p>
        </div>

        ${choice('6','Limites da evidência','Se queremos saber como uma transformação alterou o trabalho de pescadores locais, qual estratégia é mais adequada?',[['a','Usar apenas a cor da água na imagem de satélite'],['b','Combinar dados ambientais e espaciais com estudos, registros e informações sobre o trabalho e as pessoas envolvidas'],['c','Ignorar mapas e qualquer outra fonte']],'b','Isso. Perguntas sociais e ambientais complexas costumam exigir fontes diferentes que se complementam.','A imagem mostra mudanças espaciais, mas experiências, trabalho e decisões exigem outras evidências.')}

        <h3>6. Observatório do lugar onde vivo — terceira etapa</h3>
        <div class="field-box">
          <strong class="card-title">Agora investigue uma transformação no mesmo lugar escolhido no capítulo 01</strong>
          <p>Retome o mapa ou imagem usado no capítulo 02. Você não precisa encontrar uma grande obra. Uma rua asfaltada, terreno construído, córrego canalizado, árvore removida, praça reformada ou loteamento já permite investigar relações sociedade–natureza.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>Observe a superfície</strong><p>Há água, solo exposto, vegetação, pavimento, construções ou encostas? O que parece ter sido modificado?</p></div>
            <div class="mini-card"><strong>Monte uma cadeia</strong><p>Transformação → agente provável → processo natural afetado → possível consequência. Marque claramente o que é observado e o que ainda é hipótese.</p></div>
          </div>
          <p><strong>Acrescente uma evidência.</strong> Pode ser uma foto própria, imagem de satélite, mapa oficial, notícia local confiável, dado público ou comparação temporal. Registre fonte e data.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — interprete a transformação sem simplificar</h3>
          <div class="challenge-box">
            <strong>Desafio final: Porto Primavera</strong>
            <p>Usando as duas imagens Landsat e o texto do capítulo, produza uma explicação curta que contenha:</p>
            <p><span class="geo-chip">1 evidência visível</span><span class="geo-chip">1 processo natural relacionado</span><span class="geo-chip">2 grupos ou agentes</span><span class="geo-chip">2 escalas</span><span class="geo-chip">1 informação que a imagem não permite concluir</span></p>
            <details><summary>Critério de uma resposta forte</summary><p>Ela separa observação de inferência, mostra uma cadeia causa–consequência, evita dizer que todos receberam o mesmo resultado e indica qual fonte adicional seria necessária para responder ao que a imagem não mostra.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo integra relações sociedade–natureza, transformações do espaço, recursos hídricos, relevo, cobertura vegetal, impactos ambientais, agentes sociais, técnica, trabalho e escalas de análise. Esses elementos reaparecerão nos capítulos sobre fluxos, cidade, produção, recursos, riscos e governança ambiental.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> transformar a natureza é transformar relações espaciais. Para entender o resultado, observe processos naturais, identifique agentes, compare escalas, separe benefícios de impactos e use evidências suficientes para dizer para quem, onde e quando cada consequência ocorre.</div>
      `
    });
  }

  MBB.enableChapter?.('03 Sociedade', showChapter);
})();
