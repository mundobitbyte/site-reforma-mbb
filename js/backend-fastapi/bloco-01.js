window.backendFastapiBlocks = window.backendFastapiBlocks || [];

window.backendFastapiBlocks.push({
  id: 'bloco-1',
  menuTitle: '1. Antes da API',
  title: 'Bloco 1 — Antes de existir uma API',
  lessons: [
    {
      id: 'capitulo-01',
      number: 1,
      menuTitle: 'O negócio cresceu',
      title: 'Quando o negócio começa a crescer',
      objective: 'Perceber por que um sistema centralizado passa a ser necessário antes de escolher linguagem, framework ou banco de dados.',
      content: `
        <div class="hero-box">
          <h3>Tudo parecia simples</h3>
          <p>Na Água &amp; Gás do Bairro, muitos pedidos chegam por telefone e WhatsApp. Um cliente pede um botijão P13, outro quer dois galões de água de 20 L, outro precisa de mangueira ou bomba elétrica. A atendente anota, confere o preço, separa o produto e chama a entrega.</p>
          <p>Enquanto o movimento é pequeno, esse processo parece suficiente.</p>
        </div>

        <h3>Quando as informações começam a se espalhar</h3>
        <p>Agora imagine três atendimentos quase ao mesmo tempo. Dois clientes querem a última bomba elétrica. Uma conversa antiga do WhatsApp mostra um preço que já mudou. Outro cliente liga perguntando se o pedido já saiu para entrega.</p>
        <p>O problema deixa de ser apenas vender. O estabelecimento precisa saber, com confiança, quais produtos existem, os preços atuais, os pedidos abertos, os endereços e o andamento das entregas.</p>

        <div class="concept-box"><strong>A primeira necessidade não é “usar FastAPI”.</strong> É organizar informações e permitir que diferentes partes do sistema trabalhem com uma fonte central.</div>

        <h3>Pense um pouco</h3>
        <p>Uma planilha poderia ajudar no começo. Mas imagine cem clientes utilizando um aplicativo. Seria razoável guardar a lista de produtos, preços e pedidos dentro do celular de cada cliente?</p>
        <p>Se o preço da água mudar, teríamos de alterar cem aplicativos? Se um pedido for registrado, em qual aparelho ele deveria ficar?</p>

        <h3>Onde todas essas informações ficariam?</h3>
        <div class="flow">Aplicativo do cliente
        ↓
precisa consultar e enviar informações
        ↓
algum lugar central precisa receber, processar e guardar</div>
        <p>Começa a nascer a ideia de uma parte central do sistema que possa atender vários aplicativos.</p>

        <h3>O aplicativo mostra. Alguém precisa trabalhar por trás.</h3>
        <p>Na tela, o cliente vê produtos, preços, botões e o andamento do pedido. Mas alguém precisa verificar dados, calcular valores, registrar pedidos e devolver respostas.</p>
        <p>Ainda não precisamos dar nomes técnicos a essas partes. Primeiro precisamos enxergar a necessidade.</p>

        <div class="task-box"><strong>Antes de continuar:</strong> se um programa precisar perguntar a outro “quais produtos estão disponíveis?” ou dizer “registre este pedido”, quem fará a pergunta e quem deverá responder?</div>

        <div class="essence"><strong>Essência</strong>Programar um sistema não começa escolhendo uma linguagem ou uma ferramenta. Começa entendendo qual problema precisa ser resolvido.</div>`
    },
    {
      id: 'capitulo-02',
      number: 2,
      menuTitle: 'Cliente e servidor',
      title: 'Quem pede e quem responde?',
      objective: 'Construir as ideias de cliente, servidor, frontend e backend a partir do fluxo real de uma solicitação.',
      content: `
        <div class="hero-box">
          <h3>Dois lados da mesma conversa</h3>
          <p>O aplicativo não precisa carregar sozinho todas as informações do estabelecimento. Ao tocar em <strong>Ver produtos</strong>, ele pode pedir os dados a um sistema central.</p>
        </div>

        <div class="flow">Aplicativo
   ↓
“Quais produtos estão disponíveis?”
   ↓
Sistema do estabelecimento
   ↓
“Aqui está a lista.”
   ↓
Aplicativo</div>

        <h3>Quem faz o pedido?</h3>
        <p>Na computação, um programa que solicita uma informação ou um serviço de outro sistema pode atuar como <strong>cliente</strong>.</p>
        <p>A palavra não significa necessariamente a pessoa que compra no estabelecimento. Aqui ela descreve um papel na comunicação.</p>

        <h3>Quem responde?</h3>
        <p>O sistema central recebe solicitações, processa o que foi pedido e devolve respostas. Nesse papel, ele atua como <strong>servidor</strong>.</p>
        <div class="flow">CLIENTE
   ↓
solicitação
   ↓
SERVIDOR
   ↓
processamento
   ↓
resposta</div>
        <div class="concept-box"><strong>Cliente solicita. Servidor atende e responde.</strong></div>

        <h3>Cliente não significa apenas celular</h3>
        <p>O aplicativo do consumidor, a tela usada pela atendente e um futuro aplicativo do entregador podem ser clientes do mesmo servidor.</p>
        <div class="flow">Aplicativo do cliente ─┐
Sistema do atendente ─┼──→ SERVIDOR
Aplicativo entregador ─┘</div>
        <p>Se o preço de um produto mudar no sistema central, os clientes podem consultar a informação atual sem que cada dispositivo mantenha sua própria cópia como fonte principal.</p>

        <h3>Arquitetura cliente-servidor</h3>
        <p>Quando organizamos um sistema de modo que programas solicitem serviços e outro sistema os forneça, estamos trabalhando com uma <strong>arquitetura cliente-servidor</strong>.</p>

        <h3>E onde entram frontend e backend?</h3>
        <p>A parte com a qual a pessoa interage — telas, botões, formulários e informações visíveis — é chamada de <strong>frontend</strong>.</p>
        <p>Quando o usuário toca em <strong>Finalizar pedido</strong>, existe uma parte invisível que recebe dados, aplica regras, consulta informações e registra o pedido. Essa parte é o <strong>backend</strong>.</p>

        <div class="flow">CLIENTE
Aplicativo / FRONTEND
        ↓
solicitação
        ↓
SERVIDOR / BACKEND
        ↓
processamento e dados
        ↓
resposta
        ↓
FRONTEND</div>

        <div class="note-box"><strong>Cliente e frontend não são sinônimos.</strong> Cliente descreve o papel de quem faz uma solicitação. Frontend descreve a parte de interação com o usuário. Um programa sem interface gráfica também pode atuar como cliente.</div>

        <h3>E o banco de dados?</h3>
        <p>Mais adiante, o backend precisará guardar produtos, clientes e pedidos de forma persistente. Por enquanto basta enxergar onde essa camada poderá aparecer:</p>
        <div class="flow">Aplicativo / Frontend
        ↓
Servidor / Backend
        ↓
Banco de dados
        ↓
Backend
        ↓
Aplicativo</div>

        <div class="task-box"><strong>Pense:</strong> quando o aplicativo pergunta quais produtos existem, quem atua como cliente? Quem atua como servidor? Qual parte mostra os dados ao usuário? Qual parte trabalha por trás?</div>
        <div class="essence"><strong>Essência</strong>Cliente e servidor descrevem papéis na comunicação. Frontend é a parte voltada à interação; backend é a parte que processa regras e informações.</div>`
    },
    {
      id: 'capitulo-03',
      number: 3,
      menuTitle: 'Rede e HTTP',
      title: 'Como dois programas conseguem conversar?',
      objective: 'Compreender rede, protocolo, requisição, resposta e HTTP sem transformar o capítulo em um curso de redes.',
      content: `
        <div class="hero-box">
          <h3>O cliente está em um lugar. O servidor pode estar em outro.</h3>
          <p>O cliente pode estar em casa com o celular, enquanto o servidor está em outro computador. Mesmo assim, a solicitação precisa chegar e a resposta precisa voltar.</p>
        </div>

        <h3>Uma conversa precisa de um caminho</h3>
        <p>Dispositivos precisam estar conectados por alguma forma de <strong>rede</strong> para trocar dados. A Internet é uma enorme rede de redes que permite essa comunicação entre dispositivos em diferentes lugares.</p>

        <h3>Estar conectado não é suficiente</h3>
        <p>Duas pessoas podem ter um telefone funcionando e ainda assim não se entender se não compartilharem regras de comunicação. Programas também precisam saber como estruturar e interpretar as mensagens trocadas.</p>
        <p>Um conjunto de regras de comunicação recebe o nome de <strong>protocolo</strong>.</p>

        <h3>HTTP</h3>
        <p>Na Web, um protocolo extremamente importante é o <strong>HTTP — Hypertext Transfer Protocol</strong>. Ele é usado para a troca de mensagens entre clientes e servidores e será a base da comunicação da nossa futura API.</p>

        <h3>O cliente faz uma requisição</h3>
        <p>Ao solicitar os produtos, o aplicativo envia uma mensagem ao servidor. Essa mensagem é uma <strong>requisição HTTP</strong>.</p>
        <div class="flow">CLIENTE
   ↓
REQUISIÇÃO HTTP
   ↓
REDE
   ↓
SERVIDOR</div>

        <h3>O servidor devolve uma resposta</h3>
        <p>O servidor interpreta a solicitação, executa o processamento e envia uma <strong>resposta HTTP</strong>.</p>
        <div class="flow">CLIENTE
   ↓
requisição HTTP
   ↓
SERVIDOR
   ↓
processamento
   ↓
resposta HTTP
   ↓
CLIENTE</div>

        <h3>A mensagem precisa indicar o que queremos</h3>
        <p>Uma requisição pode conter uma estrutura como:</p>
        <pre class="code-block">GET /produtos</pre>
        <p>Mesmo sem estudar cada detalhe ainda, podemos perceber uma ação — <code class="inline-code">GET</code> — e um caminho — <code class="inline-code">/produtos</code>.</p>

        <h3>A resposta informa dados e resultado</h3>
        <p>Além dos dados, a resposta HTTP possui um código que informa o resultado. <code class="inline-code">200</code> costuma representar sucesso; <code class="inline-code">404</code> indica que o recurso solicitado não foi encontrado. Não precisamos decorar códigos agora.</p>

        <h3>Os dados também precisam de um formato</h3>
        <p>Um formato muito comum em APIs é o JSON:</p>
        <pre class="code-block">[
  {
    "nome": "Água mineral 20 L",
    "preco": 18.00
  },
  {
    "nome": "Botijão P13",
    "preco": 115.00
  }
]</pre>

        <div class="flow">CLIENTE / FRONTEND
        ↓
Requisição HTTP
        ↓
REDE / INTERNET
        ↓
SERVIDOR / BACKEND
        ↓
Resposta HTTP
        ↓
CLIENTE</div>

        <div class="essence"><strong>Essência</strong>A rede oferece o caminho; o protocolo estabelece regras; o cliente envia uma requisição HTTP; o servidor devolve uma resposta HTTP.</div>`
    },
    {
      id: 'capitulo-04',
      number: 4,
      menuTitle: 'API e endpoint',
      title: 'Como o servidor oferece serviços para outros programas?',
      objective: 'Diferenciar API, Web API, Web Service, recurso, rota, endpoint, REST e JSON a partir da necessidade de organizar serviços.',
      content: `
        <div class="hero-box">
          <h3>Saber conversar ainda não resolve tudo</h3>
          <p>Nosso servidor poderá consultar produtos, cadastrar clientes, registrar pedidos e acompanhar entregas. Outro programador precisa saber quais operações existem e como utilizá-las.</p>
        </div>

        <h3>Web Service</h3>
        <p>Quando um sistema disponibiliza funcionalidades pela rede para que outros sistemas possam utilizá-las, podemos falar em um <strong>serviço web</strong> ou <strong>Web Service</strong>.</p>

        <h3>O que é uma API?</h3>
        <p><strong>API — Application Programming Interface</strong> define formas pelas quais softwares podem interagir. Ela funciona como um contrato: quais operações existem, quais dados entram, quais dados saem e como solicitar cada operação.</p>
        <div class="note-box"><strong>API é um conceito mais amplo que Web API.</strong> Uma biblioteca Python pode possuir uma API sem usar Internet. Quando a interação é disponibilizada usando tecnologias da Web, estamos falando de uma Web API.</div>

        <h3>Nossa aplicação terá uma Web API</h3>
        <div class="flow">APLICATIVO
   ↓
HTTP
   ↓
WEB API
   ↓
BACKEND</div>

        <h3>Um contrato precisa ser claro</h3>
        <p>O backend poderia estabelecer:</p>
        <pre class="code-block">GET /produtos       → consultar produtos
GET /produtos/15    → consultar o produto 15
POST /pedidos       → registrar um pedido</pre>
        <p>O cliente não precisa conhecer o código interno do servidor. Precisa conhecer o contrato oferecido pela API.</p>

        <h3>Recurso, rota e endpoint</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Recurso</strong>Algo importante representado pela API: produtos, clientes, pedidos.</div>
          <div class="mini-card"><strong>Rota</strong>O caminho usado pela aplicação, como <code class="inline-code">/produtos</code>.</div>
          <div class="mini-card"><strong>Endpoint</strong>Uma operação específica da API, normalmente associada à combinação de método HTTP e rota.</div>
          <div class="mini-card"><strong>Exemplo</strong><code class="inline-code">GET /produtos</code> e <code class="inline-code">POST /produtos</code> podem ser endpoints diferentes mesmo usando o mesmo caminho.</div>
        </div>

        <h3>E onde entra REST?</h3>
        <p><strong>REST</strong> é um estilo arquitetural. Em uma API REST, organizamos a comunicação em torno de recursos e utilizamos mecanismos do HTTP de forma coerente.</p>
        <pre class="code-block">GET /produtos      → consultar
GET /produtos/15   → consultar um produto
POST /produtos     → criar um produto</pre>
        <div class="danger-box"><strong>REST não é linguagem, banco de dados, framework nem protocolo.</strong> É um estilo arquitetural.</div>

        <h3>JSON</h3>
        <p>JSON é um formato muito comum para troca de dados entre aplicações. Ele organiza informações em estruturas como:</p>
        <pre class="code-block">{
  "id": 2,
  "nome": "Botijão P13",
  "preco": 115.00
}</pre>

        <h3>Uma operação completa</h3>
        <div class="flow">1. Aplicativo atua como cliente
2. Envia GET /produtos
3. Web API recebe a solicitação
4. Backend processa
5. Servidor prepara os dados
6. Resposta HTTP devolve JSON
7. Frontend mostra os produtos</div>

        <div class="bridge-box"><strong>Agora podemos programar.</strong> Já sabemos por que existem cliente, servidor, HTTP, API, endpoint e JSON. O próximo passo é fazer Python realmente responder a <code class="inline-code">GET /produtos</code>.</div>
        <div class="essence"><strong>Essência</strong>A Web API oferece um contrato para que outros programas utilizem serviços do backend. Em uma API REST, recursos e operações HTTP organizam essa comunicação.</div>`
    }
  ]
});
