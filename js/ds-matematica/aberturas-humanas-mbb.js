(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const openings = {
    variacao: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você entra em uma loja e vê castanhas vendidas a R$ 20 por quilo. Se comprar 2 kg, paga R$ 40.</p>
      <p>Em outro momento, você usa um serviço de entrega que cobra R$ 10 de taxa fixa mais R$ 2 por quilômetro.</p>
      <p>Nos dois casos, aumentar uma grandeza faz o preço aumentar. Mas há uma diferença escondida entre essas duas situações. <strong>Por que dobrar uma grandeza dobra exatamente um preço, mas não necessariamente o outro?</strong> É essa diferença que vamos descobrir.</p>
    `,
    algebra: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você precisa encomendar cartões para um evento. A gráfica cobra R$ 12 de preparação e mais R$ 3 por cartão. Para 10 cartões, você faz uma conta; para 40, outra; para 75, outra novamente.</p>
      <p>Depois de repetir o mesmo raciocínio algumas vezes surge uma pergunta natural: <strong>será que existe um jeito de escrever uma única conta que funcione para qualquer quantidade?</strong> É exatamente para resolver problemas assim que a linguagem algébrica se torna útil.</p>
    `,
    funcao1: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você deixa o carro em um estacionamento que cobra R$ 10 de entrada mais R$ 5 por hora. Antes mesmo de voltar, consegue prever quanto pagará se ficar 1, 2, 3 ou 6 horas.</p>
      <p>Perceba o que está acontecendo: você escolhe um tempo e uma regra produz um preço correspondente. <strong>Como transformar essa relação entre uma entrada e uma saída em uma regra matemática que funcione para qualquer tempo?</strong></p>
    `,
    reta: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você acompanha um reservatório sendo abastecido. A cada minuto o nível da água sobe sempre a mesma quantidade. Num gráfico, os pontos começam a formar uma linha reta.</p>
      <p>Agora imagine outro reservatório que enche mais rapidamente. As duas linhas sobem, mas uma parece mais inclinada que a outra. <strong>Existe uma forma de medir essa inclinação e dizer, com um número, quanto uma reta sobe ou desce?</strong></p>
    `,
    partes: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você entra em um estacionamento com a placa: “R$ 12 até 1 hora; depois, R$ 5 por hora adicional”. Ao sair, percebe que não existe uma única conta que sirva do mesmo jeito para 40 minutos e para 3 horas.</p>
      <p>Antes de calcular o preço, é preciso tomar uma decisão: <strong>em qual faixa de tempo estou?</strong> A Matemática também sabe representar situações em que a regra muda conforme uma condição.</p>
    `,
    quadratica: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você está desenhando um piso quadrado. Com lado de 1 m, a área é 1 m². Com lado de 2 m, a área vira 4 m². Com lado de 3 m, chega a 9 m². O lado aumentou sempre de 1 em 1, mas a área não aumentou num ritmo constante.</p>
      <p>Uma reta já não consegue contar bem essa história. <strong>Que tipo de relação aparece quando o próprio ritmo de crescimento começa a mudar?</strong> É daí que nasce a função quadrática.</p>
    `,
    parabola: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você joga uma bola para cima. Ela sobe, vai perdendo velocidade, atinge uma altura máxima e depois começa a cair. Se registrarmos altura e tempo, o gráfico não forma uma reta: surge uma curva.</p>
      <p>Essa curva guarda respostas interessantes: <strong>quando a bola toca o chão? Em que instante chega mais alto? Qual é essa altura máxima?</strong> Aprender a ler uma parábola é aprender a extrair essas respostas do gráfico.</p>
    `,
    quadrado: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você aumenta uma foto quadrada de 100 × 100 pixels para 200 × 200 pixels. Parece que dobrou o tamanho, certo? Mas a primeira imagem tem 10.000 pixels e a segunda tem 40.000.</p>
      <p>A largura dobrou e a altura também, mas a quantidade total ficou quatro vezes maior. <strong>Por que dobrar uma medida pode quadruplicar outra?</strong> A resposta está numa relação que depende do quadrado.</p>
    `,
    transformacoes: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você já desenhou uma forma numa tela e depois resolveu movê-la alguns pixels para a direita, levantá-la, ampliá-la ou virá-la de cabeça para baixo. Você não redesenha tudo: transforma o que já existe.</p>
      <p>Com gráficos acontece algo parecido. <strong>Será que uma pequena mudança na fórmula permite prever para onde a curva vai, sem calcular todos os pontos novamente?</strong> É isso que vamos aprender a enxergar.</p>
    `,
    pa: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Um teatro está organizando suas fileiras. A primeira terá 20 lugares; cada fileira seguinte terá exatamente 5 lugares a mais: 20, 25, 30, 35, 40... Depois de algumas fileiras, alguém pergunta quantos lugares haverá na 30ª.</p>
      <p>É possível contar uma por uma, mas logo surge uma ideia melhor: <strong>se o mesmo passo se repete sempre, será que conseguimos saltar diretamente para qualquer posição da sequência?</strong> Essa pergunta nos leva à Progressão Aritmética.</p>
    `,
    tangente: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Você precisa subir uma diferença de altura de 1 metro. Uma rampa avança 5 metros para conseguir essa subida; outra alcança o mesmo 1 metro avançando apenas 2 metros. Visualmente, a segunda é muito mais inclinada.</p>
      <p>Dizer apenas “essa parece mais íngreme” não basta quando precisamos comparar, projetar ou calcular. <strong>Como transformar a inclinação em um número e, depois, esse número em um ângulo?</strong> É aí que a tangente começa a fazer sentido.</p>
    `,
    porcentagem: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Duas lojas anunciam “20% de desconto”. Em uma, o produto custava R$ 100; na outra, R$ 1.500. A porcentagem escrita na placa é a mesma, mas o dinheiro economizado é completamente diferente.</p>
      <p>Isso revela uma pergunta que vale para quase toda porcentagem: <strong>20% de quê?</strong> Antes de fazer qualquer conta, precisamos descobrir qual valor representa o todo, isto é, a base de 100%.</p>
    `,
    ladrilhamento: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Olhe para um piso feito de quadrados: as peças se repetem e fecham perfeitamente, sem buracos. Agora tente imaginar o mesmo piso usando apenas pentágonos regulares. Em algum momento, sobra espaço ou as peças começam a se sobrepor.</p>
      <p>As formas parecem simples, mas existe uma condição matemática escondida no encaixe. <strong>O que os ângulos precisam fazer para que um conjunto de peças consiga cobrir todo o plano?</strong></p>
    `,
    grandezas: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Um carro percorre 180 km em 3 horas. Um arquivo de 600 MB baixa em 20 segundos. Em ambos os casos, o número isolado não conta toda a história: precisamos saber quanto acontece <em>por</em> unidade de outra medida.</p>
      <p>É por isso que falamos em quilômetros <strong>por hora</strong> e megabytes <strong>por segundo</strong>. <strong>Será que a própria unidade já está nos dizendo qual conta devemos fazer?</strong></p>
    `,
    dados: `
      <span class="card-title">Imagine a seguinte situação cotidiana:</span>
      <p>Uma turma responde a uma pesquisa e você recebe dezenas de números e respostas espalhados numa lista. Olhando rapidamente, alguém afirma: “já dá para ver qual é a conclusão”. Mas outra pessoa organiza os mesmos dados e percebe uma história diferente.</p>
      <p>Dados não falam sozinhos. <strong>Como organizar informações, escolher uma amostra e interpretar gráficos sem enxergar uma conclusão que os dados nunca provaram?</strong> Essa é a investigação desta aula.</p>
    `
  };

  Object.entries(openings).forEach(([id, html]) => {
    const lesson = window.DS_MATH_LESSONS.find(l => l.id === id);
    if (!lesson || typeof lesson.content !== 'string') return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = lesson.content;
    const hero = wrapper.querySelector('.hero-box');
    if (!hero) return;
    hero.innerHTML = html;
    lesson.content = wrapper.innerHTML;
  });
})();
