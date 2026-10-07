function mbbCardByTitle(scope, prefix){
  if(!scope) return null;
  return Array.from(scope.querySelectorAll('.card')).find(card => {
    const h3 = card.querySelector('h3');
    return h3 && h3.textContent.trim().startsWith(prefix);
  }) || null;
}

function mbbReplaceVisible(scope, pairs){
  if(!scope) return;
  let html = scope.innerHTML;
  const tokens = [];
  pairs.forEach((pair, index) => {
    const token = `__MBB_REN_${index}_${Date.now()}__`;
    tokens.push([token, pair[1]]);
    html = html.split(pair[0]).join(token);
  });
  tokens.forEach(pair => { html = html.split(pair[0]).join(pair[1]); });
  scope.innerHTML = html;
}

function corrigirBuzzerProjeto4(){
  const p4 = document.getElementById('p4');
  if(!p4) return;

  const resumo = p4.querySelector('.projectHead p');
  if(resumo) resumo.textContent = 'O buzzer ativo é ligado e desligado pelo pino digital 8, reutilizando o mesmo princípio de saída digital já visto no LED.';
  const imagem = p4.querySelector('.circuitPhoto');
  if(imagem) imagem.alt = 'Projeto 4 — Buzzer ativo ligado ao pino digital 8 e ao GND, funcionando como saída sonora liga/desliga.';
  const legenda = p4.querySelector('figcaption');
  if(legenda) legenda.textContent = 'Projeto 4 — Buzzer ativo: o pino digital 8 liga ou desliga a saída sonora; o terminal negativo retorna ao GND.';

  const objetivo = mbbCardByTitle(p4, '1. Objetivo');
  if(objetivo) objetivo.innerHTML = '<h3>1. Objetivo do projeto</h3><p>Fazer o Arduino controlar um <strong>buzzer ativo</strong>, alternando som e silêncio. O buzzer ativo já possui oscilador interno: nesta etapa não precisamos escolher uma frequência. O objetivo é perceber que ele é uma saída sonora que pode ser ligada e desligada por um pino digital, assim como o LED era uma saída visual.</p>';

  const montagem = mbbCardByTitle(p4, '4. Explicação');
  if(montagem) montagem.innerHTML = '<h3>4. Explicação da montagem</h3><p>O terminal positivo do buzzer ativo é ligado ao pino digital <strong>8</strong> e o terminal negativo ao <strong>GND</strong>. O caminho elétrico é: <strong>pino digital 8 → buzzer ativo → GND</strong>.</p><p>Com <code>digitalWrite(pinoBuzzer, HIGH)</code>, o buzzer recebe o nível de acionamento e produz seu próprio tom. Com <code>digitalWrite(pinoBuzzer, LOW)</code>, ele é desligado. A frequência do som não é definida pelo Arduino neste projeto.</p>';

  const descricao = mbbCardByTitle(p4, '5. Descrição');
  if(descricao) descricao.innerHTML = '<h3>5. Descrição textual do circuito visual</h3><p>A imagem mostra o Arduino Uno R3 e a protoboard. O terminal positivo do buzzer ativo vai ao pino digital <strong>8</strong>; o terminal negativo vai ao <strong>GND</strong>. O desenho destaca uma saída sonora simples, controlada por HIGH e LOW.</p><p>Em uma montagem física, confira também a corrente exigida pelo buzzer ou módulo. Cargas que ultrapassem a capacidade do GPIO precisam de um estágio de acionamento compatível.</p>';

  const code = document.getElementById('p4code');
  if(code) code.textContent = `// Projeto 4: Buzzer ativo
// O buzzer ativo possui oscilador interno.
// O Arduino apenas liga e desliga a saída no pino digital 8.

int pinoBuzzer = 8;

void setup() {
  pinMode(pinoBuzzer, OUTPUT);
  digitalWrite(pinoBuzzer, LOW);
}

void loop() {
  digitalWrite(pinoBuzzer, HIGH);
  delay(1000);

  digitalWrite(pinoBuzzer, LOW);
  delay(1000);
}`;

  const explicacao = mbbCardByTitle(p4, '7. Explicação');
  if(explicacao) explicacao.innerHTML = '<h3>7. Explicação linha por linha</h3><div class="explain"><p><code>pinMode(pinoBuzzer, OUTPUT)</code> configura o pino como saída.</p><p><code>digitalWrite(pinoBuzzer, HIGH)</code> liga o buzzer ativo.</p><p><code>delay(1000)</code> mantém o estado por um segundo.</p><p><code>digitalWrite(pinoBuzzer, LOW)</code> desliga o buzzer.</p><p><code>loop()</code> repete continuamente o ciclo de som e silêncio.</p></div>';

  const trabalhado = mbbCardByTitle(p4, '8. O que foi trabalhado');
  if(trabalhado) trabalhado.innerHTML = '<h3>8. O que foi trabalhado</h3><ul><li>Buzzer ativo como saída sonora</li><li><code>pinMode()</code> e <code>digitalWrite()</code></li><li>Estados HIGH e LOW</li><li><code>delay()</code> e repetição em <code>loop()</code></li><li>Polaridade e GND comum</li><li>Diferença conceitual entre buzzer ativo e passivo</li></ul><p><strong>Ponte:</strong> no Sensor de ré aparece um <strong>buzzer passivo</strong>; ali <code>tone()</code> faz sentido porque o Arduino precisa gerar o sinal oscilante e definir a frequência.</p>';

  const erros = mbbCardByTitle(p4, '10. Erros comuns');
  if(erros) erros.innerHTML = '<h3>10. Erros comuns</h3><table><tr><th>Erro</th><th>Consequência</th></tr><tr><td>Inverter positivo e negativo</td><td>O buzzer pode não funcionar corretamente.</td></tr><tr><td>Usar pino diferente do código</td><td>O buzzer não responde ao programa esperado.</td></tr><tr><td>Esquecer o GND</td><td>O circuito não fecha.</td></tr><tr><td>Ligar diretamente ao 5V</td><td>O buzzer fica ligado sem obedecer ao programa.</td></tr><tr><td>Usar buzzer passivo esperando o mesmo comportamento</td><td>O passivo precisa de sinal oscilante, como o gerado por <code>tone()</code>.</td></tr><tr><td>Ignorar a corrente exigida pelo componente</td><td>O acionamento direto pode deixar de ser adequado.</td></tr></table>';

  const exercicio = mbbCardByTitle(p4, '11. Exercício');
  if(exercicio) exercicio.innerHTML = '<h3>11. Exercício proposto</h3><p>Troque os dois <code>delay(1000)</code> por <code>delay(300)</code>. O ciclo ficou mais rápido ou mais lento? Explique separadamente o papel de HIGH/LOW e o papel do <code>delay()</code>.</p>';
}

