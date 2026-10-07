(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'listas', arc: '4. Representar vários registros', number: 11,
      title: 'Troque variáveis numeradas por uma lista', level: 'Iniciante',
      objective: 'Criar, acessar, percorrer e modificar uma coleção ordenada e mutável.',
      prereqs: ['Strings, for, if e operadores de pertencimento'],
      situation: 'O código começou a usar patrimonio1, patrimonio2, patrimonio3 e uma nova variável para cada atendimento. Incluir o vigésimo item exige mudar a estrutura do programa.',
      need: 'Os patrimônios são vários elementos relacionados. Uma lista reúne esses valores, preserva a ordem e permite processá-los com o mesmo laço.',
      visual: ['índice 0 → NB-07', 'índice 1 → PC-12', 'índice 2 → PR-03'],
      steps: [
        {title:'1. Crie e acesse',html:'<p>Colchetes delimitam a lista. O primeiro índice é 0; índices negativos contam do fim.</p>',code:'patrimonios = ["NB-07", "PC-12", "PR-03"]\n\nprint(patrimonios[0])\nprint(patrimonios[-1])\nprint(len(patrimonios))',label:'atendimentos.py',output:'NB-07\nPR-03\n3'},
        {title:'2. Percorra itens, não posições sem necessidade',html:'<p>Quando basta usar cada valor, percorra diretamente a lista. <code>enumerate()</code> entra quando posição e item são necessários juntos.</p>',code:'for patrimonio in patrimonios:\n    print(patrimonio)\n\nfor numero, patrimonio in enumerate(patrimonios, start=1):\n    print(f"{numero}. {patrimonio}")',label:'Iteração',output:'NB-07\nPC-12\nPR-03\n1. NB-07\n2. PC-12\n3. PR-03'},
        {title:'3. Modifique com métodos explícitos',html:'<p><code>append()</code> adiciona ao fim; <code>insert()</code> adiciona em posição; <code>remove()</code> procura um valor; <code>pop()</code> remove e devolve por posição.</p>',code:'patrimonios.append("TV-02")\npatrimonios.remove("PC-12")\nremovido = patrimonios.pop()\n\nprint(patrimonios)\nprint(f"Removido: {removido}")',label:'Mutação',output:"['NB-07', 'PR-03']\nRemovido: TV-02"}
      ],
      expected: 'A lista começa com três itens, pode ser percorrida e termina com NB-07 e PR-03 após as operações.',
      diagnose: ['IndexError: a posição não existe.', 'ValueError em remove(): o valor procurado não está na lista.', 'append() altera a lista e retorna None; não faça lista = lista.append(valor).'],
      apply: 'Comece com três setores, acrescente um quarto, remova um existente e mostre a lista numerada. Teste também a tentativa de acessar um índice inexistente e interprete o erro.',
      next: 'listas-operacoes'
    },
    {
      id: 'listas-operacoes', arc: '4. Representar vários registros', number: 12,
      title: 'Fatie, ordene e copie sem alterar o dado errado', level: 'Iniciante',
      objective: 'Usar slicing, busca, ordenação e distinguir referência compartilhada de cópia superficial.',
      prereqs: ['Criação, acesso, métodos e iteração de listas'],
      situation: 'A coordenação quer mostrar apenas os três primeiros atendimentos e ordenar uma visão por prioridade, mas a ordem original de chegada precisa permanecer como evidência.',
      need: 'Algumas operações criam uma nova lista; outras alteram a existente. A escolha define se o histórico será preservado.',
      steps: [
        {title:'1. Crie uma visão parcial',html:'<p>Slicing usa início, fim e passo. O limite final não entra; omitir limites usa o começo ou o fim.</p>',code:'fila = ["AT-104", "AT-105", "AT-106", "AT-107", "AT-108"]\nprint(fila[:3])\nprint(fila[1:4])\nprint(fila[::-1])',label:'fila.py',output:"['AT-104', 'AT-105', 'AT-106']\n['AT-105', 'AT-106', 'AT-107']\n['AT-108', 'AT-107', 'AT-106', 'AT-105', 'AT-104']"},
        {title:'2. Compare sorted() e sort()',html:'<p><code>sorted()</code> devolve uma nova lista. <code>list.sort()</code> altera a lista e retorna None. Para preservar a fila, use a primeira forma.</p>',code:'prioridades = [3, 1, 2, 1]\nvisao_ordenada = sorted(prioridades)\n\nprint(prioridades)\nprint(visao_ordenada)',label:'Ordenação',output:'[3, 1, 2, 1]\n[1, 1, 2, 3]'},
        {title:'3. Diferencie outro nome de uma cópia',html:'<p>Atribuir uma lista a outro nome não copia seus elementos. Os dois nomes referenciam a mesma lista. <code>copy()</code> cria uma cópia superficial independente no primeiro nível.</p>',code:'original = ["AT-104", "AT-105"]\nmesma = original\ncopia = original.copy()\n\nmesma.append("AT-106")\ncopia.append("AT-200")\n\nprint(original)\nprint(copia)',label:'Referência e cópia',output:"['AT-104', 'AT-105', 'AT-106']\n['AT-104', 'AT-105', 'AT-200']"}
      ],
      expected: 'Os cortes não mudam a fila; sorted preserva a lista original; alterar mesma altera original, mas alterar copia não.',
      diagnose: ['Resultado None após sort(): o retorno foi atribuído por engano.', 'Uma cópia superficial ainda compartilha objetos internos mutáveis; isso será observado em coleções aninhadas.', 'Use in antes de remove() quando ausência for uma situação normal.'],
      apply: 'Crie uma fila de seis chamados. Mostre os dois primeiros, os dois últimos e uma visão ordenada sem mudar a fila. Faça uma cópia para simular a remoção do primeiro item.',
      next: 'tuplas-conjuntos'
    },
    {
      id: 'tuplas-conjuntos', arc: '4. Representar vários registros', number: 13,
      title: 'Use tuplas para posição fixa e conjuntos para unicidade', level: 'Iniciante',
      objective: 'Escolher entre sequência imutável e coleção de valores únicos conforme a regra.',
      prereqs: ['Listas, pertencimento e iteração'],
      situation: 'Uma localização combina bloco e sala e não deve ser alterada item a item. Já a lista de setores atendidos precisa eliminar repetições sem importar a ordem.',
      need: 'Tupla representa uma sequência imutável; set representa elementos únicos sem posição estável. Nenhum substitui a lista em todos os casos.',
      steps: [
        {title:'1. Desempacote uma tupla',html:'<p>A vírgula define a tupla. O desempacotamento associa cada posição a um nome; a quantidade precisa coincidir.</p>',code:'localizacao = ("Bloco B", 12)\nbloco, sala = localizacao\n\nprint(bloco)\nprint(sala)',label:'colecoes.py',output:'Bloco B\n12'},
        {title:'2. Elimine duplicações com set',html:'<p>Conjuntos não garantem a ordem de exibição. Eles são adequados para pertencimento, união, interseção e diferença.</p>',code:'setores = {"Secretaria", "Laboratório", "Secretaria"}\nprioritarios = {"Laboratório", "Direção"}\n\nprint(len(setores))\nprint("Laboratório" in setores)\nprint(setores & prioritarios)\nprint(setores | prioritarios)',label:'Conjuntos',output:"2\nTrue\n{'Laboratório'}\n{'Secretaria', 'Laboratório', 'Direção'}"},
        {title:'3. Escolha pela necessidade',html:'<ul><li><strong>list:</strong> ordem e alterações.</li><li><strong>tuple:</strong> posições fixas e imutabilidade.</li><li><strong>set:</strong> unicidade e operações de conjunto.</li></ul><p>A ordem textual de um set pode variar; avalie conteúdo, não aparência.</p>'}
      ],
      expected: 'A tupla é separada em bloco e sala. O set remove a repetição de Secretaria e encontra a interseção com os prioritários.',
      diagnose: ['TypeError ao alterar tuple: seus itens não podem ser atribuídos.', 'KeyError em remove() de set ausente; discard() não gera erro nesse caso.', 'Não use índice em set: ele não é uma sequência indexada.'],
      apply: 'Modele uma coordenada de equipamento com tupla e compare dois conjuntos de softwares instalados para encontrar comuns e ausentes.',
      next: 'dicionarios'
    },
    {
      id: 'dicionarios', arc: '4. Representar vários registros', number: 14,
      title: 'Dê nome aos campos com dicionários', level: 'Iniciante',
      objective: 'Criar, consultar, atualizar e percorrer pares chave–valor.',
      prereqs: ['Strings, listas, laços e pertencimento'],
      situation: 'Uma lista como ["AT-104", "NB-07", 1, False] obriga o leitor a decorar posições. A equipe precisa saber o que cada valor significa.',
      need: 'Dicionário associa uma chave única a um valor. A chave descreve o campo; o acesso deixa de depender de lembrar que prioridade estava na posição 2.',
      visual: ['chave "patrimonio"', '→', 'valor "NB-07"'],
      steps: [
        {title:'1. Crie um registro nomeado',html:'<p>Chave e valor são separados por dois-pontos. Acesso com colchetes exige chave existente; <code>get()</code> permite um padrão para ausência esperada.</p>',code:'atendimento = {\n    "id": "AT-104",\n    "patrimonio": "NB-07",\n    "prioridade": 1,\n    "concluido": False\n}\n\nprint(atendimento["patrimonio"])\nprint(atendimento.get("tecnico", "não atribuído"))',label:'registro.py',output:'NB-07\nnão atribuído'},
        {title:'2. Atualize e percorra',html:'<p>Atribuir a uma chave existente troca o valor; usar uma chave nova cria o par. <code>items()</code> fornece chave e valor juntos.</p>',code:'atendimento["tecnico"] = "Bruno"\natendimento["concluido"] = True\n\nfor campo, valor in atendimento.items():\n    print(f"{campo}: {valor}")',label:'Atualização',output:'id: AT-104\npatrimonio: NB-07\nprioridade: 1\nconcluido: True\ntecnico: Bruno'},
        {title:'3. Conheça as visões',html:'<p><code>keys()</code>, <code>values()</code> e <code>items()</code> produzem visões dinâmicas do dicionário. Converta para list somente se realmente precisar de uma lista independente.</p>'}
      ],
      expected: 'Os campos podem ser lidos pelo nome; técnico é acrescentado; concluído muda para True; o laço apresenta cada par.',
      diagnose: ['KeyError: a chave exigida não existe ou foi digitada diferente.', 'get() pode esconder erro de digitação; use-o quando a ausência for realmente permitida.', 'Chaves precisam ser hashable; listas não podem ser chaves.'],
      apply: 'Crie um dicionário de equipamento com patrimônio, tipo, sala, estado e observação. Atualize o estado e apresente um relatório percorrendo items().',
      next: 'colecoes-aninhadas'
    },
    {
      id: 'colecoes-aninhadas', arc: '4. Representar vários registros', number: 15,
      title: 'Represente registros completos e só depois use comprehensions', level: 'Intermediário',
      objective: 'Usar lista de dicionários, coleções aninhadas e compreender a forma expandida antes da forma compacta.',
      prereqs: ['Listas, dicionários, for e if'],
      situation: 'Agora existem vários atendimentos e cada um possui vários campos. Duas listas paralelas podem perder o vínculo entre patrimônio e prioridade.',
      need: 'Uma lista de dicionários mantém cada registro unido. A comprehension pode transformar ou filtrar depois que o laço equivalente estiver claro.',
      steps: [
        {title:'1. Reúna registros',html:'<p>Cada dicionário é um atendimento; a lista preserva a ordem dos atendimentos.</p>',code:'atendimentos = [\n    {"id": "AT-104", "patrimonio": "NB-07", "prioridade": 1},\n    {"id": "AT-105", "patrimonio": "PC-12", "prioridade": 3},\n    {"id": "AT-106", "patrimonio": "PR-03", "prioridade": 1}\n]\n\nfor atendimento in atendimentos:\n    print(atendimento["id"], atendimento["patrimonio"])',label:'registros.py',output:'AT-104 NB-07\nAT-105 PC-12\nAT-106 PR-03'},
        {title:'2. Construa o filtro de forma expandida',html:'<p>Primeiro torne cada etapa visível: criar lista vazia, percorrer, testar e adicionar.</p>',code:'urgentes = []\nfor atendimento in atendimentos:\n    if atendimento["prioridade"] == 1:\n        urgentes.append(atendimento["id"])\n\nprint(urgentes)',label:'Forma expandida',output:"['AT-104', 'AT-106']"},
        {title:'3. Reconheça a mesma ideia compacta',html:'<p>A comprehension abaixo produz o mesmo resultado. Use-a quando continuar legível; volte à forma expandida para lógica mais complexa.</p>',code:'urgentes = [\n    atendimento["id"]\n    for atendimento in atendimentos\n    if atendimento["prioridade"] == 1\n]\nprint(urgentes)',label:'List comprehension',output:"['AT-104', 'AT-106']"},
        {title:'4. Observe o limite da cópia superficial',html:'<p>Copiar apenas a lista externa não copia cada dicionário interno. Alterar um registro interno pode aparecer nas duas estruturas. O módulo <code>copy</code> e <code>deepcopy()</code> entram somente quando uma cópia profunda for necessária.</p>'}
      ],
      expected: 'Cada patrimônio permanece ligado ao seu id/prioridade; as duas formas de filtro produzem AT-104 e AT-106.',
      diagnose: ['Se campos de atendimentos diferentes se misturam, confira onde cada dicionário é criado.', 'Comprehension ilegível deve ser expandida; compactar não é objetivo por si só.', 'Uma “matriz” numérica pode ser representada por listas de listas, mas Python não possui um tipo matriz nativo geral; NumPy é outra etapa.'],
      apply: 'Crie três empréstimos como dicionários dentro de uma lista. Produza uma lista apenas com patrimônios ainda não devolvidos, primeiro com laço expandido e depois com comprehension.',
      next: 'funcoes'
    }
  );
})();
