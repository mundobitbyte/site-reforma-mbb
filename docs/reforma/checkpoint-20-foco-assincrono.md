# Reforma Mundo bit Byte — checkpoint 20

Avancei na preparação da acessibilidade da interface web da Cantina, **subetapa 5.3**. O foco agora tem destino após registro, consulta e mudança de estado, preservando outro controle que a pessoa tenha escolhido durante a espera. A atualização dos produtos também preserva o campo de quantidade em edição, seu valor e seu foco.

| Macroetapa | Concluídas/total | Próxima |
|---|---:|---|
| Pedido persistente | 5/6 | 1.6: navegador |
| Cupom | 4/5 | 2.5: navegador |
| Estados | 4/5 | 3.5: navegador |
| Currículo | 7/9 | 4.8: VisuAlg posterior pelo professor; depois 4.9 |
| Entrega | 2/6 | **5.3 atual**; 5.4 preparada, depois 5.5–5.6 |

**22/31 concluídas, 9 pendentes.** A contagem não muda porque o critério da 5.3 ainda exige confirmação em navegador/leitor de tela. O VisuAlg permanece para teste posterior do Professor Ronaldo, sem bloquear os demais trabalhos. Nenhum arquivo .alg foi alterado.

## Comportamento implementado

- Registrar com sucesso: foco no resultado do pedido. Recusa: retorno ao botão de registrar após reabilitação.
- Consultar: foco no resultado ou na mensagem de recusa depois de reabilitar os controles. Entrada inválida dirige foco ao número do pedido.
- Avançar: foco no botão da próxima etapa; ao chegar a Entregue, foco no resultado, pois o botão fica desabilitado. Conflito de estado dirige foco à mensagem de nova consulta.
- Outra escolha durante a espera: a conclusão da requisição não assume foco de outro controle. Resposta de consulta superada não substitui resultado/foco atual.
- Atualizar produtos: reconstrói o campo focado com a quantidade em edição; se o botão Adicionar passou a ficar desabilitado por falta de estoque, o destino é a quantidade do mesmo produto.

O resultado consultado aceita foco programático, mas não adiciona uma parada extra à ordem normal de Tab. A indicação visual de foco foi preparada no CSS. Esses comportamentos foram conferidos na lógica; o funcionamento nativo em navegador ainda não foi observado.

## Evidência

Foram acrescentados 11 casos assíncronos à mesma interface. Aplicados à fonte do checkpoint 19, nove falharam e dois passaram. Com as correções atuais, os **17 casos da interface passaram**: seis do checkpoint 19 mais os 11 novos. Os seis anteriores foram repetidos porque o JavaScript e seu suporte de testes mudaram; isso foi verificação de regressão, não repetição das suítes antigas do servidor/clientes. O iniciador local também não foi reexecutado.

Os testes executam o JavaScript real em Node vm com elementos substitutos; não possuem DOM de navegador, layout, teclado nativo ou leitor de tela. A simulação de perda de foco do suporte é um cenário de lógica, não prova do comportamento de um navegador específico. Os envios de registro e avanço conservaram seus contratos nos casos conferidos. API, serviço e hashes protegidos de SQL/BD permanecem iguais.

Registro: `docs/reforma/evidencia-interface-20.json`. Conjunto: `laboratorio/cantina-evolutiva/frontend/tests/acessibilidade.test.cjs`.

O código completo exibido em Web/API foi sincronizado com as fontes HTML/CSS/JavaScript. A verificação estrutural passou com 108 páginas, 3398 referências locais, 104 botões de cópia e 48 arquivos canônicos, sem erros. Permanecem 81 etapas de ensino.

## O que ainda precisa de execução real

Para confirmar a acessibilidade e os fluxos, é necessário um navegador que alcance a prévia e uma rodada com o roteiro manual. O iniciador do checkpoint 18 já reúne aplicação, API e percurso com banco fictício temporário:

```bash
python laboratorio/cantina-evolutiva/previa_local.py
```

Com a cópia experimental e o ambiente Python preparado, esse comando deve ser executado no computador onde a prévia será aberta. O guia consolidado contém a instalação, os endereços e a porta alternativa. O roteiro agora inclui os cenários de foco durante requisições e atualização de produtos. Uso com participante continua pendente.

Não há autorização pendente. O bloqueio de acesso entre o navegador disponível e o servidor permanece; não foi repetida a mesma tentativa recusada. Nenhuma validação visual foi declarada concluída.

Todas as alterações foram salvas somente no laboratório privado `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`. O repositório oficial `mundobitbyte/site`, domínio e Firebase permanecem intactos. Nenhuma publicação externa ocorreu.
