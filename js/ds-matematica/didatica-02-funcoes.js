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

  // 06 — Função quadrática: explicar coeficientes, x² e a condição a≠0.
  {
    const l = get('quadratica');
    replace(
      l,
      `<div class="concept-box"><p>Uma função quadrática tem a forma <span class="formula">f(x)=ax²+bx+c</span>, com <span class="math">a ≠ 0</span>.</p><p>Seu gráfico é uma <strong>parábola</strong>.</p></div>`,
      `<div class="concept-box"><span class="card-title">O que torna uma função quadrática?</span>
        <p>O termo <span class="math">x²</span> significa <span class="math">x·x</span>. Quando o maior expoente da variável é 2, podemos ter uma função quadrática.</p>
        <p>A forma geral é <span class="formula">f(x)=ax²+bx+c</span>.</p>
        <p>Os números <span class="math">a</span>, <span class="math">b</span> e <span class="math">c</span> são chamados de <strong>coeficientes</strong>: são os números que acompanham os termos da expressão.</p>
        <p>Precisamos de <span class="math">a ≠ 0</span>, lido “a é diferente de zero”. Se <span class="math">a=0</span>, o termo <span class="math">ax²</span> desaparece e a função deixa de ser quadrática.</p>
        <p>O gráfico de uma função quadrática é chamado de <strong>parábola</strong>.</p>
      </div>`
    );
    replace(
      l,
      `<div class="two-col"><div class="mini-card"><strong>a</strong>Controla a concavidade e a abertura da parábola.</div><div class="mini-card"><strong>c</strong>É o valor de f(0), portanto indica onde o gráfico cruza o eixo y.</div></div>`,
      `<div class="three-col">
        <div class="mini-card"><strong>a</strong><p>Multiplica <span class="math">x²</span>. Seu sinal decide se a parábola abre para cima ou para baixo; seu valor também influencia a abertura.</p></div>
        <div class="mini-card"><strong>b</strong><p>Multiplica <span class="math">x</span>. Junto com <span class="math">a</span>, ajuda a determinar a posição horizontal do vértice e do eixo de simetria.</p></div>
        <div class="mini-card"><strong>c</strong><p>É o valor de <span class="math">f(0)</span>; por isso mostra onde o gráfico cruza o eixo vertical.</p></div>
      </div>`
    );
    insertBefore(
      l,
      '<div class="task-box"><h4>Tente você</h4>',
      `<div class="note-box"><strong>Ligue com o que você já viu.</strong>
        <p>Na função do 1º grau, a variação por unidade era constante e o gráfico era uma reta. Na quadrática, o próprio ritmo de mudança varia; por isso o gráfico se curva.</p>
      </div>`
    );
  }

  // 07 — Parábola: raízes e vértice sem pressupor fatoração; explicar a fórmula.
  {
    const l = get('parabola');
    replace(
      l,
      `<h3>Raízes</h3><p>As raízes são os valores de x para os quais <span class="math">f(x)=0</span>. Graficamente, são os pontos em que a parábola cruza o eixo x.</p>`,
      `<h3>Raízes: onde a altura do gráfico vale zero</h3>
      <p>As raízes são os valores de <span class="math">x</span> que fazem <span class="math">f(x)=0</span>. No gráfico, isso significa que o ponto está exatamente sobre o eixo horizontal.</p>
      <p>Portanto, “encontrar as raízes” e “descobrir onde a parábola cruza o eixo x” são duas formas de fazer a mesma pergunta.</p>`
    );
    replace(
      l,
      `<div class="example-box"><span class="card-title">Exemplo resolvido</span><p><span class="math">f(x)=x²−5x+6</span>. Fatorando: <span class="math">(x−2)(x−3)=0</span>. As raízes são 2 e 3.</p></div>`,
      `<div class="example-box"><span class="card-title">Exemplo resolvido sem pular etapas</span>
        <p>Considere <span class="math">f(x)=x²−5x+6</span>. Podemos testar os valores em que suspeitamos que o gráfico possa tocar o eixo x.</p>
        <p><span class="math">f(2)=2²−5·2+6=4−10+6=0</span>.</p>
        <p><span class="math">f(3)=3²−5·3+6=9−15+6=0</span>.</p>
        <p>Como o resultado foi zero nos dois casos, as raízes são <strong>2 e 3</strong>.</p>
        <details class="solution"><summary>Outra forma: fatoração</summary><p>Se você já estudou fatoração, pode escrever <span class="math">x²−5x+6=(x−2)(x−3)</span>. Para o produto ser zero, um dos fatores precisa ser zero; por isso surgem novamente <span class="math">x=2</span> e <span class="math">x=3</span>. Se não lembrar fatoração, isso não impede a compreensão da ideia de raiz.</p></details>
      </div>`
    );
    insertBefore(
      l,
      '<h3>Vértice</h3>',
      `<h3>Quando as raízes não são fáceis de enxergar</h3>
      <p>Para uma função <span class="math">ax²+bx+c</span>, existe um método geral para resolver <span class="math">ax²+bx+c=0</span>.</p>
      <div class="recall-box"><strong>Primeiro calcule o discriminante</strong>
        <p><span class="formula">Δ=b²−4ac</span></p>
        <p>Neste tópico, a letra grega <span class="math">Δ</span> recebe o nome de <strong>discriminante</strong>. É outro uso do mesmo símbolo que apareceu como “variação” na aula de reta; o contexto mostra qual significado está sendo usado.</p>
      </div>
      <p>Depois usamos:</p>
      <p><span class="formula">x=(−b±√Δ)/(2a)</span></p>
      <p>O símbolo <span class="math">±</span> significa “mais ou menos”: fazemos uma conta usando <span class="math">+</span> e outra usando <span class="math">−</span>. Assim podemos obter até duas raízes.</p>
      <div class="example-box"><span class="card-title">Confira no mesmo exemplo</span>
        <p>Em <span class="math">x²−5x+6=0</span>, temos <span class="math">a=1</span>, <span class="math">b=−5</span> e <span class="math">c=6</span>.</p>
        <p><span class="math">Δ=(−5)²−4·1·6=25−24=1</span>.</p>
        <p><span class="math">x=(5±√1)/2=(5±1)/2</span>. Portanto <span class="math">x=3</span> ou <span class="math">x=2</span>.</p>
        <p>Obtivemos as mesmas raízes que encontramos testando os valores. A fórmula é útil quando os zeros não são tão fáceis de perceber.</p>
      </div>`
    );
    replace(
      l,
      `<h3>Vértice</h3><p>A coordenada horizontal do vértice pode ser calculada por <span class="formula">xᵥ = −b/(2a)</span>. Depois, calcule <span class="math">yᵥ=f(xᵥ)</span>.</p>`,
      `<h3>Vértice: o ponto em que a curva muda de direção</h3>
      <p>A parábola é simétrica: existe uma linha vertical que a divide em duas metades espelhadas. O vértice fica sobre essa linha e é o ponto de mínimo quando a parábola abre para cima ou de máximo quando abre para baixo.</p>
      <p>Na expressão <span class="math">f(x)=ax²+bx+c</span>, a posição horizontal do vértice pode ser calculada por:</p>
      <p><span class="formula">xᵥ=−b/(2a)</span></p>
      <p>Leia <span class="math">xᵥ</span> como “x do vértice”. Depois de encontrar essa posição horizontal, substituímos o valor na função para descobrir a altura do vértice: <span class="math">yᵥ=f(xᵥ)</span>.</p>
      <div class="note-box"><strong>Por que existe essa fórmula?</strong><p>Ela localiza o eixo de simetria da parábola. Neste momento, o mais importante é entender o que ela encontra e como usar cada coeficiente; a demonstração algébrica pode ser estudada depois sem impedir a leitura do gráfico.</p></div>`
    );
    insertBefore(
      l,
      '<div class="visual-box"><span class="card-title">Explore a parábola y = ax²</span>',
      `<div class="recall-box"><strong>Antes de calcular, tente enxergar.</strong>
        <p>Se você conhece duas raízes de uma parábola, o eixo de simetria fica exatamente no meio delas. Por exemplo, raízes 1 e 3 têm ponto médio 2; por isso o vértice está sobre <span class="math">x=2</span>. Essa observação ajuda a dar sentido à fórmula do vértice.</p>
      </div>`
    );
  }

  // 08 — Proporcionalidade ao quadrado: tornar y/x² concreto.
  {
    const l = get('quadrado');
    replace(
      l,
      `<div class="concept-box"><p>Quando <span class="formula">y = ax²</span>, dizemos que y é diretamente proporcional ao quadrado de x.</p><p>A razão <span class="math">y/x²</span> permanece constante e vale a.</p></div>`,
      `<div class="concept-box"><span class="card-title">Primeiro observe o quadrado</span>
        <p>Em <span class="math">y=ax²</span>, o valor de <span class="math">x</span> é multiplicado por ele mesmo antes de ser multiplicado por <span class="math">a</span>.</p>
        <p>Para saber se a relação mantém o mesmo padrão, dividimos <span class="math">y</span> por <span class="math">x²</span>. Se o resultado é sempre o mesmo, essa constante é <span class="math">a</span>.</p>
        <p>Assim, <span class="math">y/x²</span> não é uma regra para decorar: é uma forma de verificar se <span class="math">y</span> está acompanhando sempre o quadrado de <span class="math">x</span> na mesma proporção.</p>
      </div>`
    );
    insertBefore(
      l,
      '<div class="example-box"><span class="card-title">Exemplo</span>',
      `<div class="example-box"><span class="card-title">Área de um quadrado</span>
        <p>Se o lado mede 2, a área é <span class="math">2²=4</span>. Se o lado passa a 4, a área é <span class="math">4²=16</span>. O lado dobrou, mas a área ficou quatro vezes maior porque <span class="math">(2x)²=4x²</span>.</p>
      </div>`
    );
  }

  // 09 — Transformações de gráficos: incluir deslocamento horizontal, escala e reflexão.
  {
    const l = get('transformacoes');
    replace(
      l,
      `<div class="two-col"><div class="mini-card"><strong>Somar fora da função</strong>Em <span class="math">f(x)+k</span>, o gráfico se desloca verticalmente.</div><div class="mini-card"><strong>Multiplicar a função</strong>Em <span class="math">k·f(x)</span>, os valores de y são ampliados, reduzidos ou invertidos conforme k.</div></div>`,
      `<div class="two-col">
        <div class="mini-card"><strong>Somar fora da função</strong><p>Em <span class="math">f(x)+k</span>, todos os valores de saída aumentam em <span class="math">k</span>; o gráfico sobe. Se subtrairmos, ele desce.</p></div>
        <div class="mini-card"><strong>Mudar x dentro da função</strong><p>Em <span class="math">f(x−h)</span>, o gráfico se desloca <span class="math">h</span> unidades para a direita. Em <span class="math">f(x+h)</span>, desloca-se para a esquerda.</p></div>
        <div class="mini-card"><strong>Multiplicar a função</strong><p>Em <span class="math">k·f(x)</span>, multiplicamos todas as alturas por <span class="math">k</span>. Isso pode alongar ou achatar o gráfico.</p></div>
        <div class="mini-card"><strong>Multiplicar por −1</strong><p>Em <span class="math">−f(x)</span>, os valores positivos viram negativos e vice-versa; o gráfico é refletido em relação ao eixo x.</p></div>
      </div>`
    );
    insertBefore(
      l,
      '<div class="concept-box"><p>Transformar um gráfico não é desenhar do zero.',
      `<div class="recall-box"><strong>Por que o sinal dentro do parêntese parece “ao contrário”?</strong>
        <p>Em <span class="math">y=(x−3)²</span>, o quadrado vale zero quando <span class="math">x=3</span>, pois <span class="math">(3−3)²=0</span>. Por isso o vértice que estava em <span class="math">(0,0)</span> passa para <span class="math">(3,0)</span>: o gráfico desloca-se 3 unidades para a direita.</p>
      </div>`
    );
    replace(
      l,
      `<div class="example-box"><span class="card-title">Exemplo</span><p>Se <span class="math">f(x)=x²</span>, então <span class="math">g(x)=x²+4</span> tem a mesma forma, mas o vértice sobe de (0,0) para (0,4).</p></div>`,
      `<div class="example-box"><span class="card-title">Compare passo a passo</span>
        <p>Parta de <span class="math">f(x)=x²</span>, com vértice em <span class="math">(0,0)</span>.</p>
        <p><span class="math">x²+4</span>: sobe 4 unidades; vértice <span class="math">(0,4)</span>.</p>
        <p><span class="math">(x−3)²</span>: vai 3 unidades para a direita; vértice <span class="math">(3,0)</span>.</p>
        <p><span class="math">2x²</span>: mantém o vértice, mas dobra as alturas e fica mais estreita.</p>
        <p><span class="math">−x²</span>: reflete a parábola; ela passa a abrir para baixo.</p>
      </div>`
    );
  }

  // 10 — PA: construir a fórmula termo a termo e esclarecer o uso da palavra razão.
  {
    const l = get('pa');
    replace(
      l,
      `<div class="concept-box"><p>Uma <strong>Progressão Aritmética</strong> é uma sequência em que a diferença entre termos consecutivos é constante. Essa diferença é a <strong>razão r</strong>.</p><p><span class="formula">aₙ = a₁ + (n−1)r</span></p></div>`,
      `<div class="concept-box"><span class="card-title">Primeiro entenda os nomes</span>
        <p>Uma <strong>sequência</strong> é uma lista ordenada de valores. Cada valor ocupa uma posição: primeiro termo, segundo termo, terceiro termo e assim por diante.</p>
        <p>Em uma Progressão Aritmética, passamos de um termo para o seguinte sempre somando ou subtraindo a mesma quantidade.</p>
        <p>Exemplo: <span class="math">7, 11, 15, 19, ...</span>. A cada passo somamos 4.</p>
      </div>
      <div class="recall-box"><strong>Como ler a notação</strong>
        <p><span class="math">a₁</span> significa “primeiro termo”. <span class="math">aₙ</span> significa “termo que está na posição n”. A letra <span class="math">n</span> representa a posição: 1, 2, 3, 4...</p>
        <p>Numa PA, a diferença constante recebe tradicionalmente o nome de <strong>razão r</strong>. Atenção: aqui “razão” significa essa diferença fixa entre termos; não é a razão por divisão estudada em proporcionalidade.</p>
      </div>
      <div class="example-box"><span class="card-title">Construa a fórmula em vez de decorá-la</span>
        <p><span class="math">a₂=a₁+r</span></p>
        <p><span class="math">a₃=a₁+2r</span></p>
        <p><span class="math">a₄=a₁+3r</span></p>
        <p>Para chegar ao termo de posição <span class="math">n</span>, damos <span class="math">n−1</span> passos a partir do primeiro termo. Por isso:</p>
        <p><span class="formula">aₙ=a₁+(n−1)r</span></p>
      </div>`
    );
    replace(
      l,
      '<h3>PA e função afim</h3><p>Se o número do termo é a entrada, a fórmula <span class="math">aₙ=a₁+(n−1)r</span> é uma relação afim. O domínio é discreto: n assume 1, 2, 3, ... e não qualquer número real.</p>',
      `<h3>PA e função afim</h3>
      <p>Se usarmos a posição do termo como entrada, a PA se comporta como uma função afim: a cada avanço de uma posição, o valor muda sempre pela mesma quantidade <span class="math">r</span>.</p>
      <p>Dizemos que o domínio é <strong>discreto</strong> porque as posições são contadas uma a uma: <span class="math">n=1,2,3,...</span>. Não existe, por exemplo, o termo de posição 2,5 entre o segundo e o terceiro termo.</p>`
    );
  }

})();
