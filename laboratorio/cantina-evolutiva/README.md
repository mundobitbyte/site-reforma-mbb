# Cantina Horizonte — pedido e cupom

Laboratório adicional do piloto interdisciplinar. A Cantina v1 de QTS continua
preservada em `qts/cantina-horizonte-v1`.

Implementado: consultar produtos, montar pedido, validar quantidade e estoque,
registrar pedido/itens/baixa de estoque em uma transação e consultar a venda salva.
Preços são armazenados em centavos e preservados no item histórico.

Cupom está implementado. Mudança de status ainda não está disponível; o pedido nasce em `Novo`.
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

Endpoints: `GET /api/produtos`, `POST /api/pedidos`, `GET /api/pedidos/{id}`.
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

## Estado da verificação

29 testes de integração passaram, incluindo migração, validade, mínimo, uso,
arredondamento, disputa de cupom e rollback. A sintaxe do JavaScript foi verificada.
A tentativa de teste no navegador remoto foi bloqueada por conexão recusada
ao servidor local. Layout, interação real e uso a 360 px permanecem pendentes.
A primeira macroetapa não está marcada como concluída por esse motivo.

Planejamento: `docs/reforma/planejamento-cantina-mbb.md`.
Evidência inicial: `docs/reforma/checkpoint-08-pedido-persistente.md`.
Estado atual: `docs/reforma/checkpoint-09-cupom.md`.
