(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Cidade e desigualdade',
      technical:'urbanização • segregação socioespacial • acesso à cidade • infraestrutura • mobilidade • vulnerabilidade • risco • serviços • SIG • desigualdade territorial',
      title:'Morar na mesma cidade significa ter o mesmo acesso à cidade?',
      objective:'<strong>Objetivo:</strong> analisar como moradia, infraestrutura, mobilidade, serviços, renda, políticas públicas e características ambientais distribuem oportunidades e vulnerabilidades de forma desigual dentro das cidades, usando dados territoriais como evidência e evitando generalizações sobre bairros e populações.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">A cidade é a mesma no endereço — mas é a mesma no cotidiano?</strong>
            <p>Imagine dois estudantes que moram no mesmo município. Um consegue chegar a pé à escola, ao posto de saúde, a uma praça e a um ponto de ônibus em poucos minutos. O outro precisa atravessar vias sem calçada, depende de poucas linhas de transporte e gasta muito mais tempo para alcançar serviços parecidos.</p>
            <p><strong>Situação hipotética:</strong> os dois vivem na mesma cidade administrativa, mas o acesso efetivo às oportunidades urbanas é diferente.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que precisamos observar e medir para explicar por que a cidade oferece condições tão diferentes conforme o lugar onde se vive?</p>
          </div>
        </section>

        ${choice('1','Acesso à cidade','Uma cidade possui hospital, escola técnica e parque público. Isso prova que todos os moradores têm o mesmo acesso a esses equipamentos?',[['a','Sim, porque os equipamentos estão dentro do mesmo município'],['b','Não. É preciso considerar localização, tempo, custo, transporte, barreiras físicas, segurança e condições de uso'],['c','Sim, desde que apareçam no mapa']],'b','Correto. Existência e acesso não são a mesma coisa.','Pergunte não apenas se o serviço existe, mas quanto custa chegar até ele, quanto tempo leva e quais barreiras aparecem no caminho.')}

        <h3>1. Acesso à cidade é mais do que distância</h3>
        <p>Em Geografia, <strong>acesso</strong> não significa apenas estar perto em quilômetros. Uma oportunidade urbana pode estar relativamente próxima e ainda assim ser difícil de alcançar por falta de transporte, calçadas, travessias seguras, acessibilidade, iluminação ou dinheiro para o deslocamento.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Tempo</strong><p>Quantos minutos são necessários para chegar à escola, ao trabalho, à saúde, ao comércio ou ao lazer?</p></div>
          <div class="mini-card"><strong>Custo</strong><p>O deslocamento exige tarifa, combustível, várias integrações ou perda importante de tempo?</p></div>
          <div class="mini-card"><strong>Conectividade</strong><p>Há ruas, linhas de transporte, ciclovias, calçadas e travessias que realmente ligam os lugares?</p></div>
          <div class="mini-card"><strong>Acessibilidade e segurança</strong><p>O trajeto pode ser feito por idosos, crianças e pessoas com deficiência? Há obstáculos, iluminação e condições adequadas?</p></div>
        </div>
        <div class="concept-box"><strong>Distância geométrica ≠ acessibilidade.</strong><p>Duas casas podem estar à mesma distância de um hospital e ter tempos de viagem muito diferentes por causa da rede viária, do relevo, do transporte disponível e das barreiras encontradas no caminho.</p></div>

        <h3>2. O Censo permite observar a infraestrutura do entorno</h3>
        <p>No Censo Demográfico 2022, o IBGE investigou características urbanísticas observadas nas vias e faces de quadra das áreas pesquisadas. Esses dados ajudam a sair da impressão subjetiva e transformar elementos do cotidiano em evidência territorial.</p>
        <div class="data-box">
          <strong class="card-title">Brasil urbano — alguns resultados do Entorno dos Domicílios, Censo 2022</strong>
          <div class="four-col">
            <div class="mini-card"><strong>91,7%</strong><p>das faces pesquisadas apresentavam iluminação pública.</p></div>
            <div class="mini-card"><strong>68,5%</strong><p>apresentavam calçada ou passeio.</p></div>
            <div class="mini-card"><strong>40,9%</strong><p>apresentavam bueiro ou boca de lobo.</p></div>
            <div class="mini-card"><strong>12,3%</strong><p>apresentavam rampa para cadeirante.</p></div>
          </div>
          <p>O levantamento também mostrou que <strong>44,5% das faces pesquisadas não possuíam árvores</strong>. Os indicadores não medem toda a qualidade urbana, mas revelam diferenças importantes de circulação, drenagem, acessibilidade e conforto ambiental.</p>
          <small>Fonte: IBGE, Censo Demográfico 2022 — Características Urbanísticas do Entorno dos Domicílios. O universo da pesquisa corresponde às áreas com características urbanas abrangidas pelo levantamento; “face” é a face de quadra observada pelo IBGE.</small>
          <p><a href="https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html" target="_blank" rel="noopener noreferrer">Abrir produto oficial do IBGE</a></p>
        </div>

        ${choice('2','Leia o indicador','Se um bairro tem iluminação pública em quase todas as vias, podemos concluir que sua infraestrutura urbana é completa?',[['a','Sim. Um bom indicador representa automaticamente todos os demais'],['b','Não. É preciso combinar iluminação com calçadas, drenagem, transporte, arborização, saneamento e outros dados'],['c','Sim, porque iluminação é o único indicador necessário']],'b','Isso. Um território deve ser analisado por várias dimensões.','Um único indicador pode estar bom enquanto outros apresentam grandes carências.')}

        <h3>3. Segregação socioespacial: grupos e oportunidades não se distribuem ao acaso</h3>
        <p><strong>Segregação socioespacial</strong> é a separação desigual de grupos sociais, moradias, infraestruturas e oportunidades dentro do espaço urbano. Ela pode aparecer em diferenças de preço da terra, padrões de moradia, oferta de serviços, mobilidade, qualidade ambiental e localização dos empregos.</p>
        <p>Ela não surge por uma única causa. É produzida historicamente pela combinação de mercado imobiliário, renda, políticas habitacionais, investimentos públicos, regras de uso do solo, infraestrutura, discriminações, decisões empresariais, autoconstrução e expansão urbana.</p>
        <div class="geo-process"><span>preço e uso da terra</span><b>+</b><span>políticas e investimentos</span><b>+</b><span>redes de transporte</span><b>+</b><span>história social</span><b>→</b><span>distribuição desigual de oportunidades</span></div>
        <div class="note-box"><strong>Evite simplificações.</strong><p>Segregação não significa que todo bairro periférico seja igual, que toda favela tenha as mesmas condições ou que renda explique sozinha a organização da cidade. A análise precisa localizar, comparar e buscar evidências.</p></div>

        ${choice('3','Segregação socioespacial','Qual situação é uma evidência mais forte de segregação socioespacial?',[['a','Diferentes bairros terem nomes diferentes'],['b','Determinados grupos e moradias concentrarem-se em áreas com acesso sistematicamente menor a transporte, infraestrutura e oportunidades'],['c','Uma cidade possuir ruas antigas e novas']],'b','Correto. A questão é a distribuição desigual e persistente de grupos, recursos e oportunidades no território.','Procure padrões espaciais relacionados a acesso, infraestrutura e posição social, não apenas diferenças visuais entre bairros.')}

        <h3>4. Vulnerabilidade não é sinônimo de pobreza nem rótulo de um lugar</h3>
        <p><strong>Vulnerabilidade</strong> ajuda a analisar por que um mesmo evento ou problema pode produzir consequências muito diferentes. Ela depende da combinação entre <strong>exposição</strong>, condições que aumentam a sensibilidade ao dano e a <strong>capacidade de prevenir, responder e recuperar</strong>.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Exposição</strong><p>Quem e o que está em local sujeito a alagamento, deslizamento, calor intenso, poluição, tráfego perigoso ou outra ameaça?</p></div>
          <div class="mini-card"><strong>Condições do território</strong><p>Há drenagem, arborização, moradia adequada, acesso viário, saneamento e serviços próximos?</p></div>
          <div class="mini-card"><strong>Capacidade de resposta</strong><p>Existem informação, recursos, transporte, apoio público, equipamentos e alternativas para reduzir o dano?</p></div>
        </div>
        <p>Uma chuva forte, por exemplo, não produz automaticamente o mesmo efeito em toda a cidade. Impermeabilização do solo, relevo, drenagem, ocupação, manutenção urbana e capacidade de resposta alteram o resultado.</p>

        ${choice('4','Vulnerabilidade','Dois bairros recebem a mesma quantidade de chuva. Um possui drenagem adequada e rotas seguras; o outro tem pontos recorrentes de alagamento e poucas alternativas de saída. O que isso mostra?',[['a','Que a chuva deixa de ser um fenômeno natural'],['b','Que exposição e infraestrutura podem produzir vulnerabilidades diferentes diante do mesmo evento'],['c','Que todos os moradores terão exatamente o mesmo impacto']],'b','Isso. A ameaça pode ser semelhante, mas as condições territoriais mudam as consequências.','Compare a ameaça com drenagem, ocupação, mobilidade e capacidade de resposta.')}

        <h3>5. Favelas e Comunidades Urbanas: usar dados sem transformar pessoas em estereótipos</h3>
        <p>O IBGE identifica <strong>Favelas e Comunidades Urbanas</strong> por critérios territoriais relacionados, entre outros fatores, à insegurança da posse, oferta incompleta ou precária de serviços públicos, formas de produção do espaço e localização em áreas com restrições ou riscos. O próprio instituto destaca a grande diversidade dessas áreas.</p>
        <div class="data-box">
          <strong class="card-title">Censo 2022 — evidências para comparar condições urbanas</strong>
          <div class="three-col">
            <div class="mini-card"><strong>16,39 milhões</strong><p>de pessoas residiam em Favelas e Comunidades Urbanas no Brasil.</p></div>
            <div class="mini-card"><strong>19,2%</strong><p>dos moradores dessas áreas viviam em vias acessíveis apenas por moto, bicicleta ou a pé.</p></div>
            <div class="mini-card"><strong>64,6%</strong><p>dos moradores viviam em trechos de vias sem árvores.</p></div>
          </div>
          <p>Outro resultado divulgado pelo IBGE mostrou que <strong>11.457 Favelas e Comunidades Urbanas, 93,4% do total analisado, tinham menos de 10% de seus moradores em vias com rampa para cadeirantes</strong>.</p>
          <small>Fontes: IBGE, Censo Demográfico 2022 — Favelas e Comunidades Urbanas e Características Urbanísticas do Entorno dos Domicílios nas Favelas e Comunidades Urbanas. Dados divulgados em 2024–2025 e revisados pelo IBGE quando aplicável.</small>
          <p><a href="https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15788-favelas-e-comunidades-urbanas.html" target="_blank" rel="noopener noreferrer">Abrir produto oficial Favelas e Comunidades Urbanas</a></p>
        </div>
        <div class="note-box"><strong>Dado territorial não define uma pessoa.</strong><p>Os indicadores mostram condições do espaço e ajudam a orientar políticas. Não permitem afirmar como é cada morador, nem tratam todas as comunidades como iguais.</p></div>

        ${choice('5','Interprete sem estereotipar','Os dados mostram menor presença de arborização e acessibilidade em muitas Favelas e Comunidades Urbanas. Qual conclusão é adequada?',[['a','Todos esses territórios têm exatamente os mesmos problemas'],['b','Há desigualdades territoriais importantes que devem ser localizadas e comparadas, respeitando a diversidade entre as áreas'],['c','As condições são resultado das características pessoais dos moradores']],'b','Correto. O dado sustenta a investigação de desigualdades territoriais, não estereótipos sobre pessoas.','Compare condições do território e políticas públicas; não transforme médias e categorias em julgamento sobre moradores.')}

        <h3>6. Desigualdade ambiental também faz parte da cidade</h3>
        <p>Arborização, drenagem, impermeabilização, qualidade do ar, presença de cursos d’água, áreas verdes e exposição a riscos ambientais não se distribuem uniformemente. Por isso, a desigualdade urbana também tem uma dimensão <strong>ambiental</strong>.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Mais árvores e áreas permeáveis</strong><p>Podem contribuir para sombra, conforto térmico, infiltração da água e qualidade do espaço público.</p></div>
          <div class="mini-card"><strong>Pouca drenagem e muita impermeabilização</strong><p>Podem aumentar problemas de escoamento e alagamento, especialmente quando combinadas com relevo e ocupação vulnerável.</p></div>
        </div>
        <p>Isso prepara uma investigação que voltará no capítulo 08: um desastre não pode ser explicado apenas pelo evento natural; é preciso observar onde a população está, quais infraestruturas existem e como o território foi produzido.</p>

        <h3>7. O mapa pode revelar padrões — desde que as camadas sejam cruzadas</h3>
        <p>Os dados do Censo 2022 podem ser analisados por setores censitários e outros recortes. Em um SIG, podemos combinar camadas de população, renda, calçadas, drenagem, arborização, transporte, escolas, unidades de saúde e áreas de risco para procurar padrões.</p>
        <div class="evidence-grid">
          <div class="mini-card"><strong>Mapa de uma variável</strong><p>Mostra onde um indicador é maior ou menor.</p></div>
          <div class="mini-card"><strong>Cruzamento de camadas</strong><p>Permite investigar se carências e oportunidades se sobrepõem no mesmo território.</p></div>
          <div class="mini-card"><strong>Trabalho de campo</strong><p>Confere o que o mapa não mostra bem: barreiras, manutenção, qualidade do percurso e uso real do espaço.</p></div>
        </div>
        <div class="data-box">
          <strong class="card-title">Experimente com dados oficiais</strong>
          <p>O <strong>Panorama do Censo 2022</strong> e a <strong>Plataforma Geográfica Interativa (PGI)</strong> permitem explorar mapas e indicadores do entorno, inclusive por recortes internos dos municípios.</p>
          <p><a href="https://censo2022.ibge.gov.br/panorama/" target="_blank" rel="noopener noreferrer">Abrir Panorama do Censo 2022</a> · <a href="https://censo2022.ibge.gov.br/apps/pgi/#/home" target="_blank" rel="noopener noreferrer">Abrir PGI do Censo 2022</a></p>
        </div>

        ${choice('6','Cruzar evidências','Um mapa mostra baixa presença de calçadas num setor. O que deve ser feito antes de concluir que ali há “baixo acesso à cidade” em todas as dimensões?',[['a','Cruzar outros indicadores e observar transporte, serviços, barreiras, população e condições locais'],['b','Usar apenas a cor do mapa como explicação completa'],['c','Ignorar a localização dos serviços']],'a','Isso. Um indicador revela uma dimensão; o diagnóstico territorial exige combinação de evidências.','Procure sobreposição de camadas e confirme no território o que o mapa sugere.')}

        <h3>8. Observatório do lugar onde vivo — quinta etapa</h3>
        <div class="field-box">
          <strong class="card-title">Investigue acesso e desigualdade no mesmo lugar escolhido no capítulo 01</strong>
          <p>Não registre endereço residencial nem dados pessoais. Trabalhe com o lugar público já escolhido: entorno da escola, rua, praça, avenida ou córrego.</p>
          <div class="observation-grid">
            <div class="mini-card"><strong>1. Escolha uma oportunidade</strong><p>Escola, posto de saúde, mercado, praça, ponto de ônibus ou outro equipamento importante.</p></div>
            <div class="mini-card"><strong>2. Observe o percurso</strong><p>Há calçada, iluminação, travessia, arborização, drenagem, obstáculos ou trechos inseguros?</p></div>
            <div class="mini-card"><strong>3. Compare usuários</strong><p>O trajeto funciona do mesmo modo para criança, idoso, cadeirante, ciclista e pedestre?</p></div>
            <div class="mini-card"><strong>4. Procure uma camada de dado</strong><p>No Panorama/PGI ou em fonte municipal, busque um indicador que ajude a confirmar ou questionar sua observação.</p></div>
          </div>
          <div class="concept-box"><strong>Registro mínimo:</strong><p>um equipamento ou oportunidade + descrição do acesso + duas evidências do entorno + um grupo que pode enfrentar maior barreira + um dado/mapa consultado + uma limitação da sua análise.</p></div>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final</span>
          <div class="challenge-box">
            <strong class="card-title">Onde investir primeiro?</strong>
            <p><strong>Dados didáticos de dois setores do mesmo município:</strong></p>
            <div class="comparison-grid">
              <div class="mini-card"><strong>Setor A</strong><p>Calçada: 88% • bueiro: 72% • arborização: 75% • tempo médio até unidade de saúde: 12 min • duas linhas de ônibus frequentes.</p></div>
              <div class="mini-card"><strong>Setor B</strong><p>Calçada: 39% • bueiro: 18% • arborização: 28% • tempo médio até unidade de saúde: 41 min • uma linha de ônibus com baixa frequência.</p></div>
            </div>
            <p>A prefeitura possui recursos limitados para um primeiro pacote de melhorias. Escreva uma recomendação explicando:</p>
            <ol>
              <li>qual setor apresenta maior conjunto de barreiras nos dados disponíveis;</li>
              <li>quais indicadores sustentam sua conclusão;</li>
              <li>por que infraestrutura e acesso devem ser analisados juntos;</li>
              <li>que informação sobre população e vulnerabilidade ainda falta;</li>
              <li>que intervenção você priorizaria e por quê;</li>
              <li>por que os dados não autorizam estereotipar os moradores do setor.</li>
            </ol>
            <details>
              <summary>O que uma boa resposta deve perceber?</summary>
              <p>Os dados apontam maior combinação de barreiras no Setor B, mas a decisão responsável ainda precisa conhecer população atendida, idade, deficiência, renda, riscos ambientais, localização exata dos serviços e qualidade real dos percursos. A prioridade deve ser justificada por evidências e pelo efeito esperado sobre o acesso, não por rótulos atribuídos ao bairro ou aos moradores.</p>
            </details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo articula urbanização, segregação socioespacial, moradia, mobilidade, infraestrutura, serviços, vulnerabilidade e desigualdade territorial. Retoma cartografia, redes e transformação do espaço e prepara o estudo de produção, consumo e resíduos, no qual a localização dos impactos urbanos continuará sendo analisada.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> morar na mesma cidade não garante o mesmo acesso à cidade. O acesso depende de onde oportunidades e infraestruturas estão localizadas, de como as redes conectam os lugares e de quais barreiras diferentes grupos enfrentam. A Geografia transforma essa desigualdade em algo observável: localizar, medir, comparar, cruzar evidências e explicar como o território foi produzido.</div>
      `
    });
  }

  MBB.enableChapter?.('05 Cidade', showChapter);
})();
