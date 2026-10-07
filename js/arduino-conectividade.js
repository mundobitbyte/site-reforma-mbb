document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

  if(!menu.querySelector('a[href="arduino-iot.html"]')){
    const link7 = document.createElement('a');
    link7.className = 'module-btn';
    link7.href = 'arduino-iot.html';
    link7.textContent = '7. Internet das Coisas';
    link7.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link7, exercicios);
    else menu.appendChild(link7);
  }

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
  const panels = Array.from(document.querySelectorAll('.mbb6-panel'));
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
    if(!panel || !panel.classList.contains('mbb6-panel')) return;

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
    : '#b6-prep';

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

/* O circuito-base é conteúdo desta própria página. Mantemos o mesmo data-attribute do fallback antigo para impedir duplicação. */
document.addEventListener('DOMContentLoaded', function(){
  const secao = document.getElementById('b6-prep');
  if(!secao || secao.querySelector('[data-mbb-circuito="b6-prep"]')) return;

  const cabecalho = secao.querySelector('.projectHead');
  if(!cabecalho) return;

  cabecalho.insertAdjacentHTML('afterend', `
    <div class="circuitPanel" data-mbb-circuito="b6-prep">
      <h3>Circuito-base do bloco</h3>
      <figure class="circuitFigure">
        <img class="circuitPhoto" src="../img/arduino/esp32-led-gpio23.svg" alt="Diagrama técnico do ESP32 com GPIO 23 ligado a resistor de 220 ohms, LED e GND." loading="lazy" decoding="async"/>
        <figcaption>Use este circuito-base durante o Bloco 6: GPIO 23 → resistor de 220 Ω → LED → GND. A comunicação muda; a montagem permanece.</figcaption>
      </figure>
    </div>
  `);
});

/*
 * Bluetooth no Wokwi x placa física.
 * Bluetooth real continua sendo o conteúdo principal.
 * O Wokwi entra depois, apenas para testar a lógica L/D via Monitor Serial.
 */
