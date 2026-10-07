(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);
  const apply = (id, objective, content) => {
    const lesson = get(id);
    if (!lesson) return;
    lesson.objective = objective;
    lesson.content = content;
    lesson.mbbViva = true;
  };

  apply('quadratica',
    'Perceber por que algumas relações deixam de ter ritmo constante, construir a ideia de função quadrática a partir do termo x² e interpretar os coeficientes sem tratar a forma ax²+bx+c como fórmula para decorar.',
    `
      <div class="hero-box"><span class="card-title">Quando dobrar a entrada não dobra o resultado</span><p>Um quadrado de lado 1 tem área 1. Se o lado passa para 2, a área vira 4. Se passa para 3, a área vira 9. A entrada cresce de maneira regular, mas a saída não aumenta sempre pela mesma quantidade.</p><p>É aqui que a reta deixa de ser suficiente.</p></div>

      <div class="mbb-contextualizacao"><strong>Por que aparece o quadrado?</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Áreas, distâncias de frenagem aproximadas, trajetórias e problemas de máximo ou mínimo podem depender do quadrado de uma grandeza.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Uma grade de n por n possui n² posições. Certos processos que comparam muitos pares de elementos também podem crescer aproximadamente com o quadrado da quantidade de dados.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> o que muda quando o próprio ritmo de crescimento também começa a mudar?</div></div>

      <h3>1. Compare primeiro as diferenças</h3>
      <div class="table-wrap"><table><thead><tr><th>x</th><th>x²</th><th>Aumento em relação ao valor anterior</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>—</td></tr><tr><td>2</td><td>4</td><td>+3</td></tr><tr><td>3</td><td>9</td><td>+5</td></tr><tr><td>4</td><td>16</td><td>+7</td></tr><tr><td>5</td><td>25</td><td>+9</td></tr></tbody></table></div>
      <p>Na função do 1º grau, a variação era constante. Aqui ela muda: +3, +5, +7, +9...</p>
      <div class="note-box"><strong>Essa é a mudança conceitual.</strong><p>Não estamos apenas calculando números maiores. Estamos estudando uma relação em que a taxa de mudança deixa de ser constante.</p></div>

      <h3>2. O que significa x²?</h3>
      <p><span class="math">x²</span> significa <span class="math">x·x</span>. O expoente 2 diz quantas vezes a base aparece como fator.</p>
      <div class="two-col"><div class="mini-card"><strong><span class="math">3²</span></strong><p><span class="math">3·3=9</span>.</p></div><div class="mini-card"><strong><span class="math">(−3)²</span></strong><p><span class="math">(−3)·(−3)=9</span>.</p></div></div>
      <div class="danger-box"><strong>Cuidado com os parênteses.</strong><p><span class="math">(−3)²=9</span>, mas <span class="math">−3²=−9</span>, porque a potência é calculada antes do sinal negativo que está fora dela.</p></div>

      <h3>3. Da ideia simples para a forma geral</h3>
      <p>A regra mais simples é <span class="math">f(x)=x²</span>. Mas podemos combinar o termo quadrático com um termo do 1º grau e um valor constante:</p>
      <p><span class="formula">f(x)=ax²+bx+c</span></p>
      <p>Os números <span class="math">a</span>, <span class="math">b</span> e <span class="math">c</span> são coeficientes.</p>
      <div class="three-col"><div class="mini-card"><strong>a</strong><p>Multiplica x². Seu sinal decide se a parábola abre para cima ou para baixo; seu valor influencia a abertura.</p></div><div class="mini-card"><strong>b</strong><p>Multiplica x. Junto com a, desloca a posição do eixo de simetria e do vértice.</p></div><div class="mini-card"><strong>c</strong><p>É <span class="math">f(0)</span>; por isso indica onde o gráfico cruza o eixo vertical.</p></div></div>

      <h3>4. Por que a precisa ser diferente de zero?</h3>
      <p>Se <span class="math">a=0</span>, o termo <span class="math">ax²</span> desaparece:</p>
      <p><span class="math">0x²+bx+c=bx+c</span></p>
      <p>Então voltamos a uma função do 1º grau. Por isso, numa função quadrática, exigimos <span class="math">a≠0</span>.</p>

      <h3>5. Reconheça os coeficientes mesmo quando eles estão escondidos</h3>
      <div class="example-box"><span class="card-title">f(x)=2x²−5</span><p>Podemos escrevê-la como <span class="math">2x²+0x−5</span>. Portanto <span class="math">a=2</span>, <span class="math">b=0</span> e <span class="math">c=−5</span>.</p><div class="mbb-professor-pensa"><strong>Por que escrever o zero ajuda?</strong><p>Porque a ausência do termo x não significa que a função deixou de ter b; significa apenas que esse coeficiente vale zero.</p></div></div>

      <h3>6. Calcule um valor sem atropelar a ordem das operações</h3>
      <div class="example-box"><span class="card-title">f(x)=2x²−3x+1 para x=−2</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Substitua com parênteses</strong><p><span class="math">f(−2)=2(−2)²−3(−2)+1</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Faça a potência</strong><p><span class="math">(−2)²=4</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Faça as multiplicações</strong><p><span class="math">2·4=8</span> e <span class="math">−3·(−2)=+6</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Some</strong><p><span class="math">8+6+1=15</span>. Logo <span class="math">f(−2)=15</span>.</p></div></div></div>

      <h3>7. Na tecnologia e na programação: uma grade n × n</h3>
      <div class="example-box"><span class="card-title">Quantidade de células</span><p>Uma grade quadrada com n linhas e n colunas possui <span class="math">n·n=n²</span> células.</p><p>100×100 → 10.000 células. 200×200 → 40.000 células.</p><div class="mbb-professor-pensa"><strong>O que mudou?</strong><p>A dimensão dobrou, mas a quantidade de células quadruplicou. Esse comportamento ajuda a reconhecer relações quadráticas.</p></div></div>

      <h3>8. Função quadrática não significa que x precisa ser uma medida geométrica</h3>
      <p>O termo x² pode surgir em modelos de custo, lucro, trajetória ou desempenho. O significado depende do contexto.</p>
      <div class="example-box"><span class="card-title">Modelo de processamento</span><p>Um modelo simplificado de tempo pode ser <span class="math">T(n)=n²+4n+20</span>. Aqui, n representa uma quantidade de dados. O termo n² passa a dominar o crescimento quando n fica grande.</p><div class="mbb-professor-pensa"><strong>Não confunda modelo com realidade absoluta.</strong><p>A fórmula descreve uma hipótese ou aproximação. Sempre precisamos saber o que n representa e em quais condições o modelo é válido.</p></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Na função f(x)=−2x²+3x+5, identifique a, b e c e calcule f(2).</h4><div class="mbb-pause-question"><strong>Antes da conta:</strong> o sinal de a já permite prever alguma coisa sobre o gráfico?</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Coeficientes</strong><p><span class="math">a=−2</span>, <span class="math">b=3</span>, <span class="math">c=5</span>. Como a é negativo, a parábola abre para baixo.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Substitua x=2</strong><p><span class="math">f(2)=−2·2²+3·2+5</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule na ordem</strong><p><span class="math">2²=4</span>; então <span class="math">−2·4+6+5=−8+11=3</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>Quando a entrada vale 2, a saída da função vale 3.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Antes de sair calculando raízes ou vértice, identifique a estrutura. Muitas questões podem ser resolvidas parcialmente apenas lendo a, b, c e o contexto.</p></div>
      <div class="ok-box"><strong>Essência:</strong> a função quadrática aparece quando o termo x² faz o ritmo de mudança variar. A forma <span class="math">ax²+bx+c</span> organiza esse comportamento; ela não deve ser o ponto de partida da compreensão.</div>
      <button class="action-button primary" data-practice-topic="quadratica" type="button">Praticar este assunto</button>
    `
  );

  apply('parabola',
    'Ler a parábola como uma história de crescimento e decrescimento, compreender o significado de raízes, vértice, concavidade e discriminante e escolher cálculos conforme a pergunta feita pelo problema.',
    `
      <div class="hero-box"><span class="card-title">O gráfico pode responder perguntas antes da conta</span><p>Imagine a altura de uma bola lançada para cima. Ela sobe, atinge uma altura máxima e depois desce. Se representarmos altura pelo tempo, uma parábola pode mostrar <strong>quando a bola está no chão, quando atinge o ponto mais alto e quando começa a descer</strong>.</p></div>

      <div class="mbb-contextualizacao"><strong>Por que aprender a ler a parábola?</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Trajetórias, áreas, lucros e custos podem apresentar um ponto de máximo ou mínimo e um comportamento de subida e descida.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Jogos e animações podem usar modelos quadráticos para trajetórias; gráficos de desempenho também podem ser analisados buscando pontos de máximo, mínimo ou zeros.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> que informação do gráfico responde à pergunta do problema?</div></div>

      <h3>1. Primeiro veja a direção da abertura</h3>
      <p>Na função <span class="math">f(x)=ax²+bx+c</span>, o sinal de a decide a concavidade:</p>
      <div class="two-col"><div class="mini-card"><strong>a &gt; 0</strong><p>A parábola abre para cima. O vértice é um ponto de mínimo.</p></div><div class="mini-card"><strong>a &lt; 0</strong><p>A parábola abre para baixo. O vértice é um ponto de máximo.</p></div></div>
      <p>Sem calcular nenhuma raiz, já podemos responder se a curva possui máximo ou mínimo.</p>

      <h3>2. Raízes: onde a saída vale zero</h3>
      <p>Uma raiz é um valor de x para o qual <span class="math">f(x)=0</span>. No gráfico, isso significa que a parábola encontra o eixo horizontal.</p>
      <div class="example-box"><span class="card-title">f(x)=x²−5x+6</span><p>Teste x=2:</p><p><span class="math">f(2)=4−10+6=0</span>.</p><p>Teste x=3:</p><p><span class="math">f(3)=9−15+6=0</span>.</p><p>Logo 2 e 3 são raízes.</p><div class="mbb-professor-pensa"><strong>Traduza para o gráfico.</strong><p>A parábola cruza o eixo x nos pontos <span class="math">(2,0)</span> e <span class="math">(3,0)</span>.</p></div></div>

      <h3>3. Quando não dá para enxergar as raízes: um método geral</h3>
      <p>Para resolver <span class="math">ax²+bx+c=0</span>, calculamos primeiro o discriminante:</p>
      <p><span class="formula">Δ=b²−4ac</span></p>
      <p>Depois:</p>
      <p><span class="formula">x=(−b±√Δ)/(2a)</span></p>
      <div class="note-box"><strong>O símbolo ± significa duas possibilidades.</strong><p>Uma conta usa + e outra usa −. Por isso uma função quadrática pode ter até duas raízes reais.</p></div>

      <h3>4. O discriminante já conta quantas interseções existem</h3>
      <div class="three-col"><div class="mini-card"><strong>Δ &gt; 0</strong><p>Duas raízes reais diferentes: a parábola cruza o eixo x em dois pontos.</p></div><div class="mini-card"><strong>Δ = 0</strong><p>Uma raiz real repetida: a parábola toca o eixo x em um único ponto.</p></div><div class="mini-card"><strong>Δ &lt; 0</strong><p>Não há raízes reais: o gráfico não encontra o eixo x.</p></div></div>

      <h3>5. Vértice: onde a curva muda de direção</h3>
      <p>A parábola é simétrica. O vértice fica sobre o eixo de simetria e marca o ponto de máximo ou mínimo.</p>
      <p>A posição horizontal é:</p>
      <p><span class="formula">xᵥ=−b/(2a)</span></p>
      <p>Depois calculamos a altura correspondente:</p>
      <p><span class="formula">yᵥ=f(xᵥ)</span></p>
      <p>Leia <span class="math">xᵥ</span> como “x do vértice” e <span class="math">yᵥ</span> como “y do vértice”.</p>

      <h3>6. Um exemplo completo: f(x)=x²−4x+3</h3>
      <div class="example-box"><span class="card-title">Leia antes de calcular</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Concavidade</strong><p><span class="math">a=1&gt;0</span>. A parábola abre para cima e terá mínimo.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Raízes</strong><p><span class="math">x²−4x+3=(x−1)(x−3)</span>. Então as raízes são 1 e 3.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Simetria</strong><p>O meio entre 1 e 3 é 2. Portanto o vértice deve estar sobre <span class="math">x=2</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Vértice</strong><p><span class="math">f(2)=4−8+3=−1</span>. Vértice: <span class="math">(2,−1)</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">5</span><strong>Conte a história</strong><p>A função decresce até x=2, atinge o mínimo −1 e depois cresce. Ela zera em x=1 e x=3.</p></div></div></div>

      <h3>7. Crescimento e decrescimento</h3>
      <p>Se a parábola abre para cima, ela <strong>decresce até o vértice</strong> e <strong>cresce depois dele</strong>. Se abre para baixo, acontece o contrário.</p>
      <p>Isso é mais útil do que decorar uma frase: o vértice é justamente o ponto onde o sentido da variação muda.</p>

      <h3>8. Explore o papel de a</h3>
      <div class="visual-box"><span class="card-title">Mude a em y=ax²</span><label for="parabolaRange">Valor de a: <strong id="parabolaValue">1</strong></label><input id="parabolaRange" type="range" min="-3" max="3" step="1" value="1" style="width:100%"><svg id="parabolaGraph" class="math-graph" viewBox="0 0 560 280" role="img" aria-label="Gráfico interativo de uma parábola"></svg><p id="parabolaText"></p></div>
      <div class="micro-task"><strong>Observe:</strong> o que acontece quando a troca de positivo para negativo? E quando o valor absoluto de a aumenta?</div>

      <h3>9. Na tecnologia e na programação: trajetória em uma animação</h3>
      <div class="example-box"><span class="card-title">Altura de um objeto virtual</span><p>Uma animação pode usar um modelo como <span class="math">h(t)=−5t²+20t+1</span>. Como a é negativo, a trajetória possui um ponto máximo.</p><p>O vértice ajuda a descobrir quando ocorre a maior altura; as raízes podem indicar quando a altura atinge um nível de referência.</p><div class="mbb-professor-pensa"><strong>Escolha o cálculo pela pergunta.</strong><p>Se o problema pergunta “quando chega ao chão?”, pense em h(t)=0. Se pergunta “qual a maior altura?”, pense no vértice.</p></div></div>

      <h3>10. Tente você</h3>
      <div class="task-box"><h4>Para f(x)=−x²+6x−5, diga se há máximo ou mínimo e encontre a posição x do vértice.</h4><div class="mbb-pause-question"><strong>Antes de calcular:</strong> o sinal de a já responde metade da questão.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Leia a</strong><p><span class="math">a=−1</span>. A parábola abre para baixo, então o vértice é um máximo.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Identifique b</strong><p><span class="math">b=6</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule xᵥ</strong><p><span class="math">xᵥ=−6/(2·−1)=3</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>A função atinge seu valor máximo quando x=3.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Não calcule tudo automaticamente. Descubra o que a questão quer: zero, máximo, mínimo, concavidade ou intervalo de crescimento. Cada pergunta aponta para uma ferramenta diferente.</p></div>
      <div class="ok-box"><strong>Essência:</strong> a parábola é um gráfico que conta onde a função zera, onde muda de direção e onde atinge máximo ou mínimo. As fórmulas servem para localizar essas informações.</div>
      <button class="action-button primary" data-practice-topic="parabola" type="button">Praticar este assunto</button>
    `
  );

  apply('quadrado',
    'Entender relações do tipo y=ax² como proporcionalidade ao quadrado, interpretar a constante y/x² e prever o efeito de ampliar a entrada por um fator sem confundir esse comportamento com proporcionalidade direta.',
    `
      <div class="hero-box"><span class="card-title">Dobrar uma dimensão pode quadruplicar o resultado</span><p>Uma imagem quadrada de 100×100 possui 10.000 pixels. Se largura e altura dobram para 200×200, a quantidade passa para 40.000 pixels.</p><p>A dimensão dobrou; o total ficou quatro vezes maior. Por quê?</p></div>

      <div class="mbb-contextualizacao"><strong>O quadrado aparece quando duas dimensões mudam juntas</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Áreas de quadrados, superfícies e outras situações geométricas podem depender do quadrado de uma medida.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Imagens quadradas, matrizes, grades e mapas de células podem ter quantidade total proporcional a n² quando as duas dimensões usam o mesmo n.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> como reconhecer que y acompanha x², e não apenas x?</div></div>

      <h3>1. Comece pela área</h3>
      <p>Um quadrado de lado L possui:</p>
      <p><span class="formula">A=L²</span></p>
      <div class="table-wrap"><table><thead><tr><th>L</th><th>L²</th><th>Área A</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>4</td><td>4</td></tr><tr><td>3</td><td>9</td><td>9</td></tr><tr><td>4</td><td>16</td><td>16</td></tr></tbody></table></div>
      <p>A área não acompanha o lado na mesma proporção direta. Ela acompanha <strong>o quadrado do lado</strong>.</p>

      <h3>2. O teste correto agora muda</h3>
      <p>Na proporcionalidade direta, verificávamos <span class="math">y/x</span>. Aqui verificamos:</p>
      <p><span class="formula">y/x²</span></p>
      <p>Se esse resultado permanece constante, podemos escrever:</p>
      <p><span class="formula">y=ax²</span></p>
      <p>A constante a indica quantas unidades de y correspondem a cada unidade de x².</p>

      <h3>3. Exemplo: y=3x²</h3>
      <div class="table-wrap"><table><thead><tr><th>x</th><th>x²</th><th>y</th><th>y/x²</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>3</td><td>3</td></tr><tr><td>2</td><td>4</td><td>12</td><td>3</td></tr><tr><td>3</td><td>9</td><td>27</td><td>3</td></tr><tr><td>4</td><td>16</td><td>48</td><td>3</td></tr></tbody></table></div>
      <p>A constante é <span class="math">a=3</span>. Por isso <span class="math">y=3x²</span>.</p>

      <h3>4. O que acontece quando x é multiplicado por um fator?</h3>
      <p>Se x dobra:</p>
      <p><span class="math">(2x)²=4x²</span>.</p>
      <p>Se x triplica:</p>
      <p><span class="math">(3x)²=9x²</span>.</p>
      <div class="three-col"><div class="mini-card"><strong>x × 2</strong><p>y × 4.</p></div><div class="mini-card"><strong>x × 3</strong><p>y × 9.</p></div><div class="mini-card"><strong>x × 1/2</strong><p>y × 1/4.</p></div></div>

      <h3>5. Compare com y=ax</h3>
      <div class="two-col"><div class="mini-card"><strong>y=ax</strong><p>Dobrar x dobra y. A razão <span class="math">y/x</span> é constante.</p></div><div class="mini-card"><strong>y=ax²</strong><p>Dobrar x multiplica y por 4. A razão <span class="math">y/x²</span> é constante.</p></div></div>
      <div class="danger-box"><strong>Não chame as duas relações de “a mesma proporcionalidade”.</strong><p>Ambas possuem uma constante, mas a grandeza de referência é diferente: x na primeira, x² na segunda.</p></div>

      <h3>6. Na tecnologia e na programação: resolução de uma imagem</h3>
      <div class="example-box"><span class="card-title">Imagem quadrada</span><p>Uma imagem de lado n pixels possui <span class="math">P=n²</span> pixels.</p><p>Para n=500: <span class="math">P=500²=250.000</span>.</p><p>Se n passa para 1.000, P passa para 1.000.000.</p><div class="mbb-professor-pensa"><strong>Perceba a escala.</strong><p>O lado dobrou, mas a quantidade de pixels quadruplicou. Isso ajuda a entender por que aumentar dimensões pode aumentar rapidamente memória e processamento.</p></div></div>

      <h3>7. O contexto pode limitar x</h3>
      <p>Matematicamente, x pode assumir valores negativos em <span class="math">y=ax²</span>. Mas se x representa lado de um quadrado ou número de pixels de uma dimensão, valores negativos não fazem sentido.</p>
      <p>Por isso precisamos sempre distinguir a função matemática completa do domínio permitido pelo problema real.</p>

      <h3>8. Exemplo resolvido</h3>
      <div class="example-box"><span class="card-title">Descubra a constante</span><p>Uma relação do tipo <span class="math">y=ax²</span> possui o par <span class="math">x=4</span>, <span class="math">y=80</span>. Qual é a?</p><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Substitua o par</strong><p><span class="math">80=a·4²</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Calcule o quadrado</strong><p><span class="math">4²=16</span>, então <span class="math">80=16a</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Isole a</strong><p><span class="math">a=80/16=5</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Escreva a regra</strong><p><span class="math">y=5x²</span>. A razão y/x² vale 5.</p></div></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Se y=2x², calcule y para x=2 e x=6. Depois explique por que triplicar x de 2 para 6 multiplica y por 9.</h4><div class="mbb-pause-question"><strong>Antes da conta:</strong> pense no fator de mudança de x e no quadrado desse fator.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>x=2</strong><p><span class="math">y=2·2²=8</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>x=6</strong><p><span class="math">y=2·6²=72</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Compare</strong><p>x foi multiplicado por 3. Como a relação usa x², y é multiplicado por <span class="math">3²=9</span>: <span class="math">8·9=72</span>.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Quando uma tabela não parece proporcional por y/x, tente verificar se y/x² é constante. E observe se o enunciado fala em área, dimensão ou efeito de escala.</p></div>
      <div class="ok-box"><strong>Essência:</strong> em <span class="math">y=ax²</span>, y acompanha o quadrado de x. É por isso que dobrar x multiplica y por quatro.</div>
      <button class="action-button primary" data-practice-topic="quadrado" type="button">Praticar este assunto</button>
    `
  );

  apply('transformacoes',
    'Entender transformações de gráficos como alterações previsíveis de um gráfico conhecido, descobrir deslocamentos, reflexões e escalas a partir de pontos de referência e interpretar a forma g(x)=a(x−h)²+k sem decorar regras isoladas.',
    `
      <div class="hero-box"><span class="card-title">Você não precisa redesenhar tudo do zero</span><p>Se já conhece o gráfico de <span class="math">y=x²</span>, o que acontece com <span class="math">y=x²+3</span>? A forma da curva não mudou; cada ponto apenas ficou 3 unidades mais alto.</p><p>Transformar gráficos é aprender a prever essas mudanças.</p></div>

      <div class="mbb-contextualizacao"><strong>Transformar é reaproveitar uma referência</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Mapas, plantas e desenhos podem ser deslocados, ampliados ou refletidos sem perder sua estrutura básica.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Interfaces, animações, jogos e gráficos digitais reposicionam, redimensionam e espelham elementos continuamente.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> qual parte da expressão mudou e o que essa mudança faz com o gráfico?</div></div>

      <h3>1. Comece por um ponto conhecido</h3>
      <p>Na função <span class="math">f(x)=x²</span>, o vértice é <span class="math">(0,0)</span>.</p>
      <p>Se criamos <span class="math">g(x)=x²+3</span>, então:</p>
      <p><span class="math">g(0)=0²+3=3</span>.</p>
      <p>O vértice passa para <span class="math">(0,3)</span>. Todos os valores de saída aumentam 3.</p>
      <div class="note-box"><strong>Descoberta:</strong><p>Somar um valor <strong>fora</strong> da função desloca o gráfico verticalmente.</p></div>

      <h3>2. Subir e descer</h3>
      <div class="two-col"><div class="mini-card"><strong>f(x)+k</strong><p>Se k&gt;0, o gráfico sobe k unidades.</p></div><div class="mini-card"><strong>f(x)−k</strong><p>O gráfico desce k unidades.</p></div></div>
      <p>A forma não muda; apenas as alturas mudam.</p>

      <h3>3. E quando a mudança acontece dentro do x?</h3>
      <p>Considere <span class="math">g(x)=(x−3)²</span>. Em que valor o quadrado fica zero?</p>
      <p><span class="math">(3−3)²=0</span>.</p>
      <p>Portanto o vértice está em <span class="math">(3,0)</span>: a parábola foi deslocada 3 unidades para a direita.</p>
      <div class="danger-box"><strong>O sinal parece ao contrário porque estamos procurando quando o interior zera.</strong><p>Em <span class="math">(x−3)</span>, precisamos de x=3. Em <span class="math">(x+3)</span>, precisamos de x=−3.</p></div>

      <h3>4. Multiplicar a saída: esticar, achatar ou refletir</h3>
      <p>Compare <span class="math">f(x)</span> com <span class="math">2f(x)</span>. Cada valor de y dobra, então o gráfico se estica verticalmente.</p>
      <div class="three-col"><div class="mini-card"><strong>|a| &gt; 1</strong><p>As alturas aumentam em módulo; uma parábola fica mais estreita.</p></div><div class="mini-card"><strong>0 &lt; |a| &lt; 1</strong><p>As alturas diminuem em módulo; a curva fica mais achatada.</p></div><div class="mini-card"><strong>a &lt; 0</strong><p>Além da escala, os sinais de y se invertem; ocorre reflexão em relação ao eixo x.</p></div></div>

      <h3>5. Junte as ideias: g(x)=a(x−h)²+k</h3>
      <p>Agora cada parte tem um papel que já descobrimos:</p>
      <div class="three-col"><div class="mini-card"><strong>a</strong><p>Controla abertura/escala e reflexão.</p></div><div class="mini-card"><strong>h</strong><p>Move o vértice horizontalmente para x=h.</p></div><div class="mini-card"><strong>k</strong><p>Move o vértice verticalmente para y=k.</p></div></div>
      <p>Por isso o vértice de <span class="math">g(x)=a(x−h)²+k</span> é <span class="math">(h,k)</span>.</p>

      <h3>6. Exemplo completo</h3>
      <div class="example-box"><span class="card-title">g(x)=−2(x−4)²+3</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Posição</strong><p><span class="math">h=4</span> e <span class="math">k=3</span>. Vértice: <span class="math">(4,3)</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Reflexão</strong><p>a é negativo, então a parábola abre para baixo.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Escala</strong><p><span class="math">|a|=2</span>, então as alturas em relação ao vértice são multiplicadas por 2; a parábola fica mais estreita que y=x².</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Conte a transformação</strong><p>Partimos de y=x², deslocamos 4 para a direita, 3 para cima, refletimos e estreitamos.</p></div></div></div>

      <h3>7. Retas também podem ser comparadas por transformação</h3>
      <p><span class="math">y=2x+1</span> e <span class="math">y=2x−4</span> têm a mesma inclinação porque o coeficiente de x é 2 nas duas.</p>
      <p>O valor inicial mudou de 1 para −4. As retas são paralelas e a segunda está 5 unidades abaixo da primeira.</p>

      <h3>8. Na tecnologia e na programação: mover um objeto sem redesenhá-lo</h3>
      <div class="example-box"><span class="card-title">Animação e coordenadas</span><p>Se uma trajetória é descrita por uma função, podemos criar uma versão deslocada somando um valor às coordenadas. A mesma ideia matemática aparece quando um objeto gráfico é movido na tela sem alterar sua forma.</p><div class="mbb-professor-pensa"><strong>O ganho de raciocínio é este:</strong><p>em vez de calcular dezenas de pontos novos sem referência, observamos como uma transformação conhecida afeta todos eles de uma vez.</p></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Partindo de y=x², descreva as transformações que produzem y=(x+2)²−5.</h4><div class="mbb-pause-question"><strong>Antes de responder:</strong> descubra em qual x o termo entre parênteses vale zero.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Horizontal</strong><p><span class="math">x+2=0</span> quando <span class="math">x=−2</span>. Portanto o gráfico vai 2 unidades para a esquerda.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Vertical</strong><p>O −5 está fora da potência; o gráfico desce 5 unidades.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Vértice</strong><p>O vértice passa de <span class="math">(0,0)</span> para <span class="math">(−2,−5)</span>.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Antes de calcular pontos, procure um gráfico-base e um elemento de referência: vértice, intercepto ou inclinação. Muitas transformações podem ser identificadas visualmente.</p></div>
      <div class="ok-box"><strong>Essência:</strong> transformação de gráfico é previsão, não redesenho. Cada alteração na expressão produz uma mudança geométrica que pode ser entendida e antecipada.</div>
      <button class="action-button primary" data-practice-topic="transformacoes" type="button">Praticar este assunto</button>
    `
  );
})();
