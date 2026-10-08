SELECT i.pedido_id, p.nome, i.quantidade
FROM item_pedido AS i
JOIN produto AS p ON p.id = i.produto_id
WHERE i.pedido_id = 1
ORDER BY p.id;
