SELECT type, name, sql
FROM sqlite_schema
WHERE type IN ('table', 'view', 'index')
  AND name NOT LIKE 'sqlite_%'
ORDER BY type, name;
