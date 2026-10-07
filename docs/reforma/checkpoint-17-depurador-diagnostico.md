# Reforma Mundo bit Byte — checkpoint 17

O ensaio interativo com o depurador Python foi concluído. Na subetapa 4.8, um dos dois ensaios está concluído; falta executar os arquivos no VisuAlg. O total permanece **22/31 subetapas concluídas, 9 pendentes**, com o mesmo escopo do checkpoint 16.

| Macroetapa | Concluídas/total | Posição pendente |
|---|---:|---|
| Pedido persistente | 5/6 | 1.6: uso no navegador |
| Cupom | 4/5 | 2.5: uso no navegador |
| Estados do pedido | 4/5 | 3.5: uso no navegador |
| Percurso curricular | 7/9 | 4.8: VisuAlg; depurador concluído. Depois 4.9 |
| Entrega | 2/6 | Atual: 5.3, acessibilidade. Depois 5.4–5.6 |

## Evidência nova

Foi executada uma sessão real de `pdb` em terminal interativo sobre o exemplo preservado `07_funcoes.py`, com breakpoint, inspeção dos argumentos, entrada na função e acompanhamento do retorno e do acumulador. Os retornos observados foram 600 e 1600 centavos; o subtotal final foi 2200 centavos. A transcrição está em `docs/reforma/evidencia-depurador-17.json`.

Foi adicionada uma página de apoio ao aluno em `laboratorio/percurso-mbb/programacao/depuracao.html`, vinculada às etapas de funções e testes. Ela conecta necessidade, conceito, prática e evidência, mantendo os mesmos dados e código. O percurso central continua com 81 etapas de ensino; esta página é apoio, não uma nova etapa.

## Correção do diagnóstico e bloqueios reais

O diagnóstico anterior aplicou uma restrição de recuperação de prévias Sites fora do seu contexto. Este laboratório é um projeto GitHub; aquela restrição não explica seu bloqueio de navegador.

Nesta tentativa, a API Python iniciou com banco temporário separado, mas o navegador recusou a conexão (`net::ERR_CONNECTION_REFUSED`). O servidor de ensaio foi encerrado. A interface, a acessibilidade e o fluxo integrado continuam sem validação real no navegador. Nenhuma prévia integrada alcançável foi confirmada e nenhuma publicação externa foi feita.

VisuAlg e Wine não estão instalados e o controle de aplicativos nativos não está disponível. A revisão de compreensão com participante também permanece pendente. Os detalhes estão em `docs/reforma/diagnostico-acesso-17.json`. **Não há autorização pendente**; os bloqueios são de ambiente e execução dos critérios de saída.

## Verificação e limites

O verificador estrutural passou: 108 páginas HTML, 3.393 referências locais, 104 botões de cópia e 48 arquivos canônicos conferidos, sem erros. Os hashes dos dois arquivos protegidos de Banco de Dados permanecem iguais. O serviço, a interface e os exemplos existentes não foram modificados; os testes de negócio já concluídos não foram repetidos.

As alterações deste checkpoint são somente evidências, acompanhamento e apoio curricular no laboratório privado `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. Nenhuma alteração foi enviada ao repositório oficial `mundobitbyte/site`, ao domínio oficial ou ao Firebase.

Próxima posição formal: **5.3, bloqueada pelo acesso ao navegador**. Também permanece aberta a parte VisuAlg da 4.8. A entrega final depende de concluir os critérios registrados, sem reduzir o escopo para aparentar avanço.
