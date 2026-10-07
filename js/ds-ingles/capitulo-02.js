(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Presente',
      technical:'simple present • routines • do/does • frequency • time expressions • likes and preferences',
      title:'02 — Minha rotina e preferências',
      objective:'<strong>Objetivo:</strong> compreender quando e por que usamos o <em>simple present</em>; falar de hábitos, rotina e preferências; fazer perguntas e negativas com <em>do/does</em>.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Entender a necessidade</span>
          <div class="hero-box">
            <strong class="card-title">Você já consegue dizer quem é. Agora alguém pergunta: “What do you do after school?”</strong>
            <p>Para responder, você precisa falar de coisas que <strong>acontecem regularmente</strong>: estudar, trabalhar, praticar um instrumento, jogar, descansar.</p>
            <p>É aí que entra o <strong>simple present</strong>: ele não serve principalmente para “o que acontece neste segundo”, mas para hábitos, rotinas, preferências e fatos gerais.</p>
            <p class="central-question"><strong>Missão:</strong> explicar um dia comum e entrevistar outra pessoa sobre seus hábitos.</p>
          </div>
        </section>

        <h3>1. Observe antes da regra</h3>
        <div class="source-box"><strong class="card-title">A day in Leo’s life</strong><p>I wake up at 6:30. I study in the morning. I have lunch at school. In the afternoon, I practice guitar and do my homework. I usually sleep at 11 p.m.</p></div>
        ${choice('1','Descoberta','O texto descreve principalmente',[['a','o que Leo faz normalmente'],['b','o que Leo está fazendo agora'],['c','o que Leo fez ontem']],'a','Correto. A sequência mostra uma rotina habitual.','Observe wake up, study, practice e usually: são pistas de hábito.')}

        <h3>2. A ideia central do <em>simple present</em></h3>
        <p>Use o presente simples quando a informação é apresentada como <strong>habitual, recorrente, geral ou relativamente estável</strong>.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Rotina</strong><p>I study in the morning.</p></div>
          <div class="mini-card"><strong>Hábito</strong><p>We exercise on Tuesdays.</p></div>
          <div class="mini-card"><strong>Preferência</strong><p>I like rock music.</p></div>
          <div class="mini-card"><strong>Fato geral</strong><p>Water boils at 100°C.</p></div>
        </div>
        <div class="concept-box"><strong class="card-title">Tempo verbal é escolha de significado</strong><p>Não escolha o simple present porque “a frase tem um verbo”. Escolha porque você quer apresentar a ação como hábito, rotina, preferência ou fato.</p></div>

        <h3>3. Com I, you, we, they: verbo base</h3>
        <p>Com esses sujeitos, a forma afirmativa é direta:</p>
        <div class="language-tool"><div class="toolbox-grid">
          <div class="toolbox-item"><strong>I study</strong><code>I study every day.</code></div>
          <div class="toolbox-item"><strong>You work</strong><code>You work in the afternoon.</code></div>
          <div class="toolbox-item"><strong>We play</strong><code>We play volleyball.</code></div>
          <div class="toolbox-item"><strong>They live</strong><code>They live in Campinas.</code></div>
        </div></div>

        <h3>4. He, she, it: por que aparece -s?</h3>
        <p>Quando o sujeito é <strong>he, she ou it</strong>, o verbo afirmativo normalmente muda. Essa marca ajuda o inglês a indicar a 3ª pessoa do singular.</p>
        <div class="three-col">
          <div class="mini-card"><strong>play → plays</strong><p>She plays guitar.</p></div>
          <div class="mini-card"><strong>watch → watches</strong><p>He watches videos.</p></div>
          <div class="mini-card"><strong>study → studies</strong><p>She studies English.</p></div>
          <div class="mini-card"><strong>go → goes</strong><p>He goes home at 5.</p></div>
          <div class="mini-card"><strong>have → has</strong><p>She has lunch at noon.</p></div>
        </div>
        ${choice('2','3ª pessoa','Complete: “My brother ___ games after school.”',[['a','play'],['b','plays'],['c','playing']],'b','Isso. My brother = he, então play recebe -s.','Substitua o sujeito por he/she/it para decidir.')}

        <h3>5. Negar exige um auxiliar</h3>
        <p>Diferente do <em>to be</em>, a maioria dos verbos no simple present usa <strong>do/does</strong> como auxiliar na negativa.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I / you / we / they</strong><p>I <strong>don’t study</strong> at night.</p></div>
          <div class="mini-card"><strong>he / she / it</strong><p>She <strong>doesn’t study</strong> at night.</p></div>
        </div>
        <div class="note-box"><strong class="card-title">Por que “doesn’t plays” está errado?</strong><p>Porque o <strong>does</strong> já carrega a marca da 3ª pessoa. O verbo principal volta à forma básica: <strong>She doesn’t play.</strong></p></div>
        ${choice('3','Negativa','Qual frase está correta?',[['a','He doesn’t likes coffee.'],['b','He doesn’t like coffee.'],['c','He don’t like coffee.']],'b','Correto. He → doesn’t; depois, verbo base: like.','A marca de 3ª pessoa está em does.')}

        <h3>6. Perguntas: do/does entram antes do sujeito</h3>
        <div class="argument-chain"><span>You study English.</span><b>→</b><span>Do you study English?</span><span>She plays guitar.</span><b>→</b><span>Does she play guitar?</span></div>
        <div class="dialogue-box">
          <div class="speech"><small>Ana</small>Do you play any instruments?</div>
          <div class="speech you"><small>Leo</small>Yes, I do. I play guitar.</div>
          <div class="speech"><small>Ana</small>Does your brother play too?</div>
          <div class="speech you"><small>Leo</small>No, he doesn’t. He likes soccer.</div>
        </div>
        ${choice('4','Pergunta','Qual pergunta está correta?',[['a','Does she studies at night?'],['b','Does she study at night?'],['c','Do she study at night?']],'b','Isso. Does + she + study.','Depois de does, o verbo principal fica na forma básica.')}

        <h3>7. Perguntar o quê, onde, quando e que horas</h3>
        <div class="language-tool"><div class="toolbox-grid">
          <div class="toolbox-item"><strong>What</strong><code>What do you do after school?</code></div>
          <div class="toolbox-item"><strong>Where</strong><code>Where do you study?</code></div>
          <div class="toolbox-item"><strong>When</strong><code>When do you exercise?</code></div>
          <div class="toolbox-item"><strong>What time</strong><code>What time do you wake up?</code></div>
        </div></div>

        <h3>8. Frequência: quanto isso acontece?</h3>
        <div class="argument-chain"><span>always</span><b>→</b><span>usually</span><b>→</b><span>often</span><b>→</b><span>sometimes</span><b>→</b><span>rarely</span><b>→</b><span>never</span></div>
        <p>Com verbos comuns, esses advérbios normalmente ficam <strong>antes do verbo principal</strong>: <em>I usually study at night.</em></p>
        <p>Com <em>to be</em>, ficam depois: <em>I am usually tired after class.</em></p>
        ${choice('5','Frequência','Qual frase está mais adequada?',[['a','I usually study after dinner.'],['b','I am usually study after dinner.'],['c','I study usually after dinner.']],'a','Correto. Usually vem antes de study.','Com verbo comum: sujeito + advérbio + verbo.')}

        <h3>9. Horários: at, in e on</h3>
        <div class="three-col">
          <div class="mini-card"><strong>at</strong><p>at 7:30<br>at noon<br>at night</p></div>
          <div class="mini-card"><strong>in</strong><p>in the morning<br>in the afternoon<br>in the evening</p></div>
          <div class="mini-card"><strong>on</strong><p>on Monday<br>on Friday morning</p></div>
        </div>
        <p>Não pense apenas em tradução. Pense na unidade de tempo: <strong>hora específica → at</strong>; <strong>parte do dia → in</strong>; <strong>dia/data → on</strong>.</p>

        <h3>10. Preferências: falar do que faz parte de você</h3>
        <div class="source-box"><p>I <strong>like music</strong>. I <strong>love playing guitar</strong>. I <strong>prefer coffee to tea</strong>. I <strong>don’t like waking up early</strong>.</p></div>
        <p>Depois de <strong>like/love</strong>, podemos usar substantivo ou, em muitos usos, verbo com <strong>-ing</strong>: <em>I like music</em>; <em>I like reading</em>.</p>

        <h3>11. Contraste importante: <em>to be</em> × verbos comuns</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>To be</strong><p>Are you tired?<br>I’m not tired.</p><p>O próprio verbo forma pergunta e negativa.</p></div>
          <div class="mini-card"><strong>Verbo comum</strong><p>Do you study?<br>I don’t study at night.</p><p>Do/does entram como auxiliares.</p></div>
        </div>
        <div class="note-box"><strong class="card-title">Erro que queremos evitar desde cedo</strong><p><s>Do you are tired?</s> e <s>Are you study English?</s> misturam dois sistemas. Pergunte primeiro: <strong>o verbo principal é to be ou outro verbo?</strong></p></div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>12. Entrevista e relato</h3>
          <div class="challenge-box">
            <ol>
              <li>Escreva 5 frases sobre sua rotina, incluindo um advérbio de frequência.</li>
              <li>Escreva 4 perguntas com <strong>do/does</strong>.</li>
              <li>Responda às perguntas ou faça a entrevista com alguém.</li>
              <li>Transforme duas respostas em frases sobre a outra pessoa usando he/she/they.</li>
            </ol>
            <details><summary>Exemplo de transferência</summary><p>Question: <strong>What time do you wake up?</strong><br>Answer: <strong>I wake up at 7.</strong><br>Report: <strong>Lucas wakes up at 7.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>decidir quando o simple present faz sentido, escolher do/does corretamente e produzir frases novas sobre hábitos sem copiar o texto do capítulo.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('02 Minha', showChapter);
})();