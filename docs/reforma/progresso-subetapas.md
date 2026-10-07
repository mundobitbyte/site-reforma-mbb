# Acompanhamento da reforma — subetapas de trabalho

A contagem detalhada foi fixada no checkpoint 16 para mostrar avanço real. Não é uma contagem que já existia antes. Mantém as cinco macroetapas anteriores e organiza seu escopo em 31 subetapas. Mudanças futuras de escopo devem ser registradas, sem alterar o denominador silenciosamente.

**26/31 concluídas; 5 pendentes. Posição atual: Entrega 5.3, leitor de tela real. A prévia direta 5.4 foi concluída na sessão Windows do professor.**

| Macroetapa | Concluídas / total | IDs ainda pendentes |
|---|---:|---|
| Pedido persistente | **6/6** | — |
| Cupom | **5/5** | — |
| Estados do pedido | **5/5** | — |
| Percurso curricular | 7/9 | 4.8, 4.9 |
| Entrega | 3/6 | 5.3, 5.5, 5.6 |

## Cada subetapa

### 1. Pedido persistente

| ID | Trabalho | Situação |
|---|---|---|
| 1.1 | Modelo e schema do pedido | Concluída |
| 1.2 | Serviço de registro e persistência | Concluída |
| 1.3 | API e testes do servidor | Concluída |
| 1.4 | Interface criada | Concluída |
| 1.5 | Terminal e clientes exercitados | Concluída |
| 1.6 | Registrar, recarregar e consultar pelo navegador | **Concluída — checkpoint 21** |

### 2. Cupom

| ID | Trabalho | Situação |
|---|---|---|
| 2.1 | Política de mínimo, validade e uso | Concluída |
| 2.2 | Migração e serviço do cupom | Concluída |
| 2.3 | API e interface criadas | Concluída |
| 2.4 | Regras, transação e clientes exercitados | Concluída |
| 2.5 | Aplicar e recusar cupom pela interface real | **Concluída — checkpoint 21** |

### 3. Estados do pedido

| ID | Trabalho | Situação |
|---|---|---|
| 3.1 | Sequência e estado esperado definidos | Concluída |
| 3.2 | Migração, serviço e histórico | Concluída |
| 3.3 | API e interface criadas | Concluída |
| 3.4 | Transições, disputa e rollback exercitados | Concluída |
| 3.5 | Acompanhar e avançar no navegador | **Concluída — checkpoint 21** |

### 4. Percurso curricular

| ID | Trabalho | Situação |
|---|---|---|
| 4.1 | Análise — 15 etapas de ensino | Concluída |
| 4.2 | Banco de Dados — 11 capítulos | Concluída |
| 4.3 | Programação — 15 etapas | Concluída |
| 4.4 | Web/API — 13 etapas | Concluída |
| 4.5 | QTS — 17 pontes | Concluída |
| 4.6 | Git — 10 etapas | Concluída |
| 4.7 | Estrutura, links e código exibido conferidos | Concluída |
| 4.8 | Ensaios VisuAlg e depurador interativo | Parcial: pdb concluído; VisuAlg será testado depois pelo professor |
| 4.9 | Revisão visual e pedagógica do percurso em uso | Bloqueada |

### 5. Entrega

| ID | Trabalho | Situação |
|---|---|---|
| 5.1 | Verificação estrutural portátil e registro reproduzível | Concluída |
| 5.2 | Guia consolidado de execução, evidências e pendências | Concluída |
| 5.3 | Acessibilidade real: 360 px, teclado, foco e leitura | **Parcial:** 360/320 px, teclado, foco, DOM e árvore AX confirmados; leitor de tela real pendente |
| 5.4 | Prévia em ambiente compatível | **Concluída — checkpoint 25, Windows do professor** |
| 5.5 | Rodada final de uso integrado e compreensão | Bloqueada |
| 5.6 | Parecer e entrega final após os critérios de saída | Parcial: orientação da entrega preparada; encerramento aguarda critérios de saída |

## Não confundir trabalho com aulas
O conteúdo central tem 81 etapas de ensino: Análise 15; Banco de Dados 11; Programação 15; Web/API 13; QTS 17; Git 10. Essas seis adaptações estão escritas. As 81 etapas de ensino não são 81 pendências do projeto e não entram no denominador 31.
Interface criada não significa interface testada em navegador. Conferir estrutura não significa avaliar uso com pessoas. A contagem das cinco macroetapas continuava igual porque cada uma ainda tinha critério de conclusão pendente.

