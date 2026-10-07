window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "tudo-conectado",
  number: "21",
  unit: "Ato 4 · Computação no mundo atual",
  menuTitle: "Tudo conectado",
  technicalTitle: "integração • camadas • hardware • SO • rede • DNS • HTTPS • API • banco • nuvem • segurança • IA • diagnóstico",
  title: "O que realmente acontece quando você toca em “Comprar”?",
  objective: "Integrar os conceitos do módulo acompanhando uma única ação de ponta a ponta e usar o modelo em camadas para explicar funcionamento e diagnosticar falhas.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Um toque, muitas camadas</span>
      <h2>Você escolhe um produto no celular, toca em <strong>Comprar</strong> e alguns segundos depois aparece “Pedido confirmado”.</h2>
      <p>Para o usuário foi um toque. Por baixo podem participar hardware, sistema operacional, Wi-Fi, IP, DNS, TLS, HTTP, APIs, servidores, banco de dados, pagamento e mecanismos de segurança. <strong>O último passo de Fundamentos é enxergar essas partes como um sistema.</strong></p>
    </div>

    <h3>Antes do toque, o computador já está trabalhando</h3>
    <p>O aplicativo está armazenado no dispositivo. Quando foi aberto, o sistema operacional criou processos, reservou memória, forneceu acesso à tela, arquivos e rede e distribuiu tempo de CPU.</p>
    <div class="concept-flow"><div><strong>Programa</strong><span>armazenado</span></div><span class="flow-arrow">→</span><div><strong>Processo</strong><span>em execução</span></div><span class="flow-arrow">→</span><div><strong>SO + hardware</strong><span>recursos disponíveis</span></div></div>
    <p>A fotografia do produto também não existe como miniatura física dentro do SSD. Bytes são lidos, levados à memória, interpretados pelo software e transformados em pixels na tela. <strong>Bits e hardware continuam presentes mesmo quando a interface parece simples.</strong></p>

    <h3>O toque precisa virar uma operação do programa</h3>
    <p>A tela detecta a entrada e o código da aplicação reage ao evento. Talvez seja necessário enviar produto, quantidade e outras informações ao servidor.</p>
    <div class="example-box"><strong>Dados conceituais da operação</strong><p><code>{ "produto": 125, "quantidade": 2 }</code></p></div>
    <p>O formato estruturado só é útil porque cliente e servidor combinam o contrato da API.</p>

    <h3>O nome do servidor ainda precisa virar um destino de rede</h3>
    <p>O aplicativo conhece algo como <code>api.loja.com</code>. A rede não abandona o IP só porque usamos um nome amigável.</p>
    <div class="representation-flow"><div><strong>api.loja.com</strong></div><span class="flow-arrow">→</span><div><strong>DNS</strong><span>resolve informações</span></div><span class="flow-arrow">→</span><div><strong>IP</strong><span>destino de rede</span></div><span class="flow-arrow">→</span><div><strong>Rota</strong></div></div>
    <p>Se DNS falhar, o aplicativo pode parecer “sem Internet” mesmo que a conectividade IP continue funcionando. A Aula 20 já nos ensinou a não confundir sintoma com causa.</p>

    <h3>A Internet começa por uma rede local</h3>
    <p>O celular está no Wi-Fi de casa. Ele possui uma interface de rede, participa da LAN e envia tráfego ao gateway quando o destino está fora da rede local.</p>
    <div class="concept-flow"><div><strong>Celular</strong><span>IP privado</span></div><span class="flow-arrow">→</span><div><strong>Roteador</strong><span>gateway / NAT no IPv4 doméstico</span></div><span class="flow-arrow">→</span><div><strong>Internet</strong><span>outras redes</span></div></div>
    <div class="note-box compact"><strong>MAC, IP e porta não competem pela mesma função.</strong><p>Endereçamento de enlace ajuda na entrega local; IP permite comunicação entre redes; portas de transporte ajudam a entregar a comunicação ao endpoint de software correto.</p></div>

    <h3>Antes de enviar o pedido, precisamos proteger a conversa</h3>
    <p>Dados de conta e compra não deveriam viajar em uma comunicação facilmente legível ou alterável por terceiros. O cliente estabelece uma comunicação HTTPS, usando TLS, e verifica o certificado apresentado para o nome acessado.</p>
    <div class="concept-flow"><div><strong>Cliente</strong></div><span class="flow-arrow">→</span><div><strong>TLS</strong><span>canal protegido</span></div><span class="flow-arrow">→</span><div><strong>HTTP/API</strong><span>requisição</span></div></div>
    <p>Mesmo assim, HTTPS não decide se a pessoa pode comprar. <strong>Autenticação e autorização</strong> continuam sendo controles diferentes.</p>

    <h3>A API recebe dados — e não deveria confiar cegamente neles</h3>
    <p>Imagine que alguém altere o aplicativo para enviar <code>preco = 1.00</code>. Se o servidor aceitar o preço informado pelo cliente como verdade, a regra de negócio ficou no lugar errado.</p>
    <div class="mbb-pause-question"><strong>Dados vindos do cliente são entrada.</strong><p>O servidor deve validar formato, identidade, permissões e regras relevantes. O preço real pode ser consultado em uma fonte confiável do próprio sistema.</p></div>
    <p>Essa fronteira entre interface e dados internos é uma das razões para existir uma API controlada em vez de acesso irrestrito ao banco.</p>

    <h3>O banco de dados responde perguntas do negócio</h3>
    <p>A aplicação precisa verificar produto, estoque, cliente e talvez criar um pedido. O SGBD organiza registros e relacionamentos e permite consultas estruturadas.</p>
    <div class="representation-flow"><div><strong>API</strong><span>regra de negócio</span></div><span class="flow-arrow">→</span><div><strong>SGBD</strong><span>consulta / transação</span></div><span class="flow-arrow">→</span><div><strong>Tabelas</strong><span>produto, cliente, pedido</span></div><span class="flow-arrow">→</span><div><strong>Resultado</strong></div></div>

    <h3>Duas pessoas querem a última unidade</h3>
    <p>Estoque mostra <strong>1</strong>. Duas requisições chegam quase juntas. Se cada uma apenas consultar e depois atualizar sem coordenação, ambas podem acreditar que compraram o mesmo item.</p>
    <div class="definition-box"><span class="term">Transação reaparece</span><p>Operações relacionadas precisam preservar a coerência do estado. Registrar pedido e atualizar estoque não deveriam deixar o sistema numa condição impossível se uma parte falhar.</p></div>
    <p>Essa é uma demonstração de por que o banco não é apenas “uma tabela grande”.</p>

    <h3>O pagamento pode acontecer em outro sistema</h3>
    <p>A loja não precisa ser um banco. Pode chamar uma API de um serviço de pagamento, que por sua vez conversa com outras infraestruturas e devolve um resultado.</p>
    <div class="concept-flow"><div><strong>Loja</strong><span>solicita cobrança</span></div><span class="flow-arrow">→</span><div><strong>API de pagamento</strong><span>processa</span></div><span class="flow-arrow">→</span><div><strong>Resultado</strong><span>aprovado / recusado</span></div></div>
    <div class="note-box compact"><strong>Falha de comunicação não prova que a operação não ocorreu.</strong><p>Se a resposta se perde depois de o serviço processar a cobrança, repetir cegamente a operação pode gerar duplicidade. Sistemas distribuídos precisam controlar estados e repetição de operações com muito cuidado.</p></div>

    <h3>Em qual computador o servidor está?</h3>
    <p>Talvez não exista uma única máquina exclusiva. A aplicação pode rodar em VMs ou contêineres, o banco pode ser um serviço gerenciado e várias instâncias podem receber tráfego em datacenters diferentes.</p>
    <div class="comparison-grid three"><article><strong>Virtualização</strong><p>abstrai recursos físicos em ambientes virtuais.</p></article><article><strong>Nuvem</strong><p>oferece recursos sob demanda e mensurados.</p></article><article><strong>Escala</strong><p>permite aumentar capacidade quando a demanda cresce.</p></article></div>
    <p>Na Black Friday, o mesmo sistema pode precisar atender cem vezes mais usuários. A nuvem não “faz milagre”; ela oferece mecanismos para provisionar e organizar capacidade real.</p>

    <h3>Cache reaparece em outra escala</h3>
    <p>Milhares de pessoas consultam a mesma descrição de produto. Buscar tudo no banco a cada requisição pode ser desnecessário.</p>
    <div class="definition-box"><span class="term">A mesma ideia de cache</span><p>Manter temporariamente dados de acesso frequente reduz trabalho repetido. A ideia já apareceu na CPU, no DNS e agora aparece em aplicações distribuídas.</p></div>
    <div class="note-box compact"><strong>O benefício cria outro problema.</strong><p>Cache pode ficar desatualizado. Sistemas precisam decidir validade, expiração e atualização.</p></div>

    <h3>A IA pode participar — mas não é obrigatória</h3>
    <p>Antes da compra, a loja pode recomendar produtos ou analisar risco de fraude usando modelos de Machine Learning. Mas a compra básica funciona sem IA. Isso evita uma confusão comum: <strong>um sistema moderno não precisa chamar tudo de inteligência artificial</strong>.</p>
    <div class="comparison-grid"><article><strong>Regra tradicional</strong><p>“Se estoque = 0, impedir compra.”</p></article><article><strong>Modelo</strong><p>“Estimar probabilidade de fraude a partir de padrões históricos.”</p></article></div>
    <p>Uma probabilidade de fraude continua sendo uma previsão, não uma prova absoluta.</p>

    <h3>O mundo físico também entra no sistema</h3>
    <p>Depois do pagamento, o depósito pode usar leitores de código de barras, coletores móveis, sensores e sistemas embarcados. O estado “pedido enviado” pode sair do mundo físico, atravessar a rede e chegar ao aplicativo do cliente.</p>
    <div class="representation-flow"><div><strong>Depósito</strong><span>sensor / coletor</span></div><span class="flow-arrow">→</span><div><strong>Rede</strong></div><span class="flow-arrow">→</span><div><strong>API + banco</strong></div><span class="flow-arrow">→</span><div><strong>App</strong><span>rastreamento</span></div></div>
    <p>IoT e sistemas embarcados deixam de parecer capítulos isolados: eles são outra porta de entrada de dados para a mesma arquitetura.</p>

    <h3>Segurança não mora numa caixa no fim do desenho</h3>
    <p>O usuário precisa proteger a conta. A aplicação precisa validar entrada. A API precisa autenticar e autorizar. A rede usa criptografia. O banco precisa de controles de acesso e backup. O servidor precisa de atualização e monitoramento.</p>
    <div class="mbb-pause-question"><strong>Segurança é transversal.</strong><p>Não existe uma única peça chamada “segurança” que possamos colocar depois que o sistema ficou pronto.</p></div>

    <h3>E se o botão apenas disser “Não foi possível concluir”?</h3>
    <p>O sintoma aparece na tela, mas a causa pode estar em camadas diferentes. Agora podemos investigar.</p>
    <div class="table-wrap"><table><thead><tr><th>Observação</th><th>Hipótese que ganha força</th></tr></thead><tbody>
      <tr><td>Nenhum aplicativo acessa serviços externos</td><td>rede local, gateway ou acesso externo</td></tr>
      <tr><td>IP externo funciona, nomes falham</td><td>resolução DNS</td></tr>
      <tr><td>A loja abre, mas login falha</td><td>autenticação/identidade</td></tr>
      <tr><td>Login funciona, mas compra é negada</td><td>autorização ou regra de negócio</td></tr>
      <tr><td>Somente pagamento falha para vários usuários</td><td>integração de pagamento ou dependência externa</td></tr>
    </tbody></table></div>
    <p>O modelo em camadas não serve apenas para explicar funcionamento. Ele também <strong>reduz o espaço de busca de uma falha</strong>.</p>

    <h3>No nível mais baixo, ainda existem bits</h3>
    <p>JSON, pacote IP, imagem, instrução e registro de banco parecem coisas muito diferentes, mas todos precisam ser representados fisicamente. Um padrão como <code>01000001</code> não possui significado universal: software, formatos e protocolos dizem como interpretá-lo.</p>
    <div class="concept-flow"><div><strong>Estados físicos</strong></div><span class="flow-arrow">→</span><div><strong>Bits e estruturas</strong></div><span class="flow-arrow">→</span><div><strong>Significado</strong><span>definido por regras</span></div></div>
    <p>Essa é uma das ideias mais profundas do módulo: <strong>camadas de abstração transformam representações físicas simples em sistemas com significado para pessoas.</strong></p>

    <h3>As ideias que reapareceram não são coincidência</h3>
    <div class="comparison-grid four"><article><strong>Abstração</strong><p>esconde detalhes para tornar um nível utilizável.</p></article><article><strong>Camadas</strong><p>separam responsabilidades.</p></article><article><strong>Protocolos</strong><p>estabelecem regras de comunicação.</p></article><article><strong>Identificadores</strong><p>distinguem recursos e participantes.</p></article></div>
    <div class="comparison-grid four"><article><strong>Cache</strong><p>reduz trabalho repetido.</p></article><article><strong>Redundância</strong><p>reduz impacto de certas falhas.</p></article><article><strong>Permissões</strong><p>limitam ações.</p></article><article><strong>Logs</strong><p>registram evidências do que aconteceu.</p></article></div>

    <h3>Conhecer Fundamentos não significa decorar todas as siglas</h3>
    <p>Uma pessoa pode consultar qual porta é padrão do HTTPS ou uma opção específica do <code>ipconfig</code>. O que deve permanecer é o modelo mental:</p>
    <div class="mbb-pause-question"><strong>Você sabe que perguntas fazer?</strong><p>RAM é armazenamento? Internet é Web? autenticação é autorização? API é banco? nuvem elimina hardware? IA é qualquer automação? Se a resposta é “não”, você consegue explicar <strong>por quê</strong> e qual problema cada conceito resolve?</p></div>

    <h3>Do início até aqui</h3>
    <p>Começamos com pessoas que computavam manualmente. Passamos por máquinas mecânicas, eletrônica, microprocessadores, representação binária, hardware, software, sistema operacional, arquivos, redes, Internet, dados, nuvem, IoT, segurança, APIs, IA e diagnóstico.</p>
    <div class="essence"><strong>Essência final</strong><p>Um sistema computacional recebe, representa, armazena, processa, transmite e apresenta informação. <strong>Hardware fornece capacidade física; software organiza instruções; sistemas operacionais administram recursos; redes e protocolos permitem comunicação; bancos mantêm dados; nuvem abstrai infraestrutura; segurança reduz riscos; APIs integram softwares; IA trabalha com padrões; diagnóstico transforma sintomas em evidências.</strong> O resultado aparece quando essas partes cooperam.</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Checkpoint final · 6</span><h3>Você consegue raciocinar entre as camadas?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Falha de DNS pode impedir resolução de nomes enquanto conectividade IP e rede local continuam funcionando."><p>O DNS parou de responder. O que pode continuar funcionando?</p><label><input type="radio" name="q21a" value="a"> Nada: CPU e RAM param junto.</label><label><input type="radio" name="q21a" value="b"> Rede local e comunicações por IP podem continuar, embora nomes dependentes de DNS falhem.</label><label><input type="radio" name="q21a" value="c"> O banco perde automaticamente todos os dados.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="HTTPS protege a comunicação; autorização é uma decisão separada sobre ações permitidas."><p>HTTPS está funcionando. Isso prova que o usuário possui autorização para comprar?</p><label><input type="radio" name="q21b" value="a"> Sim, TLS concede permissão de negócio.</label><label><input type="radio" name="q21b" value="b"> Sim, se o cadeado estiver visível.</label><label><input type="radio" name="q21b" value="c"> Não. Comunicação protegida e autorização resolvem problemas diferentes.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Camadas podem falhar independentemente: o banco pode estar indisponível enquanto Wi-Fi, Internet, DNS e HTTPS até o servidor continuam operando."><p>O banco está indisponível. A rede pode continuar funcionando normalmente?</p><label><input type="radio" name="q21c" value="a"> Sim. A falha pode estar numa camada posterior da aplicação.</label><label><input type="radio" name="q21c" value="b"> Não, banco e roteador são a mesma camada.</label><label><input type="radio" name="q21c" value="c"> Não, qualquer erro de banco desliga o Wi-Fi.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="O valor do conhecimento fundamental está em explicar função, necessidade e relação entre conceitos, não apenas expandir siglas."><p>Qual demonstra melhor domínio de Fundamentos?</p><label><input type="radio" name="q21d" value="a"> Decorar todas as siglas sem saber onde se aplicam.</label><label><input type="radio" name="q21d" value="b"> Explicar que problema cada camada resolve e como testar hipóteses quando algo falha.</label><label><input type="radio" name="q21d" value="c"> Chamar todo problema de “Internet”.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="bridge-box"><strong>O conteúdo conceitual está completo.</strong><p>Agora não precisamos de mais uma aula cheia de definições. A próxima etapa é <strong>99 — Exercícios e Desafios</strong>: situações que obriguem a distinguir conceitos, diagnosticar problemas e integrar camadas sem depender de memorização mecânica.</p></div>

    <details class="sources-box"><summary>Referências de integração</summary><ul>
      <li><a href="https://www.rfc-editor.org/info/rfc9110/" target="_blank" rel="noopener">RFC 9110 — HTTP Semantics</a></li>
      <li><a href="https://csrc.nist.gov/pubs/sp/800/145/final" target="_blank" rel="noopener">NIST SP 800-145 — computação em nuvem</a></li>
      <li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener">NIST — AI Risk Management Framework</a></li>
    </ul></details>
  `
});
