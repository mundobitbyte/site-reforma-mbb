(() => {
  'use strict';

  const stage = Number(document.body.dataset.stage ?? -1);

  const wrap = (title, svg) => `<div class="diagram-label"><strong>${title}</strong><span>Toque ou clique no desenho para ampliar.</span></div>${svg}`;

  const setVisual = (index, title, svg) => {
    const target = document.querySelectorAll('.visual')[index];
    if (!target) return;
    target.classList.add('diagram-preview');
    target.classList.remove('visual-scroll');
    target.dataset.zoomable = 'true';
    target.dataset.diagramTitle = title;
    target.innerHTML = wrap(title, svg);
  };

  const insertAfter = (reference, element) => reference?.parentNode?.insertBefore(element, reference.nextSibling);
  const makeVisual = (title, svg) => {
    const box = document.createElement('div');
    box.className = 'visual diagram-preview';
    box.dataset.zoomable = 'true';
    box.dataset.diagramTitle = title;
    box.innerHTML = wrap(title, svg);
    return box;
  };
  const findHeading = prefix => [...document.querySelectorAll('.chapter h2')].find(h => h.textContent.trim().startsWith(prefix));
  const nextMatch = (start, selector) => {
    let node = start?.nextElementSibling;
    while (node) {
      if (node.matches?.(selector)) return node;
      if (node.tagName === 'H2') break;
      node = node.nextElementSibling;
    }
    return null;
  };

  if (stage === 3) {
    setVisual(0, 'Fluxograma AS-IS — processo atual', `
<svg viewBox="0 0 1040 500" role="img" aria-label="Fluxograma AS-IS corrigido da Assistência Técnica Conecta">
  <defs><marker id="as-arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker></defs>
  <g font-family="Segoe UI,Arial" font-size="16" text-anchor="middle">
    <rect x="35" y="220" width="130" height="58" rx="28" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="100" y="255">Entrada</text>
    <rect x="215" y="220" width="140" height="58" rx="10" fill="#fff" stroke="#1967d2" stroke-width="2"/><text x="285" y="255">Diagnóstico</text>
    <rect x="405" y="220" width="140" height="58" rx="10" fill="#fff" stroke="#1967d2" stroke-width="2"/><text x="475" y="255">Orçamento</text>
    <polygon points="650,200 720,249 650,298 580,249" fill="#fff8e8" stroke="#d97706" stroke-width="2"/><text x="650" y="243">Cliente</text><text x="650" y="263">aprova?</text>
    <rect x="790" y="85" width="140" height="58" rx="10" fill="#fff" stroke="#1967d2" stroke-width="2"/><text x="860" y="120">Reparo</text>
    <polygon points="860,200 930,249 860,298 790,249" fill="#fff8e8" stroke="#d97706" stroke-width="2"/><text x="860" y="243">Teste</text><text x="860" y="263">aprovado?</text>
    <rect x="790" y="385" width="140" height="58" rx="28" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="860" y="420">Entrega</text>
    <rect x="550" y="385" width="200" height="58" rx="28" fill="#fff3f3" stroke="#dc2626" stroke-width="2"/><text x="650" y="420">Encerrar sem reparo</text>
  </g>
  <g stroke="#334155" stroke-width="2.4" fill="none" marker-end="url(#as-arr)">
    <path d="M165 249 H215"/><path d="M355 249 H405"/><path d="M545 249 H580"/>
    <path d="M650 200 V114 H790"/>
    <path d="M860 143 V200"/>
    <path d="M860 298 V385"/>
    <path d="M790 249 H750 V114 H790"/>
    <path d="M650 298 V385"/>
  </g>
  <g font-family="Segoe UI,Arial" font-size="14" font-weight="800">
    <text x="700" y="106" fill="#047857">Sim</text><text x="665" y="345" fill="#b91c1c">Não</text>
    <text x="756" y="236" fill="#b91c1c">Não</text><text x="875" y="345" fill="#047857">Sim</text>
  </g>
</svg>`);
  }

  if (stage === 4) {
    setVisual(0, 'Diagrama de Contexto — fronteira do sistema', `
<svg viewBox="0 0 1120 600" role="img" aria-label="Diagrama de Contexto corrigido da Assistência Técnica Conecta">
  <defs><marker id="ctx-arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker></defs>
  <g font-family="Segoe UI,Arial" text-anchor="middle">
    <rect x="390" y="210" width="340" height="180" rx="28" fill="#eaf2ff" stroke="#1967d2" stroke-width="3"/><text x="560" y="282" font-size="24" font-weight="900">Sistema</text><text x="560" y="315" font-size="24" font-weight="900">Assistência Técnica Conecta</text><text x="560" y="350" font-size="14" fill="#52657b">fronteira em análise</text>
    <rect x="40" y="75" width="190" height="72" rx="12" fill="#fff" stroke="#334155" stroke-width="2"/><text x="135" y="119" font-size="18" font-weight="800">Atendente</text>
    <rect x="40" y="445" width="190" height="72" rx="12" fill="#fff" stroke="#334155" stroke-width="2"/><text x="135" y="489" font-size="18" font-weight="800">Técnico</text>
    <rect x="455" y="40" width="210" height="72" rx="12" fill="#fff" stroke="#334155" stroke-width="2"/><text x="560" y="84" font-size="18" font-weight="800">Cliente</text>
    <rect x="875" y="260" width="200" height="72" rx="12" fill="#fff" stroke="#334155" stroke-width="2"/><text x="975" y="304" font-size="18" font-weight="800">Fornecedor</text>
  </g>
  <g stroke="#334155" stroke-width="2.2" fill="none" marker-end="url(#ctx-arr)">
    <path d="M230 105 C305 105 325 230 390 248"/><path d="M390 285 C320 280 300 140 230 132"/>
    <path d="M230 480 C310 480 325 365 390 352"/><path d="M390 325 C315 340 300 455 230 460"/>
    <path d="M520 112 V210"/><path d="M600 210 V112"/>
    <path d="M730 270 C800 260 825 292 875 292"/><path d="M875 318 C820 330 795 352 730 350"/>
  </g>
  <g font-family="Segoe UI,Arial" font-size="13" fill="#334155">
    <text x="255" y="165">cadastro / abertura / entrega</text><text x="250" y="250">dados da ordem / situação</text>
    <text x="250" y="430">diagnóstico / reparo / teste</text><text x="255" y="380">ordem / autorização</text>
    <text x="420" y="165">dados / decisão</text><text x="615" y="165">orçamento / situação</text>
    <text x="770" y="250">pedido de peça</text><text x="770" y="385">disponibilidade / recebimento</text>
  </g>
</svg>`);

    setVisual(1, 'DFD Nível 0 — circulação dos dados', `
<svg viewBox="0 0 1240 760" role="img" aria-label="DFD Nível 0 corrigido da Assistência Técnica Conecta">
  <defs><marker id="dfd-arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker></defs>
  <g font-family="Segoe UI,Arial" text-anchor="middle">
    <rect x="25" y="80" width="170" height="62" fill="#fff" stroke="#334155" stroke-width="2"/><text x="110" y="118" font-size="17" font-weight="800">Atendente</text>
    <rect x="25" y="365" width="170" height="62" fill="#fff" stroke="#334155" stroke-width="2"/><text x="110" y="403" font-size="17" font-weight="800">Técnico</text>
    <rect x="25" y="600" width="170" height="62" fill="#fff" stroke="#334155" stroke-width="2"/><text x="110" y="638" font-size="17" font-weight="800">Cliente</text>

    <circle cx="365" cy="130" r="78" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="365" y="124" font-size="16" font-weight="900">1. Registrar</text><text x="365" y="148" font-size="16" font-weight="900">atendimento</text>
    <circle cx="365" cy="390" r="78" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="365" y="384" font-size="16" font-weight="900">2. Registrar</text><text x="365" y="408" font-size="16" font-weight="900">diagnóstico</text>
    <circle cx="690" cy="285" r="82" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="690" y="279" font-size="16" font-weight="900">3. Gerenciar</text><text x="690" y="303" font-size="16" font-weight="900">orçamento</text>
    <circle cx="690" cy="575" r="82" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="690" y="569" font-size="16" font-weight="900">4. Registrar</text><text x="690" y="593" font-size="16" font-weight="900">reparo e entrega</text>

    <rect x="1010" y="85" width="190" height="48" fill="#f8fafc" stroke="#64748b" stroke-width="2"/><text x="1105" y="115" font-size="15" font-weight="800">D1 Clientes</text>
    <rect x="1010" y="260" width="190" height="48" fill="#f8fafc" stroke="#64748b" stroke-width="2"/><text x="1105" y="290" font-size="15" font-weight="800">D2 Ordens</text>
    <rect x="1010" y="435" width="190" height="48" fill="#f8fafc" stroke="#64748b" stroke-width="2"/><text x="1105" y="465" font-size="15" font-weight="800">D3 Orçamentos</text>
  </g>
  <g stroke="#334155" stroke-width="2.1" fill="none" marker-end="url(#dfd-arr)">
    <path d="M195 110 H287"/><path d="M438 105 C650 55 850 75 1010 109"/><path d="M438 145 C650 185 820 230 1010 278"/>
    <path d="M195 395 H287"/><path d="M365 312 V208"/><path d="M440 390 C620 385 810 330 1010 292"/>
    <path d="M1010 292 C875 305 820 300 772 292"/><path d="M690 203 C640 165 520 170 430 180"/>
    <path d="M772 300 C860 340 920 405 1010 458"/><path d="M1010 458 C900 470 820 425 750 355"/>
    <path d="M195 625 C350 620 500 450 615 330"/><path d="M615 315 C480 430 330 575 195 610"/>
    <path d="M690 367 V493"/><path d="M195 410 C360 470 500 540 608 565"/><path d="M772 565 C870 520 915 350 1010 300"/><path d="M608 610 C470 650 330 655 195 640"/>
  </g>
  <g font-family="Segoe UI,Arial" font-size="12.5" fill="#334155">
    <text x="215" y="98">dados do atendimento</text><text x="650" y="72">cliente atualizado</text><text x="655" y="215">ordem aberta</text>
    <text x="215" y="382">diagnóstico / teste</text><text x="530" y="372">diagnóstico registrado</text><text x="825" y="280">dados da ordem</text>
    <text x="535" y="165">ordem para diagnóstico</text><text x="855" y="405">orçamento</text><text x="855" y="490">orçamento / decisão</text>
    <text x="315" y="535">decisão do orçamento</text><text x="315" y="585">orçamento / situação</text><text x="705" y="435">ordem autorizada</text>
    <text x="280" y="470">reparo / teste / entrega</text><text x="880" y="510">situação atualizada</text><text x="350" y="680">situação / entrega</text>
  </g>
</svg>`);
  }

  if (stage === 5) {
    setVisual(0, 'BPMN TO-BE — colaboração e responsabilidades', `
<svg viewBox="0 0 1580 700" role="img" aria-label="BPMN TO-BE corrigido com Cliente em pool separado">
  <defs>
    <marker id="bpmn-arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker>
    <marker id="bpmn-msg" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/></marker>
  </defs>
  <g font-family="Segoe UI,Arial">
    <rect x="20" y="25" width="1535" height="430" fill="#fff" stroke="#64748b" stroke-width="2"/><line x1="150" y1="25" x2="150" y2="455" stroke="#64748b"/><line x1="20" y1="165" x2="1555" y2="165" stroke="#94a3b8"/><line x1="20" y1="305" x2="1555" y2="305" stroke="#94a3b8"/>
    <g text-anchor="middle" font-size="16" font-weight="900"><text x="85" y="98">Atendimento</text><text x="85" y="238">Técnico</text><text x="85" y="378">Estoque</text></g>
    <rect x="20" y="505" width="1535" height="150" fill="#fff" stroke="#64748b" stroke-width="2"/><line x1="150" y1="505" x2="150" y2="655" stroke="#64748b"/><text x="85" y="585" text-anchor="middle" font-size="16" font-weight="900">Cliente</text>

    <g text-anchor="middle" font-size="14">
      <circle cx="190" cy="95" r="22" fill="#ecfdf5" stroke="#059669" stroke-width="3"/>
      <rect x="245" y="68" width="145" height="54" rx="10" fill="#eaf2ff" stroke="#1967d2"/><text x="317" y="91">Abrir ordem</text><text x="317" y="109">de serviço</text>
      <rect x="450" y="208" width="150" height="54" rx="10" fill="#eaf2ff" stroke="#1967d2"/><text x="525" y="231">Registrar</text><text x="525" y="249">diagnóstico</text>
      <rect x="660" y="68" width="170" height="54" rx="10" fill="#eaf2ff" stroke="#1967d2"/><text x="745" y="91">Gerar e enviar</text><text x="745" y="109">orçamento</text>
      <rect x="875" y="68" width="160" height="54" rx="10" fill="#eaf2ff" stroke="#1967d2"/><text x="955" y="91">Registrar</text><text x="955" y="109">decisão</text>
      <polygon points="1110,62 1160,95 1110,128 1060,95" fill="#fff8e8" stroke="#d97706" stroke-width="2"/><text x="1110" y="91">Aprovado?</text>
      <rect x="1080" y="348" width="175" height="54" rx="10" fill="#f8fafc" stroke="#64748b"/><text x="1167" y="371">Separar / solicitar</text><text x="1167" y="389">peça</text>
      <rect x="1240" y="208" width="145" height="54" rx="10" fill="#eaf2ff" stroke="#1967d2"/><text x="1312" y="231">Executar</text><text x="1312" y="249">reparo</text>
      <rect x="1410" y="208" width="110" height="54" rx="10" fill="#eaf2ff" stroke="#1967d2"/><text x="1465" y="241">Testar</text>
      <polygon points="1465,320 1515,353 1465,386 1415,353" fill="#fff8e8" stroke="#d97706" stroke-width="2"/><text x="1465" y="349">Teste</text><text x="1465" y="367">ok?</text>
      <circle cx="1465" cy="95" r="22" fill="#ecfdf5" stroke="#059669" stroke-width="3"/>

      <rect x="660" y="550" width="190" height="58" rx="10" fill="#f7f4ff" stroke="#7c3aed"/><text x="755" y="575">Analisar e responder</text><text x="755" y="594">orçamento</text>
    </g>

    <g stroke="#334155" stroke-width="2.1" fill="none" marker-end="url(#bpmn-arr)">
      <path d="M212 95 H245"/><path d="M390 95 C420 95 420 235 450 235"/><path d="M600 235 C630 235 630 95 660 95"/>
      <path d="M830 95 H875"/><path d="M1035 95 H1060"/>
      <path d="M1110 128 C1110 210 1120 310 1140 348"/><path d="M1255 375 C1290 360 1300 285 1305 262"/><path d="M1385 235 H1410"/>
      <path d="M1465 262 V320"/><path d="M1465 320 C1465 250 1400 180 1330 180 C1260 180 1260 208 1312 208"/>
      <path d="M1465 320 V117"/><path d="M1110 62 C1110 42 1350 42 1443 82"/>
    </g>
    <g stroke="#2563eb" stroke-width="2.2" fill="none" stroke-dasharray="8 7" marker-end="url(#bpmn-msg)">
      <path d="M745 122 V550"/><path d="M850 579 C900 579 925 260 950 122"/>
    </g>
    <g font-size="12.5" font-weight="800">
      <text x="1150" y="170" fill="#047857">Sim</text><text x="1225" y="57" fill="#b91c1c">Não</text>
      <text x="1510" y="300" fill="#047857">Sim</text><text x="1370" y="315" fill="#b91c1c">Não</text>
      <text x="765" y="340" fill="#2563eb">orçamento</text><text x="905" y="420" fill="#2563eb">decisão</text>
    </g>
  </g>
</svg>`);

    const practice = [...document.querySelectorAll('.practice-card li')];
    if (practice[1]) practice[1].innerHTML = 'Modele a assistência como um <strong>pool</strong> com lanes de Atendimento, Técnico e Estoque; represente o <strong>Cliente em pool separado</strong>.';
    const bpmnText = [...document.querySelectorAll('.chapter p')].find(p => p.textContent.includes('Dentro de um mesmo participante'));
    if (bpmnText) bpmnText.innerHTML = 'Dentro do mesmo <strong>pool</strong>, o fluxo de sequência pode atravessar lanes porque elas representam responsabilidades do mesmo participante. Entre participantes distintos — como a assistência e o Cliente — usamos <strong>fluxo de mensagem</strong>. O desenho acima mostra essa diferença.';
  }

  if (stage === 7) {
    setVisual(0, 'Casos de Uso — objetivos dos atores', `
<svg viewBox="0 0 1040 630" role="img" aria-label="Diagrama de Casos de Uso corrigido da Assistência Técnica Conecta">
  <g font-family="Segoe UI,Arial">
    <rect x="260" y="35" width="550" height="545" rx="14" fill="#fbfdff" stroke="#1967d2" stroke-width="2"/><text x="535" y="68" text-anchor="middle" font-size="18" font-weight="900" fill="#114b9e">Assistência Técnica Conecta</text>
    <g fill="#fff" stroke="#334155" stroke-width="2">
      <ellipse cx="440" cy="135" rx="105" ry="34"/><ellipse cx="625" cy="215" rx="110" ry="34"/><ellipse cx="440" cy="300" rx="105" ry="34"/><ellipse cx="625" cy="390" rx="110" ry="34"/><ellipse cx="440" cy="485" rx="110" ry="34"/>
    </g>
    <g text-anchor="middle" font-size="15"><text x="440" y="141">Abrir ordem</text><text x="625" y="221">Registrar diagnóstico</text><text x="440" y="306">Gerar orçamento</text><text x="625" y="396">Registrar decisão</text><text x="440" y="491">Consultar andamento</text></g>

    <g stroke="#334155" stroke-width="2" fill="none">
      <circle cx="100" cy="180" r="20"/><path d="M100 200 V260 M65 225 H135 M100 260 L73 305 M100 260 L127 305"/>
      <circle cx="100" cy="430" r="20"/><path d="M100 450 V510 M65 475 H135 M100 510 L73 555 M100 510 L127 555"/>
      <circle cx="925" cy="250" r="20"/><path d="M925 270 V330 M890 295 H960 M925 330 L898 375 M925 330 L952 375"/>
      <line x1="135" y1="225" x2="335" y2="145"/><line x1="135" y1="235" x2="335" y2="295"/><line x1="135" y1="245" x2="515" y2="385"/>
      <line x1="135" y1="475" x2="330" y2="482"/>
      <line x1="890" y1="295" x2="735" y2="220"/>
    </g>
    <g font-size="14" font-weight="800" text-anchor="middle"><text x="100" y="332">Atendente</text><text x="100" y="582">Cliente</text><text x="925" y="402">Técnico</text></g>
  </g>
</svg>`);
  }

  if (stage === 8) {
    const activity = `
<svg viewBox="0 0 900 560" role="img" aria-label="Diagrama de Atividades para registrar decisão do orçamento">
  <defs><marker id="act-arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker></defs>
  <g font-family="Segoe UI,Arial" text-anchor="middle">
    <circle cx="450" cy="45" r="16" fill="#111827"/>
    <rect x="350" y="90" width="200" height="54" rx="12" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="450" y="122" font-size="15" font-weight="800">Localizar ordem</text>
    <rect x="350" y="185" width="200" height="54" rx="12" fill="#eaf2ff" stroke="#1967d2" stroke-width="2"/><text x="450" y="217" font-size="15" font-weight="800">Exibir orçamento pendente</text>
    <polygon points="450,285 515,325 450,365 385,325" fill="#fff8e8" stroke="#d97706" stroke-width="2"/><text x="450" y="321" font-size="14" font-weight="800">Aprovado?</text>
    <rect x="145" y="405" width="210" height="54" rx="12" fill="#fff3f3" stroke="#dc2626" stroke-width="2"/><text x="250" y="437" font-size="15" font-weight="800">Registrar recusa</text>
    <rect x="545" y="405" width="210" height="54" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="650" y="437" font-size="15" font-weight="800">Liberar reparo</text>
    <circle cx="450" cy="515" r="18" fill="#fff" stroke="#111827" stroke-width="3"/><circle cx="450" cy="515" r="11" fill="#111827"/>
  </g>
  <g stroke="#334155" stroke-width="2.2" fill="none" marker-end="url(#act-arr)"><path d="M450 61 V90"/><path d="M450 144 V185"/><path d="M450 239 V285"/><path d="M385 325 H250 V405"/><path d="M515 325 H650 V405"/><path d="M250 459 C250 495 360 515 432 515"/><path d="M650 459 C650 495 540 515 468 515"/></g>
  <g font-family="Segoe UI,Arial" font-size="13" font-weight="800"><text x="300" y="315" fill="#b91c1c">Não</text><text x="585" y="315" fill="#047857">Sim</text></g>
</svg>`;

    const sequence = `
<svg viewBox="0 0 1040 560" role="img" aria-label="Diagrama de Sequência conceitual para registrar decisão do orçamento">
  <defs><marker id="seq-arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#334155"/></marker></defs>
  <g font-family="Segoe UI,Arial" text-anchor="middle">
    <g fill="#eaf2ff" stroke="#1967d2" stroke-width="2"><rect x="65" y="35" width="150" height="48" rx="8"/><rect x="310" y="35" width="150" height="48" rx="8"/><rect x="555" y="35" width="150" height="48" rx="8"/><rect x="800" y="35" width="150" height="48" rx="8"/></g>
    <g font-size="15" font-weight="900"><text x="140" y="65">Atendente</text><text x="385" y="65">Sistema</text><text x="630" y="65">Orçamento</text><text x="875" y="65">Ordem</text></g>
    <g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="7 6"><line x1="140" y1="83" x2="140" y2="520"/><line x1="385" y1="83" x2="385" y2="520"/><line x1="630" y1="83" x2="630" y2="520"/><line x1="875" y1="83" x2="875" y2="520"/></g>
  </g>
  <g stroke="#334155" stroke-width="2" fill="none" marker-end="url(#seq-arr)"><path d="M140 145 H385"/><path d="M385 225 H630"/><path d="M630 305 H385"/><path d="M385 385 H875"/><path d="M875 465 H385"/><path d="M385 505 H140"/></g>
  <g font-family="Segoe UI,Arial" font-size="13" fill="#334155"><text x="205" y="135">1 registrar decisão</text><text x="455" y="215">2 validar pendência</text><text x="455" y="295">3 orçamento válido</text><text x="560" y="375">4 alterar situação</text><text x="560" y="455">5 situação atualizada</text><text x="205" y="495">6 confirmar registro</text></g>
</svg>`;

    const domain = `
<svg viewBox="0 0 1080 610" role="img" aria-label="Modelo de Domínio conceitual da Assistência Técnica Conecta">
  <g font-family="Segoe UI,Arial" text-anchor="middle">
    <g fill="#fff" stroke="#1967d2" stroke-width="2">
      <rect x="55" y="75" width="180" height="70" rx="10"/><rect x="330" y="75" width="180" height="70" rx="10"/><rect x="605" y="75" width="210" height="70" rx="10"/>
      <rect x="330" y="285" width="210" height="70" rx="10"/><rect x="670" y="285" width="190" height="70" rx="10"/><rect x="670" y="475" width="190" height="70" rx="10"/>
    </g>
    <g font-size="17" font-weight="900"><text x="145" y="117">Cliente</text><text x="420" y="117">Equipamento</text><text x="710" y="117">Ordem de Serviço</text><text x="435" y="327">Diagnóstico</text><text x="765" y="327">Orçamento</text><text x="765" y="517">Item de Peça</text></g>
  </g>
  <g stroke="#334155" stroke-width="2" fill="none"><line x1="235" y1="110" x2="330" y2="110"/><line x1="510" y1="110" x2="605" y2="110"/><line x1="710" y1="145" x2="500" y2="285"/><line x1="735" y1="145" x2="765" y2="285"/><line x1="765" y1="355" x2="765" y2="475"/></g>
  <g font-family="Segoe UI,Arial" font-size="13" font-weight="800" fill="#334155"><text x="245" y="99">1</text><text x="305" y="99">0..*</text><text x="520" y="99">1</text><text x="580" y="99">0..*</text><text x="670" y="175">1</text><text x="510" y="265">0..1</text><text x="745" y="170">1</text><text x="775" y="270">0..1</text><text x="775" y="385">1</text><text x="775" y="460">0..*</text></g>
  <g font-family="Segoe UI,Arial" font-size="12.5" fill="#607089"><text x="260" y="130">possui</text><text x="535" y="130">aparece em</text><text x="540" y="210">gera</text><text x="770" y="215">possui</text><text x="785" y="420">detalha peças</text></g>
</svg>`;

    const states = `
<svg viewBox="0 0 1120 520" role="img" aria-label="Diagrama de Estados da Ordem de Serviço">
  <defs><marker id="st-arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#334155"/></marker></defs>
  <g font-family="Segoe UI,Arial" text-anchor="middle">
    <circle cx="55" cy="125" r="15" fill="#111827"/>
    <g fill="#eaf2ff" stroke="#1967d2" stroke-width="2"><rect x="100" y="95" width="140" height="60" rx="22"/><rect x="285" y="95" width="160" height="60" rx="22"/><rect x="490" y="95" width="190" height="60" rx="22"/><rect x="725" y="95" width="140" height="60" rx="22"/><rect x="910" y="95" width="135" height="60" rx="22"/></g>
    <g font-size="14" font-weight="900"><text x="170" y="131">Aberta</text><text x="365" y="131">Em diagnóstico</text><text x="585" y="122">Aguardando</text><text x="585" y="141">aprovação</text><text x="795" y="131">Em reparo</text><text x="977" y="131">Em teste</text></g>
    <rect x="725" y="300" width="160" height="60" rx="22" fill="#fff8e8" stroke="#d97706" stroke-width="2"/><text x="805" y="336" font-size="14" font-weight="900">Aguardando peça</text>
    <rect x="500" y="300" width="160" height="60" rx="22" fill="#fff3f3" stroke="#dc2626" stroke-width="2"/><text x="580" y="336" font-size="14" font-weight="900">Recusada</text>
    <rect x="920" y="300" width="150" height="60" rx="22" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="995" y="336" font-size="14" font-weight="900">Pronta</text>
    <rect x="920" y="420" width="150" height="60" rx="22" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="995" y="456" font-size="14" font-weight="900">Entregue</text>
  </g>
  <g stroke="#334155" stroke-width="2.1" fill="none" marker-end="url(#st-arr)"><path d="M70 125 H100"/><path d="M240 125 H285"/><path d="M445 125 H490"/><path d="M680 125 H725"/><path d="M865 125 H910"/><path d="M585 155 V300"/><path d="M725 125 C700 175 730 260 805 300"/><path d="M805 300 C805 245 810 190 810 155"/><path d="M977 155 C980 210 990 250 995 300"/><path d="M995 360 V420"/><path d="M920 330 C850 330 830 230 830 155"/></g>
  <g font-family="Segoe UI,Arial" font-size="12.5" font-weight="800"><text x="600" y="225" fill="#b91c1c">recusa</text><text x="740" y="225" fill="#b45309">falta peça</text><text x="855" y="250" fill="#047857">peça disponível</text><text x="930" y="235" fill="#b91c1c">teste falha</text><text x="1010" y="230" fill="#047857">teste ok</text></g>
</svg>`;

    const h1 = findHeading('1.');
    const oldActivity = nextMatch(h1, '.flow');
    if (oldActivity) oldActivity.replaceWith(makeVisual('Diagrama de Atividades — decisão do orçamento', activity));

    const h2 = findHeading('2.');
    const seqTable = nextMatch(h2, '.table-wrap');
    if (seqTable) insertAfter(seqTable, makeVisual('Diagrama de Sequência — ordem das interações', sequence));

    const h3 = findHeading('3.');
    const domainTable = nextMatch(h3, '.table-wrap');
    if (domainTable) insertAfter(domainTable, makeVisual('Modelo de Domínio — conceitos e relações', domain));

    const h4 = findHeading('4.');
    const oldStates = nextMatch(h4, '.flow');
    if (oldStates) oldStates.replaceWith(makeVisual('Diagrama de Estados — ciclo de vida da ordem', states));
  }

  window.dispatchEvent(new CustomEvent('mbb:visuais-prontos', { detail: { stage } }));
})();
