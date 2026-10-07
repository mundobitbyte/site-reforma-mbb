(() => {
  if (window.__mbbArduinoMenuCompat) return;
  window.__mbbArduinoMenuCompat = true;

  const modulos = [
    ['5', 'arduino-programacao-aplicada.html', '5. Programação Aplicada'],
    ['6', 'arduino-conectividade.html', '6. Conectividade'],
    ['7', 'arduino-iot.html', '7. Internet das Coisas'],
    ['8', 'arduino-protocolos.html', '8. RTOS e Protocolos'],
    ['9', 'arduino-seguranca.html', '9. Proteção e Segurança'],
    ['10', 'arduino-projeto-iot.html', '10. Projeto IoT']
  ];

  function numero(item) {
    const match = ((item && item.textContent) || '').trim().match(/^(\d+)\./);
    return match ? match[1] : '';
  }

  function completarMenu() {
    const menu = document.getElementById('arduinoModuleMenu');
    if (!menu) return;

    const itens = () => Array.from(menu.querySelectorAll('.module-btn'));
    const exercicios = itens().find(item => numero(item) === '99') || null;

    modulos.forEach(([n, href, texto]) => {
      if (itens().some(item => numero(item) === n)) return;

      const link = document.createElement('a');
      link.className = 'module-btn';
      link.href = href;
      link.textContent = texto;
      link.style.textDecoration = 'none';

      if (exercicios) menu.insertBefore(link, exercicios);
      else menu.appendChild(link);
    });
  }

  function manterAtivoVisivel() {
    const menu = document.getElementById('arduinoModuleMenu');
    const ativo = menu && menu.querySelector('.module-btn.active');
    if (!menu || !ativo) return;

    requestAnimationFrame(() => {
      const menuRect = menu.getBoundingClientRect();
      const itemRect = ativo.getBoundingClientRect();
      const margem = 12;
      let destino = menu.scrollLeft;

      if (itemRect.left < menuRect.left + margem) {
        destino -= (menuRect.left + margem) - itemRect.left;
      } else if (itemRect.right > menuRect.right - margem) {
        destino += itemRect.right - (menuRect.right - margem);
      } else {
        return;
      }

      const maximo = Math.max(0, menu.scrollWidth - menu.clientWidth);
      menu.scrollLeft = Math.min(maximo, Math.max(0, destino));
    });
  }

  function iniciar() {
    completarMenu();
    manterAtivoVisivel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else {
    iniciar();
  }

  window.addEventListener('pageshow', manterAtivoVisivel);
  window.addEventListener('resize', manterAtivoVisivel);
})();
