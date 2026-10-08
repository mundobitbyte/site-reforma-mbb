# Parecer QTS/Git — situação final

**Checkpoint41: laboratório concluído, 31/31.** [Parecer final e limites](../../../docs/reforma/parecer-final.md). Revisão geral40 e reteste agregado41 encerrados. Publicação separada, autorizada somente no experimental e fora do domínio oficial; publicação estática confirmada no checkpoint43. As rodadas abaixo são históricas e não indicam pendências atuais.

## Registro histórico do checkpoint 15
Escopo: adaptação curricular e práticas adicionais; não liberação do produto completo.
Concluído: vínculos das 17 etapas QTS, casos reais por RF/RQ, comparação portátil isolada, recorte TDD e prática Git local.
A execução caracterizou 9 cenários em duas versões (18 observações) e conferiu oito amostras em cada fase TDD.
Git: 62 comandos, revert, conflito resolvido, worktree, remoto bare local, clone/fetch/pull; nenhum GitHub foi exercitado pela simulação.
Evidência anterior: 87 testes Python e 26 JavaScript; não executados novamente nesta rodada.
Defeitos da v1 ficam preservados para ensino. Não declarar que um ticket da v1 foi corrigido.
Pendências registradas naquela rodada: navegador, 360 px, teclado/foco e compreensão humana; VisuAlg real, revisão final e prévia compatível. Veja a atualização abaixo para a situação vigente.
Riscos conhecidos: POST sem chave de idempotência, sem autorização por usuário; não são produto de uso real aprovado.
Conclusão: material/práticas adicionais prontos para revisão; não liberar como produto final.
Cobertura percentual não medida; Actions não executado. Não há certificação de qualidade ou de maturidade.

## Atualização após o checkpoint 21

Pedido, cupom e estados foram concluídos em Chromium real integrado ao FastAPI/serviço/SQLite temporário. A evidência registra 38/38 casos de acessibilidade e 25/25 de integração, incluindo 360/320 px, teclado, foco, DOM e árvore de acessibilidade. [Registro](../../../docs/reforma/evidencia-interface-21.json).

## Registro histórico — consolidação no checkpoint 29

**27/31 concluídas; 4 abertas. Posição atual: 5.6, preparação do parecer.** O registro acima preserva a situação e as grandezas das rodadas anteriores.

A prévia direta da aplicação e de uma aula curricular foi confirmada no Windows do professor no [checkpoint 25](../../../docs/reforma/evidencia-previa-windows-25.json). A falha de codificação SQL foi reproduzida, corrigida e exercitada em duas regressões no [26](../../../docs/reforma/evidencia-sql-utf8-26.json). O Narrador real e a nova sequência até Entregue foram confirmados no [27](../../../docs/reforma/evidencia-narrador-windows-27.json), complementando a acessibilidade do checkpoint 21.

No [checkpoint 28](../../../docs/reforma/evidencia-retomada-28.json), a suíte Python completa passou com 89 testes; 12 observações HTTP conferiram o retorno corrigido, recursos, API e entradas curriculares. Esses resultados têm escopos distintos dos números históricos e não são somados. O professor relatou navegação aparentemente correta; zoom/cópia e compreensão com participante não foram confirmados.

Permanecem 4.8 (VisuAlg adiado; pdb concluído), 4.9 (revisão do percurso parcial), 5.5 (uso/compreensão com participante) e 5.6 (decisão final). A [minuta consolidada](../../../docs/reforma/parecer-final-minuta.md) reúne versões, resultados e reservas. Não houve novos ensaios funcionais nesta consolidação. Este documento permanece parcial; a entrega final não foi declarada concluída. Não há autorização pendente para o trabalho já solicitado.
