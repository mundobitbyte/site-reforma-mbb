(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);

  // PA já possui uma sequência visual própria no conteúdo reconstruído.
  // A camada visual histórica também insere uma sequência após o hero.
  // Mantemos apenas uma para evitar repetição.
  {
    const lesson = get('pa');
    if (lesson && typeof lesson.content === 'string') {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = lesson.content;
      const sequences = [...wrapper.querySelectorAll('.mbb-sequence')];
      if (sequences.length > 1) {
        const first = sequences[0];
        const next = first.nextElementSibling;
        first.remove();
        if (next?.classList?.contains('mbb-visual-caption') && next.classList.contains('standalone')) next.remove();
        lesson.content = wrapper.innerHTML;
      }
    }
  }

  // Juros compostos: explicitar o significado do expoente para o aluno que estuda sozinho.
  {
    const lesson = get('porcentagem');
    if (lesson && typeof lesson.content === 'string') {
      const from = '<div class="two-col"><div class="mini-card"><strong>Juros simples</strong><p>A taxa é calculada sempre sobre o capital inicial. O acréscimo por período é constante.</p><p><span class="math">M=C(1+it)</span></p></div><div class="mini-card"><strong>Juros compostos</strong><p>A taxa incide sobre o saldo acumulado. A base muda a cada período.</p><p><span class="math">M=C(1+i)^t</span></p></div></div>';
      const to = `${from}<div class="recall-box"><strong>O que significa o expoente t?</strong><p>Em <span class="math">(1+i)^t</span>, o expoente <span class="math">t</span> indica quantas vezes o fator de crescimento <span class="math">1+i</span> é aplicado. Se <span class="math">t=3</span>, por exemplo, multiplicamos o capital por <span class="math">(1+i)</span> três vezes.</p></div>`;
      if (lesson.content.includes(from)) lesson.content = lesson.content.replace(from, to);
    }
  }

  // Última normalização terminológica depois da camada visual.
  window.DS_MATH_LESSONS.forEach(lesson => {
    if (typeof lesson.content !== 'string') return;
    lesson.content = lesson.content
      .split('Em DS e tecnologia').join('Na tecnologia e na programação')
      .split('em DS e tecnologia').join('na tecnologia e na programação')
      .split('no próprio curso de DS').join('na tecnologia e na programação');
  });
})();
