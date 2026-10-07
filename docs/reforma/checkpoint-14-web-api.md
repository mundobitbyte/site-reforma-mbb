# Reforma MbB — Checkpoint 14

Data: 7 de outubro de 2026.

## Resultado
Web/API recebeu 13 etapas adicionais, exercícios, caderno, contrato HTTP e leitura do código integrado da mesma Cantina. Foram criadas 17 páginas curriculares e quatro recortes HTML de estudo. A interface, API, serviço, schema e migrações existentes não foram reescritos nesta fatia.

Toda escrita externa: `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. Nenhuma escrita deste trabalho no repositório oficial, domínio ou Firebase. Não há autorização pendente. Acervo Web, Python, VisuAlg, Análise, BD, SQL protegido e Cantina v1 preservados.

## Faltam 5 macroetapas

| Macroetapa | Estado |
|---|---|
| 1 — Pedido persistente | Servidor/terminal e conversa HTTP verificados; navegador pendente |
| 2 — Cupom | Servidor/terminal e conversa HTTP verificados; navegador pendente |
| 3 — Estados | Servidor/terminal e conversa HTTP verificados; navegador pendente |
| 4 — Percurso curricular | Análise: 15 etapas; BD: 11 capítulos/exercícios; Programação/Python: 15 etapas/ponte; Web/API: 13 etapas. Faltam adaptações de QTS e Git |
| 5 — Revisão e entrega | Visual, acessibilidade em execução, prévia, revisão final e entrega pendentes |

A contagem permanece 5 porque as macroetapas completas ainda dependem de verificação visual ou conclusão curricular/final. Dentro da adaptação curricular principal, restam QTS e Git.

## Entregas
- Progressão: fronteiras → HTML → campos → CSS → eventos → coleções → HTTP → Fetch → venda confirmada → estados → servidor → evidências → defesa integrada.
- Recortes estáticos e módulos testáveis explicam os conceitos antes de apresentar a interface/API completa. Subtotal da tela é previsão; o servidor confirma a venda.
- Contrato com quatro operações reais, entradas, tipos estritos, campos relevantes e códigos de recusa.
- Mapas de 23 capítulos Web I/II e 45 temas backend, preservando os projetos e tecnologias originais. Recursos como sessão, PRG, ORM e autenticação não são anunciados como implementados na Cantina.
- Clientes de exercício não repetem POST automaticamente e distinguem recusa HTTP, formato inválido e falha de comunicação. Eles não foram incorporados automaticamente ao app.js existente.
- Roteiro HTTP repetível com servidor e banco temporários, sem tocar nos bancos de trabalho.

## Verificação executada
**26 novos testes JavaScript aprovados:** 17 de requisição/resposta com Fetch controlado e 9 do handler de simulação com elementos controlados. São testes de código, sem DOM/navegador real.

**17 requisições HTTP reais** dos módulos contra a API temporária verificaram venda de 2 Águas por 600 centavos, saldo 18, avanço até Entregue com quatro eventos, recusa de consulta antiga, 5 Sucos com cupom por 2700 e recusas sem nova baixa. As quatro operações/status também foram conferidas no OpenAPI.

**71 páginas HTML** passaram na verificação estrutural: 2037 referências locais, 90 botões de cópia e 45 arquivos canônicos de código exibido, sem erros. Os mapas de origem foram conferidos. Nove arquivos JavaScript passaram na checagem de sintaxe; o exemplo de coleções produziu 2200 centavos e o JSON previsto.

Os **87 testes Python** aprovados no checkpoint 13 são evidência anterior e não foram reexecutados nesta fatia, pois serviço/API/interface ficaram iguais. Assim, há 113 casos registrados entre as duas suítes; não são 113 testes de navegador. Requisições HTTP e execuções de exemplos não foram somadas a esse número.

| Arquivo protegido | SHA-256 preservado |
|---|---|
| pages/bancodedados.html | f46eee0470402bc9462c1179fb5fb3fa75099dcc6a442af1dcc572556cbb5f04 |
| assets/seguranca-dados/mysql-general-log-lab.sql | b68631aad643d6a2400dd3dc4ac490a332b337ebc19431c932b34f9502ce6352 |

## Pendências e bloqueio
Navegador, teclado/foco reais, 360 px, acessibilidade em uso e compreensão por estudantes continuam pendentes. A execução no VisuAlg e a sessão interativa de depuração também não foram realizadas.

Bloqueio visual já conhecido: conexão direta recusada anteriormente, prévia sem configuração compatível e alternativa exigida indisponível. Não houve repetição dessas tentativas nem publicação. A orientação de [sites-preview-troubleshooting](skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md) determina: “If that skill is unavailable, do not improvise another browser-control path.” Ela limita a validação visual, sem impedir código, HTTP local ou adaptação curricular.

A API ainda não implementa idempotência de venda, identidade ou autorização. A interface integrada pressupõe JSON na resposta; o novo tratamento explícito de formato inválido permanece nos clientes de exercício, sem alegação de alteração da interface.

## Continuidade
Próxima parte: QTS da mesma Cantina, aproveitando requisitos, v1 preservada, casos negativos, serviço evoluído, módulos e evidências HTTP. Depois, Git/documentação e revisão de entrega.

Entrada: `laboratorio/percurso-mbb/web-api/index.html`.
Decisões: `docs/reforma/adaptacao-web-api-cantina.md`.

