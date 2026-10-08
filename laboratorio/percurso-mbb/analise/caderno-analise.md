# Caderno da Análise — Cantina Horizonte

Use o mesmo projeto, requisitos e pedido ao passar entre disciplinas.
Cenário fictício não é entrevista realizada. Não preencha resultado sem execução.

## Como usar sem conhecimento prévio

Este arquivo é um modelo de registro, não um formulário que salva no site.
Copie cada seção para um documento de texto ou folha, mantenha o número E01–E15 e use suas palavras.
Em cada etapa: leia a situação, entenda a necessidade e o conceito, faça a prática e registre o que produziu.
Afirmação/decisão: sua conclusão; origem e data: de onde veio e quando você consultou;
artefato ligado: nome/link/foto do que você produziu; previsto: expectativa;
aconteceu: observação real, ou “não executado”; limite: o que ainda não pode concluir;
revisão/reteste: mudança necessária e como conferir. Use “não se aplica” com motivo quando necessário.
Um desenho que você fez é evidência desse desenho; não comprova funcionamento do sistema.
Exemplos abaixo são didáticos: copiá-los não comprova sua execução.
Você pode planejar entrevistas e testes sem realizá-los agora, identificando a pendência.


## 0 — Antes do sistema

E01: problema, consequência, termos ambíguos e dúvidas. Identifique o cenário como fictício.

**Como começar e conferir:** Escreva seu problema, uma consequência, um termo a esclarecer e uma pergunta. Confira se falou da necessidade sem escolher linguagem ou aplicativo.

**Exemplo didático (não copiar como resultado real):** Exemplo fictício E01: problema: a anotação não permite reconhecer o pedido; consequência: Lia precisa perguntar de novo; termo ambíguo: “finalizar”; dúvida: significa registrar ou entregar? Origem: cenário desta etapa, com a data em que você o leu. Situação: hipótese. Artefato: seu texto E01. Previsto: um número permitirá localizar o pedido. Aconteceu: não executado. Limite: não observamos uma cantina real.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 1 — Stakeholders e escopo

E02: papéis, fronteira, premissas, restrições e dependências.

**Como começar e conferir:** Escolha dois papéis da tabela, justifique quem ouvir e registre uma premissa, uma restrição e uma dependência. Confira se não tratou uma suposição como fato.

**Exemplo didático (não copiar como resultado real):** E02, exemplo: papel Atendente; necessidade conferir o pedido; dentro: registro e consulta; fora: pagamento; premissa: conexão disponível, ainda a confirmar; restrição: dados fictícios; dependência: navegador para a prática posterior.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 2 — Levantamento

E03: roteiro de levantamento e tabela afirmação/origem/situação. Deixe resultados reais em branco até investigar.

**Como começar e conferir:** Registre as três perguntas e a contradição possível. Na tabela, informe a origem e classifique cada afirmação. Sem entrevista, deixe resultados como não executados.

**Exemplo didático (não copiar como resultado real):** E03, exemplo de roteiro: “Como você identifica um pedido?”; “Como confere o saldo?”; exceção: “O que faz quando não há suco suficiente?”. Contradição possível: atendimento diz que baixa ao registrar, preparação diz que baixa ao entregar. Investigar: ouvir ambos e comparar um registro autorizado. Não invente as respostas.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 3 — Processo AS-IS

E04: fluxograma AS-IS hipotético, fontes e dúvidas; não apresentar como pesquisa concluída.

**Como começar e conferir:** Desenhe ambos os caminhos, nomeie Sim/Não e marque pelo menos uma suposição a confirmar. Confira se o caminho sem saldo não chega à venda aceita.

**Exemplo didático (não copiar como resultado real):** E04, hipótese: Início → receber escolha → há saldo? Sim: informar total → anotar → preparar → entregar → fim. Não: informar falta → voltar à escolha. Espera: aguardar preparação; retrabalho: procurar outra anotação; erro: registrar quantidade diferente.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 4 — Análise Estruturada

E05: contexto, DFD pequeno, dicionário e decisão de cupom.

**Como começar e conferir:** Desenhe o contexto e o DFD, leia uma seta em frase e registre quantidade/preço/status no dicionário. Acrescente “sem cupom: registrar sem desconto”; confira que Cliente nunca grava diretamente no depósito.

