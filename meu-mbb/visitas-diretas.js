(async function () {
  'use strict';
  const script = document.currentScript;
  if (!script) return;
  const origem = new URL(script.src);
  const pagina = decodeURIComponent(location.pathname.replace(/^\//, ''));

  let unidade;
  try {
    const resposta = await fetch(new URL('visitas-diretas.json?v=mbb-recursos-1', origem));
    if (resposta.ok) unidade = (await resposta.json())[pagina];
    if (!unidade && pagina.startsWith('pages/seguranca-dados/')) {
      const extraResposta = await fetch(new URL('catalogo-seguranca-dados.json?v=mbb-sdi-1', origem));
      if (extraResposta.ok) {
        const extra = await extraResposta.json();
        const encontrada = (extra.unidades || []).find(item => item.localizacao_atual.split('#')[0] === pagina);
        if (encontrada) unidade = { ...encontrada, ancoras: [...new Set((encontrada.topicos_busca || []).map(topico => topico.ancora))] };
      }
    }
  } catch (_) { return; }
  if (!unidade) return;

  function carregar(nome) {
    return new Promise((resolve, reject) => {
      const elemento = document.createElement('script');
      elemento.src = new URL(nome, origem).href;
      elemento.onload = resolve;
      elemento.onerror = reject;
      document.head.appendChild(elemento);
    });
  }
  try {
    await carregar('firebase-config.js?v=mbb-prod-1');
    await carregar('conta.js?v=mbb-notas-1');
    const conta = window.MBBMeuConta;
    await conta.iniciar();
    if (!conta.atual()?.emailVerified) return;
    let ultima = null;
    let fila = Promise.resolve();
    function registrar() {
      const hash = location.hash.slice(1);
      const ancora = unidade.ancoras.includes(hash) ? hash : '';
      if (ancora === ultima) return;
      fila = fila.then(async () => {
        await conta.visitar(unidade, ancora);
        ultima = ancora;
      }).catch(() => {});
    }
    window.addEventListener('hashchange', registrar);
    window.addEventListener('popstate', registrar);
    registrar();
    await fila;
    montarAcoes(conta, unidade, origem);
  } catch (_) { /* A página pública continua acessível sem Firebase. */ }

  function montarAcoes(conta, unidade, origem) {
    const estilo = document.createElement('link');
    estilo.rel = 'stylesheet';
    estilo.href = new URL('acoes-estudo.css?v=mbb-notas-1', origem).href;
    document.head.appendChild(estilo);

    const abrir = document.createElement('button');
    abrir.type = 'button';
    abrir.className = 'mbb-estudo-abrir';
    abrir.textContent = 'Meu estudo';
    abrir.setAttribute('aria-expanded', 'false');
    abrir.setAttribute('aria-controls', 'mbb-estudo-acoes');
    const painel = document.createElement('section');
    painel.id = 'mbb-estudo-acoes';
    painel.className = 'mbb-estudo-acoes';
    painel.setAttribute('aria-label', 'Ações do Meu MbB para este conteúdo');
    painel.hidden = true;
    const titulo = document.createElement('h2');
    titulo.textContent = 'Meu estudo';
    const contexto = document.createElement('p');
    contexto.textContent = `Ações para o conteúdo inteiro: ${unidade.titulo}.`;
    const favorito = document.createElement('button');
    favorito.type = 'button';
    const concluir = document.createElement('button');
    concluir.type = 'button';
    const explicacao = document.createElement('p');
    explicacao.className = 'mbb-estudo-ajuda';
    explicacao.textContent = 'Marque como concluído quando terminar todo este conteúdo. A visita não conclui o estudo.';
    const anotacao = document.createElement('textarea');
    anotacao.placeholder = 'Nova anotação privada (até 2.000 caracteres)';
    anotacao.setAttribute('aria-label', 'Sua anotação privada');
    anotacao.maxLength = 2000;
    anotacao.rows = 3;
    const salvar = document.createElement('button');
    salvar.type = 'button';
    salvar.textContent = 'Adicionar anotação';
    const cancelar = document.createElement('button');
    cancelar.type = 'button'; cancelar.textContent = 'Cancelar edição'; cancelar.hidden = true;
    const listaNotas = document.createElement('div');
    listaNotas.className = 'mbb-lista-notas';
    const aviso = document.createElement('span');
    aviso.setAttribute('role', 'status');
    const contaLink = document.createElement('a');
    contaLink.href = new URL('index.html', origem).href;
    contaLink.textContent = 'Ver Meu MbB';
    painel.append(titulo, contexto, favorito, concluir, explicacao, anotacao, salvar, cancelar, listaNotas, aviso, contaLink);
    document.body.append(abrir, painel);

    abrir.addEventListener('click', () => {
      painel.hidden = !painel.hidden;
      abrir.setAttribute('aria-expanded', String(!painel.hidden));
    });
    let estado = {};
    function atualizar() {
      favorito.textContent = estado.favorito ? '★ Remover dos favoritos' : '☆ Adicionar aos favoritos';
      concluir.textContent = estado.concluido ? 'Concluído ✓ · Desmarcar' : 'Marcar conteúdo como concluído';
    }
    const botoes = [favorito, concluir, salvar];
    let edicao = null;
    function mostrarNotas() {
      listaNotas.replaceChildren();
      const notas = conta.notasDoRegistro(estado);
      const resumo = document.createElement('p');
      resumo.textContent = `${notas.length} de 10 anotações neste conteúdo.`;
      listaNotas.append(resumo);
      notas.forEach((texto, indice) => {
        const linha = document.createElement('div'); linha.className = 'mbb-nota';
        const corpo = document.createElement('p'); corpo.textContent = texto;
        const editar = document.createElement('button'); editar.type = 'button'; editar.textContent = 'Editar';
        editar.addEventListener('click', () => {
          edicao = indice; anotacao.value = texto; salvar.textContent = 'Salvar alteração'; cancelar.hidden = false;
        });
        const remover = document.createElement('button'); remover.type = 'button'; remover.textContent = 'Apagar';
        remover.addEventListener('click', async () => {
          if (!confirm('Apagar esta anotação?')) return;
          try { await conta.removerNota(unidade, indice); estado = await conta.obter(unidade); cancelar.click(); mostrarNotas(); aviso.textContent = 'Anotação apagada.'; }
          catch (_) { aviso.textContent = 'Não foi possível apagar esta anotação.'; }
        });
        linha.append(corpo, editar, remover); listaNotas.append(linha);
      });
      salvar.disabled = edicao === null && notas.length >= 10;
    }
    botoes.forEach(botao => { botao.disabled = true; });
    atualizar();
    conta.obter(unidade).then(registro => {
      estado = registro;
      atualizar();
      botoes.forEach(botao => { botao.disabled = false; });
      mostrarNotas();
    }).catch(() => { aviso.textContent = 'Seus dados não estão disponíveis agora.'; });
    async function gravar(campos) {
      botoes.forEach(botao => { botao.disabled = true; });
      aviso.textContent = 'Salvando…';
      try {
        await conta.salvar(unidade, campos);
        Object.assign(estado, campos);
        atualizar();
        aviso.textContent = 'Salvo no Meu MbB.';
      } catch (_) { aviso.textContent = 'Não foi possível salvar agora.'; }
      finally { botoes.forEach(botao => { botao.disabled = false; }); mostrarNotas(); }
    }
    favorito.addEventListener('click', () => gravar({ favorito: !estado.favorito }));
    concluir.addEventListener('click', () => gravar({ concluido: !estado.concluido }));
    cancelar.addEventListener('click', () => { edicao = null; anotacao.value = ''; salvar.textContent = 'Adicionar anotação'; cancelar.hidden = true; mostrarNotas(); });
    salvar.addEventListener('click', async () => {
      try {
        await conta.alterarNota(unidade, anotacao.value, edicao);
        estado = await conta.obter(unidade);
        cancelar.click(); mostrarNotas(); aviso.textContent = 'Anotação salva no Meu MbB.';
      } catch (erro) { aviso.textContent = erro.message || 'Não foi possível salvar esta anotação.'; }
    });
  }
}());
