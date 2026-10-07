const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('cadastro recusa domínios temporários conhecidos e envia confirmação para e-mail permanente', async () => {
  const criado = [], enviados = [];
  const usuario = { uid: 'aluno', email: 'aluno@escola.edu.br', emailVerified: false };
  const auth = {
    getAuth: () => ({ currentUser: null, authStateReady: async () => {} }),
    onAuthStateChanged: (_auth, callback) => callback(null),
    createUserWithEmailAndPassword: async (_auth, email) => { criado.push(email); return { user: usuario }; },
    updateProfile: async (user, dados) => { user.displayName = dados.displayName; },
    sendEmailVerification: async user => { enviados.push(user.email); }
  };
  const janela = { MBB_FIREBASE_CONFIG: { apiKey: 'teste', projectId: 'meu-mbb-teste' },
    __sdk: { app: { getApps: () => [], initializeApp: () => ({}) }, auth } };
  const codigo = fs.readFileSync(path.join(__dirname, 'conta.js'), 'utf8')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js')", 'Promise.resolve(window.__sdk.app)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')", 'Promise.resolve(window.__sdk.auth)');
  vm.runInNewContext(codigo, { window: janela });
  const conta = janela.MBBMeuConta;
  await assert.rejects(conta.cadastrar('Aluno', 'teste@MAILINATOR.COM', 'senha123'), { code: 'mbb/email-temporario' });
  await assert.rejects(conta.cadastrar('Aluno', 'teste@sub.yopmail.com', 'senha123'), { code: 'mbb/email-temporario' });
  assert.equal(criado.length, 0);
  await conta.cadastrar('Aluno', 'aluno@escola.edu.br', 'senha123');
  assert.deepEqual(criado, ['aluno@escola.edu.br']);
  assert.deepEqual(enviados, ['aluno@escola.edu.br']);
  assert.equal(usuario.displayName, 'Aluno');
});
