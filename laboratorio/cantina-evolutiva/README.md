# Cantina Horizonte — evolução 1

Laboratório adicional do piloto interdisciplinar. A Cantina v1 de QTS continua
preservada em `qts/cantina-horizonte-v1`.

Implementado: consultar produtos, montar pedido, validar quantidade e estoque,
registrar pedido/itens/baixa de estoque em uma transação e consultar a venda salva.
Preços são armazenados em centavos e preservados no item histórico.

Cupom e mudança de status ainda não estão disponíveis. O pedido nasce em `Novo`.
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
python -m pytest -q tests/test_pedido.py
```

Os testes criam bancos temporários: fluxo API, limites/tipos, repetição de produto,
estoque, falha durante gravação, duas tentativas pelo último saldo, preço histórico
e reabertura. O teste de concorrência confirma esse cenário de duas tentativas;
não é medição de carga ou disponibilidade.

Endpoints: `GET /api/produtos`, `POST /api/pedidos`, `GET /api/pedidos/{id}`.
O POST recebe `{"itens":[{"produto_id":1,"quantidade":2}]}`.
Campos não suportados são recusados, incluindo cupom nesta etapa.

## Estado da verificação

15 testes de integração passaram. A sintaxe do JavaScript foi verificada.
A tentativa de teste no navegador remoto foi bloqueada por conexão recusada
ao servidor local. Layout, interação real e uso a 360 px permanecem pendentes.
A primeira macroetapa não está marcada como concluída por esse motivo.

Planejamento: `docs/reforma/planejamento-cantina-mbb.md`.
Evidência/status: `docs/reforma/checkpoint-08-pedido-persistente.md`.
