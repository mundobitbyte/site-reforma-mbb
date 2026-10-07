window.backendFastapiBlocks = window.backendFastapiBlocks || [];

window.backendFastapiBlocks.push({
  id: 'bloco-4',
  menuTitle: '4. Banco de dados',
  title: 'Bloco 4 — Banco de dados',
  lessons: [
    {
      id: 'capitulo-19',
      number: 19,
      menuTitle: 'Persistência',
      title: 'Os dados precisam sobreviver',
      objective: 'Entender por que listas em memória deixam de servir e por que o projeto passa a precisar de persistência, banco relacional, SQLite e SQLAlchemy.',
      content: `
        <div class="hero-box"><h3>Nosso sistema funciona. Até desligarmos o servidor.</h3><p>Produtos, estoques e pedidos ainda vivem em listas Python. Se o processo termina, as alterações desaparecem. O próximo passo não nasce de uma tecnologia: nasce da necessidade de fazer os dados sobreviverem.</p></div>
        <h3>Memória não é persistência</h3>
        <pre class="code-block">pedidos = []</pre>
        <p>Enquanto o programa está executando, podemos adicionar e consultar dados. Quando ele encerra, aquela memória deixa de existir. Persistir significa manter a informação mesmo depois que a API para, o computador reinicia ou o código é atualizado.</p>
        <div class="flow">MEMÓRIA
↓
rápida e temporária

PERSISTÊNCIA
↓
dados sobrevivem ao programa</div>
        <h3>Poderíamos usar arquivos?</h3>
        <p>Sim. JSON ou texto já seriam formas de persistência, mas nosso problema cresceu: queremos filtrar pedidos, relacionar clientes, produtos e itens, manter integridade e executar alterações que precisam acontecer juntas. Um banco de dados passa a resolver melhor esse conjunto de necessidades.</p>
        <h3>Banco e backend não são a mesma coisa</h3>
        <div class="flow">CLIENTE
↓ HTTP
FASTAPI
↓
REGRAS DO NEGÓCIO
↓
BANCO DE DADOS</div>
        <p>O banco armazena e protege dados. O backend continua validando, decidindo e coordenando operações. Ter estoque 3 armazenado não faz o banco conhecer sozinho a regra de rejeitar uma venda de 5 unidades.</p>
        <h3>Banco relacional</h3>
        <p>Nosso domínio já contém relações naturais: Cliente → Pedidos, Pedido → Itens e Item → Produto. Por isso começaremos com um banco relacional, usando tabelas, linhas, colunas, chaves e relacionamentos.</p>
        <h3>A tabela lembra nossos dicionários</h3>
        <pre class="code-block">{
    "id": 2,
    "nome": "Botijão P13",
    "preco": 115.00,
    "estoque": 5,
    "ativo": True
}</pre>
        <p>Conceitualmente, esse dicionário poderá se tornar uma linha da tabela <code class="inline-code">produtos</code>. A ideia do dado permanece; mudam o armazenamento e as garantias.</p>
        <h3>Por que SQLite?</h3>
        <p>Começaremos com SQLite porque ele é um banco relacional real e pode ficar inteiro em um arquivo, como <code class="inline-code">agua_gas.db</code>. Não precisamos instalar e administrar um servidor de banco enquanto ainda estamos aprendendo integração, ORM, relações e transações.</p>
        <div class="note-box"><strong>SQLite não é “banco de brinquedo”.</strong> Ele resolve uma classe de problemas diferente dos bancos cliente-servidor e é excelente quando simplicidade, armazenamento local e baixa concorrência de escrita são adequados.</div>
        <h3>Por que SQLAlchemy?</h3>
        <p>Usaremos SQLAlchemy para fazer a ponte entre objetos Python e tabelas relacionais.</p>
        <div class="flow">OBJETO PYTHON
↕
SQLAlchemy
↕
TABELA SQL</div>
        <p>Esse mapeamento é chamado de ORM — Object-Relational Mapping. O ORM não elimina a necessidade de entender tabelas, chaves, consultas, transações ou SQL.</p>
        <div class="essence"><strong>Essência</strong>As listas nos ensinaram as regras. Agora o próprio projeto exige persistência. Usaremos SQLite para armazenar e SQLAlchemy 2.x para mapear e consultar, sem tratar nenhuma das duas tecnologias como mágica.</div>`
    },
    {
      id: 'capitulo-20',
      number: 20,
      menuTitle: 'Primeiro banco',
      title: 'Criando nosso primeiro banco de dados',
      objective: 'Criar o Engine, a Base declarativa, o primeiro modelo ORM e a tabela produtos em um arquivo SQLite.',
      content: `
        <div class="hero-box"><h3>Agora vamos fazer no computador.</h3><p>Nosso primeiro objetivo é pequeno: criar <code class="inline-code">agua_gas.db</code>, mapear <code class="inline-code">Produto</code> e criar a tabela <code class="inline-code">produtos</code>.</p></div>
        <h3>1. Ative o ambiente</h3>
        <pre class="code-block">.venv\\Scripts\\activate</pre>
        <h3>2. Instale SQLAlchemy</h3>
        <pre class="code-block">python -m pip install sqlalchemy</pre>
        <h3>3. Crie database.py</h3>
        <pre class="code-block">from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase

DATABASE_URL = "sqlite:///./agua_gas.db"

engine = create_engine(
    DATABASE_URL,
    echo=True,
    connect_args={"check_same_thread": False}
)

class Base(DeclarativeBase):
    pass</pre>
        <p><code class="inline-code">DATABASE_URL</code> identifica o SQLite e o arquivo. O <code class="inline-code">Engine</code> concentra a infraestrutura de conexão. <code class="inline-code">echo=True</code> deixa o SQL visível durante o estudo.</p>
        <div class="note-box"><strong>Threads.</strong> FastAPI pode executar partes de uma requisição em threads diferentes. SQLAlchemy 2.x já configura SQLite em arquivo de forma compatível, mas deixamos <code class="inline-code">check_same_thread=False</code> explícito para tornar a intenção didática visível.</div>
        <h3>4. Crie models.py</h3>
        <pre class="code-block">from decimal import Decimal

from sqlalchemy import Boolean, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from database import Base

class Produto(Base):
    __tablename__ = "produtos"

    id: Mapped[int] = mapped_column(primary_key=True)
    nome: Mapped[str] = mapped_column(String(100))
    preco: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    categoria: Mapped[str] = mapped_column(String(50))
    retornavel: Mapped[bool] = mapped_column(Boolean, default=False)
    ativo: Mapped[bool] = mapped_column(Boolean, default=True)
    estoque: Mapped[int] = mapped_column(Integer, default=0)</pre>
        <div class="mini-grid"><div class="mini-card"><strong>Mapped</strong>Declara atributo mapeado.</div><div class="mini-card"><strong>mapped_column()</strong>Configura a coluna.</div><div class="mini-card"><strong>primary_key</strong>Identifica cada registro.</div><div class="mini-card"><strong>Numeric + Decimal</strong>Representam melhor dinheiro.</div></div>
        <h3>5. Crie criar_banco.py</h3>
        <pre class="code-block">from database import Base, engine
import models

Base.metadata.create_all(engine)
print("Banco e tabelas criados.")</pre>
        <p>O import de <code class="inline-code">models</code> registra as classes na metadata. <code class="inline-code">create_all()</code> cria as tabelas conhecidas que ainda não existem.</p>
        <h3>6. Execute</h3>
        <pre class="code-block">python criar_banco.py</pre>
        <p>O arquivo <code class="inline-code">agua_gas.db</code> deverá aparecer e o terminal mostrará operações como <code class="inline-code">CREATE TABLE produtos</code>.</p>
        <div class="danger-box"><strong>create_all() não é migração.</strong> Ele é ótimo para a criação inicial, mas não transforma automaticamente qualquer tabela existente quando o modelo muda.</div>
        <div class="essence"><strong>Essência</strong><code class="inline-code">database.py</code> configura a conexão; <code class="inline-code">models.py</code> descreve o mapeamento; <code class="inline-code">create_all()</code> materializa a estrutura inicial.</div>`
    },
    {
      id: 'capitulo-21',
      number: 21,
      menuTitle: 'Session e persistência',
      title: 'Gravando e consultando produtos no banco',
      objective: 'Criar uma Session por requisição, usar Depends e substituir a lista de produtos por INSERT e SELECT persistentes.',
      content: `
        <div class="hero-box"><h3>Chegou o teste decisivo.</h3><p>Vamos cadastrar um produto, reiniciar a API e confirmar que ele continua no banco. Aqui aparecem <code class="inline-code">Session</code> e <code class="inline-code">Depends</code> porque agora existe uma necessidade concreta para eles.</p></div>
        <h3>Uma Session por requisição</h3>
        <pre class="code-block">from sqlalchemy.orm import DeclarativeBase, Session

# ... engine e Base ...

def get_session():
    with Session(engine) as session:
        yield session</pre>
        <p>O Engine é a infraestrutura de conexão; a Session representa a unidade de trabalho ORM. Não criaremos uma Session global compartilhada indefinidamente.</p>
        <h3>Depends aparece porque várias rotas precisam da Session</h3>
        <pre class="code-block">from typing import Annotated
from fastapi import Depends
from sqlalchemy.orm import Session

from database import get_session

SessionDep = Annotated[
    Session,
    Depends(get_session)
]</pre>
        <h3>Modelos da API e modelo do banco são diferentes</h3>
        <pre class="code-block">class ProdutoEntrada(BaseModel):
    nome: str = Field(min_length=2)
    preco: Decimal = Field(gt=0)
    categoria: str = Field(min_length=2)
    retornavel: bool = False
    ativo: bool = True
    estoque: int = Field(default=0, ge=0)

class ProdutoSaida(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    preco: Decimal
    categoria: str
    retornavel: bool
    ativo: bool
    estoque: int</pre>
        <p>Pydantic representa o contrato HTTP. <code class="inline-code">Produto</code> representa a tabela no ORM.</p>
        <h3>POST persistente</h3>
        <pre class="code-block">@app.post("/produtos", response_model=ProdutoSaida, status_code=201)
def criar_produto(produto: ProdutoEntrada, session: SessionDep):
    novo_produto = Produto(
        nome=produto.nome,
        preco=produto.preco,
        categoria=produto.categoria,
        retornavel=produto.retornavel,
        ativo=produto.ativo,
        estoque=produto.estoque
    )

    session.add(novo_produto)
    session.commit()
    session.refresh(novo_produto)
    return novo_produto</pre>
        <div class="mini-grid"><div class="mini-card"><strong>add()</strong>Coloca o objeto na unidade de trabalho.</div><div class="mini-card"><strong>commit()</strong>Confirma a transação.</div><div class="mini-card"><strong>refresh()</strong>Recarrega estado e valores gerados.</div></div>
        <h3>GET com SQLAlchemy 2.x</h3>
        <pre class="code-block">from sqlalchemy import select

@app.get("/produtos", response_model=list[ProdutoSaida])
def listar_produtos(session: SessionDep):
    comando = select(Produto).order_by(Produto.id)
    return session.scalars(comando).all()</pre>
        <p>Nosso padrão será <code class="inline-code">select()</code> com <code class="inline-code">Session.scalars()</code> ou <code class="inline-code">Session.execute()</code>, e não <code class="inline-code">session.query()</code> como primeira abordagem.</p>
        <h3>Teste a persistência</h3>
        <div class="flow">POST /produtos
↓
SQLite grava
↓
Ctrl+C
↓
fastapi dev main.py
↓
GET /produtos
↓
MESMOS REGISTROS E IDs</div>
        <div class="essence"><strong>Essência</strong>POST produz INSERT e COMMIT; GET produz SELECT. O banco passou a ser a fonte persistente dos produtos.</div>`
    },
    {
      id: 'capitulo-22',
      number: 22,
      menuTitle: 'CRUD persistente',
      title: 'Buscando, alterando e excluindo produtos no banco',
      objective: 'Completar o CRUD persistente usando Session.get(), PATCH, filtros e Session.delete(), distinguindo capacidade técnica de regra de negócio.',
      content: `
        <div class="hero-box"><h3>O CRUD continua. A infraestrutura mudou.</h3><p>Vamos substituir as antigas buscas e alterações em dicionários por operações persistentes no SQLite.</p></div>
        <h3>Buscar pela chave primária</h3>
        <pre class="code-block">@app.get("/produtos/{produto_id}", response_model=ProdutoSaida)
def buscar_produto(produto_id: int, session: SessionDep):
    produto = session.get(Produto, produto_id)

    if produto is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    return produto</pre>
        <p><code class="inline-code">Session.get()</code> é apropriado quando já conhecemos a chave primária.</p>
        <h3>PATCH parcial</h3>
        <pre class="code-block">class ProdutoAtualizacao(BaseModel):
    nome: str | None = Field(default=None, min_length=2)
    preco: Decimal | None = Field(default=None, gt=0)
    categoria: str | None = Field(default=None, min_length=2)
    retornavel: bool | None = None
    ativo: bool | None = None
    estoque: int | None = Field(default=None, ge=0)</pre>
        <pre class="code-block">@app.patch("/produtos/{produto_id}", response_model=ProdutoSaida)
def atualizar_produto(produto_id: int, alteracoes: ProdutoAtualizacao, session: SessionDep):
    produto = session.get(Produto, produto_id)

    if produto is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    dados = alteracoes.model_dump(exclude_unset=True, exclude_none=True)

    for campo, valor in dados.items():
        setattr(produto, campo, valor)

    session.commit()
    session.refresh(produto)
    return produto</pre>
        <h3>DELETE técnico</h3>
        <pre class="code-block">@app.delete("/produtos/{produto_id}")
def excluir_produto(produto_id: int, session: SessionDep):
    produto = session.get(Produto, produto_id)

    if produto is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    session.delete(produto)
    session.commit()
    return {"mensagem": "Produto excluído"}</pre>
        <div class="danger-box"><strong>Saber excluir não significa que devemos excluir.</strong> Quando itens de pedidos passarem a referenciar produtos, a integridade relacional poderá impedir a exclusão física. Para produto histórico, <code class="inline-code">ativo=False</code> será normalmente a regra mais adequada neste projeto.</div>
        <h3>Filtro persistente</h3>
        <pre class="code-block">comando = select(Produto)

if categoria is not None:
    comando = comando.where(
        Produto.categoria == categoria
    )

comando = comando.order_by(Produto.id)</pre>
        <div class="essence"><strong>Essência</strong>CRUD descreve necessidades de manipulação dos dados. SQLAlchemy é a ferramenta que agora executa essas necessidades de forma persistente.</div>`
    },
    {
      id: 'capitulo-23',
      number: 23,
      menuTitle: 'Relacionamentos',
      title: 'Um pedido precisa conhecer seus itens',
      objective: 'Criar Pedido e ItemPedido, introduzir chave estrangeira, relacionamento e integridade referencial no SQLite.',
      content: `
        <div class="hero-box"><h3>O banco começa a ficar realmente relacional.</h3><p>Um pedido possui vários itens; cada item pertence a um pedido e referencia um produto. Agora isso será representado no próprio esquema.</p></div>
        <h3>Por que não produto1, produto2, produto3?</h3>
        <p>Uma tabela com colunas fixas para cada possível produto quebra assim que a quantidade de itens varia. Nosso domínio pede uma coleção de itens.</p>
        <div class="flow">PEDIDO 1 → N ITENS_PEDIDO
PRODUTO 1 → N ITENS_PEDIDO</div>
        <h3>Ative a integridade referencial do SQLite</h3>
        <pre class="code-block">from sqlalchemy import event

@event.listens_for(engine, "connect")
def ativar_chaves_estrangeiras(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()</pre>
        <p>Assim um item não pode referenciar silenciosamente um produto inexistente.</p>
        <h3>Modelos relacionais</h3>
        <pre class="code-block">class Pedido(Base):
    __tablename__ = "pedidos"

    id: Mapped[int] = mapped_column(primary_key=True)
    cliente: Mapped[str] = mapped_column(String(100))
    endereco: Mapped[str] = mapped_column(String(200))
    status: Mapped[str] = mapped_column(String(30), default="recebido")
    observacao: Mapped[str | None] = mapped_column(String(255), nullable=True)

    itens: Mapped[list["ItemPedido"]] = relationship(back_populates="pedido")

class ItemPedido(Base):
    __tablename__ = "itens_pedido"

    id: Mapped[int] = mapped_column(primary_key=True)
    pedido_id: Mapped[int] = mapped_column(ForeignKey("pedidos.id"))
    produto_id: Mapped[int] = mapped_column(ForeignKey("produtos.id"))
    quantidade: Mapped[int] = mapped_column(Integer)
    preco_unitario: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    entrega_vasilhame: Mapped[bool] = mapped_column(Boolean, default=False)

    pedido: Mapped["Pedido"] = relationship(back_populates="itens")
    produto: Mapped["Produto"] = relationship(back_populates="itens_pedido")</pre>
        <p>Em <code class="inline-code">Produto</code>, acrescentamos <code class="inline-code">itens_pedido = relationship(back_populates="produto")</code>.</p>
        <div class="mini-grid"><div class="mini-card"><strong>ForeignKey</strong>Cria a referência no banco.</div><div class="mini-card"><strong>relationship()</strong>Permite navegar em Python.</div></div>
        <h3>ItemPedido tem dados próprios</h3>
        <p>Ele guarda quantidade, preço praticado e informação de vasilhame. Não é apenas uma ligação técnica; é uma entidade real da operação.</p>
        <div class="note-box"><strong>Histórico.</strong> <code class="inline-code">produto.preco</code> é o preço atual; <code class="inline-code">item.preco_unitario</code> é o preço daquela venda.</div>
        <pre class="code-block">python criar_banco.py</pre>
        <p>Como as novas tabelas ainda não existem, <code class="inline-code">create_all()</code> pode criá-las sem apagar produtos.</p>
        <div class="essence"><strong>Essência</strong>Chaves estrangeiras protegem referências e <code class="inline-code">relationship()</code> transforma relações do banco em relações entre objetos.</div>`
    },
    {
      id: 'capitulo-24',
      number: 24,
      menuTitle: 'Transações',
      title: 'Criando um pedido em uma única transação',
      objective: 'Gravar pedido, itens e baixas de estoque como uma unidade atômica, usando commit, rollback e flush.',
      content: `
        <div class="hero-box"><h3>Uma requisição agora altera várias coisas.</h3><p>Criar um pedido significa criar o pedido, criar seus itens e alterar estoques. Se uma parte falhar, não podemos deixar o banco pela metade.</p></div>
        <div class="flow">TRANSAÇÃO DO PEDIDO
├── INSERT pedido
├── INSERT itens
└── UPDATE estoques

tudo certo → COMMIT
falha → ROLLBACK</div>
        <h3>Entrada com vários itens</h3>
        <pre class="code-block">class ItemPedidoEntrada(BaseModel):
    produto_id: int = Field(gt=0)
    quantidade: int = Field(gt=0)
    entrega_vasilhame: bool = False

class PedidoEntrada(BaseModel):
    cliente: str = Field(min_length=2)
    endereco: str = Field(min_length=5)
    itens: list[ItemPedidoEntrada] = Field(min_length=1)
    observacao: str | None = None</pre>
        <h3>Valide todos antes de alterar</h3>
        <pre class="code-block">produtos_validados = {}
ids_vistos = set()

for item in pedido.itens:
    if item.produto_id in ids_vistos:
        raise HTTPException(status_code=400, detail="Produto repetido no pedido")

    ids_vistos.add(item.produto_id)
    produto = session.get(Produto, item.produto_id)

    if produto is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")
    if not produto.ativo:
        raise HTTPException(status_code=409, detail="Produto indisponível para venda")
    if not produto.retornavel and item.entrega_vasilhame:
        raise HTTPException(status_code=400, detail="Este produto não utiliza vasilhame retornável")
    if item.quantidade > produto.estoque:
        raise HTTPException(status_code=409, detail=f"Estoque insuficiente para {produto.nome}")

    produtos_validados[item.produto_id] = produto</pre>
        <p>A regra de produto repetido também evita que duas linhas do mesmo produto sejam validadas separadamente contra o mesmo estoque.</p>
        <h3>Crie pedido e itens sem commits intermediários</h3>
        <pre class="code-block">novo_pedido = Pedido(
    cliente=pedido.cliente,
    endereco=pedido.endereco,
    observacao=pedido.observacao
)
session.add(novo_pedido)

for item in pedido.itens:
    produto = produtos_validados[item.produto_id]
    novo_item = ItemPedido(
        produto=produto,
        quantidade=item.quantidade,
        preco_unitario=produto.preco,
        entrega_vasilhame=item.entrega_vasilhame
    )
    novo_pedido.itens.append(novo_item)
    produto.estoque -= item.quantidade</pre>
        <h3>flush não é commit</h3>
        <p><code class="inline-code">session.flush()</code> envia as alterações dentro da transação e pode obter IDs gerados. <code class="inline-code">commit()</code> confirma; <code class="inline-code">rollback()</code> desfaz a transação ainda não confirmada.</p>
        <pre class="code-block">try:
    session.flush()
    session.commit()
except HTTPException:
    session.rollback()
    raise
except SQLAlchemyError as erro:
    session.rollback()
    raise HTTPException(status_code=500, detail="Não foi possível registrar o pedido") from erro</pre>
        <div class="danger-box"><strong>Transação não resolve sozinha toda concorrência.</strong> Ela garante que um pedido não fique parcialmente persistido. Duas requisições disputando a última unidade exigirão proteção adicional.</div>
        <div class="essence"><strong>Essência</strong>Uma operação de negócio pode envolver várias instruções SQL. Alterações relacionadas ficam juntas, com um único commit e rollback em caso de falha.</div>`
    },
    {
      id: 'capitulo-25',
      number: 25,
      menuTitle: 'Consulta completa',
      title: 'Consultando um pedido completo',
      objective: 'Carregar pedido, itens e produtos relacionados de forma planejada, usando selectinload e preservando a diferença entre dado atual e histórico.',
      content: `
        <div class="hero-box"><h3>O pedido está em várias tabelas, mas a API pode devolvê-lo como uma unidade.</h3><p>Banco e JSON possuem responsabilidades diferentes: normalizamos a persistência e montamos uma resposta conveniente para o cliente.</p></div>
        <h3>Contrato detalhado</h3>
        <pre class="code-block">class ProdutoResumo(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    nome: str

class ItemPedidoDetalhe(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    produto_id: int
    produto: ProdutoResumo
    quantidade: int
    preco_unitario: Decimal
    entrega_vasilhame: bool

class PedidoDetalhe(BaseModel):
    id: int
    cliente: str
    endereco: str
    status: str
    observacao: str | None = None
    itens: list[ItemPedidoDetalhe]
    total: Decimal</pre>
        <h3>Carregamento planejado</h3>
        <pre class="code-block">from sqlalchemy.orm import selectinload

comando = (
    select(Pedido)
    .where(Pedido.id == pedido_id)
    .options(
        selectinload(Pedido.itens)
        .selectinload(ItemPedido.produto)
    )
)

pedido = session.scalars(comando).first()</pre>
        <p>Sabemos antecipadamente que precisaremos dos itens e dos produtos. Assim evitamos depender de uma consulta improvisada a cada acesso de relacionamento.</p>
        <h3>Preço histórico no total</h3>
        <pre class="code-block">total = sum(
    (item.preco_unitario * item.quantidade for item in pedido.itens),
    start=Decimal("0.00")
)</pre>
        <div class="danger-box"><strong>Não use item.produto.preco para reconstruir a venda.</strong> Esse é o preço atual do catálogo. O histórico pertence a <code class="inline-code">item.preco_unitario</code>.</div>
        <h3>Função surge quando aparece repetição real</h3>
        <pre class="code-block">def montar_pedido_saida(pedido: Pedido):
    total = sum(
        (item.preco_unitario * item.quantidade for item in pedido.itens),
        start=Decimal("0.00")
    )
    return {
        "id": pedido.id,
        "cliente": pedido.cliente,
        "endereco": pedido.endereco,
        "status": pedido.status,
        "observacao": pedido.observacao,
        "itens": pedido.itens,
        "total": total
    }</pre>
        <h3>N + 1</h3>
        <p>Se buscarmos N pedidos e cada relacionamento disparar uma consulta separada, podemos gerar SELECTs demais. <code class="inline-code">selectinload()</code> é uma estratégia inicial útil para carregar coleções relacionadas de forma previsível.</p>
        <div class="essence"><strong>Essência</strong>Relacionamentos do banco viram relações entre objetos; o JSON pode reuni-los de acordo com o contrato da API.</div>`
    },
    {
      id: 'capitulo-26',
      number: 26,
      menuTitle: 'Status e estoque',
      title: 'Cancelar um pedido também altera o estoque',
      objective: 'Persistir transições de status e tratar cancelamento como uma operação transacional que também restaura estoques.',
      content: `
        <div class="hero-box"><h3>Status não é apenas uma palavra.</h3><p>Quando um pedido é cancelado, o estoque precisa voltar. Status e estoque fazem parte da mesma operação e precisam ser confirmados juntos.</p></div>
        <h3>Estados conhecidos</h3>
        <pre class="code-block">class StatusPedido(str, Enum):
    RECEBIDO = "recebido"
    CONFIRMADO = "confirmado"
    EM_SEPARACAO = "em_separacao"
    SAIU_PARA_ENTREGA = "saiu_para_entrega"
    ENTREGUE = "entregue"
    CANCELADO = "cancelado"</pre>
        <h3>Enum não valida o caminho</h3>
        <pre class="code-block">transicoes_permitidas = {
    StatusPedido.RECEBIDO: {StatusPedido.CONFIRMADO, StatusPedido.CANCELADO},
    StatusPedido.CONFIRMADO: {StatusPedido.EM_SEPARACAO, StatusPedido.CANCELADO},
    StatusPedido.EM_SEPARACAO: {StatusPedido.SAIU_PARA_ENTREGA, StatusPedido.CANCELADO},
    StatusPedido.SAIU_PARA_ENTREGA: {StatusPedido.ENTREGUE},
    StatusPedido.ENTREGUE: set(),
    StatusPedido.CANCELADO: set()
}</pre>
        <p>O Enum responde quais estados existem. O mapa responde quais transições fazem sentido.</p>
        <h3>Valide a transição</h3>
        <pre class="code-block">status_atual = StatusPedido(pedido.status)
novo_status = atualizacao.status

if novo_status not in transicoes_permitidas[status_atual]:
    raise HTTPException(status_code=409, detail="Transição de status não permitida")</pre>
        <h3>Cancelamento restaura estoque na mesma transação</h3>
        <pre class="code-block">try:
    if novo_status == StatusPedido.CANCELADO:
        for item in pedido.itens:
            item.produto.estoque += item.quantidade

    pedido.status = novo_status.value
    session.commit()
except SQLAlchemyError as erro:
    session.rollback()
    raise HTTPException(status_code=500, detail="Não foi possível atualizar o pedido") from erro</pre>
        <p><code class="inline-code">CANCELADO</code> é terminal no fluxo simplificado. Isso também evita devolver o estoque duas vezes.</p>
        <div class="essence"><strong>Essência</strong>Persistir processos significa persistir também seus efeitos. Cancelamento é status + restauração de estoque dentro de uma única transação.</div>`
    },
    {
      id: 'capitulo-27',
      number: 27,
      menuTitle: 'Concorrência',
      title: 'Dois clientes querem o último item',
      objective: 'Distinguir atomicidade de concorrência e proteger a baixa de estoque com UPDATE condicional executado pelo próprio banco.',
      content: `
        <div class="hero-box"><h3>Transação não significa que ninguém pode competir pelo mesmo dado.</h3><p>Se dois pedidos leem estoque 1 quase ao mesmo tempo, ambos podem acreditar que a última unidade está disponível. Precisamos proteger o momento da alteração.</p></div>
        <h3>O intervalo perigoso</h3>
        <div class="flow">LER estoque
↓
VERIFICAR
↓
outra requisição pode alterar
↓
DIMINUIR</div>
        <p>A primeira validação continua útil, mas a decisão final de baixar estoque precisa depender do valor que existe no banco naquele instante.</p>
        <h3>UPDATE condicional</h3>
        <pre class="code-block">from sqlalchemy import update

comando = (
    update(Produto)
    .where(
        Produto.id == produto_id,
        Produto.estoque >= quantidade
    )
    .values(
        estoque=Produto.estoque - quantidade
    )
)

resultado = session.execute(comando)</pre>
        <h3>Descubra se a baixa aconteceu</h3>
        <pre class="code-block">if resultado.rowcount != 1:
    raise HTTPException(
        status_code=409,
        detail="Estoque alterado por outra operação. Atualize e tente novamente."
    )</pre>
        <p>Se outra requisição consumiu a última unidade, a condição deixa de ser verdadeira e nenhuma linha é alterada.</p>
        <h3>Proteções diferentes</h3>
        <div class="mini-grid"><div class="mini-card"><strong>UPDATE condicional</strong>Protege cada baixa contra estado concorrente.</div><div class="mini-card"><strong>Transação</strong>Protege o pedido inteiro: todas as baixas ou nenhuma.</div></div>
        <h3>SQLite tem limites próprios</h3>
        <p>SQLite aceita muitos leitores, mas apenas um escritor por arquivo a cada instante. Para laboratório e aplicações pequenas isso pode ser suficiente; sob alta contenção de escrita, um banco cliente-servidor pode ser mais adequado.</p>
        <div class="danger-box"><strong>Não fingimos resolver toda concorrência.</strong> Estamos resolvendo o problema concreto de não diminuir estoque abaixo do disponível. Isolamento, bloqueios e arquiteturas de alto volume são assuntos maiores.</div>
        <div class="essence"><strong>Essência</strong>Atomicidade responde “o pedido fica inteiro?”. Concorrência pergunta “o estado ainda é o mesmo quando vou alterá-lo?”. O UPDATE condicional aproxima verificação e alteração.</div>`
    },
    {
      id: 'capitulo-28',
      number: 28,
      menuTitle: 'Migrações',
      title: 'O banco mudou. E os dados que já existem?',
      objective: 'Introduzir Alembic com uma baseline coerente para um banco já existente e evoluir o esquema sem apagar dados.',
      content: `
        <div class="hero-box"><h3>Agora não podemos mais apagar agua_gas.db para qualquer mudança.</h3><p>Nosso banco já contém dados. Quando o modelo evolui, precisamos alterar a estrutura existente de forma controlada.</p></div>
        <h3>create_all() tem um limite</h3>
        <p>Adicionar uma coluna em <code class="inline-code">models.py</code> não transforma automaticamente uma tabela já criada. Evolução incremental exige migração.</p>
        <h3>Instale e inicialize Alembic</h3>
        <pre class="code-block">python -m pip install alembic
alembic init migrations</pre>
        <p>Em <code class="inline-code">alembic.ini</code>:</p>
        <pre class="code-block">sqlalchemy.url = sqlite:///./agua_gas.db</pre>
        <p>Em <code class="inline-code">migrations/env.py</code>:</p>
        <pre class="code-block">from database import Base
import models

target_metadata = Base.metadata</pre>
        <h3>Nosso caso exige uma baseline</h3>
        <p>Adotamos Alembic depois de as tabelas já terem sido criadas por <code class="inline-code">create_all()</code>. Portanto registraremos essa estrutura como o ponto de partida.</p>
        <pre class="code-block">alembic revision -m "baseline banco atual"
alembic stamp head</pre>
        <div class="note-box"><strong>stamp não executa migrações.</strong> Ele apenas registra que o banco existente corresponde à revisão indicada. A baseline liga nosso bootstrap inicial às mudanças futuras controladas pelo Alembic.</div>
        <h3>Agora faça uma mudança real</h3>
        <pre class="code-block">telefone: Mapped[str | None] = mapped_column(
    String(20),
    nullable=True
)</pre>
        <p>Começamos aceitando NULL porque pedidos antigos não possuem telefone. Migração exige pensar também nos dados que já existem.</p>
        <h3>Gere uma revisão incremental</h3>
        <pre class="code-block">alembic revision --autogenerate -m "adiciona telefone aos pedidos"</pre>
        <div class="danger-box"><strong>Autogenerate não é autoridade.</strong> Abra o arquivo em <code class="inline-code">migrations/versions/</code> e confirme tabela, coluna, tipo, nulabilidade, chaves e qualquer transformação de dados antes de executar.</div>
        <pre class="code-block">alembic upgrade head
alembic current
alembic history</pre>
        <h3>Migração não é backup</h3>
        <div class="mini-grid"><div class="mini-card"><strong>Migração</strong>Transforma esquema e, às vezes, dados.</div><div class="mini-card"><strong>Backup</strong>Preserva uma cópia recuperável.</div></div>
        <p>Neste percurso didático, o banco inicial nasce com <code class="inline-code">create_all()</code> e é marcado com baseline. Alembic também documenta o padrão de criar o esquema atual e então usar <code class="inline-code">stamp</code>. Outros projetos podem manter migrações desde o primeiro esquema.</p>
        <div class="essence"><strong>Essência</strong>Depois que existem dados, “mudar a classe” não basta. Alteramos o modelo, geramos uma revisão, revisamos e aplicamos a mudança preservando o estado existente.</div>`
    },
    {
      id: 'capitulo-29',
      number: 29,
      menuTitle: 'Clientes',
      title: 'O cliente não deveria nascer novamente em cada pedido',
      objective: 'Criar a entidade Cliente, separar cadastro atual de dados históricos e distinguir migração de esquema de migração de dados.',
      content: `
        <div class="hero-box"><h3>Ana compra muitas vezes. Ela não deveria ser apenas um texto repetido.</h3><p>Quando a mesma pessoa aparece em vários pedidos, o sistema passa a precisar de uma identidade persistente para o cliente.</p></div>
        <h3>Repetição nem sempre é erro</h3>
        <p><code class="inline-code">item.preco_unitario</code> repete um valor propositalmente porque preserva histórico. Já repetir o cadastro atual do cliente em centenas de pedidos dificulta manter a informação correta.</p>
        <div class="flow">CLIENTE 1
↓
N PEDIDOS</div>
        <h3>Modelo Cliente</h3>
        <pre class="code-block">class Cliente(Base):
    __tablename__ = "clientes"

    id: Mapped[int] = mapped_column(primary_key=True)
    nome: Mapped[str] = mapped_column(String(100))
    telefone: Mapped[str | None] = mapped_column(String(20), nullable=True)

    pedidos: Mapped[list["Pedido"]] = relationship(back_populates="cliente")</pre>
        <h3>Pedido passa a referenciar Cliente</h3>
        <pre class="code-block">cliente_id: Mapped[int | None] = mapped_column(
    ForeignKey("clientes.id"),
    nullable=True
)

cliente: Mapped["Cliente | None"] = relationship(
    back_populates="pedidos"
)</pre>
        <p><code class="inline-code">cliente_id</code> começa opcional porque pedidos antigos ainda não conhecem um cadastro de cliente.</p>
        <h3>Preserve o legado durante a transição</h3>
        <pre class="code-block">cliente_nome_legado: Mapped[str | None] = mapped_column(
    "cliente",
    String(100),
    nullable=True
)

telefone_contato: Mapped[str | None] = mapped_column(
    "telefone",
    String(20),
    nullable=True
)</pre>
        <div class="mini-grid"><div class="mini-card"><strong>Migração de esquema</strong>Cria clientes, cliente_id e a chave estrangeira.</div><div class="mini-card"><strong>Migração de dados</strong>Decide qual Cliente real corresponde a cada pedido antigo.</div></div>
        <div class="danger-box"><strong>Mesmo nome não significa mesma pessoa.</strong> Não vincularemos automaticamente dois “Carlos Silva” só porque o texto coincide.</div>
        <h3>SQLite e batch migration</h3>
        <pre class="code-block">context.configure(
    connection=connection,
    target_metadata=target_metadata,
    render_as_batch=True
)</pre>
        <pre class="code-block">alembic revision --autogenerate -m "adiciona clientes e relaciona pedidos"
alembic upgrade head</pre>
        <h3>Cadastro de clientes</h3>
        <pre class="code-block">class ClienteEntrada(BaseModel):
    nome: str = Field(min_length=2, max_length=100)
    telefone: str | None = Field(default=None, min_length=8, max_length=20)

class ClienteSaida(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    nome: str
    telefone: str | None</pre>
        <h3>Novo pedido recebe cliente_id</h3>
        <pre class="code-block">cliente = session.get(Cliente, pedido.cliente_id)

if cliente is None:
    raise HTTPException(status_code=404, detail="Cliente não encontrado")

novo_pedido = Pedido(
    cliente=cliente,
    cliente_nome_legado=None,
    endereco=pedido.endereco,
    telefone_contato=(pedido.telefone_contato or cliente.telefone),
    observacao=pedido.observacao
)</pre>
        <p>O cadastro mantém o telefone atual; o pedido pode preservar o contato utilizado naquela entrega. Essa duplicação é histórica e intencional.</p>
        <div class="essence"><strong>Essência</strong>Normalizar não significa criar tabelas para todo substantivo. Criamos Cliente quando o domínio passou a exigir identidade própria e migramos em etapas para não destruir nem inventar dados antigos.</div>`
    },
    {
      id: 'capitulo-30',
      number: 30,
      menuTitle: 'Escolha do banco',
      title: 'Quando SQLite deixa de ser a melhor escolha?',
      objective: 'Comparar banco embutido e banco cliente-servidor, reconhecer limites do SQLite e decidir quando MySQL ou PostgreSQL fariam sentido sem trocar tecnologia por prestígio.',
      content: `
        <div class="hero-box"><h3>Nosso SQLite não venceu o prazo de validade.</h3><p>Depois de aprender concorrência, migrações e relacionamentos, é natural perguntar se deveríamos trocar imediatamente para MySQL ou PostgreSQL. A resposta depende do cenário, não de uma hierarquia de prestígio.</p></div>
        <h3>SQLite resolve um problema específico</h3>
        <div class="flow">FASTAPI
↓
SQLAlchemy
↓
SQLite
↓
agua_gas.db</div>
        <p>O mecanismo do banco fica embutido na aplicação e os dados ficam em um arquivo. Isso reduz instalação, administração e pontos de falha externos.</p>
        <h3>Quando ele continua fazendo sentido?</h3>
        <p>SQLite é especialmente adequado quando temos armazenamento local ou um servidor de aplicação simples, volume moderado e poucas escritas concorrentes. Ele suporta muitos leitores, mas apenas um escritor por arquivo a cada instante.</p>
        <div class="note-box"><strong>Escolha pela necessidade.</strong> Quando não há muitos escritores concorrentes e o modelo de arquivo atende bem, simplicidade é uma vantagem real.</div>
        <h3>O que muda em PostgreSQL ou MySQL?</h3>
        <div class="flow">FASTAPI
↓ rede/conexão
SERVIDOR DE BANCO
↓
dados gerenciados pelo servidor</div>
        <p>Agora existe outro processo responsável por aceitar conexões, coordenar acesso e executar operações do banco. PostgreSQL, por exemplo, documenta explicitamente sua arquitetura cliente-servidor.</p>
        <h3>Quando um servidor começa a ser atraente?</h3>
        <div class="mini-grid"><div class="mini-card"><strong>Muitos escritores</strong>Várias operações precisam gravar simultaneamente.</div><div class="mini-card"><strong>Múltiplas instâncias</strong>Mais de um servidor FastAPI compartilha o banco.</div><div class="mini-card"><strong>Operação centralizada</strong>Backup, usuários, permissões e monitoramento exigem infraestrutura própria.</div><div class="mini-card"><strong>Crescimento</strong>Disponibilidade ou arquitetura deixam de combinar com um único arquivo local.</div></div>
        <h3>Não é “SQLite pequeno, PostgreSQL grande”</h3>
        <p>Tamanho é apenas um fator. Uma aplicação pequena pode precisar de banco cliente-servidor por concorrência e disponibilidade; outra com muitos dados locais pode funcionar muito bem com SQLite.</p>
        <h3>E o SQLAlchemy? Basta trocar uma linha?</h3>
        <pre class="code-block">SQLite:
sqlite:///./agua_gas.db

Banco servidor:
dialeto+driver://usuario:senha@host/banco</pre>
        <p>O ORM abstrai muito, mas um projeto real ainda precisa revisar driver, tipos e recursos específicos, migrações, transações, bloqueios, pool de conexões, credenciais, rede, backup e implantação.</p>
        <div class="danger-box"><strong>Não ensine “migrar de banco é trocar a URL”.</strong> Bancos diferentes continuam possuindo dialetos, recursos e características operacionais diferentes.</div>
        <h3>Qual escolheríamos para Água, Gás e Utilidades?</h3>
        <p>Para nosso laboratório, continuaremos com SQLite. Ele nos permitiu aprender persistência, ORM, chaves, relações, transações, concorrência e migrações sem introduzir administração de servidor antes da necessidade.</p>
        <p>Se o sistema virasse uma aplicação real com muitos atendentes, entregadores, integrações e várias instâncias da API gravando simultaneamente, passaríamos a avaliar seriamente PostgreSQL ou MySQL.</p>
        <h3>O que construímos no Bloco 4</h3>
        <div class="flow">listas em memória
↓
persistência
↓
SQLite
↓
SQLAlchemy 2.x
↓
Session por requisição
↓
CRUD persistente
↓
chaves e relacionamentos
↓
Pedido + ItemPedido
↓
transações
↓
consultas relacionadas
↓
status com efeitos persistentes
↓
concorrência de estoque
↓
Alembic e migrações
↓
Cliente 1:N Pedido
↓
escolha consciente do banco</div>
        <h3>A próxima fragilidade já está visível</h3>
        <p>Agora conseguimos persistir clientes e pedidos, mas nossa API ainda não sabe quem está fazendo a requisição. Qualquer consumidor que conheça uma rota administrativa ainda pode tentar chamá-la.</p>
        <div class="flow">DADOS PERSISTENTES ✅

IDENTIDADE DO USUÁRIO ❌

PERMISSÕES REAIS ❌</div>
        <p>No Bloco 3 identificamos a necessidade de autenticação e autorização. Agora finalmente temos a base persistente para implementá-las de maneira coerente.</p>
        <div class="bridge-box"><strong>Bloco 4 concluído.</strong> O próximo bloco entrará em usuários, hash de senha, autenticação, autorização e identidade entre requisições.</div>
        <div class="essence"><strong>Essência</strong>Não existe banco “mais profissional” em abstrato. Existe tecnologia adequada ao cenário. Escolhemos quando a necessidade muda — não para impressionar.</div>`
    }
  ]
});