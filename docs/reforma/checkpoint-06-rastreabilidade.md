# Reforma MbB — Checkpoint 06: requisitos, modelos e implementação
Data local: 6 de outubro de 2026, America/Sao_Paulo.
Laboratório exclusivo: mundobitbyte/site-reforma-mbb.
Snapshot de referência: 4f8a39322afff1b44df039bf6247c5f85135f973.

## Resultado principal
No confronto desta etapa, Cantina apresenta a cadeia executável mais próxima do percurso interdisciplinar: requisitos-base → quatro tabelas SQLite → API FastAPI → frontend → documentos de QTS e testes. Isso é uma vantagem de reaproveitamento, não certificação de qualidade nem escolha definitiva da base.

Conecta possui a análise consolidada mais diretamente documentada entre os três projetos confrontados, porém seu protótipo inspecionado é uma demonstração de uma ordem fixa em memória. Central possui implementação Python com responsabilidades separadas e persistência, mas precisa de ampliação do domínio e de interfaces para atravessar o percurso pretendido.

Dois achados ampliam o mapa anterior:
1. BD também contém o integrador loja_integrador, além de comercio. Seu modelo de pedidos merece avaliação própria.
2. Central Desktop é um pacote distinto da Central de terminal, com interface Tkinter e outro modelo de atendimento. Não deve ser omitido nem tratado como a mesma aplicação apenas pelo nome.

Nenhuma reescrita curricular, correção da Cantina v1, exclusão de material, decisão definitiva de base ou publicação foi realizada.

## Evidência nova executada
### Central de terminal
Sete cenários foram executados chamando as funções reais da aplicação, com entradas de terminal simuladas e SQLite temporário:
- prioridade 8 rejeitada e correção para 1 aceita; patrimônio normalizado;
- descrição vazia rejeitada;
- listagem com prioridade por extenso e estado;
- conclusão de id inexistente rejeitada;
- conclusão de id existente registrada;
- atendimento preservado após fechar e reabrir o repositório;
- texto com aparência de SQL armazenado como dado por parâmetros, sem apagar tabela.

Esses cenários complementam os quatro testes de regras já registrados anteriormente, sem repeti-los. Não comprovam concorrência, recuperação de falha, GUI, API ou autenticação.

### Central Desktop
Os três testes existentes passaram: limpeza/validação dos campos, rejeição de nome curto e persistência após reabrir. Executados com o Python disponível neste ambiente; não foi aberta a janela Tkinter nem validado o requisito de instalação descrito no README.

### Conecta
O JavaScript original foi executado em Node com DOM mínimo simulado. Não é teste de navegador, layout, acessibilidade ou clique real.
Oito cenários/observações:
- reparo sem diagnóstico bloqueado;
- reparo sem aprovação bloqueado;
- aprovação → reparo → conclusão → consulta mostra Pronto para retirada;
- recusa impede início do reparo;
- consulta com nome diferente rejeitada;
- criar OS exibe mensagem demonstrativa, mas o fluxo continua na OS 1042;
- chamar diretamente o handler de conclusão leva a Pronto para retirada sem proteger a transição;
- nova instância começa no estado inicial, sem persistência.

O último limite de handler não prova que um botão possa ser acionado indevidamente pela navegação normal. Mostra que a demonstração não equivale a autorização e regras impostas por backend. O autor registrado é literal demonstrativo, não identidade autenticada.

Não foram repetidas as 15 sondagens da Cantina; seus resultados anteriores foram usados na rastreabilidade.

## Matriz Cantina — requisitos existentes e evidência
IDs abaixo pertencem a qts/cantina-horizonte-v1/docs/requisitos-base.md. Caminhos de código: backend/app.py e frontend/app.js dentro desse pacote.

