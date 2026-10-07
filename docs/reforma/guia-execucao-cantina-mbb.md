# Guia consolidado da Cantina — execução e estado de entrega

Escopo: cópia experimental `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O repositório `mundobitbyte/site`, domínio oficial e Firebase ficam somente para leitura. O acesso já autorizado não precisa ser ampliado.

## Onde abrir o conteúdo
- [Orientação da entrega parcial](entrega-parcial.md): leitura e encadeamento do material sem iniciar a aplicação; ensaios podem ficar para depois.
- [Ficha curta para a próxima sessão](registro-retomada.md) · [Minuta do parecer final](parecer-final-minuta.md): registrar apenas as observações ainda pendentes, sem repetir as suítes concluídas.
- [Percurso interdisciplinar](../../laboratorio/percurso-mbb/index.html)
- [Progresso detalhado](progresso-subetapas.md): 27/31 concluídas, 4 pendentes; posição 5.6, preparação do parecer; prévia direta e Narrador confirmados no Windows do professor.
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

Registro mais recente: [verificacao-checkpoint-31.json](verificacao-checkpoint-31.json). As rodadas anteriores permanecem como histórico.

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

## Prévia local integrada para os ensaios pendentes

Depois de ativar o ambiente e instalar as dependências, execute na raiz do laboratório:

```bash
python laboratorio/cantina-evolutiva/previa_local.py
```

Quando o terminal informar que o servidor iniciou, abra no **mesmo computador**:

- Aplicação: http://127.0.0.1:8001/
- Percurso: http://127.0.0.1:8001/curso/laboratorio/percurso-mbb/index.html

O iniciador serve os dois materiais e a API juntos. Cria banco fictício temporário novo em cada execução, mantendo os bancos existentes. Recarregar a página preserva os pedidos durante a sessão. **Ctrl+C encerra e descarta esse banco**; antes de encerrar, salve os resultados e capturas. A data do serviço fica em 07/10/2026 para o ensaio de cupom; não é a data corrente nem uma nova regra da aplicação.

Se a porta 8001 estiver ocupada, use `python laboratorio/cantina-evolutiva/previa_local.py --port 8002` e os endereços que o terminal imprimir. Não é necessário alterar configuração do serviço.

Siga o [roteiro de uso real](../../laboratorio/percurso-mbb/qts/roteiro-manual.md). O iniciador não abre navegador automaticamente, não publica o laboratório e não constitui evidência de uso visual. Os comandos foram ensaiados em Linux/Python 3.12; a execução em Windows/macOS ainda não foi verificada.

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
- Checkpoint 17: depurador pdb executado e diagnóstico de navegador corrigido.
- Checkpoint 18: iniciador integrado local ensaiado via HTTP, com duas sessões e descarte dos bancos temporários. [Evidência](evidencia-previa-local-18.json). Navegador ainda não testado naquela rodada.
- Checkpoint 19: seis casos de lógica da interface passaram em Node; correções de nomes, atalho de conteúdo e foco. [Evidência](evidencia-interface-19.json). Elementos de teste não substituem navegador.
- Checkpoint 20: 17 casos de lógica da interface passaram, incluindo recuperação de foco após operações assíncronas. [Evidência](evidencia-interface-20.json).
- Checkpoint 21: Chromium real, 38/38 casos de acessibilidade e 25/25 de integração com FastAPI/serviço/SQLite temporário. Pedido, cupom e estados foram concluídos; leitor de tela real ainda pendente naquela rodada. [Evidência](evidencia-interface-21.json).

- Checkpoint 25: prévia direta da aplicação e aula curricular no Windows do professor. [Registro](evidencia-previa-windows-25.json).
- Checkpoint 26: leitura UTF-8 corrigida no serviço; duas regressões de codificação falharam antes e passaram depois. [Registro](evidencia-sql-utf8-26.json).
- Checkpoint 27: confirmações com Narrador Windows e sequência até Entregue na nova sessão UTF-8. [Registro e limites](evidencia-narrador-windows-27.json).
- Checkpoint 28: 89 testes Python e 12 observações HTTP aprovados; retorno curricular corrigido e relato de navegação registrado como parcial. [Registro](evidencia-retomada-28.json).
- Checkpoint 29: consolidação documental da minuta e atualização do parecer QTS; sem novos ensaios funcionais. [Registro](checkpoint-29-consolidacao-do-parecer.md).

Essas grandezas não são somadas como se fossem o mesmo tipo de teste. Cobertura percentual não foi medida. Actions permanece desativado; receita QTS é texto inerte. Não houve escrita no site oficial ou publicação nesta rodada.

## O que impede encerrar a entrega
Subetapas ainda abertas: 4.8, 4.9, 5.5, 5.6. Total: **27/31 concluídas; 4 pendentes**.
O checkpoint 21 concluiu 1.6, 2.5 e 3.5. Confirmou 360/320 px, teclado, foco, DOM e árvore de acessibilidade do Chromium. Narrador real 5.3 concluído no checkpoint 27. Faltam revisão pedagógica e compreensão com participante (4.9/5.5), e parecer final (5.6).
O depurador pdb foi executado no checkpoint 17; o VisuAlg será testado posteriormente pelo Professor Ronaldo, conforme instrução de 07/10/2026. Essa pendência da 4.8 não impede prosseguir nas outras subetapas.
O diagnóstico de acesso do checkpoint 17 é histórico. No checkpoint 21, a interface foi carregada em Chromium real e suas chamadas foram encaminhadas internamente ao FastAPI real; a navegação direta por URL continuou bloqueada no ambiente gerenciado. Esse transporte permitiu os ensaios funcionais registrados. A abertura direta da aplicação e de uma aula curricular no Windows do professor encerrou 5.4 no checkpoint 25; Narrador confirmado no checkpoint 27; compreensão com participante permanece pendente. A prévia integrada precisa executar também o serviço Python. Não houve publicação externa.

A prévia e o Narrador foram observados no Windows do professor. [Registro da sessão 27](evidencia-narrador-windows-27.json). Próximas observações: percurso em uso e compreensão com participante, conforme a [ficha](registro-retomada.md). Registre commit e versões quando conhecidos. Os ensaios funcionais concluídos não precisam ser repetidos para autorizar esta rodada.

Parecer atual: execução/conteúdo documentados para o laboratório; entrega completa e produto final ainda não liberados. Não existe aprovação pendente para as tarefas já autorizadas.

## Depuração adicional — ensaio concluído

[Prática de pdb](../../laboratorio/percurso-mbb/programacao/depuracao.html) acompanha o exemplo de funções existente, sem alterar suas regras. Da raiz do laboratório:

```bash
python -m pdb -c "break 10" laboratorio/percurso-mbb/programacao/exemplos/07_funcoes.py
```

Use continue, p total, p item, step, args, return e next para inspecionar cada chamada. A sessão observou retornos 600/1600 e total 2200; quit encerrou o depurador. Isso não é teste do VisuAlg nem sessão com aluno. [Transcrição e valores](evidencia-depurador-17.json).

## Conferir a lógica das correções de interface

Quando uma mudança justificar, com Node disponível, na raiz:

```bash
node --test laboratorio/cantina-evolutiva/frontend/tests/acessibilidade.test.cjs
```

O conjunto atual tem 17 casos com o JavaScript real e elementos substitutos no Node, sem DOM de navegador ou rede. Inclui os seis casos do checkpoint 19 e 11 de operações assíncronas, recuperação de foco, respostas superadas e campo em edição. Não avalia layout, teclado nativo ou leitor de tela. [Evidência do checkpoint 20](evidencia-interface-20.json).

## Windows: falha depois de Confirmado — checkpoint 26

A leitura SQL deve usar UTF-8 explicitamente. Em um Windows com codificação padrão cp1252, a leitura sem encoding corrompe `Em preparação` nas restrições CHECK. O [registro 26](evidencia-sql-utf8-26.json) reproduz essa falha e registra a correção do serviço. A mudança não repara restrições já gravadas num banco antigo. Não altere SQL protegido nem remova bancos persistentes para contornar o erro.

Para retomar o ZIP anterior sem fechar o ensaio original, abra outro CMD na raiz do projeto e use:

```bat
laboratorio\cantina-evolutiva\.venv\Scripts\python.exe -X utf8 laboratorio\cantina-evolutiva\previa_local.py --port 8002
```

Abra `http://127.0.0.1:8002/`. Essa sessão tem banco temporário novo e IDs próprios. O `-X utf8` evita a leitura errada no código antigo; o serviço corrigido já explicita UTF-8. Confirme a sequência de estados na sessão nova com Narrador. Aproveite os anúncios já observados; não declare o R06 concluído até ouvi-lo nessa sequência. A sessão original em 8001 pode permanecer aberta enquanto se preservam suas evidências.

