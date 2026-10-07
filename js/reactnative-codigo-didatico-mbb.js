// Padrão didático MbB para blocos de código do módulo React Native.
// Mantém o arquivo completo visível, destaca somente o que mudou na etapa atual
// e garante cópia do código limpo, sem levar o destaque visual para a área de transferência.

(() => {
  const STYLE_ID = 'mbb-reactnative-codigo-didatico-style';

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #fullCode .mbb-code-current-change {
        font-weight: 800;
        color: #ffffff;
      }

      .mbb-code-copy-wrap {
        position: relative;
      }

      .mbb-code-copy-wrap > .mbb-code-copy-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 2;
        border: 0;
        border-radius: 8px;
        padding: 6px 10px;
        background: #444;
        color: #fff;
        font: 700 .78rem/1 Arial, sans-serif;
        cursor: pointer;
      }

      .mbb-code-copy-wrap > .mbb-code-copy-btn:hover {
        filter: brightness(1.12);
      }

      .mbb-code-copy-wrap > pre {
        padding-top: 46px !important;
      }
    `;
    document.head.appendChild(style);
  }

  function getActiveStep(id) {
    if (typeof modules === 'undefined' || typeof currentModuleKey === 'undefined') return null;
    const activeModule = modules[currentModuleKey];
    if (!activeModule || !Array.isArray(activeModule.steps)) return null;

    if (id !== undefined && id !== null) {
      return activeModule.steps.find(step => String(step.id) === String(id)) || null;
    }

    return activeModule.steps.find(step => {
      const button = document.getElementById(`btn-${currentModuleKey}-${step.id}`);
      return button && button.classList.contains('active');
    }) || activeModule.steps[0] || null;
  }

  function getPreviousCode(step) {
    if (typeof modules === 'undefined' || typeof currentModuleKey === 'undefined') return '';
    const activeModule = modules[currentModuleKey];
    if (!activeModule || !Array.isArray(activeModule.steps)) return '';

    const index = activeModule.steps.indexOf(step);
    if (index <= 0) return '';

    for (let i = index - 1; i >= 0; i -= 1) {
      const previous = activeModule.steps[i];
      if (previous && typeof previous.code === 'string') return previous.code;
    }

    return '';
  }

  function changedLineIndexes(previousCode, currentCode) {
    const before = String(previousCode || '').replace(/\r\n/g, '\n').split('\n');
    const now = String(currentCode || '').replace(/\r\n/g, '\n').split('\n');

    if (!previousCode) {
      return new Set(now.map((line, index) => line.trim() ? index : -1).filter(index => index >= 0));
    }

    // LCS por linhas: tudo o que não fizer parte da sequência comum é novo/alterado
    // na versão atual e, portanto, recebe o grifo desta etapa.
    const rows = before.length + 1;
    const cols = now.length + 1;
    const table = Array.from({ length: rows }, () => new Uint16Array(cols));

    for (let i = before.length - 1; i >= 0; i -= 1) {
      for (let j = now.length - 1; j >= 0; j -= 1) {
        table[i][j] = before[i] === now[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1]);
      }
    }

    const unchanged = new Set();
    let i = 0;
    let j = 0;

    while (i < before.length && j < now.length) {
      if (before[i] === now[j]) {
        unchanged.add(j);
        i += 1;
        j += 1;
      } else if (table[i + 1][j] >= table[i][j + 1]) {
        i += 1;
      } else {
        j += 1;
      }
    }

    const changed = new Set();
    now.forEach((line, index) => {
      if (line.trim() && !unchanged.has(index)) changed.add(index);
    });
    return changed;
  }

  function renderHighlightedFullCode(step) {
    const fullCode = document.getElementById('fullCode');
    if (!fullCode || !step || typeof step.code !== 'string') return;

    const normalizedCode = step.code.replace(/\r\n/g, '\n');
    const changed = changedLineIndexes(getPreviousCode(step), normalizedCode);
    const lines = normalizedCode.split('\n');
    const fragment = document.createDocumentFragment();

    lines.forEach((line, index) => {
      const span = document.createElement('span');
      if (changed.has(index)) span.className = 'mbb-code-current-change';
      span.textContent = line;
      fragment.appendChild(span);
      if (index < lines.length - 1) fragment.appendChild(document.createTextNode('\n'));
    });

    fullCode.replaceChildren(fragment);

    // O livro usa um único quadro com o arquivo completo; o antigo quadro separado
    // "O que foi adicionado" deixa de ser necessário quando o próprio código recebe o grifo.
    const newCodeCard = document.getElementById('newCodeCard');
    if (newCodeCard) newCodeCard.style.setProperty('display', 'none', 'important');

    const codeCard = document.getElementById('codeCard');
    if (codeCard) codeCard.style.setProperty('display', 'flex', 'important');

    const title = document.querySelector('#codeCard .panel-title span');
    if (title && !/código completo/i.test(title.textContent || '')) {
      title.textContent = 'Código completo — App.js';
    }
  }

  async function copyPlainCode(pre, button) {
    const text = pre.textContent;

    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const helper = document.createElement('textarea');
      helper.value = text;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      helper.remove();
    }

    if (button) {
      const original = button.textContent;
      button.textContent = 'Copiado!';
      window.setTimeout(() => { button.textContent = original; }, 1100);
    }
  }

  function hasExistingCopyButton(pre) {
    if (pre.id === 'fullCode' || pre.id === 'newCode') return true;
    const container = pre.closest('.card, .panel, section, article');
    return Boolean(container && container.querySelector('.btn-copy, [data-copy-code]'));
  }

  function ensureCopyButtons(root = document) {
    root.querySelectorAll('pre').forEach(pre => {
      if (pre.dataset.mbbCopyReady === '1' || hasExistingCopyButton(pre)) return;
      pre.dataset.mbbCopyReady = '1';

      const wrapper = document.createElement('div');
      wrapper.className = 'mbb-code-copy-wrap';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mbb-code-copy-btn';
      button.textContent = 'Copiar';
      button.setAttribute('aria-label', 'Copiar código');
      button.addEventListener('click', () => copyPlainCode(pre, button));
      wrapper.insertBefore(button, pre);
    });
  }

  function applyDidacticCode(id) {
    const step = getActiveStep(id);
    if (step && typeof step.code === 'string') renderHighlightedFullCode(step);
    ensureCopyButtons(document);
  }

  installStyles();

  if (typeof showStep === 'function') {
    const originalShowStep = showStep;
    showStep = function mbbShowStepWithCodeHighlight(id) {
      const result = originalShowStep.apply(this, arguments);
      applyDidacticCode(id);
      window.requestAnimationFrame(() => applyDidacticCode(id));
      return result;
    };
  }

  applyDidacticCode();

  const workspace = document.getElementById('workspace');
  if (workspace) {
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        ensureCopyButtons(workspace);
      });
    });
    observer.observe(workspace, { childList: true, subtree: true });
  }
})();
