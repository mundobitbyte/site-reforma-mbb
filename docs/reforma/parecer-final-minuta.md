# Cantina Horizonte — minuta do parecer final

**MINUTA: resultados finais e decisão ainda não preenchidos.** Preparada antes dos ensaios; não é aprovação da entrega completa.

## Escopo e versão

Repositório experimental: `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. Versão-base da preparação: `eea7cf6bf834e8fe8860b78024d3308bc93235b7`. Commit efetivamente avaliado: **a preencher com a ficha da sessão**.

O sistema-base Cantina Horizonte liga Análise, Banco de Dados, Programação, Web/API, QTS e Git. O conteúdo tem 81 etapas de ensino. Produção `mundobitbyte/site`, domínio oficial, Firebase e scripts SQL protegidos foram preservados. App Inventor prático, Santa Filomena e Academia ficaram fora do escopo.

## Evidências já disponíveis

| Evidência | O que sustenta | Limite |
|---|---|---|
| [Checkpoint 21](evidencia-interface-21.json) | Pedido, cupom e estados em Chromium real integrado à API/serviço/SQLite temporário; 38/38 casos de acessibilidade e 25/25 de integração. | Não comprova leitor de tela, participante ou prévia direta compatível. |
| [Checkpoint 17](evidencia-depurador-17.json) | Sessão interativa de pdb com argumentos e retornos observados. | Não comprova execução no VisuAlg. |
| [Checkpoint 12](checkpoint-12-banco-de-dados.md) | Práticas didáticas de consulta, transação, backup e restauração. | Não define uma política completa de operação real. |
| [Checkpoint 23](verificacao-checkpoint-23.json) | Estrutura, vínculos, código exibido e hashes protegidos conferidos; revisão de pontes de leitura. | Não comprova uso pedagógico nem anuncia execução nova das suítes. |

As grandezas dessas rodadas não são somadas como um único total de testes. A situação anterior à sessão é **25/31 concluídas; 6 pendentes**.

## Complementar depois dos ensaios

Fonte dos novos registros: [ficha de retomada](registro-retomada.md), preenchida com ambiente, versão e observações reais.

| Critério | Situação antes da sessão | Resultado e evidência após a sessão |
|---|---|---|
| 4.8 — VisuAlg e pdb | Pdb concluído; VisuAlg adiado pelo professor. | Não preenchido |
| 4.9 — Percurso em uso | Revisão visual/pedagógica com participante pendente. | **Parcial:** professor relatou navegação aparentemente correta. Zoom/cópia e compreensão com participante ainda pendentes; está no celular. [Registro 28](checkpoint-28-retomada-no-celular.md). |
| 5.3 — Acessibilidade | Chromium, 360/320 px, teclado e foco confirmados; leitor de tela real pendente. | **Concluída:** confirmação dos anúncios pelo professor com Narrador Windows, complementando a evidência técnica anterior. [Registro 27](evidencia-narrador-windows-27.json). |
| 5.4 — Prévia compatível | Iniciador verificado por HTTP; abertura direta no navegador pendente. | **Concluída:** aplicação e página curricular por URL local no Windows do professor. [Evidência 25](evidencia-previa-windows-25.json). |
| 5.5 — Uso e compreensão | Observação com participante pendente. | Não preenchido |
| 5.6 — Parecer e entrega | Preparação documental parcial; encerramento depende dos critérios anteriores. | Não preenchido |

Falha observada: **SQL sem codificação explícita impede Em preparação sob padrão cp1252**. Corrigida leitura UTF-8 em três pontos e verificada em dois testes de serviço. Sessão Windows do ZIP anterior com `-X utf8` e base nova confirmou a sequência completa; o download do arquivo corrigido não foi comprovado. [Registros 26](evidencia-sql-utf8-26.json) e [27](evidencia-narrador-windows-27.json). Itens não executados ou adiados: **a preencher**. Contagem atualizada com evidências: **27/31 concluídas; 4 pendentes**, após prévia e Narrador. Decisão final continua sem preenchimento.

## Decisão final — preencher somente após analisar os registros

- Resultado da entrega e escopo efetivamente validado: **a preencher**.
- Reservas ou pendências que permanecem: **a preencher**.
- Fundamentação por requisito, evidência e versão: **a preencher**.
- Responsável pela avaliação e data: **a preencher**.

Uma falha não impede registrar os demais resultados, mas deve permanecer explícita. Etapa não executada não recebe aprovação por inferência. O adiamento do VisuAlg permite avançar nos outros trabalhos; seu resultado não será inventado para fechar a contagem.

O núcleo usa dados fictícios e não tem autenticação por usuário nem chave de idempotência de venda. Uma conclusão sobre o laboratório didático não constitui liberação para operação real, nem autorização de publicação no site oficial.
