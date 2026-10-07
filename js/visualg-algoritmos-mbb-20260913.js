(function () {
  'use strict';

  if (typeof steps === 'undefined' || typeof buildMenu !== 'function' || typeof showStep !== 'function') return;

  const getStep = (id) => steps.find(item => item.id === id);

  function appendAdded(step, marker, text) {
    if (!step) return;
    const atual = step.added || '';
    if (atual.includes(marker)) return;
    step.added = `${atual}\n\n${marker}\n${text}`.trim();
  }

  const variaveis = getStep(4);
  appendAdded(variaveis, 'ATRIBUIÇÃO, COMPARAÇÃO E NOMES', `ATRIBUIÇÃO X COMPARAÇÃO
• total <- 10 significa: a variável total recebe 10.
• total = 10 é uma comparação que pergunta se total é igual a 10 e produz verdadeiro ou falso.

NOMES QUE AJUDAM A ENTENDER
Prefira nomes que revelem o papel do dado: totalCompra, idadeAluno, quantidadeItens. Evite nomes como x ou a quando eles escondem o significado.

IDENTIFICADORES
O nome não deve começar com número, conter espaços nem usar uma palavra reservada do VisuAlg. O objetivo não é decorar a lista de palavras reservadas, mas reconhecer que comandos da linguagem não podem ser reaproveitados como nomes de variáveis.

ANTES DE AVANÇAR
Explique com suas palavras a diferença entre idade <- 18 e idade = 18.`);

  const mesa = getStep(8);
  appendAdded(mesa, 'ESTADO DO PROGRAMA', `ESTADO DO PROGRAMA
O conjunto dos valores das variáveis em um instante é o estado do programa. Cada atribuição pode criar um novo estado.

EXEMPLO
saldo <- 100        → saldo vale 100
saldo <- saldo - 30 → saldo vale 70
saldo <- saldo + 10 → saldo vale 80

Na depuração, procure o PRIMEIRO estado que ficou diferente do esperado. Esse ponto costuma indicar onde a investigação deve começar.

ANTES DE AVANÇAR
No teste de mesa, não registre apenas a saída final. Registre quando cada variável muda e qual valor passa a ter.`);

  const repeticao = getStep(17);
  appendAdded(repeticao, 'CONTROLE DO LAÇO', `CONTROLE DO LAÇO
Em laços controlados por condição, pense sempre em três perguntas:
1. Qual é o estado inicial?
2. Qual condição decide continuar ou terminar?
3. O que muda dentro do laço para que a condição possa mudar?

LAÇO INFINITO
Se a condição nunca puder chegar ao estado de término, a repetição não termina. Um erro comum é esquecer de atualizar a variável de controle ou atualizá-la de modo que nunca alcance a condição esperada.

VALOR SENTINELA
Um valor especial pode indicar encerramento, como ler números até que o usuário digite 0. Esse padrão é útil quando não sabemos previamente quantos dados serão informados.

INTERROMPA
O comando interrompa encerra imediatamente o laço atual. Use quando existe uma razão clara para não continuar, como uma busca que já encontrou o elemento procurado. Não use interrompa para esconder uma condição de repetição mal planejada.

ANTES DE AVANÇAR
Em um enquanto i <= 10, o que precisa acontecer com i dentro do laço para que ele termine?`);

  const funcoes = getStep(12);
  if (funcoes) {
    funcoes.objective = 'Usar funções prontas do VisuAlg com números e textos, reconhecendo entrada, processamento e valor retornado.';
    funcoes.code = `algoritmo "Funcoes_Predefinidas"
var
   numero: real
   nome: caractere
inicio
   numero <- -25
   nome <- "Ronaldo Lavestein"

   escreval("Valor absoluto: ", abs(numero))
   escreval("Raiz de 25: ", raizq(25))
   escreval("2 elevado a 3: ", exp(2,3))

   escreval("Maiúsculas: ", Maiusc(nome))
   escreval("Minúsculas: ", Minusc(nome))
   escreval("Quantidade de caracteres: ", Compr(nome))
   escreval("Posição do espaço: ", Pos(" ", nome))
   escreval("Primeiro nome: ", Copia(nome, 1, 7))
fimalgoritmo`;
    funcoes.out = `Valor absoluto: 25
Raiz de 25: 5
2 elevado a 3: 8
Maiúsculas: RONALDO LAVESTEIN
Minúsculas: ronaldo lavestein
Quantidade de caracteres: 17
Posição do espaço: 8
Primeiro nome: Ronaldo`;
    funcoes.note = `<span class="badge">Experimente</span><br>Troque o nome por outro nome completo. Antes de executar, preveja o tamanho do texto, a posição do primeiro espaço e quantos caracteres devem ser copiados para obter apenas o primeiro nome.`;
    appendAdded(funcoes, 'TEXTOS TAMBÉM SÃO DADOS', `TEXTOS TAMBÉM SÃO DADOS
Programas reais lidam com nomes, códigos e mensagens. O VisuAlg oferece funções para analisar e transformar textos.

FUNÇÕES ÚTEIS
Maiusc(texto) → converte para maiúsculas.
Minusc(texto) → converte para minúsculas.
Compr(texto) → informa a quantidade de caracteres.
Pos(trecho, texto) → informa onde um trecho aparece.
Copia(texto, inicio, quantidade) → extrai parte do texto.

PADRÃO DE RACIOCÍNIO
Primeiro descubra o que precisa saber sobre o texto. Depois escolha a função adequada. Não tente decorar um catálogo inteiro de funções.`);
  }

  const modular = getStep(13);
  appendAdded(modular, 'VALOR X REFERÊNCIA', `APROFUNDANDO — PASSAGEM POR VALOR X REFERÊNCIA
Normalmente, um parâmetro recebe um valor para a sub-rotina trabalhar. Alterar esse parâmetro dentro da sub-rotina não precisa alterar a variável original.

Quando o parâmetro é declarado com var, ele é passado por referência: a sub-rotina pode modificar a variável original.

EXEMPLO DE SINTAXE
procedimento acrescentaPonto(var pontos: inteiro)
inicio
   pontos <- pontos + 1
fimprocedimento

CUIDADO
Use referência quando alterar a variável original fizer parte da responsabilidade da sub-rotina. Não use apenas para evitar retornar um resultado ou para tornar o fluxo de dados menos claro.`);

  const vetor = getStep(14);
  appendAdded(vetor, 'PADRÕES DE PROCESSAMENTO EM VETORES', `PADRÕES DE PROCESSAMENTO EM VETORES
Depois de guardar vários valores, o passo importante é saber o que fazer com eles. Muitos algoritmos percorrem o vetor uma posição por vez e aplicam um padrão.

• SOMAR: acumulador recebe cada valor.
• CONTAR: contador aumenta quando uma condição é satisfeita.
• MAIOR/MENOR: guarda o melhor valor encontrado até aquele momento.
• FILTRAR: processa ou mostra apenas valores que atendem a uma condição.
• PROCURAR: compara cada posição com um valor desejado.

ANTES DE AVANÇAR
Para descobrir a maior nota de um vetor, qual informação precisa ser lembrada enquanto as posições são percorridas?`);

  if (!getStep(18)) {
    const indiceVetor = steps.findIndex(item => item.id === 14);
    const busca = {
      id: 18,
      menu: '14.1 Busca',
      title: '14.1 — Busca Linear em Vetores',
      objective: 'Percorrer um vetor, localizar um valor e encerrar a busca quando o resultado já foi encontrado.',
      code: `algoritmo "Busca_Linear"
var
   codigos: vetor[1..6] de inteiro
   i, procurado, posicao: inteiro
inicio
   codigos[1] <- 120
   codigos[2] <- 245
   codigos[3] <- 310
   codigos[4] <- 425
   codigos[5] <- 510
   codigos[6] <- 680

   procurado <- 425
   posicao <- 0

   para i de 1 ate 6 faca
      se codigos[i] = procurado entao
         posicao <- i
         interrompa
      fimse
   fimpara

   se posicao <> 0 entao
      escreval("Código encontrado na posição ", posicao)
   senao
      escreval("Código não encontrado")
   fimse
fimalgoritmo`,
      added: `IDEIA PRINCIPAL
Busca linear examina os elementos um a um até encontrar o valor procurado ou chegar ao fim.

ESTADO IMPORTANTE
posicao começa com 0 para representar “ainda não encontrado”. Quando o valor aparece, posicao recebe o índice em que ele foi encontrado.

POR QUE INTERROMPER
Depois que o código foi encontrado, continuar comparando as posições seguintes não muda a resposta. interrompa encerra o laço imediatamente.

PIOR CASO
Se o elemento estiver na última posição — ou não existir — todas as posições precisarão ser verificadas. É uma primeira oportunidade para pensar em eficiência sem usar fórmulas.

TESTES IMPORTANTES
• procurar o primeiro elemento.
• procurar um elemento do meio.
• procurar o último elemento.
• procurar um valor inexistente.

ERRO COMUM
Concluir que o valor não existe depois de verificar apenas uma posição. “Não encontrado” só pode ser afirmado depois que todas as possibilidades necessárias foram examinadas.

ANTES DE AVANÇAR
Se procurado for 120, quantas comparações serão feitas? E se for 999?`,
      out: `Código encontrado na posição 4`,
      note: `<span class="badge">Investigue</span><br>Execute primeiro com 425. Depois teste 120, 680 e 999. Preveja quantas comparações serão necessárias em cada caso antes de executar.`
    };
    steps.splice(indiceVetor >= 0 ? indiceVetor + 1 : steps.length - 1, 0, busca);
  }

  const matriz = getStep(15);
  appendAdded(matriz, 'LAÇOS ANINHADOS COMO PADRÃO', `LAÇOS ANINHADOS COMO PADRÃO
Em uma matriz, um laço normalmente escolhe a linha e outro percorre as colunas daquela linha. Cada combinação linha/coluna identifica uma posição.

Esse mesmo padrão permite:
• somar uma linha ou coluna;
• procurar um valor em toda a matriz;
• contar quantas posições atendem a uma condição;
• trabalhar com diagonais quando o problema exigir.

CUIDADO
Dois laços aninhados aumentam a quantidade de operações. Em uma matriz 3 x 3 são visitadas 9 posições; em uma 100 x 100, 10.000. Esse crescimento merece ser percebido mesmo antes de estudar complexidade formal.`);

  const depuracao = getStep(16);
  if (depuracao && typeof depuracao.content === 'string' && !depuracao.content.includes('Depuração interativa no VisuAlg')) {
    const debugHtml = `
      <h3>Depuração interativa no VisuAlg</h3>
      <p>Além do teste de mesa, o próprio VisuAlg permite acompanhar uma execução passo a passo. A diretiva <code>debug</code> ativa a depuração interativa.</p>
      <pre class="command">algoritmo "Acompanhando_Debug"
debug
var
   x, y: inteiro
inicio
   x <- 10
   y <- 5
   x <- x + y
   escreval("x = ", x, " | y = ", y)
fimalgoritmo</pre>
      <div class="intro-grid">
        <div class="intro-box"><strong>p / proximo</strong><br>Avança uma instrução e permite observar a mudança de estado.</div>
        <div class="intro-box"><strong>nome da variável</strong><br>Permite inspecionar o valor durante a execução.</div>
        <div class="intro-box"><strong>c / continue</strong><br>Continua a execução sem novas pausas.</div>
      </div>
      <div class="example-box"><strong>Método MbB de depuração:</strong><br>PREVER → RASTREAR → EXECUTAR → INSPECIONAR → COMPARAR → CORRIGIR → TESTAR NOVAMENTE.</div>
      <p>Teste de mesa e depurador não são concorrentes. O teste de mesa desenvolve a capacidade de prever; o depurador permite confrontar essa previsão com o estado real do programa.</p>`;
    depuracao.content = depuracao.content.replace('<h3>5. Diagnóstico final</h3>', `${debugHtml}<h3>Diagnóstico final</h3>`);
    depuracao.content = depuracao.content.replace('PREVER → EXECUTAR → COMPARAR', 'PREVER → RASTREAR → EXECUTAR → INSPECIONAR → COMPARAR');
  }

  const exercicios = getStep(99);
  if (exercicios && typeof exercicios.content === 'string' && !exercicios.content.includes('Leia código antes de escrever código')) {
    exercicios.content = exercicios.content.replace(
      '<div class="theory-page exercises-99">',
      `<div class="theory-page exercises-99"><div class="note"><strong>Leia código antes de escrever código.</strong> Em alguns exercícios, pegue uma solução que funciona e faça três perguntas: qual saída ela produz, em que momento cada variável muda e qual pequena alteração mudaria o resultado? Ler e explicar código também faz parte de aprender a programar.</div>`
    );
  }

  menu.innerHTML = '<h3>Etapas</h3>';
  buildMenu();
  showStep(0);
})();
