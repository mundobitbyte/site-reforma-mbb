(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;
  const get = (id) => window.DS_MATH_LESSONS.find((lesson) => lesson.id === id);
  const replace = (lesson, oldText, newText) => {
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(oldText)) return false;
    lesson.content = lesson.content.replace(oldText, newText);
    return true;
  };
  const insertBefore = (lesson, marker, html) => {
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(marker)) return false;
    lesson.content = lesson.content.replace(marker, `${html}${marker}`);
    return true;
  };

  // 00 — Avaliação diagnóstica: retirar um termo que pressupõe conhecimento prévio.
  {
    const l = get('diagnostico');
    replace(
      l,
      'Sinais iguais em uma soma mantêm o sinal. Sinais diferentes pedem a diferença entre os módulos. Ex.: −8 + 13 = 5.',
      'Quando os sinais são iguais, some os valores e mantenha o sinal. Quando são diferentes, compare os valores sem considerar o sinal, faça a diferença e mantenha o sinal do número que estiver mais longe de zero. Ex.: −8 + 13 = 5.'
    );
  }

  // 01 — Proporcionalidade: preparar a notação antes do laboratório e das três representações.
  {
    const l = get('variacao');
    replace(
      l,
      'A quantidade e o preço mudaram, mas o quociente <span class="math">preço ÷ quantidade</span> permaneceu 8. Esse 8 é o preço por unidade.',
      'A quantidade e o preço mudaram, mas o <strong>resultado da divisão</strong> <span class="math">preço ÷ quantidade</span> permaneceu 8. Esse 8 é o preço por unidade.'
    );
    insertBefore(
      l,
      '<h3>3. O laboratório: mexa na relação e observe tabela, razão e gráfico</h3>',
      `<div class="recall-box">
        <strong>Antes de usar as letras</strong>
        <p>Nesta aula, <span class="math">x</span> representa o valor que escolhemos ou medimos primeiro e <span class="math">y</span> representa o valor correspondente. A expressão <span class="math">y/x</span> lê-se “y dividido por x”. Quando essa divisão dá sempre o mesmo resultado, chamamos esse valor constante de <span class="math">k</span>.</p>
        <p>Se aparecer <span class="math">x ≠ 0</span>, leia: “x é diferente de zero”. Isso é necessário porque não podemos dividir por zero.</p>
      </div>`
    );
    replace(
      l,
      'Os pontos ficam sobre uma reta que passa pela origem <span class="math">(0,0)</span>.',
      'Os pontos ficam sobre uma reta que passa pela <strong>origem</strong>, o ponto <span class="math">(0,0)</span> onde os dois eixos do plano cartesiano se encontram.'
    );
  }

  // 02 — Linguagem algébrica: ensinar a ler a escrita antes de cobrar a fórmula.
  {
    const l = get('algebra');
    insertBefore(
      l,
      '<h3>Do padrão para a fórmula</h3>',
      `<div class="recall-box">
        <strong>Como ler uma expressão com letras</strong>
        <p>Quando um número aparece ao lado de uma letra, há uma multiplicação escondida: <span class="math">3x</span> significa <span class="math">3·x</span>. Assim, se <span class="math">x=10</span>, então <span class="math">3x=30</span>.</p>
        <p>Leia <span class="math">y=3x</span> como: “o valor de y é três vezes o valor de x”. A letra permite usar a mesma regra para 10, 50, 100 ou qualquer outra quantidade.</p>
      </div>`
    );
    insertBefore(
      l,
      '<h3>Termos que você precisa conhecer</h3>',
      `<div class="note-box">
        <strong>Letra nem sempre significa a mesma coisa.</strong>
        <p>Em uma fórmula, uma letra pode representar um valor que varia. Em uma equação como <span class="math">3x=18</span>, ela também pode representar um valor desconhecido que queremos descobrir. O contexto mostra qual papel a letra está desempenhando.</p>
      </div>`
    );
  }

  // 03 — Função afim: explicar f(x), entrada/saída e a passagem para ax+b.
  {
    const l = get('funcao1');
    replace(
      l,
      `<div class="concept-box"><span class="card-title">Função</span><p>Uma função associa cada valor permitido de entrada <span class="math">x</span> a um único valor de saída <span class="math">f(x)</span>.</p><p>No estacionamento: <span class="formula">f(x) = 5x + 10</span>.</p></div>`,
      `<div class="concept-box"><span class="card-title">Da situação para a ideia de função</span>
        <p>No estacionamento, você escolhe um tempo e a regra determina um único preço. O tempo é a <strong>entrada</strong>; o preço calculado é a <strong>saída</strong>.</p>
        <p>Podemos chamar a entrada de <span class="math">x</span>. A escrita <span class="math">f(x)</span>, lida “f de x”, significa simplesmente <strong>o resultado produzido pela função quando a entrada vale x</strong>.</p>
        <p>No estacionamento: <span class="formula">f(x)=5x+10</span>. Se <span class="math">x=2</span>, então <span class="math">f(2)=5·2+10=20</span>. Em palavras: duas horas correspondem a R$ 20.</p>
      </div>`
    );
    replace(
      l,
      '<h3>Função afim</h3><p>A forma geral é <span class="formula">f(x) = ax + b</span>.</p>',
      `<h3>Da situação para a forma geral</h3>
      <p>No exemplo <span class="math">f(x)=5x+10</span>, o número 5 diz quanto o preço aumenta a cada hora e 10 é o valor que já existe antes de acrescentar as horas.</p>
      <p>Para representar qualquer situação desse tipo, trocamos esses números por letras:</p>
      <p><span class="formula">f(x)=ax+b</span></p>
      <p><span class="math">a</span> representa a variação por unidade e <span class="math">b</span> representa o valor inicial. As letras não criam uma nova ideia: apenas generalizam o que já vimos no exemplo.</p>`
    );
    insertBefore(
      l,
      '<div class="example-box"><span class="card-title">Exemplo resolvido</span>',
      `<div class="recall-box"><strong>Os nomes ficam mais fáceis quando você olha a regra</strong>
        <p><strong>Linear:</strong> <span class="math">f(x)=ax</span>. Não há valor inicial somado; é o caso ligado à proporcionalidade direta.</p>
        <p><strong>Constante:</strong> <span class="math">f(x)=b</span>. A entrada pode mudar, mas a saída permanece a mesma.</p>
        <p><strong>Identidade:</strong> <span class="math">f(x)=x</span>. A função devolve exatamente o valor que recebeu.</p>
      </div>`
    );
  }

  // 04 — Reta: reconstruir o significado da inclinação antes de Δ e de m.
  {
    const l = get('reta');
    replace(
      l,
      `<div class="concept-box"><p>Escolha dois pontos da reta. A taxa de variação é a mudança em y dividida pela mudança em x:</p><p><span class="formula">m = Δy / Δx = (y₂ − y₁)/(x₂ − x₁)</span></p><p>Esse número é o <strong>coeficiente angular</strong> da reta.</p></div>`,
      `<div class="concept-box"><span class="card-title">Primeiro: o que significa uma reta estar inclinada?</span>
        <p>Imagine que caminhamos sobre o gráfico da esquerda para a direita. Enquanto avançamos horizontalmente, a reta pode subir, descer ou permanecer na mesma altura.</p>
        <p>Para medir essa inclinação, comparamos duas mudanças: <strong>quanto mudou na vertical</strong> e <strong>quanto avançamos na horizontal</strong>.</p>
        <p>No plano cartesiano, o eixo <span class="math">x</span> é horizontal e o eixo <span class="math">y</span> é vertical. Um ponto escrito como <span class="math">(x,y)</span> informa primeiro a posição horizontal e depois a posição vertical.</p>
      </div>
      <div class="example-box"><span class="card-title">Construa a ideia antes da fórmula</span>
        <p>Considere os pontos <span class="math">(1,15)</span> e <span class="math">(3,25)</span>.</p>
        <p>Avanço horizontal: <span class="math">3−1=2</span>.</p>
        <p>Subida vertical: <span class="math">25−15=10</span>.</p>
        <p>Inclinação: <span class="math">10/2=5</span>. Isso significa que, a cada 1 unidade que avançamos horizontalmente, a reta sobe 5 unidades.</p>
      </div>
      <div class="recall-box"><strong>Agora entra a notação</strong>
        <p>O símbolo <span class="math">Δ</span> (delta) significa <strong>variação</strong> ou <strong>diferença entre um valor final e um inicial</strong>. Assim, <span class="math">Δy</span> é a mudança vertical e <span class="math">Δx</span> é a mudança horizontal.</p>
        <p>A inclinação da reta recebe o nome de <strong>coeficiente angular</strong> e é representada por <span class="math">m</span>:</p>
        <p><span class="formula">m = Δy/Δx = (y₂−y₁)/(x₂−x₁)</span></p>
        <p>É a mesma conta que acabamos de fazer; a fórmula apenas registra a ideia de forma geral.</p>
      </div>`
    );
    replace(
      l,
      `<div class="example-box"><span class="card-title">Exemplo resolvido</span><p>Uma reta passa por (1, 15) e (3, 25).</p><p><span class="math">m=(25−15)/(3−1)=10/2=5</span>.</p><p>Isso significa: para cada 1 unidade que x aumenta, y aumenta 5.</p></div>`,
      `<div class="note-box"><strong>O sinal de m também conta uma história.</strong>
        <p>Se a reta sobe quando avançamos para a direita, <span class="math">m&gt;0</span>. Se desce, <span class="math">m&lt;0</span>. Se permanece horizontal, <span class="math">m=0</span>.</p>
      </div>`
    );
    replace(
      l,
      '<h3>Equação da reta</h3><p>Quando conhecemos o coeficiente angular e o valor inicial, escrevemos <span class="formula">y = mx + b</span>.</p>',
      `<h3>Da inclinação para a equação da reta</h3>
      <p>Conhecer apenas a inclinação não diz em que altura a reta começa. Por isso usamos também <span class="math">b</span>, o valor de <span class="math">y</span> quando <span class="math">x=0</span>, isto é, o ponto em que a reta cruza o eixo vertical.</p>
      <p><span class="formula">y=mx+b</span></p>
      <p>Leia assim: <strong>valor atual = inclinação × avanço horizontal + valor inicial</strong>.</p>`
    );
    replace(
      l,
      'Trace a reta e interprete sua inclinação e seu intercepto.',
      'Trace a reta e interprete sua inclinação e o ponto em que ela cruza o eixo vertical.'
    );
  }

  // 05 — Funções por partes: ensinar a decisão e a leitura das desigualdades.
  {
    const l = get('partes');
    replace(
      l,
      `<div class="concept-box"><p>Uma <strong>função definida por partes</strong> usa expressões diferentes em regiões diferentes do domínio.</p><p><span class="formula">P(t)=12, se 0&lt;t≤1</span><br><span class="formula">P(t)=12+5(t−1), se t&gt;1</span></p></div>`,
      `<div class="concept-box"><span class="card-title">Primeiro descubra qual regra vale</span>
        <p>Antes de escrever fórmulas, pense como uma decisão:</p>
        <ol class="steps">
          <li>O tempo é de até 1 hora? Então o preço é R$ 12.</li>
          <li>Passou de 1 hora? Então começamos com R$ 12 e acrescentamos R$ 5 por hora excedente.</li>
        </ol>
        <p>Uma função definida por partes apenas registra essas decisões em linguagem matemática.</p>
        <p><span class="formula">P(t)=12, se 0&lt;t≤1</span><br><span class="formula">P(t)=12+5(t−1), se t&gt;1</span></p>
      </div>
      <div class="recall-box"><strong>Como ler os símbolos</strong>
        <p><span class="math">0&lt;t≤1</span> lê-se: “t é maior que zero e menor ou igual a 1”. Em outras palavras, o tempo está entre 0 e 1 hora, incluindo 1 hora.</p>
        <p><span class="math">t&gt;1</span> lê-se: “t é maior que 1”. O símbolo apenas indica em qual faixa cada regra deve ser usada.</p>
      </div>`
    );
    replace(
      l,
      '<h3>Domínio de validade</h3><p>Cada sentença tem um conjunto de valores em que pode ser usada. Esse intervalo é o seu domínio de validade.</p>',
      `<h3>Domínio de validade</h3>
      <p>Cada regra vale apenas para determinadas entradas. Chamamos esse conjunto de valores de <strong>domínio de validade</strong>. A palavra “sentença” neste contexto significa simplesmente <strong>uma das regras que formam a função</strong>.</p>`
    );
    replace(
      l,
      '<div class="two-col"><div class="mini-card"><strong>Domínio</strong>Valores de entrada permitidos.</div><div class="mini-card"><strong>Imagem</strong>Valores de saída que a função realmente produz.</div></div>',
      `<div class="two-col">
        <div class="mini-card"><strong>Domínio</strong><p>Conjunto das entradas que podem ser usadas. Em um problema de tempo, por exemplo, valores negativos normalmente não fazem sentido.</p></div>
        <div class="mini-card"><strong>Imagem</strong><p>Conjunto dos resultados que a função realmente consegue produzir a partir das entradas permitidas.</p></div>
      </div>`
    );
  }

})();
