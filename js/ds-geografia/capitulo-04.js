(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Fluxos e redes',
      technical:'migração • mobilidade • deslocamento pendular • redes • nós • fluxos • transportes • logística • acessibilidade • escalas',
      title:'Por que pessoas e produtos circulam pelo mundo de maneiras tão diferentes?',
      objective:'<strong>Objetivo:</strong> distinguir migração de outros deslocamentos, interpretar fluxos de pessoas e mercadorias como redes territoriais e explicar como infraestrutura, distância, custo, trabalho, oportunidades, fronteiras e desigualdades condicionam quem circula, por onde e com que facilidade.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Duas viagens, dois tipos de fluxo</strong>
            <p>Uma estudante mora em uma cidade e cruza a divisa municipal todos os dias para estudar. Ao mesmo tempo, um alimento vendido no mercado do bairro pode ter saído de uma fazenda, passado por armazém, rodovia, centro de distribuição e loja antes de chegar à prateleira.</p>
            <p>Nos dois casos existe circulação, mas as regras, os motivos, os custos, os tempos e as redes não são os mesmos. Além disso, atravessar uma fronteira no mapa não significa necessariamente migrar.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que faz alguns fluxos serem rápidos e intensos enquanto outros são difíceis, caros, seletivos ou até bloqueados?</p>
          </div>
        </section>

        <h3>1. Circular não é sempre migrar</h3>
        <p><strong>Migração</strong> envolve mudança do lugar de residência habitual. Já o <strong>deslocamento pendular</strong> é recorrente: a pessoa sai para estudar ou trabalhar e continua morando no município de origem.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Migração interna</strong><p>Mudança de residência entre municípios, estados ou regiões dentro do mesmo país.</p></div>
          <div class="mini-card"><strong>Migração internacional</strong><p>Mudança de residência entre países, sujeita também a fronteiras, documentos e regras migratórias.</p></div>
          <div class="mini-card"><strong>Mobilidade pendular</strong><p>Deslocamento frequente entre residência e trabalho ou estudo, sem mudança de residência.</p></div>
        </div>
        <div class="note-box"><strong>A palavra certa muda a análise.</strong><p>Uma pessoa que mora em Campinas e trabalha todos os dias em outro município pode realizar um fluxo pendular intenso sem ter migrado para lá.</p></div>

        ${choice('1','Migração ou mobilidade?','Uma estudante mora em um município, vai de ônibus todos os dias para uma escola em outro município e volta para casa. Como classificar esse movimento?',[['a','Migração internacional'],['b','Deslocamento pendular para estudo'],['c','Migração definitiva']],'b','Correto. Ela atravessa um limite municipal, mas não muda sua residência habitual.','Observe se houve mudança de residência. Se a pessoa vai e volta regularmente, trata-se de mobilidade pendular.')}

        <h3>2. O dado revela volume — e também desigualdade territorial</h3>
        <div class="data-box">
          <strong class="card-title">Censo 2022: milhões atravessam limites municipais para trabalhar</strong>
          <p>Segundo resultados divulgados pelo IBGE em 2025, <strong>9,3 milhões</strong> de pessoas ocupadas trabalhavam em outro município; <strong>7,9 milhões</strong> faziam esse deslocamento três dias ou mais por semana. Perto de <strong>1,3 milhão</strong> levavam mais de duas horas para chegar ao trabalho.</p>
          <p>Para estudo, cerca de <strong>4 milhões</strong> de estudantes frequentavam instituição fora do município de residência. Entre estudantes de graduação, a proporção que estudava em outro município chegava a <strong>27,3%</strong>.</p>
          <p><a href="https://educa.ibge.gov.br/jovens/materias-especiais/23064-censo-2022-como-a-populacao-se-desloca-para-estudar-e-trabalhar.html" target="_blank" rel="noopener noreferrer">Consultar a leitura do IBGE Educa sobre os deslocamentos do Censo 2022</a></p>
        </div>
        <p>Esses números não significam que todo brasileiro tenha a mesma capacidade de circular. Tempo disponível, renda, transporte público, automóvel, deficiência, horários, segurança e localização dos empregos e escolas mudam muito a experiência de deslocamento.</p>

        ${choice('2','Leia o dado','O fato de 9,3 milhões de pessoas trabalharem em outro município permite afirmar que todas migraram?',[['a','Sim, porque cruzaram um limite municipal'],['b','Não; o dado mede local de trabalho e pode representar deslocamento pendular sem mudança de residência'],['c','Sim, desde que usem ônibus']],'b','Isso. Cruzar um limite administrativo para trabalhar não prova mudança de residência.','Migração depende de residência habitual; deslocamento para trabalho mede outro tipo de fluxo.')}

        <h3>3. Redes transformam distância em acessibilidade</h3>
        <p>Em uma rede geográfica, os <strong>nós</strong> são pontos de conexão — cidades, estações, terminais, portos, aeroportos, centros de distribuição. As <strong>ligações</strong> são os caminhos ou relações que conectam esses pontos: rodovias, ferrovias, hidrovias, rotas aéreas e outras infraestruturas.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Distância geométrica</strong><p>Quantos quilômetros separam dois pontos?</p></div>
          <div class="mini-card"><strong>Acessibilidade</strong><p>Quanto tempo, custo e dificuldade são necessários para chegar de um ponto ao outro pela rede disponível?</p></div>
        </div>
        <div class="concept-box"><strong>Perto no mapa pode ser longe na prática.</strong><p>Duas cidades separadas por poucos quilômetros podem ter ligação ruim; lugares mais distantes podem estar fortemente conectados por uma rodovia duplicada, ferrovia, voo direto ou corredor logístico.</p></div>

        ${choice('3','Rede e acessibilidade','Duas cidades estão à mesma distância de um porto. Uma tem ferrovia direta e a outra depende de estradas lentas e transbordos. O que tende a diferenciar o fluxo de cargas?',[['a','Apenas a latitude das cidades'],['b','A qualidade e a organização das redes, alterando tempo, custo e capacidade'],['c','Nada; distância em linha reta determina tudo']],'b','Correto. Distância é apenas uma parte da circulação; infraestrutura, capacidade, conexão e transbordos mudam a acessibilidade.','Compare a distância com a rede real usada para circular.')}

        <h3>4. Mercadorias circulam por redes multimodais</h3>
        <p>Um produto raramente se move em linha reta entre origem e destino. Ele pode combinar diferentes <strong>modais</strong> — rodoviário, ferroviário, aquaviário, aéreo ou dutoviário — e passar por nós onde a carga é armazenada, consolidada ou transferida.</p>

        <figure class="geo-figure">
          <div style="background:#f7faf8;padding:10px">
            <iframe src="https://ontl.infrasa.gov.br/wp-content/uploads/2026/09/Multimodal.pdf#view=FitH" title="Mapa multimodal da infraestrutura de transportes brasileira em operação em dezembro de 2025, produzido pelo Observatório Nacional de Transporte e Logística da Infra S.A." style="width:100%;height:560px;border:1px solid #cfddd4;border-radius:8px;background:#fff"></iframe>
          </div>
          <figcaption>
            <strong>Leia a rede antes de imaginar a rota</strong>
            <span>Observe quais tipos de infraestrutura aparecem, onde diferentes modais se encontram e quais áreas parecem ter maior ou menor densidade de conexões. Não procure apenas “a estrada”: procure a rede e seus nós.</span>
            <small>Fonte: Infra S.A. / Observatório Nacional de Transporte e Logística (ONTL), Mapa Multimodal — infraestrutura em operação em dezembro de 2025. Documento oficial disponibilizado pelo ONTL. Se o PDF não aparecer no navegador, abra a fonte pelo link abaixo.</small>
            <a href="https://ontl.infrasa.gov.br/paineis-analiticos/dados-por-eixos-tematicos/anuario-estatistico/arquivos-para-download/mapas/" target="_blank" rel="noopener noreferrer">Abrir a página oficial de mapas do ONTL</a>
          </figcaption>
        </figure>

        <div class="data-box">
          <strong class="card-title">Mapear carga é mais do que desenhar estradas</strong>
          <p>A pesquisa <strong>Logística dos Transportes 2024</strong>, divulgada pelo IBGE em julho de 2026, integra dados rodoviários, ferroviários, aquaviários, aéreos e dutoviários e representa fluxos entre municípios brasileiros e, quando disponíveis, entre o Brasil e outros países. O produto reúne <strong>32 mapas temáticos</strong> e uma plataforma interativa para consultar origem, destino, modal e produtos.</p>
          <p><a href="https://www.ibge.gov.br/geociencias/cartas-e-mapas/redes-geograficas/15793-logistica-dos-transportes.html" target="_blank" rel="noopener noreferrer">Abrir Logística dos Transportes 2024 / IBGE</a></p>
        </div>

        ${choice('4','Mercadorias em rede','Por que um centro de distribuição, porto ou terminal ferroviário é chamado de nó da rede?',[['a','Porque concentra conexões e permite organizar, transferir ou redistribuir fluxos'],['b','Porque elimina a necessidade de rotas'],['c','Porque todo produto precisa ser fabricado dentro dele']],'a','Correto. Nós articulam ligações e podem concentrar decisões, infraestrutura e passagem de fluxos.','Pense no ponto em que rotas se encontram, cargas mudam de modal ou são redistribuídas.')}

        <h3>5. Pessoas e mercadorias usam redes, mas não obedecem às mesmas regras</h3>
        <div class="four-col">
          <div class="mini-card"><strong>Motivo</strong><p>Pessoas circulam por trabalho, estudo, família, proteção, lazer e outros motivos. Mercadorias circulam para produção, comércio e abastecimento.</p></div>
          <div class="mini-card"><strong>Regulação</strong><p>Pessoas podem depender de documentos, vistos e direitos de entrada. Cargas seguem normas fiscais, sanitárias, aduaneiras e comerciais.</p></div>
          <div class="mini-card"><strong>Custo e tempo</strong><p>Passagem, moradia e disponibilidade de transporte pesam para pessoas; frete, armazenamento, combustível e transbordo pesam para cargas.</p></div>
          <div class="mini-card"><strong>Capacidade da rede</strong><p>Ônibus, trens, aeroportos, rodovias, portos e terminais têm limites físicos e operacionais.</p></div>
        </div>
        <p>Uma fronteira pode ser simples para determinada mercadoria e difícil para uma pessoa — ou o contrário. Por isso, mapas de fluxos precisam ser interpretados junto com regras, custos, oportunidades e relações de poder.</p>

        <div class="data-box">
          <strong class="card-title">Migração internacional: outra escala, outras regras</strong>
          <p>O Censo 2022 registrou cerca de <strong>1 milhão de pessoas nascidas em outros países vivendo no Brasil</strong>, número 70,3% maior que em 2010. Esse dado é de residência, portanto trata de migração; não deve ser confundido com turismo ou deslocamento diário.</p>
          <p><a href="https://educa.ibge.gov.br/jovens/materias-especiais/22738-cresce-o-numero-de-imigrantes-internacionais-de-acordo-com-o-censo-2022.html" target="_blank" rel="noopener noreferrer">Consultar os resultados de migração do Censo 2022 / IBGE Educa</a></p>
        </div>

        ${choice('5','Compare os fluxos','Qual afirmação é mais adequada ao comparar circulação de pessoas e mercadorias?',[['a','São idênticas porque ambas aparecem como linhas em mapas'],['b','Ambas dependem de redes, mas motivos, regras, custos, direitos e capacidades podem ser muito diferentes'],['c','Mercadorias não dependem de território']],'b','Isso. A forma “linha ligando pontos” não apaga as diferenças sociais, econômicas e jurídicas de cada fluxo.','Use a rede como base comum, mas compare o que efetivamente condiciona cada tipo de circulação.')}

        <h3>6. Mobilidade também revela desigualdade</h3>
        <p>Ter uma estrada, estação ou ponto de ônibus perto não garante <strong>acesso efetivo</strong>. A pessoa precisa conseguir pagar, chegar ao ponto, usar o serviço no horário disponível e viajar com segurança e autonomia.</p>
        <div class="scale-strip">
          <div class="scale-card"><strong>Local</strong><p>Calçadas, pontos, horários, preço da passagem, travessias e segurança.</p></div>
          <div class="scale-card"><strong>Regional</strong><p>Conexão entre municípios, empregos, universidades, terminais e centros de serviços.</p></div>
          <div class="scale-card"><strong>Nacional/global</strong><p>Corredores logísticos, fronteiras, comércio, migração, portos e aeroportos.</p></div>
        </div>
        <p>A rede pode aumentar oportunidades e, ao mesmo tempo, concentrá-las em certos lugares. Uma boa análise pergunta não só <em>onde existe conexão</em>, mas também <strong>quem consegue usá-la e para quê</strong>.</p>

        ${choice('6','Acesso desigual','Um bairro possui uma linha de ônibus, mas o último veículo passa antes do fim do turno de muitos trabalhadores. O que isso mostra?',[['a','A infraestrutura existe, mas a acessibilidade real depende também de horário, custo e necessidade das pessoas'],['b','Todos os moradores têm acesso igual porque há um ponto de ônibus'],['c','O problema é apenas a escala cartográfica']],'a','Correto. Presença física da rede e possibilidade real de usá-la não são a mesma coisa.','Acessibilidade combina infraestrutura com tempo, custo, segurança e necessidades concretas.')}

        <h3>7. Observatório do lugar onde vivo — quarta etapa</h3>
        <div class="field-box">
          <strong class="card-title">Agora siga os fluxos que atravessam o mesmo lugar</strong>
          <p>Retome o espaço escolhido no capítulo 01 e o mapa usado nos capítulos 02 e 03. Desta vez, observe <strong>o que entra, o que sai e por quais caminhos</strong>.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>Pessoas</strong><p>De onde vêm estudantes, moradores, trabalhadores ou usuários? Para onde vão? Em quais horários os fluxos aumentam?</p></div>
            <div class="mini-card"><strong>Mercadorias</strong><p>Que produtos chegam ao lugar? Por caminhão, moto, bicicleta, veículo de aplicativo ou outro meio? Há comércio, depósito ou ponto de entrega?</p></div>
          </div>
          <div class="observation-grid">
            <div class="mini-card"><strong>Nós e rotas</strong><p>Marque pelo menos um ponto de concentração e uma rota importante no mapa: ponto de ônibus, cruzamento, estação, mercado, escola, avenida ou terminal.</p></div>
            <div class="mini-card"><strong>Barreira ou facilidade</strong><p>Registre um fator que ajuda e um que dificulta a circulação: horário, custo, congestionamento, falta de calçada, ponte, acesso viário ou distância.</p></div>
          </div>
          <p><strong>Guarde o registro.</strong> No capítulo 05, esses mesmos fluxos ajudarão a investigar se diferentes grupos têm o mesmo acesso à cidade.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — explique um fluxo sem reduzir tudo à distância</h3>
          <div class="challenge-box">
            <strong>Desafio final: quem circula, por onde e sob quais condições?</strong>
            <p>Escolha um fluxo real do seu Observatório — de pessoas ou de mercadorias — e faça uma explicação curta contendo:</p>
            <p><span class="geo-chip">origem e destino</span><span class="geo-chip">tipo de fluxo</span><span class="geo-chip">rota ou rede</span><span class="geo-chip">um nó</span><span class="geo-chip">um fator de facilidade ou barreira</span><span class="geo-chip">escala</span></p>
            <details><summary>Modelo de raciocínio</summary><p>“Estudantes saem de bairros próximos e chegam à escola por ônibus e a pé. O ponto em frente à escola funciona como nó local. A avenida principal concentra o fluxo, mas horários reduzidos do transporte podem dificultar o acesso. Esse movimento é pendular, não migração.”</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha migrações, deslocamentos, redes geográficas, infraestrutura, circulação de mercadorias, transportes e desigualdade de acesso articulando escalas local, regional, nacional e global. A leitura de dados do Censo e de mapas logísticos prepara a análise de segregação e vulnerabilidade urbana do capítulo seguinte.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> fluxos não acontecem no vazio. Pessoas e mercadorias circulam por redes construídas, reguladas e desiguais. Distância importa, mas infraestrutura, custo, tempo, oportunidades, fronteiras e poder ajudam a decidir quem consegue chegar, o que consegue circular e quais lugares se tornam nós centrais.</div>
      `
    });
  }

  MBB.enableChapter?.('04 Migrações', showChapter);
})();
