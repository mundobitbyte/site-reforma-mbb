(() => {
  'use strict';
  if (window.MBBVisualizador) return;

  const SELECTOR = '[data-mbb-ampliavel]';
  let viewer = null;
  let canvas = null;
  let stage = null;
  let titleEl = null;
  let zoomEl = null;
  let content = null;
  let sourceW = 1;
  let sourceH = 1;
  let zoom = 1;
  let rotation = 0;
  let mode = 'grafico';
  let previousFocus = null;

  const removeDuplicateIds = node => {
    if (node.nodeType !== 1) return;
    node.removeAttribute('id');
    node.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
  };

  const ensureViewer = () => {
    if (viewer) return viewer;
    viewer = document.createElement('div');
    viewer.id = 'mbbVisualizador';
    viewer.className = 'mbb-visualizador';
    viewer.hidden = true;
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-modal', 'true');
    viewer.setAttribute('aria-labelledby', 'mbbVisualizadorTitulo');
    viewer.innerHTML = `
      <div class="mbb-visualizador-panel">
        <div class="mbb-visualizador-header">
          <strong id="mbbVisualizadorTitulo">Conteúdo ampliado</strong>
          <button class="mbb-visualizador-fechar" type="button" data-mbb-view-action="close" aria-label="Fechar visualizador">✕</button>
        </div>
        <div class="mbb-visualizador-canvas"><div class="mbb-visualizador-stage"></div></div>
        <div class="mbb-visualizador-controls" aria-label="Controles do visualizador">
          <button type="button" data-mbb-view-action="minus" aria-label="Reduzir">−</button>
          <button type="button" data-mbb-view-action="plus" aria-label="Ampliar">+</button>
          <button type="button" data-mbb-view-action="fit">Ajustar</button>
          <button type="button" data-mbb-view-action="readable" hidden>Tamanho legível</button>
          <button type="button" data-mbb-view-action="rotate">↻ Girar</button>
          <span class="mbb-visualizador-zoom" id="mbbVisualizadorZoom">100%</span>
        </div>
      </div>`;
    document.body.appendChild(viewer);
    canvas = viewer.querySelector('.mbb-visualizador-canvas');
    stage = viewer.querySelector('.mbb-visualizador-stage');
    titleEl = viewer.querySelector('#mbbVisualizadorTitulo');
    zoomEl = viewer.querySelector('#mbbVisualizadorZoom');

    viewer.addEventListener('click', event => {
      if (event.target === viewer) return close();
      const action = event.target.closest('[data-mbb-view-action]')?.dataset.mbbViewAction;
      if (!action) return;
      if (action === 'close') return close();
      if (action === 'plus') {
        zoom = Math.min(mode === 'tabela' ? 2 : 4, zoom + (mode === 'tabela' ? .15 : .25));
        return render();
      }
      if (action === 'minus') {
        zoom = Math.max(.5, zoom - (mode === 'tabela' ? .15 : .25));
        return render();
      }
      if (action === 'fit') {
        if (mode === 'tabela') {
          const rect = canvas.getBoundingClientRect();
          const rotated = rotation === 90;
          const availableW = Math.max(180, rect.width - 36);
          const availableH = Math.max(180, rect.height - 36);
          const fitScale = Math.min(
            availableW / (rotated ? sourceH : sourceW),
            availableH / (rotated ? sourceW : sourceH)
          );
          zoom = Math.max(.5, Math.min(1, fitScale));
        } else {
          zoom = 1;
        }
        render();
        canvas.scrollTo({left: 0, top: 0, behavior: 'smooth'});
        return;
      }
      if (action === 'readable') {
        zoom = 1;
        render();
        canvas.scrollTo({left: 0, top: 0, behavior: 'smooth'});
        return;
      }
      if (action === 'rotate') {
        if (mode === 'tabela') {
          rotation = rotation === 90 ? 0 : 90;
        } else {
          rotation = (rotation + 90) % 360;
          zoom = 1;
        }
        render();
        canvas.scrollTo({left: 0, top: 0});
      }
    });

    document.addEventListener('keydown', event => {
      if (!viewer || viewer.hidden) return;
      if (event.key === 'Escape') return close();
      if (event.key !== 'Tab') return;
      const focusable = [...viewer.querySelectorAll('button:not([hidden])')].filter(el => !el.disabled);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (viewer && !viewer.hidden) render();
    });
    return viewer;
  };

  const renderGraphic = () => {
    if (!content) return;
    const rect = canvas.getBoundingClientRect();
    const rotated = Math.abs(rotation % 180) === 90;
    const availableW = Math.max(120, rect.width - 36);
    const availableH = Math.max(120, rect.height - 36);
    const fitScale = Math.min(
      availableW / (rotated ? sourceH : sourceW),
      availableH / (rotated ? sourceW : sourceH)
    );
    const scale = Math.max(.01, fitScale * zoom);
    const drawW = sourceW * scale;
    const drawH = sourceH * scale;
    stage.style.width = `${rotated ? drawH : drawW}px`;
    stage.style.height = `${rotated ? drawW : drawH}px`;
    content.style.width = `${drawW}px`;
    content.style.height = `${drawH}px`;
    content.style.transform = `translate(-50%,-50%) rotate(${rotation}deg)`;
    zoomEl.textContent = `${Math.round(zoom * 100)}%`;
  };

  const renderTable = () => {
    if (!content) return;
    const rotated = rotation === 90;
    const drawW = sourceW * zoom;
    const drawH = sourceH * zoom;
    stage.style.width = `${Math.max(1, rotated ? drawH : drawW)}px`;
    stage.style.height = `${Math.max(1, rotated ? drawW : drawH)}px`;
    content.style.transform = rotated
      ? `translateX(${drawH}px) rotate(90deg) scale(${zoom})`
      : `scale(${zoom})`;
    zoomEl.textContent = `${Math.round(zoom * 100)}%`;
  };

  const render = () => {
    if (!viewer || viewer.hidden) return;
    if (mode === 'tabela') renderTable();
    else renderGraphic();
  };

  function close() {
    if (!viewer) return;
    viewer.hidden = true;
    document.body.classList.remove('mbb-visualizador-aberto');
    stage.innerHTML = '';
    stage.removeAttribute('style');
    content = null;
    zoom = 1;
    rotation = 0;
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    previousFocus = null;
  }

  const openGraphic = target => {
    const original = target.matches('svg,img') ? target : target.querySelector('svg,img');
    if (!original) return false;
    content = original.cloneNode(true);
    removeDuplicateIds(content);
    content.classList.add('mbb-visualizador-grafico');
    content.removeAttribute('style');
    const vb = original.tagName.toLowerCase() === 'svg' ? original.viewBox?.baseVal : null;
    const box = original.getBoundingClientRect();
    sourceW = vb?.width || original.naturalWidth || box.width || 1000;
    sourceH = vb?.height || original.naturalHeight || box.height || 600;
    stage.innerHTML = '';
    stage.appendChild(content);
    if (content.tagName.toLowerCase() === 'img' && !content.complete) {
      content.addEventListener('load', () => {
        sourceW = content.naturalWidth || sourceW;
        sourceH = content.naturalHeight || sourceH;
        render();
      }, {once: true});
    }
    return true;
  };

  const openTable = target => {
    const original = target.matches('table') ? target : target.querySelector('table');
    if (!original) return false;
    content = original.cloneNode(true);
    removeDuplicateIds(content);
    content.classList.add('mbb-visualizador-table-clone');
    stage.innerHTML = '';
    stage.appendChild(content);
    return true;
  };

  const open = target => {
    if (!target) return;
    ensureViewer();
    mode = target.dataset.mbbAmpliavel === 'tabela' ? 'tabela' : 'grafico';
    zoom = 1;
    rotation = 0;
    previousFocus = document.activeElement;
    stage.removeAttribute('style');
    const ok = mode === 'tabela' ? openTable(target) : openGraphic(target);
    if (!ok) return;
    titleEl.textContent = target.dataset.mbbTitulo || (mode === 'tabela' ? 'Tabela completa' : 'Conteúdo ampliado');
    viewer.querySelector('[data-mbb-view-action="rotate"]').hidden = false;
    viewer.querySelector('[data-mbb-view-action="readable"]').hidden = mode !== 'tabela';
    viewer.hidden = false;
    document.body.classList.add('mbb-visualizador-aberto');

    requestAnimationFrame(() => {
      if (mode === 'tabela') {
        const rect = content.getBoundingClientRect();
        sourceW = Math.max(content.scrollWidth, rect.width, 320);
        sourceH = Math.max(content.scrollHeight, rect.height, 120);
      }
      render();
      canvas.scrollTo({left: 0, top: 0});
      viewer.querySelector('[data-mbb-view-action="close"]').focus();
    });
  };

  const prepare = target => {
    if (!target || target.dataset.mbbVisualizadorPronto) return;
    const modeName = target.dataset.mbbAmpliavel === 'tabela' ? 'tabela' : 'grafico';
    target.dataset.mbbVisualizadorPronto = '1';
    target.classList.add('mbb-ampliavel-pronto');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mbb-visualizador-trigger';
    button.dataset.mbbVisualizadorTrigger = '1';
    button.textContent = modeName === 'tabela' ? '⛶ Ver tabela completa' : '⛶ Ampliar';
    button.setAttribute('aria-label', `${modeName === 'tabela' ? 'Ver tabela completa' : 'Ampliar conteúdo'}: ${target.dataset.mbbTitulo || 'conteúdo didático'}`);
    button.addEventListener('click', () => open(target));
    target.insertAdjacentElement('afterend', button);

    if (modeName === 'grafico') {
      target.addEventListener('click', event => {
        if (event.target.closest('a,button,input,select,textarea,summary,label')) return;
        open(target);
      });
    }
  };

  const rescan = (root = document) => {
    const nodes = [];
    if (root.nodeType === 1 && root.matches?.(SELECTOR)) nodes.push(root);
    root.querySelectorAll?.(SELECTOR).forEach(node => nodes.push(node));
    nodes.forEach(prepare);
  };

  const init = () => {
    ensureViewer();
    rescan(document);
    const observer = new MutationObserver(records => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === 1) rescan(node);
        }
      }
    });
    observer.observe(document.body, {childList: true, subtree: true});
  };

  window.MBBVisualizador = {rescan, open, close};
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
