const test = require('node:test');
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
  setDoc,
  serverTimestamp
} = require('firebase/firestore');

let ambiente;

test.before(async () => {
  ambiente = await initializeTestEnvironment({
    projectId: 'demo-mbb-meu',
    firestore: {
      host: '127.0.0.1',
      port: 8080,
      rules: fs.readFileSync(path.resolve(__dirname, '../firestore.rules'), 'utf8')
    }
  });
});

test.beforeEach(async () => {
  await ambiente.clearFirestore();
});

test.after(async () => {
  await ambiente.cleanup();
});

function registro(id = 'git-local-05', extras = {}) {
  return {
    conteudoId: id,
    versaoVista: 1,
    atualizadoEm: serverTimestamp(),
    ...extras
  };
}

test('usuário verificado grava o próprio registro', async () => {
  const db = ambiente.authenticatedContext('aluno-a', {
    email: 'a@example.test',
    email_verified: true
  }).firestore();
  const ref = doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-05');
  await assertSucceeds(setDoc(ref, registro('git-local-05', {
    concluido: true,
    favorito: true,
    anotacao: 'Rever git status'
  })));
});

test('usuário não verificado não cria nem altera registro', async () => {
  const db = ambiente.authenticatedContext('aluno-a', {
    email: 'a@example.test',
    email_verified: false
  }).firestore();
  const ref = doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-06');
  await assertFails(setDoc(ref, registro('git-local-06')));
});

test('e-mail temporário conhecido não grava mesmo verificado ou usando subdomínio', async () => {
  for (const [uid, email, id] of [
    ['temp-a', 'teste@MAILINATOR.COM', 'git-local-10'],
    ['temp-b', 'teste@sub.yopmail.com', 'git-local-11']
  ]) {
    const db = ambiente.authenticatedContext(uid, {
      email,
      email_verified: true
    }).firestore();
    await assertFails(setDoc(doc(db, 'meuMbb', uid, 'registros', id), registro(id)));
  }
});

test('outra conta não lê nem altera dados do proprietário', async () => {
  const db = ambiente.authenticatedContext('aluno-b', {
    email: 'b@example.test',
    email_verified: true
  }).firestore();
  const ref = doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-05');
  await assertFails(getDoc(ref));
  await assertFails(setDoc(ref, registro('git-local-05')));
});

test('identidade divergente e campos desconhecidos são rejeitados', async () => {
  const db = ambiente.authenticatedContext('aluno-a', {
    email: 'a@example.test',
    email_verified: true
  }).firestore();
  const ref = doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-07');

  await assertFails(setDoc(ref, registro('git-local-99')));
  await assertFails(setDoc(ref, registro('git-local-07', { admin: true })));
});

test('anotação individual e lista de notas respeitam limites', async () => {
  const db = ambiente.authenticatedContext('aluno-a', {
    email: 'a@example.test',
    email_verified: true
  }).firestore();

  await assertFails(setDoc(
    doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-08'),
    registro('git-local-08', { anotacao: 'x'.repeat(2001) })
  ));

  await assertFails(setDoc(
    doc(db, 'meuMbb', 'aluno-a', 'registros', 'git-local-09'),
    registro('git-local-09', { notas: Array.from({ length: 11 }, (_, i) => `nota ${i}`) })
  ));
});

test('caminhos fora da área privada do Meu MbB permanecem negados', async () => {
  const db = ambiente.authenticatedContext('aluno-a', {
    email: 'a@example.test',
    email_verified: true
  }).firestore();
  await assertFails(setDoc(doc(db, 'qualquer', 'documento'), { teste: true }));
});
