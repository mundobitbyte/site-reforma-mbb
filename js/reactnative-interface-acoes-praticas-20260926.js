// Etapa 2 do padrão MbB — Interfaces.
// Destaca ações práticas sem alterar arquitetura, código-base ou previews.
// Marcações visuais só entram quando existe alvo inequívoco; nesta etapa não há
// capturas do ambiente que justifiquem novas setas/círculos.
(() => {
  const STYLE_ID = 'mbb-interface-acoes-praticas-style';
  const MAX_TRIES = 240;
  let tries = 0;

  const actionBox = (acao, contexto = '') => `
    <div class="mbb-interface-action">
      <strong>Faça agora</strong>
      <span>${acao}</span>
    </div>
    ${contexto ? `<div class="mbb-interface-note-context"><strong>Observe:</strong> ${contexto}</div>` : ''}
  `;

  const apply = () => {
    tries += 1;

    if (typeof modules === 'undefined' || !modules.interfaceBasica) {
      if (tries < MAX_TRIES) setTimeout(apply, 50);
      return;
    }

    const ui = modules.interfaceBasica;
    const exercise = ui.steps?.find(step => step.id === 'exercicios-interface-flexbox');

    // A camada de exercícios é carregada depois da definição principal.
    // Quando ainda não terminou, aguarda para aplicar tudo uma única vez.
    if (!exercise || typeof exercise.html !== 'string' || !exercise.html.includes('mbb-fullscreens-retained')) {
      if (tries < MAX_TRIES) setTimeout(apply, 50);
      return;
    }

    const actions = new Map([
      ['1', '<b>Atualize o App.js</b> com o código desta etapa e <b>confira no preview</b> se a View principal ocupa toda a tela.'],
      ['2', '<b>Acrescente o cartão</b> dentro da tela principal e <b>confira no preview</b> o espaçamento em relação às laterais.'],
      ['3', '<b>Acrescente a barra de título</b> e <b>confira</b> se ela permanece dentro dos cantos arredondados do cartão.'],
      ['4', '<b>Insira o texto “Agenda de Contatos”</b> dentro da barra azul e <b>confira</b> seu alinhamento no preview.'],
      ['5', '<b>Crie a área da foto</b> e <b>confira no preview</b> o bloco temporário que indica onde a imagem ficará.'],
      ['6', '<b>Insira o componente Image</b> na área reservada e <b>confira</b> se o avatar aparece dentro do espaço da foto.'],
      ['7', '<b>Acrescente os campos Nome, Telefone e E-mail</b> e <b>confira</b> se eles ficam ao lado da foto.'],
      ['8', '<b>Crie o container dos botões</b> abaixo dos dados e <b>confira</b> sua posição antes de inserir os botões.'],
      ['9', '<b>Insira os botões Novo, Editar e Excluir</b> dentro do container e <b>compare o resultado</b> com o preview.'],
      ['10', '<b>Acrescente Salvar e Cancelar</b> e <b>confira no preview</b> a composição final da interface.']
    ]);

    const addAction = (step, acao) => {
      if (!step || step.modulePage || step.exercisePage || !acao) return;
      const original = typeof step.note === 'string' ? step.note : '';
      if (original.includes('mbb-interface-action')) return;
      step.note = actionBox(acao, original);
    };

    ui.steps.forEach(step => {
      const key = String(step?.id ?? '');
      if (actions.has(key)) {
        addAction(step, actions.get(key));
        return;
      }

      // Laboratórios Flexbox e demais passos com código: instrução segura e comum,
      // sem inventar uma propriedade ou um alvo visual que o passo não possua.
      if (step && typeof step.code === 'string' && step.code.trim() && !step.exercisePage) {
        addAction(
          step,
          '<b>Atualize o App.js</b> com o código desta etapa e <b>observe o preview</b> para identificar exatamente o efeito da mudança no layout.'
        );
      }
    });

    // Nos desafios novos, a ação principal passa a ter destaque visual completo.
    exercise.html = exercise.html
      .replace(/<p><strong>Construa:<\/strong>\s*([^<]+)<\/p>/g,
        '<p class="mbb-interface-exercise-action"><strong>Construa:</strong> <b>$1</b></p>')
      .replace(/<p><strong>Desafio:<\/strong>\s*([^<]+)<\/p>/g,
        '<p class="mbb-interface-exercise-action"><strong>Desafio:</strong> <b>$1</b></p>');

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = `
        .note:has(.mbb-interface-action)>strong:first-child{display:none}
        .mbb-interface-action{display:grid;gap:5px;margin:0 0 10px;padding:11px 12px;border:1px solid #cfe7d4;border-radius:10px;background:#f2fbf4;color:#24422c}
        .mbb-interface-action>strong{color:#176b34}
        .mbb-interface-action b{font-weight:800;color:#123b73}
        .mbb-interface-note-context{margin-top:6px;color:#475569}
        .mbb-interface-note-context>strong{color:#475569}
        .mbb-interface-exercise-action{padding:9px 11px;border-left:4px solid #1967d2;border-radius:8px;background:#f8fbff}
        .mbb-interface-exercise-action b{font-weight:800;color:#123b73}
        .exercise-guide-inline .mini-card>strong{font-weight:800;color:#123b73}
      `;
      document.head.appendChild(style);
    }

    // Se Interfaces já estiver aberto, redesenha somente a etapa atual para que
    // o destaque apareça sem exigir recarregamento manual.
    if (typeof currentModuleKey !== 'undefined' && currentModuleKey === 'interfaceBasica' && typeof showStep === 'function') {
      const active = document.querySelector('#menu .nav-btn.active');
      const activeId = active?.dataset?.step;
      if (activeId != null) showStep(activeId);
    }
  };

  apply();
})();
