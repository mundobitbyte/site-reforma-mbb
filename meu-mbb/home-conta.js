(function () {
  const link = document.getElementById('mbb-conta-link');
  if (!link || !window.MBBMeuConta) return;
  if (!window.MBB_FIREBASE_CONFIG?.apiKey || !window.MBB_FIREBASE_CONFIG?.projectId) {
    link.hidden = true;
    return;
  }
  window.MBBMeuConta.observar(usuario => {
    link.textContent = usuario ? 'Meu MbB' : 'Entrar';
    link.href = usuario ? 'meu-mbb/index.html' : 'meu-mbb/entrar.html';
  });
  window.MBBMeuConta.iniciar().catch(() => {});
}());
