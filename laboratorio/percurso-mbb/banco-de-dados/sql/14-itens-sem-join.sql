SELECT pedido_id, produto_id, quantidade, preco_unitario_centavos
FROM item_pedido
WHERE pedido_id = 1
ORDER BY produto_id;
