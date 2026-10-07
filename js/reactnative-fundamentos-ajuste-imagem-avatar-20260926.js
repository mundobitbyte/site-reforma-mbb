// Ajustes cirúrgicos no percurso prático de Fundamentos.
(function () {
  if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

  const etapas = modules.fundamentosMobile.steps || [];
  const ambiente = etapas.find(step => step.id === 'fund-ambiente-snack-mbb');
  const primeira = etapas.find(step => step.id === 'fund-primeira-alteracao-mbb');
  const salvar = etapas.find(step => step.id === 'fund-salvar-retomar-mbb');

  if (ambiente && typeof ambiente.html === 'string') {
    ambiente.html = ambiente.html
      .replace('Acesse snack.expo.dev e localize três áreas:', '<b>Acesse snack.expo.dev</b> e <b>localize três áreas</b>:')
      .replace('Abra o Snack e localize as três regiões.', '<b>Abra o Snack</b> e <b>localize as três regiões</b>.');
  }

  if (primeira && typeof primeira.html === 'string') {
    primeira.html = primeira.html
      .replace('Abra <b>App.js</b> e substitua todo o conteúdo pelo código-base abaixo.', '<b>Abra App.js</b> e <b>substitua todo o conteúdo</b> pelo código-base abaixo.')
      .replace('<li>localize exatamente <code>', '<li><b>Localize</b> exatamente <code>')
      .replace('<li>troque somente o texto para <code>', '<li><b>Troque somente o texto</b> para <code>')
      .replace('<li>não altere mais nada;</li>', '<li><b>Não altere mais nada</b>;</li>')
      .replace('<li>observe o preview.</li>', '<li><b>Observe o preview</b>.</li>');
  }

  if (!salvar || typeof salvar.html !== 'string') return;

  salvar.html = salvar.html
    .replace(
      '../img/reactnative/fundamentos/snack-menu-avatar-nitido.webp',
      '../img/reactnative/fundamentos/snack-menu-avatar-livro-cap1.webp?v=20260926-3'
    )
    .replace(
      '<img src="../img/reactnative/fundamentos/snack-menu-avatar-livro-cap1.webp?v=20260926-3" alt="Menu do avatar do Snack com acesso a My Snacks" loading="lazy" decoding="async">',
      '<span class="mbb-avatar-image-wrap"><img src="../img/reactnative/fundamentos/snack-menu-avatar-livro-cap1.webp?v=20260926-3" alt="Menu do avatar do Snack com acesso a My Snacks" loading="lazy" decoding="async"><svg class="mbb-avatar-arrow" viewBox="0 0 419 183" aria-hidden="true"><path d="M300 72 C326 61 348 50 367 39"/><path d="M354 37 L369 38 L365 52"/><circle cx="386" cy="31" r="16"/></svg></span>'
    )
    .replace('Depois do login, o menu do avatar permite acessar My Snacks.', 'Depois do login, <b>clique no avatar</b> e acesse <b>My Snacks</b>.')
    .replace('<li>entre na sua conta Expo, se ainda não estiver logado;</li>', '<li><b>Entre na sua conta Expo</b>, se ainda não estiver logado;</li>')
    .replace('<li>confirme que seu avatar aparece;</li>', '<li><b>Confirme que seu avatar aparece</b>;</li>')
    .replace('<li>clique em <b>Save</b>;</li>', '<li><b>Clique em Save</b>;</li>')
    .replace('<li>dê um nome simples ao projeto e confirme;</li>', '<li><b>Dê um nome simples ao projeto</b> e <b>confirme</b>;</li>')
    .replace('<li>abra <b>My Snacks</b> e localize o projeto salvo.</li>', '<li><b>Abra My Snacks</b> e <b>localize o projeto salvo</b>.</li>')
    .replace('Depois da primeira alteração, entre na conta e salve o projeto para poder retomá-lo depois.', 'Depois da primeira alteração, <b>entre na conta</b> e <b>salve o projeto</b> para poder retomá-lo depois.');

  if (!document.getElementById('mbb-fundamentos-acoes-praticas-style')) {
    const style = document.createElement('style');
    style.id = 'mbb-fundamentos-acoes-praticas-style';
    style.textContent = `
      .mbb-fund-action li b{font-weight:800;color:#123b73}
      .mbb-avatar-image-wrap{position:relative;display:block;width:fit-content;max-width:100%;margin:0 auto}
      .mbb-avatar-image-wrap img{margin:0!important}
      .mbb-avatar-arrow{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;filter:drop-shadow(0 0 2px #fff)}
      .mbb-avatar-arrow path,.mbb-avatar-arrow circle{fill:none;stroke:#d9480f;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
    `;
    document.head.appendChild(style);
  }
})();
