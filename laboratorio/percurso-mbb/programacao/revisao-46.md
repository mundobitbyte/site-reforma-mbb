# Revisão 46 — Programação da Cantina Horizonte

Escopo: etapas 0–14, caderno e apoios de Programação, no repositório experimental. Método MbB: situação, necessidade, conceito, prática e evidência; revisão técnica/pedagógica e execução dos exemplos. Nenhuma sessão com aluno iniciante foi simulada.

## Problemas confirmados e corrigidos

- Etapa 0: obter/extrair arquivos, localizar exemplos, abrir CMD/terminal, conferir Python e executar o primeiro programa. Acervo/dossiê deixam de parecer pré-requisitos integrais.
- Etapas 3–6: apoio recolhido com tabela de decisão, tentativas/saída, evolução do acumulador, casos de linhas válidas com soma inválida e soma válida com linhas inválidas; get() explicado em duas ocorrências do mesmo produto.
- Etapa 8: recuperação da entrada primeiro; explicação de identidade de tipos e curto-circuito fica em apoio recolhido. Contrato e script preservados.
- Etapa 9: mapa dos arquivos e caminho da importação, sem instalar um falso pacote regras.
- Etapa 10: bug didático confirmado. A leitura era feita só após criar o JSON; na reexecução não era demonstrada. Agora o arquivo é lido também quando já existe, mantendo modo x e recusando sobrescrita. Página e bloco de cópia sincronizados.
- Etapa 12: preparação local com venv e dependência tzdata, identificação da pasta, ID real retornado, consulta em outro processo, avanço e recusa por estado antigo. Usa serviço/schema existentes, sem nova implementação.
- Etapa 13: primeiro teste com assert, falha proposital numa cópia, depois unittest; preparação de pytest em apoio separado usando requirements.txt existente.
- Etapa 14: exemplo de RF-03 → modelo → serviço → teste → resultado real; avisos históricos desatualizados foram delimitados, sem afirmar autonomia universal.
- Índice: título pode quebrar palavra em 320 px para evitar excesso de largura.
- Caderno PG00–PG14: campos correspondem às atividades, exemplos didáticos rotulados onde necessários, leitura HTML com retorno a cada etapa e cópia Markdown. Site não salva respostas.

## Observações descartadas ou delimitadas

Etapas 1 e 2 reproduzem 600/900 e R$ 6,00/R$ 9,00; scripts preservados. Etapa 7 já explica parâmetros, retorno e responsabilidades adequadamente; etapa 11 já tem classe simples adequada. Demais scripts válidos foram preservados. As limitações dos recortes 2–6 são declaradas, não tratadas como validação definitiva de uma venda. Serviço, regras, banco e migrações não precisaram de alteração.

## Testes realmente executados

- Python 3.12.14 no Linux. Ambiente virtual novo criado/ativado; instalação do requirements.txt existente concluída. ZoneInfo America/Sao_Paulo e isolamento do ambiente conferidos.
- 14 arquivos Python de exemplos passaram na análise sintática. 30 execuções de exemplos/cópias: válidas, inválidas, decisões, repetição, acumulador, get(), funções, erro tratado, importação, JSON, objeto e testes.
- Quantidades 0, -1, 11, 1.5, True e texto recusadas em chamada direta da regra. Importar módulo não imprimiu a demonstração.
- JSON: primeira execução criou/leu 600; segunda preservou bytes e data de alteração e leu novamente. Arquivo preexistente com subtotal 900 foi lido como 900, sem sobrescrita; execução desde outra pasta manteve caminho junto do script.
- Primeiro assert passou; cópia com esperado 601 falhou com AssertionError conforme planejado. Unittest: 3 métodos aprovados.
- CLI real: 16 subprocessos isolados, incluindo preparo, registro, consulta após reabrir, avanço, repetição recusada e entradas inválidas. Pedido/total/estado persistiram; recusas não mudaram bytes do banco.
- Pytest terminal: 13 aprovados. Suíte completa existente: 99 aprovados, zero falhas; um aviso de depreciação da integração Starlette/httpx, sem erro. Primeira tentativa da suíte em cópia incompleta teve 6 falhas/10 erros por pastas ausentes; após corrigir somente a estrutura do ambiente de teste, os 99 passaram. Não foi alteração no produto.
- HTTP local: 21 HTMLs, Markdown e 14 Python retornaram 200 (36 recursos).
- Verificação estrutural: 114 HTMLs, 3577 referências, 134 botões de cópia, 52 arquivos canônicos, 56 blocos canônicos; zero erros. Isso não é renderização.
- 171 arquivos protegidos de serviço e outras disciplinas mantiveram hashes; Python anterior preservado exceto correção do JSON. Blocos anteriores preservados exceto JSON corrigido.

