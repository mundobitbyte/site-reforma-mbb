# Testes restantes — roteiro Windows de 08/10/2026

Comece quando estiver disponível depois das 7h30. Situação inicial: **27/31 concluídas; quatro abertas: 4.8, 4.9, 5.5 e 5.6**. Pedido 6/6; Cupom 5/5; Estados 5/5; Currículo 7/9; Entrega 4/6. Este roteiro prepara a sessão; não registra testes como executados.

Ordem: preparar versão → sequência/decisão/repetição no VisuAlg → iniciar prévia → zoom/cópia → uso e compreensão com participante → salvar registros → análise do parecer. Os fluxos técnicos de pedido, cupom e estados, o pdb e os anúncios do Narrador já têm evidência. Não precisam de nova rodada só para retomar. O objetivo das ações da Cantina com participante é observar uso/compreensão, não repetir a aprovação funcional.

## 1. Preparar a versão corrigida

1. Baixe o [ZIP da versão de teste 913e9dd8](https://github.com/mundobitbyte/site-reforma-mbb/archive/913e9dd8e0d757f3e3a2b5018822d3d32927261a.zip), do repositório experimental. Essa versão contém as correções feitas depois da sessão anterior.
2. Extraia em **uma pasta nova**, sem substituir a cópia anterior. A pasta correta para os comandos contém `index.html`, `laboratorio`, `docs` e `pages`; se a extração criou pastas aninhadas, entre até esse nível.
3. Nessa pasta, clique na barra de endereço do Explorador, digite `cmd` e pressione Enter. O CMD deve abrir na raiz dessa nova cópia. Não abra o `index.html` por duplo clique para estes testes.
4. Execute cada comando abaixo, separadamente, esperando o anterior terminar. O ambiente pertence à nova pasta, portanto precisa ser criado uma vez nela. Use o Python já instalado; não é necessário instalar Node ou Git para esta sessão.

```bat
py -m venv laboratorio\cantina-evolutiva\.venv
```

```bat
laboratorio\cantina-evolutiva\.venv\Scripts\python.exe -m pip install -r laboratorio\cantina-evolutiva\requirements.txt
```

Se um comando falhar, registre o texto completo e interrompa só essa preparação. Não trate a abertura de uma sessão antiga como prova da nova versão.

Anote: data real 08/10/2026, código `913e9dd8`, Windows, Python 3.10.2 se continuar sendo o mesmo, Chrome e versão do VisuAlg se disponível. Versões desconhecidas ficam identificadas como desconhecidas. Reserve um arquivo de anotações fora da pasta de código.

## 2. VisuAlg — 4.8: sequência, decisão e repetição

Use o **programa VisuAlg instalado**, não uma página Web. Se não o tiver, marque esta parte como não executada e avance às demais; a origem do projeto é [VISUALG 3.0 no SourceForge](https://sourceforge.net/projects/visualg30/).

Abra `laboratorio\percurso-mbb\programacao\visualg` na cópia nova. No VisuAlg, use Arquivo → Abrir para escolher cada `.alg`. Execute com **F9** e digite as entradas quando o programa pedir; pressione Enter após cada entrada. Se o teclado usar F9 para outra função, use a opção Executar do próprio VisuAlg. O [manual do VisuAlg](https://w3.impa.br/~zang/uerj/ipd/software/visualg.pdf) documenta Abrir e F9.

Faça na ordem abaixo. Nas quatro linhas do arquivo de decisão original, inicie uma execução nova para cada quantidade.

| Caso | Arquivo e condição | Entrada | Resultado previsto |
|---|---|---|---|
| V01 | `02_sequencia.alg` | `2` | Subtotal **600 centavos**. |
| V02 | `03_decisao.alg`, estoque original 20 | `0` | Recusa: usar quantidade de 1 a 10. |
| V03 | Mesmo arquivo, execução nova | `1` | Simulação aceita: **300 centavos**. |
| V04 | Mesmo arquivo, execução nova | `10` | Simulação aceita: **3000 centavos**. |
| V05 | Mesmo arquivo, execução nova | `11` | Recusa: usar quantidade de 1 a 10. |
| V06 | No editor, trocar temporariamente `estoque <- 20` por `estoque <- 1` | `2` | **Estoque insuficiente.** |
| V07 | `04_repeticao.alg` | `0`, depois `11`, depois `2` na mesma execução | Duas recusas; depois subtotal **600 centavos** e término. |

Depois de V06, restaure `estoque <- 20` ou reabra o original **sem salvar a alteração**. Não substitua o arquivo do laboratório por essa variação. Compare valores e sentido da mensagem; espaços de formatação da saída não precisam ser idênticos.

Registre o resultado dos sete casos e a versão do VisuAlg. Se houver erro, copie a mensagem e anote arquivo, entrada e linha indicada. Não ajuste código por tentativa antes de registrar o erro.

## 3. Iniciar a prévia nova

No CMD que ficou na raiz da nova cópia, execute:

```bat
laboratorio\cantina-evolutiva\.venv\Scripts\python.exe -X utf8 laboratorio\cantina-evolutiva\previa_local.py --port 8003
```

A porta 8003 distingue esta sessão das anteriores em 8001/8002. Espere a mensagem de servidor iniciado e mantenha esse terminal aberto. Se 8003 estiver ocupada, encerre a tentativa, repita com `--port 8004` e substitua 8003 por 8004 nos dois endereços seguintes. Não teste a URL se o novo servidor não iniciou.

Abra no Chrome, em duas abas, **no mesmo computador**:

- Aplicação: <http://127.0.0.1:8003/>
- Percurso: <http://127.0.0.1:8003/curso/laboratorio/percurso-mbb/index.html>

O serviço mostra data fixa 07/10/2026 para o ensaio; a data real do seu registro é 08/10/2026. Esta sessão começa com base fictícia nova. Recarregar conserva pedidos; encerrar o servidor descarta a base. Não use IDs das sessões anteriores.

## 4. Percurso — R07 / 4.9: zoom, navegação e cópia

1. Na aba do percurso, abra o menu de três pontos do Chrome e, em **Zoom**, use `+` até **200%**. Use o zoom do navegador. [Orientação do Google](https://support.google.com/chrome/answer/96810?hl=pt-BR).
2. Abra cada disciplina a partir da entrada do percurso, nesta ordem: **Análise → Banco de Dados → Programação → Web/API → QTS → Git**. Em cada visita, observe o menu, título, texto e controles; volte ao percurso usando o vínculo da própria página. Se aparecer o botão Etapas, abra-o para acessar a navegação.
3. Observe conteúdo de tipos diferentes: dossiê de Análise; tabela de BD03; código de Programação 07; Web/API 08; matriz de casos QTS; uma etapa de Git. Confira se é possível alcançar e ler todo o conteúdo, sem texto/controle encoberto ou cortado. Uma tabela com rolagem dentro de sua própria área não é, sozinha, falha; registre se a página inteira perde conteúdo ou exige rolagem lateral para ler o texto comum.
4. Ainda a 200%, em **Programação → 7 — Nomear uma responsabilidade**, clique **Copiar código** no bloco `07_funcoes.py`.
5. Abra um documento novo no **Bloco de Notas** e cole com **Ctrl+V**. Compare com o bloco: começa com `def subtotal_item`, contém os preços 300 e 800, preserva linhas/indentação e termina com `print("Subtotal em centavos:", total)`. Não basta aparecer a mensagem de cópia: confira o texto colado. Não é necessário executar esse Python novamente.
6. Se a cópia falhar, registre a mensagem e o navegador; copiar manualmente não aprova o botão. Se passar, anote que o texto completo foi conferido. Salve uma captura se houver corte ou diferença.
7. Volte o Zoom a **100%** pelo mesmo menu.

Registre R07 como passou, falhou ou parcial, com páginas e observações. A revisão pedagógica da 4.9 ainda depende da parte com participante abaixo.

## 5. Participante — R08 / 4.9 e 5.5

Peça a uma pessoa do público de aprendizagem para usar o material no mesmo computador. Registre seu perfil e experiência prévia, sem exigir nome completo. A revisão do professor sozinho não substitui essa observação. Se ninguém puder participar, marque R08 como não executado e conclua os demais registros.

Explique somente o cenário: **“Esta cantina fictícia permite montar, registrar e consultar um pedido; o percurso mostra como esse mesmo sistema atravessa as disciplinas.”** Deixe a pessoa ler as instruções visíveis. Observe antes de explicar onde clicar. Se precisar ajudar, ajude e registre o que foi necessário; não transforme a resposta orientada em entendimento independente.

### 5A. Usar a aplicação e explicar as mensagens

Na aba da Cantina, peça uma tarefa por vez:

1. **“Tente adicionar zero unidades de Água. O que a mensagem quer dizer? Como você corrigiria?”** A previsão é recusa. Anote a explicação antes de orientar.
2. **“Agora monte um pedido com duas Águas. Tente usar MBB10. Por que o pedido foi recusado?”** A previsão é recusa pelo mínimo de R$ 30,00. Não crie uma compra de R$ 30 só para testar o cupom novamente.
3. **“Registre esse pedido sem cupom e identifique o número que o sistema devolveu.”** A previsão para duas Águas é R$ 6,00. Anote o ID realmente retornado; não presuma #1.
4. **“Recarregue a página e reencontre o pedido salvo.”** Observe se a pessoa usa o ID e reconhece quantidade/total. Não peça outro registro para recuperar a venda.
5. **“Mostre como acompanhar a preparação.”** Pode avançar uma etapa e explicar o novo estado. Não precisa repetir a sequência inteira até Entregue já confirmada tecnicamente.

Estes gestos produzem observação humana nova de uso/compreensão. Os testes funcionais e de Narrador anteriores continuam registrados; Narrador não precisa ser ligado novamente para este roteiro.

### 5B. Entender a ligação entre as disciplinas

Na aba do percurso, dê tempo para consultar o material. Não exija ler as 81 etapas numa sessão. Use os pontos de consulta abaixo e peça que a pessoa mostre onde encontrou cada resposta:

| Pergunta à pessoa | Onde pode consultar | Critério para você conferir depois da resposta |
|---|---|---|
| “Qual regra decide se a quantidade pode ser aceita?” | [Dossiê / requisitos](../../laboratorio/percurso-mbb/analise/dossie-cantina.html#requisitos) | Inteiro de 1 a 10 por produto consolidado; respeitar estoque. |
| “Onde ficam guardados o pedido e seus itens?” | [BD03](../../laboratorio/percurso-mbb/banco-de-dados/03-logica-normalizacao.html) | Relações pedido/item_pedido; preço histórico daquele item. |
| “A tela calcula uma previsão. Quem confirma o que foi registrado?” | [Programação 12](../../laboratorio/percurso-mbb/programacao/12-persistencia.html) e [Web/API 08](../../laboratorio/percurso-mbb/web-api/08-registro.html) | Serviço valida e persiste no banco; a interface recebe confirmação do servidor. |
| “Qual teste ou evidência sustenta a recusa de uma quantidade inválida?” | [Matriz QTS](../../laboratorio/percurso-mbb/qts/matriz-casos.html) | Localizar CT-TIPOS/RF-03 ou Q-03 e explicar a ligação à regra; não exige decorar o nome da função. |

Depois, peça que mostre a entrada de **Git** e diga para que serve identificar a versão do material/teste. Observe se reconhece que requisitos, código e evidência pertencem ao mesmo sistema. Os critérios da tabela são para o professor; não leia as respostas à pessoa antes da tentativa.

Anote as palavras da pessoa, dúvidas, links difíceis de localizar e ajuda necessária. Uma resposta apenas repetida depois de você explicá-la não comprova compreensão independente. Em caso de dificuldade, registre antes de orientar; podemos corrigir o material e observar novamente o ponto afetado.

## 6. Salvar e enviar os resultados

Antes de encerrar a prévia, guarde as anotações e capturas necessárias. Pode enviar as anotações em texto; imagem é útil para corte/erro visual, mas não substitui a explicação da pessoa.

```text
Data: 08/10/2026
Versão: 913e9dd8 | porta: 8003 (ou a usada)
Ambiente: Windows / Python / Chrome / VisuAlg (versões conhecidas)
V01 (2 → 600):
V02–V05 (0/1/10/11):
V06 (estoque 1, quantidade 2):
V07 (0,11,2):
R07 (200%, páginas visitadas, retorno e texto colado):
Participante (perfil/experiência):
5A (tarefas realizadas, explicações e ajuda necessária):
R08/5B (respostas com suas palavras e locais encontrados):
Falhas ou itens não executados:
```

Depois de salvar, volte ao CMD da prévia e pressione **Ctrl+C**. Isso encerra e descarta somente o banco temporário da sessão. Preserve a pasta nova e seus registros.

## 7. O que acontece depois

Com os resultados, o agente analisa 4.8, 4.9 e 5.5; corrige falhas relevantes e solicita somente a nova observação afetada, se necessária. A 5.6 fecha após registrar a decisão e os limites. Não marcar conclusão apenas por seguir o roteiro.

Fechar o laboratório não publica o site. A preparação da integração com a navegação e a conferência das alterações vêm depois, dentro do escopo acordado. Produção `mundobitbyte/site`, domínio e Firebase permanecem intactos até autorização explícita de publicação.
