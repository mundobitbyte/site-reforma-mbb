document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

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

function copyCode(id, button){
  const code = document.getElementById(id);
  if(!code) return;

  const text = code.textContent;

  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(() => showCopied(button));
    return;
  }

  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try{
    document.execCommand('copy');
    showCopied(button);
  }finally{
    area.remove();
  }
}

function showCopied(button){
  if(!button) return;
  const original = button.textContent;
  button.textContent = 'Copiado';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1200);
}

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const links = Array.from(document.querySelectorAll('#stageMenu .stage-link[href^="#"]'));
  const panels = Array.from(document.querySelectorAll('.mbb8-panel'));
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
    if(!panel || !panel.classList.contains('mbb8-panel')) return;

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
    : '#b8-prep';

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

function inserirCircuitoDoBloco8(alvo, titulo, src, alt, legenda){
  const secao = document.getElementById(alvo);
  if(!secao || secao.querySelector(`[data-mbb-circuito="${alvo}"]`)) return;

  const cabecalho = secao.querySelector('.projectHead');
  if(!cabecalho) return;

  cabecalho.insertAdjacentHTML('afterend', `
    <div class="circuitPanel" data-mbb-circuito="${alvo}">
      <h3>${titulo}</h3>
      <figure class="circuitFigure">
        <img class="circuitPhoto" src="${src}" alt="${alt}" loading="lazy" decoding="async"/>
        <figcaption>${legenda}</figcaption>
      </figure>
    </div>
  `);
}

document.addEventListener('DOMContentLoaded', function(){
  inserirCircuitoDoBloco8(
    'b8-1',
    'Circuito do experimento RTOS',
    '../img/arduino/esp32-led-gpio23.svg',
    'Diagrama técnico do ESP32 com GPIO 23 ligado a resistor de 220 ohms, LED e GND para o experimento com tarefas FreeRTOS.',
    'Reutilize o mesmo circuito-base do Bloco 6. Nesta etapa, a novidade está na organização das tarefas pelo RTOS, não na eletrônica.'
  );

  inserirCircuitoDoBloco8(
    'b8-2',
    'Referência de ligação I2C',
    '../img/arduino/esp32-lcd-i2c-sinais.svg',
    'Diagrama técnico dos sinais I2C entre ESP32 e LCD 16x2 com backpack: SDA no GPIO 21, SCL no GPIO 22 e GND comum; VCC depende da verificação do módulo.',
    'SDA → GPIO 21, SCL → GPIO 22 e GND comum. Confirme a alimentação e os pull-ups do backpack antes da ligação. Se SDA/SCL forem puxados a 5 V, use adaptação de nível.'
  );
});

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

function carregarVisualizadorPilotoMbb(){
  if(document.querySelector('script[data-mbb-visualizador-piloto-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/mbb-visualizador-piloto.js?v=20260927-1';
  script.dataset.mbbVisualizadorPilotoLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarVisualizadorPilotoMbb);
else carregarVisualizadorPilotoMbb();