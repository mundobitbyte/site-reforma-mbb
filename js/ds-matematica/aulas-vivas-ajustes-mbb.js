(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);
  const replace = (id, from, to) => {
    const lesson = get(id);
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(from)) return false;
    lesson.content = lesson.content.replace(from, to);
    return true;
  };

  replace(
    'variacao',
    'Para <span class="math">x≠0</span>, a razão <span class="math">y/x</span> é constante.',
    'Para <span class="math">x≠0</span> — leia “x diferente de zero” — a razão <span class="math">y/x</span> é constante. Excluímos zero porque não existe divisão por zero.'
  );

  replace(
    'parabola',
    '<p>Depois:</p>\n      <p><span class="formula">x=(−b±√Δ)/(2a)</span></p>\n      <div class="note-box"><strong>O símbolo ± significa duas possibilidades.</strong><p>Uma conta usa + e outra usa −. Por isso uma função quadrática pode ter até duas raízes reais.</p></div>',
    '<p>Depois:</p>\n      <p><span class="formula">x=(−b±√Δ)/(2a)</span></p>\n      <div class="note-box"><strong>Leia os símbolos antes de usar a fórmula.</strong><p><span class="math">√Δ</span> significa “raiz quadrada de Δ”. O símbolo <span class="math">±</span> significa duas possibilidades: uma conta usa + e outra usa −. Por isso uma função quadrática pode ter até duas raízes reais.</p><p>Neste tópico, Δ é o <strong>discriminante</strong>. É um uso diferente do mesmo símbolo que apareceu como “variação” na aula da reta; o contexto indica o significado.</p></div>'
  );

  replace(
    'parabola',
    '<div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Raízes</strong><p><span class="math">x²−4x+3=(x−1)(x−3)</span>. Então as raízes são 1 e 3.</p></div>',
    '<div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Raízes sem depender de fatoração</strong><p>Aqui <span class="math">a=1</span>, <span class="math">b=−4</span> e <span class="math">c=3</span>. Então <span class="math">Δ=(−4)²−4·1·3=16−12=4</span>. Pela fórmula, <span class="math">x=(4±2)/2</span>, resultando em <span class="math">x=1</span> ou <span class="math">x=3</span>.</p></div>'
  );

  replace(
    'transformacoes',
    '<p>Compare <span class="math">f(x)</span> com <span class="math">2f(x)</span>. Cada valor de y dobra, então o gráfico se estica verticalmente.</p>\n      <div class="three-col">',
    '<p>Compare <span class="math">f(x)</span> com <span class="math">2f(x)</span>. Cada valor de y dobra, então o gráfico se estica verticalmente.</p>\n      <div class="recall-box"><strong>Uma notação nova: |a|</strong><p>As barras <span class="math">|a|</span> indicam o <strong>valor absoluto</strong> de a: sua distância até zero, sem considerar o sinal. Assim, <span class="math">|2|=2</span> e <span class="math">|−2|=2</span>.</p></div>\n      <div class="three-col">'
  );

  replace(
    'grandezas',
    '<p>Habitantes <strong>por</strong> quilômetro quadrado → <span class="math">hab/km²</span>.</p>\n      <div class="note-box"><strong>Leia em voz alta.</strong><p>A unidade funciona quase como uma frase compacta que descreve a conta.</p></div>',
    '<p>Habitantes <strong>por</strong> quilômetro quadrado → <span class="math">hab/km²</span>.</p>\n      <p>Quando escrevemos uma razão como fração, a parte de cima recebe o nome de <strong>numerador</strong> e a parte de baixo, <strong>denominador</strong>. Em <span class="math">180 km/3 h</span>, distância está no numerador e tempo no denominador.</p>\n      <div class="note-box"><strong>Leia em voz alta.</strong><p>A unidade funciona quase como uma frase compacta que descreve a conta.</p></div>'
  );

  replace(
    'porcentagem',
    '<p>A ideia geral pode ser escrita como:</p>\n      <p><span class="formula">parte=(p/100)·base</span></p>',
    '<p>A ideia geral pode ser escrita assim: se <span class="math">p</span> representa o número da porcentagem,</p>\n      <p><span class="formula">parte=(p/100)·base</span></p>'
  );
})();
