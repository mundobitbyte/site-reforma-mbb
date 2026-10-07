(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};

  function q(number, label, prompt, options, correct, correctText, wrongText) {
    return `
      <div class="quick-question" data-choice-question data-correct="${correct}">
        <strong>${number}. ${label}</strong>
        <p>${prompt}</p>
        <div class="choice-row">
          ${options.map(([key, text]) => `<button type="button" data-choice="${key}">${text}</button>`).join('')}
        </div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="${correctText}" data-wrong-text="${wrongText}"></div>
      </div>`;
  }

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Fechamento da 1ª série</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Agora o objetivo não é lembrar capítulos isolados. É usar a Química para explicar situações, interpretar evidências, calcular quantidades e tomar decisões responsáveis.</strong>
        <p>Você estudou matéria, modelos atômicos, Tabela Periódica, ligações, reações, conservação da massa, mol, estequiometria, origem dos elementos e segurança. Nesta aula, esses temas voltam misturados — como acontece em problemas reais.</p>
        <p><strong>Como usar:</strong> responda antes de consultar os capítulos. Se errar, não memorize a alternativa correta: descubra <strong>qual critério científico faltou</strong>. As respostas explicadas servem como diagnóstico para decidir o que revisar.</p>
        <p class="central-question"><strong>Missão final:</strong> mostrar que você consegue passar de <strong>observação → modelo → representação → cálculo → decisão</strong>.</p>
      </div>
    </section>

    <section>
      <h3>Nível 1 — Fundamentos: separar conceitos que parecem iguais</h3>
      <p>Comece pelas distinções que sustentam todo o restante.</p>

      ${q('1','Material, substância e mistura','Por que sal de cozinha iodado não deve ser tratado automaticamente como uma amostra pura de NaCl?', [['a','Porque NaCl não é uma substância'],['b','Porque o produto comercial pode conter outras substâncias além de NaCl'],['c','Porque todo sal é uma mistura de metais']], 'b', 'Correto. Um produto comercial pode conter outros componentes; composição conhecida é essencial quando queremos estudar uma substância definida.', 'Revise o Capítulo 01 e diferencie produto comercial, material e substância pura.')}

      ${q('2','Número atômico','Um átomo neutro possui 13 prótons. Qual afirmação é correta?', [['a','Seu número atômico é 13'],['b','Seu número atômico depende da massa da amostra'],['c','Ele pertence obrigatoriamente ao grupo 13 apenas porque tem 13 elétrons totais']], 'a', 'Correto. O número atômico é definido pelo número de prótons do núcleo.', 'Número atômico identifica o elemento pela quantidade de prótons; não pela massa da amostra.')}

      ${q('3','Modelos científicos','Por que o modelo atômico de Rutherford substituiu aspectos do modelo de Thomson?', [['a','Porque Rutherford fez um desenho mais bonito'],['b','Porque novas evidências experimentais exigiam uma distribuição diferente de carga e massa'],['c','Porque modelos científicos mudam por votação']], 'b', 'Isso. Modelos são avaliados pela capacidade de explicar evidências e fazer previsões.', 'Revise o Capítulo 02: evidência experimental é o motor da mudança de modelos.')}

      ${q('4','Tabela Periódica','O que elementos de um mesmo grupo frequentemente compartilham?', [['a','Exatamente a mesma massa'],['b','Padrões de configuração eletrônica de valência e comportamento químico'],['c','O mesmo número atômico']], 'b', 'Correto. Os grupos evidenciam regularidades de estrutura eletrônica e propriedades.', 'Mesmo grupo não significa mesma massa nem mesmo número atômico.')}

      ${q('5','Elétrons de valência','Por que os elétrons mais externos são importantes em muitas reações dos elementos representativos?', [['a','Porque participam mais diretamente das interações que formam ligações'],['b','Porque ficam dentro do núcleo'],['c','Porque são sempre oito']], 'a', 'Correto. Elétrons de valência estão diretamente ligados aos padrões de ligação e reatividade.', 'Revise o Capítulo 04 e a diferença entre elétrons totais e elétrons de valência.')}

      ${q('6','Tipos de ligação','Qual associação está correta?', [['a','Cu — metálica; NaCl — iônica; H₂O — covalente'],['b','Cu — iônica; NaCl — metálica; H₂O — iônica'],['c','Cu — covalente molecular; NaCl — metálica; H₂O — metálica']], 'a', 'Correto. Cada material é explicado por uma estrutura de ligação diferente.', 'Pense nas partículas: elétrons deslocalizados no metal, íons na rede do NaCl e moléculas covalentes na água.')}

      ${q('7','Regra do octeto','Como a regra do octeto deve ser usada?', [['a','Como lei universal sem exceções'],['b','Como modelo útil para muitos casos introdutórios, reconhecendo limites e exceções'],['c','Como prova de que átomos têm intenção']], 'b', 'Perfeito. O octeto é uma ferramenta de previsão, não uma lei sem exceções nem uma intenção dos átomos.', 'Revise o Capítulo 04: energia e interações elétricas são mais fundamentais que a linguagem de completar oito.')}

      ${q('8','Estrutura e propriedade','Por que NaCl sólido praticamente não conduz corrente, mas uma solução aquosa de NaCl pode conduzir?', [['a','Porque os íons estão presos na rede no sólido e podem se mover na solução'],['b','Porque o NaCl deixa de possuir cargas quando dissolve'],['c','Porque a água transforma NaCl em cobre']], 'a', 'Correto. Para transportar carga, partículas carregadas precisam ter mobilidade.', 'A existência de íons não basta; compare a mobilidade deles nas duas situações.')}
    </section>

    <section>
      <h3>Nível 2 — Transformações: interpretar o que realmente aconteceu</h3>
      <p>Agora as perguntas exigem separar observação de conclusão.</p>

      ${q('9','Transformação física','Qual situação representa apenas transformação física?', [['a','Gelo derretendo'],['b','Ferro enferrujando'],['c','Madeira queimando']], 'a', 'Correto. A água continua sendo H₂O; muda apenas o estado físico.', 'Transformação química envolve formação de novas substâncias.')}

      ${q('10','Evidência de reação','A formação de bolhas prova sozinha que ocorreu reação química?', [['a','Sim, sempre'],['b','Não. Bolhas podem ser evidência, mas também podem resultar de mudança física, como ebulição'],['c','Sim, desde que o líquido seja transparente']], 'b', 'Correto. Evidência precisa ser interpretada no contexto; uma observação isolada não é prova automática.', 'Revise o Capítulo 05: diferencie evidência experimental de conclusão definitiva.')}

      ${q('11','Coeficiente e índice','Na equação 2 H₂ + O₂ → 2 H₂O, o que o coeficiente 2 antes de H₂ significa?', [['a','Cada molécula de H₂ ganhou dois átomos extras'],['b','Há duas entidades ou dois mol de H₂ na proporção representada'],['c','A fórmula correta do hidrogênio virou H₄']], 'b', 'Correto. Coeficiente altera a quantidade de entidades; índice faz parte da fórmula da substância.', 'Não altere índices para balancear uma equação.')}

      ${q('12','Balanceamento','Qual é o balanceamento correto de H₂ + O₂ → H₂O?', [['a','H₂ + O₂ → H₂O₂'],['b','2 H₂ + O₂ → 2 H₂O'],['c','H₄ + O₂ → 2 H₂O']], 'b', 'Correto. Existem 4 H e 2 O nos dois lados sem alterar as fórmulas das substâncias.', 'Balanceie mudando coeficientes, nunca a identidade química das fórmulas.')}

      ${q('13','Sistema aberto','Uma reação em copo aberto libera CO₂ e a massa medida diminui. Qual explicação é adequada?', [['a','Parte da matéria saiu do sistema medido na forma de gás'],['b','A matéria foi destruída'],['c','A balança prova que Lavoisier estava errado']], 'a', 'Exatamente. A massa do conteúdo que permanece na balança pode cair porque matéria atravessou a fronteira do sistema.', 'Revise o Capítulo 06 e sempre pergunte: o que exatamente está sendo pesado?')}

      ${q('14','Oxidação','Uma peça de ferro ganha massa ao enferrujar. De onde vem a massa adicional?', [['a','Da criação espontânea de matéria'],['b','Principalmente de oxigênio incorporado do ambiente'],['c','Do aumento do número de prótons do ferro']], 'b', 'Correto. O sistema peça recebe matéria do ambiente durante a oxidação.', 'Conservação da massa exige considerar também a matéria que entra no sistema.')}

      ${q('15','Conservação','O que o balanceamento de uma reação química expressa em nível microscópico?', [['a','Conservação do número de átomos de cada elemento'],['b','Conservação obrigatória do número de moléculas'],['c','Conservação da cor dos reagentes']], 'a', 'Correto. Os átomos são reorganizados; o número de moléculas pode mudar.', 'Não confunda conservação de átomos com conservação do número de partículas compostas.')}

      ${q('16','Reagentes e produtos','Na equação C + O₂ → CO₂, qual é o produto?', [['a','C'],['b','O₂'],['c','CO₂']], 'c', 'Correto. Produtos aparecem à direita da seta na forma como a equação foi escrita.', 'Reagentes são consumidos; produtos são formados na representação da reação.')}
    </section>

    <section>
      <h3>Nível 3 — Quantidades: fazer a Química conversar com a balança</h3>
      <p>Use massas molares aproximadas: H = 1,0; C = 12,0; O = 16,0; Na = 23,0; Cl = 35,5 g/mol.</p>

      ${q('17','Conceito de mol','Qual definição é mais adequada?', [['a','1 mol é sempre 1 g'],['b','1 mol é uma quantidade de substância correspondente a 6,02214076 × 10²³ entidades elementares especificadas'],['c','1 mol é o volume de qualquer líquido']], 'b', 'Correto. Mol é unidade de quantidade de substância; a entidade precisa ser especificada.', 'Mol não é sinônimo de grama nem de volume.')}

      ${q('18','Massa molar','Qual é a massa molar aproximada do CO₂?', [['a','28 g/mol'],['b','44 g/mol'],['c','60 g/mol']], 'b', 'Correto. 12 + 2 × 16 = 44 g/mol.', 'Some as massas atômicas conforme os índices da fórmula.')}

      ${q('19','Massa → mol','Quantos mol existem em 36 g de H₂O?', [['a','1 mol'],['b','2 mol'],['c','18 mol']], 'b', 'Correto. M(H₂O) = 18 g/mol e 36 ÷ 18 = 2 mol.', 'Para massa → mol, divida pela massa molar.')}

      ${q('20','Mol → partículas','Aproximadamente quantas moléculas existem em 0,50 mol de H₂O?', [['a','3,01 × 10²³'],['b','6,02 × 10²³'],['c','1,20 × 10²⁴']], 'a', 'Correto. 0,50 × 6,02 × 10²³ ≈ 3,01 × 10²³ moléculas.', 'Multiplique a quantidade em mol pela constante de Avogadro.')}

      ${q('21','Índice e mol','Quantos mol de átomos de oxigênio existem em 3 mol de CO₂?', [['a','3 mol'],['b','6 mol'],['c','9 mol']], 'b', 'Correto. Cada CO₂ possui 2 átomos de O; portanto 3 mol de CO₂ correspondem a 6 mol de átomos de O.', 'Use o índice 2 como relação entre entidades.')}

      ${q('22','Estequiometria mol–mol','Em 2 H₂ + O₂ → 2 H₂O, quantos mol de H₂O podem ser formados por 3 mol de O₂, com H₂ em excesso?', [['a','1,5 mol'],['b','3 mol'],['c','6 mol']], 'c', 'Correto. A razão O₂ : H₂O é 1 : 2; portanto 3 mol O₂ → 6 mol H₂O.', 'Use os coeficientes da equação balanceada como razão em mol.')}

      ${q('23','Estequiometria massa–massa','Em 2 H₂ + O₂ → 2 H₂O, 8 g de H₂ podem formar quantos gramas de H₂O, com O₂ em excesso?', [['a','18 g'],['b','36 g'],['c','72 g']], 'c', 'Correto. 8 g H₂ = 4 mol; a razão H₂ : H₂O é 1 : 1, então formam 4 mol H₂O = 72 g.', 'Faça o caminho completo: massa → mol → proporção → mol → massa.')}

      ${q('24','Reagente limitante','Misturam-se 6 mol de H₂ e 2 mol de O₂. Na reação 2 H₂ + O₂ → 2 H₂O, qual é o reagente limitante?', [['a','H₂'],['b','O₂'],['c','Nenhum; ambos acabam ao mesmo tempo']], 'b', 'Correto. 2 mol O₂ exigem 4 mol H₂; há 6 mol H₂. O₂ acaba primeiro e sobram 2 mol H₂.', 'Compare a quantidade disponível com a proporção estequiométrica exigida.')}

      ${q('25','Rendimento teórico','O que é rendimento teórico?', [['a','A quantidade máxima de produto prevista pela estequiometria a partir do reagente limitante'],['b','A quantidade sempre obtida no laboratório'],['c','A massa do reagente em excesso']], 'a', 'Correto. É o limite calculado pelo modelo estequiométrico para as condições assumidas.', 'Rendimento real pode ser menor por perdas, reações paralelas ou conversão incompleta.')}

      ${q('26','NaCl e entidades','117 g de NaCl correspondem a quantos mol, usando 58,5 g/mol?', [['a','0,50 mol'],['b','2,00 mol'],['c','58,5 mol']], 'b', 'Correto. 117 ÷ 58,5 = 2,00 mol de unidades de fórmula de NaCl.', 'Para composto iônico sólido, prefira unidades de fórmula a moléculas.')}
    </section>

    <section>
      <h3>Nível 4 — Cosmos e segurança: usar ciência fora da bancada</h3>
      <p>A Química também explica de onde veio a matéria e como lidar com ela de forma responsável.</p>

      ${q('27','Espectroscopia','Como podemos identificar elementos presentes na atmosfera de uma estrela distante?', [['a','Pelas linhas características de seu espectro'],['b','Pesando a estrela numa balança'],['c','Observando apenas sua cor a olho nu']], 'a', 'Correto. Transições eletrônicas produzem padrões espectrais característicos que podem ser comparados com dados de laboratório.', 'Revise os Capítulos 02 e 09: espectros conectam estrutura eletrônica e astronomia.')}

      ${q('28','Universo primordial','Quais elementos dominaram a composição do Universo primordial após a nucleossíntese inicial?', [['a','Principalmente hidrogênio e hélio, com pequenas quantidades de núcleos leves'],['b','Principalmente ferro e ouro'],['c','Somente carbono e oxigênio']], 'a', 'Correto. H e He dominaram; muitos elementos mais pesados surgiram depois em processos astrofísicos.', 'Não atribua toda a Tabela Periódica ao Big Bang inicial.')}

      ${q('29','Origem de elementos pesados','Qual afirmação é mais correta?', [['a','Todos os elementos foram produzidos exclusivamente no núcleo do Sol'],['b','Diferentes processos astrofísicos contribuem para formar elementos, incluindo fusão estelar e captura de nêutrons'],['c','Elementos pesados surgem em reações químicas comuns']], 'b', 'Correto. A origem dos elementos envolve diferentes etapas e ambientes cósmicos.', 'Reações químicas reorganizam elétrons e átomos; não fabricam novos elementos.')}

      ${q('30','Química × nuclear','Qual diferença fundamental existe entre reação química e reação nuclear?', [['a','Na química mudam principalmente arranjos eletrônicos e ligações; na nuclear o núcleo pode ser transformado'],['b','Na química prótons sempre saem do núcleo'],['c','Não existe diferença']], 'a', 'Correto. Essa distinção explica por que reações químicas comuns não transformam um elemento em outro.', 'Elementos são definidos pelo número de prótons do núcleo.')}

      ${q('31','Perigo × risco','Uma substância inflamável deixa de ser perigosa quando usada com bons controles?', [['a','Sim'],['b','Não. O perigo permanece, mas o risco pode ser reduzido'],['c','Sim, se o frasco for pequeno']], 'b', 'Correto. Controle de risco não elimina necessariamente a propriedade perigosa da substância.', 'Separe propriedade intrínseca do produto das condições de exposição.')}

      ${q('32','Fonte de segurança','Você precisa verificar incompatibilidades, armazenamento e resposta a incidentes de um produto químico. O que consultar?', [['a','A aparência do frasco'],['b','Rótulo, FDS correspondente e procedimento aplicável'],['c','Um palpite de quem já usou algo parecido']], 'b', 'Correto. Decisões seguras dependem de informação específica, atual e confiável.', 'Rótulo e FDS existem justamente para comunicar perigos e controles.')}

      ${q('33','Frasco sem identificação','Qual é a conduta correta diante de um frasco sem rótulo confiável?', [['a','Cheirar para identificar'],['b','Misturar uma gota com outro produto'],['c','Não usar nem testar informalmente e comunicar o responsável']], 'c', 'Correto. Um produto não identificado não deve ser investigado por exposição improvisada.', 'A ausência de informação aumenta a incerteza; não crie uma nova exposição para tentar reduzi-la.')}

      ${q('34','Resíduos','Qual princípio é adequado para resíduos químicos de laboratório?', [['a','Despejar tudo na pia para diluir'],['b','Misturar resíduos para ocupar menos frascos'],['c','Identificar, manter a segregação prevista e seguir o gerenciamento institucional']], 'c', 'Correto. Descarte exige identificação, compatibilidade e procedimento apropriado.', 'Não improvise neutralização, mistura ou descarte.')}
    </section>

    <section>
      <h3>Nível 5 — Integração: quando vários capítulos aparecem no mesmo problema</h3>
      <p>Aqui não existe um capítulo único para consultar. Você precisa escolher as ideias necessárias.</p>

      ${q('35','Material e condução','Um fio de cobre conduz corrente no estado sólido, enquanto NaCl sólido praticamente não conduz. Qual explicação integra melhor os capítulos 03 e 04?', [['a','O cobre possui elétrons deslocalizados na estrutura metálica; no NaCl sólido os íons estão presos na rede'],['b','O NaCl não possui partículas carregadas'],['c','O cobre é líquido em temperatura ambiente']], 'a', 'Correto. A propriedade macroscópica nasce da estrutura e da mobilidade das cargas.', 'Relacione tipo de ligação, estrutura e partículas móveis.')}

      ${q('36','Balanceamento integrado','Qual é o menor conjunto de coeficientes inteiros para Al + O₂ → Al₂O₃?', [['a','2, 1, 1'],['b','4, 3, 2'],['c','1, 1, 1']], 'b', 'Correto. 4 Al + 3 O₂ → 2 Al₂O₃ conserva 4 Al e 6 O nos dois lados.', 'Conte os átomos de cada elemento e altere somente coeficientes.')}

      ${q('37','Massa e estequiometria','Na reação C + O₂ → CO₂, quantos gramas de CO₂ podem ser formados por 24 g de C, com O₂ em excesso?', [['a','24 g'],['b','44 g'],['c','88 g']], 'c', 'Correto. 24 g C = 2 mol C; razão 1 : 1 → 2 mol CO₂; 2 × 44 = 88 g.', 'Faça massa → mol → proporção → mol → massa.')}

      ${q('38','Conservação e sistema','Um frasco fechado com reagentes é pesado antes e depois de uma reação que produz gás. O que se espera idealmente?', [['a','A massa total do sistema permanece praticamente igual dentro da precisão experimental'],['b','A massa sempre diminui porque gás não tem massa'],['c','A massa dobra porque surgiram produtos']], 'a', 'Correto. Se nenhuma matéria atravessa a fronteira do sistema, a massa total é conservada.', 'Gases possuem massa; em sistema fechado eles continuam pertencendo ao conjunto pesado.')}

      ${q('39','Cosmos e corpo humano','Qual explicação é mais correta para o cálcio presente nos ossos?', [['a','Foi criado por reações químicas dentro do corpo'],['b','Os átomos de cálcio têm origem em processos astrofísicos anteriores e foram incorporados à matéria que formou o Sistema Solar e os seres vivos'],['c','Veio diretamente do Big Bang na mesma abundância atual']], 'b', 'Correto. A matéria terrestre foi enriquecida por gerações anteriores de processos cósmicos.', 'Reações químicas do organismo reorganizam átomos existentes; não fabricam cálcio nuclearmente.')}

      ${q('40','Decisão segura','Dois produtos de limpeza possuem rótulos diferentes. Qual atitude é cientificamente mais responsável antes de combiná-los?', [['a','Misturar uma pequena quantidade para testar'],['b','Não combinar sem orientação explícita de compatibilidade e uso prevista pelo fabricante'],['c','Misturar se ambos tiverem cheiro agradável']], 'b', 'Correto. Misturas não previstas podem produzir novos perigos; segurança não deve depender de tentativa e erro.', 'Use produtos conforme orientação e não transforme desconhecimento em experimento doméstico.')}
    </section>

    <section class="chapter-checkpoint">
      <h3>Desafios MbB — responda antes de abrir</h3>

      <div class="challenge-box">
        <strong>Desafio 1 — A bandeja do laboratório</strong>
        <p>Um aluno recebeu Cu, NaCl e “prego de ferro”. Explique por que esses três rótulos não trazem exatamente o mesmo tipo de informação e por que um prego comercial pode exigir verificação adicional antes de ser tratado como Fe puro.</p>
        <details><summary>Raciocínio esperado</summary><p>Cu é símbolo do elemento cobre; NaCl é fórmula de um composto formado por Na e Cl; “prego de ferro” é um nome cotidiano de objeto/material e pode ser aço, conter outros elementos ou revestimentos. Uma investigação química precisa distinguir objeto, material, substância e composição.</p></details>
      </div>

      <div class="challenge-box">
        <strong>Desafio 2 — O gás que parecia desaparecer</strong>
        <p>Uma reação em copo aberto perde 4 g na balança; a mesma reação em sistema fechado não apresenta essa perda. Construa uma explicação que use reação química, sistema, gás e conservação da massa.</p>
        <details><summary>Raciocínio esperado</summary><p>No copo aberto, um produto gasoso pode escapar da fronteira do sistema medido, reduzindo a massa que permanece na balança. No sistema fechado, o gás continua dentro do conjunto pesado. A diferença observada não significa destruição de matéria.</p></details>
      </div>

      <div class="challenge-box">
        <strong>Desafio 3 — Da balança às moléculas</strong>
        <p>Uma amostra contém 90 g de H₂O. Determine: quantidade em mol, número aproximado de moléculas e quantidade em mol de átomos de H.</p>
        <details><summary>Raciocínio esperado</summary><p>M(H₂O) = 18 g/mol. Logo, 90 ÷ 18 = 5 mol H₂O. Isso corresponde a aproximadamente 5 × 6,022 × 10²³ = 3,01 × 10²⁴ moléculas. Cada H₂O possui 2 H, portanto há 10 mol de átomos de hidrogênio.</p></details>
      </div>

      <div class="challenge-box">
        <strong>Desafio 4 — O reagente que acaba primeiro</strong>
        <p>Para 2 H₂ + O₂ → 2 H₂O, estão disponíveis 10 mol H₂ e 3 mol O₂. Identifique o reagente limitante, quanto H₂O pode ser formado e quanto H₂ sobra.</p>
        <details><summary>Raciocínio esperado</summary><p>3 mol O₂ exigem 6 mol H₂. Há 10 mol H₂, portanto O₂ é limitante. Formam-se 6 mol H₂O e sobram 4 mol H₂.</p></details>
      </div>

      <div class="challenge-box">
        <strong>Desafio 5 — Do Universo ao laboratório</strong>
        <p>Explique em sequência como podemos saber que uma estrela contém hidrogênio, como elementos mais pesados que H e He passaram a existir e por que uma reação química comum não cria um novo elemento.</p>
        <details><summary>Raciocínio esperado</summary><p>Espectroscopia permite reconhecer padrões de linhas associados a elementos. O Universo primordial produziu principalmente H e He; processos em estrelas e outros eventos astrofísicos formaram e dispersaram muitos elementos mais pesados. Reações químicas reorganizam elétrons, ligações e átomos, enquanto a identidade do elemento depende do número de prótons do núcleo.</p></details>
      </div>

      <div class="challenge-box">
        <strong>Desafio 6 — Decisão profissional</strong>
        <p>Você encontra um frasco sem rótulo próximo de resíduos químicos. Descreva o que não deve ser feito e quais informações ou procedimentos devem orientar a decisão.</p>
        <details><summary>Raciocínio esperado</summary><p>Não cheirar, provar, misturar, aquecer ou testar informalmente. O material deve ser retirado do uso normal e comunicado ao responsável. Identificação, rótulo quando existente, FDS, procedimentos institucionais, compatibilidade e regras de gerenciamento de resíduos devem orientar os próximos passos.</p></details>
      </div>
    </section>

    <section>
      <h3>Mapa final de revisão</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Se você teve dificuldade em...</th><th>Revise</th><th>Pergunta-chave</th></tr></thead>
          <tbody>
            <tr><td>composição, elementos e fórmulas</td><td>01</td><td>O que exatamente a representação está identificando?</td></tr>
            <tr><td>modelos e estrutura do átomo</td><td>02</td><td>Qual evidência o modelo precisa explicar?</td></tr>
            <tr><td>grupos, períodos e tendências</td><td>03</td><td>O que a posição na tabela permite prever?</td></tr>
            <tr><td>ligações e propriedades</td><td>04</td><td>Como os elétrons e as partículas estão organizados?</td></tr>
            <tr><td>reação e balanceamento</td><td>05</td><td>Quais substâncias mudaram e os átomos foram conservados?</td></tr>
            <tr><td>massa em sistemas abertos e fechados</td><td>06</td><td>O que entrou ou saiu da fronteira do sistema?</td></tr>
            <tr><td>mol, massa molar e partículas</td><td>07</td><td>Qual conversão passa pelo mol?</td></tr>
            <tr><td>estequiometria e limitante</td><td>08</td><td>Qual é a razão em mol da equação balanceada?</td></tr>
            <tr><td>origem dos elementos</td><td>09</td><td>Qual processo físico ou astrofísico está envolvido?</td></tr>
            <tr><td>segurança química</td><td>10</td><td>Qual é o perigo, a exposição e a fonte confiável de orientação?</td></tr>
          </tbody>
        </table>
      </div>

      <div class="ok-box"><strong>Fechamento da 1ª série</strong><p>Se você consegue justificar suas respostas usando evidências, modelos, conservação, proporções e critérios de segurança, o conteúdo deixou de ser uma coleção de fórmulas e passou a funcionar como <strong>raciocínio químico</strong>.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Esta aula integra os conceitos trabalhados ao longo da 1ª série por meio de compreensão conceitual, interpretação de evidências, representação química, cálculos quantitativos, resolução de problemas, integração entre escalas microscópica e macroscópica, ciência do Universo e tomada de decisão responsável em segurança química.</p></details>
  `;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'Revisão cumulativa • compreensão, cálculo, integração e aplicação',
      title:'Você consegue usar a Química para explicar, calcular e decidir?',
      objective:'<strong>Objetivo:</strong> consolidar os capítulos 01 a 10 por meio de exercícios graduados e desafios integradores, identificando o que já foi compreendido e o que ainda precisa ser revisado.',
      html:lessonHtml
    });
  }

  MBB.enableChapter('99 Exercícios e desafios', showChapter);
})();