(() => {
  const areasView = document.getElementById('areas');
  const moduleViews = Array.from(document.querySelectorAll('.modules-view[data-area]'));

  const programacaoView = document.getElementById('programacao-desenvolvimento');
  const reactNativeCard = programacaoView?.querySelector('a.module-card[href="pages/reactnative.html"]');
  const backendCardExists = programacaoView?.querySelector('a.module-card[href="pages/backend-fastapi.html"]');

  if (programacaoView && reactNativeCard && !backendCardExists) {
    const backendCard = document.createElement('a');
    backendCard.className = 'module-card';
    backendCard.href = 'pages/backend-fastapi.html';
    backendCard.innerHTML = `
      <div class="module-head"><h3>Backend e APIs com Python e FastAPI</h3></div>
      <div class="module-body">
        <p>HTTP e FastAPI, regras de negócio, banco de dados, segurança, integração e testes de APIs.</p>
        <span class="module-label">Backend</span>
      </div>`;
    reactNativeCard.insertAdjacentElement('afterend', backendCard);
  }

  const ensinoMedioLink = document.querySelector('[data-area-link="ensino-medio"]');
  const areasGrid = ensinoMedioLink?.closest('.areas-grid');
  if (ensinoMedioLink && areasGrid) {
    areasGrid.appendChild(ensinoMedioLink);
  }

  const ensinoMedioView = document.getElementById('ensino-medio');
  const naturezaGroup = ensinoMedioView?.querySelector('[aria-labelledby="natureza-title"]');
  const fisicaPlaceholder = naturezaGroup
    ? Array.from(naturezaGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Física')
    : null;

  if (fisicaPlaceholder) {
    const fisicaCard = document.createElement('a');
    fisicaCard.className = 'module-card';
    fisicaCard.href = 'ds-fisica/index.html';
    fisicaCard.innerHTML = `
      <div class="module-head"><h3>Física</h3></div>
      <div class="module-body">
        <p>Física da 1ª série com investigação de situações reais, avaliação diagnóstica, revisão adaptativa e construção gradual dos conceitos.</p>
        <span class="module-label">Diagnóstico disponível</span>
      </div>`;
    fisicaPlaceholder.replaceWith(fisicaCard);
  }

  const quimicaPlaceholder = naturezaGroup
    ? Array.from(naturezaGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Química')
    : null;

  if (quimicaPlaceholder) {
    const quimicaCard = document.createElement('a');
    quimicaCard.className = 'module-card';
    quimicaCard.href = 'ds-quimica/index.html';
    quimicaCard.innerHTML = `
      <div class="module-head"><h3>Química</h3></div>
      <div class="module-body">
        <p>Química da 1ª série com situações reais, avaliação diagnóstica, revisão direcionada e construção gradual dos modelos e conceitos.</p>
        <span class="module-label">Diagnóstico disponível</span>
      </div>`;
    quimicaPlaceholder.replaceWith(quimicaCard);
  }

  function prioritizeAvailableSubjects() {
    if (!ensinoMedioView) return;

    const groups = Array.from(ensinoMedioView.children).filter((element) => element.classList.contains('subject-group'));

    groups.forEach((group) => {
      const grid = group.querySelector('.modules-grid');
      if (!grid) return;
      const cards = Array.from(grid.children).filter((element) => element.classList.contains('module-card'));
      const available = cards.filter((card) => !card.classList.contains('is-disabled'));
      const unavailable = cards.filter((card) => card.classList.contains('is-disabled'));
      [...available, ...unavailable].forEach((card) => grid.appendChild(card));
    });

    const availableGroups = groups.filter((group) => group.querySelector('.module-card:not(.is-disabled)'));
    const unavailableGroups = groups.filter((group) => !group.querySelector('.module-card:not(.is-disabled)'));
    [...availableGroups, ...unavailableGroups].forEach((group) => ensinoMedioView.appendChild(group));
  }

  queueMicrotask(prioritizeAvailableSubjects);

  if (!areasView || moduleViews.length === 0) {
    return;
  }

  const defaultTitle = 'Mundo bit Byte — Materiais Didáticos';
  const validAreas = new Set(moduleViews.map((view) => view.dataset.area));
  const areaLinks = Array.from(document.querySelectorAll('[data-area-link]'));
  const backLinks = Array.from(document.querySelectorAll('[data-back]'));
  const backToolbars = Array.from(document.querySelectorAll('.modules-toolbar'));

  function areaFromLocation() {
    let hash = window.location.hash.replace(/^#/, '');

    try {
      hash = decodeURIComponent(hash);
    } catch (_) {
      return null;
    }

    return validAreas.has(hash) ? hash : null;
  }

  function render(area, options = {}) {
    const { focusHeading = false, scrollTop = false } = options;
    const target = area ? moduleViews.find((view) => view.dataset.area === area) : null;

    areasView.hidden = Boolean(target);

    moduleViews.forEach((view) => {
      view.hidden = view !== target;
    });

    if (target) {
      document.title = `${target.dataset.title} — Mundo bit Byte`;

      if (focusHeading) {
        const heading = target.querySelector('h2[tabindex="-1"]');
        if (heading) {
          heading.focus({ preventScroll: true });
        }
      }
    } else {
      document.title = defaultTitle;
    }

    if (scrollTop) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }

  function openArea(area) {
    if (!validAreas.has(area)) {
      return;
    }

    history.pushState(
      { mbbView: 'area', area, fromMbbHome: true },
      '',
      `#${encodeURIComponent(area)}`
    );

    render(area, { focusHeading: true, scrollTop: true });
  }

  function returnToAreas() {
    if (history.state && history.state.mbbView === 'area' && history.state.fromMbbHome) {
      history.back();
      return;
    }

    history.replaceState(
      { mbbView: 'home' },
      '',
      `${window.location.pathname}${window.location.search}`
    );

    render(null, { focusHeading: false, scrollTop: true });

    const areasTitle = document.getElementById('areas-title');
    if (areasTitle) {
      areasTitle.setAttribute('tabindex', '-1');
      areasTitle.focus({ preventScroll: true });
      areasTitle.addEventListener('blur', () => areasTitle.removeAttribute('tabindex'), { once: true });
    }
  }

  areaLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const area = link.dataset.areaLink;
      if (!validAreas.has(area)) {
        return;
      }

      event.preventDefault();
      openArea(area);
    });
  });

  backLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      returnToAreas();
    });
  });

  window.addEventListener('popstate', () => {
    render(areaFromLocation(), { focusHeading: true, scrollTop: true });
  });

  window.addEventListener('hashchange', () => {
    render(areaFromLocation(), { focusHeading: true, scrollTop: true });
  });

  const initialArea = areaFromLocation();

  if (initialArea) {
    history.replaceState(
      { mbbView: 'direct-area', area: initialArea },
      '',
      window.location.href
    );
  } else {
    history.replaceState(
      { mbbView: 'home' },
      '',
      `${window.location.pathname}${window.location.search}`
    );
  }

  document.documentElement.classList.add('js-ready');
  backToolbars.forEach((toolbar) => {
    toolbar.style.display = 'block';
  });
  render(initialArea, { focusHeading: false, scrollTop: Boolean(initialArea) });
})();

