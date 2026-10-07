(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Riscos e clima',
      technical:'ameaça • exposição • vulnerabilidade • capacidade • risco de desastre • inundação • deslizamento • adaptação • mitigação • mudanças climáticas • alertas • evidências',
      title:'Todo desastre é realmente “natural”?',
      objective:'<strong>Objetivo:</strong> analisar riscos e desastres como resultado da relação entre ameaças, exposição, vulnerabilidade e capacidade de resposta; interpretar mapas, imagens e alertas; distinguir tempo de clima e redução de risco de adaptação/mitigação climática; avaliar com cuidado o papel das mudanças climáticas sem atribuir automaticamente um evento isolado a uma única causa.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Quando a água sobe, o desastre começa com a chuva?</strong>
            <p>Em maio de 2024, chuvas extremas atingiram o Rio Grande do Sul. Em partes do estado, a NASA registrou mais de 300 mm de chuva em menos de uma semana. Rios transbordaram, áreas urbanas e rurais foram inundadas e infraestruturas importantes ficaram interrompidas.</p>
            <p>A chuva intensa foi uma <strong>ameaça</strong>. Mas os danos também dependeram de onde estavam pessoas, moradias, estradas e serviços; das condições de drenagem e ocupação; da vulnerabilidade dos lugares e da capacidade de prevenir, alertar, evacuar e responder.</p>
            <p class="central-question"><strong>Pergunta central:</strong> se o fenômeno físico pode ser natural, por que o desastre não pode ser explicado apenas pela natureza?</p>
          </div>
        </section>

        <figure class="geo-figure">
          <div class="geo-figure-grid">
            <div class="geo-figure-panel">
              <a href="https://science.nasa.gov/earth/earth-observatory/floods-engulf-porto-alegre-152795/" target="_blank" rel="noopener noreferrer">
                <img src="https://science.nasa.gov/wp-content/uploads/2023/06/portoalegre-oli-20240508-lrg.jpg" alt="Imagem Landsat de Porto Alegre em 8 de maio de 2024 mostrando extensa inundação na área urbana e nas proximidades do rio Jacuí." loading="lazy" decoding="async" style="height:auto;max-height:520px;object-fit:contain">
              </a>
            </div>
            <div class="geo-figure-panel">
              <a href="https://science.nasa.gov/earth/earth-observatory/southern-brazil-submerged-152880/" target="_blank" rel="noopener noreferrer">
                <img src="https://science.nasa.gov/wp-content/uploads/2023/06/brazilflooding-opera-20240506.jpg" alt="Mapa produzido pela NASA com estimativas de profundidade da inundação em áreas do Rio Grande do Sul em 6 de maio de 2024, usando tons de azul para representar diferentes profundidades." loading="lazy" decoding="async" style="height:auto;max-height:520px;object-fit:contain">
              </a>
            </div>
          </div>
          <figcaption>
            <strong>O evento visto do espaço e transformado em informação para decisão</strong>
            <span>À esquerda, imagem Landsat de 08/05/2024. À direita, estimativa de profundidade da água em 06/05/2024. Uma imagem mostra a extensão física; o mapa analítico ajuda a estimar onde a água estava mais profunda.</span>
            <small>NASA Earth Observatory. Imagem Landsat: Wanmei Liang, com dados USGS. Mapa de profundidade: Lauren Dauphin, com FwDET/OPERA/SRTM e dados NASA/JPL-Caltech.</small>
          </figcaption>
        </figure>

        ${choice('1','Leia a evidência antes de explicar','O que essas imagens permitem afirmar diretamente?',[['a','Que houve extensa inundação e que a profundidade estimada da água variou espacialmente'],['b','Que todas as áreas atingidas tinham a mesma vulnerabilidade social'],['c','Que uma única causa explica todos os danos observados']],'a','Correto. A evidência espacial mostra a inundação e sua distribuição; vulnerabilidade, causas sociais e capacidade de resposta exigem outras fontes.','Separe a evidência do fenômeno físico das explicações sobre por que os impactos foram tão diferentes entre lugares e grupos.')}

        <h3>1. Ameaça não é o mesmo que desastre</h3>
        <p>O glossário do <strong>Cemaden Educação</strong> define ameaça como um processo, fenômeno ou atividade capaz de produzir perdas e danos. Ela pode ter origem natural, antropogênica ou socionatural. Já o <strong>risco de desastre</strong> depende da ameaça, da exposição, da vulnerabilidade e da capacidade existente para enfrentar a situação.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Ameaça</strong><p>O fenômeno potencialmente perigoso: chuva extrema, cheia, deslizamento, seca, onda de calor, incêndio ou outra ocorrência.</p></div>
          <div class="mini-card"><strong>Exposição</strong><p>Pessoas, moradias, escolas, hospitais, lavouras, vias e outros elementos localizados onde a ameaça pode atingir.</p></div>
          <div class="mini-card"><strong>Vulnerabilidade</strong><p>Condições que aumentam a possibilidade de sofrer danos ou dificultam proteção, resposta e recuperação.</p></div>
          <div class="mini-card"><strong>Capacidade</strong><p>Recursos, infraestrutura, conhecimento, organização, alertas e serviços capazes de prevenir, responder e recuperar.</p></div>
        </div>
        <div class="geo-process"><span>ameaça</span><b>+</b><span>exposição</span><b>+</b><span>vulnerabilidade</span><b>↔</b><span>capacidade</span><b>→</b><span>risco</span></div>
        <p><small>O esquema é uma forma didática de organizar as relações, não uma fórmula matemática para calcular qualquer desastre.</small></p>
        <p><a href="https://educacao.cemaden.gov.br/glossario/" target="_blank" rel="noopener noreferrer">Consultar o Glossário do Cemaden Educação</a></p>

        ${choice('2','Mesmo fenômeno, riscos diferentes','Dois bairros recebem chuva de intensidade semelhante. Um tem boa drenagem, rotas de evacuação e pouca ocupação em áreas rebaixadas; o outro tem drenagem deficiente e muitas moradias expostas. Por que o risco pode ser diferente?',[['a','Porque risco depende também da exposição, vulnerabilidade e capacidade, não apenas da chuva'],['b','Porque chuva forte só é perigosa em bairros pobres'],['c','Porque a localização das pessoas não interfere nos impactos']],'a','Isso. O fenômeno físico é apenas uma parte da análise do risco.','Compare quem e o que está exposto, quais fragilidades existem e quais capacidades reduzem os danos.')}

        <h3>2. Então por que se fala em “desastre natural”?</h3>
        <p>Chuvas, cheias de rios, secas e movimentos de encosta podem envolver processos naturais. Porém, um <strong>desastre</strong> ocorre quando esses processos atingem uma sociedade e produzem perdas e perturbações que ultrapassam sua capacidade de enfrentar a situação.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Processo físico</strong><p>Uma chuva muito intensa pode ocorrer mesmo sobre uma área sem população. Nesse caso existe o fenômeno, mas não necessariamente um desastre humano.</p></div>
          <div class="mini-card"><strong>Desastre</strong><p>Quando pessoas, bens e serviços ficam expostos e os impactos superam a capacidade local, fatores sociais, territoriais, ambientais e de governança passam a fazer parte da explicação.</p></div>
        </div>
        <div class="note-box"><strong>Evite culpabilizar quem vive em área de risco.</strong><p>Moradia, renda, políticas habitacionais, preço da terra, infraestrutura, transporte, planejamento urbano e história da ocupação ajudam a explicar por que certos grupos ficam mais expostos. A vulnerabilidade não é uma “falha” individual.</p></div>

        ${choice('3','Explique sem simplificar','Uma encosta desliza após dias de chuva e atinge casas construídas abaixo dela. Qual análise é mais completa?',[['a','A chuva explica tudo, por isso o desastre é exclusivamente natural'],['b','É preciso relacionar chuva e condições da encosta com ocupação, exposição, infraestrutura, vulnerabilidade, alertas e capacidade de resposta'],['c','Se havia casas, a chuva deixa de ter qualquer importância']],'b','Correto. A análise geográfica conecta processo físico, uso do território e condições sociais.','Nem elimine a natureza da explicação, nem elimine a sociedade: o risco nasce das relações entre elas.')}

        <h3>3. Risco também pode ser produzido e reduzido pelo território</h3>
        <p>Decisões anteriores alteram a forma como uma ameaça se transforma em impacto. Impermeabilização extensa pode acelerar o escoamento; ocupação de várzeas aumenta a exposição a cheias; cortes inadequados em encostas podem aumentar instabilidade; ausência de drenagem e manutenção pode agravar alagamentos.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Antes do evento</strong><p>Planejamento do uso do solo, moradia segura, drenagem, proteção de áreas sensíveis, manutenção, educação e mapeamento reduzem risco.</p></div>
          <div class="mini-card"><strong>Durante o evento</strong><p>Monitoramento, alerta, comunicação acessível, rotas seguras, abrigos e resposta rápida podem reduzir perdas.</p></div>
          <div class="mini-card"><strong>Depois do evento</strong><p>Recuperar não deve signific apenas reconstruir exatamente a mesma vulnerabilidade. É possível adaptar infraestrutura e ocupação.</p></div>
        </div>
        <div class="data-box">
          <strong class="card-title">O Cemaden não olha apenas para a previsão de chuva</strong>
          <p>Os boletins de risco geo-hidrológico combinam condições e previsões meteorológicas com elementos como suscetibilidade, drenagem, ocupação e vulnerabilidade. Isso explica por que um mesmo volume previsto pode produzir níveis de atenção diferentes em lugares diferentes.</p>
          <p><a href="https://www.gov.br/cemaden/pt-br/assuntos/riscos-geo-hidrologicos" target="_blank" rel="noopener noreferrer">Acompanhar previsões de riscos geo-hidrológicos do Cemaden</a></p>
        </div>

        <h3>4. Tempo não é clima — e um evento isolado não prova sozinho uma mudança climática</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Tempo</strong><p>É a condição atmosférica observada ou prevista em curto prazo: a chuva de hoje, a temperatura desta tarde, uma frente fria.</p></div>
          <div class="mini-card"><strong>Clima</strong><p>É estudado a partir de padrões, médias, variabilidade e extremos ao longo de períodos longos. Mudanças climáticas alteram distribuições e probabilidades, não o “rótulo” de uma única tempestade.</p></div>
        </div>
        <p>O <strong>IPCC</strong> conclui que a frequência e/ou intensidade de precipitação extrema aumentou em muitas regiões com boa observação e que a influência humana é provavelmente o principal fator da intensificação observada de chuvas extremas em escala global sobre áreas continentais.</p>
        <div class="concept-box"><strong>E a enchente de Porto Alegre?</strong><p>A imagem de satélite prova que houve inundação; ela não prova sozinha por que choveu tanto. Estudos de <strong>atribuição climática</strong> usam observações e modelos para investigar quanto a mudança climática alterou a probabilidade ou intensidade de um tipo específico de evento. É mais rigoroso dizer “a mudança climática pode alterar o risco de certos extremos” do que atribuir automaticamente qualquer desastre a ela.</p></div>
        <p><a href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/" target="_blank" rel="noopener noreferrer">Consultar o capítulo do IPCC sobre extremos climáticos</a></p>

        ${choice('4','Clima e atribuição','Após observar uma única enchente muito grave, qual afirmação é cientificamente mais cuidadosa?',[['a','A imagem comprova sozinha que a mudança climática causou exatamente aquele evento'],['b','O evento deve ser analisado com dados meteorológicos e territoriais; tendências climáticas e atribuição exigem séries, modelos e estudos específicos'],['c','Mudanças climáticas nunca podem alterar chuvas extremas']],'b','Isso. Uma imagem documenta o evento; a relação com o clima exige outro tipo de evidência.','Diferencie observar o impacto, explicar o evento meteorológico e avaliar mudanças de probabilidade no clima.')}

        <h3>5. Mitigação climática, adaptação e redução de risco se relacionam — mas não são sinônimos</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Mitigação climática</strong><p>Reduz emissões de gases de efeito estufa ou amplia remoções, atuando sobre as causas do aquecimento global.</p></div>
          <div class="mini-card"><strong>Adaptação</strong><p>Ajusta sistemas humanos e naturais aos impactos atuais ou esperados do clima, reduzindo danos e aproveitando oportunidades quando possível.</p></div>
          <div class="mini-card"><strong>Redução do risco de desastre</strong><p>Atua sobre ameaças, exposição, vulnerabilidades e capacidades, incluindo planejamento, prevenção, preparação e alerta.</p></div>
        </div>
        <p>As três agendas podem se encontrar. Um parque linear em uma várzea, por exemplo, pode reduzir exposição a inundações, criar área de retenção de água e melhorar condições ambientais. Mas cada medida precisa ser avaliada no território real.</p>

        ${choice('5','Qual estratégia é qual?','Uma prefeitura remove ocupações de uma área de inundação com reassentamento seguro, amplia áreas permeáveis e cria sistema de alerta. Essa ação atua principalmente em quê?',[['a','Redução de risco e adaptação, porque diminui exposição e melhora a capacidade de lidar com eventos'],['b','Somente mitigação climática, porque impede que qualquer chuva aconteça'],['c','Nenhuma, porque apenas obras gigantes reduzem risco']],'a','Correto. A medida reduz exposição e vulnerabilidade e aumenta capacidade; também pode integrar adaptação climática.','Pergunte se a ação reduz emissões, reduz impactos esperados ou reduz diretamente componentes do risco — às vezes ela pode contribuir para mais de um objetivo.')}

        <h3>6. Mapear o passado ajuda a decidir sobre o futuro</h3>
        <div class="map-box">
          <strong class="card-title">Atlas Digital de Desastres no Brasil</strong>
          <p>A Secretaria Nacional de Proteção e Defesa Civil mantém uma base oficial com registros municipais de desastres entre <strong>1991 e 2025</strong>. O mapa permite filtrar inundações, enxurradas, movimentos de massa, secas, incêndios, ondas de calor e outros tipos, além de consultar ocorrências, pessoas afetadas e danos.</p>
          <p><a href="https://atlasdigital.mdr.gov.br/paginas/mapa-interativo.xhtml" target="_blank" rel="noopener noreferrer">Abrir o mapa interativo do Atlas Digital</a></p>
        </div>
        <p>Histórico de ocorrências é uma evidência importante, mas não deve ser usado sozinho. Um lugar sem registro antigo pode ter mudado muito: novas construções, impermeabilização, desmatamento, obras de drenagem ou novos padrões climáticos alteram o risco.</p>
        <div class="evidence-grid">
          <div class="mini-card"><strong>Para entender a ameaça</strong><p>Previsão e séries de chuva, nível dos rios, relevo, declividade, solo, drenagem, cobertura da terra e mapas de suscetibilidade.</p></div>
          <div class="mini-card"><strong>Para entender exposição e vulnerabilidade</strong><p>População, moradias, escolas, hospitais, vias, renda, acessibilidade, infraestrutura, capacidade de resposta e histórico de impactos.</p></div>
        </div>

        ${choice('6','Cruze camadas','Um mapa mostra uma área suscetível a inundação. O que ainda precisamos saber para avaliar o risco de desastre?',[['a','Quem e o que está exposto, quais vulnerabilidades existem e que capacidade de prevenção e resposta está disponível'],['b','Somente o nome do bairro'],['c','Nada: suscetibilidade física e risco de desastre são exatamente a mesma coisa']],'a','Correto. A suscetibilidade ajuda a localizar o processo físico, mas risco exige integrar sociedade, território e capacidade.','Pense em camadas: ameaça/suscetibilidade + exposição + vulnerabilidade + capacidade.')}

        <h3>7. Observatório do lugar onde vivo — sétima etapa</h3>
        <div class="field-box">
          <strong class="card-title">Investigue um risco possível no mesmo lugar observado desde o capítulo 01</strong>
          <p>Não procure situações perigosas nem entre em margens de rios, encostas instáveis, áreas alagadas ou locais interditados. A investigação pode ser feita com observação segura, mapa, imagem de satélite e fontes públicas.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>1. Ameaça possível</strong><p>Há córrego, área rebaixada, encosta, pouca sombra, solo muito impermeabilizado ou outro elemento que mereça investigação?</p></div>
            <div class="mini-card"><strong>2. Exposição</strong><p>Que elementos públicos ou visíveis poderiam ser atingidos: vias, comércio, escola, praça, equipamentos ou áreas de circulação?</p></div>
            <div class="mini-card"><strong>3. Vulnerabilidade e capacidade</strong><p>Há drenagem, vegetação, rotas alternativas, sinalização, contenção, abrigo ou outros elementos que reduzam ou ampliem o risco?</p></div>
            <div class="mini-card"><strong>4. Evidência</strong><p>Use uma imagem, mapa oficial, Atlas Digital, notícia local confiável ou outro registro. Diferencie o que foi observado do que é hipótese.</p></div>
          </div>
          <p><strong>Não registre endereço residencial nem dados pessoais.</strong> O objetivo é ler condições do território, não identificar moradores.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Desafio final — você precisa decidir com evidências</h3>
          <div class="challenge-box">
            <strong class="card-title">Uma previsão de chuva forte chega para dois setores de uma cidade</strong>
            <p>O setor A fica junto a um córrego, possui muita superfície impermeável e histórico de alagamentos. O setor B está em cota mais alta, mas possui uma encosta ocupada e já registrou pequenos movimentos de terra.</p>
            <p>Produza uma recomendação de prioridade para a Defesa Civil. Sua resposta deve incluir:</p>
            <ul>
              <li>a ameaça principal de cada setor;</li>
              <li>o que está exposto e quais vulnerabilidades precisam ser verificadas;</li>
              <li>uma capacidade existente ou que deveria ser criada;</li>
              <li>uma medida imediata e uma medida de longo prazo;</li>
              <li>quais dados faltam antes de afirmar qual setor tem risco maior;</li>
              <li>uma frase correta distinguindo o evento meteorológico de uma tendência climática.</li>
            </ul>
            <details>
              <summary>O que caracteriza uma resposta forte?</summary>
              <p>Ela não escolhe apenas “onde vai chover mais”. Integra ameaça, exposição, vulnerabilidade e capacidade; reconhece incertezas; propõe medidas viáveis; diferencia observação de hipótese e não usa mudança climática como explicação automática para qualquer evento isolado.</p>
            </details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo articula riscos socioambientais, eventos extremos, vulnerabilidade, mudanças climáticas, ocupação do território, geotecnologias, leitura de mapas e atuação pública. Ele retoma sociedade–natureza, cartografia, desigualdade urbana e redes, preparando a discussão do capítulo 09 sobre globalização, tecnologia e economia mundial.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> uma ameaça pode ter origem natural, mas o desastre nasce da relação entre o fenômeno e uma sociedade concreta. Entender risco exige perguntar onde ele pode ocorrer, quem e o que está exposto, por que alguns grupos são mais vulneráveis, quais capacidades existem e como decisões territoriais e mudanças climáticas podem alterar essas relações.</div>
      `
    });
  }

  MBB.enableChapter?.('08 Riscos', showChapter);
})();
