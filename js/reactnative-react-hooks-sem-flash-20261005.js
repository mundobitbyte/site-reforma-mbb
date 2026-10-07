// React Native — proteções visuais pós-renderização.
// 1) evita o flash do quadro preto vazio;
// 2) impede que o painel "Explicação da etapa" corte as últimas linhas;
// 3) evita que a moldura de saída seja pintada enquanto o preview está vazio ou ainda sendo montado.
// Não altera conteúdo, código, preview, ordem ou navegação dos módulos.

(() => {
  let previewRenderPending = false;
  let previewRenderToken = 0;

  function getStep(id) {
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

  function hideEmptyCodeCard(id) {
    const step = getStep(id);
    const hasCode = Boolean(step && typeof step.code === 'string' && step.code.trim().length > 0);
    if (hasCode) return;

    const codeCard = document.getElementById('codeCard');
    if (codeCard) codeCard.style.setProperty('display', 'none', 'important');

    const newCodeCard = document.getElementById('newCodeCard');
    if (newCodeCard) newCodeCard.style.setProperty('display', 'none', 'important');
  }

  function syncPreviewVisibility() {
    const resultCard = document.getElementById('resultCard');
    const preview = document.getElementById('preview');
    if (!resultCard || !preview) return;

    if (previewRenderPending) {
      resultCard.style.setProperty('visibility', 'hidden', 'important');
      return;
    }

    const hasPreview = preview.innerHTML.trim() !== '';
    const isDisplayed = getComputedStyle(resultCard).display !== 'none';

    resultCard.style.setProperty(
      'visibility',
      hasPreview && isDisplayed ? 'visible' : 'hidden',
      'important'
    );
  }

  function beginPreviewRender() {
    previewRenderPending = true;
    previewRenderToken += 1;

    const resultCard = document.getElementById('resultCard');
    if (resultCard) resultCard.style.setProperty('visibility', 'hidden', 'important');

    return previewRenderToken;
  }

  function finishPreviewRender(token, id) {
    if (token !== previewRenderToken) return;

    previewRenderPending = false;
    hideEmptyCodeCard(id);
    syncPreviewVisibility();
  }

  function protectExplanationPanel() {
    const STYLE_ID = 'mbb-explicacao-sem-corte-20261005';
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* A segunda linha assume a altura real da explicação.
         Se o conjunto ultrapassar a viewport, quem rola é o workspace. */
      #workspace.mbb-visible-explanation-workspace {
        grid-template-rows: minmax(320px, 1fr) max-content !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        padding-bottom: 12px !important;
      }

      #mbbStepExplanation {
        height: auto !important;
        max-height: none !important;
        min-height: 280px !important;
        overflow: visible !important;
      }

      #mbbStepExplanation .mbb-explanation-body,
      #mbbStepExplanation .mbb-explanation-text {
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
      }

      @media (max-width: 1180px) and (min-width: 1051px) {
        #workspace.mbb-visible-explanation-workspace {
          grid-template-rows: minmax(300px, 1fr) max-content !important;
        }

        #mbbStepExplanation {
          min-height: 300px !important;
        }
      }

      @media (max-width: 1050px) {
        #workspace.mbb-visible-explanation-workspace {
          grid-template-rows: auto auto auto !important;
          padding-bottom: 0 !important;
        }

        #mbbStepExplanation {
          min-height: 0 !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function observePreview() {
    const preview = document.getElementById('preview');
    if (!preview || typeof MutationObserver === 'undefined') return;

    const observer = new MutationObserver(() => syncPreviewVisibility());
    observer.observe(preview, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  protectExplanationPanel();
  observePreview();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbReactNativeVisualGuards(id) {
      const token = beginPreviewRender();

      const result = previousShowStep.apply(this, arguments);

      hideEmptyCodeCard(id);

      // Algumas extensões da navegação ainda fazem pequenos ajustes no próximo frame.
      // Mantemos a saída invisível por dois frames para ela só aparecer já pronta.
      window.requestAnimationFrame(() => {
        hideEmptyCodeCard(id);
        window.requestAnimationFrame(() => finishPreviewRender(token, id));
      });

      return result;
    };
  }

  // Protege o estado atual sem interferir no conteúdo já renderizado.
  hideEmptyCodeCard();
  syncPreviewVisibility();
})();

// Carrega por último apenas o aprofundamento pedagógico do módulo React e Hooks.
// São arquivos de dados/texto; não instalam CSS nem substituem showStep.
(() => {
  const files = [
    '../js/reactnative-react-hooks-explicacoes-mbb-parte1-20261005.js?v=20261005-1',
    '../js/reactnative-react-hooks-explicacoes-mbb-parte2-20261005.js?v=20261005-1'
  ];

  files.forEach((src, index) => {
    const marker = `mbb-react-hooks-explicacoes-${index + 1}`;
    if (document.querySelector(`script[data-${marker}]`)) return;

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.setAttribute(`data-${marker}`, 'true');
    document.body.appendChild(script);
  });
})();
