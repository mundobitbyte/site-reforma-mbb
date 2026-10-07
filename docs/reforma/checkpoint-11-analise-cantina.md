# Reforma Mundo bit Byte — checkpoint 11

7 de outubro de 2026, America/Sao_Paulo.
Continuação do checkpoint 10; todas as escritas externas somente em
`mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`.

## Avanço concreto

Foi criada uma versão adicional da Análise da Cantina Horizonte, com as **15 etapas**
classificadas e adaptadas, de 0 a 14. Há 19 páginas HTML: início do percurso, índice
específico, etapas, dossiê integrado e rascunho de baixa fidelidade.
A navegação mantém a ordem, os grupos e a passagem anterior/próxima da estrutura
pedagógica original, usando seu CSS preservado. Também há caderno de evidências,
matriz de adaptação e comandos de execução local com botão Copiar.

A adaptação redesenha o domínio; não troca Conecta por Cantina de maneira automática.
Não acrescenta orçamento de reparo, equipamento, peça ou cadastro de cliente ao núcleo.
As páginas originais ficam disponíveis como acervo comparativo, sem edição.

## Etapas restantes

Continuam faltando **5 macroetapas**:

| Macroetapa | Situação |
|---|---|
| Pedido persistente | Servidor testado; verificação da interface pendente |
| Cupom | Servidor testado; verificação da interface pendente |
| Estados | Servidor testado; verificação da interface pendente |
| Percurso curricular | Análise: 15 etapas adaptadas em versão adicional. Demais disciplinas ainda pendentes |
| Revisão e entrega | Visual, acessibilidade em uso, consolidação e prévia pendentes |

A contagem não aumentou por criar novos arquivos e não diminuiu sem cumprir o
critério de passagem. Não há aprovação pendente para o trabalho autorizado.

## Reutilização no modo MbB

Cada etapa mantém problema → necessidade → conceito → prática → evidência.
O caderno produz E01 a E15 e identifica quem reutiliza cada entrega.
O dossiê liga os RF da fonte ao modelo, serviço/API e teste reais.
São distinguidos levantamento fictício, regra documentada, teste do servidor
executado e validação de usabilidade ainda ausente.

A revisão por especialista, professor e iniciante é detalhada em
`docs/reforma/adaptacao-analise-cantina.md`; a matriz por etapa está em
`laboratorio/percurso-mbb/matriz-analise.json`.

Decisões coerentes com o que foi implementado:

- Venda salva baixa estoque uma vez; Confirmado é fase seguinte do atendimento.
- Quantidade consolidada por produto; dinheiro em centavos; preço histórico no item.
- Cupom de uso único por código neste banco; não se inventa identidade de aluno.
- Papel Cliente não cria tabela/conta automaticamente; autenticação está fora.
- Histórico identifica mudanças e data; não é auditoria de autoria completa.
- Rascunho estático não se apresenta como aplicação ou simulação de venda.
- O contrato atual não tem idempotência de venda: resposta perdida e repetição de POST
  são risco reconhecido para analisar antes de ampliar uso, sem funcionalidade prometida.

## Verificação executada nesta fatia

Inspeção estrutural das 19 páginas: idioma pt-BR, um h1 por página, IDs sem duplicatas,
rotas relativas, âncoras e entregas das 15 etapas. **513 referências locais verificadas,
zero erros**. A página de planejamento já existente na branch foi considerada ao
conferir um link cujo arquivo não integra o checkout local histórico.
Os **11 nomes de testes** citados no dossiê foram encontrados nas funções reais.
JavaScript adicional passou em `node --check`.

As regras/código/SQL da aplicação não mudaram nesta etapa. Os 63 casos aprovados do
checkpoint 10 foram referenciados, sem repetir a suíte só para escrever conteúdo.
Menu, cópia, foco e layout ainda não foram exercitados num navegador real.
Inspeção de atributo ou sintaxe não comprova usabilidade.

## Preservação

Comparação local sem diferenças em `pages/analise-sistemas`, CSS/JS originais de Análise,
`pages/bancodedados.html`, SQL de segurança e `qts/cantina-horizonte-v1`.
O README da aplicação recebe apenas o link para o percurso adicional.
Não houve escrita no repositório oficial, publicação, mudança de permissão,
uso de Firebase ou alteração dos comandos SQL protegidos.

## Bloqueio e próxima sequência

O bloqueio visual já registrado permanece: navegador não alcançou o serviço em
`terminal.local:4173`; o mecanismo supervisionado disponível exige dev script
compatível ou diretório estático e não atende ao serviço Python integrado atual.
Nenhuma tentativa idêntica foi repetida nesta continuação. A falta não é aprovação
pendente do Professor Ronaldo.

A próxima fatia é Banco de Dados: aproveitar o inventário dos capítulos e o material
protegido de comercio/loja_integrador, e construir o percurso adicional da Cantina
sobre os modelos/dados/SQL já implementados. Não substituir o banco original nem
adaptar todos os comandos MySQL por uma troca de nomes. Depois seguir a mesma cadeia
em Programação/Python, Web/API, QTS e Git.
