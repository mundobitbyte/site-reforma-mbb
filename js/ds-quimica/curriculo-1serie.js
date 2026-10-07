(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  if (MBB.curriculumFirstSeriesReady || typeof MBB.showLesson !== 'function') return;
  MBB.curriculumFirstSeriesReady = true;

  const previousShowLesson = MBB.showLesson;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function choice(number, label, prompt, options, correct, correctText, wrongText) {
    return `
      <div class="quick-question" data-choice-question data-correct="${correct}">
        <strong>${number}. ${label}</strong>
        <p>${prompt}</p>
        <div class="choice-row">${options.map(([key, text]) => `<button type="button" data-choice="${key}">${text}</button>`).join('')}</div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="${correctText}" data-wrong-text="${wrongText}"></div>
      </div>`;
  }

  function decorateChapter02Radiation(root) {
    if ($('[data-review-addition="cap02-radiacoes"]', root)) return;
    const curriculum = $('details.curriculum-box', root);
    if (!curriculum) return;

    curriculum.insertAdjacentHTML('beforebegin', `
      <section data-review-addition="cap02-radiacoes">
        <h3>Radiações: o núcleo também pode mudar — e isso exige outra linguagem</h3>
        <p>Nos modelos atômicos usados para explicar reações químicas, a identidade do elemento é determinada pelo número de prótons. Em alguns núcleos instáveis, porém, podem ocorrer <strong>transformações nucleares</strong> acompanhadas da emissão de partículas ou radiação eletromagnética.</p>
        <div class="two-col">
          <div class="example-box"><strong class="card-title">Química comum</strong><p>Reorganiza principalmente elétrons e ligações. Os núcleos dos átomos permanecem essencialmente os mesmos.</p></div>
          <div class="example-box"><strong class="card-title">Processo nuclear</strong><p>Pode alterar o núcleo. Por isso radioatividade não deve ser tratada como se fosse apenas mais um tipo de ligação química.</p></div>
        </div>
        <p><strong>Radiação ionizante</strong> possui energia suficiente para ionizar matéria. Dependendo do tipo, energia e exposição, pode causar efeitos biológicos; justamente por interagir com a matéria, também possui aplicações médicas e tecnológicas.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Diagnóstico</strong><p>Radiofármacos e outras técnicas podem permitir observar funções ou estruturas do organismo sob protocolos específicos.</p></div>
          <div class="example-box"><strong class="card-title">Tratamento</strong><p>Radiações podem ser empregadas para danificar células-alvo em procedimentos terapêuticos planejados por profissionais especializados.</p></div>
          <div class="example-box"><strong class="card-title">Proteção</strong><p>Tempo de exposição, distância, blindagem e características da fonte fazem parte do controle de risco. Aplicação médica não significa exposição sem critério.</p></div>
        </div>
        <div class="note-box"><strong>Radioatividade não é sinônimo de “veneno”</strong><p>O risco depende do radionuclídeo, atividade, tipo de radiação, via de exposição, tempo, distância, blindagem e dose absorvida. Decisões reais exigem medição e protocolos — não medo genérico nem falsa sensação de segurança.</p></div>
        ${choice('A','Radiação e matéria','Qual afirmação diferencia melhor uma reação química de uma transformação nuclear?', [['a','Na reação química mudam principalmente elétrons e ligações; numa transformação nuclear o núcleo pode ser alterado'],['b','Toda reação química transforma um elemento em outro'],['c','Radiação ionizante é sempre uma ligação química invisível']], 'a', 'Correto. A escala e o tipo de transformação são diferentes.', 'Pergunte se a mudança envolve principalmente elétrons/ligações ou o próprio núcleo.')}
      </section>`);
  }

  function decorateChapter04Interactions(root) {
    if ($('[data-review-addition="cap04-intermoleculares"]', root)) return;
    const curriculum = $('details.curriculum-box', root);
    if (!curriculum) return;

    curriculum.insertAdjacentHTML('beforebegin', `
      <section data-review-addition="cap04-intermoleculares">
        <h3>Interações entre partículas ajudam a explicar estado físico e propriedades</h3>
        <p>Ligação química e interação intermolecular não são a mesma coisa. Uma ligação covalente mantém átomos unidos <strong>dentro</strong> de uma molécula; interações intermoleculares atuam <strong>entre</strong> moléculas e influenciam propriedades como temperatura de ebulição, viscosidade e solubilidade.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Forças de London</strong><p>Surgem de distribuições instantâneas de elétrons e estão presentes em átomos e moléculas. Tendem a ganhar importância em partículas mais polarizáveis.</p></div>
          <div class="example-box"><strong class="card-title">Dipolo–dipolo</strong><p>Moléculas polares podem se orientar de modo que regiões parcialmente positivas e negativas se atraiam.</p></div>
          <div class="example-box"><strong class="card-title">Ligação de hidrogênio</strong><p>É uma interação intermolecular particularmente importante quando H está ligado a átomos muito eletronegativos, como O, N ou F, em contextos apropriados.</p></div>
        </div>
        <div class="note-box"><strong>Ferver água não quebra a molécula H₂O</strong><p>Na vaporização, vencemos principalmente interações entre moléculas para afastá-las. As ligações covalentes O–H permanecem. Mudança de estado físico e transformação química são processos diferentes.</p></div>
        <div class="concept-flow">
          <div><strong>Partículas</strong><span>estrutura e polaridade</span></div><div class="flow-arrow">→</div>
          <div><strong>Interações</strong><span>intensidade e organização</span></div><div class="flow-arrow">→</div>
          <div><strong>Propriedades</strong><span>estado, ebulição, solubilidade...</span></div>
        </div>
        ${choice('A','Mudança de estado','Quando água líquida evapora sem decomposição, qual mudança é mais diretamente envolvida?', [['a','Quebra de todas as ligações covalentes O–H'],['b','Afastamento das moléculas com superação de parte das interações intermoleculares'],['c','Transformação de oxigênio em hidrogênio']], 'b', 'Correto. A identidade molecular da água é preservada na mudança física de estado.', 'Evaporação é mudança física; não confunda interação entre moléculas com ligação dentro da molécula.')}
        ${choice('B','Interações','Por que substâncias moleculares diferentes podem ter temperaturas de ebulição diferentes?', [['a','Porque a intensidade das interações entre suas partículas pode ser diferente'],['b','Porque toda molécula ferve exatamente à mesma temperatura'],['c','Porque ebulição cria novos elementos']], 'a', 'Correto. Estrutura, polaridade, tamanho e interações entre partículas influenciam propriedades macroscópicas.', 'Relacione estrutura microscópica e energia necessária para separar partículas.')}
      </section>`);
  }

  function decorateChapter05Dynamics(root) {
    if ($('[data-review-addition="cap05-cinetica-equilibrio"]', root)) return;
    const curriculum = $('details.curriculum-box', root);
    if (!curriculum) return;

    curriculum.insertAdjacentHTML('beforebegin', `
      <section data-review-addition="cap05-cinetica-equilibrio">
        <h3>Velocidade de reação: não basta saber se a transformação é possível</h3>
        <p>Duas reações podem ser energeticamente possíveis e ocorrer em velocidades muito diferentes. A <strong>cinética química</strong> investiga quão rapidamente reagentes são consumidos e produtos são formados e quais fatores alteram essa rapidez.</p>
        <div class="four-col">
          <div class="example-box"><strong class="card-title">Temperatura</strong><p>Em muitos sistemas, aumentar a temperatura eleva a fração de colisões capazes de superar a barreira de ativação.</p></div>
          <div class="example-box"><strong class="card-title">Concentração</strong><p>Mais partículas reagentes por volume pode aumentar a frequência de encontros em certas reações.</p></div>
          <div class="example-box"><strong class="card-title">Superfície</strong><p>Fragmentar um sólido pode aumentar a área de contato disponível para reação.</p></div>
          <div class="example-box"><strong class="card-title">Catalisador</strong><p>Oferece um caminho reacional com menor energia de ativação e é regenerado no mecanismo global; não altera a posição do equilíbrio termodinâmico.</p></div>
        </div>
        <div class="note-box"><strong>Rápida não significa “mais exotérmica”</strong><p>Velocidade, &Delta;H e espontaneidade são ideias diferentes. O sinal de &Delta;H compara estados energéticos; a cinética descreve o caminho e a rapidez.</p></div>

        <h3>Equilíbrio químico é dinâmico</h3>
        <p>Em uma reação reversível realizada em sistema adequado, pode chegar um momento em que as velocidades dos processos direto e inverso se tornam iguais. As concentrações macroscópicas permanecem constantes, mas <strong>as transformações microscópicas continuam ocorrendo</strong>.</p>
        <div class="two-col">
          <div class="example-box"><strong class="card-title">Não significa quantidades iguais</strong><p>No equilíbrio, reagentes e produtos não precisam ter a mesma concentração; o que se iguala são as velocidades direta e inversa.</p></div>
          <div class="example-box"><strong class="card-title">Perturbações</strong><p>Mudar concentração, pressão em sistemas gasosos ou temperatura pode levar o sistema a um novo estado de equilíbrio. O efeito concreto depende da reação e da perturbação.</p></div>
        </div>
        ${choice('C','Cinética','Qual mudança costuma acelerar a reação entre um sólido e uma solução quando todo o resto é mantido?', [['a','Diminuir a área de contato do sólido'],['b','Pulverizar o sólido, aumentando a área de contato'],['c','Remover todas as partículas reagentes']], 'b', 'Correto. Maior área de contato pode aumentar a frequência de encontros na interface.', 'Pense em quantas regiões do sólido ficam disponíveis para contato com a solução.')}
        ${choice('D','Equilíbrio','Num equilíbrio químico dinâmico, o que ocorre?', [['a','As reações direta e inversa param'],['b','As velocidades direta e inversa se igualam, mantendo constantes as concentrações macroscópicas nas condições dadas'],['c','Reagentes e produtos necessariamente ficam em quantidades iguais']], 'b', 'Correto. O equilíbrio é dinâmico e não exige concentrações iguais.', 'Equilíbrio químico não significa ausência de transformação microscópica.')}
      </section>`);
  }

  function decorateChapter10Curriculum(root) {
    if ($('[data-review-addition="cap10-solucoes-ambiente"]', root)) return;
    const curriculum = $('details.curriculum-box', root);
    if (!curriculum) return;

    curriculum.insertAdjacentHTML('beforebegin', `
      <section data-review-addition="cap10-solucoes-ambiente">
        <h3>Concentração transforma “tem muito ou pouco” em uma medida</h3>
        <p>Em soluções, precisamos relacionar a quantidade de soluto à quantidade de solução. A unidade escolhida depende do problema. Uma forma simples é a <strong>concentração em massa</strong>:</p>
        <div class="formula-box"><span class="formula-name">Concentração em massa</span><div class="big-formula">C = m<sub>soluto</sub> / V<sub>solução</sub></div><p>Se 5,0 g de soluto estão presentes em 250 mL (0,250 L) de solução, C = 5,0 / 0,250 = <strong>20 g/L</strong>.</p></div>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">g/L</strong><p>Relaciona massa do soluto ao volume da solução.</p></div>
          <div class="example-box"><strong class="card-title">mol/L</strong><p>Relaciona quantidade de matéria do soluto ao volume da solução; é muito usada em cálculos químicos.</p></div>
          <div class="example-box"><strong class="card-title">% e ppm</strong><p>São formas de expressar proporções. ppm é útil para concentrações muito pequenas, desde que a base da razão esteja claramente definida.</p></div>
        </div>
        <div class="note-box"><strong>Concentração não é sinônimo de perigo</strong><p>Ela é uma informação quantitativa. Avaliar risco exige ainda identificar a substância, toxicidade, via e tempo de exposição, além das condições ambientais e dos limites técnicos aplicáveis.</p></div>
        ${choice('A','Concentração','Uma solução contém 6 g de soluto em 0,30 L de solução. Qual é a concentração em massa?', [['a','2 g/L'],['b','20 g/L'],['c','180 g/L']], 'b', 'Correto. 6 ÷ 0,30 = 20 g/L.', 'Converta o volume para litros e calcule massa do soluto dividida pelo volume da solução.')}

        <h3>Poluentes entram em ciclos e podem ser transportados</h3>
        <p>Ar, água, solo e seres vivos trocam matéria continuamente. Por isso uma emissão não deve ser analisada apenas no ponto de origem: substâncias podem ser transportadas, transformadas, acumuladas ou removidas ao longo dos <strong>ciclos biogeoquímicos</strong>.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Fonte</strong><p>Processo industrial, combustão, esgoto, agricultura, mineração ou outra atividade libera ou mobiliza matéria.</p></div>
          <div class="example-box"><strong class="card-title">Caminho</strong><p>Vento, escoamento, infiltração, reações químicas e organismos podem redistribuir ou transformar substâncias.</p></div>
          <div class="example-box"><strong class="card-title">Efeito e controle</strong><p>Monitoramento quantitativo, tratamento, substituição de processos, redução na fonte e manejo adequado podem diminuir impactos.</p></div>
        </div>
        <p>Na atmosfera, a combustão de combustíveis fósseis adiciona CO₂ ao ciclo do carbono. O <strong>efeito estufa natural</strong> é necessário para a temperatura do planeta; o aumento antrópico de gases de efeito estufa altera o balanço energético e contribui para o aquecimento global.</p>
        <div class="ok-box"><strong>Decisão sustentável exige mais de um indicador</strong><p>Ao comparar combustíveis, processos ou fontes de energia, considere eficiência, recursos usados, emissões, resíduos, riscos, custo e contexto local. “Renovável”, “natural” ou “alto poder calorífico” isoladamente não encerram a análise.</p></div>
        ${choice('B','Poluição','Por que medir a concentração de um poluente é mais informativo do que apenas dizer que ele “está presente”?', [['a','Porque permite quantificar a exposição ambiental e comparar valores em condições definidas'],['b','Porque qualquer concentração produz exatamente o mesmo efeito'],['c','Porque torna desnecessário saber qual substância está sendo medida']], 'a', 'Correto. Identidade, concentração e contexto de exposição precisam ser analisados juntos.', 'Presença/ausência é só uma parte da informação; quantidade e contexto importam.')}
        ${choice('C','Ciclo do carbono','Qual afirmação é mais adequada?', [['a','O efeito estufa é sempre um fenômeno artificial e desnecessário'],['b','O efeito estufa natural faz parte do sistema climático, mas sua intensificação por aumento antrópico de gases altera o balanço de energia'],['c','CO₂ não participa de nenhum ciclo da matéria']], 'b', 'Correto. Separe o fenômeno natural de sua intensificação antropogênica.', 'O problema não é a existência do efeito estufa natural, mas alterações no balanço por mudanças de concentração de gases.')}
      </section>`);
  }

  function decorateChapter99Curriculum(root) {
    if ($('[data-review-addition="cap99-curriculo-final"]', root)) return;
    const curriculum = $('details.curriculum-box', root);
    if (!curriculum) return;

    curriculum.insertAdjacentHTML('beforebegin', `
      <section data-review-addition="cap99-curriculo-final">
        <h3>Nível 7 — Soluções, interações, dinâmica e ambiente</h3>
        <p>Este bloco fecha os objetos curriculares que conectam estrutura da matéria, transformações e decisões ambientais.</p>
        ${choice('49','Concentração em massa','Há 4 g de soluto em 200 mL de solução. Qual é a concentração em g/L?', [['a','0,8 g/L'],['b','20 g/L'],['c','800 g/L']], 'b', 'Correto. 200 mL = 0,200 L e 4 ÷ 0,200 = 20 g/L.', 'Primeiro converta o volume para litros.')}
        ${choice('50','Mol por litro','Uma solução 0,50 mol/L possui, idealmente, quantos mol de soluto em 2,0 L de solução?', [['a','0,25 mol'],['b','1,0 mol'],['c','2,5 mol']], 'b', 'Correto. n = C·V = 0,50 × 2,0 = 1,0 mol.', 'Use quantidade = concentração × volume.')}
        ${choice('51','Interações intermoleculares','Na vaporização da água sem decomposição, o que é principalmente superado?', [['a','Interações entre moléculas'],['b','Prótons do núcleo'],['c','Todos os átomos de oxigênio']], 'a', 'Correto. A mudança de estado afasta moléculas sem destruir a identidade H₂O.', 'Mudança física de estado não é decomposição química.')}
        ${choice('52','Velocidade de reação','Por que um catalisador pode acelerar uma reação?', [['a','Porque cria matéria nova'],['b','Porque oferece um caminho com menor energia de ativação'],['c','Porque torna &Delta;H sempre mais negativo']], 'b', 'Correto. Catalisador altera o caminho cinético, não o balanço de massa nem o &Delta;H da reação global.', 'Separe cinética de termoquímica.')}
        ${choice('53','Equilíbrio químico','Em equilíbrio dinâmico:', [['a','as reações param'],['b','as velocidades direta e inversa são iguais nas condições consideradas'],['c','as concentrações de todas as espécies precisam ser iguais']], 'b', 'Correto. As quantidades macroscópicas ficam constantes enquanto os processos microscópicos continuam.', 'Equilíbrio não significa igualdade de concentrações nem paralisação.')}
        ${choice('54','Poluente','Qual sequência é mais adequada para avaliar impacto ambiental?', [['a','identificar a substância → medir quantidade/concentração → compreender transporte e transformação → avaliar exposição/efeito → escolher controle'],['b','ver a cor → concluir toxicidade → escolher qualquer tratamento'],['c','detectar presença → assumir efeito máximo']], 'a', 'Correto. Avaliação ambiental exige identidade, quantidade, caminho, exposição e mecanismo.', 'Evite transformar presença isolada em conclusão sobre risco.')}
        ${choice('55','Efeito estufa','Qual afirmação é cientificamente mais adequada?', [['a','O efeito estufa natural é necessário, e o aumento antrópico de gases pode intensificá-lo'],['b','Todo efeito estufa é causado exclusivamente por indústrias modernas'],['c','Gases atmosféricos não interagem com radiação']], 'a', 'Correto. O fenômeno natural e sua intensificação precisam ser distinguidos.', 'Separe a existência natural do efeito da mudança antrópica nas concentrações de gases.')}
        ${choice('56','Radiação','Qual decisão é mais responsável sobre radiação ionizante em saúde?', [['a','Aceitar qualquer exposição porque pode ter uso médico'],['b','Rejeitar toda aplicação porque toda radiação é automaticamente fatal'],['c','Avaliar benefício, tipo de radiação, dose e protocolos de proteção no contexto profissional']], 'c', 'Correto. Aplicações médicas dependem de justificativa, otimização e controle de exposição.', 'Nem medo absoluto nem despreocupação: contexto, dose e proteção importam.')}
        <div class="challenge-box"><strong>Desafio curricular — da amostra ao ambiente</strong><p>Uma solução industrial contém uma substância potencialmente nociva e pode alcançar um curso d’água. Explique como você usaria <strong>concentração</strong>, propriedades/interações, velocidade ou equilíbrio de transformações e transporte no ambiente para avaliar o problema antes de propor uma medida de controle.</p><details><summary>O que uma boa resposta deve conectar?</summary><p>Identidade e quantidade do contaminante; unidade de concentração; propriedades que influenciam solubilidade e transporte; possíveis transformações químicas e sua rapidez/equilíbrio; fluxo no ambiente; exposição/efeitos; intervenção na fonte, tratamento e monitoramento.</p></details></div>
      </section>`);

    const tableRows = $$('table tbody tr', root);
    const row04 = tableRows.find(row => row.cells?.[1]?.textContent.trim() === '04');
    const row05 = tableRows.find(row => row.cells?.[1]?.textContent.trim() === '05');
    const row10 = tableRows.find(row => row.cells?.[1]?.textContent.trim() === '10');
    if (row04) {
      row04.cells[0].textContent = 'ligações, interações e propriedades';
      row04.cells[2].textContent = 'Como ligações e interações entre partículas explicam propriedades?';
    }
    if (row05) {
      row05.cells[0].textContent = 'reação, energia, velocidade e equilíbrio';
      row05.cells[2].textContent = 'O que muda, quanta energia envolve e com que rapidez o sistema evolui?';
    }
    if (row10) {
      row10.cells[0].textContent = 'soluções, ambiente e segurança química';
      row10.cells[2].textContent = 'Qual é a substância, sua concentração, seu caminho e o risco nas condições reais?';
    }
  }

  function applyCurriculum(config, root) {
    const title = config.title || '';
    if (title === 'Como sabemos como é um átomo se ninguém consegue vê-lo?') decorateChapter02Radiation(root);
    if (title === 'Por que os átomos se ligam?') decorateChapter04Interactions(root);
    if (title === 'Como saber se ocorreu uma reação química?') decorateChapter05Dynamics(root);
    if (title === 'Como a Química ajuda a evitar acidentes?') decorateChapter10Curriculum(root);
    if (title === 'Você consegue usar a Química para explicar, calcular e decidir?') decorateChapter99Curriculum(root);
    MBB.initChoiceQuestions?.(root);
  }

  MBB.showLesson = (config = {}) => {
    const adjusted = { ...config };

    if (adjusted.title === 'Como sabemos como é um átomo se ninguém consegue vê-lo?') {
      adjusted.technical = 'Modelos atômicos • evidências, núcleo, isótopos e radiações';
      adjusted.objective = '<strong>Objetivo:</strong> compreender como evidências sustentam modelos atômicos, distinguir transformações químicas de nucleares e interpretar aplicações e riscos de radiações ionizantes.';
    }
    if (adjusted.title === 'Por que os átomos se ligam?') {
      adjusted.technical = 'Ligações e interações • estrutura, energia e propriedades';
      adjusted.objective = '<strong>Objetivo:</strong> compreender ligações iônicas, covalentes e metálicas, relacionando estrutura, polaridade e interações entre partículas às propriedades dos materiais.';
    }
    if (adjusted.title === 'Como saber se ocorreu uma reação química?') {
      adjusted.technical = 'Transformações químicas • evidências, energia, velocidade e equilíbrio';
      adjusted.objective = '<strong>Objetivo:</strong> reconhecer e representar transformações químicas, compreender balanço de energia, fatores que alteram a velocidade e o significado de equilíbrio químico dinâmico.';
    }
    if (adjusted.title === 'Como a Química ajuda a evitar acidentes?') {
      adjusted.technical = 'Soluções, ambiente e segurança • concentração, poluentes, risco e prevenção';
      adjusted.objective = '<strong>Objetivo:</strong> interpretar concentrações, relacionar substâncias a ciclos e impactos ambientais e tomar decisões responsáveis sobre risco, uso, armazenamento, descarte e controle.';
    }
    if (adjusted.title === 'Você consegue usar a Química para explicar, calcular e decidir?') {
      adjusted.objective = '<strong>Objetivo:</strong> consolidar os capítulos 01 a 10 por meio de 56 questões objetivas e 8 desafios integradores, identificando o que já foi compreendido e o que ainda precisa ser revisado.';
    }

    previousShowLesson(adjusted);
    const root = document.getElementById('lessonContent');
    if (root) applyCurriculum(adjusted, root);
  };
})();
