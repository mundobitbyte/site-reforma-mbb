(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const lesson = window.DS_MATH_LESSONS.find(item => item.id === 'variacao');
  if (!lesson || typeof lesson.content !== 'string') return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = lesson.content;

  const caption = wrapper.querySelector(
    '[data-mbb-tirinha-proporcionalidade] .mbb-comic-takeaway'
  );
  if (!caption || caption.querySelector('[data-mbb-curiosidade-dobrado]')) return;

  caption.insertAdjacentHTML('beforeend', `
    <br><small data-mbb-curiosidade-dobrado><strong>* Curiosidade de linguagem:</strong> para algumas gerações e regiões, “ser dobrado” também aparecia coloquialmente com a ideia de alguém ter sido vencido, levado na conversa ou passado para trás. Por isso, a palavra “dobro” nesta situação pode lembrar um pequeno trocadilho.</small>
  `);

  lesson.content = wrapper.innerHTML;
})();
