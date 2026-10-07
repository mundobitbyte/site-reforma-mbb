SELECT p.id, p.nome
FROM produto AS p
LEFT JOIN item_pedido AS i ON i.produto_id = p.id
WHERE i.pedido_id IS NULL
ORDER BY p.id;