## Bloqueios e próximos ensaios
- O Chromium real foi usado no checkpoint 21. A navegação direta por URL continua bloqueada pela política gerenciada do ambiente, mas isso não bloqueia mais 1.6, 2.5 e 3.5: a interface foi exercitada no navegador e as chamadas foram encaminhadas internamente ao FastAPI real com banco SQLite temporário.
- A prévia direta 5.4 foi comprovada no Chrome do Windows do professor: aplicação e aula curricular abertas por URL local. A restrição histórica do Chromium gerenciado não bloqueia essa conclusão.
- Depurador pdb executado: argumentos e retornos inspecionados, total 2200 centavos. VisuAlg ficará para teste posterior do Professor Ronaldo, conforme sua instrução; não bloqueia os demais trabalhos. Leitor de tela real e compreensão com participante continuam não executados.
- Parecer/entrega final depende desses critérios; não é falta de aprovação para o trabalho já autorizado.

Nada foi enviado ao repositório oficial. Não foi solicitada nova autorização. A contagem detalhada será usada nas próximas falas; cada avanço deve ter evidência.

## Avanço no checkpoint 17
A subetapa 4.8 tem dois ensaios: o depurador foi concluído e o VisuAlg continua pendente. A contagem permanece 22/31, sem reduzir o critério ou alterar o denominador. [Evidência do depurador](evidencia-depurador-17.json) · [Diagnóstico de acesso](diagnostico-acesso-17.json).

## Preparação no checkpoint 18
A subetapa 5.4 tem iniciador local integrado e roteiro para executar as validações pendentes com banco temporário. O ensaio HTTP do iniciador está registrado em [evidencia-previa-local-18.json](evidencia-previa-local-18.json). O navegador continua sem resultado; a 5.4 permanece aberta, e a contagem segue 22/31.

## Avanço no checkpoint 19
O professor assumiu o teste posterior do VisuAlg. A preparação da 5.3 avançou com nomes de produto nos controles, atalho para conteúdo e manejo de foco ao corrigir quantidade ou remover item. Seis casos de lógica passaram em Node, com elementos substitutos de teste; isso não prova o comportamento em navegador/leitor de tela. [Evidência](evidencia-interface-19.json). O total permanece 22/31 e os critérios não foram reduzidos.

## Avanço no checkpoint 20
A preparação da 5.3 inclui foco após operações assíncronas e preservação do campo em edição ao atualizar produtos. A interface passou nos 17 casos de lógica (seis anteriores mais 11 novos); esse conjunto foi reexecutado porque a mesma interface mudou. Não foram repetidas as suítes do servidor/clientes ou do iniciador. [Evidência](evidencia-interface-20.json). Navegador/leitor de tela ainda sem confirmação; total 22/31, VisuAlg reservado ao professor.

## Avanço no checkpoint 21
A Cantina foi executada em Chromium real com as fontes do branch conferidas byte a byte. A rodada de acessibilidade passou **38/38** e a rodada integrada navegador + FastAPI/serviço/SQLite temporário passou **25/25**. Um overflow de texto longo em 320 px foi encontrado e corrigido no CSS canônico, com sincronização do código exibido em Web/API. Com isso, **1.6, 2.5 e 3.5 foram concluídas** e o total passou para **25/31 concluídas, 6 pendentes**. A 5.3 permanece parcial apenas porque ainda falta leitor de tela real. [Evidência](evidencia-interface-21.json) · [Checkpoint](checkpoint-21-navegador-integracao.md).

## Avanço no checkpoint 22
O professor adiou os novos ensaios. A revisão editorial alinhou as declarações de situação ao checkpoint 21 e ao pdb já executado. A entrada principal orienta a prévia temporária; a matriz, o capítulo e os exercícios QTS14 foram sincronizados. A [entrega parcial](entrega-parcial.md) prepara a 5.6, que permanece parcial. Total mantido: **25/31**, seis pendentes. [Registro](checkpoint-22-revisao-sem-ensaios.md).

## Avanço no checkpoint 23
A preparação da 5.6 inclui revisão de oito capítulos: posições/chaves, erro previsto, importação, operadores, mensagens e ausência de cupom foram explicados no ponto de uso. Páginas e matrizes de conceitos foram alinhadas. Programas preservados; nenhum novo ensaio. Total **25/31**, seis pendentes. [Registro](checkpoint-23-pontes-de-leitura.md).

## Avanço no checkpoint 24
Preparadas a [minuta do parecer](parecer-final-minuta.md) e a [ficha curta da sessão](registro-retomada.md). Evidências já existentes identificadas; campos de resultados e decisão final permanecem vazios. A 5.6 continua parcial; total **25/31**, seis pendentes. [Registro](checkpoint-24-preparacao-do-parecer.md).

## Avanço no checkpoint 25
A sessão Windows confirmou aplicação e página curricular diretamente em `127.0.0.1:8001`. R01/5.4 passou; total **26/31**, cinco pendentes. As capturas não comprovam leitor de tela nem compreensão. [Evidência](evidencia-previa-windows-25.json). Próximo: 5.3.
