# Cantina Horizonte — pedido, cupom e estados

Laboratório adicional do piloto interdisciplinar. A Cantina v1 de QTS continua
preservada em `qts/cantina-horizonte-v1`.

Implementado: consultar produtos, montar pedido, validar quantidade e estoque,
registrar pedido/itens/baixa de estoque em uma transação e consultar a venda salva.
Preços são armazenados em centavos e preservados no item histórico.

Cupom e mudança de status estão implementados; o pedido nasce em `Novo`.
Esta versão usa apenas dados fictícios e não possui autenticação; destina-se à
execução local do laboratório. Não há integração com Firebase ou produção.

## Executar localmente

Na pasta `laboratorio/cantina-evolutiva`:

```bash
python -m venv .venv
```

Ative o ambiente. Windows:

```bat
.venv\Scripts\activate
```

Linux/macOS:

```bash
source .venv/bin/activate
```

```bash
python -m pip install -r requirements.txt
python -m uvicorn app:app --host 127.0.0.1 --port 8001
```

Abra `http://127.0.0.1:8001/`. O banco próprio será criado em
`dados/cantina-evolutiva.sqlite3`. Reiniciar preserva pedidos e estoque;
os dados iniciais são inseridos apenas durante a criação do banco novo.
Não aponte este serviço para bancos da v1 ou de outro projeto.

## Testar

```bash
python -m pytest -q tests
```

Os testes criam bancos temporários: fluxo API, limites/tipos, repetição de produto,
estoque, falha durante gravação, duas tentativas pelo último saldo, preço histórico
e reabertura. O teste de concorrência confirma esse cenário de duas tentativas;
não é medição de carga ou disponibilidade.

Endpoints: `GET /api/produtos`, `POST /api/pedidos`, `GET /api/pedidos/{id}`
e `POST /api/pedidos/{id}/status`.
O POST recebe `{"itens":[{"produto_id":1,"quantidade":2}],"cupom":null}`.
Campos não suportados são recusados.

## Cupom do laboratório

MBB10 concede 10% a partir de R$ 30,00, até 31/12/2099 inclusive, com um uso
por código no banco do laboratório. A regra acompanha o marcador `utilizado`
do requisito original: não é uma promoção por cliente nem exige cadastro.
O dia de validade usa America/Sao_Paulo; `tzdata` fornece a base de fuso quando
o sistema não a possui. Desconto em centavos usa arredondamento de metade para cima.
Cupom inválido, vencido, utilizado ou abaixo do mínimo recusa a tentativa inteira,
preservando carrinho na interface e os dados no servidor. O pedido guarda o desconto
da venda; mudanças futuras na configuração não recalculam vendas antigas.

A migração `migracao-02-cupom.sql` é aplicada uma vez pelo serviço, numa transação,
preservando pedidos/estoque da primeira fatia. Reiniciar não libera cupom já usado.
Não execute a migração manualmente em bancos de outros projetos.

## Estados e histórico — RF-09

Sequência obrigatória: `Novo → Confirmado → Em preparação → Pronto → Entregue`.
Não há salto, retorno, repetição nem transição depois de Entregue.
Consulte o pedido antes de mudar seu estado. A resposta inclui `proximo_status`
e `historico_status`; a interface oferece apenas o próximo passo.

Exemplo da primeira mudança:

```json
{"status":"Confirmado","estado_esperado":"Novo"}
```

Envie ao endpoint de status do pedido consultado. `estado_esperado` evita
que uma consulta antiga ou duas tentativas avancem o pedido indevidamente.
Uma disputa recebe 409 e deve consultar novamente. Mudança e histórico são
gravados na mesma transação; falha no histórico reverte a mudança.
Avançar não baixa estoque novamente nem recalcula preços ou desconto.
O registro da venda ocorre ao registrar o pedido; Confirmado é a etapa
seguinte do atendimento, conforme a sequência da fonte original.

A migração `migracao-03-estados.sql` acrescenta o histórico, preserva dados
e não inventa eventos passados para pedidos existentes. Datas são gravadas
em UTC e apresentadas no fuso America/Sao_Paulo. O histórico descreve mudanças
do laboratório; não identifica atendentes, pois o núcleo não tem autenticação.

