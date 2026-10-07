(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Sua família está pesquisando a segurança de um carro antes de comprá-lo. Você abre um vídeo de teste de impacto frontal e vê o veículo atingir a barreira, deformar a dianteira e parar em uma fração de segundo.</strong>
        <p>No interior do carro, o cinto segura o boneco de teste e o airbag infla antes que ele avance demais. A pergunta não é apenas “qual foi a força da batida?”. Precisamos explicar <strong>quanto movimento existia antes, quanto ele mudou e em quanto tempo essa mudança aconteceu</strong>.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Se duas pessoas sofrem a mesma mudança de movimento, mas uma para em 0,05 s e outra em 0,50 s, em qual caso a força média tende a ser menor?</p><div class="choice-row"><button type="button" data-choice="a">Na parada de 0,05 s</button><button type="button" data-choice="b">Na parada de 0,50 s</button><button type="button" data-choice="c">O tempo não interfere</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Para a mesma mudança de quantidade de movimento, aumentar o tempo de parada reduz a força média necessária." data-wrong-text="Compare a mesma mudança acontecendo quase instantaneamente com a mesma mudança distribuída por mais tempo."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> entender por que cinto, airbag e deformação ajudam, e depois usar a mesma Física para explicar colisões entre dois corpos.</p>
      </div>
    </section>

    <section>
      <h3>1. Antes do impacto, o carro e o ocupante já possuem quantidade de movimento</h3>
      <p>Para comparar situações com números simples, considere um modelo em linha reta no qual o carro se desloca a <strong>10 m/s</strong>, cerca de 36 km/h. Um carrinho leve e um automóvel à mesma velocidade não são igualmente difíceis de parar: a <strong>massa</strong> importa. O mesmo automóvel a velocidades diferentes também não possui o mesmo estado de movimento: a <strong>velocidade</strong> importa.</p>
      <p>A grandeza que reúne massa e velocidade é a <strong>quantidade de movimento</strong>, também chamada de momento linear.</p>
      <div class="formula-box"><span class="formula-name">Quantidade de movimento</span><div class="big-formula">p = m · v</div><p>Escolhendo a direita como sentido positivo, o sinal de v também registra o sentido de p.</p></div>
      <div class="example-box"><strong class="card-title">O carro antes do impacto</strong><p>Considere um carro de teste de 800 kg a 10 m/s para a direita.</p><ol class="reason-steps"><li>m = 800 kg.</li><li>v = +10 m/s.</li><li>p = 800·10 = <strong>8.000 kg·m/s para a direita</strong>.</li></ol></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Faça a previsão</strong><p>Se a massa dobrar e a velocidade permanecer igual, a quantidade de movimento:</p><div class="choice-row"><button type="button" data-choice="a">cai pela metade</button><button type="button" data-choice="b">não muda</button><button type="button" data-choice="c">dobra</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Mantendo v, dobrar m dobra p." data-wrong-text="Mantenha v constante e observe p = m·v."></div></div>
    </section>

    <section>
      <h3>2. Durante o impacto, a força atua por um intervalo muito curto</h3>
      <p>Considere agora um ocupante de <strong>70 kg</strong> que também estava a 10 m/s antes de ser levado ao repouso. Durante a colisão, cinto, airbag e outras partes do veículo exercem forças por um intervalo de tempo. O efeito acumulado de uma força ao longo desse intervalo é chamado de <strong>impulso</strong>.</p>
      <div class="formula-box"><span class="formula-name">Impulso de uma força média</span><div class="big-formula">I = F<sub>média</sub> · Δt</div><p>Se uma força média de 14.000 N atua por 0,05 s, o impulso tem módulo 14.000·0,05 = <strong>700 N·s</strong>.</p></div>
      <div class="note-box"><strong>O que o tempo muda?</strong><p>Uma força pequena atuando por mais tempo e uma força grande atuando por menos tempo podem produzir o mesmo impulso. Por isso a duração da interação não pode ser ignorada.</p></div>
    </section>

    <section>
      <h3>3. Os 700 N·s têm um significado: eles correspondem à mudança do movimento</h3>
      <p>O ocupante de 70 kg estava a 10 m/s e termina praticamente em repouso. Antes do impacto, sua quantidade de movimento era 70·10 = <strong>700 kg·m/s</strong>; depois, é aproximadamente zero.</p>
      <div class="formula-box"><span class="formula-name">Teorema do impulso</span><div class="big-formula">I = Δp = p<sub>f</sub> − p<sub>i</sub></div><p>Nesse caso, Δp = 0 − 700 = <strong>−700 kg·m/s</strong>. O sinal indica que a mudança ocorre no sentido oposto ao movimento inicial; seu módulo é 700 kg·m/s.</p></div>
      <div class="note-box"><strong>Por que apareceu o mesmo número 700?</strong><p>Porque impulso e variação da quantidade de movimento representam a mesma mudança física. <strong>1 N·s equivale a 1 kg·m/s</strong>. O impulso exercido sobre o ocupante é justamente o que altera sua quantidade de movimento.</p></div>
    </section>

    <section>
      <h3>4. Então por que cinto, airbag e zonas de deformação ajudam?</h3>
      <p>O ocupante precisa passar de 10 m/s para aproximadamente zero. Cinto, airbag e deformação do veículo não fazem essa mudança desaparecer. Eles podem <strong>aumentar o tempo de desaceleração</strong>, controlar o movimento do corpo e distribuir melhor as forças.</p>
      <div class="example-box"><strong class="card-title">Mesma mudança de movimento, tempos diferentes</strong><p>Para |Δp| = 700 kg·m/s:</p><ol class="reason-steps"><li>Se Δt = 0,05 s: F<sub>média</sub> ≈ 700/0,05 = <strong>14.000 N</strong>.</li><li>Se Δt = 0,50 s: F<sub>média</sub> ≈ 700/0,50 = <strong>1.400 N</strong>.</li><li>Neste modelo, tornar o tempo 10 vezes maior reduz a força média por um fator 10.</li></ol></div>
      <div class="note-box"><strong>Resposta à pergunta do início</strong><p>A parada de 0,50 s tende a produzir menor força média porque a mesma variação de quantidade de movimento acontece durante um intervalo maior. É por isso que <strong>aumentar o tempo de desaceleração</strong> é uma das ideias físicas por trás de sistemas de proteção.</p></div>
      <div class="note-box"><strong>Um acidente real é mais complexo</strong><p>Forças variam durante o impacto, diferentes regiões do corpo respondem de maneiras distintas e materiais se deformam. O cálculo acima isola uma relação importante: para a mesma Δp, aumentar Δt reduz a força média.</p></div>
    </section>

    <section>
      <h3>5. Para entender a colisão entre dois corpos, usamos dois carrinhos numa pista</h3>
      <p>Um carro real envolve muitas peças e deformações. Com dois carrinhos numa pista reta, conseguimos observar uma ideia essencial: durante o curto intervalo do choque, eles exercem forças um sobre o outro. Se o impulso externo sobre o conjunto for desprezível, a <strong>quantidade de movimento total do sistema</strong> permanece a mesma antes e depois.</p>
      <div class="formula-box"><span class="formula-name">Conservação da quantidade de movimento</span><div class="big-formula">Σp<sub>antes</sub> = Σp<sub>depois</sub></div><p>Em uma dimensão: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.</p></div>
      <div class="example-box"><strong class="card-title">Quando os carrinhos ficam unidos</strong><p>Um carrinho de 2 kg a 4 m/s encontra outro de 2 kg parado e, depois do choque, os dois seguem juntos.</p><ol class="reason-steps"><li>Antes: p total = 2·4 + 2·0 = <strong>8 kg·m/s</strong>.</li><li>Depois: a massa conjunta é 4 kg.</li><li>4·v = 8 → <strong>v = 2 m/s</strong>.</li></ol></div>
      <div class="note-box"><strong>Por que podemos conservar p total?</strong><p>Porque, durante o intervalo muito curto da colisão, estamos considerando o conjunto dos dois carrinhos e supondo que o impulso externo seja desprezível. As forças internas trocam quantidade de movimento entre os carrinhos, mas não alteram o total do sistema.</p></div>
    </section>

    <section>
      <h3>6. Se p total se conserva, por que alguns choques perdem velocidade?</h3>
      <p>Conservar quantidade de movimento não significa conservar energia cinética. Em algumas colisões, parte da energia cinética é transformada em deformação, som, vibração e energia térmica.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Choque elástico ideal</strong><p>Conservam-se a quantidade de movimento total e a energia cinética total.</p></div><div class="example-box"><strong class="card-title">Choque inelástico</strong><p>A quantidade de movimento total do sistema isolado se conserva, mas a energia cinética total diminui.</p></div></div>
      <p>Quando os corpos seguem juntos depois do choque, temos o caso extremo chamado <strong>choque perfeitamente inelástico</strong>.</p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Separe as duas conservações</strong><p>Em uma colisão inelástica de um sistema isolado, qual afirmação é correta?</p><div class="choice-row"><button type="button" data-choice="a">A energia cinética total sempre se conserva</button><button type="button" data-choice="b">A quantidade de movimento total se conserva, mas a energia cinética total pode diminuir</button><button type="button" data-choice="c">A quantidade de movimento total sempre diminui</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Momento total e energia cinética não obedecem à mesma condição de conservação em choques inelásticos." data-wrong-text="Não trate conservação da quantidade de movimento e da energia cinética como a mesma coisa."></div></div>
    </section>

    <section>
      <h3>7. Alguns corpos rebatem mais que outros: como medir isso?</h3>
      <p>Depois da colisão, dois corpos podem se separar rapidamente, lentamente ou até permanecer juntos. O <strong>coeficiente de restituição</strong> mede essa capacidade de afastamento comparando velocidades relativas.</p>
      <div class="formula-box"><span class="formula-name">Coeficiente de restituição em colisão frontal</span><div class="big-formula">e = velocidade relativa de afastamento / velocidade relativa de aproximação</div><p>Em modelos usuais de colisões passivas, 0 ≤ e ≤ 1. <strong>e = 1</strong> representa o choque elástico ideal; <strong>e = 0</strong> representa o perfeitamente inelástico.</p></div>
      <div class="note-box"><strong>O que e não mede</strong><p>O coeficiente de restituição não é a “porcentagem de energia que sobrou”. Ele é definido a partir das <strong>velocidades relativas</strong> antes e depois da colisão.</p></div>
    </section>

    <section>
      <h3>8. Laboratório: altere massas, velocidades e restituição</h3>
      <div class="interactive-lab" id="collisionLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Colisão em linha reta</h4></div>
        <p>Adotamos a direita como sentido positivo. O carrinho A começa à esquerda e sua velocidade inicial é sempre maior que a de B; assim, os dois realmente se aproximam e ocorre colisão no modelo.</p>
        <div class="collision-lab-controls">
          <label>Massa A <strong><span id="m1Value">2</span> kg</strong><input id="m1Range" type="range" min="1" max="5" step="1" value="2"></label>
          <label>Velocidade A antes <strong><span id="u1Value">4</span> m/s</strong><input id="u1Range" type="range" min="2" max="8" step="1" value="4"></label>
          <label>Massa B <strong><span id="m2Value">1</span> kg</strong><input id="m2Range" type="range" min="1" max="5" step="1" value="1"></label>
          <label>Velocidade B antes <strong><span id="u2Value">0</span> m/s</strong><input id="u2Range" type="range" min="-4" max="1" step="1" value="0"></label>
          <label>Restituição <strong>e = <span id="eValue">1,0</span></strong><input id="eRange" type="range" min="0" max="1" step="0.1" value="1"></label>
        </div>
        <div class="collision-lab-scene"><div class="collision-lane before"><span>ANTES</span><div class="lab-collision-cart a" id="cartABefore">A →</div><div class="lab-collision-cart b" id="cartBBefore">B •</div></div><div class="collision-lane after"><span>DEPOIS</span><div class="lab-collision-cart a" id="cartAAfter">A</div><div class="lab-collision-cart b" id="cartBAfter">B</div></div></div>
        <div class="collision-results"><div><span>vA depois</span><strong id="v1Result">—</strong></div><div><span>vB depois</span><strong id="v2Result">—</strong></div><div><span>p total antes</span><strong id="pBeforeResult">—</strong></div><div><span>p total depois</span><strong id="pAfterResult">—</strong></div><div><span>Ec antes</span><strong id="kBeforeResult">—</strong></div><div><span>Ec depois</span><strong id="kAfterResult">—</strong></div></div>
        <div class="note-box" id="collisionConclusion"></div>
        <p>Primeiro mantenha massas e velocidades e altere apenas <strong>e</strong>. Observe o que permanece igual e o que muda. Depois altere uma massa ou velocidade e faça uma previsão antes de mover o controle.</p>
      </div>
    </section>

    <section>
      <h3>9. Uma bola ajuda a observar a restituição fora da tela</h3>
      <div class="experiment-box"><strong class="card-title">Compare o primeiro retorno</strong><p>Deixe a mesma bola cair da mesma altura sobre duas superfícies diferentes e compare a altura aproximada do primeiro retorno. A observação não determina sozinha um valor preciso de e, mas mostra que materiais e deformações influenciam o quanto a bola rebate.</p><p class="safety-note"><strong>Segurança:</strong> use bola leve, altura pequena e área livre de objetos frágeis.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Depois do crash test</span>
      <h3>10. Você consegue explicar a colisão antes de escolher uma fórmula?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Quantidade de movimento</strong><p>Um corpo de 2 kg move-se a 3 m/s. Qual o módulo de p?</p><div class="choice-row"><button type="button" data-choice="a">1,5 kg·m/s</button><button type="button" data-choice="b">6 kg·m/s</button><button type="button" data-choice="c">9 kg·m/s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="p = 2·3 = 6 kg·m/s." data-wrong-text="Multiplique massa por velocidade."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Impulso</strong><p>200 N atuam por 0,30 s. Qual o impulso?</p><div class="choice-row"><button type="button" data-choice="a">0,0015 N·s</button><button type="button" data-choice="b">200,3 N·s</button><button type="button" data-choice="c">60 N·s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="I = F·Δt = 60 N·s." data-wrong-text="Multiplique força pelo intervalo."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Segurança</strong><p>Para a mesma |Δp|, aumentar o tempo de parada tende a:</p><div class="choice-row"><button type="button" data-choice="a">reduzir a força média</button><button type="button" data-choice="b">aumentar a massa</button><button type="button" data-choice="c">eliminar a gravidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. F média ≈ |Δp|/Δt." data-wrong-text="Mantenha a mudança de quantidade de movimento e aumente o tempo."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Sistema</strong><p>Quando o impulso externo é desprezível durante a colisão:</p><div class="choice-row"><button type="button" data-choice="a">cada velocidade se conserva</button><button type="button" data-choice="b">a quantidade de movimento total se conserva</button><button type="button" data-choice="c">os corpos precisam grudar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A conservação vale para a quantidade de movimento total do sistema." data-wrong-text="Não confunda grandeza total com velocidade individual."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Inelástico</strong><p>Num choque inelástico isolado:</p><div class="choice-row"><button type="button" data-choice="a">p total desaparece</button><button type="button" data-choice="b">Ec total sempre aumenta</button><button type="button" data-choice="c">p total se conserva, mas Ec total pode diminuir</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Parte da energia cinética pode se transformar em outras formas." data-wrong-text="Separe as duas conservações."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. e = 1</strong><p>O que representa e = 1 no modelo ideal?</p><div class="choice-row"><button type="button" data-choice="a">choque elástico</button><button type="button" data-choice="b">corpos grudados</button><button type="button" data-choice="c">sem movimento antes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="e = 1 corresponde ao choque elástico ideal." data-wrong-text="Veja a definição do coeficiente de restituição."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. e = 0</strong><p>Em um choque perfeitamente inelástico:</p><div class="choice-row"><button type="button" data-choice="a">os corpos se afastam com máxima velocidade relativa</button><button type="button" data-choice="b">os corpos seguem juntos depois</button><button type="button" data-choice="c">a quantidade de movimento total vira zero sempre</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A velocidade relativa de afastamento é zero." data-wrong-text="Pense no significado de afastamento relativo nulo."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Antes da conta</strong><p>Qual pergunta deve vir antes de usar conservação da quantidade de movimento?</p><div class="choice-row"><button type="button" data-choice="a">Qual fórmula parece mais bonita?</button><button type="button" data-choice="b">Qual corpo é maior?</button><button type="button" data-choice="c">Qual sistema estou analisando e o impulso externo é desprezível no intervalo?</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. A condição física do sistema vem antes da equação." data-wrong-text="A conservação depende das condições do sistema."></div></div>
      <div class="challenge-box"><strong>Desafio MbB</strong><p>Explique para alguém por que cinto, airbag e zonas de deformação podem reduzir forças sobre o ocupante. Depois sustente sua explicação usando Δp, impulso e tempo de desaceleração.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo trabalha conservação da quantidade de movimento, impulso, choques mecânicos, coeficiente de restituição e colisões elásticas e inelásticas.</p></details>
  `;

  function initCollisionLab(root) {
    const m1 = $('#m1Range', root), u1 = $('#u1Range', root), m2 = $('#m2Range', root), u2 = $('#u2Range', root), e = $('#eRange', root);
    if (!m1 || !u1 || !m2 || !u2 || !e) return;
    const format = (value, digits = 1) => Number(value).toLocaleString('pt-BR',{minimumFractionDigits:digits,maximumFractionDigits:digits});
    const arrow = (value) => value > 0 ? '→' : value < 0 ? '←' : '•';
    const draw = () => {
      const M1=Number(m1.value), U1=Number(u1.value), M2=Number(m2.value), U2=Number(u2.value), E=Number(e.value);
      const den=M1+M2;
      const V1=(M1*U1+M2*U2-M2*E*(U1-U2))/den;
      const V2=(M1*U1+M2*U2+M1*E*(U1-U2))/den;
      const p0=M1*U1+M2*U2, p1=M1*V1+M2*V2;
      const k0=.5*M1*U1*U1+.5*M2*U2*U2, k1=.5*M1*V1*V1+.5*M2*V2*V2;
      $('#m1Value',root).textContent=M1; $('#u1Value',root).textContent=U1; $('#m2Value',root).textContent=M2; $('#u2Value',root).textContent=U2; $('#eValue',root).textContent=format(E);
      $('#v1Result',root).textContent=`${format(V1)} m/s ${arrow(V1)}`; $('#v2Result',root).textContent=`${format(V2)} m/s ${arrow(V2)}`;
      $('#pBeforeResult',root).textContent=`${format(p0)} kg·m/s`; $('#pAfterResult',root).textContent=`${format(p1)} kg·m/s`; $('#kBeforeResult',root).textContent=`${format(k0)} J`; $('#kAfterResult',root).textContent=`${format(k1)} J`;
      $('#cartABefore',root).textContent=`A ${arrow(U1)}`; $('#cartBBefore',root).textContent=`B ${arrow(U2)}`; $('#cartAAfter',root).textContent=`A ${arrow(V1)}`; $('#cartBAfter',root).textContent=`B ${arrow(V2)}`;
      const loss=k0>0?Math.max(0,(1-k1/k0)*100):0;
      const box=$('#collisionConclusion',root);
      if(box) box.innerHTML=E===1?'<strong>Choque elástico ideal:</strong> p total e Ec total permanecem no modelo.':E===0?`<strong>Perfeitamente inelástico:</strong> os carrinhos saem com a mesma velocidade; Ec diminui cerca de ${format(loss,0)}%.`:`<strong>Choque inelástico:</strong> p total permanece; Ec diminui cerca de ${format(loss,0)}%.`;
    };
    [m1,u1,m2,u2,e].forEach(input=>input.addEventListener('input',draw)); draw();
  }

  MBB.enableChapter?.('04 Batidas, impulsos e colisões', () => {
    MBB.showLesson({
      unit:'Energia e matéria',
      technical:'Quantidade de movimento • impulso • conservação • colisões',
      title:'Batidas, impulsos e colisões',
      objective:'<strong>Propósito:</strong> investigar um teste de impacto para compreender como quantidade de movimento, impulso, tempo de colisão e conservação explicam choques e dispositivos de segurança.',
      html:lessonHtml,
      init:initCollisionLab
    });
  });
})();