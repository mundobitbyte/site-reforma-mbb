(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Passado',
      technical:'simple past • was/were • regular verbs • irregular verbs • did/didn’t • time markers • narratives • news lead',
      title:'05 — O que aconteceu?',
      objective:'<strong>Objetivo:</strong> compreender como o inglês organiza fatos concluídos; relatar acontecimentos com <em>was/were</em>, passado regular/irregular e <em>did</em>, e transformar fatos em uma narrativa curta ou lead jornalístico.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Entender a necessidade</span><div class="hero-box">
          <strong class="card-title">Ontem o computador parou durante uma apresentação. Hoje alguém pergunta: “What happened?”</strong>
          <p>Você precisa marcar que os fatos <strong>já terminaram</strong> e reconstruir uma sequência: o que aconteceu primeiro, o que veio depois e como terminou.</p>
          <p class="central-question"><strong>Missão:</strong> contar um acontecimento real de modo compreensível e perceber como o passado muda a forma dos verbos.</p>
        </div></section>

        <h3>1. Antes da gramática, localize o tempo</h3>
        <div class="source-box"><p><strong>Yesterday</strong> our group started a presentation at 10 a.m. The computer was fine at first. Then the screen went black. We checked the cables. Finally, the teacher found a loose power cable and we fixed it.</p></div>
        ${choice('1','Descoberta','Que pistas mostram que o relato pertence ao passado?',[['a','Yesterday e formas como started, was, went, found'],['b','A palavra computer'],['c','A presença de we']],'a','Correto. Marcadores de tempo e formas verbais trabalham juntos.','Primeiro identifique quando o fato acontece; depois observe como os verbos respondem a isso.')}

        <h3>2. O passado de <em>to be</em>: was e were</h3>
        <p>O verbo <em>to be</em> tem formas próprias no passado. A lógica de concordância continua existindo.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>I / he / she / it → was</strong><p>I was at school.<br>The computer was offline.</p></div><div class="mini-card"><strong>you / we / they → were</strong><p>We were in the lab.<br>They were ready.</p></div></div>
        ${choice('2','Was/were','Complete: “My friends ___ at the event yesterday.”',[['a','was'],['b','were'],['c','did']],'b','Isso. My friends = they → were.','Substitua o sujeito por um pronome, como nos capítulos anteriores.')}

        <h3>3. Com <em>was/were</em>, a lógica de pergunta e negativa é conhecida</h3>
        <div class="two-col"><div class="mini-card"><strong>Negativa</strong><p>I wasn’t late.<br>They weren’t tired.</p></div><div class="mini-card"><strong>Pergunta</strong><p>Was she at home?<br>Were they ready?</p></div></div>
        <div class="note-box"><strong class="card-title">Erro comum</strong><p><s>Did she was at school?</s> mistura dois sistemas. Como <em>was</em> já é <em>to be</em> no passado, ele próprio forma a pergunta: <strong>Was she at school?</strong></p></div>

        <h3>4. Verbos regulares: por que aparece -ed?</h3>
        <p>Quando um verbo regular relata uma ação concluída, sua forma de passado geralmente recebe <strong>-ed</strong>. Essa terminação funciona como um sinal de passado.</p>
        <div class="language-tool"><div class="toolbox-grid">
          <div class="toolbox-item"><strong>work → worked</strong><code>We worked yesterday.</code></div>
          <div class="toolbox-item"><strong>play → played</strong><code>They played soccer.</code></div>
          <div class="toolbox-item"><strong>study → studied</strong><code>She studied English.</code></div>
          <div class="toolbox-item"><strong>stop → stopped</strong><code>The rain stopped.</code></div>
        </div></div>
        <p>As regras de escrita ajudam, mas a função é mais importante: o verbo está marcando um fato concluído.</p>
        ${choice('3','Regular','Qual é a forma correta de study no passado?',[['a','studyed'],['b','studied'],['c','studys']],'b','Correto. Consoante + y geralmente vira -ied.','study → studied.')}

        <h3>5. Verbos irregulares: o passado não segue uma única fórmula</h3>
        <p>Alguns verbos muito frequentes mudam de forma. Não tente decorar uma lista gigantesca; aprenda-os em histórias e frases que realmente usa.</p>
        <div class="three-col"><div class="mini-card"><strong>go → went</strong></div><div class="mini-card"><strong>have → had</strong></div><div class="mini-card"><strong>do → did</strong></div><div class="mini-card"><strong>see → saw</strong></div><div class="mini-card"><strong>make → made</strong></div><div class="mini-card"><strong>take → took</strong></div><div class="mini-card"><strong>come → came</strong></div><div class="mini-card"><strong>find → found</strong></div><div class="mini-card"><strong>send → sent</strong></div></div>
        ${choice('4','Irregular','Complete: “We ___ to the museum last Saturday.”',[['a','go'],['b','went'],['c','goed']],'b','Isso. Go é irregular: went.','A forma precisa ser aprendida em uso.')}

        <h3>6. Did: um auxiliar que carrega o passado</h3>
        <p>Com verbos comuns, perguntas e negativas usam <strong>did</strong>. Como <em>did</em> já marca o passado, o verbo principal volta à forma básica.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>Afirmativa</strong><p>She <strong>went</strong> home.</p></div><div class="mini-card"><strong>Negativa</strong><p>She <strong>didn’t go</strong> home.</p></div><div class="mini-card"><strong>Pergunta</strong><p><strong>Did</strong> she <strong>go</strong> home?</p></div></div>
        <div class="note-box"><strong class="card-title">A regra tem uma razão</strong><p>Em <strong>didn’t go</strong>, o passado está em <em>did</em>. Colocar <s>didn’t went</s> marcaria o passado duas vezes.</p></div>
        ${choice('5','Did','Qual pergunta está correta?',[['a','Where did you went?'],['b','Where did you go?'],['c','Where you did go?']],'b','Correto. Did + sujeito + verbo base.','O passado já está no did.')}

        <h3>7. Sequência: língua também organiza pensamento</h3>
        <div class="argument-chain"><span>First</span><b>→</b><span>Then</span><b>→</b><span>After that</span><b>→</b><span>Finally</span></div>
        <p>Esses conectores ajudam o leitor/ouvinte a reconstruir a ordem dos fatos.</p>
        <div class="dialogue-box"><div class="speech"><small>A</small>What happened yesterday?</div><div class="speech you"><small>B</small>First, the screen went black. Then we checked the cables. Finally, we found the problem.</div></div>

        <h3>8. Da narrativa para uma notícia curta</h3>
        <p>O mesmo passado pode servir a outro gênero. Em uma notícia, o início costuma responder rapidamente perguntas como <strong>what, who, when, where</strong>.</p>
        <div class="source-box"><strong class="card-title">School team won robotics challenge on Saturday</strong><p>A team of first-year students <strong>won</strong> a regional robotics challenge in Campinas on Saturday. The students <strong>presented</strong> a low-cost prototype and <strong>received</strong> the judges’ award for practical design.</p></div>
        ${choice('6','Lead','O primeiro período informa principalmente',[['a','o fato principal, quem participou, onde e quando'],['b','apenas a opinião do autor'],['c','uma rotina semanal']],'a','Exato. Um lead eficiente concentra informações essenciais logo no início.','Observe como o passado serve a uma função jornalística concreta.')}

        <h3>9. Relatar não é inventar certeza</h3>
        <div class="concept-box"><strong class="card-title">Fato, fonte e limite</strong><p>Se você não sabe algo, não complete a história por imaginação. Em textos jornalísticos e escolares, use apenas informações verificadas e deixe claro quando algo é relato de uma fonte.</p></div>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Aplicar</span><h3>10. Duas produções com o mesmo conhecimento</h3><div class="challenge-box"><ol>
          <li>Conte um acontecimento real em 5 a 7 frases usando pelo menos quatro verbos no passado e dois conectores de sequência.</li>
          <li>Depois transforme o mesmo fato em um lead de 2 frases respondendo: o quê, quem, quando e onde.</li>
          <li>Crie uma pergunta com <strong>Did...?</strong> sobre o acontecimento.</li>
        </ol><details><summary>Checklist</summary><p>Usei was/were só com to be? Depois de did/didn’t, deixei o verbo na forma básica? Minha sequência fica compreensível? Meu lead distingue fato de opinião?</p></details></div><div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>usar o passado em uma história nova e adaptar a mesma informação para um gênero diferente.</p></div></section>
      `
    });
  }

  MBB.enableChapter('05 O que', showChapter);
})();