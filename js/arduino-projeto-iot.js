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
  const panels = Array.from(document.querySelectorAll('.mbb10-panel'));
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
    if(!panel || !panel.classList.contains('mbb10-panel')) return;

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
    : '#b10-1';

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

/* Circuito do projeto: inserido pela própria página e com o mesmo marcador usado pelo fallback legado. */
document.addEventListener('DOMContentLoaded', function(){
  const secao = document.getElementById('b10-2');
  if(!secao || secao.querySelector('[data-mbb-circuito="b10-2"]')) return;

  const cabecalho = secao.querySelector('.projectHead');
  if(!cabecalho) return;

  cabecalho.insertAdjacentHTML('afterend', `
    <div class="circuitPanel" data-mbb-circuito="b10-2">
      <h3>Circuito do projeto integrador</h3>
      <figure class="circuitFigure">
        <img class="circuitPhoto" src="../img/arduino/esp32-ldr-led-projeto-iot.svg" alt="Diagrama técnico do projeto IoT: LDR em divisor de tensão ligado ao GPIO 34 e LED com resistor de 220 ohms ligado ao GPIO 23, com GND comum." loading="lazy" decoding="async"/>
        <figcaption>O projeto usa dois ramos independentes no mesmo ESP32: 3,3 V → LDR → nó de leitura/GPIO 34 → resistor de 10 kΩ → GND; e GPIO 23 → resistor de 220 Ω → LED → GND.</figcaption>
      </figure>
    </div>
  `);
});

