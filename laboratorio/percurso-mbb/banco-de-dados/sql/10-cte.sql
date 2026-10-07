WITH totais AS (
    SELECT id, subtotal_centavos - desconto_centavos AS total_centavos
    FROM resumo_pedido
)
SELECT id, total_centavos
FROM totais
WHERE total_centavos >= 1000
ORDER BY id;
