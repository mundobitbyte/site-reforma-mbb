# Checkpoint 32 — orientação de comandos e UTF-8 no roteiro HTTP

Data: 07/10/2026. Base: `3335f69c64c351b660016bd0e955a1e137741465`. Somente `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`.

## O que mudou e por quê

BD09 agora identifica a pasta do serviço, o ambiente ativado e a base já preparada em BD04. QTS/código identifica a raiz e as dependências; QTS12 esclarece que o recorte TDD usa a biblioteca padrão. WEB11 identifica os caminhos completos de execução e aponta aos resultados já registrados de Chromium/Narrador, preservando zoom/cópia e compreensão como pendentes. Os comandos dos blocos e a aparência foram preservados.

O roteiro HTTP gravava um módulo Python temporário com a codificação padrão do sistema. Quando o caminho contém acento, gravar cp1252 e depois carregar como fonte UTF-8 produz erro de decodificação. A nova regressão reproduziu a falha antes da correção; depois passou com gravação UTF-8 explícita. Contrato, saída do Node e diagnósticos também receberam codificação explícita; o processo Python filho usa UTF-8.

## Verificação

[Regressão e HTTP](evidencia-http-utf8-32.json): um teste de caminho acentuado sob cp1252 simulado passou depois de falhar antes. O roteiro alterado passou em Linux com 17 requisições e quatro operações OpenAPI; banco temporário descartado pelo roteiro. Não foram repetidas as suítes da aplicação ou do verificador de cópia, pois não mudaram nesta rodada. Esses números não são somados.

[Verificação estrutural](verificacao-checkpoint-32.json): vínculos, conteúdo completo para copiar, contagem e hashes protegidos. Nenhum teste novo do professor, navegador, clipboard, zoom ou VisuAlg. A simulação cp1252 não é apresentada como teste Windows real.

## Situação

**27/31 concluídas; quatro abertas. Atual: 5.6, preparação.** Pedido 6/6; cupom 5/5; estados 5/5; currículo 7/9; entrega 4/6. VisuAlg adiado (4.8); zoom/cópia e revisão com participante (4.9); compreensão integrada (5.5); decisão final (5.6). Nenhuma autorização pendente. Produção, Firebase e SQL protegido intactos; nenhuma publicação externa.
