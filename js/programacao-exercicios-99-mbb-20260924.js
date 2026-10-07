(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined' || typeof visualgSteps === 'undefined' ||
      typeof aplicarSteps === 'undefined' || typeof aprofundarSteps === 'undefined') {
    return;
  }

  const introducao = (parte) => `
    <div class="hero-box">
      <span class="part-badge">99. Exercícios</span>
      <h3>Consolide ${parte} antes de avançar</h3>
      <p>Resolva primeiro sem abrir as respostas. A sequência começa com reconhecimento, passa pela aplicação e termina com situações em que você precisa combinar ideias e decidir o caminho sozinho.</p>
    </div>
    <div class="note-box"><strong>Modo MbB:</strong> entender → experimentar → resolver → conferir → explicar. Se errar, descubra em qual passo seu raciocínio mudou antes de tentar novamente.</div>`;

  const pensar99 = {
    id: 99,
    menu: '99. Exercícios',
    title: 'Exercícios — Pensar antes de programar',
    objective: 'Consolidar análise de problemas, raciocínio lógico, algoritmos, fluxogramas e teste de mesa antes da programação.',
    content: introducao('o raciocínio') + `
      <h3>Nível 1 — Reconhecer</h3>

      <div class="task-box">
        <h4>1. SABER, FAZER e RESPONDER</h4>
        <p>Uma escola quer informar se um aluno foi aprovado. A média mínima é 6. Classifique cada item como <strong>SABER</strong>, <strong>FAZER</strong> ou <strong>RESPONDER</strong>:</p>
        <ol><li>nota do aluno;</li><li>comparar a nota com 6;</li><li>mostrar “Aprovado” ou “Recuperação”.</li></ol>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>1 = SABER/entrada; 2 = FAZER/processamento; 3 = RESPONDER/saída.</p></div></details>
      </div>

      <div class="task-box">
        <h4>2. Quando a regra usa E</h4>
        <p>Um empréstimo só é permitido quando o livro está disponível <strong>E</strong> o aluno não possui pendências. Complete mentalmente os quatro casos possíveis.</p>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>Disponível + sem pendência = SIM. Disponível + com pendência = NÃO. Indisponível + sem pendência = NÃO. Indisponível + com pendência = NÃO.</p></div></details>
      </div>

      <div class="task-box">
        <h4>3. Sequência, decisão ou repetição?</h4>
        <p>Classifique cada situação:</p>
        <ol>
          <li>ler dois preços, somá-los e mostrar o total;</li>
          <li>se a idade for pelo menos 18, permitir o cadastro; caso contrário, negar;</li>
          <li>enquanto houver senhas na fila, chamar a próxima.</li>
        </ol>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>1 = sequência; 2 = decisão; 3 = repetição.</p></div></details>
      </div>

      <h3>Nível 2 — Aplicar</h3>

      <div class="task-box">
        <h4>4. Decomponha o problema</h4>
        <p>Um estacionamento precisa registrar a placa, calcular o tempo de permanência, calcular o valor a pagar e liberar a saída somente depois do pagamento.</p>
        <p>Divida a solução em partes menores e indique onde existe uma decisão.</p>
        <details class="answer-box"><summary>Ver uma possível decomposição</summary><div class="answer-content"><ol><li>Identificar o veículo.</li><li>Obter entrada e saída.</li><li>Calcular permanência.</li><li>Calcular valor.</li><li>Verificar pagamento.</li><li>Se pago, liberar; caso contrário, manter a saída bloqueada.</li></ol><p>A decisão está na verificação do pagamento.</p></div></details>
      </div>

      <div class="task-box">
        <h4>5. Escreva um algoritmo antes da sintaxe</h4>
        <p>Um serviço de entrega cobra R$ 8 de taxa fixa mais R$ 2 por quilômetro. Escreva uma sequência de passos, em linguagem comum, para receber a distância e informar o valor final.</p>
        <details class="answer-box"><summary>Conferir raciocínio</summary><div class="answer-content"><ol><li>Receber a distância.</li><li>Multiplicar a distância por 2.</li><li>Somar 8.</li><li>Mostrar o valor final.</li></ol></div></details>
      </div>

      <div class="task-box">
        <h4>6. Escolha o símbolo do fluxograma</h4>
        <p>Associe cada ação ao símbolo adequado: <strong>início/fim</strong>, <strong>entrada/saída</strong>, <strong>processamento</strong> ou <strong>decisão</strong>.</p>
        <ol><li>Ler idade.</li><li>Calcular média.</li><li>Média ≥ 6?</li><li>Mostrar situação.</li><li>Encerrar.</li></ol>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>1 = entrada/saída; 2 = processamento; 3 = decisão; 4 = entrada/saída; 5 = início/fim (terminal).</p></div></details>
      </div>

      <h3>Nível 3 — Integrar</h3>

      <div class="task-box">
        <h4>7. Leia um fluxo sem desenhar</h4>
        <p>Considere o fluxo: INÍCIO → ler valor da compra → valor ≥ 100? → SIM: aplicar 10% de desconto → NÃO: manter valor → mostrar total → FIM.</p>
        <p>O que acontece para uma compra de R$ 80? E para uma compra de R$ 200?</p>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>R$ 80 segue pelo ramo NÃO e permanece R$ 80. R$ 200 segue pelo ramo SIM e, com desconto de 10%, resulta em R$ 180.</p></div></details>
      </div>

      <div class="task-box">
        <h4>8. Repetição completa</h4>
        <p>Um caixa atende clientes enquanto houver pessoas na fila. Depois de cada atendimento, o sistema pergunta novamente se ainda há alguém esperando.</p>
        <p>Identifique: a condição de continuidade, o que se repete e o que encerra o processo.</p>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p><strong>Continuidade:</strong> ainda há pessoas na fila. <strong>Repetição:</strong> realizar o atendimento e voltar à verificação. <strong>Término:</strong> a fila ficar vazia.</p></div></details>
      </div>

      <div class="task-box">
        <h4>9. Teste de mesa</h4>
        <p>Comece com <code>pontos = 10</code>. Execute mentalmente:</p>
        <ol><li><code>pontos ← pontos + 5</code></li><li><code>pontos ← pontos * 2</code></li><li><code>pontos ← pontos - 4</code></li></ol>
        <p>Registre o valor depois de cada linha.</p>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>15 → 30 → 26.</p></div></details>
      </div>

      <h3>Nível 4 — Transferir</h3>

      <div class="task-box">
        <h4>10. Da necessidade ao pseudocódigo</h4>
        <p>Uma clínica atende pacientes comuns e prioritários. Enquanto houver pacientes, chama o próximo. Se for prioritário, encaminha para a fila prioritária; caso contrário, para a fila comum. Quando ninguém mais estiver esperando, encerra.</p>
        <p>Escreva o algoritmo em pseudocódigo usando palavras como <strong>enquanto</strong>, <strong>se</strong>, <strong>senão</strong> e <strong>fim</strong>. Não se preocupe ainda com a sintaxe de uma linguagem específica.</p>
        <details class="answer-box"><summary>Critérios de conferência</summary><div class="answer-content"><p>A solução precisa ter uma condição de repetição, uma decisão com dois caminhos, retorno à verificação da fila e término quando não houver pacientes.</p></div></details>
      </div>

      <div class="task-box">
        <h4>11. Construa o fluxograma</h4>
        <p>Desenhe o fluxo de um sistema que lê uma nota, verifica se ela é maior ou igual a 6 e mostra “Aprovado” ou “Recuperação”. Use início/fim, entrada/saída e decisão.</p>
        <details class="answer-box"><summary>Critérios de conferência</summary><div class="answer-content"><p>O diagrama deve ter INÍCIO → leitura da nota → decisão nota ≥ 6? → dois ramos identificados → mensagem correspondente → FIM.</p></div></details>
      </div>

      <div class="task-box">
        <h4>12. Conceito ou ferramenta?</h4>
        <p>Explique com suas palavras a diferença entre <strong>algoritmo</strong>, <strong>linguagem de programação</strong>, <strong>código-fonte</strong> e <strong>ambiente de desenvolvimento</strong>.</p>
        <details class="answer-box"><summary>Conferir ideia central</summary><div class="answer-content"><p>Algoritmo é a solução organizada em passos; linguagem é a forma formal de escrever instruções; código-fonte é o programa escrito nessa linguagem; ambiente de desenvolvimento reúne ferramentas usadas para criar, executar e depurar o código.</p></div></details>
      </div>`
  };

  const programar99 = {
    id: 99,
    menu: '99. Exercícios',
    title: 'Exercícios — Programar',
    objective: 'Consolidar dados, processamento, decisões, repetições, funções e integração em programas pequenos.',
    content: introducao('a programação') + `
      <h3>Nível 1 — Reconhecer</h3>

      <div class="task-box"><h4>1. Variável ou constante?</h4><p>Em um sistema de vendas, classifique: preço atual de um produto, quantidade comprada e taxa fixa de entrega definida em R$ 8 durante toda a execução.</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>Preço e quantidade podem variar: variáveis. A taxa fixa, se não muda durante a execução: constante.</p></div></details></div>

      <div class="task-box"><h4>2. Tipo de dado</h4><p>Escolha um tipo adequado para: nome do cliente, quantidade de itens, preço de um produto e situação “pagamento confirmado”.</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>Nome = caractere/texto; quantidade = inteiro; preço = real; pagamento confirmado = lógico.</p></div></details></div>

      <div class="task-box"><h4>3. Atribuição</h4><p>Se <code>preco = 12</code> e <code>quantidade = 3</code>, qual valor deve ficar em <code>total</code> depois de <code>total ← preco * quantidade</code>?</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>36.</p></div></details></div>

      <h3>Nível 2 — Aplicar</h3>

      <div class="task-box"><h4>4. Decisão simples</h4><p>Escreva em VisuAlg a condição que verifica se uma pessoa com variável <code>idade</code> pode entrar em uma atividade permitida a partir de 18 anos.</p><details class="answer-box"><summary>Conferir estrutura</summary><div class="answer-content"><pre><code>se idade &gt;= 18 entao
   escreval("Entrada permitida")
senao
   escreval("Entrada não permitida")
fimse</code></pre></div></details></div>

      <div class="task-box"><h4>5. Duas condições</h4><p>Uma compra só recebe frete grátis quando <code>total &gt;= 150</code> <strong>e</strong> o cliente é membro. Escreva a condição lógica.</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p><code>(total &gt;= 150) e membro</code>. As duas condições precisam ser verdadeiras.</p></div></details></div>

      <div class="task-box"><h4>6. Escolha/Caso</h4><p>Um menu possui 1 = consultar saldo, 2 = depositar, 3 = sair. Organize os três caminhos usando <code>escolha</code>/<code>caso</code>.</p><details class="answer-box"><summary>Conferir estrutura</summary><div class="answer-content"><p>A solução deve selecionar a variável da opção, possuir um caso para 1, outro para 2 e outro para 3, além de tratamento para opção inválida se desejar.</p></div></details></div>

      <h3>Nível 3 — Repetir e modularizar</h3>

      <div class="task-box"><h4>7. Para</h4><p>Escreva uma repetição que mostre os números de 1 a 5.</p><details class="answer-box"><summary>Conferir estrutura</summary><div class="answer-content"><pre><code>para i de 1 ate 5 faca
   escreval(i)
fimpara</code></pre></div></details></div>

      <div class="task-box"><h4>8. Enquanto e condição de parada</h4><p>Um programa deve continuar lendo senhas enquanto a senha digitada for diferente de 0. Qual é a condição de continuidade e qual valor encerra a repetição?</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>Continua enquanto <code>senha &lt;&gt; 0</code>. O valor 0 encerra.</p></div></details></div>

      <div class="task-box"><h4>9. Contador e acumulador</h4><p>Durante cinco vendas, o programa precisa informar quantas vendas ocorreram e quanto foi vendido no total. Qual variável funciona como contador e qual funciona como acumulador? Como cada uma é atualizada?</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>Ex.: <code>quantidadeVendas ← quantidadeVendas + 1</code> é contador; <code>totalVendido ← totalVendido + valorVenda</code> é acumulador.</p></div></details></div>

      <div class="task-box"><h4>10. Função</h4><p>Crie a ideia de uma função <code>calcularMedia(n1, n2)</code> que devolva a média de duas notas. Qual é a entrada e qual é o retorno?</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>Entradas/parâmetros: n1 e n2. Retorno: <code>(n1 + n2) / 2</code>.</p></div></details></div>

      <h3>Nível 4 — Integrar e transferir</h3>

      <div class="task-box"><h4>11. Mini sistema de estacionamento</h4><p>Construa um programa que leia a placa e o número de horas estacionadas. Cada hora custa R$ 5. Se o total ultrapassar R$ 30, aplique limite máximo de R$ 30. Ao final, mostre placa e valor.</p><details class="answer-box"><summary>Critérios de conferência</summary><div class="answer-content"><p>O programa precisa: ler dados, calcular <code>horas * 5</code>, decidir se ultrapassou 30, ajustar o valor quando necessário e mostrar a resposta. Teste pelo menos 2 horas e 8 horas.</p></div></details></div>

      <div class="task-box"><h4>12. A linguagem muda, a lógica permanece</h4><p>Observe a ideia <em>“se idade ≥ 18, mostrar Adulto; senão, mostrar Menor”</em>. Explique o que permaneceria igual se o programa fosse reescrito em Python, JavaScript ou Java, mesmo que a sintaxe mudasse.</p><details class="answer-box"><summary>Conferir ideia central</summary><div class="answer-content"><p>Permanecem os dados, a condição, os dois caminhos e o resultado esperado. Mudam as palavras, símbolos e regras sintáticas usadas para expressar essa lógica.</p></div></details></div>`
  };

  const aplicar99 = {
    id: 99,
    menu: '99. Exercícios',
    title: 'Exercícios — Aplicar e provar que aprendeu',
    objective: 'Transferir o raciocínio para problemas novos, definir testes e explicar soluções sem depender do exemplo original.',
    content: introducao('a aplicação') + `
      <h3>Nível 1 — Analisar</h3>

      <div class="task-box"><h4>1. Cinema</h4><p>Um cinema precisa vender ingressos, aplicar meia-entrada quando houver direito e informar o valor final. Antes de programar, escreva: entradas, processamento, decisão e saída.</p><details class="answer-box"><summary>Conferir raciocínio</summary><div class="answer-content"><p>Entradas podem incluir preço e direito à meia. Processamento calcula o valor. A decisão verifica o direito ao desconto. A saída informa o preço final.</p></div></details></div>

      <div class="task-box"><h4>2. Requisitos que faltam</h4><p>Alguém pediu: “faça um programa que calcule a entrega”. Liste pelo menos quatro perguntas que precisam ser respondidas antes de programar.</p><details class="answer-box"><summary>Ver exemplos</summary><div class="answer-content"><p>Ex.: quais dados entram? Como o preço é calculado? Existe taxa mínima? Há distância máxima? Como tratar distância inválida? O que precisa ser mostrado?</p></div></details></div>

      <h3>Nível 2 — Testar</h3>

      <div class="task-box"><h4>3. Quatro tipos de teste</h4><p>Um sistema aceita idade entre 0 e 120. Crie um caso <strong>normal</strong>, um de <strong>fronteira</strong>, um <strong>inválido</strong> e um de <strong>ausência</strong>.</p><details class="answer-box"><summary>Conferir exemplos</summary><div class="answer-content"><p>Normal: 35. Fronteira: 0 ou 120. Inválido: -1 ou 121. Ausência: nenhum valor informado. Outros exemplos equivalentes também são válidos.</p></div></details></div>

      <div class="task-box"><h4>4. Previsto x obtido</h4><p>Um programa deveria cobrar R$ 20 para quatro horas a R$ 5/h, mas mostrou R$ 25. Antes de alterar o código, escreva o resultado esperado, o resultado obtido e uma hipótese simples para investigar.</p><details class="answer-box"><summary>Conferir raciocínio</summary><div class="answer-content"><p>Esperado = 20; obtido = 25. Uma hipótese possível é que o programa esteja somando uma hora extra ou usando valor inicial diferente de zero. A hipótese precisa ser testada, não apenas aceita.</p></div></details></div>

      <h3>Nível 3 — Explicar</h3>

      <div class="task-box"><h4>5. Explique sem mostrar o código</h4><p>Escolha um programa que você já construiu e explique para outra pessoa: o que ele recebe, o que calcula, quais decisões toma, quando repete e o que entrega como resposta.</p><details class="answer-box"><summary>Critério de sucesso</summary><div class="answer-content"><p>Uma pessoa que não viu seu código deve conseguir descrever o comportamento do programa e indicar pelo menos um teste adequado.</p></div></details></div>

      <h3>Nível 4 — Transferir</h3>

      <div class="task-box"><h4>6. Projeto curto — pedido de lanchonete</h4><p>Projete um programa novo que receba quantidade e preço de itens, calcule o total, aplique 5% de desconto quando o total for pelo menos R$ 80 e permita registrar vários pedidos até o operador escolher encerrar.</p><p>Faça primeiro o algoritmo, depois implemente e teste.</p><details class="answer-box"><summary>Critérios de conferência</summary><div class="answer-content"><p>A solução deve combinar entrada, cálculo, decisão, repetição e saída. Teste pelo menos: total abaixo de 80, exatamente 80, acima de 80 e encerramento da repetição.</p></div></details></div>

      <div class="task-box"><h4>7. Autonomia</h4><p>Depois de concluir o exercício anterior, modifique uma regra sem copiar uma solução pronta: troque o percentual de desconto ou acrescente uma taxa para pedidos pequenos. Antes de editar, escreva quais partes da solução serão afetadas.</p><details class="answer-box"><summary>Critério de sucesso</summary><div class="answer-content"><p>Você deve conseguir prever a região da lógica que muda, fazer a alteração e repetir os testes afetados sem reconstruir o programa inteiro.</p></div></details></div>`
  };

  const aprofundar99 = {
    id: 99,
    menu: '99. Exercícios',
    title: 'Exercícios — Aprofundar',
    objective: 'Praticar conceitos profissionais opcionais de organização, depuração, estruturas, qualidade, versionamento e eficiência.',
    content: introducao('o aprofundamento') + `
      <div class="note-box"><strong>Esta lista também é opcional.</strong> Resolva os exercícios correspondentes aos tópicos que você estudou. Não é necessário concluir toda a lista para seguir para outro módulo.</div>

      <h3>Nível 1 — Organizar ferramentas e dados</h3>

      <div class="task-box"><h4>1. IDE e projeto</h4><p>Explique a diferença entre o arquivo de código-fonte e o projeto que o contém. Depois cite duas tarefas que uma IDE pode facilitar além de simplesmente digitar texto.</p><details class="answer-box"><summary>Conferir ideia central</summary><div class="answer-content"><p>O arquivo contém código; o projeto organiza arquivos, configurações e dependências relacionadas. Uma IDE pode, por exemplo, executar, depurar, navegar entre arquivos, sugerir código e integrar ferramentas de build.</p></div></details></div>

      <div class="task-box"><h4>2. Estrutura de dados adequada</h4><p>Escolha uma estrutura para cada caso e justifique: a) notas de 30 alunos; b) tabela de temperaturas por 7 dias e 24 horas; c) cadastro em que cada pessoa possui nome e telefone.</p><details class="answer-box"><summary>Conferir possibilidades</summary><div class="answer-content"><p>a) vetor/lista; b) matriz ou estrutura equivalente em duas dimensões; c) registro/objeto/dicionário, dependendo da linguagem. A justificativa é mais importante que o nome isolado.</p></div></details></div>

      <h3>Nível 2 — Prever falhas e investigar</h3>

      <div class="task-box"><h4>3. Validação ou exceção?</h4><p>Classifique: a) usuário informa idade -5; b) programa tenta abrir um arquivo que não existe; c) usuário deixa um campo obrigatório vazio.</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>a) validação; b) situação típica para tratamento de exceção/erro de E/S; c) validação. Exceção não substitui regras de negócio que podem ser verificadas diretamente.</p></div></details></div>

      <div class="task-box"><h4>4. Depuração</h4><p>Um programa calcula média errada. Organize um plano usando breakpoint, execução passo a passo e inspeção de variáveis.</p><details class="answer-box"><summary>Conferir raciocínio</summary><div class="answer-content"><p>Uma sequência possível: definir breakpoint antes do cálculo → executar até ele → observar os valores de entrada → avançar linha a linha → verificar quando o valor deixa de corresponder ao esperado → formular e testar uma hipótese.</p></div></details></div>

      <h3>Nível 3 — Reutilizar e modelar</h3>

      <div class="task-box"><h4>5. Módulo, pacote ou framework?</h4><p>Explique a diferença geral entre um módulo reutilizável, um pacote de módulos e um framework que organiza o fluxo da aplicação.</p><details class="answer-box"><summary>Conferir ideia central</summary><div class="answer-content"><p>Módulo reúne código reutilizável em uma unidade; pacote organiza vários módulos relacionados; framework oferece uma estrutura maior e convenções que orientam como a aplicação é construída.</p></div></details></div>

      <div class="task-box"><h4>6. Classe e objeto</h4><p>Um sistema manipula muitos produtos, cada um com código, descrição e preço. Proponha uma classe <code>Produto</code> e dê exemplo de dois objetos diferentes.</p><details class="answer-box"><summary>Conferir estrutura</summary><div class="answer-content"><p>A classe define características comuns como código, descrição e preço. Cada objeto possui seus próprios valores, por exemplo Produto(1, “Água”, 3.50) e Produto(2, “Suco”, 6.00).</p></div></details></div>

      <h3>Nível 4 — Qualidade e evolução</h3>

      <div class="task-box"><h4>7. Legibilidade</h4><p>Compare os nomes <code>x</code>, <code>q</code>, <code>t</code> com <code>precoProduto</code>, <code>quantidadeItens</code> e <code>totalCompra</code>. Em que situação nomes curtos deixam de ajudar?</p><details class="answer-box"><summary>Conferir ideia central</summary><div class="answer-content"><p>Quando o nome não revela o papel do dado e obriga quem lê a descobrir seu significado pelo contexto. Nomes claros reduzem esforço de leitura e manutenção.</p></div></details></div>

      <div class="task-box"><h4>8. Teste unitário</h4><p>Uma função <code>calcularDesconto(total)</code> concede 10% quando o total é pelo menos 100. Defina três testes importantes.</p><details class="answer-box"><summary>Conferir exemplos</summary><div class="answer-content"><p>Ex.: 99,99 → sem desconto; 100 → desconto; 150 → desconto. O valor de fronteira 100 é indispensável.</p></div></details></div>

      <div class="task-box"><h4>9. Versionamento</h4><p>Você fará uma alteração experimental que pode dar errado. Explique por que registrar o estado atual antes da mudança e trabalhar de forma isolada reduz risco.</p><details class="answer-box"><summary>Conferir ideia central</summary><div class="answer-content"><p>O histórico permite retornar a um estado conhecido e comparar mudanças; o isolamento evita misturar uma experiência incompleta com uma versão estável.</p></div></details></div>

      <h3>Nível 5 — Outros modelos de programação</h3>

      <div class="task-box"><h4>10. Evento e interface</h4><p>Em uma tela existe um botão “Salvar”. Identifique o evento e descreva o que um manipulador desse evento poderia fazer.</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>O evento pode ser o clique/toque no botão. O manipulador recebe esse acontecimento e executa ações como validar campos, salvar dados e mostrar confirmação.</p></div></details></div>

      <div class="task-box"><h4>11. Paradigmas</h4><p>Associe a ideia principal: a) sequência de comandos e estruturas de controle; b) objetos que reúnem dados e comportamentos; c) reação a cliques, mensagens ou outros acontecimentos.</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>a) programação estruturada/procedural; b) orientação a objetos; c) programação orientada a eventos.</p></div></details></div>

      <h3>Nível 6 — Eficiência</h3>

      <div class="task-box"><h4>12. Duas soluções corretas</h4><p>Para procurar um RA em uma lista pequena, uma solução percorre os itens até encontrar o valor. Outra verifica sempre todos os itens mesmo depois de encontrar. As duas podem produzir a mesma resposta. Qual delas realiza trabalho desnecessário e por quê?</p><details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><p>A segunda continua trabalhando depois que a resposta já foi encontrada. A primeira pode encerrar a busca naquele momento. Eficiência começa por perceber trabalho que não contribui mais para o resultado.</p></div></details></div>

      <div class="task-box"><h4>13. Integração profissional</h4><p>Escolha um programa seu e proponha uma melhoria que envolva pelo menos dois destes tópicos: estrutura de dados, tratamento de erros, depuração, classe/objeto, testes, versionamento ou eficiência. Explique por que a melhoria é necessária antes de implementá-la.</p><details class="answer-box"><summary>Critério de sucesso</summary><div class="answer-content"><p>A proposta deve partir de uma necessidade observável no programa, indicar quais conceitos serão usados e definir como você verificará que a mudança realmente melhorou a solução.</p></div></details></div>`
  };

  function adicionarOuSubstituir(lista, etapa) {
    for (let i = lista.length - 1; i >= 0; i -= 1) {
      if (lista[i].id === 99 || /^99\.?\s*Exercícios/i.test(lista[i].menu || '')) {
        lista.splice(i, 1);
      }
    }
    lista.push(etapa);
  }

  adicionarOuSubstituir(pensarSteps, pensar99);
  adicionarOuSubstituir(visualgSteps, programar99);
  adicionarOuSubstituir(aplicarSteps, aplicar99);
  adicionarOuSubstituir(aprofundarSteps, aprofundar99);

  if (typeof stepGroups !== 'undefined') {
    stepGroups.pensar = pensarSteps;
    stepGroups.visualg = visualgSteps;
    stepGroups.aplicar = aplicarSteps;
    stepGroups.aprofundar = aprofundarSteps;
  }

  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
