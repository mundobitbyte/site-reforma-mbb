(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Agora',
      technical:'present continuous • am/is/are + verb-ing • actions now • spelling • simple present x present continuous',
      title:'04 — O que está acontecendo?',
      objective:'<strong>Objetivo:</strong> compreender por que o inglês usa o <em>present continuous</em> para destacar ações em andamento e distingui-lo do <em>simple present</em>.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Entender a necessidade</span><div class="hero-box">
          <strong class="card-title">Você abre uma chamada de vídeo e alguém pergunta: “What are you doing?”</strong>
          <p>Responder “I study English every day” fala de hábito. Mas a pessoa quer saber <strong>o que está acontecendo neste momento</strong>: “I’m studying English now.”</p>
          <p class="central-question"><strong>Missão:</strong> aprender a escolher entre rotina e ação em andamento.</p>
        </div></section>

        <h3>1. Observe duas frases parecidas</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>I study English every day.</strong><p>Rotina/hábito.</p></div><div class="mini-card"><strong>I am studying English now.</strong><p>Ação em andamento.</p></div></div>
        ${choice('1','Descoberta','O que muda o sentido da segunda frase?',[['a','am + studying e a ideia de agora'],['b','o pronome I'],['c','a palavra English']],'a','Correto. A estrutura e o contexto apresentam a ação como em andamento.','Compare o tempo da situação, não apenas o verbo.')}

        <h3>2. A estrutura: <em>be + verbo-ing</em></h3>
        <p>O presente contínuo combina duas peças que você já conhece parcialmente: o verbo <strong>to be</strong>, que concorda com o sujeito, e o verbo principal com <strong>-ing</strong>.</p>
        <div class="argument-chain"><span>sujeito</span><b>+</b><span>am / is / are</span><b>+</b><span>verbo-ing</span></div>
        <div class="three-col"><div class="mini-card"><strong>I</strong><p>I am studying.</p></div><div class="mini-card"><strong>he/she/it</strong><p>She is coding.</p></div><div class="mini-card"><strong>you/we/they</strong><p>They are testing.</p></div></div>
        ${choice('2','Estrutura','Complete: “The students ___ working on a project.”',[['a','is'],['b','are'],['c','do']],'b','Isso. The students = they → are working.','A primeira decisão é a forma do to be.')}

        <h3>3. Por que não basta colocar -ing?</h3>
        <div class="note-box"><strong class="card-title">Erro comum</strong><p><s>She studying now.</s> está incompleto. O inglês precisa do verbo <strong>be</strong>: <strong>She is studying now.</strong></p></div>
        <p>Pense no bloco inteiro: <strong>is studying</strong>, <strong>are working</strong>, <strong>am waiting</strong>.</p>

        <h3>4. Como formar o -ing</h3>
        <div class="language-tool"><div class="toolbox-grid">
          <div class="toolbox-item"><strong>regra geral</strong><code>work → working</code></div>
          <div class="toolbox-item"><strong>-e final</strong><code>write → writing</code></div>
          <div class="toolbox-item"><strong>verbo curto</strong><code>run → running</code></div>
          <div class="toolbox-item"><strong>-ie</strong><code>lie → lying</code></div>
        </div></div>
        <p>Essas regras ajudam na escrita, mas não são o objetivo central. O mais importante é reconhecer e produzir a estrutura completa.</p>

        <h3>5. Leia uma cena em movimento</h3>
        <div class="source-box"><strong class="card-title">Live from the lab</strong><p>Lucas is connecting the Arduino. Maya and Pedro are checking the code. The teacher is talking to another group. Two students are taking notes. I am recording the test.</p></div>
        ${choice('3','Compreensão','Quem está verificando o código?',[['a','Lucas'],['b','Maya and Pedro'],['c','The teacher']],'b','Correto. Maya and Pedro are checking the code.','Associe cada sujeito ao bloco verbal correspondente.')}

        <h3>6. Negativas e perguntas: retome o <em>to be</em></h3>
        <p>Como a estrutura contém <em>to be</em>, ele continua fazendo o trabalho de negar e perguntar.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>Negativa</strong><p>She <strong>isn’t studying</strong>.<br>They <strong>aren’t working</strong>.<br>I’m <strong>not waiting</strong>.</p></div><div class="mini-card"><strong>Pergunta</strong><p><strong>Is she studying?</strong><br><strong>Are they working?</strong><br><strong>What are you doing?</strong></p></div></div>
        <div class="note-box"><strong class="card-title">Não misture os sistemas</strong><p><s>She doesn’t studying.</s> mistura simple present e continuous. Para ação em andamento: <strong>She isn’t studying.</strong></p></div>
        ${choice('4','Pergunta','Qual pergunta busca a ação atual?',[['a','What do you do every day?'],['b','What are you doing now?'],['c','What did you do yesterday?']],'b','Isso. Are + doing e now apontam para o momento atual.','A pergunta deve combinar com a ideia de tempo.')}

        <h3>7. Simple present × present continuous: a escolha é de perspectiva</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Hábito</strong><p>My father <strong>works</strong> at home.</p><p>usually, every day, on Mondays</p></div><div class="mini-card"><strong>Situação atual/temporária</strong><p>Today he <strong>is working</strong> at the office.</p><p>now, today, at the moment</p></div></div>
        ${choice('5','Contraste','Complete: “I usually ___ by bus, but today I ___ with my father.”',[['a','go / am going'],['b','am going / go'],['c','went / going']],'a','Correto. Usually = hábito; today, nesse contraste, = situação atual/temporária.','Escolha o tempo pela mensagem que quer construir.')}

        <h3>8. Nem todo verbo combina naturalmente com “agora em progresso”</h3>
        <p>Verbos como <strong>know, understand, need, want, believe</strong>, em seus sentidos mais comuns, costumam descrever estado mental ou necessidade e aparecem frequentemente no simple present: <em>I understand the problem.</em></p>
        <div class="concept-box"><strong class="card-title">Aprenda o uso frequente, não uma proibição absoluta</strong><p>Há contextos específicos em que alguns desses verbos aparecem no contínuo. Para esta base, o objetivo é reconhecer a escolha mais comum.</p></div>

        <h3>9. Fale do que você realmente vê</h3>
        <div class="dialogue-box"><div class="speech"><small>A</small>What are you doing?</div><div class="speech you"><small>B</small>I’m fixing a bug.</div><div class="speech"><small>A</small>Is the app working?</div><div class="speech you"><small>B</small>No, it isn’t. I’m checking the login screen.</div></div>
        <p>Ouça o diálogo e perceba que as contrações estudadas no capítulo 01 reaparecem em uma função nova: <strong>I’m fixing</strong>, <strong>it isn’t</strong>.</p>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Aplicar</span><h3>10. Relato ao vivo</h3><div class="challenge-box"><ol>
          <li>Observe um ambiente real por 30 segundos.</li><li>Escreva ou diga 4 ações em andamento.</li><li>Depois escreva 2 hábitos das mesmas pessoas ou do mesmo lugar.</li><li>Explique por que escolheu continuous em umas frases e simple present em outras.</li>
        </ol></div><div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>olhar para a intenção temporal da frase e escolher a estrutura sem depender apenas de palavras como <em>now</em>.</p></div></section>
      `
    });
  }

  MBB.enableChapter('04 O que', showChapter);
})();