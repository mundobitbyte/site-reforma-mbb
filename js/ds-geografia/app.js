(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Ler o espaço', menu:'01 Espaço, paisagem, lugar e território', id:'espaco-paisagem' },
    { group:'Ler o espaço', menu:'02 Cartografia e geotecnologias', id:'cartografia' },
    { group:'Sociedade e natureza', menu:'03 Sociedade, natureza e transformação do espaço', id:'sociedade-natureza' },
    { group:'Fluxos e redes', menu:'04 Migrações, mercadorias e redes', id:'fluxos-redes' },
    { group:'Cidade e desigualdade', menu:'05 Cidade, segregação e vulnerabilidade', id:'cidade-vulnerabilidade' },
    { group:'Consumo e ambiente', menu:'06 Produção, consumo e resíduos', id:'consumo-residuos' },
    { group:'Produção e território', menu:'07 Campo, recursos naturais e cadeias produtivas', id:'campo-recursos' },
    { group:'Riscos e clima', menu:'08 Riscos, desastres e mudanças climáticas', id:'riscos-clima' },
    { group:'Mundo conectado', menu:'09 Globalização, tecnologia e economia mundial', id:'globalizacao' },
    { group:'Decidir o território', menu:'10 Sustentabilidade, conservação e governança ambiental', id:'sustentabilidade' },
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
