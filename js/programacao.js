const roteiroSteps = [
  {
    id: 1,
    menu: '1 Como aprender',
    title: 'Programação começa antes do código',
    objective: 'Entender a lógica do percurso: necessidade primeiro, conceito depois e sintaxe no momento certo.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Modo MbB</span>
        <h3>O ponto de partida é um problema</h3>
        <p>Programar não começa pela memorização de comandos. O ponto de partida é uma necessidade concreta: compreender o problema, organizar uma solução, identificar os conceitos de computação envolvidos e, por fim, expressá-los em uma linguagem de programação.</p>
      </div>

      <div class="concept-box"><strong>Uma sequência eficaz para aprender programação:</strong><br>necessidade → ideia → nome técnico → sintaxe.</div>

      <h3>Um ciclo útil para aprender programação</h3>
      <div class="cycle-grid">
        <div class="cycle-card"><strong>Entender</strong>Compreender o problema e o resultado esperado.</div>
        <div class="cycle-card"><strong>Experimentar</strong>Prever, executar, alterar e observar o que acontece.</div>
        <div class="cycle-card"><strong>Programar</strong>Transformar a solução em instruções executáveis.</div>
        <div class="cycle-card"><strong>Aplicar</strong>Resolver um problema diferente com menos ajuda.</div>
      </div>

      <h3>Um modelo mental para analisar problemas</h3>
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>O que o sistema precisa receber ou conhecer para poder agir.</div>
        <div class="mbb-card"><strong>FAZER</strong>O que o sistema precisa calcular, comparar, decidir ou transformar internamente.</div>
        <div class="mbb-card"><strong>RESPONDER</strong>O que o sistema precisa externalizar como consequência do processamento.</div>
      </div>
      <p>Esse modelo ajuda a separar claramente os dados necessários, o processamento realizado e os resultados produzidos. Com a prática, essa análise tende a se tornar parte natural do raciocínio de programação.</p>

      <div class="note-box"><strong>Contexto antes da sintaxe:</strong> comandos fazem sentido quando resolvem uma necessidade concreta. Por isso, os conceitos serão apresentados dentro de problemas que possam crescer progressivamente em complexidade.</div>`
  },
  {
    id: 2,
    menu: '2 Jornada completa',
    title: 'Mapa da jornada completa',
    objective: 'Reconhecer como os fundamentos e as práticas de programação se conectam, do entendimento do problema ao desenvolvimento, teste e evolução de software.',
    content: `
      <div class="hero-box">
        <h3>Do problema ao desenvolvimento de software</h3>
        <p>A formação em programação vai além da sintaxe básica. Depois de aprender a representar soluções e construir programas, entram em cena estruturas de dados, tratamento de erros, depuração, organização de projetos, classes, testes, colaboração e controle de versão. Esses conhecimentos tornam o software mais compreensível, confiável e preparado para evoluir.</p>
      </div>

      <div class="roadmap">
        <div class="roadmap-item"><strong>1. Problema, algoritmo, pseudocódigo e fluxograma</strong><br>Aprender a organizar uma solução antes da linguagem.</div>
        <div class="roadmap-item"><strong>2. Linguagem, código-fonte e ambiente</strong><br>Entender linguagem, plataforma, compilação/interpretação, IDE, SDK e execução.</div>
        <div class="roadmap-item"><strong>3. VisuAlg: dados, memória e processamento</strong><br>Variáveis, constantes, tipos, entrada/saída, conversões, operadores, expressões e funções prontas.</div>
        <div class="roadmap-item"><strong>4. Decisões e lógica booleana</strong><br>Comparações, tabela verdade, decisões simples, compostas, encadeadas e múltiplas.</div>
        <div class="roadmap-item"><strong>5. Repetições</strong><br>Enquanto, Repita, Para, contador, acumulador e laços aninhados quando necessários.</div>
        <div class="roadmap-item"><strong>6. Organização do programa</strong><br>Funções, procedimentos, argumentos, parâmetros, retorno, escopo e modularização.</div>
        <div class="roadmap-item"><strong>7. Sistema da Cantina em VisuAlg</strong><br>Integrar o que foi aprendido em um problema único e crescente.</div>
        <div class="roadmap-item"><strong>8. Transferência para Python</strong><br>Mostrar que a linguagem muda, mas os conceitos permanecem.</div>
        <div class="roadmap-item"><strong>9. Robustez em Python</strong><br>Conversões, validação, exceções, testes e depuração.</div>
        <div class="roadmap-item"><strong>10. Estruturas de dados</strong><br>Vetores, matrizes, listas, tuplas, conjuntos e dicionários.</div>
        <div class="roadmap-item"><strong>11. Ferramentas e ecossistema</strong><br>IDE, bibliotecas, frameworks, módulos, pacotes, dependências e organização de projetos.</div>
        <div class="roadmap-item"><strong>12. Qualidade e depuração</strong><br>Breakpoint, execução passo a passo, inspeção de valores, call stack, legibilidade, testes unitários e trabalho em par.</div>
        <div class="roadmap-item"><strong>13. Paradigmas e objetos</strong><br>Estruturada, eventos, classes e objetos com profundidade adequada.</div>
        <div class="roadmap-item"><strong>14. Versionamento e colaboração</strong><br>Reconhecer a necessidade do controle de versão e aplicar Git/GitHub no módulo especializado.</div>
        <div class="roadmap-item"><strong>15. Aplicação</strong><br>Resolver um problema novo, construir uma aplicação desktop, testar, empacotar e explicar a solução.</div>
      </div>

      <div class="concept-box"><strong>Um problema não precisa carregar todos os conceitos.</strong> A Cantina funciona como fio condutor, mas alguns conhecimentos exigem contextos próprios. Estruturas de dados, depuração, orientação a objetos e versionamento, por exemplo, aparecem quando a natureza do problema torna essas ideias necessárias.</div>
`
  }];

const pensarSteps = [
  {
    id: 1,
    menu: '1 O problema',
    title: 'Existe um problema antes de existir um programa',
    objective: 'Partir de uma necessidade concreta e descobrir o que a tecnologia precisa resolver.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Entender</span>
        <h3>A cantina da escola</h3>
        <p>Uma atendente vende 2 salgados a R$ 7,50 cada e 1 refrigerante a R$ 6,00. O cliente entrega R$ 30,00. Ela precisa informar o total da compra e o troco.</p>
      </div>

      <p>Antes de pensar em linguagem, comandos ou variáveis, resolva como uma pessoa resolveria:</p>
      <pre class="command">2 × 7,50 = 15,00
1 × 6,00 = 6,00
Total = 21,00
Troco = 30,00 - 21,00 = 9,00</pre>

      <div class="concept-box"><strong>Antes do código:</strong> programar exige compreender o problema e ter uma estratégia de solução. A linguagem apenas formaliza esse raciocínio.</div>

      <h3>Quem precisa disso?</h3>
      <p>A atendente precisa de uma resposta rápida e correta para fechar a venda. O programa não existe “para usar programação”; ele existe para ajudar alguém a realizar uma tarefa.</p>

      <div class="task-box">
        <h4>Experimente</h4>
        <p>Se a quantidade de salgados passar de 2 para 4, o que muda na solução? E se o cliente entregar R$ 50,00? Faça a conta antes de pensar em código.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Saber/Fazer/Responder',
    title: 'O que a tecnologia precisa Saber, Fazer e Responder?',
    objective: 'Construir um modelo mental para entrada, processamento e saída antes do jargão técnico.',
    content: `
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>Quantidade, preços e valor recebido. Em outros sistemas, isso também pode vir de sensor, arquivo, banco de dados, API ou outro equipamento.</div>
        <div class="mbb-card"><strong>FAZER</strong>Multiplicar, somar e calcular o troco. Em outros problemas, pode comparar, decidir, ordenar, converter ou transformar informações.</div>
        <div class="mbb-card"><strong>RESPONDER</strong>Informar total e troco. Uma resposta também pode ser salvar um dado, enviar uma mensagem, devolver dados a outro sistema ou acionar um dispositivo.</div>
      </div>

      <h3>Agora aparecem os nomes técnicos</h3>
      <div class="term-grid">
        <div class="head">Ideia</div><div class="head">Termo técnico</div><div class="head">Jargão comum</div>
        <div><strong>SABER</strong></div><div>Entrada</div><div>Ler / receber dados</div>
        <div><strong>FAZER</strong></div><div>Processamento</div><div>Processar</div>
        <div><strong>RESPONDER</strong></div><div>Saída</div><div>Escrever / exibir / retornar / enviar</div>
      </div>

      <div class="note-box"><strong>“Ler” e “escrever” são usados em programação em vários contextos.</strong> Os dados podem ser lidos do teclado, de um arquivo, de um sensor ou de outro sistema; e podem ser escritos na tela, em arquivos, em bancos de dados ou enviados pela rede.</div>

      <div class="task-box">
        <h4>Faça sem código</h4>
        <p>Uma máquina de estacionamento precisa calcular o valor devido a partir do tempo de permanência. Identifique apenas: o que precisa <strong>Saber</strong>, o que precisa <strong>Fazer</strong> e como precisa <strong>Responder</strong>.</p>
      </div>`
  },
  {
    id: 3,
    menu: '3 Algoritmo',
    title: 'Da solução humana para um algoritmo',
    objective: 'Organizar passos claros e transformar a solução em pseudocódigo sem depender de uma linguagem real.',
    content: `
      <div class="hero-box">
        <h3>Como explicar a solução para outra pessoa?</h3>
        <p>Se alguém nunca tivesse feito essa venda, quais instruções seriam necessárias para chegar ao total e ao troco?</p>
      </div>

      <ol>
        <li>Obter a quantidade e o preço dos salgados.</li>
        <li>Obter a quantidade e o preço dos refrigerantes.</li>
        <li>Calcular o valor de cada grupo de produtos.</li>
        <li>Somar os valores e obter o total.</li>
        <li>Obter o valor recebido.</li>
        <li>Subtrair o total do valor recebido.</li>
        <li>Informar total e troco.</li>
      </ol>

      <p>Depois que a sequência já existe, damos o nome técnico:</p>
      <div class="concept-box"><strong>Algoritmo</strong> é uma sequência organizada e finita de passos para resolver um problema.</div>

      <h3>O que torna um algoritmo utilizável?</h3>
      <ul>
        <li><strong>Finitude:</strong> precisa terminar depois de uma quantidade limitada de passos.</li>
        <li><strong>Clareza:</strong> cada passo deve ser compreensível e não depender de adivinhação.</li>
        <li><strong>Ordem:</strong> a sequência dos passos precisa respeitar as dependências do problema.</li>
        <li><strong>Entradas e resultados:</strong> quando existirem, devemos saber quais dados entram e o que a solução produz.</li>
        <li><strong>Correção:</strong> não basta executar; os passos precisam produzir o resultado esperado para os casos previstos.</li>
      </ul>
      <div class="note-box"><strong>Algoritmos não são exclusivos de uma linguagem.</strong> O mesmo raciocínio pode ser representado em pseudocódigo, fluxograma, VisuAlg, Python ou outra linguagem. O que muda é a forma de expressão.</div>

      <h3>Pseudocódigo</h3>
      <p>A solução pode ser escrita em uma forma próxima de um programa, mas ainda independente de uma linguagem específica:</p>
      <pre class="command">receber quantidade de salgados
receber preço do salgado
receber quantidade de refrigerantes
receber preço do refrigerante

valor dos salgados ← quantidade de salgados × preço do salgado
valor dos refrigerantes ← quantidade de refrigerantes × preço do refrigerante
total ← valor dos salgados + valor dos refrigerantes

receber valor pago
troco ← valor pago - total

mostrar total
mostrar troco</pre>

      <div class="ok-box"><strong>Algoritmo não é código.</strong> A solução pode ser representada em linguagem natural, pseudocódigo, fluxograma e depois em diferentes linguagens de programação.</div>

      <div class="task-box">
        <h4>Aplique</h4>
        <p>Um serviço de entrega calcula o valor a partir da distância e de uma tarifa por quilômetro. Escreva os passos e depois transforme-os em pseudocódigo.</p>
      </div>`
  },
  {
    id: 4,
    menu: '4 Fluxograma',
    title: 'Enxergando o caminho da solução',
    objective: 'Usar poucos símbolos de fluxograma para representar visualmente o algoritmo sem antecipar decisões e repetições.',
    content: `
      <div class="hero-box">
        <h3>O mesmo algoritmo pode ser visto</h3>
        <p>O fluxograma permite representar graficamente o caminho percorrido pela solução. Neste primeiro contato, bastam poucos elementos.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Início / fim</strong><br>Marca onde o fluxo começa e termina.</div>
        <div class="mini-card"><strong>Entrada / saída</strong><br>Representa informações recebidas ou respostas produzidas.</div>
        <div class="mini-card"><strong>Processamento</strong><br>Representa uma transformação ou cálculo.</div>
        <div class="mini-card"><strong>Setas</strong><br>Mostram a direção do fluxo.</div>
      </div>

      <div class="placeholder-flow">
        <strong>IMAGEM A INSERIR — Fluxograma de sequência</strong>
        <span>Espaço reservado para o fluxograma de sequência da cantina: receber dados → calcular total → calcular troco → informar resultados.</span>
      </div>

      <p>O fluxograma deve permitir relacionar as diferentes representações da mesma solução:</p>
      <div class="flow">problema → passos → pseudocódigo → fluxograma → programa</div>

      <div class="note-box"><strong>A representação cresce com o problema.</strong> Quando uma solução possui caminhos alternativos, o fluxograma precisa representar decisões. Quando uma etapa retorna a um ponto anterior, passa a representar também repetição.</div>

      <div class="deep-box"><strong>Fluxogramas podem representar estruturas mais complexas.</strong> Símbolos e convenções adicionais são úteis quando o processo envolve decisões, repetições, subprocessos ou fluxos maiores.</div>`
  },
  {
    id: 5,
    menu: '5 Linguagem e ambiente',
    title: 'Como a solução chega ao computador?',
    objective: 'Diferenciar linguagem, plataforma e ambiente de desenvolvimento antes de começar a programar.',
    content: `
      <div class="hero-box">
        <h3>Do algoritmo ao programa executável</h3>
        <p>Para que a solução seja executada por um computador, ela precisa ser expressa segundo as regras de uma linguagem e processada por um ambiente capaz de interpretá-la, compilá-la ou prepará-la para execução.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Linguagem de programação</strong><br>Define formas e regras para expressar instruções e dados.</div>
        <div class="mini-card"><strong>Plataforma</strong><br>É o contexto tecnológico em que o programa é desenvolvido ou executado, como um sistema operacional, navegador, dispositivo ou runtime.</div>
        <div class="mini-card"><strong>Ambiente de desenvolvimento</strong><br>É a ferramenta usada para escrever, executar, testar e corrigir o programa.</div>
        <div class="mini-card"><strong>VisuAlg</strong><br>Funciona como uma ponte entre o pseudocódigo e um programa executável, permitindo observar a lógica em funcionamento.</div>
      </div>

      <p>A mesma lógica será expressa depois em <strong>Python</strong>. A comparação evidencia uma ideia importante:</p>
      <div class="concept-box"><strong>A linguagem pode mudar. O raciocínio de programação não precisa recomeçar do zero.</strong></div>

      <h3>Código-fonte, execução e compilação</h3>
      <p><strong>Código-fonte</strong> é aquilo que o programador escreve. A forma de transformar esse código em algo executável depende da linguagem e da plataforma: há ambientes que compilam antes da execução, outros que utilizam interpretadores ou máquinas virtuais, e alguns combinam etapas.</p>
      <p>No VisuAlg, a execução ajuda a observar a lógica do algoritmo. Em Python, o código-fonte é executado por uma implementação da linguagem, normalmente por meio do interpretador Python. A criação de um executável distribuível é uma etapa separada e depende da ferramenta e da plataforma utilizadas.</p>

      <h3>Do código-fonte ao que a máquina executa</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Código-fonte</strong><br>Texto escrito pelo programador segundo as regras de uma linguagem.</div>
        <div class="mini-card"><strong>Código-objeto</strong><br>Em processos de compilação, pode ser uma representação intermediária produzida antes do executável final.</div>
        <div class="mini-card"><strong>Executável</strong><br>Artefato preparado para ser carregado e executado em uma plataforma compatível.</div>
        <div class="mini-card"><strong>Interpretador</strong><br>Executa ou coordena a execução do programa a partir do código ou de uma representação intermediária, conforme a implementação da linguagem.</div>
      </div>
      <p><strong>Compilador</strong> traduz código para outra representação antes da execução. <strong>Interpretador</strong> participa da execução de maneira diferente. Linguagens e implementações modernas podem combinar compilação, bytecode, máquinas virtuais e interpretação; por isso a distinção entre “linguagem compilada” e “linguagem interpretada” nem sempre descreve sozinha todo o processo de execução.</p>

      <h3>Ferramentas que cercam a linguagem</h3>
      <ul>
        <li><strong>Editor de código:</strong> ferramenta para escrever arquivos de código-fonte.</li>
        <li><strong>IDE:</strong> integra edição, execução, depuração, navegação e outras ferramentas de desenvolvimento.</li>
        <li><strong>SDK:</strong> conjunto de ferramentas, bibliotecas e utilitários fornecidos para desenvolver para determinada plataforma ou tecnologia.</li>
        <li><strong>Runtime:</strong> ambiente necessário para executar certos programas.</li>
      </ul>

      <div class="note-box">Linguagens diferentes fazem escolhas diferentes de sintaxe, execução e ecossistema. A escolha de uma linguagem depende do problema, da plataforma, das bibliotecas disponíveis e de outros requisitos do projeto.</div>`
  }
];

const visualgSteps = [
  {
    id: 1,
    menu: '1 Cantina executável',
    title: 'Fazendo a cantina existir no VisuAlg',
    objective: 'Transformar o algoritmo já compreendido em um programa sequencial executável.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Programar</span>
        <h3>Transformando a solução em programa</h3>
        <p>O algoritmo da cantina já descreve uma necessidade concreta. O próximo passo é expressar essa mesma solução em VisuAlg para executá-la e observar seus dados, cálculos e resultados.</p>
      </div>

      <pre class="command">algoritmo "Cantina"
var
   qtdSalgado, qtdRefrigerante: inteiro
   precoSalgado, precoRefrigerante: real
   total, valorRecebido, troco: real

inicio
   escreva("Quantidade de salgados: ")
   leia(qtdSalgado)

   escreva("Preço do salgado: R$ ")
   leia(precoSalgado)

   escreva("Quantidade de refrigerantes: ")
   leia(qtdRefrigerante)

   escreva("Preço do refrigerante: R$ ")
   leia(precoRefrigerante)

   total <- qtdSalgado * precoSalgado + qtdRefrigerante * precoRefrigerante

   escreva("Valor recebido: R$ ")
   leia(valorRecebido)

   troco <- valorRecebido - total

   escreval("Total: R$ ", total:0:2)
   escreval("Troco: R$ ", troco:0:2)

fimalgoritmo</pre>

      <h3>Encontre o que já conhecemos</h3>
      <div class="term-grid">
        <div class="head">Saber</div><div class="head">Fazer</div><div class="head">Responder</div>
        <div><span class="inline-code">leia(...)</span></div><div>expressões e atribuições</div><div><span class="inline-code">escreva / escreval</span></div>
      </div>

      <p>Agora as palavras <strong>ler</strong> e <strong>escrever</strong> deixaram de ser apenas jargão: aparecem como comandos porque o programa precisa receber informações e produzir respostas.</p>

      <div class="task-box">
        <h4>Experimente</h4>
        <p>Execute com os dados originais e depois altere quantidades, preços e valor recebido.</p>
        <div class="flow">PREVER → EXECUTAR → COMPARAR</div>
        <p>Antes de cada execução, preveja o total e o troco. Depois compare o resultado esperado com o obtido.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Dados e memória',
    title: 'Onde o programa guarda aquilo que sabe?',
    objective: 'Compreender variáveis, constantes, tipos, memória e a relação com bits e bytes.',
    content: `
      <div class="hero-box">
        <h3>O programa recebeu um valor. E agora?</h3>
        <p>Quando a atendente informa uma quantidade ou um preço, o programa precisa manter essa informação disponível para os cálculos seguintes.</p>
      </div>

      <h3>Variáveis</h3>
      <p>Nomes como <span class="inline-code">qtdSalgado</span>, <span class="inline-code">precoSalgado</span> e <span class="inline-code">total</span> representam valores utilizados durante a execução.</p>
      <div class="concept-box"><strong>Variável:</strong> um nome usado no programa para referenciar um valor que pode ser armazenado e utilizado durante a execução.</div>

      <h3>Identificador, declaração, inicialização e atribuição</h3>
      <p>O nome usado para uma variável é um <strong>identificador</strong>. A linguagem estabelece regras para esses nomes. <strong>Declarar</strong> é informar que determinada variável fará parte do programa e, em linguagens que exigem isso, qual será seu tipo. <strong>Inicializar</strong> é fornecer um primeiro valor. <strong>Atribuir</strong> é colocar ou substituir um valor associado à variável durante a execução.</p>
      <pre class="command">var
   quantidade: inteiro
inicio
   quantidade <- 0      // primeiro valor
   quantidade <- 3      // novo valor</pre>
      <div class="note-box"><strong>Variável não é uma “caixinha” literal.</strong> A metáfora ajuda no começo, mas tecnicamente o identificador permite ao programa referenciar dados mantidos e manipulados conforme as regras da linguagem e do ambiente de execução.</div>

      <h3>Tipos</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>inteiro</strong><br>Quantidade de itens, contadores e outros valores sem parte fracionária.</div>
        <div class="mini-card"><strong>real</strong><br>Preços, medidas e valores que podem ter parte decimal.</div>
        <div class="mini-card"><strong>caractere</strong><br>Textos e códigos representados como caracteres.</div>
        <div class="mini-card"><strong>lógico</strong><br>Representa condições como verdadeiro ou falso. Sua utilidade ficará clara nas decisões.</div>
      </div>

      <h3>Conversão de tipos</h3>
      <p>Às vezes o dado chega em um tipo e precisa ser usado como outro. Um número digitado pode chegar como texto em determinadas linguagens; uma divisão pode produzir resultado real; um valor pode precisar ser convertido antes de participar de uma expressão.</p>
      <div class="concept-box"><strong>Conversão de tipo:</strong> transformação explícita ou implícita da representação de um valor para que ele seja tratado segundo outro tipo compatível. Conversões podem perder informação ou falhar, por isso devem ser compreendidas e testadas.</div>

      <h3>Constantes</h3>
      <p>Nem todo valor deve mudar. Uma taxa definida pelas regras do sistema, por exemplo, pode ser tratada conceitualmente como uma <strong>constante</strong> quando deve permanecer inalterada naquele contexto.</p>
      <div class="note-box">A forma de declarar constantes varia entre linguagens e ambientes. O conceito vem antes da sintaxe: é um valor identificado pelo programa que não deve ser alterado durante aquele uso.</div>

      <div class="deep-box">
        <strong>Indo até o bit — onde isso fica de verdade?</strong>
        <p>Durante a execução, valores precisam ser representados na memória. Sistemas digitais representam informações por estados que podem ser descritos com 0 e 1.</p>
        <div class="flow">1 bit = 2 possibilidades: 0 ou 1
1 byte = 8 bits
16 bits = 2 bytes
32 bits = 4 bytes
64 bits = 8 bytes</div>
        <p>A quantidade de bits usada por um tipo <strong>depende da linguagem, do ambiente e da implementação</strong>. Não existe uma regra universal como “inteiro sempre ocupa 32 bits”: a representação depende da linguagem, da implementação e da plataforma.</p>
        <p>Como exemplo de representação binária, o valor decimal 2 pode ser escrito em oito posições como <span class="inline-code">00000010</span>. Isso é uma ilustração da representação, não uma afirmação de que a variável inteira do VisuAlg ocupe exatamente um byte.</p>
      </div>

      <div class="concept-box"><strong>Outra ideia importante:</strong> bits sozinhos não dizem se representam número, texto, cor ou instrução. O significado depende de como os dados são interpretados.</div>`
  },
  {
    id: 3,
    menu: '3 Processamento',
    title: 'O que o programa faz com os dados?',
    objective: 'Usar expressões, operadores, atribuição e funções predefinidas a partir de necessidades reais.',
    content: `
      <div class="hero-box">
        <h3>O programa já sabe os valores. Agora precisa transformá-los.</h3>
        <p>No caixa, multiplicamos quantidade por preço, somamos subtotais e subtraímos o total do valor recebido.</p>
      </div>

      <pre class="command">valorSalgados <- qtdSalgado * precoSalgado
valorRefrigerantes <- qtdRefrigerante * precoRefrigerante
total <- valorSalgados + valorRefrigerantes
troco <- valorRecebido - total</pre>

      <h3>Operadores aritméticos</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>+</strong><br>somar valores</div>
        <div class="mini-card"><strong>-</strong><br>subtrair valores</div>
        <div class="mini-card"><strong>*</strong><br>multiplicar valores</div>
        <div class="mini-card"><strong>/</strong><br>dividir valores</div>
      </div>

      <h3>Expressões e precedência</h3>
      <p>Uma <strong>expressão</strong> combina valores, variáveis, operadores e funções para produzir um resultado. Assim como na Matemática, operadores podem ter precedências diferentes. Parênteses tornam a intenção mais clara e evitam depender apenas de memória sobre a ordem de avaliação.</p>
      <p>Além de <span class="inline-code">+</span>, <span class="inline-code">-</span>, <span class="inline-code">*</span> e <span class="inline-code">/</span>, linguagens costumam oferecer operações como resto da divisão, potência e divisão inteira. A sintaxe exata varia; o conceito vem antes do símbolo.</p>

      <p>Os parênteses ajudam a deixar explícita a ordem desejada quando a expressão cresce:</p>
      <pre class="command">media <- (valor1 + valor2) / 2</pre>

      <h3>Atribuição</h3>
      <p>Em <span class="inline-code">total <- ...</span>, primeiro a expressão do lado direito é calculada; depois o resultado é atribuído a <span class="inline-code">total</span>. Leia mentalmente como “total recebe”.</p>

      <h3>Funções predefinidas</h3>
      <p>O ambiente também disponibiliza operações já prontas. No VisuAlg, por exemplo, funções como <span class="inline-code">abs()</span> e <span class="inline-code">raizq()</span> podem ser usadas quando o problema precisar delas.</p>
      <div class="example-box"><strong>Uso com sentido:</strong> <span class="inline-code">abs(valorEsperado - valorApurado)</span> pode calcular a diferença absoluta entre dois valores, sem importar qual deles é maior.</div>

      <div class="note-box"><strong>Não é para decorar um catálogo.</strong> Primeiro reconheça o que precisa ser feito. Depois verifique se a linguagem ou o ambiente já oferece uma função adequada.</div>

      <div class="task-box">
        <h4>Experimente</h4>
        <p>Introduza propositalmente um erro lógico, trocando uma multiplicação por soma. O programa provavelmente executará. Compare o resultado esperado com o obtido.</p>
      </div>`
  },
  {
    id: 4,
    menu: '4 Decisões',
    title: 'Como o programa escolhe o que fazer?',
    objective: 'Construir comparações, condições, operadores lógicos, Se/Senão e Escolha/Caso quando o problema exige caminhos diferentes.',
    content: `
      <div class="hero-box">
        <h3>Uma decisão necessária no caixa</h3>
        <p>Se a compra custa R$ 21,00 e o cliente entrega R$ 10,00, o cálculo simples produz troco negativo. A conta matemática está coerente, mas o comportamento do sistema não.</p>
      </div>

      <p>A decisão depende de perguntas como:</p>
      <pre class="command">valorRecebido >= total</pre>
      <p>A resposta de uma comparação é lógica: <strong>verdadeiro</strong> ou <strong>falso</strong>.</p>

      <h3>Operadores relacionais</h3>
      <div class="flow">&gt;   maior que
&lt;   menor que
&gt;=  maior ou igual
&lt;=  menor ou igual
=   igual
&lt;&gt;  diferente</div>

      <h3>Se / Senão</h3>
      <pre class="command">se valorRecebido >= total entao
   troco <- valorRecebido - total
   escreval("Troco: R$ ", troco:0:2)
senao
   escreval("Valor insuficiente.")
fimse</pre>

      <div class="placeholder-flow">
        <strong>IMAGEM A INSERIR — Fluxograma de decisão</strong>
        <span>Usar a pergunta “o valor recebido é suficiente?” com dois caminhos: calcular o troco ou informar valor insuficiente.</span>
      </div>

      <h3>Mais de uma condição</h3>
      <p>Uma regra pode exigir condições combinadas:</p>
      <pre class="command">se total > 50 e clienteCadastrado entao
   desconto <- total * 0.05
fimse</pre>
      <div class="flow">E   → todas as condições precisam ser verdadeiras
OU  → pelo menos uma condição precisa ser verdadeira
NAO → inverte o resultado lógico</div>

      <h3>Tabela verdade — enxergando combinações lógicas</h3>
      <p>Quando duas condições são combinadas, uma tabela verdade ajuda a prever o resultado sem executar o programa:</p>
      <div class="term-grid">
        <div class="head">A / B</div><div class="head">A E B</div><div class="head">A OU B</div>
        <div>V / V</div><div>V</div><div>V</div>
        <div>V / F</div><div>F</div><div>V</div>
        <div>F / V</div><div>F</div><div>V</div>
        <div>F / F</div><div>F</div><div>F</div>
      </div>
      <p>O operador <strong>NÃO</strong> inverte um valor lógico: NÃO V resulta em F; NÃO F resulta em V.</p>

      <h3>Decisões encadeadas</h3>
      <p>Às vezes uma primeira resposta leva a uma nova pergunta. Por exemplo, a cantina pode aplicar faixas diferentes de desconto:</p>
      <pre class="command">se total > 100 entao
   desconto <- total * 0.10
senao
   se total > 50 entao
      desconto <- total * 0.05
   senao
      desconto <- 0
   fimse
fimse</pre>
      <p>A ordem importa: quem compra R$ 150 também compra mais de R$ 50. Por isso a faixa mais alta precisa ser verificada primeiro.</p>

      <h3>Escolha / Caso</h3>
      <p>Quando temos uma única informação e várias opções conhecidas, uma decisão múltipla pode expressar melhor o problema:</p>
      <pre class="command">escolha opcaoPagamento
   caso 1
      escreval("Dinheiro")
   caso 2
      escreval("Pix")
   caso 3
      escreval("Cartão")
   outrocaso
      escreval("Opção inválida")
fimescolha</pre>

      <div class="concept-box"><strong>Escolha a estrutura pela necessidade.</strong> <span class="inline-code">Se</span> é natural para avaliar condições. <span class="inline-code">Escolha</span> costuma ser clara quando selecionamos entre opções discretas conhecidas.</div>

      <div class="task-box"><h4>Aplique</h4><p>Uma empresa cobra frete para compras de até determinado valor e oferece frete gratuito acima desse limite. Modele a condição e teste exatamente no valor de fronteira, um pouco abaixo e um pouco acima.</p></div>`
  },
  {
    id: 5,
    menu: '5 Repetições',
    title: 'Como fazer o computador repetir uma tarefa?',
    objective: 'Escolher entre Enquanto, Repita e Para, usando contador e acumulador sem tratar repetição como um único comando.',
    content: `
      <div class="hero-box">
        <h3>A cantina não atende um único cliente</h3>
        <p>Executar manualmente o programa outra vez para cada atendimento desperdiça justamente uma das capacidades do computador: repetir tarefas.</p>
      </div>

      <h3>Enquanto</h3>
      <p>Nem sempre é possível saber antecipadamente quantos clientes chegarão. Nesse caso, a repetição pode continuar enquanto existir atendimento a realizar:</p>
      <pre class="command">enquanto continuar = "S" faca
   // realizar uma venda
fimenquanto</pre>
      <p>Use quando a continuidade depende de uma condição verificada antes de cada nova repetição.</p>

      <h3>Repita</h3>
      <p>A forma de pagamento precisa ser solicitada pelo menos uma vez e repetida se a opção for inválida:</p>
      <pre class="command">repita
   escreval("1 - Dinheiro")
   escreval("2 - Pix")
   escreval("3 - Cartão")
   leia(opcaoPagamento)
ate opcaoPagamento >= 1 e opcaoPagamento <= 3</pre>
      <p>A verificação acontece depois de executar o bloco ao menos uma vez.</p>

      <h3>Para</h3>
      <p>Quando uma venda possui uma quantidade conhecida de tipos de item, esses itens podem ser percorridos com uma repetição contada:</p>
      <pre class="command">para item de 1 ate quantidadeItens faca
   leia(quantidadeProduto)
   leia(precoProduto)
   subtotal <- subtotal + quantidadeProduto * precoProduto
fimpara</pre>

      <div class="term-grid">
        <div class="head">Estrutura</div><div class="head">Necessidade típica</div><div class="head">Pergunta mental</div>
        <div><strong>Enquanto</strong></div><div>quantidade de repetições não conhecida previamente</div><div>“continuo enquanto isso for verdade?”</div>
        <div><strong>Repita</strong></div><div>o bloco precisa ocorrer ao menos uma vez</div><div>“faço e depois verifico se termino?”</div>
        <div><strong>Para</strong></div><div>quantidade conhecida ou intervalo controlado</div><div>“quantas vezes / para cada posição?”</div>
      </div>

      <h3>Contador e acumulador</h3>
      <pre class="command">clientesAtendidos <- clientesAtendidos + 1
faturamento <- faturamento + total</pre>
      <div class="mini-grid">
        <div class="mini-card"><strong>Contador</strong><br>responde “quantos?”.</div>
        <div class="mini-card"><strong>Acumulador</strong><br>reúne valores ao longo das repetições.</div>
      </div>

      <div class="placeholder-flow">
        <strong>IMAGEM A INSERIR — Fluxograma de repetição</strong>
        <span>Mostrar claramente o ponto em que o fluxo volta para testar a condição e repetir o atendimento.</span>
      </div>

      <h3>Controle do laço e risco de repetição infinita</h3>
      <p>Todo laço precisa de uma lógica de continuidade e, quando deve terminar, de uma forma de fazer a condição de parada acontecer. Se a variável que controla o laço nunca muda, pode surgir uma <strong>repetição infinita</strong>.</p>
      <pre class="command">contador <- 1

enquanto contador <= 3 faca
   escreval(contador)
   contador <- contador + 1
fimenquanto</pre>
      <p>Também existem <strong>laços aninhados</strong>: um laço dentro de outro. Isso é útil, por exemplo, para percorrer linhas e colunas de uma matriz. O custo é maior complexidade de leitura, então deve surgir apenas quando o problema exigir.</p>

      <div class="deep-box"><strong>Repetições também podem ser aninhadas.</strong> Um laço dentro de outro é útil em problemas como percorrer linhas e colunas de uma matriz, mas aumenta a complexidade do fluxo e deve ser usado quando a estrutura do problema realmente exigir.</div>`
  },
  {
    id: 6,
    menu: '6 Funções',
    title: 'Como evitar que o programa vire um bloco gigante?',
    objective: 'Separar responsabilidades usando funções, procedimentos, parâmetros, retorno e escopo.',
    content: `
      <div class="hero-box">
        <h3>O programa cresceu</h3>
        <p>Receber dados, calcular subtotal, desconto, pagamento, relatório e validações em um único bloco dificulta leitura, teste e manutenção.</p>
      </div>

      <div class="concept-box"><strong>Decomposição:</strong> um problema grande pode ser dividido em tarefas menores com responsabilidades claras.</div>

      <h3>Uma função para calcular desconto</h3>
      <pre class="command">funcao calcularDesconto(valor: real): real
inicio
   se valor > 100 entao
      retorne valor * 0.10
   senao
      se valor > 50 entao
         retorne valor * 0.05
      senao
         retorne 0
      fimse
   fimse
fimfuncao</pre>

      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>Recebe o valor da compra como parâmetro.</div>
        <div class="mbb-card"><strong>FAZER</strong>Aplica a regra de desconto.</div>
        <div class="mbb-card"><strong>RESPONDER</strong>Retorna o valor do desconto.</div>
      </div>

      <h3>Procedimento</h3>
      <p>Quando uma tarefa precisa ser agrupada, mas não precisa devolver um valor para quem a chamou, um procedimento pode representar essa responsabilidade:</p>
      <pre class="command">procedimento mostrarResumo(total: real; desconto: real)
inicio
   escreval("Total: R$ ", total:0:2)
   escreval("Desconto: R$ ", desconto:0:2)
fimprocedimento</pre>

      <h3>Parâmetro, retorno e escopo</h3>
      <ul>
        <li><strong>Parâmetro:</strong> informação entregue à função ou procedimento.</li>
        <li><strong>Retorno:</strong> valor devolvido por uma função.</li>
        <li><strong>Escopo:</strong> contexto em que uma variável está disponível. Nem toda variável precisa existir para o programa inteiro.</li>
      </ul>

      <h3>Sub-rotinas, argumentos e chamadas</h3>
      <p><strong>Sub-rotina</strong> é um termo geral para uma parte do programa que executa uma tarefa e pode ser chamada a partir de outro ponto. Funções e procedimentos são formas de sub-rotina. Quando chamamos uma função, fornecemos <strong>argumentos</strong> aos parâmetros definidos por ela.</p>
      <div class="example-box"><strong>Responsabilidade única ajuda a testar.</strong> Uma função pequena que apenas calcula um desconto é mais fácil de testar e reutilizar do que um bloco que lê teclado, calcula, imprime e altera várias variáveis globais ao mesmo tempo.</div>

      <h3>Bibliotecas</h3>
      <p>Programar profissionalmente também envolve reutilizar recursos já construídos. Bibliotecas reúnem funcionalidades que podem ser usadas sem implementar tudo do zero.</p>
      <div class="note-box">A sintaxe e a forma de usar bibliotecas variam entre linguagens. No Python isso ficará muito mais visível.</div>`
  },
  {
    id: 7,
    menu: '7 Sistema integrado',
    title: 'Cantina — integrando os conceitos',
    objective: 'Usar sequência, decisão, Escolha, Enquanto, Repita, Para, contador, acumulador e função no mesmo sistema, cada recurso com um motivo.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Integrar</span>
        <h3>Agora não é mais um exercício de um único comando</h3>
        <p>O sistema atende vários clientes. Cada venda pode possuir vários tipos de item, possui regra de desconto, escolha da forma de pagamento e produz um fechamento do dia.</p>
      </div>

      <pre class="command">algoritmo "Cantina_Integrada"
var
   continuar: caractere
   item, quantidadeItens, quantidadeProduto: inteiro
   opcaoPagamento, clientesAtendidos: inteiro
   precoProduto, subtotal, desconto, total, faturamento: real

funcao calcularDesconto(valor: real): real
inicio
   se valor > 100 entao
      retorne valor * 0.10
   senao
      se valor > 50 entao
         retorne valor * 0.05
      senao
         retorne 0
      fimse
   fimse
fimfuncao

inicio
   clientesAtendidos <- 0
   faturamento <- 0
   continuar <- "S"

   enquanto continuar = "S" faca
      subtotal <- 0

      escreva("Quantos tipos de item há nesta venda? ")
      leia(quantidadeItens)

      para item de 1 ate quantidadeItens faca
         escreva("Quantidade do item ", item, ": ")
         leia(quantidadeProduto)
         escreva("Preço unitário: R$ ")
         leia(precoProduto)

         subtotal <- subtotal + quantidadeProduto * precoProduto
      fimpara

      desconto <- calcularDesconto(subtotal)
      total <- subtotal - desconto

      repita
         escreval("1 - Dinheiro")
         escreval("2 - Pix")
         escreval("3 - Cartão")
         escreva("Forma de pagamento: ")
         leia(opcaoPagamento)
      ate opcaoPagamento >= 1 e opcaoPagamento <= 3

      escolha opcaoPagamento
         caso 1
            escreval("Pagamento em dinheiro")
         caso 2
            escreval("Pagamento via Pix")
         caso 3
            escreval("Pagamento com cartão")
      fimescolha

      clientesAtendidos <- clientesAtendidos + 1
      faturamento <- faturamento + total

      escreval("Total: R$ ", total:0:2)
      escreva("Atender outro cliente? S/N: ")
      leia(continuar)
   fimenquanto

   escreval("Clientes atendidos: ", clientesAtendidos)
   escreval("Faturamento: R$ ", faturamento:0:2)

fimalgoritmo</pre>

      <h3>Por que cada estrutura está aí?</h3>
      <ul class="check-list">
        <li><strong>Para:</strong> percorre a quantidade conhecida de tipos de item de uma venda.</li>
        <li><strong>Enquanto:</strong> mantém o atendimento enquanto houver novos clientes.</li>
        <li><strong>Repita:</strong> garante que a forma de pagamento seja solicitada antes de validar.</li>
        <li><strong>Escolha:</strong> trata opções discretas de pagamento.</li>
        <li><strong>Se:</strong> decide a faixa de desconto.</li>
        <li><strong>Contador e acumulador:</strong> produzem o fechamento do dia.</li>
        <li><strong>Função:</strong> isola a responsabilidade de calcular desconto.</li>
      </ul>

      <div class="note-box"><strong>Uma solução pode ser correta de mais de uma forma.</strong> A escolha das estruturas deve ser justificada pelas necessidades do problema, pela clareza da solução e pelo comportamento esperado.</div>`
  }
];

