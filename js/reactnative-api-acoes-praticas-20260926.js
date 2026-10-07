// Etapa 4 do padrão MbB — Web Services/APIs.
// Destaca pontos-chave de execução sem alterar códigos, previews ou arquitetura.
// Marcações visuais só entram quando existe captura com alvo inequívoco; neste módulo
// predominam código e previews gerados, então não são criadas setas/círculos artificiais.
(() => {
  const STYLE_ID = 'mbb-api-acoes-praticas-style';
  const MAX_TRIES = 240;
  let tries = 0;

  const actionBox = (acao, contexto = '') => `
    <div class="mbb-api-action">
      <strong>Faça agora</strong>
      <span>${acao}</span>
    </div>
    ${contexto ? `<div class="mbb-api-note-context"><strong>Observe:</strong> ${contexto}</div>` : ''}
  `;

  const apply = () => {
    tries += 1;

    if (typeof modules === 'undefined' || !modules.apiCep || !Array.isArray(modules.apiCep.steps)) {
      if (tries < MAX_TRIES) setTimeout(apply, 50);
      return;
    }

    const api = modules.apiCep;

    const actionFor = step => {
      const id = String(step?.id || '').toLowerCase();
      const title = String(step?.title || '').toLowerCase();
      const menu = String(step?.menu || '').toLowerCase();
      const code = String(step?.code || '');
      const all = `${id} ${title} ${menu}`;

      if (/ponte react|clima.*dados reais|fechamento/.test(all) || step?.modulePage) return '';

      if (/viacep|cep/.test(code.toLowerCase()) && /fetch\s*\(/.test(code)) {
        return '<b>Digite um CEP válido</b>, <b>toque em Pesquisar</b> e <b>confira no preview</b> os dados devolvidos pelo serviço. Depois, altere o CEP e repita a consulta para observar o fluxo completo.';
      }

      if (/bitcoin|btc|cotação|cotacao|awesomeapi/.test(`${all} ${code}`.toLowerCase()) && /fetch\s*\(/.test(code)) {
        return '<b>Execute a consulta</b> e <b>confira no preview</b> o valor recebido do serviço externo. Observe o momento em que a resposta atualiza o state e chega à interface.';
      }

      if (/json/.test(all) || /\.json\s*\(\s*\)/.test(code)) {
        return '<b>Execute a consulta</b> e <b>acompanhe a resposta</b> até a conversão com <code>json()</code>. <b>Confira</b> quais dados passam a ficar disponíveis para o JavaScript.';
      }

      if (/erro|error|catch|tratamento/.test(all) || /catch\s*\(/.test(code)) {
        return '<b>Teste primeiro o fluxo válido</b> e depois <b>provoque uma entrada inválida</b> prevista pela etapa. <b>Confira</b> se a interface trata a falha sem quebrar o aplicativo.';
      }

      if (/request|response|requisi|http|status/.test(all)) {
        return '<b>Execute o exemplo</b> e <b>identifique no fluxo</b> o pedido enviado e a resposta recebida. Relacione cada parte com request, response e status HTTP.';
      }

      if (code.trim()) {
        return '<b>Atualize o App.js</b> com o código desta etapa, <b>execute o exemplo</b> e <b>observe o preview</b> para identificar exatamente o efeito do recurso estudado.';
      }

      return '';
    };

    const addAction = (step, acao) => {
      if (!step || !acao || step.exercisePage) return;
      const original = typeof step.note === 'string' ? step.note : '';
      if (original.includes('mbb-api-action')) return;
      step.note = actionBox(acao, original);
    };

    api.steps.forEach(step => {
      if (!step) return;
      const acao = actionFor(step);
      if (acao) addAction(step, acao);
    });

    api.steps
      .filter(step => step && (step.exercisePage || /exerc/i.test(String(step.id || '')) || /^99/i.test(String(step.menu || ''))))
      .forEach(exercise => {
        if (typeof exercise.html !== 'string') return;
        exercise.html = exercise.html
          .replace(/<strong>Faça:<\/strong>/g, '<strong class="mbb-api-exercise-label">Faça:</strong>')
          .replace(/<strong>Construa:<\/strong>/g, '<strong class="mbb-api-exercise-label">Construa:</strong>')
          .replace(/<strong>Teste:<\/strong>/g, '<strong class="mbb-api-exercise-label">Teste:</strong>')
          .replace(/<strong>Desafio:<\/strong>/g, '<strong class="mbb-api-exercise-label">Desafio:</strong>')
          .replace(/<strong>Implemente:<\/strong>/g, '<strong class="mbb-api-exercise-label">Implemente:</strong>')
          .replace(/<strong>Consulte:<\/strong>/g, '<strong class="mbb-api-exercise-label">Consulte:</strong>');
      });

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = `
        .note:has(.mbb-api-action)>strong:first-child{display:none}
        .mbb-api-action{display:grid;gap:5px;margin:0 0 10px;padding:11px 12px;border:1px solid #cfe7d4;border-radius:10px;background:#f2fbf4;color:#24422c}
        .mbb-api-action>strong{color:#176b34}
        .mbb-api-action b{font-weight:800;color:#123b73}
        .mbb-api-action code{font-weight:700}
        .mbb-api-note-context{margin-top:6px;color:#475569}
        .mbb-api-note-context>strong{color:#475569}
        .mbb-api-exercise-label{font-weight:800!important;color:#123b73!important}
        .exercise-clean p:has(.mbb-api-exercise-label),
        .exercise-clean li:has(.mbb-api-exercise-label){padding:8px 10px;border-left:4px solid #1967d2;border-radius:8px;background:#f8fbff}
      `;
      document.head.appendChild(style);
    }

    if (typeof currentModuleKey !== 'undefined' && currentModuleKey === 'apiCep' && typeof showStep === 'function') {
      const active = document.querySelector('#menu .nav-btn.active');
      const activeId = active?.dataset?.step;
      if (activeId != null) showStep(activeId);
    }
  };

  apply();
})();

// Encadeia a Etapa 5 sem alterar a estrutura principal da página.
(() => {
  if (document.querySelector('script[data-mbb-nav-actions]')) return;
  const script = document.createElement('script');
  script.src = '../js/reactnative-navegacao-acoes-praticas-20260926.js?v=20260926-1';
  script.dataset.mbbNavActions = 'true';
  script.async = false;
  document.body.appendChild(script);
})();