| Requisito | Dados e operação existentes | Código/interface | Evidência disponível | Lacuna |
|---|---|---|---|---|
| RF-01 Produtos | produtos(id,nome,preco,estoque); GET /api/produtos | listar_produtos; renderizarProdutos | Inspeção das funções e do schema | Teste visual completo e de listagem ainda não executado nesta auditoria |
| RF-02 Inclusão de item | produto vinculado ao item do pedido | adicionarAoCarrinho e POST /api/pedidos | Pedido normal persistido nos checkpoints anteriores; E2E existente inspecionado | E2E não executado aqui; consistência das regras entre UI/API |
| RF-03 Quantidade 1–10 | itens_pedido.quantidade | validar_quantidade; validação de tipo da entrada | Zero e negativo aceitos; 11 e 1,5 rejeitados; testes smoke cobrem limite superior | Corrigir limite inferior; verificar quantidade agregada e mensagem |
| RF-04 Estoque suficiente | produtos.estoque; itens_pedido | criar_pedido diminui estoque | Estoque insuficiente e produto repetido levaram a -2 | Validar demanda agregada e proteger atualização na transação |
| RF-05 Cupom condicionado | cupons(percentual,valor_minimo,validade,utilizado) | calcular_desconto; descontoPrevisto | Vencido, utilizado e abaixo do mínimo recebem desconto | Aplicar todas as condições e definir uso/expiração de forma coerente |
| RF-06 Total válido | pedidos.subtotal/desconto/total; preço histórico em itens | cálculo arredondado; frontend prevê desconto | Pedido normal: subtotal 6, total 6 | Não declarar domínio inteiro protegido; consolidar regra monetária e coerência entre camadas |
| RF-07 Finalização válida | pedidos + itens_pedido | lista com mínimo de 1 item; criar_pedido | Pedido vazio rejeitado; produto inexistente rejeitado sem gravação; quantidades inválidas ainda entram | A operação só é válida quando as outras regras também forem atendidas |
| RF-08 Baixa correta | UPDATE produtos; INSERT pedidos/itens | um commit ao final | Pedido normal diminui estoque; item negativo aumenta estoque | Proteger integridade, repetição e falhas durante gravação; rejeição antes de gravar não prova rollback intermediário |
| RF-09 Estados ordenados | pedidos.status | alterar_status valida nome, não sequência | Novo → Entregue foi aceito | Definir tabela de transições e aplicá-la na operação |
| RQ-01 Mensagens claras | detalhe das respostas/avisos | frontend apresenta mensagens; FastAPI retorna detalhe | Mensagens de rejeição inspecionadas; erro de lista vazia retorna detalhe técnico | Avaliar compreensão por usuário; mensagem automática não garante clareza |
| RQ-02 Tela de 360 px | layout da interface | CSS/frontend | Requisito documentado | Medição e teste visual ainda pendentes |

A fonte contém chaves estrangeiras em itens_pedido, mas a conexão SQLite examinada não as habilita. A inserção direta de item órfão, já executada no checkpoint anterior, confirma que declaração de relacionamento não basta para garantir sua aplicação.

A aplicação mantém frontend/API/banco, mas não foi localizado nesse pacote um dossiê de Análise ou um conjunto completo de modelos conceitual/lógico documentados. Não confundir schema físico em Python com os três níveis de modelagem pedidos.

## Matriz Conecta — requisito e demonstração
Fonte: pages/analise-sistemas/dossie-final-assistencia-tecnica-conecta.html. Há 8 RF, 5 regras críticas e critérios de aceitação explícitos.

| Item | Artefato/documentação | Evidência no protótipo | O que falta na implementação |
|---|---|---|---|
| RF01 Cliente/equipamento | Escopo, critérios e modelo de domínio | Dados demonstrativos do cenário | Cadastro real, validação, vínculo e persistência |
| RF02 Abrir ordem | Requisito, MVP, caso de uso e tela | Mensagem de OS 1043; operação continua com 1042 | Criação real e lista de ordens |
| RF03 Diagnóstico | Critério e processo | Handler muda flags e estado | Diagnóstico armazenado, autor e relação com ordem |
| RF04 Consultar situação | Problema de origem, critério, tela e rastreabilidade | Consulta fixa por OS 1042/nome; estado compartilhado em memória | Consulta real, privacidade e autorização |
| RF05 Orçamento | Processo e critério | Valor fixo e decisão do cenário | Modelo de orçamento, itens/regras e geração real |
| RF06 Reparo/teste/peças | Critério, processo e domínio | Fluxo de reparo simplificado | Teste reprovado, peças, histórico e persistência |
| RF07 Aprovar/recusar | Regra, critério, caso e matriz | Decisão demonstrativa com autor literal/data; bloqueio RN01 | Identidade, autorização, auditoria e operação transacional |
| RF08 Entrega/encerramento | Critério e diagrama de estados | Pronto para retirada; não equivale à entrega persistida | Transições completas e encerramento real |

