# Cantina Horizonte — modelo de registro de defeito

Use este modelo para transformar uma falha observada em um registro que outra pessoa consiga reproduzir.

## Identificação

**Título:**

**Requisito relacionado:**

**Caso de teste relacionado:**

**Severidade:**

**Prioridade:**

## Ambiente

Registre somente o que realmente pode ajudar a reproduzir o problema: versão do sistema, navegador, sistema operacional, banco de teste ou outra condição relevante.

## Pré-condição

O que precisa existir antes de iniciar o teste?

## Passos para reproduzir

1.
2.
3.
4.

## Resultado esperado

O que deveria acontecer segundo a regra ou requisito?

## Resultado obtido

O que realmente aconteceu?

## Evidência

Inclua apenas evidências úteis: captura de tela, mensagem, log, valor salvo no banco, saída de teste ou outra informação relevante.

---

# Exemplo preenchido

**Título:** Quantidade zero é aceita no pedido

**Requisito relacionado:** RF-03

**Caso relacionado:** CT-QTD-01

**Severidade:** Média

**Prioridade:** Alta

**Ambiente:** Cantina Horizonte v1, execução local no navegador.

**Pré-condição:** Salgado disponível em estoque.

**Passos:**

1. Abrir a Cantina Horizonte.
2. Escolher Salgado.
3. Informar quantidade 0.
4. Adicionar o item ao pedido.

**Resultado esperado:** a operação deve ser rejeitada e a pessoa deve receber uma mensagem indicando que a quantidade precisa estar entre 1 e 10.

**Resultado obtido:** o item é aceito com quantidade zero.

**Evidência:** registrar a tela ou outra informação que mostre o item aceito.

Depois da correção, execute novamente o mesmo cenário para confirmar a correção e repita casos próximos, como 1, 10 e 11, para verificar regressão.
