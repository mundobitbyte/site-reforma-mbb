# Reforma MbB — proposta de piloto interdisciplinar para decisão
Data local: 6 de outubro de 2026.
Base da proposta: Checkpoints 01–06; execução e confronto mais recentes no Checkpoint 06.

## Decisão proposta
Adotar **Cantina Horizonte como sistema-base do piloto interdisciplinar**, reaproveitando seu núcleo Python/FastAPI/SQLite e frontend existentes.

É uma recomendação fundamentada para o piloto, não declaração de que todos os tópicos atuais cabem nele nem de que a aplicação esteja pronta. A varredura tópico a tópico continua obrigatória e pode revelar necessidade de revisão. Não foi executada essa escolha.

O pedido original determina: “Não faça alterações estruturais importantes antes de me mostrar essa primeira avaliação e obter minha aprovação” e exige apresentar recomendação antes de iniciar a reforma propriamente dita. A aprovação solicitada agora é da escolha concreta abaixo; as aprovações anteriores permitiram a auditoria e a preparação.

## Por que Cantina
A decisão pondera a cadeia inteira, sem um placar artificial:
- Programação já trabalha com a Cantina como caso crescente.
- QTS já dispõe de requisitos, documentação de teste/defeito/parecer, frontend/API/banco, testes Python e artefatos E2E/CI.
- BD contém loja_integrador, com entidades de cliente/produto/pedido/item, registros e restrições próximos ao fluxo de pedidos.
- Python oferece progressão e separação de responsabilidades reaproveitáveis; os exemplos precisam de adaptação real para o domínio.
- Análise fornece uma estrutura forte de problema, processos, requisitos, protótipo e rastreabilidade, que pode ser adaptada à Cantina.

Conecta pouparia mais análise, porém exigiria construir a cadeia persistente de aplicação/API/testes. Central pouparia organização Python e possui CLI/GUI distintas, mas exigiria ampliar e unificar domínio e dados antes de chegar ao mesmo fluxo Web/API. Café tem material Web, mas seu backend de mensagens não equivale ao núcleo de pedidos/estoque. Água & Gás oferece conteúdos de API, sem aplicação consolidada verificada nesta auditoria.

Não há estimativa confiável de horas ou percentual de reaproveitamento; inventá-los enfraqueceria a decisão.

## O piloto começa pequeno
Problema proposto, a validar no contexto didático: registrar pedidos da cantina, impedir vendas incompatíveis com estoque e acompanhar a preparação sem perder a referência do pedido.

Núcleo inicial:
1. Consultar produtos, preço e estoque.
2. Montar e registrar pedido com itens e quantidades válidos.
3. Calcular subtotal, desconto válido e total.
4. Atualizar estoque de forma consistente.
5. Consultar pedido e avançar pelos estados permitidos.

Cupom já pertence aos requisitos existentes; não precisa de novo módulo independente. Categorias/clientes só entram quando o escopo e os requisitos justificarem. Não acrescentar cadastro de aluno ou dados pessoais automaticamente.

Papéis de cliente e atendente são uma hipótese para a análise, não regras já implementadas. Autenticação, pagamentos, fornecedores, entrega externa, receitas, contabilidade, multiunidade e mobile não serão acrescentados na primeira fatia.

A v1 defeituosa será preservada como referência de QTS. A versão evolutiva deve ficar identificada e separada no laboratório, usando dados fictícios e banco próprio.

## Percurso proposto e artefatos compartilhados
| Etapa | Necessidade e trabalho | Entrega que a próxima etapa utiliza | Reaproveitamento principal |
|---|---|---|---|
| 1. Problema e escopo | Entender por que pedidos e estoque divergem e o que o piloto resolve | Contexto, atores, escopo e perguntas em aberto | Esqueleto Análise/Conecta |
| 2. Requisitos e regras | Descrever quantidade, estoque, cupom, total e estados | Lista única de requisitos com critérios de aceitação | Requisitos-base Cantina |
| 3. Processo e protótipo | Mostrar pedido e preparação; experimentar bloqueios e mensagens | Fluxos e telas ligados aos requisitos | Método do protótipo Conecta; interface Cantina |
| 4. Modelagem dos dados | Identificar o que precisa permanecer após fechar o sistema | Modelos conceitual, lógico e físico do mesmo domínio | loja_integrador + schema Cantina, com diferenças justificadas |
| 5. Lógica em Python | Traduzir regras para funções e exemplos executáveis pequenos | Regras e casos verificáveis reutilizados pelo backend | Programação/Cantina + progressão Python |
| 6. Persistência e API | Fazer o pedido sobreviver e permitir acesso à mesma informação | Banco/API operando os mesmos requisitos | Cantina executável; fundamentos FastAPI e repositório Python |
| 7. Interface Web | Usar a API do mesmo sistema, sem banco paralelo | Fluxo completo de usuário com respostas coerentes | Frontend Cantina; estrutura pedagógica Web |
| 8. Integração e qualidade | Testar regras, banco, API e fluxo; registrar e corrigir defeitos | Evidências e regressão do produto | QTS/Cantina + modelos de teste/parecer |
| 9. Entrega e evolução | Reunir documentação, limites e instruções de execução | Versão utilizável e parecer de entrega | Dossiê Análise, documentação e testes |

