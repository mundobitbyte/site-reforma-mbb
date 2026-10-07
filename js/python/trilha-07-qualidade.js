(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'qualidade-estilo', arc: '9. Qualidade profissional', number: 30,
      title: 'Escreva para a próxima leitura', level: 'Intermediário',
      objective: 'Aplicar legibilidade, PEP 8, docstrings, type hints e refatoração proporcional.',
      prereqs: ['Funções, módulos, coleções e classes'],
      situation: 'O sistema funciona hoje, mas nomes curtos, funções extensas e comentários narrativos tornam arriscada qualquer mudança feita por outra pessoa — ou pelo próprio autor daqui a um mês.',
      need: 'Código é lido mais vezes do que escrito. Estilo consistente, responsabilidades pequenas e documentação pública reduzem o custo de compreender e testar.',
      steps: [
        {title:'1. Dê nomes e responsabilidade claros',html:'<p>PEP 8 orienta estilo; não substitui bom projeto. Prefira snake_case para funções/variáveis, CapWords para classes e constantes em maiúsculas.</p>',code:'PRIORIDADES_VALIDAS = {1, 2, 3}\n\ndef prioridade_valida(valor: int) -> bool:\n    """Retorne True quando o valor representar uma prioridade aceita."""\n    return valor in PRIORIDADES_VALIDAS',label:'regras.py'},
        {title:'2. Entenda o limite de type hints',html:'<p><code>valor: int</code> documenta e ajuda ferramentas estáticas; Python não rejeita automaticamente outro tipo em runtime. A regra ainda precisa validar o dado na fronteira.</p>',code:'print(prioridade_valida(1))\nprint(prioridade_valida("1"))',label:'Experimento',output:'True\nFalse'},
        {title:'3. Refatore preservando comportamento',html:'<p>Antes de mudar estrutura, registre testes. Faça uma alteração pequena, execute os testes e compare. Refatoração melhora o código sem mudar o comportamento observável esperado.</p><ul><li>Extraia responsabilidade repetida.</li><li>Reduza dependências globais.</li><li>Remova comentário que apenas traduz a linha.</li><li>Mantenha docstring nas interfaces públicas que precisam dela.</li></ul>'}
      ],
      expected: 'A função tem nome, contrato e retorno claros; os hints ajudam leitura/ferramenta, enquanto o próprio código determina o comportamento.',
      diagnose: ['Formatar automaticamente não corrige arquitetura ou nomes ruins.', 'Docstring deve explicar contrato/razão, não repetir o nome.', 'Não transforme toda função simples em muitas camadas.'],
      apply: 'Escolha uma função anterior, descreva seu comportamento atual, melhore nomes/estrutura sem mudar o resultado e compare antes/depois.',
      next: 'testes'
    },
    {
      id: 'testes', arc: '9. Qualidade profissional', number: 31,
      title: 'Transforme exemplos em testes repetíveis', level: 'Intermediário',
      objective: 'Criar testes com unittest, reconhecer Arrange–Act–Assert e usar pytest depois da base nativa.',
      prereqs: ['Funções puras, módulos, exceções e terminal'],
      situation: 'Testar prioridade manualmente com 1 não prova os limites. Depois de uma refatoração, a equipe precisa repetir os mesmos casos sem redigitar tudo.',
      need: 'Um teste prepara dados, executa uma unidade e compara resultado com a expectativa. Casos normais, limites e erros documentam o contrato.',
      steps: [
        {title:'1. Crie regras.py',html:'<p>A unidade não lê input nem imprime; recebe e devolve dados.</p>',code:'def classificar_prioridade(nivel):\n    nomes = {1: "alta", 2: "média", 3: "baixa"}\n    if nivel not in nomes:\n        raise ValueError("prioridade inválida")\n    return nomes[nivel]',label:'regras.py'},
        {title:'2. Teste com a biblioteca padrão',html:'<p>Crie <code>test_regras.py</code>. Arrange prepara, Act chama e Assert verifica; eles podem aparecer juntos em teste pequeno.</p>',code:'import unittest\nfrom regras import classificar_prioridade\n\nclass TestPrioridade(unittest.TestCase):\n    def test_nivel_um_e_alta(self):\n        self.assertEqual(classificar_prioridade(1), "alta")\n\n    def test_nivel_invalido_gera_erro(self):\n        with self.assertRaises(ValueError):\n            classificar_prioridade(8)\n\nif __name__ == "__main__":\n    unittest.main()',label:'test_regras.py'},
        {title:'3. Execute sem adivinhar',html:'<p>Na pasta do projeto:</p>',code:'py -m unittest -v\n# ou\npython -m unittest -v',label:'Terminal',output:'test_nivel_invalido_gera_erro ... ok\ntest_nivel_um_e_alta ... ok'},
        {title:'4. pytest entra como pacote externo',html:'<p>Depois de ambiente virtual, <code>pytest</code> reduz cerimônia e oferece fixtures/plugins. A ideia de teste não depende dele. Um equivalente simples é:</p>',code:'import pytest\nfrom regras import classificar_prioridade\n\ndef test_nivel_um_e_alta():\n    assert classificar_prioridade(1) == "alta"\n\ndef test_nivel_invalido_gera_erro():\n    with pytest.raises(ValueError):\n        classificar_prioridade(8)',label:'test_regras_pytest.py'}
      ],
      expected: 'unittest descobre dois testes e ambos passam. Alterar alta para urgente em regras.py faz um teste falhar com diferença observável.',
      diagnose: ['0 tests: confira nome do arquivo/método e pasta de execução.', 'Falha não é erro do framework; leia valor esperado e obtido.', 'Não teste detalhes internos desnecessários; teste comportamento público.'],
      apply: 'Adicione testes para 2, 3, 0 e texto. Faça um falhar intencionalmente, leia a evidência, restaure a regra e confirme todos verdes.',
      next: 'ambiente-profissional'
    },
    {
      id: 'ambiente-profissional', arc: '9. Qualidade profissional', number: 32,
      title: 'Isole pacotes com venv e registre dependências', level: 'Intermediário',
      objective: 'Criar ambiente virtual, selecionar o interpretador, instalar pacote e registrar dependências sem misturar projetos.',
      prereqs: ['Terminal, módulos, imports e primeiro teste nativo'],
      situation: 'O relatório de dados precisa de pandas e os testes opcionais usarão pytest. Instalar tudo globalmente pode fazer um projeto alterar outro.',
      need: 'venv cria um ambiente isolado por projeto. pip instala distribuições nesse ambiente. Import package e distribution package são conceitos relacionados, mas seus nomes nem sempre coincidem.',
      steps: [
        {title:'1. Crie o ambiente na raiz do projeto',html:'<p>Execute um conjunto adequado ao sistema. A pasta <code>.venv</code> é recriável e não será versionada.</p>',code:'py -m venv .venv\n# alternativa comum em Linux/macOS:\npython3 -m venv .venv',label:'Terminal'},
        {title:'2. Ative e selecione',html:'<p>No Windows PowerShell: <code>.venv\\Scripts\\Activate.ps1</code>. No Prompt: <code>.venv\\Scripts\\activate.bat</code>. Em Linux/macOS: <code>source .venv/bin/activate</code>. Depois selecione esse interpretador no VS Code. Políticas do laboratório podem exigir orientação do responsável.</p>'},
        {title:'3. Instale pelo mesmo interpretador',html:'<p>A forma <code>python -m pip</code> reduz o risco de chamar o pip de outro Python.</p>',code:'python -m pip install pytest\npython -m pip show pytest',label:'Terminal'},
        {title:'4. Registre e restaure',html:'<p>Para um projeto didático simples, registre versões resolvidas em requirements. Em projetos publicados, avalie ferramentas modernas de dependência e <code>pyproject.toml</code>.</p>',code:'python -m pip freeze > requirements.txt\npython -m pip install -r requirements.txt',label:'Terminal'},
        {title:'5. Ignore o ambiente, não a declaração',html:'<p>No arquivo <code>.gitignore</code>:</p>',code:'.venv/\n__pycache__/\n.env\ndados/*.db',label:'.gitignore'}
      ],
      expected: 'O VS Code mostra o interpretador dentro de .venv; python -m pip show pytest encontra o pacote; requirements.txt registra dependências; .venv não entra no Git.',
      diagnose: ['Pacote instalado mas import falha: confira o interpretador selecionado e o python -m pip usado.', 'Não copie .venv entre computadores; recrie pela declaração.', 'requirements.txt gerado por freeze pode incluir dependências transitivas; isso é aceitável aqui, mas não resolve sozinho toda estratégia de empacotamento.'],
      apply: 'Crie o ambiente de um projeto de laboratório, instale apenas pytest, rode os testes, desative com deactivate e confirme que o projeto continua documentado por requirements.txt.',
      next: 'configuracao-git'
    },
    {
      id: 'configuracao-git', arc: '9. Qualidade profissional', number: 33,
      title: 'Separe configuração, segredos e histórico', level: 'Intermediário',
      objective: 'Usar variáveis de ambiente, arquivo de exemplo e Git como ponte sem expor credenciais.',
      prereqs: ['Módulos, os, ambiente virtual e estrutura de projeto'],
      situation: 'A URL de um serviço muda por ambiente e uma chave privada não pode aparecer no repositório. Ao mesmo tempo, outra pessoa precisa saber quais configurações existem.',
      need: 'Configuração varia; segredo concede acesso. O programa lê o ambiente, o repositório guarda apenas um modelo sem valores reais.',
      steps: [
        {title:'1. Leia uma variável do sistema',html:'<p><code>os.getenv()</code> retorna o valor ou um padrão. Para segredo obrigatório, falhe com mensagem clara sem imprimir o próprio segredo.</p>',code:'import os\n\nmodo = os.getenv("HORIZONTE_MODO", "desenvolvimento")\napi_url = os.getenv("HORIZONTE_API_URL", "http://127.0.0.1:8000")\n\nprint(f"Modo: {modo}")\nprint(f"API: {api_url}")',label:'config.py',output:'Modo: desenvolvimento\nAPI: http://127.0.0.1:8000'},
        {title:'2. Documente nomes, não credenciais',html:'<p>Crie <code>.env.example</code> apenas como contrato. Python padrão não lê automaticamente arquivo .env; isso exige configuração/pacote apresentado quando necessário.</p>',code:'HORIZONTE_MODO=desenvolvimento\nHORIZONTE_API_URL=http://127.0.0.1:8000\nHORIZONTE_TOKEN=',label:'.env.example'},
        {title:'3. Faça a ponte para Git/GitHub',html:'<p>Inicie o histórico quando a estrutura mínima existir. Versione código, testes, README, requirements e .env.example. Não versione .env, .venv, banco local ou caches.</p><p><a href="git.html">Abrir o módulo Git e GitHub</a></p>'},
        {title:'4. Estrutura mínima verificável',html:'<pre>python-horizonte/\n├── horizonte/\n│   ├── __init__.py\n│   ├── modelos.py\n│   ├── regras.py\n│   └── repositorio.py\n├── tests/\n│   └── test_regras.py\n├── dados/\n├── central.py\n├── .env.example\n├── .gitignore\n├── README.md\n└── requirements.txt</pre>'}
      ],
      expected: 'Sem variável definida, o programa usa padrões não secretos. O arquivo de exemplo documenta nomes. O .gitignore impede artefatos locais.',
      diagnose: ['Nunca mostre token em log ou mensagem de erro.', 'Remover segredo do arquivo atual não o remove do histórico Git; se vazou, revogue/rotacione.', 'Variável ausente e valor vazio podem exigir tratamentos diferentes.'],
      apply: 'Crie .env.example e .gitignore do projeto. Execute git status no módulo especializado e confirme que .env/.venv não aparecem para commit.',
      next: 'projeto-integrador'
    },
    {
      id: 'projeto-integrador', arc: '9. Qualidade profissional', number: 34,
      title: 'Projeto integrador — Central Horizonte', level: 'Intermediário',
      objective: 'Integrar entrada, validação, funções, coleções, módulos, persistência, exceções, testes e documentação em um sistema de terminal.',
      prereqs: ['Aulas 1 a 33; SQLite pode ser trocado por JSON se ainda não tiver sido concluído'],
      situation: 'A Escola Horizonte precisa abandonar registros dispersos sem adotar uma solução maior do que sua realidade. O primeiro produto completo será uma aplicação de terminal testável e persistente.',
      need: 'O projeto não acrescenta conceitos mágicos. Ele reúne o que já foi construído, distribui responsabilidades e produz evidências de funcionamento.',
      steps: [
        {title:'1. Defina o produto e os limites',html:'<ul><li>Cadastrar atendimento fictício.</li><li>Listar e filtrar por estado.</li><li>Concluir atendimento existente.</li><li>Persistir em SQLite parametrizado ou JSON.</li><li>Recusar prioridade/estado inválidos.</li><li>Registrar erros técnicos sem dados sensíveis.</li><li>Ter testes das regras.</li></ul><p>Não inclua autenticação, rede ou interface gráfica nesta versão.</p>'},
        {title:'2. Separe responsabilidades',html:'<ul><li><code>modelos.py</code>: Atendimento.</li><li><code>regras.py</code>: validações/transições.</li><li><code>repositorio.py</code>: persistência.</li><li><code>relatorios.py</code>: textos de saída.</li><li><code>central.py</code>: menu e coordenação.</li><li><code>tests/</code>: contrato das regras.</li></ul>'},
        {title:'3. Construa em incrementos executáveis',html:'<ol><li>Menu que abre e sai.</li><li>Cadastro em memória.</li><li>Listagem.</li><li>Validações e testes.</li><li>Persistência.</li><li>Tratamento específico e logging.</li><li>README com instalação, execução e testes.</li></ol><p>Ao final de cada incremento, execute um cenário normal e um limite.</p>'},
        {title:'4. Use uma matriz de aceite',html:'<div class="mini-grid"><article class="mini-card"><strong>Cadastro válido</strong><p>gera id, preserva campos e persiste.</p></article><article class="mini-card"><strong>Dado inválido</strong><p>explica sem perder o processo.</p></article><article class="mini-card"><strong>Reabertura</strong><p>restaura dados persistidos.</p></article><article class="mini-card"><strong>Teste</strong><p>regras passam sem input/print.</p></article><article class="mini-card"><strong>Falha técnica</strong><p>é registrada com diagnóstico.</p></article><article class="mini-card"><strong>Documentação</strong><p>outra pessoa consegue executar.</p></article></div>'},
        {title:'5. Entrega mínima',html:'<p>Entregue código, testes, README, requirements (mesmo vazio de externos, se adotado pelo professor), .gitignore e uma amostra fictícia. Não entregue .venv, segredo ou banco com dados reais.</p><p><a href="../downloads/python/central-horizonte.zip" download>Baixar projeto completo de referência (.zip)</a></p>'}
      ],
      expected: 'Uma pessoa seguindo o README instala/seleciona Python, executa o sistema, cadastra/lista/conclui, fecha, reabre e encontra os dados. Os testes passam e uma entrada inválida não derruba o programa.',
      diagnose: ['Se o menu conhece SQL, a separação de responsabilidades vazou.', 'Se testes precisam simular digitação para toda regra, a lógica está acoplada à interface.', 'Se um conceito novo parecer necessário, registre a necessidade e só o adicione depois de ensiná-lo.'],
      apply: 'Faça a auditoria final por três perspectivas: especialista Python, professor e iniciante. Registre problema, evidência, decisão e reteste; não marque “concluído” apenas porque abriu uma vez.',
      next: 'iteradores-generators'
    }
  );
})();
