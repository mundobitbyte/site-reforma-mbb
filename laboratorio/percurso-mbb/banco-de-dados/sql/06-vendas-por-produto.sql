SELECT p.id, p.nome, COUNT(i.pedido_id) AS pedidos_com_produto,
       COALESCE(SUM(i.quantidade), 0) AS unidades_vendidas,
       COALESCE(SUM(i.quantidade * i.preco_unitario_centavos), 0) AS subtotal_vendido_centavos
FROM produto AS p
LEFT JOIN item_pedido AS i ON i.produto_id = p.id
GROUP BY p.id, p.nome
ORDER BY p.id;
