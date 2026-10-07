window.backendFastapiBlocks = window.backendFastapiBlocks || [];

window.backendFastapiBlocks.push({
  id: 'bloco-2',
  menuTitle: '2. Primeira API',
  title: 'Bloco 2 — Nossa API começa a funcionar',
  lessons: [
    {
      id: 'capitulo-05',
      number: 5,
      menuTitle: 'Primeiro GET',
      title: 'Fazendo Python responder',
      objective: 'Preparar um ambiente simples, iniciar o FastAPI e transformar GET /produtos no primeiro endpoint funcionando.',
      content: `
        <div class="hero-box"><h3>Até agora, nossa API existia apenas no papel</h3><p>Chegou a hora de fazer um programa realmente receber uma requisição e devolver uma resposta.</p></div>

        <h3>Preparando o laboratório</h3>
        <p>Crie uma pasta chamada <code class="inline-code">agua-gas-api</code> e abra o CMD nela. Cada projeto pode ter seu próprio ambiente virtual para manter dependências separadas.</p>
        <pre class="code-block">python -m venv .venv
.venv\Scripts\activate
python -m pip install "fastapi[standard]"</pre>
        <p>Se o seu Windows utiliza <code class="inline-code">py</code> no lugar de <code class="inline-code">python</code>, adapte os comandos.</p>

        <h3>Nosso primeiro arquivo</h3>
        <p>Crie <code class="inline-code">main.py</code>:</p>
        <pre class="code-block">from fastapi import FastAPI

app = FastAPI()

produtos = [
    {"id": 1, "nome": "Água mineral 20 L", "preco": 18.00},
    {"id": 2, "nome": "Botijão P13", "preco": 115.00},
    {"id": 3, "nome": "Bomba elétrica para galão", "preco": 35.00}
]


@app.get("/produtos")
def listar_produtos():
    return produtos</pre>

        <h3>Leia o endpoint</h3>
        <p><code class="inline-code">@app.get("/produtos")</code> diz ao FastAPI que existe uma operação GET no caminho <code class="inline-code">/produtos</code>. Quando ela for chamada, a função <code class="inline-code">listar_produtos()</code> será executada.</p>

        <h3>Colocando o servidor para funcionar</h3>
        <pre class="code-block">fastapi dev main.py</pre>
        <p>O servidor de desenvolvimento normalmente ficará disponível em <code class="inline-code">http://127.0.0.1:8000</code>. O endereço <code class="inline-code">127.0.0.1</code> representa a própria máquina; <code class="inline-code">8000</code> é a porta usada pelo servidor.</p>

        <h3>Faça a primeira requisição</h3>
        <p>Acesse <code class="inline-code">http://127.0.0.1:8000/produtos</code>.</p>
        <div class="flow">NAVEGADOR / CLIENTE
      ↓
GET /produtos
      ↓
FASTAPI / SERVIDOR
      ↓
listar_produtos()
      ↓
return produtos
      ↓
RESPOSTA HTTP / JSON</div>

        <div class="task-box"><strong>Prever → executar → observar → comparar:</strong> acrescente um quarto produto, salve o arquivo e preveja o que aparecerá antes de atualizar o navegador.</div>
        <p>Para encerrar o servidor, volte ao CMD e pressione <code class="inline-code">Ctrl + C</code>.</p>

        <div class="essence"><strong>Essência</strong>Um endpoint associa uma operação HTTP a uma função do nosso programa. O FastAPI recebe a requisição, executa a função e prepara a resposta.</div>`
    },
    {
      id: 'capitulo-06',
      number: 6,
      menuTitle: 'OpenAPI e docs',
      title: 'Como outro programador descobre o que nossa API oferece?',
      objective: 'Entender por que uma API precisa de contrato e como FastAPI, OpenAPI, Swagger UI e ReDoc se conectam.',
      content: `
        <div class="hero-box"><h3>Funciona. Mas só nós sabemos como usar.</h3><p>Quando outro programador integrar um aplicativo à API, ele precisará descobrir métodos, caminhos, parâmetros, dados de entrada e respostas possíveis.</p></div>

        <h3>Uma API precisa explicar como deve ser usada</h3>
        <p>Com o servidor ativo, abra <code class="inline-code">http://127.0.0.1:8000/docs</code>. O FastAPI já apresenta <code class="inline-code">GET /produtos</code> e permite testá-lo.</p>
        <p><code class="inline-code">/docs</code> não é outra API. É uma interface para explorar e testar a API existente.</p>

        <h3>Swagger UI e OpenAPI</h3>
        <p>A interface de <code class="inline-code">/docs</code> usa Swagger UI. Para saber o que mostrar, ela utiliza uma descrição estruturada da API produzida segundo o padrão <strong>OpenAPI</strong>.</p>
        <div class="flow">Código FastAPI
      ↓
Schema OpenAPI
/openapi.json
      ↓
Swagger UI
/docs</div>
        <p>Abra também <code class="inline-code">/openapi.json</code>. Não tente decorar o arquivo: procure apenas por <code class="inline-code">/produtos</code> e reconheça que o contrato está sendo descrito ali.</p>
        <p>Outra visualização automática fica em <code class="inline-code">/redoc</code>.</p>

        <h3>Dê identidade à aplicação</h3>
        <pre class="code-block">app = FastAPI(
    title="API Água & Gás",
    description="API para gerenciamento de produtos e pedidos.",
    version="1.0.0"
)</pre>
        <p>Salve e observe a documentação novamente.</p>

        <div class="note-box"><strong>Documentação não substitui entendimento.</strong> Ao clicar em Try it out e Execute, continue enxergando por trás da interface: cliente → requisição HTTP → endpoint → backend → resposta.</div>
        <div class="essence"><strong>Essência</strong>OpenAPI descreve o contrato da API. FastAPI usa essa descrição para gerar documentação interativa e mantê-la conectada ao código.</div>`
    },
    {
      id: 'capitulo-07',
      number: 7,
      menuTitle: 'Parâmetros',
      title: 'Qual produto você está procurando?',
      objective: 'Fazer nascer path parameters e query parameters a partir de consultas específicas e filtros.',
      content: `
        <div class="hero-box"><h3>Ver todos nem sempre é suficiente</h3><p>Se o aplicativo já sabe que o Botijão P13 tem identificador 2, não faz sentido baixar todos os produtos apenas para encontrá-lo.</p></div>

        <h3>Identificando um produto no caminho</h3>
        <pre class="code-block">@app.get("/produtos/{produto_id}")
def buscar_produto(produto_id: int):
    for produto in produtos:
        if produto["id"] == produto_id:
            return produto</pre>
        <p>Agora <code class="inline-code">GET /produtos/2</code> usa <code class="inline-code">2</code> como <strong>path parameter</strong>, ou parâmetro de caminho.</p>
        <p>A anotação <code class="inline-code">produto_id: int</code> também informa ao FastAPI qual tipo esperamos. Teste <code class="inline-code">/produtos/abc</code> e observe a validação.</p>

        <h3>E se quisermos filtrar?</h3>
        <p>Acrescente uma categoria aos produtos e altere a listagem:</p>
        <pre class="code-block">@app.get("/produtos")
def listar_produtos(categoria: str | None = None):
    if categoria is None:
        return produtos

    resultado = []
    for produto in produtos:
        if produto["categoria"] == categoria:
            resultado.append(produto)
    return resultado</pre>
        <p>Agora podemos usar <code class="inline-code">/produtos?categoria=agua</code>. A parte após <code class="inline-code">?</code> é um <strong>query parameter</strong>.</p>

        <div class="mini-grid">
          <div class="mini-card"><strong>Path parameter</strong><code class="inline-code">/produtos/2</code><br>Ajuda a identificar qual recurso queremos.</div>
          <div class="mini-card"><strong>Query parameter</strong><code class="inline-code">/produtos?categoria=agua</code><br>Acrescenta critérios à consulta.</div>
        </div>
        <p>Mais de um parâmetro de consulta pode ser separado por <code class="inline-code">&amp;</code>, como <code class="inline-code">?categoria=agua&amp;limite=2</code>.</p>

        <div class="danger-box"><strong>Problema guardado:</strong> o que deveria acontecer em <code class="inline-code">/produtos/999</code>? Ainda precisamos aprender a responder corretamente quando algo não existe.</div>
        <div class="essence"><strong>Essência</strong>Path parameters ajudam a identificar recursos no caminho; query parameters acrescentam critérios a uma consulta.</div>`
    },
    {
      id: 'capitulo-08',
      number: 8,
      menuTitle: 'POST e body',
      title: 'Um cliente fez um pedido',
      objective: 'Enviar dados ao servidor usando POST, corpo da requisição, JSON e um primeiro modelo Pydantic.',
      content: `
        <div class="hero-box"><h3>Consultar era apenas o começo</h3><p>Quando o cliente toca em Finalizar pedido, ele não quer apenas receber dados. Precisa enviar informações para que o servidor crie algo novo.</p></div>

        <h3>O corpo da requisição</h3>
        <p>Um pedido possui vários dados. Em vez de tentar colocar tudo na URL, podemos enviá-los no <strong>request body</strong>:</p>
        <pre class="code-block">{
  "cliente": "Ana Martins",
  "produto_id": 2,
  "quantidade": 1,
  "endereco": "Rua das Flores, 120"
}</pre>

        <h3>POST</h3>
        <p><code class="inline-code">GET</code> combina com a intenção de consultar. Para criar um novo pedido, utilizaremos:</p>
        <pre class="code-block">POST /pedidos</pre>

        <h3>Descrevendo os dados com Pydantic</h3>
        <pre class="code-block">from pydantic import BaseModel

class PedidoEntrada(BaseModel):
    cliente: str
    produto_id: int
    quantidade: int
    endereco: str

pedidos = []</pre>
        <p>O modelo descreve a estrutura que esperamos receber.</p>

        <h3>Criando o endpoint</h3>
        <pre class="code-block">@app.post("/pedidos")
def criar_pedido(pedido: PedidoEntrada):
    novo_pedido = pedido.model_dump()
    novo_pedido["id"] = len(pedidos) + 1
    pedidos.append(novo_pedido)
    return novo_pedido</pre>
        <p><code class="inline-code">model_dump()</code> produz um dicionário Python com os dados do modelo. O identificador está sendo gerado de forma simples apenas porque ainda não temos banco de dados.</p>

        <h3>Teste pelo /docs</h3>
        <p>Abra <code class="inline-code">POST /pedidos</code>, use Try it out e envie o JSON do exemplo.</p>
        <div class="flow">CLIENTE
   ↓
POST /pedidos
   ↓
BODY em JSON
   ↓
PedidoEntrada / Pydantic
   ↓
criar_pedido()
   ↓
lista pedidos
   ↓
RESPOSTA</div>

        <div class="task-box"><strong>Experimente:</strong> envie <code class="inline-code">"produto_id": "dois"</code>, depois retire o endereço e observe como a API reage.</div>
        <div class="essence"><strong>Essência</strong>POST permite enviar dados para criar um recurso. O corpo da requisição carrega os dados e Pydantic descreve a estrutura esperada.</div>`
    },
    {
      id: 'capitulo-09',
      number: 9,
      menuTitle: 'Validação',
      title: 'O dado tem o tipo certo. Mas faz sentido?',
      objective: 'Distinguir tipo, restrição estrutural e regra de negócio, usando Field para validar dados de entrada.',
      content: `
        <div class="hero-box"><h3>Um pedido tecnicamente válido pode estar errado</h3><p><code class="inline-code">-5</code> é um inteiro válido para Python. Mas pedir menos cinco botijões não faz sentido para o negócio.</p></div>

        <h3>Tipo e validade não são a mesma coisa</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Tipo</strong><code class="inline-code">"dois"</code> não atende a um campo inteiro.</div>
          <div class="mini-card"><strong>Valor</strong><code class="inline-code">-5</code> é inteiro, mas viola a regra de quantidade.</div>
        </div>

        <h3>Field</h3>
        <pre class="code-block">from pydantic import BaseModel, Field

class PedidoEntrada(BaseModel):
    cliente: str = Field(min_length=2)
    produto_id: int = Field(gt=0)
    quantidade: int = Field(gt=0)
    endereco: str = Field(min_length=5)
    observacao: str | None = None</pre>
        <p><code class="inline-code">gt=0</code> significa greater than zero: maior que zero. <code class="inline-code">min_length</code> define um tamanho mínimo para o texto.</p>

        <h3>Obrigatório e opcional</h3>
        <p>Campos sem valor padrão são obrigatórios. Já <code class="inline-code">observacao: str | None = None</code> permite que a informação não seja enviada.</p>

        <h3>Validação estrutural não é toda a regra do negócio</h3>
        <p><code class="inline-code">produto_id = 999</code> é um inteiro maior que zero e pode passar pelo Pydantic. Para descobrir se o produto 999 existe, precisamos consultar os dados do sistema.</p>
        <div class="term-grid">
          <div class="head">Validação estrutural</div><div class="head">Regra do sistema</div>
          <div>É inteiro? É maior que zero? Campo obrigatório chegou?</div><div>Produto existe? Há estoque? Pedido pode ser cancelado?</div>
        </div>

        <h3>O primeiro contato com 422</h3>
        <p>Quando os dados enviados não atendem à validação esperada, o FastAPI normalmente responde com <code class="inline-code">422</code>. Não precisamos decorar o número; precisamos entender que a requisição não satisfez o contrato de entrada.</p>

        <div class="essence"><strong>Essência</strong>Pydantic pode validar tipos e restrições dos campos antes da lógica principal. Regras que dependem do estado do sistema continuam pertencendo à lógica da aplicação.</div>`
    },
    {
      id: 'capitulo-10',
      number: 10,
      menuTitle: 'Contrato de saída',
      title: 'O que entra e o que sai da API',
      objective: 'Separar modelos de entrada e saída e usar response_model para documentar, validar e filtrar aquilo que a API devolve.',
      content: `
        <div class="hero-box"><h3>Validamos o que entra. E o que sai?</h3><p>Nosso endpoint devolve um dicionário interno. À medida que o sistema crescer, nem todo dado usado pelo backend deverá necessariamente ser enviado ao cliente.</p></div>

        <h3>O contrato existe nos dois sentidos</h3>
        <div class="flow">CLIENTE
   ↓
PedidoEntrada
   ↓
BACKEND
   ↓
PedidoSaida
   ↓
CLIENTE</div>
        <p>O modelo de entrada descreve aquilo que aceitamos. Um modelo de saída pode descrever aquilo que prometemos devolver.</p>

        <h3>Criando um modelo de saída</h3>
        <pre class="code-block">class PedidoSaida(BaseModel):
    id: int
    cliente: str
    produto_id: int
    quantidade: int
    endereco: str
    observacao: str | None = None</pre>

        <h3>Declarando a resposta</h3>
        <pre class="code-block">@app.post(
    "/pedidos",
    response_model=PedidoSaida,
    status_code=201
)
def criar_pedido(pedido: PedidoEntrada):
    novo_pedido = pedido.model_dump()
    novo_pedido["id"] = len(pedidos) + 1
    pedidos.append(novo_pedido)
    return novo_pedido</pre>
        <p>O parâmetro <code class="inline-code">response_model</code> diz ao FastAPI qual formato deve representar a resposta dessa operação. Ele também melhora a documentação OpenAPI e pode filtrar campos extras que não fazem parte do modelo declarado.</p>

        <h3>Por que separar entrada e saída?</h3>
        <p>O cliente não escolhe o identificador do pedido; o servidor o cria. Por isso <code class="inline-code">id</code> não precisa fazer parte de <code class="inline-code">PedidoEntrada</code>, mas aparece em <code class="inline-code">PedidoSaida</code>.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>Entrada</strong>Dados que o cliente precisa fornecer.</div>
          <div class="mini-card"><strong>Saída</strong>Dados que a API decide expor como resposta.</div>
        </div>

        <h3>201 Created</h3>
        <p>Como essa operação cria um pedido, usamos <code class="inline-code">status_code=201</code>. O código 200 significa sucesso de forma geral; 201 comunica de maneira mais específica que um novo recurso foi criado.</p>

        <div class="note-box"><strong>Modelo de resposta também é proteção.</strong> Em sistemas reais, dados internos, senhas, custos ou outras informações que não deveriam sair da aplicação não devem ser expostos apenas porque existem no objeto interno.</div>
        <div class="essence"><strong>Essência</strong>Uma API possui contrato de entrada e de saída. Modelos Pydantic podem documentar e validar ambos os lados da comunicação.</div>`
    },
    {
      id: 'capitulo-11',
      number: 11,
      menuTitle: 'Erros HTTP',
      title: 'Nem toda requisição dá certo',
      objective: 'Usar códigos de status e HTTPException para comunicar erros de forma coerente ao cliente.',
      content: `
        <div class="hero-box"><h3>O produto 999 não existe</h3><p>Nosso endpoint de consulta percorre a lista. Se não encontrar o produto, simplesmente terminar sem uma resposta clara não representa corretamente o que aconteceu.</p></div>

        <h3>A resposta precisa explicar o resultado</h3>
        <p>Códigos HTTP ajudam o cliente a entender a situação:</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>200 OK</strong>A operação foi realizada com sucesso.</div>
          <div class="mini-card"><strong>201 Created</strong>Um novo recurso foi criado.</div>
          <div class="mini-card"><strong>404 Not Found</strong>O recurso solicitado não foi encontrado.</div>
          <div class="mini-card"><strong>422</strong>Os dados enviados não atenderam à validação esperada.</div>
        </div>
        <p>Não é necessário decorar uma tabela inteira. Escolha códigos conforme o significado da situação.</p>

        <h3>HTTPException</h3>
        <p>Importe:</p>
        <pre class="code-block">from fastapi import FastAPI, HTTPException</pre>
        <p>Agora melhore a busca:</p>
        <pre class="code-block">@app.get("/produtos/{produto_id}")
def buscar_produto(produto_id: int):
    for produto in produtos:
        if produto["id"] == produto_id:
            return produto

    raise HTTPException(
        status_code=404,
        detail="Produto não encontrado"
    )</pre>
        <p>Usamos <code class="inline-code">raise</code>, não <code class="inline-code">return</code>, porque estamos lançando uma exceção que encerra o processamento daquela requisição e produz a resposta HTTP de erro.</p>

        <h3>Aplicando a regra ao pedido</h3>
        <pre class="code-block">def encontrar_produto(produto_id: int):
    for produto in produtos:
        if produto["id"] == produto_id:
            return produto
    return None


@app.post("/pedidos", response_model=PedidoSaida, status_code=201)
def criar_pedido(pedido: PedidoEntrada):
    produto = encontrar_produto(pedido.produto_id)

    if produto is None:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    novo_pedido = pedido.model_dump()
    novo_pedido["id"] = len(pedidos) + 1
    pedidos.append(novo_pedido)
    return novo_pedido</pre>

        <h3>Duas falhas, duas causas</h3>
        <div class="term-grid">
          <div class="head">422</div><div class="head">404</div>
          <div>O corpo não atende ao contrato de entrada.</div><div>O identificador é plausível, mas o recurso procurado não existe.</div>
        </div>

        <div class="task-box"><strong>Teste no /docs:</strong> consulte <code class="inline-code">/produtos/999</code>, depois tente criar um pedido com produto 999. Compare código HTTP e corpo da resposta.</div>
        <div class="essence"><strong>Essência</strong>Erros também fazem parte do contrato da API. HTTPException permite interromper a operação e devolver ao cliente um status e uma explicação coerentes.</div>`
    },
    {
      id: 'capitulo-12',
      number: 12,
      menuTitle: 'CRUD',
      title: 'Criar, consultar, alterar e excluir',
      objective: 'Completar o ciclo básico de operações de uma API e só então nomear o conjunto como CRUD.',
      content: `
        <div class="hero-box"><h3>Nosso catálogo não ficará congelado</h3><p>Produtos entram no catálogo, preços mudam e itens podem deixar de ser vendidos. Uma API útil precisa fazer mais do que consultar.</p></div>

        <h3>Primeiro, um modelo para produtos</h3>
        <pre class="code-block">class ProdutoEntrada(BaseModel):
    nome: str = Field(min_length=2)
    preco: float = Field(gt=0)
    categoria: str = Field(min_length=2)


class ProdutoAtualizacao(BaseModel):
    nome: str | None = Field(default=None, min_length=2)
    preco: float | None = Field(default=None, gt=0)
    categoria: str | None = Field(default=None, min_length=2)</pre>

        <h3>Criar</h3>
        <pre class="code-block">@app.post("/produtos", status_code=201)
def criar_produto(produto: ProdutoEntrada):
    novo = produto.model_dump()
    novo["id"] = len(produtos) + 1
    produtos.append(novo)
    return novo</pre>

        <h3>Consultar</h3>
        <pre class="code-block">GET /produtos
GET /produtos/{produto_id}</pre>
        <p>Essas operações já construímos anteriormente.</p>

        <h3>Alterar apenas o que mudou</h3>
        <p>Imagine que o preço do P13 mudou, mas nome e categoria continuam iguais. Não precisamos reenviar o produto inteiro.</p>
        <pre class="code-block">@app.patch("/produtos/{produto_id}")
def atualizar_produto(
    produto_id: int,
    alteracoes: ProdutoAtualizacao
):
    produto = encontrar_produto(produto_id)

    if produto is None:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    dados = alteracoes.model_dump(exclude_unset=True)
    produto.update(dados)
    return produto</pre>
        <p><code class="inline-code">exclude_unset=True</code> gera apenas os campos realmente enviados na requisição. Assim <code class="inline-code">PATCH</code> pode representar uma atualização parcial.</p>

        <h3>E PUT?</h3>
        <p><code class="inline-code">PUT</code> é tradicionalmente associado à substituição completa da representação de um recurso, enquanto <code class="inline-code">PATCH</code> é apropriado para atualizações parciais. Projetos reais podem adotar convenções próprias, mas precisamos entender a diferença de intenção.</p>

        <h3>Excluir</h3>
        <pre class="code-block">@app.delete("/produtos/{produto_id}")
def excluir_produto(produto_id: int):
    produto = encontrar_produto(produto_id)

    if produto is None:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    produtos.remove(produto)
    return {"mensagem": "Produto excluído"}</pre>

        <h3>Agora podemos dar um nome ao conjunto</h3>
        <div class="term-grid">
          <div class="head">Operação</div><div class="head">Nossa API</div>
          <div><strong>Create</strong> — criar</div><div><code class="inline-code">POST /produtos</code></div>
          <div><strong>Read</strong> — consultar</div><div><code class="inline-code">GET /produtos</code></div>
          <div><strong>Update</strong> — atualizar</div><div><code class="inline-code">PATCH /produtos/{id}</code></div>
          <div><strong>Delete</strong> — excluir</div><div><code class="inline-code">DELETE /produtos/{id}</code></div>
        </div>
        <p>As iniciais formam <strong>CRUD</strong>: Create, Read, Update, Delete.</p>
        <div class="concept-box"><strong>O nome técnico veio depois da necessidade.</strong> Primeiro construímos operações que o sistema precisava; depois percebemos que elas formam um padrão conhecido.</div>

        <h3>O que já conseguimos fazer</h3>
        <div class="flow">cliente e servidor
↓
HTTP, requisição e resposta
↓
API, recurso, rota e endpoint
↓
FastAPI e servidor local
↓
OpenAPI e /docs
↓
path e query parameters
↓
POST e request body
↓
Pydantic e validação
↓
modelos de resposta
↓
status HTTP e HTTPException
↓
CRUD</div>

        <h3>Mas nossa aplicação ainda é frágil</h3>
        <p>Os produtos e pedidos continuam apenas em listas Python. Se desligarmos o programa, tudo que foi criado durante a execução desaparece. Além disso, nosso negócio real tem categorias, vasilhames retornáveis, estoque, estados de pedido e regras que ainda não modelamos.</p>
        <div class="bridge-box"><strong>Bloco 2 concluído.</strong> Agora temos base suficiente para deixar a API de demonstração e começar a enfrentar as regras do mundo real sem transformar conceitos importantes em linhas copiadas.</div>
        <div class="essence"><strong>Essência</strong>CRUD reúne as operações fundamentais de criação, consulta, atualização e exclusão. Nossa primeira API já realiza esse ciclo em memória; a próxima evolução será tornar o sistema mais realista e robusto.</div>`
    }
  ]
});
