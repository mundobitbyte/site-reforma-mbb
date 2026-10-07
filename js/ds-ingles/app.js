(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Fundamentos', menu:'01 Hello! Quem sou eu?', id:'hello-quem-sou' },
    { group:'Presente', menu:'02 Minha rotina e preferências', id:'rotina-preferencias' },
    { group:'Descrever', menu:'03 Pessoas, lugares e coisas', id:'pessoas-lugares-coisas' },
    { group:'Agora', menu:'04 O que está acontecendo?', id:'acontecendo-agora' },
    { group:'Passado', menu:'05 O que aconteceu?', id:'aconteceu' },
    { group:'Futuro', menu:'06 Planos e futuro', id:'planos-futuro' },
    { group:'Ações e escolhas', menu:'07 Poder, pedir, aconselhar e precisar', id:'modais-em-uso' },
    { group:'Comunicação', menu:'08 Ler, ouvir e conversar melhor', id:'comunicacao-integrada' },
    { group:'Aplicação', menu:'09 Inglês para estudar e trabalhar', id:'estudo-trabalho' },
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