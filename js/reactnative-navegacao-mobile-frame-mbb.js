// Ajuste final exclusivo para smartphone no módulo Navegação entre Telas.
// Não altera PC/notebook. Reserva altura suficiente para exibir o frame inteiro do resultado visual.

(() => {
  const STYLE_ID = 'nav-mbb-mobile-frame-style';
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @media (max-width: 720px) {
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard {
        min-height: 600px !important;
        height: auto !important;
        overflow: hidden !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        flex: 0 0 auto !important;
        min-height: 555px !important;
        height: 555px !important;
        padding: 22px 12px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .device {
        width: min(300px, calc(100% - 32px)) !important;
        height: auto !important;
        aspect-ratio: 330 / 560 !important;
        max-height: none !important;
        margin: 0 auto !important;
        flex: 0 0 auto !important;
        box-sizing: border-box !important;
        border-radius: 30px !important;
        padding: 15px 11px !important;
        box-shadow: 0 8px 20px rgba(15, 23, 42, .22) !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .screen {
        width: 100% !important;
        height: 100% !important;
        min-height: 0 !important;
        border-radius: 21px !important;
        box-sizing: border-box !important;
      }
    }

    @media (max-width: 420px) {
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard {
        min-height: 555px !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        min-height: 510px !important;
        height: 510px !important;
        padding: 18px 10px !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .device {
        width: min(276px, calc(100% - 28px)) !important;
        border-radius: 28px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();

// Carrega por último a lapidação pedagógica MbB de 25/09/2026.
// Mantém o HTML-base intacto e garante que as correções consolidadas anteriores
// sejam preservadas antes da nova camada de conteúdo e exercícios.
(() => {
  const CSS_ID = 'reactnative-mbb-20260925-css';
  const SCRIPT_ID = 'reactnative-mbb-20260925-js';
  const FIX_ID = 'reactnative-mbb-20260925-fix';
  const FULL_EXERCISES_ID = 'reactnative-mbb-20260925-full-exercises-v5';
  const SELECTOR_ID = 'reactnative-mbb-20260925-exercise-selector-v5';

  const loadSelector = () => {
    if (document.getElementById(SELECTOR_ID)) return;
    const selector = document.createElement('script');
    selector.id = SELECTOR_ID;
    selector.src = '../js/reactnative-mbb-exercicios-seletor-20260925.js?v=20260925-5';
    selector.async = false;
    document.body.appendChild(selector);
  };

  const loadFullExercises = () => {
    if (document.getElementById(FULL_EXERCISES_ID)) {
      loadSelector();
      return;
    }
    const extra = document.createElement('script');
    extra.id = FULL_EXERCISES_ID;
    extra.src = '../js/reactnative-mbb-exercicios-completos-20260925.js?v=20260925-5';
    extra.async = false;
    extra.onload = loadSelector;
    document.body.appendChild(extra);
  };

  if (!document.getElementById(CSS_ID)) {
    const link = document.createElement('link');
    link.id = CSS_ID;
    link.rel = 'stylesheet';
    link.href = '../css/reactnative-mbb-20260925.css?v=20260925-2';
    document.head.appendChild(link);
  }

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = '../js/reactnative-mbb-20260925.js?v=20260925-2';
    script.async = false;
    script.onload = () => {
      if (document.getElementById(FIX_ID)) {
        loadFullExercises();
        return;
      }
      const fix = document.createElement('script');
      fix.id = FIX_ID;
      fix.src = '../js/reactnative-mbb-20260925-correcao.js?v=20260926-2';
      fix.async = false;
      fix.onload = loadFullExercises;
      document.body.appendChild(fix);
    };
    document.body.appendChild(script);
  } else if (document.getElementById(FIX_ID)) {
    loadFullExercises();
  }
})();
