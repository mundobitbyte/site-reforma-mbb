(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Ações e escolhas',
      technical:'can • could • should • must • have to • ability • requests • advice • obligation • permission',
      title:'07 — Poder, pedir, aconselhar e precisar',
      objective:'<strong>Objetivo:</strong> compreender como os modais mudam a intenção e a força de uma mensagem; usar <em>can, could, should, must</em> e <em>have to</em> em situações reais.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Entender a necessidade</span><div class="hero-box">
          <strong class="card-title">Compare: “You can use this computer”, “You should back up the file” e “You must wear safety glasses”.</strong>
          <p>As três frases falam de ação, mas não dizem a mesma coisa. Uma indica possibilidade/permissão, outra conselho e outra obrigação.</p>
          <p class="central-question"><strong>Missão:</strong> escolher a força correta da mensagem em vez de decorar uma tradução isolada para cada modal.</p>
        </div></section>

        <h3>1. Uma estrutura simples, várias funções</h3>
        <p>Com <strong>can, could, should, must</strong>, o verbo seguinte fica normalmente na <strong>forma básica</strong>: <em>can play</em>, <em>should study</em>, <em>must wear</em>.</p>
        <div class="note-box"><strong class="card-title">Isso simplifica a gramática</strong><p>O modal não recebe -s na 3ª pessoa: <strong>She can play</strong>, não <s>She cans plays</s>.</p></div>
        ${choice('1','Forma','Qual frase está correta?',[['a','He can plays guitar.'],['b','He can play guitar.'],['c','He cans play guitar.']],'b','Correto. Modal + verbo base.','Nem can nem play recebem -s aqui.')}

        <h3>2. Can: capacidade, possibilidade e permissão simples</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Capacidade</strong><p>I can swim.<br>She can program.</p></div><div class="mini-card"><strong>Possibilidade</strong><p>We can meet after class.</p></div><div class="mini-card"><strong>Permissão</strong><p>You can use this computer.</p></div></div>
        <p>O contexto decide a função. <em>Can</em> não tem uma única tradução fixa.</p>
        <p><strong>Can’t</strong> (= cannot) pode expressar incapacidade ou impossibilidade: <em>I can’t come today.</em></p>

        <h3>3. Pedidos: por que <em>can</em> e <em>could</em> não soam iguais?</h3>
        <div class="dialogue-box"><div class="speech"><small>Student</small>Can you help me with this exercise?</div><div class="speech you"><small>Teacher</small>Sure. Which part is difficult?</div><div class="speech"><small>Student</small>Could you explain the last example again, please?</div><div class="speech you"><small>Teacher</small>Of course.</div></div>
        <p>As duas formas podem fazer pedidos. <strong>Could you...?</strong> costuma soar mais indireto/cortês em muitos contextos. A escolha depende da relação entre as pessoas e da situação.</p>
        ${choice('2','Pedido','Qual frase é adequada para pedir repetição com cortesia?',[['a','Could you repeat that, please?'],['b','You repeat now.'],['c','You must repeat me.']],'a','Isso. Could you...? + please funciona como pedido cortês.','A intenção é pedir, não ordenar.')}

        <h3>4. Perguntas com modal não usam do/does</h3>
        <div class="argument-chain"><span>You can help.</span><b>→</b><span>Can you help?</span><span>She can drive.</span><b>→</b><span>Can she drive?</span></div>
        <div class="note-box"><strong class="card-title">Erro típico</strong><p><s>Do you can help?</s> mistura o sistema do simple present com modal. O próprio modal vai para a frente: <strong>Can you help?</strong></p></div>

        <h3>5. Should: conselho, não ordem</h3>
        <div class="source-box"><strong class="card-title">Um colega está exausto antes da prova</strong><p>You <strong>should sleep</strong> earlier tonight. You <strong>should review</strong> the main topics. You <strong>shouldn’t study</strong> all night.</p></div>
        <p><strong>Should</strong> apresenta algo como recomendável. O interlocutor ainda tem escolha.</p>
        ${choice('3','Conselho','Seu amigo perde senhas. Qual frase é conselho?',[['a','You should use a password manager.'],['b','You must be a password manager.'],['c','You can to use a password manager.']],'a','Correto. Should + verbo base apresenta recomendação.','A função é aconselhar.')}

        <h3>6. Must: obrigação forte e proibição</h3>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>Segurança</strong><code>You must wear safety glasses.</code></div><div class="toolbox-item"><strong>Prazo</strong><code>Students must submit the form by Friday.</code></div><div class="toolbox-item"><strong>Proibição</strong><code>You must not share your password.</code></div></div></div>
        <p><strong>Must not</strong> não significa “não precisa”. Significa que a ação é proibida ou fortemente vetada.</p>

        <h3>7. Have to: obrigação prática</h3>
        <p><strong>Have to</strong> é muito comum para exigências externas ou práticas: regras de escola, trabalho, horário, procedimento.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>I/you/we/they</strong><p>I have to wear an ID badge.</p></div><div class="mini-card"><strong>he/she/it</strong><p>She has to arrive at 8.</p></div></div>
        <p>Aqui reaparece a lógica de 3ª pessoa: <strong>has to</strong>.</p>

        <h3>8. A diferença mais importante: <em>must not</em> × <em>don’t have to</em></h3>
        <div class="comparison-grid"><div class="mini-card"><strong>You must not enter.</strong><p>É proibido entrar.</p></div><div class="mini-card"><strong>You don’t have to enter.</strong><p>Você não precisa entrar; não é obrigatório.</p></div></div>
        ${choice('4','Força','“You don’t have to print the file” significa',[['a','é proibido imprimir'],['b','não é necessário imprimir'],['c','é obrigatório imprimir']],'b','Exato. Ausência de obrigação não é proibição.','Essa diferença pode mudar completamente uma instrução.')}

        <h3>9. Compare a força antes de escolher</h3>
        <div class="three-col"><div class="mini-card"><strong>You can back up the file.</strong><p>Possível/permitido.</p></div><div class="mini-card"><strong>You should back up the file.</strong><p>Recomendável.</p></div><div class="mini-card"><strong>You must back up the file.</strong><p>Obrigatório no contexto.</p></div></div>
        ${choice('5','Intenção','Uma norma exige crachá. Qual frase representa melhor a regra?',[['a','Students can wear ID badges.'],['b','Students should wear ID badges.'],['c','Students must wear ID badges.']],'c','Correto. Must corresponde à obrigação forte apresentada pelo contexto.','Escolher modal é escolher força comunicativa.')}

        <h3>10. Linguagem útil para problemas reais</h3>
        <div class="source-box"><p><strong>Help desk:</strong> Could you help me open this file?</p><p><strong>Conselho de segurança:</strong> You should use different passwords.</p><p><strong>Regra do laboratório:</strong> You must not eat near the computers.</p><p><strong>Ausência de necessidade:</strong> You don’t have to print the activity.</p></div>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Aplicar</span><h3>11. Crie um guia para um contexto real</h3><div class="challenge-box"><ol>
          <li>Escolha laboratório, sala, internet, show, academia ou outro contexto conhecido.</li><li>Escreva uma frase com <strong>can</strong>.</li><li>Faça um pedido com <strong>could</strong>.</li><li>Dê um conselho com <strong>should</strong>.</li><li>Crie uma obrigação/proibição com <strong>must</strong> ou <strong>have to</strong>.</li><li>Inclua algo não obrigatório com <strong>don’t have to</strong>.</li>
        </ol><p>Depois, justifique a força de cada modal em português.</p></div><div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>mudar o modal conscientemente quando quer transformar uma possibilidade em conselho, obrigação ou proibição.</p></div></section>
      `
    });
  }

  MBB.enableChapter('07 Poder', showChapter);
})();