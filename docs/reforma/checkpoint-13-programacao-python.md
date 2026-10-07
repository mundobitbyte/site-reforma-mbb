# Reforma MbB — Checkpoint 13

Data: 7 de outubro de 2026.

## Resultado
Programação/Python foi ligada à mesma Cantina: 15 etapas, exercícios encadeados, caderno, 13 arquivos Python e ponte com três arquivos VisuAlg. O material parte da necessidade e chega a uma interface de terminal que reutiliza o serviço persistente já construído.

Escrita externa somente em `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O repositório oficial, domínio e Firebase não receberam escrita deste trabalho. Nenhuma aprovação ficou pendente. O acervo original de Programação, Python, VisuAlg, Análise, BD e a Cantina v1 permanece preservado.

## Faltam 5 macroetapas

| Macroetapa | Estado real |
|---|---|
| 1 — Pedido persistente | Servidor e terminal verificados; interface Web criada, teste de navegador pendente |
| 2 — Cupom | Servidor e terminal verificados; interface Web criada, teste de navegador pendente |
| 3 — Estados | Servidor e terminal verificados; interface Web criada, teste de navegador pendente |
| 4 — Percurso curricular | Análise: 15 etapas; BD: 11 capítulos/exercícios; Programação/Python: 15 etapas/exercícios e ponte VisuAlg. Web/API, QTS e Git pendentes |
| 5 — Revisão e entrega | Visual, acessibilidade em execução, prévia, revisão final e entrega pendentes |

A contagem permanece 5 porque cada macroetapa ainda tem uma pendência necessária. As adaptações concluídas avançam dentro da etapa 4.

## Entregas desta fatia
- 18 páginas HTML novas: 15 etapas, índice, exercícios e ponte.
- Progressão: algoritmo/ambiente → valores → entrada → decisão → repetição → acumulação → coleções → função → exceções → módulos → JSON → objetos → persistência → testes → defesa integrada.
- Matriz de conceitos/evidências e classificação dos 40 temas Python do inventário existente: 27 ligados às etapas, 13 mantidos como aprofundamento. As aulas originais completas não foram reescritas nem removidas.
- Interface de terminal com os métodos da classe Cantina, banco didático próprio, preparação única sem reset, produto, venda, consulta e avanço protegido pelo estado esperado.
- A aplicação segue com seu serviço/API/schema existentes. Os pequenos exemplos são simulações identificadas; a venda usa o serviço comum.
- Navegação atualizada no percurso, dossiê e integrador de BD. Um planejamento existente no GitHub foi apenas recuperado para a cópia local onde faltava.

## Verificação executada
**87 casos da suíte completa passaram nesta etapa:** 63 de aplicação/API, 11 de BD e 13 novos do terminal. Houve um aviso de depreciação da dependência do cliente de teste, sem falhas. Os três métodos unittest do exemplo didático também passaram; não estão incluídos nos 87.

**20 execuções dos exemplos** verificaram cálculo, fronteiras, repetição com saída, entrada inválida corrigida, agrupamento, função/módulo, JSON e recusa de sobrescrita, objetos, testes nativos e importação sem execução automática.

**10 comandos reais do terminal** confirmaram primeira venda de 2 Águas por 600 centavos, persistência, avanço para Confirmado, recusa de estado antigo, cupom aplicado a 5 Sucos por total de 2700 e recusa de preparar novamente sem perder os dados.

**50 páginas HTML** foram verificadas estruturalmente: 1474 referências locais, 68 botões de cópia, 29 arquivos canônicos exibidos e 40 IDs do acervo Python, sem erros. Isso não comprova aparência ou interação no navegador.

| Arquivo protegido | SHA-256 preservado |
|---|---|
| pages/bancodedados.html | f46eee0470402bc9462c1179fb5fb3fa75099dcc6a442af1dcc572556cbb5f04 |
| assets/seguranca-dados/mysql-general-log-lab.sql | b68631aad643d6a2400dd3dc4ac490a332b337ebc19431c932b34f9502ce6352 |

## Limites e bloqueio
Os três exemplos VisuAlg foram revisados por leitura/teste de mesa, mas não executados no VisuAlg. Não houve sessão interativa de depuração ou avaliação com estudantes.

A validação visual continua bloqueada: conexão direta recusada anteriormente; prévia supervisionada sem configuração compatível; alternativa requerida indisponível. Essas tentativas não foram repetidas. A orientação de [sites-preview-troubleshooting](skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md) diz: “If that skill is unavailable, do not improvise another browser-control path.” Isso limita a validação visual, sem impedir esta adaptação ou testes de servidor. Nada foi publicado no domínio oficial.

## Próxima parte
Adaptar Web/API da mesma Cantina, relacionando HTML, CSS, JavaScript, contrato HTTP e servidor sem duplicar regras no cliente; depois QTS e Git. Manter todas as pendências visuais e de revisão registradas.

Entrada: `laboratorio/percurso-mbb/programacao/index.html`.
Decisões detalhadas: `docs/reforma/adaptacao-programacao-cantina.md`.

