(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const graphA = `
    <div class="concept-box"><strong class="card-title">Observe o gráfico</strong>
      <svg class="physics-graph" viewBox="0 0 620 310" role="img" aria-label="Gráfico distância por tempo: zero segundo e zero metro, dez segundos e cem metros, vinte segundos e duzentos metros.">
        <line class="graph-grid" x1="70" y1="240" x2="570" y2="240"/><line class="graph-grid" x1="70" y1="140" x2="570" y2="140"/><line class="graph-grid" x1="70" y1="40" x2="570" y2="40"/>
        <line class="graph-axis" x1="70" y1="240" x2="585" y2="240"/><line class="graph-axis" x1="70" y1="250" x2="70" y2="30"/>
        <polyline class="graph-line" points="70,240 320,140 570,40"/><circle class="graph-point" cx="70" cy="240" r="6"/><circle class="graph-point" cx="320" cy="140" r="6"/><circle class="graph-point" cx="570" cy="40" r="6"/>
        <text class="graph-text" x="65" y="262">0</text><text class="graph-text" x="310" y="262">10</text><text class="graph-text" x="560" y="262">20</text>
        <text class="graph-text" x="43" y="245">0</text><text class="graph-text" x="32" y="145">100</text><text class="graph-text" x="32" y="45">200</text>
        <text class="graph-label" x="280" y="295">Tempo (s)</text><text class="graph-label" x="8" y="28">Distância (m)</text>
      </svg>
    </div>`;

  const graphB = `
    <div class="concept-box"><strong class="card-title">Observe o gráfico</strong>
      <svg class="physics-graph" viewBox="0 0 620 310" role="img" aria-label="Gráfico distância por tempo: zero segundo e zero metro, cinco segundos e cinquenta metros, dez segundos e cem metros.">
        <line class="graph-grid" x1="70" y1="240" x2="570" y2="240"/><line class="graph-grid" x1="70" y1="140" x2="570" y2="140"/><line class="graph-grid" x1="70" y1="40" x2="570" y2="40"/>
        <line class="graph-axis" x1="70" y1="240" x2="585" y2="240"/><line class="graph-axis" x1="70" y1="250" x2="70" y2="30"/>
        <polyline class="graph-line" points="70,240 320,140 570,40"/><circle class="graph-point" cx="70" cy="240" r="6"/><circle class="graph-point" cx="320" cy="140" r="6"/><circle class="graph-point" cx="570" cy="40" r="6"/>
        <text class="graph-text" x="65" y="262">0</text><text class="graph-text" x="315" y="262">5</text><text class="graph-text" x="560" y="262">10</text>
        <text class="graph-text" x="43" y="245">0</text><text class="graph-text" x="40" y="145">50</text><text class="graph-text" x="32" y="45">100</text>
        <text class="graph-label" x="280" y="295">Tempo (s)</text><text class="graph-label" x="8" y="28">Distância (m)</text>
      </svg>
    </div>`;

  const bankA = [
    { area:'Razão e proporcionalidade', prompt:'Uma bicicleta percorre 12 km em 40 minutos, mantendo aproximadamente o mesmo ritmo. Quantos quilômetros ela percorreria em 20 minutos?', options:['3 km','6 km','12 km','Ainda não sei'], answer:1 },
    { area:'Frações e decimais', prompt:'Um percurso de 2 km foi dividido em 4 partes iguais. Qual é o comprimento de cada parte?', options:['0,25 km','0,5 km','2 km','Ainda não sei'], answer:1 },
    { area:'Linguagem algébrica', prompt:'Considere y = 3x + 2. Se x = 4, qual é o valor de y?', options:['9','12','14','Ainda não sei'], answer:2 },
    { area:'Equações', prompt:'Qual valor de x torna verdadeira a igualdade 5x = 45?', options:['5','9','40','Ainda não sei'], answer:1 },
    { area:'Unidades de medida', prompt:'Uma estrada possui 2,4 km de comprimento. Quantos metros isso representa?', options:['240 m','2.400 m','24.000 m','Ainda não sei'], answer:1 },
    { area:'Leitura de gráficos', prompt:'Entre 10 s e 20 s, o que aconteceu com a distância registrada no gráfico?', visual:graphA, options:['Diminuiu 100 m','Não mudou','Aumentou 100 m','Ainda não sei'], answer:2 },
    { area:'Tabelas e padrões', prompt:'Observe os dados: 0 s → 0 m; 2 s → 4 m; 4 s → 8 m; 6 s → 12 m. A cada 2 segundos, a posição aumenta quanto?', options:['2 m','4 m','8 m','Ainda não sei'], answer:1 },
    { area:'Evidências e fontes científicas', prompt:'Um vídeo afirma: “Esta pulseira especial reduz a força da gravidade sobre uma pessoa em 50%”. Qual é a atitude mais adequada antes de aceitar a afirmação?', options:['Acreditar porque o vídeo tem muitas visualizações','Procurar como isso foi medido, quais evidências foram apresentadas e outras fontes confiáveis','Rejeitar automaticamente porque foi publicado na internet','Ainda não sei'], answer:1 },
    { area:'Concepção inicial: movimento e força', prompt:'Você está em pé em um ônibus que se movimenta para frente. De repente, o motorista freia. Seu corpo tende a ir para frente. Qual explicação parece fazer mais sentido para você?', options:['O corpo tende a continuar o movimento que possuía','A frenagem cria uma força que empurra o passageiro para frente','A gravidade aumenta durante a frenagem','Ainda não sei'], answer:0, scored:false },
    { area:'Concepção inicial: queda e gravidade', prompt:'Duas bolas de mesmo tamanho e formato, mas com massas diferentes, são soltas juntas da mesma altura. Despreze a resistência do ar. Qual você acredita que chegará primeiro ao chão?', options:['A mais pesada','A mais leve','As duas aproximadamente juntas','Ainda não sei'], answer:2, scored:false }
  ];

  const bankB = [
    { area:'Razão e proporcionalidade', prompt:'Um carro percorre 15 km em 30 minutos, mantendo aproximadamente a mesma média. Quantos quilômetros percorreria em 10 minutos?', options:['3 km','5 km','10 km','Ainda não sei'], answer:1 },
    { area:'Frações e decimais', prompt:'Três litros de água foram divididos igualmente em 6 recipientes. Quanto ficou em cada recipiente?', options:['0,25 L','0,5 L','2 L','Ainda não sei'], answer:1 },
    { area:'Linguagem algébrica', prompt:'Considere y = 2x + 5. Se x = 6, qual é o valor de y?', options:['12','17','22','Ainda não sei'], answer:1 },
    { area:'Equações', prompt:'Qual valor de x torna verdadeira a igualdade 4x = 28?', options:['6','7','24','Ainda não sei'], answer:1 },
    { area:'Unidades de medida', prompt:'Uma pista possui 1,75 km. Quantos metros isso representa?', options:['175 m','1.750 m','17.500 m','Ainda não sei'], answer:1 },
    { area:'Leitura de gráficos', prompt:'Entre 5 s e 10 s, quanto a distância aumentou no gráfico?', visual:graphB, options:['25 m','50 m','100 m','Ainda não sei'], answer:1 },
    { area:'Tabelas e padrões', prompt:'Uma tabela mostra: 0 s → 0 m; 3 s → 6 m; 6 s → 12 m; 9 s → 18 m. A cada 3 segundos, a posição aumenta quanto?', options:['3 m','6 m','9 m','Ainda não sei'], answer:1 },
    { area:'Evidências e fontes científicas', prompt:'Um anúncio diz que um adesivo colocado no celular “elimina 100% da radiação” sem apresentar testes. Qual é a melhor atitude?', options:['Aceitar porque o anúncio usa termos científicos','Procurar testes verificáveis, método, fonte e outras referências confiáveis','Compartilhar primeiro e verificar depois','Ainda não sei'], answer:1 }
  ];

  const reviews = {
    'Razão e proporcionalidade':'<strong>Razão e proporcionalidade</strong><p>Quando duas grandezas variam mantendo o mesmo ritmo, compare como uma muda em relação à outra. Se o tempo cai pela metade, a distância também cai pela metade.</p><div class="practice"><span>Experimente:</span> 18 km em 60 min. Quantos quilômetros em 30 min, no mesmo ritmo?</div>',
    'Frações e decimais':'<strong>Frações e decimais</strong><p>Dividir uma quantidade em partes iguais é a ideia central da fração. O traço representa uma divisão.</p><div class="practice"><span>Experimente:</span> 4 L divididos em 8 recipientes. Faça 4 ÷ 8.</div>',
    'Linguagem algébrica':'<strong>Linguagem algébrica</strong><p>A letra representa um valor. Quando ele é conhecido, substitua a letra sem alterar as operações.</p><div class="practice"><span>Experimente:</span> em y = 2x + 1, use x = 5.</div>',
    'Equações':'<strong>Equações</strong><p>Resolver uma equação é descobrir o valor que torna a igualdade verdadeira. Use operações inversas e depois confira substituindo.</p><div class="practice"><span>Experimente:</span> resolva 6x = 42.</div>',
    'Unidades de medida':'<strong>Unidades de medida</strong><p>Converter unidade não muda a quantidade física. Como 1 km = 1.000 m, passar de km para m aumenta o número, mas não a distância real.</p><div class="practice"><span>Experimente:</span> converta 1,2 km para metros.</div>',
    'Leitura de gráficos':'<strong>Leitura de gráficos</strong><p>Leia primeiro eixos e unidades. Depois escolha os pontos comparados e observe quanto a grandeza mudou.</p><div class="practice"><span>Experimente:</span> se o gráfico mostra 40 m em 4 s e 70 m em 7 s, qual foi o aumento?</div>',
    'Tabelas e padrões':'<strong>Tabelas e padrões</strong><p>Compare linhas sucessivas e procure mudanças regulares antes de afirmar que existe um padrão.</p><div class="practice"><span>Experimente:</span> 0→0, 2→6, 4→12, 6→18. Quanto cresce a cada 2 unidades?</div>',
    'Evidências e fontes científicas':'<strong>Evidências e fontes científicas</strong><p>Uma afirmação parecer científica não basta. Pergunte como foi testada, quais dados existem, se o método é verificável e se outras fontes confiáveis sustentam a conclusão.</p><div class="practice"><span>Experimente:</span> escreva três informações que você buscaria antes de aceitar uma promessa tecnológica extraordinária.</div>'
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
    return '<div class="hero-box"><strong class="card-title">Descubra seu ponto de partida</strong><p>Esta avaliação não vale nota. Ela serve para identificar o que já está firme e o que merece uma pequena revisão antes de começarmos Física.</p></div><div class="diagnostic-intro"><div class="mini-card"><strong>Faça primeiro sem consultar</strong><p>Se não souber, marque <em>Ainda não sei</em> em vez de chutar.</p></div><div class="mini-card"><strong>Duas questões são diferentes</strong><p>As questões finais registram como você pensa hoje sobre alguns fenômenos. Elas não entram na pontuação.</p></div></div>';
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
      if (question.scored === false) { conceptions[question.area] = selected; return; }
      if (selected === question.answer) score += 1; else gaps.push(question.area);
    });

    const total = data.filter(q => q.scored !== false).length;
    const uniqueGaps = [...new Set(gaps)];
    const compare = bank === 'B' && Number.isInteger(previousScore) ? `<div class="result-card"><strong>Sua evolução</strong><p>Primeira tentativa: ${previousScore}/${total}. Agora: ${score}/${total}.</p></div>` : '';
    result.innerHTML = `<div class="${score >= 5 ? 'ok-box' : 'note-box'}"><strong>${score}/${total} fundamentos firmes — ${resultMessage(score)}</strong><p>${uniqueGaps.length ? `Vale revisar: ${uniqueGaps.join(', ')}.` : 'Nenhuma lacuna de pré-requisito foi identificada.'}</p></div><div class="result-grid"><div class="result-card"><strong>O que esta pontuação significa</strong><p>É um diagnóstico de entrada, não uma nota.</p></div>${compare}${bank === 'A' ? '<div class="result-card"><strong>Concepções iniciais registradas</strong><p>As duas questões finais não entraram na pontuação. Voltaremos a elas durante o curso.</p></div>' : ''}</div><div class="quiz-actions"><button id="openReview" class="action-button" type="button">${uniqueGaps.length ? `Revisar o que preciso (${uniqueGaps.length} ${uniqueGaps.length === 1 ? 'assunto' : 'assuntos'})` : 'Consultar revisão, se quiser'}</button>${bank === 'A' ? '<button id="retryDiagnostic" class="action-button success" type="button">Tentar novamente com novas questões</button>' : ''}</div>`;

    buildReview(uniqueGaps);
    $('#openReview').addEventListener('click', () => {
      const review = $('#diagnosticReview');
      review.hidden = !review.hidden;
      $('#openReview').textContent = review.hidden ? (uniqueGaps.length ? `Revisar o que preciso (${uniqueGaps.length} ${uniqueGaps.length === 1 ? 'assunto' : 'assuntos'})` : 'Consultar revisão, se quiser') : 'Fechar revisão';
      if (!review.hidden) review.scrollIntoView({ behavior:'smooth', block:'start' });
    });
    if (bank === 'A') $('#retryDiagnostic').addEventListener('click', () => renderDiagnostic('B', score));

    try {
      const previous = JSON.parse(localStorage.getItem('mbbPhysicsDiagnostic') || '{}');
      if (bank === 'A') previous.firstAttempt = { score, total, gaps:uniqueGaps, conceptions, date:new Date().toISOString() };
      else previous.secondAttempt = { score, total, gaps:uniqueGaps, date:new Date().toISOString() };
      localStorage.setItem('mbbPhysicsDiagnostic', JSON.stringify(previous));
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
    $('#technicalTitle').textContent = 'Avaliação Diagnóstica';
    $('#lessonTitle').textContent = 'O que você já sabe?';
    $('#lessonObjective').innerHTML = '<strong>Propósito:</strong> identificar conhecimentos prévios usados em Física e revisar apenas o que estiver fazendo falta.';
    renderDiagnostic('A');
    MBB.closeMobileMenu?.();
  };
})();