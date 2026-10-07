(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Produção e território',
      technical:'campo • recursos naturais • cadeias produtivas • agropecuária • mineração • petróleo • beneficiamento • logística • trabalho • valor • impactos • redes territoriais',
      title:'O que existe por trás de um alimento, minério ou combustível que chega até nós?',
      objective:'<strong>Objetivo:</strong> reconstruir cadeias produtivas relacionando origem dos recursos, condições naturais, técnica, trabalho, beneficiamento, infraestrutura, circulação, agentes, mercados e impactos; comparar alimentos, minérios e combustíveis sem reduzir o campo a “produção de comida” nem confundir extração de recurso com produto final.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Um mesmo território pode alimentar cadeias muito diferentes</strong>
            <p>No capítulo 02, você viu uma imagem de satélite de Mossoró, no Rio Grande do Norte, para aprender a ler sensoriamento remoto. Agora olhe a mesma evidência com outra pergunta.</p>
            <p>A região reúne áreas agrícolas, salinas e campos de petróleo em terra. Frutas podem seguir para mercados e indústrias; o sal precisa ser extraído, processado e transportado; o petróleo entra numa rede ainda mais longa até virar combustíveis e outros derivados.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quando um produto chega à nossa mão, quantos lugares, recursos, trabalhadores, técnicas e redes ficaram invisíveis no caminho?</p>
          </div>
        </section>

        <figure class="geo-figure">
          <a href="https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146090/riograndedonorte_oli_2019176.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146090/riograndedonorte_oli_2019176.jpg" alt="Imagem Landsat 8 de Mossoró e arredores, no Rio Grande do Norte, mostrando cidade, áreas agrícolas, salinas e áreas de exploração de petróleo em terra." loading="lazy" decoding="async" style="height:auto;max-height:720px;object-fit:contain">
          </a>
          <figcaption>
            <strong>A mesma imagem, uma nova leitura geográfica</strong>
            <span>Observe como diferentes usos do território aparecem próximos, mas se conectam a cadeias que podem alcançar lugares muito distantes.</span>
            <small>NASA Earth Observatory, imagem por Lauren Dauphin com dados Landsat do USGS, adquirida em 25/06/2019. Fonte: “Salt, Oil, and Fruit from Mossoró”.</small>
          </figcaption>
        </figure>

        ${choice('1','Leia a cadeia, não apenas a paisagem','A imagem mostra áreas agrícolas, salinas e exploração de petróleo. Qual afirmação é mais adequada?',[['a','A imagem permite reconhecer usos do território, mas não mostra sozinha todos os elos, agentes e destinos das cadeias produtivas'],['b','Tudo o que é produzido ali é consumido obrigatoriamente no próprio município'],['c','A presença de uma área produtiva revela automaticamente quem recebeu a maior parte do valor gerado']],'a','Correto. A imagem localiza atividades, mas a cadeia completa exige outras evidências sobre processamento, transporte, agentes, mercados e destinos.','Separe o que está visível no território dos fluxos e relações que precisam ser reconstruídos.')}

        <h3>1. Cadeia produtiva: seguir o produto pelo território</h3>
        <p>Uma <strong>cadeia produtiva</strong> reúne etapas e agentes ligados à produção de um bem. Ela não começa na loja e nem termina necessariamente no local onde a matéria-prima foi obtida.</p>
        <div class="geo-process">
          <span>recurso/insumo</span><b>→</b><span>produção ou extração</span><b>→</b><span>beneficiamento</span><b>→</b><span>armazenamento</span><b>→</b><span>transporte</span><b>→</b><span>transformação</span><b>→</b><span>distribuição</span><b>→</b><span>consumo ou exportação</span>
        </div>
        <p>Nem toda cadeia possui exatamente essas etapas ou nessa ordem. O importante é perguntar <strong>onde ocorre cada etapa, quem participa, que infraestrutura conecta os lugares e onde ficam benefícios, custos e riscos</strong>.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Fluxo material</strong><p>Grãos, minérios, petróleo, embalagens, peças e produtos se deslocam fisicamente.</p></div>
          <div class="mini-card"><strong>Fluxo de informação e dinheiro</strong><p>Preços, contratos, crédito, dados e decisões também conectam os elos.</p></div>
          <div class="mini-card"><strong>Fluxo de impactos</strong><p>Uso de água e solo, emissões, resíduos, empregos e receitas não ficam necessariamente no mesmo lugar.</p></div>
        </div>

        ${choice('2','Reconstrua o caminho','Um pacote de farinha está no supermercado. Qual investigação melhor reconstrói sua cadeia produtiva?',[['a','Descobrir apenas o preço na prateleira'],['b','Localizar origem do grão, produção, armazenamento, moagem, transporte, distribuição e agentes envolvidos'],['c','Concluir que foi produzido no mesmo bairro onde é vendido']],'b','Isso. A cadeia liga lugares e etapas diferentes; o produto final esconde parte desse percurso.','Siga o material para trás e para frente: origem → transformação → circulação → consumo.')}

        <h3>2. O campo produz alimentos — e também fibras, energia e matérias-primas</h3>
        <p>O espaço rural não é apenas o “lugar onde nasce a comida”. Nele existem agricultura, pecuária, silvicultura, extrativismo, agroindústrias, geração de energia, serviços, infraestrutura e diferentes formas de propriedade e trabalho.</p>
        <div class="data-box">
          <strong class="card-title">Uma produção enorme depende de redes igualmente grandes</strong>
          <p>Segundo o IBGE, a safra brasileira de cereais, leguminosas e oleaginosas de <strong>2025 chegou a 346,1 milhões de toneladas</strong>. A soja respondeu por <strong>166,1 milhões de toneladas</strong>. Produzir esse volume exige muito mais do que terra cultivada: sementes, máquinas, fertilizantes, crédito, trabalho, armazenagem, estradas, ferrovias, portos, indústrias e mercados.</p>
          <p><a href="https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45673-em-dezembro-ibge-preve-safra-de-346-1-milhoes-de-toneladas-para-2025-e-de-339-8-milhoes-de-toneladas-para-2026" target="_blank" rel="noopener noreferrer">Ver os dados da safra 2025 no IBGE</a></p>
        </div>
        <div class="map-box">
          <strong class="card-title">O campo está ligado às cidades</strong>
          <p>O <strong>Atlas do Espaço Rural Brasileiro</strong>, do IBGE, analisa o rural como parte de uma trama territorial que envolve campo e cidade. O capítulo de logística mostra como produção, armazenagem, agroindústria, rodovias, ferrovias e portos interferem no caminho das mercadorias.</p>
          <p><a href="https://www.ibge.gov.br/geociencias/atlas/tematicos/16362-atlas-do-espaco-rural-brasileiro.html" target="_blank" rel="noopener noreferrer">Explorar o Atlas do Espaço Rural Brasileiro</a></p>
        </div>

        ${choice('3','Produção não termina na porteira','Uma região aumenta muito a produção de grãos, mas tem pouca capacidade de armazenagem e transporte caro até os portos. O que pode acontecer?',[['a','A logística pode limitar competitividade, elevar custos e alterar os destinos possíveis da produção'],['b','Nada, porque transporte não faz parte da cadeia produtiva'],['c','Toda a produção passa automaticamente a ser consumida no município']],'a','Correto. Produção e logística fazem parte do mesmo sistema territorial.','Olhe além da lavoura: armazenagem, vias, terminais e distância também moldam a cadeia.')}

        <h3>3. Recurso natural não vira mercadoria sozinho</h3>
        <p>Minérios existem na crosta terrestre, mas um depósito mineral só entra numa cadeia econômica quando conhecimento geológico, tecnologia, investimento, autorização, trabalho e infraestrutura tornam possível sua extração e aproveitamento.</p>

        <figure class="geo-figure">
          <a href="https://eoimages.gsfc.nasa.gov/images/imagerecords/39000/39581/carajas_ali_2009207_lrg.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/39000/39581/carajas_ali_2009207_lrg.jpg" alt="Imagem de satélite da mina de ferro de Carajás, no Pará, mostrando áreas de mineração a céu aberto contrastando com a floresta ao redor." loading="lazy" decoding="async" style="height:auto;max-height:720px;object-fit:contain">
          </a>
          <figcaption>
            <strong>Carajás: a extração é visível; a cadeia completa não</strong>
            <span>A mina a céu aberto transforma diretamente a superfície. Depois da extração, o minério ainda passa por beneficiamento, transporte e outros elos até chegar a indústrias e mercados.</span>
            <small>NASA Earth Observatory. Imagem de Jesse Allen com dados EO-1 ALI, adquirida em 26/07/2009.</small>
          </figcaption>
        </figure>

        <div class="data-box">
          <strong class="card-title">Mineração também forma redes nacionais e globais</strong>
          <p>O <strong>Sumário Mineral Brasileiro 2025</strong>, da ANM, informa que o Brasil produziu cerca de <strong>447,2 milhões de toneladas de ferro beneficiado em 2024</strong>, equivalentes a 17,9% da produção mundial informada na publicação.</p>
          <p><a href="https://www.gov.br/anm/pt-br/assuntos/economia-mineral/publicacoes/sumario-mineral/sumario-mineral-brasileiro-2025" target="_blank" rel="noopener noreferrer">Consultar o Sumário Mineral Brasileiro — ANM</a> • <a href="https://www.gov.br/anm/pt-br/assuntos/economia-mineral/producao-mineral" target="_blank" rel="noopener noreferrer">Explorar dados de produção mineral</a></p>
        </div>
        <div class="note-box"><strong>Não confunda recurso, reserva e produto.</strong><p>A existência geológica de uma substância não significa que todo o volume possa ou deva ser extraído. Viabilidade técnica e econômica, legislação, licenciamento, impactos e decisões sociais fazem parte da análise.</p></div>

        ${choice('4','Da jazida ao produto','Por que uma mina de ferro não pode ser analisada apenas pelo buraco aberto no terreno?',[['a','Porque a cadeia envolve beneficiamento, energia, água, trabalho, ferrovias ou rodovias, terminais, indústrias, mercados e impactos em diferentes lugares'],['b','Porque o minério já sai da mina na forma de automóvel pronto'],['c','Porque localização e transporte não importam para a mineração']],'a','Isso. A extração é um elo central, mas o território da cadeia é muito maior do que a área da mina.','Siga o minério: extração → beneficiamento → transporte → transformação → mercado.')}

        <h3>4. Petróleo: extrair não é o mesmo que abastecer um veículo</h3>
        <p>O petróleo bruto precisa passar por uma cadeia técnica extensa. No Brasil, grande parte da produção ocorre no mar; depois entram em cena plataformas, navios, dutos, terminais, refinarias, bases de distribuição e diferentes meios de transporte.</p>
        <div class="geo-process">
          <span>reservatório</span><b>→</b><span>extração</span><b>→</b><span>escoamento</span><b>→</b><span>refino</span><b>→</b><span>distribuição</span><b>→</b><span>combustíveis e outros derivados</span>
        </div>
        <div class="data-box">
          <strong class="card-title">Produção e consumo podem estar muito longe um do outro</strong>
          <p>A ANP registrou produção média nacional de aproximadamente <strong>3,8 milhões de barris de petróleo por dia em 2025</strong>. Cerca de <strong>80% da produção brasileira</strong> veio do pré-sal. O dado ajuda a enxergar a escala da extração, mas não diz sozinho onde cada derivado foi refinado, distribuído ou consumido.</p>
          <p><a href="https://www.gov.br/anp/pt-br/centrais-de-conteudo/publicacoes/anuario-estatistico/anuario-estatistico-brasileiro-do-petroleo-gas-natural-e-biocombustiveis-2026" target="_blank" rel="noopener noreferrer">Abrir o Anuário Estatístico 2026 — ANP</a></p>
        </div>

        ${choice('5','Petróleo não é gasolina pronta','Um campo de petróleo produz milhares de barris por dia. Para saber como isso se relaciona com o combustível vendido em um posto, o que ainda precisamos investigar?',[['a','Refino, tipo de derivados produzidos, transporte, distribuição e origem/destino dos fluxos'],['b','Apenas a cor da plataforma'],['c','Nada: petróleo bruto e gasolina são exatamente o mesmo produto']],'a','Correto. Entre a extração e o consumo existem transformação industrial e redes de distribuição.','A pergunta é sobre a cadeia completa, não apenas sobre o volume extraído.')}

        <h3>5. Onde o valor é criado — e onde ficam os custos?</h3>
        <p>Cadeias produtivas distribuem <strong>valor, poder de decisão, empregos, tributos, infraestrutura e impactos</strong> de forma desigual. O lugar que fornece a matéria-prima nem sempre é o mesmo que concentra processamento, serviços especializados, sedes empresariais ou maior parcela do valor final.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Produtores e extratores</strong><p>Organizam a obtenção da matéria-prima e assumem parte dos riscos produtivos.</p></div>
          <div class="mini-card"><strong>Indústrias</strong><p>Beneficiam e transformam materiais, agregando novas funções e valor.</p></div>
          <div class="mini-card"><strong>Logística e comércio</strong><p>Conectam origens, centros de transformação, mercados internos e exportações.</p></div>
          <div class="mini-card"><strong>Estado e sociedade</strong><p>Regulam, fiscalizam, constroem infraestrutura, arrecadam receitas e também enfrentam impactos e conflitos.</p></div>
        </div>
        <p>Por isso, dizer que uma região é “rica em recursos” não basta para concluir que toda a população local vive em melhores condições. É preciso investigar <strong>quem controla os elos, como o valor circula e como benefícios e custos são territorialmente distribuídos</strong>.</p>

        ${choice('6','Riqueza natural e desenvolvimento','Uma região possui grande produção mineral. Qual conclusão é geograficamente mais cuidadosa?',[['a','A população local é automaticamente rica'],['b','A produção pode gerar empregos e receitas, mas é preciso analisar distribuição do valor, infraestrutura, condições de trabalho, impactos, serviços e relações com outros territórios'],['c','Recursos naturais não têm nenhuma relação com economia e território']],'b','Isso. Recurso abundante não determina sozinho os resultados sociais e territoriais.','Diferencie volume produzido de distribuição de benefícios, custos e poder.')}

        <h3>6. Três tipos de recurso, uma mesma pergunta geográfica</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Alimento ou fibra</strong><p>Depende de solo, água, clima, sementes, técnica e ciclos biológicos. Pode ser renovável, mas isso não significa uso ilimitado ou sem impactos.</p></div>
          <div class="mini-card"><strong>Minério</strong><p>É recurso geológico não renovável em escala humana. Extração e beneficiamento mudam materiais e paisagens e exigem gestão de rejeitos e recuperação de áreas.</p></div>
          <div class="mini-card"><strong>Petróleo e gás</strong><p>São recursos fósseis não renováveis. Sua cadeia inclui extração, processamento/refino e distribuição, além de emissões associadas ao uso dos combustíveis.</p></div>
          <div class="mini-card"><strong>Em todos os casos</strong><p>Localização, escala, tecnologia, trabalho, infraestrutura, regulação, mercado e ambiente ajudam a explicar a cadeia.</p></div>
        </div>
        <div class="concept-box"><strong>Evite o rótulo simples “renovável = sustentável”.</strong><p>Um recurso renovável pode ser usado acima de sua capacidade de regeneração ou com impactos relevantes. Sustentabilidade depende de como, onde, quanto e por quem o recurso é utilizado.</p></div>

        <h3>7. Aplicação: conecte o lugar observado às cadeias que chegam até ele</h3>
        <div class="field-box">
          <strong class="card-title">Sem criar um novo projeto</strong>
          <p>Retome o mesmo lugar do seu Observatório e escolha <strong>um produto que chega até ele</strong>: alimento da cantina, combustível de ônibus, material de construção, objeto metálico, papel, roupa ou outro item comum.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>Origem provável</strong><p>Que matéria-prima existe no produto? Ela vem do campo, de floresta, mina, poço ou de material reciclado?</p></div>
            <div class="mini-card"><strong>Transformação</strong><p>Que etapas industriais ou de beneficiamento ocorreram antes de o produto chegar ali?</p></div>
            <div class="mini-card"><strong>Circulação</strong><p>Quais redes podem ter sido usadas: rodovia, ferrovia, porto, duto, centro de distribuição?</p></div>
            <div class="mini-card"><strong>Evidência e limite</strong><p>Registre uma fonte que sustente parte do caminho e algo que ainda não conseguiu comprovar.</p></div>
          </div>
          <p><strong>Regra MbB:</strong> não invente a origem. Se a embalagem, nota, fabricante ou fonte oficial não permitir confirmar um elo, escreva “não confirmado” e diga que evidência faltaria.</p>
        </div>

        <div class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final</span>
          <h3>Uma lata de milho parece um produto simples. Reconstrua o território escondido nela.</h3>
          <div class="challenge-box">
            <p>Uma escola compra latas de milho para preparar refeições. No rótulo aparecem apenas a marca, o local da indústria e informações do produto. A lata chegou de caminhão.</p>
            <p><strong>Sua tarefa:</strong> construa uma hipótese de cadeia, mas marque claramente o que é <em>provável</em> e o que está <em>comprovado</em>.</p>
            <ol>
              <li>Quais matérias-primas podem estar envolvidas no alimento e na embalagem?</li>
              <li>Que etapas devem existir entre cultivo, metal, indústria e escola?</li>
              <li>Quais recursos naturais entram na cadeia?</li>
              <li>Que redes de transporte e armazenamento podem conectar os lugares?</li>
              <li>Que agentes participam e onde pode ocorrer agregação de valor?</li>
              <li>Quais impactos precisam ser investigados sem serem presumidos?</li>
              <li>Que três fontes ou evidências permitiriam transformar sua hipótese em explicação mais segura?</li>
            </ol>
            <details>
              <summary>O que uma boa resposta deve mostrar?</summary>
              <p>Que um produto cotidiano combina cadeias distintas. O milho depende de produção agrícola e processamento; a embalagem depende de matéria-prima mineral ou material reciclado, metalurgia e fabricação; transporte e armazenagem conectam os elos. A resposta deve distinguir fatos confirmados de hipóteses, localizar pelo menos alguns elos, identificar agentes e evitar afirmar impactos sem evidência.</p>
            </details>
          </div>
        </div>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo integra espaço rural, recursos naturais, produção agropecuária, mineração, energia, trabalho, técnicas, circulação e cadeias produtivas. Retoma cartografia, redes e sociedade–natureza para mostrar como matérias-primas se conectam a cidades, indústrias, mercados e decisões em diferentes escalas.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> nenhum produto chega “pronto” do território. Alimentos, minérios e combustíveis entram em cadeias que combinam recursos naturais, trabalho, tecnologia, infraestrutura, capital, regulação e redes. Entender a cadeia significa seguir os elos, localizar os lugares, identificar os agentes e comparar onde ficam o valor, os benefícios, os riscos e os impactos.</div>
      `
    });
  }

  MBB.enableChapter?.('07 Campo', showChapter);
})();
