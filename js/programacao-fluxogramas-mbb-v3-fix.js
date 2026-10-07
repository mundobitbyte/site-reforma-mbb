(() => {
  'use strict';
  if (typeof pensarSteps === 'undefined') return;

  const step = id => pensarSteps.find(item => item.id === id);
  const t = (x, y, value, cls = 'node-title', anchor = 'middle') => `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${value}</text>`;
  const terminal = (cx, cy, label, rx = 68, ry = 24) => `<ellipse class="node terminal" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"></ellipse>${t(cx, cy + 6, label)}`;
  const input = (cx, cy, w, h, variable) => {
    const x = cx - w / 2, y = cy - h / 2;
    return `<polygon class="node manual-input" points="${x},${y + 14} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}"></polygon>${t(cx, cy + 6, variable)}`;
  };
  const display = (cx, cy, w, h, line1, line2 = '') => {
    const x = cx - w / 2, y = cy - h / 2, r = x + w;
    const d = `M${x + 24} ${y} H${r - 28} Q${r} ${y} ${r} ${cy} Q${r} ${y + h} ${r - 28} ${y + h} H${x + 24} L${x} ${cy} Z`;
    return `<path class="node display" d="${d}"></path>${t(cx + 5, line2 ? cy - 3 : cy + 5, line1)}${line2 ? t(cx + 5, cy + 17, line2, 'node-text') : ''}`;
  };
  const process = (cx, cy, w, h, formula) => `<rect class="node process" x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="2"></rect>${t(cx, cy + 6, formula)}`;
  const decision = (cx, cy, w, h, line1, line2 = '') => `<polygon class="node decision" points="${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}"></polygon>${t(cx, line2 ? cy - 2 : cy + 5, line1)}${line2 ? t(cx, cy + 18, line2) : ''}`;
  const connector = (cx, cy, label) => `<circle class="node connector" cx="${cx}" cy="${cy}" r="18"></circle>${t(cx, cy + 6, label)}`;
  const down = (x, y1, y2) => `<path class="arrow" d="M${x} ${y1}V${y2 - 9}"></path><polygon points="${x},${y2} ${x - 7},${y2 - 12} ${x + 7},${y2 - 12}" fill="#1e3a8a"></polygon>`;
  const right = (x1, y, x2) => `<path class="arrow" d="M${x1} ${y}H${x2 - 9}"></path><polygon points="${x2},${y} ${x2 - 12},${y - 7} ${x2 - 12},${y + 7}" fill="#1e3a8a"></polygon>`;
  const left = (x1, y, x2) => `<path class="arrow" d="M${x1} ${y}H${x2 + 9}"></path><polygon points="${x2},${y} ${x2 + 12},${y - 7} ${x2 + 12},${y + 7}" fill="#1e3a8a"></polygon>`;

  const decisaoDesconto = `
    <div class="flowchart-panel-v3">
      <div class="flowchart-panel-heading"><strong>Fluxograma 2 — decisão</strong><span>A compra pode seguir dois caminhos e depois voltar a um fluxo comum.</span></div>
      <svg class="flowchart-svg-v3" viewBox="0 0 700 1010" role="img" aria-label="Fluxograma de decisão de desconto para compras a partir de trinta reais">
        ${terminal(300,34,'INÍCIO')}
        ${down(300,58,84)}
        ${display(300,114,300,54,'&quot;Digite o preço do produto&quot;')}
        ${down(300,141,168)}
        ${input(300,198,220,54,'preco')}
        ${down(300,225,252)}
        ${display(300,282,300,54,'&quot;Digite a quantidade&quot;')}
        ${down(300,309,336)}
        ${input(300,366,220,54,'quantidade')}
        ${down(300,393,420)}
        ${process(300,450,280,54,'total = preco * quantidade')}
        ${down(300,477,506)}
        ${decision(300,566,240,112,'total &gt;= 30?')}

        ${down(300,622,650)}
        ${t(320,640,'SIM','branch-label','start')}
        ${process(300,680,260,54,'desconto = total * 0.10')}
        ${down(300,707,734)}
        ${process(300,764,270,54,'totalFinal = total - desconto')}
        ${down(300,791,818)}
        ${connector(300,840,'C')}

        ${right(420,566,460)}
        ${t(440,549,'NÃO','branch-label')}
        ${process(570,566,220,54,'totalFinal = total')}
        <path class="arrow" d="M570 593V840H327"></path>
        <polygon points="318,840 330,833 330,847" fill="#1e3a8a"></polygon>

        ${down(300,858,885)}
        ${display(300,915,320,54,'&quot;Total a pagar = &quot;, totalFinal')}
        ${down(300,942,958)}
        ${terminal(300,974,'FIM',62,22)}
      </svg>
    </div>`;

  const s44 = step(44);
  if (s44) {
    s44.title = 'Decisão: quando uma regra muda o cálculo';
    s44.objective = 'Usar uma condição real da cantina para aplicar ou não um desconto e depois reunir os dois caminhos.';
    s44.content = `
      <div class="hero-box"><span class="flowchart-badge">Decisão</span><h3>A cantina criou uma promoção</h3><p>Compras de <strong>R$ 30 ou mais</strong> recebem 10% de desconto. Agora o total da compra determina qual cálculo deve acontecer antes de chegar ao valor final.</p></div>
      ${decisaoDesconto}
      <p>Se <code>total &gt;= 30</code>, o programa calcula o desconto e obtém <code>totalFinal</code>. Se a condição for falsa, <code>totalFinal</code> recebe o próprio <code>total</code>. Depois disso, os dois caminhos se reencontram e o programa mostra <code>&quot;Total a pagar = &quot;, totalFinal</code>.</p>
      <div class="concept-box"><strong>Decisão:</strong> a condição escolhe qual caminho executar. Quando os dois caminhos já produziram o dado necessário, eles podem voltar a um fluxo comum.</div>
      <div class="task-box"><h4>Teste os dois caminhos</h4><p>Use primeiro <code>preco = 8</code> e <code>quantidade = 2</code>. Depois use <code>preco = 12</code> e <code>quantidade = 3</code>. Em qual caso há desconto? Qual é o <code>totalFinal</code> em cada venda?</p></div>
      <div class="flowchart-next"><strong>Próxima necessidade:</strong> até aqui resolvemos uma venda. Mas a cantina atende vários clientes. Como fazer o fluxo começar outra venda sem copiar o desenho inteiro?</div>`;
  }

  const s45 = step(45);
  if (s45 && !s45.content.includes('pagamento insuficiente')) {
    s45.content += `<div class="flowchart-next"><strong>Agora já sabemos voltar.</strong> Essa mesma ideia de repetição também permitirá, no atendimento completo, pedir outro valor quando um pagamento for insuficiente — sem encerrar a venda artificialmente.</div>`;
  }

  const integrado = `
    <div class="flowchart-panel-v3">
      <div class="flowchart-panel-heading"><strong>Fluxograma 4 — atendimento completo</strong><span>Promoção, pagamento, nova tentativa e novo cliente no mesmo fluxo.</span></div>
      <svg class="flowchart-svg-v3" viewBox="0 0 760 1760" role="img" aria-label="Fluxograma completo da cantina com desconto, pagamento, repetição de pagamento e novo cliente">
        ${terminal(315,34,'INÍCIO')}
        ${down(315,58,82)}
        ${connector(315,104,'A')}
        ${down(315,122,146)}
        ${display(315,176,300,54,'&quot;Digite o preço do produto&quot;')}
        ${down(315,203,227)}
        ${input(315,257,220,54,'preco')}
        ${down(315,284,308)}
        ${display(315,338,300,54,'&quot;Digite a quantidade&quot;')}
        ${down(315,365,389)}
        ${input(315,419,220,54,'quantidade')}
        ${down(315,446,470)}
        ${process(315,500,280,54,'total = preco * quantidade')}
        ${down(315,527,551)}
        ${decision(315,610,240,112,'total &gt;= 30?')}

        ${down(315,666,690)}
        ${t(335,681,'SIM','branch-label','start')}
        ${process(315,720,260,54,'desconto = total * 0.10')}
        ${down(315,747,771)}
        ${process(315,801,270,54,'totalFinal = total - desconto')}
        ${down(315,828,852)}
        ${connector(315,874,'C')}

        ${right(435,610,482)}
        ${t(459,593,'NÃO','branch-label')}
        ${process(592,610,220,54,'totalFinal = total')}
        <path class="arrow" d="M592 637V874H342"></path>
        <polygon points="333,874 345,867 345,881" fill="#1e3a8a"></polygon>

        ${down(315,892,916)}
        ${display(315,946,320,54,'&quot;Total a pagar = &quot;, totalFinal')}
        ${down(315,973,997)}
        ${connector(315,1019,'P')}
        ${down(315,1037,1061)}
        ${display(315,1091,300,54,'&quot;Digite o valor pago&quot;')}
        ${down(315,1118,1142)}
        ${input(315,1172,220,54,'valorPago')}
        ${down(315,1199,1223)}
        ${decision(315,1282,250,112,'valorPago','&gt;= totalFinal?')}

        ${down(315,1338,1362)}
        ${t(335,1353,'SIM','branch-label','start')}
        ${process(315,1392,280,54,'troco = valorPago - totalFinal')}
        ${down(315,1419,1443)}
        ${display(315,1473,300,54,'&quot;Troco = &quot;, troco')}

        ${right(440,1282,510)}
        ${t(475,1265,'NÃO','branch-label')}
        ${display(615,1282,210,62,'&quot;Valor insuficiente&quot;')}
        ${down(615,1313,1342)}
        ${connector(615,1364,'P')}
        ${t(615,1394,'tente outro valor','node-text')}

        ${down(315,1500,1524)}
        ${display(315,1554,320,54,'&quot;Há outro cliente? (S/N)&quot;')}
        ${down(315,1581,1605)}
        ${input(315,1635,220,54,'opcao')}
        ${down(315,1662,1686)}
        ${decision(315,1720,230,72,'opcao = &quot;S&quot;?')}
        ${left(200,1720,108)}
        ${t(154,1703,'SIM','branch-label')}
        ${connector(78,1720,'A')}
        ${right(430,1720,515)}
        ${t(472,1703,'NÃO','branch-label')}
        ${terminal(585,1720,'FIM',54,22)}
      </svg>
    </div>`;

  const s46 = step(46);
  if (s46) {
    s46.title = 'Tudo junto: o atendimento completo da cantina';
    s46.objective = 'Integrar sequência, decisão e repetição em uma situação real, sem encerrar artificialmente um pagamento insuficiente.';
    s46.content = `
      <div class="hero-box"><span class="part-badge">Integrar</span><h3>Agora cada conceito assume uma função real</h3><p>A venda calcula o total, aplica a promoção quando necessário, mostra o valor final, recebe o pagamento e só conclui quando o valor for suficiente. Depois pergunta se existe outro cliente.</p></div>
      ${integrado}
      <div class="flowchart-reading"><div><strong>Decisão 1</strong><code>total &gt;= 30?</code> define se há desconto.</div><div><strong>Repetição P</strong>Pagamento insuficiente volta para uma nova tentativa.</div><div><strong>Repetição A</strong>Outro cliente inicia uma nova venda.</div></div>
      <div class="concept-box"><strong>Agora a lógica é coerente com a situação real:</strong> pagamento insuficiente não encerra a venda; ele apenas impede o cálculo do troco e provoca uma nova tentativa de pagamento.</div>
      <div class="task-box"><h4>Simule o atendimento</h4><p>Use <code>preco = 12</code> e <code>quantidade = 3</code>. Calcule o desconto e o <code>totalFinal</code>. Depois tente pagar primeiro com R$ 20 e, na segunda tentativa, com R$ 40. Por fim, responda <code>&quot;N&quot;</code> para encerrar.</p></div>`;
  }

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;
  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
