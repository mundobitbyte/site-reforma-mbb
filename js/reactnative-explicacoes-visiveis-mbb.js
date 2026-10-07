// Restaura a camada explicativa das etapas práticas do React Native.
// Mantém um único quadro de código completo e apresenta o conteúdo pedagógico
// em um painel claro, visível e separado do preview.

(() => {
  if (typeof modules === 'undefined') return;

  const STYLE_ID = 'mbb-visible-explanation-style';
  const PANEL_ID = 'mbbStepExplanation';

  const workspace = document.getElementById('workspace');
  const codeCard = document.getElementById('codeCard');
  const resultCard = document.getElementById('resultCard');
  const newCodeCard = document.getElementById('newCodeCard');

  if (!workspace || !codeCard || !resultCard) return;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /*
       * Etapas práticas comuns:
       * esquerda = código completo + explicação;
       * direita = resultado visual + observação.
       * O próprio workspace rola quando a altura da janela não comporta tudo.
       */
      #workspace.mbb-visible-explanation-workspace {
        overflow-y: auto !important;
        overflow-x: hidden !important;
        grid-template-columns: minmax(560px, 1fr) minmax(390px, 470px) !important;
        grid-template-rows: minmax(320px, 1fr) minmax(350px, auto) !important;
        align-content: start !important;
        gap: 12px !important;
      }

      #workspace.mbb-visible-explanation-workspace #codeCard {
        grid-column: 1 !important;
        grid-row: 1 !important;
        min-height: 0 !important;
      }

      #workspace.mbb-visible-explanation-workspace #resultCard {
        grid-column: 2 !important;
        grid-row: 1 / 3 !important;
        min-height: 682px !important;
        height: auto !important;
      }

      #workspace.mbb-visible-explanation-workspace #resultCard .preview-area {
        min-height: 0 !important;
      }

      #mbbStepExplanation {
        grid-column: 1 !important;
        grid-row: 2 !important;
        min-height: 350px;
        background: #ffffff;
        color: #1e293b;
        border: 1px solid #bfdbfe;
        border-left: 5px solid var(--primary);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 14px rgba(15,23,42,.08);
      }

      #mbbStepExplanation .mbb-explanation-head {
        min-height: 38px;
        display: flex;
        align-items: center;
        padding: 0 14px;
        background: #eaf2ff;
        border-bottom: 1px solid #bfdbfe;
        color: #0f3f86;
        font-size: 14px;
        font-weight: 900;
      }

      #mbbStepExplanation .mbb-explanation-body {
        padding: 14px 16px 16px;
      }

      #mbbStepExplanation .mbb-explanation-action {
        margin-bottom: 12px;
        padding: 10px 12px;
        border-radius: 9px;
        background: #f8fbff;
        border: 1px solid #dbeafe;
        font-size: 13px;
        line-height: 1.48;
        color: #334155;
      }

      #mbbStepExplanation .mbb-explanation-action strong {
        color: #0f3f86;
      }

      #mbbStepExplanation .mbb-explanation-title {
        margin: 0 0 8px;
        color: #0f3f86;
        font-size: 16px;
        font-weight: 900;
      }

      #mbbStepExplanation .mbb-explanation-text {
        margin: 0;
        padding: 0;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        font-family: "Segoe UI", Arial, sans-serif;
        font-size: 14px;
        line-height: 1.58;
        color: #263548;
      }

      @media (max-width: 1180px) {
        #workspace.mbb-visible-explanation-workspace {
          grid-template-columns: minmax(500px, 1fr) minmax(340px, 410px) !important;
          grid-template-rows: minmax(300px, 1fr) minmax(400px, auto) !important;
        }

        #mbbStepExplanation {
          min-height: 400px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function activeStep(id) {
    if (typeof currentModuleKey === 'undefined') return null;
    const activeModule = modules[currentModuleKey];
    if (!activeModule || !Array.isArray(activeModule.steps)) return null;

    if (id !== undefined && id !== null) {
      return activeModule.steps.find(step => String(step.id) === String(id)) || null;
    }

    return activeModule.steps.find(step => {
      const button = document.getElementById(`btn-${currentModuleKey}-${step.id}`);
      return button && button.classList.contains('active');
    }) || null;
  }

  function isPracticalStep(step) {
    if (!step || typeof currentModuleKey === 'undefined') return false;

    // Navegação possui um roteiro próprio, com layout específico.
    if (currentModuleKey === 'navegacao') return false;

    // Páginas conceituais, exercícios e laboratórios especiais já possuem
    // estruturas próprias de explicação e não devem receber uma segunda camada.
    if (
      step.modulePage ||
      step.customPage ||
      step.exercisePage ||
      step.flexLab ||
      step.glossaryPage
    ) return false;

    // Toda etapa prática comum com código deve manter uma camada explicativa.
    return typeof step.code === 'string' && step.code.trim() !== '';
  }

  function explanationText(step) {
    if (typeof step.added === 'string' && step.added.trim() !== '') {
      return step.added.trim();
    }

    const parts = [];
    if (step.objective) parts.push(`Objetivo desta etapa:\n${step.objective}`);
    if (step.note) parts.push(`Como interpretar o resultado:\n${step.note}`);

    return parts.join('\n\n') || 'Compare o código desta etapa com o anterior e identifique as linhas destacadas. Elas representam a alteração necessária neste ponto do projeto.';
  }

  function removeExplanation() {
    workspace.classList.remove('mbb-visible-explanation-workspace');
    document.getElementById(PANEL_ID)?.remove();
  }

  function makePanel(step) {
    const panel = document.createElement('section');
    panel.id = PANEL_ID;
    panel.className = 'card mbb-step-explanation';

    const head = document.createElement('div');
    head.className = 'mbb-explanation-head';
    head.textContent = 'Explicação da etapa';

    const body = document.createElement('div');
    body.className = 'mbb-explanation-body';

    const action = document.createElement('div');
    action.className = 'mbb-explanation-action';
    action.innerHTML = '<strong>Como trabalhar:</strong> observe as linhas destacadas no código completo acima. No Snack, altere o arquivo indicado no título do quadro de código. Se preferir, o botão <strong>Copiar</strong> leva o arquivo completo no estado desta etapa.';

    const title = document.createElement('h3');
    title.className = 'mbb-explanation-title';
    title.textContent = step.addedTitle || 'O que mudou e como ler';

    const text = document.createElement('div');
    text.className = 'mbb-explanation-text';
    text.textContent = explanationText(step);

    body.append(action, title, text);
    panel.append(head, body);
    return panel;
  }

  function showExplanation(id) {
    removeExplanation();

    const step = activeStep(id);
    if (!isPracticalStep(step)) return;

    // Mantém o antigo quadro preto de "O que foi adicionado" oculto.
    // A explicação passa a existir no painel claro abaixo do código,
    // evitando dois quadros de código concorrentes.
    if (newCodeCard) {
      newCodeCard.style.setProperty('display', 'none', 'important');
    }

    workspace.appendChild(makePanel(step));
    workspace.classList.add('mbb-visible-explanation-workspace');
  }

  installStyles();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbShowStepWithVisibleExplanation(id) {
      const result = previousShowStep.apply(this, arguments);
      showExplanation(id);
      window.requestAnimationFrame(() => showExplanation(id));
      return result;
    };
  }

  // Se a página já estiver aberta em uma etapa prática, aplica sem exigir clique.
  window.requestAnimationFrame(() => showExplanation());
})();
