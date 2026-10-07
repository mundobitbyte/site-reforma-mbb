(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você combinou de encontrar um amigo no clube do bairro para jogar bola. Como não conhece bem o caminho, abre um aplicativo de mapas no celular, escolhe o clube como destino e inicia uma rota de bicicleta. A tela informa: “faltam 2,4 km • chegada em cerca de 8 min”.</strong>
        <p>A rota está definida, mas os 8 minutos ainda são apenas uma estimativa. Você pode parar num semáforo, reduzir numa curva ou até errar uma rua. Então surge uma pergunta que precisa de resposta: <strong>como o aplicativo consegue estimar o tempo de chegada antes de o percurso terminar?</strong></p>
        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Antes de continuar, faça uma aposta</strong>
          <p>Se o aplicativo de mapas soubesse apenas que faltam 2,4 km, isso bastaria para prever o tempo de chegada?</p>
          <div class="choice-row"><button type="button" data-choice="a">Sim, toda distância de 2,4 km leva o mesmo tempo</button><button type="button" data-choice="b">Não, porque a mesma distância pode ser percorrida em ritmos diferentes</button><button type="button" data-choice="c">Sim, desde que a rota tenha sido iniciada</button></div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Exato. A distância é importante, mas precisamos também saber como a posição muda com o tempo." data-wrong-text="Imagine duas pessoas percorrendo a mesma distância, uma caminhando e outra de bicicleta."></div>
        </div>
        <p class="central-question"><strong>Nossa missão:</strong> descobrir, durante esse trajeto, quais ideias da Física permitem descrever o movimento e fazer previsões antes de ele terminar.</p>
      </div>
    </section>

    <section>
      <h3>1. Para acompanhar a rota, o aplicativo precisa saber onde você está</h3>
      <p>Você ainda está em frente de casa. O celular consegue estimar sua localização, e o aplicativo de mapas usa essa informação para atualizar a rota. Para a Física, porém, dizer apenas “estou na rua” não basta: precisamos descrever a posição em relação a algum sistema de referência.</p>
      <p>Vamos simplificar a rua como uma linha. Escolhemos o portão da sua casa como <strong>posição 0 m</strong>. Se você avançar no sentido do clube, as posições aumentam.</p>

      <div class="visual-box">
        <strong class="card-title">A rua virou uma linha de posições</strong>
        <svg class="lesson-visual" viewBox="0 0 760 250" role="img" aria-label="Rua representada por posições zero, cem, duzentos e trezentos metros, com um ciclista na posição duzentos metros claramente orientado para a direita, no sentido do clube.">
          <rect x="45" y="112" width="670" height="50" rx="18" class="road"/>
          <line x1="70" y1="137" x2="690" y2="137" class="road-center"/>
          <g class="position-mark"><line x1="80" y1="92" x2="80" y2="182"/><text x="63" y="205">0 m</text></g>
          <g class="position-mark"><line x1="280" y1="92" x2="280" y2="182"/><text x="251" y="205">100 m</text></g>
          <g class="position-mark"><line x1="480" y1="92" x2="480" y2="182"/><text x="451" y="205">200 m</text></g>
          <g class="position-mark"><line x1="680" y1="92" x2="680" y2="182"/><text x="651" y="205">300 m</text></g>
          <g aria-hidden="true">
            <circle cx="480" cy="111" r="17" class="bike-wheel"/><circle cx="524" cy="111" r="17" class="bike-wheel"/>
            <path d="M480 111 L495 84 L505 111 Z M495 84 L516 84 L524 111 M505 111 L516 84" class="bike-frame"/>
            <path d="M488 81 H498 M516 84 L521 72 L529 72" class="bike-frame"/>
            <circle cx="503" cy="57" r="9" class="rider-head"/>
            <path d="M502 67 L498 82 L507 96 M501 70 L518 75 M507 96 L495 110 M507 96 L520 108" class="rider"/>
            <path d="M538 86 H582" class="distance-arrow" marker-end="url(#arrowPosition)"/>
            <text x="536" y="70" class="visual-note">sentido do clube</text>
          </g>
          <text x="425" y="40" class="visual-title">agora: posição 200 m</text>
          <path d="M95 66 H468" class="distance-arrow" marker-end="url(#arrowPosition)"/>
          <text x="240" y="55" class="visual-note">200 m desde o ponto escolhido como referência</text>
          <defs><marker id="arrowPosition" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="arrow-fill"/></marker></defs>
        </svg>
        <p class="visual-caption">O portão não é um “zero universal”. Nós o escolhemos como referência para descrever este movimento.</p>
      </div>

      <p>É justamente essa escolha que a Física chama de <strong>referencial</strong>. A <strong>posição</strong> diz onde o corpo está em relação a esse referencial. Um mesmo objeto pode receber números de posição diferentes se mudarmos o ponto de referência.</p>

      <div class="note-box">
        <strong>Pare e explique em uma frase</strong>
        <p>Se a entrada do clube fosse escolhida como posição 0 m em vez da sua casa, sua posição mudaria de número mesmo sem você sair do lugar? Tente responder antes de continuar.</p>
        <details><summary>Compare sua explicação</summary><p>Sim. A posição é um número definido em relação ao referencial escolhido. Mudar o referencial pode mudar o número associado à posição, embora o corpo continue no mesmo lugar físico.</p></details>
      </div>
    </section>

    <section>
      <h3>2. Você entra na rua errada — e surge uma diferença importante</h3>
      <p>Depois de sair, você avança até a marca de <strong>300 m</strong>. Então percebe que errou a entrada, volta 100 m e termina na posição <strong>200 m</strong>.</p>
      <p>Se alguém perguntar “onde você está?”, a resposta é 200 m. Mas se perguntar “quanto você pedalou?”, dizer 200 m estaria errado.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Posição final</strong><p>Você terminou em <strong>200 m</strong> em relação ao portão escolhido como origem.</p></div>
        <div class="example-box"><strong class="card-title">Distância percorrida</strong><p>Você pedalou 300 m para a frente e 100 m de volta: <strong>400 m de caminho</strong>.</p></div>
      </div>

      <p>Essa diferença muda a maneira como descrevemos o trajeto. <strong>Distância percorrida</strong> soma todo o caminho feito. Já a <strong>variação de posição</strong> compara a posição final com a inicial e leva o sentido em conta.</p>

      <div class="formula-box"><span class="formula-name">A conta nasceu da história</span><div class="big-formula">Δs = s<sub>final</sub> − s<sub>inicial</sub></div><p>Neste trecho, saindo de 0 m e terminando em 200 m, temos Δs = 200 − 0 = <strong>200 m</strong>, embora a distância efetivamente pedalada tenha sido 400 m.</p></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>Teste a ideia</strong><p>Se você sair da posição 0 m, avançar até 500 m e voltar exatamente para casa, qual será sua variação de posição ao final?</p><div class="choice-row"><button type="button" data-choice="a">0 m</button><button type="button" data-choice="b">500 m</button><button type="button" data-choice="c">1.000 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Você percorreu 1.000 m, mas terminou onde começou: Δs = 0." data-wrong-text="Compare somente posição final e posição inicial para obter Δs."></div></div>
    </section>

    <section>
      <h3>3. A rota pode ser reconstruída a partir de posições registradas ao longo do tempo</h3>
      <p>Você corrige o caminho. Durante a rota, o aplicativo atualiza sua posição usando a localização estimada pelo celular. Em um trecho reto, registramos quatro dessas posições ao longo do tempo:</p>

      <div class="table-wrap"><table><thead><tr><th>Tempo</th><th>Posição</th><th>O que aconteceu?</th></tr></thead><tbody><tr><td>0 s</td><td>0 m</td><td>início do trecho</td></tr><tr><td>20 s</td><td>100 m</td><td>avançou 100 m</td></tr><tr><td>40 s</td><td>200 m</td><td>avançou mais 100 m</td></tr><tr><td>60 s</td><td>300 m</td><td>mantém o padrão</td></tr></tbody></table></div>

      <p>Uma tabela já conta a história. Mas um gráfico permite enxergar o padrão quase de imediato: o tempo fica no eixo horizontal e a posição no vertical.</p>

      <div class="visual-box">
        <strong class="card-title">O gráfico é uma história comprimida do trajeto</strong>
        <svg class="lesson-visual graph-visual" viewBox="0 0 700 330" role="img" aria-label="Gráfico posição por tempo crescendo linearmente de zero a trezentos metros em sessenta segundos.">
          <line x1="80" y1="265" x2="650" y2="265" class="axis"/><line x1="80" y1="265" x2="80" y2="35" class="axis"/>
          <g class="grid-lines"><line x1="80" y1="190" x2="650" y2="190"/><line x1="80" y1="115" x2="650" y2="115"/><line x1="80" y1="40" x2="650" y2="40"/><line x1="270" y1="265" x2="270" y2="40"/><line x1="460" y1="265" x2="460" y2="40"/><line x1="650" y1="265" x2="650" y2="40"/></g>
          <polyline points="80,265 270,190 460,115 650,40" class="motion-line"/>
          <g class="motion-points"><circle cx="80" cy="265" r="6"/><circle cx="270" cy="190" r="6"/><circle cx="460" cy="115" r="6"/><circle cx="650" cy="40" r="6"/></g>
          <g class="graph-labels"><text x="73" y="290">0</text><text x="255" y="290">20</text><text x="445" y="290">40</text><text x="635" y="290">60</text><text x="47" y="270">0</text><text x="30" y="195">100</text><text x="30" y="120">200</text><text x="30" y="45">300</text><text x="330" y="320">tempo (s)</text><text x="10" y="28">posição (m)</text></g>
        </svg>
        <p class="visual-caption">A mesma variação de posição em intervalos iguais de tempo aparece como uma linha reta inclinada.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Leia a história sem calcular</strong><p>Se o gráfico posição × tempo ficasse horizontal por 30 segundos, o que isso indicaria?</p><div class="choice-row"><button type="button" data-choice="a">A posição aumentou muito</button><button type="button" data-choice="b">O tempo parou</button><button type="button" data-choice="c">A posição não mudou nesse intervalo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Linha horizontal significa mesma posição durante aquele intervalo: uma parada." data-wrong-text="Observe qual grandeza fica constante numa linha horizontal desse gráfico."></div></div>

      <div class="note-box"><strong>Pare e explique</strong><p>Por que um gráfico posição × tempo consegue mostrar uma parada sem desenhar uma bicicleta parada? Responda com suas palavras.</p><details><summary>Compare sua ideia</summary><p>Porque o gráfico registra posição ao longo do tempo. Se o tempo passa e a posição permanece igual, o trecho fica horizontal — essa é a evidência de que não houve mudança de posição.</p></details></div>
    </section>

    <section>
      <h3>4. “8 minutos”: de onde veio essa previsão?</h3>
      <p>Agora podemos responder à pergunta do início. Para este <strong>modelo simplificado</strong>, vamos considerar que o aplicativo estima para esse percurso de bicicleta um ritmo médio de cerca de <strong>300 m por minuto</strong>, equivalente a aproximadamente <strong>18 km/h</strong>. Esse ritmo é uma estimativa usada pelo modelo; ele não é obtido apenas da distância.</p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Faça a previsão com esse ritmo</strong><p>Se você percorresse aproximadamente 300 m por minuto, 2,4 km levariam perto de:</p><div class="choice-row"><button type="button" data-choice="a">2 min</button><button type="button" data-choice="b">8 min</button><button type="button" data-choice="c">30 min</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso: 2.400 ÷ 300 = 8 minutos." data-wrong-text="Transforme 2,4 km em 2.400 m e compare com 300 m por minuto."></div></div>

      <div class="equation-walk"><div><span>1</span><p>Distância restante: 2,4 km = <strong>2.400 m</strong>.</p></div><div><span>2</span><p>Ritmo médio estimado: <strong>300 m/min</strong>.</p></div><div><span>3</span><p>Tempo previsto: 2.400 ÷ 300 = <strong>8 min</strong>.</p></div></div>

      <div class="note-box"><strong>Então por que apareceram 8 minutos?</strong><p>Porque, neste exemplo, a previsão combina a distância restante de <strong>2.400 m</strong> com um ritmo médio estimado de <strong>300 m por minuto</strong>. Dividindo um pelo outro, obtemos <strong>8 minutos</strong>. Na vida real, aplicativos usam modelos mais ricos e podem atualizar a previsão quando seu ritmo, o caminho ou as condições do percurso mudam.</p></div>

      <p>O mesmo ritmo de 300 m por minuto corresponde a <strong>5 m por segundo</strong>. Essa relação nos leva a uma medida importante: quanto a posição varia em cada unidade de tempo.</p>
      <p>Depois que a relação ficou clara, damos a ela um nome: <strong>velocidade média</strong> no trecho.</p>
      <div class="formula-box"><span class="formula-name">A fórmula registra o raciocínio que acabamos de fazer</span><div class="big-formula">v<sub>m</sub> = Δs / Δt</div><p>Neste trajeto sem retorno, Δs = 2.400 m e Δt = 480 s, então v<sub>m</sub> = <strong>5 m/s</strong>. Multiplicando por 3,6, isso corresponde a <strong>18 km/h</strong>.</p></div>

      <div class="note-box"><strong>Por que “média”?</strong><p>Você não precisa pedalar a 5 m/s o tempo inteiro. Pode andar mais rápido, mais devagar ou até parar. Os 5 m/s resumem o efeito total do trecho sobre a posição ao longo do tempo.</p></div>

      <div class="interactive-lab" id="tripLab">
        <div class="lab-heading"><span class="lesson-kicker">Agora experimente</span><h4>Se seu ritmo mudar, o que acontece com a posição e com a previsão?</h4></div>
        <div class="lab-controls">
          <label>Velocidade no trecho <strong><span id="tripSpeedValue">5,0</span> m/s</strong><input id="tripSpeedRange" type="range" min="1" max="10" step="0.5" value="5"></label>
          <label>Tempo pedalando <strong><span id="tripTimeValue">120</span> s</strong><input id="tripTimeRange" type="range" min="0" max="480" step="10" value="120"></label>
        </div>
        <div class="motion-track" aria-hidden="true"><span class="track-start">casa</span><div id="tripLabCar" class="lab-car">🚲</div><span class="track-end">clube • 2.400 m</span></div>
        <div class="lab-result"><span>Posição: <strong><span id="tripPositionValue">600</span> m</strong></span><span>Faltam: <strong><span id="tripRemainingValue">1.800</span> m</strong></span><span>Se mantiver o ritmo: <strong><span id="tripEtaValue">6,0</span> min</strong></span></div>
        <p>Faça dois testes: primeiro mantenha o tempo e aumente a velocidade; depois mantenha a velocidade e aumente o tempo. Observe o que cada grandeza faz antes de pensar em qualquer equação.</p>
      </div>
    </section>

    <section>
      <h3>5. O semáforo fecha. Quando abre, você não volta instantaneamente a 18 km/h</h3>
      <p>Você para. O marcador de velocidade chega a zero. O sinal abre e, em três segundos, sua velocidade passa de <strong>0 para 6 m/s</strong>.</p>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Qual frase descreve melhor esses três segundos?</strong><p></p><div class="choice-row"><button type="button" data-choice="a">A velocidade mudou com o tempo</button><button type="button" data-choice="b">A posição ficou obrigatoriamente igual</button><button type="button" data-choice="c">Nada mudou porque o destino é o mesmo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. É justamente a mudança da velocidade ao longo do tempo que precisamos medir agora." data-wrong-text="Observe o que aconteceu com a velocidade entre o sinal fechado e a retomada."></div></div>

      <p>Se a mudança fosse aproximadamente regular, a sequência poderia ser:</p>
      <div class="speed-sequence" aria-label="Velocidade aumentando de zero a seis metros por segundo em três segundos"><div><span>0 s</span><strong>0 m/s</strong><div class="speed-bar" style="--p:0%"></div></div><div><span>1 s</span><strong>2 m/s</strong><div class="speed-bar" style="--p:33%"></div></div><div><span>2 s</span><strong>4 m/s</strong><div class="speed-bar" style="--p:66%"></div></div><div><span>3 s</span><strong>6 m/s</strong><div class="speed-bar" style="--p:100%"></div></div></div>

      <p>O padrão diz: <strong>a cada segundo, a velocidade aumentou cerca de 2 m/s</strong>. A Física chama essa taxa de mudança de velocidade de <strong>aceleração</strong>.</p>
      <div class="formula-box"><span class="formula-name">Só agora precisamos do símbolo</span><div class="big-formula">a = Δv / Δt</div><p>a = (6 − 0)/3 = <strong>2 m/s²</strong>. Aqui, 2 m/s² significa que a velocidade aumentou aproximadamente 2 m/s a cada segundo.</p></div>

      <div class="note-box"><strong>Não confunda velocidade com aceleração</strong><p>Uma bicicleta pode estar rápida e com aceleração zero se sua velocidade não estiver mudando. Também pode estar devagar e acelerando, como nos primeiros instantes depois que o sinal abre.</p></div>
    </section>

    <section>
      <h3>6. Depois do semáforo vem uma avenida longa. Dá para prever onde você estará?</h3>
      <p>Você passa pela posição <strong>900 m</strong> e entra num trecho em que consegue manter aproximadamente <strong>5 m/s</strong>. Seu amigo manda uma mensagem: “onde você estará daqui a um minuto?”</p>
      <p>Em 60 s, avançando 5 m a cada segundo, você acrescentará <strong>300 m</strong> à posição que já tinha.</p>

      <div class="concept-flow"><div><strong>onde você já estava</strong><span>900 m</span></div><div class="flow-arrow">+</div><div><strong>o que avança em 60 s</strong><span>5 × 60 = 300 m</span></div><div class="flow-arrow">=</div><div><strong>nova posição</strong><span>1.200 m</span></div></div>

      <p>Agora podemos generalizar esse raciocínio para qualquer trecho de velocidade constante:</p>
      <div class="formula-box"><span class="formula-name">Previsão de posição no movimento uniforme</span><div class="big-formula">s = s₀ + v · t</div><p><strong>s₀</strong> é a posição de onde começamos a previsão. <strong>v·t</strong> representa quanto a posição varia se a velocidade se mantiver constante.</p></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Use o raciocínio, não a memória</strong><p>Na posição 1.200 m, você mantém 4 m/s por 50 s. Em qual posição estará?</p><div class="choice-row"><button type="button" data-choice="a">200 m</button><button type="button" data-choice="b">1.250 m</button><button type="button" data-choice="c">1.400 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="4·50 = 200 m de avanço; 1.200 + 200 = 1.400 m." data-wrong-text="Descubra primeiro quanto você avança nos 50 s e depois some à posição inicial."></div></div>
    </section>

    <section>
      <h3>7. A rotatória quebra uma ideia: o velocímetro pode não mudar, mas a velocidade pode</h3>
      <p>Faltando pouco para o clube, você entra numa rotatória mantendo o velocímetro próximo de <strong>15 km/h</strong>. Antes da curva, você seguia para a frente; durante a curva, a direção da bicicleta muda continuamente.</p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Faça sua aposta antes da explicação</strong><p>Enquanto contorna a rotatória com o mesmo valor aproximado no velocímetro, existe aceleração?</p><div class="choice-row"><button type="button" data-choice="a">Não, porque o número do velocímetro quase não muda</button><button type="button" data-choice="b">Sim, porque a direção da velocidade muda</button><button type="button" data-choice="c">Só existe aceleração quando a bicicleta parte do repouso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. A velocidade inclui módulo e direção. Mudar a direção também é mudar a velocidade." data-wrong-text="Compare para onde a bicicleta aponta antes, durante e depois da curva."></div></div>

      <div class="two-col">
        <div class="concept-box"><strong class="card-title">Rapidez</strong><p>É o valor que o velocímetro informa: por exemplo, 15 km/h.</p></div>
        <div class="concept-box"><strong class="card-title">Velocidade</strong><p>Para descrever completamente o movimento, precisamos também da <strong>direção e do sentido</strong>.</p></div>
      </div>

      <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Bicicleta em movimento circular com vetores de velocidade tangentes em diferentes pontos.">
        <defs><marker id="circArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
        <circle cx="380" cy="155" r="105" class="orbit"/><circle cx="380" cy="155" r="18" fill="#d9e1ec"/>
        <circle cx="485" cy="155" r="13" class="orbit-object"/><line x1="485" y1="150" x2="485" y2="65" class="vector" marker-end="url(#circArrow)"/>
        <circle cx="380" cy="50" r="13" class="orbit-object"/><line x1="375" y1="50" x2="285" y2="50" class="vector" marker-end="url(#circArrow)"/>
        <text x="505" y="95" class="visual-note">mesmo valor de rapidez</text><text x="505" y="115" class="visual-note">direção diferente</text><text x="245" y="285" class="visual-title">mudar a direção da velocidade também é acelerar</text>
      </svg>

      <p>Por isso, no <strong>movimento circular</strong>, mesmo que a rapidez permaneça constante, existe aceleração: o vetor velocidade está mudando de direção a cada instante.</p>
      <div class="note-box"><strong>Pare e explique</strong><p>Se o velocímetro mostra sempre 15 km/h numa rotatória, por que não podemos concluir que a velocidade é constante?</p><details><summary>Compare sua explicação</summary><p>Porque o velocímetro mostra apenas o módulo da velocidade. Na curva, a direção muda; portanto a velocidade muda e existe aceleração.</p></details></div>
      <p>Essa mudança de direção exige uma aceleração voltada para o centro da curva. No capítulo seguinte veremos quais forças podem produzir essa aceleração.</p>
    </section>

    <section>
      <h3>8. Você chega ao clube. Perto da quadra, uma bola escapa da mão: ela mantém a mesma velocidade?</h3>
      <p>Já na área esportiva, enquanto você e seu amigo se preparam para jogar, uma bola escapa da mão de alguém e cai praticamente a partir do repouso. Em vez de pensar apenas “ela vai para baixo”, observe o que acontece <strong>a cada intervalo de tempo</strong>.</p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Faça uma hipótese</strong><p>Desprezando a resistência do ar, o que acontece com o módulo da velocidade durante a queda?</p><div class="choice-row"><button type="button" data-choice="a">Permanece constante</button><button type="button" data-choice="b">Aumenta com o tempo</button><button type="button" data-choice="c">Diminui até zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A queda livre é um movimento acelerado: o módulo da velocidade aumenta enquanto a bola cai." data-wrong-text="Compare o início da queda com instantes posteriores."></div></div>

      <svg class="lesson-visual" viewBox="0 0 760 310" role="img" aria-label="Bola em queda livre em quatro instantes, com espaçamentos crescentes.">
        <line x1="380" y1="35" x2="380" y2="280" class="fall-guide"/>
        <g class="fall-ball"><circle cx="380" cy="55" r="15"/><text x="420" y="60">início</text><circle cx="380" cy="95" r="15"/><text x="420" y="100">depois</text><circle cx="380" cy="160" r="15"/><text x="420" y="165">mais rápida</text><circle cx="380" cy="260" r="15"/><text x="420" y="265">ainda mais rápida</text></g>
        <text x="140" y="295" class="visual-title">em tempos iguais, os espaços percorridos aumentam</text>
      </svg>

      <p>Perto da superfície da Terra, quando podemos desprezar o ar, a velocidade vertical muda aproximadamente <strong>9,8 m/s a cada segundo</strong>. Essa taxa é a aceleração da gravidade, representada por <strong>g</strong>. Para estimativas simples, usamos muitas vezes <strong>g ≈ 10 m/s²</strong>.</p>

      <div class="table-wrap"><table><thead><tr><th>Tempo de queda</th><th>Velocidade aproximada</th><th>Distância caída desde o início</th></tr></thead><tbody><tr><td>0 s</td><td>0 m/s</td><td>0 m</td></tr><tr><td>0,5 s</td><td>5 m/s</td><td>1,25 m</td></tr><tr><td>1,0 s</td><td>10 m/s</td><td>5 m</td></tr><tr><td>1,5 s</td><td>15 m/s</td><td>11,25 m</td></tr></tbody></table></div>

      <p>Veja dois padrões diferentes. A velocidade cresce proporcionalmente ao tempo. Já a distância caída cresce muito mais depressa: dobrar o tempo de 0,5 s para 1,0 s faz a distância passar de 1,25 m para 5 m, ou seja, <strong>quatro vezes maior</strong>.</p>

      <div class="formula-box"><span class="formula-name">As fórmulas registram esses dois padrões</span><div class="big-formula">v ≈ g·t &nbsp;&nbsp; e &nbsp;&nbsp; h ≈ ½·g·t²</div><p>Elas valem aqui para o modelo que estamos usando: queda a partir do repouso, próxima da superfície da Terra, com g aproximadamente constante e resistência do ar desprezada.</p></div>

      <div class="interactive-lab" id="fallLab">
        <div class="lab-heading"><span class="lesson-kicker">Experimente o modelo</span><h4>Quanto meio segundo a mais muda uma queda?</h4></div>
        <div class="lab-controls"><label>Tempo de queda <strong><span id="fallTimeValue">0,5</span> s</strong><input id="fallTimeRange" type="range" min="0" max="2" step="0.1" value="0.5"></label></div>
        <div class="lab-result"><span>Velocidade: <strong><span id="fallSpeedValue">5,0</span> m/s</strong></span><span>Distância caída: <strong><span id="fallHeightValue">1,25</span> m</strong></span></div>
        <p>Aumente o tempo aos poucos. Observe que a velocidade cresce de modo regular, mas a distância não: o termo t² faz a distância crescer cada vez mais rapidamente.</p>
      </div>

      <div class="note-box"><strong>Pare e explique</strong><p>Sem fazer uma nova conta: se o tempo de queda dobrar, por que a distância não apenas dobra?</p><details><summary>Compare sua explicação</summary><p>Porque a bola não mantém a mesma velocidade durante a queda. Ela acelera. Quanto mais tempo cai, maior fica sua velocidade; por isso a distância acumulada cresce com o quadrado do tempo.</p></details></div>
    </section>

    <section>
      <h3>9. A mesma bola rola por um banco ao lado da quadra e sai pela borda: ela avança e cai ao mesmo tempo</h3>
      <p>Alguns minutos depois, a bola que estava sobre um banco ao lado da quadra é empurrada sem querer, rola e sai pela borda com velocidade horizontal. Agora aparece uma pergunta nova: <strong>ao perder o apoio, ela para de avançar para começar a cair?</strong></p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Faça sua previsão</strong><p>No modelo sem resistência do ar, logo depois de sair horizontalmente da borda, a bola:</p><div class="choice-row"><button type="button" data-choice="a">Para horizontalmente e só depois cai</button><button type="button" data-choice="b">Continua avançando enquanto cai</button><button type="button" data-choice="c">Fica parada no ar por um instante</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O movimento horizontal continua enquanto, ao mesmo tempo, a gravidade produz a queda vertical." data-wrong-text="Pense no que faria a bola perder instantaneamente toda a velocidade horizontal."></div></div>

      <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Trajetória curva de uma bola saindo horizontalmente de uma borda e caindo ao mesmo tempo em que avança.">
        <line x1="80" y1="245" x2="690" y2="245" class="axis"/><line x1="90" y1="45" x2="90" y2="245" class="axis"/>
        <path d="M110 70 Q330 80 610 235" class="projectile-path"/>
        <circle cx="110" cy="70" r="12" class="projectile-ball"/><circle cx="235" cy="83" r="10" class="projectile-ghost"/><circle cx="360" cy="120" r="10" class="projectile-ghost"/><circle cx="485" cy="172" r="10" class="projectile-ghost"/><circle cx="610" cy="235" r="12" class="projectile-ball"/>
        <text x="115" y="45" class="visual-note">saída horizontal</text><text x="405" y="280" class="visual-title">avanço horizontal + queda vertical = trajetória curva</text>
      </svg>

      <p>É aqui que uma ideia poderosa aparece: podemos <strong>separar o movimento em duas direções</strong> para entendê-lo.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Horizontal</strong><p>Sem resistência do ar, a velocidade horizontal permanece aproximadamente constante. Assim, o avanço é <strong>x = v<sub>x</sub>·t</strong>.</p></div><div class="example-box"><strong class="card-title">Vertical</strong><p>A bola começa sem velocidade vertical e cai com a mesma aceleração g estudada na queda livre: <strong>h ≈ ½·g·t²</strong>.</p></div></div>

      <p>Suponha que a bola saia horizontalmente a <strong>6 m/s</strong>. Depois de <strong>0,5 s</strong>, no modelo idealizado:</p>
      <div class="equation-walk"><div><span>1</span><p>Horizontalmente: 6·0,5 = <strong>3 m</strong>.</p></div><div><span>2</span><p>Verticalmente: ½·10·0,5² = <strong>1,25 m</strong> de queda.</p></div><div><span>3</span><p>As duas mudanças acontecem <strong>no mesmo intervalo de 0,5 s</strong>.</p></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Conecte com a queda livre</strong><p>Duas bolas começam da mesma altura ao mesmo tempo. Uma é apenas solta; a outra sai horizontalmente. Desprezando o ar, qual chega primeiro ao chão?</p><div class="choice-row"><button type="button" data-choice="a">A que foi solta</button><button type="button" data-choice="b">A que saiu horizontalmente</button><button type="button" data-choice="c">Chegam praticamente juntas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Na vertical, as duas começam com velocidade vertical zero e sofrem a mesma aceleração g; o movimento horizontal não aumenta o tempo de queda." data-wrong-text="Compare somente o movimento vertical das duas bolas."></div></div>

      <div class="note-box"><strong>O lançamento horizontal combina duas ideias já conhecidas</strong><p>O movimento é aproximadamente uniforme na horizontal e acelerado pela gravidade na vertical. A trajetória curva aparece porque os dois movimentos acontecem ao mesmo tempo.</p></div>
    </section>

    <section>
      <h3>10. Volte à tela do aplicativo de mapas: agora os “2,4 km • 8 min” dizem muito mais</h3>
      <p>No começo, o número parecia quase mágico. Agora conseguimos desmontar parte do problema:</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">Onde estou?</strong><p>Precisamos de referencial e posição.</p></div><div class="example-box"><strong class="card-title">Como cheguei aqui?</strong><p>Distância, tempo, tabela e gráfico ajudam a reconstruir o trajeto.</p></div><div class="example-box"><strong class="card-title">Quando chego?</strong><p>Velocidade, aceleração e modelos de movimento permitem fazer previsões.</p></div></div>
      <p>Na vida real, aplicativos de navegação usam mapas, trânsito, sensores e modelos muito mais ricos. Mas a base física continua reconhecível: <strong>posição muda com o tempo</strong>, e essa mudança pode ser medida, representada e prevista.</p>
      <div class="note-box"><strong>Resposta à pergunta do início</strong><p>Neste exemplo simplificado, os <strong>8 minutos</strong> vieram de uma conta concreta: <strong>2.400 m ÷ 300 m/min = 8 min</strong>. A distância sozinha não produz o tempo; foi necessário combiná-la com um ritmo médio estimado para a bicicleta.</p></div>
      <div class="note-box"><strong>O fio da aula</strong><p>Referencial resolveu “onde?”. Distância e variação de posição resolveram “quanto mudou?”. Gráfico mostrou “como mudou no tempo?”. Velocidade mediu o ritmo da mudança. Aceleração apareceu quando a velocidade deixou de ser constante. Depois usamos essas ideias para interpretar curvas, quedas e lançamentos.</p></div>
    </section>

    <section>
      <h3>11. Faça uma pequena investigação real</h3>
      <div class="experiment-box"><strong class="card-title">Reconstrua um movimento com dados</strong><ol class="reason-steps"><li>Escolha um corredor ou trecho seguro, plano e livre, de aproximadamente 5 a 10 m.</li><li>Defina o início como posição 0 m e marque outras posições com segurança.</li><li>Uma pessoa caminha normalmente enquanto outra registra a posição a cada 2 s.</li><li>Monte uma tabela tempo × posição.</li><li>Desenhe um gráfico posição × tempo.</li><li>Procure um trecho mais inclinado no gráfico e um trecho menos inclinado. O que isso sugere sobre a velocidade?</li><li>Se houver uma parada, identifique no gráfico qual evidência mostra que a pessoa ficou parada.</li></ol><p class="safety-note"><strong>Segurança:</strong> use apenas caminhada em local livre de veículos, escadas e obstáculos. Não faça corrida para obter dados.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint — o trajeto de volta</span>
      <h3>12. Você consegue usar as ideias sem depender da história original?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Referencial</strong><p>Na volta, você escolhe a entrada do clube como posição 0 m. Sua casa pode ter uma posição diferente da usada na ida?</p><div class="choice-row"><button type="button" data-choice="a">Não, posições são universais</button><button type="button" data-choice="b">Sim, porque o referencial mudou</button><button type="button" data-choice="c">Só se mudar a distância real</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O número associado à posição depende do referencial escolhido." data-wrong-text="Lembre que o zero da nossa linha foi uma escolha."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Distância</strong><p>Você avança 100 m, percebe que esqueceu algo e retorna 40 m. Quanto percorreu?</p><div class="choice-row"><button type="button" data-choice="a">140 m</button><button type="button" data-choice="b">60 m</button><button type="button" data-choice="c">40 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A distância soma todo o caminho: 100 + 40 = 140 m." data-wrong-text="Não confunda caminho percorrido com variação de posição."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Gráfico</strong><p>Num gráfico posição × tempo, um trecho horizontal indica:</p><div class="choice-row"><button type="button" data-choice="a">grande aceleração</button><button type="button" data-choice="b">tempo negativo</button><button type="button" data-choice="c">posição constante</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso: durante aquele intervalo, o corpo permaneceu na mesma posição." data-wrong-text="Leia diretamente o eixo vertical ao longo do intervalo."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Velocidade média</strong><p>Em um trecho sem retorno, você varia sua posição em 600 m durante 120 s. A velocidade média é:</p><div class="choice-row"><button type="button" data-choice="a">2 m/s</button><button type="button" data-choice="b">5 m/s</button><button type="button" data-choice="c">72 m/s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="600 ÷ 120 = 5 m/s." data-wrong-text="Pergunte quantos metros correspondem, em média, a cada segundo."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Aceleração</strong><p>A velocidade muda de 2 m/s para 8 m/s em 3 s. A aceleração média é:</p><div class="choice-row"><button type="button" data-choice="a">2 m/s²</button><button type="button" data-choice="b">3 m/s²</button><button type="button" data-choice="c">10 m/s²</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Δv = 6 m/s; 6 ÷ 3 = 2 m/s²." data-wrong-text="Calcule primeiro quanto a velocidade mudou."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Previsão de posição</strong><p>Você parte da posição 400 m e mantém 3 m/s por 100 s. A posição final é:</p><div class="choice-row"><button type="button" data-choice="a">300 m</button><button type="button" data-choice="b">403 m</button><button type="button" data-choice="c">700 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Você avança 3·100 = 300 m; 400 + 300 = 700 m." data-wrong-text="Some à posição inicial o avanço produzido por v·t."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Movimento circular</strong><p>Uma bicicleta faz uma curva com rapidez constante. Por que pode haver aceleração?</p><div class="choice-row"><button type="button" data-choice="a">Porque o tempo deixa de existir</button><button type="button" data-choice="b">Porque a direção da velocidade muda</button><button type="button" data-choice="c">Porque a massa aumenta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Mudança de direção também é mudança da velocidade." data-wrong-text="Velocidade inclui direção, não apenas o valor mostrado no velocímetro."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Queda e lançamento</strong><p>Uma bola sai horizontalmente de uma borda. Desprezando o ar, qual ideia descreve melhor seu movimento?</p><div class="choice-row"><button type="button" data-choice="a">Avança horizontalmente enquanto cai verticalmente</button><button type="button" data-choice="b">Termina primeiro o movimento horizontal e depois começa a cair</button><button type="button" data-choice="c">A gravidade elimina instantaneamente a velocidade horizontal</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O lançamento pode ser entendido combinando o avanço horizontal com a queda vertical." data-wrong-text="Relembre como separamos o movimento em duas direções que acontecem ao mesmo tempo."></div></div>

      <div class="challenge-box"><strong>Desafio MbB — produza a história de um movimento</strong><p>Em um local seguro, caminhe por um pequeno trajeto e registre sua posição em pelo menos cinco instantes. Monte uma tabela e um gráfico posição × tempo. Depois escreva poucas linhas explicando onde você esteve mais rápido, se houve uma parada ou mudança de ritmo e qual evidência no gráfico sustenta sua conclusão. O objetivo não é fazer uma conta isolada: é <strong>usar dados para contar o que aconteceu</strong>.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>Esta investigação trabalha os objetos de Cinemática previstos para a 1ª série: <strong>espaço, tempo, distância, velocidade, aceleração, equação horária, movimento circular, queda livre e lançamento de projétil</strong>.</p></details>
  `;

  function initChapterLabs(root) {
    const tripSpeed = $('#tripSpeedRange', root);
    const tripTime = $('#tripTimeRange', root);
    const bike = $('#tripLabCar', root);

    const format = (value, digits = 0) => Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

    if (tripSpeed && tripTime && bike) {
      const route = 2400;
      const drawTrip = () => {
        const v = Number(tripSpeed.value);
        const t = Number(tripTime.value);
        const position = Math.min(route, v * t);
        const remaining = Math.max(0, route - position);
        const etaSeconds = v > 0 ? remaining / v : 0;

        $('#tripSpeedValue', root).textContent = format(v, 1);
        $('#tripTimeValue', root).textContent = format(t);
        $('#tripPositionValue', root).textContent = format(position);
        $('#tripRemainingValue', root).textContent = format(remaining);
        $('#tripEtaValue', root).textContent = format(etaSeconds / 60, 1);
        bike.style.left = `${6 + 88 * (position / route)}%`;
      };

      [tripSpeed, tripTime].forEach((input) => input.addEventListener('input', drawTrip));
      drawTrip();
    }

    const fallTime = $('#fallTimeRange', root);
    if (fallTime) {
      const drawFall = () => {
        const t = Number(fallTime.value);
        const g = 10;
        const v = g * t;
        const h = 0.5 * g * t * t;
        $('#fallTimeValue', root).textContent = format(t, 1);
        $('#fallSpeedValue', root).textContent = format(v, 1);
        $('#fallHeightValue', root).textContent = format(h, 2);
      };
      fallTime.addEventListener('input', drawFall);
      drawFall();
    }
  }

  MBB.enableChapter?.('01 O mundo está em movimento', () => {
    MBB.showLesson({
      unit: 'Vida, Terra e Cosmos',
      technical: 'Cinemática • espaço • tempo • distância • velocidade • aceleração • equação horária • movimento circular • queda livre • lançamento de projétil',
      title: 'O mundo está em movimento',
      objective: '<strong>Propósito:</strong> acompanhar uma situação real do início ao fim e construir, a partir dela, as ferramentas da Cinemática para descrever e prever movimentos.',
      html: lessonHtml,
      init: initChapterLabs
    });
  });
})();