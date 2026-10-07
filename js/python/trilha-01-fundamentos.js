(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'ambiente', arc: '1. Preparar e executar', number: 1,
      title: 'Prepare Python e o VS Code', level: 'Iniciante',
      objective: 'Instalar as ferramentas oficiais, identificar o interpretador e deixar uma pasta de trabalho pronta.',
      prereqs: ['Saber criar uma pasta no computador'],
      situation: 'A Escola Horizonte decidiu substituir anotações soltas por pequenos programas. Antes de escrever código, o laboratório precisa de um interpretador Python conhecido e de um editor que permita crescer para vários arquivos, testes e Git.',
      need: 'Editor e interpretador têm funções diferentes: o VS Code ajuda a escrever e organizar; Python lê e executa o arquivo. Instalar apenas um deles não conclui o ambiente.',
      visual: ['Arquivo .py', 'Interpretador Python', 'Programa em execução'],
      steps: [
        {
          title: '1. Instale o Python estável',
          html: '<p>Acesse a página oficial, escolha a versão estável adequada ao seu sistema e conclua a instalação. A base verificada deste material é <strong>Python 3.14.7</strong>. Não escolha alpha, beta ou release candidate.</p><p>No Windows, o comando disponível pode ser <code>py</code> ou <code>python</code>. Os exemplos mostram os dois quando necessário; use o que funcionar no seu computador.</p><p><a href="https://www.python.org/downloads/" target="_blank" rel="noopener">Abrir downloads oficiais do Python</a></p>'
        },
        {
          title: '2. Confirme no terminal',
          html: '<p>Abra o Terminal do Windows ou o terminal integrado do VS Code. Digite um comando por vez. Você precisa ver uma versão 3.x, não uma mensagem de comando desconhecido.</p>',
          code: 'py --version\n# Se o comando acima não existir, tente:\npython --version',
          label: 'Terminal',
          output: 'Python 3.14.7'
        },
        {
          title: '3. Instale o VS Code e a extensão correta',
          html: '<ol><li>Instale o VS Code pelo site oficial.</li><li>Abra <strong>Extensões</strong>.</li><li>Pesquise <strong>Python</strong>.</li><li>Confirme que a publicadora é <strong>Microsoft</strong>.</li><li>Instale a extensão.</li></ol><p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VS Code oficial</a> · <a href="https://marketplace.visualstudio.com/items?itemName=ms-python.python" target="_blank" rel="noopener">Extensão Python</a></p>'
        },
        {
          title: '4. Crie a pasta controlada',
          html: '<p>Crie uma pasta chamada <code>python-horizonte</code> em um local que você encontre depois. No VS Code, use <strong>Arquivo → Abrir Pasta</strong> e escolha essa pasta. Todos os primeiros arquivos ficarão nela.</p>'
        },
        {
          title: '5. Selecione o interpretador',
          html: '<p>Abra a Paleta de Comandos com <code>Ctrl+Shift+P</code>, procure <strong>Python: Select Interpreter</strong> e escolha a instalação estável que você confirmou. Essa seleção informa qual Python será usado para executar, depurar e analisar o código.</p>'
        }
      ],
      expected: 'Python responde com sua versão; o VS Code abre a pasta python-horizonte; a extensão Python está instalada; um interpretador 3.x está selecionado.',
      diagnose: ['Se py e python não forem reconhecidos, reinicie o terminal e confira a instalação oficial.', 'Se houver várias versões, compare o caminho mostrado pelo VS Code com o interpretador selecionado.', 'Se o laboratório não permitir instalação, use a alternativa definida pelo professor; não baixe executáveis de sites aleatórios.'],
      apply: 'Registre em um arquivo de texto: sistema operacional, comando que funcionou, versão exibida e caminho da pasta. Esse registro será a primeira evidência técnica do projeto.',
      next: 'primeiro-programa'
    },
    {
      id: 'primeiro-programa', arc: '1. Preparar e executar', number: 2,
      title: 'Crie, execute e leia o primeiro erro', level: 'Iniciante',
      objective: 'Criar um arquivo .py, executar pelo VS Code e pelo terminal e usar uma mensagem de erro como evidência.',
      prereqs: ['Ambiente preparado e pasta python-horizonte aberta'],
      situation: 'A coordenação quer uma mensagem que identifique o sistema antes que o primeiro atendimento seja registrado. O arquivo precisa ficar salvo e reproduzir a mesma saída sempre que for executado.',
      need: 'Digitar no terminal não cria o programa. O registro reproduzível será escrito em um arquivo de texto com extensão .py e executado pelo interpretador.',
      visual: ['Editor salva central.py', 'Python lê de cima para baixo', 'Terminal mostra a saída'],
      steps: [
        {
          title: '1. Crie o arquivo',
          html: '<p>No painel de arquivos do VS Code, crie <code>central.py</code>. A extensão <code>.py</code> identifica um arquivo-fonte Python. Digite — não apenas leia — as duas linhas:</p>',
          code: '# Identifica o sistema no terminal\nprint("Central de Atendimentos — Escola Horizonte")\nprint("Sistema iniciado")',
          label: 'central.py',
          output: 'Central de Atendimentos — Escola Horizonte\nSistema iniciado'
        },
        {
          title: '2. Execute de duas formas',
          html: '<p>Salve o arquivo. Primeiro use o botão de execução da extensão Python. Depois abra <strong>Terminal → Novo Terminal</strong> e execute um dos comandos abaixo. O terminal deve estar na pasta que contém <code>central.py</code>.</p>',
          code: 'py central.py\n# Em sistemas que usam python:\npython central.py',
          label: 'Terminal'
        },
        {
          title: '3. Faça uma previsão e produza um erro controlado',
          html: '<p>Antes de executar, remova a última aspa da segunda mensagem. Preveja: Python executará a primeira linha e parará na segunda, ou rejeitará o arquivo antes? Execute e observe o nome do arquivo, a linha indicada e o tipo <code>SyntaxError</code>. Depois recoloque a aspa e reteste.</p>'
        }
      ],
      expected: 'Com o código correto, aparecem exatamente duas linhas. Com a aspa ausente, Python informa SyntaxError e não inicia normalmente a execução do arquivo.',
      diagnose: ['No such file or directory: o terminal não está na pasta do arquivo ou o nome foi digitado diferente.', 'Comando não reconhecido: volte à confirmação da instalação.', 'SyntaxError: localize arquivo/linha, leia a indicação e compare aspas/parênteses com o código esperado.'],
      apply: 'Troque apenas o texto da primeira mensagem pelo nome de uma pequena organização fictícia. Preserve o comentário com uma finalidade real.',
      next: 'valores-variaveis'
    },
    {
      id: 'valores-variaveis', arc: '2. Registrar um atendimento', number: 3,
      title: 'Valores, nomes e tipos', level: 'Iniciante',
      objective: 'Representar os dados de um atendimento com nomes claros e reconhecer os tipos básicos usados.',
      prereqs: ['Criar, salvar e executar um arquivo', 'print() e texto entre aspas'],
      situation: 'A primeira solicitação chegou: a professora Ana informou que o notebook NB-07 não liga. A prioridade inicial é alta e o atendimento ainda não foi concluído.',
      need: 'Repetir esses dados diretamente em cada print torna a correção arriscada. Um nome permite representar e reutilizar cada valor.',
      visual: ['nome prioridade', 'referencia o valor', '"alta"'],
      steps: [
        {
          title: '1. Associe nomes aos valores',
          html: '<p>O sinal <code>=</code> é atribuição: o nome à esquerda passa a referenciar o valor produzido à direita. Não significa “é igual” como numa equação matemática.</p>',
          code: 'solicitante = "Ana"\nequipamento = "NB-07"\ndescricao = "não liga"\nprioridade = "alta"\nconcluido = False\ntentativas = 0\n\nprint(solicitante, equipamento, descricao)\nprint(prioridade, concluido, tentativas)',
          label: 'central.py',
          output: 'Ana NB-07 não liga\nalta False 0'
        },
        {
          title: '2. Reconheça o tipo pelo valor',
          html: '<ul><li><code>str</code>: texto, entre aspas.</li><li><code>int</code>: inteiro, sem aspas.</li><li><code>float</code>: número com parte fracionária escrita com ponto.</li><li><code>bool</code>: <code>True</code> ou <code>False</code>.</li><li><code>None</code>: ausência de um valor, quando isso for intencional.</li></ul><p>Python associa tipos aos objetos em tempo de execução; o nome pode depois referenciar outro valor, mas trocar tipos sem necessidade prejudica a clareza.</p>',
          code: 'print(type(equipamento))\nprint(type(tentativas))\nprint(type(concluido))',
          label: 'Inspeção',
          output: "<class 'str'>\n<class 'int'>\n<class 'bool'>"
        },
        {
          title: '3. Use nomes que registrem intenção',
          html: '<p>Nomes podem usar letras, números e sublinhado, mas não começar com número. Python diferencia maiúsculas de minúsculas. Prefira <code>tempo_minutos</code> a <code>tm</code> e não reutilize nomes de funções como <code>list</code> ou <code>str</code>.</p>'
        }
      ],
      expected: 'Os dados aparecem em duas linhas; type() confirma str, int e bool. Alterar equipamento uma vez modifica toda saída que usa esse nome.',
      diagnose: ['NameError: o nome usado não foi definido ou foi digitado com outra capitalização.', 'Texto sem aspas: Python tenta encontrar um nome em vez de criar uma string.', 'True/False precisam começar com maiúscula.'],
      apply: 'Crie dados fictícios para um segundo atendimento: solicitante, setor, patrimônio, descrição, prioridade, minutos estimados e concluído. Exiba-os e justifique o tipo escolhido para cada valor.',
      next: 'entrada-expressoes'
    },
    {
      id: 'entrada-expressoes', arc: '2. Registrar um atendimento', number: 4,
      title: 'Entrada, conversão, expressões e f-strings', level: 'Iniciante',
      objective: 'Receber dados digitados, convertê-los quando necessário e produzir um resumo claro.',
      prereqs: ['Valores, variáveis, tipos e print()'],
      situation: 'Editar o código a cada chamado não serve para a secretaria. O mesmo programa deve receber nome, equipamento e tempo estimado de pessoas diferentes.',
      need: 'input() lê uma linha digitada e sempre devolve str. Para calcular com um número, a conversão precisa ser explícita.',
      steps: [
        {
          title: '1. Leia texto e número',
          html: '<p>A mensagem dentro de <code>input()</code> orienta o usuário. Primeiro receba o texto; depois converta o tempo com <code>int()</code>.</p>',
          code: 'solicitante = input("Solicitante: ")\nequipamento = input("Patrimônio: ")\ntempo_minutos = int(input("Tempo estimado em minutos: "))\n\nprint(f"{solicitante} abriu atendimento para {equipamento}.")\nprint(f"Estimativa: {tempo_minutos} minutos.")',
          label: 'central.py',
          output: 'Solicitante: Ana\nPatrimônio: NB-07\nTempo estimado em minutos: 30\nAna abriu atendimento para NB-07.\nEstimativa: 30 minutos.'
        },
        {
          title: '2. Construa a expressão',
          html: '<p>Uma expressão combina valores e operadores e produz outro valor. A multiplicação ocorre antes da soma; parênteses tornam a intenção explícita.</p>',
          code: 'deslocamento = 5\ntempo_total = tempo_minutos + deslocamento\nhoras = tempo_total / 60\n\nprint(f"Tempo total: {tempo_total} min")\nprint(f"Equivale a {horas:.2f} h")',
          label: 'Acrescente ao arquivo',
          output: 'Tempo total: 35 min\nEquivale a 0.58 h'
        },
        {
          title: '3. Compare as conversões',
          html: '<p><code>int()</code> aceita texto que represente inteiro; <code>float()</code> aceita decimal escrito com ponto; <code>str()</code> produz texto. A f-string começa com <code>f</code> antes das aspas e avalia o conteúdo entre chaves.</p>',
          code: 'quantidade = int("3")\ncusto = float("12.50")\nprint(f"Total: R$ {quantidade * custo:.2f}")',
          label: 'Experimento',
          output: 'Total: R$ 37.50'
        }
      ],
      expected: 'Com Ana, NB-07 e 30, o resumo usa os dados digitados e calcula 35 minutos, equivalentes a 0.58 h.',
      diagnose: ['ValueError ao digitar “trinta”: a conversão para int não encontrou um inteiro.', 'Digite decimais com ponto no código e no input convertido por float.', 'Se aparecerem chaves literalmente, confira se há f antes da string. O tratamento definitivo do ValueError será construído na aula de exceções.'],
      apply: 'Leia quantidade de equipamentos e minutos por equipamento. Calcule o tempo total e mostre um resumo com f-string. Teste 1, 3 e 0 antes de avançar.',
      next: 'strings'
    },
    {
      id: 'strings', arc: '2. Registrar um atendimento', number: 5,
      title: 'Limpe, procure e transforme textos', level: 'Iniciante',
      objective: 'Usar índices, slicing e métodos de string para padronizar registros sem perder o original.',
      prereqs: ['Strings, variáveis, input() e f-strings'],
      situation: 'O mesmo patrimônio chegou como “ nb-07 ”, “NB-07” e “Nb-07”. Sem padronização, a busca pode tratar um equipamento como três registros diferentes.',
      need: 'Uma string é uma sequência imutável de caracteres. O programa pode produzir uma nova string normalizada, mas não altera um caractere “dentro” da original.',
      visual: ['índice 0', 'N', 'índice 1'],
      steps: [
        {
          title: '1. Preserve e normalize',
          html: '<p><code>strip()</code> remove espaços das extremidades e <code>upper()</code> produz texto em maiúsculas. A variável original continua disponível como evidência do que foi digitado.</p>',
          code: 'patrimonio_digitado = " nb-07 "\npatrimonio = patrimonio_digitado.strip().upper()\n\nprint(repr(patrimonio_digitado))\nprint(patrimonio)',
          label: 'normalizar.py',
          output: "' nb-07 '\nNB-07"
        },
        {
          title: '2. Localize partes',
          html: '<p>O primeiro índice é 0. Um índice obtém um caractere; slicing obtém um trecho. O limite final não entra.</p>',
          code: 'print(patrimonio[0])\nprint(patrimonio[:2])\nprint(patrimonio[3:])\nprint(len(patrimonio))',
          label: 'Índice e slicing',
          output: 'N\nNB\n07\n5'
        },
        {
          title: '3. Busque e substitua com intenção',
          html: '<p><code>in</code> testa presença; <code>startswith()</code> testa o início; <code>replace()</code> produz uma nova string; <code>split()</code> divide; <code>join()</code> reúne.</p>',
          code: 'descricao = "Tela pisca ao ligar"\ntexto_busca = descricao.lower()\n\nprint("tela" in texto_busca)\nprint(patrimonio.startswith("NB-"))\nprint(descricao.replace("pisca", "apaga"))\npalavras = descricao.split()\nprint(" | ".join(palavras))',
          label: 'Métodos de str',
          output: 'True\nTrue\nTela apaga ao ligar\nTela | pisca | ao | ligar'
        }
      ],
      expected: 'A forma normalizada é NB-07; índices e cortes localizam suas partes; a busca ignora a capitalização ao usar lower().',
      diagnose: ['IndexError: o índice não existe na string.', 'replace() não altera a string original; guarde o retorno se precisar dele.', 'strip() não remove espaços do meio do texto.'],
      apply: 'Receba um setor e uma descrição. Preserve as entradas originais, crie versões normalizadas para busca e mostre se a descrição contém “rede” ou “senha”. Não altere o relato original.',
      next: 'decisoes'
    }
  );
})();
