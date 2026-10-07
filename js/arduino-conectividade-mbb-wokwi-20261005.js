// Bloco 6 — lapidação MbB com Wokwi como caminho de prática sempre que o simulador permite.
// Atua somente em textos e blocos de orientação já existentes; não altera navegação nem códigos físicos originais.
(() => {
  function aplicar(){
    if (!document.getElementById('b6-prep')) return;

    const acharCard = (secaoId, inicio) => {
      const secao = document.getElementById(secaoId);
      if (!secao) return null;
      return Array.from(secao.querySelectorAll('.card')).find(card => {
        const h3 = card.querySelector('h3');
        return h3 && h3.textContent.trim().startsWith(inicio);
      }) || null;
    };

    // Preparação — Wokwi é o caminho de prática imediato; placa física aparece como extensão real.
    const ambientes = document.querySelector('[data-mbb6-ambientes]');
    if (ambientes) {
      ambientes.innerHTML = `
        <h3>Como vamos praticar este bloco</h3>
        <p>Vamos usar o <strong>Wokwi sempre que ele conseguir reproduzir a tecnologia estudada</strong>. Assim podemos montar, programar, executar e observar o resultado diretamente no navegador.</p>
        <div class="mbb6-route"><span>Wokwi</span><b>→</b><span>montar e programar</span><b>→</b><span>executar</span><b>→</b><span>observar a evidência</span></div>
        <p>Alguns recursos dependem de características que o simulador não reproduz, como o rádio Bluetooth ou certas formas de acesso à rede local. Nesses casos, vamos separar duas coisas: <strong>a lógica que pode ser experimentada no Wokwi</strong> e <strong>o comportamento completo em um ESP32 físico</strong>.</p>
        <p class="mbb6-note"><strong>O importante:</strong> antes de cada teste você saberá exatamente o que deve funcionar e qual resultado comprova que a etapa deu certo.</p>
      `;
    }

    const prepararIde = acharCard('b6-prep', '4. Preparando a Arduino IDE');
    if (prepararIde) {
      const nota = prepararIde.querySelector('[data-mbb6-prep-wokwi], .mbb6-note:last-child');
      if (nota && /Wokwi/i.test(nota.textContent)) {
        nota.innerHTML = '<strong>No Wokwi:</strong> use uma placa ESP32 DevKit compatível no projeto e mantenha o LED no GPIO 23. Driver, porta USB e cabo de dados são etapas necessárias apenas quando o programa será enviado para uma placa física.';
      }
    }

    // Bluetooth — mantém a tecnologia real como conceito, mas a experiência do aluno acontece no Wokwi.
    const btAviso = document.querySelector('[data-mbb-wokwi-bluetooth="aviso"]');
    if (btAviso) {
      btAviso.innerHTML = `
        <h3>6A. No Wokwi — experimente a lógica do comando</h3>
        <p>O objetivo do programa é simples: receber um caractere, interpretar esse comando e agir sobre o LED. Em um ESP32 físico, esse caractere pode chegar pelo Bluetooth.</p>
        <p class="mbb6-warning"><strong>O Wokwi não simula o rádio Bluetooth do ESP32.</strong> Por isso o celular não encontrará <code>MBB-ESP32</code>. Isso é uma limitação do simulador, não um erro do código Bluetooth.</p>
        <p>No simulador, o <strong>Monitor Serial</strong> fará o papel de quem envia <code>L</code> ou <code>D</code>. Assim conseguimos experimentar a parte mais importante da lógica: <strong>receber → interpretar → agir</strong>.</p>
        <div class="mbb6-route"><span>Wokwi: Monitor Serial</span><b>→</b><span>comando L/D</span><b>→</b><span>ESP32</span><b>→</b><span>LED</span></div>
        <div class="mbb6-route"><span>ESP32 físico</span><b>→</b><span>Bluetooth</span><b>→</b><span>comando L/D</span><b>→</b><span>LED</span></div>
        <p class="mbb6-note"><strong>Compare:</strong> muda o meio por onde o comando chega; a decisão sobre o que fazer com <code>L</code> e <code>D</code> continua a mesma.</p>
      `;
    }

    const btCodigo = document.querySelector('[data-mbb-wokwi-bluetooth="codigo"]');
    if (btCodigo) {
      const h3 = btCodigo.querySelector('h3');
      if (h3) {
        const botao = h3.querySelector('button');
        h3.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) node.textContent = '';
        });
        h3.insertBefore(document.createTextNode('Código para praticar no Wokwi '), botao || null);
      }
      const explicacao = btCodigo.querySelector('.explain');
      if (explicacao) {
        explicacao.innerHTML = `
          <p><strong>Faça agora:</strong> execute a simulação, abra o Monitor Serial em 115200 e envie <code>L</code>. Depois envie <code>D</code>.</p>
          <p><strong>Observe:</strong> o LED deve acender com <code>L</code> e apagar com <code>D</code>. O Monitor Serial também confirma o estado.</p>
          <p><strong>Entenda a troca:</strong> no Bluetooth real usamos <code>SerialBT.available()</code> e <code>SerialBT.read()</code>. No Wokwi usamos <code>Serial.available()</code> e <code>Serial.read()</code>. Depois da leitura, a lógica é a mesma.</p>
        `;
      }
    }

    // Wi-Fi — prática completa no Wokwi.
    const wifi = document.querySelector('[data-mbb6-wifi-wokwi="1"]');
    if (wifi) {
      wifi.innerHTML = `
        <h3>9. No Wokwi — agora o ESP32 entra em uma rede</h3>
        <p>Na placa física o ESP32 entra em uma rede Wi-Fi disponível no local. No Wokwi usamos a rede virtual <code>Wokwi-GUEST</code>, criada justamente para permitir experiências de conectividade.</p>
        <p>Ela não usa senha. O canal 6 pode ser informado para tornar a conexão mais rápida.</p>
        <p class="mbb6-note"><strong>O que queremos comprovar:</strong> o ESP32 consegue se conectar e recebe um endereço IP. Esse endereço será a evidência desta etapa.</p>
      `;
    }

    const wifiCodigo = document.querySelector('[data-mbb6-wifi-wokwi="codigo"] .explain');
    if (wifiCodigo) {
      wifiCodigo.innerHTML = `
        <p><strong>Faça agora:</strong> execute a simulação e abra o Monitor Serial em 115200.</p>
        <p><strong>Observe:</strong> aparecem os pontos enquanto a conexão é tentada; depois surgem a confirmação de conexão e um endereço IP.</p>
        <p><strong>Evidência:</strong> se o IP apareceu, o ESP32 entrou na rede virtual. No próximo tópico veremos que <em>estar na rede</em> e <em>receber uma conexão do navegador</em> são problemas diferentes.</p>
      `;
    }

    // HTTP — Wokwi prioriza o papel de cliente, que funciona no gateway padrão.
    const httpAmbientes = document.querySelector('[data-mbb6-http-ambientes]');
    if (httpAmbientes) {
      httpAmbientes.innerHTML = `
        <h3>Antes de testar — o ESP32 pode ter dois papéis</h3>
        <p>HTTP não significa apenas “abrir uma página no ESP32”. Um dispositivo pode atuar como <strong>cliente</strong>, fazendo uma requisição a outro servidor, ou como <strong>servidor</strong>, esperando que alguém faça uma requisição a ele.</p>
        <div class="mbb6-connections">
          <div><strong>No Wokwi: cliente HTTP</strong><span>Este é o teste que conseguimos executar por completo: o ESP32 sai para a Internet, faz uma requisição e mostra a resposta no Monitor Serial.</span></div>
          <div><strong>No Wokwi padrão: servidor HTTP</strong><span>Podemos estudar e compilar o servidor, mas o navegador do computador não entra diretamente no servidor simulado pelo gateway padrão.</span></div>
          <div><strong>No ESP32 físico</strong><span>Com computador ou celular na mesma rede, o navegador pode abrir <code>http://IP_DO_ESP32</code> e controlar o LED.</span></div>
        </div>
        <p class="mbb6-note"><strong>Ordem prática:</strong> no Wokwi, dê prioridade à <strong>Parte B — ESP32 como cliente HTTP</strong>. Ela permite observar uma requisição real e sua resposta. A Parte A mostra o outro papel e pode ser experimentada integralmente em uma rede local com um ESP32 físico.</p>
        <details><summary>Opção avançada no Wokwi</summary><p>O Wokwi oferece um IoT Gateway que pode encaminhar uma porta do ESP32 simulado para o computador. Quando esse recurso estiver disponível e configurado, também é possível testar o servidor pelo navegador. Essa opção não é necessária para compreender cliente e servidor HTTP.</p></details>
      `;
    }

    const testeServidor = acharCard('b6-3', '5. Testando o servidor');
    if (testeServidor) {
      const h3 = testeServidor.querySelector('h3');
      if (h3) h3.textContent = '5. Testando o servidor — em uma rede local';
      let nota = Array.from(testeServidor.querySelectorAll('p')).find(p => /Wokwi/i.test(p.textContent));
      if (!nota) {
        nota = document.createElement('p');
        nota.className = 'mbb6-note';
        testeServidor.appendChild(nota);
      }
      nota.innerHTML = '<strong>No Wokwi padrão:</strong> não use a abertura da página no navegador como evidência. Continue até a Parte B e faça a experiência de cliente HTTP, que é executável no simulador.';
    }

    const parteB = acharCard('b6-3', 'Parte B');
    if (parteB) {
      const explicacao = parteB.querySelector('.explain');
      if (explicacao && !explicacao.querySelector('[data-mbb6-http-wokwi-principal]')) {
        const p = document.createElement('p');
        p.dataset.mbb6HttpWokwiPrincipal = '1';
        p.className = 'mbb6-note';
        p.innerHTML = '<strong>Esta é a prática principal no Wokwi:</strong> o ESP32 fará uma requisição HTTP real para um servidor na Internet e mostrará a resposta no Monitor Serial.';
        explicacao.appendChild(p);
      }
    }

    const clienteOriginal = document.getElementById('b6-3-client-code');
    if (clienteOriginal && !document.getElementById('b6-3-client-wokwi-code')) {
      const cardOriginal = clienteOriginal.closest('article');
      if (cardOriginal) {
        const card = document.createElement('article');
        card.className = 'card code wide';
        card.innerHTML = `
          <h3>7A. Código para praticar cliente HTTP no Wokwi <button type="button" onclick="copyCode('b6-3-client-wokwi-code',this)">Copiar</button></h3>
          <pre id="b6-3-client-wokwi-code">#include &lt;WiFi.h&gt;
#include &lt;HTTPClient.h&gt;

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin("Wokwi-GUEST", "", 6);

  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("Wi-Fi conectado.");

  HTTPClient http;
  http.begin("http://example.com/index.html");

  int codigo = http.GET();

  Serial.print("Codigo HTTP: ");
  Serial.println(codigo);

  if (codigo &gt; 0) {
    String resposta = http.getString();
    Serial.println("Resposta recebida:");
    Serial.println(resposta);
  }

  http.end();
}

void loop() {
}</pre>
          <div class="explain" style="margin-top:12px">
            <p><strong>Faça agora:</strong> execute no Wokwi e abra o Monitor Serial em 115200.</p>
            <p><strong>Observe:</strong> o ESP32 conecta à rede, faz uma requisição GET e mostra o código HTTP e o conteúdo recebido.</p>
            <p><strong>Evidência:</strong> receber um código HTTP positivo e uma resposta mostra que o ESP32 atuou como cliente e conversou com um servidor externo.</p>
          </div>
        `;
        cardOriginal.parentNode.insertBefore(card, cardOriginal);
        const h3 = cardOriginal.querySelector('h3');
        if (h3) {
          const botao = h3.querySelector('button');
          h3.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) node.textContent = '';
          });
          h3.insertBefore(document.createTextNode('7B. Código equivalente para uma rede Wi-Fi real '), botao || null);
        }
      }
    }

    const testeCliente = acharCard('b6-3', '9. Testando o cliente');
    if (testeCliente) {
      const ol = testeCliente.querySelector('ol');
      if (ol) {
        ol.innerHTML = '<li>No Wokwi, use o código 7A com <code>Wokwi-GUEST</code>.</li><li>Execute a simulação.</li><li>Abra o Monitor Serial em 115200.</li><li>Observe o código HTTP e parte do conteúdo recebido.</li>';
      }
    }

    // mDNS — no Wokwi, aprende-se o problema que ele resolve e lê-se o código sem prometer .local no navegador.
    const mdns = document.querySelector('[data-mbb6-mdns-ambientes]');
    if (mdns) {
      mdns.innerHTML = `
        <h3>O problema agora é o nome, não a conexão</h3>
        <p>Até aqui usamos um endereço IP para localizar o dispositivo. Em uma rede local real, esse IP pode mudar. O mDNS permite anunciar um nome como <code>ambiente-mbb.local</code>, que é mais fácil de reconhecer.</p>
        <p><strong>No Wokwi:</strong> estude a mudança no código e identifique o papel de <code>MDNS.begin()</code> e <code>MDNS.addService()</code>. O navegador do computador não deve ser usado para exigir que <code>.local</code> funcione no ambiente padrão do simulador.</p>
        <p><strong>Em uma rede local com ESP32 físico:</strong> primeiro confirme o servidor pelo IP; depois tente <code>http://ambiente-mbb.local</code>. Se o IP funcionar e o nome não, o servidor pode estar correto — a descoberta mDNS também depende da rede e do sistema operacional.</p>
        <p class="mbb6-note"><strong>Evidência no Wokwi:</strong> conseguir explicar por que o nome <code>.local</code> existe, quais linhas o registram e por que ele não substitui o Wi-Fi nem o HTTP.</p>
      `;
    }

    const testeMdns = acharCard('b6-4', '6. Testando');
    if (testeMdns) {
      const h3 = testeMdns.querySelector('h3');
      if (h3) h3.textContent = '6. Testando o nome — quando houver uma rede local real';
    }

    // Tunelamento — no Wokwi padrão, compreensão do caminho; execução integral exige um servidor alcançável pelo computador.
    const tunel = document.querySelector('[data-mbb6-tunel-ambientes]');
    if (tunel) {
      tunel.innerHTML = `
        <h3>Antes do túnel — descubra o que precisa existir</h3>
        <p>Um túnel não cria o servidor. Ele apenas cria um caminho externo até um serviço que <strong>já funciona e já pode ser alcançado pelo computador</strong>.</p>
        <div class="mbb6-route"><span>Internet</span><b>→</b><span>túnel</span><b>→</b><span>computador</span><b>→</b><span>ESP32 na rede local</span></div>
        <p><strong>No Wokwi padrão:</strong> o computador não alcança diretamente o servidor HTTP simulado pela rede virtual. Portanto, não faz sentido executar o comando de túnel apontando para o IP virtual e esperar o mesmo resultado de uma rede local.</p>
        <p><strong>O que aprender aqui:</strong> identifique quem cria o túnel, qual serviço está sendo exposto, para onde as requisições são encaminhadas e por que o servidor precisa funcionar antes.</p>
        <p class="mbb6-warning"><strong>Segurança:</strong> um endereço público aumenta a exposição do serviço. Use apenas o LED didático, sem dados reais ou credenciais reutilizadas, e encerre qualquer túnel temporário quando o teste terminar.</p>
      `;
    }

    const antesTunel = acharCard('b6-5', '3. Antes de criar o túnel');
    if (antesTunel) {
      const h3 = antesTunel.querySelector('h3');
      if (h3) h3.textContent = '3. Condição para executar o túnel em uma rede real';
    }

    const ferramentaTunel = acharCard('b6-5', '4. Ferramenta escolhida');
    if (ferramentaTunel) {
      const p = ferramentaTunel.querySelector('p');
      if (p) p.innerHTML = 'Uma forma simples de observar esse mecanismo é usar <strong>localhost.run</strong>, que cria um túnel temporário por SSH. O comando mostrado a seguir faz sentido quando o computador já consegue acessar diretamente o servidor HTTP do ESP32 na rede local.';
      const notas = ferramentaTunel.querySelectorAll('.mbb6-note');
      notas.forEach(n => {
        n.innerHTML = '<strong>Checkpoint:</strong> antes do túnel, o computador precisa conseguir abrir <code>http://IP_DO_ESP32</code>. Se esse acesso local não existe, ainda não há um serviço alcançável para encaminhar.';
      });
    }

    const testeTunel = acharCard('b6-5', '7. Testando de verdade');
    if (testeTunel) {
      const h3 = testeTunel.querySelector('h3');
      if (h3) h3.textContent = '7. Executando quando houver um ESP32 acessível na rede local';
    }

    // Fecha o bloco preservando a diferença entre conceito e evidência executável.
    const fechamento = acharCard('b6-5', '11. O que o Bloco 6 construiu');
    if (fechamento) {
      const p = fechamento.querySelector('p');
      if (p) p.innerHTML = 'O sistema ganhou diferentes formas de comunicação. No Wokwi conseguimos praticar a lógica de comandos, a conexão Wi-Fi e requisições HTTP de saída. Bluetooth real, descoberta <code>.local</code> e exposição por túnel dependem de recursos de rede ou hardware que o simulador padrão não reproduz da mesma forma. Saber distinguir essas camadas também faz parte de compreender conectividade.';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicar);
  else aplicar();
})();