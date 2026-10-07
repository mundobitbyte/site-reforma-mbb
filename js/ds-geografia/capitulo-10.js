(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Decidir o território',
      technical:'sustentabilidade • conservação • uso sustentável • restauração • unidades de conservação • governança ambiental • participação • monitoramento • conflitos • decisão territorial',
      title:'Quem decide o que deve ser explorado, protegido ou restaurado?',
      objective:'<strong>Objetivo:</strong> analisar decisões ambientais como decisões territoriais que envolvem evidências, regras, agentes, interesses e escalas; diferenciar proteção, uso sustentável e restauração; interpretar dados de monitoramento e reconhecer a importância da participação social, do acompanhamento dos resultados e da revisão das decisões.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Uma área verde no mapa não responde, sozinha, o que deve acontecer ali</strong>
            <p>Uma floresta pode proteger rios, armazenar carbono, abrigar espécies, sustentar modos de vida e também conter recursos desejados por diferentes atividades econômicas. Se uma área foi degradada, ainda aparece outra possibilidade: restaurá-la.</p>
            <p>Escolher entre proteger, usar sob regras, restaurar ou autorizar determinada exploração exige mais do que preferência pessoal. É preciso localizar o território, conhecer seus processos, identificar quem será afetado, comparar alternativas, aplicar normas, ouvir atores e acompanhar os resultados.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quem tem poder para decidir, que evidências deveriam orientar a decisão e como saber depois se ela funcionou?</p>
          </div>
        </section>

        <figure class="geo-figure">
          <a href="https://eoimages.gsfc.nasa.gov/images/imagerecords/3000/3017/landsat_art_jau_lrg.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/3000/3017/landsat_art_jau_lrg.jpg" alt="Imagem Landsat em falsa cor mostrando rios, floresta e a borda oriental do Parque Nacional do Jaú, no Amazonas." loading="lazy" decoding="async" style="height:auto;max-height:650px;object-fit:contain">
          </a>
          <figcaption>
            <strong>Parque Nacional do Jaú visto pelo Landsat 7</strong>
            <span>A cena, de 31/08/2000, mostra o rio Negro e a borda oriental do parque. A imagem ajuda a observar cobertura vegetal e hidrografia, mas não mostra sozinha por que a área foi protegida, quais regras existem nem como os conflitos de uso são resolvidos.</span>
            <small>NASA Earth Observatory / USGS EROS Data Center. Landsat 7 ETM+, composição em falsa cor.</small>
          </figcaption>
        </figure>

        ${choice('1','O que a imagem prova?','Qual conclusão a imagem permite sustentar diretamente?',[['a','Há extensa cobertura vegetal e uma rede de rios visíveis na área mostrada'],['b','Todos os moradores concordaram com todas as regras da unidade de conservação'],['c','Qualquer atividade econômica é proibida em toda a Amazônia']],'a','Correto. A imagem fornece evidência sobre características espaciais; regras, interesses e participação exigem outras fontes.','Separe o que pode ser observado na imagem daquilo que depende de leis, documentos, dados sociais e processos de decisão.')}

        <h3>1. Sustentabilidade não é um selo verde</h3>
        <p>Uma decisão pode parecer vantajosa no curto prazo e gerar custos que aparecem depois ou em outro lugar. Pensar em <strong>sustentabilidade</strong> exige avaliar se o uso do território pode continuar sem destruir as bases ecológicas, sociais e econômicas de que ele depende.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Tempo</strong><p>O benefício de agora compromete água, solo, biodiversidade ou possibilidades de uso no futuro?</p></div>
          <div class="mini-card"><strong>Distribuição</strong><p>Quem recebe os benefícios e quem assume riscos, perdas, custos ou restrições?</p></div>
          <div class="mini-card"><strong>Limites e evidências</strong><p>Que indicadores mostram se o sistema continua funcionando e quando a decisão precisa ser revista?</p></div>
        </div>
        <div class="note-box"><strong>Evite uma resposta automática.</strong><p>Nem “explorar sempre” nem “proibir sempre” substituem análise territorial. Há áreas e situações em que a proteção precisa ser muito restritiva; em outras, usos sustentáveis podem ser compatíveis com objetivos de conservação; áreas degradadas podem exigir restauração.</p></div>

        ${choice('2','Sustentabilidade','Uma atividade gera renda hoje, mas reduz continuamente a disponibilidade de água da qual ela própria e comunidades próximas dependem. Qual pergunta é indispensável?',[['a','Se o benefício atual consegue continuar sem destruir a base ecológica e social que o torna possível'],['b','Apenas qual é a cor do produto final'],['c','Se a atividade possui propaganda ambiental']],'a','Isso. Sustentabilidade exige olhar duração, limites e distribuição de benefícios e custos.','Pergunte se o sistema consegue se manter e quem suporta as consequências ao longo do tempo.')}

        <h3>2. Proteger não significa sempre a mesma regra de uso</h3>
        <p>O <strong>Sistema Nacional de Unidades de Conservação (SNUC)</strong> organiza 12 categorias em dois grandes grupos. As categorias de <strong>Proteção Integral</strong> priorizam a preservação da natureza e admitem apenas usos indiretos dos recursos naturais, com exceções previstas em lei. As categorias de <strong>Uso Sustentável</strong> procuram compatibilizar conservação com usos permitidos e regulados dos recursos.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Proteção Integral</strong><p>Regras mais restritivas quando o objetivo exige preservar ecossistemas e processos naturais sem uso direto dos recursos.</p></div>
          <div class="mini-card"><strong>Uso Sustentável</strong><p>Permite determinados usos conforme a categoria e suas regras, buscando manter recursos renováveis e processos ecológicos ao longo do tempo.</p></div>
        </div>
        <div class="map-box">
          <strong class="card-title">Veja as áreas e as regras no território real</strong>
          <p>O Cadastro Nacional de Unidades de Conservação reúne informações e dados georreferenciados das UCs federais, estaduais, distritais e municipais.</p>
          <p><a href="https://cnuc.mma.gov.br/" target="_blank" rel="noopener noreferrer">Abrir o Cadastro Nacional de Unidades de Conservação — CNUC</a></p>
        </div>

        ${choice('3','Categorias importam','Por que não é correto afirmar que toda unidade de conservação proíbe qualquer uso dos recursos naturais?',[['a','Porque o SNUC possui categorias com objetivos e regras diferentes, incluindo unidades de Uso Sustentável'],['b','Porque nenhuma unidade possui regras'],['c','Porque toda exploração é automaticamente sustentável']],'a','Correto. A categoria de manejo altera objetivos, usos permitidos e formas de gestão.','Não trate “área protegida” como uma categoria única; consulte o objetivo e as regras da UC específica.')}

        <h3>3. Monitorar muda a qualidade da decisão</h3>
        <p>O Brasil acompanha a supressão da vegetação nativa por sensoriamento remoto. O <strong>PRODES</strong>, do INPE, consolidou para a Amazônia Legal uma taxa de <strong>5.731 km² de desmatamento em 2025</strong>, referente ao período de agosto de 2024 a julho de 2025, redução de 12,07% em relação a 2024.</p>
        <div class="data-box">
          <strong class="card-title">Dado não é apenas diagnóstico: ele pode orientar ação</strong>
          <p>A série do PRODES é usada para avaliar políticas públicas. Já o DETER produz alertas mais frequentes para apoiar fiscalização e resposta. Os sistemas têm objetivos e metodologias diferentes, por isso seus números não devem ser misturados como se medissem exatamente a mesma coisa.</p>
          <p><a href="https://terrabrasilis.dpi.inpe.br/" target="_blank" rel="noopener noreferrer">Explorar mapas e dados no TerraBrasilis / INPE</a></p>
        </div>
        <div class="geo-process"><span>observar</span><b>→</b><span>medir</span><b>→</b><span>decidir</span><b>→</b><span>agir</span><b>→</b><span>monitorar novamente</span></div>

        ${choice('4','Monitoramento','Uma política foi criada para reduzir desmatamento. Qual procedimento permite avaliá-la melhor?',[['a','Comparar séries de dados compatíveis no tempo, considerar método e escala e relacionar mudanças às ações realizadas'],['b','Olhar uma fotografia isolada e concluir que a política funcionou'],['c','Usar qualquer número, mesmo de sistemas com objetivos diferentes, como se fosse a mesma medida']],'a','Isso. Avaliação exige série comparável, método conhecido e relação cuidadosa entre evidência e ação.','Monitorar não é procurar um número que confirme a opinião inicial; é testar se os resultados esperados apareceram.')}

        <h3>4. Governança ambiental: quem participa, quem decide e quem responde?</h3>
        <p><strong>Governança ambiental</strong> trata das regras, instituições, processos e relações por meio das quais decisões são construídas, implementadas e acompanhadas. O poder público possui competências legais, mas empresas, comunidades, povos tradicionais, pesquisadores, organizações sociais e cidadãos podem produzir conhecimento, defender interesses, participar de consultas e acompanhar a gestão.</p>
        <p>Nas unidades de conservação federais, os <strong>conselhos gestores</strong> são um instrumento formal de relação entre a UC e a sociedade. Segundo o ICMBio, em agosto de 2026, 285 das 334 UCs federais possuíam conselhos formados. Eles podem acompanhar plano de manejo, integrar atores e discutir problemas da gestão.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Órgãos públicos</strong><p>Aplicam leis, planejam, autorizam, fiscalizam, monitoram e respondem por competências definidas.</p></div>
          <div class="mini-card"><strong>Comunidades e povos</strong><p>Possuem conhecimentos, direitos, formas de uso e experiências diretas do território.</p></div>
          <div class="mini-card"><strong>Empresas e produtores</strong><p>Tomam decisões de investimento e uso que podem gerar benefícios, impactos e obrigações.</p></div>
          <div class="mini-card"><strong>Ciência e sociedade civil</strong><p>Produzem dados, fiscalizam publicamente, propõem alternativas e participam de processos de decisão.</p></div>
        </div>
        <p><a href="https://www.gov.br/icmbio/pt-br/assuntos/unidade-de-conservacao/conselhos" target="_blank" rel="noopener noreferrer">Conhecer os conselhos gestores no ICMBio</a></p>

        ${choice('5','Governança','Uma decisão ambiental envolve atividade econômica, comunidades locais e uma área de alta importância ecológica. Qual processo é mais consistente?',[['a','Definir a decisão apenas pelo interesse do ator economicamente mais forte'],['b','Combinar normas, estudos técnicos, dados territoriais, direitos, participação dos atores afetados, alternativas e monitoramento'],['c','Evitar qualquer registro público para acelerar a decisão']],'b','Correto. Governança não elimina conflitos; cria regras e processos para que decisões e responsabilidades possam ser discutidas, justificadas e acompanhadas.','Procure evidência, competência legal, participação, transparência e responsabilidade.')}

        <h3>5. Quando o território já foi degradado, conservar pode exigir restaurar</h3>
        <p><strong>Restauração</strong> não é apenas “deixar uma área verde”. É recuperar funções ecológicas e trajetórias capazes de restabelecer vegetação nativa e processos associados, escolhendo estratégias adequadas ao contexto.</p>
        <p>O <strong>Planaveg 2025–2028</strong> integra a política brasileira de recuperação da vegetação nativa e trabalha com a meta de recuperar <strong>12 milhões de hectares até 2030</strong>. O plano prevê monitoramento espacial e indicadores para acompanhar a recuperação.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Proteger o que permanece</strong><p>Evita que ecossistemas conservados sejam convertidos ou degradados.</p></div>
          <div class="mini-card"><strong>Restaurar o que perdeu função</strong><p>Pode recuperar cobertura nativa, conectividade, solo, água e outros processos, conforme objetivos e condições do lugar.</p></div>
        </div>
        <div class="note-box"><strong>Plantar árvores não é sinônimo automático de restauração.</strong><p>Espécies, origem, diversidade, solo, água, conectividade, uso futuro e monitoramento importam. Uma plantação comercial de uma única espécie pode ter finalidade produtiva sem equivaler à recuperação de um ecossistema nativo.</p></div>

        ${choice('6','Restaurar com objetivo','Uma área degradada ao lado de um rio será recuperada. Qual plano é mais consistente?',[['a','Definir objetivos, estudar o local, escolher técnicas e espécies adequadas, considerar atores e acompanhar indicadores ao longo do tempo'],['b','Plantar qualquer espécie disponível e nunca mais avaliar a área'],['c','Considerar restaurada qualquer superfície que fique verde por alguns meses']],'a','Isso. Restauração é processo orientado por objetivos e monitoramento, não apenas aparência verde.','Pergunte o que precisa voltar a funcionar e como será possível verificar a recuperação.')}

        <h3>6. Decidir exige comparar alternativas — e admitir incertezas</h3>
        <p>Uma decisão territorial forte não esconde os conflitos. Ela explicita quais valores estão em jogo, que grupos serão afetados, quais limites legais existem, quais dados são confiáveis e o que ainda não se sabe.</p>
        <div class="evidence-grid">
          <div class="mini-card"><strong>Antes da decisão</strong><p>Localizar a área, mapear usos, levantar biodiversidade e recursos, identificar direitos e atores, estudar alternativas e impactos.</p></div>
          <div class="mini-card"><strong>Depois da decisão</strong><p>Fiscalizar condições, monitorar indicadores, publicar resultados, ouvir grupos afetados e corrigir rumos quando necessário.</p></div>
        </div>
        <div class="concept-box"><strong>Governar também é revisar.</strong><p>Se novas evidências mostram que a decisão não alcançou o objetivo ou criou impactos não previstos, a gestão precisa ter mecanismos para responder e ajustar ações.</p></div>

        <h3>7. Observatório do lugar onde vivo — etapa final</h3>
        <div class="field-box">
          <strong class="card-title">Agora transforme observação em uma pequena decisão territorial</strong>
          <p>Retome <strong>o mesmo lugar</strong> acompanhado desde o capítulo 01. Escolha apenas uma questão que apareceu ao longo do percurso: uma árvore ou área verde, um córrego, uma encosta, um terreno impermeabilizado, resíduos, circulação ou outro elemento realmente observado.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>1. Evidência</strong><p>Registre o que você observou e uma fonte adicional confiável, se necessária.</p></div>
            <div class="mini-card"><strong>2. Problema ou valor</strong><p>O que precisa ser protegido, usado melhor, recuperado ou investigado?</p></div>
            <div class="mini-card"><strong>3. Atores</strong><p>Quem utiliza, decide, mantém, fiscaliza ou é afetado por esse lugar?</p></div>
            <div class="mini-card"><strong>4. Alternativas</strong><p>Compare pelo menos duas ações possíveis e seus efeitos prováveis.</p></div>
          </div>
          <p><strong>Feche o Observatório</strong> com uma recomendação curta: “Com as evidências disponíveis, proponho ___ porque ___. Antes de executar, ainda seria necessário verificar ___.”</p>
          <p><small>Não colete dados pessoais, não entre em propriedades privadas e não faça intervenções físicas no local como parte da atividade.</small></p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint final — o território tem três propostas</h3>
          <div class="challenge-box">
            <p>Uma área contém remanescentes de vegetação nativa, um curso d'água, trechos degradados e comunidades que utilizam recursos locais. Surgem três propostas: ampliar uma atividade produtiva, criar regras de proteção mais fortes e restaurar parte das áreas degradadas.</p>
            <p>Produza uma recomendação que inclua:</p>
            <ul>
              <li>pelo menos <strong>3 evidências</strong> que precisam ser levantadas antes da decisão;</li>
              <li><strong>3 grupos ou instituições</strong> que devem entrar no processo;</li>
              <li>uma diferença entre <strong>proteção integral, uso sustentável e restauração</strong>;</li>
              <li>um benefício e um possível custo ou conflito de cada proposta;</li>
              <li>um indicador que permita verificar o resultado depois;</li>
              <li>uma informação que você ainda não teria segurança para concluir.</li>
            </ul>
            <details>
              <summary>O que caracteriza uma resposta forte?</summary>
              <p>Ela não escolhe a alternativa pelo nome mais “verde” nem pela maior promessa econômica. Usa evidências, reconhece regras e direitos, compara alternativas e escalas, identifica atores e conflitos, justifica a decisão e propõe monitoramento.</p>
            </details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo integra sustentabilidade, conservação da biodiversidade, uso dos recursos naturais, recuperação de áreas degradadas, políticas ambientais, geotecnologias, participação social e tomada de decisão. Ele fecha a progressão da 1ª série retomando paisagem, cartografia, sociedade–natureza, redes, desigualdade, resíduos, cadeias produtivas, riscos e globalização em uma decisão territorial baseada em evidências.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> decidir o território é escolher entre possibilidades que distribuem benefícios, custos, riscos e responsabilidades. Uma decisão ambiental sólida combina ciência, mapas e dados com regras, direitos, participação e conhecimento do lugar; distingue proteger, usar e restaurar; e continua sendo avaliada depois de implementada.</div>
      `
    });
  }

  MBB.enableChapter?.('10 Sustentabilidade', showChapter);
})();
