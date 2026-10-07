# Adaptação de Análise — Cantina Horizonte

Data: 7 de outubro de 2026. Fonte: snapshot protegido `4f8a39322afff1b44df039bf6247c5f85135f973`.
Destino adicional: `laboratorio/percurso-mbb/analise/`.
As 15 etapas foram classificadas e receberam uma adaptação curada do conteúdo essencial.
As páginas originais, suas atividades, seus diagramas e suas referências permanecem integralmente disponíveis.
Isto não é substituição global do módulo nem certificação de aula já validada com estudante.

| Etapa | Essencial mantido/adaptado | Entrega e reuso | Aprofundamento/referência |
|---|---|---|---|
| 0 | Necessidade antes da ferramenta, ambiguidade e ciclo | E01 problema e dúvidas → levantamento | História do balanço resumida; fonte integral preservada |
| 1 | Papéis, stakeholders, fronteira, premissa/restrição | E02 → escopo do modelo e das tarefas | Cadastro/login não inferidos do papel |
| 2 | Entrevista, observação, documentos, origem | E03 → requisitos com fonte | Roteiro a executar; não há entrevista real |
| 3 | AS-IS, ação, decisão, espera e retrabalho | E04 → ramo de estoque insuficiente | AS-IS explicitamente hipotético; desenho a construir |
| 4 | Contexto, DFD, dicionário, tabela/árvore de decisão | E05 → dados e condições de cupom | DFD amplo depende da pergunta; não criar desenho por formalidade |
| 5 | TO-BE, responsabilidades, participantes/raias | E06 → venda e preparação sem segunda baixa | BPMN a construir a partir do processo descrito |
| 6 | RF/RQ, regra, fonte, verificação/validação, aceitação, prioridade | E07 → matriz RF-01..09 e RQ-01/02 | Fonte de QTS conserva IDs; não reaproveitar RN de reparo |
| 7 | Ator/objetivo, condições, alternativas, include/extend proporcionais | E08 → registrar/consultar/avançar | Papéis de análise não são autorização implementada |
| 8 | Atividades, sequência, domínio, cardinalidade, estados | E09 → pedido/item/produto, preço histórico e RF-09 | Cliente não vira tabela sem necessidade |
| 9 | Épico/feature/história/tarefa, 3 Cs, backlog, Story Map, MVP, Ready/Done | E10 → fatias e critérios de passagem | INVEST como apoio; MVP não declarado validado no mundo real |
| 10 | Jornada/tarefa, wireframe/protótipo, observação, acessibilidade, reteste | E11 → sessão e evidência de RQ | Rascunho estático adicional; nenhum resultado humano inventado |
| 11 | Qualidade, privacidade, autenticação/autorização, API, falha e repetição | E12 → contrato real e limites | Notificação/webhook fora; idempotência da venda ainda ausente |
| 12 | Viabilidade, construir/comprar/integrar, PoC, risco/problema, mitigação/contingência, impacto | E13 → matriz dado/operação/teste | Sem orçamento, carga ou classificação de risco quantitativa inventados |
| 13 | Glossário, Markdown, Git/commit, ADR, crítica de IA | E14 → documentação versionada | IA no produto/RAG aprofundamento; regra do cupom é determinística |
| 14 | Defesa, suficiência de modelos, cascata/iterativo/incremental/espiral/ágil | E15 → passagem ao mesmo BD/código/teste | Não confundir 63 casos com entrega completa |

## Revisão circular/espiral

Especialista: a semântica de registrar venda e avançar preparação deve impedir dupla baixa.
A consulta e as matrizes refletem o código real; os nomes de teste foram conferidos.
O schema sozinho não é apresentado como proteção de todas as regras operacionais.

Professor: cada etapa produz uma evidência reutilizada por outra disciplina.
O dossiê liga problema → RF → objetivo/tela → dado/operação → teste, preservando a origem.
O percurso não exige criar outro projeto para demonstrar o mesmo conceito.

Iniciante: a pergunta vem antes da sigla; exemplos são do mesmo pedido.
Dinheiro em centavos e papéis sem login/tabela recebem explicação explícita.
Hipótese, regra documentada, execução real e teste com pessoa são distinguidos.
O rascunho não anuncia pedido executável.

Macro: as etapas 11 e 12 reconhecem limites do contrato atual, inclusive repetição de POST
sem idempotência, consultas sem privacidade por usuário e ausência de autenticação.
Esses pontos precisam voltar ao escopo antes de uso real, sem expansão silenciosa nesta fatia.

## Verificação e limites

19 páginas HTML novas, cobrindo início do percurso, índice de Análise, 15 etapas,
dossiê e wireframe. Foram conferidas 513 referências locais e 11 nomes de teste,
com zero erros; IDs únicos, um h1 e idioma pt-BR nas 19 páginas.
O arquivo JavaScript adicional passou na conferência de sintaxe.
A navegação é estática e funciona como conteúdo sem JavaScript; o script adicional
cuida do menu e da cópia de comandos, sem Firebase, rede ou API demonstrativa.
Isso é inspeção estrutural, não clique, layout ou teste de teclado real.

Comparação local confirmou preservação de Análise original/CSS/JS, BD protegido e Cantina v1.
Não houve nova execução dos 63 casos do servidor, pois esta fatia não muda seu código ou SQL.

Pendente: varredura/adaptação de BD, Programação/Python, Web/API, QTS, Git e pontes do núcleo;
verificação visual e validação com pessoas. Não contar a macroetapa curricular como encerrada.
