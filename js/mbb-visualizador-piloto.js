(() => {
  'use strict';
  if (window.__MBB_VISUALIZADOR_PILOTO__) return;
  window.__MBB_VISUALIZADOR_PILOTO__ = true;
  if (window.__MBB_VISUALIZADOR_SITE__ || document.querySelector('script[data-mbb-visualizador-site]')) return;
  const script = document.createElement('script');
  script.src = '/js/mbb-visualizador-site.js?v=20260927-1';
  script.dataset.mbbVisualizadorSite = '1';
  document.body.appendChild(script);
})();
