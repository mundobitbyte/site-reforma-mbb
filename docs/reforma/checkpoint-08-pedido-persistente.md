# Reforma MbB — Checkpoint 08: pedido persistente
Data local: 6 de outubro de 2026.
Planejamento aprovado; execução no laboratório mundobitbyte/site-reforma-mbb.

## Contagem que será mantida nas próximas respostas
Faltam **5 macroetapas** do plano aprovado. Planejamento inicial concluído.
| Macroetapa restante | Estado |
|---|---|
| 1. Pedido persistente: banco, serviço, API, interface e testes | Serviço/API implementados e testados; interface criada; teste de navegador pendente |
| 2. Cupom | Pendente |
| 3. Estados do pedido | Pendente |
| 4. Adaptação do percurso didático e revisão tópico a tópico | Pendente |
| 5. Revisão final, documentação, prévia e entrega | Pendente |

Esta contagem representa o plano atual, não uma previsão de cinco mensagens ou um prazo. Uma etapa só sai da contagem quando seus critérios forem atendidos; se surgir trabalho adicional necessário, a mudança será explicada.

## Implementado nesta etapa
Novo pacote: laboratorio/cantina-evolutiva.
- servico.py: agrupamento de itens, validação e transação do pedido.
- app.py: GET produtos, POST pedidos, GET pedido e serviço da interface.
- frontend/index.html/app.js/styles.css: cardápio, carrinho, registro e consulta.
- tests/test_pedido.py: testes de integração com SQLite temporário.
- requirements.txt, README.md e .gitignore: execução e proteção contra versionar banco/ambiente/cache.
- schema-inicial.sql existente foi reutilizado, sem mudança.

A v1 de QTS permanece separada. CSS e nomes/preços iniciais foram reaproveitados como referência. A interface da evolução não importa scripts gerais, Firebase ou o interceptador demo da v1: usa a API real deste pacote.

## Comportamento do núcleo
O servidor exige identificador e quantidade inteiros estritos, rejeitando booleano, texto, fração, zero, negativo e quantidade acima de 10. Repetições do mesmo produto são somadas e a soma também respeita 1–10.

Uma transação de escrita começa antes da leitura de saldos. Produto inexistente ou saldo insuficiente rejeita a operação. A baixa de estoque verifica saldo na própria atualização. Pedido, itens e estoque são confirmados juntos; falha intermediária provoca rollback.

Valores são inteiros em centavos; preço histórico fica no item. A consulta deriva subtotal e total dos itens, e mudar o preço atual não reescreve a venda.

O registro nasce no estado Novo. “Registrar” não equivale à transição de negócio Confirmado, que pertence à macroetapa 3.
Cupom é recusado explicitamente pela API e não é anunciado como disponível na interface. Não foi acrescentada política de uso por aluno/cliente.

Todas as conexões do serviço habilitam chaves estrangeiras. Dados iniciais são criados só para banco novo; reiniciar não restaura estoque nem apaga pedidos.

## Testes executados
**15 testes de integração passaram** após a versão final dos ajustes:
- cardápio/API e arquivos da interface servidos;
- pedido normal e consulta;
- preservação de pedido/estoque após reabrir;
- seis entradas inválidas de quantidade/tipo, sem efeitos;
- consolidação de itens repetidos e rejeição de soma excessiva;
- estoque insuficiente após agrupamento;
- pedido vazio e produto inexistente sem gravação parcial;
- falha inserida no meio da transação, com reversão de pedido/itens/estoque;
- duas tentativas concorrentes pelo último item: uma HTTP 201, outra HTTP 409; um pedido e estoque zero;
- preço histórico preservado e item órfão recusado;
- pedido inexistente e cupom indisponível.

A sintaxe do JavaScript passou em node --check. Os testes servem arquivos da interface, mas não executam o JavaScript num navegador.

O ambiente emitiu o aviso de depreciação já conhecido do TestClient/Starlette com httpx. Não houve falha; não foram atualizadas dependências por causa desse aviso nesta etapa.

## Limitação concreta do teste visual
O servidor de QA iniciou corretamente e usou banco fictício fora do pacote.
A tentativa de abrir http://terminal.local:4173/ no navegador remoto retornou **ERR_CONNECTION_REFUSED**.
Não foi um bloqueio de autenticação ou de robô, e não significa que o site oficial esteja fora do ar.
O Chromium não estava instalado no runtime local para a alternativa local de teste.

Consequência: cliques reais, renderização, consulta pela interface e largura de 360 px ainda não foram validados no navegador. Por isso a macroetapa 1 permanece em andamento, apesar dos testes da API aprovados.
Não foi publicada uma URL nem criado outro repositório para contornar a restrição de hospedagem.

## Revisão MbB desta fatia
Especialista: as regras são impostas pelo servidor e a transação protege os dados; validação no carrinho é só ajuda ao usuário. O ensaio concorrente cobre duas tentativas pelo último saldo, não uma garantia de carga ilimitada.
Professor: quantidade, agrupamento, relacionamento, histórico e transação produzem evidências do mesmo pedido; não houve mudança superficial de nomes de outro projeto.
Iniciante: a interface mostra quantidade/estoque e consulta do que ficou salvo; recursos ainda não disponíveis são identificados. A adequação visual e compreensão das mensagens continuam exigindo verificação real.

Não há alegação de sistema completo ou pronto para produção. Autenticação, backup/recuperação, testes de carga, cupom e transições não foram concluídos.

## Preservação e próximo passo
Verificação local: Cantina v1 sem diferenças contra o snapshot; hashes da página de BD e SQL independente protegidos sem diferença. Nenhuma escrita foi realizada no repositório oficial por esta tarefa.

Próximo passo: resolver a via de teste da interface e verificar o fluxo real para fechar a macroetapa 1. O detalhamento do cupom pode avançar em paralelo lógico, sem marcar a etapa de pedido como concluída antecipadamente.
Nenhuma nova autorização é necessária para continuar o trabalho já aprovado.
