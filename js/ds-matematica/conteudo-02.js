window.DS_MATH_LESSONS.push({
  id:'variacao',
  unit:'Números e Álgebra',
  order:1,
  menu:'01 Quando duas coisas mudam juntas',
  title:'Quando duas coisas mudam juntas',
  technical:'Variação entre grandezas — proporcionalidade e não proporcionalidade',
  objective:'Entender como duas grandezas podem variar juntas, reconhecer proporcionalidade direta em tabelas, gráficos e expressões e justificar quando uma relação não é proporcional.',
  content:`
    <section class="lesson-opening">
      <div>
        <span class="lesson-kicker">Comece olhando o comportamento</span>
        <h3>Dois preços aumentam. Só um é proporcional.</h3>
        <p>Compare duas situações antes de procurar qualquer fórmula.</p>
      </div>
      <div class="comparison-grid">
        <article class="comparison-card">
          <span class="comparison-tag">Situação A</span>
          <strong>Frutas por quilo</strong>
          <p>1 kg custa R$ 8. Então 2 kg custam R$ 16 e 3 kg custam R$ 24.</p>
          <div class="number-line" aria-label="Valores proporcionais"><span class="number-chip">1 → 8</span><span class="number-chip">2 → 16</span><span class="number-chip">3 → 24</span></div>
        </article>
        <article class="comparison-card">
          <span class="comparison-tag">Situação B</span>
          <strong>Entrega com taxa inicial</strong>
          <p>O serviço cobra R$ 8 de saída mais R$ 4 por quilômetro.</p>
          <div class="number-line" aria-label="Valores não proporcionais"><span class="number-chip">1 → 12</span><span class="number-chip">2 → 16</span><span class="number-chip">3 → 20</span></div>
        </article>
      </div>
      <div class="key-question"><strong>Antes de continuar:</strong> nas duas situações o preço cresce. Por que apenas a primeira é proporcional?</div>
    </section>

    <details class="teacher-box">
      <summary>Para o professor — objetivo, diagnóstico e pontos de atenção</summary>
      <div class="teacher-grid">
        <div><strong>O que precisa ficar claro</strong><p>Proporcionalidade direta não significa apenas “duas coisas aumentam juntas”. O critério é manter constante a razão <span class="math">y/x</span>, equivalente a uma regra do tipo <span class="math">y=kx</span>.</p></div>
        <div><strong>Pré-requisito mínimo</strong><p>Multiplicação, divisão, razão simples e leitura de tabela. Se a turma trava em <span class="math">24÷3</span>, vale recuperar isso antes de formalizar.</p></div>
        <div><strong>Erro previsível</strong><p>Classificar como proporcional qualquer relação crescente. Use deliberadamente um contraexemplo com taxa fixa para quebrar essa associação.</p></div>
        <div><strong>Pergunta diagnóstica</strong><p>“Se dobrar a quantidade, o resultado também precisa dobrar?” Peça justificativa, não só sim/não.</p></div>
        <div><strong>Boa evidência de aprendizagem</strong><p>O aluno consegue decidir por tabela, gráfico e expressão e explicar o motivo sem depender de uma frase decorada.</p></div>
        <div><strong>Extensão possível</strong><p>Conectar depois com função linear, taxa de variação e grandezas como velocidade, densidade e taxa de transmissão.</p></div>
      </div>
    </details>

    <h3>1. Descubra a regra sem usar nome técnico</h3>
    <p>Na situação das frutas, divida o preço pela quantidade:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Quantidade x (kg)</th><th>Preço y (R$)</th><th>y ÷ x</th></tr></thead>
        <tbody><tr><td>1</td><td>8</td><td>8</td></tr><tr><td>2</td><td>16</td><td>8</td></tr><tr><td>3</td><td>24</td><td>8</td></tr><tr><td>5</td><td>40</td><td>8</td></tr></tbody>
      </table>
    </div>
    <div class="discovery-box">
      <strong>O que não mudou?</strong>
      <p>A quantidade e o preço mudaram, mas o quociente <span class="math">preço ÷ quantidade</span> permaneceu 8. Esse 8 é o preço por unidade.</p>
      <p>Por isso qualquer valor pode ser obtido pela mesma regra: <span class="formula">y = 8x</span>.</p>
    </div>

    <h3>2. Agora veja o que acontece quando existe um valor inicial</h3>
    <p>Na entrega, o preço é dado por <span class="math">y=4x+8</span>. A tabela fica assim:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Distância x (km)</th><th>Preço y (R$)</th><th>y ÷ x</th></tr></thead>
        <tbody><tr><td>1</td><td>12</td><td>12</td></tr><tr><td>2</td><td>16</td><td>8</td></tr><tr><td>3</td><td>20</td><td>6,67</td></tr><tr><td>5</td><td>28</td><td>5,6</td></tr></tbody>
      </table>
    </div>
    <div class="contrast-box">
      <strong>As duas grandezas continuam relacionadas, mas a razão não é constante.</strong>
      <p>Dobrar a distância de 1 km para 2 km não dobra o preço de R$ 12 para R$ 24. Isso já basta para mostrar que a relação não é diretamente proporcional.</p>
    </div>

    <h3>3. O laboratório: mexa na relação e observe tabela, razão e gráfico</h3>
    <div class="lab-panel" id="proportionLab">
      <div class="lab-controls">
        <label>Valor por unidade <strong>k = <span id="propRateValue">6</span></strong><input id="propRate" type="range" min="1" max="12" step="1" value="6"></label>
        <label>Valor inicial <strong>b = <span id="propFixedValue">0</span></strong><input id="propFixed" type="range" min="0" max="30" step="2" value="0"></label>
      </div>
      <div class="lab-equation">Regra atual: <span id="propEquation" class="formula">y = 6x</span></div>
      <div class="lab-grid">
        <div class="table-wrap"><table><thead><tr><th>x</th><th>y</th><th>y/x</th></tr></thead><tbody id="propTableBody"></tbody></table></div>
        <div class="visual-box compact"><svg id="propGraph" class="math-graph" viewBox="0 0 560 300" role="img" aria-label="Gráfico interativo da relação entre x e y"></svg><p id="propConclusion" class="lab-conclusion"></p></div>
      </div>
      <div class="micro-task"><strong>Experimente:</strong> deixe <span class="math">b=0</span> e mude k. Depois coloque qualquer valor em b. O que acontece com a razão <span class="math">y/x</span> e com o ponto onde a reta cruza o eixo vertical?</div>
    </div>

    <h3>4. Agora damos nome ao que você acabou de observar</h3>
    <div class="concept-map-grid">
      <div class="concept-map-card"><strong>Grandeza</strong><p>Algo que pode ser medido ou contado: tempo, massa, preço, distância, quantidade de dados.</p></div>
      <div class="concept-map-card"><strong>Razão</strong><p>Uma comparação por divisão. Em R$ 24 por 3 kg, <span class="math">24÷3=8 R$/kg</span>.</p></div>
      <div class="concept-map-card highlight"><strong>Proporcionalidade direta</strong><p>Existe uma constante <span class="math">k</span> tal que <span class="math">y=kx</span>. A razão <span class="math">y/x</span> permanece constante.</p></div>
      <div class="concept-map-card"><strong>Relação não proporcional</strong><p>As grandezas podem variar juntas sem manter uma razão constante.</p></div>
    </div>

    <h3>5. Três maneiras de reconhecer proporcionalidade direta</h3>
    <div class="representation-strip">
      <article><span class="rep-number">1</span><strong>Tabela</strong><p>Para <span class="math">x≠0</span>, a razão <span class="math">y/x</span> é sempre a mesma.</p></article>
      <article><span class="rep-number">2</span><strong>Expressão</strong><p>A regra pode ser escrita como <span class="math">y=kx</span>, sem termo fixo somado.</p></article>
      <article><span class="rep-number">3</span><strong>Gráfico</strong><p>Os pontos ficam sobre uma reta que passa pela origem <span class="math">(0,0)</span>.</p></article>
    </div>
    <div class="note-box"><strong>Importante:</strong> esses três sinais descrevem a mesma ideia em representações diferentes. Não são três regras independentes.</div>

    <h3>6. Faça a passagem entre representações</h3>
    <div class="worked-path">
      <div class="worked-step"><span>1</span><div><strong>Comece pela tabela</strong><p>Uma máquina produz 18 peças em 3 minutos, 30 em 5 minutos e 42 em 7 minutos.</p></div></div>
      <div class="worked-step"><span>2</span><div><strong>Compare as razões</strong><p><span class="math">18/3=6</span>, <span class="math">30/5=6</span>, <span class="math">42/7=6</span>. A taxa é 6 peças por minuto.</p></div></div>
      <div class="worked-step"><span>3</span><div><strong>Generalize</strong><p>Se <span class="math">t</span> é o tempo e <span class="math">P</span> a produção, então <span class="formula">P=6t</span>.</p></div></div>
      <div class="worked-step"><span>4</span><div><strong>Preveja</strong><p>Em 12 minutos: <span class="math">P=6·12=72</span> peças.</p></div></div>
      <div class="worked-step"><span>5</span><div><strong>Cheque se faz sentido</strong><p>Dobrar o tempo de 3 para 6 minutos deve dobrar 18 para 36 peças. A regra confirma isso.</p></div></div>
    </div>

    <h3>7. Crescer junto não basta</h3>
    <div class="misconception-box">
      <p><strong>Afirmação:</strong> “Se x aumenta e y também aumenta, então são proporcionais.”</p>
      <p><strong>Contraexemplo:</strong> uma corrida custa R$ 7 de bandeirada mais R$ 3 por quilômetro. O preço cresce com a distância, mas <span class="math">y/x</span> muda porque existe R$ 7 antes de qualquer quilômetro.</p>
      <p><strong>Conclusão:</strong> crescimento é uma coisa; proporcionalidade direta é uma condição mais específica.</p>
    </div>

    <h3>8. Aplicação no próprio curso de DS</h3>
    <div class="application-scenario">
      <div class="application-icon" aria-hidden="true">01</div>
      <div><strong>Taxa de transmissão</strong><p>Uma conexão transfere dados a uma taxa estável de 25 MB/s. Se mantivermos essa taxa, em 4 s são 100 MB e em 10 s são 250 MB.</p><p>A relação é <span class="formula">D=25t</span>. Aqui, <span class="math">D/t=25 MB/s</span> é constante.</p></div>
    </div>
    <div class="application-scenario">
      <div class="application-icon" aria-hidden="true">02</div>
      <div><strong>Leitura de sensor</strong><p>Se um sensor envia exatamente 40 leituras por segundo, o número de leituras é proporcional ao tempo enquanto a taxa permanecer constante: <span class="math">L=40t</span>.</p></div>
    </div>

    <h3>9. Pare e decida: qual tabela é proporcional?</h3>
    <div class="choice-question" data-choice-question data-correct="b">
      <p><strong>Tabela A:</strong> (1, 5), (2, 9), (3, 13)</p>
      <p><strong>Tabela B:</strong> (1, 6), (2, 12), (4, 24)</p>
      <div class="choice-list">
        <button type="button" data-choice="a">Somente A</button>
        <button type="button" data-choice="b">Somente B</button>
        <button type="button" data-choice="c">As duas</button>
        <button type="button" data-choice="d">Nenhuma</button>
      </div>
      <div class="choice-feedback" data-choice-feedback data-correct-text="Na B, 6/1=12/2=24/4=6. Na A, as razões 5, 4,5 e aproximadamente 4,33 são diferentes." data-wrong-text="Compare y/x em cada linha. Se a razão mudar, não há proporcionalidade direta."></div>
    </div>

    <h3>10. Questão no nível de vestibular</h3>
    <div class="exam-problem choice-question" data-choice-question data-correct="c">
      <span class="exam-label">Questão original em estilo vestibular</span>
      <p>Um laboratório registra a massa de uma substância produzida em função do tempo. Em 2 minutos foram obtidos 14 g; em 5 minutos, 35 g; em 8 minutos, 56 g. Mantido o mesmo comportamento, qual conclusão é correta?</p>
      <div class="choice-list vertical">
        <button type="button" data-choice="a">A produção cresce, mas não é possível saber se é proporcional.</button>
        <button type="button" data-choice="b">A relação é y=7x+2.</button>
        <button type="button" data-choice="c">A relação é proporcional e pode ser representada por y=7x.</button>
        <button type="button" data-choice="d">A razão y/x aumenta com o tempo.</button>
        <button type="button" data-choice="e">O gráfico é uma reta que não passa pela origem.</button>
      </div>
      <div class="choice-feedback" data-choice-feedback data-correct-text="14/2=7, 35/5=7 e 56/8=7. A razão é constante; portanto y=7x e o gráfico passa pela origem." data-wrong-text="Faça primeiro 14÷2, 35÷5 e 56÷8. O que permanece igual?"></div>
    </div>

    <h3>11. Se você estiver estudando sozinho em casa</h3>
    <div class="recall-path">
      <div><span>1</span><p>Leia uma tabela e calcule <span class="math">y/x</span> em pelo menos três linhas.</p></div>
      <div><span>2</span><p>Se a razão for constante, escreva <span class="math">y=kx</span>.</p></div>
      <div><span>3</span><p>Confira se <span class="math">x=0</span> leva a <span class="math">y=0</span>.</p></div>
      <div><span>4</span><p>Imagine o gráfico: deve ser uma reta passando pela origem.</p></div>
      <div><span>5</span><p>Explique em uma frase o que k significa na situação.</p></div>
    </div>
    <div class="self-check-box">
      <strong>Você realmente entendeu se consegue fazer isto sem olhar para cima:</strong>
      <ul><li>dizer por que “crescer junto” não garante proporcionalidade;</li><li>descobrir k a partir de uma tabela;</li><li>passar de tabela para fórmula;</li><li>reconhecer no gráfico uma relação proporcional;</li><li>interpretar a unidade de k, como R$/kg ou MB/s.</li></ul>
    </div>

    <div class="lesson-next-actions">
      <button class="action-button primary" data-practice-topic="variacao" type="button">Treinar este assunto no 99. Exercícios</button>
      <a class="secondary-link" href="#algebra">Próximo: transformar padrões em regras →</a>
    </div>
  `
});
