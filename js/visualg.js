const steps=[
{id:0,menu:'Intro',title:'Como usar esta apostila',objective:'Aprender VisuAlg do zero, copiando, executando e observando a saída.',intro:true},
{id:1,menu:'1 Lógica',title:'1 — Conceitos de Lógica e Algoritmos',objective:'Compreender lógica e algoritmo antes de programar.',theoryPage:true,content:`<div class="theory-page"><div class="theory-hero"><h3>Página teórica — Lógica e Algoritmos</h3><p>Esta primeira etapa é somente conceitual. O aluno ainda não programa: aprende a pensar, organizar passos, identificar entrada, processamento e saída, e resolver problemas simples no papel.</p></div><h3>Lógica e algoritmos</h3><p><strong>Lógica</strong> é organizar o pensamento de forma coerente para resolver um problema. Em programação, isso significa pensar em uma sequência de ações que faça sentido.</p><p><strong>Algoritmo</strong> é uma sequência finita, ordenada e clara de passos para resolver uma tarefa.</p><div class="intro-grid"><div class="intro-box"><strong>Sequência</strong><br>Os passos precisam estar em uma ordem correta.</div><div class="intro-box"><strong>Clareza</strong><br>Cada instrução deve ser objetiva e sem ambiguidade.</div><div class="intro-box"><strong>Fim definido</strong><br>O algoritmo precisa terminar em algum momento.</div></div><h4>Exemplo 1 — Algoritmo do dia a dia</h4><div class="example-box"><strong>Problema:</strong> preparar um café simples.<ol><li>Pegar uma xícara.</li><li>Colocar café.</li><li>Aquecer a água.</li><li>Colocar a água na xícara.</li><li>Misturar.</li><li>Servir.</li></ol></div><h4>Exemplo 2 — Melhorando a lógica</h4><p>O algoritmo anterior funciona, mas pode ser mais claro se explicar quantidades e condições.</p><div class="example-box"><ol><li>Pegar uma xícara limpa.</li><li>Colocar uma colher de café solúvel.</li><li>Aquecer 200 ml de água.</li><li>Se quiser açúcar, colocar açúcar.</li><li>Misturar até dissolver.</li><li>Servir.</li></ol></div><h4>Conceitos importantes</h4><ul><li><strong>Entrada:</strong> informação necessária para resolver o problema.</li><li><strong>Processamento:</strong> ação feita com os dados.</li><li><strong>Saída:</strong> resultado apresentado.</li></ul><div class="example-box"><strong>Exemplo:</strong> calcular a média de duas notas.<br><br><strong>Entrada:</strong> nota 1 e nota 2.<br><strong>Processamento:</strong> somar as notas e dividir por 2.<br><strong>Saída:</strong> média final.</div><div class="theory-two"><div class="example-box"><strong>Exemplo prático sem programação:</strong><br>Problema: decidir se o aluno foi aprovado.<br><br>Entrada: nota final.<br>Processamento: verificar se a nota é maior ou igual a 6.<br>Saída: aprovado ou recuperação.</div><div class="example-box"><strong>Teste de lógica:</strong><br>Se a nota for 8, a saída é aprovado.<br>Se a nota for 5, a saída é recuperação.<br>Se a nota for 6, a saída é aprovado.</div></div><div class="exercise-box"><strong>Exercício 1:</strong> escreva, em linguagem comum, um algoritmo para escovar os dentes com pelo menos 6 passos.<br><br><strong>Exercício 2:</strong> identifique entrada, processamento e saída em um algoritmo para calcular o preço total de uma compra.<br><br><strong>Exercício 3:</strong> crie um algoritmo, em português comum, para decidir se uma pessoa pode entrar no cinema usando idade mínima de 12 anos.</div></div>`},
{id:2,menu:'2 Fluxo',title:'2 — Construção de Fluxogramas',objective:'Compreender símbolos, fluxo, sequência, decisão e repetição antes de programar.',theoryPage:true,content:`<div class="theory-page flowchart-page">
  <div class="theory-hero">
    <h3>Página teórica — Fluxogramas</h3>
    <p>Fluxograma é o desenho da lógica de um algoritmo. Ele mostra, em ordem, onde o processo começa, quais dados entram, quais ações são feitas, quais decisões são tomadas, quando ocorre repetição e onde o processo termina.</p>
  </div>

  <h3>1. O que um fluxograma precisa mostrar?</h3>
  <p>Um fluxograma de algoritmo deve deixar claro o caminho completo da solução. Para isso, ele normalmente contém <strong>início</strong>, <strong>entrada de dados</strong>, <strong>processamento</strong>, <strong>saída</strong>, <strong>decisão</strong> e, quando necessário, <strong>repetição</strong>. As setas indicam a direção do raciocínio.</p>

  <div class="intro-grid">
    <div class="intro-box"><strong>Entrada</strong><br>Dados recebidos do usuário, como nome, idade, nota ou preço.</div>
    <div class="intro-box"><strong>Processamento</strong><br>Cálculos ou ações feitas com os dados, como média, soma ou contador.</div>
    <div class="intro-box"><strong>Saída</strong><br>Resultado exibido ao usuário, como mensagem, valor calculado ou classificação.</div>
  </div>

  <h3>2. Símbolos básicos usados em fluxogramas</h3>
  <p>Os símbolos abaixo são os mais usados em fluxogramas de programação. Eles seguem a convenção comum: oval para início/fim, paralelogramo para entrada/saída, retângulo para processamento, losango para decisão, círculo para conector e setas para fluxo.</p>

  <div class="example-box svg-box">
    <svg viewBox="0 0 1120 520" width="100%" height="520" role="img" aria-label="Símbolos básicos de fluxograma">
      <defs>
        <marker id="setaLegenda" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" />
        </marker>
      </defs>
      <rect x="20" y="20" width="1080" height="480" rx="18" fill="#f8fbff" stroke="#d6e0ee"/>

      <rect x="70" y="70" width="190" height="70" rx="35" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="165" y="101" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Terminal</text>
      <text x="165" y="126" text-anchor="middle" font-size="14" fill="#334155">Início ou fim</text>

      <polygon points="365,70 595,70 555,140 325,140" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="460" y="101" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Entrada/Saída</text>
      <text x="460" y="126" text-anchor="middle" font-size="14" fill="#334155">Ler ou mostrar dados</text>

      <rect x="720" y="70" width="220" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="830" y="101" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Processamento</text>
      <text x="830" y="126" text-anchor="middle" font-size="14" fill="#334155">Cálculo ou atribuição</text>

      <polygon points="170,220 270,285 170,350 70,285" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="170" y="280" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Decisão</text>
      <text x="170" y="305" text-anchor="middle" font-size="14" fill="#334155">Sim / Não</text>

      <line x1="340" y1="285" x2="540" y2="285" stroke="#1e3a8a" stroke-width="5" marker-end="url(#setaLegenda)"/>
      <text x="440" y="260" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Seta de fluxo</text>
      <text x="440" y="325" text-anchor="middle" font-size="14" fill="#334155">Mostra a direção dos passos</text>

      <circle cx="675" cy="285" r="45" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
      <text x="675" y="281" text-anchor="middle" font-size="17" font-weight="800" fill="#0f172a">Conector</text>
      <text x="675" y="305" text-anchor="middle" font-size="13" fill="#334155">continuação</text>

      <path d="M820 245 h210 v85 h-210 z" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
      <line x1="840" y1="245" x2="840" y2="330" stroke="#0284c7" stroke-width="3"/>
      <line x1="1010" y1="245" x2="1010" y2="330" stroke="#0284c7" stroke-width="3"/>
      <text x="925" y="280" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Sub-rotina</text>
      <text x="925" y="306" text-anchor="middle" font-size="14" fill="#334155">processo separado</text>

      <rect x="70" y="405" width="970" height="54" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="555" y="438" text-anchor="middle" font-size="17" fill="#0f172a">Regra prática: todo fluxograma deve ter começo, fim e setas conectando todos os caminhos possíveis.</text>
    </svg>
  </div>

  <h3>3. Exemplo completo — estrutura sequencial</h3>
  <p>Na estrutura sequencial, os passos acontecem um depois do outro. Exemplo: ler duas notas, calcular a média e mostrar o resultado.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1000 680" width="100%" height="680" role="img" aria-label="Fluxograma sequencial para calcular média de duas notas">
      <defs><marker id="seqSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="950" height="640" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="500" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Calcular média de duas notas</text>

      <rect x="400" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="500" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="500" y1="150" x2="500" y2="195" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <polygon points="380,200 650,200 620,270 350,270" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="500" y="230" text-anchor="middle" font-size="17" font-weight="800">Entrada</text>
      <text x="500" y="253" text-anchor="middle" font-size="15">Ler nota1 e nota2</text>
      <line x1="500" y1="270" x2="500" y2="315" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <rect x="345" y="320" width="310" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="500" y="350" text-anchor="middle" font-size="17" font-weight="800">Processamento</text>
      <text x="500" y="374" text-anchor="middle" font-size="15">media ← (nota1 + nota2) / 2</text>
      <line x1="500" y1="390" x2="500" y2="435" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <polygon points="380,440 650,440 620,510 350,510" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="500" y="470" text-anchor="middle" font-size="17" font-weight="800">Saída</text>
      <text x="500" y="493" text-anchor="middle" font-size="15">Mostrar media</text>
      <line x1="500" y1="510" x2="500" y2="555" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <rect x="400" y="560" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="500" y="597" text-anchor="middle" font-size="18" font-weight="800">Fim</text>
    </svg>
  </div>

  <h3>4. Exemplo completo — estrutura de decisão</h3>
  <p>Na decisão, o algoritmo faz uma pergunta lógica. O caminho muda conforme a resposta: verdadeiro/falso, sim/não.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1050 760" width="100%" height="760" role="img" aria-label="Fluxograma de decisão para maioridade">
      <defs><marker id="decSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="1000" height="720" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="525" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Verificar maioridade</text>

      <rect x="425" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="525" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="525" y1="150" x2="525" y2="195" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>

      <polygon points="405,200 675,200 645,270 375,270" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="525" y="230" text-anchor="middle" font-size="17" font-weight="800">Entrada</text>
      <text x="525" y="253" text-anchor="middle" font-size="15">Ler idade</text>
      <line x1="525" y1="270" x2="525" y2="325" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>

      <polygon points="525,330 650,410 525,490 400,410" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="525" y="400" text-anchor="middle" font-size="17" font-weight="900">idade &gt;= 18?</text>
      <text x="525" y="425" text-anchor="middle" font-size="14">decisão</text>

      <line x1="400" y1="410" x2="230" y2="410" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <text x="310" y="390" font-size="16" font-weight="900" fill="#14532d">Sim</text>
      <polygon points="95,375 230,375 205,445 70,445" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="150" y="405" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="150" y="428" text-anchor="middle" font-size="14">Maior de idade</text>

      <line x1="650" y1="410" x2="820" y2="410" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <text x="730" y="390" font-size="16" font-weight="900" fill="#7f1d1d">Não</text>
      <polygon points="845,375 985,375 960,445 820,445" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="902" y="405" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="902" y="428" text-anchor="middle" font-size="14">Menor de idade</text>

      <path d="M150 445 V610 H525" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <path d="M902 445 V610 H625" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <rect x="425" y="580" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="525" y="617" text-anchor="middle" font-size="18" font-weight="800">Fim</text>
    </svg>
  </div>

  <h3>5. Exemplo completo — estrutura de repetição</h3>
  <p>Na repetição, uma parte do algoritmo volta a ser executada enquanto uma condição for verdadeira. O fluxograma precisa mostrar claramente o ponto de retorno.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1100 850" width="100%" height="850" role="img" aria-label="Fluxograma de repetição para mostrar números de 1 a 10">
      <defs><marker id="repSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="1050" height="810" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="550" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Mostrar os números de 1 até 10</text>

      <rect x="450" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="550" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="550" y1="150" x2="550" y2="195" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>

      <rect x="405" y="200" width="290" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="550" y="230" text-anchor="middle" font-size="17" font-weight="800">Processamento</text>
      <text x="550" y="253" text-anchor="middle" font-size="15">contador ← 1</text>
      <line x1="550" y1="270" x2="550" y2="325" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>

      <polygon points="550,330 690,420 550,510 410,420" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="550" y="410" text-anchor="middle" font-size="17" font-weight="900">contador &lt;= 10?</text>
      <text x="550" y="435" text-anchor="middle" font-size="14">condição do laço</text>

      <line x1="410" y1="420" x2="250" y2="420" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <text x="325" y="397" font-size="16" font-weight="900" fill="#14532d">Sim</text>
      <polygon points="105,385 250,385 225,455 80,455" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="165" y="415" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="165" y="438" text-anchor="middle" font-size="14">Mostrar contador</text>

      <line x1="165" y1="455" x2="165" y2="555" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <rect x="60" y="560" width="210" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="165" y="590" text-anchor="middle" font-size="16" font-weight="800">Processamento</text>
      <text x="165" y="613" text-anchor="middle" font-size="14">contador ← contador + 1</text>

      <path d="M270 595 H330 V235 H405" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <text x="310" y="575" font-size="15" font-weight="900" fill="#1e3a8a">volta para testar de novo</text>

      <line x1="690" y1="420" x2="840" y2="420" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <text x="760" y="397" font-size="16" font-weight="900" fill="#7f1d1d">Não</text>
      <rect x="840" y="390" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="940" y="427" text-anchor="middle" font-size="18" font-weight="800">Fim</text>

      <rect x="385" y="690" width="650" height="70" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="710" y="718" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">Leitura do fluxo</text>
      <text x="710" y="744" text-anchor="middle" font-size="15" fill="#334155">Enquanto contador for menor ou igual a 10, mostra o número, soma 1 e volta para a decisão.</text>
    </svg>
  </div>

  <h3>6. Exemplo completo — repetição com entrada, decisão, processamento e saída</h3>
  <p>Este exemplo mostra uma validação: o usuário deve digitar uma nota entre 0 e 10. Se digitar valor inválido, o fluxograma volta para a entrada.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1100 820" width="100%" height="820" role="img" aria-label="Fluxograma de validação de nota entre zero e dez">
      <defs><marker id="valSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="1050" height="780" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="550" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Validar uma nota entre 0 e 10</text>

      <rect x="450" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="550" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="550" y1="150" x2="550" y2="205" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>

      <polygon points="405,210 715,210 675,285 365,285" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="550" y="242" text-anchor="middle" font-size="17" font-weight="800">Entrada</text>
      <text x="550" y="266" text-anchor="middle" font-size="15">Ler nota</text>
      <line x1="550" y1="285" x2="550" y2="340" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>

      <polygon points="550,345 715,445 550,545 385,445" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="550" y="435" text-anchor="middle" font-size="17" font-weight="900">nota &gt;= 0</text>
      <text x="550" y="458" text-anchor="middle" font-size="17" font-weight="900">e nota &lt;= 10?</text>

      <line x1="715" y1="445" x2="860" y2="445" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>
      <text x="780" y="422" font-size="16" font-weight="900" fill="#14532d">Sim</text>
      <polygon points="880,410 1040,410 1010,480 850,480" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="945" y="440" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="945" y="463" text-anchor="middle" font-size="14">Nota válida</text>
      <line x1="945" y1="480" x2="945" y2="620" stroke="#1e3a8a" stroke-width="4"/>
      <line x1="945" y1="620" x2="650" y2="620" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>

      <line x1="385" y1="445" x2="225" y2="445" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>
      <text x="300" y="422" font-size="16" font-weight="900" fill="#7f1d1d">Não</text>
      <polygon points="75,410 225,410 195,480 45,480" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="135" y="440" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="135" y="463" text-anchor="middle" font-size="14">Nota inválida</text>
      <path d="M135 410 V250 H365" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>
      <text x="150" y="230" font-size="15" font-weight="900" fill="#1e3a8a">volta para digitar novamente</text>

      <rect x="450" y="590" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="550" y="627" text-anchor="middle" font-size="18" font-weight="800">Fim</text>
    </svg>
  </div>

  <div class="exercise-box">
    <strong>Exercício 1:</strong> desenhe um fluxograma sequencial para ler o preço e a quantidade de um produto, calcular o total e mostrar o total.<br><br>
    <strong>Exercício 2:</strong> desenhe um fluxograma de decisão para ler uma nota e mostrar “Aprovado” se a nota for maior ou igual a 6; caso contrário, mostrar “Reprovado”.<br><br>
    <strong>Exercício 3:</strong> desenhe um fluxograma de repetição para mostrar os números de 1 até 10.<br><br>
    <strong>Exercício 4:</strong> desenhe um fluxograma de validação para ler uma idade. Enquanto a idade for menor que 0, pedir novamente. Ao final, mostrar “idade cadastrada”.
  </div>
</div>`},{id:3,menu:'3 Estrutura',title:'3 — Primeiro Programa no VisuAlg',objective:'Conhecer a estrutura mínima de um algoritmo.',code:`algoritmo "Ola_Mundo"
inicio
   escreval("Olá, mundo!")
   escreval("Meu primeiro programa no VisuAlg.")
fimalgoritmo`,added:`Conceito:
Todo programa no VisuAlg precisa de uma estrutura básica.

Sintaxe:
algoritmo "Nome_Do_Algoritmo"
inicio
   comandos
fimalgoritmo`,out:`Olá, mundo!
Meu primeiro programa no VisuAlg.`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que mostre seu nome, sua turma e uma frase dizendo: "Estou aprendendo lógica de programação".`},
{id:4,menu:'4 Variáveis',title:'4 — Memória, Tipos de Dados e Variáveis',objective:'Guardar dados na memória usando variáveis.',code:`algoritmo "Variaveis_Basicas"
var
   idade: inteiro
   altura: real
   nome: caractere
   aprovado: logico
inicio
   idade <- 15
   altura <- 1.72
   nome <- "Ana"
   aprovado <- verdadeiro

   escreval("Nome: ", nome)
   escreval("Idade: ", idade)
   escreval("Altura: ", altura)
   escreval("Aprovado: ", aprovado)
fimalgoritmo`,added:`Conceito:
Variável é um espaço da memória usado para guardar um valor. Cada variável possui nome e tipo.

Tipos usados:
inteiro: números sem casas decimais.
real: números com casas decimais.
caractere: textos.
logico: verdadeiro ou falso.

Sintaxe:
var
   nomeDaVariavel: tipo`,out:`Nome: Ana
Idade: 15
Altura: 1.72
Aprovado: VERDADEIRO`,note:`<span class="badge">Exercício</span><br>Crie variáveis para nome de um produto, preço, quantidade e disponível. Atribua valores e mostre tudo na tela.`},
{id:5,menu:'5 Entrada',title:'5 — Entrada, Saída e Conversão Simples',objective:'Ler dados digitados pelo usuário e mostrar respostas.',code:`algoritmo "Entrada_Saida"
var
   nome: caractere
   idade: inteiro
inicio
   escreva("Digite seu nome: ")
   leia(nome)

   escreva("Digite sua idade: ")
   leia(idade)

   escreval("Olá, ", nome, "!")
   escreval("Você tem ", idade, " anos.")
fimalgoritmo`,added:`Conceito:
Entrada é quando o usuário digita dados. Saída é quando o programa mostra informações na tela.

Sintaxe:
escreva("mensagem")
leia(variavel)
escreval("mensagem", variavel)

Diferença:
escreva mantém o cursor na mesma linha.
escreval pula para a próxima linha.`,out:`Digite seu nome: Maria
Digite sua idade: 16
Olá, Maria!
Você tem 16 anos.`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que leia o nome de um aluno e duas notas. Depois, mostre os dados digitados na tela.`},
{id:6,menu:'6 Operadores',title:'6 — Operadores Aritméticos, Relacionais e Lógicos',objective:'Usar cálculos e comparações.',code:`algoritmo "Operadores"
var
   a, b, soma: inteiro
   maior: logico
inicio
   a <- 10
   b <- 5
   soma <- a + b
   maior <- a > b

   escreval("Soma: ", soma)
   escreval("A é maior que B? ", maior)
   escreval("Dobro de A: ", a * 2)
   escreval("Resto de 10 dividido por 3: ", 10 % 3)
fimalgoritmo`,added:`Conceito:
Operadores permitem calcular, comparar e montar condições lógicas.

Aritméticos:
+ soma | - subtração | * multiplicação | / divisão | % resto | ^ potência

Relacionais:
> maior | < menor | >= maior ou igual | <= menor ou igual | = igual | <> diferente

Lógicos:
e: as duas condições precisam ser verdadeiras.
ou: pelo menos uma condição precisa ser verdadeira.
nao: inverte o valor lógico.`,out:`Soma: 15
A é maior que B? VERDADEIRO
Dobro de A: 20
Resto de 10 dividido por 3: 1`,note:`<span class="badge">Exercício</span><br>Leia dois números e mostre: soma, subtração, multiplicação, divisão e se o primeiro é maior que o segundo.`},
{id:7,menu:'7 Verdade',title:'7 — Expressões e Tabela Verdade',objective:'Muitas decisões dependem da combinação de várias condições ao mesmo tempo. Por exemplo, um aluno pode precisar ter nota suficiente e frequência mínima para ser aprovado. As expressões lógicas e as tabelas verdade ajudam a entender como essas condições são avaliadas pelo computador.',code:`algoritmo "Tabela_Verdade"
var
   idade: inteiro
   temCarteira: logico
inicio
   idade <- 20
   temCarteira <- verdadeiro

   escreval("Pode dirigir? ", (idade >= 18) e (temCarteira = verdadeiro))
   escreval("É menor de idade? ", idade < 18)
   escreval("Não tem carteira? ", nao temCarteira)
fimalgoritmo`,added:`Conceito:
Expressões lógicas produzem resultado verdadeiro ou falso. Elas aparecem quando o programa precisa comparar valores e tomar decisões.

Na prática, a tabela verdade ajuda a prever o resultado antes de executar o algoritmo. Isso evita chutes e mostra por que uma condição foi verdadeira ou falsa.

Sintaxe:
(condicao1) e (condicao2)
(condicao1) ou (condicao2)
nao condicao`,out:`Pode dirigir? VERDADEIRO
É menor de idade? FALSO
Não tem carteira? FALSO`,note:`<span class="badge">Exercício</span><br>Crie um algoritmo que informe se uma pessoa pode entrar em um evento: idade maior ou igual a 18 e convite verdadeiro.`},
{id:8,menu:'8 Mesa',title:'8 — Teste de Mesa',objective:'Antes de executar um algoritmo no computador, é importante verificar se ele realmente funciona como esperado. O teste de mesa permite acompanhar passo a passo a execução do programa, identificando erros de lógica e compreendendo melhor seu funcionamento.',code:`algoritmo "Teste_De_Mesa"
var
   x, y, resultado: inteiro
inicio
   x <- 4
   y <- 3
   resultado <- x + y * 2

   escreval("x = ", x)
   escreval("y = ", y)
   escreval("resultado = ", resultado)
fimalgoritmo`,added:`Conceito:
Teste de mesa é simular o algoritmo manualmente antes de executar. Ele mostra o valor das variáveis linha por linha.

Esse recurso é importante porque muitos erros não são de digitação, mas de raciocínio. Antes de culpar o VisuAlg, o aluno confere se a lógica realmente faz sentido.

Como fazer:
1. Liste as variáveis.
2. Execute cada linha mentalmente.
3. Atualize os valores.
4. Confira a saída esperada.`,out:`x = 4
y = 3
resultado = 10`,note:`<span class="badge">Exercício</span><br>Faça o teste de mesa deste cálculo antes de executar: a <- 5; b <- 2; c <- a * b + 3.`},
{id:9,menu:'9 Se',title:'9 — Decisão Simples e Composta',objective:'Entender que nem todo programa segue sempre o mesmo caminho. Nesta etapa, o algoritmo passa a analisar uma condição, como uma nota ou idade, e decide qual mensagem ou ação deve executar.',code:`algoritmo "Aprovacao"
var
   nota: real
inicio
   escreva("Digite a nota: ")
   leia(nota)

   se nota >= 6 entao
      escreval("Aluno aprovado")
   senao
      escreval("Aluno reprovado")
   fimse
fimalgoritmo`,added:`Conceito:
Decisão permite executar comandos diferentes conforme uma condição. É o momento em que o algoritmo deixa de seguir apenas em linha reta e passa a escolher um caminho.

Use decisão simples quando só há uma ação se a condição for verdadeira. Use decisão composta quando também existe uma ação para o caso falso.

Sintaxe:
se condicao entao
   comandos se verdadeiro
senao
   comandos se falso
fimse`,out:`Digite a nota: 7
Aluno aprovado`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que leia a idade e diga se a pessoa é maior ou menor de idade.`},
{id:10,menu:'10 Escolha',title:'10 — Decisão Múltipla',objective:'Algumas situações possuem várias possibilidades de resposta. Nesses casos, utilizar diversas decisões encadeadas pode dificultar a leitura do algoritmo. A estrutura de decisão múltipla torna essas escolhas mais organizadas.',code:`algoritmo "Menu_Operacoes"
var
   opcao: inteiro
inicio
   escreval("1 - Cadastrar")
   escreval("2 - Consultar")
   escreval("3 - Sair")
   escreva("Escolha uma opção: ")
   leia(opcao)

   escolha opcao
      caso 1
         escreval("Cadastro selecionado")
      caso 2
         escreval("Consulta selecionada")
      caso 3
         escreval("Saindo do sistema")
      outrocaso
         escreval("Opção inválida")
   fimescolha
fimalgoritmo`,added:`Conceito:
Decisão múltipla é usada quando existem várias opções possíveis para uma mesma variável. Ela deixa o algoritmo mais organizado do que vários se/senao repetidos.

É muito comum em menus, códigos de produto, formas de pagamento e escolhas numeradas feitas pelo usuário. 

Sintaxe:
escolha variavel
   caso valor1
      comandos
   caso valor2
      comandos
   outrocaso
      comandos
fimescolha`,out:`1 - Cadastrar
2 - Consultar
3 - Sair
Escolha uma opção: 2
Consulta selecionada`,note:`<span class="badge">Exercício</span><br>Crie um menu com três opções de lanche. O usuário escolhe um número e o programa mostra o lanche escolhido.`},
{id:11,menu:'11 Laços',title:'11 — Iteração e Laços',objective:'Muitas tarefas precisam ser executadas várias vezes. Imagine cadastrar 50 alunos ou exibir os números de 1 a 100. As estruturas de repetição permitem que o computador execute a mesma tarefa quantas vezes forem necessárias de forma automática.',code:`algoritmo "Contagem"
var
   i: inteiro
inicio
   para i de 1 ate 5 faca
      escreval("Número: ", i)
   fimpara
fimalgoritmo`,added:`Conceito:
Laço de repetição executa o mesmo bloco várias vezes. Ele evita copiar comandos repetidos e torna o algoritmo mais limpo.

O comando para é indicado quando já sabemos a quantidade de repetições. Para situações em que a repetição depende de uma condição, também existem enquanto e repita.

Sintaxe:
para variavel de inicio ate fim faca
   comandos
fimpara`,out:`Número: 1
Número: 2
Número: 3
Número: 4
Número: 5`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que mostre os números pares de 2 até 20 usando <strong>para</strong> com <strong>passo 2</strong>.`},
{id:12,menu:'12 Funções',title:'12 — Funções Pré-definidas',objective:'Usar funções prontas do VisuAlg.',code:`algoritmo "Funcoes_Predefinidas"
var
   numero: real
inicio
   numero <- -25

   escreval("Valor original: ", numero)
   escreval("Valor absoluto: ", abs(numero))
   escreval("Raiz quadrada de 25: ", raizq(25))
   escreval("Potência 2 elevado a 3: ", exp(2,3))
fimalgoritmo`,added:`Conceito:
Funções pré-definidas são comandos prontos do VisuAlg que retornam um resultado.

Sintaxe geral:
funcao(valor)

Exemplos:
abs(numero): valor absoluto.
raizq(25): raiz quadrada.
exp(2,3): potência, 2 elevado a 3.

Exemplo aplicado:
escreval("Raiz de 25: ", raizq(25))`,out:`Valor original: -25
Valor absoluto: 25
Raiz quadrada de 25: 5
Potência 2 elevado a 3: 8`,note:`<span class="badge">Exercício</span><br>Leia um número e mostre seu valor absoluto e sua raiz quadrada. Use valores positivos para a raiz.`},
{id:13,menu:'13 Modular',title:'13 — Sub-rotinas, Procedimentos e Funções',objective:'À medida que os programas crescem, partes do código acabam sendo reutilizadas várias vezes. Procedimentos e funções ajudam a organizar o algoritmo, evitar repetições e facilitar a manutenção do programa.',code:`algoritmo "Procedimento_Funcao"
var
   n, dobro: inteiro

procedimento linha()
inicio
   escreval("---------------------")
fimprocedimento

funcao calculaDobro(x: inteiro): inteiro
inicio
   retorne x * 2
fimfuncao

inicio
   escreva("Digite um número: ")
   leia(n)

   linha()
   dobro <- calculaDobro(n)
   escreval("Dobro: ", dobro)
   linha()
fimalgoritmo`,added:`Conceito:
Programação modular divide o algoritmo em partes menores. Isso facilita leitura, correção e reaproveitamento de código.

Procedimento executa ações, como mostrar uma linha ou imprimir uma mensagem. Função também executa ações, mas retorna um valor para ser usado pelo programa.

Procedimento:
procedimento nome()
inicio
   comandos
fimprocedimento

Função:
funcao nome(parametro: tipo): tipoRetorno
inicio
   retorne valor
fimfuncao`,out:`Digite um número: 8
---------------------
Dobro: 16
---------------------`,note:`<span class="badge">Exercício</span><br>Crie uma função chamada triplo que receba um número inteiro e retorne esse número multiplicado por 3.`},
{id:14,menu:'14 Vetores',title:'14 — Vetores',objective:'Imagine armazenar as notas de uma sala com dezenas de alunos. Criar uma variável para cada nota seria pouco prático. Os vetores permitem armazenar vários valores relacionados utilizando um único nome e posições numeradas.',code:`algoritmo "Vetor_Notas"
var
   notas: vetor[1..3] de real
   i: inteiro
inicio
   para i de 1 ate 3 faca
      escreva("Digite a nota ", i, ": ")
      leia(notas[i])
   fimpara

   escreval("Notas digitadas:")
   para i de 1 ate 3 faca
      escreval("Nota ", i, ": ", notas[i])
   fimpara
fimalgoritmo`,added:`Conceito:
Vetor guarda vários valores do mesmo tipo usando um único nome e posições numeradas. Ele é útil quando seria trabalhoso criar muitas variáveis separadas.

A posição do vetor funciona como um endereço. Por isso, notas[1], notas[2] e notas[3] são valores diferentes dentro da mesma estrutura.

Sintaxe:
nome: vetor[inicio..fim] de tipo`,out:`Digite a nota 1: 7
Digite a nota 2: 8
Digite a nota 3: 9
Notas digitadas:
Nota 1: 7
Nota 2: 8
Nota 3: 9`,note:`<span class="badge">Exercício</span><br>Crie um vetor com 5 nomes de alunos e depois mostre todos os nomes usando um laço.`},
{id:15,menu:'15 Matrizes',title:'15 — Matrizes',objective:'Algumas informações precisam ser organizadas em linhas e colunas, como uma planilha eletrônica ou um boletim escolar. As matrizes permitem representar esse tipo de estrutura dentro dos algoritmos.',code:`algoritmo "Matriz_2x2"
var
   matriz: vetor[1..2,1..2] de inteiro
   linha, coluna: inteiro
inicio
   para linha de 1 ate 2 faca
      para coluna de 1 ate 2 faca
         escreva("Digite o valor [", linha, ",", coluna, "]: ")
         leia(matriz[linha,coluna])
      fimpara
   fimpara

   escreval("Matriz digitada:")
   para linha de 1 ate 2 faca
      para coluna de 1 ate 2 faca
         escreva(matriz[linha,coluna], " ")
      fimpara
      escreval("")
   fimpara
fimalgoritmo`,added:`Conceito:
Matriz é uma estrutura com linhas e colunas. É como uma tabela, formada por posições identificadas por linha e coluna.

Ela é útil para organizar dados em formato de grade, como notas por bimestre, lugares em uma sala, tabuleiros ou pequenas tabelas numéricas.

Sintaxe:
nome: vetor[linhaInicial..linhaFinal, colunaInicial..colunaFinal] de tipo`,out:`Digite o valor [1,1]: 1
Digite o valor [1,2]: 2
Digite o valor [2,1]: 3
Digite o valor [2,2]: 4
Matriz digitada:
1 2
3 4`,note:`<span class="badge">Exercício</span><br>Crie uma matriz 3x3 de inteiros e mostre todos os valores digitados.`},
{id:16,menu:'16 Teoria',title:'16 — Teoria Final: Ferramentas, Depuração, Versionamento e Boas Práticas',objective:'Revisar conceitos profissionais de desenvolvimento.',theoryPage:true,content:`<div class="theory-page"><div class="theory-hero"><h3>Página teórica final</h3><p>Esta parte não exige programação. O foco é compreender ferramentas, erros, depuração, modularização, versionamento e boas práticas profissionais.</p></div><h3>Teoria final com exemplos</h3><h4>1. IDE e ferramentas</h4><p><strong>IDE</strong> é o ambiente usado para escrever, executar, testar e corrigir programas. O VisuAlg é uma ferramenta didática para aprender lógica usando algoritmos.</p><div class="example-box"><strong>Exemplo:</strong> o aluno escreve o algoritmo, executa, observa a saída e corrige erros de digitação ou de lógica.</div><h4>2. Editor de código</h4><p>É a área onde o programador digita o código. Bons editores ajudam com organização, cores e identificação de erros.</p><ul><li><strong>Coloração de sintaxe:</strong> palavras como <code>algoritmo</code>, <code>var</code>, <code>inicio</code> e <code>fimse</code> aparecem destacadas.</li><li><strong>Marcas de erro:</strong> indicam problemas como palavra escrita errada ou comando incompleto.</li><li><strong>Navegação:</strong> permite localizar partes do programa com facilidade.</li></ul><h4>3. Compilação, execução e distribuição</h4><p>Em linguagens profissionais, o código pode passar por compilação, empacotamento e distribuição. No VisuAlg, o foco é executar o algoritmo para testar a lógica.</p><div class="example-box"><strong>Exemplo conceitual:</strong> código-fonte é o que o programador escreve; código executável é o programa pronto para rodar em uma máquina.</div><h4>4. Bibliotecas, frameworks e dependências</h4><p>Bibliotecas são conjuntos de recursos prontos. Frameworks são estruturas maiores que orientam a criação de sistemas. Dependências são recursos externos necessários para um projeto funcionar.</p><div class="example-box"><strong>Analogia:</strong> em vez de fabricar todas as peças, o programador usa peças prontas confiáveis.</div><h4>5. Depuração e erros</h4><p><strong>Depurar</strong> é encontrar e corrigir problemas no código.</p><ul><li><strong>Erro de sintaxe:</strong> comando escrito errado. Exemplo: escrever <code>fims</code> em vez de <code>fimse</code>.</li><li><strong>Erro de lógica:</strong> o programa executa, mas o resultado está errado.</li><li><strong>Erro em tempo de execução:</strong> acontece durante a execução, como uma operação inválida.</li></ul><h4>6. Execução passo a passo, breakpoints e variáveis</h4><p>A execução passo a passo permite acompanhar o programa linha por linha. Breakpoint é um ponto de parada usado para analisar o estado do programa.</p><div class="example-box"><strong>Exemplo:</strong> parar antes de calcular a média para verificar se as notas foram lidas corretamente.</div><h4>7. Pilha de chamadas</h4><p>A pilha de chamadas mostra qual função ou procedimento chamou outro. Esse conceito fica mais importante quando o programa usa várias sub-rotinas.</p><div class="example-box"><strong>Exemplo:</strong> o programa principal chama uma função <code>calculaDobro</code>; durante a execução, essa chamada fica registrada até a função terminar.</div><h4>8. Modularização e organização de projetos</h4><p>Modularizar é dividir um programa em partes menores e mais fáceis de entender.</p><ul><li>Facilita manutenção.</li><li>Evita repetição de código.</li><li>Deixa o programa mais organizado.</li></ul><h4>9. Versionamento</h4><p>Versionamento é controlar alterações no código ao longo do tempo.</p><ul><li><strong>Repositório local:</strong> fica no computador do programador.</li><li><strong>Repositório remoto:</strong> fica na internet ou em servidor.</li><li><strong>Commit:</strong> registro de uma versão do projeto.</li><li><strong>Checkout:</strong> resgate ou troca para outra versão.</li></ul><div class="example-box"><strong>Exemplo:</strong> salvar uma versão antes de alterar um algoritmo. Se der errado, é possível voltar à versão anterior.</div><h4>10. Software livre e colaboração</h4><p>Software livre permite estudar, modificar e compartilhar o código conforme sua licença. Repositórios remotos facilitam colaboração entre várias pessoas.</p><h4>11. Boas práticas de programação</h4><ul><li>Usar nomes claros para variáveis.</li><li>Manter indentação organizada.</li><li>Comentar apenas o que ajuda a entender.</li><li>Testar com valores diferentes.</li><li>Evitar copiar código sem compreender.</li></ul><pre>// Comentário útil: calcula a média de duas notas
media <- (nota1 + nota2) / 2</pre><div class="example-box"><strong>Exemplo ruim:</strong> variável chamada <code>x</code> para guardar nome do aluno.<br><strong>Exemplo melhor:</strong> variável chamada <code>nomeAluno</code>.</div><h4>12. Programação em par</h4><p>Dois alunos trabalham juntos: um escreve o código e o outro revisa, sugere melhorias e observa erros.</p><div class="example-box"><strong>Exemplo em sala:</strong> um aluno digita o algoritmo de média; o outro confere se as variáveis foram declaradas, se os parênteses estão corretos e se a saída faz sentido.</div><h4>13. Testes unitários</h4><p>Teste unitário verifica uma parte pequena do programa. Em VisuAlg, pode ser feito testando uma função ou trecho com valores conhecidos.</p><div class="example-box"><strong>Exemplo:</strong> se a função calculaDobro recebe 4, o resultado esperado é 8.</div><h4>Questionário de múltipla escolha</h4><div class="question"><strong>1. Para que serve a IDE?</strong><div class="answers">A) Guardar fotos<br>B) Escrever, executar e testar programas<br>C) Trocar peças do computador<br>D) Criar senhas</div></div><div class="question"><strong>2. O que é depuração?</strong><div class="answers">A) Procurar e corrigir erros no código<br>B) Pintar a tela<br>C) Apagar o programa<br>D) Criar uma variável</div></div><div class="question"><strong>3. O que é breakpoint?</strong><div class="answers">A) Um ponto de parada para analisar a execução<br>B) Um tipo de laço<br>C) Um operador lógico<br>D) Um arquivo de imagem</div></div><div class="question"><strong>4. O que é versionamento?</strong><div class="answers">A) Controlar versões do código<br>B) Aumentar a fonte<br>C) Converter real para inteiro<br>D) Executar o programa sem salvar</div></div><div class="question"><strong>5. Boa prática de programação é:</strong><div class="answers">A) Escrever tudo sem espaço<br>B) Usar nomes claros, indentação e comentários úteis<br>C) Nunca testar<br>D) Copiar sem entender</div></div><div class="question"><strong>6. O que é programação em par?</strong><div class="answers">A) Programar só com números pares<br>B) Dois programadores trabalhando juntos no mesmo problema<br>C) Usar duas telas obrigatoriamente<br>D) Criar dois algoritmos iguais</div></div><hr><br><strong>Gabarito:</strong> 1-B, 2-A, 3-A, 4-A, 5-B, 6-B.</div>`},
{"id": 99, "menu": "99 Exercícios", "title": "99 — Exercícios", "objective": "Praticar lógica de programação no VisuAlg com exercícios progressivos.", "theoryPage": true, "content": "\n<div class=\"theory-page exercises-99\">\n<style>\n.exercises-99 .exercise-level{margin-top:22px;border-top:1px solid #d6e0ee;padding-top:18px}\n.exercises-99 .exercise-item p{margin:8px 0 10px}\n.exercises-99 .exercise-solved{background:#f8fbff;border:1px solid #d6e0ee;border-radius:14px;padding:14px;margin:14px 0}\n.exercises-99 .exercise-solved h3{font-size:20px;margin-bottom:10px;color:#114b9e}\n.exercises-99 .badge{cursor:help}\n.exercises-99 pre{max-height:none}\n</style>\n<div class=\"theory-hero\">\n  <h3>99 — Exercícios de Lógica com VisuAlg</h3>\n  <p>Esta página reúne exercícios para praticar lógica de programação. Não é necessário fazer tudo de uma vez: comece pelo nível em que você está, use as dicas quando travar e avance aos poucos.</p>\n</div>\n<div class=\"intro-grid\">\n  <div class=\"intro-box\"><strong>Como estudar</strong><br>Leia o enunciado com calma, identifique entradas, processamento e saída antes de programar.</div>\n  <div class=\"intro-box\"><strong>Dicas</strong><br>Passe o mouse ou toque sobre o selo 💡 Dica para receber uma orientação rápida sem ver a resposta pronta.</div>\n  <div class=\"intro-box\"><strong>Exemplos resolvidos</strong><br>Cada nível técnico começa com um modelo completo para ajudar a entender a estrutura do bloco.</div>\n</div>\n<section class=\"exercise-level\"><h3>Nível 1 — Fundamentos</h3><p>Objetivo: praticar entrada e saída de dados, variáveis, atribuição, operadores aritméticos, conversões e cálculos simples.</p>\n<section class=\"exercise-solved\">\n  <h3>📘 Exemplo Resolvido — Variáveis, Entrada, Saída e Cálculo</h3>\n  <div class=\"example-box\"><strong>Problema:</strong><p>Uma loja deseja calcular o valor total de uma compra. O algoritmo deve ler o preço unitário de um produto, a quantidade comprada e exibir o total a pagar.</p></div>\n  <h4>Algoritmo</h4>\n  <pre>algoritmo \"total_compra\"\nvar\n   preco, total: real\n   quantidade: inteiro\ninicio\n   escreva(\"Digite o preço do produto: \")\n   leia(preco)\n\n   escreva(\"Digite a quantidade comprada: \")\n   leia(quantidade)\n\n   total &lt;- preco * quantidade\n\n   escreval(\"Total da compra: R$ \", total)\nfimalgoritmo</pre>\n  <h4>Explicação</h4>\n  <ol><li>Declaramos variáveis para armazenar os dados da compra.</li><li>Lemos o preço e a quantidade informados pelo usuário.</li><li>Calculamos o valor total multiplicando o preço pela quantidade.</li><li>Exibimos o resultado final na tela.</li></ol>\n</section>\n\n<div class=\"question exercise-item\">\n  <strong>Exercício 1 — Saudação ao Usuário</strong>\n  <p>Crie um algoritmo que leia o nome de uma pessoa e exiba uma mensagem de boas-vindas contendo o nome informado.</p>\n  <span class=\"badge\" title=\"Você precisa de uma variável do tipo caractere para guardar o nome.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 2 — Soma de Dois Valores</strong>\n  <p>Desenvolva um algoritmo que leia dois números inteiros, calcule a soma entre eles e mostre o resultado na tela.</p>\n  <span class=\"badge\" title=\"Leia dois valores, some os dois e guarde o resultado em uma terceira variável.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 3 — Média de Três Notas</strong>\n  <p>Uma escola precisa calcular a média de um aluno. Leia três notas, calcule a média aritmética e exiba o resultado final.</p>\n  <span class=\"badge\" title=\"Some as três notas e divida o total por 3.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 4 — Dobro e Metade</strong>\n  <p>Leia um número informado pelo usuário e mostre o dobro e a metade desse valor.</p>\n  <span class=\"badge\" title=\"O dobro usa multiplicação. A metade usa divisão.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 5 — Idade Futura</strong>\n  <p>Leia a idade atual de uma pessoa e informe quantos anos ela terá daqui a 5 anos.</p>\n  <span class=\"badge\" title=\"Some 5 ao valor digitado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 6 — Área de um Terreno</strong>\n  <p>Um cliente deseja saber a área de um terreno retangular. Leia a largura e o comprimento do terreno e calcule a área total.</p>\n  <span class=\"badge\" title=\"Área do retângulo = largura × comprimento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 7 — Área do Triângulo</strong>\n  <p>Leia a base e a altura de um triângulo e calcule sua área.</p>\n  <span class=\"badge\" title=\"Área do triângulo = base × altura ÷ 2.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 8 — Área do Círculo</strong>\n  <p>Leia o raio de um círculo e calcule sua área.</p>\n  <span class=\"badge\" title=\"Área do círculo = π × raio².\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 9 — Conversão de Temperatura</strong>\n  <p>Leia uma temperatura em graus Celsius e converta para Fahrenheit.</p>\n  <span class=\"badge\" title=\"Use a fórmula: Fahrenheit = Celsius × 1.8 + 32.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 10 — Reajuste Salarial</strong>\n  <p>Uma empresa concedeu reajuste de 8% aos funcionários. Leia o salário atual e calcule o novo salário.</p>\n  <span class=\"badge\" title=\"Calcule 8% do salário e some ao salário original.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 11 — Velocidade Média</strong>\n  <p>Leia a distância percorrida por um veículo e o tempo gasto na viagem. Calcule e exiba a velocidade média.</p>\n  <span class=\"badge\" title=\"Velocidade média = distância ÷ tempo.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 12 — Total de Compra</strong>\n  <p>Leia o nome de um produto, seu preço unitário e a quantidade comprada. Exiba o nome do produto e o valor total da compra.</p>\n  <span class=\"badge\" title=\"Valor total = preço unitário × quantidade.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 13 — Conversão de Moeda</strong>\n  <p>Leia um valor em reais e a cotação atual do dólar. Calcule quantos dólares podem ser comprados.</p>\n  <span class=\"badge\" title=\"Divida o valor em reais pela cotação do dólar.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 14 — Média Bimestral</strong>\n  <p>Um professor precisa calcular a média final de um aluno. Leia quatro notas bimestrais e exiba a média aritmética.</p>\n  <span class=\"badge\" title=\"Some as quatro notas e divida por 4.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 15 — Dias em Horas</strong>\n  <p>Leia uma quantidade de dias e converta esse valor para horas.</p>\n  <span class=\"badge\" title=\"Cada dia possui 24 horas.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 16 — Horas em Minutos</strong>\n  <p>Leia uma quantidade de horas e converta para minutos.</p>\n  <span class=\"badge\" title=\"Cada hora possui 60 minutos.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 17 — Minutos em Segundos</strong>\n  <p>Leia uma quantidade de minutos e converta para segundos.</p>\n  <span class=\"badge\" title=\"Cada minuto possui 60 segundos.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 18 — Antecessor e Sucessor</strong>\n  <p>Leia um número inteiro e mostre seu antecessor e seu sucessor.</p>\n  <span class=\"badge\" title=\"O antecessor é o número menos 1. O sucessor é o número mais 1.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 19 — Divisão de Conta</strong>\n  <p>Três amigos foram a uma lanchonete e decidiram dividir a conta igualmente. Leia o valor total da conta e mostre quanto cada um deverá pagar.</p>\n  <span class=\"badge\" title=\"Divida o valor total por 3.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 20 — Caixas e Garrafas</strong>\n  <p>Uma distribuidora armazena refrigerantes em caixas com 12 garrafas. Leia a quantidade total de garrafas e informe:</p>\n  <ul><li>Quantas caixas completas podem ser montadas.</li><li>Quantas garrafas sobram sem completar uma caixa.</li></ul>\n  <span class=\"badge\" title=\"Utilize divisão inteira e resto da divisão.\">💡 Dica</span>\n</div></section><section class=\"exercise-level\"><h3>Nível 2 — Estruturas de Decisão</h3><p>Objetivo: praticar decisões simples, compostas, encadeadas e operadores lógicos.</p>\n<section class=\"exercise-solved\">\n  <h3>📘 Exemplo Resolvido — Decisão simples</h3>\n  <div class=\"example-box\"><strong>Problema:</strong><p>Uma escola deseja verificar se um aluno foi aprovado. O algoritmo deve ler a nota final e mostrar se o aluno foi aprovado ou reprovado.</p></div>\n  <h4>Algoritmo</h4>\n  <pre>algoritmo \"aprovacao\"\nvar\n   nota: real\ninicio\n   escreva(\"Digite a nota final: \")\n   leia(nota)\n\n   se nota &gt;= 6 entao\n      escreval(\"Aprovado\")\n   senao\n      escreval(\"Reprovado\")\n   fimse\nfimalgoritmo</pre>\n  <h4>Explicação</h4>\n  <ol><li>Declaramos a variável nota.</li><li>Lemos a nota digitada.</li><li>Usamos se/senao para separar os dois caminhos possíveis.</li><li>Se a nota for maior ou igual a 6, mostramos aprovado. Caso contrário, mostramos reprovado.</li></ol>\n</section>\n\n<div class=\"question exercise-item\">\n  <strong>Exercício 21 — Aprovado ou Reprovado</strong>\n  <p>Uma escola deseja automatizar a análise das notas dos alunos. Desenvolva um algoritmo que leia a nota final de um estudante. Caso a nota seja maior ou igual a 6, exiba \"Aprovado\". Caso contrário, exiba \"Reprovado\".</p>\n  <span class=\"badge\" title=\"Existem apenas duas possibilidades de resultado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 22 — Número Positivo ou Negativo</strong>\n  <p>Leia um número informado pelo usuário e determine se ele é positivo, negativo ou igual a zero.</p>\n  <span class=\"badge\" title=\"Observe que existem três possíveis classificações.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 23 — Par ou Ímpar</strong>\n  <p>Desenvolva um algoritmo que leia um número inteiro e informe se ele é par ou ímpar.</p>\n  <span class=\"badge\" title=\"Utilize o operador de resto da divisão.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 24 — Maioridade</strong>\n  <p>Leia a idade de uma pessoa e informe se ela já atingiu a maioridade legal.</p>\n  <span class=\"badge\" title=\"Compare a idade informada com 18 anos.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 25 — Comparação entre Dois Valores</strong>\n  <p>Leia dois números inteiros e informe qual deles possui o maior valor. Caso sejam iguais, informe essa situação ao usuário.</p>\n  <span class=\"badge\" title=\"Nem sempre um valor será maior que o outro.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 26 — Validação de Nota</strong>\n  <p>Leia a nota de um aluno. Caso a nota esteja fora do intervalo de 0 a 10, exiba a mensagem \"Nota inválida\". Caso contrário, exiba a nota informada.</p>\n  <span class=\"badge\" title=\"Primeiro valide os dados recebidos.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 27 — Classificação de Desempenho</strong>\n  <p>Leia a nota final de um estudante e classifique: aprovado se for igual ou superior a 7; recuperação se estiver entre 5 e 6,9; reprovado se for inferior a 5.</p>\n  <span class=\"badge\" title=\"Existem três faixas diferentes.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 28 — Faixa Etária</strong>\n  <p>Leia a idade de uma pessoa e classifique como criança, adolescente, adulto ou idoso, usando faixas de idade coerentes para cada categoria.</p>\n  <span class=\"badge\" title=\"Será necessário trabalhar com intervalos.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 29 — Saudação por Horário</strong>\n  <p>Leia uma hora inteira entre 0 e 23. Exiba bom dia, boa tarde ou boa noite de acordo com o horário. Caso o valor esteja fora do intervalo, informe que a hora é inválida.</p>\n  <span class=\"badge\" title=\"Primeiro verifique se a hora é válida.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 30 — Sistema de Login</strong>\n  <p>Desenvolva um algoritmo que leia um nome de usuário e uma senha. Considere usuário correto admin e senha correta 1234. Informe se o acesso foi autorizado ou negado.</p>\n  <span class=\"badge\" title=\"As duas condições precisam ser verdadeiras.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 31 — Código de Região</strong>\n  <p>Uma empresa utiliza códigos para regiões: 1 Norte, 2 Sul, 3 Leste e 4 Oeste. Leia um código e informe a região correspondente. Caso o código não exista, informe \"Região não cadastrada\".</p>\n  <span class=\"badge\" title=\"Compare o valor digitado com várias opções.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 32 — Controle de Velocidade</strong>\n  <p>Leia a velocidade registrada por um veículo. Classifique como dentro do limite até 80 km/h, infração leve de 81 a 100 km/h e infração grave acima de 100 km/h.</p>\n  <span class=\"badge\" title=\"Analise intervalos de valores.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 33 — Intervalo Numérico</strong>\n  <p>Leia um número inteiro e informe se ele pertence ao intervalo entre 10 e 20, inclusive.</p>\n  <span class=\"badge\" title=\"Será necessário utilizar duas comparações.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 34 — Múltiplo de 3 e de 5</strong>\n  <p>Leia um número inteiro e informe se ele é múltiplo de 3 e de 5 ao mesmo tempo.</p>\n  <span class=\"badge\" title=\"Duas condições precisam ser satisfeitas.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 35 — Verificação de Triângulo</strong>\n  <p>Leia três valores que representam lados de um possível triângulo. Informe se esses valores podem formar um triângulo.</p>\n  <span class=\"badge\" title=\"Nem toda combinação de três lados forma um triângulo.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 36 — Classificação de Triângulo</strong>\n  <p>Após verificar que três lados formam um triângulo, classifique-o em equilátero, isósceles ou escaleno.</p>\n  <span class=\"badge\" title=\"Observe quais lados possuem medidas iguais.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 37 — Empréstimo Bancário</strong>\n  <p>Um banco analisa pedidos de crédito. Leia o salário do cliente e o valor solicitado. O empréstimo será aprovado apenas se o valor solicitado não ultrapassar quatro vezes o salário informado.</p>\n  <span class=\"badge\" title=\"Compare o valor solicitado com um limite calculado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 38 — Reajuste Salarial por Faixa</strong>\n  <p>Uma empresa definiu reajustes por faixa: até R$ 2.000 aumento de 12%; de R$ 2.000,01 até R$ 4.000 aumento de 8%; acima de R$ 4.000 aumento de 5%. Leia o salário atual e exiba o novo salário.</p>\n  <span class=\"badge\" title=\"Cada faixa possui uma regra diferente.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 39 — Cálculo de IMC</strong>\n  <p>Leia peso e altura de uma pessoa. Calcule o IMC e classifique como abaixo do peso, peso normal, sobrepeso ou obesidade.</p>\n  <span class=\"badge\" title=\"Primeiro faça o cálculo. Depois classifique.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 40 — Ordenação de Três Valores</strong>\n  <p>Leia três números inteiros e exiba os valores em ordem crescente.</p>\n  <span class=\"badge\" title=\"Pense em como descobrir qual é o menor, o intermediário e o maior valor.\">💡 Dica</span>\n</div></section><section class=\"exercise-level\"><h3>Nível 3 — Estruturas de Repetição</h3><p>Objetivo: praticar contadores, acumuladores, médias, estatísticas e problemas com repetição.</p>\n<section class=\"exercise-solved\">\n  <h3>📘 Exemplo Resolvido — Laço para</h3>\n  <div class=\"example-box\"><strong>Problema:</strong><p>Uma escola deseja exibir os números de chamada dos alunos de uma turma. Desenvolva um algoritmo que mostre os números de 1 até 10 na tela.</p></div>\n  <h4>Algoritmo</h4>\n  <pre>algoritmo \"chamada\"\nvar\n   contador: inteiro\ninicio\n   para contador de 1 ate 10 faca\n      escreval(contador)\n   fimpara\nfimalgoritmo</pre>\n  <h4>Explicação</h4>\n  <ol><li>Criamos uma variável contador.</li><li>O laço começa em 1 e termina em 10.</li><li>A cada repetição, o valor do contador é exibido.</li><li>Quando o contador passa do limite, a repetição termina.</li></ol>\n</section>\n\n<div class=\"question exercise-item\">\n  <strong>Exercício 41 — Contagem Crescente</strong>\n  <p>Desenvolva um algoritmo que exiba na tela todos os números inteiros de 1 até 20.</p>\n  <span class=\"badge\" title=\"Você não precisa criar vinte comandos de escrita.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 42 — Contagem Regressiva</strong>\n  <p>Crie um algoritmo que exiba os números de 20 até 1 em ordem decrescente.</p>\n  <span class=\"badge\" title=\"O contador deverá diminuir a cada repetição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 43 — Números Pares</strong>\n  <p>Desenvolva um algoritmo que exiba todos os números pares entre 2 e 50.</p>\n  <span class=\"badge\" title=\"Existe mais de uma forma de resolver esse problema.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 44 — Números Ímpares</strong>\n  <p>Exiba todos os números ímpares entre 1 e 49.</p>\n  <span class=\"badge\" title=\"Observe o padrão de crescimento da sequência.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 45 — Contando de Cinco em Cinco</strong>\n  <p>Mostre na tela os números de 0 até 100, avançando de cinco em cinco.</p>\n  <span class=\"badge\" title=\"Nem todo laço precisa incrementar de um em um.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 46 — Contagem Regressiva de Lançamento</strong>\n  <p>Desenvolva um algoritmo que exiba uma contagem de 10 até 1 e, ao final, mostre a mensagem \"Lançamento!\".</p>\n  <span class=\"badge\" title=\"Primeiro faça a contagem. Depois exiba a mensagem final.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 47 — Soma de 1 até 100</strong>\n  <p>Calcule a soma de todos os números inteiros entre 1 e 100 e exiba o resultado final.</p>\n  <span class=\"badge\" title=\"Você precisará de uma variável acumuladora.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 48 — Soma dos Números Pares</strong>\n  <p>Calcule a soma de todos os números pares entre 2 e 100.</p>\n  <span class=\"badge\" title=\"Nem todos os números devem participar da soma.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 49 — Tabuada</strong>\n  <p>Leia um número inteiro informado pelo usuário e exiba sua tabuada de multiplicação de 1 até 10.</p>\n  <span class=\"badge\" title=\"O valor digitado será multiplicado várias vezes.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 50 — Dez Números e uma Soma</strong>\n  <p>Solicite ao usuário dez números inteiros. Ao final, exiba a soma de todos os valores digitados.</p>\n  <span class=\"badge\" title=\"A cada leitura, atualize o total acumulado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 51 — Média de uma Turma</strong>\n  <p>Um professor deseja calcular a média de uma turma. Desenvolva um algoritmo que leia as notas de 10 alunos e, ao final, exiba a média da turma.</p>\n  <span class=\"badge\" title=\"Você precisará acumular todas as notas antes de calcular a média.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 52 — Contando Valores Positivos</strong>\n  <p>Solicite ao usuário 15 números inteiros. Ao final, informe quantos deles são positivos.</p>\n  <span class=\"badge\" title=\"Crie um contador que aumente apenas quando a condição for verdadeira.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 53 — Contando Valores Negativos</strong>\n  <p>Leia 15 números inteiros e informe quantos valores negativos foram digitados.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 54 — Quantidade de Números Pares</strong>\n  <p>Leia 20 números inteiros e informe quantos deles são pares.</p>\n  <span class=\"badge\" title=\"Utilize o operador de resto da divisão.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 55 — Quantidade de Números Ímpares</strong>\n  <p>Leia 20 números inteiros e informe quantos deles são ímpares.</p>\n  <span class=\"badge\" title=\"Nem todos os números digitados devem ser contabilizados.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 56 — Maior Valor Informado</strong>\n  <p>Solicite ao usuário 10 números inteiros. Ao final, exiba qual foi o maior valor digitado.</p>\n  <span class=\"badge\" title=\"Você precisará guardar temporariamente o maior valor encontrado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 57 — Menor Valor Informado</strong>\n  <p>Leia 10 números inteiros e informe qual foi o menor valor digitado.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 58 — Maior e Menor Valor</strong>\n  <p>Leia 15 números inteiros e exiba, ao final, o maior e o menor valor encontrados.</p>\n  <span class=\"badge\" title=\"Você precisará acompanhar duas informações durante o processamento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 59 — Média de Alturas</strong>\n  <p>Uma academia deseja calcular a altura média de seus alunos. Leia a altura de 20 pessoas e exiba a média ao final.</p>\n  <span class=\"badge\" title=\"Some todas as alturas antes de dividir.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 60 — Média de Idades</strong>\n  <p>Leia a idade de 25 pessoas e calcule a média de idade do grupo.</p>\n  <span class=\"badge\" title=\"O raciocínio é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 61 — Aprovados na Turma</strong>\n  <p>Leia as notas de 20 alunos. Considere aprovado quem obtiver nota maior ou igual a 6. Ao final, informe quantos alunos foram aprovados.</p>\n  <span class=\"badge\" title=\"Misture repetição com decisão.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 62 — Reprovados na Turma</strong>\n  <p>Leia as notas de 20 alunos e informe quantos ficaram reprovados.</p>\n  <span class=\"badge\" title=\"Você pode reutilizar a lógica do exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 63 — Pesquisa de Idades</strong>\n  <p>Uma empresa realizou uma pesquisa com 30 pessoas. Leia as idades e informe a maior idade, a menor idade e a média das idades.</p>\n  <span class=\"badge\" title=\"Será necessário combinar acumuladores e comparações.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 64 — Pesquisa de Alturas</strong>\n  <p>Leia a altura de 20 pessoas e informe a maior altura, a menor altura e a altura média.</p>\n  <span class=\"badge\" title=\"Guarde os extremos encontrados durante a leitura.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 65 — Soma dos Múltiplos de 3</strong>\n  <p>Calcule a soma de todos os múltiplos de 3 existentes entre 1 e 100.</p>\n  <span class=\"badge\" title=\"Nem todos os números participam da soma.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 66 — Soma dos Múltiplos de 5</strong>\n  <p>Calcule a soma de todos os múltiplos de 5 existentes entre 1 e 100.</p>\n  <span class=\"badge\" title=\"Primeiro identifique quais valores atendem à condição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 67 — Quantos Estão no Intervalo</strong>\n  <p>Leia 20 números inteiros e informe quantos deles estão entre 10 e 50, inclusive.</p>\n  <span class=\"badge\" title=\"Será necessário usar uma condição dentro do laço.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 68 — Tabuadas de 1 a 10</strong>\n  <p>Exiba as tabuadas completas dos números de 1 até 10.</p>\n  <span class=\"badge\" title=\"Pense em uma repetição dentro de outra repetição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 69 — Fatorial</strong>\n  <p>Leia um número inteiro positivo e calcule seu fatorial.</p>\n  <span class=\"badge\" title=\"Você precisará multiplicar vários valores sucessivamente.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 70 — Número Primo</strong>\n  <p>Leia um número inteiro positivo e informe se ele é primo.</p>\n  <span class=\"badge\" title=\"Verifique quantos divisores o número possui.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 71 — Divisores de um Número</strong>\n  <p>Desenvolva um algoritmo que leia um número inteiro positivo e exiba todos os seus divisores.</p>\n  <span class=\"badge\" title=\"Verifique quais números dividem o valor informado sem deixar resto.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 72 — Soma dos Divisores</strong>\n  <p>Leia um número inteiro positivo e calcule a soma de todos os seus divisores.</p>\n  <span class=\"badge\" title=\"Primeiro descubra os divisores. Depois some os valores encontrados.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 73 — Sequência de Fibonacci</strong>\n  <p>Exiba os 15 primeiros números da sequência de Fibonacci, começando em 0 e 1.</p>\n  <span class=\"badge\" title=\"Cada novo termo é obtido pela soma dos dois anteriores.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 74 — Pesquisa de Satisfação</strong>\n  <p>Uma empresa realizou uma pesquisa com 20 clientes. Cada cliente deve informar uma nota de 1 a 5. Ao final, exiba a média, a maior nota e a menor nota.</p>\n  <span class=\"badge\" title=\"Você precisará acumular valores e comparar resultados.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 75 — Pesquisa Eleitoral Simplificada</strong>\n  <p>Durante uma pesquisa, 30 pessoas devem escolher entre três candidatos. Ao final, informe quantos votos cada candidato recebeu.</p>\n  <span class=\"badge\" title=\"Crie um contador para cada opção.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 76 — Controle de Vendas</strong>\n  <p>Uma loja deseja registrar o valor de 15 vendas realizadas durante o dia. Ao final, exiba o valor total vendido, a média das vendas e a maior venda realizada.</p>\n  <span class=\"badge\" title=\"Nem todas as informações são calculadas da mesma forma.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 77 — Estatística da Turma</strong>\n  <p>Leia as notas de 25 alunos. Ao final, informe a média da turma, a quantidade de aprovados e a quantidade de reprovados.</p>\n  <span class=\"badge\" title=\"Misture repetição, acumuladores e decisões.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 78 — Contagem de Faixas Etárias</strong>\n  <p>Leia a idade de 20 pessoas. Ao final, informe quantas pertencem aos grupos criança, adolescente, adulto e idoso.</p>\n  <span class=\"badge\" title=\"Cada faixa precisa de seu próprio contador.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 79 — Maior Sequência</strong>\n  <p>Leia 15 números inteiros e determine qual foi o maior valor informado. Além disso, informe em qual posição ele foi digitado.</p>\n  <span class=\"badge\" title=\"Você precisará acompanhar o valor e sua posição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 80 — Controle de Estoque</strong>\n  <p>Uma loja possui 10 produtos cadastrados. Para cada produto, informe a quantidade atual em estoque. Ao final, exiba o total de itens, o maior estoque e o menor estoque.</p>\n  <span class=\"badge\" title=\"Guarde os extremos encontrados durante a leitura.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 81 — Média até Valor de Parada</strong>\n  <p>Leia vários números até que seja digitado o valor 0. Ao final, exiba a média dos números digitados.</p>\n  <span class=\"badge\" title=\"O valor que encerra a leitura não participa do cálculo.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 82 — Soma até Valor de Parada</strong>\n  <p>Leia números inteiros até que o usuário digite 0. Ao final, exiba a soma de todos os valores informados.</p>\n  <span class=\"badge\" title=\"Esse exercício é semelhante ao anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 83 — Quantidade de Entradas</strong>\n  <p>Leia números inteiros até que o usuário digite 0. Ao final, informe quantos números foram digitados.</p>\n  <span class=\"badge\" title=\"Use um contador.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 84 — Maior Valor até Encerramento</strong>\n  <p>Leia números inteiros até que o usuário digite 0. Ao final, informe qual foi o maior número digitado.</p>\n  <span class=\"badge\" title=\"O valor de encerramento não deve ser considerado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 85 — Menor Valor até Encerramento</strong>\n  <p>Leia números inteiros até que o usuário digite 0. Ao final, informe qual foi o menor número digitado.</p>\n  <span class=\"badge\" title=\"Pense em como inicializar a variável que armazenará o menor valor.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 86 — Soma dos Pares Informados</strong>\n  <p>Leia 20 números inteiros e calcule a soma apenas dos números pares.</p>\n  <span class=\"badge\" title=\"Nem todos os valores participam da soma.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 87 — Soma dos Ímpares Informados</strong>\n  <p>Leia 20 números inteiros e calcule a soma apenas dos números ímpares.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 88 — Média dos Valores Positivos</strong>\n  <p>Leia 20 números inteiros e calcule a média apenas dos valores positivos.</p>\n  <span class=\"badge\" title=\"Você precisará controlar quantidade e soma.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 89 — Classificação de Temperaturas</strong>\n  <p>Leia a temperatura registrada durante 30 dias. Ao final, informe maior temperatura, menor temperatura e temperatura média.</p>\n  <span class=\"badge\" title=\"O raciocínio é semelhante ao das pesquisas anteriores.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 90 — Simulação de Caixa</strong>\n  <p>Um caixa registrou 20 compras durante o dia. Leia o valor de cada compra e informe o faturamento total, a média das compras e a maior compra realizada.</p>\n  <span class=\"badge\" title=\"Este exercício reúne vários conceitos já praticados neste nível.\">💡 Dica</span>\n</div></section><section class=\"exercise-level\"><h3>Nível 4 — Vetores</h3><p>Objetivo: armazenar vários valores em uma única estrutura e percorrer suas posições.</p>\n<section class=\"exercise-solved\">\n  <h3>📘 Exemplo Resolvido — Vetor de notas</h3>\n  <div class=\"example-box\"><strong>Problema:</strong><p>Uma escola deseja armazenar as notas de 5 alunos para exibi-las depois. Desenvolva um algoritmo que leia as cinco notas, armazene-as em um vetor e mostre todas as notas digitadas.</p></div>\n  <h4>Algoritmo</h4>\n  <pre>algoritmo \"notas\"\nvar\n   notas: vetor[1..5] de real\n   i: inteiro\ninicio\n   para i de 1 ate 5 faca\n      escreva(\"Digite a nota: \")\n      leia(notas[i])\n   fimpara\n\n   escreval(\"Notas cadastradas:\")\n\n   para i de 1 ate 5 faca\n      escreval(notas[i])\n   fimpara\nfimalgoritmo</pre>\n  <h4>Explicação</h4>\n  <ol><li>Criamos um vetor com 5 posições.</li><li>O primeiro laço lê e guarda cada nota.</li><li>Cada nota ocupa uma posição diferente do vetor.</li><li>O segundo laço percorre o vetor para exibir os valores armazenados.</li></ol>\n</section>\n\n<div class=\"question exercise-item\">\n  <strong>Exercício 91 — Cadastro de Valores</strong>\n  <p>Desenvolva um algoritmo que leia 10 números inteiros e os armazene em um vetor. Após a leitura, exiba todos os valores na mesma ordem em que foram digitados.</p>\n  <span class=\"badge\" title=\"Primeiro armazene. Depois percorra o vetor.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 92 — Ordem Inversa</strong>\n  <p>Leia 10 números inteiros e armazene-os em um vetor. Ao final, exiba os valores na ordem inversa da digitação.</p>\n  <span class=\"badge\" title=\"Percorra o vetor do fim para o início.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 93 — Maior Elemento</strong>\n  <p>Leia 15 números inteiros e armazene-os em um vetor. Ao final, informe qual é o maior valor armazenado.</p>\n  <span class=\"badge\" title=\"Compare cada elemento com o maior encontrado até o momento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 94 — Menor Elemento</strong>\n  <p>Leia 15 números inteiros e informe qual é o menor valor armazenado no vetor.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 95 — Média dos Elementos</strong>\n  <p>Leia 20 números reais e armazene-os em um vetor. Calcule e exiba a média dos valores armazenados.</p>\n  <span class=\"badge\" title=\"Some todos os elementos antes de calcular a média.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 96 — Quantidade de Pares</strong>\n  <p>Leia 20 números inteiros e informe quantos deles são pares.</p>\n  <span class=\"badge\" title=\"Percorra o vetor verificando cada elemento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 97 — Quantidade de Ímpares</strong>\n  <p>Leia 20 números inteiros e informe quantos deles são ímpares.</p>\n  <span class=\"badge\" title=\"A solução é muito parecida com a do exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 98 — Procurando um Valor</strong>\n  <p>Leia 10 números inteiros e armazene-os em um vetor. Em seguida, solicite um número ao usuário e informe se ele está presente no vetor.</p>\n  <span class=\"badge\" title=\"Será necessário percorrer todas as posições.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 99 — Localizando a Posição</strong>\n  <p>Leia 10 números inteiros. Depois, solicite um valor para pesquisa. Caso ele exista no vetor, informe em qual posição foi encontrado.</p>\n  <span class=\"badge\" title=\"Guarde também o índice da posição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 100 — Soma dos Elementos</strong>\n  <p>Leia 15 números inteiros e calcule a soma de todos os valores armazenados no vetor.</p>\n  <span class=\"badge\" title=\"Use uma variável acumuladora.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 101 — Substituindo Negativos</strong>\n  <p>Leia 15 números inteiros. Sempre que um valor negativo for encontrado, substitua-o por zero. Ao final, exiba o vetor atualizado.</p>\n  <span class=\"badge\" title=\"Você pode alterar o próprio vetor.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 102 — Contando Ocorrências</strong>\n  <p>Leia 20 números inteiros. Em seguida, solicite um valor para pesquisa e informe quantas vezes ele aparece no vetor.</p>\n  <span class=\"badge\" title=\"Cada ocorrência encontrada aumenta um contador.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 103 — Vetor Copiado</strong>\n  <p>Leia 10 números inteiros em um vetor A. Copie todos os valores para um vetor B e exiba os dois vetores.</p>\n  <span class=\"badge\" title=\"Percorra ambos utilizando o mesmo índice.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 104 — Comparação de Vetores</strong>\n  <p>Leia dois vetores com 10 números inteiros cada. Informe quantas posições possuem valores iguais.</p>\n  <span class=\"badge\" title=\"Compare posição por posição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 105 — Soma de Vetores</strong>\n  <p>Leia dois vetores com 10 números inteiros cada. Crie um terceiro vetor contendo a soma dos elementos correspondentes.</p>\n  <span class=\"badge\" title=\"A posição do vetor resultado depende da mesma posição dos dois vetores originais.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 106 — Junção de Vetores</strong>\n  <p>Leia dois vetores contendo 5 números inteiros cada. Crie um terceiro vetor contendo todos os elementos dos dois vetores.</p>\n  <span class=\"badge\" title=\"O novo vetor terá mais posições do que os vetores originais.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 107 — Ranking de Notas</strong>\n  <p>Leia as notas de 10 alunos e determine a maior nota, a menor nota e a média da turma.</p>\n  <span class=\"badge\" title=\"Você já resolveu problemas parecidos usando repetição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 108 — Números Acima da Média</strong>\n  <p>Leia 15 números reais. Calcule a média e informe quantos valores estão acima dela.</p>\n  <span class=\"badge\" title=\"Talvez seja necessário percorrer o vetor mais de uma vez.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 109 — Valores em Posições Pares</strong>\n  <p>Leia 20 números inteiros e exiba apenas os elementos armazenados em posições pares do vetor.</p>\n  <span class=\"badge\" title=\"Observe o índice e não o valor armazenado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 110 — Valores em Posições Ímpares</strong>\n  <p>Leia 20 números inteiros e exiba apenas os elementos armazenados em posições ímpares.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div></section><section class=\"exercise-level\"><h3>Nível 5 — Matrizes</h3><p>Objetivo: usar linhas e colunas para representar tabelas, boletins, vendas e ambientes físicos.</p>\n<section class=\"exercise-solved\">\n  <h3>📘 Exemplo Resolvido — Matriz de notas</h3>\n  <div class=\"example-box\"><strong>Problema:</strong><p>Uma escola deseja armazenar as notas de 3 alunos em 3 bimestres. Desenvolva um algoritmo que leia essas notas em uma matriz 3x3 e depois exiba todos os valores armazenados.</p></div>\n  <h4>Algoritmo</h4>\n  <pre>algoritmo \"matriz_notas\"\nvar\n   notas: vetor[1..3,1..3] de real\n   linha, coluna: inteiro\ninicio\n   para linha de 1 ate 3 faca\n      para coluna de 1 ate 3 faca\n         escreva(\"Nota: \")\n         leia(notas[linha,coluna])\n      fimpara\n   fimpara\n\n   para linha de 1 ate 3 faca\n      para coluna de 1 ate 3 faca\n         escreva(notas[linha,coluna], \" \")\n      fimpara\n      escreval(\"\")\n   fimpara\nfimalgoritmo</pre>\n  <h4>Explicação</h4>\n  <ol><li>Criamos uma matriz 3x3.</li><li>Cada posição é acessada por linha e coluna.</li><li>Usamos dois laços: um para linhas e outro para colunas.</li><li>Depois percorremos novamente a matriz para exibir os valores.</li></ol>\n</section>\n\n<div class=\"question exercise-item\">\n  <strong>Exercício 111 — Cadastro em Matriz</strong>\n  <p>Leia 9 números inteiros e armazene-os em uma matriz 3x3. Ao final, exiba todos os valores organizados em formato de tabela.</p>\n  <span class=\"badge\" title=\"Você precisará percorrer linhas e colunas.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 112 — Soma de Todos os Elementos</strong>\n  <p>Leia os valores de uma matriz 3x3 e calcule a soma de todos os elementos armazenados.</p>\n  <span class=\"badge\" title=\"Some cada elemento à medida que ele for percorrido.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 113 — Média da Matriz</strong>\n  <p>Leia uma matriz 3x3 contendo números reais. Calcule e exiba a média de todos os valores armazenados.</p>\n  <span class=\"badge\" title=\"Primeiro obtenha a soma total.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 114 — Maior Elemento</strong>\n  <p>Leia uma matriz 4x4 e informe qual é o maior valor armazenado.</p>\n  <span class=\"badge\" title=\"Compare cada elemento com o maior encontrado até o momento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 115 — Menor Elemento</strong>\n  <p>Leia uma matriz 4x4 e informe qual é o menor valor armazenado.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 116 — Quantidade de Números Pares</strong>\n  <p>Leia uma matriz 4x4 e informe quantos elementos possuem valor par.</p>\n  <span class=\"badge\" title=\"Verifique cada elemento individualmente.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 117 — Quantidade de Números Ímpares</strong>\n  <p>Leia uma matriz 4x4 e informe quantos elementos possuem valor ímpar.</p>\n  <span class=\"badge\" title=\"Utilize a mesma estratégia do exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 118 — Soma da Linha Informada</strong>\n  <p>Leia uma matriz 4x4. Em seguida, solicite ao usuário o número de uma linha e calcule a soma dos elementos dessa linha.</p>\n  <span class=\"badge\" title=\"Nem todas as linhas precisam ser processadas.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 119 — Soma da Coluna Informada</strong>\n  <p>Leia uma matriz 4x4. Solicite ao usuário o número de uma coluna e calcule a soma dos valores dessa coluna.</p>\n  <span class=\"badge\" title=\"Observe qual índice permanece fixo.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 120 — Soma da Diagonal Principal</strong>\n  <p>Leia uma matriz 4x4 e calcule a soma dos elementos da diagonal principal.</p>\n  <span class=\"badge\" title=\"Na diagonal principal, linha e coluna possuem o mesmo índice.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 121 — Soma da Diagonal Secundária</strong>\n  <p>Leia uma matriz 4x4 e calcule a soma dos elementos da diagonal secundária.</p>\n  <span class=\"badge\" title=\"Observe a posição dos elementos que formam a diagonal oposta.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 122 — Boletim Escolar</strong>\n  <p>Uma escola deseja armazenar as notas de 5 alunos em 4 bimestres. Use uma matriz para armazenar os dados e calcule a média de cada aluno e a média geral da turma.</p>\n  <span class=\"badge\" title=\"Cada linha pode representar um aluno.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 123 — Controle de Vendas</strong>\n  <p>Uma loja registrou as vendas de 4 vendedores durante 5 dias. Armazene os valores em uma matriz e informe o total vendido por vendedor e o total vendido em cada dia.</p>\n  <span class=\"badge\" title=\"Linhas e colunas representam informações diferentes.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 124 — Ocupação de Estacionamento</strong>\n  <p>Um estacionamento possui 5 fileiras com 6 vagas cada. Use uma matriz para registrar 0 para vaga livre e 1 para vaga ocupada. Ao final, informe quantas vagas estão ocupadas.</p>\n  <span class=\"badge\" title=\"Conte apenas os elementos com valor 1.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 125 — Sala de Aula</strong>\n  <p>Uma sala possui 5 fileiras e 5 colunas de carteiras. Use uma matriz para representar 0 para carteira vazia e 1 para carteira ocupada. Informe a quantidade de carteiras ocupadas e livres.</p>\n  <span class=\"badge\" title=\"Toda matriz pode representar um ambiente físico.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 126 — Temperaturas da Semana</strong>\n  <p>Uma estação meteorológica registrou temperaturas durante 4 semanas e 7 dias. Armazene os valores em uma matriz e informe maior temperatura, menor temperatura e média.</p>\n  <span class=\"badge\" title=\"A matriz funciona como uma tabela.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 127 — Matriz Transposta</strong>\n  <p>Leia uma matriz 3x3 e exiba sua matriz transposta.</p>\n  <span class=\"badge\" title=\"Linhas se transformam em colunas.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 128 — Soma de Matrizes</strong>\n  <p>Leia duas matrizes 3x3 contendo números inteiros. Crie uma terceira matriz contendo a soma dos elementos correspondentes.</p>\n  <span class=\"badge\" title=\"Cada posição depende das posições equivalentes das duas matrizes.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 129 — Diferença de Matrizes</strong>\n  <p>Leia duas matrizes 3x3 e gere uma terceira matriz contendo a diferença entre os elementos correspondentes.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante à soma de matrizes.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 130 — Pesquisa de Notas</strong>\n  <p>Uma escola armazenou as notas de 10 alunos em 4 avaliações. Use uma matriz para informar a média de cada aluno, maior nota, menor nota e média geral da turma.</p>\n  <span class=\"badge\" title=\"Este exercício reúne praticamente todos os conceitos trabalhados neste nível.\">💡 Dica</span>\n</div></section><section class=\"exercise-level\"><h3>Nível 6 — Procedimentos e Funções</h3><p>Objetivo: dividir programas em partes menores, reutilizar código e organizar soluções.</p>\n<section class=\"exercise-solved\">\n  <h3>📘 Exemplo Resolvido — Procedimento simples</h3>\n  <div class=\"example-box\"><strong>Problema:</strong><p>Uma escola deseja exibir uma mensagem de boas-vindas várias vezes durante a execução do programa. Desenvolva um algoritmo utilizando um procedimento para exibir a mensagem.</p></div>\n  <h4>Algoritmo</h4>\n  <pre>algoritmo \"boas_vindas\"\nprocedimento envia_Mensagem()\ninicio\n   escreval(\"Bem-vindo ao Mundo bit Byte!\")\nfimprocedimento\n\ninicio\n   envia_Mensagem()\n   envia_Mensagem()\n   envia_Mensagem()\nfimalgoritmo</pre>\n  <h4>Explicação</h4>\n  <ol><li>Criamos um procedimento chamado aviso.</li><li>O procedimento possui uma tarefa específica.</li><li>Sempre que o procedimento é chamado, um aviso é exibido.</li><li>Isso evita repetir o mesmo comando várias vezes no programa principal.</li></ol>\n</section>\n\n<div class=\"question exercise-item\">\n  <strong>Exercício 131 — Procedimento de Saudação</strong>\n  <p>Crie um procedimento que exiba uma mensagem de boas-vindas ao usuário. No programa principal, chame esse procedimento três vezes.</p>\n  <span class=\"badge\" title=\"Um procedimento pode ser executado quantas vezes forem necessárias.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 132 — Procedimento para Linha Decorativa</strong>\n  <p>Crie um procedimento responsável por exibir uma linha contendo 40 caracteres \"-\". Chame o procedimento antes e depois de uma mensagem principal.</p>\n  <span class=\"badge\" title=\"O procedimento deve ter apenas uma responsabilidade.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 133 — Procedimento para Tabuada</strong>\n  <p>Crie um procedimento que receba um número inteiro e exiba sua tabuada de 1 até 10.</p>\n  <span class=\"badge\" title=\"Procedimentos podem receber informações através de parâmetros.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 134 — Procedimento para Média</strong>\n  <p>Crie um procedimento que receba três notas e exiba a média calculada.</p>\n  <span class=\"badge\" title=\"Os valores podem ser enviados ao procedimento quando ele for chamado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 135 — Procedimento para Aprovação</strong>\n  <p>Crie um procedimento que receba uma nota e exiba aprovado ou reprovado conforme o valor recebido.</p>\n  <span class=\"badge\" title=\"Você precisará utilizar uma estrutura de decisão dentro do procedimento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 136 — Função de Soma</strong>\n  <p>Crie uma função que receba dois números inteiros e retorne a soma deles. No programa principal, exiba o resultado retornado.</p>\n  <span class=\"badge\" title=\"A diferença principal é que a função devolve um valor.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 137 — Função para Média</strong>\n  <p>Crie uma função que receba três notas e retorne a média aritmética.</p>\n  <span class=\"badge\" title=\"O cálculo será feito dentro da função.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 138 — Função Par ou Ímpar</strong>\n  <p>Crie uma função que receba um número inteiro e retorne verdadeiro se o número for par e falso se for ímpar.</p>\n  <span class=\"badge\" title=\"O operador de resto da divisão será útil.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 139 — Função para Maior Valor</strong>\n  <p>Crie uma função que receba dois números e retorne o maior deles.</p>\n  <span class=\"badge\" title=\"Use uma estrutura de decisão antes do retorno.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 140 — Função para Menor Valor</strong>\n  <p>Crie uma função que receba dois números e retorne o menor deles.</p>\n  <span class=\"badge\" title=\"A lógica é semelhante ao exercício anterior.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 141 — Função de Potência</strong>\n  <p>Crie uma função que receba uma base e um expoente inteiro positivo e retorne o resultado da potência.</p>\n  <span class=\"badge\" title=\"Você pode utilizar repetição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 142 — Função de IMC</strong>\n  <p>Crie uma função que receba peso e altura e retorne o valor do IMC calculado.</p>\n  <span class=\"badge\" title=\"A função deve apenas calcular e retornar o resultado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 143 — Função de Fatorial</strong>\n  <p>Crie uma função que receba um número inteiro positivo e retorne seu fatorial.</p>\n  <span class=\"badge\" title=\"Utilize um acumulador para realizar as multiplicações.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 144 — Função para Número Primo</strong>\n  <p>Crie uma função que receba um número inteiro positivo e informe se ele é primo.</p>\n  <span class=\"badge\" title=\"A função deve analisar os divisores do número.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 145 — Procedimento para Cadastro de Aluno</strong>\n  <p>Crie um procedimento que receba nome, nota 1 e nota 2. O procedimento deverá calcular a média e exibir um relatório simples do aluno.</p>\n  <span class=\"badge\" title=\"Agrupe tarefas relacionadas em um único procedimento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 146 — Função para Desconto</strong>\n  <p>Crie uma função que receba o valor de um produto e um percentual de desconto e retorne o valor final.</p>\n  <span class=\"badge\" title=\"A função deve devolver apenas o valor calculado.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 147 — Função para Conversão de Temperatura</strong>\n  <p>Crie uma função que receba uma temperatura em Celsius e retorne o valor correspondente em Fahrenheit.</p>\n  <span class=\"badge\" title=\"A fórmula deve ficar dentro da função.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 148 — Procedimento para Relatório de Vendas</strong>\n  <p>Crie um procedimento que receba nome do vendedor, quantidade vendida e valor total vendido. O procedimento deverá exibir um relatório organizado na tela.</p>\n  <span class=\"badge\" title=\"O procedimento será responsável apenas pela apresentação dos dados.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 149 — Função para Verificar Aprovação</strong>\n  <p>Crie uma função que receba a média de um aluno e retorne verdadeiro para aprovado e falso para reprovado. Considere média mínima igual a 6.</p>\n  <span class=\"badge\" title=\"O retorno da função pode ser lógico.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 150 — Sistema Modularizado</strong>\n  <p>Desenvolva um programa que utilize pelo menos duas funções e dois procedimentos. O programa deve ler dados de um aluno, calcular sua média e exibir um relatório final.</p>\n  <span class=\"badge\" title=\"Divida o problema em partes menores e reutilizáveis.\">💡 Dica</span>\n</div></section><section class=\"exercise-level\"><h3>Nível 7 — Desafios</h3><p>Objetivo: integrar variáveis, decisões, repetições, vetores, matrizes, procedimentos e funções em problemas maiores.</p>\n<div class=\"question exercise-item\">\n  <strong>Exercício 151 — Boletim Escolar Completo</strong>\n  <p>Desenvolva um algoritmo para registrar as notas de uma turma. O programa deve ler o nome de 10 alunos e suas quatro notas bimestrais. Ao final, exiba a média de cada aluno e informe se ele foi aprovado ou reprovado.</p>\n  <span class=\"badge\" title=\"Use vetores para nomes e médias. A aprovação depende de uma decisão.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 152 — Controle de Estoque</strong>\n  <p>Uma loja deseja controlar 10 produtos. Para cada produto, leia o nome, a quantidade em estoque e o preço unitário. Ao final, informe o valor total armazenado em estoque e qual produto possui maior quantidade.</p>\n  <span class=\"badge\" title=\"Cada produto possui mais de uma informação.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 153 — Sistema de Biblioteca</strong>\n  <p>Crie um algoritmo para registrar 10 livros de uma biblioteca. Para cada livro, leia título, autor e quantidade disponível. Ao final, permita pesquisar um título e informe se ele está cadastrado.</p>\n  <span class=\"badge\" title=\"Será necessário percorrer os registros armazenados.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 154 — Controle de Vendas</strong>\n  <p>Uma loja registrou as vendas de 5 vendedores durante 4 semanas. Armazene os valores em uma matriz e informe o total vendido por cada vendedor e o total geral da loja.</p>\n  <span class=\"badge\" title=\"Cada linha pode representar um vendedor.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 155 — Caixa Eletrônico Simples</strong>\n  <p>Desenvolva um algoritmo que leia um valor inteiro para saque e informe quantas notas de 100, 50, 20, 10 e 5 serão necessárias.</p>\n  <span class=\"badge\" title=\"Use divisão inteira e resto da divisão.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 156 — Pesquisa de Satisfação</strong>\n  <p>Uma empresa entrevistou 30 clientes. Cada cliente informou uma nota de 1 a 5. Ao final, exiba a média das avaliações e a quantidade de votos em cada nota.</p>\n  <span class=\"badge\" title=\"Crie contadores separados para cada nota.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 157 — Campeonato Escolar</strong>\n  <p>Leia o nome de 6 equipes e a pontuação de cada uma. Ao final, informe a equipe campeã, a menor pontuação e a média de pontos do campeonato.</p>\n  <span class=\"badge\" title=\"Compare os pontos enquanto percorre os dados.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 158 — Agenda de Contatos</strong>\n  <p>Crie um algoritmo para cadastrar 10 contatos, contendo nome e telefone. Depois, permita pesquisar um nome e exibir o telefone correspondente.</p>\n  <span class=\"badge\" title=\"Use dois vetores relacionados pela mesma posição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 159 — Jogo de Adivinhação</strong>\n  <p>Defina um número secreto dentro do algoritmo. O usuário deve tentar adivinhar o número. A cada tentativa, informe se o valor digitado é maior ou menor que o número secreto. O jogo termina quando acertar.</p>\n  <span class=\"badge\" title=\"Use repetição com condição de parada.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 160 — Sistema de Notas com Funções</strong>\n  <p>Crie um programa modularizado para calcular a média de um aluno. Use uma função para calcular a média e um procedimento para exibir o relatório final.</p>\n  <span class=\"badge\" title=\"Separe cálculo e exibição em partes diferentes.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 161 — Controle de Despesas</strong>\n  <p>Leia os gastos de uma pessoa durante 12 meses. Ao final, exiba o total gasto no ano, a média mensal e o mês com maior despesa.</p>\n  <span class=\"badge\" title=\"Um vetor pode representar os meses do ano.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 162 — Temperaturas do Mês</strong>\n  <p>Leia as temperaturas registradas em 30 dias. Exiba a maior temperatura, a menor temperatura, a média e quantos dias ficaram acima da média.</p>\n  <span class=\"badge\" title=\"Talvez seja necessário percorrer os dados mais de uma vez.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 163 — Urna Eletrônica Simples</strong>\n  <p>Crie um algoritmo que simule uma votação com três candidatos. Leia os votos de 20 eleitores e informe o total de votos de cada candidato e o vencedor.</p>\n  <span class=\"badge\" title=\"Cada candidato precisa de um contador.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 164 — Ranking de Alunos</strong>\n  <p>Leia o nome e a média de 10 alunos. Exiba o aluno com maior média, o aluno com menor média e a média geral da turma.</p>\n  <span class=\"badge\" title=\"Guarde nome e nota na mesma posição lógica.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 165 — Estacionamento</strong>\n  <p>Um estacionamento possui 5 fileiras com 6 vagas. Leia a ocupação das vagas usando 0 para livre e 1 para ocupada. Ao final, informe o total de vagas livres e ocupadas.</p>\n  <span class=\"badge\" title=\"A matriz representa o espaço físico do estacionamento.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 166 — Controle de Produtos Vencidos</strong>\n  <p>Cadastre 10 produtos com nome, quantidade e dias restantes para vencimento. Ao final, informe quais produtos vencem em até 7 dias.</p>\n  <span class=\"badge\" title=\"Use uma decisão durante a exibição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 167 — Simulador de Atendimento</strong>\n  <p>Um sistema deve registrar 15 atendimentos. Para cada atendimento, leia o tempo gasto em minutos. Ao final, informe o tempo médio, o maior tempo e o menor tempo.</p>\n  <span class=\"badge\" title=\"É um exercício de estatística com repetição.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 168 — Pedido de Lanchonete</strong>\n  <p>Crie um algoritmo com um menu de produtos. O usuário deve escolher itens e quantidades. O pedido termina quando escolher a opção sair. Ao final, exiba o total da compra.</p>\n  <span class=\"badge\" title=\"Use repetição enquanto o usuário não escolher sair.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 169 — Análise de Números</strong>\n  <p>Leia 20 números inteiros e informe quantos são positivos, negativos, pares, ímpares e múltiplos de 5.</p>\n  <span class=\"badge\" title=\"Um mesmo número pode entrar em mais de uma classificação.\">💡 Dica</span>\n</div>\n<div class=\"question exercise-item\">\n  <strong>Exercício 170 — Projeto Livre</strong>\n  <p>Crie um algoritmo próprio usando pelo menos três conteúdos estudados no módulo, como decisão, repetição, vetor, matriz, procedimento ou função. O programa deve ter entrada de dados, processamento e saída organizada.</p>\n  <span class=\"badge\" title=\"Pense primeiro no problema, depois nos dados necessários e só então nos comandos.\">💡 Dica</span>\n</div></section>\n</div>\n"}
];
const menu=document.getElementById('menu');
const exerciseLevels=[
  {id:'visualg-nivel-1', label:'Fundamentos'},
  {id:'visualg-nivel-2', label:'Decisão'},
  {id:'visualg-nivel-3', label:'Repetição'},
  {id:'visualg-nivel-4', label:'Vetores'},
  {id:'visualg-nivel-5', label:'Matrizes'},
  {id:'visualg-nivel-6', label:'Modularização'},
  {id:'visualg-nivel-7', label:'Desafios'}
];

