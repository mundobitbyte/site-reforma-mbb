(() => {
  'use strict';

  const app = window.pythonMbb = window.pythonMbb || {
    lessons: [], references: [], stdlib: [], externals: [], trails: []
  };

  app.meta = {
    version: 'Python 3.14.7',
    verified: '09/09/2026',
    scenario: 'Central de Atendimentos da Escola Horizonte'
  };

  app.startSections = [
    {
      id: 'escolha',
      title: 'Escolha seu ponto de entrada',
      eyebrow: 'Comece aqui',
      lead: 'Python agora tem caminhos separados para aprender em sequência, consultar um recurso e construir uma aplicação. Você não precisa percorrer tudo para encontrar o que veio buscar.',
      html: `
        <div class="hero">
          <p class="eyebrow">Python — Mundo bit Byte</p>
          <h2>Comece, construa e volte para consultar</h2>
          <p class="lead">Do primeiro arquivo a software organizado, com uma trilha progressiva e referências que continuam úteis depois do curso.</p>
          <div class="visual-flow" aria-label="Progressão geral da área Python">
            <div class="visual-node">Começar</div><div class="visual-arrow" aria-hidden="true">→</div>
            <div class="visual-node">Compreender</div><div class="visual-arrow" aria-hidden="true">→</div>
            <div class="visual-node">Testar</div><div class="visual-arrow" aria-hidden="true">→</div>
            <div class="visual-node">Construir</div><div class="visual-arrow" aria-hidden="true">→</div>
            <div class="visual-node">Consultar</div>
          </div>
          <p class="version-note">Base técnica verificada em ${app.meta.verified}: ${app.meta.version}. Python 3.15 ainda era pré-lançamento nesta data.</p>
        </div>
        <h3>Qual é a sua necessidade agora?</h3>
        <div class="path-grid">
          <button class="path-card" type="button" data-go="aprender/ambiente">
            <span class="status-tag ready">Do zero</span><strong>Nunca programei em Python</strong>
            <p>Prepare o computador, crie o primeiro arquivo e avance sem depender de conceitos escondidos.</p>
          </button>
          <button class="path-card" type="button" data-go="aprender/primeiro-programa">
            <span class="status-tag ready">Continuar</span><strong>Já tenho Python instalado</strong>
            <p>Comece pelo primeiro registro da Escola Horizonte e confirme seu ambiente.</p>
          </button>
          <button class="path-card" type="button" data-go="referencia">
            <span class="status-tag ready">Consulta</span><strong>Quero lembrar uma sintaxe</strong>
            <p>Pesquise palavras-chave, operadores, tipos, built-ins, métodos e exceções.</p>
          </button>
          <button class="path-card" type="button" data-go="biblioteca">
            <span class="status-tag ready">Consulta</span><strong>Preciso de um módulo nativo</strong>
            <p>Encontre módulos da biblioteca padrão por finalidade e veja quando usá-los.</p>
          </button>
          <button class="path-card" type="button" data-go="aplicacoes">
            <span class="status-tag ready">Projetos</span><strong>Quero construir algo real</strong>
            <p>Escolha automação, desktop, Web/API, banco, dados, jogos, mobile ou IA.</p>
          </button>
          <button class="path-card" type="button" data-go="inicio/pontes">
            <span class="status-tag">Ponte</span><strong>Já estudei VisuAlg</strong>
            <p>Reveja o que muda na sintaxe e o que permanece no raciocínio.</p>
          </button>
        </div>`
    },
    {
      id: 'ambiente-resumo',
      title: 'Ferramentas e versões',
      eyebrow: 'Decisão técnica',
      lead: 'O caminho principal prepara o aluno para projetos com vários arquivos, pacotes, testes, depuração e Git. IDLE continua como alternativa simples.',
      html: `
        <div class="card-grid">
          <article class="info-card"><strong>Python oficial</strong><p>Use a versão estável oferecida em python.org. A base verificada deste material é Python 3.14.7.</p></article>
          <article class="info-card"><strong>Visual Studio Code</strong><p>Editor principal por integrar arquivos, terminal, interpretador, depurador, testes e Git.</p></article>
          <article class="info-card"><strong>Extensão Python</strong><p>Instale a extensão publicada pela Microsoft e selecione o interpretador do projeto.</p></article>
          <article class="info-card"><strong>IDLE</strong><p>Alternativa local para experiências simples. Os conceitos e códigos continuam sendo Python.</p></article>
          <article class="info-card"><strong>Online</strong><p>Serve para os primeiros códigos quando não for possível instalar. Arquivos, pacotes e sistema podem ter limitações.</p></article>
          <article class="info-card"><strong>Ambiente virtual</strong><p>Entra somente quando o primeiro pacote externo for necessário; antes disso, não há motivo para adicionar essa camada.</p></article>
        </div>
        <div class="warning-box"><h3>Não escolha uma versão de teste para começar</h3><p>Versões alpha, beta ou release candidate existem para validação antes do lançamento final. Para aula e projeto estável, use a versão final suportada.</p></div>
        <details class="source-list"><summary>Fontes oficiais verificadas</summary><ul>
          <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener">Downloads do Python</a></li>
          <li><a href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank" rel="noopener">Python no VS Code</a></li>
          <li><a href="https://code.visualstudio.com/docs/python/environments" target="_blank" rel="noopener">Ambientes e interpretadores</a></li>
          <li><a href="https://code.visualstudio.com/docs/python/debugging" target="_blank" rel="noopener">Depuração</a></li>
        </ul></details>`
    },
    {
      id: 'pontes',
      title: 'Ponte de Programação e VisuAlg',
      eyebrow: 'Revisão opcional',
      lead: 'Se entrada, processamento, saída, decisão e repetição já fazem sentido, você não precisa reaprender lógica. Precisa transferir essas ideias para a sintaxe e para o ambiente de Python.',
      html: `
        <div class="mini-grid">
          <article class="mini-card"><strong>Permanece</strong><p>entender o problema, identificar dados, construir regras, prever, testar e corrigir.</p></article>
          <article class="mini-card"><strong>Muda</strong><p>palavras, pontuação, indentação, tipos disponíveis, biblioteca e ferramentas.</p></article>
          <article class="mini-card"><strong>Aprofunda</strong><p>arquivos, pacotes, objetos, testes, depurador, bibliotecas e aplicações reais.</p></article>
        </div>
        <div class="model-pair" aria-label="Transferência de algoritmo para Python"><div>Problema e algoritmo</div><div class="arrow" aria-hidden="true">→</div><div>Código Python</div></div>
        <div class="bridge-box"><h3>Quando revisar antes</h3><p>Se você ainda não consegue dizer quais dados entram, o que o programa faz e qual resultado produz, visite <a href="programacao.html">Programação de Computadores</a>. Se já construiu isso em VisuAlg, avance para <button class="ghost-button" type="button" data-go="aprender/primeiro-programa">o primeiro programa</button>.</p></div>`
    }
  ];

  const addReference = (category, name, purpose, syntax, learn, commonError, official, aliases = '') => {
    app.references.push({ category, name, purpose, syntax, learn, commonError, official, aliases });
  };

  addReference('Sintaxe', 'Comentários', 'Registrar uma explicação necessária ao leitor sem executar o texto.', '# comentário útil', 'primeiro-programa', 'Narrar cada linha e repetir o que o código já deixa claro.', 'https://docs.python.org/3/reference/lexical_analysis.html#comments');
  addReference('Sintaxe', 'Atribuição', 'Associar um nome a um valor ou objeto.', 'nome = valor', 'valores-variaveis', 'Confundir = (atribuição) com == (comparação).', 'https://docs.python.org/3/reference/simple_stmts.html#assignment-statements');
  addReference('Sintaxe', 'Indentação', 'Delimitar blocos de código em Python.', 'if condicao:\n    acao()', 'decisoes', 'Misturar níveis de recuo ou usar tabulação e espaços de modo inconsistente.', 'https://docs.python.org/3/reference/lexical_analysis.html#indentation');
  addReference('Literais', 'Números, textos e booleanos', 'Representar diretamente valores no código.', '42   3.14   "texto"   True   None', 'valores-variaveis', 'Colocar número entre aspas e esperar cálculo numérico.', 'https://docs.python.org/3/reference/lexical_analysis.html#literals');
  addReference('Operadores', 'Aritméticos', 'Somar, subtrair, multiplicar, dividir, obter resto e potência.', '+  -  *  /  //  %  **', 'entrada-expressoes', 'Ignorar precedência ou confundir / com //.', 'https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations');
  addReference('Operadores', 'Comparação', 'Produzir True ou False ao comparar valores.', '==  !=  <  <=  >  >=', 'decisoes', 'Usar = dentro da condição.', 'https://docs.python.org/3/reference/expressions.html#comparisons');
  addReference('Operadores', 'Lógicos', 'Combinar ou negar condições.', 'and   or   not', 'decisoes-multiplas', 'Criar uma expressão longa sem verificar cada parte.', 'https://docs.python.org/3/reference/expressions.html#boolean-operations');
  addReference('Operadores', 'Pertencimento e identidade', 'Testar presença em coleção ou identidade do objeto.', 'in   not in   is   is not', 'listas', 'Usar is para comparar conteúdo de números ou textos.', 'https://docs.python.org/3/reference/expressions.html#membership-test-operations');
  addReference('Controle', 'if / elif / else', 'Escolher um caminho conforme condições.', 'if condicao:\n    ...\nelif outra:\n    ...\nelse:\n    ...', 'decisoes-multiplas', 'Ordenar casos específicos depois de um caso amplo que já captura tudo.', 'https://docs.python.org/3/reference/compound_stmts.html#the-if-statement');
  addReference('Controle', 'match / case', 'Escolher entre padrões ou opções discretas.', 'match opcao:\n    case "a": ...\n    case _: ...', 'decisoes-multiplas', 'Usar match para uma comparação simples que if expressa melhor.', 'https://docs.python.org/3/reference/compound_stmts.html#the-match-statement');
  addReference('Controle', 'for', 'Percorrer os elementos de um iterável.', 'for item in itens:\n    ...', 'for-acumuladores', 'Alterar a coleção durante a própria iteração.', 'https://docs.python.org/3/reference/compound_stmts.html#the-for-statement');
  addReference('Controle', 'while', 'Repetir enquanto uma condição for verdadeira.', 'while condicao:\n    ...', 'while', 'Não modificar o estado que permite terminar o laço.', 'https://docs.python.org/3/reference/compound_stmts.html#the-while-statement');
  addReference('Controle', 'break / continue / pass', 'Interromper o laço, avançar para a próxima volta ou manter um bloco vazio provisório.', 'break   continue   pass', 'controle-lacos', 'Usar pass esperando que ele interrompa ou pule a iteração.', 'https://docs.python.org/3/reference/simple_stmts.html');
  addReference('Funções', 'def / return', 'Definir uma função e devolver seu resultado.', 'def calcular(valor):\n    return valor * 2', 'funcoes', 'Imprimir dentro da função quando o restante do programa precisa receber o valor.', 'https://docs.python.org/3/reference/compound_stmts.html#function-definitions');
  addReference('Funções', '*args / **kwargs', 'Receber quantidades variáveis de argumentos posicionais ou nomeados.', 'def f(*args, **kwargs): ...', 'argumentos-flexiveis', 'Usar por hábito quando parâmetros explícitos seriam mais claros.', 'https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists');
  addReference('Funções', 'lambda', 'Criar uma função anônima curta, geralmente passada a outra função.', 'key=lambda item: item["prioridade"]', 'funcoes-valores', 'Escrever lógica complexa e ilegível dentro da lambda.', 'https://docs.python.org/3/reference/expressions.html#lambdas');
  addReference('Módulos', 'import / from', 'Disponibilizar um módulo ou nomes selecionados no arquivo atual.', 'import pathlib\nfrom pathlib import Path', 'modulos', 'Importar um recurso sem saber de qual módulo ele veio.', 'https://docs.python.org/3/reference/simple_stmts.html#the-import-statement');
  addReference('Erros', 'try / except / else / finally', 'Tratar exceções previstas e executar etapas condicionais ou finais.', 'try:\n    ...\nexcept ValueError:\n    ...', 'excecoes', 'Capturar Exception sem investigar ou distinguir falhas.', 'https://docs.python.org/3/reference/compound_stmts.html#the-try-statement');
  addReference('Erros', 'raise', 'Sinalizar que uma regra ou operação não pode continuar.', 'raise ValueError("prioridade inválida")', 'excecoes', 'Usar exceção para controlar um fluxo comum que uma condição resolveria.', 'https://docs.python.org/3/reference/simple_stmts.html#the-raise-statement');
  addReference('Objetos', 'class', 'Definir um tipo com estado e comportamento relacionados.', 'class Atendimento:\n    ...', 'classes-objetos', 'Criar classe que apenas agrupa funções sem estado relacionado.', 'https://docs.python.org/3/reference/compound_stmts.html#class-definitions');
  addReference('Objetos', '@property', 'Expor acesso controlado a um atributo sem mudar a forma de leitura.', '@property\ndef prioridade(self): ...', 'encapsulamento-composicao', 'Adicionar propriedades sem regra ou necessidade.', 'https://docs.python.org/3/library/functions.html#property');
  addReference('Avançado', 'yield', 'Produzir valores sob demanda e preservar o estado da função.', 'def ids():\n    yield 1', 'iteradores-generators', 'Esperar uma lista pronta; uma chamada com yield devolve um generator.', 'https://docs.python.org/3/reference/simple_stmts.html#the-yield-statement');
  addReference('Avançado', 'with', 'Usar um context manager e garantir a saída do contexto.', 'with caminho.open() as arquivo:\n    dados = arquivo.read()', 'arquivos-texto', 'Usar o recurso fora do bloco depois que ele foi fechado.', 'https://docs.python.org/3/reference/compound_stmts.html#the-with-statement');
  addReference('Avançado', 'async / await', 'Definir e coordenar corrotinas durante esperas cooperativas.', 'async def buscar():\n    resposta = await cliente.get(url)', 'asyncio', 'Usar await fora de contexto assíncrono ou para trabalho de CPU.', 'https://docs.python.org/3/reference/compound_stmts.html#coroutines');
  addReference('Avançado', 'Decorators', 'Transformar ou registrar função/classe usando a sintaxe @.', '@decorador\ndef funcao(): ...', 'closures-decorators', 'Aplicar um decorator sem compreender qual objeto ele devolve.', 'https://docs.python.org/3/reference/compound_stmts.html#function-definitions');
  addReference('Avançado', 'Comprehensions', 'Construir coleções por transformação e filtro de um iterável.', '[x * 2 for x in valores if x > 0]', 'colecoes-aninhadas', 'Empilhar laços e condições até perder legibilidade.', 'https://docs.python.org/3/reference/expressions.html#displays-for-lists-sets-and-dictionaries');

  const builtins = [
    ['abs','valor absoluto','abs(numero)','entrada-expressoes'],['aiter','iterador assíncrono','aiter(objeto)','asyncio'],['all','True se todos forem verdadeiros','all(iteravel)','funcoes-valores'],['anext','próximo item assíncrono','await anext(iterador)','asyncio'],['any','True se algum for verdadeiro','any(iteravel)','funcoes-valores'],['ascii','representação ASCII escapada','ascii(objeto)','strings'],['bin','texto binário de inteiro','bin(inteiro)','entrada-expressoes'],['bool','converter/testar valor lógico','bool(valor)','decisoes'],['breakpoint','abrir ponto de depuração','breakpoint()','logging-debugger'],['bytearray','sequência mutável de bytes','bytearray(dados)','arquivos-formatos'],['bytes','sequência imutável de bytes','bytes(dados)','arquivos-formatos'],['callable','testar se pode ser chamado','callable(objeto)','funcoes-valores'],['chr','caractere de um ponto Unicode','chr(numero)','strings'],['classmethod','método ligado à classe','@classmethod','classes-avancadas'],['compile','compilar fonte para objeto de código','compile(fonte, nome, modo)','iteradores-generators'],['complex','criar número complexo','complex(real, imag)','entrada-expressoes'],['delattr','remover atributo','delattr(objeto, nome)','classes-avancadas'],['dict','criar/converter dicionário','dict(...)','dicionarios'],['dir','listar nomes acessíveis','dir(objeto)','logging-debugger'],['divmod','quociente e resto juntos','divmod(a, b)','entrada-expressoes'],['enumerate','índice e item ao iterar','enumerate(itens, start=0)','listas'],['eval','avaliar expressão Python — risco','eval(texto)','iteradores-generators'],['exec','executar código Python — risco','exec(texto)','iteradores-generators'],['filter','filtrar por função','filter(funcao, iteravel)','funcoes-valores'],['float','criar/converter decimal binário','float(valor)','entrada-expressoes'],['format','formatar valor','format(valor, especificacao)','strings'],['frozenset','conjunto imutável','frozenset(iteravel)','tuplas-conjuntos'],['getattr','obter atributo por nome','getattr(objeto, nome, padrao)','classes-avancadas'],['globals','dicionário do escopo global','globals()','parametros-escopo'],['hasattr','testar existência de atributo','hasattr(objeto, nome)','classes-avancadas'],['hash','obter hash do objeto','hash(objeto)','tuplas-conjuntos'],['help','abrir ajuda interativa','help(objeto)','ambiente'],['hex','texto hexadecimal de inteiro','hex(inteiro)','entrada-expressoes'],['id','identidade do objeto na execução','id(objeto)','listas-operacoes'],['input','ler uma linha digitada','input("Mensagem: ")','entrada-expressoes'],['int','criar/converter inteiro','int(valor)','entrada-expressoes'],['isinstance','testar o tipo de instância','isinstance(objeto, Tipo)','classes-objetos'],['issubclass','testar relação entre classes','issubclass(A, B)','classes-avancadas'],['iter','obter iterador','iter(iteravel)','iteradores-generators'],['len','quantidade de itens','len(objeto)','strings'],['list','criar/converter lista','list(iteravel)','listas'],['locals','dicionário do escopo local','locals()','parametros-escopo'],['map','aplicar função a itens','map(funcao, iteravel)','funcoes-valores'],['max','maior item','max(iteravel)','for-acumuladores'],['memoryview','visão sem cópia de bytes','memoryview(dados)','iteradores-generators'],['min','menor item','min(iteravel)','for-acumuladores'],['next','obter próximo item','next(iterador, padrao)','iteradores-generators'],['object','classe-base dos objetos','object()','classes-objetos'],['oct','texto octal de inteiro','oct(inteiro)','entrada-expressoes'],['open','abrir arquivo','open(caminho, modo, encoding=...)','arquivos-texto'],['ord','ponto Unicode do caractere','ord(caractere)','strings'],['pow','potência, opcionalmente modular','pow(base, exp[, mod])','entrada-expressoes'],['print','exibir valores','print(*valores, sep=" ", end="\\n")','primeiro-programa'],['property','criar atributo controlado','property(getter, setter)','encapsulamento-composicao'],['range','sequência aritmética imutável','range(inicio, fim, passo)','for-acumuladores'],['repr','representação de diagnóstico','repr(objeto)','strings'],['reversed','iterar em ordem inversa','reversed(sequencia)','listas-operacoes'],['round','arredondar conforme regras do tipo','round(numero, casas)','entrada-expressoes'],['set','criar/converter conjunto','set(iteravel)','tuplas-conjuntos'],['setattr','definir atributo por nome','setattr(objeto, nome, valor)','classes-avancadas'],['slice','criar objeto de fatiamento','slice(inicio, fim, passo)','strings'],['sorted','produzir nova lista ordenada','sorted(iteravel, key=..., reverse=...)','listas-operacoes'],['staticmethod','método sem instância/classe implícita','@staticmethod','classes-avancadas'],['str','criar/converter texto','str(valor)','strings'],['sum','somar itens numéricos','sum(iteravel, start=0)','for-acumuladores'],['super','acessar implementação da superclasse','super()','classes-avancadas'],['tuple','criar/converter tupla','tuple(iteravel)','tuplas-conjuntos'],['type','obter tipo/criar classe dinamicamente','type(objeto)','valores-variaveis'],['vars','obter namespace de objeto','vars(objeto)','classes-avancadas'],['zip','agrupar itens paralelos','zip(iteravel1, iteravel2, strict=False)','colecoes-aninhadas'],['__import__','mecanismo de importação de baixo nível','__import__(nome)','modulos']
  ];
  builtins.forEach(([name, purpose, syntax, learn]) => addReference(
    'Built-ins', `${name}()`, purpose, syntax, learn,
    ['eval','exec','__import__'].includes(name) ? 'Usar com entrada não confiável ou quando uma solução direta é mais segura.' : 'Não conferir o tipo de entrada, retorno ou caso vazio.',
    `https://docs.python.org/3/library/functions.html#${name}`
  ));

  const methodGroups = [
    ['Métodos de str','Texto: busca, limpeza, divisão e substituição.','lower upper strip split join replace find startswith endswith isdigit','strings'],
    ['Métodos de list','Coleção mutável ordenada.','append extend insert remove pop clear index count sort reverse copy','listas-operacoes'],
    ['Métodos de dict','Mapeamento de chaves para valores.','get keys values items update pop popitem setdefault copy','dicionarios'],
    ['Métodos de set','Unicidade e operações de conjuntos.','add remove discard union intersection difference issubset','tuplas-conjuntos'],
    ['Exceções comuns','Falhas que podem ser identificadas e tratadas com precisão.','SyntaxError IndentationError NameError TypeError ValueError KeyError IndexError FileNotFoundError OSError ZeroDivisionError','excecoes']
  ];
  methodGroups.forEach(([name,purpose,syntax,learn]) => addReference('Tipos e exceções',name,purpose,syntax,learn,'Aplicar um método de outro tipo ou capturar uma exceção ampla demais.','https://docs.python.org/3/library/stdtypes.html'));

  const addModule = (category, name, purpose, caution = '', anchor = name) => app.stdlib.push({
    category, name, purpose, caution,
    official: `https://docs.python.org/3/library/${anchor}.html`
  });
  [
    ['Sistema e arquivos','pathlib','Caminhos orientados a objetos; escolha principal para os laboratórios.','Confirme diretório de trabalho e existência antes de alterar.'],
    ['Sistema e arquivos','os','Interfaces do sistema, ambiente e operações de baixo nível.','Para caminhos, prefira pathlib; algumas funções dependem do sistema.'],
    ['Sistema e arquivos','sys','Interpretador, argumentos e saída/entrada do processo.','Detalhes podem depender da implementação.'],
    ['Sistema e arquivos','shutil','Operações de alto nível com arquivos e árvores.','Copiar, mover e remover exigem alvo controlado.'],
    ['Sistema e arquivos','tempfile','Arquivos e diretórios temporários seguros.','Observe o ciclo de vida do recurso.'],
    ['Sistema e arquivos','subprocess','Executar e coordenar outros processos.','Não monte comando de shell com entrada não confiável.'],
    ['Sistema e arquivos','glob','Encontrar caminhos por padrões.','Revise os alvos antes de uma operação em lote.'],
    ['Dados e formatos','json','Ler e escrever JSON.','JSON não preserva todos os tipos Python.'],
    ['Dados e formatos','csv','Ler e escrever dados delimitados.','Abra com newline="" e codificação explícita quando indicado.'],
    ['Dados e formatos','sqlite3','Banco SQLite embutido.','Use parâmetros; nunca concatene entrada em SQL.'],
    ['Dados e formatos','configparser','Arquivos de configuração no formato INI.','Não armazene segredos no repositório.'],
    ['Dados e formatos','tomllib','Leitura de TOML.','O módulo nativo lê TOML; escrita exige outra solução.'],
    ['Dados e formatos','pickle','Serialização específica de Python.','Nunca carregue pickle de fonte não confiável.'],
    ['Matemática','math','Funções matemáticas para números reais.'],
    ['Matemática','statistics','Médias, medianas, dispersão e outras estatísticas.'],
    ['Matemática','decimal','Aritmética decimal com controle de precisão.','Construa Decimal a partir de texto quando a representação decimal exata importar.'],
    ['Matemática','fractions','Números racionais exatos.'],
    ['Matemática','random','Pseudoaleatoriedade para simulação e jogos.','Não use para senhas, tokens ou segurança.'],
    ['Matemática','secrets','Aleatoriedade apropriada para segredos.'],
    ['Datas','datetime','Datas, horários, diferenças e fusos.','Diferencie valores com e sem informação de fuso.'],
    ['Datas','time','Tempo de sistema e medição.','Para medir duração, prefira monotonic/perf_counter.'],
    ['Datas','calendar','Operações e apresentação de calendários.'],
    ['Datas','zoneinfo','Fusos horários da base IANA.','A disponibilidade dos dados de fuso depende do sistema/pacote tzdata.'],
    ['Estruturas e iteração','collections','Contêineres especializados como Counter, defaultdict e deque.'],
    ['Estruturas e iteração','itertools','Iteradores eficientes e combinatórios.','Resultados podem ser consumidos uma única vez.'],
    ['Estruturas e iteração','functools','Ferramentas para funções, cache e redução.'],
    ['Estruturas e iteração','heapq','Fila de prioridade baseada em heap.'],
    ['Estruturas e iteração','bisect','Busca e inserção em listas ordenadas.'],
    ['Estruturas e iteração','enum','Conjuntos nomeados de constantes.'],
    ['Texto','re','Expressões regulares.','Não escolha regex quando métodos simples de texto resolvem melhor.'],
    ['Texto','string','Constantes e ferramentas de texto.'],
    ['Texto','textwrap','Quebra, recuo e ajuste de texto.'],
    ['Texto','difflib','Comparação aproximada de sequências e textos.'],
    ['Texto','unicodedata','Propriedades e normalização Unicode.'],
    ['Diagnóstico e CLI','logging','Registro configurável de eventos.','Não registre senhas, tokens ou dados pessoais.'],
    ['Diagnóstico e CLI','argparse','Interfaces de linha de comando.'],
    ['Diagnóstico e CLI','traceback','Leitura e formatação de rastreamentos.'],
    ['Diagnóstico e CLI','pdb','Depurador interativo nativo.'],
    ['Diagnóstico e CLI','timeit','Medição controlada de pequenos trechos.'],
    ['Concorrência','threading','Threads no mesmo processo.','Adequado sobretudo a esperas de I/O; estado compartilhado exige cuidado.'],
    ['Concorrência','multiprocessing','Processos separados para paralelismo e isolamento.','Há custo de criação e transferência de dados.'],
    ['Concorrência','concurrent.futures','Interface de alto nível para pools de threads/processos.'],
    ['Concorrência','asyncio','Concorrência cooperativa com event loop.','É útil para muitas esperas; não acelera automaticamente trabalho de CPU.'],
    ['Concorrência','queue','Filas seguras para coordenação entre threads.'],
    ['Rede e Internet','urllib','URLs e requisições HTTP na biblioteca padrão.','API mais baixa que Requests/HTTPX.'],
    ['Rede e Internet','http','Cliente, servidor e elementos de HTTP.','Não exponha servidor didático sem compreender rede e segurança.'],
    ['Rede e Internet','email','Construção e análise de mensagens de e-mail.'],
    ['Rede e Internet','ipaddress','Endereços e redes IPv4/IPv6.'],
    ['Rede e Internet','socket','Interface de rede de baixo nível.','Exige fundamentos de rede e protocolos.'],
    ['Testes','unittest','Estrutura nativa de testes unitários.'],
    ['Testes','doctest','Verificar exemplos interativos em documentação.'],
    ['Testes','unittest.mock','Substituir dependências em testes.','Mock não deve ocultar uma integração que precisa ser testada.'],
    ['Compactação','zipfile','Criar e ler arquivos ZIP.','Valide nomes/caminhos ao extrair conteúdo não confiável.'],
    ['Compactação','tarfile','Criar e ler arquivos TAR.','A extração de arquivos externos exige filtros e validação.'],
    ['Compactação','compression','Família canônica de compactação introduzida no Python 3.14.','Confira compatibilidade se o projeto também suporta versões anteriores.','compression']
  ].forEach(args => addModule(...args));

  app.externals = [
    {category:'HTTP',name:'Requests',purpose:'Cliente HTTP síncrono com API acessível para o primeiro consumo de serviços.',when:'Depois de funções, exceções, JSON, HTTP e ambiente virtual.',official:'https://requests.readthedocs.io/'},
    {category:'HTTP',name:'HTTPX',purpose:'Cliente HTTP com APIs síncrona e assíncrona e suporte moderno a testes de aplicações.',when:'Quando async ou testes de API realmente forem necessários.',official:'https://www.python-httpx.org/'},
    {category:'Web/API',name:'FastAPI',purpose:'Framework orientado à criação de APIs com type hints e validação.',when:'Use o módulo Backend e APIs com Python e FastAPI do MbB.',official:'https://fastapi.tiangolo.com/',local:'backend-fastapi.html'},
    {category:'Web/API',name:'Flask',purpose:'Framework Web de núcleo pequeno e flexível.',when:'Para aplicações deliberadamente pequenas ou quando o controle explícito da composição for desejado.',official:'https://flask.palletsprojects.com/'},
    {category:'Web/API',name:'Django',purpose:'Framework Web completo com estrutura, ORM, administração e recursos integrados.',when:'Para aplicações Web completas que se beneficiem de convenções e recursos nativos.',official:'https://docs.djangoproject.com/'},
    {category:'Dados',name:'NumPy',purpose:'Arrays multidimensionais e computação numérica vetorizada.',when:'Depois que listas não atenderem ao volume/operações numéricas do problema.',official:'https://numpy.org/doc/stable/'},
    {category:'Dados',name:'pandas',purpose:'Análise e transformação de dados tabulares.',when:'Depois de listas, dicionários, CSV e perguntas claras de análise.',official:'https://pandas.pydata.org/docs/'},
    {category:'Visualização',name:'Matplotlib',purpose:'Visualizações estáticas, animadas e interativas.',when:'Quando um gráfico responder melhor que uma tabela à pergunta de análise.',official:'https://matplotlib.org/stable/'},
    {category:'Desktop',name:'PySide6',purpose:'Bindings oficiais do Qt 6 para interfaces desktop robustas.',when:'Depois de Tkinter, eventos e orientação a objetos.',official:'https://doc.qt.io/qtforpython-6/'},
    {category:'Jogos',name:'Pygame',purpose:'Janela, eventos, superfícies, áudio e loop para jogos 2D.',when:'Depois de funções, objetos, estado e modelo de eventos.',official:'https://www.pygame.org/docs/'},
    {category:'Planilhas',name:'openpyxl',purpose:'Ler e escrever arquivos XLSX quando a planilha é o artefato final.',when:'Depois de arquivos, tabelas e regras de célula/planilha.',official:'https://openpyxl.readthedocs.io/'},
    {category:'Testes',name:'pytest',purpose:'Testes expressivos, fixtures e amplo ecossistema.',when:'Depois de compreender teste e assertions com unittest.',official:'https://docs.pytest.org/'},
    {category:'Mobile',name:'Kivy',purpose:'Interfaces multitoque multiplataforma e empacotamento para Android/iOS.',when:'Trilha experimental; requer ferramentas específicas e não representa o caminho predominante de Android/iOS.',official:'https://kivy.org/doc/stable/'},
    {category:'Mobile',name:'BeeWare/Briefcase',purpose:'Empacotar projetos Python como aplicações nativas para desktop, mobile e Web.',when:'Trilha experimental; suporte de pacotes e ferramentas varia por plataforma.',official:'https://briefcase.beeware.org/'}
  ];

  app.trails = [
    {id:'automacao',title:'Automação segura',status:'ready',level:'Intermediário',prereqs:'Arquivos, pathlib, CSV/JSON, exceções e logging.',product:'Organizador de documentos com simulação, validação de conflitos e plano registrado antes da aplicação.',phases:['Mapear uma pasta de laboratório sem alterar nada','Gerar plano de renomeação','Validar conflitos','Executar somente com opção explícita','Registrar cada resultado'],code:'from pathlib import Path\n\npasta = Path("laboratorio")\nfor caminho in sorted(pasta.iterdir()):\n    print(f"SIMULAÇÃO: manter {caminho.name}")',download:'../downloads/python/automacao-segura.zip',verification:'Projeto completo: quatro testes e fluxo simulação → aplicação verificados.'},
    {id:'desktop',title:'Aplicação desktop',status:'ready',level:'Intermediário',prereqs:'Funções, módulos, POO, eventos, exceções e SQLite.',product:'Central Horizonte desktop: cadastro, validação, tabela e persistência.',phases:['Janela e primeiro rótulo','Formulário e evento','Validação sem perder dados','Separação entre interface e regra','SQLite e tratamento de falhas','Empacotamento consciente'],code:'import tkinter as tk\n\njanela = tk.Tk()\njanela.title("Central Horizonte")\ntk.Label(janela, text="Atendimentos").pack(padx=24, pady=24)\njanela.mainloop()',download:'../downloads/python/central-desktop.zip',verification:'Regras e persistência foram testadas automaticamente. A janela requer Tkinter e execução local com interface gráfica.'},
    {id:'web-api',title:'Web e APIs',status:'ready',level:'Intermediário',prereqs:'Funções, módulos, JSON, HTTP, typing, ambientes e testes.',product:'API da Central Horizonte, desenvolvida no módulo especializado de FastAPI.',phases:['Distinguir cliente e servidor','Modelar requisição e resposta','Criar rotas e validação','Persistir com banco','Testar e implantar'],local:'backend-fastapi.html',verification:'O percurso completo está no módulo especializado já existente do MbB.'},
    {id:'banco',title:'Banco de Dados',status:'ready',level:'Intermediário',prereqs:'Funções, coleções, exceções e SQL básico.',product:'CRUD SQLite parametrizado de atendimentos.',phases:['Conectar e criar tabela','Inserir com parâmetros','Consultar e transformar linhas','Atualizar estado','Usar transação e fechar com segurança'],lesson:'sqlite',download:'../downloads/python/central-horizonte.zip',verification:'Projeto integrador testado com fechamento e reabertura real do banco.'},
    {id:'dados',title:'Dados e visualização',status:'ready',level:'Intermediário',prereqs:'Coleções, CSV, funções, estatística básica e ambiente virtual.',product:'Relatório de tempo e prioridade dos atendimentos com pandas e Matplotlib.',phases:['Definir a pergunta','Inspecionar dados','Limpar e transformar','Calcular indicadores','Escolher gráfico','Registrar conclusão'],code:'import pandas as pd\n\ndados = pd.read_csv("atendimentos.csv")\nprint(dados.groupby("prioridade")["tempo_min"].mean())',download:'../downloads/python/relatorio-atendimentos.zip',verification:'Três testes aprovados e geração real de CSV, PNG e conclusão textual verificada.'},
    {id:'jogos',title:'Jogos 2D',status:'ready',level:'Intermediário',prereqs:'Funções, objetos, eventos, estado e ambiente virtual.',product:'Jogo de coleta e manutenção preventiva no laboratório.',phases:['Abrir janela','Entender o loop','Ler eventos','Atualizar estado','Renderizar','Adicionar colisão, pontuação e tela final'],code:'import pygame\n\npygame.init()\ntela = pygame.display.set_mode((800, 450))\nativo = True\nwhile ativo:\n    for evento in pygame.event.get():\n        if evento.type == pygame.QUIT:\n            ativo = False\n    tela.fill("midnightblue")\n    pygame.display.flip()\npygame.quit()',download:'../downloads/python/manutencao-2d.zip',verification:'Quatro testes do motor foram aprovados. A janela Pygame requer instalação e execução gráfica local.'},
    {id:'mobile',title:'Mobile com Python',status:'map',level:'Avançando',prereqs:'POO, eventos, ambiente, dependências e empacotamento.',product:'Protótipo avaliado por viabilidade, não promessa de caminho predominante.',phases:['Comparar Kivy e BeeWare','Validar suporte do sistema e pacotes','Criar protótipo mínimo','Testar dispositivo','Avaliar assinatura e distribuição','Comparar com React Native/App Inventor'],note:'Python pode produzir apps móveis, mas Kotlin/Java, Swift e frameworks como React Native são caminhos mais comuns. A escolha depende da equipe, bibliotecas nativas, desempenho e distribuição.'},
    {id:'ia',title:'IA e Machine Learning',status:'map',level:'Avançando',prereqs:'Funções, NumPy/pandas, ambiente, testes e fundamentos de dados.',product:'Preparação técnica e ponte para a área de Inteligência Artificial.',phases:['Formular problema e limite','Preparar dados','Separar treino e avaliação','Construir baseline','Medir e interpretar','Documentar riscos e limitações'],note:'Esta trilha prepara o Python necessário. Fundamentos e uso responsável pertencem à área de IA do MbB.'}
  ];

  app.sources = [
    ['Python 3.14.7','https://www.python.org/downloads/release/python-3147/'],
    ['Referência da linguagem','https://docs.python.org/3/reference/'],
    ['Biblioteca padrão','https://docs.python.org/3/library/'],
    ['Built-ins','https://docs.python.org/3/library/functions.html'],
    ['Empacotamento e ambientes','https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/'],
    ['PEP 8','https://peps.python.org/pep-0008/'],
    ['VS Code para Python','https://code.visualstudio.com/docs/python/python-tutorial']
  ];
})();
