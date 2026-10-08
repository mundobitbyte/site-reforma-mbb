# Caderno de Banco de Dados — Cantina Horizonte

Copie cada seção para um documento ou folha. Este site não salva respostas.
Exemplo didático não é resultado do aluno. Registre origem, data e limites.
Capítulos 0–3 e 10 são conceituais: não exigem SQL ou saída de execução.
Nos capítulos executáveis, esperado é previsão; observado é apenas o que você realmente executou.
Se não executou, escreva “não executado” e o impedimento. Valores iniciais pressupõem a base recém-preparada.

## 0 — História e necessidade dos dados

BD00: Escreva uma comparação entre papel, arquivos isolados e dados relacionados; inclua um risco e uma pergunta da Cantina. Confira que banco, SGBD e linguagem têm funções distintas. Não há SQL nem instalação nesta entrega.

**Exemplo didático, não evidência real:** Banco: produtos, pedidos e itens organizados; SGBD: SQLite gerencia esse conjunto; SQL: linguagem para perguntar quais itens pertencem ao pedido. Exemplo de problema: duas anotações mostram saldos diferentes. Isso é hipótese didática, não uma observação de campo.

- Pergunta e fonte da regra (ou hipótese identificada):
- Artefato produzido: comparação:
- Explicação e como conferi:
- Limite da conclusão:
- Revisão necessária e data:

## 1 — Fundamentos

BD01: Registre cinco atributos com significado, tipo/domínio e exemplo. Explique qual FK impediria produto inexistente e o limite: ela deve ser habilitada na conexão. Não execute comandos ainda; esquema não substitui regras de saldo entre várias linhas.

**Exemplo didático, não evidência real:** Atributo id: inteiro, identifica Produto, exemplo 1 (PK). produto_id no Item: inteiro, referencia Produto existente (FK). nome: TEXT, texto não vazio; quantidade: INTEGER, inteiro 1–10; cupom_codigo: TEXT ou NULL, sem cupom. NULL é ausência, não zero nem texto “NULL”. NOT NULL exige presença; CHECK testa uma condição. Schema é a definição de tabelas, colunas e restrições. No SQLite, INTEGER/TEXT indicam afinidade; as restrições limitam os valores armazenados, não o tipo original da mensagem.

- Pergunta e fonte da regra (ou hipótese identificada):
- Artefato produzido: dicionário:
- Explicação e como conferi:
- Limite da conclusão:
- Revisão necessária e data:

## 2 — Modelagem Conceitual

BD02: Desenhe as três caixas, escreva os atributos e leia as duas relações em frases. Confira onde ficam quantidade e preço vendido. A exigência de ao menos um item é garantida ao concluir a venda pelo serviço, não apenas pela FK.

**Exemplo didático, não evidência real:** Pedido: id, data, estado; Produto: id, nome, preço atual, estoque; Item: pedido_id, produto_id, quantidade, preço da venda. Ligue Pedido a Item e Produto a Item. Leia: cada Item pertence a exatamente um Pedido e um Produto; Pedido registrado com sucesso tem 1..* Itens; Produto participa de 0..* Itens. 1 = exatamente um; 0..* = nenhum ou muitos; 1..* = um ou muitos.

- Pergunta e fonte da regra (ou hipótese identificada):
- Artefato produzido: DER e frases:
- Explicação e como conferi:
- Limite da conclusão:
- Revisão necessária e data:

## 3 — Modelagem Lógica e Normalização

BD03: Mostre as três versões em pequenas tabelas ou listas de colunas. Marque uma dependência parcial removida na 2FN e a derivação retirada na 3FN. Confira que seu desenho ainda permite reconstruir 2 × 300 = 600 sem alterar o preço histórico.

**Exemplo didático, não evidência real:** Antes: pedido 1 com uma célula “Água, Suco” e listas de quantidades. 1FN: uma linha por participação, com valores individuais; chave pedido_id + produto_id. 2FN: data depende só de pedido_id e nome só de produto_id, então ficam em Pedido e Produto. Item mantém quantidade/preço vendido, que dependem do par. 3FN: se também armazenássemos total_item, quantidade + preço vendido determinariam esse total sem serem uma chave; evite essa dependência entre atributos não chave, calculando quantidade × preço na consulta. O preço histórico permanece: ele é fato daquela venda, distinto do preço atual.

