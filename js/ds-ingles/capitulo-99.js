(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'to be • simple present • description • present continuous • simple past • future • modals • reading • listening • genres • technical vocabulary • production',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> verificar se você consegue compreender, escolher e produzir inglês em situações novas — sem depender de uma regra anunciada antes de cada questão.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Fechamento da 1ª série</span><div class="hero-box">
          <strong class="card-title">Agora a pergunta não é “qual capítulo eu estou estudando?”.</strong>
          <p>Na vida real, a situação vem primeiro. Você precisa decidir sozinho se a mensagem pede identidade, rotina, descrição, ação em andamento, passado, futuro, conselho, obrigação ou outra função.</p>
          <p class="central-question"><strong>Critério:</strong> você consegue transferir o que aprendeu para um contexto que não copia os exemplos do curso?</p>
        </div></section>

        <h3>Parte A — Escolha pelo significado</h3>
        ${choice('1','Situação','Uma pessoa pergunta quem você é. Qual resposta resolve melhor?',[['a','I’m a first-year high-school student.'],['b','I study yesterday.'],['c','There are student.']],'a','Correto. A necessidade é identidade; to be resolve a relação.','Antes da forma, identifique o que a situação pede.')}
        ${choice('2','Rotina','“Carla usually ___ to school at 7:10.”',[['a','go'],['b','goes'],['c','is going']],'b','Correto. Usually indica hábito e Carla = she.','Simple present + 3ª pessoa.')}
        ${choice('3','Existência','Você apresenta pela primeira vez que há dois laboratórios no andar de cima. Qual frase funciona?',[['a','There are two labs upstairs.'],['b','The labs are two upstairs.'],['c','Upstairs has two labs there.']],'a','Isso. There are apresenta existência/presença no plural.','Diferencie existir de localizar algo já conhecido.')}
        ${choice('4','Agora','Seu amigo liga e pergunta o que você está fazendo neste instante. Qual resposta combina?',[['a','I study every day.'],['b','I’m studying for tomorrow’s test.'],['c','I studied last night.']],'b','Correto. Ação em andamento → be + -ing.','A escolha temporal nasce da situação.')}
        ${choice('5','Passado','Qual pergunta está correta para saber o que alguém fez ontem?',[['a','What did you do yesterday?'],['b','What did you did yesterday?'],['c','What do you yesterday?']],'a','Correto. Did já marca o passado; do fica na forma base.','Evite marcar o passado duas vezes.')}
        ${choice('6','Plano','Você já decidiu estudar no sábado. Qual frase destaca essa intenção?',[['a','I’m going to study on Saturday.'],['b','I studied tomorrow.'],['c','I’ll studied Saturday.']],'a','Correto. Going to destaca plano/intenção já existente.','O contexto antecede a escolha da forma.')}
        ${choice('7','Conselho','Seu colega dorme quatro horas por noite. Qual mensagem tem força de recomendação?',[['a','You should get more sleep.'],['b','You must not sleep.'],['c','You can slept.']],'a','Isso. Should aconselha.','Escolha o modal pela força da mensagem.')}

        <h3>Parte B — Contrastes que mostram compreensão</h3>
        ${choice('8','To be × verbo comum','Qual pergunta está correta?',[['a','Are you tired?'],['b','Do you are tired?'],['c','Are you feel tired?']],'a','Correto. Com to be, o próprio verbo forma a pergunta.','Não misture o sistema de do/does com to be.')}
        ${choice('9','Rotina × agora','Complete: “I usually ___ by bus, but today I ___ with my father.”',[['a','go / am going'],['b','am going / go'],['c','went / going']],'a','Isso. Usually = hábito; today, nesse contraste, = situação atual.','Os dois presentes têm funções diferentes.')}
        ${choice('10','Existência × localização','Qual frase diz que existe uma impressora no laboratório?',[['a','There is a printer in the lab.'],['b','The printer is in the lab.'],['c','The lab is a printer.']],'a','Correto. A primeira apresenta existência; a segunda localiza uma impressora já identificada.','Esse contraste é mais importante que decorar tradução.')}
        ${choice('11','Proibição × ausência de obrigação','Qual frase significa “Você não precisa imprimir”?',[['a','You must not print.'],['b','You don’t have to print.'],['c','You can’t print yesterday.']],'b','Correto. Don’t have to = não é necessário.','Must not seria proibição.')}
        ${choice('12','Plano × decisão imediata','O telefone toca e você decide atender. Qual frase é natural?',[['a','I’ll answer it.'],['b','I’m going to answered it.'],['c','I answered it tomorrow.']],'a','Isso. Will funciona bem para decisão que surge no momento.','Compare com going to para plano anterior.')}

        <h3>Parte C — Leia para resolver uma tarefa</h3>
        <div class="source-box"><strong class="card-title">Community Coding Day</strong><p>Saturday, 9:30 a.m.–2 p.m. — Central Library</p><p>Beginners are welcome. Participants will work in small groups to create a simple website for a local community project. Lunch is provided. You should bring headphones, but you don’t have to bring a computer. Registration closes on September 12.</p></div>
        ${choice('13','Scanning','Você quer saber se precisa levar computador. Qual trecho resolve a dúvida?',[['a','You don’t have to bring a computer.'],['b','Beginners are welcome.'],['c','Lunch is provided.']],'a','Correto. A tarefa pede um detalhe específico.','Scanning é útil porque existe uma pergunta concreta.')}
        ${choice('14','Força do modal','Headphones são apresentados como',[['a','recomendados'],['b','proibidos'],['c','já fornecidos obrigatoriamente']],'a','Isso. Should indica recomendação.','A leitura depende também da força gramatical da frase.')}
        ${choice('15','Prazo','Quando a inscrição encerra?',[['a','Saturday'],['b','September 12'],['c','2 p.m.']],'b','Correto. Registration closes on September 12.','Localize a palavra-alvo e interprete a estrutura em volta.')}

        <h3>Parte D — Escuta e reparo</h3>
        <div class="dialogue-box"><div class="speech"><small>Coordinator</small>The meeting has been moved to thirteen thirty.</div><div class="speech you"><small>You</small>Sorry, could you confirm the time? Do you mean one thirty p.m.?</div><div class="speech"><small>Coordinator</small>Yes, exactly. One thirty p.m.</div></div>
        ${choice('16','Comunicação','Por que a pergunta de confirmação é competente?',[['a','Porque um detalhe de horário pode mudar a ação'],['b','Porque fingir compreensão é sempre melhor'],['c','Porque evita qualquer conversa']],'a','Correto. Reparar a interação protege o sentido.','Comunicação não exige compreender tudo de primeira.')}

        <h3>Parte E — O mesmo conhecimento em gêneros diferentes</h3>
        <div class="source-box"><strong class="card-title">Relato</strong><p>Yesterday our robotics team presented a prototype at school. First, we tested the sensors. Then we showed the project to visitors. Finally, we answered questions.</p></div>
        ${choice('17','Narrativa','Qual elemento ajuda a organizar a sequência?',[['a','First / Then / Finally'],['b','There is'],['c','Should']],'a','Correto. Conectores guiam a ordem dos acontecimentos.','O passado conta o fato; os conectores organizam a narrativa.')}
        <div class="source-box"><strong class="card-title">Lead</strong><p>First-year students presented a robotics prototype at their school on Friday and demonstrated its sensors to visitors.</p></div>
        ${choice('18','Gênero','O lead difere do relato porque',[['a','concentra rapidamente fato, participantes, local e tempo'],['b','não usa passado'],['c','precisa rimar']],'a','Isso. O gênero reorganiza a mesma experiência para outra finalidade.','Aprender língua inclui aprender a usá-la em gêneros diferentes.')}

        <h3>Parte F — Inglês técnico em contexto</h3>
        <div class="source-box"><strong class="card-title">Project setup</strong><p>1. Clone the repository.<br>2. Run npm install.<br>3. Create a .env file.<br>4. Start the development server.<br><strong>Important:</strong> API keys must not be committed.</p></div>
        ${choice('19','Vocabulário técnico','Nesse texto, “run npm install” significa',[['a','executar o comando'],['b','correr com o computador'],['c','apagar o repositório']],'a','Correto. O domínio técnico determina o sentido de run.','Consulte glossário/dicionário depois de formular hipótese pelo contexto.')}
        ${choice('20','Segurança','O aviso sobre API keys indica que',[['a','não devem ser enviadas ao repositório'],['b','devem ser publicadas'],['c','não existem']],'a','Isso. Must not comunica proibição.','A gramática tem consequência técnica real.')}

        <h3>Parte G — Interpretação artística</h3>
        <div class="source-box"><p><em>I carried two maps in my pocket:<br>one showed the streets,<br>the other showed the places<br>I was afraid to enter.</em></p></div>
        ${choice('21','Evidência','Uma interpretação possível do segundo mapa é “medos internos” porque',[['a','o texto menciona lugares que o eu lírico tinha medo de entrar'],['b','todo mapa simboliza medo'],['c','a palavra pocket significa medo']],'a','Correto. A interpretação está ligada a uma evidência textual.','Literatura permite interpretações, mas não qualquer palpite.')}

        <h3>Parte H — Produção: sem alternativas</h3>
        <div class="challenge-box"><strong class="card-title">1. Apresentação</strong><p>Escreva 5 frases sobre você: identidade, origem, característica, rotina e preferência. Depois transforme uma delas em pergunta para outra pessoa.</p></div>
        <div class="challenge-box"><strong class="card-title">2. Um lugar real</strong><p>Descreva sua sala, quarto, laboratório ou estúdio. Use <strong>there is/are</strong>, <strong>have/has</strong> e três preposições. Depois explique por que escolheu cada estrutura.</p></div>
        <div class="challenge-box"><strong class="card-title">3. Três tempos</strong><p>Escreva uma rotina, algo que está acontecendo agora, algo que aconteceu ontem e um plano para amanhã.</p></div>
        <div class="challenge-box"><strong class="card-title">4. Resolver um problema</strong><p>Você não entendeu o prazo de uma atividade. Escreva um pedido cortês de confirmação. Depois dê um conselho a um colega que perde prazos.</p></div>
        <div class="challenge-box"><strong class="card-title">5. Projeto</strong><p>Apresente um projeto em quatro partes: problema atual → o que vocês fizeram → resultado → próximo passo. Use pelo menos dois conectores.</p></div>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Autocrítica final</span><h3>Como saber se a 1ª série funcionou?</h3><div class="ok-box"><strong>Não é falar inglês avançado.</strong><p>É conseguir construir frases próprias, compreender mensagens simples, distinguir funções importantes, falar de presente/passado/futuro, pedir ajuda, ler com objetivo e produzir pequenos textos adequados a situações reais.</p></div><div class="challenge-box"><strong class="card-title">Teste decisivo</strong><p>Feche os modelos. Escolha uma situação da sua vida e tente produzir inglês novo. Se você só consegue repetir o exemplo, volte ao capítulo e refaça a sequência <strong>necessidade → significado → forma → prática → produção</strong>.</p></div></section>
      `
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();