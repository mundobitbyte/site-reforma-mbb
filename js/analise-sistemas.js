(() => {
  'use strict';

  const moduleMeta = {
    esquema: 1,
    area: 'Programação e Desenvolvimento',
    modulo: 'Análise de Sistemas',
    trilha: 'Assistência Técnica Conecta'
  };

  const stages = [
    { path:'00-antes-do-sistema.html', title:'Antes do sistema', group:'Descobrir', conteudo_id:'analise-sistemas-00', versao_conteudo:2 },
    { path:'01-stakeholders-escopo.html', title:'Stakeholders e escopo', group:'Descobrir', conteudo_id:'analise-sistemas-01', versao_conteudo:1 },
    { path:'02-levantamento.html', title:'Levantamento', group:'Descobrir', conteudo_id:'analise-sistemas-02', versao_conteudo:1 },
    { path:'03-processo-as-is.html', title:'Processo AS-IS', group:'Compreender e modelar', conteudo_id:'analise-sistemas-03', versao_conteudo:2 },
    { path:'04-analise-estruturada.html', title:'Análise Estruturada', group:'Compreender e modelar', conteudo_id:'analise-sistemas-04', versao_conteudo:2 },
    { path:'05-processo-to-be-bpmn.html', title:'TO-BE e BPMN', group:'Compreender e modelar', conteudo_id:'analise-sistemas-05', versao_conteudo:2 },
    { path:'06-requisitos.html', title:'Engenharia de Requisitos', group:'Especificar e planejar', conteudo_id:'analise-sistemas-06', versao_conteudo:1 },
    { path:'07-casos-de-uso.html', title:'Casos de Uso', group:'Especificar e planejar', conteudo_id:'analise-sistemas-07', versao_conteudo:2 },
    { path:'08-uml-essencial.html', title:'UML essencial', group:'Especificar e planejar', conteudo_id:'analise-sistemas-08', versao_conteudo:2 },
    { path:'09-agile-backlog-mvp.html', title:'Backlog e MVP', group:'Especificar e planejar', conteudo_id:'analise-sistemas-09', versao_conteudo:1 },
    { path:'10-ux-prototipo.html', title:'Jornada e protótipo', group:'Validar e consolidar', conteudo_id:'analise-sistemas-10', versao_conteudo:1 },
    { path:'11-qualidade-integracoes.html', title:'Qualidade e integrações', group:'Validar e consolidar', conteudo_id:'analise-sistemas-11', versao_conteudo:1 },
    { path:'12-viabilidade-riscos-rastreabilidade.html', title:'Viabilidade, riscos e rastreabilidade', group:'Validar e consolidar', conteudo_id:'analise-sistemas-12', versao_conteudo:1 },
    { path:'13-documentacao-ia.html', title:'Documentação viva e IA', group:'Validar e consolidar', conteudo_id:'analise-sistemas-13', versao_conteudo:1 },
    { path:'14-integracao-final.html', title:'Integração final', group:'Validar e consolidar', conteudo_id:'analise-sistemas-14', versao_conteudo:1 }
  ];

  const current = Number(document.body.dataset.stage ?? -1);
  const nav = document.getElementById('courseNav');
  const footer = document.getElementById('stageFooter');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const toggle = document.getElementById('menuToggle');

  function buildNav(){
    if(!nav) return;
    let html = '<button class="desktop-nav-collapse" id="desktopNavCollapse" type="button" aria-expanded="true">‹ Recolher etapas</button><div class="nav-project"><strong>Assistência Técnica Conecta</strong><span>Um único projeto evolui durante todo o módulo.</span></div>';
    let group = '';
    stages.forEach((stage,index) => {
      if(stage.group !== group){
        group = stage.group;
        html += `<div class="nav-group-title">${group}</div>`;
      }
      html += `<a class="stage-link ${index===current?'active':''}" href="${stage.path}" data-conteudo-id="${stage.conteudo_id}" ${index===current?'aria-current="page"':''}><span class="stage-number">${index}</span><span>${stage.title}</span></a>`;
    });
    nav.innerHTML = html;
  }

  function buildProgress(){
    if(current < 0) return;
    const pct = ((current + 1) / stages.length) * 100;
    if(progressBar) progressBar.style.width = `${pct}%`;
    if(progressText) progressText.textContent = `Etapa ${current} de ${stages.length - 1}`;
  }

  function buildFooter(){
    if(!footer || current < 0) return;
    const prev = current > 0 ? `<a href="${stages[current-1].path}">← ${stages[current-1].title}</a>` : '<span class="disabled"></span>';
    const next = current < stages.length-1 ? `<a class="next" href="${stages[current+1].path}">${stages[current+1].title} →</a>` : '<span class="disabled"></span>';
    footer.innerHTML = `${prev}<a class="all" href="index.html">Ver todas as etapas</a>${next}`;
  }

  function prepareMeuMbb(){
    const unidades = stages.map((stage,index) => ({
      conteudo_id: stage.conteudo_id,
      versao_conteudo: stage.versao_conteudo,
      titulo: `${index} — ${stage.title}`,
      area: moduleMeta.area,
      modulo: moduleMeta.modulo,
      trilha: moduleMeta.trilha,
      ordem: index,
      status: 'ativo',
      localizacao_atual: `pages/analise-sistemas/${stage.path}`,
      obrigatorio: true
    }));

    const atual = current >= 0 ? unidades[current] : null;
    document.body.dataset.mbbArea = moduleMeta.area;
    document.body.dataset.mbbModulo = moduleMeta.modulo;
    document.body.dataset.mbbTrilha = moduleMeta.trilha;
    if(atual){
      document.body.dataset.conteudoId = atual.conteudo_id;
      document.body.dataset.versaoConteudo = String(atual.versao_conteudo);
    }

    let hook = document.getElementById('meuMbbHook');
    if(!hook){
      const headerRight = document.querySelector('.header-right');
      if(headerRight){
        hook = document.createElement('div');
        hook.id = 'meuMbbHook';
        hook.className = 'meu-mbb-hook';
        hook.dataset.meuMbbSlot = '';
        hook.setAttribute('aria-live','polite');
        headerRight.insertBefore(hook, toggle || null);
      }
    }

    window.MBB_ANALISE_SISTEMAS = { modulo: moduleMeta, unidades, atual };
    window.dispatchEvent(new CustomEvent('mbb:conteudo-pronto', { detail: { modulo: moduleMeta, unidade: atual } }));
  }

  function setupDesktopNav(){
    const button = document.getElementById('desktopNavCollapse');
    if(!button) return;
    const mq = window.matchMedia('(max-width: 820px)');
    const apply = collapsed => {
      const effective = !mq.matches && collapsed;
      document.body.classList.toggle('nav-collapsed', effective);
      button.setAttribute('aria-expanded', String(!effective));
      button.textContent = effective ? '☰' : '‹ Recolher etapas';
      button.setAttribute('aria-label', effective ? 'Mostrar etapas' : 'Recolher etapas');
    };
    let collapsed = false;
    try { collapsed = localStorage.getItem('mbb-analise-nav-collapsed') === '1'; } catch {}
    apply(collapsed);
    button.addEventListener('click', () => {
      collapsed = !document.body.classList.contains('nav-collapsed');
      try { localStorage.setItem('mbb-analise-nav-collapsed', collapsed ? '1' : '0'); } catch {}
      apply(collapsed);
    });
    mq.addEventListener?.('change', () => apply(collapsed));
  }

  function prepareDiagramViewer(){
    let viewer = document.getElementById('diagramViewer');
    if(!viewer){
      viewer = document.createElement('div');
      viewer.id = 'diagramViewer';
      viewer.className = 'diagram-viewer';
      viewer.hidden = true;
      viewer.setAttribute('role','dialog');
      viewer.setAttribute('aria-modal','true');
      viewer.innerHTML = `
        <div class="diagram-viewer-panel">
          <div class="diagram-viewer-header"><strong id="diagramViewerTitle">Diagrama</strong><button type="button" data-diagram-action="close" aria-label="Fechar diagrama">✕</button></div>
          <div class="diagram-viewer-canvas"><div class="diagram-viewer-stage"></div></div>
          <div class="diagram-viewer-controls" aria-label="Controles do diagrama">
            <button type="button" data-diagram-action="minus" aria-label="Reduzir">−</button>
            <button type="button" data-diagram-action="plus" aria-label="Ampliar">+</button>
            <button type="button" data-diagram-action="fit">Ajustar</button>
            <button type="button" data-diagram-action="rotate">↻ Girar</button>
            <span class="diagram-zoom-label" id="diagramZoomLabel">100%</span>
          </div>
        </div>`;
      document.body.appendChild(viewer);
    }

    const canvas = viewer.querySelector('.diagram-viewer-canvas');
    const stageBox = viewer.querySelector('.diagram-viewer-stage');
    const titleEl = viewer.querySelector('#diagramViewerTitle');
    const zoomEl = viewer.querySelector('#diagramZoomLabel');
    let svg = null;
    let sourceW = 1;
    let sourceH = 1;
    let zoom = 1;
    let rotation = 0;

    const render = () => {
      if(!svg || viewer.hidden) return;
      const rect = canvas.getBoundingClientRect();
      const rotated = Math.abs(rotation % 180) === 90;
      const availableW = Math.max(120, rect.width - 36);
      const availableH = Math.max(120, rect.height - 36);
      const fitScale = Math.min(availableW / (rotated ? sourceH : sourceW), availableH / (rotated ? sourceW : sourceH));
      const scale = fitScale * zoom;
      const drawW = sourceW * scale;
      const drawH = sourceH * scale;
      stageBox.style.width = `${rotated ? drawH : drawW}px`;
      stageBox.style.height = `${rotated ? drawW : drawH}px`;
      svg.style.width = `${drawW}px`;
      svg.style.height = `${drawH}px`;
      svg.style.transform = `translate(-50%,-50%) rotate(${rotation}deg)`;
      zoomEl.textContent = `${Math.round(zoom * 100)}%`;
    };

    const close = () => {
      viewer.hidden = true;
      document.body.classList.remove('diagram-open');
      stageBox.innerHTML = '';
      svg = null;
    };

    const open = visual => {
      const original = visual.querySelector('svg');
      if(!original) return;
      svg = original.cloneNode(true);
      const vb = original.viewBox?.baseVal;
      sourceW = vb?.width || 1000;
      sourceH = vb?.height || 600;
      zoom = 1;
      rotation = 0;
      svg.removeAttribute('style');
      svg.classList.add('diagram-viewer-svg');
      stageBox.innerHTML = '';
      stageBox.appendChild(svg);
      titleEl.textContent = visual.dataset.diagramTitle || original.getAttribute('aria-label') || 'Diagrama';
      viewer.hidden = false;
      document.body.classList.add('diagram-open');
      requestAnimationFrame(() => { render(); canvas.scrollTo({left:0,top:0}); });
    };

    if(!viewer.dataset.bound){
      viewer.dataset.bound = 'true';
      viewer.addEventListener('click', e => {
        const action = e.target.closest('[data-diagram-action]')?.dataset.diagramAction;
        if(!action) return;
        if(action === 'close') close();
        if(action === 'plus'){ zoom = Math.min(4, zoom + .25); render(); }
        if(action === 'minus'){ zoom = Math.max(.5, zoom - .25); render(); }
        if(action === 'fit'){ zoom = 1; render(); canvas.scrollTo({left:0,top:0,behavior:'smooth'}); }
        if(action === 'rotate'){ rotation = (rotation + 90) % 360; zoom = 1; render(); canvas.scrollTo({left:0,top:0}); }
      });
      window.addEventListener('resize', () => { if(!viewer.hidden) render(); });
      document.addEventListener('keydown', e => { if(e.key === 'Escape' && !viewer.hidden) close(); });
    }

    document.querySelectorAll('.visual[data-zoomable="true"]').forEach(visual => {
      if(visual.dataset.viewerReady) return;
      visual.dataset.viewerReady = 'true';
      visual.tabIndex = 0;
      visual.setAttribute('role','button');
      visual.setAttribute('aria-label', `${visual.dataset.diagramTitle || 'Diagrama'}. Toque ou clique para ampliar.`);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'diagram-expand';
      button.innerHTML = '<span aria-hidden="true">⛶</span> Ampliar';
      button.addEventListener('click', e => { e.stopPropagation(); open(visual); });
      visual.appendChild(button);
      visual.addEventListener('click', e => { if(!e.target.closest('button')) open(visual); });
      visual.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(visual); } });
    });
  }

  function loadVisualCorrections(){
    if(document.querySelector('script[data-analise-visuais]')) return;
    const script = document.createElement('script');
    script.src = '../../js/analise-sistemas-visuais.js';
    script.dataset.analiseVisuais = 'true';
    script.addEventListener('load', () => {
      const auditScript = document.createElement('script');
      auditScript.src = '../../js/analise-sistemas-visuais-autocritica.js';
      auditScript.dataset.analiseVisuaisAutocritica = 'true';
      auditScript.addEventListener('load', prepareDiagramViewer);
      document.body.appendChild(auditScript);
    });
    document.body.appendChild(script);
  }

  function closeNav(){ document.body.classList.remove('nav-open'); }
  if(toggle){
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.addEventListener('click', e => {
    if(!document.body.classList.contains('nav-open')) return;
    if(e.target.closest('#courseNav') || e.target.closest('#menuToggle')) return;
    closeNav();
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeNav(); });
  window.addEventListener('mbb:visuais-prontos', prepareDiagramViewer);
  window.addEventListener('mbb:visuais-autocritica-prontos', prepareDiagramViewer);

  buildNav();
  buildProgress();
  buildFooter();
  prepareMeuMbb();
  setupDesktopNav();
  loadVisualCorrections();
})();
