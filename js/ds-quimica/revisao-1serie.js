(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  if (MBB.reviewFirstSeriesReady || typeof MBB.showLesson !== 'function') return;
  MBB.reviewFirstSeriesReady = true;

  const originalShowLesson = MBB.showLesson;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function sectionStartingWith(root, text) {
    return $$('section', root).find(section => section.querySelector('h3')?.textContent.trim().startsWith(text));
  }

  function choice(number, label, prompt, options, correct, correctText, wrongText) {
    return `
      <div class="quick-question" data-choice-question data-correct="${correct}">
        <strong>${number}. ${label}</strong>
        <p>${prompt}</p>
        <div class="choice-row">${options.map(([key, text]) => `<button type="button" data-choice="${key}">${text}</button>`).join('')}</div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="${correctText}" data-wrong-text="${wrongText}"></div>
      </div>`;
  }

  function decorateChapter01(root) {
    const anchor = sectionStartingWith(root, '1. Antes de falar');
    if (!anchor || $('[data-review-addition="cap01-misturas"]', root)) return;

    anchor.insertAdjacentHTML('afterend', `
      <section data-review-addition="cap01-misturas">
        <h3>1A. Propriedades ajudam a comparar e identificar materiais</h3>
        <p>Depois de perguntar <strong>“do que a amostra é feita?”</strong>, a Química também pergunta <strong>“como esse material se comporta?”</strong>. Algumas propriedades podem ser observadas ou medidas e ajudam a comparar materiais, controlar a qualidade de uma amostra e levantar hipóteses sobre sua identidade.</p>
        <p>Uma única propriedade raramente basta para identificar uma substância com segurança. Cor e aparência, por exemplo, podem coincidir em materiais diferentes. Quanto mais específica for a situação, mais importante é combinar <strong>várias evidências e condições de medida</strong>.</p>

        <div class="table-wrap">
          <table>
            <thead><tr><th>Propriedade</th><th>O que descreve</th><th>Por que pode ser útil</th></tr></thead>
            <tbody>
              <tr><td>Densidade</td><td>Relação entre massa e volume, nas condições consideradas</td><td>Ajuda a comparar materiais que ocupam o mesmo volume ou têm a mesma massa.</td></tr>
              <tr><td>Temperaturas de fusão e ebulição</td><td>Condições em que ocorrem mudanças de estado</td><td>Podem contribuir para caracterização e para escolher processos de separação.</td></tr>
              <tr><td>Solubilidade</td><td>Quanto de uma substância pode se dissolver em determinado solvente, sob condições definidas</td><td>Ajuda a compreender soluções e a planejar separações.</td></tr>
              <tr><td>Condutividade elétrica</td><td>Capacidade de transportar carga elétrica</td><td>Ajuda a distinguir comportamentos de metais, soluções iônicas e outros materiais.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note-box"><strong>Condição de medida faz parte da informação</strong><p>Densidade, solubilidade, estado físico e outras propriedades podem depender de temperatura, pressão e composição. Um número sem unidade ou sem contexto experimental pode ser enganoso.</p></div>

        ${choice('A','Identificação por propriedades','Dois líquidos incolores parecem iguais. Qual conclusão é cientificamente mais adequada?', [['a','São necessariamente a mesma substância'],['b','A aparência é uma evidência insuficiente; outras propriedades e informações precisam ser comparadas'],['c','Todo líquido incolor é água']], 'b', 'Correto. Identificação exige evidências compatíveis; aparência semelhante não garante composição igual.', 'Não transforme uma característica visual em prova de identidade química.')}
      </section>

      <section data-review-addition="cap01-separacao">
        <h3>1B. Substância pura e mistura respondem a perguntas diferentes</h3>
        <p>Uma <strong>substância</strong> possui composição característica. Uma <strong>mistura</strong> reúne duas ou mais substâncias em proporções que podem variar. O sal de cozinha iodado usado na situação inicial é um bom exemplo: o produto pode ter NaCl como componente principal e ainda conter outras substâncias.</p>

        <div class="two-col">
          <div class="example-box"><strong class="card-title">Mistura homogênea</strong><p>Apresenta uma única fase macroscópica nas condições observadas. Uma solução de sal totalmente dissolvido em água é um exemplo.</p></div>
          <div class="example-box"><strong class="card-title">Mistura heterogênea</strong><p>Apresenta mais de uma fase macroscópica nas condições observadas. Água e areia, após sedimentação, são um exemplo.</p></div>
        </div>

        <div class="note-box"><strong>“Homogênea” não significa “substância pura”</strong><p>Água com sal dissolvido pode parecer uniforme e ainda ser uma mistura. O critério é a composição, não apenas aquilo que conseguimos enxergar a olho nu.</p></div>

        <h3>1C. Separar uma mistura é explorar diferenças de propriedades</h3>
        <p>Métodos de separação não funcionam por “receita mágica”. Cada método explora alguma diferença entre os componentes. Antes de escolher um procedimento, precisamos saber <strong>quais fases existem e quais propriedades são diferentes</strong>.</p>

        <div class="table-wrap">
          <table>
            <thead><tr><th>Situação</th><th>Princípio de separação</th><th>Método introdutório</th></tr></thead>
            <tbody>
              <tr><td>Sólido insolúvel em líquido</td><td>Tamanho das partículas e fase</td><td>Filtração</td></tr>
              <tr><td>Fases que se separam por densidade</td><td>Densidade e imiscibilidade</td><td>Decantação</td></tr>
              <tr><td>Soluto dissolvido + solvente volátil</td><td>Diferença de volatilidade/ebulição</td><td>Destilação, quando se deseja recuperar o solvente</td></tr>
              <tr><td>Soluto sólido dissolvido</td><td>Remoção do solvente</td><td>Evaporação/cristalização, quando o objetivo é recuperar o sólido</td></tr>
              <tr><td>Componente atraído por ímã</td><td>Propriedade magnética</td><td>Separação magnética</td></tr>
            </tbody>
          </table>
        </div>

        <div class="concept-flow">
          <div><strong>Observe a mistura</strong><span>quantas fases?</span></div><div class="flow-arrow">→</div>
          <div><strong>Compare propriedades</strong><span>densidade, solubilidade, volatilidade...</span></div><div class="flow-arrow">→</div>
          <div><strong>Escolha o processo</strong><span>o método depende do objetivo</span></div>
        </div>

        ${choice('B','Escolha do método','Uma mistura contém areia insolúvel em água. Qual método é mais diretamente adequado para separar o sólido do líquido?', [['a','Filtração'],['b','Fusão'],['c','Eletrólise']], 'a', 'Correto. A filtração explora a diferença de fase e retém partículas sólidas maiores que os poros do filtro.', 'Pergunte primeiro se o sólido está dissolvido ou permanece como fase separada.')}

        ${choice('C','Solução','Sal se dissolve completamente em água e deixa de ser visível. O que aconteceu?', [['a','O sal deixou de existir'],['b','Formou-se uma mistura homogênea; as partículas do soluto continuam presentes, distribuídas no solvente'],['c','A água virou uma substância nova chamada sal']], 'b', 'Exatamente. Dissolver não significa desaparecer nem, por si só, reagir quimicamente.', 'A aparência uniforme não elimina a presença do soluto.')}

        <div class="ok-box"><strong>Ponte para o restante do módulo</strong><p>Propriedades e separações mostram por que a Química precisa trabalhar ao mesmo tempo com <strong>composição, estrutura e comportamento observável</strong>. Nos próximos capítulos, os modelos atômicos e as ligações ajudarão a explicar por que materiais diferentes apresentam propriedades diferentes.</p></div>
      </section>`);
  }

  function decorateChapter03(root) {
    const anchor = sectionStartingWith(root, '6. A posição ajuda');
    if (!anchor || $('[data-review-addition="cap03-tendencias"]', root)) return;

    anchor.insertAdjacentHTML('afterend', `
      <section data-review-addition="cap03-tendencias">
        <h3>6A. Tendências periódicas são mapas gerais, não setas para decorar sem pensar</h3>
        <p>A repetição de padrões eletrônicos produz tendências que ajudam a comparar elementos. Elas são úteis para prever comportamento, mas possuem exceções e precisam ser tratadas como <strong>tendências gerais</strong>, não como regras absolutas para qualquer situação.</p>

        <div class="three-col">
          <div class="example-box"><strong class="card-title">Raio atômico</strong><p>Em termos gerais, tende a <strong>diminuir da esquerda para a direita</strong> em um período e a <strong>aumentar ao descer</strong> em um grupo.</p></div>
          <div class="example-box"><strong class="card-title">Energia de ionização</strong><p>Em geral, aumenta ao avançar para a direita e para cima: fica mais difícil remover um elétron de certos átomos.</p></div>
          <div class="example-box"><strong class="card-title">Eletronegatividade</strong><p>Em geral, aumenta em direção à região superior direita entre os elementos para os quais essa comparação é usual; gases nobres exigem tratamento próprio.</p></div>
        </div>

        <div class="note-box"><strong>O porquê importa mais que a seta</strong><p>Ao atravessar um período, a carga nuclear aumenta enquanto os elétrons adicionais entram na mesma região geral de energia, alterando a atração efetiva sentida pelos elétrons. Ao descer um grupo, novas camadas eletrônicas aumentam a distância média e o efeito de blindagem.</p></div>

        ${choice('A','Eletronegatividade','Comparando Na e Cl no mesmo período, qual tende a atrair mais fortemente a densidade eletrônica de uma ligação?', [['a','Na'],['b','Cl'],['c','Os dois obrigatoriamente atraem de modo idêntico']], 'b', 'Correto. O cloro está mais à direita no período e possui eletronegatividade maior que o sódio.', 'Use a posição relativa como tendência geral: Cl está mais à direita que Na.')}

        <div class="ok-box"><strong>Ponte para Ligações químicas</strong><p>Essas tendências não determinam sozinhas o tipo de ligação, mas ajudam a entender por que diferentes átomos participam de ligações de maneiras diferentes. No próximo capítulo, essa comparação aparecerá de forma concreta em NaCl, H₂O e metais.</p></div>
      </section>`);
  }

  function fixChapter04EnergyGraph(root) {
    const graph = $$('svg', root).find(svg => svg.getAttribute('aria-label')?.includes('energia relativa em função da distância'));
    if (!graph || graph.dataset.reviewFixed === 'true') return;
    graph.dataset.reviewFixed = 'true';

    const point = $('circle[fill="#b42318"]', graph);
    const guide = $('line[stroke="#b42318"]', graph);
    const minimumText = $$('text', graph).find(node => node.textContent.includes('mínimo de energia'));
    const distanceText = $$('text', graph).find(node => node.textContent.includes('distância de ligação'));

    point?.setAttribute('cx', '276');
    point?.setAttribute('cy', '243');
    if (guide) {
      guide.setAttribute('x1', '276'); guide.setAttribute('x2', '276');
      guide.setAttribute('y1', '243'); guide.setAttribute('y2', '260');
    }
    if (minimumText) {
      minimumText.setAttribute('x', '326'); minimumText.setAttribute('y', '226');
    }
    if (distanceText) minimumText && distanceText.setAttribute('x', '276');
  }

  function decorateChapter05(root) {
    const anchor = sectionStartingWith(root, '9. Reações também envolvem energia');
    if (!anchor || $('[data-review-addition="cap05-termoquimica"]', root)) return;

    anchor.insertAdjacentHTML('afterend', `
      <section data-review-addition="cap05-termoquimica">
        <h3>9A. Termoquímica transforma “esquentou ou esfriou” em balanço de energia</h3>
        <p>A observação de temperatura é um começo, mas a Termoquímica busca quantificar a energia envolvida. Em muitas situações de laboratório realizadas a pressão aproximadamente constante, usamos a <strong>variação de entalpia (&Delta;H)</strong> para representar a diferença energética entre produtos e reagentes.</p>

        <div class="formula-box">
          <span class="formula-name">Variação de entalpia da reação</span>
          <div class="big-formula">&Delta;H = H<sub>produtos</sub> − H<sub>reagentes</sub></div>
          <p>Se os produtos ficam em nível energético menor, &Delta;H é negativo e o processo é exotérmico. Se ficam em nível maior, &Delta;H é positivo e o processo é endotérmico.</p>
        </div>

        <div class="two-col">
          <div class="example-box"><strong class="card-title">Exotérmica • &Delta;H &lt; 0</strong><p>O sistema transfere energia ao ambiente no balanço considerado. Combustões são exemplos importantes de processos geralmente exotérmicos.</p></div>
          <div class="example-box"><strong class="card-title">Endotérmica • &Delta;H &gt; 0</strong><p>O sistema recebe energia do ambiente no balanço considerado.</p></div>
        </div>

        <div class="note-box"><strong>Energia de ativação e &Delta;H são ideias diferentes</strong><p>A energia de ativação descreve a barreira inicial do caminho da reação. &Delta;H compara os estados inicial e final. Uma reação pode ser exotérmica e ainda precisar de uma faísca ou aquecimento inicial para começar.</p></div>

        <h3>9B. A energia também escala com a quantidade de matéria</h3>
        <p>Se uma equação termoquímica informa que a reação, <strong>como escrita</strong>, libera 120 kJ, dobrar todas as quantidades estequiométricas idealmente dobra também o módulo da energia envolvida: 240 kJ. A energia acompanha a extensão da reação.</p>

        ${choice('A','Sinal de &Delta;H','Uma reação possui &Delta;H = −150 kJ para a quantidade representada pela equação. Qual interpretação é adequada?', [['a','É exotérmica e transfere 150 kJ ao ambiente no balanço indicado'],['b','É endotérmica porque o sinal é negativo'],['c','O sinal informa apenas a velocidade da reação']], 'a', 'Correto. &Delta;H negativo caracteriza processo exotérmico no sentido representado.', 'Não confunda o sinal de &Delta;H com velocidade ou energia de ativação.')}

        ${choice('B','Escala energética','Se uma transformação libera 80 kJ para 1 mol de processo nas condições consideradas, qual energia seria liberada idealmente para 2,5 mol do mesmo processo?', [['a','32 kJ'],['b','80 kJ'],['c','200 kJ']], 'c', 'Correto. 2,5 × 80 = 200 kJ.', 'A energia é uma grandeza extensiva: escale-a junto com a quantidade que efetivamente reage.')}

        <h3>9C. Poder calorífico conecta Química, energia e tecnologia</h3>
        <p>Para comparar combustíveis, uma grandeza útil é a energia liberada por unidade de massa ou volume sob condições definidas. Em termos introdutórios, isso aparece como <strong>poder calorífico</strong>. Um combustível com valor didático de 42 MJ/kg poderia liberar, idealmente, 21 MJ na combustão correspondente a 0,50 kg.</p>
        <p>Esse número não diz sozinho quanto de energia útil uma máquina entregará. Eficiência do equipamento, condições de combustão, perdas térmicas e formação de produtos também precisam entrar na análise.</p>

        <div class="ok-box"><strong>Conservação de energia</strong><p>A energia não “some” numa reação. Para analisar um processo, precisamos definir sistema e ambiente e acompanhar as formas de energia transferidas ou transformadas. Essa leitura complementa a conservação da massa estudada no capítulo seguinte.</p></div>
      </section>`);
  }

  function decorateChapter08(root) {
    const anchor = sectionStartingWith(root, '8. Um problema completo');
    if (!anchor || $('[data-review-addition="cap08-industria"]', root)) return;

    anchor.insertAdjacentHTML('afterend', `
      <section data-review-addition="cap08-industria">
        <h3>8A. Da conta para um processo produtivo: uma etapa simplificada da obtenção de ferro</h3>
        <p>A estequiometria também é ferramenta de planejamento industrial. Na produção de ferro a partir de minérios, ocorrem várias reações e etapas. Uma delas pode ser representada, de forma <strong>simplificada</strong>, pela redução do óxido de ferro(III) com monóxido de carbono:</p>

        <div class="formula-box"><div class="big-formula">Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂</div><p>Esta equação representa apenas uma etapa química do processo. Um alto-forno real envolve geração de CO, transferência de calor, impurezas do minério, formação de escória e diversas reações simultâneas.</p></div>

        <div class="table-wrap">
          <table>
            <thead><tr><th>Espécie</th><th>Massa molar aproximada</th><th>Quantidade na equação</th><th>Massa correspondente</th></tr></thead>
            <tbody>
              <tr><td>Fe₂O₃</td><td>160 g/mol</td><td>1 mol</td><td>160 g</td></tr>
              <tr><td>CO</td><td>28 g/mol</td><td>3 mol</td><td>84 g</td></tr>
              <tr><td>Fe</td><td>56 g/mol</td><td>2 mol</td><td>112 g</td></tr>
              <tr><td>CO₂</td><td>44 g/mol</td><td>3 mol</td><td>132 g</td></tr>
            </tbody>
          </table>
        </div>

        <div class="ok-box"><strong>Cheque de conservação</strong><p>160 g + 84 g = 244 g de reagentes e 112 g + 132 g = 244 g de produtos nessa representação idealizada.</p></div>

        ${choice('A','Escala industrial','Considerando essa reação simplificada e CO em excesso, quantos gramas de Fe podem ser obtidos teoricamente a partir de 320 g de Fe₂O₃ puro?', [['a','112 g'],['b','224 g'],['c','320 g']], 'b', 'Correto. 320 g correspondem ao dobro de 160 g; portanto o rendimento teórico de ferro também dobra: 224 g.', 'Use a proporção 160 g de Fe₂O₃ → 112 g de Fe para esta reação idealizada.')}

        <div class="three-col">
          <div class="example-box"><strong class="card-title">Matéria-prima real</strong><p>Minério não é Fe₂O₃ puro. Teor do minério e impurezas alteram a massa necessária e a quantidade de resíduos.</p></div>
          <div class="example-box"><strong class="card-title">Rendimento real</strong><p>Processos industriais não atingem automaticamente 100% do valor teórico; conversão, perdas e separações precisam ser medidas.</p></div>
          <div class="example-box"><strong class="card-title">Impacto</strong><p>Consumo de recursos, demanda energética, emissões e destino de coprodutos precisam entrar junto com a conta química.</p></div>
        </div>

        <div class="challenge-box"><strong>Desafio de decisão</strong><p>Duas rotas industriais produzem a mesma massa de ferro, mas apresentam consumos de energia, rendimentos e emissões diferentes. Explique por que comparar apenas a massa final de Fe é insuficiente para escolher a melhor rota.</p><details><summary>Critério para conferir</summary><p>Uma boa resposta considera pelo menos rendimento, pureza/consumo de matéria-prima, energia, emissões, resíduos ou coprodutos e segurança. A estequiometria fornece limites e proporções, mas a decisão tecnológica exige mais dados.</p></details></div>
      </section>`);
  }

  function decorateChapter99(root) {
    if ($('[data-review-addition="cap99-lapidacao"]', root)) return;
    const curriculum = $('details.curriculum-box', root);
    if (!curriculum) return;

    curriculum.insertAdjacentHTML('beforebegin', `
      <section data-review-addition="cap99-lapidacao">
        <h3>Nível 6 — Conexões que fecham a 1ª série</h3>
        <p>Estas questões retomam os pontos acrescentados na revisão final do módulo e os conectam ao raciocínio construído nos demais capítulos.</p>

        ${choice('41','Propriedades dos materiais','Dois líquidos incolores têm a mesma aparência. O que é necessário antes de concluir que são a mesma substância?', [['a','Nada: mesma aparência prova mesma composição'],['b','Comparar informações de composição e propriedades medidas em condições definidas'],['c','Apenas escolher o que tem menor volume']], 'b', 'Correto. Identificação confiável exige evidências compatíveis, não apenas semelhança visual.', 'Uma propriedade visual isolada é insuficiente para estabelecer identidade química.')}

        ${choice('42','Mistura homogênea','Água com NaCl totalmente dissolvido é melhor classificada como:', [['a','Substância simples'],['b','Mistura homogênea'],['c','Elemento químico']], 'b', 'Correto. Há mais de uma substância, mas uma única fase macroscópica nas condições consideradas.', 'Homogeneidade visual não transforma uma mistura em substância pura.')}

        ${choice('43','Separação','Qual método é adequado para recuperar água de uma solução de sal quando também se deseja coletar o solvente?', [['a','Filtração simples'],['b','Destilação'],['c','Separação magnética']], 'b', 'Correto. A destilação explora diferença de volatilidade e permite condensar o vapor do solvente.', 'Sal dissolvido passa por um filtro comum junto com a água; é preciso explorar outra propriedade.')}

        ${choice('44','Tendência periódica','Ao comparar Na e Cl no mesmo período, qual apresenta maior eletronegatividade?', [['a','Na'],['b','Cl'],['c','A posição na tabela nunca fornece tendência alguma']], 'b', 'Correto. A eletronegatividade aumenta, em geral, em direção à região superior direita da tabela.', 'Use a tendência periódica como comparação geral, reconhecendo que tendências não são regras sem exceções.')}

        ${choice('45','Termoquímica','O que significa &Delta;H &lt; 0 para uma reação no sentido em que foi escrita?', [['a','Processo exotérmico'],['b','Processo obrigatoriamente muito rápido'],['c','Processo sem energia de ativação']], 'a', 'Correto. &Delta;H negativo indica produtos em nível de entalpia menor que os reagentes e liberação de energia no balanço considerado.', 'O sinal de &Delta;H não determina a velocidade nem elimina a barreira de ativação.')}

        ${choice('46','Energia e quantidade','Um processo libera 50 kJ por mol nas condições consideradas. Idealmente, 4 mol liberam:', [['a','12,5 kJ'],['b','50 kJ'],['c','200 kJ']], 'c', 'Correto. A energia envolvida escala com a quantidade de processo: 4 × 50 = 200 kJ.', 'Multiplique a energia por mol pela quantidade em mol.')}

        ${choice('47','Processo produtivo','Na reação simplificada Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂, 160 g de Fe₂O₃ puro podem formar teoricamente 112 g de Fe. Com 480 g de Fe₂O₃ e CO em excesso, qual é o rendimento teórico de Fe?', [['a','224 g'],['b','336 g'],['c','480 g']], 'b', 'Correto. 480 g é três vezes 160 g; portanto 3 × 112 = 336 g de Fe.', 'Escalone a proporção da equação balanceada.')}

        ${choice('48','Decisão tecnológica','Por que a maior produção teórica de um material não basta para escolher um processo industrial?', [['a','Porque rendimento, energia, emissões, resíduos, pureza e segurança também importam'],['b','Porque cálculos estequiométricos nunca servem para indústria'],['c','Porque a conservação da massa deixa de valer em fábricas']], 'a', 'Correto. A estequiometria é necessária, mas decisões tecnológicas exigem análise de eficiência, recursos, impactos e riscos.', 'Uma decisão real combina química quantitativa com dados técnicos, ambientais e de segurança.')}

        <div class="challenge-box"><strong>Desafio final — uma cadeia completa de raciocínio químico</strong><p>Uma empresa recebe uma matéria-prima mineral impura, realiza uma transformação química exotérmica e obtém um produto metálico. Construa uma resposta curta explicando: <strong>1)</strong> por que a composição da matéria-prima precisa ser conhecida; <strong>2)</strong> como a equação balanceada permite prever quantidades; <strong>3)</strong> por que o rendimento real pode diferir do teórico; <strong>4)</strong> como energia e impactos ambientais entram na decisão.</p><details><summary>O que deve aparecer?</summary><p>Composição/mistura e pureza; mol e proporção estequiométrica; reagente limitante e perdas/processos paralelos; balanço energético/entalpia; consumo de recursos, emissões, resíduos e segurança. A resposta deve conectar capítulos, não apenas listar palavras.</p></details></div>
      </section>`);
  }

  function applyReview(config, root) {
    const title = config.title || '';
    if (title === 'Do que as coisas ao nosso redor são feitas?') decorateChapter01(root);
    if (title === 'Por que a Tabela Periódica tem essa organização?') decorateChapter03(root);
    if (title === 'Por que os átomos se ligam?') fixChapter04EnergyGraph(root);
    if (title === 'Como saber se ocorreu uma reação química?') decorateChapter05(root);
    if (title === 'Como prever quanto produto uma reação pode formar?') decorateChapter08(root);
    if (title === 'Você consegue usar a Química para explicar, calcular e decidir?') decorateChapter99(root);
    MBB.initChoiceQuestions?.(root);
  }

  MBB.showLesson = (config = {}) => {
    const adjusted = { ...config };
    if (adjusted.title === 'Do que as coisas ao nosso redor são feitas?' || adjusted.title === 'Como sabemos como é um átomo se ninguém consegue vê-lo?') {
      adjusted.unit = 'Matéria e modelos';
    }

    originalShowLesson(adjusted);
    const root = document.getElementById('lessonContent');
    if (root) applyReview(adjusted, root);
  };
})();