/* Fechamento MbB: a aplicação Web pode falhar sem paralisar a automação local. */
document.addEventListener('DOMContentLoaded', function(){
  const codigo = document.getElementById('b10-final');
  if(codigo){
    codigo.textContent = `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "NOME_DA_REDE";
const char* senha = "SENHA_DA_REDE";

const int LDR = 34;
const int LED = 23;
const int LIMIAR = 2000; // calibre na sua montagem
const unsigned long TEMPO_MAX_WIFI = 10000;

WebServer servidor(80);

enum Modo { MANUAL, AUTOMATICO };
Modo modo = AUTOMATICO;
bool ledLigado = false;
bool servidorDisponivel = false;

void definirLed(bool estado) {
  ledLigado = estado;
  digitalWrite(LED, estado ? HIGH : LOW);
}

void atualizarAutomacao() {
  if (modo != AUTOMATICO) return;

  int luminosidade = analogRead(LDR);
  bool escuro = luminosidade < LIMIAR;
  definirLed(escuro);
}

String montarPagina() {
  int luminosidade = analogRead(LDR);

  String pagina = "<!DOCTYPE html><html><head>";
  pagina += "<meta charset='utf-8'>";
  pagina += "<meta name='viewport' content='width=device-width,initial-scale=1'>";
  pagina += "<meta http-equiv='refresh' content='2'>";
  pagina += "<title>Ambiente MbB</title>";
  pagina += "<style>body{font-family:Arial;max-width:520px;margin:30px auto;padding:16px}";
  pagina += "a{display:inline-block;margin:6px;padding:12px 16px;background:#07515f;color:white;text-decoration:none;border-radius:8px}";
  pagina += ".painel{padding:16px;border:1px solid #ccc;border-radius:12px}</style>";
  pagina += "</head><body><div class='painel'>";
  pagina += "<h1>Ambiente MbB</h1>";
  pagina += "<p>Luminosidade: " + String(luminosidade) + "</p>";
  pagina += "<p>Iluminacao: " + String(ledLigado ? "LIGADA" : "DESLIGADA") + "</p>";
  pagina += "<p>Modo: " + String(modo == AUTOMATICO ? "AUTOMATICO" : "MANUAL") + "</p>";
  pagina += "<a href='/ligar'>Ligar</a>";
  pagina += "<a href='/desligar'>Desligar</a>";
  pagina += "<a href='/auto'>Automatico</a>";
  pagina += "</div></body></html>";

  return pagina;
}

void voltarParaInicio() {
  servidor.sendHeader("Location", "/");
  servidor.send(303, "text/plain", "");
}

void configurarServidor() {
  servidor.on("/", []() {
    servidor.send(200, "text/html", montarPagina());
  });

  servidor.on("/ligar", []() {
    modo = MANUAL;
    definirLed(true);
    voltarParaInicio();
  });

  servidor.on("/desligar", []() {
    modo = MANUAL;
    definirLed(false);
    voltarParaInicio();
  });

  servidor.on("/auto", []() {
    modo = AUTOMATICO;
    atualizarAutomacao();
    voltarParaInicio();
  });
}

void conectarWiFiSemBloquearParaSempre() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, senha);

  Serial.print("Conectando ao Wi-Fi");
  unsigned long inicio = millis();

  while (WiFi.status() != WL_CONNECTED &&
         millis() - inicio < TEMPO_MAX_WIFI) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();

  if (WiFi.status() == WL_CONNECTED) {
    servidor.begin();
    servidorDisponivel = true;
    Serial.print("Abra no navegador: http://");
    Serial.println(WiFi.localIP());
  } else {
    servidorDisponivel = false;
    Serial.println("Wi-Fi indisponivel.");
    Serial.println("A automacao local continuara funcionando.");
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  definirLed(false);

  configurarServidor();
  conectarWiFiSemBloquearParaSempre();
}

void loop() {
  if (servidorDisponivel && WiFi.status() == WL_CONNECTED) {
    servidor.handleClient();
  }

  atualizarAutomacao();
  delay(20);
}`;
  }

  const bloco5 = document.getElementById('b10-5');
  if(bloco5 && !bloco5.querySelector('[data-mbb-falha-rede]')){
    const cards = bloco5.querySelector('.cards');
    if(cards){
      const aviso = document.createElement('article');
      aviso.className = 'card wide mbb10-good';
      aviso.dataset.mbbFalhaRede = '1';
      aviso.innerHTML = '<h3>Falha de rede não deve congelar a automação</h3><p>O código final espera o Wi-Fi por um período limitado. Se a rede não estiver disponível, a página Web deixa de funcionar, mas o ESP32 continua lendo o LDR e controlando o LED no modo automático. Isso separa uma <strong>função local</strong> de uma <strong>função de conectividade</strong>.</p><p>Se a placa for ligada sem rede e a rede voltar depois, reinicie o protótipo para reabrir o servidor nesta versão didática. O objetivo aqui é garantir que uma falha de conectividade não paralise a decisão local.</p>';
      const resultado = Array.from(cards.querySelectorAll('.card')).find(card => {
        const h3 = card.querySelector('h3');
        return h3 && h3.textContent.trim().startsWith('4. O que foi integrado');
      });
      if(resultado) cards.insertBefore(aviso, resultado);
      else cards.appendChild(aviso);
    }
  }

  const bloco7 = document.getElementById('b10-7');
  if(bloco7){
    const tabela = bloco7.querySelector('.mbb10-compare tbody');
    if(tabela && !tabela.querySelector('[data-mbb-teste-rede]')){
      const linha = document.createElement('tr');
      linha.dataset.mbbTesteRede = '1';
      linha.innerHTML = '<td>T7 — Falha de rede</td><td>Com o modo Automático ativo, interromper temporariamente a rede Wi-Fi usada pelo protótipo e variar a luz sobre o LDR.</td><td>A página fica indisponível, mas a leitura local e a decisão sobre o LED continuam funcionando.</td>';
      tabela.appendChild(linha);
    }

    const entrega = Array.from(bloco7.querySelectorAll('.card')).find(card => {
      const h3 = card.querySelector('h3');
      return h3 && h3.textContent.trim().startsWith('2. Entrega mínima');
    });
    if(entrega && !entrega.querySelector('[data-mbb-evidencia-falha]')){
      const p = document.createElement('p');
      p.dataset.mbbEvidenciaFalha = '1';
      p.innerHTML = '<strong>Evidência adicional de engenharia:</strong> registre também o resultado do T7 — Falha de rede, mostrando que a automação local não depende da página Web para continuar tomando a decisão pelo LDR.';
      entrega.appendChild(p);
    }
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