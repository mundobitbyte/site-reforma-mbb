(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const lesson = window.DS_MATH_LESSONS.find(item => item.id === 'variacao');
  if (!lesson || typeof lesson.content !== 'string') return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = lesson.content;
  if (wrapper.querySelector('[data-mbb-tirinha-proporcionalidade]')) return;

  const hero = wrapper.querySelector('.hero-box');
  if (!hero) return;

  const figure = document.createElement('figure');
  figure.className = 'mbb-comic';
  figure.setAttribute('data-mbb-tirinha-proporcionalidade', '');
  figure.setAttribute('aria-label', 'Tirinha sobre proporcionalidade direta');
  figure.innerHTML = `
    <div class="mbb-comic-grid">
      <img src="../img/ds-matematica/tirinha-proporcionalidade-01.webp" loading="lazy" decoding="async" alt="Dois jovens em uma banca de castanhas percebem que comprar o dobro da quantidade faz o preço dobrar.">
      <img src="../img/ds-matematica/tirinha-proporcionalidade-02.webp" loading="lazy" decoding="async" alt="Os jovens comparam o caso das castanhas com uma entrega que possui taxa fixa mais valor por quilômetro.">
      <img src="../img/ds-matematica/tirinha-proporcionalidade-03.webp" loading="lazy" decoding="async" alt="A conversa conclui que dobrar uma quantidade nem sempre faz o valor dobrar.">
      <img src="../img/ds-matematica/tirinha-proporcionalidade-04.webp" loading="lazy" decoding="async" alt="Uma promoção diz leve dois e pague o dobro, encerrando a tirinha com a brincadeira de que o comprador também foi dobrado.">
    </div>
    <figcaption class="mbb-comic-takeaway">
      <strong>Na proporcionalidade direta, se uma grandeza dobra, a outra também dobra.</strong> Uma taxa fixa inicial quebra essa relação.
    </figcaption>
  `;

  hero.insertAdjacentElement('afterend', figure);
  lesson.content = wrapper.innerHTML;
})();
