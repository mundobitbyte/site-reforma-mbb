-- Migração adicional do laboratório. Execução transacional pelo serviço.
CREATE TABLE cupom (
    codigo TEXT PRIMARY KEY CHECK (length(trim(codigo)) > 0),
    percentual INTEGER NOT NULL
        CHECK (typeof(percentual) = 'integer' AND percentual BETWEEN 1 AND 100),
    minimo_centavos INTEGER NOT NULL
        CHECK (typeof(minimo_centavos) = 'integer' AND minimo_centavos >= 0),
    validade TEXT NOT NULL,
    utilizado INTEGER NOT NULL DEFAULT 0 CHECK (utilizado IN (0, 1))
);
ALTER TABLE pedido ADD COLUMN cupom_codigo TEXT REFERENCES cupom(codigo);
ALTER TABLE pedido ADD COLUMN desconto_centavos INTEGER NOT NULL DEFAULT 0
    CHECK (typeof(desconto_centavos) = 'integer' AND desconto_centavos >= 0);
DROP VIEW resumo_pedido;
CREATE VIEW resumo_pedido AS
SELECT p.id, p.criado_em, p.status, p.cupom_codigo, p.desconto_centavos,
       COALESCE(SUM(i.quantidade * i.preco_unitario_centavos), 0) AS subtotal_centavos
FROM pedido AS p
LEFT JOIN item_pedido AS i ON i.pedido_id = p.id
GROUP BY p.id, p.criado_em, p.status, p.cupom_codigo, p.desconto_centavos;
PRAGMA user_version = 2;
