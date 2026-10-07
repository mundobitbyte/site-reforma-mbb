# Reforma MbB — Checkpoint 05 e Mapa Mestre inicial
Data local: 6 de outubro de 2026, America/Sao_Paulo.
Referência: snapshot oficial 4f8a39322afff1b44df039bf6247c5f85135f973 copiado para o laboratório. Não foram sincronizadas mudanças concorrentes posteriores.

## O que avançou
Continuação das pendências do Checkpoint 04, sem repetir cópia, isolamento inicial ou testes já concluídos. Nenhuma escrita no oficial. Nesta etapa, as alterações persistentes no GitHub são exclusivamente documentação em mundobitbyte/site-reforma-mbb.

Foram inventariadas 45 páginas HTML do núcleo selecionado: 18 de Análise, 18 de QTS, 2 de Programação Web e páginas de BD, Programação, Python, Git, VisuAlg e IA aplicada. O parser registrou 1.745 cabeçalhos, 185 tabelas, 25 imagens e 422 blocos pre. Esses números são inventário de marcação; não significam que todos os tópicos tenham recebido revisão pedagógica ou técnica integral.

Também foram carregados em contexto de dados os oito arquivos de trilha Python: 40 aulas, distribuídas em dez arcos. Isso recupera conteúdo gerado dinamicamente que não aparece no HTML inicial. FastAPI já foi inventariado no checkpoint anterior: seis blocos e 45 aulas.

## Auditoria dos carregadores dinâmicos
A busca percorreu 714 contextos página/script e encontrou 271 referências literais candidatas a JS/CSS. A verificação automática inicial gerou duas classes de falsos positivos, revisadas no código:
- mbb-busca-global.js resolve visitas-diretas.js em relação ao próprio script por new URL; não em relação à página.
- a string /mbb-visualizador-site.js é usada para identificar um script existente; não é uma solicitação desse caminho.

As demais referências literais de JS/CSS alcançadas por essa busca tinham arquivos correspondentes. Isso não substitui teste de navegador nem cobre todas as imagens, exemplos de código, URLs calculadas e ramificações.

Os carregadores compartilhados examinados utilizam recursos da própria origem ou caminhos relativos. O Firebase permanece neutralizado como registrado no Checkpoint 03. Nenhum destino adicional de escrita na produção foi confirmado nessa inspeção dirigida; isso não é certificação global de isolamento.

Problema de portabilidade confirmado no código: mbb-visualizador-site.js usa a origem sem o prefixo do projeto para carregar /css/mbb-visualizador.css e /js/mbb-visualizador.js. Outros módulos também injetam /js/mbb-visualizador-site.js. Em uma hospedagem sob /site-reforma-mbb/, esses caminhos apontam para fora da pasta do projeto. Meu MbB visitas-diretas.js usa location.pathname como chave de catálogo, sem retirar um prefixo de projeto.

Recomendação: definir primeiro a URL e o caminho base da hospedagem; depois adaptar os carregadores compartilhados e testar tanto páginas rasas quanto profundas. Não substituir URLs em massa. Não foi alterado código nesta etapa.

## Novas sondagens de integridade da Cantina
Quatro cenários novos, exclusivamente em SQLite temporário. Não foram repetidas as 11 sondagens anteriores.

| Cenário | Evidência executada | Relação com requisito |
|---|---|---|
| Lista de itens vazia | HTTP 422; nenhum pedido; estoque preservado | Proteção existente para RF-07 |
| Dois itens do mesmo produto, 5 + 5, estoque 8 | HTTP 201; estoque -2 | Falha RF-04/RF-08; quantidade deve considerar o total por produto |
| Segundo item inexistente após primeiro válido | HTTP 404; nenhum pedido; estoque preservado | Evidência favorável para essa rejeição antes de gravar; não prova rollback em falha durante gravação |
| Inserção de item órfão pela conexão do aplicativo | Inserção aceita; PRAGMA foreign_keys = 0; foreign_key_check identifica violações | Integridade referencial declarada no schema não está sendo aplicada nessa conexão |

Os requisitos-base da Cantina confirmam quantidade 1–10, estoque suficiente, cupom condicionado a mínimo/validade/uso, total não negativo e sequência de estados. As falhas anteriores e novas foram confrontadas com esse documento, não com regras inventadas pela auditoria.

Há um teste E2E existente para dois salgados e finalização, além do workflow .github/workflows/qts-cantina-horizonte.yml. Ambos foram inspecionados, mas não executados nesta etapa. O Actions do laboratório permanece desativado conforme inspeção anterior. Nenhuma conclusão de CI verde ou cobertura integral foi feita.

## Mapa Mestre de Aproveitamento — versão inicial
Custos são estimativas qualitativas de adaptação, não prazos. Não há remoção nem mudança de base implementada.

