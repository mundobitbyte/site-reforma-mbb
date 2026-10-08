# Checkpoint 37 — estoque compacto e resultado identificável

## Observação recebida
Em 08/10/2026, professor enviou duas capturas da aplicação em 127.0.0.1:8005/#cardapio. A primeira mostra o bloco de estoque atravessando a largura do cardápio e o cartão Chocolate parcialmente abaixo da área visível. A segunda destaca botão e ajuda em um trecho compacto. Professor pediu reposicionamento aproximadamente ao lado do título, como antes, e informou que ainda não compreendia o que a consulta exibia e onde.

A captura evidencia distribuição vertical; não demonstra falha de API, corte por CSS ou resposta após clicar. Não foi informado percentual de zoom. Não inferir que todos os cinco produtos caberão em qualquer altura de janela.

## Alteração
- Título, retorno e ajuda de quantidade ficam em grupo próprio. Botão de estoque e sua ajuda ficam em bloco compacto ao lado desse grupo quando há largura, sem faixa adicional ocupando todo o cardápio. Em janela estreita, os grupos passam para linhas distintas; não há altura fixa ou ocultação dos produtos.
- Ajuda renomeada para Onde vejo o estoque? Explica que a consulta busca as quantidades no banco e as exibe na linha Estoque abaixo do nome de cada produto. Se não houve novas vendas, os valores podem permanecer iguais. A consulta não repõe estoque nem adiciona itens.
- Após sucesso, a mensagem junto ao botão aponta explicitamente para essa linha nos produtos. Continua aparecendo somente depois da operação, com estado de carregamento e erro preservados.
- Professor esclareceu que toda a observação se referia a Consultar estoque atual. Botão Consultar e ajuda do pedido da etapa 3 mantidos como estavam no checkpoint 36.
- HTML, CSS e JS canônicos sincronizados na página de código integrado. Regras de venda, API, banco, armazenamento do ID e transições permanecem as existentes.

## Verificação e limites
Resultados técnicos registrados em [verificacao-checkpoint-37.json](verificacao-checkpoint-37.json). Não houve nova renderização em navegador, Narrador ou sessão com aluna. As capturas recebidas mostram a versão anterior à correção; não constituem aprovação do novo posicionamento. Não repetir as suítes antigas de backend nem os ensaios humanos concluídos.

## Continuidade
**28/31**, posição **5.5**, abertas **4.9, 5.5 e 5.6**. Conferir a posição compacta e a compreensão dos retornos na nova versão conforme o [reteste existente](reteste-primeiro-uso.md). Nenhuma nova autorização pendente para esta correção. Repositório oficial, domínio e Firebase intactos; nenhuma publicação.
