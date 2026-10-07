window.backendFastapiVisuals = {
  'capitulo-06': `
    <section class="backend-visual" aria-labelledby="visual-docs-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Visualize antes de continuar</span>
        <h3 id="visual-docs-title">Como o /docs organiza a API</h3>
        <p>O Swagger UI transforma o contrato OpenAPI em uma interface navegável. Cada linha representa uma operação que outro programa pode descobrir e testar.</p>
      </div>
      <div class="swagger-mock" role="img" aria-label="Ilustração de uma documentação Swagger UI com endpoints GET produtos e POST pedidos">
        <div class="mock-browser-bar"><span></span><span></span><span></span><div>127.0.0.1:8000/docs</div></div>
        <div class="swagger-brand"><strong>FastAPI</strong><span>OpenAPI 3.x</span></div>
        <div class="swagger-route get"><b>GET</b><code>/produtos</code><span>Listar produtos</span></div>
        <div class="swagger-route get"><b>GET</b><code>/produtos/{produto_id}</code><span>Consultar produto</span></div>
        <div class="swagger-route post"><b>POST</b><code>/pedidos</code><span>Criar pedido</span></div>
      </div>
      <p class="visual-caption"><strong>O ponto principal:</strong> o aluno não precisa imaginar o que significa “documentação interativa”; ele consegue reconhecer visualmente métodos, rotas e operações.</p>
    </section>`,

  'capitulo-23': `
    <section class="backend-visual" aria-labelledby="visual-relacoes-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Mapa das relações</span>
        <h3 id="visual-relacoes-title">Um pedido conecta várias entidades</h3>
        <p>As tabelas não estão soltas. As chaves estrangeiras representam relações que já existiam no mundo real do estabelecimento.</p>
      </div>
      <div class="relation-map" role="img" aria-label="Diagrama Cliente possui Pedidos, Pedido possui Itens e Item referencia Produto">
        <div class="relation-node customer"><span>CLIENTE</span><strong>Ana</strong><small>id = 7</small></div>
        <div class="relation-arrow"><b>1</b><span>→</span><b>N</b><small>faz</small></div>
        <div class="relation-node order"><span>PEDIDO</span><strong>#1042</strong><small>cliente_id = 7</small></div>
        <div class="relation-arrow"><b>1</b><span>→</span><b>N</b><small>possui</small></div>
        <div class="relation-node item"><span>ITEM</span><strong>2 unidades</strong><small>produto_id = 3</small></div>
        <div class="relation-arrow"><b>N</b><span>→</span><b>1</b><small>referencia</small></div>
        <div class="relation-node product"><span>PRODUTO</span><strong>Água 20 L</strong><small>id = 3</small></div>
      </div>
      <p class="visual-caption"><strong>Leia da esquerda para a direita:</strong> um cliente pode fazer vários pedidos; um pedido possui vários itens; cada item referencia um produto.</p>
    </section>`,

  'capitulo-34': `
    <section class="backend-visual" aria-labelledby="visual-jwt-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Segurança em uma imagem</span>
        <h3 id="visual-jwt-title">Do login até a rota protegida</h3>
        <p>O JWT não é a senha viajando pela rede. Ele é um token assinado que carrega informações mínimas para identificar a sessão do usuário.</p>
      </div>
      <div class="auth-journey" role="img" aria-label="Fluxo visual de login, geração de JWT, cabeçalho Bearer e validação de rota protegida">
        <div class="auth-step"><span class="auth-number">1</span><strong>Login</strong><small>usuário + senha</small></div>
        <div class="auth-link">→</div>
        <div class="auth-step"><span class="auth-number">2</span><strong>API valida</strong><small>hash Argon2</small></div>
        <div class="auth-link">→</div>
        <div class="jwt-card"><span>JWT</span><div><b>header</b><b>payload</b><b>signature</b></div><small>sub + exp</small></div>
        <div class="auth-link">→</div>
        <div class="auth-step bearer"><span class="auth-number">3</span><strong>Bearer</strong><small>Authorization</small></div>
        <div class="auth-link">→</div>
        <div class="auth-step protected"><span class="auth-number">4</span><strong>Rota protegida</strong><small>identidade + papel</small></div>
      </div>
      <div class="jwt-warning"><strong>JWT assinado ≠ conteúdo secreto.</strong><span>O payload pode ser lido. A assinatura serve para detectar alteração e validar autenticidade segundo a chave usada pela aplicação.</span></div>
    </section>`,

  'capitulo-45': `
    <section class="backend-visual frontend-lab" aria-labelledby="frontend-lab-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Laboratório final</span>
        <h3 id="frontend-lab-title">Agora uma tela de verdade conversa com nossa API</h3>
        <p>Não vamos iniciar um curso de frontend. A meta é enxergar, em uma única experiência, o caminho completo: interface → fetch → FastAPI → banco → resposta → interface.</p>
      </div>

      <div class="frontend-preview" role="img" aria-label="Prévia de uma interface web para Água e Gás com login, status de sessão, botões e lista de produtos">
        <div class="frontend-preview-top">
          <div class="frontend-brand"><span class="brand-drop">AG</span><div><strong>Água & Gás</strong><small>Utilidades e entregas</small></div></div>
          <span class="preview-api-status"><i></i> API local</span>
        </div>
        <div class="frontend-preview-grid">
          <div class="preview-login-card">
            <span class="preview-eyebrow">Área segura</span>
            <h4>Entrar no sistema</h4>
            <label>Usuário<div class="preview-input">admin</div></label>
            <label>Senha<div class="preview-input password">••••••••</div></label>
            <button type="button" tabindex="-1">Entrar</button>
            <div class="preview-session"><i></i><span>Não autenticado</span></div>
          </div>
          <div class="preview-products-card">
            <div class="preview-actions"><div><span>Catálogo</span><strong>Produtos disponíveis</strong></div><div><button type="button" tabindex="-1">Carregar produtos</button><button type="button" tabindex="-1" class="ghost">Minha conta</button></div></div>
            <div class="preview-product-list">
              <article><div class="product-icon water">20L</div><div><strong>Água mineral 20 L</strong><small>Estoque: 12</small></div><b>R$ 18,00</b></article>
              <article><div class="product-icon gas">P13</div><div><strong>Botijão P13</strong><small>Estoque: 7</small></div><b>R$ 115,00</b></article>
              <article><div class="product-icon util">+</div><div><strong>Bomba manual</strong><small>Estoque: 8</small></div><b>R$ 19,90</b></article>
            </div>
          </div>
        </div>
      </div>

      <div class="concept-box"><strong>Por que esta interface entra somente agora?</strong> Porque neste ponto já entendemos API, banco, autenticação, CORS e testes. O frontend deixa de ser uma “tela bonita” e passa a mostrar conceitos que o aluno já sabe explicar.</div>

      <h3>1. Crie uma pasta para o frontend</h3>
      <div class="flow">agua-gas-api/
├── main.py
├── database.py
├── models.py
└── frontend/
    ├── index.html
    ├── style.css
    └── app.js</div>

      <h3>2. index.html — a estrutura da tela</h3>
      <pre class="code-block">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Água &amp; Gás — Cliente da API&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="app-shell"&gt;
    &lt;header class="topbar"&gt;
      &lt;div class="brand"&gt;
        &lt;span class="brand-mark"&gt;AG&lt;/span&gt;
        &lt;div&gt;
          &lt;strong&gt;Água &amp; Gás&lt;/strong&gt;
          &lt;small&gt;Utilidades e entregas&lt;/small&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;span class="api-badge"&gt;API local&lt;/span&gt;
    &lt;/header&gt;

    &lt;main class="dashboard"&gt;
      &lt;section class="login-card"&gt;
        &lt;span class="eyebrow"&gt;Área segura&lt;/span&gt;
        &lt;h1&gt;Entrar no sistema&lt;/h1&gt;
        &lt;p&gt;Use um usuário já cadastrado na API.&lt;/p&gt;

        &lt;form id="loginForm"&gt;
          &lt;label&gt;
            Usuário
            &lt;input id="usuario" autocomplete="username" required&gt;
          &lt;/label&gt;

          &lt;label&gt;
            Senha
            &lt;input id="senha" type="password" autocomplete="current-password" required&gt;
          &lt;/label&gt;

          &lt;button type="submit"&gt;Entrar&lt;/button&gt;
        &lt;/form&gt;

        &lt;div class="session-line"&gt;
          &lt;span id="statusDot" class="status-dot"&gt;&lt;/span&gt;
          &lt;span id="statusText"&gt;Não autenticado&lt;/span&gt;
        &lt;/div&gt;
        &lt;p id="mensagem" class="mensagem" role="status"&gt;&lt;/p&gt;
      &lt;/section&gt;

      &lt;section class="content-card"&gt;
        &lt;div class="content-head"&gt;
          &lt;div&gt;
            &lt;span class="eyebrow"&gt;Catálogo&lt;/span&gt;
            &lt;h2&gt;Produtos disponíveis&lt;/h2&gt;
          &lt;/div&gt;
          &lt;div class="actions"&gt;
            &lt;button id="btnProdutos" type="button"&gt;Carregar produtos&lt;/button&gt;
            &lt;button id="btnPerfil" class="secondary" type="button"&gt;Minha conta&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div id="resultado" class="result-grid"&gt;
          &lt;p class="empty-state"&gt;Use os botões acima para conversar com a API.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  &lt;/div&gt;

  &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

      <h3>3. style.css — uma tela simples, mas bem cuidada</h3>
      <pre class="code-block">* {
  box-sizing: border-box;
}

:root {
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  color: #172033;
  background: #eef4fb;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, #dbeafe 0, transparent 36%),
    linear-gradient(135deg, #edf5ff, #f8fafc 55%, #ecfdf5);
}

button,
input {
  font: inherit;
}

.app-shell {
  width: min(1120px, calc(100% - 28px));
  margin: 28px auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #1967d2;
  color: white;
  font-weight: 900;
}

.brand strong,
.brand small {
  display: block;
}

.brand small {
  margin-top: 2px;
  color: #64748b;
}

.api-badge {
  padding: 7px 11px;
  border: 1px solid #a7d7c5;
  border-radius: 999px;
  background: #ecfdf5;
  color: #087f5b;
  font-size: 12px;
  font-weight: 800;
}

.dashboard {
  display: grid;
  grid-template-columns: minmax(260px, .72fr) minmax(0, 1.6fr);
  gap: 18px;
}

.login-card,
.content-card {
  border: 1px solid #d8e2ef;
  border-radius: 20px;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 18px 50px rgba(15, 23, 42, .09);
}

.login-card {
  padding: 24px;
}

.content-card {
  padding: 22px;
}

.eyebrow {
  color: #1967d2;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 5px 0 8px;
  color: #123d73;
}

.login-card p {
  color: #64748b;
}

label {
  display: grid;
  gap: 6px;
  margin: 14px 0;
  color: #42536a;
  font-size: 13px;
  font-weight: 800;
}

input {
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #cbd8e8;
  border-radius: 10px;
  background: #f8fbff;
  outline: none;
}

input:focus {
  border-color: #1967d2;
  box-shadow: 0 0 0 3px rgba(25, 103, 210, .12);
}

button {
  border: 0;
  border-radius: 10px;
  padding: 10px 14px;
  background: #1967d2;
  color: white;
  font-weight: 850;
  cursor: pointer;
}

button:hover {
  filter: brightness(.96);
}

button.secondary {
  border: 1px solid #b9cee8;
  background: white;
  color: #174d8d;
}

#loginForm button {
  width: 100%;
  margin-top: 4px;
}

.session-line {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 16px;
  color: #64748b;
  font-size: 12px;
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #94a3b8;
}

.status-dot.online {
  background: #10b981;
  box-shadow: 0 0 0 4px #d1fae5;
}

.mensagem {
  min-height: 20px;
  margin: 10px 0 0 !important;
  font-size: 12px;
}

.mensagem.erro {
  color: #b42318;
}

.content-head {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  margin-bottom: 17px;
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.result-grid {
  display: grid;
  gap: 10px;
}

.product-card,
.profile-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 14px;
  border: 1px solid #dbe5f0;
  border-radius: 13px;
  background: #f8fbff;
}

.product-card strong,
.product-card small,
.profile-card strong,
.profile-card small {
  display: block;
}

.product-card small,
.profile-card small,
.empty-state {
  color: #64748b;
}

.price {
  color: #087f5b;
  font-weight: 900;
}

.empty-state {
  padding: 34px 10px;
  text-align: center;
}

@media (max-width: 760px) {
  .app-shell {
    width: min(100% - 18px, 620px);
    margin: 16px auto;
  }

  .dashboard {
    grid-template-columns: 1fr;
  }

  .content-head {
    align-items: flex-start;
    flex-direction: column;
  }
}</pre>

      <h3>4. app.js — o frontend começa a conversar</h3>
      <pre class="code-block">const API_URL = 'http://127.0.0.1:8000';
let accessToken = '';

const loginForm = document.querySelector('#loginForm');
const usuarioInput = document.querySelector('#usuario');
const senhaInput = document.querySelector('#senha');
const btnProdutos = document.querySelector('#btnProdutos');
const btnPerfil = document.querySelector('#btnPerfil');
const resultado = document.querySelector('#resultado');
const mensagem = document.querySelector('#mensagem');
const statusDot = document.querySelector('#statusDot');
const statusText = document.querySelector('#statusText');

function mostrarMensagem(texto, erro = false) {
  mensagem.textContent = texto;
  mensagem.classList.toggle('erro', erro);
}

function atualizarSessao(autenticado, nome = '') {
  statusDot.classList.toggle('online', autenticado);
  statusText.textContent = autenticado
    ? 'Autenticado como ' + nome
    : 'Não autenticado';
}

function limparResultado() {
  resultado.replaceChildren();
}

function criarTextoVazio(texto) {
  const p = document.createElement('p');
  p.className = 'empty-state';
  p.textContent = texto;
  resultado.appendChild(p);
}

function formatarPreco(valor) {
  const numero = Number(valor);
  if (Number.isNaN(numero)) return String(valor);

  return numero.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function mostrarProdutos(produtos) {
  limparResultado();

  if (!Array.isArray(produtos) || produtos.length === 0) {
    criarTextoVazio('Nenhum produto encontrado.');
    return;
  }

  produtos.forEach((produto) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const info = document.createElement('div');
    const nome = document.createElement('strong');
    const detalhes = document.createElement('small');
    const preco = document.createElement('span');

    nome.textContent = produto.nome;
    detalhes.textContent = 'Estoque: ' + produto.estoque + ' · ' + produto.categoria;
    preco.className = 'price';
    preco.textContent = formatarPreco(produto.preco);

    info.append(nome, detalhes);
    card.append(info, preco);
    resultado.appendChild(card);
  });
}

async function entrar(event) {
  event.preventDefault();
  mostrarMensagem('Entrando...');

  const body = new URLSearchParams();
  body.append('username', usuarioInput.value.trim());
  body.append('password', senhaInput.value);

  try {
    const response = await fetch(API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    });

    const dados = await response.json();

    if (!response.ok) {
      accessToken = '';
      atualizarSessao(false);
      mostrarMensagem(dados.detail || 'Não foi possível entrar.', true);
      return;
    }

    accessToken = dados.access_token;
    atualizarSessao(true, usuarioInput.value.trim());
    mostrarMensagem('Login realizado. O JWT ficou apenas na memória desta página.');
    senhaInput.value = '';
  } catch (erro) {
    mostrarMensagem('Não foi possível alcançar a API. Ela está executando?', true);
  }
}

async function carregarProdutos() {
  limparResultado();
  criarTextoVazio('Carregando produtos...');

  try {
    const response = await fetch(API_URL + '/produtos');
    const dados = await response.json();

    if (!response.ok) {
      criarTextoVazio(dados.detail || 'Falha ao consultar produtos.');
      return;
    }

    mostrarProdutos(dados);
  } catch (erro) {
    limparResultado();
    criarTextoVazio('Não foi possível alcançar a API.');
  }
}

async function carregarPerfil() {
  limparResultado();

  if (!accessToken) {
    criarTextoVazio('Faça login antes de consultar Minha conta.');
    return;
  }

  try {
    const response = await fetch(API_URL + '/usuarios/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });

    const dados = await response.json();

    if (!response.ok) {
      criarTextoVazio(dados.detail || 'Não foi possível consultar o perfil.');
      return;
    }

    const card = document.createElement('article');
    card.className = 'profile-card';

    const info = document.createElement('div');
    const nome = document.createElement('strong');
    const papel = document.createElement('small');

    nome.textContent = dados.nome_usuario;
    papel.textContent = 'Papel atual: ' + dados.papel;

    info.append(nome, papel);
    card.appendChild(info);
    resultado.appendChild(card);
  } catch (erro) {
    criarTextoVazio('Não foi possível alcançar a API.');
  }
}

loginForm.addEventListener('submit', entrar);
btnProdutos.addEventListener('click', carregarProdutos);
btnPerfil.addEventListener('click', carregarPerfil);</pre>

      <h3>5. Execute backend e frontend separadamente</h3>
      <p>No primeiro CMD, na pasta da API:</p>
      <pre class="code-block">fastapi dev main.py</pre>
      <p>No segundo CMD, entre na pasta <code class="inline-code">frontend</code> e sirva os arquivos:</p>
      <pre class="code-block">cd frontend
python -m http.server 5500</pre>
      <p>Depois abra <code class="inline-code">http://localhost:5500</code>. A origem coincide com aquela que configuramos no capítulo de CORS.</p>

      <div class="mini-grid">
        <div class="mini-card"><strong>Carregar produtos</strong>Faz <code class="inline-code">GET /produtos</code> e transforma o JSON em cartões na tela.</div>
        <div class="mini-card"><strong>Entrar</strong>Faz <code class="inline-code">POST /login</code> como formulário e recebe o access token.</div>
        <div class="mini-card"><strong>Minha conta</strong>Faz <code class="inline-code">GET /usuarios/me</code> com <code class="inline-code">Authorization: Bearer ...</code>.</div>
        <div class="mini-card"><strong>Atualizar a página</strong>Apaga o token, porque neste laboratório ele fica somente em memória.</div>
      </div>

      <div class="note-box"><strong>Escolha didática, não arquitetura definitiva de sessão.</strong> Guardamos o JWT apenas em uma variável para manter o laboratório transparente. Persistência de sessão no navegador, cookies seguros, renovação de token e outras estratégias são assuntos posteriores e envolvem decisões próprias de segurança.</div>

      <div class="flow">CAMPO E BOTÃO
↓
JavaScript / fetch()
↓
HTTP + CORS
↓
FASTAPI
↓
AUTENTICAÇÃO / REGRA / BANCO
↓
JSON
↓
JavaScript
↓
TELA ATUALIZADA</div>
    </section>`
};
