(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Durante a organização do laboratório da escola, sua equipe encontra um frasco transparente sem rótulo ao lado de produtos de limpeza. Um aluno sugere cheirar o líquido para descobrir o que é; outro diz que, por parecer água, provavelmente não há problema.</strong>
        <p>O professor interrompe os dois. Um líquido incolor pode ser água, mas também pode ser corrosivo, inflamável, tóxico ou simplesmente incompatível com outro produto próximo. Sem identificação confiável, <strong>a aparência não permite concluir o que existe no frasco nem como manipulá-lo com segurança</strong>.</p>
        <p>A situação parece simples, mas resume uma competência essencial da Química: conhecer substâncias não significa apenas saber fórmulas e reações. Significa também <strong>interpretar informações de perigo, avaliar condições de exposição e tomar decisões que reduzam riscos</strong>.</p>

        <div class="quick-question" data-choice-question data-correct="c">
          <strong>Qual é a primeira decisão correta?</strong>
          <p>O que fazer diante de um produto químico sem identificação confiável?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Cheirar com cuidado para tentar reconhecer</button>
            <button type="button" data-choice="b">Misturar uma pequena quantidade com outro produto conhecido</button>
            <button type="button" data-choice="c">Não usar nem testar informalmente; comunicar o responsável e tratar o conteúdo como não identificado</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Segurança começa pela identificação. Aparência, cheiro ou testes improvisados não substituem rótulo, documentação e procedimento adequado." data-wrong-text="O problema é justamente não conhecer a substância. Não crie uma exposição para tentar descobrir o que ela é."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> aprender a responder uma pergunta prática: <strong>como usar informação química para reconhecer perigos e tomar decisões mais seguras no laboratório, no trabalho e no cotidiano?</strong></p>
      </div>
    </section>

    <section>
      <h3>1. Perigo e risco não são a mesma coisa</h3>
      <p>Uma substância pode possuir uma propriedade perigosa, como ser corrosiva ou inflamável. Isso é parte do <strong>perigo</strong> associado a ela. O <strong>risco</strong>, por outro lado, depende também das condições reais de uso e de exposição: quantidade, concentração, duração, via de contato, temperatura, ventilação, possibilidade de ignição e medidas de controle.</p>
      <p>Por isso, dizer apenas “essa substância é perigosa” não resolve uma situação prática. Precisamos perguntar <strong>qual é o perigo, em quais condições pode ocorrer exposição e como reduzir essa exposição</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Perigo + condições de exposição → avaliação do risco</strong>
        <svg class="lesson-visual" viewBox="0 0 760 280" role="img" aria-label="Fluxo didático mostrando que uma propriedade perigosa do produto e as condições de exposição precisam ser analisadas em conjunto para avaliar o risco e escolher controles adequados.">
          <defs><marker id="cap10ArrowRisk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
          <rect x="35" y="70" width="185" height="105" rx="16" fill="#fff3f1" stroke="#df8f87"/>
          <rect x="285" y="70" width="190" height="105" rx="16" fill="#fff8dc" stroke="#dcc56b"/>
          <rect x="540" y="70" width="185" height="105" rx="16" fill="#eef5ff" stroke="#9dbce5"/>
          <text x="127" y="108" text-anchor="middle" font-size="18" font-weight="900" fill="#9b2c20">Perigo</text>
          <text x="127" y="135" text-anchor="middle" font-size="13" fill="#4b5b72">corrosivo, inflamável,</text><text x="127" y="155" text-anchor="middle" font-size="13" fill="#4b5b72">tóxico, oxidante...</text>
          <text x="380" y="108" text-anchor="middle" font-size="18" font-weight="900" fill="#8a6200">Exposição</text>
          <text x="380" y="135" text-anchor="middle" font-size="13" fill="#4b5b72">quantidade, concentração,</text><text x="380" y="155" text-anchor="middle" font-size="13" fill="#4b5b72">tempo, via, condições</text>
          <text x="632" y="108" text-anchor="middle" font-size="18" font-weight="900" fill="#104a9b">Risco</text>
          <text x="632" y="135" text-anchor="middle" font-size="13" fill="#4b5b72">avaliar e controlar</text><text x="632" y="155" text-anchor="middle" font-size="13" fill="#4b5b72">antes da atividade</text>
          <path d="M220 122 H282" stroke="#1967d2" stroke-width="4" marker-end="url(#cap10ArrowRisk)"/>
          <path d="M475 122 H537" stroke="#1967d2" stroke-width="4" marker-end="url(#cap10ArrowRisk)"/>
          <text x="380" y="225" text-anchor="middle" font-size="14" fill="#617087">Reduzir exposição e controlar a fonte pode reduzir o risco sem alterar a identidade química do produto.</text>
        </svg>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Teste a diferença</strong>
        <p>Dois laboratórios utilizam a mesma substância inflamável, mas um possui procedimento adequado, quantidade mínima necessária e controle de fontes de ignição. O perigo químico deixou de existir?</p>
        <div class="choice-row"><button type="button" data-choice="a">Sim, porque o laboratório está organizado</button><button type="button" data-choice="b">Não. O perigo permanece, mas o risco pode ser reduzido pelas condições e controles</button><button type="button" data-choice="c">Sim, desde que o frasco esteja fechado</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Controle de risco não transforma uma substância inflamável em não inflamável; reduz a probabilidade ou a gravidade de uma ocorrência." data-wrong-text="Separe a propriedade do produto das condições em que ele é utilizado."></div>
      </div>
    </section>

    <section>
      <h3>2. O rótulo é uma fonte de informação, não decoração da embalagem</h3>
      <p>Produtos químicos classificados como perigosos usam sistemas padronizados de comunicação. No ambiente ocupacional brasileiro, a NR-26 adota os princípios do <strong>Sistema Globalmente Harmonizado de Classificação e Rotulagem de Produtos Químicos — GHS</strong>. O objetivo é fazer com que informações essenciais de perigo possam ser reconhecidas de maneira consistente.</p>
      <p>Um rótulo preventivo pode reunir identificação do produto, pictogramas, palavra de advertência, frases de perigo e frases de precaução. Esses elementos precisam ser lidos <strong>antes</strong> do uso, não depois de um incidente.</p>

      <div class="visual-box">
        <strong class="card-title">Como ler um rótulo de perigo</strong>
        <svg class="lesson-visual" viewBox="0 0 760 400" role="img" aria-label="Esquema didático de um rótulo químico com identificação do produto, pictogramas em losangos vermelhos, palavra de advertência, frases de perigo, frases de precaução e identificação do fornecedor.">
          <rect x="90" y="35" width="580" height="320" rx="16" fill="#ffffff" stroke="#8fa6bf" stroke-width="2"/>
          <text x="120" y="78" font-size="22" font-weight="900" fill="#104a9b">IDENTIFICAÇÃO DO PRODUTO</text>
          <g transform="translate(125 105)">
            <rect x="0" y="0" width="70" height="70" transform="rotate(45 35 35)" fill="#fff" stroke="#d22525" stroke-width="5"/>
            <text x="35" y="47" text-anchor="middle" font-size="36" font-weight="900" fill="#111">!</text>
          </g>
          <g transform="translate(230 105)">
            <rect x="0" y="0" width="70" height="70" transform="rotate(45 35 35)" fill="#fff" stroke="#d22525" stroke-width="5"/>
            <text x="35" y="46" text-anchor="middle" font-size="21" font-weight="900" fill="#111">🔥</text>
          </g>
          <text x="360" y="128" font-size="18" font-weight="900" fill="#9b2c20">PALAVRA DE ADVERTÊNCIA</text>
          <text x="360" y="157" font-size="14" fill="#4b5b72">Frases de perigo: natureza do perigo</text>
          <text x="360" y="182" font-size="14" fill="#4b5b72">Frases de precaução: prevenção e resposta</text>
          <line x1="120" y1="220" x2="640" y2="220" stroke="#d5dee8"/>
          <text x="120" y="254" font-size="15" font-weight="900" fill="#104a9b">Informações complementares</text>
          <text x="120" y="280" font-size="14" fill="#4b5b72">armazenamento • descarte • contato do fornecedor</text>
          <text x="380" y="333" text-anchor="middle" font-size="13" fill="#617087">Esquema didático: consulte sempre o rótulo real do produto e sua FDS.</text>
        </svg>
      </div>

      <div class="note-box"><strong>Pictograma não é uma instrução completa</strong><p>O símbolo chama atenção para uma classe de perigo, mas não informa sozinho todas as medidas necessárias. Leia também as frases do rótulo e, no trabalho ou laboratório, consulte a FDS e o procedimento aplicável.</p></div>
    </section>

    <section>
      <h3>3. A FDS reúne informações que não cabem no rótulo</h3>
      <p>A <strong>Ficha com Dados de Segurança — FDS</strong> organiza informações mais detalhadas sobre um produto químico: identificação de perigos, composição relevante, medidas de primeiros socorros, combate a incêndio, controle de derramamentos, manuseio, armazenamento, proteção, propriedades físico-químicas, estabilidade, reatividade, toxicologia, descarte e outras informações técnicas.</p>
      <p>No Brasil, a ABNT NBR 14725:2023 consolidou essa documentação com a denominação FDS, substituindo o uso anterior da sigla FISPQ. Para quem trabalha com produtos químicos, saber localizar e interpretar a FDS é parte da competência profissional.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Antes do uso</strong><p>Identidade, perigos, condições de manuseio, armazenamento e controles necessários.</p></div>
        <div class="example-box"><strong class="card-title">Se algo ocorrer</strong><p>Orientações específicas para exposição, incêndio ou liberação acidental.</p></div>
        <div class="example-box"><strong class="card-title">Depois</strong><p>Informações sobre descarte, transporte e impactos relevantes.</p></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Rótulo ou FDS?</strong>
        <p>Você precisa planejar uma atividade com um produto desconhecido para você e verificar incompatibilidades, condições de armazenamento e procedimentos de emergência. Qual fonte é mais adequada?</p>
        <div class="choice-row"><button type="button" data-choice="a">A cor do líquido</button><button type="button" data-choice="b">Uma foto antiga do frasco</button><button type="button" data-choice="c">O rótulo atual, a FDS correspondente e o procedimento institucional</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Segurança depende de informação específica e atual do produto e do contexto de uso." data-wrong-text="Aparência ou memória não substituem documentação técnica."></div>
      </div>
    </section>

    <section>
      <h3>4. “É a mesma substância” não significa “é o mesmo risco”</h3>
      <p>Concentração e quantidade alteram a situação de exposição. Uma solução diluída e uma solução concentrada da mesma substância podem exigir classificações e cuidados diferentes. Isso não significa que “diluído é sempre seguro”: o efeito depende da substância, da concentração, da quantidade e da forma de contato.</p>
      <p>A Toxicologia também trabalha com a ideia de <strong>dose</strong>: o efeito de uma substância depende de quanto efetivamente alcança o organismo, por qual via e durante quanto tempo. Por isso, frases como “é natural, então não faz mal” ou “é químico, então faz mal” são cientificamente inadequadas.</p>

      <div class="comparison-grid">
        <div class="example-box"><strong class="card-title">Erro de raciocínio</strong><p>“Se uma pequena quantidade é usada num produto comum, qualquer quantidade é segura.”</p></div>
        <div class="example-box"><strong class="card-title">Raciocínio químico</strong><p>Identidade, concentração, dose, via de exposição e condições de uso precisam ser consideradas.</p></div>
      </div>

      <div class="ok-box"><strong>Uma regra intelectual importante</strong><p>Não classifique uma substância como “boa” ou “ruim” apenas pelo nome. Avalie <strong>propriedade, quantidade, concentração, exposição e contexto</strong>.</p></div>
    </section>

    <section>
      <h3>5. Misturar produtos sem conhecer compatibilidade pode criar um perigo novo</h3>
      <p>Quando duas substâncias entram em contato, uma reação pode produzir calor, gases, pressão ou novas substâncias. Por isso, <strong>não se deve misturar produtos químicos ou produtos de limpeza por tentativa e erro</strong>.</p>
      <p>Um exemplo doméstico importante é a água sanitária à base de hipoclorito. Misturá-la com produtos ácidos ou com produtos que contenham amônia pode liberar gases perigosos. A orientação correta não é memorizar “receitas de misturas”, mas seguir o rótulo e <strong>não combinar produtos quando o fabricante não orienta explicitamente esse uso</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Compatibilidade precisa ser verificada antes, não descoberta durante a mistura</strong>
        <div class="concept-flow">
          <div><strong>Produto A</strong><span>identificado</span></div>
          <div class="flow-arrow">+</div>
          <div><strong>Produto B</strong><span>identificado</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>Antes de misturar</strong><span>verificar rótulo, FDS e procedimento</span></div>
        </div>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Produto de limpeza também é Química</strong>
        <p>Você quer potencializar a limpeza juntando dois produtos diferentes. O rótulo não prevê essa mistura. Qual decisão é correta?</p>
        <div class="choice-row"><button type="button" data-choice="a">Misturar pouco primeiro para testar</button><button type="button" data-choice="b">Não misturar; usar cada produto conforme as instruções do fabricante</button><button type="button" data-choice="c">Misturar somente se os dois tiverem cheiro agradável</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Produtos aparentemente comuns podem reagir e gerar novos perigos." data-wrong-text="Teste informal já é uma exposição e pode produzir uma reação perigosa."></div>
      </div>
    </section>

    <section>
      <h3>6. Segurança funciona melhor em camadas</h3>
      <p>Equipamentos de proteção individual são importantes, mas não devem ser a única estratégia. Uma abordagem mais robusta busca primeiro evitar ou reduzir o perigo na fonte e a exposição, usando várias camadas de controle.</p>

      <div class="visual-box">
        <strong class="card-title">Da medida mais estrutural à última barreira pessoal</strong>
        <svg class="lesson-visual" viewBox="0 0 760 350" role="img" aria-label="Pirâmide didática de camadas de controle de riscos. Do topo para a base aparecem eliminar ou substituir quando possível, controles de engenharia, procedimentos e organização, e equipamentos de proteção individual.">
          <polygon points="380,35 305,105 455,105" fill="#e6f4ea" stroke="#81b98b"/>
          <polygon points="305,115 235,190 525,190 455,115" fill="#eef5ff" stroke="#9dbce5"/>
          <polygon points="235,200 165,275 595,275 525,200" fill="#fff8dc" stroke="#dcc56b"/>
          <rect x="110" y="285" width="540" height="50" rx="8" fill="#fff3f1" stroke="#df8f87"/>
          <text x="380" y="82" text-anchor="middle" font-size="14" font-weight="900" fill="#35633c">Eliminar / substituir</text>
          <text x="380" y="157" text-anchor="middle" font-size="15" font-weight="900" fill="#104a9b">Controles de engenharia</text>
          <text x="380" y="242" text-anchor="middle" font-size="15" font-weight="900" fill="#8a6200">Procedimentos, treinamento e organização</text>
          <text x="380" y="317" text-anchor="middle" font-size="15" font-weight="900" fill="#9b2c20">EPI adequado à atividade</text>
        </svg>
        <p class="visual-caption">A aplicação real depende da atividade e da avaliação de risco. EPI é uma camada necessária em muitos casos, mas não corrige sozinho um procedimento inseguro.</p>
      </div>

      <div class="note-box"><strong>“Usar luvas” não é uma instrução completa</strong><p>Materiais diferentes de luvas oferecem resistências diferentes a produtos químicos. O mesmo vale para proteção respiratória e outros equipamentos. A seleção deve seguir a avaliação de risco, a FDS e os procedimentos de segurança aplicáveis.</p></div>
    </section>

    <section>
      <h3>7. Armazenar corretamente evita reações que nem deveriam começar</h3>
      <p>Organização química não significa simplesmente colocar todos os frascos em ordem alfabética. Produtos incompatíveis podem precisar ser separados; recipientes devem permanecer identificados e adequados ao conteúdo; condições de calor, luz, ventilação e acesso podem importar.</p>
      <p>Também é inseguro transferir produtos químicos para garrafas de refrigerante, copos ou embalagens de alimentos. Além da possível incompatibilidade do recipiente, a embalagem pode induzir alguém a ingerir o conteúdo por engano.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Identificação</strong><p>Nunca dependa da memória para saber o conteúdo de um recipiente.</p></div>
        <div class="example-box"><strong class="card-title">Compatibilidade</strong><p>Separe materiais conforme critérios técnicos, não apenas pelo nome ou tamanho da embalagem.</p></div>
        <div class="example-box"><strong class="card-title">Acesso</strong><p>Produtos perigosos precisam de armazenamento e controle compatíveis com o ambiente e os usuários.</p></div>
      </div>
    </section>

    <section>
      <h3>8. Descartar não é simplesmente “jogar fora”</h3>
      <p>Um resíduo químico continua sendo matéria com propriedades químicas. Jogá-lo na pia, no solo ou no lixo comum sem avaliação pode criar riscos para pessoas, instalações e ambiente. O destino depende da composição, concentração, quantidade e regras aplicáveis.</p>
      <p>No laboratório escolar ou profissional, o aluno não deve improvisar neutralizações ou misturas para “fazer o produto desaparecer”. O caminho correto é <strong>identificar o resíduo, manter a segregação prevista e seguir o procedimento institucional de gerenciamento e descarte</strong>.</p>

      <div class="ok-box"><strong>Conexão com os capítulos anteriores</strong><p>Na Química, matéria não desaparece. Uma reação pode transformar um resíduo em outras substâncias, mas isso não garante que o problema foi eliminado. Conservação da massa e conhecimento das reações também são princípios de segurança ambiental.</p></div>
    </section>

    <section>
      <h3>9. Em um incidente, improvisar pode piorar a exposição</h3>
      <p>Se houver derramamento, contato, inalação ou ingestão acidental, a prioridade é <strong>interromper a atividade, alertar o responsável e seguir as orientações específicas do rótulo, da FDS e do plano de emergência</strong>. Não tente “neutralizar” uma exposição com receitas caseiras e não provoque vômito sem orientação profissional.</p>
      <p>No Brasil, o <strong>Disque-Intoxicação 0800 722 6001</strong> fornece orientação gratuita por meio da rede de Centros de Informação e Assistência Toxicológica. Situações graves ou com risco imediato exigem o acionamento do serviço de emergência.</p>

      <div class="challenge-box">
        <strong>Decisão rápida</strong>
        <p>Um colega sofre contato acidental com um produto químico. Você não conhece a substância e alguém sugere aplicar outro produto para “neutralizar”. Qual deve ser sua reação?</p>
        <details><summary>Compare sua resposta</summary><p>Não improvise uma reação química sobre a pessoa. Interrompa a atividade, peça ajuda ao responsável, identifique o produto se isso puder ser feito sem nova exposição e siga as orientações específicas do rótulo/FDS e dos serviços de emergência ou toxicologia.</p></details>
      </div>
    </section>

    <section>
      <h3>10. Investigador MbB — qual informação muda a decisão?</h3>
      <p>Escolha uma situação e observe como a análise química orienta a decisão segura.</p>
      <div id="cap10Investigator" class="choice-row">
        <button type="button" data-case="unknown">Frasco sem rótulo</button>
        <button type="button" data-case="cleaners">Dois limpadores</button>
        <button type="button" data-case="gloves">Produto corrosivo</button>
        <button type="button" data-case="waste">Resíduo de prática</button>
      </div>
      <div id="cap10InvestigatorResult" class="ok-box"><strong>Escolha uma situação.</strong><p>A resposta aparecerá aqui.</p></div>
    </section>

    <section>
      <h3>11. Ler criticamente produtos do cotidiano também é alfabetização científica</h3>
      <p>“Natural”, “sem química”, “forte”, “industrial”, “ecológico” ou “premium” são expressões que podem aparecer em publicidade, mas não substituem composição, concentração, classificação de perigo e instruções reais de uso. <strong>Tudo que é matéria é constituído por substâncias químicas</strong>; a questão relevante é quais substâncias, em que quantidades e em quais condições.</p>
      <p>A mesma postura vale para boatos em redes sociais. Uma dica doméstica que propõe misturar produtos deve ser avaliada com cautela. Popularidade não é evidência de segurança.</p>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Marketing ou informação química?</strong>
        <p>Qual afirmação é mais adequada?</p>
        <div class="choice-row"><button type="button" data-choice="a">Produto natural é sempre menos tóxico</button><button type="button" data-choice="b">Produto industrial é sempre mais perigoso</button><button type="button" data-choice="c">Segurança depende das propriedades, dose, exposição e condições de uso, não apenas da origem ou do marketing</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Origem natural ou sintética, sozinha, não determina toxicidade ou risco." data-wrong-text="Evite transformar origem do produto em sinônimo automático de segurança ou perigo."></div>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <h3>12. Checkpoint — você consegue tomar decisões químicas mais seguras?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Perigo × risco</strong><p>Qual afirmação está correta?</p><div class="choice-row"><button type="button" data-choice="a">Perigo e risco são exatamente sinônimos</button><button type="button" data-choice="b">O perigo é uma propriedade relevante do agente; o risco também depende das condições de exposição e controle</button><button type="button" data-choice="c">Se houver EPI, nenhum produto apresenta perigo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Avaliar risco exige conhecer o perigo e o cenário real de exposição." data-wrong-text="Controles reduzem risco, mas não apagam propriedades intrínsecas do produto."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Frasco sem rótulo</strong><p>Qual é a decisão segura?</p><div class="choice-row"><button type="button" data-choice="a">Cheirar de longe</button><button type="button" data-choice="b">Experimentar uma gota numa reação conhecida</button><button type="button" data-choice="c">Não usar e comunicar o responsável</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Não crie exposição para identificar um produto." data-wrong-text="Se a identidade é desconhecida, testes improvisados aumentam o risco."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Comunicação de perigo</strong><p>Para que servem pictogramas e frases padronizadas?</p><div class="choice-row"><button type="button" data-choice="a">Comunicar classes de perigo e precauções de forma padronizada</button><button type="button" data-choice="b">Indicar a cor real da substância</button><button type="button" data-choice="c">Substituir qualquer treinamento ou FDS</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. São elementos de comunicação, não substitutos de toda a informação técnica." data-wrong-text="O rótulo orienta, mas atividades profissionais podem exigir FDS, procedimento e treinamento."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Concentração</strong><p>Por que a concentração importa numa avaliação de segurança?</p><div class="choice-row"><button type="button" data-choice="a">Porque muda o nome do elemento químico</button><button type="button" data-choice="b">Porque pode alterar a intensidade do perigo e as consequências de uma exposição</button><button type="button" data-choice="c">Porque solução diluída é sempre inofensiva</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Concentração é uma das variáveis relevantes, mas não a única." data-wrong-text="Não existe regra universal de que diluir torne qualquer situação segura."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Misturas domésticas</strong><p>Qual princípio deve orientar o uso de produtos de limpeza?</p><div class="choice-row"><button type="button" data-choice="a">Misturas mais fortes limpam melhor</button><button type="button" data-choice="b">Se os dois são vendidos no supermercado, podem ser misturados</button><button type="button" data-choice="c">Usar segundo o rótulo e não improvisar combinações não previstas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Perfeito. Produtos comuns também podem ser quimicamente incompatíveis." data-wrong-text="Venda doméstica não significa compatibilidade entre produtos diferentes."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>6. EPI</strong><p>Qual afirmação é mais correta?</p><div class="choice-row"><button type="button" data-choice="a">Qualquer luva serve para qualquer produto</button><button type="button" data-choice="b">EPI é uma camada de proteção que deve ser selecionada conforme o risco e o produto</button><button type="button" data-choice="c">Com EPI não é preciso procedimento</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Segurança funciona em camadas e a compatibilidade do EPI importa." data-wrong-text="EPI não substitui identificação, controles e procedimento seguro."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>7. Descarte</strong><p>O que fazer com um resíduo químico de uma prática escolar?</p><div class="choice-row"><button type="button" data-choice="a">Seguir a identificação, segregação e procedimento institucional de descarte</button><button type="button" data-choice="b">Despejar na pia e diluir bastante</button><button type="button" data-choice="c">Misturar com outro resíduo para ocupar menos espaço</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. O destino depende das características do resíduo e das regras aplicáveis." data-wrong-text="Diluição ou mistura improvisada não é um método universal de descarte."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Incidente</strong><p>Qual é a melhor resposta geral diante de uma exposição química?</p><div class="choice-row"><button type="button" data-choice="a">Aplicar imediatamente um produto de efeito oposto</button><button type="button" data-choice="b">Esperar os sintomas aparecerem antes de avisar alguém</button><button type="button" data-choice="c">Interromper a atividade, pedir ajuda e seguir rótulo/FDS e orientação de emergência ou toxicologia</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Não improvise tratamentos químicos." data-wrong-text="Resposta a exposição precisa ser específica ao agente e seguir orientação confiável."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Você assume a organização de um pequeno laboratório escolar e encontra: um frasco sem rótulo, dois produtos incompatíveis armazenados lado a lado, um resíduo sem identificação e alunos que acreditam que “usar luvas resolve tudo”. Elabore um plano em cinco pontos explicando <strong>1)</strong> o que fazer com o frasco; <strong>2)</strong> como decidir o armazenamento; <strong>3)</strong> como tratar o resíduo; <strong>4)</strong> por que o EPI não basta sozinho; <strong>5)</strong> quais fontes de informação devem orientar as decisões.</p><details><summary>O que uma boa resposta precisa conter?</summary><p>Não usar o produto não identificado e comunicar o responsável; organizar armazenamento por compatibilidade e condições definidas tecnicamente; identificar e segregar resíduos conforme procedimento; usar controles em camadas, com EPI adequado quando necessário; e consultar rótulos, FDS, procedimentos institucionais e orientações técnicas confiáveis.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o currículo</summary><p>Este capítulo integra linguagem química, propriedades da matéria, concentração, reatividade e conservação com educação para segurança. Desenvolve leitura de rótulos e FDS, distinção entre perigo e risco, análise de exposição, incompatibilidades, armazenamento, descarte, resposta a incidentes e avaliação crítica de informações sobre produtos químicos no cotidiano e no ambiente de trabalho.</p></details>
  `;

  const cases = {
    unknown:{title:'Frasco sem rótulo', text:'Não use, cheire ou teste informalmente. Isole a situação do uso normal e comunique o responsável para que o material seja tratado conforme o procedimento de produto não identificado.'},
    cleaners:{title:'Dois produtos de limpeza', text:'Não presuma compatibilidade. Use cada produto conforme o rótulo e não faça misturas não previstas pelo fabricante; algumas combinações podem formar gases perigosos.'},
    gloves:{title:'Produto corrosivo', text:'“Colocar qualquer luva” não encerra a avaliação. É preciso conhecer o produto, reduzir a exposição pela organização da atividade e selecionar proteção compatível conforme FDS e procedimento.'},
    waste:{title:'Resíduo de prática', text:'Não despeje automaticamente na pia e não misture resíduos por conveniência. Identifique o resíduo, mantenha a segregação prevista e siga o gerenciamento institucional.'}
  };

  function initChapter(root) {
    const investigator = $('#cap10Investigator', root);
    const result = $('#cap10InvestigatorResult', root);
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
      unit:'Tecnologia e linguagem',
      technical:'Química e segurança • GHS, FDS, risco e prevenção',
      title:'Como a Química ajuda a evitar acidentes?',
      objective:'<strong>Objetivo:</strong> interpretar informações de segurança química, distinguir perigo de risco e tomar decisões responsáveis sobre uso, armazenamento, incompatibilidades, proteção, descarte e resposta a incidentes.',
      html:lessonHtml,
      init:initChapter
    });
  }

  MBB.enableChapter('10 Química e segurança', showChapter);
})();