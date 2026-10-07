// Restaura o padrão visual aprovado dos cinco exercícios completos de Interfaces.
(function () {
  if (typeof modules === 'undefined' || !modules.interfaceBasica) return;

  const exercise = modules.interfaceBasica.steps?.find(step => step.id === 'exercicios-interface-flexbox');
  if (!exercise || typeof exercise.html !== 'string') return;
  if (!exercise.html.includes('mbb-fullscreens-retained')) return;
  if (exercise.html.includes('mbb-fullscreens-visual-fixed')) return;

  let html = exercise.html;

  html = html.replace(
    '<section id="mbb-fullscreens-retained" style="margin-top:28px;">',
    '<section id="mbb-fullscreens-retained" class="exercise-native exercise-clean" data-mbb-fullscreens-visual-fixed="1" style="margin-top:28px;">'
  );

  let index = 0;
  html = html.replace(
    /<section class="exercise-clean-section active" style="display:block;margin-bottom:(?:24px|4px);">/g,
    () => {
      index += 1;
      return `<section id="mbb-fullscreen-${index}" class="exercise-clean-section${index === 1 ? ' active' : ''}">`;
    }
  );

  const menu = `
    <div id="mbb-fullscreens-visual-fixed" class="panel exercise-menu-panel" style="margin-bottom:16px;">
      <div class="panel-body gallery exercise-menu-gallery">
        <button class="thumb-card active" type="button" data-mbb-full-tab="1" onclick="showMbbFullExercise(1, this)">
          <div class="thumb-title">1. Tarefas</div>
          <div class="thumb-phone"><div class="thumb-bar purple">Tarefas</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-green">📋</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:32px"></div><div class="mini-btns"><div class="mini-btn btn-green"></div><div class="mini-btn btn-blue"></div><div class="mini-btn btn-red"></div></div></div></div>
        </button>
        <button class="thumb-card" type="button" data-mbb-full-tab="2" onclick="showMbbFullExercise(2, this)">
          <div class="thumb-title">2. Produtos</div>
          <div class="thumb-phone"><div class="thumb-bar blue">Produtos</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-orange">📦</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line"></div><div class="mini-line"></div><div class="mini-btns"><div class="mini-btn btn-blue"></div><div class="mini-btn btn-gray"></div></div></div></div>
        </button>
        <button class="thumb-card" type="button" data-mbb-full-tab="3" onclick="showMbbFullExercise(3, this)">
          <div class="thumb-title">3. Gastos</div>
          <div class="thumb-phone"><div class="thumb-bar green">Gastos</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-green">💰</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:40px"></div><div class="mini-btns"><div class="mini-btn btn-green"></div><div class="mini-btn btn-red"></div></div></div></div>
        </button>
        <button class="thumb-card" type="button" data-mbb-full-tab="4" onclick="showMbbFullExercise(4, this)">
          <div class="thumb-title">4. Atendimento</div>
          <div class="thumb-phone"><div class="thumb-bar orange">Agenda</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-blue">👤</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line"></div><div class="mini-btns"><div class="mini-btn btn-orange"></div><div class="mini-btn btn-gray"></div></div></div></div>
        </button>
        <button class="thumb-card" type="button" data-mbb-full-tab="5" onclick="showMbbFullExercise(5, this)">
          <div class="thumb-title">5. Biblioteca</div>
          <div class="thumb-phone"><div class="thumb-bar dark">Biblioteca</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-purple">📚</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:30px"></div><div class="mini-btns"><div class="mini-btn btn-purple"></div><div class="mini-btn btn-red"></div></div></div></div>
        </button>
      </div>
    </div>`;

  html = html.replace('<section id="mbb-fullscreen-1" class="exercise-clean-section active">', `${menu}\n<section id="mbb-fullscreen-1" class="exercise-clean-section active">`);

  const imageLinks = [
    'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
    'https://cdn-icons-png.flaticon.com/512/679/679720.png',
    'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
    'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    'https://cdn-icons-png.flaticon.com/512/2232/2232688.png'
  ];

  imageLinks.forEach(url => {
    html = html.replace(
      `<strong>🖼 Imagem:</strong> ${url}`,
      `<strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('${url}', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button>`
    );
  });

  exercise.html = html;

  window.showMbbFullExercise = function (number, button) {
    const root = document.getElementById('mbb-fullscreens-retained');
    if (!root) return;

    root.querySelectorAll('.exercise-clean-section').forEach(section => {
      section.classList.remove('active');
    });

    root.querySelectorAll('[data-mbb-full-tab]').forEach(tab => {
      tab.classList.remove('active');
    });

    const target = root.querySelector(`#mbb-fullscreen-${number}`);
    if (target) target.classList.add('active');
    if (button) button.classList.add('active');
  };

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