- Pergunta e fonte da regra (ou hipótese identificada):
- Artefato produzido: versões do modelo lógico:
- Explicação e como conferi:
- Limite da conclusão:
- Revisão necessária e data:

## 4 — SQL: MySQL e SQLite

BD04: Execute preparar uma vez, cardápio e saldo-baixo. Registre pasta, versão do Python/SQLite, caminho do banco, comando, previsão e saída real. Se já existe, consulte e identifique o estado; não apague o banco nem espere automaticamente os saldos iniciais.

**Exemplo didático, não evidência real:** Logo após preparar: cinco produtos; estoques Água 18, Suco 10, Salgado 10, Sanduíche 8, Chocolate 12. Foram inseridos dois pedidos, por isso Água e Suco já tiveram baixa. A consulta saldo-baixo retorna ids 4, 2, 3: primeiro saldo 8, depois saldos 10 ordenados por id. A saída usa colchetes para lista, chaves para cada linha e pares nome/valor; não precisa aprender programação para lê-la.

- Pergunta e RF de origem:
- Python/SQLite e pasta usados:
- Caminho do banco e estado antes da prática:
- Previsão do resultado:
- Comando realmente executado e arquivo SQL consultado:
- Saída real e diferença da previsão:
- Dados que permaneceram iguais ou mudaram:
- Arquivos gerados/verificados (quando aplicável):
- Limite, revisão e data:

## 5 — Relacionamentos e JOIN

BD05: Execute as duas consultas progressivas abaixo antes da consulta completa. Compare ids com nomes, depois explique o produto sem venda e a diferença entre subtotal 3600 e total líquido 3300. Esses valores são da base inicial; identifique alterações antes de comparar.

**Exemplo didático, não evidência real:** No estado inicial, Item mostra pedido_id 1, produto_id 1, quantidade 2, preço 300. Ao juntar Produto aparece nome Água. A consulta completa acrescenta estado Em preparação e calcula valor 600. LEFT JOIN mantém também produtos sem Item: ids 3, 4 e 5. Para esses produtos, SUM sem correspondência é NULL; COALESCE oferece 0. GROUP BY reúne linhas do mesmo produto para somar; COUNT(i.pedido_id) não conta a ausência.

- Pergunta e RF de origem:
- Python/SQLite e pasta usados:
- Caminho do banco e estado antes da prática:
- Previsão do resultado:
- Comando realmente executado e arquivo SQL consultado:
- Saída real e diferença da previsão:
- Dados que permaneceram iguais ou mudaram:
- Arquivos gerados/verificados (quando aplicável):
- Limite, revisão e data:

## 6 — Administração e recuperação

BD06: Liste os cinco arquivos na pasta, leia cantina.sql como texto e localize CREATE TABLE, INSERT, VIEW, INDEX e user_version. Não abra .sqlite3 como texto. Compare as verificações de origem/cópias; igualdade de contagens é necessária, mas não prova sozinha igualdade de todos os valores. Depois do COMMIT, a origem terá 3 pedidos e as cópias iniciais 2.

**Exemplo didático, não evidência real:** Origem: dados/bd-didatico/cantina.sqlite3; backup binário: backup.sqlite3; restauração binária: restaurado.sqlite3; texto exportado: cantina.sql; restauração do texto: restaurado-sql.sqlite3. No estado inicial, a verificação mostra integridade [“ok”], violações FK [], versão 3 e contagens Produto 5, Pedido 2, Item 2, Cupom 1, Histórico 2. Esse padrão é esperado, não seu resultado.

- Pergunta e RF de origem:
- Python/SQLite e pasta usados:
- Caminho do banco e estado antes da prática:
- Previsão do resultado:
- Comando realmente executado e arquivo SQL consultado:
- Saída real e diferença da previsão:
- Dados que permaneceram iguais ou mudaram:
- Arquivos gerados/verificados (quando aplicável):
- Limite, revisão e data:

## 7 — Transações e ACID

