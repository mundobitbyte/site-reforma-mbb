(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">No laboratório, a balança indica 18,0 g de água. A professora então afirma: “Nesta amostra há aproximadamente 6,02 × 10²³ moléculas de H₂O”. Como ela pode falar em moléculas individuais se ninguém contou uma por uma?</strong>
        <p>No capítulo anterior aprendemos a medir massas e a acompanhar a conservação da matéria. Agora surge um problema novo: uma balança mede gramas, mas as equações químicas descrevem partículas em proporções definidas. Precisamos de uma ponte entre o mundo macroscópico que conseguimos pesar e o mundo microscópico que não conseguimos contar diretamente.</p>
        <p>Essa ponte é o <strong>mol</strong>. Ele permite converter uma quantidade mensurável de matéria em uma quantidade conhecida de entidades químicas e, depois, voltar dessas entidades para massas que podemos preparar no laboratório.</p>

        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Faça uma hipótese antes de continuar</strong>
          <p>Por que a Química precisa de uma unidade especial de contagem?</p>
          <div class="choice-row"><button type="button" data-choice="a">Porque átomos e moléculas não possuem massa</button><button type="button" data-choice="b">Porque quantidades macroscópicas contêm números enormes de partículas, impossíveis de contar uma a uma</button><button type="button" data-choice="c">Porque toda substância possui o mesmo número de partículas por grama</button></div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. O mol transforma uma contagem gigantesca de entidades em uma unidade utilizável no laboratório." data-wrong-text="Átomos e moléculas têm massa, e substâncias diferentes não possuem necessariamente o mesmo número de partículas por grama."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> entender o que significa <strong>1 mol</strong>, relacionar mol a número de partículas e massa molar e dominar o caminho <strong>massa ↔ mol ↔ partículas</strong>.</p>
      </div>
    </section>

    <section>
      <h3>1. Mol é uma unidade de contagem</h3>
      <p>No cotidiano usamos palavras que representam quantidades sem precisar enumerar cada objeto. Uma <strong>dúzia</strong> significa 12 unidades. Um <strong>mol</strong> funciona de modo semelhante, mas representa uma quantidade muito maior.</p>
      <div class="concept-flow">
        <div><strong>1 dúzia</strong><span>12 entidades</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>1 mol</strong><span>6,02214076 × 10²³ entidades</span></div>
      </div>
      <p>Desde a redefinição do Sistema Internacional de Unidades, <strong>1 mol contém exatamente 6,02214076 × 10²³ entidades elementares especificadas</strong>. Esse número é chamado de <strong>constante de Avogadro</strong>.</p>

      <div class="ok-box"><strong>Não diga apenas “1 mol de partículas”</strong><p>É preciso especificar a entidade: <strong>1 mol de átomos de Fe</strong>, <strong>1 mol de moléculas de H₂O</strong>, <strong>1 mol de íons Na⁺</strong> ou <strong>1 mol de unidades de fórmula de NaCl</strong>.</p></div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Teste a ideia</strong><p>Qual afirmação está correta?</p>
        <div class="choice-row"><button type="button" data-choice="a">1 mol sempre significa 1 grama</button><button type="button" data-choice="b">1 mol sempre significa 1 molécula</button><button type="button" data-choice="c">1 mol representa 6,02214076 × 10²³ entidades especificadas</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Mol mede quantidade de substância por contagem de entidades, não uma massa fixa." data-wrong-text="Separe as ideias de massa, número de entidades e quantidade de substância."></div>
      </div>
    </section>

    <section>
      <h3>2. O número de Avogadro é enorme porque as partículas são extremamente pequenas</h3>
      <p>Uma quantidade visível de matéria contém um número gigantesco de átomos ou moléculas. O valor da constante de Avogadro parece exagerado apenas porque nossa experiência cotidiana envolve objetos muito maiores.</p>

      <div class="visual-box">
        <strong class="card-title">Do laboratório para a escala das partículas</strong>
        <svg class="lesson-visual" viewBox="0 0 760 290" role="img" aria-label="Esquema mostrando uma amostra macroscópica sobre uma balança, a quantidade em mol e uma enorme coleção simbólica de partículas. O objetivo é mostrar que o mol funciona como ponte entre massa medida e número de entidades.">
          <defs><marker id="cap07ArrowScale" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="35" y="75" width="185" height="130" rx="16" fill="#eef5ff" stroke="#9dbce5"/>
          <text x="127" y="112" text-anchor="middle" font-size="18" font-weight="900" fill="#104a9b">Massa</text><text x="127" y="148" text-anchor="middle" font-size="27" font-weight="900" fill="#1967d2">18,0 g H₂O</text><text x="127" y="178" text-anchor="middle" font-size="13" fill="#617087">o que a balança mede</text>
          <rect x="287" y="75" width="185" height="130" rx="16" fill="#f3f8f1" stroke="#bad7b5"/>
          <text x="379" y="112" text-anchor="middle" font-size="18" font-weight="900" fill="#35633c">Quantidade</text><text x="379" y="148" text-anchor="middle" font-size="27" font-weight="900" fill="#35633c">≈ 1 mol</text><text x="379" y="178" text-anchor="middle" font-size="13" fill="#617087">a ponte de conversão</text>
          <rect x="539" y="75" width="185" height="130" rx="16" fill="#fff5eb" stroke="#e5c3a3"/>
          <text x="631" y="108" text-anchor="middle" font-size="18" font-weight="900" fill="#7e3d18">Partículas</text><text x="631" y="143" text-anchor="middle" font-size="19" font-weight="900" fill="#7e3d18">≈ 6,02 × 10²³</text><text x="631" y="171" text-anchor="middle" font-size="13" fill="#617087">moléculas de H₂O</text>
          <path d="M220 140 H286" stroke="#1967d2" stroke-width="4" marker-end="url(#cap07ArrowScale)"/><path d="M472 140 H538" stroke="#1967d2" stroke-width="4" marker-end="url(#cap07ArrowScale)"/>
          <text x="380" y="250" text-anchor="middle" font-size="14" fill="#617087">A balança não conta moléculas diretamente; o mol conecta as duas escalas.</text>
        </svg>
      </div>
    </section>

    <section>
      <h3>3. Massa molar informa a massa de 1 mol</h3>
      <p>Para transformar mol em gramas precisamos da <strong>massa molar</strong>, expressa normalmente em <strong>g/mol</strong>. Em cálculos escolares, ela é obtida somando as massas atômicas aproximadas dos elementos presentes na fórmula.</p>

      <div class="table-wrap"><table><thead><tr><th>Substância</th><th>Cálculo aproximado</th><th>Massa molar</th></tr></thead><tbody>
        <tr><td>H₂O</td><td>2 × 1,0 + 16,0</td><td>18,0 g/mol</td></tr>
        <tr><td>CO₂</td><td>12,0 + 2 × 16,0</td><td>44,0 g/mol</td></tr>
        <tr><td>NaCl</td><td>23,0 + 35,5</td><td>58,5 g/mol</td></tr>
        <tr><td>O₂</td><td>2 × 16,0</td><td>32,0 g/mol</td></tr>
      </tbody></table></div>

      <div class="note-box"><strong>Unidades contam a história</strong><p><strong>g</strong> é unidade de massa; <strong>mol</strong> é unidade de quantidade de substância; <strong>g/mol</strong> é massa molar. Misturar essas unidades sem interpretar seu significado é uma das principais fontes de erro.</p></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Calcule antes de seguir</strong><p>Usando C = 12,0 e O = 16,0, qual é a massa molar do CO₂?</p><div class="choice-row"><button type="button" data-choice="a">28,0 g/mol</button><button type="button" data-choice="b">44,0 g/mol</button><button type="button" data-choice="c">48,0 g/mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto: 12,0 + 2 × 16,0 = 44,0 g/mol." data-wrong-text="O índice 2 multiplica a contribuição do oxigênio."></div></div>
    </section>

    <section>
      <h3>4. O caminho central: massa ↔ mol ↔ partículas</h3>
      <p>Quase todos os cálculos introdutórios deste capítulo podem ser organizados em um mapa simples. Em vez de decorar várias fórmulas isoladas, identifique onde você está e para onde precisa ir.</p>

      <div class="visual-box">
        <strong class="card-title">Mapa de conversões</strong>
        <svg class="lesson-visual" viewBox="0 0 760 330" role="img" aria-label="Fluxograma de conversões entre massa em gramas, quantidade em mol e número de partículas. De massa para mol divide-se pela massa molar; de mol para massa multiplica-se pela massa molar. De mol para partículas multiplica-se pela constante de Avogadro; de partículas para mol divide-se por essa constante.">
          <defs><marker id="cap07ArrowMap" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="30" y="115" width="190" height="100" rx="16" fill="#eef5ff" stroke="#9dbce5"/><text x="125" y="153" text-anchor="middle" font-size="21" font-weight="900" fill="#104a9b">massa (g)</text><text x="125" y="184" text-anchor="middle" font-size="13" fill="#617087">grandeza medida</text>
          <rect x="285" y="115" width="190" height="100" rx="16" fill="#f3f8f1" stroke="#bad7b5"/><text x="380" y="153" text-anchor="middle" font-size="21" font-weight="900" fill="#35633c">mol</text><text x="380" y="184" text-anchor="middle" font-size="13" fill="#617087">ponte central</text>
          <rect x="540" y="115" width="190" height="100" rx="16" fill="#fff5eb" stroke="#e5c3a3"/><text x="635" y="153" text-anchor="middle" font-size="21" font-weight="900" fill="#7e3d18">partículas</text><text x="635" y="184" text-anchor="middle" font-size="13" fill="#617087">átomos, moléculas...</text>
          <path d="M220 145 H284" stroke="#1967d2" stroke-width="4" marker-end="url(#cap07ArrowMap)"/><path d="M285 188 H221" stroke="#6d4aff" stroke-width="4" marker-end="url(#cap07ArrowMap)"/>
          <text x="252" y="125" text-anchor="middle" font-size="13" fill="#104a9b">÷ M</text><text x="252" y="215" text-anchor="middle" font-size="13" fill="#5d42bd">× M</text>
          <path d="M475 145 H539" stroke="#1967d2" stroke-width="4" marker-end="url(#cap07ArrowMap)"/><path d="M540 188 H476" stroke="#6d4aff" stroke-width="4" marker-end="url(#cap07ArrowMap)"/>
          <text x="507" y="125" text-anchor="middle" font-size="13" fill="#104a9b">× Nₐ</text><text x="507" y="215" text-anchor="middle" font-size="13" fill="#5d42bd">÷ Nₐ</text>
          <text x="380" y="278" text-anchor="middle" font-size="14" fill="#617087">M = massa molar • Nₐ = 6,02214076 × 10²³ mol⁻¹</text>
        </svg>
      </div>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Massa → mol</strong><p><strong>n = m / M</strong><br>Quantidade de matéria = massa ÷ massa molar.</p></div>
        <div class="example-box"><strong class="card-title">Mol → partículas</strong><p><strong>N = n × Nₐ</strong><br>Número de entidades = mol × constante de Avogadro.</p></div>
        <div class="example-box"><strong class="card-title">Partículas → mol</strong><p><strong>n = N / Nₐ</strong><br>Mol = número de entidades ÷ constante de Avogadro.</p></div>
      </div>
    </section>

    <section>
      <h3>5. Exemplo completo: quantas moléculas existem em 36,0 g de água?</h3>
      <p><strong>Passo 1 — transformar massa em mol.</strong> A massa molar da água é aproximadamente 18,0 g/mol.</p>
      <div class="concept-flow"><div><strong>36,0 g</strong><span>massa</span></div><div class="flow-arrow">÷ 18,0 g/mol</div><div><strong>2,00 mol</strong><span>quantidade</span></div></div>
      <p><strong>Passo 2 — transformar mol em moléculas.</strong></p>
      <div class="concept-flow"><div><strong>2,00 mol</strong><span>H₂O</span></div><div class="flow-arrow">× 6,022 × 10²³</div><div><strong>≈ 1,20 × 10²⁴</strong><span>moléculas</span></div></div>
      <div class="ok-box"><strong>Resposta</strong><p>36,0 g de água correspondem a aproximadamente <strong>1,20 × 10²⁴ moléculas de H₂O</strong>, usando valores arredondados apropriados ao cálculo escolar.</p></div>
    </section>

    <section>
      <h3>6. O tipo de entidade muda o significado da resposta</h3>
      <p>A fórmula química informa quantos átomos de cada elemento existem em cada entidade representada. Portanto, 1 mol de moléculas de H₂O contém 2 mol de átomos de H e 1 mol de átomos de O.</p>

      <div class="visual-box"><strong class="card-title">Uma molécula e um mol obedecem à mesma proporção interna</strong>
        <div class="concept-flow"><div><strong>1 H₂O</strong><span>2 H + 1 O</span></div><div class="flow-arrow">→</div><div><strong>1 mol H₂O</strong><span>2 mol H + 1 mol O</span></div></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Leia a fórmula em escala molar</strong><p>Em 3 mol de moléculas de H₂O há quantos mol de átomos de hidrogênio?</p><div class="choice-row"><button type="button" data-choice="a">1 mol</button><button type="button" data-choice="b">3 mol</button><button type="button" data-choice="c">6 mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Cada mol de H₂O contém 2 mol de átomos de H; portanto, 3 × 2 = 6 mol de H." data-wrong-text="Use o índice 2 do H como proporção entre moléculas de água e átomos de hidrogênio."></div></div>
    </section>

    <section>
      <h3>7. Compostos iônicos exigem linguagem correta: unidades de fórmula</h3>
      <p>No Capítulo 04 vimos que NaCl sólido forma uma rede iônica, não um conjunto de moléculas discretas. Por isso, quando contamos entidades de NaCl, a linguagem mais rigorosa é <strong>unidades de fórmula</strong>.</p>
      <p>Assim, <strong>1 mol de NaCl</strong> corresponde a 6,02214076 × 10²³ unidades de fórmula de NaCl e, nessa quantidade, há 1 mol de Na⁺ e 1 mol de Cl⁻ quando a composição é considerada na proporção indicada pela fórmula.</p>
      <div class="note-box"><strong>O mol não muda a natureza da entidade</strong><p>Moléculas continuam sendo moléculas; átomos continuam sendo átomos; íons continuam sendo íons. O mol apenas informa <strong>quantas entidades</strong> estamos considerando.</p></div>
    </section>

    <section>
      <h3>8. Um laboratório não “mede mol” diretamente com a balança</h3>
      <p>Na prática, normalmente medimos massa e usamos a massa molar para calcular a quantidade de substância. Se precisamos preparar aproximadamente 0,50 mol de NaCl, por exemplo:</p>
      <div class="concept-flow"><div><strong>0,50 mol</strong><span>NaCl</span></div><div class="flow-arrow">× 58,5 g/mol</div><div><strong>29,25 g</strong><span>≈ 29,3 g</span></div></div>
      <p>Esse procedimento mostra por que o mol é útil: ele conecta uma quantidade microscópica definida a uma massa macroscópica que pode ser pesada.</p>

      <div id="cap07Investigator" class="visual-box">
        <strong class="card-title">Conversor conceitual — escolha o caminho correto</strong>
        <p>Selecione uma situação e observe qual ponte deve ser usada primeiro.</p>
        <div class="choice-row"><button type="button" data-case="water">36 g de H₂O → moléculas</button><button type="button" data-case="co2">3,01 × 10²³ moléculas de CO₂ → mol</button><button type="button" data-case="nacl">0,25 mol de NaCl → massa</button><button type="button" data-case="oxygen">64 g de O₂ → mol</button></div>
        <div id="cap07InvestigatorResult" class="ok-box"><strong>Escolha um caso.</strong><p>A resposta mostrará o caminho, não apenas o número final.</p></div>
      </div>
    </section>

    <section>
      <h3>9. Notação científica é parte da linguagem do mol</h3>
      <p>Números de partículas costumam ser enormes. Por isso, a <strong>notação científica</strong> não é decoração matemática: ela torna esses valores legíveis e calculáveis.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">6,02 × 10²³</strong><p>O expoente positivo indica um número extremamente grande. É a ordem de grandeza associada a 1 mol de entidades.</p></div><div class="example-box"><strong class="card-title">3,01 × 10²³</strong><p>É aproximadamente metade de 6,02 × 10²³; portanto, corresponde aproximadamente a 0,50 mol.</p></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Raciocínio antes da calculadora</strong><p>Se uma amostra contém aproximadamente 3,01 × 10²³ moléculas, quantos mol ela contém?</p><div class="choice-row"><button type="button" data-choice="a">0,50 mol</button><button type="button" data-choice="b">2,00 mol</button><button type="button" data-choice="c">6,02 mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. 3,01 é aproximadamente metade de 6,02, então a quantidade é cerca de 0,50 mol." data-wrong-text="Compare diretamente 3,01 × 10²³ com 6,02 × 10²³ entidades por mol."></div></div>
    </section>

    <section>
      <h3>10. O mol prepara a leitura quantitativa das equações químicas</h3>
      <p>Quando escrevemos <strong>2 H₂ + O₂ → 2 H₂O</strong>, os coeficientes podem ser interpretados não apenas como números de moléculas, mas também como proporções em mol:</p>
      <div class="concept-flow"><div><strong>2 mol H₂</strong><span>reagente</span></div><div class="flow-arrow">+</div><div><strong>1 mol O₂</strong><span>reagente</span></div><div class="flow-arrow">→</div><div><strong>2 mol H₂O</strong><span>produto</span></div></div>
      <p>Essa interpretação será a chave do próximo capítulo. A equação balanceada passa a funcionar como uma <strong>receita quantitativa</strong>: ela informa proporções entre quantidades de substância.</p>
      <div class="ok-box"><strong>Ponte para o próximo capítulo</strong><p>Agora sabemos converter <strong>massa ↔ mol ↔ partículas</strong>. No Capítulo 08 usaremos os coeficientes das equações para passar de <strong>mol de uma substância para mol de outra</strong>.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <h3>11. Checkpoint — você consegue atravessar da massa até as partículas?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Conceito</strong><p>O que é mol?</p><div class="choice-row"><button type="button" data-choice="a">Uma unidade de massa igual a 1 g</button><button type="button" data-choice="b">Uma unidade de quantidade de substância correspondente a um número definido de entidades</button><button type="button" data-choice="c">Uma molécula muito grande</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Mol é unidade de quantidade de substância." data-wrong-text="Mol não é massa nem uma entidade individual."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Avogadro</strong><p>Quantas entidades existem exatamente em 1 mol?</p><div class="choice-row"><button type="button" data-choice="a">6,02 × 10²</button><button type="button" data-choice="b">6,02 × 10¹²</button><button type="button" data-choice="c">6,02214076 × 10²³</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Esse valor define o mol no SI." data-wrong-text="Observe a ordem de grandeza: 10²³."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Massa molar</strong><p>Qual é aproximadamente a massa de 2 mol de O₂, usando O = 16,0?</p><div class="choice-row"><button type="button" data-choice="a">64,0 g</button><button type="button" data-choice="b">32,0 g</button><button type="button" data-choice="c">16,0 g</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O₂ possui 32,0 g/mol; 2 mol correspondem a 64,0 g." data-wrong-text="Primeiro encontre a massa molar de O₂ e depois multiplique por 2 mol."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Massa → mol</strong><p>Quantos mol existem em 88,0 g de CO₂, sabendo que M = 44,0 g/mol?</p><div class="choice-row"><button type="button" data-choice="a">0,50 mol</button><button type="button" data-choice="b">2,00 mol</button><button type="button" data-choice="c">44 mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto: 88,0 ÷ 44,0 = 2,00 mol." data-wrong-text="Para massa → mol, divida pela massa molar."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Mol → partículas</strong><p>Quantas moléculas existem aproximadamente em 2 mol de H₂O?</p><div class="choice-row"><button type="button" data-choice="a">3,01 × 10²³</button><button type="button" data-choice="b">6,02 × 10²³</button><button type="button" data-choice="c">1,20 × 10²⁴</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. 2 × 6,02 × 10²³ ≈ 1,20 × 10²⁴ moléculas." data-wrong-text="Multiplique a quantidade em mol pela constante de Avogadro."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>6. Fórmula</strong><p>Quantos mol de átomos de oxigênio existem em 3 mol de CO₂?</p><div class="choice-row"><button type="button" data-choice="a">3 mol</button><button type="button" data-choice="b">6 mol</button><button type="button" data-choice="c">9 mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Cada CO₂ possui 2 átomos de O; 3 mol de CO₂ correspondem a 6 mol de átomos de O." data-wrong-text="Use o índice 2 do oxigênio como proporção."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>7. Linguagem química</strong><p>Qual entidade é mais adequada ao falar de 1 mol de NaCl sólido?</p><div class="choice-row"><button type="button" data-choice="a">Unidades de fórmula de NaCl</button><button type="button" data-choice="b">Moléculas isoladas de NaCl na rede</button><button type="button" data-choice="c">Átomos de NaCl</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Compostos iônicos como NaCl são descritos por unidades de fórmula." data-wrong-text="NaCl sólido forma uma rede iônica, não moléculas discretas."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Estratégia</strong><p>Para converter diretamente 90 g de H₂O em número de moléculas, qual sequência é correta?</p><div class="choice-row"><button type="button" data-choice="a">gramas → partículas → mol</button><button type="button" data-choice="b">gramas → litros → partículas</button><button type="button" data-choice="c">gramas → mol → partículas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. O mol é a ponte central entre massa e número de entidades." data-wrong-text="Use a massa molar primeiro e a constante de Avogadro depois."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Uma amostra contém <strong>117 g de NaCl</strong>. Usando massa molar aproximada de 58,5 g/mol, responda: <strong>1)</strong> quantos mol de NaCl existem; <strong>2)</strong> quantas unidades de fórmula isso representa aproximadamente; <strong>3)</strong> quantos mol de íons Na⁺ e de íons Cl⁻ correspondem a essa quantidade; <strong>4)</strong> explique por que não é adequado chamar essas entidades de “moléculas de NaCl” no sólido.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>117 ÷ 58,5 = 2,00 mol de NaCl; aproximadamente 1,20 × 10²⁴ unidades de fórmula; 2,00 mol de Na⁺ e 2,00 mol de Cl⁻ na proporção indicada pela fórmula; e a explicação de que o NaCl sólido forma uma rede iônica extensa, não moléculas discretas.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo desenvolve quantidade de substância, mol, constante de Avogadro, massa molar, notação científica e conversões entre massa, mol e entidades químicas. Também relaciona fórmulas químicas às proporções de átomos e prepara a interpretação estequiométrica de equações balanceadas.</p></details>
  `;

  const cases = {
    water:{title:'36 g de H₂O → moléculas', text:'Primeiro: 36 ÷ 18 = 2 mol. Depois: 2 × 6,022 × 10²³ ≈ 1,20 × 10²⁴ moléculas. Caminho: massa → mol → partículas.'},
    co2:{title:'3,01 × 10²³ moléculas de CO₂ → mol', text:'Divida o número de moléculas pela constante de Avogadro. Como 3,01 × 10²³ é aproximadamente metade de 6,02 × 10²³, o resultado é cerca de 0,50 mol.'},
    nacl:{title:'0,25 mol de NaCl → massa', text:'Multiplique pela massa molar: 0,25 × 58,5 = 14,625 g, aproximadamente 14,6 g. Caminho: mol → massa.'},
    oxygen:{title:'64 g de O₂ → mol', text:'A massa molar de O₂ é 32 g/mol. Então 64 ÷ 32 = 2 mol. Caminho: massa → mol.'}
  };

  function initChapter(root) {
    const investigator = $('#cap07Investigator', root);
    const result = $('#cap07InvestigatorResult', root);
    if (!investigator || !result) return;
    investigator.querySelectorAll('[data-case]').forEach(button => {
      button.addEventListener('click', () => {
        const data = cases[button.dataset.case];
        investigator.querySelectorAll('[data-case]').forEach(item => item.classList.remove('is-correct'));
        button.classList.add('is-correct');
        result.innerHTML = `<strong>${data.title}</strong><p>${data.text}</p>`;
      });
    });
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Transformações e quantidades',
      technical:'Mol e partículas • Avogadro, massa molar e conversões',
      title:'Como contar partículas que não conseguimos enxergar?',
      objective:'<strong>Objetivo:</strong> compreender o mol como unidade de quantidade de substância, relacioná-lo à constante de Avogadro e à massa molar e realizar conversões entre massa, mol e entidades químicas.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('07 Mol e partículas', showChapter);
})();