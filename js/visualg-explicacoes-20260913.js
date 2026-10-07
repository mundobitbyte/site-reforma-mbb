(function () {
  if (typeof steps === 'undefined') return;

  const explicacoes = {
    3: `IDEIA PRINCIPAL
Um algoritmo no VisuAlg precisa de uma estrutura que indique onde ele começa, quais comandos serão executados e onde termina.

O QUE OBSERVAR
• algoritmo "Nome": identifica o programa.
• inicio: marca o começo dos comandos executáveis.
• fimalgoritmo: encerra o algoritmo.
• // comentário: registra uma explicação para quem lê o código e não é executado.

SINTAXE ESSENCIAL
algoritmo "Nome_Do_Algoritmo"
inicio
   comandos
fimalgoritmo

ERRO COMUM
Escrever comandos fora do bloco entre inicio e fimalgoritmo ou esquecer de fechar a estrutura.

ANTES DE AVANÇAR
Você consegue apontar, no código ao lado, onde o algoritmo começa a executar e onde termina?`,

    4: `IDEIA PRINCIPAL
Variáveis representam informações que o algoritmo precisa guardar e usar durante a execução. O tipo informa que espécie de dado pode ser armazenada.

O QUE OBSERVAR
• inteiro: números sem parte decimal.
• real: números com parte decimal.
• caractere: textos e caracteres.
• logico: verdadeiro ou falso.
• o valor de uma variável pode mudar ao longo do algoritmo.

SINTAXE ESSENCIAL
var
   nomeDaVariavel: tipo

EXEMPLOS DE VALORES
10        → inteiro
7.5       → real
"Ana"     → caractere
verdadeiro → logico

ERRO COMUM
Escolher um tipo incompatível com a informação que será armazenada. Exemplo: tentar guardar 7.5 em uma variável inteira.

ANTES DE AVANÇAR
Para guardar nome, idade, altura e situação de aprovação, qual tipo você escolheria para cada variável?`,

    5: `IDEIA PRINCIPAL
Um programa útil normalmente recebe dados, processa esses dados e apresenta uma resposta. No VisuAlg, leia recebe informações e escreva/escreval mostram informações.

O QUE OBSERVAR
• escreva mantém o cursor na mesma linha.
• escreval mostra o conteúdo e passa para a linha seguinte.
• leia coloca o valor digitado dentro de uma variável.

SINTAXE ESSENCIAL
escreva("Digite sua idade: ")
leia(idade)
escreval("Idade informada: ", idade)

BOA PRÁTICA
Antes de cada leia, mostre uma mensagem que deixe claro o que o usuário precisa digitar.

ERRO COMUM
Pedir um dado sem explicar o que deve ser informado ou tentar ler um valor incompatível com o tipo da variável.

ANTES DE AVANÇAR
No exemplo ao lado, identifique exatamente qual comando faz a entrada e quais comandos fazem a saída.`,

    6: `IDEIA PRINCIPAL
Operadores permitem transformar dados em resultados. Uma expressão pode calcular um valor, comparar valores ou combinar condições lógicas.

ARITMÉTICOS
+ soma | - subtração | * multiplicação | / divisão real
\\ divisão inteira | MOD resto | ^ potência

RELACIONAIS
> maior | < menor | >= maior ou igual | <= menor ou igual
= igual | <> diferente

LÓGICOS
e   → as duas condições precisam ser verdadeiras
ou  → pelo menos uma condição precisa ser verdadeira
nao → inverte o valor lógico

O QUE OBSERVAR
10 / 3 produz uma divisão real.
10 \\ 3 produz a parte inteira da divisão.
10 MOD 3 produz o resto da divisão.

BOA PRÁTICA
Use parênteses quando quiser deixar explícita a ordem dos cálculos. Em (a + b) * 2, a soma acontece primeiro.

ERRO COMUM
Confundir divisão inteira com resto ou escrever uma expressão sem pensar na precedência dos operadores.

ANTES DE AVANÇAR
Sem executar: qual será o resultado de 11 \\ 4 e de 11 MOD 4?`,

    7: `IDEIA PRINCIPAL
Uma expressão lógica sempre resulta em verdadeiro ou falso. Ela é a base das decisões e também controla muitas repetições.

O QUE OBSERVAR
• uma comparação simples já produz um valor lógico: idade >= 18.
• e exige que todas as condições ligadas sejam verdadeiras.
• ou exige que pelo menos uma seja verdadeira.
• nao inverte verdadeiro para falso e falso para verdadeiro.

EXEMPLO
(idade >= 18) e temCarteira
Só será verdadeiro quando as duas partes forem verdadeiras.

POR QUE USAR TABELA VERDADE
Ela permite prever o resultado de uma condição antes de executar o algoritmo e ajuda a descobrir erros de raciocínio.

ERRO COMUM
Ler uma condição composta muito depressa e imaginar o resultado em vez de avaliar cada parte separadamente.

ANTES DE AVANÇAR
Se idade >= 18 for verdadeiro e temCarteira for falso, qual será o resultado usando e? E usando ou?`,

    8: `IDEIA PRINCIPAL
Teste de mesa é uma execução manual do algoritmo. Você acompanha os valores das variáveis passo a passo antes de rodar o programa.

COMO FAZER
1. Liste as variáveis importantes.
2. Leia a primeira instrução.
3. Atualize apenas os valores alterados por ela.
4. Passe para a próxima instrução.
5. Continue até chegar à saída.
6. Só depois execute no VisuAlg e compare.

POR QUE ISSO IMPORTA
Nem todo erro é de sintaxe. Um algoritmo pode executar perfeitamente e ainda produzir um resultado errado porque a lógica está incorreta.

ERRO COMUM
Mudar várias linhas do código por tentativa e erro sem saber em qual passo o valor ficou incorreto.

ANTES DE AVANÇAR
Faça a conta manualmente para a <- 5, b <- 2 e c <- a * b + 3. Depois confira no VisuAlg.`,

    9: `IDEIA PRINCIPAL
Uma decisão muda o caminho do algoritmo conforme o resultado de uma condição.

TRÊS FORMAS IMPORTANTES
• simples: executa algo apenas quando a condição é verdadeira.
• composta: define um caminho para verdadeiro e outro para falso.
• encadeada: coloca uma nova decisão dentro de um dos caminhos para tratar três ou mais situações.

SINTAXE ESSENCIAL
se condicao entao
   comandos
senao
   comandos
fimse

O QUE OBSERVAR NO EXEMPLO
A ordem das condições importa. Primeiro é verificado se a nota é pelo menos 6. Somente quem não passou nesse teste chega à verificação de recuperação.

TESTE DE FRONTEIRA
Use valores exatamente nos limites e imediatamente antes deles: 3.9, 4, 5.9 e 6.

ERRO COMUM
Criar condições que deixam intervalos sem tratamento ou que se sobrepõem de forma inesperada.

ANTES DE AVANÇAR
Explique por que a nota 5 não chega ao caminho de aprovado e por que a nota 6 não chega ao caminho de recuperação.`,

    10: `IDEIA PRINCIPAL
escolha organiza situações em que uma mesma variável pode assumir várias opções conhecidas, como itens de menu, códigos ou categorias.

QUANDO USAR
Use escolha quando a decisão depende de comparar uma variável com valores discretos bem definidos.

SINTAXE ESSENCIAL
escolha variavel
   caso valor1
      comandos
   caso valor2
      comandos
   outrocaso
      comandos
fimescolha

O QUE OBSERVAR
• cada caso trata uma alternativa.
• outrocaso trata valores não previstos.
• a leitura costuma ficar mais clara do que uma longa sequência de se/senao.

ERRO COMUM
Usar escolha para condições por faixa, como nota >= 6. Para intervalos e comparações desse tipo, se costuma ser mais adequado.

ANTES DE AVANÇAR
Um menu com opções 1, 2, 3 e qualquer outro valor inválido combina melhor com se encadeado ou escolha? Por quê?`,

    11: `IDEIA PRINCIPAL
para repete um bloco quando já sabemos quantas vezes ele deve executar. Dentro do laço, podemos contar ocorrências e acumular valores.

CONCEITOS
• contador: registra quantas vezes algo aconteceu.
• acumulador: guarda um total que vai sendo atualizado.
• passo: define quanto a variável de controle aumenta ou diminui a cada repetição.

SINTAXE ESSENCIAL
para i de 1 ate 5 faca
   comandos
fimpara

COM PASSO
para i de 2 ate 20 passo 2 faca
   comandos
fimpara

O QUE OBSERVAR NO EXEMPLO
soma começa em 0 antes do laço. Em cada repetição, o novo valor é acrescentado ao total anterior.

ERRO COMUM
Esquecer de inicializar o acumulador antes do laço ou reiniciá-lo dentro da repetição.

ANTES DE AVANÇAR
Se você também quiser calcular a média dos cinco valores, em que momento a divisão deve acontecer: dentro ou depois do laço?`,

    17: `IDEIA PRINCIPAL
Nem sempre sabemos antecipadamente quantas repetições serão necessárias. Nesses casos, a continuidade depende de uma condição.

ENQUANTO
Testa a condição antes de executar o bloco. Por isso, pode executar zero vezes.

enquanto condicao faca
   comandos
fimenquanto

REPITA
Executa o bloco primeiro e testa a condição no final. Por isso, executa pelo menos uma vez.

repita
   comandos
ate condicao

QUANDO USAR
• validação de dados.
• menus que continuam até o usuário escolher sair.
• leitura até um valor de encerramento.
• processos com quantidade de repetições desconhecida.

ERRO COMUM
Criar uma condição que nunca muda e produzir um laço infinito.

ANTES DE AVANÇAR
Se o usuário precisa digitar uma nota pelo menos uma vez e repetir somente enquanto ela for inválida, qual estrutura deixa essa intenção mais natural: enquanto ou repita?`,

    12: `IDEIA PRINCIPAL
Funções pré-definidas são operações já disponíveis no VisuAlg. Elas recebem um valor, realizam um processamento e devolvem um resultado.

O QUE OBSERVAR NO EXEMPLO
abs(numero)  → devolve o valor absoluto.
raizq(25)    → devolve a raiz quadrada.
exp(2,3)     → calcula a potência mostrada no exemplo.

COMO LER UMA FUNÇÃO
resultado <- funcao(valor)
A função é executada primeiro; o valor retornado pode ser armazenado, exibido ou usado em outra expressão.

VANTAGEM
Você reutiliza uma operação pronta em vez de reescrever sua lógica sempre que precisar dela.

ERRO COMUM
Confundir uma função, que devolve um valor, com um comando que apenas executa uma ação.

ANTES DE AVANÇAR
No código ao lado, quais funções retornam valores que são enviados diretamente para escreval?`,

    13: `IDEIA PRINCIPAL
Modularizar é dividir um algoritmo maior em partes menores, cada uma com uma responsabilidade clara.

DIFERENÇAS
• procedimento: executa uma tarefa e não devolve um valor como resultado.
• função: executa uma tarefa e retorna um valor.
• parâmetro: dado recebido pela sub-rotina para que ela possa trabalhar.
• variável local: existe dentro da sub-rotina.
• variável global: pertence ao algoritmo principal e possui alcance mais amplo.

PROCEDIMENTO SEM PARÂMETROS
procedimento linha
inicio
   comandos
fimprocedimento

FUNÇÃO
funcao calculaDobro(x: inteiro): inteiro
inicio
   retorne x * 2
fimfuncao

POR QUE ISSO MELHORA O PROGRAMA
Blocos menores são mais fáceis de entender, testar, corrigir e reutilizar.

ERRO COMUM
Criar uma sub-rotina que faz muitas tarefas diferentes ou depender de variáveis globais sem necessidade.

ANTES DE AVANÇAR
Se uma parte do programa precisa calcular e devolver o dobro de um número, você escolheria procedimento ou função?`,

    14: `IDEIA PRINCIPAL
Vetor guarda vários valores do mesmo tipo usando um único nome. Cada valor ocupa uma posição numerada.

O QUE OBSERVAR
notas[1], notas[2] e notas[3] são posições diferentes do mesmo vetor.
Um laço para combina muito bem com vetores porque a variável de controle pode ser usada como índice.

SINTAXE ESSENCIAL
notas: vetor[1..3] de real

ACESSO
notas[i]
O valor de i indica qual posição será lida ou alterada.

POR QUE USAR
Sem vetor, dezenas de notas exigiriam dezenas de variáveis separadas. Com vetor, o algoritmo consegue percorrer os dados de forma organizada.

ERRO COMUM
Tentar acessar uma posição fora do intervalo declarado.

ANTES DE AVANÇAR
Se o vetor foi declarado como vetor[1..3], quais são as três posições válidas?`,

    15: `IDEIA PRINCIPAL
Matriz organiza valores em linhas e colunas. Cada posição precisa de dois índices: um para a linha e outro para a coluna.

O QUE OBSERVAR
matriz[linha,coluna]
O primeiro índice escolhe a linha; o segundo escolhe a coluna.

SINTAXE ESSENCIAL
matriz: vetor[1..2,1..2] de inteiro

PERCORRENDO A MATRIZ
Normalmente usamos dois laços:
• o laço externo percorre as linhas.
• o laço interno percorre as colunas de cada linha.

APLICAÇÕES
Notas por aluno e bimestre, assentos, tabuleiros, tabelas pequenas e dados organizados em grade.

ERRO COMUM
Trocar a ordem dos índices ou usar apenas um laço e deixar posições sem percorrer.

ANTES DE AVANÇAR
Em uma matriz 2 x 2, quantas posições existem ao todo e quais pares de índices identificam essas posições?`
  };

  Object.entries(explicacoes).forEach(([id, texto]) => {
    const etapa = steps.find((item) => item.id === Number(id));
    if (etapa) etapa.added = texto;
  });

  const titulo = document.querySelector('#newCodeCard .panel-title span');
  if (titulo) titulo.textContent = 'Entenda o que aconteceu — conceitos, leitura e cuidados';
})();
