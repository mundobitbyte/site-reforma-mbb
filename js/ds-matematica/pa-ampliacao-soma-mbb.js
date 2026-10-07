(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const lesson = window.DS_MATH_LESSONS.find(l => l.id === 'pa');
  if (!lesson || typeof lesson.content !== 'string') return;

  lesson.objective = 'Entender a Progressão Aritmética como uma sequência de diferença constante, descobrir termos distantes sem listar os anteriores e compreender como calcular o total acumulado dos primeiros termos a partir do padrão da própria PA.';

  const wrapper = document.createElement('div');
  wrapper.innerHTML = lesson.content;
  if (wrapper.querySelector('[data-mbb-pa-soma]')) return;

  const section = `
    <section data-mbb-pa-soma>
      <div class="mbb-bridge-box">
        <strong>Parte 2 — Quando a pergunta deixa de ser “qual termo?” e passa a ser “qual é o total?”</strong>
        <p>Até aqui aprendemos a responder perguntas como “quantos lugares existem na 30ª fileira?”. Mas imagine que o responsável pelo teatro faça outra pergunta: <strong>quantos lugares existem ao todo, somando da 1ª até a 30ª fileira?</strong></p>
        <p>Agora não queremos um único termo. Queremos o <strong>total acumulado de vários termos da PA</strong>. É uma nova pergunta, mas ela nasce da mesma sequência que já entendemos.</p>
      </div>

      <h3>10. Somar termo por termo funciona — mas será que é o melhor caminho?</h3>
      <p>Continuemos com a mesma arquibancada: a primeira fileira tem 20 lugares e cada nova fileira tem 5 lugares a mais.</p>
      <p>Já sabemos encontrar o 30º termo:</p>
      <div class="mbb-equation-walk">
        <p><span class="math">a₃₀ = a₁ + (30−1)r</span></p>
        <p><span class="math">a₃₀ = 20 + 29·5</span></p>
        <p><span class="math">a₃₀ = 20 + 145 = 165</span></p>
      </div>
      <p>Portanto, para saber o total de lugares, poderíamos escrever:</p>
      <p><span class="formula">20 + 25 + 30 + 35 + ... + 160 + 165</span></p>
      <p>Isso funcionaria. Mas fazer 30 adições seria trabalhoso e esconderia um padrão muito mais interessante.</p>

      <h3>11. O truque não é decorar: é enxergar pares</h3>
      <p>Vamos chamar de <span class="math">S₃₀</span> a soma das 30 fileiras. Escreva essa soma uma vez na ordem normal e outra vez na ordem inversa:</p>
      <div class="mbb-equation-walk">
        <p><span class="math">S₃₀ = 20 + 25 + 30 + ... + 160 + 165</span></p>
        <p><span class="math">S₃₀ = 165 + 160 + 155 + ... + 25 + 20</span></p>
      </div>
      <p>Agora some os termos que ficaram na mesma posição:</p>
      <div class="three-col">
        <div class="mini-card"><strong>Primeiro par</strong><p><span class="math">20+165=185</span></p></div>
        <div class="mini-card"><strong>Segundo par</strong><p><span class="math">25+160=185</span></p></div>
        <div class="mini-card"><strong>Terceiro par</strong><p><span class="math">30+155=185</span></p></div>
      </div>
      <p>Isso continua acontecendo até o fim. Em uma PA, termos que estão à mesma distância das extremidades formam pares com a mesma soma.</p>
      <div class="note-box"><strong>Por que isso acontece?</strong><p>Enquanto avançamos pela esquerda, cada termo aumenta <span class="math">r</span>. Enquanto avançamos pela direita, o termo correspondente diminui <span class="math">r</span>. Um ganha exatamente o que o outro perde. Por isso a soma do par permanece constante.</p></div>

      <h3>12. A fórmula da soma nasce desse padrão</h3>
      <p>No nosso exemplo, ao somar as duas linhas aparecem 30 resultados iguais a 185:</p>
      <div class="mbb-equation-walk">
        <p><span class="math">2S₃₀ = 30·185</span></p>
        <p><span class="math">2S₃₀ = 5550</span></p>
        <p><span class="math">S₃₀ = 5550/2 = 2775</span></p>
      </div>
      <p>O teatro possui <strong>2.775 lugares ao todo nas 30 fileiras</strong>.</p>

      <div class="mbb-professor-pensa"><strong>Agora veja o mesmo raciocínio sem números específicos.</strong>
        <p>Se uma PA tem <span class="math">n</span> termos, podemos escrever:</p>
        <div class="mbb-equation-walk">
          <p><span class="math">Sₙ = a₁ + a₂ + a₃ + ... + aₙ</span></p>
          <p><span class="math">Sₙ = aₙ + aₙ₋₁ + aₙ₋₂ + ... + a₁</span></p>
          <p><span class="math">2Sₙ = (a₁+aₙ) + (a₂+aₙ₋₁) + ...</span></p>
        </div>
        <p>Cada par tem a mesma soma <span class="math">a₁+aₙ</span>, e existem <span class="math">n</span> posições. Então:</p>
        <div class="mbb-equation-walk">
          <p><span class="math">2Sₙ = n(a₁+aₙ)</span></p>
          <p><span class="formula">Sₙ = n(a₁+aₙ)/2</span></p>
        </div>
      </div>
      <p>Leia a fórmula em português: <strong>“a soma dos n primeiros termos é o número de termos multiplicado pela média entre o primeiro e o último termo”</strong>. Aqui, média significa somar o primeiro e o último e dividir por 2.</p>

      <h3>13. O que significa Sₙ?</h3>
      <p>A letra <span class="math">S</span> lembra <strong>soma</strong>. O índice <span class="math">n</span> informa quantos termos estão sendo somados.</p>
      <div class="table-wrap"><table><thead><tr><th>Notação</th><th>Leitura</th></tr></thead><tbody><tr><td><span class="math">S₅</span></td><td>soma dos 5 primeiros termos</td></tr><tr><td><span class="math">S₁₀</span></td><td>soma dos 10 primeiros termos</td></tr><tr><td><span class="math">Sₙ</span></td><td>soma dos n primeiros termos</td></tr></tbody></table></div>
      <div class="danger-box"><strong>Não confunda:</strong> <span class="math">a₁₀</span> é apenas o décimo termo; <span class="math">S₁₀</span> é a soma do primeiro até o décimo termo.</div>

      <h3>14. E se o último termo ainda não for conhecido?</h3>
      <p>O caminho mais seguro continua sendo o que já entendemos: primeiro encontre <span class="math">aₙ</span> usando o termo geral e, depois, use esse resultado em <span class="math">Sₙ</span>.</p>
      <div class="mbb-equation-walk">
        <p><span class="math">aₙ=a₁+(n−1)r</span></p>
        <p><span class="math">Sₙ=n(a₁+aₙ)/2</span></p>
      </div>
      <div class="note-box"><strong>Atalho opcional — não é uma nova ideia para decorar.</strong><p>Se substituirmos <span class="math">aₙ=a₁+(n−1)r</span> dentro da fórmula da soma, chegamos a <span class="math">Sₙ=n[2a₁+(n−1)r]/2</span>. Alguns livros apresentam essa forma diretamente. Ela é apenas a combinação das duas fórmulas anteriores.</p></div>

      <h3>15. Uma notação que você pode encontrar: Σ</h3>
      <div class="note-box"><strong>Leitura complementar — não precisa decorar agora.</strong><p>Quando há muitos termos, a Matemática possui uma forma compacta de dizer “some todos eles”. O símbolo <span class="math">Σ</span>, chamado sigma maiúsculo, representa um <strong>somatório</strong>.</p></div>
      <div class="example-box"><span class="card-title">A ideia antes da notação</span>
        <p>Em vez de escrever:</p>
        <p><span class="math">a₁+a₂+a₃+...+aₙ</span></p>
        <p>um livro pode usar o símbolo <span class="math">Σ</span> acompanhado da indicação de onde a contagem começa e onde termina.</p>
        <p>Por exemplo, “somar <span class="math">aₖ</span> para <span class="math">k</span> indo de 1 até <span class="math">n</span>” é uma forma compacta de pedir exatamente <span class="math">a₁+a₂+...+aₙ</span>.</p>
        <p><strong>O símbolo não cria uma nova conta; apenas abrevia uma soma longa.</strong></p>
      </div>

      <h3>16. Na tecnologia e na programação: termo atual e total acumulado</h3>
      <div class="example-box"><span class="card-title">Dois problemas diferentes</span>
        <p>Imagine um programa que aumenta uma meta em 50 unidades a cada etapa: 200, 250, 300, 350...</p>
        <p>Se queremos saber <strong>o valor da etapa 20</strong>, procuramos um termo da PA. Se queremos saber <strong>o total acumulado das 20 etapas</strong>, procuramos uma soma.</p>
        <div class="mbb-professor-pensa"><strong>Essa diferença também aparece em algoritmos.</strong><p>Uma variável pode guardar o valor atual; outra pode funcionar como acumulador, adicionando cada valor ao total. A fórmula da soma permite chegar ao mesmo total diretamente quando a sequência segue uma PA.</p></div>
      </div>

      <h3>17. Exemplo resolvido: economia mensal crescente</h3>
      <div class="example-box"><span class="card-title">R$ 100 no primeiro mês e R$ 20 a mais a cada mês</span>
        <p>Uma pessoa guarda R$ 100 no primeiro mês e aumenta o depósito em R$ 20 a cada mês. Quanto terá depositado ao todo em 12 meses?</p>
        <div class="mbb-guided-solution">
          <div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Identifique a PA</strong><p><span class="math">a₁=100</span>, <span class="math">r=20</span> e <span class="math">n=12</span>.</p></div>
          <div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Descubra o último depósito</strong><p><span class="math">a₁₂=100+(12−1)·20=100+220=320</span>.</p></div>
          <div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule a soma</strong><p><span class="math">S₁₂=12(100+320)/2</span>.</p><p><span class="math">S₁₂=12·420/2=2520</span>.</p></div>
          <div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>R$ 320 é apenas o depósito do 12º mês. <strong>R$ 2.520</strong> é o total depositado durante os 12 meses.</p></div>
        </div>
      </div>

      <h3>18. Tente você</h3>
      <div class="task-box"><h4>Uma PA começa em 8 e tem razão 3. Qual é a soma dos 15 primeiros termos?</h4>
        <div class="mbb-pause-question"><strong>Antes de usar a fórmula da soma:</strong> qual é o 15º termo?</div>
        <details class="solution"><summary>Ver resolução comentada</summary>
          <div class="mbb-guided-solution">
            <div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Encontre a₁₅</strong><p><span class="math">a₁₅=8+(15−1)·3=8+42=50</span>.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Organize a soma</strong><p><span class="math">S₁₅=15(8+50)/2</span>.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule</strong><p><span class="math">S₁₅=15·58/2=15·29=435</span>.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Confira o sentido</strong><p>Os 15 termos vão de 8 a 50. A média entre primeiro e último é 29; 15 termos com média 29 produzem total 435.</p></div>
          </div>
        </details>
      </div>

      <div class="ok-box"><strong>Nova essência da PA:</strong> o termo geral responde “quanto vale uma posição?”. A soma responde “quanto acumulei até essa posição?”. As duas fórmulas nascem do mesmo padrão de diferença constante.</div>
    </section>
  `;

  const exam = wrapper.querySelector('.exam-box');
  const practice = wrapper.querySelector('[data-practice-topic="pa"]');
  const target = exam || practice;
  if (target) target.insertAdjacentHTML('beforebegin', section);
  else wrapper.insertAdjacentHTML('beforeend', section);

  lesson.content = wrapper.innerHTML;
})();
