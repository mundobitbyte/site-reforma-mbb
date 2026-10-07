(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Uma equipe de tecnologia testa uma pequena célula a combustível. O sistema recebe hidrogênio e oxigênio e produz água. Antes do teste, surge uma pergunta prática: quanto de água pode ser formado com as quantidades disponíveis dos dois gases?</strong>
        <p>A reação global pode ser representada por <strong>2 H₂ + O₂ → 2 H₂O</strong>. A equação já está balanceada, mas isso não significa que basta comparar os números escritos com as massas dos reagentes. Os coeficientes 2 : 1 : 2 expressam uma <strong>proporção entre entidades químicas</strong> e, em escala de laboratório, entre quantidades em mol.</p>
        <p>Se o sistema receber reagentes fora dessa proporção, um deles poderá acabar primeiro. Saber prever isso é importante para planejar processos, reduzir desperdícios e estimar a quantidade máxima de produto.</p>

        <div class="quick-question" data-choice-question data-correct="c">
          <strong>Antes de calcular, interprete</strong>
          <p>Na equação 2 H₂ + O₂ → 2 H₂O, o que significa a proporção 2 : 1 : 2?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">2 g de H₂ reagem sempre com 1 g de O₂ e formam 2 g de H₂O</button>
            <button type="button" data-choice="b">A reação só funciona com exatamente três moléculas no recipiente</button>
            <button type="button" data-choice="c">Para cada 2 entidades ou 2 mol de H₂ consumidos, 1 entidade ou 1 mol de O₂ é consumido e 2 entidades ou 2 mol de H₂O são formados</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Os coeficientes fornecem a proporção estequiométrica em entidades ou em mol. Para trabalhar com massa, ainda precisamos usar as massas molares." data-wrong-text="Não leia os coeficientes como gramas. Eles representam razões entre quantidades de entidades químicas."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> aprender a usar uma equação balanceada como um mapa quantitativo para responder: <strong>quanto de reagente é necessário, quanto produto pode ser formado e qual reagente acaba primeiro?</strong></p>
      </div>
    </section>

    <section>
      <h3>1. Estequiometria é o estudo das proporções em uma reação química</h3>
      <p>No Capítulo 05 aprendemos a balancear equações. No Capítulo 06 relacionamos o balanceamento à conservação dos átomos. No Capítulo 07 construímos a ponte entre massa, mol e partículas. Agora essas ideias se unem na <strong>estequiometria</strong>: o estudo quantitativo das relações entre reagentes e produtos.</p>
      <p>A equação balanceada funciona como uma espécie de <strong>receita em escala molecular</strong>, mas com uma diferença importante: os números indicam razões entre quantidades de matéria, não massas prontas para serem copiadas.</p>

      <div class="visual-box">
        <strong class="card-title">Da equação para a proporção</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Esquema da reação dois H2 mais O2 formando duas H2O. Abaixo da equação, os coeficientes são interpretados primeiro como moléculas e depois como mol, mostrando a razão dois para um para dois.">
          <text x="380" y="55" text-anchor="middle" font-size="30" font-weight="900" fill="#104a9b">2 H₂ + O₂ → 2 H₂O</text>
          <rect x="80" y="100" width="180" height="120" rx="16" fill="#eef5ff" stroke="#9dbce5"/>
          <rect x="290" y="100" width="180" height="120" rx="16" fill="#fff8dc" stroke="#e2c56a"/>
          <rect x="500" y="100" width="180" height="120" rx="16" fill="#f3f8f1" stroke="#bad7b5"/>
          <text x="170" y="135" text-anchor="middle" font-size="18" font-weight="900" fill="#104a9b">H₂</text><text x="170" y="166" text-anchor="middle" font-size="15" fill="#4b5b72">2 moléculas</text><text x="170" y="195" text-anchor="middle" font-size="15" fill="#4b5b72">ou 2 mol</text>
          <text x="380" y="135" text-anchor="middle" font-size="18" font-weight="900" fill="#8a6200">O₂</text><text x="380" y="166" text-anchor="middle" font-size="15" fill="#4b5b72">1 molécula</text><text x="380" y="195" text-anchor="middle" font-size="15" fill="#4b5b72">ou 1 mol</text>
          <text x="590" y="135" text-anchor="middle" font-size="18" font-weight="900" fill="#35633c">H₂O</text><text x="590" y="166" text-anchor="middle" font-size="15" fill="#4b5b72">2 moléculas</text><text x="590" y="195" text-anchor="middle" font-size="15" fill="#4b5b72">ou 2 mol</text>
          <text x="380" y="270" text-anchor="middle" font-size="18" font-weight="900" fill="#1967d2">razão estequiométrica = 2 : 1 : 2</text>
        </svg>
      </div>

      <div class="ok-box"><strong>Regra central</strong><p>Antes de fazer qualquer conta estequiométrica, a equação precisa estar <strong>corretamente escrita e balanceada</strong>. Os coeficientes dessa equação são a fonte das proporções usadas no cálculo.</p></div>
    </section>

    <section>
      <h3>2. A proporção da equação trabalha naturalmente em mol</h3>
      <p>Na reação 2 H₂ + O₂ → 2 H₂O, podemos escrever três relações úteis:</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">H₂ : O₂</strong><p>2 mol de H₂ reagem com 1 mol de O₂.</p></div>
        <div class="example-box"><strong class="card-title">H₂ : H₂O</strong><p>2 mol de H₂ podem formar 2 mol de H₂O.</p></div>
        <div class="example-box"><strong class="card-title">O₂ : H₂O</strong><p>1 mol de O₂ pode formar 2 mol de H₂O.</p></div>
      </div>

      <p>Essas relações podem ser multiplicadas ou divididas por qualquer fator. Se 1 mol de O₂ forma 2 mol de H₂O, então 3 mol de O₂, havendo H₂ suficiente, podem formar 6 mol de H₂O.</p>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Use apenas a razão da equação</strong>
        <p>Se 4 mol de H₂ reagem completamente com O₂ suficiente, quantos mol de H₂O podem ser formados?</p>
        <div class="choice-row"><button type="button" data-choice="a">2 mol</button><button type="button" data-choice="b">4 mol</button><button type="button" data-choice="c">8 mol</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. H₂ e H₂O aparecem na razão 2 : 2, portanto a razão em mol é 1 : 1." data-wrong-text="Compare somente os coeficientes de H₂ e H₂O: 2 para 2."></div>
      </div>
    </section>

    <section>
      <h3>3. Quando o dado está em massa, o mol vira a ponte obrigatória</h3>
      <p>Suponha que o laboratório tenha <strong>4,0 g de H₂</strong> e oxigênio em excesso. Quanto de água pode ser formado?</p>
      <p>A massa molar de H₂ é aproximadamente 2,0 g/mol e a de H₂O, 18,0 g/mol. O caminho correto é:</p>

      <div class="concept-flow">
        <div><strong>4,0 g H₂</strong><span>dado</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>2,0 mol H₂</strong><span>÷ 2,0 g/mol</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>2,0 mol H₂O</strong><span>razão 2 : 2</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>36 g H₂O</strong><span>× 18 g/mol</span></div>
      </div>

      <div class="note-box"><strong>Por que 4 g de H₂ podem produzir 36 g de H₂O?</strong><p>Porque a água não é formada apenas pelo hidrogênio. O oxigênio também fornece massa ao produto. Neste exemplo, 4 g de H₂ reagem com 32 g de O₂, totalizando 36 g de H₂O. A conservação da massa continua válida.</p></div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Não faça proporção direta entre gramas e coeficientes</strong>
        <p>Por que seria incorreto afirmar que “2 g de H₂ reagem com 1 g de O₂” apenas porque os coeficientes são 2 e 1?</p>
        <div class="choice-row"><button type="button" data-choice="a">Porque equações químicas não podem ser usadas em cálculos</button><button type="button" data-choice="b">Porque H₂ e O₂ têm sempre a mesma massa molar</button><button type="button" data-choice="c">Porque os coeficientes expressam proporções em entidades ou mol; as massas dependem também das massas molares</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. A passagem de mol para gramas exige considerar a massa molar de cada substância." data-wrong-text="Coeficiente e massa molar desempenham papéis diferentes no cálculo."></div>
      </div>
    </section>

    <section>
      <h3>4. Um roteiro único evita decorar várias “regras de três”</h3>
      <p>Em vez de memorizar um procedimento diferente para cada exercício, use sempre a mesma lógica. Primeiro converta o dado para mol, depois atravesse a equação usando os coeficientes e, por fim, converta para a unidade pedida.</p>

      <div class="visual-box">
        <strong class="card-title">Rota geral da estequiometria</strong>
        <svg class="lesson-visual" viewBox="0 0 760 270" role="img" aria-label="Fluxo em cinco etapas: dado do problema, converter para mol, usar a razão dos coeficientes da equação balanceada, obter mol da substância desejada e converter para a unidade pedida.">
          <defs><marker id="cap08ArrowRoute" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <g font-size="14" text-anchor="middle">
            <rect x="20" y="80" width="125" height="95" rx="14" fill="#eef5ff" stroke="#9dbce5"/><text x="82" y="116" font-weight="900" fill="#104a9b">1. Dado</text><text x="82" y="142" fill="#4b5b72">g, mol ou partículas</text>
            <rect x="170" y="80" width="125" height="95" rx="14" fill="#f3f8f1" stroke="#bad7b5"/><text x="232" y="116" font-weight="900" fill="#35633c">2. Mol</text><text x="232" y="142" fill="#4b5b72">converta se preciso</text>
            <rect x="320" y="65" width="125" height="125" rx="14" fill="#fff8dc" stroke="#e2c56a"/><text x="382" y="104" font-weight="900" fill="#8a6200">3. Razão</text><text x="382" y="130" fill="#4b5b72">coeficientes da</text><text x="382" y="151" fill="#4b5b72">equação balanceada</text>
            <rect x="470" y="80" width="125" height="95" rx="14" fill="#f5f2ff" stroke="#c6b8f5"/><text x="532" y="116" font-weight="900" fill="#5d42bd">4. Mol</text><text x="532" y="142" fill="#4b5b72">da substância pedida</text>
            <rect x="620" y="80" width="120" height="95" rx="14" fill="#fff5eb" stroke="#e5c3a3"/><text x="680" y="116" font-weight="900" fill="#7e3d18">5. Resposta</text><text x="680" y="142" fill="#4b5b72">unidade pedida</text>
          </g>
          <path d="M145 127 H169" stroke="#1967d2" stroke-width="4" marker-end="url(#cap08ArrowRoute)"/><path d="M295 127 H319" stroke="#1967d2" stroke-width="4" marker-end="url(#cap08ArrowRoute)"/><path d="M445 127 H469" stroke="#1967d2" stroke-width="4" marker-end="url(#cap08ArrowRoute)"/><path d="M595 127 H619" stroke="#1967d2" stroke-width="4" marker-end="url(#cap08ArrowRoute)"/>
          <text x="380" y="235" text-anchor="middle" font-size="15" font-weight="900" fill="#1967d2">dado → mol → proporção → mol → resposta</text>
        </svg>
      </div>

      <div class="ok-box"><strong>Uma pergunta antes da conta</strong><p>Qual substância foi dada? Qual substância foi pedida? Depois marque os dois coeficientes correspondentes na equação. Isso reduz bastante os erros de interpretação.</p></div>
    </section>

    <section>
      <h3>5. O reagente limitante é aquele que acaba primeiro</h3>
      <p>Até agora supusemos que um reagente estivesse em excesso. Na prática, podemos receber quantidades específicas de todos os reagentes. Nesse caso, a proporção da equação decide qual deles limita a reação.</p>
      <p>Imagine o teste da célula a combustível com <strong>4 mol de H₂</strong> e <strong>1,5 mol de O₂</strong>. A equação exige 2 mol de H₂ para cada 1 mol de O₂.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Se usarmos os 4 mol de H₂</strong><p>Seriam necessários 2 mol de O₂. Mas há apenas 1,5 mol. Portanto, falta oxigênio.</p></div>
        <div class="example-box"><strong class="card-title">Se usarmos os 1,5 mol de O₂</strong><p>São necessários 3 mol de H₂. Como há 4 mol, sobra 1 mol de H₂.</p></div>
      </div>

      <p>Logo, <strong>O₂ é o reagente limitante</strong> e H₂ está em excesso. Como 1 mol de O₂ pode formar 2 mol de H₂O, 1,5 mol de O₂ podem formar no máximo <strong>3 mol de H₂O</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">O limitante determina o máximo de produto</strong>
        <div class="concept-flow">
          <div><strong>4 mol H₂</strong><span>disponíveis</span></div>
          <div class="flow-arrow">+</div>
          <div><strong>1,5 mol O₂</strong><span>disponíveis</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>3 mol H₂O</strong><span>máximo teórico</span></div>
          <div class="flow-arrow">+</div>
          <div><strong>1 mol H₂</strong><span>sobra</span></div>
        </div>
      </div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Identifique quem acaba primeiro</strong>
        <p>Para 2 H₂ + O₂ → 2 H₂O, uma mistura contém 2 mol de H₂ e 2 mol de O₂. Qual é o reagente limitante?</p>
        <div class="choice-row"><button type="button" data-choice="a">H₂</button><button type="button" data-choice="b">O₂</button><button type="button" data-choice="c">Nenhum; ambos acabam juntos</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. 2 mol de H₂ precisam de apenas 1 mol de O₂. Portanto H₂ acaba primeiro e sobra 1 mol de O₂." data-wrong-text="Compare as quantidades disponíveis com a razão 2 mol H₂ : 1 mol O₂."></div>
      </div>
    </section>

    <section>
      <h3>6. Rendimento teórico e rendimento real não são necessariamente iguais</h3>
      <p>A estequiometria calcula quanto produto <strong>poderia</strong> ser formado se o processo seguisse a reação considerada de modo ideal e o reagente limitante fosse aproveitado completamente. Esse valor é chamado de <strong>rendimento teórico</strong>.</p>
      <p>Num experimento real, podem ocorrer perdas na transferência, reação incompleta, formação de outros produtos ou dificuldades de separação. A quantidade realmente obtida pode ser menor: é o <strong>rendimento real</strong>.</p>

      <div class="concept-flow">
        <div><strong>Equação + quantidades</strong><span>previsão</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Rendimento teórico</strong><span>máximo previsto</span></div>
        <div class="flow-arrow">≠</div>
        <div><strong>Rendimento real</strong><span>o que foi obtido</span></div>
      </div>

      <div class="note-box"><strong>Não confunda conservação da massa com rendimento de 100%</strong><p>A massa continua sendo conservada no sistema considerado. Um rendimento menor não significa que matéria desapareceu; pode significar que parte dos reagentes não virou o produto desejado, que houve produtos secundários ou perdas na coleta do produto.</p></div>
    </section>

    <section>
      <h3>7. Escalar uma reação não altera sua proporção</h3>
      <p>Uma equação balanceada pode ser multiplicada por qualquer fator sem mudar a razão química. Se 2 H₂ + O₂ → 2 H₂O, então também podemos pensar em 20 mol de H₂ + 10 mol de O₂ → 20 mol de H₂O. A escala mudou; a proporção 2 : 1 : 2 permaneceu.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>H₂</th><th>O₂</th><th>H₂O</th><th>Razão</th></tr></thead>
          <tbody>
            <tr><td>2 mol</td><td>1 mol</td><td>2 mol</td><td>2 : 1 : 2</td></tr>
            <tr><td>4 mol</td><td>2 mol</td><td>4 mol</td><td>2 : 1 : 2</td></tr>
            <tr><td>10 mol</td><td>5 mol</td><td>10 mol</td><td>2 : 1 : 2</td></tr>
            <tr><td>0,50 mol</td><td>0,25 mol</td><td>0,50 mol</td><td>2 : 1 : 2</td></tr>
          </tbody>
        </table>
      </div>

      <div class="ok-box"><strong>Ideia matemática importante</strong><p>Estequiometria é uma aplicação de <strong>proporcionalidade</strong>. Mas a proporção correta vem da equação balanceada e precisa ser aplicada às grandezas certas.</p></div>
    </section>

    <section>
      <h3>8. Um problema completo: da massa de reagente à massa de produto</h3>
      <p>Considere a combustão completa do carbono representada por <strong>C + O₂ → CO₂</strong>. Quantos gramas de CO₂ podem ser formados a partir de <strong>12 g de C</strong>, com O₂ em excesso?</p>

      <div class="four-col">
        <div class="example-box"><strong class="card-title">1. Massa → mol</strong><p>M(C) ≈ 12 g/mol. Portanto 12 g C = 1 mol C.</p></div>
        <div class="example-box"><strong class="card-title">2. Proporção</strong><p>A equação mostra 1 mol C : 1 mol CO₂.</p></div>
        <div class="example-box"><strong class="card-title">3. Mol de produto</strong><p>1 mol C pode formar 1 mol CO₂.</p></div>
        <div class="example-box"><strong class="card-title">4. Mol → massa</strong><p>M(CO₂) ≈ 44 g/mol. Resultado: 44 g CO₂.</p></div>
      </div>

      <div class="note-box"><strong>Cheque físico</strong><p>O produto possui massa maior que os 12 g iniciais de carbono porque também incorpora oxigênio. Para formar 44 g de CO₂, entram 32 g de O₂. Assim, 12 g + 32 g = 44 g.</p></div>
    </section>

    <section>
      <h3>9. Investigador estequiométrico — qual caminho resolve o problema?</h3>
      <p>Escolha uma situação. Antes de abrir a análise, tente identificar mentalmente: <strong>qual é o dado, qual é o pedido e qual razão da equação deve ser usada?</strong></p>
      <div id="cap08Investigator" class="choice-row">
        <button type="button" data-case="molmol">3 mol O₂ → H₂O</button>
        <button type="button" data-case="massmass">8 g H₂ → H₂O</button>
        <button type="button" data-case="limit">6 mol H₂ + 2 mol O₂</button>
        <button type="button" data-case="carbon">24 g C → CO₂</button>
      </div>
      <div id="cap08InvestigatorResult" class="example-box" aria-live="polite"><strong>Escolha um caso</strong><p>A análise aparecerá aqui.</p></div>
    </section>

    <section>
      <h3>10. O que não fazer em um cálculo estequiométrico</h3>
      <div class="comparison-grid">
        <div class="example-box"><strong class="card-title">Erro: usar equação não balanceada</strong><p>Sem conservação do número de átomos, os coeficientes não representam a proporção correta da reação.</p></div>
        <div class="example-box"><strong class="card-title">Erro: tratar coeficiente como grama</strong><p>Coeficientes fornecem razões em entidades ou mol. Massas exigem massas molares.</p></div>
        <div class="example-box"><strong class="card-title">Erro: alterar índices da fórmula</strong><p>Mudar H₂O para H₂O₂ para “balancear” muda a substância. Só coeficientes podem ser ajustados.</p></div>
        <div class="example-box"><strong class="card-title">Erro: ignorar o limitante</strong><p>Quando as quantidades de mais de um reagente são dadas, é preciso verificar qual acaba primeiro.</p></div>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <h3>11. Checkpoint — você consegue prever quantidades numa reação?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Significado dos coeficientes</strong><p>Na equação N₂ + 3 H₂ → 2 NH₃, o coeficiente 3 do H₂ indica:</p><div class="choice-row"><button type="button" data-choice="a">3 g de H₂</button><button type="button" data-choice="b">3 entidades ou 3 mol de H₂ na proporção da reação</button><button type="button" data-choice="c">3 átomos de H em cada molécula de H₂</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Coeficientes representam quantidades relativas de entidades e, macroscopicamente, de mol." data-wrong-text="Não confunda coeficiente com massa nem com índice da fórmula."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Razão molar</strong><p>Na mesma equação N₂ + 3 H₂ → 2 NH₃, 6 mol de H₂ podem formar quantos mol de NH₃, com N₂ suficiente?</p><div class="choice-row"><button type="button" data-choice="a">2 mol</button><button type="button" data-choice="b">3 mol</button><button type="button" data-choice="c">4 mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A razão é 3 mol H₂ : 2 mol NH₃; dobrando, 6 : 4." data-wrong-text="Use a razão 3 para 2 da equação."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Caminho massa → massa</strong><p>Qual sequência é conceitualmente correta para transformar massa de um reagente em massa de um produto?</p><div class="choice-row"><button type="button" data-choice="a">massa → mol → razão estequiométrica → mol → massa</button><button type="button" data-choice="b">massa → coeficiente → massa</button><button type="button" data-choice="c">massa → partículas → gramas sem usar a equação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. O mol conecta as massas às proporções da equação." data-wrong-text="A razão da equação é uma razão em mol, então converta para mol antes de atravessá-la."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Massa de água</strong><p>Em 2 H₂ + O₂ → 2 H₂O, 2 mol de H₂ formam quantos gramas de H₂O, com O₂ suficiente? M(H₂O) = 18 g/mol.</p><div class="choice-row"><button type="button" data-choice="a">18 g</button><button type="button" data-choice="b">36 g</button><button type="button" data-choice="c">72 g</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. 2 mol H₂ → 2 mol H₂O; 2 × 18 = 36 g." data-wrong-text="Primeiro use a razão 2 : 2; depois converta os mol de água em massa."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Reagente limitante</strong><p>Para N₂ + 3 H₂ → 2 NH₃, temos 2 mol de N₂ e 3 mol de H₂. Qual reagente limita a reação?</p><div class="choice-row"><button type="button" data-choice="a">N₂</button><button type="button" data-choice="b">Nenhum</button><button type="button" data-choice="c">H₂</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. 2 mol N₂ exigiriam 6 mol H₂, mas existem apenas 3 mol. H₂ acaba primeiro." data-wrong-text="Compare o disponível com a razão 1 N₂ : 3 H₂."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Excesso</strong><p>Em 2 H₂ + O₂ → 2 H₂O, temos 6 mol H₂ e 2 mol O₂. Depois da reação completa possível, quanto H₂ sobra?</p><div class="choice-row"><button type="button" data-choice="a">2 mol</button><button type="button" data-choice="b">4 mol</button><button type="button" data-choice="c">6 mol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. 2 mol O₂ consomem 4 mol H₂; dos 6 iniciais, sobram 2 mol." data-wrong-text="Para 2 mol O₂, a razão exige 4 mol H₂."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Rendimento</strong><p>Um rendimento real menor que o rendimento teórico significa necessariamente que a massa deixou de ser conservada?</p><div class="choice-row"><button type="button" data-choice="a">Sim, sempre</button><button type="button" data-choice="b">Não. Pode haver reação incompleta, outros produtos ou perdas na coleta do produto desejado</button><button type="button" data-choice="c">Sim, porque todo processo real destrói alguns átomos</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Conservação de massa e rendimento do produto desejado são conceitos diferentes." data-wrong-text="Os átomos não precisam terminar todos no produto que estamos coletando."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Estratégia</strong><p>Quando um problema fornece quantidades de dois reagentes, qual verificação adicional pode ser necessária?</p><div class="choice-row"><button type="button" data-choice="a">Qual nome é mais curto</button><button type="button" data-choice="b">Qual reagente possui maior massa molar, pois ele sempre limita</button><button type="button" data-choice="c">Qual reagente é limitante de acordo com a proporção da equação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. O limitante é definido pela quantidade disponível em relação à proporção estequiométrica, não simplesmente pela maior ou menor massa." data-wrong-text="Não existe regra de que a maior massa ou maior massa molar determine o limitante."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Uma célula a combustível recebe <strong>10 g de H₂</strong> e <strong>64 g de O₂</strong>. Considere 2 H₂ + O₂ → 2 H₂O e massas molares H₂ = 2 g/mol, O₂ = 32 g/mol e H₂O = 18 g/mol. Responda: <strong>1)</strong> quantos mol de cada reagente estão disponíveis; <strong>2)</strong> qual é o reagente limitante; <strong>3)</strong> quantos mol e quantos gramas de água podem ser formados teoricamente; <strong>4)</strong> quanto do reagente em excesso sobra.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>10 g H₂ = 5 mol H₂; 64 g O₂ = 2 mol O₂. Para 2 mol O₂ são necessários 4 mol H₂, portanto O₂ é limitante e sobra 1 mol de H₂, equivalente a 2 g. Os 2 mol O₂ formam 4 mol H₂O; 4 × 18 = 72 g de H₂O como rendimento teórico.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo integra balanceamento, conservação da massa, mol, massa molar e proporcionalidade para desenvolver cálculos estequiométricos. Trabalha relações mol–mol, massa–mol e massa–massa, reagente limitante, reagente em excesso e noção introdutória de rendimento teórico e real, sempre relacionando representação simbólica a processos químicos concretos.</p></details>
  `;

  const cases = {
    molmol:{title:'3 mol O₂ → H₂O', text:'Na equação 2 H₂ + O₂ → 2 H₂O, a razão O₂ : H₂O é 1 : 2. Com H₂ suficiente, 3 mol O₂ podem formar 6 mol H₂O.'},
    massmass:{title:'8 g H₂ → H₂O', text:'8 g H₂ ÷ 2 g/mol = 4 mol H₂. A razão H₂ : H₂O é 2 : 2, então formam-se 4 mol H₂O. 4 × 18 g/mol = 72 g H₂O, com O₂ em excesso.'},
    limit:{title:'6 mol H₂ + 2 mol O₂', text:'2 mol O₂ exigem 4 mol H₂. Portanto O₂ é limitante, 2 mol H₂ ficam em excesso e podem ser formados 4 mol H₂O.'},
    carbon:{title:'24 g C → CO₂', text:'24 g C ÷ 12 g/mol = 2 mol C. Pela equação C + O₂ → CO₂, a razão C : CO₂ é 1 : 1, então formam-se 2 mol CO₂. 2 × 44 g/mol = 88 g CO₂.'}
  };

  function initChapter(root) {
    const investigator = $('#cap08Investigator', root);
    const result = $('#cap08InvestigatorResult', root);
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
      technical:'Proporções químicas • estequiometria, limitante e rendimento',
      title:'Como prever quanto produto uma reação pode formar?',
      objective:'<strong>Objetivo:</strong> interpretar os coeficientes de equações balanceadas como proporções em mol, resolver relações quantitativas entre reagentes e produtos e identificar reagente limitante, excesso e rendimento teórico em situações simples.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('08 Proporções químicas', showChapter);
})();