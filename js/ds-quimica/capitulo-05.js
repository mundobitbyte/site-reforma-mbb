(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Na montagem de uma feira de Ciências, três grupos chegam com demonstrações muito diferentes: gelo derretendo num copo, um comprimido efervescente liberando bolhas na água e lã de aço que foi aquecida e mudou de aparência.</strong>
        <p>Todos dizem que ocorreu uma “transformação”. Mas o professor faz uma pergunta decisiva: <strong>em quais casos surgiram substâncias novas?</strong> A resposta não pode depender apenas do que parece diferente aos olhos. Gelo e água líquida têm aparência diferente, mas continuam sendo H₂O. Já uma reação química altera a composição das substâncias envolvidas.</p>
        <p>O desafio fica maior quando percebemos que alguns sinais enganam. Bolhas podem indicar formação de gás, mas também aparecem quando a água ferve. Uma mudança de cor pode acompanhar uma reação, mas também pode resultar apenas da mistura de pigmentos.</p>

        <div class="quick-question" data-choice-question data-correct="c">
          <strong>Faça uma hipótese antes de continuar</strong>
          <p>Qual critério define melhor uma reação química?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Qualquer mudança visível no material</button>
            <button type="button" data-choice="b">Qualquer transformação que produza bolhas</button>
            <button type="button" data-choice="c">Uma transformação em que a composição muda e novas substâncias são formadas</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o critério central. Os sinais observáveis ajudam a investigar, mas a definição está ligada à formação de novas substâncias." data-wrong-text="Nem toda mudança visível é química. Compare gelo derretendo com uma transformação que realmente altera a composição."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> descobrir <strong>como reconhecer uma reação química, como representá-la e como usar evidências sem transformar sinais comuns em regras automáticas</strong>.</p>
      </div>
    </section>

    <section>
      <h3>1. Transformação física muda estado ou organização; reação química muda composição</h3>
      <p>Uma <strong>transformação física</strong> pode alterar estado físico, forma, tamanho ou organização do material sem necessariamente produzir uma nova substância. Quando o gelo derrete, as partículas de H₂O continuam sendo H₂O.</p>
      <p>Numa <strong>reação química</strong>, os átomos passam a integrar novas combinações. Ligações são rompidas e outras são formadas, produzindo substâncias com composição e propriedades diferentes das substâncias iniciais.</p>

      <div class="visual-box">
        <strong class="card-title">A diferença aparece quando olhamos para as partículas</strong>
        <svg class="lesson-visual" viewBox="0 0 760 330" role="img" aria-label="Comparação entre transformação física e reação química. Na transformação física, as mesmas moléculas AB aparecem antes organizadas e depois mais afastadas, sem mudar a composição. Na reação química, partículas A2 e B2 aparecem antes e pares AB aparecem depois, mostrando nova combinação dos átomos.">
          <defs><marker id="cap05ArrowPhysicalChemical" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <text x="190" y="35" text-anchor="middle" font-size="17" font-weight="900" fill="#104a9b">Transformação física</text>
          <g transform="translate(45 70)">
            <g><circle cx="35" cy="40" r="20" fill="#1967d2"/><circle cx="72" cy="40" r="20" fill="#d08700"/><text x="35" y="46" text-anchor="middle" fill="#fff" font-weight="900">A</text><text x="72" y="46" text-anchor="middle" fill="#fff" font-weight="900">B</text></g>
            <g><circle cx="35" cy="95" r="20" fill="#1967d2"/><circle cx="72" cy="95" r="20" fill="#d08700"/></g>
            <g><circle cx="105" cy="40" r="20" fill="#1967d2"/><circle cx="142" cy="40" r="20" fill="#d08700"/></g>
            <g><circle cx="105" cy="95" r="20" fill="#1967d2"/><circle cx="142" cy="95" r="20" fill="#d08700"/></g>
          </g>
          <path d="M220 125 H290" stroke="#1967d2" stroke-width="4" marker-end="url(#cap05ArrowPhysicalChemical)"/>
          <g transform="translate(300 70)">
            <g><circle cx="20" cy="25" r="20" fill="#1967d2"/><circle cx="57" cy="25" r="20" fill="#d08700"/></g>
            <g><circle cx="115" cy="92" r="20" fill="#1967d2"/><circle cx="152" cy="92" r="20" fill="#d08700"/></g>
            <g><circle cx="65" cy="145" r="20" fill="#1967d2"/><circle cx="102" cy="145" r="20" fill="#d08700"/></g>
          </g>
          <text x="190" y="285" text-anchor="middle" font-size="13" fill="#617087">mesmas unidades AB; muda a organização</text>

          <line x1="490" y1="55" x2="490" y2="295" stroke="#d6dee8" stroke-width="2"/>
          <text x="625" y="35" text-anchor="middle" font-size="17" font-weight="900" fill="#7e3d18">Reação química</text>
          <g transform="translate(520 85)">
            <circle cx="25" cy="35" r="20" fill="#1967d2"/><circle cx="62" cy="35" r="20" fill="#1967d2"/>
            <circle cx="25" cy="105" r="20" fill="#d08700"/><circle cx="62" cy="105" r="20" fill="#d08700"/>
          </g>
          <path d="M610 155 H665" stroke="#1967d2" stroke-width="4" marker-end="url(#cap05ArrowPhysicalChemical)"/>
          <g transform="translate(670 95)">
            <circle cx="18" cy="25" r="20" fill="#1967d2"/><circle cx="55" cy="25" r="20" fill="#d08700"/>
            <circle cx="18" cy="90" r="20" fill="#1967d2"/><circle cx="55" cy="90" r="20" fill="#d08700"/>
          </g>
          <text x="625" y="285" text-anchor="middle" font-size="13" fill="#617087">os mesmos átomos aparecem em novas combinações</text>
        </svg>
        <p class="visual-caption">As letras e cores são convenções. O objetivo é mostrar conservação dos tipos de átomos e mudança de combinação, não a aparência real das partículas.</p>
      </div>

      <div class="ok-box"><strong>Resposta clara</strong><p>Uma reação química é uma transformação em que <strong>as substâncias iniciais são convertidas em outras substâncias</strong>. Em processos químicos comuns, os núcleos dos átomos não mudam; o que muda é a organização eletrônica e a forma como os átomos estão ligados.</p></div>
    </section>

    <section>
      <h3>2. Reagentes entram na transformação; produtos resultam dela</h3>
      <p>Chamamos de <strong>reagentes</strong> as substâncias presentes no início da representação de uma reação e de <strong>produtos</strong> as substâncias formadas. Em uma equação química, uma seta indica o sentido representado da transformação.</p>

      <div class="concept-flow">
        <div><strong>Reagentes</strong><span>substâncias iniciais</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Transformação</strong><span>rearranjo de átomos</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Produtos</strong><span>novas substâncias</span></div>
      </div>

      <div class="note-box"><strong>A seta não significa “é igual a”</strong><p>Na escrita química, a seta indica que os reagentes <strong>formam</strong> os produtos nas condições consideradas. Ela não é um sinal de igualdade matemática entre substâncias.</p></div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Leia a linguagem</strong>
        <p>Na representação 2 H₂ + O₂ → 2 H₂O, quais são os reagentes?</p>
        <div class="choice-row"><button type="button" data-choice="a">H₂ e O₂</button><button type="button" data-choice="b">Somente H₂O</button><button type="button" data-choice="c">H₂, O₂ e H₂O são todos produtos</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. As espécies à esquerda da seta são os reagentes na equação escrita nesse sentido." data-wrong-text="Observe de que lado da seta cada substância aparece."></div>
      </div>
    </section>

    <section>
      <h3>3. Evidências ajudam a detectar reações — mas nenhuma delas deve ser usada mecanicamente</h3>
      <p>Em muitas situações não acompanhamos diretamente a escala microscópica. Por isso investigamos <strong>evidências macroscópicas</strong> que podem indicar formação de novas substâncias.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Evidência possível</th><th>O que pode indicar</th><th>Cuidado necessário</th></tr></thead>
          <tbody>
            <tr><td>Formação de gás</td><td>Um produto gasoso pode ter sido formado.</td><td>Bolhas também aparecem numa mudança física, como ebulição.</td></tr>
            <tr><td>Formação de sólido</td><td>Um precipitado pode surgir a partir de espécies dissolvidas.</td><td>Um sólido também pode aparecer por cristalização física.</td></tr>
            <tr><td>Mudança de cor</td><td>Novas espécies químicas podem absorver luz de modo diferente.</td><td>Misturar corantes também muda a cor sem exigir reação.</td></tr>
            <tr><td>Variação de temperatura</td><td>A transformação pode liberar ou absorver energia.</td><td>Aquecimento e resfriamento também ocorrem em processos físicos.</td></tr>
            <tr><td>Emissão de luz</td><td>Energia pode ser liberada durante uma transformação química.</td><td>Nem toda emissão luminosa é causada por reação química.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note-box"><strong>Ciência não trabalha com “vi bolha, então é reação”</strong><p>Uma evidência ganha força quando é analisada junto com o contexto, as condições do sistema e outros dados. Em situações mais rigorosas, a identificação de produtos pode exigir medidas específicas, como testes químicos, espectroscopia ou outras técnicas instrumentais.</p></div>
    </section>

    <section>
      <h3>4. Investigue três casos antes de decorar qualquer classificação</h3>
      <p>Use os três casos da feira para testar seu critério. O objetivo não é clicar no “nome certo”, mas justificar a decisão pela composição.</p>

      <div id="cap05Investigator" class="visual-box">
        <strong class="card-title">Investigador de transformações</strong>
        <div class="choice-row">
          <button type="button" data-case="ice">Gelo derretendo</button>
          <button type="button" data-case="tablet">Comprimido efervescente em água</button>
          <button type="button" data-case="steel">Lã de aço aquecida ao ar</button>
        </div>
        <div id="cap05InvestigatorResult" class="ok-box" aria-live="polite"><strong>Escolha um caso.</strong><p>Depois compare o que mudou na escala macroscópica com o que precisa ter acontecido na composição.</p></div>
      </div>

      <div class="note-box"><strong>Segurança faz parte da Química</strong><p>Observar uma demonstração não significa que todo experimento deva ser repetido fora de um ambiente adequado. Aquecimento, combustão, reagentes desconhecidos e formação de gases exigem avaliação de risco, ventilação, proteção e orientação responsável.</p></div>
    </section>

    <section>
      <h3>5. Uma equação química é um modelo simbólico da transformação</h3>
      <p>Uma reação pode ser descrita em palavras, representada por partículas e escrita por meio de fórmulas. Cada forma destaca uma parte do fenômeno.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Em palavras</strong><p>hidrogênio + oxigênio → água</p></div>
        <div class="example-box"><strong class="card-title">Com fórmulas</strong><p>2 H₂ + O₂ → 2 H₂O</p></div>
        <div class="example-box"><strong class="card-title">Com partículas</strong><p>duas unidades H₂ e uma O₂ reorganizam seus átomos formando duas unidades H₂O.</p></div>
      </div>

      <div class="visual-box">
        <strong class="card-title">O que uma equação balanceada está mostrando</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Modelo de partículas para a equação 2 H2 mais O2 formando 2 H2O. À esquerda aparecem duas moléculas H2 e uma molécula O2. À direita aparecem duas moléculas H2O. Há quatro átomos de hidrogênio e dois de oxigênio em ambos os lados.">
          <defs><marker id="cap05ArrowEquation" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <text x="190" y="42" text-anchor="middle" font-size="16" font-weight="900" fill="#104a9b">Reagentes</text>
          <g fill="#e8eef6" stroke="#617087" stroke-width="2"><circle cx="95" cy="110" r="24"/><circle cx="143" cy="110" r="24"/><circle cx="95" cy="185" r="24"/><circle cx="143" cy="185" r="24"/></g>
          <g fill="#f3b3ad" stroke="#b42318" stroke-width="2"><circle cx="225" cy="148" r="27"/><circle cx="279" cy="148" r="27"/></g>
          <g font-size="14" font-weight="900" text-anchor="middle"><text x="119" y="115">H₂</text><text x="119" y="190">H₂</text><text x="252" y="153" fill="#7d1b14">O₂</text></g>
          <path d="M330 150 H430" stroke="#1967d2" stroke-width="5" marker-end="url(#cap05ArrowEquation)"/>
          <text x="565" y="42" text-anchor="middle" font-size="16" font-weight="900" fill="#35633c">Produtos</text>
          <g>
            <circle cx="525" cy="125" r="27" fill="#f3b3ad" stroke="#b42318" stroke-width="2"/><circle cx="480" cy="105" r="21" fill="#e8eef6" stroke="#617087" stroke-width="2"/><circle cx="570" cy="105" r="21" fill="#e8eef6" stroke="#617087" stroke-width="2"/>
            <circle cx="525" cy="210" r="27" fill="#f3b3ad" stroke="#b42318" stroke-width="2"/><circle cx="480" cy="190" r="21" fill="#e8eef6" stroke="#617087" stroke-width="2"/><circle cx="570" cy="190" r="21" fill="#e8eef6" stroke="#617087" stroke-width="2"/>
          </g>
          <text x="650" y="125" font-size="14" fill="#617087">4 H</text><text x="650" y="150" font-size="14" fill="#617087">2 O</text>
          <text x="190" y="270" text-anchor="middle" font-size="13" fill="#617087">antes: 4 H e 2 O</text><text x="565" y="270" text-anchor="middle" font-size="13" fill="#617087">depois: 4 H e 2 O</text>
        </svg>
      </div>

      <div class="ok-box"><strong>Conexão com o próximo capítulo</strong><p>Perceba algo importante: os átomos foram reorganizados, mas a contagem de cada elemento permaneceu a mesma. No Capítulo 06 veremos por que isso está ligado à <strong>conservação da massa</strong>.</p></div>
    </section>

    <section>
      <h3>6. Coeficiente e índice não podem ser tratados como a mesma coisa</h3>
      <p>Na equação <strong>2 H₂ + O₂ → 2 H₂O</strong>, o número grande colocado antes de uma fórmula é o <strong>coeficiente estequiométrico</strong>. Ele indica quantas unidades daquela espécie estão sendo representadas.</p>
      <p>Já o número pequeno escrito dentro da fórmula é um <strong>índice</strong>. Ele faz parte da identidade da substância representada. Alterar H₂O para H₂O₂ não significa “balancear melhor”: significa trocar água por peróxido de hidrogênio.</p>

      <div class="comparison-grid">
        <div class="example-box"><strong class="card-title">2 H₂O</strong><p>Coeficiente 2: representa duas unidades de H₂O. Cada unidade continua sendo água.</p></div>
        <div class="example-box"><strong class="card-title">H₂O₂</strong><p>Índice 2 no oxigênio: representa outra substância, o peróxido de hidrogênio.</p></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Proteja a identidade das substâncias</strong>
        <p>Ao balancear uma equação, o que pode ser ajustado?</p>
        <div class="choice-row"><button type="button" data-choice="a">Os símbolos dos elementos</button><button type="button" data-choice="b">Os índices dentro das fórmulas, livremente</button><button type="button" data-choice="c">Os coeficientes colocados antes das fórmulas</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Os coeficientes alteram a quantidade representada; mudar índices altera a substância." data-wrong-text="A fórmula identifica a espécie química. Para balancear, preserve as fórmulas e ajuste as quantidades representadas."></div>
      </div>
    </section>

    <section>
      <h3>7. Balancear é representar corretamente a reorganização dos átomos</h3>
      <p>Considere a formação de água escrita inicialmente como <strong>H₂ + O₂ → H₂O</strong>. Há dois átomos de oxigênio à esquerda e apenas um à direita. A escrita, portanto, não representa corretamente a contagem de partículas.</p>
      <p>Ajustamos os <strong>coeficientes</strong>, não as fórmulas:</p>

      <div class="concept-flow">
        <div><strong>H₂ + O₂ → H₂O</strong><span>não balanceada</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>2 H₂ + O₂ → 2 H₂O</strong><span>balanceada</span></div>
      </div>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Elemento</th><th>Reagentes</th><th>Produtos</th></tr></thead>
          <tbody><tr><td>H</td><td>4 átomos</td><td>4 átomos</td></tr><tr><td>O</td><td>2 átomos</td><td>2 átomos</td></tr></tbody>
        </table>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Faça uma contagem simples</strong>
        <p>Qual opção balanceia N₂ + H₂ → NH₃?</p>
        <div class="choice-row"><button type="button" data-choice="a">N₂ + H₂ → N₂H₂</button><button type="button" data-choice="b">N₂ + 3 H₂ → 2 NH₃</button><button type="button" data-choice="c">N₃ + H₂ → NH₃</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Há 2 N e 6 H nos dois lados, sem alterar as fórmulas N₂, H₂ e NH₃." data-wrong-text="Conte N e H separadamente e ajuste apenas os coeficientes."></div>
      </div>
    </section>

    <section>
      <h3>8. Algumas reações podem ser agrupadas por padrões — sem decorar rótulos antes de entender o processo</h3>
      <p>Classificações são úteis para reconhecer estruturas recorrentes. Elas não substituem a análise das substâncias nem explicam sozinhas por que a reação ocorre.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Padrão introdutório</th><th>Forma geral</th><th>Ideia</th></tr></thead>
          <tbody>
            <tr><td>Síntese ou combinação</td><td>A + B → AB</td><td>Espécies mais simples formam um produto combinado.</td></tr>
            <tr><td>Decomposição</td><td>AB → A + B</td><td>Uma espécie origina produtos mais simples.</td></tr>
            <tr><td>Deslocamento simples</td><td>A + BC → AC + B</td><td>Uma espécie desloca outra numa combinação.</td></tr>
            <tr><td>Dupla troca</td><td>AB + CD → AD + CB</td><td>Há reorganização entre espécies, frequentemente em solução.</td></tr>
            <tr><td>Combustão</td><td>combustível + oxidante → produtos</td><td>Reação rápida de oxidação, frequentemente com liberação de energia.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note-box"><strong>Cuidado com a combustão</strong><p>Combustão não significa apenas “algo pegando fogo” no sentido cotidiano. É uma classe de reações de oxidação rápida. Além disso, combustões reais podem produzir produtos diferentes conforme combustível, disponibilidade de oxigênio e condições do processo.</p></div>
    </section>

    <section>
      <h3>9. Reações também envolvem energia</h3>
      <p>Romper e formar interações químicas envolve energia. Quando o balanço global libera energia para o ambiente, classificamos o processo como <strong>exotérmico</strong>. Quando o sistema absorve energia do ambiente, falamos em processo <strong>endotérmico</strong>.</p>
      <p>Isso não significa que toda reação exotérmica comece espontaneamente assim que os reagentes se encontram. Muitas precisam superar uma barreira inicial de energia, chamada <strong>energia de ativação</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Uma reação pode precisar de um “empurrão” inicial mesmo quando libera energia no total</strong>
        <svg class="lesson-visual" viewBox="0 0 760 310" role="img" aria-label="Diagrama qualitativo de energia para uma reação exotérmica. Os reagentes começam em um nível de energia, a curva sobe até uma barreira de energia de ativação e depois desce para produtos em nível energético mais baixo.">
          <line x1="90" y1="255" x2="700" y2="255" stroke="#617087" stroke-width="2"/>
          <line x1="90" y1="255" x2="90" y2="50" stroke="#617087" stroke-width="2"/>
          <text x="395" y="295" text-anchor="middle" font-size="14" fill="#617087">avanço da reação →</text>
          <text x="30" y="155" transform="rotate(-90 30 155)" text-anchor="middle" font-size="14" fill="#617087">energia</text>
          <path d="M110 175 C220 175 245 75 365 70 C480 75 505 215 650 215" fill="none" stroke="#1967d2" stroke-width="5"/>
          <line x1="145" y1="175" x2="145" y2="85" stroke="#b42318" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="150" y="105" font-size="13" fill="#b42318">energia de ativação</text>
          <text x="150" y="160" font-size="14" font-weight="900" fill="#104a9b">reagentes</text>
          <text x="585" y="235" font-size="14" font-weight="900" fill="#35633c">produtos</text>
          <text x="425" y="42" text-anchor="middle" font-size="13" fill="#617087">representação qualitativa, não uma reação específica</text>
        </svg>
      </div>

      <div class="note-box"><strong>Temperatura é evidência, não definição</strong><p>Se uma mistura esquenta ou esfria, isso pode ser uma pista de transformação energética. Para concluir que ocorreu reação química, precisamos relacionar a observação à formação de novas substâncias.</p></div>
    </section>

    <section>
      <h3>10. Volte aos três casos: agora a explicação deve ser microscópica e macroscópica</h3>
      <div class="three-col">
        <div class="example-box"><strong class="card-title">Gelo derretendo</strong><p><strong>Macro:</strong> sólido vira líquido.<br><strong>Micro:</strong> continuam existindo moléculas H₂O; muda principalmente a organização e mobilidade.</p></div>
        <div class="example-box"><strong class="card-title">Efervescência</strong><p><strong>Macro:</strong> surgem bolhas.<br><strong>Micro:</strong> no caso do comprimido, componentes dissolvidos reagem e há formação de CO₂, além de outros produtos.</p></div>
        <div class="example-box"><strong class="card-title">Lã de aço aquecida</strong><p><strong>Macro:</strong> aparência e massa podem mudar.<br><strong>Micro:</strong> ferro reage com oxigênio formando óxidos; átomos de O passam a integrar o material.</p></div>
      </div>

      <div class="ok-box"><strong>A ideia que fecha o capítulo</strong><p><strong>Observar → levantar evidências → representar reagentes e produtos → acompanhar a reorganização dos átomos → verificar se a equação preserva a contagem de cada elemento.</strong> Essa sequência transforma uma demonstração visual em raciocínio químico.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <h3>11. Checkpoint — você consegue reconhecer e representar uma reação?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Definição</strong><p>O que caracteriza uma reação química?</p><div class="choice-row"><button type="button" data-choice="a">Qualquer mudança de estado físico</button><button type="button" data-choice="b">Formação de novas substâncias por reorganização dos átomos</button><button type="button" data-choice="c">Qualquer mudança de aparência</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A mudança essencial está na composição das substâncias." data-wrong-text="Mudanças físicas também podem alterar aparência e estado sem formar novas substâncias."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Evidência</strong><p>Bolhas provam sozinhas que ocorreu uma reação?</p><div class="choice-row"><button type="button" data-choice="a">Sim, sempre</button><button type="button" data-choice="b">Sim, desde que sejam muitas</button><button type="button" data-choice="c">Não. Elas podem ser evidência de gás formado, mas também aparecer em processos físicos</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Evidência precisa ser interpretada no contexto." data-wrong-text="Pense na água fervendo: há bolhas sem mudança da identidade H₂O."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Linguagem</strong><p>Em uma equação escrita no sentido reagentes → produtos, onde ficam os reagentes?</p><div class="choice-row"><button type="button" data-choice="a">À esquerda da seta</button><button type="button" data-choice="b">Sempre acima da seta</button><button type="button" data-choice="c">Somente dentro dos índices</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A seta separa a representação dos reagentes e dos produtos." data-wrong-text="Leia a equação da esquerda para a direita no sentido em que foi escrita."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>4. Fórmulas</strong><p>Por que não podemos transformar H₂O em H₂O₂ para balancear uma equação?</p><div class="choice-row"><button type="button" data-choice="a">Porque índices nunca podem ser números pares</button><button type="button" data-choice="b">Porque oxigênio não pode aparecer em fórmulas</button><button type="button" data-choice="c">Porque mudar o índice muda a substância representada</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. H₂O e H₂O₂ são substâncias diferentes." data-wrong-text="O índice faz parte da identidade da fórmula química."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>5. Balanceamento</strong><p>Qual equação está balanceada?</p><div class="choice-row"><button type="button" data-choice="a">H₂ + O₂ → H₂O</button><button type="button" data-choice="b">2 H₂ + O₂ → 2 H₂O</button><button type="button" data-choice="c">H₄ + O₂ → H₂O</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Existem 4 H e 2 O nos dois lados." data-wrong-text="Conte separadamente os átomos de H e O e preserve as fórmulas das substâncias."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Transformação física</strong><p>Qual situação é melhor classificada como transformação física?</p><div class="choice-row"><button type="button" data-choice="a">Gelo derretendo</button><button type="button" data-choice="b">Ferro formando óxido</button><button type="button" data-choice="c">Combustível queimando</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A identidade química H₂O permanece." data-wrong-text="Procure o caso em que muda o estado, mas não a composição da substância."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Energia</strong><p>Uma reação exotérmica...</p><div class="choice-row"><button type="button" data-choice="a">nunca precisa de energia inicial</button><button type="button" data-choice="b">libera energia no balanço global, embora possa exigir energia de ativação</button><button type="button" data-choice="c">é definida apenas por produzir luz visível</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Liberação global de energia e barreira de ativação são ideias diferentes." data-wrong-text="Uma reação pode liberar energia no total e ainda assim precisar de um estímulo inicial."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Preparação para o próximo capítulo</strong><p>O que deve acontecer com a quantidade de átomos de cada elemento quando uma equação química está corretamente balanceada?</p><div class="choice-row"><button type="button" data-choice="a">Deve aumentar no produto</button><button type="button" data-choice="b">Pode desaparecer se houver liberação de gás</button><button type="button" data-choice="c">Deve ser a mesma nos dois lados da equação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Essa constância será a ponte para estudar conservação da massa." data-wrong-text="Numa reação química comum, os átomos são reorganizados; não precisam ser criados ou destruídos."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um aluno afirma: “Se eu vejo bolhas, sei que aconteceu uma reação; e para acertar a equação basta mudar os números pequenos das fórmulas”. Corrija a afirmação em quatro partes: <strong>1)</strong> explique por que bolhas são evidência, não prova automática; <strong>2)</strong> defina reagentes e produtos; <strong>3)</strong> diferencie coeficiente de índice; <strong>4)</strong> explique o que deve permanecer igual na contagem de átomos de uma equação balanceada.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>Bolhas podem resultar de gás produzido numa reação, mas também de transformações físicas; reagentes são as substâncias de partida e produtos são as formadas; coeficientes alteram a quantidade de unidades representadas, enquanto índices fazem parte da fórmula e alterá-los muda a substância; numa equação balanceada, a quantidade de átomos de cada elemento é igual nos dois lados.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo trabalha transformações físicas e químicas, reconhecimento responsável de evidências de reação, reagentes e produtos, representação simbólica por equações químicas, diferença entre coeficientes e índices, balanceamento introdutório, padrões gerais de reações e aspectos energéticos. A abordagem conecta observações macroscópicas a modelos de partículas e prepara o estudo da conservação da massa.</p></details>
  `;

  const cases = {
    ice: {
      title:'Gelo derretendo — transformação física',
      text:'A mudança de sólido para líquido altera organização e mobilidade das moléculas, mas a substância continua sendo H₂O. Não é necessário propor formação de nova substância.'
    },
    tablet: {
      title:'Comprimido efervescente — há reação química',
      text:'Além da dissolução física de componentes, espécies presentes no comprimido reagem em água e ocorre formação de dióxido de carbono. As bolhas são uma evidência coerente com a formação de produto gasoso.'
    },
    steel: {
      title:'Lã de aço aquecida ao ar — há reação química',
      text:'O ferro reage com o oxigênio do ar e forma óxidos de ferro. A composição muda. Esse caso também prepara uma pergunta importante: se oxigênio entra no sólido, o que acontece com a massa?'
    }
  };

  function initChapter(root) {
    const investigator = $('#cap05Investigator', root);
    const result = $('#cap05InvestigatorResult', root);
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
      technical:'Reações químicas • evidências, equações e balanceamento',
      title:'Como saber se ocorreu uma reação química?',
      objective:'<strong>Objetivo:</strong> distinguir transformações físicas e químicas, interpretar evidências de reação, identificar reagentes e produtos e representar reorganizações de átomos por equações químicas balanceadas.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('05 Reações químicas', showChapter);
})();