(function () {
  'use strict';

  var CONFIG = {
    'comunicacao': {
      title: 'Jornada de comunicação',
      labels: {1:'Primeira resposta',2:'Critério de sucesso',3:'Material de referência',4:'Perguntar antes',5:'Formato e limites',6:'Fato, hipótese e sugestão',7:'Refinar sem refazer',8:'Corrigir o rumo',9:'Exemplos concretos',10:'Dividir tarefas',11:'Pedir crítica',12:'Limpar contexto',13:'Saber quando parar',14:'Laboratório integrador',15:'Síntese do módulo'}
    },
    'produtividade': {
      title: 'Jornada de produtividade',
      labels: {1:'Resultado útil',2:'Material real',3:'Fato, ação, dúvida e decisão',4:'Quadro de ação',5:'Públicos diferentes',6:'Resumo com finalidade',7:'Trabalho por etapas',8:'Comparar versões',9:'Dependências',10:'Modelo reutilizável',11:'Privacidade',12:'Conferência final',13:'Laboratório',14:'Desafio'}
    },
    'programacao': {
      title: 'Jornada de desenvolvimento',
      labels: {1:'O projeto chega',2:'Ler antes de mudar',3:'Novo requisito',4:'Comportamento esperado',5:'Primeira alteração',6:'Investigar o bug',7:'Persistência necessária',8:'Falha de persistência',9:'Verificar a API',10:'Separar para testar',11:'Testes automatizados',12:'Ambiente reproduzível',13:'Proteger dados',14:'Revisar o projeto',15:'Agente no repositório',16:'Laboratório final',17:'Desafio de transferência'}
    },
    'etica-sociedade': {
      title: 'Jornada de decisão',
      labels: {1:'Qual decisão está sendo tomada?',2:'Dados necessários',3:'Critérios e vieses',4:'Correlação não é causa',5:'Revisão e contestação',6:'Autoria e responsabilidade',7:'Conferir referências',8:'Áudio, imagem e prova',9:'Transparência útil',10:'Benefício, risco e impacto',11:'Automação com limites',12:'Quem responde?',13:'Laboratório',14:'Desafio',15:'Fechamento da trilha'}
    },
    'panorama-2026': {
      title: 'Panorama 2026',
      labels: {1:'Modelo, sistema e agente',2:'Multimodalidade',3:'Fontes e contexto',4:'Prompt injection',5:'Agentes e ações',6:'IA na programação',7:'Proveniência',8:'Transparência e regulação',9:'Formação em IA',10:'Integração da trilha'},
      special: {
        'Checklist MbB para IA em 12 de setembro de 2026': {id:'checklist-2026', label:'Checklist 2026', num:'✓'},
        'Fontes oficiais para conferir e aprofundar': {id:'fontes-oficiais', label:'Fontes oficiais', num:'↗'}
      }
    }
  };

  var CSS = '' +
    '.mbb-ia-layout{display:grid;grid-template-columns:240px minmax(0,1fr);min-height:calc(100vh - 58px);align-items:start}' +
    '.mbb-ia-menu{position:sticky;top:58px;height:calc(100vh - 58px);overflow:auto;background:rgba(255,255,255,.95);border-right:1px solid #c8d8ee;padding:14px 10px 22px;z-index:45}' +
    '.mbb-ia-menu-box{background:#f7fbff;border:1px solid #d8e6f7;border-radius:14px;padding:10px}' +
    '.mbb-ia-menu-title{color:#315575;font-size:.76rem;letter-spacing:.06em;font-weight:900;text-transform:uppercase;margin:0 2px 10px}' +
    '.mbb-ia-nav{display:grid;gap:5px}' +
    '.mbb-ia-link{display:grid;grid-template-columns:30px minmax(0,1fr);align-items:center;gap:8px;padding:8px 9px;border:1px solid transparent;border-radius:9px;color:#081a32!important;text-decoration:none!important;font-size:.86rem;font-weight:800;line-height:1.22}' +
    '.mbb-ia-link:hover{background:#eef5ff;border-color:#c7dcf8;color:#0f4c9b!important}' +
    '.mbb-ia-link.active{background:#286dcc;color:#fff!important;border-color:#164b91;box-shadow:0 2px 6px rgba(15,76,155,.22)}' +
    '.mbb-ia-num{display:grid;place-items:center;min-height:27px;border-radius:7px;background:#e7eef8;color:#315575;font-size:.72rem;font-weight:900}' +
    '.mbb-ia-link.active .mbb-ia-num{background:rgba(255,255,255,.18);color:#fff}' +
    '.mbb-ia-label{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}' +
    '.mbb-ia-hint{margin:10px 4px 0;color:#64748b;font-size:.76rem;line-height:1.35}' +
    '.mbb-ia-layout>.container{width:100%;max-width:none;margin:0;padding:20px clamp(14px,2.2vw,28px) 44px;min-width:0}' +
    '.mbb-ia-panel{display:none}.mbb-ia-panel.active{display:block}' +
    '.mbb-ia-panel>.hero:first-child{padding:24px 26px;margin-bottom:16px}' +
    '.mbb-ia-panel>.hero:first-child h1{font-size:clamp(2rem,3.2vw,2.85rem);line-height:1.08;margin-bottom:10px}' +
    '.mbb-ia-panel-nav{display:flex;justify-content:space-between;gap:10px;margin-top:18px;padding-top:16px;border-top:1px solid #c8d8ee}' +
    '.mbb-ia-panel-nav a{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px 13px;border:1px solid #bdd4f2;border-radius:9px;background:#fff;color:#0f4c9b!important;text-decoration:none!important;font-weight:900;font-size:.84rem}' +
    '.mbb-ia-panel-nav a.next{margin-left:auto;background:#286dcc;color:#fff!important;border-color:#286dcc}' +
    '@media(max-width:980px){.mbb-ia-layout{display:block;min-height:auto}.mbb-ia-menu{position:sticky;top:58px;height:auto;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;padding:8px 10px;border-right:0;border-bottom:1px solid #c8d8ee;z-index:70}.mbb-ia-menu-box{display:flex;align-items:center;gap:8px;width:max-content;min-width:100%;padding:0;border:0;background:transparent}.mbb-ia-menu-title,.mbb-ia-hint{display:none}.mbb-ia-nav{display:flex;gap:7px}.mbb-ia-link{display:flex;white-space:nowrap;background:#f7fbff;border-color:#d8e6f7;padding:7px 10px}.mbb-ia-num{min-width:26px;min-height:24px;padding:0 5px}.mbb-ia-label{display:block}.mbb-ia-layout>.container{padding:14px}.mbb-ia-panel,.mbb-ia-panel.active{display:none!important}.mbb-ia-panel:first-child,.mbb-ia-panel.active,.mbb-ia-panel:target{display:block!important;scroll-margin-top:112px}.container:has(>.mbb-ia-panel:target:not(#inicio))>#inicio:not(:target):not(.active){display:none!important}}' +
    '@media(max-width:720px){.mbb-ia-menu{top:46px}}' +
    '@media(max-width:560px){.mbb-ia-panel>.hero:first-child{padding:17px}.mbb-ia-panel>.hero:first-child h1{font-size:2rem}.mbb-ia-panel-nav{display:grid}.mbb-ia-panel-nav a,.mbb-ia-panel-nav a.next{width:100%;margin:0}}';

  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function text(el) { return el ? (el.textContent || '').replace(/^\s+|\s+$/g, '') : ''; }
  function isMobile() { return window.matchMedia('(max-width: 980px)').matches; }

  onReady(function () {
    if (document.getElementById('mbb-ia-menu')) return;

    var file = window.location.pathname.split('/').pop() || '';
    var slug = file.replace(/\.html?$/i, '');
    var cfg = CONFIG[slug];
    if (!cfg) return;

    var container = document.querySelector('body > .container');
    if (!container) return;

    var original = [];
    while (container.firstChild) original.push(container.removeChild(container.firstChild));

    var panels = [];
    var current = null;
    var startedTopics = false;
    var i, node, h2, m, number;

    function makePanel(id, label, num) {
      var p = document.createElement('div');
      p.className = 'mbb-ia-panel';
      p.id = id;
      p.setAttribute('data-label', label);
      p.setAttribute('data-num', num);
      panels.push(p);
      return p;
    }

    for (i = 0; i < original.length; i++) {
      node = original[i];
      if (!current && node.nodeType === 3 && !text(node)) continue;

      if (node.nodeType === 1 && node.tagName === 'SECTION') {
        if (node.classList.contains('hero')) {
          if (!current) current = makePanel('inicio', 'Início', '•');
        } else {
          h2 = node.getElementsByTagName('h2')[0];
          m = text(h2).match(/^(\d+)\.\s*/);
          if (m) {
            number = parseInt(m[1], 10);
            startedTopics = true;
            current = makePanel('topico-' + number, cfg.labels[number] || text(h2).replace(/^\d+\.\s*/, ''), String(number));
          } else if (cfg.special && cfg.special[text(h2)]) {
            var special = cfg.special[text(h2)];
            startedTopics = true;
            current = makePanel(special.id, special.label, special.num);
          }
        }
      }

      if (!current) current = makePanel('inicio', 'Início', '•');
      current.appendChild(node);
    }

    if (!panels.length || !startedTopics) {
      for (i = 0; i < original.length; i++) container.appendChild(original[i]);
      return;
    }

    for (i = 0; i < panels.length; i++) {
      var navBottom = document.createElement('nav');
      navBottom.className = 'mbb-ia-panel-nav';
      navBottom.setAttribute('aria-label', 'Navegação entre tópicos');
      if (i > 0) {
        var prev = document.createElement('a');
        prev.href = '#' + panels[i - 1].id;
        prev.appendChild(document.createTextNode('← Anterior'));
        navBottom.appendChild(prev);
      }
      if (i < panels.length - 1) {
        var next = document.createElement('a');
        next.href = '#' + panels[i + 1].id;
        next.className = 'next';
        next.appendChild(document.createTextNode('Próximo →'));
        navBottom.appendChild(next);
      }
      if (navBottom.childNodes.length) panels[i].appendChild(navBottom);
      container.appendChild(panels[i]);
    }

    var style = document.createElement('style');
    style.id = 'mbb-ia-nav-style';
    style.appendChild(document.createTextNode(CSS));
    document.head.appendChild(style);

    var layout = document.createElement('div');
    layout.className = 'mbb-ia-layout';
    container.parentNode.insertBefore(layout, container);

    var aside = document.createElement('aside');
    aside.id = 'mbb-ia-menu';
    aside.className = 'mbb-ia-menu';
    aside.setAttribute('aria-label', cfg.title);
    var box = document.createElement('div');
    box.className = 'mbb-ia-menu-box';
    var title = document.createElement('div');
    title.className = 'mbb-ia-menu-title';
    title.appendChild(document.createTextNode(cfg.title));
    var nav = document.createElement('nav');
    nav.className = 'mbb-ia-nav';
    nav.setAttribute('aria-label', 'Tópicos do módulo');

    var links = [];
    for (i = 0; i < panels.length; i++) {
      var a = document.createElement('a');
      a.className = 'mbb-ia-link';
      a.href = '#' + panels[i].id;
      a.title = panels[i].getAttribute('data-label');
      var n = document.createElement('span'); n.className = 'mbb-ia-num'; n.appendChild(document.createTextNode(panels[i].getAttribute('data-num')));
      var l = document.createElement('span'); l.className = 'mbb-ia-label'; l.appendChild(document.createTextNode(panels[i].getAttribute('data-label')));
      a.appendChild(n); a.appendChild(l); nav.appendChild(a); links.push(a);
    }
    var hint = document.createElement('p');
    hint.className = 'mbb-ia-hint';
    hint.appendChild(document.createTextNode('Avance por etapas. O menu mantém o tópico atual em foco.'));
    box.appendChild(title); box.appendChild(nav); box.appendChild(hint); aside.appendChild(box);
    layout.appendChild(aside); layout.appendChild(container);

    function panelFromHash() {
      var id = window.location.hash ? decodeURIComponent(window.location.hash.substring(1)) : 'inicio';
      var target = document.getElementById(id);
      if (target && target.classList.contains('mbb-ia-panel')) return target;
      return panels[0];
    }

    function activate(panel, focus) {
      for (var j = 0; j < panels.length; j++) panels[j].classList.toggle('active', panels[j] === panel);
      for (var k = 0; k < links.length; k++) {
        var active = links[k].getAttribute('href') === '#' + panel.id;
        links[k].classList.toggle('active', active);
        if (active) links[k].setAttribute('aria-current', 'page');
        else links[k].removeAttribute('aria-current');
      }
      if (focus && !isMobile()) {
        var heading = panel.querySelector('h1,h2');
        if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus(); }
        window.scrollTo(0, 0);
      }
    }

    layout.addEventListener('click', function (event) {
      var el = event.target;
      while (el && el !== layout && el.tagName !== 'A') el = el.parentNode;
      if (!el || el === layout) return;
      var href = el.getAttribute('href') || '';
      if (href.charAt(0) !== '#') return;
      var panel = document.getElementById(href.substring(1));
      if (!panel || !panel.classList.contains('mbb-ia-panel')) return;

      if (isMobile()) {
        activate(panel, false);
        return;
      }

      event.preventDefault();
      if (history.pushState) history.pushState(null, '', href); else window.location.hash = href;
      activate(panel, true);
    });

    window.addEventListener('hashchange', function () { activate(panelFromHash(), false); });
    window.addEventListener('popstate', function () { activate(panelFromHash(), false); });

    if (!window.location.hash && history.replaceState) history.replaceState(null, '', '#inicio');
    activate(panelFromHash(), false);
  });
})();

(function () {
  if (document.querySelector('script[data-ia-destaques-mbb]')) return;
  var script = document.createElement('script');
  script.src = '../../js/ia-destaques-mbb.js?v=20260927-1';
  script.defer = true;
  script.dataset.iaDestaquesMbb = '1';
  document.head.appendChild(script);
})();
