(() => {
  const STYLE_ID = 'mbb-contextualizacao-humana-style';
  const MARCA = 'data-mbb-contextualizacao';

  function garantirEstilo(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .mbb-human-context{margin:14px 0 16px;padding:14px 16px;border:1px solid var(--line);border-left:4px solid var(--primary);border-radius:14px;background:linear-gradient(135deg,#fff,#f7fcfd);box-shadow:0 4px 14px rgba(15,23,42,.04)}
      .mbb-human-context h3{margin:0 0 10px;color:var(--dark);font-size:17px}
      .mbb-human-context p{margin:6px 0;line-height:1.55}
      .mbb-human-context .mbb-human-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:10px}
      .mbb-human-context .mbb-human-grid>div{border:1px solid var(--line);border-radius:11px;background:#fff;padding:10px 11px}
      .mbb-human-context .mbb-human-grid strong{display:block;color:var(--dark);font-size:13px;margin-bottom:4px}
      .mbb-human-context .mbb-human-grid span{display:block;color:#334155;font-size:13.5px;line-height:1.45}
      .mbb-human-context.mbb-human-module{margin-top:16px;background:linear-gradient(135deg,#f8fbff,#eef9fb)}
      .mbb-human-context .mbb-human-kicker{display:inline-block;margin-bottom:5px;font-size:12px;font-weight:900;letter-spacing:.04em;text-transform:uppercase;color:var(--primary)}
      @media(max-width:800px){.mbb-human-context .mbb-human-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function htmlContexto(dados, tituloPadrao){
    return `
      <span class="mbb-human-kicker">Antes da parte técnica</span>
      <h3>${dados.titulo || tituloPadrao || 'Por que você está entrando aqui?'}</h3>
      <div class="mbb-human-grid">
        <div><strong>No dia a dia</strong><span>${dados.dia}</span></div>
        <div><strong>O problema que aparece</strong><span>${dados.problema}</span></div>
        <div><strong>Por que aprender isto agora</strong><span>${dados.uso}</span></div>
      </div>
    `;
  }

  function inserirModuloNoHero(seletor, dados){
    const hero = document.querySelector(seletor);
    if(!hero || hero.querySelector(`[${MARCA}="modulo"]`)) return false;
    const bloco = document.createElement('div');
    bloco.className = 'mbb-human-context mbb-human-module';
    bloco.setAttribute(MARCA, 'modulo');
    bloco.innerHTML = htmlContexto(dados, 'Por que entrar neste módulo?');
    const primeiroP = hero.querySelector(':scope > p');
    if(primeiroP) primeiroP.insertAdjacentElement('afterend', bloco);
    else hero.appendChild(bloco);
    return true;
  }

  function inserirModuloNoProjeto(id, dados){
    const secao = document.getElementById(id);
    if(!secao || secao.querySelector(`[${MARCA}="modulo"]`)) return false;
    const cabecalho = secao.querySelector('.projectHead');
    if(!cabecalho) return false;
    const bloco = document.createElement('div');
    bloco.className = 'mbb-human-context mbb-human-module';
    bloco.setAttribute(MARCA, 'modulo');
    bloco.innerHTML = htmlContexto(dados, 'Por que entrar neste módulo?');
    cabecalho.insertAdjacentElement('afterend', bloco);
    return true;
  }

  function inserirContextoProjeto(id, dados){
    const secao = document.getElementById(id);
    if(!secao || secao.querySelector(`[${MARCA}="${id}"]`)) return false;
    const cabecalho = secao.querySelector('.projectHead');
    if(!cabecalho) return false;
    const bloco = document.createElement('div');
    bloco.className = 'mbb-human-context';
    bloco.setAttribute(MARCA, id);
    bloco.innerHTML = htmlContexto(dados, 'Por que este projeto existe?');
    const modulo = cabecalho.nextElementSibling && cabecalho.nextElementSibling.getAttribute && cabecalho.nextElementSibling.getAttribute(MARCA) === 'modulo'
      ? cabecalho.nextElementSibling
      : null;
    if(modulo) modulo.insertAdjacentElement('afterend', bloco);
    else cabecalho.insertAdjacentElement('afterend', bloco);
    return true;
  }

  function corrigirLinkEntradaSaida(){
    document.querySelectorAll('a[href="arduino.html#p1"]').forEach(link => {
      link.setAttribute('href', 'arduino.html#p2');
    });
  }

  const contextoPrincipal = {
    moduloFundamentos: {
      titulo: 'Por que começar por Fundamentos?',
      dia: 'Uma luz automática, uma lixeira sem toque, um alarme de aproximação e um controle pelo celular parecem projetos diferentes, mas todos dependem das mesmas ideias básicas.',
      problema: 'Se você ligar componentes sem entender alimentação, GND, polaridade, corrente, protoboard e o papel do microcontrolador, qualquer erro de montagem vira tentativa e erro.',
      uso: 'Esses fundamentos serão reutilizados em todos os projetos seguintes. A ideia é compreender primeiro o que acontece no circuito para depois programar com segurança e intenção.'
    },
    moduloIO: {
      titulo: '2. Entrada/Saída — quando o circuito começa a obedecer ao programa',
      dia: 'Um equipamento precisa acender uma luz, emitir um aviso ou responder quando alguém aperta um botão. Isso acontece o tempo todo em eletrodomésticos, painéis e máquinas.',
      problema: 'Até o primeiro LED, o Arduino apenas fornecia energia. Agora precisamos fazer o programa decidir quando uma saída liga e quando uma entrada deve ser lida.',
      uso: 'Aqui nasce a ligação direta entre código e mundo físico. Essa lógica será reaproveitada em sensores, automação, servo, ESP32 e IoT.'
    },
    moduloSensores: {
      titulo: '3. Sensores — como o sistema percebe o que acontece ao redor',
      dia: 'Luzes acendem quando escurece, carros avisam quando chegam perto de um obstáculo e equipamentos monitoram temperatura, distância ou presença.',
      problema: 'Um programa sozinho não sabe o que está acontecendo fora da placa. Ele precisa transformar alguma característica do ambiente em um sinal que possa ser lido.',
      uso: 'Os sensores dão ao sistema informações para decidir. Depois, essas leituras serão usadas em automação e em projetos IoT.'
    },
    moduloAtuadores: {
      titulo: '4. Atuadores/Automação — quando perceber não basta: o sistema precisa agir',
      dia: 'Uma porta automática precisa se mover, um painel precisa indicar estados e uma lixeira sem toque precisa abrir sozinha.',
      problema: 'Ler o ambiente é só metade do sistema. Depois de perceber e decidir, alguma coisa precisa mudar fisicamente.',
      uso: 'LED RGB, servo e automação juntam entrada, decisão e ação. Essa integração prepara o caminho para sistemas embarcados completos.'
    },
    itens: {
      p1: {titulo:'Primeiro projeto — por que começar com um LED protegido?', dia:'Indicadores luminosos estão em carregadores, roteadores, painéis e equipamentos para mostrar que algo está ligado, pronto ou em alerta.', problema:'Um LED parece simples, mas pode ser danificado se for ligado sem limitar a corrente ou com a polaridade errada.', uso:'Este primeiro circuito ensina 5V, GND, resistor, polaridade, protoboard e circuito fechado antes de qualquer programação funcional.'},
      p2: {titulo:'Blink — como fazer uma luz sinalizar automaticamente?', dia:'Uma luz que pisca pode indicar funcionamento, espera, aviso ou falha sem que alguém precise ligá-la e desligá-la manualmente.', problema:'O LED do projeto anterior fica sempre aceso porque recebe alimentação direta. Precisamos que o programa passe a controlar o momento de ligar e desligar.', uso:'Aqui você aprende a configurar uma saída e comandá-la pelo código. É a base de praticamente todo atuador digital que aparecerá depois.'},
      p3: {titulo:'Botão + LED — como uma pessoa dá uma ordem ao sistema?', dia:'Campainhas, teclas de elevador, controles e painéis usam botões para transformar uma ação humana em uma informação elétrica.', problema:'Até agora o Arduino executava uma sequência sozinho. Falta permitir que algo externo altere o comportamento do programa.', uso:'O botão introduz entrada digital, leitura de estado e decisão. Essa mesma lógica será usada com sensores e comandos.'},
      p4: {titulo:'Buzzer — e se o aviso precisar ser percebido sem olhar?', dia:'Forno, carro, relógio e equipamentos de segurança usam som porque nem sempre a pessoa está olhando para uma luz.', problema:'Um LED informa visualmente, mas não chama atenção quando o usuário está de costas ou distante.', uso:'O buzzer transforma uma saída digital em aviso sonoro e prepara a comparação posterior com o buzzer passivo do sensor de ré.'},
      p5: {titulo:'Potenciômetro — e se o usuário precisar escolher um nível?', dia:'Volume, velocidade, brilho e intensidade não são apenas ligado ou desligado: normalmente existem valores intermediários.', problema:'Botões trabalham bem com dois estados, mas não representam uma escolha gradual.', uso:'O potenciômetro introduz leitura analógica e controle proporcional. Isso prepara o entendimento de sensores analógicos, ADC e PWM.'},
      lab1: {titulo:'Monitor Serial — como enxergar o que está acontecendo dentro do programa?', dia:'Quando um equipamento falha, muitas vezes o problema não está visível por fora. Técnicos precisam observar valores internos para entender o que o sistema está lendo e decidindo.', problema:'Um LED mostra apenas o resultado final. Ele não revela o valor de um sensor, uma variável ou a etapa em que o programa está.', uso:'O Monitor Serial vira uma janela de diagnóstico. Ele será usado repetidamente para testar sensores, conectividade e o projeto IoT.'},
      p6: {titulo:'LDR — como o circuito percebe que o ambiente ficou claro ou escuro?', dia:'Iluminação automática de jardins, vitrines e corredores depende de perceber a luminosidade sem alguém apertar um botão.', problema:'O Arduino não enxerga luz diretamente. Precisamos transformar a variação luminosa em uma grandeza elétrica mensurável.', uso:'O LDR conecta uma condição real do ambiente a uma leitura analógica e a uma decisão automática.'},
      p7: {titulo:'HC-SR04 — como perceber distância sem tocar no objeto?', dia:'Sensores de estacionamento, robôs e dispositivos de aproximação precisam saber se algo está perto sem contato físico.', problema:'Botões e LDR não informam distância. Precisamos medir o tempo de ida e volta de um sinal para estimar quão longe está um obstáculo.', uso:'Este projeto introduz medição por tempo, funções e tratamento de leitura; depois será reaproveitado no sensor de ré e na lixeira automática.'},
      lab2: {titulo:'Sensor de ré — quando uma medida precisa virar orientação para uma pessoa', dia:'Ao estacionar, o motorista não quer apenas saber “23 cm”. Ele precisa perceber rapidamente se pode continuar ou se deve parar.', problema:'Uma medida numérica isolada exige interpretação. O sistema precisa transformar distância em sinais visuais e sonoros fáceis de entender.', uso:'Este laboratório integra sensor, lógica, LEDs e buzzer para criar um comportamento parecido com um produto real.'},
      p8: {titulo:'LED RGB — como mostrar vários estados usando um único ponto de luz?', dia:'Equipamentos usam uma mesma luz para indicar ligado, carregando, atenção, erro ou modo de operação.', problema:'Vários LEDs separados ocupam espaço e conexões. Um LED RGB permite combinar cores para comunicar estados diferentes.', uso:'Você passa a controlar múltiplas saídas de forma coordenada e prepara interfaces visuais mais compactas.'},
      lab3: {titulo:'RGB + botões — como o usuário escolhe um modo e o sistema confirma a escolha?', dia:'Painéis e controles permitem selecionar modos e mostram visualmente qual opção ficou ativa.', problema:'Um botão sozinho dá uma ordem, mas o usuário também precisa receber uma confirmação clara do estado escolhido.', uso:'O laboratório integra várias entradas e uma saída multicolorida, reforçando decisão, estado e feedback.'},
      p9: {titulo:'Servo Motor — quando o sistema precisa mover algo para uma posição', dia:'Fechaduras, portinholas, braços pequenos e mecanismos de abertura não precisam apenas ligar: precisam se deslocar até uma posição definida.', problema:'LED e buzzer mudam estado, mas não produzem movimento mecânico controlado.', uso:'O servo introduz posição e movimento e será usado logo depois na lixeira automática.'},
      lab4: {titulo:'Lixeira automática — juntando perceber, decidir e agir', dia:'Abrir uma tampa sem tocar nela é útil quando as mãos estão ocupadas ou quando se deseja reduzir contato com a superfície.', problema:'Para funcionar, o sistema precisa detectar aproximação, decidir se deve abrir e movimentar a tampa de forma coerente.', uso:'Aqui você integra sensor de distância, lógica, estado e servo em uma automação completa — o tipo de raciocínio que será levado ao ESP32 e à IoT.'}
    }
  };

  const paginas = {
    'arduino-programacao-aplicada.html': {
      hero: '.mbb5-intro',
      modulo: {titulo:'5. Programação Aplicada — quando ler e ligar já não é suficiente', dia:'Um sensor pode gerar centenas de números, um servo pode receber muitas posições e um sistema pode precisar informar estados para uma pessoa.', problema:'Sem tratamento, os dados são apenas valores brutos e o código cresce repetindo contas e manipulações.', uso:'Este bloco mostra funções prontas que ajudam a calcular, produzir movimentos, montar mensagens e testar comportamentos sem abandonar os circuitos já conhecidos.'},
      itens: {
        'b5-1': {titulo:'Funções matemáticas — quando o número precisa virar informação', dia:'Em um monitoramento real, saber apenas a distância atual nem sempre basta; pode ser importante saber diferença, mínimo e máximo.', problema:'Anotar e comparar tudo manualmente é inviável quando as leituras chegam continuamente.', uso:'Funções matemáticas resumem e transformam as leituras para apoiar decisões e acompanhamento.'},
        'b5-2': {titulo:'Trigonometria — quando um movimento precisa variar de forma suave e repetitiva', dia:'Mecanismos de varredura, animações e movimentos automáticos muitas vezes precisam ir e voltar sem saltos bruscos.', problema:'Escrever dezenas de posições uma a uma torna o código longo e difícil de ajustar.', uso:'Seno e cosseno permitem gerar padrões periódicos que depois podem controlar movimento ou outras grandezas.'},
        'b5-3': {titulo:'Texto — quando o sistema precisa conversar com uma pessoa', dia:'“1827” sozinho pode não significar nada para quem olha um painel. “Luminosidade: 1827 — ambiente claro” já comunica uma situação.', problema:'Máquinas trabalham bem com números; pessoas precisam de mensagens, rótulos e estados compreensíveis.', uso:'Funções e objetos de texto ajudam a transformar dados em mensagens para Monitor Serial, telas e aplicações.'},
        'b5-4': {titulo:'Números aleatórios — como testar antes de ter todas as situações reais?', dia:'Um sistema precisa ser testado com valores variados, mas nem sempre é prático repetir manualmente dezenas de condições.', problema:'Usar sempre a mesma entrada pode esconder falhas que só aparecem em outros valores.', uso:'Valores pseudoaleatórios ajudam a criar cenários de teste e entender limites antes de depender de um sensor ou evento real.'}
      }
    },
    'arduino-conectividade.html': {
      hero: '.mbb6-intro',
      modulo: {titulo:'6. Conectividade — quando o projeto precisa sair da bancada', dia:'Controlar um equipamento pelo celular, acompanhar um sensor no notebook ou acessar uma interface sem ficar preso ao cabo USB são necessidades comuns.', problema:'Um sistema local pode funcionar perfeitamente e ainda assim estar isolado de pessoas, aplicativos e outros dispositivos.', uso:'Bluetooth, Wi‑Fi, HTTP, mDNS e tunelamento aparecem como respostas diferentes para necessidades reais de comunicação.'},
      itens: {
        'b6-prep': {titulo:'ESP32 — por que trocar de placa agora?', dia:'O projeto já lê e controla componentes, mas queremos comunicação sem fio sem acrescentar vários módulos externos.', problema:'O Arduino Uno é excelente para aprender entradas e saídas, porém não traz Wi‑Fi e Bluetooth integrados.', uso:'O ESP32 mantém a lógica de GPIO já conhecida e acrescenta os recursos de conectividade necessários às próximas etapas.'},
        'b6-1': {titulo:'Bluetooth — quando o controle está perto', dia:'Imagine ligar uma luz, abrir um mecanismo ou enviar um comando pelo celular estando no mesmo ambiente.', problema:'Criar ou depender de uma rede Wi‑Fi pode ser desnecessário para uma comunicação curta e direta.', uso:'Bluetooth resolve o controle próximo e mostra como um comando recebido sem fio pode alterar o circuito.'},
        'b6-2': {titulo:'Wi‑Fi — quando o dispositivo precisa entrar na mesma rede que outros equipamentos', dia:'Em uma casa, escola ou empresa, celulares e notebooks já compartilham uma rede. Um dispositivo embarcado pode participar desse mesmo ambiente.', problema:'Bluetooth é ótimo de perto, mas não integra naturalmente o projeto à infraestrutura IP já existente.', uso:'Wi‑Fi conecta o ESP32 à rede e abre caminho para HTTP, navegador e serviços.'},
        'b6-3': {titulo:'HTTP — quando você quer usar o navegador como interface', dia:'Abrir uma página no celular é mais natural do que instalar um terminal técnico só para acender um LED ou consultar um estado.', problema:'Estar conectado ao Wi‑Fi não define como os dispositivos vão pedir e entregar informações.', uso:'HTTP permite que o ESP32 atue como cliente ou servidor e converse usando o mesmo modelo básico da Web.'},
        'b6-4': {titulo:'mDNS — quando lembrar o endereço IP vira um incômodo', dia:'Pessoas lembram nomes com facilidade, mas dificilmente querem decorar um endereço como 192.168.0.37, que ainda pode mudar.', problema:'O serviço funciona, mas encontrá-lo pelo IP torna o uso menos amigável.', uso:'mDNS permite acessar um dispositivo local por um nome, aproximando o protótipo de uma experiência de uso real.'},
        'b6-5': {titulo:'Tunelamento — quando surge a necessidade de acessar de fora da rede local', dia:'Às vezes alguém precisa demonstrar ou acompanhar temporariamente um serviço que está rodando apenas no computador ou na rede local.', problema:'Um endereço local não é acessível diretamente pela Internet e expor um serviço sem critério cria riscos.', uso:'O túnel mostra como um serviço local pode receber acesso externo temporário e prepara a discussão de segurança do Bloco 9.'}
      }
    },
    'arduino-iot.html': {
      hero: '.mbb7-intro',
      modulo: {titulo:'7. Internet das Coisas — por que conectar objetos?', dia:'Relógios acompanham atividade, cidades monitoram trânsito, indústrias observam máquinas e casas controlam equipamentos à distância.', problema:'Ter Wi‑Fi em um objeto não explica sozinho por que ele está conectado nem que valor os dados e comandos produzem.', uso:'Este bloco ajuda a enxergar o sistema inteiro: objeto físico, sensor ou atuador, rede, aplicação, pessoas e finalidade.'},
      itens: {
        'b7-1': {titulo:'Fundamentos de IoT — “conectado” é suficiente?', dia:'Uma lâmpada com controle remoto e um sensor que envia dados para uma aplicação parecem ambos “inteligentes”, mas podem ter arquiteturas bem diferentes.', problema:'O termo IoT é usado de forma ampla e pode virar apenas um rótulo de marketing.', uso:'Você aprende a reconhecer quais partes formam um sistema conectado e qual finalidade justifica a comunicação.'},
        'b7-2': {titulo:'Histórico — por que a IoT se tornou comum justamente nas últimas décadas?', dia:'Hoje é barato colocar sensores, processamento e rede em objetos pequenos; nem sempre foi assim.', problema:'Sem entender a evolução, parece que a IoT surgiu apenas porque alguém inventou um nome novo.', uso:'A história mostra que miniaturização, redes, sensores e software amadureceram juntos e tornaram essas aplicações viáveis.'},
        'b7-3': {titulo:'Conceitos e definições — nem tudo que é automático é IoT', dia:'Uma luz pode acender sozinha sem Internet; outra pode ser controlada pelo celular. Ambas automatizam algo, mas não são iguais.', problema:'Misturar circuito, sistema embarcado, automação e IoT dificulta explicar corretamente o que cada projeto realmente faz.', uso:'A comparação ajuda a classificar sistemas sem decorar definições isoladas.'},
        'b7-4': {titulo:'Aplicações — onde esse conhecimento encontra problemas reais?', dia:'Casa, indústria, cidade, saúde, monitoramento e rastreamento têm necessidades diferentes, mas todos podem combinar sensores, processamento e comunicação.', problema:'Aprender IoT apenas como conceito não mostra por que alguém investiria em conectar um objeto.', uso:'As aplicações ligam a tecnologia a finalidades concretas e ajudam a escolher soluções adequadas em vez de usar IoT por moda.'}
      }
    },
    'arduino-protocolos.html': {
      hero: '.mbb8-intro',
      modulo: {titulo:'8. RTOS e Protocolos — quando o sistema cresce e as partes precisam se organizar', dia:'Um equipamento real pode ler sensores, atualizar um display, atender a rede e acionar saídas quase ao mesmo tempo.', problema:'Sem organização de tempo e sem regras de comunicação, uma tarefa pode bloquear outra ou dois dispositivos podem simplesmente não se entender.', uso:'RTOS e protocolos aparecem aqui como ferramentas para coordenar tarefas e permitir comunicação correta entre partes diferentes do sistema.'},
      itens: {
        'b8-prep': {titulo:'Preparação — por que não basta ligar fios?', dia:'Dois conectores podem até encaixar, mas isso não significa que os sinais elétricos e as regras de comunicação sejam compatíveis.', problema:'Conectar tecnologias diferentes sem entender interface, nível elétrico e protocolo pode impedir a comunicação ou danificar equipamentos.', uso:'Esta preparação cria a pergunta certa para as etapas seguintes: que problema de comunicação existe e que tecnologia realmente o resolve?'},
        'b8-1': {titulo:'RTOS — quando várias tarefas não podem ficar esperando umas pelas outras', dia:'Imagine um sistema que precisa piscar um alerta, ler um sensor e continuar respondendo pela rede.', problema:'Se uma tarefa bloquear o programa por tempo demais, outra pode atrasar ou deixar de responder.', uso:'Um RTOS organiza tarefas e tempos de execução, introduzindo uma forma mais estruturada de lidar com sistemas embarcados maiores.'},
        'b8-2': {titulo:'I2C — quando faltam pinos para tantos periféricos', dia:'Um display, um sensor e outro módulo podem precisar conversar com a mesma placa, mas os GPIOs não são infinitos.', problema:'Ligar cada dispositivo com muitos fios aumenta a montagem e consome pinos rapidamente.', uso:'I2C permite compartilhar dois sinais entre vários dispositivos identificados por endereço.'},
        'b8-3': {titulo:'UART e RS-232 — quando “serial” não significa a mesma coisa', dia:'Equipamentos antigos, módulos e instrumentos costumam trazer conectores ou sinais seriais, mas eles podem usar níveis elétricos diferentes.', problema:'Ler TX e RX e ligar diretamente os fios pode ser um erro se um lado trabalhar em TTL e o outro em RS-232.', uso:'A comparação ensina a separar lógica de comunicação de padrão elétrico e evita conexões incompatíveis.'},
        'b8-4': {titulo:'CAN — quando vários controladores precisam conversar em um ambiente exigente', dia:'Carros e máquinas têm diversos controladores trocando informações enquanto motores, cabos e cargas geram ruído elétrico.', problema:'Uma ligação simples ponto a ponto não escala bem quando muitos nós precisam compartilhar mensagens com confiabilidade.', uso:'CAN mostra uma rede pensada para múltiplos controladores e ambientes industriais ou automotivos.'},
        'b8-5': {titulo:'TCP/IP — como uma página chega do navegador até o ESP32?', dia:'Você digita um endereço e a página aparece; por trás disso, várias camadas trabalham juntas.', problema:'Dizer apenas “é pela Internet” esconde funções diferentes de endereçamento, transporte e aplicação.', uso:'TCP/IP ajuda a entender o caminho dos dados e a posição do HTTP dentro da comunicação em rede.'},
        'b8-6': {titulo:'IEEE 802.11 — por que um Wi‑Fi aparece para um dispositivo e para outro não?', dia:'É comum um celular enxergar uma rede de 5 GHz enquanto um equipamento IoT só encontra a rede de 2,4 GHz.', problema:'“Ter Wi‑Fi” não significa suportar todas as faixas e versões do padrão.', uso:'Conhecer as famílias 802.11 ajuda a diagnosticar compatibilidade antes de culpar o código ou a senha.'},
        'b8-7': {titulo:'Bluetooth — Classic e BLE resolvem o mesmo tipo de necessidade?', dia:'Áudio, terminais seriais, sensores vestíveis e dispositivos de bateria usam Bluetooth, mas com perfis e objetivos diferentes.', problema:'Escolher “Bluetooth” sem considerar consumo, tipo de dado e compatibilidade pode levar à tecnologia errada.', uso:'A comparação entre Bluetooth Classic e BLE ajuda a relacionar recurso de comunicação ao tipo de aplicação.'}
      }
    },
    'arduino-seguranca.html': {
      hero: '.mbb9-intro',
      modulo: {titulo:'9. Proteção e Segurança — quando um projeto útil também pode afetar pessoas', dia:'Uma fechadura conectada, um rastreador ou um sensor de saúde pode facilitar a vida, mas também pode expor dados ou permitir comandos indevidos.', problema:'Quanto mais o sistema coleta e se conecta, maior o impacto de uma configuração errada, senha fraca ou dado desnecessário.', uso:'Este bloco coloca privacidade e segurança dentro do projeto, antes da entrega, e não como um remendo depois.'},
      itens: {
        'b9-prep': {titulo:'Preparação — o que muda quando o protótipo deixa de ser só seu?', dia:'Na bancada, só você conhece o endereço e toca no circuito. Em uma rede, outras pessoas e dispositivos podem alcançar o sistema.', problema:'Algo que era apenas “funcional” passa a ter usuários, dados, credenciais e superfícies de acesso.', uso:'A preparação muda a pergunta de “funciona?” para “funciona de forma responsável e com acesso controlado?”'},
        'b9-1': {titulo:'Proteção de dados — coletar tudo porque é possível não é uma boa decisão', dia:'Uma pulseira pode medir saúde, um rastreador pode indicar localização e um controle de acesso pode registrar horários ligados a pessoas.', problema:'Esses registros podem revelar informações sobre alguém e continuar existindo muito depois do uso original.', uso:'Você aprende a perguntar finalidade, necessidade, acesso e retenção antes de transformar uma leitura em dado pessoal armazenado.'},
        'b9-2': {titulo:'Segurança — quem pode ver, alterar ou comandar o sistema?', dia:'Se uma página controla uma luz, imagine a mesma lógica aplicada a uma porta, bomba, máquina ou alarme.', problema:'Um sistema aberto a qualquer pessoa, com credenciais expostas ou sem comportamento seguro diante de falhas pode causar prejuízo real.', uso:'Autenticação, autorização, disponibilidade e proteção de credenciais entram como requisitos do sistema, não como detalhes opcionais.'}
      }
    },
    'arduino-projeto-iot.html': {
      hero: '.mbb10-intro',
      modulo: {titulo:'10. Projeto IoT — por que juntar tudo agora?', dia:'Até aqui cada ideia foi estudada em partes: sensor, decisão, atuador, rede, aplicação e segurança.', problema:'Um produto ou solução real não entrega partes isoladas; elas precisam funcionar juntas e continuar compreensíveis quando algo falha.', uso:'O projeto final transforma o percurso em um sistema único, com problema, requisitos, montagem, software, testes e critérios de entrega.'},
      itens: {
        'b10-1': {titulo:'Problema e requisitos — primeiro entender a necessidade', dia:'Uma sala pode ficar com a iluminação ligada mesmo quando há luz natural suficiente, desperdiçando energia.', problema:'Começar escolhendo componentes antes de definir o problema costuma gerar um protótipo que funciona, mas não resolve uma necessidade clara.', uso:'Você transforma uma situação cotidiana em requisitos observáveis que orientarão todas as escolhas seguintes.'},
        'b10-2': {titulo:'Arquitetura e montagem — desenhar antes de conectar tudo', dia:'Quando sensor, rede, página e atuador entram no mesmo projeto, fica fácil perder a noção de quem conversa com quem.', problema:'Montar sem um caminho definido torna erros de ligação e integração mais difíceis de localizar.', uso:'A arquitetura separa responsabilidades e deixa claro o fluxo do dado antes do código completo.'},
        'b10-3': {titulo:'Teste local — descobrir se sensor e atuador funcionam antes da rede', dia:'Se o LED não responde em uma aplicação Web, o defeito pode estar no sensor, no código, no Wi‑Fi ou na página.', problema:'Testar tudo de uma vez cria muitas causas possíveis para o mesmo sintoma.', uso:'Validar primeiro a parte local produz uma evidência simples e reduz o espaço de investigação.'},
        'b10-4': {titulo:'Aplicação Web — transformar o protótipo em algo que uma pessoa consiga usar', dia:'Ninguém deveria precisar abrir o Monitor Serial e decorar comandos técnicos para consultar ou controlar um sistema cotidiano.', problema:'Um protótipo pode funcionar tecnicamente e ainda ser pouco utilizável.', uso:'A página Web apresenta estado, leitura e comandos em uma interface compreensível para o usuário.'},
        'b10-5': {titulo:'Integração final — quando as partes deixam de funcionar separadamente', dia:'No uso real, o sistema precisa ler a luz, decidir, obedecer a comandos e atualizar a interface sem que a pessoa pense em cada subsistema.', problema:'Partes que funcionam sozinhas podem entrar em conflito quando passam a compartilhar estado e decisões.', uso:'A integração organiza modos manual e automático e consolida o fluxo sensor → decisão → atuador → rede → aplicação.'},
        'b10-6': {titulo:'Segurança e dados — o que você está expondo ao colocar o projeto na rede?', dia:'Uma interface que parece inofensiva em sala de aula pode representar um comando importante em uma aplicação real.', problema:'Deixar credenciais no código, coletar dados desnecessários ou permitir acesso sem critério cria riscos que não aparecem no LED.', uso:'Esta etapa revisa o sistema com a pergunta: o mínimo necessário está exposto e apenas quem deve consegue agir?'},
        'b10-7': {titulo:'Testes e entrega — funcionar uma vez não significa estar pronto', dia:'Um equipamento pode funcionar na demonstração e falhar quando a luz muda, o Wi‑Fi cai ou o usuário escolhe outro modo.', problema:'Sem roteiro de testes, a entrega depende de sorte e a correção de falhas vira improviso.', uso:'Testes, inclusive de falha, produzem evidências de que o sistema atende aos requisitos e pode ser explicado por quem o construiu.'}
      }
    }
  };

  function aplicarPrincipal(){
    const intro = document.getElementById('intro');
    if(intro && !intro.querySelector(`[${MARCA}="modulo"]`)){
      const hero = intro.querySelector('.fund-hero');
      if(hero){
        const bloco = document.createElement('div');
        bloco.className = 'mbb-human-context mbb-human-module';
        bloco.setAttribute(MARCA, 'modulo');
        bloco.innerHTML = htmlContexto(contextoPrincipal.moduloFundamentos, 'Por que começar por Fundamentos?');
        hero.insertAdjacentElement('afterend', bloco);
      }
    }
    inserirModuloNoProjeto('p2', contextoPrincipal.moduloIO);
    inserirModuloNoProjeto('p6', contextoPrincipal.moduloSensores);
    inserirModuloNoProjeto('p8', contextoPrincipal.moduloAtuadores);
    Object.entries(contextoPrincipal.itens).forEach(([id,dados]) => inserirContextoProjeto(id,dados));
  }

  function aplicarPagina(){
    garantirEstilo();
    corrigirLinkEntradaSaida();
    const arquivo = (location.pathname.split('/').pop() || 'arduino.html').toLowerCase();
    if(arquivo === 'arduino.html' || arquivo === ''){
      aplicarPrincipal();
      return;
    }
    const pagina = paginas[arquivo];
    if(!pagina) return;
    inserirModuloNoHero(pagina.hero, pagina.modulo);
    Object.entries(pagina.itens).forEach(([id,dados]) => inserirContextoProjeto(id,dados));
  }

  function aplicarComRepeticao(){
    aplicarPagina();
    let tentativas = 0;
    const timer = setInterval(() => {
      aplicarPagina();
      tentativas += 1;
      if(tentativas >= 8) clearInterval(timer);
    }, 250);
  }

  window.MbbArduinoContexto = { aplicar: aplicarPagina };
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicarComRepeticao);
  else aplicarComRepeticao();
})();
