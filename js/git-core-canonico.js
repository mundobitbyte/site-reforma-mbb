const menu = document.getElementById('menu');
const lesson = document.getElementById('lesson');
const title = document.getElementById('stepTitle');
const objective = document.getElementById('objective');
const moduleButtons = [...document.querySelectorAll('.module-btn')];

const modules = {
  git: {label: 'Git', steps: gitSteps},
  github: {label: 'GitHub', steps: githubSteps},
  exercicios: {label: '99. Exercícios', steps: exerciseSteps},
  comandos: {label: 'Comandos', steps: commandSteps}
};

let activeModule = 'git';
let activeSteps = gitSteps;

function renderMenu(){
  menu.innerHTML = '<h3>Etapas</h3>';
  activeSteps.forEach(step => {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.id = `btn-${activeModule}-${step.id}`;
    button.textContent = step.menu;
    button.type = 'button';
    button.addEventListener('click', () => showStep(step.id));
    menu.appendChild(button);
  });
}

function setModule(moduleKey, stepId = null, updateHash = true){
  if(!modules[moduleKey]) moduleKey = 'git';
  activeModule = moduleKey;
  activeSteps = modules[moduleKey].steps;
  moduleButtons.forEach(button => {
    const isActive = button.dataset.module === activeModule;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
  renderMenu();
  const target = activeSteps.find(item => String(item.id) === String(stepId)) || activeSteps[0];
  showStep(target.id, updateHash);
}

function showStep(id, updateHash = true){
  const step = activeSteps.find(item => String(item.id) === String(id)) || activeSteps[0];
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.getElementById(`btn-${activeModule}-${step.id}`);
  if(active){
    active.classList.add('active');
    active.setAttribute('aria-current', 'page');
    active.scrollIntoView({block:'nearest', inline:'nearest'});
  }
  title.textContent = step.title;
  objective.innerHTML = `<strong>Objetivo:</strong> ${step.objective}`;
  lesson.innerHTML = `${step.content}${lessonFooter(step.id)}`;
  lesson.scrollTop = 0;
  window.scrollTo({top:0, behavior:'auto'});
  if(updateHash) history.replaceState(null, '', `#${activeModule}-${step.id}`);
  window.dispatchEvent(new CustomEvent('mbb:git-etapa', { detail: { modulo: activeModule, etapa: step.id } }));
}

function lessonFooter(id){
  const index = activeSteps.findIndex(item => String(item.id) === String(id));
  const prev = activeSteps[index - 1];
  const next = activeSteps[index + 1];
  const completionLabels = {
    git: 'Parte Git concluída',
    github: 'GitHub concluído',
    exercicios: 'Exercícios concluídos',
    comandos: 'Comandos concluídos'
  };
  const lastLabel = completionLabels[activeModule] || 'Módulo concluído';
  return `
    <div class="lesson-footer">
      <button type="button" ${prev ? `data-step-nav="${prev.id}"` : 'disabled'}>← Anterior</button>
      <button type="button" ${next ? `data-step-nav="${next.id}"` : 'disabled'}>${next ? 'Próxima →' : lastLabel}</button>
    </div>`;
}

lesson.addEventListener('click', event => {
  const button = event.target.closest('[data-step-nav]');
  if (!button) return;
  showStep(button.dataset.stepNav);
});

window.setModule = setModule;
window.showStep = showStep;

moduleButtons.forEach(button => button.addEventListener('click', () => setModule(button.dataset.module)));

const oldHash = location.hash.match(/^#etapa-(\d+)$/);
const newHash = location.hash.match(/^#(git|github|exercicios|comandos)-(.+)$/);
if(newHash){
  setModule(newHash[1], decodeURIComponent(newHash[2]), false);
}else if(oldHash){
  setModule('git', oldHash[1], false);
}else{
  setModule('git', 1, false);
}
