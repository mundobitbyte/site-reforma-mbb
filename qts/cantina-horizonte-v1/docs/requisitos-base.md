# Cantina Horizonte — requisitos-base

Este documento reúne regras confirmadas pela Cantina Horizonte e será usado como referência nas atividades de Qualidade e Teste de Software.

Neste arquivo:
- **RF** significa **Requisito Funcional**;
- **RQ** significa **Requisito de Qualidade**.

## Requisitos funcionais

### RF-01 — Produtos
O sistema deve exibir nome, preço e estoque disponível de cada produto.

### RF-02 — Inclusão de item
O usuário deve poder adicionar ao pedido um produto disponível.

### RF-03 — Quantidade
Cada item deve ter quantidade inteira entre 1 e 10 unidades, inclusive.

### RF-04 — Estoque
A quantidade solicitada não pode ser superior ao estoque disponível.

### RF-05 — Cupom MBB10
O cupom MBB10 concede 10% de desconto somente quando todas estas condições forem atendidas:
- subtotal do pedido maior ou igual a R$ 30,00;
- cupom dentro da validade;
- cupom ainda não utilizado.

### RF-06 — Total
O total do pedido deve corresponder ao subtotal menos os descontos válidos e nunca pode ser negativo.

### RF-07 — Finalização
Um pedido só pode ser finalizado quando possuir pelo menos um item e todas as quantidades forem válidas e atendidas pelo estoque.

### RF-08 — Atualização do estoque
Ao finalizar um pedido, o estoque de cada produto deve ser reduzido pela quantidade efetivamente vendida.

### RF-09 — Status do pedido
O pedido deve seguir esta sequência:

Novo → Confirmado → Em preparação → Pronto → Entregue

O sistema não deve permitir pular etapas nem voltar para um estado anterior.

## Requisitos relacionados à qualidade

### RQ-01 — Mensagens
Quando uma operação for rejeitada por entrada inválida, a mensagem deve explicar o motivo de forma compreensível para o usuário.

### RQ-02 — Uso em tela pequena
As funções principais do pedido devem permanecer utilizáveis em uma tela de 360 pixels de largura sem exigir rolagem horizontal da página.

## Observação

Os requisitos podem evoluir ao longo do projeto. Quando isso acontecer, a alteração deve ser registrada para que os testes relacionados também possam ser revistos.
