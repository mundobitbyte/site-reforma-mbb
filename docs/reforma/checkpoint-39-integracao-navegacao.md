# Checkpoint 39 — navegação integrada na cópia experimental

## Autorização e ordem de trabalho
Em 08/10/2026, professor autorizou prosseguir e esclareceu: não fará reteste com aluno antes de tudo ficar pronto; considera a versão atual boa. Essa instrução substitui a ordem anterior que colocava o reteste antes da integração. Desenvolvimento e integração prosseguem; não declarar um reteste que não ocorreu nem pedir aluno como condição para continuar.

## Resultado implementado
- Home experimental ganhou a entrada Cantina Horizonte — percurso integrado, com Começar o percurso e seis links de disciplinas. Está dentro da seção de áreas, respeitando o funcionamento existente de abrir módulos e voltar.
- Programação e Desenvolvimento também recebeu um cartão do percurso. Cartões antigos, IDs, categorias e js/home.js preservados.
- Entrada do percurso ganhou Áreas do site, além do retorno existente à aplicação. Disciplinas já retornavam ao percurso. Os dois links do cabeçalho podem quebrar linha em janela estreita.
- A prévia serve a home real em /curso/index.html e mantém aplicação/API na raiz. O terminal imprime o novo endereço. Somente seis arquivos da home são acrescentados à lista explícita; não foi aberto acesso genérico à raiz ou à pasta Meu MbB.
- Scripts de conta recebem a configuração vazia já existente na cópia experimental. Não houve configuração ou conexão autorizada com Firebase de produção. Conta/pesquisa e outras áreas fora da lista da prévia não fazem parte deste ensaio.
- Aplicação, mensagens e rolagem do checkpoint 38 não foram alteradas. Conteúdo curricular permanece o mesmo, exceto o novo retorno da entrada. SQL protegido permanece intacto.

## Verificação técnica
Dez casos pytest/TestClient aprovados: home e recursos reais, entrada/seis disciplinas/retornos, retorno à aplicação e API, seis caminhos bloqueados e rejeição de POST na home. Não são navegação/renderização de navegador. Aviso de depreciação Starlette/httpx não produziu falha; dependências não foram trocadas nesta tarefa.

Home conferida com parser: HTML equilibrado, IDs únicos, um h1. Percurso estrutural: 108 HTML, 3432 referências, 104 botões de cópia, 48 fontes canônicas em 52 blocos; sem erro e hashes protegidos intactos. A suíte Node do frontend não foi repetida, pois seu código não mudou; os 25 casos aprovados pertencem ao registro 38.

## Comparação com a produção, somente leitura
Referência oficial lida: mundobitbyte/site, main, commit fb24a793b728af346f46fc2bf9d92b96d78791b4. Conferidos cinco arquivos relevantes. Home difere apenas pela versão de cache do CSS, entrada de percurso e cartão; CSS home recebe apenas o complemento de 17 linhas. js/home.js, pages/bancodedados.html e assets/seguranca-dados/mysql-general-log-lab.sql estão idênticos à referência oficial. Nenhuma escrita, branch, PR, configuração ou publicação no oficial. A comparação não cobre todos os arquivos nem autoriza copiar a versão integral do laboratório para produção.

## Estado e continuação
A implementação da navegação está concluída na cópia experimental e pronta para revisão. Não houve revisão visual nova da home integrada em navegador nesta rodada. O reteste com aluno está reservado para depois de tudo pronto, conforme orientação do professor; não bloqueia desenvolvimento ou integração.

Laboratório mantém **28/31**, posição **5.5**: 4.9 e 5.5 ainda não recebem aprovação de compreensão independente após correções, e 5.6 aguarda decisão final. Essa contagem não inclui publicação. Depois da revisão da versão completa e do reteste reservado, consolidar o parecer e receber autorização explícita para qualquer publicação. [Navegação e ordem atual](integracao-navegacao-preparacao.md). [Resultados técnicos](verificacao-checkpoint-39.json).
