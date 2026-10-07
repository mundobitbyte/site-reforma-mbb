const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('exclusão exige senha, apaga todos os registros em lotes e só depois exclui a conta', async () => {
  const usuario = { uid: 'aluno', email: 'aluno@example.test' };
  const registros = new Set(Array.from({ length: 401 }, (_, indice) => `registro-${indice}`));
  const eventos = [];
  let senhaValida = false;
  const auth = {
    getAuth: () => ({ currentUser: usuario, authStateReady: async () => {} }),
    onAuthStateChanged: (_auth, callback) => callback(usuario),
    EmailAuthProvider: { credential: (email, senha) => ({ email, senha }) },
    reauthenticateWithCredential: async (_user, credencial) => {
      eventos.push(`autenticacao:${credencial.email}`);
      if (!senhaValida || credencial.senha !== 'correta') throw Object.assign(new Error('senha'), { code: 'auth/invalid-credential' });
    },
    deleteUser: async () => { assert.equal(registros.size, 0); eventos.push('conta'); }
  };
  const firestore = {
    getFirestore: () => ({}),
    collection: (_db, colecao, uid, subcolecao) => {
      assert.deepEqual([colecao, uid, subcolecao], ['meuMbb', 'aluno', 'registros']); return {};
    },
    getDocs: async () => ({ docs: [...registros].map(id => ({ ref: id })) }),
    writeBatch: () => {
      const lote = [];
      return { delete: ref => lote.push(ref), commit: async () => {
        assert.ok(lote.length <= 400);
        lote.forEach(id => registros.delete(id)); eventos.push(`lote:${lote.length}`);
      } };
    }
  };
  const janela = { MBB_FIREBASE_CONFIG: { apiKey: 'teste', projectId: 'meu-mbb-producao' },
    __sdk: { app: { getApps: () => [], initializeApp: () => ({}) }, auth, firestore } };
  const codigo = fs.readFileSync(path.join(__dirname, 'conta.js'), 'utf8')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js')", 'Promise.resolve(window.__sdk.app)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')", 'Promise.resolve(window.__sdk.auth)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js')", 'Promise.resolve(window.__sdk.firestore)');
  vm.runInNewContext(codigo, { window: janela });
  const conta = janela.MBBMeuConta;
  await assert.rejects(conta.excluirConta('errada'), { code: 'auth/invalid-credential' });
  assert.equal(registros.size, 401);
  assert.equal(eventos.includes('conta'), false);
  senhaValida = true;
  await conta.excluirConta('correta');
  assert.deepEqual(eventos.slice(-4), ['autenticacao:aluno@example.test', 'lote:400', 'lote:1', 'conta']);
});
