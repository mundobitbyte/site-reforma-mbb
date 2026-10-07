(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const content = $('#lessonContent');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Avaliação Diagnóstica', id:'diagnostico', enabled:true },
    { group:'Movimento e forças', menu:'01 O mundo está em movimento', id:'movimento' },
    { group:'Movimento e forças', menu:'02 Por que as coisas mudam de movimento?', id:'forcas' },
    { group:'Energia e matéria', menu:'03 Energia: de onde vem e para onde vai?', id:'energia' },
    { group:'Energia e matéria', menu:'04 Batidas, impulsos e colisões', id:'colisoes' },
    { group:'Energia e matéria', menu:'05 Temperatura não é calor', id:'temperatura' },
    { group:'Equilíbrio e fluidos', menu:'06 Como as coisas ficam em equilíbrio', id:'estatica' },
    { group:'Equilíbrio e fluidos', menu:'07 Por que navios flutuam?', id:'hidrostatica' },
    { group:'Terra e Cosmos', menu:'08 Da queda de uma maçã ao Universo', id:'cosmos' },
    { group:'Terra e Cosmos', menu:'09 Poderia existir vida em outro mundo?', id:'vida-universo' },
    { group:'Ciência e tecnologia', menu:'10 Física, tecnologia e informação confiável', id:'tecnologia' },
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
    moduleBack.textContent = inCourse ? '← Séries' : '← Mundo bit Byte';
    moduleBack.href = inCourse ? 'index.html' : '../index.html';
    moduleBack.setAttribute('aria-label', inCourse ? 'Voltar para as séries' : 'Voltar ao Mundo bit Byte');
  }

  function buildMenu() {
    menu.innerHTML = '';
    let lastGroup = '';
    chapters.forEach((chapter) => {
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

  MBB.getMenuButton = (startsWith) => $$('.menu-item', menu).find(button => button.textContent.trim().startsWith(startsWith));
  MBB.setActiveMenu = MBB.setActiveMenu || setActive;
  MBB.courseContent = content;

  function openCourse() {
    home.hidden = true;
    course.hidden = false;
    const diagnosticButton = MBB.getMenuButton('00 Avaliação Diagnóstica');
    setActive(diagnosticButton);
    MBB.showDiagnostic?.();
    window.scrollTo({ top:0, behavior:'auto' });
  }

  buildMenu();
  syncBack();
  if (course) new MutationObserver(syncBack).observe(course, { attributes:true, attributeFilter:['hidden'] });

  $('.series-card.active')?.addEventListener('click', openCourse);
  $('#backToSeries')?.addEventListener('click', () => {
    course.hidden = true;
    home.hidden = false;
    menu.classList.remove('open');
    window.scrollTo({ top:0, behavior:'smooth' });
  });

  $('#openMenu')?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    $('#openMenu').setAttribute('aria-expanded', String(open));
  });
})();

(() => {
  if(window.__MBB_VISUALIZADOR_SITE__ || document.querySelector('script[data-mbb-visualizador-site]')) return;
  const script=document.createElement('script');
  script.src='/js/mbb-visualizador-site.js?v=20260927-1';
  script.dataset.mbbVisualizadorSite='1';
  document.body.appendChild(script);
})();