function corrigirExerciciosBuzzer(){
  const exBuzzer = document.getElementById('ex-buzzer');
  if(!exBuzzer) return;
  exBuzzer.innerHTML = `
    <h3>Projeto 4 — Buzzer</h3>
    <p class="topic-intro">Exercícios sobre saída sonora, buzzer ativo, pino digital 8, <code>digitalWrite()</code>, HIGH/LOW e controle de tempo com <code>delay()</code>.</p>
    <div class="exercise-grid">
      <article class="exercise-box wide"><h4>Questionário interativo — 10 questões de múltipla escolha</h4><div class="box-body"><div class="use-note">Clique em uma alternativa. Após a escolha, a questão será bloqueada e o sistema informará se a resposta está certa ou errada.</div><ol>
        <li class="mc-question"><span class="level">Fácil</span>O buzzer está ligado ao:<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) A0</button><button class="mc-option" data-correct="true" type="button">B) Pino digital 8</button><button class="mc-option" data-correct="false" type="button">C) Pino 2</button><button class="mc-option" data-correct="false" type="button">D) 5V direto sem controle</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span>O buzzer é um dispositivo de:<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) Entrada</button><button class="mc-option" data-correct="true" type="button">B) Saída</button><button class="mc-option" data-correct="false" type="button">C) Armazenamento</button><button class="mc-option" data-correct="false" type="button">D) Leitura analógica</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span>Qual estado liga o buzzer ativo neste projeto?<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) HIGH</button><button class="mc-option" data-correct="false" type="button">B) LOW</button><button class="mc-option" data-correct="false" type="button">C) INPUT</button><button class="mc-option" data-correct="false" type="button">D) A0</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span>Qual comando altera o estado do buzzer ativo?<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) analogRead()</button><button class="mc-option" data-correct="true" type="button">B) digitalWrite()</button><button class="mc-option" data-correct="false" type="button">C) map()</button><button class="mc-option" data-correct="false" type="button">D) digitalRead()</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span>O que <code>digitalWrite(pinoBuzzer, LOW)</code> faz?<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) Mede frequência</button><button class="mc-option" data-correct="true" type="button">B) Desliga o buzzer</button><button class="mc-option" data-correct="false" type="button">C) Lê o botão</button><button class="mc-option" data-correct="false" type="button">D) Muda o resistor</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span><code>delay()</code> controla:<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) Duração de som e silêncio</button><button class="mc-option" data-correct="false" type="button">B) Valor do resistor</button><button class="mc-option" data-correct="false" type="button">C) Leitura do potenciômetro</button><button class="mc-option" data-correct="false" type="button">D) Posição do botão</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level mid">Intermediário</span>Buzzer ativo ligado direto ao 5V tende a:<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) Ficar ligado sem controle do código</button><button class="mc-option" data-correct="false" type="button">B) Ler valor analógico</button><button class="mc-option" data-correct="false" type="button">C) Controlar LED</button><button class="mc-option" data-correct="false" type="button">D) Alterar PWM</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span>Cuidado elétrico importante:<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) Respeitar polaridade e corrente do componente</button><button class="mc-option" data-correct="false" type="button">B) Ligar o terminal central no A0</button><button class="mc-option" data-correct="false" type="button">C) Atravessar o vão central</button><button class="mc-option" data-correct="false" type="button">D) Usar INPUT_PULLUP</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level mid">Intermediário</span>Por que <code>tone()</code> não é necessário aqui?<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) O buzzer ativo já possui oscilador interno</button><button class="mc-option" data-correct="false" type="button">B) O Arduino não aceita funções</button><button class="mc-option" data-correct="false" type="button">C) O pino 8 é analógico</button><button class="mc-option" data-correct="false" type="button">D) O GND gera a frequência</button></div><div class="mc-feedback" aria-live="polite"></div></li>
        <li class="mc-question"><span class="level">Fácil</span>Comportamento esperado:<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) Som contínuo sem pausa</button><button class="mc-option" data-correct="true" type="button">B) Som intermitente</button><button class="mc-option" data-correct="false" type="button">C) Brilho gradual</button><button class="mc-option" data-correct="false" type="button">D) Botão invertendo lógica</button></div><div class="mc-feedback" aria-live="polite"></div></li>
      </ol></div></article>
      <article class="exercise-box"><h4>Questões abertas</h4><div class="box-body"><ol class="open-list"><li>Explique a diferença entre saída visual e saída sonora.</li><li>Descreva o ciclo HIGH → espera → LOW → espera.</li><li>Explique por que o buzzer ativo pode ser ligado e desligado sem definir frequência no código.</li><li>O que acontece se reduzir os delays de 1000 para 300?</li><li>Qual é a diferença conceitual entre o buzzer ativo deste projeto e o buzzer passivo do Sensor de ré?</li></ol></div></article>
      <article class="exercise-box"><h4>Complete o código</h4><div class="box-body"><pre class="exercise-code">int pinoBuzzer = ____;

void setup() {
  pinMode(pinoBuzzer, ______);
}

void loop() {
  ____________(pinoBuzzer, HIGH);
  delay(1000);

  ____________(pinoBuzzer, LOW);
  delay(1000);
}</pre></div></article>
      <article class="exercise-box wide"><h4>Interpretação de código</h4><div class="box-body"><pre class="exercise-code">int pinoBuzzer = 8;

void setup() {
  pinMode(pinoBuzzer, OUTPUT);
}

void loop() {
  digitalWrite(pinoBuzzer, HIGH);
  delay(200);
  digitalWrite(pinoBuzzer, LOW);
  delay(1200);
}</pre><p>Explique como será o som produzido e compare o tempo ligado com o tempo em silêncio.</p></div></article>
    </div>
  `;
}