Git acompanha a primeira entrega em diante. Qualidade começa nos critérios de aceitação, antes do código. IA entra em leitura, revisão, depuração e documentação com conferência do que produziu.

Mobile pode se tornar uma interface do mesmo sistema numa etapa posterior. Isso não autoriza reaproveitar Santa Filomena nem os aplicativos práticos de App Inventor.

## Classificação inicial do núcleo
Esta classificação é proposta no nível dos artefatos; não finge substituir a varredura de cada tópico.

| Material atual | Tratamento proposto | Justificativa e cuidado |
|---|---|---|
| Estrutura de Análise, etapas 0–14 | Manter método; adaptar domínio | Preservar a ponte problema → evidência; refazer processos/regras/modelos para Cantina |
| Protótipo Conecta e dossiê | Extrair estrutura como referência | Não renomear OS como pedido nem copiar estado demonstrativo como implementação |
| Programação guiada com Cantina | Manter e alinhar | Ligação direta com o domínio escolhido; preservar conceitos e progressão |
| Python e Central | Extrair/adaptar progressão e responsabilidades | Construir exemplos do mesmo sistema; não transportar tabelas de atendimento mecanicamente |
| Cantina v1 e documentos QTS | Manter como referência identificada | Falhas demonstradas têm valor didático; evolução correta em versão própria |
| BD comercio e loja_integrador | Preservar integralmente; extrair fundamentos | Adaptação adicional com dados do domínio; scripts e registros originais continuam válidos |
| Café Aurora Web | Extrair estrutura pedagógica e componentes adequados | Não criar um segundo projeto-fio-condutor; não transplantar mensagens como pedido |
| FastAPI Água & Gás | Extrair conceitos necessários | Usar quando o mesmo sistema exigir API, transação, autenticação etc. |
| Git/GitHub | Adaptar contexto dos exercícios | Histórico real dos artefatos do piloto |
| IA e Programação | Extrair práticas críticas | Pedir mudanças pequenas e verificar resultados |
| VisuAlg | Manter ponte proporcional e transferência curta | Não duplicar integralmente a implementação em outra linguagem |
| Academia, Santa Filomena e apps de App Inventor | Permanecer fora | Restrições expressas do projeto |

Nenhuma retirada do laboratório ou acervo é proposta nesta decisão. A escolha de conteúdo para a interface do produto será apresentada depois da classificação detalhada.

## Primeira fatia concreta após aprovação
Antes de reescrever módulos ou telas, produzir no laboratório um pacote pequeno de planejamento:
- contexto e escopo do piloto;
- requisitos-base com origem, pendências e critérios;
- matriz requisito → processo/tela → entidade/operação → teste;
- modelo conceitual e lógico proposto;
- comparação do modelo físico proposto com Cantina e loja_integrador;
- roteiro das fatias posteriores e evidências de conclusão.

Esses documentos devem permitir revisar o sistema antes da mudança curricular.

A primeira fatia executável posterior deve registrar um pedido com regras de quantidade/estoque e persistência corretas, em versão evolutiva isolada. Cupom e estados entram em fatias seguintes, sem alterar a v1 didática.

Critérios dessa primeira fatia executável:
- rejeitar zero, negativo, fração, excesso e demanda agregada sem estoque;
- preservar pedido/estoque quando a operação é recusada ou falha;
- registrar pedido/itens coerentes e preço histórico;
- aplicar relacionamentos do banco;
- consultar o registro após reabrir;
- obter resultado coerente pela API e pela interface.

A tecnologia inicial proposta reaproveita Python/FastAPI/SQLite. A equivalência com o material MySQL deve ser explicitada; não se decide migração nem substituição do acervo MySQL nesta aprovação.

## Custo, risco e limites
Esforço relativamente menor: requisitos/testes/fluxo inicial Cantina e reaproveitamento de conceitos de pedidos de BD.
Esforço médio: documentação de Análise, modelos, regras corretas, separação de responsabilidades e contextualização dos exemplos.
Esforço maior: reescrita transversal de todos os tópicos, comprovação de acessibilidade/usabilidade, autenticação e interfaces adicionais.

Principal risco pedagógico: forçar conteúdos a caber no pedido. Resposta: classificar tópico a tópico, preservar fundamento e usar transferência curta quando necessária.
Principal risco técnico: aproveitar a v1 como se fosse correta. Resposta: separar referência defeituosa e evolução, com regras e testes rastreáveis.
Principal risco de processo: grande reforma de uma vez. Resposta: fatias revisáveis, testes proporcionais e checkpoints.

## Prévia e restrições
A hospedagem continua sem solução compatível confirmada: Pages indisponível para o repositório privado no plano observado; Sites provisionaria outro repositório, fora da restrição de escrita exclusiva. Não haverá mudança de plano, exposição pública ou criação de outro repositório embutida nesta aprovação.

Isso não bloqueia o pacote de planejamento ou a construção e os testes locais do piloto. Ajustes de caminho base dependem da hospedagem escolhida.

## Aprovação necessária
Decisão concreta: **usar Cantina Horizonte como base do piloto interdisciplinar e iniciar seu pacote de planejamento no laboratório**, preservando o acervo, os SQL e a v1 didática.

Esta aprovação não inclui publicação, mudança de privacidade, outro repositório, alterações no oficial, exclusões relevantes ou expansão de escopo.
