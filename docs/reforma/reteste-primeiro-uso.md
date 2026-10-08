# Reteste dos pontos corrigidos — Cantina Horizonte

Não repetir VisuAlg, pdb, as suítes técnicas antigas ou a leitura de todas as aulas. Este roteiro avalia as mudanças posteriores à sessão com a aluna.

## Preparar a nova cópia
Baixe o ZIP da versão corrigida mais recente indicada na conversa, extraia em pasta nova e abra CMD na pasta que contém index.html, laboratorio, docs e pages. Não usar a antiga aba 8003 para avaliar as correções.

Execute um comando por vez:

```bat
py -m venv laboratorio\cantina-evolutiva\.venv
```

```bat
laboratorio\cantina-evolutiva\.venv\Scripts\python.exe -m pip install -r laboratorio\cantina-evolutiva\requirements.txt
```

```bat
laboratorio\cantina-evolutiva\.venv\Scripts\python.exe -X utf8 laboratorio\cantina-evolutiva\previa_local.py --port 8005
```

Deixe o CMD aberto. Abra no mesmo computador:
- Aplicação: http://127.0.0.1:8005/
- Percurso: http://127.0.0.1:8005/curso/laboratorio/percurso-mbb/index.html

Confirme os textos Adicionar ao pedido e Consultar estoque atual, os três atalhos numerados, os links Voltar aos atalhos e as ajudas fechadas junto aos controles. Se a porta estiver ocupada, use 8006 no comando e nas duas URLs. Uma execução nova cria outra base; não reutilize IDs de sessões anteriores.

## Conduzir sem pressão de nota
Diga: “Estamos conferindo se o material orienta bem. Pode ler com calma, explorar e dizer o que não estiver claro. Não é uma prova para atribuir nota.” Dê uma tarefa por vez, com tempo para leitura. Não ofereça resposta ou caminho antes da tentativa; registre dúvida antes de ajudar. Se for a mesma aluna, anote o contato prévio; não tratar reconhecimento posterior como primeira descoberta independente.

## Aplicação — 100% de zoom
1. “Monte um pedido com duas Águas.” Observe se distingue digitar quantidade de adicionar produto e se encontra os itens adicionados.
2. “Tente registrar usando MBB10. Explique o resultado e continue sem esse cupom.” Observe descoberta do campo, digitação, compreensão da recusa e continuação sem perder os itens. O pedido sem cupom deve totalizar R$ 6,00; registre o ID devolvido, sem presumir #1.
3. “Recarregue a página e reencontre seu pedido.” Observe descoberta do atalho Consultar e acompanhar e uso do número já preenchido; só Consultar recupera o estado do banco.
4. “Avance uma etapa e diga o que mudou.” Observe se lê a confirmação antes de nova ação. Não exigir toda a sequência até Entregue.
5. “Consulte o estoque atual. O que esse botão fez?” Observe se encontra o controle e o retorno perto dele, e se localiza a linha Estoque abaixo do nome de cada produto; se interpreta consulta de quantidades, sem adicionar produtos ou esperar reposição.

## Percurso — 100% de zoom
Peça que leia a abertura e explique a ligação entre aplicação e disciplinas. Depois faça as cinco perguntas abaixo. Pode consultar páginas; não exigir memória ou códigos decorados. Observe se o mapa e as pontes ajudam a localizar e explicar.

1. Qual regra determina se uma quantidade pode ser aceita?
2. Onde ficam guardados o pedido e seus itens?
3. Quem confirma que a venda foi registrada?
4. Qual teste confere uma quantidade inválida? Como ele se liga à regra?
5. Por que identificar a versão do código que foi testada?

Registre as palavras dela e o local consultado. Uma resposta repetida após explicação do professor deve ser marcada como orientada.

## Visual alterado — professor
Na aplicação, abra e feche as ajudas e confira os três retornos aos atalhos, o estoque compacto ao lado do título (abaixo em janela estreita) e o cabeçalho compacto. Na aplicação e na entrada do percurso, confira os atalhos, rótulos, mapa e retorno de estoque com zoom 200%; depois volte a 100%. Não é necessário repetir a rodada completa das seis páginas já conferidas no checkpoint 34. Se for possível, use também uma janela estreita para conferir a navegação e os cartões. Para os nomes/retornos alterados, pode complementar com Narrador; isso será uma observação nova, sem apagar a evidência anterior.

## Registro
```text
Data / versão / porta:
Participante: mesma aluna ou outra; contato prévio:
Pedido e cupom: ações, explicação, ajuda:
ID após recarregar e consulta: resultado, ajuda:
Avanço: estado encontrado, leitura e ajuda:
Estoque: o que entendeu, retorno visto, ajuda:
Percurso: explicação da interdisciplinaridade:
Cinco perguntas: respostas, páginas encontradas, ajuda:
Visual dos elementos novos a 200%:
Falhas ou não executados:
```
Salve as anotações antes de Ctrl+C no servidor. Envie o registro: aprovar os critérios depende do observado, não apenas de executar a sequência. Publicação permanece uma fase posterior, com autorização explícita.
