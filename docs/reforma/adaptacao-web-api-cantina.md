# Web/API da Cantina — adaptação e revisão MbB

## Escopo
13 etapas adicionais (0–12), exercícios WEB00–WEB12, caderno, contrato HTTP e leitura do código integrado. A escrita permanece no laboratório `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`.

A interface/API já construída foi reutilizada sem alterar seus arquivos, serviço, esquema ou migrações. Os recortes novos explicam responsabilidades e são identificados como simulação ou cliente de exercício. Não substituem automaticamente o app.js integrado.

## Progressão

| Etapa | Necessidade → conceito | Evidência |
|---|---|---|
| 0 | Escolher/acompanhar pela tela → responsabilidades e fronteiras | WEB00, E09/E12/PG14 |
| 1 | Dizer onde a pessoa está → HTML e hierarquia | WEB01, E11/BD01 |
| 2 | Informar quantidade → rótulo, campo e limites | WEB02, RQ-01/RF-03 |
| 3 | Ler em espaço pequeno → CSS, caixa, foco e layout | WEB03, RQ-02 |
| 4 | Responder ao envio → DOM, evento e simulação | WEB04, PG01/PG03 |
| 5 | Levar vários itens → array, objeto e JSON de intenção | WEB05, PG06/BD03 |
| 6 | Programas concordarem → método/rota/corpo/status | WEB06, BD09/PG12 |
| 7 | Obter a fonte de produtos → Fetch e interpretação da resposta | WEB07, PG08/RQ-01 |
| 8 | Confirmar venda → POST e resultado salvo | WEB08, RF-03 a RF-08 |
| 9 | Continuar preparação → estado esperado e conflito | WEB09, RF-09 |
| 10 | Recusar entrada alterada → modelo estrito e serviço | WEB10, BD07/PG11 |
| 11 | Saber o que foi provado → testes por camada | WEB11, PG13 |
| 12 | Defender a mesma venda → rastreabilidade e revisão | WEB12, E15/BD09/PG14 |

Necessidade, pré-requisito, conceito, arquivos, origem e evidência estão em `matriz-web-api.json`. A revisão retoma a previsão local de WEB04 para distingui-la da venda confirmada em WEB08.

Especialista: confere fronteira, contrato, resultado incerto e transação. Professor: verifica se o recurso aparece por necessidade e se a evidência corresponde à camada. Iniciante: sabe qual arquivo abrir, o que será enviado e qual resposta significa confirmação.

## Acervo classificado e preservado
- 23 capítulos de Web I/II: fundamentos reaproveitados, projetos completos preservados.
- 45 temas do acervo backend: classificação por ligação às etapas ou aprofundamento preservado.
- Não é reprodução integral desses 68 capítulos/temas. Os mapas permitem consultar as fontes completas.
- PHP, PDO, sessão, PRG, CSRF, autenticação, ORM e cancelamento permanecem nos seus contextos. Não são traduzidos como equivalências automáticas nem anunciados como recursos da Cantina.
- A prática principal permanece na Cantina. A consulta conceitual do acervo backend não exige construir o projeto original ou aplicativos móveis excluídos.

## Arquivos de estudo e aplicação integrada
Há quatro versões pequenas de HTML: estrutura, formulário sem comportamento, estilo e simulação com evento. Os botões dos recortes anteriores a JavaScript ficam desabilitados; o recorte final calcula uma previsão e declara que não registrou venda.

A coleção de estudo prepara subtotal conhecido e JSON com produto_id/quantidade, excluindo preço como autoridade. Quatro módulos organizam solicitação, consulta, registro e avanço. Recebem base local explicitamente, não enviam ao importar e não repetem POST por falha de comunicação.

A página de código integrado reproduz os quatro arquivos canônicos existentes (HTML, CSS, app.js e app.py) em blocos completos recolhidos. Mantém os vínculos ao serviço e ao banco. O helper de rede do app.js integrado pressupõe JSON; o tratamento explícito de resposta não JSON dos novos recortes não foi incorporado à interface. Esse ponto permanece como revisão futura, sem uma alegação de correção executada.

## Contrato real
As quatro operações são GET /api/produtos, POST /api/pedidos (201), GET /api/pedidos/{pedido_id} e POST /api/pedidos/{pedido_id}/status (200). O contrato inclui entradas completas de exemplo, tipos estritos, campos relevantes de saída e erros de domínio/estrutura. Os campos listados de resposta são um recorte, não uma resposta completa inventada com datas.

Subtotal da tela é previsão. O servidor usa cadastro, preço histórico, estoque e cupom na transação. Consulta não vende; avanço não baixa novamente. Botão desabilitado reduz repetição na tela, sem garantir idempotência. Falha de rede após POST pode deixar o resultado desconhecido. A API ainda não possui chave de idempotência de venda.

A aplicação usa interface/API na mesma origem. CORS não representa identidade ou autorização. Web Storage permanece aprofundamento: a Cantina usa carrinho em memória e pedidos no servidor. Publicação de HTML estático não hospeda o serviço Python.

## Verificação e limites
26 testes JavaScript passaram: 17 de clientes com Fetch controlado e 9 do handler de simulação com elementos controlados. Esses elementos não são DOM ou navegador reais.

O roteiro HTTP fez 17 requisições nativas dos módulos contra uma API local com banco temporário novo. Conferiu quatro operações/status no OpenAPI, venda de 2 Águas por 600, saldo 18, avanço até Entregue com quatro eventos, recusa de consulta antiga, 5 Sucos com MBB10 por 2700, cupom usado e entradas estruturais recusadas. Os testes não alteraram os bancos de trabalho. O executor repetível cria/encerra o servidor e preserva o isolamento.

Os 87 testes Python aprovados no checkpoint 13 permanecem como evidência anterior; não foram reexecutados, pois serviço/API/interface não foram modificados. Não somar as requisições HTTP ao número de casos de teste.

Verificação estrutural: 71 páginas HTML no percurso, 2037 referências locais, 90 botões de cópia, 45 arquivos canônicos de código exibido e mapas de origem, sem erros. Nove arquivos JavaScript passaram na conferência de sintaxe; o exemplo de coleções produziu 2200 centavos e o JSON previsto.

Não executados: navegador, teclado/foco reais, largura de 360 px, avaliação com estudantes, depurador interativo e VisuAlg. Os testes de cliente/HTTP não encerram essas pendências.

## Reproduzir os novos testes
Na pasta `laboratorio/percurso-mbb/web-api`:

```bash
node --test tests/clientes.test.mjs tests/simulacao.test.mjs
```

Com Python do ambiente da Cantina e Node disponíveis:

```bash
python tests/verificar_http_local.py
```

Não executar http-local.mjs diretamente contra a aplicação de trabalho: ele registra vendas e depende da API temporária criada pelo executor.

## Documentação primária consultada
- Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Campos numéricos: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number
- Texto no DOM: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
- CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
- Web Storage: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
- Rótulos: https://www.w3.org/WAI/tutorials/forms/labels/
- Testes FastAPI: https://fastapi.tiangolo.com/tutorial/testing/
- Pydantic estrito: https://pydantic.dev/docs/validation/latest/concepts/strict_mode/

