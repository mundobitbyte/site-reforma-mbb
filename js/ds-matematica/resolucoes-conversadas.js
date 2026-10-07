(() => {
  'use strict';

  const data = window.DSMathGeneratorData;
  if (!data?.G) return;

  const { G } = data;

  const coach = {
    variacao: {
      recognize: 'Identifique quais são as duas grandezas e qual delas funciona como entrada e como resultado.',
      strategy: 'Se a questão fala em proporcionalidade direta, compare valores correspondentes pela mesma razão e procure uma regra do tipo y=kx, sem valor inicial somado.',
      why: 'Uma relação proporcional mantém a mesma quantidade de y para cada unidade de x.',
      interpret: 'Diga o que a constante encontrada representa no contexto e, quando houver unidade, escreva-a.'
    },
    algebra: {
      recognize: 'Separe o que varia do que permanece fixo. Depois descubra o papel de cada letra antes de fazer qualquer substituição.',
      strategy: 'Traduza a frase para operações. Se já houver uma expressão, substitua o valor da letra mantendo a ordem das operações.',
      why: 'A álgebra registra uma regra geral; a conta numérica é apenas um caso particular dessa regra.',
      interpret: 'Confira se cada termo da expressão continua representando aquilo que o enunciado descreveu.'
    },
    funcao1: {
      recognize: 'Procure a entrada, a saída, a variação por unidade e o valor inicial.',
      strategy: 'Relacione a situação à estrutura f(x)=ax+b: a indica quanto a saída muda por unidade e b indica de onde ela começa.',
      why: 'A função afim descreve situações em que a variação permanece constante, mas pode existir um valor inicial diferente de zero.',
      interpret: 'Volte ao contexto e explique o significado do valor calculado e dos coeficientes usados.'
    },
    reta: {
      recognize: 'Se houver dois pontos, localize primeiro a mudança vertical e a mudança horizontal. Não faça a divisão de imediato.',
      strategy: 'Calcule Δy e Δx separadamente e depois use m=Δy/Δx. Observe também o sinal do resultado.',
      why: 'O coeficiente angular mede quanto y muda para cada unidade de avanço em x.',
      interpret: 'Explique se a reta sobe, desce ou permanece horizontal e o que essa inclinação significa na situação.'
    },
    partes: {
      recognize: 'Antes da conta, descubra em qual intervalo está o valor de entrada.',
      strategy: 'Escolha somente a regra válida naquela faixa. Se houver excedente, calcule primeiro quanto ultrapassou o limite.',
      why: 'Uma função por partes muda de regra conforme o intervalo; usar a sentença errada produz um resultado sem significado.',
      interpret: 'Confira o ponto de fronteira e diga por que a regra escolhida é a correta para aquele valor.'
    },
    quadratica: {
      recognize: 'Identifique a, b e c e observe se a pergunta pede valor da função, concavidade ou outra propriedade.',
      strategy: 'Em cálculos, faça primeiro a potência x²; depois as multiplicações e por fim as somas e subtrações.',
      why: 'O termo quadrático faz o ritmo de mudança variar e dá origem ao comportamento curvo da parábola.',
      interpret: 'Relacione o resultado ao comportamento da função, especialmente ao sinal de a e ao significado de f(x).'
    },
    parabola: {
      recognize: 'Descubra se a pergunta quer raízes, vértice, máximo/mínimo, concavidade ou leitura de um ponto.',
      strategy: 'Escolha a ferramenta pelo pedido: f(x)=0 para raízes, sinal de a para concavidade e vértice para máximo ou mínimo.',
      why: 'Cada cálculo responde a uma pergunta geométrica diferente sobre o gráfico.',
      interpret: 'Traduza o ponto ou valor encontrado para o gráfico e, se houver contexto, explique o que ele representa.'
    },
    quadrado: {
      recognize: 'Veja se y depende de x² e não apenas de x. Observe especialmente o que acontece quando x dobra ou triplica.',
      strategy: 'Calcule x² primeiro e só depois aplique a constante que multiplica o quadrado.',
      why: 'Ao multiplicar x por um fator, x² é multiplicado pelo quadrado desse fator.',
      interpret: 'Explique com palavras quanto y mudou em comparação com a mudança de x.'
    },
    transformacoes: {
      recognize: 'Comece pelo gráfico conhecido e identifique exatamente qual parte da expressão foi alterada.',
      strategy: 'Analise uma mudança por vez: soma fora, mudança dentro do argumento, multiplicação ou sinal negativo.',
      why: 'Alterações específicas na expressão produzem deslocamentos, escalas ou reflexões previsíveis.',
      interpret: 'Descreva o efeito geometricamente: subiu, desceu, foi para a direita/esquerda, refletiu, estreitou ou alargou.'
    },
    pa: {
      recognize: 'Identifique primeiro termo a₁, razão r e a posição n. Se a razão ainda não foi dada, encontre-a pela diferença entre termos consecutivos.',
      strategy: 'Conte os passos a partir do primeiro termo. Para chegar à posição n existem n−1 mudanças, por isso usamos aₙ=a₁+(n−1)r.',
      why: 'A fórmula não é uma regra arbitrária: ela soma ao primeiro termo exatamente a quantidade de passos necessária para chegar à posição desejada.',
      interpret: 'Confira o sinal de r, diferencie posição de valor e, se possível, valide o resultado avançando alguns termos da sequência.'
    },
    tangente: {
      recognize: 'Escolha o ângulo de referência e identifique em relação a ele qual lado é o oposto e qual é o adjacente.',
      strategy: 'Use tan(θ)=oposto/adjacente. Se a pergunta pedir o ângulo, faça o caminho inverso com arctan.',
      why: 'A tangente compara subida e avanço horizontal, isto é, mede uma inclinação.',
      interpret: 'Explique o que a razão encontrada diz sobre a inclinação e, quando couber, conecte-a ao coeficiente angular.'
    },
    porcentagem: {
      recognize: 'Descubra primeiro qual valor representa 100%. Essa é a base da porcentagem.',
      strategy: 'Converta p% em p/100 ou em decimal e decida se precisa calcular uma parte, um acréscimo, um desconto ou uma variação.',
      why: 'A mesma porcentagem produz valores diferentes quando a base muda.',
      interpret: 'Complete mentalmente a frase “este percentual é de quê?” e confira se a base usada foi realmente a correta.'
    },
    ladrilhamento: {
      recognize: 'Identifique o ângulo interno das peças e pense no encontro delas em torno de um único vértice.',
      strategy: 'Compare os ângulos com uma volta completa de 360°. Para peças iguais, verifique se 360 dividido pelo ângulo produz um número inteiro.',
      why: 'O encaixe só fecha sem buraco ou sobreposição quando os ângulos ao redor do ponto completam exatamente 360°.',
      interpret: 'Explique geometricamente por que o padrão fecha ou por que sobra/falta espaço.'
    },
    grandezas: {
      recognize: 'Leia a unidade em voz alta e identifique as grandezas que estão sendo combinadas.',
      strategy: 'Organize numerador e denominador, converta unidades se necessário e só então efetue a divisão ou o produto pedido.',
      why: 'Unidades como MB/s e km/h já informam a relação matemática: megabytes por segundo, quilômetros por hora.',
      interpret: 'Nunca encerre apenas com um número: escreva a unidade e diga o que o resultado representa por unidade de tempo, área, volume etc.'
    },
    dados: {
      recognize: 'Identifique o total observado, a categoria ou variável analisada e o tipo de conclusão que a questão permite.',
      strategy: 'Organize os dados primeiro. Para frequência relativa, compare a frequência com o total; para relações entre variáveis, observe a tendência sem assumir causa.',
      why: 'Uma conta estatística só ganha sentido quando sabemos de onde vieram os dados e o que está sendo comparado.',
      interpret: 'Expresse o resultado como quantidade, proporção ou porcentagem e não conclua mais do que os dados realmente sustentam.'
    }
  };

  const escapeHtml = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  function splitIntoSteps(raw) {
    const marked = raw.replace(/([.!?])\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ0-9])/g, '$1§');
    return marked.split(/§|;\s*/).map(part => part.trim()).filter(Boolean);
  }

  function formatCalculation(solution) {
    const raw = String(solution ?? '').trim();
    if (!raw) return '<p>Retome os dados do enunciado e faça a conta com calma.</p>';

    return splitIntoSteps(raw).map(text => {
      const parts = text.split('=').map(part => part.trim()).filter(Boolean);

      if (parts.length >= 3) {
        const first = parts[0];
        const simpleLeft = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ0-9_()₀₁₂₃₄₅₆₇₈₉θΔᵥ]*$/.test(first);
        const lines = [];

        if (simpleLeft) {
          for (let i = 1; i < parts.length; i++) {
            lines.push(`${escapeHtml(first)} = ${escapeHtml(parts[i])}`);
          }
        } else {
          lines.push(`${escapeHtml(parts[0])} = ${escapeHtml(parts[1])}`);
          for (let i = 2; i < parts.length; i++) lines.push(`= ${escapeHtml(parts[i])}`);
        }

        return `<div class="mbb-equation-walk">${lines.map(line => `<p><span class="math">${line}</span></p>`).join('')}</div>`;
      }

      return `<p>${escapeHtml(text)}</p>`;
    }).join('');
  }

  function buildSolution(topic, original, question) {
    const meta = coach[topic];
    if (!meta) return original;
    const hasNumbers = /\d/.test(`${question || ''} ${original || ''}`);
    const actionTitle = hasNumbers ? 'Faça a conta sem pular a lógica' : 'Construa a justificativa';

    return `<div class="mbb-guided-solution">
      <div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Leia e organize o problema</strong><p>${meta.recognize}</p></div>
      <div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Escolha a ideia e entenda por quê</strong><p>${meta.strategy}</p><p><em>Por que funciona?</em> ${meta.why}</p></div>
      <div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>${actionTitle}</strong>${formatCalculation(original)}</div>
      <div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete e confira</strong><p>${meta.interpret}</p></div>
    </div>`;
  }

  Object.entries(coach).forEach(([topic, meta]) => {
    const originalGenerator = G[topic];
    if (typeof originalGenerator !== 'function' || originalGenerator.__mbbConversado) return;

    const wrapped = function(level) {
      const exercise = originalGenerator(level);
      if (!exercise || typeof exercise !== 'object') return exercise;

      const originalHint = String(exercise.hint || '').trim();
      exercise.hint = `<strong>Comece assim:</strong> ${meta.recognize}${originalHint ? ` <br><strong>Depois:</strong> ${originalHint}` : ''}`;
      exercise.solution = buildSolution(topic, exercise.solution, exercise.question);
      exercise.__mbbGuided = true;
      return exercise;
    };

    wrapped.__mbbConversado = true;
    G[topic] = wrapped;
  });
})();