const pythonSteps = [
  {
    id: 1,
    menu: '1 A ponte',
    title: 'A linguagem mudou. A programação mudou?',
    objective: 'Transferir uma solução já conhecida do VisuAlg para Python sem recomeçar a lógica do zero.',
    content: `
      <div class="hero-box">
        <h3>A lógica permanece; muda a forma de escrevê-la</h3>
        <p>O problema continua exigindo os mesmos dados, processamentos e respostas. Python fornece outra sintaxe e outros recursos para expressar essas ideias.</p>
      </div>

      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">leia(quantidade)
leia(preco)

total <- quantidade * preco

escreval(total)</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">quantidade = int(input("Quantidade: "))
preco = float(input("Preço: "))

total = quantidade * preco

print(total)</pre>
        </div>
      </div>

      <div class="concept-box"><strong>O que mudou?</strong> A sintaxe.<br><strong>O que permaneceu?</strong> Entrada, dados, processamento e saída.</div>

      <h3>Uma diferença importante: input recebe texto</h3>
      <pre class="command">a = input("Primeiro valor: ")
b = input("Segundo valor: ")
print(a + b)</pre>
      <p>Se o usuário digitar 2 e 3, o resultado será <span class="inline-code">23</span>, porque os valores recebidos por <span class="inline-code">input()</span> são textos. Por isso é necessário converter os valores antes de realizar operações numéricas:</p>
      <pre class="command">quantidade = int(input("Quantidade: "))
preco = float(input("Preço: "))</pre>

      <div class="note-box"><strong>Conceito ≠ comando.</strong> Tipos de dados são uma necessidade do modelo computacional; Python possui regras e funções próprias para representar e converter valores.</div>`
  },
  {
    id: 2,
    menu: '2 Decisões',
    title: 'As mesmas decisões em Python',
    objective: 'Mapear condições, operadores lógicos e decisão múltipla para a sintaxe de Python.',
    content: `
      <h3>Se / Senão</h3>
      <pre class="command">if valor_recebido >= total:
    troco = valor_recebido - total
    print(f"Troco: R$ {troco:.2f}")
else:
    print("Valor insuficiente.")</pre>

      <h3>Operadores lógicos</h3>
      <div class="term-grid">
        <div class="head">Ideia</div><div class="head">VisuAlg</div><div class="head">Python</div>
        <div>E</div><div>e</div><div>and</div>
        <div>OU</div><div>ou</div><div>or</div>
        <div>NÃO</div><div>nao</div><div>not</div>
      </div>

      <h3>Faixas de desconto</h3>
      <pre class="command">if total > 100:
    desconto = total * 0.10
elif total > 50:
    desconto = total * 0.05
else:
    desconto = 0</pre>
      <p>A ordem das condições importa. Uma compra de R$ 150 também é maior que R$ 50; por isso testamos primeiro a faixa mais alta.</p>

      <h3>Escolha/Caso → match/case</h3>
      <pre class="command">match forma_pagamento:
    case 1:
        print("Dinheiro")
    case 2:
        print("Pix")
    case 3:
        print("Cartão")
    case _:
        print("Opção inválida")</pre>

      <div class="note-box">Uma sequência de <span class="inline-code">if / elif</span> também pode resolver muitas escolhas. O importante é perceber o comportamento necessário e escolher uma forma clara de expressá-lo.</div>`
  },
  {
    id: 3,
    menu: '3 Repetições',
    title: 'Repetição: comportamento antes do comando',
    objective: 'Usar while e for e compreender como reproduzir uma repetição com teste no final quando a linguagem não possui Repita nativo.',
    content: `
      <h3>Enquanto → while</h3>
      <pre class="command">continuar = "S"

while continuar == "S":
    # realizar uma venda
    continuar = input("Atender outro cliente? S/N: ").strip().upper()</pre>

      <h3>Para → for</h3>
      <pre class="command">quantidade_itens = int(input("Quantos tipos de item? "))
subtotal = 0.0

for item in range(1, quantidade_itens + 1):
    quantidade = int(input(f"Quantidade do item {item}: "))
    preco = float(input("Preço unitário: "))
    subtotal += quantidade * preco</pre>

      <h3>E o Repita?</h3>
      <p>Python não possui um comando nativo equivalente ao <span class="inline-code">repita ... ate</span> do VisuAlg. A ideia continua existindo e pode ser construída, por exemplo:</p>
      <pre class="command">while True:
    opcao = int(input("Forma de pagamento (1 a 3): "))

    if 1 <= opcao <= 3:
        break</pre>

      <div class="concept-box"><strong>Lição importante:</strong> você não precisa procurar um comando idêntico em todas as linguagens. Primeiro reconheça o comportamento; depois descubra como aquela linguagem o expressa.</div>`
  },
  {
    id: 4,
    menu: '4 Funções e bibliotecas',
    title: 'Organização e recursos prontos em Python',
    objective: 'Criar funções, usar parâmetros/retorno e aproveitar recursos predefinidos e bibliotecas quando fizer sentido.',
    content: `
      <h3>Função definida no programa</h3>
      <pre class="command">def calcular_desconto(total):
    if total > 100:
        return total * 0.10
    if total > 50:
        return total * 0.05
    return 0</pre>

      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong><span class="inline-code">total</span> entra como parâmetro.</div>
        <div class="mbb-card"><strong>FAZER</strong>A função aplica a regra.</div>
        <div class="mbb-card"><strong>RESPONDER</strong><span class="inline-code">return</span> devolve o resultado para quem chamou.</div>
      </div>

      <h3>Funções já disponíveis</h3>
      <pre class="command">round(valor, 2)
abs(diferenca)
len(texto)
max(valores)
min(valores)
sum(valores)</pre>
      <p>Não é necessário memorizar todas. O importante é saber que muitas tarefas comuns já possuem recursos prontos e aprender a consultar documentação.</p>

      <div class="example-box"><strong>Ao consultar uma função na documentação, procure pelo menos:</strong><br>nome → parâmetros → o que retorna → exemplo de uso.</div>

      <h3>Texto com necessidade real</h3>
      <p>Uma placa ou código de produto pode chegar com espaços e letras minúsculas. Antes de comparar ou armazenar, o texto pode ser normalizado:</p>
      <pre class="command">placa = input("Placa: ").strip().upper()</pre>

      <h3>Biblioteca math — um problema geométrico</h3>
      <p>Se uma rampa possui comprimento conhecido e determinado ângulo, a altura pode ser calculada com trigonometria:</p>
      <pre class="command">import math

angulo = float(input("Ângulo em graus: "))
comprimento = float(input("Comprimento da rampa: "))

altura = comprimento * math.sin(math.radians(angulo))
print(f"Altura aproximada: {altura:.2f}")</pre>
      <p>Funções trigonométricas são adequadas quando o problema envolve relações angulares, medidas e proporções desse tipo. O contexto determina se uma função matemática é pertinente.</p>

      <h3>Biblioteca random — venda premiada</h3>
      <pre class="command">import random

numero = random.randint(1, 10)
if numero == 7:
    print("Venda premiada!")</pre>
      <div class="note-box">Geradores comuns de números aleatórios em software são pseudoaleatórios. Para sorteios comuns em exemplos e simulações, isso costuma ser suficiente; aplicações que exigem segurança ou imprevisibilidade criptográfica devem usar recursos apropriados para esse fim.</div>`
  },
  {
    id: 5,
    menu: '5 Confiabilidade',
    title: 'Funcionar uma vez não basta',
    objective: 'Validar entradas, tratar erros previsíveis, testar casos de fronteira e depurar de forma organizada.',
    content: `
      <div class="hero-box">
        <h3>O usuário real não segue sempre o roteiro perfeito</h3>
        <p>Ele pode digitar texto onde esperamos número, informar um valor impossível ou escolher uma opção inexistente.</p>
      </div>

      <h3>Erro de conversão</h3>
      <pre class="command">while True:
    try:
        quantidade = int(input("Quantidade: "))

        if quantidade > 0:
            break

        print("A quantidade deve ser maior que zero.")

    except ValueError:
        print("Digite um número inteiro.")</pre>

      <div class="mini-grid">
        <div class="mini-card"><strong>Entrada incompatível</strong><br><span class="inline-code">abc</span> não pode ser convertida para inteiro.</div>
        <div class="mini-card"><strong>Regra do problema</strong><br><span class="inline-code">-5</span> é um inteiro válido para Python, mas uma quantidade negativa pode ser inválida para o sistema.</div>
      </div>

      <h3>Três categorias de erro importantes</h3>
      <ul>
        <li><strong>Sintaxe:</strong> a escrita não segue as regras da linguagem.</li>
        <li><strong>Execução:</strong> o programa encontra uma operação que não consegue realizar naquele momento.</li>
        <li><strong>Lógica:</strong> o programa executa, mas a solução ou o cálculo está errado.</li>
      </ul>

      <h3>Teste com intenção</h3>
      <div class="flow">entrada → resultado esperado → resultado obtido → comparação</div>
      <p>Para uma regra “acima de 50”, teste pelo menos <span class="inline-code">49.99</span>, <span class="inline-code">50.00</span> e <span class="inline-code">50.01</span>. Limites revelam muitos erros de lógica.</p>

      <h3>Depuração</h3>
      <ol>
        <li>Defina o que deveria acontecer.</li>
        <li>Observe o que realmente aconteceu.</li>
        <li>Localize o primeiro ponto em que os valores divergem.</li>
        <li>Formule uma hipótese.</li>
        <li>Corrija e teste novamente.</li>
      </ol>
      <div class="note-box">A IDE pode ajudar com execução passo a passo, breakpoints e inspeção de variáveis. A ferramenta vem depois do raciocínio de depuração.</div>`
  },
  {
    id: 6,
    menu: '6 Aprofunde se precisar',
    title: 'Quando um valor já não basta',
    objective: 'Apresentar coleções e persistência como aprofundamentos naturais, sem deixar que ultrapassem o núcleo do componente.',
    content: `
      <div class="optional-box"><strong>Aprofundamento opcional.</strong> Esta etapa pode ser usada conforme tempo e ritmo da turma. O núcleo do componente não depende dela.</div>

      <h3>Várias vendas relacionadas</h3>
      <p>Se quisermos analisar valores de várias vendas, criar <span class="inline-code">venda1</span>, <span class="inline-code">venda2</span>, <span class="inline-code">venda3</span>... rapidamente deixa de fazer sentido.</p>
      <pre class="command">vendas = [25.0, 18.5, 62.0, 40.0]

for venda in vendas:
    print(venda)</pre>
      <p>Em Python, listas permitem reunir vários valores. No VisuAlg, a ideia correspondente pode aparecer com vetores.</p>

      <h3>Persistência</h3>
      <p>Uma lista mantida apenas na memória existe durante a execução do programa. Para recuperar os dados depois que o programa é encerrado, é necessário algum mecanismo de armazenamento persistente.</p>
      <div class="flow">memória durante a execução → arquivo → programa fecha → arquivo → nova execução</div>

      <p>Arquivos e bancos de dados são mecanismos comuns de persistência. Eles passam a ser necessários quando as informações precisam sobreviver ao encerramento do programa ou ser compartilhadas entre execuções e usuários.</p>

      <div class="deep-box"><strong>Voltando ao bit e ao Byte.</strong> Textos, números e arquivos acabam armazenados como bytes. No caso de texto, uma codificação define como caracteres são representados em bytes; por isso “um caractere” não significa necessariamente “um byte”.</div>

      <div class="note-box"><strong>Próximo caminho:</strong> a área <a href="python.html">Python — aprender, construir e consultar</a> parte do ambiente real, aprofunda a linguagem e conduz a arquivos, objetos, testes, aplicações e projetos completos.</div>`
  }
];


