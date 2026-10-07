(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const choice = MBB.choice;

  const sceneOptions = {
    objective: {
      convince:'convencer a outra pessoa a abrir a caixa',
      hide:'impedir que a caixa seja aberta',
      discover:'descobrir de quem é a caixa sem tocar nela',
      leave:'sair do lugar sem revelar que sabe o que há dentro'
    },
    obstacle: {
      distrust:'a outra pessoa não confia em você',
      time:'faltam poucos segundos para alguém chegar',
      silence:'vocês precisam falar baixo',
      audience:'há alguém observando e vocês não querem explicar tudo'
    },
    relation: {
      friends:'vocês são amigos, mas discordam sobre o que fazer',
      strangers:'vocês nunca se viram antes',
      siblings:'vocês se conhecem muito bem e carregam uma história anterior',
      rivals:'vocês competem e nenhum quer parecer vulnerável'
    },
    space: {
      corridor:'um corredor estreito da escola',
      yard:'um pátio aberto, com pessoas passando',
      room:'uma sala quase vazia',
      street:'uma praça ou rua onde o público pode se aproximar'
    }
  };

  function updateSceneEngine(root) {
    const objective = $('#sceneObjective', root);
    const obstacle = $('#sceneObstacle', root);
    const relation = $('#sceneRelation', root);
    const space = $('#sceneSpace', root);
    const out = $('#sceneEngineOutput', root);
    if (!objective || !obstacle || !relation || !space || !out) return;

    out.innerHTML = `
      <strong>Seu motor de cena</strong>
      <p><strong>Objetivo:</strong> ${sceneOptions.objective[objective.value]}.</p>
      <p><strong>Obstáculo:</strong> ${sceneOptions.obstacle[obstacle.value]}.</p>
      <p><strong>Relação:</strong> ${sceneOptions.relation[relation.value]}.</p>
      <p><strong>Espaço:</strong> ${sceneOptions.space[space.value]}.</p>
      <p><strong>Teste:</strong> faça 20 segundos sem explicar a história. O público consegue perceber quem quer o quê apenas por ações, distância, pausa, olhar e voz?</p>
    `;
  }

  function updateStageMap(root) {
    const mode = $('#stageRelation', root);
    const svg = $('#stageMap', root);
    const note = $('#stageMapNote', root);
    if (!mode || !svg || !note) return;

    const a = $('#actorA', svg);
    const b = $('#actorB', svg);
    const aLabel = $('#actorALabel', svg);
    const bLabel = $('#actorBLabel', svg);
    const prop = $('#stageProp', svg);
    const settings = {
      close:[225,155,315,155,270,155,'Proximidade pode sugerir intimidade, cooperação, disputa ou pressão — o sentido depende da ação.'],
      distance:[130,155,410,155,270,155,'A distância amplia o vazio entre os corpos e pode sugerir separação, vigilância, medo ou formalidade.'],
      object:[185,155,355,155,270,155,'Quando o objeto ocupa o centro, ele passa a organizar olhares, trajetórias e disputa de atenção.'],
      same:[180,155,360,155,270,250,'Lado a lado, olhando na mesma direção, os corpos podem construir aliança ou objetivo compartilhado.']
    };
    const [ax,ay,bx,by,px,py,text] = settings[mode.value] || settings.close;
    a?.setAttribute('cx', ax); a?.setAttribute('cy', ay);
    b?.setAttribute('cx', bx); b?.setAttribute('cy', by);
    aLabel?.setAttribute('x', ax); aLabel?.setAttribute('y', ay + 6);
    bLabel?.setAttribute('x', bx); bLabel?.setAttribute('y', by + 6);
    prop?.setAttribute('x', px - 25); prop?.setAttribute('y', py - 18);
    note.innerHTML = `<strong>Leia o espaço:</strong> ${text}`;
  }

  function updateObjectLab(root) {
    const object = $('#objectChoice', root);
    const intention = $('#objectIntention', root);
    const out = $('#objectLabOutput', root);
    if (!object || !intention || !out) return;

    const objects = {
      chair:'uma cadeira',
      cloth:'um pedaço de tecido',
      box:'uma caixa',
      bottle:'uma garrafa vazia'
    };
    const intentions = {
      protect:'proteger algo',
      impress:'impressionar alguém',
      escape:'preparar uma fuga',
      remember:'recordar alguém ou algum acontecimento'
    };
    out.innerHTML = `<strong>Proposta de improvisação:</strong><p>Use ${objects[object.value]} para <strong>${intentions[intention.value]}</strong>, mas sem dizer diretamente o que o objeto “representa”. Transforme seu significado por modo de segurar, distância, cuidado, ritmo e relação com a outra pessoa.</p>`;
  }

  function init(root) {
    ['#sceneObjective','#sceneObstacle','#sceneRelation','#sceneSpace'].forEach(sel => {
      $(sel, root)?.addEventListener('change', () => updateSceneEngine(root));
    });
    updateSceneEngine(root);

    $('#stageRelation', root)?.addEventListener('change', () => updateStageMap(root));
    updateStageMap(root);

    ['#objectChoice','#objectIntention'].forEach(sel => {
      $(sel, root)?.addEventListener('change', () => updateObjectLab(root));
    });
    updateObjectLab(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Cena',
      technical:'ação dramática • personagem • objetivo • obstáculo • conflito • espaço cênico • corpo • voz • improvisação • objeto de cena • espectador',
      title:'06 — Teatro: personagem, espaço e ação',
      objective:'<strong>Objetivo:</strong> compreender o teatro como acontecimento coletivo construído por ações, relações, corpo, voz, espaço, objetos e presença do público, experimentando formas simples de criar e analisar cenas.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão cênica</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” ganhou uma cena de 90 segundos — mas ninguém recebeu um texto pronto.</strong>
            <p>Há apenas uma situação: <strong>uma caixa apareceu no corredor</strong>. Duas pessoas chegam quase ao mesmo tempo. Uma quer abrir. A outra quer impedir. O público entra justamente nesse momento.</p>
            <p>Como transformar essa situação em teatro sem explicar tudo por fala? Você terá de organizar <strong>ação, intenção, obstáculo, distância, olhar, voz, objeto e espaço</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que faz uma ação cotidiana virar acontecimento teatral?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Elementos da linguagem teatral">
          <span>ação</span><span>personagem</span><span>objetivo</span><span>obstáculo</span><span>espaço</span><span>corpo</span><span>voz</span><span>objeto</span><span>público</span>
        </div>

        <h3>1. Teatro não depende de um prédio específico</h3>
        <div class="art-gallery">
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Teatro_Municipal_SP.jpg?width=850" alt="Fachada do Theatro Municipal de São Paulo, edifício histórico de espetáculos no centro da cidade.">
            <figcaption class="artwork-meta"><strong>Um teatro-edifício</strong><small>Theatro Municipal de São Paulo. Um espaço arquitetônico criado para receber espetáculos e público.</small><a href="https://commons.wikimedia.org/wiki/File:Teatro_Municipal_SP.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC BY 2.0</a></figcaption>
          </figure>
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Esquadrao_da_vida.jpg?width=850" alt="Grupo de teatro de rua Esquadrão da Vida se apresentando em espaço aberto em Brasília.">
            <figcaption class="artwork-meta"><strong>Teatro de rua</strong><small>Esquadrão da Vida, Brasília. O espaço urbano também pode ser espaço cênico.</small><a href="https://commons.wikimedia.org/wiki/File:Esquadrao_da_vida.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC BY-SA 3.0</a></figcaption>
          </figure>
          <figure class="artwork-card">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Cida_Lopes_com_Boneco_de_Mamulengo.jpg?width=850" alt="Artista brasileira manipulando um boneco de mamulengo, tradição de teatro popular de bonecos de Pernambuco.">
            <figcaption class="artwork-meta"><strong>Mamulengo</strong><small>Teatro popular de bonecos de Pernambuco: personagem, voz, manipulação, ritmo e relação com o público podem acontecer por meio do boneco.</small><a href="https://commons.wikimedia.org/wiki/File:Cida_Lopes_com_Boneco_de_Mamulengo.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • CC BY 4.0</a></figcaption>
          </figure>
        </div>

        ${choice('1','Espaço cênico','Qual conclusão é mais adequada depois de comparar essas imagens?',[
          ['a','Teatro só existe em edifícios construídos para espetáculos'],
          ['b','O acontecimento teatral pode ocupar diferentes espaços; cada espaço altera relação, visibilidade, circulação e proximidade com o público'],
          ['c','Teatro de bonecos não utiliza linguagem teatral porque não vemos o corpo inteiro do ator']
        ],'b','Correto. Teatro pode acontecer em palco italiano, rua, pátio, sala, arena, caixa de bonecos ou outros espaços. A organização muda, mas ação, relação e presença continuam centrais.','Evite confundir teatro com o prédio chamado teatro. A linguagem teatral pode ocupar muitos tipos de espaço.')}

        <div class="source-box"><strong class="card-title">Primeira chave</strong><p><strong>Teatro é acontecimento, não apenas edifício nem texto.</strong> Ele envolve alguém realizando ações organizadas num espaço e num tempo, diante de ou em relação com espectadores.</p></div>

        <h3>2. Movimento e ação não são exatamente a mesma coisa</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Movimento</strong><p>“A pessoa atravessa a sala.” Descreve o que o corpo faz.</p></div>
          <div class="mini-card"><strong>Ação dramática</strong><p>“A pessoa atravessa a sala para esconder a chave antes que alguém entre.” O movimento ganhou intenção e consequência.</p></div>
        </div>
        <div class="studio-box"><strong class="card-title">Experimento de 15 segundos</strong><p>Faça ou imagine a ação <strong>“sentar numa cadeira”</strong> quatro vezes: para descansar; para bloquear uma porta; para esperar uma notícia; para desafiar alguém. O gesto básico é parecido, mas postura, velocidade, olhar, distância e pausa tendem a mudar.</p></div>

        ${choice('2','Ação','O que transforma mais claramente um movimento em ação dramática?',[
          ['a','Ter um objetivo dentro de uma situação'],
          ['b','Fazer o movimento muito rápido'],
          ['c','Usar figurino caro']
        ],'a','Isso. Em cena, perguntar “o que essa pessoa quer conseguir agora?” ajuda a tornar a ação legível.','Velocidade e figurino podem alterar a cena, mas intenção e situação dão direção à ação.')}

        <h3>3. Personagem não nasce apenas do figurino</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Objetivo</strong><p>O que a personagem quer obter, evitar, descobrir ou mudar nesta cena?</p></div>
          <div class="mini-card"><strong>Obstáculo</strong><p>O que dificulta esse objetivo? Outra pessoa, o tempo, uma regra, medo, informação incompleta?</p></div>
          <div class="mini-card"><strong>Relação</strong><p>Como ela se posiciona diante das outras pessoas? Confia, teme, admira, disputa, protege?</p></div>
        </div>
        <div class="note-box"><strong>Conflito não significa gritaria.</strong><p>Conflito dramático pode ser simplesmente a existência de forças ou objetivos incompatíveis. Duas pessoas educadas podem estar em forte conflito; duas pessoas gritando podem não ter objetivo cênico claro.</p></div>

        ${choice('3','Conflito','Na situação da caixa, qual elemento cria conflito de forma mais clara?',[
          ['a','Uma personagem quer abrir e a outra quer impedir'],
          ['b','As duas usam roupas diferentes'],
          ['c','As duas ficam no mesmo espaço sem querer nada']
        ],'a','Correto. Objetivos incompatíveis produzem tensão e obrigam as personagens a agir.','Procure forças em direções diferentes: querer versus impedir, revelar versus esconder, ficar versus sair.')}

        <h3>4. Scene Engine — construa antes de decorar falas</h3>
        <div class="studio-box">
          <strong class="card-title">Motor de cena</strong>
          <p>Troque as condições e observe como a mesma caixa gera cenas diferentes.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Objetivo</strong><select id="sceneObjective" style="width:100%;margin-top:8px"><option value="convince">Convencer a abrir</option><option value="hide">Impedir que abra</option><option value="discover">Descobrir de quem é</option><option value="leave">Sair sem revelar o que sabe</option></select></label>
            <label class="mini-card"><strong>Obstáculo</strong><select id="sceneObstacle" style="width:100%;margin-top:8px"><option value="distrust">Desconfiança</option><option value="time">Pouco tempo</option><option value="silence">Precisam falar baixo</option><option value="audience">Alguém observa</option></select></label>
            <label class="mini-card"><strong>Relação</strong><select id="sceneRelation" style="width:100%;margin-top:8px"><option value="friends">Amigos</option><option value="strangers">Desconhecidos</option><option value="siblings">Irmãos</option><option value="rivals">Rivais</option></select></label>
            <label class="mini-card"><strong>Espaço</strong><select id="sceneSpace" style="width:100%;margin-top:8px"><option value="corridor">Corredor</option><option value="yard">Pátio</option><option value="room">Sala vazia</option><option value="street">Praça/rua</option></select></label>
          </div>
          <div id="sceneEngineOutput" class="source-box" aria-live="polite"></div>
        </div>

        <h3>5. Corpo e voz carregam informação</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Corpo</strong><p>Postura, direção do olhar, distância, ritmo, tensão muscular, gesto, imobilidade e orientação em relação ao outro.</p></div>
          <div class="mini-card"><strong>Voz</strong><p>Volume adequado, ritmo, pausa, articulação, entonação, intenção e direção. <strong>Projetar a voz não é gritar.</strong></p></div>
        </div>
        <div class="challenge-box"><strong class="card-title">Uma frase, quatro intenções</strong><p>Diga ou imagine a frase <strong>“Você chegou.”</strong> como alívio, acusação, surpresa e medo. Não troque as palavras. O que muda na pausa, intensidade, velocidade, olhar e postura?</p></div>

        ${choice('4','Voz e sentido','Por que a mesma frase pode produzir sentidos diferentes?',[
          ['a','Porque entonação, pausa, ritmo, intensidade e situação modificam como ela é recebida'],
          ['b','Porque palavras não têm nenhuma importância no teatro'],
          ['c','Porque somente o volume alto produz interpretação']
        ],'a','Isso. Texto verbal é uma camada da cena; corpo, voz, relação e contexto também constroem sentido.','Não reduza interpretação a “falar forte”. Escute ritmo, pausa, direção e intenção.')}

        <h3>6. Espaço também conta a história</h3>
        <div class="studio-box">
          <strong class="card-title">Stage Map</strong>
          <p>Veja de cima um espaço cênico simplificado. Mude a relação entre duas pessoas e o objeto.</p>
          <label class="mini-card"><strong>Organização</strong><select id="stageRelation" style="width:100%;margin-top:8px"><option value="close">Muito próximos</option><option value="distance">Muito distantes</option><option value="object">Objeto entre os dois</option><option value="same">Lado a lado</option></select></label>
          <svg id="stageMap" viewBox="0 0 540 310" role="img" aria-label="Diagrama visto de cima com dois atores e uma caixa no espaço cênico" style="display:block;width:100%;max-width:680px;margin:14px auto;border:1px solid #d9cbd4;border-radius:12px;background:#faf7f9">
            <rect x="30" y="30" width="480" height="250" rx="16" fill="#fff" stroke="#9f8395" stroke-width="2"/>
            <text x="270" y="55" text-anchor="middle" font-size="14" fill="#6d5364">espaço cênico</text>
            <circle id="actorA" cx="225" cy="155" r="28" fill="#8c4f7c"/><text id="actorALabel" x="225" y="161" text-anchor="middle" font-size="16" fill="#fff">A</text>
            <circle id="actorB" cx="315" cy="155" r="28" fill="#355f7a"/><text id="actorBLabel" x="315" y="161" text-anchor="middle" font-size="16" fill="#fff">B</text>
            <rect id="stageProp" x="245" y="137" width="50" height="36" rx="5" fill="#d69a55" stroke="#855b2d"/>
          </svg>
          <div id="stageMapNote" class="choice-feedback" aria-live="polite"></div>
        </div>
        <div class="source-box"><strong class="card-title">Marcação cênica</strong><p>Posições, trajetórias, entradas, saídas e distâncias podem ser planejadas. O espaço não é apenas o fundo da cena: ele organiza relações de poder, proximidade, segredo, exposição e atenção do público.</p></div>

        <h3>7. Um objeto pode ganhar muitas vidas</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Cida_Lopes_com_Boneco_de_Mamulengo.jpg?width=750" alt="Artista manipulando um boneco de mamulengo; o objeto ganha presença de personagem pela manipulação e pela voz.">
          <div><span class="lesson-kicker">Objeto + ação + imaginação</span><strong class="card-title">Quando matéria vira presença cênica</strong><p>No mamulengo, madeira, tecido e pintura não “agem sozinhos”. Manipulação, voz, ritmo, posição e relação com o público constroem presença e personagem.</p><p>Em outras cenas, uma cadeira pode ser assento, barreira, trono, abrigo ou algo totalmente diferente — desde que a ação sustente essa transformação.</p></div>
        </div>

        <div class="studio-box">
          <strong class="card-title">Object Lab</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Objeto</strong><select id="objectChoice" style="width:100%;margin-top:8px"><option value="chair">Cadeira</option><option value="cloth">Tecido</option><option value="box">Caixa</option><option value="bottle">Garrafa vazia</option></select></label>
            <label class="mini-card"><strong>Intenção</strong><select id="objectIntention" style="width:100%;margin-top:8px"><option value="protect">Proteger</option><option value="impress">Impressionar</option><option value="escape">Preparar fuga</option><option value="remember">Recordar</option></select></label>
          </div>
          <div id="objectLabOutput" class="source-box" aria-live="polite"></div>
        </div>

        <h3>8. Improvisar não é fazer qualquer coisa</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Escutar</strong><p>Perceber o que o outro realmente fez antes de preparar sua resposta.</p></div>
          <div class="mini-card"><strong>Aceitar a situação</strong><p>Não destruir imediatamente a proposta recebida; trabalhar a partir dela.</p></div>
          <div class="mini-card"><strong>Adicionar</strong><p>Oferecer nova ação, informação ou dificuldade que faça a cena avançar.</p></div>
        </div>
        <div class="note-box"><strong>Regra de segurança e respeito.</strong><p>Improvisação escolar não autoriza contato físico sem acordo, humilhação, exposição pessoal, gritos próximos ao ouvido ou uso inseguro de objetos. O grupo combina limites antes da cena.</p></div>

        ${choice('5','Improvisação','Qual atitude ajuda mais uma improvisação coletiva?',[
          ['a','Escutar a proposta do colega e responder de modo que a situação possa continuar'],
          ['b','Ignorar tudo o que o colega criou e começar outra história'],
          ['c','Tentar ser sempre a pessoa mais engraçada da cena']
        ],'a','Correto. Improvisação depende de atenção, disponibilidade e construção conjunta, não de disputa por protagonismo.','A cena precisa avançar coletivamente. Ouvir e responder costuma ser mais produtivo que competir.')}

        <h3>9. O público também participa do acontecimento</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Esquadrao_da_vida.jpg?width=850" alt="Teatro de rua em Brasília, em espaço aberto onde a relação entre artistas, circulação urbana e público é diferente de uma sala fechada.">
          <div><span class="lesson-kicker">Relação com espectadores</span><strong class="card-title">Quem vê, de onde vê e como pode reagir?</strong><p>Num teatro convencional, a plateia pode estar sentada e frontal. Na rua, espectadores podem chegar depois, circular, ficar muito próximos ou responder diretamente. Em uma sala de aula, cadeiras podem criar arena, corredor ou duas frentes.</p><p>Mudar a posição do público muda parte da cena.</p></div>
        </div>

        <h3>10. Teatro é trabalho coletivo</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Atuação</strong><p>Corpo, voz, ação, presença e relação.</p></div>
          <div class="mini-card"><strong>Direção</strong><p>Organiza escolhas e relações do conjunto da cena.</p></div>
          <div class="mini-card"><strong>Dramaturgia</strong><p>Estrutura situações, ações, falas, conflitos e percurso da cena.</p></div>
          <div class="mini-card"><strong>Cenografia e objetos</strong><p>Constroem relações espaciais e materiais.</p></div>
          <div class="mini-card"><strong>Figurino e maquiagem</strong><p>Participam da construção visual e contextual.</p></div>
          <div class="mini-card"><strong>Luz e som</strong><p>Orientam atenção, tempo, atmosfera e transições.</p></div>
        </div>
        <div class="source-box"><strong class="card-title">Nem todo aluno precisa atuar.</strong><p>Uma montagem teatral envolve muitas funções. Planejar espaço, criar objeto, operar som, organizar luz, escrever, dirigir, divulgar e observar criticamente também fazem parte da experiência teatral.</p></div>

        <h3>11. Missão final — 60 a 90 segundos de cena</h3>
        <div class="challenge-box">
          <strong class="card-title">A caixa no corredor</strong>
          <p>Em grupo de 2 a 4 pessoas, montem uma microcena para a mostra. Quem não quiser atuar pode assumir direção, som, objeto, organização espacial ou registro.</p>
          <ol>
            <li>Definam <strong>quem quer o quê</strong>.</li>
            <li>Criem pelo menos <strong>um obstáculo</strong>.</li>
            <li>Escolham onde o público ficará.</li>
            <li>Planejem uma entrada, uma mudança espacial e uma pausa.</li>
            <li>Usem a caixa ou outro objeto seguro com função clara.</li>
            <li>Façam um primeiro ensaio com poucas falas.</li>
            <li>Perguntem a quem assistiu: <strong>“O que você entendeu que cada pessoa queria?”</strong></li>
            <li>Revisem a cena com base nessa resposta.</li>
          </ol>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Teatro acontece quando ações, objetivos, obstáculos, personagens, corpo, voz, espaço, objetos e espectadores são organizados em relação. Texto pode participar, mas não trabalha sozinho. Criar cena é experimentar, observar o efeito e revisar coletivamente.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('06 Teatro', showChapter);
})();