(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Em um passeio ao parque de diversões, você entra numa montanha-russa. A barra de segurança trava, o trem sai devagar da estação e engata numa corrente que começa a puxá-lo para a primeira subida.</strong>
        <p>A subida é lenta. No ponto mais alto, cerca de 20 m acima da estação, o trem está quase parado. Então a corrente se solta e começa a descida: em poucos segundos, a velocidade aumenta muito. Perto do fim da volta, os freios reduzem novamente o movimento até o trem parar na estação.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Se o trem chega ao topo quase sem velocidade, de onde vem a velocidade que ele ganha na descida?</p><div class="choice-row"><button type="button" data-choice="a">O movimento aparece do nada</button><button type="button" data-choice="b">A energia associada à altura pode se transformar em energia de movimento</button><button type="button" data-choice="c">A massa do trem diminui na descida</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A subida mudou a energia do sistema, e essa energia pode mudar de forma durante a descida." data-wrong-text="Observe o que o motor fez antes: ele levou o trem de uma região mais baixa para outra mais alta."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> acompanhar a mesma volta e explicar de onde vem a energia, como ela muda de forma, por que parte dela vira aquecimento e o que a potência do motor informa.</p>
      </div>
    </section>

    <section>
      <h3>1. A corrente puxa o trem para cima: força e deslocamento aparecem juntos</h3>
      <p>Durante a primeira subida, o motor movimenta a corrente, e a corrente exerce força sobre o trem enquanto ele se desloca pela pista. Na Física, uma força que participa do deslocamento pode realizar <strong>trabalho mecânico</strong> e transferir energia.</p>
      <p>Por isso “fazer força” e “realizar trabalho mecânico” não significam exatamente a mesma coisa. Se você empurra uma parede e ela não se desloca, pode se cansar, mas o trabalho mecânico da sua força <strong>sobre a parede</strong> é zero.</p>

      <div class="equation-walk"><div><span>1</span><p>No nosso modelo simplificado, a corrente exerce uma força média de <strong>5.000 N</strong> na direção do movimento.</p></div><div><span>2</span><p>Durante esse trecho, o trem percorre <strong>40 m</strong> ao longo da pista.</p></div><div><span>3</span><p>Força e deslocamento têm a mesma direção.</p></div></div>
      <div class="formula-box"><span class="formula-name">Trabalho no caso de força e deslocamento na mesma direção</span><div class="big-formula">W = F · d</div><p>No exemplo: 5.000 × 40 = <strong>200.000 J</strong>. O joule (J) é a unidade de energia e de trabalho.</p></div>
      <div class="note-box"><strong>E se a força não apontar na mesma direção do movimento?</strong><p>Em situações gerais, o ângulo entre força e deslocamento precisa ser considerado. Quando ambos têm a mesma direção, usamos W = F·d. Se houver ângulo entre eles, é a componente da força na direção do deslocamento que contribui para o trabalho.</p></div>
    </section>

    <section>
      <h3>2. No topo o trem está quase parado. Para onde foram os 200.000 J?</h3>
      <p>O trabalho realizado pela corrente não desapareceu. No modelo idealizado, ele elevou o trem e aumentou a energia associada à sua posição no campo gravitacional. Essa forma é a <strong>energia potencial gravitacional</strong>.</p>
      <p>Considere um trem de <strong>1.000 kg</strong>, a <strong>20 m</strong> acima do nível da estação, usando g ≈ 10 m/s².</p>

      <div class="formula-box"><span class="formula-name">Energia associada à altura</span><div class="big-formula">E<sub>pg</sub> = m · g · h</div><p>E<sub>pg</sub> = 1.000 · 10 · 20 = <strong>200.000 J</strong>.</p></div>

      <div class="note-box"><strong>Resposta direta: onde ficou o trabalho do motor?</strong><p>Neste modelo sem perdas, os <strong>200.000 J</strong> transferidos pelo trabalho da corrente aparecem como aproximadamente <strong>200.000 J de energia potencial gravitacional</strong> no topo.</p></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Faça uma previsão</strong><p>Com a mesma massa e o mesmo g, se a altura dobrar, o que acontece com a energia potencial gravitacional?</p><div class="choice-row"><button type="button" data-choice="a">Fica pela metade</button><button type="button" data-choice="b">Dobra</button><button type="button" data-choice="c">Não muda</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Como h aparece diretamente em m·g·h, dobrar a altura dobra Epg." data-wrong-text="Mantenha m e g constantes e observe apenas o papel da altura."></div></div>
    </section>

    <section>
      <h3>3. A corrente se solta, a altura diminui e a velocidade aumenta</h3>
      <p>Na descida, o trem perde altura e ganha velocidade. A forma de energia associada ao movimento é a <strong>energia cinética</strong>.</p>
      <p>Para o mesmo trem de 1.000 kg, imagine que no vale a velocidade chegue a aproximadamente <strong>20 m/s</strong>.</p>

      <div class="formula-box"><span class="formula-name">Energia associada ao movimento</span><div class="big-formula">E<sub>c</sub> = m · v² / 2</div><p>E<sub>c</sub> = 1.000 · 20² / 2 = <strong>200.000 J</strong>.</p></div>

      <div class="note-box"><strong>Então de onde vieram os 20 m/s?</strong><p>No modelo ideal, a energia potencial gravitacional do topo foi se transformando em energia cinética. Como havia cerca de <strong>200.000 J</strong> disponíveis e o trem tem 1.000 kg, esse valor corresponde a uma velocidade de aproximadamente <strong>20 m/s</strong> no ponto mais baixo.</p></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Teste uma consequência da fórmula</strong><p>Se a velocidade de um mesmo corpo dobra, sua energia cinética fica:</p><div class="choice-row"><button type="button" data-choice="a">metade</button><button type="button" data-choice="b">duas vezes maior</button><button type="button" data-choice="c">quatro vezes maior</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Como a velocidade está ao quadrado, (2v)² = 4v²." data-wrong-text="Compare v² com (2v)²."></div></div>
    </section>

    <section>
      <h3>4. Topo, descida e vale: a energia mudou de forma</h3>
      <p>No topo, o trem tinha muita energia potencial gravitacional e pouca energia cinética. Durante a descida, a altura diminui enquanto a velocidade aumenta. Em um modelo ideal, uma forma se transforma na outra sem alterar o total da energia mecânica.</p>
      <div class="visual-box"><strong class="card-title">Leia a pista como um mapa de energia</strong><svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Montanha-russa com um ponto alto, um vale e outro ponto alto, mostrando transformação entre energia potencial e cinética."><path d="M60 80 Q180 250 330 220 Q500 190 700 90" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="85" cy="115" r="14" class="motion-point"/><text x="55" y="55">alto: mais Epg</text><circle cx="330" cy="220" r="14" class="motion-point"/><text x="270" y="270">baixo: mais Ec</text><circle cx="675" cy="110" r="14" class="motion-point"/><text x="580" y="55">subida: Ec → Epg</text></svg><p class="visual-caption">No modelo ideal, a energia mecânica permanece no sistema enquanto muda entre formas.</p></div>
      <div class="formula-box"><span class="formula-name">Energia mecânica</span><div class="big-formula">E<sub>m</sub> = E<sub>c</sub> + E<sub>p</sub></div><p>Sem trabalho de forças dissipativas, a energia mecânica permanece constante. Isso não significa que E<sub>c</sub> e E<sub>p</sub> ficam constantes separadamente.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a leitura física</strong><p>Num trecho ideal de descida, sem atrito, o que esperamos?</p><div class="choice-row"><button type="button" data-choice="a">Epg diminui enquanto Ec aumenta</button><button type="button" data-choice="b">As duas desaparecem</button><button type="button" data-choice="c">Ec diminui porque a velocidade aumenta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A energia associada à altura se transforma em energia associada ao movimento." data-wrong-text="Compare o que acontece com a altura e com a velocidade durante a descida."></div></div>
    </section>

    <section>
      <h3>5. A montanha-russa real perde velocidade — para onde vai essa energia?</h3>
      <p>Uma montanha-russa real encontra resistência do ar, atrito nos rolamentos, pequenas deformações e outros efeitos. Por isso ela não consegue retornar indefinidamente à mesma altura apenas convertendo energia potencial e cinética.</p>
      <p>Nessas interações, parte da energia mecânica é transformada e transferida para outras formas, especialmente <strong>energia térmica</strong>. Perto da estação, os freios fazem exatamente isso de maneira controlada: reduzem a energia cinética e aquecem componentes do sistema e o ambiente.</p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>A pergunta da freada</strong><p>Quando o trem para na estação, a energia cinética foi destruída?</p><div class="choice-row"><button type="button" data-choice="a">Sim, porque a velocidade chegou a zero</button><button type="button" data-choice="b">Não. Ela foi transformada e transferida para outras formas, principalmente térmicas</button><button type="button" data-choice="c">Sim, porque os freios eliminam energia</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A energia cinética do trem diminui, mas a energia não desaparece: ela é transformada e transferida." data-wrong-text="Não confunda diminuição da energia mecânica do trem com destruição de energia."></div></div>

      <div class="note-box"><strong>Conservação de energia</strong><p>Conservar energia não significa que a energia mecânica de um corpo seja sempre constante. Significa que, ao definir adequadamente o sistema e acompanhar as transformações e transferências, a energia total é conservada.</p></div>
    </section>

    <section>
      <h3>6. Em outra atração, um carrinho é lançado por um mecanismo elástico</h3>
      <p>Nem toda atração precisa começar com uma grande altura. Em alguns mecanismos, um elemento elástico é comprimido ou esticado antes da partida. A deformação armazena <strong>energia potencial elástica</strong>, que pode depois se transformar em energia cinética do carrinho.</p>
      <div class="formula-box"><span class="formula-name">Energia potencial elástica de uma mola ideal</span><div class="big-formula">E<sub>pe</sub> = k · x² / 2</div><p><strong>k</strong> representa a rigidez da mola e <strong>x</strong> sua deformação. Como x está ao quadrado, dobrar a deformação quadruplica a energia armazenada.</p></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de calcular</strong><p>Na mesma mola, se a deformação passar de x para 2x, a energia elástica:</p><div class="choice-row"><button type="button" data-choice="a">dobra</button><button type="button" data-choice="b">quadruplica</button><button type="button" data-choice="c">não muda</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. (2x)² = 4x²." data-wrong-text="Compare x² com (2x)²."></div></div>
    </section>

    <section>
      <h3>7. Dois motores elevam o mesmo trem à mesma altura, mas em tempos diferentes</h3>
      <p>Considere novamente o trem de 1.000 kg elevado 20 m, com ganho aproximado de 200.000 J de energia potencial gravitacional. Um motor realiza essa transferência em <strong>20 s</strong>; outro levaria <strong>40 s</strong>.</p>
      <p>Os dois podem transferir a mesma quantidade de energia, mas não com a mesma rapidez. A grandeza que mede a rapidez com que o trabalho é realizado ou a energia é transferida é a <strong>potência</strong>.</p>
      <div class="formula-box"><span class="formula-name">Potência média</span><div class="big-formula">P = W / Δt</div><p>Para 200.000 J em 20 s, P = <strong>10.000 W</strong>. Em 40 s, a potência média seria <strong>5.000 W</strong>. A mesma transferência em menos tempo exige maior potência média.</p></div>

      <div class="interactive-lab" id="powerLab"><div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Compare massa, altura, tempo e potência na subida</h4></div><div class="lab-controls"><label>Massa <strong><span id="massEnergyValue">1000</span> kg</strong><input id="massEnergyRange" type="range" min="500" max="1500" step="100" value="1000"></label><label>Altura <strong><span id="heightEnergyValue">20</span> m</strong><input id="heightEnergyRange" type="range" min="5" max="30" step="1" value="20"></label><label>Tempo <strong><span id="timeEnergyValue">20</span> s</strong><input id="timeEnergyRange" type="range" min="10" max="60" step="5" value="20"></label></div><div class="power-lab-results"><div><span>Ganho de Epg</span><strong id="energyGainValue">200.000 J</strong></div><div><span>Trabalho aproximado</span><strong id="workValue">200.000 J</strong></div><div><span>Potência média</span><strong id="powerValue">10.000 W</strong></div></div><p>Mantenha massa e altura e altere apenas o tempo. Antes de mover o controle, preveja: diminuir o tempo aumenta ou diminui a potência média?</p></div>
    </section>

    <section>
      <h3>8. A mesma ideia pode ser medida numa escada</h3>
      <p>Você não precisa de uma montanha-russa para observar potência. Ao subir uma escada, seu corpo também aumenta a energia potencial gravitacional.</p>
      <div class="experiment-box"><strong class="card-title">Estime sua potência média</strong><ol class="reason-steps"><li>Escolha uma escada segura e meça ou estime a altura vertical total.</li><li>Use sua massa em kg.</li><li>Cronometre uma subida normal, sem correr.</li><li>Calcule aproximadamente Epg = m·g·h.</li><li>Divida essa energia pelo tempo da subida.</li></ol><p class="safety-note"><strong>Segurança:</strong> use corrimão quando necessário, não corra e não transforme a atividade em competição.</p></div>
    </section>

    <section>
      <h3>9. Resposta à pergunta do início: por que o trem acelera depois de chegar quase parado ao topo?</h3>
      <div class="note-box"><strong>A resposta completa</strong><p>O motor realizou trabalho durante a subida e transferiu energia ao sistema. No nosso modelo, o trem chegou ao topo com cerca de <strong>200.000 J de energia potencial gravitacional</strong>. Durante a descida, essa energia foi sendo convertida em energia cinética. No vale idealizado, os mesmos 200.000 J correspondem a aproximadamente <strong>20 m/s</strong> para um trem de 1.000 kg. Na atração real, parte da energia mecânica é continuamente transformada em outras formas, e os freios completam essa transformação ao parar o trem.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Depois da volta</span>
      <h3>10. Você consegue contar a história da energia da atração?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Trabalho</strong><p>Você empurra uma parede e ela não se desloca. O trabalho mecânico da sua força sobre a parede é:</p><div class="choice-row"><button type="button" data-choice="a">máximo</button><button type="button" data-choice="b">zero</button><button type="button" data-choice="c">igual ao seu peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Sem deslocamento da parede, esse trabalho é zero." data-wrong-text="Trabalho mecânico exige relação entre força e deslocamento."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Trabalho calculado</strong><p>Uma força de 30 N desloca um corpo 5 m na mesma direção. Qual trabalho?</p><div class="choice-row"><button type="button" data-choice="a">6 J</button><button type="button" data-choice="b">35 J</button><button type="button" data-choice="c">150 J</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="W = 30·5 = 150 J." data-wrong-text="Multiplique força por deslocamento neste caso simples."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. No topo</strong><p>Com mesma massa, aumentar a altura aumenta principalmente:</p><div class="choice-row"><button type="button" data-choice="a">energia potencial gravitacional</button><button type="button" data-choice="b">a massa</button><button type="button" data-choice="c">o tempo universal</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A altura entra diretamente em m·g·h." data-wrong-text="Pense no que mudou entre o vale e o topo."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Velocidade</strong><p>Se a velocidade dobra, mantendo a massa, a energia cinética fica:</p><div class="choice-row"><button type="button" data-choice="a">duas vezes maior</button><button type="button" data-choice="b">quatro vezes maior</button><button type="button" data-choice="c">igual</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A velocidade está ao quadrado." data-wrong-text="Compare v² com (2v)²."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Descida ideal</strong><p>Durante uma descida sem atrito:</p><div class="choice-row"><button type="button" data-choice="a">a energia some</button><button type="button" data-choice="b">Ec diminui</button><button type="button" data-choice="c">Epg diminui e Ec aumenta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Uma forma se transforma na outra." data-wrong-text="Observe altura e velocidade."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Atrito e freios</strong><p>Quando parte da energia mecânica vira energia térmica, isso significa que a energia total:</p><div class="choice-row"><button type="button" data-choice="a">foi transformada e transferida, não destruída</button><button type="button" data-choice="b">desapareceu</button><button type="button" data-choice="c">virou massa obrigatoriamente</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Conservação envolve acompanhar transformações e transferências." data-wrong-text="Não confunda energia mecânica com energia total."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Mola</strong><p>Dobrar a deformação de uma mesma mola ideal faz a energia elástica:</p><div class="choice-row"><button type="button" data-choice="a">dobrar</button><button type="button" data-choice="b">quadruplicar</button><button type="button" data-choice="c">zerar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="x aparece ao quadrado." data-wrong-text="Compare x² com (2x)²."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Potência</strong><p>Dois motores realizam o mesmo trabalho; um leva metade do tempo. Ele desenvolve potência média:</p><div class="choice-row"><button type="button" data-choice="a">metade</button><button type="button" data-choice="b">igual</button><button type="button" data-choice="c">duas vezes maior</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="P = W/Δt: reduzir o tempo à metade dobra a potência média." data-wrong-text="Mantenha W e compare o denominador."></div></div>
      <div class="challenge-box"><strong>Desafio MbB</strong><p>Escolha três pontos da montanha-russa — topo, vale e subida seguinte — e explique, em palavras, como Epg e Ec se transformam. Depois diga para onde parte da energia mecânica vai quando incluímos atrito, resistência do ar e frenagem.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo desenvolve trabalho mecânico, potência, energia cinética, energia potencial gravitacional e elástica e conservação da energia.</p></details>
  `;

  function initPowerLab(root) {
    const mass = $('#massEnergyRange', root), height = $('#heightEnergyRange', root), time = $('#timeEnergyRange', root);
    if (!mass || !height || !time) return;
    const draw = () => {
      const m = Number(mass.value), h = Number(height.value), t = Number(time.value);
      const e = m * 10 * h, p = e / t;
      $('#massEnergyValue', root).textContent = m;
      $('#heightEnergyValue', root).textContent = h;
      $('#timeEnergyValue', root).textContent = t;
      $('#energyGainValue', root).textContent = `${e.toLocaleString('pt-BR')} J`;
      $('#workValue', root).textContent = `${e.toLocaleString('pt-BR')} J`;
      $('#powerValue', root).textContent = `${p.toLocaleString('pt-BR',{maximumFractionDigits:1})} W`;
    };
    mass.addEventListener('input', draw); height.addEventListener('input', draw); time.addEventListener('input', draw); draw();
  }

  MBB.enableChapter?.('03 Energia: de onde vem e para onde vai?', () => {
    MBB.showLesson({
      unit: 'Energia e matéria',
      technical: 'Trabalho • potência • energia cinética • energia potencial • conservação',
      title: 'Energia: de onde vem e para onde vai?',
      objective: '<strong>Propósito:</strong> acompanhar uma volta de montanha-russa para compreender como trabalho e energia se transferem e se transformam, e por que o tempo leva ao conceito de potência.',
      html: lessonHtml,
      init: initPowerLab
    });
  });
})();