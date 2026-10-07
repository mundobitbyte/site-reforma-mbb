(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Dominação e fronteiras',
      technical:'Imperialismo • Neocolonialismo • África • Ásia • Conferência de Berlim • racismo científico • resistência',
      title:'Como a ideia de “civilização” foi usada para justificar dominação?',
      objective:'<strong>Objetivo:</strong> explicar o imperialismo do século XIX articulando interesses econômicos, estratégicos e políticos a discursos de superioridade racial e cultural, reconhecendo diferentes formas de dominação e as resistências dos povos colonizados.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Dominar e dizer que está “ajudando”</strong>
            <p>Uma potência ocupa um território, controla recursos, impõe decisões políticas e afirma que faz isso para levar progresso, ciência e civilização aos habitantes locais.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que muda quando analisamos não apenas o discurso do dominador, mas também quem perdeu autonomia, terra, trabalho e poder?</p>
          </div>
        </section>

        <h3>1. Imperialismo não foi apenas “vontade de conquistar terras”</h3>
        <p>No século XIX, especialmente em suas últimas décadas, potências europeias ampliaram fortemente seu controle sobre territórios da África e da Ásia. Esse processo combinou vários interesses, que não atuavam do mesmo modo em todos os lugares.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Economia</strong><p>Matérias-primas, investimentos, rotas comerciais e novos mercados podiam tornar determinados territórios estratégicos.</p></div>
          <div class="mini-card"><strong>Estratégia</strong><p>Portos, canais, estreitos e posições militares ajudavam a controlar circulação e rotas marítimas.</p></div>
          <div class="mini-card"><strong>Política</strong><p>Governos associavam impérios a prestígio internacional e competição entre potências.</p></div>
          <div class="mini-card"><strong>Ideologia</strong><p>Discursos racistas e de “missão civilizadora” procuravam transformar dominação em dever moral.</p></div>
        </div>
        <div class="note-box"><strong>Evite uma causa única.</strong><p>Nem toda expansão imperial teve a mesma combinação de motivos. Explicar imperialismo exige relacionar economia, estratégia, política, tecnologia e ideologia.</p></div>

        ${choice('1','Causas do imperialismo','Qual explicação é mais adequada para o imperialismo do século XIX?',[['a','Uma única causa econômica explica todos os casos'],['b','Diferentes interesses econômicos, estratégicos, políticos e ideológicos se combinaram de maneiras variadas'],['c','Os territórios colonizados pediram espontaneamente para ser dominados']],'b','Correto. O imperialismo foi multicausal e variou conforme região, potência e período.','Procure combinações de causas, não uma explicação universal para todos os casos.')}

        <h3>2. A chamada “Partilha da África” foi um processo — não uma reunião que desenhou tudo de uma vez</h3>
        <p>A <strong>Conferência de Berlim</strong>, realizada entre 1884 e 1885, reuniu potências europeias e outros Estados para estabelecer regras relacionadas à ocupação e ao comércio em partes da África. Representantes africanos não participaram das decisões.</p>
        <p>A conferência acelerou e regulou disputas imperiais, mas é simplista dizer que nela “a África inteira foi dividida com régua”. Conquistas, tratados, guerras, negociações e ocupações efetivas continuaram antes e depois da reunião.</p>
        <div class="concept-box"><strong>Fronteiras coloniais não encontraram um continente “vazio”.</strong><p>Elas atravessaram reinos, cidades, redes comerciais, comunidades, territórios linguísticos e sistemas políticos que já possuíam histórias próprias.</p></div>

        ${choice('2','Conferência de Berlim','Qual afirmação é mais precisa?',[['a','A Conferência de Berlim criou sozinha todas as fronteiras africanas atuais'],['b','Ela estabeleceu regras para a competição colonial e ocorreu sem participação africana, dentro de um processo mais amplo de conquista e ocupação'],['c','Foi uma reunião convocada por Estados africanos para escolher colonizadores']],'b','Isso. A conferência foi importante, mas não substitui o processo histórico mais amplo de conquista, resistência e negociação.','Evite transformar um processo de décadas em um único evento.')}

        <h3>3. Dominação imperial assumiu formas diferentes</h3>
        <p>Nem todos os territórios foram governados da mesma maneira. Havia colônias administradas diretamente, protetorados, concessões econômicas, companhias privadas, ocupações militares e <strong>esferas de influência</strong>.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Índia</strong><p>Após a rebelião de 1857, o governo britânico assumiu diretamente o controle de grande parte da Índia, substituindo o domínio formal da Companhia das Índias Orientais pelo Raj britânico.</p></div>
          <div class="mini-card"><strong>China</strong><p>No século XIX, potências estrangeiras conquistaram privilégios comerciais, portos e áreas de influência sem transformar todo o território chinês em uma única colônia europeia.</p></div>
        </div>
        <div class="ok-box"><strong>Imperialismo é mais amplo que colonização direta.</strong><p>Um Estado pode preservar formalmente parte de suas instituições e ainda sofrer forte coerção econômica, militar ou diplomática estrangeira.</p></div>

        ${choice('3','Formas de domínio','Por que “imperialismo” não é sinônimo perfeito de “colônia administrada diretamente”?',[['a','Porque dominação também podia ocorrer por protetorados, concessões, esferas de influência e coerção econômica'],['b','Porque imperialismo nunca envolveu território'],['c','Porque toda influência estrangeira era voluntária']],'a','Correto. O controle imperial podia assumir formas políticas e econômicas diferentes.','Observe o grau e a forma de perda de autonomia, não apenas o nome oficial do território.')}

        <h3>4. A “missão civilizadora” transformava diferença em hierarquia</h3>
        <p>Colonizadores frequentemente apresentavam seus próprios costumes, instituições, religião e tecnologia como sinais de uma civilização supostamente superior. Povos dominados eram descritos como atrasados, infantis ou incapazes de governar a si mesmos.</p>
        <p>No mesmo período, teorias hoje desacreditadas tentaram classificar seres humanos em “raças” hierarquizadas. O chamado <strong>racismo científico</strong> usava aparência de ciência para legitimar desigualdade; interpretações sociais distorcidas da ideia de evolução também foram usadas para naturalizar dominação.</p>
        <div class="note-box"><strong>Não confunda racismo científico com ciência atual.</strong><p>Essas teorias refletiam preconceitos e projetos de poder de seu tempo e foram amplamente rejeitadas pelo conhecimento científico posterior.</p></div>

        ${choice('4','Discurso civilizatório','Qual função política podia cumprir o discurso de “levar civilização”?',[['a','Apresentar a conquista como benefício moral e esconder relações de coerção e exploração'],['b','Eliminar automaticamente o racismo'],['c','Garantir autonomia aos povos colonizados']],'a','Correto. O discurso podia legitimar a expansão ao apresentar dominação como missão benéfica.','Analise quem define o que é “civilizado” e quem ganha poder com essa classificação.')}

        <h3>5. Congo: quando discurso de progresso conviveu com coerção extrema</h3>
        <p>Em 1885, o chamado <strong>Estado Livre do Congo</strong> ficou sob controle pessoal do rei Leopoldo II da Bélgica. A exploração de marfim e, sobretudo, borracha foi associada a sistemas violentos de trabalho forçado, punições, tomada de reféns e outras atrocidades.</p>
        <p>Denúncias internacionais cresceram no início do século XX. Em 1908, o território deixou de ser domínio pessoal de Leopoldo II e passou ao controle do Estado belga.</p>
        <div class="source-box">
          <span class="source-label">Leitura histórica — duas evidências precisam ser comparadas</span>
          <p><strong>Discurso oficial:</strong> administração, combate ao tráfico de escravos e “progresso”.</p>
          <p><strong>Outras evidências:</strong> relatos missionários, investigações, fotografias e testemunhos documentaram coerção e violência ligadas à extração de recursos.</p>
          <p class="source-meta">O contraste mostra por que historiadores não avaliam um regime apenas pela forma como ele descrevia a si próprio.</p>
        </div>

        ${choice('5','Discurso e evidência','Se um governo colonial afirmava estar levando progresso, qual é o procedimento histórico adequado?',[['a','Aceitar a afirmação como prova suficiente'],['b','Comparar o discurso com práticas, testemunhos, registros econômicos e outras fontes'],['c','Descartar qualquer documento produzido pelo governo']],'b','Isso. Um discurso oficial é uma fonte importante, mas precisa ser confrontado com outras evidências.','A pergunta não é apenas “o que disseram?”, mas “o que fizeram e quais efeitos produziram?”.')}

        <h3>6. Povos colonizados resistiram, negociaram e criaram estratégias</h3>
        <p>A expansão imperial não encontrou populações passivas. Houve guerras, revoltas, negociações diplomáticas, alianças, recusas, fugas, preservação cultural e adaptação estratégica.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Etiópia</strong><p>Em 1896, forças etíopes derrotaram o exército italiano na Batalha de Adwa, preservando a independência do país naquele momento.</p></div>
          <div class="mini-card"><strong>Resistências armadas</strong><p>Diferentes povos africanos e asiáticos combateram exércitos coloniais, embora com resultados variados.</p></div>
          <div class="mini-card"><strong>Outras estratégias</strong><p>Lideranças também negociaram, formaram alianças, utilizaram instituições coloniais ou reorganizaram movimentos políticos.</p></div>
        </div>
        <div class="note-box"><strong>“Colonizados” não é sinônimo de “sem ação histórica”.</strong><p>Mesmo sob relações profundamente desiguais, pessoas e grupos tomavam decisões e disputavam possibilidades.</p></div>

        ${choice('6','Resistência','O que a vitória etíope em Adwa ajuda a demonstrar?',[['a','Que a expansão europeia ocorreu sem resistência'],['b','Que povos africanos possuíam Estados, estratégias políticas e capacidade militar próprias'],['c','Que nenhuma potência europeia tentou conquistar a África']],'b','Correto. Adwa rompe a imagem de uma África passiva diante da expansão imperial.','Resistência e iniciativa local precisam fazer parte da explicação histórica.')}

        <h3>7. Fronteiras coloniais produziram efeitos duradouros — mas não explicam tudo sozinhas</h3>
        <p>Em muitos casos, administrações coloniais delimitaram territórios conforme interesses imperiais, reunindo grupos distintos ou separando comunidades e redes anteriores. Essas fronteiras influenciaram Estados formados posteriormente.</p>
        <p>Mas também seria determinista dizer que todo conflito africano ou asiático atual é consequência automática de uma “linha desenhada pelos europeus”. Processos posteriores de independência, política interna, economia, Guerra Fria, identidades locais e decisões de diferentes atores também importam.</p>
        <div class="ok-box"><strong>O passado cria condições; não programa o futuro.</strong><p>Uma boa explicação histórica reconhece legados coloniais sem transformar sociedades contemporâneas em simples vítimas de um mapa antigo.</p></div>

        <h3>8. Laboratório de propaganda imperial</h3>
        <div class="source-box">
          <span class="source-label">Situação didática simulada — inspirada em propagandas coloniais do período</span>
          <p><strong>Cartaz:</strong> uma potência europeia aparece levando ferrovia, escola e comércio a um território representado como vazio e atrasado. Não aparecem soldados, impostos, trabalho compulsório nem habitantes tomando decisões próprias.</p>
          <p class="source-meta">A simulação serve para treinar leitura de imagem e discurso; não reproduz um cartaz histórico específico.</p>
        </div>
        <div class="method-box"><strong class="card-title">Quatro perguntas para desmontar a propaganda</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Quem fala?</strong><p>Quem produziu a imagem e para qual público?</p></div>
          <div class="method-step"><span>2</span><strong>O que destaca?</strong><p>Quais benefícios aparecem?</p></div>
          <div class="method-step"><span>3</span><strong>O que silencia?</strong><p>Que custos e grupos desaparecem da representação?</p></div>
          <div class="method-step"><span>4</span><strong>Que hierarquia cria?</strong><p>Quem aparece como agente e quem aparece como incapaz?</p></div>
        </div></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — argumento histórico</h3>
          <div class="challenge-box">
            <strong>Desafio: progresso para quem?</strong>
            <p>Em 5 a 7 frases, responda: “Por que uma ferrovia construída por uma potência imperial não pode ser avaliada apenas como sinal de progresso?” Use pelo menos três dimensões: quem decidiu construí-la, quais interesses atendia, quem trabalhou, como os recursos circulavam e que efeitos teve para diferentes grupos.</p>
            <details><summary>Critério de uma boa resposta</summary><p>A resposta não precisa negar que ferrovias produzam circulação ou infraestrutura. Precisa mostrar que tecnologia não é politicamente neutra: em contexto imperial, pode atender simultaneamente circulação local, administração militar e extração de recursos. O julgamento histórico depende das relações de poder e de quem recebeu benefícios e custos.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha Imperialismo e Neocolonialismo, discurso civilizatório, etnocentrismo, racismo, território e fronteiras, relações entre poder e trabalho e diferentes narrativas sobre povos da África e da Ásia. Também reforça análise crítica de fontes e protagonismo dos povos submetidos à expansão imperial.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> imperialismo combinou interesses materiais e estratégicos com discursos que apresentavam desigualdade como superioridade natural ou missão civilizadora. Entender esse processo exige observar dominação e resistência, propaganda e prática, fronteiras impostas e escolhas dos povos colonizados.</div>
      `
    });
  }

  MBB.enableChapter?.('09 Imperialismo', showChapter);
})();
