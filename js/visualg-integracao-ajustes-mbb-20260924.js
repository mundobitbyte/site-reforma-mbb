(function () {
  if (typeof steps === 'undefined' || typeof exerciseLevels === 'undefined') return;

  const integrationId = 'visualg-atividade-boletim';
  const challengeId = 'visualg-nivel-7';

  // 1. Mantém a atividade integradora entre Modularização e Desafios.
  const currentIndex = exerciseLevels.findIndex((item) => item.id === integrationId);
  let integrationItem = currentIndex >= 0
    ? exerciseLevels.splice(currentIndex, 1)[0]
    : { id: integrationId, label: 'Integração' };

  integrationItem.label = 'Integração';

  const challengeIndex = exerciseLevels.findIndex((item) => item.id === challengeId);
  if (challengeIndex >= 0) {
    exerciseLevels.splice(challengeIndex, 0, integrationItem);
  } else {
    exerciseLevels.push(integrationItem);
  }

  // 2. Move também a seção da atividade para a mesma posição no conteúdo.
  const exercises = steps.find((item) => item.id === 99);
  if (exercises && typeof exercises.content === 'string' && exercises.content.includes('mbb-atividade-boletim')) {
    const holder = document.createElement('div');
    holder.innerHTML = exercises.content;

    const integrationSection = holder.querySelector('#mbb-atividade-boletim');
    const levels = Array.from(holder.querySelectorAll('.exercise-level'));
    const challengeSection = levels.find((section) => {
      const title = section.querySelector('h3');
      return title && /^Nível 7\s*[—-]\s*Desafios/i.test(title.textContent.trim());
    });

    if (integrationSection && challengeSection) {
      challengeSection.parentNode.insertBefore(integrationSection, challengeSection);
      exercises.content = holder.innerHTML;
    }
  }

  // 3. Posiciona a seção escolhida com apenas um pequeno respiro acima do título.
  if (typeof goToExerciseLevel === 'function') {
    goToExerciseLevel = function (levelId) {
      showStep(99);
      if (typeof markActiveExerciseLevel === 'function') markActiveExerciseLevel(levelId);

      const target = document.getElementById(levelId);
      const intro = document.getElementById('introView');
      if (!target || !intro) return;

      if (typeof isMobileMenu === 'function' && isMobileMenu()) {
        // Compensa apenas o cabeçalho/menu fixo e deixa uma margem curta.
        const y = target.getBoundingClientRect().top + window.pageYOffset - 112;
        window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
        if (typeof closeExerciseMenu === 'function') closeExerciseMenu();
      } else {
        // No desktop, quase encosta a seção no topo do painel, sem mostrar o tópico anterior.
        const introRect = intro.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const targetTop = intro.scrollTop + (targetRect.top - introRect.top);
        intro.scrollTo({ top: Math.max(0, targetTop - 24), behavior: 'auto' });
      }
    };
  }

  // 4. Reconstrói apenas a navegação para refletir a ordem corrigida.
  const nav = document.getElementById('menu');
  if (nav && typeof buildMenu === 'function') {
    nav.innerHTML = '<h3>Etapas</h3>';
    buildMenu();
    if (typeof showStep === 'function') showStep(0);
  }
})();