document.addEventListener('DOMContentLoaded', function(){
  const secao = document.getElementById('b6-1');
  if(!secao || secao.querySelector('[data-mbb-wokwi-bluetooth]')) return;

  const codigoFisico = document.getElementById('b6-1-code')?.closest('article');
  const cards = Array.from(secao.querySelectorAll('.card'));
  const explicacaoBluetooth = cards.find(card => /^5\.\s*Entendendo as novidades/.test(card.querySelector('h3')?.textContent.trim() || ''));
  const testeFisico = cards.find(card => /^6\.\s*Testando/.test(card.querySelector('h3')?.textContent.trim() || ''));
  const resultadoFisico = cards.find(card => /^7\.\s*Resultado esperado/.test(card.querySelector('h3')?.textContent.trim() || ''));

  if(!codigoFisico || !testeFisico) return;

  const tituloCodigoFisico = codigoFisico.querySelector('h3');
  if(tituloCodigoFisico){
    const botao = tituloCodigoFisico.querySelector('button');
    Array.from(tituloCodigoFisico.childNodes).forEach(node => {
      if(node.nodeType === Node.TEXT_NODE) node.textContent = '';
    });
    tituloCodigoFisico.insertBefore(document.createTextNode('4. Código completo — Bluetooth real na placa física '), botao || null);
  }

  const aviso = document.createElement('article');
  aviso.className = 'card wide';
  aviso.setAttribute('data-mbb-wokwi-bluetooth', 'aviso');
  aviso.innerHTML = `
    <h3>6A. E no Wokwi?</h3>
    <p class="mbb6-warning"><strong>O Wokwi não simula o rádio Bluetooth do ESP32.</strong> Portanto, o celular não encontrará <code>MBB-ESP32</code> e não existe pareamento Bluetooth real dentro do simulador.</p>
    <p>Isso não invalida o tópico. O código acima é o código Bluetooth real para um ESP32 físico compatível. No Wokwi podemos testar apenas a <strong>lógica de receber L ou D e controlar o LED</strong>, substituindo temporariamente a origem Bluetooth pelo Monitor Serial.</p>
    <div class="mbb6-route"><span>Wokwi: Monitor Serial</span><b>→</b><span>Serial</span><b>→</b><span>ESP32</span><b>→</b><span>LED</span></div>
    <div class="mbb6-route"><span>Placa física: celular Android</span><b>→</b><span>Bluetooth clássico/SPP</span><b>→</b><span>ESP32</span><b>→</b><span>LED</span></div>
  `;

  const wokwi = document.createElement('article');
  wokwi.className = 'card code wide';
  wokwi.setAttribute('data-mbb-wokwi-bluetooth', 'codigo');
  wokwi.innerHTML = `
    <h3>6A. Código alternativo somente para o Wokwi <button type="button" onclick="copyCode('b6-1-wokwi-code',this)">Copiar</button></h3>
    <pre id="b6-1-wokwi-code">const int LED = 23;

void setup() {
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);

  Serial.begin(115200);

  Serial.println("Simulacao no Wokwi");
  Serial.println("Digite L para ligar o LED.");
  Serial.println("Digite D para desligar o LED.");
}

void loop() {
  if (Serial.available()) {
    char comando = Serial.read();

    if (comando == 'L' || comando == 'l') {
      digitalWrite(LED, HIGH);
      Serial.println("LED LIGADO");
    }

    if (comando == 'D' || comando == 'd') {
      digitalWrite(LED, LOW);
      Serial.println("LED DESLIGADO");
    }
  }
}</pre>
    <div class="explain" style="margin-top:12px">
      <p><strong>Como testar:</strong> execute a simulação, abra o Monitor Serial em 115200 e envie <code>L</code> ou <code>D</code>.</p>
      <p><strong>O que estamos simulando:</strong> somente a chegada do comando. Não existe Bluetooth nesse teste.</p>
      <p>No Bluetooth real, <code>SerialBT.available()</code> e <code>SerialBT.read()</code> recebem o comando pelo rádio. No Wokwi, <code>Serial.available()</code> e <code>Serial.read()</code> recebem o mesmo comando pelo terminal.</p>
    </div>
  `;

  testeFisico.parentNode.insertBefore(aviso, testeFisico);
  testeFisico.parentNode.insertBefore(wokwi, testeFisico);

  const tituloTeste = testeFisico.querySelector('h3');
  if(tituloTeste) tituloTeste.textContent = '6B. Testando Bluetooth real na placa física';

  const lista = testeFisico.querySelector('ol');
  if(lista && !lista.querySelector('[data-mbb-pareamento]')){
    const item = document.createElement('li');
    item.setAttribute('data-mbb-pareamento', '1');
    item.innerHTML = 'Se necessário, faça o <strong>pareamento</strong> do Android com <strong>MBB-ESP32</strong> nas configurações de Bluetooth e autorize as permissões solicitadas pelo aplicativo.';
    lista.insertBefore(item, lista.children[3] || null);
  }

  if(resultadoFisico){
    const titulo = resultadoFisico.querySelector('h3');
    if(titulo) titulo.textContent = '7. Resultado esperado — Bluetooth real';
  }

  if(explicacaoBluetooth){
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>Até aqui estamos falando de Bluetooth real.</strong> O caminho Wokwi vem a seguir apenas porque o simulador não implementa o rádio Bluetooth.';
    explicacaoBluetooth.appendChild(nota);
  }
});

/*
 * Revisão operacional MbB do Bloco 6.
 * Deixa explícito o que é executável no Wokwi padrão e o que depende de placa física
 * ou do Private Wokwi IoT Gateway. Não substitui os códigos físicos já aprovados.
 */
