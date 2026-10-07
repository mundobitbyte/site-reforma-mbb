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

  apply('variacao',
    'Entender proporcionalidade como uma relação de taxa constante, descobrir a constante a partir de situações reais e distinguir crescimento proporcional de outras relações que também crescem.',
    `
      <div class="hero-box">
        <span class="card-title">Duas situações crescem. Só uma é proporcional.</span>
        <p>Uma loja vende castanhas a R$ 8 por 100 g. Se você compra o dobro, paga o dobro. Já um serviço de entrega cobra R$ 8 de taxa inicial mais R$ 4 por quilômetro: aumentar a distância aumenta o preço, mas não na mesma proporção.</p>
        <p>A pergunta desta aula é mais interessante do que parece: <strong>como reconhecer matematicamente quando duas grandezas realmente crescem na mesma proporção?</strong></p>
      </div>

      <div class="mbb-contextualizacao">
        <strong>Por que vale a pena entender isso?</strong>
        <div class="mbb-context-grid">
          <div class="mbb-context-card"><strong>No cotidiano</strong><p>Preço por peso, receita culinária, combustível consumido e distância percorrida podem manter uma quantidade fixa “por unidade”.</p></div>
          <div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Um sensor pode gerar 40 leituras por segundo; uma conexão pode transferir 25 MB por segundo; um processo pode produzir uma quantidade constante de registros por minuto.</p></div>
        </div>
        <div class="mbb-central-question"><strong>Pergunta central:</strong> o que precisa permanecer constante para que a relação seja proporcional?</div>
      </div>

      <h3>1. Comece sem fórmula: procure o que se repete</h3>
      <p>Considere um produto que custa R$ 8 por unidade de massa. Observe:</p>
      <div class="table-wrap"><table><thead><tr><th>Quantidade x</th><th>Preço y</th><th>Preço ÷ quantidade</th></tr></thead><tbody><tr><td>1</td><td>8</td><td>8</td></tr><tr><td>2</td><td>16</td><td>8</td></tr><tr><td>3</td><td>24</td><td>8</td></tr><tr><td>5</td><td>40</td><td>8</td></tr></tbody></table></div>
      <p>Os valores de x e y mudam, mas uma coisa não muda: <span class="math">y/x=8</span>.</p>
      <div class="note-box"><strong>Interprete antes de seguir.</strong><p>Esse 8 não é apenas “o resultado de uma divisão”. Ele significa <strong>8 unidades de y para cada 1 unidade de x</strong>. É uma taxa constante.</p></div>

      <h3>2. Agora a fórmula nasce naturalmente</h3>
      <p>Se cada unidade de x corresponde a 8 unidades de y, então para qualquer x basta multiplicar por 8:</p>
      <p><span class="formula">y=8x</span></p>
      <p>Para generalizar, chamamos a taxa constante de <span class="math">k</span>:</p>
      <p><span class="formula">y=kx</span></p>
      <p>A letra <span class="math">k</span> não cria uma nova ideia. Ela apenas ocupa o lugar da taxa constante que já descobrimos.</p>

      <h3>3. Um teste mental muito útil: e se x dobrar?</h3>
      <p>Se <span class="math">y=kx</span>, dobrar x também dobra y. Triplicar x triplica y. Reduzir x à metade reduz y à metade.</p>
      <div class="example-box"><span class="card-title">Teste rápido</span><p>Uma máquina produz 6 peças por minuto. Em 4 minutos produz 24 peças. Se o tempo dobrar para 8 minutos, a produção dobra para 48 peças.</p><div class="mbb-professor-pensa"><strong>O que está sendo confirmado?</strong><p>A taxa continua sendo 6 peças por minuto. É isso, e não simplesmente o fato de os números crescerem, que caracteriza a proporcionalidade.</p></div></div>

      <h3>4. Por que a taxa inicial quebra a proporcionalidade?</h3>
      <p>Volte ao serviço de entrega: <span class="math">y=4x+8</span>. Para 1, 2 e 3 km, os preços são 12, 16 e 20.</p>
      <div class="table-wrap"><table><thead><tr><th>x</th><th>y</th><th>y/x</th></tr></thead><tbody><tr><td>1</td><td>12</td><td>12</td></tr><tr><td>2</td><td>16</td><td>8</td></tr><tr><td>3</td><td>20</td><td>6,67</td></tr></tbody></table></div>
      <p>A razão muda. Além disso, quando <span class="math">x=0</span>, o preço ainda seria R$ 8. Por isso a regra não tem a forma <span class="math">y=kx</span>.</p>
      <div class="danger-box"><strong>Erro comum:</strong> “se x aumenta e y aumenta, é proporcional”. Não. Crescer junto é apenas um indício; proporcionalidade exige <strong>taxa constante</strong>.</div>

      <h3>5. Tabela, expressão e gráfico contam a mesma história</h3>
      <div class="three-col">
        <div class="mini-card"><strong>Tabela</strong><p>Para <span class="math">x≠0</span>, a razão <span class="math">y/x</span> é constante.</p></div>
        <div class="mini-card"><strong>Expressão</strong><p>A regra pode ser escrita como <span class="math">y=kx</span>, sem valor inicial somado.</p></div>
        <div class="mini-card"><strong>Gráfico</strong><p>Os pontos formam uma reta que passa pela origem <span class="math">(0,0)</span>.</p></div>
      </div>
      <p>A origem é o ponto em que os eixos se encontram. Se não há entrada, uma relação diretamente proporcional também não produz saída.</p>

      <h3>6. Laboratório: mude a taxa e depois acrescente um valor inicial</h3>
      <div class="lab-panel" id="proportionLab">
        <div class="lab-controls">
          <label>Taxa <strong>k = <span id="propRateValue">6</span></strong><input id="propRate" type="range" min="1" max="12" step="1" value="6"></label>
          <label>Valor inicial <strong>b = <span id="propFixedValue">0</span></strong><input id="propFixed" type="range" min="0" max="30" step="2" value="0"></label>
        </div>
        <div class="lab-equation">Regra atual: <span id="propEquation" class="formula">y = 6x</span></div>
        <div class="lab-grid"><div class="table-wrap"><table><thead><tr><th>x</th><th>y</th><th>y/x</th></tr></thead><tbody id="propTableBody"></tbody></table></div><div class="visual-box compact"><svg id="propGraph" class="math-graph" viewBox="0 0 560 300" role="img" aria-label="Gráfico interativo da relação entre x e y"></svg><p id="propConclusion" class="lab-conclusion"></p></div></div>
        <div class="micro-task"><strong>Faça um teste:</strong> deixe <span class="math">b=0</span> e altere k. Depois coloque b diferente de zero. Observe a razão y/x e o ponto em que a reta cruza o eixo vertical.</div>
      </div>

      <h3>7. Na tecnologia e na programação: taxa de dados</h3>
      <div class="example-box"><span class="card-title">Transferência estável</span><p>Uma conexão transfere 25 MB a cada segundo. Se a taxa permanecer constante, em <span class="math">t</span> segundos a quantidade transferida é:</p><p><span class="formula">D=25t</span></p><p>Em 12 s: <span class="math">D=25·12=300 MB</span>.</p><div class="mbb-professor-pensa"><strong>Leia o resultado.</strong><p>O número 25 é a taxa: 25 megabytes para cada segundo. A fórmula apenas permite aplicar essa mesma relação a qualquer tempo.</p></div></div>

      <h3>8. Exemplo resolvido como investigação</h3>
      <div class="example-box"><span class="card-title">Uma tabela é proporcional?</span><p>Uma máquina apresenta os pares (tempo, produção): (3,18), (5,30), (7,42).</p><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Procure a taxa</strong><p><span class="math">18/3=6</span>, <span class="math">30/5=6</span> e <span class="math">42/7=6</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Interprete</strong><p>A produção é de 6 peças por minuto em todos os pares.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Generalize</strong><p>Se t é o tempo e P a produção, <span class="math">P=6t</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Preveja e confira</strong><p>Em 10 minutos, <span class="math">P=60</span>. A razão <span class="math">60/10</span> continua 6.</p></div></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Uma impressora produz 45 páginas em 3 minutos e 90 em 6 minutos. Mantido o ritmo, quantas páginas produz em 8 minutos?</h4><div class="mbb-pause-question"><strong>Antes de calcular:</strong> qual é a quantidade produzida por minuto?</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Descubra a taxa</strong><p><span class="math">45/3=15</span> páginas por minuto. O segundo par confirma: <span class="math">90/6=15</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Escreva a regra</strong><p><span class="math">P=15t</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule</strong><p><span class="math">P=15·8=120</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>Em 8 minutos, a impressora produz 120 páginas se a taxa permanecer constante.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Não procure apenas palavras como “proporcional”. Teste a taxa por unidade, observe se a reta passa pela origem e desconfie de qualquer valor inicial fixo.</p></div>
      <div class="ok-box"><strong>Essência:</strong> proporcionalidade direta é uma relação de taxa constante. A fórmula <span class="math">y=kx</span> nasce dessa constância.</div>
      <button class="action-button primary" data-practice-topic="variacao" type="button">Praticar este assunto</button>
    `
  );

  apply('algebra',
    'Perceber a álgebra como linguagem para registrar padrões e relações, compreender o papel das letras e construir expressões e fórmulas a partir de situações antes de manipular símbolos.',
    `
      <div class="hero-box"><span class="card-title">A álgebra aparece quando você se cansa de repetir a mesma conta</span><p>Uma gráfica cobra R$ 12 de preparação e R$ 3 por cartão. Para 10 cartões, fazemos <span class="math">12+3·10</span>. Para 50, <span class="math">12+3·50</span>. Para 200, a estrutura continua igual.</p><p>Em vez de inventar uma nova conta para cada quantidade, podemos registrar <strong>a regra que todas essas contas seguem</strong>.</p></div>

      <div class="mbb-contextualizacao"><strong>Por que usar letras?</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Tarifas, compras, salários, distâncias e receitas repetem estruturas em que alguns valores mudam e outros permanecem fixos.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Programas usam variáveis para representar quantidades que mudam: preço, posição, tempo, tamanho, quantidade de itens, pontuação e muitas outras.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> como escrever uma única regra que funcione para muitos valores diferentes?</div></div>

      <h3>1. Primeiro separe o que muda do que fica fixo</h3>
      <p>Na gráfica:</p>
      <div class="two-col"><div class="mini-card"><strong>R$ 12</strong><p>É a preparação. Aparece uma única vez, independentemente da quantidade.</p></div><div class="mini-card"><strong>R$ 3 por cartão</strong><p>É a parte variável. Se a quantidade muda, essa parte muda junto.</p></div></div>
      <p>Chamemos a quantidade de cartões de <span class="math">q</span>. A regra fica:</p>
      <p><span class="formula">C=12+3q</span></p>
      <p>Leia em português: <strong>“o custo é 12 reais de preparação mais 3 reais para cada cartão”</strong>.</p>

      <h3>2. A letra não é um mistério</h3>
      <p>Uma letra pode representar um valor que ainda não escolhemos. Em <span class="math">3q</span>, existe uma multiplicação escondida: <span class="math">3q=3·q</span>.</p>
      <div class="example-box"><span class="card-title">Substituir é trocar a letra por um valor</span><p>Se <span class="math">q=20</span>:</p><div class="mbb-equation-walk"><p><span class="math">C=12+3q</span></p><p><span class="math">C=12+3·20</span></p><p><span class="math">C=12+60</span></p><p><span class="math">C=72</span></p></div><div class="mbb-professor-pensa"><strong>Não pare em 72.</strong><p>O resultado significa que 20 cartões custam R$ 72 nessa regra.</p></div></div>

      <h3>3. Expressão, equação e fórmula não são a mesma coisa</h3>
      <div class="three-col"><div class="mini-card"><strong>Expressão</strong><p><span class="math">3q+12</span>. É uma combinação de números, letras e operações; não afirma uma igualdade.</p></div><div class="mini-card"><strong>Equação</strong><p><span class="math">3q+12=72</span>. Existe uma igualdade e podemos procurar qual q a torna verdadeira.</p></div><div class="mini-card"><strong>Fórmula</strong><p><span class="math">C=3q+12</span>. Registra uma relação geral entre grandezas.</p></div></div>
      <div class="note-box"><strong>O sinal = significa “tem o mesmo valor que”.</strong><p>Ele não quer dizer “agora vem a resposta”. Em <span class="math">C=3q+12</span>, os dois lados representam a mesma quantidade de maneiras diferentes.</p></div>

      <h3>4. Como transformar frases em linguagem algébrica</h3>
      <div class="worked-path"><div class="worked-step"><span>1</span><div><strong>“Um valor x mais 7”</strong><p><span class="math">x+7</span>.</p></div></div><div class="worked-step"><span>2</span><div><strong>“O dobro de x”</strong><p><span class="math">2x</span>.</p></div></div><div class="worked-step"><span>3</span><div><strong>“5 reais fixos mais 2 por unidade”</strong><p><span class="math">5+2x</span>.</p></div></div><div class="worked-step"><span>4</span><div><strong>“A metade de x”</strong><p><span class="math">x/2</span>.</p></div></div></div>
      <p>O segredo não é decorar traduções isoladas. É perguntar: <strong>que operação a frase está descrevendo?</strong></p>

      <h3>5. Generalizar: sair de casos e descobrir a regra</h3>
      <p>Observe uma tabela:</p>
      <div class="table-wrap"><table><thead><tr><th>x</th><th>y</th></tr></thead><tbody><tr><td>1</td><td>7</td></tr><tr><td>2</td><td>10</td></tr><tr><td>3</td><td>13</td></tr><tr><td>4</td><td>16</td></tr></tbody></table></div>
      <p>A cada aumento de 1 em x, y aumenta 3. Se retirarmos a parte que varia, sobra 4: <span class="math">7−3·1=4</span>, <span class="math">10−3·2=4</span>.</p>
      <p>Portanto a regra é <span class="formula">y=3x+4</span>.</p>

      <h3>6. Na tecnologia e na programação: posição de elementos</h3>
      <div class="example-box"><span class="card-title">Itens igualmente espaçados</span><p>Imagine uma lista vertical em que o primeiro item começa na posição 16 pixels e cada novo item fica 40 pixels abaixo do anterior. Uma regra pode calcular a posição a partir de um índice.</p><p>Se começarmos o índice em 0: <span class="formula">y=16+40i</span>.</p><p>Para <span class="math">i=3</span>: <span class="math">y=16+40·3=136</span> pixels.</p><div class="mbb-professor-pensa"><strong>Por que isso é útil?</strong><p>A fórmula permite ao programa calcular muitas posições sem armazenar cada uma separadamente.</p></div></div>

      <h3>7. Um erro de modelagem muito comum</h3>
      <p>Se há R$ 12 fixos e R$ 3 por cartão, escrever <span class="math">C=(12+3)q</span> está errado. Essa expressão multiplicaria também a taxa fixa pela quantidade.</p>
      <div class="contrast-box"><strong>Compare:</strong><p><span class="math">12+3q</span> significa “12 uma vez + 3 para cada q”. Já <span class="math">15q</span> significa “15 para cada q”. São situações diferentes.</p></div>

      <h3>8. Exemplo inverso: descobrir a parte fixa</h3>
      <div class="example-box"><span class="card-title">A regra está escondida no total</span><p>Uma empresa cobra R$ 5 por unidade mais uma preparação fixa. Para 8 unidades, o total é R$ 52. Qual é a preparação?</p><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Separe a parte variável</strong><p>8 unidades a R$ 5 custam <span class="math">5·8=40</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Retire essa parte do total</strong><p><span class="math">52−40=12</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Construa a regra</strong><p>A preparação é R$ 12, então <span class="math">C=5q+12</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Confira</strong><p>Para q=8: <span class="math">5·8+12=52</span>. A regra reproduz o dado original.</p></div></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Uma corrida cobra R$ 6 de tarifa inicial e R$ 2,50 por quilômetro. Escreva a fórmula do preço P em função da distância d e calcule o preço de 8 km.</h4><div class="mbb-pause-question"><strong>Antes de escrever:</strong> qual parte acontece uma única vez e qual parte se repete por quilômetro?</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Identifique as partes</strong><p>R$ 6 é fixo; R$ 2,50 depende da distância.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Escreva a regra</strong><p><span class="math">P=6+2,5d</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Substitua d=8</strong><p><span class="math">P=6+2,5·8=6+20=26</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>Uma corrida de 8 km custa R$ 26 segundo essa regra.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Quando receber uma tabela ou situação, procure primeiro a estrutura: o que varia, o que é fixo e qual operação liga as grandezas. Só depois escolha letras.</p></div>
      <div class="ok-box"><strong>Essência:</strong> álgebra é uma linguagem para registrar relações e padrões. A letra não complica a conta; ela permite que a mesma regra funcione para muitos casos.</div>
      <button class="action-button primary" data-practice-topic="algebra" type="button">Praticar este assunto</button>
    `
  );

  apply('funcao1',
    'Construir a ideia de função a partir de entradas e saídas, entender de onde surge a forma f(x)=ax+b e interpretar os coeficientes em situações crescentes e decrescentes.',
    `
      <div class="hero-box"><span class="card-title">Uma pergunta entra. Uma regra produz a resposta.</span><p>Um estacionamento cobra R$ 10 para entrar e R$ 5 por hora. Se você disser quantas horas ficou, a regra determina um único preço.</p><p>Essa ideia — <strong>uma entrada sendo transformada em uma saída por uma regra</strong> — é o coração de uma função.</p></div>

      <div class="mbb-contextualizacao"><strong>Funções estão por toda parte</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Tempo de estacionamento determina preço; quantidade comprada determina custo; tempo de viagem pode determinar distância.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Uma função de programa recebe dados de entrada e devolve um resultado. Também usamos funções matemáticas para modelar preço por uso, consumo, posição e desempenho.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> como uma regra transforma cada entrada permitida em um único resultado?</div></div>

      <h3>1. Antes de f(x): entrada, regra e saída</h3>
      <div class="worked-path"><div class="worked-step"><span>1</span><div><strong>Entrada</strong><p>Tempo: 2 horas.</p></div></div><div class="worked-step"><span>2</span><div><strong>Regra</strong><p>R$ 10 fixos + R$ 5 por hora.</p></div></div><div class="worked-step"><span>3</span><div><strong>Saída</strong><p><span class="math">10+5·2=20</span>. Preço: R$ 20.</p></div></div></div>
      <p>Chamamos a entrada de <span class="math">x</span>. A escrita <span class="math">f(x)</span>, lida “f de x”, representa a saída produzida pela função quando a entrada vale x.</p>
      <p><span class="formula">f(x)=5x+10</span></p>
      <p>Assim, <span class="math">f(2)=20</span> significa: <strong>quando a entrada é 2, a saída é 20</strong>.</p>

      <h3>2. De onde vêm a e b?</h3>
      <p>Na regra <span class="math">5x+10</span>, cada número tem um trabalho:</p>
      <div class="two-col"><div class="mini-card"><strong>5 — variação por unidade</strong><p>Cada hora acrescenta R$ 5. É o ritmo de mudança.</p></div><div class="mini-card"><strong>10 — valor inicial</strong><p>É o preço quando x=0, antes de acrescentar horas.</p></div></div>
      <p>Para representar qualquer regra desse tipo, substituímos os números por letras:</p>
      <p><span class="formula">f(x)=ax+b</span></p>
      <p><span class="math">a</span> é a taxa de variação; <span class="math">b</span> é o valor inicial.</p>

      <h3>3. Uma função também pode diminuir</h3>
      <div class="example-box"><span class="card-title">Reservatório esvaziando</span><p>Um reservatório começa com 96 L e perde 8 L por minuto:</p><p><span class="formula">V(t)=96−8t</span></p><p>A taxa é <span class="math">a=−8</span>. O sinal negativo indica que o volume diminui 8 L a cada minuto.</p><div class="mbb-professor-pensa"><strong>Leia os coeficientes como uma história.</strong><p>96 é o volume inicial. −8 é a mudança por minuto. A fórmula registra os dois fatos ao mesmo tempo.</p></div></div>

      <h3>4. O domínio depende da situação</h3>
      <p>Matematicamente podemos substituir muitos números em uma expressão. Mas o contexto pode limitar as entradas.</p>
      <p>No reservatório, tempos negativos não representam a situação observada. E depois de 12 minutos, <span class="math">V(12)=0</span>; continuar usando a fórmula daria volumes negativos, que não fazem sentido nesse modelo físico.</p>
      <div class="note-box"><strong>Domínio</strong><p>É o conjunto de entradas permitidas para uma função. Em problemas reais, ele depende do significado da situação, não apenas da conta.</p></div>

      <h3>5. Casos importantes — agora os nomes fazem sentido</h3>
      <div class="two-col"><div class="mini-card"><strong>Afim: ax+b</strong><p>Taxa constante e possível valor inicial.</p></div><div class="mini-card"><strong>Linear: ax</strong><p>É o caso com b=0; relaciona-se à proporcionalidade direta.</p></div><div class="mini-card"><strong>Constante: b</strong><p>A saída não muda, mesmo que a entrada mude.</p></div><div class="mini-card"><strong>Identidade: x</strong><p>A saída é igual à própria entrada.</p></div></div>

      <h3>6. Ligação com proporcionalidade</h3>
      <p>Compare:</p>
      <div class="two-col"><div class="mini-card"><strong><span class="math">f(x)=5x</span></strong><p>Quando x=0, f(x)=0. É função linear e representa proporcionalidade direta.</p></div><div class="mini-card"><strong><span class="math">g(x)=5x+10</span></strong><p>Quando x=0, g(x)=10. A taxa continua 5, mas existe um valor inicial; não é proporcionalidade direta.</p></div></div>

      <h3>7. Na tecnologia e na programação: cobrança por uso</h3>
      <div class="example-box"><span class="card-title">Serviço com mensalidade e consumo</span><p>Um serviço digital cobra R$ 20 mensais mais R$ 0,50 por GB usado. Se g é o consumo:</p><p><span class="formula">C(g)=0,5g+20</span></p><p>Para 40 GB: <span class="math">C(40)=0,5·40+20=40</span>.</p><div class="mbb-professor-pensa"><strong>O que cada parte diz?</strong><p>0,5 é custo por GB; 20 é custo fixo. O resultado R$ 40 é o custo total para aquela entrada.</p></div></div>

      <h3>8. Reconstruindo uma função a partir de informação parcial</h3>
      <div class="example-box"><span class="card-title">Sabemos a taxa e um ponto</span><p>Uma função aumenta 4 unidades em y para cada aumento de 1 em x. Também sabemos que quando <span class="math">x=3</span>, <span class="math">y=17</span>. Qual é a função?</p><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Identifique a</strong><p>A taxa é 4, então <span class="math">a=4</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Use a forma geral</strong><p><span class="math">y=4x+b</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Substitua o ponto conhecido</strong><p><span class="math">17=4·3+b</span>, então <span class="math">17=12+b</span> e <span class="math">b=5</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Confira</strong><p>A função é <span class="math">f(x)=4x+5</span>. De fato, <span class="math">f(3)=17</span>.</p></div></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Um serviço cobra R$ 40 de visita mais R$ 30 por hora. Escreva a função C(h) e calcule o custo de 2,5 horas.</h4><div class="mbb-pause-question"><strong>Antes da fórmula:</strong> qual é o valor inicial e qual é a taxa por hora?</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Organize os dados</strong><p>Valor inicial: 40. Taxa: 30 por hora.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Modele</strong><p><span class="math">C(h)=30h+40</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule</strong><p><span class="math">C(2,5)=30·2,5+40=75+40=115</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>O atendimento de 2,5 horas custa R$ 115.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Se a fórmula não vier pronta, procure a taxa de variação e o valor inicial. Esses dois elementos normalmente revelam a função afim.</p></div>
      <div class="ok-box"><strong>Essência:</strong> uma função afim registra uma mudança constante a partir de um valor inicial: <span class="math">f(x)=ax+b</span>.</div>
      <button class="action-button primary" data-practice-topic="funcao1" type="button">Praticar este assunto</button>
    `
  );

  apply('reta',
    'Transformar a inclinação visual de uma reta em uma taxa com significado, construir o coeficiente angular a partir de duas variações e relacioná-lo à equação y=mx+b.',
    `
      <div class="hero-box"><span class="card-title">Uma reta não está apenas “inclinada”: ela conta um ritmo</span><p>Imagine um tanque recebendo 12 litros por minuto. Num gráfico de volume pelo tempo, a linha sobe. Quanto mais íngreme, maior o ganho de volume por minuto.</p><p>Podemos transformar essa impressão visual em um número preciso.</p></div>

      <div class="mbb-contextualizacao"><strong>Onde a inclinação tem significado?</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Preço por hora, nível de água, distância percorrida e temperatura podem variar num ritmo constante e gerar retas.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Gráficos de dados transferidos, tarefas processadas ou registros gerados por minuto podem formar retas quando a taxa permanece estável.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> quanto y muda para cada unidade que avançamos em x?</div></div>

      <h3>1. Antes do símbolo Δ, caminhe sobre o gráfico</h3>
      <p>Considere os pontos <span class="math">A=(1,15)</span> e <span class="math">B=(3,25)</span>.</p>
      <div class="two-col"><div class="mini-card"><strong>Avanço horizontal</strong><p>x passou de 1 para 3: <span class="math">3−1=2</span>.</p></div><div class="mini-card"><strong>Mudança vertical</strong><p>y passou de 15 para 25: <span class="math">25−15=10</span>.</p></div></div>
      <p>A reta sobe 10 enquanto avança 2. Por unidade de avanço:</p>
      <p><span class="math">10/2=5</span></p>
      <p>Portanto ela sobe 5 unidades em y para cada 1 unidade em x.</p>

      <h3>2. Agora damos nomes às mudanças</h3>
      <p>O símbolo grego <span class="math">Δ</span> (delta) significa variação:</p>
      <p><span class="math">Δx=x₂−x₁</span> e <span class="math">Δy=y₂−y₁</span>.</p>
      <p>A razão entre essas mudanças recebe o nome de <strong>coeficiente angular</strong>, representado por m:</p>
      <p><span class="formula">m=Δy/Δx=(y₂−y₁)/(x₂−x₁)</span></p>
      <div class="note-box"><strong>A fórmula veio depois da ideia.</strong><p>Ela apenas registra de forma compacta a conta “mudança vertical dividida pela mudança horizontal”.</p></div>

      <h3>3. O sinal de m conta a direção</h3>
      <div class="three-col"><div class="mini-card"><strong>m &gt; 0</strong><p>Ao avançar para a direita, a reta sobe. Função crescente.</p></div><div class="mini-card"><strong>m &lt; 0</strong><p>Ao avançar para a direita, a reta desce. Função decrescente.</p></div><div class="mini-card"><strong>m = 0</strong><p>A reta é horizontal. A saída não muda.</p></div></div>
      <p>E uma reta vertical? Nesse caso <span class="math">Δx=0</span>. Como não podemos dividir por zero, o coeficiente angular não é definido.</p>

      <h3>4. Inclinação não diz onde a reta começa</h3>
      <p>Duas retas podem ter a mesma inclinação e estar em alturas diferentes. Precisamos também saber o valor de y quando <span class="math">x=0</span>.</p>
      <p>Chamamos esse valor de <span class="math">b</span>:</p>
      <p><span class="formula">y=mx+b</span></p>
      <p>Leia: <strong>valor atual = taxa de variação × entrada + valor inicial</strong>.</p>

      <h3>5. Reconstrua a reta a partir de dois pontos</h3>
      <div class="example-box"><span class="card-title">Pontos (2,9) e (6,21)</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Calcule as mudanças separadamente</strong><p><span class="math">Δy=21−9=12</span> e <span class="math">Δx=6−2=4</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Encontre a inclinação</strong><p><span class="math">m=12/4=3</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Descubra b</strong><p>Use o ponto (2,9): <span class="math">9=3·2+b</span>. Então <span class="math">b=3</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Escreva e confira</strong><p><span class="math">y=3x+3</span>. Para x=6, y=21, como esperado.</p></div></div></div>

      <h3>6. Explore a inclinação</h3>
      <div class="visual-box"><span class="card-title">Mude m e observe</span><label for="slopeRange">Coeficiente angular m: <strong id="slopeValue">2</strong></label><input id="slopeRange" type="range" min="-4" max="4" step="1" value="2" style="width:100%"><svg id="slopeGraph" class="math-graph" viewBox="0 0 560 260" role="img" aria-label="Gráfico interativo de uma reta"></svg><p id="slopeText"></p></div>
      <div class="micro-task"><strong>Experimente:</strong> passe por valores positivos, zero e negativos. Não observe apenas o desenho; diga em palavras o que m está fazendo com y a cada avanço em x.</div>

      <h3>7. Na tecnologia e na programação: processamento por minuto</h3>
      <div class="example-box"><span class="card-title">Fila de tarefas</span><p>Um sistema já processou 120 tarefas quando começamos a observar e continua processando 30 por minuto:</p><p><span class="formula">T(t)=30t+120</span></p><p>No gráfico, <span class="math">m=30</span> significa 30 tarefas por minuto e <span class="math">b=120</span> registra o ponto de partida.</p><div class="mbb-professor-pensa"><strong>A inclinação tem unidade.</strong><p>Neste caso, tarefas/minuto. Interpretar a unidade evita transformar m em um número sem significado.</p></div></div>

      <h3>8. Uma ligação que aparecerá depois</h3>
      <p>A razão <span class="math">Δy/Δx</span> também descreve uma inclinação geométrica. Quando estudarmos tangente, veremos que, para o ângulo θ que a reta forma com o eixo x:</p>
      <p><span class="formula">m=tan(θ)</span></p>
      <p>Não são duas ideias separadas: ambas comparam subida e avanço horizontal.</p>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Uma reta passa por (1,18) e (5,10). Calcule m e explique o que o sinal encontrado diz sobre a reta.</h4><div class="mbb-pause-question"><strong>Antes da divisão:</strong> calcule Δy e Δx separadamente.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Mudança vertical</strong><p><span class="math">Δy=10−18=−8</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Mudança horizontal</strong><p><span class="math">Δx=5−1=4</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Inclinação</strong><p><span class="math">m=−8/4=−2</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>A cada avanço de 1 em x, y diminui 2. Por isso a reta é decrescente.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Coeficiente angular pode aparecer disfarçado de velocidade, custo por unidade, produção por hora ou qualquer taxa constante. Procure “quanto muda por unidade”.</p></div>
      <div class="ok-box"><strong>Essência:</strong> m mede quanto y muda para cada 1 unidade de x. A equação <span class="math">y=mx+b</span> combina essa taxa com o valor inicial.</div>
      <button class="action-button primary" data-practice-topic="reta" type="button">Praticar este assunto</button>
    `
  );

  apply('partes',
    'Entender funções por partes como regras condicionais, escolher corretamente a regra de cada intervalo, interpretar fronteiras e representar situações em texto, fórmula, tabela e gráfico.',
    `
      <div class="hero-box"><span class="card-title">Às vezes uma única fórmula não consegue contar toda a história</span><p>Um estacionamento cobra R$ 12 até 1 hora. Depois disso, cobra mais R$ 5 por hora excedente. A pergunta “quanto custa?” só pode ser respondida depois de outra: <strong>em qual faixa de tempo estamos?</strong></p></div>

      <div class="mbb-contextualizacao"><strong>Regras que mudam de acordo com a situação</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Impostos, contas por faixa, fretes, estacionamentos e ingressos podem mudar de regra quando um limite é atingido.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Programas usam decisões do tipo “se... então... senão...”. Serviços digitais também podem alterar preço, limite ou velocidade conforme a faixa de uso.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> qual regra deve ser usada para esta entrada específica?</div></div>

      <h3>1. Pense primeiro como uma decisão</h3>
      <div class="worked-path"><div class="worked-step"><span>1</span><div><strong>O tempo é de até 1 hora?</strong><p>Use o preço fixo de R$ 12.</p></div></div><div class="worked-step"><span>2</span><div><strong>Passou de 1 hora?</strong><p>Comece com R$ 12 e acrescente R$ 5 por hora excedente.</p></div></div></div>
      <p>A matemática apenas registra essa decisão:</p>
      <p><span class="formula">P(t)=12, se 0&lt;t≤1</span><br><span class="formula">P(t)=12+5(t−1), se t&gt;1</span></p>

      <h3>2. Aprenda a ler a condição</h3>
      <p><span class="math">0&lt;t≤1</span> lê-se: “t é maior que zero e menor ou igual a 1”. O valor 1 pertence à primeira faixa.</p>
      <p><span class="math">t&gt;1</span> significa “t é maior que 1”. A segunda regra começa somente depois da fronteira.</p>
      <div class="note-box"><strong>A condição faz parte da função.</strong><p>Usar a expressão certa no intervalo errado produz uma conta correta para uma situação incorreta.</p></div>

      <h3>3. Por que aparece t−1?</h3>
      <p>Se alguém ficou 3 horas, não queremos cobrar R$ 5 pelas três horas dentro da segunda regra. A primeira hora já está incluída nos R$ 12.</p>
      <p>O excedente é <span class="math">3−1=2</span> horas. Por isso usamos <span class="math">t−1</span>.</p>
      <div class="example-box"><span class="card-title">Para 3 horas</span><div class="mbb-equation-walk"><p><span class="math">P(3)=12+5(3−1)</span></p><p><span class="math">P(3)=12+5·2</span></p><p><span class="math">P(3)=22</span></p></div><div class="mbb-professor-pensa"><strong>O que foi calculado?</strong><p>R$ 12 cobrem a primeira faixa; R$ 10 correspondem às duas horas excedentes.</p></div></div>

      <h3>4. Teste a fronteira: exatamente 1 hora</h3>
      <p>Para <span class="math">t=1</span>, a condição <span class="math">0&lt;t≤1</span> é verdadeira. Portanto usamos a primeira regra e obtemos R$ 12.</p>
      <p>Esse cuidado evita um dos erros mais comuns: tratar o valor de fronteira como se pudesse entrar em qualquer regra.</p>

      <h3>5. Pontos fechados e abertos no gráfico</h3>
      <div class="two-col"><div class="mini-card"><strong>Ponto fechado ●</strong><p>Indica que aquele valor está incluído na regra, como em <span class="math">t≤1</span>.</p></div><div class="mini-card"><strong>Ponto aberto ○</strong><p>Indica que aquele valor não pertence àquela parte, como em <span class="math">t&gt;1</span> no ponto t=1.</p></div></div>
      <p>Quando as duas partes se encontram no mesmo valor, o gráfico pode continuar sem salto. Quando produzem valores diferentes na fronteira, aparece um salto.</p>

      <h3>6. Uma tabela ajuda a enxergar a troca de regra</h3>
      <div class="table-wrap"><table><thead><tr><th>Tempo</th><th>Regra usada</th><th>Preço</th></tr></thead><tbody><tr><td>0,5 h</td><td>até 1 h</td><td>R$ 12</td></tr><tr><td>1 h</td><td>até 1 h</td><td>R$ 12</td></tr><tr><td>2 h</td><td>acima de 1 h</td><td>R$ 17</td></tr><tr><td>4 h</td><td>acima de 1 h</td><td>R$ 27</td></tr></tbody></table></div>

      <h3>7. Na tecnologia e na programação: regras condicionais</h3>
      <div class="example-box"><span class="card-title">Uso de uma API</span><p>Imagine um serviço que permite até 1.000 requisições sem custo adicional e, acima disso, cobra R$ 0,02 por requisição excedente.</p><p>A lógica é exatamente a mesma de um comando condicional: primeiro testamos a faixa; depois executamos a regra correspondente.</p><div class="mbb-professor-pensa"><strong>A matemática e a programação estão modelando a mesma decisão.</strong><p>O intervalo funciona como a condição de um “se”; a expressão é o cálculo executado quando a condição é verdadeira.</p></div></div>

      <h3>8. Exemplo resolvido com duas entradas</h3>
      <div class="example-box"><span class="card-title">Plano: R$ 30 até 10 unidades; depois R$ 2 por excedente</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Para 8 unidades</strong><p>8 está na primeira faixa. Resultado: R$ 30. Não há excedente.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Para 14 unidades</strong><p>14 está acima de 10. Excedente: <span class="math">14−10=4</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule o acréscimo</strong><p><span class="math">4·2=8</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Total</strong><p><span class="math">30+8=38</span>. As duas entradas usam regras diferentes porque pertencem a faixas diferentes.</p></div></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Um plano cobra R$ 20 até 5 GB e R$ 4 por GB excedente. Quanto paga quem usa exatamente 5 GB? E quem usa 8 GB?</h4><div class="mbb-pause-question"><strong>Antes da conta:</strong> resolva o caso da fronteira separadamente.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>5 GB</strong><p>Está dentro da primeira faixa, incluindo o limite. Preço: R$ 20.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>8 GB</strong><p>Excedente: <span class="math">8−5=3 GB</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Acréscimo</strong><p><span class="math">3·4=12</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Total e interpretação</strong><p><span class="math">20+12=32</span>. Quem usa 8 GB paga R$ 32.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Marque primeiro os intervalos e os símbolos &lt;, ≤, &gt; e ≥. Muitas questões de função por partes são erros de escolha de regra, não erros de aritmética.</p></div>
      <div class="ok-box"><strong>Essência:</strong> numa função por partes, a primeira pergunta não é “qual conta faço?”, mas <strong>“qual regra vale para esta entrada?”</strong>.</div>
      <button class="action-button primary" data-practice-topic="partes" type="button">Praticar este assunto</button>
    `
  );
})();
