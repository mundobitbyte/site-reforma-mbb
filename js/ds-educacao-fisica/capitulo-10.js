(() => {
  'use strict';

  const MBB = window.MBBEducacaoFisica = window.MBBEducacaoFisica || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function updatePreferenceLab(root) {
    const purpose = $('#lifePurpose', root)?.value || 'wellbeing';
    const company = $('#lifeCompany', root)?.value || 'solo';
    const setting = $('#lifeSetting', root)?.value || 'simple';
    const out = $('#lifePreferenceFeedback', root);
    if (!out) return;

    const purposeText = {
      wellbeing:'sentir-se mais disposto e interromper longos períodos parado',
      social:'conviver e se divertir com outras pessoas',
      skill:'aprender ou melhorar uma habilidade corporal',
      challenge:'ter um desafio progressivo e perceber evolução',
      expression:'usar movimento para expressão, ritmo e criação'
    }[purpose];
    const companyText = {
      solo:'poder ser realizada sozinho quando necessário',
      pair:'funcionar bem com uma dupla ou pequeno grupo',
      team:'ter participação coletiva como parte importante da experiência'
    }[company];
    const settingText = {
      simple:'caber em espaço simples e exigir pouco ou nenhum equipamento',
      outdoor:'aproveitar ambiente externo quando houver local seguro',
      structured:'usar quadra, academia, clube, projeto ou outro espaço organizado quando houver acesso'
    }[setting];

    const ideas = [];
    if (purpose === 'expression') ideas.push('dança, sequência rítmica ou prática corporal expressiva');
    if (purpose === 'social' || company === 'team') ideas.push('jogo, esporte coletivo ou caminhada em grupo');
    if (purpose === 'skill') ideas.push('fundamento esportivo, coordenação, dança ou prática técnica orientada');
    if (purpose === 'challenge') ideas.push('caminhada/corrida progressiva, circuito de capacidades ou percurso de orientação seguro');
    if (purpose === 'wellbeing') ideas.push('caminhada, bicicleta em rota segura, mobilidade ou circuito corporal simples');
    if (setting === 'simple') ideas.push('pausas de movimento e circuito com o próprio corpo');

    out.innerHTML = `<strong>Perfil de escolha:</strong><p>Você procura uma prática que ajude a ${purposeText}, que possa ${companyText} e que consiga ${settingText}.</p><p><strong>Possibilidades para investigar:</strong> ${[...new Set(ideas)].join('; ')}.</p><p>Isso não escolhe por você. Serve para reduzir uma lista enorme a opções que têm mais chance de caber na sua realidade.</p>`;
  }

  function updatePlan(root) {
    const practice = $('#lifePractice', root)?.value || 'walk';
    const duration = Number($('#lifeDuration', root)?.value || 15);
    const intensity = $('#lifeIntensity', root)?.value || 'light';
    const days = $$('[data-life-day]:checked', root).map(input => input.value);
    const out = $('#lifePlanFeedback', root);
    if (!out) return;

    const practices = {
      walk:'caminhada ou deslocamento ativo em rota segura',
      rhythm:'dança / sequência rítmica',
      circuit:'circuito simples de força, mobilidade, equilíbrio e coordenação',
      sport:'jogo ou fundamento esportivo',
      bike:'bicicleta em local e condições adequadas',
      mixed:'combinação de duas práticas diferentes'
    };
    const intensities = {
      light:'leve — confortável e fácil de sustentar',
      moderate:'moderada — respiração mais evidente, mas ainda controlada',
      variable:'variável — alternando trechos leves e moderados conforme a prática'
    };

    if (!days.length) {
      out.innerHTML = '<strong>Escolha ao menos um momento da semana.</strong><p>O plano precisa existir no calendário real, não apenas na intenção.</p>';
      return;
    }

    const weekly = duration * days.length;
    out.innerHTML = `<strong>Experimento inicial:</strong><p>${practices[practice]}, cerca de ${duration} min por ocasião, em intensidade ${intensities[intensity]}, nos dias/momentos: ${days.join(', ')}.</p><p>Isso soma aproximadamente <strong>${weekly} minutos planejados</strong> na semana. Não é uma “nota de saúde” nem substitui recomendações populacionais: é um ponto de partida para testar aderência, segurança e possibilidade real de repetição.</p><p>Depois de 1–2 semanas, a pergunta é: <strong>isso aconteceu de verdade e vale a pena repetir?</strong></p>`;
  }

  function updateBarrier(root) {
    const barrier = $('#lifeBarrier', root)?.value || 'time';
    const out = $('#lifeBarrierFeedback', root);
    if (!out) return;

    const data = {
      time:{problem:'“Hoje não tenho o tempo que planejei.”',response:'reduzir a duração, fazer uma pausa curta de movimento ou deslocar a prática para outro momento. Fazer menos pode ser melhor que transformar um imprevisto em abandono total.'},
      weather:{problem:'“Choveu, está muito quente ou o ambiente externo ficou inadequado.”',response:'usar uma alternativa interna segura ou adiar. O plano precisa respeitar as condições do dia.'},
      access:{problem:'“O espaço, equipamento ou transporte não está disponível.”',response:'trocar por uma prática de objetivo parecido que exija menos recurso. A falta de academia não significa falta de possibilidade de movimento.'},
      company:{problem:'“A pessoa ou equipe não apareceu.”',response:'ter uma versão que possa ser feita sozinho ou combinar outro momento. Dependência total de companhia pode tornar o plano frágil.'},
      fatigue:{problem:'“Estou muito cansado ou com desconforto.”',response:'reduzir, adaptar ou interromper. Autonomia inclui distinguir consistência de insistência inadequada.'},
      boredom:{problem:'“A prática ficou repetitiva e eu não quero continuar.”',response:'mudar formato, local, companhia, música, desafio ou até trocar de prática. Sustentabilidade também depende de significado e interesse.'}
    }[barrier];

    out.innerHTML = `<strong>Problema real:</strong><p>${data.problem}</p><strong>Plano B:</strong><p>${data.response}</p><p>Um plano flexível não é um plano fraco. Ele é mais preparado para a vida real.</p>`;
  }

  function updateReview(root) {
    const repeat = $('#reviewRepeat', root)?.value || 'yes';
    const effort = $('#reviewEffort', root)?.value || 'ok';
    const access = $('#reviewAccess', root)?.value || 'ok';
    const out = $('#lifeReviewFeedback', root);
    if (!out) return;

    const notes = [];
    if (repeat === 'yes') notes.push('há vontade de repetir, um sinal importante de sustentabilidade');
    if (repeat === 'maybe') notes.push('a experiência foi aceitável, mas precisa de ajuste para ganhar sentido');
    if (repeat === 'no') notes.push('não há vontade de repetir; trocar a prática pode ser mais inteligente do que insistir por culpa');
    if (effort === 'high') notes.push('o esforço pareceu alto demais para o objetivo atual; reduza duração, intensidade ou complexidade');
    if (effort === 'low') notes.push('o esforço pareceu muito baixo para o desafio pretendido; se estiver seguro, pode haver pequena progressão');
    if (effort === 'ok') notes.push('o esforço pareceu compatível com o objetivo');
    if (access === 'hard') notes.push('acesso foi uma barreira; simplifique local, material, custo ou logística');
    if (access === 'ok') notes.push('o plano mostrou boa viabilidade de acesso');

    out.innerHTML = `<strong>Leitura da experiência:</strong><p>${notes.join('; ')}.</p><p><strong>Próxima decisão:</strong> mantenha apenas o que funcionou e mude uma variável de cada vez. Autonomia não é fidelidade ao primeiro plano; é capacidade de observar e revisar.</p>`;
  }

  function init(root) {
    ['lifePurpose','lifeCompany','lifeSetting'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updatePreferenceLab(root));
    });
    updatePreferenceLab(root);

    ['lifePractice','lifeDuration','lifeIntensity'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updatePlan(root));
    });
    $$('[data-life-day]', root).forEach(input => input.addEventListener('change', () => updatePlan(root)));
    updatePlan(root);

    $('#lifeBarrier', root)?.addEventListener('change', () => updateBarrier(root));
    updateBarrier(root);

    ['reviewRepeat','reviewEffort','reviewAccess'].forEach(id => {
      $(`#${id}`, root)?.addEventListener('change', () => updateReview(root));
    });
    updateReview(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Projeto de vida',
      technical:'autonomia • escolha • aderência • rotina • intensidade • progressão • adaptação • barreiras • lazer • autocuidado • revisão',
      title:'10 — Autonomia: uma prática para levar para a vida',
      objective:'<strong>Objetivo:</strong> transformar as experiências da 1ª série em autonomia para escolher, iniciar, adaptar, acompanhar e revisar uma prática corporal possível, significativa e segura fora da aula de Educação Física.',
      html:`
        <section class="ef-opening">
          <span class="lesson-kicker">E quando a aula acabar?</span>
          <div class="hero-box">
            <strong class="card-title">Imagine o último dia de aula. Não há mais chamada, professor dizendo o que fazer nem nota pela participação. O que acontece com o movimento?</strong>
            <p>Durante o ano você experimentou esforço e recuperação, jogos, corrida, salto, lançamento, esportes coletivos, capacidades físicas, dança, lutas, aventura e leitura crítica da mídia.</p>
            <p>Agora a missão muda: construir uma prática que <strong>consiga existir sem depender da aula</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como escolher algo que faça sentido, caiba na realidade e possa ser ajustado quando a vida mudar?</p>
          </div>
        </section>

        <div class="ef-tags"><span>autonomia</span><span>escolha</span><span>rotina</span><span>adaptação</span><span>progressão</span><span>lazer</span><span>vida</span></div>

        <h3>1. Autonomia não significa “faça tudo sozinho”</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Escolher</strong><p>Reconhecer objetivos, interesses, recursos e limites antes de aderir à prática que outra pessoa considera “a melhor”.</p></div>
          <div class="mini-card"><strong>Regular</strong><p>Perceber esforço, controlar intensidade e saber reduzir quando a situação pede.</p></div>
          <div class="mini-card"><strong>Adaptar</strong><p>Mudar duração, local, material, companhia ou formato quando surgem barreiras.</p></div>
          <div class="mini-card"><strong>Buscar apoio</strong><p>Saber quando professor, profissional qualificado, equipe de saúde, família ou outra pessoa pode ajudar. Pedir orientação também é autonomia.</p></div>
        </div>

        ${choice('1','O que é autonomia?','Uma pessoa segue por meses um treino que odeia apenas porque um influenciador disse que é “o melhor”. Isso demonstra autonomia?',[
          ['a','Sim, porque disciplina significa nunca questionar o plano'],
          ['b','Não necessariamente. Autonomia envolve compreender objetivos, avaliar a própria experiência e fazer escolhas justificadas'],
          ['c','Sim, porque existe uma prática universalmente melhor para todos']
        ],'b','Isso. Persistência pode ser valiosa, mas autonomia exige capacidade de compreender, escolher e revisar.','Uma prática sustentável precisa dialogar com objetivo, contexto, segurança e possibilidade real de continuidade.')}

        <h3>2. Primeiro escolha pelo sentido, não pela moda</h3>
        <div class="studio-box">
          <strong class="card-title">Mapa de preferência</strong>
          <p>Responda pensando no que você <strong>aceitaria experimentar de verdade</strong>, não no que parece mais admirável.</p>
          <div class="three-col">
            <label class="mini-card"><strong>O que mais importa agora?</strong><select id="lifePurpose" style="width:100%"><option value="wellbeing">Disposição / bem-estar</option><option value="social">Convívio e diversão</option><option value="skill">Aprender uma habilidade</option><option value="challenge">Desafio e evolução</option><option value="expression">Expressão e criação</option></select></label>
            <label class="mini-card"><strong>Com quem?</strong><select id="lifeCompany" style="width:100%"><option value="solo">Precisa funcionar sozinho</option><option value="pair">Dupla / pequeno grupo</option><option value="team">Equipe / coletivo</option></select></label>
            <label class="mini-card"><strong>Onde consegue praticar?</strong><select id="lifeSetting" style="width:100%"><option value="simple">Espaço simples / pouco material</option><option value="outdoor">Ambiente externo seguro</option><option value="structured">Espaço organizado / equipamento</option></select></label>
          </div>
          <div id="lifePreferenceFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <p>Gostar não é o único critério — segurança e acesso também importam —, mas ignorar completamente interesse e significado costuma produzir planos que existem no papel e desaparecem na vida.</p>

        <h3>3. Transforme intenção em experimento</h3>
        <p>“Vou me exercitar mais” é uma intenção. Um experimento precisa dizer <strong>o quê, quando e como começar</strong>. Não buscamos uma rotina perfeita: buscamos informação sobre aquilo que você consegue repetir.</p>

        <div class="studio-box">
          <strong class="card-title">Planejador de 1–2 semanas</strong>
          <div class="three-col">
            <label class="mini-card"><strong>Prática inicial</strong><select id="lifePractice" style="width:100%"><option value="walk">Caminhada / deslocamento ativo</option><option value="rhythm">Dança / ritmo</option><option value="circuit">Circuito de capacidades</option><option value="sport">Jogo / fundamento esportivo</option><option value="bike">Bicicleta</option><option value="mixed">Combinar duas práticas</option></select></label>
            <label class="mini-card"><strong>Duração por ocasião</strong><select id="lifeDuration" style="width:100%"><option value="10">10 min</option><option value="15" selected>15 min</option><option value="20">20 min</option><option value="30">30 min</option><option value="40">40 min</option></select></label>
            <label class="mini-card"><strong>Intensidade inicial</strong><select id="lifeIntensity" style="width:100%"><option value="light">Leve</option><option value="moderate">Moderada</option><option value="variable">Variável</option></select></label>
          </div>
          <strong>Em quais momentos isso pode realmente caber?</strong>
          <div class="choice-row" style="flex-wrap:wrap">
            <label class="mini-card"><input type="checkbox" data-life-day value="segunda"> segunda</label>
            <label class="mini-card"><input type="checkbox" data-life-day value="terça"> terça</label>
            <label class="mini-card"><input type="checkbox" data-life-day value="quarta"> quarta</label>
            <label class="mini-card"><input type="checkbox" data-life-day value="quinta"> quinta</label>
            <label class="mini-card"><input type="checkbox" data-life-day value="sexta"> sexta</label>
            <label class="mini-card"><input type="checkbox" data-life-day value="sábado"> sábado</label>
            <label class="mini-card"><input type="checkbox" data-life-day value="domingo"> domingo</label>
          </div>
          <div id="lifePlanFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <div class="note-box"><strong>Começar pequeno não redefine a recomendação de saúde.</strong><p>Para adolescentes, a OMS recomenda uma média de pelo menos 60 minutos por dia de atividade moderada a vigorosa ao longo da semana, além de atividades vigorosas e de fortalecimento em pelo menos 3 dias. O planejador acima serve para <strong>começar ou reorganizar uma rotina</strong>, não para dizer que 10 ou 15 minutos são o objetivo final. Algum movimento, porém, é melhor que nenhum, e a progressão precisa ser possível.</p></div>

        <h3>4. Antes de progredir, aprenda a regular</h3>
        <div class="practice-box">
          <strong class="card-title">Experiência — mesma prática, três ritmos</strong>
          <p>Escolha uma ação segura que permita variar ritmo: caminhar, marchar no lugar, mover braços e pernas sentado, pedalar em condição adequada ou executar uma sequência simples.</p>
          <ol>
            <li><strong>2 minutos leves:</strong> movimento confortável, percebendo respiração.</li>
            <li><strong>2 minutos um pouco mais ativos:</strong> aumente moderadamente o ritmo sem transformar a experiência em teste máximo.</li>
            <li><strong>2 minutos leves:</strong> reduza e observe recuperação.</li>
          </ol>
          <p>Use o que aprendeu no capítulo 01: percepção de esforço e teste da fala podem ajudar a regular intensidade sem depender de um relógio.</p>
        </div>

        <div class="safety-box"><strong>Progressão não significa “sempre mais”.</strong><p>Aumentar duração, frequência, intensidade ou complexidade são mudanças diferentes. Não aumente tudo ao mesmo tempo. Dor, tontura, mal-estar ou falta de ar incomum são motivos para interromper e procurar orientação adequada.</p></div>

        ${choice('2','Como progredir?','Uma prática está confortável e o aluno quer torná-la um pouco mais desafiadora. Qual estratégia é mais fácil de analisar?',[
          ['a','Aumentar ao mesmo tempo duração, intensidade, frequência e dificuldade'],
          ['b','Modificar uma variável de cada vez e observar como o corpo e a rotina respondem'],
          ['c','Treinar até a exaustão para descobrir o limite']
        ],'b','Correto. Uma mudança por vez permite perceber melhor o efeito da progressão e reduz improvisação.','Progressão é um processo de ajuste, não uma corrida para atingir o máximo.')}

        <h3>5. O plano precisa sobreviver a uma terça-feira ruim</h3>
        <p>Rotinas quebram porque a vida muda. Chove, aparece prova, falta companhia, o espaço fecha, bate cansaço. Em vez de depender de motivação perfeita, crie alternativas.</p>

        <div class="studio-box">
          <strong class="card-title">Laboratório de Plano B</strong>
          <label class="mini-card"><strong>Qual barreira apareceu?</strong><select id="lifeBarrier" style="width:100%"><option value="time">Faltou tempo</option><option value="weather">Clima / ambiente mudou</option><option value="access">Perdi acesso ao espaço/equipamento</option><option value="company">Faltou companhia</option><option value="fatigue">Cansaço ou desconforto</option><option value="boredom">Fiquei entediado</option></select></label>
          <div id="lifeBarrierFeedback" class="field-note" aria-live="polite"></div>
        </div>

        <h3>6. Autonomia também é saber o que não fazer</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Não transforme dor em prova de mérito</strong><p>Desconforto e esforço não são a mesma coisa. Insistir em dor para “mostrar disciplina” não é objetivo deste módulo.</p></div>
          <div class="mini-card"><strong>Não copie treino sem contexto</strong><p>Uma rotina feita para outra pessoa pode ter objetivo, volume, experiência e condições diferentes das suas.</p></div>
          <div class="mini-card"><strong>Não dependa só de números</strong><p>Relógio, aplicativo e distância podem informar, mas também contam percepção, prazer, recuperação, acesso e vontade de repetir.</p></div>
          <div class="mini-card"><strong>Não confunda autonomia com isolamento</strong><p>Algumas práticas exigem instrução, equipamento, supervisão ou ambiente específico. Reconhecer isso é uma decisão competente.</p></div>
        </div>

        <h3>7. Teste, depois revise</h3>
        <div class="studio-box">
          <strong class="card-title">Revisão depois de 1–2 semanas</strong>
          <div class="three-col">
            <label class="mini-card"><strong>Você repetiria?</strong><select id="reviewRepeat" style="width:100%"><option value="yes">Sim</option><option value="maybe">Talvez, com ajustes</option><option value="no">Não</option></select></label>
            <label class="mini-card"><strong>Como ficou o esforço?</strong><select id="reviewEffort" style="width:100%"><option value="ok">Adequado</option><option value="high">Alto demais</option><option value="low">Baixo para meu objetivo</option></select></label>
            <label class="mini-card"><strong>Acesso/logística</strong><select id="reviewAccess" style="width:100%"><option value="ok">Funcionou</option><option value="hard">Foi uma barreira</option></select></label>
          </div>
          <div id="lifeReviewFeedback" class="field-note" aria-live="polite"></div>
        </div>

        ${choice('3','Plano que falhou','O aluno planejou correr 30 minutos quatro vezes por semana, mas só conseguiu fazer uma vez e não gostou. Qual é a conclusão mais útil?',[
          ['a','Ele não tem força de vontade e deve repetir exatamente o mesmo plano até cumprir'],
          ['b','O experimento forneceu informação: frequência, duração ou até a prática escolhida podem não caber bem; o plano deve ser revisado'],
          ['c','Atividade física não funciona para ele']
        ],'b','Isso. Um plano que não aconteceu pode revelar algo importante sobre contexto, preferência e tamanho da mudança.','Autonomia transforma falha de execução em informação para a próxima decisão.')}

        <h3>8. Volte à pergunta inicial: o que fica quando a aula acaba?</h3>
        <div class="challenge-box">
          <strong class="card-title">Projeto final — Minha prática possível</strong>
          <p>Monte um plano pessoal ou fictício para 2 semanas. Ele deve conter:</p>
          <ol>
            <li>uma prática escolhida e <strong>por que ela faz sentido</strong>;</li>
            <li>onde e com quem ela pode acontecer;</li>
            <li>momentos reais do calendário;</li>
            <li>uma intensidade inicial que possa ser regulada;</li>
            <li>um Plano B para a barreira mais provável;</li>
            <li>uma possibilidade de adaptação corporal ou de acesso;</li>
            <li>um critério para saber se vale repetir;</li>
            <li>uma mudança possível para a segunda semana — apenas se a primeira justificar.</li>
          </ol>
          <p>Depois do teste, não entregue apenas “cumpri/não cumpri”. Responda: <strong>o que aprendi sobre a prática, sobre minha rotina e sobre a próxima decisão?</strong></p>
        </div>

        <div class="source-box"><strong class="card-title">Por que terminar assim?</strong><p>A BNCC define como objetivo da Educação Física ampliar a consciência sobre movimentos e recursos de cuidado de si e dos outros e desenvolver autonomia para apropriação e utilização da cultura corporal de movimento. A experiência escolar deve permitir que o estudante participe também de forma autônoma em contextos de lazer e saúde.</p><p><a href="https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf" target="_blank" rel="noopener noreferrer">BNCC • Educação Física</a> • <a href="https://basenacionalcomum.mec.gov.br/implementacao/praticas/caderno-de-praticas/ensino-medio/84-vivendo-a-cultura-corporal-de-movimento-no-ensino-medio" target="_blank" rel="noopener noreferrer">BNCC • Cultura corporal no Ensino Médio</a></p></div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência da 1ª série.</strong><p>Educação Física não deveria terminar quando o professor guarda a bola. O aprendizado mais duradouro é conseguir <strong>escolher, experimentar, perceber, regular, adaptar e revisar</strong> práticas corporais que façam sentido ao longo da vida.</p></div>
          <div class="ef-tags"><span>Entender</span><span>Escolher</span><span>Experimentar</span><span>Observar</span><span>Revisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('10 Autonomia', showChapter);
})();