## Retomada quando estiver apenas no celular

O endereço `127.0.0.1` sempre corresponde ao dispositivo em uso. A prévia iniciada no computador não fica acessível pelo mesmo endereço no celular. Não há prévia externa publicada. Pode-se revisar os enunciados/explicações pela conversa; isso não verifica as telas ou a compreensão com participante.

O professor relatou navegação aparentemente correta em 07/10/2026, mas não pôde conferir possíveis falhas no momento. Quando voltar ao computador, faltam R07 (zoom 200% e copiar/conferir um bloco) e R08 (compreensão com participante), sem repetir os testes do Narrador já encerrados. VisuAlg continua adiado. [Trabalho independente realizado](checkpoint-28-retomada-no-celular.md).

## Conferência portátil dos blocos para copiar — checkpoint 31

O verificador exige que cada arquivo canônico esteja completo num bloco associado ao botão Copiar e recusa alvos vazios. Não acessa a área de transferência do navegador. O [registro](evidencia-copia-31.json) distingue essa conferência da cópia real ainda pendente em R07.

Para conferir a detecção de três defeitos de conteúdo/associação, na raiz do repositório:

```bash
python -m unittest discover -s laboratorio/percurso-mbb/tests -v
```

Esses testes fornecem páginas modificadas somente em memória: texto extra, botão sem associação e comando vazio. Não alteram arquivos, bancos ou navegador. São três testes do verificador, separados dos 89 testes da aplicação.
