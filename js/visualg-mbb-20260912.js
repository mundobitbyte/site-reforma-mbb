(function () {
  if (typeof steps === 'undefined' || typeof buildMenu !== 'function' || typeof showStep !== 'function') return;

  const getStep = (id) => steps.find((item) => item.id === id);

  // Fluxogramas já pertencem ao módulo Programação de Computadores.
  const fluxoIndex = steps.findIndex((item) => item.id === 2);
  if (fluxoIndex >= 0) steps.splice(fluxoIndex, 1);

  const introStep = getStep(0);
  if (introStep) {
    introStep.title = 'Como estudar com o VisuAlg';
    introStep.objective = 'Aprender pelo ciclo prever, executar, observar, modificar e comparar.';
  }

  const s1 = getStep(1);
  if (s1) {
    s1.menu = '1 VisuAlg';
    s1.title = '1 — O que o VisuAlg faz';
    s1.objective = 'Entender o papel do VisuAlg e reconhecer entrada, processamento e saída em um problema simples.';
    s1.content = `<div class="theory-page">
      <div class="theory-hero">
        <h3>Do problema para um algoritmo executável</h3>
        <p>Imagine que uma escola precise receber duas notas, calcular a média e mostrar o resultado. Antes de decorar comandos, precisamos saber quais dados entram, o que será feito com eles e qual resposta o programa deverá apresentar.</p>
      </div>
      <h3>O papel do VisuAlg</h3>
      <p>O VisuAlg é um ambiente didático que executa algoritmos escritos em Portugol. Ele permite praticar os mesmos conceitos fundamentais que depois aparecem em outras linguagens: dados, cálculos, decisões, repetições, vetores e funções.</p>
      <div class="intro-grid">
        <div class="intro-box"><strong>Entrada</strong><br>O que o programa precisa receber ou conhecer.</div>
        <div class="intro-box"><strong>Processamento</strong><br>O que o programa calcula, compara ou transforma.</div>
        <div class="intro-box"><strong>Saída</strong><br>O resultado que o programa apresenta.</div>
      </div>
      <div class="example-box"><strong>Exemplo — média de duas notas</strong><br><br><strong>Entrada:</strong> nota1 e nota2.<br><strong>Processamento:</strong> (nota1 + nota2) / 2.<br><strong>Saída:</strong> média calculada.</div>
      <h3>Como estudar cada exemplo</h3>
      <ol>
        <li><strong>Preveja:</strong> tente imaginar o resultado antes de executar.</li>
        <li><strong>Execute:</strong> rode o algoritmo e observe a saída.</li>
        <li><strong>Compare:</strong> verifique se o resultado foi o que você esperava.</li>
        <li><strong>Modifique:</strong> altere um valor ou uma condição e execute novamente.</li>
        <li><strong>Explique:</strong> diga com suas palavras por que o resultado mudou.</li>
      </ol>
      <div class="exercise-box"><strong>Antes de programar:</strong> uma cantina precisa receber o preço e a quantidade de um produto e informar o total da compra. Identifique apenas a entrada, o processamento e a saída.</div>
    </div>`;
  }

  const s3 = getStep(3);
  if (s3) {
    s3.menu = '2 Estrutura';
    s3.title = '2 — Primeiro Programa no VisuAlg';
    s3.objective = 'Executar um algoritmo mínimo e reconhecer onde o programa começa, executa comandos e termina.';
    s3.added = `Conceito:\nTodo algoritmo executável no VisuAlg possui uma estrutura básica.\n\nSintaxe:\nalgoritmo "Nome_Do_Algoritmo"\ninicio\n   comandos\nfimalgoritmo\n\nComentário:\n// texto que explica algo importante e não é executado`;
    s3.note = `<span class="badge">Experimente</span><br>Antes de executar, preveja a saída. Depois altere uma das mensagens, execute novamente e compare o resultado.`;
  }

  const s4 = getStep(4);
  if (s4) {
    s4.menu = '3 Variáveis';
    s4.title = '3 — Memória, Tipos de Dados e Variáveis';
    s4.objective = 'Representar informações na memória com nomes e tipos adequados.';
    s4.added = `Conceito:\nVariável é um espaço da memória usado para guardar um valor que pode mudar durante a execução. Cada variável possui nome e tipo.\n\nTipos básicos:\ninteiro: números sem casas decimais.\nreal: números com casas decimais.\ncaractere: letras ou textos.\nlogico: verdadeiro ou falso.\n\nSintaxe:\nvar\n   nomeDaVariavel: tipo\n\nValores escritos diretamente no algoritmo também são constantes literais, como 10, 7.5, "Ana" e verdadeiro. No VisuAlg, números reais usam ponto como separador decimal.`;
  }

  const s5 = getStep(5);
  if (s5) {
    s5.menu = '4 Entrada';
    s5.title = '4 — Entrada e Saída de Dados';
    s5.objective = 'Receber dados do usuário e apresentar respostas de forma clara.';
    s5.added = `Conceito:\nEntrada é quando o algoritmo recebe dados. Saída é quando apresenta uma informação ou resultado.\n\nSintaxe:\nescreva("mensagem")\nleia(variavel)\nescreval("mensagem", variavel)\n\nDiferença:\nescreva mantém o cursor na mesma linha.\nescreval pula para a próxima linha.\n\nBoa prática:\nMostre uma mensagem clara antes de cada leitura para que o usuário saiba o que deve digitar.`;
  }

  const s6 = getStep(6);
  if (s6) {
    s6.menu = '5 Operadores';
    s6.title = '5 — Operadores e Expressões';
    s6.objective = 'Calcular, comparar valores e montar expressões sem depender de tentativa e erro.';
    s6.code = `algoritmo "Operadores"\nvar\n   a, b, soma: inteiro\n   maior: logico\ninicio\n   a <- 10\n   b <- 3\n   soma <- a + b\n   maior <- a > b\n\n   escreval("Soma: ", soma)\n   escreval("Divisão real: ", a / b)\n   escreval("Divisão inteira: ", a \\ b)\n   escreval("Resto: ", a MOD b)\n   escreval("A é maior que B? ", maior)\nfimalgoritmo`;
    s6.added = `Conceito:\nOperadores formam expressões que calculam ou comparam valores.\n\nAritméticos:\n+ soma | - subtração | * multiplicação | / divisão real | \\ divisão inteira | MOD resto | ^ potência\n\nRelacionais:\n> maior | < menor | >= maior ou igual | <= menor ou igual | = igual | <> diferente\n\nLógicos:\ne: as duas condições precisam ser verdadeiras.\nou: pelo menos uma condição precisa ser verdadeira.\nnao: inverte o valor lógico.\n\nPrecedência:\nParênteses deixam a intenção explícita. Em (a + b) * 2, a soma acontece antes da multiplicação.`;
    s6.out = `Soma: 13\nDivisão real: 3.333333\nDivisão inteira: 3\nResto: 1\nA é maior que B? VERDADEIRO`;
    s6.note = `<span class="badge">Experimente</span><br>Troque A para 11 e B para 4. Antes de executar, preveja a divisão inteira e o resto.`;
  }

  const s7 = getStep(7);
  if (s7) {
    s7.menu = '6 Lógica';
    s7.title = '6 — Expressões Lógicas e Tabela Verdade';
    s7.objective = 'Prever o resultado de condições simples e combinadas antes de usá-las em decisões.';
  }

  const s8 = getStep(8);
  if (s8) {
    s8.menu = '7 Mesa';
    s8.title = '7 — Teste de Mesa';
    s8.objective = 'Acompanhar valores passo a passo e descobrir erros de lógica antes de alterar o código no chute.';
    s8.note = `<span class="badge">PREVER → EXECUTAR → COMPARAR</span><br>Faça primeiro o teste de mesa de: a &lt;- 5; b &lt;- 2; c &lt;- a * b + 3. Só depois execute e compare.`;
  }

  const s9 = getStep(9);
  if (s9) {
    s9.menu = '8 Se';
    s9.title = '8 — Decisões Simples, Compostas e Encadeadas';
    s9.objective = 'Escolher caminhos diferentes conforme uma ou mais condições.';
    s9.code = `algoritmo "Situacao_Aluno"\nvar\n   nota: real\ninicio\n   escreva("Digite a nota: ")\n   leia(nota)\n\n   se nota >= 6 entao\n      escreval("Aluno aprovado")\n   senao\n      se nota >= 4 entao\n         escreval("Aluno em recuperação")\n      senao\n         escreval("Aluno reprovado")\n      fimse\n   fimse\nfimalgoritmo`;
    s9.added = `Conceito:\nDecisão simples executa algo somente quando a condição é verdadeira.\nDecisão composta também define o caminho do caso falso.\nDecisão encadeada usa uma nova decisão dentro de outro caminho quando existem três ou mais situações.\n\nEstrutura básica:\nse condicao entao\n   comandos\nsenao\n   comandos\nfimse\n\nAntes de programar, teste valores de fronteira. Neste exemplo: 3.9, 4, 5.9 e 6.`;
    s9.out = `Digite a nota: 5\nAluno em recuperação`;
    s9.note = `<span class="badge">Teste de fronteira</span><br>Execute com 3.9, 4, 5.9 e 6. Explique por que cada valor segue um caminho diferente.`;
  }

  const s10 = getStep(10);
  if (s10) {
    s10.menu = '9 Escolha';
    s10.title = '9 — Decisão Múltipla com Escolha';
    s10.objective = 'Organizar menus e alternativas discretas sem criar uma sequência difícil de ler de decisões encadeadas.';
  }

  const s11 = getStep(11);
  if (s11) {
    s11.menu = '10 Para';
    s11.title = '10 — Laço Para, Contadores e Acumuladores';
    s11.objective = 'Repetir uma quantidade conhecida de vezes e acumular resultados durante o percurso.';
    s11.code = `algoritmo "Somar_Valores"\nvar\n   i, valor, soma: inteiro\ninicio\n   soma <- 0\n\n   para i de 1 ate 5 faca\n      escreva("Digite o valor ", i, ": ")\n      leia(valor)\n      soma <- soma + valor\n   fimpara\n\n   escreval("Total: ", soma)\nfimalgoritmo`;
    s11.added = `Conceito:\nUse para quando a quantidade de repetições é conhecida.\n\nContador acompanha quantas vezes algo aconteceu.\nAcumulador guarda um total que cresce a cada repetição.\n\nSintaxe:\npara variavel de inicio ate fim faca\n   comandos\nfimpara\n\nCom passo diferente de 1:\npara i de 2 ate 20 passo 2 faca\n   comandos\nfimpara`;
    s11.out = `Digite o valor 1: 2\nDigite o valor 2: 4\nDigite o valor 3: 6\nDigite o valor 4: 8\nDigite o valor 5: 10\nTotal: 30`;
    s11.note = `<span class="badge">Experimente</span><br>Modifique o algoritmo para também calcular a média dos cinco valores. Pense antes em qual dado precisa ser acumulado e quando a divisão deve acontecer.`;
  }

  if (!getStep(17)) {
    const afterPara = steps.findIndex((item) => item.id === 11);
    steps.splice(afterPara + 1, 0, {
      id: 17,
      menu: '11 Condição',
      title: '11 — Enquanto e Repita: Repetição por Condição',
      objective: 'Escolher o laço adequado quando não sabemos antecipadamente quantas repetições serão necessárias.',
      code: `algoritmo "Repeticao_Condicional"\nvar\n   i: inteiro\n   nota: real\ninicio\n   i <- 1\n   enquanto i <= 3 faca\n      escreval("Tentativa ", i)\n      i <- i + 1\n   fimenquanto\n\n   repita\n      escreva("Digite uma nota entre 0 e 10: ")\n      leia(nota)\n   ate (nota >= 0) e (nota <= 10)\n\n   escreval("Nota válida: ", nota)\nfimalgoritmo`,
      added: `Conceito:\nUse enquanto quando a condição deve ser testada antes de executar o bloco. Ele pode executar zero vezes.\n\nSintaxe:\nenquanto condicao faca\n   comandos\nfimenquanto\n\nUse repita quando o bloco precisa executar pelo menos uma vez e a condição é verificada no final.\n\nSintaxe:\nrepita\n   comandos\nate condicao\n\nAplicações comuns:\nvalidação de dados, menus que se repetem, leitura até um valor de encerramento e processos cuja quantidade de repetições não é conhecida previamente.`,
      out: `Tentativa 1\nTentativa 2\nTentativa 3\nDigite uma nota entre 0 e 10: 15\nDigite uma nota entre 0 e 10: 8\nNota válida: 8`,
      note: `<span class="badge">Exercício</span><br>Leia números até que o usuário digite 0. Ao final, mostre quantos valores diferentes de zero foram informados.`
    });
  }

  const s12 = getStep(12);
  if (s12) {
    s12.menu = '12 Funções';
    s12.title = '12 — Funções Pré-definidas';
    s12.objective = 'Reutilizar operações prontas do VisuAlg e reconhecer quando uma função retorna um valor.';
  }

  const s13 = getStep(13);
  if (s13) {
    s13.menu = '13 Modular';
    s13.title = '13 — Procedimentos, Funções e Parâmetros';
    s13.objective = 'Dividir o algoritmo em partes menores, passando dados e retornando resultados quando necessário.';
    s13.code = `algoritmo "Procedimento_Funcao"\nvar\n   n, dobro: inteiro\n\nprocedimento linha\ninicio\n   escreval("---------------------")\nfimprocedimento\n\nfuncao calculaDobro(x: inteiro): inteiro\ninicio\n   retorne x * 2\nfimfuncao\n\ninicio\n   escreva("Digite um número: ")\n   leia(n)\n\n   linha\n   dobro <- calculaDobro(n)\n   escreval("Dobro: ", dobro)\n   linha\nfimalgoritmo`;
    s13.added = `Conceito:\nModularizar é dividir o algoritmo em partes com responsabilidades claras.\n\nProcedimento executa uma tarefa e não devolve um valor como resultado.\nFunção retorna um valor e pode ser usada dentro de uma expressão.\nParâmetro é o dado recebido pela sub-rotina.\nVariável local existe apenas dentro da sub-rotina; variável global pertence ao algoritmo principal e pode ter alcance mais amplo.\n\nProcedimento sem parâmetros:\nprocedimento nome\ninicio\n   comandos\nfimprocedimento\n\nFunção com parâmetro e retorno:\nfuncao nome(x: inteiro): inteiro\ninicio\n   retorne valor\nfimfuncao`;
    s13.out = `Digite um número: 8\n---------------------\nDobro: 16\n---------------------`;
    s13.note = `<span class="badge">Exercício</span><br>Crie uma função chamada triplo que receba um inteiro e retorne seu valor multiplicado por 3. Depois teste com pelo menos três entradas.`;
  }

  const s14 = getStep(14);
  if (s14) {
    s14.menu = '14 Vetores';
    s14.title = '14 — Vetores';
    s14.objective = 'Armazenar vários valores do mesmo tipo e percorrê-los por posição.';
  }

  const s15 = getStep(15);
  if (s15) {
    s15.menu = '15 Matrizes';
    s15.title = '15 — Matrizes';
    s15.objective = 'Organizar dados em linhas e colunas e percorrê-los com laços aninhados.';
  }

  const s16 = getStep(16);
  if (s16) {
    s16.menu = '16 Depuração';
    s16.title = '16 — Depuração, Testes e Boas Práticas';
    s16.objective = 'Encontrar erros com método e tornar os algoritmos mais fáceis de compreender, testar e corrigir.';
    s16.content = `<div class="theory-page">
      <div class="theory-hero">
        <h3>Quando o resultado não é o esperado</h3>
        <p>Programar também é investigar. Em vez de alterar linhas aleatoriamente, compare o que deveria acontecer com o que realmente aconteceu e localize o primeiro ponto em que os dois caminhos se separam.</p>
      </div>
      <h3>1. Três tipos de problema</h3>
      <ul>
        <li><strong>Erro de sintaxe:</strong> o comando não respeita a escrita esperada pelo VisuAlg.</li>
        <li><strong>Erro de lógica:</strong> o algoritmo executa, mas produz um resultado incorreto.</li>
        <li><strong>Erro durante a execução:</strong> uma operação ou dado provoca um problema enquanto o algoritmo está rodando.</li>
      </ul>
      <h3>2. Método de investigação</h3>
      <div class="intro-grid">
        <div class="intro-box"><strong>Prever</strong><br>Defina a saída esperada para uma entrada conhecida.</div>
        <div class="intro-box"><strong>Executar</strong><br>Rode exatamente esse caso.</div>
        <div class="intro-box"><strong>Comparar</strong><br>Descubra em qual passo o valor começou a divergir.</div>
      </div>
      <p>O teste de mesa, a execução passo a passo, os pontos de parada e a observação das variáveis ajudam a enxergar essas mudanças sem adivinhar.</p>
      <h3>3. Teste valores de fronteira</h3>
      <p>Se uma regra aprova notas a partir de 6, não teste apenas 8. Teste também valores próximos ao limite, como 5.9 e 6. Isso revela erros em comparações como <code>&gt;</code> e <code>&gt;=</code>.</p>
      <div class="example-box"><strong>Conjunto mínimo:</strong> um caso comum, um caso no limite e um caso que deveria ser rejeitado.</div>
      <h3>4. Boas práticas que evitam erros</h3>
      <ul>
        <li>Use nomes de variáveis que indiquem o que elas guardam.</li>
        <li>Mantenha a indentação consistente.</li>
        <li>Use parênteses quando eles deixarem uma expressão mais clara.</li>
        <li>Comente o motivo de uma decisão importante, não cada linha óbvia.</li>
        <li>Teste pequenas alterações antes de continuar aumentando o algoritmo.</li>
        <li>Não copie um código que você não consegue explicar.</li>
      </ul>
      <h3>5. Diagnóstico final</h3>
      <div class="exercise-box"><strong>Desafio:</strong> escolha um algoritmo anterior, altere propositalmente uma condição para produzir um resultado errado e use o ciclo PREVER → EXECUTAR → COMPARAR para localizar e corrigir o erro.</div>
    </div>`;
  }

  const exercises = getStep(99);
  if (exercises && !exercises.content.includes('PREVER → EXECUTAR → COMPARAR')) {
    exercises.content = exercises.content.replace(
      '<div class="theory-page exercises-99">',
      `<div class="theory-page exercises-99"><div class="theory-hero"><h3>Como praticar</h3><p>Não use os exercícios apenas para produzir código. Em cada problema, siga o ciclo <strong>PREVER → EXECUTAR → COMPARAR → MODIFICAR</strong>. Comece pelos níveis iniciais e avance quando conseguir explicar a solução sem depender da dica.</p></div>`
    );
  }

  // A abertura original contém texto de bastidor. Mantemos a função existente e
  // substituímos somente o conteúdo exibido na etapa inicial.
  const originalShowStep = showStep;
  showStep = function (id) {
    originalShowStep(id);
    if (id !== 0) return;
    const intro = document.getElementById('introView');
    if (!intro) return;
    intro.innerHTML = `
      <h3>Como estudar com esta trilha</h3>
      <p>O objetivo não é decorar comandos. Você vai usar o VisuAlg para observar como dados entram, são processados e produzem respostas.</p>
      <div class="intro-grid">
        <div class="intro-box"><strong>1. Prever</strong><br>Pense no resultado antes de executar.</div>
        <div class="intro-box"><strong>2. Executar</strong><br>Rode o algoritmo e observe a saída.</div>
        <div class="intro-box"><strong>3. Comparar</strong><br>Confira o previsto com o obtido.</div>
        <div class="intro-box"><strong>4. Modificar</strong><br>Altere um valor, condição ou comando.</div>
        <div class="intro-box"><strong>5. Explicar</strong><br>Diga por que o comportamento mudou.</div>
      </div>
      <div class="note"><strong>Regra de estudo:</strong> copiar um exemplo é apenas o começo. O aprendizado acontece quando você consegue prever, modificar e explicar o que ele faz.</div>`;
  };

  // Reconstrói somente a navegação do módulo para refletir a nova sequência.
  menu.innerHTML = '<h3>Etapas</h3>';
  buildMenu();
  showStep(0);
})();
