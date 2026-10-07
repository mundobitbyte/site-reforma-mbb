# Uso real — roteiro ainda não executado

Necessidade: conferir se uma pessoa consegue registrar, reencontrar e acompanhar o mesmo pedido, entender a recusa do cupom e estudar o percurso. Os resultados abaixo são **esperados**, não resultados visuais já obtidos.

## Preparar uma rodada

1. Use o [guia consolidado](../../../docs/reforma/guia-execucao-cantina-mbb.md) para ativar o ambiente Python e instalar as dependências.
2. Na raiz do laboratório, execute `python laboratorio/cantina-evolutiva/previa_local.py`.
3. Aguarde o servidor iniciar. Abra os dois endereços impressos no terminal, no mesmo computador. O banco começa novo; a data do ensaio é 07/10/2026.
4. Registre commit, navegador/versão, sistema operacional, largura e quem conduziu o ensaio. Uma avaliação do agente não substitui compreensão com participante.

Recarregar a página mantém os dados desta sessão. Encerrar o terminal descarta o banco; salve evidências antes de Ctrl+C. Para repetir com estoque e cupom iniciais, encerre e inicie outra sessão. Não use o banco de trabalho.

## Aplicação — seguir esta ordem, sem reiniciar entre os casos

| Caso / subetapa | Ação | Resultado esperado | Obtido / evidência |
|---|---|---|---|
| U01 / 1.6 | Abrir a aplicação | Cinco produtos; Água a R$ 3,00, estoque 20 | Não executado |
| U02 / 1.6 e 5.3 | Usando só teclado, escolher Água, informar 2, Adicionar e Registrar pedido sem cupom | Pedido #1, subtotal/total R$ 6,00, estado Novo, Água com saldo 18 | Não executado |
| U03 / 1.6 | Recarregar a página; informar 1 em Número do pedido e Consultar | Mesmo pedido, duas unidades de Água e total R$ 6,00; saldo permanece 18 | Não executado |
| U04 / 3.5 | Avançar um estado por vez até Entregue | Confirmado → Em preparação → Pronto → Entregue; quatro eventos no histórico; botão final desabilitado | Não executado |
| U05 / 2.5 | Adicionar uma Água; informar MBB10 e tentar registrar | Recusa por mínimo R$ 30,00; nenhum pedido novo ou consumo do cupom; saldo permanece 18 | Não executado |
| U06 / 2.5 | Remover a Água do carrinho, adicionar 10 Águas, manter MBB10 e registrar | Pedido #2: subtotal R$ 30,00, desconto R$ 3,00, total R$ 27,00, estado Novo; saldo Água 8 | Não executado |
| U07 / 2.5 | Adicionar uma Água e tentar registrar com MBB10 outra vez | Cupom já utilizado; saldo permanece 8; não gera pedido #3 | Não executado |
| U08 / 2.5 | Manter uma Água no carrinho, trocar cupom por NAOEXISTE e tentar registrar | Cupom não encontrado; saldo permanece 8; não gera pedido #3 | Não executado |
| U09 / 5.3 e 5.5 | Remover o item; tentar adicionar quantidade 0 e depois 11; pedir ao participante que explique a mensagem antes de ajudar | Recusa da quantidade; mensagem compreensível, possibilidade de corrigir; anotar a explicação real | Não executado |

## Acessibilidade e percurso

| Verificação / subetapa | Como observar | Registro |
|---|---|---|
| 360 px / 5.3 | Ajustar a largura da área da página a 360 px; conferir texto, botões, campos, tabelas e rolagem da página | Não executado |
| Teclado e foco / 5.3 | Usar Tab, Shift+Tab e Enter; conferir ordem lógica, foco visível e ausência de bloqueio; observar foco após cada ação/recusa | Não executado |
| Leitura / 5.3 | Com leitor de tela disponível, conferir nomes dos campos/botões e anúncio dos resultados; registrar ferramenta. Sem leitor, marcar não executado | Não executado |
| Identificação / 5.3 | Com leitor de tela, verificar Quantidade de Água/Suco e Adicionar Água/Suco ao pedido, sem confundir os produtos | Não executado |
| Atalho / 5.3 | Usar Tab no início e ativar Ir para o conteúdo; conferir foco no conteúdo e sua indicação | Não executado |
| Correção e remoção / 5.3 | Recusar uma quantidade e observar foco no campo; remover item e conferir foco no botão restante ou cupom, além da mensagem | Não executado |
| Requisições e foco / 5.3 | Registrar/consultar pelo teclado e conferir foco no resultado; avançar estado e verificar botão seguinte ou resultado final. Durante espera, escolher outro campo e conferir que ele conserva o foco. Atualizar produtos enquanto uma quantidade está em edição e conferir foco/valor | Não executado |
| Zoom / 5.3 | Ampliar a 200%; conferir acesso a todo texto e controles | Não executado |
| Navegação / 4.9 | Abrir o percurso e acompanhar o mesmo pedido em Análise, BD, Programação, Web/API, QTS e Git; conferir links, menu, código copiado e retorno | Não executado |
| Compreensão / 4.9 e 5.5 | Pedir ao participante que explique como requisito, tabelas, função e teste tratam o mesmo pedido; anotar dúvidas antes de orientar | Não executado |

O terminal responder a HTTP não comprova nenhum desses resultados. Um caso com falha deve registrar esperado, obtido, passos, gravidade e evidência; não mudar seu resultado para aprovado após apenas reler o código.

## Critério de encerramento

Salvar a tabela preenchida com commit e ambiente; registrar falhas e correções necessárias. Depois encerrar a prévia. VisuAlg será testado depois pelo Professor Ronaldo; não bloqueia os demais ensaios. Registrar seu resultado na 4.8 quando ocorrer. O parecer final deve identificar qualquer ensaio que permaneça pendente; não declarar verificação completa sem evidência.

Situação atual: iniciador local preparado e ensaiado via HTTP; uso em navegador, leitor de tela e participação humana continuam não executados.
