(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'caminhos', arc: '6. Fazer os dados sobreviverem', number: 21,
      title: 'Saiba onde o programa procura arquivos', level: 'Intermediário',
      objective: 'Distinguir arquivo, caminho e diretório de trabalho e usar pathlib com intenção.',
      prereqs: ['Módulos, imports, strings e organização de pastas'],
      situation: 'O arquivo atendimentos.txt existe, mas o programa mostra FileNotFoundError quando é executado por outro terminal. O nome está correto; o ponto de partida da busca mudou.',
      need: 'Um caminho relativo é interpretado a partir do diretório de trabalho do processo. pathlib representa caminhos sem concatenar barras manualmente.',
      visual: ['diretório de trabalho', 'resolve dados/atendimentos.txt', 'arquivo existente'],
      steps: [
        {title:'1. Inspecione antes de abrir',html:'<p><code>Path.cwd()</code> mostra o diretório de trabalho. O operador <code>/</code> une partes de um caminho Path.</p>',code:'from pathlib import Path\n\nbase = Path.cwd()\narquivo = base / "dados" / "atendimentos.txt"\n\nprint(base)\nprint(arquivo)\nprint(arquivo.exists())',label:'caminhos.py',output:'.../python-horizonte\n.../python-horizonte/dados/atendimentos.txt\nFalse'},
        {title:'2. Crie apenas a pasta controlada',html:'<p><code>mkdir()</code> cria a pasta; <code>parents=True</code> cria pais ausentes; <code>exist_ok=True</code> aceita que ela já exista.</p>',code:'pasta_dados = Path("dados")\npasta_dados.mkdir(parents=True, exist_ok=True)\nprint(pasta_dados.resolve())',label:'Preparação'},
        {title:'3. Baseie recursos no arquivo do módulo quando necessário',html:'<p><code>__file__</code> representa o caminho do arquivo Python atual. <code>parent</code> obtém sua pasta. Essa estratégia é diferente de cwd e deve ser escolhida conforme a estrutura do projeto.</p>',code:'BASE_PROJETO = Path(__file__).resolve().parent\nARQUIVO_DADOS = BASE_PROJETO / "dados" / "atendimentos.txt"\nprint(ARQUIVO_DADOS)',label:'Base estável'}
      ],
      expected: 'O primeiro teste mostra False antes de criar o arquivo; a pasta dados passa a existir dentro do projeto; o caminho final fica explícito.',
      diagnose: ['FileNotFoundError não prova que o arquivo não existe em todo o computador; mostra que não foi encontrado no caminho usado.', 'Imprima resolve() e cwd() antes de “tentar caminhos aleatórios”.', 'Não use caminho absoluto do seu computador em material que outra pessoa executará.'],
      apply: 'Crie a pasta laboratorio/entrada, mostre seu caminho absoluto e verifique a existência de chamados.csv sem criá-lo ainda. Explique por que o resultado é False.',
      next: 'arquivos-texto'
    },
    {
      id: 'arquivos-texto', arc: '6. Fazer os dados sobreviverem', number: 22,
      title: 'Escreva e leia texto com fechamento garantido', level: 'Intermediário',
      objective: 'Abrir arquivos com with, escolher modo e codificação e confirmar o resultado.',
      prereqs: ['pathlib, strings e listas'],
      situation: 'Os atendimentos desaparecem quando o processo termina. O primeiro formato persistente será um relatório de texto legível por pessoas.',
      need: 'Abrir um arquivo cria um recurso do sistema. with garante o fechamento ao sair do bloco, inclusive se ocorrer uma exceção.',
      steps: [
        {title:'1. Escreva dentro da pasta do projeto',html:'<p>O modo <code>"w"</code> substitui o conteúdo existente. A codificação UTF-8 preserva acentos de forma explícita.</p>',code:'from pathlib import Path\n\npasta = Path("dados")\npasta.mkdir(exist_ok=True)\narquivo = pasta / "relatorio.txt"\n\nwith arquivo.open("w", encoding="utf-8") as saida:\n    saida.write("AT-104 | NB-07 | prioridade alta\\n")\n    saida.write("AT-105 | PC-12 | prioridade baixa\\n")\n\nprint(arquivo.exists())',label:'arquivos.py',output:'True'},
        {title:'2. Leia depois que o bloco de escrita terminou',html:'<p><code>read_text()</code> é uma conveniência de Path para arquivos pequenos. Para arquivos grandes, leia progressivamente.</p>',code:'conteudo = arquivo.read_text(encoding="utf-8")\nprint(conteudo)',label:'Leitura',output:'AT-104 | NB-07 | prioridade alta\nAT-105 | PC-12 | prioridade baixa'},
        {title:'3. Acrescente sem apagar',html:'<p>O modo <code>"a"</code> posiciona a escrita no fim. Use-o quando o formato realmente aceitar anexação.</p>',code:'with arquivo.open("a", encoding="utf-8") as saida:\n    saida.write("AT-106 | PR-03 | prioridade alta\\n")',label:'Append'}
      ],
      expected: 'dados/relatorio.txt existe e contém as linhas em UTF-8. Executar novamente com w recria; com a acrescenta.',
      diagnose: ['PermissionError: o arquivo/pasta não permite escrita ou está bloqueado.', 'UnicodeDecodeError: a codificação usada para ler não corresponde aos bytes do arquivo.', 'Não use w quando precisa preservar conteúdo existente.'],
      apply: 'Gere um relatório de equipamentos fictícios em dados/equipamentos.txt. Leia-o de volta e compare exatamente com a informação que deveria ter sido salva.',
      next: 'arquivos-formatos'
    },
    {
      id: 'arquivos-formatos', arc: '6. Fazer os dados sobreviverem', number: 23,
      title: 'Escolha CSV para tabela e JSON para estrutura', level: 'Intermediário',
      objective: 'Persistir lista de dicionários em CSV e JSON com a biblioteca padrão.',
      prereqs: ['Módulos, pathlib, with, listas e dicionários'],
      situation: 'O relatório de texto serve para leitura, mas não separa campos com segurança. A planilha precisa de tabela; o sistema precisa preservar tipos e estrutura.',
      need: 'CSV representa linhas e colunas; JSON representa objetos, arrays e valores básicos. Ambos são formatos de dados, não bancos de dados.',
      steps: [
        {title:'1. Grave CSV com cabeçalho',html:'<p><code>csv.DictWriter</code> liga chaves do dicionário às colunas. <code>newline=""</code> segue a recomendação do módulo csv.</p>',code:'import csv\nfrom pathlib import Path\n\natendimentos = [\n    {"id": "AT-104", "patrimonio": "NB-07", "prioridade": 1},\n    {"id": "AT-105", "patrimonio": "PC-12", "prioridade": 3}\n]\n\narquivo = Path("dados/atendimentos.csv")\nwith arquivo.open("w", encoding="utf-8", newline="") as saida:\n    escritor = csv.DictWriter(saida, fieldnames=["id", "patrimonio", "prioridade"])\n    escritor.writeheader()\n    escritor.writerows(atendimentos)',label:'formatos.py'},
        {title:'2. Leia CSV e observe os tipos',html:'<p>CSV é texto. Ao ler, prioridade chega como string e precisa de conversão se o programa for calcular.</p>',code:'with arquivo.open("r", encoding="utf-8", newline="") as entrada:\n    leitor = csv.DictReader(entrada)\n    carregados = list(leitor)\n\nprint(carregados)\nprint(type(carregados[0]["prioridade"]))',label:'Leitura CSV',output:"[{'id': 'AT-104', 'patrimonio': 'NB-07', 'prioridade': '1'}, {'id': 'AT-105', 'patrimonio': 'PC-12', 'prioridade': '3'}]\n<class 'str'>"},
        {title:'3. Grave e leia JSON',html:'<p><code>json.dump()</code> serializa no arquivo; <code>ensure_ascii=False</code> mantém caracteres legíveis; indent melhora inspeção humana.</p>',code:'import json\n\narquivo_json = Path("dados/atendimentos.json")\nwith arquivo_json.open("w", encoding="utf-8") as saida:\n    json.dump(atendimentos, saida, ensure_ascii=False, indent=2)\n\nwith arquivo_json.open("r", encoding="utf-8") as entrada:\n    restaurados = json.load(entrada)\n\nprint(restaurados[0]["prioridade"], type(restaurados[0]["prioridade"]))',label:'JSON',output:"1 <class 'int'>"}
      ],
      expected: 'CSV preserva texto tabular e lê prioridade como str; JSON restaura prioridade como int. Os dois arquivos ficam em dados/.',
      diagnose: ['CSV com colunas deslocadas: confira delimiter e cabeçalho do arquivo real.', 'JSONDecodeError: o conteúdo não é JSON válido ou foi interrompido.', 'Não use eval() para ler JSON; use json.load/loads.'],
      apply: 'Salve a mesma lista fictícia em CSV e JSON. Abra ambos em editor de texto, compare forma e tipos restaurados e escolha qual atende melhor a uma troca tabular.',
      next: 'excecoes'
    },
    {
      id: 'excecoes', arc: '7. Tornar o sistema confiável', number: 24,
      title: 'Leia o traceback e trate apenas o erro previsto', level: 'Intermediário',
      objective: 'Distinguir erros de sintaxe, execução e lógica e usar try/except/else/finally/raise com precisão.',
      prereqs: ['Funções, conversões, arquivos e regras de validação'],
      situation: 'Uma prioridade escrita como “alta” gera ValueError; um arquivo ausente gera FileNotFoundError; uma regra que classifica 9 como baixa pode não gerar exceção, mas está logicamente errada.',
      need: 'Exceção é um objeto que sinaliza falha de execução. O traceback mostra a cadeia de chamadas; a última linha traz o tipo e a mensagem. Tratar não significa esconder.',
      visual: ['última chamada', 'tipo + mensagem', 'hipótese e reteste'],
      steps: [
        {title:'1. Observe antes de tratar',html:'<p>Execute <code>int("alta")</code>. Leia de baixo para cima: tipo ValueError, mensagem sobre literal inválido, linha que chamou int. Só então formule a correção.</p>',code:'def converter_prioridade(texto):\n    return int(texto)\n\nconverter_prioridade("alta")',label:'erros.py',output:'ValueError: invalid literal for int() with base 10: \'alta\''},
        {title:'2. Capture o tipo específico',html:'<p>O bloco else executa somente se não houver exceção no try. Mantenha no try apenas a operação que pode produzir o erro esperado.</p>',code:'texto = input("Prioridade de 1 a 3: ")\ntry:\n    prioridade = int(texto)\nexcept ValueError:\n    print("Digite um número inteiro.")\nelse:\n    print(f"Número recebido: {prioridade}")',label:'Tratamento específico',output:'Prioridade de 1 a 3: alta\nDigite um número inteiro.'},
        {title:'3. Sinalize regra inválida',html:'<p>Conversão bem-sucedida não garante validade do negócio. raise cria uma exceção com mensagem própria.</p>',code:'def validar_prioridade(valor):\n    if valor not in (1, 2, 3):\n        raise ValueError("prioridade deve ser 1, 2 ou 3")\n    return valor',label:'Regra'},
        {title:'4. Use finally para uma ação realmente obrigatória',html:'<p><code>finally</code> executa com sucesso ou falha. with já fecha arquivos; finally é útil para outros recursos/registro de encerramento.</p>',code:'try:\n    prioridade = validar_prioridade(8)\nexcept ValueError as erro:\n    print(f"Dado recusado: {erro}")\nfinally:\n    print("Tentativa encerrada")',label:'Finally',output:'Dado recusado: prioridade deve ser 1, 2 ou 3\nTentativa encerrada'}
      ],
      expected: 'Cada falha é distinguida: entrada textual recebe orientação, regra fora da faixa informa causa e finally confirma o fim da tentativa.',
      diagnose: ['except Exception amplo demais pode esconder defeitos não previstos.', 'SyntaxError ocorre antes da execução normal do bloco e não é o primeiro caso para try.', 'Erro lógico exige casos de teste; pode não haver mensagem automática.'],
      apply: 'Crie ler_tempo(texto): converta para int, rejeite negativos com raise ValueError e retorne o valor. Teste “20”, “vinte” e “-1”, registrando tipo, hipótese e correção.',
      next: 'logging-debugger'
    },
    {
      id: 'logging-debugger', arc: '7. Tornar o sistema confiável', number: 25,
      title: 'Registre evidências e depure passo a passo', level: 'Intermediário',
      objective: 'Usar logging e o depurador do VS Code para observar fluxo, variáveis e pilha sem espalhar prints permanentes.',
      prereqs: ['Funções, exceções, módulos e VS Code configurado'],
      situation: 'Um total aparece errado apenas depois de vários atendimentos. Prints improvisados misturam diagnóstico com a saída destinada ao usuário.',
      need: 'logging registra eventos por nível; o debugger pausa a execução em um breakpoint e permite observar estado e chamadas.',
      steps: [
        {title:'1. Configure um registro simples',html:'<p>DEBUG detalha investigação; INFO registra eventos normais; WARNING indica situação incomum; ERROR registra falha. Não registre senhas, tokens ou dados pessoais.</p>',code:'import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format="%(levelname)s | %(message)s"\n)\n\ndef calcular_total(tempos):\n    logging.info("Calculando %s tempos", len(tempos))\n    total = sum(tempos)\n    logging.info("Total calculado: %s", total)\n    return total\n\nprint(calcular_total([20, 30, 10]))',label:'diagnostico.py',output:'INFO | Calculando 3 tempos\nINFO | Total calculado: 60\n60'},
        {title:'2. Faça uma sessão de depuração',html:'<ol><li>Clique à esquerda da linha <code>total = sum(tempos)</code> para criar um breakpoint.</li><li>Abra <strong>Run and Debug</strong> e escolha depurar arquivo Python.</li><li>Quando pausar, observe <code>tempos</code>.</li><li>Use Step Over para executar a soma.</li><li>Observe <code>total</code> e a pilha de chamadas.</li><li>Continue e compare a saída.</li></ol>'},
        {title:'3. Diferencie hipótese de alteração',html:'<p>Não mude várias linhas de uma vez. Registre: resultado esperado, resultado observado, variável suspeita, teste realizado e conclusão. Uma evidência que contradiz a hipótese é útil.</p>'}
      ],
      expected: 'O log informa quantidade e total; o breakpoint pausa antes da soma; Step Over cria total=60; a pilha mostra calcular_total chamada pelo programa.',
      diagnose: ['Breakpoint ignorado: confira interpretador, arquivo salvo e modo de execução pelo depurador.', 'Log duplicado: a configuração pode estar sendo feita mais de uma vez.', 'Não use logging.basicConfig em toda biblioteca; a aplicação decide a configuração.'],
      apply: 'Introduza de propósito um total incorreto usando len(tempos). Faça previsão, breakpoint, hipótese, correção e reteste. Remova o defeito antes de avançar.',
      next: 'sqlite'
    },
    {
      id: 'sqlite', arc: '6. Fazer os dados sobreviverem', number: 26,
      title: 'Persista registros em SQLite com parâmetros', level: 'Intermediário',
      objective: 'Criar uma tabela, inserir e consultar dados com sqlite3 sem concatenar entrada em SQL.',
      prereqs: ['Módulos, with, dicionários, funções e exceções', 'Noções básicas de tabela, linha, coluna e chave; aprofunde em Banco de Dados'],
      situation: 'CSV e JSON reescrevem documentos inteiros e não oferecem consultas/transações como um banco. A Central precisa localizar atendimentos por estado e atualizar registros com segurança.',
      need: 'SQLite é um banco embutido em arquivo. O módulo sqlite3 envia SQL ao banco. Valores entram por parâmetros; nomes de tabela/coluna não vêm de entrada do usuário.',
      steps: [
        {title:'1. Crie banco e tabela',html:'<p><code>connect()</code> abre ou cria o arquivo. O bloco with confirma a transação se tudo funcionar e desfaz em caso de exceção; feche a conexão ao final.</p>',code:'import sqlite3\nfrom pathlib import Path\n\nPath("dados").mkdir(exist_ok=True)\nconexao = sqlite3.connect("dados/horizonte.db")\n\nwith conexao:\n    conexao.execute("""\n        CREATE TABLE IF NOT EXISTS atendimento (\n            id INTEGER PRIMARY KEY,\n            patrimonio TEXT NOT NULL,\n            prioridade INTEGER NOT NULL,\n            estado TEXT NOT NULL\n        )\n    """)',label:'banco.py'},
        {title:'2. Insira com parâmetros',html:'<p>Os sinais <code>?</code> são placeholders. O driver envia valores separadamente do SQL, evitando que texto digitado se torne comando.</p>',code:'with conexao:\n    conexao.execute(\n        "INSERT INTO atendimento (patrimonio, prioridade, estado) VALUES (?, ?, ?)",\n        ("NB-07", 1, "aberto")\n    )',label:'Inserção'},
        {title:'3. Consulte e feche',html:'<p>O cursor produz linhas. Depois do uso, feche a conexão explicitamente.</p>',code:'cursor = conexao.execute(\n    "SELECT id, patrimonio, prioridade FROM atendimento WHERE estado = ?",\n    ("aberto",)\n)\nfor linha in cursor:\n    print(linha)\n\nconexao.close()',label:'Consulta',output:"(1, 'NB-07', 1)"}
      ],
      expected: 'dados/horizonte.db é criado; a tabela existe; um atendimento é inserido; a consulta retorna uma tupla com id gerado.',
      diagnose: ['Executar o exemplo de inserção várias vezes cria várias linhas; limpe apenas o banco de laboratório de forma consciente.', 'OperationalError: confira SQL, nomes e existência da tabela.', 'Nunca forme SQL com f-string/concatenação de entrada. Use parâmetros.'],
      apply: 'Crie funções inserir_atendimento(conexao, dados) e listar_abertos(conexao). Use somente valores fictícios e consultas parametrizadas. Faça ponte com o módulo Banco de Dados para modelagem completa.',
      next: 'classes-objetos'
    }
  );
})();