## Publicação

Fluxo existente: branch publicacao/cantina-estatica, GitHub Pages na raiz; desenvolvimento preparacao/isolamento-inicial com mesmas mudanças de Programação. Não alterar configuração, domínio, produção, Firebase, nem outras disciplinas. Publicação confirmada no endereço público de Programação; commit de conteúdo 4145bdd9bb2eb5848a72accea1a757a722cd56f6. Índice, JSON corrigido e caderno HTML conferidos no conteúdo servido.

Chromium remoto: 80 verificações aprovadas em 20 páginas × 320, 360, 768 e 1280 px. Um excesso de 3 px no índice em 320 foi corrigido com quebra da palavra do título, sem mudança de fonte/cores, e retestado nas quatro larguras. Página sem rolagem horizontal; tabelas têm rolagem interna própria, com célula direita alcançada pela interação do navegador. A tentativa de rolagem por seta não demonstrou deslocamento, portanto não é declarada como aprovada.
Menu abriu por Enter e fechou por Escape; exemplos recolhidos foram abertos por teclado. Caderno possui 15 retornos; alvo PG10 aparece abaixo do cabeçalho (144 px), volta à etapa 10 e avança à 11. Primeiro teste aparece antes da explicação de frameworks.

Cópia: alvos e conteúdo canônico conferidos; botão publicou “Comando copiado.”. Contudo, a leitura da área de transferência e colagem na página técnica retornaram o SQL anterior em vez do novo comando. Confirmação funcional da cópia ficou inconclusiva neste navegador remoto. Não se alterou o JavaScript compartilhado; os comandos continuam disponíveis para seleção manual. A página técnica de verificação não faz parte do fluxo do aluno.

## Limites

Não executado em Windows/macOS, aparelhos físicos, leitor de tela ou com novo aluno real. Linux não prova essas plataformas nem autonomia humana. Pytest mostra casos existentes, não cobertura total. Exemplo didático nunca é evidência de execução do aluno.

## Arquivos modificados

- laboratorio/percurso-mbb/programacao/00-problema-ambiente.html
- laboratorio/percurso-mbb/programacao/01-sequencia.html
- laboratorio/percurso-mbb/programacao/02-entrada.html
- laboratorio/percurso-mbb/programacao/03-decisao.html
- laboratorio/percurso-mbb/programacao/04-repeticao.html
- laboratorio/percurso-mbb/programacao/05-acumulador.html
- laboratorio/percurso-mbb/programacao/06-colecoes.html
- laboratorio/percurso-mbb/programacao/07-funcoes.html
- laboratorio/percurso-mbb/programacao/08-excecoes.html
- laboratorio/percurso-mbb/programacao/09-modulos.html
- laboratorio/percurso-mbb/programacao/10-arquivos.html
- laboratorio/percurso-mbb/programacao/11-objetos.html
- laboratorio/percurso-mbb/programacao/12-persistencia.html
- laboratorio/percurso-mbb/programacao/13-testes.html
- laboratorio/percurso-mbb/programacao/14-integracao.html
- laboratorio/percurso-mbb/programacao/99-exercicios.html
- laboratorio/percurso-mbb/programacao/caderno-programacao.html
- laboratorio/percurso-mbb/programacao/caderno-programacao.md
- laboratorio/percurso-mbb/programacao/depuracao.html
- laboratorio/percurso-mbb/programacao/exemplos/10_arquivo_json.py
- laboratorio/percurso-mbb/programacao/exemplos/13_primeiro_teste.py
- laboratorio/percurso-mbb/programacao/index.html
- laboratorio/percurso-mbb/programacao/ponte-visualg.html
- laboratorio/percurso-mbb/programacao/revisao-46.md
- laboratorio/percurso-mbb/programacao/verificacao-responsiva.html
- laboratorio/percurso-mbb/programacao/verificacao-revisao-46.json

## Fontes primárias consultadas

- https://docs.python.org/3/library/venv.html
- https://docs.python.org/3/library/json.html
- https://docs.python.org/3/library/unittest.html
