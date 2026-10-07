window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: 'o-que-e-computador',
  number: '04',
  unit: 'Ato 2 · Como funciona',
  menuTitle: 'O que é computador?',
  technicalTitle: 'computador • entrada • processamento • memória • saída • periféricos • sistemas',
  title: 'Afinal, o que é um computador?',
  objective: 'Construir uma definição técnica de computador que funcione mesmo quando a aparência do equipamento muda e classificar periféricos pelo papel que exercem no sistema.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Agora a pergunta faz sentido</span>
      <h2>ENIAC, IBM PC e smartphone quase não se parecem. Então a aparência não pode ser a definição.</h2>
      <p>Precisamos procurar o que permanece por baixo das formas diferentes.</p>
    </div>

    <div class="definition-box featured">
      <span class="term">Computador</span>
      <p><strong>É um dispositivo programável capaz de processar dados segundo instruções, podendo recebê-los, armazená-los e produzir ou comunicar resultados.</strong></p>
    </div>

    <h3>As quatro funções que reaparecem</h3>
    <div class="system-flow" aria-label="Entrada, processamento, memória e saída">
      <div class="flow-node"><strong>Entrada</strong><span>dados chegam</span></div>
      <span class="flow-arrow">→</span>
      <div class="flow-node processor"><strong>Processamento</strong><span>instruções operam sobre dados</span></div>
      <span class="flow-arrow">↔</span>
      <div class="flow-node"><strong>Memória</strong><span>dados e instruções ficam disponíveis</span></div>
      <span class="flow-arrow">→</span>
      <div class="flow-node"><strong>Saída</strong><span>resultado é produzido ou comunicado</span></div>
    </div>

    <div class="two-col">
      <div class="definition-box">
        <span class="term">Entrada</span>
        <p>É o fornecimento de dados ou sinais ao sistema. Teclado, toque, sensor e dados recebidos pela rede podem ser entradas.</p>
      </div>
      <div class="definition-box">
        <span class="term">Saída</span>
        <p>É um resultado produzido ou comunicado. Tela, som, impressão e dados enviados pela rede podem ser saídas.</p>
      </div>
    </div>

    <div class="two-col">
      <div class="definition-box">
        <span class="term">Processamento</span>
        <p>É a realização de operações sobre dados conforme instruções: calcular, comparar, ordenar, transformar e decidir são exemplos.</p>
      </div>
      <div class="definition-box">
        <span class="term">Memória</span>
        <p>É o recurso usado para manter dados e instruções disponíveis ao processamento. <strong>Cache e RAM</strong> são exemplos de memória. Já <strong>SSD e HDD</strong> são formas de armazenamento persistente e cumprem outra função.</p>
      </div>
    </div>

    <div class="note-box">
      <strong>Entrada → processamento → saída não basta para definir computador.</strong>
      <p>Uma máquina de lavar também recebe comandos e produz um resultado. O ponto decisivo é existir um sistema que <strong>execute instruções programadas e processe dados</strong>.</p>
    </div>

    <h3>Propósito geral e propósito específico</h3>
    <div class="comparison-grid">
      <article>
        <strong>Propósito geral</strong>
        <p>Executa muitos tipos de programas. Notebook e smartphone são exemplos: a mesma máquina pode editar texto, tocar música, acessar a Web ou executar um jogo.</p>
      </article>
      <article>
        <strong>Sistema especializado</strong>
        <p>É construído principalmente para uma função ou conjunto limitado de funções. Roteadores e controladores industriais são exemplos.</p>
      </article>
    </div>

    <h3>Periférico não é sinônimo de “coisa sem computação”</h3>
    <div class="definition-box">
      <span class="term">Periférico</span>
      <p>É um dispositivo usado para entrada, saída, armazenamento ou comunicação com um sistema computacional.</p>
    </div>
    <p>Teclado e mouse são periféricos do PC. Isso não significa que internamente sejam obrigatoriamente “eletrônica sem inteligência”: um teclado USB moderno pode conter um pequeno microcontrolador. <strong>A classificação depende também do nível em que estamos olhando.</strong></p>

    <h3>Entrada, saída ou os dois?</h3>
    <p>Uma classificação tradicional continua útil quando entendemos que ela descreve <strong>o papel do dispositivo em relação ao sistema</strong>. Em vez de decorar listas, pergunte: os dados estão chegando, saindo ou fazendo os dois movimentos?</p>
    <div class="comparison-grid four">
      <article><strong>Entrada</strong><p>Envia dados ou sinais para o sistema. Exemplos: teclado, mouse, scanner, microfone, webcam e sensores.</p></article>
      <article><strong>Saída</strong><p>Apresenta ou produz resultados. Exemplos: monitor, impressora, alto-falantes e projetor.</p></article>
      <article><strong>Entrada e saída</strong><p>Faz os dois papéis. Uma tela sensível ao toque exibe imagem e também recebe toques; um headset pode reunir fones e microfone.</p></article>
      <article><strong>Outros papéis úteis</strong><p>Armazenamento e comunicação merecem destaque próprio: SSD externo, pendrive, interface de rede e adaptador Bluetooth são exemplos.</p></article>
    </div>
    <div class="note-box compact">
      <strong>A classificação não é uma prisão.</strong>
      <p>Um dispositivo moderno pode reunir várias funções. Um smartphone, por exemplo, possui tela, microfones, câmeras, sensores, armazenamento e interfaces de rede no mesmo equipamento. <strong>Classificamos a função que estamos analisando.</strong></p>
    </div>
    <div class="mbb-pause-question">
      <strong>Experimente olhar ao redor</strong>
      <p>Escolha cinco dispositivos próximos e diga qual papel cada um exerce em relação ao computador: entrada, saída, entrada/saída, armazenamento ou comunicação. Se um deles tiver mais de um papel, explique por quê.</p>
    </div>

    <h3>Smartphone, roteador e Arduino</h3>
    <div class="comparison-grid three">
      <article>
        <strong>Smartphone</strong>
        <p>É um dispositivo computacional de propósito geral: possui processadores, memória e executa aplicativos variados.</p>
      </article>
      <article>
        <strong>Roteador</strong>
        <p>É um equipamento de rede que contém um sistema computacional especializado, com processador, memória e firmware.</p>
      </article>
      <article>
        <strong>Arduino</strong>
        <p>É uma plataforma de desenvolvimento baseada em microcontrolador. Pode ser usada para construir sistemas embarcados.</p>
      </article>
    </div>

    <div class="definition-box">
      <span class="term">Microcontrolador</span>
      <p>É um circuito integrado que reúne unidade de processamento, memória e recursos de entrada/saída, normalmente voltado ao controle de sistemas.</p>
    </div>

    <h3>Computador e sistema computacional</h3>
    <div class="definition-box">
      <span class="term">Sistema computacional</span>
      <p>É uma visão mais ampla: reúne os elementos necessários para realizar o processamento de informações, podendo envolver computador, hardware associado, software, dados e recursos de comunicação.</p>
    </div>
    <p>Num caixa de supermercado, por exemplo, podemos ter computador, leitor de código de barras, impressora, software, banco de dados e rede trabalhando juntos. Olhar só para a máquina física seria enxergar apenas parte do sistema.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Teste do critério</span>
      <h3>Classifique pelo papel principal</h3>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="O roteador possui processamento, memória e firmware para desempenhar funções específicas de rede.">
        <p>Um roteador doméstico é melhor descrito como:</p>
        <label><input type="radio" name="q4a" value="a"> apenas um periférico de saída.</label>
        <label><input type="radio" name="q4a" value="b"> equipamento que contém um sistema computacional especializado.</label>
        <label><input type="radio" name="q4a" value="c"> computador pessoal de propósito geral.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O teclado é um periférico em relação ao PC, mesmo que possa conter internamente eletrônica de controle.">
        <p>Um teclado USB em relação ao computador principal é:</p>
        <label><input type="radio" name="q4b" value="a"> sempre um computador de propósito geral.</label>
        <label><input type="radio" name="q4b" value="b"> parte da CPU.</label>
        <label><input type="radio" name="q4b" value="c"> um periférico de entrada.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A tela sensível ao toque apresenta informação e também recebe toques do usuário.">
        <p>Uma tela sensível ao toque pode ser classificada como:</p>
        <label><input type="radio" name="q4c" value="a"> entrada e saída, porque exibe e também recebe dados.</label>
        <label><input type="radio" name="q4c" value="b"> apenas armazenamento.</label>
        <label><input type="radio" name="q4c" value="c"> apenas processamento.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence">
      <strong>Essência</strong>
      <p>Computador não é definido por monitor, gabinete ou teclado. O critério central é ser um <strong>dispositivo programável que processa dados segundo instruções</strong>. Periféricos podem fornecer entrada, apresentar saída, fazer os dois papéis, armazenar ou comunicar dados. Sistemas computacionais combinam equipamentos, programas e dados para realizar uma solução completa.</p>
    </div>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Se o computador trabalha com dados, como texto, números, imagens e músicas conseguem ser representados dentro de circuitos eletrônicos?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes</summary>
      <ul>
        <li><a href="https://csrc.nist.gov/glossary/term/computer" target="_blank" rel="noopener">NIST — Computer</a></li>
        <li><a href="https://csrc.nist.gov/glossary/term/computing_device" target="_blank" rel="noopener">NIST — Computing device</a></li>
      </ul>
    </details>
  `
});