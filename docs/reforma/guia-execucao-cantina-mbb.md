# Guia consolidado da Cantina — execução e estado de entrega

Escopo: cópia experimental `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O repositório `mundobitbyte/site`, domínio oficial e Firebase ficam somente para leitura. O acesso já autorizado não precisa ser ampliado.

## Onde abrir o conteúdo
- [Percurso interdisciplinar](../../laboratorio/percurso-mbb/index.html)
- [Progresso detalhado](progresso-subetapas.md): 22/31 concluídas, 9 pendentes; posição 5.3, acessibilidade real.
- [Dossiê do mesmo sistema](../../laboratorio/percurso-mbb/analise/dossie-cantina.html)
- [Aplicação, bancos e regras](../../laboratorio/cantina-evolutiva/README.md)
- [Parecer da rodada QTS](../../laboratorio/percurso-mbb/qts/parecer.md)

## Preparar para a aplicação local
Python, terminal e uma cópia do laboratório são necessários. O ambiente efetivamente usado nesta reforma tem Python 3.12, Node 24.19.0 e Git 2.51.1. Isso registra o ambiente observado; não representa ensaio em todos os sistemas operacionais ou versões.

Na raiz do repositório experimental:

```bash
python -m venv laboratorio/cantina-evolutiva/.venv
```

Ativação no CMD do Windows:

```bat
laboratorio\cantina-evolutiva\.venv\Scripts\activate
```

Ativação no Linux/macOS:

```bash
source laboratorio/cantina-evolutiva/.venv/bin/activate
```

Instalar no ambiente ativado:

```bash
python -m pip install -r laboratorio/cantina-evolutiva/requirements.txt
```

As dependências existentes declaram intervalos de versões. Para reproduzir uma rodada, registre as versões efetivamente instaladas e o commit avaliado; o registro do checkpoint não garante versões futuras por si.

## Verificar o conteúdo sem criar banco ou executar vendas

Na raiz, ou passando o caminho completo do script a partir de outra pasta:

```bash
python laboratorio/percurso-mbb/verificar_percurso.py
```

Esse comando usa apenas a biblioteca padrão do Python e os arquivos do checkout. Lê HTML, vínculos locais/âncoras (inclusive aulas dinâmicas), blocos de código, matrizes, funções de teste e hashes protegidos. Confere também a contagem das 31 subetapas e seus vínculos de evidência.
Não usa navegador, rede, servidor ou SQLite. Não escreve arquivos, instala dependências ou altera fonte. Imprime JSON e retorna código 0 quando os critérios passam; código diferente de 0 precisa ser investigado antes de prosseguir. Não substitui teste da aplicação ou acessibilidade.

Registro da rodada: [verificacao-checkpoint-16.json](verificacao-checkpoint-16.json).

## Rodadas de testes e práticas, quando uma mudança justificar
Não é necessário repetir tudo só para abrir o material. Os comandos abaixo documentam futuras verificações. Os testes antigos não foram reexecutados para consolidar este guia.

```bash
python -m pytest laboratorio/cantina-evolutiva/tests -q
node --test laboratorio/percurso-mbb/web-api/tests/clientes.test.mjs laboratorio/percurso-mbb/web-api/tests/simulacao.test.mjs
python laboratorio/percurso-mbb/web-api/tests/verificar_http_local.py
python laboratorio/percurso-mbb/qts/exemplos/comparar_versoes.py
python laboratorio/percurso-mbb/qts/exemplos/ciclo_tdd.py
python laboratorio/percurso-mbb/git/exemplos/pratica_git.py
```

Python do ambiente da Cantina é necessário para pytest/TestClient/API. Node é necessário para os clientes e o roteiro HTTP. Git é necessário para a última prática.
Os testes Python e o comparador usam bancos temporários. O executor HTTP cria/encerra sua própria API temporária; seu cliente não deve ser apontado para banco de trabalho. A prática Git cria somente repositórios temporários, remoto bare local e identidade didática por comando; não acessa GitHub ou grava configuração global.

## Experimentar o serviço local
Na raiz:

```bash
python -m uvicorn app:app --app-dir laboratorio/cantina-evolutiva --host 127.0.0.1 --port 8001
```

A forma com `--app-dir` resolve app/servico na pasta correta sem depender de mudar de diretório. O roteiro anterior também continua válido: entrar na pasta do serviço e iniciar `uvicorn app:app`.
Abra http://127.0.0.1:8001/ no mesmo computador após iniciar o servidor. Esse endereço é local, não prévia publicada. O banco de trabalho é `laboratorio/cantina-evolutiva/dados/cantina-evolutiva.sqlite3`.
Pedidos aceitos são novas vendas fictícias e reduzem saldo. Reiniciar preserva o banco; não é reset. Não apontar o serviço para dados da v1, do oficial ou de outro projeto.

## Terminal e Banco de Dados didáticos
Na pasta `laboratorio/cantina-evolutiva`, com o ambiente ativado:

```bash
python terminal.py preparar
python terminal.py produtos
python terminal.py registrar --item 1:2
python terminal.py consultar 1
python terminal.py avancar 1 --estado-esperado Novo
```

`preparar` cria uma base separada uma vez e recusa a existente. `registrar` cria venda; `avancar` muda estado. Use o ID devolvido e o estado consultado. O ID 1 só corresponde à primeira venda numa base nova.

As práticas de Banco de Dados usam `python laboratorio_bd.py ...`: consulta é leitura; transação `commit` cria venda na base didática; rollback/falha não confirma. Backup, dump e restauração usam arquivos próprios e recusam substituir destinos existentes. Consulte o README para os comandos completos.

| Base | Uso |
|---|---|
| `dados/cantina-evolutiva.sqlite3` | Interface/API local |
| `dados/programacao/cantina.sqlite3` | Terminal didático |
| `dados/bd-didatico/cantina.sqlite3` | SQL/transação/backup didáticos |
| diretórios temporários | Testes/comparador/API de ensaio |
| `qts/cantina-horizonte-v1` | Fonte preservada com defeitos; comparador não altera seu banco |

## Evidências e limites
- Checkpoint 13: 87 casos Python aprovados.
- Checkpoint 14: 26 casos JavaScript aprovados; 17 requisições HTTP e quatro operações OpenAPI conferidas.
- Checkpoint 15: nove cenários em duas versões (18 observações), oito amostras por fase TDD, 62 comandos Git locais.
- Checkpoint 16: verificação portátil, contagem detalhada e guia consolidado. Não é nova execução das suítes anteriores.

Essas grandezas não são somadas como se fossem o mesmo tipo de teste. Cobertura percentual não foi medida. Actions permanece desativado; receita QTS é texto inerte. Não houve escrita no site oficial ou publicação nesta rodada.

## O que impede encerrar a entrega
Subetapas ainda abertas: 1.6, 2.5, 3.5, 4.8, 4.9, 5.3, 5.4, 5.5, 5.6.
Navegador, 360 px, teclado/foco, revisão visual, participante e VisuAlg permanecem sem execução. O depurador pdb foi executado no checkpoint 17; a subetapa 4.8 continua aberta por exigir também VisuAlg. A prévia integrada precisa hospedar o serviço Python; HTML estático sozinho não atende esse critério.
Correção do diagnóstico no checkpoint 17: a skill sites-preview-troubleshooting se limita à prévia de projetos Sites. Sua restrição não rege este projeto GitHub. O acesso pela API de navegador foi testado no contexto correto com servidor e base temporários; o navegador reportou `net::ERR_CONNECTION_REFUSED`. O servidor foi encerrado depois do ensaio. Não houve publicação externa. Veja [o registro de acesso](diagnostico-acesso-17.json).

Parecer atual: execução/conteúdo documentados para o laboratório; entrega completa e produto final ainda não liberados. Não existe aprovação pendente para as tarefas já autorizadas.

## Depuração adicional — ensaio concluído

[Prática de pdb](../../laboratorio/percurso-mbb/programacao/depuracao.html) acompanha o exemplo de funções existente, sem alterar suas regras. Da raiz do laboratório:

```bash
python -m pdb -c "break 10" laboratorio/percurso-mbb/programacao/exemplos/07_funcoes.py
```

Use continue, p total, p item, step, args, return e next para inspecionar cada chamada. A sessão observou retornos 600/1600 e total 2200; quit encerrou o depurador. Isso não é teste do VisuAlg nem sessão com aluno. [Transcrição e valores](evidencia-depurador-17.json).
