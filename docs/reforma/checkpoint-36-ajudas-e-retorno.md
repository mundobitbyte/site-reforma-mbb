# Checkpoint 36 — ajudas sob demanda, retorno e espaço vertical

## Pedido e resultado
Professor apontou excesso de texto explicativo, mistura entre quantidade e consulta de estoque, ausência de retorno após os atalhos e espaço vertical excessivo no título. Revisão aplicada somente à interface experimental e ao código completo exibido no percurso.

- Seis explicações começam recolhidas em details/summary: adicionar produtos, consultar estoque, registrar, cupom, reencontrar pedido e avançar. O título da ajuda fica próximo à ação e abre/fecha o texto com o controle nativo, sem novo script.
- Escolher produtos tem sua ajuda própria. Consultar estoque fica em bloco separado, com ajuda e retorno de operação juntos. O espaço de status vazio não ocupa uma linha; quando houver mensagem, permanece visível.
- Atalhos receberam destino de retorno, com três links Voltar aos atalhos, um no começo de cada etapa. Destino focável; IDs originais preservados.
- Cabeçalho com padding vertical de 2rem para .85rem e altura de linha do h1 em 1.2. Margem inicial da área principal de 2rem para 1rem; espaçamento da grade de 2rem para 1.25rem. Não há altura fixa, corte de conteúdo ou redução da altura de linha dos textos comuns.
- Carrinho vazio mostra apenas Nenhum produto adicionado. A explicação aparece na ajuda; a mensagem de tentativa inválida permanece visível e orienta a correção.
- Rótulos, itens, número do pedido, estado, resultado, recusa e feedback de estoque permanecem visíveis. Ajudas continuam associadas aos campos por aria-describedby. summary recebe foco visível.
- HTML, CSS e pequeno texto de estado vazio no JS sincronizados na página de código integrado. Regras de venda, API, banco, SQL, memória do ID e controle de avanço não mudaram.

## Verificação e limites
23/23 casos existentes de lógica Node passaram; não foram criados novos testes que apenas reproduzam marcação ou estilo. Conferência estrutural confirma HTML equilibrado, seis ajudas fechadas, três retornos e referências de âncoras/descrições existentes. Verificador do percurso confirma 108 páginas, 3431 referências e 48 fontes canônicas completas, em 52 blocos de cópia; hashes protegidos intactos.

Nenhum novo navegador, Narrador ou participante foi executado nesta rodada. A limitação de acesso do navegador à prévia local, descrita no checkpoint 35, continua. A redução visual real e a usabilidade das ajudas/retornos precisam ser conferidas no Windows. Não converter os valores CSS em altura medida de tela.

## Continuidade
Contagem **28/31**, três abertas: 4.9, 5.5, 5.6. A primeira sessão da aluna permanece como evidência de dificuldade; a revisão não constitui aprovação. Usar a nova cópia e o [reteste dos pontos corrigidos](reteste-primeiro-uso.md), agora com porta 8005 para distinguir a aba anterior. Não repetir VisuAlg/pdb e toda a rodada concluída. Sem escrita no repositório oficial, sem Firebase, domínio ou publicação.
