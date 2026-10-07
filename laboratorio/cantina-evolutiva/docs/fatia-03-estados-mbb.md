# Fatia 3 — acompanhar o mesmo pedido

Este roteiro integra a evolução ao requisito RF-09 da Cantina Horizonte.
Não substitui o percurso curricular completo, ainda pendente de varredura.
Use apenas dados fictícios e o banco próprio desta evolução.

## Problema antes do conceito

Uma pessoa acabou de registrar um pedido. Outra tenta marcá-lo como Entregue,
embora ele ainda esteja em Novo. O nome Entregue é conhecido pelo sistema:
isso basta para aceitar a mudança? Preveja a resposta e justifique.

Consulte `qts/cantina-horizonte-v1/docs/requisitos-base.md`, RF-09.
A sequência é Novo → Confirmado → Em preparação → Pronto → Entregue.
O requisito, e não a resposta de uma versão com defeitos, é o oráculo.
A v1 permanece preservada para comparação. Não execute esta evolução contra
o banco da v1 nem altere seu código para realizar a comparação.

## Construção por necessidade

| Necessidade observada | Conceito | Artefato reutilizado |
|---|---|---|
| Distinguir nome válido de mudança permitida | Estado e transição | Processo RF-09, com uma saída em cada estado não final |
| Consultar onde o pedido está | Persistência | O mesmo `pedido.status` usado pela API e pela tela |
| Explicar como chegou ao estado atual | Relacionamento e histórico | `historico_status`, ligado ao mesmo pedido |
| Outra pessoa avançou depois da consulta | Concorrência e precondição | `estado_esperado` na requisição |
| Falha ao gravar o histórico | Transação | Mudança e histórico confirmados juntos ou revertidos |
| Mudar preparação não pode cobrar/vender novamente | Separação de operações | Estoque, itens e desconto permanecem iguais |

Primeiro desenhe o processo em Análise. Depois identifique os dados necessários
em BD. Implemente uma mudança no serviço e examine sua evidência em QTS.
Retorne ao desenho: ele explica a consulta desatualizada e a falha intermediária?
Revise quando não explicar. Essa volta é parte da atividade.

## Uma experiência pequena

1. Execute localmente conforme o README e registre um pedido sem cupom.
2. Consulte o pedido e anote estado, itens, total e estoque.
3. Envie a mudança abaixo para `POST /api/pedidos/{id}/status`, usando o id salvo:

```json
{"status":"Confirmado","estado_esperado":"Novo"}
```

4. Consulte novamente. Identifique a mudança e o registro de histórico.
5. Repita a mesma requisição. Antes de enviá-la, preveja o resultado.
6. Compare estoque, itens e total com os valores anotados. Por que não mudaram?

O roteiro usa o pedido registrado na primeira fatia. Confirmado é a próxima
etapa de atendimento; o registro inicial já baixou o estoque. Não faça uma
segunda baixa apenas porque os termos “confirmar” e “registrar” parecem próximos.

## Do dado ao comportamento

O CHECK do schema inicial aceita os cinco nomes conhecidos. Ele não comprova
que Novo só pode mudar para Confirmado. Investigue essa diferença antes de
ler `Cantina.alterar_status` em `servico.py`.

No banco **SQLite desta evolução**, consulte o histórico de um pedido existente:

```sql
SELECT p.id, p.status, h.estado_anterior, h.estado_novo, h.alterado_em
FROM pedido AS p
LEFT JOIN historico_status AS h ON h.pedido_id = p.id
WHERE p.id = 1
ORDER BY h.id;
```

Ajuste o id para o pedido escolhido. Um pedido antigo pode não ter eventos
anteriores à migração: não inventamos esses eventos. O LEFT JOIN mantém esse
pedido na consulta. Compare a finalidade dessa consulta com os exemplos
MySQL preservados em `pages/bancodedados.html`; não troque seus scripts por
este SQL nem presuma compatibilidade de funções/tipos entre os bancos.

O serviço confere a precondição, valida o próximo passo e grava mudança e
histórico na mesma transação. O botão da tela apresenta `proximo_status`,
mas a proteção também precisa funcionar quando alguém envia JSON diretamente.

## Evidências e perguntas de QTS

| Caso | Resultado esperado | Evidência executável |
|---|---|---|
| Percorrer os quatro avanços | Entregue, quatro eventos, valores e estoque preservados | `test_sequencia_completa_historico_reabertura_e_valores_preservados` |
| Saltar, voltar, repetir ou sair de Entregue | Recusa sem efeitos | 21 combinações em `test_recusa_salto_retorno_repeticao_e_saida_de_entregue` |
| Usar uma consulta antiga | 409 e necessidade de nova consulta | `test_consulta_desatualizada_nao_avanca_mais_uma_etapa` |
| Duas tentativas do mesmo avanço | Um sucesso, uma recusa, um evento | `test_duas_tentativas_disputam_mesmo_avanco` |
| Falhar ao registrar o evento | Estado anterior e dados preservados | `test_falha_de_historico_reverte_mudanca_de_status` |
| Abrir um banco da evolução anterior | Dados preservados, sem história fabricada | `test_migracao_preserva_pedido_v2_sem_inventar_historico` |

Os testes estão em `tests/test_estados.py`. O teste concorrente cobre duas
tentativas no mesmo avanço; não mede carga de produção. O histórico não
identifica atendente porque o núcleo não possui autenticação.

## Revisão MbB e entrega do estudante

Especialista: explique por que estado e evento precisam da mesma transação,
e por que o estado consultado precisa ser conferido no servidor.

Professor: confira se processo, tabela, serviço e teste continuam explicando
o mesmo RF-09. Peça uma previsão antes da execução e uma justificativa depois.

Iniciante: apresente um pedido real do laboratório, uma tentativa aceita e
uma recusada. Mostre o dado salvo que sustenta cada conclusão.

Entregue um único conjunto ligado pelo id do pedido: desenho do processo,
requisição, consulta SQL, resposta e registro do teste. Acrescente uma revisão
do modelo motivada por uma falha observada. Não crie outro projeto para
renomear a mesma prática.

Interface no navegador real e uso a 360 px ainda não foram comprovados neste
ambiente. Os testes de servidor não substituem essa evidência.
