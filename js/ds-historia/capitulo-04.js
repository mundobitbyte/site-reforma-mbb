(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Américas',
      technical:'Maias • Mexicas/Astecas • Incas • povos indígenas do Brasil • diversidade • território • arqueologia',
      title:'Existia uma única forma de viver nas Américas antes da chegada dos europeus?',
      objective:'<strong>Objetivo:</strong> reconhecer a enorme diversidade das sociedades americanas antes da conquista europeia, comparar Maias, Mexicas/Astecas e Incas sem tratá-los como modelo de toda a América e compreender a pluralidade histórica dos povos indígenas no território que hoje chamamos Brasil.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Um continente inteiro cabe em três nomes?</strong>
            <p>Em muitos resumos escolares, a América antes da chegada dos europeus aparece reduzida a “Maias, Astecas e Incas”. Mas milhões de pessoas viviam em ambientes muito diferentes, falavam inúmeras línguas e organizavam comunidades, aldeias, cidades, redes de troca, confederações e Estados de formas variadas.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que perdemos quando tratamos povos diferentes como se formassem uma única sociedade?</p>
          </div>
        </section>

        <h3>1. “Povos pré-colombianos” é uma categoria ampla — não um único povo</h3>
        <p>A expressão <strong>pré-colombiano</strong> costuma indicar sociedades americanas anteriores à chegada de Cristóvão Colombo ao Caribe, em 1492. Ela é útil como referência cronológica, mas não deve sugerir que essas sociedades existiam apenas como “antes dos europeus”.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Mesoamérica</strong><p>Região que inclui partes do atual México e da América Central, com longa história de agricultura, cidades, comércio, calendários e diferentes Estados.</p></div>
          <div class="mini-card"><strong>Andes</strong><p>Região montanhosa da América do Sul onde sociedades desenvolveram agricultura adaptada à altitude, redes de estradas, armazenamento e grandes Estados.</p></div>
          <div class="mini-card"><strong>Outras Américas</strong><p>Florestas, planícies, desertos, litorais e bacias fluviais abrigaram sociedades com modos de vida próprios que não podem ser medidos pela existência de grandes cidades ou impérios.</p></div>
        </div>
        <div class="note-box"><strong>Evite uma régua única de “complexidade”.</strong><p>Uma sociedade não é “mais evoluída” porque construiu palácios ou formou um império. Escala política, urbanização, agricultura, mobilidade e tecnologia respondem a contextos históricos diferentes.</p></div>

        ${choice('1','Diversidade americana','Qual afirmação é mais adequada?',[['a','Maias, Astecas e Incas resumem todas as sociedades americanas'],['b','Eles foram sociedades importantes, mas conviviam com muitos outros povos e formas de organização'],['c','Só existiam sociedades organizadas onde havia grandes cidades']],'b','Correto. Os três casos ajudam a estudar Estados e cidades, mas não representam toda a diversidade do continente.','Não use grandes Estados como régua para julgar todas as outras sociedades.')}

        <h3>2. Maias: muitas cidades e uma longa história</h3>
        <p>As sociedades <strong>maias</strong> se desenvolveram em partes da atual Guatemala, Belize, México, Honduras e El Salvador. Sua história atravessa muitos séculos e não corresponde a um único império centralizado.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Cidades e governos</strong><p>Diferentes cidades e reinos, como Tikal, Palenque e Calakmul, disputaram alianças, rotas e influência em períodos distintos.</p></div>
          <div class="mini-card"><strong>Conhecimento e registro</strong><p>Escrita hieroglífica, calendários, matemática, observações astronômicas e arquitetura faziam parte de tradições intelectuais próprias.</p></div>
        </div>
        <p>Falar em “desaparecimento dos maias” é incorreto. Algumas grandes cidades das terras baixas perderam população ou importância antes da chegada europeia, mas <strong>povos maias continuaram existindo e existem até hoje</strong>.</p>
        <div class="concept-box"><strong>Declínio de cidades não é desaparecimento de um povo.</strong><p>Mudanças políticas, conflitos, ambiente, redes comerciais e deslocamentos podem transformar centros urbanos sem eliminar populações, línguas ou identidades.</p></div>

        ${choice('2','Maias','Qual frase evita um erro comum?',[['a','Os maias formaram um único império com uma única capital'],['b','As sociedades maias incluíram diferentes cidades e reinos ao longo do tempo'],['c','Os maias desapareceram completamente antes da chegada dos europeus']],'b','Isso. A história maia foi politicamente diversa e povos maias continuam presentes no mundo contemporâneo.','Evite transformar uma história longa e diversa em um único império ou em um “desaparecimento”.')}

        <h3>3. Mexicas e a chamada “civilização asteca”</h3>
        <p>O termo <strong>asteca</strong> é usado de modo amplo em muitos livros. Para o poder político centrado em Tenochtitlán no século XV e início do XVI, é mais preciso destacar os <strong>Mexicas</strong>, que participaram de uma aliança com Texcoco e Tlacopan.</p>
        <p>Tenochtitlán, construída numa ilha do lago Texcoco, tornou-se uma grande cidade. Seu poder dependia de agricultura intensiva, mercados, redes de tributos, guerra, alianças e domínio sobre outros povos.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Chinampas</strong><p>Áreas agrícolas construídas e manejadas em zonas lacustres permitiam produção intensiva em determinados ambientes do vale do México.</p></div>
          <div class="mini-card"><strong>Tributos</strong><p>Povos subordinados entregavam produtos, trabalho ou outros recursos; isso sustentava poder e também criava tensões.</p></div>
          <div class="mini-card"><strong>Conquista espanhola</strong><p>Não foi simplesmente “espanhóis contra astecas”: diferentes povos indígenas fizeram alianças, resistiram ou lutaram entre si em um contexto político complexo.</p></div>
        </div>
        <div class="note-box"><strong>Conquista não se explica apenas por armas europeias.</strong><p>Alianças indígenas, conflitos anteriores, epidemias, estratégias militares e disputas políticas foram decisivos. Reduzir tudo a “tecnologia superior” produz uma narrativa falsa e simplista.</p></div>

        ${choice('3','Conquista do México','Qual explicação é mais completa?',[['a','Poucos espanhóis venceram sozinhos porque eram naturalmente superiores'],['b','A conquista envolveu espanhóis, numerosos aliados indígenas, rivalidades locais, epidemias e guerra'],['c','Todos os povos indígenas apoiaram Tenochtitlán']],'b','Correto. A conquista foi um processo com múltiplos atores, alianças, conflitos e efeitos das epidemias.','Não apague a participação e as escolhas de diferentes povos indígenas.')}

        <h3>4. Incas: um Estado andino chamado Tawantinsuyu</h3>
        <p>O Estado inca, conhecido como <strong>Tawantinsuyu</strong>, expandiu-se pelos Andes no século XV e início do XVI. Seu território alcançou áreas dos atuais Peru, Bolívia, Equador, Chile, Argentina e Colômbia.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Estradas</strong><p>Uma extensa rede conectava regiões montanhosas, centros administrativos, depósitos e áreas de produção.</p></div>
          <div class="mini-card"><strong>Terraços</strong><p>Em vários lugares, técnicas agrícolas adaptavam encostas e diferentes altitudes ao cultivo.</p></div>
          <div class="mini-card"><strong>Quipus</strong><p>Conjuntos de cordões e nós registravam informações numéricas e administrativas; seu uso exato podia variar.</p></div>
          <div class="mini-card"><strong>Trabalho e reciprocidade</strong><p>Obrigações de trabalho, redistribuição e relações comunitárias ajudavam a sustentar o Estado, mas também envolviam hierarquias e coerção.</p></div>
        </div>
        <p>O Tawantinsuyu incorporou muitos povos diferentes. A expansão não apagou automaticamente idiomas, identidades e formas locais de organização. O próprio Estado administrava diversidade e deslocava grupos em determinadas situações.</p>

        ${choice('4','Incas','O que os quipus mostram com mais segurança?',[['a','Que não existiam formas de registro nos Andes'],['b','Que havia sistemas de registro por cordões e nós usados em atividades administrativas e quantitativas'],['c','Que todos os povos andinos falavam a mesma língua']],'b','Correto. Quipus são evidência de sistemas próprios de registro, especialmente administrativos e quantitativos.','A ausência de escrita alfabética não significa ausência de registro ou administração.')}

        <h3>5. E no território que hoje chamamos Brasil?</h3>
        <p>Antes de 1500, o território atual do Brasil já era ocupado havia milhares de anos por populações muito diversas. Não existia um “povo indígena brasileiro” único, nem fronteiras equivalentes às do Brasil atual.</p>
        <div class="four-col">
          <div class="mini-card"><strong>Litoral e sambaquis</strong><p>Em várias regiões costeiras, populações construíram grandes sítios com conchas, sedimentos, sepultamentos, artefatos e outros vestígios ao longo de milhares de anos.</p></div>
          <div class="mini-card"><strong>Amazônia</strong><p>Arqueologia revela manejo de plantas, solos antrópicos, cerâmica, redes de assentamentos e paisagens transformadas por populações indígenas.</p></div>
          <div class="mini-card"><strong>Planalto e Sul</strong><p>Diferentes povos ocuparam campos, florestas e vales, deixando aldeias, estruturas escavadas, cerâmicas e outros registros.</p></div>
          <div class="mini-card"><strong>Diversidade linguística</strong><p>Famílias e línguas diferentes correspondem a histórias, territórios e identidades próprias; “indígena” é uma categoria ampla, não uma cultura única.</p></div>
        </div>
        <div class="source-box">
          <span class="source-label">Ponte com o presente — Censo Demográfico 2022 / IBGE</span>
          <p>O Censo registrou <strong>391 etnias, povos ou grupos indígenas</strong> e <strong>295 línguas indígenas</strong> faladas ou utilizadas no Brasil.</p>
          <p class="source-meta">O dado contemporâneo não descreve automaticamente a situação de 1500; ele serve para combater a ideia de que povos indígenas formam uma população culturalmente homogênea ou pertencem apenas ao passado.</p>
        </div>

        ${choice('5','Povos indígenas do Brasil','Qual formulação é historicamente mais correta?',[['a','Os índios do Brasil tinham uma única língua e cultura'],['b','O território era ocupado por muitos povos, com línguas, territórios e modos de vida diferentes'],['c','Povos indígenas só passaram a existir depois da criação do Brasil']],'b','Isso. A diversidade indígena é histórica e permanece no presente.','“Indígena” reúne povos distintos; não descreve uma única sociedade.')}

        <h3>6. Sambaquis: montes de conchas não são “lixo antigo”</h3>
        <p><strong>Sambaquis</strong> são sítios arqueológicos construídos por populações que viveram especialmente em ambientes costeiros e estuarinos. Podem conter conchas, restos de alimentos, fogueiras, artefatos, sepultamentos e estruturas.</p>
        <p>Em alguns lugares, foram construídos durante muitos séculos ou milênios e alcançaram grandes dimensões. Eles permitem estudar alimentação, território, práticas funerárias, tecnologia e relações sociais.</p>
        <div class="note-box"><strong>O formato do sítio é parte da evidência.</strong><p>Se conchas, sepultamentos e estruturas foram acumulados de modo organizado durante gerações, não faz sentido reduzir o sambaqui a um depósito casual de restos.</p></div>

        ${choice('6','Sambaquis','Qual pergunta aproveita melhor um sambaqui como fonte?',[['a','Por que pessoas acumularam materiais, sepultaram indivíduos e ocuparam esse lugar ao longo do tempo?'],['b','Por que povos sem pirâmides não tinham organização?'],['c','Qual europeu construiu o sítio?']],'a','Correto. O sítio permite investigar território, alimentação, rituais, duração da ocupação e organização social.','A arqueologia busca compreender práticas humanas a partir da formação e do contexto dos vestígios.')}

        <h3>7. Povos Tupi, Macro-Jê e muitas outras histórias</h3>
        <p>Fontes dos primeiros séculos da colonização registraram diferentes povos e línguas, mas os nomes usados por europeus nem sempre correspondem exatamente às identidades que os próprios grupos usavam.</p>
        <p>Termos amplos como <strong>Tupi</strong> e <strong>Macro-Jê</strong> ajudam linguistas e historiadores a organizar relações entre línguas e populações, mas não devem ser usados como se todos os povos de uma mesma família linguística tivessem cultura, política ou história idênticas.</p>
        <div class="concept-box"><strong>Língua, povo e cultura não são a mesma coisa.</strong><p>Falar línguas relacionadas pode indicar histórias de contato e ancestralidade linguística, mas não transforma comunidades diferentes numa única sociedade.</p></div>

        <h3>8. A chegada europeia não encontrou um continente parado</h3>
        <p>Quando europeus chegaram às Américas, encontraram sociedades em transformação: alianças eram feitas e desfeitas, povos migravam, Estados expandiam territórios, comunidades cultivavam, guerreavam, comerciavam e produziam conhecimento.</p>
        <p>Também não houve uma única reação à conquista. Houve resistência, negociação, alianças, fuga, adaptação e enfrentamentos distintos. Povos indígenas foram <strong>agentes históricos</strong>, não apenas vítimas passivas dos acontecimentos.</p>
        <div class="note-box"><strong>Reconhecer agência não diminui a violência colonial.</strong><p>Conquista, escravização, guerras, epidemias, expulsões e perda territorial causaram rupturas profundas. A agência indígena significa reconhecer que pessoas e povos tomaram decisões e lutaram em condições muitas vezes extremamente desiguais.</p></div>

        ${choice('7','Agência histórica','O que significa dizer que povos indígenas foram agentes históricos?',[['a','Que não sofreram violência colonial'],['b','Que fizeram escolhas, alianças, resistências e estratégias mesmo em relações de poder desiguais'],['c','Que todos reagiram do mesmo modo aos europeus']],'b','Correto. Agência reconhece ação e decisão sem apagar coerção, violência e desigualdade.','Ser agente histórico não significa controlar todas as condições ou resultados.')}

        <h3>9. Laboratório de comparação: três sociedades, quatro perguntas</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Pergunta</th><th>Maias</th><th>Mexicas/Tenochtitlán</th><th>Incas/Tawantinsuyu</th></tr></thead>
          <tbody>
            <tr><td>Forma política</td><td>Diferentes cidades e reinos</td><td>Poder centrado na Tríplice Aliança e em Tenochtitlán</td><td>Estado territorial andino amplo</td></tr>
            <tr><td>Registros</td><td>Escrita hieroglífica e calendários</td><td>Códices e outros registros mesoamericanos</td><td>Quipus e administração oral/visual</td></tr>
            <tr><td>Produção</td><td>Agricultura adaptada a diferentes ambientes mesoamericanos</td><td>Mercados, tributos e técnicas como chinampas em áreas lacustres</td><td>Agricultura em diferentes altitudes, terraços e depósitos</td></tr>
            <tr><td>Cuidado</td><td colspan="3">Nenhum desses casos representa sozinho a história de todo o continente.</td></tr>
          </tbody>
        </table></div>

        <h3>10. Laboratório de evidências: uma aldeia antes de 1500</h3>
        <div class="source-box">
          <span class="source-label">Conjunto arqueológico simulado — não representa um sítio real específico</span>
          <p><strong>Vestígio A:</strong> fragmentos de cerâmica de diferentes estilos aparecem em uma mesma área.</p>
          <p><strong>Vestígio B:</strong> restos botânicos indicam cultivo e manejo de várias plantas.</p>
          <p><strong>Vestígio C:</strong> caminhos conectam várias áreas de moradia.</p>
          <p><strong>Vestígio D:</strong> alguns objetos foram produzidos com matérias-primas encontradas a centenas de quilômetros.</p>
          <p><strong>Vestígio E:</strong> a ocupação aparece em várias camadas ao longo do tempo.</p>
        </div>
        <div class="method-box"><strong class="card-title">Que perguntas surgem?</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Produção</strong><p>Que plantas eram cultivadas ou manejadas?</p></div>
          <div class="method-step"><span>2</span><strong>Território</strong><p>Como as áreas de moradia se conectavam?</p></div>
          <div class="method-step"><span>3</span><strong>Trocas</strong><p>Como chegaram matérias-primas distantes?</p></div>
          <div class="method-step"><span>4</span><strong>Tempo</strong><p>A ocupação foi contínua, sazonal ou mudou de forma?</p></div>
        </div></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — desconstrua uma generalização</h3>
          <div class="challenge-box">
            <strong>Desafio: responda à frase “os indígenas viviam todos do mesmo jeito”</strong>
            <p>Escreva de 5 a 7 frases refutando essa afirmação. Use pelo menos um exemplo da Mesoamérica ou Andes, um exemplo do território brasileiro e um argumento sobre diversidade linguística ou política.</p>
            <details><summary>O que uma boa resposta precisa conter?</summary><p>Deve mostrar diversidade de escalas e formas políticas, diferentes ambientes e tecnologias, múltiplas línguas e identidades e evitar usar grandes impérios como padrão de superioridade. Pode citar, por exemplo, cidades maias, poder mexica, Tawantinsuyu, sambaquis e a diversidade indígena registrada no Brasil atual como evidência de que “indígena” nunca significou uma única cultura.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo trabalha Incas, Maias e Astecas/Mexicas, povos indígenas do Brasil, território, fronteiras, diversidade cultural, diferentes narrativas históricas, protagonismo indígena e análise de fontes materiais. Também prepara a discussão posterior sobre cidadania, dominação, colonialismo e disputas de memória.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> as Américas nunca formaram uma única sociedade. Antes da conquista europeia já existiam inúmeros povos, línguas, territórios e formas de organização. Estudar essa diversidade é condição para compreender tanto o passado quanto a presença indígena no presente.</div>
      `
    });
  }

  MBB.enableChapter?.('04 Povos das Américas', showChapter);
})();
