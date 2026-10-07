# Reforma MbB — Checkpoint 12

Data: 7 de outubro de 2026.

## Resultado
Banco de Dados foi integrado ao percurso adicional da Cantina Horizonte: 11 capítulos, exercícios encadeados, 13 páginas HTML e 13 consultas SQL. A adaptação aplica necessidade → conceito → prática → evidência, relacionando o mesmo modelo e requisitos às 15 etapas de Análise já concluídas.

O trabalho está salvo somente no laboratório `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O repositório oficial, domínio e Firebase não receberam escrita deste trabalho. A autorização existente foi suficiente; nenhuma aprovação está pendente. Não foi feita nova alteração nas permissões do conector.

## Faltam 5 macroetapas

| Etapa | Estado |
|---|---|
| 1 — Pedido persistente | Servidor verificado; interface criada; teste no navegador pendente |
| 2 — Cupom | Servidor verificado; interface criada; teste no navegador pendente |
| 3 — Estados do pedido | Servidor verificado; interface criada; teste no navegador pendente |
| 4 — Percurso curricular | Análise: 15 etapas; BD: 11 capítulos e exercícios adaptados. Outras disciplinas pendentes |
| 5 — Revisão e entrega | Revisão visual, acessibilidade em execução, prévia, documentação final e entrega pendentes |

A contagem permanece 5 porque nenhuma dessas macroetapas está completamente encerrada, embora a adaptação de BD avance dentro da etapa 4.

## O que foi concluído
- Percurso adicional de BD com histórico, fundamentos, modelagem conceitual/lógica, normalização, SQL, JOIN, administração, transações, SQL avançado, integrador e visão moderna.
- Matriz de 12 linhas: 11 capítulos e a seção de exercícios BD00–BD10. Caderno e navegação ligam BD ao dossiê da Cantina.
- CLI didático no mesmo projeto: preparação com a classe Cantina existente, consultas somente leitura, transação com rollback/falha/commit, verificação, backup, exportação e duas formas de restauração.
- Banco didático separado do banco da aplicação. Destinos de cópia/exportação/restauração recusam sobrescrita; não há reset automático.
- SQL original preservado, inclusive comercio, loja_integrador e laboratório MySQL de logs. Exemplos específicos de MySQL continuam identificados como aprofundamento, sem serem convertidos em comandos SQLite.
- Retomada em espiral: recuperação no capítulo 6, COMMIT no 7 e retorno à comparação com o snapshot.

## Verificação
11 novos testes aprovados cobrem consultas, conexão somente leitura, transações, recuperação e proteção contra sobrescrita. Os 63 testes anteriores da aplicação são evidência dos checkpoints anteriores; não foram reexecutados nesta etapa, pois API, serviço e esquema não foram alterados.

Foram executados 11 comandos reais do CLI. Backup e exportação capturaram 3 pedidos; após outro COMMIT, a origem passou a 4. As duas restaurações conservaram 3 pedidos e a versão 3, sem substituir a origem. O dump inclui estrutura, dados, view, índice e a versão das migrações.

A verificação estrutural cobriu 32 páginas HTML, 850 referências locais, 41 botões de cópia, 13 consultas SQL e a matriz de BD. Não encontrou erros. Essa verificação não comprova comportamento ou aparência no navegador.

| Arquivo protegido | SHA-256 preservado |
|---|---|
| pages/bancodedados.html | f46eee0470402bc9462c1179fb5fb3fa75099dcc6a442af1dcc572556cbb5f04 |
| assets/seguranca-dados/mysql-general-log-lab.sql | b68631aad643d6a2400dd3dc4ac490a332b337ebc19431c932b34f9502ce6352 |

## Bloqueio conhecido
O teste visual continua pendente: a conexão direta à aplicação foi recusada e a prévia supervisionada não suporta este projeto sem dev script/configuração estática. A alternativa exigida pela orientação da prévia está indisponível. Não houve repetição dessas tentativas nem publicação.

A orientação de [sites-preview-troubleshooting](skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md) determina: “If that skill is unavailable, do not improvise another browser-control path.” Isso limita a validação visual, sem impedir o avanço curricular e os testes de servidor.

## Continuidade
Próxima fatia: Programação/Python e pontes com VisuAlg, reaproveitando o inventário existente de 40 aulas e a Cantina. Depois: Web/API, QTS e Git. Os testes visuais e a revisão final continuam registrados, sem serem declarados concluídos.

Detalhes das decisões e fontes primárias: `docs/reforma/adaptacao-bd-cantina.md`. Ponto de entrada: `laboratorio/percurso-mbb/index.html`.

