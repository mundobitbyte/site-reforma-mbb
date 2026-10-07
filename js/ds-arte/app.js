(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Perceber e perguntar', menu:'01 O que faz algo ser arte?', id:'o-que-e-arte' },
    { group:'Artes visuais', menu:'02 Imagem, cor, forma e composição', id:'imagem-composicao' },
    { group:'Materialidades', menu:'03 Materiais, técnicas e experimentação', id:'materiais-tecnicas' },
    { group:'Música', menu:'04 Som, ritmo, timbre e sentido', id:'musica-sentido' },
    { group:'Corpo e movimento', menu:'05 Dança, corpo, espaço e presença', id:'danca-corpo' },
    { group:'Cena', menu:'06 Teatro: personagem, espaço e ação', id:'teatro-cena' },
    { group:'Audiovisual', menu:'07 Fotografia, cinema e narrativa visual', id:'foto-cinema' },
    { group:'Cultura e memória', menu:'08 Arte, identidade e patrimônio', id:'identidade-patrimonio' },
    { group:'Cultura digital', menu:'09 Arte, tecnologia e novas mídias', id:'arte-tecnologia' },
    { group:'Autoria e circulação', menu:'10 Criar, curar e compartilhar', id:'criar-curar' },
    { group:'Prática', menu:'99 Exercícios e desafios', id:'exercicios' }
  ];

  function setActive(button) {
    if (!button) return;
    $$('.menu-item', menu).forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  }

  function syncBack() {
    if (!moduleBack || !course) return;
    const inCourse = !course.hidden;
    moduleBack.textContent = inCourse ? '← Séries' : '← Ensino Médio';
    moduleBack.href = inCourse ? 'index.html' : '../index.html#ensino-medio';
    moduleBack.setAttribute('aria-label', inCourse ? 'Voltar para as séries' : 'Voltar ao Ensino Médio');
  }

  function buildMenu() {
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

  function openCourse() {
    home.hidden = true;
    course.hidden = false;
    const diagnosticButton = MBB.getMenuButton('00 Diagnóstico');
    setActive(diagnosticButton);
    MBB.showDiagnostic?.();
    syncBack();
    window.scrollTo({ top:0, behavior:'auto' });
  }

  function backToSeries() {
    course.hidden = true;
    home.hidden = false;
    menu.classList.remove('open');
    $('#openMenu')?.setAttribute('aria-expanded','false');
    syncBack();
    window.scrollTo({ top:0, behavior:'auto' });
  }

  buildMenu();
  syncBack();

  $('[data-series="1"]')?.addEventListener('click', openCourse);
  $('#backToSeries')?.addEventListener('click', backToSeries);
  moduleBack?.addEventListener('click', event => {
    if (!course.hidden) {
      event.preventDefault();
      backToSeries();
    }
  });

  $('#openMenu')?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    $('#openMenu')?.setAttribute('aria-expanded', String(open));
  });
})();