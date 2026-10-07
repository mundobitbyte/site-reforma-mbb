(() => {
  'use strict';
  const lesson = window.DS_MATH_LESSONS?.find(item => item.id === 'diagnostico');
  if (!lesson || typeof lesson.content !== 'string') return;

  const reviews = {
    'Números inteiros': `<p>Quando aparecem números positivos e negativos, pense primeiro em <strong>direção</strong>. Na reta numérica, somar um número positivo significa andar para a direita; somar um negativo significa andar para a esquerda.</p><div class="mbb-equation-walk"><p><span class="math">−8+13</span></p><p>Comece em −8 e avance 13 unidades para a direita.</p><p><span class="math">−8+13=5</span></p></div><p>Em vez de decorar apenas “regra de sinais”, tente enxergar qual quantidade prevalece e para que lado o resultado deve ficar.</p>`,
    'Frações e decimais': `<p>A fração <span class="math">3/4</span> significa <strong>3 dividido por 4</strong>. O traço da fração já representa uma divisão.</p><div class="mbb-equation-walk"><p><span class="math">3÷4=0,75</span></p><p>Portanto, <span class="math">3/4</span> e <span class="math">0,75</span> são duas escritas para a mesma quantidade.</p></div><p>Para conferir, lembre que 3/4 é um pouco menos que 1; por isso 0,75 faz sentido, enquanto 1,75 não faria.</p>`,
    'Porcentagem': `<p>Porcentagem significa “de cada 100”. Assim, 15% pode ser escrito como <span class="math">15/100=0,15</span>.</p><div class="mbb-equation-walk"><p>Queremos 15% de 200.</p><p><span class="math">0,15·200=30</span></p></div><p>A pergunta de conferência é sempre: <strong>qual valor está representando 100%?</strong> Aqui, é 200.</p>`,
    'Razão e proporção': `<p>Quando o preço por unidade não muda, descubra primeiro quanto custa <strong>uma unidade</strong>. Se 4 ingressos custam R$ 60:</p><div class="mbb-equation-walk"><p><span class="math">60÷4=15</span> reais por ingresso.</p><p>Para 8 ingressos: <span class="math">8·15=120</span>.</p></div><p>Você também poderia perceber que 8 é o dobro de 4; mantendo o mesmo preço unitário, o total também dobra.</p>`,
    'Álgebra': `<p>A letra ocupa o lugar de um valor. Se <span class="math">x=5</span>, a expressão <span class="math">2x+3</span> deve ser lida como “duas vezes x, mais 3”.</p><div class="mbb-equation-walk"><p><span class="math">2x+3</span></p><p><span class="math">2·5+3</span></p><p><span class="math">10+3=13</span></p></div><p>O ponto principal é substituir a letra sem alterar as operações que já estavam na expressão.</p>`,
    'Equações': `<p>Uma equação afirma que os dois lados têm o mesmo valor. Em <span class="math">3x=18</span>, queremos descobrir qual número multiplicado por 3 produz 18.</p><div class="mbb-equation-walk"><p>Divida os dois lados por 3 para preservar a igualdade.</p><p><span class="math">3x÷3=18÷3</span></p><p><span class="math">x=6</span></p></div><p>Confira voltando à equação: <span class="math">3·6=18</span>.</p>`,
    'Plano cartesiano': `<p>Um ponto é escrito como <span class="math">(x,y)</span>. Leia sempre na mesma ordem: <strong>primeiro horizontal, depois vertical</strong>.</p><p>No ponto <span class="math">(−2,4)</span>, x=−2 manda andar 2 unidades para a esquerda; y=4 manda subir 4. Portanto a coordenada y é 4.</p><p>Uma boa estratégia é dizer em voz baixa: “x primeiro, y depois” antes de localizar qualquer ponto.</p>`,
    'Gráficos e tabelas': `<p>Antes de procurar o maior ou menor número, leia <strong>título, rótulos, unidade e escala</strong>. Só depois compare os valores.</p><p>Na lista 18, 25 e 21, o maior valor é 25. Em um gráfico, porém, essa comparação só é segura depois de verificar a escala do eixo: uma escala quebrada ou iniciada longe de zero pode exagerar visualmente diferenças pequenas.</p>`,
    'Unidades': `<p>Converter unidade não muda a quantidade real; muda apenas a maneira de escrevê-la. Como <span class="math">1 km=1.000 m</span>, cada quilômetro contém mil metros.</p><div class="mbb-equation-walk"><p><span class="math">1,8 km</span></p><p><span class="math">1,8·1.000=1.800 m</span></p></div><p>Confira a direção: ao passar de km para uma unidade menor, metros, o número deve ficar maior.</p>`,
    'Ângulos e polígonos': `<p>A soma dos ângulos internos de um triângulo é 180°. Um quadrilátero pode ser dividido por uma diagonal em dois triângulos; por isso sua soma interna é <span class="math">2·180°=360°</span>.</p><p>Essa ideia de dividir polígonos em triângulos será útil mais adiante no tópico de ladrilhamento, em vez de depender apenas de fórmulas decoradas.</p>`
  };

  const wrapper = document.createElement('div');
  wrapper.innerHTML = lesson.content;

  wrapper.querySelectorAll('.review-card').forEach(card => {
    const title = card.querySelector('strong')?.childNodes?.[0]?.textContent?.trim()
      || card.querySelector('strong')?.textContent?.replace('Revisar','').trim();
    if (!title || !reviews[title]) return;

    const strong = card.querySelector('strong');
    [...card.childNodes].forEach(node => {
      if (node !== strong) node.remove();
    });
    card.insertAdjacentHTML('beforeend', reviews[title]);
  });

  const reviewBody = wrapper.querySelector('.diagnostic-review-body');
  if (reviewBody && !reviewBody.querySelector('.mbb-diagnostic-method')) {
    reviewBody.insertAdjacentHTML('afterbegin', `<div class="mbb-contextualizacao mbb-diagnostic-method"><strong>Como revisar sem apenas copiar a resposta</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>1. Leia a ideia</strong><p>Tente explicar com suas palavras o que a operação ou representação significa.</p></div><div class="mbb-context-card"><strong>2. Refaça o exemplo</strong><p>Cubra o resultado, execute as etapas sozinho e só então compare.</p></div></div><div class="mbb-central-question"><strong>3. Confira:</strong> se você consegue explicar por que cada etapa foi feita, a revisão cumpriu seu papel.</div></div>`);
  }

  lesson.content = wrapper.innerHTML;
})();