function isMobileMenu(){
  return window.matchMedia("(max-width:1050px)").matches;
}

function positionExercisesMenu(){
  const navToggle=document.querySelector(".visualg-exercises-toggle");
  const navTree=document.querySelector(".visualg-exercises-tree");
  if(!navToggle||!navTree||!isMobileMenu()) return;
  const rect=navToggle.getBoundingClientRect();
  const width=Math.min(280, window.innerWidth-24);
  const left=Math.min(Math.max(12, rect.left), window.innerWidth-width-12);
  navTree.style.setProperty("--submenu-left", left+"px");
  navTree.style.setProperty("--submenu-top", (rect.bottom+8)+"px");
}

function closeExerciseMenu(){
  const group=document.querySelector(".visualg-exercises-group");
  const toggle=document.querySelector(".visualg-exercises-toggle");
  if(!group||!toggle) return;
  group.classList.remove("open");
  toggle.setAttribute("aria-expanded","false");
}

function toggleExerciseMenu(){
  const group=document.querySelector(".visualg-exercises-group");
  const toggle=document.querySelector(".visualg-exercises-toggle");
  if(!group||!toggle) return;
  const open=group.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  if(open) positionExercisesMenu();
}

function buildMenu(){
  steps.forEach(s=>{
    if(s.id===99){
      const group=document.createElement('div');
      group.className='nav-group visualg-exercises-group';

      const b=document.createElement('button');
      b.className='nav-btn nav-toggle visualg-exercises-toggle';
      b.id='btn-'+s.id;
      b.type='button';
      b.setAttribute('aria-expanded','false');
      b.innerHTML='<span>99 Exercícios</span><span class="nav-caret" aria-hidden="true">▸</span>';
      b.onclick=toggleExerciseMenu;

      const tree=document.createElement('div');
      tree.className='nav-tree visualg-exercises-tree';
      tree.setAttribute('aria-label','Submenu dos exercícios de VisuAlg');

      exerciseLevels.forEach((level,idx)=>{
        const a=document.createElement('button');
        a.type='button';
        a.className='nav-sub';
        a.dataset.level=level.id;
        a.textContent=level.label;
        a.onclick=()=>goToExerciseLevel(level.id);
        tree.appendChild(a);
      });

      group.appendChild(b);
      group.appendChild(tree);
      menu.appendChild(group);
      return;
    }

    const b=document.createElement('button');
    b.className='nav-btn';
    b.textContent=s.menu;
    b.id='btn-'+s.id;
    b.onclick=()=>showStep(s.id);
    menu.appendChild(b);
  });
}

