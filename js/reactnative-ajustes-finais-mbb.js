// Ajustes finais da lapidação MbB.
// Corrige textos residuais de bastidor/terceira pessoa e mantém os exercícios unificados funcionais.

if (typeof modules !== 'undefined') {
  const interfaceExercise = modules.interfaceBasica?.steps?.find(
    step => step.id === 'exercicios-interface-flexbox'
  );

  if (interfaceExercise && typeof interfaceExercise.html === 'string') {
    // Os exercícios originais de Interface usam showExerciseInterface() e
    // esperam os IDs exercise-clean-N. Flexbox não usa esses IDs, então
    // podemos restaurá-los sem colisão.
    interfaceExercise.html = interfaceExercise.html
      .replaceAll('if-exercise-clean-', 'exercise-clean-');
  }

  // React e Hooks: mantém a Consolidação integrada dentro do mesmo bloco
  // .exercise-clean dos exercícios antigos. Isso evita o grande espaço
  // vertical causado por dois blocos com height:100% e faz as miniaturas
  // voltarem a controlar as seções corretas pelo showExerciseInterface().
  const reactExercise = modules.state?.steps?.find(
    step => step.id === 'exercicios-state'
  );

  if (
    reactExercise &&
    typeof reactExercise.html === 'string' &&
    reactExercise.html.includes('Consolidação integrada')
  ) {
    const template = document.createElement('template');
    template.innerHTML = reactExercise.html.trim();

    const roots = Array.from(template.content.children).filter(element =>
      element.classList?.contains('exercise-clean')
    );

    const integratedRoot = roots.find(root =>
      root.textContent?.includes('Consolidação integrada')
    );

    const originalRoot = roots.find(root =>
      root !== integratedRoot && root.querySelector('.exercise-menu-panel')
    );

    const integratedPanel = integratedRoot?.querySelector('.panel.brief');

    if (integratedPanel && originalRoot) {
      const oldTop = originalRoot.querySelector('.topline.exercise-clean-top');
      const panelCopy = integratedPanel.cloneNode(true);

      // Ajuste exclusivo do primeiro card: impede que o Flexbox comprima
      // o conteúdo e melhora a leitura da lista sem afetar os demais cards.
      panelCopy.style.setProperty('flex', '0 0 auto', 'important');

      const panelBody = panelCopy.querySelector('.panel-body');
      if (panelBody) {
        panelBody.style.setProperty('padding', '14px 16px', 'important');
      }

      const panelTitle = panelCopy.querySelector('h3');
      if (panelTitle) {
        panelTitle.style.setProperty('margin-bottom', '8px', 'important');
      }

      const exerciseList = panelCopy.querySelector('ol');
      if (exerciseList) {
        exerciseList.style.setProperty('margin', '8px 0 0 22px', 'important');
        exerciseList.style.setProperty('padding', '0', 'important');

        const items = exerciseList.querySelectorAll('li');
        items.forEach((item, index) => {
          item.style.setProperty('line-height', '1.45', 'important');
          item.style.setProperty(
            'margin-bottom',
            index === items.length - 1 ? '0' : '5px',
            'important'
          );
        });
      }

      if (oldTop) {
        oldTop.insertAdjacentElement('beforebegin', panelCopy);
      } else {
        originalRoot.prepend(panelCopy);
      }

      // A observação é um rodapé geral do conjunto de exercícios, não de
      // uma atividade específica. No HTML original ela é filha direta do
      // .exercise-clean, depois das seções. Como o container tinha
      // height:100% e as seções usavam flex:1, o conteúdo da atividade
      // transbordava por baixo do rodapé. Deixamos este conjunto crescer
      // naturalmente e mantemos a observação no fluxo normal, abaixo do
      // exercício ativo.
      originalRoot.style.setProperty('height', 'auto', 'important');
      originalRoot.style.setProperty('min-height', '100%', 'important');

      originalRoot.querySelectorAll('.exercise-clean-section').forEach(section => {
        section.style.setProperty('flex', '0 0 auto', 'important');
      });

      const observation = Array.from(originalRoot.children).find(element =>
        element.classList?.contains('obs')
      );

      if (observation) {
        observation.style.setProperty('position', 'static', 'important');
        observation.style.setProperty('width', 'auto', 'important');
        observation.style.setProperty('flex', '0 0 auto', 'important');
        observation.style.setProperty('margin', '10px 0 0', 'important');
      }

      reactExercise.html = originalRoot.outerHTML;
    }
  }

  const learnerTextReplacements = new Map([
    [
      'Antes de escrever muitos comandos, o aluno precisa entender uma ideia central: a interface de um aplicativo é formada por componentes organizados dentro de outros componentes.',
      'Antes de escrever muitos comandos, você precisa entender uma ideia central: a interface de um aplicativo é formada por componentes organizados dentro de outros componentes.'
    ],
    [
      'Ao final, o aluno entende a tela como blocos organizados.',
      'Ao final, você entende a tela como blocos organizados.'
    ],
    [
      'Quando o aluno entende qual parte do app cada bloco representa, o código deixa de parecer comandos soltos e passa a ser uma estrutura organizada.',
      'Quando você entende qual parte do app cada bloco representa, o código deixa de parecer comandos soltos e passa a ser uma estrutura organizada.'
    ],
    [
      'Barra inferior conecta o aluno com padrões de apps reais.',
      'Esse tipo de barra inferior aparece em muitos aplicativos reais.'
    ],
    [
      'Orientação ao aluno:',
      'Orientação:'
    ],
    [
      'latitude e longitude não precisam aparecer na tela do app, mas devem ser entendidas pelo aluno.',
      'latitude e longitude não precisam aparecer na tela do app, mas é importante entender que elas identificam a posição usada na consulta.'
    ]
  ]);

  function cleanLearnerFacingText(root = document.body) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      let text = node.nodeValue;
      learnerTextReplacements.forEach((replacement, original) => {
        if (text.includes(original)) {
          text = text.replaceAll(original, replacement);
        }
      });
      node.nodeValue = text;
    });
  }

  if (typeof showStep === 'function') {
    const showStepMbbBase = showStep;
    showStep = function (...args) {
      const result = showStepMbbBase.apply(this, args);
      cleanLearnerFacingText();
      return result;
    };
  }

  cleanLearnerFacingText();
}

(() => {
  if(window.__MBB_VISUALIZADOR_SITE__ || document.querySelector('script[data-mbb-visualizador-site]')) return;
  const script=document.createElement('script');
  script.src='/js/mbb-visualizador-site.js?v=20260927-1';
  script.dataset.mbbVisualizadorSite='1';
  document.body.appendChild(script);
})();
