(() => {
  'use strict';

  const blocks = Array.isArray(window.backendFastapiBlocks) ? window.backendFastapiBlocks : [];
  if (!blocks.length) return;

  const encontrarBloco = (id) => blocks.find((bloco) => bloco.id === id);

  const bloco1 = encontrarBloco('bloco-1');
  if (bloco1 && !bloco1.lessons.some((aula) => aula.id === 'capitulo-00')) {
    bloco1.lessons.unshift({
      id: 'capitulo-00',
      number: 0,
      menuTitle: 'Antes de começar',
      title: 'Antes de começar: o que você precisa trazer do Python',
      objective: 'Confirmar os conhecimentos mínimos para acompanhar o projeto sem transformar este módulo em uma repetição do curso de Python.',
      content: `
        <div class="hero-box">
          <h3>Este módulo começa onde o Python básico termina</h3>
          <p>Você não precisa dominar Python avançado. Mas precisa reconhecer algumas ideias para conseguir concentrar sua atenção no que é novo: servidor, HTTP, API, banco de dados, segurança e testes.</p>
        </div>

        <h3>Você está pronto se consegue reconhecer</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Dados</strong>Variáveis, strings, números, booleanos, listas e dicionários.</div>
          <div class="mini-card"><strong>Controle</strong><code class="inline-code">if</code>, <code class="inline-code">for</code> e <code class="inline-code">while</code>.</div>
          <div class="mini-card"><strong>Organização</strong>Funções com parâmetros e retorno; imports e módulos.</div>
          <div class="mini-card"><strong>Objetos</strong>Reconhecer uma classe e entender que um objeto reúne dados e comportamento.</div>
        </div>

        <h3>Teste rápido de prontidão</h3>
        <pre class="code-block">produtos = [
    {"id": 1, "nome": "Água 20 L", "preco": 18.0},
    {"id": 2, "nome": "Botijão P13", "preco": 115.0}
]


def buscar_produto(produto_id):
    for produto in produtos:
        if produto["id"] == produto_id:
            return produto
    return None</pre>
        <p>Sem executar, tente explicar: o que existe dentro de <code class="inline-code">produtos</code>? O que a função recebe? Quando ela devolve um produto? O que significa <code class="inline-code">None</code> neste exemplo?</p>

        <div class="concept-box"><strong>Se você consegue explicar a ideia geral, pode continuar.</strong> Não é necessário memorizar a sintaxe. O módulo retomará cada recurso Python quando ele aparecer por uma necessidade concreta do backend.</div>

        <div class="task-box">
          <h3>Se Python ainda estiver atrapalhando</h3>
          <p>Faça primeiro a trilha essencial do módulo Python e volte quando variáveis, coleções, decisões, repetições e funções estiverem familiares.</p>
          <p><a href="python.html"><strong>Revisar Python →</strong></a></p>
        </div>

        <h3>Como estudar aqui</h3>
        <div class="flow">ENTENDER A NECESSIDADE
↓
PREVER O QUE DEVERIA ACONTECER
↓
PROGRAMAR UMA PEQUENA MUDANÇA
↓
EXECUTAR E OBSERVAR
↓
COMPARAR COM O ESPERADO
↓
EXPLICAR O QUE APRENDEU</div>

        <div class="essence"><strong>Essência</strong>Você não vem aprender Python novamente. Você vem usar Python para construir um backend e entender por que cada nova peça passa a ser necessária.</div>`
    });
  }

  const checkpoints = {
    'bloco-1': {
      entender: 'Consigo explicar cliente, servidor, frontend, backend, HTTP, requisição, resposta, API, recurso, rota e endpoint sem depender de decorar definições.',
      funcionar: 'Consigo acompanhar, no papel, o caminho de GET /produtos: cliente → HTTP → endpoint → backend → resposta JSON.',
      estado: 'Ainda não preciso ter uma aplicação pronta. Preciso ter um mapa mental claro de quem solicita, quem processa e o que atravessa a rede.',
      teste: 'Explique para outra pessoa por que o aplicativo não deve guardar sozinho preços, estoque e pedidos como fonte principal.'
    },
    'bloco-2': {
      entender: 'Consigo explicar GET, POST, path parameter, query parameter, body, Pydantic, validação e códigos de resposta no contexto da API.',
      funcionar: 'A API inicia, /docs abre, GET /produtos responde e POST /pedidos recebe um JSON válido e rejeita dados incompatíveis.',
      estado: 'Tenho a pasta do projeto, .venv e main.py no estado construído durante o bloco. Sei em qual terminal iniciar e encerrar o servidor.',
      teste: 'Envie um pedido válido, um produto inexistente e uma quantidade inválida. Antes de executar, preveja a resposta de cada caso.'
    },
    'bloco-3': {
      entender: 'Consigo separar validação estrutural de regra de negócio e explicar por que estoque, produto ativo, vários itens, preço histórico e estado do pedido pertencem ao backend.',
      funcionar: 'Um pedido inválido não altera parcialmente o estado; pedidos válidos afetam estoque de forma coerente e preservam os dados históricos necessários.',
      estado: 'Meu código já separa responsabilidades quando uma função começa a acumular regras demais. Consigo localizar onde cada regra é aplicada.',
      teste: 'Crie mentalmente três cenários: estoque insuficiente, produto inativo e pedido com dois itens em que o segundo falha. Diga o que deve permanecer inalterado.'
    },
    'bloco-4': {
      entender: 'Consigo explicar persistência, tabela, chave, relacionamento, ORM, Engine, Session, transação e migração sem confundir banco com backend.',
      funcionar: 'Os dados sobrevivem ao reinício da API e operações críticas confirmam ou desfazem alterações de maneira coerente.',
      estado: 'Tenho database.py, models.py e os demais arquivos equivalentes do percurso; sei onde ficam o mapeamento, a sessão e os contratos HTTP.',
      teste: 'Cadastre um produto, reinicie a API e confirme que o mesmo registro continua disponível. Depois explique por que isso não acontecia com uma lista Python.'
    },
    'bloco-5': {
      entender: 'Consigo diferenciar hash de senha, autenticação, token, JWT, usuário atual e autorização por papel.',
      funcionar: 'Senha não retorna pela API; login válido gera token; ausência ou token inválido produz 401; usuário autenticado sem permissão produz 403.',
      estado: 'Segredos não estão gravados diretamente no código. O projeto possui a configuração e o arquivo de segurança construídos no bloco.',
      teste: 'Compare três chamadas à mesma rota protegida: sem token, com atendente e com administrador. Preveja 401, 403 ou sucesso antes de executar.'
    },
    'bloco-6': {
      entender: 'Consigo explicar por que testes precisam de dados previsíveis, banco isolado, fixtures e substituição de dependências; também sei quando CORS aparece.',
      funcionar: 'A suíte executa sem contaminar o banco de desenvolvimento e verifica casos de sucesso e falha em rotas críticas.',
      estado: 'Tenho tests/conftest.py e testes organizados; consigo executar a suíte e interpretar uma falha sem alterar código no chute.',
      teste: 'Execute a suíte completa. Depois escolha um teste e explique cenário inicial, ação, resultado esperado e qual regressão ele impediria.'
    }
  };

  Object.entries(checkpoints).forEach(([blocoId, dados]) => {
    const bloco = encontrarBloco(blocoId);
    const ultimaAula = bloco?.lessons?.[bloco.lessons.length - 1];
    if (!ultimaAula || typeof ultimaAula.content !== 'string') return;
    if (ultimaAula.content.includes(`data-backend-checkpoint="${blocoId}"`)) return;

    ultimaAula.content += `
      <section class="task-box" data-backend-checkpoint="${blocoId}">
        <h3>Checkpoint MbB — antes de avançar</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Eu entendi</strong><br>${dados.entender}</div>
          <div class="mini-card"><strong>Está funcionando</strong><br>${dados.funcionar}</div>
          <div class="mini-card"><strong>Meu projeto está assim</strong><br>${dados.estado}</div>
          <div class="mini-card"><strong>Teste mínimo</strong><br>${dados.teste}</div>
        </div>
        <div class="concept-box"><strong>Só avance quando conseguir explicar o resultado.</strong> Se algo falhar, volte ao primeiro ponto em que o comportamento deixou de ser o esperado.</div>
      </section>`;
  });

  const bloco6 = encontrarBloco('bloco-6');
  if (!bloco6) return;

  if (!bloco6.lessons.some((aula) => aula.id === 'capitulo-46')) {
    bloco6.lessons.push({
      id: 'capitulo-46',
      number: 46,
      menuTitle: 'Projeto de transferência',
      title: 'Agora o problema é outro: Oficina Avenida',
      objective: 'Transferir os conceitos do projeto Água & Gás para um domínio novo, tomando decisões de modelagem, API, segurança e testes com menos apoio.',
      content: `
        <div class="hero-box"><h3>Se você só consegue repetir Água & Gás, ainda não transferiu o conhecimento</h3><p>Agora o contexto muda. Uma oficina mecânica precisa organizar clientes, veículos e ordens de serviço. Você já conhece as peças técnicas; o desafio é decidir como combiná-las.</p></div>

        <h3>O cenário</h3>
        <p>A <strong>Oficina Avenida</strong> recebe veículos para diagnóstico e reparo. A atendente abre a ordem de serviço; um mecânico registra diagnóstico e andamento; o administrador cadastra serviços e usuários. O cliente precisa poder consultar o estado da própria ordem sem conhecer detalhes internos da aplicação.</p>

        <div class="mini-grid">
          <div class="mini-card"><strong>Cliente</strong>nome, telefone e identificação.</div>
          <div class="mini-card"><strong>Veículo</strong>placa, modelo, ano e proprietário.</div>
          <div class="mini-card"><strong>Ordem de serviço</strong>veículo, problema relatado, status, datas e observações.</div>
          <div class="mini-card"><strong>Serviço executado</strong>descrição, valor praticado e responsável.</div>
        </div>

        <h3>1. Antes do código: desenhe o contrato</h3>
        <p>Defina recursos e operações suficientes para responder às necessidades. Não copie automaticamente as rotas do projeto anterior.</p>
        <div class="task-box"><strong>Decida:</strong> quais recursos merecem rotas próprias? Quais identificadores aparecem no caminho? Quais consultas viram filtros? O que deve ser criado com POST e atualizado com PATCH?</div>

        <h3>2. Modele responsabilidades</h3>
        <p>Defina modelos de entrada e saída sem permitir que o cliente controle campos que pertencem ao servidor, como identificador, datas automáticas ou valor histórico já confirmado.</p>

        <h3>3. Escreva as regras antes de implementá-las</h3>
        <div class="flow">EXEMPLO
ordem aberta
↓
pode receber diagnóstico
↓
pode entrar em execução
↓
pode ser concluída

ordem concluída
↓
não volta silenciosamente para aberta</div>
        <p>Crie suas próprias regras de transição de estado e determine quais papéis podem executar cada ação.</p>

        <h3>4. Faça persistir</h3>
        <p>Modele pelo menos Cliente, Veiculo, OrdemServico e um registro de ServiçoExecutado. Use chaves e relacionamentos coerentes. Garanta que uma operação que modifica várias partes não deixe metade do trabalho gravado quando ocorre erro.</p>

        <h3>5. Proteja</h3>
        <p>Defina ao menos três papéis: <strong>atendente</strong>, <strong>mecanico</strong> e <strong>administrador</strong>. Justifique quais operações cada um pode realizar. Não basta esconder botões no frontend: a API precisa aplicar a regra.</p>

        <h3>6. Prove com testes</h3>
        <p>Crie testes para pelo menos:</p>
        <ul>
          <li>abertura válida de ordem;</li>
          <li>veículo inexistente;</li>
          <li>transição de status permitida e proibida;</li>
          <li>papel sem autorização;</li>
          <li>persistência do valor praticado de um serviço;</li>
          <li>rollback de uma operação que falha no meio.</li>
        </ul>

        <div class="concept-box"><strong>Critério de conclusão:</strong> outra pessoa deve conseguir olhar sua documentação, executar a API, descobrir o contrato em /docs e compreender pelos testes quais comportamentos você promete manter.</div>

        <div class="essence"><strong>Essência</strong>Transferir é reconhecer as mesmas decisões em um problema diferente. FastAPI, Pydantic, SQLAlchemy, JWT e pytest são ferramentas; a arquitetura nasce das necessidades e regras do novo domínio.</div>`
    });
  }

  if (!bloco6.lessons.some((aula) => aula.id === 'capitulo-47')) {
    bloco6.lessons.push({
      id: 'capitulo-47',
      number: 47,
      menuTitle: 'Da máquina à implantação',
      title: 'Como a API deixa de existir apenas no seu computador?',
      objective: 'Compreender o que muda entre desenvolvimento local e implantação, preparando configuração, segurança, observabilidade e operação sem transformar o módulo em um curso de infraestrutura.',
      content: `
        <div class="hero-box"><h3>127.0.0.1 só atende a própria máquina</h3><p>Durante o curso, isso é uma vantagem: podemos experimentar sem publicar o sistema. Mas um aplicativo usado por outras pessoas precisa alcançar a API em um ambiente disponível pela rede.</p></div>

        <div class="flow">DESENVOLVIMENTO
seu computador
127.0.0.1
↓

IMPLANTAÇÃO
ambiente acessível
endereço real
HTTPS
configuração própria
monitoramento</div>

        <h3>O que não deve viajar grudado no código</h3>
        <p>Chaves secretas, senhas, URLs específicas do ambiente e outras configurações variam entre desenvolvimento, teste e produção. Elas devem ser fornecidas pelo ambiente de execução, não copiadas para o repositório como valores reais.</p>

        <h3>Desenvolvimento e produção não são o mesmo modo</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Desenvolvimento</strong>recarga automática, mensagens detalhadas, banco e configurações locais, experimentação.</div>
          <div class="mini-card"><strong>Produção</strong>processo estável, segredos próprios, HTTPS, logs, recuperação, política de atualização e origem real dos clientes.</div>
        </div>
        <div class="danger-box"><strong>Não trate <code class="inline-code">fastapi dev</code> como estratégia de produção.</strong> Ele é conveniente para desenvolvimento. A implantação precisa de um ambiente e processo adequados à operação contínua.</div>

        <h3>Uma verificação simples de saúde</h3>
        <p>Uma rota pequena pode ajudar a confirmar se o processo está respondendo:</p>
        <pre class="code-block">@app.get("/health", tags=["infraestrutura"])
def verificar_saude():
    return {"status": "ok"}</pre>
        <p>Em sistemas reais, saúde pode envolver verificações adicionais. Aqui basta entender o propósito: fornecer uma evidência simples de disponibilidade.</p>

        <h3>Checklist antes de expor a API</h3>
        <div class="task-box">
          <ol>
            <li>executar toda a suíte de testes;</li>
            <li>aplicar a evolução correta do banco/migrações;</li>
            <li>fornecer segredos e configurações pelo ambiente;</li>
            <li>configurar as origens CORS realmente necessárias;</li>
            <li>usar HTTPS no acesso externo;</li>
            <li>registrar logs suficientes para investigar falhas sem expor senhas ou tokens;</li>
            <li>definir como atualizar, reiniciar e recuperar o serviço;</li>
            <li>validar /health e uma operação essencial depois da implantação.</li>
          </ol>
        </div>

        <h3>Onde aprofundar a parte operacional</h3>
        <p>VMs, Linux, Docker, Compose, rede, DNS, TLS, logs, disponibilidade e estratégias de implantação pertencem à área de Infraestrutura. Aqui basta compreender por que o backend passa a depender dessas decisões.</p>
        <p><a href="infraestrutura.html"><strong>Continuar em Infraestrutura e Sistemas →</strong></a></p>

        <div class="essence"><strong>Essência</strong>Implantar não é apenas copiar arquivos. É colocar uma versão testada em um ambiente configurado, acessível e observável, preservando segredos, dados e capacidade de recuperação.</div>`
    });
  }

  if (!bloco6.lessons.some((aula) => aula.id === 'capitulo-99')) {
    bloco6.lessons.push({
      id: 'capitulo-99',
      number: 99,
      menuTitle: 'Exercícios',
      title: 'Exercícios de consolidação — Backend e APIs',
      objective: 'Consolidar o percurso completo reconhecendo, aplicando, integrando e transferindo decisões de backend antes de consultar as respostas.',
      content: `
        <div class="hero-box"><h3>Resolva antes de conferir</h3><p>Os exercícios seguem o percurso do módulo. Primeiro reconheça conceitos; depois aplique regras; por fim integre e transfira para situações novas.</p></div>
        <div class="concept-box"><strong>Modo MbB:</strong> entender → prever → resolver → conferir → explicar. Uma resposta correta sem explicação ainda não prova que o raciocínio foi consolidado.</div>

        <h3>Nível 1 — Antes da API</h3>
        <div class="task-box"><strong>1.</strong> Um aplicativo de entregas mostra preços desatualizados porque cada celular guarda sua própria lista. Explique qual necessidade de arquitetura apareceu.</div>
        <div class="task-box"><strong>2.</strong> Em <code class="inline-code">GET /produtos/8</code>, identifique método, caminho, possível recurso e intenção.</div>
        <div class="task-box"><strong>3.</strong> Diferencie cliente, frontend, servidor e backend usando um exemplo que não seja Água & Gás.</div>
        <div class="task-box"><strong>4.</strong> Explique por que API é conceito mais amplo que Web API.</div>
        <div class="task-box"><strong>5.</strong> Um endpoint devolveu 404. O que isso comunica ao cliente e por que isso é melhor do que retornar 200 com uma mensagem de erro qualquer?</div>
        <details class="note-box"><summary><strong>Conferir Nível 1</strong></summary><p>Procure nas respostas: fonte central de dados e regras; GET + rota/recurso; papéis separados de interface; API como contrato de software e Web API usando tecnologias Web; status HTTP coerente como parte do contrato.</p></details>

        <h3>Nível 2 — Primeira API</h3>
        <div class="task-box"><strong>6.</strong> Quando usar path parameter e quando usar query parameter? Dê um exemplo de cada.</div>
        <div class="task-box"><strong>7.</strong> Explique por que <code class="inline-code">produto_id: int</code> ajuda FastAPI e o contrato da API.</div>
        <div class="task-box"><strong>8.</strong> <code class="inline-code">quantidade=-3</code> tem tipo inteiro correto. Por que ainda deve ser rejeitada?</div>
        <div class="task-box"><strong>9.</strong> Diferencie validação estrutural de regra de negócio usando <code class="inline-code">produto_id=999</code>.</div>
        <div class="task-box"><strong>10.</strong> Projete o corpo JSON mínimo de um POST para criar uma reserva de sala com solicitante, data e quantidade de pessoas.</div>
        <details class="note-box"><summary><strong>Conferir Nível 2</strong></summary><p>Path identifica recurso; query filtra/ajusta consulta; type hint participa de validação/documentação; tipo correto não garante valor válido; existência do produto exige consulta ao estado do sistema; o JSON deve representar apenas os dados que o cliente pode fornecer.</p></details>

        <h3>Nível 3 — Regras reais</h3>
        <div class="task-box"><strong>11.</strong> Estoque 2, pedido 3. Descreva a ordem correta entre validar, decidir e alterar.</div>
        <div class="task-box"><strong>12.</strong> Um pedido tem três itens; o terceiro é inválido. Por que baixar os dois primeiros antes de validar o terceiro é perigoso?</div>
        <div class="task-box"><strong>13.</strong> Por que um pedido precisa guardar o preço praticado em vez de consultar sempre o preço atual do produto?</div>
        <div class="task-box"><strong>14.</strong> Diferencie produto desativado de produto com estoque zero.</div>
        <div class="task-box"><strong>15.</strong> Dois clientes leem estoque 1 ao mesmo tempo. Que problema aparece e por que uma simples lista Python não oferece garantias profissionais?</div>
        <details class="note-box"><summary><strong>Conferir Nível 3</strong></summary><p>Valide antes de alterar; operações compostas precisam permanecer coerentes; histórico deve preservar o fato ocorrido; disponibilidade comercial e quantidade física são regras distintas; concorrência exige mecanismos de consistência/transação.</p></details>

        <h3>Nível 4 — Banco de dados</h3>
        <div class="task-box"><strong>16.</strong> O que muda quando <code class="inline-code">pedidos=[]</code> vira persistência em banco?</div>
        <div class="task-box"><strong>17.</strong> Diferencie modelo Pydantic e modelo ORM.</div>
        <div class="task-box"><strong>18.</strong> Explique Engine, Session e commit sem recorrer apenas à tradução dos nomes.</div>
        <div class="task-box"><strong>19.</strong> Por que <code class="inline-code">create_all()</code> não substitui migrações?</div>
        <div class="task-box"><strong>20.</strong> Uma operação baixa estoque e cria pedido. A criação falha depois da baixa. Qual propriedade esperamos da transação?</div>
        <details class="note-box"><summary><strong>Conferir Nível 4</strong></summary><p>Os dados sobrevivem ao processo; Pydantic modela contrato HTTP e ORM modela persistência; Engine fornece infraestrutura e Session coordena unidade de trabalho; migração representa evolução do esquema; falha deve permitir rollback da operação inteira.</p></details>

        <h3>Nível 5 — Segurança</h3>
        <div class="task-box"><strong>21.</strong> Por que não devemos criptografar senhas apenas para descriptografá-las no login?</div>
        <div class="task-box"><strong>22.</strong> Diferencie autenticação e autorização.</div>
        <div class="task-box"><strong>23.</strong> Explique por que um JWT assinado pode ser lido e ainda assim ser útil.</div>
        <div class="task-box"><strong>24.</strong> Sem token, usuário autenticado sem permissão e administrador autorizado: associe cada cenário a 401, 403 ou sucesso.</div>
        <div class="task-box"><strong>25.</strong> Um usuário foi desativado depois de receber um JWT ainda não expirado. Por que consultar o banco durante a resolução do usuário atual pode ser importante?</div>
        <details class="note-box"><summary><strong>Conferir Nível 5</strong></summary><p>Senha deve ser verificada por hash apropriado; autenticação identifica e autorização decide permissões; assinatura protege integridade/autenticidade, não sigilo do payload; 401 sem credencial válida, 403 sem permissão, sucesso quando autorizado; estado atual da conta pode mudar depois da emissão do token.</p></details>

        <h3>Nível 6 — Testes, integração e transferência</h3>
        <div class="task-box"><strong>26.</strong> Por que um teste não deve criar dados no banco de desenvolvimento?</div>
        <div class="task-box"><strong>27.</strong> Explique o papel de uma fixture e por que testes não devem depender da ordem de execução.</div>
        <div class="task-box"><strong>28.</strong> Um frontend em <code class="inline-code">http://localhost:5500</code> chama uma API em outra origem e o navegador bloqueia. Qual problema precisa ser tratado e onde?</div>
        <div class="task-box"><strong>29.</strong> Projete três testes para uma API de biblioteca: empréstimo permitido, livro indisponível e usuário sem autorização.</div>
        <div class="task-box"><strong>30.</strong> Uma API funciona em 127.0.0.1. Liste pelo menos cinco preocupações adicionais antes de disponibilizá-la externamente.</div>
        <details class="note-box"><summary><strong>Conferir Nível 6</strong></summary><p>Testes precisam isolamento e previsibilidade; fixture prepara/limpa cenário; CORS é política do servidor para origens do navegador; bons testes cobrem sucesso e falhas esperadas; implantação envolve configuração, segredos, HTTPS, banco/migração, CORS, logs, saúde, atualização e recuperação.</p></details>

        <div class="task-box"><h3>Desafio final</h3><p>Escolha um domínio que não apareça neste módulo e descreva: recursos, cinco endpoints, duas regras de negócio, uma relação de banco, dois papéis de usuário e quatro testes. Se suas decisões puderem ser justificadas pela necessidade do problema, você transferiu o percurso.</p></div>
        <div class="essence"><strong>Essência</strong>O objetivo não é decorar FastAPI. É saber transformar uma necessidade em contrato, regra, persistência, proteção e evidência de que o sistema funciona.</div>`
    });
  }
})();
