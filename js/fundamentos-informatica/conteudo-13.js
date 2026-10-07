window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "internet-web",
  number: "13",
  unit: "Ato 3 · Computadores se conectam",
  menuTitle: "Internet e Web",
  technicalTitle: "Internet • Web • cliente • servidor • DNS • domínio • URL • HTTP • HTTPS • TLS • certificado • latência • largura de banda",
  title: "Quando você digita um endereço, como o navegador encontra o servidor?",
  objective: "Distinguir Internet e Web e acompanhar o caminho de uma URL até uma resposta HTTP/HTTPS, compreendendo DNS, cliente-servidor, TLS e fatores básicos de desempenho.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Um nome, não um número</span>
      <h2>Você digita <code>www.exemplo.com.br</code> e uma página aparece. Mas a rede encaminha pacotes usando endereços IP.</h2>
      <p>Você não informou o IP do servidor, não escolheu os roteadores do caminho e não disse qual arquivo deveria chegar primeiro. <strong>Várias camadas trabalham para transformar um nome amigável em uma conversa entre programas.</strong></p>
    </div>

    <h3>Internet e Web não são a mesma coisa</h3>
    <p>Antes de abrir qualquer site, computadores já podem trocar e-mail, arquivos, mensagens, dados de sensores e inúmeras outras informações. Isso nos mostra que a infraestrutura de redes é maior que aquilo que vemos no navegador.</p>
    <div class="comparison-grid">
      <article><strong>Internet</strong><p>É a interconexão global de muitas redes que trocam dados usando a família de protocolos da Internet.</p></article>
      <article><strong>Web — World Wide Web</strong><p>É um sistema de recursos interligados acessados principalmente por navegadores usando tecnologias como URLs e HTTP/HTTPS.</p></article>
    </div>
    <div class="note-box compact"><strong>Duas distinções que evitam muita confusão</strong><p><strong>Wi-Fi ≠ Internet</strong> e <strong>Internet ≠ Web</strong>. Wi-Fi conecta o dispositivo a uma rede local; a Web é uma aplicação construída sobre a infraestrutura da Internet.</p></div>

    <h3>Alguém precisa pedir e alguém precisa responder</h3>
    <p>Quando você abre uma página, o navegador inicia uma comunicação. Ele precisa indicar o que deseja e algum software do outro lado precisa estar preparado para atender solicitações.</p>
    <div class="comparison-grid">
      <article><strong>Cliente</strong><p>É o software que inicia uma solicitação de serviço ou recurso. Nesta situação, o navegador é o cliente.</p></article>
      <article><strong>Servidor</strong><p>É o software ou sistema que disponibiliza recursos ou serviços a outros sistemas pela rede.</p></article>
    </div>
    <div class="concept-flow" aria-label="Modelo cliente-servidor"><div><strong>Navegador</strong><span>cliente solicita</span></div><span class="flow-arrow">→</span><div><strong>Servidor</strong><span>processa</span></div><span class="flow-arrow">→</span><div><strong>Resposta</strong><span>recurso ou resultado</span></div></div>
    <div class="note-box compact"><strong>Servidor descreve principalmente um papel.</strong><p>Um servidor pode ser um programa executado numa grande máquina de datacenter, numa máquina virtual ou até num pequeno equipamento. Não é uma aparência específica de computador.</p></div>

    <h3>O nome ainda precisa levar a um destino de rede</h3>
    <p>Agora temos cliente e servidor, mas continuamos com <code>www.exemplo.com.br</code>. O IP estudado na Aula 12 não desapareceu. Precisamos de um sistema que permita consultar informações associadas aos nomes usados pelas pessoas e aplicações.</p>
    <div class="definition-box featured"><span class="term">DNS — Domain Name System</span><p>É um sistema distribuído e hierárquico que associa nomes de domínio a diferentes tipos de informações. Um uso muito conhecido é obter endereços IP relacionados a um nome.</p></div>
    <div class="representation-flow" aria-label="Resolução de nome simplificada"><div><strong>Nome</strong><span>www.exemplo.com</span></div><span class="flow-arrow">→</span><div><strong>Consulta DNS</strong><span>informação associada</span></div><span class="flow-arrow">→</span><div><strong>Endereço IP</strong><span>destino de rede</span></div><span class="flow-arrow">→</span><div><strong>Servidor</strong></div></div>
    <p>DNS não é uma única planilha mundial “nome → IP”. Há servidores distribuídos, delegações hierárquicas, diferentes tipos de registros e mecanismos de cache.</p>

    <h3>Por que existe cache DNS?</h3>
    <p>Imagine milhões de dispositivos perguntando a cada segundo pela mesma informação que acabou de ser obtida. Repetir todo o trabalho seria desperdício. Por isso respostas DNS podem ser guardadas temporariamente conforme regras de validade.</p>
    <div class="definition-box"><span class="term">Cache DNS</span><p>É o armazenamento temporário de respostas DNS para reutilizá-las enquanto forem consideradas válidas, reduzindo consultas repetidas e tempo de resposta.</p></div>
    <p>É a mesma ideia geral de cache que já apareceu perto da CPU: <strong>manter mais perto algo que provavelmente será necessário novamente</strong>.</p>

    <h3>Domínio e URL não são sinônimos</h3>
    <p>Depois que sabemos localizar o host, ainda precisamos indicar <strong>qual recurso</strong> queremos e como pretendemos acessá-lo. Compare:</p>
    <div class="two-col">
      <div class="definition-box"><span class="term">Nome de domínio</span><p>É um nome hierárquico dentro do DNS, como <code>exemplo.com</code>.</p></div>
      <div class="definition-box"><span class="term">URL — Uniform Resource Locator</span><p>Identifica a localização e o modo de acesso a um recurso, podendo incluir esquema, host, porta, caminho, consulta e outros componentes.</p></div>
    </div>
    <div class="example-box"><strong>Desmontando uma URL</strong><p><code>https://www.exemplo.com/produtos?id=25</code></p><p><strong>https</strong> → esquema · <strong>www.exemplo.com</strong> → host · <strong>/produtos</strong> → caminho · <strong>?id=25</strong> → consulta.</p></div>

    <h3>Agora precisamos combinar como pedir o recurso</h3>
    <p>O servidor foi localizado, mas o cliente ainda precisa dizer o que quer. É como chegar ao prédio correto sem informar qual serviço deseja. Na Web, essa conversa é organizada principalmente pelo HTTP.</p>
    <div class="definition-box featured"><span class="term">HTTP — Hypertext Transfer Protocol</span><p>É um protocolo de aplicação baseado em mensagens de <strong>requisição</strong> e <strong>resposta</strong> para interação com recursos.</p></div>
    <div class="comparison-grid three">
      <article><strong>Método</strong><p>Expressa a intenção da requisição. <code>GET</code> é usado para obter uma representação; <code>POST</code> envia dados para processamento segundo as regras do recurso.</p></article>
      <article><strong>Cabeçalhos</strong><p>Transportam metadados e informações de controle da mensagem.</p></article>
      <article><strong>Corpo</strong><p>Pode transportar conteúdo associado à requisição ou à resposta.</p></article>
    </div>

    <h3>O servidor também precisa dizer o que aconteceu</h3>
    <p>Se você pede uma página que não existe, a rede pode ter funcionado perfeitamente: o servidor foi encontrado, recebeu a requisição e respondeu que aquele recurso não foi localizado. Os códigos de status ajudam a distinguir esses resultados.</p>
    <div class="comparison-grid four">
      <article><strong>200</strong><p>Solicitação atendida com sucesso no contexto da resposta.</p></article>
      <article><strong>404</strong><p>O recurso solicitado não foi encontrado.</p></article>
      <article><strong>4xx</strong><p>Família de respostas associada a problemas na solicitação ou na possibilidade de atendê-la.</p></article>
      <article><strong>5xx</strong><p>Família de respostas em que o servidor falhou ao atender uma solicitação aparentemente válida.</p></article>
    </div>
    <div class="note-box compact"><strong>404 não significa “a Internet caiu”.</strong><p>Para receber um 404, normalmente já houve comunicação suficiente para o servidor responder.</p></div>

    <h3>Por que quase tudo aparece como HTTPS?</h3>
    <p>Se login, endereço ou pagamento viajassem de forma facilmente legível e alterável no caminho, a Web moderna seria muito mais perigosa. Precisamos proteger a comunicação entre cliente e servidor.</p>
    <div class="definition-box featured"><span class="term">HTTPS</span><p>É o uso de HTTP sobre uma comunicação protegida por <strong>TLS — Transport Layer Security</strong>.</p></div>
    <div class="comparison-grid three">
      <article><strong>Confidencialidade</strong><p>Busca impedir que terceiros leiam o conteúdo protegido durante o transporte.</p></article>
      <article><strong>Integridade</strong><p>Ajuda a detectar alterações indevidas na comunicação.</p></article>
      <article><strong>Autenticação</strong><p>Certificados ajudam o cliente a verificar a identidade apresentada pelo servidor para o nome acessado.</p></article>
    </div>
    <div class="note-box compact"><strong>Cadeado não significa “site honesto”.</strong><p>Um site malicioso também pode ter HTTPS. A conexão pode estar criptograficamente protegida <strong>com o servidor errado do ponto de vista do usuário</strong>. HTTPS protege a comunicação; não certifica a veracidade do conteúdo.</p></div>

    <h3>Uma página lenta: falta velocidade ou demora para começar?</h3>
    <p>Imagine dois links. Um consegue transportar muitos dados por segundo, mas cada ida e volta demora bastante. O outro transporta menos dados, porém responde rapidamente. Dizer apenas “qual é mais rápido?” não basta.</p>
    <div class="two-col">
      <div class="definition-box"><span class="term">Largura de banda / taxa disponível</span><p>Indica quanta informação pode ser transferida por unidade de tempo em determinado caminho ou serviço.</p></div>
      <div class="definition-box"><span class="term">Latência</span><p>É o tempo de espera associado à comunicação. Muitas pequenas requisições podem ser muito sensíveis a ela.</p></div>
    </div>
    <p>Baixar um arquivo enorme valoriza capacidade de transferência. Uma página que faz muitas pequenas interações pode sofrer bastante com latência. <strong>Desempenho de rede não cabe num único número.</strong></p>

    <h3>Do teclado até a página</h3>
    <div class="representation-flow" aria-label="Caminho simplificado de uma página Web"><div><strong>URL</strong></div><span class="flow-arrow">→</span><div><strong>DNS + IP</strong><span>localizar e alcançar</span></div><span class="flow-arrow">→</span><div><strong>TLS + HTTP</strong><span>proteger e conversar</span></div><span class="flow-arrow">→</span><div><strong>Navegador</strong><span>apresenta</span></div></div>
    <p>Uma página também pode referenciar CSS, JavaScript, imagens e fontes. O navegador pode fazer várias requisições, às vezes a diferentes servidores. Aquilo que parece “uma página” pode ser resultado de dezenas ou centenas de conversas.</p>

    <h3>Experimente sem programar</h3>
    <p>No Windows, consulte o DNS:</p>
    <div class="code-focus"><code>nslookup example.com</code></div>
    <p>O comando não baixa a página. Ele consulta informações DNS. Isso permite enxergar a diferença entre <strong>resolver um nome</strong> e <strong>solicitar um recurso Web</strong>.</p>
    <p>Em um ambiente com <code>curl</code>, também é possível observar cabeçalhos HTTP:</p>
    <div class="code-focus"><code>curl -I https://example.com</code></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Você consegue separar as camadas?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A Web é uma aplicação construída sobre a infraestrutura da Internet; os termos não são sinônimos."><p>Qual afirmação é correta?</p><label><input type="radio" name="q13a" value="a"> Internet e Web são exatamente a mesma coisa.</label><label><input type="radio" name="q13a" value="b"> A Web utiliza a Internet, mas a Internet suporta muitos outros serviços.</label><label><input type="radio" name="q13a" value="c"> Wi-Fi é outro nome para Web.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O DNS fornece informações associadas a nomes; o HTTP organiza a interação com recursos Web."><p>O que melhor descreve a diferença entre DNS e HTTP?</p><label><input type="radio" name="q13b" value="a"> DNS desenha a página e HTTP fornece o Wi-Fi.</label><label><input type="radio" name="q13b" value="b"> São duas grafias para o mesmo protocolo.</label><label><input type="radio" name="q13b" value="c"> DNS ajuda a localizar serviços por nomes; HTTP organiza requisições e respostas de recursos.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="HTTPS protege a comunicação, mas não garante que o conteúdo ou a intenção do site sejam honestos."><p>Um site possui HTTPS e cadeado. O que podemos concluir?</p><label><input type="radio" name="q13c" value="a"> A comunicação possui proteções TLS, mas ainda precisamos avaliar o site e o domínio.</label><label><input type="radio" name="q13c" value="b"> Tudo que o site afirma é verdadeiro.</label><label><input type="radio" name="q13c" value="c"> O servidor nunca poderá ser atacado.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>A <strong>Internet</strong> conecta redes; a <strong>Web</strong> organiza acesso a recursos sobre essa infraestrutura. DNS relaciona nomes a informações de localização, URLs identificam recursos, HTTP organiza requisições e respostas e HTTPS usa TLS para proteger a comunicação. Largura de banda e latência descrevem aspectos diferentes do desempenho.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>O servidor recebeu um formulário com clientes, produtos e pedidos. Se os dados crescerem para milhares ou milhões de registros, como guardá-los sem transformar tudo numa coleção desorganizada de arquivos?</p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://www.rfc-editor.org/info/rfc1034/" target="_blank" rel="noopener">RFC 1034 — Domain Names: Concepts and Facilities</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc9110/" target="_blank" rel="noopener">RFC 9110 — HTTP Semantics</a></li>
      <li><a href="https://www.rfc-editor.org/info/rfc9846/" target="_blank" rel="noopener">RFC 9846 — TLS 1.3</a></li>
    </ul></details>
  `
});
