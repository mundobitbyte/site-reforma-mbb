(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const menu = $('#lessonMenu');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Perguntar e argumentar', menu:'01 Filosofia e atitude filosófica', id:'atitude-filosofica' },
    { group:'Conhecimento e verdade', menu:'02 Conhecimento, verdade e ciência', id:'conhecimento-ciencia' },
    { group:'Agir e escolher', menu:'03 Ética, liberdade e responsabilidade', id:'etica-liberdade' },
    { group:'Pessoa e tecnologia', menu:'04 Ser humano, tecnologia e bioética', id:'bioetica-tecnologia' },
    { group:'Arte e experiência', menu:'05 Estética, arte e experiência', id:'estetica-arte' },
    { group:'Vida em comum', menu:'06 Justiça, política e pluralismo', id:'justica-politica' },
    { group:'Prática', menu:'99 Exercícios e desafios', id:'exercicios' }
  ];

  function setActive(button) {
    if (!button) return;
    $$('.menu-item', menu).forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  }

  function buildMenu() {
    if (!menu) return;
    menu.innerHTML = '';
    let lastGroup = '';

    chapters.forEach(chapter => {
      if (chapter.group !== lastGroup) {
        const heading = document.createElement('div');
        heading.className = 'menu-group-title';
        heading.textContent = chapter.group;
        menu.appendChild(heading);
        lastGroup = chapter.group;
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = `menu-item${chapter.enabled ? '' : ' pending'}`;
      button.textContent = chapter.menu;
      button.dataset.lessonId = chapter.id;

      if (!chapter.enabled) {
        button.disabled = true;
        button.title = 'Conteúdo em construção';
      } else {
        button.addEventListener('click', () => {
          setActive(button);
          MBB.showDiagnostic?.();
        });
      }

      menu.appendChild(button);
    });
  }

  MBB.getMenuButton = startsWith => $$('.menu-item', menu).find(button => button.textContent.trim().startsWith(startsWith));
  MBB.setActiveMenu = setActive;

  buildMenu();

  window.addEventListener('load', () => {
    const diagnosticButton = MBB.getMenuButton('00 Diagnóstico');
    setActive(diagnosticButton);
    MBB.showDiagnostic?.();
  }, { once:true });

  $('#openMenu')?.addEventListener('click', () => {
    const open = menu?.classList.toggle('open');
    $('#openMenu')?.setAttribute('aria-expanded', String(Boolean(open)));
  });
})();
