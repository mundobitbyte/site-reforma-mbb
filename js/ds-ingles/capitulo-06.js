(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Futuro',
      technical:'be going to • will • intentions • decisions • predictions • invitations • future time expressions',
      title:'06 — Planos e futuro',
      objective:'<strong>Objetivo:</strong> compreender por que usamos formas diferentes para falar do futuro e escolher entre <em>be going to</em> e <em>will</em> conforme a intenção.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Entender a necessidade</span><div class="hero-box">
          <strong class="card-title">Sua turma precisa organizar a próxima semana.</strong>
          <p>Algumas coisas já estão planejadas. Outras decisões vão surgir durante a conversa. E também há previsões sobre o que pode acontecer.</p>
          <p class="central-question"><strong>Missão:</strong> perceber que “futuro” não é uma única caixa gramatical; a forma escolhida mostra como o falante enxerga a situação.</p>
        </div></section>

        <h3>1. Observe duas decisões diferentes</h3>
        <div class="dialogue-box"><div class="speech"><small>Ana</small>What are you going to do tonight?</div><div class="speech you"><small>Leo</small>I’m going to study for the test. I planned it yesterday.</div><div class="speech"><small>Ana</small>The printer isn’t working.</div><div class="speech you"><small>Leo</small>Okay. I’ll check it now.</div></div>
        ${choice('1','Descoberta','Qual diferença principal aparece entre going to e will nesse diálogo?',[['a','Going to apresenta um plano já pensado; will aparece numa decisão que surge na hora'],['b','Will é passado'],['c','Going to só serve para viagens']],'a','Correto. O contexto mostra duas relações diferentes com o futuro.','Pergunte: a decisão já existia ou nasceu agora?')}

        <h3>2. <em>Be going to</em>: intenção/plano já existente</h3>
        <div class="argument-chain"><span>sujeito</span><b>+</b><span>am/is/are</span><b>+</b><span>going to</span><b>+</b><span>verbo base</span></div>
        <div class="source-box"><p>We <strong>are going to meet</strong> on Tuesday.<br>Julia <strong>is going to prepare</strong> the slides.<br>I <strong>am going to test</strong> the app tonight.</p></div>
        <p>O verbo <strong>be</strong> continua concordando com o sujeito. Isso retoma o capítulo 01 dentro de uma estrutura nova.</p>
        ${choice('2','Plano','Complete: “I ___ study for the test tonight.”',[['a','am going to'],['b','will to'],['c','going']],'a','Isso. I am going to + verbo base.','A estrutura precisa do to be antes de going to.')}

        <h3>3. Perguntar e negar com <em>going to</em></h3>
        <p>Como existe <em>to be</em> na estrutura, ele continua formando pergunta e negativa.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>Pergunta</strong><p>Are you going to study?<br>Is she going to present?</p></div><div class="mini-card"><strong>Negativa</strong><p>I’m not going to travel.<br>They aren’t going to meet.</p></div></div>
        <div class="note-box"><strong class="card-title">Erro de mistura</strong><p><s>Do you going to study?</s> mistura simple present com going to. O correto é <strong>Are you going to study?</strong></p></div>

        <h3>4. <em>Will</em>: decisão, oferta e resposta no momento</h3>
        <p><strong>Will</strong> pode aparecer quando o falante decide ou se oferece no próprio momento da fala.</p>
        <div class="two-col"><div class="mini-card"><strong>The phone is ringing.</strong><p><strong>I’ll answer it.</strong></p></div><div class="mini-card"><strong>These boxes are heavy.</strong><p><strong>I’ll help you.</strong></p></div></div>
        <p><strong>I’ll</strong> é a contração de <strong>I will</strong>. Contrações novamente reaparecem como parte da comunicação real.</p>
        ${choice('3','Decisão imediata','Você vê alguém com muitas caixas e decide ajudar. Qual frase combina melhor?',[['a','I’ll help you.'],['b','I helped you tomorrow.'],['c','I’m help you.']],'a','Correto. A decisão nasce naquele momento.','Will é muito natural em ofertas e decisões imediatas.')}

        <h3>5. <em>Will</em> também aparece em previsões</h3>
        <div class="language-tool"><div class="toolbox-grid">
          <div class="toolbox-item"><strong>I think...</strong><code>I think the test will be difficult.</code></div>
          <div class="toolbox-item"><strong>probably</strong><code>It will probably rain.</code></div>
          <div class="toolbox-item"><strong>maybe</strong><code>Maybe they will arrive late.</code></div>
          <div class="toolbox-item"><strong>I don’t think...</strong><code>I don’t think it will take long.</code></div>
        </div></div>
        <p>Aqui <em>will</em> não é uma decisão: é uma forma de projetar uma possibilidade/opinião sobre o futuro.</p>

        <h3>6. Going to × will: contraste útil, não regra mecânica</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Plano/intenção anterior</strong><p>I’m going to visit my grandmother on Sunday.</p></div><div class="mini-card"><strong>Decisão/oferta agora</strong><p>I’ll call her now.</p></div><div class="mini-card"><strong>Previsão</strong><p>I think the trip will be easy.</p></div></div>
        <div class="concept-box"><strong class="card-title">A língua real aceita sobreposição</strong><p>Há contextos em que mais de uma forma é possível. Para começar, aprenda as diferenças de intenção mais úteis; depois o repertório se amplia.</p></div>
        ${choice('4','Escolha de intenção','Você já comprou ingresso para sábado. Qual frase destaca melhor esse plano já definido?',[['a','I’m going to go to a concert on Saturday.'],['b','I went to a concert tomorrow.'],['c','I’ll went to a concert.']],'a','Correto. O plano já existia antes da fala.','O contexto é tão importante quanto a forma.')}

        <h3>7. Negativa e pergunta com <em>will</em></h3>
        <p><strong>will not → won’t</strong>. Em perguntas, <em>will</em> vem antes do sujeito.</p>
        <div class="two-col"><div class="mini-card"><strong>Negativa</strong><p>She won’t participate.<br>We won’t finish today.</p></div><div class="mini-card"><strong>Pergunta</strong><p>Will you come?<br>When will they arrive?</p></div></div>
        ${choice('5','Forma','Qual frase significa “Ela não vai participar”?',[['a','She doesn’t will participate.'],['b','She won’t participate.'],['c','She not will participates.']],'b','Isso. Won’t = will not.','Will forma pergunta e negativa sem do/does.')}

        <h3>8. Expressões de tempo dão precisão</h3>
        <div class="three-col"><div class="mini-card"><strong>tomorrow</strong></div><div class="mini-card"><strong>tonight</strong></div><div class="mini-card"><strong>next week</strong></div><div class="mini-card"><strong>on Friday</strong></div><div class="mini-card"><strong>in two days</strong></div><div class="mini-card"><strong>next month</strong></div></div>
        <p>Tempo verbal e expressão de tempo trabalham juntos, mas um marcador sozinho não decide toda a gramática: a intenção do falante continua importando.</p>

        <h3>9. Convites e combinações</h3>
        <div class="dialogue-box"><div class="speech"><small>A</small>Are you going to work on the project tomorrow?</div><div class="speech you"><small>B</small>Yes. I’m going to start at 2 p.m.</div><div class="speech"><small>A</small>Can I join you?</div><div class="speech you"><small>B</small>Sure. I’ll send you the link.</div></div>
        <p>Observe a mesma conversa combinando estruturas: <strong>going to</strong> para o plano; <strong>will</strong> para a decisão de enviar o link.</p>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>Convite</strong><code>Would you like to join us?</code></div><div class="toolbox-item"><strong>Aceitar</strong><code>Yes, I’d love to.</code></div><div class="toolbox-item"><strong>Recusar</strong><code>Sorry, I can’t. I already have plans.</code></div></div></div>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Aplicar</span><h3>10. Planejamento real</h3><div class="challenge-box"><ol>
          <li>Escreva três planos reais com <strong>going to</strong>.</li><li>Escreva duas previsões com <strong>will</strong>.</li><li>Crie uma situação de decisão imediata com <strong>I’ll...</strong>.</li><li>Faça uma pergunta sobre o plano de outra pessoa.</li><li>Em cada frase, explique em uma palavra a intenção: plano, decisão, oferta ou previsão.</li>
        </ol></div><div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>escolher a forma pelo sentido que quer produzir, e não porque “tomorrow pede futuro”.</p></div></section>
      `
    });
  }

  MBB.enableChapter('06 Planos', showChapter);
})();