(() => {
  'use strict';

  if (typeof roteiroSteps === 'undefined' || typeof pensarSteps === 'undefined' ||
      typeof visualgSteps === 'undefined' || typeof aprofundarSteps === 'undefined' ||
      typeof aplicarSteps === 'undefined') {
    return;
  }

  /*
   * Cirurgia MbB — 12/09/2026
   * Objetivo: preservar a base aprovada e reduzir sobreposição com os módulos
   * especializados de VisuAlg, Python, Web, Mobile e Git/GitHub.
   * O percurso principal fica: pensar → programar → aplicar.
   * Conteúdos profissionais permanecem disponíveis como aprofundamento opcional.
   */

  const flowSequence = `
    <div class="flow" aria-label="Fluxograma textual de sequência">
INÍCIO
  ↓
receber quantidades, preços e valor pago
  ↓
calcular valores dos produtos
  ↓
somar o total
  ↓
calcular o troco
  ↓
mostrar total e troco
  ↓
FIM</div>`;

  const flowDecision = `
    <div class="flow" aria-label="Fluxograma textual de decisão">
valor recebido é suficiente?
  ├─ SIM → calcular troco → informar total e troco
  └─ NÃO → informar “valor insuficiente”</div>`;

  const flowLoop = `
    <div class="flow" aria-label="Fluxograma textual de repetição">
iniciar atendimento
  ↓
registrar e calcular uma venda
  ↓
mostrar resultado
  ↓
há outro atendimento?
  ├─ SIM → voltar ao início do atendimento
  └─ NÃO → encerrar</div>`;

  function replacePlaceholder(step, replacement) {
    if (!step || typeof step.content !== 'string') return;
    step.content = step.content.replace(
      /<div class="placeholder-flow">[\s\S]*?<\/div>/,
      replacement
    );
  }

  /* ROTEIRO: trocar a lista extensa de conteúdos por um mapa cognitivo curto. */
  if (roteiroSteps[1]) {
    roteiroSteps[1] = {
      id: 2,
      menu: '2 Seu percurso',
      title: 'Um caminho curto para aprender a programar',
      objective: 'Saber o que vem primeiro, o que vem depois e onde aprofundar sem tentar aprender tudo de uma vez.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Seu percurso</span>
          <h3>Primeiro aprenda a pensar. Depois escolha a ferramenta.</h3>
          <p>Este módulo não tenta substituir os cursos de VisuAlg, Python, Web, Mobile ou Git. A função dele é construir a base que permite aprender qualquer um desses caminhos com mais segurança.</p>
        </div>

        <div class="roadmap">
          <div class="roadmap-item"><strong>1. Entender o problema</strong><br>Descobrir quem precisa da solução, quais dados entram e qual resultado é esperado.</div>
          <div class="roadmap-item"><strong>2. Organizar a solução</strong><br>Transformar o raciocínio em passos, pseudocódigo e fluxograma.</div>
          <div class="roadmap-item"><strong>3. Programar</strong><br>Usar o VisuAlg como laboratório para ver sequência, dados, decisão, repetição e funções funcionando.</div>
          <div class="roadmap-item"><strong>4. Testar</strong><br>Prever resultados, fazer teste de mesa, executar e comparar o que deveria acontecer com o que aconteceu.</div>
          <div class="roadmap-item"><strong>5. Aplicar</strong><br>Resolver um problema diferente com menos ajuda para provar que o raciocínio foi aprendido.</div>
          <div class="roadmap-item"><strong>6. Escolher o próximo caminho</strong><br>Aprofundar em VisuAlg, Python, Web, Mobile, Git/GitHub ou outro módulo conforme o objetivo.</div>
        </div>

        <div class="concept-box"><strong>Regra MbB:</strong> você não precisa conhecer todos os termos profissionais antes de escrever seus primeiros programas. Cada conceito aparece quando passa a resolver uma necessidade real.</div>

        <div class="task-box">
          <h4>Antes de continuar</h4>
          <p>Se você nunca programou, siga as etapas na ordem. Se já programa, use o módulo como revisão do raciocínio e avance para o caminho especializado que precisa.</p>
        </div>`
    };
  }

  /* PENSAR: fluxograma deixa de parecer incompleto. */
  replacePlaceholder(pensarSteps.find(step => /Fluxograma/i.test(step.menu)), flowSequence);

  /* PENSAR: teste de mesa vem antes da primeira trilha longa de código. */
  const testeMesaOriginal = aprofundarSteps.find(step => /Teste de mesa/i.test(step.menu));
  if (testeMesaOriginal && !pensarSteps.some(step => /Teste de mesa/i.test(step.menu))) {
    const testeMesa = {
      ...testeMesaOriginal,
      id: 5,
      menu: '5 Teste de mesa',
      title: 'Antes de executar, aprenda a prever',
      objective: 'Acompanhar valores passo a passo para descobrir erros de raciocínio antes de depender da execução.'
    };
    pensarSteps.splice(4, 0, testeMesa);
  }

  /* PENSAR: ambiente técnico em profundidade deixa de bloquear o primeiro programa. */
  const linguagemIndex = pensarSteps.findIndex(step => /Linguagem e ambiente/i.test(step.menu));
  if (linguagemIndex >= 0) {
    pensarSteps[linguagemIndex] = {
      id: 6,
      menu: '6 Linguagem e ambiente',
      title: 'Como o algoritmo vira um programa?',
      objective: 'Distinguir linguagem, programa e ambiente de desenvolvimento apenas no nível necessário para começar a programar.',
      content: `
        <div class="hero-box">
          <h3>O raciocínio já existe. Agora precisamos escrevê-lo de um jeito que a ferramenta entenda.</h3>
          <p>Um algoritmo descreve a solução. Uma linguagem de programação oferece regras para escrever essa solução. Um ambiente de desenvolvimento ajuda a editar, executar, testar e corrigir o programa.</p>
        </div>

        <div class="mini-grid">
          <div class="mini-card"><strong>Algoritmo</strong><br>A solução organizada em passos.</div>
          <div class="mini-card"><strong>Linguagem</strong><br>A forma usada para expressar a solução em código.</div>
          <div class="mini-card"><strong>Código-fonte</strong><br>O texto do programa escrito pelo programador.</div>
          <div class="mini-card"><strong>Ambiente</strong><br>A ferramenta usada para escrever, executar, testar e corrigir.</div>
        </div>

        <p>Neste módulo, o <strong>VisuAlg</strong> será o primeiro laboratório porque sua escrita é próxima do pseudocódigo. Depois, a mesma lógica poderá ser reconhecida em Python e em outras linguagens.</p>

        <div class="concept-box"><strong>A ideia mais importante:</strong> a linguagem pode mudar; o problema, o algoritmo e as estruturas de raciocínio continuam reconhecíveis.</div>

        <div class="optional-box"><strong>Mais adiante:</strong> compilador, interpretador, runtime, SDK, IDE, empacotamento e outros conceitos profissionais aparecem no aprofundamento, quando já houver experiência prática para dar significado a esses termos.</div>`
    };
  }

  /* PROGRAMAR: explicitar que VisuAlg é laboratório, não duplicação do módulo completo. */
  if (visualgSteps[0] && !visualgSteps[0].content.includes('laboratório deste módulo')) {
    visualgSteps[0].content = `
      <div class="note-box"><strong>Por que VisuAlg aqui?</strong> Ele funciona como o laboratório deste módulo: código curto, resultado visível e foco no raciocínio. O curso completo de VisuAlg continua em seu módulo próprio.</div>` + visualgSteps[0].content;
  }

  replacePlaceholder(visualgSteps.find(step => /Decisões/i.test(step.menu)), flowDecision);
  replacePlaceholder(visualgSteps.find(step => /Repetições/i.test(step.menu)), flowLoop);

  /* Transferência curta: mostrar que o conceito sobrevive à troca de linguagem sem criar um segundo curso de Python. */
  if (!visualgSteps.some(step => /A linguagem muda/i.test(step.menu))) {
    visualgSteps.push({
      id: 8,
      menu: '8 A linguagem muda',
      title: 'A linguagem muda; o raciocínio permanece',
      objective: 'Reconhecer em Python conceitos já aprendidos sem transformar este módulo em outro curso de Python.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Transferir</span>
          <h3>Você já sabe mais do que parece</h3>
          <p>Depois de aprender entrada, processamento, decisão, repetição e funções, mudar de linguagem não significa começar novamente do zero. O principal trabalho passa a ser reconhecer como a nova linguagem escreve ideias que você já conhece.</p>
        </div>

        <div class="code-compare">
          <div>
            <h4>VisuAlg</h4>
            <pre class="command">se total >= 50 entao
   escreval("Frete grátis")
senao
   escreval("Frete cobrado")
fimse</pre>
          </div>
          <div>
            <h4>Python</h4>
            <pre class="command">if total >= 50:
    print("Frete grátis")
else:
    print("Frete cobrado")</pre>
          </div>
        </div>

        <div class="concept-box"><strong>O conceito é o mesmo:</strong> avaliar uma condição e escolher entre dois caminhos. O que mudou foi a sintaxe.</div>

        <div class="task-box">
          <h4>Confira se entendeu</h4>
          <p>Sem decorar os comandos de Python, explique o que aconteceria com <span class="inline-code">total = 40</span> e com <span class="inline-code">total = 70</span>. Se consegue prever os dois resultados, você está transferindo raciocínio, não apenas copiando sintaxe.</p>
        </div>`
    });
  }

  /* APLICAR: projeto final passa a ser realmente o fechamento do percurso obrigatório. */
  const desktopEventos = aplicarSteps.find(step => /Desktop e eventos/i.test(step.menu));
  const paradigmas = aplicarSteps.find(step => /Paradigmas/i.test(step.menu));

  aplicarSteps.splice(2);
  aplicarSteps.push({
    id: 3,
    menu: '3 Fechamento',
    title: 'Você aprendeu a pensar como programador. E agora?',
    objective: 'Escolher o próximo caminho de estudo a partir do que deseja construir, sem repetir conteúdos desnecessariamente.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Fechamento</span>
        <h3>O objetivo deste módulo não era decorar uma linguagem.</h3>
        <p>Você partiu de problemas, organizou algoritmos, representou soluções, programou, previu resultados, testou e transferiu o raciocínio para um problema diferente. Essa é a base que os demais módulos do Mundo bit Byte passam a aproveitar.</p>
      </div>

      <h3>Escolha seu próximo caminho</h3>
      <div class="mini-grid">
        <a class="link-card" href="visualg.html"><strong>VisuAlg</strong><br>Aprofunde lógica, estruturas e exercícios progressivos.</a>
        <a class="link-card" href="python.html"><strong>Python</strong><br>Aprenda uma linguagem profissional, ambiente, arquivos, objetos, testes e projetos.</a>
        <a class="link-card" href="programacao-web.html"><strong>Programação Web</strong><br>Leve a lógica para sites e aplicações Web.</a>
        <a class="link-card" href="git.html"><strong>Git e GitHub</strong><br>Aprenda versionamento, histórico e colaboração.</a>
        <a class="link-card" href="appinventor.html"><strong>App Inventor</strong><br>Use programação visual para construir aplicativos mobile.</a>
        <a class="link-card" href="reactnative.html"><strong>React Native</strong><br>Avance para desenvolvimento mobile com código.</a>
      </div>

      <div class="concept-box"><strong>Você não precisa seguir todos os caminhos.</strong> Escolha o próximo módulo pela necessidade do que deseja construir.</div>

      <div class="task-box">
        <h4>Última verificação</h4>
        <p>Escolha um problema simples que não apareceu neste módulo. Explique quem precisa da solução, o que ela deve Saber, Fazer e Responder, quais decisões ou repetições podem surgir e como você testaria o resultado. Se consegue fazer isso sem receber os comandos prontos, a base foi construída.</p>
      </div>`
  });

  /* APROFUNDAR: preservar cobertura sem tornar esse bloco obrigatório para iniciantes. */
  if (!aprofundarSteps.some(step => step.menu === '0 Como usar')) {
    aprofundarSteps.unshift({
      id: 0,
      menu: '0 Como usar',
      title: 'Aprofundamento é uma segunda camada',
      objective: 'Usar conceitos profissionais depois da base, escolhendo o que faz sentido para a turma ou para o projeto.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Opcional</span>
          <h3>Você não precisa estudar esta parte antes de concluir o percurso principal.</h3>
          <p>IDE, estruturas de dados, exceções, depuração, bibliotecas, objetos, testes, versionamento e paradigmas são importantes, mas fazem mais sentido quando o aluno já escreveu, executou e testou programas básicos.</p>
        </div>

        <div class="concept-box"><strong>Como usar:</strong> o professor pode escolher os tópicos necessários ao componente curricular ou ao projeto. O aluno também pode voltar aqui quando encontrar uma necessidade concreta durante estudos de Python, Web, Mobile ou outros caminhos.</div>

        <div class="note-box"><strong>Não transforme aprofundamento em pré-requisito artificial.</strong> O percurso principal já fecha em Pensar → Programar → Aplicar. Esta camada existe para ampliar a formação, não para impedir o avanço.</div>`
    });
  }

  if (desktopEventos && !aprofundarSteps.some(step => /Eventos e interfaces/i.test(step.menu))) {
    aprofundarSteps.push({
      ...desktopEventos,
      id: 10,
      menu: '10 Eventos e interfaces',
      title: 'Quando o programa passa a reagir às ações do usuário'
    });
  }

  if (paradigmas && !aprofundarSteps.some(step => /Paradigmas/i.test(step.menu))) {
    aprofundarSteps.push({
      ...paradigmas,
      id: 11,
      menu: '11 Paradigmas'
    });
  }

  /* A antiga trilha interna de Python continua preservada no arquivo-base, mas deixa de
     disputar espaço com o módulo Python completo. */
  if (typeof stepGroups !== 'undefined') {
    stepGroups.visualg = visualgSteps;
    stepGroups.pensar = pensarSteps;
    stepGroups.aplicar = aplicarSteps;
    stepGroups.aprofundar = aprofundarSteps;
  }

  /* Atualiza a tela inicial, já renderizada pelo arquivo-base antes desta cirurgia. */
  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
