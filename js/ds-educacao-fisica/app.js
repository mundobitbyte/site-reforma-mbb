(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Corpo, movimento e saúde', menu:'01 Movimento, esforço e recuperação', id:'movimento-esforco' },
    { group:'Brincadeiras e jogos', menu:'02 Brincadeiras, jogos e estratégia', id:'jogos-estrategia' },
    { group:'Esporte', menu:'03 Correr, saltar e lançar', id:'correr-saltar-lancar' },
    { group:'Esporte', menu:'04 Esportes coletivos: fundamento, espaço e decisão', id:'esportes-coletivos' },
    { group:'Ginástica', menu:'05 Força, mobilidade, equilíbrio e coordenação', id:'ginastica-capacidades' },
    { group:'Dança', menu:'06 Ritmo, criação e cultura', id:'danca-ritmo' },
    { group:'Lutas', menu:'07 Distância, equilíbrio, regras e respeito', id:'lutas-respeito' },
    { group:'Aventura', menu:'08 Risco, ambiente e decisão', id:'aventura-risco' },
    { group:'Corpo, movimento e saúde', menu:'09 Corpo, saúde, mídia e tecnologia', id:'corpo-saude-midia' },
    { group:'Projeto de vida', menu:'10 Autonomia: uma prática para levar para a vida', id:'autonomia-pratica' },
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
  }

  function closeCourse() {
    course.hidden = true;
    home.hidden = false;
    syncBack();
  }

  document.querySelector('[data-series="1"]')?.addEventListener('click', openCourse);
  document.getElementById('backToSeries')?.addEventListener('click', closeCourse);
  moduleBack?.addEventListener('click', event => {
    if (!course.hidden) {
      event.preventDefault();
      closeCourse();
    }
  });

  document.getElementById('openMenu')?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    document.getElementById('openMenu')?.setAttribute('aria-expanded', String(open));
  });

  buildMenu();
  syncBack();
})();
