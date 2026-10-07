const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails
} = require('@firebase/rules-unit-testing');
const {
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  serverTimestamp
} = require('firebase/firestore');

let ambiente;

test.before(async () => {
  ambiente = await initializeTestEnvironment({
    projectId: 'demo-mbb-academia',
    firestore: {
      host: '127.0.0.1',
      port: 8080,
      rules: fs.readFileSync(path.resolve(__dirname, '../../firestore.rules'), 'utf8')
    }
  });
});

test.after(async () => {
  await ambiente.cleanup();
});

test('usuário autenticado cria o próprio perfil mínimo', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  await assertSucceeds(setDoc(doc(db, 'users', 'aluno-a'), {
    displayName: 'Aluno A',
    email: 'a@example.test',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }));
});

test('usuário B não lê nem altera dados do usuário A', async () => {
  const dbB = ambiente.authenticatedContext('aluno-b', { email: 'b@example.test' }).firestore();
  await assertFails(getDoc(doc(dbB, 'users', 'aluno-a')));
  await assertFails(setDoc(doc(dbB, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot'), {
    courseId: 'sistemas-embarcados-iot',
    courseVersion: 1,
    lastLessonId: 'emb-01-03',
    updatedAt: serverTimestamp()
  }));
});

test('Meu MbB: dono salva progresso e anotação; outra conta não lê nem altera', async () => {
  const dbA = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const dbB = ambiente.authenticatedContext('aluno-b', { email: 'b@example.test' }).firestore();
  const registroA = doc(dbA, 'meuMbb', 'aluno-a', 'registros', 'git-local-03');
  const registroB = doc(dbB, 'meuMbb', 'aluno-a', 'registros', 'git-local-03');
  await assertSucceeds(setDoc(registroA, {
    conteudoId: 'git-local-03', versaoVista: 2, concluido: true,
    favorito: true, anotacao: 'Rever pasta de rede', ultimoAcesso: serverTimestamp(), atualizadoEm: serverTimestamp()
  }));
  assert.equal((await getDoc(registroA)).data().anotacao, 'Rever pasta de rede');
  await assertSucceeds(getDocs(collection(dbA, 'meuMbb', 'aluno-a', 'registros')));
  await assertFails(getDoc(registroB));
  await assertFails(getDocs(collection(dbB, 'meuMbb', 'aluno-a', 'registros')));
  await assertFails(setDoc(registroB, { conteudoId: 'git-local-03', versaoVista: 1, atualizadoEm: serverTimestamp() }));
});

test('Meu MbB: identidade trocada e anotação excessiva são rejeitadas', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const ref = doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-04');
  await assertFails(setDoc(ref, { conteudoId: 'git-local-99', versaoVista: 1, atualizadoEm: serverTimestamp() }));
  await assertFails(setDoc(ref, { conteudoId: 'git-local-04', versaoVista: 1, anotacao: 'x'.repeat(2001), atualizadoEm: serverTimestamp() }));
});

test('atividade válida pode ser concluída novamente sem criar outra identidade', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const cursoRef = doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot');
  const atividadeRef = doc(cursoRef, 'activities', 'emb-01-03');
  await assertSucceeds(setDoc(cursoRef, {
    courseId: 'sistemas-embarcados-iot',
    courseVersion: 1,
    lastLessonId: 'emb-01-03',
    updatedAt: serverTimestamp()
  }));
  const concluida = {
    activityId: 'emb-01-03',
    courseId: 'sistemas-embarcados-iot',
    courseVersion: 1,
    state: 'concluida',
    type: 'pratica',
    points: 20,
    updatedAt: serverTimestamp(),
    completedAt: serverTimestamp()
  };
  await assertSucceeds(setDoc(atividadeRef, concluida));
  await assertSucceeds(setDoc(atividadeRef, concluida));
  const salvo = await getDoc(atividadeRef);
  assert.equal(salvo.id, 'emb-01-03');
  assert.equal(salvo.data().points, 20);
});

test('pontuação adulterada e identidade divergente são rejeitadas', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const base = {
    courseId: 'sistemas-embarcados-iot',
    courseVersion: 1,
    state: 'concluida',
    type: 'pratica',
    updatedAt: serverTimestamp(),
    completedAt: serverTimestamp()
  };
  await assertFails(setDoc(doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-falsa'), {
    ...base,
    activityId: 'emb-falsa',
    points: 9999
  }));
  await assertFails(setDoc(doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-02-01'), {
    ...base,
    activityId: 'outro-id',
    points: 20
  }));
});

test('visitante não acessa dados privados', async () => {
  const db = ambiente.unauthenticatedContext().firestore();
  await assertFails(getDoc(doc(db, 'users', 'aluno-a')));
});
