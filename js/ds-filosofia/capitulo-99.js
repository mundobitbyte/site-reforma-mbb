(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'argumento • evidência • verdade • ciência • ética • liberdade • responsabilidade • bioética • estética • justiça • pluralismo • objeção • revisão',
      title:'Você consegue argumentar sem confundir opinião, evidência e preferência?',
      objective:'<strong>Objetivo:</strong> integrar os conceitos dos capítulos 01 a 06 em situações novas; reconstruir argumentos, avaliar evidências, distinguir questões factuais de normativas, comparar perspectivas filosóficas e justificar decisões sem transformar preferência, autoridade ou maioria em prova.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Desafio final</span>
          <div class="hero-box">
            <strong class="card-title">Filosofar é conseguir justificar — e revisar — uma posição</strong>
            <p>Ao longo do módulo, você viu que uma opinião pode estar correta por acaso, que uma tecnologia eficiente pode levantar problemas éticos, que uma obra pode ser interpretada de formas diferentes e que uma decisão aprovada pela maioria ainda pode ser questionada quanto à justiça.</p>
            <p>Agora o objetivo não é repetir nomes de filósofos. É mostrar que você consegue <strong>formular uma afirmação, apresentar razões, usar evidências adequadas, enfrentar objeções e revisar a conclusão quando necessário</strong>.</p>
            <p class="central-question"><strong>Pergunta final:</strong> você consegue defender uma ideia sem confundir “eu penso assim” com “há boas razões para pensar assim”?</p>
          </div>
        </section>

        <div class="argument-chain">
          <span>afirmação</span><b>→</b><span>razões</span><b>→</b><span>evidências</span><b>→</b><span>objeção</span><b>→</b><span>resposta</span><b>→</b><span>revisão</span>
        </div>

        <div class="note-box">
          <strong>Como usar este capítulo</strong>
          <p>As 12 primeiras questões dão feedback imediato. Depois, os desafios abertos exigem resposta construída. Em Filosofia, uma boa resposta não é a mais longa: é a que <strong>distingue conceitos, apresenta razões relevantes e não afirma mais do que as evidências permitem</strong>.</p>
        </div>

        <h3>1. Perguntar e argumentar</h3>

        ${choice('1','Opinião ou argumento?','Qual alternativa apresenta um argumento, e não apenas uma opinião?',[['a','“Essa regra é ruim porque eu não gosto dela.”'],['b','“Essa regra deveria ser revista porque produz o mesmo custo para alunos em situações diferentes, sem justificar por que essa diferença de impacto seria aceitável.”'],['c','“Todo mundo sabe que essa regra é absurda.”']],'b','Correto. Há uma conclusão e uma razão que pode ser examinada, contestada e respondida.','Preferência pessoal ou apelo ao que “todo mundo sabe” não bastam como justificativa.')}

        ${choice('2','Caridade argumentativa','Você discorda de uma posição. Qual é o primeiro passo filosoficamente mais forte?',[['a','Escolher a versão mais fraca da posição para refutá-la facilmente'],['b','Reconstruir a melhor versão razoável do argumento antes de criticá-lo'],['c','Atribuir uma intenção ruim a quem pensa diferente']],'b','Isso. Criticar a versão mais forte e fiel do argumento produz uma discussão intelectualmente mais séria.','Caricaturar uma posição pode gerar uma vitória retórica, mas não uma boa refutação.')}

        <h3>2. Conhecimento, verdade e ciência</h3>

        ${choice('3','Acertar por acaso','Uma pessoa copia uma resposta aleatória da internet e, por coincidência, ela está correta. O que isso mostra?',[['a','Verdade e conhecimento são exatamente a mesma coisa'],['b','Uma crença pode ser verdadeira sem estar adequadamente justificada'],['c','Toda informação da internet é conhecimento']],'b','Correto. O acerto importa, mas conhecimento exige examinar como a crença foi formada e sustentada.','Uma conclusão verdadeira por sorte não possui automaticamente a mesma qualidade epistêmica de uma conclusão bem justificada.')}

        ${choice('4','Consenso científico','Qual descrição é mais adequada?',[['a','Consenso científico cria a verdade por votação'],['b','Consenso científico pode indicar convergência de evidências, métodos e avaliações independentes, mas continua aberto a revisão diante de novas evidências'],['c','Se existe consenso, nenhuma crítica futura é permitida']],'b','Correto. Consenso é epistemicamente relevante porque pode refletir convergência de investigação, não porque transforma maioria em infalibilidade.','Ciência é revisável; isso não significa que todas as opiniões tenham o mesmo peso evidencial.')}

        <h3>3. Ética, liberdade e responsabilidade</h3>

        ${choice('5','Coerção','Uma pessoa age sob ameaça grave e imediata. Qual conclusão é mais cuidadosa?',[['a','A ameaça nunca importa, porque a pessoa ainda realizou fisicamente a ação'],['b','A coerção pode reduzir o grau de controle e deve entrar na avaliação da responsabilidade'],['c','Qualquer ação sob pressão se torna automaticamente correta']],'b','Isso. Responsabilidade exige considerar controle, conhecimento e circunstâncias.','Coerção pode alterar a responsabilidade sem transformar automaticamente a ação em moralmente correta.')}

        ${choice('6','Três lentes éticas','Um hospital precisa distribuir um recurso escasso. Qual análise filosófica é mais completa?',[['a','Perguntar apenas qual opção parece mais simpática'],['b','Examinar consequências, deveres/direitos e também que virtudes ou disposições orientam uma decisão prudente'],['c','Usar uma única palavra, como “justiça”, sem explicar o critério']],'b','Correto. As teorias podem dar pesos diferentes a esses elementos, mas compará-los torna a justificativa mais explícita.','Nomear um valor não substitui explicar como ele se aplica ao caso.')}

        <h3>4. Tecnologia e bioética</h3>

        ${choice('7','Pode, logo deve?','Uma nova tecnologia médica se torna tecnicamente possível. O que ainda precisa ser discutido?',[['a','Nada; possibilidade técnica encerra a questão'],['b','Finalidade, evidências de benefício, riscos, consentimento, justiça, privacidade, alternativas e responsabilidade'],['c','Somente se a tecnologia parece moderna']],'b','Correto. Capacidade técnica e justificação ética são perguntas diferentes.','Bioética existe justamente porque “funciona” não responde sozinho “como deve ser usado”.')}

        ${choice('8','IA e responsabilidade','Um sistema automatizado recomenda uma decisão prejudicial. Qual resposta evita simplificação?',[['a','“Foi a máquina, então ninguém responde.”'],['b','“A culpa é sempre de uma única pessoa.”'],['c','Reconstruir projeto, validação, dados, condições de uso, supervisão, possibilidade de contestação e decisão concreta']],'c','Isso. Tecnologias complexas podem distribuir responsabilidades por uma rede de decisões humanas e institucionais.','Automação não faz responsabilidade desaparecer; ela pode torná-la mais difícil de mapear.')}

        <h3>5. Estética e interpretação</h3>

        ${choice('9','Gosto e justificativa','Uma pessoa diz “não gostei”; outra descreve forma, técnica, contexto e explica sua avaliação. O que podemos concluir?',[['a','A segunda oferece uma avaliação mais argumentada, embora o desacordo possa permanecer'],['b','A segunda provou que todos devem gostar da obra'],['c','Como existe gosto pessoal, nenhuma razão estética pode ser discutida']],'a','Correto. Argumentação estética pode ser melhor ou pior articulada sem transformar gosto em uma medida física universal.','Desacordo estético não elimina a possibilidade de justificar interpretações e avaliações.')}

        ${choice('10','Interpretar sem inventar','Qual princípio ajuda a evitar uma interpretação arbitrária de uma obra?',[['a','Relacionar a interpretação a elementos observáveis da obra, contexto e fontes relevantes'],['b','Afirmar qualquer significado, desde que seja criativo'],['c','Reduzir toda obra à biografia do artista']],'a','Isso. Uma interpretação pode ser original e ainda precisar mostrar em que evidências se apoia.','A obra e as fontes funcionam como limites e recursos para a interpretação.')}

        <h3>6. Justiça, política e pluralismo</h3>

        ${choice('11','Maioria e justiça','Uma proposta recebe 70% dos votos. O que podemos concluir apenas desse dado?',[['a','Que a proposta foi aprovada por maioria naquele procedimento'],['b','Que a proposta é necessariamente justa'],['c','Que os 30% restantes não possuem mais direitos ou razões relevantes']],'a','Correto. O resultado informa quem venceu a votação; justiça e legitimidade exigem outras perguntas sobre regras, direitos, participação e justificativas.','Maioria é um procedimento importante, mas não funciona como prova moral automática.')}

        ${choice('12','Pluralismo','Qual alternativa expressa melhor pluralismo sem relativismo?',[['a','Pessoas podem defender visões políticas e morais diferentes, mas afirmações factuais continuam sujeitas a evidências'],['b','Toda afirmação é verdadeira para quem acredita nela'],['c','Só uma posição política deve poder participar do debate']],'a','Correto. Pluralismo protege o desacordo legítimo; ele não transforma contradições factuais em verdades simultâneas.','Discordância política e verdade factual são questões diferentes.')}

        <h3>7. Leia a evidência visual — sem deixar a legenda pensar por você</h3>
        <p>As três imagens abaixo já apareceram no módulo. Agora elas funcionam como <strong>provas de leitura</strong>: diga o que a imagem permite observar diretamente, o que exige conhecimento adicional e o que seria exagero concluir apenas olhando.</p>

        <div class="comparison-grid">
          <figure class="philo-figure">
            <a href="https://commons.wikimedia.org/wiki/File:Galileo%27s_sketches_of_the_moon_%28cropped%29.png" target="_blank" rel="noopener noreferrer">
              <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Galileo%27s_sketches_of_the_moon_%28cropped%29.png?width=900" alt="Desenhos da Lua publicados por Galileo em 1610, com áreas claras, escuras e sombras." loading="lazy" decoding="async">
            </a>
            <figcaption>
              <strong>Evidência A — Galileo, 1610</strong>
              <span>Escreva: uma observação direta da imagem; uma interpretação possível; e uma informação externa necessária para sustentar essa interpretação.</span>
              <small><em>Sidereus Nuncius</em>, 1610. Domínio público.</small>
            </figcaption>
          </figure>

          <figure class="philo-figure">
            <a href="https://commons.wikimedia.org/wiki/File:HeLa-I.jpg" target="_blank" rel="noopener noreferrer">
              <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/HeLa-I.jpg?width=900" alt="Microscopia de fluorescência de células HeLa cultivadas em laboratório." loading="lazy" decoding="async">
            </a>
            <figcaption>
              <strong>Evidência B — células HeLa</strong>
              <span>A imagem mostra material biológico. Que problema bioético importante <em>não pode</em> ser descoberto apenas olhando a microscopia?</span>
              <small>National Institutes of Health, 2007. Domínio público.</small>
            </figcaption>
          </figure>

          <figure class="philo-figure">
            <a href="https://commons.wikimedia.org/wiki/File:Marcel_Duchamp,_1917,_Fountain,_photograph_by_Alfred_Stieglitz.jpg" target="_blank" rel="noopener noreferrer">
              <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Marcel_Duchamp,_1917,_Fountain,_photograph_by_Alfred_Stieglitz.jpg?width=800" alt="Fotografia em preto e branco de Fountain, obra associada a Marcel Duchamp, assinada R. Mutt." loading="lazy" decoding="async">
            </a>
            <figcaption>
              <strong>Evidência C — <em>Fountain</em>, 1917</strong>
              <span>Que definição simples de arte essa obra coloca em dificuldade? Formule uma definição melhor e depois procure um contraexemplo para ela.</span>
              <small>Marcel Duchamp; fotografia de Alfred Stieglitz, 1917. Domínio público nos EUA.</small>
            </figcaption>
          </figure>
        </div>

        <h3>8. Quatro desafios abertos</h3>

        <div class="challenge-box">
          <strong class="card-title">Desafio A — A afirmação viral</strong>
          <p>Uma postagem diz: “um cientista famoso confirmou que o produto X melhora a memória; portanto está cientificamente provado”.</p>
          <ol>
            <li>Identifique a conclusão.</li>
            <li>Explique por que o nome de uma autoridade, sozinho, não é prova suficiente.</li>
            <li>Liste pelo menos três evidências ou informações metodológicas que você buscaria.</li>
            <li>Escreva uma versão da conclusão que não afirme mais do que os dados disponíveis permitem.</li>
          </ol>
          <details><summary>Pista de correção</summary><p>Uma boa resposta procura estudo, desenho da pesquisa, tamanho/amostra, comparação, efeito medido, incerteza, replicação, conflitos de interesse e convergência com outras evidências. O ponto não é desconfiar de todo especialista, mas saber por que a expertise tem peso e por que ainda precisamos examinar evidências.</p></details>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio B — A decisão automatizada</strong>
          <p>Uma escola quer usar um sistema automático para identificar estudantes “com maior risco de baixo desempenho” e priorizar intervenções.</p>
          <ol>
            <li>Apresente um possível benefício.</li>
            <li>Apresente dois riscos éticos.</li>
            <li>Diga que dados seriam necessários para avaliar se o sistema funciona.</li>
            <li>Defina quem deveria poder revisar ou contestar uma classificação.</li>
            <li>Explique por que “a IA decidiu” não encerra a responsabilidade.</li>
          </ol>
          <details><summary>Pista de correção</summary><p>Procure discutir finalidade, qualidade dos dados, erro, transparência, privacidade, supervisão humana, possibilidade de recurso, impactos desiguais e responsabilidade institucional.</p></details>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio C — A obra controversa</strong>
          <p>Uma obra produzida para uma exposição escolar causa forte rejeição: parte dos estudantes diz que “não é arte”; outra parte diz que “se está numa exposição, qualquer coisa é arte”.</p>
          <ol>
            <li>Explique por que as duas frases são insuficientes.</li>
            <li>Analise a obra por pelo menos três critérios: forma, intenção, contexto, expressão, representação, história ou experiência.</li>
            <li>Construa uma objeção à sua própria conclusão.</li>
            <li>Responda à objeção sem dizer apenas “é minha opinião”.</li>
          </ol>
          <details><summary>Pista de correção</summary><p>O objetivo não é chegar a uma definição universal obrigatória, mas mostrar que critérios podem ser formulados, testados e revisados diante de casos difíceis.</p></details>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio D — A maioria venceu</strong>
          <p>Em uma escola, 80% dos alunos votam por eliminar permanentemente o uso de uma sala por um grupo pequeno, sem permitir que esse grupo apresente defesa ou proponha alternativas.</p>
          <ol>
            <li>O que a votação prova?</li>
            <li>O que ela não prova?</li>
            <li>Que critérios de legitimidade, justiça e pluralismo precisam entrar na análise?</li>
            <li>Proponha um procedimento melhor.</li>
            <li>Teste sua regra imaginando que você pertence ao grupo minoritário.</li>
          </ol>
          <details><summary>Pista de correção</summary><p>Uma resposta forte distingue resultado majoritário de justiça, considera direitos, participação, justificativas públicas, possibilidade de contestação e revisão e evita transformar minoria em sinônimo de “grupo que deve sempre vencer”.</p></details>
        </div>

        <h3>9. Caderno de investigação — síntese final</h3>
        <div class="field-box">
          <strong class="card-title">Volte à pergunta que você começou a investigar no capítulo 01</strong>
          <p>Agora escreva uma síntese curta usando esta estrutura:</p>
          <ol>
            <li><strong>Pergunta:</strong> formule-a de modo claro e discutível.</li>
            <li><strong>Posição atual:</strong> responda em uma ou duas frases.</li>
            <li><strong>Razões:</strong> apresente pelo menos duas.</li>
            <li><strong>Evidência:</strong> indique o que sustenta afirmações factuais.</li>
            <li><strong>Objeção forte:</strong> formule a melhor objeção que você consegue.</li>
            <li><strong>Resposta:</strong> diga se sua posição resiste ou precisa ser modificada.</li>
            <li><strong>Limite:</strong> registre uma questão que continua aberta.</li>
          </ol>
          <p><strong>Regra final:</strong> mudar de posição porque uma objeção foi boa não é “perder a discussão”. É uma das formas mais claras de mostrar que você está filosofando.</p>
        </div>

        <div class="chapter-checkpoint">
          <strong class="card-title">Rubrica MbB — sua resposta está filosoficamente forte?</strong>
          <div class="four-col">
            <div class="mini-card"><strong>1. Conceitos</strong><p>Você distinguiu palavras que parecem iguais, mas não são?</p></div>
            <div class="mini-card"><strong>2. Razões</strong><p>Sua conclusão tem justificativas que podem ser examinadas?</p></div>
            <div class="mini-card"><strong>3. Evidências</strong><p>Você separou fatos, interpretações e valores?</p></div>
            <div class="mini-card"><strong>4. Autocrítica</strong><p>Você enfrentou uma objeção real e reconheceu limites?</p></div>
          </div>
        </div>

        <div class="curriculum-box">
          <strong>Fechamento da 1ª série</strong>
          <p>O módulo termina retomando atitude filosófica, conhecimento e ciência, ética e liberdade, bioética e tecnologia, estética e arte, justiça e pluralismo. A meta não é produzir alunos que pensem todos igual, mas alunos capazes de <strong>argumentar com clareza, reconhecer evidências, compreender posições diferentes e revisar as próprias razões</strong>.</p>
        </div>
      `
    });
  }

  MBB.enableChapter?.('99 Exercícios e desafios', showChapter);
})();