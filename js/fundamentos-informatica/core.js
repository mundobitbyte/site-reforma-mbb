(() => {
  'use strict';

  const lessons = Array.isArray(window.fundamentosInformaticaLessons)
    ? window.fundamentosInformaticaLessons
    : [];

  const lessonMenu = document.getElementById('lessonMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const openMenu = document.getElementById('openMenu');
  const unitName = document.getElementById('unitName');
  const technicalTitle = document.getElementById('technicalTitle');
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonObjective = document.getElementById('lessonObjective');
  const lessonContent = document.getElementById('lessonContent');

  let currentLessonId = null;

  // Neste módulo, trocar de aula deve se comportar como abrir uma nova página:
  // nada de percorrer visualmente a distância da aula anterior.
  document.documentElement.style.scrollBehavior = 'auto';
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (lessonContent) lessonContent.style.overflowAnchor = 'none';

  function getShortTitle(lesson) {
    return lesson?.menuTitle || lesson?.title || '';
  }

  function closeMenu() {
    lessonMenu?.classList.remove('open');
    openMenu?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    if (menuBackdrop) menuBackdrop.hidden = true;
  }

  function openLessonMenu() {
    if (!lessonMenu || !openMenu) return;
    lessonMenu.classList.add('open');
    openMenu.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    if (menuBackdrop) menuBackdrop.hidden = false;
  }

  function forceTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function renderMenu() {
    if (!lessonMenu) return;
    lessonMenu.innerHTML = '';

    const heading = document.createElement('div');
    heading.className = 'drawer-heading';
    heading.innerHTML = '<strong>Fundamentos da Informática</strong><span>Escolha uma aula</span>';
    lessonMenu.appendChild(heading);

    let lastUnit = '';
    lessons.forEach((lesson) => {
      if (lesson.unit !== lastUnit) {
        const group = document.createElement('div');
        group.className = 'menu-group-title';
        group.textContent = lesson.unit;
        lessonMenu.appendChild(group);
        lastUnit = lesson.unit;
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'menu-item';
      button.dataset.lessonId = lesson.id;
      button.innerHTML = `<span class="menu-number">${lesson.number}</span><span>${getShortTitle(lesson)}</span>`;
      button.addEventListener('click', () => {
        closeMenu();
        showLesson(lesson.id);
      });
      lessonMenu.appendChild(button);
    });
  }

  function appendLessonNavigation(id) {
    const index = lessons.findIndex((lesson) => lesson.id === id);
    if (index < 0) return;

    const nav = document.createElement('nav');
    nav.className = 'lesson-navigation';
    nav.setAttribute('aria-label', 'Navegação entre aulas');

    if (index > 0) {
      const previous = document.createElement('button');
      previous.type = 'button';
      previous.className = 'action-button';
      previous.textContent = `← ${lessons[index - 1].number}. ${getShortTitle(lessons[index - 1])}`;
      previous.addEventListener('click', () => showLesson(lessons[index - 1].id));
      nav.appendChild(previous);
    }

    if (index < lessons.length - 1) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'action-button primary';
      next.textContent = `${lessons[index + 1].number}. ${getShortTitle(lessons[index + 1])} →`;
      next.addEventListener('click', () => showLesson(lessons[index + 1].id));
      nav.appendChild(next);
    }

    if (nav.childElementCount) lessonContent.appendChild(nav);
  }

  function showLesson(id) {
    const lesson = lessons.find((item) => item.id === id) || lessons[0];
    if (!lesson || !lessonContent) return;

    forceTop();

    currentLessonId = lesson.id;
    unitName.textContent = lesson.unit;
    technicalTitle.textContent = lesson.technicalTitle;
    lessonTitle.textContent = `${lesson.number}. ${lesson.title}`;
    lessonObjective.textContent = lesson.objective;
    lessonContent.innerHTML = lesson.content;

    lessonMenu?.querySelectorAll('.menu-item').forEach((button) => {
      const active = button.dataset.lessonId === lesson.id;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });

    if (typeof window.initFundamentosInformaticaInteractions === 'function') {
      window.initFundamentosInformaticaInteractions(lessonContent);
    }
    appendLessonNavigation(lesson.id);

    const wantedHash = `#${lesson.id}`;
    if (window.location.hash !== wantedHash) {
      history.replaceState(null, '', wantedHash);
    }

    forceTop();
    requestAnimationFrame(forceTop);
  }

  openMenu?.addEventListener('click', () => {
    if (lessonMenu?.classList.contains('open')) closeMenu();
    else openLessonMenu();
  });

  menuBackdrop?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#', '');
    if (!id || id === currentLessonId) return;
    if (lessons.some((lesson) => lesson.id === id)) showLesson(id);
  });

  renderMenu();

  const initialId = window.location.hash.replace('#', '');
  const validInitialId = lessons.some((lesson) => lesson.id === initialId)
    ? initialId
    : lessons[0]?.id;

  if (validInitialId) showLesson(validInitialId);
})();
