# Reforma MbB — checkpoint 16: subetapas e execução consolidada

Data local: 7 de outubro de 2026.
Repositório de escrita: `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`.
Estado inicial desta rodada: checkpoint 15, commit e923f0c0b3d989e6c78f6eb313fd174fe9e45e55.

## Contagem solicitada
A subdivisão foi organizada agora, a partir dos critérios e evidências existentes. Não havia contagem fixa de subetapas antes. Mantém as cinco macroetapas, com 31 subetapas de trabalho; denominadores só podem mudar com revisão explícita de escopo.

**Antes desta rodada: 20/31 concluídas. Agora: 22/31 concluídas, 9 pendentes.**

| Macroetapa | Concluídas / total | IDs pendentes |
|---|---:|---|
| Pedido persistente | 5/6 | 1.6 |
| Cupom | 4/5 | 2.5 |
| Estados do pedido | 4/5 | 3.5 |
| Percurso curricular | 7/9 | 4.8, 4.9 |
| Entrega | 2/6 | 5.3, 5.4, 5.5, 5.6 |

Posição atual: **Entrega 5.3 (3/6), acessibilidade real, bloqueada pelo caminho de navegador**. Nesta rodada foram concluídas 5.1 (verificação portátil) e 5.2 (guia consolidado).
Os IDs pendentes indicam a posição dentro de cada macroetapa; a listagem integral, com critérios e evidências, está em `docs/reforma/progresso-subetapas.md` e `.json`, além do painel `laboratorio/percurso-mbb/acompanhamento.html`.

Aulas são outra contagem: **81 etapas de ensino já escritas** — Análise 15; Banco de Dados 11; Programação 15; Web/API 13; QTS 17; Git 10. Não são 81 tarefas pendentes.

## O que avançou
- Verificador anterior promovido a comando portátil, lendo o próprio checkout sem caminho de workspace fixo ou inventário temporário externo.
- IDs dinâmicos Git lidos dos arrays reais do acervo; capítulos de BD 0–10 separados do caderno de exercícios 99.
- Comando padrão: `python laboratorio/percurso-mbb/verificar_percurso.py`.
- Confere estrutura HTML, links/âncoras, blocos de código, matrizes, funções de teste, hashes protegidos e consistência das 31 subetapas/evidências.
- Usa apenas biblioteca padrão Python; não abre banco, servidor ou navegador, não usa rede, não escreve fonte nem instala dependências.
- Guia único de ambiente, aplicação, testes, bancos separados, práticas e critérios de entrega. Separa conferência de comandos que criam vendas fictícias.
- Painel de subetapas ligado ao percurso; README ligado ao guia e acompanhamento.

## Verificação desta rodada
O novo comando passou a partir de outra pasta: 107 HTML (incluindo o painel de acompanhamento), 3358 referências locais, 101 botões de cópia e 48 arquivos canônicos exibidos; zero erros.
Vínculos e caracteres de controle dos documentos novos também foram conferidos. O CLI instalado confirmou a opção `uvicorn --app-dir` usada no roteiro. Não foi iniciado servidor ou aberto banco de trabalho para escrever este guia.

## Evidência anterior preservada
87 testes Python do checkpoint 13 e 26 JavaScript do 14: 113 casos registrados nessas suítes, sem nova execução integral nesta rodada.
As práticas QTS/Git e requisições HTTP anteriores não foram somadas a esses casos. O comando estrutural também não é teste de uso ou de regra de negócio.
Nenhuma diferença local em pages, js, css, Cantina v1, app.py/servico.py/frontend da evolução ou SQL protegido em relação ao snapshot de referência. Nenhuma escrita foi feita no repositório oficial, domínio ou Firebase.

## Bloqueios exatos
- 1.6, 2.5, 3.5, 4.9, 5.3 e 5.5 dependem do navegador real; compreensão de uso também depende de participante.
- 4.8: VisuAlg e depurador interativo continuam não executados.
- 5.4: não há prévia confirmada que execute o serviço Python integrado; publicar só HTML não atenderia esse critério.
- 5.6: parecer/entrega final depende dos critérios acima; permanece pendente.

A tentativa anterior de prévia não encontrou dev script/configuração static compatível; a conexão direta foi recusada; a skill control-browser está indisponível. O guia já consultado determina: “If that skill is unavailable, do not improvise another browser-control path.”
Fonte: `skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md`.
Não foi repetida tentativa idêntica nem improvisado outro caminho nesta rodada.

Não há autorização pendente. As subetapas acessíveis de verificação e documentação foram concluídas; as demais exigem os ensaios/ambientes registrados. Não declarar produto final liberado.
