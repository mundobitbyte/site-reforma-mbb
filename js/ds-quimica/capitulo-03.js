(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">O laboratório maker da escola vai montar uma pequena exposição sobre materiais usados em tecnologia. Sobre a bancada estão um fio de cobre, um dissipador de alumínio, uma pastilha de silício e a ficha técnica de uma lâmpada preenchida com argônio.</strong>
        <p>Os quatro materiais têm funções muito diferentes. O cobre é usado em condutores elétricos, o alumínio aparece em estruturas e dissipadores, o silício é fundamental na eletrônica e o argônio é empregado quando se deseja um gás pouco reativo. Na ficha da exposição, porém, todos precisam ser relacionados ao mesmo recurso: a <strong>Tabela Periódica</strong>.</p>
        <p>Um aluno pergunta por que a tabela não está simplesmente em ordem alfabética. Se fosse apenas uma lista de nomes, isso pareceria mais fácil. O professor então lança o desafio: <strong>antes de consultar uma ficha completa de propriedades, a posição de um elemento na Tabela Periódica já permite fazer algumas previsões gerais?</strong></p>

        <div class="quick-question" data-choice-question data-correct="c">
          <strong>Faça uma hipótese antes de abrir a tabela</strong>
          <p>Qual seria a melhor razão científica para organizar os elementos numa tabela, e não apenas numa lista?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Colocar os nomes mais curtos primeiro</button>
            <button type="button" data-choice="b">Separar elementos antigos dos descobertos recentemente</button>
            <button type="button" data-choice="c">Evidenciar padrões que se repetem nas propriedades dos elementos</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o ponto central. A organização da tabela foi construída para revelar regularidades, não para facilitar uma busca alfabética." data-wrong-text="Uma organização científica precisa representar relações entre os elementos. Procure uma característica que permita comparar e prever propriedades."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> entender como a Tabela Periódica foi construída, como ler grupos e períodos e até onde a posição de um elemento permite fazer previsões sobre suas propriedades.</p>
      </div>
    </section>

    <section>
      <h3>1. A tabela nasceu de um problema real: muitos elementos, muitos dados</h3>
      <p>À medida que novos elementos eram identificados, os químicos acumulavam nomes, massas e propriedades. Uma lista simples ficava cada vez menos útil. O desafio era encontrar <strong>regularidades</strong>: elementos diferentes apresentavam comportamentos que se repetiam?</p>
      <p>No século XIX, várias propostas de classificação apareceram. A contribuição de Dmitri Mendeleev tornou-se especialmente importante porque ele organizou os elementos conhecidos de modo que propriedades semelhantes voltassem a aparecer em intervalos e, quando necessário, <strong>deixou lacunas para elementos ainda não descobertos</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Uma classificação científica precisa organizar e também permitir prever</strong>
        <svg class="lesson-visual" viewBox="0 0 760 270" role="img" aria-label="Esquema mostrando dados de elementos conhecidos sendo organizados por padrões recorrentes. Uma lacuna na sequência leva à previsão de um elemento ainda não conhecido, que depois pode ser comparado com uma descoberta real.">
          <defs><marker id="cap03ArrowHistory" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="28" y="72" width="150" height="100" rx="14" fill="#eef5ff" stroke="#9dbce5"/>
          <rect x="220" y="72" width="150" height="100" rx="14" fill="#f3f8f1" stroke="#bad7b5"/>
          <rect x="412" y="72" width="150" height="100" rx="14" fill="#fff8dc" stroke="#e2c56a"/>
          <rect x="604" y="72" width="128" height="100" rx="14" fill="#f5f2ff" stroke="#c6b8f5"/>
          <text x="103" y="108" text-anchor="middle" font-size="16" font-weight="900" fill="#104a9b">Dados</text><text x="103" y="133" text-anchor="middle" font-size="13" fill="#4b5b72">massa e propriedades</text>
          <text x="295" y="108" text-anchor="middle" font-size="16" font-weight="900" fill="#35633c">Padrões</text><text x="295" y="133" text-anchor="middle" font-size="13" fill="#4b5b72">semelhanças recorrentes</text>
          <text x="487" y="108" text-anchor="middle" font-size="16" font-weight="900" fill="#8a6200">Lacuna</text><text x="487" y="133" text-anchor="middle" font-size="13" fill="#4b5b72">algo ainda faltava</text>
          <text x="668" y="108" text-anchor="middle" font-size="16" font-weight="900" fill="#5d42bd">Previsão</text><text x="668" y="133" text-anchor="middle" font-size="13" fill="#4b5b72">propriedades esperadas</text>
          <path d="M178 122 H219" stroke="#1967d2" stroke-width="4" marker-end="url(#cap03ArrowHistory)"/><path d="M370 122 H411" stroke="#1967d2" stroke-width="4" marker-end="url(#cap03ArrowHistory)"/><path d="M562 122 H603" stroke="#1967d2" stroke-width="4" marker-end="url(#cap03ArrowHistory)"/>
          <text x="380" y="218" text-anchor="middle" font-size="14" fill="#617087">A força da organização não era apenas acomodar o que já se sabia, mas indicar onde faltavam peças.</text>
        </svg>
      </div>

      <div class="note-box"><strong>Um detalhe histórico importante</strong><p>Mendeleev trabalhou principalmente com massas atômicas e propriedades conhecidas em sua época. A forma moderna da tabela só ficou mais consistente quando o <strong>número atômico</strong> passou a ser reconhecido como o critério fundamental de ordenação.</p></div>
    </section>

    <section>
      <h3>2. A chave moderna é o número atômico</h3>
      <p>No Capítulo 1 vimos que o número atômico corresponde ao número de prótons do núcleo e identifica o elemento. Na Tabela Periódica moderna, os elementos aparecem em <strong>ordem crescente de número atômico</strong>.</p>
      <p>Isso significa que a sequência não depende do nome em português, do tamanho do símbolo ou de qual elemento foi descoberto primeiro. Hidrogênio tem número atômico 1, hélio 2, lítio 3, berílio 4 e assim sucessivamente.</p>

      <div class="concept-flow">
        <div><strong>H</strong><span>Z = 1</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>He</strong><span>Z = 2</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Li</strong><span>Z = 3</span></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Teste a regra</strong>
        <p>Se um elemento possui número atômico 13, qual informação determina sua posição básica na sequência da tabela?</p>
        <div class="choice-row"><button type="button" data-choice="a">A primeira letra do nome</button><button type="button" data-choice="b">O fato de possuir 13 prótons no núcleo</button><button type="button" data-choice="c">A massa da amostra utilizada</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O número de prótons define o número atômico e a identidade do elemento." data-wrong-text="Lembre-se: massa da amostra e nome não definem a posição moderna do elemento."></div>
      </div>
    </section>

    <section>
      <h3>3. Períodos são linhas; grupos são colunas</h3>
      <p>A tabela moderna possui <strong>7 períodos</strong>, que são as linhas horizontais, e <strong>18 grupos</strong>, que são as colunas verticais. Essa geometria não é decorativa: ela ajuda a reunir elementos que apresentam regularidades em sua estrutura eletrônica e em várias propriedades químicas.</p>

      <div class="visual-box">
        <strong class="card-title">Como enxergar a estrutura da Tabela Periódica sem decorar a tabela inteira</strong>
        <svg class="lesson-visual" viewBox="0 0 760 410" role="img" aria-label="Representação simplificada da Tabela Periódica com sete linhas identificadas como períodos e dezoito colunas identificadas como grupos. Um período é destacado horizontalmente e um grupo verticalmente.">
          <defs><marker id="cap03ArrowStructure" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <g transform="translate(78 70)">
            ${Array.from({length:7}, (_, r) => Array.from({length:18}, (_, c) => {
              const empty = (r === 0 && c > 0 && c < 17) || (r === 1 && c > 1 && c < 12) || (r === 2 && c > 1 && c < 12);
              if (empty) return '';
              const x = c * 33;
              const y = r * 39;
              const periodHighlight = r === 2;
              const groupHighlight = c === 16;
              const fill = groupHighlight ? '#f5f2ff' : (periodHighlight ? '#eef5ff' : '#ffffff');
              const stroke = groupHighlight ? '#6d4aff' : (periodHighlight ? '#1967d2' : '#b8c6d8');
              return `<rect x="${x}" y="${y}" width="29" height="34" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="${periodHighlight || groupHighlight ? 2 : 1}"/>`;
            }).join('')).join('')}
          </g>
          <text x="376" y="30" text-anchor="middle" font-size="17" font-weight="900" fill="#104a9b">18 grupos → colunas verticais</text>
          <path d="M620 50 V73" stroke="#1967d2" stroke-width="3" marker-end="url(#cap03ArrowStructure)"/>
          <text x="20" y="208" font-size="16" font-weight="900" fill="#104a9b">7 períodos</text><text x="20" y="232" font-size="13" fill="#617087">linhas</text>
          <path d="M64 220 H78" stroke="#1967d2" stroke-width="3" marker-end="url(#cap03ArrowStructure)"/>
          <text x="375" y="370" text-anchor="middle" font-size="14" fill="#1967d2">azul: exemplo de um período</text>
          <text x="375" y="394" text-anchor="middle" font-size="14" fill="#6d4aff">roxo: exemplo de um grupo</text>
        </svg>
      </div>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Mesmo período</strong><p>Os elementos ocupam a mesma linha. Ao avançar da esquerda para a direita, o número atômico aumenta e as propriedades mudam gradualmente, seguindo tendências periódicas.</p></div>
        <div class="example-box"><strong class="card-title">Mesmo grupo</strong><p>Os elementos ocupam a mesma coluna. Em muitos grupos, especialmente entre os elementos representativos, aparecem semelhanças importantes de comportamento químico.</p></div>
      </div>
    </section>

    <section>
      <h3>4. Algumas famílias funcionam como atalhos de comparação</h3>
      <p>Os grupos recebem números de 1 a 18, mas alguns também têm nomes tradicionais muito usados. Esses nomes não dispensam a análise de cada elemento, porém ajudam a reconhecer padrões.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Grupo</th><th>Nome usual</th><th>Exemplos</th><th>Ideia geral</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Metais alcalinos</td><td>Li, Na, K</td><td>Metais muito reativos; o hidrogênio está no grupo 1, mas não é metal alcalino.</td></tr>
            <tr><td>2</td><td>Metais alcalino-terrosos</td><td>Mg, Ca</td><td>Metais reativos, com comportamento diferente do grupo 1.</td></tr>
            <tr><td>17</td><td>Halogênios</td><td>F, Cl, Br, I</td><td>Não metais bastante reativos em condições usuais.</td></tr>
            <tr><td>18</td><td>Gases nobres</td><td>He, Ne, Ar</td><td>Apresentam baixa reatividade em muitas condições usuais.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note-box"><strong>Evite transformar tendência em regra absoluta</strong><p>A posição na tabela permite fazer <strong>previsões gerais</strong>, mas não substitui dados experimentais ou uma ficha técnica. A Química usa tendências para orientar perguntas e comparações, não para adivinhar qualquer propriedade com certeza.</p></div>
    </section>

    <section>
      <h3>5. Metais, não metais e metaloides ocupam regiões diferentes</h3>
      <p>Uma visão ampla da tabela mostra que a maioria dos elementos é classificada como <strong>metal</strong>. Os não metais aparecem principalmente na região superior direita, além do hidrogênio. Entre essas regiões há elementos frequentemente chamados de <strong>metaloides</strong> ou semimetais, cuja classificação pode variar conforme o critério adotado.</p>

      <div class="visual-box">
        <strong class="card-title">Mapa de regiões: uma orientação, não uma fronteira física</strong>
        <svg class="lesson-visual" viewBox="0 0 760 340" role="img" aria-label="Mapa simplificado da Tabela Periódica destacando uma grande região de metais à esquerda e centro, uma região de não metais no canto superior direito e uma faixa aproximada de metaloides entre elas. A figura informa que a fronteira é didática e não uma separação rígida da natureza.">
          <rect x="65" y="55" width="630" height="235" rx="16" fill="#fff" stroke="#c1cedd"/>
          <path d="M80 75 H340 V112 H430 V150 H500 V188 H570 V275 H80 Z" fill="#eef5ff" stroke="#1967d2" stroke-width="2"/>
          <path d="M530 75 H680 V275 H585 V190 H515 V152 H445 V114 H355 V75 Z" fill="#fff3e6" stroke="#c56a2c" stroke-width="2"/>
          <path d="M350 80 L430 112 L455 150 L515 188 L585 230" fill="none" stroke="#6d4aff" stroke-width="14" stroke-linecap="round" stroke-dasharray="18 12"/>
          <text x="220" y="205" text-anchor="middle" font-size="25" font-weight="900" fill="#104a9b">metais</text>
          <text x="610" y="130" text-anchor="middle" font-size="21" font-weight="900" fill="#9a4c17">não metais</text>
          <text x="470" y="302" text-anchor="middle" font-size="15" font-weight="900" fill="#5d42bd">faixa aproximada de metaloides</text>
          <text x="380" y="328" text-anchor="middle" font-size="12" fill="#617087">Esquema didático: classificações de fronteira podem variar entre fontes.</text>
        </svg>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Volte à bancada do laboratório maker</strong>
        <p>Qual conjunto classifica corretamente Cu, Al, Si e Ar de forma geral?</p>
        <div class="choice-row"><button type="button" data-choice="a">Cu e Al são não metais; Si é gás nobre; Ar é metal</button><button type="button" data-choice="b">Todos são metais porque aparecem na mesma tabela</button><button type="button" data-choice="c">Cu e Al são metais; Si é geralmente classificado como metaloide; Ar é gás nobre</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A tabela reúne todos os elementos, mas suas regiões e grupos ajudam a distinguir comportamentos muito diferentes." data-wrong-text="Use as regiões e famílias, não apenas o fato de todos estarem na mesma tabela."></div>
      </div>
    </section>

    <section>
      <h3>6. A posição ajuda a prever propriedades porque a estrutura eletrônica também apresenta regularidades</h3>
      <p>No capítulo anterior vimos que elétrons ocupam estados de energia e que o modelo atual é mais sofisticado que órbitas desenhadas. Aqui basta uma ideia: <strong>a distribuição dos elétrons também segue padrões</strong>. Por isso elementos do mesmo grupo podem apresentar comportamentos químicos semelhantes.</p>
      <p>Não precisamos antecipar toda a distribuição eletrônica neste capítulo. O importante é compreender a relação:</p>

      <div class="concept-flow">
        <div><strong>Estrutura do átomo</strong><span>elétrons</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Posição na tabela</strong><span>grupo e período</span></div>
        <div class="flow-arrow">→</div>
        <div><strong>Tendências</strong><span>propriedades</span></div>
      </div>

      <div class="ok-box"><strong>Resposta clara</strong><p>A Tabela Periódica não produz as propriedades dos elementos. Ela <strong>organiza</strong> os elementos de uma forma que torna visíveis regularidades ligadas à estrutura atômica.</p></div>
    </section>

    <section>
      <h3>7. Leia a tabela como uma fonte de dados, não como um pôster para decorar</h3>
      <p>Uma célula típica da Tabela Periódica apresenta pelo menos o número atômico, o símbolo e o nome do elemento; muitas também mostram a massa atômica. O formato exato pode variar entre tabelas.</p>

      <div class="interactive-lab" id="cap03Explorer">
        <div class="lab-heading"><h4>Explorador de posições</h4></div>
        <p>Escolha um elemento e observe como número atômico, período e grupo ajudam a localizá-lo e compará-lo.</p>
        <div class="choice-row" role="group" aria-label="Elementos para explorar">
          <button type="button" data-element="Na">Na</button>
          <button type="button" data-element="Mg">Mg</button>
          <button type="button" data-element="Al">Al</button>
          <button type="button" data-element="Si">Si</button>
          <button type="button" data-element="Cl">Cl</button>
          <button type="button" data-element="Ar">Ar</button>
          <button type="button" data-element="Cu">Cu</button>
        </div>
        <div id="cap03ExplorerResult" class="lab-result" aria-live="polite"><strong>Escolha um elemento.</strong> O resultado aparecerá aqui.</div>
      </div>

      <div class="example-box"><strong class="card-title">Exemplo: cobre</strong><p><strong>Cu</strong>, número atômico 29, está no período 4 e grupo 11. Sua posição mostra que ele é um metal de transição. Isso combina com o fato de encontrarmos cobre em aplicações elétricas, mas a escolha de um material de engenharia ainda exige propriedades medidas, como condutividade, resistência mecânica, custo e condições de uso.</p></div>
    </section>

    <section>
      <h3>8. Agora podemos resolver o problema da exposição</h3>
      <p>O aluno queria saber por que a tabela não é alfabética. Agora podemos responder sem decorar uma frase:</p>
      <div class="ok-box"><strong>Resposta à pergunta inicial</strong><p>A Tabela Periódica é organizada principalmente em ordem crescente de <strong>número atômico</strong> e estruturada em períodos e grupos para tornar visíveis padrões de propriedades. Por isso Cu, Al, Si e Ar não aparecem juntos por função tecnológica nem por ordem alfabética: cada um ocupa uma posição relacionada à sua identidade atômica e às regularidades que compartilha com outros elementos.</p></div>
      <p>Na exposição maker, a tabela pode orientar uma primeira leitura: Cu e Al aparecem em regiões metálicas; Si fica na região de transição entre metais e não metais; Ar está no grupo 18, dos gases nobres. Mas nenhum desses dados substitui a ficha técnica quando é preciso selecionar um material para uma aplicação real.</p>
    </section>

    <section class="chapter-checkpoint">
      <h3>9. Checkpoint — você consegue ler a organização sem decorar a tabela inteira?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Ordem moderna</strong><p>Qual grandeza organiza os elementos em sequência na Tabela Periódica moderna?</p><div class="choice-row"><button type="button" data-choice="a">Massa da amostra</button><button type="button" data-choice="b">Número atômico</button><button type="button" data-choice="c">Ordem alfabética</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto: o número atômico cresce ao longo da tabela." data-wrong-text="Pense na quantidade de prótons que identifica cada elemento."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Estrutura</strong><p>O que é um período?</p><div class="choice-row"><button type="button" data-choice="a">Uma linha horizontal</button><button type="button" data-choice="b">Uma coluna vertical</button><button type="button" data-choice="c">Uma lista de substâncias</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso: os períodos são as linhas horizontais." data-wrong-text="Grupos são colunas; períodos são linhas."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Grupos</strong><p>Por que elementos de um mesmo grupo podem apresentar propriedades semelhantes?</p><div class="choice-row"><button type="button" data-choice="a">Porque têm o mesmo nome</button><button type="button" data-choice="b">Porque possuem exatamente a mesma massa</button><button type="button" data-choice="c">Porque existem regularidades em sua estrutura eletrônica e comportamento químico</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A tabela torna visíveis regularidades relacionadas à estrutura atômica." data-wrong-text="A semelhança não vem do nome nem de massas idênticas."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. História</strong><p>Por que as lacunas deixadas por Mendeleev foram cientificamente importantes?</p><div class="choice-row"><button type="button" data-choice="a">Porque ele não conhecia os nomes dos elementos</button><button type="button" data-choice="b">Porque permitiam prever elementos e propriedades ainda não confirmados</button><button type="button" data-choice="c">Porque serviam apenas para deixar a tabela simétrica</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A capacidade de previsão fortaleceu a utilidade da classificação." data-wrong-text="A lacuna tinha função científica: indicava uma peça esperada pelo padrão."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Famílias</strong><p>Em qual grupo estão os gases nobres?</p><div class="choice-row"><button type="button" data-choice="a">1</button><button type="button" data-choice="b">17</button><button type="button" data-choice="c">18</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto: He, Ne, Ar e outros gases nobres ficam no grupo 18." data-wrong-text="Halogênios ficam no 17; gases nobres, no 18."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Regiões</strong><p>Qual afirmação é mais adequada sobre metais, não metais e metaloides?</p><div class="choice-row"><button type="button" data-choice="a">Eles ocupam regiões características, mas algumas classificações de fronteira podem variar</button><button type="button" data-choice="b">Existe uma linha física dentro da matéria separando essas classes</button><button type="button" data-choice="c">Todos os elementos de uma região têm exatamente as mesmas propriedades</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. O mapa é útil, mas é uma classificação científica, não uma parede da natureza." data-wrong-text="Evite transformar regiões didáticas em fronteiras absolutas."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Uso responsável de tendências</strong><p>A posição de um elemento na tabela é suficiente para escolher um material para construir uma peça de avião?</p><div class="choice-row"><button type="button" data-choice="a">Sim, porque a tabela contém todas as propriedades de engenharia</button><button type="button" data-choice="b">Não. Ela orienta tendências, mas a escolha exige dados medidos e condições de aplicação</button><button type="button" data-choice="c">Sim, desde que o elemento seja metal</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Tendências ajudam a formular previsões; decisões reais exigem dados específicos." data-wrong-text="A Tabela Periódica não substitui ensaios e fichas técnicas."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Situação da exposição</strong><p>Qual explicação resume melhor por que Cu, Al, Si e Ar aparecem em posições diferentes?</p><div class="choice-row"><button type="button" data-choice="a">Porque foram descobertos em séculos diferentes</button><button type="button" data-choice="b">Porque possuem aplicações tecnológicas diferentes</button><button type="button" data-choice="c">Porque cada elemento possui um número atômico próprio e participa de padrões periódicos diferentes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A função tecnológica não determina a posição; a organização nasce da identidade atômica e das regularidades periódicas." data-wrong-text="Aplicações podem mudar; a posição é determinada por critérios químicos estruturais."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um colega diz: “A Tabela Periódica é só uma tabela enorme para decorar símbolos”. Responda em quatro partes: <strong>1)</strong> qual critério organiza a sequência moderna; <strong>2)</strong> o que grupos e períodos mostram; <strong>3)</strong> um exemplo de família; <strong>4)</strong> por que a tabela permite previsões sem substituir dados experimentais.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>Número atômico crescente; grupos como colunas e períodos como linhas; uma família corretamente identificada, como halogênios ou gases nobres; e a ideia de que tendências periódicas orientam comparações, mas propriedades específicas precisam ser medidas ou consultadas em fontes confiáveis.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo trabalha a Tabela Periódica como sistema de organização dos elementos, abordando história, estrutura, número atômico, grupos, períodos, propriedades gerais, símbolos e nomenclaturas. Também retoma a evolução dos modelos científicos e a interpretação de dados como parte da linguagem científica.</p></details>
  `;

  const explorerData = {
    Na:{name:'Sódio', z:11, period:3, group:1, family:'metal alcalino', note:'Elemento metálico do grupo 1. Sua família apresenta alta reatividade em condições usuais.'},
    Mg:{name:'Magnésio', z:12, period:3, group:2, family:'metal alcalino-terroso', note:'Está no mesmo período do sódio, mas em outro grupo; isso já sinaliza diferenças de comportamento.'},
    Al:{name:'Alumínio', z:13, period:3, group:13, family:'metal', note:'Metal muito usado em estruturas e ligas. A posição orienta a classificação geral, mas não substitui dados de engenharia.'},
    Si:{name:'Silício', z:14, period:3, group:14, family:'geralmente classificado como metaloide', note:'Sua posição próxima à região de fronteira ajuda a contextualizar propriedades intermediárias em algumas classificações.'},
    Cl:{name:'Cloro', z:17, period:3, group:17, family:'halogênio', note:'Não metal do grupo 17, família conhecida por elevada reatividade em muitas condições.'},
    Ar:{name:'Argônio', z:18, period:3, group:18, family:'gás nobre', note:'Elemento do grupo 18, associado a baixa reatividade em muitas condições usuais.'},
    Cu:{name:'Cobre', z:29, period:4, group:11, family:'metal de transição', note:'Metal de transição. Sua aplicação elétrica depende de propriedades medidas, como alta condutividade.'}
  };

  function initChapter(root) {
    const explorer = $('#cap03Explorer', root);
    const result = $('#cap03ExplorerResult', root);
    if (!explorer || !result) return;
    explorer.querySelectorAll('[data-element]').forEach(button => {
      button.addEventListener('click', () => {
        const data = explorerData[button.dataset.element];
        explorer.querySelectorAll('[data-element]').forEach(item => item.classList.remove('is-correct'));
        button.classList.add('is-correct');
        result.innerHTML = `<strong>${data.name} (${button.dataset.element})</strong> Z = ${data.z} • período ${data.period} • grupo ${data.group} • ${data.family}. <span>${data.note}</span>`;
      });
    });
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Matéria e modelos',
      technical:'Tabela Periódica • história, estrutura, grupos, períodos e propriedades',
      title:'Por que a Tabela Periódica tem essa organização?',
      objective:'<strong>Objetivo:</strong> compreender por que a Tabela Periódica é organizada por número atômico e como grupos, períodos e regiões permitem reconhecer padrões e fazer previsões responsáveis.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('03 Tabela Periódica', showChapter);
})();
