-- Cantina Horizonte evolutiva: modelo físico da primeira fatia.
-- Executar em banco próprio de laboratório, nunca no banco da v1.
-- Toda conexão da aplicação deverá habilitar foreign_keys antes da transação.
PRAGMA foreign_keys = ON;

CREATE TABLE produto (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL CHECK (length(trim(nome)) > 0),
    preco_centavos INTEGER NOT NULL
        CHECK (typeof(preco_centavos) = 'integer' AND preco_centavos >= 0),
    estoque INTEGER NOT NULL
        CHECK (typeof(estoque) = 'integer' AND estoque >= 0)
);

CREATE TABLE pedido (
    id INTEGER PRIMARY KEY,
    criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status TEXT NOT NULL DEFAULT 'Novo'
        CHECK (status IN ('Novo', 'Confirmado', 'Em preparação', 'Pronto', 'Entregue'))
);

CREATE TABLE item_pedido (
    pedido_id INTEGER NOT NULL REFERENCES pedido(id),
    produto_id INTEGER NOT NULL REFERENCES produto(id),
    quantidade INTEGER NOT NULL
        CHECK (typeof(quantidade) = 'integer' AND quantidade BETWEEN 1 AND 10),
    preco_unitario_centavos INTEGER NOT NULL
        CHECK (typeof(preco_unitario_centavos) = 'integer' AND preco_unitario_centavos >= 0),
    PRIMARY KEY (pedido_id, produto_id)
);

-- Subtotal derivado dos preços históricos dos itens, não do cadastro atual.
-- A aplicação só confirma pedido quando existe ao menos um item.
CREATE VIEW resumo_pedido AS
SELECT p.id, p.criado_em, p.status,
       COALESCE(SUM(i.quantidade * i.preco_unitario_centavos), 0) AS subtotal_centavos
FROM pedido AS p
LEFT JOIN item_pedido AS i ON i.pedido_id = p.id
GROUP BY p.id, p.criado_em, p.status;
