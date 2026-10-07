(function () {
  'use strict';

  const storage = window.MBBAcademiaStorage;
  const $ = seletor => document.querySelector(seletor);

  function mensagem(texto, tipo) {
    const elemento = $('[data-account-message]');
    if (!elemento) return;
    elemento.textContent = texto;
    elemento.className = `account-message ${tipo || ''}`;
  }

  function codigoAmigavel(error) {
    const codigo = error?.code || '';
    const mapa = {
      'auth/email-already-in-use': 'Este e-mail já possui conta.',
      'auth/invalid-email': 'Informe um e-mail válido.',
      'auth/invalid-credential': 'E-mail ou senha incorretos.',
      'auth/weak-password': 'Use uma senha com pelo menos 6 caracteres.',
      'auth/too-many-requests': 'Muitas tentativas. Aguarde antes de tentar novamente.',
      'auth/network-request-failed': 'Falha de rede. Verifique a conexão.'
    };
    return mapa[codigo] || error.message || 'Não foi possível concluir a operação.';
  }

  async function executar(botao, texto, operacao) {
    botao.disabled = true;
    const original = botao.textContent;
    botao.textContent = texto;
    mensagem('Processando…', 'saving');
    try {
      await operacao();
      mensagem('Concluído.', 'success');
      const destino = new URLSearchParams(location.search).get('next');
      if (destino && destino.startsWith('/')) location.href = destino;
      else location.href = 'painel.html';
    } catch (error) {
      mensagem(codigoAmigavel(error), 'error');
      botao.disabled = false;
      botao.textContent = original;
    }
  }

  async function iniciar() {
    await storage.iniciar();
    const status = storage.status();
    const aviso = $('[data-firebase-warning]');
    if (aviso) aviso.hidden = status.configurado;

    const login = $('[data-login-form]');
    login?.addEventListener('submit', event => {
      event.preventDefault();
      const dados = new FormData(login);
      executar(login.querySelector('button[type="submit"]'), 'Entrando…', () => storage.entrar(dados.get('email'), dados.get('senha')));
    });

    const cadastro = $('[data-register-form]');
    cadastro?.addEventListener('submit', event => {
      event.preventDefault();
      const dados = new FormData(cadastro);
      executar(cadastro.querySelector('button[type="submit"]'), 'Criando conta…', () => storage.criarConta(dados.get('nome'), dados.get('email'), dados.get('senha')));
    });

    $('[data-reset-password]')?.addEventListener('click', async () => {
      const email = login?.querySelector('[name="email"]')?.value.trim();
      if (!email) return mensagem('Digite seu e-mail no campo acima para receber a recuperação.', 'error');
      try {
        await storage.recuperarSenha(email);
        mensagem('E-mail de recuperação enviado. Confira também a pasta de spam.', 'success');
      } catch (error) {
        mensagem(codigoAmigavel(error), 'error');
      }
    });

    document.querySelectorAll('[data-account-tab]').forEach(botao => {
      botao.addEventListener('click', () => {
        const alvo = botao.dataset.accountTab;
        document.querySelectorAll('[data-account-panel]').forEach(painel => { painel.hidden = painel.dataset.accountPanel !== alvo; });
        document.querySelectorAll('[data-account-tab]').forEach(item => item.classList.toggle('active', item === botao));
        mensagem('', '');
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
}());
