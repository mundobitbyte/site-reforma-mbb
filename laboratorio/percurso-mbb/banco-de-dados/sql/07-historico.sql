SELECT p.id AS pedido_id, p.status,
       h.estado_anterior, h.estado_novo, h.alterado_em
FROM pedido AS p
LEFT JOIN historico_status AS h ON h.pedido_id = p.id
ORDER BY p.id, h.id;
