window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "enderecamento-transporte",
  number: "12",
  unit: "Ato 3 · Computadores se conectam",
  menuTitle: "Endereçamento e transporte",
  technicalTitle: "IP • IPv4 • IPv6 • prefixo • DHCP • gateway • roteador • IP privado/público • NAT • ARP • Neighbor Discovery • pacote • TCP • UDP • portas",
  title: "Como os dados encontram outra rede — e depois o programa certo?",
  objective: "Compreender endereçamento IP, comunicação entre redes, gateway, roteamento, endereços privados, NAT e o papel de TCP, UDP e portas.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">A LAN não alcança o mundo sozinha</span>
      <h2>Seu computador consegue falar com o vizinho da mesma rede. E com um servidor em outro continente?</h2>
      <p>O endereço MAC e o switch resolvem bem o trecho local. Para atravessar <strong>redes diferentes</strong>, precisamos de outro tipo de endereço e de equipamentos capazes de escolher o próximo caminho.</p>
    </div>

    <div class="definition-box featured"><span class="term">Endereço IP</span><p>É um identificador usado pelo protocolo IP para identificar interfaces e permitir o encaminhamento de pacotes em redes IP.</p></div>

    <h3>IPv4: 32 bits escritos de um jeito mais humano</h3>
    <p>Um endereço IPv4 possui <strong>32 bits</strong> e costuma ser escrito em quatro números decimais separados por pontos:</p>
    <div class="code-focus"><code>192.168.1.25</code></div>
    <p>Cada grupo corresponde a 8 bits, por isso pode variar de 0 a 255. É a mesma lógica de representação binária estudada na Aula 05.</p>

    <h3>IPv6: um espaço de endereços muito maior</h3>
    <div class="definition-box"><span class="term">IPv6</span><p>Utiliza endereços de <strong>128 bits</strong>. Um exemplo é <code>2001:db8:1234::25</code>.</p></div>
    <p>O IPv6 foi criado, entre outras razões, para superar limitações do espaço de endereços IPv4 e modernizar o protocolo de rede.</p>

    <div class="comparison-grid">
      <article><strong>IPv4</strong><p>32 bits. Exemplo: <code>192.168.1.25</code>.</p></article>
      <article><strong>IPv6</strong><p>128 bits. Exemplo: <code>2001:db8:1234::25</code>.</p></article>
    </div>

    <h3>O endereço também diz a qual rede pertencemos</h3>
    <p>Considere:</p>
    <div class="code-focus"><code>192.168.1.25/24</code></div>
    <p>O <code>/24</code> indica que os primeiros 24 bits formam o <strong>prefixo da rede</strong>. Isso ajuda o computador a decidir se o destino está no mesmo segmento IP ou se precisa seguir para outra rede.</p>
    <div class="note-box compact"><strong>Prefixo não é “parte decorativa” do IP.</strong><p>Sem saber a rede/prefixo, não conseguimos interpretar corretamente se dois endereços pertencem ao mesmo segmento.</p></div>

    <h3>Quem fornece essas configurações?</h3>
    <div class="definition-box"><span class="term">DHCP — Dynamic Host Configuration Protocol</span><p>Pode fornecer automaticamente informações como endereço IP, prefixo/máscara, gateway padrão e servidores DNS.</p></div>
    <p>É por isso que, em muitas redes domésticas e escolares, conectar um dispositivo não exige digitar manualmente todos esses valores.</p>

    <h3>Mesmo destino local ou outra rede?</h3>
    <div class="comparison-grid">
      <article><strong>Destino local</strong><p>Se o destino pertence à mesma rede IP, o computador tenta entregar o tráfego pelo enlace local.</p></article>
      <article><strong>Destino remoto</strong><p>Se o destino pertence a outra rede, o computador normalmente envia o pacote a um roteador configurado como gateway.</p></article>
    </div>

    <div class="definition-box featured"><span class="term">Roteador</span><p>É um dispositivo que encaminha pacotes entre redes diferentes, escolhendo próximos caminhos com base em informações de roteamento.</p></div>
    <div class="definition-box"><span class="term">Gateway padrão</span><p>É o roteador para o qual o host envia tráfego destinado a redes que ele não alcança diretamente.</p></div>

    <div class="representation-flow" aria-label="Saída de uma rede local para outra rede">
      <div><strong>Seu computador</strong><span>192.168.1.25</span></div><span class="flow-arrow">→</span>
      <div><strong>Gateway</strong><span>roteador da rede</span></div><span class="flow-arrow">→</span>
      <div><strong>Outras redes</strong><span>novas decisões de encaminhamento</span></div><span class="flow-arrow">→</span>
      <div><strong>Destino</strong><span>rede remota</span></div>
    </div>

    <h3>Por que tantos equipamentos de casa usam <code>192.168.x.x</code>?</h3>
    <p>O IPv4 reserva blocos para uso privado. Entre eles:</p>
    <div class="table-wrap"><table><thead><tr><th>Bloco privado IPv4</th><th>Faixa</th></tr></thead><tbody>
      <tr><td><code>10.0.0.0/8</code></td><td><code>10.0.0.0</code> a <code>10.255.255.255</code></td></tr>
      <tr><td><code>172.16.0.0/12</code></td><td><code>172.16.0.0</code> a <code>172.31.255.255</code></td></tr>
      <tr><td><code>192.168.0.0/16</code></td><td><code>192.168.0.0</code> a <code>192.168.255.255</code></td></tr>
    </tbody></table></div>
    <p>Esses endereços podem ser reutilizados em inúmeras redes privadas diferentes porque <strong>não possuem significado global na Internet pública</strong>.</p>

    <h3>IP privado × IP público</h3>
    <div class="comparison-grid">
      <article><strong>Privado</strong><p>É usado dentro de redes privadas e pode se repetir em organizações diferentes.</p></article>
      <article><strong>Público / global</strong><p>Precisa ser globalmente único no contexto em que é roteado pela Internet pública.</p></article>
    </div>

    <h3>Então como vários dispositivos privados acessam a Internet?</h3>
    <div class="hero-box">
      <span class="eyebrow">Uma casa, muitos endereços internos</span>
      <p><strong>Notebook:</strong> <code>192.168.1.10</code><br><strong>Celular:</strong> <code>192.168.1.11</code><br><strong>TV:</strong> <code>192.168.1.12</code></p>
      <p>Todos precisam acessar redes externas. Em muitas redes IPv4 domésticas, o roteador de borda realiza tradução entre endereços internos e um endereço global.</p>
    </div>
    <div class="definition-box featured"><span class="term">NAT — Network Address Translation</span><p>É um mecanismo que traduz endereços IP ao atravessar um dispositivo de borda. Em redes IPv4 domésticas, é comum permitir que vários dispositivos com endereços privados compartilhem um endereço público, frequentemente com tradução também de portas.</p></div>
    <div class="representation-flow" aria-label="NAT em rede doméstica IPv4">
      <div><strong>192.168.1.10<br>192.168.1.11<br>192.168.1.12</strong><span>endereços privados</span></div><span class="flow-arrow">→</span>
      <div><strong>Roteador / NAT</strong><span>mantém traduções</span></div><span class="flow-arrow">→</span>
      <div><strong>Endereço público</strong><span>visível para redes externas</span></div><span class="flow-arrow">→</span>
      <div><strong>Internet</strong></div>
    </div>
    <div class="note-box compact"><strong>Privado e NAT não são a mesma coisa.</strong><p>RFC 1918 define os blocos privados; NAT é um mecanismo separado. Eles aparecem juntos com frequência em IPv4 doméstico, mas um conceito não define o outro.</p></div>

    <h3>Como o IP encontra o endereço do enlace local?</h3>
    <p>Para transmitir dentro de um enlace, o host precisa relacionar o destino IP local ao identificador usado naquele enlace.</p>
    <div class="comparison-grid">
      <article><strong>IPv4 — ARP</strong><p>Em redes como Ethernet, o ARP é tradicionalmente usado para descobrir o endereço de enlace correspondente a um endereço IPv4 local.</p></article>
      <article><strong>IPv6 — Neighbor Discovery</strong><p>O IPv6 usa Neighbor Discovery para descobrir vizinhos, endereços de enlace, roteadores e informações de alcançabilidade.</p></article>
    </div>
    <div class="note-box compact"><strong>ARP não é a solução do IPv6.</strong><p>IPv6 utiliza Neighbor Discovery, baseado em ICMPv6, para funções que incluem resolução de vizinhos e descoberta de roteadores.</p></div>

    <h3>Pacote e encapsulamento</h3>
    <div class="definition-box"><span class="term">Pacote IP</span><p>É a unidade de dados do protocolo IP, com cabeçalho contendo informações de rede e uma carga útil transportada.</p></div>
    <p>Ao atravessar um enlace Ethernet ou Wi-Fi, o pacote é colocado dentro de uma unidade adequada ao enlace. Essa ideia é chamada de <strong>encapsulamento</strong>.</p>
    <div class="concept-flow"><div><strong>Dados da aplicação</strong></div><span class="flow-arrow">→</span><div><strong>Transporte</strong><span>TCP ou UDP</span></div><span class="flow-arrow">→</span><div><strong>IP</strong><span>pacote encaminhável</span></div></div>
    <p>Depois, o pacote IP ainda será transportado por um quadro ou outro mecanismo adequado ao enlace de cada trecho.</p>

    <h3>Chegamos ao computador. Qual programa deve receber?</h3>
    <p>Seu computador pode estar executando navegador, jogo, mensageiro e vários serviços ao mesmo tempo. O endereço IP identifica a comunicação de rede do host/interface, mas ainda precisamos distinguir as comunicações das aplicações.</p>
    <div class="definition-box"><span class="term">Porta TCP/UDP</span><p>É um número de <strong>0 a 65535</strong> usado pelos protocolos de transporte para identificar endpoints de comunicação associados às aplicações.</p></div>
    <div class="danger-box compact"><strong>Porta lógica ≠ conector físico.</strong><p>A porta TCP 443 não é um encaixe atrás do computador. “Porta” é uma palavra usada para conceitos diferentes.</p></div>

    <h3>TCP e UDP resolvem necessidades diferentes</h3>
    <div class="comparison-grid">
      <article><strong>TCP</strong><p>É orientado à conexão e oferece uma sequência confiável de bytes, com mecanismos de ordenação, retransmissão e controle.</p></article>
      <article><strong>UDP</strong><p>Transporta datagramas de forma mais simples, sem oferecer por si só as mesmas garantias de entrega e ordenação do TCP.</p></article>
    </div>
    <div class="note-box compact"><strong>TCP não é “bom” e UDP “ruim”.</strong><p>Aplicações escolhem serviços diferentes conforme suas necessidades. Algumas precisam de confiabilidade fornecida pelo TCP; outras preferem construir seu próprio comportamento sobre UDP ou aceitar perdas em certos contextos.</p></div>

    <h3>Experimente: descubra sua configuração</h3>
    <p>No Windows:</p>
    <div class="code-focus"><code>ipconfig</code></div>
    <p>Procure o endereço IPv4, a máscara/prefixo e o gateway padrão de uma interface ativa.</p>
    <p>Depois, se o gateway responder a ICMP, você pode testar:</p>
    <div class="code-focus"><code>ping &lt;endereço-do-gateway&gt;</code></div>
    <div class="note-box compact"><strong>O que um ping bem-sucedido demonstra?</strong><p>Que houve comunicação IP e resposta ICMP naquele momento. <strong>Um ping que falha não prova sozinho que o equipamento está desligado</strong>, pois firewalls e políticas podem bloquear respostas.</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Checkpoint 4</span><h3>Do endereço local ao programa certo</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Se o destino está em outra rede, o host normalmente entrega o pacote ao gateway padrão."><p>Seu computador quer acessar um IP de outra rede. Para onde envia o pacote primeiro?</p><label><input type="radio" name="q12a" value="a"> Para o SSD.</label><label><input type="radio" name="q12a" value="b"> Para o gateway/roteador adequado.</label><label><input type="radio" name="q12a" value="c"> Diretamente ao MAC do servidor remoto atravessando a Internet.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Endereços privados podem se repetir em redes distintas e normalmente não são roteados globalmente na Internet pública."><p>Por que duas casas diferentes podem usar <code>192.168.1.10</code>?</p><label><input type="radio" name="q12b" value="a"> Porque é um endereço de faixa privada e seu significado é local à rede.</label><label><input type="radio" name="q12b" value="b"> Porque IPv4 ignora endereços repetidos em qualquer lugar.</label><label><input type="radio" name="q12b" value="c"> Porque todo equipamento tem o mesmo IP público.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="NAT pode traduzir endereços privados para endereços globais; ele é um mecanismo separado da definição das faixas privadas."><p>Qual frase está correta?</p><label><input type="radio" name="q12c" value="a"> NAT e endereço privado são exatamente o mesmo conceito.</label><label><input type="radio" name="q12c" value="b"> NAT transforma MAC em senha.</label><label><input type="radio" name="q12c" value="c"> NAT pode traduzir endereços ao atravessar a borda da rede.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Portas distinguem endpoints de transporte associados às aplicações; não são conectores físicos."><p>Para que serve uma porta TCP/UDP?</p><label><input type="radio" name="q12d" value="a"> Para encaixar o cabo de rede.</label><label><input type="radio" name="q12d" value="b"> Para identificar uma comunicação associada a uma aplicação.</label><label><input type="radio" name="q12d" value="c"> Para armazenar arquivos.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p><strong>IP</strong> permite endereçar e encaminhar pacotes entre redes. Prefixos ajudam a distinguir rede local de destino remoto. <strong>Roteadores</strong> encaminham pacotes; o <strong>gateway padrão</strong> é a saída usual para outras redes. IPv4 possui faixas privadas e, em muitas redes domésticas, <strong>NAT</strong> permite compartilhar conectividade global. ARP atende à resolução local no IPv4; IPv6 usa Neighbor Discovery. No transporte, <strong>TCP e UDP</strong> usam portas para entregar dados à comunicação correta.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Agora já conseguimos chegar a outra rede. Mas quando você digita <code>www.exemplo.com</code> no navegador, <strong>como esse nome vira um destino e como a Web conversa com o servidor?</strong></p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://www.rfc-editor.org/info/rfc8200" target="_blank" rel="noopener">RFC 8200 — IPv6</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc1918" target="_blank" rel="noopener">RFC 1918 — endereços privados IPv4</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc3022" target="_blank" rel="noopener">RFC 3022 — NAT tradicional</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc826" target="_blank" rel="noopener">RFC 826 — ARP</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc4861" target="_blank" rel="noopener">RFC 4861 — Neighbor Discovery IPv6</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc9293" target="_blank" rel="noopener">RFC 9293 — TCP</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc768" target="_blank" rel="noopener">RFC 768 — UDP</a></li>
    </ul></details>
  `
});
