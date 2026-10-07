// Etapa 5 do padrão MbB — Navegação entre Telas.
// Reforça visualmente os verbos de execução sem alterar instruções, códigos ou previews.
// Não cria setas/círculos: este módulo usa principalmente código e previews gerados,
// sem capturas estáticas com alvo inequívoco que justifiquem marcação visual.
(() => {
  const STYLE_ID = 'mbb-nav-acoes-praticas-style';
  const ACTION_RE = /\b(Abra|Crie|Clique|Selecione|Apague|Copie|Cole|Espere|Aguarde|Toque|Use|Mantenha|Substitua|Digite|Adicione|Acrescente|Registre|Importe|Volte|Teste|Confira|Escolha|Entre|Execute|Repita|Integre|Corrija|Observe|Explique|Coloque|Troque)\b/i;

  function installStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .mbb-nav-action-key{font-weight:800!important}
      .nav-beginner-guide-inner ol li{line-height:1.52}
      .nav-beginner-inline-guide li{line-height:1.5}
    `;
    document.head.appendChild(style);
  }

  function emphasizeFirstAction(root) {
    if (!root || root.querySelector('.mbb-nav-action-key')) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('strong, b, code, pre, script, style, button')) {
        node = walker.nextNode();
        continue;
      }

      const text = node.nodeValue || '';
      const match = text.match(ACTION_RE);
      if (match && typeof match.index === 'number') {
        const before = text.slice(0, match.index);
        const action = match[0];
        const after = text.slice(match.index + action.length);
        const fragment = document.createDocumentFragment();

        if (before) fragment.appendChild(document.createTextNode(before));
        const strong = document.createElement('strong');
        strong.className = 'mbb-nav-action-key';
        strong.textContent = action;
        fragment.appendChild(strong);
        if (after) fragment.appendChild(document.createTextNode(after));

        node.replaceWith(fragment);
        return;
      }

      node = walker.nextNode();
    }
  }

  function activeStepId(id) {
    if (id !== undefined && id !== null) return String(id);
    const active = document.querySelector('#menu .nav-btn.active');
    return String(active?.dataset?.step || active?.id?.replace('btn-navegacao-', '') || '');
  }

  function apply(id) {
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') return;

    document.querySelectorAll('.nav-beginner-guide-inner ol li').forEach(emphasizeFirstAction);
    document.querySelectorAll('.nav-beginner-inline-guide li').forEach(emphasizeFirstAction);

    // Os exercícios finais aparecem como cartões, não como o roteiro padrão.
    // Neles, destacamos somente o primeiro verbo de execução de cada cartão.
    if (activeStepId(id) === 'nav-exercicios') {
      document.querySelectorAll('#introView .intro-step-card span, #introView .intro-step-card p').forEach(emphasizeFirstAction);
    }
  }

  installStyle();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbNavActionsShowStep(id) {
      const result = previousShowStep.apply(this, arguments);
      apply(id);
      window.requestAnimationFrame(() => apply(id));
      return result;
    };
  }

  window.requestAnimationFrame(() => apply());
})();
