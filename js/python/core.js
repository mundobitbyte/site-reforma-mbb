(() => {
  'use strict';

  const app = window.pythonMbb;
  const content = document.getElementById('content');
  const side = document.getElementById('sidePanel');
  const pathMenu = document.getElementById('pathMenu');
  const searchInput = document.getElementById('globalSearch');
  const searchStatus = document.getElementById('searchStatus');
  const clearSearch = document.getElementById('clearSearch');
  let referenceFilter = 'Todos';
  let libraryFilter = 'Todos';

  const routes = new Set(['inicio', 'aprender', 'referencia', 'biblioteca', 'aplicacoes', 'desafios']);
  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  const normalize = (value = '') => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function getState() {
    const raw = location.hash.replace(/^#/, '');
    const [routeRaw, itemRaw] = raw.split('/');
    const route = routes.has(routeRaw) ? routeRaw : 'inicio';
    return { route, item: itemRaw || null };
  }

  function go(target) {
    const next = target.replace(/^#/, '');
    if (location.hash === `#${next}`) render();
    else location.hash = next;
  }

  function setActiveRoute(route) {
    pathMenu.querySelectorAll('[data-route]').forEach((button) => {
      const active = button.dataset.route === route;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
  }

  function button(label, target, active = false, meta = '') {
    return `<button type="button" data-go="${escapeHtml(target)}" class="${active ? 'active' : ''}">${escapeHtml(label)}${meta ? `<span class="side-meta">${escapeHtml(meta)}</span>` : ''}</button>`;
  }

  function renderVisual(items) {
    if (!Array.isArray(items) || !items.length) return '';
    return `<div class="visual-flow" aria-label="Relação conceitual">${items.map((item, index) =>
      `${index ? '<div class="visual-arrow" aria-hidden="true">→</div>' : ''}<div class="visual-node">${escapeHtml(item)}</div>`
    ).join('')}</div>`;
  }

  function codeBlock(code, label = 'Código') {
    if (!code) return '';
    return `<div class="code-wrap"><div class="code-toolbar"><span>${escapeHtml(label)}</span><button class="copy-button" type="button" data-copy>Copiar</button></div><pre><code>${escapeHtml(code)}</code></pre></div>`;
  }

  function outputBlock(output) {
    if (!output) return '';
    return `<div class="output-wrap"><div class="output-title">Resultado esperado</div><pre>${escapeHtml(output)}</pre></div>`;
  }

  function renderLessonNav(lesson) {
    const index = app.lessons.findIndex((item) => item.id === lesson.id);
    const previous = app.lessons[index - 1];
    const next = app.lessons[index + 1];
    return `<nav class="lesson-nav" aria-label="Navegação da trilha">
      ${previous ? `<button type="button" data-go="aprender/${previous.id}">← ${escapeHtml(previous.title)}</button>` : '<span></span>'}
      ${next ? `<button type="button" data-go="aprender/${next.id}">${escapeHtml(next.title)} →</button>` : '<button type="button" data-go="aplicacoes">Escolher uma aplicação →</button>'}
    </nav>`;
  }

  function renderLesson(lesson) {
    const steps = lesson.steps.map((step) => `<section class="step-card">
      <h3>${escapeHtml(step.title)}</h3>
      ${step.html || ''}
      ${codeBlock(step.code, step.label)}
      ${outputBlock(step.output)}
    </section>`).join('');

    content.innerHTML = `<article class="content-inner">
      <header class="lesson-head">
        <p class="eyebrow">${escapeHtml(lesson.arc)} · Aula ${lesson.number}</p>
        <h2>${escapeHtml(lesson.title)}</h2>
        <p class="lead">${escapeHtml(lesson.objective)}</p>
        <div class="lesson-meta"><span class="level-tag">${escapeHtml(lesson.level)}</span><span class="type-tag">Aprender</span></div>
        <p class="prereq"><strong>Pré-requisitos:</strong> ${escapeHtml(lesson.prereqs.join(' · '))}</p>
      </header>
      <section class="situation"><h3>Situação real</h3><p>${escapeHtml(lesson.situation)}</p></section>
      <section class="need-box"><h3>Por que o recurso aparece agora?</h3><p>${escapeHtml(lesson.need)}</p></section>
      ${renderVisual(lesson.visual)}
      ${steps}
      <section class="expected-box"><h3>O que observar</h3><p>${escapeHtml(lesson.expected)}</p></section>
      <section class="diagnostic-box"><h3>Se o resultado divergir</h3><ol>${lesson.diagnose.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>
      <section class="apply-box"><h3>Aplicar sem copiar</h3><p>${escapeHtml(lesson.apply)}</p></section>
      ${renderLessonNav(lesson)}
    </article>`;
  }

  function renderStart(itemId) {
    const current = app.startSections.find((item) => item.id === itemId) || app.startSections[0];
    side.innerHTML = `<h2>Comece aqui</h2>${app.startSections.map((item) => button(item.title, `inicio/${item.id}`, item.id === current.id)).join('')}`;
    const heading = current.id === 'escolha' ? '' : `<h2>${escapeHtml(current.title)}</h2><p class="lead">${escapeHtml(current.lead)}</p>`;
    content.innerHTML = `<article class="content-inner"><p class="eyebrow">${escapeHtml(current.eyebrow)}</p>${heading}${current.html}</article>`;
  }

  function renderLearn(itemId) {
    const lesson = app.lessons.find((item) => item.id === itemId) || app.lessons[0];
    const arcs = [...new Set(app.lessons.map((item) => item.arc))];
    side.innerHTML = '<h2>Aprender Python</h2>' + arcs.map((arc) => {
      const items = app.lessons.filter((item) => item.arc === arc);
      return `<h3 class="group-label">${escapeHtml(arc)}</h3>${items.map((item) => button(`${item.number}. ${item.title}`, `aprender/${item.id}`, item.id === lesson.id, item.level)).join('')}`;
    }).join('');
    renderLesson(lesson);
  }

  function filterButtons(categories, selected, dataName) {
    return `<div class="filter-row" aria-label="Filtrar por categoria">${categories.map((category) =>
      `<button type="button" data-${dataName}="${escapeHtml(category)}" class="${category === selected ? 'active' : ''}">${escapeHtml(category)}</button>`
    ).join('')}</div>`;
  }

  function referenceCard(item) {
    return `<article class="reference-card">
      <span class="type-tag">${escapeHtml(item.category)}</span>
      <h3>${escapeHtml(item.name)}</h3>
      <p><strong>Para que serve:</strong> ${escapeHtml(item.purpose)}</p>
      <div class="syntax">${escapeHtml(item.syntax)}</div>
      <p><strong>Erro comum:</strong> ${escapeHtml(item.commonError)}</p>
      <div class="card-links"><button type="button" data-go="aprender/${escapeHtml(item.learn)}">Onde aprender</button><a href="${escapeHtml(item.official)}" target="_blank" rel="noopener">Documentação oficial</a></div>
    </article>`;
  }

  function renderReference() {
    const categories = ['Todos', ...new Set(app.references.map((item) => item.category))];
    const visible = referenceFilter === 'Todos' ? app.references : app.references.filter((item) => item.category === referenceFilter);
    side.innerHTML = '<h2>Referência</h2>' + categories.map((category) => button(category, 'referencia', category === referenceFilter, `${app.references.filter((item) => category === 'Todos' || item.category === category).length} itens`).replace('data-go="referencia"', `data-ref-filter="${escapeHtml(category)}"`)).join('');
    content.innerHTML = `<article class="content-inner">
      <p class="eyebrow">Consulta rápida</p><h2>Referência da linguagem</h2>
      <p class="lead">Sintaxe, built-ins, tipos, métodos, exceções e recursos. Esta área pode mostrar assuntos ainda não estudados; a trilha progressiva não depende deles antes da hora.</p>
      ${filterButtons(categories, referenceFilter, 'ref-filter')}
      <p>${visible.length} fichas nesta seleção. Use a busca superior para localizar por finalidade ou nome.</p>
      <div class="reference-grid">${visible.map(referenceCard).join('')}</div>
      <details class="source-list"><summary>Limite e fonte canônica</summary><p>A referência cobre sistematicamente os recursos relevantes do Python 3.14 e aponta a documentação oficial. Para semântica completa e itens de baixo nível, consulte a <a href="https://docs.python.org/3/reference/" target="_blank" rel="noopener">Referência da Linguagem Python</a>.</p></details>
    </article>`;
  }

  function moduleCard(item) {
    return `<article class="module-card"><span class="type-tag">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.purpose)}</p>${item.caution ? `<p><strong>Atenção:</strong> ${escapeHtml(item.caution)}</p>` : ''}<div class="card-links"><a href="${escapeHtml(item.official)}" target="_blank" rel="noopener">Documentação oficial</a></div></article>`;
  }

  function externalCard(item) {
    return `<article class="module-card"><span class="type-tag">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.purpose)}</p><p><strong>Quando entra:</strong> ${escapeHtml(item.when)}</p><div class="card-links">${item.local ? `<a href="${escapeHtml(item.local)}">Módulo MbB</a>` : ''}<a href="${escapeHtml(item.official)}" target="_blank" rel="noopener">Projeto oficial</a></div></article>`;
  }

  function renderLibrary(itemId) {
    const external = itemId === 'externas';
    side.innerHTML = `<h2>Bibliotecas</h2>${button('Biblioteca padrão', 'biblioteca', !external, `${app.stdlib.length} módulos`)}${button('Bibliotecas externas', 'biblioteca/externas', external, `${app.externals.length} selecionadas`)}`;
    if (external) {
      const categories = ['Todos', ...new Set(app.externals.map((item) => item.category))];
      const visible = libraryFilter === 'Todos' ? app.externals : app.externals.filter((item) => item.category === libraryFilter);
      content.innerHTML = `<article class="content-inner"><p class="eyebrow">Seleção curada</p><h2>Bibliotecas externas</h2><p class="lead">Não é uma lista de popularidade. Cada escolha tem finalidade, pré-requisitos e fonte oficial; manutenção, compatibilidade, licença e segurança devem ser reconferidas no início de um projeto.</p>${filterButtons(categories, libraryFilter, 'lib-filter')}<div class="reference-grid">${visible.map(externalCard).join('')}</div></article>`;
      return;
    }
    const categories = ['Todos', ...new Set(app.stdlib.map((item) => item.category))];
    const visible = libraryFilter === 'Todos' ? app.stdlib : app.stdlib.filter((item) => item.category === libraryFilter);
    content.innerHTML = `<article class="content-inner"><p class="eyebrow">Incluída com Python</p><h2>Biblioteca padrão por finalidade</h2><p class="lead">Encontre a família certa antes de instalar um pacote. Disponibilidade e comportamento podem variar por sistema; cada ficha liga à documentação da versão adotada.</p>${filterButtons(categories, libraryFilter, 'lib-filter')}<p>${visible.length} módulos nesta seleção.</p><div class="reference-grid">${visible.map(moduleCard).join('')}</div></article>`;
  }

  function trailCard(trail) {
    const status = trail.status === 'ready' ? ['ready', 'Trilha disponível'] : ['map', 'Mapa responsável'];
    return `<article class="trail-card"><span class="status-tag ${status[0]}">${status[1]}</span><span class="level-tag">${escapeHtml(trail.level)}</span><h3>${escapeHtml(trail.title)}</h3><p><strong>Produto:</strong> ${escapeHtml(trail.product)}</p><p><strong>Pré-requisitos:</strong> ${escapeHtml(trail.prereqs)}</p><div class="card-links"><button type="button" data-go="aplicacoes/${escapeHtml(trail.id)}">Abrir trilha</button>${trail.download ? `<a href="${escapeHtml(trail.download)}" download>Baixar projeto</a>` : ''}${trail.local ? `<a href="${escapeHtml(trail.local)}">Módulo especializado</a>` : ''}</div></article>`;
  }

  function renderTrailDetail(trail) {
    content.innerHTML = `<article class="content-inner"><p class="eyebrow">Aplicações e projetos</p><h2>${escapeHtml(trail.title)}</h2><p class="lead">${escapeHtml(trail.product)}</p><div class="lesson-meta"><span class="status-tag ${trail.status === 'ready' ? 'ready' : 'map'}">${trail.status === 'ready' ? 'Disponível' : 'Mapa responsável'}</span><span class="level-tag">${escapeHtml(trail.level)}</span></div><p class="prereq"><strong>Pré-requisitos:</strong> ${escapeHtml(trail.prereqs)}</p>${trail.note ? `<section class="warning-box"><h3>Limite real</h3><p>${escapeHtml(trail.note)}</p></section>` : ''}${trail.verification ? `<section class="info-box"><h3>O que foi verificado</h3><p>${escapeHtml(trail.verification)}</p></section>` : ''}<section class="step-card"><h3>Progressão do projeto</h3><ol>${trail.phases.map((phase) => `<li>${escapeHtml(phase)}</li>`).join('')}</ol></section>${trail.code ? `<section class="step-card"><h3>Primeiro incremento executável</h3><p>Este código não é o projeto final; é o menor passo que confirma ambiente e modelo mental.</p>${codeBlock(trail.code, `${trail.title} — início`)}</section>` : ''}${trail.download ? `<div class="bridge-box"><h3>Projeto completo</h3><p>O pacote inclui código-fonte, README, dependências e testes.</p><p><a href="${escapeHtml(trail.download)}" download>Baixar projeto em ZIP</a></p></div>` : ''}${trail.lesson ? `<div class="bridge-box"><h3>Continue na trilha principal</h3><button class="primary-button" type="button" data-go="aprender/${escapeHtml(trail.lesson)}">Abrir aula necessária</button></div>` : ''}${trail.local ? `<div class="bridge-box"><h3>Continue no módulo especializado</h3><p><a href="${escapeHtml(trail.local)}">Abrir o módulo completo</a></p></div>` : ''}<nav class="lesson-nav"><button type="button" data-go="aplicacoes">← Todas as trilhas</button><button type="button" data-go="desafios">Desafios e projetos →</button></nav></article>`;
  }

  function renderApplications(itemId) {
    const selected = app.trails.find((trail) => trail.id === itemId);
    side.innerHTML = `<h2>Aplicações</h2>${app.trails.map((trail) => button(trail.title, `aplicacoes/${trail.id}`, trail.id === itemId, trail.level)).join('')}`;
    if (selected) return renderTrailDetail(selected);
    content.innerHTML = `<article class="content-inner"><p class="eyebrow">Especializar-se</p><h2>Aplicações e projetos</h2><p class="lead">Escolha pelo problema que pretende resolver. Cada trilha declara pré-requisitos, produto e limites — inclusive quando Python não é o caminho predominante.</p><div class="trail-grid">${app.trails.map(trailCard).join('')}</div><section class="bridge-box"><h3>Como escolher uma biblioteca</h3><ol><li>Defina o problema antes do pacote.</li><li>Confirme documentação oficial, manutenção, compatibilidade e licença.</li><li>Teste em ambiente virtual.</li><li>Avalie dependências e alertas de segurança.</li><li>Registre a decisão e uma alternativa.</li></ol></section></article>`;
  }

  function legacyExerciseHtml() {
    return app.legacyExercises?.html || '<div class="warning-box"><h3>Acervo indisponível</h3><p>O arquivo de exercícios não foi carregado. Recarregue a página e confira o console.</p></div>';
  }

  function renderChallenges(itemId) {
    const items = [
      ['integradores', 'Projetos integradores'], ['acervo', 'Acervo: 170 exercícios'],
      ['py-ex-level-1', 'Fundamentos'], ['py-ex-level-2', 'Decisão'], ['py-ex-level-3', 'Repetição'],
      ['py-ex-level-4', 'Listas'], ['py-ex-level-5', 'Listas de listas'], ['py-ex-level-6', 'Funções'], ['py-ex-level-7', 'Desafios']
    ];
    side.innerHTML = `<h2>99 — Prática</h2>${items.map(([id, title]) => button(title, `desafios/${id}`, itemId === id)).join('')}`;
    content.innerHTML = `<article class="content-inner">
      <p class="eyebrow">99 — Desafios e projetos</p><h2>Praticar, integrar e transferir</h2>
      <p class="lead">O acervo anterior de 170 exercícios foi preservado. Use exercícios para consolidar; use projetos para provar integração e transferência.</p>
      <section id="integradores" class="step-card"><h3>Projetos integradores</h3><div class="card-grid">
        <article class="info-card"><strong>Central Horizonte</strong><p>Projeto principal com funções, coleções, módulos, persistência, erros, testes e documentação.</p><div class="card-links"><button type="button" data-go="aprender/projeto-integrador">Abrir projeto guiado</button><a href="../downloads/python/central-horizonte.zip" download>Baixar projeto</a></div></article>
        <article class="info-card"><strong>Automação segura</strong><p>Simular, validar e registrar organização de arquivos antes de qualquer mudança.</p><div class="card-links"><button type="button" data-go="aplicacoes/automacao">Abrir trilha</button></div></article>
        <article class="info-card"><strong>Aplicação escolhida</strong><p>Desktop, API, dados, jogo ou outra trilha com justificativa de ferramenta e critérios de aceite.</p><div class="card-links"><button type="button" data-go="aplicacoes">Escolher trilha</button></div></article>
      </div></section>
      <section id="acervo" class="exercises-99">${legacyExerciseHtml()}</section>
    </article>`;
    content.querySelectorAll('.exercises-99 .exercise-level').forEach((section, index) => section.id = `py-ex-level-${index + 1}`);
    if (itemId && itemId !== 'integradores' && itemId !== 'acervo') requestAnimationFrame(() => document.getElementById(itemId)?.scrollIntoView({ block: 'start' }));
    if (itemId === 'acervo') requestAnimationFrame(() => document.getElementById('acervo')?.scrollIntoView({ block: 'start' }));
  }

  function buildSearchIndex() {
    const lessons = app.lessons.map((item) => ({ type:'Aula', title:item.title, text:[item.arc,item.objective,item.situation,item.need,...item.prereqs].join(' '), target:`aprender/${item.id}` }));
    const refs = app.references.map((item) => ({ type:'Referência', title:item.name, text:[item.category,item.purpose,item.syntax,item.commonError,item.aliases].join(' '), target:'referencia' }));
    const modules = app.stdlib.map((item) => ({ type:'Biblioteca padrão', title:item.name, text:[item.category,item.purpose,item.caution].join(' '), target:'biblioteca' }));
    const externals = app.externals.map((item) => ({ type:'Biblioteca externa', title:item.name, text:[item.category,item.purpose,item.when].join(' '), target:'biblioteca/externas' }));
    const trails = app.trails.map((item) => ({ type:'Aplicação', title:item.title, text:[item.product,item.prereqs,...item.phases].join(' '), target:`aplicacoes/${item.id}` }));
    return [...lessons, ...refs, ...modules, ...externals, ...trails];
  }

  function renderSearch(query) {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const results = buildSearchIndex().filter((item) => {
      const haystack = normalize(`${item.title} ${item.text}`);
      return terms.every((term) => haystack.includes(term));
    }).slice(0, 60);
    side.innerHTML = '<h2>Busca</h2>' + button('Limpar busca', getState().route, false, `${results.length} resultado(s)`);
    searchStatus.textContent = `${results.length} resultado(s) para “${query}”.`;
    content.innerHTML = `<article class="content-inner"><p class="eyebrow">Busca global</p><h2>Resultados para “${escapeHtml(query)}”</h2><div class="search-results">${results.length ? results.map((item) => `<article class="search-result"><span class="type-tag">${escapeHtml(item.type)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text.slice(0, 220))}${item.text.length > 220 ? '…' : ''}</p><button class="primary-button" type="button" data-go="${escapeHtml(item.target)}">Abrir</button></article>`).join('') : '<div class="empty-state"><h3>Nenhum resultado</h3><p>Tente um termo mais curto, como “arquivo”, “teste”, “lista” ou “API”.</p></div>'}</div></article>`;
  }

  function enhanceStaticCode() {
    content.querySelectorAll('.step-card pre:not(.code-wrap pre), .exercises-99 pre').forEach((pre) => {
      if (pre.closest('.code-wrap')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrap';
      const toolbar = document.createElement('div');
      toolbar.className = 'code-toolbar';
      toolbar.innerHTML = '<span>Código ou estrutura</span><button class="copy-button" type="button" data-copy>Copiar</button>';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.append(toolbar, pre);
    });
  }

  function render() {
    const query = searchInput.value.trim();
    if (query) {
      renderSearch(query);
      enhanceStaticCode();
      return;
    }
    searchStatus.textContent = '';
    const { route, item } = getState();
    setActiveRoute(route);
    if (route === 'inicio') renderStart(item);
    if (route === 'aprender') renderLearn(item);
    if (route === 'referencia') renderReference();
    if (route === 'biblioteca') renderLibrary(item);
    if (route === 'aplicacoes') renderApplications(item);
    if (route === 'desafios') renderChallenges(item);
    enhanceStaticCode();
    document.title = `${content.querySelector('h2')?.textContent || 'Python'} | Mundo bit Byte`;
  }

  pathMenu.addEventListener('click', (event) => {
    const button = event.target.closest('[data-route]');
    if (button) go(button.dataset.route);
  });

  document.addEventListener('click', async (event) => {
    const goButton = event.target.closest('[data-go]');
    if (goButton) {
      if (searchInput.value) searchInput.value = '';
      go(goButton.dataset.go);
      return;
    }
    const refFilter = event.target.closest('[data-ref-filter]');
    if (refFilter) { referenceFilter = refFilter.dataset.refFilter; renderReference(); return; }
    const libFilter = event.target.closest('[data-lib-filter]');
    if (libFilter) { libraryFilter = libFilter.dataset.libFilter; renderLibrary(getState().item); return; }
    const copy = event.target.closest('[data-copy]');
    if (copy) {
      const pre = copy.closest('.code-wrap')?.querySelector('pre');
      if (!pre) return;
      const original = copy.textContent;
      try {
        await navigator.clipboard.writeText(pre.textContent);
        copy.textContent = 'Copiado!';
      } catch (_) {
        const area = document.createElement('textarea');
        area.value = pre.textContent; area.setAttribute('readonly', ''); area.style.position = 'fixed'; area.style.opacity = '0';
        document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); copy.textContent = 'Copiado!';
      }
      window.setTimeout(() => copy.textContent = original, 1400);
    }
  });

  searchInput.addEventListener('input', render);
  clearSearch.addEventListener('click', () => { searchInput.value = ''; searchInput.focus(); render(); });
  window.addEventListener('hashchange', () => { render(); content.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'auto' }); });

  if (!location.hash) history.replaceState(null, '', '#inicio/escolha');
  render();
})();
