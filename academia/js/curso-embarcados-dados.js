(function () {
  'use strict';

  const BASE = '../../../pages/';

  const fonte = (pagina, ancora, rotulo) => ({
    url: `${BASE}${pagina}${ancora ? `#${ancora}` : ''}`,
    rotulo
  });

  const aula = (id, modulo, titulo, pergunta, fontes, atividade) => ({
    id,
    modulo,
    titulo,
    pergunta,
    fontes: Array.isArray(fontes) ? fontes : [fontes],
    tipo: atividade.tipo || 'aula',
    pontos: atividade.pontos || 10,
    contexto: atividade.contexto,
    antes: atividade.antes,
    fazer: atividade.fazer,
    observar: atividade.observar,
    sucesso: atividade.sucesso,
    diagnostico: atividade.diagnostico,
    aplicar: atividade.aplicar,
    projeto: atividade.projeto || '',
    obrigatoria: atividade.obrigatoria !== false
  });

  const modulos = [
    { id: 'emb-00', numero: '0', titulo: 'Comece aqui', pergunta: 'Como estudar, testar e avançar com segurança?', descricao: 'Conheça a jornada, escolha simulador ou hardware e prepare seu ambiente.' },
    { id: 'emb-01', numero: '1', titulo: 'Do circuito ao primeiro sistema programado', pergunta: 'Como fazer um componente físico responder a um programa?', descricao: 'Eletricidade essencial, placa, protoboard, LED protegido e Blink.' },
    { id: 'emb-02', numero: '2', titulo: 'O sistema recebe informações', pergunta: 'Como reagir ao que acontece fora do circuito?', descricao: 'Entradas digitais e analógicas, decisão, buzzer, PWM e Monitor Serial.' },
    { id: 'emb-03', numero: '3', titulo: 'O sistema percebe e mede o ambiente', pergunta: 'Como perceber o ambiente sem depender continuamente de uma pessoa?', descricao: 'LDR, calibração, distância, funções e interpretação das leituras.' },
    { id: 'emb-04', numero: '4', titulo: 'O sistema age e integra componentes', pergunta: 'Como realizar ações mais sofisticadas a partir do que foi percebido?', descricao: 'LED RGB, servo, múltiplas entradas e primeira automação integrada.' },
    { id: 'emb-05', numero: '5', titulo: 'Quando o sistema começa a crescer', pergunta: 'O que precisa mudar quando o programa faz várias coisas?', descricao: 'Tempo não bloqueante, estado, funções, escopo, memória e organização.' },
    { id: 'emb-06', numero: '6', titulo: 'Do Arduino ao ESP32', pergunta: 'Como acrescentar comunicação sem voltar ao começo?', descricao: 'Mudança de plataforma, 3,3 V, GPIO, Bluetooth e Wi-Fi.' },
    { id: 'emb-07', numero: '7', titulo: 'Redes e Internet das Coisas', pergunta: 'Estar conectado ao Wi-Fi já torna o sistema IoT?', descricao: 'HTTP, cliente, servidor, mDNS, MQTT e finalidade real da IoT.' },
    { id: 'emb-08', numero: '8', titulo: 'Visão profissional', pergunta: 'Por que essas tecnologias existem e quando devem ser usadas?', descricao: 'RTOS, protocolos, alimentação, diagnóstico, segurança e proteção de dados.' },
    { id: 'emb-09', numero: '9', titulo: 'Projeto Integrador', pergunta: 'Como transformar conhecimentos separados em uma solução comprovada?', descricao: 'Ambiente Inteligente MbB: requisitos, arquitetura, integração, testes e melhoria autônoma.' },
    { id: 'emb-99', numero: '99', titulo: 'Laboratório de Práticas e Domínio', pergunta: 'Você consegue prever, modificar, diagnosticar e aplicar?', descricao: 'Práticas organizadas por ação, com retirada gradual da ajuda.' }
  ];

  const aulas = [
    aula('emb-00-01', 'emb-00', 'A jornada completa', 'O que você será capaz de fazer ao concluir?', [], {
      contexto: 'Você não estudará componentes soltos: cada etapa aumenta a autonomia até chegar a uma solução IoT funcional.',
      antes: 'Nenhum conhecimento prévio de programação, eletrônica, Arduino ou IoT é exigido.',
      fazer: 'Leia a promessa do curso, percorra os módulos e escolha uma situação cotidiana em que medir, decidir e agir teria utilidade.',
      observar: 'A sequência evolui de circuito local para sistema conectado e responsável.',
      sucesso: 'Você consegue explicar, em uma frase, por que deseja aprender sistemas embarcados.',
      diagnostico: 'Se a jornada parecer abstrata, pense em uma luz automática, um alarme de aproximação ou uma lixeira sem toque.',
      aplicar: 'Registre uma ideia inicial. Ela poderá mudar conforme você aprender.',
      projeto: 'Sua ideia será comparada ao Ambiente Inteligente MbB no final.'
    }),
    aula('emb-00-02', 'emb-00', 'Simulador ou hardware real', 'Qual ambiente é adequado para cada experiência?', fonte('arduino.html', 'intro', 'Fundamentos e preparação para a prática'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'O simulador reduz barreiras no início; a montagem real acrescenta alimentação, contato, tolerâncias e falhas físicas.',
      antes: 'Você precisa apenas de navegador. O kit físico é opcional nas primeiras etapas.',
      fazer: 'Abra o material-base e localize a explicação do Tinkercad. Se tiver hardware, separe Arduino Uno, cabo de dados, protoboard, LEDs, resistores e jumpers sem energizar nada.',
      observar: 'Tinkercad e Arduino IDE têm funções diferentes: simular não é o mesmo que gravar uma placa.',
      sucesso: 'Você sabe dizer onde o circuito será montado e onde o código será executado.',
      diagnostico: 'Cabo que apenas carrega energia pode impedir o envio do programa à placa real.',
      aplicar: 'Escolha o simulador para aprender e o hardware para validar fenômenos físicos quando estiver disponível.'
    }),
    aula('emb-00-03', 'emb-00', 'Método, segurança e evidências', 'Como saber se uma prática realmente funcionou?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'Copiar um circuito não prova compreensão. É preciso prever, testar, observar e explicar.',
      antes: 'Você já escolheu seu ambiente de trabalho.',
      fazer: 'Crie um registro simples com quatro campos: previsão, resultado observado, diferença encontrada e correção realizada.',
      observar: 'O método do curso é Entender → Experimentar → Programar → Aplicar.',
      sucesso: 'Seu registro distingue “funcionou” de uma evidência concreta do funcionamento.',
      diagnostico: 'Ao investigar hardware, verifique nesta ordem: alimentação, GND, ligação, polaridade, pino, configuração, código e leitura/saída.',
      aplicar: 'Use o mesmo registro em todos os checkpoints.',
      projeto: 'Esse registro formará a evidência final do projeto.'
    }),

    aula('emb-01-01', 'emb-01', 'Placa, microcontrolador e circuito', 'Quem executa o programa e por onde a corrente circula?', fonte('arduino.html', 'intro', 'Arduino, sistema embarcado e circuito'), {
      contexto: 'Antes de comandar um LED, é preciso saber quem executa o código e como a energia retorna ao GND.',
      antes: 'Reconheça visualmente Arduino Uno, protoboard, resistor, LED, 5 V e GND.',
      fazer: 'Estude a abertura e desenhe o caminho 5 V/pino → componente → GND. Identifique na imagem a placa e o microcontrolador.',
      observar: 'A placa facilita conexões; o microcontrolador executa as instruções.',
      sucesso: 'Você diferencia placa de desenvolvimento, microcontrolador e sistema embarcado.',
      diagnostico: 'Sem caminho fechado ou GND comum, o circuito não tem referência completa.',
      aplicar: 'Classifique botão como entrada e LED como saída.'
    }),
    aula('emb-01-02', 'emb-01', 'Eletricidade essencial sem decorar fórmulas', 'Por que tensão, corrente e resistência importam agora?', fonte('arduino.html', 'fund-plataforma-aberta', 'Ecossistema Arduino e fundamentos elétricos'), {
      contexto: 'O LED precisa acender sem ser danificado.',
      antes: 'Você já sabe que a corrente percorre um circuito fechado.',
      fazer: 'Compare tensão, corrente e resistência; depois identifique polaridade do LED e a posição do resistor em série.',
      observar: 'O resistor limita corrente; o LED tem orientação; protoboard possui trilhas internas.',
      sucesso: 'Você explica por que não deve ligar um LED diretamente entre 5 V e GND.',
      diagnostico: 'LED invertido não acende; LED sem resistor pode ser danificado.',
      aplicar: 'Antes de energizar, aponte o caminho completo da corrente em sua montagem.'
    }),
    aula('emb-01-03', 'emb-01', 'Primeiro circuito: LED protegido', 'Como montar e validar um circuito simples com segurança?', fonte('arduino.html', 'p1', 'Projeto 1 — LED protegido'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'O primeiro sucesso deve comprovar circuito fechado, polaridade e limitação de corrente.',
      antes: 'Use exatamente os componentes e ligações indicados no material-base.',
      fazer: 'Monte o Projeto 1. Antes de iniciar, preveja o que ocorrerá se o LED for invertido. Execute e registre o resultado.',
      observar: 'O LED fica aceso continuamente porque ainda não é controlado pelo programa.',
      sucesso: 'LED aceso com resistor em série e montagem que você consegue explicar.',
      diagnostico: 'Siga a ordem alimentação → GND → trilhas da protoboard → resistor → polaridade.',
      aplicar: 'Desligue, inverta o LED intencionalmente, observe e restaure a montagem correta.',
      projeto: 'O LED será reutilizado como indicador e atuador nas próximas etapas.'
    }),
    aula('emb-01-04', 'emb-01', 'Blink: o código assume o controle', 'Como o programa faz o LED mudar de estado?', fonte('arduino.html', 'p2', 'Projeto 2 — Blink com LED externo'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Agora o LED deixa de depender apenas da alimentação e passa a obedecer ao programa.',
      antes: 'Mantenha o resistor e a polaridade aprendidos no circuito anterior.',
      fazer: 'Monte e programe o Blink. Depois altere somente um intervalo e preveja o novo ritmo antes de executar.',
      observar: 'setup() prepara; loop() repete; pinMode() configura; digitalWrite() altera a saída.',
      sucesso: 'O LED pisca e a alteração de tempo corresponde à previsão.',
      diagnostico: 'Confira pino físico, número no código, seleção da placa/porta e polaridade.',
      aplicar: 'Crie um padrão de dois piscas rápidos e uma pausa maior.'
    }),
    aula('emb-01-cp', 'emb-01', 'Checkpoint: montar, testar e explicar', 'Você consegue reconstruir o primeiro sistema sem copiar mecanicamente?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'O checkpoint verifica o encadeamento circuito → configuração → comando → comportamento.',
      antes: 'Conclua LED protegido e Blink.',
      fazer: 'Com a referência fechada, descreva componentes e ligações. Reabra apenas para conferir, monte e explique cada linha essencial do código.',
      observar: 'Anote uma diferença entre sua previsão e o resultado real.',
      sucesso: 'Circuito funciona e você justifica resistor, GND, pino, setup() e loop().',
      diagnostico: 'Introduza uma falha segura: troque no código o número do pino. Localize a causa e corrija.',
      aplicar: 'Adapte o padrão de piscadas para representar “pronto” e “alerta”.',
      projeto: 'Você já domina a menor unidade do projeto: uma saída controlada.'
    }),

    aula('emb-02-01', 'emb-02', 'Botão, INPUT_PULLUP e decisão', 'Como o programa reage a uma ação humana?', fonte('arduino.html', 'p3', 'Projeto 3 — Botão com LED'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Uma entrada transforma o circuito em sistema interativo.',
      antes: 'Você já controla uma saída digital.',
      fazer: 'Monte o botão com INPUT_PULLUP. Antes de pressionar, preveja HIGH ou LOW; teste e compare.',
      observar: 'Com INPUT_PULLUP, pressionado costuma ser LOW. = atribui; == compara.',
      sucesso: 'O LED responde ao botão e você explica por que a lógica parece invertida.',
      diagnostico: 'Confira GND do botão, pino lido, pinMode() e condição do if.',
      aplicar: 'Inverta o comportamento: LED aceso solto e apagado ao pressionar.'
    }),
    aula('emb-02-02', 'emb-02', 'Buzzer: outra forma de saída', 'Como o mesmo raciocínio controla um aviso sonoro?', fonte('arduino.html', 'p4', 'Projeto 4 — Buzzer'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Nem toda resposta adequada é visual; sistemas também sinalizam com som.',
      antes: 'Reutilize a ideia de saída digital e GND.',
      fazer: 'Monte o buzzer, execute o código e altere o padrão temporal do aviso.',
      observar: 'Identifique se o componente utilizado é ativo ou passivo e por que isso muda o comando adequado.',
      sucesso: 'O aviso sonoro ocorre no ritmo previsto.',
      diagnostico: 'Verifique tipo do buzzer, polaridade quando indicada, pino e GND.',
      aplicar: 'Faça o botão acionar o buzzer somente enquanto estiver pressionado.'
    }),
    aula('emb-02-03', 'emb-02', 'Potenciômetro, leitura analógica e PWM', 'Como transformar uma medida variável em intensidade?', fonte('arduino.html', 'p5', 'Projeto 5 — Potenciômetro com PWM'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Entradas e saídas nem sempre possuem apenas dois estados.',
      antes: 'Você já distingue entrada de saída e conhece o LED protegido.',
      fazer: 'Monte o projeto, gire o potenciômetro lentamente e relacione analogRead(), map() e analogWrite().',
      observar: 'A leitura do Uno e a faixa PWM são diferentes; map() converte a escala.',
      sucesso: 'O brilho varia de forma coerente e os extremos são reconhecidos.',
      diagnostico: 'Se a leitura não variar, confira terminais do potenciômetro e A0; se o brilho não variar, confirme pino PWM.',
      aplicar: 'Limite o brilho máximo pela metade sem alterar o circuito.'
    }),
    aula('emb-02-04', 'emb-02', 'Monitor Serial: observar antes de adivinhar', 'Como enxergar o que o microcontrolador está lendo?', fonte('arduino.html', 'lab1', 'Laboratório 2 — Conversando com o Arduino'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Sem evidência interna, um valor incorreto pode parecer defeito do LED.',
      antes: 'Reutilize o circuito do potenciômetro.',
      fazer: 'Abra o Monitor Serial na velocidade indicada, mova o potenciômetro e registre mínimo, ponto intermediário e máximo.',
      observar: 'A velocidade do Monitor deve coincidir com Serial.begin().',
      sucesso: 'As leituras mudam e explicam o comportamento do brilho.',
      diagnostico: 'Caracteres ilegíveis normalmente indicam velocidades incompatíveis.',
      aplicar: 'Mostre uma mensagem compreensível junto do número bruto.'
    }),
    aula('emb-02-cp', 'emb-02', 'Checkpoint: entrada → processamento → saída', 'Você consegue criar uma reação e explicar o fluxo?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'O sistema completo recebe algo, decide e produz uma resposta.',
      antes: 'Escolha botão ou potenciômetro como entrada e LED ou buzzer como saída.',
      fazer: 'Desenhe o fluxo, monte o circuito e programe um comportamento diferente dos exemplos literais.',
      observar: 'Registre entrada, regra de decisão e saída produzida.',
      sucesso: 'A saída muda somente quando a condição definida ocorre.',
      diagnostico: 'Teste separadamente a leitura e a saída antes de culpar o if.',
      aplicar: 'Explique uma aplicação cotidiana para sua regra.',
      projeto: 'Esse fluxo será a espinha dorsal dos sensores e automações.'
    }),

    aula('emb-03-01', 'emb-03', 'LDR: medir luz e calibrar', 'Como converter luminosidade em uma decisão confiável?', fonte('arduino.html', 'p6', 'Projeto 6 — Fotoresistor (LDR)'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Uma luz automática precisa perceber o ambiente antes de agir.',
      antes: 'Você já lê valores analógicos e usa o Monitor Serial.',
      fazer: 'Monte o divisor de tensão, registre leituras em claro e escuro e escolha um limite entre os valores observados.',
      observar: 'O limite deve nascer da medição real, não de um número copiado sem teste.',
      sucesso: 'O LED muda de estado em uma faixa coerente de luminosidade.',
      diagnostico: 'Se a resposta estiver invertida, examine a posição de LDR e resistor no divisor e a comparação do código.',
      aplicar: 'Recalibre para outro ambiente e compare os limites.',
      projeto: 'O LDR será o sensor principal do Ambiente Inteligente MbB.'
    }),
    aula('emb-03-02', 'emb-03', 'HC-SR04: distância nasce do tempo', 'Como o sistema calcula distância sem uma régua?', fonte('arduino.html', 'p7', 'Projeto 7 — Sensor de distância'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'O sensor envia um pulso e mede o tempo do eco.',
      antes: 'Você já usa pinos de entrada/saída e observa dados no Monitor Serial.',
      fazer: 'Monte o HC-SR04, execute o código e compare três distâncias simuladas ou medidas.',
      observar: 'TRIG inicia; ECHO informa duração; pulseIn() mede tempo; a fórmula converte para distância.',
      sucesso: 'As medidas acompanham a aproximação e o afastamento do objeto.',
      diagnostico: 'Confira TRIG/ECHO, alimentação, GND e unidade usada na fórmula.',
      aplicar: 'Crie uma condição que sinalize somente abaixo de uma distância escolhida.'
    }),
    aula('emb-03-03', 'emb-03', 'Sensor de ré: medir, interpretar e sinalizar', 'Como transformar uma medida em faixas úteis?', fonte('arduino.html', 'lab2', 'Laboratório 3 — Sensor de ré'), {
      tipo: 'miniprojeto', pontos: 60,
      contexto: 'Um número no Monitor Serial ganha finalidade quando orienta uma ação.',
      antes: 'Reutilize HC-SR04, LEDs, buzzer e estruturas condicionais.',
      fazer: 'Monte o laboratório, preveja a saída de cada faixa e teste da maior para a menor distância.',
      observar: 'Quanto menor a distância, maior a intensidade visual e sonora.',
      sucesso: 'Cada faixa produz exatamente o padrão documentado.',
      diagnostico: 'Teste sensor, LEDs e buzzer isoladamente; depois verifique a ordem de if/else if.',
      aplicar: 'Redistribua as faixas para outro contexto que não seja automotivo.',
      projeto: 'Aqui o sensor já participa de uma aplicação, sem precisar integrar o projeto final.'
    }),
    aula('emb-03-cp', 'emb-03', 'Checkpoint: medir → interpretar → decidir → sinalizar', 'Você consegue construir uma regra a partir de leituras reais?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'O valor bruto só vira informação quando é interpretado para uma finalidade.',
      antes: 'Escolha LDR ou HC-SR04.',
      fazer: 'Colete pelo menos cinco leituras, defina um critério, programe uma saída e justifique o limite.',
      observar: 'Valores próximos ao limite podem oscilar.',
      sucesso: 'A regra funciona e o limite está sustentado por observações.',
      diagnostico: 'Se oscilar, registre a variação antes de alterar o código; considere faixa de tolerância.',
      aplicar: 'Adapte a regra a um ambiente ou distância diferente.'
    }),

    aula('emb-04-01', 'emb-04', 'LED RGB e múltiplas saídas', 'Como representar estados usando combinações de cores?', fonte('arduino.html', 'p8', 'Projeto 10 — LED RGB'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Uma única saída pode comunicar vários estados combinando canais.',
      antes: 'Você já controla LEDs e entende polaridade e resistores.',
      fazer: 'Monte o RGB, teste cada canal isoladamente e só depois execute as combinações.',
      observar: 'Cátodo comum e ânodo comum exigem lógicas diferentes; siga o componente do material.',
      sucesso: 'Vermelho, verde e azul isolados correspondem aos pinos esperados.',
      diagnostico: 'Se as cores estiverem trocadas, identifique terminais e pinos antes de mudar nomes no código.',
      aplicar: 'Defina três cores para normal, atenção e alerta.'
    }),
    aula('emb-04-02', 'emb-04', 'RGB com botões: integrar conhecimentos', 'Como várias entradas controlam várias saídas?', fonte('arduino.html', 'lab3', 'Laboratório 6 — LED RGB com botões'), {
      tipo: 'miniprojeto', pontos: 60,
      contexto: 'Integração significa combinar conhecimentos já dominados com uma finalidade nova.',
      antes: 'Reutilize INPUT_PULLUP e os três canais do LED RGB.',
      fazer: 'Teste primeiro cada botão e canal. Depois pressione combinações e preveja a cor resultante.',
      observar: 'As decisões são independentes; mais de um canal pode ficar ativo.',
      sucesso: 'Cada botão controla seu canal e as combinações produzem cores coerentes.',
      diagnostico: 'Confira um caminho por vez: botão → leitura → condição → canal.',
      aplicar: 'Altere a associação entre botões e cores sem mover fios.'
    }),
    aula('emb-04-03', 'emb-04', 'Servo, biblioteca e posição', 'Como o programa produz movimento controlado?', fonte('arduino.html', 'p9', 'Projeto 11 — Servo Motor'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Atuadores transformam decisão elétrica em ação física.',
      antes: 'Você já controla saídas; agora usará uma biblioteca.',
      fazer: 'Monte o servo, carregue o exemplo e teste três ângulos dentro da faixa indicada.',
      observar: 'attach() associa o sinal; write() solicita uma posição.',
      sucesso: 'O servo alcança posições distintas de modo previsível.',
      diagnostico: 'Verifique sinal, alimentação, GND comum e corrente disponível.',
      aplicar: 'Escolha ângulos adequados para representar fechado, parcial e aberto.'
    }),
    aula('emb-04-04', 'emb-04', 'Lixeira automática: primeira automação integrada', 'Como sensor, estado e atuador cooperam?', fonte('arduino.html', 'lab4', 'Laboratório 7 — Lixeira automática'), {
      tipo: 'miniprojeto', pontos: 60,
      contexto: 'A automação percebe aproximação, decide, movimenta e evita repetição indevida.',
      antes: 'Reutilize HC-SR04, servo, função de medição e Monitor Serial.',
      fazer: 'Monte por partes: teste sensor, teste servo e só então integre. Mantenha a mão próxima e verifique a trava lógica.',
      observar: 'bool registra estado; for cria movimento gradual; a retirada do objeto libera novo ciclo.',
      sucesso: 'Abre uma vez, espera, fecha e só rearma após afastamento.',
      diagnostico: 'Se repetir, verifique podeAbrir; se o servo falhar, investigue alimentação antes do código.',
      aplicar: 'Altere distância, ângulo ou tempo e explique o efeito.',
      projeto: 'É a primeira automação integrada; não precisa ser forçada para dentro do Ambiente Inteligente.'
    }),
    aula('emb-04-cp', 'emb-04', 'Checkpoint: integração com diagnóstico', 'Você consegue localizar uma falha sem desmontar tudo?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'Sistemas integrados exigem testes por subsistema.',
      antes: 'Escolha RGB com botões ou lixeira automática.',
      fazer: 'Documente entradas, estados, decisões e saídas. Crie uma falha segura em um pino do código e diagnostique por etapas.',
      observar: 'Uma falha de saída não prova que o sensor está errado.',
      sucesso: 'Você identifica o subsistema defeituoso e apresenta a evidência usada.',
      diagnostico: 'Volte ao último teste simples que funcionou.',
      aplicar: 'Proponha uma melhoria que reutilize conhecimento anterior.'
    }),

    aula('emb-05-01', 'emb-05', 'delay() bloqueia; millis() acompanha', 'Como fazer duas coisas sem parar o programa inteiro?', fonte('arduino.html', 'p7', 'Tempo sem bloquear após o Projeto 7'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Um sistema que espera dentro de delay() deixa de observar outras necessidades.',
      antes: 'Você já usou intervalos no Blink.',
      fazer: 'Execute o Blink sem delay() apresentado no material e acrescente uma leitura que continue ocorrendo durante as piscadas.',
      observar: 'millis() compara tempo atual com tempo anterior; o loop continua circulando.',
      sucesso: 'LED mantém o ritmo enquanto a outra atividade continua responsiva.',
      diagnostico: 'Confira tipo unsigned long, atualização do tempo anterior e condição do intervalo.',
      aplicar: 'Crie dois LEDs com intervalos diferentes.'
    }),
    aula('emb-05-02', 'emb-05', 'Estado, bool e organização por funções', 'Como lembrar o que o sistema estava fazendo?', fonte('arduino.html', 'lab4', 'Estado lógico e função na lixeira automática'), {
      contexto: 'Sistemas maiores precisam lembrar estados e evitar repetição desnecessária.',
      antes: 'A lixeira já mostrou podeAbrir e uma função de medição.',
      fazer: 'Liste os estados possíveis da lixeira e indique qual variável registra cada decisão. Separe leitura, decisão e ação em funções conceituais.',
      observar: 'Parâmetros levam dados para uma função; retorno devolve resultado; escopo limita onde a variável existe.',
      sucesso: 'Você consegue explicar por que estado não é o mesmo que leitura instantânea.',
      diagnostico: 'Variável local usada fora da função ou estado nunca atualizado causa comportamento incoerente.',
      aplicar: 'Modele os estados “automático”, “manual” e “falha” para um sistema futuro.'
    }),
    aula('emb-05-03', 'emb-05', 'Memória, micros() e aprofundamentos no momento certo', 'O que o sistema guarda e qual precisão de tempo precisa?', fonte('arduino.html', 'p7', 'Tempo, memória e modularização após o HC-SR04'), {
      contexto: 'Nem todo dado precisa persistir e nem todo intervalo exige microssegundos.',
      antes: 'Você já usa millis() e variáveis de estado.',
      fazer: 'Classifique exemplos em programa/Flash, trabalho/RAM e persistência/EEPROM. Compare um intervalo humano com o pulso do HC-SR04.',
      observar: 'micros() serve a eventos curtos; gravar persistentemente o tempo todo desgasta memória.',
      sucesso: 'Você escolhe millis() ou micros() pela escala do problema e explica o destino de um dado.',
      diagnostico: 'Evite usar EEPROM como se fosse RAM.',
      aplicar: 'Decida quais configurações de um projeto deveriam sobreviver ao desligamento.'
    }),
    aula('emb-05-04', 'emb-05', 'Funções aplicadas: números, texto e testes', 'Como reduzir repetição e tornar dados compreensíveis?', [
      fonte('arduino-programacao-aplicada.html', 'b5-1', 'Funções matemáticas'),
      fonte('arduino-programacao-aplicada.html', 'b5-3', 'Texto e mensagens'),
      fonte('arduino-programacao-aplicada.html', 'b5-4', 'Valores aleatórios para testes')
    ], {
      tipo: 'pratica', pontos: 20,
      contexto: 'A programação aplicada entra quando sensores e testes criam uma necessidade concreta.',
      antes: 'Você já possui leituras reais para transformar.',
      fazer: 'Escolha uma leitura, calcule mínimo/máximo ou diferença, monte uma mensagem clara e teste a regra com valores variados.',
      observar: 'Funções matemáticas, String e random() resolvem necessidades diferentes.',
      sucesso: 'A saída comunica estado e o teste inclui valores de limite.',
      diagnostico: 'Uma mensagem bonita não corrige cálculo errado; valide primeiro o número.',
      aplicar: 'Crie uma função própria com parâmetro e retorno.'
    }),
    aula('emb-05-cp', 'emb-05', 'Checkpoint: programa responsivo e modular', 'Seu programa continua claro quando cresce?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'Organização só tem valor se facilitar teste, mudança e diagnóstico.',
      antes: 'Reutilize um circuito anterior.',
      fazer: 'Remova um delay() relevante, crie pelo menos uma função com nome significativo e registre um estado bool.',
      observar: 'Compare responsividade e legibilidade antes/depois.',
      sucesso: 'O comportamento anterior é preservado e outra tarefa consegue continuar.',
      diagnostico: 'Teste cada função isoladamente antes da integração.',
      aplicar: 'Entregue uma pequena explicação de como acrescentaria uma terceira tarefa.'
    }),

    aula('emb-06-01', 'emb-06', 'ESP32: mudança de plataforma com continuidade', 'O que permanece e quais cuidados mudam?', fonte('arduino-conectividade.html', 'b6-prep', 'Do Arduino Uno ao ESP32'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'A conectividade exige outra plataforma, mas entradas, saídas e lógica não desaparecem.',
      antes: 'Você já domina LED, GPIO conceitual, setup() e loop().',
      fazer: 'Compare Uno e ESP32, destaque 5 V × 3,3 V, selecione a placa indicada e execute o primeiro LED no GPIO 23.',
      observar: 'Conhecimentos permanecem; pinout, tensão lógica e recursos mudam.',
      sucesso: 'O LED pisca e você explica por que não pode assumir que todo pino tolera 5 V.',
      diagnostico: 'Confira cabo de dados, placa, porta, GPIO e modo de boot quando aplicável.',
      aplicar: 'Marque no pinout os pinos usados antes de ligar o circuito.'
    }),
    aula('emb-06-02', 'emb-06', 'Bluetooth: comando próximo', 'Quando uma comunicação direta é suficiente?', fonte('arduino-conectividade.html', 'b6-1', 'Bluetooth com ESP32'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Um celular próximo pode comandar o sistema sem uma rede Wi-Fi.',
      antes: 'O LED no GPIO 23 já funciona.',
      fazer: 'Carregue o exemplo, conecte um terminal compatível e envie L e D conforme as instruções.',
      observar: 'Bluetooth Classic serial e BLE não são equivalentes.',
      sucesso: 'Comandos produzem ação e confirmação nos dois sentidos.',
      diagnostico: 'Verifique compatibilidade SPP, nome do dispositivo, conexão e caractere enviado.',
      aplicar: 'Acrescente um comando para consultar o estado atual.'
    }),
    aula('emb-06-03', 'emb-06', 'Wi-Fi: entrar em uma rede', 'O que muda quando o dispositivo recebe um endereço IP?', fonte('arduino-conectividade.html', 'b6-2', 'Wi-Fi com ESP32'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'O ESP32 passa a participar da mesma rede de celulares e computadores.',
      antes: 'Você já usa o Monitor Serial e conhece o ESP32.',
      fazer: 'Configure uma rede de testes, proteja as credenciais e registre o IP exibido após a conexão.',
      observar: 'Conectar ao Wi-Fi não define ainda o serviço que será oferecido.',
      sucesso: 'Monitor Serial confirma conexão e endereço IP.',
      diagnostico: 'Confira SSID, senha, rede 2,4 GHz, intensidade e mensagens de estado.',
      aplicar: 'Explique a diferença entre estar na rede local e estar acessível pela Internet.'
    }),
    aula('emb-06-cp', 'emb-06', 'Checkpoint: você não voltou ao começo', 'Consegue transferir conhecimento entre placas?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'Transferência é reconhecer princípios estáveis e diferenças reais.',
      antes: 'Compare um projeto simples no Uno e no ESP32.',
      fazer: 'Liste três conhecimentos preservados, três diferenças e dois cuidados elétricos. Execute uma saída e uma comunicação.',
      observar: 'A plataforma muda; o raciocínio entrada/processamento/saída permanece.',
      sucesso: 'Você adapta o projeto sem copiar uma solução incompatível.',
      diagnostico: 'Nunca investigue rede antes de comprovar alimentação e programa básico.',
      aplicar: 'Escolha justificadamente Bluetooth ou Wi-Fi para uma situação.'
    }),

    aula('emb-07-01', 'emb-07', 'HTTP: cliente e servidor são papéis', 'Quem pede, quem responde e onde está a interface?', fonte('arduino-conectividade.html', 'b6-3', 'HTTP no ESP32'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'O navegador pode se tornar uma interface sem aplicativo instalado.',
      antes: 'ESP32 e computador/celular estão na mesma rede.',
      fazer: 'Execute primeiro o ESP32 como servidor e acesse a página. Depois analise o exemplo em que ele atua como cliente.',
      observar: 'Cliente inicia a solicitação; servidor responde. O mesmo dispositivo pode assumir papéis diferentes.',
      sucesso: 'A página abre e um comando altera o estado esperado.',
      diagnostico: 'Confira IP, mesma rede, porta, rota e Monitor Serial.',
      aplicar: 'Crie uma rota de consulta que não altere o estado.'
    }),
    aula('emb-07-02', 'emb-07', 'mDNS e acesso externo temporário', 'Como facilitar o endereço sem expor o sistema irresponsavelmente?', [
      fonte('arduino-conectividade.html', 'b6-4', 'mDNS na rede local'),
      fonte('arduino-conectividade.html', 'b6-5', 'Tunelamento temporário')
    ], {
      tipo: 'pratica', pontos: 20,
      contexto: 'Nome local e túnel resolvem problemas diferentes.',
      antes: 'O servidor HTTP local já funciona pelo IP.',
      fazer: 'Teste o nome mDNS. Só depois estude o túnel temporário e registre o que fica exposto.',
      observar: 'mDNS atua na rede local; túnel cria um caminho externo temporário.',
      sucesso: 'Você acessa por nome local ou explica tecnicamente por que seu ambiente não resolveu mDNS.',
      diagnostico: 'Teste primeiro pelo IP; depois nome; só então o acesso externo.',
      aplicar: 'Liste três cuidados antes de compartilhar um endereço externo.'
    }),
    aula('emb-07-03', 'emb-07', 'IoT: conexão com finalidade', 'Quando um sistema conectado realmente é IoT?', [
      fonte('arduino-iot.html', 'b7-1', 'Fundamentos de IoT'),
      fonte('arduino-iot.html', 'b7-3', 'Automação, sistema embarcado e IoT')
    ], {
      contexto: 'Wi-Fi é meio de comunicação; IoT exige enxergar dispositivo, dados, aplicação e finalidade.',
      antes: 'Você já construiu automações locais e comunicação em rede.',
      fazer: 'Classifique três casos do material e justifique: circuito, automação local ou sistema IoT.',
      observar: 'Categorias podem se combinar; uma não substitui automaticamente a outra.',
      sucesso: 'Sua justificativa identifica dado, comunicação, aplicação e finalidade.',
      diagnostico: 'Não use “tem Internet” como única prova.',
      aplicar: 'Reclassifique sua ideia inicial do Módulo 0.'
    }),
    aula('emb-07-04', 'emb-07', 'Aplicações e valor do dado', 'Que problema justifica conectar este objeto?', fonte('arduino-iot.html', 'b7-4', 'Aplicações de IoT'), {
      contexto: 'A tecnologia só faz sentido quando a informação ou o controle melhora uma decisão real.',
      antes: 'Você já diferencia automação local de IoT.',
      fazer: 'Escolha uma aplicação residencial, industrial, urbana, de saúde, monitoramento ou rastreamento e mapeie sensor, controlador, rede, aplicação e finalidade.',
      observar: 'O mesmo padrão técnico assume riscos e exigências diferentes conforme o contexto.',
      sucesso: 'O mapa explica quem usa a informação e para quê.',
      diagnostico: 'Se não houver usuário, decisão ou finalidade, o projeto pode estar coletando dados sem razão.',
      aplicar: 'Remova um dado que não seja necessário.'
    }),
    aula('emb-07-05', 'emb-07', 'MQTT: publicar sem conhecer cada assinante', 'Quando publicação/assinatura é melhor que solicitação/resposta?', [], {
      tipo: 'pratica', pontos: 20,
      contexto: 'Sensores podem produzir eventos para vários consumidores sem atender cada solicitação HTTP individualmente.',
      antes: 'Você já conhece cliente/servidor e mensagens em rede.',
      fazer: 'Antes de configurar, desenhe o caminho: ESP32 publisher (quem envia) → broker (servidor que recebe e distribui) → topic ambiente/luz (endereço lógico) → painel subscriber (quem assina e recebe). A leitura enviada é a mensagem. Use apenas broker de teste sem dados pessoais ou credenciais reutilizadas.',
      observar: 'No HTTP, um cliente solicita e um servidor responde. No MQTT, o publisher envia uma mensagem a um topic no broker; o broker a entrega aos subscribers, sem o sensor conhecer cada consumidor.',
      sucesso: 'Você descreve o caminho completo da mensagem e a diferença para HTTP.',
      diagnostico: 'Verifique endereço/porta do broker, tópico idêntico e conexão antes do conteúdo.',
      aplicar: 'Proponha um segundo assinante que aproveite a mesma leitura.',
      projeto: 'MQTT é uma extensão curta; o projeto principal pode continuar com HTTP.'
    }),
    aula('emb-07-cp', 'emb-07', 'Checkpoint: sistema conectado com propósito', 'Você consegue justificar arquitetura e protocolo?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'Conectividade é uma escolha de projeto, não decoração tecnológica.',
      antes: 'Escolha uma situação com monitoramento ou controle.',
      fazer: 'Desenhe dispositivo → rede → aplicação → pessoa/finalidade. Escolha HTTP ou MQTT e justifique.',
      observar: 'Inclua comportamento quando a rede falhar.',
      sucesso: 'A parte local continua segura e a perda da rede é percebida sem falsa confirmação.',
      diagnostico: 'Separe falha de sensor, falha local e falha de comunicação.',
      aplicar: 'Defina o mínimo de dados necessário.'
    }),

    aula('emb-08-01', 'emb-08', 'Interfaces e protocolos: a necessidade vem primeiro', 'Por que encaixar fios não garante comunicação?', fonte('arduino-protocolos.html', 'b8-prep', 'Preparação para interfaces e protocolos'), {
      contexto: 'Sinais, níveis elétricos, sincronismo e regras precisam ser compatíveis.',
      antes: 'Você já usou Serial, Wi-Fi, HTTP e Bluetooth.',
      fazer: 'Para cada tecnologia já usada, separe meio/interface, protocolo e finalidade.',
      observar: 'Não force toda tecnologia em uma única caixa; descreva o papel concreto.',
      sucesso: 'Você evita afirmar que conectores iguais significam comunicação compatível.',
      diagnostico: 'Consulte pinout e documentação antes de ligar equipamentos desconhecidos.',
      aplicar: 'Explique quando uma biblioteca resolve protocolo, mas não corrige nível elétrico.'
    }),
    aula('emb-08-02', 'emb-08', 'RTOS: tarefas com prazo e coordenação', 'Tempo real significa apenas ser rápido?', fonte('arduino-protocolos.html', 'b8-1', 'Experiência introdutória com FreeRTOS'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Sistemas maiores executam trabalhos com frequências e prioridades diferentes.',
      antes: 'Você já percebeu o bloqueio causado por delay().',
      fazer: 'Execute a experiência pequena do material e identifique duas tarefas, seus intervalos e o que acontece de forma concorrente.',
      observar: 'Tempo real envolve previsibilidade e prazos; não apenas velocidade máxima.',
      sucesso: 'As tarefas produzem evidências separadas sem virar dois programas independentes.',
      diagnostico: 'Evite compartilhar estado sem critério e criar tarefas para problemas simples.',
      aplicar: 'Proponha duas tarefas do Ambiente Inteligente, sem implementá-las ainda.'
    }),
    aula('emb-08-03', 'emb-08', 'I2C: dois sinais, vários endereços', 'Como compartilhar comunicação entre periféricos?', fonte('arduino-protocolos.html', 'b8-2', 'Scanner e LCD I2C'), {
      tipo: 'pratica', pontos: 20,
      contexto: 'Displays e sensores podem compartilhar SDA e SCL quando possuem endereços distintos.',
      antes: 'Você sabe consultar o pinout do ESP32.',
      fazer: 'Confira SDA/SCL, execute primeiro o scanner e só depois use o endereço encontrado no LCD.',
      observar: 'Copiar 0x27 sem escanear pode esconder um endereço diferente.',
      sucesso: 'O endereço aparece e o display mostra a mensagem prevista.',
      diagnostico: 'Verifique alimentação, GND comum, SDA/SCL, contraste, endereço e biblioteca.',
      aplicar: 'Explique como outro dispositivo com endereço distinto compartilharia o barramento.'
    }),
    aula('emb-08-04', 'emb-08', 'UART, RS-232 e CAN/TWAI', 'Quando “serial” ou “rede” exige hardware adicional?', [
      fonte('arduino-protocolos.html', 'b8-3', 'UART e RS-232'),
      fonte('arduino-protocolos.html', 'b8-4', 'CAN/TWAI')
    ], {
      contexto: 'Protocolos robustos ainda dependem de transceptores e níveis elétricos adequados.',
      antes: 'Você já usou Serial em nível lógico.',
      fazer: 'Compare UART lógica, RS-232 com MAX3232 e CAN/TWAI com transceptor. Desenhe blocos, sem fazer ligações perigosas.',
      observar: 'TX/RX não significam automaticamente RS-232; CAN_H/CAN_L não vão diretamente aos GPIOs.',
      sucesso: 'Você indica o transceptor necessário e a finalidade de cada tecnologia.',
      diagnostico: 'Antes do software, confira padrão elétrico, terminação e GND/referência conforme a interface.',
      aplicar: 'Escolha uma delas para instrumento antigo, veículo ou máquina e justifique.'
    }),
    aula('emb-08-05', 'emb-08', 'Camadas de rede e escolhas sem fio', 'O que existe entre o HTTP e o sinal de rádio?', [
      fonte('arduino-protocolos.html', 'b8-5', 'TCP/IP'),
      fonte('arduino-protocolos.html', 'b8-6', 'IEEE 802.11'),
      fonte('arduino-protocolos.html', 'b8-7', 'Bluetooth Classic e BLE')
    ], {
      contexto: 'Diagnóstico melhora quando cada camada tem um papel conhecido.',
      antes: 'Você já acessou HTTP por Wi-Fi e usou Bluetooth.',
      fazer: 'Monte a pilha aplicação → transporte → rede → enlace para o servidor do ESP32. Depois compare 2,4/5 GHz e Classic/BLE.',
      observar: 'O ESP32-WROOM-32 do percurso usa Wi-Fi 2,4 GHz; BLE prioriza outro modelo de comunicação e consumo.',
      sucesso: 'Você localiza uma falha provável na camada correta.',
      diagnostico: 'Rede invisível pode ser incompatibilidade de faixa, não erro de senha.',
      aplicar: 'Escolha Classic, BLE ou Wi-Fi para três cenários diferentes.'
    }),
    aula('emb-08-06', 'emb-08', 'Alimentação, corrente e multímetro', 'Por que o circuito funciona no simulador e falha no mundo físico?', [], {
      tipo: 'pratica', pontos: 20,
      contexto: 'Servos, motores e outros atuadores podem exigir mais corrente do que a placa oferece com segurança.',
      antes: 'Você já viu a advertência de alimentação na lixeira automática.',
      fazer: 'Com o circuito desligado, revise polaridade e continuidade visual. Em hardware real, meça tensão DC entre alimentação e GND com supervisão adequada; não meça corrente colocando o multímetro diretamente em paralelo.',
      observar: 'Fonte externa adequada pode alimentar o atuador, mantendo GND comum quando o sinal precisa de referência compartilhada.',
      sucesso: 'Você diferencia tensão, corrente disponível e GND comum.',
      diagnostico: 'Reset aleatório ao mover servo sugere investigar alimentação e corrente antes do programa.',
      aplicar: 'Esboce uma alimentação separada segura para um atuador, sem energizar até conferir especificações.'
    }),
    aula('emb-08-07', 'emb-08', 'Segurança, credenciais e proteção de dados', 'Quem pode acessar, comandar e guardar informações?', [
      fonte('arduino-seguranca.html', 'b9-1', 'Proteção de dados pessoais'),
      fonte('arduino-seguranca.html', 'b9-2', 'Segurança de sistemas e informações')
    ], {
      contexto: 'Conectar amplia utilidade e também impacto de acesso indevido, coleta excessiva e indisponibilidade.',
      antes: 'Você já publicou serviços e conhece credenciais de rede.',
      fazer: 'Revise um projeto pelas perguntas: finalidade, necessidade, autenticação, autorização, confidencialidade, integridade, disponibilidade, retenção e exclusão.',
      observar: 'Configuração pública do SDK Web não equivale a credencial administrativa; regras e autenticação protegem os dados.',
      sucesso: 'Você remove dado desnecessário e identifica quem pode executar cada ação.',
      diagnostico: 'Nunca coloque senha, service account, token privado ou chave administrativa no front-end ou repositório.',
      aplicar: 'Escreva uma política curta de falha segura para perda de rede.'
    }),
    aula('emb-08-cp', 'emb-08', 'Checkpoint: decisão técnica responsável', 'Você consegue escolher sem colecionar siglas?', [], {
      tipo: 'checkpoint', pontos: 30,
      contexto: 'Visão profissional significa justificar tecnologia, risco e teste.',
      antes: 'Escolha um cenário com dois periféricos, comunicação e um atuador.',
      fazer: 'Defina interface/protocolo, alimentação, risco principal, dado mínimo e teste de falha.',
      observar: 'Uma solução menor e compreensível pode ser melhor que uma arquitetura excessiva.',
      sucesso: 'Cada componente existe para resolver uma necessidade explícita.',
      diagnostico: 'Retire qualquer tecnologia cuja ausência não mude o resultado.',
      aplicar: 'Apresente a decisão para alguém iniciante sem usar siglas sem explicação.'
    }),

    aula('emb-09-01', 'emb-09', 'Problema, necessidade e requisitos', 'O que o Ambiente Inteligente precisa resolver?', fonte('arduino-projeto-iot.html', 'b10-1', 'Problema e requisitos'), {
      contexto: 'O projeto começa pela necessidade, não pela lista de componentes.',
      antes: 'Você já domina sensor, decisão, atuador, rede e aplicação.',
      fazer: 'Escreva problema, usuário, entrada, saída, modos manual/automático e critérios de sucesso.',
      observar: 'Nem todo circuito anterior precisa fazer parte do mesmo ambiente.',
      sucesso: 'Requisitos podem ser testados e não dependem de frases vagas como “ser inteligente”.',
      diagnostico: 'Se não for possível comprovar, reescreva o requisito.',
      aplicar: 'Escolha uma melhoria própria, mas não a implemente ainda.'
    }),
    aula('emb-09-02', 'emb-09', 'Arquitetura e construção local', 'Como reduzir causas possíveis antes de conectar?', [
      fonte('arduino-projeto-iot.html', 'b10-2', 'Arquitetura e montagem'),
      fonte('arduino-projeto-iot.html', 'b10-3', 'Teste local')
    ], {
      tipo: 'pratica', pontos: 20,
      contexto: 'Sensor e atuador devem ser comprovados localmente antes de a rede entrar.',
      antes: 'Use o LDR e o LED/atuador definidos no projeto-base.',
      fazer: 'Desenhe o fluxo, monte o núcleo local, calibre o sensor e execute os testes sem Wi-Fi.',
      observar: 'Modo automático local deve continuar útil mesmo sem rede.',
      sucesso: 'Leitura, decisão e saída funcionam com evidência registrada.',
      diagnostico: 'Teste alimentação, leitura e saída separadamente.',
      aplicar: 'Introduza um limite diferente e justifique pela calibração.'
    }),
    aula('emb-09-03', 'emb-09', 'Aplicação Web e integração', 'Como monitorar e controlar sem quebrar o modo automático?', [
      fonte('arduino-projeto-iot.html', 'b10-4', 'Aplicação Web'),
      fonte('arduino-projeto-iot.html', 'b10-5', 'Integração final')
    ], {
      tipo: 'miniprojeto', pontos: 60,
      contexto: 'A interface deve mostrar estado real e coordenar comandos manuais com a automação.',
      antes: 'Núcleo local está testado; HTTP já foi estudado.',
      fazer: 'Implemente as rotas, teste primeiro monitoramento, depois comando manual e por fim a troca de modos.',
      observar: 'Interface, estado interno e saída física precisam concordar.',
      sucesso: 'A página exibe leitura/estado e os modos não entram em conflito.',
      diagnostico: 'Se a página responde e o LED não, separe rota, estado e GPIO.',
      aplicar: 'Acrescente na interface uma explicação curta do modo ativo.'
    }),
    aula('emb-09-04', 'emb-09', 'Segurança, falha e testes reproduzíveis', 'Como provar que o sistema continua responsável quando algo dá errado?', [
      fonte('arduino-projeto-iot.html', 'b10-6', 'Segurança e dados'),
      fonte('arduino-projeto-iot.html', 'b10-7', 'Testes e entrega')
    ], {
      tipo: 'desafio', pontos: 40,
      contexto: 'Funcionar uma vez não é evidência suficiente.',
      antes: 'O sistema integrado funciona em condições normais.',
      fazer: 'Execute roteiro normal e falhas intencionais seguras: rede indisponível, sensor fora da faixa e comando inadequado. Registre entrada, esperado, obtido e correção.',
      observar: 'A falha não pode ser escondida por uma mensagem falsa de sucesso.',
      sucesso: 'O comportamento local seguro permanece e a indisponibilidade remota fica clara.',
      diagnostico: 'Associe cada sintoma à camada correta.',
      aplicar: 'Revise credenciais, exposição, dados e autorização.'
    }),
    aula('emb-09-final', 'emb-09', 'Entrega final: autonomia comprovada', 'Você consegue projetar, testar, diagnosticar, melhorar e explicar?', [], {
      tipo: 'projeto-final', pontos: 150,
      contexto: 'A entrega final reúne evidência técnica e capacidade de transferência.',
      antes: 'Conclua o Ambiente Inteligente MbB funcional.',
      fazer: 'Implemente uma melhoria escolhida por você. Entregue problema, requisitos, arquitetura, circuito, código, testes, falha diagnosticada, segurança, evidências e reflexão final.',
      observar: 'A melhoria deve resolver uma necessidade, não apenas acrescentar componente.',
      sucesso: 'Outra pessoa consegue reproduzir o teste e compreender suas decisões.',
      diagnostico: 'Se depender de ajuda não documentada, registre a lacuna e corrija a instrução.',
      aplicar: 'Proponha um segundo sistema diferente usando os mesmos princípios.',
      projeto: 'Conclusão da promessa do curso.'
    }),

    aula('emb-99-01', 'emb-99', 'Preveja', 'O que acontecerá antes de executar?', fonte('arduino-exercicios.html', '', 'Exercícios existentes por módulo'), {
      tipo: 'desafio', pontos: 40, obrigatoria: false,
      contexto: 'Previsão revela o modelo mental antes que o resultado influencie a resposta.',
      antes: 'Escolha um exercício de interpretação de código.',
      fazer: 'Escreva saída, estado dos pinos ou comportamento esperado sem executar. Depois compare.',
      observar: 'Erro de previsão indica exatamente qual conceito revisar.',
      sucesso: 'Você explica acertos e diferenças.',
      diagnostico: 'Simule o código linha a linha quando a previsão falhar.',
      aplicar: 'Altere um valor e faça nova previsão.'
    }),
    aula('emb-99-02', 'emb-99', 'Experimente e observe', 'Que evidência o circuito produz?', fonte('arduino.html', 'exercicios', 'Práticas do módulo Arduino'), {
      tipo: 'pratica', pontos: 20, obrigatoria: false,
      contexto: 'Executar sem observar vira apenas repetição.',
      antes: 'Escolha uma prática compatível com os componentes disponíveis.',
      fazer: 'Defina uma variável de cada vez, execute e registre resultado mensurável.',
      observar: 'Use Monitor Serial, estado visual, som ou posição como evidência.',
      sucesso: 'O registro permite comparar tentativas.',
      diagnostico: 'Não altere circuito e código simultaneamente sem necessidade.',
      aplicar: 'Repita em outra condição.'
    }),
    aula('emb-99-03', 'emb-99', 'Modifique', 'Você entende o suficiente para alterar sem destruir?', fonte('arduino-revisao-modulos.html', '', 'Revisões dos módulos'), {
      tipo: 'desafio', pontos: 40, obrigatoria: false,
      contexto: 'Modificar com intenção é diferente de trocar números ao acaso.',
      antes: 'Parta de um projeto funcionando.',
      fazer: 'Mude um limite, intervalo, mensagem, pino ou regra; preveja e teste.',
      observar: 'Preserve o restante do comportamento.',
      sucesso: 'A mudança desejada ocorre e efeitos colaterais são explicados.',
      diagnostico: 'Use comparação antes/depois.',
      aplicar: 'Faça segunda modificação com menos orientação.'
    }),
    aula('emb-99-04', 'emb-99', 'Diagnostique', 'Você encontra a causa, não apenas o sintoma?', fonte('arduino-avaliacao-conceitual.html', '', 'Avaliação conceitual do percurso'), {
      tipo: 'desafio', pontos: 40, obrigatoria: false,
      contexto: 'Diagnóstico é uma competência central de sistemas embarcados.',
      antes: 'Use uma falha segura e reversível.',
      fazer: 'Aplique a ordem alimentação → GND → ligação → polaridade → pino → configuração → código → leitura/saída.',
      observar: 'Registre o primeiro ponto em que esperado e observado divergem.',
      sucesso: 'A correção decorre de evidência, não de tentativa aleatória.',
      diagnostico: 'Volte ao menor teste que funcionava.',
      aplicar: 'Explique como prevenir a mesma falha.'
    }),
    aula('emb-99-05', 'emb-99', 'Aplique e desafie-se', 'Você transfere o conhecimento para uma situação diferente?', fonte('arduino-avaliacao-conceitual.html', '', 'Desafios de integração'), {
      tipo: 'desafio', pontos: 40, obrigatoria: false,
      contexto: 'Domínio aparece quando o aluno deixa de depender do exemplo literal.',
      antes: 'Escolha três conhecimentos de módulos diferentes.',
      fazer: 'Defina um problema pequeno, construa com menos instruções, teste e apresente evidência.',
      observar: 'Reduza a ajuda sem retirar critérios de segurança.',
      sucesso: 'A solução funciona e as escolhas são justificadas.',
      diagnostico: 'Se travar, identifique qual conhecimento anterior falta e revise apenas esse ponto.',
      aplicar: 'Documente para outro iniciante reproduzir.'
    }),
    aula('emb-99-dominio', 'emb-99', 'Domínio do percurso', 'Você consegue responder e construir sem depender da ordem original?', [
      fonte('arduino-avaliacoes-bimestrais.html', '', 'Avaliações por etapa'),
      fonte('arduino-avaliacao-conceitual.html', '', 'Avaliação conceitual integral')
    ], {
      tipo: 'checkpoint', pontos: 30, obrigatoria: false,
      contexto: 'A avaliação final combina compreensão, execução e transferência.',
      antes: 'Conclua os módulos necessários ao desafio escolhido.',
      fazer: 'Responda à avaliação conceitual, execute um diagnóstico e apresente um sistema diferente do projeto final.',
      observar: 'Conhecimento conceitual e evidência prática devem concordar.',
      sucesso: 'Você explica limites, riscos e decisões, além de demonstrar funcionamento.',
      diagnostico: 'Use respostas inseguras ou vagas para orientar revisão específica.',
      aplicar: 'Planeje seu próximo projeto com autonomia.'
    })
  ];

  const conquistas = [
    { id: 'primeiro-circuito', titulo: 'Primeiro Circuito', requisito: ['emb-01-03'] },
    { id: 'primeira-entrada', titulo: 'Primeira Entrada', requisito: ['emb-02-01'] },
    { id: 'primeiro-sensor', titulo: 'Primeiro Sensor', requisito: ['emb-03-01'] },
    { id: 'primeira-automacao', titulo: 'Primeira Automação', requisito: ['emb-04-04'] },
    { id: 'sistema-integrado', titulo: 'Primeiro Sistema Integrado', requisito: ['emb-04-cp'] },
    { id: 'dispositivo-conectado', titulo: 'Primeiro Dispositivo Conectado', requisito: ['emb-06-cp'] },
    { id: 'iot-concluido', titulo: 'Sistema IoT Concluído', requisito: ['emb-09-final'] }
  ];

  window.MBB_CURSO_EMBARCADOS = {
    id: 'sistemas-embarcados-iot',
    versao: 1,
    titulo: 'Sistemas Embarcados e IoT',
    promessa: 'Compreender, montar, programar, testar, diagnosticar e integrar sistemas embarcados com sensores, atuadores e conectividade.',
    metodo: ['Entender', 'Experimentar', 'Programar', 'Aplicar'],
    modulos,
    aulas,
    conquistas,
    pontos: { aula: 10, pratica: 20, checkpoint: 30, desafio: 40, miniprojeto: 60, 'projeto-final': 150 }
  };
}());
