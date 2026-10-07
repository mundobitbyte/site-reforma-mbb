function prepararFundamentosMbb(){
  const intro = document.getElementById('intro');
  const p1 = document.getElementById('p1');
  if(!intro || !p1) return;

  if(!document.getElementById('fund-experimentar')){
    intro.insertAdjacentHTML('afterend', `
      <section class="project" id="fund-experimentar">
        <div class="projectHead"><span class="badge">Fundamentos</span><div><h2>Experimentar — bancada de componentes</h2><p>Antes de ligar peças desconhecidas, aprenda a reconhecer o que cada uma pode fazer e por que ela aparece em um circuito.</p></div></div>
        <div class="cards">
          <article class="card wide"><h3>Por que esta etapa existe?</h3><p>Imagine abrir um carregador, uma placa de brinquedo ou um equipamento eletrônico e encontrar peças que não se parecem com LED, botão ou resistor. Se você não souber ao menos <strong>o que procurar, que cuidado tomar e onde obter informação</strong>, a montagem vira adivinhação.</p><p>Aqui o objetivo não é transformar o início do curso em eletrônica avançada. É aprender a reconhecer alguns componentes que aparecem em circuitos reais e entender <strong>que problema cada um costuma ajudar a resolver</strong>.</p></article>

          <article class="card"><h3>Quando um capacitor passa a fazer sentido?</h3><p>Nem sempre queremos que uma tensão mude de forma instantânea. Em fontes e circuitos eletrônicos, também pode ser útil <strong>suavizar pequenas variações</strong> ou manter energia por um curto intervalo.</p><p>O capacitor consegue armazenar carga temporariamente. Por isso aparece em filtragem, estabilização, temporização e desacoplamento. Se for eletrolítico, a polaridade e a tensão nominal precisam ser respeitadas.</p></article>

          <article class="card"><h3>Onde entra um indutor?</h3><p>Fontes e conversores precisam controlar a forma como a energia elétrica circula. Nesses circuitos, é comum encontrar uma bobina: o <strong>indutor</strong>.</p><p>Ele armazena energia em um campo magnético enquanto a corrente passa. É usado em filtros, fontes e conversão de energia. Nesta etapa você vai reconhecê-lo e entender sua função geral; um projeto forçado com indutor não ajudaria mais do que uma aplicação real bem escolhida.</p></article>

          <article class="card"><h3>Por que existem circuitos integrados?</h3><p>Imagine precisar montar dezenas ou centenas de pequenos componentes toda vez que quisesse repetir uma função eletrônica. Um <strong>circuito integrado (CI)</strong> reúne muitos elementos em um único chip para executar uma função específica.</p><p>Você já conhece um exemplo: o <strong>microcontrolador do Arduino Uno</strong> é um circuito integrado. No Uno R3, normalmente o ATmega328P é o componente principal que executa o programa. Outros CIs podem atuar como drivers, memórias, temporizadores, interfaces e muitas outras funções.</p></article>

          <article class="card wide"><h3>Como reconhecer um CI sem “chutar” a ligação</h3><p>O corpo do chip costuma trazer uma identificação impressa e uma marca de orientação, como ponto ou chanfro. Os vários terminais não têm a mesma função: alguns podem ser alimentação, outros entrada, saída ou controle.</p><p>Por isso o <strong>datasheet</strong> entra antes da ligação. Ele informa o que o componente faz, sua tensão de trabalho, pinagem e limites. Se você não sabe qual é o CI, a decisão correta é pesquisar antes de energizar.</p></article>

          <article class="card"><h3>Registro de bancada</h3><p>Para cada peça, anote: <strong>nome, identificação, função geral, polaridade/orientação quando houver, onde costuma aparecer e um cuidado de manuseio</strong>.</p></article>

          <article class="card exercise wide"><h3>Atividade prática — do componente conhecido ao desconhecido</h3><ol><li>Localize no Arduino Uno o microcontrolador principal e reconheça que ele é um <strong>circuito integrado</strong>. O formato do encapsulamento pode variar entre placas.</li><li>Separe fisicamente um capacitor e um indutor do kit e registre como você os diferenciou.</li><li>Se houver outro CI disponível no kit, leia apenas sua identificação e pesquise o datasheet. Não o alimente ainda.</li><li>Para cada item, responda: <strong>que problema este componente costuma ajudar a resolver?</strong></li></ol></article>
        </div>
      </section>
    `);
  }

  if(!document.getElementById('fund-minilabs')){
    p1.insertAdjacentHTML('afterend', `
      <section class="project" id="fund-minilabs">
        <div class="projectHead"><span class="badge">Prática</span><div><h2>Mini-laboratórios — observar componentes funcionando</h2><p>Depois do primeiro circuito com LED, use experiências curtas para ligar conceito, necessidade e comportamento físico.</p></div></div>
        <div class="cards">
          <article class="card wide"><h3>Mini-lab 1 — Por que um capacitor seria útil?</h3><p><strong>Situação:</strong> você já montou o LED protegido e percebeu que ele apaga assim que a alimentação é retirada. Mas e se quisermos observar um componente capaz de guardar energia por um breve intervalo?</p><p><strong>Componentes:</strong> Arduino Uno usado apenas como fonte de 5 V e GND, protoboard, 1 LED, 1 resistor de 220 Ω, 1 resistor de 1 kΩ, 1 capacitor eletrolítico entre 470 µF e 1000 µF com tensão nominal de pelo menos 10 V e jumpers.</p></article>

          <article class="card wide"><h3>Montagem</h3><figure class="circuitFigure"><img class="circuitPhoto" src="../img/arduino/fundamentos/lab-capacitor-rc.svg" alt="Diagrama do mini-laboratório de capacitor: 5 V passa por resistor de 220 ohms até um nó ligado ao capacitor eletrolítico e a um ramo com resistor de 1 quilohm e LED até o GND." loading="lazy" decoding="async"/><figcaption>5 V → 220 Ω → nó de carga. No mesmo nó ficam o capacitor e o ramo 1 kΩ → LED → GND. O terminal negativo do capacitor vai ao GND.</figcaption></figure><p><strong>Atenção:</strong> respeite a polaridade do capacitor eletrolítico e use apenas os 5 V do Arduino nesta experiência.</p></article>

          <article class="card"><h3>Como testar</h3><ol><li>Com o circuito desligado, confira polaridade do LED e do capacitor.</li><li>Conecte o jumper de 5 V e observe o LED acender.</li><li>Aguarde alguns segundos para o capacitor carregar.</li><li>Retire <strong>apenas o jumper de 5 V</strong>, mantendo o GND conectado.</li><li>Observe se o LED permanece aceso ou enfraquece por um breve instante.</li><li>Repita a experiência removendo o capacitor e compare.</li></ol></article>

          <article class="card"><h3>O que essa experiência responde?</h3><p>Sem o capacitor, retirar os 5 V interrompe praticamente de imediato a alimentação do LED. Com o capacitor carregado, parte da energia armazenada é liberada durante a descarga. Assim, “armazenar carga” deixa de ser apenas uma frase e vira um comportamento observável.</p></article>

          <article class="card wide"><h3>Mini-lab 2 — CI: primeiro entender, depois ligar</h3><p><strong>Situação:</strong> você encontra um chip com vários terminais. Antes de perguntar “onde ligo?”, a pergunta correta é: <strong>que CI é esse e que função ele executa?</strong></p><ol><li>Comece pelo microcontrolador do próprio Arduino Uno: ele é um CI que executa o programa e controla entradas e saídas.</li><li>Observe a identificação impressa do componente principal ou a indicação equivalente da placa.</li><li>Se houver outro CI no kit, pesquise seu código no datasheet.</li><li>Registre: função, tensão de alimentação, pinos de alimentação, marca de orientação e uma aplicação possível.</li></ol><p><strong>Regra:</strong> se o componente não foi identificado e sua alimentação não está clara, a prática termina na pesquisa. Não existe ganho pedagógico em ligar um chip desconhecido “para ver o que acontece”.</p></article>

          <article class="card worked wide"><h3>E o indutor?</h3><p>Você já sabe por que ele existe: fontes, filtros e conversores precisam controlar energia e corrente, e o indutor participa desse tipo de circuito. Neste momento, reconhecer o componente, associá-lo a essas aplicações e saber que seu comportamento envolve campo magnético é suficiente. Ele ganhará um circuito funcional quando houver uma necessidade real que justifique isso — não apenas para marcar que foi usado.</p></article>
        </div>
      </section>
    `);
  }

  const mini = document.getElementById('fund-minilabs');
  if(mini && !document.getElementById('fund-desafios')){
    mini.insertAdjacentHTML('afterend', `
      <section class="project" id="fund-desafios">
        <div class="projectHead"><span class="badge">Transferir</span><div><h2>Desafios — escolher e justificar</h2><p>Sem receita pronta: identifique a necessidade antes de escolher o componente.</p></div></div>
        <div class="cards">
          <article class="card"><h3>1. LED sem proteção</h3><p>Um indicador luminoso será ligado ao Arduino. Que componente precisa limitar a corrente e que problema ele evita?</p></article>
          <article class="card"><h3>2. Energia por um instante</h3><p>Você quer que uma pequena quantidade de energia continue disponível por pouco tempo depois que a alimentação for retirada. Qual componente estudado combina com essa necessidade?</p></article>
          <article class="card"><h3>3. CI desconhecido</h3><p>Você encontra um chip com vários terminais dentro de um kit. Antes de conectá-lo, que informações precisa obter e onde procuraria essas informações?</p></article>
          <article class="card"><h3>4. Fonte e conversão</h3><p>Você abre uma fonte eletrônica e encontra uma pequena bobina. Que componente provavelmente é esse e por que esse tipo de circuito costuma utilizá-lo?</p></article>
          <article class="card wide"><h3>5. Diagnóstico de bancada</h3><p>Escolha dois componentes desta etapa e explique: <strong>que necessidade pode justificar seu uso, como identificá-los fisicamente, qual cuidado de manuseio adotaria e que informação consultaria antes de ligá-los</strong>.</p></article>
          <article class="card exercise wide"><h3>Desafio de transferência</h3><p>Imagine que você recebeu uma caixa com peças misturadas. Organize um procedimento para separar resistores, capacitores, indutores e circuitos integrados sem energizar nada. Não basta dizer o nome: explique <strong>que pista visual usaria, que problema cada componente costuma resolver e em que momento consultaria um datasheet</strong>.</p></article>
        </div>
      </section>
    `);
  }
}

window.MbbArduinoFundamentos = { preparar: prepararFundamentosMbb };
