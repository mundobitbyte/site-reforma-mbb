(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'decisoes', arc: '3. Decidir e repetir', number: 6,
      title: 'Compare evidências e tome uma decisão', level: 'Iniciante',
      objective: 'Construir condições booleanas e usar if/else para classificar um atendimento.',
      prereqs: ['Variáveis, tipos, entrada, conversão e operadores'],
      situation: 'O notebook NB-07 atende a uma sala em aula. A equipe precisa decidir se o chamado entra como urgente ou segue a fila comum com base em evidências registradas.',
      need: 'A regra “equipamento parado durante aula” produz uma decisão. Comparações devolvem True ou False; if escolhe o bloco correspondente.',
      steps: [
        {title:'1. Veja a comparação antes da decisão',html:'<p>Teste a condição isolada. <code>==</code> compara; <code>=</code> atribui. Preveja o resultado antes de executar.</p>',code:'em_aula = True\nequipamento_parado = True\n\nurgente = em_aula and equipamento_parado\nprint(urgente)',label:'prioridade.py',output:'True'},
        {title:'2. Escolha um caminho',html:'<p>O bloco recuado pertence à condição. Apenas um dos dois caminhos será executado.</p>',code:'if urgente:\n    prioridade = "alta"\n    print("Acionar suporte imediato")\nelse:\n    prioridade = "normal"\n    print("Registrar na fila")\n\nprint(f"Prioridade: {prioridade}")',label:'Acrescente ao arquivo',output:'Acionar suporte imediato\nPrioridade: alta'},
        {title:'3. Entenda verdade e falsidade',html:'<p>Booleanos explícitos deixam a regra clara. Em condições, valores vazios e zero são falsos; muitos outros valores são verdadeiros. No início, prefira comparações legíveis a depender de conversões implícitas.</p>',code:'descricao = "não liga"\nif descricao != "":\n    print("Há descrição para diagnóstico")',label:'Experimento',output:'Há descrição para diagnóstico'}
      ],
      expected: 'Com as duas evidências True, o sistema aciona suporte imediato e guarda prioridade alta. Altere uma evidência para False e confirme o outro caminho.',
      diagnose: ['SyntaxError após if: confira os dois-pontos.', 'IndentationError: confira o recuo uniforme do bloco.', 'Resultado inesperado: imprima cada comparação separadamente antes de combinar com and.'],
      apply: 'Crie uma regra para empréstimo: liberar somente se o equipamento estiver disponível e o solicitante tiver identificação. Teste as quatro combinações de True/False.',
      next: 'decisoes-multiplas'
    },
    {
      id: 'decisoes-multiplas', arc: '3. Decidir e repetir', number: 7,
      title: 'Organize várias regras sem esconder casos', level: 'Iniciante',
      objective: 'Usar elif, operadores lógicos, validação de faixa e match quando opções discretas justificarem.',
      prereqs: ['Comparações, booleanos e if/else'],
      situation: 'A prioridade agora é digitada como 1, 2 ou 3. Valores fora dessa faixa são dados inválidos, não uma quarta prioridade.',
      need: 'Uma cadeia elif testa de cima para baixo e executa o primeiro bloco verdadeiro. A ordem precisa separar inválido, urgente, importante e comum.',
      steps: [
        {title:'1. Valide antes de classificar',html:'<p>A condição <code>nivel &lt; 1 or nivel &gt; 3</code> detecta valores fora da faixa. Só depois o programa classifica os valores aceitos.</p>',code:'nivel = int(input("Prioridade (1-alta, 2-média, 3-baixa): "))\n\nif nivel < 1 or nivel > 3:\n    print("Prioridade inválida")\nelif nivel == 1:\n    print("Atender imediatamente")\nelif nivel == 2:\n    print("Atender hoje")\nelse:\n    print("Incluir na fila")',label:'prioridade.py',output:'Prioridade (1-alta, 2-média, 3-baixa): 2\nAtender hoje'},
        {title:'2. Simplifique a faixa',html:'<p>Python permite comparações encadeadas. As duas formas abaixo representam a mesma faixa inclusiva.</p>',code:'tempo = 35\nprint(30 <= tempo <= 60)\nprint(tempo >= 30 and tempo <= 60)',label:'Comparação encadeada',output:'True\nTrue'},
        {title:'3. Use match para comandos discretos',html:'<p><code>match</code> é adequado quando uma única opção precisa ser comparada com padrões claros. O caso <code>_</code> recebe o que não foi reconhecido.</p>',code:'acao = input("Ação (abrir, fechar, listar): ").strip().lower()\n\nmatch acao:\n    case "abrir":\n        print("Novo atendimento")\n    case "fechar":\n        print("Concluir atendimento")\n    case "listar":\n        print("Mostrar atendimentos")\n    case _:\n        print("Ação desconhecida")',label:'menu.py',output:'Ação (abrir, fechar, listar): listar\nMostrar atendimentos'}
      ],
      expected: '1, 2 e 3 recebem comportamentos distintos; 0 e 4 são rejeitados. O menu reconhece opções mesmo com espaços e maiúsculas após normalização.',
      diagnose: ['Se uma categoria nunca aparece, verifique se uma condição anterior já captura aquele valor.', 'and exige que as duas condições sejam verdadeiras; or exige pelo menos uma.', 'match exige Python 3.10 ou superior; a base adotada atende esse requisito.'],
      apply: 'Classifique tempo estimado: inválido se negativo; rápido até 15; médio até 60; longo acima disso. Teste -1, 0, 15, 16, 60 e 61.',
      next: 'while'
    },
    {
      id: 'while', arc: '3. Decidir e repetir', number: 8,
      title: 'Repita até receber um dado válido', level: 'Iniciante',
      objective: 'Controlar repetição com while, estado e condição de parada visível.',
      prereqs: ['Entrada, conversão, decisões e operadores lógicos'],
      situation: 'Se alguém digita prioridade 8, encerrar o programa perde o restante do atendimento. O sistema deve explicar o limite e perguntar novamente.',
      need: 'A quantidade de tentativas não é conhecida antecipadamente. while repete enquanto a condição permanecer verdadeira.',
      visual: ['Ler prioridade', 'Validar', 'Repetir ou avançar'],
      steps: [
        {title:'1. Identifique o estado que muda',html:'<p><code>prioridade</code> começa fora da faixa e recebe um novo valor em cada volta. Sem essa atualização, o laço nunca terminaria.</p>',code:'prioridade = 0\n\nwhile prioridade < 1 or prioridade > 3:\n    prioridade = int(input("Prioridade de 1 a 3: "))\n    if prioridade < 1 or prioridade > 3:\n        print("Use somente 1, 2 ou 3.")\n\nprint(f"Prioridade aceita: {prioridade}")',label:'validar.py',output:'Prioridade de 1 a 3: 8\nUse somente 1, 2 ou 3.\nPrioridade de 1 a 3: 2\nPrioridade aceita: 2'},
        {title:'2. Conte tentativas',html:'<p>Um contador começa antes do laço e muda dentro dele. <code>+= 1</code> equivale a atribuir o valor atual mais 1.</p>',code:'tentativas = 0\nsenha = ""\n\nwhile senha != "HORIZONTE" and tentativas < 3:\n    senha = input("Código de laboratório: ").strip().upper()\n    tentativas += 1\n\nif senha == "HORIZONTE":\n    print("Código confirmado")\nelse:\n    print("Limite de tentativas atingido")',label:'Limite explícito',output:'Código de laboratório: horizonte\nCódigo confirmado'},
        {title:'3. Reconheça repetição infinita',html:'<p>Antes de executar um while, responda: qual valor pode tornar a condição falsa e em qual linha ele muda? Se não houver resposta, revise o laço.</p>'}
      ],
      expected: 'O primeiro programa repete apenas até receber 1, 2 ou 3. O segundo termina ao acertar ou após três tentativas.',
      diagnose: ['Se o terminal parece travado, talvez esteja esperando input; leia a última mensagem.', 'Para interromper um laço acidental no terminal, use Ctrl+C e corrija a condição.', 'ValueError ainda pode ocorrer com letras; será tratado sem esconder a causa na aula de exceções.'],
      apply: 'Peça um estado entre “aberto”, “em atendimento” e “concluído”. Normalize a entrada e repita enquanto ela não pertencer às opções. Conte quantas tentativas ocorreram.',
      next: 'for-acumuladores'
    },
    {
      id: 'for-acumuladores', arc: '3. Decidir e repetir', number: 9,
      title: 'Percorra uma sequência e produza um total', level: 'Iniciante',
      objective: 'Usar for, range, contadores e acumuladores sem esconder o processo.',
      prereqs: ['Variáveis, operadores, decisões e while'],
      situation: 'A equipe recebeu cinco medições de tempo de atendimento. Agora a quantidade é conhecida e cada posição precisa ser processada uma vez.',
      need: 'for percorre um iterável. range produz uma sequência de inteiros; o limite final não entra.',
      steps: [
        {title:'1. Observe range antes de acumular',html:'<p><code>range(1, 6)</code> produz 1, 2, 3, 4 e 5. A variável <code>numero</code> recebe um desses valores por volta.</p>',code:'for numero in range(1, 6):\n    print(numero)',label:'repeticoes.py',output:'1\n2\n3\n4\n5'},
        {title:'2. Some valores progressivamente',html:'<p>O acumulador começa em zero e incorpora cada novo tempo. A quantidade de valores fica explícita em range.</p>',code:'total_minutos = 0\n\nfor numero in range(1, 6):\n    tempo = int(input(f"Tempo do atendimento {numero}: "))\n    total_minutos += tempo\n\nmedia = total_minutos / 5\nprint(f"Total: {total_minutos} min")\nprint(f"Média: {media:.1f} min")',label:'Acumulador',output:'Tempo do atendimento 1: 20\nTempo do atendimento 2: 30\nTempo do atendimento 3: 10\nTempo do atendimento 4: 25\nTempo do atendimento 5: 15\nTotal: 100 min\nMédia: 20.0 min'},
        {title:'3. Diferencie contador e acumulador',html:'<p>Contador normalmente soma unidades: quantidade de urgentes. Acumulador soma valores: minutos totais. Ambos mudam durante a repetição, mas respondem a perguntas diferentes.</p>',code:'urgentes = 0\nfor nivel in (1, 2, 1, 3, 1):\n    if nivel == 1:\n        urgentes += 1\nprint(urgentes)',label:'Contador',output:'3'}
      ],
      expected: 'As cinco entradas são somadas e a média corresponde ao total dividido por 5. O contador encontra três prioridades iguais a 1.',
      diagnose: ['Se a primeira ou última posição estiver errada, confira os três argumentos de range.', 'Se o total reinicia a cada volta, o acumulador foi criado dentro do laço.', 'Dividir por quantidade fixa só é correto quando exatamente essa quantidade foi lida. Listas permitirão obter len() depois.'],
      apply: 'Leia sete quantidades de equipamentos atendidos por dia. Mostre total, média e quantos dias tiveram valor zero.',
      next: 'controle-lacos'
    },
    {
      id: 'controle-lacos', arc: '3. Decidir e repetir', number: 10,
      title: 'Interrompa, pule e combine laços com critério', level: 'Iniciante',
      objective: 'Usar break, continue e laços aninhados somente quando o problema exigir.',
      prereqs: ['while, for, range, if, contadores e acumuladores'],
      situation: 'No fechamento do dia, “fim” encerra a digitação; registros vazios devem ser ignorados; salas e computadores formam dois níveis de repetição.',
      need: 'break encerra o laço mais próximo; continue pula o restante da volta atual; um laço dentro de outro representa combinações reais, não apenas dificuldade extra.',
      steps: [
        {title:'1. Pare por uma opção sentinela',html:'<p><code>while True</code> só é aceitável quando o ponto de saída por <code>break</code> está claro e alcançável.</p>',code:'quantidade = 0\nwhile True:\n    patrimonio = input("Patrimônio ou fim: ").strip().upper()\n    if patrimonio == "FIM":\n        break\n    if patrimonio == "":\n        print("Registro vazio ignorado")\n        continue\n    quantidade += 1\n    print(f"Registrado: {patrimonio}")\n\nprint(f"Total registrado: {quantidade}")',label:'fechamento.py',output:'Patrimônio ou fim: NB-07\nRegistrado: NB-07\nPatrimônio ou fim: \nRegistro vazio ignorado\nPatrimônio ou fim: fim\nTotal registrado: 1'},
        {title:'2. Modele dois níveis',html:'<p>O laço externo escolhe a sala; o interno percorre os computadores daquela sala. A saída mostra todas as combinações.</p>',code:'for sala in range(1, 3):\n    for computador in range(1, 4):\n        print(f"Sala {sala} — PC {computador}")',label:'Laços aninhados',output:'Sala 1 — PC 1\nSala 1 — PC 2\nSala 1 — PC 3\nSala 2 — PC 1\nSala 2 — PC 2\nSala 2 — PC 3'},
        {title:'3. Revise o limite',html:'<p>Se houver 20 salas e 30 equipamentos, o bloco interno pode executar 600 vezes. Antes de aninhar, estime o total de combinações e confira se isso representa o problema.</p>'}
      ],
      expected: 'fim encerra, entrada vazia não aumenta o contador e um patrimônio válido é registrado. O laço aninhado gera 2 × 3 combinações.',
      diagnose: ['break não encerra todos os laços aninhados; apenas o mais próximo.', 'continue executado antes da atualização pode causar laço infinito em while.', 'Se o trabalho cresce multiplicando tamanhos, avalie o custo antes de executar.'],
      apply: 'Crie um menu repetitivo com ações abrir, listar e sair. Entrada vazia deve ser ignorada, opção desconhecida deve ser explicada e sair deve encerrar.',
      next: 'listas'
    }
  );
})();
