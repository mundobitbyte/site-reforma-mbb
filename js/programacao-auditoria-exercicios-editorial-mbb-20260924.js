(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined' || typeof visualgSteps === 'undefined' ||
      typeof aplicarSteps === 'undefined' || typeof aprofundarSteps === 'undefined') {
    return;
  }

  const encontrar = (lista, id) => lista.find(item => item.id === id);

  /*
   * Auditoria MbB — exercícios + linguagem pública
   * - corrige somente exercícios com fechamento incompleto;
   * - remove linguagem de bastidores do conteúdo visível;
   * - não altera SVGs, figuras ou desenhos de fluxograma.
   */

  const logica = encontrar(pensarSteps, 20);
  if (logica && typeof logica.content === 'string') {
    logica.content = logica.content.replace(
      '<p>Somente a primeira situação permite o uso. Com <strong>E</strong>, todas as condições exigidas precisam ser verdadeiras ao mesmo tempo.</p>',
      '<p><strong>Respostas:</strong> presente + liberado = SIM; presente + bloqueado = NÃO; ausente + liberado = NÃO; ausente + bloqueado = NÃO.</p><p>Com <strong>E</strong>, todas as condições exigidas precisam ser verdadeiras ao mesmo tempo.</p>'
    );
  }

  const estrategias = encontrar(pensarSteps, 21);
  if (estrategias && typeof estrategias.content === 'string') {
    estrategias.content = estrategias.content.replace(
      '<li>Depois do atendimento, voltar para a fila.</li>',
      '<li>Depois do atendimento, voltar ao início e verificar se ainda há pessoas na fila.</li>\n          <li>Quando não houver mais pessoas, encerrar o atendimento.</li>'
    );

    estrategias.content = estrategias.content.replace(
      '<p><strong>Pergunta:</strong> qual parte representa repetição? Qual parte representa decisão?</p>',
      '<p><strong>Perguntas:</strong> qual trecho representa a repetição? Qual condição faz a repetição continuar? O que faz a repetição terminar? Qual trecho representa a decisão? Quais são os dois caminhos possíveis dessa decisão?</p>'
    );

    estrategias.content = estrategias.content.replace(
      '<p><strong>Repetição:</strong> continuar enquanto houver pessoas na fila. <strong>Decisão:</strong> escolher entre atendimento prioritário e comum de acordo com o tipo da senha.</p>',
      '<p><strong>Repetição:</strong> o atendimento continua enquanto houver pessoas na fila. Depois de cada atendimento, o sistema verifica novamente essa condição. Quando a fila fica vazia, a repetição termina.</p><p><strong>Decisão:</strong> verificar se a senha é prioritária. Se for, encaminhar para o atendimento prioritário; caso contrário, encaminhar para o atendimento comum.</p>'
    );

    estrategias.content = estrategias.content.replace(
      '<p>Não existe apenas uma redação correta. O importante é separar responsabilidades e deixar as regras explícitas.</p>',
      '<p><strong>Decisão:</strong> o livro está disponível <em>e</em> o aluno pode realizar o empréstimo? Se as duas condições forem atendidas, o sistema registra a retirada; caso contrário, informa o motivo que impediu o empréstimo.</p><p><strong>Resposta do sistema:</strong> quando o empréstimo é permitido, informar o registro e a data prevista de devolução; quando não é permitido, informar o motivo.</p><p>Não existe apenas uma redação correta. O importante é separar responsabilidades e deixar as regras explícitas.</p>'
    );
  }

  /* Linguagem pública: orientação direta ao aluno, sem voz de bastidor. */
  const aprofundarInicio = encontrar(aprofundarSteps, 0);
  if (aprofundarInicio && typeof aprofundarInicio.content === 'string') {
    aprofundarInicio.objective = 'Aprofundar conceitos profissionais conforme a necessidade do estudo ou do projeto, depois que a base principal já estiver compreendida.';
    aprofundarInicio.content = aprofundarInicio.content.replace(
      '<div class="concept-box"><strong>Como usar:</strong> o professor pode escolher os tópicos necessários ao componente curricular ou ao projeto. O aluno também pode voltar aqui quando encontrar uma necessidade concreta durante estudos de Python, Web, Mobile ou outros caminhos.</div>',
      '<div class="concept-box"><strong>Como usar:</strong> escolha os tópicos que respondem à necessidade do seu estudo ou projeto. Você pode voltar a esta parte quando encontrar uma necessidade concreta em Python, Web, Mobile ou outro caminho.</div>'
    );
    aprofundarInicio.content = aprofundarInicio.content.replace(
      '<div class="note-box"><strong>Não transforme aprofundamento em pré-requisito artificial.</strong> O percurso principal já fecha em Pensar → Programar → Aplicar. Esta camada existe para ampliar a formação, não para impedir o avanço.</div>',
      '<div class="note-box"><strong>Esta parte é opcional.</strong> O percurso principal já se completa em Pensar → Programar → Aplicar. Use Aprofundar para ampliar a formação quando isso fizer sentido para o que você deseja construir ou compreender.</div>'
    );
  }

  const visualgInicio = visualgSteps[0];
  if (visualgInicio && typeof visualgInicio.content === 'string') {
    visualgInicio.content = visualgInicio.content.replace(
      '<div class="note-box"><strong>Por que VisuAlg aqui?</strong> Ele funciona como o laboratório deste módulo: código curto, resultado visível e foco no raciocínio. O curso completo de VisuAlg continua em seu módulo próprio.</div>',
      '<div class="note-box"><strong>VisuAlg como laboratório.</strong> Aqui ele permite escrever código curto, executar rapidamente e observar o raciocínio funcionando. Para praticar com mais profundidade, use também o módulo específico de VisuAlg do Mundo bit Byte.</div>'
    );
  }

  /*
   * Proteção editorial: blocos antigos de produção não devem aparecer ao aluno.
   * Só remove placeholders textuais; nenhum SVG ou desenho existente é tocado.
   */
  const grupos = [];
  if (typeof roteiroSteps !== 'undefined') grupos.push(roteiroSteps);
  grupos.push(pensarSteps, visualgSteps, aplicarSteps, aprofundarSteps);

  grupos.forEach(lista => {
    lista.forEach(etapa => {
      if (!etapa || typeof etapa.content !== 'string') return;
      etapa.content = etapa.content.replace(
        /<div class="placeholder-flow">\s*<strong>IMAGEM A INSERIR[^<]*<\/strong>\s*<span>[\s\S]*?<\/span>\s*<\/div>/gi,
        '<div class="concept-box"><strong>Leitura do fluxo:</strong> identifique onde o processo começa, quais dados entram, o que é processado, quais caminhos podem mudar e onde o fluxo termina.</div>'
      );
    });
  });

  if (typeof stepGroups !== 'undefined') {
    if (typeof roteiroSteps !== 'undefined') stepGroups.roteiro = roteiroSteps;
    stepGroups.pensar = pensarSteps;
    stepGroups.visualg = visualgSteps;
    stepGroups.aplicar = aplicarSteps;
    stepGroups.aprofundar = aprofundarSteps;
  }

  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
