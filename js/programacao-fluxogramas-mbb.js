(() => {
  'use strict';

  if (typeof pensarSteps === 'undefined') return;

  const painelSimbolos = `
    <div class="flowchart-legend">
      <div class="flowchart-symbol">
        <strong>Terminal — início e fim</strong>
        <svg viewBox="0 0 260 100" role="img" aria-label="Símbolo terminal de início e fim">
          <ellipse class="node terminal" cx="130" cy="50" rx="92" ry="31"></ellipse>
          <text class="node-title" x="130" y="56" text-anchor="middle">INÍCIO / FIM</text>
        </svg>
        <p>Marca onde o fluxo começa ou termina. Todo fluxograma precisa deixar esses pontos claros.</p>
      </div>
      <div class="flowchart-symbol">
        <strong>Entrada / saída</strong>
        <svg viewBox="0 0 260 100" role="img" aria-label="Símbolo de entrada e saída">
          <polygon class="node io" points="58,20 222,20 202,80 38,80"></polygon>
          <text class="node-title" x="130" y="56" text-anchor="middle">LER / MOSTRAR</text>
        </svg>
        <p>Representa dados recebidos ou resultados apresentados: teclado, tela, arquivo, sensor e outros meios.</p>
      </div>
      <div class="flowchart-symbol">
        <strong>Processamento</strong>
        <svg viewBox="0 0 260 100" role="img" aria-label="Símbolo de processamento">
          <rect class="node process" x="42" y="20" width="176" height="60"></rect>
          <text class="node-title" x="130" y="56" text-anchor="middle">CALCULAR</text>
        </svg>
        <p>Representa cálculo, atribuição ou transformação de dados.</p>
      </div>
      <div class="flowchart-symbol">
        <strong>Decisão</strong>
        <svg viewBox="0 0 260 110" role="img" aria-label="Símbolo de decisão">
          <polygon class="node decision" points="130,13 225,55 130,97 35,55"></polygon>
          <text class="node-title" x="130" y="52" text-anchor="middle">CONDIÇÃO?</text>
          <text class="node-text" x="130" y="70" text-anchor="middle">SIM / NÃO</text>
        </svg>
        <p>Faz uma pergunta lógica e cria caminhos diferentes conforme o resultado.</p>
      </div>
      <div class="flowchart-symbol">
        <strong>Seta de fluxo</strong>
        <svg viewBox="0 0 260 100" role="img" aria-label="Seta indicando direção do fluxo">
          <defs><marker id="fcArrowLegend" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a"></path></marker></defs>
          <line class="arrow" x1="45" y1="50" x2="215" y2="50" marker-end="url(#fcArrowLegend)"></line>
          <text class="node-text" x="130" y="31" text-anchor="middle">direção do fluxo</text>
        </svg>
        <p>Liga os símbolos e mostra qual é o próximo passo.</p>
      </div>
      <div class="flowchart-symbol">
        <strong>Conector</strong>
        <svg viewBox="0 0 260 100" role="img" aria-label="Símbolo conector">
          <circle class="node connector" cx="130" cy="50" r="30"></circle>
          <text class="node-title" x="130" y="56" text-anchor="middle">A</text>
        </svg>
        <p>Ajuda a continuar um fluxo extenso sem cruzar muitas linhas. Use apenas quando melhora a leitura.</p>
      </div>
      <div class="flowchart-symbol">
        <strong>Subprocesso</strong>
        <svg viewBox="0 0 260 100" role="img" aria-label="Símbolo de subprocesso">
          <rect class="node subprocess" x="42" y="20" width="176" height="60"></rect>
          <line x1="58" y1="20" x2="58" y2="80" stroke="#0284c7" stroke-width="2.5"></line>
          <line x1="202" y1="20" x2="202" y2="80" stroke="#0284c7" stroke-width="2.5"></line>
          <text class="node-title" x="130" y="56" text-anchor="middle">ROTINA</text>
        </svg>
        <p>Representa uma parte do processo definida separadamente, como uma função ou procedimento.</p>
      </div>
    </div>`;

  const svgSequencial = `
    <div class="flowchart-panel">
      <h4>Fluxograma — venda sequencial na cantina</h4>
      <svg class="flowchart-svg" viewBox="0 0 820 900" role="img" aria-label="Fluxograma sequencial de uma venda na cantina">
        <defs><marker id="fcArrowSeq" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a"></path></marker></defs>
        <ellipse class="node terminal" cx="410" cy="70" rx="95" ry="34"></ellipse>
        <text class="node-title" x="410" y="76" text-anchor="middle">INÍCIO</text>
        <line class="arrow" x1="410" y1="104" x2="410" y2="155" marker-end="url(#fcArrowSeq)"></line>

        <polygon class="node io" points="260,170 590,170 560,245 230,245"></polygon>
        <text class="node-title" x="410" y="201" text-anchor="middle">Ler quantidade e preços</text>
        <text class="node-text" x="410" y="224" text-anchor="middle">dos produtos</text>
        <line class="arrow" x1="410" y1="245" x2="410" y2="300" marker-end="url(#fcArrowSeq)"></line>

        <rect class="node process" x="245" y="315" width="330" height="75"></rect>
        <text class="node-title" x="410" y="346" text-anchor="middle">Calcular valores dos itens</text>
        <text class="node-text" x="410" y="369" text-anchor="middle">e somar o total</text>
        <line class="arrow" x1="410" y1="390" x2="410" y2="445" marker-end="url(#fcArrowSeq)"></line>

        <polygon class="node io" points="280,460 575,460 545,530 250,530"></polygon>
        <text class="node-title" x="410" y="502" text-anchor="middle">Ler valor pago</text>
        <line class="arrow" x1="410" y1="530" x2="410" y2="585" marker-end="url(#fcArrowSeq)"></line>

        <rect class="node process" x="280" y="600" width="260" height="70"></rect>
        <text class="node-title" x="410" y="642" text-anchor="middle">troco = pago − total</text>
        <line class="arrow" x1="410" y1="670" x2="410" y2="725" marker-end="url(#fcArrowSeq)"></line>

        <polygon class="node io" points="250,740 590,740 560,810 220,810"></polygon>
        <text class="node-title" x="410" y="770" text-anchor="middle">Mostrar total e troco</text>
        <line class="arrow" x1="410" y1="810" x2="410" y2="845" marker-end="url(#fcArrowSeq)"></line>

        <ellipse class="node terminal" cx="410" cy="870" rx="95" ry="25"></ellipse>
        <text class="node-title" x="410" y="876" text-anchor="middle">FIM</text>
      </svg>
    </div>`;

  const svgDecisao = `
    <div class="flowchart-panel">
      <h4>Fluxograma — valor pago é suficiente?</h4>
      <svg class="flowchart-svg" viewBox="0 0 920 760" role="img" aria-label="Fluxograma com decisão sobre valor pago na cantina">
        <defs><marker id="fcArrowDec" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a"></path></marker></defs>
        <ellipse class="node terminal" cx="460" cy="60" rx="90" ry="32"></ellipse>
        <text class="node-title" x="460" y="66" text-anchor="middle">INÍCIO</text>
        <line class="arrow" x1="460" y1="92" x2="460" y2="140" marker-end="url(#fcArrowDec)"></line>

        <polygon class="node io" points="310,155 625,155 595,225 280,225"></polygon>
        <text class="node-title" x="455" y="184" text-anchor="middle">Ler total e valor pago</text>
        <line class="arrow" x1="460" y1="225" x2="460" y2="275" marker-end="url(#fcArrowDec)"></line>

        <polygon class="node decision" points="460,290 635,380 460,470 285,380"></polygon>
        <text class="node-title" x="460" y="368" text-anchor="middle">valor pago</text>
        <text class="node-title" x="460" y="391" text-anchor="middle">≥ total?</text>

        <line class="arrow" x1="285" y1="380" x2="175" y2="380" marker-end="url(#fcArrowDec)"></line>
        <text class="branch-label" x="230" y="363" text-anchor="middle">NÃO</text>
        <polygon class="node io" points="40,410 240,410 220,480 20,480"></polygon>
        <text class="node-title" x="130" y="443" text-anchor="middle">Mostrar</text>
        <text class="node-text" x="130" y="464" text-anchor="middle">“valor insuficiente”</text>

        <line class="arrow" x1="635" y1="380" x2="745" y2="380" marker-end="url(#fcArrowDec)"></line>
        <text class="branch-label" x="690" y="363" text-anchor="middle">SIM</text>
        <rect class="node process" x="700" y="410" width="190" height="70"></rect>
        <text class="node-title" x="795" y="442" text-anchor="middle">Calcular troco</text>
        <text class="node-text" x="795" y="463" text-anchor="middle">pago − total</text>
        <line class="arrow" x1="795" y1="480" x2="795" y2="535" marker-end="url(#fcArrowDec)"></line>
        <polygon class="node io" points="705,550 900,550 880,620 685,620"></polygon>
        <text class="node-title" x="792" y="582" text-anchor="middle">Mostrar troco</text>

        <path class="arrow" d="M130 480 L130 670 L460 670" marker-end="url(#fcArrowDec)"></path>
        <path class="arrow" d="M792 620 L792 670 L460 670" marker-end="url(#fcArrowDec)"></path>
        <ellipse class="node terminal" cx="460" cy="700" rx="90" ry="32"></ellipse>
        <text class="node-title" x="460" y="706" text-anchor="middle">FIM</text>
      </svg>
    </div>`;

  const svgRepeticao = `
    <div class="flowchart-panel">
      <h4>Fluxograma — atender vários clientes</h4>
      <svg class="flowchart-svg" viewBox="0 0 920 820" role="img" aria-label="Fluxograma com repetição de atendimentos na cantina">
        <defs><marker id="fcArrowLoop" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a"></path></marker></defs>
        <ellipse class="node terminal" cx="460" cy="60" rx="90" ry="32"></ellipse>
        <text class="node-title" x="460" y="66" text-anchor="middle">INÍCIO</text>
        <line class="arrow" x1="460" y1="92" x2="460" y2="145" marker-end="url(#fcArrowLoop)"></line>

        <polygon class="node io" points="300,160 635,160 605,235 270,235"></polygon>
        <text class="node-title" x="455" y="192" text-anchor="middle">Ler dados da venda</text>
        <text class="node-text" x="455" y="215" text-anchor="middle">e do pagamento</text>
        <line class="arrow" x1="460" y1="235" x2="460" y2="290" marker-end="url(#fcArrowLoop)"></line>

        <rect class="node process" x="285" y="305" width="350" height="75"></rect>
        <text class="node-title" x="460" y="337" text-anchor="middle">Calcular e registrar atendimento</text>
        <text class="node-text" x="460" y="360" text-anchor="middle">total / troco / resultado</text>
        <line class="arrow" x1="460" y1="380" x2="460" y2="435" marker-end="url(#fcArrowLoop)"></line>

        <polygon class="node io" points="310,450 625,450 595,520 280,520"></polygon>
        <text class="node-title" x="455" y="492" text-anchor="middle">Mostrar resultado</text>
        <line class="arrow" x1="460" y1="520" x2="460" y2="565" marker-end="url(#fcArrowLoop)"></line>

        <polygon class="node decision" points="460,580 620,660 460,740 300,660"></polygon>
        <text class="node-title" x="460" y="651" text-anchor="middle">Há outro</text>
        <text class="node-title" x="460" y="674" text-anchor="middle">cliente?</text>

        <path class="arrow" d="M300 660 L130 660 L130 197 L270 197" marker-end="url(#fcArrowLoop)"></path>
        <text class="branch-label" x="225" y="642" text-anchor="middle">SIM — repetir</text>

        <line class="arrow" x1="620" y1="660" x2="745" y2="660" marker-end="url(#fcArrowLoop)"></line>
        <text class="branch-label" x="682" y="642" text-anchor="middle">NÃO</text>
        <ellipse class="node terminal" cx="815" cy="660" rx="75" ry="32"></ellipse>
        <text class="node-title" x="815" y="666" text-anchor="middle">FIM</text>
      </svg>
    </div>`;

  const svgIntegrado = `
    <div class="flowchart-panel">
      <h4>Fluxograma integrado — sequência + decisão + repetição</h4>
      <svg class="flowchart-svg" viewBox="0 0 1040 1220" role="img" aria-label="Fluxograma completo de atendimento da cantina com sequência decisão e repetição">
        <defs><marker id="fcArrowAll" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a"></path></marker></defs>
        <ellipse class="node terminal" cx="520" cy="55" rx="92" ry="32"></ellipse>
        <text class="node-title" x="520" y="61" text-anchor="middle">INÍCIO</text>
        <line class="arrow" x1="520" y1="87" x2="520" y2="130" marker-end="url(#fcArrowAll)"></line>

        <polygon class="node io" points="365,145 700,145 670,220 335,220"></polygon>
        <text class="node-title" x="520" y="176" text-anchor="middle">Ler produtos, quantidades</text>
        <text class="node-text" x="520" y="199" text-anchor="middle">e preços</text>
        <line class="arrow" x1="520" y1="220" x2="520" y2="270" marker-end="url(#fcArrowAll)"></line>

        <rect class="node process" x="355" y="285" width="330" height="75"></rect>
        <text class="node-title" x="520" y="317" text-anchor="middle">Calcular total da compra</text>
        <text class="node-text" x="520" y="340" text-anchor="middle">quantidade × preço → somar</text>
        <line class="arrow" x1="520" y1="360" x2="520" y2="410" marker-end="url(#fcArrowAll)"></line>

        <polygon class="node io" points="395,425 660,425 630,495 365,495"></polygon>
        <text class="node-title" x="520" y="467" text-anchor="middle">Ler valor pago</text>
        <line class="arrow" x1="520" y1="495" x2="520" y2="545" marker-end="url(#fcArrowAll)"></line>

        <polygon class="node decision" points="520,560 700,650 520,740 340,650"></polygon>
        <text class="node-title" x="520" y="637" text-anchor="middle">valor pago</text>
        <text class="node-title" x="520" y="662" text-anchor="middle">≥ total?</text>

        <line class="arrow" x1="340" y1="650" x2="210" y2="650" marker-end="url(#fcArrowAll)"></line>
        <text class="branch-label" x="275" y="632" text-anchor="middle">NÃO</text>
        <polygon class="node io" points="45,680 250,680 230,755 25,755"></polygon>
        <text class="node-title" x="137" y="712" text-anchor="middle">Mostrar</text>
        <text class="node-text" x="137" y="735" text-anchor="middle">valor insuficiente</text>

        <line class="arrow" x1="700" y1="650" x2="825" y2="650" marker-end="url(#fcArrowAll)"></line>
        <text class="branch-label" x="762" y="632" text-anchor="middle">SIM</text>
        <rect class="node process" x="790" y="680" width="210" height="75"></rect>
        <text class="node-title" x="895" y="712" text-anchor="middle">Calcular troco</text>
        <text class="node-text" x="895" y="735" text-anchor="middle">pago − total</text>
        <line class="arrow" x1="895" y1="755" x2="895" y2="800" marker-end="url(#fcArrowAll)"></line>
        <polygon class="node io" points="805,815 1005,815 985,885 785,885"></polygon>
        <text class="node-title" x="895" y="857" text-anchor="middle">Mostrar troco</text>

        <path class="arrow" d="M137 755 L137 925 L520 925" marker-end="url(#fcArrowAll)"></path>
        <path class="arrow" d="M895 885 L895 925 L520 925" marker-end="url(#fcArrowAll)"></path>

        <polygon class="node decision" points="520,945 690,1030 520,1115 350,1030"></polygon>
        <text class="node-title" x="520" y="1018" text-anchor="middle">Há outro</text>
        <text class="node-title" x="520" y="1042" text-anchor="middle">cliente?</text>

        <path class="arrow" d="M350 1030 L170 1030 L170 182 L335 182" marker-end="url(#fcArrowAll)"></path>
        <text class="branch-label" x="260" y="1012" text-anchor="middle">SIM — repetir</text>

        <line class="arrow" x1="690" y1="1030" x2="815" y2="1030" marker-end="url(#fcArrowAll)"></line>
        <text class="branch-label" x="752" y="1012" text-anchor="middle">NÃO</text>
        <ellipse class="node terminal" cx="895" cy="1030" rx="80" ry="32"></ellipse>
        <text class="node-title" x="895" y="1036" text-anchor="middle">FIM</text>
      </svg>
    </div>`;

  const fluxogramaSteps = [
    {
      id: 40,
      menu: '4 Por que fluxograma?',
      title: 'Por que desenhar uma solução antes de programar?',
      objective: 'Entender por que o fluxograma existe e quando a representação visual ajuda a compreender um algoritmo.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Entender</span>
          <h3>A lógica da cantina começou a crescer</h3>
          <p>No início bastava calcular total e troco. Depois surgiram situações novas: valor insuficiente, vários clientes e diferentes caminhos. Quando a solução cresce, uma lista de passos pode ficar difícil de acompanhar.</p>
        </div>
        <p>O fluxograma resolve um problema de comunicação: ele transforma a sequência de ações em um <strong>mapa visual do caminho</strong>. Assim fica mais fácil enxergar onde o processo começa, quais dados entram, o que é calculado, onde existem escolhas, quando algo se repete e onde o processo termina.</p>
        <div class="concept-box"><strong>Fluxograma</strong> é uma representação gráfica de um algoritmo ou processo. Os símbolos têm significados convencionais e as setas mostram a ordem do fluxo.</div>
        <div class="flowchart-reading">
          <div><strong>Sequência</strong>Um passo acontece depois do outro.</div>
          <div><strong>Decisão</strong>Uma condição cria caminhos diferentes.</div>
          <div><strong>Repetição</strong>O fluxo volta a uma etapa anterior enquanto houver motivo para continuar.</div>
        </div>
        <div class="task-box"><h4>Pense antes do desenho</h4><p>Imagine a fila da cantina. O que acontece sempre? O que depende de uma resposta? O que pode acontecer novamente para outro cliente? Essas três perguntas já antecipam sequência, decisão e repetição.</p></div>`
    },
    {
      id: 41,
      menu: '5 Símbolos',
      title: 'Os símbolos tradicionais e o que cada um significa',
      objective: 'Reconhecer os símbolos fundamentais de fluxograma e escolher o símbolo adequado para cada tipo de ação.',
      content: `
        <div class="hero-box"><span class="part-badge">Reconhecer</span><h3>O desenho não é livre: cada forma comunica uma função</h3><p>Usar símbolos convencionais permite que outra pessoa leia o fluxo sem depender de uma legenda inventada a cada desenho.</p></div>
        ${painelSimbolos}
        <div class="flowchart-rule"><strong>Para começar, domine quatro símbolos:</strong> terminal, entrada/saída, processamento e decisão. Setas ligam tudo. Conectores e subprocessos entram quando o fluxo fica maior.</div>
        <div class="task-box"><h4>Escolha o símbolo</h4><p>Qual símbolo você usaria para: a) ler o valor pago; b) calcular o troco; c) perguntar se o valor é suficiente; d) marcar o fim do atendimento? Responda antes de continuar.</p></div>`
    },
    {
      id: 42,
      menu: '6 Como ler',
      title: 'Como ler um fluxograma sem se perder',
      objective: 'Seguir as setas e interpretar entradas, processos, decisões e saídas na ordem correta.',
      content: `
        <div class="hero-box"><span class="part-badge">Ler</span><h3>Não olhe o desenho inteiro de uma vez</h3><p>Comece pelo terminal de início e siga uma seta por vez. Em decisões, escolha um caminho e acompanhe até encontrar outra decisão, uma repetição ou o fim.</p></div>
        <ol class="flowchart-check">
          <li>Encontre o <strong>INÍCIO</strong>.</li>
          <li>Siga a primeira seta e identifique se o passo recebe dados, processa ou mostra algo.</li>
          <li>Ao chegar a um losango, leia a condição como uma pergunta.</li>
          <li>Siga separadamente o caminho SIM e o caminho NÃO.</li>
          <li>Se uma seta voltar para um ponto anterior, existe repetição.</li>
          <li>Confirme que todos os caminhos válidos conseguem chegar a um fim ou voltar de modo intencional.</li>
        </ol>
        <div class="concept-box"><strong>Ler um fluxograma é simular o algoritmo.</strong> Você acompanha o caminho como se fosse o computador executando cada etapa.</div>
        <div class="task-box"><h4>Faça mentalmente</h4><p>Na cantina, suponha total de R$ 21 e pagamento de R$ 30. Qual caminho uma decisão “valor pago ≥ total?” deve seguir? E se o pagamento for R$ 15?</p></div>`
    },
    {
      id: 43,
      menu: '7 Sequencial',
      title: 'Fluxo sequencial: quando tudo acontece em ordem',
      objective: 'Construir e interpretar um fluxo sem desvios, em que cada passo leva diretamente ao próximo.',
      content: `
        <div class="hero-box"><span class="flowchart-badge">Sequência</span><h3>Primeiro, o caso mais simples</h3><p>A venda tem dados conhecidos e o pagamento é suficiente. O algoritmo apenas recebe, calcula e mostra. Nenhuma escolha muda o caminho.</p></div>
        ${svgSequencial}
        <h3>Leia o desenho</h3>
        <p>Os paralelogramos representam dados que entram ou resultados que saem. Os retângulos representam cálculos. As setas formam uma única trilha do início ao fim.</p>
        <div class="concept-box"><strong>Estrutura sequencial:</strong> cada instrução é executada uma vez, na ordem em que aparece.</div>
        <div class="task-box"><h4>Transfira</h4><p>Desenhe no papel um fluxograma sequencial para: ler duas notas → calcular a média → mostrar a média. Use terminal, entrada/saída, processamento e setas.</p></div>`
    },
    {
      id: 44,
      menu: '8 Decisão',
      title: 'Fluxo com decisão: quando o caminho depende de uma condição',
      objective: 'Usar o losango para representar uma pergunta lógica e acompanhar corretamente os caminhos SIM e NÃO.',
      content: `
        <div class="hero-box"><span class="flowchart-badge">Decisão</span><h3>A vida real introduziu uma exceção</h3><p>Não podemos calcular troco se o cliente entregou menos que o total. Agora o algoritmo precisa perguntar antes de agir.</p></div>
        ${svgDecisao}
        <h3>O papel do losango</h3>
        <p>O losango contém uma condição que pode ser respondida de maneira lógica. Cada saída deve estar identificada. Neste exemplo, o caminho SIM calcula o troco; o caminho NÃO informa que o valor é insuficiente.</p>
        <div class="danger-box"><strong>Erro comum:</strong> desenhar um losango e continuar com apenas uma saída. Se existe decisão, os resultados possíveis precisam estar representados.</div>
        <div class="task-box"><h4>Teste os caminhos</h4><p>Faça dois testes: total R$ 30 e pagamento R$ 50; depois total R$ 30 e pagamento R$ 20. Percorra o fluxograma com o dedo e diga o resultado de cada caso.</p></div>`
    },
    {
      id: 45,
      menu: '9 Repetição',
      title: 'Fluxo com repetição: quando uma parte precisa acontecer novamente',
      objective: 'Identificar o retorno do fluxo e compreender como uma decisão controla a continuidade de uma repetição.',
      content: `
        <div class="hero-box"><span class="flowchart-badge">Repetição</span><h3>A cantina não atende um único cliente</h3><p>Depois de terminar uma venda, o processo precisa decidir se começa outro atendimento ou se encerra.</p></div>
        ${svgRepeticao}
        <h3>Onde está a repetição?</h3>
        <p>A repetição não é um símbolo isolado. Ela aparece porque uma das setas sai da decisão e <strong>volta</strong> para uma etapa anterior. O caminho SIM retorna ao início do atendimento; o caminho NÃO encerra.</p>
        <div class="concept-box"><strong>Laço:</strong> conjunto de etapas que pode ser executado várias vezes até que uma condição determine a saída.</div>
        <div class="danger-box"><strong>Cuidado com repetição infinita:</strong> se o fluxo nunca puder alcançar o caminho de saída, o processo não termina.</div>
        <div class="task-box"><h4>Preveja</h4><p>Se forem atendidos três clientes, quantas vezes o bloco “Ler dados da venda” será percorrido? Em que momento o caminho NÃO deve ser escolhido?</p></div>`
    },
    {
      id: 46,
      menu: '10 Tudo junto',
      title: 'Sequência, decisão e repetição no mesmo fluxograma',
      objective: 'Integrar as três estruturas fundamentais em um único fluxo coerente e acompanhar caminhos diferentes dentro do mesmo problema.',
      content: `
        <div class="hero-box"><span class="part-badge">Integrar</span><h3>Agora o fluxo representa o atendimento real</h3><p>A venda possui partes sequenciais, uma decisão sobre o pagamento e uma repetição para atender novos clientes. As estruturas não competem entre si: cada uma resolve uma necessidade diferente.</p></div>
        ${svgIntegrado}
        <div class="flowchart-reading">
          <div><strong>Sequência</strong>Ler produtos → calcular total → ler pagamento.</div>
          <div><strong>Decisão</strong>O valor pago é suficiente?</div>
          <div><strong>Repetição</strong>Há outro cliente? Se sim, voltar ao início do atendimento.</div>
        </div>
        <div class="task-box"><h4>Simule três cenários</h4><p>1) pagamento suficiente e não há outro cliente; 2) pagamento insuficiente e há outro cliente; 3) pagamento suficiente, há outro cliente e a segunda venda também é suficiente. Siga as setas e descreva o caminho de cada caso.</p></div>`
    },
    {
      id: 47,
      menu: '11 Como construir',
      title: 'Como criar seu próprio fluxograma',
      objective: 'Transformar um problema em fluxograma seguindo uma sequência de construção e verificação.',
      content: `
        <div class="hero-box"><span class="part-badge">Construir</span><h3>Não comece escolhendo formas</h3><p>O desenho vem depois do entendimento. Primeiro organize a solução; depois represente cada parte com o símbolo adequado.</p></div>
        <ol class="flowchart-check">
          <li><strong>Entenda o problema:</strong> quem precisa da solução e qual resultado espera?</li>
          <li><strong>Saber:</strong> quais dados precisam entrar?</li>
          <li><strong>Fazer:</strong> quais cálculos, comparações ou transformações acontecem?</li>
          <li><strong>Responder:</strong> quais resultados devem aparecer?</li>
          <li><strong>Escreva os passos:</strong> coloque a solução em ordem antes de desenhar.</li>
          <li><strong>Marque decisões:</strong> transforme perguntas lógicas em losangos.</li>
          <li><strong>Marque repetições:</strong> identifique de onde o fluxo volta e qual condição permite sair.</li>
          <li><strong>Escolha símbolos e ligue com setas.</strong></li>
          <li><strong>Teste o desenho:</strong> percorra casos normais, limites e caminhos alternativos.</li>
        </ol>
        <div class="flowchart-rule"><strong>Teste MbB:</strong> se outra pessoa consegue seguir seu fluxograma sem você explicar oralmente o que quis dizer, a representação está cumprindo sua função.</div>`
    },
    {
      id: 48,
      menu: '12 Pratique',
      title: 'Pratique do simples ao integrado',
      objective: 'Consolidar a leitura e a construção de fluxogramas com atividades progressivas e transferência para novos problemas.',
      content: `
        <div class="hero-box"><span class="part-badge">Aplicar</span><h3>Agora o desenho precisa ser seu</h3><p>Comece por situações curtas e só depois combine estruturas. O objetivo não é desenhar bonito: é representar corretamente o raciocínio.</p></div>
        <h3>Nível 1 — símbolos</h3>
        <div class="task-box"><p>Associe cada ação ao símbolo correto: iniciar; ler idade; calcular média; idade ≥ 18?; mostrar resultado; terminar.</p></div>
        <h3>Nível 2 — sequência</h3>
        <div class="task-box"><p>Crie um fluxograma que leia preço e quantidade de um produto, calcule o total e mostre o valor da compra.</p></div>
        <h3>Nível 3 — decisão</h3>
        <div class="task-box"><p>Leia uma nota. Se for maior ou igual a 6, mostre “Aprovado”; caso contrário, mostre “Recuperação”.</p></div>
        <h3>Nível 4 — repetição</h3>
        <div class="task-box"><p>Represente um processo que registra a temperatura de uma sala e pergunta se deseja fazer uma nova medição. Enquanto a resposta for SIM, repita.</p></div>
        <h3>Nível 5 — integrador</h3>
        <div class="task-box"><p>Um estacionamento recebe tipo de veículo e horas, calcula o valor, verifica se o pagamento é suficiente, mostra o resultado e pergunta se existe outro atendimento. Desenhe o fluxo completo usando sequência, decisão e repetição.</p></div>
        <div class="concept-box"><strong>Você dominou esta etapa quando consegue:</strong> reconhecer os símbolos, ler um fluxo, explicar cada caminho e construir um fluxograma para um problema novo sem receber o desenho pronto.</div>`
    }
  ];

  const fluxIndex = pensarSteps.findIndex(step => /Fluxograma/i.test(step.menu) || /Fluxograma/i.test(step.title));
  if (fluxIndex >= 0) {
    pensarSteps.splice(fluxIndex, 1, ...fluxogramaSteps);
  }

  const testeMesa = pensarSteps.find(step => /Teste de mesa/i.test(step.menu));
  if (testeMesa) testeMesa.menu = '13 Teste de mesa';
  const linguagem = pensarSteps.find(step => /Linguagem e ambiente/i.test(step.menu));
  if (linguagem) linguagem.menu = '14 Linguagem e ambiente';

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;

  function resetLearningPosition() {
    const lesson = document.getElementById('lesson');
    if (lesson) lesson.scrollTop = 0;
    if (window.matchMedia('(max-width: 1050px)').matches) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }

  document.addEventListener('click', event => {
    const control = event.target.closest('.module-btn,.nav-btn,#prevStep,#nextStep');
    if (!control) return;
    setTimeout(resetLearningPosition, 0);
  }, true);

  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
    resetLearningPosition();
  }
})();
