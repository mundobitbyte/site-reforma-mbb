# Checkpoint 38 — resultado final visível e preparação da navegação

## Relato do professor
Após baixar a versão 37 e receber o roteiro de execução na porta 8006, professor respondeu “tudo certinho”. Em seguida apontou que a quarta linha final do avanço não aparecia na área visível e dispensou outro teste manual para esse ajuste pequeno. Não informou individualmente zoom, largura, Narrador ou um novo participante. Registrar aprovação visual geral do ajuste 37, com a ressalva do final do histórico; não converter em aprovação pedagógica da aluna.

Professor também confirmou entender que a consulta de estoque usa a mesma linha Estoque dos cartões e questionou sua utilidade. O código já busca os produtos ao carregar a tela e após venda registrada. O botão é auxiliar: permite repetir a busca após falha ou recuperar valores alterados por vendas em outra aba. Não há atualização automática contínua ou reposição por esse controle.

## Alteração
Após avanço confirmado para Entregue, o cliente preserva o foco no resultado e solicita rolagem mínima para a última linha do histórico, com uma margem inferior. Não cria uma quinta transição, novo estado ou botão de avanço: a quarta mudança existente é Pronto → Entregue. O botão entregue continua desabilitado.

A rolagem ocorre somente quando a resposta ainda pertence à consulta atual e o foco pode ser recuperado pela ação. Se a pessoa escolheu outro controle durante a espera, a tela e o foco não são deslocados. Sem movimento animado. Ajuda do estoque explicita a atualização automática já existente e o caráter auxiliar da nova consulta. Regras de servidor e dados permanecem as existentes.

## Verificação e limites
Resultados em [verificacao-checkpoint-38.json](verificacao-checkpoint-38.json). Dois casos de lógica exercitam a entrega com quatro mudanças e a preservação do foco/rolagem de quem escolheu outro controle enquanto aguardava. Esses ensaios substituem elementos do navegador; não medem pixels nem comprovam renderização ou anúncio do Narrador. Professor dispensou nova rodada manual para esse pequeno ajuste; não exigir repetição dos ensaios já concluídos.

## Próxima fase preparada
[Mapa concreto de integração](integracao-navegacao-preparacao.md) preparado com caminhos existentes na cópia experimental, seis destinos e limites da execução local. Links de entrada do site ainda não foram alterados. Preparação não equivale a integração concluída nem publicação.

Contagem **28/31**, posição **5.5**. Restam **4.9** (compreensão do percurso revisado), **5.5** (uso/compreensão dos pontos corrigidos com participante) e **5.6** (parecer). Conferência visual do professor não substitui reteste da aluna após as dificuldades registradas no 35. Produção e repositório oficial intactos.
