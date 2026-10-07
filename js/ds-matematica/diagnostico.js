(() => {
  'use strict';

  const lesson = window.DS_MATH_LESSONS?.find((item) => item.id === 'diagnostico');
  if (!lesson || typeof lesson.content !== 'string') return;

  lesson.technical = 'Descobrir o que já está firme antes de avançar';
  lesson.objective = 'Tente resolver as questões sem consultar. Use a revisão apenas quando precisar e, depois do resultado, retome os pontos em que teve dificuldade.';

  const hero = `<div class="hero-box"><span class="card-title">O que é uma avaliação diagnóstica?</span><p>Antes de começar novos conteúdos, vale descobrir o que você ainda lembra do que já estudou. Esta avaliação não vale nota: ela serve para mostrar quais conhecimentos já estão firmes e quais precisam de uma pequena revisão.</p></div>`;
  lesson.content = lesson.content.replace(/<div class="hero-box">[\s\S]*?<\/div>/i, hero);

  const reviewStart = lesson.content.indexOf('<h3>Revisão rápida</h3>');
  const closingStart = lesson.content.indexOf('<div class="ok-box"><strong>Pronto para seguir?</strong>', reviewStart);

  if (reviewStart !== -1 && closingStart !== -1) {
    const closingEnd = lesson.content.indexOf('</div>', closingStart);
    const reviewSection = lesson.content.slice(reviewStart, closingStart);
    const contentWithoutReview = lesson.content.slice(0, reviewStart) + lesson.content.slice(closingEnd + 6);
    const quizStart = contentWithoutReview.indexOf('<div id="diagnosticQuiz"');

    if (quizStart !== -1) {
      const guide = `
        <div class="note-box diagnostic-guide">
          <strong>Como usar esta avaliação</strong>
          <p>Tente responder primeiro sem consultar. Assim você descobre o que realmente lembra. Se perceber que não sabe nem como começar uma questão, abra a revisão abaixo. Depois de ver o resultado, volte aos assuntos indicados e tente novamente.</p>
        </div>
      `;

      const review = `
        <details id="diagnosticReview" class="diagnostic-review">
          <summary class="diagnostic-review-toggle">Preciso revisar antes</summary>
          <div class="diagnostic-review-body">
            ${reviewSection}
            <div class="note-box"><strong>Use a revisão como apoio.</strong> Consulte apenas o que estiver fazendo falta e depois tente resolver as questões por conta própria.</div>
          </div>
        </details>
      `;

      lesson.content = contentWithoutReview.slice(0, quizStart) + guide + review + contentWithoutReview.slice(quizStart);
    }
  }

  const reviewNames = {
    'Números inteiros': 'Números inteiros',
    'Frações e decimais': 'Frações e decimais',
    'Porcentagem': 'Porcentagem',
    'Razão e proporção': 'Razão e proporção',
    'Álgebra': 'Álgebra',
    'Equação do 1º grau': 'Equações',
    'Plano cartesiano': 'Plano cartesiano',
    'Leitura de gráficos e tabelas': 'Gráficos e tabelas',
    'Unidades de medida': 'Unidades',
    'Ângulos e polígonos': 'Ângulos e polígonos'
  };

  function clearReviewFocus(closeReview = false) {
    const details = document.querySelector('#diagnosticReview');
    const summary = details?.querySelector('.diagnostic-review-toggle');
    document.querySelectorAll('#diagnosticReview .review-card').forEach((card) => {
      card.classList.remove('needs-review');
      card.querySelector('.review-badge')?.remove();
    });
    document.querySelectorAll('.diagnostic-next-step').forEach((item) => item.remove());
    if (summary) summary.textContent = 'Preciso revisar antes';
    if (details && closeReview) details.open = false;
  }

  function updateReviewFocus() {
    const quiz = document.querySelector('#diagnosticQuiz');
    const details = document.querySelector('#diagnosticReview');
    if (!quiz || !details) return;

    const items = [...quiz.querySelectorAll('.quiz-item')];
    const answered = items.filter((item) => item.querySelector('input[type="radio"]:checked'));
    if (!answered.length) return;

    const gaps = [];
    items.forEach((item) => {
      const selected = item.querySelector('input[type="radio"]:checked');
      if (!selected || selected.value !== item.dataset.answer) gaps.push(item.dataset.area);
    });

    clearReviewFocus(false);

    const uniqueGaps = [...new Set(gaps)];
    const summary = details.querySelector('.diagnostic-review-toggle');

    if (!uniqueGaps.length) {
      if (summary) summary.textContent = 'Consultar revisão, se quiser';
      return;
    }

    const expectedNames = new Set(uniqueGaps.map((area) => reviewNames[area] || area));
    details.querySelectorAll('.review-card').forEach((card) => {
      const strong = card.querySelector('strong');
      if (!strong) return;
      const name = strong.textContent.trim();
      if (!expectedNames.has(name)) return;

      card.classList.add('needs-review');
      const badge = document.createElement('span');
      badge.className = 'review-badge';
      badge.textContent = 'Revisar';
      strong.appendChild(badge);
    });

    if (summary) {
      summary.textContent = uniqueGaps.length === 1
        ? 'Revisar o que preciso (1 assunto)'
        : `Revisar o que preciso (${uniqueGaps.length} assuntos)`;
    }

    const resultBox = document.querySelector('#diagnosticResult .ok-box, #diagnosticResult .note-box');
    if (resultBox) {
      const next = document.createElement('p');
      next.className = 'diagnostic-next-step';
      next.innerHTML = 'Use o botão <strong>Revisar o que preciso</strong> acima. Os assuntos que merecem atenção ficarão destacados para você.';
      resultBox.appendChild(next);
    }
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    if (event.target.closest('#checkDiagnostic')) {
      setTimeout(updateReviewFocus, 0);
    }

    if (event.target.closest('#resetDiagnostic')) {
      setTimeout(() => clearReviewFocus(true), 0);
    }
  });
})();
