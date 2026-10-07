(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(lesson => lesson.id === id);

  const guide = {
    variacao: {
      everyday:'Preço por quilo, receitas, consumo e distâncias permitem comparar quanto uma grandeza muda quando a outra muda.',
      ds:'Taxa de transmissão, quantidade de leituras de um sensor e produção de dados por segundo são exemplos naturais de razões constantes.',
      question:'O que precisa permanecer igual para podermos dizer que duas grandezas são diretamente proporcionais?',
      recognize:'Procure duas grandezas e verifique se a comparação entre elas mantém o mesmo valor.',
      strategy:'Calcule a razão entre os valores correspondentes e confira se a regra pode ser escrita sem valor inicial fixo.',
      interpret:'Não termine na divisão: diga o que a constante representa e inclua sua unidade.'
    },
    algebra: {
      everyday:'Tarifas, planos, compras e orçamentos repetem a mesma estrutura com valores diferentes. A álgebra registra essa estrutura uma única vez.',
      ds:'Em programação, uma variável também representa um valor que pode mudar. Fórmulas aparecem em cálculos de tamanho, posição, tempo, custo e desempenho.',
      question:'Como transformar vários exemplos parecidos em uma regra que funcione para qualquer valor permitido?',
      recognize:'Separe o que muda do que permanece fixo e escolha letras com significado claro.',
      strategy:'Traduza cada parte da frase para uma operação e teste a expressão com pelo menos um valor conhecido.',
      interpret:'Explique o papel de cada termo da expressão, em vez de apenas apresentar a fórmula pronta.'
    },
    funcao1: {
      everyday:'Corridas, estacionamentos e serviços costumam combinar um valor inicial com um acréscimo constante por unidade.',
      ds:'Um serviço em nuvem pode cobrar uma mensalidade fixa mais um valor por GB utilizado; isso produz uma função afim.',
      question:'Qual parte representa o valor inicial e qual parte representa quanto a saída muda a cada unidade da entrada?',
      recognize:'Identifique entrada, saída, taxa de variação e valor inicial antes de escrever a função.',
      strategy:'Use a forma f(x)=ax+b somente depois de explicar quem é x, o que a mede e o que b representa.',
      interpret:'Depois de calcular, traduza f(x) novamente para a situação real.'
    },
    reta: {
      everyday:'Nível de água, preço acumulado e distância percorrida podem crescer ou diminuir num ritmo constante, formando uma reta.',
      ds:'Um gráfico de dados transferidos por tempo ou de tarefas concluídas por minuto pode formar uma reta quando a taxa permanece estável.',
      question:'Como transformar a inclinação visual de uma reta em um número que tenha significado?',
      recognize:'Escolha dois pontos e separe primeiro a mudança vertical da mudança horizontal.',
      strategy:'Calcule Δy e Δx separadamente e só depois faça m=Δy/Δx.',
      interpret:'Leia m como “quantas unidades de y mudam para cada 1 unidade de x”.'
    },
    partes: {
      everyday:'Estacionamentos, impostos, energia e planos por faixa mudam de regra quando um limite é ultrapassado.',
      ds:'Serviços de nuvem, APIs e armazenamento podem cobrar ou limitar uso de maneira diferente conforme a faixa de consumo.',
      question:'Antes de calcular, qual regra vale exatamente para este valor de entrada?',
      recognize:'Localize primeiro a faixa ou intervalo em que a entrada se encontra.',
      strategy:'Escolha a sentença correta, só então substitua os valores e calcule.',
      interpret:'Confira se o resultado respeita a faixa escolhida e observe o que acontece nos pontos de troca.'
    },
    quadratica: {
      everyday:'Áreas, trajetórias e situações de máximo ou mínimo podem crescer de maneira não linear.',
      ds:'Um algoritmo com dois laços aninhados que percorrem n elementos pode executar aproximadamente n² operações: dobrar n pode quadruplicar o trabalho.',
      question:'Como reconhecer que o próprio ritmo de mudança está mudando e que uma reta já não descreve bem a situação?',
      recognize:'Procure o termo x² e identifique os coeficientes a, b e c, inclusive os que estão ocultos por valerem zero.',
      strategy:'Antes de calcular, observe o sinal de a e o papel de c; isso já antecipa informações do gráfico.',
      interpret:'Relacione o resultado ao comportamento da parábola, não apenas à expressão algébrica.'
    },
    parabola: {
      everyday:'A altura de um objeto lançado pode subir, atingir um ponto máximo e depois cair; a parábola permite localizar esse comportamento.',
      ds:'Em jogos e animações, trajetórias de projéteis podem ser modeladas por funções quadráticas para calcular altura, tempo e ponto máximo.',
      question:'O que raízes, vértice e concavidade contam sobre a situação representada?',
      recognize:'Pergunte se você precisa descobrir onde a função vale zero, onde atinge máximo/mínimo ou como ela cresce.',
      strategy:'Identifique a, b e c e escolha a ferramenta conforme a pergunta: raízes, discriminante ou vértice.',
      interpret:'Volte ao gráfico e diga o que o ponto encontrado significa na situação.'
    },
    quadrado: {
      everyday:'Ao dobrar o lado de um quadrado, sua área não dobra: quadruplica.',
      ds:'Numa imagem quadrada, dobrar largura e altura multiplica por quatro a quantidade de pixels. Uma imagem 100×100 tem 10.000 pixels; 200×200 tem 40.000.',
      question:'Como perceber quando y acompanha x², e não apenas x?',
      recognize:'Compare y com x² e observe se a razão y/x² permanece constante.',
      strategy:'Calcule x² primeiro; depois compare ou multiplique pela constante a.',
      interpret:'Explique o efeito de dobrar ou triplicar x sobre y.'
    },
    transformacoes: {
      everyday:'Mover ou ampliar uma forma sem redesenhá-la do zero é uma ideia comum em mapas, plantas e representações gráficas.',
      ds:'Interfaces, animações e gráficos em sistemas digitais usam deslocamentos, escalas e reflexões para reposicionar elementos e curvas.',
      question:'O que mudou na expressão e qual mudança isso provoca no gráfico conhecido?',
      recognize:'Comece pelo gráfico-base e identifique se a alteração está fora da função, dentro do argumento ou multiplicando toda a saída.',
      strategy:'Mude uma coisa de cada vez e acompanhe vértice, interceptos, inclinação ou abertura.',
      interpret:'Descreva a transformação com palavras: subiu, desceu, deslocou, refletiu, alargou ou estreitou.'
    },
    pa: {
      everyday:'Fileiras de assentos, parcelas que aumentam por um valor fixo e marcações igualmente espaçadas produzem sequências com passos constantes.',
      ds:'Posições de elementos numa interface, endereços de dados de mesmo tamanho e índices percorridos com passo fixo também formam sequências aritméticas.',
      question:'Se o mesmo passo se repete, como descobrir qualquer termo sem listar todos os anteriores?',
      recognize:'Encontre primeiro o primeiro termo, a diferença constante e a posição procurada.',
      strategy:'Conte quantos passos existem do primeiro termo até a posição desejada: são n−1 passos.',
      interpret:'Confira se o sinal da razão combina com a sequência e diga o que o termo encontrado representa.'
    },
    tangente: {
      everyday:'Rampas, telhados, escadas e ruas inclinadas exigem comparar subida e avanço horizontal.',
      ds:'Em gráficos, jogos e coordenadas, a inclinação entre dois pontos ajuda a determinar direção, ângulo e movimento.',
      question:'Quanto uma direção sobe ou desce para cada unidade que avança horizontalmente?',
      recognize:'Desenhe o triângulo e identifique o ângulo de referência antes de nomear os catetos.',
      strategy:'Use tangente como oposto/adjacente; se a pergunta pedir o ângulo, faça o caminho inverso com arctan.',
      interpret:'Leia a razão como uma medida de inclinação e conecte-a ao coeficiente angular da reta.'
    },
    porcentagem: {
      everyday:'Descontos, reajustes, juros, pesquisas e indicadores comparam uma parte ou uma mudança com uma base.',
      ds:'Download em 75%, uso de armazenamento em 82% e melhora de desempenho em 20% só fazem sentido quando sabemos qual é o total ou valor de referência.',
      question:'Qual é a base de 100% nesta situação?',
      recognize:'Identifique primeiro o valor de referência; depois decida se quer parte, percentual ou variação.',
      strategy:'Converta p% para p/100 ou decimal e mantenha clara a base sobre a qual a porcentagem atua.',
      interpret:'Diga “x% de quê?”; uma porcentagem sem base pode ser enganosa.'
    },
    ladrilhamento: {
      everyday:'Pisos, mosaicos e revestimentos precisam preencher uma região sem buracos nem sobreposição.',
      ds:'Mapas em jogos 2D e interfaces baseadas em grades usam peças repetidas — tiles — para construir superfícies e cenários.',
      question:'Os ângulos das peças conseguem completar exatamente uma volta de 360° em torno do ponto de encontro?',
      recognize:'Identifique o polígono, seu ângulo interno e quantas peças se encontram no mesmo vértice.',
      strategy:'Calcule ou use o ângulo interno e teste combinações que somem 360°.',
      interpret:'Explique geometricamente por que sobra espaço, há sobreposição ou ocorre encaixe perfeito.'
    },
    grandezas: {
      everyday:'Velocidade, densidade e consumo combinam duas medidas para produzir uma nova informação.',
      ds:'MB/s, Mb/s, requisições por segundo e tempo de resposta são grandezas essenciais para descrever sistemas e redes.',
      question:'O que a própria unidade está dizendo para você fazer com as grandezas?',
      recognize:'Leia a unidade em voz alta: “megabytes por segundo”, “quilômetros por hora”. A palavra “por” costuma indicar divisão.',
      strategy:'Organize numerador e denominador, converta unidades quando necessário e só depois efetue a operação.',
      interpret:'Apresente o resultado com unidade e explique o que significa “por cada” unidade do denominador.'
    },
    dados: {
      everyday:'Pesquisas, notas, tempos e preferências precisam ser organizados antes que possamos tirar conclusões.',
      ds:'Logs de aplicações, tempos de resposta, quantidade de acessos e taxas de erro são dados usados para acompanhar sistemas e tomar decisões.',
      question:'Que conclusão os dados realmente sustentam — e qual conclusão eles não permitem?',
      recognize:'Defina variável, total observado, população ou amostra e leia título, escala e unidade.',
      strategy:'Organize primeiro; calcule frequências ou compare pares depois; só então interprete.',
      interpret:'Diferencie tendência de causa e verifique se a amostra e a escala permitem a conclusão.'
    }
  };

  function paContent(){
    return `
      <div class="hero-box"><span class="card-title">Antes da fórmula, enxergue o passo que se repete</span>
        <p>Imagine uma arquibancada em que a primeira fileira tem 20 lugares e cada nova fileira recebe 5 lugares a mais. As quantidades ficam 20, 25, 30, 35, 40...</p>
        <p>A pergunta importante não é “qual fórmula eu decoro?”. É: <strong>o que está se repetindo de uma posição para a seguinte?</strong></p>
      </div>

      <div class="mbb-contextualizacao">
        <strong>Onde uma PA aparece de verdade?</strong>
        <div class="mbb-context-grid">
          <div class="mbb-context-card"><strong>No cotidiano</strong><p>Fileiras que aumentam por uma quantidade fixa, metas semanais acrescidas de um mesmo valor, parcelas planejadas e marcações igualmente espaçadas.</p></div>
          <div class="mbb-context-card"><strong>Em DS e tecnologia</strong><p>Elementos de uma interface colocados a cada 24 pixels, índices percorridos de 5 em 5 e endereços de dados de mesmo tamanho podem formar sequências com diferença constante.</p></div>
        </div>
        <div class="mbb-central-question"><strong>Pergunta central:</strong> se o mesmo passo se repete, como descobrir diretamente o valor de uma posição distante sem escrever todos os termos anteriores?</div>
      </div>

      <h3>1. Primeiro: o que é uma sequência?</h3>
      <p>Uma <strong>sequência</strong> é uma lista em que a ordem importa. Cada valor ocupa uma posição.</p>
      <div class="table-wrap"><table><thead><tr><th>Posição</th><th>Nome</th><th>Valor no exemplo</th></tr></thead><tbody><tr><td>1</td><td>1º termo, a₁</td><td>20</td></tr><tr><td>2</td><td>2º termo, a₂</td><td>25</td></tr><tr><td>3</td><td>3º termo, a₃</td><td>30</td></tr><tr><td>4</td><td>4º termo, a₄</td><td>35</td></tr></tbody></table></div>
      <p>A letra <span class="math">a</span> representa um termo da sequência. O número pequeno embaixo informa sua posição. Assim, <span class="math">a₄=35</span> significa: “o quarto termo vale 35”.</p>

      <h3>2. O que transforma a sequência em uma Progressão Aritmética?</h3>
      <p>Compare um termo com o anterior:</p>
      <div class="mbb-equation-walk">
        <p><span class="math">25−20=5</span></p>
        <p><span class="math">30−25=5</span></p>
        <p><span class="math">35−30=5</span></p>
      </div>
      <p>A diferença é sempre a mesma. Em uma PA, essa diferença constante recebe o nome tradicional de <strong>razão</strong> e é representada por <span class="math">r</span>.</p>
      <div class="note-box"><strong>Atenção à palavra “razão”.</strong><p>Aqui, razão é a <strong>diferença entre termos consecutivos</strong>. Não é a razão por divisão usada em proporcionalidade.</p></div>

      <div class="mbb-sequence" role="img" aria-label="Progressão aritmética vinte, vinte e cinco, trinta, trinta e cinco e quarenta com acréscimo de cinco em cada passo">
        <div class="sequence-node"><span>1º</span><strong>20</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>2º</span><strong>25</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>3º</span><strong>30</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>4º</span><strong>35</strong></div><div class="sequence-step">+5</div>
        <div class="sequence-node"><span>5º</span><strong>40</strong></div>
      </div>
      <p class="mbb-visual-caption standalone">O valor muda, mas o passo permanece +5. Essa repetição é a ideia central da PA.</p>

      <h3>3. A razão pode ser positiva, negativa ou zero</h3>
      <div class="three-col">
        <div class="mini-card"><strong>r &gt; 0 — crescente</strong><p>10, 14, 18, 22... A cada passo somamos 4.</p></div>
        <div class="mini-card"><strong>r &lt; 0 — decrescente</strong><p>50, 47, 44, 41... A cada passo somamos −3, isto é, diminuímos 3.</p></div>
        <div class="mini-card"><strong>r = 0 — constante</strong><p>8, 8, 8, 8... O valor não muda de uma posição para outra.</p></div>
      </div>

      <h3>4. De onde vem a fórmula do termo geral?</h3>
      <p>Não comece decorando <span class="math">aₙ=a₁+(n−1)r</span>. Vamos construí-la.</p>
      <div class="mbb-equation-walk">
        <p>Para chegar ao 2º termo, saímos do primeiro e damos <strong>1 passo</strong>: <span class="math">a₂=a₁+r</span>.</p>
        <p>Para chegar ao 3º, damos <strong>2 passos</strong>: <span class="math">a₃=a₁+2r</span>.</p>
        <p>Para chegar ao 4º, damos <strong>3 passos</strong>: <span class="math">a₄=a₁+3r</span>.</p>
        <p>Portanto, para chegar à posição <span class="math">n</span>, damos <strong>n−1 passos</strong>.</p>
      </div>
      <p><span class="formula">aₙ=a₁+(n−1)r</span></p>
      <div class="mbb-pause-question"><strong>Pare e pense:</strong> por que aparece <span class="math">n−1</span> e não <span class="math">n</span>? Porque o primeiro termo já é o ponto de partida. Do 1º ao 8º termo, por exemplo, existem 7 mudanças.</div>

      <h3>5. Exemplo completo: lugares por fileira</h3>
      <div class="example-box mbb-guided-example"><span class="card-title">A 12ª fileira terá quantos lugares?</span>
        <p>A primeira fileira tem 20 lugares e cada nova fileira acrescenta 5.</p>
        <div class="mbb-guided-solution">
          <div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Entenda o pedido</strong><p>Queremos o valor que ocupa a posição 12. Portanto procuramos <span class="math">a₁₂</span>.</p></div>
          <div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Separe os dados</strong><p>Primeiro termo: <span class="math">a₁=20</span>. Razão: <span class="math">r=5</span>. Posição: <span class="math">n=12</span>.</p></div>
          <div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Substitua entendendo o n−1</strong><p>Do 1º ao 12º termo acontecem 11 passos. Então:</p><p><span class="math">a₁₂=20+(12−1)·5</span></p><p><span class="math">a₁₂=20+11·5=20+55=75</span>.</p></div>
          <div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>A 12ª fileira terá <strong>75 lugares</strong>. O número 75 não é apenas uma resposta algébrica: ele representa a quantidade de lugares naquela posição.</p></div>
        </div>
      </div>

      <h3>6. Um exemplo de DS: posições igualmente espaçadas</h3>
      <div class="example-box mbb-guided-example"><span class="card-title">Linhas de uma interface</span>
        <p>Imagine que a primeira linha de uma tela começa na posição vertical 40 px e cada nova linha começa 24 px abaixo da anterior. As posições são 40, 64, 88, 112...</p>
        <p>Essa é uma PA com <span class="math">a₁=40</span> e <span class="math">r=24</span>.</p>
        <p>Para descobrir onde começa a 10ª linha:</p>
        <p><span class="math">a₁₀=40+(10−1)·24=40+216=256 px</span>.</p>
        <div class="mbb-professor-pensa"><strong>O que a matemática economizou?</strong><p>Não precisamos calcular linha por linha até chegar à décima. O termo geral salta diretamente para a posição desejada.</p></div>
      </div>

      <h3>7. PA e função afim: a conexão precisa fazer sentido</h3>
      <p>Retome a sequência 20, 25, 30, 35... Sua fórmula é:</p>
      <div class="mbb-equation-walk">
        <p><span class="math">aₙ=20+(n−1)·5</span></p>
        <p>Distribuindo o 5: <span class="math">aₙ=20+5n−5</span></p>
        <p>Organizando: <span class="math">aₙ=5n+15</span></p>
      </div>
      <p>Compare com a forma da função afim <span class="math">f(x)=ax+b</span>. A estrutura é a mesma: existe uma taxa constante multiplicando a entrada e um valor fixo somado.</p>
      <div class="two-col">
        <div class="mini-card"><strong>Na função afim</strong><p>Em muitos problemas, x pode assumir valores contínuos, como 2,5 horas ou 1,8 km, se o contexto permitir.</p></div>
        <div class="mini-card"><strong>Na PA</strong><p>A entrada é a <strong>posição</strong> do termo: 1, 2, 3, 4... Não existe “termo 2,5”. Por isso dizemos que o domínio é discreto.</p></div>
      </div>
      <div class="mbb-bridge-box"><strong>Ligação importante:</strong> numa PA, a razão <span class="math">r</span> desempenha o mesmo papel de uma taxa de variação constante. Se representarmos os termos por pontos no plano, eles ficam alinhados, mas aparecem apenas nas posições inteiras da sequência.</div>

      <h3>8. Tente você — agora com uma PA decrescente</h3>
      <div class="task-box"><h4>Na PA 50, 47, 44, 41,... determine a razão e o 8º termo.</h4>
        <details class="solution"><summary>Ver resolução comentada</summary>
          <div class="mbb-guided-solution">
            <div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Descubra a razão</strong><p>Compare dois termos consecutivos:</p><p><span class="math">r=a₂−a₁=47−50=−3</span>.</p><p>O sinal negativo confirma o que já vemos na lista: a sequência diminui 3 a cada posição.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Identifique o que queremos</strong><p>O pedido é o 8º termo. Então <span class="math">n=8</span>, <span class="math">a₁=50</span> e <span class="math">r=−3</span>.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Substitua com calma</strong><p><span class="math">a₈=a₁+(8−1)r</span></p><p><span class="math">a₈=50+7·(−3)</span></p><p><span class="math">a₈=50−21=29</span>.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Confira sem fórmula</strong><p>50, 47, 44, 41, 38, 35, 32, <strong>29</strong>. A contagem confirma a resposta.</p></div>
            <div class="mbb-guided-step"><span class="mbb-step-number">5</span><strong>Interprete</strong><p>A razão é <strong>−3</strong> e o 8º termo é <strong>29</strong>. Se os termos representassem uma quantidade real, 29 seria o valor correspondente à oitava etapa.</p></div>
          </div>
        </details>
      </div>

      <h3>9. Erros que a fórmula pode esconder</h3>
      <div class="three-col">
        <div class="mini-card"><strong>Usar n em vez de n−1</strong><p>Lembre-se: o primeiro termo é o ponto de partida; os passos começam depois dele.</p></div>
        <div class="mini-card"><strong>Errar o sinal de r</strong><p>Em 50, 47, 44..., fazemos 47−50=−3. Uma PA decrescente tem razão negativa.</p></div>
        <div class="mini-card"><strong>Confundir posição com valor</strong><p>Em a₈=29, 8 é a posição e 29 é o valor do termo.</p></div>
      </div>

      <div class="exam-box"><h4>Em provas e problemas</h4><p>PA pode aparecer sem esse nome: fileiras, etapas, posições igualmente espaçadas, metas que aumentam sempre pelo mesmo valor ou sequências numéricas. Antes de buscar uma fórmula, teste se a diferença entre termos consecutivos é constante.</p></div>
      <div class="ok-box"><strong>Essência:</strong> uma PA é uma sequência construída por passos iguais. A fórmula do termo geral apenas conta quantos desses passos precisamos dar a partir do primeiro termo.</div>
      <button class="action-button primary" data-practice-topic="pa" type="button">Praticar este assunto</button>
    `;
  }

  const pa = get('pa');
  if (pa) {
    pa.objective = 'Entender a PA como um padrão de passos iguais, construir a fórmula do termo geral, interpretar a razão e conectar a sequência à função afim sem decorar mecanicamente.';
    pa.content = paContent();
  }

  function contextHtml(meta){
    return `<div class="mbb-contextualizacao"><strong>Antes da conta: onde esta ideia aparece?</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>${meta.everyday}</p></div><div class="mbb-context-card"><strong>Em DS e tecnologia</strong><p>${meta.ds}</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> ${meta.question}</div></div>`;
  }

  function nodeHtml(node){
    return node.nodeType === Node.ELEMENT_NODE ? node.outerHTML : node.textContent;
  }

  function guidedStaticSolution(meta, original){
    return `<div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Entenda o que precisa ser descoberto</strong><p>${meta.recognize}</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Escolha a ideia antes de substituir números</strong><p>${meta.strategy}</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Faça a conta por etapas</strong>${original}</div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete e confira</strong><p>${meta.interpret}</p></div></div>`;
  }

  function enrichLesson(lesson, meta){
    if (!lesson || !meta || typeof lesson.content !== 'string' || lesson.id === 'pa') return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = lesson.content;

    if (!wrapper.querySelector('.mbb-contextualizacao')) {
      const anchor = wrapper.querySelector('.lesson-opening') || wrapper.querySelector('.hero-box');
      if (anchor) anchor.insertAdjacentHTML('afterend', contextHtml(meta));
    }

    wrapper.querySelectorAll('.example-box').forEach(box => {
      if (box.querySelector('.mbb-professor-pensa') || box.querySelector('.mbb-guided-solution')) return;
      const hasMath = box.querySelector('.math,.formula') || /\d/.test(box.textContent || '');
      if (!hasMath) return;
      box.insertAdjacentHTML('beforeend', `<div class="mbb-professor-pensa"><strong>Como um professor pensaria antes de encerrar o exemplo?</strong><p>${meta.recognize} ${meta.interpret}</p></div>`);
    });

    wrapper.querySelectorAll('details.solution').forEach(details => {
      if (details.querySelector('.mbb-guided-solution')) return;
      const summary = details.querySelector(':scope > summary');
      if (!summary) return;
      const nodes = [...details.childNodes].filter(node => node !== summary);
      const original = nodes.map(nodeHtml).join('').trim() || '<p>Retome os dados do enunciado e refaça a conta com calma.</p>';
      nodes.forEach(node => node.remove());
      summary.insertAdjacentHTML('afterend', guidedStaticSolution(meta, original));
      summary.textContent = 'Ver resolução comentada';
    });

    wrapper.querySelectorAll('.task-box').forEach(task => {
      if (task.querySelector('.mbb-pause-question')) return;
      if (!task.querySelector('details.solution')) return;
      const heading = task.querySelector('h4');
      if (heading) heading.insertAdjacentHTML('afterend', `<div class="mbb-pause-question"><strong>Antes de calcular:</strong> ${meta.question}</div>`);
    });

    lesson.content = wrapper.innerHTML;
  }

  Object.entries(guide).forEach(([id,meta]) => enrichLesson(get(id),meta));
})();
