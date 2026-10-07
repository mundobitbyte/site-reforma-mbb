(function () {
  'use strict';
  const conta = window.MBBMeuConta;
  const mensagem = document.getElementById('mensagem');
  const login = document.getElementById('form-entrar');
  const cadastro = document.getElementById('form-criar');
  if (new URLSearchParams(location.search).has('excluida')) mensagem.textContent = 'Sua conta e seus dados do Meu MbB foram excluídos.';
  if (!window.MBB_FIREBASE_CONFIG?.apiKey || !window.MBB_FIREBASE_CONFIG?.projectId) {
    document.querySelector('.mbb-abas').hidden = true;
    login.hidden = true; cadastro.hidden = true;
    mensagem.textContent = 'O acesso ao Meu MbB está temporariamente indisponível. Os conteúdos e a pesquisa públicos continuam acessíveis.';
    return;
  }
  document.querySelectorAll('[data-aba]').forEach(botao => botao.addEventListener('click', () => {
    const criar = botao.dataset.aba === 'criar';
    login.hidden = criar; cadastro.hidden = !criar; mensagem.textContent = '';
    document.querySelectorAll('[data-aba]').forEach(item => item.setAttribute('aria-pressed', String(item === botao)));
  }));
  const erros = { 'mbb/email-temporario': 'Use um e-mail permanente. Endereços temporários conhecidos não são aceitos.',
    'auth/email-already-in-use': 'Este e-mail já possui conta.', 'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/invalid-email': 'Informe um e-mail válido.', 'auth/weak-password': 'Use uma senha com pelo menos 6 caracteres.',
    'auth/network-request-failed': 'Sem conexão com o serviço de login. O site público continua acessível.' };
  async function executar(formulario, operacao) {
    const botao = formulario.querySelector('[type="submit"]'); botao.disabled = true; mensagem.textContent = 'Aguarde…';
    try { await operacao(new FormData(formulario)); location.href = 'index.html'; }
    catch (erro) { mensagem.textContent = erros[erro.code] || 'Não foi possível concluir a operação. Tente novamente.'; botao.disabled = false; }
  }
  login.addEventListener('submit', evento => { evento.preventDefault(); executar(login, dados => conta.entrar(dados.get('email'), dados.get('senha'))); });
  cadastro.addEventListener('submit', evento => { evento.preventDefault(); executar(cadastro, dados => conta.cadastrar(dados.get('nome'), dados.get('email'), dados.get('senha'))); });
  document.getElementById('recuperar').addEventListener('click', async () => {
    const email = login.elements.email.value.trim();
    if (!email) { mensagem.textContent = 'Informe seu e-mail no campo acima.'; return; }
    try { await conta.recuperar(email); mensagem.textContent = 'Se houver uma conta associada a esse e-mail, enviaremos instruções para redefinir a senha. Verifique também a pasta de spam ou lixo eletrônico.'; }
    catch (erro) { mensagem.textContent = erros[erro.code] || 'Não foi possível enviar as instruções.'; }
  });
}());
