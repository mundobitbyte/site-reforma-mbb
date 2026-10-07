document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

  if(!menu.querySelector('a[href="arduino-protocolos.html"]')){
    const link8 = document.createElement('a');
    link8.className = 'module-btn';
    link8.href = 'arduino-protocolos.html';
    link8.textContent = '8. RTOS e Protocolos';
    link8.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link8, exercicios);
    else menu.appendChild(link8);
  }

  if(!menu.querySelector('a[href="arduino-seguranca.html"]')){
    const link9 = document.createElement('a');
    link9.className = 'module-btn';
    link9.href = 'arduino-seguranca.html';
    link9.textContent = '9. Proteção e Segurança';
    link9.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link9, exercicios);
    else menu.appendChild(link9);
  }

  if(!menu.querySelector('a[href="arduino-projeto-iot.html"]')){
    const link10 = document.createElement('a');
    link10.className = 'module-btn';
    link10.href = 'arduino-projeto-iot.html';
    link10.textContent = '10. Projeto IoT';
    link10.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link10, exercicios);
    else menu.appendChild(link10);
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const links = Array.from(document.querySelectorAll('#stageMenu .stage-link[href^="#"]'));
  const panels = Array.from(document.querySelectorAll('.mbb7-panel'));
  const toggle = document.getElementById('stageToggle');
  const close = document.getElementById('stageClose');
  const backdrop = document.getElementById('stageBackdrop');

  function closeDrawer(){
    if(!layout) return;
    layout.classList.remove('drawer-open');
    if(backdrop) backdrop.hidden = true;
    if(toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer(){
    if(!layout) return;
    layout.classList.add('drawer-open');
    if(backdrop) backdrop.hidden = false;
    if(toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function showPanel(hash, updateUrl){
    const panel = document.querySelector(hash);
    if(!panel || !panel.classList.contains('mbb7-panel')) return;

    panels.forEach(item => item.classList.toggle('active-panel', item === panel));
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === hash));

    if(updateUrl){
      history.replaceState(null, '', hash);
    }

    const irDiretoAoTopico = updateUrl || location.hash === hash;
    closeDrawer();

    if(irDiretoAoTopico){
      requestAnimationFrame(() => panel.scrollIntoView({ block: 'start' }));
    }else{
      window.scrollTo(0, 0);
    }
  }

  links.forEach(link => {
    link.addEventListener('click', function(event){
      event.preventDefault();
      showPanel(this.getAttribute('href'), true);
    });
  });

  if(toggle) toggle.addEventListener('click', openDrawer);
  if(close) close.addEventListener('click', closeDrawer);
  if(backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape') closeDrawer();
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : '#b7-1';

  showPanel(initialHash, false);
});

function manterModuloAtivoVisivel(){
  const menu = document.getElementById('arduinoModuleMenu');
  const ativo = menu && menu.querySelector('.module-btn.active');
  if(!menu || !ativo) return;

  requestAnimationFrame(() => {
    const menuRect = menu.getBoundingClientRect();
    const itemRect = ativo.getBoundingClientRect();
    const alvo = menu.scrollLeft + (itemRect.left - menuRect.left) - ((menu.clientWidth - itemRect.width) / 2);
    const maximo = Math.max(0, menu.scrollWidth - menu.clientWidth);
    menu.scrollLeft = Math.min(maximo, Math.max(0, alvo));
  });
}

document.addEventListener('DOMContentLoaded', manterModuloAtivoVisivel);
window.addEventListener('pageshow', manterModuloAtivoVisivel);
window.addEventListener('resize', manterModuloAtivoVisivel);

function carregarContextualizacaoMbb(){
  if(document.querySelector('script[data-mbb-contextualizacao-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-contextualizacao-mbb.js?v=20260911-1';
  script.dataset.mbbContextualizacaoLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarContextualizacaoMbb);
else carregarContextualizacaoMbb();

function carregarDestaquesMbb(){
  if(document.querySelector('script[data-mbb-arduino-destaques-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-destaques-mbb.js?v=20261005-1';
  script.dataset.mbbArduinoDestaquesLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarDestaquesMbb);
else carregarDestaquesMbb();