document.addEventListener('DOMContentLoaded', function(){
  const marcar = (elemento, nome) => {
    if(!elemento || elemento.dataset[nome] === '1') return false;
    elemento.dataset[nome] = '1';
    return true;
  };

  const cardsDe = id => {
    const secao = document.getElementById(id);
    if(!secao) return [];
    return Array.from(secao.querySelectorAll('.cards > .card'));
  };

  const acharCard = (id, inicioTitulo) => cardsDe(id).find(card => {
    const h3 = card.querySelector('h3');
    return h3 && h3.textContent.trim().startsWith(inicioTitulo);
  });

  // Preparação: apresenta os dois ambientes antes de qualquer prática.
  const prep = document.getElementById('b6-prep');
  if(prep && !prep.querySelector('[data-mbb6-ambientes]')){
    const cards = prep.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6Ambientes = '1';
      guia.innerHTML = `
        <h3>Antes de começar — escolha o ambiente de prática</h3>
        <p>Neste bloco existem dois caminhos legítimos. O conteúdo conceitual é o mesmo, mas alguns testes dependem do ambiente.</p>
        <div class="mbb6-route"><span>Wokwi</span><b>→</b><span>simulação no navegador</span><b>→</b><span>sem placa física</span></div>
        <div class="mbb6-route"><span>ESP32 físico</span><b>→</b><span>Arduino IDE</span><b>→</b><span>rede e rádio reais</span></div>
        <p class="mbb6-note"><strong>Regra MbB:</strong> quando uma etapa não puder produzir no Wokwi a mesma evidência da placa física, isso será informado antes do teste. Não trate uma limitação do simulador como erro do seu código.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild);
    }
  }

  const prepararIde = acharCard('b6-prep', '4. Preparando a Arduino IDE');
  if(prepararIde && marcar(prepararIde, 'mbb6PrepWokwi')){
    const p = document.createElement('p');
    p.className = 'mbb6-note';
    p.innerHTML = '<strong>Se você está no Wokwi:</strong> não precisa instalar driver, escolher porta USB nem conectar cabo. Use uma placa ESP32 DevKit compatível no projeto e mantenha o LED no GPIO 23. Estas etapas da Arduino IDE valem para a placa física.';
    prepararIde.appendChild(p);
  }

  // 6.2 Wi-Fi: prática completa em ambos os ambientes e código Wokwi explícito.
  const wifi = document.getElementById('b6-2');
  if(wifi && !wifi.querySelector('[data-mbb6-wifi-wokwi]')){
    const cardWokwiOriginal = acharCard('b6-2', '9. E no Wokwi?');
    if(cardWokwiOriginal){
      cardWokwiOriginal.dataset.mbb6WifiWokwi = '1';
      cardWokwiOriginal.innerHTML = `
        <h3>9. Wokwi — Wi-Fi funciona de verdade na simulação</h3>
        <p>No Wokwi, conecte o ESP32 à rede virtual aberta <code>Wokwi-GUEST</code>. Ela não usa senha. O canal 6 pode ser informado para evitar a etapa de varredura e acelerar a conexão.</p>
        <p class="mbb6-note"><strong>Atenção:</strong> o endereço IP virtual prova que o ESP32 entrou na rede simulada. Isso ainda não significa que o navegador do seu computador consiga entrar em um servidor criado dentro do ESP32; essa diferença aparece no próximo tópico.</p>
      `;

      const codigo = document.createElement('article');
      codigo.className = 'card code wide';
      codigo.dataset.mbb6WifiWokwi = 'codigo';
      codigo.innerHTML = `
        <h3>Código para o Wokwi <button type="button" onclick="copyCode('b6-2-wokwi-code',this)">Copiar</button></h3>
        <pre id="b6-2-wokwi-code">#include &lt;WiFi.h&gt;

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  Serial.print("Conectando ao Wokwi-GUEST");
  WiFi.begin("Wokwi-GUEST", "", 6);

  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("Wi-Fi conectado.");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
}</pre>
        <div class="explain" style="margin-top:12px">
          <p><strong>Faça:</strong> execute a simulação e abra o Monitor Serial em 115200.</p>
          <p><strong>Evidência:</strong> você deve ver a mensagem de conexão e um endereço IP virtual. Nesta etapa, isso basta para comprovar a conexão Wi-Fi.</p>
        </div>
      `;
      cardWokwiOriginal.parentNode.insertBefore(codigo, cardWokwiOriginal.nextSibling);
    }
  }

  // 6.3 HTTP: separa servidor físico, Wokwi padrão e Private Gateway.
  const http = document.getElementById('b6-3');
  if(http && !http.querySelector('[data-mbb6-http-ambientes]')){
    const cards = http.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6HttpAmbientes = '1';
      guia.innerHTML = `
        <h3>Antes de testar o servidor — o resultado depende do ambiente</h3>
        <div class="mbb6-connections">
          <div><strong>ESP32 físico</strong><span>Prática completa. Celular/computador e ESP32 ficam na mesma rede. Abra <code>http://IP_DO_ESP32</code>.</span></div>
          <div><strong>Wokwi padrão</strong><span>O código pode conectar à Internet e fazer conexões de saída, mas o gateway público não aceita conexão de entrada do seu navegador para o servidor simulado.</span></div>
          <div><strong>Wokwi + Private IoT Gateway</strong><span>Prática completa para assinantes compatíveis. Com o gateway privado ativo, o servidor HTTP na porta 80 pode ser acessado pelo navegador em <code>http://localhost:9080/</code>.</span></div>
          <div><strong>Sem Private Gateway?</strong><span>Não tente “consertar” o código para fazer o navegador entrar. No Wokwi padrão, a limitação é do caminho de rede, não do <code>WebServer</code>.</span></div>
        </div>
        <p class="mbb6-note"><strong>Regra de evidência:</strong> placa física ou Private Gateway permitem testar os botões pelo navegador. No Wokwi padrão, use esta etapa para estudar/compilar o servidor e reconhecer a limitação de conexão de entrada; o controle pelo navegador não é uma evidência disponível nesse ambiente.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const testeHttp = acharCard('b6-3', '5. Testando o servidor');
  if(testeHttp && marcar(testeHttp, 'mbb6HttpTeste')){
    const titulo = testeHttp.querySelector('h3');
    if(titulo) titulo.textContent = '5. Testando o servidor — placa física';
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>No Wokwi:</strong> só siga exatamente este teste pelo navegador se estiver usando o Private IoT Gateway. Nesse caso, use <code>http://localhost:9080/</code> em vez do IP virtual mostrado pelo ESP32.';
    testeHttp.appendChild(nota);
  }

  // 6.4 mDNS: prática principal física; no Wokwi não promete .local.
  const mdns = document.getElementById('b6-4');
  if(mdns && !mdns.querySelector('[data-mbb6-mdns-ambientes]')){
    const cards = mdns.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6MdnsAmbientes = '1';
      guia.innerHTML = `
        <h3>Onde esta prática faz sentido?</h3>
        <p><strong>Placa física:</strong> é o caminho principal. Primeiro confirme que o servidor abre pelo IP e só depois teste <code>http://ambiente-mbb.local</code> na mesma rede.</p>
        <p><strong>Wokwi padrão:</strong> não use <code>.local</code> como teste obrigatório. O navegador não está na mesma rede local do ESP32 simulado e o gateway público não oferece a mesma descoberta mDNS da sua LAN.</p>
        <p class="mbb6-note"><strong>Mesmo na placa física:</strong> se o acesso por IP funcionar e <code>.local</code> não, o servidor pode estar correto. A resolução mDNS depende também do sistema operacional, do navegador e da rede permitirem esse tipo de descoberta.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const testeMdns = acharCard('b6-4', '6. Testando');
  if(testeMdns && marcar(testeMdns, 'mbb6MdnsTeste')){
    const titulo = testeMdns.querySelector('h3');
    if(titulo) titulo.textContent = '6. Testando — rede local com ESP32 físico';
  }

  // 6.5 Tunelamento: não promete execução no Wokwi padrão e antecipa a segurança.
  const tunel = document.getElementById('b6-5');
  if(tunel && !tunel.querySelector('[data-mbb6-tunel-ambientes]')){
    const cards = tunel.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6TunelAmbientes = '1';
      guia.innerHTML = `
        <h3>Antes do túnel — confirme de onde você está partindo</h3>
        <p><strong>ESP32 físico:</strong> este é o caminho principal do exemplo. O computador precisa conseguir abrir o servidor do ESP32 pela rede local antes de criar o túnel.</p>
        <p><strong>Wokwi padrão:</strong> não execute o comando esperando alcançar o IP virtual do ESP32. O computador não possui uma rota de entrada até o servidor do simulador pelo gateway público.</p>
        <p><strong>Wokwi com Private Gateway:</strong> é tecnicamente possível construir outros encaminhamentos, mas isso acrescenta uma camada paga e não é requisito deste curso. O objetivo didático continua sendo compreender que o túnel nasce no computador e expõe temporariamente um serviço que já funciona localmente.</p>
        <p class="mbb6-warning"><strong>Segurança:</strong> ao criar um endereço público, alguém que obtiver esse endereço poderá tentar acessar o serviço exposto. Faça o teste apenas com o protótipo didático, sem dados reais, sem credenciais reutilizadas e encerre o túnel ao terminar.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const ferramentaTunel = acharCard('b6-5', '4. Ferramenta escolhida');
  if(ferramentaTunel && marcar(ferramentaTunel, 'mbb6TunelFerramenta')){
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>Checkpoint antes de continuar:</strong> no computador que criará o túnel, abra primeiro <code>http://IP_DO_ESP32</code>. Se esse acesso local não funcionar, o túnel também não terá para onde encaminhar a requisição.';
    ferramentaTunel.appendChild(nota);
  }
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
