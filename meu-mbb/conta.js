(function () {
  'use strict';
  let sdk = null;
  let usuario = null;
  let inicializacao;
  let appCheckInicializacao;
  const ouvintes = new Set();

  function avisar() { ouvintes.forEach(ouvinte => ouvinte(usuario)); }
  function observar(ouvinte) { ouvintes.add(ouvinte); ouvinte(usuario); return () => ouvintes.delete(ouvinte); }

  async function iniciar() {
    if (inicializacao) return inicializacao;
    inicializacao = (async () => {
      const config = window.MBB_FIREBASE_CONFIG;
      if (!config?.apiKey || !config?.projectId) throw new Error('Autenticação indisponível. O conteúdo público continua acessível.');
      const [appSdk, authSdk] = await Promise.all([
        import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js'),
        import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')
      ]);
      const app = appSdk.getApps().find(item => item.options.projectId === config.projectId) || appSdk.initializeApp(config);
      const auth = authSdk.getAuth(app);
      sdk = { authSdk, auth, app, dbSdk: null, db: null };
      authSdk.onAuthStateChanged(auth, atual => { usuario = atual; avisar(); });
      await auth.authStateReady();
      usuario = auth.currentUser;
      avisar();
      return usuario;
    })().catch(error => { sdk = null; usuario = null; avisar(); throw error; });
    return inicializacao;
  }

  async function iniciarAppCheck() {
    const config = window.MBB_FIREBASE_CONFIG;
    if (!config?.appCheckSiteKey) return null;
    if (appCheckInicializacao) return appCheckInicializacao;
    appCheckInicializacao = (async () => {
      const appCheckSdk = await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-check.js');
      return appCheckSdk.initializeAppCheck(sdk.app, {
        provider: new appCheckSdk.ReCaptchaEnterpriseProvider(config.appCheckSiteKey),
        isTokenAutoRefreshEnabled: true
      });
    })().catch(error => { appCheckInicializacao = null; throw error; });
    return appCheckInicializacao;
  }

  async function exigirConta() {
    await iniciar();
    if (!usuario) throw new Error('Entre para salvar seu estudo.');
    if (!sdk.dbSdk) {
      await iniciarAppCheck();
      sdk.dbSdk = await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
      sdk.db = sdk.dbSdk.getFirestore(sdk.app);
    }
  }
  async function entrar(email, senha) { await iniciar(); return sdk.authSdk.signInWithEmailAndPassword(sdk.auth, email, senha); }
  async function cadastrar(nome, email, senha) {
    const dominio = String(email).trim().toLowerCase().split('@').pop();
    const descartaveis = ['mailinator.com', 'guerrillamail.com', 'yopmail.com', 'tempmail.com',
      '10minutemail.com', 'sharklasers.com', 'trashmail.com', 'maildrop.cc', 'getnada.com',
      'dispostable.com', 'moakt.com', 'tempr.email'];
    if (descartaveis.some(item => dominio === item || dominio.endsWith(`.${item}`))) {
      throw Object.assign(new Error('Use um e-mail permanente.'), { code: 'mbb/email-temporario' });
    }
    await iniciar();
    const credencial = await sdk.authSdk.createUserWithEmailAndPassword(sdk.auth, email, senha);
    await sdk.authSdk.updateProfile(credencial.user, { displayName: nome });
    sdk.auth.languageCode = 'pt-BR';
    try { await sdk.authSdk.sendEmailVerification(credencial.user); }
    catch (_) { /* A conta existe; a página permite reenviar a verificação. */ }
    usuario = credencial.user;
    avisar();
    return usuario;
  }
  async function recuperar(email) {
    await iniciar();
    sdk.auth.languageCode = 'pt-BR';
    return sdk.authSdk.sendPasswordResetEmail(sdk.auth, email);
  }
  async function sair() { await iniciar(); await sdk.authSdk.signOut(sdk.auth); }
  async function enviarVerificacao() {
    await iniciar();
    if (!usuario) throw new Error('Entre na sua conta.');
    sdk.auth.languageCode = 'pt-BR';
    return sdk.authSdk.sendEmailVerification(usuario);
  }
  async function confirmarVerificacao() {
    await iniciar();
    if (!usuario) throw new Error('Entre na sua conta.');
    await sdk.authSdk.reload(usuario);
    await usuario.getIdToken(true);
    return usuario.emailVerified;
  }

  async function excluirConta(senha) {
    await exigirConta();
    const dono = usuario;
    if (!dono.email || !senha) throw new Error('Informe sua senha para excluir a conta.');
    await sdk.authSdk.reauthenticateWithCredential(dono,
      sdk.authSdk.EmailAuthProvider.credential(dono.email, senha));
    const registros = sdk.dbSdk.collection(sdk.db, 'meuMbb', dono.uid, 'registros');
    const fotos = await sdk.dbSdk.getDocs(registros);
    for (let inicio = 0; inicio < fotos.docs.length; inicio += 400) {
      const lote = sdk.dbSdk.writeBatch(sdk.db);
      fotos.docs.slice(inicio, inicio + 400).forEach(documento => lote.delete(documento.ref));
      await lote.commit();
    }
    await sdk.authSdk.deleteUser(dono);
  }

  function ref(id) { return sdk.dbSdk.doc(sdk.db, 'meuMbb', usuario.uid, 'registros', id); }
  async function listar() {
    await exigirConta();
    const fotos = await sdk.dbSdk.getDocs(sdk.dbSdk.collection(sdk.db, 'meuMbb', usuario.uid, 'registros'));
    return Object.fromEntries(fotos.docs.map(documento => [documento.id, documento.data()]));
  }
  async function obter(unidade) {
    await exigirConta();
    const documento = await sdk.dbSdk.getDoc(ref(unidade.conteudo_id));
    return documento.exists() ? documento.data() : {};
  }
  async function salvar(unidade, campos) {
    await exigirConta();
    const { serverTimestamp, setDoc } = sdk.dbSdk;
    await setDoc(ref(unidade.conteudo_id), {
      conteudoId: unidade.conteudo_id,
      versaoVista: unidade.versao_conteudo,
      atualizadoEm: serverTimestamp(),
      ...campos
    }, { merge: true });
  }
  async function visitar(unidade, ancora = '') {
    await exigirConta();
    await salvar(unidade, { ultimoAcesso: sdk.dbSdk.serverTimestamp(), ancora: ancora.slice(0, 100) });
  }
  function notasDoRegistro(registro) {
    return Array.isArray(registro?.notas) ? registro.notas : registro?.anotacao?.trim() ? [registro.anotacao] : [];
  }
  async function alterarNota(unidade, texto, indice = null) {
    const conteudo = texto.trim();
    if (!conteudo || conteudo.length > 2000) throw new Error('Escreva uma anotação de até 2.000 caracteres.');
    await exigirConta();
    await sdk.dbSdk.runTransaction(sdk.db, async transacao => {
      const referencia = ref(unidade.conteudo_id);
      const foto = await transacao.get(referencia);
      const notas = [...notasDoRegistro(foto.exists() ? foto.data() : {})];
      if (indice === null) {
        if (notas.length >= 10) throw new Error('Limite de 10 anotações neste conteúdo.');
        notas.push(conteudo);
      } else {
        if (!Number.isInteger(indice) || indice < 0 || indice >= notas.length) throw new Error('Anotação não encontrada.');
        notas[indice] = conteudo;
      }
      transacao.set(referencia, { conteudoId: unidade.conteudo_id, versaoVista: unidade.versao_conteudo,
        atualizadoEm: sdk.dbSdk.serverTimestamp(), notas, anotacao: sdk.dbSdk.deleteField() }, { merge: true });
    });
  }
  async function removerNota(unidade, indice) {
    await exigirConta();
    await sdk.dbSdk.runTransaction(sdk.db, async transacao => {
      const referencia = ref(unidade.conteudo_id);
      const foto = await transacao.get(referencia);
      const notas = [...notasDoRegistro(foto.exists() ? foto.data() : {})];
      if (!Number.isInteger(indice) || indice < 0 || indice >= notas.length) throw new Error('Anotação não encontrada.');
      notas.splice(indice, 1);
      transacao.set(referencia, { conteudoId: unidade.conteudo_id, versaoVista: unidade.versao_conteudo,
        atualizadoEm: sdk.dbSdk.serverTimestamp(), notas: notas.length ? notas : sdk.dbSdk.deleteField(),
        anotacao: sdk.dbSdk.deleteField() }, { merge: true });
    });
  }
  async function limparSecao(secao) {
    const permitidas = {
      recentes: ['ultimoAcesso', 'ancora'],
      favoritos: ['favorito'],
      anotacoes: ['anotacao', 'notas'],
      progresso: ['concluido']
    };
    const campos = permitidas[secao];
    if (!campos) throw new Error('Área inválida.');
    await exigirConta();
    const fotos = await sdk.dbSdk.getDocs(sdk.dbSdk.collection(sdk.db, 'meuMbb', usuario.uid, 'registros'));
    const momento = valor => valor?.toMillis?.() || (valor ? Date.parse(valor) || 0 : 0);
    const ultimo = secao === 'recentes' ? fotos.docs.filter(documento => documento.data().ultimoAcesso)
      .reduce((maisRecente, documento) => !maisRecente || momento(documento.data().ultimoAcesso) > momento(maisRecente.data().ultimoAcesso)
        ? documento : maisRecente, null) : null;
    const selecionados = fotos.docs.filter(documento => {
      const dados = documento.data();
      return secao === 'recentes' ? dados.ultimoAcesso && documento.id !== ultimo.id
        : secao === 'favoritos' ? dados.favorito
          : secao === 'anotacoes' ? notasDoRegistro(dados).length : dados.concluido;
    });
    for (let inicio = 0; inicio < selecionados.length; inicio += 400) {
      const lote = sdk.dbSdk.writeBatch(sdk.db);
      selecionados.slice(inicio, inicio + 400).forEach(documento => {
        const mudancas = { atualizadoEm: sdk.dbSdk.serverTimestamp() };
        campos.forEach(campo => { mudancas[campo] = campo === 'favorito' || campo === 'concluido'
          ? false : sdk.dbSdk.deleteField(); });
        lote.update(documento.ref, mudancas);
      });
      await lote.commit();
    }
  }
  function limparRecentes() { return limparSecao('recentes'); }
  function atual() { return usuario; }
  window.MBBMeuConta = { iniciar, observar, atual, entrar, cadastrar, recuperar, sair, enviarVerificacao, confirmarVerificacao, excluirConta, listar, obter, salvar, visitar, notasDoRegistro, alterarNota, removerNota, limparSecao, limparRecentes };
}());
