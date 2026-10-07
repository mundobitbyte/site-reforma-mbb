// Entrada de compatibilidade já referenciada por pages/reactnative.html.
// Carrega a reconstrução do módulo 0. Fundamentos no padrão MbB e a integra ao renderer existente.
(function () {
  const script = document.createElement('script');
  script.src = '../js/reactnative-fundamentos-mbb-20260925.js?v=20260926-7';
  script.async = false;
  script.onload = () => {
    if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

    // Preserva as capturas em sua resolução útil, sem ampliação artificial.
    if (!document.getElementById('mbb-fundamentos-imagens-fonte')) {
      const style = document.createElement('style');
      style.id = 'mbb-fundamentos-imagens-fonte';
      style.textContent = '.mbb-fund-figure--inicio img{width:auto;max-width:100%;margin-left:auto;margin-right:auto}';
      document.head.appendChild(style);
    }

    const ajuste = document.createElement('script');
    ajuste.src = '../js/reactnative-fundamentos-ajuste-primeira-alteracao-20260926.js?v=20260926-1';
    ajuste.async = false;
    ajuste.onload = () => {
      const ajusteImagem = document.createElement('script');
      ajusteImagem.src = '../js/reactnative-fundamentos-ajuste-imagem-avatar-20260926.js?v=20260926-3';
      ajusteImagem.async = false;
      ajusteImagem.onload = () => {
        // As etapas usam HTML didático próprio e entram no fluxo customPage já suportado pelo módulo.
        modules.fundamentosMobile.steps.forEach(step => {
          step.customPage = true;
        });

        const botao = document.getElementById('module-fundamentosMobile');
        if (botao && botao.classList.contains('active')) botao.click();
      };
      document.head.appendChild(ajusteImagem);
    };
    document.head.appendChild(ajuste);
  };
  document.head.appendChild(script);
})();
