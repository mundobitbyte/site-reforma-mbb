(() => {
  'use strict';

  const lessons = [
    {
      id:'diagnostico-2',
      group:'Antes de começar',
      order:0,
      menu:'00 Avaliação Diagnóstica',
      pending:true,
      unit:'Antes de começar',
      technical:'Avaliação Diagnóstica',
      title:'Avaliação diagnóstica da 2ª série',
      objective:'Verificar os conhecimentos que servirão de base para os conteúdos da 2ª série.',
      content:`
        <div class="s2-paper">
          <section class="s2-section">
            <h2>Avaliação em preparação</h2>
            <div class="s2-note"><strong>O link já está reservado no módulo.</strong> A avaliação diagnóstica ainda será construída e revisada antes de ser liberada aos alunos.</div>
            <p>Quando estiver pronta, ela aparecerá aqui sem alterar a posição do menu nem a navegação da 2ª série.</p>
          </section>
        </div>`
    },
    {
      id:'funcoes-exponenciais-logaritmicas',
      group:'Números e Álgebra',
      order:1,
      menu:'01 Funções exponenciais e logarítmicas',
      unit:'Números e Álgebra',
      technical:'Funções exponenciais e logarítmicas',
      title:'Funções exponenciais e logarítmicas',
      objective:'Entender crescimento multiplicativo, reconhecer uma função exponencial e compreender o logaritmo como a pergunta inversa da potenciação.',
      content:`
        <div class="s2-paper">
          <section class="s2-section">
            <p class="s2-lead">Antes de decorar fórmulas, vamos partir de uma situação que poderia acontecer em um projeto de Desenvolvimento de Sistemas.</p>

            <div class="s2-context">
              <strong>Situação de partida</strong>
              <p>Uma equipe de alunos desenvolveu um aplicativo escolar para organizar <strong>provas, trabalhos e prazos de entrega</strong>. Depois de apresentá-lo para algumas turmas, o link começou a circular nos grupos da escola.</p>
              <p>Em um modelo simplificado para estudar o crescimento, vamos imaginar que o aplicativo recebeu <strong>100 acessos no primeiro período</strong> e que, a cada novo período observado, a quantidade de acessos dobrou:</p>
              <div class="s2-growth" aria-label="Sequência de acessos dobrando">
                <span class="s2-growth-step">100</span><span class="s2-growth-arrow">×2 →</span>
                <span class="s2-growth-step">200</span><span class="s2-growth-arrow">×2 →</span>
                <span class="s2-growth-step">400</span><span class="s2-growth-arrow">×2 →</span>
                <span class="s2-growth-step">800</span><span class="s2-growth-arrow">×2 →</span>
                <span class="s2-growth-step">1600</span>
              </div>
              <p><strong>Primeira pergunta:</strong> se esse padrão continuasse, como prever os acessos depois de várias etapas sem escrever toda a sequência?</p>
              <p><strong>Segunda pergunta:</strong> se soubéssemos que o aplicativo chegou a 3.200 acessos, como descobrir quantas etapas de duplicação foram necessárias?</p>
            </div>

            <div class="s2-warning"><strong>Modelo simplificado.</strong> Na vida real, acessos a um aplicativo não dobram perfeitamente para sempre. Estamos isolando um padrão matemático para compreendê-lo.</div>
            <div class="s2-annotation">Primeiro enxergue o comportamento. A fórmula aparece para organizar uma ideia que já entendemos.</div>
          </section>

          <section class="s2-section">
            <h2>1. Crescer somando não é o mesmo que crescer multiplicando</h2>
            <div class="s2-grid">
              <div class="s2-card"><strong>Crescimento aditivo</strong>Começa em 2 e soma 2 a cada etapa:<br><code>2, 4, 6, 8, 10...</code></div>
              <div class="s2-card"><strong>Crescimento multiplicativo</strong>Começa em 2 e multiplica por 2 a cada etapa:<br><code>2, 4, 8, 16, 32...</code></div>
            </div>
            <p>No crescimento aditivo, acrescentamos sempre a mesma quantidade. No multiplicativo, cada novo valor depende do que já foi acumulado.</p>
            <div class="s2-growth" aria-label="Crescimento por duplicação">
              <span class="s2-growth-step">1</span><span class="s2-growth-arrow">×2 →</span>
              <span class="s2-growth-step">2</span><span class="s2-growth-arrow">×2 →</span>
              <span class="s2-growth-step">4</span><span class="s2-growth-arrow">×2 →</span>
              <span class="s2-growth-step">8</span><span class="s2-growth-arrow">×2 →</span>
              <span class="s2-growth-step">16</span>
            </div>
            <div class="s2-caption">O fator é o mesmo, mas o acréscimo fica cada vez maior.</div>
            <div class="s2-note"><strong>Ideia-chave:</strong> quando a variável aparece no expoente, esse tipo de comportamento pode ser modelado por uma função exponencial.</div>
            <details class="s2-mini"><summary>Confira em 20 segundos</summary><p>Qual sequência tem crescimento multiplicativo: <code>3, 6, 9, 12</code> ou <code>3, 6, 12, 24</code>? <strong>A segunda</strong>, pois cada termo é o anterior multiplicado por 2.</p></details>
          </section>

          <section class="s2-section">
            <h2>2. Função exponencial</h2>
            <p>A forma básica é:</p>
            <div class="s2-formula">f(x) = a<sup>x</sup><small>com a &gt; 0 e a ≠ 1</small></div>
            <p><strong>x</strong> é a variável e aparece no expoente. <strong>a</strong> é a base. A base precisa ser positiva e diferente de 1 na função exponencial real usual.</p>

            <div class="s2-role-map" aria-label="Base, expoente e resultado">
              <span class="s2-role-token s2-base"><small>base</small>2</span>
              <span class="s2-op">^</span>
              <span class="s2-role-token s2-exp"><small>expoente</small>3</span>
              <span class="s2-op">=</span>
              <span class="s2-role-token s2-result"><small>resultado</small>8</span>
            </div>
            <div class="s2-caption">Base, expoente e resultado terão estas mesmas cores quando a relação precisar ser destacada.</div>

            <div class="s2-grid">
              <div class="s2-card"><strong>Se a &gt; 1</strong>A função é crescente.<br>Ex.: <code>2<sup>x</sup></code>.</div>
              <div class="s2-card"><strong>Se 0 &lt; a &lt; 1</strong>A função é decrescente.<br>Ex.: <code>(1/2)<sup>x</sup></code>.</div>
            </div>

            <h3>Vamos enxergar em uma tabela</h3>
            <div class="s2-table-wrap">
              <table aria-label="Valores da função dois elevado a x">
                <thead><tr><th>x</th><th>-2</th><th>-1</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead>
                <tbody><tr><th>2<sup>x</sup></th><td>1/4</td><td>1/2</td><td>1</td><td>2</td><td>4</td><td>8</td></tr></tbody>
              </table>
            </div>
            <div class="s2-checkpoint"><strong>Observe:</strong> qualquer base positiva elevada a zero vale 1. Por isso o gráfico de <code>a<sup>x</sup></code> passa pelo ponto <code>(0,1)</code>.</div>

            <div class="visual-box">
              <svg class="math-graph" viewBox="0 0 620 300" role="img" aria-labelledby="s2expTitle s2expDesc">
                <title id="s2expTitle">Gráfico de y igual a 2 elevado a x</title>
                <desc id="s2expDesc">Curva crescente, sempre acima do eixo x, passando pelos pontos zero vírgula um, um vírgula dois e dois vírgula quatro.</desc>
                <line class="graph-axis" x1="45" y1="248" x2="590" y2="248"/>
                <line class="graph-axis" x1="285" y1="25" x2="285" y2="270"/>
                <path class="graph-line" d="M75 240 C155 236,215 226,285 220 C335 213,370 195,405 165 C440 132,470 90,500 45"/>
                <circle class="graph-point" cx="285" cy="220" r="5"/><circle class="graph-point" cx="355" cy="195" r="5"/><circle class="graph-point" cx="425" cy="145" r="5"/>
                <text class="graph-text" x="294" y="216">(0,1)</text><text class="graph-text" x="363" y="190">(1,2)</text><text class="graph-text" x="433" y="140">(2,4)</text>
              </svg>
            </div>
            <ul class="s2-checklist">
              <li>Domínio: todos os números reais.</li>
              <li>Imagem: somente valores positivos.</li>
              <li>O gráfico não toca o eixo x.</li>
            </ul>
          </section>

          <section class="s2-section">
            <h2>3. Voltando ao aplicativo</h2>
            <p>No nosso modelo, havia 100 acessos no primeiro período e a quantidade dobrava a cada etapa. Podemos representar isso por:</p>
            <div class="s2-formula">A(t) = 100 · 2<sup>t</sup></div>
            <div class="s2-example">
              <strong>Quantos acessos o modelo prevê depois de 4 etapas?</strong>
              <ol>
                <li>O número de etapas é <code>t = 4</code>.</li>
                <li>Substituímos: <code>A(4) = 100 · 2<sup>4</sup></code>.</li>
                <li>Calculamos a potência: <code>2<sup>4</sup> = 16</code>.</li>
                <li>Então: <code>A(4) = 100 · 16 = 1.600</code>.</li>
              </ol>
            </div>
            <div class="s2-note"><strong>Interpretação:</strong> 1.600 é a quantidade de acessos prevista pelo modelo após quatro etapas de duplicação.</div>
            <div class="s2-question"><strong>Conferência:</strong> 100 → 200 → 400 → 800 → 1.600. A sequência confirma o cálculo.</div>
          </section>

          <section class="s2-section">
            <h2>4. E se conhecermos o resultado?</h2>
            <p>Agora imagine que sabemos que o aplicativo chegou a <strong>3.200 acessos</strong>, mas queremos descobrir quantas duplicações ocorreram.</p>
            <div class="s2-question"><strong>Pergunta:</strong> 2 elevado a qual número produz 32?</div>
            <p>Como <code>2<sup>5</sup> = 32</code>, foram necessárias 5 etapas de duplicação a partir do valor inicial do modelo.</p>
            <p>É exatamente esse tipo de pergunta que o <span class="s2-marker">logaritmo</span> registra.</p>
            <div class="s2-formula">log<sub>2</sub>(32) = 5 <small>porque 2<sup>5</sup> = 32</small></div>
          </section>

          <section class="s2-section">
            <h2>5. Logaritmo, sem mistério</h2>
            <div class="s2-formula">log<sub>a</sub>(b) = x ⇔ a<sup>x</sup> = b<small>a &gt; 0, a ≠ 1 e b &gt; 0</small></div>
            <p>Leia assim: <strong>“logaritmo de b na base a é o expoente x ao qual a deve ser elevada para produzir b.”</strong></p>

            <div class="s2-role-map">
              <span class="s2-role-token s2-base"><small>base</small>2</span>
              <span class="s2-role-token s2-result"><small>resultado</small>32</span>
              <span class="s2-op">→</span>
              <span class="s2-role-token s2-exp"><small>expoente procurado</small>5</span>
            </div>

            <div class="steps">
              <div class="step"><strong>log<sub>10</sub>(1000)</strong><br>Pergunte: 10 elevado a quanto dá 1000?</div>
              <div class="step"><strong>10<sup>3</sup> = 1000</strong><br>Logo, o expoente procurado é 3.</div>
              <div class="step"><strong>Resposta:</strong> <code>log<sub>10</sub>(1000) = 3</code>.</div>
            </div>
            <div class="s2-warning"><strong>Erro comum:</strong> tratar “log” como uma regra sem significado. Enquanto estiver aprendendo, volte à pergunta: <em>qual é o expoente?</em></div>
          </section>

          <section class="s2-section">
            <h2>6. Exponencial e logaritmo fazem caminhos inversos</h2>
            <div class="s2-inverse">
              <div class="s2-inverse-side"><strong>Exponencial</strong><div class="s2-big"><span class="s2-label-base">2</span><sup class="s2-label-exp">5</sup> = <span class="s2-label-result">32</span></div><p>Conheço o expoente e descubro o resultado.</p></div>
              <div class="s2-inverse-arrow">⇄</div>
              <div class="s2-inverse-side"><strong>Logaritmo</strong><div class="s2-big">log<sub class="s2-label-base">2</sub>(<span class="s2-label-result">32</span>) = <span class="s2-label-exp">5</span></div><p>Conheço o resultado e descubro o expoente.</p></div>
            </div>
            <div class="s2-note"><strong>Atalho mental seguro:</strong> transforme o logaritmo em uma potência equivalente sempre que precisar recuperar o significado.</div>

            <div class="s2-not-confuse">
              <div class="s2-bad"><span class="s2-stamp">NÃO</span><strong>2 × 5 = 10</strong><p>Isto é multiplicação comum. O 5 não está no expoente.</p></div>
              <div class="s2-good"><span class="s2-stamp">SIM</span><strong>2<sup>5</sup> = 32</strong><p>Isto é potenciação. O expoente diz quantas vezes a base participa do produto.</p></div>
            </div>
          </section>

          <section class="s2-section">
            <h2>7. Onde isso aparece de verdade?</h2>
            <div class="s2-grid">
              <div class="s2-card"><strong>Juros compostos</strong>O capital é multiplicado repetidamente por um fator do tipo <code>(1+i)</code>.</div>
              <div class="s2-card"><strong>Crescimento e decaimento</strong>Alguns modelos populacionais e fenômenos físicos podem apresentar comportamento exponencial em determinadas condições.</div>
              <div class="s2-card"><strong>Escalas logarítmicas</strong>Logaritmos aparecem em modelos e escalas como pH e intensidade sonora.</div>
              <div class="s2-card"><strong>Computação</strong>Logaritmos ajudam a descrever quantas vezes um problema pode ser dividido por um fator, ideia importante em análise de algoritmos.</div>
            </div>
            <div class="s2-annotation">Aplicação boa não é enfeite: ela mostra por que a ideia matemática é útil.</div>
          </section>

          <section class="s2-section">
            <h2>8. O que você precisa guardar</h2>
            <ul class="s2-checklist">
              <li>Na função exponencial, a variável aparece no expoente.</li>
              <li><code>f(x)=a<sup>x</sup></code>, com <code>a&gt;0</code> e <code>a≠1</code>.</li>
              <li>Se <code>a&gt;1</code>, há crescimento; se <code>0&lt;a&lt;1</code>, há decrescimento.</li>
              <li>Logaritmo responde: “qual expoente produz este valor?”</li>
              <li><code>log<sub>a</sub>(b)=x</code> equivale a <code>a<sup>x</sup>=b</code>.</li>
              <li>Exponencial e logaritmo percorrem caminhos inversos.</li>
            </ul>
          </section>

          <section class="s2-section">
            <h2>9. Prática curta</h2>
            <div class="s2-mini-test">
              <details><summary>1. Calcule 3<sup>4</sup>.</summary><p><strong>81.</strong> Pois 3 · 3 · 3 · 3 = 81.</p></details>
              <details><summary>2. A função f(x)=(1/3)<sup>x</sup> é crescente ou decrescente?</summary><p><strong>Decrescente.</strong> A base está entre 0 e 1.</p></details>
              <details><summary>3. Quanto vale log<sub>2</sub>(8)?</summary><p><strong>3.</strong> Porque 2<sup>3</sup> = 8.</p></details>
              <details><summary>4. Quanto vale log<sub>10</sub>(0,01)?</summary><p><strong>-2.</strong> Porque 10<sup>-2</sup> = 0,01.</p></details>
              <details><summary>5. Se Q(t)=50·2<sup>t</sup>, quanto vale Q(3)?</summary><p><strong>400.</strong> Q(3)=50·8=400.</p></details>
            </div>
          </section>

          <section class="s2-section">
            <h2>10. Fechamento MbB</h2>
            <div class="s2-question"><strong>Tente explicar sem olhar:</strong><br>1) o que diferencia crescimento aditivo de crescimento multiplicativo;<br>2) o que significa <code>log<sub>2</sub>(16)=4</code>;<br>3) por que exponencial e logaritmo são operações inversas.</div>
            <p>Se você consegue explicar essas três ideias com suas próprias palavras, construiu a base conceitual do tópico. As propriedades e equações mais avançadas podem vir depois.</p>
            <span class="s2-sticky">Entender → Experimentar → Programar → Aplicar</span>
          </section>
        </div>`
    }
  ];

  const $ = (s,r=document) => r.querySelector(s);
  const $$ = (s,r=document) => [...r.querySelectorAll(s)];
  const menu = $('#lessonMenu2');
  const content = $('#lessonContent2');

  function buildMenu(){
    menu.innerHTML='';
    ['Antes de começar','Números e Álgebra'].forEach(group => {
      const items=lessons.filter(l=>l.group===group).sort((a,b)=>a.order-b.order);
      if(!items.length)return;
      const title=document.createElement('div');
      title.className='menu-group-title';
      title.textContent=group;
      menu.appendChild(title);
      items.forEach(l=>{
        const b=document.createElement('button');
        b.type='button';
        b.className='menu-item'+(l.pending?' is-pending':'');
        b.dataset.lesson=l.id;
        b.textContent=l.menu;
        b.onclick=()=>showLesson(l.id);
        menu.appendChild(b);
      });
    });
  }

  function showLesson(id){
    const lesson=lessons.find(l=>l.id===id)||lessons[1];
    history.replaceState?.(null,'',`#${lesson.id}`);
    $('#unitName2').textContent=lesson.unit;
    $('#technicalTitle2').textContent=lesson.technical;
    $('#lessonTitle2').textContent=lesson.title;
    const objective=$('#lessonObjective2');
    objective.innerHTML=`<strong>Propósito:</strong> ${lesson.objective}`;
    content.innerHTML=lesson.content;
    $$('.menu-item',menu).forEach(b=>b.classList.toggle('active',b.dataset.lesson===lesson.id));
    menu.classList.remove('open');
    $('#openMenu2').setAttribute('aria-expanded','false');
    if(innerWidth<=900)scrollTo({top:0,behavior:'smooth'});
  }

  buildMenu();
  $('#openMenu2').onclick=()=>{
    const open=menu.classList.toggle('open');
    $('#openMenu2').setAttribute('aria-expanded',String(open));
  };
  $('#backToSeries2').onclick=()=>location.href='index.html';

  const hash=location.hash.slice(1);
  showLesson(lessons.some(l=>l.id===hash)?hash:'funcoes-exponenciais-logaritmicas');
  addEventListener('hashchange',()=>{
    const id=location.hash.slice(1);
    if(lessons.some(l=>l.id===id))showLesson(id);
  });
})();
