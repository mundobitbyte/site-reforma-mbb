(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.MBBAcademiaCore = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const estadosValidos = new Set(['em-andamento', 'concluida']);

  function mapaAulas(curso) {
    return new Map(curso.aulas.map(aula => [aula.id, aula]));
  }

  function normalizarAtividades(curso, atividades) {
    const aulas = mapaAulas(curso);
    const saida = {};
    Object.entries(atividades || {}).forEach(([id, registro]) => {
      const aula = aulas.get(id);
      if (!aula || !registro || !estadosValidos.has(registro.state)) return;
      saida[id] = {
        activityId: id,
        state: registro.state,
        type: aula.tipo,
        points: aula.pontos,
        updatedAt: registro.updatedAt || null,
        completedAt: registro.state === 'concluida' ? (registro.completedAt || registro.updatedAt || null) : null
      };
    });
    return saida;
  }

  function idsConcluidos(curso, atividades) {
    const normalizadas = normalizarAtividades(curso, atividades);
    return new Set(Object.values(normalizadas).filter(item => item.state === 'concluida').map(item => item.activityId));
  }

  function totalPontos(curso, atividades) {
    const concluidos = idsConcluidos(curso, atividades);
    return curso.aulas.reduce((total, aula) => total + (concluidos.has(aula.id) ? aula.pontos : 0), 0);
  }

  function percentual(curso, atividades) {
    const obrigatorias = curso.aulas.filter(aula => aula.obrigatoria !== false);
    if (!obrigatorias.length) return 0;
    const concluidos = idsConcluidos(curso, atividades);
    const feitas = obrigatorias.filter(aula => concluidos.has(aula.id)).length;
    return Math.round((feitas / obrigatorias.length) * 100);
  }

  function conquistasDesbloqueadas(curso, atividades) {
    const concluidos = idsConcluidos(curso, atividades);
    return curso.conquistas.filter(conquista => conquista.requisito.every(id => concluidos.has(id)));
  }

  function proximaAula(curso, atividades, ultimaAulaId) {
    const normalizadas = normalizarAtividades(curso, atividades);
    if (ultimaAulaId) {
      const atual = curso.aulas.find(aula => aula.id === ultimaAulaId);
      if (atual && normalizadas[atual.id]?.state !== 'concluida') return atual;
    }
    return curso.aulas.find(aula => aula.obrigatoria !== false && normalizadas[aula.id]?.state !== 'concluida') || curso.aulas[curso.aulas.length - 1];
  }

  function resumoModulo(curso, moduloId, atividades) {
    const aulas = curso.aulas.filter(aula => aula.modulo === moduloId);
    const concluidos = idsConcluidos(curso, atividades);
    const feitas = aulas.filter(aula => concluidos.has(aula.id)).length;
    return {
      total: aulas.length,
      concluidas: feitas,
      percentual: aulas.length ? Math.round((feitas / aulas.length) * 100) : 0,
      concluido: aulas.length > 0 && feitas === aulas.length
    };
  }

  return {
    normalizarAtividades,
    idsConcluidos,
    totalPontos,
    percentual,
    conquistasDesbloqueadas,
    proximaAula,
    resumoModulo
  };
}));
