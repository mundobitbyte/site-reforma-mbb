(function () {
  'use strict';

  const curso = window.MBB_CURSO_EMBARCADOS;
  const core = window.MBBAcademiaCore;
  const storage = window.MBBAcademiaStorage;
  if (!curso || !core || !storage) return;

  const $ = seletor => document.querySelector(seletor);
  let snapshot = { activities: {}, achievements: {}, lastLessonId: null };

  function escapar(valor) {
    return String(valor == null ? '' : valor)
      .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }

  function estadoAula(id) {
    return snapshot.activities?.[id]?.state || 'nao-iniciada';
  }

  function textoEstado(estado) {
    return ({ 'nao-iniciada': 'Não iniciada', 'em-andamento': 'Em andamento', concluida: 'Concluída' })[estado] || estado;
  }

  function linkAula(id) {
    return `aula.html?id=${encodeURIComponent(id)}`;
  }

  function atualizarCabecalho() {
    const status = storage.status();
    document.querySelectorAll('[data-sync-status]').forEach(elemento => {
      if (status.usuario) {
        elemento.textContent = `Nuvem ativa · ${status.usuario.displayName || status.usuario.email}`;
        elemento.className = 'sync-badge cloud';
      } else if (status.configurado) {
        elemento.textContent = 'Entre para sincronizar entre dispositivos';
        elemento.className = 'sync-badge local';
      } else {
        elemento.textContent = 'Progresso somente neste dispositivo';
        elemento.className = 'sync-badge local';
      }
    });
    document.querySelectorAll('[data-login-link]').forEach(link => {
      link.textContent = status.usuario ? 'Meu painel' : 'Entrar';
      link.href = status.usuario ? '../../painel.html' : `../../login.html?next=${encodeURIComponent(location.pathname + location.search)}`;
    });
  }

  function renderCurso() {
    const percentual = core.percentual(curso, snapshot.activities);
    const pontos = core.totalPontos(curso, snapshot.activities);
    const proxima = core.proximaAula(curso, snapshot.activities, snapshot.lastLessonId);
    const conquistas = core.conquistasDesbloqueadas(curso, snapshot.activities);

    const progresso = $('[data-course-progress]');
    if (progresso) progresso.innerHTML = `
      <div class="course-stat"><strong>${percentual}%</strong><span>concluído</span></div>
      <div class="course-stat"><strong>${pontos}</strong><span>pontos únicos</span></div>
      <div class="course-stat"><strong>${conquistas.length}/${curso.conquistas.length}</strong><span>conquistas</span></div>
      <div class="course-progress-track" aria-label="${percentual}% concluído"><span style="width:${percentual}%"></span></div>`;

    const continuar = $('[data-continue]');
    if (continuar && proxima) {
      continuar.href = linkAula(proxima.id);
      continuar.innerHTML = `Continuar — ${escapar(proxima.titulo)}`;
    }

    const container = $('[data-modules]');
    if (container) {
      container.innerHTML = curso.modulos.map(modulo => {
        const resumo = core.resumoModulo(curso, modulo.id, snapshot.activities);
        const primeira = curso.aulas.find(aula => aula.modulo === modulo.id);
        const estado = resumo.concluido ? 'done' : resumo.concluidas ? 'current' : '';
        return `<article class="academy-module-card ${estado}">
          <div class="module-card-index">${escapar(modulo.numero)}</div>
          <div class="module-card-copy">
            <div class="module-card-meta"><span>${resumo.concluidas}/${resumo.total} aulas</span><span>${resumo.percentual}%</span></div>
            <h2>${escapar(modulo.titulo)}</h2>
            <p class="guiding-question">${escapar(modulo.pergunta)}</p>
            <p>${escapar(modulo.descricao)}</p>
            <div class="module-mini-progress"><span style="width:${resumo.percentual}%"></span></div>
            <a class="btn ${estado === 'current' ? 'primary' : 'ghost'}" href="${linkAula(primeira.id)}">${resumo.concluidas ? 'Continuar módulo' : 'Abrir módulo'}</a>
          </div>
        </article>`;
      }).join('');
    }

    const painelConquistas = $('[data-achievements]');
    if (painelConquistas) {
      const ids = new Set(conquistas.map(item => item.id));
      painelConquistas.innerHTML = curso.conquistas.map(conquista => `
        <li class="achievement ${ids.has(conquista.id) ? 'unlocked' : ''}">
          <span aria-hidden="true">${ids.has(conquista.id) ? '✓' : '○'}</span>${escapar(conquista.titulo)}
        </li>`).join('');
    }
  }

  function fontesHtml(aula) {
    if (!aula.fontes?.length) return '';
    return `<section class="lesson-source">
      <div><span class="step-label">Material-base preservado</span><h2>Estude a explicação e execute a prática original</h2>
      <p>A Academia conduz a aprendizagem; os códigos, circuitos e imagens aprovados continuam no módulo público.</p></div>
      <div class="source-links">${aula.fontes.map(item => `<a class="btn ghost" href="${escapar(item.url)}" target="_blank" rel="noopener">${escapar(item.rotulo)} ↗</a>`).join('')}</div>
    </section>`;
  }

  function renderAula() {
    const id = new URLSearchParams(location.search).get('id') || curso.aulas[0].id;
    const aula = curso.aulas.find(item => item.id === id);
    if (!aula) {
      location.replace(linkAula(curso.aulas[0].id));
      return;
    }
    const modulo = curso.modulos.find(item => item.id === aula.modulo);
    const indice = curso.aulas.findIndex(item => item.id === aula.id);
    const anterior = curso.aulas[indice - 1];
    const seguinte = curso.aulas[indice + 1];
    const estado = estadoAula(aula.id);

    document.title = `${aula.titulo} — Sistemas Embarcados e IoT`;
    const titulo = $('[data-lesson-title]');
    if (titulo) titulo.textContent = aula.titulo;
    const numero = $('[data-module-number]');
    if (numero) numero.textContent = `Módulo ${modulo.numero}`;
    const moduloTitulo = $('[data-module-title]');
    if (moduloTitulo) moduloTitulo.textContent = modulo.titulo;

    const mapa = $('[data-lesson-map]');
    if (mapa) {
      mapa.innerHTML = curso.aulas.filter(item => item.modulo === modulo.id).map(item => {
        const itemEstado = estadoAula(item.id);
        return `<li><a class="${item.id === aula.id ? 'active' : ''}" href="${linkAula(item.id)}"><span class="lesson-dot ${itemEstado}"></span>${escapar(item.titulo)}</a></li>`;
      }).join('');
    }

    const main = $('[data-lesson-content]');
    if (main) main.innerHTML = `
      <header class="lesson-hero">
        <div><span class="pill ${estado === 'concluida' ? 'success' : 'warning'}">${textoEstado(estado)}</span><span class="lesson-points">${aula.pontos} pontos</span></div>
        <p class="brandline">${escapar(modulo.pergunta)}</p>
        <h1>${escapar(aula.titulo)}</h1>
        <p class="lead">${escapar(aula.contexto)}</p>
      </header>
      <section class="lesson-before"><span class="step-label">De onde você vem</span><p>${escapar(aula.antes)}</p></section>
      ${fontesHtml(aula)}
      <section class="learning-sequence" aria-label="Sequência da aula">
        <article class="learning-step do"><span class="step-number">1</span><div><span class="step-label">Faça</span><h2>Execute com intenção</h2><p>${escapar(aula.fazer)}</p></div></article>
        <article class="learning-step observe"><span class="step-number">2</span><div><span class="step-label">Observe e interprete</span><h2>Procure evidências</h2><p>${escapar(aula.observar)}</p><div class="success-criterion"><strong>Como reconhecer sucesso</strong><span>${escapar(aula.sucesso)}</span></div></div></article>
        <article class="learning-step diagnose"><span class="step-number">3</span><div><span class="step-label">Diagnostique</span><h2>Investigue antes de tentar ao acaso</h2><p>${escapar(aula.diagnostico)}</p></div></article>
        <article class="learning-step apply"><span class="step-number">4</span><div><span class="step-label">Aplique</span><h2>Vá além da cópia</h2><p>${escapar(aula.aplicar)}</p>${aula.projeto ? `<div class="project-bridge"><strong>Conexão com a jornada</strong><span>${escapar(aula.projeto)}</span></div>` : ''}</div></article>
      </section>
      <section class="lesson-completion">
        <div><span class="step-label">Registro de progresso</span><h2>Conclua somente depois de comprovar</h2><p>Marcar novamente não duplica pontos. O total é calculado por atividades únicas concluídas.</p><p class="save-feedback" data-save-feedback></p></div>
        <button class="btn primary completion-button" type="button" data-complete>${estado === 'concluida' ? 'Concluída ✓' : `Concluir e registrar ${aula.pontos} pontos`}</button>
      </section>
      <nav class="lesson-nav" aria-label="Navegação entre aulas">
        ${anterior ? `<a class="btn ghost" href="${linkAula(anterior.id)}">← ${escapar(anterior.titulo)}</a>` : '<span></span>'}
        ${seguinte ? `<a class="btn dark" href="${linkAula(seguinte.id)}">${escapar(seguinte.titulo)} →</a>` : '<a class="btn dark" href="index.html">Voltar ao curso</a>'}
      </nav>`;

    const concluir = $('[data-complete]');
    if (concluir) concluir.addEventListener('click', async () => {
      const feedback = $('[data-save-feedback]');
      concluir.disabled = true;
      concluir.textContent = 'Salvando…';
      feedback.textContent = 'Salvando progresso…';
      feedback.className = 'save-feedback saving';
      try {
        const resultado = await storage.salvarAula(curso, aula, 'concluida');
        snapshot = await storage.lerCurso(curso);
        const desbloqueadas = core.conquistasDesbloqueadas(curso, snapshot.activities);
        await storage.salvarConquistas(curso, desbloqueadas);
        concluir.textContent = 'Concluída ✓';
        const indicador = $('.lesson-hero .pill');
        if (indicador) {
          indicador.textContent = textoEstado('concluida');
          indicador.className = 'pill success';
        }
        const ponto = $('.lesson-map a.active .lesson-dot');
        if (ponto) ponto.className = 'lesson-dot concluida';
        feedback.textContent = resultado.modo === 'firebase' ? 'Salvo na nuvem.' : 'Salvo somente neste dispositivo.';
        feedback.className = 'save-feedback saved';
      } catch (error) {
        concluir.disabled = false;
        concluir.textContent = `Tentar salvar novamente`;
        feedback.textContent = `Erro de sincronização: ${error.message}`;
        feedback.className = 'save-feedback error';
      }
    });

    if (estado === 'nao-iniciada') {
      storage.salvarAula(curso, aula, 'em-andamento').then(() => {
        snapshot.activities = snapshot.activities || {};
        snapshot.activities[aula.id] = { ...snapshot.activities[aula.id], state: 'em-andamento' };
        const indicador = $('.lesson-hero .pill');
        if (indicador) {
          indicador.textContent = textoEstado('em-andamento');
          indicador.className = 'pill warning';
        }
        const ponto = $('.lesson-map a.active .lesson-dot');
        if (ponto) ponto.className = 'lesson-dot em-andamento';
      }).catch(error => {
        const feedback = $('[data-save-feedback]');
        if (feedback) {
          feedback.textContent = `Não foi possível registrar o início: ${error.message}`;
          feedback.className = 'save-feedback error';
        }
      });
    }
  }

  async function carregar() {
    await storage.iniciar();
    snapshot = await storage.lerCurso(curso);
    atualizarCabecalho();
    const view = document.body.dataset.courseView;
    if (view === 'lesson') renderAula();
    else renderCurso();
  }

  storage.observarAutenticacao(async () => {
    atualizarCabecalho();
    if (document.readyState !== 'loading') {
      try {
        snapshot = await storage.lerCurso(curso);
        if (document.body.dataset.courseView === 'lesson') renderAula();
        else renderCurso();
      } catch (error) {
        console.error(error);
      }
    }
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregar);
  else carregar();
}());
