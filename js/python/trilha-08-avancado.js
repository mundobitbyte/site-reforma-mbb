(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'iteradores-generators', arc: '10. Aprofundar', number: 35,
      title: 'Entenda iteráveis, iteradores e generators', level: 'Avançando',
      objective: 'Distinguir coleção pronta de produção sob demanda e implementar um generator legível.',
      prereqs: ['Coleções, for, funções, return e métodos especiais'],
      situation: 'Um relatório pode percorrer milhões de linhas. Criar uma lista completa antes de processar aumenta memória e demora o primeiro resultado.',
      need: 'Iterável pode fornecer um iterador; iterador produz o próximo item e se esgota. Uma função com yield cria um generator que preserva seu estado entre produções.',
      visual: ['pedir próximo', 'produzir um item', 'suspender e retomar'],
      steps: [
        {title:'1. Veja o protocolo',html:'<p><code>iter()</code> obtém o iterador; <code>next()</code> pede um item. Quando termina, ocorre StopIteration — o for trata isso internamente.</p>',code:'itens = ["AT-104", "AT-105"]\niterador = iter(itens)\n\nprint(next(iterador))\nprint(next(iterador))',label:'iteracao.py',output:'AT-104\nAT-105'},
        {title:'2. Produza sob demanda com yield',html:'<p>A chamada não executa todo o corpo imediatamente; devolve um generator. Cada iteração retoma depois do último yield.</p>',code:'def gerar_ids(inicio, quantidade):\n    for numero in range(inicio, inicio + quantidade):\n        yield f"AT-{numero}"\n\nfor identificador in gerar_ids(104, 3):\n    print(identificador)',label:'Generator',output:'AT-104\nAT-105\nAT-106'},
        {title:'3. Use expressão geradora quando curta',html:'<p>Parênteses criam uma generator expression; colchetes criariam uma lista pronta.</p>',code:'tempos = (valor * 5 for valor in range(1, 4))\nprint(sum(tempos))\nprint(list(tempos))',label:'Consumo',output:'30\n[]'}
      ],
      expected: 'O generator produz três ids; sum consome o iterador de tempos e a segunda tentativa encontra-o esgotado.',
      diagnose: ['Generator não possui len() geral porque pode não conhecer o total.', 'Depois de consumido, crie outro generator se precisar percorrer novamente.', 'Produção sob demanda não é automaticamente mais rápida; reduz materialização e antecipa o primeiro item.'],
      apply: 'Crie ler_linhas_validas(linhas) que use yield para produzir apenas linhas não vazias, sem construir lista intermediária.',
      next: 'closures-decorators'
    },
    {
      id: 'closures-decorators', arc: '10. Aprofundar', number: 36,
      title: 'Construa closures e só então decorators', level: 'Avançando',
      objective: 'Compreender função interna que preserva contexto e a transformação aplicada pela sintaxe @.',
      prereqs: ['Funções como objetos, escopo, *args/**kwargs e imports'],
      situation: 'Várias operações precisam registrar início e fim sem copiar as mesmas linhas. A função de registro deve envolver outra função preservando sua chamada.',
      need: 'Closure é uma função que mantém acesso ao escopo externo. Decorator recebe um objeto e devolve outro; @ aplica essa transformação ao definir.',
      steps: [
        {title:'1. Crie uma closure',html:'<p><code>criar_prefixo</code> termina, mas a função interna continua acessando prefixo.</p>',code:'def criar_prefixo(prefixo):\n    def formatar(numero):\n        return f"{prefixo}-{numero}"\n    return formatar\n\ngerar_atendimento = criar_prefixo("AT")\nprint(gerar_atendimento(104))',label:'decoradores.py',output:'AT-104'},
        {title:'2. Envolva uma função',html:'<p>O wrapper recebe argumentos variáveis, chama a função original e devolve o resultado. wraps preserva metadados.</p>',code:'from functools import wraps\n\ndef registrar_chamada(funcao):\n    @wraps(funcao)\n    def wrapper(*args, **kwargs):\n        print(f"Início: {funcao.__name__}")\n        resultado = funcao(*args, **kwargs)\n        print(f"Fim: {funcao.__name__}")\n        return resultado\n    return wrapper',label:'Decorator'},
        {title:'3. Aplique com @',html:'<p>A sintaxe equivale a <code>calcular = registrar_chamada(calcular)</code> logo após a definição.</p>',code:'@registrar_chamada\ndef calcular_total(tempos):\n    return sum(tempos)\n\nprint(calcular_total([20, 30]))',label:'Aplicação',output:'Início: calcular_total\nFim: calcular_total\n50'}
      ],
      expected: 'A closure mantém AT; o decorator registra antes/depois e não perde o retorno 50.',
      diagnose: ['Esquecer return resultado muda a função decorada para None.', 'Sem wraps, nome/docstring aparentam ser do wrapper.', 'Decorator não deve esconder efeitos surpreendentes ou engolir exceções.'],
      apply: 'Crie um decorator medir_tentativa que conte chamadas de uma função em closure. Teste que o resultado original continue intacto.',
      next: 'context-managers'
    },
    {
      id: 'context-managers', arc: '10. Aprofundar', number: 37,
      title: 'Defina limites de entrada e saída com context managers', level: 'Avançando',
      objective: 'Compreender o protocolo de contexto e criar um context manager apenas quando houver recurso a preparar e liberar.',
      prereqs: ['with, funções, generators e exceções'],
      situation: 'Uma operação precisa abrir um registro de auditoria no início e garantir a marca de fim mesmo se uma etapa falhar.',
      need: 'Context manager define o que acontece ao entrar e sair de um bloco with. contextlib.contextmanager permite expressar esse ciclo com generator.',
      steps: [
        {title:'1. Construa o ciclo com contextlib',html:'<p>O trecho antes de yield é entrada; o valor produzido pode ser ligado por as; finally garante a saída.</p>',code:'from contextlib import contextmanager\n\n@contextmanager\ndef auditoria(operacao):\n    print(f"Início: {operacao}")\n    try:\n        yield\n    finally:\n        print(f"Fim: {operacao}")\n\nwith auditoria("fechar atendimento"):\n    print("Atualizando registro")',label:'contextos.py',output:'Início: fechar atendimento\nAtualizando registro\nFim: fechar atendimento'},
        {title:'2. Não suprima erro sem decisão explícita',html:'<p>O bloco finally registra a saída, mas a exceção continua a menos que seja tratada. Isso preserva a evidência da falha.</p>',code:'with auditoria("teste com falha"):\n    raise RuntimeError("falha simulada")',label:'Falha controlada',output:'Início: teste com falha\nFim: teste com falha\nRuntimeError: falha simulada'},
        {title:'3. Prefira o context manager pronto',html:'<p>Arquivos, locks e transações já oferecem contexto. Não crie uma abstração própria quando o recurso existente resolve com semântica correta.</p>'}
      ],
      expected: 'Fim aparece com sucesso e falha; a falha simulada continua visível.',
      diagnose: ['Um generator de contextmanager deve produzir exatamente uma vez.', 'Suprimir exceção por acidente dificulta diagnóstico.', 'Liberação deve ocorrer em finally quando precisa ser garantida.'],
      apply: 'Crie um contexto etapa(nome) que registre início/fim e use-o em duas etapas do relatório. Simule erro em uma delas e confirme a saída.',
      next: 'concorrencia-modelos'
    },
    {
      id: 'concorrencia-modelos', arc: '10. Aprofundar', number: 38,
      title: 'Escolha o modelo de concorrência pelo tipo de espera', level: 'Avançando',
      objective: 'Distinguir concorrência, paralelismo, threads, processos e tarefas assíncronas antes de usar APIs.',
      prereqs: ['Funções, exceções, context managers e noção de processo'],
      situation: 'Gerar três relatórios faz o programa esperar arquivos e rede. Outro cálculo de análise mantém a CPU ocupada. Usar “async em tudo” não resolve trabalhos diferentes.',
      need: 'Concorrência organiza progressos sobrepostos; paralelismo executa trabalho simultaneamente. I/O costuma esperar recursos externos; CPU-bound gasta processamento.',
      steps: [
        {title:'1. Compare decisões',html:'<div class="card-grid"><article class="info-card"><strong>Thread</strong><p>Útil para bloquear em I/O dentro de APIs síncronas; compartilha memória e exige coordenação.</p></article><article class="info-card"><strong>Processo</strong><p>Isola memória e pode usar múltiplos núcleos em CPU-bound; possui custo de criação/comunicação.</p></article><article class="info-card"><strong>asyncio</strong><p>Uma tarefa cede controle em await durante espera; exige bibliotecas assíncronas e event loop.</p></article></div>'},
        {title:'2. Faça o teste de escolha',html:'<ol><li>O trabalho passa a maior parte do tempo esperando?</li><li>A biblioteca já é síncrona ou assíncrona?</li><li>Há estado compartilhado?</li><li>O volume justifica complexidade?</li><li>Um fluxo sequencial já atende?</li></ol>'},
        {title:'3. Observe o fluxo async',html:'<div class="visual-flow" aria-label="Modelo de espera cooperativa"><div class="visual-node">Tarefa A</div><div class="visual-arrow">→</div><div class="visual-node">await: espera</div><div class="visual-arrow">→</div><div class="visual-node">Tarefa B avança</div><div class="visual-arrow">→</div><div class="visual-node">A fica pronta</div><div class="visual-arrow">→</div><div class="visual-node">A retoma</div></div>'}
      ],
      expected: 'Você consegue justificar: sequencial por simplicidade; thread para I/O síncrono; processo para CPU; asyncio para muitas esperas com APIs async.',
      diagnose: ['Concorrência introduz ordem variável; teste não pode depender de uma sequência acidental.', 'Compartilhar estado mutável cria condições de corrida.', 'Async não torna função bloqueante automaticamente cooperativa.'],
      apply: 'Classifique quatro tarefas: ler muitos arquivos com API síncrona, calcular imagens pesadas, fazer várias requisições com cliente async e gerar um único relatório pequeno. Justifique inclusive quando manter sequencial.',
      next: 'threads-processos'
    },
    {
      id: 'threads-processos', arc: '10. Aprofundar', number: 39,
      title: 'Use futures para threads e processos com uma interface comum', level: 'Avançando',
      objective: 'Executar tarefas independentes com ThreadPoolExecutor ou ProcessPoolExecutor e coletar resultados/erros.',
      prereqs: ['Modelo de concorrência, funções puras e exceções'],
      situation: 'Quatro arquivos independentes precisam ser lidos. Em outro trabalho, quatro cálculos independentes consomem CPU. A equipe quer uma interface de alto nível para enviar e acompanhar tarefas.',
      need: 'concurrent.futures representa resultados futuros. ThreadPoolExecutor e ProcessPoolExecutor compartilham a API, mas possuem custos e usos diferentes.',
      steps: [
        {title:'1. Simule I/O com pool de threads',html:'<p>O exemplo usa sleep apenas para representar espera controlada. Em um projeto real, a função faria I/O. map preserva a ordem das entradas nos resultados.</p>',code:'from concurrent.futures import ThreadPoolExecutor\nfrom time import sleep\n\ndef consultar(identificador):\n    sleep(0.1)\n    return f"{identificador}: pronto"\n\nwith ThreadPoolExecutor(max_workers=4) as executor:\n    resultados = executor.map(consultar, ["AT-104", "AT-105", "AT-106"])\n    print(list(resultados))',label:'futures.py',output:"['AT-104: pronto', 'AT-105: pronto', 'AT-106: pronto']"},
        {title:'2. Proteja criação de processos',html:'<p>Em plataformas que iniciam novos processos importando o módulo, proteja o ponto de entrada.</p>',code:'from concurrent.futures import ProcessPoolExecutor\n\ndef trabalho_pesado(valor):\n    return sum(numero * numero for numero in range(valor))\n\nif __name__ == "__main__":\n    with ProcessPoolExecutor() as executor:\n        print(list(executor.map(trabalho_pesado, [10, 20])))',label:'processos.py',output:'[285, 2470]'},
        {title:'3. Trate falha ao obter o resultado',html:'<p>Uma exceção dentro da tarefa reaparece quando o resultado do future é obtido. Registre qual entrada falhou e decida se as outras continuam.</p>'}
      ],
      expected: 'Threads devolvem três textos; processos devolvem cálculos 285 e 2470. O bloco with encerra o executor.',
      diagnose: ['Mais workers podem piorar uso de memória/serviço; meça e limite.', 'Objetos enviados a processos precisam ser serializáveis conforme a plataforma.', 'Thread não elimina necessidade de proteger estado compartilhado.'],
      apply: 'Use ThreadPoolExecutor para processar nomes de arquivos fictícios sem alterar arquivos. Faça uma tarefa gerar exceção e registre a entrada correspondente.',
      next: 'asyncio'
    },
    {
      id: 'asyncio', arc: '10. Aprofundar', number: 40,
      title: 'Coordene tarefas assíncronas sem esconder o event loop', level: 'Avançando',
      objective: 'Definir corrotinas, usar await, criar tarefas e executar com asyncio.run.',
      prereqs: ['Funções, exceções e modelo de concorrência'],
      situation: 'O sistema consulta vários serviços e cada requisição passa tempo esperando resposta. Enquanto uma espera, outras podem avançar no mesmo event loop.',
      need: 'async def cria função de corrotina; chamá-la produz coroutine. await suspende a tarefa atual sem bloquear o loop quando a operação é realmente assíncrona.',
      steps: [
        {title:'1. Execute uma corrotina',html:'<p><code>asyncio.run()</code> cria e encerra o event loop no programa de terminal. <code>asyncio.sleep()</code> representa uma espera cooperativa.</p>',code:'import asyncio\n\nasync def consultar(identificador):\n    print(f"Início {identificador}")\n    await asyncio.sleep(0.1)\n    print(f"Fim {identificador}")\n    return identificador\n\nasync def main():\n    resultado = await consultar("AT-104")\n    print(resultado)\n\nasyncio.run(main())',label:'assincrono.py',output:'Início AT-104\nFim AT-104\nAT-104'},
        {title:'2. Crie concorrência explícita',html:'<p><code>gather</code> agenda/aguarda as corrotinas e devolve resultados na ordem fornecida, ainda que a conclusão interna varie.</p>',code:'async def main():\n    resultados = await asyncio.gather(\n        consultar("AT-104"),\n        consultar("AT-105"),\n        consultar("AT-106")\n    )\n    print(resultados)\n\nasyncio.run(main())',label:'Três tarefas',output:"Início AT-104\nInício AT-105\nInício AT-106\nFim AT-104\nFim AT-105\nFim AT-106\n['AT-104', 'AT-105', 'AT-106']"},
        {title:'3. Use biblioteca async de ponta a ponta',html:'<p>Uma chamada HTTP síncrona dentro de async ainda bloqueia. Para rede, use cliente com API assíncrona, timeout, verificação de resposta e tratamento — por exemplo HTTPX, depois de instalar no ambiente virtual.</p>'}
      ],
      expected: 'Os três “Início” aparecem antes dos “Fim”, evidenciando sobreposição de espera. A lista final mantém a ordem dos argumentos.',
      diagnose: ['RuntimeWarning “coroutine was never awaited”: a corrotina foi criada e não aguardada.', 'asyncio.run() não deve ser aninhado dentro de outro loop já ativo.', 'Cancelamento e timeout são parte do contrato de tarefas reais; não deixe espera ilimitada.'],
      apply: 'Crie três corrotinas de laboratório com durações 0.2, 0.1 e 0.3. Preveja ordem de início, fim e resultados; execute e explique a diferença.',
      next: null
    }
  );
})();
