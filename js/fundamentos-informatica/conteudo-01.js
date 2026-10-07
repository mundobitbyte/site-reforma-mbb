window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: 'da-conta-a-maquina',
  number: '01',
  unit: 'Ato 1 · Como chegamos aqui',
  menuTitle: 'Da conta à máquina',
  technicalTitle: 'Babbage • Ada Lovelace • programa • algoritmo • dados • Hollerith',
  title: 'Como uma calculadora virou a ideia de uma máquina programável?',
  objective: 'Perceber a diferença entre automatizar uma tarefa específica e construir uma máquina capaz de receber diferentes instruções.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Século XIX</span>
      <h2>O problema não era só calcular. Era calcular muito — e repetir sem errar.</h2>
      <p>Charles Babbage trabalhava com tabelas matemáticas produzidas manualmente. Erros nessas tabelas o incomodavam porque poderiam se propagar para atividades como navegação e astronomia.</p>
      <p>Sua primeira pergunta foi prática: <strong>por que não fazer a máquina executar esses cálculos?</strong></p>
    </div>

    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Differenceengine.jpg"
             alt="Reconstrução moderna da Difference Engine número 2 projetada por Charles Babbage"
             width="960" height="1034" loading="lazy" decoding="async">
        <figcaption>
          <strong>Difference Engine nº 2.</strong>
          Reconstrução moderna baseada nos projetos de Babbage — não é a máquina original do século XIX.
          <span class="credit">Strife911 · CC BY-SA 4.0 · Wikimedia Commons.</span>
        </figcaption>
      </figure>
      <div>
        <h3>Primeiro: automatizar um cálculo</h3>
        <p>A <strong>Difference Engine</strong> foi concebida para calcular determinados tipos de tabelas matemáticas usando mecanismos e engrenagens. Era uma máquina especializada.</p>
        <div class="definition-box compact">
          <span class="term">Máquina especializada</span>
          <p>É projetada para executar uma tarefa ou um conjunto limitado de tarefas.</p>
        </div>
        <p>O projeto já previa algo importante: além de calcular, a máquina deveria produzir os resultados sem depender de nova cópia manual.</p>
      </div>
    </div>

    <h3>A ideia fica muito maior</h3>
    <p>Em 1834, Babbage começou a conceber a <strong>Analytical Engine</strong>. A mudança essencial não era apenas uma máquina “mais potente”. Ela seria <strong>programável e de propósito geral</strong>.</p>

    <div class="concept-flow" aria-label="Ideia central da máquina programável">
      <div><strong>Mesma máquina</strong><span>parte física</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>Instruções diferentes</strong><span>programa</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>Tarefas diferentes</strong><span>resultado</span></div>
    </div>

    <div class="two-col">
      <div class="definition-box">
        <span class="term">Instrução</span>
        <p>É uma operação que a máquina deve executar.</p>
      </div>
      <div class="definition-box">
        <span class="term">Programa</span>
        <p>É um conjunto organizado de instruções que orienta a execução de uma tarefa.</p>
      </div>
    </div>

    <p>Babbage chamava de <em>store</em> a parte destinada a manter valores e de <em>mill</em> a parte destinada às operações. Não eram RAM e CPU modernas, mas a separação funcional já lembrava <strong>memória e processamento</strong>.</p>

    <div class="mbb-pause-question">
      <strong>O salto conceitual</strong>
      <p>A máquina física pode permanecer a mesma enquanto as instruções mudam. Essa separação é uma das raízes da computação programável.</p>
    </div>

    <div class="media-text reverse">
      <figure class="historical-media portrait">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg"
             alt="Retrato de Ada Lovelace"
             width="960" height="1379" loading="lazy" decoding="async">
        <figcaption>
          <strong>Ada Lovelace.</strong>
          Retrato em aquarela atribuído a Alfred Edward Chalon, c. 1840.
          <span class="credit">Domínio público · Wikimedia Commons.</span>
        </figcaption>
      </figure>
      <div>
        <h3>Ada Lovelace e os passos para a máquina</h3>
        <p>Em 1843, Ada Lovelace publicou notas extensas sobre a Analytical Engine. Uma delas descrevia uma sequência de operações para calcular números de Bernoulli.</p>
        <div class="definition-box compact">
          <span class="term">Algoritmo</span>
          <p>É uma sequência organizada e finita de passos para resolver um problema ou realizar uma tarefa.</p>
        </div>
        <p>É comum chamá-la de “primeira programadora”. A associação tem fundamento, mas merece nuance: Babbage também havia escrito algoritmos em seus cadernos. O ponto historicamente seguro é que Ada publicou um dos primeiros algoritmos destinados a uma máquina de computação de propósito geral e percebeu algo ainda maior: <strong>se símbolos pudessem ser representados, a máquina poderia trabalhar com mais do que números.</strong></p>
      </div>
    </div>

    <h3>De calcular números a processar dados</h3>
    <p>No fim do século XIX, <strong>Herman Hollerith</strong> mostrou outra direção. No censo dos Estados Unidos de 1890, informações sobre pessoas foram registradas em cartões perfurados e processadas por máquinas de tabulação.</p>

    <figure class="historical-media wide">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/1890_Census_Hollerith_Electrical_Counting_Machines_Sci_Amer.jpg"
           alt="Ilustração histórica de 1890 mostrando máquina de tabulação de Hollerith usada no censo dos Estados Unidos"
           width="622" height="480" loading="lazy" decoding="async">
      <figcaption>
        <strong>Máquina de tabulação de Hollerith no censo de 1890.</strong>
        Ilustração publicada pela <em>Scientific American</em> em 1890, mostrando o processamento de grandes volumes de registros.
        <span class="credit">Scientific American, 1890 · domínio público · Wikimedia Commons.</span>
      </figcaption>
    </figure>

    <div class="definition-box">
      <span class="term">Dado</span>
      <p>É uma representação registrada de um valor, fato, símbolo ou ocorrência que pode ser armazenada e processada. A diferença entre <strong>dado</strong> e <strong>informação</strong> ficará mais clara quando analisarmos como essas representações ganham significado.</p>
    </div>

    <div class="essence">
      <strong>Essência</strong>
      <p>Babbage mostrou a passagem de uma máquina especializada para a ideia de uma <strong>máquina programável</strong>. Ada ajudou a perceber que instruções e representações poderiam levar a usos muito além da aritmética. Hollerith reforçou outra mudança: máquinas também poderiam processar grandes volumes de <strong>dados</strong>.</p>
    </div>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Engrenagens e cartões já resolviam parte do problema. Mas como fazer tudo isso muito mais rápido usando eletricidade?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes e créditos</summary>
      <ul>
        <li><a href="https://www.computerhistory.org/babbage/history/" target="_blank" rel="noopener">Computer History Museum — Babbage e Ada</a></li>
        <li><a href="https://americanhistory.si.edu/collections/object-groups/punch-cards/punch-cards-data-processing" target="_blank" rel="noopener">Smithsonian — cartões perfurados e processamento de dados</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Differenceengine.jpg" target="_blank" rel="noopener">Wikimedia Commons — Difference Engine</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Ada_Lovelace_portrait.jpg" target="_blank" rel="noopener">Wikimedia Commons — Ada Lovelace</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:1890_Census_Hollerith_Electrical_Counting_Machines_Sci_Amer.jpg" target="_blank" rel="noopener">Wikimedia Commons — Hollerith</a></li>
      </ul>
    </details>
  `
});