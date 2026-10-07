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
