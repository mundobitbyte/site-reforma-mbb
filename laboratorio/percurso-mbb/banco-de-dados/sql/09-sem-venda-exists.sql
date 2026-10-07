SELECT p.id, p.nome
FROM produto AS p
WHERE NOT EXISTS (
    SELECT 1 FROM item_pedido AS i WHERE i.produto_id = p.id
)
ORDER BY p.id;
