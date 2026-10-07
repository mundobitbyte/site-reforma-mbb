(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Na sala de informática da escola, o professor pede sua ajuda para organizar uma prateleira nova onde ficarão manuais, caixas de cabos e pequenos equipamentos. Antes de colocar tudo, vocês precisam decidir onde cada carga deve ficar.</strong>
        <p>A prateleira está presa à parede por suportes e parece imóvel. Mesmo assim, o peso puxa o conjunto para baixo, os suportes exercem forças sobre a prateleira e colocar uma caixa pesada perto da borda pode aumentar muito a tendência de giro.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Se a soma de todas as forças sobre a prateleira for zero, isso sozinho garante que ela não possa começar a girar?</p><div class="choice-row"><button type="button" data-choice="a">Sim, sempre</button><button type="button" data-choice="b">Não; também precisamos analisar a tendência de rotação</button><button type="button" data-choice="c">Só depende da massa total</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Um corpo pode ter força resultante zero e ainda apresentar torque resultante diferente de zero." data-wrong-text="Imagine duas forças opostas aplicadas em pontos diferentes de uma régua."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> descobrir por que uma prateleira pode estar sem movimento e ainda assim exigir duas condições de equilíbrio, e como posição das cargas, torque e centro de massa ajudam a decidir onde colocar os objetos.</p>
      </div>
    </section>

    <section>
      <h3>1. Para analisar a prateleira, primeiro precisamos distinguir números de setas</h3>
      <p>A prateleira tem <strong>1,0 m</strong> de comprimento e uma caixa pode ter <strong>5 kg</strong> de massa. Essas grandezas são descritas por valor e unidade: são <strong>grandezas escalares</strong>.</p>
      <p>Uma força precisa de mais informação. Dizer apenas “100 N” não indica para onde ela atua. Precisamos de <strong>módulo, direção e sentido</strong>; por isso força é uma <strong>grandeza vetorial</strong>.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Escalar</strong><p>massa = 5 kg; comprimento = 1,0 m; tempo = 3 s.</p></div><div class="example-box"><strong class="card-title">Vetorial</strong><p>força = 100 N verticalmente para baixo; força = 80 N horizontalmente para a direita.</p></div></div>
      <div class="note-box"><strong>Por que isso importa aqui?</strong><p>Em equilíbrio, não basta somar apenas os valores das forças. Forças em sentidos opostos podem se compensar, enquanto forças em direções diferentes precisam ser analisadas por componentes.</p></div>
    </section>

    <section>
      <h3>2. A prateleira não sobe nem desce: as forças de translação se equilibram</h3>
      <p>Considere que prateleira e objetos exercem juntos um peso de <strong>300 N para baixo</strong>. Se o conjunto permanece parado, as componentes verticais das forças exercidas pelos suportes e fixações precisam totalizar <strong>300 N para cima</strong>.</p>
      <p>As forças não desapareceram. Elas continuam atuando, mas sua <strong>soma vetorial</strong> é zero.</p>
      <div class="formula-box"><span class="formula-name">Equilíbrio de translação</span><div class="big-formula">ΣF<sub>x</sub> = 0 &nbsp;&nbsp; e &nbsp;&nbsp; ΣF<sub>y</sub> = 0</div><p>Com força resultante zero, a aceleração de translação é zero.</p></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Leia a situação</strong><p>Duas forças horizontais de 50 N atuam em sentidos opostos sobre uma caixa parada. Qual é a resultante horizontal?</p><div class="choice-row"><button type="button" data-choice="a">100 N</button><button type="button" data-choice="b">50 N</button><button type="button" data-choice="c">0 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Mesmo módulo e sentidos opostos produzem resultante zero nessa direção." data-wrong-text="Considere os sentidos das duas forças, não apenas seus módulos."></div></div>
    </section>

    <section>
      <h3>3. Você coloca uma caixa pesada perto da borda — e percebe que distância também importa</h3>
      <p>Imagine uma caixa cujo peso seja <strong>120 N</strong>. Se ela ficar perto da parede, a tendência de girar a prateleira é menor. Se você levar a mesma caixa para a borda externa, a força continua sendo 120 N, mas sua distância até a região de apoio aumenta.</p>
      <p>Essa é a mesma razão física pela qual uma porta é mais fácil de girar quando empurramos perto da maçaneta do que junto à dobradiça.</p>
      <div class="equation-walk"><div><span>1</span><p>A força aplicada tem módulo <strong>F</strong>.</p></div><div><span>2</span><p>Sua linha de ação fica a uma distância perpendicular <strong>d<sub>⊥</sub></strong> do eixo escolhido.</p></div><div><span>3</span><p>Força e distância determinam a tendência de rotação.</p></div></div>
      <div class="formula-box"><span class="formula-name">Momento de uma força ou torque</span><div class="big-formula">τ = F · d<sub>⊥</sub></div><p>A unidade é N·m. Apesar de N·m também aparecer nas dimensões do joule, <strong>torque não é energia</strong>.</p></div>
      <div class="example-box"><strong class="card-title">A mesma caixa em duas posições</strong><p>Para um peso de 120 N:</p><ol class="reason-steps"><li>a 0,25 m do apoio: τ = 120·0,25 = <strong>30 N·m</strong>;</li><li>a 0,75 m do apoio: τ = 120·0,75 = <strong>90 N·m</strong>.</li></ol><p>A força permaneceu igual, mas a tendência de giro triplicou porque a distância triplicou.</p></div>
      <div class="note-box"><strong>Por que aproximar a carga da parede ajuda?</strong><p>Porque reduzir a distância perpendicular ao apoio reduz o torque produzido pelo peso da carga. Isso diminui a tendência de rotação no modelo, embora a segurança real também dependa dos suportes, fixações, parede e limites especificados pelo fabricante.</p></div>
    </section>

    <section>
      <h3>4. Agora aparece a segunda condição: não basta impedir que a prateleira se desloque</h3>
      <p>Uma prateleira pode ter força resultante zero e, ainda assim, receber forças aplicadas de maneira que produzam rotação. Para permanecer em equilíbrio estático no plano, os torques horários e anti-horários também precisam se compensar.</p>
      <div class="formula-box"><span class="formula-name">Equilíbrio de rotação</span><div class="big-formula">Στ = 0</div><p>Podemos adotar anti-horário como positivo e horário como negativo. O essencial é manter a mesma convenção durante toda a análise.</p></div>
      <div class="note-box"><strong>Resposta à pergunta do início</strong><p><strong>ΣF = 0 não basta.</strong> Para um corpo rígido permanecer em equilíbrio estático no plano, precisamos de <strong>ΣF = 0</strong> para impedir aceleração de translação e de <strong>Στ = 0</strong> para impedir aceleração angular.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Calcule o torque</strong><p>Uma força de 200 N atua perpendicularmente a 3 m do eixo. Qual é o módulo do torque?</p><div class="choice-row"><button type="button" data-choice="a">600 N·m</button><button type="button" data-choice="b">203 N·m</button><button type="button" data-choice="c">66,7 N·m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="τ = 200·3 = 600 N·m." data-wrong-text="Multiplique a força pela distância perpendicular ao eixo."></div></div>
    </section>

    <section>
      <h3>5. Os objetos não têm a mesma massa: onde fica o centro de massa do conjunto?</h3>
      <p>Se objetos iguais fossem distribuídos simetricamente, o centro de massa ficaria próximo do centro geométrico do conjunto. Quando um lado recebe objetos mais pesados, o centro de massa se desloca na direção deles.</p>
      <p>O <strong>centro de massa</strong> é um ponto que representa como a massa está distribuída no corpo ou sistema.</p>
      <div class="formula-box"><span class="formula-name">Centro de massa ao longo de um eixo</span><div class="big-formula">x<sub>cm</sub> = Σ(m·x) / Σm</div><p>É uma média das posições ponderada pelas massas: objetos mais massivos influenciam mais o resultado.</p></div>
      <div class="example-box"><strong class="card-title">Dois grupos de objetos</strong><p>2 kg estão na posição x = 0 m e 1 kg está em x = 3 m.</p><ol class="reason-steps"><li>x<sub>cm</sub> = (2·0 + 1·3)/(2+1).</li><li>x<sub>cm</sub> = 3/3.</li><li><strong>x<sub>cm</sub> = 1 m.</strong></li></ol><p>O centro de massa fica mais perto do grupo de maior massa.</p></div>
    </section>

    <section>
      <h3>6. Ao lado da prateleira há um armário alto: por que ele pode tombar?</h3>
      <p>O centro de massa também ajuda a analisar estabilidade. Enquanto a projeção vertical do centro de massa permanece dentro da <strong>base de apoio</strong>, o peso não produz um torque capaz de fazê-lo tombar para fora da base.</p>
      <p>Quando essa projeção ultrapassa uma borda da base, o peso passa a favorecer o tombamento em torno dessa borda. Por isso aumentar a base ou baixar o centro de massa tende a aumentar a estabilidade.</p>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Aplicação</strong><p>Qual mudança tende a aumentar a estabilidade de um objeto alto?</p><div class="choice-row"><button type="button" data-choice="a">Elevar ainda mais o centro de massa</button><button type="button" data-choice="b">Aumentar a base de apoio e/ou baixar o centro de massa</button><button type="button" data-choice="c">Eliminar a massa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Isso aumenta a margem antes que a projeção do centro de massa ultrapasse a base." data-wrong-text="Pense em quanto o corpo pode inclinar antes de a projeção sair da base."></div></div>
      <div class="note-box"><strong>Por que móveis altos costumam ser fixados à parede?</strong><p>Porque impactos, puxões, gavetas abertas e distribuição desigual de cargas podem deslocar a projeção do centro de massa e produzir torque de tombamento. A fixação adequada ajuda a impedir esse movimento.</p></div>
    </section>

    <section>
      <h3>7. A gangorra permite testar a mesma ideia com torques em sentidos opostos</h3>
      <div class="interactive-lab" id="torqueLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Equilibre força e distância</h4></div>
        <p>A gangorra é um modelo simples para comparar torques em torno de um apoio. Antes de mover um controle, tente prever para qual lado ela tenderá a girar.</p>
        <div class="torque-lab-controls"><label>Força à esquerda <strong><span id="leftForceValue">300</span> N</strong><input id="leftForceRange" type="range" min="100" max="800" step="50" value="300"></label><label>Distância à esquerda <strong><span id="leftDistanceValue">2,0</span> m</strong><input id="leftDistanceRange" type="range" min="0.5" max="3" step="0.5" value="2"></label><label>Força à direita <strong><span id="rightForceValue">600</span> N</strong><input id="rightForceRange" type="range" min="100" max="800" step="50" value="600"></label><label>Distância à direita <strong><span id="rightDistanceValue">1,0</span> m</strong><input id="rightDistanceRange" type="range" min="0.5" max="3" step="0.5" value="1"></label></div>
        <div class="torque-lab-scene" aria-hidden="true"><div id="torqueBeam" class="torque-beam"><span class="torque-load left">↓</span><span class="torque-load right">↓</span></div><div class="torque-pivot">▲</div></div>
        <div class="torque-results"><div><span>Torque anti-horário</span><strong id="leftTorqueValue">600 N·m</strong></div><div><span>Torque horário</span><strong id="rightTorqueValue">600 N·m</strong></div><div><span>Situação</span><strong id="torqueStatus">Equilíbrio rotacional</strong></div></div><p id="torqueConclusion">Os torques têm mesmo módulo e sentidos opostos.</p>
      </div>
    </section>

    <section>
      <h3>8. Experimente com régua, lápis e moedas</h3>
      <div class="experiment-box"><strong class="card-title">Observe o equilíbrio mudando</strong><ol class="reason-steps"><li>Apoie uma régua horizontalmente sobre um lápis colocado perpendicularmente a ela.</li><li>Encontre aproximadamente o ponto de equilíbrio da régua vazia.</li><li>Coloque uma moeda perto de uma extremidade.</li><li>Na outra extremidade, mova outra moeda até recuperar o equilíbrio.</li><li>Compare as distâncias ao apoio e explique por que posições diferentes podem equilibrar forças semelhantes.</li></ol><p class="safety-note"><strong>Segurança:</strong> use apenas objetos leves sobre uma mesa; não use vidro, lâminas ou objetos pesados.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Antes de terminar a organização</span>
      <h3>9. Você consegue justificar onde colocar as cargas?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Vetor</strong><p>Qual grandeza precisa de módulo, direção e sentido?</p><div class="choice-row"><button type="button" data-choice="a">Massa</button><button type="button" data-choice="b">Força</button><button type="button" data-choice="c">Temperatura</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Força é vetorial." data-wrong-text="Procure a grandeza representada por seta."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Translação</strong><p>70 N para a direita e 70 N para a esquerda produzem resultante:</p><div class="choice-row"><button type="button" data-choice="a">140 N</button><button type="button" data-choice="b">70 N</button><button type="button" data-choice="c">0 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="As forças se cancelam nessa direção." data-wrong-text="Considere o sentido."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Torque</strong><p>40 N atuam perpendicularmente a 0,5 m do eixo. Qual o torque?</p><div class="choice-row"><button type="button" data-choice="a">20 N·m</button><button type="button" data-choice="b">40,5 N·m</button><button type="button" data-choice="c">80 N·m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="τ = 40·0,5 = 20 N·m." data-wrong-text="Use F·d⊥."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Equilíbrio completo</strong><p>Para equilíbrio estático no plano:</p><div class="choice-row"><button type="button" data-choice="a">basta ΣF=0</button><button type="button" data-choice="b">precisamos ΣF=0 e Στ=0</button><button type="button" data-choice="c">basta Στ=0</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="É preciso impedir translação e rotação." data-wrong-text="Analise os dois tipos de movimento."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Gangorra</strong><p>300 N a 2 m equilibram 600 N a qual distância?</p><div class="choice-row"><button type="button" data-choice="a">0,5 m</button><button type="button" data-choice="b">2 m</button><button type="button" data-choice="c">1 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="300·2 = 600·1 = 600 N·m." data-wrong-text="Iguale os torques."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Centro de massa</strong><p>Entre duas massas diferentes, o centro de massa tende a ficar:</p><div class="choice-row"><button type="button" data-choice="a">mais próximo da massa maior</button><button type="button" data-choice="b">sempre no meio geométrico</button><button type="button" data-choice="c">sempre fora do sistema</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A média é ponderada pela massa." data-wrong-text="A maior massa influencia mais."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Estabilidade</strong><p>Um corpo tende a tombar quando:</p><div class="choice-row"><button type="button" data-choice="a">o peso zera</button><button type="button" data-choice="b">a projeção do centro de massa ultrapassa a base</button><button type="button" data-choice="c">o centro de massa abaixa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Fora da base, o peso produz torque de tombamento." data-wrong-text="Observe a projeção vertical do centro de massa."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Ferramenta</strong><p>Por que um cabo mais longo facilita girar uma porca com a mesma força?</p><div class="choice-row"><button type="button" data-choice="a">reduz a massa da porca</button><button type="button" data-choice="b">elimina o peso</button><button type="button" data-choice="c">aumenta o braço de alavanca e o torque</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Maior distância perpendicular produz maior torque." data-wrong-text="Compare τ = F·d⊥."></div></div>
      <div class="note-box"><strong>Resposta final para a prateleira</strong><p>Colocar cargas pesadas mais perto da parede tende a reduzir o torque que elas produzem. Mas uma prateleira real só pode ser considerada segura quando também conhecemos capacidade dos suportes, tipo e resistência da parede, fixadores, distribuição das cargas e limites especificados pelo fabricante.</p></div>
      <div class="challenge-box"><strong>Desafio MbB — volte à prateleira</strong><p>Um conjunto de livros exerce peso de 120 N a 0,75 m do apoio. Calcule o torque e explique, em palavras, por que aproximar os livros da parede reduz a tendência de giro. Depois diga quais outras informações reais seriam necessárias para decidir se a prateleira é segura.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo trabalha os objetos previstos de <strong>Estática</strong>: equilíbrio dos sólidos, centro de massa, momento ou torque e grandezas escalares e vetoriais.</p></details>
  `;

  function initTorqueLab(root){
    const leftForce=$('#leftForceRange',root),leftDistance=$('#leftDistanceRange',root),rightForce=$('#rightForceRange',root),rightDistance=$('#rightDistanceRange',root),beam=$('#torqueBeam',root);
    if(!leftForce||!leftDistance||!rightForce||!rightDistance||!beam)return;
    const format=(value,digits=0)=>Number(value).toLocaleString('pt-BR',{minimumFractionDigits:digits,maximumFractionDigits:digits});
    const draw=()=>{const fL=Number(leftForce.value),dL=Number(leftDistance.value),fR=Number(rightForce.value),dR=Number(rightDistance.value),tL=fL*dL,tR=fR*dR,diff=tL-tR; $('#leftForceValue',root).textContent=format(fL); $('#leftDistanceValue',root).textContent=format(dL,1); $('#rightForceValue',root).textContent=format(fR); $('#rightDistanceValue',root).textContent=format(dR,1); $('#leftTorqueValue',root).textContent=`${format(tL)} N·m`; $('#rightTorqueValue',root).textContent=`${format(tR)} N·m`; beam.style.transform=`rotate(${-Math.max(-8,Math.min(8,diff/80))}deg)`; const status=$('#torqueStatus',root),conclusion=$('#torqueConclusion',root); if(Math.abs(diff)<=0.5){status.textContent='Equilíbrio rotacional'; conclusion.textContent='Os torques têm mesmo módulo e sentidos opostos. A soma dos torques é zero.';}else if(diff>0){status.textContent='Lado esquerdo domina'; conclusion.textContent=`O torque anti-horário é ${format(Math.abs(diff))} N·m maior.`;}else{status.textContent='Lado direito domina'; conclusion.textContent=`O torque horário é ${format(Math.abs(diff))} N·m maior.`;}};
    [leftForce,leftDistance,rightForce,rightDistance].forEach(input=>input.addEventListener('input',draw)); draw();
  }

  MBB.enableChapter?.('06 Como as coisas ficam em equilíbrio',()=>{MBB.showLesson({unit:'Equilíbrio e fluidos',technical:'Estática • grandezas escalares e vetoriais • equilíbrio • torque • centro de massa',title:'Como as coisas ficam em equilíbrio',objective:'<strong>Propósito:</strong> investigar a organização de uma prateleira para compreender como forças, torques, centro de massa e base de apoio determinam equilíbrio e estabilidade.',html:lessonHtml,init:initTorqueLab});});
})();