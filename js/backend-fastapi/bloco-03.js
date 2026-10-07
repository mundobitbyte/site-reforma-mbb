window.backendFastapiBlocks = window.backendFastapiBlocks || [];

window.backendFastapiBlocks.push({
  id: 'bloco-3',
  menuTitle: '3. Regras reais',
  title: 'Bloco 3 — Regras do mundo real',
  lessons: [
    {
      id: 'capitulo-13',
      number: 13,
      menuTitle: 'Produtos diferentes',
      title: 'Nem todo produto se comporta do mesmo jeito',
      objective: 'Fazer o modelo evoluir a partir de produtos retornáveis, disponibilidade e regras que dependem do contexto do negócio.',
      content: `
        <div class="hero-box"><h3>Nosso catálogo parece simples. Mas não é.</h3><p>Uma bomba elétrica é uma venda comum. Água de 20 L e Botijão P13 podem envolver recipientes retornáveis. O backend precisa saber quando aplicar regras diferentes.</p></div>

        <h3>A categoria não resolve tudo</h3>
        <p><code class="inline-code">agua</code>, <code class="inline-code">gas</code> e <code class="inline-code">acessorios</code> ajudam a organizar o catálogo, mas não dizem se uma operação envolve retorno de vasilhame. Precisamos representar características do produto.</p>
        <pre class="code-block">produtos = [
    {
        "id": 1,
        "nome": "Água mineral 20 L",
        "preco": 18.00,
        "categoria": "agua",
        "retornavel": True,
        "ativo": True
    },
    {
        "id": 2,
        "nome": "Botijão P13",
        "preco": 115.00,
        "categoria": "gas",
        "retornavel": True,
        "ativo": True
    },
    {
        "id": 3,
        "nome": "Bomba elétrica para galão",
        "preco": 35.00,
        "categoria": "acessorios",
        "retornavel": False,
        "ativo": True
    }
]</pre>

        <h3>Booleanos representam características</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>retornavel = True</strong>O produto participa de uma operação em que o recipiente pode retornar.</div>
          <div class="mini-card"><strong>ativo = True</strong>O produto está liberado para novas vendas.</div>
        </div>

        <h3>A operação também possui informação própria</h3>
        <p>Enquanto nosso pedido ainda possui um único produto, podemos acrescentar:</p>
        <pre class="code-block">class PedidoEntrada(BaseModel):
    cliente: str = Field(min_length=2)
    produto_id: int = Field(gt=0)
    quantidade: int = Field(gt=0)
    endereco: str = Field(min_length=5)
    entrega_vasilhame: bool = False
    observacao: str | None = None</pre>
        <p>Isso permite distinguir uma compra com ou sem devolução do recipiente.</p>

        <h3>Regra estrutural e regra de negócio</h3>
        <p>Pydantic sabe validar se <code class="inline-code">entrega_vasilhame</code> é booleano. Mas só o backend, depois de localizar o produto, sabe se essa informação é coerente.</p>
        <pre class="code-block">if not produto["retornavel"] and pedido.entrega_vasilhame:
    raise HTTPException(
        status_code=400,
        detail="Este produto não utiliza vasilhame retornável"
    )</pre>

        <h3>Produto inativo não é produto apagado</h3>
        <p>Um produto pode continuar cadastrado por causa do histórico e, mesmo assim, não aceitar novas vendas:</p>
        <pre class="code-block">if not produto["ativo"]:
    raise HTTPException(
        status_code=400,
        detail="Produto indisponível para venda"
    )</pre>
        <div class="concept-box"><strong>Excluir e desativar são decisões diferentes.</strong> Excluir remove o registro; desativar preserva o cadastro e impede seu uso atual.</div>

        <h3>Backend concentra a regra</h3>
        <div class="flow">APP / SITE / OUTRO CLIENTE
        ↓
       API
        ↓
     BACKEND
        ↓
  MESMAS REGRAS</div>
        <p>Esconder opções no frontend melhora a experiência, mas a regra central precisa continuar protegida no servidor.</p>

        <div class="task-box"><strong>Preveja:</strong> uma bomba elétrica com <code class="inline-code">entrega_vasilhame=true</code> deve ser aceita? E um produto com <code class="inline-code">ativo=false</code>?</div>
        <div class="essence"><strong>Essência</strong>À medida que o sistema se aproxima do mundo real, produtos deixam de ser apenas nome e preço. Características como retornável e ativo passam a orientar decisões do backend.</div>`
    },
    {
      id: 'capitulo-14',
      number: 14,
      menuTitle: 'Estoque',
      title: 'E se só restar uma unidade?',
      objective: 'Transformar estoque em uma regra de decisão, perceber os efeitos de uma operação e introduzir o problema da concorrência sem antecipar banco de dados.',
      content: `
        <div class="hero-box"><h3>O estoque deixa de ser apenas informação</h3><p>Dois pedidos podem estar corretos e, ainda assim, não haver unidades para atender aos dois. O backend precisa proteger aquilo que promete ao cliente.</p></div>

        <h3>Acrescentando estoque</h3>
        <pre class="code-block">{
    "id": 2,
    "nome": "Botijão P13",
    "preco": 115.00,
    "categoria": "gas",
    "retornavel": True,
    "ativo": True,
    "estoque": 8
}</pre>

        <h3>Estoque participa da decisão</h3>
        <pre class="code-block">if pedido.quantidade > produto["estoque"]:
    raise HTTPException(
        status_code=400,
        detail="Estoque insuficiente"
    )</pre>
        <p>A regra básica é:</p>
        <div class="flow">quantidade solicitada <= estoque disponível</div>

        <h3>Validar antes de alterar</h3>
        <p>Se a operação for válida, o estoque também precisa mudar:</p>
        <pre class="code-block">produto["estoque"] -= pedido.quantidade</pre>
        <p>Mas a ordem importa:</p>
        <div class="flow">VALIDAR
↓
DECIDIR
↓
ALTERAR</div>
        <p>Uma requisição rejeitada não deveria deixar o estado do sistema parcialmente modificado.</p>

        <h3>Ativo e estoque são regras diferentes</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>ativo = True, estoque = 0</strong>O produto faz parte do catálogo, mas está temporariamente sem unidades disponíveis.</div>
          <div class="mini-card"><strong>ativo = False, estoque = 10</strong>Existem unidades, porém a empresa decidiu não oferecer o produto neste momento.</div>
        </div>

        <h3>Estoque físico e disponível</h3>
        <p>Se um pedido já foi aceito, as unidades podem ainda estar fisicamente na loja, mas não deveriam ser prometidas a outro cliente. Nesta etapa, simplificaremos: pedido aceito já reduz o estoque disponível.</p>

        <h3>E se o pedido for cancelado?</h3>
        <p>Se o estoque foi reduzido e depois o pedido é cancelado, provavelmente as unidades precisarão voltar. Guardaremos esse problema até modelarmos o ciclo de vida do pedido.</p>

        <h3>Dois clientes e a última unidade</h3>
        <div class="flow">Estoque = 1

Cliente A lê → 1
Cliente B lê → 1

Cliente A verifica → pode comprar
Cliente B verifica → pode comprar

Cliente A reduz → 0
Cliente B reduz → -1</div>
        <p>Quando operações simultâneas podem interferir umas nas outras, temos um problema de <strong>concorrência</strong>. Nossa lista Python é suficiente para aprender a regra, mas não resolve profissionalmente concorrência e consistência. Banco de dados e transações aparecerão quando essa necessidade puder ser tratada adequadamente.</p>

        <h3>Nosso fluxo fica mais legível</h3>
        <pre class="code-block">produto = encontrar_produto(pedido.produto_id)

validar_produto_para_venda(produto, pedido)
verificar_estoque(produto, pedido.quantidade)
baixar_estoque(produto, pedido.quantidade)
registrar_pedido(...)</pre>
        <p>Separar responsabilidades começa a fazer sentido quando uma função acumula regras demais.</p>

        <div class="task-box"><strong>Preveja:</strong> estoque 3, pedido 4. A requisição deve ser rejeitada e o estoque deve permanecer 3.</div>
        <div class="essence"><strong>Essência</strong>Estoque não é apenas um número exibido. Ele participa da decisão, precisa ser atualizado de forma coerente e revela por que operações simultâneas exigirão mecanismos mais seguros.</div>`
    },
    {
      id: 'capitulo-15',
      number: 15,
      menuTitle: 'Vários itens',
      title: 'Um pedido pode ter vários itens',
      objective: 'Evoluir o pedido para uma composição de itens, usar modelos aninhados e validar toda a operação antes de alterar estoques.',
      content: `
        <div class="hero-box"><h3>Nosso modelo ficou pequeno demais</h3><p>Um cliente pode pedir 1 botijão, 2 águas e 1 bomba elétrica. <code class="inline-code">produto_id</code> e <code class="inline-code">quantidade</code> não podem mais pertencer ao pedido inteiro.</p></div>

        <h3>O pedido possui itens</h3>
        <div class="flow">PEDIDO
│
├── ITEM → produto 2, quantidade 1
├── ITEM → produto 1, quantidade 2
└── ITEM → produto 3, quantidade 1</div>

        <h3>Corrigindo onde fica o vasilhame</h3>
        <p>Quando havia um único produto, <code class="inline-code">entrega_vasilhame</code> estava no pedido. Agora percebemos que essa informação pertence ao item retornável, não à compra inteira.</p>
        <pre class="code-block">class ItemPedidoEntrada(BaseModel):
    produto_id: int = Field(gt=0)
    quantidade: int = Field(gt=0)
    entrega_vasilhame: bool = False


class PedidoEntrada(BaseModel):
    cliente: str = Field(min_length=2)
    endereco: str = Field(min_length=5)
    itens: list[ItemPedidoEntrada] = Field(min_length=1)
    observacao: str | None = None</pre>
        <p>Um modelo Pydantic pode possuir outro modelo como tipo de campo. FastAPI valida e documenta também essa estrutura aninhada.</p>

        <h3>O JSON evolui</h3>
        <pre class="code-block">{
  "cliente": "Ana Martins",
  "endereco": "Rua das Flores, 120",
  "itens": [
    {"produto_id": 2, "quantidade": 1, "entrega_vasilhame": true},
    {"produto_id": 1, "quantidade": 2, "entrega_vasilhame": true},
    {"produto_id": 3, "quantidade": 1, "entrega_vasilhame": false}
  ]
}</pre>

        <h3>Validar cada item</h3>
        <pre class="code-block">itens_validados = []

for item in pedido.itens:
    produto = encontrar_produto(item.produto_id)

    if produto is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    if not produto["ativo"]:
        raise HTTPException(status_code=400, detail="Produto indisponível")

    if not produto["retornavel"] and item.entrega_vasilhame:
        raise HTTPException(status_code=400, detail="Produto não retornável")

    if item.quantidade > produto["estoque"]:
        raise HTTPException(status_code=400, detail="Estoque insuficiente")

    itens_validados.append((produto, item))</pre>

        <h3>Primeiro todos, depois qualquer alteração</h3>
        <p>Se baixarmos o estoque do primeiro item e só depois descobrirmos que o terceiro não pode ser atendido, o pedido será rejeitado deixando uma alteração indevida. Por isso:</p>
        <div class="flow">VALIDAR TODOS
↓
todos são possíveis?
↓
SIM
↓
ALTERAR ESTOQUES
↓
CRIAR PEDIDO</div>
        <pre class="code-block">for produto, item in itens_validados:
    produto["estoque"] -= item.quantidade</pre>

        <h3>Produto repetido</h3>
        <p>O mesmo produto poderia aparecer duas vezes na lista. Nesta etapa adotaremos uma regra simples: cada produto aparece uma única vez por pedido. Depois, se houver necessidade, poderemos agrupar quantidades ou criar outra estratégia.</p>

        <div class="concept-box"><strong>Uma necessidade importante apareceu:</strong> quando várias alterações fazem parte da mesma operação, queremos que todas permaneçam coerentes. Essa necessidade ajudará a entender transações no bloco de banco de dados.</div>
        <div class="essence"><strong>Essência</strong>Pedido e item têm responsabilidades diferentes. Modelos aninhados representam essa composição, e operações com vários itens devem ser validadas por inteiro antes de modificar o estado.</div>`
    },
    {
      id: 'capitulo-16',
      number: 16,
      menuTitle: 'Preço histórico',
      title: 'O preço de ontem não pode mudar hoje',
      objective: 'Distinguir estado atual e histórico, registrando no item o preço praticado no momento da venda.',
      content: `
        <div class="hero-box"><h3>O catálogo muda. O histórico não deveria mudar junto.</h3><p>Se o Botijão P13 custa R$ 115 hoje e R$ 120 amanhã, um pedido feito hoje precisa continuar registrando R$ 115.</p></div>

        <h3>Cadastro e histórico respondem perguntas diferentes</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Produto</strong>Qual é a situação atual do produto?</div>
          <div class="mini-card"><strong>Pedido</strong>O que aconteceu naquela operação?</div>
        </div>

        <h3>O item registra o preço praticado</h3>
        <p>O cliente informa produto e quantidade. O backend localiza o preço oficial e registra uma fotografia daquela venda:</p>
        <pre class="code-block">item_registrado = {
    "produto_id": produto["id"],
    "quantidade": item.quantidade,
    "preco_unitario": produto["preco"],
    "entrega_vasilhame": item.entrega_vasilhame
}</pre>
        <p><strong>O cliente não escolhe <code class="inline-code">preco_unitario</code>.</strong> Caso contrário, poderia tentar enviar um valor diferente do praticado pelo sistema.</p>

        <h3>Subtotal e total</h3>
        <pre class="code-block">itens_registrados = []
total_pedido = 0

for produto, item in itens_validados:
    subtotal = item.quantidade * produto["preco"]

    itens_registrados.append({
        "produto_id": produto["id"],
        "quantidade": item.quantidade,
        "preco_unitario": produto["preco"],
        "subtotal": subtotal,
        "entrega_vasilhame": item.entrega_vasilhame
    })

    total_pedido += subtotal</pre>

        <h3>Dados de origem e dados derivados</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Origem</strong>Quantidade e preço unitário praticado.</div>
          <div class="mini-card"><strong>Derivados</strong>Subtotal e total podem ser calculados a partir dos dados de origem.</div>
        </div>
        <p>Mais adiante decidiremos o que vale persistir e o que pode ser recalculado.</p>

        <h3>Não duplique tudo sem necessidade</h3>
        <p>Preço histórico precisa ser preservado. Isso não significa copiar automaticamente categoria, estoque, ativo e todos os outros campos do produto para o pedido. Cada duplicação deve responder a uma necessidade histórica concreta.</p>

        <h3>Um cuidado com dinheiro</h3>
        <p>Nesta etapa usamos <code class="inline-code">float</code> para manter o foco no fluxo. Sistemas financeiros reais exigem maior cuidado com representação decimal; em Python, <code class="inline-code">Decimal</code> é uma alternativa apropriada quando precisão decimal é necessária.</p>

        <div class="flow">PRODUTO
estado atual

PEDIDO
fotografia da operação</div>
        <div class="essence"><strong>Essência</strong>O catálogo pode mudar; o histórico da venda não. O item precisa preservar o preço praticado no momento em que o pedido foi aceito.</div>`
    },
    {
      id: 'capitulo-17',
      number: 17,
      menuTitle: 'Status do pedido',
      title: 'Em que situação o pedido está agora?',
      objective: 'Representar o ciclo de vida do pedido, controlar transições de estado e relacionar cancelamento com seus efeitos no estoque.',
      content: `
        <div class="hero-box"><h3>Criar o pedido não encerra o processo</h3><p>Recebido, confirmado, em separação, saiu para entrega, entregue ou cancelado: o pedido continua existindo enquanto atravessa etapas do negócio.</p></div>

        <h3>Estados controlados</h3>
        <pre class="code-block">from enum import Enum


class StatusPedido(str, Enum):
    RECEBIDO = "recebido"
    CONFIRMADO = "confirmado"
    EM_SEPARACAO = "em_separacao"
    SAIU_PARA_ENTREGA = "saiu_para_entrega"
    ENTREGUE = "entregue"
    CANCELADO = "cancelado"</pre>
        <p>Usar um conjunto conhecido de valores evita variações como <code class="inline-code">novo</code>, <code class="inline-code">Pedido recebido</code> e <code class="inline-code">aguardando</code> para representar a mesma situação.</p>

        <h3>O servidor define o estado inicial</h3>
        <pre class="code-block">"status": StatusPedido.RECEBIDO</pre>
        <p>O cliente não deveria criar um pedido já marcado como entregue.</p>

        <h3>Estado e transição não são a mesma coisa</h3>
        <div class="flow">RECEBIDO
↓ confirmar
CONFIRMADO
↓ separar
EM SEPARAÇÃO
↓ despachar
SAIU PARA ENTREGA
↓ entregar
ENTREGUE</div>
        <p>Também podemos permitir cancelamento apenas a partir de alguns estados.</p>

        <h3>Transições permitidas</h3>
        <pre class="code-block">transicoes_permitidas = {
    StatusPedido.RECEBIDO: [
        StatusPedido.CONFIRMADO,
        StatusPedido.CANCELADO
    ],
    StatusPedido.CONFIRMADO: [
        StatusPedido.EM_SEPARACAO,
        StatusPedido.CANCELADO
    ],
    StatusPedido.EM_SEPARACAO: [
        StatusPedido.SAIU_PARA_ENTREGA,
        StatusPedido.CANCELADO
    ],
    StatusPedido.SAIU_PARA_ENTREGA: [StatusPedido.ENTREGUE],
    StatusPedido.ENTREGUE: [],
    StatusPedido.CANCELADO: []
}</pre>

        <h3>Endpoint específico para a mudança</h3>
        <pre class="code-block">class AtualizacaoStatusPedido(BaseModel):
    status: StatusPedido


@app.patch("/pedidos/{pedido_id}/status")
def atualizar_status_pedido(
    pedido_id: int,
    atualizacao: AtualizacaoStatusPedido
):
    pedido = encontrar_pedido(pedido_id)

    if pedido is None:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")

    status_atual = pedido["status"]
    novo_status = atualizacao.status

    if novo_status not in transicoes_permitidas[status_atual]:
        raise HTTPException(
            status_code=400,
            detail="Transição de status não permitida"
        )

    pedido["status"] = novo_status
    return pedido</pre>

        <h3>Cancelar pode produzir efeitos</h3>
        <p>Mudar status não é necessariamente trocar uma palavra. Se o estoque foi reduzido quando o pedido nasceu, cancelá-lo pode exigir devolver as unidades:</p>
        <pre class="code-block">def devolver_estoque(pedido):
    for item in pedido["itens"]:
        produto = encontrar_produto(item["produto_id"])
        if produto is not None:
            produto["estoque"] += item["quantidade"]</pre>
        <p>As próprias transições impedem cancelar duas vezes e devolver estoque em duplicidade.</p>

        <h3>Estado atual não é histórico completo</h3>
        <p><code class="inline-code">status = entregue</code> informa a situação atual. Um histórico de estados poderia registrar quando cada mudança ocorreu, quem a realizou e quanto tempo o pedido permaneceu em cada etapa. Isso fica para quando existir necessidade de auditoria e indicadores.</p>

        <div class="essence"><strong>Essência</strong>O pedido possui um ciclo de vida. O backend precisa controlar estados e transições, porque uma mudança pode ter consequências em outras partes do sistema.</div>`
    },
    {
      id: 'capitulo-18',
      number: 18,
      menuTitle: 'Quem pode fazer?',
      title: 'Quem pode executar cada ação?',
      objective: 'Identificar papéis e permissões do negócio, distinguir autenticação de autorização e preparar a segurança sem antecipar login e JWT.',
      content: `
        <div class="hero-box"><h3>A rota existe. Isso significa que qualquer pessoa pode usá-la?</h3><p>Nossa API já consegue criar pedidos, alterar produtos, mudar status e excluir registros. Em um sistema real, permitir que qualquer cliente execute qualquer operação seria um problema sério.</p></div>

        <h3>Quatro pessoas, responsabilidades diferentes</h3>
        <p>Na Água, Gás e Utilidades podemos imaginar, por enquanto, quatro papéis:</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>Cliente</strong>Faz pedidos, acompanha os próprios pedidos e pode solicitar cancelamento quando a regra permitir.</div>
          <div class="mini-card"><strong>Atendente</strong>Registra e acompanha pedidos dos clientes e executa etapas operacionais definidas pela empresa.</div>
          <div class="mini-card"><strong>Entregador</strong>Acompanha entregas sob sua responsabilidade e registra acontecimentos da entrega.</div>
          <div class="mini-card"><strong>Administrador</strong>Gerencia catálogo, preços, estoque e configurações que exigem maior privilégio.</div>
        </div>
        <p>Esses papéis são uma proposta para nosso cenário, não uma regra universal. Outra empresa poderia dividir responsabilidades de outra forma.</p>

        <h3>Uma ação precisa combinar com quem a executa</h3>
        <div class="term-grid">
          <div class="head">Ação</div><div class="head">Possível responsável</div>
          <div>Criar pedido próprio</div><div>Cliente</div>
          <div>Confirmar pedido</div><div>Atendente</div>
          <div>Marcar entrega concluída</div><div>Entregador / regra da empresa</div>
          <div>Alterar preço de produto</div><div>Administrador</div>
          <div>Desativar produto</div><div>Administrador</div>
        </div>

        <h3>Esconder botão não é segurança</h3>
        <p>O aplicativo do cliente pode não mostrar um botão para alterar preço. Isso melhora a interface, mas alguém ainda poderia tentar chamar diretamente:</p>
        <pre class="code-block">PATCH /produtos/2</pre>
        <p>Se a API não verificar permissões, a regra não está protegida.</p>
        <div class="flow">FRONTEND
ajuda a usar corretamente

BACKEND
precisa impedir uso indevido</div>

        <h3>Primeira pergunta: quem é você?</h3>
        <p>Antes de decidir o que alguém pode fazer, o sistema precisa descobrir quem está fazendo a requisição.</p>
        <p>Essa etapa recebe o nome de <strong>autenticação</strong>.</p>
        <div class="concept-box"><strong>Autenticação:</strong> verificar a identidade apresentada pelo usuário ou sistema.</div>

        <h3>Segunda pergunta: o que você pode fazer?</h3>
        <p>Depois de identificar o usuário, precisamos verificar suas permissões.</p>
        <div class="concept-box"><strong>Autorização:</strong> decidir se aquela identidade pode executar determinada ação.</div>
        <div class="flow">QUEM É VOCÊ?
↓
autenticação
↓
O QUE VOCÊ PODE FAZER?
↓
autorização</div>

        <h3>Papel não é a única regra de autorização</h3>
        <p>Imagine dois clientes:</p>
        <pre class="code-block">Cliente Ana → Pedido 15
Cliente Carlos → Pedido 22</pre>
        <p>Mesmo que ambos possuam o papel <code class="inline-code">cliente</code>, Ana não deveria consultar ou cancelar automaticamente o pedido de Carlos.</p>
        <p>Além do papel, a autorização pode depender da relação entre usuário e recurso:</p>
        <div class="flow">é cliente?
↓
este pedido pertence a ele?
↓
o estado atual permite a ação?
↓
a operação pode continuar</div>

        <h3>Menor privilégio</h3>
        <p>Uma boa regra é conceder somente as permissões necessárias para o trabalho daquela pessoa. Um entregador não precisa alterar preços apenas porque utiliza o mesmo sistema.</p>
        <div class="note-box"><strong>Administrador não deve ser o padrão para tudo.</strong> Quanto maior o privilégio, maior o impacto possível de erro ou uso indevido.</div>

        <h3>Por que não vamos implementar login agora?</h3>
        <p>Porque ainda não possuímos usuários persistentes. Nossos produtos e pedidos continuam em listas Python e desaparecem quando o servidor reinicia. Implementar tokens agora criaria uma camada de segurança sobre dados que ainda nem possuem persistência adequada.</p>
        <p>Primeiro identificamos a necessidade e as responsabilidades. Depois construiremos a infraestrutura necessária.</p>

        <h3>O que nossa API sabe hoje?</h3>
        <div class="flow">produto existe?
↓
está ativo?
↓
há estoque?
↓
itens são coerentes?
↓
preço histórico está preservado?
↓
transição de status é permitida?
↓
quem deveria poder executar a ação?</div>
        <p>A última pergunta já foi modelada conceitualmente, mas ainda não está tecnicamente protegida.</p>

        <h3>Autenticação e autorização virão depois</h3>
        <p>Quando chegarmos à segurança, teremos uma necessidade concreta para compreender usuários, senha protegida por hash, identidade entre requisições e permissões. FastAPI oferece mecanismos para integrar segurança ao próprio contrato OpenAPI, mas não precisamos antecipá-los antes da base estar pronta.</p>

        <h3>O limite da nossa aplicação ficou evidente</h3>
        <p>Tudo que construímos ainda depende de:</p>
        <pre class="code-block">produtos = [...]
pedidos = [...]</pre>
        <p>Se o servidor reiniciar, alterações feitas durante a execução desaparecem. Não há relacionamentos persistentes, transações reais nem usuários armazenados.</p>

        <div class="bridge-box"><strong>Bloco 3 concluído.</strong> O backend deixou de ser um conjunto de rotas e passou a representar regras reais do negócio. Agora existe uma razão concreta para introduzir persistência.</div>

        <h3>O que construímos neste bloco</h3>
        <div class="flow">produtos com comportamento
↓
estoque como regra
↓
pedidos com vários itens
↓
preço praticado e histórico
↓
estados e transições
↓
papéis e permissões
↓
NECESSIDADE DE PERSISTÊNCIA</div>

        <div class="essence"><strong>Essência</strong>Autenticação responde “quem é você?”. Autorização responde “o que você pode fazer?”. Antes de implementar segurança, identificamos papéis, recursos e regras. O próximo bloco resolverá outra fragilidade fundamental: nossos dados precisam sobreviver ao encerramento do programa.</div>`
    }
  ]
});
