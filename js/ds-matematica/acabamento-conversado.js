(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const checks = {
    variacao:'O resultado representa uma taxa constante? Se sim, diga claramente “quanto de uma grandeza para cada unidade da outra”.',
    algebra:'Leia a expressão em português e confirme o papel da parte fixa e da parte que varia.',
    funcao1:'Depois da conta, volte aos coeficientes: qual é a taxa de variação e qual é o valor inicial?',
    reta:'Confira separadamente Δy e Δx. O sinal de m combina com a reta subindo ou descendo?',
    partes:'Antes de aceitar o resultado, confira se a entrada realmente pertence à faixa da regra usada.',
    quadratica:'Observe a ordem das operações e pergunte o que o sinal de a já permite prever sobre o gráfico.',
    parabola:'Localize o resultado no gráfico: ele é raiz, vértice, máximo, mínimo ou apenas um ponto da curva?',
    quadrado:'Compare a mudança de x com a mudança de x²; isso evita tratar a relação como se fosse linear.',
    transformacoes:'Descreva primeiro o que mudou no gráfico com palavras; só depois associe à alteração algébrica.',
    pa:'Separe posição e valor. Conte os passos a partir do primeiro termo e confira por que são n−1.',
    tangente:'Confira se os catetos foram nomeados em relação ao ângulo escolhido, e não pela posição no desenho.',
    porcentagem:'Diga explicitamente qual valor é a base de 100% antes de interpretar o percentual.',
    ladrilhamento:'Some mentalmente os ângulos ao redor do vértice e veja se realmente completam 360°.',
    grandezas:'Leia a unidade final em voz alta. Ela precisa combinar com a operação realizada.',
    dados:'Pergunte se a conclusão vem dos dados ou se está indo além do que a amostra e o gráfico permitem afirmar.'
  };

  function splitEqualityChain(span) {
    if (!span || span.dataset.mbbChain === '1') return;
    const raw = (span.textContent || '').trim();
    const parts = raw.split('=').map(part => part.trim()).filter(Boolean);
    if (parts.length < 3 || raw.length > 130) return;

    const first = parts[0];
    const simpleLeft = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ0-9_()₀₁₂₃₄₅₆₇₈₉θΔᵥ]*$/.test(first);
    let lines;

    if (simpleLeft) {
      lines = parts.slice(1).map(part => `${first} = ${part}`);
    } else {
      lines = [`${parts[0]} = ${parts[1]}`, ...parts.slice(2).map(part => `= ${part}`)];
    }

    span.innerHTML = lines.join('<br>');
    span.dataset.mbbChain = '1';
    span.style.lineHeight = '1.8';
  }

  window.DS_MATH_LESSONS.forEach(lesson => {
    if (!checks[lesson.id] || typeof lesson.content !== 'string') return;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = lesson.content;

    wrapper.querySelectorAll('.example-box .math, .example-box .formula, details.solution .math, .mbb-guided-solution .math')
      .forEach(splitEqualityChain);

    wrapper.querySelectorAll('.example-box').forEach(box => {
      if (!box.querySelector('.math,.formula')) return;
      if (box.querySelector('.mbb-example-check')) return;

      const reasoning = box.querySelector('.mbb-professor-pensa');
      if (reasoning) {
        const reasoningTitle = reasoning.querySelector('strong');
        if (reasoningTitle) reasoningTitle.textContent = 'Como organizar o raciocínio';

        const cardTitle = box.querySelector(':scope > .card-title');
        if (cardTitle) cardTitle.insertAdjacentElement('afterend', reasoning);
        else box.insertBefore(reasoning, box.firstChild);
      }

      const note = document.createElement('div');
      note.className = 'mbb-pause-question mbb-example-check';
      note.innerHTML = `<strong>Depois da conta, confira:</strong> ${checks[lesson.id]}`;
      box.appendChild(note);
    });

    lesson.content = wrapper.innerHTML;
  });
})();