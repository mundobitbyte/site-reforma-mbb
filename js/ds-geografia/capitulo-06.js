(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Consumo e ambiente',
      technical:'produção • consumo • resíduos sólidos • rejeitos • coleta seletiva • reciclagem • compostagem • aterro sanitário • logística reversa • economia circular • desigualdade territorial',
      title:'Para onde vai aquilo que compramos depois que jogamos fora?',
      objective:'<strong>Objetivo:</strong> analisar o caminho dos materiais desde a produção e o consumo até a coleta, triagem, recuperação, reciclagem, compostagem ou disposição final; diferenciar resíduo de rejeito e reconhecer como infraestrutura, logística, políticas públicas, empresas, consumidores e trabalhadores distribuem de modo desigual os custos e as possibilidades de recuperação dos materiais.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">A lixeira não é o fim do caminho</strong>
            <p>Uma garrafa de bebida, uma caixa de entrega, restos de alimento e uma pilha usada podem sair de nossas mãos em poucos segundos. Depois que o caminhão passa, parece que desapareceram.</p>
            <p>Mas nenhum desses materiais deixa de ocupar o território. Eles entram em outras redes: coleta, transporte, triagem, reciclagem, compostagem, logística reversa, tratamento ou disposição final.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quem decide esse caminho, quais materiais conseguem voltar ao ciclo produtivo e por que lugares diferentes têm possibilidades tão diferentes de lidar com seus resíduos?</p>
          </div>
        </section>

        <h3>1. Primeiro cuidado: coleta não significa destino final</h3>
        <p>O <strong>Censo 2022</strong> registrou que 90,9% da população brasileira vivia em domicílios com coleta direta ou indireta de lixo. A cobertura, porém, era desigual: 78,5% na Região Norte e 96,9% na Região Sudeste.</p>
        <div class="data-box">
          <strong class="card-title">O dado responde uma pergunta — não todas</strong>
          <p>Esse indicador informa se o resíduo sai do domicílio por serviço de limpeza ou caçamba. Ele <strong>não informa sozinho</strong> se houve separação de recicláveis, para onde o caminhão levou o material nem se o destino final foi ambientalmente adequado.</p>
          <p><a href="https://educa.ibge.gov.br/jovens/conheca-o-brasil/populacao/22064-caracteristicas-dos-domicilios-censo-2022.html" target="_blank" rel="noopener noreferrer">Abrir os dados do Censo 2022 no IBGE Educa</a></p>
        </div>

        ${choice('1','Leia o indicador com cuidado','Se um município informa cobertura elevada de coleta domiciliar, qual conclusão ainda NÃO pode ser feita apenas com esse dado?',[['a','Que a maior parte dos domicílios atendidos consegue entregar o lixo ao serviço de coleta'],['b','Que todo o material coletado é reciclado ou recebe destinação final adequada'],['c','Que existe uma rede de coleta funcionando para parte significativa da população']],'b','Correto. Coleta é apenas uma etapa do fluxo; triagem, tratamento, recuperação e disposição final precisam de outras evidências.','Pergunte o que acontece depois que o material entra no caminhão.')}

        <h3>2. Resíduo e rejeito não são a mesma coisa</h3>
        <p>A Política Nacional de Resíduos Sólidos diferencia dois conceitos que mudam a maneira de pensar o problema.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Resíduo sólido</strong><p>Material, objeto ou substância descartada que ainda precisa receber uma destinação. Dependendo das condições técnicas e econômicas, pode ser reutilizado, reciclado, compostado, recuperado ou encaminhado para outra forma adequada de tratamento.</p></div>
          <div class="mini-card"><strong>Rejeito</strong><p>É a parcela para a qual, depois de esgotadas as possibilidades tecnicamente disponíveis e economicamente viáveis de tratamento e recuperação, resta a disposição final ambientalmente adequada.</p></div>
        </div>
        <div class="note-box"><strong>Aterro sanitário não é “lugar de tudo”.</strong><p>Na lógica da PNRS, a disposição final em aterro é destinada aos <strong>rejeitos</strong>. Materiais recuperáveis não deveriam ser tratados automaticamente como rejeito apenas porque foram misturados ou porque não existe infraestrutura de recuperação naquele lugar.</p></div>
        <p><a href="https://www.gov.br/ibama/pt-br/assuntos/emissoes-e-residuos/residuos/politica-nacional-de-residuos-solidos-pnrs" target="_blank" rel="noopener noreferrer">Consultar a Política Nacional de Resíduos Sólidos no Ibama</a></p>

        ${choice('2','Resíduo ou rejeito?','Uma lata de alumínio limpa e separada, com cadeia de reciclagem disponível, deve ser entendida automaticamente como rejeito?',[['a','Sim, porque qualquer objeto descartado é rejeito'],['b','Não. Ela é um resíduo com potencial de recuperação; rejeito é a parcela sem possibilidade viável de tratamento ou recuperação'],['c','Sim, desde que tenha sido usada uma vez']],'b','Isso. O descarte não transforma automaticamente um material recuperável em rejeito.','Lembre que rejeito é uma parcela dos resíduos, não um sinônimo de tudo o que foi descartado.')}

        <h3>3. O caminho dos resíduos é uma rede territorial</h3>
        <div class="geo-process">
          <span>produção</span><b>→</b><span>consumo</span><b>→</b><span>separação</span><b>→</b><span>coleta</span><b>→</b><span>transporte</span><b>→</b><span>triagem/tratamento</span><b>→</b><span>novo destino</span>
        </div>
        <p>Esse fluxo depende de infraestrutura, distância, custo, volume, qualidade do material, mercado para recicláveis, organização dos serviços públicos e presença de cooperativas, empresas, unidades de triagem, compostagem, reciclagem e disposição final.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Separar</strong><p>Evita misturar materiais incompatíveis e pode preservar o valor de recicláveis e orgânicos.</p></div>
          <div class="mini-card"><strong>Coletar</strong><p>Retira o material do ponto de geração, de modo convencional ou seletivo.</p></div>
          <div class="mini-card"><strong>Recuperar</strong><p>Triagem, reciclagem, compostagem e outras rotas podem devolver matéria ao ciclo produtivo.</p></div>
          <div class="mini-card"><strong>Dispor rejeitos</strong><p>O que não pode ser recuperado precisa de disposição final ambientalmente adequada.</p></div>
        </div>

        ${choice('3','Pense como uma rede','Por que instalar lixeiras coloridas em uma escola não garante, sozinho, que haverá reciclagem?',[['a','Porque é preciso também existir separação correta, coleta compatível, transporte e uma rota de triagem/recuperação para os materiais'],['b','Porque recicláveis nunca podem ser transportados'],['c','Porque toda reciclagem precisa ocorrer dentro da própria escola']],'a','Correto. O ponto de descarte precisa estar conectado a uma cadeia que continue o processo.','A lixeira é um nó da rede, não a rede inteira.')}

        <h3>4. A coleta seletiva também é desigual no território</h3>
        <p>O relatório <strong>SINISA 2025</strong>, com ano de referência 2024, registrou <strong>1.415 municípios</strong> com serviço de coleta seletiva informado e cobertura estimada de <strong>40,6% da população total</strong>. Isso mostra que ter coleta de resíduos não significa necessariamente ter acesso à coleta seletiva.</p>
        <div class="scale-strip">
          <div class="scale-card"><strong>Domicílio</strong><p>Há espaço, informação e condição para separar os materiais?</p></div>
          <div class="scale-card"><strong>Bairro/município</strong><p>Existe coleta seletiva regular, ponto de entrega ou cooperativa acessível?</p></div>
          <div class="scale-card"><strong>Região</strong><p>Há unidades de triagem, reciclagem, compostagem e mercado capazes de receber esses fluxos?</p></div>
        </div>
        <div class="map-box">
          <strong class="card-title">Explore o território real dos resíduos</strong>
          <p>O <strong>SINIR+</strong> oferece mapa interativo com unidades de triagem, reciclagem, tratamento e disposição final, além de fluxos de resíduos e outras camadas territoriais.</p>
          <p><a href="https://sinir.gov.br/mapas/" target="_blank" rel="noopener noreferrer">Abrir o Mapa Gestão de Resíduos Sólidos — SINIR+</a></p>
        </div>

        ${choice('4','Desigualdade de infraestrutura','Duas cidades têm a mesma quantidade de habitantes. Uma possui coleta seletiva, central de triagem e recicladores próximos; a outra transporta todo o material misturado para longe. Qual fator geográfico ajuda a explicar resultados diferentes?',[['a','A organização territorial da infraestrutura e das redes de tratamento e recuperação'],['b','Somente a latitude das cidades'],['c','A ideia de que todo resíduo segue exatamente o mesmo caminho']],'a','Isso. Distâncias, instalações, atores e conexões alteram custos e possibilidades de recuperação.','Compare a rede disponível em cada lugar, não apenas o volume gerado.')}

        <h3>5. O destino final revela um problema que continua aberto</h3>
        <p>No SINISA 2025, ano de referência 2024, <strong>3.057 municípios</strong> informaram encaminhamento de rejeitos para aterros sanitários, <strong>305</strong> para aterros controlados e <strong>1.492</strong> para lixões; outros municípios ficaram sem informação suficiente no levantamento.</p>
        <div class="note-box"><strong>Leia a metodologia antes de comparar.</strong><p>O SINISA classifica o município pela pior situação declarada quando existe mais de uma forma de disposição. Assim, se parte dos resíduos vai para aterro sanitário e outra parte para lixão, o município aparece na categoria “lixão”.</p></div>
        <p>O número mostra por que o problema não termina quando o caminhão sai da rua. A localização e o tipo de unidade de disposição final afetam solo, água, ar, paisagem, circulação de veículos, trabalho e comunidades próximas.</p>

        ${choice('5','Depois da coleta','Qual investigação é mais completa para avaliar a gestão de resíduos de um município?',[['a','Ver apenas se existe caminhão de coleta'],['b','Combinar cobertura da coleta, coleta seletiva, destinos, unidades de tratamento, disposição final, distâncias e grupos envolvidos'],['c','Contar apenas quantas lixeiras existem na praça central']],'b','Correto. A gestão de resíduos é uma cadeia territorial com várias etapas e agentes.','Siga o fluxo inteiro: geração → coleta → transporte → tratamento/recuperação → rejeito → disposição final.')}

        <h3>6. Responsabilidade compartilhada e logística reversa</h3>
        <p>A PNRS introduziu a <strong>responsabilidade compartilhada pelo ciclo de vida dos produtos</strong>. Fabricantes, importadores, distribuidores, comerciantes, consumidores e poder público têm papéis diferentes e encadeados.</p>
        <p>Em algumas cadeias, a <strong>logística reversa</strong> organiza o retorno de produtos e embalagens depois do uso, de forma que voltem a pontos de coleta, consolidação, tratamento, reciclagem ou outra destinação adequada. Pilhas e baterias, pneus, óleos lubrificantes, determinadas lâmpadas e eletroeletrônicos estão entre cadeias previstas na legislação e regulamentações específicas.</p>
        <div class="data-box">
          <strong class="card-title">Atualização recente</strong>
          <p>O Decreto nº 12.688/2025 instituiu o sistema de logística reversa de embalagens de plástico e definiu responsabilidades para fabricantes, importadores, distribuidores e comerciantes ao longo do ciclo de vida desses produtos.</p>
          <p><a href="https://www.sinir.gov.br/perfis/logistica-reversa/" target="_blank" rel="noopener noreferrer">Conhecer sistemas e informações de logística reversa no SINIR+</a></p>
        </div>

        ${choice('6','Responsabilidade compartilhada','Uma pessoa devolve uma pilha usada em um ponto de recebimento adequado. O que precisa existir para a logística reversa funcionar de verdade?',[['a','Apenas a boa vontade do consumidor'],['b','Uma cadeia organizada de recebimento, transporte, consolidação, tratamento/destinação e responsabilidades definidas entre os agentes'],['c','Somente uma lixeira comum próxima']],'b','Isso. O consumidor participa, mas o retorno depende de uma rede e de responsabilidades distribuídas.','Logística reversa é um sistema, não apenas um ato individual.')}

        <h3>7. Reciclar é importante, mas não resolve tudo sozinho</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Reduzir</strong><p>Evitar consumo e embalagens desnecessárias diminui a quantidade de material que terá de percorrer toda a rede.</p></div>
          <div class="mini-card"><strong>Reutilizar e reparar</strong><p>Prolongar a vida útil pode adiar ou evitar a geração de resíduos.</p></div>
          <div class="mini-card"><strong>Recuperar materiais</strong><p>Reciclagem e compostagem podem devolver materiais ao ciclo, mas exigem separação, tecnologia, logística e mercado.</p></div>
        </div>
        <div class="concept-box"><strong>Economia circular é uma mudança de sistema.</strong><p>Não significa apenas “colocar tudo para reciclar”. Envolve projeto de produtos, escolha de materiais, manutenção, reparo, reuso, compartilhamento, retorno, recuperação e redução de rejeitos ao longo de toda a cadeia.</p></div>

        <h3>8. Observatório do lugar onde vivo — sexta etapa</h3>
        <div class="field-box">
          <strong class="card-title">Siga um fluxo de resíduos no mesmo lugar dos capítulos anteriores</strong>
          <p>Sem abrir sacos de lixo, entrar em áreas de descarte ou se expor a riscos, observe como os resíduos aparecem e circulam no lugar escolhido no capítulo 01.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>Geração</strong><p>Que tipos de resíduos aparecem com frequência? Embalagens, restos de alimento, folhas, papel, entulho ou outros?</p></div>
            <div class="mini-card"><strong>Infraestrutura</strong><p>Há lixeiras, caçambas, coleta regular, coleta seletiva ou ponto de entrega nas proximidades?</p></div>
            <div class="mini-card"><strong>Fluxo</strong><p>Para onde o material parece seguir depois da coleta? O que você sabe e o que ainda precisa verificar em fonte oficial?</p></div>
            <div class="mini-card"><strong>Ponto crítico</strong><p>Existe mistura de materiais, descarte recorrente, distância excessiva ou ausência de informação que prejudique a recuperação?</p></div>
          </div>
          <p><strong>Registro mínimo:</strong> um tipo de resíduo observado + infraestrutura disponível + provável caminho após o descarte + uma evidência + uma pergunta ainda sem resposta.</p>
          <p><strong>Fonte sugerida:</strong> consulte o site da prefeitura, o SINIR+ ou o SINISA antes de afirmar qual é o destino final.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final</span>
          <div class="challenge-box">
            <strong class="card-title">Uma campanha de reciclagem pode fracassar mesmo com lixeiras novas?</strong>
            <p><strong>Cenário didático:</strong> uma escola compra conjuntos de lixeiras coloridas. Depois de duas semanas, todo o conteúdo continua sendo recolhido pelo mesmo caminhão e misturado. Ninguém verificou a existência de coleta seletiva, cooperativa ou ponto de entrega para os materiais separados.</p>
            <p>Proponha uma solução geográfica e operacional. Sua resposta deve indicar: <strong>(1)</strong> quais resíduos priorizar; <strong>(2)</strong> como reduzir a geração antes da reciclagem; <strong>(3)</strong> quem fará a coleta; <strong>(4)</strong> para onde o material seguirá; <strong>(5)</strong> quais agentes precisam participar; e <strong>(6)</strong> qual evidência permitirá saber se o sistema realmente funciona.</p>
            <details>
              <summary>O que caracteriza uma boa resposta?</summary>
              <p>Ela não para na compra das lixeiras. Reconstrói a cadeia inteira: geração, separação, armazenamento, coleta, transporte, triagem/recuperação, destino dos rejeitos, responsáveis e forma de verificar o resultado. Também evita prometer reciclagem para materiais sem rota real de recuperação.</p>
            </details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo integra produção, consumo, resíduos, saneamento, redes, trabalho, tecnologia, políticas públicas e impactos socioambientais. Ao seguir materialmente os fluxos de descarte, prepara o capítulo 07, no qual o aluno investigará de onde vêm alimentos, minérios, combustíveis e outros recursos antes de chegarem ao consumo.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> jogar fora é deslocar matéria para outro lugar. O resultado depende de como produtos são projetados, consumidos e separados e de quais redes territoriais existem para coletar, transportar, recuperar e dar destino aos materiais. Quanto melhor conhecemos o fluxo, menos confundimos “sumir da nossa vista” com resolver o problema.</div>
      `
    });
  }

  MBB.enableChapter?.('06 Produção', showChapter);
})();