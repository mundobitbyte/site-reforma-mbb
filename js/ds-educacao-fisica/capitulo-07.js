(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function renderDistance(root, mode = 'medium') {
    const svg = $('#fightDistanceSvg', root);
    const out = $('#fightDistanceFeedback', root);
    if (!svg || !out) return;

    const configs = {
      far:{x1:105,x2:335,label:'distância maior',text:'Com mais espaço entre as pessoas, há mais tempo para perceber deslocamentos e reorganizar a própria posição. Nesta aula, começar longe também reduz a chance de contato acidental.'},
      medium:{x1:145,x2:295,label:'distância intermediária',text:'A aproximação aumenta a necessidade de atenção. O aluno precisa controlar passos, direção e velocidade para não transformar oposição em choque.'},
      close:{x1:175,x2:265,label:'distância pequena',text:'Quanto menor a distância, menor o tempo para reagir e maior a exigência de controle. Por segurança, nossa prática não usa golpes nem contato corporal nessa zona.'}
    };
    const c = configs[mode] || configs.medium;
    const person = (x, dir) => `
      <circle cx="${x}" cy="82" r="18" fill="#1f6f5c"/>
      <line x1="${x}" y1="100" x2="${x}" y2="160" stroke="#1f6f5c" stroke-width="9" stroke-linecap="round"/>
      <line x1="${x}" y1="118" x2="${x + dir * 30}" y2="138" stroke="#1f6f5c" stroke-width="8" stroke-linecap="round"/>
      <line x1="${x}" y1="158" x2="${x - 17}" y2="205" stroke="#1f6f5c" stroke-width="9" stroke-linecap="round"/>
      <line x1="${x}" y1="158" x2="${x + 20}" y2="205" stroke="#1f6f5c" stroke-width="9" stroke-linecap="round"/>`;

    svg.innerHTML = `
      <rect x="5" y="5" width="430" height="225" rx="16" fill="#f7fbfa" stroke="#b8dacf" stroke-width="2"/>
      <line x1="55" y1="208" x2="385" y2="208" stroke="#9fbab1" stroke-width="3"/>
      ${person(c.x1, 1)}${person(c.x2, -1)}
      <line x1="${c.x1 + 38}" y1="55" x2="${c.x2 - 38}" y2="55" stroke="#d97706" stroke-width="4" stroke-dasharray="8 6"/>
      <text x="220" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#8a4b08">${c.label}</text>`;

    out.innerHTML = `<strong>Leitura da distância:</strong><p>${c.text}</p><p>Distância não é “certa” ou “errada” sozinha: depende da modalidade, da regra e do objetivo. Na escola, ela também é uma variável de segurança.</p>`;
  }

  function updateRuleLab(root) {
    const objective = $('#fightObjective', root)?.value || 'ribbon';
    const mobility = $('#fightMobility', root)?.value || 'walk';
    const stop = $('#fightStop', root)?.value || 'voice';
    const out = $('#fightRuleFeedback', root);
    if (!out) return;

    const objectiveText = {
      ribbon:'tocar a ponta visível de uma fita encaixada lateralmente no cós, sem agarrar roupa ou corpo',
      zone:'proteger uma pequena zona marcada no chão e impedir a entrada apenas por posicionamento, sem empurrar',
      mirror:'manter distância combinada enquanto responde aos deslocamentos lentos do colega, sem contato'
    }[objective];
    const mobilityText = {
      walk:'somente caminhar, reduzindo velocidade e colisões',
      step:'usar apenas um ou dois passos antes de precisar reorganizar a posição',
      seated:'realizar a proposta sentado ou com deslocamento muito reduzido, adaptando o objetivo'
    }[mobility];
    const stopText = {
      voice:'parar imediatamente ao ouvir “PAROU”',
      clap:'parar imediatamente ao ouvir duas palmas do professor',
      signal:'parar ao ver o sinal visual combinado'
    }[stop];

    out.innerHTML = `<strong>Jogo proposto:</strong><p>Objetivo: ${objectiveText}. Movimento: ${mobilityText}. Segurança: ${stopText}.</p><p>Antes de começar, a dupla precisa confirmar que entendeu as regras. Se houver desconforto, medo, contato não previsto ou perda de controle, a rodada termina e a regra é revista.</p>`;
  }

  function init(root) {
    $$('[data-fight-distance]', root).forEach(button => {
      button.addEventListener('click', () => renderDistance(root, button.dataset.fightDistance));
    });
    renderDistance(root, 'medium');

    ['fightObjective','fightMobility','fightStop'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updateRuleLab(root));
    });
    updateRuleLab(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Lutas',
      technical:'lutas • oposição • distância • base • equilíbrio • deslocamento • regras • autocontrole • respeito • cultura corporal',
      title:'07 — Distância, equilíbrio, regras e respeito',
      objective:'<strong>Objetivo:</strong> compreender lutas como práticas corporais culturais organizadas por regras, experimentar distância, base, oposição e tomada de decisão de forma segura e distinguir disputa regulada de violência.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">Oposição não é agressão</span>
          <div class="hero-box">
            <strong class="card-title">Na semana cultural da escola, alguém propõe uma estação de lutas. A primeira reação é imediata: “vão ensinar a bater?”</strong>
            <p>Mas uma luta esportiva ou tradicional não é uma briga sem limite. Há regras, objetivos, sinais de início e parada, espaço organizado, autocontrole e formas próprias de relação entre participantes.</p>
            <p>A missão da turma será criar uma <strong>experiência de oposição segura de 5 a 6 minutos</strong> que deixe isso evidente para quem participar.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que transforma uma situação de oposição corporal em uma prática regulada — e por que controle e respeito são parte da técnica?</p>
          </div>
        </section>

        <div class="ef-tags"><span>oposição</span><span>distância</span><span>base</span><span>equilíbrio</span><span>regras</span><span>controle</span><span>respeito</span></div>

        <h3>1. Luta e briga não são sinônimos</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Luta como prática corporal</strong><p>Tem objetivo reconhecido, regras, espaço, acordo entre participantes, formas de começar e terminar e expectativas de autocontrole.</p></div>
          <div class="mini-card"><strong>Briga ou agressão</strong><p>Busca ferir, intimidar ou impor-se fora de um acordo regulado. O outro não é parceiro de aprendizagem nem há garantia de parar quando solicitado.</p></div>
          <div class="mini-card"><strong>Oposição</strong><p>Um participante cria um problema real para o outro resolver. Isso exige percepção, decisão e adaptação — não violência.</p></div>
          <div class="mini-card"><strong>Respeito</strong><p>Não é detalhe moral colocado depois. Sem respeitar limites, regras e sinal de parada, a própria prática perde sua estrutura.</p></div>
        </div>

        ${choice('1','Luta ou briga?','Dois alunos participam de um jogo de oposição com regra clara, objetivo combinado e sinal de parada. Um deles pede para parar. O que deve acontecer?',[
          ['a','A ação continua até alguém vencer'],
          ['b','A atividade para imediatamente; o consentimento e o sinal de parada fazem parte da regra'],
          ['c','Só o professor pode decidir se a pessoa pode parar']
        ],'b','Isso. Controle, consentimento e interrupção imediata são parte da prática segura.','Se uma pessoa sinaliza parada, a atividade termina naquele momento. Vencer nunca vale mais que a integridade do participante.')}

        <h3>2. Diferentes lutas organizam corpo e relação de modos diferentes</h3>
        <div class="two-col">
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Roda_de_capoeira1.jpg?width=900" alt="Roda de capoeira em Porto Alegre, com participantes organizados em círculo ao redor do jogo." style="display:block;width:100%;max-height:360px;object-fit:cover;border-radius:10px">
            <figcaption><strong class="card-title">Capoeira: jogo, música, roda e relação</strong><p>A imagem permite observar que a prática não se resume a dois corpos em oposição: há roda, participantes, música, ritmo e códigos culturais.</p><p><a href="https://commons.wikimedia.org/wiki/File:Roda_de_capoeira1.jpg" target="_blank" rel="noopener noreferrer">Ricardo André Frantz, 2007 • CC BY-SA 3.0 • Wikimedia Commons</a></p></figcaption>
          </figure>
          <figure class="source-box">
            <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Rio_2016_Judo_1036109-090816judo01756.jpg?width=900" alt="Disputa de judô feminino nos Jogos Olímpicos Rio 2016, em área de competição organizada." style="display:block;width:100%;max-height:360px;object-fit:cover;border-radius:10px">
            <figcaption><strong class="card-title">Judô: oposição dentro de um sistema de regras</strong><p>A área de competição, a arbitragem, a roupa, os gestos permitidos e os critérios de pontuação fazem parte da modalidade tanto quanto a ação corporal.</p><p><a href="https://commons.wikimedia.org/wiki/File:Rio_2016_Judo_1036109-090816judo01756.jpg" target="_blank" rel="noopener noreferrer">Fernando Frazão/Agência Brasil, 2016 • CC BY 3.0 BR • Wikimedia Commons</a></p></figcaption>
          </figure>
        </div>

        <div class="note-box"><strong>As imagens não são tutoriais de técnica.</strong><p>Elas servem para comparar <strong>contexto, organização do espaço, participantes, códigos e regras</strong>. Não tente reproduzir golpes ou movimentos observados em fotografias.</p></div>

        <h3>3. Distância muda o problema</h3>
        <div class="studio-box">
          <strong class="card-title">Mapa de distância</strong>
          <p>Observe como aproximar ou afastar os participantes muda tempo de reação e necessidade de controle.</p>
          <div class="choice-row"><button type="button" data-fight-distance="far">Mais longe</button><button type="button" data-fight-distance="medium">Intermediária</button><button type="button" data-fight-distance="close">Mais perto</button></div>
          <svg id="fightDistanceSvg" viewBox="0 0 440 235" role="img" aria-label="Diagrama com duas pessoas em diferentes distâncias de oposição" style="width:100%;max-width:720px;height:auto;display:block;margin:12px auto"></svg>
          <div id="fightDistanceFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <div class="practice-box">
          <strong class="card-title">Experiência 1 — espelho de distância</strong>
          <div class="practice-flow">
            <div class="practice-step"><span class="step-number">1</span><strong>Combine a distância</strong><p>Em dupla, fiquem aproximadamente a um braço e meio de distância, sem tocar.</p></div>
            <div class="practice-step"><span class="step-number">2</span><strong>Um conduz</strong><p>A pessoa A dá passos lentos para frente, trás ou lateral. Sem correr e sem movimentos bruscos.</p></div>
            <div class="practice-step"><span class="step-number">3</span><strong>O outro responde</strong><p>B tenta manter a distância combinada ajustando os próprios passos.</p></div>
            <div class="practice-step"><span class="step-number">4</span><strong>Troque</strong><p>Inverta os papéis e compare: o que você precisou observar para não aproximar demais?</p></div>
          </div>
        </div>

        <div class="safety-box"><strong>Sem contato nesta experiência.</strong><p>Use espaço livre, velocidade baixa e distância suficiente entre duplas. Não há socos, chutes, agarramentos, empurrões, rasteiras ou projeções. O professor pode reduzir o deslocamento ou transformar a tarefa em versão sentada.</p></div>

        ${choice('2','Distância e decisão','Por que reduzir a distância aumenta a exigência de controle mesmo quando ninguém está tentando atingir o outro?',[
          ['a','Porque há menos tempo e espaço para perceber e ajustar o deslocamento'],
          ['b','Porque distância não altera nenhuma decisão'],
          ['c','Porque quanto mais perto, menos atenção é necessária']
        ],'a','Correto. Distância modifica o tempo disponível para perceber, decidir e reorganizar o corpo.','Pense em quanto espaço existe para corrigir uma trajetória antes de um contato acidental.')}

        <h3>4. Base e equilíbrio: controlar-se antes de tentar controlar uma situação</h3>
        <p>Em muitas lutas, posição dos pés, distribuição do peso e capacidade de deslocar-se sem cruzar ou tropeçar influenciam equilíbrio e resposta. Na escola, vamos estudar isso <strong>sem derrubar ninguém</strong>.</p>

        <div class="practice-box">
          <strong class="card-title">Experiência 2 — base que permite mover</strong>
          <ol>
            <li>Fique em posição confortável, com pés afastados sem exagero.</li>
            <li>Dê um pequeno passo lateral e volte, mantendo controle.</li>
            <li>Repita para frente e para trás, sem cruzar os pés rapidamente.</li>
            <li>Compare com uma base estreita demais: em qual você consegue iniciar e parar o movimento com mais controle?</li>
          </ol>
          <p>A melhor base depende da tarefa. O objetivo aqui é perceber relação entre <strong>estabilidade e possibilidade de deslocamento</strong>, não copiar postura de uma modalidade específica.</p>
        </div>

        <h3>5. Uma oposição segura pode existir sem atacar o corpo</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência 3 — jogo da fita</strong>
          <p>Use uma fita larga ou tira de tecido apenas <strong>encaixada lateralmente no cós</strong>, com uma ponta visível. Não prenda com nó, alfinete ou objeto rígido.</p>
          <ol>
            <li>Em duplas, dentro de uma área pequena e livre, caminhem apenas.</li>
            <li>O objetivo é apenas <strong>tocar a ponta visível da fita</strong> do colega com uma mão; não retire nem puxe a fita.</li>
            <li>É proibido agarrar corpo, braço ou roupa; bloquear com empurrão; correr; mergulhar no chão ou segurar a mão do outro.</li>
            <li>A rodada dura poucos segundos ou termina quando alguém toca a fita.</li>
            <li>Ao sinal “PAROU”, ambos interrompem imediatamente e se afastam.</li>
          </ol>
          <p>Depois responda: foi mais importante “ser rápido” ou perceber distância, direção e momento de aproximação?</p>
        </div>

        <div class="safety-box"><strong>O professor controla espaço, material e pares.</strong><p>Se houver desconforto com proximidade, contato acidental recorrente, diferença de comportamento que torne a dupla insegura ou qualquer limitação específica, troque a função, aumente distância ou use uma versão sem contato. Ninguém é obrigado a participar de oposição corporal direta.</p></div>

        <h3>6. Laboratório de regras — a regra muda a experiência</h3>
        <div class="studio-box">
          <strong class="card-title">Construa uma oposição escolar segura</strong>
          <div class="two-col">
            <label class="mini-card"><strong>Objetivo</strong><select id="fightObjective" style="width:100%"><option value="ribbon">Tocar fita lateral</option><option value="zone">Proteger uma zona</option><option value="mirror">Manter distância</option></select></label>
            <label class="mini-card"><strong>Movimento</strong><select id="fightMobility" style="width:100%"><option value="walk">Somente caminhar</option><option value="step">Poucos passos por vez</option><option value="seated">Sentado / deslocamento reduzido</option></select></label>
            <label class="mini-card"><strong>Sinal de parada</strong><select id="fightStop" style="width:100%"><option value="voice">Palavra “PAROU”</option><option value="clap">Duas palmas</option><option value="signal">Sinal visual</option></select></label>
          </div>
          <div id="fightRuleFeedback" class="field-note" aria-live="polite"></div>
        </div>

        ${choice('3','Regra e técnica','Um aluno é muito ágil, mas continua se movendo depois do sinal de parada. Como avaliar?',[
          ['a','A agilidade compensa porque ele demonstra boa técnica'],
          ['b','Há falha fundamental: responder ao sinal e controlar a ação fazem parte da competência na prática'],
          ['c','O sinal serve apenas para quem está perdendo']
        ],'b','Isso. Técnica sem autocontrole e respeito às regras é uma execução incompleta e insegura.','A prática só funciona se todos puderem confiar que a ação termina quando a regra determina.')}

        <h3>7. Respeito também significa compreender diferenças culturais</h3>
        <p>Capoeira, judô, karatê, taekwondo, wrestling e outras lutas não são versões da mesma prática. Cada uma possui história, códigos, técnicas, valores, regras e formas de transmissão. Reduzir todas a “quem bate melhor” apaga justamente aquilo que a Educação Física deve ajudar a compreender.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Origem e história</strong><p>De onde a prática vem? Como se transformou ao circular entre grupos e países?</p></div>
          <div class="mini-card"><strong>Objetivo e regra</strong><p>O que conta como sucesso? O que é proibido? Como uma disputa começa e termina?</p></div>
          <div class="mini-card"><strong>Ritual e organização</strong><p>Há saudação, roda, uniforme, música, graduação, arbitragem ou outros códigos?</p></div>
          <div class="mini-card"><strong>Sentido social</strong><p>A prática pode envolver esporte, identidade cultural, educação, lazer, tradição e outras dimensões além da competição.</p></div>
        </div>

        <h3>8. Volte à missão da semana cultural</h3>
        <div class="challenge-box">
          <strong class="card-title">Crie uma estação de oposição segura — 5 a 6 minutos</strong>
          <p>Em grupo, construam uma atividade que mostre ao visitante que luta não é sinônimo de briga. Ela precisa conter:</p>
          <ol>
            <li>um objetivo simples e verificável;</li>
            <li>uma regra de distância ou deslocamento;</li>
            <li>um sinal claro de início e parada;</li>
            <li>pelo menos uma ação de percepção e decisão, não apenas velocidade;</li>
            <li>uma versão sem contato corporal direto;</li>
            <li>uma adaptação para menor mobilidade;</li>
            <li>uma frase final explicando <strong>qual comportamento de autocontrole tornou o jogo possível</strong>.</li>
          </ol>
          <p>Outra dupla experimenta e responde: <strong>“eu me senti seguro e consegui perceber qual problema de oposição estava tentando resolver?”</strong>. Se a resposta for não, a regra precisa ser revisada antes de uma nova rodada.</p>
        </div>

        <div class="source-box"><strong class="card-title">Por que ensinar lutas dessa forma?</strong><p>Na BNCC do Ensino Médio, modalidades de luta integram a cultura corporal de movimento. A proposta é que experiências corporais sejam articuladas a reflexão ética, cultural e social, formando estudantes capazes de tomar decisões conscientes e responsáveis sobre as práticas corporais.</p><p><a href="https://basenacionalcomum.mec.gov.br/images/historico/BNCC_EnsinoMedio_embaixa_site_110518.pdf" target="_blank" rel="noopener noreferrer">BNCC • Ensino Médio • Linguagens e suas Tecnologias</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Luta não se define pela intenção de machucar. Na escola, podemos aprender oposição corporal estudando <strong>distância, base, equilíbrio, regras, decisão, autocontrole e respeito</strong>. Saber parar é tão importante quanto saber agir.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Observar</span><span>Experimentar</span><span>Analisar</span><span>Respeitar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('07 Distância', showChapter);
})();
