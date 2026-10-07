(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Ler o espaço',
      technical:'espaço geográfico • paisagem • lugar • território • trabalho • tempo • agentes • escalas',
      title:'Por que uma mesma paisagem pode contar histórias diferentes?',
      objective:'<strong>Objetivo:</strong> distinguir espaço geográfico, paisagem, lugar e território e usar fotografias, observação e comparação temporal para explicar como natureza, trabalho, tecnologia, poder e diferentes grupos transformam os lugares.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">A mesma avenida — mas não o mesmo espaço</strong>
            <p>Em 1902, a Avenida Paulista tinha casarões, jardins e circulação muito diferente da atual. Hoje, o mesmo eixo urbano concentra edifícios altos, transporte, serviços, cultura, comércio, redes técnicas e milhares de deslocamentos diários.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quando a aparência de um lugar muda, o que essa transformação revela sobre sociedade, trabalho, tecnologia e poder?</p>
          </div>
        </section>

        <figure class="geo-figure">
          <div class="geo-figure-grid">
            <div class="geo-figure-panel">
              <a href="https://commons.wikimedia.org/wiki/File:Avenida_Paulista_1902.jpg" target="_blank" rel="noopener noreferrer">
                <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Avenida_Paulista_1902.jpg?width=1200" alt="Avenida Paulista em 1902, vista elevada com casarões, jardins e avenida arborizada." loading="lazy" decoding="async">
              </a>
            </div>
            <div class="geo-figure-panel">
              <a href="https://commons.wikimedia.org/wiki/File:Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_01.jpg" target="_blank" rel="noopener noreferrer">
                <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_01.jpg?width=1200" alt="Vista aérea contemporânea da Avenida Paulista, com edifícios altos, vias, circulação e área urbana densa." loading="lazy" decoding="async">
              </a>
            </div>
          </div>
          <figcaption>
            <strong>Uma paisagem é um registro de transformações</strong>
            <span>À esquerda, Avenida Paulista em 1902; à direita, vista aérea registrada em 2025. As imagens não mostram apenas “antes e depois”: ajudam a investigar mudanças de uso do solo, densidade, circulação, técnicas, atividades econômicas e agentes que produziram o espaço.</span>
            <small>1902: Guilherme Gaensly / Biblioteca Nacional, via Wikimedia Commons — domínio público. 2025: ProtoplasmaKid / Wikimedia Commons — CC BY-SA 4.0. Abra cada imagem para consultar fonte e licença.</small>
          </figcaption>
        </figure>

        <h3>1. Espaço geográfico: resultado de relações, não apenas um cenário</h3>
        <p>O <strong>espaço geográfico</strong> é produzido continuamente pelas relações entre sociedade e natureza. Ruas, plantações, barragens, redes elétricas, áreas preservadas, bairros, indústrias e plataformas digitais conectadas a lugares físicos fazem parte dessa produção.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Natureza</strong><p>Relevo, água, clima, solos, vegetação e outros processos naturais criam condições e limites.</p></div>
          <div class="mini-card"><strong>Sociedade</strong><p>Pessoas, empresas, governos e grupos sociais usam, regulam, disputam e transformam o espaço.</p></div>
          <div class="mini-card"><strong>Técnica e trabalho</strong><p>Ferramentas, infraestrutura, conhecimento e trabalho permitem transformar materiais, distâncias e formas de circulação.</p></div>
        </div>
        <div class="concept-box"><strong>O espaço não fica pronto.</strong><p>Ele acumula marcas de diferentes tempos. Um prédio novo pode ocupar o terreno de uma casa antiga; uma avenida pode seguir um caminho anterior; uma área industrial pode virar região de serviços.</p></div>

        ${choice('1','Espaço geográfico','Qual explicação é mais adequada para a transformação da Avenida Paulista?',[['a','A paisagem mudou apenas porque o tempo passou'],['b','Mudanças econômicas, técnicas, políticas e sociais transformaram usos, construções e circulação'],['c','A natureza deixou de participar do espaço urbano']],'b','Correto. Tempo sozinho não explica a transformação; é preciso identificar processos e agentes que mudaram o uso do espaço.','Procure relações sociais, técnicas, econômicas e políticas — não apenas uma sequência de datas.')}

        <h3>2. Paisagem: aquilo que percebemos — e que precisa ser interpretado</h3>
        <p><strong>Paisagem</strong> é o conjunto de formas e elementos que podemos perceber em um espaço. Ela inclui componentes naturais e sociais e pode ser observada por visão, sons, cheiros, movimentos e outros sentidos.</p>
        <div class="two-col">
          <div class="mini-card"><strong>O que a fotografia mostra?</strong><p>Formas visíveis em um instante: edificações, vegetação, vias, veículos, densidade e parte dos usos do solo.</p></div>
          <div class="mini-card"><strong>O que ela não mostra sozinha?</strong><p>Quem controla os imóveis, quanto custa morar ali, quem foi removido, quais decisões públicas ocorreram ou como cada pessoa vive aquele espaço.</p></div>
        </div>
        <div class="note-box"><strong>Não trate paisagem como sinônimo de fotografia.</strong><p>A foto é uma fonte para observar a paisagem. A paisagem é mais ampla, muda com o tempo e precisa ser relacionada aos processos que a produziram.</p></div>

        ${choice('2','Paisagem','Duas fotografias do mesmo lugar em épocas diferentes permitem concluir imediatamente por que ele mudou?',[['a','Sim; a imagem já contém todas as causas'],['b','Não; elas mostram mudanças visíveis, mas as causas exigem outras fontes e investigação'],['c','Não servem para nenhuma análise geográfica']],'b','Isso. A comparação visual identifica transformações; explicar causas exige dados, documentos, mapas e contexto.','Imagem é evidência importante, mas não substitui a investigação das causas.')}

        <h3>3. Lugar: espaço vivido e carregado de experiência</h3>
        <p>O conceito de <strong>lugar</strong> ajuda a compreender vínculos cotidianos, pertencimento, memória, uso e experiência. Uma praça pode ser rota de passagem para uma pessoa, local de trabalho para outra e espaço de convivência para quem mora perto.</p>
        <div class="field-box">
          <strong class="card-title">Observe sem sair do lugar</strong>
          <p>Pense no entorno de sua escola ou de sua casa. Quais pontos você reconhece de imediato? Onde costuma esperar, atravessar, comprar, conversar ou evitar? Essas experiências ajudam a transformar um ponto do mapa em lugar vivido.</p>
        </div>
        <p>Isso não significa que um lugar seja percebido igualmente por todos. Idade, mobilidade, renda, segurança, trabalho e acesso a serviços podem produzir experiências muito diferentes no mesmo espaço.</p>

        ${choice('3','Lugar','Qual situação representa melhor o conceito geográfico de lugar?',[['a','As coordenadas exatas de uma escola, sem considerar quem a utiliza'],['b','A relação de estudantes, trabalhadores e moradores com a escola e seu entorno'],['c','A lista de todos os países do mundo']],'b','Correto. Lugar envolve experiência, uso, memória e pertencimento em relação a um espaço concreto.','Localização é importante, mas lugar acrescenta a dimensão da experiência vivida.')}

        <h3>4. Território: quando espaço e poder aparecem juntos</h3>
        <p><strong>Território</strong> envolve relações de poder, controle, regras, apropriação e disputa sobre uma área. Países têm territórios, mas o conceito também ajuda a analisar terras indígenas, unidades de conservação, áreas controladas por empresas, espaços comunitários e conflitos urbanos.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Usar</strong><p>Quem circula, mora, produz, trabalha ou depende daquele espaço?</p></div>
          <div class="mini-card"><strong>Controlar</strong><p>Quem define regras, limites, acesso, propriedade ou formas permitidas de uso?</p></div>
        </div>
        <div class="concept-box"><strong>Território não é apenas “um pedaço de chão”.</strong><p>O mesmo espaço pode ser usado por muitos grupos, mas o poder de decidir sobre ele costuma ser desigual.</p></div>

        ${choice('4','Território','Uma prefeitura muda as regras de uso de uma praça e vendedores contestam a decisão. Qual conceito aparece com força?',[['a','Território, porque há disputa sobre uso, regra e controle do espaço'],['b','Somente clima'],['c','Somente latitude']],'a','Correto. A disputa envolve quem pode usar o espaço, sob quais regras e com qual poder de decisão.','Quando controle, regra e disputa aparecem, território é uma chave importante de análise.')}

        <h3>5. Um fenômeno pode mudar quando mudamos a escala</h3>
        <p>Em Geografia, <strong>escala geográfica</strong> também significa o nível em que analisamos um processo. Um problema observado em uma rua pode ter relações com decisões do município, políticas nacionais ou fluxos globais.</p>
        <div class="scale-strip">
          <div class="scale-card"><strong>Local</strong><p>Rua, escola, bairro, praça, córrego.</p></div>
          <div class="scale-card"><strong>Regional/nacional</strong><p>Município, região metropolitana, estado, país.</p></div>
          <div class="scale-card"><strong>Global</strong><p>Redes mundiais, clima, comércio, tecnologia e fluxos internacionais.</p></div>
        </div>
        <p>As escalas não competem. Elas ajudam a ver partes diferentes do mesmo fenômeno. O preço de um imóvel em uma avenida, por exemplo, pode depender de decisões locais, infraestrutura metropolitana e investimentos ligados a redes econômicas mais amplas.</p>

        ${choice('5','Escalas','Por que comparar escalas melhora uma explicação geográfica?',[['a','Porque todo problema local tem uma única causa global'],['b','Porque permite relacionar processos próximos e amplos sem reduzir um ao outro'],['c','Porque elimina a necessidade de observar o lugar']],'b','Isso. Mudar de escala permite conectar processos sem apagar as particularidades locais.','Escalas ajudam a relacionar fenômenos; nenhuma substitui automaticamente as outras.')}

        <h3>6. Quem transforma o espaço? Procure os agentes</h3>
        <p>Transformações espaciais não acontecem por uma vontade abstrata chamada “cidade” ou “sociedade”. Elas envolvem <strong>agentes</strong> com interesses e poderes diferentes.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Poder público</strong><p>Planeja vias, define zoneamento, cobra impostos, presta serviços e regula usos.</p></div>
          <div class="mini-card"><strong>Empresas</strong><p>Investem, constroem, extraem recursos, transportam e reorganizam atividades.</p></div>
          <div class="mini-card"><strong>Moradores e trabalhadores</strong><p>Produzem cotidiano, reivindicam serviços, ocupam, cuidam e transformam lugares.</p></div>
          <div class="mini-card"><strong>Movimentos e organizações</strong><p>Disputam direitos, preservação, moradia, mobilidade, território e reconhecimento.</p></div>
        </div>
        <div class="geo-process">
          <span>observe a mudança</span><b>→</b><span>identifique agentes</span><b>→</b><span>compare interesses</span><b>→</b><span>procure evidências</span>
        </div>

        ${choice('6','Agentes','Uma área industrial virou região de escritórios e moradias. Qual pergunta ajuda mais a explicar a mudança?',[['a','Quais agentes investiram, regularam, venderam, construíram e passaram a usar a área?'],['b','Qual é a cor predominante dos prédios?'],['c','A mudança ocorreu sozinha?']],'a','Correto. Identificar agentes e interesses aproxima a paisagem visível dos processos que produziram a transformação.','A aparência é o ponto de partida; a explicação precisa chegar aos agentes e relações.')}

        <h3>7. Observatório do lugar onde vivo — primeira etapa</h3>
        <div class="field-box">
          <strong class="card-title">Escolha um lugar para acompanhar durante o módulo</strong>
          <p>Pode ser o entorno da escola, sua rua, uma praça, um córrego, uma avenida ou outro espaço que você conheça. Não precisa ser “bonito” nem famoso.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>Registre</strong><p>Liste cinco elementos da paisagem: construções, vegetação, circulação, usos, sons ou infraestruturas.</p></div>
            <div class="mini-card"><strong>Pergunte</strong><p>Que marcas parecem antigas? O que parece recente? Quem usa o espaço? Quem decide sobre ele?</p></div>
          </div>
          <p><strong>Guarde esse lugar.</strong> Nos próximos capítulos ele voltará para ser localizado em mapa, relacionado a fluxos, desigualdades, resíduos, riscos e decisões territoriais.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — explique uma transformação</h3>
          <div class="challenge-box">
            <strong>Desafio: não fique no “antes e depois”</strong>
            <p>Escolha uma transformação visível nas imagens da Avenida Paulista. Escreva uma explicação curta usando pelo menos três destes termos: <strong>paisagem, espaço geográfico, trabalho, técnica, agente, território, escala</strong>.</p>
            <details><summary>O que uma boa resposta precisa fazer?</summary><p>Ela deve apontar uma mudança concreta, relacioná-la a processos ou agentes e evitar dizer apenas que “a cidade evoluiu”. Por exemplo: a verticalização da paisagem pode ser relacionada a mudanças no uso do solo, valorização imobiliária, técnicas construtivas, infraestrutura e decisões de diferentes agentes ao longo do tempo.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo introduz a leitura geográfica das paisagens e suas transformações, relacionando sociedade, natureza, trabalho, técnica, tempo, agentes sociais, território e diferentes escalas. Essa base será usada nos capítulos seguintes para cartografia, fluxos, produção, riscos e governança ambiental.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> paisagem é o que percebemos; lugar é o espaço vivido; território evidencia poder e controle; espaço geográfico reúne as relações e transformações que conectam sociedade e natureza. A Geografia começa quando deixamos de apenas olhar e passamos a explicar.</div>
      `
    });
  }

  MBB.enableChapter?.('01 Espaço', showChapter);
})();
