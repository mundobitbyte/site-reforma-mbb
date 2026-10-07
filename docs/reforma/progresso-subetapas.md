# Acompanhamento da reforma — subetapas de trabalho

A contagem detalhada foi fixada no checkpoint 16 para mostrar avanço real. Não é uma contagem que já existia antes. Mantém as cinco macroetapas anteriores e organiza seu escopo em 31 subetapas. Mudanças futuras de escopo devem ser registradas, sem alterar o denominador silenciosamente.

**22/31 concluídas; 9 pendentes. Posição atual: Entrega 5.3 (3/6), bloqueada pelo caminho de navegador.**

| Macroetapa | Concluídas / total | IDs ainda pendentes |
|---|---:|---|
| Pedido persistente | 5/6 | 1.6 |
| Cupom | 4/5 | 2.5 |
| Estados do pedido | 4/5 | 3.5 |
| Percurso curricular | 7/9 | 4.8, 4.9 |
| Entrega | 2/6 | 5.3, 5.4, 5.5, 5.6 |

## Cada subetapa

### 1. Pedido persistente

| ID | Trabalho | Situação |
|---|---|---|
| 1.1 | Modelo e schema do pedido | Concluída |
| 1.2 | Serviço de registro e persistência | Concluída |
| 1.3 | API e testes do servidor | Concluída |
| 1.4 | Interface criada | Concluída |
| 1.5 | Terminal e clientes exercitados | Concluída |
| 1.6 | Registrar, recarregar e consultar pelo navegador | Bloqueada |

### 2. Cupom

| ID | Trabalho | Situação |
|---|---|---|
| 2.1 | Política de mínimo, validade e uso | Concluída |
| 2.2 | Migração e serviço do cupom | Concluída |
| 2.3 | API e interface criadas | Concluída |
| 2.4 | Regras, transação e clientes exercitados | Concluída |
| 2.5 | Aplicar e recusar cupom pela interface real | Bloqueada |

### 3. Estados do pedido

| ID | Trabalho | Situação |
|---|---|---|
| 3.1 | Sequência e estado esperado definidos | Concluída |
| 3.2 | Migração, serviço e histórico | Concluída |
| 3.3 | API e interface criadas | Concluída |
| 3.4 | Transições, disputa e rollback exercitados | Concluída |
| 3.5 | Acompanhar e avançar no navegador | Bloqueada |

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
| 5.3 | Acessibilidade real: 360 px, teclado, foco e leitura | Bloqueada |
| 5.4 | Prévia em ambiente compatível | Bloqueada |
| 5.5 | Rodada final de uso integrado e compreensão | Bloqueada |
| 5.6 | Parecer e entrega final após os critérios de saída | Pendente |

## Não confundir trabalho com aulas
O conteúdo central tem 81 etapas de ensino: Análise 15; Banco de Dados 11; Programação 15; Web/API 13; QTS 17; Git 10. Essas seis adaptações estão escritas. As 81 etapas de ensino não são 81 pendências do projeto e não entram no denominador 31.
Interface criada não significa interface testada em navegador. Conferir estrutura não significa avaliar uso com pessoas. A contagem das cinco macroetapas continuava igual porque cada uma ainda tinha critério de conclusão pendente.

## Bloqueios e próximos ensaios
- Acesso atual de navegador recusado entre ambientes (`net::ERR_CONNECTION_REFUSED`) após iniciar API local isolada. A restrição do guia Sites foi citada fora do seu contexto; ela não se aplica a este projeto GitHub.
- Prévia compatível com a API Python não confirmada. Publicar só HTML não executa o serviço.
- Depurador pdb executado: argumentos e retornos inspecionados, total 2200 centavos. VisuAlg ficará para teste posterior do Professor Ronaldo, conforme sua instrução; não bloqueia os demais trabalhos. A compreensão com participante continua não executada.
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
