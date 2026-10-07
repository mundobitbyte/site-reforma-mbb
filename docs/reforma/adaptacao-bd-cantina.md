# Banco de Dados da Cantina Horizonte — adaptação MbB

## Escopo
Percurso adicional no laboratório `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. Reutiliza o modelo, as migrações e as regras da Cantina já implementados. O acervo original de Banco de Dados, inclusive SQL, tabelas e dados de comercio/loja_integrador, continua preservado. Não houve escrita deste trabalho no repositório oficial, domínio ou Firebase.

A adaptação está implementada e verificada no servidor e estruturalmente; ainda não foi validada no navegador nem com estudantes. As demais disciplinas ainda precisam de adaptação.

## Decisões por capítulo

| Capítulo | Necessidade e evidência na Cantina | Aprofundamento preservado |
|---|---|---|
| 0 — História | Explicar por que registrar pedidos com dados relacionados; BD00, E01–E05 | História completa e tecnologias |
| 1 — Fundamentos | Dicionário com significado, domínio e exemplos; BD01, E05/E07 | Tipos e exemplos MySQL |
| 2 — Conceitual | DER e relações expressas em frases; BD02, E08/E09 | Cardinalidades e atributos adicionais |
| 3 — Lógico/normalização | Justificar dependências e preço histórico; BD03, E09/RF-06 | Casos comerciais completos |
| 4 — SQL/ambientes | Identificar SQLite/MySQL, preparar e consultar; BD04, RF-01 | CRUD, filtros, NULL e agregações |
| 5 — JOIN | Reconstruir pedido, produtos sem venda e histórico; BD05, RF-06/RF-09 | Relatórios comerciais e múltiplos JOIN |
| 6 — Administração | Verificar, copiar, exportar e recuperar dados; BD06, E13 | Roles, logs, retenção e administração MySQL |
| 7 — Transações | Comparar confirmação, reversão e falha; BD07, RF-04/RF-08 | SAVEPOINT, isolamento e deadlocks MySQL |
| 8 — SQL avançado | Comparar subconsulta/CTE, janela e plano; BD08 | Rotinas e EXPLAIN ANALYZE MySQL |
| 9 — Integrador | Relacionar BD ao mesmo dossiê, código e testes; BD09, E15 | Projeto MySQL original e seus dados |
| 10 — Visão moderna | Justificar arquitetura proporcional e limites; BD10, E12/E13 | Big Data, governança e arquiteturas |
| 99 — Exercícios | Encadear BD00–BD10 com evidências anteriores | Exercícios originais íntegros |

Mapa verificável: `laboratorio/percurso-mbb/matriz-bd.json`. Entrada: `laboratorio/percurso-mbb/banco-de-dados/index.html`.

## Aplicação do modo MbB
Cada capítulo parte da necessidade, apresenta o conceito e propõe prática com evidência. As três perspectivas orientam a leitura: especialista acompanha a regra e os limites técnicos; professor conduz e observa a aprendizagem; iniciante responde uma pergunta concreta antes de avançar.

O percurso mantém a mesma Cantina entre Análise, Banco de Dados, programação e QTS. As evidências BD reaproveitam E01–E15 e os mesmos requisitos. A espiral aparece ao recuperar dados no capítulo 6, estudar COMMIT no 7 e voltar à recuperação para comparar a cópia anterior com o estado atual. O exercício 6 explicita essa retomada após o 7.

Não se cria tabela Cliente sem necessidade demonstrada. O preço gravado no item representa o valor da venda, enquanto o produto contém o preço atual. O subtotal agrupado por produto não distribui o desconto do cupom: nos dados iniciais, subtotal 3600 e total dos pedidos 3300 centavos são medidas distintas.

## Prática isolada e limites de portabilidade
`laboratorio/cantina-evolutiva/laboratorio_bd.py` usa a classe Cantina existente para preparar uma cópia didática em `dados/bd-didatico/`. Não altera o banco usado pela aplicação. As 13 consultas possuem nomes permitidos e conexão somente leitura. As transações graváveis ficam restritas à cópia didática e permitem observar rollback, falha de chave estrangeira e commit.

SQLite e MySQL são identificados explicitamente. GRANT, rotinas, InnoDB e SELECT FOR UPDATE permanecem no acervo MySQL, sem apresentação como SQL executável deste laboratório SQLite. A afinidade de tipos do SQLite não substitui a validação da API. Chaves estrangeiras precisam ser habilitadas por conexão antes da transação; muitas operações DDL do MySQL causam commit implícito.

Backup usa a API de cópia do SQLite. Exportação SQL mantém um snapshot de leitura, estrutura, dados, view, índices e acrescenta a versão das migrações. Ambas as restaurações criam novos destinos e recusam sobrescrita. A importação do dump habilita e verifica as chaves estrangeiras após a carga, porque a ordem do dump pode trazer tabelas filhas antes das mães; novas conexões de escrita precisam habilitá-las novamente. Isso demonstra recuperação local, sem constituir uma política completa de backup.

## Evidências
- 11 testes novos de Banco de Dados aprovados; os 63 testes anteriores da aplicação continuam como evidência registrada e não foram reexecutados nesta etapa.
- 11 comandos reais do CLI executados. Depois da cópia/exportação, um novo commit deixou a origem com 4 pedidos; as duas restaurações mantiveram os 3 pedidos do snapshot e versão 3.
- 32 páginas HTML do percurso verificadas, sendo 13 novas de Banco de Dados: 850 referências locais, 41 botões de cópia e 13 consultas canônicas, sem erros na verificação estrutural.
- Os dois hashes SQL protegidos continuam iguais aos registrados antes da adaptação.
- Teste visual, navegação real, acessibilidade em execução e largura de 360 px permanecem pendentes.

## Documentação primária consultada
- SQLite, chaves estrangeiras: https://www.sqlite.org/foreignkeys.html
- SQLite, cópia de banco: https://www.sqlite.org/backup.html
- SQLite, tipos: https://www.sqlite.org/datatype3.html
- MySQL 8.4, commit implícito: https://dev.mysql.com/doc/refman/8.4/en/implicit-commit.html

