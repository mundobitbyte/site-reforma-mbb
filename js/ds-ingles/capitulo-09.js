(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Aplicação',
      technical:'emails • instructions • technical vocabulary • glossaries • acronyms • connectors • relative pronouns • passive voice • source checking • presentations',
      title:'09 — Inglês para estudar e trabalhar',
      objective:'<strong>Objetivo:</strong> combinar a língua construída nos capítulos anteriores para ler oportunidades, escrever e-mails, compreender documentação, pesquisar e apresentar projetos com clareza.',
      html:`
        <section class="en-opening"><span class="lesson-kicker">Entender a necessidade</span><div class="hero-box">
          <strong class="card-title">Você recebe uma oportunidade real: participar de um projeto de tecnologia para estudantes.</strong>
          <p>Para responder, não basta “saber regras”. Você precisa compreender requisitos, escrever uma mensagem adequada, interpretar termos técnicos, explicar experiência passada e falar de próximos passos.</p>
          <p class="central-question"><strong>Missão:</strong> transformar a gramática aprendida em ferramenta de estudo e trabalho.</p>
        </div></section>

        <h3>1. Leia uma oportunidade com objetivo</h3>
        <div class="source-box"><strong class="card-title">Student Tech Support Project</strong><p>We are looking for high-school students who are interested in technology and communication. Participants will help organize simple tutorials for new students. Meetings are held online on Wednesdays at 4 p.m. Applicants must send a short introduction and describe one technology skill they already have. Previous work experience is not required.</p></div>
        <p>Observe a espiral: <strong>will</strong> fala do que os participantes farão; <strong>must</strong> marca requisito; <strong>is not required</strong> indica que experiência anterior não é exigida.</p>
        ${choice('1','Leitura funcional','O candidato precisa enviar',[['a','uma apresentação curta e uma habilidade de tecnologia'],['b','um currículo de dez páginas'],['c','um vídeo obrigatório']],'a','Correto. O texto explicita must send a short introduction and describe one skill.','Leitura funcional combina scanning e compreensão da força do modal.')}

        <h3>2. Registro: a mesma intenção pode ser expressa de formas diferentes</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Mensagem entre amigos</strong><p><code>hey, what time is the thing?</code></p></div><div class="mini-card"><strong>E-mail institucional</strong><p><code>Hello, I’m writing to ask about the Student Tech Support Project.</code></p></div></div>
        <p>O segundo não é “inglês melhor” em absoluto; é mais adequado a esse contexto. <strong>Registro</strong> é escolha de linguagem conforme público, objetivo e situação.</p>

        <h3>3. Um e-mail simples tem arquitetura</h3>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>Abertura</strong><code>Hello / Dear...</code></div><div class="toolbox-item"><strong>Objetivo</strong><code>I’m writing to ask about...</code></div><div class="toolbox-item"><strong>Apresentação</strong><code>I’m a high-school student and...</code></div><div class="toolbox-item"><strong>Pedido</strong><code>Could you confirm...?</code></div><div class="toolbox-item"><strong>Encerramento</strong><code>Thank you for your time.</code></div><div class="toolbox-item"><strong>Despedida</strong><code>Best regards,</code></div></div></div>
        <div class="source-box"><p>Hello,</p><p>I’m writing about the Student Tech Support Project. I’m a high-school student and I’m interested in web development. I can create simple HTML pages, and last semester I developed a small school project.</p><p>Could you confirm whether the Wednesday meetings are recorded?</p><p>Thank you for your time.<br>Best regards,<br>Marina</p></div>
        <p>Veja a progressão funcionando: <strong>I’m</strong> apresenta; <strong>can</strong> mostra capacidade; <strong>developed</strong> relata experiência; <strong>could</strong> faz pedido cortês.</p>
        ${choice('2','Registro','Qual pedido combina melhor com esse e-mail?',[['a','Could you confirm the meeting time, please?'],['b','tell me time now'],['c','YOU MUST SEND TIME']],'a','Correto. A frase é clara e adequada ao contexto.','O recurso linguístico serve à relação entre remetente e destinatário.')}

        <h3>4. Vocabulário técnico: não traduza automaticamente a primeira definição</h3>
        <p>Palavras técnicas precisam ser interpretadas no domínio correto. <strong>Run</strong>, por exemplo, pode significar “correr”, mas em computação pode significar <strong>executar</strong> um programa.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>run</strong><p>I run every morning. → correr</p></div><div class="mini-card"><strong>run</strong><p>Run the program. → executar</p></div></div>
        <div class="concept-box"><strong class="card-title">Procedimento MbB para termo desconhecido</strong><p>1) leia a frase inteira; 2) identifique o domínio; 3) formule uma hipótese; 4) consulte glossário/dicionário confiável; 5) volte à frase e confirme se o sentido funciona.</p></div>
        ${choice('3','Contexto técnico','Em “Run npm install”, run significa principalmente',[['a','executar o comando'],['b','correr fisicamente'],['c','apagar o arquivo']],'a','Isso. O domínio técnico redefine o sentido mais provável.','Dicionário sem contexto pode levar ao significado errado.')}

        <h3>5. Glossários, siglas e abreviações reduzem ruído</h3>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>UI</strong><code>User Interface</code></div><div class="toolbox-item"><strong>API</strong><code>Application Programming Interface</code></div><div class="toolbox-item"><strong>URL</strong><code>Uniform Resource Locator</code></div><div class="toolbox-item"><strong>FAQ</strong><code>Frequently Asked Questions</code></div></div></div>
        <p>Você não precisa decorar todas as siglas existentes. Precisa aprender a <strong>reconhecer que são unidades técnicas</strong>, localizar sua expansão e registrar o significado útil para o contexto.</p>

        <h3>6. Documentação: a língua tem consequência prática</h3>
        <div class="source-box"><strong class="card-title">Project setup</strong><p><strong>Requirements:</strong> Node.js 20 or later.</p><p>1. Clone the repository.<br>2. Run <strong>npm install</strong>.<br>3. Create a <strong>.env</strong> file.<br>4. Start the development server.</p><p><strong>Important:</strong> API keys must not be committed to the repository.</p></div>
        ${choice('4','Sequência','Qual é a primeira ação?',[['a','Clone the repository'],['b','Start the server'],['c','Commit API keys']],'a','Correto. A numeração organiza a execução.','Em documentação, ordem é informação funcional.')}
        ${choice('5','Segurança','“API keys must not be committed” significa',[['a','as chaves não devem ser enviadas ao repositório'],['b','as chaves precisam ser públicas'],['c','não existem chaves']],'a','Isso. Must not marca proibição forte.','O modal aprendido no capítulo 07 evita um erro técnico real.')}

        <h3>7. Conectores: não basta empilhar frases</h3>
        <p>Ao produzir um texto maior, o leitor precisa enxergar a relação entre ideias.</p>
        <div class="language-tool"><div class="toolbox-grid"><div class="toolbox-item"><strong>and</strong><code>adição</code></div><div class="toolbox-item"><strong>but / however</strong><code>contraste</code></div><div class="toolbox-item"><strong>because</strong><code>causa</code></div><div class="toolbox-item"><strong>so / therefore</strong><code>consequência</code></div></div></div>
        <div class="comparison-grid"><div class="mini-card"><strong>because</strong><p>We changed the plan <strong>because</strong> the internet was unstable.</p></div><div class="mini-card"><strong>so</strong><p>The internet was unstable, <strong>so</strong> we changed the plan.</p></div></div>
        <p>O fato é semelhante; muda a maneira de organizar causa e consequência.</p>
        ${choice('6','Conector','Complete: “The first test failed, ___ we changed the configuration.”',[['a','so'],['b','who'],['c','because the']],'a','Correto. A segunda oração é consequência da primeira.','Pergunte qual relação lógica existe entre as ideias.')}

        <h3>8. Who, which e that: junte informações relacionadas</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>who — pessoa</strong><p>The student <strong>who</strong> created the page is here.</p></div><div class="mini-card"><strong>which/that — coisa</strong><p>The app <strong>that</strong> we tested is free.</p></div></div>
        <p>Não transforme isso num capítulo inteiro de oração relativa. Aqui a função é simples: acrescentar informação sem criar várias frases desconectadas.</p>
        ${choice('7','Relativo','Complete: “The teacher ___ helped us teaches English.”',[['a','who'],['b','which'],['c','when']],'a','Correto. Who retoma uma pessoa.','Use o referente para escolher a forma.')}

        <h3>9. Voz passiva: por que textos técnicos usam tanto?</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Ativa</strong><p>The team <strong>created</strong> the app.</p><p>Foco no agente.</p></div><div class="mini-card"><strong>Passiva</strong><p>The app <strong>was created</strong> by the team.</p><p>Foco no produto/resultado.</p></div></div>
        <p>A passiva básica usa <strong>to be + particípio passado</strong>. Em documentação e relatórios, muitas vezes o processo ou resultado importa mais que quem realizou a ação.</p>
        <div class="note-box"><strong class="card-title">Ampliação, não núcleo</strong><p>Você não precisa dominar todas as formas passivas agora. Reconheça usos frequentes como <strong>is stored</strong>, <strong>is required</strong>, <strong>was created</strong>.</p></div>

        <h3>10. Pesquisa: ampliar acesso sem abandonar verificação</h3>
        <div class="argument-chain"><span>pergunta</span><b>→</b><span>palavras-chave</span><b>→</b><span>fonte</span><b>→</b><span>evidência</span><b>→</b><span>síntese</span></div>
        <p>Pesquisar em inglês abre acesso a documentação, artigos e comunidades maiores. Mas resultado de busca ou resposta de IA não é automaticamente confiável.</p>
        ${choice('8','Fonte','Uma IA fornece uma referência que você não consegue localizar. O melhor é',[['a','verificar antes de usar'],['b','citar porque parece acadêmica'],['c','inventar o endereço']],'a','Correto. Referência precisa existir e sustentar a afirmação.','Ferramenta ajuda a pesquisar; não substitui verificação.')}

        <h3>11. Apresentar projeto: use o tempo verbal para organizar a história</h3>
        <div class="source-box"><p><strong>Problem:</strong> Our school has many rooms, and new visitors sometimes get lost.</p><p><strong>Solution:</strong> We created a simple digital map.</p><p><strong>Test:</strong> Last month, 30 visitors tested the prototype.</p><p><strong>Next step:</strong> We are going to improve the search function.</p></div>
        <p>Presente apresenta o contexto; passado relata o que foi feito; futuro aponta o próximo passo. A gramática agora organiza uma comunicação profissional.</p>

        <section class="chapter-checkpoint"><span class="lesson-kicker">Aplicar</span><h3>12. Kit acadêmico-profissional</h3><div class="challenge-box"><ol>
          <li>Escreva um e-mail curto pedindo uma informação sobre curso, projeto ou evento.</li><li>Leia uma pequena documentação e crie um glossário com 5 termos.</li><li>Explique duas siglas encontradas.</li><li>Descreva um projeto em: problema, solução, o que aconteceu e próximo passo.</li><li>Use dois conectores e, se fizer sentido, uma relativa ou passiva simples.</li>
        </ol><details><summary>Checklist</summary><p>Meu registro combina com o público? Consultei termos pelo contexto? Usei os tempos verbais de acordo com o momento? Minha fonte é verificável? A frase mais avançada realmente ajuda a comunicação?</p></details></div><div class="ok-box"><strong>Você aprendeu de verdade se consegue:</strong><p>resolver uma tarefa de estudo ou trabalho usando inglês como ferramenta, sem separar artificialmente gramática, leitura e produção.</p></div></section>
      `
    });
  }

  MBB.enableChapter('09 Inglês', showChapter);
})();