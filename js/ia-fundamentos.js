const options = document.querySelectorAll('.option');
const feedback = document.getElementById('quizFeedback');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    if (feedback) feedback.classList.add('show');
  });
});

const flowSteps = document.querySelectorAll('#fluxoPrincipal .flow-step');
const flowDetail = document.getElementById('flowDetail');

if (flowDetail) {
  flowSteps.forEach(step => {
    step.addEventListener('click', () => {
      flowSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      flowDetail.textContent = step.dataset.info;
    });
  });
}

function toggleBox(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('show');
}

function copiarTexto(id, botao) {
  const el = document.getElementById(id);
  if (!el) return;

  const textoEl = el.querySelector('.prompt-text');
  const texto = textoEl
    ? textoEl.innerText.trim()
    : el.innerText.replace('Copiar', '').replace('Copiado!', '').trim();

  navigator.clipboard.writeText(texto).then(() => {
    const original = botao.textContent;
    botao.textContent = 'Copiado!';
    botao.classList.add('copied');
    setTimeout(() => {
      botao.textContent = original;
      botao.classList.remove('copied');
    }, 1400);
  });
}

function copyPrompt(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const textoEl = el.querySelector('.prompt-text');
  const text = textoEl ? textoEl.innerText.trim() : el.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copiado!';
    setTimeout(() => btn.textContent = original, 1400);
  });
}

const validationSteps = document.querySelectorAll('#fluxoValidacao .flow-step');
const validationDetail = document.getElementById('flowDetailValidacao');

if (validationDetail) {
  validationSteps.forEach(step => {
    step.addEventListener('click', () => {
      validationSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      validationDetail.textContent = step.dataset.info;
    });
  });
}

function adicionarBotaoCopiarPrompt(prompt, indice) {
  if (!prompt || prompt.querySelector('button')) return;

  const id = prompt.id || `fundamentos-pratica-${indice}`;
  prompt.id = id;

  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'copy-prompt-btn';
  botao.textContent = 'Copiar';
  botao.setAttribute('aria-label', 'Copiar prompt desta atividade');
  botao.addEventListener('click', () => copiarTexto(id, botao));
  prompt.appendChild(botao);
}

