# Checkpoint 26 — SQL UTF-8 no Windows

O log do professor confirmou criação e consulta de pedidos, primeiro avanço com HTTP 200 e avanços posteriores com HTTP 503 para #3/#4. A sessão Narrador confirmou parcialmente controles, recusa e consulta; a 5.3 continua aberta.

Reprodução com SQLite real e leitura padrão cp1252: o schema inicial e o histórico passam a exigir `Em preparaÃ§Ã£o`, bloqueando o valor correto. Dois testes específicos falharam antes, um na base nova e outro na migração v2. UTF-8 explícito nas três leituras do serviço eliminou os dois erros: sequência até Entregue, histórico, estoque e reabertura verificados. SQLs preservados. A reprodução é compatível com o comportamento relatado; não houve inspeção direta do banco do Windows.

[Observações, log e resultado](evidencia-sql-utf8-26.json) · [Guia de retomada](guia-execucao-cantina-mbb.md). A correção precisa ser confirmada no computador do professor usando banco temporário novo; o ZIP antigo pode ser iniciado com `-X utf8` numa segunda porta. Isso não repara automaticamente a base anterior.

**26/31 concluídas; cinco pendentes.** Pedido 6/6; Cupom 5/5; Estados 5/5; Currículo 7/9; Entrega 3/6. Nenhum teste humano adicional foi inventado. Produção, Firebase e SQL protegido intactos.
