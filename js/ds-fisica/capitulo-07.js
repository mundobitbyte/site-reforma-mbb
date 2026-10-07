(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você chega de carro com sua família a um terminal de balsa para atravessar um rio. Enquanto espera o embarque, vê a enorme embarcação de aço recebendo carros, motos e passageiros sem afundar.</strong>
        <p>A pergunta surge naturalmente: <strong>se um pedaço maciço de aço afunda na água, por que uma balsa feita principalmente de aço consegue flutuar carregando tanta massa?</strong> Durante o embarque, outras pistas aparecem: os pneus pressionam a rampa, o casco fica parcialmente submerso e a própria rampa é movimentada por um sistema hidráulico.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>O que mais provavelmente explica a flutuação da balsa?</p><div class="choice-row"><button type="button" data-choice="a">O aço deixa de pesar quando entra na água</button><button type="button" data-choice="b">A forma do casco permite deslocar grande volume de água até que o empuxo equilibre o peso</button><button type="button" data-choice="c">O motor produz uma força vertical que sustenta a embarcação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O motor não precisa sustentar a balsa para cima; a água exerce o empuxo necessário quando o casco desloca volume suficiente." data-wrong-text="Observe que a balsa continua flutuando mesmo parada e com o motor sem produzir sustentação vertical."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> explicar por que a balsa flutua e usar a mesma travessia para compreender densidade, pressão, profundidade, sistemas hidráulicos e empuxo.</p>
      </div>
    </section>

    <section>
      <h3>1. Aço afunda, mas uma balsa de aço flutua: o que está faltando nessa comparação?</h3>
      <p>Comparar apenas o material não basta. Um bloco maciço de aço concentra muita massa em pouco volume. Já a balsa possui um casco que envolve grandes espaços preenchidos por ar. Por isso precisamos comparar <strong>massa total</strong> com <strong>volume total ocupado</strong>.</p>
      <p>Essa relação recebe o nome de <strong>densidade</strong>.</p>
      <div class="formula-box"><span class="formula-name">Densidade</span><div class="big-formula">ρ = m / V</div><p>No SI, a unidade é kg/m³. Para a mesma massa, aumentar o volume reduz a densidade média; para o mesmo volume, aumentar a massa eleva a densidade.</p></div>
      <div class="example-box"><strong class="card-title">Mesmo material, formas muito diferentes</strong><p>Imagine 10 kg de aço em um bloco compacto e os mesmos 10 kg usados numa estrutura oca que ocupa um volume externo muito maior. A massa de aço não mudou, mas a <strong>densidade média do conjunto</strong> pode mudar bastante porque o volume total considerado é outro.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a previsão</strong><p>Dois objetos têm a mesma massa. O objeto A ocupa o dobro do volume de B. Qual tem menor densidade média?</p><div class="choice-row"><button type="button" data-choice="a">A</button><button type="button" data-choice="b">B</button><button type="button" data-choice="c">As duas têm necessariamente a mesma densidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Com a mesma massa, maior volume significa menor densidade média." data-wrong-text="Mantenha m constante e compare V em ρ = m/V."></div></div>
    </section>

    <section>
      <h3>2. O carro entra na rampa: a mesma força pode produzir pressões diferentes</h3>
      <p>Quando o carro para sobre a rampa, cada pneu exerce força sobre uma área de contato. A mesma força concentrada numa área menor produz um efeito mais intenso sobre cada unidade de área do que se estivesse distribuída numa área maior.</p>
      <p>A grandeza que relaciona força perpendicular e área é a <strong>pressão</strong>.</p>
      <div class="formula-box"><span class="formula-name">Pressão</span><div class="big-formula">p = F / A</div><p>A unidade é o pascal: <strong>1 Pa = 1 N/m²</strong>.</p></div>
      <div class="example-box"><strong class="card-title">Mesma força, duas áreas</strong><p>Se 600 N atuam sobre 0,020 m², a pressão é 30.000 Pa. Se os mesmos 600 N forem distribuídos sobre 0,040 m², a pressão cai para <strong>15.000 Pa</strong>.</p></div>
      <div class="note-box"><strong>Por que isso será útil na água?</strong><p>Nos líquidos também estudamos pressão, mas ela não aparece apenas por uma força aplicada externamente. O próprio peso do fluido faz a pressão variar com a profundidade.</p></div>
    </section>

    <section>
      <h3>3. Olhando o casco, você percebe que a parte mais funda suporta maior pressão</h3>
      <p>Observe dois pontos do casco: um logo abaixo da superfície e outro vários metros mais abaixo. O ponto mais profundo está sob uma coluna maior de água. Por isso, em um líquido em repouso, a pressão aumenta com a profundidade.</p>
      <div class="formula-box"><span class="formula-name">Lei de Stevin</span><div class="big-formula">Δp = ρ · g · Δh</div><p>A diferença de pressão entre dois pontos depende da densidade do fluido, da gravidade e da diferença de profundidade. Para obter pressão absoluta, também é preciso considerar a pressão existente na superfície.</p></div>
      <div class="example-box"><strong class="card-title">Dois pontos do casco separados por 3 m na vertical</strong><p>Na água, usando ρ = 1.000 kg/m³ e g ≈ 10 m/s²:</p><ol class="reason-steps"><li>Δh = 3 m.</li><li>Δp = 1.000·10·3.</li><li><strong>Δp = 30.000 Pa.</strong></li></ol><p>O ponto mais profundo recebe 30.000 Pa a mais de pressão hidrostática que o ponto superior.</p></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Sem fazer conta</strong><p>No mesmo líquido parado, qual ponto tende a ter maior pressão?</p><div class="choice-row"><button type="button" data-choice="a">O mais próximo da superfície</button><button type="button" data-choice="b">Todos têm sempre a mesma pressão</button><button type="button" data-choice="c">O mais profundo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Quanto maior a profundidade, maior a contribuição ρgΔh." data-wrong-text="Compare a coluna de líquido acima de cada ponto."></div></div>
    </section>

    <section>
      <h3>4. A rampa da balsa é movida por cilindros hidráulicos: como uma força pequena pode gerar outra maior?</h3>
      <p>Na balsa deste exemplo, a rampa de acesso é acionada por um sistema hidráulico. Uma bomba pressuriza o fluido, e essa variação de pressão é transmitida pelo líquido confinado aos cilindros que movimentam a estrutura.</p>
      <p>Esse comportamento é descrito pelo <strong>Princípio de Pascal</strong>: uma variação de pressão aplicada a um fluido confinado é transmitida pelo fluido.</p>
      <div class="formula-box"><span class="formula-name">Sistema hidráulico ideal</span><div class="big-formula">F₁ / A₁ = F₂ / A₂</div><p>Se a mesma pressão atua em um pistão de área maior, a força resultante nesse pistão também é maior.</p></div>
      <div class="example-box"><strong class="card-title">Dois pistões</strong><p>A₁ = 5 cm², A₂ = 100 cm² e F₁ = 100 N.</p><ol class="reason-steps"><li>100/5 = F₂/100.</li><li>F₂ = <strong>2.000 N</strong>.</li><li>A área ficou 20 vezes maior e, no modelo ideal, a força também.</li></ol></div>
      <div class="note-box"><strong>Isso cria energia?</strong><p>Não. O ganho de força vem acompanhado de menor deslocamento do pistão maior. Em um sistema ideal, o trabalho de entrada e o de saída permanecem compatíveis; sistemas reais ainda têm perdas.</p></div>
    </section>

    <section>
      <h3>5. A diferença de pressão no casco produz uma força resultante para cima</h3>
      <p>A água exerce pressão sobre toda a superfície submersa do casco. Como as regiões inferiores estão mais profundas, as forças de pressão nelas são maiores. A soma dessas forças produz uma resultante vertical para cima: o <strong>empuxo</strong>.</p>
      <p>O <strong>Princípio de Arquimedes</strong> afirma que o módulo do empuxo é igual ao peso do fluido deslocado.</p>
      <div class="formula-box"><span class="formula-name">Empuxo</span><div class="big-formula">E = ρ<sub>fluido</sub> · g · V<sub>deslocado</sub></div><p>Quanto maior o volume de fluido deslocado, maior o empuxo, mantendo a densidade do fluido e a gravidade.</p></div>
      <div class="example-box"><strong class="card-title">Volume deslocado de 0,003 m³</strong><p>Na água: E = 1.000·10·0,003 = <strong>30 N</strong>.</p></div>
      <div class="note-box"><strong>O peso da balsa desaparece?</strong><p>Não. O peso continua atuando para baixo. Quando a balsa flutua em repouso, ela afunda apenas o suficiente para deslocar um volume de água cujo peso produza um empuxo <strong>igual ao peso total da embarcação</strong>.</p></div>
    </section>

    <section>
      <h3>6. Agora podemos responder: por que a balsa de aço não afunda?</h3>
      <p>Um pedaço maciço de aço possui densidade maior que a da água. Se ele ficar totalmente submerso, o empuxo produzido pelo volume que desloca é menor que seu peso, e ele afunda.</p>
      <p>A balsa é diferente. Seu casco oco faz o conjunto — aço, ar, equipamentos, veículos e espaços internos — ocupar um volume muito grande. Assim, antes de ficar totalmente submersa, ela consegue deslocar água suficiente para que o <strong>empuxo iguale o peso</strong>.</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">ρ média &lt; ρ do fluido</strong><p>O corpo pode flutuar parcialmente até E = P.</p></div><div class="example-box"><strong class="card-title">ρ média ≈ ρ do fluido</strong><p>Pode permanecer submerso em equilíbrio aproximado no modelo ideal.</p></div><div class="example-box"><strong class="card-title">ρ média &gt; ρ do fluido</strong><p>Se totalmente submerso e E &lt; P, tende a afundar.</p></div></div>
      <div class="note-box"><strong>Resposta à pergunta do embarque</strong><p>A balsa não flutua porque “o aço é leve” nem porque o motor a sustenta. Ela flutua porque a <strong>forma do casco</strong> permite deslocar grande volume de água, reduz a densidade média do conjunto e produz empuxo suficiente para equilibrar o peso.</p></div>
    </section>

    <section>
      <h3>7. E se a mesma balsa passar de água doce para água mais salgada?</h3>
      <p>A água salgada é mais densa que a água doce. Pela expressão do empuxo, um mesmo volume deslocado em um fluido mais denso produziria empuxo maior.</p>
      <p>Mas uma embarcação que já está flutuando não fica acelerando para cima. Ela sobe um pouco e passa a deslocar <strong>menos volume</strong> até que o empuxo volte a igualar seu peso.</p>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a previsão</strong><p>Ao passar da água doce para uma água mais salgada, a mesma embarcação tende a:</p><div class="choice-row"><button type="button" data-choice="a">ficar um pouco menos submersa</button><button type="button" data-choice="b">afundar obrigatoriamente</button><button type="button" data-choice="c">perder massa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Um fluido mais denso exige menor volume deslocado para produzir o mesmo empuxo." data-wrong-text="Mantenha o peso da embarcação e aumente ρ do fluido em E = ρgV."></div></div>
    </section>

    <section>
      <h3>8. Laboratório: altere o objeto e o fluido</h3>
      <div class="interactive-lab" id="buoyancyLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Densidade, volume deslocado e empuxo</h4></div>
        <p>Antes de mover os controles, compare a densidade do objeto com a do fluido e faça uma previsão: ele flutará, ficará quase em equilíbrio ou afundará?</p>
        <div class="lab-controls"><label>Densidade do objeto <strong><span id="objectDensityValue">700</span> kg/m³</strong><input id="objectDensityRange" type="range" min="200" max="1600" step="50" value="700"></label><label>Volume do objeto <strong><span id="objectVolumeValue">5,0</span> L</strong><input id="objectVolumeRange" type="range" min="1" max="10" step="0.5" value="5"></label><label>Fluido <strong><span id="fluidName">Água</span></strong><select id="fluidSelect"><option value="water">Água</option><option value="salt">Água salgada</option><option value="oil">Óleo</option></select></label></div>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Simulação de um bloco em um líquido"><rect id="buoyancyFluid" x="140" y="55" width="480" height="210" rx="12" fill="#e8f5ff" stroke="#6fa9dc" stroke-width="3"/><line x1="140" y1="80" x2="620" y2="80" stroke="#1967d2" stroke-width="3"/><text x="635" y="85" class="visual-note">superfície</text><rect id="buoyancyBlock" x="330" y="53" width="100" height="90" rx="8" fill="#6d4aff" stroke="#49338f" stroke-width="3"/><text x="275" y="295" class="visual-note">compare densidades antes de observar o resultado</text></svg>
        <div class="lab-result" aria-live="polite"><span>Peso:</span><strong id="objectWeightValue">35,0 N</strong><span>Empuxo máximo:</span><strong id="maxBuoyancyValue">50,0 N</strong><span>Submerso:</span><strong id="submergedValue">70%</strong><span>Resultado:</span><strong id="buoyancyStatus">Flutua</strong></div><p id="buoyancyConclusion">O objeto flutua e ajusta a parte submersa até o empuxo igualar seu peso.</p>
      </div>
    </section>

    <section>
      <h3>9. Experimento: a mesma massa de alumínio pode afundar ou flutuar</h3>
      <div class="experiment-box"><strong class="card-title">Bola compacta e pequeno casco</strong><ol class="reason-steps"><li>Separe dois pedaços iguais de papel-alumínio.</li><li>Amasse um formando uma bola compacta.</li><li>Modele o outro como um pequeno barco de base larga e bordas elevadas.</li><li>Coloque cada um separadamente numa bacia com pouca água.</li><li>No barquinho, acrescente moedas aos poucos e registre quantas suporta antes de começar a entrar água.</li></ol><p class="safety-note"><strong>Segurança:</strong> use recipiente estável, pouca água e objetos leves; seque qualquer derramamento.</p></div>
      <p>A quantidade de alumínio praticamente não muda entre os dois casos. O que muda é a forma do objeto e, portanto, o <strong>volume de água que ele consegue deslocar</strong> antes de ficar totalmente submerso ou receber água em seu interior.</p>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Fim da travessia</span>
      <h3>10. Você consegue explicar o que aconteceu desde o embarque?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Densidade</strong><p>3 kg ocupam 0,003 m³. Qual a densidade?</p><div class="choice-row"><button type="button" data-choice="a">100 kg/m³</button><button type="button" data-choice="b">1.000 kg/m³</button><button type="button" data-choice="c">9.000 kg/m³</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="ρ = 3/0,003 = 1.000 kg/m³." data-wrong-text="Use ρ = m/V."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Pressão</strong><p>Para a mesma força perpendicular, reduzir a área produz:</p><div class="choice-row"><button type="button" data-choice="a">pressão maior</button><button type="button" data-choice="b">pressão menor</button><button type="button" data-choice="c">pressão zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. p = F/A." data-wrong-text="Observe o que acontece quando o denominador diminui."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Profundidade</strong><p>No mesmo líquido parado, maior profundidade significa:</p><div class="choice-row"><button type="button" data-choice="a">menor pressão</button><button type="button" data-choice="b">a mesma pressão em qualquer ponto</button><button type="button" data-choice="c">maior pressão</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A diferença de pressão cresce com Δh." data-wrong-text="Use a Lei de Stevin."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Pascal</strong><p>Num sistema hidráulico ideal, um pistão de área maior permite:</p><div class="choice-row"><button type="button" data-choice="a">criar energia</button><button type="button" data-choice="b">obter maior força para a mesma pressão</button><button type="button" data-choice="c">eliminar a pressão</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A mesma pressão em área maior corresponde a maior força." data-wrong-text="Compare F/A nos dois pistões."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Empuxo</strong><p>Um corpo desloca 0,002 m³ de água. Usando ρ=1.000 kg/m³ e g=10 m/s², qual é o empuxo?</p><div class="choice-row"><button type="button" data-choice="a">20 N</button><button type="button" data-choice="b">200 N</button><button type="button" data-choice="c">2 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="E = 1.000·10·0,002 = 20 N." data-wrong-text="Use E = ρgV."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Flutuando</strong><p>Uma embarcação permanece em repouso na superfície, sem tocar o fundo. Então:</p><div class="choice-row"><button type="button" data-choice="a">seu peso é zero</button><button type="button" data-choice="b">o empuxo é sempre maior que o peso</button><button type="button" data-choice="c">o empuxo é igual ao peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Em equilíbrio vertical, E = P." data-wrong-text="Se permanece em repouso, a resultante vertical é zero."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Casco</strong><p>Por que o casco oco ajuda uma embarcação de aço a flutuar?</p><div class="choice-row"><button type="button" data-choice="a">Porque remove a massa do aço</button><button type="button" data-choice="b">Porque aumenta o volume total e permite deslocar mais água antes de ficar totalmente submersa</button><button type="button" data-choice="c">Porque elimina a gravidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O grande volume reduz a densidade média do conjunto e permite empuxo suficiente." data-wrong-text="Compare um bloco maciço com uma estrutura oca de grande volume."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Água salgada</strong><p>Uma embarcação já flutuante entra em água mais densa. Ela tende a:</p><div class="choice-row"><button type="button" data-choice="a">ficar menos submersa</button><button type="button" data-choice="b">afundar sempre</button><button type="button" data-choice="c">perder peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Precisa deslocar menor volume para obter o mesmo empuxo." data-wrong-text="Mantenha o peso e aumente ρ do fluido."></div></div>
      <div class="challenge-box"><strong>Desafio MbB — projete um pequeno cargueiro</strong><p>Com uma folha de alumínio de massa fixa, proponha um formato capaz de carregar muitas moedas. Explique sua escolha usando volume deslocado, empuxo, peso total e estabilidade. Depois descreva como faria um teste justo entre dois formatos.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo trabalha os objetos previstos de <strong>Hidrostática</strong>: pressão, densidade, Lei de Stevin, Princípio de Pascal e Princípio de Arquimedes/empuxo.</p></details>
  `;

  function initBuoyancyLab(root){
    const objectDensity=$('#objectDensityRange',root),objectVolume=$('#objectVolumeRange',root),fluid=$('#fluidSelect',root),block=$('#buoyancyBlock',root),fluidRect=$('#buoyancyFluid',root);
    if(!objectDensity||!objectVolume||!fluid||!block||!fluidRect)return;
    const fluids={water:{name:'Água',rho:1000,fill:'#e8f5ff'},salt:{name:'Água salgada',rho:1025,fill:'#e3f4ff'},oil:{name:'Óleo',rho:800,fill:'#fff6d9'}};
    const format=(v,d=1)=>Number(v).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
    const draw=()=>{const rhoObj=Number(objectDensity.value),volumeL=Number(objectVolume.value),V=volumeL/1000,selected=fluids[fluid.value]||fluids.water,g=10,mass=rhoObj*V,weight=mass*g,maxE=selected.rho*g*V,ratio=rhoObj/selected.rho,sub=Math.min(100,Math.max(0,ratio*100)); $('#objectDensityValue',root).textContent=rhoObj.toLocaleString('pt-BR'); $('#objectVolumeValue',root).textContent=format(volumeL); $('#fluidName',root).textContent=selected.name; $('#objectWeightValue',root).textContent=`${format(weight)} N`; $('#maxBuoyancyValue',root).textContent=`${format(maxE)} N`; $('#submergedValue',root).textContent=ratio<=1?`${format(sub,0)}%`:'100%'; fluidRect.setAttribute('fill',selected.fill); const status=$('#buoyancyStatus',root),conclusion=$('#buoyancyConclusion',root); if(ratio<.98){block.setAttribute('y',String(Math.max(8,80-(1-ratio)*90))); block.setAttribute('fill','#6d4aff'); status.textContent='Flutua'; conclusion.textContent=`Aproximadamente ${format(sub,0)}% do volume fica submerso até o empuxo igualar o peso.`;}else if(ratio<=1.02){block.setAttribute('y','135'); block.setAttribute('fill','#087f5b'); status.textContent='Equilíbrio aproximado'; conclusion.textContent='As densidades são muito próximas; no modelo ideal, o corpo pode ficar praticamente submerso em equilíbrio.';}else{block.setAttribute('y','170'); block.setAttribute('fill','#b42318'); status.textContent='Afunda'; conclusion.textContent='Mesmo totalmente submerso, o empuxo máximo é menor que o peso.';}};
    [objectDensity,objectVolume].forEach(input=>input.addEventListener('input',draw)); fluid.addEventListener('input',draw); fluid.addEventListener('change',draw); draw();
  }

  MBB.enableChapter?.('07 Por que navios flutuam?',()=>{MBB.showLesson({unit:'Equilíbrio e fluidos',technical:'Hidrostática • pressão • densidade • Stevin • Pascal • Arquimedes e empuxo',title:'Por que navios flutuam?',objective:'<strong>Propósito:</strong> acompanhar um embarque de balsa para compreender densidade, pressão, profundidade, sistemas hidráulicos e empuxo e explicar por que uma embarcação de aço pode flutuar.',html:lessonHtml,init:initBuoyancyLab});});
})();