(() => {
  'use strict';

  function limparProgramacao(root = document) {
    root.querySelectorAll('.part-badge').forEach((badge) => {
      if (badge.textContent.trim() === 'Modo MbB') {
        badge.textContent = 'Como aprender';
      }
    });
  }

  function limparVisualg(root = document) {
    root.querySelectorAll('p').forEach((paragrafo) => {
      const texto = paragrafo.textContent.replace(/\s+/g, ' ').trim();

      if (texto === 'Versão revisada') {
        paragrafo.remove();
        return;
      }

      if (texto === 'Esta apostila foi desenvolvida para alunos que estão tendo o primeiro contato com a programação. O material apresenta os conceitos de forma gradual, combinando explicações teóricas e atividades práticas para facilitar a compreensão e o aprendizado.') {
        paragrafo.textContent = 'Esta apostila começa pelos conceitos e avança para atividades práticas. Leia a explicação, acompanhe os exemplos e execute os códigos para observar o resultado.';
        return;
      }

      if (texto === 'Nesta versão, as páginas teóricas possuem um layout próprio, os conteúdos conceituais foram ampliados e cada etapa conta com um painel “O que foi trabalhado”, destacando os principais conceitos, comandos e estruturas estudados.') {
        paragrafo.innerHTML = 'Em cada etapa, o painel <strong>“O que foi trabalhado”</strong> resume os principais conceitos, comandos e estruturas para você conferir o que precisa reconhecer antes de avançar.';
      }
    });
  }

  function limpar() {
    const caminho = window.location.pathname;
    if (caminho.endsWith('/pages/programacao.html')) limparProgramacao();
    if (caminho.endsWith('/pages/visualg.html')) limparVisualg();
  }

  limpar();

  const observer = new MutationObserver(() => limpar());
  observer.observe(document.body, { childList: true, subtree: true });
})();
