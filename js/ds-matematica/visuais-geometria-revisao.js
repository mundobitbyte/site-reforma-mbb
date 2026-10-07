(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const figure = (title, svg, caption='') => `
    <figure class="mbb-visual">
      <figcaption class="mbb-visual-title">${title}</figcaption>
      ${svg}
      ${caption ? `<p class="mbb-visual-caption">${caption}</p>` : ''}
    </figure>`;
  const S = (label, body, viewBox='0 0 720 320') => `
    <svg class="mbb-svg" viewBox="${viewBox}" role="img" aria-label="${label}">
      ${body}
    </svg>`;
  const replaceFigure = (lesson, title, html) => {
    if (!lesson || typeof lesson.content !== 'string') return false;
    const re = new RegExp(`<figure class="mbb-visual">\\s*<figcaption class="mbb-visual-title">${esc(title)}</figcaption>[\\s\\S]*?<\\/figure>`);
    if (!re.test(lesson.content)) return false;
    lesson.content = lesson.content.replace(re, html);
    return true;
  };

  {
    const l=get('variacao');
    replaceFigure(l,'Duas retas podem crescer e ainda representar relações diferentes',figure(
      'Duas retas podem crescer e ainda representar relações diferentes',
      S('Comparação entre gráfico proporcional que passa pela origem e gráfico não proporcional com valor inicial',`
        <g transform="translate(28 22)">
          <rect class="diagram-panel" x="0" y="0" width="308" height="250" rx="18"/>
          <text class="diagram-heading" x="20" y="30">Proporcional</text>
          <line class="diagram-axis" x1="48" y1="205" x2="276" y2="205"/>
          <line class="diagram-axis" x1="48" y1="205" x2="48" y2="56"/>
          <line class="diagram-line" x1="48" y1="205" x2="256" y2="68"/>
          <circle class="diagram-point" cx="48" cy="205" r="6"/>
          <g class="diagram-label"><rect x="82" y="212" width="122" height="30" rx="8"/><text x="94" y="232">passa pela origem</text></g>
          <text class="diagram-small" x="264" y="226">x</text><text class="diagram-small" x="29" y="62">y</text>
        </g>
        <g transform="translate(384 22)">
          <rect class="diagram-panel" x="0" y="0" width="308" height="250" rx="18"/>
          <text class="diagram-heading" x="20" y="30">Não proporcional</text>
          <line class="diagram-axis" x1="48" y1="205" x2="276" y2="205"/>
          <line class="diagram-axis" x1="48" y1="205" x2="48" y2="56"/>
          <line class="diagram-alt" x1="48" y1="154" x2="256" y2="68"/>
          <circle class="diagram-point-alt" cx="48" cy="154" r="6"/>
          <g class="diagram-label"><rect x="82" y="212" width="150" height="30" rx="8"/><text x="94" y="232">tem um valor inicial</text></g>
          <text class="diagram-small" x="264" y="226">x</text><text class="diagram-small" x="29" y="62">y</text>
        </g>
      `,'0 0 720 294'),
      'Na proporcionalidade direta, a reta passa pela origem. Uma taxa inicial desloca a reta para cima e faz a razão y/x deixar de ser constante.'
    ));
  }

  {
    const l=get('reta');
    replaceFigure(l,'A inclinação aparece quando comparamos avanço e subida',figure(
      'A inclinação aparece quando comparamos avanço e subida',
      S('Reta em um plano cartesiano com dois pontos e um triângulo mostrando delta x e delta y',`
        <defs><pattern id="gridRetaMbbRev" width="48" height="40" patternUnits="userSpaceOnUse"><path class="diagram-grid" d="M 48 0 L 0 0 0 40" fill="none"/></pattern></defs>
        <rect class="diagram-grid-bg" x="54" y="30" width="610" height="235" rx="18"/>
        <rect x="72" y="48" width="570" height="200" fill="url(#gridRetaMbbRev)"/>
        <line class="diagram-axis" x1="82" y1="228" x2="638" y2="228"/>
        <line class="diagram-axis" x1="118" y1="248" x2="118" y2="58"/>
        <line class="diagram-line" x1="150" y1="213.33" x2="600" y2="70.83"/>
        <circle class="diagram-point" cx="230" cy="188" r="7"/><circle class="diagram-point" cx="470" cy="112" r="7"/>
        <line class="diagram-dash" x1="230" y1="188" x2="470" y2="188"/><line class="diagram-dash" x1="470" y1="188" x2="470" y2="112"/>
        <g class="diagram-label"><rect x="310" y="194" width="102" height="32" rx="9"/><text x="324" y="216">Δx = avanço</text></g>
        <g class="diagram-label"><rect x="484" y="137" width="112" height="32" rx="9"/><text x="498" y="159">Δy = subida</text></g>
        <g class="diagram-label"><rect x="176" y="140" width="74" height="30" rx="9"/><text x="192" y="160">ponto 1</text></g>
        <g class="diagram-label"><rect x="486" y="78" width="74" height="30" rx="9"/><text x="502" y="98">ponto 2</text></g>
      `),
      'O coeficiente angular é a razão entre a mudança vertical e a mudança horizontal: m = Δy/Δx.'
    ));
  }

  {
    const l=get('partes');
    replaceFigure(l,'A regra muda quando atravessamos o limite',figure(
      'A regra muda quando atravessamos o limite',
      S('Gráfico de tarifa por partes, constante até uma hora e crescente depois do limite',`
        <rect class="diagram-grid-bg" x="62" y="28" width="590" height="235" rx="18"/>
        <line class="diagram-axis" x1="100" y1="230" x2="620" y2="230"/><line class="diagram-axis" x1="100" y1="230" x2="100" y2="62"/>
        <line class="diagram-line" x1="100" y1="176" x2="330" y2="176"/><circle class="diagram-point" cx="330" cy="176" r="7"/>
        <line class="diagram-alt" x1="330" y1="176" x2="585" y2="82"/><line class="diagram-dash" x1="330" y1="230" x2="330" y2="176"/>
        <g class="diagram-label"><rect x="150" y="136" width="126" height="30" rx="9"/><text x="163" y="156">até 1 h: R$ 12</text></g>
        <g class="diagram-label"><rect x="402" y="82" width="154" height="30" rx="9"/><text x="415" y="102">depois: +R$ 5/h</text></g>
        <g class="diagram-label"><rect x="292" y="238" width="82" height="30" rx="9"/><text x="307" y="258">limite</text></g>
        <text class="diagram-small" x="600" y="252">tempo</text><text class="diagram-small" x="72" y="68">preço</text>
      `),
      'O ponto de mudança separa duas faixas. Antes de calcular, descubra em qual faixa está o valor de entrada.'
    ));
  }

  {
    const l=get('quadratica');
    replaceFigure(l,'Reta e parábola não crescem do mesmo jeito',figure(
      'Reta e parábola não crescem do mesmo jeito',
      S('Comparação entre uma função linear e uma função quadrática em dois pequenos gráficos',`
        <g transform="translate(28 20)"><rect class="diagram-panel" width="312" height="248" rx="18"/><text class="diagram-heading" x="22" y="32">1º grau</text><line class="diagram-axis" x1="52" y1="205" x2="282" y2="205"/><line class="diagram-axis" x1="72" y1="220" x2="72" y2="62"/><line class="diagram-line" x1="82" y1="198" x2="260" y2="78"/><text class="diagram-small" x="112" y="232">variação constante</text></g>
        <g transform="translate(380 20)"><rect class="diagram-panel" width="312" height="248" rx="18"/><text class="diagram-heading" x="22" y="32">2º grau</text><line class="diagram-axis" x1="40" y1="205" x2="282" y2="205"/><line class="diagram-axis" x1="156" y1="220" x2="156" y2="58"/><path class="diagram-alt" d="M70 72 Q156 336 244 72"/><text class="diagram-small" x="104" y="232">a variação muda</text></g>
      `,'0 0 720 288'),
      'Na função do 1º grau, a variação por unidade é constante. Na quadrática, essa variação muda e o gráfico se curva.'
    ));
  }

  {
    const l=get('parabola');
    replaceFigure(l,'Leia as principais informações diretamente no gráfico',figure(
      'Leia as principais informações diretamente no gráfico',
      S('Parábola suave com duas raízes, vértice e eixo de simetria corretamente posicionados',`
        <rect class="diagram-grid-bg" x="62" y="24" width="592" height="250" rx="18"/>
        <line class="diagram-axis" x1="92" y1="178" x2="625" y2="178"/><line class="diagram-axis" x1="360" y1="252" x2="360" y2="50"/><line class="diagram-dash" x1="360" y1="52" x2="360" y2="240"/>
        <path class="diagram-line" d="M150 70 Q360 400 570 70"/><circle class="diagram-point" cx="236.6" cy="178" r="7"/><circle class="diagram-point" cx="483.4" cy="178" r="7"/><circle class="diagram-point-alt" cx="360" cy="235" r="8"/>
        <g class="diagram-label"><rect x="174" y="142" width="100" height="30" rx="9"/><text x="187" y="162">raiz: f(x)=0</text></g><g class="diagram-label"><rect x="446" y="142" width="100" height="30" rx="9"/><text x="459" y="162">raiz: f(x)=0</text></g>
        <g class="diagram-label"><rect x="380" y="218" width="132" height="30" rx="9"/><text x="394" y="238">vértice = mínimo</text></g><g class="diagram-label"><rect x="392" y="70" width="118" height="30" rx="9"/><text x="405" y="90">eixo de simetria</text></g>
      `),
      'As raízes são os pontos onde a curva cruza o eixo x; o vértice é o ponto mais baixo desta parábola; a linha tracejada passa pelo vértice e é o eixo de simetria.'
    ));
  }

  {
    const l=get('quadrado');
    replaceFigure(l,'Dobrar o lado faz a área ficar quatro vezes maior',figure(
      'Dobrar o lado faz a área ficar quatro vezes maior',
      S('Dois quadrados em escala: um de lado dois e outro com o dobro do lado, mostrando área quatro e área dezesseis',`
        <g transform="translate(90 50)"><rect class="diagram-shape" x="20" y="48" width="100" height="100" rx="8"/><text class="diagram-heading" x="42" y="28">lado 2</text><text class="diagram-shape-text" x="42" y="108">área 4</text><line class="diagram-measure" x1="20" y1="166" x2="120" y2="166"/><text class="diagram-small" x="66" y="190">2</text></g>
        <g transform="translate(390 18)"><rect class="diagram-shape is-alt" x="0" y="34" width="200" height="200" rx="10"/><text class="diagram-heading" x="66" y="18">lado 4</text><text class="diagram-shape-text" x="70" y="142">área 16</text><line class="diagram-measure" x1="0" y1="252" x2="200" y2="252"/><text class="diagram-small" x="94" y="276">4</text></g>
        <path class="diagram-arrow" d="M245 142 L350 142"/><text class="diagram-heading" x="257" y="122">lado ×2</text><text class="diagram-heading" x="255" y="170">área ×4</text>
      `,'0 0 720 320'),
      'O segundo quadrado tem exatamente o dobro do lado do primeiro. Por isso sua área visual também é quatro vezes maior: 2² = 4.'
    ));
  }

  {
    const l=get('transformacoes');
    replaceFigure(l,'Uma pequena mudança na expressão produz uma mudança previsível no gráfico',figure(
      'Uma pequena mudança na expressão produz uma mudança previsível no gráfico',
      S('Quatro pequenos gráficos com parábolas suaves mostrando original, deslocamento vertical, deslocamento horizontal e reflexão',`
        <g transform="translate(16 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">y=x²</text><line class="diagram-axis" x1="18" y1="150" x2="142" y2="150"/><line class="diagram-axis" x1="80" y1="170" x2="80" y2="50"/><path class="diagram-line thin" d="M32 66 Q80 234 128 66"/></g>
        <g transform="translate(192 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">y=x²+3</text><line class="diagram-axis" x1="18" y1="150" x2="142" y2="150"/><line class="diagram-axis" x1="80" y1="170" x2="80" y2="50"/><path class="diagram-alt thin" d="M32 46 Q80 214 128 46"/><text class="diagram-small" x="56" y="184">sobe</text></g>
        <g transform="translate(368 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">y=(x−2)²</text><line class="diagram-axis" x1="18" y1="150" x2="142" y2="150"/><line class="diagram-axis" x1="70" y1="170" x2="70" y2="50"/><path class="diagram-line thin" d="M62 66 Q110 234 158 66"/><text class="diagram-small" x="78" y="184">vai à direita</text></g>
        <g transform="translate(544 28)"><rect class="diagram-panel" width="160" height="200" rx="16"/><text class="diagram-heading" x="16" y="28">y=−x²</text><line class="diagram-axis" x1="18" y1="95" x2="142" y2="95"/><line class="diagram-axis" x1="80" y1="170" x2="80" y2="45"/><path class="diagram-alt thin" d="M32 178 Q80 12 128 178"/><text class="diagram-small" x="50" y="184">reflete</text></g>
      `,'0 0 720 250'),
      'As curvas mantêm a mesma forma básica. O que muda é a posição vertical, a posição horizontal ou o sentido da abertura.'
    ));
  }

  {
    const l=get('tangente');
    replaceFigure(l,'A rampa vira um triângulo quando é vista de lado',figure(
      'A rampa vira um triângulo quando é vista de lado',
      S('Triângulo de uma rampa com proporção real de cinco unidades de avanço para uma de subida e ângulo theta separado das linhas',`
        <rect class="diagram-grid-bg" x="54" y="28" width="610" height="248" rx="18"/><polygon class="diagram-ramp-fill" points="120,230 570,230 570,140"/>
        <line class="diagram-axis strong" x1="120" y1="230" x2="570" y2="230"/><line class="diagram-axis strong" x1="570" y1="230" x2="570" y2="140"/><line class="diagram-line" x1="120" y1="230" x2="570" y2="140"/>
        <path class="diagram-angle" d="M190 230 A70 70 0 0 0 188.64 216.27"/><g class="diagram-label"><rect x="150" y="180" width="64" height="34" rx="10"/><text class="theta-label" x="170" y="203">θ</text></g>
        <g class="diagram-label"><rect x="280" y="238" width="154" height="32" rx="9"/><text x="296" y="259">avanço horizontal</text></g><g class="diagram-label"><rect x="582" y="168" width="82" height="32" rx="9"/><text x="598" y="189">subida</text></g><g class="diagram-label"><rect x="330" y="150" width="84" height="32" rx="9"/><text x="350" y="171">rampa</text></g>
        <path class="diagram-right-angle" d="M546 230 L546 206 L570 206"/>
      `),
      'O desenho mantém a proporção do exemplo: avanço 5 para subida 1. Assim, tan(θ)=1/5=0,2 e θ≈11,3°. Os rótulos ficam fora dos lados do triângulo.'
    ));

    replaceFigure(l,'O mesmo triângulo explica 30°, 60° e o aparecimento de √3',figure(
      'O mesmo triângulo explica 30°, 60° e o aparecimento de √3',
      S('Triângulo retângulo trinta sessenta noventa desenhado em escala um raiz de três dois, com ângulos e lados identificados sem sobreposição',`
        <rect class="diagram-grid-bg" x="88" y="24" width="544" height="268" rx="18"/><polygon class="diagram-special-fill" points="160,250 506.41,250 506.41,50"/>
        <line class="diagram-axis strong" x1="160" y1="250" x2="506.41" y2="250"/><line class="diagram-axis strong" x1="506.41" y1="250" x2="506.41" y2="50"/><line class="diagram-alt" x1="160" y1="250" x2="506.41" y2="50"/>
        <path class="diagram-angle alt" d="M215 250 A55 55 0 0 0 207.63 222.5"/><path class="diagram-angle" d="M506.41 105 A55 55 0 0 1 458.78 77.5"/>
        <g class="diagram-label"><rect x="188" y="192" width="58" height="32" rx="9"/><text x="204" y="213">30°</text></g><g class="diagram-label"><rect x="448" y="108" width="58" height="32" rx="9"/><text x="464" y="129">60°</text></g>
        <g class="diagram-label"><rect x="305" y="258" width="66" height="32" rx="9"/><text x="329" y="279">√3</text></g><g class="diagram-label"><rect x="520" y="138" width="48" height="32" rx="9"/><text x="540" y="159">1</text></g><g class="diagram-label"><rect x="304" y="116" width="48" height="32" rx="9"/><text x="324" y="137">2</text></g>
        <path class="diagram-right-angle" d="M482.41 250 L482.41 226 L506.41 226"/>
      `),
      'A altura foi tomada como 1, a base como √3≈1,732 e a hipotenusa como 2. Por isso a forma desenhada corresponde de fato aos ângulos de 30°, 60° e 90°.'
    ));

    replaceFigure(l,'90° é vertical; depois de 90° a inclinação muda de sinal',figure(
      '90° é vertical; depois de 90° a inclinação muda de sinal',
      S('Dois painéis separados: uma direção vertical de noventa graus e um raio de cento e vinte graus medido a partir do eixo x positivo',`
        <g><rect class="diagram-panel" x="28" y="20" width="304" height="248" rx="18"/><text class="diagram-heading" x="48" y="48">90°: direção vertical</text><line class="diagram-axis" x1="70" y1="220" x2="292" y2="220"/><line class="diagram-axis" x1="180" y1="240" x2="180" y2="64"/><line class="diagram-vertical" x1="180" y1="220" x2="180" y2="72"/><path class="diagram-angle" d="M230 220 A50 50 0 0 0 180 170"/><g class="diagram-label"><rect x="232" y="126" width="62" height="32" rx="9"/><text x="248" y="147">90°</text></g></g>
        <g><rect class="diagram-panel" x="388" y="20" width="304" height="248" rx="18"/><text class="diagram-heading" x="408" y="48">120°: 2º quadrante</text><line class="diagram-axis" x1="430" y1="220" x2="650" y2="220"/><line class="diagram-axis" x1="540" y1="240" x2="540" y2="64"/><line class="diagram-alt" x1="540" y1="220" x2="460" y2="81.44"/><path class="diagram-angle alt" d="M600 220 A60 60 0 0 0 510 168.04"/><g class="diagram-label"><rect x="550" y="112" width="70" height="32" rx="9"/><text x="566" y="133">120°</text></g></g>
      `,'0 0 720 300'),
      'O ângulo é medido a partir do eixo x positivo. Em 90° o raio é vertical; em 120° ele aponta para cima e para a esquerda, formando uma inclinação negativa.'
    ));
  }
})();