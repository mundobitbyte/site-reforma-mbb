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

  // 11 — Tangente: reconstrução completa, do uso real à notação e ao arco-tangente.
  {
    const l = get('tangente');
    if (l) {
      l.objective = 'Você vai entender por que medimos inclinações, como a razão entre subida e avanço se transforma em tangente e como usar a operação inversa para descobrir um ângulo.';
      l.content = `
        <div class="hero-box">
          <span class="card-title">Por que alguém precisa medir uma inclinação?</span>
          <p>Rampas, ruas, telhados, escadas, terrenos e tubulações podem subir ou descer enquanto avançam. Medir essa inclinação ajuda a comparar projetos, desenhar peças, definir encaixes, representar uma direção em um projeto e verificar se uma subida está suave ou íngreme.</p>
        </div>

        <h3>1. Antes do ângulo: quanto sobe enquanto avança?</h3>
        <p>Imagine uma rampa vista de lado. Ela avança <strong>5 m na horizontal</strong> e, nesse percurso, ganha <strong>1 m de altura</strong>.</p>
        <div class="note-box">
          <strong>Avanço horizontal não é o comprimento da rampa.</strong>
          <p>É a distância medida para a frente, como se olhássemos a projeção da rampa no chão. O comprimento inclinado da própria rampa é outra medida.</p>
        </div>
        <div class="example-box">
          <span class="card-title">A primeira medida de inclinação</span>
          <p><span class="math">subida/avanço = 1/5 = 0,2</span>.</p>
          <p>O resultado 0,2 significa que, para cada 1 m de avanço horizontal, a rampa sobe 0,2 m, isto é, 20 cm.</p>
          <p>Como porcentagem, essa mesma inclinação é <strong>20%</strong>.</p>
        </div>

        <h3>2. Onde aparece o triângulo?</h3>
        <p>Quando desenhamos a rampa de lado, a subida vertical, o avanço horizontal e a própria rampa formam um <strong>triângulo retângulo</strong>, que possui um ângulo de 90°.</p>
        <div class="visual-box">
          <svg class="math-graph" viewBox="0 0 560 250" role="img" aria-label="Rampa formando um triângulo retângulo com avanço horizontal e subida vertical">
            <line class="graph-axis" x1="70" y1="205" x2="480" y2="205"/>
            <line class="graph-axis" x1="480" y1="205" x2="480" y2="70"/>
            <line class="graph-line" x1="70" y1="205" x2="480" y2="70"/>
            <text class="graph-text" x="260" y="230">avanço horizontal</text>
            <text class="graph-text" x="488" y="140">subida</text>
            <text class="graph-text" x="105" y="195">θ</text>
            <text class="graph-text" x="300" y="125">rampa</text>
          </svg>
          <p>O símbolo <span class="math">θ</span> é a letra grega theta. Aqui ele representa o ângulo entre a rampa e a horizontal.</p>
        </div>

        <h3>3. Cateto oposto e cateto adjacente</h3>
        <p>Os dois lados que formam o ângulo de 90° são chamados de <strong>catetos</strong>. Seus nomes “oposto” e “adjacente” dependem do ângulo que estamos observando.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Cateto oposto</strong><p>É o cateto que fica de frente para o ângulo <span class="math">θ</span>. Na rampa, corresponde à <strong>subida</strong>.</p></div>
          <div class="mini-card"><strong>Cateto adjacente</strong><p>É o cateto que fica junto ao ângulo <span class="math">θ</span>. Na rampa, corresponde ao <strong>avanço horizontal</strong>.</p></div>
        </div>
        <p>Portanto, nesta situação:</p>
        <p><span class="formula">subida/avanço = cateto oposto/cateto adjacente</span></p>

        <h3>4. Essa razão recebe o nome de tangente</h3>
        <p>A trigonometria dá um nome para essa comparação entre os dois catetos:</p>
        <p><span class="formula">tan(θ)=cateto oposto/cateto adjacente</span></p>
        <p>Na rampa, isso equivale a <span class="math">tan(θ)=subida/avanço horizontal</span>. A fórmula não criou uma nova conta: apenas deu um nome matemático à relação que já calculamos.</p>

        <h3>5. Por que um mesmo ângulo sempre tem a mesma tangente?</h3>
        <p>Imagine duas rampas com o mesmo ângulo, mas uma pequena e outra grande. Seus triângulos têm a mesma forma e diferem apenas de tamanho. Esses triângulos são <strong>semelhantes</strong>.</p>
        <p>Quando todas as medidas de um triângulo aumentam na mesma proporção, a divisão <span class="math">subida/avanço</span> não muda. Por isso cada ângulo corresponde a uma razão bem definida.</p>
        <div class="example-box">
          <span class="card-title">Exemplo com 45°</span>
          <p>Num triângulo retângulo de 45°, os dois catetos têm o mesmo tamanho. Se avanço 1 m, subo 1 m.</p>
          <p><span class="math">tan(45°)=1/1=1</span>.</p>
        </div>

        <h3>6. De onde surgem √3 e 1/√3?</h3>
        <p>Os valores de 30° e 60° podem ser obtidos a partir de um triângulo equilátero, que tem três lados iguais e três ângulos de 60°.</p>
        <p>Considere um triângulo equilátero de lado 2. Ao dividi-lo ao meio, a base fica com 1 e formamos um triângulo retângulo cuja hipotenusa mede 2. Pelo Teorema de Pitágoras:</p>
        <p><span class="math">altura² + 1² = 2²</span></p>
        <p><span class="math">altura² = 3</span>, portanto <span class="math">altura=√3</span>.</p>
        <p>Esse triângulo tem lados na proporção <strong>1 : √3 : 2</strong> e ângulos de 30°, 60° e 90°.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Para 30°</strong><p>Oposto = 1 e adjacente = √3. Então <span class="math">tan(30°)=1/√3≈0,577</span>.</p></div>
          <div class="mini-card"><strong>Para 60°</strong><p>Oposto = √3 e adjacente = 1. Então <span class="math">tan(60°)=√3≈1,732</span>.</p></div>
        </div>
        <div class="note-box"><strong>O triângulo é o mesmo; muda o ângulo de referência.</strong><p>Por isso os lados que chamamos de oposto e adjacente trocam de papel entre 30° e 60°.</p></div>

        <h3>7. O que acontece em 90°?</h3>
        <p>Uma direção de 90° é vertical. Ela pode subir, mas seu avanço horizontal é zero.</p>
        <p>A tangente exigiria uma divisão do tipo <span class="math">subida/0</span>. Como divisão por zero não é definida, <strong>tan(90°) não possui valor definido</strong>.</p>
        <p>Quanto mais o ângulo se aproxima de 90°, menor fica o avanço horizontal em relação à subida e maior fica o valor da tangente.</p>

        <h3>8. E ângulos maiores que 90°?</h3>
        <p>Em rampas do cotidiano normalmente trabalhamos entre 0° e 90°. No plano cartesiano, porém, uma reta pode formar ângulos maiores.</p>
        <p>Por exemplo, <span class="math">120°=180°−60°</span>. A reta correspondente desce quando avançamos da esquerda para a direita, por isso seu coeficiente angular é negativo:</p>
        <p><span class="math">tan(120°)=−√3≈−1,732</span>.</p>
        <p>O problema de 90° não é “ser um ângulo grande”; é especificamente ter avanço horizontal igual a zero.</p>

        <h3>9. Quando precisamos descobrir o ângulo: arco-tangente</h3>
        <p>Às vezes medimos a subida e o avanço e já conhecemos a razão, mas um projeto pede a direção em graus. Um engenheiro pode precisar do ângulo para representar a peça num desenho técnico, configurar uma direção no CAD, definir cortes e encaixes ou relacionar aquela inclinação com outras partes da estrutura.</p>
        <div class="example-box">
          <span class="card-title">Exemplo resolvido</span>
          <p>Uma rampa sobe 1,2 m enquanto avança 6 m na horizontal.</p>
          <p><span class="math">subida/avanço = 1,2/6 = 0,2</span>.</p>
          <p>Portanto <span class="math">tan(θ)=0,2</span>. Agora queremos responder à pergunta inversa: <strong>qual ângulo possui tangente igual a 0,2?</strong></p>
          <p>A operação inversa da tangente chama-se <strong>arco-tangente</strong>:</p>
          <p><span class="formula">θ=arctan(0,2)≈11,3°</span></p>
          <p>Na calculadora científica, ela costuma aparecer como <span class="math">tan⁻¹</span>. Use o modo <strong>DEG</strong> quando quiser a resposta em graus.</p>
        </div>
        <div class="note-box"><strong>De onde vem 11,3°?</strong>
          <p>A tangente associa cada ângulo permitido a uma razão. Por exemplo, <span class="math">tan(11°)≈0,194</span> e <span class="math">tan(12°)≈0,213</span>. Como 0,2 fica entre esses valores, o ângulo está entre 11° e 12°. A calculadora faz essa busca com mais precisão e encontra aproximadamente 11,3°.</p>
          <p><span class="math">tan⁻¹</span> aqui significa função inversa da tangente; não significa simplesmente <span class="math">1/tan</span>.</p>
        </div>

        <h3>10. Ligação com a aula de reta</h3>
        <p>Na reta, o coeficiente angular mede <span class="math">variação vertical/variação horizontal</span>. Na trigonometria, a tangente mede essa mesma relação para o ângulo que a reta forma com o eixo x.</p>
        <p><span class="formula">m=Δy/Δx=tan(θ)</span></p>
        <p>Assim, coeficiente angular e tangente não são duas ideias desconectadas: são duas maneiras de descrever a mesma inclinação.</p>

        <div class="task-box">
          <h4>Tente você</h4>
          <p>Uma rua sobe 0,6 m a cada 4 m de avanço horizontal.</p>
          <ol>
            <li>Calcule a razão subida/avanço.</li>
            <li>Escreva essa inclinação em porcentagem.</li>
            <li>Explique, em palavras, o que o resultado significa.</li>
          </ol>
          <details class="solution"><summary>Ver resposta</summary>
            <p><span class="math">0,6/4=0,15</span>. A inclinação é 15%. Isso significa que a rua ganha 0,15 m, ou 15 cm, de altura para cada 1 m de avanço horizontal.</p>
          </details>
        </div>

        <div class="exam-box">
          <h4>Em provas e projetos</h4>
          <p>Primeiro identifique qual medida representa a subida e qual representa o avanço horizontal. Só depois escolha se a pergunta pede a razão de inclinação, a tangente, o coeficiente angular ou o próprio ângulo.</p>
        </div>
        <div class="ok-box"><strong>Essência:</strong> tangente é a razão entre subida e avanço horizontal. O arco-tangente faz o caminho inverso: recebe essa razão e devolve o ângulo.</div>
        <button class="action-button primary" data-practice-topic="tangente" type="button">Praticar este assunto</button>
      `;
    }
  }

})();
