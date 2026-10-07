(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function showChapter() {
    MBB.showLesson({
      unit:'Comunicação',
      technical:'skimming • scanning • listening for gist/details • pronunciation • contractions • -ed endings • repair strategies • Englishes • literary reading',
      title:'08 — Ler, ouvir e conversar melhor',
      objective:'<strong>Objetivo:</strong> integrar gramática e vocabulário com estratégias de leitura, escuta e fala; compreender o essencial, localizar detalhes, melhorar inteligibilidade e interpretar textos sem depender de tradução total.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Entender a necessidade</span><div class="hero-box">
          <strong class="card-title">Agora você já possui estruturas. O desafio é reconhecê-las quando aparecem em textos e fala contínua.</strong>
          <p>Na vida real ninguém separa o inglês em “aula de simple past” ou “aula de modal”. Tudo aparece misturado. Estratégia ajuda, mas só funciona porque você já construiu conhecimento linguístico.</p>
          <p class="central-question"><strong>Missão:</strong> compreender e responder mesmo sem capturar 100% das palavras.</p>
        </div></section>

        <h3>1. Ler com objetivo não é adivinhar</h3>
        <div class="source-box"><strong class="card-title">School Tech Club — Saturday Workshop</strong><p>Join our beginner-friendly workshop this Saturday from 9 a.m. to noon. Students will build a simple mobile interface, test it in pairs and share the results. You don’t have to bring a laptop; the school will provide computers. Registration closes on Thursday.</p></div>
        <p>Observe quanto do texto você já conhece: futuro com <strong>will</strong>, ausência de obrigação com <strong>don’t have to</strong>, horários e vocabulário transparente.</p>
        ${choice('1','Skimming','Se sua primeira pergunta é “sobre o que é esse texto?”, o melhor movimento é',[['a','captar título, palavras-chave e ideia geral'],['b','traduzir cada palavra antes de continuar'],['c','procurar apenas a letra mais frequente']],'a','Correto. Skimming constrói visão global.','A estratégia responde à tarefa, não substitui a língua.')}

        <h3>2. Skimming e scanning fazem trabalhos diferentes</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Skimming</strong><p>Qual é o assunto? Qual a finalidade? Como o texto está organizado?</p></div><div class="mini-card"><strong>Scanning</strong><p>Onde está a data, o horário, o nome, o requisito ou o número que preciso?</p></div></div>
        ${choice('2','Scanning','Quando termina a inscrição?',[['a','Saturday'],['b','Thursday'],['c','Noon']],'b','Isso. Registration closes on Thursday.','Você transformou uma pergunta em alvo de busca.')}
        <div class="concept-box"><strong class="card-title">Estratégia + língua</strong><p>Você localiza Thursday, mas também precisa compreender <strong>registration closes</strong>. Estratégia sem vocabulário e gramática vira adivinhação; gramática sem estratégia torna a leitura lenta.</p></div>

        <h3>3. Listening: primeira escuta para o sentido global</h3>
        <div class="mission-box" data-listening-lab>
          <div data-audio-task data-text="Hi everyone. Tomorrow's robotics practice starts at three thirty in Lab Two. Please bring your project notes, but you don't have to bring a laptop.">
            <p><strong>Áudio A:</strong> ouça primeiro apenas para descobrir a finalidade da mensagem.</p>
            <div class="quiz-actions"><button class="action-button primary" type="button" data-say>Ouvir</button><button class="action-button" type="button" data-say-slow>Mais devagar</button></div>
          </div>
          ${choice('3','Gist','O áudio fala principalmente sobre',[['a','orientações para uma prática de robótica'],['b','uma viagem'],['c','uma notícia esportiva']],'a','Correto. Robotics practice, starts, Lab Two e bring definem a situação.','Na primeira escuta, não persiga cada palavra.')}
          <div data-audio-task data-text="The meeting is on Friday at ten fifteen. We are going to review the prototype first, and then Maya will present the user test results.">
            <p><strong>Áudio B:</strong> agora sua missão é localizar dia, horário e sequência.</p>
            <div class="quiz-actions"><button class="action-button primary" type="button" data-say>Ouvir</button><button class="action-button" type="button" data-say-slow>Mais devagar</button></div>
          </div>
          ${choice('4','Detalhe','Que horas é a reunião?',[['a','10:50'],['b','10:15'],['c','3:15']],'b','Correto. Ten fifteen = 10:15.','Na segunda escuta, procure o detalhe-alvo.')}
          <div class="mission-feedback" data-speech-status aria-live="polite"></div>
        </div>

        <h3>4. Quando perder uma palavra, não perca a frase inteira</h3>
        <p>Um erro comum é parar mentalmente numa palavra desconhecida. Pergunte: <strong>essa palavra é essencial para minha tarefa?</strong> Se não for, continue. Se for — horário, nome, instrução — confirme.</p>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>Repetir</strong><code>Could you repeat that, please?</code></div><div class="toolbox-item"><strong>Mais devagar</strong><code>Could you speak more slowly?</code></div><div class="toolbox-item"><strong>Confirmar</strong><code>Do you mean Friday at 10:15?</code></div><div class="toolbox-item"><strong>Parte perdida</strong><code>Sorry, I didn’t catch the last part.</code></div></div></div>
        ${choice('5','Reparo','Você ouviu thirteen ou thirty e isso muda o horário. O que é mais competente?',[['a','confirmar o número'],['b','fingir que entendeu'],['c','encerrar a conversa']],'a','Isso. Reparar a comunicação é habilidade, não fracasso.','Quando o detalhe muda a ação, confirme.')}

        <h3>5. Contrações explicam por que frases conhecidas parecem novas no áudio</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Escrita completa</strong><p>I am ready.<br>She is working.<br>I will call you.</p></div><div class="mini-card"><strong>Fala frequente</strong><p>I’m ready.<br>She’s working.<br>I’ll call you.</p></div></div>
        <p>Treine reconhecer blocos, não apenas palavras isoladas. O áudio dos diálogos dos capítulos anteriores existe justamente para essa reciclagem.</p>

        <h3>6. O -ed não tem uma única pronúncia</h3>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>/t/</strong><code>worked, watched</code></div><div class="toolbox-item"><strong>/d/</strong><code>played, cleaned</code></div><div class="toolbox-item"><strong>/ɪd/</strong><code>wanted, needed</code></div></div></div>
        <p>A escrita é a mesma, mas o som final depende do som anterior. <strong>Wanted</strong> cria uma sílaba extra; <strong>worked</strong> normalmente não.</p>
        ${choice('6','Pronúncia','Qual palavra normalmente tem uma sílaba extra no final?',[['a','worked'],['b','played'],['c','wanted']],'c','Correto. Wanted termina em /ɪd/.','Depois de /t/ e /d/, o -ed forma uma sílaba extra.')}

        <h3>7. Números e horários: inteligibilidade é mais importante que “sotaque perfeito”</h3>
        <div class="two-col"><div class="mini-card"><strong>13 × 30</strong><p>thir<strong>TEEN</strong> × <strong>THIR</strong>ty</p></div><div class="mini-card"><strong>14 × 40</strong><p>four<strong>TEEN</strong> × <strong>FOR</strong>ty</p></div></div>
        <p>Em informação crítica, você também pode soletrar o número: <em>thirteen — one three</em>.</p>

        <h3>8. Englishes: compreender variedade sem abandonar clareza</h3>
        <p>O inglês circula entre pessoas de muitos países e repertórios. Pronúncia e vocabulário variam: <strong>lift/elevator</strong>, <strong>mobile phone/cell phone</strong>.</p>
        <div class="concept-box"><strong class="card-title">Meta real</strong><p>Não é eliminar toda marca de origem. É desenvolver <strong>inteligibilidade, repertório e capacidade de adaptação</strong>. Essa visão está alinhada ao inglês como língua franca da BNCC.</p></div>
        ${choice('7','Variação','Ao ouvir uma variedade diferente, o melhor é',[['a','usar contexto, pedir repetição e ampliar repertório'],['b','considerá-la automaticamente errada'],['c','evitar a interação']],'a','Correto. Variação faz parte do inglês real.','Inteligibilidade e adequação importam mais que imitar um único modelo.')}

        <h3>9. Texto artístico: entender além da informação literal</h3>
        <div class="source-box"><strong class="card-title">Texto original MbB</strong><p><em>I carried two maps in my pocket:<br>one showed the streets,<br>the other showed the places<br>I was afraid to enter.<br>By the end of the day,<br>only one map was still useful.</em></p></div>
        <p>A leitura literária exige outra pergunta. Não basta localizar uma data; precisamos observar imagem, contraste e possível sentido figurado.</p>
        ${choice('8','Interpretação','O “segundo mapa” pode representar',[['a','medos ou limites internos do eu lírico'],['b','um mapa obrigatório de trânsito'],['c','apenas um erro de impressão']],'a','Essa interpretação é sustentada por “places I was afraid to enter”.','Em literatura, interpretação precisa de evidência textual, não de palpite solto.')}
        <p>Veja como um mesmo aluno precisa alternar estratégias conforme o gênero: <strong>scanning</strong> serve bem para horário; num poema, o objetivo pode ser interpretar relações e imagens.</p>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Aplicar</span><h3>10. Circuito de comunicação</h3><div class="challenge-box"><ol>
          <li>Resuma a oficina em uma frase sem traduzir tudo.</li><li>Localize prazo e horário por scanning.</li><li>Ouça os dois áudios novamente e anote só palavras-chave.</li><li>Leia três frases em blocos de sentido usando contrações.</li><li>Crie uma frase para pedir repetição e outra para confirmar um número.</li><li>Explique em 2 frases uma interpretação possível do poema e cite a evidência que a sustenta.</li>
        </ol></div><div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>mudar sua estratégia conforme a tarefa e combinar língua, contexto e objetivo sem depender de tradução integral.</p></div></section>
      `,
      init
    });
  }

  function init(root) {
    const status = $('[data-speech-status]', root);
    $$('[data-audio-task]', root).forEach(task => {
      const text = task.dataset.text || '';
      const speak = rate => {
        if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
          if (status) status.innerHTML = `<strong>Áudio indisponível neste navegador.</strong> Texto de apoio: “${text}”`;
          return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
      };
      $('[data-say]', task)?.addEventListener('click', () => speak(0.95));
      $('[data-say-slow]', task)?.addEventListener('click', () => speak(0.72));
    });
  }

  MBB.enableChapter('08 Ler', showChapter);
})();