(function () {
  'use strict';
  const storage = window.MBBAcademiaStorage;
  const core = window.MBBAcademiaCore;
  const curso = window.MBB_CURSO_EMBARCADOS;

  async function render() {
    await storage.iniciar();
    const status = storage.status();
    const nome = document.querySelector('[data-student-name]');
    if (nome) nome.textContent = status.usuario ? (status.usuario.displayName || status.usuario.email) : 'Visitante';
    const modo = document.querySelector('[data-panel-sync]');
    if (modo) modo.textContent = status.usuario ? 'Progresso sincronizado pela nuvem' : 'Progresso salvo somente neste dispositivo';
    const sair = document.querySelector('[data-sign-out]');
    if (sair) {
      sair.hidden = !status.usuario;
      sair.addEventListener('click', async () => { await storage.sair(); location.href = 'index.html'; });
    }

    const snapshot = await storage.lerCurso(curso);
    const percentual = core.percentual(curso, snapshot.activities);
    const pontos = core.totalPontos(curso, snapshot.activities);
    const conquistas = core.conquistasDesbloqueadas(curso, snapshot.activities);
    const proxima = core.proximaAula(curso, snapshot.activities, snapshot.lastLessonId);
    const card = document.querySelector('[data-embedded-course-card]');
    if (card) card.innerHTML = `
      <div class="panel-course-top"><span class="pill success">Curso ativo</span><strong>${percentual}%</strong></div>
      <h2>Sistemas Embarcados e IoT</h2>
      <p>${proxima ? `Continue em: ${proxima.titulo}` : 'Jornada disponível.'}</p>
      <div class="panel-course-progress"><span style="width:${percentual}%"></span></div>
      <div class="panel-course-stats"><span><strong>${pontos}</strong> pontos</span><span><strong>${conquistas.length}</strong> conquistas</span></div>
      <a class="btn primary" href="cursos/sistemas-embarcados-iot/${proxima ? `aula.html?id=${encodeURIComponent(proxima.id)}` : 'index.html'}">Continuar estudando</a>`;
  }

  storage.observarAutenticacao(() => { if (document.readyState !== 'loading') render().catch(console.error); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => render().catch(console.error));
  else render().catch(console.error);
}());