function adicionarBotaoCopiarCodigo(code) {
  if (!code || code.dataset.copyReady === 'true') return;
  code.dataset.copyReady = 'true';

  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'button secondary';
  botao.textContent = 'Copiar prompt';
  botao.style.marginTop = '8px';
  botao.addEventListener('click', () => {
    navigator.clipboard.writeText(code.innerText.trim()).then(() => {
      botao.textContent = 'Copiado!';
      setTimeout(() => botao.textContent = 'Copiar prompt', 1400);
    });
  });
  code.insertAdjacentElement('afterend', botao);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href="https://chat.openai.com/"]').forEach(link => {
    link.href = 'https://chatgpt.com/';
  });

  const laboratorioD = Array.from(document.querySelectorAll('#primeiros-laboratorios .note')).find(note => {
    const titulo = note.querySelector('h3');
    return titulo && titulo.textContent.includes('Laboratório D');
  });
  const promptLaboratorioD = laboratorioD ? laboratorioD.querySelector('.prompt') : null;
  if (promptLaboratorioD) {
    promptLaboratorioD.textContent = `Compare o material didático abaixo e classifique cada afirmação da explicação como CONFIRMADO PELA FONTE, INTERPRETAÇÃO PLAUSÍVEL ou NÃO SUSTENTADO PELO TRECHO. Não use conhecimento externo para preencher o que a fonte não diz.

TRECHO DIDÁTICO DE DOCUMENTAÇÃO:
"O aplicativo cria uma cópia local automática a cada 10 minutos. Quando há conexão disponível, essa cópia pode ser sincronizada com a nuvem. Este trecho não informa por quanto tempo versões anteriores são mantidas."

EXPLICAÇÃO PARA ANALISAR:
"O aplicativo cria cópias locais a cada 10 minutos. Quando existe conexão, essas cópias podem ser sincronizadas com a nuvem, o que ajuda a reduzir o risco de perda entre salvamentos. Além disso, o sistema mantém um histórico de versões por 30 dias."

Explique brevemente por que cada trecho recebeu essa classificação.`;
  }

  const tituloTutor = document.querySelector('#lab5-estudar-sem-copiar .note.good h3');
  if (tituloTutor) {
    tituloTutor.textContent = 'MODELO REUTILIZÁVEL — use quando tiver um exercício real';
  }

  const praticasCopiaveis = [
    ...document.querySelectorAll('#aprendizagem .prompt'),
    ...document.querySelectorAll('#geracao-respostas .prompt'),
    ...document.querySelectorAll('#pratique .prompt'),
    ...document.querySelectorAll('#laboratorio-erros .prompt'),
    ...document.querySelectorAll('#laboratorio-parece-saber .prompt'),
    ...document.querySelectorAll('#primeiros-laboratorios .prompt'),
    ...document.querySelectorAll('#lab5-estudar-sem-copiar .prompt')
  ].filter(prompt => !prompt.closest('.bad'));

  praticasCopiaveis.forEach((prompt, i) => adicionarBotaoCopiarPrompt(prompt, i + 1));

  document.querySelectorAll('#laboratorio-erro .lab-step code').forEach(code => {
    adicionarBotaoCopiarCodigo(code);
  });

  const pratica13 = document.querySelector('#pratique');
  const gradeFerramentasPratica13 = pratica13 ? pratica13.querySelector('.note.ai') : null;
  if (gradeFerramentasPratica13) {
    gradeFerramentasPratica13.innerHTML = '<h3>FAÇA AGORA — teste os dois pedidos na mesma IA</h3><p>Execute o Teste A e depois o Teste B sem trocar de ferramenta. Assim você observa o efeito do contexto sem confundir essa diferença com a troca de modelo.</p>';
  }

  const praticaFinal = document.querySelector('#primeiros-laboratorios');
  if (praticaFinal) {
    const intro = praticaFinal.querySelector('p');
    if (intro) {
      intro.innerHTML = '<strong>Comparação deliberada:</strong> escolha pelo menos um dos quatro laboratórios e execute exatamente o mesmo prompt em pelo menos duas IAs. Compare utilidade, precisão, incerteza e fidelidade às restrições. O objetivo não é eleger uma “vencedora”, mas aprender a julgar respostas diferentes.';
    }
  }

  const main = document.querySelector('main');
  const navLinks = Array.from(document.querySelectorAll('.side-link[href^="#"]'));
  const panels = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!main || !navLinks.length || !panels.length) return;

  const hashesValidos = new Set(navLinks.map(link => link.getAttribute('href')));
  const isMobile = () => window.matchMedia('(max-width: 980px)').matches;

  function normalizarHash(hash) {
    return hashesValidos.has(hash) ? hash : '#inicio';
  }

  function setActive(hash) {
    const destino = normalizarHash(hash);
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === destino;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function marcarPanel(hash) {
    const destino = normalizarHash(hash);
    const target = document.querySelector(destino);
    if (!target) return;

    panels.forEach(panel => panel.classList.remove('active-panel'));
    target.classList.add('active-panel');
    setActive(destino);
  }

  function showPanel(hash, updateHistory) {
    const destino = normalizarHash(hash);
    marcarPanel(destino);

    if (updateHistory && window.location.hash !== destino) {
      history.pushState(null, '', destino);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function configurarModo() {
    main.classList.add('panel-nav-ready');
    if (isMobile()) marcarPanel(window.location.hash || '#inicio');
    else showPanel(window.location.hash || '#inicio', false);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      const hash = this.getAttribute('href');

      if (isMobile()) {
        marcarPanel(hash);
        return; // âncora nativa faz o deslocamento no celular
      }

      event.preventDefault();
      showPanel(hash, true);
    });
  });

  document.addEventListener('click', function (event) {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || anchor.classList.contains('side-link')) return;

    const hash = anchor.getAttribute('href');
    if (!hashesValidos.has(hash)) return;

    if (isMobile()) {
      marcarPanel(hash);
      return;
    }

    event.preventDefault();
    showPanel(hash, true);
  });

  window.addEventListener('hashchange', function () {
    if (isMobile()) marcarPanel(window.location.hash || '#inicio');
    else showPanel(window.location.hash || '#inicio', false);
  });

  window.addEventListener('popstate', function () {
    if (isMobile()) marcarPanel(window.location.hash || '#inicio');
    else showPanel(window.location.hash || '#inicio', false);
  });

  let ultimoModoMobile = isMobile();
  window.addEventListener('resize', function () {
    const atual = isMobile();
    if (atual !== ultimoModoMobile) {
      ultimoModoMobile = atual;
      configurarModo();
    }
  });

  configurarModo();
});

(() => {
  if (document.querySelector('script[data-ia-destaques-mbb]')) return;
  const script = document.createElement('script');
  script.src = '../../js/ia-destaques-mbb.js?v=20260927-1';
  script.defer = true;
  script.dataset.iaDestaquesMbb = '1';
  document.head.appendChild(script);
})();
