(() => {
  'use strict';

  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const revisions = {
    diagnostico: {
      menu: '00 Avaliação Diagnóstica',
      title: 'Avaliação Diagnóstica',
      technical: 'Uma revisão curta do que você já sabe',
      objective: 'Responda às questões para descobrir o que já está firme e quais pontos vale revisar antes de continuar.',
      heroTitle: 'Antes de seguir, descubra o que já está firme',
      heroText: 'Você não precisa começar lembrando de tudo. Faça as questões sem consultar, veja onde surgem dúvidas e use a revisão rápida para recuperar apenas o que estiver fazendo falta.'
    },
    variacao: {
      menu: '01 Proporcionalidade entre Grandezas',
      title: 'Proporcionalidade entre Grandezas',
      technical: 'Razão constante, tabelas, gráficos e expressão y = kx',
      objective: 'Você vai aprender a reconhecer quando duas grandezas são diretamente proporcionais e quando apenas variam juntas sem manter a mesma razão.'
    },
    algebra: {
      menu: '02 Linguagem Algébrica',
      title: 'Linguagem Algébrica',
      technical: 'Variáveis, expressões, fórmulas e generalização',
      objective: 'Você vai aprender a usar letras para representar valores que podem mudar e a escrever regras que funcionam para muitos casos.',
      heroTitle: 'Uma regra para muitos casos',
      heroText: 'Uma gráfica cobra R$ 3 por cartão impresso. Para 10 cartões, você calcula 3 × 10; para 50, 3 × 50. Em vez de criar uma conta nova a cada vez, a álgebra permite escrever uma única regra e trocar apenas o valor que mudou.'
    },
    funcao1: {
      menu: '03 Função Afim',
      title: 'Função Afim',
      technical: 'Funções afim, linear, constante e identidade',
      objective: 'Você vai aprender a relacionar uma entrada a uma saída e a reconhecer situações com valor inicial e variação constante.',
      heroTitle: 'Um valor inicial mais aquilo que varia',
      heroText: 'Um estacionamento cobra R$ 10 de entrada e mais R$ 5 por hora. Se você fica 1, 2 ou 3 horas, o preço muda, mas sempre seguindo a mesma regra. Corridas por aplicativo, entregas e vários serviços também funcionam desse jeito.'
    },
    reta: {
      menu: '04 Gráfico da Função do 1º Grau',
      title: 'Gráfico da Função do 1º Grau',
      technical: 'Taxa de variação, crescimento, decrescimento e coeficiente angular',
      objective: 'Você vai aprender a interpretar a inclinação de uma reta e a relacioná-la ao ritmo com que uma grandeza aumenta, diminui ou permanece constante.',
      heroTitle: 'O gráfico mostra o ritmo da mudança',
      heroText: 'Se um preço aumenta R$ 5 por hora, se uma caixa recebe 20 peças por minuto ou se uma conexão transfere dados a uma taxa constante, o gráfico sobe sempre no mesmo ritmo. A inclinação da reta mede esse ritmo.'
    },
    partes: {
      menu: '05 Funções Definidas por Partes',
      title: 'Funções Definidas por Partes',
      technical: 'Regras diferentes para intervalos diferentes',
      objective: 'Você vai aprender a identificar qual regra deve ser usada em cada faixa de valores e a interpretar situações que mudam de comportamento.',
      heroTitle: 'Nem sempre uma única regra serve para tudo',
      heroText: 'Imagine um estacionamento que cobra R$ 12 até 1 hora e, depois disso, acrescenta R$ 5 por hora adicional. Antes de calcular, você precisa descobrir em qual faixa o tempo está. Contas de consumo, impostos e planos por faixa seguem a mesma lógica.'
    },
    quadratica: {
      menu: '06 Função Quadrática',
      title: 'Função Quadrática',
      technical: 'Expressões do 2º grau e comportamento da parábola',
      objective: 'Você vai aprender a reconhecer funções quadráticas e a perceber por que seu crescimento não acontece no mesmo ritmo de uma função do 1º grau.',
      heroTitle: 'Nem todo crescimento acontece em linha reta',
      heroText: 'Observe os quadrados 1, 4, 9, 16 e 25. Os aumentos são +3, +5, +7 e +9: o próprio ritmo de crescimento está mudando. Esse comportamento aparece em áreas, trajetórias e situações de máximo ou mínimo.'
    },
    parabola: {
      menu: '07 Gráfico da Função Quadrática',
      title: 'Gráfico da Função Quadrática',
      technical: 'Parábola, raízes, vértice, máximo, mínimo e concavidade',
      objective: 'Você vai aprender a ler em uma parábola onde a função zera, onde atinge máximo ou mínimo e em quais trechos cresce ou decresce.',
      heroTitle: 'A curva pode revelar o ponto mais alto ou mais baixo',
      heroText: 'Em problemas de altura, área, custo ou lucro, muitas vezes interessa descobrir quando um valor chega ao máximo ou ao mínimo. Na função quadrática, o gráfico ajuda a enxergar esses pontos e entender o comportamento da situação.'
    },
    quadrado: {
      menu: '08 Proporcionalidade ao Quadrado',
      title: 'Proporcionalidade ao Quadrado',
      technical: 'Relações do tipo y = ax²',
      objective: 'Você vai aprender a reconhecer situações em que uma grandeza depende do quadrado de outra e a interpretar a razão y/x².',
      heroTitle: 'Dobrar uma medida pode quadruplicar outra',
      heroText: 'Um quadrado de lado 2 tem área 4. Se o lado dobra para 4, a área passa para 16. Ela não dobrou: ficou quatro vezes maior. Esse é o tipo de relação que você vai aprender a reconhecer aqui.'
    },
    transformacoes: {
      menu: '09 Transformações de Gráficos',
      title: 'Transformações de Gráficos',
      technical: 'Deslocamentos, inclinação e mudanças no comportamento da função',
      objective: 'Você vai aprender a comparar gráficos e perceber como alterações na expressão mudam a posição, a inclinação ou a forma da representação.',
      heroTitle: 'Mudar a regra muda o gráfico',
      heroText: 'Compare y = x com y = x + 3. As duas retas têm a mesma inclinação, mas a segunda fica 3 unidades acima. Mudanças pequenas na expressão podem deslocar, inclinar ou transformar um gráfico de maneiras previsíveis.'
    },
    pa: {
      menu: '10 Progressão Aritmética (PA)',
      title: 'Progressão Aritmética (PA)',
      technical: 'Sequências com diferença constante entre termos',
      objective: 'Você vai aprender a reconhecer uma PA, calcular seus termos e relacionar esse padrão a uma variação constante.',
      heroTitle: 'Padrões que avançam passo a passo',
      heroText: 'Uma pessoa guarda R$ 20 na primeira semana e aumenta o depósito em R$ 5 a cada semana: 20, 25, 30, 35, 40... Quando a diferença entre os termos permanece a mesma, aparece o padrão de uma Progressão Aritmética.'
    },
    tangente: {
      menu: '11 Tangente de um Ângulo',
      title: 'Tangente de um Ângulo',
      technical: 'Razão entre subida e avanço em triângulos retângulos',
      objective: 'Você vai aprender a medir inclinações usando a tangente e a relacionar essa razão ao coeficiente angular de uma reta.',
      heroTitle: 'Inclinações estão por toda parte',
      heroText: 'Imagine uma rampa que sobe 1 metro enquanto avança 5 metros na horizontal. Comparar a subida com o avanço permite medir sua inclinação. A mesma ideia aparece em telhados, ruas, escadas e retas no plano cartesiano.'
    },
    porcentagem: {
      menu: '12 Porcentagem',
      title: 'Porcentagem',
      technical: 'Razões com base 100, aumentos, descontos, taxas e juros',
      objective: 'Você vai aprender a interpretar porcentagens, calcular partes de um total e analisar aumentos, descontos e variações percentuais.',
      heroTitle: 'Você encontra porcentagens todos os dias',
      heroText: 'Uma loja anuncia 20% de desconto, o celular mostra 75% de bateria e uma pesquisa apresenta 60% das respostas. Em todos esses casos, a comparação é feita com 100 partes. Por isso, 25% significa 25 de cada 100: 25/100 = 0,25.'
    },
    ladrilhamento: {
      menu: '13 Ladrilhamento do Plano',
      title: 'Ladrilhamento do Plano',
      technical: 'Polígonos, ângulos internos e encaixe em 360°',
      objective: 'Você vai aprender a descobrir quais formas conseguem cobrir uma superfície sem deixar espaços nem criar sobreposições.',
      heroTitle: 'Por que alguns pisos encaixam perfeitamente?',
      heroText: 'Olhe para pisos, azulejos e mosaicos: algumas formas se repetem e cobrem toda a superfície sem deixar buracos. Outras deixam espaços. A explicação está nos ângulos que se encontram em cada ponto.'
    },
    grandezas: {
      menu: '14 Grandezas Compostas',
      title: 'Grandezas Compostas',
      technical: 'Velocidade, densidade, concentração, taxa de transmissão e outras razões',
      objective: 'Você vai aprender a interpretar grandezas formadas pela combinação de outras e a usar corretamente suas unidades.',
      heroTitle: 'A própria unidade conta a relação',
      heroText: 'km/h compara distância e tempo. MB/s compara quantidade de dados e tempo. g/L compara massa e volume. Muitas grandezas do dia a dia nascem justamente da combinação de duas medidas, e a unidade já dá uma pista da operação usada.'
    },
    dados: {
      menu: '15 Estatística: Tabelas, Gráficos e Amostragem',
      title: 'Estatística: Tabelas, Gráficos e Amostragem',
      technical: 'Frequências, amostras e relação entre variáveis',
      objective: 'Você vai aprender a organizar dados, comparar frequências, avaliar amostras e interpretar relações entre duas variáveis.',
      heroTitle: 'Antes de concluir, organize os dados',
      heroText: 'Notas de uma turma, tempos de resposta de um aplicativo, resultados de uma pesquisa ou acessos a um site podem parecer apenas uma lista de números. Tabelas e gráficos ajudam a transformar essa lista em informação que pode ser comparada e interpretada.'
    },
    exercicios: {
      menu: '99 Exercícios',
      title: 'Exercícios',
      technical: 'Prática progressiva dos conteúdos da 1ª série',
      objective: 'Escolha um assunto e pratique em níveis diferentes até conseguir resolver e explicar o raciocínio com segurança.',
      heroTitle: 'Pratique até conseguir explicar sozinho',
      heroText: 'Escolha o assunto e o nível. A cada novo exercício, os valores podem mudar para que você pratique o raciocínio em situações diferentes, em vez de apenas decorar uma resposta.'
    }
  };

  const teacherBox = /<details class="teacher-box">[\s\S]*?<\/details>\s*/i;
  const firstHero = /<div class="hero-box">[\s\S]*?<\/div>/i;

  window.DS_MATH_LESSONS.forEach((lesson) => {
    const revision = revisions[lesson.id];
    if (!revision) return;

    lesson.menu = revision.menu;
    lesson.title = revision.title;
    lesson.technical = revision.technical;
    lesson.objective = revision.objective;

    if (typeof lesson.content !== 'string') return;

    lesson.content = lesson.content.replace(teacherBox, '');

    if (lesson.id === 'variacao') {
      lesson.content = lesson.content
        .replace('Comece olhando o comportamento', 'Proporcionalidade no dia a dia')
        .replace('Dois preços aumentam. Só um é proporcional.', 'Nem tudo que aumenta junto é proporcional')
        .replace('Compare duas situações antes de procurar qualquer fórmula.', 'Preço por quilo, distância, tempo, consumo e tarifas relacionam grandezas o tempo todo. Compare as duas situações e observe o que realmente permanece igual.');
      return;
    }

    if (revision.heroTitle && revision.heroText) {
      const hero = `<div class="hero-box"><span class="card-title">${revision.heroTitle}</span><p>${revision.heroText}</p></div>`;
      lesson.content = lesson.content.replace(firstHero, hero);
    }
  });
})();