const aprofundarSteps = [
  {
    id: 1,
    menu: '1 IDE e projeto',
    title: 'A ferramenta também faz parte do trabalho de programar',
    objective: 'Compreender editor, IDE, navegação, recursos de produtividade e organização de um projeto sem confundir ferramenta com conhecimento de programação.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Aprofundar</span>
        <h3>Quando o programa cresce, procurar tudo manualmente começa a atrapalhar</h3>
        <p>Em um arquivo pequeno, muitas funções e erros podem ser localizados apenas pela leitura. Em projetos maiores, ferramentas de navegação, execução, depuração e organização tornam-se importantes para localizar trechos de código e compreender a estrutura do sistema.</p>
      </div>

      <h3>Editor de código e IDE não são a mesma coisa</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Editor de código</strong><br>Prioriza a edição de arquivos de código e normalmente pode receber extensões e integrações.</div>
        <div class="mini-card"><strong>IDE</strong><br>Ambiente Integrado de Desenvolvimento: reúne editor, execução, depuração, navegação pelo projeto e outras ferramentas em um mesmo ambiente.</div>
        <div class="mini-card"><strong>SDK</strong><br>Kit de desenvolvimento: conjunto de ferramentas, bibliotecas, documentação e utilitários necessários ou úteis para desenvolver para determinada tecnologia.</div>
        <div class="mini-card"><strong>Runtime</strong><br>Ambiente responsável por fornecer recursos necessários durante a execução de determinados programas.</div>
      </div>

      <h3>Recursos de uma IDE que o programador precisa reconhecer</h3>
      <ul>
        <li><strong>Navegação:</strong> localizar arquivos, funções, classes e referências sem procurar linha por linha.</li>
        <li><strong>Completar comandos:</strong> oferecer sugestões conforme o código é digitado. Isso economiza digitação, mas não substitui saber o que o comando faz.</li>
        <li><strong>Coloração de sintaxe:</strong> usar diferenças visuais para facilitar a leitura de palavras reservadas, textos, números e comentários.</li>
        <li><strong>Marcas de erro e avisos:</strong> indicar problemas detectáveis antes ou durante a execução.</li>
        <li><strong>Terminal integrado:</strong> executar comandos sem sair do ambiente.</li>
        <li><strong>Depurador:</strong> interromper a execução, avançar passo a passo e observar o estado do programa.</li>
      </ul>

      <div class="danger-box"><strong>Cuidado:</strong> a IDE pode completar uma instrução perfeitamente escrita e ainda assim o programa estar logicamente errado. Ferramenta de produtividade não é substituta do raciocínio.</div>

      <h3>Build e deploy</h3>
      <p><strong>Build</strong> é o processo de preparar artefatos de uma aplicação para execução ou distribuição, podendo envolver compilação, cópia de recursos, empacotamento e outras etapas. <strong>Deploy</strong> é disponibilizar uma versão preparada no ambiente em que será usada. Em um programa simples de desktop, isso pode significar gerar e entregar um pacote executável; em outros sistemas, o processo pode ser muito mais amplo.</p>

      <h3>Organização em projeto</h3>
      <p>Quando todo o código fica em um único arquivo, alterações e responsabilidades podem se tornar difíceis de localizar. Um projeto pode separar entrada/saída, regras de negócio e funções reutilizáveis em arquivos ou módulos distintos, de acordo com o tamanho e a complexidade da aplicação.</p>
      <pre class="command">estacionamento/
├── main.py
├── calculos.py
├── validacoes.py
└── testes/
    └── test_calculos.py</pre>
      <p>Essa estrutura é apenas uma possibilidade. A organização correta depende do tamanho e da natureza do sistema.</p>

      <div class="task-box">
        <h4>Observe no ambiente que você usa</h4>
        <p>Localize: explorador de arquivos, área de edição, execução, terminal, indicação de erros e, se disponível, depuração. Explique a função de cada recurso em vez de apenas apontar onde ele fica.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Teste de mesa',
    title: 'Antes do depurador: acompanhar o algoritmo com teste de mesa',
    objective: 'Rastrear valores e condições manualmente para compreender o estado do programa ao longo da execução.',
    content: `
      <div class="hero-box">
        <h3>O resultado final está errado. Em que momento ele começou a ficar errado?</h3>
        <p>Olhar apenas a saída final muitas vezes não revela a causa. O teste de mesa acompanha, passo a passo, como variáveis e condições mudam durante uma execução escolhida.</p>
      </div>

      <pre class="command">subtotal = 0

for preco in [10, 20, 5]:
    subtotal = subtotal + preco

print(subtotal)</pre>

      <h3>Rastreando o estado</h3>
      <div class="term-grid">
        <div class="head">Passo</div><div class="head">preco</div><div class="head">subtotal</div>
        <div>início</div><div>—</div><div>0</div>
        <div>1ª repetição</div><div>10</div><div>10</div>
        <div>2ª repetição</div><div>20</div><div>30</div>
        <div>3ª repetição</div><div>5</div><div>35</div>
      </div>

      <div class="concept-box"><strong>Estado do programa:</strong> conjunto dos valores e condições relevantes em determinado momento da execução. Rastrear o estado ajuda a explicar por que uma próxima instrução produzirá determinado resultado.</div>

      <h3>Teste de mesa em decisão</h3>
      <pre class="command">total = 50

if total > 50:
    desconto = total * 0.05
else:
    desconto = 0</pre>
      <p>Antes de executar, responda: <span class="inline-code">50 > 50</span> é verdadeiro ou falso? Essa pergunta simples diferencia <span class="inline-code">></span> de <span class="inline-code">>=</span> e revela erros de fronteira.</p>

      <h3>Teste de mesa não substitui testes do programa</h3>
      <p>Ele é uma técnica de raciocínio. Depois executamos casos reais e comparamos. A sequência continua:</p>
      <div class="flow">PREVER → RASTREAR → EXECUTAR → COMPARAR → EXPLICAR</div>

      <div class="task-box"><h4>Faça à mão</h4><p>Escolha um laço com contador e acumulador do sistema da Cantina. Monte uma tabela com pelo menos três repetições e registre os valores antes e depois de cada atualização.</p></div>`
  },
  {
    id: 3,
    menu: '3 Estruturas de dados',
    title: 'Quando vários dados precisam ser guardados em conjunto',
    objective: 'Compreender vetores, matrizes e as principais coleções de Python pela necessidade que cada estrutura resolve.',
    content: `
      <div class="hero-box">
        <h3>Criar venda1, venda2, venda3... não escala</h3>
        <p>Quando vários valores pertencem ao mesmo conjunto lógico, estruturas de dados permitem agrupá-los e manipulá-los de forma organizada. A escolha depende da relação entre os dados e das operações que serão realizadas.</p>
      </div>

      <h3>Vetor — uma sequência indexada</h3>
      <p>Em linguagens e pseudolinguagens que trabalham com vetores, os elementos ocupam posições identificadas por índice e, em geral, seguem uma estrutura homogênea definida pela linguagem.</p>
      <pre class="command">vendas[1] <- 25.00
vendas[2] <- 18.50
vendas[3] <- 62.00</pre>
      <p>O índice identifica uma posição. Percorrer o vetor normalmente combina estrutura de dados com repetição.</p>

      <h3>Matriz — duas ou mais dimensões</h3>
      <p>Um mapa simples de ocupação de vagas pode ser pensado como linhas e colunas:</p>
      <pre class="command">vagas[linha, coluna]</pre>
      <p>Para percorrer uma matriz linha por linha, laços aninhados surgem naturalmente: um controla as linhas e outro as colunas.</p>

      <h3>Python oferece coleções com características diferentes</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>list</strong><br>Sequência ordenada e mutável. Adequada quando vários itens precisam ser mantidos e a coleção pode sofrer alterações.</div>
        <div class="mini-card"><strong>tuple</strong><br>Sequência ordenada e imutável. Útil quando o conjunto de posições não deve ser alterado depois de criado.</div>
        <div class="mini-card"><strong>set</strong><br>Coleção de elementos únicos, sem depender de posição numérica como uma lista. Útil para pertinência e remoção de duplicidades.</div>
        <div class="mini-card"><strong>dict</strong><br>Relaciona chaves a valores. Útil quando um dado precisa ser localizado por uma identificação significativa.</div>
      </div>

      <h3>Lista</h3>
      <pre class="command">vendas = [25.0, 18.5, 62.0]
vendas.append(40.0)
print(vendas[0])</pre>

      <h3>Tupla</h3>
      <pre class="command">coordenada = (3, 5)
linha, coluna = coordenada</pre>

      <h3>Conjunto</h3>
      <pre class="command">formas_usadas = {"pix", "cartao", "pix"}
print(formas_usadas)  # cada valor aparece uma única vez no conjunto</pre>

      <h3>Dicionário</h3>
      <pre class="command">tarifas = {
    "carro": 8.0,
    "moto": 5.0
}

print(tarifas["carro"])</pre>

      <div class="concept-box"><strong>Não existe “a melhor coleção”.</strong> Existe uma estrutura mais adequada à necessidade: ordem, alteração, unicidade, busca por chave, dimensionalidade e outras características.</div>

      <h3>Estruturas compostas podem ser combinadas</h3>
      <pre class="command">atendimentos = [
    {"placa": "ABC1D23", "horas": 2, "valor": 16.0},
    {"placa": "XYZ9A87", "horas": 1, "valor": 8.0}
]</pre>
      <p>O exemplo combina uma lista com dicionários: a lista reúne vários registros e cada dicionário organiza os campos de um registro. Estruturas compostas não precisam ser substituídas automaticamente por objetos; a escolha depende do modelo e do comportamento exigidos.</p>

      <div class="task-box"><h4>Escolha antes de codificar</h4><p>Para cada caso, justifique uma estrutura: a) sequência das vendas do dia; b) coordenadas fixas de uma vaga; c) placas únicas que entraram no estacionamento; d) tarifa por tipo de veículo; e) mapa de vagas por linha e coluna.</p></div>`
  },
  {
    id: 4,
    menu: '4 Exceções',
    title: 'Quando uma operação válida encontra um dado ou situação que impede sua execução',
    objective: 'Diferenciar validação e tratamento de exceções e usar try/except sem esconder erros ou transformar exceção em solução para qualquer problema.',
    content: `
      <div class="hero-box">
        <h3>O usuário digitou "dez" onde esperávamos um número</h3>
        <p>A instrução <span class="inline-code">int("dez")</span> é sintaticamente válida, mas a conversão não pode ser concluída. Em Python, isso produz uma exceção <span class="inline-code">ValueError</span>.</p>
      </div>

      <h3>Validação e exceção são ideias diferentes</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Validação</strong><br>Verifica se o dado respeita uma regra do problema: quantidade maior que zero, opção existente, placa em formato aceitável.</div>
        <div class="mini-card"><strong>Exceção</strong><br>Representa uma situação excepcional detectada durante a execução, como uma conversão impossível ou arquivo inexistente.</div>
      </div>

      <pre class="command">while True:
    try:
        horas = float(input("Horas: ").replace(",", "."))

        if horas <= 0:
            print("O tempo deve ser maior que zero.")
            continue

        break

    except ValueError:
        print("Digite um número válido.")</pre>

      <h3>O fluxo do try/except</h3>
      <ol>
        <li>O código dentro de <span class="inline-code">try</span> é executado.</li>
        <li>Se nenhuma exceção ocorrer, o bloco <span class="inline-code">except</span> correspondente é ignorado.</li>
        <li>Se ocorrer uma exceção compatível, o fluxo é desviado para o tratamento.</li>
      </ol>

      <h3>Não capture tudo sem saber por quê</h3>
      <pre class="command"># Evite usar isto como solução genérica:
try:
    fazer_algo()
except:
    pass</pre>
      <div class="danger-box"><strong>Por que isso é ruim?</strong> Pode esconder um defeito real e deixar o programa continuar em estado incorreto. Trate exceções que você compreende e para as quais existe uma resposta apropriada.</div>

      <h3>Informações detalhadas ajudam a investigar</h3>
      <p>Quando uma exceção não é tratada, Python normalmente apresenta uma mensagem com o tipo da exceção e um rastreamento das chamadas que levaram ao erro. Esse rastreamento é uma pista de depuração, não “um monte de texto para ignorar”.</p>

      <div class="task-box"><h4>Compare os casos</h4><p>Explique por que <span class="inline-code">-2</span> pode exigir validação da regra do estacionamento, enquanto <span class="inline-code">"duas"</span> pode provocar uma exceção durante a conversão numérica.</p></div>`
  },
  {
    id: 5,
    menu: '5 Depuração real',
    title: 'Parar o programa para enxergar o que ele está fazendo',
    objective: 'Usar execução passo a passo, breakpoints, inspeção de variáveis, pilha de chamadas e mensagens de exceção como ferramentas de investigação.',
    content: `
      <div class="hero-box">
        <h3>O resultado está errado, mas a origem do erro ainda não está clara</h3>
        <p>Imprimir valores ajuda, mas um depurador permite interromper o programa e observar seu estado enquanto ele executa.</p>
      </div>

      <h3>Breakpoint</h3>
      <p>Um <strong>ponto de interrupção</strong> marca uma linha em que a execução deve ser pausada. Quando o programa chega a esse ponto, os valores podem ser inspecionados antes da continuidade.</p>

      <h3>Execução passo a passo</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Continuar</strong><br>Prossegue até o próximo breakpoint ou até o programa terminar.</div>
        <div class="mini-card"><strong>Avançar linha</strong><br>Executa a próxima instrução observando o fluxo atual.</div>
        <div class="mini-card"><strong>Entrar na função</strong><br>Quando a linha chama uma função, permite acompanhar sua execução interna.</div>
        <div class="mini-card"><strong>Sair da função</strong><br>Conclui a chamada atual e retorna ao ponto que chamou a função.</div>
      </div>

      <h3>Inspeção de variáveis</h3>
      <p>Com o programa pausado, observe os valores atuais. Se <span class="inline-code">faturamento</span> deveria acumular vendas e volta para zero a cada repetição, o estado revela exatamente quando isso acontece.</p>

      <h3>Pilha de chamadas — call stack</h3>
      <p>Quando uma função chama outra, que chama outra, o programa precisa saber para onde retornar. A <strong>pilha de chamadas</strong> mostra a sequência de chamadas ativa naquele instante.</p>
      <div class="flow">programa principal
└── registrar_venda()
    └── calcular_total()
        └── calcular_desconto()</div>
      <p>Se o erro ocorrer dentro de <span class="inline-code">calcular_desconto()</span>, a pilha ajuda a entender por qual caminho chegamos ali.</p>

      <h3>Uma rotina de investigação</h3>
      <div class="flow">1. Reproduzir o erro
2. Definir o resultado esperado
3. Escolher um ponto de observação
4. Pausar com breakpoint
5. Avançar e observar valores
6. Encontrar a primeira divergência
7. Formular uma hipótese
8. Corrigir
9. Executar os testes novamente</div>

      <div class="concept-box"><strong>Depurar não é tentar alterações aleatórias até funcionar.</strong> É investigar evidências sobre o estado e o fluxo do programa.</div>`
  },
  {
    id: 6,
    menu: '6 Bibliotecas e pacotes',
    title: 'Reutilizar software sem confundir biblioteca, módulo, pacote e framework',
    objective: 'Compreender reutilização de código, documentação, dependências e gerenciamento de pacotes a partir de necessidades reais.',
    content: `
      <div class="hero-box">
        <h3>Reutilização faz parte do desenvolvimento</h3>
        <p>Recursos como <span class="inline-code">math</span>, <span class="inline-code">random</span> e <span class="inline-code">tkinter</span> ilustram formas de reutilizar código. Módulos, pacotes, bibliotecas e frameworks têm papéis diferentes nesse ecossistema.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Módulo</strong><br>Unidade de código reutilizável. Em Python, um arquivo Python pode funcionar como módulo.</div>
        <div class="mini-card"><strong>Pacote</strong><br>Forma de organizar e distribuir módulos e outros recursos de um projeto.</div>
        <div class="mini-card"><strong>Biblioteca</strong><br>Conjunto de recursos reutilizáveis oferecidos para que seu programa chame funcionalidades prontas.</div>
        <div class="mini-card"><strong>Framework</strong><br>Estrutura mais abrangente que estabelece convenções e um fluxo de trabalho para construir aplicações.</div>
      </div>

      <h3>Biblioteca padrão e dependência externa</h3>
      <p>Alguns módulos acompanham a instalação da linguagem; outros precisam ser obtidos separadamente. Quando um projeto depende de um pacote externo, essa dependência precisa ser conhecida e reproduzível em outros computadores.</p>

      <h3>Gerenciador de pacotes</h3>
      <p>No ecossistema Python, <span class="inline-code">pip</span> é uma ferramenta usada para instalar e gerenciar distribuições de pacotes. Um exemplo de instalação de pacote é:</p>
      <pre class="command">python -m pip install pyinstaller</pre>
      <div class="note-box"><strong>Instalar um pacote é uma alteração no ambiente.</strong> Em laboratório escolar, permissões, conexão e política da máquina precisam ser respeitadas. Não instale recursos apenas porque existem.</div>

      <h3>Dependência</h3>
      <p>Se o programa usa um recurso externo para funcionar, ele possui uma dependência. Quanto mais dependências, mais importante saber quais são, por que existem e quais versões são compatíveis com o projeto.</p>

      <h3>Documentação é parte do trabalho</h3>
      <div class="flow">nome → finalidade → instalação (se houver) → importação → parâmetros → retorno → exceções possíveis → exemplo</div>
      <p>O programador não precisa memorizar todas as APIs. Precisa saber formular a necessidade e localizar na documentação oficial a ferramenta apropriada.</p>

      <h3>Organização em módulos próprios</h3>
      <pre class="command"># calculos.py
def calcular_valor(horas, tarifa):
    return horas * tarifa

# main.py
from calculos import calcular_valor</pre>
      <p>Essa separação é <strong>modularização</strong>: dividir o programa em unidades com responsabilidades compreensíveis.</p>`
  },
  {
    id: 7,
    menu: '7 Classes e objetos',
    title: 'Quando dados e comportamentos pertencem à mesma entidade',
    objective: 'Passar da noção de paradigma orientado a objetos para uma primeira implementação concreta de classe e objeto.',
    content: `
      <div class="hero-box">
        <h3>Estamos passando os mesmos dados juntos por várias funções</h3>
        <p>Um veículo possui placa e tipo. Uma venda possui itens e total. Quando dados e comportamentos pertencem à mesma entidade, a orientação a objetos oferece uma forma de agrupá-los.</p>
      </div>

      <h3>Classe e objeto</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Classe</strong><br>Define uma estrutura e comportamentos para criar objetos daquele tipo.</div>
        <div class="mini-card"><strong>Objeto</strong><br>Uma instância concreta criada a partir de uma classe, com seu próprio estado.</div>
        <div class="mini-card"><strong>Atributo</strong><br>Dado associado ao objeto.</div>
        <div class="mini-card"><strong>Método</strong><br>Comportamento definido na classe e executado por um objeto.</div>
      </div>

      <pre class="command">class Veiculo:
    def __init__(self, placa, tipo):
        self.placa = placa
        self.tipo = tipo

    def descricao(self):
        return f"{self.tipo}: {self.placa}"

veiculo = Veiculo("ABC1D23", "carro")
print(veiculo.descricao())</pre>

      <h3>O que aconteceu?</h3>
      <ul>
        <li><span class="inline-code">Veiculo</span> é a classe.</li>
        <li><span class="inline-code">veiculo</span> referencia um objeto criado a partir dela.</li>
        <li><span class="inline-code">placa</span> e <span class="inline-code">tipo</span> são atributos do objeto.</li>
        <li><span class="inline-code">descricao()</span> é um método.</li>
        <li><span class="inline-code">__init__</span> participa da inicialização de uma nova instância em Python.</li>
      </ul>

      <h3>Nem tudo precisa virar classe</h3>
      <div class="danger-box"><strong>Orientação a objetos não é um prêmio por programa grande.</strong> Se uma função simples resolve claramente o problema, criar uma hierarquia de classes pode piorar a solução. O paradigma deve ajudar a organizar, não acrescentar cerimônia sem benefício.</div>

      <h3>Paradigmas podem coexistir</h3>
      <p>Um programa Python pode usar funções estruturadas, objetos e eventos na mesma aplicação. Sistemas reais frequentemente combinam ideias de vários paradigmas.</p>

      <div class="task-box"><h4>Modele antes de codificar</h4><p>Para uma classe <strong>Produto</strong>, proponha atributos e dois comportamentos que realmente pertençam ao produto. Depois justifique por que cada comportamento deveria estar na classe em vez de ser uma função completamente independente.</p></div>`
  },
  {
    id: 8,
    menu: '8 Qualidade e testes',
    title: 'Código correto precisa continuar compreensível e verificável',
    objective: 'Trabalhar legibilidade, comentários, estilo, testes unitários e programação em par como práticas de desenvolvimento, não como decoração.',
    content: `
      <div class="hero-box">
        <h3>O programa funciona hoje. Outra pessoa conseguirá entendê-lo amanhã?</h3>
        <p>Software é lido, alterado e testado muito mais vezes do que é escrito pela primeira vez. Organização e clareza diminuem a chance de introduzir novos defeitos.</p>
      </div>

      <h3>Legibilidade</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Nomes claros</strong><br><span class="inline-code">calcular_total()</span> comunica mais do que <span class="inline-code">ct()</span>.</div>
        <div class="mini-card"><strong>Indentação consistente</strong><br>Ajuda a enxergar a estrutura. Em Python, também participa da própria sintaxe.</div>
        <div class="mini-card"><strong>Funções focadas</strong><br>Uma responsabilidade bem delimitada facilita teste e manutenção.</div>
        <div class="mini-card"><strong>Evitar duplicação desnecessária</strong><br>Regras repetidas em vários lugares tendem a divergir quando mudam.</div>
      </div>

      <h3>Comentários úteis</h3>
      <pre class="command"># Regra definida pelo estacionamento: mensalista não paga atendimento avulso.
if mensalista:
    valor = 0</pre>
      <p>Um comentário deve explicar algo que o código sozinho não comunica bem — contexto, motivo ou decisão. Comentários como <span class="inline-code"># soma 1</span> antes de <span class="inline-code">contador += 1</span> normalmente apenas repetem o código.</p>

      <h3>Testes unitários</h3>
      <p>Uma função com entrada e saída bem definidas pode ser testada automaticamente em vários casos.</p>
      <pre class="command">def calcular_valor(horas, tarifa):
    return horas * tarifa


def test_calcular_valor():
    assert calcular_valor(2, 8.0) == 16.0</pre>
      <p>O exemplo mostra a ideia essencial: executar uma pequena unidade e verificar automaticamente se o resultado obtido corresponde ao esperado. Ferramentas de teste podem ampliar isso depois.</p>

      <h3>Teste não prova ausência de todos os bugs</h3>
      <p>Testes verificam apenas os casos que foram definidos. Uma bateria útil inclui casos normais, fronteiras, valores inválidos e situações que exercitem regras diferentes.</p>

      <h3>Programação em par</h3>
      <p>Duas pessoas trabalham juntas sobre a mesma tarefa. Uma conduz a implementação e a outra acompanha, questiona, revisa e pensa nos próximos passos; os papéis são alternados. Na programação em par, ambos participam ativamente do raciocínio, da revisão e das decisões sobre o código.</p>
      <div class="concept-box"><strong>Construir software em equipe também é uma competência de programação.</strong> Explicar decisões, revisar mudanças e manter histórico compartilhado fazem parte do trabalho.</div>`
  },
  {
    id: 9,
    menu: '9 Versionamento',
    title: 'O projeto agora merece histórico',
    objective: 'Compreender por que controle de versão distribuído faz parte do desenvolvimento e encaminhar a prática completa ao módulo Git/GitHub já existente.',
    content: `
      <div class="hero-box">
        <h3>Alteramos o programa e a versão de ontem funcionava. Como voltar?</h3>
        <p>Copiar arquivos como <span class="inline-code">projeto_final_agora_vai_3.py</span> não cria um histórico confiável. Controle de versão registra mudanças de maneira estruturada e permite comparar, recuperar e compartilhar evoluções.</p>
      </div>

      <h3>O que precisa ser dominado neste universo</h3>
      <div class="term-grid">
        <div class="head">Necessidade</div><div class="head">Git</div><div class="head">Ideia</div>
        <div>criar/configurar repositório</div><div>init, config</div><div>preparar o histórico local</div>
        <div>selecionar/registrar mudanças</div><div>add, commit</div><div>criar versões significativas</div>
        <div>desfazer/remover mudanças</div><div>restore, reset, rm</div><div>corrigir o estado controlado</div>
        <div>inspecionar/comparar</div><div>status, diff, log</div><div>entender o que mudou e o histórico</div>
        <div>linhas de desenvolvimento</div><div>branch, checkout/switch, merge, tag</div><div>isolar, integrar e marcar versões</div>
        <div>trabalhar com remoto</div><div>clone, remote, push, pull, fetch</div><div>sincronizar trabalho entre repositórios</div>
      </div>

      <h3>Software livre e colaboração</h3>
      <p>Controle de versão e repositórios remotos também são fundamentais em projetos de software livre e em equipes que colaboram sobre o mesmo código. O modelo distribuído do Git permite que cada participante possua um repositório local completo e sincronize mudanças com repositórios remotos quando necessário.</p>

      <h3>Git e GitHub não são sinônimos</h3>
      <p><strong>Git</strong> é o sistema de controle de versão distribuído. <strong>GitHub</strong> é uma plataforma que hospeda repositórios Git e oferece recursos de colaboração. O histórico Git pode existir localmente sem GitHub.</p>

      <h3>Markdown e documentação do repositório</h3>
      <p>Um arquivo <span class="inline-code">README.md</span> pode explicar propósito, execução, requisitos, decisões e estado do projeto. Documentar o repositório faz parte de tornar o trabalho compreensível para outras pessoas — e para você mesmo no futuro.</p>

      <div class="concept-box"><strong>CLI primeiro:</strong> conhecer os comandos no terminal torna visível o que o Git está fazendo. Interfaces gráficas podem ajudar depois, mas não devem esconder os conceitos.</div>

      <div class="task-box">
        <h4>Laboratório especializado</h4>
        <p>Controle de versão faz parte do desenvolvimento de software porque registra a evolução do código, permite comparar mudanças e facilita colaboração. A prática completa com Git e GitHub está organizada no laboratório especializado, que pode ser aplicado ao projeto desenvolvido nesta trilha.</p>
        <p><a href="git.html"><strong>Ir para o módulo Git/GitHub →</strong></a></p>
      </div>

      <div class="flow">criar uma funcionalidade
↓
testar
↓
verificar status/diff
↓
registrar commit com sentido
↓
continuar o desenvolvimento
↓
consultar ou recuperar histórico quando necessário</div>`
  }
];

