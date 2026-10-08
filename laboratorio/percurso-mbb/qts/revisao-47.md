# Revisão 47 — Web/API, QTS e Git/GitHub

Concluídas as correções de orientação das três áreas no laboratório experimental. A execução técnica e a revisão didática foram realizadas; não foi feita nova sessão com alunos.

## Problemas confirmados e correções

- **Web/API:** instruções insuficientes para obter/editar arquivos e preparar a API; módulos 07–09 apenas exportavam funções sem roteiro executável; caderno genérico exigia HTTP em atividades estáticas. Acrescentados passos curtos sob demanda, execução de Node, cliente que reutiliza módulos existentes e roteiro de cardápio, venda única, ID retornado, consulta, avanço e conflito 409. Explicados estrutura × regra, banco temporário × persistente e rastreabilidade.
- **QTS:** preparação e interpretação pouco explícitas; referências de participação ainda pendentes apesar do encerramento 41/43. Acrescentados isolamento, exemplos concisos e links diretos; esclarecidos v1 didática, evolução, comparação × correção de cópia, RED esperado e receita local × CI. Novo diagnóstico mostra HTTP 400 e todas as tabelas antes/depois sem alteração após recusa. Matrizes e orientações atuais corrigidas, registros antigos mantidos como históricos.
- **Git:** executor existente não oferecia uma trilha manual equivalente para iniciante. Acrescentadas dez práticas guiadas, comandos copiáveis, pastas, edições, esperado e conferência. Há conflito real e remoto bare local, sem conta GitHub. Corrigida referência à branch acentuada inexistente; branches temporárias legítimas preservadas.
- **Apresentação:** título de rota no contrato HTTP excedia a tela de 320/360 px. Corrigida somente a quebra desse texto e confirmado o resultado público.
- **Cadernos:** registros específicos para 13 etapas WEB, 17 QTS e 10 Git, orientação HTML com retorno à atividade e arquivo Markdown pessoal. Não exigem execução fictícia em atividade conceitual.

## Observações descartadas / recursos já corretos

Preservados código JavaScript canônico, comparador de nove cenários, TDD e executor Git de 62 comandos. A tabela existente de valores-limite e a base da tabela de decisão de QTS já eram úteis e foram reutilizadas. Parecer já continha fechamento 41/43; os erros estavam também em referências e matrizes. Não se corrigiram os defeitos intencionais da v1.

## Testes executados

| Verificação | Resultado real | Limite |
|---|---|---|
| Suíte Python da Cantina | 99 passed | Dados fictícios isolados; Linux/Python 3.12.14 |
| Clientes e simulação Node | 26 passed | Respostas controladas; Node 24.19.0 |
| HTTP local existente | 17 requisições; 4 operações OpenAPI; sequência até Entregue | Banco temporário; não navegador |
| Novo cliente Node contra prévia real | 8 execuções: cardápio, registro, consulta, avanço, 409, 404 e comunicação sem servidor | Sem repetição automática de POST; dados da sessão fictícia |
| Comparação v1/evolução | 9 cenários / 18 observações | Caracterização de defeitos não aprova v1 |
| Ciclo TDD | RED 4 falhas esperadas, GREEN 0, REFACTOR 0 | Exemplo de função, sem alterar aplicação |
| Diagnóstico de recusa | HTTP 400; snapshot de todas as tabelas igual antes/depois | Cupom MBB10 abaixo do mínimo, banco novo temporário |
| Executor Git original | 62 comandos, conflito/revert/fetch/pull/worktree conferidos | Remoto local, sem GitHub |
| Trilha manual nova | 65 execuções de comandos para validar estados e resultados | Arquivos fictícios; execução técnica, não avaliação humana |
| Verificador do percurso | 120 HTML, 3.804 referências, 161 botões de cópia, 54 arquivos canônicos exatos; zero erros | Inspeção estrutural não prova clipboard real |
| Navegador publicado | 57 páginas × 4 larguras = 228 medidas; contrato corrigido retestado em 4 larguras; mais 36 medidas das instruções abertas | 320/360/768/1280 px; viewport em iframe, sem aparelho físico |
| Interação no navegador | Menu Enter/Escape, detalhes Enter, simulação 600 e quantidade 0 barrada nativamente | Sem nova avaliação com leitor de tela ou participante |

Os comandos Windows são apresentados como roteiro revisado; a execução efetiva ocorreu em Linux. A suíte apresentou aviso de depreciação Starlette/httpx já existente; não se alteraram dependências. Os números acima pertencem a instrumentos distintos e não devem ser somados como casos de uma única suíte.

## Preservação

Conferidos 1.229 arquivos fora do escopo: mesmos hashes. Análise, Programação, Banco de Dados, SQL protegido, serviço, frontend integrado, dados, v1, módulos tradicionais e CSS/JS compartilhados intactos. Nenhuma operação no repositório oficial, Firebase ou domínio oficial. Somente a branch `publicacao/cantina-estatica` do repositório experimental foi atualizada; a branch de preparação foi preservada.

## Publicação

Fluxo mantido: GitHub Pages pela branch `publicacao/cantina-estatica`, raiz. Commit principal `bf7066ac0c562cd32f153863510b32b9dbc5848c`; ajuste de apresentação e referências `e1da97625bad4c3aaef475f2f7829fa923441a41`. Prática Web/API, diagnóstico QTS e trilha Git vistos no endereço público. Esta documentação e a separação final dos blocos que exigem edição intermediária são registradas no commit seguinte.

## Pendências e limites reais

