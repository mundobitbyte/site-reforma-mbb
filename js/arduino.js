(() => {
  const style = document.createElement('style');
  style.textContent = `
    body > header{height:46px!important;min-height:46px!important;max-height:46px!important;padding:0 16px!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;text-align:left!important}
    body > header .header-left{display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:12px!important;min-width:0!important;flex:1 1 auto!important;text-align:left!important}
    body > header h1{margin:0!important;text-align:left!important}
    body > header .brand{margin-left:auto!important;text-align:right!important}
    #arduinoModuleMenu .module-btn{font-family:inherit!important}
    @media(max-width:760px){body > header{padding:0 10px!important;gap:8px!important}body > header .header-left{gap:8px!important}body > header .brand{display:none!important}}
  `;
  document.head.appendChild(style);
})();

function copyCode(id){
  const code = document.getElementById(id);
  if(code && navigator.clipboard){
    navigator.clipboard.writeText(code.textContent);
  }
}

document.addEventListener('click', function(event){
  const btn = event.target.closest('.mc-option');
  if(!btn) return;
  const question = btn.closest('.mc-question');
  if(!question || question.classList.contains('answered')) return;
  const feedback = question.querySelector('.mc-feedback');
  const options = question.querySelectorAll('.mc-option');
  const correct = btn.dataset.correct === 'true';
  question.classList.add('answered');
  options.forEach(option => {
    option.disabled = true;
    if(option.dataset.correct === 'true') option.classList.add('correct');
  });
  if(correct){
    btn.classList.add('correct');
    if(feedback){ feedback.textContent = 'Certa.'; feedback.className = 'mc-feedback ok'; }
  }else{
    btn.classList.add('wrong');
    if(feedback){ feedback.textContent = 'Errada.'; feedback.className = 'mc-feedback no'; }
  }
});

function montarMenuEtapas(){
  const stageMenu = document.getElementById('stageMenu');
  if(!stageMenu) return;
  stageMenu.innerHTML = `
    <a class="stage-link" data-module="fundamentos" href="#intro">Entender</a>
    <a class="stage-link" data-module="fundamentos" href="#fund-experimentar">Experimentar componentes</a>
    <a class="stage-link" data-module="fundamentos" href="#p1">1º projeto — LED protegido</a>
    <a class="stage-link" data-module="fundamentos" href="#fund-minilabs">Mini-laboratórios</a>
    <a class="stage-link" data-module="fundamentos" href="#fund-desafios">Desafios</a>
    <a class="stage-link" data-module="io" href="#p2">Blink</a>
    <a class="stage-link" data-module="io" href="#p3">Botão + LED</a>
    <a class="stage-link" data-module="io" href="#p4">Buzzer</a>
    <a class="stage-link" data-module="io" href="#p5">Potenciômetro</a>
    <a class="stage-link" data-module="io" href="#lab1">Monitor Serial</a>
    <a class="stage-link" data-module="sensores" href="#p6">Fotoresistor (LDR)</a>
    <a class="stage-link" data-module="sensores" href="#p7">Sensor de distância</a>
    <a class="stage-link" data-module="sensores" href="#lab2">Sensor de ré</a>
    <a class="stage-link" data-module="atuadores" href="#p8">LED RGB</a>
    <a class="stage-link" data-module="atuadores" href="#lab3">RGB + botões</a>
    <a class="stage-link" data-module="atuadores" href="#p9">Servo Motor</a>
    <a class="stage-link" data-module="atuadores" href="#lab4">Lixeira automática</a>
    <a class="stage-link stage-exercises" data-module="fundamentos io sensores atuadores" href="#exercicios">Exercícios</a>
    <a class="stage-link stage-questionario" data-module="fundamentos io sensores atuadores" href="https://forms.gle/mifTy8s8NZ2hcWHc8" target="_blank" rel="noopener noreferrer">Questionário</a>
  `;
  const ioButton = document.querySelector('#arduinoModuleMenu .module-btn[data-module="io"]');
  if(ioButton) ioButton.dataset.target = '#p2';
}

