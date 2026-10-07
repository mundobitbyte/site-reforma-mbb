(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const get = id => window.DS_MATH_LESSONS.find(l => l.id === id);
  const apply = (id, objective, content) => {
    const lesson = get(id);
    if (!lesson) return;
    lesson.objective = objective;
    lesson.content = content;
    lesson.mbbViva = true;
  };

  apply('porcentagem',
    'Entender porcentagem como comparação com uma base de 100, descobrir a base antes de calcular, interpretar aumentos, descontos e variações sucessivas e compreender juros como porcentagens aplicadas ao longo do tempo.',
    `
      <div class="hero-box"><span class="card-title">15% não diz quase nada sozinho</span><p>“Subiu 15%.” Parece uma informação completa, mas falta a pergunta mais importante: <strong>15% de quê?</strong></p><p>Se um preço de R$ 100 sobe 15%, aumenta R$ 15. Se um preço de R$ 1.000 sobe os mesmos 15%, aumenta R$ 150. A porcentagem é a mesma; a base mudou.</p></div>

      <div class="mbb-contextualizacao"><strong>Porcentagem é uma linguagem de comparação</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Descontos, reajustes, juros, pesquisas, inflação e desempenho escolar usam porcentagem para comparar uma parte ou uma mudança com um valor de referência.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Uso de armazenamento em 82%, progresso de download em 75%, taxa de erros e melhora de desempenho só fazem sentido quando sabemos qual total ou valor inicial está sendo usado.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> qual valor representa 100% nesta situação?</div></div>

      <h3>1. O símbolo % significa “por cento”</h3>
      <p><span class="math">18%</span> significa 18 de cada 100:</p>
      <p><span class="math">18%=18/100=0,18</span>.</p>
      <p>Por isso 50% é metade, 25% é um quarto e 100% corresponde ao valor inteiro de referência.</p>
      <div class="note-box"><strong>Antes de multiplicar qualquer coisa, encontre a base.</strong><p>A base é o valor que está sendo tratado como 100%.</p></div>

      <h3>2. Calcular uma parte: “15% de 240”</h3>
      <div class="example-box"><span class="card-title">Um desconto de 15%</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Identifique a base</strong><p>R$ 240 é 100% do preço original.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Transforme 15%</strong><p><span class="math">15/100=0,15</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule a parte</strong><p><span class="math">0,15·240=36</span>. O desconto é R$ 36.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Encontre o preço final</strong><p><span class="math">240−36=204</span>. O produto passa a custar R$ 204.</p></div></div></div>
      <p>A ideia geral pode ser escrita como:</p>
      <p><span class="formula">parte=(p/100)·base</span></p>

      <h3>3. Também podemos descobrir a porcentagem</h3>
      <p>Em uma turma de 40 alunos, 10 escolheram uma opção. Que porcentagem isso representa?</p>
      <p>Compare a parte com o total:</p>
      <p><span class="math">10/40=0,25=25%</span>.</p>
      <p>Agora a pergunta era inversa: conhecíamos a parte e a base e queríamos descobrir o percentual.</p>

      <h3>4. E se a pergunta for descobrir o total?</h3>
      <div class="example-box"><span class="card-title">R$ 60 correspondem a 20% de qual valor?</span><p>Se 20% do total valem 60:</p><p><span class="math">0,20·V=60</span>.</p><p><span class="math">V=60/0,20=300</span>.</p><div class="mbb-professor-pensa"><strong>Confira pela ideia.</strong><p>20% de 300 são 60. Portanto R$ 300 é a base de 100%.</p></div></div>

      <h3>5. Variação percentual: mudança em relação ao valor inicial</h3>
      <p>Um indicador passa de 80 para 92.</p>
      <ol class="steps"><li>Mudança absoluta: <span class="math">92−80=12</span>.</li><li>Compare com o valor inicial: <span class="math">12/80=0,15</span>.</li><li>Converta: <span class="math">0,15=15%</span>.</li></ol>
      <p><span class="formula">variação %=(novo−antigo)/antigo·100</span></p>
      <p>Dividimos pelo valor antigo porque é ele que funciona como referência da mudança.</p>

      <h3>6. Fatores multiplicativos simplificam aumentos e descontos</h3>
      <div class="two-col"><div class="mini-card"><strong>Aumento de 20%</strong><p>O novo valor é 120% do antigo: multiplique por <span class="math">1,20</span>.</p></div><div class="mini-card"><strong>Desconto de 20%</strong><p>Restam 80% do valor: multiplique por <span class="math">0,80</span>.</p></div></div>
      <p>Esse raciocínio fica especialmente importante quando existem várias porcentagens sucessivas.</p>

      <h3>7. Por que +20% e −20% não se anulam?</h3>
      <div class="example-box"><span class="card-title">Comece com R$ 100</span><p>Aumento de 20%: <span class="math">100·1,20=120</span>.</p><p>Agora o desconto de 20% usa uma nova base: <span class="math">120·0,80=96</span>.</p><p>O resultado final é R$ 96, não R$ 100.</p><div class="mbb-professor-pensa"><strong>A chave é a base.</strong><p>O primeiro 20% foi calculado sobre 100; o segundo, sobre 120. Percentuais iguais não significam variações absolutas iguais quando a base muda.</p></div></div>

      <h3>8. Percentuais podem ser maiores que 100% ou menores que 1%</h3>
      <p>150% significa 1,5 vez a base. 0,5% significa meio de cada 100, isto é, <span class="math">0,005</span> em forma decimal.</p>
      <p>O símbolo % não limita o valor entre 0 e 100; ele apenas indica uma comparação por 100.</p>

      <h3>9. Juros: porcentagem repetida ao longo do tempo</h3>
      <div class="recall-box"><strong>Conheça as letras antes das fórmulas</strong><p><span class="math">C</span> = capital inicial; <span class="math">i</span> = taxa por período em decimal; <span class="math">t</span> = número de períodos; <span class="math">M</span> = montante final.</p></div>
      <div class="two-col"><div class="mini-card"><strong>Juros simples</strong><p>A taxa é calculada sempre sobre o capital inicial. O acréscimo por período é constante.</p><p><span class="math">M=C(1+it)</span></p></div><div class="mini-card"><strong>Juros compostos</strong><p>A taxa incide sobre o saldo acumulado. A base muda a cada período.</p><p><span class="math">M=C(1+i)^t</span></p></div></div>
      <div class="example-box"><span class="card-title">R$ 1.000 a 2% ao mês por 3 meses</span><p><strong>Simples:</strong> 2% de 1.000 = R$ 20 por mês. <span class="math">1000+3·20=1060</span>.</p><p><strong>Compostos:</strong> 1º mês = 1.020; 2º = 1.040,40; 3º ≈ 1.061,21.</p><div class="mbb-professor-pensa"><strong>Veja a diferença antes de decorar as fórmulas.</strong><p>No simples, a base permanece 1.000. No composto, cada novo saldo vira a base do período seguinte.</p></div></div>

      <h3>10. Na tecnologia e na programação: números percentuais precisam de referência</h3>
      <div class="example-box"><span class="card-title">“O sistema ficou 30% mais rápido”</span><p>Se uma tarefa levava 10 s e o tempo caiu para 7 s, houve redução de 30% no tempo. Mas dizer “30% mais rápido” pode ser ambíguo se não definirmos qual grandeza está sendo comparada.</p><p>Em relatórios, prefira dizer explicitamente: <strong>“o tempo caiu de 10 s para 7 s, redução de 30%”</strong>.</p><div class="mbb-professor-pensa"><strong>Porcentagem também é comunicação.</strong><p>Uma conta correta pode gerar uma interpretação ruim se a base e a grandeza não estiverem claras.</p></div></div>

      <h3>11. Tente você</h3>
      <div class="task-box"><h4>Um salário passa de R$ 2.500 para R$ 2.700. Qual foi o aumento percentual?</h4><div class="mbb-pause-question"><strong>Antes da divisão:</strong> qual valor é a base — o antigo ou o novo?</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Mudança</strong><p><span class="math">2700−2500=200</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Base</strong><p>Comparamos a mudança com o salário inicial: 2.500.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Percentual</strong><p><span class="math">200/2500=0,08=8%</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Confira</strong><p>8% de 2.500 são R$ 200; somando ao valor inicial, chegamos a R$ 2.700.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Circule mentalmente a base de 100%. Em descontos sucessivos e variações, ela pode mudar no meio do problema. Esse detalhe costuma ser mais importante do que a multiplicação.</p></div>
      <div class="ok-box"><strong>Essência:</strong> porcentagem é uma comparação com uma base. Se você sabe “percentual de quê?”, quase todo o restante pode ser reconstruído.</div>
      <button class="action-button primary" data-practice-topic="porcentagem" type="button">Praticar este assunto</button>
    `
  );

  apply('ladrilhamento',
    'Investigar ladrilhamentos como problema de encaixe, construir o critério de 360° a partir dos ângulos no vértice, derivar o ângulo interno de polígonos regulares e distinguir ladrilhamentos com uma ou várias formas.',
    `
      <div class="hero-box"><span class="card-title">Por que alguns pisos encaixam e outros deixam buracos?</span><p>Quadrados cobrem facilmente um piso. Triângulos equiláteros também. Hexágonos aparecem em colmeias. Mas tente repetir apenas pentágonos regulares e algo começa a dar errado.</p><p>O problema não é “a forma ser bonita ou feia”. Está nos <strong>ângulos que se encontram em cada ponto</strong>.</p></div>

      <div class="mbb-contextualizacao"><strong>Encaixe é geometria aplicada</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Pisos, mosaicos, revestimentos e padrões decorativos precisam preencher uma superfície sem deixar buracos nem criar sobreposições.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Mapas 2D de jogos usam tiles, interfaces usam grades e padrões digitais repetem formas para construir superfícies de maneira eficiente.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> que condição os ângulos precisam cumprir para fechar perfeitamente ao redor de um ponto?</div></div>

      <h3>1. Olhe para um único ponto de encontro</h3>
      <p>Uma volta completa ao redor de um ponto mede <strong>360°</strong>. Se várias peças se encontram ali, seus ângulos precisam somar exatamente 360°.</p>
      <div class="three-col"><div class="mini-card"><strong>6 triângulos equiláteros</strong><p><span class="math">6·60°=360°</span>.</p></div><div class="mini-card"><strong>4 quadrados</strong><p><span class="math">4·90°=360°</span>.</p></div><div class="mini-card"><strong>3 hexágonos regulares</strong><p><span class="math">3·120°=360°</span>.</p></div></div>
      <p>Nos três casos, o encontro fecha sem sobra e sem sobreposição.</p>

      <h3>2. O que é um polígono regular?</h3>
      <p>Um polígono regular possui todos os lados iguais e todos os ângulos internos iguais. Um vértice é o ponto em que dois lados se encontram.</p>
      <p>Se soubermos o ângulo interno, podemos investigar quantas peças iguais cabem ao redor de um vértice.</p>

      <h3>3. De onde vem a soma dos ângulos internos?</h3>
      <p>Escolha um vértice de um polígono convexo e trace diagonais para dividir a forma em triângulos.</p>
      <p>Um polígono de n lados se divide em <span class="math">n−2</span> triângulos. Como cada triângulo possui 180°:</p>
      <p><span class="formula">soma interna=(n−2)·180°</span></p>
      <p>Não é uma fórmula isolada: ela apenas conta quantos triângulos foram formados.</p>

      <h3>4. E o ângulo de um polígono regular?</h3>
      <p>Se todos os n ângulos são iguais, dividimos a soma por n:</p>
      <p><span class="formula">ângulo interno=((n−2)·180°)/n</span></p>
      <div class="example-box"><span class="card-title">Pentágono regular</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>n=5</strong><p>Um pentágono possui 5 lados.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Soma interna</strong><p><span class="math">(5−2)·180°=540°</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Cada ângulo</strong><p><span class="math">540°/5=108°</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Teste o encaixe</strong><p><span class="math">360°/108°≈3,33</span>. Não existe um número inteiro de pentágonos regulares iguais que feche exatamente a volta.</p></div></div></div>

      <h3>5. Por que “360 dividido pelo ângulo” precisa dar inteiro?</h3>
      <p>Não podemos colocar 3,33 peças completas ao redor de um ponto. Se o resultado não é inteiro, peças iguais daquele polígono regular não conseguem fechar sozinhas um vértice desse tipo.</p>
      <div class="note-box"><strong>Esse critério vale para o ladrilhamento regular com um único tipo de polígono.</strong><p>Combinações de formas diferentes podem funcionar mesmo quando uma delas não ladrilha sozinha.</p></div>

      <h3>6. Formas diferentes podem cooperar</h3>
      <div class="example-box"><span class="card-title">Octógonos e quadrados</span><p>Um octógono regular possui ângulo interno de 135°. Sozinho, <span class="math">360/135≈2,67</span>, então não fecha.</p><p>Mas dois octógonos e um quadrado formam:</p><p><span class="math">135°+135°+90°=360°</span>.</p><div class="mbb-professor-pensa"><strong>A conclusão mudou.</strong><p>O octógono não ladrilha sozinho de forma regular, mas pode participar de um padrão com outra forma.</p></div></div>

      <h3>7. Investigar é melhor do que decorar uma lista</h3>
      <p>Quando receber um polígono novo:</p>
      <ol class="steps"><li>Descubra ou calcule seu ângulo interno.</li><li>Teste quantas peças caberiam em 360°.</li><li>Se não fechar sozinho, verifique se uma combinação de ângulos pode completar 360°.</li><li>Use o desenho para visualizar e a soma dos ângulos para justificar.</li></ol>

      <h3>8. Na tecnologia e na programação: mapas por tiles</h3>
      <div class="example-box"><span class="card-title">Construindo cenários com peças repetidas</span><p>Jogos 2D frequentemente dividem o cenário em pequenas peças chamadas tiles. Grades quadradas são simples porque cada célula encaixa perfeitamente com as vizinhas.</p><p>Existem também grades hexagonais, muito usadas quando seis vizinhos ao redor de uma célula fazem sentido para o projeto.</p><div class="mbb-professor-pensa"><strong>A escolha da forma muda a estrutura do espaço.</strong><p>Não é apenas decoração: quantidade de vizinhos, movimentação e organização do mapa podem depender da geometria escolhida.</p></div></div>

      <h3>9. Tente você</h3>
      <div class="task-box"><h4>Um polígono regular tem 8 lados. Calcule seu ângulo interno e verifique se octógonos regulares sozinhos podem ladrilhar o plano encontrando-se todos do mesmo modo em cada vértice.</h4><div class="mbb-pause-question"><strong>Antes de dividir 360:</strong> derive primeiro o ângulo interno.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Soma interna</strong><p><span class="math">(8−2)·180°=1080°</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Ângulo interno</strong><p><span class="math">1080°/8=135°</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Teste</strong><p><span class="math">360°/135°≈2,67</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Conclusão</strong><p>Como não há quantidade inteira de octógonos iguais fechando 360°, eles não ladrilham sozinhos nesse padrão regular.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Faça o desenho, mas não pare nele. A justificativa matemática normalmente aparece na soma de 360° ao redor do vértice e na medida do ângulo interno.</p></div>
      <div class="ok-box"><strong>Essência:</strong> ladrilhar é resolver um problema de encaixe angular. O 360° não é uma regra decorada; é uma volta completa ao redor do ponto de encontro.</div>
      <button class="action-button primary" data-practice-topic="ladrilhamento" type="button">Praticar este assunto</button>
    `
  );

  apply('grandezas',
    'Interpretar grandezas compostas a partir do significado das unidades, construir relações de razão e produto, converter unidades sem depender de regras decoradas e resolver situações de velocidade, densidade e transmissão de dados.',
    `
      <div class="hero-box"><span class="card-title">A unidade muitas vezes entrega a operação</span><p>“60 km/h” não é apenas um número com letras. Significa <strong>60 quilômetros para cada hora</strong>. “30 MB/s” significa <strong>30 megabytes para cada segundo</strong>.</p><p>Se você aprende a ler a unidade, muitas fórmulas deixam de parecer arbitrárias.</p></div>

      <div class="mbb-contextualizacao"><strong>Algumas informações nascem da combinação de outras</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Velocidade combina distância e tempo; densidade combina massa e volume; consumo pode relacionar quantidade e distância.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>MB/s, Mb/s, requisições por segundo, pixels por polegada e tempo médio de resposta são grandezas usadas para descrever sistemas e dispositivos.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> o que a própria unidade está dizendo sobre como as grandezas foram combinadas?</div></div>

      <h3>1. A palavra “por” costuma indicar divisão</h3>
      <p>Quilômetros <strong>por</strong> hora → <span class="math">km/h</span>.</p>
      <p>Megabytes <strong>por</strong> segundo → <span class="math">MB/s</span>.</p>
      <p>Habitantes <strong>por</strong> quilômetro quadrado → <span class="math">hab/km²</span>.</p>
      <div class="note-box"><strong>Leia em voz alta.</strong><p>A unidade funciona quase como uma frase compacta que descreve a conta.</p></div>

      <h3>2. Velocidade nasce de distância ÷ tempo</h3>
      <div class="example-box"><span class="card-title">180 km em 3 horas</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>O que queremos saber?</strong><p>Quantos quilômetros foram percorridos para cada hora.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Monte a razão</strong><p><span class="math">180 km/3 h</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Divida</strong><p><span class="math">180/3=60</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Leia o resultado</strong><p>Velocidade média = <strong>60 km/h</strong>, isto é, 60 quilômetros por hora.</p></div></div></div>

      <h3>3. Densidade responde “quanta massa cabe em cada volume?”</h3>
      <p>Se um material possui 800 g ocupando 100 cm³:</p>
      <p><span class="math">d=800/100=8 g/cm³</span>.</p>
      <p>A unidade diz exatamente o significado: 8 gramas para cada centímetro cúbico.</p>

      <h3>4. Nem toda grandeza composta vem de uma divisão</h3>
      <p>Área é produto: <span class="math">comprimento×largura</span>. Por isso sua unidade é, por exemplo, <span class="math">m·m=m²</span>.</p>
      <p>O objetivo não é decorar “dividir ou multiplicar”; é entender como as medidas originais foram combinadas para produzir a nova grandeza.</p>

      <h3>5. Converter unidades sem decorar 3,6</h3>
      <p>Vamos transformar 72 km/h em m/s.</p>
      <ol class="steps"><li><span class="math">72 km=72.000 m</span>.</li><li><span class="math">1 h=3.600 s</span>.</li><li>Mantenha a razão: <span class="math">72.000 m/3.600 s=20 m/s</span>.</li></ol>
      <p>Daí surge a regra prática “dividir por 3,6”. Se você esquecer a regra, consegue reconstruí-la pelas unidades.</p>

      <h3>6. MB e Mb não são a mesma coisa</h3>
      <div class="two-col"><div class="mini-card"><strong>B maiúsculo: byte</strong><p>1 byte = 8 bits. MB significa megabytes.</p></div><div class="mini-card"><strong>b minúsculo: bit</strong><p>Mb significa megabits. Conexões de rede costumam ser anunciadas em Mb/s.</p></div></div>
      <p>Portanto, para converter uma quantidade em MB para megabits, multiplicamos por 8.</p>

      <h3>7. Na tecnologia e na programação: quanto tempo leva um download?</h3>
      <div class="example-box"><span class="card-title">Arquivo de 600 MB em uma taxa efetiva de 80 Mb/s</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Unifique as unidades</strong><p>A taxa está em megabits; o arquivo está em megabytes. <span class="math">600 MB=600·8=4.800 Mb</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Leia a taxa</strong><p>80 Mb/s significa 80 megabits por segundo.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Calcule o tempo</strong><p><span class="math">4800 Mb/(80 Mb/s)=60 s</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>Sem considerar perdas e variações, o download levaria 60 segundos.</p></div></div></div>

      <h3>8. As unidades também ajudam a conferir a conta</h3>
      <p>Veja o download:</p>
      <p><span class="math">Mb ÷ (Mb/s)=s</span>.</p>
      <p>Os megabits se cancelam e sobra segundo. Isso é um forte sinal de que organizamos corretamente a relação.</p>
      <div class="danger-box"><strong>Se a unidade final não combina com o que foi pedido, pare.</strong><p>Talvez você tenha invertido a razão, esquecido uma conversão ou misturado medidas incompatíveis.</p></div>

      <h3>9. Exemplo inverso: descobrir uma massa pela densidade</h3>
      <div class="example-box"><span class="card-title">d=m/V</span><p>Se <span class="math">d=5 g/cm³</span> e <span class="math">V=200 cm³</span>, queremos m.</p><p><span class="math">5=m/200</span>. Multiplicando por 200: <span class="math">m=1000 g</span>.</p><div class="mbb-professor-pensa"><strong>Não é uma nova fórmula para decorar.</strong><p>Partimos da definição de densidade e reorganizamos a relação para descobrir a grandeza que estava faltando.</p></div></div>

      <h3>10. Tente você</h3>
      <div class="task-box"><h4>Um sensor envia 1.200 KB em 30 s. Qual é a taxa média? Depois explique o significado da unidade.</h4><div class="mbb-pause-question"><strong>Antes da conta:</strong> “KB por segundo” sugere qual operação?</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Monte a razão</strong><p><span class="math">1200 KB/30 s</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Calcule</strong><p><span class="math">1200/30=40</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Unidade</strong><p><span class="math">40 KB/s</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete</strong><p>Em média, o sensor envia 40 kilobytes de dados a cada segundo.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Antes de procurar fórmula, leia a unidade pedida. Ela frequentemente revela quais grandezas devem ser divididas ou multiplicadas e em que ordem.</p></div>
      <div class="ok-box"><strong>Essência:</strong> uma grandeza composta é uma relação com significado. Aprender a ler as unidades permite reconstruir muitas fórmulas em vez de decorá-las.</div>
      <button class="action-button primary" data-practice-topic="grandezas" type="button">Praticar este assunto</button>
    `
  );

  apply('dados',
    'Construir uma leitura crítica de dados desde a coleta até a conclusão, organizar frequências, compreender amostra e viés, escolher representações adequadas e distinguir associação de causalidade.',
    `
      <div class="hero-box"><span class="card-title">Dados não “falam sozinhos”</span><p>Tempos de resposta de um sistema: 2, 3, 2, 4, 3, 2, 5, 3. A lista contém informação, mas ainda é difícil enxergar o padrão.</p><p>Antes de tirar conclusões, precisamos decidir <strong>o que foi observado, como organizar e até onde os dados permitem afirmar alguma coisa</strong>.</p></div>

      <div class="mbb-contextualizacao"><strong>Estatística começa antes da conta</strong><div class="mbb-context-grid"><div class="mbb-context-card"><strong>No cotidiano</strong><p>Pesquisas, notas, tempos, preferências e medições precisam ser coletados e organizados antes de serem interpretados.</p></div><div class="mbb-context-card"><strong>Na tecnologia e na programação</strong><p>Logs, tempos de resposta, acessos, erros e uso de recursos geram dados que ajudam a acompanhar sistemas e tomar decisões.</p></div></div><div class="mbb-central-question"><strong>Pergunta central:</strong> que conclusão os dados realmente sustentam — e qual conclusão vai além deles?</div></div>

      <h3>1. Dado, variável, população e amostra</h3>
      <div class="two-col"><div class="mini-card"><strong>Dado</strong><p>Um valor ou categoria registrado: 3 s, nota 8, opção B.</p></div><div class="mini-card"><strong>Variável</strong><p>A característica observada: tempo, nota, idade, preferência.</p></div><div class="mini-card"><strong>População</strong><p>O conjunto completo sobre o qual queremos aprender.</p></div><div class="mini-card"><strong>Amostra</strong><p>Uma parte da população que realmente observamos.</p></div></div>
      <p>Esses nomes não são burocracia: ajudam a esclarecer <strong>o que estamos medindo e sobre quem pretendemos concluir</strong>.</p>

      <h3>2. Organize a lista em uma tabela de frequência</h3>
      <p>Volte aos tempos: 2, 3, 2, 4, 3, 2, 5, 3.</p>
      <div class="table-wrap"><table><thead><tr><th>Tempo (s)</th><th>Frequência absoluta</th></tr></thead><tbody><tr><td>2</td><td>3</td></tr><tr><td>3</td><td>3</td></tr><tr><td>4</td><td>1</td></tr><tr><td>5</td><td>1</td></tr></tbody></table></div>
      <p>Agora enxergamos imediatamente que 2 s e 3 s foram os valores mais frequentes.</p>

      <h3>3. Frequência relativa responde “que parte do total?”</h3>
      <p>O tempo 2 apareceu 3 vezes em 8 observações:</p>
      <p><span class="math">3/8=0,375=37,5%</span>.</p>
      <div class="two-col"><div class="mini-card"><strong>Absoluta</strong><p>Conta ocorrências: 3.</p></div><div class="mini-card"><strong>Relativa</strong><p>Compara com o total: 37,5%.</p></div></div>

      <h3>4. Uma amostra pode estar correta na conta e errada na escolha</h3>
      <div class="example-box"><span class="card-title">Como os alunos chegam à escola?</span><p>Se entrevistamos apenas pessoas que estão no estacionamento, provavelmente encontraremos mais usuários de carro do que na escola inteira.</p><p>A conta das respostas pode estar perfeita, mas a amostra está enviesada.</p><div class="mbb-professor-pensa"><strong>O problema surgiu antes da matemática.</strong><p>Precisamos perguntar se as pessoas escolhidas representam razoavelmente a população sobre a qual queremos concluir.</p></div></div>

      <h3>5. Tamanho da amostra não resolve todo viés</h3>
      <p>Uma amostra enorme, mas selecionada de forma tendenciosa, pode continuar ruim. Uma amostra menor e bem planejada pode representar melhor a população.</p>
      <div class="note-box"><strong>Quantidade e qualidade da seleção são coisas diferentes.</strong><p>O tamanho ajuda a reduzir instabilidade, mas não corrige automaticamente uma escolha enviesada.</p></div>

      <h3>6. Escolha a representação conforme a pergunta</h3>
      <div class="three-col"><div class="mini-card"><strong>Barras</strong><p>Boas para comparar categorias ou frequências.</p></div><div class="mini-card"><strong>Linha</strong><p>Útil para acompanhar evolução ordenada no tempo.</p></div><div class="mini-card"><strong>Dispersão</strong><p>Útil para investigar relação entre duas variáveis numéricas.</p></div></div>
      <p>Um gráfico bonito não é necessariamente adequado. A representação deve ajudar a responder à pergunta.</p>

      <h3>7. Duas variáveis: cada observação vira um ponto</h3>
      <p>Imagine registrar horas de estudo e nota de cada aluno. Cada pessoa produz um par <span class="math">(horas, nota)</span>.</p>
      <p>Num diagrama de dispersão, os pontos não representam uma sequência a ser ligada; eles mostram como duas variáveis aparecem juntas.</p>
      <div class="visual-box"><span class="card-title">O conjunto pode sugerir uma tendência</span><svg class="math-graph" viewBox="0 0 560 260" role="img" aria-label="Diagrama de dispersão com tendência crescente"><line class="graph-axis" x1="60" y1="220" x2="520" y2="220"/><line class="graph-axis" x1="60" y1="220" x2="60" y2="30"/><circle class="graph-point" cx="110" cy="195" r="5"/><circle class="graph-point" cx="170" cy="176" r="5"/><circle class="graph-point" cx="225" cy="160" r="5"/><circle class="graph-point" cx="290" cy="126" r="5"/><circle class="graph-point" cx="350" cy="118" r="5"/><circle class="graph-point" cx="415" cy="78" r="5"/><circle class="graph-point" cx="475" cy="62" r="5"/></svg><p>Os pontos sugerem associação positiva: valores maiores de x tendem a aparecer com valores maiores de y.</p></div>

      <h3>8. Associação não prova causa</h3>
      <p>Se duas variáveis aumentam juntas, não podemos concluir automaticamente que uma causa a outra.</p>
      <div class="example-box"><span class="card-title">Um terceiro fator pode estar envolvido</span><p>Vendas de sorvete e uso de piscinas podem aumentar na mesma época. Isso não significa que comprar sorvete faça alguém usar piscina; o calor influencia as duas variáveis.</p><div class="mbb-professor-pensa"><strong>Estatística pede disciplina na conclusão.</strong><p>Diga o que os dados mostram — associação — sem transformar isso em uma explicação causal que os dados não testaram.</p></div></div>

      <h3>9. Escalas podem distorcer a impressão visual</h3>
      <p>Imagine um gráfico de vendas que sobe de 98 para 100. Se o eixo vertical começar em 97, a diferença pode parecer enorme. Se começar em zero, parece pequena.</p>
      <p>As duas representações podem usar os mesmos dados. Por isso leia sempre título, escala, unidade e fonte antes de interpretar a forma do gráfico.</p>

      <h3>10. Na tecnologia e na programação: investigando tempos de resposta</h3>
      <div class="example-box"><span class="card-title">Um pequeno conjunto de logs</span><p>Tempos em ms: 120, 130, 125, 128, 500.</p><p>Quatro respostas estão perto de 120–130 ms, mas uma chegou a 500 ms. Olhar apenas uma média pode esconder esse comportamento excepcional.</p><div class="mbb-professor-pensa"><strong>Os dados fazem surgir novas perguntas.</strong><p>O valor 500 foi erro? Sobrecarga? Uma requisição diferente? Estatística ajuda a identificar padrões e anomalias, mas a explicação exige investigar o contexto.</p></div></div>

      <h3>11. Exemplo guiado: frequência relativa</h3>
      <div class="example-box"><span class="card-title">Em 50 acessos, 8 deram erro</span><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Parte</strong><p>8 acessos com erro.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Total</strong><p>50 acessos observados.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Frequência relativa</strong><p><span class="math">8/50=0,16=16%</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">4</span><strong>Interprete sem exagerar</strong><p>Nessa amostra de 50 acessos, 16% apresentaram erro. Isso não prova que a taxa será exatamente 16% em qualquer momento futuro.</p></div></div></div>

      <h3>12. Tente você</h3>
      <div class="task-box"><h4>Em uma pesquisa com 40 alunos, 10 escolheram a opção A. Qual é a frequência relativa? Depois diga uma informação que ainda seria necessária antes de afirmar que “25% de todos os alunos da escola preferem A”.</h4><div class="mbb-pause-question"><strong>Não pare na porcentagem:</strong> pense também em como a amostra foi escolhida.</div><details class="solution"><summary>Ver resolução comentada</summary><div class="mbb-guided-solution"><div class="mbb-guided-step"><span class="mbb-step-number">1</span><strong>Calcule</strong><p><span class="math">10/40=0,25=25%</span>.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">2</span><strong>Interprete corretamente</strong><p>25% <strong>da amostra observada</strong> escolheram A.</p></div><div class="mbb-guided-step"><span class="mbb-step-number">3</span><strong>Questione a generalização</strong><p>Precisamos saber como esses 40 alunos foram selecionados e se representam razoavelmente a escola inteira.</p></div></div></details></div>

      <div class="exam-box"><h4>Em provas</h4><p>Leia além das barras e pontos: quem foi observado, quantos, qual escala, qual unidade e qual conclusão o enunciado realmente permite. Estatística não é apenas fazer contas; é controlar a qualidade da conclusão.</p></div>
      <div class="ok-box"><strong>Essência:</strong> organize os dados, entenda de onde vieram, escolha uma representação adequada e só então conclua — sem afirmar mais do que a evidência sustenta.</div>
      <button class="action-button primary" data-practice-topic="dados" type="button">Praticar este assunto</button>
    `
  );
})();
