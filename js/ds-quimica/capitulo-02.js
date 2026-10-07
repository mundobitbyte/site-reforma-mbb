(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Na preparação de uma feira de Ciências, seu grupo recebe uma tarefa: explicar como um espectroscópio consegue revelar informações sobre um gás que está fechado dentro de um tubo.</strong>
        <p>O professor liga um tubo de descarga contendo hidrogênio e apaga parte das luzes do laboratório. A olho nu, você vê apenas um brilho rosado. Quando olha pelo espectroscópio didático, porém, a luz aparece separada em algumas linhas coloridas bem definidas.</p>
        <p>O grupo percebe uma coisa importante: ninguém abriu o tubo para “ver os átomos por dentro”. Mesmo assim, aquele padrão de luz traz informação sobre o comportamento da matéria em uma escala que não enxergamos diretamente.</p>

        <div class="quick-question" data-choice-question data-correct="c">
          <strong>Antes de estudar os modelos, faça uma hipótese</strong>
          <p>Se não observamos diretamente a estrutura interna do átomo como observamos um objeto comum, como a Ciência pode descobrir algo sobre ela?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Escolhendo o desenho que parece mais realista</button>
            <button type="button" data-choice="b">Mantendo para sempre o primeiro modelo proposto</button>
            <button type="button" data-choice="c">Produzindo evidências experimentais e verificando qual modelo consegue explicá-las melhor</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o caminho. Os modelos atômicos mudaram porque novas evidências exigiram explicações melhores." data-wrong-text="A aparência do desenho não decide se um modelo científico é bom. Precisamos relacioná-lo a evidências e previsões."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> reconstruir a sequência de evidências que levou a Ciência de um átomo indivisível a um modelo com núcleo, elétrons e níveis de energia — e voltar ao espectro do hidrogênio para explicar por que aquelas linhas coloridas importam.</p>
      </div>
    </section>

    <section>
      <h3>1. Um modelo científico não é uma fotografia escondida da realidade</h3>
      <p>No capítulo anterior usamos o modelo de Dalton para representar a matéria como formada por partículas. Agora precisamos dar um passo além: entender por que os modelos mudaram.</p>
      <p>Um <strong>modelo científico</strong> é uma representação construída para explicar evidências, organizar ideias e fazer previsões. Ele pode usar desenhos, equações, analogias ou simulações. Nenhuma dessas representações precisa ser uma fotografia literal daquilo que está sendo estudado.</p>

      <div class="visual-box">
        <strong class="card-title">O que faz um modelo avançar?</strong>
        <svg class="lesson-visual" viewBox="0 0 760 250" role="img" aria-label="Fluxo didático mostrando evidência experimental levando a uma explicação por modelo, depois a previsões e novos testes. Se o modelo não explica novas evidências, ele precisa ser revisto.">
          <defs><marker id="cap02ArrowFlow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="25" y="70" width="150" height="90" rx="14" fill="#eef5ff" stroke="#9dbce5"/>
          <rect x="215" y="70" width="150" height="90" rx="14" fill="#f3f8f1" stroke="#bad7b5"/>
          <rect x="405" y="70" width="150" height="90" rx="14" fill="#fff5eb" stroke="#e5c3a3"/>
          <rect x="595" y="70" width="140" height="90" rx="14" fill="#f5f2ff" stroke="#c6b8f5"/>
          <text x="100" y="105" text-anchor="middle" font-size="16" font-weight="900" fill="#104a9b">Evidência</text><text x="100" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">o que foi medido</text>
          <text x="290" y="105" text-anchor="middle" font-size="16" font-weight="900" fill="#35633c">Modelo</text><text x="290" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">como explicamos</text>
          <text x="480" y="105" text-anchor="middle" font-size="16" font-weight="900" fill="#7e3d18">Previsão</text><text x="480" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">o que deve ocorrer</text>
          <text x="665" y="105" text-anchor="middle" font-size="16" font-weight="900" fill="#5d42bd">Novo teste</text><text x="665" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">confere ou desafia</text>
          <path d="M175 115 H214" stroke="#1967d2" stroke-width="4" marker-end="url(#cap02ArrowFlow)"/><path d="M365 115 H404" stroke="#1967d2" stroke-width="4" marker-end="url(#cap02ArrowFlow)"/><path d="M555 115 H594" stroke="#1967d2" stroke-width="4" marker-end="url(#cap02ArrowFlow)"/>
          <path d="M665 168 C665 215 290 215 290 168" fill="none" stroke="#6d4aff" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#cap02ArrowFlow)"/>
          <text x="470" y="235" text-anchor="middle" font-size="13" fill="#617087">Se novas evidências não cabem no modelo, a explicação precisa ser revista.</text>
        </svg>
      </div>

      <div class="ok-box"><strong>Regra para o capítulo inteiro</strong><p>Não pergunte apenas “qual era o desenho do átomo?”. Pergunte sempre: <strong>que evidência esse modelo precisava explicar e qual limite apareceu depois?</strong></p></div>
    </section>

    <section>
      <h3>2. Dalton: uma matéria formada por partículas</h3>
      <p>No início do século XIX, Dalton conseguiu organizar resultados de reações químicas com a ideia de que a matéria era formada por átomos. Em seu modelo, eles eram partículas maciças e indivisíveis; átomos de elementos diferentes tinham características diferentes e podiam se combinar em proporções definidas.</p>
      <p>Esse modelo ajudava a explicar por que a matéria se reorganiza em reações sem simplesmente surgir do nada ou desaparecer. Mas ele tratava o átomo como a menor unidade sem estrutura interna conhecida.</p>

      <div class="comparison-grid">
        <div class="example-box"><strong class="card-title">O que Dalton explicava bem</strong><p>Composição da matéria, combinação de elementos e reorganização de partículas em transformações químicas.</p></div>
        <div class="example-box"><strong class="card-title">O que o modelo ainda não explicava</strong><p>Fenômenos elétricos ligados à matéria e, mais tarde, evidências de que o átomo possuía partes menores.</p></div>
      </div>
    </section>

    <section>
      <h3>3. Thomson: o átomo tinha algo menor dentro dele</h3>
      <p>No fim do século XIX, experimentos com <strong>raios catódicos</strong> mostraram que um feixe produzido em tubos com gás rarefeito sofria desvio pela ação de campos elétricos e magnéticos. J. J. Thomson concluiu que o feixe era formado por partículas com carga negativa e massa muito menor que a do átomo.</p>
      <p>Essas partículas passaram a ser identificadas como <strong>elétrons</strong>. Se elétrons podiam ser retirados de diferentes materiais, o átomo já não podia ser considerado indivisível como no modelo de Dalton.</p>

      <div class="visual-box">
        <strong class="card-title">A evidência muda a pergunta</strong>
        <div class="concept-flow">
          <div><strong>Antes</strong><span>átomo indivisível</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>Evidência</strong><span>partícula negativa</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>Nova necessidade</strong><span>estrutura interna</span></div>
        </div>
        <p class="visual-caption">Thomson propôs um átomo com carga positiva distribuída e elétrons negativos inseridos nela. A famosa analogia do “pudim de passas” é apenas uma forma de visualizar essa distribuição.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>O que realmente obrigou a abandonar a indivisibilidade de Dalton?</strong>
        <p>Qual conclusão está diretamente ligada aos raios catódicos?</p>
        <div class="choice-row"><button type="button" data-choice="a">O átomo tinha órbitas circulares perfeitamente definidas</button><button type="button" data-choice="b">Existiam partículas negativas menores que o átomo</button><button type="button" data-choice="c">O núcleo continha nêutrons</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A descoberta do elétron mostrou que o átomo tinha estrutura interna." data-wrong-text="Procure a evidência que aparece diretamente nos experimentos com raios catódicos."></div>
      </div>
    </section>

    <section>
      <h3>4. Rutherford: quase tudo passou — e isso foi decisivo</h3>
      <p>Em 1909, no experimento conduzido por Geiger e Marsden sob orientação de Ernest Rutherford, partículas alfa foram lançadas contra uma folha muito fina de ouro. O resultado parecia, à primeira vista, pouco dramático: <strong>a maioria atravessou a folha com pequeno ou nenhum desvio</strong>. Mas uma pequena parte sofreu desvios grandes.</p>
      <p>Se a carga positiva estivesse espalhada por todo o átomo, como no modelo de Thomson, desvios tão intensos seriam difíceis de explicar. Rutherford propôs então que a carga positiva e grande parte da massa estavam concentradas em uma região muito pequena: o <strong>núcleo</strong>. O restante do volume atômico era majoritariamente espaço entre núcleo e elétrons.</p>

      <div class="visual-box">
        <strong class="card-title">Experimento da lâmina de ouro: a trajetória das partículas revelou a distribuição de carga</strong>
        <svg class="lesson-visual" viewBox="0 0 760 360" role="img" aria-label="Esquema do experimento de Rutherford. Um feixe de partículas alfa parte de uma fonte à esquerda e atinge uma folha fina de ouro ao centro. A maioria segue quase reta; poucas sofrem grandes desvios. À direita, a interpretação mostra um núcleo pequeno e positivo em um átomo de grande volume.">
          <defs><marker id="alphaArrow02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="35" y="135" width="90" height="90" rx="12" fill="#eef5ff" stroke="#9abbe5"/><text x="80" y="170" text-anchor="middle" font-size="15" font-weight="900" fill="#104a9b">Fonte</text><text x="80" y="195" text-anchor="middle" font-size="13" fill="#4b5b72">partículas α</text>
          <rect x="340" y="70" width="18" height="220" fill="#e0b43f" stroke="#9d7714"/><text x="349" y="52" text-anchor="middle" font-size="14" font-weight="800" fill="#7c5f12">folha de ouro</text>
          <path d="M125 160 H335" stroke="#1967d2" stroke-width="4" marker-end="url(#alphaArrow02)"/><path d="M125 180 H335" stroke="#1967d2" stroke-width="4" marker-end="url(#alphaArrow02)"/><path d="M125 200 H335" stroke="#1967d2" stroke-width="4" marker-end="url(#alphaArrow02)"/>
          <path d="M360 160 H520" stroke="#087f5b" stroke-width="4" marker-end="url(#alphaArrow02)"/><path d="M360 180 H520" stroke="#087f5b" stroke-width="4" marker-end="url(#alphaArrow02)"/><path d="M360 200 H520" stroke="#087f5b" stroke-width="4" marker-end="url(#alphaArrow02)"/>
          <path d="M360 145 Q420 80 500 75" fill="none" stroke="#b42318" stroke-width="4" marker-end="url(#alphaArrow02)"/>
          <path d="M360 215 Q425 290 500 300" fill="none" stroke="#b42318" stroke-width="4" marker-end="url(#alphaArrow02)"/>
          <text x="437" y="235" font-size="13" fill="#087f5b">maioria: pequeno desvio</text><text x="448" y="112" font-size="13" fill="#b42318">poucas: grande desvio</text>
          <circle cx="630" cy="185" r="102" fill="#f8fbff" stroke="#bfd0e5" stroke-dasharray="7 6"/><circle cx="630" cy="185" r="15" fill="#d85b50"/><text x="630" y="190" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">+</text>
          <circle cx="575" cy="132" r="7" fill="#1967d2"/><circle cx="690" cy="145" r="7" fill="#1967d2"/><circle cx="665" cy="245" r="7" fill="#1967d2"/>
          <text x="630" y="322" text-anchor="middle" font-size="13" fill="#617087">núcleo muito pequeno em relação ao volume representado</text>
        </svg>
      </div>

      <div class="note-box"><strong>Cuidado com uma frase comum</strong><p>Dizer que “o átomo é vazio” é uma simplificação. O ponto didático é que o núcleo ocupa uma região extremamente pequena do volume do átomo e que os elétrons não formam uma esfera maciça preenchendo todo esse espaço.</p></div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Leia a evidência, não decore o nome</strong>
        <p>O fato de a maioria das partículas alfa atravessar a folha com pouco desvio sugere principalmente que:</p>
        <div class="choice-row"><button type="button" data-choice="a">a maior parte do volume do átomo não concentra massa e carga positiva</button><button type="button" data-choice="b">o átomo é uma esfera sólida sem partes internas</button><button type="button" data-choice="c">os elétrons ficam dentro do núcleo</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exato. Os grandes desvios de poucas partículas apontam para uma região pequena, densa e positiva; a passagem da maioria mostra que essa região ocupa uma fração muito pequena do volume." data-wrong-text="Compare o que aconteceu com a maioria do feixe e com a pequena parcela que sofreu grandes desvios."></div>
      </div>
    </section>

    <section>
      <h3>5. Bohr: as linhas de luz exigiam níveis de energia</h3>
      <p>O modelo nuclear de Rutherford foi um avanço enorme, mas ainda havia perguntas abertas. Uma delas aparece justamente na situação da feira: por que o hidrogênio não produz qualquer cor possível, mas apenas determinadas linhas em seu espectro?</p>
      <p>Em 1913, Niels Bohr propôs que, no átomo de hidrogênio, o elétron só poderia ocupar determinados <strong>níveis de energia</strong>. Ao passar de um nível mais energético para outro menos energético, o átomo emite uma quantidade definida de energia na forma de luz. Diferentes transições produzem diferentes comprimentos de onda.</p>

      <div class="visual-box">
        <strong class="card-title">Do salto de energia à linha observada</strong>
        <svg class="lesson-visual" viewBox="0 0 760 360" role="img" aria-label="Representação didática do modelo de Bohr para hidrogênio. À esquerda há níveis de energia concêntricos e uma seta indicando um elétron passando de um nível externo para um interno, emitindo luz. À direita, quatro linhas visíveis do espectro do hidrogênio representam energias específicas, não um arco-íris contínuo.">
          <defs><marker id="bohrArrow02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#6d4aff"/></marker></defs>
          <circle cx="215" cy="180" r="18" fill="#d85b50"/><text x="215" y="186" text-anchor="middle" font-size="15" font-weight="900" fill="#fff">+</text>
          <circle cx="215" cy="180" r="62" fill="none" stroke="#aebbd0" stroke-width="2"/><circle cx="215" cy="180" r="105" fill="none" stroke="#aebbd0" stroke-width="2"/><circle cx="215" cy="180" r="145" fill="none" stroke="#aebbd0" stroke-width="2"/>
          <circle cx="328" cy="91" r="9" fill="#1967d2"/><text x="343" y="88" font-size="13" font-weight="800" fill="#104a9b">elétron</text>
          <path d="M326 101 Q290 112 265 137" fill="none" stroke="#6d4aff" stroke-width="4" marker-end="url(#bohrArrow02)"/>
          <text x="245" y="48" text-anchor="middle" font-size="14" font-weight="800" fill="#5d42bd">queda para nível menor</text>
          <path d="M355 155 C410 155 410 120 463 120" fill="none" stroke="#d49b00" stroke-width="5" marker-end="url(#bohrArrow02)"/><text x="410" y="105" text-anchor="middle" font-size="13" font-weight="800" fill="#8a6500">energia emitida</text>
          <rect x="490" y="88" width="225" height="190" rx="14" fill="#101626"/>
          <line x1="535" y1="110" x2="535" y2="255" stroke="#7936d1" stroke-width="9"/><line x1="580" y1="110" x2="580" y2="255" stroke="#4968ff" stroke-width="9"/><line x1="635" y1="110" x2="635" y2="255" stroke="#2aa8ff" stroke-width="9"/><line x1="690" y1="110" x2="690" y2="255" stroke="#e64b4b" stroke-width="9"/>
          <text x="602" y="306" text-anchor="middle" font-size="14" font-weight="800" fill="#104a9b">espectro visível do hidrogênio — representação</text>
          <text x="380" y="345" text-anchor="middle" font-size="13" fill="#617087">Linhas separadas indicam energias específicas; elas não formam um espectro contínuo.</text>
        </svg>
      </div>

      <div class="ok-box"><strong>Agora a situação inicial começa a fazer sentido</strong><p>O espectroscópio não “fotografa o átomo”. Ele separa a luz emitida. O padrão de linhas funciona como evidência de que as trocas de energia no átomo não acontecem de qualquer maneira.</p></div>
    </section>

    <section>
      <h3>6. O modelo atual não coloca elétrons em órbitas planetárias rígidas</h3>
      <p>O modelo de Bohr é extremamente útil para compreender níveis de energia e descreve muito bem o átomo de hidrogênio em vários contextos. Mas ele não é a descrição geral atual para todos os átomos.</p>
      <p>Ao longo da década de 1920, o desenvolvimento da Mecânica Quântica levou a uma descrição em que os elétrons são representados por <strong>orbitais</strong> e distribuições de probabilidade. Em vez de imaginar cada elétron como uma pequena esfera percorrendo uma trajetória circular conhecida, trabalhamos com regiões e estados associados à probabilidade de encontrá-lo.</p>
      <p>Em 1932, a identificação do <strong>nêutron</strong> por James Chadwick completou uma parte importante da descrição do núcleo e ajudou a explicar por que átomos do mesmo elemento podem apresentar massas diferentes, retomando a ideia de isótopos estudada no Capítulo 1.</p>

      <div class="comparison-grid">
        <div class="example-box"><strong class="card-title">Bohr — útil como modelo histórico e didático</strong><p>Níveis de energia definidos e transições que ajudam a explicar o espectro do hidrogênio.</p></div>
        <div class="example-box"><strong class="card-title">Modelo quântico — descrição atual</strong><p>Elétrons descritos por estados e orbitais; não por trajetórias planetárias clássicas determinadas.</p></div>
      </div>

      <div class="note-box"><strong>Não troque um desenho por outro para decorar</strong><p>A evolução dos modelos atômicos não é uma coleção de figuras: <strong>Dalton → Thomson → Rutherford → Bohr → modelo quântico</strong> representa uma sequência de problemas, evidências e novas explicações.</p></div>
    </section>

    <section>
      <h3>7. Laboratório de evidências: qual descoberta obrigou o modelo a mudar?</h3>
      <div class="interactive-lab" id="evidenceExplorer02">
        <div class="lab-heading"><h4>Explorador de evidências</h4></div>
        <div class="lab-controls">
          <label>Escolha uma evidência
            <select id="evidenceSelect02">
              <option value="cathode">Raios catódicos desviados por campos</option>
              <option value="gold">Grandes desvios de poucas partículas alfa</option>
              <option value="spectrum">Linhas específicas no espectro do hidrogênio</option>
              <option value="isotope">Mesma identidade química com massas diferentes</option>
            </select>
          </label>
          <div class="lab-result"><strong id="evidenceModel02">Thomson</strong><span id="evidenceMeaning02">A evidência exigiu admitir partículas negativas menores que o átomo.</span></div>
        </div>
        <p class="visual-caption">Use o seletor para perceber que cada mudança de modelo responde a um problema experimental diferente.</p>
      </div>
    </section>

    <section>
      <h3>8. Voltando à feira: como sabemos algo sobre o átomo sem “vê-lo por dentro”?</h3>
      <p>Seu grupo agora consegue explicar o tubo de hidrogênio sem recorrer à frase vaga “os cientistas descobriram”. O conhecimento foi construído por uma sequência de medições e testes.</p>

      <div class="analysis-steps">
        <div><span>1</span><strong>Observamos</strong><p>fenômenos macroscópicos: feixes, desvios, luz, espectros.</p></div>
        <div><span>2</span><strong>Medimos</strong><p>trajetórias, cargas, frequências e energias.</p></div>
        <div><span>3</span><strong>Propomos</strong><p>modelos que organizam essas evidências.</p></div>
        <div><span>4</span><strong>Testamos</strong><p>se o modelo explica e prevê outros resultados.</p></div>
        <div><span>5</span><strong>Revisamos</strong><p>quando novas evidências mostram limites.</p></div>
      </div>

      <div class="ok-box"><strong>Resposta completa à pergunta do capítulo</strong><p>Não conhecemos o átomo porque alguém conseguiu tirar uma fotografia simples de sua estrutura interna. Conhecemos aspectos de sua estrutura porque diferentes experimentos produziram evidências reproduzíveis. Modelos sucessivos foram propostos, testados e modificados para explicar essas evidências. É por isso que um espectro de luz, o desvio de uma partícula ou um feixe elétrico podem revelar informações sobre uma escala invisível aos nossos olhos.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <h3>9. Checkpoint — explique antes de decorar</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Dalton</strong><p>Qual ideia representa melhor a contribuição de Dalton para este percurso?</p><div class="choice-row"><button type="button" data-choice="a">Elétrons em orbitais probabilísticos</button><button type="button" data-choice="b">Matéria formada por átomos que se combinam e se reorganizam</button><button type="button" data-choice="c">Núcleo com prótons e nêutrons já conhecidos</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Certo. Dalton forneceu um modelo de partículas muito poderoso para explicar composição e reações." data-wrong-text="Volte ao problema que Dalton conseguia explicar no início do século XIX."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Thomson</strong><p>A descoberta do elétron mostrou que:</p><div class="choice-row"><button type="button" data-choice="a">o átomo tinha estrutura interna</button><button type="button" data-choice="b">o núcleo ocupava quase todo o volume do átomo</button><button type="button" data-choice="c">a massa atômica era sempre inteira</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A indivisibilidade do átomo de Dalton não podia mais ser mantida." data-wrong-text="Pense no que significa encontrar uma partícula menor que o átomo."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Rutherford</strong><p>Qual resultado foi mais inesperado no experimento da lâmina de ouro?</p><div class="choice-row"><button type="button" data-choice="a">Todas as partículas pararam na folha</button><button type="button" data-choice="b">Nenhuma partícula mudou de direção</button><button type="button" data-choice="c">Uma pequena parcela sofreu desvios muito grandes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. Esses grandes desvios exigiam uma concentração intensa de carga positiva e massa em uma região pequena." data-wrong-text="A maioria atravessar era importante, mas os grandes desvios de poucas partículas desafiaram diretamente o modelo anterior."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Núcleo</strong><p>No modelo nuclear, onde fica concentrada a carga positiva do átomo?</p><div class="choice-row"><button type="button" data-choice="a">Distribuída uniformemente por todo o átomo</button><button type="button" data-choice="b">Em uma pequena região central chamada núcleo</button><button type="button" data-choice="c">Somente nos elétrons</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto." data-wrong-text="Retome a interpretação dada aos grandes desvios das partículas alfa."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Bohr</strong><p>Por que o espectro de linhas do hidrogênio foi importante?</p><div class="choice-row"><button type="button" data-choice="a">Porque indicava trocas de energia em valores definidos</button><button type="button" data-choice="b">Porque mostrava um arco-íris contínuo com todas as energias possíveis</button><button type="button" data-choice="c">Porque provava que elétrons não existem</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Linhas separadas apontam para energias específicas." data-wrong-text="Observe novamente a diferença entre linhas discretas e um espectro contínuo."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Modelo atual</strong><p>Qual afirmação está mais próxima da descrição atual?</p><div class="choice-row"><button type="button" data-choice="a">Elétrons são pequenas bolas em órbitas planetárias perfeitamente conhecidas</button><button type="button" data-choice="b">O átomo continua indivisível</button><button type="button" data-choice="c">Elétrons são descritos por estados e orbitais associados a probabilidades</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Órbitas circulares rígidas não são a descrição quântica geral." data-wrong-text="Não confunda o modelo didático de Bohr com a descrição quântica atual."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Natureza da Ciência</strong><p>Quando um modelo científico é substituído ou ampliado, isso significa que:</p><div class="choice-row"><button type="button" data-choice="a">a Ciência fracassou e voltou ao zero</button><button type="button" data-choice="b">novas evidências mostraram limites e exigiram uma explicação mais abrangente</button><button type="button" data-choice="c">os modelos anteriores nunca explicaram nada</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Modelos anteriores podem continuar úteis em determinados contextos, mesmo quando sabemos que têm limites." data-wrong-text="Pense em Dalton e Bohr: ambos continuam úteis, mas não são a descrição mais completa disponível."></div></div>

      <div class="challenge-box"><strong>8. Desafio MbB — construa a cadeia de evidências</strong><p>Um visitante da feira diz: “Eu não acredito em modelos atômicos porque ninguém enxerga um átomo como enxerga uma bola.” Responda em até seis frases usando pelo menos <strong>duas evidências experimentais diferentes</strong> estudadas neste capítulo e explique por que modelo científico não significa fotografia.</p><details><summary>Critério para conferir sua resposta</summary><p>Uma boa resposta relaciona evidência e modelo. Exemplos: raios catódicos → elétron; grandes desvios na lâmina de ouro → núcleo; espectro de linhas do hidrogênio → níveis de energia. Também explica que modelos representam e organizam evidências, podendo ser revisados.</p></details></div>
    </section>

    <section>
      <h3>10. Uma observação possível em aula — com segurança</h3>
      <div class="experiment-box">
        <strong class="card-title">Se a escola possuir espectroscópio didático</strong>
        <p>Com orientação do professor, compare os padrões observados em fontes de luz apropriadas ao equipamento e registre se o espectro parece contínuo, formado por bandas ou por linhas. O objetivo não é “ver átomos”, mas perceber que diferentes fontes podem produzir padrões diferentes.</p>
        <p class="safety-note"><strong>Segurança:</strong> nunca olhe diretamente para o Sol por meio de instrumentos ópticos e não use lasers como fonte de observação direta para os olhos. Tubos de descarga e fontes elétricas devem ser operados pelo professor conforme o equipamento disponível.</p>
      </div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p><strong>Vida, Terra e Cosmos — Tabela Periódica e constituição da matéria:</strong> evolução dos modelos atômicos. O capítulo também mobiliza a análise histórica de modelos, teorias e leis científicas.</p>
    </details>
  `;

  function initEvidenceExplorer(root) {
    const select = $('#evidenceSelect02', root);
    const model = $('#evidenceModel02', root);
    const meaning = $('#evidenceMeaning02', root);
    if (!select || !model || !meaning) return;

    const data = {
      cathode: ['Thomson', 'A evidência exigiu admitir partículas negativas menores que o átomo: os elétrons.'],
      gold: ['Rutherford', 'Grandes desvios de poucas partículas alfa exigiram uma região muito pequena, densa e positiva: o núcleo.'],
      spectrum: ['Bohr', 'Linhas específicas no espectro do hidrogênio apoiaram a ideia de níveis de energia definidos.'],
      isotope: ['Modelo nuclear ampliado', 'Átomos do mesmo elemento podem manter o mesmo número de prótons e ter diferentes números de nêutrons, produzindo isótopos com massas diferentes.']
    };

    const update = () => {
      const [title, text] = data[select.value];
      model.textContent = title;
      meaning.textContent = text;
    };

    select.addEventListener('change', update);
    update();
  }

  function showLesson() {
    MBB.showLesson({
      unit:'Vida, Terra e Cosmos',
      technical:'Evolução dos modelos atômicos',
      title:'Como sabemos como é um átomo se ninguém consegue vê-lo?',
      objective:'<strong>Propósito:</strong> reconstruir a evolução dos modelos atômicos a partir das evidências que exigiram cada mudança, distinguindo representação científica de fotografia literal.',
      html:lessonHtml,
      init:(root) => initEvidenceExplorer(root)
    });
  }

  MBB.enableChapter?.('02 Modelos atômicos', showLesson);
})();
