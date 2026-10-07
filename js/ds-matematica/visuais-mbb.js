(() => {
  'use strict';

  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);

  const afterHero = (lesson, html) => {
    if (!lesson || typeof lesson.content !== 'string') return false;
    const re = /(<div class="hero-box">[\s\S]*?<\/div>)/;
    if (!re.test(lesson.content)) return false;
    lesson.content = lesson.content.replace(re, `$1${html}`);
    return true;
  };

  const before = (lesson, marker, html) => {
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(marker)) return false;
    lesson.content = lesson.content.replace(marker, `${html}${marker}`);
    return true;
  };

  const visual = (title, svg, caption='') => `
    <figure class="mbb-visual">
      <figcaption class="mbb-visual-title">${title}</figcaption>
      ${svg}
      ${caption ? `<p class="mbb-visual-caption">${caption}</p>` : ''}
    </figure>`;

  const svg = (label, body, viewBox='0 0 720 320') => `
    <svg class="mbb-svg" viewBox="${viewBox}" role="img" aria-label="${label}">
      ${body}
    </svg>`;

  {
    const l=get('variacao');
    if(l) afterHero(l, visual(
      'Duas retas podem crescer e ainda representar relações diferentes',
      svg('Comparação entre gráfico proporcional que passa pela origem e gráfico não proporcional com valor inicial', `
        <g transform="translate(28 22)">
          <rect class="diagram-panel" x="0" y="0" width="308" height="250" rx="18"/>
          <text class="diagram-heading" x="20" y="30">Proporcional</text>
          <line class="diagram-axis" x1="48" y1="210" x2="276" y2="210"/>
          <line class="diagram-axis" x1="48" y1="210" x2="48" y2="56"/>
          <line class="diagram-line" x1="48" y1="210" x2="256" y2="70"/>
          <circle class="diagram-point" cx="48" cy="210" r="6"/>
          <g class="diagram-label"><rect x="58" y="184" width="112" height="30" rx="8"/><text x="70" y="204">passa por (0,0)</text></g>
          <text class="diagram-small" x="255" y="230">x</text><text class="diagram-small" x="30" y="62">y</text>
        </g>
        <g transform="translate(384 22)">
          <rect class="diagram-panel" x="0" y="0" width="308" height="250" rx="18"/>
          <text class="diagram-heading" x="20" y="30">Não proporcional</text>
          <line class="diagram-axis" x1="48" y1="210" x2="276" y2="210"/>
          <line class="diagram-axis" x1="48" y1="210" x2="48" y2="56"/>
          <line class="diagram-alt" x1="48" y1="158" x2="256" y2="70"/>
          <circle class="diagram-point-alt" cx="48" cy="158" r="6"/>
          <g class="diagram-label"><rect x="60" y="130" width="132" height="30" rx="8"/><text x="72" y="150">já começa acima de 0</text></g>
          <text class="diagram-small" x="255" y="230">x</text><text class="diagram-small" x="30" y="62">y</text>
        </g>
      `, '0 0 720 294'),
      'Na proporcionalidade direta, a reta passa pela origem. Uma taxa inicial desloca a reta para cima e faz a razão y/x deixar de ser constante.'
    ));
  }

  {
    const l=get('algebra');
    if(l) afterHero(l, `
      <div class="mbb-flow" role="img" aria-label="Fluxo da quantidade de cartões passando pela regra vezes três para chegar ao preço">
        <div class="mbb-flow-node"><span>entrada</span><strong>x cartões</strong><small>10, 50, 100...</small></div>
        <div class="mbb-flow-arrow" aria-hidden="true">→</div>
        <div class="mbb-flow-node is-rule"><span>regra</span><strong>multiplicar por 3</strong><small>y = 3x</small></div>
        <div class="mbb-flow-arrow" aria-hidden="true">→</div>
        <div class="mbb-flow-node"><span>saída</span><strong>preço y</strong><small>30, 150, 300...</small></div>
      </div>
    `);
  }

  {
    const l=get('funcao1');
    if(l) afterHero(l, `
      <div class="mbb-flow function-flow" role="img" aria-label="Exemplo de função com entrada duas horas, regra cinco vezes x mais dez e saída vinte reais">
        <div class="mbb-flow-node"><span>entrada</span><strong>x = 2 h</strong></div>
        <div class="mbb-flow-arrow" aria-hidden="true">→</div>
        <div class="mbb-flow-node is-rule"><span>função</span><strong>f(x)=5x+10</strong><small>5·2 + 10</small></div>
        <div class="mbb-flow-arrow" aria-hidden="true">→</div>
        <div class="mbb-flow-node"><span>saída</span><strong>f(2)=20</strong><small>R$ 20</small></div>
      </div>
    `);
  }

  {
    const l=get('reta');
    if(l) afterHero(l, visual(
      'A inclinação aparece quando comparamos avanço e subida',
      svg('Reta em um plano cartesiano com dois pontos e um triângulo mostrando delta x e delta y', `
        <defs>
          <pattern id="gridRetaMbb" width="48" height="40" patternUnits="userSpaceOnUse">
            <path class="diagram-grid" d="M 48 0 L 0 0 0 40" fill="none"/>
          </pattern>
        </defs>
        <rect class="diagram-grid-bg" x="54" y="30" width="610" height="235" rx="18"/>
        <rect x="72" y="48" width="570" height="200" fill="url(#gridRetaMbb)"/>
        <line class="diagram-axis" x1="82" y1="228" x2="638" y2="228"/>
        <line class="diagram-axis" x1="118" y1="248" x2="118" y2="58"/>
        <line class="diagram-line" x1="150" y1="214" x2="600" y2="72"/>
        <circle class="diagram-point" cx="230" cy="188" r="7"/>
        <circle class="diagram-point" cx="470" cy="112" r="7"/>
        <line class="diagram-dash" x1="230" y1="188" x2="470" y2="188"/>
        <line class="diagram-dash" x1="470" y1="188" x2="470" y2="112"/>
        <g class="diagram-label"><rect x="310" y="194" width="92" height="32" rx="9"/><text x="330" y="216">Δx = avanço</text></g>
        <g class="diagram-label"><rect x="482" y="135" width="108" height="32" rx="9"/><text x="494" y="157">Δy = subida</text></g>
        <g class="diagram-label"><rect x="186" y="148" width="74" height="30" rx="9"/><text x="202" y="168">ponto 1</text></g>
        <g class="diagram-label"><rect x="436" y="72" width="74" height="30" rx="9"/><text x="452" y="92">ponto 2</text></g>
      `),
      'O coeficiente angular é a razão entre a mudança vertical e a mudança horizontal: m = Δy/Δx.'
    ));
  }

  {
    const l=get('partes');
    if(l) afterHero(l, visual(
      'A regra muda quando atravessamos o limite',
      svg('Gráfico de tarifa por partes, constante até uma hora e crescente depois do limite', `
        <rect class="diagram-grid-bg" x="62" y="28" width="590" height="235" rx="18"/>
        <line class="diagram-axis" x1="100" y1="230" x2="620" y2="230"/>
        <line class="diagram-axis" x1="100" y1="230" x2="100" y2="62"/>
        <line class="diagram-line" x1="100" y1="176" x2="330" y2="176"/>
        <circle class="diagram-point" cx="330" cy="176" r="7"/>
        <line class="diagram-alt" x1="330" y1="176" x2="585" y2="82"/>
        <line class="diagram-dash" x1="330" y1="230" x2="330" y2="176"/>
        <g class="diagram-label"><rect x="150" y="136" width="126" height="30" rx="9"/><text x="163" y="156">até 1 h: R$ 12</text></g>
        <g class="diagram-label"><rect x="398" y="118" width="154" height="30" rx="9"/><text x="411" y="138">depois: +R$ 5/h</text></g>
        <g class="diagram-label"><rect x="292" y="238" width="82" height="30" rx="9"/><text x="307" y="258">limite</text></g>
        <text class="diagram-small" x="600" y="252">tempo</text>
        <text class="diagram-small" x="72" y="68">preço</text>
      `),
      'O ponto de mudança separa duas faixas. Antes de calcular, descubra em qual faixa está o valor de entrada.'
    ));
  }

  {
    const l=get('quadratica');
    if(l) afterHero(l, visual(
      'Reta e parábola não crescem do mesmo jeito',
      svg('Comparação entre uma função linear e uma função quadrática em dois pequenos gráficos', `
        <g transform="translate(28 20)">
          <rect class="diagram-panel" width="312" height="248" rx="18"/>
          <text class="diagram-heading" x="22" y="32">1º grau</text>
          <line class="diagram-axis" x1="52" y1="205" x2="282" y2="205"/>
          <line class="diagram-axis" x1="72" y1="220" x2="72" y2="62"/>
          <line class="diagram-line" x1="82" y1="198" x2="260" y2="78"/>
          <g class="diagram-label"><rect x="118" y="132" width="112" height="30" rx="9"/><text x="131" y="152">ritmo constante</text></g>
        </g>
        <g transform="translate(380 20)">
          <rect class="diagram-panel" width="312" height="248" rx="18"/>
          <text class="diagram-heading" x="22" y="32">2º grau</text>
          <line class="diagram-axis" x1="40" y1="205" x2="282" y2="205"/>
          <line class="diagram-axis" x1="156" y1="220" x2="156" y2="58"/>
          <path class="diagram-alt" d="M70 72 C105 165 126 194 156 204 C186 194 208 165 244 72"/>
          <g class="diagram-label"><rect x="94" y="118" width="142" height="30" rx="9"/><text x="108" y="138">o ritmo vai mudando</text></g>
        </g>
      `, '0 0 720 288'),
      'Na função do 1º grau, a variação por unidade é constante. Na quadrática, essa variação muda e o gráfico se curva.'
    ));
  }

  {
    const l=get('parabola');
    if(l) afterHero(l, visual(
      'Leia as principais informações diretamente no gráfico',
      svg('Parábola com duas raízes, vértice, eixo de simetria e indicação de mínimo', `
        <rect class="diagram-grid-bg" x="62" y="24" width="592" height="250" rx="18"/>
        <line class="diagram-axis" x1="92" y1="178" x2="625" y2="178"/>
        <line class="diagram-axis" x1="360" y1="252" x2="360" y2="50"/>
        <line class="diagram-dash" x1="360" y1="52" x2="360" y2="240"/>
        <path class="diagram-line" d="M150 72 C225 235 295 247 360 235 C425 247 495 235 570 72"/>
        <circle class="diagram-point" cx="225" cy="178" r="7"/>
        <circle class="diagram-point" cx="495" cy="178" r="7"/>
        <circle class="diagram-point-alt" cx="360" cy="235" r="8"/>
        <g class="diagram-label"><rect x="175" y="142" width="100" height="30" rx="9"/><text x="188" y="162">raiz: f(x)=0</text></g>
        <g class="diagram-label"><rect x="446" y="142" width="100" height="30" rx="9"/><text x="459" y="162">raiz: f(x)=0</text></g>
        <g class="diagram-label"><rect x="380" y="218" width="132" height="30" rx="9"/><text x="394" y="238">vértice = mínimo</text></g>
        <g class="diagram-label"><rect x="270" y="72" width="118" height="30" rx="9"/><text x="283" y="92">eixo de simetria</text></g>
      `),
      'As raízes mostram onde a função vale zero; o vértice mostra máximo ou mínimo; o eixo de simetria divide a parábola em duas metades espelhadas.'
    ));
  }

  {
    const l=get('quadrado');
    if(l) afterHero(l, visual(
      'Dobrar o lado faz a área ficar quatro vezes maior',
      svg('Dois quadrados, um de lado dois e área quatro e outro de lado quatro e área dezesseis', `
        <g transform="translate(90 40)">
          <rect class="diagram-shape" x="0" y="42" width="120" height="120" rx="8"/>
          <text class="diagram-heading" x="18" y="24">lado 2</text>
          <text class="diagram-shape-text" x="36" y="110">área 4</text>
          <line class="diagram-measure" x1="0" y1="180" x2="120" y2="180"/>
          <text class="diagram-small" x="50" y="202">2</text>
        </g>
        <g transform="translate(360 18)">
          <rect class="diagram-shape is-alt" x="0" y="24" width="210" height="210" rx="10"/>
          <text class="diagram-heading" x="58" y="16">lado 4</text>
          <text class="diagram-shape-text" x="72" y="138">área 16</text>
          <line class="diagram-measure" x1="0" y1="252" x2="210" y2="252"/>
          <text class="diagram-small" x="98" y="276">4</text>
        </g>
        <path class="diagram-arrow" d="M245 142 L330 142"/>
        <text class="diagram-heading" x="248" y="122">lado ×2</text>
        <text class="diagram-heading" x="246" y="170">área ×4</text>
      `, '0 0 720 310'),
      'A área depende de L². Por isso, quando L é multiplicado por 2, a área é multiplicada por 2² = 4.'
    ));
  }

  {
    const l=get('transformacoes');
    if(l) afterHero(l, visual(
      'Uma pequena mudança na expressão produz uma mudança previsível no gráfico',
      svg('Quatro pequenos gráficos mostrando parábola original, deslocada para cima, deslocada para a direita e refletida para baixo', `
        <g transform="translate(16 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">y=x²</text><line class="diagram-axis" x1="18" y1="150" x2="142" y2="150"/><line class="diagram-axis" x1="80" y1="170" x2="80" y2="50"/><path class="diagram-line thin" d="M32 66 C48 122 62 148 80 150 C98 148 112 122 128 66"/></g>
        <g transform="translate(192 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">+3 fora</text><line class="diagram-axis" x1="18" y1="150" x2="142" y2="150"/><line class="diagram-axis" x1="80" y1="170" x2="80" y2="50"/><path class="diagram-alt thin" d="M32 46 C48 102 62 128 80 130 C98 128 112 102 128 46"/><text class="diagram-small" x="43" y="184">sobe</text></g>
        <g transform="translate(368 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">(x−2)²</text><line class="diagram-axis" x1="18" y1="150" x2="142" y2="150"/><line class="diagram-axis" x1="70" y1="170" x2="70" y2="50"/><path class="diagram-line thin" d="M62 66 C78 122 92 148 110 150 C128 148 138 120 146 84"/><text class="diagram-small" x="83" y="184">vai à direita</text></g>
        <g transform="translate(544 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">−x²</text><line class="diagram-axis" x1="18" y1="95" x2="142" y2="95"/><line class="diagram-axis" x1="80" y1="170" x2="80" y2="45"/><path class="diagram-alt thin" d="M32 178 C48 122 62 97 80 95 C98 97 112 122 128 178"/><text class="diagram-small" x="39" y="184">reflete</text></g>
      `, '0 0 720 250'),
      'Observe sempre a forma conhecida primeiro. Depois identifique o que mudou: altura, posição horizontal, escala ou sentido da abertura.'
    ));
  }

  {
    const l=get('pa');
    if(l) afterHero(l, `
      <div class="mbb-sequence" role="img" aria-label="Progressão aritmética vinte, vinte e cinco, trinta, trinta e cinco e quarenta com acréscimo de cinco em cada passo">
        <div class="sequence-node"><span>1º</span><strong>20</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>2º</span><strong>25</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>3º</span><strong>30</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>4º</span><strong>35</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>5º</span><strong>40</strong></div>
      </div>
      <p class="mbb-visual-caption standalone">A diferença permanece +5. É essa repetição de passos iguais que caracteriza uma Progressão Aritmética.</p>
    `);
  }

  {
    const l=get('tangente');
    if(l){
      const old = `<div class="visual-box">
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
        </div>`;
      const polished = visual(
        'A rampa vira um triângulo quando é vista de lado',
        svg('Triângulo de uma rampa com avanço horizontal, subida vertical, hipotenusa e ângulo theta claramente identificados', `
          <rect class="diagram-grid-bg" x="54" y="28" width="610" height="248" rx="18"/>
          <polygon class="diagram-ramp-fill" points="118,224 566,224 566,74"/>
          <line class="diagram-axis strong" x1="118" y1="224" x2="566" y2="224"/>
          <line class="diagram-axis strong" x1="566" y1="224" x2="566" y2="74"/>
          <line class="diagram-line" x1="118" y1="224" x2="566" y2="74"/>
          <path class="diagram-angle" d="M170 224 A52 52 0 0 0 167 207"/>
          <g class="diagram-label"><rect x="128" y="176" width="64" height="34" rx="10"/><text class="theta-label" x="148" y="199">θ</text></g>
          <g class="diagram-label"><rect x="282" y="232" width="154" height="32" rx="9"/><text x="298" y="253">avanço horizontal</text></g>
          <g class="diagram-label"><rect x="578" y="132" width="82" height="32" rx="9"/><text x="594" y="153">subida</text></g>
          <g class="diagram-label"><rect x="324" y="116" width="84" height="32" rx="9"/><text x="344" y="137">rampa</text></g>
          <path class="diagram-right-angle" d="M542 224 L542 200 L566 200"/>
        `),
        'θ (theta) é o ângulo entre a rampa e a horizontal. O cateto adjacente é o avanço; o cateto oposto é a subida.'
      );
      if(l.content.includes(old)) l.content=l.content.replace(old,polished);

      before(l, '<h3>7. O que acontece em 90°?</h3>', visual(
        'O mesmo triângulo explica 30°, 60° e o aparecimento de √3',
        svg('Triângulo retângulo trinta sessenta noventa com lados um, raiz de três e dois', `
          <rect class="diagram-grid-bg" x="88" y="24" width="544" height="250" rx="18"/>
          <polygon class="diagram-special-fill" points="160,230 548,230 548,62"/>
          <line class="diagram-axis strong" x1="160" y1="230" x2="548" y2="230"/>
          <line class="diagram-axis strong" x1="548" y1="230" x2="548" y2="62"/>
          <line class="diagram-alt" x1="160" y1="230" x2="548" y2="62"/>
          <path class="diagram-angle alt" d="M220 230 A60 60 0 0 0 215 206"/>
          <path class="diagram-angle" d="M548 122 A60 60 0 0 0 522 117"/>
          <g class="diagram-label"><rect x="188" y="182" width="58" height="32" rx="9"/><text x="204" y="203">30°</text></g>
          <g class="diagram-label"><rect x="492" y="126" width="58" height="32" rx="9"/><text x="508" y="147">60°</text></g>
          <g class="diagram-label"><rect x="332" y="236" width="58" height="32" rx="9"/><text x="356" y="257">√3</text></g>
          <g class="diagram-label"><rect x="558" y="142" width="48" height="32" rx="9"/><text x="578" y="163">1</text></g>
          <g class="diagram-label"><rect x="326" y="124" width="48" height="32" rx="9"/><text x="346" y="145">2</text></g>
          <path class="diagram-right-angle" d="M524 230 L524 206 L548 206"/>
        `),
        'Ao cortar um triângulo equilátero de lado 2 ao meio, surge o triângulo 30°–60°–90°, com lados 1, √3 e 2.'
      ));

      before(l, '<h3>9. Quando precisamos descobrir o ângulo: arco-tangente</h3>', visual(
        '90° é vertical; depois de 90° a inclinação muda de sinal',
        svg('Plano cartesiano com uma direção vertical de noventa graus e uma reta de cento e vinte graus com inclinação negativa', `
          <rect class="diagram-grid-bg" x="60" y="26" width="600" height="250" rx="18"/>
          <line class="diagram-axis" x1="100" y1="220" x2="620" y2="220"/>
          <line class="diagram-axis" x1="360" y1="250" x2="360" y2="54"/>
          <line class="diagram-vertical" x1="360" y1="220" x2="360" y2="72"/>
          <line class="diagram-alt" x1="178" y1="90" x2="540" y2="248"/>
          <path class="diagram-angle" d="M418 220 A58 58 0 0 0 360 162"/>
          <g class="diagram-label"><rect x="410" y="166" width="62" height="32" rx="9"/><text x="426" y="187">90°</text></g>
          <path class="diagram-angle alt" d="M430 220 A70 70 0 0 0 326 159"/>
          <g class="diagram-label"><rect x="278" y="132" width="72" height="32" rx="9"/><text x="294" y="153">120°</text></g>
          <g class="diagram-label"><rect x="438" y="102" width="154" height="32" rx="9"/><text x="452" y="123">reta decrescente</text></g>
        `),
        'Em 90°, o avanço horizontal é zero e a tangente não é definida. Em 120°, a reta desce quando avançamos para a direita, por isso a tangente é negativa.'
      ));
    }
  }

  {
    const l=get('porcentagem');
    if(l){
      const cells=[];
      for(let r=0;r<10;r++) for(let c=0;c<10;c++){
        const i=r*10+c;
        cells.push(`<rect class="${i<25?'percent-cell active':'percent-cell'}" x="${180+c*28}" y="${30+r*24}" width="22" height="18" rx="3"/>`);
      }
      afterHero(l, visual(
        '25% significa 25 de cada 100',
        svg('Grade com cem pequenos quadrados e vinte e cinco destacados para representar vinte e cinco por cento', `
          <g>${cells.join('')}</g>
          <g class="diagram-label"><rect x="474" y="88" width="154" height="74" rx="14"/><text class="diagram-heading" x="498" y="116">25 destacados</text><text x="499" y="142">25/100 = 0,25 = 25%</text></g>
        `, '0 0 720 300'),
        'A grade torna visível a base 100. A porcentagem diz quantas dessas 100 partes estamos considerando.'
      ));
    }
  }

  {
    const l=get('ladrilhamento');
    if(l) afterHero(l, visual(
      'Para fechar em torno de um ponto, os ângulos precisam completar 360°',
      svg('Quatro quadrados encontrando-se em um vértice central, cada um contribuindo noventa graus', `
        <rect class="diagram-tile" x="230" y="34" width="120" height="120" rx="5"/>
        <rect class="diagram-tile alt" x="350" y="34" width="120" height="120" rx="5"/>
        <rect class="diagram-tile alt2" x="230" y="154" width="120" height="120" rx="5"/>
        <rect class="diagram-tile alt3" x="350" y="154" width="120" height="120" rx="5"/>
        <circle class="diagram-center" cx="350" cy="154" r="7"/>
        <path class="diagram-angle" d="M326 154 A24 24 0 0 1 350 130"/>
        <path class="diagram-angle alt" d="M350 130 A24 24 0 0 1 374 154"/>
        <path class="diagram-angle" d="M374 154 A24 24 0 0 1 350 178"/>
        <path class="diagram-angle alt" d="M350 178 A24 24 0 0 1 326 154"/>
        <g class="diagram-label"><rect x="112" y="112" width="104" height="84" rx="14"/><text class="diagram-heading" x="132" y="140">4 × 90°</text><text x="130" y="168">= 360°</text></g>
        <g class="diagram-label"><rect x="494" y="112" width="126" height="84" rx="14"/><text class="diagram-heading" x="516" y="140">sem buraco</text><text x="518" y="168">sem sobrepor</text></g>
      `, '0 0 720 310'),
      'Quatro ângulos retos de 90° se encontram no mesmo vértice: 4·90° = 360°. Por isso quadrados conseguem ladrilhar o plano.'
    ));
  }

  {
    const l=get('grandezas');
    if(l) afterHero(l, `
      <div class="mbb-ratio-visual" role="img" aria-label="Exemplo de velocidade média: cento e oitenta quilômetros divididos por três horas resultam em sessenta quilômetros por hora">
        <div class="ratio-block"><span>distância</span><strong>180 km</strong></div>
        <div class="ratio-symbol">÷</div>
        <div class="ratio-block"><span>tempo</span><strong>3 h</strong></div>
        <div class="ratio-symbol">=</div>
        <div class="ratio-block result"><span>velocidade média</span><strong>60 km/h</strong></div>
      </div>
      <p class="mbb-visual-caption standalone">A própria unidade conta a operação: km/h significa quilômetros divididos por hora.</p>
    `);
  }

  {
    const l=get('dados');
    if(l) afterHero(l, visual(
      'A mesma informação pode ser vista como tabela ou gráfico',
      svg('Gráfico de barras para frequências três, três, um e um correspondentes aos tempos dois, três, quatro e cinco segundos', `
        <rect class="diagram-grid-bg" x="70" y="24" width="580" height="250" rx="18"/>
        <line class="diagram-axis" x1="116" y1="226" x2="610" y2="226"/>
        <line class="diagram-axis" x1="116" y1="226" x2="116" y2="62"/>
        <rect class="bar" x="170" y="92" width="72" height="134" rx="8"/><rect class="bar" x="280" y="92" width="72" height="134" rx="8"/>
        <rect class="bar alt" x="390" y="181" width="72" height="45" rx="8"/><rect class="bar alt" x="500" y="181" width="72" height="45" rx="8"/>
        <text class="diagram-heading" x="198" y="84">3</text><text class="diagram-heading" x="308" y="84">3</text><text class="diagram-heading" x="418" y="173">1</text><text class="diagram-heading" x="528" y="173">1</text>
        <text class="diagram-small" x="198" y="252">2 s</text><text class="diagram-small" x="308" y="252">3 s</text><text class="diagram-small" x="418" y="252">4 s</text><text class="diagram-small" x="528" y="252">5 s</text>
        <text class="diagram-small" x="76" y="70">frequência</text>
      `),
      'No exemplo 2, 3, 2, 4, 3, 2, 5, 3, os tempos 2 s e 3 s aparecem três vezes cada. A altura da barra representa essa frequência.'
    ));
  }
})();
