# Cantina Horizonte — roteiro de testes de API com Bruno

Este roteiro será usado na Etapa 13 do módulo QTS.

## Antes de começar

1. Inicie a Cantina Horizonte com `iniciar_windows.bat`.
2. Confirme no navegador que o endereço `http://127.0.0.1:8000` abriu normalmente.
3. Abra o Bruno.
4. Crie uma coleção chamada `Cantina Horizonte`.

**Bruno** é um cliente de API: um programa que permite montar e enviar requisições diretamente ao servidor, sem depender da interface visual do sistema.

## 1. Listar produtos

Método: `GET`

Endereço:

```text
http://127.0.0.1:8000/api/produtos
```

Resultado esperado: código de status HTTP `200` e uma lista de produtos.

Observe especialmente o produto `Sanduíche` e anote o estoque atual.

## 2. Criar um pedido válido

Método: `POST`

Endereço:

```text
http://127.0.0.1:8000/api/pedidos
```

Corpo em JSON:

```json
{
  "itens": [
    {
      "produto_id": 3,
      "quantidade": 2
    }
  ]
}
```

Resultado esperado: código `201`, indicando que o pedido foi criado.

Depois repita o `GET /api/produtos` e verifique se o estoque do Salgado diminuiu em 2 unidades.

## 3. Produto inexistente

Método: `POST`

Endereço:

```text
http://127.0.0.1:8000/api/pedidos
```

Corpo:

```json
{
  "itens": [
    {
      "produto_id": 999,
      "quantidade": 1
    }
  ]
}
```

Resultado esperado: código `404`, porque o produto não existe.

## 4. Quantidade zero

Corpo:

```json
{
  "itens": [
    {
      "produto_id": 3,
      "quantidade": 0
    }
  ]
}
```

Pela regra RF-03, o esperado é rejeitar a operação.

Se você já corrigiu `validar_quantidade`, a aplicação deve responder com código `400`.

Se estiver usando a versão original da Cantina Horizonte v1, o servidor pode aceitar o pedido. Nesse caso, o resultado é uma evidência do defeito que já foi estudado anteriormente.

## 5. Quantidade maior que o estoque

Antes deste teste, restaure os dados iniciais.

O Sanduíche começa com estoque 8. Envie:

```json
{
  "itens": [
    {
      "produto_id": 4,
      "quantidade": 10
    }
  ]
}
```

A quantidade 10 está dentro do limite máximo por item, mas é maior que o estoque disponível.

Resultado esperado pela regra RF-04: rejeitar a operação.

Depois execute novamente `GET /api/produtos` e observe o estoque do Sanduíche. Registre o que realmente aconteceu.

## 6. Corpo com formato inválido

Envie um pedido sem o campo `itens`:

```json
{
  "cupom": "MBB10"
}
```

O FastAPI valida a estrutura recebida antes de executar a regra de negócio. Nesse tipo de erro de formato, a resposta pode ser `422`.

Isso é diferente de um valor que possui a estrutura esperada, mas viola uma regra do negócio, situação em que esta aplicação utiliza `400`.

## Evidência mínima

Para cada cenário, registre:

- método e endereço;
- dados enviados;
- código de status recebido;
- resposta recebida;
- resultado esperado;
- Passou ou Falhou.

Não é necessário tirar captura de tela de todas as requisições. Guarde apenas o que realmente ajudar a explicar um resultado importante ou inesperado.
