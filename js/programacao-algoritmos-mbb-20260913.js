(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined' || typeof aplicarSteps === 'undefined' || typeof aprofundarSteps === 'undefined') return;

  function appendOnce(step, marker, html) {
    if (!step || typeof step.content !== 'string' || step.content.includes(marker)) return;
    step.content += html;
  }

  const problema = pensarSteps.find(step => step.id === 1);
  appendOnce(problema, 'mbb-especificacao-problema', `
    <div class="concept-box" data-mbb="mbb-especificacao-problema">
      <strong>Antes de pensar na solução, especifique o problema.</strong>
      <p>Um problema fica mais claro quando conseguimos declarar cinco coisas sem escrever código:</p>
      <ul>
        <li><strong>Entrada:</strong> quais informações chegam à solução?</li>
        <li><strong>Saída:</strong> qual resultado precisa ser produzido?</li>
        <li><strong>Regras:</strong> quais condições precisam ser respeitadas?</li>
        <li><strong>Limites:</strong> quais valores ficam nas fronteiras das regras?</li>
        <li><strong>Casos inválidos:</strong> o que não pode ser aceito ou precisa ser tratado?</li>
      </ul>
    </div>

    <div class="task-box">
      <h4>Especifique antes de resolver</h4>
      <p>Uma escola precisa informar se um aluno pode retirar um equipamento. A retirada só é permitida quando o aluno está identificado, não possui pendência e o equipamento está disponível. Sem escrever algoritmo, registre a entrada, a saída, as regras e pelo menos um caso inválido.</p>
    </div>`);

  const estrategias = pensarSteps.find(step => step.id === 21);
  appendOnce(estrategias, 'mbb-padroes-solucao', `
    <h3 data-mbb="mbb-padroes-solucao">Padrões que aparecem em muitos problemas</h3>
    <p>Problemas diferentes frequentemente escondem estratégias parecidas. Reconhecer esses padrões evita começar cada solução do zero.</p>
    <div class="mini-grid">
      <div class="mini-card"><strong>Contar</strong><br>Responder “quantos?”. Ex.: quantos alunos foram aprovados?</div>
      <div class="mini-card"><strong>Acumular</strong><br>Construir um total. Ex.: qual foi o faturamento do dia?</div>
      <div class="mini-card"><strong>Procurar</strong><br>Percorrer dados até localizar algo. Ex.: existe um RA específico?</div>
      <div class="mini-card"><strong>Maior / menor</strong><br>Guardar o melhor valor encontrado até aquele momento.</div>
      <div class="mini-card"><strong>Validar</strong><br>Verificar se um dado respeita uma regra antes de continuar.</div>
      <div class="mini-card"><strong>Classificar</strong><br>Escolher uma categoria a partir de regras ou faixas.</div>
    </div>

    <h3>Duas soluções podem estar corretas</h3>
    <div class="example-box">
      <strong>Problema:</strong> procurar o RA 325 em uma lista de alunos.<br><br>
      <strong>Estratégia A:</strong> examinar toda a lista e, no final, informar se encontrou.<br>
      <strong>Estratégia B:</strong> examinar a lista e parar assim que encontrar o RA.
    </div>
    <p>As duas estratégias podem produzir a mesma resposta. Porém, se o RA estiver logo no começo, a estratégia B realiza menos verificações. Programar também envolve avaliar <strong>como</strong> uma solução trabalha, não apenas se chega ao resultado correto.</p>

    <div class="concept-box"><strong>Eficiência, por enquanto, sem fórmula:</strong> pergunte quanto trabalho a estratégia realiza e como esse trabalho cresce quando a quantidade de dados aumenta. Mais adiante existem formas matemáticas de estudar esse crescimento.</div>

    <div class="task-box">
      <h4>Compare estratégias</h4>
      <p>Imagine uma lista com 1.000 alunos. Se o aluno procurado estiver na posição 3, quantos registros a estratégia que para ao encontrar precisa verificar? E uma estratégia que obrigatoriamente percorre todos os registros? Explique qual escolha faz mais sentido e por quê.</p>
    </div>`);

  const testeMesa = pensarSteps.find(step => step.id === 5 || /Teste de mesa/i.test(step.menu || ''));
  appendOnce(testeMesa, 'mbb-estado-programa', `
    <h3 data-mbb="mbb-estado-programa">Estado: uma fotografia do programa naquele instante</h3>
    <p>Durante a execução, variáveis mudam. O conjunto dos valores relevantes em determinado instante é chamado de <strong>estado do programa</strong>. O teste de mesa registra uma sequência dessas “fotografias”.</p>

    <div class="flow">saldo começa desconhecido
↓
saldo ← 100        → estado: saldo = 100
↓
saldo ← saldo - 30 → estado: saldo = 70
↓
saldo ← saldo + 10 → estado: saldo = 80</div>

    <div class="concept-box"><strong>Por que isso importa?</strong> Decisões consultam o estado atual; atribuições mudam o estado; repetições produzem vários estados sucessivos. Na depuração, procuramos o primeiro estado que ficou diferente do esperado.</div>

    <div class="task-box">
      <h4>Rastreie sem computador</h4>
      <p>Comece com <span class="inline-code">pontos = 10</span>. Depois aplique, nesta ordem: <span class="inline-code">pontos ← pontos + 5</span>, <span class="inline-code">pontos ← pontos * 2</span> e <span class="inline-code">pontos ← pontos - 8</span>. Registre o estado após cada instrução.</p>
    </div>`);

  const testarAplicacao = aplicarSteps.find(step => step.id === 2 || /Testar e explicar/i.test(step.menu || ''));
  appendOnce(testarAplicacao, 'mbb-casos-teste', `
    <h3 data-mbb="mbb-casos-teste">Não teste só o caminho fácil</h3>
    <p>Um caso que funciona não prova que o algoritmo está correto. Antes de considerar uma solução pronta, escolha entradas com intenções diferentes.</p>
    <div class="mini-grid">
      <div class="mini-card"><strong>Caso normal</strong><br>Uma situação comum que deve funcionar sem exceções.</div>
      <div class="mini-card"><strong>Fronteira</strong><br>O valor exatamente no limite de uma regra e valores imediatamente próximos.</div>
      <div class="mini-card"><strong>Inválido</strong><br>Uma entrada que deveria ser recusada ou tratada.</div>
      <div class="mini-card"><strong>Ausência</strong><br>O item procurado não existe, a lista está vazia ou nenhuma condição é atendida.</div>
    </div>
    <div class="flow">ENTRADA → RESULTADO ESPERADO → EXECUTAR → RESULTADO OBTIDO → COMPARAR → EXPLICAR</div>
    <div class="task-box"><h4>Planeje quatro testes</h4><p>Para uma regra de desconto concedido somente em compras acima de R$ 100,00, defina um caso normal sem desconto, um caso normal com desconto, o valor de fronteira e um valor inválido. Escreva o resultado esperado antes de executar.</p></div>`);

  if (!aprofundarSteps.some(step => step.id === 90 || /Algoritmos e eficiência/i.test(step.menu || ''))) {
    aprofundarSteps.push({
      id: 90,
      menu: '12 Algoritmos e eficiência',
      title: 'O mesmo problema pode ter soluções diferentes',
      objective: 'Comparar algoritmos pela correção, clareza e quantidade de trabalho sem antecipar uma disciplina formal de complexidade.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Aprofundar</span>
          <h3>Chegar à resposta é necessário, mas não é a única pergunta</h3>
          <p>Um problema pode admitir várias estratégias corretas. À medida que os dados crescem, algumas realizam muito mais trabalho que outras. Aprender algoritmos também é aprender a comparar essas escolhas.</p>
        </div>

        <h3>Busca linear — uma estratégia fundamental</h3>
        <p>Se os dados não estão organizados de uma forma que permita uma busca mais direta, uma estratégia simples é examinar os elementos um a um.</p>
        <div class="flow">começar no primeiro elemento
↓
comparar com o valor procurado
↓
encontrou? → SIM → informar/encontrar e encerrar
↓ NÃO
há próximo? → SIM → avançar e comparar novamente
↓ NÃO
informar “não encontrado”</div>
        <p>Com 10 elementos, no pior caso fazemos até 10 comparações. Com 1.000 elementos, até 1.000. Não precisamos de uma fórmula agora para perceber que o trabalho cresce junto com a quantidade de dados.</p>

        <h3>Ordenar também é um problema algorítmico</h3>
        <p>Ordenar significa reorganizar dados segundo um critério. Uma estratégia didática simples é procurar o menor valor disponível, colocá-lo na próxima posição e repetir com o restante. Há algoritmos mais eficientes, mas o objetivo aqui é perceber que <strong>ordenar não é um comando mágico: existe uma estratégia por trás</strong>.</p>

        <h3>Critérios para comparar soluções</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Correção</strong><br>Produz o resultado certo nos casos previstos?</div>
          <div class="mini-card"><strong>Clareza</strong><br>Outra pessoa consegue entender e conferir a estratégia?</div>
          <div class="mini-card"><strong>Trabalho</strong><br>Quantas etapas, comparações ou repetições são necessárias?</div>
          <div class="mini-card"><strong>Recursos</strong><br>A solução exige guardar muitos dados adicionais?</div>
        </div>

        <div class="deep-box"><strong>Uma ideia para depois — recursão.</strong><p>Alguns problemas podem ser definidos em termos de uma versão menor do próprio problema. No fatorial, por exemplo, 4! pode ser pensado como 4 × 3!. Toda solução recursiva precisa de um caso que encerre as chamadas. O conceito é importante, mas não é pré-requisito para concluir o percurso principal.</p></div>

        <div class="task-box">
          <h4>Raciocine antes de codificar</h4>
          <p>Você precisa descobrir o maior valor de uma lista. Proponha uma estratégia que percorra os valores apenas uma vez. O que precisa ser lembrado durante o percurso? Em que momento esse valor é substituído?</p>
        </div>`
    });
  }

  if (typeof stepGroups !== 'undefined') {
    stepGroups.pensar = pensarSteps;
    stepGroups.aplicar = aplicarSteps;
    stepGroups.aprofundar = aprofundarSteps;
  }

  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