function normalizarNumeracaoVisivel(){
  const p8 = document.getElementById('p8');
  const p9 = document.getElementById('p9');
  const lab1 = document.getElementById('lab1');
  const lab2 = document.getElementById('lab2');
  const lab3 = document.getElementById('lab3');
  const lab4 = document.getElementById('lab4');
  if(p8){ mbbReplaceVisible(p8, [['Projeto 10','Projeto 8']]); const b=p8.querySelector('.projectHead .badge'); if(b) b.textContent='P8'; }
  if(p9){ mbbReplaceVisible(p9, [['Projeto 11','Projeto 9']]); const b=p9.querySelector('.projectHead .badge'); if(b) b.textContent='P9'; }
  if(lab1){ mbbReplaceVisible(lab1, [['Laboratório 2','Laboratório 1']]); const b=lab1.querySelector('.projectHead .badge'); if(b) b.textContent='Lab 1'; }
  if(lab2){ mbbReplaceVisible(lab2, [['Laboratório 3','Laboratório 2']]); const b=lab2.querySelector('.projectHead .badge'); if(b) b.textContent='Lab 2'; }
  if(lab3){ mbbReplaceVisible(lab3, [['Laboratório 6','Laboratório 3'],['Projeto 10','Projeto 8']]); const b=lab3.querySelector('.projectHead .badge'); if(b) b.textContent='Lab 3'; }
  if(lab4){ mbbReplaceVisible(lab4, [['Laboratório 7','Laboratório 4'],['Projeto 11','Projeto 9']]); const b=lab4.querySelector('.projectHead .badge'); if(b) b.textContent='Lab 4'; }
  const exercicios = document.getElementById('exercicios');
  if(exercicios) mbbReplaceVisible(exercicios, [['Projeto 10','Projeto 8'],['Projeto 11','Projeto 9'],['Laboratório 2','Laboratório 1'],['Laboratório 3','Laboratório 2'],['Laboratório 6','Laboratório 3'],['Laboratório 7','Laboratório 4']]);
}

