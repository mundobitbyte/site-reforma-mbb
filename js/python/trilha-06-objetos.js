(() => {
  'use strict';
  const app = window.pythonMbb;

  app.lessons.push(
    {
      id: 'classes-objetos', arc: '8. Modelar e organizar', number: 27,
      title: 'Crie objetos quando dados e regras pertencem juntos', level: 'Intermediário',
      objective: 'Distinguir classe e instância e criar atributos, métodos e inicialização.',
      prereqs: ['Funções, dicionários, módulos e validação'],
      situation: 'Dicionários representam bem os atendimentos, mas qualquer trecho pode gravar prioridade 99 ou esquecer um campo. As regras que mantêm um atendimento válido estão dispersas.',
      need: 'Uma classe define um novo tipo; cada instância é um objeto desse tipo. Atributos guardam estado e métodos executam comportamentos relacionados.',
      visual: ['classe Atendimento', 'cria instâncias', 'AT-104 e AT-105'],
      steps: [
        {title:'1. Defina e instancie',html:'<p><code>__init__</code> participa da inicialização. <code>self</code> referencia a instância que recebeu a chamada.</p>',code:'class Atendimento:\n    def __init__(self, identificador, patrimonio, prioridade):\n        self.identificador = identificador\n        self.patrimonio = patrimonio\n        self.prioridade = prioridade\n        self.estado = "aberto"\n\n    def resumo(self):\n        return f"{self.identificador} | {self.patrimonio} | {self.estado}"\n\nprimeiro = Atendimento("AT-104", "NB-07", 1)\nsegundo = Atendimento("AT-105", "PC-12", 3)\nprint(primeiro.resumo())\nprint(segundo.resumo())',label:'modelos.py',output:'AT-104 | NB-07 | aberto\nAT-105 | PC-12 | aberto'},
        {title:'2. Faça o comportamento alterar o próprio estado',html:'<p>O método mantém a transição junto do objeto. A chamada usa a instância antes do ponto.</p>',code:'class Atendimento:\n    # mantenha __init__ e resumo anteriores\n    def concluir(self):\n        self.estado = "concluído"\n\nprimeiro.concluir()\nprint(primeiro.resumo())\nprint(segundo.resumo())',label:'Acrescente o método',output:'AT-104 | NB-07 | concluído\nAT-105 | PC-12 | aberto'},
        {title:'3. Não transforme todo dicionário em classe',html:'<p>Use classe quando identidade, invariantes e comportamento relacionado justificarem. Para simples troca de dados, dicionário, tupla ou dataclass podem ser suficientes.</p>'}
      ],
      expected: 'Duas instâncias mantêm estados independentes. Concluir primeiro não altera segundo.',
      diagnose: ['AttributeError: o atributo/método não existe naquela instância ou nome.', 'Esquecer self na definição desloca os argumentos.', '__init__ inicializa; não é normalmente chamado diretamente pelo usuário da classe.'],
      apply: 'Crie Equipamento com patrimonio, tipo, sala e estado, além de mover_para(nova_sala) e resumo(). Crie duas instâncias e demonstre independência.',
      next: 'encapsulamento-composicao'
    },
    {
      id: 'encapsulamento-composicao', arc: '8. Modelar e organizar', number: 28,
      title: 'Proteja invariantes e componha objetos', level: 'Intermediário',
      objective: 'Aplicar encapsulamento por convenção, propriedades e composição antes de herança.',
      prereqs: ['Classes, instâncias, atributos, métodos e exceções'],
      situation: 'Um atendimento só pode ter prioridade 1, 2 ou 3. Além disso, ele pertence a um equipamento que tem seus próprios dados e comportamento.',
      need: 'Invariante é uma condição que deve continuar verdadeira. Uma property controla a atribuição; composição expressa “tem um”.',
      steps: [
        {title:'1. Valide a prioridade em uma property',html:'<p>O sublinhado em <code>_prioridade</code> comunica uso interno por convenção. O setter valida toda atribuição feita pela interface pública.</p>',code:'class Atendimento:\n    def __init__(self, identificador, prioridade):\n        self.identificador = identificador\n        self.prioridade = prioridade\n\n    @property\n    def prioridade(self):\n        return self._prioridade\n\n    @prioridade.setter\n    def prioridade(self, valor):\n        if valor not in (1, 2, 3):\n            raise ValueError("prioridade deve ser 1, 2 ou 3")\n        self._prioridade = valor\n\nchamado = Atendimento("AT-104", 1)\nprint(chamado.prioridade)',label:'invariantes.py',output:'1'},
        {title:'2. Use composição para “atendimento tem equipamento”',html:'<p>Equipamento existe independentemente; Atendimento recebe uma instância e delega a ela os dados do patrimônio.</p>',code:'class Equipamento:\n    def __init__(self, patrimonio, sala):\n        self.patrimonio = patrimonio\n        self.sala = sala\n\nclass Atendimento:\n    def __init__(self, identificador, equipamento):\n        self.identificador = identificador\n        self.equipamento = equipamento\n\nnotebook = Equipamento("NB-07", "Sala 12")\nchamado = Atendimento("AT-104", notebook)\nprint(chamado.equipamento.patrimonio)',label:'Composição',output:'NB-07'},
        {title:'3. Não confunda proteção com segredo absoluto',html:'<p>Python usa convenções e descriptors/properties; um sublinhado não torna acesso impossível. A finalidade é preservar a interface e as regras, não ocultar por segurança.</p>'}
      ],
      expected: 'Prioridade válida é armazenada; valor 8 gera ValueError; atendimento acessa o patrimônio do equipamento composto.',
      diagnose: ['Recursão no setter: grave em _prioridade, não em prioridade novamente.', 'Property sem regra pode adicionar complexidade sem benefício.', 'Composição costuma ser mais flexível que herança para relações “tem um”.'],
      apply: 'Modele Solicitante e componha-o em Atendimento. Valide que e-mail não seja vazio com regra simples e mensagem clara.',
      next: 'classes-avancadas'
    },
    {
      id: 'classes-avancadas', arc: '8. Modelar e organizar', number: 29,
      title: 'Use herança, polimorfismo, dataclass e métodos especiais com medida', level: 'Intermediário',
      objective: 'Escolher recursos de POO por uma relação real e reduzir código repetitivo de dados.',
      prereqs: ['Classes, composição, propriedades e funções'],
      situation: 'Atendimentos locais e remotos calculam deslocamento de forma diferente, mas o relatório precisa tratá-los por uma interface comum. Para registros simples, escrever __init__ e __repr__ manualmente virou repetição.',
      need: 'Herança expressa “é um” e polimorfismo permite a mesma operação com implementações diferentes. dataclass gera métodos para classes orientadas a dados.',
      steps: [
        {title:'1. Substitua comportamento por subtipo real',html:'<p>A classe base define a operação; cada subtipo implementa sua regra. O laço chama o mesmo método sem testar o tipo manualmente.</p>',code:'class Atendimento:\n    def custo_deslocamento(self):\n        raise NotImplementedError\n\nclass AtendimentoLocal(Atendimento):\n    def custo_deslocamento(self):\n        return 5\n\nclass AtendimentoRemoto(Atendimento):\n    def custo_deslocamento(self):\n        return 0\n\nfor item in (AtendimentoLocal(), AtendimentoRemoto()):\n    print(item.custo_deslocamento())',label:'polimorfismo.py',output:'5\n0'},
        {title:'2. Use dataclass para um registro de dados',html:'<p><code>@dataclass</code> é um decorator da biblioteca padrão. Ele gera inicialização, representação e comparação conforme os campos.</p>',code:'from dataclasses import dataclass\n\n@dataclass\nclass Evidencia:\n    descricao: str\n    confirmada: bool = False\n\nevidencia = Evidencia("Fonte testada", True)\nprint(evidencia)',label:'dados.py',output:"Evidencia(descricao='Fonte testada', confirmada=True)"},
        {title:'3. Métodos especiais integram protocolos',html:'<p>Nomes como <code>__len__</code>, <code>__str__</code> e <code>__eq__</code> permitem que objetos participem de operações da linguagem. Implemente apenas o protocolo que tem significado para o tipo.</p>',code:'class Fila:\n    def __init__(self, itens):\n        self.itens = list(itens)\n\n    def __len__(self):\n        return len(self.itens)\n\nfila = Fila(["AT-104", "AT-105"])\nprint(len(fila))',label:'Protocolo',output:'2'}
      ],
      expected: 'Objetos diferentes respondem a custo_deslocamento; dataclass gera representação; len usa o protocolo da Fila.',
      diagnose: ['Herança só para reaproveitar linhas cria acoplamento ruim; confirme a substituição “é um”.', 'NotImplementedError mostra que a base não oferece implementação concreta.', 'Type hints em dataclass não validam tipos automaticamente em tempo de execução.'],
      apply: 'Crie AtendimentoHardware e AtendimentoSoftware com estimar_minutos(). Percorra ambos pela mesma interface e justifique por que a herança faz sentido — ou troque por composição se não fizer.',
      next: 'qualidade-estilo'
    }
  );
})();
