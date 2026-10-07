(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Na aula prática, duas equipes misturam bicarbonato de sódio e vinagre. Uma faz a reação em um copo aberto. A outra coloca os reagentes numa garrafa fechada por um balão, que infla durante a reação. Antes e depois, os conjuntos são pesados.</strong>
        <p>No copo aberto, a massa medida ao final pode ficar menor. Na garrafa com o balão, porém, a massa total do conjunto permanece praticamente a mesma, dentro da precisão da balança. Os dois grupos realizaram uma reação química muito parecida. Então surge a dúvida: <strong>se a matéria é conservada, por que uma balança pode indicar perda de massa?</strong></p>
        <p>A resposta exige uma ideia que parece simples, mas é decisiva em Química: antes de comparar massas, precisamos definir <strong>qual sistema está sendo medido</strong> e verificar se alguma matéria entrou ou saiu dele.</p>

        <div class="quick-question" data-choice-question data-correct="c">
          <strong>Faça sua hipótese</strong>
          <p>No copo aberto, qual explicação é mais provável para a diminuição da massa medida?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Parte da matéria deixou de existir</button>
            <button type="button" data-choice="b">A reação destruiu alguns átomos</button>
            <button type="button" data-choice="c">Um produto gasoso saiu do sistema que estava sobre a balança</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o ponto central. A balança mede o sistema que está sobre ela; se matéria gasosa escapa, a massa desse sistema aberto pode diminuir." data-wrong-text="No Capítulo 05 vimos que reações reorganizam átomos. Procure uma explicação envolvendo a fronteira do sistema, não o desaparecimento da matéria."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> compreender por que a massa é conservada nas reações químicas, por que sistemas abertos podem dar a impressão de ganho ou perda de massa e como essa ideia aparece nas equações balanceadas.</p>
      </div>
    </section>

    <section>
      <h3>1. Antes de falar em conservação, precisamos definir o sistema</h3>
      <p>Em Ciências, um <strong>sistema</strong> é a parte do universo que escolhemos estudar. A fronteira pode ser física, como a parede de uma garrafa, ou apenas uma delimitação conceitual. Tudo o que fica fora é chamado de vizinhança ou ambiente.</p>
      <p>Para discutir massa, a pergunta essencial é: <strong>matéria consegue atravessar essa fronteira?</strong></p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Sistema aberto</strong><p>Pode trocar matéria com o ambiente. Um copo aberto durante uma reação que libera gás é um exemplo.</p></div>
        <div class="example-box"><strong class="card-title">Sistema fechado</strong><p>Não troca matéria com o ambiente durante o experimento considerado. Uma garrafa bem fechada com um balão que retém o gás pode aproximar essa condição.</p></div>
      </div>

      <div class="visual-box">
        <strong class="card-title">A mesma reação, duas fronteiras diferentes</strong>
        <svg class="lesson-visual" viewBox="0 0 760 340" role="img" aria-label="Comparação entre uma reação em copo aberto e uma reação em garrafa fechada com balão. No copo, moléculas de gás atravessam a fronteira do sistema. Na garrafa, o gás fica retido no conjunto e a massa total permanece no sistema.">
          <defs><marker id="cap06ArrowSystem" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="35" y="55" width="300" height="230" rx="18" fill="#fff8f0" stroke="#e0b56d" stroke-width="2"/>
          <text x="185" y="85" text-anchor="middle" font-size="18" font-weight="900" fill="#8a6200">Sistema aberto</text>
          <path d="M115 135 L135 255 H235 L255 135" fill="#eef5ff" stroke="#617087" stroke-width="3"/>
          <circle cx="165" cy="205" r="8" fill="#1967d2"/><circle cx="200" cy="220" r="8" fill="#1967d2"/><circle cx="220" cy="190" r="8" fill="#1967d2"/>
          <circle cx="175" cy="140" r="7" fill="#d08700"/><circle cx="205" cy="115" r="7" fill="#d08700"/>
          <path d="M185 128 V96" stroke="#1967d2" stroke-width="3" marker-end="url(#cap06ArrowSystem)"/>
          <text x="185" y="275" text-anchor="middle" font-size="13" fill="#617087">gás pode sair do conjunto medido</text>

          <rect x="425" y="55" width="300" height="230" rx="18" fill="#f3f8f1" stroke="#a9cfa4" stroke-width="2"/>
          <text x="575" y="85" text-anchor="middle" font-size="18" font-weight="900" fill="#35633c">Sistema fechado</text>
          <rect x="515" y="155" width="120" height="105" rx="18" fill="#eef5ff" stroke="#617087" stroke-width="3"/>
          <path d="M555 155 V125 H595 V155" fill="none" stroke="#617087" stroke-width="3"/>
          <ellipse cx="575" cy="113" rx="52" ry="38" fill="#fff5eb" stroke="#d08700" stroke-width="3"/>
          <circle cx="545" cy="208" r="8" fill="#1967d2"/><circle cx="575" cy="225" r="8" fill="#1967d2"/><circle cx="608" cy="202" r="8" fill="#1967d2"/>
          <circle cx="552" cy="104" r="7" fill="#d08700"/><circle cx="580" cy="92" r="7" fill="#d08700"/><circle cx="602" cy="110" r="7" fill="#d08700"/>
          <text x="575" y="275" text-anchor="middle" font-size="13" fill="#617087">o gás continua dentro do conjunto medido</text>
        </svg>
      </div>

      <div class="ok-box"><strong>Regra de ouro</strong><p>Não pergunte apenas “a massa aumentou ou diminuiu?”. Pergunte: <strong>massa de quê?</strong> Qual sistema foi colocado sobre a balança e houve entrada ou saída de matéria?</p></div>
    </section>

    <section>
      <h3>2. Lavoisier ajudou a transformar essa comparação em uma lei quantitativa</h3>
      <p>No século XVIII, Antoine Lavoisier realizou experimentos com medições cuidadosas de massa, inclusive em recipientes fechados. Esses trabalhos ajudaram a consolidar a ideia de que, em uma transformação química comum, a matéria não surge do nada nem desaparece: ela é reorganizada.</p>
      <p>A formulação escolar conhecida como <strong>Lei da Conservação da Massa</strong> pode ser expressa assim: em um sistema fechado, a massa total dos reagentes é igual à massa total dos produtos, dentro da precisão experimental.</p>

      <div class="concept-flow">
        <div><strong>Reagentes</strong><span>massa total antes</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Reação</strong><span>átomos se reorganizam</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Produtos</strong><span>mesma massa total</span></div>
      </div>

      <div class="note-box"><strong>Precisão científica</strong><p>Em reações químicas comuns, tratamos a massa como conservada com excelente aproximação. Uma descrição mais fundamental envolve conservação de massa-energia, mas as variações de massa associadas às energias químicas são pequenas demais para as balanças escolares usuais. Para este curso, a lei clássica é o modelo adequado.</p></div>
    </section>

    <section>
      <h3>3. A explicação microscópica é simples e poderosa: os átomos são rearranjados</h3>
      <p>No Capítulo 05 vimos que uma reação química forma novas substâncias por reorganização dos átomos. Se o tipo e a quantidade de átomos permanecem os mesmos antes e depois, a massa total associada a esse conjunto também permanece.</p>
      <p>Considere a formação de água representada por:</p>

      <div class="concept-flow">
        <div><strong>2 H₂</strong><span>4 átomos de H</span></div>
        <div class="flow-arrow">+</div>
        <div><strong>O₂</strong><span>2 átomos de O</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>2 H₂O</strong><span>4 H + 2 O</span></div>
      </div>

      <div class="visual-box">
        <strong class="card-title">Nada some: as conexões mudam</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Representação por partículas da reação entre duas moléculas de hidrogênio e uma molécula de oxigênio formando duas moléculas de água. O mesmo número de átomos de hidrogênio e oxigênio aparece antes e depois; apenas as combinações mudam.">
          <defs><marker id="cap06ArrowAtoms" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <text x="190" y="42" text-anchor="middle" font-size="16" font-weight="900" fill="#104a9b">Antes</text>
          <circle cx="95" cy="105" r="24" fill="#dfe8f4" stroke="#617087"/><circle cx="145" cy="105" r="24" fill="#dfe8f4" stroke="#617087"/>
          <circle cx="95" cy="195" r="24" fill="#dfe8f4" stroke="#617087"/><circle cx="145" cy="195" r="24" fill="#dfe8f4" stroke="#617087"/>
          <circle cx="235" cy="150" r="30" fill="#f7d9d5" stroke="#b42318"/><circle cx="300" cy="150" r="30" fill="#f7d9d5" stroke="#b42318"/>
          <g font-size="14" font-weight="900" text-anchor="middle"><text x="95" y="110">H</text><text x="145" y="110">H</text><text x="95" y="200">H</text><text x="145" y="200">H</text><text x="235" y="155" fill="#b42318">O</text><text x="300" y="155" fill="#b42318">O</text></g>
          <path d="M340 150 H430" stroke="#1967d2" stroke-width="4" marker-end="url(#cap06ArrowAtoms)"/>
          <text x="565" y="42" text-anchor="middle" font-size="16" font-weight="900" fill="#35633c">Depois</text>
          <g>
            <circle cx="525" cy="145" r="30" fill="#f7d9d5" stroke="#b42318"/><circle cx="485" cy="110" r="24" fill="#dfe8f4" stroke="#617087"/><circle cx="565" cy="110" r="24" fill="#dfe8f4" stroke="#617087"/>
            <circle cx="655" cy="195" r="30" fill="#f7d9d5" stroke="#b42318"/><circle cx="615" cy="230" r="24" fill="#dfe8f4" stroke="#617087"/><circle cx="695" cy="230" r="24" fill="#dfe8f4" stroke="#617087"/>
          </g>
          <g font-size="14" font-weight="900" text-anchor="middle"><text x="525" y="150" fill="#b42318">O</text><text x="485" y="115">H</text><text x="565" y="115">H</text><text x="655" y="200" fill="#b42318">O</text><text x="615" y="235">H</text><text x="695" y="235">H</text></g>
          <text x="380" y="285" text-anchor="middle" font-size="13" fill="#617087">4 H e 2 O antes; 4 H e 2 O depois.</text>
        </svg>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Conecte os capítulos</strong>
        <p>Por que uma equação química balanceada está relacionada à conservação da massa?</p>
        <div class="choice-row"><button type="button" data-choice="a">Porque força todos os coeficientes a serem iguais</button><button type="button" data-choice="b">Porque representa o mesmo número de átomos de cada elemento antes e depois</button><button type="button" data-choice="c">Porque transforma todos os reagentes em uma única substância</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. O balanceamento traduz, na linguagem simbólica, a conservação dos átomos numa reação química." data-wrong-text="Compare a contagem de cada elemento nos dois lados da seta."></div>
      </div>
    </section>

    <section>
      <h3>4. Sistema aberto pode parecer contrariar a lei — mas o erro está na fronteira escolhida</h3>
      <p>Imagine 100,0 g de um conjunto reagente em um recipiente aberto. Durante a reação, 3,5 g de um gás escapam para o ambiente. Se a balança mede apenas o recipiente que ficou sobre o prato, ela pode registrar 96,5 g ao final.</p>
      <p>Isso não significa que 3,5 g de matéria foram destruídos. Significa que essa massa <strong>atravessou a fronteira do sistema medido</strong>. Se incluíssemos também o gás liberado, a massa total continuaria sendo 100,0 g.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>O que está sendo considerado?</th><th>Massa</th><th>Interpretação</th></tr></thead>
          <tbody>
            <tr><td>Conjunto antes</td><td>100,0 g</td><td>massa inicial do sistema escolhido</td></tr>
            <tr><td>Recipiente + material restante</td><td>96,5 g</td><td>parte que continuou sobre a balança</td></tr>
            <tr><td>Gás que saiu</td><td>3,5 g</td><td>matéria transferida ao ambiente</td></tr>
            <tr><td>Total considerado</td><td>100,0 g</td><td>96,5 g + 3,5 g</td></tr>
          </tbody>
        </table>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Faça a conta</strong>
        <p>Um sistema aberto tinha 82,0 g antes de uma reação e ficou com 79,2 g sobre a balança. Se a única perda foi um gás que escapou, qual massa de gás saiu?</p>
        <div class="choice-row"><button type="button" data-choice="a">1,8 g</button><button type="button" data-choice="b">2,2 g</button><button type="button" data-choice="c">2,8 g</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto: 82,0 − 79,2 = 2,8 g de matéria saíram do sistema medido." data-wrong-text="Subtraia a massa final medida da massa inicial."></div>
      </div>
    </section>

    <section>
      <h3>5. Uma reação também pode parecer ganhar massa quando matéria entra do ambiente</h3>
      <p>O caso oposto acontece quando o sistema aberto incorpora matéria externa. A formação de ferrugem é um bom exemplo: o ferro reage com oxigênio do ar. Se acompanharmos apenas a peça metálica, sua massa pode <strong>aumentar</strong> porque átomos de oxigênio passam a fazer parte do sólido.</p>
      <p>Portanto, “a massa aumentou” não significa criação de matéria. Parte da massa veio do ambiente.</p>

      <div class="visual-box">
        <strong class="card-title">Ganho aparente de massa: o ambiente também participa</strong>
        <div class="concept-flow">
          <div><strong>Ferro</strong><span>massa inicial da peça</span></div>
          <div class="flow-arrow">+</div>
          <div><strong>O₂ do ar</strong><span>entra no sistema peça</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>Óxido de ferro</strong><span>massa maior que a peça inicial</span></div>
        </div>
        <p class="visual-caption">Se ampliarmos o sistema para incluir também o oxigênio consumido, a conservação da massa fica evidente.</p>
      </div>

      <div class="note-box"><strong>Esse raciocínio corrige uma confusão histórica importante</strong><p>Antes da compreensão moderna da combustão, aumentos e diminuições de massa em sistemas abertos podiam ser interpretados de forma equivocada. Medir cuidadosamente e controlar a troca de matéria foi decisivo para explicar corretamente esses fenômenos.</p></div>
    </section>

    <section>
      <h3>6. Conservação da massa permite descobrir valores desconhecidos</h3>
      <p>Em um sistema fechado, se conhecemos as massas de todas as substâncias menos uma, podemos usar a conservação para determinar o valor faltante. A ideia central é:</p>

      <div class="ok-box"><strong>massa total dos reagentes = massa total dos produtos</strong><p>Essa igualdade vale para o conjunto completo considerado, e não necessariamente para cada substância individualmente.</p></div>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Situação</th><th>Cálculo</th><th>Resultado</th></tr></thead>
          <tbody>
            <tr><td>12 g de A + 8 g de B → produto C</td><td>12 + 8</td><td>20 g de C</td></tr>
            <tr><td>15 g de X → 9 g de Y + produto Z</td><td>15 − 9</td><td>6 g de Z</td></tr>
            <tr><td>24 g de M + N → 40 g de P</td><td>40 − 24</td><td>16 g de N</td></tr>
          </tbody>
        </table>
      </div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Resolva sem fórmula decorada</strong>
        <p>Em um recipiente fechado, 18 g de uma substância A reagem com 7 g de B e formam apenas C. Qual é a massa de C?</p>
        <div class="choice-row"><button type="button" data-choice="a">25 g</button><button type="button" data-choice="b">11 g</button><button type="button" data-choice="c">126 g</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto: 18 + 7 = 25 g. Como o sistema é fechado e há apenas um produto, toda a massa dos reagentes aparece no produto." data-wrong-text="Some as massas dos reagentes; não multiplique valores que representam massas distintas."></div>
      </div>
    </section>

    <section>
      <h3>7. Conservar massa não significa conservar número de moléculas</h3>
      <p>Esse ponto é essencial. Numa reação, o número de moléculas pode aumentar, diminuir ou permanecer igual. O que precisa ser conservado em uma equação química comum é o <strong>número de átomos de cada elemento</strong>.</p>
      <p>Na reação 2 H₂ + O₂ → 2 H₂O, há três moléculas reagentes representadas (duas H₂ e uma O₂) e duas moléculas de produto. O número de moléculas mudou, mas continuamos com quatro átomos de H e dois de O.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Conserva</strong><p>Quantidade de átomos de cada elemento numa reação química balanceada.</p></div>
        <div class="example-box"><strong class="card-title">Pode mudar</strong><p>Número total de moléculas ou unidades representadas.</p></div>
        <div class="example-box"><strong class="card-title">Pode mudar</strong><p>Estado físico, cor, volume, temperatura e outras propriedades do sistema.</p></div>
      </div>
    </section>

    <section>
      <h3>8. A balança não “prova sozinha” a conservação: o experimento precisa ser bem planejado</h3>
      <p>Uma boa investigação precisa controlar vazamentos, evaporação, respingos, resolução da balança e o que foi incluído na pesagem. Se um balão deixa escapar gás, se parte do líquido evapora ou se o recipiente é pesado sem a tampa depois da reação, a comparação pode ficar comprometida.</p>
      <p>Por isso, resultado experimental e lei científica não são opostos. A lei orienta o que esperamos; o experimento precisa ser desenhado de modo que a medição realmente corresponda ao sistema que queremos testar.</p>

      <div id="cap06Investigator" class="visual-box">
        <strong class="card-title">Investigador de massa</strong>
        <p>Escolha uma situação e decida o que a balança realmente está medindo.</p>
        <div class="choice-row">
          <button type="button" data-case="balloon">Garrafa + balão</button>
          <button type="button" data-case="open">Copo aberto</button>
          <button type="button" data-case="rust">Ferro ao ar</button>
          <button type="button" data-case="spill">Recipiente com respingo</button>
        </div>
        <div id="cap06InvestigatorResult" class="ok-box"><strong>Escolha um caso.</strong><p>A análise aparecerá aqui.</p></div>
      </div>
    </section>

    <section>
      <h3>9. O que o Capítulo 06 acrescenta ao balanceamento</h3>
      <p>No capítulo anterior, balanceamos equações contando átomos. Agora entendemos <strong>por que</strong> essa contagem é obrigatória: uma equação não balanceada contradiz a conservação dos átomos e, portanto, não representa corretamente a reação.</p>
      <p>Isso também prepara o próximo passo. Até agora contamos partículas em números pequenos — 2 moléculas, 3 moléculas, 4 átomos. Em laboratório, porém, trabalhamos com quantidades gigantescas de partículas. O Capítulo 07 apresentará a ferramenta criada para lidar com essa escala: o <strong>mol</strong>.</p>

      <div class="ok-box"><strong>Ideia que fecha o capítulo</strong><p><strong>Reações reorganizam átomos; sistemas podem trocar matéria; a massa total só pode ser interpretada corretamente quando sabemos qual sistema está sendo considerado.</strong></p></div>
    </section>

    <section class="chapter-checkpoint">
      <h3>10. Checkpoint — você consegue rastrear para onde foi a massa?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Sistema</strong><p>Qual definição descreve melhor um sistema fechado no contexto deste capítulo?</p><div class="choice-row"><button type="button" data-choice="a">Um sistema sem nenhuma energia</button><button type="button" data-choice="b">Um sistema que não troca matéria com o ambiente durante o processo considerado</button><button type="button" data-choice="c">Um sistema que nunca sofre reação química</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A característica decisiva aqui é não haver troca de matéria através da fronteira." data-wrong-text="Fechado não significa sem energia nem sem reação; pense na passagem de matéria."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Lei de conservação</strong><p>Em um sistema fechado durante uma reação química comum, o que esperamos para a massa total?</p><div class="choice-row"><button type="button" data-choice="a">Sempre aumentar</button><button type="button" data-choice="b">Sempre diminuir</button><button type="button" data-choice="c">Permanecer constante dentro da precisão experimental</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A massa total é conservada no modelo químico clássico usado aqui." data-wrong-text="A reação transforma substâncias, mas não cria nem destrói matéria no modelo estudado."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Sistema aberto</strong><p>Por que um comprimido efervescente em água num copo aberto pode apresentar menor massa final sobre a balança?</p><div class="choice-row"><button type="button" data-choice="a">Porque um produto gasoso pode escapar para o ambiente</button><button type="button" data-choice="b">Porque átomos deixam de existir</button><button type="button" data-choice="c">Porque a balança destrói parte da matéria</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A massa saiu do sistema medido na forma de matéria gasosa." data-wrong-text="Procure uma transferência de matéria através da fronteira do sistema."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Ganho aparente</strong><p>Uma lã de aço aumenta de massa após reagir com oxigênio do ar. Qual explicação é adequada?</p><div class="choice-row"><button type="button" data-choice="a">A matéria foi criada dentro da lã</button><button type="button" data-choice="b">Oxigênio do ambiente foi incorporado ao material</button><button type="button" data-choice="c">O ferro produziu novos prótons</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. Ao considerar também o oxigênio que entrou, a conservação fica evidente." data-wrong-text="O aumento vem de matéria que entrou no sistema, não de criação de átomos."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Cálculo</strong><p>Em sistema fechado, 13 g de A reagem com 12 g de B formando apenas C. Qual massa de C é esperada?</p><div class="choice-row"><button type="button" data-choice="a">1 g</button><button type="button" data-choice="b">156 g</button><button type="button" data-choice="c">25 g</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto: 13 + 12 = 25 g." data-wrong-text="A massa total dos reagentes deve aparecer nos produtos do sistema fechado."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Balanceamento</strong><p>O que os coeficientes de uma equação balanceada garantem?</p><div class="choice-row"><button type="button" data-choice="a">A mesma quantidade de átomos de cada elemento nos dois lados</button><button type="button" data-choice="b">A mesma quantidade de moléculas nos dois lados</button><button type="button" data-choice="c">A mesma massa para cada substância individual</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. A contagem de átomos é conservada; número de moléculas e massas individuais podem mudar." data-wrong-text="Balancear não exige igual número de moléculas, mas igual contagem de cada elemento."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Interpretação experimental</strong><p>Uma experiência em recipiente supostamente fechado perdeu 0,8 g. Qual primeira atitude científica é mais adequada?</p><div class="choice-row"><button type="button" data-choice="a">Concluir que a conservação da massa foi refutada</button><button type="button" data-choice="b">Verificar vazamentos, evaporação, respingos e precisão da medição</button><button type="button" data-choice="c">Alterar os números para que deem certo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Antes de uma conclusão extraordinária, precisamos verificar se o experimento realmente controlou a troca de matéria e a medição." data-wrong-text="Ciência não ajusta dados arbitrariamente nem abandona uma lei consolidada sem examinar o procedimento."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Síntese</strong><p>Qual frase reúne melhor o capítulo?</p><div class="choice-row"><button type="button" data-choice="a">Toda massa medida numa reação precisa permanecer igual, mesmo em qualquer sistema aberto</button><button type="button" data-choice="b">Se a massa muda na balança, a matéria foi criada ou destruída</button><button type="button" data-choice="c">A massa total é conservada, mas medições de sistemas abertos podem mudar quando matéria entra ou sai</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. A fronteira do sistema é a chave para interpretar a balança corretamente." data-wrong-text="Não confunda massa total do conjunto completo com a massa de uma parte aberta que troca matéria com o ambiente."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um aluno realiza a reação entre vinagre e bicarbonato em um copo aberto e diz: “A massa diminuiu, então Lavoisier estava errado”. Responda em cinco partes: <strong>1)</strong> defina o sistema medido; <strong>2)</strong> explique o papel do gás liberado; <strong>3)</strong> diga o que mudaria usando uma garrafa com balão; <strong>4)</strong> relacione conservação da massa ao balanceamento; <strong>5)</strong> indique pelo menos um cuidado experimental necessário.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>O copo aberto permite saída de matéria; o gás carrega massa para fora do sistema que ficou sobre a balança; um conjunto fechado que retenha o gás mantém a matéria dentro da fronteira; uma equação balanceada conserva a quantidade de átomos de cada elemento; e o experimento deve controlar vazamentos, evaporação, respingos e a precisão da balança.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo desenvolve a Lei da Conservação da Massa em transformações químicas, relacionando evidências macroscópicas, reorganização atômica, sistemas abertos e fechados, medições experimentais, interpretação quantitativa e balanceamento de equações. Também fortalece práticas de investigação, controle de variáveis e análise crítica de resultados.</p></details>
  `;

  const cases = {
    balloon:{title:'Garrafa + balão', text:'Se o conjunto está vedado e o balão retém o gás, a matéria permanece dentro do sistema pesado. A massa total antes e depois deve permanecer praticamente igual, dentro da precisão experimental.'},
    open:{title:'Copo aberto', text:'Se a reação libera um gás que escapa, a massa do material que continua sobre a balança pode diminuir. A matéria não desapareceu; parte saiu da fronteira do sistema medido.'},
    rust:{title:'Ferro ao ar', text:'A peça pode ganhar massa porque incorpora oxigênio do ambiente. Ao ampliar o sistema para incluir o oxigênio consumido, não há criação de matéria.'},
    spill:{title:'Recipiente com respingo', text:'Um respingo que sai do recipiente transfere matéria para fora do sistema pesado. Uma diferença de massa nesse caso pode ser erro de procedimento, não evidência contra a conservação.'}
  };

  function initChapter(root) {
    const investigator = $('#cap06Investigator', root);
    const result = $('#cap06InvestigatorResult', root);
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
      technical:'Conservação da massa • sistemas, gases e balanceamento',
      title:'A massa desaparece numa reação química?',
      objective:'<strong>Objetivo:</strong> compreender a conservação da massa em reações químicas, interpretar corretamente sistemas abertos e fechados e relacionar medições de massa à reorganização dos átomos e ao balanceamento de equações.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('06 Conservação da massa', showChapter);
})();