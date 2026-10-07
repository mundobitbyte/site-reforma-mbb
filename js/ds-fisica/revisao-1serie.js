(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  if (MBB.firstSeriesReviewReady || typeof MBB.showLesson !== 'function') return;
  MBB.firstSeriesReviewReady = true;

  const originalShowLesson = MBB.showLesson;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const q = (number, label, prompt, options, correct, correctText, wrongText) => `
    <div class="quick-question" data-choice-question data-correct="${correct}">
      <strong>${number}. ${label}</strong>
      <p>${prompt}</p>
      <div class="choice-row">${options.map(([key,text]) => `<button type="button" data-choice="${key}">${text}</button>`).join('')}</div>
      <div class="choice-feedback" data-choice-feedback data-correct-text="${correctText}" data-wrong-text="${wrongText}"></div>
    </div>`;

  const sectionStartingWith = (root, text) =>
    $$('section', root).find(section => section.querySelector('h3')?.textContent.trim().startsWith(text));

  const setHeading = (root, startsWith, replacement) => {
    const heading = $$('h3', root).find(h => h.textContent.trim().startsWith(startsWith));
    if (heading) heading.textContent = replacement;
  };

  function decorateThermal(root) {
    if ($('[data-physics-review="thermal"]', root)) return;
    const anchor = sectionStartingWith(root, '7. Laboratório');
    if (!anchor) return;

    setHeading(root, '7. Laboratório', '10. Laboratório: dê a mesma energia para água, areia e alumínio');
    setHeading(root, '8. Faça uma investigação', '11. Faça uma investigação simples com água e areia');
    setHeading(root, '9. Agora podemos responder', '12. Agora podemos responder à pergunta da praia');
    setHeading(root, '10. Você consegue explicar', '13. Você consegue explicar a tarde inteira usando Física?');

    anchor.insertAdjacentHTML('beforebegin', `
      <section data-physics-review="thermal">
        <h3>7. A energia pode chegar de três maneiras diferentes</h3>
        <p>Em situações térmicas reais, vários mecanismos podem atuar ao mesmo tempo. Separá-los ajuda a construir uma explicação física.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Condução</strong><p>Transferência por interações microscópicas dentro de um material ou entre corpos em contato. É importante numa colher metálica aquecida ou numa parede entre ambientes com temperaturas diferentes.</p></div>
          <div class="example-box"><strong class="card-title">Convecção</strong><p>Transferência associada ao movimento do próprio fluido. Ar aquecido pode subir enquanto ar mais frio ocupa seu lugar; correntes de água também redistribuem energia.</p></div>
          <div class="example-box"><strong class="card-title">Radiação térmica</strong><p>Corpos emitem radiação eletromagnética. A energia solar chega à Terra principalmente por radiação, sem precisar de meio material entre o Sol e o planeta.</p></div>
        </div>
        ${q('A','Transferência de energia','Como a energia do Sol atravessa o espaço até a Terra?',[['a','por condução no vácuo'],['b','por convecção no vácuo'],['c','por radiação eletromagnética']],'c','Correto. Radiação eletromagnética pode se propagar no vácuo.','Condução e convecção dependem de matéria.')}
        <div class="note-box"><strong>Na praia os três mecanismos aparecem</strong><p>Areia e pé trocam energia por contato; água e ar circulam; Sol, areia, água e atmosfera emitem e absorvem radiação.</p></div>
      </section>

      <section>
        <h3>8. Mudança de estado: energia pode ser transferida sem grande variação de temperatura</h3>
        <p>A relação <strong>Q = m·c·ΔT</strong> descreve aquecimento ou resfriamento dentro de uma fase no modelo simples. Durante uma transição de fase, parte importante da energia está ligada à reorganização das partículas.</p>
        <div class="formula-box"><span class="formula-name">Calor latente no modelo ideal</span><div class="big-formula">Q = m · L</div><p><strong>L</strong> é o calor latente específico da mudança de estado.</p></div>
        <div class="two-col">
          <div class="example-box"><strong class="card-title">Evaporação</strong><p>Pode ocorrer na superfície do líquido em diversas temperaturas. Moléculas mais energéticas escapam e o líquido remanescente pode resfriar.</p></div>
          <div class="example-box"><strong class="card-title">Ebulição</strong><p>Ocorre com formação de bolhas no interior quando a pressão de vapor se torna compatível com a pressão externa. A temperatura de ebulição depende da pressão.</p></div>
        </div>
        <div class="note-box"><strong>Curva de aquecimento</strong><p>Num gráfico de temperatura versus energia fornecida, trechos inclinados representam aquecimento dentro de uma fase. Durante uma mudança de fase de substância pura sob pressão aproximadamente constante, pode aparecer um trecho quase horizontal: a energia continua sendo transferida enquanto a temperatura varia pouco.</p></div>
        ${q('B','Mudança de fase','Em água pura em ebulição sob pressão aproximadamente constante, continuar fornecendo energia significa que a temperatura precisa subir continuamente?',[['a','sim, sempre'],['b','não; a energia pode participar da mudança de fase com pequena variação de temperatura'],['c','não, porque a energia deixa de existir']],'b','Correto. A energia continua sendo transferida e participa da transição de fase.','Durante a mudança de fase, use a ideia de calor latente.')}
      </section>

      <section>
        <h3>9. Efeito estufa: natural, necessário e passível de intensificação</h3>
        <p>A Terra recebe energia principalmente como radiação solar e também emite radiação para o espaço. Gases atmosféricos, como vapor d'água, dióxido de carbono e metano, absorvem e reemitem parte da radiação infravermelha.</p>
        <div class="two-col">
          <div class="example-box"><strong class="card-title">Efeito estufa natural</strong><p>Faz parte do balanço energético terrestre e contribui para manter temperaturas compatíveis com a vida atual.</p></div>
          <div class="example-box"><strong class="card-title">Intensificação antrópica</strong><p>O aumento da concentração de gases de efeito estufa por atividades humanas altera o balanço de energia e contribui para o aquecimento global observado.</p></div>
        </div>
        <div class="note-box"><strong>Não confunda</strong><p>Intensificação do efeito estufa e redução da camada de ozônio são problemas atmosféricos diferentes, com mecanismos diferentes.</p></div>
        ${q('C','Balanço térmico','Qual afirmação é mais adequada?',[['a','o efeito estufa existe naturalmente e pode ser intensificado por aumento de gases que interagem com a radiação infravermelha'],['b','é exatamente o mesmo fenômeno que o buraco na camada de ozônio'],['c','significa que toda radiação fica presa para sempre']],'a','Correto. O problema climático envolve alteração do balanço radiativo.','Separe efeito estufa natural, intensificação e camada de ozônio.')}
      </section>
    `);
  }

  function decorateAstronomy(root) {
    if ($('[data-physics-review="astronomy"]', root)) return;
    const anchor = sectionStartingWith(root, '7. Laboratório');
    if (!anchor) return;

    setHeading(root, '7. Laboratório', '10. Laboratório: avalie um planeta hipotético sem transformar o resultado em “detector de vida”');
    setHeading(root, '8. Então, afinal', '11. Então, afinal, poderia existir vida em outro mundo?');
    setHeading(root, '9. Atividade de investigação', '12. Atividade de investigação: monte uma ficha de evidências');
    setHeading(root, '10. Você consegue separar', '13. Você consegue separar possibilidade, evidência e conclusão?');

    anchor.insertAdjacentHTML('beforebegin', `
      <section data-physics-review="astronomy">
        <h3>7. A luz funciona como uma mensagem física vinda de muito longe</h3>
        <p>A <strong>espectroscopia</strong> separa a radiação por comprimentos de onda. Comparando padrões observados com medidas de laboratório, podemos inferir propriedades de estrelas e atmosferas.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Espectro contínuo</strong><p>Em um modelo introdutório, corpos densos e quentes podem emitir uma distribuição contínua de comprimentos de onda.</p></div>
          <div class="example-box"><strong class="card-title">Linhas de emissão</strong><p>Um gás rarefeito excitado pode emitir em comprimentos de onda característicos, produzindo linhas brilhantes.</p></div>
          <div class="example-box"><strong class="card-title">Linhas de absorção</strong><p>Quando radiação contínua atravessa um gás mais frio, certos comprimentos de onda podem ser absorvidos, deixando linhas escuras.</p></div>
        </div>
        <div class="note-box"><strong>Leis de Kirchhoff — ideia essencial</strong><p>Esses padrões relacionam espectro, estado físico e composição. Espectros reais podem ser mais complexos e sua interpretação exige modelos, calibração e comparação.</p></div>
        ${q('A','Assinatura espectral','Se linhas observadas coincidem com o padrão de um elemento, qual conclusão é adequada?',[['a','a estrela é feita apenas desse elemento'],['b','há evidência de que esse elemento participa da matéria que emitiu ou absorveu a radiação'],['c','a linha prova que existe vida']],'b','Correto. Linhas espectrais ajudam a inferir composição.','Uma assinatura espectral não significa composição exclusiva nem confirma vida.')}
      </section>

      <section>
        <h3>8. Estrelas nascem, evoluem e devolvem matéria ao espaço</h3>
        <p>Estrelas se formam quando regiões de gás e poeira colapsam gravitacionalmente. A evolução posterior depende fortemente da <strong>massa inicial</strong>.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Menor massa</strong><p>Podem permanecer bilhões de anos fundindo hidrogênio e, em fases finais, deixar anãs brancas após perder camadas externas.</p></div>
          <div class="example-box"><strong class="card-title">Muito massivas</strong><p>Evoluem mais rapidamente, passam por estágios capazes de produzir elementos mais pesados e podem terminar em supernovas, deixando remanescentes compactos.</p></div>
          <div class="example-box"><strong class="card-title">Matéria reciclada</strong><p>Material expelido por estrelas enriquece o meio interestelar. Novas estrelas e planetas podem se formar a partir dessa matéria.</p></div>
        </div>
        <div class="note-box"><strong>Da estrela ao planeta</strong><p>Hidrogênio e hélio têm origem majoritariamente no Universo primordial; muitos elementos mais pesados foram produzidos ou transformados em processos estelares. A evolução estelar está ligada à composição de sistemas planetários.</p></div>
        ${q('B','Evolução estelar','Qual afirmação é mais correta?',[['a','todas as estrelas seguem exatamente o mesmo caminho'],['b','uma estrela cria todos os elementos químicos numa única etapa'],['c','a massa inicial influencia o percurso evolutivo e diferentes processos cósmicos participam da origem e distribuição dos elementos']],'c','Correto. Estrelas de massas diferentes têm evoluções diferentes.','Evite imaginar um único ciclo idêntico para todas as estrelas.')}
      </section>

      <section>
        <h3>9. Exploração espacial também virou tecnologia do cotidiano</h3>
        <p>Explorar o espaço exige comunicação, energia, materiais, sensores, controle e transmissão de dados. Essas tecnologias também participam de atividades na Terra.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Satélites</strong><p>Permitem comunicação, previsão do tempo, observação ambiental, navegação e sincronização de sistemas.</p></div>
          <div class="example-box"><strong class="card-title">Telescópios e detectores</strong><p>Instrumentos em solo e no espaço registram diferentes faixas do espectro e ampliam o que conseguimos investigar.</p></div>
          <div class="example-box"><strong class="card-title">Novos desafios</strong><p>Mais objetos em órbita também significam detritos espaciais, interferência, custos e decisões sobre uso responsável do espaço.</p></div>
        </div>
        ${q('C','Tecnologia espacial','Qual afirmação é mais adequada?',[['a','satélites servem apenas para fotografar planetas'],['b','tecnologias espaciais participam de comunicação, meteorologia, navegação, pesquisa e monitoramento'],['c','a exploração espacial não produz desafios tecnológicos']],'b','Correto. O uso do espaço está ligado a muitos sistemas do cotidiano.','Pense em GPS, previsão do tempo, comunicação e observação da Terra.')}
      </section>
    `);
  }

  function initElectricLab(root) {
    const voltage = $('#physicsReviewVoltage', root);
    const resistance = $('#physicsReviewResistance', root);
    if (!voltage || !resistance) return;
    const fmt=(v,d=1)=>Number(v).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
    const draw=()=>{
      const V=Number(voltage.value), R=Number(resistance.value), I=V/R, P=V*I, E=P/1000;
      $('#physicsReviewVoltageValue',root).textContent=fmt(V,0);
      $('#physicsReviewResistanceValue',root).textContent=fmt(R,0);
      $('#physicsReviewCurrent',root).textContent=`${fmt(I,2)} A`;
      $('#physicsReviewPower',root).textContent=`${fmt(P,1)} W`;
      $('#physicsReviewEnergy',root).textContent=`${fmt(E,3)} kWh`;
    };
    [voltage,resistance].forEach(input=>input.addEventListener('input',draw));
    draw();
  }

  function decorateTechnology(root) {
    if ($('[data-physics-review="electricity"]', root)) return;
    const anchor = sectionStartingWith(root, '1. Um número sem contexto');
    if (!anchor) return;

    setHeading(root, '1. Um número sem contexto', '6. Um número sem contexto não responde à pergunta');
    setHeading(root, '2. Fonte confiável', '7. Fonte confiável não é sinônimo de “site bonito” nem de “texto com gráfico”');
    setHeading(root, '3. A turma recebe', '8. A turma recebe um pequeno conjunto de dados: agora é preciso ler, não apenas olhar');
    setHeading(root, '4. Gráficos também', '9. Gráficos também podem esclarecer — ou induzir a uma impressão errada');
    setHeading(root, '5. Mesmo com bons dados', '10. Mesmo com bons dados, ainda precisamos escolher o material certo para a aplicação');
    setHeading(root, '6. Segurança e sustentabilidade', '11. Segurança e sustentabilidade também fazem parte da decisão tecnológica');
    setHeading(root, '7. Laboratório', '12. Laboratório: descubra o que falta antes de confiar numa afirmação');
    setHeading(root, '8. Então devemos comprar', '13. Então devemos comprar o revestimento anunciado?');
    setHeading(root, '9. Atividade prática', '14. Atividade prática: transforme uma propaganda em perguntas investigáveis');
    setHeading(root, '10. Você consegue separar', '15. Você consegue separar dado, argumento e conclusão?');

    anchor.insertAdjacentHTML('beforebegin', `
      <section data-physics-review="electricity">
        <h3>1. Corrente, tensão e resistência: como começar a ler um circuito</h3>
        <p>A <strong>corrente elétrica</strong> mede a taxa de passagem de carga por uma seção do circuito: <span class="formula">I = ΔQ/Δt</span>. Uma fonte mantém uma <strong>diferença de potencial</strong> entre seus terminais.</p>
        <div class="formula-box"><span class="formula-name">Lei de Ohm para um resistor ôhmico</span><div class="big-formula">V = R · I</div><p>Em muitos resistores, dentro de determinada faixa de funcionamento, corrente e tensão são aproximadamente proporcionais. Nem todo componente mantém R constante.</p></div>
        <div class="two-col"><div class="example-box"><strong class="card-title">Série</strong><p>Os componentes estão no mesmo caminho. A corrente é a mesma ao longo da associação ideal, e as quedas de tensão se distribuem.</p></div><div class="example-box"><strong class="card-title">Paralelo</strong><p>Os ramos compartilham os mesmos dois nós. A tensão é a mesma em cada ramo ideal, enquanto a corrente total se divide.</p></div></div>
        <div class="note-box"><strong>Medir exige ligar o instrumento corretamente</strong><p>Em um modelo introdutório, voltímetro é ligado em paralelo e amperímetro no caminho da corrente. Instrumentos reais possuem limites e categorias de segurança.</p><p class="safety-note"><strong>Segurança:</strong> não faça medições em tomadas ou instalações da rede sem formação e supervisão adequadas. Prefira simulações e circuitos didáticos de baixa tensão.</p></div>
        ${q('A','Lei de Ohm','Um resistor ôhmico de 10 Ω recebe 5 V. Qual corrente o modelo prevê?',[['a','0,5 A'],['b','2 A'],['c','50 A']],'a','I = V/R = 5/10 = 0,5 A.','Isole I em V = R·I.')}
      </section>

      <section>
        <h3>2. Potência é taxa; energia consumida depende também do tempo</h3>
        <div class="formula-box"><span class="formula-name">Potência elétrica</span><div class="big-formula">P = V · I</div><p>1 watt equivale a 1 joule por segundo.</p></div>
        <div class="formula-box"><span class="formula-name">Energia ao longo do tempo</span><div class="big-formula">E = P · Δt</div><p>O quilowatt-hora (kWh) é unidade de energia, não de potência.</p></div>
        ${q('B','Consumo','Um aparelho de 1,5 kW funciona por 2 h. Qual energia consome?',[['a','0,75 kWh'],['b','1,5 kWh'],['c','3,0 kWh']],'c','E = P·t = 1,5·2 = 3,0 kWh.','Multiplique potência em kW pelo tempo em horas.')}
        <div class="interactive-lab">
          <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Tensão, resistência, corrente e potência</h4></div>
          <div class="lab-controls">
            <label>Tensão <strong><span id="physicsReviewVoltageValue">12</span> V</strong><input id="physicsReviewVoltage" type="range" min="3" max="24" step="1" value="12"></label>
            <label>Resistência <strong><span id="physicsReviewResistanceValue">12</span> Ω</strong><input id="physicsReviewResistance" type="range" min="3" max="60" step="1" value="12"></label>
          </div>
          <div class="lab-result"><span>I ≈ <b id="physicsReviewCurrent">1,00 A</b></span><span>P ≈ <b id="physicsReviewPower">12,0 W</b></span><span>E em 1 h ≈ <b id="physicsReviewEnergy">0,012 kWh</b></span></div>
        </div>
      </section>

      <section>
        <h3>3. Geradores, receptores e matrizes: a tomada é só o fim da cadeia</h3>
        <p>Um <strong>gerador</strong> transforma outras formas de energia em energia elétrica; um <strong>receptor</strong>, como um motor, transforma energia elétrica em outras formas.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Hidrelétrica</strong><p>Usa energia associada à água para acionar turbinas e geradores. Envolve impactos sobre rios, ecossistemas e territórios.</p></div>
          <div class="example-box"><strong class="card-title">Termelétrica</strong><p>Converte energia de combustíveis ou outras fontes térmicas em eletricidade. Impactos dependem de combustível, eficiência, emissões e controle ambiental.</p></div>
          <div class="example-box"><strong class="card-title">Eólica e solar</strong><p>Dependem de condições ambientais variáveis e exigem planejamento de rede, materiais, armazenamento ou complementaridade.</p></div>
        </div>
        <div class="note-box"><strong>Não existe fonte “sem impacto”</strong><p>Compare disponibilidade, potência, regularidade, área, materiais, resíduos, custos, emissões e efeitos socioambientais.</p></div>
      </section>

      <section>
        <h3>4. Eletrostática e magnetismo conectam cargas, motores e geradores</h3>
        <p>Na <strong>eletrostática</strong>, corpos podem ser eletrizados por atrito, contato ou indução. Eletrizar não cria carga do nada: em um sistema fechado, a carga total se conserva.</p>
        <div class="two-col"><div class="example-box"><strong class="card-title">Indução eletrostática</strong><p>O campo de um corpo carregado pode redistribuir cargas num condutor sem contato direto; com aterramento adequado, pode haver eletrização líquida.</p></div><div class="example-box"><strong class="card-title">Eletroímã</strong><p>Corrente elétrica numa bobina produz campo magnético. Número de espiras, corrente e núcleo influenciam o campo.</p></div></div>
        <p>Motores usam forças magnéticas para converter energia elétrica em movimento. Geradores exploram indução eletromagnética para converter movimento em energia elétrica; transformadores usam indução entre bobinas para alterar níveis de tensão em corrente alternada.</p>
        <div class="note-box"><strong>Capacitores</strong><p>Dois condutores separados por isolante podem armazenar separação de carga e energia associada ao campo elétrico. A capacitância pode ser escrita como <span class="formula">C = Q/V</span>.</p><p class="safety-note"><strong>Segurança:</strong> capacitores podem manter carga mesmo após o equipamento ser desligado. Não abra fontes, televisores ou aparelhos ligados à rede para testar esses conceitos.</p></div>
        ${q('C','Eletromagnetismo','Por que uma bobina percorrida por corrente pode atuar como eletroímã?',[['a','porque corrente elétrica produz campo magnético'],['b','porque a corrente elimina todas as cargas'],['c','porque resistência vira gravidade']],'a','Correto. Correntes elétricas estão associadas a campos magnéticos.','Relacione corrente elétrica e campo magnético.')}
      </section>

      <section>
        <h3>5. Radiação eletromagnética: comunicação, diagnóstico e tratamento</h3>
        <p>Ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e raios gama pertencem ao mesmo <strong>espectro eletromagnético</strong>, mas diferem em frequência, comprimento de onda e energia por fóton.</p>
        <div class="three-col">
          <div class="example-box"><strong class="card-title">Comunicação</strong><p>Rádio, televisão, Wi-Fi, telefonia e satélites usam faixas eletromagnéticas para transportar informação.</p></div>
          <div class="example-box"><strong class="card-title">Diagnóstico</strong><p>Raios X podem produzir imagens por diferenças de absorção em tecidos. Outras técnicas médicas usam outros princípios físicos.</p></div>
          <div class="example-box"><strong class="card-title">Tratamento</strong><p>Radiações ionizantes podem ser usadas de forma controlada em radioterapia para atingir células-alvo, com planejamento para limitar exposição de tecidos saudáveis.</p></div>
        </div>
        <div class="note-box"><strong>“Radiação” não significa automaticamente “perigo extremo”</strong><p>O efeito depende do tipo, energia, intensidade, duração e tecido atingido. Radiações ionizantes exigem controle rigoroso; radiações não ionizantes interagem por outros mecanismos e também possuem limites de exposição.</p></div>
        ${q('D','Radiações','Qual avaliação é mais adequada?',[['a','toda radiação é igualmente perigosa'],['b','somente luz visível é radiação eletromagnética'],['c','faixas diferentes têm propriedades, aplicações e riscos diferentes, dependentes da exposição']],'c','Correto. Primeiro identifique a faixa e as condições de exposição.','Não trate todo o espectro como se tivesse o mesmo comportamento.')}
      </section>
    `);

    initElectricLab(root);
  }

  function decorateExercises(root) {
    if ($('[data-physics-review="exercises"]', root)) return;
    const finalSection = $('.chapter-checkpoint', root);
    if (!finalSection) return;

    setHeading(root, '8. Uma situação que mistura', '9. Uma situação que mistura vários capítulos');
    const finalStrong = $('.challenge-box > strong', finalSection);
    if (finalStrong?.textContent.trim().startsWith('45.')) {
      finalStrong.textContent = finalStrong.textContent.replace(/^45\./, '55.');
    }

    finalSection.insertAdjacentHTML('beforebegin', `
      <section data-physics-review="exercises">
        <h3>8. Fechamento curricular — térmica, astronomia e eletricidade</h3>
        ${q('45','Transferência térmica','A energia do Sol chega à Terra principalmente por:',[['a','condução'],['b','convecção'],['c','radiação eletromagnética']],'c','Radiação pode se propagar no vácuo.','Condução e convecção dependem de matéria.')}
        ${q('46','Mudança de estado','Durante a ebulição de substância pura sob pressão aproximadamente constante, fornecer energia pode ocorrer sem grande aumento de temperatura porque:',[['a','a energia deixa de existir'],['b','a energia participa da mudança de fase'],['c','a massa aumenta automaticamente']],'b','A energia transferida pode estar associada ao calor latente.','Pense em Q = mL.')}
        ${q('47','Efeito estufa','Qual afirmação é mais adequada?',[['a','existe naturalmente e sua intensificação altera o balanço de energia do planeta'],['b','é o mesmo fenômeno que a redução da camada de ozônio'],['c','impede toda radiação de sair da Terra']],'a','Correto. O efeito natural e sua intensificação precisam ser distinguidos.','Não confunda efeito estufa com camada de ozônio.')}
        ${q('48','Espectroscopia','Linhas de absorção podem ajudar a inferir:',[['a','vida confirmada'],['b','presença de elementos ou espécies químicas compatíveis com aquelas linhas'],['c','que a estrela é sólida']],'b','Padrões espectrais ajudam a inferir composição.','Espectros fornecem pistas físicas e químicas.')}
        ${q('49','Evolução estelar','Qual fator influencia fortemente o caminho evolutivo de uma estrela?',[['a','o nome da constelação'],['b','a distância da Terra apenas'],['c','a massa inicial']],'c','A massa inicial é decisiva para duração, estágios e destino.','Pense nas condições internas e nos estágios de fusão.')}
        ${q('50','Lei de Ohm','Num resistor ôhmico de 20 Ω submetido a 10 V, a corrente é:',[['a','0,5 A'],['b','2 A'],['c','200 A']],'a','I = V/R = 10/20 = 0,5 A.','Use V = R·I.')}
        ${q('51','Potência e energia','Um aparelho de 2 kW funciona durante 3 h. Qual energia consome?',[['a','0,67 kWh'],['b','2 kWh'],['c','6 kWh']],'c','E = P·t = 2·3 = 6 kWh.','Multiplique potência pelo tempo.')}
        ${q('52','Circuitos em paralelo','Em uma associação ideal em paralelo:',[['a','a corrente precisa ser idêntica em todos os ramos'],['b','a tensão é a mesma entre os terminais de cada ramo'],['c','abrir um ramo sempre interrompe todos os outros']],'b','Ramos paralelos compartilham os mesmos dois nós.','Observe quais pontos os ramos têm em comum.')}
        ${q('53','Eletromagnetismo','Por que uma bobina percorrida por corrente pode atuar como eletroímã?',[['a','porque corrente produz campo magnético'],['b','porque corrente elimina cargas'],['c','porque resistência vira gravidade']],'a','Correntes elétricas estão associadas a campos magnéticos.','Relacione eletricidade e magnetismo.')}
        <div class="challenge-box"><strong>54. Matriz energética e decisão</strong><p>Compare uma usina hidrelétrica e uma eólica usando pelo menos quatro critérios físicos ou socioambientais. Evite dizer apenas “renovável é melhor”.</p><details><summary>Resposta orientada</summary><p>Podem ser comparados potência disponível, regularidade, integração à rede, área ocupada, materiais, impactos sobre ecossistemas e territórios, emissões no ciclo de vida, custos e localização. A conclusão depende do contexto e da combinação do sistema.</p></details></div>
      </section>
    `);

    const curriculum = $('details.curriculum-box p', root);
    if (curriculum) {
      curriculum.innerHTML = 'Este conjunto de <strong>55 atividades</strong> integra Cinemática, Dinâmica, trabalho e energia, impulso e colisões, termometria, calorimetria, mudanças de estado e transferência de calor, Estática, Hidrostática, gravitação, leis de Kepler, cosmologia, espectroscopia, evolução estelar, eletrostática, circuitos, potência elétrica, magnetismo, geração de energia e análise crítica de tecnologias.';
    }
  }

  MBB.showLesson = (config = {}) => {
    const adjusted = { ...config };

    if (adjusted.title === 'Temperatura não é calor') {
      adjusted.technical = 'Termometria • calorimetria • mudanças de estado • transferência de calor • efeito estufa';
      adjusted.objective = '<strong>Propósito:</strong> investigar uma tarde na praia para distinguir temperatura de calor e compreender escalas, dilatação, calorimetria, mudanças de estado, transferência de energia térmica e efeito estufa.';
    }

    if (adjusted.title === 'Poderia existir vida em outro mundo?') {
      adjusted.technical = 'Habitabilidade • espectroscopia • evolução estelar • tecnologia espacial • evidências';
      adjusted.objective = '<strong>Propósito:</strong> avaliar condições de habitabilidade, compreender como espectros revelam propriedades de astros, relacionar evolução estelar à formação dos elementos e analisar tecnologias de exploração espacial.';
    }

    if (adjusted.title === 'Física, tecnologia e informação confiável') {
      adjusted.technical = 'Eletricidade • circuitos • potência • eletromagnetismo • radiações • tecnologia';
      adjusted.objective = '<strong>Propósito:</strong> compreender circuitos, potência, eletrostática, magnetismo e radiações para avaliar tecnologias elétricas e de comunicação com segurança, sustentabilidade e evidências.';
    }

    if (adjusted.title === 'Exercícios e desafios') {
      adjusted.objective = '<strong>Propósito:</strong> consolidar a Física da 1ª série em 55 atividades de compreensão, cálculo, explicação, aplicação e investigação.';
    }

    originalShowLesson(adjusted);

    const root = document.getElementById('lessonContent');
    if (!root) return;

    if (adjusted.title === 'Temperatura não é calor') decorateThermal(root);
    if (adjusted.title === 'Poderia existir vida em outro mundo?') decorateAstronomy(root);
    if (adjusted.title === 'Física, tecnologia e informação confiável') decorateTechnology(root);
    if (adjusted.title === 'Exercícios e desafios') decorateExercises(root);

    MBB.initChoiceQuestions?.(root);
  };
})();