function robustecerHcSr04(){
  const p7code = document.getElementById('p7code');
  if(p7code){
    let code = p7code.textContent;
    if(!code.includes('30000UL')){
      code = code.replace('distancia = medirDistancia();\n\n  Serial.print("Distancia: ");', 'distancia = medirDistancia();\n\n  if (distancia < 0) {\n    Serial.println("Sem eco valido.");\n    delay(200);\n    return;\n  }\n\n  Serial.print("Distancia: ");');
      code = code.replace('duracao = pulseIn(pinoEcho, HIGH);\n\n  return duracao / 58.0;', 'duracao = pulseIn(pinoEcho, HIGH, 30000UL);\n\n  if (duracao == 0) return -1;\n  return duracao / 58.0;');
      p7code.textContent = code;
    }
  }
  const p7 = document.getElementById('p7');
  if(p7 && !p7.querySelector('[data-mbb-timeout-hcsr04]')){
    const erros = mbbCardByTitle(p7, '10. Erros comuns');
    if(erros){ const p=document.createElement('p'); p.dataset.mbbTimeoutHcsr04='1'; p.innerHTML='<strong>Falha prevista:</strong> <code>pulseIn(..., 30000UL)</code> espera o eco por tempo limitado. Sem retorno, a leitura é considerada inválida em vez de prender a execução.'; erros.appendChild(p); }
  }

  const lab2code = document.getElementById('lab2code');
  if(lab2code){
    let code = lab2code.textContent;
    if(!code.includes('30000UL')){
      code = code.replace('distancia = medirDistancia();\n\n  Serial.print("Distancia: ");', 'distancia = medirDistancia();\n\n  if (distancia < 0) {\n    noTone(pinoBuzzer);\n    for (int pino = 8; pino <= 13; pino++) digitalWrite(pino, LOW);\n    Serial.println("Sem eco valido.");\n    delay(200);\n    return;\n  }\n\n  Serial.print("Distancia: ");');
      code = code.replace('long duracao = pulseIn(pinoEcho, HIGH);\n  return duracao / 58.0;', 'long duracao = pulseIn(pinoEcho, HIGH, 30000UL);\n  if (duracao == 0) return -1;\n  return duracao / 58.0;');
      lab2code.textContent = code;
    }
  }

  const lab4code = document.getElementById('lab4code');
  if(lab4code){
    let code = lab4code.textContent;
    code = code.replace('unsigned int distancia;', 'float distancia = 0;');
    code = code.replace('int medirDistancia(int pinoTrig, int pinoEcho)', 'float medirDistancia(int pinoTrig, int pinoEcho)');
    if(!code.includes('30000UL')){
      code = code.replace('distancia = medirDistancia(TRIG, ECHO);\n\n  Serial.println(distancia);', 'distancia = medirDistancia(TRIG, ECHO);\n\n  if (distancia < 0) {\n    Serial.println("Sem eco valido. Tampa mantida fechada.");\n    meuServo.write(0);\n    delay(200);\n    return;\n  }\n\n  Serial.println(distancia);');
      code = code.replace('return pulseIn(pinoEcho, HIGH) / 58;', 'long duracao = pulseIn(pinoEcho, HIGH, 30000UL);\n  if (duracao == 0) return -1;\n  return duracao / 58.0;');
    }
    lab4code.textContent = code;
  }
  const lab4 = document.getElementById('lab4');
  if(lab4 && !lab4.querySelector('[data-mbb-timeout-hcsr04]')){
    const erros = mbbCardByTitle(lab4, '12. Erros comuns');
    if(erros){ const p=document.createElement('p'); p.dataset.mbbTimeoutHcsr04='1'; p.innerHTML='<strong>Comportamento seguro:</strong> sem eco válido, a tampa permanece fechada. Ausência de dado não é interpretada como aproximação.'; erros.appendChild(p); }
  }
}

window.MbbArduinoFechamento = {
  aplicar(){
    corrigirBuzzerProjeto4();
    corrigirExerciciosBuzzer();
    normalizarNumeracaoVisivel();
    robustecerHcSr04();
  }
};
