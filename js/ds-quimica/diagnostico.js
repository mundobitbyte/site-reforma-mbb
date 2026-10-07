(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const graphA = `
    <div class="concept-box"><strong class="card-title">Observe o gráfico</strong>
      <svg class="chemistry-graph" viewBox="0 0 620 310" role="img" aria-label="Gráfico de temperatura da água ao longo do tempo: zero minuto e vinte graus Celsius, cinco minutos e trinta graus Celsius, dez minutos e quarenta graus Celsius.">
        <line class="graph-grid" x1="70" y1="240" x2="570" y2="240"/><line class="graph-grid" x1="70" y1="140" x2="570" y2="140"/><line class="graph-grid" x1="70" y1="40" x2="570" y2="40"/>
        <line class="graph-axis" x1="70" y1="240" x2="585" y2="240"/><line class="graph-axis" x1="70" y1="250" x2="70" y2="30"/>
        <polyline class="graph-line" points="70,240 320,140 570,40"/><circle class="graph-point" cx="70" cy="240" r="6"/><circle class="graph-point" cx="320" cy="140" r="6"/><circle class="graph-point" cx="570" cy="40" r="6"/>
        <text class="graph-text" x="65" y="262">0</text><text class="graph-text" x="315" y="262">5</text><text class="graph-text" x="560" y="262">10</text>
        <text class="graph-text" x="35" y="245">20</text><text class="graph-text" x="35" y="145">30</text><text class="graph-text" x="35" y="45">40</text>
        <text class="graph-label" x="280" y="295">Tempo (min)</text><text class="graph-label" x="8" y="28">Temperatura (°C)</text>
      </svg>
    </div>`;

  const graphB = `
    <div class="concept-box"><strong class="card-title">Observe o gráfico</strong>
      <svg class="chemistry-graph" viewBox="0 0 620 310" role="img" aria-label="Gráfico de temperatura ao longo do tempo: zero minuto e dezoito graus Celsius, quatro minutos e vinte e seis graus Celsius, oito minutos e trinta e quatro graus Celsius.">
        <line class="graph-grid" x1="70" y1="240" x2="570" y2="240"/><line class="graph-grid" x1="70" y1="140" x2="570" y2="140"/><line class="graph-grid" x1="70" y1="40" x2="570" y2="40"/>
        <line class="graph-axis" x1="70" y1="240" x2="585" y2="240"/><line class="graph-axis" x1="70" y1="250" x2="70" y2="30"/>
        <polyline class="graph-line" points="70,240 320,140 570,40"/><circle class="graph-point" cx="70" cy="240" r="6"/><circle class="graph-point" cx="320" cy="140" r="6"/><circle class="graph-point" cx="570" cy="40" r="6"/>
        <text class="graph-text" x="65" y="262">0</text><text class="graph-text" x="315" y="262">4</text><text class="graph-text" x="565" y="262">8</text>
        <text class="graph-text" x="35" y="245">18</text><text class="graph-text" x="35" y="145">26</text><text class="graph-text" x="35" y="45">34</text>
        <text class="graph-label" x="280" y="295">Tempo (min)</text><text class="graph-label" x="8" y="28">Temperatura (°C)</text>
      </svg>
    </div>`;

  const bankA = [
    { area:'Razão e proporcionalidade', prompt:'Para identificar 8 tubos de amostra, uma turma usa 4 etiquetas. Mantendo a mesma proporção, quantas etiquetas seriam usadas para 12 tubos?', options:['6 etiquetas','8 etiquetas','16 etiquetas','Ainda não sei'], answer:0 },
    { area:'Frações e decimais', prompt:'Um recipiente está com 0,5 L de água. Esse valor corresponde a qual fração de 1 litro?', options:['Um quarto','Metade','Dois litros','Ainda não sei'], answer:1 },
    { area:'Unidades de massa e volume', prompt:'Uma amostra tem massa de 1,5 kg. Quantos gramas isso representa?', options:['150 g','1.500 g','15.000 g','Ainda não sei'], answer:1 },
    { area:'Potências de 10', prompt:'O número 3,2 × 10³ corresponde a:', options:['32','320','3.200','Ainda não sei'], answer:2 },
    { area:'Leitura de tabelas', prompt:'Uma tabela mostra: 1 amostra → 5 g; 2 amostras → 10 g; 3 amostras → 15 g. Mantendo o padrão, qual massa corresponde a 4 amostras iguais?', options:['15 g','20 g','25 g','Ainda não sei'], answer:1 },
    { area:'Leitura de gráficos', prompt:'Entre 5 min e 10 min, quanto a temperatura aumentou no gráfico?', visual:graphA, options:['5 °C','10 °C','20 °C','Ainda não sei'], answer:1 },
    { area:'Evidência experimental', prompt:'Dois recipientes iguais são comparados num teste. A única diferença entre eles deve ser a característica que queremos investigar. Por que isso ajuda?', options:['Porque torna os recipientes visualmente mais bonitos','Porque ajuda a relacionar a diferença observada à variável que foi modificada','Porque elimina a necessidade de medir resultados','Ainda não sei'], answer:1 },
    { area:'Segurança e leitura de rótulos', prompt:'O rótulo de um produto informa “não misture com outros produtos”. Qual é a atitude adequada?', options:['Misturar uma pequena quantidade para testar','Seguir a orientação e não fazer misturas desconhecidas','Ignorar o rótulo se o produto tiver cheiro fraco','Ainda não sei'], answer:1 },
    { area:'Concepção inicial: dissolução', prompt:'Sal é colocado em água e, depois de mexer, deixa de ser visível. Qual explicação parece fazer mais sentido para você?', options:['O sal deixou de existir','O sal continua presente, distribuído na água mesmo sem ser visto a olho nu','A água se transformou totalmente em sal','Ainda não sei'], answer:1, scored:false },
    { area:'Concepção inicial: modelos científicos', prompt:'Quando um livro desenha um átomo, esse desenho deve ser entendido como:', options:['Uma fotografia exata do átomo','Um modelo usado para representar e explicar aspectos que não observamos diretamente daquele modo','Uma imagem correta apenas se usar cores realistas','Ainda não sei'], answer:1, scored:false }
  ];

  const bankB = [
    { area:'Razão e proporcionalidade', prompt:'Se 3 caixas iguais comportam 18 frascos, quantos frascos cabem em 5 caixas iguais, mantendo a mesma quantidade por caixa?', options:['20 frascos','30 frascos','90 frascos','Ainda não sei'], answer:1 },
    { area:'Frações e decimais', prompt:'0,25 de um litro corresponde a:', options:['Um quarto de litro','Meio litro','Dois litros e meio','Ainda não sei'], answer:0 },
    { area:'Unidades de massa e volume', prompt:'Uma amostra tem massa de 0,75 kg. Quantos gramas isso representa?', options:['75 g','750 g','7.500 g','Ainda não sei'], answer:1 },
    { area:'Potências de 10', prompt:'O número 4,5 × 10² corresponde a:', options:['45','450','4.500','Ainda não sei'], answer:1 },
    { area:'Leitura de tabelas', prompt:'Uma tabela mostra: 0 min → 18 °C; 2 min → 22 °C; 4 min → 26 °C; 6 min → 30 °C. A cada 2 minutos, a temperatura aumentou quanto?', options:['2 °C','4 °C','6 °C','Ainda não sei'], answer:1 },
    { area:'Leitura de gráficos', prompt:'Entre 4 min e 8 min, quanto a temperatura aumentou no gráfico?', visual:graphB, options:['4 °C','8 °C','16 °C','Ainda não sei'], answer:1 },
    { area:'Evidência experimental', prompt:'Um teste compara dois materiais, mas muda ao mesmo tempo o material, o tamanho da amostra e o tempo de aquecimento. Qual é o principal problema?', options:['Fica difícil saber qual mudança produziu a diferença observada','O teste fica mais científico porque muda muitas coisas','Não existe problema se os resultados forem diferentes','Ainda não sei'], answer:0 },
    { area:'Segurança e leitura de rótulos', prompt:'Antes de usar uma substância de laboratório fornecida pelo professor, qual atitude é mais adequada?', options:['Usar primeiro e ler as orientações depois','Seguir identificação, instruções e procedimentos de segurança antes do uso','Cheirar diretamente para descobrir o que é','Ainda não sei'], answer:1 }
  ];

  const reviews = {
    'Razão e proporcionalidade':'<strong>Razão e proporcionalidade</strong><p>Quando duas quantidades mantêm a mesma relação, descubra primeiro quanto corresponde a uma parte ou use um fator de multiplicação.</p><div class="practice"><span>Experimente:</span> 2 caixas guardam 12 frascos. Quantos frascos cabem em 4 caixas iguais?</div>',
    'Frações e decimais':'<strong>Frações e decimais</strong><p>Decimais também representam partes de um inteiro. Por exemplo, 0,5 é metade e 0,25 é um quarto.</p><div class="practice"><span>Experimente:</span> que fração de 1 litro corresponde a 0,5 L?</div>',
    'Unidades de massa e volume':'<strong>Unidades de massa e volume</strong><p>Converter unidade não muda a quantidade real. Como 1 kg = 1.000 g, passar de quilogramas para gramas multiplica o número por 1.000.</p><div class="practice"><span>Experimente:</span> converta 1,2 kg para gramas.</div>',
    'Potências de 10':'<strong>Potências de 10</strong><p>Multiplicar por 10² significa multiplicar por 100; por 10³, multiplicar por 1.000. Essa escrita será útil quando lidarmos com números muito grandes ou muito pequenos.</p><div class="practice"><span>Experimente:</span> escreva 2,5 × 10³ na forma usual.</div>',
    'Leitura de tabelas':'<strong>Leitura de tabelas</strong><p>Leia os títulos das colunas, compare linhas e procure padrões apenas depois de identificar o que cada valor representa.</p><div class="practice"><span>Experimente:</span> 1 pacote → 4 g; 2 → 8 g; 3 → 12 g. Quanto para 5 pacotes iguais?</div>',
    'Leitura de gráficos':'<strong>Leitura de gráficos</strong><p>Leia primeiro eixos e unidades. Depois escolha os dois pontos pedidos e compare os valores da grandeza.</p><div class="practice"><span>Experimente:</span> se um gráfico mostra 20 °C no início e 35 °C depois, qual foi o aumento?</div>',
    'Evidência experimental':'<strong>Evidência experimental</strong><p>Uma comparação é mais clara quando controlamos as condições e mudamos apenas o fator que queremos investigar. Assim fica mais fácil interpretar a causa da diferença observada.</p><div class="practice"><span>Experimente:</span> explique por que comparar recipientes de tamanhos diferentes pode atrapalhar um teste sobre outro fator.</div>',
    'Segurança e leitura de rótulos':'<strong>Segurança e leitura de rótulos</strong><p>Rótulos, identificação e orientações de segurança existem para reduzir riscos. Nunca improvise misturas, cheire substâncias diretamente ou ignore instruções de uso.</p><div class="practice"><span>Experimente:</span> escreva duas informações que você procuraria antes de usar um produto desconhecido.</div>'
  };

  function questionMarkup(question, index, bank) {
    const name = `${bank.toLowerCase()}q${index + 1}`;
    const unscored = question.scored === false;
    return `<div class="quiz-item${unscored ? ' is-unscored' : ''}" data-area="${question.area}" data-index="${index}" data-scored="${unscored ? 'false' : 'true'}">
      ${unscored ? '<span class="question-tag">Concepção inicial • não vale ponto</span>' : ''}
      <p>${index + 1}. ${question.prompt}</p>${question.visual || ''}
      ${question.options.map((option, optionIndex) => `<label><input type="radio" name="${name}" value="${optionIndex}"> <span>${String.fromCharCode(65 + optionIndex)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function diagnosticIntro(bank) {
    if (bank === 'B') return '<div class="hero-box"><strong class="card-title">Segunda tentativa: mesma ideia, novas situações</strong><p>As questões mudaram para verificar se você reconstruiu o raciocínio, e não apenas memorizou respostas. Faça novamente sem consultar a revisão.</p></div>';
    return '<div class="hero-box"><strong class="card-title">Descubra seu ponto de partida</strong><p>Esta avaliação não vale nota. Ela serve para identificar o que já está firme e o que merece uma pequena revisão antes de começarmos Química.</p></div><div class="diagnostic-intro"><div class="mini-card"><strong>Faça primeiro sem consultar</strong><p>Se não souber, marque <em>Ainda não sei</em> em vez de chutar.</p></div><div class="mini-card"><strong>Duas questões são diferentes</strong><p>As questões finais registram como você pensa hoje sobre matéria e modelos científicos. Elas não entram na pontuação.</p></div></div>';
  }

  function resultMessage(score) {
    if (score >= 7) return 'Base muito consistente.';
    if (score >= 5) return 'Boa base, com poucos pontos para revisar.';
    if (score >= 3) return 'Alguns fundamentos importantes precisam ser reconstruídos.';
    return 'Vale reforçar a base antes de avançar.';
  }

  function buildReview(gaps) {
    const review = $('#diagnosticReview');
    const unique = [...new Set(gaps)];
    if (!unique.length) {
      review.innerHTML = '<h3>Revisão opcional</h3><div class="ok-box"><strong>Sua base está firme.</strong> Você pode seguir sem revisão obrigatória.</div>';
      return;
    }
    review.innerHTML = `<h3>Revisar o que preciso</h3><div class="note-box review-method"><strong>Como revisar sem copiar resposta</strong><p>Leia a ideia, resolva o exemplo sozinho e explique por que cada passo faz sentido.</p></div><div class="review-grid">${unique.map(area => `<div class="review-card">${reviews[area] || `<strong>${area}</strong><p>Retome este fundamento antes de seguir.</p>`}</div>`).join('')}</div>`;
  }

  function checkDiagnostic(data, bank, previousScore) {
    const quiz = $('#diagnosticQuiz');
    const items = $$('.quiz-item', quiz);
    const selections = items.map(item => {
      const selected = $('input[type="radio"]:checked', item);
      return selected ? Number(selected.value) : null;
    });
    const missing = selections.filter(value => value === null).length;
    const result = $('#diagnosticResult');

    if (missing) {
      result.innerHTML = `<div class="note-box"><strong>Faltam ${missing} ${missing === 1 ? 'resposta' : 'respostas'}.</strong><p>Use “Ainda não sei” quando não souber.</p></div>`;
      return;
    }

    let score = 0;
    const gaps = [];
    const conceptions = {};

    items.forEach((item, index) => {
      const question = data[index];
      const selected = selections[index];
      if (question.scored === false) {
        conceptions[question.area] = selected;
        return;
      }
      if (selected === question.answer) score += 1;
      else gaps.push(question.area);
    });

    const total = data.filter(q => q.scored !== false).length;
    const uniqueGaps = [...new Set(gaps)];
    const compare = bank === 'B' && Number.isInteger(previousScore)
      ? `<div class="result-card"><strong>Sua evolução</strong><p>Primeira tentativa: ${previousScore}/${total}. Agora: ${score}/${total}.</p></div>`
      : '';

    result.innerHTML = `<div class="${score >= 5 ? 'ok-box' : 'note-box'}"><strong>${score}/${total} fundamentos firmes — ${resultMessage(score)}</strong><p>${uniqueGaps.length ? `Vale revisar: ${uniqueGaps.join(', ')}.` : 'Nenhuma lacuna de pré-requisito foi identificada.'}</p></div><div class="result-grid"><div class="result-card"><strong>O que esta pontuação significa</strong><p>É um diagnóstico de entrada, não uma nota.</p></div>${compare}${bank === 'A' ? '<div class="result-card"><strong>Concepções iniciais registradas</strong><p>As duas questões finais não entraram na pontuação. Voltaremos a essas ideias durante o curso.</p></div>' : ''}</div><div class="quiz-actions"><button id="openReview" class="action-button" type="button">${uniqueGaps.length ? `Revisar o que preciso (${uniqueGaps.length} ${uniqueGaps.length === 1 ? 'assunto' : 'assuntos'})` : 'Consultar revisão, se quiser'}</button>${bank === 'A' ? '<button id="retryDiagnostic" class="action-button success" type="button">Tentar novamente com novas questões</button>' : ''}</div>`;

    buildReview(uniqueGaps);

    $('#openReview').addEventListener('click', () => {
      const review = $('#diagnosticReview');
      review.hidden = !review.hidden;
      $('#openReview').textContent = review.hidden
        ? (uniqueGaps.length ? `Revisar o que preciso (${uniqueGaps.length} ${uniqueGaps.length === 1 ? 'assunto' : 'assuntos'})` : 'Consultar revisão, se quiser')
        : 'Fechar revisão';
      if (!review.hidden) review.scrollIntoView({ behavior:'smooth', block:'start' });
    });

    if (bank === 'A') $('#retryDiagnostic').addEventListener('click', () => renderDiagnostic('B', score));

    try {
      const previous = JSON.parse(localStorage.getItem('mbbChemistryDiagnostic') || '{}');
      if (bank === 'A') previous.firstAttempt = { score, total, gaps:uniqueGaps, conceptions, date:new Date().toISOString() };
      else previous.secondAttempt = { score, total, gaps:uniqueGaps, date:new Date().toISOString() };
      localStorage.setItem('mbbChemistryDiagnostic', JSON.stringify(previous));
    } catch (_) {}
  }

  function renderDiagnostic(bank = 'A', previousScore = null) {
    const content = $('#lessonContent');
    const data = bank === 'A' ? bankA : bankB;
    content.innerHTML = `${diagnosticIntro(bank)}<div id="diagnosticQuiz" data-bank="${bank}">${data.map((q, i) => questionMarkup(q, i, bank)).join('')}</div><div class="quiz-actions"><button id="checkDiagnostic" class="action-button primary" type="button">Ver resultado</button><button id="clearDiagnostic" class="action-button" type="button">Limpar respostas</button></div><div id="diagnosticResult" class="quiz-result" aria-live="polite"></div><section id="diagnosticReview" class="review-panel" hidden aria-live="polite"></section>`;

    $('#checkDiagnostic').addEventListener('click', () => checkDiagnostic(data, bank, previousScore));
    $('#clearDiagnostic').addEventListener('click', () => {
      $$('input[type="radio"]', $('#diagnosticQuiz')).forEach(input => { input.checked = false; });
      $('#diagnosticResult').innerHTML = '';
      $('#diagnosticReview').hidden = true;
      $('#diagnosticReview').innerHTML = '';
    });

    MBB.scrollLessonTop?.();
  }

  MBB.showDiagnostic = () => {
    $('#unitName').textContent = 'Antes de começar';
    $('#technicalTitle').textContent = 'Descobrir o que já está firme antes de avançar';
    $('#lessonTitle').textContent = 'Avaliação Diagnóstica de Química';
    $('#lessonObjective').innerHTML = '<strong>Propósito:</strong> identificar conhecimentos prévios que serão usados em Química e revisar apenas o que estiver fazendo falta.';
    renderDiagnostic('A');
    MBB.closeMobileMenu?.();
  };
})();