BD07: Execute rollback, falha e commit nessa ordem, uma vez. Anote os três conjuntos e consulte por outra conexão. Se você já executou commit, use seus valores de antes como referência; cada repetição pode registrar outra venda. Compare as cópias de BD06 sem recriá-las.

**Exemplo didático, não evidência real:** Base inicial: estoque_chocolate 12, pedidos 2. ROLLBACK: durante 11/3, depois 12/2. Falha deliberada de FK: depois volta a 12/2. COMMIT: durante e depois 11/3; nova consulta confirma pedido 3 de 500 centavos. A mensagem de falha esperada é o sucesso do experimento de reversão, não defeito a esconder.

- Pergunta e RF de origem:
- Python/SQLite e pasta usados:
- Caminho do banco e estado antes da prática:
- Previsão do resultado:
- Comando realmente executado e arquivo SQL consultado:
- Saída real e diferença da previsão:
- Dados que permaneceram iguais ou mudaram:
- Arquivos gerados/verificados (quando aplicável):
- Limite, revisão e data:

## 8 — SQL Avançado

BD08: Preveja e execute uma consulta por vez, na ordem apresentada. Compare LEFT JOIN com NOT EXISTS, interprete WITH, depois a janela e o plano. Se houve COMMIT em BD07, haverá pedido adicional: o acumulado final será 3800 e Chocolate terá uma unidade vendida. Não force a previsão inicial sobre uma base alterada.

**Exemplo didático, não evidência real:** Na base inicial: LEFT JOIN/NOT EXISTS retornam os mesmos ids 3,4,5; a CTE de total ≥1000 retorna pedido 2, total 2700. Janela acumulada mantém pedido 1 (600; acumulado 600) e pedido 2 (2700; acumulado 3300). RANK dá posições 1,2,3,3,3; empates mantêm posição. Índice é uma estrutura auxiliar de acesso; EXPLAIN QUERY PLAN descreve o caminho escolhido. SEARCH ... USING INDEX historico_status_pedido indica uso do índice, não tempo ganho medido.

- Pergunta e RF de origem:
- Python/SQLite e pasta usados:
- Caminho do banco e estado antes da prática:
- Previsão do resultado:
- Comando realmente executado e arquivo SQL consultado:
- Saída real e diferença da previsão:
- Dados que permaneceram iguais ou mudaram:
- Arquivos gerados/verificados (quando aplicável):
- Limite, revisão e data:

## 9 — Projeto Integrador

BD09: Confira que os caminhos abrem, a exportação inclui estrutura e registros, e a origem não foi trocada pela restauração. Explique RF-08 com seus resultados de transação. Referenciar código/testes existentes não é afirmar que você programou ou executou outra disciplina.

**Exemplo didático, não evidência real:** Checklist: problema/RF; DER BD02; relações/dependências BD03; schema inicial e duas migrações como referências preservadas; caminho/versão da base BD04; consultas BD05/08; cópias e cantina.sql BD06; antes/durante/depois BD07; totais/cupom consultados BD09; limites/decisão BD10. Marque produzido, verificado ou pendente e ligue cada item ao arquivo ou registro real.

- Checklist BD00–BD10: produzido / verificado / pendente:
- Caminho ou link de cada artefato:
- RF ligado e explicação da cadeia:
- Resultados reais usados como evidência:
- Limites e pendências:
- Data da conferência:

## 10 — Visão Moderna de Dados

BD10: Registre uma decisão proporcional, um limite e a evidência que buscaria antes de mudar arquitetura. Não há instalação, código, conta em nuvem ou resultado SQL obrigatório em BD10; termos avançados ficam como consulta opcional.

**Exemplo didático, não evidência real:** Decisão didática: manter SQLite local para o laboratório de pedido/estoque; motivo dados relacionados e necessidade de reversão; limite não foi avaliada carga real nem disponibilidade distribuída. Migrar exigiria medir necessidades e comparar alternativas. Não é uma decisão validada para uma cantina em produção.

- Pergunta e fonte da regra (ou hipótese identificada):
- Artefato produzido: decisão e justificativa:
- Explicação e como conferi:
- Limite da conclusão:
- Revisão necessária e data:

