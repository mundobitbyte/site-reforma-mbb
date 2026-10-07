(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Mundo conectado',
      technical:'globalização • economia mundial • cadeias globais de valor • comércio • transportes • cabos submarinos • plataformas • Estados • empresas • tecnologia • poder • interdependência',
      title:'Quem controla os fluxos da economia global?',
      objective:'<strong>Objetivo:</strong> analisar como mercadorias, serviços, dados, capitais e decisões circulam por redes globais; identificar nós, infraestruturas e agentes capazes de facilitar, regular ou interromper fluxos; compreender cadeias globais de valor e reconhecer que globalização não elimina distâncias, fronteiras nem desigualdades.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Um toque na tela parece instantâneo. Uma compra parece simples. Mas o mundo por trás deles não é.</strong>
            <p>Um celular pode reunir minerais extraídos em um país, componentes fabricados em outros, software desenvolvido em vários lugares, montagem em outro território e transporte por portos e aeroportos até chegar ao consumidor.</p>
            <p>Ao mesmo tempo, uma mensagem enviada nesse aparelho pode atravessar redes terrestres, centros de dados e cabos instalados no fundo do oceano. O produto e a informação circulam por redes diferentes, mas ambos dependem de infraestrutura, empresas, regras, energia e decisões territoriais.</p>
            <p class="central-question"><strong>Pergunta central:</strong> se a economia está conectada globalmente, quem possui poder para organizar, acelerar, encarecer, bloquear ou redirecionar esses fluxos?</p>
          </div>
        </section>

        <h3>1. Globalização não significa que a geografia deixou de importar</h3>
        <p>Em 2025, o comércio mundial de bens e serviços comerciais alcançou cerca de <strong>US$ 34,9 trilhões</strong>, segundo a Organização Mundial do Comércio (OMC/WTO). O número mostra a enorme intensidade das conexões econômicas, mas não significa que todos os lugares participem da mesma forma ou tenham o mesmo poder sobre essas redes.</p>
        <div class="data-box">
          <strong class="card-title">Leia o dado como evidência — não como conclusão pronta</strong>
          <p>A OMC informa que, em 2025, bens e serviços comerciais cresceram em valor e que os serviços atingiram 27,5% do comércio global, a maior participação desde 2005.</p>
          <p><a href="https://www.wto.org/english/res_e/statis_e/world_trade_statistics_e.htm" target="_blank" rel="noopener noreferrer">Explorar World Trade Statistics — WTO</a></p>
        </div>
        <div class="concept-box"><strong>Globalização</strong><p>É a intensificação e reorganização das relações entre lugares por meio de fluxos de mercadorias, serviços, capitais, informações, tecnologias e pessoas. Esses fluxos atravessam fronteiras, mas continuam dependendo de distância, infraestrutura, normas, custos e relações de poder.</p></div>

        ${choice('1','O que o dado realmente mostra?','O valor elevado do comércio mundial em 2025 permite concluir diretamente que todos os países controlam os fluxos globais de maneira semelhante?',[['a','Sim, porque participar do comércio significa possuir o mesmo poder'],['b','Não. O dado mostra intensidade dos fluxos, mas controle, dependência e participação precisam de outras evidências'],['c','Sim, porque fronteiras deixaram de existir']],'b','Correto. Volume de comércio e poder sobre as redes são perguntas diferentes.','Separe intensidade da circulação de distribuição de poder.')}

        <h3>2. Um produto pode ser resultado de muitos territórios</h3>
        <p>A OCDE usa o conceito de <strong>comércio em valor adicionado</strong> para revelar algo que as estatísticas tradicionais nem sempre mostram: bens e serviços finais podem incorporar valor produzido em diversos países ao longo de uma mesma cadeia.</p>
        <div class="geo-process">
          <span>matéria-prima</span><b>→</b><span>componentes</span><b>→</b><span>montagem</span><b>→</b><span>logística</span><b>→</b><span>serviços e software</span><b>→</b><span>mercado consumidor</span>
        </div>
        <p>Isso forma uma <strong>cadeia global de valor</strong>: diferentes etapas de produção e serviços ficam distribuídas entre territórios conectados. O valor final não é criado necessariamente no mesmo lugar onde o produto é vendido, montado ou onde aparece a marca.</p>
        <div class="data-box">
          <strong class="card-title">Uma lente para enxergar a cadeia</strong>
          <p>Os indicadores TiVA da OCDE identificam quanto do valor de uma exportação vem do próprio país e quanto depende de insumos, serviços ou etapas realizadas em outros territórios.</p>
          <p><a href="https://www.oecd.org/en/topics/sub-issues/trade-in-value-added.html" target="_blank" rel="noopener noreferrer">Conhecer Trade in Value-Added — OCDE</a></p>
        </div>

        ${choice('2','Cadeias globais','Um computador é montado no país A, usa chips do país B e software criado no país C. Qual leitura é mais adequada?',[['a','Todo o valor econômico do computador foi produzido apenas no país A'],['b','O produto integra uma cadeia na qual diferentes territórios adicionam valor em etapas distintas'],['c','O local de montagem torna irrelevantes todos os outros lugares']],'b','Isso. A cadeia distribui etapas, dependências e valor entre diferentes territórios.','Não confunda local de montagem com origem de todos os componentes e serviços.')}

        <h3>3. O comércio global ainda depende de corredores físicos estreitos</h3>
        <p>Cerca de <strong>80% do volume do comércio internacional de mercadorias</strong> é transportado por mar, segundo a UN Trade and Development (UNCTAD). Por isso, portos, estreitos e canais funcionam como nós estratégicos da economia mundial.</p>

        <figure class="geo-figure">
          <a href="https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86994/iss043e303045_lrg.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86994/iss043e303045_lrg.jpg" alt="Fotografia feita da Estação Espacial Internacional mostrando o extremo norte do Canal de Suez, Port Said, Port Fuad, instalações portuárias e a passagem estreita que conecta o Mediterrâneo ao canal." loading="lazy" decoding="async" style="height:auto;max-height:560px;object-fit:contain">
          </a>
          <figcaption>
            <strong>Canal de Suez: um ponto pequeno no mapa, uma conexão de escala mundial</strong>
            <span>A fotografia mostra o extremo norte do canal e as estruturas portuárias de Port Said e Port Fuad. Um corredor estreito pode reduzir milhares de quilômetros de navegação entre regiões da Europa e da Ásia.</span>
            <small>NASA Earth Observatory. Fotografia ISS043-E-303045, adquirida em 10/06/2015 pela tripulação da Estação Espacial Internacional.</small>
          </figcaption>
        </figure>

        <p>O relatório de transporte marítimo da UNCTAD mostra que tensões geopolíticas e mudanças de rota podem aumentar distâncias, tempo e custo. Em 2024, o crescimento das distâncias navegadas fez o indicador de tonelada-milha subir 5,9%, muito mais do que o crescimento do volume transportado.</p>
        <div class="scale-strip">
          <div class="scale-card"><strong>Nó</strong><p>Porto, canal, estreito ou terminal onde fluxos se concentram.</p></div>
          <div class="scale-card"><strong>Rota</strong><p>Ligação que conecta áreas produtoras, centros industriais e mercados.</p></div>
          <div class="scale-card"><strong>Rede</strong><p>Conjunto de nós e rotas; se um ponto estratégico falha, outros trajetos podem absorver parte do fluxo, geralmente com custos.</p></div>
        </div>

        ${choice('3','Chokepoints','Por que um canal relativamente estreito pode ter importância econômica mundial?',[['a','Porque concentra rotas e pode reduzir distância e tempo entre grandes regiões comerciais'],['b','Porque todo comércio mundial acontece exclusivamente dentro dele'],['c','Porque a distância deixou de afetar o transporte marítimo']],'a','Correto. Certos nós ganham importância pela posição que ocupam na rede.','Pense em localização estratégica, alternativas de rota e custo de desvio.')}

        <h3>4. A economia digital também tem cabos, distâncias e pontos de concentração</h3>
        <p>“Nuvem” parece uma palavra sem território, mas os dados circulam por infraestrutura física. A União Internacional de Telecomunicações (ITU) informa que <strong>mais de 99% dos fluxos internacionais de dados</strong> passam por cabos submarinos.</p>
        <div class="data-box">
          <strong class="card-title">A infraestrutura invisível da economia digital</strong>
          <p>O Global Connectivity Report 2025 da ITU contabiliza mais de 500 sistemas de cabos submarinos em operação, somando cerca de 1,4 milhão de quilômetros. O relatório também registra que grandes empresas de tecnologia passaram a ter papel crescente no financiamento de novos sistemas.</p>
          <p><a href="https://www.itu.int/itu-d/reports/statistics/2025/11/17/gcr-2025-chapter-3/" target="_blank" rel="noopener noreferrer">Abrir o capítulo de infraestrutura — ITU</a></p>
        </div>
        <div class="note-box"><strong>Digital não significa imaterial.</strong><p>Mensagens, pagamentos, vídeos, sistemas de empresas e serviços em nuvem dependem de fibras, cabos, centros de dados, energia, equipamentos, licenças e manutenção. Uma falha física pode produzir consequências econômicas muito distantes do ponto onde ocorreu.</p></div>

        ${choice('4','Infraestrutura digital','Se mais de 99% dos fluxos internacionais de dados passam por cabos submarinos, qual conclusão é mais adequada?',[['a','A economia digital depende de infraestrutura territorial física e de poucos corredores estratégicos'],['b','A internet funciona sem infraestrutura material'],['c','Satélites são responsáveis por todo o tráfego internacional de dados']],'a','Isso. O fluxo digital pode parecer instantâneo, mas percorre redes físicas distribuídas no território.','Procure os suportes materiais que tornam o serviço digital possível.')}

        <h3>5. Então, quem controla os fluxos?</h3>
        <p>Não existe um único “controlador da globalização”. O poder está distribuído de maneira desigual entre diferentes agentes, e cada um interfere em partes da rede.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Estados</strong><p>Criam leis, tarifas, acordos, controles de fronteira, regulações, licenças e políticas de infraestrutura.</p></div>
          <div class="mini-card"><strong>Empresas transnacionais</strong><p>Escolhem fornecedores, fábricas, centros logísticos, plataformas, tecnologias e destinos de investimento.</p></div>
          <div class="mini-card"><strong>Operadores de infraestrutura</strong><p>Portos, armadores, companhias aéreas, telecomunicações, cabos, data centers e sistemas de pagamento mantêm fluxos funcionando.</p></div>
          <div class="mini-card"><strong>Instituições e padrões</strong><p>Organizações internacionais, normas técnicas, contratos e sistemas financeiros estabelecem regras que tornam conexões possíveis — ou mais difíceis.</p></div>
        </div>
        <p>Consumidores e trabalhadores também participam da economia global, mas isso não significa que possuam o mesmo poder de decisão que Estados, grandes empresas ou operadores de infraestruturas estratégicas.</p>

        ${choice('5','Poder em rede','Qual afirmação evita uma explicação simplista sobre o controle da economia global?',[['a','Uma única empresa controla todos os fluxos do planeta'],['b','Diferentes agentes controlam partes da rede e possuem capacidades desiguais de decidir, regular, investir ou bloquear fluxos'],['c','Nenhum agente interfere nos fluxos porque o mercado funciona sem decisões']],'b','Correto. O poder é distribuído, mas não igualmente distribuído.','Identifique qual agente controla qual etapa, infraestrutura ou regra.')}

        <h3>6. Tecnologia pode reorganizar o comércio — e criar novas dependências</h3>
        <p>Em 2025, a OMC registrou forte expansão do comércio de bens ligados à inteligência artificial, como semicondutores, servidores e equipamentos de transmissão de dados. Esses bens somaram cerca de <strong>US$ 4,18 trilhões</strong> e responderam por 42% do crescimento do comércio mundial de mercadorias naquele ano, embora representassem aproximadamente um sexto do comércio total.</p>
        <p>Isso não significa que “a IA substituiu a geografia”. O crescimento aumenta a importância de minas, fábricas de semicondutores, energia, água industrial, portos, aeroportos, data centers e redes digitais.</p>
        <div class="concept-box"><strong>Tecnologia reorganiza o território.</strong><p>Quanto mais estratégica se torna uma tecnologia, mais importante é descobrir onde estão os insumos, as fábricas, os conhecimentos especializados, as infraestruturas e as regras das quais ela depende.</p></div>

        ${choice('6','Tecnologia e território','O crescimento do comércio de semicondutores e equipamentos ligados à IA indica que a economia ficou menos dependente do território?',[['a','Sim, porque produtos digitais não precisam de matérias-primas ou fábricas'],['b','Não. O crescimento cria e reforça dependências de materiais, indústria, energia, logística e infraestrutura digital'],['c','Sim, porque todos os países produzem esses componentes na mesma proporção']],'b','Isso. Tecnologias avançadas continuam apoiadas em cadeias materiais e territoriais muito concretas.','Siga a cadeia por trás da tecnologia: materiais → fabricação → energia → transporte → dados → mercado.')}

        <h3>7. O Brasil também é um nó dessas redes</h3>
        <p>Em 2025, as exportações brasileiras alcançaram aproximadamente <strong>US$ 348,7 bilhões</strong>, segundo balanço do Ministério do Desenvolvimento, Indústria, Comércio e Serviços. Esse valor reúne cadeias muito diferentes: produtos agropecuários, minerais, manufaturados e outros bens destinados a parceiros espalhados pelo mundo.</p>
        <div class="map-box">
          <strong class="card-title">Investigue os fluxos reais do Brasil</strong>
          <p>O <strong>Comex Stat</strong> permite consultar exportações e importações por produto, país parceiro, estado, município e período. Em vez de decorar quem “compra do Brasil”, o aluno pode verificar a evidência.</p>
          <p><a href="https://comexstat.mdic.gov.br/" target="_blank" rel="noopener noreferrer">Abrir Comex Stat — MDIC</a></p>
        </div>

        <h3>8. Observatório do lugar onde vivo — conexão global</h3>
        <div class="field-box">
          <strong class="card-title">O mesmo lugar também participa de redes que vão muito além dele</strong>
          <p>Retome o lugar acompanhado desde o capítulo 01. Escolha <strong>um produto, serviço ou infraestrutura</strong> visível ali — por exemplo, um alimento embalado, veículo, aparelho eletrônico, antena, comércio, serviço digital ou meio de pagamento.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>1. Identifique uma conexão externa</strong><p>Há indicação de origem, fabricante, fornecedor, rede de transporte, operadora ou serviço ligado a outro município, estado ou país?</p></div>
            <div class="mini-card"><strong>2. Siga dois elos</strong><p>Reconstrua pelo menos dois passos da cadeia: origem → transformação → transporte → venda → uso → fluxo de dados.</p></div>
            <div class="mini-card"><strong>3. Procure um nó</strong><p>Que porto, estrada, centro de distribuição, rede de telecomunicações, plataforma ou instituição ajuda essa conexão a funcionar?</p></div>
            <div class="mini-card"><strong>4. Separe evidência de hipótese</strong><p>Registre o que a embalagem, mapa, site oficial ou dado confirma e o que ainda seria necessário pesquisar.</p></div>
          </div>
          <p><strong>Segurança:</strong> não registre dados pessoais, contas, senhas, placas ou informações privadas para realizar esta atividade.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint final — uma rede sob pressão</h3>
          <div class="challenge-box">
            <strong class="card-title">Dois problemas acontecem na mesma semana</strong>
            <p>Um importante corredor marítimo sofre interrupção temporária, obrigando navios a usar uma rota mais longa. Em outra região, um cabo submarino apresenta falha e parte do tráfego internacional precisa ser redirecionado.</p>
            <p>Explique por que esses acontecimentos podem afetar lugares distantes. Sua resposta deve incluir:</p>
            <ul>
              <li>um fluxo físico e um fluxo digital;</li>
              <li>o conceito de nó, rota e rede;</li>
              <li>dois agentes com poder de decisão diferente;</li>
              <li>um efeito possível sobre tempo ou custo;</li>
              <li>uma alternativa de rota ou redundância;</li>
              <li>uma evidência que seria necessária antes de afirmar quem sofreu o maior impacto.</li>
            </ul>
            <details>
              <summary>O que caracteriza uma resposta forte?</summary>
              <p>Ela mostra que interdependência não significa ausência de geografia: identifica infraestruturas materiais, agentes, escalas, alternativas e desigualdades. Também evita afirmar que um único agente controla toda a rede ou que toda interrupção produz o mesmo efeito em todos os lugares.</p>
            </details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo articula globalização, divisão territorial do trabalho, cadeias globais de valor, comércio internacional, transportes, redes digitais, tecnologia, empresas, Estados e relações de poder. Retoma fluxos, recursos, produção e riscos e prepara o capítulo 10, no qual decisões sobre exploração, proteção e sustentabilidade exigirão considerar agentes em várias escalas.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> a economia global funciona como uma rede de redes. Mercadorias, serviços, dados e capitais circulam rapidamente, mas dependem de infraestruturas localizadas, regras, empresas e Estados. Controlar um nó, uma tecnologia, uma rota, um padrão ou uma etapa estratégica da cadeia pode significar possuir grande poder — e esse poder é distribuído de forma desigual.</div>
      `
    });
  }

  MBB.enableChapter?.('09 Globalização', showChapter);
})();