function acrescentarModulos5a10(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;
  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');
  const itens = [
    ['arduino-programacao-aplicada.html','5. Programação Aplicada'],
    ['arduino-conectividade.html','6. Conectividade'],
    ['arduino-iot.html','7. Internet das Coisas'],
    ['arduino-protocolos.html','8. RTOS e Protocolos'],
    ['arduino-seguranca.html','9. Proteção e Segurança'],
    ['arduino-projeto-iot.html','10. Projeto IoT']
  ];
  itens.forEach(([href, texto]) => {
    if(menu.querySelector(`a[href="${href}"]`)) return;
    const link = document.createElement('a');
    link.className='module-btn'; link.href=href; link.textContent=texto; link.style.textDecoration='none';
    if(exercicios) menu.insertBefore(link, exercicios); else menu.appendChild(link);
  });
}

function iniciarNavegacaoArduino(){
  const layout = document.getElementById('arduinoLayout');
  const moduleButtons = Array.from(document.querySelectorAll('#arduinoModuleMenu .module-btn'));
  const stageLinks = Array.from(document.querySelectorAll('#stageMenu .stage-link'));
  const stageToggle = document.getElementById('stageToggle');
  const stageClose = document.getElementById('stageClose');
  const stageBackdrop = document.getElementById('stageBackdrop');
  if(!layout || !moduleButtons.length) return;

  const modules = {
    fundamentos: { first:'#intro', sidebar:true },
    io: { first:'#p2', sidebar:true },
    sensores: { first:'#p6', sidebar:true },
    atuadores: { first:'#p8', sidebar:true }
  };
  const sectionModule = {
    '#intro':'fundamentos', '#fund-experimentar':'fundamentos', '#fund-minilabs':'fundamentos', '#fund-desafios':'fundamentos', '#p1':'fundamentos',
    '#p2':'io', '#p3':'io', '#p4':'io', '#p5':'io', '#lab1':'io',
    '#p6':'sensores', '#p7':'sensores', '#lab2':'sensores',
    '#p8':'atuadores', '#lab3':'atuadores', '#p9':'atuadores', '#lab4':'atuadores',
    '#ex-fundamentos':'fundamentos', '#ex-led':'fundamentos',
    '#ex-blink':'io', '#ex-botao':'io', '#ex-buzzer':'io', '#ex-pwm':'io', '#ex-monitor-serial':'io',
    '#ex-ldr':'sensores', '#ex-sensor-re':'sensores',
    '#ex-led-rgb':'atuadores', '#ex-servo':'atuadores', '#ex-led-rgb-botoes':'atuadores', '#ex-lixeira':'atuadores'
  };

  function closeDrawer(){ layout.classList.remove('drawer-open'); if(stageBackdrop) stageBackdrop.hidden=true; if(stageToggle) stageToggle.setAttribute('aria-expanded','false'); }
  function openDrawer(){ if(layout.classList.contains('no-sidebar')) return; layout.classList.add('drawer-open'); if(stageBackdrop) stageBackdrop.hidden=false; if(stageToggle) stageToggle.setAttribute('aria-expanded','true'); }
  function setModule(moduleName){
    if(!modules[moduleName]) return;
    moduleButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.module === moduleName));
    layout.classList.toggle('no-sidebar', !modules[moduleName].sidebar);
    stageLinks.forEach(link => {
      const allowed = (link.dataset.module || '').split(/\s+/).includes(moduleName);
      link.classList.toggle('module-visible', allowed && modules[moduleName].sidebar);
    });
    closeDrawer();
  }
  function setActiveStage(hash){
    const stageHash = hash.startsWith('#ex-') ? '#exercicios' : hash;
    stageLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === stageHash));
  }
  function showPanel(hash, updateUrl){
    const target = document.querySelector(hash);
    if(!target) return;
    const topPanel = target.matches('main > section[id]') ? target : target.closest('main > section[id]');
    if(!topPanel) return;
    document.querySelectorAll('main > section[id]').forEach(section => section.classList.remove('active-panel'));
    topPanel.classList.add('active-panel');
    setActiveStage(hash);
    if(updateUrl) history.replaceState(null,'',hash);
    window.scrollTo(0,0);
    if(hash !== '#' + topPanel.id){ requestAnimationFrame(() => { const nested=document.querySelector(hash); if(nested) nested.scrollIntoView({block:'start'}); }); }
  }
  function activateModule(moduleName, targetHash, updateUrl){ setModule(moduleName); showPanel(targetHash || modules[moduleName].first, updateUrl); }

  moduleButtons.forEach(btn => {
    if(!btn.dataset.module) return;
    btn.addEventListener('click', function(){ activateModule(this.dataset.module, this.dataset.target || modules[this.dataset.module].first, true); });
  });
  stageLinks.forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href') || '';
      if(/^https?:\/\//i.test(href)){ closeDrawer(); return; }
      e.preventDefault();
      const hash=href;
      const moduleName=(this.dataset.module || '').split(/\s+/)[0];
      if(moduleName && modules[moduleName]) setModule(moduleName);
      showPanel(hash,true);
      closeDrawer();
    });
  });
  if(stageToggle) stageToggle.addEventListener('click',openDrawer);
  if(stageClose) stageClose.addEventListener('click',closeDrawer);
  if(stageBackdrop) stageBackdrop.addEventListener('click',closeDrawer);
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeDrawer(); });

  const initialHash = location.hash && document.querySelector(location.hash) ? location.hash : '#intro';
  let initialModule = sectionModule[initialHash];
  if(!initialModule){
    const t=document.querySelector(initialHash); const top=t && (t.matches('main > section[id]') ? t : t.closest('main > section[id]'));
    if(top && top.id==='exercicios') initialModule='io';
  }
  activateModule(initialModule || 'fundamentos', initialHash, false);
}