| Origem e evidência | Ouro encontrado | Reaproveitamento e destino | Adaptação necessária | Custo/risco |
|---|---|---|---|---|
| Análise: 15 etapas numeradas, protótipo e páginas de apoio | Problema → atores → processos → requisitos → protótipo → validação; caderno de evidências | Esqueleto de análise do sistema único | Redesenhar atores, fluxos, regras e protótipo para o domínio vencedor | Médio; trocar apenas nomes produziria incoerência |
| Análise etapa 12 | Tabela origem/requisito/regra/caso/tela/teste | Rastreabilidade transversal até BD, implementação e QTS | Acrescentar entidade, operação de API e evidência executada | Baixo no modelo; médio ao preencher com fatos |
| Protótipo Conecta | Guia de sete passos, perspectivas de atendente/técnico/cliente, bloqueio por aprovação | Método para experimentar regras e estados antes do backend | Criar fluxo equivalente real do domínio escolhido | Médio; o estado atual é uma simulação em memória, não backend |
| BD: banco comercio no HTML | Script físico, relacionamentos, registros e práticas SQL existentes | Acervo protegido e fundamentos para construir o banco do sistema único | Criar modelagem própria e justificar diferenças SQLite/MySQL; conservar comandos originais | Médio/alto; não transportar SQL por troca de nomes |
| Programação: roteiro e caso Cantina | Necessidade antes do conceito; SABER/FAZER/RESPONDER; cálculos e decisões | Lógica do mesmo fluxo de pedidos se Cantina for escolhida | Relacionar cada algoritmo com uma regra verificável | Baixo/médio para Cantina; maior em outro domínio |
| Python: 40 aulas em dez arcos; Central Horizonte | Progressão, persistência parametrizada, separação de responsabilidades, testes | Trilha de implementação Python do sistema principal | Adaptar atendimentos para entidades e operações do domínio vencedor | Médio; preservar o problema que motiva cada conceito |
| Central: repositorio.py | Repositório separado da interface e operações parametrizadas | Responsabilidade de persistência e organização do código | Ampliar de atendimento para esquema relacional do sistema | Médio; não é solução pronta de pedidos |
| Web I/II: Café Aurora e pacotes | Frontend, imagens, percurso incremental e backend PHP de mensagens | Estrutura de apresentação e integração da interface com servidor | Reescrever operações específicas; decidir linguagem do backend | Médio/alto; mensagens não equivalem a pedidos/estoque |
| QTS: 17 etapas numeradas | Requisitos reais, fronteiras, riscos, revisão estática, documentação de defeitos | Testar os mesmos artefatos produzidos desde Análise | Ligar RF a modelo, API, implementação e teste | Baixo/médio para Cantina |
| Cantina executável | Frontend + FastAPI + SQLite, requisitos, modelos de plano/caso/defeito/parecer, roteiro Bruno | Possível núcleo inicial de implementação e qualidade | Corrigir em versão evolutiva as falhas demonstradas e ampliar modelagem | Médio; preservar v1 defeituosa como referência didática |
| Cantina E2E/workflow | Um fluxo automatizado e pipeline configurado | Regressão e histórico de qualidade | Ampliar cobertura de regras; executar em ambiente habilitado e isolado | Médio; arquivo existente não prova execução bem-sucedida |
| FastAPI Água & Gás do Bairro | 45 aulas, persistência, autenticação, transações, testes e CORS | Conceitos de API quando o sistema passar a precisar deles | Produzir uma aplicação consolidada correspondente ao domínio vencedor | Médio/alto; exemplos fragmentados não são app completo verificado |
| Git: interface canônica e checkpoint de comandos | Histórico, copiar comandos e percurso existente | Versionar os artefatos reais do único sistema | Contextualizar commits/branches/revisões no novo percurso | Baixo/médio; não requer mudar tecnologia |
| IA e Programação | Ler código existente, pedir mudança pequena, conferir resposta e testar | IA como parceira crítica em implementação/revisão | Usar o repositório e requisitos do sistema único | Baixo/médio; verificação humana continua indispensável |
| VisuAlg | Ponte para raciocínio antes da sintaxe da implementação | Exercícios pequenos ligados às regras e transferência curta | Selecionar conceitos necessários sem criar outro fio condutor | Médio; seleção tópico a tópico ainda pendente |

Fora da avaliação prática: Santa Filomena, aplicativos de App Inventor e Academia. Teoria de App Inventor não foi rejeitada, mas não foi incorporada ao mapa nesta etapa.

## Direção provisória, sem escolher a base
A Cantina reúne a evidência executável mais direta até aqui e liga naturalmente Programação e QTS. Essa vantagem aumenta quando considerados seus requisitos e documentos. As falhas da v1 são úteis para a aprendizagem, mas impedem tratá-la como produto pronto.

Conecta continua forte em análise e protótipo; Central, em organização Python; Café, em percurso Web e recursos visuais; Água & Gás, em aprofundamento da API. Reaproveitar suas estruturas exige adaptação de domínio, não fusão mecânica de aplicativos.

Uma hipótese de percurso, para confronto com os demais tópicos, é: problema e escopo → requisitos/testes de aceitação → protótipo → dados conceituais/lógicos → lógica em Python → banco físico → API e interface Web → integração e testes → documentação e entrega. Git começa no primeiro artefato. QTS começa nos requisitos; não fica reservado ao final. Autenticação e mobile só entram após justificativa e núcleo estável.

Essa hipótese ainda não autoriza reescrita curricular nem estabelece a Cantina como vencedora. O pedido original exige confrontar as conclusões com todos os tópicos relevantes antes de decisão global.

## Pendências e próximo passo
Concluído nesta etapa: inventário dirigido do núcleo, inspeção dirigida de carregadores, quatro sondagens de integridade e Mapa Mestre inicial.
Pendente: classificação pedagógica tópico a tópico, confronto dos artefatos de modelagem dos candidatos, execução PHP/E2E e prévia publicada.
Bloqueios conhecidos: PHP ausente no ambiente; hospedagem privada compatível com escrita exclusiva no repositório do laboratório ainda não definida.
Próxima etapa: rastrear os principais requisitos da Cantina pelos artefatos existentes e medir o que falta em Análise e BD; confrontar a mesma cadeia com Conecta e Central antes de apresentar recomendação final.
