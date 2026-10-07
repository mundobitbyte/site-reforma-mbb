(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  let pauseTimerId = null;
  let pauseSeconds = 240;

  function formatPause(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  function renderPauseTimer(root) {
    const display = $('#movementPauseTimer', root);
    if (display) display.textContent = formatPause(pauseSeconds);
  }

  function stopPauseTimer() {
    if (pauseTimerId) clearInterval(pauseTimerId);
    pauseTimerId = null;
  }

  function startPauseTimer(root) {
    if (pauseTimerId || pauseSeconds <= 0) return;
    pauseTimerId = setInterval(() => {
      pauseSeconds -= 1;
      renderPauseTimer(root);
      if (pauseSeconds <= 0) {
        stopPauseTimer();
        const note = $('#movementPauseNote', root);
        if (note) note.innerHTML = '<strong>Quatro minutos concluídos.</strong> Compare suas sensações de antes e depois sem procurar um “resultado certo”.';
      }
    }, 1000);
  }

  function resetPauseTimer(root) {
    stopPauseTimer();
    pauseSeconds = 240;
    renderPauseTimer(root);
    const note = $('#movementPauseNote', root);
    if (note) note.textContent = 'Quando estiver pronto, afaste-se da tela e inicie.';
  }

  function updateClaimLab(root) {
    const claim = $('#mediaClaim', root)?.value || 'miracle';
    const source = $('#mediaSource', root)?.value || 'influencer';
    const evidence = $('#mediaEvidence', root)?.value || 'beforeafter';
    const out = $('#mediaClaimFeedback', root);
    if (!out) return;

    const claimText = {
      miracle:'promete resultado grande e rápido para qualquer pessoa',
      certainty:'usa palavras como “garantido”, “sempre” e “sem erro”',
      balanced:'apresenta uma proposta possível, admite limites e evita garantia de resultado individual'
    }[claim];
    const sourceText = {
      influencer:'o autor é um perfil de rede social cuja formação, conflito de interesse ou fonte precisam ser verificados',
      brand:'há uma marca vendendo produto ou serviço, portanto existe interesse comercial que deve ficar visível',
      institution:'a informação vem de uma instituição reconhecida, mas ainda precisa ser lida no contexto e conferida na fonte original'
    }[source];
    const evidenceText = {
      beforeafter:'a principal “prova” é uma imagem de antes/depois ou depoimento individual, que não demonstra sozinha causa e efeito',
      study:'há referência a estudo ou diretriz identificável, o que permite conferir população, método, limites e conclusão',
      none:'não há fonte verificável apresentada'
    }[evidence];

    const level = claim === 'balanced' && evidence === 'study' ? 'Sinal mais favorável' : evidence === 'none' || claim === 'miracle' ? 'Sinal de alerta alto' : 'Precisa de verificação';
    out.innerHTML = `<strong>${level}</strong><p>A mensagem ${claimText}; ${sourceText}; e ${evidenceText}.</p><p>O próximo passo não é “acreditar” ou “cancelar” pela aparência do post: é perguntar <strong>qual é a afirmação, qual é a fonte, qual é a evidência e para quem ela realmente vale</strong>.</p>`;
  }

  function updateMetricLab(root) {
    const metric = $('#metricType', root)?.value || 'steps';
    const out = $('#metricFeedback', root);
    if (!out) return;

    const data = {
      steps:{title:'Passos',text:'Podem ajudar a perceber tendência de deslocamento ao longo dos dias, mas não registram igualmente bicicleta, musculação, natação ou outras formas de atividade. Um número baixo não significa automaticamente “dia ruim”.'},
      active:{title:'Minutos ativos',text:'Podem organizar a rotina, mas dependem de como o aparelho classifica intensidade e movimento. Use como pista para observar padrões, não como certificado de saúde.'},
      heart:{title:'Frequência cardíaca',text:'Sensores de pulso podem ser úteis para acompanhar tendências em certas situações, mas precisão varia entre dispositivos, atividades e pessoas. Um relógio de consumo não substitui avaliação clínica.'},
      calories:{title:'Calorias / gasto energético',text:'É uma estimativa calculada por algoritmo. Revisões de validação mostram erro importante para gasto energético em dispositivos de consumo. Não trate o valor como medida exata nem como obrigação de “compensar” comida ou exercício.'},
      sleep:{title:'Sono estimado',text:'Relógios podem sugerir padrões de horário e duração, mas estágios e qualidade do sono são inferências do dispositivo. Uma pontuação não deve definir sozinha como você “deveria” se sentir.'}
    }[metric];

    out.innerHTML = `<strong>${data.title}</strong><p>${data.text}</p><p><strong>Regra MbB:</strong> métrica útil é aquela que ajuda a fazer uma pergunta melhor. Se o número aumenta ansiedade, comparação ou comportamento extremo, ele deixou de cumprir uma função educativa.</p>`;
  }

  function updateRoutine(root) {
    const checked = $$('[data-routine-choice]:checked', root).map(box => box.value);
    const out = $('#routineFeedback', root);
    if (!out) return;

    if (!checked.length) {
      out.innerHTML = '<strong>Escolha pelo menos uma ação possível.</strong><p>O objetivo não é montar uma rotina “perfeita”; é transformar um dia muito sentado em um dia com mais oportunidades reais de movimento.</p>';
      return;
    }

    const labels = {
      commute:'caminhar parte de um deslocamento quando houver rota segura e possível',
      break:'fazer pequenas pausas de movimento entre períodos longos sentado',
      leisure:'reservar um período para uma prática de lazer que você realmente aceite repetir',
      stairs:'usar escadas quando forem acessíveis e adequadas para você',
      school:'participar ativamente das oportunidades corporais da escola',
      family:'combinar alguma atividade em companhia de amigos ou família'
    };

    out.innerHTML = `<strong>Plano possível, não punição:</strong><p>${checked.map(item => labels[item]).join('; ')}.</p><p>Depois de alguns dias, observe: <strong>o que realmente coube na rotina?</strong> Ajuste a estratégia em vez de concluir que “faltou força de vontade”.</p>`;
  }

  function init(root) {
    ['mediaClaim','mediaSource','mediaEvidence'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updateClaimLab(root));
    });
    updateClaimLab(root);

    $('#movementPauseStart', root)?.addEventListener('click', () => startPauseTimer(root));
    $('#movementPausePause', root)?.addEventListener('click', stopPauseTimer);
    $('#movementPauseReset', root)?.addEventListener('click', () => resetPauseTimer(root));
    resetPauseTimer(root);

    $('#metricType', root)?.addEventListener('change', () => updateMetricLab(root));
    updateMetricLab(root);

    $$('[data-routine-choice]', root).forEach(box => box.addEventListener('change', () => updateRoutine(root)));
    updateRoutine(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Corpo, movimento e saúde',
      technical:'atividade física • comportamento sedentário • saúde • imagem corporal • mídia • algoritmo • publicidade • wearables • métricas • evidência • autonomia',
      title:'09 — Corpo, saúde, mídia e tecnologia',
      objective:'<strong>Objetivo:</strong> analisar criticamente mensagens sobre corpo e exercício, usar recomendações de saúde sem transformá-las em cobrança estética e interpretar dados de aplicativos e relógios como estimativas e pistas — não como vereditos sobre o próprio corpo.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Seu corpo não é um placar</span>
          <div class="hero-box">
            <strong class="card-title">A turma vai produzir a campanha “Movimento sem Filtro”. No mesmo dia, três mensagens aparecem no celular.</strong>
            <p>Um vídeo promete “transformar seu corpo em 14 dias”. Um relógio avisa que você “não bateu a meta”. E um colega compartilha uma foto dizendo que aquele é o “corpo saudável”.</p>
            <p>As três mensagens parecem falar de saúde, mas misturam <strong>atividade física, aparência, marketing, algoritmo e comparação</strong>.</p>
            <p>A missão será construir uma campanha que ajude outros estudantes a se moverem mais <strong>sem humilhação, promessa milagrosa ou escravidão aos números</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como usar informação e tecnologia para cuidar do corpo sem deixar que mídia, aparência ou métricas decidam sozinhas o que é saúde?</p>
          </div>
        </section>

        <div class="ef-tags"><span>saúde</span><span>movimento</span><span>mídia</span><span>corpo</span><span>métricas</span><span>evidência</span><span>autonomia</span></div>

        <h3>1. Saúde não cabe em uma fotografia</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Aparência</strong><p>Mostra apenas características visíveis em determinado momento, ângulo, luz e edição. Não revela sozinha condicionamento, força, hábitos, saúde mental, sono ou condições clínicas.</p></div>
          <div class="mini-card"><strong>Capacidade</strong><p>O corpo também pode ser percebido pelo que consegue fazer: caminhar, brincar, carregar, dançar, equilibrar, recuperar-se, aprender movimentos e participar.</p></div>
          <div class="mini-card"><strong>Experiência</strong><p>Prazer, pertencimento, cansaço, medo, autonomia e relação com outras pessoas influenciam se uma prática corporal será sustentável.</p></div>
          <div class="mini-card"><strong>Contexto</strong><p>Tempo disponível, segurança, acesso, deficiência, recursos, cultura, escola e condições de vida mudam as possibilidades de prática.</p></div>
        </div>

        <div class="note-box"><strong>Imagem corporal merece cuidado.</strong><p>Adolescentes estão em fase de mudanças corporais e podem sofrer forte pressão por comparação. UNICEF alerta que redes sociais podem ampliar padrões idealizados e fazer jovens associarem valor pessoal à aparência. Educação Física não deve reforçar isso.</p></div>

        ${choice('1','Corpo e saúde','Uma postagem mostra uma pessoa muito musculosa e afirma: “este é o corpo saudável”. Qual análise é mais adequada?',[
          ['a','A aparência permite concluir que a pessoa é saudável em todas as dimensões'],
          ['b','A aparência, sozinha, não permite avaliar saúde; é preciso separar estética, capacidade, hábitos, contexto e informações de saúde'],
          ['c','Todo corpo musculoso é resultado de comportamento inadequado']
        ],'b','Correto. Nem idealização nem julgamento inverso: uma imagem não é diagnóstico de saúde.','Evite transformar aparência em diagnóstico, para o bem ou para o mal. Saúde é mais ampla que o que uma fotografia mostra.')}

        <h3>2. Leia o post antes de obedecer ao post</h3>
        <div class="studio-box">
          <strong class="card-title">Feed fictício — analise a linguagem</strong>
          <div class="mini-card" style="max-width:560px;margin:12px auto;border:2px solid #d9e4df">
            <div style="display:flex;gap:10px;align-items:center"><span style="width:38px;height:38px;border-radius:50%;display:inline-grid;place-items:center;background:#1f6f5c;color:#fff;font-weight:900">MF</span><strong>@movimento_flash</strong></div>
            <p style="font-size:1.15rem;font-weight:900">“7 MINUTOS POR DIA. TRANSFORME SEU CORPO EM 14 DIAS. FUNCIONA PARA TODO MUNDO.”</p>
            <p>#semDesculpas #resultadoGarantido #projetoCorpo</p>
          </div>
          <p>Não precisamos saber se esse perfil existe. O objetivo é reconhecer <strong>estratégias de persuasão</strong>: urgência, certeza, universalização e promessa de transformação.</p>
          <div class="three-col">
            <label class="mini-card"><strong>Tipo de promessa</strong><select id="mediaClaim" style="width:100%"><option value="miracle">Grande e rápida para todos</option><option value="certainty">Certeza / resultado garantido</option><option value="balanced">Possível, com limites</option></select></label>
            <label class="mini-card"><strong>Quem publica?</strong><select id="mediaSource" style="width:100%"><option value="influencer">Perfil / influenciador</option><option value="brand">Marca ou serviço</option><option value="institution">Instituição reconhecida</option></select></label>
            <label class="mini-card"><strong>Que evidência aparece?</strong><select id="mediaEvidence" style="width:100%"><option value="beforeafter">Antes/depois ou depoimento</option><option value="study">Fonte verificável</option><option value="none">Nenhuma fonte</option></select></label>
          </div>
          <div id="mediaClaimFeedback" class="field-note" aria-live="polite"></div>
        </div>

        ${choice('2','Promessa fitness','Um vídeo usa apenas depoimentos e fotos de “antes e depois” para garantir que um treino funciona para qualquer adolescente. Qual é o principal problema?',[
          ['a','Depoimentos individuais não demonstram sozinhos que o treino causou o resultado nem que ele vale para qualquer pessoa'],
          ['b','Todo depoimento pessoal é falso'],
          ['c','Vídeos curtos nunca podem ensinar nada']
        ],'a','Isso. O problema é transformar relato e imagem em prova universal de causa e efeito.','Não precisamos atacar a pessoa que publicou. Precisamos avaliar o tipo de evidência usado para sustentar a afirmação.')}

        <h3>3. Recomendação de saúde não é meta estética</h3>
        <div class="source-box">
          <strong class="card-title">Uma referência populacional, não um placar individual</strong>
          <p>A Organização Mundial da Saúde recomenda que crianças e adolescentes de 5–17 anos façam, ao longo da semana, <strong>média de pelo menos 60 minutos por dia de atividade física moderada a vigorosa, principalmente aeróbica</strong>, incluindo atividades vigorosas e de fortalecimento muscular e ósseo em pelo menos 3 dias da semana.</p>
          <p>Isso não significa que um relógio precise mostrar “60” todos os dias nem que quem está começando deva saltar imediatamente para uma meta alta. A própria OMS enfatiza que <strong>alguma atividade é melhor que nenhuma</strong> e que toda atividade conta.</p>
          <p><a href="https://www.who.int/publications/i/item/9789240014886" target="_blank" rel="noopener noreferrer">OMS • Diretrizes sobre atividade física e comportamento sedentário</a></p>
        </div>

        <div class="practice-box">
          <strong class="card-title">Primeiro olhe para o seu dia</strong>
          <p>Sem registrar peso, calorias ou aparência, desenhe uma linha simples do seu dia de ontem: deslocamento, aulas, estudo, trabalho, lazer e sono. Marque os períodos em que você ficou muito tempo sentado e os momentos em que já houve movimento.</p>
          <p>Agora procure <strong>uma oportunidade realista</strong> de aumentar movimento — não a mais impressionante.</p>
        </div>

        <h3>4. Agora saia da tela por quatro minutos</h3>
        <div class="practice-box">
          <strong class="card-title">Pausa de movimento — observe antes, experimente, observe depois</strong>
          <p>Antes de começar, perceba sem dar nota: como estão sua respiração, temperatura corporal, disposição e vontade de continuar sentado?</p>
          <div class="timer-box">
            <div id="movementPauseTimer" class="timer-display" aria-live="polite">04:00</div>
            <div class="timer-controls"><button id="movementPauseStart" type="button">Iniciar</button><button id="movementPausePause" type="button">Pausar</button><button id="movementPauseReset" type="button">Reiniciar</button></div>
            <p id="movementPauseNote" class="field-note">Quando estiver pronto, afaste-se da tela e inicie.</p>
          </div>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>1º minuto</strong><p>Caminhe ou marche confortavelmente no lugar. Versão sentada: alterne pés e braços em ritmo leve.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>2º minuto</strong><p>Acrescente deslocamentos laterais curtos ou movimentos confortáveis de braços e tronco, sem forçar amplitude.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>3º minuto</strong><p>Alterne movimento leve e um pouco mais ativo, mantendo controle e possibilidade de falar. Não é teste máximo.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>4º minuto</strong><p>Reduza o ritmo gradualmente e observe como o corpo responde.</p></div>
          </div>
          <p>Depois compare com o início: algo mudou na respiração, calor, disposição ou vontade de se mover? <strong>Não existe resposta obrigatória.</strong> Registrar “não percebi diferença” também é dado válido.</p>
        </div>

        <div class="safety-box"><strong>Adapte sem culpa.</strong><p>Use movimentos confortáveis e espaço livre. Dor, tontura, mal-estar ou falta de ar incomum são sinais para interromper e avisar o professor. A experiência pode ser totalmente sentada.</p></div>

        <h3>5. Tecnologia mede — e também interpreta</h3>
        <div class="studio-box">
          <strong class="card-title">Painel de métricas — o que este número consegue dizer?</strong>
          <p>Imagine um relógio mostrando vários indicadores. Selecione um. Os valores seriam produzidos por sensores e algoritmos diferentes; o ponto aqui é compreender os limites, não comparar marcas.</p>
          <label class="mini-card"><strong>Métrica</strong><select id="metricType" style="width:100%"><option value="steps">Passos</option><option value="active">Minutos ativos</option><option value="heart">Frequência cardíaca</option><option value="calories">Calorias / gasto energético</option><option value="sleep">Sono estimado</option></select></label>
          <div id="metricFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="note-box"><strong>Número não é diagnóstico.</strong><p>Revisões de validação de wearables mostram que precisão varia conforme dispositivo, métrica, atividade e população. Passos e frequência cardíaca costumam ter desempenho melhor que estimativas de gasto energético, mas nenhum desses números deve ser tratado como verdade absoluta fora de contexto.</p></div>

        ${choice('3','Relógio e realidade','Seu relógio diz que você “gastou 480 kcal” em um treino. Qual interpretação é mais responsável?',[
          ['a','É uma medida exata e deve ser usada para decidir exatamente quanto comer depois'],
          ['b','É uma estimativa do algoritmo; pode ajudar a observar tendências, mas não deve comandar alimentação, culpa ou compensação'],
          ['c','Todo dado de relógio é inútil']
        ],'b','Correto. Tecnologia pode fornecer pistas úteis sem ganhar autoridade absoluta sobre decisões de saúde.','Estimativas de gasto energético em wearables têm limitações relevantes. Evite transformar uma aproximação em obrigação corporal.')}

        <h3>6. Comportamento sedentário não é sinônimo de “preguiça”</h3>
        <p>Estudar, programar, desenhar, ler, trabalhar e viajar podem exigir longos períodos sentado. O problema não se resolve culpando a pessoa. É mais útil olhar para <strong>como o dia está organizado</strong> e criar oportunidades possíveis de movimento.</p>

        <div class="studio-box">
          <strong class="card-title">Monte um plano possível</strong>
          <p>Escolha ações que realmente poderiam existir em uma semana comum. Não é necessário marcar todas.</p>
          <div class="comparison-grid">
            <label class="mini-card"><input type="checkbox" data-routine-choice value="commute"> Caminhar parte de um deslocamento seguro</label>
            <label class="mini-card"><input type="checkbox" data-routine-choice value="break"> Fazer pausas de movimento em períodos longos sentado</label>
            <label class="mini-card"><input type="checkbox" data-routine-choice value="leisure"> Escolher uma prática de lazer que eu aceite repetir</label>
            <label class="mini-card"><input type="checkbox" data-routine-choice value="stairs"> Usar escadas quando forem adequadas e acessíveis</label>
            <label class="mini-card"><input type="checkbox" data-routine-choice value="school"> Aproveitar oportunidades corporais da escola</label>
            <label class="mini-card"><input type="checkbox" data-routine-choice value="family"> Combinar movimento com outras pessoas</label>
          </div>
          <div id="routineFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <h3>7. “Sem desculpas” costuma apagar o contexto</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Tempo</strong><p>Jornada escolar, trabalho e cuidado de familiares podem limitar oportunidades.</p></div>
          <div class="mini-card"><strong>Ambiente</strong><p>Falta de calçada, violência, trânsito ou ausência de espaço seguro influenciam a prática.</p></div>
          <div class="mini-card"><strong>Acesso</strong><p>Equipamento, transporte, mensalidade e informação podem criar barreiras.</p></div>
          <div class="mini-card"><strong>Corpo e deficiência</strong><p>Práticas precisam admitir adaptações reais. A solução não é excluir nem presumir incapacidade.</p></div>
        </div>

        <p>Autonomia não significa responsabilizar individualmente o aluno por tudo. Significa reconhecer condições reais e ainda assim procurar <strong>escolhas possíveis, apoio e estratégias sustentáveis</strong>.</p>

        <h3>8. Volte à campanha “Movimento sem Filtro”</h3>
        <div class="challenge-box">
          <strong class="card-title">Projeto final — uma mensagem que ajuda em vez de pressionar</strong>
          <p>Em grupo, criem um cartaz, card, pequeno carrossel ou roteiro de vídeo de até 60 segundos. Ele precisa conter:</p>
          <ol>
            <li>uma mensagem sobre movimento que não use humilhação corporal;</li>
            <li>uma afirmação apoiada em fonte verificável;</li>
            <li>uma oportunidade prática de movimento possível no cotidiano;</li>
            <li>uma frase explicando que aparência não é diagnóstico de saúde;</li>
            <li>um exemplo de métrica tecnológica acompanhado de seu limite;</li>
            <li>uma alternativa acessível para pessoas com possibilidades corporais diferentes;</li>
            <li>nenhuma promessa de transformação rápida, “corpo ideal” ou resultado garantido.</li>
          </ol>
          <p>Antes de publicar, outra equipe responde três perguntas: <strong>“a mensagem informa ou envergonha?” “a evidência pode ser conferida?” “a proposta cabe na vida de pessoas diferentes?”</strong>. Se uma resposta for problemática, revise.</p>
        </div>

        <div class="source-box"><strong class="card-title">Fontes para continuar investigando</strong><p><a href="https://www.who.int/publications/i/item/9789240014886" target="_blank" rel="noopener noreferrer">OMS • Atividade física e comportamento sedentário</a> • <a href="https://www.unicef.org/parenting/mental-health/teens-body-image" target="_blank" rel="noopener noreferrer">UNICEF • Adolescentes e imagem corporal</a> • <a href="https://pubmed.ncbi.nlm.nih.gov/32897239/" target="_blank" rel="noopener noreferrer">Revisão sistemática • validade de wearables</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Mover-se mais pode fazer bem, mas <strong>saúde não é aparência, postagem não é evidência e métrica não é veredito</strong>. Tecnologia e mídia ficam mais úteis quando o estudante sabe questionar fontes, compreender limites e fazer escolhas corporais possíveis para sua própria realidade.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Questionar</span><span>Experimentar</span><span>Analisar</span><span>Decidir</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('09 Corpo', showChapter);
})();