**Exemplo didático (não copiar como resultado real):** E05, leitura do desenho: Atendente envia “itens e cupom” ao processo Registrar pedido; o processo envia “pedido validado” a D1 e devolve “número ou motivo da recusa” ao Atendente. Acrescente D2 Produtos: envia “preço e saldo” ao processo. Contexto: substitua processos/depósitos por um único Sistema da Cantina, mantendo as entradas e saídas externas.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 5 — TO-BE e BPMN

E06: processo proposto e justificativa de cada mudança.

**Como começar e conferir:** Desenhe as raias, os dois ramos e a mensagem ao Cliente. Ligue cada melhoria a E04 e confira quem realiza cada tarefa. Avanços seguintes: Em preparação, Pronto, Entregue.

**Exemplo didático (não copiar como resultado real):** E06, proposta: mensagem de escolha do Cliente → Atendimento registra → decisão “aceito?”; Não: informa recusa; Sim: informa número e confirma → Preparação prepara → marca Pronto → entrega. O registro cria Novo e baixa estoque; a confirmação avança a Confirmado sem nova baixa. Justificativa: localizar a mesma venda sem outra anotação.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 6 — Engenharia de Requisitos

E07: requisitos com origem, regra, critério e prioridade.

**Como começar e conferir:** Escreva os critérios de estoque e cupom e justifique uma prioridade. Confira origem, condição, ação, resultado e o que não muda na recusa; não precisa decorar a sigla.

**Exemplo didático (não copiar como resultado real):** E07, exemplo: RF-04, origem regra de saldo do dossiê; Dado saldo 8, Quando a soma pedida é 10, Então recusar sem salvar nem baixar; Must, pois vender sem saldo invalida a entrega. Uma apresentação adicional pode ser Could. Pagamento é Won’t now. Um relatório adicional poderia ser Should em uma entrega futura, sem virar escopo atual.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 7 — Casos de Uso

E08: atores e casos com fluxo principal, alternativas e condições.

**Como começar e conferir:** Complete UC-02 e as condições de avanço. Confira se descreveu intenção, fluxo e alternativa, sem supor login implementado.

**Exemplo didático (não copiar como resultado real):** E08, exemplo UC-02: ator Cliente/Atendimento; objetivo saber o estado salvo; antes: possuir o número; fluxo: informar número, solicitar consulta, ler estado/total; alternativa: número inexistente, informar que não foi encontrado; depois: pedido permanece igual. Para avançar: pedido existe no estado esperado; depois: somente próximo estado salvo, sem baixar estoque outra vez.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 8 — UML essencial

E09: somente modelos úteis, com leitura em frases e limites explícitos.

**Como começar e conferir:** Escolha estados ou domínio, desenhe o modelo e escreva uma frase explicando cada relação. Confira que Novo → Entregue não aparece e que Item guarda quantidade/preço da venda.

**Exemplo didático (não copiar como resultado real):** E09, exemplo de estados: Novo → Confirmado → Em preparação → Pronto → Entregue. Anote nas setas “avançar”; Entregue não tem saída. Para domínio: Pedido 1 — 1..* Item; Produto 1 — 0..* Item. Leia: cada Item pertence a um Pedido e um Produto. Para sequência, participantes são colunas, tempo desce; solicitação da tela precede validação, gravação e resposta.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 9 — Backlog e MVP

E10: backlog por dependência/valor e critérios de passagem.

**Como começar e conferir:** Monte a primeira linha do mapa e sua lista ordenada; escreva uma história e uma tarefa distinta. Confira o valor de ponta a ponta e registre uma condição de Done ainda não demonstrada no seu trabalho.

**Exemplo didático (não copiar como resultado real):** E10, exemplo de fatia/MVP planejado: listar produtos → montar pedido → registrar com validação/baixa → consultar número e total. Backlog ordenado: produtos; registro seguro; consulta; depois cupom/estados. História: “Como atendente, quero registrar pedido válido para preparar o vendido”. Critério: recusa de quantidade zero sem efeitos. Ready: regra e dados definidos; Done planejado: fluxo e recusas testados, limites registrados. Não é uma entrega executada por você.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 10 — Jornada e protótipo

