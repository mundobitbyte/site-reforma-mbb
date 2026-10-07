const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

test('limpar uma área conserva visitas, favoritos, notas e conclusões das outras áreas', async () => {
  const dados = {
    primeiro: { conteudoId: 'primeiro', ultimoAcesso: '2026-09-29T06:00:00Z', ancora: 'topico',
      favorito: true, anotacao: 'Minha nota', concluido: true },
    segundo: { conteudoId: 'segundo', ultimoAcesso: '2026-09-28T06:00:00Z', ancora: 'anterior', favorito: true,
      notas: ['Uma anotação', 'Outra anotação'] }
  };
  const usuario = { uid: 'aluno-teste' };
  const app = { getApps: () => [], initializeApp: () => ({}) };
  const auth = { getAuth: () => ({ currentUser: usuario, authStateReady: async () => {} }),
    onAuthStateChanged: (_auth, callback) => callback(usuario) };
  const apagar = Symbol('apagar');
  const db = {
    getFirestore: () => ({}), collection: () => ({}),
    getDocs: async () => ({ docs: Object.entries(dados).map(([id, valor]) =>
      ({ id, ref: id, data: () => valor })) }),
    deleteField: () => apagar, serverTimestamp: () => 'agora',
    writeBatch: () => {
      const alteracoes = [];
      return {
        update: (id, campos) => alteracoes.push([id, campos]),
        commit: async () => alteracoes.forEach(([id, campos]) => {
          for (const [chave, valor] of Object.entries(campos)) {
            if (valor === apagar) delete dados[id][chave];
            else dados[id][chave] = valor;
          }
        })
      };
    }
  };
  const janela = { MBB_FIREBASE_CONFIG: { apiKey: 'teste', projectId: 'meu-mbb-teste' },
    __sdk: { app, auth, db } };
  const codigo = fs.readFileSync(path.join(__dirname, 'conta.js'), 'utf8')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js')", 'Promise.resolve(window.__sdk.app)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')", 'Promise.resolve(window.__sdk.auth)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js')", 'Promise.resolve(window.__sdk.db)');
  vm.runInNewContext(codigo, { window: janela });
  const conta = janela.MBBMeuConta;

  await conta.limparSecao('favoritos');
  assert.equal(dados.primeiro.favorito, false);
  assert.equal(dados.segundo.favorito, false);
  assert.equal(dados.primeiro.anotacao, 'Minha nota');
  assert.equal(dados.primeiro.concluido, true);
  await conta.limparSecao('recentes');
  assert.equal(dados.primeiro.ultimoAcesso, '2026-09-29T06:00:00Z');
  assert.equal(dados.primeiro.ancora, 'topico');
  assert.equal('ultimoAcesso' in dados.segundo, false);
  assert.equal('ancora' in dados.segundo, false);
  assert.equal(dados.primeiro.anotacao, 'Minha nota');
  await conta.limparSecao('anotacoes');
  assert.equal('anotacao' in dados.primeiro, false);
  assert.equal('notas' in dados.segundo, false);
  assert.equal(dados.primeiro.concluido, true);
  await conta.limparSecao('progresso');
  assert.equal(dados.primeiro.concluido, false);
  await assert.rejects(conta.limparSecao('inexistente'), /Área inválida/);
});
