window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "embarcados-iot",
  number: "16",
  unit: "Ato 3 · Computadores se conectam",
  menuTitle: "Embarcados e IoT",
  technicalTitle: "sistema embarcado • microcontrolador • sensor • atuador • ADC • firmware • conectividade • IoT • RTOS • mDNS • edge",
  title: "Todo computador precisa ter teclado, monitor e Windows?",
  objective: "Reconhecer sistemas embarcados, microcontroladores, sensores, atuadores e firmware e compreender quando a conectividade transforma automação local em uma arquitetura de IoT.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Computação escondida</span>
      <h2>Uma máquina de lavar mede água, controla motor e executa uma sequência de decisões — mas ninguém a compra para editar planilhas.</h2>
      <p>Existe computação ali, integrada a outro produto e dedicada a um conjunto de funções. <strong>Quando a computação deixa de ser o produto principal e passa a controlar o equipamento, entramos no mundo dos sistemas embarcados.</strong></p>
    </div>

    <div class="definition-box featured"><span class="term">Sistema embarcado</span><p>É um sistema computacional integrado a um equipamento maior e projetado principalmente para realizar funções específicas desse equipamento.</p></div>
    <p>Impressoras, roteadores, centrais automotivas, equipamentos médicos, máquinas industriais e eletrodomésticos podem conter sistemas embarcados. Eles continuam envolvendo entrada, processamento, memória, software e saída, mas com prioridades próprias de custo, energia, tamanho e confiabilidade.</p>

    <h3>Por que não colocar um PC inteiro numa cafeteira?</h3>
    <p>Uma cafeteira precisa ler botões e sensores, controlar aquecimento e temporização. Um processador poderoso, gigabytes de RAM e um SSD seriam caros e desnecessários para esse trabalho. Precisamos de uma solução pequena que reúna processamento e controle próximo do hardware.</p>
    <div class="definition-box featured"><span class="term">Microcontrolador — MCU</span><p>É um circuito integrado que reúne unidade de processamento, memória e periféricos de entrada/saída, normalmente voltado ao controle de sistemas.</p></div>
    <div class="comparison-grid"><article><strong>Microprocessador</strong><p>Concentra capacidade de processamento e costuma integrar sistemas mais complexos com outros componentes externos.</p></article><article><strong>Microcontrolador</strong><p>Integra processamento, memória e recursos de controle no próprio chip para tarefas embarcadas.</p></article></div>
    <p>Essa distinção é uma tendência útil, não uma fronteira absoluta para cada chip existente.</p>

    <h3>Arduino e ESP32: placa não é sinônimo de chip</h3>
    <p>Ao aprender eletrônica, é comum apontar para uma placa inteira e chamá-la de “microcontrolador”. Mas a placa reúne vários componentes para facilitar alimentação, conexão e desenvolvimento.</p>
    <div class="comparison-grid">
      <article>
        <figure class="historical-media portrait">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino-Uno.jpg/960px-Arduino-Uno.jpg" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino-Uno.jpg/250px-Arduino-Uno.jpg 250w, https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino-Uno.jpg/960px-Arduino-Uno.jpg 960w" sizes="(max-width:700px) 80vw, 300px" alt="Placa Arduino Uno vista de cima" width="960" height="1280" loading="lazy" decoding="async">
          <figcaption><strong>Arduino Uno.</strong> A placa inclui microcontrolador, conectores, reguladores e circuitos auxiliares.<span class="credit">Particitae · CC0 · Wikimedia Commons.</span></figcaption>
        </figure>
        <strong>Arduino</strong><p>É uma plataforma de desenvolvimento que combina placas, software, bibliotecas e ferramentas. O microcontrolador é um dos componentes da placa.</p>
      </article>
      <article>
        <figure class="historical-media">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg/960px-ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg/330px-ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg/960px-ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg 960w" sizes="(max-width:700px) 92vw, 500px" alt="Placa de desenvolvimento com módulo ESP-WROOM-32" width="960" height="737" loading="lazy" decoding="async">
          <figcaption><strong>Placa de desenvolvimento ESP32.</strong> Famílias ESP32 são populares em projetos que precisam de processamento e conectividade sem fio.<span class="credit">Ubahnverleih · CC0 · Wikimedia Commons.</span></figcaption>
        </figure>
        <strong>ESP32</strong><p>É uma família de sistemas em chip muito usada em aplicações embarcadas, com recursos de processamento, periféricos e conectividade como Wi-Fi e Bluetooth em vários modelos.</p>
      </article>
    </div>

    <h3>Como um sistema percebe o mundo?</h3>
    <p>Imagine uma estufa que precisa descobrir se o solo está seco. O processador não “sente” umidade. Algum dispositivo precisa transformar uma condição física em sinal que possa ser medido.</p>
    <div class="two-col"><div class="definition-box"><span class="term">Sensor</span><p>Detecta ou mede uma condição física e produz um sinal que pode ser interpretado pelo sistema.</p></div><div class="definition-box"><span class="term">Atuador</span><p>Transforma um comando do sistema em uma ação física, como acionar motor, relé, válvula, buzzer ou LED.</p></div></div>
    <div class="concept-flow" aria-label="Ciclo sensor processamento atuador"><div><strong>Sensor</strong><span>mede o mundo</span></div><span class="flow-arrow">→</span><div><strong>Microcontrolador</strong><span>interpreta e decide</span></div><span class="flow-arrow">→</span><div><strong>Atuador</strong><span>age no mundo</span></div></div>

    <h3>O mundo físico nem sempre chega como número pronto</h3>
    <p>Alguns sensores produzem uma tensão que varia continuamente. O programa precisa de uma representação numérica para trabalhar com essa medida.</p>
    <div class="definition-box"><span class="term">ADC — Conversor Analógico-Digital</span><p>É um circuito que converte uma grandeza elétrica analógica medida em uma representação digital utilizável pelo processador.</p></div>
    <div class="representation-flow" aria-label="Conversão de um sinal de sensor"><div><strong>Grandeza</strong><span>luz, temperatura...</span></div><span class="flow-arrow">→</span><div><strong>Sensor</strong><span>sinal elétrico</span></div><span class="flow-arrow">→</span><div><strong>ADC</strong><span>valor digital</span></div><span class="flow-arrow">→</span><div><strong>Programa</strong></div></div>

    <h3>Quem coordena as leituras e decisões?</h3>
    <p>O equipamento precisa saber quando ler um sensor, qual limite aplicar, quando acionar uma saída e como reagir a falhas. Isso é comportamento definido por software.</p>
    <div class="definition-box featured"><span class="term">Firmware</span><p>É software armazenado de forma não volátil e fortemente ligado ao funcionamento do equipamento. Em sistemas embarcados, pode coordenar sensores, atuadores, temporização e comunicação.</p></div>
    <div class="example-box compact"><strong>Uma regra simples de irrigação</strong><p>ler umidade → comparar com limite → se estiver seca, ligar bomba → medir novamente.</p></div>

    <h3>Isso já é Internet das Coisas?</h3>
    <p>O sistema de irrigação pode funcionar perfeitamente sozinho no jardim. Mede umidade, decide e aciona a bomba. Existe automação embarcada, mas nenhuma comunicação com outros sistemas foi necessária.</p>
    <div class="note-box compact"><strong>Automático ≠ IoT.</strong><p>Um equipamento pode ser inteligente no sentido de tomar decisões locais e ainda não participar de uma arquitetura de Internet das Coisas.</p></div>
    <p>Agora imagine querer acompanhar a umidade pelo celular, guardar histórico num servidor e receber alertas. O dispositivo precisa de uma interface de rede e passa a integrar o mundo físico a outros sistemas digitais.</p>
    <div class="definition-box featured"><span class="term">Dispositivo IoT</span><p>Na definição adotada pelo NIST para esse contexto, possui pelo menos um <strong>transdutor</strong> — sensor ou atuador — para interagir com o mundo físico e pelo menos uma <strong>interface de rede</strong> para interagir com o mundo digital.</p></div>

    <h3>Wi-Fi, Bluetooth e Internet continuam sendo coisas diferentes</h3>
    <p>Conectar o sensor exige escolher um meio adequado. Um dispositivo próximo pode usar Bluetooth; outro entra na LAN por Wi-Fi ou Ethernet; aplicações externas podem utilizar redes celulares ou outras tecnologias.</p>
    <div class="comparison-grid three"><article><strong>Bluetooth</strong><p>Muito usado em comunicação de curto alcance entre dispositivos.</p></article><article><strong>Wi-Fi</strong><p>Conecta dispositivos a redes locais sem fio baseadas em IEEE 802.11.</p></article><article><strong>Internet</strong><p>Interliga redes. Estar conectado ao Wi-Fi não garante acesso à Internet.</p></article></div>

    <h3>Tempo real não significa “o mais rápido possível”</h3>
    <p>Imagine um controlador de freio que às vezes responde em 1 ms, mas ocasionalmente demora um segundo. Para sistemas críticos, a imprevisibilidade pode ser pior que uma resposta sempre dentro de um limite conhecido.</p>
    <div class="definition-box"><span class="term">Sistema de tempo real</span><p>É aquele em que cumprir requisitos temporais faz parte da correção do sistema. O importante é responder dentro de limites previsíveis, não simplesmente alcançar a maior velocidade média.</p></div>
    <div class="definition-box compact"><span class="term">RTOS — Real-Time Operating System</span><p>É um sistema operacional projetado para organizar tarefas com requisitos de temporização previsíveis. Muitos microcontroladores simples, porém, podem executar firmware sem um sistema operacional completo.</p></div>

    <h3>Um pequeno dispositivo também pode ser cliente ou servidor</h3>
    <p>Um ESP32 pode enviar medições para uma API remota como cliente. Também pode executar um pequeno servidor HTTP local para que outro dispositivo consulte seu estado. Isso mostra que <strong>cliente e servidor são papéis de software, não tamanhos de computador</strong>.</p>
    <details class="sources-box"><summary>Aprofunde: nomes locais e túneis</summary><p>Em algumas redes, <strong>mDNS</strong> permite resolver nomes locais como <code>sensor.local</code> sem um servidor DNS convencional central. Para desenvolvimento, serviços de tunelamento como ngrok ou localhost.run podem criar um caminho temporário até um servidor local. Expor um serviço externamente aumenta a superfície de ataque e exige atenção a autenticação, atualização e criptografia.</p></details>

    <h3>Do sensor até a nuvem</h3>
    <div class="representation-flow" aria-label="Arquitetura IoT simplificada"><div><strong>Sensor</strong><span>mundo físico</span></div><span class="flow-arrow">→</span><div><strong>Dispositivo</strong><span>firmware + rede</span></div><span class="flow-arrow">→</span><div><strong>Servidor / nuvem</strong><span>processa e guarda</span></div><span class="flow-arrow">→</span><div><strong>App</strong><span>usuário acompanha</span></div></div>
    <p>Agora vários capítulos se encontram: rede, Internet, API, banco de dados e nuvem podem fazer parte do mesmo sistema IoT.</p>

    <h3>E se a Internet cair, a planta deve morrer?</h3>
    <p>Uma irrigação crítica que depende de consultar a nuvem antes de abrir a válvula pode falhar justamente quando a rede externa está indisponível. Algumas decisões precisam continuar perto de onde os dados são produzidos.</p>
    <div class="definition-box featured"><span class="term">Edge computing — computação de borda</span><p>É a realização de processamento próximo à origem dos dados ou ao dispositivo, reduzindo dependência de processamento remoto para determinadas decisões.</p></div>
    <div class="comparison-grid"><article><strong>Na borda</strong><p>decisão rápida e funcionamento local essencial.</p></article><article><strong>Na nuvem</strong><p>histórico, análise ampla, administração e integração.</p></article></div>
    <p>Os dois modelos podem trabalhar juntos.</p>

    <h3>Conectar também cria risco</h3>
    <p>Uma câmera que antes funcionava isolada agora possui rede, credenciais, firmware e talvez acesso remoto. Cada nova interface cria possibilidades úteis e também pontos que precisam ser protegidos.</p>
    <div class="bridge-box"><strong>Ponte para Segurança</strong><p>Senha padrão, firmware vulnerável ou serviço exposto pode transformar um equipamento útil num ponto de entrada para ataques. <strong>Conectividade aumenta capacidade — e responsabilidade.</strong></p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Checkpoint 5</span><h3>Você enxerga o sistema além do LED?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Um sistema embarcado pode executar funções locais sem rede; IoT acrescenta integração do dispositivo físico com o mundo digital por interfaces de rede."><p>Todo sistema embarcado é automaticamente IoT?</p><label><input type="radio" name="q16a" value="a"> Sim, se tiver um microcontrolador.</label><label><input type="radio" name="q16a" value="b"> Não. Ele pode funcionar sem conectividade de rede.</label><label><input type="radio" name="q16a" value="c"> Sim, se possuir LED.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A placa Arduino contém um microcontrolador e outros componentes; a plataforma Arduino é ainda mais ampla que a placa."><p>Arduino Uno e microcontrolador são exatamente a mesma coisa?</p><label><input type="radio" name="q16b" value="a"> Sim, qualquer placa é um único chip.</label><label><input type="radio" name="q16b" value="b"> Sim, porque ambos significam IoT.</label><label><input type="radio" name="q16b" value="c"> Não. A placa contém microcontrolador e circuitos auxiliares.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Processar uma decisão crítica localmente pode manter o sistema funcionando mesmo quando a conexão com a nuvem falha."><p>Por que uma irrigação pode manter a decisão de emergência na borda?</p><label><input type="radio" name="q16c" value="a"> Para não depender da Internet para uma ação essencial.</label><label><input type="radio" name="q16c" value="b"> Porque sensores não podem enviar dados à nuvem.</label><label><input type="radio" name="q16c" value="c"> Porque edge elimina qualquer necessidade de rede.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Tempo real está ligado a requisitos temporais previsíveis, não apenas a executar na maior velocidade possível."><p>O que caracteriza melhor um requisito de tempo real?</p><label><input type="radio" name="q16d" value="a"> Ter o processador mais rápido do mercado.</label><label><input type="radio" name="q16d" value="b"> Responder dentro de limites temporais definidos e previsíveis.</label><label><input type="radio" name="q16d" value="c"> Usar obrigatoriamente Internet.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Um <strong>sistema embarcado</strong> integra computação a um equipamento para funções específicas. Microcontroladores aproximam processamento, memória e entrada/saída; sensores percebem condições; atuadores agem; firmware coordena o comportamento. IoT acrescenta conectividade e integração com outros sistemas. <strong>Automação, IoT, nuvem e edge são conceitos relacionados, mas não sinônimos.</strong></p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Agora conectamos computadores, servidores e até objetos do mundo físico. Se tudo conversa com tudo, o que impede alguém de acessar aquilo que não deveria?</p></div>

    <details class="sources-box"><summary>Fontes e créditos das imagens</summary><ul>
      <li><a href="https://csrc.nist.gov/glossary/term/iot_device" target="_blank" rel="noopener">NIST — definição de dispositivo IoT</a></li>
      <li><a href="https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program/faqs" target="_blank" rel="noopener">NIST — IoT Cybersecurity Program FAQ</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Arduino-Uno.jpg" target="_blank" rel="noopener">Wikimedia Commons — Arduino Uno (Particitae, CC0)</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg" target="_blank" rel="noopener">Wikimedia Commons — ESP32 (Ubahnverleih, CC0)</a></li>
    </ul></details>
  `
});
