(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Descrever',
      technical:'adjectives • have/has • there is/there are • articles • some/any • plurals • possessive s • prepositions • demonstratives',
      title:'03 — Pessoas, lugares e coisas',
      objective:'<strong>Objetivo:</strong> compreender diferentes maneiras de descrever: dizer como algo é, o que alguém possui, o que existe em um lugar e onde cada elemento está.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Entender a necessidade</span>
          <div class="hero-box">
            <strong class="card-title">Um visitante pergunta: “What is your computer lab like?”</strong>
            <p>Você quer responder: o laboratório é grande; há vinte computadores; a sala tem duas janelas; o projetor fica na parede.</p>
            <p>Em português usamos “é”, “tem”, “há/existe” e expressões de lugar quase sem perceber. Em inglês, cada ideia pede uma estrutura diferente.</p>
            <p class="central-question"><strong>Missão:</strong> aprender a escolher entre <em>be</em>, <em>have/has</em> e <em>there is/there are</em> em vez de traduzir “tem” sempre do mesmo jeito.</p>
          </div>
        </section>

        <h3>1. Comece pela pergunta: o que quero dizer?</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Como é?</strong><p>The lab <strong>is large</strong>.</p><p>Característica → <em>to be</em>.</p></div>
          <div class="mini-card"><strong>O que possui?</strong><p>The lab <strong>has two windows</strong>.</p><p>Posse/característica → <em>have/has</em>.</p></div>
          <div class="mini-card"><strong>O que existe?</strong><p><strong>There are twenty computers</strong>.</p><p>Existência/presença → <em>there is/are</em>.</p></div>
        </div>
        ${choice('1','Escolha de sentido','Você quer apresentar pela primeira vez que existe um projetor no laboratório. Qual estrutura é mais direta?',[['a','There is a projector in the lab.'],['b','The projector is in the lab.'],['c','The lab is projector.']],'a','Correto. There is apresenta a existência/presença de um elemento.','Primeiro decida: estou dizendo que algo existe ou localizando algo já conhecido?')}

        <h3>2. Adjetivos: dizer como alguém ou algo é</h3>
        <p>Em inglês, adjetivos normalmente <strong>não mudam de gênero</strong> e, antes de um substantivo, costumam vir antes dele.</p>
        <div class="three-col">
          <div class="mini-card"><strong>big / small</strong><p>a big room</p></div>
          <div class="mini-card"><strong>new / old</strong><p>a new computer</p></div>
          <div class="mini-card"><strong>quiet / noisy</strong><p>a quiet class</p></div>
          <div class="mini-card"><strong>friendly</strong><p>a friendly teacher</p></div>
          <div class="mini-card"><strong>organized</strong><p>an organized desk</p></div>
          <div class="mini-card"><strong>interesting</strong><p>an interesting project</p></div>
        </div>
        <div class="note-box"><strong class="card-title">Português × inglês</strong><p>Em português dizemos “computador novo”. Em inglês, a ordem mais comum é <strong>a new computer</strong>. Não traduza palavra por palavra mantendo a ordem.</p></div>

        <h3>3. A/an: apresentar um elemento singular</h3>
        <p>Use <strong>a</strong> antes de som consonantal e <strong>an</strong> antes de som vocálico: <em>a computer</em>, <em>an app</em>, <em>a university</em>, <em>an hour</em>.</p>
        <div class="concept-box"><strong class="card-title">É o som, não apenas a letra</strong><p><em>University</em> começa com som de /y/, então usamos <strong>a university</strong>. Em <em>hour</em>, o h não é pronunciado, então usamos <strong>an hour</strong>.</p></div>
        ${choice('2','Artigo','Qual opção está correta?',[['a','an new computer'],['b','a new computer'],['c','a English class']],'b','Isso. New começa com som consonantal.','Observe o som da palavra que vem imediatamente depois do artigo.')}

        <h3>4. Have/has: posse e características</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I / you / we / they → have</strong><p>I have a notebook.<br>They have two dogs.</p></div>
          <div class="mini-card"><strong>he / she / it → has</strong><p>She has long hair.<br>The lab has two windows.</p></div>
        </div>
        <p>A lógica da 3ª pessoa volta: <strong>he/she/it → has</strong>. É uma retomada do capítulo 02, não uma regra desconectada.</p>
        ${choice('3','Have/has','Complete: “My classroom ___ two doors.”',[['a','have'],['b','has'],['c','is have']],'b','Correto. My classroom = it, então usamos has.','Substitua o sujeito por um pronome para decidir.')}

        <h3>5. There is / there are: quando a necessidade é dizer que algo existe</h3>
        <div class="source-box"><strong class="card-title">Um visitante ainda não conhece o laboratório</strong><p><strong>There is a projector on the wall. There are twenty computers on the desks. There is a printer near the door. There are two windows.</strong></p></div>
        <p>Nessa construção, <strong>there</strong> não deve ser entendido simplesmente como “lá”. <strong>There is/there are</strong> funciona como uma estrutura para apresentar a existência ou presença de algo.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Singular</strong><p><strong>There is</strong> a printer.</p><p>Há/existe uma impressora.</p></div>
          <div class="mini-card"><strong>Plural</strong><p><strong>There are</strong> two printers.</p><p>Há/existem duas impressoras.</p></div>
        </div>

        <h3>6. O contraste que evita muita confusão</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>There is a computer on the desk.</strong><p>Estou <strong>apresentando que existe</strong> um computador ali.</p></div>
          <div class="mini-card"><strong>The computer is on the desk.</strong><p>O computador já é conhecido; agora digo <strong>onde ele está</strong>.</p></div>
          <div class="mini-card"><strong>The lab has twenty computers.</strong><p>Apresento o laboratório como algo que <strong>possui</strong> computadores.</p></div>
        </div>
        <div class="note-box"><strong class="card-title">O “tem” do português engana</strong><p>Em fala informal dizemos “tem vinte computadores na sala”. Em inglês, muitas vezes a ideia natural é <strong>There are twenty computers in the room</strong>, e não <s>The room has there...</s>.</p></div>
        ${choice('4','Contraste','Qual frase responde melhor à pergunta “Is there a printer in the lab?”',[['a','Yes, there is.'],['b','Yes, it has.'],['c','Yes, there are.']],'a','Correto. A pergunta é singular com Is there...?','Mantenha a mesma estrutura na resposta curta.')}

        <h3>7. Negativas e perguntas com <em>there be</em></h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Negativa</strong><p>There <strong>isn’t</strong> a TV.<br>There <strong>aren’t</strong> any tablets.</p></div>
          <div class="mini-card"><strong>Pergunta</strong><p><strong>Is there</strong> Wi-Fi?<br><strong>Are there</strong> computers?</p></div>
        </div>
        <p><strong>Some</strong> aparece com frequência em afirmativas: <em>There are some books.</em> <strong>Any</strong> é muito comum em perguntas e negativas: <em>Are there any books?</em> / <em>There aren’t any books.</em></p>
        ${choice('5','Some/any','Complete: “There aren’t ___ chairs in this room.”',[['a','some'],['b','any'],['c','a']],'b','Isso. Any é frequente em negativas.','A ideia aqui é “não há cadeiras”.')}

        <h3>8. Plural: porque <em>there are</em> depende dele</h3>
        <div class="language-tool"><div class="toolbox-grid">
          <div class="toolbox-item"><strong>-s</strong><code>computer → computers</code></div>
          <div class="toolbox-item"><strong>-es</strong><code>box → boxes</code></div>
          <div class="toolbox-item"><strong>-y → -ies</strong><code>city → cities</code></div>
          <div class="toolbox-item"><strong>irregular</strong><code>person → people</code></div>
        </div></div>

        <h3>9. Dizer onde está: preposições de lugar</h3>
        <div class="three-col">
          <div class="mini-card"><strong>in</strong><p>in the box</p></div>
          <div class="mini-card"><strong>on</strong><p>on the table</p></div>
          <div class="mini-card"><strong>under</strong><p>under the desk</p></div>
          <div class="mini-card"><strong>next to</strong><p>next to the door</p></div>
          <div class="mini-card"><strong>between</strong><p>between two desks</p></div>
          <div class="mini-card"><strong>in front of / behind</strong><p>na frente / atrás</p></div>
        </div>
        <div class="source-box"><p>The printer is <strong>next to</strong> the window. A backpack is <strong>under</strong> a chair. The projector is <strong>on</strong> the wall.</p></div>
        ${choice('6','Localização','“The backpack is under the chair” significa que a mochila está',[['a','embaixo da cadeira'],['b','sobre a cadeira'],['c','ao lado da cadeira']],'a','Correto. Under expressa posição inferior.','Preposições representam relações espaciais, não palavras isoladas.')}

        <h3>10. Posse com ’s e demonstrativos</h3>
        <p>Para indicar relação/posse com uma pessoa ou nome, o inglês usa muito <strong>’s</strong>: <em>the teacher’s desk</em>, <em>Maria’s notebook</em>.</p>
        <div class="two-col"><div class="mini-card"><strong>Perto</strong><p>this computer<br>these computers</p></div><div class="mini-card"><strong>Mais distante</strong><p>that computer<br>those computers</p></div></div>
        <p>Esses itens são apoio. O núcleo do capítulo continua sendo escolher corretamente entre <strong>descrição, posse, existência e localização</strong>.</p>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>11. Faça alguém imaginar um lugar real</h3>
          <div class="challenge-box">
            <ol>
              <li>Escolha sua sala, laboratório, quarto ou estúdio.</li>
              <li>Escreva uma frase dizendo <strong>como o lugar é</strong>.</li>
              <li>Use <strong>there is/there are</strong> para apresentar pelo menos três elementos.</li>
              <li>Use <strong>have/has</strong> uma vez.</li>
              <li>Localize três objetos com preposições.</li>
              <li>Peça para alguém desenhar ou imaginar o ambiente só com sua descrição.</li>
            </ol>
            <details><summary>Modelo</summary><p><strong>My classroom is large and bright. There are twenty desks. There is a projector on the wall. The room has two big windows. The teacher’s desk is in front of the class.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você aprendeu de verdade se consegue explicar:</strong><p>por que escolheu <em>there is</em>, <em>there are</em>, <em>has</em> ou <em>is</em> em cada frase — e não apenas completar lacunas.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('03 Pessoas', showChapter);
})();