Não há falha técnica confirmada restante das práticas executadas. Autonomia de novos alunos não foi medida nesta revisão. No navegador remoto, o botão mostra “Comando copiado.”, porém o clipboard lido pela ferramenta não coincide com o bloco; cópia integral permanece não confirmada, sem alteração do componente compartilhado. Não foram executados GitHub Actions, colaboração GitHub do aluno, leitor de tela ou instalação em Windows nesta revisão. Os relatos históricos encerrados não foram reabertos. Aprovação para estudo não equivale a liberação comercial.

[Evidências técnicas desta revisão](evidencias-revisao-47.json).

## Arquivos modificados

- `laboratorio/percurso-mbb/git/00-localizar.html`
- `laboratorio/percurso-mbb/git/01-registrar.html`
- `laboratorio/percurso-mbb/git/02-investigar.html`
- `laboratorio/percurso-mbb/git/03-recuperar.html`
- `laboratorio/percurso-mbb/git/04-experimentar.html`
- `laboratorio/percurso-mbb/git/05-conflito.html`
- `laboratorio/percurso-mbb/git/06-visitar.html`
- `laboratorio/percurso-mbb/git/07-sincronizar.html`
- `laboratorio/percurso-mbb/git/08-revisar.html`
- `laboratorio/percurso-mbb/git/09-checkpoint.html`
- `laboratorio/percurso-mbb/git/99-exercicios.html`
- `laboratorio/percurso-mbb/git/acervo.html`
- `laboratorio/percurso-mbb/git/caderno-git.html`
- `laboratorio/percurso-mbb/git/caderno-git.md`
- `laboratorio/percurso-mbb/git/index.html`
- `laboratorio/percurso-mbb/git/pratica.html`
- `laboratorio/percurso-mbb/git/trilha-manual.html`
- `laboratorio/percurso-mbb/matriz-qts.json`
- `laboratorio/percurso-mbb/qts/00-primeira-rodada.html`
- `laboratorio/percurso-mbb/qts/01-qualidade.html`
- `laboratorio/percurso-mbb/qts/02-falha-defeito.html`
- `laboratorio/percurso-mbb/qts/03-oraculo.html`
- `laboratorio/percurso-mbb/qts/04-revisao.html`
- `laboratorio/percurso-mbb/qts/05-valores.html`
- `laboratorio/percurso-mbb/qts/06-regras.html`
- `laboratorio/percurso-mbb/qts/07-camadas.html`
- `laboratorio/percurso-mbb/qts/08-risco.html`
- `laboratorio/percurso-mbb/qts/09-plano.html`
- `laboratorio/percurso-mbb/qts/10-defeito.html`
- `laboratorio/percurso-mbb/qts/11-automacao.html`
- `laboratorio/percurso-mbb/qts/12-tdd.html`
- `laboratorio/percurso-mbb/qts/13-integracao.html`
- `laboratorio/percurso-mbb/qts/14-usuario.html`
- `laboratorio/percurso-mbb/qts/15-processo.html`
- `laboratorio/percurso-mbb/qts/16-parecer.html`
- `laboratorio/percurso-mbb/qts/99-exercicios.html`
- `laboratorio/percurso-mbb/qts/caderno-qts.html`
- `laboratorio/percurso-mbb/qts/caderno-qts.md`
- `laboratorio/percurso-mbb/qts/codigo.html`
- `laboratorio/percurso-mbb/qts/evidencias-revisao-47.json`
- `laboratorio/percurso-mbb/qts/exemplos/recusa_http_banco.py`
- `laboratorio/percurso-mbb/qts/index.html`
- `laboratorio/percurso-mbb/qts/matriz-casos.html`
- `laboratorio/percurso-mbb/qts/matriz-casos.json`
- `laboratorio/percurso-mbb/qts/plano-da-rodada.md`
- `laboratorio/percurso-mbb/qts/roteiro-manual.md`
- `laboratorio/percurso-mbb/web-api/00-fronteiras.html`
- `laboratorio/percurso-mbb/web-api/01-html.html`
- `laboratorio/percurso-mbb/web-api/02-formulario.html`
- `laboratorio/percurso-mbb/web-api/03-css.html`
- `laboratorio/percurso-mbb/web-api/04-eventos.html`
- `laboratorio/percurso-mbb/web-api/05-colecoes.html`
- `laboratorio/percurso-mbb/web-api/06-http.html`
- `laboratorio/percurso-mbb/web-api/07-fetch.html`
- `laboratorio/percurso-mbb/web-api/08-registro.html`
- `laboratorio/percurso-mbb/web-api/09-estados.html`
- `laboratorio/percurso-mbb/web-api/10-servidor.html`
- `laboratorio/percurso-mbb/web-api/11-evidencias.html`
- `laboratorio/percurso-mbb/web-api/12-integracao.html`
- `laboratorio/percurso-mbb/web-api/99-exercicios.html`
- `laboratorio/percurso-mbb/web-api/caderno-web-api.html`
- `laboratorio/percurso-mbb/web-api/caderno-web-api.md`
- `laboratorio/percurso-mbb/web-api/codigo-integrado.html`
- `laboratorio/percurso-mbb/web-api/contrato.html`
- `laboratorio/percurso-mbb/web-api/exemplos/pratica-api.mjs`
- `laboratorio/percurso-mbb/web-api/index.html`
- `laboratorio/percurso-mbb/web-api/pratica-local.html`
- `laboratorio/percurso-mbb/web-api/verificacao-responsiva.html`
- `laboratorio/percurso-mbb/qts/revisao-47.md` (este relatório).
