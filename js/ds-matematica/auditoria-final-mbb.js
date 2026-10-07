(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);
  const before = (lesson, marker, html) => {
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(marker)) return false;
    lesson.content = lesson.content.replace(marker, `${html}${marker}`);
    return true;
  };
  const beforePractice = (lesson, topic, html) => before(
    lesson,
    `<button class="action-button primary" data-practice-topic="${topic}" type="button">`,
    html
  );

  // 01 — Proporcionalidade: dar significado à constante e preparar a linguagem algébrica.
  {
    const l = get('variacao');
    before(l, '<h3>6. Faça a passagem entre representações</h3>', `
      <div class="note-box"><strong>A constante também tem significado e unidade.</strong>
        <p>Em <span class="math">y=kx</span>, o valor de <span class="math">k</span> diz quanto de <span class="math">y</span> corresponde a cada 1 unidade de <span class="math">x</span>. Se 1 kg custa R$ 8, então <span class="math">k=8 R$/kg</span>. Se uma conexão transfere 25 MB por segundo, <span class="math">k=25 MB/s</span>.</p>
        <p>Por isso, antes de calcular, pergunte: <strong>“8 o quê por o quê?”</strong> ou <strong>“25 o quê por o quê?”</strong>. A unidade ajuda a interpretar a razão.</p>
      </div>`);
    beforePractice(l, 'variacao', `
      <div class="recall-box"><strong>Ponte para o próximo assunto</strong>
        <p>A regra <span class="math">y=kx</span> já é uma forma de linguagem algébrica. No próximo tópico, você vai entender por que usamos letras e como transformar situações e padrões em regras que funcionam para muitos valores.</p>
      </div>`);
  }

  // 02 — Linguagem algébrica: distinguir expressão, equação e fórmula.
  {
    const l = get('algebra');
    before(l, '<h3>Termos que você precisa conhecer</h3>', `
      <h3>Expressão, equação e fórmula não são a mesma coisa</h3>
      <div class="three-col">
        <div class="mini-card"><strong>Expressão algébrica</strong><p>É uma combinação de números, letras e operações, sem afirmar uma igualdade. Exemplo: <span class="math">3x+7</span>.</p></div>
        <div class="mini-card"><strong>Equação</strong><p>Afirma que duas expressões têm o mesmo valor e normalmente pede descobrir um valor desconhecido. Exemplo: <span class="math">3x+7=22</span>.</p></div>
        <div class="mini-card"><strong>Fórmula</strong><p>É uma igualdade usada para relacionar grandezas. Exemplo: <span class="math">P=6+2,5d</span> relaciona preço e distância.</p></div>
      </div>
      <div class="note-box"><strong>O sinal = significa “tem o mesmo valor que”.</strong>
        <p>Em <span class="math">y=3x</span>, não estamos dando uma ordem para “calcular y”. Estamos dizendo que, para cada valor de <span class="math">x</span>, o valor de <span class="math">y</span> é igual a três vezes <span class="math">x</span>.</p>
      </div>`);
  }

  // 03 — Função afim: mostrar que a variação também pode ser negativa e ligar a com m.
  {
    const l = get('funcao1');
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="example-box"><span class="card-title">Uma função afim também pode diminuir</span>
        <p>Um reservatório começa com 96 L e perde 8 L por minuto. Se <span class="math">t</span> é o tempo em minutos:</p>
        <p><span class="formula">V(t)=96−8t</span></p>
        <p>Aqui, a variação por unidade é <span class="math">−8 L/min</span>. O sinal negativo indica que o volume diminui. O valor inicial é 96 L.</p>
        <p>No contexto real, usamos a regra enquanto houver água: de <span class="math">t=0</span> até <span class="math">t=12</span>. Uma fórmula pode existir para outros valores, mas o contexto decide quais entradas fazem sentido.</p>
      </div>
      <div class="recall-box"><strong>A mesma taxa aparecerá com outra letra no gráfico.</strong>
        <p>Na forma <span class="math">f(x)=ax+b</span>, chamamos a variação por unidade de <span class="math">a</span>. Ao escrever a equação de uma reta como <span class="math">y=mx+b</span>, é comum usar a letra <span class="math">m</span> para esse mesmo papel: representar a inclinação ou taxa de variação.</p>
      </div>`);
  }

  // 04 — Reta: integrar m, b e os pontos; preparar o caso vertical.
  {
    const l = get('reta');
    before(l, '<div class="visual-box"><span class="card-title">Mude a inclinação</span>', `
      <div class="example-box"><span class="card-title">Leia m e b dentro de uma reta</span>
        <p>Considere <span class="math">y=2x+3</span>.</p>
        <p>Quando <span class="math">x=0</span>, temos <span class="math">y=3</span>. Portanto a reta cruza o eixo vertical no ponto <span class="math">(0,3)</span>: esse é o papel de <span class="math">b=3</span>.</p>
        <p>Quando <span class="math">x</span> aumenta 1 unidade, <span class="math">y</span> aumenta 2. Esse é o papel de <span class="math">m=2</span>.</p>
        <div class="table-wrap"><table><thead><tr><th>x</th><th>y=2x+3</th><th>Ponto</th></tr></thead><tbody><tr><td>0</td><td>3</td><td>(0,3)</td></tr><tr><td>1</td><td>5</td><td>(1,5)</td></tr><tr><td>2</td><td>7</td><td>(2,7)</td></tr></tbody></table></div>
      </div>`);
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="note-box"><strong>E uma reta vertical?</strong>
        <p>Numa reta vertical, podemos mudar de altura sem avançar horizontalmente. Então <span class="math">Δx=0</span> e a conta <span class="math">Δy/Δx</span> exigiria divisão por zero. Por isso o coeficiente angular <span class="math">m</span> não é definido pelo quociente <span class="math">Δy/Δx</span>.</p>
        <p>Você reencontrará essa mesma ideia quando estudar <span class="math">tan(90°)</span>.</p>
      </div>`);
  }

  // 05 — Funções por partes: tratar explicitamente o ponto de troca.
  {
    const l = get('partes');
    before(l, '<h3>Troque a representação</h3>', `
      <h3>O valor exatamente no limite importa</h3>
      <div class="example-box"><span class="card-title">Quem fica com t=1?</span>
        <p>Na regra <span class="math">P(t)=12</span>, se <span class="math">0&lt;t≤1</span>, o símbolo <span class="math">≤</span> inclui o valor 1. Portanto, para exatamente 1 hora, usamos a primeira regra.</p>
        <p>A segunda regra vale apenas quando <span class="math">t&gt;1</span>. Assim não existe dúvida nem sobreposição: cada entrada pertence à faixa correta.</p>
      </div>
      <div class="note-box"><strong>No gráfico, o limite também pode ser mostrado.</strong>
        <p>Um ponto preenchido costuma indicar que aquele valor está incluído; um ponto vazio indica que ele não pertence àquela parte. Se as duas regras chegam ao mesmo valor no limite, o gráfico pode se encontrar ali. Se chegam a valores diferentes, aparece um salto.</p>
      </div>`);
  }

  // 06 — Função quadrática: recuperar potências com negativos e coeficientes ocultos.
  {
    const l = get('quadratica');
    before(l, '<h3>Uma primeira tabela</h3>', `
      <div class="recall-box"><strong>Antes da tabela: cuidado com o quadrado de números negativos</strong>
        <p><span class="math">(−2)²</span> significa <span class="math">(−2)·(−2)=4</span>. Por isso entradas <span class="math">2</span> e <span class="math">−2</span> produzem o mesmo valor em <span class="math">x²</span>.</p>
        <p>Os parênteses importam: <span class="math">(−2)²=4</span>, enquanto <span class="math">−2²</span> é interpretado como <span class="math">−(2²)=−4</span>.</p>
      </div>
      <div class="note-box"><strong>Quando um termo não aparece, seu coeficiente pode ser zero.</strong>
        <p>Em <span class="math">x²+3</span>, temos <span class="math">a=1</span>, <span class="math">b=0</span> e <span class="math">c=3</span>. Em <span class="math">−x²</span>, temos <span class="math">a=−1</span>, <span class="math">b=0</span> e <span class="math">c=0</span>.</p>
      </div>`);
  }

  // 07 — Parábola: interpretar Δ e crescimento por intervalos.
  {
    const l = get('parabola');
    before(l, '<h3>Vértice: o ponto em que a curva muda de direção</h3>', `
      <h3>O sinal de Δ prevê quantas raízes reais aparecem</h3>
      <div class="three-col">
        <div class="mini-card"><strong>Δ &gt; 0</strong><p>A equação possui duas raízes reais diferentes. A parábola cruza o eixo x em dois pontos.</p></div>
        <div class="mini-card"><strong>Δ = 0</strong><p>Existe uma raiz real repetida. A parábola toca o eixo x exatamente no vértice.</p></div>
        <div class="mini-card"><strong>Δ &lt; 0</strong><p>Não existem raízes reais. A parábola não encontra o eixo x.</p></div>
      </div>
      <p>Assim, o discriminante não é apenas uma etapa da fórmula: ele já antecipa como o gráfico se relaciona com o eixo horizontal.</p>`);
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="concept-box"><span class="card-title">Crescimento e decrescimento em intervalos</span>
        <p>Um <strong>intervalo</strong> é um trecho de valores de <span class="math">x</span>. O vértice divide a parábola em dois trechos.</p>
        <p>Se <span class="math">a&gt;0</span>, a função <strong>decresce</strong> até <span class="math">xᵥ</span> e <strong>cresce</strong> depois de <span class="math">xᵥ</span>. Se <span class="math">a&lt;0</span>, acontece o contrário.</p>
        <p>Por exemplo, se o vértice está em <span class="math">x=2</span> e <span class="math">a&gt;0</span>, a curva desce para valores de <span class="math">x&lt;2</span> e sobe para valores de <span class="math">x&gt;2</span>.</p>
      </div>`);
  }

  // 08 — Proporcionalidade ao quadrado: contrastar com proporcionalidade direta e discutir domínio.
  {
    const l = get('quadrado');
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="two-col">
        <div class="mini-card"><strong>Proporcionalidade direta: y=ax</strong><p>Se <span class="math">x</span> dobra, <span class="math">y</span> dobra. Exemplo: <span class="math">3x</span> passa de 6 para 12 quando x passa de 2 para 4.</p></div>
        <div class="mini-card"><strong>Proporcionalidade ao quadrado: y=ax²</strong><p>Se <span class="math">x</span> dobra, <span class="math">y</span> é multiplicado por 4. Exemplo: <span class="math">3x²</span> passa de 12 para 48 quando x passa de 2 para 4.</p></div>
      </div>
      <div class="note-box"><strong>A Matemática permite valores que o contexto pode proibir.</strong>
        <p>A expressão <span class="math">y=ax²</span> pode ser calculada para <span class="math">x</span> negativo. Mas, se <span class="math">x</span> representa o lado de um quadrado, um lado negativo não tem sentido físico. Sempre interprete o domínio de acordo com a situação.</p>
      </div>`);
  }

  // 09 — Transformações: reunir as mudanças na forma de vértice.
  {
    const l = get('transformacoes');
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <h3>Juntando as transformações numa única expressão</h3>
      <p>Para uma parábola, muitas transformações podem aparecer juntas na forma:</p>
      <p><span class="formula">g(x)=a(x−h)²+k</span></p>
      <div class="three-col">
        <div class="mini-card"><strong>h</strong><p>Move o vértice horizontalmente. O vértice fica em <span class="math">x=h</span>.</p></div>
        <div class="mini-card"><strong>k</strong><p>Move o gráfico verticalmente. O vértice fica em <span class="math">y=k</span>.</p></div>
        <div class="mini-card"><strong>a</strong><p>Controla a abertura; se <span class="math">a&lt;0</span>, também reflete a parábola para baixo.</p></div>
      </div>
      <p>Por isso, em <span class="math">−2(x−3)²+4</span>, o vértice é <span class="math">(3,4)</span>, a parábola abre para baixo e o fator 2 deixa a curva mais estreita que a forma básica <span class="math">y=x²</span>.</p>`);
  }

  // 10 — PA: separar posição de valor e interpretar o sinal de r.
  {
    const l = get('pa');
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="two-col">
        <div class="mini-card"><strong>n é a posição</strong><p>Em <span class="math">a₇</span>, o número 7 diz “sétima posição”. Ele não é necessariamente o valor do termo.</p></div>
        <div class="mini-card"><strong>aₙ é o valor nessa posição</strong><p>Se <span class="math">a₇=31</span>, então 7 é a posição e 31 é o valor que ocupa essa posição.</p></div>
      </div>
      <div class="note-box"><strong>O sinal de r mostra o sentido da sequência.</strong>
        <p>Se <span class="math">r&gt;0</span>, os termos aumentam; se <span class="math">r&lt;0</span>, diminuem; se <span class="math">r=0</span>, todos os termos são iguais.</p>
      </div>`);
  }

  // 11 — Tangente: usar a razão para descobrir uma medida inacessível.
  {
    const l = get('tangente');
    before(l, '<div class="task-box">', `
      <h3>11. Uma aplicação prática: descobrir uma altura sem subir até ela</h3>
      <div class="example-box"><span class="card-title">Altura de um poste</span>
        <p>Imagine que você está a 10 m horizontalmente de um poste e mede um ângulo de 45° entre a horizontal e a linha de visão até o topo.</p>
        <p>A distância horizontal é o cateto adjacente e a altura que queremos descobrir é o cateto oposto:</p>
        <p><span class="math">tan(45°)=altura/10</span></p>
        <p>Como <span class="math">tan(45°)=1</span>, temos <span class="math">1=altura/10</span>. Portanto a diferença de altura é <strong>10 m</strong>.</p>
        <p>Em uma medição real feita na altura dos olhos, ainda seria preciso somar a altura do aparelho ou dos olhos ao resultado para obter a altura total do objeto.</p>
      </div>
      <p>Esse é um dos usos mais importantes da trigonometria: transformar uma medida fácil de obter no chão e um ângulo medido em uma altura ou distância que seria difícil medir diretamente.</p>`);
  }

  // 12 — Porcentagem: tornar mudanças sucessivas e valores extremos concretos.
  {
    const l = get('porcentagem');
    before(l, '<h3>Juros: porcentagem ao longo do tempo</h3>', `
      <div class="example-box"><span class="card-title">Por que +20% e depois −20% não se anulam?</span>
        <p>Comece com R$ 100. Um aumento de 20% leva o valor para <span class="math">100·1,20=120</span>.</p>
        <p>Agora a base mudou. Uma queda de 20% é calculada sobre 120: <span class="math">120·0,80=96</span>.</p>
        <p>O resultado final é R$ 96, não R$ 100. A porcentagem pode ser a mesma, mas a <strong>base de cálculo</strong> não é.</p>
      </div>
      <div class="recall-box"><strong>Um atalho depois que você entende a ideia</strong>
        <p>Aumentar <span class="math">p%</span> equivale a multiplicar por <span class="math">1+p/100</span>. Diminuir <span class="math">p%</span> equivale a multiplicar por <span class="math">1−p/100</span>.</p>
        <p>Exemplo: +15% → multiplicar por 1,15. Desconto de 15% → multiplicar por 0,85.</p>
      </div>`);
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="note-box"><strong>Porcentagem não precisa ficar entre 1% e 100%.</strong>
        <p><span class="math">150%=1,5</span> representa uma quantidade igual a uma vez e meia a base. Já <span class="math">0,5%=0,005</span> representa meio de cada 100. O símbolo % sempre significa “dividido por 100”.</p>
      </div>`);
  }

  // 13 — Ladrilhamento: consolidar o critério para polígonos regulares iguais.
  {
    const l = get('ladrilhamento');
    before(l, '<div class="task-box"><h4>Investigue</h4>', `
      <div class="recall-box"><strong>Quando usamos apenas um tipo de polígono regular</strong>
        <p>O número <span class="math">360°/ângulo interno</span> precisa ser inteiro, porque não podemos colocar “2,7 peças” em torno de um vértice.</p>
        <p>Entre os polígonos regulares convexos, o triângulo equilátero, o quadrado e o hexágono regular passam nesse teste e conseguem ladrilhar o plano sozinhos: 6·60°, 4·90° e 3·120°.</p>
      </div>`);
  }

  // 14 — Grandezas compostas: trazer a leitura bit/byte para o contexto de DS.
  {
    const l = get('grandezas');
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <div class="example-box"><span class="card-title">Em tecnologia: b e B não significam a mesma coisa</span>
        <p><strong>b minúsculo</strong> costuma indicar <strong>bit</strong>; <strong>B maiúsculo</strong> indica <strong>byte</strong>. Um byte possui 8 bits.</p>
        <p>Por isso <span class="math">20 MB/s</span> correspondem a <span class="math">160 Mb/s</span>, pois <span class="math">20·8=160</span>.</p>
        <p>Essa diferença é importante ao comparar velocidade de rede, que muitas vezes aparece em <strong>Mb/s</strong>, com tamanho ou transferência de arquivos, frequentemente apresentados em <strong>MB</strong> ou <strong>MB/s</strong>.</p>
      </div>`);
  }

  // 15 — Estatística: ampliar leitura crítica de gráficos e dispersão.
  {
    const l = get('dados');
    before(l, '<div class="task-box"><h4>Tente você</h4>', `
      <h3>Antes de confiar num gráfico, leia como ele foi construído</h3>
      <div class="three-col">
        <div class="mini-card"><strong>Eixos e escala</strong><p>Veja o que cada eixo mede e de quanto em quanto a escala avança. Uma escala cortada pode fazer uma diferença pequena parecer enorme.</p></div>
        <div class="mini-card"><strong>Fonte e amostra</strong><p>Pergunte de onde vieram os dados, quantas observações existem e quem teve chance de participar.</p></div>
        <div class="mini-card"><strong>Tipo de gráfico</strong><p>Barras ajudam a comparar categorias; dispersão ajuda a observar relação entre duas variáveis numéricas. Escolha a representação de acordo com a pergunta.</p></div>
      </div>
      <h3>Como ler uma dispersão</h3>
      <div class="three-col">
        <div class="mini-card"><strong>Associação positiva</strong><p>Em geral, quando <span class="math">x</span> aumenta, <span class="math">y</span> também tende a aumentar.</p></div>
        <div class="mini-card"><strong>Associação negativa</strong><p>Em geral, quando <span class="math">x</span> aumenta, <span class="math">y</span> tende a diminuir.</p></div>
        <div class="mini-card"><strong>Sem relação clara</strong><p>Os pontos ficam espalhados sem uma tendência evidente de subida ou descida.</p></div>
      </div>
      <div class="note-box"><strong>Uma tendência não transforma automaticamente uma variável em causa da outra.</strong>
        <p>Primeiro descreva o que o gráfico mostra. Só depois pergunte quais outras explicações ou fatores podem estar envolvidos.</p>
      </div>`);
  }
})();