# Revisão 45 — Banco de Dados da Cantina Horizonte

Escopo autorizado: capítulos 0–10, caderno e apoios de BD. Método: situação → necessidade → conceito → prática → evidência; revisão técnica, pedagógica e como iniciante, sem simular uma sessão humana.

## Confirmado e corrigido

- BD00/primeiro registro e BD01/siglas: começo e conferência em linguagem simples, sem execução técnica prematura.
- DER: construção em três passos, diagrama próprio com descrição e leitura das cardinalidades.
- Normalização: transformação progressiva 1FN→2FN→3FN, preservando preço histórico e distinguindo fatos derivados.
- Ambiente: pasta correta, CMD/bash, Python/venv, tzdata, versão SQLite, fronteira entre comando terminal e SQL. Nenhum servidor da API é necessário para a prática de BD.
- JOIN: duas consultas intermediárias antes do JOIN maduro de três tabelas. Estrutura: uma consulta adicional de inspeção, sem substituir o schema.
- Recuperação: caminhos/arquivos, verificação e reuso de cópias; instrução corrigida para não mandar criar novamente um destino já existente após COMMIT.
- Transações: antes/durante/depois com números iniciais e aviso de que repetir COMMIT cria outra venda.
- SQL avançado: perguntas, resultados iniciais e mudanças após a transação, sem prometer ganho de desempenho.
- Integrador: checklist com caminhos, evidências e limites. Visão moderna: fundamentos separados de aprofundamentos opcionais.
- Caderno: BD00–BD03/BD10 conceituais sem campo SQL obrigatório; BD04–BD08 com execução real; BD09 com checklist. Exemplos são identificados como didáticos. Leitura HTML responsiva, cópia Markdown e retorno a cada capítulo.

## Observações preliminares descartadas ou delimitadas

Os 13 SQLs existentes são válidos nos testes desta revisão; não foram trocados. COMMIT, ROLLBACK, falha de FK, backup e exportação/restauração já funcionavam. LEFT JOIN/CTE/janelas/índice e diferenças MySQL/SQLite já tinham conteúdo correto: acrescentado apenas apoio de leitura/execução. O capítulo 10 já mantinha tecnologias avançadas fora da implementação: a classificação ficou explícita. Não foi necessário alterar serviço, migrações, dados da aplicação ou outras disciplinas.

## Testes executados antes da publicação

- 27 arquivos de BD coincidiram com o conteúdo publicado antes da edição.
- Todos os 18 arquivos SQL existentes no projeto e o módulo tradicional bancodedados.html mantiveram os hashes; comercio e demais exemplos não foram substituídos.
- Todos os blocos de código anteriores nas páginas de BD mantiveram conteúdo/IDs.
- 11 testes existentes de BD passaram, zero falhas. Execução em bancos temporários: consultas, proteção de destinos, somente leitura, integridade, reversão, cópias e restauração de SQL.
- CLI: 16 consultas executadas; 29 comandos com sucesso, incluindo preparação, inspeção, transações, cópias e consultas após COMMIT; 5 reexecuções recusadas sem apagar a origem.
- Comparação completa dos registros: backup, restauração binária e restauração SQL iguais; origem com venda posterior preservada.
- Ambiente Linux: venv criado/ativado; tzdata instalado por pip; Python 3.12.14 e SQLite 3.53.1 verificados. Não foi executado em Windows nem servidor MySQL.
- HTTP local: 15 HTMLs e Markdown retornaram 200. Caderno: 11 entregas e campos proporcionais conferidos.
- Verificador estrutural existente: executado, sem erros; scripts SQL canônicos preservados e novos SQLs incorporados aos blocos de cópia.

## Publicação e limites

Fluxo existente preservado: GitHub Pages, branch publicacao/cantina-estatica, raiz; desenvolvimento preparacao/isolamento-inicial recebe o mesmo conteúdo de BD. Sem alterar configuração/domínio/Firebase/produção.
Verificação pública e responsiva: pendente neste registro inicial, será acrescentada após conferir o conteúdo servido.
Navegador local não disponível nesta sessão; a conferência em navegador ocorrerá na publicação experimental pelo Chromium remoto, sem contornar políticas de acesso local.
Não declarar teste físico de celular/tablet, leitor de tela ou autonomia de aluno iniciante real. MySQL permanece material de referência protegido: as práticas executáveis desta revisão usam SQLite.

## Arquivos

Todos sob laboratorio/percurso-mbb/banco-de-dados: 11 capítulos 00–10; index.html; 99-exercicios.html (link ao caderno); caderno-bd.md; novo caderno-bd.html; novos SQLs 14-itens-sem-join.sql, 15-itens-com-produto.sql e 16-estrutura.sql; verificacao-responsiva.html; verificacao-revisao-45.json; este relatório. Os 13 SQLs anteriores, schema/migrações e módulos tradicionais permaneceram intactos.

## Referências técnicas consultadas

- Python venv: https://docs.python.org/3/library/venv.html (ativação CMD e bash).
- SQLite estrutura: https://www.sqlite.org/schematab.html (sqlite_schema).
- SQLite 3.33: https://www.sqlite.org/releaselog/3_33_0.html.
