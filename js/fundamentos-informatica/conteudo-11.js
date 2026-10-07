window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "redes-locais",
  number: "11",
  unit: "Ato 3 · Computadores se conectam",
  menuTitle: "Redes locais",
  technicalTitle: "rede • interface • Ethernet • Wi-Fi • protocolo • LAN • MAC • switch • quadro",
  title: "Como dois computadores próximos conseguem trocar dados?",
  objective: "Compreender como dispositivos participam de uma rede local, distinguindo interface, meio, protocolo, endereço MAC, switch e quadro.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">O arquivo precisa sair da máquina</span>
      <h2>Você terminou <code>trabalho.pdf</code> e quer enviá-lo ao computador ao lado.</h2>
      <p>Os dois computadores possuem memória e armazenamento próprios. Para os dados saírem de um e chegarem ao outro, precisamos criar <strong>um caminho de comunicação e regras que ambos compreendam</strong>.</p>
    </div>

    <div class="definition-box featured"><span class="term">Rede de computadores</span><p>É um conjunto de dispositivos interconectados capazes de trocar dados usando meios e regras de comunicação.</p></div>
    <p>Computadores, celulares, impressoras, servidores, câmeras e sensores podem participar de redes. <strong>Estar fisicamente perto não basta:</strong> é preciso existir uma forma de comunicar.</p>

    <h3>A entrada para a rede</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ethernet%20pci%20card.jpg?width=960" alt="Placa de rede Ethernet PCI com conector de rede" width="960" height="886" loading="lazy" decoding="async">
        <figcaption><strong>Placa de rede Ethernet.</strong> Em muitos computadores atuais a interface já vem integrada à placa-mãe, mas a função continua existindo.<span class="credit">Sub · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div>
        <div class="definition-box"><span class="term">Interface de rede</span><p>É o componente que permite ao equipamento participar de determinado tipo de rede, enviando e recebendo dados.</p></div>
        <p>Você também encontrará a sigla <strong>NIC — Network Interface Controller/Card</strong>. Uma máquina pode possuir mais de uma interface, como Ethernet e Wi-Fi ao mesmo tempo.</p>
      </div>
    </div>

    <h3>Cabo e rádio: meios diferentes para o mesmo objetivo</h3>
    <div class="comparison-grid">
      <article><strong>Ethernet</strong><p>É uma família de tecnologias muito usada em redes locais cabeadas.</p></article>
      <article><strong>Wi-Fi</strong><p>É uma família de tecnologias de rede local sem fio que utiliza ondas de rádio.</p></article>
    </div>
    <p>O meio físico muda, mas em ambos os casos os participantes precisam seguir regras compatíveis.</p>

    <div class="definition-box"><span class="term">Protocolo</span><p><strong>É um conjunto de regras que define como participantes de uma comunicação devem trocar informações.</strong></p></div>
    <div class="example-box compact"><strong>Pense numa conversa telefônica.</strong><p>Alguém inicia a chamada, o outro atende, mensagens seguem certas convenções e a comunicação termina. Redes exigem regras ainda mais precisas: como identificar participantes, organizar dados, detectar problemas e saber onde começa e termina cada unidade transmitida.</p></div>

    <h3>Uma rede dentro da escola, de casa ou do escritório</h3>
    <div class="definition-box"><span class="term">LAN — Local Area Network</span><p>É uma rede que interliga dispositivos em uma área relativamente limitada, como uma residência, laboratório, escritório ou prédio.</p></div>
    <div class="note-box compact"><strong>Rede não significa Internet.</strong><p>Três computadores podem compartilhar arquivos e impressoras dentro de uma LAN mesmo que a conexão com a Internet esteja indisponível.</p></div>

    <h3>Se há vários computadores, qual deles deve receber o quadro?</h3>
    <p>Numa LAN Ethernet, as interfaces usam endereços no nível de enlace para identificar origem e destino.</p>
    <div class="definition-box"><span class="term">Endereço MAC</span><p>É um identificador usado por tecnologias de enlace como Ethernet e Wi-Fi. Um formato amplamente utilizado possui <strong>48 bits</strong> e pode aparecer como <code>34:7D:F6:91:2A:10</code>.</p></div>
    <div class="note-box compact"><strong>MAC não é obrigatoriamente um número imutável para toda a vida.</strong><p>Existem endereços administrados localmente, interfaces virtuais e mecanismos de randomização. O importante aqui é sua função no enlace local.</p></div>

    <h3>Quem conecta vários equipamentos Ethernet?</h3>
    <div class="media-text reverse">
      <figure class="historical-media">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/EthernetSwitch.jpg?width=960" alt="Switch Ethernet com vários cabos de rede coloridos conectados" width="960" height="640" loading="lazy" decoding="async">
        <figcaption><strong>Switch Ethernet e cabos de rede.</strong> Várias portas permitem interligar dispositivos numa LAN.<span class="credit">Raysonho · CC0 · Wikimedia Commons.</span></figcaption>
      </figure>
      <div>
        <div class="definition-box"><span class="term">Switch</span><p>É um equipamento que interliga dispositivos em uma rede local e encaminha quadros para as portas adequadas usando informações do enlace, como endereços MAC.</p></div>
        <p>O switch aprende quais endereços aparecem em suas portas. Quando conhece o destino, pode encaminhar o quadro somente pelo caminho apropriado. Em algumas situações, como destino ainda desconhecido ou broadcast, envia para mais de uma porta.</p>
      </div>
    </div>

    <h3>O dado precisa viajar organizado</h3>
    <div class="definition-box"><span class="term">Quadro — frame</span><p>É uma unidade de dados da camada de enlace. Em Ethernet, o quadro carrega informações como endereços MAC de origem e destino, além dos dados transportados e campos de controle.</p></div>
    <div class="concept-flow" aria-label="Comunicação local simplificada">
      <div><strong>Computador A</strong><span>interface de rede</span></div><span class="flow-arrow">→</span>
      <div><strong>Switch</strong><span>observa o destino MAC</span></div><span class="flow-arrow">→</span>
      <div><strong>Computador B</strong><span>recebe o quadro</span></div>
    </div>
    <p>Não estamos dizendo que um arquivo inteiro viaja como um único quadro. Os dados são organizados em unidades menores para serem transmitidos e processados pelas diferentes camadas da comunicação.</p>

    <h3>E numa rede Wi-Fi?</h3>
    <p>O meio é diferente e há regras próprias para o enlace sem fio. Em uma rede Wi-Fi comum, um <strong>ponto de acesso</strong> coordena a conexão dos dispositivos sem fio e os integra à rede local.</p>
    <div class="note-box compact"><strong>“Roteador Wi-Fi” é uma caixa com várias funções.</strong><p>Em casa, o equipamento chamado simplesmente de roteador costuma reunir ponto de acesso Wi-Fi, switch Ethernet, roteamento e outros serviços. Aprenderemos a separar essas funções na próxima aula.</p></div>

    <h3>Wi-Fi conectado, Internet fora do ar</h3>
    <p>Seu celular pode continuar conectado ao ponto de acesso e até conversar com outros equipamentos locais enquanto o acesso externo está indisponível.</p>
    <div class="mbb-pause-question"><strong>O ícone de Wi-Fi prova que existe Internet?</strong><p><strong>Não.</strong> Ele indica uma conexão de rede sem fio. Para chegar à Internet, ainda precisamos alcançar outras redes.</p></div>

    <h3>Experimente no próprio computador</h3>
    <p>No Windows, abra o CMD e execute:</p>
    <div class="code-focus"><code>getmac</code></div>
    <p>O comando mostra endereços físicos associados às interfaces reconhecidas pelo sistema. Um computador pode listar várias entradas porque pode possuir Ethernet, Wi-Fi, interfaces virtuais ou adaptadores adicionais.</p>
    <div class="note-box compact"><strong>Não transforme o resultado em decoreba.</strong><p>A pergunta é: <em>qual interface é esta e por que ela precisa de um identificador no enlace?</em></p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Você consegue separar rede local de Internet?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Uma LAN pode continuar operando localmente mesmo sem acesso à Internet."><p>Se a Internet cair, dois PCs da mesma LAN deixam necessariamente de poder trocar dados?</p><label><input type="radio" name="q11a" value="a"> Sim, qualquer rede depende da Internet.</label><label><input type="radio" name="q11a" value="b"> Não. A comunicação local pode continuar.</label><label><input type="radio" name="q11a" value="c"> Só se os dois tiverem o mesmo gabinete.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Switches encaminham quadros dentro da LAN usando informações de enlace como MAC."><p>Qual equipamento é central para interligar vários dispositivos Ethernet numa LAN?</p><label><input type="radio" name="q11b" value="a"> Switch.</label><label><input type="radio" name="q11b" value="b"> SSD.</label><label><input type="radio" name="q11b" value="c"> Compilador.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Wi-Fi é uma tecnologia de rede local sem fio; acesso à Internet depende de alcançar redes externas."><p>O celular mostra Wi-Fi conectado. O que podemos afirmar com segurança?</p><label><input type="radio" name="q11c" value="a"> A Internet está funcionando.</label><label><input type="radio" name="q11c" value="b"> O DNS está funcionando.</label><label><input type="radio" name="q11c" value="c"> Existe uma conexão com uma rede Wi-Fi; Internet é outra questão.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Uma <strong>rede</strong> permite comunicação entre dispositivos. Interfaces de rede conectam as máquinas ao meio; Ethernet e Wi-Fi são tecnologias de LAN; protocolos estabelecem regras; endereços MAC identificam interfaces no enlace; switches encaminham quadros dentro da rede local. <strong>LAN, Wi-Fi e Internet não são sinônimos.</strong></p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Dentro da LAN já sabemos chegar ao equipamento ao lado. Mas como um pacote encontra uma máquina que está em <strong>outra rede</strong> — talvez em outro país?</p></div>

    <details class="sources-box"><summary>Fontes e créditos das imagens</summary><ul>
      <li><a href="https://standards.ieee.org/products-programs/regauth/mac/" target="_blank" rel="noopener">IEEE — Registration Authority / MAC</a></li>
      <li><a href="https://www.ieee802.org/1/pages/802c.html" target="_blank" rel="noopener">IEEE 802.1 — endereçamento local</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Ethernet_pci_card.jpg" target="_blank" rel="noopener">Wikimedia Commons — placa de rede Ethernet</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:EthernetSwitch.jpg" target="_blank" rel="noopener">Wikimedia Commons — switch Ethernet</a></li>
    </ul></details>
  `
});
