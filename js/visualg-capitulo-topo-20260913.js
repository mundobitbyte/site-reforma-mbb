(function () {
  const menu = document.getElementById('menu');
  if (!menu) return;

  function voltarAoInicioDoCapitulo() {
    const intro = document.getElementById('introView');
    if (intro) intro.scrollTop = 0;

    ['fullCode', 'newCode', 'preview'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollTop = 0;
    });

    if (window.matchMedia('(max-width:1050px)').matches) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }

  menu.addEventListener('click', function (event) {
    const chapterButton = event.target.closest('.nav-btn');
    if (!chapterButton || chapterButton.classList.contains('nav-toggle')) return;

    requestAnimationFrame(voltarAoInicioDoCapitulo);
  });
})();
