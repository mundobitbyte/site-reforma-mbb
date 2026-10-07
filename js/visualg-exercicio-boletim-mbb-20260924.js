(function () {
  if (typeof steps === 'undefined' || typeof exerciseLevels === 'undefined') return;

  const levelId = 'visualg-atividade-boletim';
  const exercises = steps.find((item) => item.id === 99);
  if (!exercises || typeof exercises.content !== 'string') return;

  if (!exerciseLevels.some((item) => item.id === levelId)) {
    exerciseLevels.unshift({ id: levelId, label: 'Atividade integradora — Boletim da Turma' });
  }

  if (!exercises.content.includes('id="mbb-atividade-boletim"')) {
    const activity = `
<section class="exercise-level" id="mbb-atividade-boletim">
  <div class="theory-hero">
    <h3>Atividade integradora — Boletim da Turma</h3>
    <p><strong>Tempo previsto: até 80 minutos.</strong> Você vai construir um programa completo no VisuAlg, por etapas. Termine e teste uma etapa antes de continuar para a próxima.</p>
  </div>

  <div class="intro-grid">
    <div class="intro-box"><strong>O programa trabalhará com</strong><br>3 alunos e 2 notas para cada aluno.</div>
    <div class="intro-box"><strong>Você deverá calcular</strong><br>Média, situação de cada aluno e resumo da turma.</div>
    <div class="intro-box"><strong>Recursos principais</strong><br>Decisão, repetição, função, vetor, matriz, contador e acumulador.</div>
  </div>

  <h3>1. Entenda o problema antes de programar</h3>
  <p>Para cada um dos <strong>3 alunos</strong>, o programa deverá receber:</p>
  <ul>
    <li>nome;</li>
    <li>nota 1;</li>
    <li>nota 2.</li>
  </ul>

  <p>Depois, deverá calcular a média aritmética:</p>
  <div class="example-box"><strong>média = (nota 1 + nota 2) / 2</strong></div>

  <p>A situação do aluno será definida assim:</p>
  <ul>
    <li>média maior ou igual a <strong>6</strong>: <strong>Aprovado</strong>;</li>
    <li>média maior ou igual a <strong>4</strong> e menor que 6: <strong>Recuperação</strong>;</li>
    <li>média menor que <strong>4</strong>: <strong>Reprovado</strong>.</li>
  </ul>

  <div class="note"><strong>Importante:</strong> não tente escrever o programa inteiro de uma vez. Siga a ordem das etapas abaixo.</div>

  <h3>2. Prepare os dados que serão armazenados</h3>
  <p>Comece criando a estrutura básica do algoritmo e planejando as variáveis.</p>

  <h4>2.1 Nomes dos alunos</h4>
  <p>Como existem três alunos, use um <strong>vetor</strong> para armazenar os nomes.</p>
  <div class="example-box">
    posição 1 → primeiro aluno<br>
    posição 2 → segundo aluno<br>
    posição 3 → terceiro aluno
  </div>

  <h4>2.2 Notas</h4>
  <p>Cada aluno possui duas notas. Use uma <strong>matriz</strong> para armazená-las. Pense nela como uma pequena tabela:</p>
  <table>
    <thead><tr><th>Aluno</th><th>Nota 1</th><th>Nota 2</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>?</td><td>?</td></tr>
      <tr><td>2</td><td>?</td><td>?</td></tr>
      <tr><td>3</td><td>?</td><td>?</td></tr>
    </tbody>
  </table>
  <p>Assim, uma posição como <code>notas[2,1]</code> representa a primeira nota do segundo aluno.</p>

  <h4>2.3 Médias e situações</h4>
  <p>Use um <strong>vetor de médias</strong> para guardar a média de cada aluno e outro <strong>vetor</strong> para guardar sua situação final.</p>
  <p>Você também precisará de variáveis auxiliares para controlar repetições, contadores, acumuladores e comparações.</p>

  <div class="exercise-box"><strong>Teste agora:</strong> execute o algoritmo mesmo que ele ainda não faça cálculos. Nesta etapa, o objetivo é verificar se a estrutura e as declarações estão corretas.</div>

  <h3>3. Crie uma função para calcular a média</h3>
  <p>Crie uma função chamada <code>calcularMedia</code>.</p>
  <p>Ela deverá, nesta ordem:</p>
  <ol>
    <li>receber duas notas do tipo real;</li>
    <li>somar as duas notas;</li>
    <li>dividir o resultado por 2;</li>
    <li>retornar a média calculada.</li>
  </ol>
  <p>O resultado retornado pela função também deverá ser do tipo <strong>real</strong>.</p>

  <h3>4. Cadastre os três alunos</h3>
  <p>Como a quantidade de alunos já é conhecida, use uma estrutura <code>para</code> para repetir o cadastro exatamente três vezes.</p>
  <p>Em cada repetição:</p>
  <ol>
    <li>mostre qual aluno está sendo cadastrado;</li>
    <li>peça o nome e guarde-o na posição correspondente do vetor;</li>
    <li>peça a nota 1;</li>
    <li>peça a nota 2;</li>
    <li>guarde as notas na matriz;</li>
    <li>chame a função <code>calcularMedia</code>;</li>
    <li>guarde a média no vetor de médias.</li>
  </ol>

  <div class="note"><strong>Pense na repetição:</strong> uma repetição controla qual aluno está sendo cadastrado. Para as duas notas, você pode usar outra repetição dentro dela. A repetição externa controla o <strong>aluno</strong>; a interna controla a <strong>nota</strong>.</div>

  <h3>5. Descubra a situação de cada aluno</h3>
  <p>Depois de calcular a média do aluno, use uma estrutura de decisão para definir sua situação.</p>
  <ol>
    <li>Se a média for maior ou igual a 6, guarde <strong>Aprovado</strong>.</li>
    <li>Senão, se a média for maior ou igual a 4, guarde <strong>Recuperação</strong>.</li>
    <li>Senão, guarde <strong>Reprovado</strong>.</li>
  </ol>

  <p>Guarde a situação na mesma posição do aluno. A posição deve continuar representando a mesma pessoa em todos os vetores:</p>
  <div class="example-box">
    <code>nomes[2]</code> → nome do segundo aluno<br>
    <code>medias[2]</code> → média do segundo aluno<br>
    <code>situacoes[2]</code> → situação do segundo aluno
  </div>

  <section class="exercise-solved">
    <h3>Checkpoint 1 — Teste o cadastro e as situações</h3>
    <p>Execute o programa com estes dados:</p>
    <table>
      <thead><tr><th>Aluno</th><th>Nome</th><th>Nota 1</th><th>Nota 2</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Ana</td><td>8</td><td>6</td></tr>
        <tr><td>2</td><td>Bruno</td><td>5</td><td>4</td></tr>
        <tr><td>3</td><td>Carla</td><td>3</td><td>2</td></tr>
      </tbody>
    </table>
    <p>Os resultados esperados são:</p>
    <ul>
      <li>Ana → média 7 → Aprovado;</li>
      <li>Bruno → média 4,5 → Recuperação;</li>
      <li>Carla → média 2,5 → Reprovado.</li>
    </ul>
    <p>Se algum resultado estiver diferente, corrija esta parte antes de continuar.</p>
  </section>

  <h3>6. Mostre o boletim completo</h3>
  <p>Agora percorra novamente os três alunos usando outro <code>para</code>.</p>
  <p>Para cada aluno, mostre:</p>
  <div class="example-box">
    <strong>ALUNO 1</strong><br><br>
    Nome: Ana<br>
    Nota 1: 8<br>
    Nota 2: 6<br>
    Média: 7<br>
    Situação: Aprovado
  </div>
  <p>Depois apresente o segundo e o terceiro aluno.</p>
  <div class="note"><strong>Atenção:</strong> não peça novamente os dados. Eles já estão armazenados. Agora você deve apenas percorrer as estruturas e mostrar o que foi guardado.</div>

  <h3>7. Calcule o resumo da turma</h3>
  <p>O programa deverá descobrir:</p>
  <ul>
    <li>média geral da turma;</li>
    <li>quantidade de aprovados;</li>
    <li>quantidade de alunos em recuperação;</li>
    <li>quantidade de reprovados;</li>
    <li>maior média da turma;</li>
    <li>nome do aluno que conseguiu a maior média.</li>
  </ul>

  <h4>7.1 Média geral</h4>
  <p>Crie uma variável acumuladora e comece com valor 0. Percorra os alunos, some cada média ao acumulador e, somente depois de terminar a repetição, divida o total por 3.</p>

  <h4>7.2 Contadores</h4>
  <p>Crie três contadores, todos começando com 0:</p>
  <ul>
    <li>quantidade de aprovados;</li>
    <li>quantidade em recuperação;</li>
    <li>quantidade de reprovados.</li>
  </ul>
  <p>Durante a repetição, observe a situação de cada aluno e aumente somente o contador correspondente.</p>

  <h4>7.3 Maior média</h4>
  <p>Antes de começar a comparação, considere inicialmente que:</p>
  <ul>
    <li>a maior média é a média do primeiro aluno;</li>
    <li>o aluno com maior média é o primeiro aluno.</li>
  </ul>
  <p>Depois percorra os alunos. Sempre que encontrar uma média maior que a maior encontrada até aquele momento, atualize:</p>
  <ol>
    <li>a maior média;</li>
    <li>o nome do aluno correspondente.</li>
  </ol>
  <p>Essas duas informações precisam ser atualizadas juntas.</p>

  <h3>8. Apresente o resumo final</h3>
  <p>No final da execução, mostre algo neste formato:</p>
  <div class="example-box">
    <strong>RESUMO DA TURMA</strong><br><br>
    Média geral: ...<br>
    Aprovados: ...<br>
    Recuperação: ...<br>
    Reprovados: ...<br>
    Maior média: ...<br>
    Aluno com maior média: ...
  </div>

  <section class="exercise-solved">
    <h3>Checkpoint 2 — Confira o resumo</h3>
    <p>Usando novamente Ana (8 e 6), Bruno (5 e 4) e Carla (3 e 2), o programa deverá encontrar:</p>
    <ul>
      <li>Aprovados: 1;</li>
      <li>Recuperação: 1;</li>
      <li>Reprovados: 1;</li>
      <li>Maior média: 7;</li>
      <li>Aluno com maior média: Ana;</li>
      <li>Média geral: aproximadamente 4,67.</li>
    </ul>
    <p>Se algum resultado estiver diferente, volte apenas à parte responsável por esse cálculo e teste novamente.</p>
  </section>

  <h3>9. Faça um último teste com outros valores</h3>
  <p>Execute novamente o algoritmo usando dados escolhidos por você. Monte um caso em que:</p>
  <ul>
    <li>dois alunos sejam aprovados;</li>
    <li>um aluno seja reprovado;</li>
    <li>a maior média pertença ao terceiro aluno.</li>
  </ul>
  <p>Depois confira se nomes, notas, médias, situações, contadores, média geral e maior média continuam corretos.</p>

  <h3>10. Confira o que seu programa precisa ter</h3>
  <p>Antes de considerar a atividade concluída, verifique se você utilizou:</p>
  <ul>
    <li>variáveis;</li>
    <li>entrada e saída de dados;</li>
    <li>operadores aritméticos;</li>
    <li>operadores relacionais;</li>
    <li>decisão com <code>se</code> e <code>senao</code>;</li>
    <li>repetição com <code>para</code>;</li>
    <li>contador;</li>
    <li>acumulador;</li>
    <li>uma função criada por você;</li>
    <li>vetor;</li>
    <li>matriz;</li>
    <li>repetição para percorrer os dados armazenados.</li>
  </ul>

  <div class="exercise-box">
    <strong>Checklist final</strong>
    <ul>
      <li>O programa cadastra exatamente três alunos?</li>
      <li>Cada aluno possui duas notas armazenadas na matriz?</li>
      <li>Os nomes estão em um vetor?</li>
      <li>As médias foram calculadas pela função?</li>
      <li>A situação de cada aluno está correta?</li>
      <li>O boletim apresenta os três alunos?</li>
      <li>A média geral está correta?</li>
      <li>Os três contadores estão corretos?</li>
      <li>A maior média está correta?</li>
      <li>O nome mostrado realmente pertence ao aluno que conseguiu essa média?</li>
    </ul>
    <p>Quando todas as respostas forem <strong>sim</strong>, a atividade principal está concluída.</p>
  </div>

  <h3>Desafio extra — somente depois de concluir a atividade principal</h3>
  <p>Acrescente um menu ao programa:</p>
  <div class="example-box">
    1 — Mostrar boletim dos alunos<br>
    2 — Mostrar resumo da turma<br>
    0 — Encerrar
  </div>
  <p>Use <code>escolha</code> para tratar as opções e faça o menu aparecer novamente enquanto o usuário não escolher 0.</p>
</section>
`;

    const marker = '<section class="exercise-level"><h3>Nível 1 — Fundamentos</h3>';
    if (exercises.content.includes(marker)) {
      exercises.content = exercises.content.replace(marker, activity + marker);
    }
  }

  const nav = document.getElementById('menu');
  if (nav && typeof buildMenu === 'function') {
    nav.innerHTML = '<h3>Etapas</h3>';
    buildMenu();
    if (typeof showStep === 'function') showStep(0);
  }
})();
