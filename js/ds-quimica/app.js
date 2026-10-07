(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const content = $('#lessonContent');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Matéria e modelos', menu:'01 Matéria e elementos', id:'materia-elementos' },
    { group:'Matéria e modelos', menu:'02 Modelos atômicos', id:'modelos-atomicos' },
    { group:'Matéria e modelos', menu:'03 Tabela Periódica', id:'tabela-periodica' },
    { group:'Matéria e modelos', menu:'04 Ligações químicas', id:'ligacoes' },
    { group:'Transformações e quantidades', menu:'05 Reações químicas', id:'reacoes' },
    { group:'Transformações e quantidades', menu:'06 Conservação da massa', id:'conservacao-massa' },
    { group:'Transformações e quantidades', menu:'07 Mol e partículas', id:'mol-particulas' },
    { group:'Transformações e quantidades', menu:'08 Proporções químicas', id:'proporcoes' },
    { group:'Vida, Terra e Cosmos', menu:'09 Elementos no Universo', id:'elementos-universo' },
    { group:'Tecnologia e linguagem', menu:'10 Química e segurança', id:'seguranca' },
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
    const diagnosticButton = MBB.getMenuButton('00 Diagnóstico');
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
