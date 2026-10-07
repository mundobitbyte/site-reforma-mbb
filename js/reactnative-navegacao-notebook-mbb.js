// Ajuste responsivo e de navegabilidade para o módulo Navegação entre Telas.
// Usa a rolagem normal da página, preserva a ordem código -> explicação -> resultado
// e impede que o frame do resultado visual seja cortado em smartphones.

(() => {
  if (typeof modules === 'undefined' || !modules.navegacao) return;

  const STYLE_ID = 'nav-mbb-notebook-layout-style';
  const BODY_CLASS = 'nav-mbb-navigation-responsive';
  const workspace = document.getElementById('workspace');
  const codeCard = document.getElementById('codeCard');
  const resultCard = document.getElementById('resultCard');
  const noteWrap = document.getElementById('noteWrap');
  const note = document.getElementById('note');

  if (!workspace || !codeCard || !resultCard || !noteWrap || !note) return;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /*
       * Navegação usa a rolagem natural do navegador.
       * Isso evita disputa entre body, workspace e roteiro em telas baixas.
       */
      body.${BODY_CLASS} {
        overflow-x: hidden !important;
        overflow-y: auto !important;
      }

      body.${BODY_CLASS} .layout {
        height: auto !important;
        min-height: calc(100vh - 92px) !important;
        align-items: start !important;
      }

      body.${BODY_CLASS} main {
        overflow: visible !important;
        min-height: 0 !important;
        padding-bottom: 28px !important;
      }

      body.${BODY_CLASS} #workspace {
        height: auto !important;
        min-height: 0 !important;
        overflow: visible !important;
        padding-bottom: 72px !important;
      }

      body.${BODY_CLASS} #introView {
        max-height: none !important;
        overflow: visible !important;
      }

      /*
       * Passos operacionais 1, 2 e 4 a 7.
       * PC/notebook: código e resultado lado a lado; roteiro abaixo do código.
       */
      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace {
        grid-template-columns: minmax(560px, 1fr) minmax(390px, 470px) !important;
        grid-template-rows: minmax(320px, 430px) auto !important;
        gap: 12px !important;
        align-content: start !important;
        overflow: visible !important;
        padding-right: 6px !important;
        padding-bottom: 72px !important;
      }

      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #codeCard {
        grid-column: 1 !important;
        grid-row: 1 !important;
        min-height: 320px !important;
        height: 100% !important;
      }

      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard {
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-height: 320px !important;
        height: 100% !important;
      }

      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        min-height: 0 !important;
      }

      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #noteWrap {
        grid-column: 1 !important;
        grid-row: 2 !important;
        align-self: start !important;
        display: block !important;
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }

      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #note.nav-beginner-note {
        position: relative;
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
        padding: 44px 16px 18px !important;
      }

      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner,
      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid,
      body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }

      /* Notebook estreito: duas colunas continuam úteis, sem rolagem interna. */
      @media (max-width: 1180px) and (min-width: 1051px) {
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace {
          grid-template-columns: minmax(500px, 1fr) minmax(340px, 410px) !important;
          grid-template-rows: minmax(320px, 400px) auto !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid,
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
          grid-template-columns: 1fr !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid section:first-child {
          grid-column: 1 !important;
        }
      }

      /* Notebook pequeno/tablet: sequência vertical inequívoca. */
      @media (max-width: 1050px) {
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace {
          display: grid !important;
          grid-template-columns: 1fr !important;
          grid-template-rows: auto auto auto !important;
          gap: 12px !important;
          padding-right: 0 !important;
          padding-bottom: 56px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #codeCard {
          grid-column: 1 !important;
          grid-row: 1 !important;
          min-height: 420px !important;
          height: 420px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #noteWrap {
          grid-column: 1 !important;
          grid-row: 2 !important;
          width: 100% !important;
          min-height: 0 !important;
          height: auto !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard {
          grid-column: 1 !important;
          grid-row: 3 !important;
          width: 100% !important;
          min-height: 620px !important;
          height: auto !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
          flex: 0 0 auto !important;
          min-height: 580px !important;
          overflow: visible !important;
        }
      }

      /*
       * Smartphone: mantém a ordem didática e dimensiona o telefone pela largura.
       * O card cresce com o frame; nenhuma borda fica escondida.
       */
      @media (max-width: 720px) {
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
          padding-bottom: 48px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #codeCard {
          order: 1 !important;
          width: 100% !important;
          min-height: 360px !important;
          height: 360px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #noteWrap {
          order: 2 !important;
          width: 100% !important;
          min-height: 0 !important;
          height: auto !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard {
          order: 3 !important;
          width: 100% !important;
          min-height: 0 !important;
          height: auto !important;
          overflow: hidden !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
          flex: 0 0 auto !important;
          min-height: 0 !important;
          height: auto !important;
          padding: 16px 10px 18px !important;
          overflow: visible !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard .device {
          width: min(310px, calc(100vw - 54px)) !important;
          height: auto !important;
          aspect-ratio: 330 / 560 !important;
          max-height: none !important;
          flex: 0 0 auto !important;
          margin: 0 auto !important;
          border-radius: 30px !important;
          padding: 15px 11px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard .screen {
          width: 100% !important;
          height: 100% !important;
          border-radius: 21px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #note.nav-beginner-note {
          padding: 42px 12px 14px !important;
        }

        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner p,
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner li,
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
          font-size: 13px !important;
          line-height: 1.5 !important;
        }
      }

      @media (max-width: 420px) {
        body.${BODY_CLASS} #workspace.nav-mbb-readable-workspace #resultCard .device {
          width: min(286px, calc(100vw - 44px)) !important;
          border-radius: 28px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function currentNavigationStep(id) {
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') return null;

    const navModule = modules.navegacao;
    if (id !== undefined && id !== null) {
      return navModule.steps.find(item => String(item.id) === String(id)) || null;
    }

    return navModule.steps.find(item => {
      const button = document.getElementById(`btn-navegacao-${item.id}`);
      return button && button.classList.contains('active');
    }) || null;
  }

  function isOperationalNavigationStep(step) {
    return Boolean(step && step.mbbGuide && !step.modulePage && !step.customPage);
  }

  function syncNavigationPage(id) {
    const step = currentNavigationStep(id);
    const navigationActive = typeof currentModuleKey !== 'undefined' && currentModuleKey === 'navegacao';

    document.body.classList.toggle(BODY_CLASS, navigationActive);

    if (!navigationActive) return;

    // Um único eixo de leitura: sempre começa a nova etapa no topo da página.
    const scroller = document.scrollingElement || document.documentElement;
    if (scroller) scroller.scrollTop = 0;
    workspace.scrollTop = 0;
    note.scrollTop = 0;

    // As classes específicas de código/roteiro continuam sendo administradas
    // pelas camadas anteriores; aqui apenas garantimos a página responsiva.
    if (!isOperationalNavigationStep(step)) {
      workspace.style.removeProperty('scroll-behavior');
    }
  }

  installStyles();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function navMbbResponsiveShowStep(id) {
      const result = previousShowStep.apply(this, arguments);
      window.requestAnimationFrame(() => syncNavigationPage(id));
      return result;
    };
  }

  window.requestAnimationFrame(() => syncNavigationPage());
})();
