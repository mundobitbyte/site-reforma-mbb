-- Registra apenas mudanças realizadas depois desta evolução.
-- Não inventa eventos anteriores para pedidos já existentes.
CREATE TABLE historico_status (
    id INTEGER PRIMARY KEY,
    pedido_id INTEGER NOT NULL REFERENCES pedido(id),
    estado_anterior TEXT NOT NULL,
    estado_novo TEXT NOT NULL,
    alterado_em TEXT NOT NULL DEFAULT (datetime('now')),
    CHECK (
        (estado_anterior = 'Novo' AND estado_novo = 'Confirmado') OR
        (estado_anterior = 'Confirmado' AND estado_novo = 'Em preparação') OR
        (estado_anterior = 'Em preparação' AND estado_novo = 'Pronto') OR
        (estado_anterior = 'Pronto' AND estado_novo = 'Entregue')
    )
);
CREATE INDEX historico_status_pedido ON historico_status(pedido_id, id);
PRAGMA user_version = 3;
