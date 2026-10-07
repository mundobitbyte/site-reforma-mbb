(() => {
  'use strict';

  const blocks = Array.isArray(window.backendFastapiBlocks) ? window.backendFastapiBlocks : [];
  const blockMenu = document.getElementById('blockMenu');
  const lessonMenu = document.getElementById('lessonMenu');
  const blockName = document.getElementById('blockName');
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonObjective = document.getElementById('lessonObjective');
  const lessonContent = document.getElementById('lessonContent');

  let currentBlockId = blocks[0]?.id || null;
  let currentLessonId = blocks[0]?.lessons?.[0]?.id || null;

  function getBlock(id) {
    return blocks.find((block) => block.id === id) || blocks[0];
  }

  function getLesson(block, id) {
    return block?.lessons?.find((lesson) => lesson.id === id) || block?.lessons?.[0];
  }

  function renderBlockMenu() {
    if (!blockMenu) return;
    blockMenu.innerHTML = '';

    blocks.forEach((block) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'block-btn' + (block.id === currentBlockId ? ' active' : '');
      button.textContent = block.menuTitle;
      button.addEventListener('click', () => {
        currentBlockId = block.id;
        currentLessonId = block.lessons?.[0]?.id || null;
        renderAll();
      });
      blockMenu.appendChild(button);
    });
  }

  function renderLessonMenu() {
    if (!lessonMenu) return;
    const block = getBlock(currentBlockId);
    lessonMenu.innerHTML = '<h3>Capítulos</h3>';

    (block?.lessons || []).forEach((lesson) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'nav-btn' + (lesson.id === currentLessonId ? ' active' : '');
      button.textContent = `${lesson.number} ${lesson.menuTitle}`;
      button.addEventListener('click', () => {
        currentLessonId = lesson.id;
        renderLessonMenu();
        renderLesson();
      });
      lessonMenu.appendChild(button);
    });
  }

  function appendNavigation(block, lesson) {
    const lessons = block?.lessons || [];
    const index = lessons.findIndex((item) => item.id === lesson.id);
    if (index < 0) return;

    const nav = document.createElement('nav');
    nav.className = 'lesson-navigation';
    nav.setAttribute('aria-label', 'Navegação entre capítulos');

    if (index > 0) {
      const previous = document.createElement('button');
      previous.type = 'button';
      previous.className = 'action-button';
      previous.textContent = `← ${lessons[index - 1].number}. ${lessons[index - 1].menuTitle}`;
      previous.addEventListener('click', () => {
        currentLessonId = lessons[index - 1].id;
        renderAll();
      });
      nav.appendChild(previous);
    } else {
      const blockIndex = blocks.findIndex((item) => item.id === block.id);
      if (blockIndex > 0) {
        const previousBlock = blocks[blockIndex - 1];
        const previousLesson = previousBlock.lessons[previousBlock.lessons.length - 1];
        const previous = document.createElement('button');
        previous.type = 'button';
        previous.className = 'action-button';
        previous.textContent = `← ${previousLesson.number}. ${previousLesson.menuTitle}`;
        previous.addEventListener('click', () => {
          currentBlockId = previousBlock.id;
          currentLessonId = previousLesson.id;
          renderAll();
        });
        nav.appendChild(previous);
      }
    }

    if (index < lessons.length - 1) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'action-button primary';
      next.textContent = `${lessons[index + 1].number}. ${lessons[index + 1].menuTitle} →`;
      next.addEventListener('click', () => {
        currentLessonId = lessons[index + 1].id;
        renderAll();
      });
      nav.appendChild(next);
    } else {
      const blockIndex = blocks.findIndex((item) => item.id === block.id);
      if (blockIndex < blocks.length - 1) {
        const nextBlock = blocks[blockIndex + 1];
        const nextLesson = nextBlock.lessons[0];
        const next = document.createElement('button');
        next.type = 'button';
        next.className = 'action-button primary';
        next.textContent = `${nextLesson.number}. ${nextLesson.menuTitle} →`;
        next.addEventListener('click', () => {
          currentBlockId = nextBlock.id;
          currentLessonId = nextLesson.id;
          renderAll();
        });
        nav.appendChild(next);
      }
    }

    if (nav.childElementCount) lessonContent.appendChild(nav);
  }

  function normalizeCodeSamples() {
    lessonContent?.querySelectorAll('.code-block').forEach((block) => {
      if (block.textContent.includes('.venvScriptsactivate')) {
        block.textContent = block.textContent.replace(
          '.venvScriptsactivate',
          '.venv\\Scripts\\activate'
        );
      }

      if (block.textContent.includes('novo["id"] = len(produtos) + 1')) {
        block.textContent = block.textContent.replace(
          'novo["id"] = len(produtos) + 1',
          'novo["id"] = max((produto["id"] for produto in produtos), default=0) + 1'
        );
      }

      if (
        block.textContent.includes('except IntegrityError as erro:') &&
        !block.textContent.includes('from sqlalchemy.exc import IntegrityError')
      ) {
        block.textContent = 'from sqlalchemy.exc import IntegrityError\n\n' + block.textContent;
      }

      if (block.textContent.includes('def test_criar_produto(client, produto_exemplo):')) {
        block.textContent = `def test_lista_produtos_vazia(client):
    response = client.get("/produtos")

    assert response.status_code == 200
    assert response.json() == []`;
      }

      if (
        block.textContent.includes('async function carregarProdutos()') &&
        block.textContent.includes("if (!response.ok) {\n      criarTextoVazio(dados.detail || 'Falha ao consultar produtos.');")
      ) {
        block.textContent = block.textContent.replace(
          "if (!response.ok) {\n      criarTextoVazio(dados.detail || 'Falha ao consultar produtos.');",
          "if (!response.ok) {\n      limparResultado();\n      criarTextoVazio(dados.detail || 'Falha ao consultar produtos.');"
        );
      }
    });
  }

  function insertLessonVisual(lessonId) {
    const html = window.backendFastapiVisuals?.[lessonId];
    if (!lessonContent || !html) return;

    const template = document.createElement('template');
    template.innerHTML = html.trim();
    const target = lessonId === 'capitulo-45'
      ? lessonContent.querySelector('.bridge-box')
      : lessonContent.querySelector('.essence');

    if (target) {
      lessonContent.insertBefore(template.content, target);
    } else {
      lessonContent.appendChild(template.content);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();

    if (!copied) throw new Error('Falha ao copiar');
  }

  async function copyBlockText(block, button) {
    const text = block.textContent;

    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy(text);
      }

      button.textContent = 'Copiado!';
      button.classList.add('copied');
      button.setAttribute('aria-label', 'Código ou comando copiado');

      window.setTimeout(() => {
        button.textContent = 'Copiar';
        button.classList.remove('copied');
        button.setAttribute('aria-label', 'Copiar código ou comando');
      }, 1600);
    } catch (_) {
      button.textContent = 'Não copiou';

      window.setTimeout(() => {
        button.textContent = 'Copiar';
      }, 1800);
    }
  }

  function enhanceCodeBlocks() {
    lessonContent?.querySelectorAll('.code-block').forEach((block) => {
      if (block.parentElement?.classList.contains('code-block-wrap')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrap';

      const toolbar = document.createElement('div');
      toolbar.className = 'code-block-toolbar';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-code-btn';
      button.textContent = 'Copiar';
      button.setAttribute('aria-label', 'Copiar código ou comando');
      button.addEventListener('click', () => copyBlockText(block, button));

      toolbar.appendChild(button);
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(toolbar);
      wrapper.appendChild(block);
    });
  }

  function renderLesson() {
    const block = getBlock(currentBlockId);
    const lesson = getLesson(block, currentLessonId);
    if (!block || !lesson || !lessonContent) return;

    currentBlockId = block.id;
    currentLessonId = lesson.id;
    blockName.textContent = block.title;
    lessonTitle.textContent = `${lesson.number}. ${lesson.title}`;
    lessonObjective.textContent = lesson.objective;
    lessonContent.innerHTML = lesson.content;
    insertLessonVisual(lesson.id);
    normalizeCodeSamples();
    enhanceCodeBlocks();
    appendNavigation(block, lesson);

    const wantedHash = `#${lesson.id}`;
    if (window.location.hash !== wantedHash) history.replaceState(null, '', wantedHash);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function renderAll() {
    renderBlockMenu();
    renderLessonMenu();
    renderLesson();
  }

  function restoreFromHash() {
    const id = window.location.hash.replace('#', '');
    if (!id) return false;
    for (const block of blocks) {
      const lesson = block.lessons?.find((item) => item.id === id);
      if (lesson) {
        currentBlockId = block.id;
        currentLessonId = lesson.id;
        return true;
      }
    }
    return false;
  }

  window.addEventListener('hashchange', () => {
    if (restoreFromHash()) renderAll();
  });

  restoreFromHash();
  renderAll();
})();
