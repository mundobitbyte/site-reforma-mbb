(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.MBBCatalogo = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const ativos = new Set(['ativo', 'atualizado', 'movido']);
  const buscaCache = new WeakMap();
  const comuns = new Set(['a', 'as', 'o', 'os', 'de', 'da', 'das', 'do', 'dos', 'e', 'em', 'na', 'nas', 'no', 'nos', 'para', 'um', 'uma']);
  const normalizar = valor => (valor || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

  function validar(catalogo) {
    if (!catalogo || !Array.isArray(catalogo.unidades)) throw new Error('Catálogo inválido');
    buscaCache.delete(catalogo);
    const mapa = new Map();
    for (const unidade of catalogo.unidades) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(unidade.conteudo_id) || mapa.has(unidade.conteudo_id)) throw new Error('ID duplicado ou inválido');
      if (!Number.isInteger(unidade.versao_conteudo) || unidade.versao_conteudo < 1) throw new Error('Versão pedagógica inválida');
      if (!['ativo', 'atualizado', 'movido', 'dividido', 'incorporado', 'substituido', 'removido'].includes(unidade.status)) throw new Error('Status inválido');
      if (ativos.has(unidade.status) && !unidade.localizacao_atual) throw new Error('Unidade ativa sem destino');
      mapa.set(unidade.conteudo_id, unidade);
    }
    for (const unidade of catalogo.unidades) {
      if (unidade.destino_id && !mapa.has(unidade.destino_id)) throw new Error('Destino não catalogado');
      if (unidade.proximo_id && !mapa.has(unidade.proximo_id)) throw new Error('Próximo conteúdo não catalogado');
      if (unidade.status === 'removido' && !unidade.proximo_id && !unidade.destino_id) throw new Error('Conteúdo removido sem orientação de retorno');
      if (['dividido', 'incorporado', 'substituido'].includes(unidade.status) && !unidade.destino_id) throw new Error('Migração sem destino');
    }
    for (const unidade of catalogo.unidades) {
      if (!resolver(catalogo, unidade.conteudo_id).unidade) throw new Error('Migração sem unidade ativa');
    }
    return catalogo;
  }

  function resolver(catalogo, id) {
    const mapa = new Map(catalogo.unidades.map(unidade => [unidade.conteudo_id, unidade]));
    const visitados = new Set();
    let atual = mapa.get(id);
    while (atual) {
      if (visitados.has(atual.conteudo_id)) throw new Error('Ciclo no catálogo');
      visitados.add(atual.conteudo_id);
      if (ativos.has(atual.status)) return { unidade: atual, origem_id: id, migrado: id !== atual.conteudo_id };
      atual = mapa.get(atual.destino_id || atual.proximo_id);
    }
    return { unidade: null, origem_id: id, migrado: false };
  }

  function atuais(catalogo) {
    return catalogo.unidades.filter(unidade => ativos.has(unidade.status)).sort((a, b) => a.ordem - b.ordem);
  }

  function progresso(catalogo, registros) {
    const unidades = atuais(catalogo).filter(unidade => unidade.obrigatorio !== false);
    const concluidos = new Set();
    for (const [id, registro] of Object.entries(registros || {})) {
      if (!registro.concluido) continue;
      const origem = catalogo.unidades.find(unidade => unidade.conteudo_id === id);
      const destino = resolver(catalogo, id).unidade;
      if (destino && (id === destino.conteudo_id || origem?.preservar_conclusao === true)) concluidos.add(destino.conteudo_id);
    }
    return { concluidas: unidades.filter(unidade => concluidos.has(unidade.conteudo_id)).length, total: unidades.length,
      percentual: unidades.length ? Math.round(100 * unidades.filter(unidade => concluidos.has(unidade.conteudo_id)).length / unidades.length) : 0 };
  }

  function pesquisar(catalogo, termo) {
    const todos = normalizar(termo).trim().split(/\s+/).filter(Boolean);
    const tokens = todos.filter(token => !comuns.has(token));
    if (!tokens.length) tokens.push(...todos);
    if (!tokens.length) return [];
    const escapar = valor => valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Siglas curtas como CTE, SQL e LDR não são pedaços de outras palavras.
    const ocorrencias = (texto, trecho) => trecho.length <= 3
      ? [...texto.matchAll(new RegExp(`(^|[^a-z0-9_])${escapar(trecho)}(?=$|[^a-z0-9_])`, 'g'))].length
      : texto.split(trecho).length - 1;
    const contem = (texto, trecho) => ocorrencias(texto, trecho) > 0;
    const contar = ocorrencias;
    let indice = buscaCache.get(catalogo);
    if (!indice) {
      indice = atuais(catalogo).map(unidade => ({
        unidade,
        titulo: normalizar(unidade.titulo),
        termos: normalizar(unidade.termos_busca),
        texto: normalizar(`${unidade.area} ${unidade.modulo} ${unidade.texto_busca || ''}`)
      }));
      buscaCache.set(catalogo, indice);
    }
    return indice.map(({ unidade, titulo, termos, texto }) => {
      const pontos = tokens.every(token => contem(titulo, token) || contem(termos, token) || contem(texto, token))
        ? tokens.reduce((soma, token) => soma + (contem(titulo, token) ? 20 : 0) + (contem(termos, token) ? 15 : 0) + Math.min(contar(texto, token), 10), 0)
          + 3 * Math.min(contar(texto, tokens.join(' ')), 10) : 0;
      const topicos = (unidade.topicos_busca || []).map(topico => {
        const nome = normalizar(topico.titulo);
        const corpo = normalizar(topico.texto_busca);
        const nota = tokens.every(token => contem(nome, token) || contem(corpo, token))
          ? tokens.reduce((soma, token) => soma + (contem(nome, token) ? 30 : 0) + Math.min(contar(corpo, token), 10), 0) : 0;
        return { topico, nota };
      }).sort((a, b) => b.nota - a.nota);
      const melhor = topicos[0];
      const resultado = melhor?.nota > 0
        ? { ...unidade, titulo_pesquisa: melhor.topico.titulo,
            localizacao_pesquisa: `${unidade.localizacao_atual.split('#')[0]}#${melhor.topico.ancora}`,
            texto_pesquisa: melhor.topico.texto_busca }
        : unidade;
      return { unidade: resultado, pontos: Math.max(pontos, melhor?.nota || 0) };
    }).filter(item => item.pontos).sort((a, b) => b.pontos - a.pontos || a.unidade.ordem - b.unidade.ordem).map(item => item.unidade);
  }

  return { validar, resolver, atuais, progresso, pesquisar };
}));
