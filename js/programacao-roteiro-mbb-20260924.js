(() => {
  'use strict';

  if (typeof roteiroSteps === 'undefined' || roteiroSteps.length < 2) return;

  roteiroSteps[0] = {
    id: 1,
    menu: '1 Como aprender',
    title: 'Programação começa antes do código',
    objective: 'Perceber, em um problema simples, como entrada, processamento e saída aparecem antes da sintaxe.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Como aprender</span>
        <h3>Comece pelo problema, não pelo comando</h3>
        <p>Imagine que uma escola precise descobrir automaticamente se um aluno foi aprovado a partir de sua nota. Antes de escolher uma linguagem ou decorar comandos, já existe um problema para compreender e uma resposta para produzir.</p>
      </div>

      <h3>Primeiro pense no que o sistema precisa fazer</h3>
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER — Entrada</strong>Receber a nota do aluno.</div>
        <div class="mbb-card"><strong>FAZER — Processamento</strong>Comparar a nota com a regra de aprovação.</div>
        <div class="mbb-card"><strong>RESPONDER — Saída</strong>Informar o resultado, como “Aprovado” ou “Recuperação”.</div>
      </div>

      <div class="concept-box"><strong>Isso já é pensar como programador.</strong> Você identificou o que entra, o que precisa acontecer e qual resposta deve sair antes de escrever uma única linha de código.</div>

      <h3>Do problema até a sintaxe</h3>
      <div class="concept-box"><strong>Uma sequência útil:</strong><br>necessidade → ideia → nome técnico → sintaxe.</div>
      <p>Primeiro surge a necessidade. Depois organizamos a ideia. Quando a ideia já faz sentido, aparecem os nomes técnicos e, por último, a forma de escrevê-la em uma linguagem.</p>

      <h3>O ciclo que vai orientar este módulo</h3>
      <div class="cycle-grid">
        <div class="cycle-card"><strong>Entender</strong>Compreender o problema, quem precisa da solução e qual resultado é esperado.</div>
        <div class="cycle-card"><strong>Experimentar</strong>Prever, representar, executar, alterar e observar o que acontece.</div>
        <div class="cycle-card"><strong>Programar</strong>Transformar a solução em instruções executáveis quando a sintaxe passar a ser necessária.</div>
        <div class="cycle-card"><strong>Aplicar</strong>Resolver um problema diferente com menos ajuda e explicar o raciocínio usado.</div>
      </div>

      <div class="note-box"><strong>Testar faz parte do percurso.</strong> Ao experimentar e programar, você vai prever resultados, executar, comparar o esperado com o obtido, corrigir e tentar novamente.</div>

      <div class="task-box">
        <h4>Onde queremos chegar</h4>
        <p>Ao final do percurso, você deverá ser capaz de olhar para um problema simples, identificar dados, organizar uma solução, representá-la em um algoritmo, programar, testar o comportamento e escolher qual tecnologia faz sentido para continuar.</p>
      </div>`
  };

  roteiroSteps[1] = {
    id: 2,
    menu: '2 Seu percurso',
    title: 'Um caminho curto para aprender a programar',
    objective: 'Visualizar o percurso completo sem tentar aprender todos os conceitos e ferramentas de uma vez.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Seu percurso</span>
        <h3>Primeiro aprenda a pensar. Depois escolha a ferramenta.</h3>
        <p>Este módulo constrói a base de raciocínio que será reaproveitada em VisuAlg, Python, Web, Mobile, Git/GitHub e outros caminhos. A ideia não é estudar tudo ao mesmo tempo, mas avançar com uma sequência clara.</p>
      </div>

      <div class="concept-box"><strong>Seu percurso principal:</strong><br>Entender → Experimentar → Programar → Aplicar.</div>

      <div class="roadmap">
        <div class="roadmap-item"><strong>1. Entender</strong><br>Descobrir quem precisa da solução, qual é o problema e o que o sistema precisa Saber, Fazer e Responder.</div>
        <div class="roadmap-item"><strong>2. Experimentar</strong><br>Organizar a solução em passos, pseudocódigo e fluxograma; prever resultados, fazer teste de mesa, alterar situações e observar o que muda.</div>
        <div class="roadmap-item"><strong>3. Programar</strong><br>Usar o VisuAlg como laboratório para transformar o raciocínio em código e observar sequência, dados, decisões, repetições e funções funcionando.</div>
        <div class="roadmap-item"><strong>4. Aplicar</strong><br>Resolver um problema diferente com menos ajuda, testar a solução e explicar por que ela funciona.</div>
      </div>

      <h3>Depois da base, escolha o próximo caminho</h3>
      <p>Quando esse percurso estiver firme, aprofunde apenas no que fizer sentido para o que você deseja construir: mais lógica em <strong>VisuAlg</strong>, uma linguagem profissional em <strong>Python</strong>, aplicações <strong>Web</strong>, desenvolvimento <strong>Mobile</strong>, versionamento com <strong>Git/GitHub</strong> ou outro módulo.</p>

      <div class="concept-box"><strong>Regra MbB:</strong> cada conceito aparece quando passa a resolver uma necessidade real. Você não precisa dominar todos os termos profissionais antes de escrever seus primeiros programas.</div>

      <div class="task-box">
        <h4>Antes de continuar</h4>
        <p>Se você nunca programou, siga o percurso na ordem. Se já programa, use esta parte como revisão do raciocínio e avance para o ponto que realmente precisa aprofundar.</p>
      </div>`
  };

  if (typeof currentModule !== 'undefined' && currentModule === 'roteiro') {
    if (typeof renderMenu === 'function') renderMenu();
    if (typeof renderStep === 'function') renderStep();
  }
})();
