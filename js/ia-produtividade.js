function copyPrompt(button) {
  const promptBox = button.closest('.prompt');
  if (!promptBox) return;

  const textEl = promptBox.querySelector('.prompt-text');
  const text = textEl ? textEl.innerText.trim() : promptBox.innerText.replace('Copiar', '').trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = 'Copiado!';
    button.classList.add('copied');

    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1400);
  });
}

// Mantém a navegação dos módulos 3 a 6 coerente com a trilha dos módulos iniciais.
(() => {
  if (document.querySelector('script[data-ia-trilha-modulos]')) return;
  const script = document.createElement('script');
  script.src = '../../js/ia-trilha-modulos.js?v=5';
  script.defer = true;
  script.dataset.iaTrilhaModulos = '1';
  document.head.appendChild(script);
})();