const aplicarSteps = [
  {
    id: 1,
    menu: '1 Projeto final',
    title: 'Aplicar: Sistema de Estacionamento',
    objective: 'Transferir o raciocínio para um problema diferente, sem revelar previamente quais comandos devem ser usados.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Aplicar</span>
        <h3>A cantina ficou para trás</h3>
        <p>O estacionamento é um problema diferente da cantina: possui regras próprias, dados distintos e novas decisões de modelagem. A solução exige identificar quais ferramentas de programação são adequadas, em vez de repetir mecanicamente a estrutura anterior.</p>
      </div>

      <div class="example-box"><strong>Problema:</strong> um estacionamento precisa registrar atendimentos, calcular o valor devido conforme tipo de veículo e tempo de permanência, considerar regras para mensalistas, registrar forma de pagamento e apresentar o movimento do dia.</div>

      <h3>Comece somente com as três perguntas</h3>
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>Quais informações são indispensáveis para realizar um atendimento?</div>
        <div class="mbb-card"><strong>FAZER</strong>Quais cálculos, comparações, validações e registros serão necessários?</div>
        <div class="mbb-card"><strong>RESPONDER</strong>O que o atendente e o fechamento do dia precisam receber?</div>
      </div>

      <p>A análise do problema deve definir:</p>
      <ul>
        <li>quais dados precisam ser guardados e de que tipos;</li>
        <li>onde existem decisões;</li>
        <li>o que se repete;</li>
        <li>quais responsabilidades merecem funções;</li>
        <li>o que precisa ser validado;</li>
        <li>quais resultados precisam ser acumulados ou contados.</li>
      </ul>

      <details class="answer-box">
        <summary>Ver possíveis decisões depois de planejar</summary>
        <div class="answer-content">
          <p>Uma solução pode usar condição para regras de permanência ou desconto, escolha para tipos/opções, repetição para manter o sistema atendendo, contador para veículos e acumulador para faturamento. A estrutura exata depende das regras definidas para o sistema e das escolhas de modelagem.</p>
        </div>
      </details>

      <div class="concept-box"><strong>O teste real de aprendizagem:</strong> reconhecer sozinho que o problema precisa de uma estrutura, em vez de usar uma estrutura porque o enunciado mandou.</div>`
  },
  {
    id: 2,
    menu: '2 Testar e explicar',
    title: 'Como saber se o sistema está realmente funcionando?',
    objective: 'Testar casos normais, limites e entradas inválidas e conseguir explicar a lógica sem depender do código na tela.',
    content: `
      <h3>Bateria mínima de testes</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Caso normal</strong><br>Veículo e tempo válidos, pagamento comum.</div>
        <div class="mini-card"><strong>Fronteira</strong><br>Exatamente no limite em que uma regra muda.</div>
        <div class="mini-card"><strong>Formato inválido</strong><br>Texto em um campo numérico.</div>
        <div class="mini-card"><strong>Valor impossível</strong><br>Tempo negativo ou opção fora da faixa.</div>
        <div class="mini-card"><strong>Primeiro atendimento</strong><br>Conferir inicialização de contadores e acumuladores.</div>
        <div class="mini-card"><strong>Vários atendimentos</strong><br>Conferir fechamento e totais acumulados.</div>
      </div>

      <h3>Bugs propositais</h3>
      <pre class="command">valor = horas + tarifa        # deveria multiplicar
faturamento = valor           # deveria acumular
if horas > 3:                 # a regra talvez exija >=</pre>
      <p>Compare o resultado esperado com o obtido, localize a primeira divergência e justifique a correção.</p>

      <h3>Explique sem mostrar o código</h3>
      <div class="task-box"><p>Descreva verbalmente o fluxo do sistema: o que ele recebe, quais regras aplica, quando repete, como encerra e quais resultados produz. Se o raciocínio não puder ser explicado, o código sozinho não prova compreensão.</p></div>`
  },
  {
    id: 3,
    menu: '3 Desktop e eventos',
    title: 'Do console para uma aplicação desktop',
    objective: 'Mostrar que uma interface reage a eventos e conectar a lógica já conhecida a uma pequena aplicação de janela.',
    content: `
      <div class="hero-box">
        <h3>Quem decide a próxima ação?</h3>
        <p>Num programa de console, seguimos normalmente uma sequência controlada pelo próprio fluxo. Numa janela, o usuário pode clicar em diferentes controles em momentos diferentes. O programa precisa reagir aos eventos.</p>
      </div>

      <p>Em uma instalação de Python que inclua Tkinter, uma pequena janela pode calcular o valor do estacionamento e responder aos eventos da interface:</p>
      <pre class="command">import tkinter as tk
from tkinter import messagebox

TARIFA_HORA = 8.0

def calcular():
    try:
        horas = float(entrada_horas.get().replace(",", "."))
        if horas <= 0:
            raise ValueError

        total = horas * TARIFA_HORA
        resultado.config(text=f"Total: R$ {total:.2f}")

    except ValueError:
        messagebox.showerror(
            "Dado inválido",
            "Informe um número de horas maior que zero."
        )

janela = tk.Tk()
janela.title("Estacionamento")

rotulo = tk.Label(janela, text="Horas de permanência:")
rotulo.pack(padx=16, pady=(16, 4))

entrada_horas = tk.Entry(janela)
entrada_horas.pack(padx=16, pady=4)

botao = tk.Button(janela, text="Calcular", command=calcular)
botao.pack(padx=16, pady=8)

resultado = tk.Label(janela, text="Total: R$ 0,00")
resultado.pack(padx=16, pady=(4, 16))

janela.mainloop()</pre>

      <div class="concept-box"><strong>O ponto importante não é decorar Tkinter.</strong> O clique no botão é um evento; quando ele ocorre, a função <span class="inline-code">calcular</span> é executada.</div>

      <p>A lógica continua conhecida:</p>
      <div class="flow">SABER → ler o valor do campo
FAZER → validar e calcular
RESPONDER → atualizar a interface ou informar o erro</div>

      <h3>Execução, compilação e distribuição</h3>
      <p>Python normalmente executa o código por meio do interpretador. Quando for necessário entregar uma aplicação de janela como um executável independente, pode-se usar uma ferramenta de empacotamento do ambiente. Uma possibilidade é o PyInstaller:</p>
      <pre class="command">python -m pip install pyinstaller
pyinstaller --onefile --windowed estacionamento.py</pre>
      <p>O resultado é um pacote executável para distribuição. <strong>Empacotar não é a mesma coisa que compilar código Python para código nativo</strong>; por isso fazemos a distinção em vez de usar os termos como se fossem sinônimos.</p>
      <div class="note-box">Esta etapa depende do computador e das permissões do laboratório. Se não houver instalação de pacotes, a aplicação desktop continua válida sendo executada pelo Python.</div>`
  },
  {
    id: 4,
    menu: '4 Paradigmas',
    title: 'Existem outras maneiras de organizar programas',
    objective: 'Reconhecer programação estruturada, orientada a eventos e orientada a objetos a partir de experiências já construídas.',
    content: `
      <div class="hero-box">
        <h3>Paradigmas vistos em situações concretas</h3>
        <p>Paradigmas de programação descrevem maneiras de estruturar e organizar soluções. Depois de observar programas com fluxo sequencial, funções, objetos e eventos, torna-se possível reconhecer essas diferenças de forma concreta.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Programação estruturada</strong><br>Organiza a solução com sequência, decisões, repetições e divisão em funções/procedimentos. É uma base importante para programas organizados em sequência, decisões, repetições e sub-rotinas.</div>
        <div class="mini-card"><strong>Orientada a eventos</strong><br>O programa reage a acontecimentos: clique, digitação, mensagem, sensor, temporizador etc. A janela anterior é um exemplo.</div>
        <div class="mini-card"><strong>Orientada a objetos</strong><br>Organiza software em torno de entidades que reúnem dados e comportamentos relacionados, como Produto, Cliente ou Venda.</div>
        <div class="mini-card"><strong>Sistemas reais</strong><br>Podem combinar ideias de mais de um paradigma. Esses rótulos não são caixas absolutas.</div>
      </div>

      <h3>Uma primeira visão de objeto</h3>
      <p>Na cantina, um <strong>Produto</strong> pode possuir descrição, preço e estoque. Uma <strong>Venda</strong> pode reunir itens, total e forma de pagamento. Em orientação a objetos, a modelagem considera quais dados e comportamentos pertencem a cada entidade e como essas entidades se relacionam.</p>

      <div class="deep-box"><strong>Orientação a objetos possui recursos mais amplos.</strong> Herança, composição, interfaces, arquitetura, persistência e integração com aplicações web, mobile e sistemas distribuídos aparecem em sistemas maiores. Classes e objetos são o ponto de partida para compreender essa forma de organização.</div>`
  },
  {
    id: 5,
    menu: '5 Fechamento',
    title: 'O que realmente deve ficar',
    objective: 'Fechar o componente reforçando transferência de raciocínio, e não memorização de uma linguagem específica.',
    content: `
      <div class="hero-box">
        <h3>Você começou com uma venda simples</h3>
        <p>E terminou capaz de analisar um problema, representar a solução, escolher estruturas, programar em mais de uma linguagem, testar, depurar e reconhecer diferentes formas de organizar um programa.</p>
      </div>

      <div class="flow">problema
↓
Saber → Fazer → Responder
↓
algoritmo
↓
pseudocódigo / fluxograma
↓
programa
↓
dados e memória → bit / Byte
↓
expressões e operadores
↓
decisões
↓
repetições
↓
funções e bibliotecas
↓
VisuAlg → Python
↓
testes e depuração
↓
aplicação em outro problema</div>

      <div class="concept-box"><strong>Programar vai além de dominar a sintaxe de uma linguagem.</strong><br>A competência central é transformar um problema em uma solução programável, escolher estruturas adequadas, testar o comportamento e expressar a solução nas ferramentas apropriadas.</div>

      <div class="task-box">
        <h4>Desafio final</h4>
        <p>Escolha um problema diferente dos exemplos apresentados. Antes de programar, descreva o usuário, a necessidade, o que o sistema precisa Saber, Fazer e Responder. Depois justifique quais estruturas escolheu e teste a solução com casos normais e limites.</p>
      </div>

      <div class="deep-box"><strong>E depois?</strong> O programa pode ganhar interface, dados persistentes, conexão com outros sistemas, sensores, web, mobile e muitas outras camadas. Cada nova camada deve responder a uma necessidade real do problema, como persistir dados, integrar sistemas ou criar novas formas de interação.</div>`
  }
];

const stepGroups = {
  roteiro: roteiroSteps,
  pensar: pensarSteps,
  visualg: visualgSteps,
  python: pythonSteps,
  aprofundar: aprofundarSteps,
  aplicar: aplicarSteps
};

let currentModule = 'roteiro';
let currentIndex = 0;

function stepsFor(moduleName) {
  return stepGroups[moduleName] || [];
}

function renderMenu() {
  const menu = document.getElementById('menu');
  const steps = stepsFor(currentModule);
  menu.innerHTML = '<h3>Etapas</h3>';

  steps.forEach((step, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-btn' + (index === currentIndex ? ' active' : '');
    btn.textContent = step.menu;
    btn.addEventListener('click', () => {
      currentIndex = index;
      renderMenu();
      renderStep();
    });
    menu.appendChild(btn);
  });
}

function renderStep() {
  const steps = stepsFor(currentModule);
  const step = steps[currentIndex];
  if (!step) return;

  document.getElementById('stepTitle').textContent = step.title;
  document.getElementById('objective').textContent = step.objective;
  const lesson = document.getElementById('lesson');

  const prevDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === steps.length - 1;

  lesson.innerHTML = step.content + `
    <div class="lesson-footer">
      <button type="button" id="prevStep" ${prevDisabled ? 'disabled' : ''}>← Anterior</button>
      <button type="button" id="nextStep" ${nextDisabled ? 'disabled' : ''}>Próxima →</button>
    </div>`;

  lesson.scrollTop = 0;

  const prev = document.getElementById('prevStep');
  const next = document.getElementById('nextStep');
  if (prev && !prevDisabled) {
    prev.addEventListener('click', () => {
      currentIndex -= 1;
      renderMenu();
      renderStep();
    });
  }
  if (next && !nextDisabled) {
    next.addEventListener('click', () => {
      currentIndex += 1;
      renderMenu();
      renderStep();
    });
  }
}

function setModule(moduleName) {
  currentModule = moduleName;
  currentIndex = 0;

  document.querySelectorAll('.module-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.module === moduleName);
  });

  renderMenu();
  renderStep();
}

document.querySelectorAll('.module-btn').forEach(btn => {
  btn.addEventListener('click', () => setModule(btn.dataset.module));
});

renderMenu();
renderStep();
