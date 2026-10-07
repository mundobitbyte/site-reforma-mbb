const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('aviso autoral público permanece no script global do portal', () => {
  const script = fs.readFileSync(path.resolve(__dirname, '../js/mbb-busca-global.js'), 'utf8');
  assert.match(script, /mbb-direitos-autorais/);
  assert.match(script, /© 2026 Mundo bit Byte — Ronaldo Lavestein\. Todos os direitos reservados\./);
});
