# Reforma Mundo bit Byte — checkpoint 10

Continuação do checkpoint 09, em 7 de outubro de 2026.
Toda escrita externa: `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`.

## Quantas etapas faltam

Faltam **5 macroetapas**, mantendo os mesmos critérios de conclusão:

| Macroetapa | Estado real |
|---|---|
| 1. Pedido persistente | Servidor testado, interface criada; fluxo no navegador pendente |
| 2. Cupom | Regra e integração testadas, interface criada; fluxo no navegador pendente |
| 3. Estados do pedido | Regra, histórico e integração testados nesta continuação; interface real pendente |
| 4. Percurso curricular | Roteiro da fatia de estados adicionado; varredura completa tópico a tópico ainda pendente |
| 5. Revisão e entrega | Revisão visual, acessibilidade, documentação consolidada e prévia ainda pendentes |

Não há autorização pendente para a evolução pequena aprovada. Não se refez a cópia,
o isolamento, a escolha da Cantina ou o planejamento já concluído.
O servidor das três primeiras fatias tem evidência; sua interface não foi certificada.

## Retomada e preservação

A alteração de cupom, que estava com árvore Git preparada, foi registrada e a branch
experimental avançou para `86f4589f7ac470784137f38d9bf3dbbd35f5998e`.
A comparação remota mostrou somente os 10 arquivos previstos dessa fatia.
O checkpoint 09 foi salvo antes de iniciar estados.

Nenhuma escrita foi feita em `mundobitbyte/site`, no domínio oficial ou no Firebase.
A Cantina v1, `pages/bancodedados.html` e o SQL de segurança continuam iguais ao
snapshot protegido, conforme comparação local. O schema inicial desta evolução
permanece intacto; a mudança de estados usa uma nova migração adicional.
Não há nova publicação, mudança de privacidade ou expansão de permissão.

## Regra RF-09 implementada

Fonte preservada: `qts/cantina-horizonte-v1/docs/requisitos-base.md` e planejamento
aprovado `docs/reforma/planejamento-cantina-mbb.md`.

Só permite Novo → Confirmado → Em preparação → Pronto → Entregue.
Saltos, retornos, repetição e saída de Entregue são recusados sem efeitos.
Nomes desconhecidos e entradas sem o contrato correto também são recusados.

`POST /api/pedidos/{id}/status` recebe:

```json
{"status":"Confirmado","estado_esperado":"Novo"}
```

O servidor inicia uma transação de escrita, consulta o estado salvo, verifica o
estado esperado e o próximo permitido, atualiza o pedido e registra o evento.
Mudança e evento são confirmados juntos. Falha no evento reverte a mudança.
Duas tentativas do mesmo avanço produzem um sucesso e uma recusa; uma consulta
antiga não autoriza um avanço adicional.

Avançar o atendimento não modifica itens, preço histórico, desconto, uso de cupom
nem estoque. A venda foi registrada na primeira operação; Confirmado é a etapa
seguinte do atendimento. Esta distinção foi documentada para não ensinar uma
segunda baixa de estoque.

A consulta agora retorna `proximo_status` e `historico_status`. O estado final
retorna próximo nulo. Datas do histórico são gravadas em UTC e apresentadas no
fuso America/Sao_Paulo. Não são atribuídas a atendentes: o núcleo não tem autenticação.

## Dados e migração

`migracao-03-estados.sql` acrescenta `historico_status`, com FK para pedido,
restrição das quatro transições conhecidas e índice por pedido/evento.
A versão passa de 2 para 3. A inicialização também migra a primeira fatia via cupom.
Dados antigos são preservados; não se fabricam eventos de antes da migração.
Reabrir o banco não reinicia histórico nem libera cupom usado.

A regra operacional é aplicada no serviço. Não se promete que o CHECK original
sobre nomes de estado, isoladamente, impeça uma atualização SQL que salte etapas.

## Interface criada

A consulta oferece um único botão com o próximo estado permitido pelo servidor,
exibe o histórico e desabilita avanço em Entregue. Operações em andamento bloqueiam
reenvio pelo mesmo controle. A troca do número invalida a consulta anterior;
respostas antigas não substituem um pedido mais recentemente registrado.
Falha de mudança pede nova consulta antes de outra tentativa.

Código criado e sintaxe verificada. Layout, interação de navegador e uso a 360 px
continuam sem evidência. Não se confundiu essa revisão com um teste E2E.

## Verificação executada

34 testes novos passaram em `tests/test_estados.py`:

- Quatro avanços em sequência, histórico, consulta e reabertura.
- As 21 combinações proibidas entre os cinco estados conhecidos.
- Consulta desatualizada, nomes desconhecidos, tipos/campos inválidos e pedido ausente.
- Duas tentativas simultâneas do mesmo avanço: um 200, um 409, um evento.
- Falha forçada ao inserir histórico: rollback do estado e conservação dos dados.
- Migração de banco da fatia anterior, preservando venda, estoque e cupom usado.
- FK e restrição de transição no histórico.

Após mudar o serviço e a inicialização, os 29 testes existentes de pedido/cupom
foram executados como regressão e passaram. **63 casos passaram no total**.
JavaScript passou em `node --check`.
As duas execuções registraram um aviso de depreciação do TestClient/HTTPX, sem falha.
Não houve repetição da auditoria inicial nem medição de carga.

## Aplicação do modo MbB

Adicionado `laboratorio/cantina-evolutiva/docs/fatia-03-estados-mbb.md`:

- Parte da necessidade de impedir entrega antes da preparação.
- Reutiliza RF-09, o mesmo id de pedido, processo, tabela, API e teste entre disciplinas.
- Distingue nome válido de transição válida, ligando necessidade a conceito.
- Leva uma consulta antiga e uma falha de histórico de volta ao modelo de Análise.
- Propõe previsão antes da execução e justificativa baseada no dado salvo.
- Mantém a comparação MySQL/SQLite sem substituir nenhum SQL original.
- Inclui revisão de especialista, professor e iniciante; evidência micro e retorno macro.

O roteiro é uma fatia do percurso, não uma alegação de varredura curricular completa.

## Bloqueio exato e próximo passo

A conexão direta do navegador a `terminal.local:4173` foi recusada. A tentativa
supervisionada do checkpoint 09 retornou: `site has no dev script or .openai/hosting.json
with static.directory`. Esse fluxo exige desenvolvimento JavaScript compatível ou
conteúdo estático; o serviço integrado atual é Python/FastAPI. Não houve nova tentativa
idêntica, publicação ou troca de arquitetura só para contornar a verificação.

A habilidade consultada [sites-preview-troubleshooting/SKILL.md](skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md)
também requer control-browser, indisponível nos catálogos desta sessão. Sua instrução
literal é: “If that skill is unavailable, do not improvise another browser-control path.”
Essa limitação é de verificação visual, não uma aprovação do professor em falta.

Próximo trabalho independente: retomar a varredura curricular já inventariada e
adaptar os tópicos que sustentam essas três fatias, sem repetir o inventário concluído.
A verificação real de interface permanece registrada como pendência de infraestrutura.
