(() => {
  'use strict';

  function bindQuizGroups(root) {
    root.querySelectorAll('[data-quiz-group]').forEach((group) => {
      const button = group.querySelector('[data-check-quiz]');
      const result = group.querySelector('[data-quiz-result]');
      if (!button || !result || button.dataset.bound === '1') return;
      button.dataset.bound = '1';

      button.addEventListener('click', () => {
        const questions = [...group.querySelectorAll('[data-quiz-question]')];
        const unanswered = questions.filter((question) => !question.querySelector('input[type="radio"]:checked'));

        if (unanswered.length) {
          result.className = 'quiz-result note-box compact';
          result.innerHTML = `<strong>Falta responder.</strong><p>Complete ${unanswered.length === 1 ? 'a questão' : `as ${unanswered.length} questões`} antes de conferir.</p>`;
          unanswered[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        let correct = 0;
        const review = [];

        questions.forEach((question, index) => {
          const selected = question.querySelector('input[type="radio"]:checked');
          const isCorrect = selected?.value === question.dataset.answer;
          question.classList.toggle('is-correct', isCorrect);
          question.classList.toggle('is-wrong', !isCorrect);

          if (isCorrect) correct += 1;
          else review.push({
            number: index + 1,
            explanation: question.dataset.explanation || 'Revise o critério usado nesta questão.'
          });
        });

        if (correct === questions.length) {
          result.className = 'quiz-result ok-box compact';
          result.innerHTML = `<strong>${correct}/${questions.length}.</strong><p>Ótimo: o critério está consistente. Explique o porquê com suas palavras para confirmar que o conceito ficou firme.</p>`;
          return;
        }

        result.className = 'quiz-result note-box compact';
        result.innerHTML = `
          <strong>${correct}/${questions.length}.</strong>
          <p>Revise o raciocínio, não apenas a alternativa.</p>
          <ul class="feedback-list">
            ${review.map((item) => `<li><strong>Questão ${item.number}:</strong> ${item.explanation}</li>`).join('')}
          </ul>
        `;
      });
    });
  }

  window.initFundamentosInformaticaInteractions = (root) => {
    bindQuizGroups(root);
  };
})();