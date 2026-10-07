(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'funcoes', arc: '5. Dividir responsabilidades', number: 16,
      title: 'Crie uma função porque a regra se repete', level: 'Iniciante',
      objective: 'Definir, chamar e testar funções com entrada, processamento e retorno.',
      prereqs: ['Variáveis, decisões, coleções e f-strings'],
      situation: 'A classificação de prioridade foi copiada para cadastro, listagem e relatório. Uma mudança na regra exige corrigir três trechos e pode deixá-los diferentes.',
      need: 'Uma função dá nome a uma responsabilidade. Parâmetros recebem entradas; o corpo processa; return devolve o resultado ao chamador.',
      visual: ['entrada: nível', 'função classificar', 'retorno: texto'],
      steps: [
        {title:'1. Separe cálculo de apresentação',html:'<p><code>def</code> cria a função. O código dentro dela só executa quando a função é chamada. <code>return</code> encerra a chamada e devolve um valor.</p>',code:'def classificar_prioridade(nivel):\n    if nivel == 1:\n        return "alta"\n    if nivel == 2:\n        return "média"\n    if nivel == 3:\n        return "baixa"\n    return "inválida"\n\nresultado = classificar_prioridade(2)\nprint(resultado)',label:'regras.py',output:'média'},
        {title:'2. Reutilize com entradas diferentes',html:'<p>A função não depende de input() nem de print(). Assim, pode ser usada por terminal, interface, API ou teste.</p>',code:'for nivel in (1, 2, 3, 8):\n    print(nivel, classificar_prioridade(nivel))',label:'Chamadas',output:'1 alta\n2 média\n3 baixa\n8 inválida'},
        {title:'3. Saiba o que ocorre sem return explícito',html:'<p>Toda função devolve algo. Se o fluxo termina sem <code>return</code>, o resultado é <code>None</code>. “Função sem retorno” significa, com precisão, sem retorno explícito útil.</p>',code:'def exibir_titulo():\n    print("Central Horizonte")\n\nresultado = exibir_titulo()\nprint(resultado)',label:'Experimento',output:'Central Horizonte\nNone'}
      ],
      expected: 'A regra produz uma classificação para cada nível e pode ser testada sem digitação. A função apenas exibe título retorna None.',
      diagnose: ['None inesperado: um caminho terminou sem return.', 'Código após return no mesmo bloco não é executado.', 'Uma função que lê, calcula, salva e imprime tudo possui responsabilidades demais.'],
      apply: 'Crie calcular_tempo_total(quantidade, minutos_por_item) e gerar_resumo(patrimonio, tempo). A primeira retorna número; a segunda retorna texto. Imprima apenas no programa principal.',
      next: 'parametros-escopo'
    },
    {
      id: 'parametros-escopo', arc: '5. Dividir responsabilidades', number: 17,
      title: 'Controle parâmetros, argumentos e escopo', level: 'Intermediário',
      objective: 'Usar valores padrão, argumentos nomeados e variáveis locais sem dependências invisíveis.',
      prereqs: ['Definição, chamada e retorno de funções'],
      situation: 'O relatório quase sempre mostra estado “aberto”, mas algumas chamadas precisam informar outro estado. A função também não deve depender de uma variável global que o leitor precisa adivinhar.',
      need: 'Parâmetro é o nome na definição; argumento é o valor enviado na chamada. Um padrão representa o caso comum, e argumentos nomeados tornam chamadas longas mais claras.',
      steps: [
        {title:'1. Adicione um padrão depois dos obrigatórios',html:'<p>Parâmetros obrigatórios aparecem antes dos que possuem valor padrão.</p>',code:'def criar_resumo(patrimonio, prioridade, estado="aberto"):\n    return f"{patrimonio} | {prioridade} | {estado}"\n\nprint(criar_resumo("NB-07", "alta"))\nprint(criar_resumo("PC-12", "baixa", estado="concluído"))',label:'relatorios.py',output:'NB-07 | alta | aberto\nPC-12 | baixa | concluído'},
        {title:'2. Prefira dados explícitos',html:'<p>A variável criada dentro da função é local. Ela deixa de ser acessível pelo nome após a chamada. Enviar o valor como argumento reduz dependência oculta.</p>',code:'taxa_padrao = 5\n\ndef calcular_estimativa(minutos, deslocamento):\n    total = minutos + deslocamento\n    return total\n\nprint(calcular_estimativa(30, taxa_padrao))',label:'Escopo',output:'35'},
        {title:'3. Evite padrão mutável',html:'<p>Uma lista padrão seria criada uma vez e compartilhada por chamadas. Use None como sinal e crie uma nova lista dentro.</p>',code:'def adicionar_evidencia(texto, evidencias=None):\n    if evidencias is None:\n        evidencias = []\n    evidencias.append(texto)\n    return evidencias\n\nprint(adicionar_evidencia("LED apagado"))\nprint(adicionar_evidencia("Cabo testado"))',label:'Padrão seguro',output:"['LED apagado']\n['Cabo testado']"}
      ],
      expected: 'O estado padrão aparece quando omitido; argumento nomeado substitui o padrão; cada chamada de adicionar_evidencia recebe nova lista.',
      diagnose: ['TypeError sobre argumento ausente: a chamada não forneceu parâmetro obrigatório.', 'TypeError sobre múltiplos valores: o mesmo parâmetro recebeu argumento posicional e nomeado.', 'UnboundLocalError: um nome local foi usado antes da atribuição; não corrija tornando tudo global.'],
      apply: 'Crie gerar_etiqueta(id_atendimento, setor, estado="aberto", separador=" | "). Chame com padrão, depois com estado e separador nomeados.',
      next: 'argumentos-flexiveis'
    },
    {
      id: 'argumentos-flexiveis', arc: '5. Dividir responsabilidades', number: 18,
      title: 'Use *args e **kwargs só quando a quantidade variar', level: 'Intermediário',
      objective: 'Receber argumentos variáveis e desempacotar coleções sem esconder uma assinatura que deveria ser explícita.',
      prereqs: ['Parâmetros, argumentos, listas, tuplas e dicionários'],
      situation: 'Um relatório pode receber nenhuma, uma ou várias evidências. Um exportador configurável pode receber campos nomeados opcionais.',
      need: '*args reúne posicionais extras em uma tupla; **kwargs reúne nomeados extras em um dicionário. Eles resolvem variação real, não substituem bons nomes.',
      steps: [
        {title:'1. Reúna evidências posicionais',html:'<p>Dentro da função, <code>evidencias</code> é uma tupla e pode ser percorrida.</p>',code:'def resumir_evidencias(*evidencias):\n    if not evidencias:\n        return "Sem evidências"\n    return "; ".join(evidencias)\n\nprint(resumir_evidencias("LED apagado", "fonte testada"))',label:'argumentos.py',output:'LED apagado; fonte testada'},
        {title:'2. Reúna opções nomeadas',html:'<p>Use kwargs quando os nomes variam de forma legítima. Um esquema fixo continua melhor com parâmetros explícitos ou um dicionário validado.</p>',code:'def mostrar_campos(**campos):\n    for nome, valor in campos.items():\n        print(f"{nome}: {valor}")\n\nmostrar_campos(patrimonio="NB-07", estado="aberto")',label:'Opções nomeadas',output:'patrimonio: NB-07\nestado: aberto'},
        {title:'3. Desempacote ao chamar',html:'<p>Um asterisco distribui uma sequência pelos parâmetros posicionais; dois distribuem um dicionário pelos parâmetros nomeados.</p>',code:'def etiqueta(patrimonio, estado):\n    return f"{patrimonio} — {estado}"\n\ndados = ("PC-12", "concluído")\nopcoes = {"patrimonio": "PR-03", "estado": "aberto"}\nprint(etiqueta(*dados))\nprint(etiqueta(**opcoes))',label:'Desempacotamento',output:'PC-12 — concluído\nPR-03 — aberto'}
      ],
      expected: 'args vira tupla, kwargs vira dicionário e o desempacotamento preenche parâmetros compatíveis.',
      diagnose: ['TypeError por chave inesperada: o dicionário possui nome que a função não aceita.', 'A ordem de *args importa; os nomes em **kwargs precisam coincidir.', 'Se sempre existem exatamente dois valores, declare dois parâmetros.'],
      apply: 'Crie uma função registrar_observacoes(id_atendimento, *observacoes) que devolva um dicionário com id e lista de observações.',
      next: 'funcoes-valores'
    },
    {
      id: 'funcoes-valores', arc: '5. Dividir responsabilidades', number: 19,
      title: 'Passe funções como valores sem abusar de lambda', level: 'Intermediário',
      objective: 'Usar funções como argumentos e escolher uma chave de ordenação legível.',
      prereqs: ['Funções, listas de dicionários e sorted()'],
      situation: 'A mesma lista precisa ser ordenada ora por prioridade, ora por patrimônio. Duplicar o algoritmo de ordenação não é necessário.',
      need: 'Funções são objetos e podem ser passadas como valores. sorted chama a função key para obter o critério de cada item.',
      steps: [
        {title:'1. Use uma função nomeada',html:'<p>Não escreva parênteses ao passar a função; <code>chave_prioridade</code> é o objeto função, enquanto <code>chave_prioridade(...)</code> é uma chamada.</p>',code:'atendimentos = [\n    {"id": "AT-105", "prioridade": 3},\n    {"id": "AT-104", "prioridade": 1}\n]\n\ndef chave_prioridade(atendimento):\n    return atendimento["prioridade"]\n\nordenados = sorted(atendimentos, key=chave_prioridade)\nprint(ordenados)',label:'ordenacao.py',output:"[{'id': 'AT-104', 'prioridade': 1}, {'id': 'AT-105', 'prioridade': 3}]"},
        {title:'2. Use lambda apenas para expressão curta',html:'<p>A lambda abaixo cria uma função anônima equivalente para um critério simples. Se precisar de decisões ou explicação, use def.</p>',code:'por_id = sorted(atendimentos, key=lambda item: item["id"])\nprint(por_id)',label:'Lambda contextual',output:"[{'id': 'AT-104', 'prioridade': 1}, {'id': 'AT-105', 'prioridade': 3}]"},
        {title:'3. Reconheça map/filter sem obrigação de usá-los',html:'<p><code>map</code> transforma e <code>filter</code> seleciona por funções. Comprehensions frequentemente ficam mais legíveis em Python; escolha pela clareza.</p>'}
      ],
      expected: 'sorted chama a função de chave para cada registro e devolve nova lista, sem modificar a original.',
      diagnose: ['Se a função for chamada no parâmetro key, ela pode receber argumento errado ou resultado prematuro.', 'A key deve devolver valores comparáveis entre si.', 'Lambda longa reduz legibilidade e testabilidade.'],
      apply: 'Ordene atendimentos por setor com função nomeada e por id com lambda curta. Confirme que a lista original permaneceu na ordem anterior.',
      next: 'modulos'
    },
    {
      id: 'modulos', arc: '5. Dividir responsabilidades', number: 20,
      title: 'Separe o sistema em módulos e pacotes', level: 'Intermediário',
      objective: 'Importar biblioteca padrão, criar um módulo próprio, compreender __name__ e organizar um pacote inicial.',
      prereqs: ['Funções, retorno, escopo, arquivos e pastas'],
      situation: 'central.py já mistura regras, relatórios e entrada. Encontrar uma função exige percorrer o arquivo inteiro e testar uma parte executa todas as perguntas do programa.',
      need: 'Em Python, um arquivo .py pode ser um módulo. import executa o módulo uma vez e disponibiliza seus nomes por um namespace.',
      visual: ['central.py', 'importa regras.py', 'usa classificar()'],
      steps: [
        {title:'1. Importe um módulo da biblioteca padrão',html:'<p><code>import statistics</code> disponibiliza o módulo; o ponto acessa seu recurso e deixa a origem visível.</p>',code:'import statistics\n\ntempos = [20, 30, 10]\nprint(statistics.mean(tempos))',label:'estatisticas.py',output:'20'},
        {title:'2. Crie regras.py',html:'<p>Na mesma pasta de central.py, crie <code>regras.py</code>:</p>',code:'def classificar_prioridade(nivel):\n    nomes = {1: "alta", 2: "média", 3: "baixa"}\n    return nomes.get(nivel, "inválida")',label:'regras.py'},
        {title:'3. Importe no programa principal',html:'<p><code>from regras import ...</code> traz um nome específico. Agora sua origem foi apresentada e o arquivo existe.</p>',code:'from regras import classificar_prioridade\n\nprint(classificar_prioridade(1))',label:'central.py',output:'alta'},
        {title:'4. Proteja a execução principal',html:'<p>Quando um arquivo é executado diretamente, <code>__name__</code> recebe <code>"__main__"</code>. Quando é importado, recebe o nome do módulo. A condição impede que perguntas do programa rodem durante a importação.</p>',code:'def main():\n    nivel = int(input("Prioridade: "))\n    print(classificar_prioridade(nivel))\n\nif __name__ == "__main__":\n    main()',label:'central.py'},
        {title:'5. Pacote vem depois do módulo',html:'<p>Quando houver vários módulos relacionados, crie uma pasta de pacote, como <code>horizonte/</code>, normalmente com <code>__init__.py</code>. Não divida por quantidade de linhas: divida por responsabilidades coesas.</p>'}
      ],
      expected: 'statistics calcula 20; central.py encontra regras.py; importar central não dispara automaticamente o fluxo protegido por __name__.',
      diagnose: ['ModuleNotFoundError: confira nome, pasta atual e interpretador.', 'Import circular: dois módulos dependem um do outro; reveja responsabilidades.', 'Evite from modulo import *: ele esconde a origem dos nomes.'],
      apply: 'Crie relatorios.py com gerar_etiqueta(atendimento) e importe em central.py. Mantenha input/print no programa principal e regras nos módulos.',
      next: 'caminhos'
    }
  );
})();
