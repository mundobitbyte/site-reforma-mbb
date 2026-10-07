(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  MBB.choice = (number, label, prompt, options, correct, correctText, wrongText) => `
    <div class="quick-question" data-choice-question data-correct="${correct}">
      <strong>${number}. ${label}</strong>
      <p>${prompt}</p>
      <div class="choice-row">${options.map(([key,text]) => `<button type="button" data-choice="${key}">${text}</button>`).join('')}</div>
      <div class="choice-feedback" data-choice-feedback data-correct-text="${correctText}" data-wrong-text="${wrongText}"></div>
    </div>`;

  MBB.initChoiceQuestions = root => {
    $$('[data-choice-question]', root).forEach(box => {
      if (box.dataset.choiceReady === 'true') return;
      box.dataset.choiceReady = 'true';
      const correct = box.dataset.correct;
      const feedback = $('[data-choice-feedback]', box);
      $$('[data-choice]', box).forEach(button => {
        button.addEventListener('click', () => {
          const ok = button.dataset.choice === correct;
          $$('[data-choice]', box).forEach(item => item.classList.remove('is-selected','is-correct','is-wrong'));
          button.classList.add('is-selected', ok ? 'is-correct' : 'is-wrong');
          if (!feedback) return;
          feedback.className = `choice-feedback ${ok ? 'is-correct' : 'is-wrong'}`;
          feedback.innerHTML = `<strong>${ok ? 'Correto.' : 'Ainda não.'}</strong> ${ok ? feedback.dataset.correctText : feedback.dataset.wrongText}`;
        });
      });
    });
  };

  function addDialogueAudio(root) {
    $$('.dialogue-box', root).forEach(dialogue => {
      if (dialogue.dataset.dialogueAudioReady === 'true') return;
      dialogue.dataset.dialogueAudioReady = 'true';

      const lines = $$('.speech', dialogue).map(speech => {
        const clone = speech.cloneNode(true);
        clone.querySelectorAll('small').forEach(label => label.remove());
        return clone.textContent.replace(/\s+/g, ' ').trim();
      }).filter(Boolean);

      if (!lines.length) return;

      const actions = document.createElement('div');
      actions.className = 'quiz-actions';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'action-button';
      button.textContent = 'Ouvir diálogo';
      button.dataset.enSay = lines.join(' ');
      button.dataset.enRate = '0.9';
      actions.appendChild(button);

      const status = document.createElement('div');
      status.className = 'mission-feedback';
      status.dataset.enSpeechStatus = '';
      status.setAttribute('aria-live','polite');

      dialogue.appendChild(actions);
      dialogue.appendChild(status);
    });
  }

  MBB.initSpeechButtons = root => {
    addDialogueAudio(root);

    $$('[data-en-say]', root).forEach(button => {
      if (button.dataset.speechReady === 'true') return;
      button.dataset.speechReady = 'true';

      const text = button.dataset.enSay || '';
      const lang = button.dataset.enLang || 'en-US';
      const parsedRate = Number(button.dataset.enRate || '0.92');
      const rate = Number.isFinite(parsedRate) ? parsedRate : 0.92;
      const container = button.closest('.source-box,.dialogue-box,.language-tool,.challenge-box') || root;
      const status = $('[data-en-speech-status]', container) || $('[data-en-speech-status]', root);

      if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        button.disabled = true;
        button.title = 'Áudio indisponível neste navegador';
        if (status) status.textContent = 'Áudio indisponível neste navegador. Use o texto visível como apoio.';
        return;
      }

      button.addEventListener('click', () => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
        if (status) status.textContent = 'Ouça primeiro sem repetir; depois ouça novamente e repita em blocos.';
      });
    });
  };

  MBB.setActiveMenu = button => {
    const menu = document.getElementById('lessonMenu');
    if (!menu || !button) return;
    $$('.menu-item', menu).forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  };

  MBB.closeMobileMenu = () => {
    const menu = document.getElementById('lessonMenu');
    const toggle = document.getElementById('openMenu');
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded','false');
  };

  MBB.scrollLessonTop = () => {
    const content = document.getElementById('lessonContent');
    content?.scrollTo?.({top:0,behavior:'auto'});
  };

  MBB.showLesson = ({unit,technical,title,objective,html,init}) => {
    const content = document.getElementById('lessonContent');
    if (!content) return;
    $('#unitName').textContent = unit || '';
    $('#technicalTitle').textContent = technical || '';
    $('#lessonTitle').textContent = title || '';
    $('#lessonObjective').innerHTML = objective || '';
    content.innerHTML = html || '';
    MBB.initChoiceQuestions(content);
    MBB.initSpeechButtons(content);
    if (typeof init === 'function') init(content);
    MBB.closeMobileMenu();
    MBB.scrollLessonTop();
  };

  MBB.enableChapter = (startsWith,onOpen) => {
    const menu = document.getElementById('lessonMenu');
    if (!menu) return null;
    const button = $$('.menu-item',menu).find(item => item.textContent.trim().startsWith(startsWith));
    if (!button) return null;
    button.disabled = false;
    button.title = '';
    button.classList.remove('pending');
    button.addEventListener('click',() => {
      MBB.setActiveMenu(button);
      if (typeof onOpen === 'function') onOpen(button);
    });
    return button;
  };
})();