(() => {
  'use strict';
  const button = document.getElementById('menuToggle');
  const nav = document.getElementById('courseNav');
  const mobile = window.matchMedia('(max-width: 820px)');
  const setOpen = open => {
    document.body.classList.toggle('nav-open', open);
    button?.setAttribute('aria-expanded', String(open));
    if (nav) {
      nav.inert = mobile.matches && !open;
      nav.setAttribute('aria-hidden', String(mobile.matches && !open));
    }
  };
  if (button && nav) {
    document.body.classList.add('menu-ready');
    setOpen(false);
    button.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')));
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !button.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
        setOpen(false); button.focus();
      }
    });
    mobile.addEventListener('change', () => setOpen(false));
  }
  for (const copy of document.querySelectorAll('[data-copy]')) {
    copy.addEventListener('click', async () => {
      const code = document.getElementById(copy.dataset.copy);
      const message = document.getElementById('copy-status');
      try {
        await navigator.clipboard.writeText(code.textContent);
        message.textContent = 'Comando copiado.';
      } catch {
        message.textContent = 'Não foi possível copiar automaticamente. Selecione e copie o comando abaixo.';
      }
    });
  }
})();
