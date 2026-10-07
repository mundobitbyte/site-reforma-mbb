(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Na tarde anterior a uma aula prática, o professor pede sua ajuda para preparar seis bandejas idênticas. No dia seguinte, cada grupo vai investigar propriedades de algumas amostras e, no final, comparar os registros entre as bancadas. A ficha de preparação determina que cada bandeja receba Cu, Al, Fe e NaCl.</strong>
        <p>No armário do laboratório há um rolo de fio de cobre, tiras metálicas de alumínio, pregos guardados numa caixa identificada como “ferro” e um frasco de cloreto de sódio. Ao lado, porém, há também um pacote de sal de cozinha iodado e alguns pregos galvanizados. À primeira vista, parecem substitutos aceitáveis.</p>
        <p>O professor interrompe a montagem: se uma bancada receber uma amostra de composição diferente das demais, os grupos podem comparar resultados que, na verdade, vieram de materiais diferentes. Antes de montar as bandejas, você precisa saber <strong>o que exatamente Cu, Al, Fe e NaCl estão especificando</strong> e até onde um nome cotidiano, como “prego de ferro” ou “sal”, permite concluir a composição do material.</p>

        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Antes de continuar, faça uma aposta</strong>
          <p>Por que o professor não deveria simplesmente tratar Cu, Al, Fe e NaCl como quatro abreviações equivalentes?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Porque fórmulas químicas só podem ter uma letra</button>
            <button type="button" data-choice="b">Porque Cu, Al e Fe são símbolos de elementos, enquanto NaCl é uma fórmula formada por mais de um elemento</button>
            <button type="button" data-choice="c">Porque NaCl é apenas o nome comercial do sal</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Essa é a diferença central. Mas ainda precisamos descobrir o que é um elemento, como ele é identificado e por que um material real pode não ser uma substância pura." data-wrong-text="Separe visualmente NaCl em Na e Cl. A escrita já indica que ela não está cumprindo a mesma função de Cu, Al ou Fe."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> preparar a bandeja corretamente e, no caminho, construir uma resposta completa para a pergunta: <strong>do que os materiais são feitos e como a Química consegue identificar aquilo que não enxergamos diretamente?</strong></p>
      </div>
    </section>

    <section>
      <h3>1. Antes de falar em átomos, precisamos saber o que está sobre a bancada</h3>
      <p>Você começa pelo item aparentemente mais simples: o “prego de ferro”. Só que muitos pregos comerciais são feitos de aço e alguns recebem uma camada de zinco para reduzir a corrosão. O objeto continua sendo chamado de prego, mas isso não significa que seja formado apenas pela substância ferro.</p>
      <p>O mesmo cuidado vale para o fio de cobre, que pode ter revestimento, e para o sal de cozinha, que pode conter compostos de iodo e agentes antiumectantes. Em laboratório, a composição da <strong>amostra</strong> precisa ser conhecida porque é ela que será relacionada ao resultado observado.</p>

      <div class="three-col">
        <div class="example-box">
          <strong class="card-title">Objeto</strong>
          <p>Tem forma e função. Um prego é um objeto e pode ser construído com mais de um material.</p>
        </div>
        <div class="example-box">
          <strong class="card-title">Material</strong>
          <p>É aquilo de que um objeto ou amostra é constituído. Um material pode ser uma substância ou uma mistura de substâncias.</p>
        </div>
        <div class="example-box">
          <strong class="card-title">Substância</strong>
          <p>É um tipo de matéria com composição característica. Cobre, alumínio e cloreto de sódio podem ser tratados como substâncias quando a amostra é suficientemente pura.</p>
        </div>
      </div>

      <div class="visual-box">
        <strong class="card-title">A mesma palavra cotidiana pode esconder composições diferentes</strong>
        <div class="concept-flow">
          <div><strong>Objeto</strong><span>prego</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>Material possível</strong><span>aço</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>Composição</strong><span>Fe + outros elementos</span></div>
        </div>
        <p class="visual-caption">Chamar algo de “ferro” no cotidiano não garante que ele seja uma amostra de ferro puro. O contexto do laboratório exige informação de composição.</p>
      </div>

      <div class="note-box">
        <strong>Pare e explique</strong>
        <p>Por que substituir o frasco de NaCl do laboratório por sal de cozinha iodado poderia atrapalhar uma atividade que pretende comparar substâncias definidas?</p>
        <details><summary>Compare sua explicação</summary><p>Porque o sal de cozinha comercial pode conter outras substâncias além do cloreto de sódio. Se a atividade pretende relacionar um resultado a uma composição conhecida, mudar a composição da amostra introduz outra variável na comparação.</p></details>
      </div>
    </section>

    <section>
      <h3>2. A composição não desaparece quando deixamos de enxergá-la</h3>
      <p>Depois de separar as amostras corretas, surge outro problema: mesmo com uma lupa você não consegue ver diretamente aquilo que torna cobre diferente de alumínio ou ferro. A diferença de composição existe, mas está numa escala muito menor que a nossa visão alcança.</p>
      <p>É aqui que entra uma das ideias mais importantes da Química: explicar propriedades e transformações macroscópicas usando <strong>modelos para a matéria em escala microscópica</strong>.</p>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Uma pergunta necessária</strong>
        <p>Se não enxergamos átomos da mesma forma que enxergamos um prego, por que a Ciência usa modelos atômicos?</p>
        <div class="choice-row"><button type="button" data-choice="a">Porque qualquer desenho pode substituir uma observação</button><button type="button" data-choice="b">Porque os átomos precisam ter a aparência dos desenhos dos livros</button><button type="button" data-choice="c">Porque modelos permitem organizar evidências, explicar resultados e fazer previsões sobre fenômenos que não observamos diretamente nessa escala</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Um modelo científico vale pelo que consegue explicar e prever dentro de seus limites, não por parecer uma fotografia." data-wrong-text="Um modelo científico precisa estar ligado a evidências e a explicações verificáveis, não apenas a uma imagem conveniente."></div>
      </div>

      <div class="ok-box">
        <strong>Resposta clara</strong>
        <p>Não precisamos enxergar uma entidade diretamente para investigá-la cientificamente. Medimos efeitos, comparamos resultados e construímos modelos capazes de explicar essas evidências. Se novas evidências aparecem, o modelo pode ser ampliado ou substituído.</p>
      </div>
    </section>

    <section>
      <h3>3. Dalton transformou padrões de reações em um modelo de partículas</h3>
      <p>No início do século XIX, John Dalton propôs que a matéria era formada por partículas extremamente pequenas chamadas <strong>átomos</strong>. Em seu modelo, os átomos eram tratados como esferas maciças e indivisíveis; átomos de um mesmo elemento eram considerados iguais entre si, e elementos diferentes possuíam átomos diferentes.</p>
      <p>A força da ideia não estava no formato de “bolinha”. O modelo ajudava a explicar resultados experimentais já conhecidos: substâncias podiam ser entendidas como combinações de tipos de átomos em proporções definidas, e uma reação química podia ser representada como <strong>reorganização dessas partículas</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">O que o modelo de Dalton tentava explicar</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Representação didática inspirada em Dalton. Dois tipos de esferas, A e B, aparecem separados antes e reorganizados em pares AB depois, sem desaparecer ou surgir novas esferas.">
          <text x="155" y="42" text-anchor="middle" font-size="16" font-weight="700" fill="#104a9b">Antes da transformação</text>
          <text x="590" y="42" text-anchor="middle" font-size="16" font-weight="700" fill="#104a9b">Depois da transformação</text>
          <circle cx="95" cy="110" r="30" fill="#1967d2"/><circle cx="175" cy="110" r="30" fill="#1967d2"/>
          <circle cx="95" cy="205" r="30" fill="#d08700"/><circle cx="175" cy="205" r="30" fill="#d08700"/>
          <text x="95" y="117" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">A</text><text x="175" y="117" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">A</text>
          <text x="95" y="212" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">B</text><text x="175" y="212" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">B</text>
          <path d="M280 155 H455" stroke="#1967d2" stroke-width="5" marker-end="url(#chemArrow01)"/>
          <circle cx="535" cy="115" r="30" fill="#1967d2"/><circle cx="595" cy="115" r="30" fill="#d08700"/>
          <circle cx="535" cy="205" r="30" fill="#1967d2"/><circle cx="595" cy="205" r="30" fill="#d08700"/>
          <text x="535" y="122" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">A</text><text x="595" y="122" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">B</text>
          <text x="535" y="212" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">A</text><text x="595" y="212" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">B</text>
          <defs><marker id="chemArrow01" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
        </svg>
        <p class="visual-caption">As cores, letras e tamanhos são convenções didáticas. O desenho não mostra a aparência real de um átomo.</p>
      </div>

      <div class="note-box">
        <strong>O modelo resolveu problemas, mas não encerrou a história</strong>
        <p>Hoje sabemos que o átomo possui estrutura interna e que átomos de um mesmo elemento podem ter massas diferentes. Isso não torna Dalton “inútil”: mostra como a Ciência progride quando um modelo explica parte das evidências e depois precisa ser ampliado. No próximo capítulo acompanharemos essa evolução.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>O que devemos guardar de Dalton aqui?</strong>
        <p>Qual ideia é mais importante para este capítulo?</p>
        <div class="choice-row"><button type="button" data-choice="a">Átomos são literalmente bolas coloridas</button><button type="button" data-choice="b">A matéria pode ser modelada como formada por partículas, e transformações podem envolver reorganização dessas partículas</button><button type="button" data-choice="c">Todos os átomos existentes têm a mesma massa</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A representação por esferas é um recurso; a ideia científica é usar partículas para explicar composição e transformação." data-wrong-text="Separe a utilidade do modelo de sua imagem simplificada."></div>
      </div>
    </section>

    <section>
      <h3>4. Para montar a bandeja, precisamos nomear tipos diferentes de átomos</h3>
      <p>Dalton já distinguia tipos de átomos. Hoje usamos o nome <strong>elemento químico</strong> para a identidade associada a um determinado tipo de átomo. Cada elemento recebe um nome e um <strong>símbolo químico padronizado</strong>, usado internacionalmente.</p>
      <p>É por isso que a ficha do laboratório consegue ser curta. Em vez de escrever “cobre”, “alumínio” e “ferro” todas as vezes, ela usa <strong>Cu</strong>, <strong>Al</strong> e <strong>Fe</strong>.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Elemento</th><th>Símbolo</th><th>Como ler</th></tr></thead>
          <tbody>
            <tr><td>Cobre</td><td><strong>Cu</strong></td><td>um símbolo de elemento</td></tr>
            <tr><td>Alumínio</td><td><strong>Al</strong></td><td>um símbolo de elemento</td></tr>
            <tr><td>Ferro</td><td><strong>Fe</strong></td><td>um símbolo de elemento</td></tr>
            <tr><td>Sódio</td><td><strong>Na</strong></td><td>um símbolo de elemento</td></tr>
            <tr><td>Cloro</td><td><strong>Cl</strong></td><td>um símbolo de elemento</td></tr>
          </tbody>
        </table>
      </div>

      <p>A escrita também carrega informação. A primeira letra de um símbolo é maiúscula; a segunda, quando existe, é minúscula. Por isso <strong>Co</strong> representa o elemento cobalto, enquanto <strong>CO</strong> reúne os símbolos C e O e representa outra informação química.</p>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Leia a ficha sem decorar</strong>
        <p>Qual opção contém dois símbolos de elementos diferentes?</p>
        <div class="choice-row"><button type="button" data-choice="a">Na e Cl</button><button type="button" data-choice="b">NaCl</button><button type="button" data-choice="c">Fe</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Na é o símbolo do sódio e Cl é o símbolo do cloro." data-wrong-text="Procure escritas que funcionem separadamente como símbolos padronizados de elementos."></div>
      </div>
    </section>

    <section>
      <h3>5. Então por que NaCl não é apenas mais um símbolo?</h3>
      <p>Você volta à ficha: Cu, Al e Fe identificam elementos. Já <strong>NaCl</strong> reúne dois símbolos — Na e Cl — numa <strong>fórmula química</strong>. A fórmula informa quais elementos participam da composição da substância e em que proporção eles aparecem na representação.</p>

      <div class="visual-box">
        <strong class="card-title">Um símbolo e uma fórmula não cumprem a mesma função</strong>
        <svg class="lesson-visual" viewBox="0 0 760 270" role="img" aria-label="À esquerda, Cu aparece como um único símbolo do elemento cobre. À direita, NaCl aparece separado visualmente em Na e Cl, mostrando dois símbolos de elementos reunidos numa fórmula e proporção um para um.">
          <rect x="55" y="55" width="250" height="160" rx="18" fill="#eef5ff" stroke="#8fb7eb" stroke-width="2"/>
          <text x="180" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#104a9b">Símbolo de elemento</text>
          <text x="180" y="165" text-anchor="middle" font-size="58" font-weight="900" fill="#1967d2">Cu</text>
          <text x="180" y="198" text-anchor="middle" font-size="13" fill="#41536b">cobre</text>

          <rect x="395" y="55" width="310" height="160" rx="18" fill="#fff8dc" stroke="#e1bd52" stroke-width="2"/>
          <text x="550" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#805700">Fórmula química</text>
          <text x="492" y="165" text-anchor="middle" font-size="50" font-weight="900" fill="#1967d2">Na</text>
          <text x="610" y="165" text-anchor="middle" font-size="50" font-weight="900" fill="#d08700">Cl</text>
          <text x="550" y="198" text-anchor="middle" font-size="13" fill="#41536b">Na : Cl = 1 : 1</text>
        </svg>
        <p class="visual-caption">NaCl não é o símbolo de um elemento chamado “NaCl”. É uma fórmula formada pelos símbolos de sódio e cloro.</p>
      </div>

      <div class="note-box">
        <strong>Uma precisão importante</strong>
        <p>No sólido, o cloreto de sódio forma uma estrutura iônica extensa. Por isso, NaCl indica a proporção mínima 1:1 entre sódio e cloro na substância; não precisamos imaginar uma “molécula isolada de NaCl”. A estrutura das ligações será estudada no Capítulo 4.</p>
      </div>

      <div class="ok-box">
        <strong>Resposta à primeira dúvida da bandeja</strong>
        <p>Cu, Al e Fe são símbolos de elementos. NaCl é uma fórmula química construída com os símbolos Na e Cl. Eles são escritos de modo diferente porque <strong>não representam a mesma categoria de informação</strong>.</p>
      </div>
    </section>

    <section>
      <h3>6. Mas o que torna um átomo cobre e não alumínio?</h3>
      <p>A resposta moderna exige uma ideia que Dalton não conhecia. Hoje sabemos que o núcleo do átomo contém prótons, e o <strong>número de prótons</strong> determina a identidade do elemento.</p>
      <p>Esse número recebe o nome de <strong>número atômico</strong> e é representado por Z.</p>

      <div class="formula-box">
        <span class="formula-name">Identidade do elemento</span>
        <div class="big-formula">Z = número de prótons</div>
        <p>Al possui Z = 13; Fe, Z = 26; Cu, Z = 29. Se o número de prótons muda, o elemento também muda.</p>
      </div>

      <div class="interactive-lab" id="atomicIdentityLab">
        <div class="lab-heading"><h4>Laboratório de identidade atômica</h4></div>
        <div class="lab-controls">
          <label>Número de prótons: <strong id="protonIdentityValue">13</strong>
            <input id="protonIdentityRange" type="range" min="11" max="17" value="13" step="1">
          </label>
          <div class="lab-result"><strong id="protonIdentityElement">Al — alumínio</strong><span id="protonIdentityDescription">Al possui número atômico Z = 13.</span></div>
        </div>
        <p class="visual-caption">Neste intervalo, mudar um único próton já muda a identidade do elemento.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Uma diferença de apenas um próton</strong>
        <p>Um átomo tem 29 prótons. Outro tem 30. Eles pertencem ao mesmo elemento?</p>
        <div class="choice-row"><button type="button" data-choice="a">Sim, porque a diferença é pequena</button><button type="button" data-choice="b">Sim, se tiverem massas parecidas</button><button type="button" data-choice="c">Não. Números atômicos diferentes significam elementos diferentes</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Z = 29 é cobre; Z = 30 é zinco. Um próton a mais já significa outra identidade química." data-wrong-text="O número atômico não mede apenas quantidade: ele define o elemento."></div>
      </div>
    </section>

    <section>
      <h3>7. A ficha também mostra massa atômica — e esse número responde a outra pergunta</h3>
      <p>Ao consultar a Tabela Periódica para conferir as amostras, você encontra, por exemplo, <strong>Cu: Z = 29 e massa atômica ≈ 63,55 u</strong>. Esses dois números não são versões diferentes da mesma informação.</p>

      <div class="comparison-grid">
        <div class="example-box">
          <strong class="card-title">Número atômico</strong>
          <p>Conta prótons e identifica o elemento.</p>
          <span class="mini-formula">Cu: Z = 29</span>
        </div>
        <div class="example-box">
          <strong class="card-title">Massa atômica</strong>
          <p>Compara a massa dos átomos numa escala própria para partículas extremamente pequenas.</p>
          <span class="mini-formula">Cu: ≈ 63,55 u</span>
        </div>
      </div>

      <p>A unidade <strong>u</strong> é a unidade de massa atômica: <strong>1 u é definida como 1/12 da massa de um átomo de carbono-12</strong>. Essa escala evita trabalhar aqui com massas atômicas expressas em gramas por números extremamente pequenos.</p>
      <p>Mas por que 63,55 não é inteiro? Porque átomos do mesmo elemento podem existir com diferentes números de nêutrons — são os <strong>isótopos</strong>. Eles continuam sendo cobre se tiverem 29 prótons, mas podem ter massas diferentes. A massa atômica mostrada na Tabela Periódica é, em geral, uma média ponderada relacionada às abundâncias naturais desses isótopos.</p>

      <div class="note-box">
        <strong>Não confunda três ideias</strong>
        <p><strong>Z</strong> identifica o elemento pelo número de prótons. <strong>Massa atômica</strong> é um valor em u associado às massas dos átomos do elemento. E <strong>massa da amostra</strong> é aquilo que a balança do laboratório mede em g ou kg. São grandezas diferentes.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Leia uma célula da Tabela Periódica</strong>
        <p>O cloro apresenta Z = 17 e massa atômica aproximada 35,45 u. Qual dado informa que um átomo pertence ao elemento cloro?</p>
        <div class="choice-row"><button type="button" data-choice="a">35,45 u</button><button type="button" data-choice="b">Z = 17</button><button type="button" data-choice="c">A massa do frasco</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Z = 17 significa 17 prótons e identifica o elemento." data-wrong-text="Procure o dado definido diretamente pelo número de prótons."></div>
      </div>
    </section>

    <section>
      <h3>8. Agora a bandeja pode ser montada com uma justificativa química</h3>
      <p>Você volta ao armário e refaz a conferência. Desta vez, não está apenas copiando letras da ficha: consegue dizer <strong>o que cada rótulo significa e o que ele não garante sozinho</strong>.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Ficha da aula</th><th>O que a notação significa</th><th>O que conferir na amostra real</th></tr></thead>
          <tbody>
            <tr><td><strong>Cu</strong></td><td>símbolo do elemento cobre; Z = 29</td><td>se a amostra fornecida corresponde ao material especificado e não apenas a um objeto revestido</td></tr>
            <tr><td><strong>Al</strong></td><td>símbolo do elemento alumínio; Z = 13</td><td>se a tira foi identificada para a atividade e não é outro material de aparência parecida</td></tr>
            <tr><td><strong>Fe</strong></td><td>símbolo do elemento ferro; Z = 26</td><td>se a amostra é a prevista pelo professor; um prego comercial pode ser aço ou ter revestimento</td></tr>
            <tr><td><strong>NaCl</strong></td><td>fórmula do cloreto de sódio; reúne Na e Cl em proporção 1:1</td><td>se o frasco é a amostra especificada; “sal de cozinha” comercial pode conter aditivos</td></tr>
          </tbody>
        </table>
      </div>

      <div class="ok-box">
        <strong>Resposta completa à pergunta do capítulo</strong>
        <p>Os materiais ao nosso redor têm uma composição que pode envolver uma ou várias substâncias. Para explicar essa composição em escala microscópica, a Química usa modelos de átomos. Tipos de átomos são organizados em elementos químicos, identificados hoje pelo número de prótons. Os símbolos representam elementos; fórmulas combinam esses símbolos para representar a composição de substâncias. É essa linguagem que permite ao laboratório especificar, comunicar e comparar materiais com precisão.</p>
      </div>
    </section>

    <section>
      <h3>9. Laboratório de leitura: um caractere pode mudar o significado</h3>
      <div class="interactive-lab" id="labelDecoderLab">
        <div class="lab-heading"><h4>Decodificador de símbolos e fórmulas</h4></div>
        <div class="lab-controls">
          <label>Escolha uma notação
            <select id="labelSampleSelect">
              <option value="Cu">Cu</option>
              <option value="Fe">Fe</option>
              <option value="NaCl">NaCl</option>
              <option value="Co">Co</option>
              <option value="CO">CO</option>
              <option value="H2O">H₂O</option>
            </select>
          </label>
          <div class="lab-result"><strong id="labelKind">Símbolo de elemento</strong><span id="labelDetails">Cu representa o elemento cobre: Z = 29.</span></div>
        </div>
        <p class="visual-caption">O objetivo é ler a linguagem química. Maiúsculas, minúsculas e índices fazem parte da informação; não são detalhes gráficos.</p>
      </div>
    </section>

    <section>
      <h3>10. Aplique sem transformar o cotidiano em um laboratório improvisado</h3>
      <div class="experiment-box">
        <strong class="card-title">Investigação segura de rótulos e materiais</strong>
        <p>Escolha três embalagens ou objetos que tragam informação de composição. Para cada um, registre:</p>
        <ol class="reason-steps">
          <li><strong>o nome cotidiano do objeto ou produto</strong>;</li>
          <li><strong>o material, substância, símbolo ou fórmula informado pelo fabricante</strong>;</li>
          <li><strong>o que essa informação permite concluir</strong>;</li>
          <li><strong>o que ainda não pode ser afirmado sem dados adicionais</strong>.</li>
        </ol>
        <p>Exemplo de raciocínio: uma embalagem pode dizer “alumínio” e isso indicar o material principal, mas não prova, por si só, que todo o objeto seja uma única substância pura sem revestimentos ou outros componentes.</p>
        <p class="safety-note"><strong>Importante:</strong> não abra, misture, aqueça, prove ou cheire diretamente produtos. Aqui a investigação é de informação e composição declarada, não de reatividade.</p>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>11. Verifique se você consegue montar a bandeja sem apenas decorar rótulos</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Objeto, material e substância</strong><p>Por que um prego comercial não deve ser automaticamente tratado como uma amostra de ferro puro?</p><div class="choice-row"><button type="button" data-choice="a">Porque ferro não existe em objetos</button><button type="button" data-choice="b">Porque o objeto pode ser feito de liga metálica e ainda receber revestimentos</button><button type="button" data-choice="c">Porque todo metal é uma mistura de água e sal</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O nome cotidiano do objeto não garante sua composição química completa." data-wrong-text="Pense no exemplo de aço e de pregos galvanizados."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Modelo científico</strong><p>Qual leitura do modelo de Dalton é mais adequada?</p><div class="choice-row"><button type="button" data-choice="a">Uma representação histórica que ajudou a explicar a matéria como formada por partículas e as reações como reorganizações</button><button type="button" data-choice="b">Uma fotografia colorida do átomo real</button><button type="button" data-choice="c">Uma teoria que já incluía prótons, nêutrons e elétrons</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A utilidade do modelo está na explicação que ele permitiu construir, dentro dos conhecimentos da época." data-wrong-text="Dalton não conhecia a estrutura interna moderna do átomo."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Símbolo ou fórmula?</strong><p>Qual opção é uma fórmula formada por mais de um elemento?</p><div class="choice-row"><button type="button" data-choice="a">Fe</button><button type="button" data-choice="b">Cu</button><button type="button" data-choice="c">NaCl</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. NaCl reúne Na e Cl." data-wrong-text="Tente separar a escrita em símbolos químicos válidos."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Maiúsculas e minúsculas</strong><p>Por que Co e CO não significam a mesma coisa?</p><div class="choice-row"><button type="button" data-choice="a">Porque a Química ignora letras minúsculas</button><button type="button" data-choice="b">Porque Co é símbolo do cobalto, enquanto CO reúne C e O numa fórmula</button><button type="button" data-choice="c">Porque CO não é uma escrita química possível</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A capitalização faz parte da linguagem química." data-wrong-text="Leia Co como um símbolo de duas letras e CO como dois símbolos de uma letra."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Número atômico</strong><p>Um átomo possui 13 prótons. Qual é seu número atômico?</p><div class="choice-row"><button type="button" data-choice="a">13</button><button type="button" data-choice="b">26</button><button type="button" data-choice="c">Depende da massa da amostra</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Z é exatamente o número de prótons." data-wrong-text="Use a definição Z = número de prótons."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Identidade do elemento</strong><p>Dois átomos têm 17 prótons, mas massas diferentes. O que podemos afirmar?</p><div class="choice-row"><button type="button" data-choice="a">São necessariamente elementos diferentes</button><button type="button" data-choice="b">Um deles deixou de ser átomo</button><button type="button" data-choice="c">Pertencem ao mesmo elemento e podem ser isótopos diferentes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. O mesmo Z preserva a identidade do elemento; massas diferentes podem ocorrer entre isótopos." data-wrong-text="A identidade é determinada pelos prótons, não pela massa isoladamente."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Massa atômica</strong><p>Por que a massa atômica do cobre na tabela aparece próxima de 63,55 u em vez de ser necessariamente um número inteiro?</p><div class="choice-row"><button type="button" data-choice="a">Porque o cobre tem 63,55 prótons</button><button type="button" data-choice="b">Porque o valor tabelado considera as massas e abundâncias dos isótopos naturais</button><button type="button" data-choice="c">Porque a balança do laboratório arredonda gramas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O número de prótons continua inteiro; o valor decimal está ligado à média ponderada das massas isotópicas." data-wrong-text="Separe número atômico, massa atômica e massa da amostra."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Decisão de laboratório</strong><p>A atividade pede NaCl. Você encontra apenas sal de cozinha iodado, sem informação suficiente sobre os demais componentes. Qual é a decisão mais responsável?</p><div class="choice-row"><button type="button" data-choice="a">Não substituir automaticamente; confirmar com o professor ou com a especificação da atividade</button><button type="button" data-choice="b">Usar porque qualquer produto chamado sal tem exatamente a mesma composição</button><button type="button" data-choice="c">Misturar o sal com outra substância para testar sua pureza</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Uma atividade comparativa depende da composição prevista e de procedimentos seguros." data-wrong-text="O nome cotidiano do produto não garante composição idêntica, e não devemos improvisar testes de reatividade."></div></div>

      <div class="challenge-box">
        <strong>Desafio MbB — explique a bandeja para outro grupo</strong>
        <p>Um colega pergunta: “Se Cu, Al, Fe e NaCl são todos materiais da atividade, por que alguns têm duas letras e outro tem quatro?”. Escreva uma resposta curta que use corretamente as ideias de <strong>elemento, símbolo, fórmula, número atômico e composição</strong>.</p>
        <details><summary>O que uma boa resposta precisa deixar claro?</summary><p>Cu, Al e Fe são símbolos de elementos; NaCl é uma fórmula composta pelos símbolos Na e Cl. Elementos são identificados hoje pelo número de prótons, isto é, pelo número atômico. A fórmula informa a composição da substância, enquanto o rótulo de um objeto comercial pode não revelar sozinho toda a composição do material.</p></details>
      </div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p><strong>Matéria e Energia — Estrutura e constituição da matéria:</strong> modelo atômico de Dalton, elementos, símbolos, massa atômica e número atômico.</p>
    </details>
  `;

  function initAtomicIdentityLab(root) {
    const range = $('#protonIdentityRange', root);
    const value = $('#protonIdentityValue', root);
    const output = $('#protonIdentityElement', root);
    const description = $('#protonIdentityDescription', root);
    if (!range || !value || !output || !description) return;

    const elements = {
      11:['Na','sódio'],
      12:['Mg','magnésio'],
      13:['Al','alumínio'],
      14:['Si','silício'],
      15:['P','fósforo'],
      16:['S','enxofre'],
      17:['Cl','cloro']
    };

    const update = () => {
      const z = Number(range.value);
      const [symbol, name] = elements[z];
      value.textContent = String(z);
      output.textContent = `${symbol} — ${name}`;
      description.textContent = `${symbol} possui número atômico Z = ${z}.`;
    };

    range.addEventListener('input', update);
    update();
  }

  function initLabelDecoder(root) {
    const select = $('#labelSampleSelect', root);
    const kind = $('#labelKind', root);
    const details = $('#labelDetails', root);
    if (!select || !kind || !details) return;

    const data = {
      Cu: ['Símbolo de elemento', 'Cu representa o elemento cobre: Z = 29; massa atômica aproximada 63,55 u.'],
      Fe: ['Símbolo de elemento', 'Fe representa o elemento ferro: Z = 26; massa atômica aproximada 55,85 u.'],
      NaCl: ['Fórmula química', 'NaCl reúne Na e Cl. No sólido, a fórmula indica a proporção mínima 1:1 entre sódio e cloro.'],
      Co: ['Símbolo de elemento', 'Co representa o elemento cobalto: Z = 27. A letra minúscula faz parte do símbolo.'],
      CO: ['Fórmula química', 'CO reúne os elementos carbono (C) e oxigênio (O). Não é o mesmo que Co.'],
      H2O: ['Fórmula química', 'H₂O reúne hidrogênio e oxigênio. O índice 2 informa uma proporção na fórmula e será explorado com mais profundidade adiante.']
    };

    const update = () => {
      const [type, text] = data[select.value];
      kind.textContent = type;
      details.textContent = text;
    };

    select.addEventListener('change', update);
    update();
  }

  function showLesson() {
    MBB.showLesson({
      unit:'Matéria e Energia',
      technical:'Estrutura e constituição da matéria',
      title:'Do que as coisas ao nosso redor são feitas?',
      objective:'<strong>Propósito:</strong> partir de uma situação real de preparação de amostras para distinguir objeto, material, substância e elemento; compreender o papel do modelo de Dalton; e interpretar símbolos, fórmulas, número atômico e massa atômica.',
      html:lessonHtml,
      init:(root) => {
        initAtomicIdentityLab(root);
        initLabelDecoder(root);
      }
    });
  }

  MBB.enableChapter?.('01 Matéria e elementos', showLesson);
})();
