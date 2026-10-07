(function () {
  'use strict';

  const CHAVE_LOCAL = 'mbb-academia-progresso-v1';
  const listeners = new Set();
  let firebase = null;
  let usuario = null;
  let modo = 'local';
  let inicializacao = null;

  function agora() {
    return new Date().toISOString();
  }

  function lerLocal() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE_LOCAL) || '{}');
    } catch (_) {
      return {};
    }
  }

  function gravarLocal(dados) {
    localStorage.setItem(CHAVE_LOCAL, JSON.stringify(dados));
  }

  function estadoLocal(cursoId) {
    const todos = lerLocal();
    return todos[cursoId] || { courseId: cursoId, activities: {}, achievements: {}, lastLessonId: null };
  }

  function emitir() {
    listeners.forEach(listener => listener({ usuario, modo }));
  }

  async function carregarFirebase() {
    const config = window.MBB_FIREBASE_CONFIG;
    if (!config || !config.apiKey || !config.projectId || !config.authDomain) return false;

    const appSdk = await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js');
    const authSdk = await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js');
    const dbSdk = await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
    const app = appSdk.initializeApp(config);
    const auth = authSdk.getAuth(app);
    const db = dbSdk.getFirestore(app);
    firebase = { appSdk, authSdk, dbSdk, app, auth, db };
    modo = 'firebase';
    authSdk.onAuthStateChanged(auth, atual => {
      usuario = atual;
      emitir();
    });
    await auth.authStateReady();
    usuario = auth.currentUser;
    return true;
  }

  function iniciar() {
    if (!inicializacao) {
      inicializacao = carregarFirebase().catch(error => {
        console.error('Firebase indisponível:', error);
        modo = 'local';
        return false;
      }).finally(emitir);
    }
    return inicializacao;
  }

  function observarAutenticacao(listener) {
    listeners.add(listener);
    listener({ usuario, modo });
    return () => listeners.delete(listener);
  }

  function exigirFirebase() {
    if (!firebase) throw new Error('A sincronização em nuvem ainda não foi configurada. O estudo público continua disponível neste navegador.');
  }

  async function criarConta(nome, email, senha) {
    await iniciar();
    exigirFirebase();
    const credencial = await firebase.authSdk.createUserWithEmailAndPassword(firebase.auth, email, senha);
    await firebase.authSdk.updateProfile(credencial.user, { displayName: nome });
    await firebase.dbSdk.setDoc(firebase.dbSdk.doc(firebase.db, 'users', credencial.user.uid), {
      displayName: nome,
      email: credencial.user.email,
      createdAt: firebase.dbSdk.serverTimestamp(),
      updatedAt: firebase.dbSdk.serverTimestamp()
    }, { merge: true });
    usuario = credencial.user;
    emitir();
    return usuario;
  }

  async function entrar(email, senha) {
    await iniciar();
    exigirFirebase();
    const credencial = await firebase.authSdk.signInWithEmailAndPassword(firebase.auth, email, senha);
    return credencial.user;
  }

  async function recuperarSenha(email) {
    await iniciar();
    exigirFirebase();
    await firebase.authSdk.sendPasswordResetEmail(firebase.auth, email);
  }

  async function sair() {
    if (!firebase) return;
    await firebase.authSdk.signOut(firebase.auth);
  }

  async function lerCurso(curso) {
    await iniciar();
    if (!firebase || !usuario) return estadoLocal(curso.id);

    const cursoRef = firebase.dbSdk.doc(firebase.db, 'users', usuario.uid, 'courses', curso.id);
    const atividadeRef = firebase.dbSdk.collection(cursoRef, 'activities');
    const conquistaRef = firebase.dbSdk.collection(cursoRef, 'achievements');
    const [cursoSnap, atividadeSnap, conquistaSnap] = await Promise.all([
      firebase.dbSdk.getDoc(cursoRef),
      firebase.dbSdk.getDocs(atividadeRef),
      firebase.dbSdk.getDocs(conquistaRef)
    ]);
    const activities = {};
    atividadeSnap.forEach(docSnap => { activities[docSnap.id] = docSnap.data(); });
    const achievements = {};
    conquistaSnap.forEach(docSnap => { achievements[docSnap.id] = docSnap.data(); });
    return {
      courseId: curso.id,
      ...(cursoSnap.exists() ? cursoSnap.data() : {}),
      activities,
      achievements
    };
  }

  async function salvarAula(curso, aula, state) {
    if (!['em-andamento', 'concluida'].includes(state)) throw new Error('Estado de aula inválido.');
    await iniciar();
    const timestamp = agora();

    if (!firebase || !usuario) {
      const todos = lerLocal();
      const atual = estadoLocal(curso.id);
      const anterior = atual.activities[aula.id] || {};
      atual.activities[aula.id] = {
        activityId: aula.id,
        courseId: curso.id,
        courseVersion: curso.versao,
        state,
        type: aula.tipo,
        points: aula.pontos,
        updatedAt: timestamp,
        completedAt: state === 'concluida' ? (anterior.completedAt || timestamp) : null
      };
      atual.lastLessonId = aula.id;
      atual.courseVersion = curso.versao;
      atual.updatedAt = timestamp;
      todos[curso.id] = atual;
      gravarLocal(todos);
      return { modo: 'local', estado: atual };
    }

    const cursoRef = firebase.dbSdk.doc(firebase.db, 'users', usuario.uid, 'courses', curso.id);
    const atividadeRef = firebase.dbSdk.doc(cursoRef, 'activities', aula.id);
    const lote = firebase.dbSdk.writeBatch(firebase.db);
    lote.set(cursoRef, {
      courseId: curso.id,
      courseVersion: curso.versao,
      lastLessonId: aula.id,
      updatedAt: firebase.dbSdk.serverTimestamp()
    }, { merge: true });
    lote.set(atividadeRef, {
      activityId: aula.id,
      courseId: curso.id,
      courseVersion: curso.versao,
      state,
      type: aula.tipo,
      points: aula.pontos,
      updatedAt: firebase.dbSdk.serverTimestamp(),
      ...(state === 'concluida' ? { completedAt: firebase.dbSdk.serverTimestamp() } : {})
    }, { merge: true });
    await lote.commit();
    return { modo: 'firebase' };
  }

  async function salvarConquistas(curso, conquistas) {
    await iniciar();
    if (!conquistas.length) return;
    if (!firebase || !usuario) {
      const todos = lerLocal();
      const atual = estadoLocal(curso.id);
      conquistas.forEach(conquista => {
        if (!atual.achievements[conquista.id]) atual.achievements[conquista.id] = { achievementId: conquista.id, unlockedAt: agora() };
      });
      todos[curso.id] = atual;
      gravarLocal(todos);
      return;
    }
    const cursoRef = firebase.dbSdk.doc(firebase.db, 'users', usuario.uid, 'courses', curso.id);
    const lote = firebase.dbSdk.writeBatch(firebase.db);
    conquistas.forEach(conquista => {
      const ref = firebase.dbSdk.doc(cursoRef, 'achievements', conquista.id);
      lote.set(ref, { achievementId: conquista.id, unlockedAt: firebase.dbSdk.serverTimestamp() }, { merge: true });
    });
    await lote.commit();
  }

  function status() {
    return { usuario, modo, configurado: Boolean(firebase) };
  }

  window.MBBAcademiaStorage = {
    iniciar,
    observarAutenticacao,
    criarConta,
    entrar,
    recuperarSenha,
    sair,
    lerCurso,
    salvarAula,
    salvarConquistas,
    status
  };
}());
