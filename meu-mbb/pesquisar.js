(async function () {
  'use strict';
  const campo = document.getElementById('consulta');
  const resumo = document.getElementById('resumo');
  const resultados = document.getElementById('resultados');
  // O catálogo e a pesquisa não carregam autenticação. Ela é consultada
  // somente quando alguém abre um resultado para registrar a visita.
  let contaPronta;
  function carregarScript(nome) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL(nome, location.href).href;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  function prepararConta() {
    if (!contaPronta) contaPronta = (async () => {
      await carregarScript('firebase-config.js?v=mbb-prod-1');
      await carregarScript('conta.js');
      await window.MBBMeuConta.iniciar();
      return window.MBBMeuConta;
    })().catch(() => null);
    return contaPronta;
  }
  const normalizar = valor => (valor || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const escaparRegExp = valor => valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function palavras(termo) {
    return termo.trim().split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length);
  }

  function adicionarComGrifo(elemento, texto, termo) {
    const termos = palavras(termo);
    if (!termos.length) { elemento.textContent = texto; return; }
    const re = new RegExp(`(${termos.map(escaparRegExp).join('|')})`, 'giu');
    let inicio = 0;
    for (const match of texto.matchAll(re)) {
      if (match.index > inicio) elemento.append(document.createTextNode(texto.slice(inicio, match.index)));
      const mark = document.createElement('mark');
      mark.textContent = match[0];
      elemento.append(mark);
      inicio = match.index + match[0].length;
    }
    if (inicio < texto.length) elemento.append(document.createTextNode(texto.slice(inicio)));
  }

  function trechoRelevante(texto, termo, limite = 230) {
    const fonte = (texto || '').replace(/\s+/g, ' ').trim();
    if (!fonte) return '';
    const alvo = normalizar(termo).split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length)[0] || '';
    const normalizado = normalizar(fonte);
    const posicao = alvo ? normalizado.indexOf(alvo) : -1;
    if (fonte.length <= limite) return fonte;
    const centro = posicao >= 0 ? posicao : 0;
    let inicio = Math.max(0, centro - Math.floor(limite * 0.35));
    let fim = Math.min(fonte.length, inicio + limite);
    if (fim - inicio < limite) inicio = Math.max(0, fim - limite);
    const recorte = fonte.slice(inicio, fim).trim();
    return `${inicio ? '…' : ''}${recorte}${fim < fonte.length ? '…' : ''}`;
  }

  try {
    const [principalResposta, segurancaResposta] = await Promise.all([
      fetch('catalogo.json?v=mbb-busca-4'),
      fetch('catalogo-seguranca-dados.json?v=mbb-sdi-1').catch(() => null)
    ]);
    if (!principalResposta.ok) throw new Error('Catálogo indisponível');
    const bruto = await principalResposta.json();
    if (segurancaResposta?.ok) {
      const extra = await segurancaResposta.json();
      const unidadesExtras = Array.isArray(extra.unidades)
        ? extra.unidades.filter(item => /^seg-dados-\d+$/.test(item.conteudo_id || '')) : [];
      bruto.unidades.push(...unidadesExtras);
    }
    const catalogo = window.MBBCatalogo.validar(bruto);
    function renderizar() {
      const termo = campo.value.trim();
      resultados.replaceChildren();
      if (!termo) { resumo.textContent = 'Digite um termo para pesquisar.'; return; }
      const achados = window.MBBCatalogo.pesquisar(catalogo, termo);
      resumo.textContent = achados.length ? `${achados.length} resultado(s) no site.` : 'Nenhum resultado encontrado. Tente outra palavra.';
      achados.slice(0, 50).forEach(unidade => {
        const artigo = document.createElement('article');
        artigo.className = 'mbb-resultado';
        const link = document.createElement('a');
        link.href = new URL(`../${unidade.localizacao_pesquisa || unidade.localizacao_atual}`, location.href).href;
        adicionarComGrifo(link, unidade.titulo_pesquisa || unidade.titulo, termo);
        link.addEventListener('click', async evento => {
          if (evento.defaultPrevented || evento.button !== 0 || evento.ctrlKey ||
              evento.metaKey || evento.shiftKey || evento.altKey) return;
          evento.preventDefault();
          const destino = link.href;
          const ancora = new URL(destino).hash.slice(1);
          const registrar = async () => {
            const conta = await prepararConta();
            if (conta?.atual()) await conta.visitar(unidade, ancora);
          };
          await Promise.race([
            registrar().catch(() => {}),
            new Promise(resolve => setTimeout(resolve, 3000))
          ]);
          location.assign(destino);
        });
        const contexto = document.createElement('p');
        contexto.className = 'mbb-resultado-contexto';
        adicionarComGrifo(contexto, [unidade.area, unidade.modulo, unidade.trilha].filter(Boolean).join(' › '), termo);
        artigo.append(link, contexto);
        const trecho = trechoRelevante(unidade.texto_pesquisa || unidade.texto_busca, termo);
        if (trecho) {
          const excerto = document.createElement('p');
          excerto.className = 'mbb-resultado-trecho';
          adicionarComGrifo(excerto, trecho, termo);
          artigo.appendChild(excerto);
        }
        resultados.appendChild(artigo);
      });
      if (achados.length > 50) resumo.textContent += ' Exibindo os 50 mais relevantes.';
    }
    campo.addEventListener('input', renderizar);
    campo.value = new URLSearchParams(location.search).get('q') || '';
    renderizar();
  } catch (_) { resumo.textContent = 'A pesquisa está indisponível no momento. Você pode continuar navegando pelo site.'; }
}());
