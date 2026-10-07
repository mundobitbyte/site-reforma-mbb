# Cantina Horizonte — artefatos para revisão estática

Use este material na Etapa 4 de QTS. A proposta é **revisar sem executar o sistema**.

Não tente corrigir tudo de imediato. Primeiro marque o que chamou sua atenção e explique por quê.

---

## Trecho A — regra do cupom

> O cupom MBB10 concede 10% de desconto quando o subtotal for maior ou igual a R$ 30,00.

## Trecho B — anotação de uma reunião

> O desconto MBB10 deve ser liberado somente para pedidos acima de R$ 40,00.

Pergunta: os dois textos podem estar certos ao mesmo tempo?

---

## Trecho C — requisito de desempenho

> RQ-01 — O sistema deve responder rápido.

Pergunta: como uma pessoa saberia objetivamente se esse requisito foi atendido?

---

## Trecho D — validação de quantidade

Regra conhecida:

> Cada item deve ter quantidade inteira entre 1 e 10 unidades, inclusive.

Código em revisão:

```python
def validar_quantidade(quantidade):
    return quantidade <= 10
```

Pergunta: apenas lendo o código, ele representa toda a regra?

---

## Trecho E — cálculo do subtotal

```python
def calcular_subtotal(preco, quantidade):
    resultado = preco * quantidade
    valor = resultado
    return valor
```

Pergunta: o código parece incorreto? Existe algo que pode ser simplificado ou que merece revisão, mesmo sem executar?

---

## O que registrar

Para cada trecho, anote:

1. o que chamou sua atenção;
2. por que pode ser um problema;
3. o que você precisaria esclarecer antes de corrigir.

A meta não é encontrar uma quantidade específica de problemas. A meta é perceber que documentos e código já podem fornecer evidências **antes da execução**.
