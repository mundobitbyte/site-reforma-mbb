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
  const before = (id, marker, html) => replace(id, marker, `${html}${marker}`);

  replace(
    'variacao',
    '<p>Considere um produto que custa R$ 8 por unidade de massa. Observe:</p>\n      <div class="table-wrap"><table><thead><tr><th>Quantidade x</th>',
    '<p>Considere <span class="math">x</span> como o número de porções de 100 g. Cada porção custa R$ 8. Observe:</p>\n      <div class="table-wrap"><table><thead><tr><th>Quantidade x (porções de 100 g)</th>'
  );

  before(
    'variacao',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para as próximas aulas:</strong> quando escrevemos <span class="math">y=kx</span>, já estamos usando uma letra para registrar uma regra geral. Na próxima aula, vamos entender melhor essa linguagem algébrica; depois veremos que essa mesma regra é um caso especial de função.</div>'
  );

  before(
    'algebra',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para Funções:</strong> uma fórmula como <span class="math">C=3q+12</span> relaciona uma entrada q a uma saída C. Quando cada entrada permitida produz um único resultado, essa relação pode ser estudada como uma função.</div>'
  );

  before(
    'funcao1',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para o gráfico:</strong> o coeficiente <span class="math">a</span> diz quanto a saída muda por unidade. Na próxima aula, essa mesma taxa aparecerá geometricamente como a inclinação da reta e receberá o nome <span class="math">m</span>.</div>'
  );

  before(
    'reta',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para funções por partes:</strong> até aqui uma única taxa e uma única regra descrevem a reta inteira. Mas existem situações em que a regra muda depois de um limite. É isso que estudaremos a seguir.</div>'
  );

  before(
    'partes',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Uma diferença importante para a próxima ideia:</strong> numa função por partes, mudamos explicitamente de regra ao atravessar uma faixa. Numa função quadrática, a regra pode ser única e, ainda assim, o ritmo de mudança variar continuamente.</div>'
  );

  before(
    'quadratica',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para a parábola:</strong> aqui aprendemos a reconhecer e calcular a expressão <span class="math">ax²+bx+c</span>. Na próxima aula, vamos perguntar o que essa expressão desenha e o que raízes, vértice e concavidade significam no gráfico.</div>'
  );

  before(
    'parabola',
    '<h3>10. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Um caso especial que merece atenção:</strong> quando a função tem a forma <span class="math">y=ax²</span>, sem termos bx e c, surge uma relação direta com o quadrado de x. Esse será o foco do próximo tópico.</div>'
  );

  before(
    'quadrado',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para transformações:</strong> a curva <span class="math">y=x²</span> será nosso gráfico-base. Depois veremos como movê-la, refletir e alterar sua abertura sem reconstruir tudo ponto por ponto.</div>'
  );

  before(
    'transformacoes',
    '<h3>9. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para PA:</strong> gráficos nos fizeram observar variação ao longo de muitas entradas. A Progressão Aritmética retomará a ideia de variação constante, mas em uma sequência de posições inteiras: 1º termo, 2º termo, 3º termo...</div>'
  );

  before(
    'grandezas',
    '<h3>10. Tente você</h3>',
    '<div class="mbb-bridge-box"><strong>Ponte para Estatística:</strong> frequência relativa também é uma razão entre duas quantidades — ocorrências e total. Saber interpretar “por unidade” ajuda a compreender porcentagens e proporções dentro de tabelas de dados.</div>'
  );
})();
