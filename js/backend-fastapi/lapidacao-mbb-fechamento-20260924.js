(() => {
  'use strict';

  const blocks = Array.isArray(window.backendFastapiBlocks) ? window.backendFastapiBlocks : [];
  const bloco6 = blocks.find((bloco) => bloco.id === 'bloco-6');
  if (!bloco6) return;

  const cap45 = bloco6.lessons?.find((aula) => aula.id === 'capitulo-45');
  const cap47 = bloco6.lessons?.find((aula) => aula.id === 'capitulo-47');
  if (!cap45 || !cap47) return;
  if (typeof cap45.content !== 'string' || typeof cap47.content !== 'string') return;

  const origem = document.createElement('template');
  origem.innerHTML = cap45.content;

  const checkpoint = origem.content.querySelector('[data-backend-checkpoint="bloco-6"]');
  if (!checkpoint) return;

  const destino = document.createElement('template');
  destino.innerHTML = cap47.content;

  if (destino.content.querySelector('[data-backend-checkpoint="bloco-6"]')) return;

  const checkpointHtml = checkpoint.outerHTML;
  checkpoint.remove();
  cap45.content = origem.innerHTML;
  cap47.content = `${destino.innerHTML}\n${checkpointHtml}`;
})();
