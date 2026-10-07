(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Fundamentos',
      technical:'greetings • subject pronouns • verb to be • contractions • questions • possessive adjectives • personal information',
      title:'01 — Hello! Quem sou eu?',
      objective:'<strong>Objetivo:</strong> compreender por que o verbo <em>to be</em> é necessário para falar de identidade, origem, estado e características; apresentar-se, negar informações e fazer perguntas simples.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Entender a necessidade</span>
          <div class="hero-box">
            <strong class="card-title">Você entra em uma chamada com estudantes de outros países.</strong>
            <p>Uma pessoa diz: <strong>“Hi! I’m Alex. I’m from Canada. I’m a student. What’s your name?”</strong></p>
            <p>Você quer responder quem é, de onde vem e como está. Antes de decorar uma regra, perceba a necessidade: em inglês, essas ideias costumam exigir um verbo que liga o sujeito à informação.</p>
            <p class="central-question"><strong>Missão:</strong> ao final, você deverá conseguir se apresentar e fazer perguntas básicas sem copiar um modelo inteiro.</p>
          </div>
        </section>

        <h3>1. Primeiro, compreenda a conversa</h3>
        <div class="dialogue-box">
          <div class="speech"><small>Alex</small>Hi! I’m Alex. I’m from Canada. What’s your name?</div>
          <div class="speech you"><small>You</small>Hi! I’m Bruno. I’m from Brazil.</div>
          <div class="speech"><small>Alex</small>Are you a student?</div>
          <div class="speech you"><small>You</small>Yes, I am. I’m a high-school student.</div>
        </div>
        ${choice('1','Descoberta','Nas frases “I’m Alex”, “I’m from Canada” e “I’m a student”, o que se repete?',[['a','A ideia I am / I’m'],['b','O verbo do'],['c','O passado -ed']],'a','Exato. A mesma estrutura liga I a identidade, origem e ocupação.','Procure o bloco que aparece nas três frases antes de pensar na tradução.')}

        <h3>2. O que o <em>to be</em> realmente faz?</h3>
        <p><strong>To be</strong> é normalmente traduzido por <strong>ser</strong> ou <strong>estar</strong>, mas o mais importante é entender sua função: ele liga uma pessoa ou coisa a uma identidade, característica, estado ou localização.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Identidade</strong><p>I <strong>am</strong> Rafael.</p><p>Eu <strong>sou</strong> Rafael.</p></div>
          <div class="mini-card"><strong>Característica</strong><p>She <strong>is</strong> friendly.</p><p>Ela <strong>é</strong> amigável.</p></div>
          <div class="mini-card"><strong>Estado</strong><p>We <strong>are</strong> tired.</p><p>Nós <strong>estamos</strong> cansados.</p></div>
          <div class="mini-card"><strong>Localização</strong><p>They <strong>are</strong> at school.</p><p>Eles <strong>estão</strong> na escola.</p></div>
        </div>
        <div class="concept-box"><strong class="card-title">Evite a pergunta errada</strong><p>Não pergunte apenas “<em>am</em> significa sou ou estou?”. Pergunte: <strong>que relação a frase está construindo?</strong> O contexto decide a tradução natural.</p></div>

        <h3>3. Quem vem antes do verbo?</h3>
        <p>Os pronomes sujeitos mostram de quem estamos falando. Em inglês, eles aparecem com muita frequência porque a forma do verbo depende do sujeito.</p>
        <div class="three-col">
          <div class="mini-card"><strong>I</strong><p>eu</p><p>I am...</p></div>
          <div class="mini-card"><strong>you</strong><p>você / vocês</p><p>You are...</p></div>
          <div class="mini-card"><strong>he</strong><p>ele</p><p>He is...</p></div>
          <div class="mini-card"><strong>she</strong><p>ela</p><p>She is...</p></div>
          <div class="mini-card"><strong>it</strong><p>coisa/animal/situação</p><p>It is...</p></div>
          <div class="mini-card"><strong>we / they</strong><p>nós / eles</p><p>We are... / They are...</p></div>
        </div>
        ${choice('2','Pronomes','“Marina and I” pode ser substituído por',[['a','we'],['b','they'],['c','she']],'a','Correto. Marina + eu formam “nós”: we.','Inclua quem fala na conta: “X and I” = we.')}

        <h3>4. A forma: am, is ou are?</h3>
        <div class="language-tool">
          <strong class="card-title">Padrão essencial</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>I → am</strong><code>I am ready.</code></div>
            <div class="toolbox-item"><strong>he / she / it → is</strong><code>She is Brazilian.</code></div>
            <div class="toolbox-item"><strong>you / we / they → are</strong><code>They are students.</code></div>
          </div>
        </div>
        <p>Não trate isso como três palavras soltas. Memorize os <strong>blocos</strong>: <strong>I am</strong>, <strong>he is</strong>, <strong>she is</strong>, <strong>it is</strong>, <strong>you are</strong>, <strong>we are</strong>, <strong>they are</strong>.</p>
        ${choice('3','Aplicação guiada','Complete: “My school ___ in São Paulo.”',[['a','am'],['b','is'],['c','are']],'b','Isso. My school pode ser retomado por it; portanto: it is.','Substitua mentalmente o sujeito por um pronome: my school → it.')}

        <h3>5. Contrações: a forma que você vai ouvir</h3>
        <p>Na fala e na escrita informal, as formas contraídas aparecem o tempo todo. Reconhecê-las é parte de compreender inglês real.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Forma completa</strong><p>I am<br>You are<br>She is<br>We are<br>They are</p></div>
          <div class="mini-card"><strong>Forma contraída</strong><p>I’m<br>You’re<br>She’s<br>We’re<br>They’re</p></div>
        </div>
        <div class="note-box"><strong class="card-title">Ouça o bloco</strong><p>Em <strong>I’m a student</strong>, não tente pronunciar cada palavra isoladamente. Leia como um pequeno bloco de sentido. Use o botão de áudio do diálogo e repita a frase inteira.</p></div>

        <h3>6. Como negar uma informação</h3>
        <p>Com <em>to be</em>, a negativa é direta: coloque <strong>not</strong> depois do verbo.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Afirmativa</strong><p>I am tired.</p><p>He is at home.</p><p>They are ready.</p></div>
          <div class="mini-card"><strong>Negativa</strong><p>I am <strong>not</strong> tired.</p><p>He is <strong>not</strong> at home.</p><p>They are <strong>not</strong> ready.</p></div>
        </div>
        <p>Na fala: <strong>isn’t</strong> = is not; <strong>aren’t</strong> = are not. Com I, usamos normalmente <strong>I’m not</strong>.</p>
        <div class="note-box"><strong class="card-title">Erro comum de quem pensa em português</strong><p>Não use <s>I don’t am tired</s>. O próprio <em>to be</em> forma a negativa: <strong>I’m not tired.</strong></p></div>
        ${choice('4','Negativa','Qual frase significa “Nós não estamos atrasados”?',[['a','We don’t late.'],['b','We aren’t late.'],['c','We not are late.']],'b','Correto. Are + not → aren’t.','Com to be, não usamos do/does para negar.')}

        <h3>7. Como transformar afirmação em pergunta</h3>
        <p>Outra vantagem do <em>to be</em>: ele não precisa de um auxiliar. Basta colocá-lo antes do sujeito.</p>
        <div class="argument-chain"><span>You are ready.</span><b>→</b><span>Are you ready?</span><span>She is Brazilian.</span><b>→</b><span>Is she Brazilian?</span></div>
        <div class="two-col">
          <div class="mini-card"><strong>Are you a student?</strong><p>Yes, I am.<br>No, I’m not.</p></div>
          <div class="mini-card"><strong>Is he your teacher?</strong><p>Yes, he is.<br>No, he isn’t.</p></div>
        </div>
        ${choice('5','Pergunta','Qual pergunta está correta?',[['a','Do you are from Brazil?'],['b','Are you from Brazil?'],['c','You are from Brazil?']],'b','Isso. Are passa para antes de you.','Com to be: verbo + sujeito + complemento?')}

        <h3>8. Perguntas que resolvem necessidades reais</h3>
        <div class="language-tool">
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Nome</strong><code>What’s your name?</code></div>
            <div class="toolbox-item"><strong>Origem</strong><code>Where are you from?</code></div>
            <div class="toolbox-item"><strong>Idade</strong><code>How old are you?</code></div>
            <div class="toolbox-item"><strong>Ocupação</strong><code>Are you a student?</code></div>
          </div>
        </div>
        <p>Observe também <strong>my, your, his, her, our, their</strong>: essas palavras vêm antes de um substantivo para indicar relação/posse: <em>my name</em>, <em>your school</em>, <em>their project</em>.</p>

        <h3>9. Da regra para sua vida</h3>
        <div class="source-box"><strong class="card-title">Modelo desmontado</strong><p><strong>Hello! My name is Laura.</strong> → nome<br><strong>I’m 16 years old.</strong> → idade<br><strong>I’m from Campinas.</strong> → origem<br><strong>I’m a student.</strong> → ocupação<br><strong>I’m interested in music.</strong> → interesse</p></div>
        <p>O objetivo não é decorar Laura. É reutilizar a estrutura com informações verdadeiras sobre você.</p>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>10. Produção e transferência</h3>
          <div class="challenge-box">
            <ol>
              <li>Escreva 5 frases sobre você: nome, origem, ocupação/estudo, uma característica e um estado atual.</li>
              <li>Transforme uma dessas frases em negativa.</li>
              <li>Escreva duas perguntas para conhecer outra pessoa.</li>
              <li>Leia sua apresentação em voz alta sem soletrar palavra por palavra.</li>
            </ol>
            <details><summary>Checklist</summary><p>Usei I am/I’m para falar de mim? Escolhi is/are de acordo com o sujeito? Coloquei not depois de to be? Nas perguntas, o verbo veio antes do sujeito?</p></details>
          </div>
          <div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>montar novas frases com <em>to be</em> sem depender do exemplo original e explicar por que escolheu <em>am</em>, <em>is</em> ou <em>are</em>.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('01 Hello!', showChapter);
})();