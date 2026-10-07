(() => {
  'use strict';

  function normalizeMinus(input) {
    if (!input) return;
    const normalized = input.value.replace(/[−–—]/g, '-');
    if (normalized !== input.value) input.value = normalized;
  }

  function toggleSign(input, button) {
    if (!input) return;
    normalizeMinus(input);
    const value = input.value.trim();
    input.value = value.startsWith('-') ? value.slice(1) : `-${value}`;
    button?.setAttribute('aria-pressed', String(input.value.startsWith('-')));
    input.focus();
    const end = input.value.length;
    try { input.setSelectionRange(end, end); } catch {}
  }

  function enhanceNumberField() {
    const input = document.querySelector('#generatedAnswer');
    if (!input || input.dataset.mbbSignReady === '1') return;

    const row = input.closest('.generated-answer-row');
    if (!row) return;

    input.dataset.mbbSignReady = '1';

    const group = document.createElement('div');
    group.className = 'generated-number-field';
    row.insertBefore(group, input);
    group.appendChild(input);

    const signButton = document.createElement('button');
    signButton.type = 'button';
    signButton.className = 'generated-sign-button';
    signButton.textContent = '−';
    signButton.setAttribute('aria-label', 'Inserir ou remover sinal negativo');
    signButton.setAttribute('aria-pressed', 'false');
    signButton.title = 'Inserir ou remover sinal negativo';
    group.appendChild(signButton);

    signButton.addEventListener('click', () => toggleSign(input, signButton));
    input.addEventListener('input', () => {
      normalizeMinus(input);
      signButton.setAttribute('aria-pressed', String(input.value.trim().startsWith('-')));
    });
  }

  const observer = new MutationObserver(() => enhanceNumberField());

  function start() {
    enhanceNumberField();
    const host = document.querySelector('#exerciseEngine') || document.body;
    observer.observe(host, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
