const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('novas notas preservam a antiga, respeitam limite e podem ser editadas ou apagadas', async () => {
  const registros = { primeira: { anotacao: 'Nota já existente' } };
  const apagar = Symbol('apagar');
  const usuario = { uid: 'aluno' };
  const firestore = {
    getFirestore: () => ({}),
    doc: (_db, colecao, uid, subcolecao, id) => {
      assert.deepEqual([colecao, uid, subcolecao], ['meuMbb', 'aluno', 'registros']); return id;
    },
    serverTimestamp: () => 'agora', deleteField: () => apagar,
    runTransaction: async (_db, acao) => acao({
      get: async id => ({ exists: () => Boolean(registros[id]), data: () => registros[id] }),
      set: (id, mudancas) => {
        registros[id] ||= {};
        for (const [chave, valor] of Object.entries(mudancas)) {
          if (valor === apagar) delete registros[id][chave];
          else registros[id][chave] = valor;
        }
      }
    })
  };
  const janela = { MBB_FIREBASE_CONFIG: { apiKey: 'teste', projectId: 'meu-mbb-teste' },
    __sdk: { app: { getApps: () => [], initializeApp: () => ({}) },
      auth: { getAuth: () => ({ currentUser: usuario, authStateReady: async () => {} }),
        onAuthStateChanged: (_auth, callback) => callback(usuario) }, firestore } };
  const codigo = fs.readFileSync(path.join(__dirname, 'conta.js'), 'utf8')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js')", 'Promise.resolve(window.__sdk.app)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')", 'Promise.resolve(window.__sdk.auth)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js')", 'Promise.resolve(window.__sdk.firestore)');
  vm.runInNewContext(codigo, { window: janela });
  const conta = janela.MBBMeuConta, unidade = { conteudo_id: 'primeira', versao_conteudo: 1 };
  await conta.alterarNota(unidade, 'Segunda nota');
  assert.deepEqual(Array.from(registros.primeira.notas), ['Nota já existente', 'Segunda nota']);
  assert.equal('anotacao' in registros.primeira, false);
  await conta.alterarNota(unidade, 'Segunda nota editada', 1);
  assert.equal(registros.primeira.notas[1], 'Segunda nota editada');
  for (let indice = 2; indice < 10; indice++) await conta.alterarNota(unidade, `Nota ${indice + 1}`);
  await assert.rejects(conta.alterarNota(unidade, 'Décima primeira'), /Limite de 10/);
  await assert.rejects(conta.alterarNota(unidade, 'x'.repeat(2001)), /2.000 caracteres/);
  await conta.removerNota(unidade, 0);
  assert.equal(registros.primeira.notas.length, 9);
  await conta.alterarNota(unidade, 'Nova décima nota');
  assert.equal(registros.primeira.notas.length, 10);
});
