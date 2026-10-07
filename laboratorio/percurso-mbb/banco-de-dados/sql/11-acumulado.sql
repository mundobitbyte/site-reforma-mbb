SELECT id, subtotal_centavos - desconto_centavos AS total_centavos,
       SUM(subtotal_centavos - desconto_centavos)
           OVER (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS acumulado_centavos
FROM resumo_pedido
ORDER BY id;
