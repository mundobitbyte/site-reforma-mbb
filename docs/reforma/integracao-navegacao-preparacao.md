# Integração da navegação — implementação experimental

Implementada no checkpoint 39, somente em mundobitbyte/site-reforma-mbb, branch preparacao/isolamento-inicial. Repositório oficial usado somente para comparar cinco arquivos na referência fb24a793b728af346f46fc2bf9d92b96d78791b4. [Registro e limites](checkpoint-39-integracao-navegacao.md).

## Caminho principal
[Home experimental](../../index.html) → Cantina Horizonte — percurso integrado → [percurso](../../laboratorio/percurso-mbb/index.html). A home tem seis acessos diretos às disciplinas; a área Programação e Desenvolvimento também contém um cartão para o percurso completo. As entradas originais dos módulos continuam disponíveis.

| Disciplina na nova entrada | Destino conectado |
|---|---|
| Análise | [Análise da Cantina](../../laboratorio/percurso-mbb/analise/index.html) |
| Banco de Dados | [Banco da Cantina](../../laboratorio/percurso-mbb/banco-de-dados/index.html) |
| Programação | [Programação da Cantina](../../laboratorio/percurso-mbb/programacao/index.html) |
| Web/API | [Web/API da Cantina](../../laboratorio/percurso-mbb/web-api/index.html) |
| QTS | [QTS da Cantina](../../laboratorio/percurso-mbb/qts/index.html) |
| Git | [Git da Cantina](../../laboratorio/percurso-mbb/git/index.html) |

Cada disciplina retorna ao percurso. Na entrada do percurso, Áreas do site volta à home e Aplicação da Cantina mantém o retorno existente ao programa. IDs e js/home.js preservados; nenhum redirecionamento de páginas antigas.

## Como abrir a versão completa do projeto local
Com o ambiente da Cantina preparado, iniciar previa_local.py conforme o [guia](guia-execucao-cantina-mbb.md). Usando porta 8007, os endereços são:

- Home: http://127.0.0.1:8007/curso/index.html
- Percurso: http://127.0.0.1:8007/curso/laboratorio/percurso-mbb/index.html
- Aplicação: http://127.0.0.1:8007/

A porta 8007 é apenas uma opção para distinguir sessões anteriores. Usar a porta efetivamente impressa no terminal. A prévia mantém a API na raiz e os materiais permitidos em /curso; não é uma réplica hospedada de todas as áreas do site. Conta/pesquisa pessoal e outras pastas não permitidas não fazem parte do ensaio.

## Ordem atual definida pelo professor
1. Concluir desenvolvimento e integração do projeto experimental. Navegação implementada e verificação técnica concluída no 39.
2. Apresentar a versão completa e a comparação para revisão do professor. Sem exigir reteste de aluno enquanto ainda houver desenvolvimento a concluir.
3. Somente depois de tudo pronto, realizar o reteste com aluno reservado pelo professor e consolidar os critérios de compreensão e o parecer.
4. Após revisão/parecer, obter autorização explícita antes de qualquer publicação ou escrita no repositório oficial.

Essa ordem substitui a preparação 38 que colocava reteste como primeira condição para implementar a navegação. As 31 subetapas do laboratório continuam com 28 concluídas; adiamento autorizado não comprova aprovação pedagógica. App Inventor prático, Santa Filomena e Academia permanecem fora do escopo.

## Limite de hospedagem
O HTML pode integrar navegação estática; a aplicação depende de Python/FastAPI e banco local. Publicar frontend/index.html em hospedagem estática não cria a API. A execução local permanece descrita no percurso. Nenhum backend público, nova hospedagem, merge ou deploy foi realizado.
