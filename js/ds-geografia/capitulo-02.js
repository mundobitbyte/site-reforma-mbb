(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Ler o espaço',
      technical:'cartografia • orientação • coordenadas • escala • legenda • mapas temáticos • projeções • GNSS • sensoriamento remoto • SIG',
      title:'Um mapa apenas mostra o território ou também faz escolhas sobre ele?',
      objective:'<strong>Objetivo:</strong> usar mapas e imagens reais para localizar, orientar, comparar escalas e interpretar informações espaciais, reconhecendo que toda representação cartográfica seleciona dados, recortes, símbolos e formas de mostrar o território.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">O mesmo lugar pode aparecer de muitos jeitos</strong>
            <p>Imagine que três pessoas observem a mesma área: uma abre um mapa de ruas para encontrar um caminho, outra usa uma imagem de satélite para observar ocupação do solo e uma terceira analisa um mapa de risco com áreas classificadas por cores.</p>
            <p>O território é o mesmo, mas cada representação destaca algumas informações e deixa outras de fora. Isso não torna o mapa “falso”: mostra que ele foi construído para uma finalidade.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que precisamos observar para usar um mapa como evidência — e não apenas como uma figura?</p>
          </div>
        </section>

        <h3>1. Antes de ler o território, leia o próprio mapa</h3>
        <p>Um mapa é uma <strong>representação seletiva do espaço</strong>. Para caber em uma folha ou tela, ele reduz o território, escolhe o que mostrar e transforma elementos reais em linhas, pontos, áreas, cores e símbolos.</p>

        <figure class="geo-figure">
          <a href="https://geoftp.ibge.gov.br/produtos_educacionais/mapas_tematicos/mapas_do_brasil/mapas_nacionais/politico/brasil_politico.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://geoftp.ibge.gov.br/produtos_educacionais/mapas_tematicos/mapas_do_brasil/mapas_nacionais/politico/brasil_politico.jpg" alt="Mapa político do Brasil produzido pelo IBGE, com limites estaduais, cidades, hidrografia, legenda, escalas e mapas auxiliares." style="height:auto;max-height:720px;object-fit:contain" loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Mapa político do Brasil — IBGE</strong>
            <span>Observe que o mapa não tenta mostrar “tudo” sobre o Brasil. Ele prioriza limites político-administrativos, localidades, hidrografia e elementos de referência. Título, legenda, símbolos, orientação e escala ajudam a entender como a informação foi organizada.</span>
            <small>Fonte: IBGE, produto educacional de mapas do Brasil. Arquivo público para consulta e download. Abra a imagem para examiná-la em tamanho maior.</small>
          </figcaption>
        </figure>

        <div class="map-box">
          <strong class="card-title">Leitura em quatro perguntas</strong>
          <div class="four-col">
            <div class="mini-card"><strong>O quê?</strong><p>Qual é o tema ou fenômeno representado?</p></div>
            <div class="mini-card"><strong>Onde?</strong><p>Qual área foi incluída e qual ficou fora do recorte?</p></div>
            <div class="mini-card"><strong>Como?</strong><p>Quais símbolos, cores, classes e escalas foram usados?</p></div>
            <div class="mini-card"><strong>Fonte?</strong><p>Quem produziu, com quais dados e em que data?</p></div>
          </div>
        </div>

        ${choice('1','Leia o mapa','No mapa político do IBGE acima, os estados aparecem com cores diferentes. É correto concluir, só pela cor, que uma cor representa mais população que outra?',[['a','Sim; toda diferença de cor em mapas representa quantidade'],['b','Não; é preciso consultar legenda e finalidade, pois cores também podem apenas diferenciar categorias ou territórios'],['c','Sim; mapas políticos sempre mostram população']],'b','Correto. Cor não tem significado universal. Neste caso, a leitura deve seguir a legenda e a finalidade do mapa, sem transformar diferenças visuais em quantidades que não foram representadas.','Não atribua significado quantitativo a uma cor sem verificar legenda, tema e método do mapa.')}

        <h3>2. Orientação e coordenadas: localizar não é “achar mais ou menos”</h3>
        <p>Os <strong>pontos cardeais</strong> — norte, sul, leste e oeste — ajudam a descrever direções. Em muitos mapas o norte fica no alto, mas isso é uma convenção, não uma lei. Sempre procure a indicação de orientação ou a própria grade de coordenadas.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Latitude</strong><p>Indica a posição ao norte ou ao sul do Equador. Varia de 0° a 90°.</p></div>
          <div class="mini-card"><strong>Longitude</strong><p>Indica a posição a leste ou a oeste do meridiano de Greenwich. Varia de 0° a 180°.</p></div>
        </div>
        <div class="concept-box">
          <strong>Coordenadas formam um endereço global.</strong>
          <p>Um ponto com latitude e longitude pode ser localizado em qualquer mapa compatível. A coordenada diz <em>onde</em>; para entender <em>o que existe ali</em>, precisamos de outras camadas e informações.</p>
        </div>

        ${choice('2','Coordenadas','Um ponto está em 23° S e 46° W. Em quais hemisférios ele está?',[['a','Norte e Leste'],['b','Sul e Oeste'],['c','Sul e Leste']],'b','Isso. S indica latitude ao sul do Equador; W indica longitude a oeste de Greenwich.','Leia cada parte separadamente: latitude usa Norte/Sul; longitude usa Leste/Oeste.')}

        <h3>3. Escala: quanto do território cabe na representação?</h3>
        <p>A <strong>escala cartográfica</strong> relaciona uma medida no mapa com a medida correspondente no terreno. Em uma escala 1:100.000, por exemplo, 1 cm no mapa representa 100.000 cm no terreno, ou 1 km.</p>
        <div class="scale-strip">
          <div class="scale-card"><strong>Escala maior</strong><p>Ex.: 1:10.000. Mostra uma área menor com mais detalhes.</p></div>
          <div class="scale-card"><strong>Escala menor</strong><p>Ex.: 1:5.000.000. Mostra uma área maior com menos detalhes.</p></div>
          <div class="scale-card"><strong>Escala gráfica</strong><p>Barra graduada que continua útil quando o mapa é ampliado ou reduzido proporcionalmente.</p></div>
        </div>
        <div class="note-box">
          <strong>Não confunda duas ideias diferentes.</strong>
          <p><strong>Escala cartográfica</strong> é a relação de redução do mapa. <strong>Escala geográfica</strong> é o nível de análise de um fenômeno: local, regional, nacional, global etc. O capítulo 01 já usou escala geográfica para conectar processos próximos e amplos.</p>
        </div>

        ${choice('3','Escalas','Você quer identificar entradas de prédios e cruzamentos no entorno da escola. Qual representação tende a ser mais adequada?',[['a','Um mapa local em escala 1:10.000'],['b','Um mapa do Brasil em escala 1:5.000.000'],['c','Qualquer escala mostra o mesmo nível de detalhe']],'a','Correto. Para uma área pequena e detalhes locais, uma escala cartográfica maior é mais adequada.','Quanto menor a área que queremos observar com detalhe, maior tende a ser a escala cartográfica necessária.')}

        <h3>4. Legenda, símbolos e mapas temáticos: a linguagem do mapa</h3>
        <p>A <strong>legenda</strong> explica o significado dos símbolos. Uma linha pode representar estrada, rio ou limite; uma cor pode representar altitude, população, uso do solo ou risco. Sem a legenda, a cor sozinha não prova nada.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Mapa de referência</strong><p>Ajuda a localizar elementos como cidades, vias, rios e limites.</p></div>
          <div class="mini-card"><strong>Mapa temático</strong><p>Destaca um fenômeno específico, como densidade populacional, vegetação, renda ou risco.</p></div>
          <div class="mini-card"><strong>Camada</strong><p>Conjunto de informações espaciais que pode ser sobreposto a outros em um sistema digital.</p></div>
        </div>
        <p>Escolher cores e classes faz parte da análise. Em um mapa de quantidades ordenadas, tons mais intensos podem indicar valores maiores; em categorias sem ordem, cores muito parecidas podem confundir classes diferentes.</p>

        <div class="data-box">
          <strong class="card-title">Um mesmo conjunto de dados pode produzir leituras visuais diferentes</strong>
          <p><strong>Dados didáticos:</strong> quatro setores apresentam 47%, 49%, 50% e 52% de cobertura vegetal.</p>
          <div class="two-col">
            <div class="mini-card"><strong>Classificação A</strong><p>0–25% • 25–50% • 50–75% • 75–100%. Parte das pequenas diferenças fica agrupada.</p></div>
            <div class="mini-card"><strong>Classificação B</strong><p>46–48% • 48–50% • 50–52% • 52–54%. As pequenas diferenças ficam muito mais visíveis.</p></div>
          </div>
          <p>Nenhuma classificação deve ser julgada apenas pela aparência. A pergunta é: <strong>qual critério foi usado e ele é adequado ao objetivo?</strong></p>
          <p><strong>Experimente:</strong> qual das duas classificações faz os quatro setores parecerem mais diferentes entre si? Isso significa que ela é automaticamente a melhor para qualquer pergunta? Explique usando os valores.</p>
        </div>

        <h3>5. Projeções: transformar uma Terra curva em um mapa plano tem custo</h3>
        <p>O planeta é aproximadamente esférico, mas mapas impressos e telas são planos. Uma <strong>projeção cartográfica</strong> é uma forma matemática de transferir posições da superfície terrestre para o plano. Toda projeção produz algum tipo de deformação.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Mercator</strong><p>Preserva ângulos localmente e foi muito útil à navegação, mas amplia áreas em altas latitudes.</p></div>
          <div class="mini-card"><strong>Projeções equivalentes</strong><p>Preservam proporções de área, úteis quando o objetivo é comparar tamanhos, mas deformam outras propriedades.</p></div>
        </div>
        <div class="concept-box"><strong>Não existe “a projeção perfeita”.</strong><p>A escolha depende do que precisa ser preservado: área, forma, direção, distância ou outra propriedade.</p></div>

        ${choice('4','Projeções','Se o objetivo principal é comparar corretamente a área ocupada por diferentes países, qual escolha faz mais sentido?',[['a','Uma projeção equivalente, que preserve áreas'],['b','Qualquer projeção, porque todas preservam tudo'],['c','Retirar a escala e a legenda']],'a','Correto. Para comparar áreas, uma projeção equivalente é mais coerente com a finalidade do mapa.','Toda projeção distorce algo; escolha a que preserve a propriedade importante para a pergunta.')}

        <h3>6. Do satélite ao SIG: geotecnologias produzem novas camadas de evidência</h3>
        <figure class="geo-figure">
          <a href="https://earthobservatory.nasa.gov/images/146090/salt-oil-and-fruit-from-mossoro" target="_blank" rel="noopener noreferrer">
            <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146090/riograndedonorte_oli_2019176.jpg" alt="Imagem de satélite Landsat 8 da região de Mossoró, Rio Grande do Norte, mostrando área urbana, vegetação, parcelas agrícolas, costa, estuário e salinas." style="height:auto;max-height:720px;object-fit:contain" loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Mossoró e seu entorno vistos pelo Landsat 8 — 25 de junho de 2019</strong>
            <span>A imagem em cor natural permite observar padrões de ocupação, agricultura, vegetação, água, área urbana e salinas. Ela mostra formas espaciais que um mapa político não prioriza, mas não explica sozinha quem controla cada área nem por que ela foi transformada.</span>
            <small>Crédito: NASA Earth Observatory / Lauren Dauphin, usando dados Landsat do U.S. Geological Survey (USGS). Abra a imagem para consultar a descrição original e os créditos.</small>
          </figcaption>
        </figure>

        <div class="three-col">
          <div class="mini-card"><strong>GNSS / GPS</strong><p>Sistemas de satélites permitem estimar posição na superfície. GPS é um dos sistemas GNSS existentes.</p></div>
          <div class="mini-card"><strong>Sensoriamento remoto</strong><p>Sensores registram energia refletida ou emitida pela superfície sem contato direto, gerando imagens e medições.</p></div>
          <div class="mini-card"><strong>SIG</strong><p>Um Sistema de Informação Geográfica organiza, cruza, analisa e representa camadas de dados georreferenciados.</p></div>
        </div>
        <div class="geo-process">
          <span>localizar com GNSS</span><b>→</b><span>observar por sensores</span><b>→</b><span>combinar camadas no SIG</span><b>→</b><span>interpretar com contexto</span>
        </div>

        ${choice('5','Geotecnologias','Uma equipe quer registrar pontos de alagamento, comparar esses pontos com relevo e drenagem e observar imagens recentes da área. Qual combinação é mais adequada?',[['a','Somente uma fotografia sem localização'],['b','GNSS para localizar, sensoriamento remoto para observar e SIG para cruzar camadas'],['c','Apenas uma lista de nomes de ruas']],'b','Correto. As geotecnologias se complementam: localização, observação e análise espacial respondem partes diferentes do problema.','Pense em três funções: onde está, o que pode ser observado e como diferentes informações podem ser combinadas.')}

        <h3>7. Todo dado espacial tem limites — e o mapa também</h3>
        <p>Um mapa convincente pode levar a uma conclusão ruim se a fonte, a data, o recorte ou a classificação forem inadequados. Antes de aceitar a mensagem visual, investigue o que ficou invisível.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Recorte</strong><p>O que acontece logo fora da área mostrada?</p></div>
          <div class="mini-card"><strong>Resolução/escala</strong><p>O detalhe disponível é suficiente para a pergunta?</p></div>
          <div class="mini-card"><strong>Classificação</strong><p>Os intervalos agrupam ou destacam diferenças de modo coerente?</p></div>
          <div class="mini-card"><strong>Dado ausente</strong><p>Área sem informação não significa automaticamente valor zero.</p></div>
        </div>
        <div class="note-box"><strong>Cor também comunica.</strong><p>Vermelho pode sugerir perigo; verde pode sugerir qualidade ambiental. Essas associações podem ser úteis, mas também influenciam a leitura. Por isso legenda, método e fonte precisam aparecer.</p></div>

        ${choice('6','Leitura crítica','Um mapa não mostra registros em determinada área. Qual conclusão é mais responsável?',[['a','O fenômeno certamente não existe ali'],['b','É preciso verificar se a área foi coberta pelos dados, a resolução, a data e o método de coleta'],['c','A ausência de pontos sempre significa zero']],'b','Isso. Ausência de representação pode ser ausência do fenômeno, mas também pode resultar de falta de dados, recorte, escala ou método.','Mapa mostra o que os dados e as escolhas de representação permitem mostrar; investigue as limitações antes de concluir.')}

        <h3>8. Observatório do lugar onde vivo — segunda etapa</h3>
        <div class="field-box">
          <strong class="card-title">Agora transforme seu lugar em localização e camadas</strong>
          <p>Retome <strong>o mesmo lugar escolhido no capítulo 01</strong>. Não crie outro projeto.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>1. Localize</strong><p>Encontre o lugar em um mapa digital e registre latitude e longitude aproximadas de um ponto de referência.</p></div>
            <div class="mini-card"><strong>2. Oriente</strong><p>Identifique o norte e descreva o que existe ao norte, sul, leste e oeste do ponto escolhido.</p></div>
            <div class="mini-card"><strong>3. Observe a escala</strong><p>Compare um enquadramento próximo e outro mais amplo. O que aparece ou desaparece quando você muda a escala?</p></div>
            <div class="mini-card"><strong>4. Escolha uma camada</strong><p>Observe pelo menos uma informação espacial relevante: vias, hidrografia, uso do solo, imagem de satélite, limites ou outra camada disponível.</p></div>
          </div>
          <p><strong>Registro mínimo:</strong> coordenadas aproximadas + orientação + uma observação sobre escala + uma camada relevante + uma limitação do mapa ou dado usado.</p>
          <p>Para consulta de mapas oficiais, você pode explorar os <a href="https://educa.ibge.gov.br/professores/educa-recursos/18964-mapas.html?tipo=1" target="_blank" rel="noopener noreferrer">mapas educacionais do IBGE</a> e os <a href="https://www.ibge.gov.br/geociencias/cartas-e-mapas/mapas-estaduais.html" target="_blank" rel="noopener noreferrer">produtos cartográficos do IBGE</a>.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — desafio de interpretação cartográfica</h3>
          <div class="challenge-box">
            <strong>Uma prefeitura publicou um mapa chamado “Áreas prioritárias para arborização”</strong>
            <p>O mapa usa cinco tons de vermelho, mostra apenas os limites dos bairros e não informa no quadro principal a data dos dados, a fonte, os intervalos das classes nem se parques e áreas industriais foram tratados separadamente.</p>
            <p><strong>Sua tarefa:</strong> antes de usar esse mapa para decidir onde plantar árvores, responda:</p>
            <p>1) O que o título afirma que o mapa representa? 2) Quais informações cartográficas estão faltando? 3) Como a classificação por cores pode alterar a leitura? 4) Que escala seria necessária para decidir pontos de plantio em uma rua? 5) Que camada adicional ajudaria — imagem de satélite, uso do solo, temperatura de superfície, população ou outra? Justifique. 6) Qual informação você precisaria conferir na fonte antes de recomendar uma decisão?</p>
            <details><summary>O que uma boa resposta precisa perceber?</summary><p>O mapa pode ser útil para indicar padrões gerais, mas não basta para decidir sozinho. É necessário conhecer fonte, data, legenda, método e classes; verificar se a escala tem detalhe suficiente; considerar recortes e dados ausentes; e cruzar outras camadas coerentes com a pergunta. A decisão territorial vem depois da leitura crítica das evidências.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo desenvolve leitura, interpretação e uso aplicado de representações cartográficas e geotecnologias para compreender o espaço geográfico. Orientação, coordenadas, escalas, mapas temáticos, imagens de satélite, GNSS, sensoriamento remoto e SIG aparecem como ferramentas para analisar problemas reais, e não como uma lista isolada de definições.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> mapa não é o território. É uma representação construída para uma finalidade. Ler bem um mapa significa localizar, interpretar legenda e escala, verificar fonte e data, compreender projeções e reconhecer que recorte, classificação, cor e resolução influenciam a mensagem.</div>
      `
    });
  }

  MBB.enableChapter?.('02 Cartografia', showChapter);
})();
