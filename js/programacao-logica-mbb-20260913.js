(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined') return;

  // A camada de lógica entra entre a análise do problema e a formalização em algoritmo.
  // São somente duas etapas para fortalecer raciocínio sem transformar o módulo em um curso de enigmas.

  const passoLogica = {
    id: 20,
    menu: '3 Raciocínio lógico',
    title: 'Raciocínio lógico: usar pistas para chegar a conclusões',
    objective: 'Praticar dedução, restrições, verdadeiro/falso e ordem lógica antes de escrever algoritmos.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Pensar</span>
        <h3>Antes de programar, aprenda a justificar uma conclusão</h3>
        <p>Em muitos problemas, a resposta não aparece diretamente. Precisamos combinar informações, eliminar possibilidades impossíveis e justificar por que uma conclusão faz sentido. Esse tipo de raciocínio aparece o tempo todo em programação.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Fato</strong><br>Uma informação que o problema apresenta como verdadeira.</div>
        <div class="mini-card"><strong>Regra ou restrição</strong><br>Algo que limita quais soluções são possíveis.</div>
        <div class="mini-card"><strong>Dedução</strong><br>Uma conclusão obtida ao combinar fatos e regras.</div>
        <div class="mini-card"><strong>Contradição</strong><br>Quando uma possibilidade entra em conflito com alguma regra e precisa ser descartada.</div>
      </div>

      <div class="concept-box"><strong>Regra desta etapa:</strong> acertar a resposta não basta. Tente explicar qual pista eliminou cada possibilidade e por que a solução restante funciona.</div>

      <h3>Desafio 1 — Três estudantes, três trilhas</h3>
      <div class="task-box">
        <p>Ana, Bruno e Caio escolheram, cada um, uma trilha diferente: <strong>Python</strong>, <strong>Web</strong> e <strong>Arduino</strong>.</p>
        <ul>
          <li>Bruno escolheu Web.</li>
          <li>Ana não escolheu Arduino.</li>
          <li>Caio não escolheu Python.</li>
        </ul>
        <p><strong>Pergunta:</strong> qual trilha ficou com cada estudante? Não chute: elimine as possibilidades.</p>
        <details class="answer-box">
          <summary>Conferir raciocínio</summary>
          <div class="answer-content">
            <p>Bruno já ocupa Web. Restam Python e Arduino para Ana e Caio. Como Ana não pode ficar com Arduino, ela fica com Python. Sobra Arduino para Caio.</p>
            <p><strong>Solução:</strong> Ana = Python; Bruno = Web; Caio = Arduino.</p>
          </div>
        </details>
      </div>

      <h3>Desafio 2 — Uma regra com E</h3>
      <div class="task-box">
        <p>O laboratório só pode ser usado quando <strong>o professor está presente E o computador está liberado</strong>.</p>
        <div class="term-grid">
          <div class="head">Professor</div><div class="head">Computador</div><div class="head">Pode usar?</div>
          <div>presente</div><div>liberado</div><div>?</div>
          <div>presente</div><div>bloqueado</div><div>?</div>
          <div>ausente</div><div>liberado</div><div>?</div>
          <div>ausente</div><div>bloqueado</div><div>?</div>
        </div>
        <p>Preencha mentalmente a última coluna.</p>
        <details class="answer-box">
          <summary>Conferir raciocínio</summary>
          <div class="answer-content">
            <p>Somente a primeira situação permite o uso. Com <strong>E</strong>, todas as condições exigidas precisam ser verdadeiras ao mesmo tempo.</p>
          </div>
        </details>
      </div>

      <h3>Desafio 3 — A ordem importa</h3>
      <div class="task-box">
        <p>Uma atualização de sistema exige estas ações:</p>
        <ul>
          <li>fazer backup;</li>
          <li>instalar a atualização;</li>
          <li>testar o sistema;</li>
          <li>liberar o computador para uso.</li>
        </ul>
        <p>Sabemos que o backup precisa ocorrer antes da atualização, o teste precisa ocorrer depois da atualização e a liberação só pode acontecer depois do teste.</p>
        <p><strong>Pergunta:</strong> qual é a única ordem coerente?</p>
        <details class="answer-box">
          <summary>Conferir raciocínio</summary>
          <div class="answer-content">
            <p>Backup → instalar atualização → testar → liberar. Cada etapa depende do resultado da anterior.</p>
          </div>
        </details>
      </div>

      <div class="note-box"><strong>Ponte para programação:</strong> restrições se transformam em condições; combinações de verdadeiro/falso viram lógica booleana; dependências de ordem viram sequência de instruções. Ainda não precisamos de código para entender essas ideias.</div>`
  };

  const passoEstrategias = {
    id: 21,
    menu: '4 Estratégias',
    title: 'Estratégias de solução: decompor, eliminar e testar',
    objective: 'Quebrar problemas em partes menores e reconhecer sequência, decisão e repetição antes da sintaxe.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Organizar</span>
        <h3>Problemas difíceis ficam menores quando sabemos onde olhar</h3>
        <p>Raciocínio lógico não é apenas descobrir respostas de enigmas. Para programar, precisamos aprender a dividir um problema, reconhecer padrões de comportamento e testar se nossa estratégia realmente resolve todos os casos importantes.</p>
      </div>

      <h3>Quatro movimentos mentais úteis</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Decompor</strong><br>Quebrar um problema grande em partes menores e compreensíveis.</div>
        <div class="mini-card"><strong>Ordenar</strong><br>Descobrir quais ações precisam acontecer antes de outras.</div>
        <div class="mini-card"><strong>Escolher</strong><br>Perceber quando uma condição muda o caminho da solução.</div>
        <div class="mini-card"><strong>Repetir</strong><br>Reconhecer uma tarefa que precisa ocorrer várias vezes seguindo a mesma regra.</div>
      </div>

      <h3>Desafio 4 — Três computadores, três problemas</h3>
      <div class="task-box">
        <p>Os computadores PC1, PC2 e PC3 apresentam problemas diferentes: <strong>rede</strong>, <strong>login</strong> e <strong>impressora</strong>.</p>
        <ul>
          <li>O problema de login está no PC2.</li>
          <li>O PC1 não apresenta problema de impressora.</li>
          <li>O PC3 não apresenta problema de rede.</li>
        </ul>
        <p>Associe cada computador ao seu problema e explique quais possibilidades foram eliminadas.</p>
        <details class="answer-box">
          <summary>Conferir raciocínio</summary>
          <div class="answer-content">
            <p>PC2 = login. Restam rede e impressora para PC1 e PC3. Como PC1 não pode ser impressora, PC1 = rede. Logo PC3 = impressora.</p>
          </div>
        </details>
      </div>

      <h3>Desafio 5 — Onde estão decisão e repetição?</h3>
      <div class="task-box">
        <p>Um sistema de atendimento funciona assim:</p>
        <ol>
          <li>Enquanto houver pessoas na fila, chamar a próxima senha.</li>
          <li>Se a senha for prioritária, encaminhar para o atendimento prioritário.</li>
          <li>Caso contrário, encaminhar para o atendimento comum.</li>
          <li>Depois do atendimento, voltar para a fila.</li>
        </ol>
        <p><strong>Pergunta:</strong> qual parte representa repetição? Qual parte representa decisão?</p>
        <details class="answer-box">
          <summary>Conferir raciocínio</summary>
          <div class="answer-content">
            <p><strong>Repetição:</strong> continuar enquanto houver pessoas na fila. <strong>Decisão:</strong> escolher entre atendimento prioritário e comum de acordo com o tipo da senha.</p>
          </div>
        </details>
      </div>

      <h3>Desafio 6 — Decomponha antes de resolver</h3>
      <div class="task-box">
        <p>Uma biblioteca quer registrar um empréstimo. Para emprestar um livro, o sistema precisa identificar o aluno, verificar se o livro está disponível, verificar se o aluno pode realizar novos empréstimos, registrar a retirada e informar a data de devolução.</p>
        <p>Sem escrever código, divida o problema em partes menores. Depois marque onde existe uma <strong>decisão</strong> e o que o sistema precisa <strong>responder</strong>.</p>
        <details class="answer-box">
          <summary>Ver uma possível decomposição</summary>
          <div class="answer-content">
            <ol>
              <li>Identificar o aluno.</li>
              <li>Identificar o livro.</li>
              <li>Verificar disponibilidade do livro.</li>
              <li>Verificar situação do aluno.</li>
              <li>Se as duas verificações permitirem, registrar o empréstimo.</li>
              <li>Calcular/informar a data prevista de devolução.</li>
              <li>Se alguma regra impedir o empréstimo, informar o motivo.</li>
            </ol>
            <p>Não existe apenas uma redação correta. O importante é separar responsabilidades e deixar as regras explícitas.</p>
          </div>
        </details>
      </div>

      <div class="concept-box"><strong>O que você acabou de praticar:</strong> dedução, restrições, decomposição, sequência, condição e repetição. No próximo passo, essas estratégias passam a ser organizadas formalmente como um <strong>algoritmo</strong>.</div>

      <div class="note-box"><strong>Use como aquecimento:</strong> tente resolver primeiro sem abrir as respostas. O objetivo é tornar visíveis as estratégias de raciocínio que depois serão formalizadas em algoritmos e programas.</div>`
  };

  // Evita duplicação se o arquivo for carregado mais de uma vez.
  [20, 21].forEach(id => {
    const index = pensarSteps.findIndex(step => step.id === id);
    if (index >= 0) pensarSteps.splice(index, 1);
  });

  // Inserção após Saber/Fazer/Responder e antes de Algoritmo.
  const depoisDoModeloMental = pensarSteps.findIndex(step => step.id === 2);
  const pontoInsercao = depoisDoModeloMental >= 0 ? depoisDoModeloMental + 1 : Math.min(2, pensarSteps.length);
  pensarSteps.splice(pontoInsercao, 0, passoLogica, passoEstrategias);

  // Renumeração apenas visual: IDs internos permanecem estáveis para não quebrar a base existente.
  const rotulos = {
    1: '1 O problema',
    2: '2 Saber/Fazer/Responder',
    3: '5 Algoritmo',
    4: '6 Fluxograma',
    5: '7 Teste de mesa',
    6: '8 Linguagem e ambiente'
  };

  pensarSteps.forEach(step => {
    if (rotulos[step.id]) step.menu = rotulos[step.id];
  });

  // O roteiro passa a mencionar explicitamente o novo degrau cognitivo.
  if (typeof roteiroSteps !== 'undefined') {
    const percurso = roteiroSteps.find(step => step.id === 2);
    if (percurso && typeof percurso.content === 'string') {
      percurso.content = percurso.content.replace(
        '<strong>2. Organizar a solução</strong><br>Transformar o raciocínio em passos, pseudocódigo e fluxograma.',
        '<strong>2. Raciocinar e organizar a solução</strong><br>Usar pistas, regras, restrições, decomposição e padrões de sequência/decisão/repetição antes de formalizar a solução.'
      );
    }
  }

  if (typeof stepGroups !== 'undefined') {
    stepGroups.pensar = pensarSteps;
  }

  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