E11: tarefa, instrumento de observação e, somente após a sessão, resultados.

**Como começar e conferir:** Crie o instrumento e indique o resultado esperado. Se fizer uma sessão, registre o observado sem inventar tempos; se não fizer, conclua o plano e marque a execução pendente. Confira que esperado e observado estão separados.

**Exemplo didático (não copiar como resultado real):** E11, exemplo de plano: tarefa localizar como consultar dois sucos; artefato rascunho; esperado apontar o campo número e área Consultar; registro futuro: tentativa, ação/fala, ajuda, resultado e dúvida. Data/participante/resultados: não executados. Uma autoinspeção deve ser identificada como sua e não como teste com participante.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 11 — Qualidade e integrações

E12: condições de qualidade, limites de segurança e integração.

**Como começar e conferir:** Descreva a sequência de sucesso e o caso de resposta perdida, sem enviar requisições reais. Registre garantia, limite e decisão segura: consultar antes de repetir cegamente. Confira que aparência da tela não comprova gravação.

**Exemplo didático (não copiar como resultado real):** E12, exemplo didático de JSON: {"itens":[{"produto_id":1,"quantidade":2}]}. A tela solicita criar o pedido; servidor valida; banco salva; resposta traz número/total. Se salvar e a resposta se perder, repetir POST pode criar duas vendas: este contrato não garante idempotência de venda. Uma chave única por tentativa é uma possível melhoria a analisar, não recurso já implementado.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 12 — Viabilidade, riscos e rastreabilidade

E13: decisão, risco, resposta e mapa de impacto.

**Como começar e conferir:** Registre um risco/resposta, compare duas alternativas e trace uma mudança até os artefatos afetados. Confira que backup exige restauração testada e não apenas reabrir o banco.

**Exemplo didático (não copiar como resultado real):** E13, exemplo: risco resposta perdida e venda duplicada; chance qualitativa não medida; impacto duas baixas; mitigação orientar consulta e avaliar chave por tentativa; contingência conferir registros antes de qualquer correção. Decisão: manter piloto local fictício, em vez de abrir uso real; razão limites de segurança; consequência não operar vendas reais. Impacto de mudar máximo 10: regra E07, caso E08, mensagem e teste correspondente.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 13 — Documentação viva e IA

E14: glossário, decisão e classificação crítica de uma saída de IA.

**Como começar e conferir:** Escreva a decisão em quatro parágrafos, dois termos do glossário e a classificação da frase, citando a fonte. Confira a afirmação; não envie dados pessoais, não precisa criar conta externa.

**Exemplo didático (não copiar como resultado real):** E14, exemplo de ADR: contexto valores monetários precisam de cálculo coerente; escolha centavos inteiros; razão evitar frações nos valores armazenados; consequência converter para reais na exibição. Glossário: Confirmado = próximo estado após Novo, não nova venda. Saída fictícia de IA: “Confirmar deve baixar estoque de novo”; classificação afirmação contrariada pelo processo E06/RF-08, não evidência. Alternativa sem IA: analise essa frase fornecida.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

## 14 — Integração final

E15: defesa do dossiê, lacunas e passagem ao modelo físico/implementação/QTS.

**Como começar e conferir:** Ligue cinco artefatos de um requisito, explique sem siglas e liste lacunas/limites. Confira que cada arquivo abre e cada ID aponta ao registro certo. Concluir o dossiê significa explicar e organizar a Análise; testes/entrevistas não realizados permanecem identificados, não impedem entregar o planejamento.

**Exemplo didático (não copiar como resultado real):** E15, exemplo de cadeia planejada: problema E01 saldo incerto → hipótese/processo E04 → critério RF-04 em E07 → alternativa sem saldo E08 → relação Produto/Item E09 → teste proposto recusar soma maior que saldo, sem efeitos. Teste proposto não é teste executado. Acrescente uma revisão verdadeira de seu documento; se não houve, registre “nenhuma revisão motivada por execução até agora”.

- Afirmação/decisão:
- Origem e data:
- Situação: hipótese / regra documentada / evidência executada:
- Artefato ligado:
- O que foi previsto:
- O que aconteceu (somente após execução):
- Limite da conclusão:
- Revisão e próximo reteste:

