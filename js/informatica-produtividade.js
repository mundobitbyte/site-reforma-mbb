(() => {
  'use strict';

  const lessons = Array.isArray(window.produtividadeLessons) ? window.produtividadeLessons : [];
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

  function closeMenu(returnFocus = false) {
    lessonMenu?.classList.remove('open');
    lessonMenu?.setAttribute('aria-hidden', 'true');
    lessonMenu?.setAttribute('inert', '');
    openMenu?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    if (menuBackdrop) menuBackdrop.hidden = true;
    if (returnFocus) openMenu?.focus();
  }

  function openLessonMenu() {
    if (!lessonMenu || !openMenu) return;
    lessonMenu.classList.add('open');
    lessonMenu.setAttribute('aria-hidden', 'false');
    lessonMenu.removeAttribute('inert');
    openMenu.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    if (menuBackdrop) menuBackdrop.hidden = false;
    (lessonMenu.querySelector('.menu-item.active') || lessonMenu.querySelector('.menu-item'))?.focus();
  }

  function showPortal(updateHash = true) {
    closeMenu();
    if (portalView) portalView.hidden = false;
    if (courseView) courseView.hidden = true;
    if (updateHash && window.location.hash !== '#area') history.replaceState(null, '', '#area');
    document.title = 'Informática e Produtividade | Mundo bit Byte';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function renderMenu() {
    if (!lessonMenu) return;
    lessonMenu.innerHTML = '<div class="drawer-heading"><div><strong>Informática e Produtividade</strong><span>Escolha um módulo e uma aula</span></div><button type="button" class="drawer-close" aria-label="Fechar conteúdos">×</button></div>';
    lessonMenu.querySelector('.drawer-close')?.addEventListener('click', () => closeMenu(true));
    let currentUnit = '';
    lessons.forEach((lesson) => {
      if (lesson.unit !== currentUnit) {
        currentUnit = lesson.unit;
        const heading = document.createElement('div');
        heading.className = 'menu-section';
        heading.textContent = currentUnit;
        lessonMenu.appendChild(heading);
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'menu-item';
      button.dataset.lessonId = lesson.id;
      button.innerHTML = `<span class="menu-number">${lesson.number}</span><span>${lesson.menuTitle || lesson.title}</span>`;
      button.addEventListener('click', () => {
        showLesson(lesson.id);
        closeMenu();
      });
      lessonMenu.appendChild(button);
    });
  }

  function checkChoice(group) {
    const result = group.querySelector('.choice-result');
    const selected = group.querySelector('input[type="radio"]:checked');
    if (!result) return;
    if (!selected) {
      result.className = 'choice-result feedback warn';
      result.textContent = 'Escolha uma alternativa antes de conferir.';
      return;
    }
    const correct = selected.value === group.dataset.answer;
    result.className = `choice-result feedback ${correct ? 'ok' : 'warn'}`;
    result.textContent = `${correct ? 'Decisão consistente. ' : 'Revise o critério. '}${group.dataset.explanation || ''}`;
  }

  function bindInteractions(root) {
    root.querySelectorAll('[data-choice]').forEach((group) => {
      group.querySelector('[data-check-choice]')?.addEventListener('click', () => checkChoice(group));
    });

    root.querySelectorAll('[data-quiz-group]').forEach((group) => {
      const button = group.querySelector('[data-check-quiz]');
      const result = group.querySelector('[data-quiz-result]');
      button?.addEventListener('click', () => {
        const questions = [...group.querySelectorAll('[data-quiz-question]')];
        const unanswered = questions.filter((question) => !question.querySelector('input[type="radio"]:checked'));
        if (unanswered.length) {
          result.className = 'quiz-result feedback warn';
          result.textContent = `Responda ${unanswered.length === 1 ? 'a questão' : `as ${unanswered.length} questões`} antes de conferir.`;
          unanswered[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        let correct = 0;
        const notes = [];
        questions.forEach((question, index) => {
          const chosen = question.querySelector('input[type="radio"]:checked');
          const hit = chosen?.value === question.dataset.answer;
          question.classList.toggle('is-correct', hit);
          question.classList.toggle('is-wrong', !hit);
          if (hit) correct += 1;
          else notes.push(`Questão ${index + 1}: ${question.dataset.explanation || 'revise o critério usado.'}`);
        });
        result.className = `quiz-result feedback ${correct === questions.length ? 'ok' : 'warn'}`;
        result.textContent = correct === questions.length
          ? `${correct}/${questions.length}. As escolhas estão consistentes; explique a evidência com suas palavras.`
          : `${correct}/${questions.length}. ${notes.join(' ')}`;
      });
    });

    root.querySelectorAll('[data-reveal]').forEach((button) => {
      const panel = root.querySelector(button.dataset.reveal);
      if (!panel) return;
      button.addEventListener('click', () => {
        const willOpen = panel.hidden;
        panel.hidden = !willOpen;
        button.setAttribute('aria-expanded', String(willOpen));
        button.textContent = willOpen ? 'Ocultar leitura comentada' : 'Ver a evidência disponível';
      });
    });

    root.querySelectorAll('[data-copy]').forEach((button) => {
      const target = root.querySelector(button.dataset.copy);
      const status = button.parentElement?.querySelector('.copy-status');
      if (!target) return;
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(target.value || target.textContent || '');
          if (status) status.textContent = 'Modelo copiado.';
        } catch {
          target.focus();
          target.select?.();
          if (status) status.textContent = 'Selecione o texto e copie manualmente.';
        }
      });
    });

    root.querySelectorAll('[data-checklist]').forEach((list) => {
      const progress = list.parentElement?.querySelector('[data-check-progress]');
      const update = () => {
        const items = [...list.querySelectorAll('input[type="checkbox"]')];
        const checked = items.filter((item) => item.checked).length;
        if (progress) progress.textContent = `${checked}/${items.length} itens conferidos`;
      };
      list.addEventListener('change', update);
      update();
    });

    root.querySelectorAll('[data-permission-sim]').forEach((simulator) => {
      const button = simulator.querySelector('[data-check-permission]');
      const result = simulator.querySelector('[data-permission-result]');
      button?.addEventListener('click', () => {
        const file = simulator.querySelector('[data-file]')?.value;
        const person = simulator.querySelector('[data-person]')?.value;
        const permission = simulator.querySelector('[data-permission]')?.value;
        if (!file || !person || !permission) {
          result.className = 'feedback warn';
          result.textContent = 'Escolha arquivo, pessoa e permissão antes de testar.';
          return;
        }
        const approved = (file === 'pdf' && person === 'lia' && permission === 'view')
          || (file === 'odt' && person === 'paulo' && permission === 'comment');
        result.className = `feedback ${approved ? 'ok' : 'warn'}`;
        result.textContent = approved
          ? 'Combinação coerente com a tarefa e com acesso mínimo. Ainda é necessário testar com outro perfil.'
          : 'Revise necessidade, versão e acesso mínimo. Link público com edição e permissões além da tarefa não devem ser liberados.';
      });
    });
  }

  function appendNavigation(lesson) {
    const index = lessons.findIndex((item) => item.id === lesson.id);
    if (index < 0 || !lessonContent) return;
    const nav = document.createElement('nav');
    nav.className = 'lesson-navigation';
    nav.setAttribute('aria-label', 'Navegação entre aulas');
    if (index > 0) {
      const previous = document.createElement('button');
      previous.type = 'button';
      previous.className = 'action-button';
      previous.textContent = `← ${lessons[index - 1].number}. ${lessons[index - 1].menuTitle}`;
      previous.addEventListener('click', () => showLesson(lessons[index - 1].id));
      nav.appendChild(previous);
    }
    if (index < lessons.length - 1) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'action-button primary';
      next.textContent = `${lessons[index + 1].number}. ${lessons[index + 1].menuTitle} →`;
      next.addEventListener('click', () => showLesson(lessons[index + 1].id));
      nav.appendChild(next);
    }
    lessonContent.appendChild(nav);
  }

  function showLesson(id) {
    const lesson = lessons.find((item) => item.id === id) || lessons[0];
    if (!lesson || !lessonContent) return;
    currentLessonId = lesson.id;
    if (portalView) portalView.hidden = true;
    if (courseView) courseView.hidden = false;
    unitName.textContent = lesson.unit;
    technicalTitle.textContent = lesson.technicalTitle;
    lessonTitle.textContent = `${lesson.number}. ${lesson.title}`;
    lessonObjective.textContent = lesson.objective;
    if (modulePill) modulePill.textContent = lesson.unit;
    lessonContent.innerHTML = lesson.content;
    lessonMenu?.querySelectorAll('.menu-item').forEach((button) => {
      const active = button.dataset.lessonId === lesson.id;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    bindInteractions(lessonContent);
    appendNavigation(lesson);
    const wantedHash = `#${lesson.id}`;
    if (window.location.hash !== wantedHash) history.replaceState(null, '', wantedHash);
    document.title = `${lesson.number}. ${lesson.title} | Mundo bit Byte`;
    window.scrollTo({ top: 0, behavior: 'auto' });
    lessonTitle.focus({ preventScroll: true });
  }

  openMenu?.addEventListener('click', () => lessonMenu?.classList.contains('open') ? closeMenu(true) : openLessonMenu());
  menuBackdrop?.addEventListener('click', () => closeMenu(true));
  document.querySelectorAll('[data-show-portal]').forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    showPortal();
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lessonMenu?.classList.contains('open')) closeMenu(true);
  });
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#', '');
    if (!id || id === 'area') {
      showPortal(false);
      return;
    }
    if (id !== currentLessonId && lessons.some((lesson) => lesson.id === id)) showLesson(id);
  });

  renderMenu();
  const initialId = window.location.hash.replace('#', '');
  if (lessons.some((lesson) => lesson.id === initialId)) showLesson(initialId);
  else showPortal(false);
})();
