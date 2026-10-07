# Retomada dos ensaios — ficha curta

Use esta ficha quando puder testar. Não é necessário repetir as suítes de pedido, cupom e estados já concluídas. As ações abaixo produzem evidência nova de leitura, acesso direto e compreensão; resultados esperados não são aprovação.

Ponto de partida comprovado: **25/31 concluídas**; pedido, cupom e estados conferidos no Chromium real, com 360/320 px, teclado e foco. [Registro da rodada existente](evidencia-interface-21.json). R01 foi observado na sessão Windows de 07/10/2026; situação atual: **26/31 concluídas**, cinco pendentes. Os demais casos aguardam execução.

## Antes de começar

Código de referência: `eea7cf6bf834e8fe8860b78024d3308bc93235b7`. Esta ficha foi acrescentada depois; os programas da aplicação não mudaram nessa preparação. Registre abaixo a versão que você realmente abrir.

- Commit avaliado: **a preencher**.
- Data, sistema, navegador/versão: **07/10/2026; Windows; Chrome (versão não informada)**. Python informado: 3.10.2.
- Leitor de tela/ferramenta e versão: **a preencher**.
- Quem conduz: **Professor Ronaldo**. Participante de avaliação pedagógica: **não informado**.

Inicie a prévia temporária conforme o [guia](guia-execucao-cantina-mbb.md). Abra no mesmo computador a aplicação `http://127.0.0.1:8001/` e o percurso `http://127.0.0.1:8001/curso/laboratorio/percurso-mbb/index.html`. Se usar outra porta, anote os endereços efetivos. Use o ID devolvido pelo pedido; preserve a sessão até salvar os registros.

Se estiver no Windows, o Narrador pode ser iniciado/parado com **Windows + Ctrl + Enter**. Volte à aplicação depois de sua página inicial. [Orientação oficial da Microsoft](https://support.microsoft.com/pt-br/accessibility/windows/narrator/chapter-1-introducing-narrator). Outro leitor também pode ser usado; registre qual. Sem ouvir um leitor de tela real, deixe as linhas de leitura como não executadas.

## Registrar somente o que faltar

Em Resultado, use **passou**, **falhou** ou **não executado**, seguido do que realmente viu/ouviu. Anote nome, mensagem e destino de foco quando fizerem parte da verificação. Uma captura visual não comprova o anúncio sonoro.

| Caso / etapa | Ação e observação necessária | Resultado / evidência |
|---|---|---|
| R01 / 5.4 | Abrir aplicação e percurso diretamente nos endereços locais. Confirmar produtos carregados e uma página curricular. | **Passou:** aplicação com produtos e pedido #1; aula 0 de Análise aberta por URL local. [Capturas analisadas](evidencia-previa-windows-25.json). |
| R02 / 5.3 | Com leitor ativo, usar Tab no atalho e nos produtos. Ouvir o nome de cada produto nos campos Quantidade e botões Adicionar; identificar cupom e consulta. | Não executado |
| R03 / 5.3 e 5.5 | Tentar adicionar quantidade 0, ouvir a recusa e observar retorno ao campo. Pedir que o participante explique como corrigir antes de orientá-lo. Corrigir para 2 e adicionar Água. | Não executado |
| R04 / 5.3 | Registrar sem cupom e consultar o ID retornado. Ouvir confirmação/resultado e observar foco; a previsão para duas Águas numa base nova é R$ 6,00. Avaliar o anúncio, sem reabrir o teste funcional já concluído. | Não executado |
| R05 / 5.3 e 5.5 | Adicionar uma Água, preencher MBB10 e registrar. Ouvir a recusa pelo mínimo R$ 30,00 e pedir que o participante explique seu motivo. Remover o item e limpar o cupom depois. | Não executado |
| R06 / 5.3 | No pedido salvo, avançar até Entregue. Ouvir cada resultado e conferir foco no próximo controle ou resultado final. Registrar qualquer anúncio ausente/repetido que impeça entender o estado. | Não executado |
| R07 / 4.9 | No percurso, abrir Análise, BD, Programação, Web/API, QTS e Git; voltar sem se perder. Em uma aula com código, usar Copiar e conferir o texto copiado. Com zoom a 200%, observar acesso ao texto e aos controles. | Não executado |
| R08 / 4.9 e 5.5 | Sem explicar primeiro, pedir ao participante que mostre: a regra da quantidade; onde pedido/itens são guardados; quem confirma a venda; qual evidência sustenta uma recusa. Registrar suas palavras, dúvidas e ajuda necessária. | Não executado |

R02–R06 são observações do leitor de tela na mesma sessão. R03, R05 e R08 podem também registrar a compreensão do participante. Se o professor apenas revisar sozinho, registre essa revisão; ela não substitui uma observação com participante. Se faltar tempo ou ferramenta, preserve o resultado como não executado. O [roteiro completo](../../laboratorio/percurso-mbb/qts/roteiro-manual.md) continua disponível para aprofundar falhas ou situações não observadas.

## Depois da sessão

- Falhas: **caso, passos, esperado, observado e evidência — a preencher**.
- Etapas efetivamente encerradas após analisar os registros: **5.4**, com evidência visual de abertura direta.
- Pendências mantidas: **4.8, 4.9, 5.3, 5.5 e 5.6**.

Salve os registros antes de Ctrl+C, que descarta o banco temporário. VisuAlg continua reservado para teste posterior do professor (4.8); não é exigido para começar esta sessão. A [minuta do parecer](parecer-final-minuta.md) só receberá conclusão depois da análise dos resultados; o preenchimento de R01 encerra somente 5.4.
