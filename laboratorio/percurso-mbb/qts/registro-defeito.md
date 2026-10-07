# D-Q04 — Quantidade negativa na v1
Requisito: RF-03; caso Q-04. Severidade/ prioridade propostas: alta/alta no contexto de valor e saldo de venda.
Ambiente observado: TestClient Python, banco SQLite temporário; não houve navegador.
Pré-condição: v1 nova, Água id 1, preço R$ 3, estoque 20.
Passos: POST /api/pedidos com {"itens":[{"produto_id":1,"quantidade":-1}],"cupom":null}.
Esperado: recusar e preservar banco.
Obtido: 201; subtotal e total -3.0; item negativo persistido. A v1 permanece intencionalmente sem correção.
Evidência: evidencias-comparacao.json, Q-04, versão v1.
Confirmação na evolução: 422 e snapshot completo do banco inalterado, no mesmo cenário com nova base.
Isso não corrige o arquivo original nem substitui a regressão de limites/estoque/cupom/estados.
Causa humana não foi investigada. Função validar_quantidade é ponto técnico para revisão.
