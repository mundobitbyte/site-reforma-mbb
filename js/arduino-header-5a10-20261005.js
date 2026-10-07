// Cabeçalho dos módulos 5 a 10: mesmas regras usadas nos módulos 1 a 4.
(() => {
  const paginasPermitidas = [
    '/arduino-programacao-aplicada.html',
    '/arduino-conectividade.html',
    '/arduino-iot.html',
    '/arduino-protocolos.html',
    '/arduino-seguranca.html',
    '/arduino-projeto-iot.html'
  ];

  if (!paginasPermitidas.some(final => (location.pathname || '').endsWith(final))) return;

  const style = document.createElement('style');
  style.textContent = `
    body > header{height:46px!important;min-height:46px!important;max-height:46px!important;padding:0 16px!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;text-align:left!important}
    body > header .header-left{display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:12px!important;min-width:0!important;flex:1 1 auto!important;text-align:left!important}
    body > header h1{margin:0!important;text-align:left!important}
    body > header .brand{margin-left:auto!important;text-align:right!important}
    #arduinoModuleMenu .module-btn{font-family:inherit!important}
    @media(max-width:760px){body > header{padding:0 10px!important;gap:8px!important}body > header .header-left{gap:8px!important}body > header .brand{display:none!important}}
  `;
  document.head.appendChild(style);
})();
