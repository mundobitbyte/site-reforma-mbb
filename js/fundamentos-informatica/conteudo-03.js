window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: 'computador-encolhe',
  number: '03',
  unit: 'Ato 1 · Como chegamos aqui',
  menuTitle: 'O computador encolhe',
  technicalTitle: 'gerações • circuito integrado • microprocessador • PC • x86 • multicore',
  title: 'Como uma máquina de toneladas chegou à mesa?',
  objective: 'Organizar as gerações de computadores, entender a miniaturização dos componentes e acompanhar, sem decorar catálogos, a ponte do PC clássico aos processadores atuais.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Miniaturização</span>
      <h2>O avanço não foi só fazer computadores mais rápidos. Foi colocar cada vez mais funções em cada vez menos espaço.</h2>
      <p>Essa trajetória ajuda a entender as chamadas <strong>gerações de computadores</strong>.</p>
    </div>

    <h3>As gerações — como mapa, não como calendário rígido</h3>
    <p>Livros podem apresentar datas um pouco diferentes porque as tecnologias coexistiram. O mais importante é identificar o <strong>componente predominante</strong> que marcou cada mudança.</p>

    <div class="table-wrap">
      <table class="generation-table">
        <thead>
          <tr><th>Geração</th><th>Período aproximado</th><th>Tecnologia característica</th><th>O que mudou</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1ª</strong></td><td>anos 1940–1950</td><td>Válvulas eletrônicas</td><td>Computação eletrônica em grande escala</td></tr>
          <tr><td><strong>2ª</strong></td><td>anos 1950–1960</td><td>Transistores</td><td>Menor tamanho e consumo, com maior confiabilidade</td></tr>
          <tr><td><strong>3ª</strong></td><td>anos 1960–1970</td><td>Circuitos integrados</td><td>Vários componentes fabricados no mesmo chip</td></tr>
          <tr><td><strong>4ª</strong></td><td>a partir dos anos 1970</td><td>Microprocessadores e alta integração</td><td>CPU integrada em chip e expansão dos microcomputadores</td></tr>
        </tbody>
      </table>
    </div>

    <div class="note-box">
      <strong>E a “5ª geração”?</strong>
      <p>O termo existe e ficou muito associado, a partir dos anos 1980, a projetos de inteligência artificial e processamento paralelo. Mas ele não corresponde a uma troca física simples de componente como válvula → transistor → circuito integrado → microprocessador. <strong>É uma classificação histórica menos uniforme e deve ser usada com cautela.</strong></p>
    </div>

    <h3>Terceira geração: vários componentes no mesmo chip</h3>
    <div class="definition-box">
      <span class="term">Circuito integrado (CI)</span>
      <p>É um circuito eletrônico no qual vários componentes são fabricados e interligados sobre uma pequena pastilha de material semicondutor.</p>
    </div>
    <p>Jack Kilby e Robert Noyce desenvolveram soluções fundamentais para o circuito integrado no fim da década de 1950. A ideia decisiva era a <strong>integração</strong>: colocar cada vez mais componentes no mesmo espaço.</p>

    <div class="definition-box compact">
      <span class="term">Chip</span>
      <p>É um termo comum para a pequena pastilha semicondutora que contém um circuito integrado. <strong>Chip não é sinônimo de processador.</strong> Existem chips de memória, comunicação, controle e muitas outras funções.</p>
    </div>

    <h3>Quarta geração: a CPU cabe em um chip</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Intel_C4004.jpg"
             alt="Microprocessador Intel C4004"
             width="1280" height="853" loading="lazy" decoding="async">
        <figcaption>
          <strong>Intel 4004.</strong>
          Lançado comercialmente em 1971, tornou-se um marco por reunir uma CPU completa em um único chip comercialmente disponível.
          <span class="credit">Thomas Nguyen · CC BY-SA 4.0 · Wikimedia Commons.</span>
        </figcaption>
      </figure>
      <div>
        <div class="definition-box">
          <span class="term">CPU — Unidade Central de Processamento</span>
          <p>É a unidade funcional responsável por buscar, interpretar e executar instruções e coordenar operações fundamentais do sistema.</p>
        </div>
        <div class="definition-box">
          <span class="term">Microprocessador</span>
          <p>É um circuito integrado que implementa uma unidade de processamento programável em um chip.</p>
        </div>
        <p>No uso cotidiano, “CPU”, “processador” e “microprocessador” aparecem muitas vezes como sinônimos. Tecnicamente, <strong>CPU descreve a função</strong>; o microprocessador é uma forma física de implementá-la. Um processador atual ainda pode reunir vários núcleos, memória cache e outros circuitos no mesmo encapsulamento.</p>
      </div>
    </div>

    <h3>Geração não é tipo de computador</h3>
    <p>Outro erro comum é misturar gerações com categorias de uso. Um mainframe moderno não é “um computador antigo da segunda geração”. Ele pode usar tecnologia atual.</p>

    <div class="comparison-grid four">
      <article>
        <strong>Mainframe</strong>
        <p>Projetado para enorme volume de transações, entrada/saída, disponibilidade e muitos usuários ou processos. Bancos e grandes organizações são exemplos clássicos de uso.</p>
      </article>
      <article>
        <strong>Supercomputador</strong>
        <p>Projetado para altíssimo desempenho computacional em problemas como simulações científicas, clima, física e pesquisa.</p>
      </article>
      <article>
        <strong>Minicomputador</strong>
        <p>Categoria histórica de máquinas menores e mais acessíveis que mainframes, importante nas décadas de 1960 e 1970.</p>
      </article>
      <article>
        <strong>Microcomputador</strong>
        <p>Computador que utiliza um microprocessador como unidade central de processamento. Essa redução de escala foi decisiva para a computação pessoal.</p>
      </article>
    </div>

    <h3>O computador se torna pessoal</h3>
    <p>Na década de 1970, máquinas como o <strong>Altair 8800</strong> e o <strong>Apple II</strong> ajudaram a expandir o microcomputador. Em 1981, o <strong>IBM PC 5150</strong> teve enorme influência no mercado e ajudou a consolidar a arquitetura dos chamados PCs compatíveis.</p>

    <figure class="historical-media wide">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/IBM_PC-5150.JPG"
           alt="IBM PC 5150 com monitor e teclado"
           width="1280" height="960" loading="lazy" decoding="async">
      <figcaption>
        <strong>IBM PC 5150.</strong>
        A imagem já se aproxima muito daquilo que, nas décadas seguintes, milhões de pessoas passaram a chamar simplesmente de “computador”.
        <span class="credit">Jordiferrer · CC BY-SA 3.0 · Wikimedia Commons.</span>
      </figcaption>
    </figure>

    <div class="definition-box">
      <span class="term">PC — Personal Computer</span>
      <p>Significa <strong>computador pessoal</strong>: um computador pensado principalmente para uso individual. “PC” não significa tecnicamente “computador com Windows”, embora o termo tenha ficado fortemente associado à família IBM PC e compatíveis.</p>
    </div>

    <h3>Do PC clássico ao computador atual — uma ponte rápida</h3>
    <p>Quem acompanhou os PCs nas décadas de 1980 e 1990 lembra de nomes como XT, AT, 286, 386, 486 e Pentium. Eles são úteis como <strong>marcos de uma evolução</strong>, não como uma lista para decorar.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Marco</th><th>O que vale perceber</th></tr></thead>
        <tbody>
          <tr><td><strong>IBM PC — 1981</strong></td><td>Usava o Intel 8088 e ajudou a consolidar uma plataforma que teria muitos compatíveis.</td></tr>
          <tr><td><strong>PC/XT — 1983</strong></td><td>Manteve a família 8088 e tornou comum, nessa linha, o uso de disco rígido interno.</td></tr>
          <tr><td><strong>PC/AT — 1984</strong></td><td>Adotou o 80286 e marcou uma nova etapa de capacidade e expansão da plataforma.</td></tr>
          <tr><td><strong>386 e 486</strong></td><td>A família x86 ganhou arquitetura de 32 bits e maior integração e desempenho.</td></tr>
          <tr><td><strong>Pentium — anos 1990</strong></td><td>Representa a fase em que os PCs se tornaram muito mais capazes em interfaces gráficas, multimídia e aplicações gerais.</td></tr>
          <tr><td><strong>Multicore — anos 2000</strong></td><td>Vários núcleos passaram a dividir trabalho dentro do mesmo processador.</td></tr>
          <tr><td><strong>Hoje</strong></td><td>CPUs podem reunir muitos núcleos, GPU integrada, controladores e, em algumas plataformas, aceleradores como NPU; outros dispositivos adotam SoCs altamente integrados.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="note-box compact">
      <strong>Não transforme essa linha em catálogo.</strong>
      <p>Entre esses marcos existiram muitas famílias e variações. O que interessa em Fundamentos é enxergar a direção: <strong>mais integração, mais paralelismo e mais funções especializadas dentro do sistema</strong>.</p>
    </div>

    <div class="essence">
      <strong>Essência</strong>
      <p>As gerações ajudam a enxergar a sequência <strong>válvulas → transistores → circuitos integrados → microprocessadores</strong>. A história dos PCs acrescenta outra ponte: <strong>8088/286/386/486/Pentium → multicore → integração atual</strong>. O objetivo não é decorar modelos, e sim entender como tamanho, integração, paralelismo e capacidade foram mudando.</p>
    </div>

    <section class="checkpoint" data-quiz-group>
      <span class="eyebrow">Checkpoint 1</span>
      <h3>Você consegue conectar a história?</h3>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A primeira geração é caracterizada principalmente pelo uso de válvulas eletrônicas.">
        <p>Por que o ENIAC é apresentado como exemplo clássico da primeira geração?</p>
        <label><input type="radio" name="cp1q1" value="a"> Porque foi o primeiro computador pessoal.</label>
        <label><input type="radio" name="cp1q1" value="b"> Porque seus circuitos eletrônicos utilizavam grande quantidade de válvulas.</label>
        <label><input type="radio" name="cp1q1" value="c"> Porque já utilizava microprocessador.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O circuito integrado permitiu fabricar vários componentes em uma mesma pastilha semicondutora.">
        <p>Qual mudança caracteriza melhor a terceira geração?</p>
        <label><input type="radio" name="cp1q2" value="a"> A substituição de programas por cabos.</label>
        <label><input type="radio" name="cp1q2" value="b"> A invenção do teclado.</label>
        <label><input type="radio" name="cp1q2" value="c"> A integração de vários componentes em um mesmo circuito.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Mainframe e supercomputador são categorias com objetivos diferentes; nenhum dos dois é simplesmente uma geração histórica.">
        <p>Qual afirmação é mais correta?</p>
        <label><input type="radio" name="cp1q3" value="a"> Mainframe e supercomputador são categorias de máquinas com finalidades diferentes.</label>
        <label><input type="radio" name="cp1q3" value="b"> Mainframe significa computador da segunda geração.</label>
        <label><input type="radio" name="cp1q3" value="c"> Todo supercomputador é um PC muito grande.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="CPU descreve a unidade funcional de processamento; microprocessador é uma implementação dessa capacidade em circuito integrado.">
        <p>Por que CPU e microprocessador não são conceitos perfeitamente idênticos?</p>
        <label><input type="radio" name="cp1q4" value="a"> Porque CPU só existe em mainframes.</label>
        <label><input type="radio" name="cp1q4" value="b"> Porque microprocessador não executa instruções.</label>
        <label><input type="radio" name="cp1q4" value="c"> Porque CPU descreve uma função; microprocessador descreve uma implementação física integrada.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Depois de tantas mudanças de tamanho e aparência, o que ainda permite dizer que ENIAC, notebook e smartphone fazem parte da mesma história da computação?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes e créditos</summary>
      <ul>
        <li><a href="https://www.computerhistory.org/siliconengine/microprocessor-integrates-cpu-function-onto-a-single-chip/" target="_blank" rel="noopener">Computer History Museum — microprocessador</a></li>
        <li><a href="https://www.computerhistory.org/timeline/1981/" target="_blank" rel="noopener">Computer History Museum — IBM PC</a></li>
        <li><a href="https://www.computerhistory.org/timeline/1984/" target="_blank" rel="noopener">Computer History Museum — evolução dos PCs nos anos 1980</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Intel_C4004.jpg" target="_blank" rel="noopener">Wikimedia Commons — Intel 4004</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:IBM_PC-5150.JPG" target="_blank" rel="noopener">Wikimedia Commons — IBM PC 5150</a></li>
      </ul>
    </details>
  `
});