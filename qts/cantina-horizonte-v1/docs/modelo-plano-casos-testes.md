# Cantina Horizonte — Modelo de Plano e Casos de Teste

Este arquivo é um apoio para a Etapa 9 do módulo **QTS — Qualidade e Teste de Software**.

A ideia não é preencher documentos por obrigação. Use somente o que ajudar a organizar, executar e comprovar o trabalho.

## 1. Identificação da versão

- Versão avaliada:
- Data:
- Responsável(is):

## 2. Objetivo

Descreva em poucas linhas o que esta rodada de testes precisa verificar.

Exemplo:

> Avaliar a versão candidata da Cantina Horizonte com foco em quantidade, estoque, cupom e finalização do pedido.

## 3. Escopo

### Dentro do escopo

- quantidade por item;
- estoque;
- cálculo do subtotal e total;
- cupom MBB10;
- finalização do pedido;
- status do pedido.

### Fora do escopo nesta rodada

Registre o que não será avaliado agora e por quê.

## 4. Ambiente

- navegador:
- sistema operacional:
- modo de execução:
- banco de dados:
- dados iniciais necessários:

## 5. Riscos e prioridades

| Área | Risco percebido | Prioridade de teste | Justificativa |
|---|---|---|---|
| Estoque |  |  |  |
| Cupom |  |  |  |
| Quantidade |  |  |  |
| Status |  |  |  |

## 6. Casos de teste

### CT-QTD-01 — Rejeitar quantidade zero

- Requisito relacionado: RF-03
- Pré-condição: produto disponível
- Dados de entrada: quantidade 0
- Ação: tentar adicionar o produto ao pedido
- Resultado esperado: operação rejeitada com mensagem compreensível
- Resultado obtido:
- Situação: Não executado / Passou / Falhou / Bloqueado
- Evidência:

### CT-QTD-02 — Aceitar limite inferior

- Requisito relacionado: RF-03
- Dados de entrada: quantidade 1
- Resultado esperado: aceitar, desde que exista estoque
- Resultado obtido:
- Situação: Não executado / Passou / Falhou / Bloqueado
- Evidência:

### CT-QTD-03 — Aceitar limite superior

- Requisito relacionado: RF-03
- Dados de entrada: quantidade 10
- Resultado esperado: aceitar, desde que exista estoque suficiente
- Resultado obtido:
- Situação: Não executado / Passou / Falhou / Bloqueado
- Evidência:

### CT-QTD-04 — Rejeitar acima do limite

- Requisito relacionado: RF-03
- Dados de entrada: quantidade 11
- Resultado esperado: rejeitar
- Resultado obtido:
- Situação: Não executado / Passou / Falhou / Bloqueado
- Evidência:

## 7. Rastreabilidade

| Requisito | Critério / regra observada | Caso de teste | Resultado | Defeito relacionado |
|---|---|---|---|---|
| RF-03 | Quantidade entre 1 e 10 | CT-QTD-01 |  |  |
| RF-03 | Quantidade entre 1 e 10 | CT-QTD-02 |  |  |
| RF-03 | Quantidade entre 1 e 10 | CT-QTD-03 |  |  |
| RF-03 | Quantidade entre 1 e 10 | CT-QTD-04 |  |  |

## 8. Resumo da execução

- Casos planejados:
- Casos executados:
- Passaram:
- Falharam:
- Bloqueados:
- Riscos ainda não cobertos:

## 9. Observações

Registre aqui qualquer informação necessária para outra pessoa compreender o que foi feito e repetir a avaliação.