buildMenu();
window.addEventListener("resize",positionExercisesMenu);
document.addEventListener("click",(ev)=>{
  const group=document.querySelector(".visualg-exercises-group");
  if(group && !group.contains(ev.target) && isMobileMenu()) closeExerciseMenu();
});

function prepareExerciseLevelAnchors(){
  const intro=document.getElementById('introView');
  if(!intro) return;
  const levels=[...intro.querySelectorAll('.exercise-level')];
  levels.forEach((level,idx)=>{
    if(exerciseLevels[idx]) level.id=exerciseLevels[idx].id;
  });
}

function markActiveExerciseLevel(levelId){
  document.querySelectorAll('.nav-sub').forEach(a=>a.classList.toggle('active',a.dataset.level===levelId));
}

function goToExerciseLevel(levelId){
  showStep(99);
  markActiveExerciseLevel(levelId);
  const target=document.getElementById(levelId);
  const intro=document.getElementById('introView');
  if(!target||!intro) return;

  if(isMobileMenu()){
    const y=target.getBoundingClientRect().top+window.pageYOffset-112;
    window.scrollTo({top:Math.max(0,y),behavior:'auto'});
    closeExerciseMenu();
  }else{
    intro.scrollTo({top:Math.max(0,target.offsetTop-18),behavior:'auto'});
  }
}
function showStep(id){const s=steps.find(x=>x.id===id);document.querySelectorAll('.nav-btn,.nav-sub').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+id).classList.add('active');document.getElementById('stepTitle').textContent=s.title;document.getElementById('objective').innerHTML='<strong>Objetivo:</strong> '+s.objective;const ws=document.getElementById('workspace');let intro=document.getElementById('introView');if(intro)intro.remove();const hideAll=()=>{['codeCard','resultCard','newCodeCard','noteWrap'].forEach(x=>document.getElementById(x).style.display='none')};if(id===0){hideAll();intro=document.createElement('section');intro.id='introView';intro.className='intro-view';intro.innerHTML=`

<h3>Como utilizar esta apostila</h3>

<p><strong>Versão revisada</strong></p>

<p>Esta apostila foi desenvolvida para alunos que estão tendo o primeiro contato com a programação. O material apresenta os conceitos de forma gradual, combinando explicações teóricas e atividades práticas para facilitar a compreensão e o aprendizado.</p>

<p>Nesta versão, as páginas teóricas possuem um layout próprio, os conteúdos conceituais foram ampliados e cada etapa conta com um painel <strong>“O que foi trabalhado”</strong>, destacando os principais conceitos, comandos e estruturas estudados.</p>

<div class="intro-grid">

<div class="intro-box">
<strong>1. Estudo da teoria</strong><br>
Alguns assuntos são apresentados em páginas exclusivas de teoria, sem exemplos de código. Essas seções têm o objetivo de explicar conceitos fundamentais antes da aplicação prática.
</div>

<div class="intro-box">
<strong>2. Análise dos exemplos</strong><br>
Nos tópicos práticos, cada exemplo apresenta um algoritmo completo e funcional. O aluno deve ler o código com atenção, compreender sua estrutura e identificar a finalidade de cada comando.
</div>

<div class="intro-box">
<strong>3. Copiar e executar</strong><br>
Todos os códigos foram preparados para serem copiados diretamente para o VisuAlg. Após colar o algoritmo no editor, basta executá-lo para observar seu funcionamento.
</div>

</div>

<div class="quick">

<h3>Primeiros passos no VisuAlg</h3>

<div class="quick-grid">

<div class="quick-card">
<strong>1. Abrir o programa</strong><br>
Inicie o VisuAlg e crie um novo algoritmo.
</div>

<div class="quick-card">
<strong>2. Inserir o código</strong><br>
Copie o código da etapa estudada e cole-o no editor do VisuAlg.
</div>

<div class="quick-card">
<strong>3. Executar o algoritmo</strong><br>
Utilize a tecla F9 ou clique em Executar.
</div>

<div class="quick-card">
<strong>4. Informar os dados solicitados</strong><br>
Quando o algoritmo solicitar informações, digite os valores no console e pressione Enter.
</div>

<div class="quick-card">
<strong>5. Verificar possíveis erros</strong><br>
Confira acentuação, aspas, parênteses, nomes de variáveis e comandos como fimse, fimpara e fimalgoritmo.
</div>

<div class="quick-card">
<strong>6. Salvar os exercícios</strong><br>
Salve cada atividade com um nome organizado para facilitar revisões futuras.
</div>

</div>
</div>

`;ws.appendChild(intro);return}if(s.theoryPage){hideAll();intro=document.createElement('section');intro.id='introView';intro.className='intro-view';intro.innerHTML=s.content;ws.appendChild(intro);if(id===99){prepareExerciseLevelAnchors();}return}['codeCard','resultCard','newCodeCard'].forEach(x=>document.getElementById(x).style.display='flex');document.getElementById('noteWrap').style.display='grid';document.getElementById('fullCode').textContent=s.code||'';document.getElementById('newCode').textContent=s.added||'';document.getElementById('preview').textContent=s.out||'';document.getElementById('note').innerHTML=s.note||''}
function copyText(id){navigator.clipboard.writeText(document.getElementById(id).textContent)}showStep(0);
