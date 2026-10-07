window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: 'era-eletronica',
  number: '02',
  unit: 'Ato 1 · Como chegamos aqui',
  menuTitle: 'Era eletrônica',
  technicalTitle: 'relé • válvula • Z3 • Colossus • ENIAC • programa armazenado • transistor',
  title: 'Quando o computador deixou de depender de engrenagens',
  objective: 'Entender a passagem da computação mecânica para a eletromecânica e eletrônica e por que o transistor abriu caminho para computadores menores.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">A máquina ganha velocidade</span>
      <h2>Uma engrenagem precisa se mover. Um circuito eletrônico pode mudar de estado sem esse movimento mecânico.</h2>
      <p>Essa diferença parece pequena, mas abriu caminho para uma mudança de escala na velocidade da computação.</p>
    </div>

    <h3>Relés: eletricidade ainda com movimento</h3>
    <div class="definition-box">
      <span class="term">Relé eletromecânico</span>
      <p>É um dispositivo que usa um sinal elétrico para abrir ou fechar contatos. Ele permite controle elétrico, mas ainda possui partes que se movimentam.</p>
    </div>
    <p>Máquinas como o <strong>Z3</strong>, de Konrad Zuse, mostraram que era possível construir computadores digitais programáveis usando relés. O Z3 entrou em operação em 1941 e trabalhava com representação binária.</p>

    <h3>Válvulas: o salto para a eletrônica</h3>
    <div class="definition-box">
      <span class="term">Válvula termiônica</span>
      <p>É um componente eletrônico capaz de controlar o fluxo de elétrons. Em computadores antigos, válvulas puderam funcionar como elementos de comutação sem depender do movimento mecânico de um relé a cada operação.</p>
    </div>
    <p>Máquinas eletrônicas tornaram os cálculos muito mais rápidos, mas as válvulas eram grandes, consumiam muita energia e produziam bastante calor.</p>

    <div class="note-box">
      <strong>“Qual foi o primeiro computador?” depende do critério.</strong>
      <p>Uma resposta correta precisa dizer o que está sendo comparado: máquina <strong>eletromecânica ou eletrônica</strong>? programável? de propósito geral? com programa armazenado? Por isso, diferentes marcos podem aparecer como “primeiros” sem significarem exatamente a mesma coisa.</p>
    </div>

    <div class="comparison-grid three">
      <article>
        <strong>Z3 — 1941</strong>
        <p>Digital, programável e eletromecânico. Utilizava relés e representação binária.</p>
      </article>
      <article>
        <strong>Colossus — 1944</strong>
        <p>Eletrônico e digital, criado para uma tarefa especializada de criptoanálise durante a Segunda Guerra Mundial.</p>
      </article>
      <article>
        <strong>ENIAC — 1945/1946</strong>
        <p>Eletrônico, digital e de propósito geral, embora sua programação original ainda exigisse configuração física da máquina.</p>
      </article>
    </div>

    <h3>ENIAC: um marco da computação eletrônica</h3>
    <p>O <strong>ENIAC</strong> foi desenvolvido nos Estados Unidos durante a Segunda Guerra Mundial para acelerar cálculos, incluindo tabelas balísticas. O projeto começou em 1943, ficou operacional no fim de 1945 e foi apresentado publicamente em 1946.</p>

    <figure class="historical-media wide">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Classic_shot_of_the_ENIAC.jpg"
           alt="Fotografia histórica do ENIAC em 1946 com um operador configurando a máquina"
           width="630" height="455" loading="lazy" decoding="async">
      <figcaption>
        <strong>ENIAC, 1946.</strong>
        Na frente, o cabo Irwin Goldstine configura uma das tabelas de funções. A máquina ocupava uma sala e utilizava cerca de 18 mil válvulas.
        <span class="credit">U.S. Army Photo · domínio público · Wikimedia Commons.</span>
      </figcaption>
    </figure>

    <div class="fact-strip" aria-label="Escala aproximada do ENIAC">
      <div><strong>≈ 18 mil</strong><span>válvulas</span></div>
      <div><strong>≈ 30 t</strong><span>peso</span></div>
      <div><strong>sala inteira</strong><span>escala física</span></div>
      <div><strong>eletrônico</strong><span>grande salto de velocidade</span></div>
    </div>

    <p>O ENIAC foi um grande marco da computação eletrônica digital de propósito geral. Mas sua programação original não funcionava como a de um notebook atual: preparar uma tarefa podia exigir configurar chaves e conectar cabos.</p>

    <div class="definition-box">
      <span class="term">Programa armazenado</span>
      <p>É o princípio de manter as instruções do programa em memória para que a própria máquina possa buscá-las e executá-las. Isso torna a mudança de programa muito mais flexível.</p>
    </div>
    <p>Máquinas do fim da década de 1940, como o <strong>Manchester Baby</strong>, demonstraram o programa armazenado eletronicamente em memória.</p>

    <h3>O problema agora era o tamanho</h3>
    <p>Se computadores continuassem dependendo de milhares de válvulas, aumentar sua complexidade seria cada vez mais difícil. Em 1947, nos Bell Labs, surgiu um componente que mudou essa trajetória.</p>

    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/1st-Transistor.jpg"
             alt="Primeiro transistor de contato pontual preservado nos Bell Labs"
             width="960" height="720" loading="lazy" decoding="async">
        <figcaption>
          <strong>Transistor de contato pontual de 1947.</strong>
          Fotografia do dispositivo histórico preservado nos Bell Labs.
          <span class="credit">Unitronic · CC BY-SA 3.0 · Wikimedia Commons.</span>
        </figcaption>
      </figure>
      <div>
        <div class="definition-box">
          <span class="term">Transistor</span>
          <p>É um dispositivo semicondutor capaz de controlar sinais ou correntes elétricas. Entre outras funções, pode atuar como uma <strong>chave eletrônica</strong>.</p>
        </div>
        <p>Transistores permitiram construir circuitos menores, mais eficientes e mais confiáveis que aqueles baseados em grandes quantidades de válvulas.</p>
        <div class="note-box compact">
          <strong>Não confunda:</strong>
          <p><strong>transistor</strong> é componente físico; <strong>bit</strong> é unidade de informação. Circuitos formados por transistores podem representar e processar estados associados a bits.</p>
        </div>
      </div>
    </div>

    <div class="essence">
      <strong>Essência</strong>
      <p>A computação passou da mecânica para relés e depois para válvulas eletrônicas. O ENIAC mostrou o poder da computação eletrônica em grande escala. O princípio de <strong>programa armazenado</strong> facilitou a troca de tarefas, e o transistor abriu o caminho para computadores cada vez menores.</p>
    </div>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Como saímos de uma sala cheia de componentes para um computador que uma pessoa poderia colocar sobre a mesa?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes e créditos</summary>
      <ul>
        <li><a href="https://www.computerhistory.org/timeline/computers/" target="_blank" rel="noopener">Computer History Museum — timeline de computadores</a></li>
        <li><a href="https://www.tnmoc.org/colossus" target="_blank" rel="noopener">The National Museum of Computing — Colossus</a></li>
        <li><a href="https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/" target="_blank" rel="noopener">Computer History Museum — transistor</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Classic_shot_of_the_ENIAC.jpg" target="_blank" rel="noopener">Wikimedia Commons — ENIAC</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:1st-Transistor.jpg" target="_blank" rel="noopener">Wikimedia Commons — transistor</a></li>
      </ul>
    </details>
  `
});