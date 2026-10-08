# Preparação da integração com a navegação

Escopo: somente mundobitbyte/site-reforma-mbb, branch preparacao/isolamento-inicial. Este mapa foi conferido na cópia experimental; não afirma equivalência com a versão atual do repositório oficial. Nenhum link da home foi alterado nesta preparação.

## Entrada e destinos propostos
A entrada principal será o percurso único Cantina Horizonte: [percurso](../../laboratorio/percurso-mbb/index.html). A apresentação deve explicar que as seis disciplinas acompanham o mesmo sistema e preservar o acesso aos materiais de referência.

| Entrada existente na cópia experimental | Destino interdisciplinar preparado |
|---|---|
| [Análise de Sistemas](../../pages/analise-sistemas/index.html) | [Análise da Cantina](../../laboratorio/percurso-mbb/analise/index.html) |
| [Banco de Dados](../../pages/bancodedados.html) | [Banco da Cantina](../../laboratorio/percurso-mbb/banco-de-dados/index.html) |
| [Programação de Computadores](../../pages/programacao.html) | [Programação da Cantina](../../laboratorio/percurso-mbb/programacao/index.html) |
| [Programação Web](../../pages/programacao-web.html) | [Web/API da Cantina](../../laboratorio/percurso-mbb/web-api/index.html) |
| [Qualidade e Teste de Software](../../pages/qts/index.html) | [QTS da Cantina](../../laboratorio/percurso-mbb/qts/index.html) |
| [Git e GitHub](../../pages/git.html) | [Versões da Cantina](../../laboratorio/percurso-mbb/git/index.html) |

A home experimental já organiza esses módulos em Programação e Desenvolvimento e Dados e Banco de Dados. Na implementação seguinte, preparar uma entrada clara para o percurso completo e ligações de disciplina sem substituir os fundamentos, IDs de navegação ou scripts existentes. Os retornos deverão distinguir percurso, disciplina e áreas do site. Não redirecionar silenciosamente páginas antigas.

## Execução e hospedagem
O material HTML pode integrar a navegação estática. A aplicação executável depende de Python/FastAPI e banco local; linkar frontend/index.html em hospedagem estática não cria a API. O percurso deve continuar oferecendo os passos de execução local. Não adicionar serviço remoto, backend público ou hospedagem para contornar essa diferença sem decidir o escopo específico.

Na prévia local atual, a aplicação está na raiz http://127.0.0.1:PORTA/ e o percurso em /curso/laboratorio/percurso-mbb/index.html. O retorno para a aplicação já usa a rota permitida, e as chamadas /api permanecem na raiz. Preservar esse contrato quando conectar a navegação.

## Ordem de execução após os critérios restantes
1. Analisar reteste dos pontos que exigiram ajuda da aluna e registrar o parecer do laboratório. A observação do professor sobre o ajuste 37 já está registrada; não repetir todos os ensaios.
2. Implementar a navegação na cópia experimental, usando o mapa acima e conferindo destinos e retornos. Preservar pages/bancodedados.html e o SQL protegido.
3. Apresentar comparação concreta das mudanças e da navegação para revisão do professor. Conferir links, recursos, código copiável e ausência de regressões relevantes.
4. Somente depois da revisão, receber autorização explícita para publicação e definir a entrega de produção. Não criar alterações no repositório oficial nesta fase.

Estes quatro passos descrevem a integração futura; não aumentam nem substituem as 31 subetapas do laboratório. Situação atual: 28/31, três critérios abertos. App Inventor prático, Santa Filomena e Academia continuam fora do escopo.
