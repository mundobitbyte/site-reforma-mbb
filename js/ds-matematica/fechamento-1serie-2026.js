(() => {
  'use strict';

  if (!Array.isArray(window.DS_MATH_LESSONS) || window.DSMathFirstSeries2026Ready) return;
  window.DSMathFirstSeries2026Ready = true;

  const lessons = window.DS_MATH_LESSONS;
  const get = (id) => lessons.find((lesson) => lesson.id === id);
  const choice = (label, prompt, options, correct, correctText, wrongText) => `
    <div class="quick-question" data-choice-question data-correct="${correct}">
      <strong>${label}</strong>
      <p>${prompt}</p>
      <div class="choice-row">${options.map(([key, text]) => `<button type="button" data-choice="${key}">${text}</button>`).join('')}</div>
      <div class="choice-feedback" data-choice-feedback data-correct-text="${correctText}" data-wrong-text="${wrongText}"></div>
    </div>`;

  const beforePractice = (lesson, topic, html) => {
    if (!lesson || typeof lesson.content !== 'string') return false;
    const marker = `<button class="action-button primary" data-practice-topic="${topic}" type="button">`;
    if (!lesson.content.includes(marker)) return false;
    lesson.content = lesson.content.replace(marker, `${html}${marker}`);
    return true;
  };

  const addLesson = (lesson) => {
    if (get(lesson.id)) return;
    lessons.push(lesson);
  };

  addLesson({
    id: 'conjuntos',
    unit: 'Números e Álgebra',
    order: 2.5,
    menu: '02A Conjuntos Numéricos',
    title: 'Conjuntos Numéricos',
    technical: 'Naturais, inteiros, racionais, irracionais e reais',
    objective: 'Reconhecer a que conjuntos um número pertence, comparar diferentes representações e escolher a forma mais adequada para cada situação.',
    content: `
      <div class="hero-box"><span class="card-title">O mesmo número pode pertencer a mais de um conjunto</span><p>O número 5 pode representar cinco arquivos, uma posição numa lista ou uma medida. Ele é natural, inteiro, racional e real ao mesmo tempo. Os conjuntos numéricos organizam essas possibilidades e ajudam a saber que operações e representações fazem sentido.</p></div>
      <div class="mbb-contextualizacao"><strong>Por que isso importa?</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Contagens usam naturais; saldos negativos exigem inteiros; medições frequentemente usam racionais ou irracionais.</p></div><div class="mbb-context-card"><strong>Em sistemas</strong><p>Um programa precisa distinguir contadores, valores com casas decimais, limites e resultados aproximados. A Matemática vem antes do tipo de dado escolhido na linguagem.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> que tipo de número é necessário para representar esta situação sem perder informação?</div></div>
      <h3>1. Uma inclusão que organiza os conjuntos</h3>
      <p><span class="formula">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</span></p>
      <div class="four-col"><div class="mini-card"><strong>ℕ — naturais</strong><p>0, 1, 2, 3... úteis para contagem.</p></div><div class="mini-card"><strong>ℤ — inteiros</strong><p>..., −2, −1, 0, 1, 2... incluem negativos.</p></div><div class="mini-card"><strong>ℚ — racionais</strong><p>Podem ser escritos como a/b, com a e b inteiros e b≠0. Decimais finitos e dízimas periódicas são racionais.</p></div><div class="mini-card"><strong>ℝ — reais</strong><p>Reúnem racionais e irracionais e representam os pontos da reta real.</p></div></div>
      <h3>2. Irracional não significa “sem lógica”</h3>
      <p>Números como <span class="math">√2</span> e <span class="math">π</span> não podem ser escritos como uma fração de inteiros. Seus decimais são infinitos e não periódicos. Eles continuam sendo números reais e aparecem naturalmente em geometria e medidas.</p>
      <div class="note-box"><strong>Uma escrita decimal pode esconder a natureza do número.</strong><p>0,5 = 1/2 é racional. Já 1,414213... usado como aproximação de √2 é apenas uma aproximação decimal de um número irracional.</p></div>
      <h3>3. O contexto também limita valores</h3>
      <p>Uma fórmula pode aceitar qualquer número real e ainda assim uma situação concreta permitir somente parte deles. Quantidade de alunos não pode ser −3 ou 2,7; tempo decorrido pode ser modelado apenas para valores não negativos; uma porcentagem pode ultrapassar 100% em alguns contextos.</p>
      ${choice('Confira — classificação', 'Qual afirmação sobre o número −3 é correta?', [['a','Pertence a ℕ, ℤ, ℚ e ℝ'],['b','Pertence a ℤ, ℚ e ℝ, mas não a ℕ no uso adotado aqui'],['c','É irracional']], 'b', 'Correto. −3 é inteiro e pode ser escrito como −3/1, portanto também é racional e real.', 'Comece pelo conjunto mais específico: números inteiros incluem negativos.')}
      ${choice('Confira — racionalidade', 'Qual número é irracional?', [['a','0,125'],['b','7/9'],['c','√2']], 'c', 'Correto. √2 não pode ser escrito como razão de dois inteiros.', 'Decimais finitos e frações de inteiros são racionais.')}
      <div class="ok-box"><strong>Essência:</strong> conjuntos numéricos não são caixas isoladas. Eles formam uma organização inclusiva que ajuda a representar situações com precisão.</div>
    `
  });

  addLesson({
    id: 'funcoes-especiais',
    unit: 'Números e Álgebra',
    order: 9.5,
    menu: '09A Composição, Inversa e Módulo',
    title: 'Composição, Função Inversa e Módulo',
    technical: 'Funções compostas, inversas e função modular',
    objective: 'Compreender como funções podem ser encadeadas, quando uma transformação pode ser desfeita e como o módulo representa distância e diferença sem sinal.',
    content: `
      <div class="hero-box"><span class="card-title">Um resultado pode virar a entrada do passo seguinte</span><p>Um sistema recebe um preço em dólar, converte para reais e depois acrescenta uma taxa. São duas regras aplicadas em sequência. Em Matemática, esse encadeamento é uma composição de funções.</p></div>
      <h3>1. Compor funções é encadear regras</h3>
      <p>Se <span class="math">f(x)=5x</span> converte uma quantidade usando uma taxa didática de 5 e <span class="math">g(y)=y+12</span> acrescenta uma tarifa fixa, então:</p>
      <p><span class="formula">(g∘f)(x)=g(f(x))=5x+12</span></p>
      <p>A ordem importa. Primeiro calculamos a função que está mais próxima de x; o resultado vira entrada da outra.</p>
      <div class="example-box"><span class="card-title">Para x=20</span><p><span class="math">f(20)=100</span> e depois <span class="math">g(100)=112</span>. Logo, <span class="math">(g∘f)(20)=112</span>.</p></div>
      <h3>2. Função inversa desfaz uma transformação — quando isso é possível</h3>
      <p>Se <span class="math">f(x)=3x+6</span>, podemos isolar a entrada a partir da saída:</p>
      <p><span class="formula">f⁻¹(y)=(y−6)/3</span></p>
      <p>Aplicar f e depois f⁻¹ devolve o valor inicial. Mas nem toda função possui inversa em todo o seu domínio: é preciso que saídas diferentes não venham de entradas diferentes, ou então restringir adequadamente o domínio.</p>
      <div class="note-box"><strong>f⁻¹ não significa 1/f.</strong><p>O expoente −1 no nome da função indica inversão da correspondência, não o recíproco do valor.</p></div>
      <h3>3. Módulo mede distância até zero</h3>
      <p><span class="math">|5|=5</span> e <span class="math">|−5|=5</span>. O módulo retira o sinal porque representa a distância até zero na reta numérica.</p>
      <div class="two-col"><div class="mini-card"><strong>Diferença com sinal</strong><p>−4 pode indicar que um valor ficou 4 unidades abaixo de uma referência.</p></div><div class="mini-card"><strong>Erro absoluto</strong><p><span class="math">|medido−referência|</span> informa o tamanho da diferença, independentemente do lado.</p></div></div>
      <p>A função <span class="math">f(x)=|x|</span> tem gráfico em formato de V: para x≥0, vale x; para x&lt;0, vale −x.</p>
      ${choice('Confira — composição', 'Se f(x)=2x e g(x)=x+3, quanto vale (g∘f)(4)?', [['a','11'],['b','14'],['c','16']], 'a', 'Correto. f(4)=8 e g(8)=11.', 'Faça o encadeamento na ordem: primeiro f, depois g.')}
      ${choice('Confira — inversa', 'Qual regra desfaz f(x)=x+7?', [['a','f⁻¹(x)=x−7'],['b','f⁻¹(x)=1/(x+7)'],['c','f⁻¹(x)=x+14']], 'a', 'Correto. Subtrair 7 desfaz o acréscimo de 7.', 'Pergunte qual operação recupera a entrada original.')}
      ${choice('Confira — módulo', 'Qual é |−12|?', [['a','−12'],['b','0'],['c','12']], 'c', 'Correto. O módulo representa a distância até zero.', 'Distância não é negativa.')}
      <div class="ok-box"><strong>Essência:</strong> composição encadeia, inversa desfaz e módulo mede distância. São três maneiras de pensar relações entre entradas e saídas.</div>
    `
  });

  addLesson({
    id: 'exponencial-pg',
    unit: 'Números e Álgebra',
    order: 10.5,
    menu: '10A Função Exponencial e PG',
    title: 'Função Exponencial e Progressão Geométrica',
    technical: 'Crescimento multiplicativo, função exponencial e PG',
    objective: 'Reconhecer padrões multiplicativos, modelá-los por progressões geométricas e funções exponenciais e comparar esse crescimento com o crescimento linear.',
    content: `
      <div class="hero-box"><span class="card-title">Somar sempre a mesma coisa ou multiplicar sempre pelo mesmo fator?</span><p>Uma economia que aumenta R$ 50 por mês cresce de modo aditivo. Uma quantidade que aumenta 5% a cada período cresce multiplicando o valor anterior por 1,05. As duas podem crescer, mas a estrutura matemática é diferente.</p></div>
      <div class="mbb-contextualizacao"><strong>Duas histórias de crescimento</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>Linear</strong><p>100, 150, 200, 250... A diferença é sempre +50.</p></div><div class="mbb-context-card"><strong>Multiplicativo</strong><p>100, 150, 225, 337,5... Cada termo é o anterior multiplicado por 1,5.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> o que permanece constante — a diferença ou a razão?</div></div>
      <h3>1. Progressão Geométrica: razão constante</h3>
      <p>Em uma PG, cada termo é obtido multiplicando o anterior por uma constante <span class="math">q</span>, chamada razão.</p>
      <p><span class="formula">aₙ=a₁·qⁿ⁻¹</span></p>
      <div class="example-box"><span class="card-title">2, 6, 18, 54...</span><p>A razão é <span class="math">q=3</span>. O 5º termo é <span class="math">a₅=2·3⁴=162</span>.</p></div>
      <h3>2. Função exponencial: a variável aparece no expoente</h3>
      <p>Uma forma básica é <span class="math">f(x)=a·bˣ</span>, com <span class="math">b&gt;0</span> e <span class="math">b≠1</span>. Se b&gt;1, há crescimento exponencial; se 0&lt;b&lt;1, há decaimento.</p>
      <p>Uma PG pode ser vista como valores discretos de um comportamento exponencial: o índice do termo faz o papel de etapas inteiras.</p>
      <h3>3. Juros simples e compostos mostram a diferença</h3>
      <div class="table-wrap"><table><thead><tr><th>Período</th><th>Simples: R$ 1.000 a 10% a.p.</th><th>Compostos: R$ 1.000 a 10% a.p.</th></tr></thead><tbody><tr><td>0</td><td>1.000</td><td>1.000</td></tr><tr><td>1</td><td>1.100</td><td>1.100</td></tr><tr><td>2</td><td>1.200</td><td>1.210</td></tr><tr><td>3</td><td>1.300</td><td>1.331</td></tr><tr><td>4</td><td>1.400</td><td>1.464,10</td></tr></tbody></table></div>
      <div class="visual-box"><span class="card-title">Linear x exponencial</span><svg class="math-graph" viewBox="0 0 560 280" role="img" aria-label="Comparação esquemática entre crescimento linear, representado por uma reta, e crescimento exponencial, representado por uma curva crescente que se afasta da reta ao longo do tempo."><line class="graph-axis" x1="55" y1="235" x2="520" y2="235"/><line class="graph-axis" x1="55" y1="235" x2="55" y2="25"/><polyline class="graph-alt" points="70,220 170,180 270,140 370,100 470,60"/><path d="M70 220 C180 205 270 178 335 135 C395 95 440 55 490 30" fill="none" class="graph-line"/><text x="385" y="92" font-size="13">linear</text><text x="405" y="45" font-size="13">exponencial</text></svg><p>O desenho é qualitativo. A reta adiciona aproximadamente a mesma quantidade por etapa; a curva exponencial multiplica pelo mesmo fator.</p></div>
      <h3>4. Em uma planilha, compare os dois modelos</h3>
      <p>Crie uma coluna de períodos. Para juros simples, use uma fórmula baseada no capital inicial; para compostos, faça cada saldo receber o fator <span class="math">1+i</span>. Gere um gráfico e observe quando as curvas começam a se afastar.</p>
      ${choice('Confira — PA ou PG', 'Qual sequência é uma PG?', [['a','4, 7, 10, 13'],['b','5, 10, 20, 40'],['c','2, 4, 7, 11']], 'b', 'Correto. Cada termo é o anterior multiplicado por 2.', 'Em uma PG, procure uma razão multiplicativa constante.')}
      ${choice('Confira — exponencial', 'Uma população-modelo é multiplicada por 1,2 a cada etapa. Qual expressão representa o valor após t etapas, partindo de P₀?', [['a','P=P₀+1,2t'],['b','P=P₀·1,2ᵗ'],['c','P=P₀/t']], 'b', 'Correto. Repetir o mesmo fator multiplicativo gera potência.', 'Cada etapa multiplica pelo mesmo fator; repetições de multiplicação viram expoentes.')}
      ${choice('Confira — juros', 'Qual crescimento é exponencial no modelo escolar?', [['a','Juros simples com acréscimo fixo por período'],['b','Juros compostos com taxa fixa por período'],['c','Uma sequência que soma sempre 20']], 'b', 'Correto. Nos compostos, cada novo saldo vira a base do período seguinte.', 'Crescimento exponencial está associado a multiplicação sucessiva por um fator.')}
      <div class="ok-box"><strong>Essência:</strong> diferença constante leva à linguagem linear/PA; razão constante leva à linguagem multiplicativa/PG e, em muitos contextos, à função exponencial.</div>
    `
  });

  addLesson({
    id: 'medidas-precisao',
    unit: 'Geometria e Medidas',
    order: 13.2,
    menu: '13A Medidas, Bases e Precisão',
    title: 'Medidas, Sistemas de Numeração e Precisão',
    technical: 'SI, bases decimal/binária/sexagesimal, notação científica e erro de medida',
    objective: 'Representar e converter medidas com unidades adequadas, compreender sistemas de numeração e comunicar resultados com precisão compatível com a medição.',
    content: `
      <div class="hero-box"><span class="card-title">Um número sem unidade ou com precisão falsa pode enganar</span><p>Dizer que uma mesa mede “1,8” não basta. Dizer que uma régua simples mediu 1,823746 m também cria uma precisão que o instrumento provavelmente não oferece. Medir é informar valor, unidade e limite de precisão.</p></div>
      <h3>1. O Sistema Internacional organiza unidades</h3>
      <div class="three-col"><div class="mini-card"><strong>Comprimento</strong><p>metro (m) e seus múltiplos/submúltiplos.</p></div><div class="mini-card"><strong>Massa</strong><p>quilograma (kg) é a unidade de base do SI para massa.</p></div><div class="mini-card"><strong>Tempo</strong><p>segundo (s); no cotidiano também usamos minutos e horas.</p></div></div>
      <p>Conversões devem respeitar a grandeza. Em área, o fator é elevado ao quadrado; em volume, ao cubo. Assim, <span class="math">1 m²=10.000 cm²</span> e <span class="math">1 m³=1.000 L</span>.</p>
      <h3>2. Bases de numeração mudam a forma de escrever o valor</h3>
      <div class="three-col"><div class="mini-card"><strong>Decimal — base 10</strong><p>Usa os algarismos 0 a 9 e potências de 10.</p></div><div class="mini-card"><strong>Binário — base 2</strong><p>Usa 0 e 1. Exemplo: <span class="math">1010₂=10₁₀</span>.</p></div><div class="mini-card"><strong>Sexagesimal — base 60</strong><p>Aparece em tempo e ângulos: 1 h = 60 min; 1° = 60′.</p></div></div>
      <div class="note-box"><strong>Base é representação, não valor.</strong><p><span class="math">1010₂</span> e <span class="math">10₁₀</span> representam a mesma quantidade em sistemas diferentes.</p></div>
      <h3>3. Notação científica facilita números muito grandes ou pequenos</h3>
      <p><span class="formula">a·10ⁿ, com 1≤|a|&lt;10</span></p>
      <p>Por exemplo, <span class="math">3.200.000 = 3,2·10⁶</span> e <span class="math">0,000045 = 4,5·10⁻⁵</span>.</p>
      <h3>4. Algarismos significativos comunicam a precisão disponível</h3>
      <p>Uma medida de 12,3 cm comunica uma resolução diferente de 12,300 cm. Em contexto experimental, zeros e casas decimais podem carregar informação sobre a precisão do processo de medida.</p>
      <p>Toda medição possui incerteza. Uma forma simples de expressar diferença em relação a uma referência é o <strong>erro absoluto</strong> <span class="math">|medido−referência|</span>; o erro relativo compara essa diferença com a referência.</p>
      <div class="note-box"><strong>Arredondar no momento certo.</strong><p>Em cálculos encadeados, mantenha precisão suficiente durante as etapas e arredonde o resultado final de modo compatível com os dados e o objetivo.</p></div>
      ${choice('Confira — binário', 'Quanto vale 1011₂ no sistema decimal?', [['a','9'],['b','11'],['c','13']], 'b', 'Correto. 1·8 + 0·4 + 1·2 + 1·1 = 11.', 'Leia as posições como potências de 2: 8, 4, 2 e 1.')}
      ${choice('Confira — notação científica', 'Qual é a notação científica de 0,00072?', [['a','7,2·10⁻⁴'],['b','72·10⁻⁴'],['c','7,2·10⁴']], 'a', 'Correto. A vírgula foi deslocada quatro casas para a direita, por isso o expoente é −4.', 'O coeficiente deve ficar com módulo entre 1 e 10.')}
      ${choice('Confira — área', 'Se 1 m = 100 cm, quanto vale 1 m²?', [['a','100 cm²'],['b','1.000 cm²'],['c','10.000 cm²']], 'c', 'Correto. (100 cm)² = 10.000 cm².', 'Em área, o fator de conversão também é elevado ao quadrado.')}
      <div class="ok-box"><strong>Essência:</strong> medir bem é usar a unidade certa, a representação certa e uma quantidade de algarismos compatível com aquilo que realmente foi observado.</div>
    `
  });

  addLesson({
    id: 'semelhanca-transformacoes',
    unit: 'Geometria e Medidas',
    order: 13.4,
    menu: '13B Semelhança e Transformações',
    title: 'Semelhança e Transformações Geométricas',
    technical: 'Tales, bissetriz, isometrias, homotetia e fractais',
    objective: 'Usar proporcionalidade em figuras semelhantes, reconhecer transformações que preservam ou alteram escala e analisar padrões geométricos em situações reais e digitais.',
    content: `
      <div class="hero-box"><span class="card-title">Como ampliar um desenho sem deformá-lo?</span><p>Um ícone pode mudar de tamanho e continuar com a mesma forma. Uma planta pode representar um ambiente real em escala. Sombras podem permitir estimar alturas. Todas essas situações usam proporcionalidade geométrica.</p></div>
      <h3>1. Teorema de Tales: paralelas criam segmentos proporcionais</h3>
      <p>Quando retas paralelas cortam duas transversais, os segmentos correspondentes são proporcionais. Se numa transversal aparecem segmentos 3 e 6 e, na outra, 4 e x, então:</p>
      <p><span class="formula">3/6 = 4/x → x=8</span></p>
      <div class="note-box"><strong>Não basta enxergar linhas.</strong><p>A proporcionalidade de Tales depende da condição de paralelismo. Sem ela, a conclusão não é garantida.</p></div>
      <h3>2. Bissetriz interna também produz uma proporção</h3>
      <p>Num triângulo, a bissetriz de um ângulo divide o lado oposto em segmentos proporcionais aos lados adjacentes. Se os lados ao redor do ângulo medem 6 e 9, os segmentos opostos ficam na razão <span class="math">6:9=2:3</span>.</p>
      <h3>3. Isometrias mudam posição, mas preservam distâncias</h3>
      <div class="three-col"><div class="mini-card"><strong>Translação</strong><p>Desloca todos os pontos pela mesma direção e distância.</p></div><div class="mini-card"><strong>Rotação</strong><p>Gira a figura em torno de um centro por determinado ângulo.</p></div><div class="mini-card"><strong>Reflexão</strong><p>Produz a imagem espelhada em relação a uma reta.</p></div></div>
      <p>Essas transformações preservam comprimentos e ângulos: a figura muda de posição ou orientação, mas não de tamanho.</p>
      <h3>4. Homotetia altera a escala sem alterar a forma</h3>
      <p>Com fator <span class="math">k</span>, comprimentos são multiplicados por |k|, áreas por <span class="math">k²</span> e volumes por <span class="math">|k|³</span>. Uma ampliação com k=2 dobra os comprimentos e quadruplica as áreas.</p>
      <h3>5. Fractais repetem estrutura em diferentes escalas</h3>
      <p>Fractais matemáticos são construídos por regras iterativas que produzem padrões com auto-semelhança. Eles ajudam a estudar repetição, escala e complexidade; padrões naturais podem apresentar características fractais aproximadas sem serem cópias perfeitas de um fractal ideal.</p>
      <h3>6. Medidas entram em decisões reais</h3>
      <div class="example-box"><span class="card-title">Planejando uma pequena horta escolar</span><p>Para cercar um canteiro, calcule perímetro. Para estimar a quantidade de cobertura do solo, use área. Para um reservatório, relacione volume e capacidade. Para transportar material, massa também importa. A escolha da grandeza depende da decisão.</p></div>
      ${choice('Confira — Tales', 'Em duas transversais cortadas pelas mesmas paralelas, 2/5 = 6/x. Qual é x?', [['a','12'],['b','15'],['c','30']], 'b', 'Correto. 2x=30, portanto x=15.', 'Monte a proporção mantendo segmentos correspondentes na mesma ordem.')}
      ${choice('Confira — isometria', 'Qual transformação preserva comprimentos e apenas gira uma figura?', [['a','Rotação'],['b','Homotetia de fator 2'],['c','Ampliação percentual']], 'a', 'Correto. Rotação é uma isometria.', 'Homotetia altera a escala quando |k|≠1.')}
      ${choice('Confira — escala', 'Uma figura sofre homotetia de fator 3. Por qual fator sua área é multiplicada?', [['a','3'],['b','6'],['c','9']], 'c', 'Correto. Áreas variam com o quadrado da escala: 3²=9.', 'Comprimento acompanha k; área acompanha k².')}
      <div class="ok-box"><strong>Essência:</strong> proporcionalidade explica semelhança; isometrias preservam tamanho; homotetia controla escala; fractais exploram repetição em diferentes escalas.</div>
    `
  });

  const porcentagem = get('porcentagem');
  beforePractice(porcentagem, 'porcentagem', `
    <h3>12. Compare no gráfico: simples cresce linearmente, composto cresce exponencialmente</h3>
    <p>Com taxa e capital inicial fixos, o modelo de juros simples adiciona a mesma parcela a cada período; por isso seus pontos ficam sobre uma reta. Nos juros compostos, o saldo é multiplicado pelo mesmo fator a cada período; por isso o comportamento é exponencial.</p>
    <div class="note-box"><strong>Ponte para Função Exponencial e PG</strong><p>Quando chegar ao tópico 10A, você verá que <span class="math">M=C(1+i)^t</span> é um caso direto de função exponencial e que os saldos por período formam uma PG.</p></div>
  `);

  const grandezas = get('grandezas');
  beforePractice(grandezas, 'grandezas', `
    <h3>Armazenamento e transmissão: b e B não são a mesma coisa</h3>
    <div class="two-col"><div class="mini-card"><strong>bit — b</strong><p>Unidade binária de informação. Taxas de rede aparecem frequentemente em kbps, Mbps ou Gbps.</p></div><div class="mini-card"><strong>byte — B</strong><p>Conjunto de 8 bits. Tamanhos de arquivos e armazenamento aparecem frequentemente em kB, MB, GB e também em unidades binárias como KiB, MiB e GiB.</p></div></div>
    <p>Um link de <span class="math">80 Mbps</span> representa 80 megabits por segundo, não 80 megabytes por segundo. Ignorando protocolos e outras perdas, dividir por 8 fornece um limite teórico de aproximadamente <span class="math">10 MB/s</span>.</p>
    <div class="note-box"><strong>Prefixos precisam de contexto.</strong><p>No SI, k, M e G são potências de 1000. Para potências de 1024 existem prefixos binários específicos, como Ki, Mi e Gi. Softwares e fabricantes podem exibir convenções diferentes; leia a unidade explicitamente.</p></div>
  `);

  const dados = get('dados');
  beforePractice(dados, 'dados', `
    <h3>Medidas de tendência central: três maneiras de procurar um valor representativo</h3>
    <div class="three-col"><div class="mini-card"><strong>Média</strong><p>Some os valores e divida pela quantidade. É sensível a valores muito distantes dos demais.</p></div><div class="mini-card"><strong>Mediana</strong><p>Ordene os dados e encontre o valor central; com quantidade par, use a média dos dois centrais.</p></div><div class="mini-card"><strong>Moda</strong><p>Valor ou categoria mais frequente. Pode haver mais de uma moda ou nenhuma.</p></div></div>
    <div class="example-box"><span class="card-title">2, 2, 3, 3, 10</span><p>Média = 4; mediana = 3; modas = 2 e 3. O 10 puxa a média para cima, enquanto a mediana permanece no centro da lista ordenada.</p></div>
    <h3>Dispersão: dois conjuntos podem ter a mesma média e comportamentos diferentes</h3>
    <div class="three-col"><div class="mini-card"><strong>Amplitude</strong><p>máximo − mínimo. No exemplo: 10−2=8.</p></div><div class="mini-card"><strong>Variância</strong><p>Mede a média dos quadrados dos desvios em relação à média. Tratando os cinco valores como a população do exemplo: σ²=9,2.</p></div><div class="mini-card"><strong>Desvio padrão</strong><p>É a raiz da variância e volta à unidade original: σ≈3,03.</p></div></div>
    <p><span class="formula">σ² = Σ(xᵢ−μ)² / n &nbsp;&nbsp; e &nbsp;&nbsp; σ = √σ²</span></p>
    <div class="note-box"><strong>População e amostra usam convenções diferentes.</strong><p>A fórmula acima trata o conjunto apresentado como população. Em inferência a partir de uma amostra, é comum usar uma correção com <span class="math">n−1</span>. Sempre identifique qual situação está sendo analisada.</p></div>
    <h3>Um gráfico também pode induzir ao erro</h3>
    <p>Eixo truncado, intervalos desiguais tratados como iguais, amostra enviesada, ausência de fonte e seleção de apenas parte do período podem exagerar ou esconder diferenças. Antes de concluir, confira <strong>fonte, amostra, escala, unidade e período</strong>.</p>
    ${choice('Confira — mediana', 'Qual é a mediana dos valores 1, 3, 4, 8, 20?', [['a','3'],['b','4'],['c','7,2']], 'b', 'Correto. Com cinco valores ordenados, o terceiro é o centro.', 'A mediana é o valor central da lista ordenada.')}
    ${choice('Confira — dispersão', 'Dois conjuntos têm a mesma média. O que um desvio padrão maior indica?', [['a','Valores mais espalhados em torno da média'],['b','Média obrigatoriamente maior'],['c','Amostra necessariamente inválida']], 'a', 'Correto. Desvio padrão maior indica maior dispersão em torno da média.', 'Desvio padrão descreve espalhamento, não o tamanho da média.')}
  `);

  const exercicios = get('exercicios');
  if (exercicios && typeof exercicios.content === 'string' && !exercicios.content.includes('data-math-2026-closure')) {
    exercicios.content = exercicios.content.replace('<div id="exerciseEngine"', `
      <section data-math-2026-closure>
        <h3>Fechamento curricular da 1ª série</h3>
        <p>Antes dos exercícios gerados, confira os conteúdos que completam o percurso da série no Plano 1064.</p>
        ${choice('1. Conjuntos', 'Qual número é racional?', [['a','√2'],['b','π'],['c','0,75']], 'c', 'Correto. 0,75=3/4.', 'Um racional pode ser escrito como fração de inteiros.')}
        ${choice('2. Função modular', 'Quanto vale |−7−2|?', [['a','−9'],['b','5'],['c','9']], 'c', 'Correto. |−9|=9.', 'Resolva primeiro o interior do módulo e depois tome a distância até zero.')}
        ${choice('3. PG', 'Numa PG com a₁=3 e q=2, qual é a₄?', [['a','12'],['b','24'],['c','48']], 'b', 'Correto. 3, 6, 12, 24.', 'Multiplique sucessivamente pela razão 2.')}
        ${choice('4. Exponencial', 'Qual expressão representa duplicação a cada etapa a partir de 5?', [['a','5+2t'],['b','5·2ᵗ'],['c','2·5ᵗ']], 'b', 'Correto. O fator 2 é repetido t vezes.', 'Duplicação repetida é multiplicativa, portanto aparece como potência.')}
        ${choice('5. Precisão', 'Qual escrita está em notação científica normalizada?', [['a','45·10³'],['b','4,5·10⁴'],['c','0,45·10⁵']], 'b', 'Correto. O coeficiente deve ter módulo entre 1 e 10.', 'Normalize o coeficiente e ajuste a potência de 10.')}
        ${choice('6. Homotetia', 'Uma ampliação de fator 2 multiplica uma área por:', [['a','2'],['b','4'],['c','8']], 'b', 'Correto. Área varia com o quadrado do fator linear.', 'Para áreas, use k².')}
        ${choice('7. Mediana', 'Qual é a mediana de 2, 5, 8, 9?', [['a','5'],['b','6,5'],['c','8']], 'b', 'Correto. Com quatro valores, faça a média dos dois centrais: (5+8)/2=6,5.', 'Quantidade par: use os dois valores centrais.')}
        ${choice('8. Leitura crítica', 'Qual prática torna um gráfico potencialmente enganoso?', [['a','Informar fonte e unidade'],['b','Usar eixo vertical truncado sem deixar isso claro'],['c','Indicar o período analisado']], 'b', 'Correto. Um eixo truncado pode amplificar visualmente diferenças pequenas.', 'Transparência de fonte, unidade e período melhora a leitura; ocultar escala pode distorcer.')}
        <div class="task-box"><h4>Desafio integrador — do dado à decisão</h4><p>Uma escola quer instalar painéis solares e comparar duas propostas. Uma fornece medidas de área e potência; outra apresenta economia mensal crescente em porcentagem e um gráfico sem escala clara. Descreva que conceitos matemáticos você usaria para: verificar unidades e precisão, comparar áreas e potências, interpretar o crescimento, avaliar o gráfico e justificar a escolha.</p><details class="solution"><summary>Critérios para conferir</summary><p>Uma boa resposta menciona conversão/unidades e precisão; área e grandezas compostas; porcentagem e identificação de crescimento linear ou exponencial; leitura crítica de escala/fonte; comparação com dados equivalentes e justificativa baseada em evidências.</p></details></div>
      </section>
      <div id="exerciseEngine"`);
  }
})();