RN01 e RN02 têm manifestação demonstrativa nos handlers examinados. RN03 (teste reprovado volta a reparo), RN04 (autor/data em mudanças críticas) e RN05 (falha externa não altera estado) precisam de implementação e testes próprios. Autor/data apenas na decisão demonstrativa não satisfaz integralmente RN04.

O dossiê contém pendências explícitas: desempenho, conectividade, orçamento, retenção/backup, fornecedores e resultados reais de usabilidade. Foram preservadas como pendências; não foram inventados resultados.

## Matriz Central — critérios de aceite e persistência
Fonte: downloads/python/central-horizonte/README.md.

| Critério | Responsabilidade | Evidência desta etapa | Limite |
|---|---|---|---|
| Prioridade somente 1,2,3 | regras.validar_prioridade + ler_prioridade | 8 rejeitada, 1 aceita | Não comprova todos os tipos de entrada |
| Patrimônio e descrição obrigatórios | validar_texto + cadastrar | Normalização e descrição vazia | Cadastro de patrimônio vazio não foi repetido/executado neste conjunto |
| Lista estado e prioridade por extenso | relatorios.linha_atendimento | Saída com alta e aberto | Interface de terminal |
| Concluir exige id existente | repositorio.concluir | 999 não encontrado; 1 concluído | Não há ciclo de estados amplo |
| Dados sobrevivem ao fechamento | RepositorioAtendimentos | Reabertura preserva atendimento concluído | Não é teste de backup/recuperação |
| Testes sem digitação | tests/test_regras.py | Quatro testes existentes já aprovados anteriormente | Testes existentes cobrem regras, não todo o fluxo |

Modelo físico: uma tabela atendimento(id,patrimonio,descricao,prioridade,estado). Não existe, nesse pacote inspecionado, esquema relacional de clientes/equipamentos/ordens/peças/pedidos nem uma API Web.

Central Desktop usa atendimentos(id,estudante,categoria,prioridade), não o mesmo schema da Central de terminal. Tem interface gráfica existente, mas não os estados do fluxo da outra versão. Compartilhar nome não comprova compartilhamento de banco, código ou escopo.

## Garimpo de Banco de Dados: loja_integrador
Em pages/bancodedados.html, o integrador loja_integrador possui:
- cliente, categoria, produto, pedido e item_pedido;
- dados iniciais de clientes, produtos, pedidos e itens;
- chave composta para item, relacionamentos e CHECKs de quantidade/preço/estoque;
- preço unitário histórico no item;
- consultas de pedido completo, totais, produtos nunca vendidos e análise por cliente.

O material SQL está no HTML, não apenas em arquivos .sql separados. Foi registrado um manifesto local de hashes da página e do arquivo SQL independente encontrado, sem modificá-los. Hash SHA-256 da página: f46eee0470402bc9462c1179fb5fb3fa75099dcc6a442af1dcc572556cbb5f04.

