SELECT p.id AS pedido_id, p.status, pr.nome,
       i.quantidade, i.preco_unitario_centavos,
       i.quantidade * i.preco_unitario_centavos AS valor_item_centavos
FROM pedido AS p
JOIN item_pedido AS i ON i.pedido_id = p.id
JOIN produto AS pr ON pr.id = i.produto_id
WHERE p.id = 1
ORDER BY i.produto_id;
