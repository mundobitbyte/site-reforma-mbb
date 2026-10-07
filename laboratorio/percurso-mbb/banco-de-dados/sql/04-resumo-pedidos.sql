SELECT id, status, subtotal_centavos, desconto_centavos,
       subtotal_centavos - desconto_centavos AS total_centavos
FROM resumo_pedido
ORDER BY id;
