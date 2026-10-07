# Programação/Python da Cantina — revisão MbB

## Escopo e decisão
Adaptação adicional no laboratório experimental, sem alteração do acervo original de Programação, Python ou VisuAlg. O percurso usa a mesma Cantina, seus requisitos RF-01 a RF-09, modelo e serviço. Os exemplos de Central Horizonte continuam como referência de organização; o aluno não precisa construir um segundo sistema integrador neste percurso.

Foram criadas 15 etapas (0–14), seção de exercícios, ponte com VisuAlg e índice: 18 páginas HTML. A matriz `laboratorio/percurso-mbb/matriz-programacao.json` relaciona necessidade, conceitos, pré-requisitos, origens, prática e evidência.

## Progressão verificada

| Etapa | Necessidade e conceito | Evidência reaproveitada |
|---|---|---|
| 0 | Traduzir o pedido em entrada/cálculo/saída; ambiente | PG00, E01/E05/E07 |
| 1 | Dar nomes aos valores e executar sequência | PG01, BD01/RF-06 |
| 2 | Receber texto, converter e apresentar centavos | PG02, BD01/RF-06 |
| 3 | Decidir por faixa e saldo antes de aceitar | PG03, E07/RF-03/RF-04 |
| 4 | Permitir nova tentativa com condição de saída | PG04, RF-03 |
| 5 | Contar, acumular e consolidar linhas de Água | PG05, RF-02/RF-03 |
| 6 | Representar produtos e itens em coleções | PG06, BD02/BD03/BD05 |
| 7 | Separar cálculo e apresentação com função | PG07, RF-06 |
| 8 | Tratar conversão prevista e validar tipo/faixa | PG08, RQ-01 |
| 9 | Compartilhar a regra de exercício em módulo | PG09, E09/E14 |
| 10 | Fazer uma simulação sobreviver com JSON | PG10, BD06 |
| 11 | Relacionar dados e comportamento em objeto | PG11, E09/BD09 |
| 12 | Operar o serviço persistente pelo terminal | PG12, BD07/BD09/RF-01 a RF-09 |
| 13 | Transformar casos e fronteiras em testes | PG13, E12/E13/QTS |
| 14 | Defender requisito → modelo → operação → teste | PG14, E15/BD09 |

## O que foi reaproveitado e preservado
O inventário anterior de 40 aulas Python foi reutilizado, sem refazer a auditoria. A matriz `matriz-python-acervo.json` classifica todos os 40 IDs reais: 27 temas têm ligação com as etapas da Cantina; 13 continuam como aprofundamento disponível no acervo. Ligação não significa reprodução completa de todas as aulas: preserva-se o conteúdo completo para consulta.

Programação já possuía a Cantina como fio condutor, pseudocódigo, VisuAlg e passagem para Python. Essa adaptação aproveita tal direção e faz o código chegar ao serviço persistente já implementado. Composição, herança, comprehensions, decorators, generators e concorrência avançada não se tornam requisitos artificiais para uma primeira venda.

Os três arquivos VisuAlg adicionais representam sequência, decisão e repetição com Água a 300 centavos e a mesma faixa 1–10. Foram revisados por leitura/teste de mesa; não executados no VisuAlg. A ponte compara valor/fluxo, sem exigir textos de saída idênticos ou apresentar uma tela inventada.

## Revisão circular e espiral
Especialista: acompanhar tipo exato, preço histórico, validação por linha/consolidada, transação e divisão de responsabilidades.
Professor: introduzir o recurso por necessidade, manter pré-requisito explícito e usar previsão/execução/comparação.
Iniciante: saber qual arquivo executar, de onde vem a entrada, qual saída esperar e o que não foi implementado naquele recorte.

As lacunas dos primeiros exemplos são descritas, sem anunciá-los como pedidos completos: entrada em letras reaparece na etapa 8; acumulação que não valida cada linha chega ao serviço da etapa 12; JSON de simulação não substitui a venda transacional. A revisão retorna a PG02/PG04/PG05 com recursos novos e reteste.

Treze arquivos Python formam exemplos graduais, incluindo `regras.py` e três métodos de teste nativos. São recortes didáticos, não uma segunda aplicação de vendas. Não devem ser concatenados. A implementação persistente continua na classe Cantina.

## Interface de terminal
`laboratorio/cantina-evolutiva/terminal.py` acrescenta preparação, cardápio, registro, consulta e avanço. Usa os métodos do serviço existente, sem reimplementar regra de cupom, transação, estoque ou estados.

Banco didático: `dados/programacao/cantina.sqlite3`, separado dos bancos da interface Web e da prática de BD, mas com o mesmo schema/migrações. Preparação reserva um arquivo novo e recusa existente; não há reset. O CLI não recebe caminho de banco. Cada registro aceito cria outra venda fictícia. A consulta usa o ID devolvido; 1 é exemplo válido apenas para primeira venda no banco novo. Avanço exige o estado que foi consultado.

A versão atual do serviço não usa chave de idempotência para registro de venda; isso permanece como limite documentado. O terminal herda as regras existentes, não fecha os testes visuais ou o uso em produção.

## Evidências executadas
- 13 novos casos do terminal aprovados.
- Suíte completa atual: 87 casos aprovados (63 aplicação/API + 11 BD + 13 terminal), com um aviso de depreciação emitido pela dependência do cliente de teste; sem falha.
- 20 execuções de verificação dos exemplos: entradas conhecidas, fronteiras, correção de letras/faixa, ramo de saldo, JSON repetido sem sobrescrita, unittest e importação sem execução automática.
- 10 comandos reais do terminal com o banco didático: primeira venda de 2 Águas total 600, consulta e Confirmado; consulta antiga recusada; 5 Sucos com cupom total 2700; nova preparação recusada; dados preservados após reabertura.
- 50 páginas HTML verificadas; 1474 referências locais, 68 botões de cópia e 29 arquivos canônicos de código exibido (13 SQL + 13 Python + 3 VisuAlg), sem erros estruturais.
- IDs da matriz Python conferidos contra os 40 IDs das trilhas existentes. Arquivos e recursos originais, serviço/API e SQL protegidos sem alteração nesta fatia.
- Um planejamento já presente no repositório foi recuperado para a cópia local, por estar ausente nela. O vínculo existente era válido remotamente e não foi substituído nem refeito.

Não executados: VisuAlg real, navegador, largura de 360 px, depurador interativo e sessões com estudantes. A verificação de pré-requisitos por leitura e sintaxe não equivale à comprovação pedagógica com uma pessoa.

## Documentação primária consultada
- Controle de fluxo e funções: https://docs.python.org/3/tutorial/controlflow.html
- Coleções: https://docs.python.org/3/tutorial/datastructures.html
- Exceções: https://docs.python.org/3/tutorial/errors.html
- Entrada/saída e JSON: https://docs.python.org/3/tutorial/inputoutput.html
- Módulos: https://docs.python.org/3/tutorial/modules.html
- Classes: https://docs.python.org/3/tutorial/classes.html
- sqlite3: https://docs.python.org/3/library/sqlite3.html
- unittest: https://docs.python.org/3/library/unittest.html