function manterModuloAtivoVisivel(){
  const menu=document.getElementById('arduinoModuleMenu');
  const ativo=menu && menu.querySelector('.module-btn.active');
  if(!menu || !ativo) return;
  requestAnimationFrame(() => {
    const mr=menu.getBoundingClientRect(), ir=ativo.getBoundingClientRect();
    const alvo=menu.scrollLeft+(ir.left-mr.left)-((menu.clientWidth-ir.width)/2);
    const max=Math.max(0,menu.scrollWidth-menu.clientWidth);
    menu.scrollLeft=Math.min(max,Math.max(0,alvo));
  });
}

document.addEventListener('DOMContentLoaded', function(){
  const scripts = [
    '../js/arduino-fundamentos-mbb.js?v=20260911-2',
    '../js/arduino-fechamento-mbb.js?v=20260911-1',
    '../js/arduino-contextualizacao-mbb.js?v=20260911-1',
    '../js/arduino-destaques-mbb.js?v=20260926-2'
  ];

  function carregar(indice){
    if(indice >= scripts.length){
      if(window.MbbArduinoFundamentos) window.MbbArduinoFundamentos.preparar();
      if(window.MbbArduinoFechamento) window.MbbArduinoFechamento.aplicar();
      if(window.MbbArduinoContexto) window.MbbArduinoContexto.aplicar();
      if(window.MbbArduinoDestaques) window.MbbArduinoDestaques.aplicar();
      montarMenuEtapas();
      acrescentarModulos5a10();
      iniciarNavegacaoArduino();
      manterModuloAtivoVisivel();
      return;
    }
    const script = document.createElement('script');
    script.src = scripts[indice];
    script.onload = () => carregar(indice + 1);
    script.onerror = () => carregar(indice + 1);
    document.head.appendChild(script);
  }

  carregar(0);
});
window.addEventListener('pageshow', manterModuloAtivoVisivel);
window.addEventListener('resize', manterModuloAtivoVisivel);