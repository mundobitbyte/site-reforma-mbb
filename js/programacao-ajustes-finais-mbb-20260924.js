(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined' || typeof visualgSteps === 'undefined' ||
      typeof aprofundarSteps === 'undefined') {
    return;
  }

  const encontrar = (lista, id) => lista.find(item => item.id === id);

  /*
   * Ajuste final MbB — 24/09/2026
   *
   * Objetivos:
   * 1. corrigir a numeração e o encadeamento de Pensar;
   * 2. reduzir a quantidade de opções de fluxograma sem remover conteúdo;
   * 3. manter Teste de mesa no percurso principal e retirar a duplicação do aprofundamento;
   * 4. apresentar padrões de contador/acumulador/busca/maior-menor somente quando
   *    repetição já tem significado prático.
   *
   * IMPORTANTE: nenhum SVG, desenho ou figura de fluxograma é alterado.
   * Os conteúdos existentes são apenas agrupados em menos opções de navegação.
   */

  function unirEtapasFluxograma(idPrincipal, idsComplementares, menu, title, objective) {
    const principal = encontrar(pensarSteps, idPrincipal);
    if (!principal) return;

    const complementares = idsComplementares
      .map(id => encontrar(pensarSteps, id))
      .filter(Boolean);

    // Só concatena quando as etapas complementares ainda existem.
    // Isso torna o ajuste seguro mesmo se o arquivo for carregado novamente.
    if (complementares.length) {
      principal.content = [principal.content, ...complementares.map(item => item.content)].join('\n');
      idsComplementares.forEach(id => {
        const index = pensarSteps.findIndex(item => item.id === id);
        if (index >= 0) pensarSteps.splice(index, 1);
      });
    }

    principal.menu = menu;
    principal.title = title;
    principal.objective = objective;
  }

  /* FLUXOGRAMAS: preservar tudo, mas reduzir nove opções para seis. */
  unirEtapasFluxograma(
    41,
    [42],
    '7 Símbolos e leitura',
    'Símbolos e leitura: como interpretar um fluxograma',
    'Reconhecer os símbolos fundamentais e seguir o fluxo passo a passo antes de construir diagramas próprios.'
  );

  unirEtapasFluxograma(
    45,
    [46],
    '10 Repetição e integração',
    'Repetição e integração no fluxograma',
    'Compreender o retorno do fluxo e integrar sequência, decisão e repetição sem alterar os desenhos já construídos.'
  );

  unirEtapasFluxograma(
    47,
    [48],
    '11 Construir e praticar',
    'Construir e praticar fluxogramas',
    'Transformar problemas em fluxogramas e consolidar a representação com atividades progressivas.'
  );

  /* PENSAR: uma única sequência visual, coerente com a ordem real de aprendizagem. */
  const rotulosPensar = {
    1: '1 O problema',
    2: '2 Saber/Fazer/Responder',
    20: '3 Raciocínio lógico',
    21: '4 Estratégias',
    3: '5 Algoritmo',
    40: '6 Fluxogramas',
    41: '7 Símbolos e leitura',
    43: '8 Sequência',
    44: '9 Decisão',
    45: '10 Repetição e integração',
    47: '11 Construir e praticar',
    5: '12 Teste de mesa',
    6: '13 Linguagem e ambiente'
  };

  Object.entries(rotulosPensar).forEach(([id, menu]) => {
    const etapa = encontrar(pensarSteps, Number(id));
    if (etapa) etapa.menu = menu;
  });

  const ordemPensar = [1, 2, 20, 21, 3, 40, 41, 43, 44, 45, 47, 5, 6];
  const ordenadas = ordemPensar.map(id => encontrar(pensarSteps, id)).filter(Boolean);
  const idsOrdenados = new Set(ordemPensar);
  const restantes = pensarSteps.filter(item => !idsOrdenados.has(item.id));
  pensarSteps.splice(0, pensarSteps.length, ...ordenadas, ...restantes);

  /*
   * ESTRATÉGIAS: retirar a antecipação de padrões que dependem de repetição.
   * O bloco havia sido acrescentado ao final da etapa por outra camada editorial.
   */
  const estrategias = encontrar(pensarSteps, 21);
  if (estrategias && typeof estrategias.content === 'string') {
    const marcador = '<h3 data-mbb="mbb-padroes-solucao">';
    const inicio = estrategias.content.indexOf(marcador);
    if (inicio >= 0) {
      estrategias.content = estrategias.content.slice(0, inicio).trimEnd();
    }
  }

  /*
   * PROGRAMAR → REPETIÇÕES: os padrões aparecem agora quando o aluno já conhece laços.
   */
  const repeticoes = visualgSteps.find(step => step.id === 5 || /Repetições/i.test(step.menu || ''));
  if (repeticoes && typeof repeticoes.content === 'string' &&
      !repeticoes.content.includes('data-mbb="mbb-padroes-repeticao"')) {
    repeticoes.content += `
      <h3 data-mbb="mbb-padroes-repeticao">Padrões que surgem quando repetimos</h3>
      <p>Depois que um laço começa a fazer sentido, alguns padrões aparecem naturalmente em problemas diferentes.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>Contar</strong><br>Somar 1 cada vez que algo acontece. Ex.: quantos alunos foram aprovados?</div>
        <div class="mini-card"><strong>Acumular</strong><br>Somar valores ao longo das repetições. Ex.: qual foi o faturamento do dia?</div>
        <div class="mini-card"><strong>Procurar</strong><br>Percorrer dados até encontrar o que interessa. Ex.: existe um RA específico?</div>
        <div class="mini-card"><strong>Maior / menor</strong><br>Comparar cada novo valor com o melhor encontrado até aquele momento.</div>
      </div>
      <div class="concept-box"><strong>O padrão vem antes da receita.</strong> Contador, acumulador, busca e maior/menor não são comandos separados: são formas de usar variáveis dentro de uma repetição para responder a uma necessidade.</div>
      <div class="task-box">
        <h4>Reconheça antes de programar</h4>
        <p>Para cada situação, diga qual padrão aparece: a) descobrir quantas vendas ocorreram; b) calcular o total vendido; c) encontrar uma placa específica; d) descobrir a maior compra do dia.</p>
      </div>`;
  }

  /* APROFUNDAR: Teste de mesa já pertence a Pensar; remover apenas a duplicação. */
  for (let i = aprofundarSteps.length - 1; i >= 0; i -= 1) {
    const etapa = aprofundarSteps[i];
    if (/Teste de mesa/i.test(etapa.menu || '') || /teste de mesa/i.test(etapa.title || '')) {
      aprofundarSteps.splice(i, 1);
    }
  }

  /* Renumeração visual do aprofundamento após a retirada da duplicação. */
  const rotulosAprofundar = {
    0: '0 Como usar',
    1: '1 IDE e projeto',
    3: '2 Estruturas de dados',
    4: '3 Exceções',
    5: '4 Depuração real',
    6: '5 Bibliotecas e pacotes',
    7: '6 Classes e objetos',
    8: '7 Qualidade e testes',
    9: '8 Versionamento',
    10: '9 Eventos e interfaces',
    11: '10 Paradigmas',
    90: '11 Algoritmos e eficiência'
  };

  Object.entries(rotulosAprofundar).forEach(([id, menu]) => {
    const etapa = encontrar(aprofundarSteps, Number(id));
    if (etapa) etapa.menu = menu;
  });

  if (typeof stepGroups !== 'undefined') {
    stepGroups.pensar = pensarSteps;
    stepGroups.visualg = visualgSteps;
    stepGroups.aprofundar = aprofundarSteps;
  }

  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
