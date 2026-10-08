# Cantina Horizonte — minuta do parecer final

**Atualização 39, 08/10/2026: aplicação revisada e navegação experimental integrada.** Professor considera a versão atual boa e determinou reteste com aluno somente após tudo pronto; não bloquear desenvolvimento/integração esperando participante. [Registro atual](checkpoint-39-integracao-navegacao.md). Laboratório **28/31**; compreensão após as correções e decisão final permanecem abertas. Versão completa pronta para revisão; sem publicação. Os relatos posteriores não apagam as dificuldades da sessão 35 nem constituem reteste independente.


**MINUTA: resultados disponíveis consolidados; decisão final pendente.** Atualizada no checkpoint 29, em 07/10/2026. A preparação documental da 5.6 continua parcial.

## Escopo e versões avaliadas

Repositório experimental: `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. Fonte dos ensaios locais do checkpoint 28: commit `6385d70886e24f3c53edbac014e1dc5d9ced7c42`, Python 3.12.14/Linux. As rodadas anteriores mantêm seus próprios registros de versão.

Na sessão do professor: Windows, Python 3.10.2, cópia ZIP anterior e segunda execução com `-X utf8`, porta 8002 e base nova. **O commit exato dessa cópia e as versões do Chrome/Narrador não foram confirmados.** O êxito dessa sessão não prova que o professor baixou o arquivo `servico.py` corrigido. Ambiente e limites constam nos registros 25–28.

O sistema-base Cantina Horizonte liga Análise, Banco de Dados, Programação, Web/API, QTS e Git. O conteúdo tem 81 etapas de ensino. Produção `mundobitbyte/site`, domínio oficial, Firebase e scripts SQL protegidos foram preservados. App Inventor prático, Santa Filomena e Academia ficaram fora do escopo.

## Evidências disponíveis

| Evidência | O que sustenta | Limite |
|---|---|---|
| [Checkpoint 12](checkpoint-12-banco-de-dados.md) | Práticas didáticas de consulta, transação, backup e restauração. | Não define uma política completa de operação real. |
| [Checkpoint 17](evidencia-depurador-17.json) | Sessão interativa de pdb com argumentos e retornos observados. | Não comprova execução no VisuAlg. |
| [Checkpoint 21](evidencia-interface-21.json) | Pedido, cupom e estados em Chromium real integrado à API/serviço/SQLite temporário; 38/38 casos de acessibilidade e 25/25 de integração. | A rodada não usou leitor de tela nem participante; transporte interno das chamadas descrito no registro. |
| [Checkpoint 23](verificacao-checkpoint-23.json) | Estrutura, vínculos, código exibido e hashes protegidos conferidos; revisão de pontes de leitura. | Não comprova uso pedagógico nem anuncia execução nova das suítes. |
| [Checkpoint 25](evidencia-previa-windows-25.json) | Aplicação e aula curricular abertas por URL local no Windows do professor. | Não comprova compreensão do percurso. |
| [Checkpoint 26](evidencia-sql-utf8-26.json) | Falha reproduzida sob padrão cp1252; leitura UTF-8 corrigida; duas regressões falharam antes e passaram depois. | Não houve inspeção do schema do banco Windows nem reparo automático da base antiga. |
| [Checkpoint 27](evidencia-narrador-windows-27.json) | Confirmações do professor com Narrador; registro, consulta, controles e recusas; nova sessão UTF-8 até Entregue. | Sem áudio ou transcrição individual de cada transição/foco; sem avaliação da compreensão com participante. |
| [Checkpoint 28](evidencia-retomada-28.json) | 89 testes Python aprovados; 12 observações HTTP; retorno do percurso corrigido; relato de navegação aparentemente correta. | Ensaios Linux/HTTP não substituem zoom, cópia e uso pedagógico no computador. |

As grandezas dessas rodadas não são somadas como um único total de testes. A contagem histórica anterior à sessão Windows era **25/31**. A situação atual é **27/31 concluídas; 4 abertas**.

## Resultado por critério ainda aberto ou recentemente concluído

A [ficha de retomada](registro-retomada.md) conserva os relatos e seus limites.

| Critério | Resultado registrado | O que falta |
|---|---|---|
| 4.8 — VisuAlg e pdb | Pdb concluído; VisuAlg adiado pelo professor. | Execução real dos arquivos no VisuAlg. O adiamento não impede o trabalho independente. |
| 4.9 — Percurso em uso | **Parcial:** professor relatou navegação aparentemente correta, sem garantir ausência de falhas. [Registro 28](checkpoint-28-retomada-no-celular.md). | R07: zoom 200% e copiar/conferir um bloco no computador; R08: revisão pedagógica com participante. |
| 5.3 — Acessibilidade | **Concluída:** ensaios de layout, teclado e foco complementados pelas confirmações com Narrador Windows. [Registro 27](evidencia-narrador-windows-27.json). | Sem pendência de encerramento desta subetapa; os limites documentados não equivalem a uma auditoria WCAG completa. |
| 5.4 — Prévia compatível | **Concluída:** aplicação e página curricular por URL local no Windows do professor. [Registro 25](evidencia-previa-windows-25.json). | Sem pendência de encerramento desta subetapa. |
| 5.5 — Uso e compreensão | **Bloqueada:** observação com participante não realizada. | R08: participante explicar quantidade, regras, persistência e evidência, conforme ficha. |
| 5.6 — Parecer e entrega | **Parcial:** resultados, versões, reservas e critérios consolidados nesta minuta. | Analisar os resultados restantes e registrar a decisão final. |

## Falhas e correções consideradas

A tentativa de avançar depois de Confirmado retornou HTTP 503 na sessão Windows anterior. A leitura de SQL sem codificação explícita reproduziu a corrupção de `Em preparação` sob cp1252. O serviço passou a ler UTF-8 em três pontos; dois testes de regressão verificaram a correção. A sessão do ZIP anterior com `-X utf8` e base nova chegou a Entregue. O log original não revelou a exceção SQLite: a causa foi reproduzida localmente, sem afirmar inspeção da base do professor. [Registros 26](evidencia-sql-utf8-26.json) e [27](evidencia-narrador-windows-27.json).

O retorno do percurso para `/curso/index.html` tinha 404 registrado no log. No checkpoint 28, passou a apontar para a aplicação da Cantina pela rota já permitida; 12 observações HTTP conferiram retorno, recursos, API e entradas das seis disciplinas. Leituras de consulta e de fixtures de teste também receberam UTF-8 explícito. [Registro 28](checkpoint-28-retomada-no-celular.md).

## Fundamentação provisória e decisão final

O laboratório tem evidência para pedido, cupom, estados, prévia local e acessibilidade no escopo registrado. O percurso interdisciplinar e a entrega parcial estão preparados. A compreensão pedagógica ainda precisa de observação com participante; o relato do professor não substitui essa avaliação.

Reservas que permanecem: VisuAlg sem execução; zoom/cópia sem confirmação; compreensão com participante não observada; versão exata da cópia Windows desconhecida. Esses itens permanecem explícitos para a avaliação final.

- Decisão de encerramento da entrega: **pendente dos critérios acima**.
- Responsável pela decisão e data: **registrar na avaliação final**.
- Registro consolidado até aqui: checkpoint 29, 07/10/2026; sem novos ensaios funcionais ou humanos nesta atualização.

Etapa não executada não recebe aprovação por inferência. A consolidação documental não aumenta a contagem de subetapas concluídas.

O núcleo usa dados fictícios e não tem autenticação por usuário nem chave de idempotência de venda. Uma conclusão sobre o laboratório didático não constitui liberação para operação real, nem autorização de publicação no site oficial.
