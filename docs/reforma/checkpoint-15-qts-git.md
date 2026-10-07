# Reforma MbB — checkpoint 15: QTS e Git

Data local: 7 de outubro de 2026.
Escrita somente em `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`.
Nenhuma autorização pendente. O repositório oficial não recebeu escrita deste trabalho.

## Avanço desta rodada
- QTS: 17 pontes às aulas que já usam Cantina; 21 páginas adicionais, caderno, plano, matriz de casos, registro de defeito, roteiro manual e parecer.
- Git: 10 etapas da mesma Cantina; 14 páginas adicionais, caderno e classificação das 57 entradas preservadas do acervo Git/GitHub/exercícios/comandos.
- Todas as disciplinas previstas no núcleo agora têm passagem curricular adicional. Isso é conclusão da escrita do conteúdo central, não da validação integral do percurso ou da entrega final.
- A v1 com defeitos, o serviço/API/interface e os materiais originais foram preservados. Os quatro arquivos existentes alterados são navegação, dossiê, passagem final de Web/API e README.

## Evidência nova
- Comparador portátil: 9 cenários em duas versões, 18 observações com bancos novos temporários. Conferiu respostas, preservação das tabelas na recusa e preço/saldo nos limites válidos.
- A execução confirma a caracterização dos defeitos da v1 e as regras exercitadas da evolução. Não aprova a v1 nem declara que seus arquivos foram corrigidos.
- TDD: recorte adicional de RF-03 com oito amostras por fase. RED revelou quatro desvios; GREEN e REFACTOR satisfizeram as amostras. Não afirma que a aplicação inteira tenha sido desenvolvida por TDD.
- Git real: 62 comandos em repositórios temporários; revert preservando histórico, índice versus edição, branch, conflito resolvido por RF-03, visita por worktree, remoto bare local, clone, fetch e pull --ff-only.
- Esse roteiro não acessou GitHub nem alterou repositórios de trabalho. Não valida autenticação, Pull Request ou pipeline remoto.
- Estrutura: 106 páginas HTML, 3348 referências locais, 100 botões de cópia e 48 arquivos canônicos de código exibido; zero erros. Funções dos casos foram conferidas nos arquivos reais.

## Evidência anterior reutilizada
87 casos Python aprovados no checkpoint 13 e 26 casos JavaScript no 14: 113 casos registrados nessas suítes. Não foram reexecutados para escrever as pontes; aplicação e testes originais não foram alterados.
As 18 observações, 62 comandos e fases TDD não foram somadas a esses casos. Cobertura percentual não foi medida. Actions permanece desativado; a receita de QTS é texto inerte.

## Etapas restantes
Continuam **5 macroetapas abertas** conforme o critério anterior:

| Macroetapa | Situação |
|---|---|
| Pedido persistente | Servidor, terminal e HTTP exercitados; fluxo de navegador pendente |
| Cupom | Servidor e cliente exercitados; uso pela interface real pendente |
| Estados | Serviço e integração exercitados; uso pela interface real pendente |
| Percurso curricular | Conteúdo central de Análise, BD, Programação, Web/API, QTS e Git escrito; validação visual/de uso e revisão final pendentes |
| Entrega | Acessibilidade em uso, runtime visual, prévia compatível e documentação final pendentes |

Não há nova disciplina obrigatória aguardando adaptação. A pendência principal agora é validação e entrega.

## Bloqueio e limites
O navegador continua sem caminho supervisionado confirmado: a tentativa anterior de prévia não encontrou dev script/configuração static compatível; a conexão direta foi recusada, e a skill control-browser está indisponível. O guia já consultado determina: “If that skill is unavailable, do not improvise another browser-control path.”
Fonte dessa restrição: `skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md`.
Nenhuma nova tentativa de browser, hospedagem ou publicação foi feita nesta rodada.
Pendentes: navegador real, 360 px, teclado/foco, compreensão com participante, VisuAlg real, depurador interativo e revisão final. TestClient e Git local não substituem esses ensaios.
Parecer desta rodada: material adicional pronto para revisão; não liberar como produto final.

## Preservação
- `pages/bancodedados.html`: f46eee0470402bc9462c1179fb5fb3fa75099dcc6a442af1dcc572556cbb5f04
- `assets/seguranca-dados/mysql-general-log-lab.sql`: b68631aad643d6a2400dd3dc4ac490a332b337ebc19431c932b34f9502ce6352
- Nenhuma diferença local em pages, js, css, Cantina v1, app.py/servico.py/frontend da evolução e SQL protegido em relação ao snapshot de referência.

Próximo passo: consolidar a revisão final de execução/documentação e resolver o caminho autorizado de validação visual quando disponível, sem refazer as fatias concluídas.
