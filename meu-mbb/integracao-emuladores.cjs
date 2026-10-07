// Executar somente com os emuladores locais de Auth e Firestore; não acessa produção.
const assert = require('node:assert/strict');
const { initializeApp, deleteApp } = require('firebase/app');
const { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, connectFirestoreEmulator, doc, setDoc, getDoc, serverTimestamp } = require('firebase/firestore');

async function cliente(nome) {
  const app = initializeApp({apiKey: 'fake-api-key', authDomain: 'demo-mbb.firebaseapp.com', projectId: 'demo-mbb'}, nome);
  const auth = getAuth(app);
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', {disableWarnings: true});
  const db = getFirestore(app);
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  return {app, auth, db};
}

(async () => {
  const a = await cliente('piloto-a'), b = await cliente('piloto-b');
  try {
    const usuarioA = (await createUserWithEmailAndPassword(a.auth, 'aluno-a@example.test', 'senha-de-teste-123')).user;
    const referencia = doc(a.db, 'meuMbb', usuarioA.uid, 'registros', 'git-local-05');
    await setDoc(referencia, {conteudoId: 'git-local-05', versaoVista: 1, concluido: true,
      favorito: true, anotacao: 'Rever git status', ultimoAcesso: serverTimestamp(), atualizadoEm: serverTimestamp()});
    await signOut(a.auth);
    await signInWithEmailAndPassword(a.auth, 'aluno-a@example.test', 'senha-de-teste-123');
    assert.equal((await getDoc(referencia)).data().anotacao, 'Rever git status');
    await createUserWithEmailAndPassword(b.auth, 'aluno-b@example.test', 'senha-de-teste-123');
    await assert.rejects(getDoc(doc(b.db, 'meuMbb', usuarioA.uid, 'registros', 'git-local-05')));
    console.log('Integração local: cadastro, saída, login, persistência e isolamento entre usuários OK.');
  } finally {
    await Promise.all([deleteApp(a.app), deleteApp(b.app)]);
  }
})().catch(erro => { console.error(erro); process.exitCode = 1; });
