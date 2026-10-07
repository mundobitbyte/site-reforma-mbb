EXPLAIN QUERY PLAN
SELECT estado_anterior, estado_novo, alterado_em
FROM historico_status
WHERE pedido_id = 1
ORDER BY id;
