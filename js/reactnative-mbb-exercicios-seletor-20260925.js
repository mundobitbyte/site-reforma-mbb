// Mundo bit Byte — navegação por abas entre desafios progressivos e aplicativos completos.
// Mantém os desafios 1 a 9 e os cinco exercícios completos já aprovados.
(function () {
  if (typeof modules === 'undefined' || !modules.interfaceBasica) return;

  const exercise = modules.interfaceBasica.steps?.find(
    step => step.id === 'exercicios-interface-flexbox'
  );
  if (!exercise || typeof exercise.html !== 'string') return;
  if (exercise.html.includes('id="mbb-exercise-switcher"')) return;

  let html = exercise.html;

  // Remove a antiga atividade autoral que não faz mais parte desta sequência.
  html = html.replace(
    /\s*<article class="mbb-challenge-card mbb-challenge-wide mbb-final-challenge">[\s\S]*?<\/article>/,
    ''
  );

  const classicMarker = '<div id="mbb-fullscreens-retained"';
  const classicIndex = html.indexOf(classicMarker);
  if (classicIndex < 0) return;

  let novos = html.slice(0, classicIndex).trim();
  let classicos = html.slice(classicIndex).trim();

  // Nos cinco exercícios completos, usa a própria imagem do link tanto
  // ao lado do botão "Copiar link" quanto dentro da tela-modelo.
  const classicTemplate = document.createElement('template');
  classicTemplate.innerHTML = classicos;
  const classicRoot = classicTemplate.content.querySelector('#mbb-fullscreens-retained');

  if (classicRoot) {
    classicRoot.querySelectorAll('.exercise-clean-section').forEach(section => {
      const copyButton = section.querySelector('button[onclick*="copyImageLink("]');
      if (!copyButton) return;

      const onclickText = copyButton.getAttribute('onclick') || '';
      const urlMatch = onclickText.match(/copyImageLink\('([^']+)'/);
      const imageUrl = urlMatch?.[1];
      if (!imageUrl) return;

      const infoBox = copyButton.parentElement;
      if (infoBox && !infoBox.querySelector('.mbb-classic-real-image')) {
        infoBox.style.display = 'flex';
        infoBox.style.alignItems = 'center';
        infoBox.style.gap = '10px';
        infoBox.style.flexWrap = 'wrap';

        const image = document.createElement('img');
        image.className = 'mbb-classic-real-image';
        image.src = imageUrl;
        image.alt = 'Imagem que será usada neste aplicativo';
        image.loading = 'lazy';
        image.decoding = 'async';
        image.style.width = '58px';
        image.style.height = '58px';
        image.style.objectFit = 'contain';
        image.style.background = '#ffffff';
        image.style.border = '1px solid #dbe3ef';
        image.style.borderRadius = '10px';
        image.style.padding = '5px';
        image.style.boxSizing = 'border-box';
        image.style.flex = '0 0 auto';
        infoBox.insertBefore(image, infoBox.firstChild);

        const label = infoBox.querySelector('strong');
        if (label) label.textContent = 'Imagem (Image):';
      }

      const mockImageBox = section.querySelector('.photo-box');
      if (mockImageBox) {
        mockImageBox.textContent = '';
        mockImageBox.style.overflow = 'hidden';

        const mockImage = document.createElement('img');
        mockImage.className = 'mbb-classic-mock-image';
        mockImage.src = imageUrl;
        mockImage.alt = 'Imagem usada na tela deste aplicativo';
        mockImage.loading = 'lazy';
        mockImage.decoding = 'async';
        mockImage.style.width = '88%';
        mockImage.style.height = '88%';
        mockImage.style.objectFit = 'contain';
        mockImage.style.display = 'block';
        mockImage.style.margin = 'auto';
        mockImageBox.appendChild(mockImage);
      }
    });

    classicos = classicRoot.outerHTML;
  }

  // Mantém o cabeçalho enxuto e voltado ao aluno.
  classicos = classicos.replace(
`<div id="mbb-fullscreens-retained" class="exercise-clean" style="margin-top:30px;">
  <div class="topline exercise-clean-top">
    <div>
      <span class="tag">Consolidação MbB</span>
      <h2>Telas completas</h2>
    </div>
    <div class="objective"><strong>Objetivo:</strong> praticar a construção de interfaces completas como na Agenda de Contatos.</div>
  </div>`,
`<div id="mbb-fullscreens-retained" class="exercise-native exercise-clean">
  <div class="topline exercise-clean-top">
    <h2>Aplicativos completos</h2>
    <div class="objective"><strong>Objetivo:</strong> reconstruir interfaces completas usando os recursos estudados.</div>
  </div>`
  );

  exercise.title = '99 — Exercícios de Interfaces e Flexbox';
  exercise.objective = 'Praticar layouts de forma progressiva e depois aplicar os conhecimentos em interfaces completas.';
  exercise.exercisePage = true;

  exercise.html = `
<style>
  #mbb-exercise-switcher{
    position:sticky;
    top:0;
    z-index:20;
    margin:0 0 14px;
    padding:8px 0 0;
    background:linear-gradient(180deg,#fff 0%,#fff 82%,rgba(255,255,255,.94) 100%);
  }
  #mbb-exercise-switcher .mbb-exercise-tabs{
    display:flex;
    gap:4px;
    border-bottom:1px solid #cbd5e1;
    overflow-x:auto;
    scrollbar-width:none;
  }
  #mbb-exercise-switcher .mbb-exercise-tabs::-webkit-scrollbar{display:none}
  #mbb-exercise-switcher .mbb-exercise-tab{
    appearance:none;
    border:0;
    border-bottom:3px solid transparent;
    background:transparent;
    color:#526174;
    padding:11px 16px 10px;
    font-size:.93rem;
    font-weight:800;
    cursor:pointer;
    white-space:nowrap;
    transition:.15s ease;
  }
  #mbb-exercise-switcher .mbb-exercise-tab:hover{color:#0f3f86;background:#f8fbff}
  #mbb-exercise-switcher .mbb-exercise-tab.active{
    color:#0f3f86;
    border-bottom-color:#1967d2;
    background:#f4f8ff;
  }
  #mbb-exercise-switcher .mbb-exercise-tab:focus-visible{
    outline:3px solid rgba(25,103,210,.24);
    outline-offset:-3px;
  }
  .mbb-exercise-group[hidden]{display:none !important}
  .mbb-exercise-group{margin-top:0}
  .mbb-exercise-group > .mbb-challenge-page,
  .mbb-exercise-group > .exercise-clean{margin-top:0 !important}
  @media(max-width:620px){
    #mbb-exercise-switcher{margin-bottom:10px}
    #mbb-exercise-switcher .mbb-exercise-tab{flex:1 0 auto;padding:10px 12px 9px;font-size:.88rem}
  }
</style>

<div id="mbb-exercise-switcher">
  <div class="mbb-exercise-tabs" role="tablist" aria-label="Tipos de exercícios">
    <button
      type="button"
      id="mbb-tab-novos"
      class="mbb-exercise-tab active"
      role="tab"
      aria-selected="true"
      aria-controls="mbb-exercise-group-novos"
      data-mbb-group="novos"
      onclick="mbbTrocarGrupoExercicios('novos')"
    >Desafios progressivos</button>
    <button
      type="button"
      id="mbb-tab-classicos"
      class="mbb-exercise-tab"
      role="tab"
      aria-selected="false"
      aria-controls="mbb-exercise-group-classicos"
      data-mbb-group="classicos"
      onclick="mbbTrocarGrupoExercicios('classicos')"
    >Aplicativos completos</button>
  </div>
</div>

<section id="mbb-exercise-group-novos" class="mbb-exercise-group" role="tabpanel" aria-labelledby="mbb-tab-novos">
${novos}
</section>

<section id="mbb-exercise-group-classicos" class="mbb-exercise-group" role="tabpanel" aria-labelledby="mbb-tab-classicos" hidden>
${classicos}
</section>`;

  window.mbbTrocarGrupoExercicios = function (grupo) {
    const seletor = document.getElementById('mbb-exercise-switcher');
    if (!seletor) return;

    const novosEl = document.getElementById('mbb-exercise-group-novos');
    const classicosEl = document.getElementById('mbb-exercise-group-classicos');
    if (!novosEl || !classicosEl) return;

    const mostrarClassicos = grupo === 'classicos';
    novosEl.hidden = mostrarClassicos;
    classicosEl.hidden = !mostrarClassicos;

    seletor.querySelectorAll('.mbb-exercise-tab').forEach(tab => {
      const ativa = tab.dataset.mbbGroup === grupo;
      tab.classList.toggle('active', ativa);
      tab.setAttribute('aria-selected', ativa ? 'true' : 'false');
    });

    if (mostrarClassicos && typeof window.showExerciseInterface === 'function') {
      window.showExerciseInterface(1);
    }
  };

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
