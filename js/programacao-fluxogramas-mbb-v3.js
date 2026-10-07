(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined') return;

  const esc = value => String(value);
  const text = (x, y, value, cls = 'node-title', anchor = 'middle') =>
    `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${esc(value)}</text>`;

  const terminal = (cx, cy, label, rx = 72, ry = 25) =>
    `<ellipse class="node terminal" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"></ellipse>${text(cx, cy + 6, label)}`;

  const manualInput = (cx, cy, w, h, variable) => {
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `<polygon class="node manual-input" points="${x},${y + 14} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}"></polygon>${text(cx, cy + 6, variable)}`;
  };

  const display = (cx, cy, w, h, line1, line2 = '') => {
    const x = cx - w / 2;
    const y = cy - h / 2;
    const r = x + w;
    const d = `M${x + 24} ${y} H${r - 28} Q${r} ${y} ${r} ${cy} Q${r} ${y + h} ${r - 28} ${y + h} H${x + 24} L${x} ${cy} Z`;
    const firstY = line2 ? cy - 3 : cy + 5;
    return `<path class="node display" d="${d}"></path>${text(cx + 5, firstY, line1)}${line2 ? text(cx + 5, cy + 17, line2, 'node-text') : ''}`;
  };

  const process = (cx, cy, w, h, formula) => {
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `<rect class="node process" x="${x}" y="${y}" width="${w}" height="${h}" rx="2"></rect>${text(cx, cy + 6, formula)}`;
  };

  const decision = (cx, cy, w, h, line1, line2 = '') => {
    const points = `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
    return `<polygon class="node decision" points="${points}"></polygon>${text(cx, line2 ? cy - 2 : cy + 5, line1)}${line2 ? text(cx, cy + 18, line2) : ''}`;
  };

  const connector = (cx, cy, label) =>
    `<circle class="node connector" cx="${cx}" cy="${cy}" r="19"></circle>${text(cx, cy + 6, label)}`;

  const arrowDown = (x, y1, y2) =>
    `<path class="arrow" d="M${x} ${y1}V${y2 - 9}"></path><polygon points="${x},${y2} ${x - 7},${y2 - 12} ${x + 7},${y2 - 12}" fill="#1e3a8a"></polygon>`;

  const arrowRight = (x1, y, x2) =>
    `<path class="arrow" d="M${x1} ${y}H${x2 - 9}"></path><polygon points="${x2},${y} ${x2 - 12},${y - 7} ${x2 - 12},${y + 7}" fill="#1e3a8a"></polygon>`;

  const arrowLeft = (x1, y, x2) =>
    `<path class="arrow" d="M${x1} ${y}H${x2 + 9}"></path><polygon points="${x2},${y} ${x2 + 12},${y - 7} ${x2 + 12},${y + 7}" fill="#1e3a8a"></polygon>`;

  const panel = (title, subtitle, viewBox, body, aria) => `
    <div class="flowchart-panel-v3">
      <div class="flowchart-panel-heading"><strong>${title}</strong><span>${subtitle}</span></div>
      <svg class="flowchart-svg-v3" viewBox="${viewBox}" role="img" aria-label="${aria}">${body}</svg>
    </div>`;

  const symbols = `
    <div class="flowchart-symbols-v3">
      <div class="flowchart-symbol-v3"><strong>Terminal — início/fim</strong><svg viewBox="0 0 240 88">${terminal(120,44,'INÍCIO / FIM',76,25)}</svg><p>Marca onde o algoritmo começa ou termina.</p></div>
      <div class="flowchart-symbol-v3"><strong>Display — exibição na tela</strong><svg viewBox="0 0 240 88">${display(120,44,176,52,'&quot;Total = &quot;, total')}</svg><p>Mostra mensagens ou resultados. Texto fica entre aspas; variável pode vir separada por vírgula.</p></div>
      <div class="flowchart-symbol-v3"><strong>Entrada manual — teclado</strong><svg viewBox="0 0 240 88">${manualInput(120,44,164,52,'preco')}</svg><p>Representa um valor digitado pelo usuário. Dentro do símbolo fica apenas a variável que recebe o dado.</p></div>
      <div class="flowchart-symbol-v3"><strong>Processamento</strong><svg viewBox="0 0 240 88">${process(120,44,176,52,'total = preco * qtd')}</svg><p>Representa cálculo ou atribuição. Dentro do retângulo aparece a fórmula ou operação executada.</p></div>
      <div class="flowchart-symbol-v3"><strong>Decisão</strong><svg viewBox="0 0 240 100">${decision(120,50,170,78,'valorPago','&gt;= total?')}</svg><p>Representa uma condição. As saídas mostram caminhos como SIM e NÃO.</p></div>
      <div class="flowchart-symbol-v3"><strong>Conector</strong><svg viewBox="0 0 240 88">${connector(120,44,'A')}</svg><p>Continua o fluxo em outro ponto sem criar linhas longas ou cruzadas.</p></div>
    </div>`;

  const seq = panel(
    'Fluxograma 1 — sequência',
    'Cada comando ocupa seu próprio símbolo.',
    '0 0 540 690',
    terminal(270,35,'INÍCIO') +
    arrowDown(270,60,88) +
    display(270,118,300,54,'&quot;Digite o preço do produto&quot;') +
    arrowDown(270,145,174) +
    manualInput(270,204,220,54,'preco') +
    arrowDown(270,231,260) +
    display(270,290,300,54,'&quot;Digite a quantidade&quot;') +
    arrowDown(270,317,346) +
    manualInput(270,376,220,54,'quantidade') +
    arrowDown(270,403,432) +
    process(270,462,280,54,'total = preco * quantidade') +
    arrowDown(270,489,518) +
    display(270,548,300,54,'&quot;Total = &quot;, total') +
    arrowDown(270,575,614) +
    terminal(270,642,'FIM'),
    'Fluxograma sequencial com mensagens, entradas manuais, fórmula e saída do total'
  );

  const dec = panel(
    'Fluxograma 2 — decisão',
    'A sequência cresce quando o pagamento pode ser insuficiente.',
    '0 0 680 1030',
    terminal(260,35,'INÍCIO') +
    arrowDown(260,60,88) +
    display(260,118,300,54,'&quot;Digite o preço do produto&quot;') +
    arrowDown(260,145,174) +
    manualInput(260,204,220,54,'preco') +
    arrowDown(260,231,260) +
    display(260,290,300,54,'&quot;Digite a quantidade&quot;') +
    arrowDown(260,317,346) +
    manualInput(260,376,220,54,'quantidade') +
    arrowDown(260,403,432) +
    process(260,462,280,54,'total = preco * quantidade') +
    arrowDown(260,489,518) +
    display(260,548,300,54,'&quot;Digite o valor pago&quot;') +
    arrowDown(260,575,604) +
    manualInput(260,634,220,54,'valorPago') +
    arrowDown(260,661,692) +
    decision(260,752,240,118,'valorPago','&gt;= total?') +
    arrowDown(260,811,842) +
    text(280,832,'SIM','branch-label','start') +
    process(260,872,270,54,'troco = valorPago - total') +
    arrowDown(260,899,928) +
    display(260,958,300,54,'&quot;Troco = &quot;, troco') +
    arrowDown(260,985,1014) +
    arrowRight(380,752,470) +
    text(421,735,'NÃO','branch-label') +
    display(565,752,190,64,'&quot;Valor','insuficiente&quot;') +
    terminal(565,845,'FIM',60,23),
    'Fluxograma de decisão para verificar se o valor pago é suficiente'
  );

  const loop = panel(
    'Fluxograma 3 — repetição',
    'A decisão final determina se começa outro atendimento.',
    '0 0 620 980',
    terminal(310,34,'INÍCIO') +
    arrowDown(310,59,86) +
    connector(310,108,'A') +
    arrowDown(310,127,154) +
    display(310,184,300,54,'&quot;Digite o preço do produto&quot;') +
    arrowDown(310,211,238) +
    manualInput(310,268,220,54,'preco') +
    arrowDown(310,295,322) +
    display(310,352,300,54,'&quot;Digite a quantidade&quot;') +
    arrowDown(310,379,406) +
    manualInput(310,436,220,54,'quantidade') +
    arrowDown(310,463,490) +
    process(310,520,280,54,'total = preco * quantidade') +
    arrowDown(310,547,574) +
    display(310,604,300,54,'&quot;Total = &quot;, total') +
    arrowDown(310,631,658) +
    display(310,688,320,54,'&quot;Há outro cliente? (S/N)&quot;') +
    arrowDown(310,715,742) +
    manualInput(310,772,220,54,'opcao') +
    arrowDown(310,799,826) +
    decision(310,876,230,100,'opcao','= &quot;S&quot;?') +
    arrowLeft(195,876,110) +
    text(155,860,'SIM','branch-label') +
    connector(78,876,'A') +
    arrowRight(425,876,500) +
    text(463,860,'NÃO','branch-label') +
    terminal(555,876,'FIM',48,22),
    'Fluxograma com repetição de atendimentos usando conector A'
  );

  const integrated = panel(
    'Fluxograma 4 — atendimento completo',
    'Sequência, decisão e repetição no mesmo processo, sem linhas cruzadas.',
    '0 0 700 1320',
    terminal(290,34,'INÍCIO') +
    arrowDown(290,59,84) +
    connector(290,106,'A') +
    arrowDown(290,125,150) +
    display(290,180,300,54,'&quot;Digite o preço do produto&quot;') +
    arrowDown(290,207,232) +
    manualInput(290,262,220,54,'preco') +
    arrowDown(290,289,314) +
    display(290,344,300,54,'&quot;Digite a quantidade&quot;') +
    arrowDown(290,371,396) +
    manualInput(290,426,220,54,'quantidade') +
    arrowDown(290,453,478) +
    process(290,508,280,54,'total = preco * quantidade') +
    arrowDown(290,535,560) +
    display(290,590,300,54,'&quot;Total = &quot;, total') +
    arrowDown(290,617,642) +
    connector(290,664,'P') +
    arrowDown(290,683,708) +
    display(290,738,300,54,'&quot;Digite o valor pago&quot;') +
    arrowDown(290,765,790) +
    manualInput(290,820,220,54,'valorPago') +
    arrowDown(290,847,872) +
    decision(290,927,240,108,'valorPago','&gt;= total?') +
    arrowDown(290,981,1006) +
    text(310,995,'SIM','branch-label','start') +
    process(290,1036,270,54,'troco = valorPago - total') +
    arrowDown(290,1063,1088) +
    display(290,1118,300,54,'&quot;Troco = &quot;, troco') +
    arrowRight(410,927,500) +
    text(455,910,'NÃO','branch-label') +
    display(592,927,185,62,'&quot;Valor','insuficiente&quot;') +
    arrowDown(592,958,995) +
    connector(592,1018,'P') +
    text(592,1050,'volta ao conector P','node-text') +
    arrowDown(290,1145,1170) +
    display(290,1200,320,54,'&quot;Há outro cliente? (S/N)&quot;') +
    arrowDown(290,1227,1252) +
    manualInput(290,1282,220,54,'opcao') +
    decision(520,1220,0,0,'') ,
    'Fluxograma completo da cantina com entrada manual, display, processamento, decisão e repetição'
  );

  const integratedFixed = integrated.replace(
    decision(520,1220,0,0,'') ,
    `${arrowDown(290,1309,1332)}`
  );

  const integratedFinal = panel(
    'Fluxograma 4 — atendimento completo',
    'Sequência, decisão e repetição no mesmo processo, sem linhas cruzadas.',
    '0 0 700 1450',
    terminal(290,34,'INÍCIO') +
    arrowDown(290,59,84) + connector(290,106,'A') + arrowDown(290,125,150) +
    display(290,180,300,54,'&quot;Digite o preço do produto&quot;') + arrowDown(290,207,232) +
    manualInput(290,262,220,54,'preco') + arrowDown(290,289,314) +
    display(290,344,300,54,'&quot;Digite a quantidade&quot;') + arrowDown(290,371,396) +
    manualInput(290,426,220,54,'quantidade') + arrowDown(290,453,478) +
    process(290,508,280,54,'total = preco * quantidade') + arrowDown(290,535,560) +
    display(290,590,300,54,'&quot;Total = &quot;, total') + arrowDown(290,617,642) +
    connector(290,664,'P') + arrowDown(290,683,708) +
    display(290,738,300,54,'&quot;Digite o valor pago&quot;') + arrowDown(290,765,790) +
    manualInput(290,820,220,54,'valorPago') + arrowDown(290,847,872) +
    decision(290,927,240,108,'valorPago','&gt;= total?') +
    arrowDown(290,981,1006) + text(310,995,'SIM','branch-label','start') +
    process(290,1036,270,54,'troco = valorPago - total') + arrowDown(290,1063,1088) +
    display(290,1118,300,54,'&quot;Troco = &quot;, troco') +
    arrowRight(410,927,500) + text(455,910,'NÃO','branch-label') +
    display(592,927,185,62,'&quot;Valor','insuficiente&quot;') + arrowDown(592,958,995) +
    connector(592,1018,'P') + text(592,1050,'retorna ao ponto P','node-text') +
    arrowDown(290,1145,1170) + display(290,1200,320,54,'&quot;Há outro cliente? (S/N)&quot;') +
    arrowDown(290,1227,1252) + manualInput(290,1282,220,54,'opcao') +
    arrowDown(290,1309,1334) + decision(290,1382,230,96,'opcao','= &quot;S&quot;?') +
    arrowLeft(175,1382,92) + text(134,1365,'SIM','branch-label') + connector(62,1382,'A') +
    arrowRight(405,1382,490) + text(448,1365,'NÃO','branch-label') + terminal(552,1382,'FIM',48,22),
    'Fluxograma completo da cantina com mensagens, entradas manuais, fórmulas, decisões e repetição'
  );

  const step = id => pensarSteps.find(item => item.id === id);

  const s41 = step(41);
  if (s41) {
    s41.title = 'Os símbolos tradicionais que vamos usar';
    s41.objective = 'Distinguir exibição na tela, entrada manual pelo teclado, processamento, decisão, início/fim e conectores.';
    s41.content = `
      <div class="hero-box"><span class="part-badge">Reconhecer</span><h3>Agora a forma do símbolo também informa o que está acontecendo</h3><p>Em vez de usar um único símbolo genérico para entrada e saída, este módulo vai separar a <strong>mensagem exibida</strong> da <strong>entrada digitada pelo usuário</strong>. Isso deixa o fluxograma mais próximo da interação real do programa.</p></div>
      ${symbols}
      <div class="flowchart-rule-v3"><strong>Regra usada daqui em diante:</strong> um comando, um símbolo. Se houver duas entradas, haverá dois símbolos de entrada manual. O símbolo já indica a ação; por isso dentro dele fica apenas a variável.</div>
      <div class="flowchart-convention"><strong>Exemplo de diálogo:</strong><br><code>Display: &quot;Digite o preço do produto&quot;</code><br><code>Entrada manual: preco</code><br><code>Processamento: total = preco * quantidade</code><br><code>Display: &quot;Total = &quot;, total</code></div>`;
  }

  const s42 = step(42);
  if (s42) {
    s42.title = 'Como ler o desenho sem depender de palavras extras';
    s42.objective = 'Ler cada símbolo pelo seu significado e acompanhar a execução na ordem indicada pelas setas.';
    s42.content = `
      <div class="hero-box"><span class="part-badge">Ler</span><h3>O próprio símbolo já diz que tipo de comando está acontecendo</h3><p>Por isso não precisamos escrever “ler preço”, “mostrar total” ou “calcular total”. O desenho informa a categoria do comando; o conteúdo informa apenas <strong>o dado, a mensagem, a fórmula ou a condição</strong>.</p></div>
      <div class="flowchart-step-chain"><span>Display<br>&quot;Digite o preço&quot;</span><b>→</b><span>Entrada manual<br>preco</span><b>→</b><span>Processamento<br>total = preco * quantidade</span><b>→</b><span>Display<br>&quot;Total = &quot;, total</span></div>
      <ol class="flowchart-check"><li>Comece no terminal <strong>INÍCIO</strong>.</li><li>Siga uma seta por vez.</li><li>Em um display, leia o texto ou resultado exibido.</li><li>Em uma entrada manual, identifique qual variável recebe o valor digitado.</li><li>Em processamento, execute mentalmente a fórmula.</li><li>Em decisão, avalie a condição e escolha o caminho correspondente.</li></ol>
      <div class="concept-box"><strong>Ideia-chave:</strong> ler um fluxograma é simular a execução do algoritmo.</div>`;
  }

  const s43 = step(43);
  if (s43) {
    s43.title = 'Sequência: cada comando acontece uma vez, na ordem';
    s43.objective = 'Acompanhar uma interação simples em que mensagem, entrada, cálculo e saída aparecem em símbolos separados.';
    s43.content = `
      <div class="hero-box"><span class="flowchart-badge">Sequência</span><h3>Começamos com uma venda sem desvios</h3><p>O sistema pede o preço, recebe <code>preco</code>, pede a quantidade, recebe <code>quantidade</code>, calcula o total e mostra o resultado. Nada é agrupado em um único bloco.</p></div>
      ${seq}
      <div class="concept-box"><strong>Estrutura sequencial:</strong> cada instrução é executada uma vez, de cima para baixo, na ordem indicada pelas setas.</div>
      <div class="task-box"><h4>Confira</h4><p>Se <code>preco = 7,50</code> e <code>quantidade = 2</code>, qual valor chega ao display <code>&quot;Total = &quot;, total</code>?</p></div>`;
  }

  const s44 = step(44);
  if (s44) {
    s44.title = 'Decisão: o fluxo precisa escolher um caminho';
    s44.objective = 'Usar uma condição para decidir se o programa calcula o troco ou informa que o pagamento é insuficiente.';
    s44.content = `
      <div class="hero-box"><span class="flowchart-badge">Decisão</span><h3>A venda ganhou uma situação que a sequência sozinha não resolve</h3><p>Depois de calcular o total, o sistema precisa pedir o valor pago. Só pode calcular o troco quando <code>valorPago &gt;= total</code>.</p></div>
      ${dec}
      <p>Observe que a mensagem <code>&quot;Digite o valor pago&quot;</code> aparece em um display e a variável <code>valorPago</code> aparece depois, em um símbolo próprio de entrada manual.</p>
      <div class="danger-box"><strong>Erro a evitar:</strong> escrever “verificar pagamento” no losango. O losango deve conter a condição que realmente será avaliada: <code>valorPago &gt;= total?</code></div>
      <div class="task-box"><h4>Teste os dois caminhos</h4><p>Use <code>total = 30</code>. Primeiro considere <code>valorPago = 50</code>; depois <code>valorPago = 20</code>. Diga qual saída aparece em cada caso.</p></div>`;
  }

  const s45 = step(45);
  if (s45) {
    s45.title = 'Repetição: depois de uma venda, pode começar outra';
    s45.objective = 'Representar uma repetição usando pergunta, entrada da resposta, decisão e conector, sem linhas cruzadas.';
    s45.content = `
      <div class="hero-box"><span class="flowchart-badge">Repetição</span><h3>A cantina atende uma fila, não apenas um cliente</h3><p>Depois de mostrar o total, o sistema pergunta se existe outro cliente. A resposta digitada fica em <code>opcao</code>. Se for <code>&quot;S&quot;</code>, o conector A indica que começa um novo atendimento.</p></div>
      ${loop}
      <div class="concept-box"><strong>Repetição:</strong> não existe um “símbolo mágico de repetir”. O laço aparece quando uma decisão faz o fluxo voltar a um ponto anterior. O conector evita uma seta comprida atravessando o desenho.</div>
      <div class="task-box"><h4>Preveja</h4><p>Se três clientes forem atendidos, quantas vezes os símbolos <code>preco</code> e <code>quantidade</code> serão percorridos?</p></div>`;
  }

  const s46 = step(46);
  if (s46) {
    s46.title = 'Tudo junto: o atendimento completo da cantina';
    s46.objective = 'Integrar sequência, decisão e repetição em um único fluxograma, usando um símbolo para cada comando.';
    s46.content = `
      <div class="hero-box"><span class="part-badge">Integrar</span><h3>Agora o desenho representa uma interação completa</h3><p>O programa pede os dados da venda, calcula o total, pede o pagamento, decide se ele é suficiente e, ao terminar, pergunta se deve iniciar outro atendimento.</p></div>
      ${integratedFinal}
      <div class="flowchart-reading"><div><strong>Sequência</strong>Mensagens → entradas → fórmula → saída.</div><div><strong>Decisão</strong><code>valorPago &gt;= total?</code></div><div><strong>Repetição</strong>Conector P pede novo pagamento; conector A inicia novo cliente.</div></div>
      <div class="task-box"><h4>Simule</h4><p>Use <code>preco = 8</code>, <code>quantidade = 3</code> e primeiro <code>valorPago = 20</code>. Depois informe <code>valorPago = 30</code>. Percorra os conectores e explique o caminho até o fim.</p></div>`;
  }

  const s47 = step(47);
  if (s47) {
    s47.title = 'Como construir seu próprio fluxograma';
    s47.content = `
      <div class="hero-box"><span class="part-badge">Construir</span><h3>Primeiro escreva o diálogo e as operações; depois escolha as formas</h3><p>Isso evita colocar frases vagas dentro dos símbolos e ajuda a manter um comando por bloco.</p></div>
      <ol class="flowchart-check"><li>Liste cada mensagem exibida ao usuário.</li><li>Logo depois de cada pedido de dado, coloque a entrada manual correspondente.</li><li>Escreva cálculos como fórmulas completas.</li><li>Escreva decisões como condições que podem ser respondidas.</li><li>Use uma saída separada para cada resultado importante.</li><li>Use conectores quando um retorno longo deixaria o desenho confuso.</li><li>Teste todos os caminhos com valores reais.</li></ol>
      <div class="flowchart-rule-v3"><strong>Checklist MbB:</strong> o símbolo informa o tipo de comando; o conteúdo interno informa apenas mensagem, variável, fórmula ou condição.</div>`;
  }

  const s48 = step(48);
  if (s48) {
    s48.title = 'Pratique com a mesma convenção';
    s48.content = `
      <div class="hero-box"><span class="part-badge">Aplicar</span><h3>Agora você desenha sem receber os blocos prontos</h3><p>Em todas as atividades, use display antes da entrada quando o usuário precisar saber o que digitar, entrada manual apenas com a variável, processamento com fórmula e decisão com condição.</p></div>
      <h3>Nível 1 — sequência</h3><div class="task-box"><p>Peça duas notas em mensagens separadas, receba <code>nota1</code> e <code>nota2</code>, calcule <code>media = (nota1 + nota2) / 2</code> e mostre <code>&quot;Média = &quot;, media</code>.</p></div>
      <h3>Nível 2 — decisão</h3><div class="task-box"><p>Depois da média, use a condição <code>media &gt;= 6?</code> e mostre <code>&quot;Aprovado&quot;</code> ou <code>&quot;Recuperação&quot;</code>.</p></div>
      <h3>Nível 3 — repetição</h3><div class="task-box"><p>Depois do resultado, mostre <code>&quot;Calcular outro aluno? (S/N)&quot;</code>, receba <code>opcao</code> e use um conector para repetir quando <code>opcao = &quot;S&quot;</code>.</p></div>
      <div class="concept-box"><strong>Você dominou esta etapa quando consegue:</strong> escolher o símbolo correto, separar cada comando, escrever fórmulas e condições dentro dos blocos certos e montar um fluxo legível sem linhas cruzadas.</div>`;
  }

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;
  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
