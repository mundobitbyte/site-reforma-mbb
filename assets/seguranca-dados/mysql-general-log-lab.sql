-- LABORATÓRIO LOCAL — MYSQL GENERAL QUERY LOG
-- Use apenas em ambiente de laboratório e com uma conta que possa alterar variáveis globais.
-- O general query log pode registrar conteúdo de consultas e gerar volume significativo.

-- 1) Confira o estado atual.
SHOW VARIABLES LIKE 'general_log';
SHOW VARIABLES LIKE 'log_output';

-- 2) Registre temporariamente em tabela para facilitar a observação.
SET GLOBAL log_output = 'TABLE';
SET GLOBAL general_log = 'ON';

-- 3) Gere algumas consultas conhecidas.
SELECT NOW();
SELECT 'Mundo bit Byte' AS origem;

-- 4) Observe registros recentes.
SELECT event_time, user_host, command_type, argument
FROM mysql.general_log
ORDER BY event_time DESC
LIMIT 20;

-- 5) ENCERRAMENTO OBRIGATÓRIO DO LABORATÓRIO.
SET GLOBAL general_log = 'OFF';

-- 6) Confirme que foi desligado.
SHOW VARIABLES LIKE 'general_log';
