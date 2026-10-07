(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Durante uma atividade no observatório da escola, o grupo recebe o espectro de uma estrela. No gráfico aparecem linhas associadas a hidrogênio, cálcio e ferro. Surge então uma pergunta inesperada: como podemos encontrar ferro numa estrela distante e também no sangue, cálcio numa estrela e também nos ossos, se o Universo jovem era formado quase todo por hidrogênio e hélio?</strong>
        <p>Ninguém trouxe uma amostra daquela estrela para o laboratório. Mesmo assim, a luz que chega até nós carrega informações sobre os elementos presentes em sua atmosfera. A mesma Tabela Periódica estudada na sala de aula serve para interpretar matéria na Terra e a milhares de anos-luz de distância.</p>
        <p>Mas identificar os elementos é apenas metade do problema. A outra metade é histórica: <strong>esses elementos nem sempre existiram no Universo nas quantidades e formas que encontramos hoje</strong>.</p>

        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Faça uma hipótese antes de continuar</strong>
          <p>Se o Universo inicial continha principalmente hidrogênio e hélio, qual explicação parece mais plausível para a existência atual de carbono, oxigênio e ferro?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Eles sempre existiram em grande quantidade, mas estavam invisíveis</button>
            <button type="button" data-choice="b">Novos núcleos foram formados ao longo da história cósmica por processos nucleares</button>
            <button type="button" data-choice="c">Átomos de hidrogênio mudaram de nome sem alterar seus núcleos</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o caminho. A história dos elementos é também uma história de transformações nucleares ocorridas no Universo." data-wrong-text="Lembre-se: mudar de elemento exige mudar o núcleo, especialmente o número de prótons. Uma simples mudança de nome ou ligação química não faz isso."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> descobrir <strong>como sabemos quais elementos existem nas estrelas</strong> e reconstruir, em escala cósmica, de onde vieram os núcleos que formam planetas, oceanos, rochas e seres vivos.</p>
      </div>
    </section>

    <section>
      <h3>1. A luz funciona como uma fonte de informação química</h3>
      <p>No Capítulo 02 vimos que elétrons ocupam estados de energia e que transições entre esses estados podem estar associadas à emissão ou absorção de luz em comprimentos de onda específicos. Essa ideia permite transformar a luz de uma estrela numa ferramenta de investigação química.</p>
      <p>Cada elemento apresenta um conjunto característico de linhas espectrais em determinadas condições. Ao comparar linhas observadas na luz de uma estrela com padrões medidos em laboratório, os cientistas conseguem identificar elementos presentes em sua atmosfera.</p>

      <div class="visual-box">
        <strong class="card-title">Da luz da estrela à identificação de elementos</strong>
        <svg class="lesson-visual" viewBox="0 0 760 340" role="img" aria-label="Esquema didático mostrando luz de uma estrela sendo separada em um espectro com linhas escuras. Abaixo, padrões simplificados de hidrogênio, cálcio e ferro são comparados com as posições das linhas do espectro observado.">
          <defs><linearGradient id="cap09Spectrum" x1="0" x2="1"><stop offset="0%" stop-color="#6b4cff"/><stop offset="22%" stop-color="#2f72ff"/><stop offset="42%" stop-color="#28a96b"/><stop offset="62%" stop-color="#f0c62d"/><stop offset="80%" stop-color="#f28b30"/><stop offset="100%" stop-color="#d83b3b"/></linearGradient><marker id="cap09ArrowSpec" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <circle cx="90" cy="105" r="48" fill="#ffd86b" stroke="#d6a928" stroke-width="3"/><text x="90" y="110" text-anchor="middle" font-size="15" font-weight="900" fill="#6e5312">estrela</text>
          <path d="M142 105 H235" stroke="#1967d2" stroke-width="4" marker-end="url(#cap09ArrowSpec)"/>
          <rect x="250" y="75" width="450" height="62" rx="10" fill="url(#cap09Spectrum)"/>
          <g stroke="#17233a" stroke-width="5"><line x1="320" y1="75" x2="320" y2="137"/><line x1="385" y1="75" x2="385" y2="137"/><line x1="470" y1="75" x2="470" y2="137"/><line x1="535" y1="75" x2="535" y2="137"/><line x1="615" y1="75" x2="615" y2="137"/><line x1="655" y1="75" x2="655" y2="137"/></g>
          <text x="475" y="58" text-anchor="middle" font-size="15" font-weight="900" fill="#104a9b">espectro observado</text>
          <text x="85" y="192" font-size="14" font-weight="900" fill="#104a9b">Padrões de laboratório</text>
          <text x="120" y="235" font-size="14" fill="#4b5b72">H</text><line x1="180" y1="229" x2="700" y2="229" stroke="#d9e1ec" stroke-width="2"/><g stroke="#1967d2" stroke-width="5"><line x1="320" y1="214" x2="320" y2="244"/><line x1="615" y1="214" x2="615" y2="244"/></g>
          <text x="120" y="278" font-size="14" fill="#4b5b72">Ca</text><line x1="180" y1="272" x2="700" y2="272" stroke="#d9e1ec" stroke-width="2"/><g stroke="#8a6200" stroke-width="5"><line x1="385" y1="257" x2="385" y2="287"/><line x1="655" y1="257" x2="655" y2="287"/></g>
          <text x="120" y="321" font-size="14" fill="#4b5b72">Fe</text><line x1="180" y1="315" x2="700" y2="315" stroke="#d9e1ec" stroke-width="2"/><g stroke="#7a4d94" stroke-width="5"><line x1="470" y1="300" x2="470" y2="330"/><line x1="535" y1="300" x2="535" y2="330"/></g>
        </svg>
        <p class="visual-caption">As posições e cores são esquemáticas. Em análises reais, espectros possuem muitas linhas e exigem medidas precisas, modelos físicos e correções instrumentais.</p>
      </div>

      <div class="note-box"><strong>Uma linha não é uma “fotografia do átomo”</strong><p>A identificação espectroscópica depende da correspondência entre padrões de energia previstos e medidos. Temperatura, pressão, ionização e movimento da fonte também influenciam o espectro observado.</p></div>
    </section>

    <section>
      <h3>2. O Universo jovem não começou com a Tabela Periódica completa</h3>
      <p>Nos primeiros minutos após o Big Bang, o Universo estava quente e denso o suficiente para ocorrerem reações nucleares. Esse processo, chamado <strong>nucleossíntese primordial</strong>, produziu principalmente núcleos de hidrogênio e hélio, além de pequenas quantidades de deutério, hélio-3 e lítio.</p>
      <p>O Universo se expandiu e esfriou rapidamente. Não houve tempo nem condições para produzir, nesse estágio, grandes quantidades de elementos como carbono, oxigênio, silício ou ferro.</p>

      <div class="visual-box">
        <strong class="card-title">A Tabela Periódica foi sendo preenchida ao longo da história cósmica</strong>
        <svg class="lesson-visual" viewBox="0 0 760 260" role="img" aria-label="Linha do tempo simplificada: Universo jovem produz principalmente hidrogênio e hélio; estrelas formam novos elementos por fusão; estrelas evoluídas e eventos explosivos produzem e dispersam elementos mais pesados; nuvens enriquecidas originam novas estrelas e planetas.">
          <defs><marker id="cap09ArrowTime" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="25" y="72" width="145" height="110" rx="14" fill="#eef5ff" stroke="#9dbce5"/><text x="97" y="105" text-anchor="middle" font-size="15" font-weight="900" fill="#104a9b">Universo jovem</text><text x="97" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">H e He predominam</text><text x="97" y="155" text-anchor="middle" font-size="12" fill="#617087">traços de alguns núcleos leves</text>
          <rect x="215" y="72" width="145" height="110" rx="14" fill="#fff8dc" stroke="#e2c56a"/><text x="287" y="105" text-anchor="middle" font-size="15" font-weight="900" fill="#8a6200">Estrelas</text><text x="287" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">fusão nuclear</text><text x="287" y="155" text-anchor="middle" font-size="12" fill="#617087">novos núcleos</text>
          <rect x="405" y="72" width="145" height="110" rx="14" fill="#fff0ef" stroke="#e1aaa5"/><text x="477" y="105" text-anchor="middle" font-size="15" font-weight="900" fill="#9b3028">Evolução estelar</text><text x="477" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">ventos e explosões</text><text x="477" y="155" text-anchor="middle" font-size="12" fill="#617087">dispersam matéria</text>
          <rect x="595" y="72" width="140" height="110" rx="14" fill="#f3f8f1" stroke="#bad7b5"/><text x="665" y="105" text-anchor="middle" font-size="15" font-weight="900" fill="#35633c">Novos sistemas</text><text x="665" y="132" text-anchor="middle" font-size="13" fill="#4b5b72">estrelas + planetas</text><text x="665" y="155" text-anchor="middle" font-size="12" fill="#617087">matéria enriquecida</text>
          <path d="M170 127 H214" stroke="#1967d2" stroke-width="4" marker-end="url(#cap09ArrowTime)"/><path d="M360 127 H404" stroke="#1967d2" stroke-width="4" marker-end="url(#cap09ArrowTime)"/><path d="M550 127 H594" stroke="#1967d2" stroke-width="4" marker-end="url(#cap09ArrowTime)"/>
          <text x="380" y="226" text-anchor="middle" font-size="13" fill="#617087">A composição química do Universo mudou porque novas gerações de estrelas transformaram e reciclaram matéria.</text>
        </svg>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Teste a ideia</strong>
        <p>Qual afirmação descreve melhor a nucleossíntese primordial?</p>
        <div class="choice-row"><button type="button" data-choice="a">Produziu todos os elementos em abundâncias semelhantes</button><button type="button" data-choice="b">Produziu principalmente ferro e ouro</button><button type="button" data-choice="c">Produziu principalmente núcleos leves, especialmente hidrogênio e hélio</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Os elementos mais pesados precisaram de processos cósmicos posteriores." data-wrong-text="O Universo inicial produziu sobretudo núcleos leves; a história dos elementos pesados veio depois."></div>
      </div>
    </section>

    <section>
      <h3>3. Estrelas transformam núcleos: isso é diferente de uma reação química</h3>
      <p>Nas reações químicas estudadas nos capítulos anteriores, os núcleos dos átomos permanecem essencialmente os mesmos; elétrons e ligações são reorganizados. No interior das estrelas ocorre outro tipo de transformação: <strong>reações nucleares</strong> podem modificar os próprios núcleos e, portanto, formar elementos diferentes.</p>
      <p>Durante grande parte da vida de uma estrela, núcleos de hidrogênio participam de processos de fusão que resultam em hélio. Em fases posteriores, dependendo principalmente da massa da estrela, outras etapas podem produzir carbono, oxigênio e núcleos progressivamente mais pesados.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Reação química</strong><p>Muda a organização dos elétrons e das ligações. O número de prótons de cada núcleo permanece o mesmo.</p></div>
        <div class="example-box"><strong class="card-title">Reação nuclear</strong><p>Pode alterar a composição do núcleo. Se o número de prótons muda, muda também a identidade do elemento.</p></div>
      </div>

      <div class="ok-box"><strong>Conexão com a Tabela Periódica</strong><p>Transformar hidrogênio em hélio não significa “ligar” átomos de H para formar uma molécula de He. É uma transformação nuclear: os núcleos são reorganizados por processos que mudam a identidade do elemento.</p></div>
    </section>

    <section>
      <h3>4. Estrelas massivas constroem núcleos cada vez mais pesados — até um limite importante</h3>
      <p>Estrelas muito massivas podem passar por sucessivas etapas de fusão em regiões diferentes de seu interior. Uma representação didática compara essa estrutura a camadas de uma cebola: regiões externas e internas participam de processos nucleares distintos em diferentes fases da evolução estelar.</p>
      <p>Essas etapas produzem muitos elementos até a região do <strong>ferro</strong> na Tabela Periódica. A partir daí, a fusão de núcleos mais pesados deixa de ser, em geral, uma fonte eficiente de energia para sustentar a estrela.</p>

      <div class="visual-box">
        <strong class="card-title">Modelo simplificado das etapas finais de uma estrela massiva</strong>
        <svg class="lesson-visual" viewBox="0 0 760 390" role="img" aria-label="Corte esquemático de uma estrela massiva com camadas concêntricas. As regiões são rotuladas de forma simplificada como hidrogênio, hélio, carbono e oxigênio, elementos intermediários e núcleo rico em elementos do grupo do ferro. O desenho não representa proporções reais.">
          <circle cx="380" cy="185" r="165" fill="#fff0c2" stroke="#d6a928" stroke-width="2"/>
          <circle cx="380" cy="185" r="128" fill="#ffd59f" stroke="#cf8d42" stroke-width="2"/>
          <circle cx="380" cy="185" r="95" fill="#ffc0a8" stroke="#d47659" stroke-width="2"/>
          <circle cx="380" cy="185" r="64" fill="#d9c6ff" stroke="#8f73ce" stroke-width="2"/>
          <circle cx="380" cy="185" r="34" fill="#b8c2cf" stroke="#66758a" stroke-width="2"/>
          <text x="380" y="38" text-anchor="middle" font-size="13" fill="#7b5b12">camadas externas: H</text>
          <text x="380" y="82" text-anchor="middle" font-size="13" fill="#7d4b20">He</text>
          <text x="380" y="122" text-anchor="middle" font-size="13" fill="#874430">C, O</text>
          <text x="380" y="158" text-anchor="middle" font-size="12" fill="#5d42bd">núcleos intermediários</text>
          <text x="380" y="190" text-anchor="middle" font-size="12" font-weight="900" fill="#344256">grupo do Fe</text>
          <line x1="545" y1="185" x2="690" y2="185" stroke="#617087" stroke-width="2"/>
          <text x="695" y="175" font-size="13" fill="#4b5b72">estrutura esquemática</text><text x="695" y="196" font-size="12" fill="#617087">não está em escala</text>
          <text x="380" y="374" text-anchor="middle" font-size="13" fill="#617087">A sequência real depende da massa, composição e estágio evolutivo da estrela.</text>
        </svg>
      </div>

      <div class="note-box"><strong>Não transforme o desenho em regra literal</strong><p>Nem toda estrela passa por todas essas etapas. Estrelas como o Sol não chegam a produzir internamente a mesma sequência de elementos que estrelas muito mais massivas.</p></div>
    </section>

    <section>
      <h3>5. E os elementos mais pesados que o ferro?</h3>
      <p>Elementos pesados exigem outros caminhos nucleares. Um deles é a <strong>captura de nêutrons</strong>: um núcleo incorpora nêutrons e pode depois sofrer transformações que aumentam seu número de prótons.</p>
      <p>Há processos relativamente lentos de captura de nêutrons em estrelas evoluídas e processos extremamente rápidos em ambientes muito energéticos. Evidências modernas mostram que <strong>fusões de estrelas de nêutrons</strong> são uma fonte importante de vários elementos pesados produzidos pelo processo rápido de captura de nêutrons. Outros eventos explosivos raros também podem contribuir.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Fusão estelar</strong><p>Produz muitos núcleos leves e intermediários e, em estrelas massivas, alcança a região do ferro.</p></div>
        <div class="example-box"><strong class="card-title">Captura lenta de nêutrons</strong><p>Ocorre em certas estrelas evoluídas e contribui para a formação de diversos núcleos mais pesados.</p></div>
        <div class="example-box"><strong class="card-title">Captura rápida de nêutrons</strong><p>Pode ocorrer em eventos extremos, como fusões de estrelas de nêutrons, produzindo muitos núcleos muito pesados.</p></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Evite uma frase simplista</strong>
        <p>Qual afirmação é mais correta?</p>
        <div class="choice-row"><button type="button" data-choice="a">Todos os elementos foram fabricados da mesma maneira dentro do Sol</button><button type="button" data-choice="b">Diferentes elementos têm origens nucleares diferentes e podem ser produzidos em fases e ambientes cósmicos distintos</button><button type="button" data-choice="c">Elementos pesados surgem quando moléculas leves se juntam por ligação química</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Não existe uma única fábrica cósmica para toda a Tabela Periódica." data-wrong-text="A origem dos elementos envolve vários processos nucleares, não apenas um tipo de estrela ou uma ligação química."></div>
      </div>
    </section>

    <section>
      <h3>6. Produzir um elemento não basta: ele precisa sair da estrela e entrar no ciclo cósmico</h3>
      <p>Ao longo de sua evolução, estrelas devolvem matéria ao espaço por ventos estelares e, em alguns casos, por eventos explosivos. Essa matéria enriquecida se mistura ao meio interestelar.</p>
      <p>Nuvens de gás e poeira podem então participar da formação de novas estrelas e sistemas planetários. Assim, uma geração de estrelas altera a matéria disponível para a geração seguinte.</p>

      <div class="concept-flow">
        <div><strong>Estrela</strong><span>forma novos núcleos</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Ejeção</strong><span>ventos / explosões</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Nuvem</strong><span>gás + poeira enriquecidos</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Novo sistema</strong><span>estrela + planetas</span></div>
      </div>

      <div class="ok-box"><strong>É aqui que a nossa história entra</strong><p>O Sistema Solar se formou a partir de matéria que já havia sido enriquecida por gerações anteriores de estrelas. Por isso a Terra contém elementos muito mais pesados que hidrogênio e hélio.</p></div>
    </section>

    <section>
      <h3>7. Universo, Terra e corpo humano não têm a mesma composição</h3>
      <p>O Universo observável, considerando a matéria comum, é dominado por hidrogênio e hélio. A Terra rochosa, porém, formou-se numa região em que materiais sólidos ricos em elementos como oxigênio, ferro, silício e magnésio puderam se acumular. Já os seres vivos apresentam outra seleção de elementos em proporções diferentes.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Contexto</th><th>Elementos muito importantes nesse contexto</th><th>Por que a composição difere?</th></tr></thead>
          <tbody>
            <tr><td>Universo</td><td>H e He predominam na matéria comum</td><td>São herança dominante da nucleossíntese primordial e da evolução cósmica.</td></tr>
            <tr><td>Terra rochosa</td><td>O, Fe, Si, Mg, entre outros</td><td>A formação planetária selecionou materiais que puderam condensar e se organizar no Sistema Solar interno.</td></tr>
            <tr><td>Corpo humano</td><td>O, C, H, N, Ca, P, entre outros</td><td>A química da vida utiliza certos elementos em água, moléculas orgânicas, sais minerais e estruturas biológicas.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note-box"><strong>“Somos feitos de estrelas” precisa de precisão</strong><p>Muitos dos núcleos de elementos presentes em nosso corpo foram produzidos ou transformados em gerações anteriores de estrelas e eventos cósmicos. Já grande parte dos núcleos de hidrogênio tem origem muito mais antiga, ligada ao Universo primordial. A frase é poderosa, mas a história real é ainda mais interessante.</p></div>
    </section>

    <section>
      <h3>8. Investigador cósmico — qual processo está mais ligado à origem de cada elemento?</h3>
      <p>Use os casos abaixo como um mapa introdutório. A nucleossíntese real é uma área complexa e alguns elementos recebem contribuições de mais de um processo.</p>

      <div id="cap09Investigator" class="visual-box">
        <strong class="card-title">Escolha um elemento</strong>
        <div class="choice-row">
          <button type="button" data-case="hydrogen">Hidrogênio</button>
          <button type="button" data-case="carbon">Carbono</button>
          <button type="button" data-case="iron">Ferro</button>
          <button type="button" data-case="gold">Ouro</button>
          <button type="button" data-case="calcium">Cálcio</button>
        </div>
        <div id="cap09InvestigatorResult" class="ok-box"><strong>Selecione um caso.</strong><p>A resposta relacionará o elemento ao processo cósmico mais importante para este nível de estudo.</p></div>
      </div>
    </section>

    <section>
      <h3>9. Voltando ao observatório: o espectro conta composição; a Astrofísica reconstrói a história</h3>
      <p>Ao identificar linhas de hidrogênio, cálcio ou ferro na luz de uma estrela, não estamos apenas catalogando símbolos da Tabela Periódica. Estamos usando a estrutura eletrônica dos átomos para reconhecer matéria a distância.</p>
      <p>Ao perguntar de onde esses elementos vieram, avançamos da Química para a Astrofísica nuclear: nucleossíntese primordial, fusão estelar, captura de nêutrons, evolução de estrelas e reciclagem do meio interestelar formam capítulos diferentes de uma mesma história.</p>

      <div class="ok-box"><strong>A cadeia que fecha o capítulo</strong><p><strong>estrutura atômica → espectro → identificação do elemento → processos nucleares → evolução estelar → dispersão → novas estrelas e planetas → matéria da Terra e da vida.</strong></p></div>
    </section>

    <section class="chapter-checkpoint">
      <h3>10. Checkpoint — você consegue reconstruir a história cósmica dos elementos?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Espectroscopia</strong><p>Como podemos identificar elementos na atmosfera de uma estrela distante?</p><div class="choice-row"><button type="button" data-choice="a">Somente trazendo uma amostra da estrela para a Terra</button><button type="button" data-choice="b">Comparando linhas espectrais observadas com padrões medidos e modelados</button><button type="button" data-choice="c">Pela cor aparente da estrela, sem outras medidas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Os padrões espectrais permitem identificar elementos a distância." data-wrong-text="A cor geral não basta; precisamos de informação espectral detalhada."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Universo primordial</strong><p>Quais elementos dominaram a nucleossíntese primordial?</p><div class="choice-row"><button type="button" data-choice="a">Ferro e níquel</button><button type="button" data-choice="b">Carbono e oxigênio</button><button type="button" data-choice="c">Hidrogênio e hélio</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O Universo jovem produziu principalmente núcleos leves." data-wrong-text="Os elementos pesados surgiram principalmente em processos cósmicos posteriores."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Química × nuclear</strong><p>Qual diferença é fundamental?</p><div class="choice-row"><button type="button" data-choice="a">Reações químicas reorganizam elétrons e ligações; reações nucleares podem alterar o núcleo e a identidade do elemento</button><button type="button" data-choice="b">Toda reação química muda o número de prótons</button><button type="button" data-choice="c">Reações nucleares são apenas ligações químicas mais rápidas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. A identidade do elemento está ligada ao número de prótons do núcleo." data-wrong-text="Volte ao conceito de número atômico e compare o que muda em cada transformação."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Estrelas</strong><p>Qual processo sustenta grande parte da vida de uma estrela como o Sol?</p><div class="choice-row"><button type="button" data-choice="a">Combustão química de hidrogênio com oxigênio</button><button type="button" data-choice="b">Fusão nuclear que transforma hidrogênio em hélio</button><button type="button" data-choice="c">Dissolução de sais no plasma</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A energia estelar vem de processos nucleares, não de combustão química comum." data-wrong-text="Uma estrela não funciona como uma fogueira química."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Elementos pesados</strong><p>Qual processo contribui para formar muitos elementos mais pesados que o ferro?</p><div class="choice-row"><button type="button" data-choice="a">Evaporação</button><button type="button" data-choice="b">Ligação covalente</button><button type="button" data-choice="c">Captura de nêutrons em ambientes estelares ou eventos extremos</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Processos de captura de nêutrons são fundamentais para muitos núcleos pesados." data-wrong-text="Estamos tratando de formação de novos núcleos, não de mudanças físicas ou ligações entre átomos."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Reciclagem cósmica</strong><p>Por que ventos estelares e explosões são importantes para planetas futuros?</p><div class="choice-row"><button type="button" data-choice="a">Porque devolvem ao espaço matéria enriquecida que pode entrar na formação de novos sistemas</button><button type="button" data-choice="b">Porque apagam os elementos pesados já produzidos</button><button type="button" data-choice="c">Porque transformam todos os elementos novamente em hidrogênio</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A matéria é redistribuída e pode participar de novas gerações de estrelas e planetas." data-wrong-text="Pense na circulação de matéria entre estrelas e o meio interestelar."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Composição</strong><p>Por que a Terra não possui a mesma proporção de elementos que o Universo como um todo?</p><div class="choice-row"><button type="button" data-choice="a">Porque a Tabela Periódica muda de um lugar para outro</button><button type="button" data-choice="b">Porque processos de formação e diferenciação planetária selecionaram e concentraram certos materiais</button><button type="button" data-choice="c">Porque hidrogênio e hélio não existem fora da Terra</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A composição local resulta da história de formação do sistema e do planeta." data-wrong-text="Os mesmos elementos obedecem às mesmas leis; o que muda são abundâncias e condições de formação."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Síntese</strong><p>Qual frase resume melhor a origem dos elementos?</p><div class="choice-row"><button type="button" data-choice="a">Todos nasceram juntos e pelo mesmo processo</button><button type="button" data-choice="b">Todos os elementos pesados foram produzidos exclusivamente no interior do Sol</button><button type="button" data-choice="c">A Tabela Periódica atual registra elementos cujos núcleos foram formados por diferentes processos ao longo da história do Universo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. A diversidade química atual é resultado de uma história cósmica longa e de vários processos nucleares." data-wrong-text="Procure uma resposta que respeite a diversidade de processos de nucleossíntese."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um visitante do observatório pergunta: “Como vocês podem afirmar que existe ferro numa estrela e, além disso, dizer de onde esse ferro veio?”. Responda em cinco partes: <strong>1)</strong> explique como linhas espectrais identificam elementos; <strong>2)</strong> diferencie reação química de nuclear; <strong>3)</strong> explique por que o Universo primordial não produziu grandes quantidades de ferro; <strong>4)</strong> relacione estrelas massivas à produção de elementos até a região do ferro; <strong>5)</strong> explique como essa matéria pode chegar a novas estrelas e planetas.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>Comparação entre espectros observados e padrões atômicos; distinção entre reorganização eletrônica e transformação nuclear; predominância primordial de H e He; nucleossíntese em estrelas massivas e seus estágios avançados; e dispersão por ventos, ejeções e eventos explosivos, enriquecendo o meio interestelar que forma novas gerações de sistemas.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo relaciona estrutura atômica, espectroscopia e origem dos elementos químicos à evolução do Universo e das estrelas. Trabalha nucleossíntese primordial, fusão estelar, produção de elementos pesados, reciclagem da matéria no meio interestelar e diferenças de composição entre Universo, Terra e seres vivos, articulando Química com conceitos de Física, Astronomia e Ciências da Terra.</p></details>
  `;

  const cases = {
    hydrogen:{title:'Hidrogênio', text:'A maior parte dos núcleos de hidrogênio do Universo está ligada à nucleossíntese primordial. Eles são uma herança muito antiga do Universo jovem.'},
    carbon:{title:'Carbono', text:'Grande parte do carbono é produzida por fusão no interior de estrelas, especialmente quando hélio participa de processos nucleares em fases posteriores da evolução estelar.'},
    iron:{title:'Ferro', text:'Núcleos da região do ferro são produzidos em fases avançadas da evolução de estrelas massivas e em processos associados aos seus estágios finais. A origem detalhada envolve nucleossíntese estelar e explosiva.'},
    gold:{title:'Ouro', text:'O ouro está ligado principalmente a processos de captura rápida de nêutrons. Fusões de estrelas de nêutrons são uma fonte comprovadamente importante; outros eventos extremos também podem contribuir.'},
    calcium:{title:'Cálcio', text:'O cálcio é produzido por processos nucleares em estrelas e eventos explosivos. Sua presença em rochas e ossos só é possível porque essa matéria foi dispersa e reciclada antes da formação do Sistema Solar.'}
  };

  function initChapter(root) {
    const investigator = $('#cap09Investigator', root);
    const result = $('#cap09InvestigatorResult', root);
    if (!investigator || !result) return;
    investigator.querySelectorAll('[data-case]').forEach(button => {
      button.addEventListener('click', () => {
        const data = cases[button.dataset.case];
        investigator.querySelectorAll('[data-case]').forEach(item => item.classList.remove('is-correct'));
        button.classList.add('is-correct');
        result.innerHTML = `<strong>${data.title}</strong><p>${data.text}</p>`;
      });
    });
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Vida, Terra e Cosmos',
      technical:'Elementos no Universo • espectroscopia e nucleossíntese',
      title:'De onde vieram os elementos químicos?',
      objective:'<strong>Objetivo:</strong> compreender como a espectroscopia permite identificar elementos nas estrelas e relacionar a origem dos elementos químicos à nucleossíntese primordial, à evolução estelar e à reciclagem cósmica da matéria.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('09 Elementos no Universo', showChapter);
})();