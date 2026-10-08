# Situação vigente — checkpoints 41 e 43

A rodada do laboratório foi encerrada (31/31), com confirmação agregada de aplicação e percurso. [Registro 41](../../../docs/reforma/checkpoint-41-reteste-e-parecer.md). Os registros antigos abaixo conservam o estado e os limites de cada data; pendências antigas não são pendências atuais. O roteiro pode ser reutilizado como modelo em branco para nova sessão, sem atribuir resultados não registrados.

## Registro histórico e modelo de nova rodada

# Plano adicional de QTS
Registro do plano da rodada de adaptação QTS/Git (checkpoint 15). A situação daquela rodada foi preservada abaixo; a atualização vigente está ao final.
Versões: v1 preservada; evolução do checkpoint 14. Não é versão final de produção.
Objetivo: ligar casos de requisito às camadas e comparar comportamentos com isolamento.
Prioridade proposta para o laboratório: quantidade, estoque, transação, cupom, estados.
Probabilidade de falha em uso real não foi medida.

Executado: comparar_versoes.py (9 cenários, 18 observações), ciclo_tdd.py (8 amostras por fase).
Reusado: 87 testes Python e 26 JavaScript anteriores, sem nova execução integral.
Bloqueado: navegador, fluxo de interface, largura 360 px e teclado/foco reais.
Não executado: participantes, carga, pipeline remoto, certificação ou avaliação de maturidade.
Critério para encerrar esta adaptação de conteúdo: links/fontes/código conferidos e práticas adicionais executáveis.
Critério para liberar produto final: não satisfeito; falta validação de uso e revisão final.
Ambiente: bancos novos em diretórios temporários; nenhuma escrita em banco da v1 ou de trabalho.
Preencha versões das ferramentas e referência da evidência ao reproduzir.

## Situação após os checkpoints 21 e 22

O checkpoint 21 concluiu pedido, cupom e estados em Chromium real integrado à API/serviço/SQLite temporário; confirmou 360/320 px, teclado e foco. [Evidência](../../../docs/reforma/evidencia-interface-21.json). Leitor de tela real, prévia direta compatível e compreensão com participante permanecem pendentes.

No checkpoint 22, o professor adiou novos ensaios. A revisão editorial e a [orientação da entrega parcial](../../../docs/reforma/entrega-parcial.md) foram preparadas sem reexecutar as suítes ou declarar validação humana. Total 25/31; seis pendentes. Retomar os ensaios quando houver disponibilidade.

## Situação histórica — checkpoint 30

Prévia direta no Windows concluída no 25; leitura UTF-8 corrigida e verificada em duas regressões no 26; Narrador confirmado no 27. No 28, a suíte Python completa passou com 89 testes e o retorno curricular foi conferido em 12 observações HTTP. No 29, o parecer foi consolidado. Os números das rodadas conservam seus escopos.

Nesta atualização, a matriz liga a regressão UTF-8 a RF-09 e os relatos do Narrador a RQ-01/RQ-02. QTS02 usa a falha real para distinguir observação, hipótese, reprodução e regressão; QTS14/exercícios/matriz foram alinhados. O roteiro identifica zoom do percurso como 4.9 e orienta usar somente R07/R08 na retomada atual. Não houve novos ensaios funcionais.

**27/31 concluídas; quatro abertas: 4.8, 4.9, 5.5, 5.6.** Preparação atual: 5.6. [Parecer e limites](../../../docs/reforma/parecer-final-minuta.md). Participante ainda não observado; VisuAlg adiado; nenhuma autorização pendente.
