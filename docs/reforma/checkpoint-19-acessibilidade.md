# Reforma Mundo bit Byte — checkpoint 19

O teste do VisuAlg ficará para execução posterior pelo Professor Ronaldo, conforme sua instrução de 07/10/2026. Essa pendência não bloqueia os demais trabalhos; nenhum resultado VisuAlg foi declarado aprovado. O depurador Python já foi executado no checkpoint 17.

Neste checkpoint avancei na preparação da acessibilidade da **interface web da Cantina**, subetapa 5.3. Os botões citados pertencem a essa página web. Nenhum arquivo de algoritmo VisuAlg recebeu botões ou foi alterado nesta rodada.

| Macroetapa | Concluídas/total | Próxima subetapa |
|---|---:|---|
| Pedido persistente | 5/6 | 1.6: uso em navegador |
| Cupom | 4/5 | 2.5: uso em navegador |
| Estados do pedido | 4/5 | 3.5: uso em navegador |
| Currículo | 7/9 | 4.8: teste VisuAlg posterior do professor; 4.9: revisão em uso |
| Entrega | 2/6 | **5.3 atual**: confirmação real de acessibilidade; 5.4 preparada, depois 5.5–5.6 |

**22/31 concluídas; 9 pendentes.** VisuAlg continua incluído na pendência 4.8. Não alterei o denominador nem marquei ensaio sem resultado como concluído.

## Correções no laboratório

- Campos e botões agora distinguem os produtos: Quantidade de Água/Suco e Adicionar Água/Suco ao pedido, mantendo o texto visível no nome acessível.
- A página inclui Ir para o conteúdo, com destino no conteúdo principal e indicação de foco.
- Quantidade inválida ou acima do estoque dirige foco ao campo a corrigir.
- Remover um item dirige foco ao botão de remoção remanescente ou ao campo de cupom, quando o carrinho fica vazio. A mensagem informa o produto removido.
- Resultados de pedido/consulta declaram mensagem de estado com texto completo para anúncio. A confirmação do anúncio com leitor de tela ainda não foi feita.

Os arquivos HTML/CSS/JavaScript completos mostrados em Web/API foram atualizados junto com suas fontes. Assim, o aluno copia a mesma versão usada pela aplicação. A estrutura curricular e suas 81 etapas de ensino permanecem iguais.

## Evidência e limites

Seis novos casos foram executados no Node com o JavaScript real e elementos substitutos de teste. Na versão anterior, cinco casos falharam e um passou; na versão corrigida, os seis passaram. Foram conferidos identificação de produtos, foco em recusa de quantidade/estoque, remoção do último item, manutenção do produto restante e bloqueio de remoção durante envio. Esse ensaio é de lógica; não usa DOM, navegador ou leitor de tela e não prova comportamento visual ou foco nativo.

A sintaxe JavaScript e a semântica do novo atalho/regiões de estado foram conferidas. O verificador estrutural passou: 108 páginas, 3398 referências locais, 104 botões de cópia e 48 arquivos canônicos, sem erros. Os dois hashes SQL/BD protegidos e os arquivos da API/serviço continuam iguais. Não foram repetidas as suítes antigas ou o ensaio do iniciador.

Os detalhes estão em `docs/reforma/evidencia-interface-19.json`, e os casos em `laboratorio/cantina-evolutiva/frontend/tests/acessibilidade.test.cjs`.

## Próximos critérios

VisuAlg está reservado ao professor. Para confirmar 5.3 e os fluxos de pedido, cupom e estados, ainda é preciso abrir a prévia em um navegador que alcance o servidor e registrar os resultados do roteiro. O servidor local integrado já foi preparado no checkpoint 18. Teclado, largura de 360 px, zoom, leitor de tela e compreensão com participante continuam sem resultado real.

Não há aprovação pendente. Se a execução em navegador não puder ser feita neste ambiente, essa rodada precisará ocorrer em um computador compatível; não será marcada como concluída a partir dos testes Node.

Todas as alterações foram restritas a `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O repositório oficial `mundobitbyte/site`, domínio e Firebase permanecem intactos. Nenhuma publicação externa ocorreu.

Referências de orientação: [W3C — nome dos controles](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html), [atalho de conteúdo](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) e [ordem de foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html). Esta rodada não declara conformidade WCAG completa.
