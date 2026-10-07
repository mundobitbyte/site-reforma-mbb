# Reforma Mundo bit Byte — checkpoint 21

A interface da Cantina foi executada em **Chromium real** com o código do branch experimental. A política gerenciada do navegador bloqueia navegação por URL, inclusive localhost; por isso a página foi carregada no próprio Chromium e as chamadas `/api/**` foram encaminhadas internamente ao **FastAPI real**, usando banco SQLite temporário. Não houve publicação externa.

## Resultado

- Rodada de acessibilidade em navegador: **38/38**.
- Rodada integrada navegador + API/serviço/SQLite: **25/25**.
- Arquivos executados conferidos byte a byte com os blobs do branch.
- Um defeito real foi encontrado: texto longo sem espaços podia provocar rolagem horizontal em 320 px.
- Correção aplicada em `frontend/styles.css` e sincronizada em `web-api/codigo-integrado.html`.
- Registro, recarga/estoque, consulta, cupom e sequência de estados funcionaram contra o serviço real.
- Respostas 400 e 409 usadas nos testes de recusa foram esperadas e tratadas pela interface.

## Contagem

| Macroetapa | Concluídas/total | Pendente |
|---|---:|---|
| Pedido persistente | **6/6** | — |
| Cupom | **5/5** | — |
| Estados | **5/5** | — |
| Currículo | 7/9 | 4.8, 4.9 |
| Entrega | 2/6 | 5.3, 5.4, 5.5, 5.6 |

**25/31 concluídas; 6 pendentes.**

As subetapas **1.6, 2.5 e 3.5 estão concluídas**. A 5.3 avançou substancialmente: 360/320 px, teclado, foco, DOM real e árvore de acessibilidade do Chromium foram confirmados. **Leitor de tela real ainda não foi executado**, portanto 5.3 não foi encerrada.

O VisuAlg continua reservado para teste posterior do Professor Ronaldo e não bloqueia os demais trabalhos. Produção `mundobitbyte/site`, domínio oficial e Firebase permaneceram intactos.
