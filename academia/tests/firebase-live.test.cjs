const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { initializeApp, deleteApp } = require('firebase/app');
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser
} = require('firebase/auth');
const {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp
} = require('firebase/firestore');

const executar = process.env.MBB_RUN_LIVE_TESTS === '1';

function lerConfiguracao() {
  const arquivo = path.resolve(__dirname, '../js/firebase-config.js');
  const contexto = { window: {} };
  vm.runInNewContext(fs.readFileSync(arquivo, 'utf8'), contexto);
  return contexto.window.MBB_FIREBASE_CONFIG;
}

test('sincroniza progresso real nos dois sentidos e remove a conta temporária', {
  skip: executar ? false : 'Defina MBB_RUN_LIVE_TESTS=1 para usar o projeto Firebase real.'
}, async () => {
  const configuracao = lerConfiguracao();
  const sufixo = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  const email = `teste-academia-${sufixo}@example.com`;
  const senha = `Mbb!${crypto.randomBytes(18).toString('hex')}`;
  const appA = initializeApp(configuracao, `mbb-live-a-${sufixo}`);
  const appB = initializeApp(configuracao, `mbb-live-b-${sufixo}`);
  const authA = getAuth(appA);
  const authB = getAuth(appB);
  const dbA = getFirestore(appA);
  const dbB = getFirestore(appB);
  let uid = null;

  const referencias = db => ({
    perfil: doc(db, 'users', uid),
    curso: doc(db, 'users', uid, 'courses', 'sistemas-embarcados-iot'),
    primeira: doc(db, 'users', uid, 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-01-03'),
    segunda: doc(db, 'users', uid, 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-01-04'),
    conquista: doc(db, 'users', uid, 'courses', 'sistemas-embarcados-iot', 'achievements', 'primeiro-circuito')
  });

  async function limpar() {
    try {
      if (!uid) return;
      if (!authA.currentUser) await signInWithEmailAndPassword(authA, email, senha);
      const refs = referencias(dbA);
      await deleteDoc(refs.conquista);
      await deleteDoc(refs.segunda);
      await deleteDoc(refs.primeira);
      await deleteDoc(refs.curso);
      await deleteDoc(refs.perfil);
      await deleteUser(authA.currentUser);
      uid = null;
    } finally {
      await Promise.allSettled([deleteApp(appA), deleteApp(appB)]);
    }
  }

  try {
    const credencialA = await createUserWithEmailAndPassword(authA, email, senha);
    uid = credencialA.user.uid;
    const refsA = referencias(dbA);

    await setDoc(refsA.perfil, {
      displayName: 'Aluno Teste Temporário',
      email,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    await setDoc(refsA.curso, {
      courseId: 'sistemas-embarcados-iot',
      courseVersion: 1,
      lastLessonId: 'emb-01-03',
      updatedAt: serverTimestamp()
    });
    const primeiraAtividade = {
      activityId: 'emb-01-03',
      courseId: 'sistemas-embarcados-iot',
      courseVersion: 1,
      state: 'concluida',
      type: 'pratica',
      points: 20,
      updatedAt: serverTimestamp(),
      completedAt: serverTimestamp()
    };
    await setDoc(refsA.primeira, primeiraAtividade);
    await setDoc(refsA.primeira, primeiraAtividade);
    await setDoc(refsA.conquista, {
      achievementId: 'primeiro-circuito',
      unlockedAt: serverTimestamp()
    });
    await signOut(authA);

    const credencialB = await signInWithEmailAndPassword(authB, email, senha);
    assert.equal(credencialB.user.uid, uid);
    const refsB = referencias(dbB);
    const [cursoB, atividadeB, conquistaB] = await Promise.all([
      getDoc(refsB.curso),
      getDoc(refsB.primeira),
      getDoc(refsB.conquista)
    ]);
    assert.equal(cursoB.data().lastLessonId, 'emb-01-03');
    assert.equal(atividadeB.data().points, 20);
    assert.equal(atividadeB.data().state, 'concluida');
    assert.equal(conquistaB.data().achievementId, 'primeiro-circuito');

    await setDoc(refsB.curso, {
      courseId: 'sistemas-embarcados-iot',
      courseVersion: 1,
      lastLessonId: 'emb-01-04',
      updatedAt: serverTimestamp()
    });
    await setDoc(refsB.segunda, {
      activityId: 'emb-01-04',
      courseId: 'sistemas-embarcados-iot',
      courseVersion: 1,
      state: 'concluida',
      type: 'pratica',
      points: 20,
      updatedAt: serverTimestamp(),
      completedAt: serverTimestamp()
    });
    await signOut(authB);

    await signInWithEmailAndPassword(authA, email, senha);
    const refsRetorno = referencias(dbA);
    const [cursoRetorno, atividadeRetorno] = await Promise.all([
      getDoc(refsRetorno.curso),
      getDoc(refsRetorno.segunda)
    ]);
    assert.equal(cursoRetorno.data().lastLessonId, 'emb-01-04');
    assert.equal(atividadeRetorno.data().points, 20);
    assert.equal(atividadeRetorno.data().state, 'concluida');
  } finally {
    await limpar();
  }
});
