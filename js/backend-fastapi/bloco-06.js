window.backendFastapiBlocks = window.backendFastapiBlocks || [];

window.backendFastapiBlocks.push({
  id: 'bloco-6',
  menuTitle: '6. Testes e integração',
  title: 'Bloco 6 — Integração e testes',
  lessons: [
    {
      id: 'capitulo-39',
      number: 39,
      menuTitle: 'Primeiro teste',
      title: 'Como saber se a API continua funcionando?',
      objective: 'Transformar verificações manuais do /docs em testes automatizados com pytest e TestClient.',
      content: `
        <div class="hero-box"><h3>A API cresceu. Repetir tudo manualmente ficou caro.</h3><p>Produtos, pedidos, estoque, banco, login e autorização já possuem vários comportamentos que podem quebrar quando alteramos o código. Precisamos repetir verificações importantes sempre da mesma forma.</p></div>
        <div class="concept-box"><strong>Teste automatizado</strong>É uma verificação escrita em código. Executamos uma ação, observamos o resultado e usamos <code class="inline-code">assert</code> para comparar o comportamento obtido com aquilo que esperamos.</div>
        <pre class="code-block">python -m pip install pytest httpx</pre>
        <p>Crie <code class="inline-code">tests/test_produtos.py</code>:</p>
        <pre class="code-block">from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


def test_listar_produtos():
    response = client.get("/produtos")

    assert response.status_code == 200
    assert isinstance(response.json(), list)</pre>
        <p>O TestClient conversa diretamente com a aplicação ASGI; não precisamos iniciar <code class="inline-code">fastapi dev</code> nem abrir uma porta real para esses testes.</p>
        <h3>Execute</h3>
        <pre class="code-block">python -m pytest -v</pre>
        <p>O pytest encontra arquivos e funções seguindo convenções como <code class="inline-code">test_*.py</code> e <code class="inline-code">test_...</code>.</p>
        <h3>Teste também falhas esperadas</h3>
        <pre class="code-block">def test_produto_inexistente():
    response = client.get("/produtos/999999")

    assert response.status_code == 404
    assert response.json() == {
        "detail": "Produto não encontrado"
    }</pre>
        <div class="flow">PREVER\n↓\nEXECUTAR\n↓\nOBSERVAR\n↓\nCOMPARAR com assert\n↓\nMELHORAR</div>
        <div class="danger-box"><strong>Problema descoberto.</strong>Se testarmos POST usando a configuração normal, o teste poderá criar dados em <code class="inline-code">agua_gas.db</code>. Um teste precisa controlar seus próprios dados.</div>
        <div class="essence"><strong>Essência</strong>Testes automatizados transformam comportamentos esperados em verificações repetíveis. O próximo passo é impedir que eles contaminem o banco de desenvolvimento.</div>`
    },
    {
      id: 'capitulo-40',
      number: 40,
      menuTitle: 'Banco de teste',
      title: 'Testes não devem usar nosso banco real',
      objective: 'Substituir get_session durante os testes e usar um SQLite isolado sem alterar as rotas da aplicação.',
      content: `
        <div class="hero-box"><h3>A mesma rota pode receber outra infraestrutura.</h3><p>As rotas pedem uma <code class="inline-code">SessionDep</code>; elas não precisam conhecer qual Engine a criou. Isso permite substituir a dependência somente durante os testes.</p></div>
        <h3>Configuração do teste vem antes da aplicação</h3>
        <p>No Bloco 5 tornamos <code class="inline-code">SECRET_KEY</code> obrigatória. Uma máquina limpa não deve depender do <code class="inline-code">.env</code> pessoal do desenvolvedor para executar a suíte. Em <code class="inline-code">conftest.py</code>, defina valores próprios de teste antes de importar <code class="inline-code">main</code>:</p>
        <pre class="code-block">import os

os.environ.setdefault(
    "SECRET_KEY",
    "segredo-exclusivo-para-testes"
)

from main import app</pre>
        <div class="note-box"><strong>Segredo de teste não é segredo de produção.</strong>Esse valor fixo existe apenas no ambiente isolado da suíte; nunca reutilize nele a chave real da aplicação.</div>
        <pre class="code-block">from sqlalchemy import create_engine, event
from sqlalchemy.orm import Session
from sqlalchemy.pool import StaticPool

from database import Base, get_session


test_engine = create_engine(
    "sqlite://",
    connect_args={"check_same_thread": False},
    poolclass=StaticPool
)</pre>
        <p><code class="inline-code">StaticPool</code> mantém a mesma conexão para este SQLite em memória, o que é adequado para nossa suíte simples e serial. Ele não é um teste real de concorrência entre múltiplas conexões.</p>
        <pre class="code-block">@event.listens_for(test_engine, "connect")
def ativar_chaves_estrangeiras_teste(
    dbapi_connection,
    connection_record
):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()</pre>
        <p>O banco de teste precisa preservar regras relevantes do banco normal, inclusive Foreign Keys.</p>
        <pre class="code-block">Base.metadata.create_all(test_engine)


def get_test_session():
    with Session(test_engine) as session:
        yield session


app.dependency_overrides[get_session] = get_test_session
client = TestClient(app)</pre>
        <div class="flow">APLICAÇÃO NORMAL\nget_session → agua_gas.db\n\nTESTE\nget_session → override → get_test_session → SQLite de teste</div>
        <p>As rotas permanecem iguais. A injeção de dependências permite trocar a infraestrutura sem criar código especial de teste dentro de <code class="inline-code">main.py</code>.</p>
        <div class="note-box"><strong>create_all() aqui não testa nossas migrações.</strong>Ele cria diretamente o esquema ORM atual para estes testes funcionais. Se quisermos provar a evolução de uma versão antiga do banco, devemos testar o fluxo Alembic separadamente.</div>
        <div class="danger-box"><strong>Ainda falta isolamento entre testes.</strong>Separar o banco real não impede que o Teste B encontre dados deixados pelo Teste A. Precisamos preparar e limpar o cenário de cada teste.</div>
        <div class="essence"><strong>Essência</strong><code class="inline-code">app.dependency_overrides</code> permite substituir uma dependência durante testes. Assim a mesma API trabalha com um banco controlado sem contaminar os dados de desenvolvimento.</div>`
    },
    {
      id: 'capitulo-41',
      number: 41,
      menuTitle: 'Fixtures',
      title: 'Cada teste precisa começar do zero',
      objective: 'Usar fixtures e conftest.py para preparar banco, Session, TestClient e dados previsíveis sem depender da ordem dos testes.',
      content: `
        <div class="hero-box"><h3>Teste independente é teste que consegue rodar sozinho.</h3><p>O resultado não deve depender de outro teste ter criado antes um produto, um usuário ou um pedido.</p></div>
        <p>Crie <code class="inline-code">tests/conftest.py</code>. O pytest disponibiliza automaticamente as fixtures desse arquivo aos testes da mesma árvore.</p>
        <pre class="code-block">import pytest


@pytest.fixture
def banco_limpo():
    Base.metadata.drop_all(test_engine)
    Base.metadata.create_all(test_engine)

    yield

    Base.metadata.drop_all(test_engine)</pre>
        <p>O que vem antes do <code class="inline-code">yield</code> prepara o cenário; o que vem depois executa a limpeza.</p>
        <h3>Uma Session para preparar dados</h3>
        <pre class="code-block">@pytest.fixture
def session(banco_limpo):
    with Session(test_engine) as session:
        yield session</pre>
        <p>Essa fixture será útil para criar diretamente clientes, produtos ou usuários que formam o estado inicial de um teste. As requisições da API continuam recebendo suas próprias Sessions por <code class="inline-code">get_test_session()</code>.</p>
        <pre class="code-block">@pytest.fixture
def client(banco_limpo):
    app.dependency_overrides[get_session] = get_test_session

    with TestClient(app) as test_client:
        yield test_client

    app.dependency_overrides.clear()</pre>
        <p>Uma fixture também pode depender de outra. Aqui, pedir <code class="inline-code">client</code> implica preparar primeiro um banco limpo. Se um mesmo teste pedir <code class="inline-code">client</code> e <code class="inline-code">session</code>, o pytest reutiliza a mesma fixture <code class="inline-code">banco_limpo</code> naquele teste.</p>
        <pre class="code-block">@pytest.fixture
def produto_exemplo():
    return {
        "nome": "Bomba manual",
        "preco": "19.90",
        "categoria": "acessorios",
        "retornavel": False,
        "ativo": True,
        "estoque": 8
    }</pre>
        <pre class="code-block">def test_criar_produto(client, produto_exemplo):
    response = client.post(
        "/produtos",
        json=produto_exemplo
    )

    assert response.status_code == 201
    assert response.json()["nome"] == "Bomba manual"</pre>
        <div class="note-box"><strong>Não transforme tudo em fixture.</strong>Fixtures reduzem preparação repetitiva, mas o cenário principal do teste deve continuar legível.</div>
        <div class="essence"><strong>Essência</strong>Cada teste declara o que precisa. Fixtures preparam e limpam o ambiente, tornando a suíte independente, repetível e mais fácil de entender.</div>`
    },
    {
      id: 'capitulo-42',
      number: 42,
      menuTitle: 'Testando segurança',
      title: 'Nossa autenticação funciona de verdade?',
      objective: 'Testar o fluxo real de login, JWT, usuário atual e autorização, cobrindo sucesso, 401 e 403.',
      content: `
        <div class="hero-box"><h3>Segurança precisa de testes positivos e negativos.</h3><p>Não basta provar que o administrador consegue usar uma rota. Precisamos provar também que quem não possui credencial ou permissão é bloqueado.</p></div>
        <p>Nos testes podemos preparar o usuário diretamente no banco, assim como o bootstrap cria o primeiro administrador no ambiente real.</p>
        <pre class="code-block">@pytest.fixture
def usuario_admin(session):
    usuario = Usuario(
        nome_usuario="admin_teste",
        senha_hash=gerar_hash_senha("SenhaAdmin123"),
        papel="administrador",
        ativo=True
    )
    session.add(usuario)
    session.commit()
    session.refresh(usuario)

    return {
        "id": usuario.id,
        "nome_usuario": usuario.nome_usuario,
        "senha": "SenhaAdmin123"
    }</pre>
        <h3>Login real</h3>
        <pre class="code-block">def test_login_valido(client, usuario_admin):
    response = client.post(
        "/login",
        data={
            "username": usuario_admin["nome_usuario"],
            "password": usuario_admin["senha"]
        }
    )

    assert response.status_code == 200
    assert "access_token" in response.json()
    assert response.json()["token_type"] == "bearer"</pre>
        <p>Usamos <code class="inline-code">data=</code> porque <code class="inline-code">OAuth2PasswordRequestForm</code> recebe dados de formulário.</p>
        <h3>Fixture com Bearer token</h3>
        <pre class="code-block">@pytest.fixture
def headers_admin(client, usuario_admin):
    response = client.post(
        "/login",
        data={
            "username": usuario_admin["nome_usuario"],
            "password": usuario_admin["senha"]
        }
    )
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}</pre>
        <div class="term-grid">
          <div class="head">Cenário</div><div class="head">Esperado</div>
          <div>Sem token ou token inválido</div><div><strong>401</strong></div>
          <div>Usuário autenticado, papel insuficiente</div><div><strong>403</strong></div>
          <div>Usuário autenticado e autorizado</div><div><strong>sucesso</strong></div>
        </div>
        <pre class="code-block">def test_atendente_nao_cria_usuario(
    client,
    headers_atendente
):
    response = client.post(
        "/usuarios",
        headers=headers_atendente,
        json={
            "nome_usuario": "novo_entregador",
            "senha": "SenhaNova123",
            "papel": "entregador"
        }
    )

    assert response.status_code == 403</pre>
        <p>Também vale testar que um JWT ainda válido deixa de dar acesso se o usuário for desativado no banco. Isso transforma nossa decisão arquitetural — token identifica, banco fornece estado atual — em uma garantia executável.</p>
        <div class="essence"><strong>Essência</strong>Uma suíte de segurança precisa provar permissões e proibições. Regressões que transformam 403 em sucesso devem aparecer imediatamente nos testes.</div>`
    },
    {
      id: 'capitulo-43',
      number: 43,
      menuTitle: 'Pedidos e transações',
      title: 'E se o pedido falhar no meio?',
      objective: 'Testar efeitos de pedidos sobre estoque, preço histórico, rollback e cancelamento para provar regras críticas do negócio.',
      content: `
        <div class="hero-box"><h3>Um 201 sozinho não prova que o pedido está correto.</h3><p>Precisamos verificar os efeitos em itens, estoque, histórico e transação.</p></div>
        <h3>Caminho feliz</h3>
        <div class="flow">estoque = 5\n↓\npedido de 2\n↓\npedido criado\n+\nitem gravado\n+\nestoque = 3</div>
        <pre class="code-block">def test_criar_pedido_baixa_estoque(
    client,
    cliente_exemplo,
    produto_com_estoque,
    headers_atendente
):
    response = client.post(
        "/pedidos",
        headers=headers_atendente,
        json={
            "cliente_id": cliente_exemplo.id,
            "endereco": "Rua A, 10",
            "itens": [
                {
                    "produto_id": produto_com_estoque.id,
                    "quantidade": 2
                }
            ]
        }
    )

    assert response.status_code == 201

    produto = client.get(
        f"/produtos/{produto_com_estoque.id}"
    )
    assert produto.json()["estoque"] == 3</pre>
        <h3>Preço histórico</h3>
        <p>Crie o pedido a R$ 18,00, altere depois o produto para R$ 20,00 e confirme que o item antigo continua registrando R$ 18,00.</p>
        <h3>Rollback</h3>
        <div class="flow">Produto A: estoque 10\nProduto B: estoque 1\n↓\npedido pede A=2 e B=5\n↓\nB falha\n↓\nROLLBACK\n↓\nA continua 10\nB continua 1\npedido não existe</div>
        <p>Esse teste prova <strong>atomicidade</strong>: a unidade de trabalho inteira confirma ou é desfeita.</p>
        <h3>Cancelamento</h3>
        <div class="flow">estoque 5\n↓ pedido de 2\n3\n↓ cancelamento válido\n5\n↓ segundo cancelamento\n409 e estoque continua 5</div>
        <div class="note-box"><strong>Teste efeitos, não apenas status.</strong>Uma API pode devolver 201 e ainda persistir estoque, histórico ou relacionamentos incorretos.</div>
        <div class="essence"><strong>Essência</strong>As regras que protegem estoque, histórico e consistência merecem testes de integração porque envolvem várias tabelas e decisões na mesma operação.</div>`
    },
    {
      id: 'capitulo-44',
      number: 44,
      menuTitle: 'CORS',
      title: 'Por que o navegador bloqueou nossa API?',
      objective: 'Entender quando CORS surge, configurar origens explícitas e testar a integração de um frontend separado com a API.',
      content: `
        <div class="hero-box"><h3>CORS só surge agora porque apareceu um navegador em outra origem.</h3><p>Um frontend em <code class="inline-code">http://localhost:5500</code> tentando acessar a API em <code class="inline-code">http://127.0.0.1:8000</code> participa de uma comunicação cross-origin.</p></div>
        <div class="concept-box"><strong>Origem</strong>É a combinação de protocolo + host + porta. Mudar qualquer uma dessas partes pode produzir outra origem.</div>
        <p>CORS é principalmente uma política aplicada pelo navegador. Ele não substitui autenticação, autorização nem funciona como firewall para qualquer cliente HTTP.</p>
        <h3>A origem também é configuração</h3>
        <p>Acrescente ao <code class="inline-code">Settings</code>:</p>
        <pre class="code-block">frontend_origin: str = "http://localhost:5500"</pre>
        <p>Em produção, esse valor pode vir do <code class="inline-code">.env</code>:</p>
        <pre class="code-block">FRONTEND_ORIGIN=https://app.exemplo.com</pre>
        <pre class="code-block">from fastapi.middleware.cors import CORSMiddleware

origins = [
    settings.frontend_origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "DELETE"],
    allow_headers=["Authorization", "Content-Type"]
)</pre>
        <p>Como nosso frontend utiliza Bearer token, explicitamos a origem e o cabeçalho <code class="inline-code">Authorization</code> em vez de tratar <code class="inline-code">*</code> como solução automática.</p>
        <h3>Preflight</h3>
        <div class="flow">NAVEGADOR\n↓\nOPTIONS\n“essa origem pode usar PATCH e Authorization?”\n↓\nCORSMiddleware\n↓\npermitido?\n↓\nrequisição real</div>
        <p>Não precisamos criar uma rota OPTIONS para cada endpoint; o middleware trata requisições CORS preflight apropriadas.</p>
        <h3>Teste a política</h3>
        <pre class="code-block">def test_cors_origem_permitida(client):
    response = client.options(
        "/produtos",
        headers={
            "Origin": "http://localhost:5500",
            "Access-Control-Request-Method": "GET"
        }
    )

    assert response.status_code == 200
    assert response.headers[
        "access-control-allow-origin"
    ] == "http://localhost:5500"</pre>
        <div class="term-grid">
          <div class="head">Camada</div><div class="head">Pergunta</div>
          <div>CORS</div><div>Esta origem do navegador pode participar da comunicação?</div>
          <div>JWT</div><div>Quem é o usuário?</div>
          <div>Autorização</div><div>Ele pode executar esta ação?</div>
        </div>
        <div class="essence"><strong>Essência</strong>CORS aparece por necessidade de integração entre origens diferentes no navegador. A política deve representar as origens reais do sistema, sem substituir as proteções do backend.</div>`
    },
    {
      id: 'capitulo-45',
      number: 45,
      menuTitle: 'Suíte confiável',
      title: 'O que realmente precisamos testar?',
      objective: 'Organizar a suíte, priorizar comportamentos de maior risco e fechar um ciclo de mudança com verificação automática antes da publicação.',
      content: `
        <div class="hero-box"><h3>Ter muitos testes não é o objetivo.</h3><p>Queremos uma suíte que ajude a modificar o sistema com confiança, seja compreensível e denuncie regressões relevantes.</p></div>
        <h3>Organize por responsabilidade</h3>
        <pre class="code-block">tests/
├── conftest.py
├── test_produtos.py
├── test_clientes.py
├── test_pedidos.py
├── test_seguranca.py
└── test_cors.py</pre>
        <p><code class="inline-code">conftest.py</code> concentra infraestrutura e fixtures compartilhadas; os arquivos <code class="inline-code">test_*.py</code> descrevem comportamentos do sistema.</p>
        <h3>Priorize risco e regra</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Contrato HTTP</strong>Status, estrutura de resposta, validações e erros importantes.</div>
          <div class="mini-card"><strong>Segurança</strong>Login, token inválido, 401, 403, conta inativa e propriedade de recurso.</div>
          <div class="mini-card"><strong>Negócio</strong>Estoque, preço histórico, status, cancelamento e permissões.</div>
          <div class="mini-card"><strong>Persistência</strong>Transações, rollback, relacionamentos e dados que precisam sobreviver à operação.</div>
        </div>
        <h3>Não teste a implementação por acidente</h3>
        <p>Se o comportamento importante é “produto foi criado e pode ser consultado”, não prenda o teste a detalhes internos que podem mudar sem alterar o contrato. Testes excessivamente acoplados tornam refatorações seguras artificialmente difíceis.</p>
        <h3>Nomeie o comportamento</h3>
        <pre class="code-block">def test_produto_inexistente_retorna_404():
    ...


def test_atendente_nao_pode_criar_usuario():
    ...


def test_cliente_nao_consulta_pedido_de_outro_cliente():
    ...


def test_cancelamento_restaura_estoque_uma_vez():
    ...</pre>
        <p>O nome ajuda a suíte a funcionar também como documentação executável.</p>
        <h3>Agora existe motivo para dividir main.py</h3>
        <p>No começo, um único arquivo ajudava a enxergar a aplicação inteira. Depois de produtos, clientes, pedidos e segurança, ele pode ficar grande demais. Só agora surge uma necessidade concreta para <code class="inline-code">APIRouter</code>.</p>
        <pre class="code-block"># routers/produtos.py
from fastapi import APIRouter

router = APIRouter(
    prefix="/produtos",
    tags=["Produtos"]
)


@router.get("")
def listar_produtos(...):
    ...</pre>
        <p>No arquivo principal:</p>
        <pre class="code-block">from fastapi import FastAPI
from routers import produtos

app = FastAPI(...)
app.include_router(produtos.router)</pre>
        <div class="note-box"><strong>Refatorar não muda o contrato.</strong>As URLs e regras continuam as mesmas. A suíte automatizada ajuda a provar que reorganizar arquivos não alterou o comportamento externo.</div>
        <h3>Execute tudo com um comando</h3>
        <pre class="code-block">python -m pytest -v</pre>
        <p>Durante o trabalho também podemos executar um arquivo ou teste específico, mas antes de publicar uma alteração relevante queremos executar a suíte completa.</p>
        <div class="flow">MUDAR CÓDIGO\n↓\nTESTAR\n↓\nFALHOU?\n├─ sim → investigar e corrigir\n└─ não → revisar a mudança\n↓\nPUBLICAR COM MAIS CONFIANÇA</div>
        <h3>Teste não prova ausência de bugs</h3>
        <p>Uma suíte reduz incerteza, mas não consegue provar que todo cenário imaginável está correto. Revisão, regras de banco, validação, observabilidade e testes manuais continuam importantes.</p>
        <h3>Quando um bug aparecer, transforme-o em proteção</h3>
        <p>Ao encontrar um defeito importante, reproduza o comportamento em um teste que falhe, corrija o código e mantenha o teste. Assim aquela falha conhecida passa a ser vigiada contra regressões.</p>
        <div class="concept-box"><strong>Bom teste pergunta sobre comportamento.</strong>O que deve acontecer? O que não pode acontecer? Que efeito precisa permanecer verdadeiro depois da operação?</div>
        <h3>O caminho percorrido</h3>
        <div class="flow">problema real\n↓\ncliente e servidor\n↓\nHTTP e API\n↓\nFastAPI e contratos\n↓\nregras de negócio\n↓\nSQLite + SQLAlchemy\n↓\ntransações e migrações\n↓\nautenticação e autorização\n↓\nintegração e testes\n↓\norganização com APIRouter</div>
        <div class="bridge-box"><strong>Módulo-base concluído.</strong>A API agora não apenas executa regras: possui persistência, segurança, testes e uma estrutura que pode continuar evoluindo por necessidade, sem desmontar a progressão construída.</div>
        <div class="essence"><strong>Essência</strong>Testar é transformar expectativas relevantes em verificações executáveis. A melhor suíte não é a maior; é a que protege contratos e regras importantes sem esconder o funcionamento do sistema.</div>`
    }
  ]
});
