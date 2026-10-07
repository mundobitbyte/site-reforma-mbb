window.backendFastapiBlocks = window.backendFastapiBlocks || [];

window.backendFastapiBlocks.push({
  id: 'bloco-5',
  menuTitle: '5. Segurança',
  title: 'Bloco 5 — Autenticação e autorização',
  lessons: [
    {
      id: 'capitulo-31',
      number: 31,
      menuTitle: 'Senha segura',
      title: 'A senha não pode ficar no banco',
      objective: 'Criar usuários persistentes sem armazenar senhas em texto puro, usando hash apropriado para senha com pwdlib e Argon2.',
      content: `
        <div class="hero-box"><h3>O sistema agora precisa reconhecer pessoas.</h3><p>Cliente e Usuário não são a mesma responsabilidade. Cliente representa quem compra; Usuário representa uma identidade capaz de acessar o sistema.</p></div>
        <div class="flow">USUÁRIO\n↓\nnome de usuário\n+\ncredencial\n+\npapel</div>
        <h3>Senha não vai para o banco</h3>
        <p>Guardar <code class="inline-code">senha = "MinhaSenha123"</code> permitiria que um vazamento do banco expusesse imediatamente as credenciais. Também não precisamos criptografar a senha para recuperá-la depois. Precisamos apenas verificar se a senha informada corresponde à cadastrada.</p>
        <div class="concept-box"><strong>Hash de senha</strong>A senha passa por uma função apropriada para senhas e o banco guarda apenas o resultado. Para novos hashes, usaremos <strong>Argon2</strong> por meio do <code class="inline-code">pwdlib</code>.</div>
        <pre class="code-block">python -m pip install "pwdlib[argon2]"</pre>
        <p>Crie <code class="inline-code">security.py</code>:</p>
        <pre class="code-block">from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()


def gerar_hash_senha(senha: str) -> str:
    return password_hash.hash(senha)


def verificar_senha(senha: str, senha_hash: str) -> bool:
    return password_hash.verify(senha, senha_hash)</pre>
        <h3>Modelo de usuário</h3>
        <pre class="code-block">class Usuario(Base):
    __tablename__ = "usuarios"

    id: Mapped[int] = mapped_column(primary_key=True)
    nome_usuario: Mapped[str] = mapped_column(
        String(50), unique=True, index=True
    )
    senha_hash: Mapped[str] = mapped_column(String(255))
    papel: Mapped[str] = mapped_column(String(20))
    ativo: Mapped[bool] = mapped_column(Boolean, default=True)</pre>
        <p>O modelo de entrada recebe <code class="inline-code">senha</code>; o modelo de saída não devolve nem senha nem hash.</p>
        <pre class="code-block">class UsuarioEntrada(BaseModel):
    nome_usuario: str = Field(min_length=3, max_length=50)
    senha: str = Field(min_length=8, max_length=128)
    papel: str


class UsuarioSaida(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome_usuario: str
    papel: str
    ativo: bool</pre>
        <h3>Validação na aplicação e integridade no banco</h3>
        <p>Podemos consultar antes se o nome já existe para devolver uma mensagem clara, mas isso não substitui <code class="inline-code">unique=True</code>. Duas requisições concorrentes ainda podem passar pela consulta inicial. A restrição do banco é a barreira final.</p>
        <pre class="code-block">try:
    session.add(novo_usuario)
    session.commit()
    session.refresh(novo_usuario)
except IntegrityError as erro:
    session.rollback()
    raise HTTPException(
        status_code=409,
        detail="Nome de usuário já cadastrado"
    ) from erro</pre>
        <div class="essence"><strong>Essência</strong>Senha original entra na requisição, vira hash com Argon2 e somente o hash é persistido. Hash também é material sensível e não deve aparecer nas respostas.</div>`
    },
    {
      id: 'capitulo-32',
      number: 32,
      menuTitle: 'Login',
      title: 'Como a API sabe se a senha está correta?',
      objective: 'Autenticar um usuário buscando sua identidade no banco e verificando a senha informada contra o hash persistido.',
      content: `
        <div class="hero-box"><h3>Cadastrar usuário não significa autenticar.</h3><p>O login precisa localizar a conta e verificar se a senha informada corresponde ao hash armazenado.</p></div>
        <pre class="code-block">def buscar_usuario(session: Session, nome_usuario: str):
    comando = select(Usuario).where(
        Usuario.nome_usuario == nome_usuario
    )
    return session.scalars(comando).first()</pre>
        <pre class="code-block">def autenticar_usuario(
    session: Session,
    nome_usuario: str,
    senha: str
):
    usuario = buscar_usuario(session, nome_usuario)

    if usuario is None:
        verificar_senha(senha, DUMMY_HASH)
        return None

    if not verificar_senha(senha, usuario.senha_hash):
        return None

    return usuario</pre>
        <h3>Não revele qual parte da credencial falhou</h3>
        <p>Usuário inexistente e senha errada recebem a mesma resposta: <code class="inline-code">Usuário ou senha incorretos</code>. Isso evita transformar a API em um catálogo de contas válidas.</p>
        <p>O <code class="inline-code">DUMMY_HASH</code> faz uma verificação fictícia quando a conta não existe, reduzindo diferenças de tempo entre os dois caminhos.</p>
        <pre class="code-block">DUMMY_HASH = password_hash.hash(
    "senha-ficticia-que-nao-sera-usada"
)</pre>
        <h3>Formulário de login</h3>
        <pre class="code-block">from fastapi.security import OAuth2PasswordRequestForm

FormularioLogin = Annotated[
    OAuth2PasswordRequestForm,
    Depends()
]</pre>
        <p>Esse fluxo recebe campos <code class="inline-code">username</code> e <code class="inline-code">password</code> como formulário. Internamente continuamos procurando <code class="inline-code">Usuario.nome_usuario</code>.</p>
        <pre class="code-block">@app.post("/login")
def login(
    form_data: FormularioLogin,
    session: SessionDep
):
    usuario = autenticar_usuario(
        session,
        form_data.username,
        form_data.password
    )

    if usuario is None:
        raise HTTPException(
            status_code=401,
            detail="Usuário ou senha incorretos",
            headers={"WWW-Authenticate": "Bearer"}
        )

    if not usuario.ativo:
        raise HTTPException(
            status_code=403,
            detail="Usuário inativo"
        )

    return {"mensagem": "Autenticação realizada"}</pre>
        <div class="bridge-box"><strong>Novo problema</strong>O login termina junto com a requisição. Na próxima chamada, a API ainda não sabe que é Carlos. Não enviaremos a senha em toda rota: precisaremos de uma credencial temporária.</div>`
    },
    {
      id: 'capitulo-33',
      number: 33,
      menuTitle: 'Token',
      title: 'Como levar a identidade para a próxima requisição?',
      objective: 'Entender o papel do access token e do esquema Bearer antes de introduzir JWT como implementação concreta.',
      content: `
        <div class="hero-box"><h3>HTTP não deve depender de “quem fez login por último”.</h3><p>Vários usuários podem usar a API ao mesmo tempo. Cada nova requisição precisa apresentar uma credencial que represente a autenticação realizada.</p></div>
        <div class="flow">USUÁRIO + SENHA\n↓\nLOGIN\n↓\nTOKEN DE ACESSO\n↓\npróximas requisições</div>
        <h3>Senha e token possuem responsabilidades diferentes</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Senha</strong>Credencial do usuário usada para provar identidade no login.</div>
          <div class="mini-card"><strong>Access token</strong>Credencial temporária emitida depois da autenticação e apresentada nas chamadas seguintes.</div>
        </div>
        <p>O token será enviado no cabeçalho HTTP:</p>
        <pre class="code-block">Authorization: Bearer &lt;token&gt;</pre>
        <p>Não o colocamos na URL, que pode aparecer em históricos e logs. Em produção, senha e token também exigem HTTPS.</p>
        <h3>FastAPI recebe o Bearer token</h3>
        <pre class="code-block">from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login"
)

TokenDep = Annotated[
    str,
    Depends(oauth2_scheme)
]</pre>
        <div class="note-box"><strong>OAuth2PasswordBearer não cria JWT.</strong>Ele declara o esquema, extrai o Bearer token e integra a segurança ao OpenAPI e ao /docs. Validar o conteúdo continua sendo responsabilidade da aplicação.</div>
        <p>O login passará a responder:</p>
        <pre class="code-block">class TokenSaida(BaseModel):
    access_token: str
    token_type: str</pre>
        <div class="flow">login correto\n↓\naccess_token\n↓\nAuthorization: Bearer ...\n↓\nAPI precisa validar o token</div>
        <div class="essence"><strong>Essência</strong>Token é o conceito. JWT será uma forma específica de token que nos permitirá transportar uma identidade assinada e com expiração.</div>`
    },
    {
      id: 'capitulo-34',
      number: 34,
      menuTitle: 'JWT',
      title: 'Criando nosso primeiro JWT',
      objective: 'Emitir um access token JWT assinado, com identidade mínima e expiração, e validá-lo de forma rigorosa.',
      content: `
        <div class="hero-box"><h3>O token precisa ser verificável.</h3><p>Um texto como <code class="inline-code">carlos</code> poderia ser inventado pelo cliente. JWT nos permite assinar o conteúdo e detectar adulterações.</p></div>
        <div class="flow">HEADER . PAYLOAD . SIGNATURE</div>
        <p>No payload usaremos principalmente:</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>sub</strong>Subject: identifica qual usuário o token representa.</div>
          <div class="mini-card"><strong>exp</strong>Expiration: determina até quando o access token é aceito.</div>
        </div>
        <div class="note-box"><strong>Assinatura não é criptografia.</strong>O payload de um JWT assinado pode ser lido. Não coloque senha, hash ou outros segredos nele.</div>
        <pre class="code-block">python -m pip install pyjwt</pre>
        <p>A chave de assinatura deve ser aleatória e ficar fora do código:</p>
        <pre class="code-block">python -c "import secrets; print(secrets.token_hex(32))"</pre>
        <pre class="code-block">def criar_access_token(dados: dict) -> str:
    dados_token = dados.copy()
    expira_em = (
        datetime.now(timezone.utc)
        + timedelta(
            minutes=settings.access_token_expire_minutes
        )
    )
    dados_token.update({"exp": expira_em})

    return jwt.encode(
        dados_token,
        settings.secret_key,
        algorithm=settings.algorithm
    )</pre>
        <p>O login gera o token com uma identidade mínima:</p>
        <pre class="code-block">access_token = criar_access_token(
    {"sub": usuario.nome_usuario}
)

return {
    "access_token": access_token,
    "token_type": "bearer"
}</pre>
        <h3>Validação rigorosa</h3>
        <p>Não basta verificar claims apenas quando aparecem. Nossa aplicação exige explicitamente <code class="inline-code">exp</code> e <code class="inline-code">sub</code>:</p>
        <pre class="code-block">def obter_subject_token(token: str) -> str | None:
    try:
        payload = jwt.decode(
            token,
            settings.secret_key,
            algorithms=[settings.algorithm],
            options={
                "require": ["exp", "sub"]
            }
        )

        subject = payload.get("sub")

        if not isinstance(subject, str) or not subject:
            return None

        return subject

    except InvalidTokenError:
        return None</pre>
        <p>O algoritmo aceito é definido pela aplicação; nunca deve ser escolhido a partir de dados controlados pelo próprio token.</p>
        <div class="essence"><strong>Essência</strong>JWT transporta uma identidade assinada e temporária. Depois de obter <code class="inline-code">sub</code>, ainda consultaremos o banco para conhecer o estado atual do usuário.</div>`
    },
    {
      id: 'capitulo-35',
      number: 35,
      menuTitle: 'Usuário atual',
      title: 'Quem está fazendo esta requisição?',
      objective: 'Compor dependências que transformam o Bearer token em um objeto Usuario autenticado e ativo disponível para as rotas.',
      content: `
        <div class="hero-box"><h3>Uma rota não deve repetir a segurança inteira.</h3><p>Extrair token, validar JWT, ler <code class="inline-code">sub</code>, consultar o usuário e verificar sua conta é uma necessidade compartilhada.</p></div>
        <pre class="code-block">def obter_usuario_atual(
    token: TokenDep,
    session: SessionDep
):
    erro_credencial = HTTPException(
        status_code=401,
        detail="Credenciais inválidas",
        headers={"WWW-Authenticate": "Bearer"}
    )

    nome_usuario = obter_subject_token(token)
    if nome_usuario is None:
        raise erro_credencial

    usuario = buscar_usuario(session, nome_usuario)
    if usuario is None:
        raise erro_credencial

    return usuario</pre>
        <pre class="code-block">UsuarioAtualDep = Annotated[
    Usuario,
    Depends(obter_usuario_atual)
]</pre>
        <h3>Conta ativa é outra condição</h3>
        <pre class="code-block">def obter_usuario_atual_ativo(
    usuario_atual: UsuarioAtualDep
):
    if not usuario_atual.ativo:
        raise HTTPException(
            status_code=403,
            detail="Usuário inativo"
        )

    return usuario_atual


UsuarioAtivoDep = Annotated[
    Usuario,
    Depends(obter_usuario_atual_ativo)
]</pre>
        <p>Agora uma rota pode declarar:</p>
        <pre class="code-block">@app.get(
    "/usuarios/me",
    response_model=UsuarioSaida
)
def consultar_meu_usuario(
    usuario_atual: UsuarioAtivoDep
):
    return usuario_atual</pre>
        <div class="flow">Bearer token\n↓\nJWT válido?\n↓\nusuário existe?\n↓\nusuário ativo?\n↓\nROTA recebe Usuario</div>
        <div class="bridge-box"><strong>Autenticação pronta para reutilização.</strong>Agora sabemos quem está fazendo a requisição. O próximo problema é decidir o que essa identidade pode fazer.</div>`
    },
    {
      id: 'capitulo-36',
      number: 36,
      menuTitle: 'Papéis',
      title: 'Estar autenticado não significa poder fazer tudo',
      objective: 'Implementar autorização por papéis e distinguir identidade válida de permissão para executar uma ação.',
      content: `
        <div class="hero-box"><h3>Autenticação responde “quem?”. Autorização responde “pode fazer isto?”.</h3><p>Um atendente pode estar perfeitamente autenticado e mesmo assim não ter permissão para criar administradores ou alterar preços.</p></div>
        <div class="mini-grid">
          <div class="mini-card"><strong>401</strong>Não existe uma identidade autenticada válida.</div>
          <div class="mini-card"><strong>403</strong>A identidade é conhecida, mas não possui permissão para a ação.</div>
        </div>
        <pre class="code-block">class PapelUsuario(str, Enum):
    CLIENTE = "cliente"
    ATENDENTE = "atendente"
    ENTREGADOR = "entregador"
    ADMINISTRADOR = "administrador"</pre>
        <h3>Dependência configurável por papel</h3>
        <pre class="code-block">def exigir_papeis(*papeis_permitidos: PapelUsuario):
    def verificar_papel(
        usuario_atual: UsuarioAtivoDep
    ):
        valores = {
            papel.value
            for papel in papeis_permitidos
        }

        if usuario_atual.papel not in valores:
            raise HTTPException(
                status_code=403,
                detail="Permissão insuficiente"
            )

        return usuario_atual

    return verificar_papel</pre>
        <pre class="code-block">AdministradorDep = Annotated[
    Usuario,
    Depends(
        exigir_papeis(
            PapelUsuario.ADMINISTRADOR
        )
    )
]</pre>
        <p>Uma rota administrativa pode declarar <code class="inline-code">administrador: AdministradorDep</code>. Já uma transição de pedido pode combinar papel, estado atual e ação desejada.</p>
        <div class="flow">JWT válido?\n↓\nusuário ativo?\n↓\ntransição é válida?\n↓\npapel pode executar essa ação?\n↓\nregra de negócio\n↓\nCOMMIT</div>
        <h3>E o primeiro administrador?</h3>
        <p>Existe um problema de inicialização: se <code class="inline-code">POST /usuarios</code> exige administrador, ainda não existe ninguém capaz de criar o primeiro. No laboratório resolveremos isso com um script de bootstrap executado uma única vez, sem senha escrita no código.</p>
        <pre class="code-block"># criar_admin.py
from getpass import getpass
from sqlalchemy import select
from sqlalchemy.orm import Session

from database import engine
from models import Usuario
from security import gerar_hash_senha

with Session(engine) as session:
    existente = session.scalars(
        select(Usuario).where(
            Usuario.papel == "administrador"
        )
    ).first()

    if existente is not None:
        raise SystemExit("Já existe administrador.")

    nome = input("Usuário inicial: ").strip()
    senha = getpass("Senha inicial: ")

    admin = Usuario(
        nome_usuario=nome,
        senha_hash=gerar_hash_senha(senha),
        papel="administrador",
        ativo=True
    )

    session.add(admin)
    session.commit()</pre>
        <div class="note-box"><strong>Bootstrap não é cadastro público.</strong>Depois de criar a primeira conta administrativa, novas contas internas continuam passando pela rota protegida.</div>
        <div class="essence"><strong>Essência</strong>Menor privilégio: cada papel recebe somente as ações necessárias. Administrador não ganha licença para violar regras de estado do negócio.</div>`
    },
    {
      id: 'capitulo-37',
      number: 37,
      menuTitle: 'Propriedade',
      title: 'Este pedido pertence a quem?',
      objective: 'Combinar identidade, papel e propriedade do recurso para impedir que um cliente acesse pedidos de outra pessoa.',
      content: `
        <div class="hero-box"><h3>O papel ainda não responde tudo.</h3><p>Ana pode ter papel <code class="inline-code">cliente</code> e permissão para consultar pedidos. Isso não significa que possa consultar os pedidos de Carlos.</p></div>
        <div class="flow">USUÁRIO\n+\nPAPEL\n+\nRECURSO\n↓\nDECISÃO DE ACESSO</div>
        <h3>Ligando Usuario a Cliente</h3>
        <p>Agora surgiu uma necessidade concreta de relacionar a identidade de acesso ao cadastro de cliente:</p>
        <pre class="code-block">cliente_id: Mapped[int | None] = mapped_column(
    ForeignKey("clientes.id"),
    nullable=True
)

cliente: Mapped["Cliente | None"] = relationship()</pre>
        <p><code class="inline-code">cliente_id</code> é opcional porque atendentes, entregadores e administradores não precisam representar um cliente.</p>
        <pre class="code-block">alembic revision --autogenerate -m "relaciona usuario ao cliente"
alembic upgrade head</pre>
        <h3>Não confie no cliente para declarar a própria identidade</h3>
        <p>Para um usuário cliente, não usamos um <code class="inline-code">cliente_id</code> livremente informado na URL ou no JSON. A API já conhece:</p>
        <div class="flow">JWT\n↓\nUsuario autenticado\n↓\nusuario_atual.cliente_id</div>
        <h3>Filtre no próprio SELECT</h3>
        <pre class="code-block">if (
    usuario_atual.papel
    == PapelUsuario.CLIENTE.value
):
    comando = comando.where(
        Pedido.cliente_id
        == usuario_atual.cliente_id
    )</pre>
        <p>Assim o banco não entrega à operação registros que aquele cliente não precisa enxergar.</p>
        <h3>Pedido específico: 403 ou 404?</h3>
        <p>Para recursos privados de outro cliente, podemos responder <code class="inline-code">404</code> em vez de confirmar que o pedido existe. Essa é uma decisão de segurança: para Ana, “não existe” e “não pertence a você” podem ter a mesma resposta.</p>
        <pre class="code-block">def verificar_acesso_pedido(
    pedido: Pedido,
    usuario_atual: Usuario
):
    if (
        usuario_atual.papel
        == PapelUsuario.CLIENTE.value
    ):
        if (
            usuario_atual.cliente_id is None
            or pedido.cliente_id
            != usuario_atual.cliente_id
        ):
            raise HTTPException(
                status_code=404,
                detail="Pedido não encontrado"
            )
        return pedido

    if usuario_atual.papel in papeis_internos:
        return pedido

    raise HTTPException(
        status_code=403,
        detail="Permissão insuficiente"
    )</pre>
        <p>Autorização pode determinar não apenas se uma rota executa, mas também quais linhas e até quais campos cada papel precisa receber. Um entregador, por exemplo, não precisa automaticamente de todos os dados administrativos do cliente.</p>
        <div class="essence"><strong>Essência</strong>Decisões reais de autorização podem combinar identidade, papel, propriedade, estado e ação. “Está autenticado” nunca significa “pode acessar tudo”.</div>`
    },
    {
      id: 'capitulo-38',
      number: 38,
      menuTitle: 'Configuração segura',
      title: 'Segredos não pertencem ao código',
      objective: 'Organizar SECRET_KEY, URL do banco e demais configurações com pydantic-settings e .env sem versionar segredos.',
      content: `
        <div class="hero-box"><h3>A segurança não pode depender de um comando manual esquecido.</h3><p>Até aqui usamos uma variável <code class="inline-code">SECRET_KEY</code> no terminal. Isso ensinou o princípio correto — segredo fora do código — mas o projeto agora precisa de uma configuração organizada e reproduzível.</p></div>
        <h3>Configuração e código têm ciclos diferentes</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Código</strong>Rotas, modelos, regras e funções que queremos versionar.</div>
          <div class="mini-card"><strong>Configuração</strong>URL do banco, chave secreta e valores que podem mudar entre ambientes.</div>
        </div>
        <pre class="code-block">python -m pip install pydantic-settings python-dotenv</pre>
        <h3>Crie config.py</h3>
        <pre class="code-block">from pydantic_settings import (
    BaseSettings,
    SettingsConfigDict
)


class Settings(BaseSettings):
    database_url: str = "sqlite:///./agua_gas.db"
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()</pre>
        <p>O Pydantic lê valores externos, converte tipos e valida a configuração. Uma variável real do ambiente pode substituir o valor equivalente do arquivo <code class="inline-code">.env</code>.</p>
        <h3>Arquivo .env</h3>
        <pre class="code-block">DATABASE_URL=sqlite:///./agua_gas.db
SECRET_KEY=SUA_CHAVE_ALEATORIA_REAL
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30</pre>
        <div class="danger-box"><strong>.env não vai para o Git.</strong>Acrescente-o ao <code class="inline-code">.gitignore</code>. Se uma chave real já tiver sido publicada, apenas apagar o arquivo do commit seguinte não resolve: considere o segredo comprometido e gere outro.</div>
        <pre class="code-block">.env
.venv/
__pycache__/
*.pyc
agua_gas.db</pre>
        <h3>Mas como outro desenvolvedor sabe quais variáveis existem?</h3>
        <p>Podemos versionar um arquivo sem segredos, por exemplo <code class="inline-code">.env.example</code>:</p>
        <pre class="code-block">DATABASE_URL=sqlite:///./agua_gas.db
SECRET_KEY=GERAR_UMA_CHAVE_LOCAL
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30</pre>
        <p>O exemplo documenta nomes e formato. O <code class="inline-code">.env</code> real continua privado.</p>
        <h3>Database e segurança passam a usar a mesma fonte</h3>
        <pre class="code-block"># database.py
from config import settings

engine = create_engine(
    settings.database_url,
    echo=True
)</pre>
        <pre class="code-block"># security.py
from config import settings

# ...

token = jwt.encode(
    dados_token,
    settings.secret_key,
    algorithm=settings.algorithm
)</pre>
        <p>Não espalhamos cópias de <code class="inline-code">SECRET_KEY</code>, algoritmo ou tempo de expiração pelo projeto.</p>
        <h3>Configuração segura não significa colocar tudo no .env</h3>
        <p>O arquivo dotenv é uma conveniência local. Em produção, a mesma aplicação pode receber valores por variáveis de ambiente ou pelo mecanismo de segredos da infraestrutura. O código continua lendo a mesma interface de configuração.</p>
        <h3>O que construímos no Bloco 5</h3>
        <div class="flow">Usuario persistente\n↓\nhash Argon2\n↓\nlogin\n↓\nBearer token\n↓\nJWT assinado + expiração\n↓\nusuário atual\n↓\nconta ativa\n↓\npapéis\n↓\nmenor privilégio\n↓\npropriedade do recurso\n↓\nconfiguração e segredos externos</div>
        <h3>A próxima necessidade</h3>
        <p>Agora temos uma API com dados persistentes e rotas protegidas. Precisamos provar que ela continua funcionando quando evolui. No próximo bloco entram testes automatizados, integração entre componentes e comportamento observável.</p>
        <div class="bridge-box"><strong>Bloco 5 concluído.</strong>O próximo bloco será Integração e testes: TestClient/HTTPX, pytest, dependências substituíveis, CORS quando houver frontend separado e validação do comportamento da API.</div>
        <div class="essence"><strong>Essência</strong>Segredo não é código. Configuração deve ser externa, validada e centralizada. Segurança é uma cadeia: senha protegida, autenticação, token verificável, usuário atual, autorização e menor privilégio.</div>`
    }
  ]
});
