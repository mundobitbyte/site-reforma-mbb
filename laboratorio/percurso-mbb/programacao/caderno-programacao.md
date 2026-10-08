# Caderno de Programação/Python — Cantina Horizonte

Não preencha execução antes de executar. Copie a seção para um documento ou folha; o site não salva respostas. Exemplos didáticos não são evidências do aluno. Use o caso e as regras disponíveis: não precisa concluir antes os módulos tradicionais. Simulações 1–11 não são vendas; a etapa 12 usa o serviço em banco didático próprio. Se não executou, escreva “não executado” e o impedimento.

## 0 — Problema, algoritmo e ambiente

PG00: entradas, saída, regra, limite do cálculo e ambiente identificado; reusa E01/E05/E07.

- Entradas, cálculo e saída do algoritmo:
- Regra e limite (cálculo ainda não salva venda):
- Pasta do exemplo e versão/comando Python verificados:
- Previsão para 01_sequencia.py:
- Saída que executei e data (ou impedimento):
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: Entradas: preço 300 e quantidade 2; cálculo: multiplicar; saída prevista: 600; limite: não grava venda.

## 1 — Valores, nomes e sequência

PG01: tabela nome/valor/tipo e teste de mesa; reusa BD01/RF-06.

- Nome / valor / tipo de produto, preço, quantidade e subtotal:
- Teste de mesa na ordem das linhas:
- Previsões para quantidade 2 e 3:
- Alteração feita em uma cópia, comando, saída real e data:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 2 — Entrada, conversão e apresentação

PG02: texto recebido, conversão e representação monetária; reusa BD01/RF-06.

- Texto digitado e inteiro obtido:
- Previsão de reais/centavos para 2 e 3:
- Comandos, entradas, saídas reais e data:
- Limite: letras ainda não tratadas nesta etapa:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 3 — Decidir antes de aceitar

PG03: tabela de decisão nas fronteiras e no saldo; reusa E07/BD07/RF-03/RF-04.

- Quantidade / saldo / condições / ramo previsto:
- Cópia e alteração apenas de saldo para 1:
- Comando, entrada e saída real em cada caso/data:
- Limite da simulação:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: Quantidade 2/saldo 1: faixa válida, saldo insuficiente; previsão: recusa. A saída observada fica em branco até executar.

## 4 — Repetir com condição de saída

PG04: teste de mesa com condição, tentativa e saída; reusa RF-03 e a revisão de PG03.

- Sequência prevista 0 → 11 → 2:
- Valor e condição antes/depois de cada leitura:
- Comando, recusas e subtotal que observei/data:
- Linha que atualiza o estado e condição que encerra:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 5 — Contar, acumular e consolidar

PG05: contador, acumulador e caso que soma inválida encobre; reusa RF-02/RF-03.

- Linha / acumulador antes / entrada / acumulador depois:
- Previsões para soma excessiva e soma que encobre linha inválida:
- Comando, sequência e saída real/data:
- Por que validar cada linha e a soma são necessários:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: Entradas -2/4/0: soma prevista 2, mas há linhas inválidas. Aceitar a soma não prova validade de cada linha.

## 6 — Lista de itens e campos com nome

PG06: campos do item, mapa por ID e subtotal; reusa BD02/BD03/BD05.

- Campos dos itens; diferença entre posição e ID:
- Mapa quantidades antes/depois de get() para Água repetida:
- Previsão com linha adicional e subtotal:
- Cópia alterada, comando, saída real/data:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: get(1, 0): primeiro 0 + 2 = 2; numa linha repetida 2 + 2 = 4. Registre seu mapa real depois de executar.

## 7 — Nomear uma responsabilidade

PG07: entradas, responsabilidade e retorno; reusa RF-06 e PG06.

- Função / parâmetros / argumentos usados / responsabilidade:
- Número retornado e onde é acumulado/exibido:
- Previsão 600 + 1600:
- Comando, saída real e data:
- Limite: a função deste recorte não valida a venda:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 8 — Recusar o erro previsto e permitir correção

PG08: entrada, erro previsto, recusa e nova tentativa; reusa RQ-01/PG02/PG04.

- Tentativa / conversão ou validação / resultado previsto:
- Sequência, comandos, recusas e saída real/data:
- Onde o laço continua e onde termina:
- Limite: valida uma quantidade, não o pedido inteiro:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 9 — Reutilizar o código entre arquivos

PG09: mapa arquivo/responsabilidade e explicação da importação; reusa E09/E14.

- Mapa chamador → módulo → função e arquivos na mesma pasta:
- Onde a regra é definida e onde é chamada:
- Previsão ao executar versus importar o módulo:
- Comando e saída real/data:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 10 — Caminho, JSON e reabertura

PG10: caminho, estrutura salva, leitura e recusa de sobrescrita; reusa BD06.

- Caminho efetivo do arquivo e se já existia antes:
- Estrutura JSON e previsão para cada execução:
- Comandos, leitura real nas duas execuções e data:
- Conteúdo antes/depois e como conferi a preservação:
- Limite: simulação, não venda no banco:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: Arquivo ausente: previsão de criação e leitura 600; segunda execução: previsão de preservação e nova leitura. Preencha saída observada somente com sua execução.

## 11 — Dados e comportamento com responsabilidade

PG11: classe/instância/atributo/método e limite; reusa E09/BD09.

- Classe / instância / atributo / método no exemplo:
- Como self referencia os dados da instância:
- Previsão 3000 - 300:
- Comando e saída real/data:
- Limite: esta classe só lê o resumo, não valida venda:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

## 12 — O terminal usa o mesmo serviço e banco

PG12: comando, retorno salvo, reabertura e transição; reusa BD07/BD09/RF-01 a RF-09.

- Pasta e ambiente ativado; banco didático usado:
- Comando de registro e ID real retornado:
- Previsão, total e estado salvos/data:
- Comando e resultado da consulta após fechar/reabrir:
- Estado antes/depois do avanço e recusa ao repetir estado antigo:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: Banco novo: previsão de ID 1, total 600, Novo. Use o ID efetivamente retornado; não copie esta previsão como resultado.

## 13 — Transformar exemplos em evidências repetíveis

PG13: regra, entrada, previsão, resultado, falha e reteste; reusa E12/E13 e prepara QTS.

- Regra, entrada, esperado e origem da previsão:
- Arquivo/comando do primeiro teste:
- Resultado real/data; falha proposital em cópia e explicação:
- Unittest: contagem e resultado real:
- Pytest (se executado): ambiente, comando, contagem e falhas:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: Regra: 2 × 300; esperado: 600. Só registre “passou” depois de executar; 601 em cópia deve gerar falha.

## 14 — Defender o mesmo pedido entre disciplinas

PG14: mapa de impacto e defesa do mesmo pedido; reusa E15/BD09/PG00–PG13.

- RF escolhido e regra em palavras próprias:
- Modelo: campo e operação relacionados:
- Código: arquivo/função responsável; limite do recorte didático:
- Teste: nome/arquivo e vínculo ao resultado real de PG13:
- Resultado/data ou não executado e impedimento:
- Mudança proposta / artefatos afetados / verificações a refazer:
- Diferença ou erro e seu significado:
- Limite da conclusão; revisão/reteste necessários:

Exemplo didático — não é evidência do aluno: RF-03 → item_pedido.quantidade e consolidação → servico.py → test_recusa_sem_pedido_ou_baixa. Vincule ao resultado real de PG13, não à previsão.
