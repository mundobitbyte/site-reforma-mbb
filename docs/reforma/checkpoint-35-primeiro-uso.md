# Checkpoint 35 — primeira sessão com participante e correções

## Decisão
A sessão de 08/10/2026 ocorreu, mas exigiu ajuda em pontos centrais. **Revisar e observar novamente os pontos afetados; sem aprovação de compreensão independente.** Contagem preservada: **28/31**, três abertas: 4.9, 5.5 e 5.6. A 5.5 passa de bloqueada por ausência de participante a parcial, com sessão realizada e correções a reavaliar.

Participante: aluna do terceiro ano Técnico em Desenvolvimento de Sistemas, conhecimentos básicos, segundo o professor. Registro fornecido pelo professor; sem gravação, captura desta sessão, transcrição individual completa, duração ou versão de código confirmada no Windows. Não atribuir dificuldades exclusivamente à aluna ou ao material; tempo disponível, condução e contexto podem ter influenciado. A primeira sessão não prova efeito das correções abaixo.

## Observações recebidas
| Ponto | Registro do professor | Resultado que pode ser afirmado |
|---|---|---|
| Quantidade zero e inclusão | Acertou sem ajuda; digitou a quantidade e demorou a perceber Adicionar | Recusa compreendida por relato; distinção quantidade/inclusão gerou hesitação |
| Cupom | Dificuldade de encontrar e perceber que era necessário digitar | Descoberta e preenchimento difíceis; explicação final da recusa não foi transcrita |
| Registro | Tentou registrar antes de adicionar; depois conseguiu | Uso concluído após tentativa incorreta; ID/total exatos não informados neste registro |
| Consulta após recarregar | Controle abaixo da área visível; professor mostrou; não lembrava nem sabia qual pedido buscar | Ajuda necessária para descoberta e identificação; não foi recuperação independente |
| Avanço | Tentou pedido 2 sem êxito; orientada a 1, avançou duas vezes sem ler; depois explicou e fez certo | Uso e leitura exigiram orientação; sem inferir falha do servidor pela tentativa do ID 2 |
| Percurso, cinco perguntas | Não percebeu de início a interdisciplinaridade; professor indicou links; respostas difíceis de encontrar | Localização e compreensão independentes não demonstradas; respostas finais não transcritas |
| Consultar estoque | Professor relata que não entendeu/não conseguiu usar Atualizar estoque | Não há mensagem de erro, tráfego ou captura para concluir defeito técnico do botão |
| Condição da sessão | Professor percebe tensão/ansiedade de quem usa pela primeira vez em teste | Observação contextual do professor; sem diagnóstico ou causalidade comprovada |

## Mudanças do laboratório
- Caminho visível em três etapas, com atalhos para escolher, revisar/registrar e consultar/acompanhar. Consulta fora do bloco de produtos; destino direto disponível no início. Cabeçalho não passou a ocupar a tela de forma fixa.
- Quantidade e Adicionar ao pedido explicados no ponto de uso; mensagem de pedido vazio ensina a ação e dirige foco ao primeiro produto.
- Cupom recebe rótulo explícito para digitação e instrução para deixá-lo vazio quando não houver desconto.
- Último ID confirmado/consultado lembrado em sessionStorage da mesma aba/origem. Ao recarregar, preenche o campo, mas só uma nova consulta confirma o estado. IDs inválidos ignorados; armazenamento bloqueado não impede usar. Não guarda carrinho ou estado como confirmação de venda. Reiniciar o servidor temporário continua descartando pedidos; um número lembrado pode deixar de existir nessa nova base.
- Após avanço, foco no novo estado para leitura; cada clique ainda pede uma transição válida, sem introduzir confirmação adicional ou impedir novo clique após uma resposta. Clique duplo humano não foi simulado em navegador nesta rodada.
- Atualizar estoque renomeado Consultar estoque atual, com explicação de que não acrescenta produtos e retorno visível junto ao controle. Mantém o carrinho e a proteção de foco.
- Entrada do percurso explica o mesmo projeto nas seis disciplinas e oferece mapa por pergunta, além das entradas dos cursos. Situação administrativa recolhida em detalhes. Seis páginas recebem ligação curta entre ação na aplicação e conceito; matriz QTS explica como ler Caso/RF/Cenário.
- Na revisão do retorno do percurso, a construção relativa ./api dependia do caminho da página: a entrada /curso/.../frontend/index.html apontaria para uma API inexistente. Cliente agora usa /api na mesma origem, conforme as rotas reais do servidor. Caso de lógica cobre abrir por esse retorno e registrar; caminho externo/servidor preservado.
- Blocos completos de HTML/CSS/JS na página de código integrado sincronizados com as fontes.

API, serviço, regras do pedido/cupom/estados, programas Python/VisuAlg e scripts SQL não mudaram. Visual enxuto e identidade preservados na implementação; resultado visual novo ainda requer observação.

## Verificação realizada
- **23/23 casos Node** com elementos substitutos: 17 existentes reexecutados porque a interface mudou, expectativa de foco intermediário atualizada, seis casos novos. Conferem pedido vazio sem POST, restauração do ID e consulta sem repetir venda, armazenamento bloqueado, números inválidos e retorno de estoque com carrinho preservado e rotas API no retorno do percurso.
- **15 observações HTTP com TestClient/FastAPI real**, base SQLite temporária: doze rotas 200 e três conferências de fontes byte a byte. Não são requisições por rede ou testes de navegador.
- Verificador estrutural e fontes canônicas: consultar verificacao-checkpoint-35.json; hashes SQL protegidos intactos.
- A tentativa de Chromium local não iniciou porque o executável não está instalado. O navegador remoto retornou ERR_CONNECTION_REFUSED para a prévia local. A própria conexão TCP entre execuções também recusou; por isso as observações HTTP foram feitas no TestClient, sem alterar rede ou publicar uma prévia.
- Não reexecutados os 89 testes Python da aplicação, programas VisuAlg/pdb ou a rodada antiga do Narrador; não declarar esses resultados como novos.

## Próxima observação e escopo
Usar a nova cópia de código e o [roteiro curto de reteste](reteste-primeiro-uso.md). Verificar descoberta do fluxo/cupom/consulta, recuperação do ID, leitura após avanço, retorno de estoque e orientação curricular. Pode usar a mesma aluna; registrar que já teve contato e ajuda na primeira sessão. Isso mede melhora para essa participante, não descoberta sem contato prévio. Sem publicação ou escrita no repositório oficial/Firebase/domínio.
