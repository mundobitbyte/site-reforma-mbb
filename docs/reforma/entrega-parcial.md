# Cantina Horizonte — orientação da entrega parcial

**Situação atual, checkpoint 35: 28/31; revisão necessária.** Primeira sessão com aluna exigiu ajuda em pontos de uso e compreensão. [Observações e correções](checkpoint-35-primeiro-uso.md). Versão corrigida aguarda reteste humano/visual; as evidências anteriores abaixo pertencem às versões registradas.


Este material reúne o sistema-base e seu percurso interdisciplinar no laboratório `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O site oficial e o Firebase permanecem intactos.

**Situação: 27/31 subetapas concluídas; 4 pendentes.** Esta é uma entrega parcial para leitura e revisão. Narrador real confirmado no checkpoint 27; ensaios com participante e VisuAlg continuam pendentes.

## O que você pode fazer agora, sem testar

Leia a [entrada do percurso](../../laboratorio/percurso-mbb/index.html) e o [dossiê da Cantina](../../laboratorio/percurso-mbb/analise/dossie-cantina.html). Siga os vínculos abaixo para verificar se a mesma pergunta continua reconhecível em cada disciplina. Essa leitura não exige iniciar o serviço, criar banco ou fazer uma venda.

Exemplo de estudo: uma pessoa pede duas Águas. O sistema precisa aceitar uma quantidade válida, guardar o pedido e seus itens, baixar o estoque uma única vez e reencontrar a venda depois. A consulta permite acompanhar a sequência Novo → Confirmado → Em preparação → Pronto → Entregue. Esse enunciado é um cenário didático; os resultados de uma sessão futura devem ser observados e registrados.

| Passagem | Pergunta para orientar a leitura | Artefato reutilizado |
|---|---|---|
| Análise | O que deve acontecer e o que precisa ser recusado? | [Requisitos e critérios](../../laboratorio/percurso-mbb/analise/06-requisitos.html) |
| Banco de Dados | Onde guardar pedido, itens e preço histórico? Por que estoque e venda devem terminar juntos? | [Modelo lógico](../../laboratorio/percurso-mbb/banco-de-dados/03-logica-normalizacao.html) e [transações](../../laboratorio/percurso-mbb/banco-de-dados/07-transacoes-acid.html) |
| Programação | Qual responsabilidade a função resolve? Como o terminal reutiliza o serviço? | [Funções](../../laboratorio/percurso-mbb/programacao/07-funcoes.html) e [persistência](../../laboratorio/percurso-mbb/programacao/12-persistencia.html) |
| Web/API | Quem solicita a venda e quem confirma o que foi salvo? | [Registro](../../laboratorio/percurso-mbb/web-api/08-registro.html) e [estados](../../laboratorio/percurso-mbb/web-api/09-estados.html) |
| QTS | Qual evidência sustenta a regra? Qual conclusão ainda depende de uma pessoa? | [Matriz de casos](../../laboratorio/percurso-mbb/qts/matriz-casos.html) e [parecer parcial](../../laboratorio/percurso-mbb/qts/parecer.md) |
| Git | Qual versão contém a regra, a implementação e a evidência? | [Percurso de Git](../../laboratorio/percurso-mbb/git/index.html) |

O aluno começa por entender a situação. Os exemplos introdutórios isolam um conceito; não são novos sistemas independentes. A passagem persistente usa o serviço da Cantina. Os cadernos de cada disciplina guardam previsão, resultado e explicação, sem exigir copiar as mesmas regras em seis projetos.

## O que já tem evidência

Pedido, cupom e estados têm evidência de servidor e de interface no Chromium real. O [checkpoint 21](checkpoint-21-navegador-integracao.md) registra 38/38 casos de acessibilidade e 25/25 de integração com API/serviço/SQLite temporário, incluindo 360/320 px, teclado e foco. O depurador pdb foi executado no checkpoint 17; backup/restauração didáticos, no 12. Essas evidências têm escopos distintos e não serão somadas como uma única suíte.

A [prévia Windows no checkpoint 25](evidencia-previa-windows-25.json) e as [confirmações com Narrador no 27](evidencia-narrador-windows-27.json) encerraram 5.4 e 5.3. O [checkpoint 28](evidencia-retomada-28.json) registra a correção do retorno do percurso, 89 testes Python aprovados e 12 observações HTTP, com escopos separados. A [minuta consolidada no 29](parecer-final-minuta.md) identifica as versões avaliadas e os resultados que ainda faltam.

O percurso contém 81 etapas de ensino: Análise 15, Banco de Dados 11, Programação 15, Web/API 13, QTS 17 e Git 10. Essa contagem é diferente das 31 subetapas de trabalho.

## O que ficará para quando for possível testar

| Subetapa | Falta para encerrar |
|---|---|
| 4.8 | Execução dos arquivos no VisuAlg pelo professor; pdb já concluído. Foi adiada e não impede os outros trabalhos. |
| 4.9 | Zoom 200%, copiar/conferir um bloco e revisão pedagógica com participante; navegação relatada como aparentemente correta. |
| 5.5 | Uso integrado e compreensão das mensagens/relações com participante. |
| 5.6 | Parecer final depois de registrar os resultados e as reservas necessárias. Esta orientação prepara a entrega, mas não encerra a etapa. |

Quando houver disponibilidade, use o [guia de execução](guia-execucao-cantina-mbb.md) e o [roteiro de uso](../../laboratorio/percurso-mbb/qts/roteiro-manual.md). Os casos funcionais já concluídos não precisam ser repetidos apenas para retomar. Uma nova execução só será necessária quando uma mudança ou o objetivo da avaliação justificar.

A [ficha curta de retomada](registro-retomada.md) permite registrar o que falta numa mesma sessão. A [minuta do parecer final](parecer-final-minuta.md) já reúne o que foi comprovado; sua decisão permanece sem preenchimento até analisar os novos resultados.

## Limite da entrega

O sistema usa dados fictícios e execução local. Não tem autenticação por usuário nem chave de idempotência para o registro de venda. Não foi aprovado para operação de uma cantina real. O SQL protegido e os projetos de referência permanecem preservados. Não houve publicação no domínio oficial nem expansão para App Inventor, Santa Filomena ou Academia.

A abertura direta da aplicação e de uma aula curricular no Windows do professor encerrou 5.4 no [checkpoint 25](evidencia-previa-windows-25.json). O Narrador real foi confirmado no [checkpoint 27](evidencia-narrador-windows-27.json), encerrando 5.3. Próximo: percurso em uso e compreensão com participante (4.9/5.5).
