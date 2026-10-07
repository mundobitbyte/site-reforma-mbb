window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: 'bits-bytes',
  number: '05',
  unit: 'Ato 2 · Como funciona',
  menuTitle: 'Bits e Bytes',
  technicalTitle: 'analógico • digital • decimal • binário • octal • hexadecimal • bit • byte • ASCII • Unicode • unidades',
  title: 'Como texto, imagens e músicas viram dados?',
  objective: 'Entender representação digital, sistemas de numeração usados em computação, bit e byte e como números, caracteres, imagens e sons podem ser codificados.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">A pergunta invisível</span>
      <h2>Dentro do SSD não existe uma fotografia em miniatura.</h2>
      <p>Também não existe uma letra “A” guardada fisicamente como letra. Para armazenar e processar informação, precisamos <strong>representá-la</strong> de uma forma que os circuitos consigam distinguir.</p>
    </div>

    <h3>O mundo varia; o computador precisa registrar</h3>
    <p>Pense num microfone captando uma voz. A pressão do ar muda continuamente. Um sensor de temperatura também pode produzir um sinal que acompanha pequenas variações do ambiente. Mas, se queremos <strong>guardar, copiar e processar</strong> essas medições num computador, precisamos transformá-las em valores que o sistema consiga distinguir e representar.</p>
    <div class="concept-flow" aria-label="Da grandeza física à representação digital">
      <div><strong>Mundo físico</strong><span>som, luz, temperatura</span></div><span class="flow-arrow">→</span>
      <div><strong>Medição</strong><span>sinal varia</span></div><span class="flow-arrow">→</span>
      <div><strong>Representação</strong><span>valores discretos</span></div>
    </div>
    <p>É dessa necessidade que nasce uma distinção importante: algumas grandezas podem variar de forma contínua; uma representação digital trabalha com estados ou valores <strong>discretos</strong>.</p>

    <div class="comparison-grid">
      <article>
        <strong>Analógico</strong>
        <p>Representa uma grandeza que pode variar continuamente dentro de um intervalo, como uma tensão ou um sinal de áudio antes da digitalização.</p>
      </article>
      <article>
        <strong>Digital</strong>
        <p>Representa valores por estados discretos, isto é, estados que podemos distinguir individualmente.</p>
      </article>
    </div>

    <div class="note-box">
      <strong>Digital não significa obrigatoriamente binário.</strong>
      <p>O ENIAC era digital e trabalhava principalmente com representação decimal. <strong>Binário</strong> é um caso de representação digital que utiliza dois símbolos ou estados.</p>
    </div>

    <h3>Antes do binário: o que significa uma posição?</h3>
    <p>Estamos acostumados ao decimal, por isso quase nunca percebemos a regra. Em <code>352</code>, o algarismo 3 não vale apenas “3”: ele está na posição das centenas. O 5 está na posição das dezenas e o 2 na posição das unidades.</p>
    <div class="example-box compact">
      <strong>Valor posicional em base 10</strong>
      <p><code>352₁₀ = 3×10² + 5×10¹ + 2×10⁰ = 300 + 50 + 2</code></p>
    </div>
    <p>Essa é a ideia que reaparece nas outras bases: <strong>o algarismo informa quanto usamos; a posição informa o peso daquela casa.</strong></p>

    <h3>Por que a computação moderna usa tanto dois estados?</h3>
    <p>Se um circuito precisa diferenciar estados confiavelmente, trabalhar com duas faixas bem separadas é muito conveniente. Em vez de tentar representar dez símbolos físicos diferentes diretamente, podemos construir circuitos que distinguem duas condições e combiná-las para representar quantidades cada vez maiores.</p>
    <div class="definition-box">
      <span class="term">Sistema binário</span>
      <p>É um sistema de numeração de <strong>base 2</strong>, que utiliza apenas os algarismos <strong>0 e 1</strong>.</p>
    </div>
    <p>Circuitos eletrônicos podem ser projetados para distinguir duas condições físicas com boa margem de segurança. Podemos representá-las, por convenção, como:</p>

    <div class="binary-states" aria-label="Dois estados binários">
      <div><strong>0</strong><span>um estado</span></div>
      <div><strong>1</strong><span>outro estado</span></div>
    </div>

    <div class="danger-box compact">
      <strong>Importante:</strong>
      <p>Não existem pequenos algarismos 0 e 1 “correndo” dentro do computador. <strong>0 e 1 são símbolos usados por nós para representar estados físicos que o circuito consegue distinguir.</strong></p>
    </div>

    <div class="definition-box featured">
      <span class="term">Bit</span>
      <p>É um <strong>dígito binário</strong> capaz de representar um entre dois estados possíveis, convencionalmente indicados por 0 e 1.</p>
    </div>

    <h3>Mais bits, mais combinações</h3>
    <div class="bit-combinations">
      <div><strong>1 bit</strong><span>2 combinações</span><code>0 · 1</code></div>
      <div><strong>2 bits</strong><span>4 combinações</span><code>00 · 01 · 10 · 11</code></div>
      <div><strong>3 bits</strong><span>8 combinações</span><code>000 ... 111</code></div>
      <div><strong>8 bits</strong><span>256 combinações</span><code>00000000 ... 11111111</code></div>
    </div>
    <p>Em geral, <strong>n bits permitem 2<sup>n</sup> combinações</strong>. O importante agora não é decorar a fórmula: é perceber que aumentar a quantidade de bits aumenta a quantidade de estados que podemos representar.</p>

    <h3>Binário usa a mesma regra do decimal — mas com potências de 2</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Casa</th><th>2⁷</th><th>2⁶</th><th>2⁵</th><th>2⁴</th><th>2³</th><th>2²</th><th>2¹</th><th>2⁰</th></tr></thead>
        <tbody><tr><td><strong>Peso</strong></td><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody>
      </table>
    </div>
    <p>Em cada posição, <strong>1 significa “use este peso”</strong> e <strong>0 significa “não use este peso”</strong>.</p>

    <h3>Decimal → binário: decomponha o número</h3>
    <p>Vamos representar <strong>35</strong>. Usaremos oito posições apenas para enxergar um byte completo. Começamos do maior peso e perguntamos se ele cabe no valor que falta.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Peso</th><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr></thead>
        <tbody>
          <tr><td><strong>Bit</strong></td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
        </tbody>
      </table>
    </div>
    <div class="example-box">
      <strong>Raciocínio</strong>
      <p>128 não cabe em 35 → 0. 64 não cabe → 0. 32 cabe → 1 e restam 3. 16, 8 e 4 não cabem → 0. 2 cabe → 1 e resta 1. 1 cabe → 1.</p>
      <p><strong>35₁₀ = 100011₂.</strong> Quando queremos mostrar esse valor em um byte, completamos à esquerda: <strong>00100011</strong>.</p>
    </div>
    <div class="note-box compact">
      <strong>Zero à esquerda não muda o valor.</strong>
      <p><code>100011₂</code> e <code>00100011₂</code> representam a mesma quantidade. Os zeros extras apenas mostram que estamos reservando oito posições.</p>
    </div>

    <h3>Binário → decimal: use os pesos para conferir</h3>
    <div class="example-box compact">
      <strong>Volte pelo mesmo caminho</strong>
      <p><code>00100011₂ = 32 + 2 + 1 = 35₁₀</code>.</p>
    </div>
    <p>O método é útil justamente porque conversão e conferência usam o mesmo modelo mental.</p>
    <details class="sources-box">
      <summary>Aprofunde: outro método para decimal → binário</summary>
      <p>Também é possível dividir repetidamente o número por 2 e guardar os restos. É um método sistemático e importante de conhecer. Para começar, porém, a decomposição em potências de 2 deixa mais visível <strong>o valor de cada posição</strong>.</p>
    </details>

    <h3>Octal e hexadecimal não são “outros tipos de número”</h3>
    <p>A quantidade continua sendo a mesma; muda a forma de escrevê-la. A regra posicional continua funcionando.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Base</th><th>Símbolos</th><th>Peso das posições</th><th>Onde aparece</th></tr></thead>
        <tbody>
          <tr><td><strong>Decimal — base 10</strong></td><td>0–9</td><td>... 100, 10, 1</td><td>uso cotidiano</td></tr>
          <tr><td><strong>Binário — base 2</strong></td><td>0–1</td><td>... 8, 4, 2, 1</td><td>representação digital</td></tr>
          <tr><td><strong>Octal — base 8</strong></td><td>0–7</td><td>... 64, 8, 1</td><td>representações compactas; permissões Unix são um uso conhecido</td></tr>
          <tr><td><strong>Hexadecimal — base 16</strong></td><td>0–9 e A–F</td><td>... 256, 16, 1</td><td>endereços, depuração, cores e representação compacta de bytes</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Por que hexadecimal combina tão bem com binário?</h3>
    <p>Quatro bits possuem 16 combinações. Por isso, <strong>cada algarismo hexadecimal representa exatamente um grupo de 4 bits</strong>.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Binário</th><th>Hex</th><th>Decimal</th><th>Binário</th><th>Hex</th><th>Decimal</th></tr></thead>
        <tbody>
          <tr><td>0000</td><td>0</td><td>0</td><td>1000</td><td>8</td><td>8</td></tr>
          <tr><td>0001</td><td>1</td><td>1</td><td>1001</td><td>9</td><td>9</td></tr>
          <tr><td>0010</td><td>2</td><td>2</td><td>1010</td><td>A</td><td>10</td></tr>
          <tr><td>0011</td><td>3</td><td>3</td><td>1011</td><td>B</td><td>11</td></tr>
          <tr><td>0100</td><td>4</td><td>4</td><td>1100</td><td>C</td><td>12</td></tr>
          <tr><td>0101</td><td>5</td><td>5</td><td>1101</td><td>D</td><td>13</td></tr>
          <tr><td>0110</td><td>6</td><td>6</td><td>1110</td><td>E</td><td>14</td></tr>
          <tr><td>0111</td><td>7</td><td>7</td><td>1111</td><td>F</td><td>15</td></tr>
        </tbody>
      </table>
    </div>
    <div class="example-box">
      <strong>O mesmo 35 em três escritas</strong>
      <p><code>35₁₀ = 0010 0011₂ = 23₁₆</code>.</p>
      <p>Em hexadecimal, <code>2×16 + 3 = 35</code>. Outro exemplo muito comum: <code>FF₁₆ = 15×16 + 15 = 255₁₀</code>.</p>
    </div>
    <div class="note-box compact">
      <strong>E o octal?</strong>
      <p>A mesma ideia vale para base 8. Cada algarismo octal corresponde a <strong>3 bits</strong>. Ele merece ser reconhecido, mas hoje o hexadecimal costuma aparecer com mais frequência em cursos de informática geral.</p>
    </div>

    <div class="mbb-pause-question">
      <strong>Teste sem fórmula nova</strong>
      <p>Qual é o valor decimal de <code>10110₂</code>? Use os pesos. Depois tente escrever <code>15₁₀</code> em binário e hexadecimal. Confira apenas depois de terminar.</p>
      <details class="note-box compact"><summary><strong>Conferir</strong></summary><p><code>10110₂ = 16 + 4 + 2 = 22₁₀</code>. <code>15₁₀ = 1111₂ = F₁₆</code>.</p></details>
    </div>

    <h3>Um padrão de bits não traz significado sozinho</h3>
    <div class="code-focus"><code>01000001</code></div>
    <p>Isso é número? letra? cor? parte de uma instrução?</p>
    <p><strong>Sem conhecer a regra de interpretação, não sabemos.</strong> Bits ganham significado quando um formato ou uma convenção diz como interpretá-los.</p>

    <div class="two-col">
      <div class="definition-box">
        <span class="term">Dado</span>
        <p>É uma representação registrada de um valor, fato, símbolo ou ocorrência que pode ser armazenada e processada.</p>
      </div>
      <div class="definition-box">
        <span class="term">Informação</span>
        <p>É o significado obtido quando dados são interpretados dentro de um contexto.</p>
      </div>
    </div>
    <div class="example-box compact">
      <strong>Exemplo:</strong>
      <p><code>38</code> é um dado. “Temperatura do paciente: <strong>38 °C</strong>” acrescenta contexto e permite interpretar o dado como informação.</p>
    </div>

    <h3>Byte</h3>
    <div class="definition-box">
      <span class="term">Byte</span>
      <p>É uma sequência de <strong>8 bits</strong>. Como 8 bits permitem 256 combinações, um byte pode representar 256 padrões diferentes.</p>
    </div>

    <h3>Como uma letra vira bits?</h3>
    <p>Precisamos de uma convenção que associe caracteres a valores numéricos. Um padrão histórico muito importante é o <strong>ASCII</strong>, que usa 7 bits para 128 códigos.</p>
    <div class="encoding-demo">
      <span>caractere</span><strong>A</strong><span>→ código</span><strong>65</strong><span>→ bits</span><code>01000001</code>
    </div>
    <p>O padrão não afirma que “01000001 é naturalmente A”. Ele estabelece uma <strong>convenção</strong> para que sistemas interpretem esse valor como o caractere A.</p>

    <h3>Uma pequena tabela ASCII para consultar — não para decorar</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Caractere</th><th>Decimal</th><th>Hex</th><th>Observação</th></tr></thead>
        <tbody>
          <tr><td><code>espaço</code></td><td>32</td><td>20</td><td>separa palavras sem desenhar símbolo visível</td></tr>
          <tr><td><code>0</code></td><td>48</td><td>30</td><td>primeiro algarismo decimal no ASCII</td></tr>
          <tr><td><code>9</code></td><td>57</td><td>39</td><td>último algarismo decimal</td></tr>
          <tr><td><code>A</code></td><td>65</td><td>41</td><td>maiúscula</td></tr>
          <tr><td><code>Z</code></td><td>90</td><td>5A</td><td>maiúscula</td></tr>
          <tr><td><code>a</code></td><td>97</td><td>61</td><td>minúscula</td></tr>
          <tr><td><code>z</code></td><td>122</td><td>7A</td><td>minúscula</td></tr>
        </tbody>
      </table>
    </div>
    <div class="example-box compact">
      <strong>BIT em códigos ASCII decimais</strong>
      <p><code>B → 66</code> · <code>I → 73</code> · <code>T → 84</code>. A palavra continua sendo texto para nós, mas o computador precisa de uma regra que relacione caracteres e valores.</p>
    </div>
    <div class="note-box compact">
      <strong><code>A</code> e <code>a</code> não são o mesmo código.</strong>
      <p>Maiúsculas e minúsculas ocupam posições diferentes. Esse detalhe ajuda a entender por que comparações de texto podem distinguir letras que parecem relacionadas.</p>
    </div>

    <h3>Unicode e UTF-8</h3>
    <p>ASCII não consegue representar todos os sistemas de escrita do mundo. O <strong>Unicode</strong> atribui pontos de código a caracteres de muitas línguas, símbolos e outros elementos.</p>
    <p>O <strong>UTF-8</strong> é uma forma de codificar pontos de código Unicode usando sequências de <strong>1 a 4 bytes</strong>.</p>
    <div class="note-box compact">
      <strong>Logo:</strong>
      <p><strong>Um caractere não tem tamanho fixo de 1 byte.</strong> Em UTF-8, a quantidade de bytes depende do ponto de código representado, e alguns símbolos visuais podem até combinar mais de um ponto de código.</p>
    </div>

    <h3>E imagens e sons?</h3>
    <div class="comparison-grid">
      <article>
        <strong>Imagem</strong>
        <p>Pode ser representada por pixels. Em uma representação RGB comum, componentes de cor podem usar valores de 0 a 255. Esse intervalo aparece porque <strong>8 bits oferecem 256 combinações</strong>. Na Web, cores também aparecem frequentemente em hexadecimal, como <code>#FF0000</code> para vermelho.</p>
      </article>
      <article>
        <strong>Áudio</strong>
        <p>Um sinal pode ser medido em vários instantes. A coleta dessas medições é a <strong>amostragem</strong>; a transformação das medições em valores discretos envolve <strong>quantização</strong>.</p>
      </article>
    </div>

    <div class="representation-flow" aria-label="Representação digital">
      <div><strong>mundo real</strong><span>texto · imagem · som · medições</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>regras de representação</strong></div>
      <span class="flow-arrow">→</span>
      <div><strong>números / códigos</strong></div>
      <span class="flow-arrow">→</span>
      <div><strong>bits e bytes</strong></div>
    </div>
    <p>Essa passagem é uma das ideias centrais do módulo: <strong>fenômenos e símbolos do mundo são representados digitalmente; depois software e hardware interpretam essas representações para produzir algo útil de volta ao mundo.</strong></p>

    <h3>Como circuitos fazem alguma coisa com bits?</h3>
    <p>Transistores podem ser combinados em circuitos que implementam operações lógicas. Entre as mais básicas estão <strong>NOT</strong>, <strong>AND</strong> e <strong>OR</strong>.</p>
    <p>Para compreender a ideia central neste momento, basta perceber a cadeia:</p>
    <div class="mbb-pause-question">
      <strong>transistores → portas lógicas → circuitos maiores → processamento</strong>
      <p>Funções muito complexas podem surgir da combinação de uma quantidade enorme de operações simples.</p>
    </div>

    <h3>kB, MB, GB e TB</h3>
    <p>Para medir quantidades de dados, usamos múltiplos do byte.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Unidade</th><th>Valor decimal</th></tr></thead>
        <tbody>
          <tr><td>1 kB</td><td>1.000 bytes</td></tr>
          <tr><td>1 MB</td><td>1.000.000 bytes</td></tr>
          <tr><td>1 GB</td><td>1.000.000.000 bytes</td></tr>
          <tr><td>1 TB</td><td>1.000.000.000.000 bytes</td></tr>
        </tbody>
      </table>
    </div>
    <p>Para potências de 2 existem os prefixos <strong>KiB, MiB, GiB</strong>: por exemplo, 1 KiB = 1.024 bytes. Muitos programas ainda usam nomenclaturas históricas de forma inconsistente, por isso é comum encontrar diferenças no uso real.</p>

    <h3>b e B não são a mesma coisa</h3>
    <div class="unit-contrast">
      <div><strong>b</strong><span>bit</span></div>
      <div><strong>B</strong><span>byte = 8 bits</span></div>
    </div>
    <p>Por isso, <strong>600 Mb/s</strong> não significa 600 MB/s. Apenas convertendo bits para bytes:</p>
    <div class="code-focus"><code>600 Mb/s ÷ 8 = 75 MB/s</code></div>
    <p>Na prática, protocolos e outras condições ainda afetam a taxa observada.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span>
      <h3>O significado está firme?</h3>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Sem conhecer a codificação ou o contexto, um padrão de bits não possui um significado único.">
        <p>Ao encontrar <code>01000001</code>, podemos afirmar imediatamente que é a letra A?</p>
        <label><input type="radio" name="q5a" value="a"> Sim, qualquer sequência de 8 bits é uma letra.</label>
        <label><input type="radio" name="q5a" value="b"> Sim, porque todo byte usa ASCII.</label>
        <label><input type="radio" name="q5a" value="c"> Não. Precisamos saber como aquele padrão está sendo interpretado.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="b minúsculo representa bit; B maiúsculo representa byte.">
        <p>Uma conexão de 800 Mb/s está anunciando:</p>
        <label><input type="radio" name="q5b" value="a"> 800 megabytes por segundo.</label>
        <label><input type="radio" name="q5b" value="b"> 800 megabits por segundo.</label>
        <label><input type="radio" name="q5b" value="c"> 800 milhões de arquivos por segundo.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="1101₂ representa 8 + 4 + 1, totalizando 13 no sistema decimal.">
        <p>Qual é o valor decimal de <code>1101₂</code>?</p>
        <label><input type="radio" name="q5c" value="a"> 13</label>
        <label><input type="radio" name="q5c" value="b"> 11</label>
        <label><input type="radio" name="q5c" value="c"> 1101</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="35 decimal é 32 + 2 + 1, portanto 100011 em binário; em oito posições, 00100011.">
        <p>Qual byte representa corretamente <strong>35₁₀</strong> em binário?</p>
        <label><input type="radio" name="q5d" value="a"> <code>00110101</code></label>
        <label><input type="radio" name="q5d" value="b"> <code>00011011</code></label>
        <label><input type="radio" name="q5d" value="c"> <code>00100011</code></label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Quatro bits formam 16 combinações, por isso um dígito hexadecimal representa exatamente um grupo de 4 bits.">
        <p>Por que hexadecimal é tão conveniente ao ler valores binários?</p>
        <label><input type="radio" name="q5e" value="a"> Porque usa apenas 0 e 1.</label>
        <label><input type="radio" name="q5e" value="b"> Porque cada dígito hexadecimal corresponde a 4 bits.</label>
        <label><input type="radio" name="q5e" value="c"> Porque todo caractere ocupa exatamente um byte.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Texto, imagem e áudio podem ser convertidos em representações numéricas e codificados em bits.">
        <p>Como uma foto e uma música podem ser armazenadas no mesmo SSD?</p>
        <label><input type="radio" name="q5f" value="a"> Porque ambas podem ser representadas digitalmente como dados codificados em bits.</label>
        <label><input type="radio" name="q5f" value="b"> Porque o SSD guarda uma miniatura física de cada conteúdo.</label>
        <label><input type="radio" name="q5f" value="c"> Porque fotos e músicas são o mesmo formato de arquivo.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence">
      <strong>Essência</strong>
      <p>Sistemas de numeração usam a mesma ideia de <strong>valor posicional</strong> com bases diferentes. O binário usa potências de 2; octal e hexadecimal oferecem formas compactas de representar padrões binários. <strong>Bit</strong> representa um entre dois estados e <strong>8 bits formam um byte</strong>. Convenções como ASCII e Unicode dizem como determinados valores devem ser interpretados como caracteres.</p>
    </div>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Agora sabemos como a informação pode ser representada. Mas quem, fisicamente, processa, guarda e movimenta esses dados dentro do computador?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes</summary>
      <ul>
        <li><a href="https://csrc.nist.gov/glossary/term/bit" target="_blank" rel="noopener">NIST — bit</a></li>
        <li><a href="https://csrc.nist.gov/glossary/term/byte" target="_blank" rel="noopener">NIST — byte</a></li>
        <li><a href="https://datatracker.ietf.org/doc/rfc20/" target="_blank" rel="noopener">RFC 20 — ASCII</a></li>
        <li><a href="https://www.unicode.org/versions/latest/" target="_blank" rel="noopener">Unicode Standard</a></li>
        <li><a href="https://www.nist.gov/pml/special-publication-330/sp-330-section-3" target="_blank" rel="noopener">NIST — prefixos SI e binários</a></li>
      </ul>
    </details>
  `
});