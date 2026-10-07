(() => {
  'use strict';
  if (window.__MBB_VISUALIZADOR_SITE__) return;
  window.__MBB_VISUALIZADOR_SITE__ = true;

  const VERSION = '20261002-1';
  const TECH_RE = /(fluxograma|diagrama|\bder\b|entidade.?relacionamento|\buml\b|\bbpmn\b|circuit|esquema|topologia|wireframe|mapa (?:conceitual|de entrada|de rede)|mapa-entrada|bloco.{0,24}app ?inventor|app ?inventor.{0,24}bloco|captura de tela|screenshot|\bsnack\b|preview|interface.{0,24}react ?native|react ?native.{0,24}interface|\bgpio\b|\bi2c\b|\bspi\b|\buart\b|gr[aá]fico|part[ií]culas|modelo de dom[ií]nio)/i;
  const STRONG_TECH_RE = /(bloco.{0,40}app ?inventor|app ?inventor.{0,40}bloco)/i;
  const EXCLUDE_RE = /(logo|[ií]cone|avatar|capa|banner|retrato|fotografia|foto de |obra de arte|pintura)/i;
  const TABLE_HOST = '.table-wrap,.table-responsive,.responsive-table,.table-container,[class*="table-wrap"],[class*="table-responsive"]';
  let scanTimer = 0;

  const normalize = value => String(value || '').replace(/\s+/g, ' ').trim();

  const scriptBase = () => {
    const own = document.currentScript?.src || [...document.scripts].map(s => s.src).find(src => src.includes('/mbb-visualizador-site.js')) || '';
    try { return new URL(own || location.href).origin; } catch { return ''; }
  };
  const origin = scriptBase();

  function loadCore() {
    if (!document.querySelector('link[data-mbb-visualizador-global]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${origin}/css/mbb-visualizador.css?v=${VERSION}`;
      link.dataset.mbbVisualizadorGlobal = '1';
      document.head.appendChild(link);
    }
    return new Promise(resolve => {
      if (window.MBBVisualizador) return resolve();
      let script = document.querySelector('script[data-mbb-visualizador-global]');
      if (!script) {
        script = document.createElement('script');
        script.src = `${origin}/js/mbb-visualizador.js?v=${VERSION}`;
        script.dataset.mbbVisualizadorGlobal = '1';
        document.body.appendChild(script);
      }
      script.addEventListener('load', resolve, {once:true});
      script.addEventListener('error', resolve, {once:true});
    });
  }

  function nearestHeading(node) {
    const scope = node.closest('article,section,main,.module,.lesson,.content') || document.body;
    const headings = [...scope.querySelectorAll('h2,h3,h4')].filter(h => h.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING);
    return normalize(headings.at(-1)?.textContent);
  }

  function titleFor(node, fallback) {
    const table = node.matches?.('table') ? node : node.querySelector?.('table');
    const graphic = node.matches?.('img,svg') ? node : node.querySelector?.('img,svg');
    return normalize(
      table?.querySelector('caption')?.textContent ||
      graphic?.getAttribute('aria-label') ||
      graphic?.getAttribute('alt') ||
      graphic?.getAttribute('title') ||
      node.getAttribute?.('aria-label') ||
      nearestHeading(node) ||
      fallback
    );
  }

  function mark(node, mode, title) {
    if (!node || node.dataset.mbbVisualizadorPronto || node.dataset.mbbAmpliavel) return false;
    node.dataset.mbbAmpliavel = mode;
    node.dataset.mbbTitulo = title;
    return true;
  }

  function tableNeedsViewer(table) {
    if (!table || table.closest('#mbbVisualizador')) return false;
    const rect = table.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return false;
    const host = table.closest(TABLE_HOST) || table.parentElement;
    if (!host) return false;
    const hostRect = host.getBoundingClientRect();
    if (hostRect.width < 1) return false;

    const firstRow = table.rows?.[0];
    const columns = firstRow?.cells?.length || 0;
    if (columns < 3) return false;

    const overflow = host.scrollWidth > host.clientWidth + 12 || table.scrollWidth > host.clientWidth + 12 || rect.width > hostRect.width + 12;
    if (overflow) return true;

    if (window.innerWidth <= 620) {
      const heads = [...(table.tHead?.rows?.[0]?.cells || [])];
      const compressed = heads.some(cell => {
        const cellRect = cell.getBoundingClientRect();
        return cellRect.width > 0 && (cellRect.width < 108 || cell.scrollWidth > cell.clientWidth + 8);
      });
      return compressed && normalize(table.textContent).length >= 110;
    }
    return false;
  }

  function scanTables(root = document) {
    const tables = [];
    if (root.matches?.('table')) tables.push(root);
    root.querySelectorAll?.('table').forEach(table => tables.push(table));
    let changed = false;
    tables.forEach(table => {
      if (!tableNeedsViewer(table)) return;
      const host = table.closest(TABLE_HOST) || table;
      changed = mark(host, 'tabela', titleFor(host, 'Tabela completa')) || changed;
    });
    return changed;
  }

  function graphicMeta(el) {
    const figure = el.closest('figure');
    const caption = figure?.querySelector('figcaption')?.textContent || '';
    const heading = nearestHeading(el);
    const descendantClasses = el.tagName === 'svg' ? [...el.querySelectorAll('[class]')].slice(0,20).map(n => n.getAttribute('class')).join(' ') : '';
    return normalize([
      el.getAttribute('alt'), el.getAttribute('aria-label'), el.getAttribute('title'),
      el.getAttribute('src'), el.id, el.getAttribute('class'), descendantClasses,
      figure?.getAttribute('class'), caption, heading
    ].filter(Boolean).join(' '));
  }

  function graphicSizeIsUseful(el) {
    const rect = el.getBoundingClientRect();
    if (rect.width < 180 || rect.height < 90) return false;
    if (el.tagName === 'IMG') return Math.max(el.naturalWidth || 0, rect.width) >= 320 || Math.max(el.naturalHeight || 0, rect.height) >= 220;
    const vb = el.viewBox?.baseVal;
    return Math.max(vb?.width || 0, rect.width) >= 360 || Math.max(vb?.height || 0, rect.height) >= 220;
  }

  function technicalGraphic(el) {
    if (!el || el.closest('#mbbVisualizador')) return false;
    if (el.closest('.visual[data-zoomable="true"],.visual.visual-scroll,.visual[data-diagram-title],#diagramViewer,.diagram-viewer')) return false;
    if (el.closest('[data-mbb-ampliavel]')) return false;
    const explicit = el.closest('.flowchart-panel-v3,.circuitFigure,.circuitPhoto,.risk-scene-wrap');
    if (explicit) return explicit;
    const meta = graphicMeta(el);
    if (!TECH_RE.test(meta) || EXCLUDE_RE.test(meta)) return false;
    if (!STRONG_TECH_RE.test(meta) && !graphicSizeIsUseful(el)) return false;
    return el.closest('figure,.visual,.diagram,.diagram-preview,.image-wrap,.img-wrap,.screenshot,.figure') || el;
  }

  function scanGraphics(root = document) {
    const nodes = [];
    if (root.matches?.('img,svg')) nodes.push(root);
    root.querySelectorAll?.('img,svg').forEach(el => nodes.push(el));
    let changed = false;
    nodes.forEach(el => {
      const target = technicalGraphic(el);
      if (!target) return;
      changed = mark(target, 'grafico', titleFor(target, 'Conteúdo visual')) || changed;
    });
    return changed;
  }

  async function scan(root = document) {
    const tableChanged = scanTables(root);
    const graphicChanged = scanGraphics(root);
    const changed = tableChanged || graphicChanged;
    if (!changed && !window.MBBVisualizador) return;
    if (!window.MBBVisualizador) await loadCore();
    window.MBBVisualizador?.rescan(document);
  }

  function scheduleScan(root = document) {
    clearTimeout(scanTimer);
    scanTimer = setTimeout(() => scan(root), 80);
  }

  async function init() {
    await scan(document);
    const observer = new MutationObserver(records => {
      const relevant = records.some(record => {
        if (record.type === 'attributes') return true;
        return [...record.addedNodes].some(node => node.nodeType === 1);
      });
      if (relevant) scheduleScan(document);
    });
    observer.observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['class','hidden']});
    window.addEventListener('resize', () => scheduleScan(document), {passive:true});
    window.addEventListener('mbb:conteudo-pronto', () => scheduleScan(document));
    window.addEventListener('mbb:visuais-autocritica-prontos', () => scheduleScan(document));
  }

  window.MBBVisualizadorSite = {scan, tableNeedsViewer};
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
