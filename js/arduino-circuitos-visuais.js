(() => {
  if (window.__mbbArduinoCircuitosVisuais) return;
  window.__mbbArduinoCircuitosVisuais = true;

  const circuitos = [
    {
      alvo: 'b6-prep',
      titulo: 'Circuito-base do bloco',
      src: '../img/arduino/esp32-led-gpio23.svg',
      alt: 'Diagrama técnico do ESP32 com GPIO 23 ligado a resistor de 220 ohms, LED e GND.',
      legenda: 'Use este circuito-base durante o Bloco 6: GPIO 23 → resistor de 220 Ω → LED → GND. A comunicação muda; a montagem permanece.'
    },
    {
      alvo: 'b8-1',
      titulo: 'Circuito do experimento RTOS',
      src: '../img/arduino/esp32-led-gpio23.svg',
      alt: 'Diagrama técnico do ESP32 com GPIO 23 ligado a resistor de 220 ohms, LED e GND para o experimento com tarefas FreeRTOS.',
      legenda: 'Reutilize o mesmo circuito-base do Bloco 6. Nesta etapa, a novidade está na organização das tarefas pelo RTOS, não na eletrônica.'
    },
    {
      alvo: 'b8-2',
      titulo: 'Referência de ligação I2C',
      src: '../img/arduino/esp32-lcd-i2c-sinais.svg',
      alt: 'Diagrama técnico dos sinais I2C entre ESP32 e LCD 16x2 com backpack: SDA no GPIO 21, SCL no GPIO 22 e GND comum; VCC depende da verificação do módulo.',
      legenda: 'SDA → GPIO 21, SCL → GPIO 22 e GND comum. O VCC ficou propositalmente sem valor fixo: confirme a alimentação e os pull-ups do seu backpack antes da ligação. Se SDA/SCL forem puxados a 5 V, use adaptação de nível.'
    },
    {
      alvo: 'b10-2',
      titulo: 'Circuito do projeto integrador',
      src: '../img/arduino/esp32-ldr-led-projeto-iot.svg',
      alt: 'Diagrama técnico do projeto IoT: LDR em divisor de tensão ligado ao GPIO 34 e LED com resistor de 220 ohms ligado ao GPIO 23, com GND comum.',
      legenda: 'O projeto usa dois ramos independentes no mesmo ESP32: 3,3 V → LDR → nó de leitura/GPIO 34 → resistor de 10 kΩ → GND; e GPIO 23 → resistor de 220 Ω → LED → GND.'
    }
  ];

  function inserirCircuito(def) {
    const secao = document.getElementById(def.alvo);
    if (!secao || secao.querySelector('[data-mbb-circuito="' + def.alvo + '"]')) return;

    const painel = document.createElement('div');
    painel.className = 'circuitPanel';
    painel.dataset.mbbCircuito = def.alvo;

    const titulo = document.createElement('h3');
    titulo.textContent = def.titulo;

    const figura = document.createElement('figure');
    figura.className = 'circuitFigure';

    const imagem = document.createElement('img');
    imagem.className = 'circuitPhoto';
    imagem.src = def.src;
    imagem.alt = def.alt;
    imagem.loading = 'lazy';
    imagem.decoding = 'async';

    const legenda = document.createElement('figcaption');
    legenda.textContent = def.legenda;

    figura.appendChild(imagem);
    figura.appendChild(legenda);
    painel.appendChild(titulo);
    painel.appendChild(figura);

    const cabecalho = secao.querySelector('.projectHead');
    if (cabecalho) cabecalho.insertAdjacentElement('afterend', painel);
    else secao.prepend(painel);
  }

  function iniciar() {
    circuitos.forEach(inserirCircuito);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else {
    iniciar();
  }
})();