(() => {
  const ensinoMedioView = document.getElementById('ensino-medio');
  const humanasGroup = ensinoMedioView?.querySelector('[aria-labelledby="humanas-title"]');
  const geografiaPlaceholder = humanasGroup
    ? Array.from(humanasGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Geografia')
    : null;

  if (!geografiaPlaceholder) return;

  const geografiaCard = document.createElement('a');
  geografiaCard.className = 'module-card';
  geografiaCard.href = 'ds-geografia/index.html';
  geografiaCard.innerHTML = `
    <div class="module-head"><h3>Geografia</h3></div>
    <div class="module-body">
      <p>1ª série com leitura do espaço, paisagens, cartografia, população, redes, produção, riscos, sustentabilidade e exercícios integradores.</p>
      <span class="module-label">1ª série disponível</span>
    </div>`;
  geografiaPlaceholder.replaceWith(geografiaCard);
})();

(() => {
  const ensinoMedioView = document.getElementById('ensino-medio');
  const humanasGroup = ensinoMedioView?.querySelector('[aria-labelledby="humanas-title"]');
  if (!humanasGroup || humanasGroup.querySelector('a.module-card[href="ds-filosofia/index.html"]')) return;

  const filosofiaCard = document.createElement('a');
  filosofiaCard.className = 'module-card';
  filosofiaCard.href = 'ds-filosofia/index.html';
  filosofiaCard.innerHTML = `
    <div class="module-head"><h3>Filosofia</h3></div>
    <div class="module-body">
      <p>Investigação filosófica com diagnóstico, argumentação, conhecimento, ética, tecnologia, estética, justiça e exercícios progressivos.</p>
      <span class="module-label">1ª série disponível</span>
    </div>`;

  const geografiaCard = humanasGroup.querySelector('a.module-card[href="ds-geografia/index.html"]');
  const grid = humanasGroup.querySelector('.modules-grid');
  if (geografiaCard) geografiaCard.insertAdjacentElement('afterend', filosofiaCard);
  else grid?.appendChild(filosofiaCard);
})();

(() => {
  const ensinoMedioView = document.getElementById('ensino-medio');
  const linguagensGroup = ensinoMedioView?.querySelector('[aria-labelledby="linguagens-title"]');
  const portuguesPlaceholder = linguagensGroup
    ? Array.from(linguagensGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Língua Portuguesa')
    : null;

  if (!portuguesPlaceholder) return;

  const portuguesCard = document.createElement('a');
  portuguesCard.className = 'module-card';
  portuguesCard.href = 'ds-portugues/index.html';
  portuguesCard.innerHTML = `
    <div class="module-head"><h3>Língua Portuguesa</h3></div>
    <div class="module-body">
      <p>1ª série com leitura, oralidade, pesquisa, mídia, literatura, variação linguística, produção textual e linguagem digital.</p>
      <span class="module-label">1ª série disponível</span>
    </div>`;
  portuguesPlaceholder.replaceWith(portuguesCard);
})();

(() => {
  const ensinoMedioView = document.getElementById('ensino-medio');
  const linguagensGroup = ensinoMedioView?.querySelector('[aria-labelledby="linguagens-title"]');
  const inglesPlaceholder = linguagensGroup
    ? Array.from(linguagensGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Língua Inglesa')
    : null;

  if (!inglesPlaceholder) return;

  const inglesCard = document.createElement('a');
  inglesCard.className = 'module-card';
  inglesCard.href = 'ds-ingles/index.html';
  inglesCard.innerHTML = `
    <div class="module-head"><h3>Língua Inglesa</h3></div>
    <div class="module-body">
      <p>1ª série com leitura estratégica, interação, cultura digital, mídia, publicidade, arte, diversidade linguística, pesquisa e produção.</p>
      <span class="module-label">1ª série disponível</span>
    </div>`;
  inglesPlaceholder.replaceWith(inglesCard);
})();

(() => {
  const ensinoMedioView = document.getElementById('ensino-medio');
  const linguagensGroup = ensinoMedioView?.querySelector('[aria-labelledby="linguagens-title"]');
  const artePlaceholder = linguagensGroup
    ? Array.from(linguagensGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Arte')
    : null;

  if (!artePlaceholder) return;

  const arteCard = document.createElement('a');
  arteCard.className = 'module-card';
  arteCard.href = 'ds-arte/index.html';
  arteCard.innerHTML = `
    <div class="module-head"><h3>Arte</h3></div>
    <div class="module-body">
      <p>1ª série com artes visuais, música, dança, teatro, fotografia, audiovisual, patrimônio, cultura digital e processos de criação.</p>
      <span class="module-label">1ª série disponível</span>
    </div>`;
  artePlaceholder.replaceWith(arteCard);
})();

(() => {
  const ensinoMedioView = document.getElementById('ensino-medio');
  const linguagensGroup = ensinoMedioView?.querySelector('[aria-labelledby="linguagens-title"]');
  const educacaoFisicaPlaceholder = linguagensGroup
    ? Array.from(linguagensGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Educação Física')
    : null;

  if (!educacaoFisicaPlaceholder) return;

  const educacaoFisicaCard = document.createElement('a');
  educacaoFisicaCard.className = 'module-card';
  educacaoFisicaCard.href = 'ds-educacao-fisica/index.html';
  educacaoFisicaCard.innerHTML = `
    <div class="module-head"><h3>Educação Física</h3></div>
    <div class="module-body">
      <p>1ª série com práticas corporais guiadas, jogos, esportes, ginástica, dança, lutas, aventura, saúde e autonomia para a vida.</p>
      <span class="module-label">1ª série disponível</span>
    </div>`;
  educacaoFisicaPlaceholder.replaceWith(educacaoFisicaCard);
})();
