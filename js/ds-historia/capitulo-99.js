(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {level:'Nível 1 — Ler como historiador',area:'Fontes e método',q:'Uma fotografia antiga mostra uma praça cheia durante uma cerimônia. Qual conclusão é mais cuidadosa?',o:['A fotografia prova o que todos os habitantes pensavam','A fotografia registra uma cena e precisa ser contextualizada com autoria, data, finalidade e outras fontes','Toda fotografia antiga é neutra','A imagem vale menos que qualquer texto'],a:1,why:'Uma imagem é fonte histórica, mas não fala sozinha: enquadramento, autoria, contexto e comparação importam.'},
    {level:'Nível 1 — Ler como historiador',area:'Tempo histórico',q:'Um acontecimento ocorreu antes de outro. Isso basta para provar que foi sua causa?',o:['Sim, sempre','Não; sequência temporal não substitui a investigação de mecanismos, contexto e outras causas','Sim, se ocorreu no mesmo século','Somente quando há uma fotografia'],a:1,why:'Anterioridade é diferente de causalidade.'},
    {level:'Nível 1 — Ler como historiador',area:'Memória e História',q:'Qual diferença resume melhor memória e História?',o:['Memória é sempre falsa e História é sempre perfeita','Memória envolve lembranças e sentidos sociais; História investiga o passado criticamente por meio de fontes e métodos','São exatamente a mesma coisa','História só usa documentos oficiais'],a:1,why:'Memória e História podem dialogar, mas têm funções e procedimentos diferentes.'},
    {level:'Nível 1 — Ler como historiador',area:'Perspectiva',q:'Dois relatos sobre o mesmo conflito apresentam versões diferentes. O que fazer primeiro?',o:['Escolher o texto mais longo','Comparar autoria, posição dos autores, contexto, evidências e pontos de concordância ou conflito','Declarar que qualquer versão vale','Descartar os dois'],a:1,why:'Perspectivas diferentes devem ser investigadas, não igualadas automaticamente.'},
    {level:'Nível 1 — Ler como historiador',area:'Mudança e permanência',q:'Por que historiadores observam mudanças e permanências?',o:['Porque sociedades mudam em ritmos diferentes e certos elementos podem continuar enquanto outros se transformam','Porque tudo muda ao mesmo tempo','Porque nada muda de verdade','Somente para montar linhas do tempo'],a:0,why:'Processos históricos combinam mudanças, continuidades e ritmos diferentes.'},
    {level:'Nível 1 — Ler como historiador',area:'Etnocentrismo',q:'Qual atitude é etnocêntrica?',o:['Comparar sociedades procurando contexto','Usar os valores da própria cultura como padrão universal para classificar outras como inferiores','Investigar uma prática antes de julgá-la','Reconhecer diversidade cultural'],a:1,why:'Etnocentrismo transforma a própria cultura em medida universal.'},
    {level:'Nível 1 — Ler como historiador',area:'Evidência e inferência',q:'Um decreto manda impedir determinada prática. O que ele prova com mais segurança?',o:['Que ninguém jamais realizou a prática','Que alguma autoridade considerou necessário regulá-la ou proibi-la','Que toda a população concordava com a regra','Que a regra foi sempre cumprida'],a:1,why:'Norma revela intenção de regular; prática efetiva precisa de outras evidências.'},
    {level:'Nível 1 — Ler como historiador',area:'Anacronismo',q:'Qual exemplo contém anacronismo?',o:['Perguntar quem era cidadão em Atenas','Julgar uma instituição romana como se seus participantes usassem exatamente o conceito contemporâneo de democracia','Comparar cidadania antiga e atual destacando diferenças','Estudar permanências de longo prazo'],a:1,why:'Anacronismo projeta categorias ou valores de outro tempo sem contextualização.'},

    {level:'Nível 2 — Sociedades e diversidade',area:'Origem humana',q:'Qual formulação é mais adequada sobre Homo sapiens?',o:['Surgiu na África e o quadro atual indica interação entre populações africanas ao longo do tempo','Surgiu simultaneamente em todos os continentes','Surgiu na Europa e depois migrou para a África','A ciência já conhece um único ponto exato e isolado de origem'],a:0,why:'As evidências apontam origem africana e um processo populacional complexo.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Neolítico',q:'Por que é inadequado tratar agricultura como “degrau obrigatório do progresso”?',o:['Porque agricultura nunca mudou sociedades','Porque diferentes grupos construíram modos de vida distintos e a adoção da produção de alimentos ocorreu em tempos e formas variadas','Porque todos permaneceram caçadores-coletores','Porque agricultura eliminou desigualdades'],a:1,why:'A transição foi diversa e não constitui uma escala universal de superioridade.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Mesopotâmia e Egito',q:'Qual explicação evita determinismo geográfico?',o:['Os rios criaram automaticamente Estados e cidades','Rios ofereceram condições e desafios, mas trabalho, técnicas, instituições, conflitos e poder fizeram parte das respostas sociais','O ambiente foi irrelevante','Somente religião explica urbanização'],a:1,why:'Ambiente influencia possibilidades, mas não determina sozinho a forma social.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Escrita e poder',q:'Uma tabuinha de entregas de grãos permite investigar principalmente:',o:['Administração e circulação de recursos','O pensamento de toda a população','A inexistência de desigualdades','A opinião dos trabalhadores sem outras fontes'],a:0,why:'Registros administrativos sustentam conclusões sobre organização, não sobre toda experiência social.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Américas indígenas',q:'Qual frase é historicamente mais adequada?',o:['Maias, mexicas e incas resumem todos os povos das Américas','As Américas abrigavam enorme diversidade de povos, línguas, formas políticas e modos de vida antes e depois da conquista europeia','Todos os povos indígenas eram nômades','Povos indígenas pertencem somente ao passado'],a:1,why:'Diversidade é uma chave central para compreender as Américas.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Conquista das Américas',q:'Por que a conquista espanhola não deve ser explicada apenas como “europeus contra indígenas”?',o:['Porque não houve conflitos','Porque alianças, rivalidades entre povos indígenas, epidemias, tecnologia, interesses e estratégias formaram um processo complexo','Porque os espanhóis não participaram','Porque apenas o clima decidiu o resultado'],a:1,why:'A conquista envolveu múltiplos atores e fatores.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Cidadania antiga',q:'Na Atenas clássica, democracia direta significava:',o:['Participação política universal de todos os moradores','Participação direta de cidadãos reconhecidos, enquanto grandes grupos permaneciam excluídos da cidadania política','Governo exclusivo de reis','Voto representativo universal'],a:1,why:'Participação direta não era sinônimo de cidadania universal.'},
    {level:'Nível 2 — Sociedades e diversidade',area:'Roma',q:'O que a ampliação da cidadania romana em 212 d.C. mostra?',o:['Que cidadania manteve significado imutável','Que o status de cidadão se transformou e se ampliou, sem criar democracia direta nem igualdade social','Que a escravidão terminou','Que o Império deixou de existir'],a:1,why:'Cidadania jurídica, participação política e igualdade social não são a mesma dimensão.'},

    {level:'Nível 3 — Poder, Estado e limites',area:'Centralização monárquica',q:'A formação das monarquias centralizadas europeias ocorreu:',o:['De modo instantâneo e igual em toda a Europa','Por processos longos de negociação, guerra, tributação, administração e disputa com poderes locais','Sem conflitos','Depois da Revolução Francesa'],a:1,why:'Centralização foi processo histórico, não nascimento súbito do Estado moderno.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Absolutismo',q:'Dizer que uma monarquia era absolutista significa que o rei:',o:['Podia literalmente fazer qualquer coisa sem leis, costumes ou resistências','Buscava concentrar amplamente autoridade, embora governasse dentro de estruturas, leis, privilégios, negociações e limites concretos','Não cobrava impostos','Era eleito por sufrágio universal'],a:1,why:'Poder concentrado não equivale a poder sem qualquer limite prático ou jurídico.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Antigo Regime',q:'Uma característica importante do Antigo Regime francês era:',o:['Igualdade jurídica plena','Sociedade de ordens com privilégios e diferenças jurídicas','Fim da nobreza','Sufrágio universal feminino'],a:1,why:'Privilégios de ordens ajudam a compreender as tensões que antecederam 1789.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Revolução Inglesa',q:'Por que o século XVII inglês não pode ser resumido como uma passagem simples do absolutismo para a democracia?',o:['Porque nada mudou','Porque houve guerra civil, execução do rei, república, Protetorado, Restauração e Revolução Gloriosa','Porque o Parlamento desapareceu para sempre','Porque não existiam disputas religiosas'],a:1,why:'O processo teve avanços, recuos, experiências distintas e conflitos.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Bill of Rights',q:'O Bill of Rights de 1689 é importante porque:',o:['Eliminou imediatamente todas as desigualdades sociais','Reforçou limites ao poder monárquico e prerrogativas parlamentares','Criou sufrágio universal','Aboliu a monarquia britânica'],a:1,why:'O documento integrou um processo de limitação institucional da Coroa.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Iluminismo',q:'Qual afirmação sobre o Iluminismo é mais correta?',o:['Foi uma doutrina única com uma única resposta para todos os problemas','Reuniu autores e correntes diferentes que criticaram poderes e discutiram razão, direitos, soberania e organização política','Rejeitou qualquer uso da razão','Defendeu sempre o absolutismo'],a:1,why:'Iluminismo é um campo plural de debates, não um manual único.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Locke e direitos',q:'A ideia de governo baseado no consentimento ajuda a questionar:',o:['A necessidade de qualquer lei','A noção de que o governante possui autoridade política ilimitada independentemente dos governados','A existência de direitos','Toda forma de representação'],a:1,why:'Consentimento e direitos naturais foram usados para limitar a legitimidade do poder.'},
    {level:'Nível 3 — Poder, Estado e limites',area:'Separação de poderes',q:'A separação de poderes busca principalmente:',o:['Concentrar todas as funções numa única autoridade','Distribuir funções e criar mecanismos capazes de limitar concentrações de poder','Eliminar leis','Substituir instituições por decisões pessoais'],a:1,why:'Distribuir poder é uma forma de criar controles institucionais.'},

    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Independência dos EUA',q:'Qual contradição marca a independência dos Estados Unidos?',o:['Defesa de direitos e liberdade coexistiu com escravidão e cidadania restrita','Não houve linguagem de direitos','Todas as pessoas passaram a votar em 1776','A independência aboliu imediatamente a escravidão em todas as colônias'],a:0,why:'A linguagem universal de direitos conviveu com exclusões concretas.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Revolução Francesa',q:'A Declaração dos Direitos do Homem e do Cidadão de 1789 deve ser estudada como:',o:['Prova de que igualdade social completa foi alcançada imediatamente','Marco de uma nova linguagem política de direitos, cuja aplicação e alcance permaneceram em disputa','Documento sem importância histórica','Fim imediato de todos os conflitos revolucionários'],a:1,why:'Declarações formulam princípios; sua realização histórica precisa ser investigada.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Gênero e cidadania',q:'Por que Olympe de Gouges é relevante para estudar a Revolução Francesa?',o:['Porque defendeu que a linguagem de direitos também deveria incluir mulheres','Porque foi rainha da França','Porque rejeitou qualquer igualdade','Porque aboliu sozinha a monarquia'],a:0,why:'Sua intervenção expõe a distância entre universalidade declarada e exclusão política feminina.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Revolução Haitiana',q:'A Revolução Haitiana ajuda a compreender que:',o:['Pessoas escravizadas foram agentes históricos que mobilizaram ideias de liberdade contra a ordem colonial','A escravidão terminou sem conflito','A linguagem de direitos circulava apenas na Europa','Colônias não tinham vida política'],a:0,why:'A revolução evidencia protagonismo de pessoas escravizadas e circulação atlântica de ideias.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Imperialismo',q:'O imperialismo do século XIX pode ser explicado por uma causa única?',o:['Sim, apenas economia','Não; interesses econômicos, estratégicos, políticos, militares e ideológicos se combinaram de formas distintas','Sim, apenas religião','Sim, apenas crescimento populacional'],a:1,why:'Expansão imperial foi multicausal e variou conforme lugar e potência.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Discurso civilizatório',q:'O chamado discurso civilizatório serviu muitas vezes para:',o:['Questionar qualquer hierarquia racial','Apresentar dominação colonial como missão benéfica ou necessária, ocultando coerção e exploração','Garantir soberania imediata aos povos colonizados','Eliminar o racismo científico'],a:1,why:'A linguagem de civilização podia legitimar relações de poder desiguais.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Resistência colonial',q:'Qual frase evita representar povos colonizados como passivos?',o:['A conquista europeia ocorreu sem resistência','Povos colonizados resistiram, negociaram, adaptaram estratégias, construíram alianças e tomaram iniciativas próprias','Somente europeus tomavam decisões políticas','Toda resistência teve o mesmo resultado'],a:1,why:'Agência histórica precisa aparecer mesmo em situações de forte dominação.'},
    {level:'Nível 4 — Revoluções, direitos e impérios',area:'Fronteiras coloniais',q:'Qual formulação é mais cuidadosa sobre fronteiras africanas?',o:['A Conferência de Berlim desenhou sozinha e de uma vez todas as fronteiras atuais','A partilha imperial, tratados, guerras e administrações coloniais contribuíram para fronteiras que frequentemente atravessaram realidades políticas e culturais preexistentes','As fronteiras não tiveram relação com imperialismo','Todas seguiram exatamente antigas divisões locais'],a:1,why:'Berlim foi importante, mas a formação de fronteiras foi processo mais amplo.'},

    {level:'Nível 5 — Síntese, memória e argumentação',area:'Patrimônio',q:'Patrimônio cultural pode incluir:',o:['Somente prédios muito antigos','Bens materiais e imateriais, como edificações, objetos, sítios, saberes, celebrações e formas de expressão','Somente documentos escritos','Apenas aquilo que pertence ao governo'],a:1,why:'Patrimônio abrange referências materiais e imateriais reconhecidas socialmente.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'Monumentos',q:'Qual pergunta histórica é mais produtiva diante de um monumento público?',o:['Ele é bonito?','Quem decidiu erguê-lo, quando, para homenagear quem, que narrativa promove e quais grupos aparecem ou são silenciados?','É antigo, então deve permanecer sem debate','Se é controverso, deve ser destruído sem estudo'],a:1,why:'Monumentos são também escolhas públicas de memória e homenagem.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'História pública',q:'Estudar criticamente uma pessoa ou processo histórico é o mesmo que homenageá-lo publicamente?',o:['Sim, sempre','Não; conhecimento histórico e homenagem pública são práticas diferentes','Sim, porque toda explicação é celebração','Não existe diferença entre museu e monumento'],a:1,why:'Uma sociedade pode estudar criticamente algo sem necessariamente celebrá-lo.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'Narrativas',q:'Se duas interpretações históricas divergem, qual critério ajuda a avaliá-las?',o:['Número de curtidas','Qualidade das evidências, coerência do argumento, método e capacidade de responder a críticas','Preferência pessoal apenas','Autoridade de quem fala, independentemente das fontes'],a:1,why:'Pluralidade de interpretação não elimina critérios de investigação.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'Causalidade histórica',q:'Qual explicação é mais forte para um grande processo histórico?',o:['Uma única causa simples que explica tudo','Uma relação argumentada entre fatores, mecanismos, atores, contexto e evidências, distinguindo causas de consequências','Uma sequência de datas sem relações','Uma opinião sem fontes'],a:1,why:'Explicações históricas robustas são relacionais e sustentadas por evidências.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'Comparação histórica',q:'Comparar Atenas antiga e uma democracia contemporânea exige:',o:['Provar que são iguais','Definir critérios, reconhecer contextos diferentes e observar semelhanças e diferenças sem anacronismo','Usar apenas a mesma palavra “democracia”','Ignorar quem podia participar'],a:1,why:'Comparação histórica exige critérios e contexto.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'Poder e legitimidade',q:'O que conecta absolutismo, revoluções e imperialismo como tema histórico?',o:['Nada; são assuntos totalmente isolados','Disputas sobre quem pode exercer poder, como justificá-lo, quem é incluído e quem suporta seus efeitos','Apenas mudanças de calendário','Somente avanços tecnológicos'],a:1,why:'Poder, legitimidade, inclusão e exclusão atravessam diferentes períodos.'},
    {level:'Nível 5 — Síntese, memória e argumentação',area:'Pensamento histórico',q:'Qual resposta melhor resume o que significa aprender História neste módulo?',o:['Memorizar o maior número possível de nomes e datas','Investigar fontes, contextualizar conceitos, comparar perspectivas e construir explicações argumentadas sobre mudanças, permanências e relações de poder','Aceitar qualquer narrativa como verdadeira','Julgar todo o passado com os mesmos critérios atuais'],a:1,why:'O foco do percurso é desenvolver pensamento histórico, não apenas memória factual.'}
  ];

  const review = {
    'Fontes e método':'Retome o capítulo 01: autoria, contexto, finalidade, silêncios e comparação de fontes.',
    'Tempo histórico':'Retome cronologia, causalidade, mudanças e permanências dos capítulos 00 e 01.',
    'Memória e História':'Retome os capítulos 01 e 10 e diferencie lembrança social, investigação e uso público do passado.',
    'Perspectiva':'Volte ao protocolo de análise de fontes do capítulo 01.',
    'Mudança e permanência':'Observe processos longos nos capítulos 02, 06, 07 e 10.',
    'Etnocentrismo':'Retome diversidade cultural nos capítulos 01, 04 e 09.',
    'Evidência e inferência':'Revise a diferença entre o que a fonte mostra e o que inferimos.',
    'Anacronismo':'Retome o cuidado com conceitos de cidadania, democracia e direitos em seus próprios contextos.',
    'Origem humana':'Retome o capítulo 02 e a origem africana de Homo sapiens.',
    'Neolítico':'Retome o capítulo 02 e a diversidade das transições para agricultura e sedentarização.',
    'Mesopotâmia e Egito':'Retome o capítulo 03 e evite transformar o ambiente em causa única.',
    'Escrita e poder':'Revise escrita, administração e limites de uma fonte no capítulo 03.',
    'Américas indígenas':'Retome o capítulo 04 e a diversidade histórica e atual dos povos indígenas.',
    'Conquista das Américas':'Revise alianças, epidemias, conflitos e múltiplos atores no capítulo 04.',
    'Cidadania antiga':'Retome o capítulo 05 e pergunte sempre quem participava e quem ficava de fora.',
    'Roma':'Retome transformações da cidadania e das instituições romanas no capítulo 05.',
    'Centralização monárquica':'Retome o capítulo 06 e compare trajetórias de Portugal, França, Inglaterra e monarquias ibéricas.',
    'Absolutismo':'Revise concentração de poder sem confundi-la com ausência total de limites.',
    'Antigo Regime':'Retome ordens, privilégios e desigualdade jurídica no capítulo 06.',
    'Revolução Inglesa':'Revise a sequência de conflitos, experiências políticas e Revolução Gloriosa no capítulo 07.',
    'Bill of Rights':'Retome a relação entre Coroa, Parlamento e limitação do poder no capítulo 07.',
    'Iluminismo':'Revise a pluralidade de autores e ideias do capítulo 07.',
    'Locke e direitos':'Retome direitos, consentimento e legitimidade política.',
    'Separação de poderes':'Revise Montesquieu e mecanismos institucionais de limitação do poder.',
    'Independência dos EUA':'Retome o capítulo 08 e a tensão entre direitos declarados e exclusões.',
    'Revolução Francesa':'Retome Antigo Regime, direitos, cidadania e transformação política no capítulo 08.',
    'Gênero e cidadania':'Revise Olympe de Gouges e os limites da cidadania revolucionária.',
    'Revolução Haitiana':'Retome o protagonismo de pessoas escravizadas e a circulação atlântica das ideias de liberdade.',
    'Imperialismo':'Retome as causas múltiplas e formas variadas de dominação do capítulo 09.',
    'Discurso civilizatório':'Revise racismo científico, propaganda e legitimação da dominação no capítulo 09.',
    'Resistência colonial':'Retome agência, negociação e resistência dos povos colonizados.',
    'Fronteiras coloniais':'Revise Berlim como parte de um processo mais amplo de partilha e administração imperial.',
    'Patrimônio':'Retome patrimônio material e imaterial no capítulo 10.',
    'Monumentos':'Revise monumento como escolha pública de memória.',
    'História pública':'Retome a diferença entre estudar, preservar, contextualizar e homenagear.',
    'Narrativas':'Retome evidência, método e critérios de avaliação de interpretações.',
    'Causalidade histórica':'Construa explicações com fatores, mecanismos, atores e evidências.',
    'Comparação histórica':'Compare com critérios e contexto, evitando anacronismo.',
    'Poder e legitimidade':'Revise como poder, direitos e exclusões reaparecem nos capítulos 05–10.',
    'Pensamento histórico':'Retome o método do capítulo 01 e aplique-o ao percurso inteiro.'
  };

  const challenges = [
    ['1. Fonte contra fonte','Um relato oficial afirma que uma obra pública foi “aceita com entusiasmo”. Um diário privado registra reclamações sobre trabalho obrigatório. Explique por que os dois documentos podem ser usados juntos sem obrigar o historiador a escolher um deles como “o único verdadeiro”.','Uma boa resposta identifica autoria e finalidade diferentes, compara o que cada fonte consegue mostrar e conclui que experiências sociais podem ser conflitantes.'],
    ['2. Mudança sem escala de progresso','Explique por que a adoção da agricultura pode ser considerada uma transformação histórica importante sem classificar automaticamente sociedades agrícolas como superiores a grupos caçadores-coletores.','A resposta deve separar mudança de valor, reconhecer diversidade de modos de vida e evitar uma linha evolutiva obrigatória.'],
    ['3. O rio não trabalha sozinho','Compare Mesopotâmia e Egito e formule uma explicação em que ambiente, trabalho, instituições e poder apareçam relacionados, sem transformar os rios em causa única.','Use pelo menos três dimensões: condições ambientais, organização do trabalho/produção e instituições ou relações de poder.'],
    ['4. Cidadania revela exclusões','Escolha Atenas ou Roma e mostre como perguntar “quem era cidadão?” ajuda a enxergar tanto participação quanto desigualdades da sociedade estudada.','A resposta precisa citar direitos e também grupos excluídos ou diferenças de status.'],
    ['5. Rei poderoso, poder limitado','Explique como uma monarquia absolutista podia concentrar grande autoridade e, ao mesmo tempo, enfrentar leis, costumes, privilégios, instituições, falta de recursos e resistências.','Evite os extremos “rei sem poder” e “rei podia tudo”. Mostre diferença entre pretensão de autoridade e capacidade concreta.'],
    ['6. Direitos para quem?','Compare uma declaração revolucionária de direitos do fim do século XVIII com uma exclusão concreta do mesmo período — escravidão, gênero, propriedade ou outro critério. O que essa tensão ensina sobre mudanças históricas?','A resposta deve reconhecer a inovação da linguagem de direitos e, ao mesmo tempo, seus limites de aplicação.'],
    ['7. Propaganda imperial','Uma propaganda colonial apresenta a potência conquistadora levando “ordem, ciência e progresso” a outro povo. Formule três perguntas que um historiador deveria fazer antes de usar essa imagem como descrição da realidade colonial.','Pergunte autoria/público/finalidade; compare com experiências dos colonizados; procure coerção, exploração, resistência e aquilo que a propaganda omite.'],
    ['8. Monumento em disputa','Uma cidade debate um monumento dedicado a uma personagem ligada a conquistas e violência. Proponha uma decisão — manter, contextualizar, deslocar, transformar ou outra — e justifique historicamente sem apagar a personagem nem presumir que homenagem e estudo são a mesma coisa.','Não existe uma única decisão obrigatória. A qualidade está nos critérios, evidências, reconhecimento das memórias em disputa e distinção entre preservar conhecimento e prestar homenagem.']
  ];

  function questionMarkup(item,index) {
    const name = `hist99_${index}`;
    return `<div class="quiz-item" data-h99-question data-answer="${item.a}" data-area="${item.area}" data-level="${item.level}">
      <p>${index+1}. ${item.q}</p>
      ${item.o.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
      <div class="choice-feedback" data-h99-feedback></div>
    </div>`;
  }

  function levelBlock(level) {
    const items = questions.map((q,i)=>({q,i})).filter(item=>item.q.level===level);
    return `<section class="chapter-checkpoint"><h3>${level}</h3>${items.map(item=>questionMarkup(item.q,item.i)).join('')}</section>`;
  }

  function showChapter() {
    const levels = [...new Set(questions.map(item=>item.level))];
    MBB.showLesson({
      unit:'Prática e síntese',
      technical:'40 questões • fontes • comparação • causalidade • argumentação • desafios integradores',
      title:'Exercícios e desafios — pense como historiador',
      objective:'<strong>Objetivo:</strong> consolidar os capítulos 01–10 avaliando não apenas informações históricas, mas leitura de fontes, contextualização, causalidade, comparação, cidadania, poder, memória e construção de argumentos.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Fechamento da 1ª série</span>
          <div class="hero-box">
            <strong class="card-title">Você não chegou até aqui para decorar uma lista.</strong>
            <p>Este fechamento verifica se você consegue usar o que aprendeu: identificar evidências, evitar anacronismos, comparar sociedades, explicar processos com mais de uma causa e justificar uma interpretação.</p>
            <p class="central-question"><strong>Regra:</strong> responda primeiro sem voltar aos capítulos. Depois use o diagnóstico final para decidir o que merece revisão.</p>
          </div>
        </section>

        <div class="four-col">
          <div class="mini-card"><strong>40 objetivas</strong><p>Cinco níveis de oito questões, do método histórico à síntese.</p></div>
          <div class="mini-card"><strong>5 eixos</strong><p>Fontes; sociedades; poder; direitos; memória e argumentação.</p></div>
          <div class="mini-card"><strong>Fontes simuladas</strong><p>Casos inventados explicitamente para treinar análise sem fabricar documentos reais.</p></div>
          <div class="mini-card"><strong>8 desafios</strong><p>Respostas abertas em que o importante é a qualidade do argumento.</p></div>
        </div>

        ${levels.map(levelBlock).join('')}

        <div class="quiz-actions">
          <button class="action-button primary" id="checkHist99" type="button">Conferir percurso completo</button>
          <button class="action-button" id="resetHist99" type="button">Refazer objetivas</button>
        </div>
        <div id="hist99Result" class="quiz-result" aria-live="polite"></div>

        <section class="chapter-checkpoint">
          <h3>Laboratório 1 — Quando a fonte quer convencer</h3>
          <div class="source-box">
            <span class="source-label">Situação didática simulada — não é documento histórico real</span>
            <p><strong>Cartaz:</strong> uma potência imperial aparece como uma figura luminosa levando escola, estrada e medicina a uma população colonizada representada como passiva e sem voz. Não aparecem soldados, impostos, trabalho forçado, extração de recursos nem resistência.</p>
            <p class="source-meta">A descrição foi criada para treinar análise de propaganda.</p>
          </div>
          <div class="method-box"><strong class="card-title">Faça quatro perguntas</strong><div class="method-grid">
            <div class="method-step"><span>1</span><strong>Autoria</strong><p>Quem ganharia com essa representação?</p></div>
            <div class="method-step"><span>2</span><strong>Seleção</strong><p>O que aparece e o que foi retirado da cena?</p></div>
            <div class="method-step"><span>3</span><strong>Linguagem</strong><p>Como superioridade e inferioridade são construídas?</p></div>
            <div class="method-step"><span>4</span><strong>Contraste</strong><p>Que outras fontes seriam necessárias?</p></div>
          </div></div>
        </section>

        <section class="chapter-checkpoint">
          <h3>Laboratório 2 — A mesma praça, memórias diferentes</h3>
          <div class="source-box">
            <span class="source-label">Situação didática simulada</span>
            <p><strong>Grupo A:</strong> afirma que uma estátua representa orgulho local e tradição familiar.</p>
            <p><strong>Grupo B:</strong> afirma que a mesma estátua homenageia uma autoridade associada à expulsão violenta de uma comunidade.</p>
            <p><strong>Arquivo municipal:</strong> mostra que o monumento foi erguido décadas depois dos acontecimentos, durante uma campanha política que buscava construir determinada imagem da cidade.</p>
          </div>
          <div class="challenge-box"><strong>Desafio de método</strong><p>Explique por que as memórias dos grupos A e B são fontes relevantes, mas o arquivo municipal acrescenta uma pergunta diferente: <em>por que aquela sociedade decidiu homenagear essa personagem naquele momento?</em></p></div>
        </section>

        <section class="chapter-checkpoint">
          <h3>Laboratório 3 — Princípio e realidade</h3>
          <div class="source-box">
            <span class="source-label">Síntese didática de uma situação histórica</span>
            <p>Um novo regime afirma que os seres humanos possuem direitos e que a autoridade deve se apoiar nos governados. No mesmo território, parte da população permanece escravizada e mulheres não possuem os mesmos direitos políticos dos homens.</p>
          </div>
          <div class="challenge-box"><strong>Não escolha entre “foi avanço” ou “foi hipocrisia”.</strong><p>Construa uma explicação que comporte as duas dimensões: a mudança na linguagem política e os limites concretos de sua aplicação.</p></div>
        </section>

        <section class="chapter-checkpoint">
          <h3>8 desafios integradores</h3>
          ${challenges.map(([title,prompt,criteria])=>`<div class="challenge-box"><strong>${title}</strong><p>${prompt}</p><details><summary>Critérios para avaliar sua resposta</summary><p>${criteria}</p></details></div>`).join('')}
        </section>

        <section class="chapter-checkpoint">
          <h3>Mapa final — o que deve permanecer depois das datas</h3>
          <div class="four-col">
            <div class="mini-card"><strong>Investigar</strong><p>Fonte não é verdade pronta. Pergunte autoria, contexto, finalidade, limites e compare evidências.</p></div>
            <div class="mini-card"><strong>Contextualizar</strong><p>Democracia, cidadania, Estado, direitos e civilização mudam de significado conforme tempo e sociedade.</p></div>
            <div class="mini-card"><strong>Explicar</strong><p>Grandes processos raramente têm causa única. Relacione atores, condições, interesses, conflitos e consequências.</p></div>
            <div class="mini-card"><strong>Argumentar</strong><p>Interpretações podem divergir, mas precisam responder às evidências e aos critérios de análise.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Fechamento curricular da História — 1ª série</summary>
          <p>Este 99 retoma o percurso dos capítulos 01–10: produção do conhecimento histórico; tempo, memória, cultura e identidade; África e primeiras sociedades; Mesopotâmia e Egito; povos das Américas e indígenas do Brasil; Grécia e Roma; formação de Estados, Absolutismo e Antigo Regime; Revolução Inglesa e Iluminismo; Estados Unidos e Revolução Francesa; Imperialismo e Neocolonialismo; patrimônio, narrativas, direitos e disputas pelo passado.</p>
        </details>

        <div class="ok-box"><strong>Essência da 1ª série:</strong> aprender História é construir explicações sobre experiências humanas no tempo usando evidências, contexto, comparação e argumentos — e reconhecer que poder, cultura, direitos, memória e diversidade são sempre questões históricas.</div>
      `,
      init:init
    });
  }

  function init(root) {
    const result = $('#hist99Result',root);
    $('#checkHist99',root)?.addEventListener('click',()=>{
      let score=0;
      const levelScores={};
      const gaps=[];
      $$('[data-h99-question]',root).forEach(box=>{
        const selected = $('input:checked',box);
        const correct = Number(box.dataset.answer);
        const level = box.dataset.level;
        levelScores[level] = levelScores[level] || {score:0,total:0};
        levelScores[level].total++;
        const feedback = $('[data-h99-feedback]',box);
        const itemIndex = Number(($('input',box)?.name || '').replace('hist99_',''));
        const item = questions[itemIndex];
        const ok = selected && Number(selected.value)===correct;
        if (ok) {
          score++;
          levelScores[level].score++;
        } else {
          gaps.push(box.dataset.area);
        }
        if (feedback && item) {
          feedback.className=`choice-feedback ${ok?'is-correct':'is-wrong'}`;
          feedback.innerHTML=`<strong>${ok?'Correto.':'Reveja.'}</strong> ${item.why}`;
        }
      });

      const unique=[...new Set(gaps)];
      const total=questions.length;
      const band=score>=36?'Excelente domínio do percurso.':score>=32?'Base muito consistente.':score>=26?'Boa base, com alguns eixos para revisar.':score>=20?'Há fundamentos importantes, mas a revisão dirigida será útil.':'Vale retomar o percurso por eixos antes de considerar o conteúdo consolidado.';
      result.innerHTML=`
        <div class="ok-box"><strong>${score}/${total} — ${band}</strong><p>Use o resultado como mapa de revisão. Em História, acertar a alternativa importa, mas saber justificar por que ela é melhor importa ainda mais.</p></div>
        <div class="result-grid">${Object.entries(levelScores).map(([level,data])=>`<div class="result-card"><strong>${level}</strong><p>${data.score}/${data.total} corretas</p></div>`).join('')}</div>
        ${unique.length?`<div class="review-panel"><h3>Revisão dirigida</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${review[area]||'Retome o capítulo relacionado e refaça a questão explicando sua escolha.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Você acertou todas as objetivas.</strong><p>Agora concentre-se nos desafios abertos: eles exigem argumentação, não reconhecimento de alternativas.</p></div>'}`;
      result.scrollIntoView?.({behavior:'smooth',block:'start'});
    });

    $('#resetHist99',root)?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      $$('[data-h99-feedback]',root).forEach(feedback=>{feedback.className='choice-feedback';feedback.innerHTML='';});
      if (result) result.innerHTML='';
      MBB.scrollLessonTop?.();
    });
  }

  MBB.enableChapter?.('99 Exercícios', showChapter);
})();