| Diferença para Cantina | Consequência real |
|---|---|
| MySQL com DECIMAL e AUTO_INCREMENT versus SQLite/REAL | Exige decisão de persistência e representação de valor, não cópia literal |
| loja_integrador possui cliente/categoria | Aproveitamento possível se essas entidades forem necessárias no escopo aprovado |
| Estados ABERTO/PAGO/CANCELADO versus Novo/Confirmado/Em preparação/Pronto/Entregue | Pagamento e preparação são dimensões distintas; mapear estados não é renomear texto |
| Chave composta impede produto repetido no mesmo pedido | Pode ajudar consolidação de itens, mas regra de quantidade total precisa ser definida |
| CHECK de estoque não negativo | Proteção útil; não substitui regra, transação e tratamento de erro |
| Total derivado dos itens; Cantina armazena subtotal/desconto/total | Explicitar histórico e consistência; não transportar duas fontes sem justificativa |
| Cantina tem cupom; integrador não | Condições e uso do cupom precisam de modelo/regras próprios |

O SQL MySQL foi inspecionado, não executado nesta etapa. comercio, loja_integrador e seus dados originais continuam preservados. Uma adaptação futura será adicional e identificada, sem substituir esse acervo.

## Comparação do trabalho restante
Estimativas abaixo são de escopo, sem horas ou percentuais inventados.

| Candidato | Pode ser reaproveitado diretamente como referência | Necessita construção/adaptação relevante |
|---|---|---|
| Cantina | Lógica guiada existente, requisitos, frontend/API/SQLite, documentos de QTS, testes, E2E/workflow | Análise do domínio, modelos conceitual/lógico, regras corretas, integridade, evolução didática Python, tratamento das interfaces |
| Conecta | Análise/dossiê, processos, critérios, modelos, protótipo guiado | Banco físico, backend/API, interface operando dados reais, testes de implementação e adaptação do restante do percurso |
| Central terminal + Desktop | Separação de responsabilidades, regras/persistência, CLI/GUI e testes próprios | Unificação do domínio/dados das variantes, modelo relacional ampliado, análise, API/Web, regras e QTS do mesmo sistema |
| Café Aurora | Percurso Web, frontend/assets e backend PHP de mensagens já analisados | Fluxo de negócio maior e comparação executável PHP ainda bloqueada |
| Água & Gás do Bairro | Sequência de API e testes em 45 aulas | Consolidar aplicação verificável e adaptar ao domínio; não reutilizar Santa Filomena |

A hipótese Cantina ganhou força com loja_integrador porque há proximidade concreta de entidades e operações. Isso reduz parte do trabalho de modelagem, mas não torna os bancos equivalentes nem elimina a análise.

## Crítica MbB da hipótese
Especialista: priorizar um fluxo de pedido correto, persistente e testável antes de adicionar autenticação, mobile e recursos extras.
Professor: não entregar a aplicação completa no início. Fazer cada conceito responder a uma necessidade e cada disciplina reutilizar a evidência anterior.
Iniciante: permitir experimentar protótipo e regras antes de instalar servidor/banco; depois explicar por que a simulação deixou de bastar.
Autocrítica: escolher só pelo backend existente subestimaria a análise. Escolher só pela análise pronta subestimaria o custo de construir e integrar o software. A decisão deve ponderar a cadeia inteira.
Transferência: exercícios curtos preservam generalização; não precisam gerar sistemas concorrentes.

## Estado e próximo passo
Concluído nesta etapa: rastreabilidade dos 9 RF e 2 RQ da Cantina, confronto dos 8 RF/5 RN da Conecta, confronto dos 6 critérios da Central, 7 sondagens novas da Central, 8 cenários/observações dos handlers Conecta, 3 testes Desktop, diferenças concretas do banco loja_integrador.

Falta antes da escolha definitiva: classificação e confronto pedagógico dos tópicos relevantes, revisão das dependências do percurso e consolidação da recomendação com custos de adaptação. Não foi criado placar numérico artificial nem tratado requisito não testado como aprovado.

Próxima etapa: transformar este confronto em uma proposta concreta de percurso e fatias de implementação, classificando o conteúdo núcleo em manter/adaptar/extrair/mover. Apresentar a escolha de base e as mudanças estruturais antes de executá-las, conforme o pedido original.

Bloqueios continuam restritos: execução PHP e prévia hospedada. Nenhum deles impede a próxima análise. Não há nova autorização necessária para essa análise.