Roteiro interdisciplinar desta fatia: [Estados no modo MbB](docs/fatia-03-estados-mbb.md).

Percurso adicional de Análise: [Cantina Horizonte no MbB](../percurso-mbb/index.html),
com 15 etapas, caderno e dossiê ligado aos mesmos requisitos, dados e testes.
As páginas são estáticas; a aplicação continua sendo executada pelo comando acima.

Banco de Dados adicional: [capítulos e exercícios da Cantina](../percurso-mbb/banco-de-dados/index.html).
Na mesma pasta do serviço, com o ambiente ativado:

```bash
python laboratorio_bd.py preparar
python laboratorio_bd.py consultar 04-resumo-pedidos
python laboratorio_bd.py transacao rollback
python laboratorio_bd.py transacao falha
python laboratorio_bd.py transacao commit
python laboratorio_bd.py backup
python laboratorio_bd.py restaurar
python laboratorio_bd.py exportar
python laboratorio_bd.py restaurar-sql
```

O banco didático fica em `dados/bd-didatico/cantina.sqlite3`: usa o mesmo schema,
migrações e serviço, mas preserva o banco de trabalho da aplicação e a v1.
Preparar é feito uma vez; destinos existentes são recusados sem reiniciar ou substituir.
Consultas são somente leitura. Os experimentos de COMMIT são novas vendas nessa cópia.
Backup e dump SQL são restaurados em arquivos novos. A exportação inclui estrutura,
registros e versão de migração. Onze testes adicionais verificam este roteiro;
as evidências anteriores dos 63 casos da aplicação permanecem válidas como registradas.

## Estado da verificação

34 testes novos exercitam estados/histórico, as 21 transições proibidas,
consulta antiga, concorrência, migração e rollback. Os 29 testes de pedido/cupom
também passaram após esta evolução: 63 casos no total.
A sintaxe do JavaScript foi verificada. Layout, interação real e uso a 360 px
permanecem pendentes: a conexão direta ao servidor foi recusada e a prévia
supervisionada disponível exige configuração de desenvolvimento JavaScript
ou diretório estático, incompatível com este serviço Python integrado.
Pedido, cupom e estados têm evidência de servidor; suas macroetapas completas
ainda aguardam verificação da interface.

Planejamento: `docs/reforma/planejamento-cantina-mbb.md`.
Evidência inicial: `docs/reforma/checkpoint-08-pedido-persistente.md`.
Cupom: `docs/reforma/checkpoint-09-cupom.md`.
Estado atual: `docs/reforma/checkpoint-10-estados.md`.


## Programação/Python e terminal didático

[Percurso de Programação](../percurso-mbb/programacao/index.html): 15 etapas,
exercícios, caderno e ponte com VisuAlg. Os exemplos introdutórios são simulações;
as vendas persistentes usam a classe Cantina já existente, sem outra cópia das regras.

Na pasta deste serviço, com o ambiente ativado:

```bash
python terminal.py preparar
python terminal.py produtos
python terminal.py registrar --item 1:2
python terminal.py consultar 1
python terminal.py avancar 1 --estado-esperado Novo
```

O banco separado fica em `dados/programacao/cantina.sqlite3`, com o mesmo schema
e migrações. Preparar cria uma vez e recusa arquivo existente, sem reset.
Use o ID devolvido pela venda: 1 só vale para a primeira em um banco novo.
Cada registrar aceito cria outra venda fictícia; não é comando de conferência.
Reabrir o terminal mantém os dados. `--item 1:2 --item 1:3` consolida 5 Águas;
`--cupom MBB10` usa a política já implementada. Avançar pede o estado consultado
e recusa consulta antiga. O CLI não aceita caminho externo de banco.

Os 13 casos de `tests/test_terminal.py` passaram, com bancos temporários.
Os arquivos VisuAlg são ponte revisada, sem execução no VisuAlg registrada.
As pendências visuais da aplicação continuam as mesmas.
