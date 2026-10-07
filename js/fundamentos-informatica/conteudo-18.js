window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "apis-integracao",
  number: "18",
  unit: "Ato 4 · Computação no mundo atual",
  menuTitle: "APIs e integração",
  technicalTitle: "integração • API • endpoint • HTTP • método • parâmetros • cabeçalhos • corpo • JSON • status • token • validação • rate limit • REST",
  title: "Como dois sistemas criados separadamente combinam o que pedir e como responder?",
  objective: "Compreender APIs como contratos entre softwares, reconhecendo endpoints, requisições HTTP, JSON, códigos de status, autenticação, validação e limites de integração.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">O endereço apareceu sozinho?</span>
      <h2>Você digita um CEP num aplicativo e rua, bairro, cidade e estado aparecem em segundos.</h2>
      <p>O celular não precisa carregar uma cópia particular de todos os endereços do país. Ele pode <strong>pedir a informação a outro sistema</strong>. Mas conexão de rede, sozinha, não diz o que significa cada campo nem qual pergunta é válida. Os programas precisam de um contrato.</p>
    </div>

    <h3>Computadores conectados ainda podem não se entender</h3>
    <p>Imagine o sistema A enviar apenas <code>12345</code> ao sistema B. É CEP? produto? cliente? temperatura? Os bits chegaram, mas o significado não foi combinado.</p>
    <div class="definition-box featured"><span class="term">API — Application Programming Interface</span><p>É uma interface que define formas pelas quais um software pode utilizar recursos, funções ou dados oferecidos por outro software.</p></div>
    <p>Uma API funciona como um <strong>contrato de interação</strong>: descreve operações disponíveis, dados esperados, formato das mensagens e respostas possíveis.</p>
    <div class="note-box compact"><strong>API não significa obrigatoriamente Internet.</strong><p>Sistemas operacionais, bibliotecas e programas locais também possuem APIs. Nesta aula, vamos concentrar a atenção em <strong>APIs Web</strong>.</p></div>

    <h3>O botão é para a pessoa; a API é para o programa</h3>
    <p>Quando o usuário toca em “Consultar CEP”, a tela pode apenas iniciar uma sequência invisível:</p>
    <div class="representation-flow" aria-label="Consulta de API simplificada"><div><strong>App</strong><span>monta pedido</span></div><span class="flow-arrow">→</span><div><strong>API</strong><span>interpreta</span></div><span class="flow-arrow">→</span><div><strong>Serviço</strong><span>processa dados</span></div><span class="flow-arrow">→</span><div><strong>Resposta</strong></div></div>
    <p>A API não é a tela. Ela é uma interface destinada principalmente à comunicação entre softwares.</p>

    <h3>Uma API oferece vários pontos de acesso</h3>
    <p>Uma loja precisa consultar produtos, clientes e pedidos. Cada tipo de recurso ou operação precisa ser identificado dentro do contrato.</p>
    <div class="definition-box"><span class="term">Endpoint</span><p>É um ponto de acesso definido pela API para interação com determinado recurso ou operação.</p></div>
    <div class="example-box compact"><strong>Exemplos conceituais</strong><p><code>/api/produtos</code><br><code>/api/clientes/27</code><br><code>/api/pedidos/125</code></p></div>
    <div class="note-box compact"><strong>A API não é uma porta aberta para o banco.</strong><p>O cliente externo normalmente conversa com a aplicação/API. Essa camada valida dados, aplica regras e decide quais operações sobre o banco são permitidas.</p></div>

    <h3>HTTP volta — agora como linguagem de integração</h3>
    <p>Na Web, cliente e servidor já usam requisições e respostas. APIs Web frequentemente aproveitam a mesma infraestrutura.</p>
    <div class="comparison-grid four">
      <article><strong>Método</strong><p>Expressa a intenção da requisição.</p></article>
      <article><strong>URL / endpoint</strong><p>Identifica o recurso ou ponto de acesso.</p></article>
      <article><strong>Cabeçalhos</strong><p>Transportam metadados, tipos de conteúdo e credenciais.</p></article>
      <article><strong>Corpo</strong><p>Pode transportar os dados enviados na operação.</p></article>
    </div>

    <h3>Consultar, criar, alterar e excluir</h3>
    <p>Queremos ler o cliente 27, criar outro cliente e depois corrigir um telefone. Métodos HTTP ajudam a expressar intenções diferentes.</p>
    <div class="table-wrap"><table><thead><tr><th>Operação comum</th><th>Método frequentemente usado</th><th>Exemplo</th></tr></thead><tbody>
      <tr><td>Consultar</td><td><code>GET</code></td><td><code>GET /clientes/27</code></td></tr>
      <tr><td>Criar/processar</td><td><code>POST</code></td><td><code>POST /clientes</code></td></tr>
      <tr><td>Substituir</td><td><code>PUT</code></td><td><code>PUT /clientes/27</code></td></tr>
      <tr><td>Alterar parcialmente</td><td><code>PATCH</code></td><td><code>PATCH /clientes/27</code></td></tr>
      <tr><td>Remover</td><td><code>DELETE</code></td><td><code>DELETE /clientes/27</code></td></tr>
    </tbody></table></div>
    <p>Essa organização lembra o CRUD da Aula 14, mas não existe uma equivalência matemática obrigatória para toda API. <strong>O contrato do serviço define a semântica real.</strong></p>

    <h3>Quero filtrar, não buscar um único identificador</h3>
    <p>Em vez de “cliente 27”, queremos “clientes de Campinas”. Uma API pode receber critérios na própria URL:</p>
    <div class="code-focus"><code>/clientes?cidade=Campinas</code></div>
    <div class="definition-box compact"><span class="term">Query parameter</span><p>É um parâmetro de consulta enviado na URL, normalmente após <code>?</code>, para fornecer filtros ou outras opções da requisição.</p></div>

    <h3>Os programas também precisam concordar sobre a estrutura dos dados</h3>
    <p>Uma resposta como <code>Ana;27;Campinas;SP</code> só funciona se todos souberem de antemão o significado e a ordem. É mais seguro usar um formato estruturado e documentado.</p>
    <div class="definition-box featured"><span class="term">JSON — JavaScript Object Notation</span><p>É um formato textual, leve e independente de linguagem para intercâmbio de dados estruturados.</p></div>
    <div class="example-box"><strong>Exemplo</strong><p><code>{ "id": 27, "nome": "Ana", "cidade": "Campinas", "ativo": true }</code></p></div>
    <p>JSON pode representar textos, números, booleanos, valores nulos, listas e objetos. <strong>Não é uma linguagem de programação</strong> e não pertence exclusivamente ao JavaScript.</p>

    <h3>O aplicativo não precisa mostrar o JSON cru</h3>
    <p>Uma API do clima pode responder:</p>
    <div class="example-box"><p><code>{ "cidade": "Campinas", "temperatura": 27.4 }</code></p></div>
    <p>O aplicativo extrai os valores e pode apresentar:</p>
    <div class="mbb-pause-question"><strong>Campinas — 27,4 °C</strong><p><strong>Dados recebidos e interface exibida são camadas diferentes.</strong></p></div>
    <div class="note-box compact"><strong>API ≠ JSON.</strong><p>JSON é um formato muito comum, mas APIs podem trocar XML, texto, imagens, arquivos binários e outros formatos.</p></div>

    <h3>Como saber o que a API espera?</h3>
    <p>Se o serviço espera o campo <code>nome</code> e o cliente envia <code>cliente_nome_completo</code>, os sistemas podem não se entender. É por isso que uma API precisa ser documentada.</p>
    <div class="definition-box"><span class="term">Documentação da API</span><p>Descreve endpoints, métodos, parâmetros, formatos, campos, autenticação, respostas, erros e regras relevantes do contrato.</p></div>
    <div class="example-box compact"><strong>Metadados também viajam</strong><p>Um cabeçalho como <code>Content-Type: application/json</code> informa como interpretar o corpo da mensagem.</p></div>

    <h3>Uma resposta precisa dizer se deu certo</h3>
    <p>O cliente pediu um recurso, mas ele pode não existir, a mensagem pode estar inválida ou a identidade pode não ter permissão.</p>
    <div class="comparison-grid four"><article><strong>200</strong><p>requisição atendida com sucesso.</p></article><article><strong>400</strong><p>problema na requisição.</p></article><article><strong>404</strong><p>recurso não encontrado.</p></article><article><strong>500</strong><p>falha interna do servidor.</p></article></div>
    <p>Dois códigos de segurança merecem uma distinção especial:</p>
    <div class="comparison-grid"><article><strong>401</strong><p>A autenticação necessária está ausente ou não foi aceita no contexto da requisição.</p></article><article><strong>403</strong><p>O servidor recusa o acesso à operação/recurso no contexto apresentado.</p></article></div>
    <p>Em termos didáticos: <strong>401 aponta para a necessidade de autenticar adequadamente; 403 aponta para uma operação não permitida</strong>.</p>

    <h3>Nem toda API é pública</h3>
    <p>Uma API capaz de cobrar cartões ou consultar dados privados não pode aceitar chamadas anônimas indiscriminadamente.</p>
    <div class="two-col"><div class="definition-box"><span class="term">API key</span><p>É uma chave atribuída a um consumidor da API e pode identificar cliente, plano ou limites. Dependendo do serviço, deve ser tratada como credencial.</p></div><div class="definition-box"><span class="term">Token de acesso</span><p>É uma credencial utilizada para representar autorização concedida em determinado contexto.</p></div></div>
    <div class="danger-box compact"><strong>Segredo no navegador deixa de ser secreto.</strong><p>Se uma chave privada é colocada diretamente no JavaScript entregue ao usuário, ela pode ser inspecionada. Operações sensíveis frequentemente precisam de um backend que proteja credenciais.</p></div>

    <h3>Uma API também precisa se proteger de entradas ruins e excesso de chamadas</h3>
    <p>Receber dados de outro programa não significa confiar cegamente neles. O cliente pode ter um bug, estar desatualizado ou ser malicioso.</p>
    <div class="comparison-grid"><article><strong>Validação</strong><p>Verifica formato, presença de campos e regras antes de usar a entrada.</p></article><article><strong>Rate limit</strong><p>Limita quantidade ou frequência de requisições segundo usuário, token, IP, plano ou outra regra.</p></article></div>
    <p>Aplicações também precisam lidar com indisponibilidade, timeout e respostas inesperadas. <strong>Uma chamada de rede pode falhar mesmo que o código local esteja correto.</strong></p>

    <h3>Integração reduz trabalho manual — e cria dependência</h3>
    <p>Imagine vendas, estoque e financeiro separados. Sem integração, alguém copia dados de um sistema para outro. Com APIs, uma venda pode atualizar os demais automaticamente. Mas, se o contrato mudar de surpresa, consumidores podem quebrar.</p>
    <div class="definition-box"><span class="term">Versionamento de API</span><p>É uma estratégia para evoluir contratos de integração de forma controlada, por exemplo mantendo <code>/api/v1/</code> enquanto uma versão nova é introduzida.</p></div>

    <h3>REST e Web Service: reconheça sem transformar isto em curso de backend</h3>
    <details class="sources-box"><summary>Aprofunde</summary><p><strong>Web Service</strong> é um serviço disponibilizado por tecnologias de rede/Web para integração entre sistemas. <strong>API</strong> é conceito mais amplo. <strong>REST</strong> é um estilo arquitetural para sistemas distribuídos; muitas APIs Web organizam recursos usando HTTP segundo ideias REST, mas simplesmente usar HTTP e JSON não torna automaticamente uma API plenamente RESTful.</p></details>

    <h3>Experimente uma API sem programar</h3>
    <p>Um endpoint público de consulta de CEP torna a ideia visível. No navegador, acesse:</p>
    <div class="code-focus"><code>https://viacep.com.br/ws/01001000/json/</code></div>
    <p>Você verá dados estruturados referentes ao CEP. O ponto não é decorar a URL; é identificar:</p>
    <div class="concept-flow"><div><strong>Endpoint</strong></div><span class="flow-arrow">→</span><div><strong>Requisição</strong></div><span class="flow-arrow">→</span><div><strong>JSON de resposta</strong></div></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Os softwares estão realmente conversando?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="API é uma interface/contrato entre softwares e não se limita a serviços da Internet."><p>Qual frase descreve melhor uma API?</p><label><input type="radio" name="q18a" value="a"> É sempre um banco de dados público.</label><label><input type="radio" name="q18a" value="b"> É uma interface que define como software pode usar recursos de outro software.</label><label><input type="radio" name="q18a" value="c"> É outro nome para Wi-Fi.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="JSON é um formato textual de intercâmbio; a aplicação escolhe como apresentar os dados."><p>Uma API devolve JSON com temperatura. O aplicativo precisa mostrar o JSON exatamente como recebeu?</p><label><input type="radio" name="q18b" value="a"> Sim, JSON é a interface visual.</label><label><input type="radio" name="q18b" value="b"> Sim, porque JSON é linguagem de programação.</label><label><input type="radio" name="q18b" value="c"> Não. O aplicativo interpreta os dados e monta sua interface.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Uma credencial secreta entregue ao navegador pode ser inspecionada; segredos sensíveis devem permanecer em ambientes adequadamente protegidos."><p>É seguro colocar uma chave secreta de pagamento no JavaScript público do navegador?</p><label><input type="radio" name="q18c" value="a"> Não. Código entregue ao cliente pode ser inspecionado.</label><label><input type="radio" name="q18c" value="b"> Sim, se o arquivo terminar em .js.</label><label><input type="radio" name="q18c" value="c"> Sim, desde que use JSON.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Redes permitem que computadores troquem dados; <strong>APIs definem como softwares combinam o significado dessa conversa</strong>. Endpoints identificam pontos de acesso, HTTP organiza requisições e respostas, JSON é um formato comum de dados e documentação descreve o contrato. Autenticação, validação, limites e tratamento de falhas tornam a integração utilizável e segura.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se programas tradicionais executam regras escritas por pessoas, como um sistema consegue reconhecer um gato, identificar spam ou gerar texto sem existir uma regra manual para cada caso possível?</p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://www.rfc-editor.org/info/rfc9110/" target="_blank" rel="noopener">RFC 9110 — HTTP Semantics</a></li>
      <li><a href="https://www.rfc-editor.org/rfc/rfc8259.html" target="_blank" rel="noopener">RFC 8259 — JSON Data Interchange Format</a></li>
      <li><a href="https://viacep.com.br/" target="_blank" rel="noopener">ViaCEP — serviço público de consulta de CEP</a></li>
    </ul></details>
  `
});
