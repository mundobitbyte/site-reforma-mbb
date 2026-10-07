# Reforma MbB — Checkpoint 09: cupom e pendência visual
Data local: 7 de outubro de 2026.
Continuação do Checkpoint 08. Laboratório: mundobitbyte/site-reforma-mbb.

## Contagem atual
Faltam **5 macroetapas**:
1. Pedido persistente — banco/API testados; fluxo real de interface pendente.
2. Cupom — servidor e interface implementados; testes de integração aprovados; interface real pendente.
3. Estados do pedido — pendente.
4. Adaptação curricular e revisão tópico a tópico — pendente.
5. Revisão final, prévia e entrega — pendente.

A contagem não equivale ao número de mensagens. Nenhuma das duas primeiras etapas foi encerrada antecipadamente por testes apenas de servidor.

## Retomada da pendência anterior
Não foi refeita a cópia do repositório nem a auditoria anterior. A investigação da via de navegador confirmou:
- a prévia supervisionada estava parada;
- a tentativa de iniciar este pacote falhou por ausência de servidor de desenvolvimento compatível/configuração estática reconhecida;
- o pacote da Cantina possui servidor Python, não a estrutura JavaScript esperada por esse fluxo.

O fluxo de recuperação consultado requer checkout com package.json e servidor compatível com sua execução supervisionada. Ele também exige a habilidade control-browser, que não apareceu nos catálogos disponíveis. A orientação literal é: “If that skill is unavailable, do not improvise another browser-control path.”
Fonte: [sites-preview-troubleshooting/SKILL.md](skill://sites@openai-curated-remote/root/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-preview-troubleshooting/SKILL.md).

Não houve nova tentativa de navegador, alteração da infraestrutura, criação de outro repositório ou publicação. Esta limitação afeta a comprovação visual, não invalida os testes locais de servidor. O pedido não foi tratado como encerrado.

## Implementação do cupom
A evolução passou a aceitar campo opcional cupom no POST /api/pedidos.
- Código normalizado com remoção de espaços e letras maiúsculas.
- MBB10: 10%, mínimo de 3.000 centavos e validade inicial até 31/12/2099 inclusive.
- Um uso por código no banco didático, seguindo o marcador utilizado da v1. Não é uso por aluno/cliente e não foi criado cadastro.
- Cupom desconhecido, vencido, utilizado, abaixo do mínimo ou com validade inválida recusa a tentativa inteira.
- Nenhum desconto é prometido no carrinho antes da confirmação do servidor.
- A interface exibe subtotal previsto e informa que validação/desconto acontecem ao registrar.
- O pedido guarda código e desconto em centavos; a consulta não recalcula o desconto a partir da configuração atual.
- Arredondamento monetário: metade para cima em centavos inteiros.
- Data de negócio: America/Sao_Paulo. Incluído tzdata nas dependências para sistemas que não possuam essa base.

Decisão explícita de operação: cupom inválido recusa o registro e deixa o usuário corrigir ou retirar o código. Isso evita aplicar um pedido com condições diferentes das solicitadas sem mostrar a recusa.
Pedido sem cupom continua seguindo o fluxo anterior.

## Banco e transação
O schema-inicial.sql foi preservado.
Nova migração: laboratorio/cantina-evolutiva/migracao-02-cupom.sql.
Ela acrescenta cupom, os campos de cupom/desconto em pedido, atualiza a visão de resumo e registra a versão 2.

A migração ocorre dentro de transação e só uma vez. Pedidos/itens/estoque da primeira fatia são preservados; descontos antigos ficam zero e cupom antigo fica nulo. Reiniciar não libera código já utilizado.

Na venda, validação, pedido, itens, baixa de estoque e uso do código estão na mesma transação. Disputa pelo código permite apenas uma utilização no cenário testado. Falha ao gravar o uso reverte também pedido, itens e estoque.

A configuração de cupom não pode ser alterada por endpoint público desta evolução. Os testes alteram dados fictícios diretamente em bancos temporários para verificar exceções.

## Validação executada
**29 testes de integração passaram**: os 15 testes do pedido atualizados para o contrato com cupom, mais 14 casos de cupom.
Novas evidências:
- mínimo inclusive e normalização do código;
- desconto de 300 sobre subtotal de 3.000; total de 2.700 centavos;
- uso permanece consumido após reabrir;
- recusa por mínimo, vencimento, uso, código inexistente e validade inválida;
- validade aceita no próprio dia final;
- estoque insuficiente não consome cupom;
- falha inserida no uso do cupom reverte toda a operação;
- arredondamento de 30,5 para 31 centavos; total de 274 para subtotal de 305;
- configuração alterada depois não modifica desconto da venda;
- desconto de 100% não produz total negativo;
- duas tentativas concorrentes com o mesmo código: uma aceita, outra recusada; um pedido e uma baixa de estoque;
- migração de banco da primeira fatia preserva venda e saldo;
- código enviado como número é recusado.

Sintaxe do JavaScript verificada. Testes de navegador, largura de 360 px, acessibilidade e compreensão por usuário continuam pendentes.
O aviso já conhecido de depreciação TestClient/httpx permaneceu, sem falhas; não houve atualização geral de dependências.

## Revisão MbB
Especialista: conferir cupom no servidor, guardar desconto histórico e usar transação resolve falhas comprovadas da v1 sem esconder limites de teste.
Professor: o mesmo RF-05 liga regra, dados, operação e casos negativos; a migração demonstra evolução real do banco preservando evidência anterior.
Iniciante: separar subtotal previsto e total confirmado evita dar a impressão de um desconto já aceito. Mensagens foram mantidas em português.
Autocrítica: “cupom usado” é uma regra didática por código; não deve ser apresentado como arquitetura comercial por cliente. Essa ampliação exigiria um escopo próprio.

## Arquivos alterados/adicionados
No pacote laboratorio/cantina-evolutiva:
servico.py, app.py, migracao-02-cupom.sql, requirements.txt, frontend/index.html, frontend/app.js, tests/test_pedido.py, tests/test_cupom.py e README.md.
Documento adicional: docs/reforma/checkpoint-09-cupom.md.

Nenhuma escrita no oficial. Cantina v1 sem diferença contra o snapshot local; hashes da página de BD e SQL protegido continuam iguais. Não foram removidos ou substituídos comandos SQL originais.

## Próximo passo
Implementar a sequência permitida de estados e seus testes no mesmo pedido, enquanto a verificação visual permanece registrada como bloqueio de infraestrutura. Não depender da prévia para continuar o trabalho de servidor já aprovado.
