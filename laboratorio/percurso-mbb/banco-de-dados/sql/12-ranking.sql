WITH vendas AS (
    SELECT p.id, p.nome, COALESCE(SUM(i.quantidade), 0) AS unidades
    FROM produto AS p
    LEFT JOIN item_pedido AS i ON i.produto_id = p.id
    GROUP BY p.id, p.nome
)
SELECT id, nome, unidades, RANK() OVER (ORDER BY unidades DESC) AS posicao
FROM vendas
ORDER BY posicao, id;
