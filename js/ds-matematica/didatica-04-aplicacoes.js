(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;
  const get = (id) => window.DS_MATH_LESSONS.find((lesson) => lesson.id === id);
  const replace = (lesson, oldText, newText) => {
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(oldText)) return false;
    lesson.content = lesson.content.replace(oldText, newText);
    return true;
  };
  const insertBefore = (lesson, marker, html) => {
    if (!lesson || typeof lesson.content !== 'string' || !lesson.content.includes(marker)) return false;
    lesson.content = lesson.content.replace(marker, `${html}${marker}`);
    return true;
  };

  // 12 — Porcentagem: explicar base, fórmula de variação e símbolos de juros.
  {
    const l = get('porcentagem');
    replace(
      l,
      `<div class="concept-box"><p>Para calcular p% de um valor V:</p><p><span class="formula">parte = (p/100)·V</span></p></div>`,
      `<div class="concept-box"><span class="card-title">Da frase para a conta</span>
        <p>Em “15% de 200”, o número 15 informa quantas partes de cada 100 queremos e 200 é o <strong>valor de referência</strong>, também chamado de base.</p>
        <p>Podemos representar qualquer porcentagem por <span class="math">p</span> e qualquer valor de referência por <span class="math">V</span>:</p>
        <p><span class="formula">parte=(p/100)·V</span></p>
        <p>Leia a fórmula como: “transforme a porcentagem em uma fração de 100 e multiplique pela base”.</p>
      </div>`
    );
    replace(
      l,
      '<h3>Variação percentual</h3><p>Para medir quanto um valor mudou em relação ao inicial:</p><p><span class="formula">variação % = (novo − antigo)/antigo · 100</span></p>',
      `<h3>Variação percentual: mudança em relação a quê?</h3>
      <p>Primeiro calculamos a mudança absoluta: <span class="math">novo−antigo</span>. Depois comparamos essa mudança com o valor de onde partimos, isto é, o valor antigo.</p>
      <ol class="steps">
        <li>Descubra quanto mudou: <span class="math">novo−antigo</span>.</li>
        <li>Divida essa mudança pelo valor antigo.</li>
        <li>Multiplique por 100 para escrever o resultado em porcentagem.</li>
      </ol>
      <p><span class="formula">variação % = (novo−antigo)/antigo · 100</span></p>`
    );
    replace(
      l,
      `<h3>Juros simples e compostos</h3>
      <div class="two-col"><div class="mini-card"><strong>Juros simples</strong><span class="math">M=C(1+it)</span>. O acréscimo por período é calculado sempre sobre o capital inicial.</div><div class="mini-card"><strong>Juros compostos</strong><span class="math">M=C(1+i)^t</span>. Cada período incide sobre o saldo acumulado.</div></div>`,
      `<h3>Juros: porcentagem ao longo do tempo</h3>
      <div class="recall-box"><strong>Antes das fórmulas, conheça as letras</strong>
        <p><span class="math">C</span> = capital inicial, o valor de partida. <span class="math">i</span> = taxa por período em forma decimal; 2% = 0,02. <span class="math">t</span> = quantidade de períodos. <span class="math">M</span> = montante, o valor final.</p><p>Em <span class="math">(1+i)^t</span>, o expoente <span class="math">t</span> indica quantas vezes o fator de crescimento <span class="math">1+i</span> é aplicado.</p>
      </div>
      <div class="two-col">
        <div class="mini-card"><strong>Juros simples</strong><p>A porcentagem de cada período é calculada sempre sobre o valor inicial. Por isso o acréscimo por período permanece igual.</p><p><span class="math">M=C(1+it)</span></p></div>
        <div class="mini-card"><strong>Juros compostos</strong><p>A porcentagem do próximo período é calculada sobre o saldo que já cresceu. Por isso há “juros sobre juros”.</p><p><span class="math">M=C(1+i)^t</span></p></div>
      </div>`
    );
    replace(
      l,
      `<div class="example-box"><p>R$ 1.000 a 2% ao mês por 3 meses:</p><p>Simples: <span class="math">1000(1+0,02·3)=1060</span>.</p><p>Compostos: <span class="math">1000(1,02)³≈1061,21</span>.</p></div>`,
      `<div class="example-box"><span class="card-title">Veja os dois crescerem mês a mês</span>
        <p>R$ 1.000 a 2% ao mês por 3 meses.</p>
        <p><strong>Simples:</strong> 2% de 1.000 = R$ 20 por mês. Após três meses: <span class="math">1000+3·20=1060</span>.</p>
        <p><strong>Compostos:</strong> 1º mês: R$ 1.020,00; 2º mês: R$ 1.040,40; 3º mês: aproximadamente R$ 1.061,21. A base muda a cada mês.</p>
        <p>As fórmulas <span class="math">M=C(1+it)</span> e <span class="math">M=C(1+i)^t</span> resumem esses dois processos.</p>
      </div>`
    );
  }

  // 13 — Ladrilhamento: explicar polígono regular e derivar a fórmula do ângulo interno.
  {
    const l = get('ladrilhamento');
    insertBefore(
      l,
      '<div class="concept-box"><p>Em torno de um ponto completo há <strong>360°</strong>.',
      `<div class="recall-box"><strong>Duas ideias antes de começar</strong>
        <p>Um <strong>polígono regular</strong> tem todos os lados e todos os ângulos internos iguais. Um <strong>vértice</strong> é o ponto em que dois lados se encontram.</p>
        <p>Ao redor de um ponto damos uma volta completa, que corresponde a 360°. Por isso os ângulos das peças que se encontram nesse ponto precisam completar exatamente 360° para não deixar espaço nem provocar sobreposição.</p>
      </div>`
    );
    replace(
      l,
      `<h3>Ângulo interno de um polígono regular</h3><p>Para um polígono regular de n lados:</p><p><span class="formula">ângulo interno = ((n−2)·180°)/n</span></p>`,
      `<h3>De onde vem a fórmula do ângulo interno?</h3>
      <p>Um polígono de <span class="math">n</span> lados pode ser dividido em <span class="math">n−2</span> triângulos. Como cada triângulo possui 180° de soma interna, a soma dos ângulos do polígono é <span class="math">(n−2)·180°</span>.</p>
      <p>Se o polígono é regular, todos os <span class="math">n</span> ângulos são iguais. Dividimos a soma por <span class="math">n</span>:</p>
      <p><span class="formula">ângulo interno=((n−2)·180°)/n</span></p>
      <p>Assim, a fórmula é apenas uma forma compacta de registrar a divisão do polígono em triângulos.</p>`
    );
    insertBefore(
      l,
      '<div class="task-box"><h4>Investigue</h4>',
      `<div class="example-box"><span class="card-title">Uma forma que não ladrilha sozinha pode participar de outro padrão</span>
        <p>Um octógono regular tem ângulo interno de 135°. Sozinho ele não fecha 360°, mas dois octógonos e um quadrado formam <span class="math">135°+135°+90°=360°</span>.</p>
        <p>Isso mostra que há diferença entre <strong>ladrilhar usando um único tipo de polígono regular</strong> e <strong>combinar polígonos diferentes</strong>.</p>
      </div>`
    );
  }

  // 14 — Grandezas compostas: explicar "por", numerador/denominador e a conversão de unidades.
  {
    const l = get('grandezas');
    insertBefore(
      l,
      '<div class="table-wrap"><table>',
      `<div class="concept-box"><span class="card-title">A palavra “por” costuma indicar uma divisão</span>
        <p><strong>Quilômetros por hora</strong> significa quilômetros divididos por horas. <strong>Megabytes por segundo</strong> significa megabytes divididos por segundos.</p>
        <p>Numa fração, a parte de cima é o <strong>numerador</strong> e a parte de baixo é o <strong>denominador</strong>. Em <span class="math">600 MB/20 s</span>, os dados estão no numerador e o tempo no denominador.</p>
        <p>A unidade final não é um detalhe: ela explica qual relação foi calculada.</p>
      </div>`
    );
    insertBefore(
      l,
      '<div class="example-box"><span class="card-title">Velocidade média</span>',
      `<div class="note-box"><strong>Nem toda grandeza composta nasce de uma divisão.</strong>
        <p>Algumas também surgem de produtos. A área de um retângulo, por exemplo, é <span class="math">comprimento×largura</span> e sua unidade pode ser <span class="math">m²</span>. O importante é observar como as grandezas originais foram combinadas.</p>
      </div>`
    );
    replace(
      l,
      '<h3>Conversão de unidades compostas</h3><p>Converta numerador e denominador com atenção. Para transformar 72 km/h em m/s:</p><p><span class="math">72 km/h = 72·1000 m / 3600 s = 20 m/s</span>.</p>',
      `<h3>Conversão de unidades compostas sem decorar</h3>
      <p>Para transformar 72 km/h em m/s, converta separadamente distância e tempo:</p>
      <ol class="steps">
        <li><span class="math">72 km = 72·1000 = 72.000 m</span>.</li>
        <li><span class="math">1 h = 60·60 = 3.600 s</span>.</li>
        <li>Agora mantenha a mesma razão: <span class="math">72.000 m/3.600 s = 20 m/s</span>.</li>
      </ol>
      <p>É daí que nasce a regra prática de dividir km/h por 3,6 para obter m/s.</p>`
    );
  }

  // 15 — Estatística: preparar dado, variável, população, amostra e frequência.
  {
    const l = get('dados');
    insertBefore(
      l,
      '<div class="example-box"><span class="card-title">Exemplo</span>',
      `<div class="concept-box"><span class="card-title">Antes da tabela: o que estamos observando?</span>
        <p>Um <strong>dado</strong> é um valor ou categoria registrado. A característica que estamos observando recebe o nome de <strong>variável</strong>: tempo de resposta, nota, idade, opção escolhida em uma pesquisa etc.</p>
        <p>A <strong>população</strong> é o conjunto completo que queremos estudar. Uma <strong>amostra</strong> é apenas uma parte dessa população usada para obter informações quando observar todos seria difícil ou desnecessário.</p>
      </div>`
    );
    replace(
      l,
      `<h3>Frequência absoluta e relativa</h3><div class="two-col"><div class="mini-card"><strong>Absoluta</strong>Quantidade de ocorrências.</div><div class="mini-card"><strong>Relativa</strong>Proporção ou porcentagem que aquela frequência representa no total.</div></div>`,
      `<h3>Frequência absoluta e relativa</h3>
      <div class="two-col">
        <div class="mini-card"><strong>Frequência absoluta</strong><p>É a contagem: quantas vezes aquele valor ou categoria apareceu.</p></div>
        <div class="mini-card"><strong>Frequência relativa</strong><p>Compara essa contagem com o total. Calculamos <span class="math">frequência absoluta/total</span> e podemos escrever o resultado como decimal ou porcentagem.</p></div>
      </div>`
    );
    replace(
      l,
      '<h3>Amostra</h3><p>Nem sempre é possível observar toda a população. Uma amostra deve representar de forma razoável o grupo que queremos estudar. Uma amostra mal escolhida pode produzir uma conclusão enganosa.</p>',
      `<h3>Como uma amostra pode enganar?</h3>
      <p>Nem sempre é possível observar toda a população. A amostra precisa representar razoavelmente o grupo que queremos estudar.</p>
      <div class="example-box"><p>Se queremos saber como todos os alunos da escola chegam às aulas, entrevistar apenas quem está no estacionamento pode aumentar artificialmente a presença de quem vem de carro. O problema não está na conta, mas em <strong>quem foi escolhido para responder</strong>.</p></div>`
    );
    replace(
      l,
      '<h3>Duas variáveis</h3><p>Podemos investigar pares, como horas de estudo e resultado de uma atividade. Um diagrama de dispersão ajuda a visualizar se existe tendência de aumento, queda ou ausência de relação clara.</p>',
      `<h3>Duas variáveis</h3>
      <p>Às vezes registramos duas características da mesma pessoa ou situação, por exemplo: horas de estudo e nota. Cada observação vira um ponto <span class="math">(x,y)</span> no gráfico.</p>
      <p>Um <strong>diagrama de dispersão</strong> mostra esses pontos sem ligá-los em sequência. Observando o conjunto, podemos perceber tendência de aumento, queda ou ausência de relação clara.</p>`
    );
  }
})();
