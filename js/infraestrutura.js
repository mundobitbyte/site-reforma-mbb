(() => {
  'use strict';

  const systemLessons = Array.isArray(window.infraestruturaLessons) ? window.infraestruturaLessons : [];
  const networkLessons = Array.isArray(window.infraestruturaNetworkLessons) ? window.infraestruturaNetworkLessons : [];
  const linuxLessons = Array.isArray(window.infraestruturaLinuxLessons) ? window.infraestruturaLinuxLessons : [];
  const modernLessons = Array.isArray(window.infraestruturaModernLessons) ? window.infraestruturaModernLessons : [];
  const integratorLessons = Array.isArray(window.infraestruturaIntegratorLessons) ? window.infraestruturaIntegratorLessons : [];
  const modules = [
    { id: 'systems', label: 'Módulo 1 · Sistemas', title: 'Administração, Instalação e Manutenção', lessons: systemLessons },
    { id: 'networks', label: 'Módulo 2 · Redes', title: 'Redes na Prática', lessons: networkLessons },
    { id: 'linux', label: 'Módulo 3 · Linux', title: 'Servidores Linux e Serviços', lessons: linuxLessons },
    { id: 'modern', label: 'Módulo 4 · Moderna', title: 'Infraestrutura Moderna', lessons: modernLessons },
    { id: 'integrator', label: 'Integração final', title: 'Laboratório Integrador de Infraestrutura', lessons: integratorLessons }
  ];
  const portalView = document.getElementById('portalView');
  const courseView = document.getElementById('courseView');
  const lessonMenu = document.getElementById('lessonMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const openMenu = document.getElementById('openMenu');
  const modulePill = document.getElementById('modulePill');
  const unitName = document.getElementById('unitName');
  const technicalTitle = document.getElementById('technicalTitle');
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonObjective = document.getElementById('lessonObjective');
  const lessonContent = document.getElementById('lessonContent');
  let currentLessonId = null;
  let currentModule = modules[0];

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

  function showPortal(updateHash = true) {
    closeMenu();
    if (portalView) portalView.hidden = false;
    if (courseView) courseView.hidden = true;
    if (updateHash && window.location.hash !== '#area') history.replaceState(null, '', '#area');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function getShortTitle(lesson) {
    return lesson?.menuTitle || lesson?.title || '';
  }

  function renderMenu() {
    if (!lessonMenu) return;
    const lessons = currentModule.lessons;
    lessonMenu.setAttribute('aria-label', `Conteúdos de ${currentModule.title}`);
    lessonMenu.innerHTML = `<div class="drawer-heading"><strong>${currentModule.title}</strong><span>Escolha uma aula</span></div>`;
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
        showLesson(lesson.id);
        closeMenu();
      });
      lessonMenu.appendChild(button);
    });
  }

  function bindInteractions(root) {
    root.querySelectorAll('[data-quiz-group]').forEach((group) => {
      const button = group.querySelector('[data-check-quiz]');
      const result = group.querySelector('[data-quiz-result]');
      if (!button || !result) return;
      button.addEventListener('click', () => {
        const questions = [...group.querySelectorAll('[data-quiz-question]')];
        const unanswered = questions.filter((question) => !question.querySelector('input[type="radio"]:checked'));
        if (unanswered.length) {
          result.className = 'quiz-result note-box compact';
          result.innerHTML = `<strong>Falta responder.</strong><p>Complete ${unanswered.length === 1 ? 'a questão' : `as ${unanswered.length} questões`} antes de conferir.</p>`;
          unanswered[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        let correct = 0;
        const review = [];
        questions.forEach((question, index) => {
          const selected = question.querySelector('input[type="radio"]:checked');
          const isCorrect = selected?.value === question.dataset.answer;
          question.classList.toggle('is-correct', isCorrect);
          question.classList.toggle('is-wrong', !isCorrect);
          if (isCorrect) correct += 1;
          else review.push({ number: index + 1, explanation: question.dataset.explanation || 'Revise o critério usado.' });
        });
        result.className = correct === questions.length ? 'quiz-result ok-box compact' : 'quiz-result note-box compact';
        result.innerHTML = correct === questions.length
          ? `<strong>${correct}/${questions.length}.</strong><p>O raciocínio está consistente. Explique a evidência com suas palavras.</p>`
          : `<strong>${correct}/${questions.length}.</strong><p>Revise o raciocínio, não apenas a alternativa.</p><ul class="feedback-list">${review.map((item) => `<li><strong>Questão ${item.number}:</strong> ${item.explanation}</li>`).join('')}</ul>`;
      });
    });

    root.querySelectorAll('[data-checklist]').forEach((list) => {
      const progress = list.parentElement?.querySelector('[data-check-progress]');
      const update = () => {
        const boxes = [...list.querySelectorAll('input[type="checkbox"]')];
        const marked = boxes.filter((box) => box.checked).length;
        if (progress) progress.textContent = `${marked}/${boxes.length} etapas verificadas`;
      };
      list.addEventListener('change', update);
      update();
    });

    root.querySelectorAll('[data-copy-template]').forEach((button) => {
      button.addEventListener('click', async () => {
        const target = root.querySelector(button.dataset.copyTemplate);
        const status = button.parentElement?.querySelector('[data-copy-status]');
        if (!target) return;
        try {
          await navigator.clipboard.writeText(target.value || target.textContent || '');
          if (status) status.textContent = 'Modelo copiado.';
        } catch {
          target.select?.();
          if (status) status.textContent = 'Selecione e copie o texto.';
        }
      });
    });

    root.querySelectorAll('[data-evidence-switcher]').forEach((switcher) => {
      const buttons = [...switcher.querySelectorAll('[data-evidence-view]')];
      const panels = [...switcher.querySelectorAll('[data-evidence-panel]')];
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          const wanted = button.dataset.evidenceView;
          buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
          panels.forEach((panel) => { panel.hidden = panel.dataset.evidencePanel !== wanted; });
        });
      });
    });

    root.querySelectorAll('[data-reveal-answer]').forEach((button) => {
      const target = root.querySelector(button.dataset.revealAnswer);
      if (!target) return;
      button.addEventListener('click', () => {
        target.hidden = !target.hidden;
        button.setAttribute('aria-expanded', String(!target.hidden));
        button.textContent = target.hidden ? 'Conferir leitura da evidência' : 'Ocultar leitura comentada';
      });
    });
  }

  function appendLessonNavigation(id) {
    const lessons = currentModule.lessons;
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
    const selectedModule = modules.find((module) => module.lessons.some((item) => item.id === id));
    if (selectedModule && selectedModule !== currentModule) {
      currentModule = selectedModule;
      renderMenu();
    }
    const lessons = currentModule.lessons;
    const lesson = lessons.find((item) => item.id === id) || lessons[0];
    if (!lesson || !lessonContent) return;
    currentLessonId = lesson.id;
    if (modulePill) modulePill.textContent = currentModule.label;
    if (portalView) portalView.hidden = true;
    if (courseView) courseView.hidden = false;
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
    bindInteractions(lessonContent);
    appendLessonNavigation(lesson.id);
    const wantedHash = `#${lesson.id}`;
    if (window.location.hash !== wantedHash) history.replaceState(null, '', wantedHash);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  openMenu?.addEventListener('click', () => lessonMenu?.classList.contains('open') ? closeMenu() : openLessonMenu());
  menuBackdrop?.addEventListener('click', closeMenu);
  document.querySelectorAll('[data-show-portal]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); showPortal(); }));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#', '');
    if (!id || id === 'area') { showPortal(false); return; }
    if (id !== currentLessonId && modules.some((module) => module.lessons.some((lesson) => lesson.id === id))) showLesson(id);
  });

  const initialId = window.location.hash.replace('#', '');
  const initialModule = modules.find((module) => module.lessons.some((lesson) => lesson.id === initialId));
  if (initialModule) {
    currentModule = initialModule;
    renderMenu();
    showLesson(initialId);
  } else {
    renderMenu();
    showPortal(false);
  }
})();
