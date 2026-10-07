(() => {
  'use strict';

  const lesson = document.getElementById('lessonContent');
  if (!lesson) return;

  const contextVisual = `
    <div class="visual-box" data-cap01-visual="contexto">
      <strong class="card-title">A preparação precisa ser comparável entre os grupos</strong>
      <img class="lesson-visual" src="../img/ds-quimica/cap01-contexto.webp" alt="Laboratório escolar com professor e estudante preparando seis bandejas semelhantes para uma aula prática. À frente aparecem materiais e rótulos como Cu, Al, Fe, NaCl, sal iodado e pregos galvanizados, destacando a necessidade de conferir a composição das amostras antes de substituí-las.">
      <p class="visual-caption">A cena representa justamente o problema da aula: aparência e nome cotidiano não bastam para garantir que duas amostras tenham a mesma composição. Para comparar resultados, os grupos precisam receber materiais definidos nas mesmas condições.</p>
    </div>`;

  const macroMicroVisual = `
    <div class="visual-box" data-cap01-visual="macro-micro">
      <strong class="card-title">Do que vemos ao modelo que usamos para explicar</strong>
      <svg class="lesson-visual" viewBox="0 0 760 330" role="img" aria-label="Diagrama em três etapas. À esquerda, uma amostra visível de cobre. No centro, uma ampliação conceitual indicando investigação da composição. À direita, uma representação por esferas do elemento cobre, apresentada explicitamente como modelo microscópico e não como fotografia literal.">
        <defs>
          <linearGradient id="cuWire01" x1="0" x2="1"><stop offset="0" stop-color="#8f3f1d"/><stop offset="0.45" stop-color="#e18a55"/><stop offset="1" stop-color="#9e4723"/></linearGradient>
          <marker id="chemVisualArrow01" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker>
        </defs>
        <rect x="18" y="32" width="218" height="255" rx="18" fill="#eef5ff" stroke="#b8d1f2"/>
        <rect x="271" y="32" width="218" height="255" rx="18" fill="#f3f8f1" stroke="#cce1c8"/>
        <rect x="524" y="32" width="218" height="255" rx="18" fill="#fff5eb" stroke="#efd4b7"/>
        <circle cx="52" cy="63" r="20" fill="#1967d2"/><text x="52" y="70" text-anchor="middle" font-size="20" font-weight="900" fill="#fff">1</text>
        <circle cx="305" cy="63" r="20" fill="#3b7c47"/><text x="305" y="70" text-anchor="middle" font-size="20" font-weight="900" fill="#fff">2</text>
        <circle cx="558" cy="63" r="20" fill="#a6531c"/><text x="558" y="70" text-anchor="middle" font-size="20" font-weight="900" fill="#fff">3</text>
        <text x="83" y="69" font-size="16" font-weight="800" fill="#104a9b">Nível macroscópico</text>
        <text x="336" y="69" font-size="16" font-weight="800" fill="#35633c">Investigação</text>
        <text x="589" y="69" font-size="16" font-weight="800" fill="#7e3d18">Modelo microscópico</text>
        <path d="M68 154 C102 120 152 120 188 154 C153 188 104 188 68 154" fill="none" stroke="url(#cuWire01)" stroke-width="17" stroke-linecap="round"/>
        <path d="M78 193 C111 166 152 166 184 193" fill="none" stroke="url(#cuWire01)" stroke-width="12" stroke-linecap="round"/>
        <text x="127" y="238" text-anchor="middle" font-size="15" font-weight="800" fill="#4c2c1f">amostra de cobre</text>
        <circle cx="380" cy="158" r="62" fill="#fff" stroke="#6d8098" stroke-width="5"/>
        <path d="M344 169 C363 145 399 135 420 151" fill="none" stroke="url(#cuWire01)" stroke-width="20" stroke-linecap="round"/>
        <path d="M236 159 H269" stroke="#1967d2" stroke-width="4" marker-end="url(#chemVisualArrow01)"/>
        <path d="M489 159 H522" stroke="#1967d2" stroke-width="4" marker-end="url(#chemVisualArrow01)"/>
        <text x="380" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#42536b">o que compõe a amostra?</text>
        <g fill="#c56d3d" stroke="#7f3c1f" stroke-width="1.5">
          <circle cx="581" cy="133" r="18"/><circle cx="620" cy="133" r="18"/><circle cx="659" cy="133" r="18"/>
          <circle cx="600" cy="168" r="18"/><circle cx="639" cy="168" r="18"/><circle cx="678" cy="168" r="18"/>
          <circle cx="581" cy="203" r="18"/><circle cx="620" cy="203" r="18"/><circle cx="659" cy="203" r="18"/>
        </g>
        <text x="630" y="239" text-anchor="middle" font-size="15" font-weight="800" fill="#7e3d18">representação do elemento Cu</text>
        <text x="380" y="314" text-anchor="middle" font-size="13" fill="#617087">A ampliação é conceitual. As esferas são uma representação científica: não mostram cor, tamanho ou aparência literal dos átomos.</text>
      </svg>
    </div>`;

  const periodicVisual = `
    <div class="visual-box" data-cap01-visual="tabela-cobre">
      <strong class="card-title">Como ler uma célula da Tabela Periódica</strong>
      <svg class="lesson-visual" viewBox="0 0 760 390" role="img" aria-label="Célula didática do elemento cobre. O número 29 é identificado como número atômico, Cu como símbolo químico, Cobre como nome do elemento e 63,546 como massa atômica aproximada.">
        <defs><marker id="tileArrow01" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
        <rect x="262" y="48" width="236" height="292" rx="20" fill="#f5a26e" stroke="#8d471f" stroke-width="4"/>
        <text x="294" y="95" font-size="34" font-weight="900" fill="#172033">29</text>
        <text x="380" y="205" text-anchor="middle" font-size="92" font-weight="900" fill="#172033">Cu</text>
        <text x="380" y="257" text-anchor="middle" font-size="33" font-weight="800" fill="#172033">Cobre</text>
        <text x="380" y="310" text-anchor="middle" font-size="30" font-weight="800" fill="#172033">63,546</text>
        <g color="#b42318">
          <rect x="18" y="56" width="190" height="80" rx="12" fill="#fff2f1" stroke="#d76b63"/>
          <text x="34" y="84" font-size="16" font-weight="900" fill="#b42318">número atômico</text><text x="34" y="108" font-size="13" fill="#4b5b72">quantidade de prótons</text>
          <path d="M208 96 H278" stroke="#b42318" stroke-width="3" marker-end="url(#tileArrow01)"/>
        </g>
        <g color="#1967d2">
          <rect x="552" y="112" width="190" height="82" rx="12" fill="#eef5ff" stroke="#7cadde"/>
          <text x="568" y="141" font-size="16" font-weight="900" fill="#104a9b">símbolo químico</text><text x="568" y="165" font-size="13" fill="#4b5b72">identifica o elemento</text>
          <path d="M552 154 H478" stroke="#1967d2" stroke-width="3" marker-end="url(#tileArrow01)"/>
        </g>
        <g color="#087f5b">
          <rect x="18" y="216" width="190" height="82" rx="12" fill="#eefbf6" stroke="#63b59b"/>
          <text x="34" y="245" font-size="16" font-weight="900" fill="#087f5b">nome do elemento</text><text x="34" y="269" font-size="13" fill="#4b5b72">nome: cobre</text>
          <path d="M208 257 H292" stroke="#087f5b" stroke-width="3" marker-end="url(#tileArrow01)"/>
        </g>
        <g color="#6d4aff">
          <rect x="552" y="250" width="190" height="94" rx="12" fill="#f5f2ff" stroke="#a998ec"/>
          <text x="568" y="278" font-size="16" font-weight="900" fill="#5d42bd">massa atômica</text><text x="568" y="302" font-size="13" fill="#4b5b72">≈ 63,546 u para o Cu</text><text x="568" y="323" font-size="12" fill="#617087">não é a massa da amostra</text>
          <path d="M552 297 H480" stroke="#6d4aff" stroke-width="3" marker-end="url(#tileArrow01)"/>
        </g>
        <text x="380" y="376" text-anchor="middle" font-size="13" fill="#617087">Cada informação responde a uma pergunta diferente. O número atômico identifica o elemento; a massa atômica não substitui esse papel.</text>
      </svg>
    </div>`;

  function sectionStartingWith(text) {
    return [...lesson.querySelectorAll('section')].find(section => section.querySelector('h3')?.textContent.trim().startsWith(text));
  }

  function decorate() {
    const title = document.getElementById('lessonTitle')?.textContent.trim();
    if (title !== 'Do que as coisas ao nosso redor são feitas?') return;
    if (lesson.querySelector('[data-cap01-visual="contexto"]')) return;

    const opening = lesson.querySelector('.chemistry-opening');
    if (opening) opening.insertAdjacentHTML('beforeend', contextVisual);

    const macroSection = sectionStartingWith('2. A composição');
    if (macroSection) {
      const paragraphs = macroSection.querySelectorAll(':scope > p');
      const anchor = paragraphs[1] || paragraphs[0];
      if (anchor) anchor.insertAdjacentHTML('afterend', macroMicroVisual);
    }

    const massSection = sectionStartingWith('7. A ficha');
    if (massSection) {
      const firstParagraph = massSection.querySelector(':scope > p');
      if (firstParagraph) firstParagraph.insertAdjacentHTML('afterend', periodicVisual);
    }
  }

  const observer = new MutationObserver(() => requestAnimationFrame(decorate));
  observer.observe(lesson, { childList:true, subtree:false });
  requestAnimationFrame(decorate);
})();
