(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Revoluções e direitos',
      technical:'Revolução Inglesa • Parlamento • Bill of Rights • Iluminismo • direitos • limites ao poder • soberania',
      title:'De onde veio a ideia de que o poder do governante deve ter limites?',
      objective:'<strong>Objetivo:</strong> compreender os conflitos políticos ingleses do século XVII e relacioná-los ao desenvolvimento de ideias iluministas sobre direitos, consentimento, soberania e limites ao poder, sem transformar esse processo numa marcha inevitável até a democracia atual.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Quem pode dizer “não” ao governante?</strong>
            <p>Imagine um rei que afirma ter autoridade para cobrar recursos, prender opositores e governar sem aceitar interferência de uma assembleia. Do outro lado, grupos políticos afirmam que certas decisões dependem de leis e instituições que o próprio rei não pode ignorar.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quando o poder político deixa de ser legítimo — e quem tem autoridade para limitá-lo?</p>
          </div>
        </section>

        <h3>1. Na Inglaterra, rei e Parlamento já disputavam poder antes da guerra civil</h3>
        <p>No século XVII, a monarquia inglesa não funcionava exatamente como a francesa. O Parlamento possuía tradição de participação em questões como tributação e elaboração de leis. Sob os reis Stuart, conflitos sobre impostos, religião, prerrogativas reais e autoridade parlamentar se intensificaram.</p>
        <div class="two-col">
          <div class="mini-card"><strong>A Coroa</strong><p>Defendia amplas prerrogativas do rei e buscava recursos para governar, guerrear e administrar o reino.</p></div>
          <div class="mini-card"><strong>O Parlamento</strong><p>Reunia elites políticas e proprietárias que disputavam com a Coroa quem poderia autorizar impostos, controlar decisões e definir limites legais.</p></div>
        </div>
        <div class="note-box"><strong>Não era uma disputa simples entre “ditadura e democracia”.</strong><p>Os grupos parlamentares não defendiam sufrágio universal nem igualdade política moderna. Havia interesses religiosos, econômicos, regionais e sociais muito diferentes em conflito.</p></div>

        ${choice('1','Conflito político','Qual leitura evita simplificar o conflito inglês do século XVII?',[['a','Rei e Parlamento disputavam autoridade, recursos, religião e limites legais em uma sociedade ainda profundamente desigual'],['b','O Parlamento já representava democraticamente toda a população'],['c','A guerra aconteceu apenas porque duas pessoas não se gostavam']],'a','Correto. O conflito envolvia instituições, interesses e visões de autoridade, não uma oposição simples entre passado e democracia moderna.','Evite projetar o sistema democrático atual diretamente sobre Parlamento e sociedade do século XVII.')}

        <h3>2. A Guerra Civil mostrou que a autoridade do rei podia ser contestada pela força</h3>
        <p>Em 1642, os conflitos desembocaram em guerra civil entre forças ligadas ao rei Carlos I e forças parlamentares. O Parlamento venceu militarmente, e em 1649 Carlos I foi julgado e executado.</p>
        <div class="timeline">
          <div class="timeline-item"><strong>1642</strong><p>Início da Guerra Civil entre realistas e parlamentares.</p></div>
          <div class="timeline-item"><strong>1649</strong><p>Execução de Carlos I e proclamação de uma república, a Commonwealth.</p></div>
          <div class="timeline-item"><strong>1653–1658</strong><p>Oliver Cromwell governou como Lord Protector, concentrando grande autoridade política e militar.</p></div>
          <div class="timeline-item"><strong>1660</strong><p>A monarquia foi restaurada com Carlos II.</p></div>
        </div>
        <div class="concept-box"><strong>Revolução não significa caminho reto.</strong><p>Em poucos anos, a Inglaterra passou por monarquia, guerra civil, república, protetorado e restauração monárquica. Processos políticos podem avançar, recuar e produzir resultados que seus participantes não previram.</p></div>

        ${choice('2','Processo histórico','Por que a sequência 1642–1660 é importante para evitar uma narrativa linear?',[['a','Porque mostra mudanças de regime, conflitos e restauração, e não uma passagem direta da monarquia à democracia'],['b','Porque nada mudou no período'],['c','Porque o Parlamento desapareceu definitivamente']],'a','Isso. A transformação política foi conflituosa, reversível e cheia de resultados inesperados.','Uma revolução deve ser estudada como processo, não como uma seta inevitável apontando para o presente.')}

        <h3>3. Em 1688–1689, uma nova crise redefiniu a relação entre Coroa e Parlamento</h3>
        <p>Depois da Restauração, tensões políticas e religiosas continuaram. Em 1688, Jaime II perdeu apoio de setores importantes das elites inglesas. Guilherme de Orange desembarcou na Inglaterra, Jaime deixou o reino e o Parlamento reconheceu Guilherme III e Maria II como monarcas.</p>
        <p>O episódio ficou conhecido como <strong>Revolução Gloriosa</strong>. Em 1689, o <strong>Bill of Rights</strong> estabeleceu limites importantes à Coroa e reforçou prerrogativas parlamentares.</p>
        <div class="source-box">
          <span class="source-label">Fonte histórica real — Bill of Rights (1689) • síntese didática</span>
          <p>O documento rejeitava práticas como suspender leis ou cobrar determinados tributos sem consentimento parlamentar e afirmava prerrogativas do Parlamento.</p>
          <p class="source-meta">A síntese destaca pontos centrais do documento sem tratá-lo como uma declaração universal de direitos nos moldes atuais.</p>
        </div>
        <div class="note-box"><strong>Limitar o rei não tornou todos politicamente iguais.</strong><p>O novo arranjo fortaleceu o Parlamento e a monarquia constitucional, mas participação política continuou restrita por propriedade, gênero, religião e posição social.</p></div>

        ${choice('3','Bill of Rights','Qual conclusão o Bill of Rights de 1689 sustenta melhor?',[['a','O rei continuou podendo suspender qualquer lei sem contestação'],['b','A autoridade real passou a operar com limites institucionais e maior dependência do Parlamento'],['c','Todas as pessoas adultas receberam imediatamente direito de voto']],'b','Correto. O documento reforçou limites à Coroa e prerrogativas parlamentares, mas não criou sufrágio universal.','Limitação do poder monárquico e igualdade política universal são coisas diferentes.')}

        <h3>4. O Iluminismo não foi um partido com uma única doutrina</h3>
        <p>No século XVIII, pensadores de diferentes lugares passaram a criticar tradições políticas, religiosas e sociais usando argumentos sobre razão, experiência, liberdade, tolerância, direitos e organização do poder. Chamamos esse conjunto plural de <strong>Iluminismo</strong>.</p>
        <div class="three-col">
          <div class="mini-card"><strong>Crítica</strong><p>Instituições deveriam poder ser questionadas, e não aceitas apenas porque eram antigas.</p></div>
          <div class="mini-card"><strong>Razão e debate</strong><p>Argumentos, observação e discussão pública ganharam valor como meios de avaliar ideias.</p></div>
          <div class="mini-card"><strong>Reforma política</strong><p>Diferentes autores discutiram direitos, tolerância, representação, leis, soberania e divisão do poder.</p></div>
        </div>
        <div class="note-box"><strong>“Os iluministas pensavam...” quase sempre precisa de complemento.</strong><p>Locke, Montesquieu, Voltaire e Rousseau discordavam em vários pontos. O rótulo ajuda a estudar um ambiente intelectual, não uma opinião única.</p></div>

        ${choice('4','Iluminismo','Qual frase representa melhor o Iluminismo?',[['a','Um conjunto plural de debates e críticas sobre conhecimento, sociedade e poder'],['b','Uma doutrina única em que todos os autores defendiam exatamente a mesma política'],['c','Um movimento contrário ao uso da razão']],'a','Isso. Há temas compartilhados, mas também diferenças importantes entre autores e contextos.','Não transforme uma corrente intelectual plural em uma lista de frases iguais.')}

        <h3>5. Locke: governo existe para proteger direitos, não para possuir a sociedade</h3>
        <p>John Locke, escrevendo no contexto das disputas políticas inglesas do século XVII, defendeu que o poder político legítimo depende do consentimento e deve proteger direitos. Quando um governo viola sistematicamente a confiança que recebeu, pode perder legitimidade.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Direitos</strong><p>Vida, liberdade e propriedade aparecem como referências fundamentais em sua reflexão política.</p></div>
          <div class="mini-card"><strong>Consentimento e resistência</strong><p>Governo não é proprietário absoluto dos governados; sua autoridade possui finalidade e limites.</p></div>
        </div>
        <div class="concept-box"><strong>Cuidado com a atualização automática.</strong><p>Locke foi decisivo para tradições liberais posteriores, mas viveu numa sociedade com fortes exclusões e suas ideias não equivalem diretamente à noção contemporânea de direitos humanos universais.</p></div>

        <h3>6. Montesquieu: limitar o poder também significa não concentrá-lo</h3>
        <p>Em <em>O Espírito das Leis</em> (1748), Montesquieu analisou diferentes formas de governo e tornou célebre a defesa de que a liberdade política exige que o poder encontre limites institucionais.</p>
        <p>Sua reflexão inspirou posteriormente modelos de separação e equilíbrio entre funções legislativas, executivas e judiciais. A ideia central não é que as instituições nunca se relacionem, mas que <strong>nenhum centro de poder possa controlar tudo sem contrapesos</strong>.</p>
        <div class="method-box"><strong class="card-title">Pergunte a qualquer sistema político</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Quem cria regras?</strong><p>Onde está a função legislativa?</p></div>
          <div class="method-step"><span>2</span><strong>Quem executa?</strong><p>Quem administra e governa?</p></div>
          <div class="method-step"><span>3</span><strong>Quem julga?</strong><p>Como conflitos e leis são interpretados?</p></div>
          <div class="method-step"><span>4</span><strong>Quem limita quem?</strong><p>Quais mecanismos impedem concentração sem controle?</p></div>
        </div></div>

        ${choice('5','Limites institucionais','Qual situação se aproxima mais do problema que Montesquieu procurava enfrentar?',[['a','Um único governante controla criação das leis, execução e julgamentos sem contrapesos'],['b','Instituições diferentes fiscalizam e limitam umas às outras'],['c','Existem regras públicas para exercício do poder']],'a','Correto. A concentração sem contrapesos aumenta o risco de abuso e ameaça a liberdade política.','A preocupação central é impedir que todo o poder fique reunido sem mecanismos de limitação.')}

        <h3>7. Rousseau mudou a pergunta: de onde vem a soberania?</h3>
        <p>Jean-Jacques Rousseau, em <em>Do Contrato Social</em> (1762), afirmou que a soberania legítima pertence ao povo, não a um monarca por direito próprio. Sua ideia de <strong>vontade geral</strong> procurava pensar uma comunidade em que cidadãos participassem da formação das leis às quais obedecem.</p>
        <p>Essa reflexão não é idêntica à de Locke nem à de Montesquieu. Ela desloca o debate para a origem da autoridade: não basta limitar um governante; é preciso perguntar <strong>quem é o soberano</strong>.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Locke</strong><p>Direitos, consentimento e limites ao governo.</p></div>
          <div class="mini-card"><strong>Montesquieu</strong><p>Organização e equilíbrio institucional do poder.</p></div>
          <div class="mini-card"><strong>Rousseau</strong><p>Soberania popular e participação na formação da vontade política.</p></div>
          <div class="mini-card"><strong>Ponto comum</strong><p>O poder político deixa de parecer naturalmente ilimitado ou propriedade pessoal de um governante.</p></div>
        </div>

        ${choice('6','Comparação de ideias','Qual comparação é mais correta?',[['a','Locke, Montesquieu e Rousseau escreveram a mesma teoria com palavras diferentes'],['b','Eles formularam respostas diferentes para problemas de direitos, limites, instituições e soberania'],['c','Todos defendiam monarquia absoluta de direito divino']],'b','Isso. O valor da comparação está justamente nas diferenças entre as respostas dadas ao problema do poder.','Evite reduzir o Iluminismo a uma doutrina única.')}

        <h3>8. Laboratório MbB: limite ao poder não é uma única invenção</h3>
        <div class="source-box">
          <span class="source-label">Três evidências históricas • síntese didática</span>
          <p><strong>A — Inglaterra, 1689:</strong> o Bill of Rights reforça que a Coroa não pode ignorar certas prerrogativas parlamentares.</p>
          <p><strong>B — Locke:</strong> governo legítimo depende de consentimento e proteção de direitos.</p>
          <p><strong>C — Montesquieu:</strong> a liberdade política exige mecanismos que impeçam concentração sem controle.</p>
        </div>
        <div class="challenge-box">
          <strong>Desafio: construa a relação sem dizer que “uma coisa causou tudo”</strong>
          <p>Explique em 4 a 6 frases como conflitos políticos ingleses e ideias iluministas ajudaram a transformar o debate sobre autoridade. Sua resposta deve mencionar pelo menos duas diferenças entre experiência histórica e teoria política.</p>
          <details><summary>O que uma boa resposta precisa conter?</summary><p>Ela deve mostrar que os conflitos ingleses produziram mudanças institucionais concretas, enquanto pensadores formularam princípios mais gerais sobre direitos, consentimento, soberania e limites. Também deve evitar afirmar que a Inglaterra criou imediatamente uma democracia universal ou que todos os iluministas defendiam a mesma solução.</p></details>
        </div>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo articula Revolução Inglesa e Iluminismo ao estudo de política, poder, direitos, ética e transformação das instituições. Ele prepara o próximo passo: analisar como essas linguagens políticas foram mobilizadas nas revoluções dos Estados Unidos e da França — e quem continuou excluído das promessas de liberdade e igualdade.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> a ideia de limitar o poder não nasceu pronta nem em um único momento. Ela foi construída em conflitos institucionais, disputas sociais e debates intelectuais que redefiniram direitos, consentimento, soberania e autoridade.</div>
      `
    });
  }

  MBB.enableChapter?.('07 Revolução Inglesa', showChapter);
})();
