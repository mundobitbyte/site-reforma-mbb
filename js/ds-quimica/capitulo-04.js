(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Na feira de Ciências, sua equipe precisa explicar três materiais muito conhecidos: um fio de cobre, cristais de sal de cozinha e água. A pergunta parece simples: se todos são formados por átomos, por que se comportam de maneiras tão diferentes?</strong>
        <p>O fio de cobre pode ser dobrado e conduz corrente elétrica no estado sólido. O cloreto de sódio forma cristais rígidos e quebradiços; no estado sólido, praticamente não conduz corrente, mas seus íons podem transportar carga quando o composto está fundido ou dissolvido em água. A água, por sua vez, é formada por moléculas discretas e permanece líquida em condições ambientes.</p>
        <p>Essas diferenças não podem ser explicadas apenas dizendo quais elementos estão presentes. Precisamos descobrir <strong>como as partículas estão unidas e como os elétrons participam dessas interações</strong>.</p>

        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Faça uma hipótese antes de continuar</strong>
          <p>Qual ideia parece mais promissora para explicar por que cobre, sal e água têm propriedades tão diferentes?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">O tamanho visível de cada amostra</button>
            <button type="button" data-choice="b">A maneira como seus átomos ou íons interagem e organizam os elétrons</button>
            <button type="button" data-choice="c">O nome comercial de cada material</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o caminho. A composição importa, mas a forma como as partículas se ligam e se organizam é decisiva para muitas propriedades." data-wrong-text="Pense numa diferença que continue existindo mesmo se mudarmos o tamanho da amostra ou o nome escrito no rótulo."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> responder com rigor à pergunta <strong>“por que os átomos se ligam?”</strong> e usar essa resposta para compreender ligações iônicas, covalentes e metálicas e algumas propriedades que surgem dessas estruturas.</p>
      </div>
    </section>

    <section>
      <h3>1. Átomos não se ligam porque “querem”: a explicação envolve energia e atração elétrica</h3>
      <p>Em Química escolar é comum ouvir que os átomos “querem ficar estáveis”. A frase pode servir como atalho, mas não é uma explicação física completa. Átomos não possuem intenção. Uma ligação pode se formar quando as interações entre núcleos e elétrons levam o <strong>sistema</strong> a uma configuração de energia total mais baixa do que certas configurações separadas.</p>
      <p>Quando duas partículas se aproximam, aparecem atrações e repulsões elétricas ao mesmo tempo. Núcleos positivos atraem elétrons negativos, enquanto cargas de mesmo sinal se repelem. Uma ligação está associada a uma distância em que o balanço dessas interações produz uma configuração energeticamente favorável.</p>

      <div class="visual-box">
        <strong class="card-title">Ligação química: uma configuração energeticamente favorável</strong>
        <svg class="lesson-visual" viewBox="0 0 760 330" role="img" aria-label="Diagrama didático de energia relativa em função da distância entre duas partículas. Quando estão muito distantes a energia é tomada como referência. Ao se aproximarem, a energia diminui até um mínimo associado a uma distância de ligação. Se chegam perto demais, a energia aumenta rapidamente devido às repulsões.">
          <defs><marker id="cap04ArrowEnergy" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <line x1="90" y1="260" x2="700" y2="260" stroke="#617087" stroke-width="2"/>
          <line x1="90" y1="260" x2="90" y2="45" stroke="#617087" stroke-width="2"/>
          <text x="395" y="305" text-anchor="middle" font-size="14" fill="#4b5b72">distância entre as partículas →</text>
          <text x="25" y="155" transform="rotate(-90 25 155)" text-anchor="middle" font-size="14" fill="#4b5b72">energia relativa</text>
          <path d="M115 60 C150 100 180 210 245 236 C320 268 370 174 425 155 C500 130 585 139 690 140" fill="none" stroke="#1967d2" stroke-width="5"/>
          <circle cx="355" cy="190" r="7" fill="#b42318"/>
          <line x1="355" y1="190" x2="355" y2="260" stroke="#b42318" stroke-dasharray="6 5" stroke-width="2"/>
          <text x="355" y="174" text-anchor="middle" font-size="14" font-weight="900" fill="#b42318">mínimo de energia</text>
          <text x="355" y="286" text-anchor="middle" font-size="13" fill="#617087">distância de ligação</text>
          <text x="605" y="122" text-anchor="middle" font-size="13" fill="#617087">partículas muito afastadas</text>
          <text x="170" y="82" text-anchor="middle" font-size="13" fill="#617087">perto demais: repulsões crescem</text>
        </svg>
        <p class="visual-caption">O desenho representa uma ideia geral de energia potencial. Ele não é uma curva quantitativa para uma substância específica.</p>
      </div>

      <div class="ok-box">
        <strong>Resposta clara</strong>
        <p><strong>Por que os átomos se ligam?</strong> Porque, em muitas combinações, a interação entre núcleos e elétrons permite formar um arranjo de menor energia do que certas configurações separadas. O tipo de ligação depende de como os elétrons participam dessa interação.</p>
      </div>
    </section>

    <section>
      <h3>2. Os elétrons mais externos são decisivos para muitas ligações</h3>
      <p>Nos capítulos anteriores vimos que os elétrons ocupam regiões associadas a níveis de energia. Para muitos elementos representativos, os elétrons da região mais externa — chamados <strong>elétrons de valência</strong> — participam diretamente das ligações químicas.</p>
      <p>A Tabela Periódica ajuda a prever padrões. Elementos de um mesmo grupo frequentemente apresentam comportamentos químicos semelhantes porque possuem configurações de valência relacionadas. É por isso que a organização estudada no Capítulo 03 começa agora a explicar reatividade.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Sódio — Na</strong><p>Distribuição simplificada 2–8–1. Possui 1 elétron na camada mais externa.</p></div>
        <div class="example-box"><strong class="card-title">Cloro — Cl</strong><p>Distribuição simplificada 2–8–7. Possui 7 elétrons na camada mais externa.</p></div>
        <div class="example-box"><strong class="card-title">Argônio — Ar</strong><p>Distribuição simplificada 2–8–8. Sua camada externa está completa nesse modelo simplificado.</p></div>
      </div>

      <div class="note-box">
        <strong>A regra do octeto é uma regra prática, não uma lei universal</strong>
        <p>Muitos átomos dos elementos representativos formam ligações que podem ser entendidas por uma tendência a configurações semelhantes às dos gases nobres, frequentemente com oito elétrons de valência. Isso é chamado de <strong>regra do octeto</strong>. Ela funciona bem em muitos casos introdutórios, mas possui exceções. O hidrogênio, por exemplo, costuma ser descrito pela regra do dueto, e existem espécies estáveis que não obedecem a um octeto simples.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Evite uma explicação enganosa</strong>
        <p>Qual frase é cientificamente mais adequada?</p>
        <div class="choice-row"><button type="button" data-choice="a">Todo átomo precisa obrigatoriamente ter oito elétrons</button><button type="button" data-choice="b">Os átomos desejam completar oito elétrons</button><button type="button" data-choice="c">O octeto é um modelo útil para muitas ligações, mas a formação de ligações está relacionada à energia e às interações elétricas do sistema</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. A regra do octeto ajuda a organizar muitos exemplos, mas não substitui a explicação energética nem vale sem exceções." data-wrong-text="Cuidado com palavras como “todo”, “obrigatoriamente” e “desejam”. A natureza não segue uma intenção nem uma regra escolar sem exceções."></div>
      </div>
    </section>

    <section>
      <h3>3. Ligação iônica: transferência de elétrons produz íons que se atraem</h3>
      <p>Considere o sódio e o cloro. No modelo escolar de valência, o sódio possui um elétron externo que pode ser removido com relativa facilidade, enquanto o cloro tende a receber um elétron em muitas reações. Quando ocorre transferência de elétron, surgem partículas carregadas.</p>
      <p>O sódio que perde um elétron torna-se o cátion <strong>Na⁺</strong>. O cloro que recebe um elétron torna-se o ânion <strong>Cl⁻</strong>. Íons de cargas opostas se atraem eletrostaticamente. No sólido, essa atração não forma apenas um par isolado: os íons se organizam numa <strong>rede cristalina tridimensional</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Do elétron transferido à rede iônica</strong>
        <svg class="lesson-visual" viewBox="0 0 760 390" role="img" aria-label="Representação didática da formação de cloreto de sódio. Um átomo de sódio com um elétron de valência transfere esse elétron para um átomo de cloro com sete elétrons de valência, produzindo Na positivo e Cl negativo. Abaixo, vários íons aparecem alternados para representar uma rede cristalina, e não moléculas isoladas de NaCl.">
          <defs><marker id="cap04ArrowIonic" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <circle cx="145" cy="110" r="55" fill="#eef5ff" stroke="#1967d2" stroke-width="3"/>
          <text x="145" y="118" text-anchor="middle" font-size="25" font-weight="900" fill="#104a9b">Na</text>
          <circle cx="210" cy="110" r="7" fill="#1967d2"/>
          <text x="145" y="42" text-anchor="middle" font-size="14" fill="#617087">1 elétron de valência</text>
          <circle cx="590" cy="110" r="55" fill="#fff5eb" stroke="#d08700" stroke-width="3"/>
          <text x="590" y="118" text-anchor="middle" font-size="25" font-weight="900" fill="#8a6200">Cl</text>
          <g fill="#d08700"><circle cx="590" cy="45" r="7"/><circle cx="645" cy="75" r="7"/><circle cx="655" cy="125" r="7"/><circle cx="625" cy="164" r="7"/><circle cx="555" cy="164" r="7"/><circle cx="525" cy="125" r="7"/><circle cx="535" cy="75" r="7"/></g>
          <path d="M220 110 C330 55 430 55 520 100" fill="none" stroke="#1967d2" stroke-width="4" marker-end="url(#cap04ArrowIonic)"/>
          <text x="370" y="62" text-anchor="middle" font-size="14" font-weight="900" fill="#104a9b">transferência de elétron</text>
          <text x="260" y="185" text-anchor="middle" font-size="18" font-weight="900" fill="#104a9b">Na⁺</text>
          <text x="500" y="185" text-anchor="middle" font-size="18" font-weight="900" fill="#8a6200">Cl⁻</text>
          <text x="380" y="222" text-anchor="middle" font-size="14" fill="#617087">atração eletrostática entre cargas opostas</text>
          <g transform="translate(245 250)">
            <rect x="0" y="0" width="270" height="110" rx="14" fill="#f8fbff" stroke="#c5d4e5"/>
            <g font-size="16" font-weight="900" text-anchor="middle">
              <text x="35" y="35" fill="#104a9b">Na⁺</text><text x="95" y="35" fill="#8a6200">Cl⁻</text><text x="155" y="35" fill="#104a9b">Na⁺</text><text x="215" y="35" fill="#8a6200">Cl⁻</text>
              <text x="35" y="78" fill="#8a6200">Cl⁻</text><text x="95" y="78" fill="#104a9b">Na⁺</text><text x="155" y="78" fill="#8a6200">Cl⁻</text><text x="215" y="78" fill="#104a9b">Na⁺</text>
            </g>
          </g>
          <text x="380" y="382" text-anchor="middle" font-size="13" fill="#617087">NaCl indica a proporção 1:1 na rede; não uma molécula isolada de NaCl.</text>
        </svg>
      </div>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">No sólido</strong><p>Os íons ficam presos em posições da rede. Por isso, o cloreto de sódio sólido praticamente não conduz corrente elétrica.</p></div>
        <div class="example-box"><strong class="card-title">Fundido ou em solução aquosa</strong><p>Os íons podem se deslocar e transportar carga. Por isso, materiais iônicos podem conduzir nessas condições.</p></div>
      </div>

      <div class="note-box"><strong>Uma correção importante de linguagem</strong><p>Para um composto iônico como NaCl, é mais rigoroso falar em <strong>unidades de fórmula</strong> e rede cristalina do que em “moléculas de NaCl”. A fórmula informa a menor proporção inteira entre os íons no sólido.</p></div>
    </section>

    <section>
      <h3>4. A proporção dos íons precisa resultar em carga total nula</h3>
      <p>Um composto iônico macroscópico é eletricamente neutro. Isso ajuda a entender suas fórmulas. Um íon Mg²⁺, por exemplo, possui carga +2. Cada Cl⁻ possui carga −1. São necessários dois cloretos para equilibrar um magnésio:</p>

      <div class="concept-flow">
        <div><strong>Mg²⁺</strong><span>+2</span></div>
        <div class="flow-arrow">+</div>
        <div><strong>2 Cl⁻</strong><span>−2 no total</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>MgCl₂</strong><span>carga total 0</span></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Use a carga, não a memória</strong>
        <p>Qual fórmula representa corretamente a combinação entre Ca²⁺ e Cl⁻?</p>
        <div class="choice-row"><button type="button" data-choice="a">CaCl</button><button type="button" data-choice="b">CaCl₂</button><button type="button" data-choice="c">Ca₂Cl</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Um Ca²⁺ precisa de dois Cl⁻ para que a soma das cargas seja zero." data-wrong-text="Some as cargas. A fórmula precisa representar uma proporção eletricamente neutra."></div>
      </div>
    </section>

    <section>
      <h3>5. Ligação covalente: átomos compartilham densidade eletrônica</h3>
      <p>Em muitas combinações entre não metais, a formação de íons separados não é o modelo mais adequado. Os átomos podem formar <strong>ligações covalentes</strong>, nas quais pares de elétrons ocupam regiões associadas a mais de um núcleo. No modelo de Lewis, representamos isso como pares de elétrons compartilhados.</p>
      <p>Na molécula de água, o oxigênio forma duas ligações covalentes com dois hidrogênios. A escrita <strong>H–O–H</strong> representa a conectividade entre os átomos; cada traço corresponde, no modelo de Lewis, a um par de elétrons compartilhado.</p>

      <div class="visual-box">
        <strong class="card-title">Água: uma representação de Lewis simplificada</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Representação de Lewis simplificada da molécula de água. O oxigênio aparece no centro ligado a dois hidrogênios por dois pares compartilhados de elétrons. Dois pares de elétrons não ligantes permanecem associados ao oxigênio. O desenho é uma representação, não uma fotografia da molécula.">
          <text x="380" y="48" text-anchor="middle" font-size="16" font-weight="900" fill="#104a9b">H₂O</text>
          <text x="230" y="155" text-anchor="middle" font-size="34" font-weight="900" fill="#617087">H</text>
          <text x="380" y="155" text-anchor="middle" font-size="38" font-weight="900" fill="#b42318">O</text>
          <text x="530" y="155" text-anchor="middle" font-size="34" font-weight="900" fill="#617087">H</text>
          <line x1="265" y1="145" x2="340" y2="145" stroke="#1967d2" stroke-width="6"/>
          <line x1="420" y1="145" x2="495" y2="145" stroke="#1967d2" stroke-width="6"/>
          <g fill="#1967d2"><circle cx="365" cy="92" r="6"/><circle cx="395" cy="92" r="6"/><circle cx="365" cy="198" r="6"/><circle cx="395" cy="198" r="6"/></g>
          <text x="302" y="127" text-anchor="middle" font-size="13" fill="#104a9b">par compartilhado</text>
          <text x="458" y="127" text-anchor="middle" font-size="13" fill="#104a9b">par compartilhado</text>
          <text x="470" y="223" text-anchor="middle" font-size="13" fill="#617087">pares não ligantes no O</text>
          <text x="380" y="275" text-anchor="middle" font-size="13" fill="#617087">A geometria real da molécula de água é angular; H–O–H em linha aqui mostra apenas a conectividade.</text>
        </svg>
      </div>

      <div class="note-box"><strong>Compartilhar não significa “dividir exatamente ao meio” em todas as ligações</strong><p>Átomos diferentes podem atrair de forma diferente a densidade eletrônica compartilhada. Essa diferença está relacionada à <strong>eletronegatividade</strong>. Por isso, ligação covalente não é sinônimo de distribuição perfeitamente simétrica de carga.</p></div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Reconheça o modelo</strong>
        <p>Na representação H–O–H, o que cada traço indica?</p>
        <div class="choice-row"><button type="button" data-choice="a">Um par de elétrons compartilhado em uma ligação covalente</button><button type="button" data-choice="b">Um elétron transferido definitivamente do H para o O</button><button type="button" data-choice="c">Uma molécula diferente escondida entre os átomos</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O traço é uma convenção para representar um par eletrônico de ligação." data-wrong-text="Na ligação covalente, o modelo central é o compartilhamento de densidade eletrônica entre os átomos."></div>
      </div>
    </section>

    <section>
      <h3>6. Substâncias covalentes podem formar moléculas ou redes extensas</h3>
      <p>Nem toda substância covalente é formada por pequenas moléculas isoladas. Água, oxigênio e dióxido de carbono são exemplos moleculares. Já materiais como diamante e muitas estruturas baseadas em silício formam <strong>redes covalentes extensas</strong>.</p>
      <p>Essa diferença é importante porque dizer apenas “é covalente” não determina sozinho todas as propriedades macroscópicas. Tamanho, geometria, polaridade, forças entre moléculas e presença de redes extensas também importam.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Covalente molecular</strong><p>Existem unidades moleculares identificáveis. As propriedades também dependem das forças de atração entre essas moléculas.</p></div>
        <div class="example-box"><strong class="card-title">Rede covalente</strong><p>As ligações se estendem por uma estrutura muito grande. Não há uma pequena molécula que represente sozinha todo o sólido.</p></div>
      </div>

      <div class="ok-box"><strong>Resposta clara</strong><p><strong>Ligação covalente</strong> descreve como os átomos estão unidos localmente. Para prever propriedades de uma substância, também precisamos saber <strong>como essas unidades se organizam no material</strong>.</p></div>
    </section>

    <section>
      <h3>7. Ligação metálica: elétrons deslocalizados ajudam a explicar condução e deformação</h3>
      <p>Nos metais, os átomos formam uma estrutura extensa em que os elétrons de valência não ficam associados apenas a um par específico de átomos. Um modelo introdutório descreve <strong>centros positivos organizados em rede imersos em elétrons deslocalizados</strong>.</p>
      <p>Esses elétrons móveis ajudam a explicar por que muitos metais conduzem bem corrente elétrica e calor. Como a ligação metálica não depende de pares direcionais isolados da mesma forma que uma ligação covalente simples, camadas do metal podem se deslocar sem que toda a estrutura se desfaça imediatamente, contribuindo para propriedades como maleabilidade e ductilidade.</p>

      <div class="visual-box">
        <strong class="card-title">Modelo didático de ligação metálica</strong>
        <svg class="lesson-visual" viewBox="0 0 760 330" role="img" aria-label="Modelo didático de uma estrutura metálica. Centros positivos aparecem organizados em uma rede e vários elétrons menores aparecem distribuídos entre eles, indicando deslocalização. Uma seta mostra que os elétrons podem responder a um campo elétrico aplicado.">
          <defs><marker id="cap04ArrowMetal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="80" y="58" width="600" height="205" rx="18" fill="#f8fbff" stroke="#c5d4e5"/>
          <g fill="#dfe8f4" stroke="#617087" stroke-width="2">
            <circle cx="160" cy="110" r="27"/><circle cx="280" cy="110" r="27"/><circle cx="400" cy="110" r="27"/><circle cx="520" cy="110" r="27"/><circle cx="640" cy="110" r="27"/>
            <circle cx="160" cy="210" r="27"/><circle cx="280" cy="210" r="27"/><circle cx="400" cy="210" r="27"/><circle cx="520" cy="210" r="27"/><circle cx="640" cy="210" r="27"/>
          </g>
          <g font-size="16" font-weight="900" fill="#4b5b72" text-anchor="middle"><text x="160" y="116">+</text><text x="280" y="116">+</text><text x="400" y="116">+</text><text x="520" y="116">+</text><text x="640" y="116">+</text><text x="160" y="216">+</text><text x="280" y="216">+</text><text x="400" y="216">+</text><text x="520" y="216">+</text><text x="640" y="216">+</text></g>
          <g fill="#1967d2"><circle cx="220" cy="88" r="7"/><circle cx="340" cy="150" r="7"/><circle cx="460" cy="85" r="7"/><circle cx="580" cy="158" r="7"/><circle cx="225" cy="235" r="7"/><circle cx="350" cy="245" r="7"/><circle cx="470" cy="188" r="7"/><circle cx="590" cy="238" r="7"/></g>
          <path d="M210 292 H550" stroke="#1967d2" stroke-width="4" marker-end="url(#cap04ArrowMetal)"/>
          <text x="380" y="316" text-anchor="middle" font-size="13" fill="#104a9b">elétrons deslocalizados podem responder ao campo elétrico</text>
        </svg>
        <p class="visual-caption">O “mar de elétrons” é um modelo introdutório. A descrição moderna dos metais usa modelos quânticos mais sofisticados, como bandas de energia.</p>
      </div>
    </section>

    <section>
      <h3>8. A Tabela Periódica ajuda a prever o tipo de ligação — mas não funciona como uma máquina de respostas</h3>
      <p>A classificação em metal e não metal oferece um primeiro mapa para muitos exemplos escolares. Ela permite formular uma previsão inicial, que depois deve ser refinada quando necessário.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Combinação comum</th><th>Modelo introdutório mais frequente</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td>metal + não metal</td><td>iônica</td><td>NaCl, MgO</td></tr>
            <tr><td>não metal + não metal</td><td>covalente</td><td>H₂O, CO₂</td></tr>
            <tr><td>metal + metal</td><td>metálica</td><td>Cu, Al e ligas metálicas</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note-box"><strong>Isso é uma tendência didática, não uma fronteira absoluta</strong><p>As ligações químicas não formam três caixas perfeitamente separadas na natureza. Existem diferentes graus de caráter iônico e covalente, compostos com estruturas complexas e materiais que exigem modelos mais avançados. A tabela acima serve para construir o primeiro modelo mental correto, não para encerrar o assunto.</p></div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Volte à feira de Ciências</strong>
        <p>Qual associação está correta?</p>
        <div class="choice-row"><button type="button" data-choice="a">Cu — iônica; NaCl — metálica; H₂O — metálica</button><button type="button" data-choice="b">Cu — metálica; NaCl — iônica; H₂O — covalente molecular</button><button type="button" data-choice="c">Cu — covalente molecular; NaCl — covalente molecular; H₂O — iônica</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Agora conseguimos relacionar os três materiais a modelos de ligação diferentes." data-wrong-text="Pense nas partículas: rede metálica no cobre, íons no cloreto de sódio e moléculas covalentes na água."></div>
      </div>
    </section>

    <section>
      <h3>9. O tipo de ligação ajuda a explicar propriedades, mas estrutura e condições também importam</h3>
      <p>Agora podemos voltar às observações iniciais sem cair em frases decoradas. O cobre conduz no estado sólido porque possui elétrons deslocalizados capazes de responder a um campo elétrico. O NaCl sólido não conduz porque seus íons estão presos na rede; quando os íons ganham mobilidade, a condução se torna possível. A água é molecular e suas propriedades não dependem apenas das ligações O–H, mas também das interações entre moléculas.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Cobre</strong><p><strong>Estrutura:</strong> metálica.<br><strong>Consequência:</strong> elétrons móveis e boa condução elétrica.</p></div>
        <div class="example-box"><strong class="card-title">NaCl</strong><p><strong>Estrutura:</strong> rede iônica.<br><strong>Consequência:</strong> íons imóveis no sólido e móveis quando fundido ou dissolvido.</p></div>
        <div class="example-box"><strong class="card-title">Água</strong><p><strong>Estrutura:</strong> moléculas covalentes.<br><strong>Consequência:</strong> propriedades dependem também das interações intermoleculares.</p></div>
      </div>

      <div class="ok-box"><strong>A ideia que fecha o capítulo</strong><p><strong>Composição → elétrons de valência → tipo de ligação → estrutura do material → propriedades observáveis.</strong> Essa cadeia não permite prever tudo sozinha, mas transforma uma lista de nomes em uma explicação química.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <h3>10. Checkpoint — você consegue explicar por que os átomos se ligam?</h3>

      <div class="quick-question" data-choice-question data-correct="c"><strong>1. Causa física</strong><p>Qual é a melhor explicação introdutória para a formação de uma ligação química?</p><div class="choice-row"><button type="button" data-choice="a">Os átomos têm vontade de completar o octeto</button><button type="button" data-choice="b">Todo encontro entre átomos produz uma ligação</button><button type="button" data-choice="c">As interações podem levar o sistema a uma configuração de energia mais baixa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A linguagem de energia e interações elétricas é mais fundamental do que atribuir intenção aos átomos." data-wrong-text="Uma ligação não é vontade nem consequência automática de qualquer aproximação."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Valência</strong><p>Quais elétrons participam mais diretamente de muitas ligações dos elementos representativos?</p><div class="choice-row"><button type="button" data-choice="a">Os elétrons de valência</button><button type="button" data-choice="b">Somente os elétrons mais próximos do núcleo</button><button type="button" data-choice="c">Os prótons que saem do núcleo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Os elétrons mais externos estão diretamente ligados aos padrões de reatividade estudados aqui." data-wrong-text="Os prótons permanecem no núcleo em processos químicos comuns; observe a região eletrônica mais externa."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>3. Octeto</strong><p>Como a regra do octeto deve ser tratada?</p><div class="choice-row"><button type="button" data-choice="a">Como lei sem exceções para todos os elementos</button><button type="button" data-choice="b">Como modelo útil para muitos casos, com limites e exceções</button><button type="button" data-choice="c">Como explicação de que os átomos pensam</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. Modelos são úteis quando sabemos também seus limites." data-wrong-text="A regra do octeto ajuda em muitos exemplos, mas não é universal."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>4. Ligação iônica</strong><p>O que mantém uma rede iônica como a do NaCl?</p><div class="choice-row"><button type="button" data-choice="a">Moléculas neutras coladas ao acaso</button><button type="button" data-choice="b">Somente a força da gravidade</button><button type="button" data-choice="c">Atrações eletrostáticas entre íons de cargas opostas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A rede é estabilizada pela interação eletrostática entre os íons." data-wrong-text="Procure a interação entre partículas carregadas positiva e negativamente."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>5. Fórmula iônica</strong><p>Qual fórmula combina Al³⁺ e O²⁻ de modo que a carga total seja zero?</p><div class="choice-row"><button type="button" data-choice="a">AlO</button><button type="button" data-choice="b">Al₂O₃</button><button type="button" data-choice="c">Al₃O₂</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. 2 × (+3) = +6 e 3 × (−2) = −6; a soma é zero." data-wrong-text="Procure o menor número inteiro de íons que faça as cargas +3 e −2 se compensarem."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Ligação covalente</strong><p>Qual ideia define melhor uma ligação covalente no modelo introdutório?</p><div class="choice-row"><button type="button" data-choice="a">Compartilhamento de pares eletrônicos entre átomos</button><button type="button" data-choice="b">Transferência obrigatória de todos os elétrons</button><button type="button" data-choice="c">Ausência de qualquer interação elétrica</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O modelo de Lewis representa pares de elétrons compartilhados." data-wrong-text="A ligação covalente envolve elétrons associados a mais de um núcleo."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>7. Ligação metálica</strong><p>Qual característica ajuda a explicar a boa condução elétrica do cobre sólido?</p><div class="choice-row"><button type="button" data-choice="a">Íons de cobre livres nadando no sólido</button><button type="button" data-choice="b">Moléculas de cobre que transportam elétrons de uma ponta a outra</button><button type="button" data-choice="c">Elétrons deslocalizados capazes de responder a um campo elétrico</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A mobilidade eletrônica no metal é central para a condução." data-wrong-text="No sólido metálico, não há moléculas discretas de cobre nem íons livres como numa solução."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>8. Situação real</strong><p>Por que o NaCl sólido e uma solução aquosa de NaCl apresentam comportamentos elétricos diferentes?</p><div class="choice-row"><button type="button" data-choice="a">Porque o NaCl deixa de possuir cargas quando dissolve</button><button type="button" data-choice="b">Porque os íons estão presos na rede no sólido e podem se mover na solução</button><button type="button" data-choice="c">Porque a água transforma NaCl em cobre</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. A existência de partículas carregadas não basta; elas precisam ter mobilidade para transportar carga pelo material." data-wrong-text="Compare a mobilidade dos íons nas duas situações."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um visitante da feira afirma: “Se cobre, sal e água são todos feitos de átomos, deveriam ter propriedades parecidas”. Responda em quatro partes: <strong>1)</strong> explique por que os átomos podem formar ligações; <strong>2)</strong> identifique o tipo de ligação predominante em Cu, NaCl e H₂O; <strong>3)</strong> explique por que NaCl sólido não conduz bem, mas seus íons podem conduzir quando móveis; <strong>4)</strong> explique por que conhecer apenas os elementos presentes não basta para prever todas as propriedades de um material.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>A formação de ligações deve ser relacionada a interações que podem diminuir a energia do sistema; Cu deve ser associado à ligação metálica, NaCl à rede iônica e H₂O a moléculas covalentes; a condução do NaCl deve ser relacionada à mobilidade dos íons; e a conclusão deve reconhecer que tipo de ligação, estrutura, organização das partículas e condições físicas também influenciam as propriedades observadas.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo desenvolve o conceito de ligação química a partir de estrutura atômica e Tabela Periódica, abordando elétrons de valência, regra do octeto com seus limites, íons, neutralidade elétrica, ligações iônica, covalente e metálica, representação de Lewis introdutória e relações entre estrutura microscópica e propriedades macroscópicas dos materiais.</p></details>
  `;

  function showChapter() {
    MBB.showLesson({
      unit:'Matéria e modelos',
      technical:'Ligações químicas • valência, íons, covalência e metais',
      title:'Por que os átomos se ligam?',
      objective:'<strong>Objetivo:</strong> compreender por que ligações químicas podem formar arranjos energeticamente favoráveis, diferenciar ligações iônica, covalente e metálica e relacionar esses modelos à estrutura e a propriedades de materiais reais.',
      html:lessonHtml
    });
  }

  MBB.enableChapter('04 Ligações químicas', showChapter);
})();