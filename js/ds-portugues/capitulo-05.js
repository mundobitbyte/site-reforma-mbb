(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Falar e escutar',
      technical:'escuta atenta • turno e tempo de fala • tomada de nota • planejamento oral • voz • recursos não verbais • slides • interação',
      title:'05 — Oralidade e apresentação',
      objective:'<strong>Objetivo:</strong> planejar, realizar e avaliar apresentações orais adequadas ao público e ao contexto, praticando escuta atenta, tomada de notas e uso funcional de voz, gestos, imagens e slides.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">O grupo pesquisou bem — mas ninguém conseguiu acompanhar a apresentação.</strong>
          <p>Na feira de projetos, um estudante lê parágrafos inteiros projetados na tela, outro fala por cima do colega e o terceiro acelera porque o tempo está acabando. A pesquisa está correta, mas a audiência não sabe <strong>qual é a ideia principal, o que anotar nem quando pode perguntar</strong>.</p>
          <p>Uma apresentação oral não é um texto escrito simplesmente lido em voz alta. Ela precisa ser planejada para <strong>quem escuta, para o tempo disponível, para o espaço e para o objetivo da fala</strong>.</p>
          <p class="central-question"><strong>Pergunta central:</strong> o que transforma informação correta em uma fala que o outro realmente consegue acompanhar?</p>
        </div>

        ${choice('1','Primeira leitura','Um aluno domina o assunto, mas lê todos os slides sem olhar para a turma. Qual é o principal problema?',[['a','Ele necessariamente não estudou'],['b','O conteúdo pode estar correto, mas a forma dificulta a interação e o acompanhamento da audiência'],['c','Toda apresentação precisa ser decorada palavra por palavra']], 'b','Domínio do conteúdo e comunicação são dimensões diferentes. A apresentação precisa ser construída para quem escuta.','Ler integralmente a tela não prova falta de estudo, mas pode reduzir clareza e interação.')}

        <h3>1. Oralidade é interação</h3>
        <p>Quando falamos em uma apresentação, debate, reunião ou entrevista, não produzimos linguagem no vazio. Há <strong>interlocutores, objetivo, regras de participação, tempo e contexto</strong>. Por isso, uma mesma explicação pode precisar mudar de acordo com a situação.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Quem escuta?</strong><p>Colegas que já conhecem o tema? Visitantes? Professores? Público geral?</p></div>
          <div class="mini-card"><strong>Para quê?</strong><p>Explicar, defender uma proposta, apresentar resultados, instruir, relatar, responder perguntas?</p></div>
          <div class="mini-card"><strong>Em quais condições?</strong><p>Quanto tempo? Qual espaço? Há microfone, tela, perguntas, demonstração prática?</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Fala planejada não é fala artificial</strong>
          <p>Planejar significa organizar ideias, prever exemplos, selecionar recursos e controlar o tempo. Não significa eliminar todas as marcas de oralidade nem memorizar cada palavra.</p>
        </div>

        ${choice('2','Adequação','Você explicará o mesmo projeto primeiro para sua turma e depois para visitantes que nunca estudaram o tema. O que faz sentido?',[['a','Usar exatamente a mesma explicação, sem qualquer adaptação'],['b','Ajustar vocabulário, exemplos e quantidade de contexto ao público'],['c','Retirar todas as informações técnicas']], 'b','Adequação não significa empobrecer o conteúdo; significa fornecer o contexto de que aquela audiência precisa.','O público interfere no modo de explicar, mas o conteúdo essencial deve permanecer correto.')}

        <h3>2. Escutar também é uma habilidade de linguagem</h3>
        <p>Uma boa situação oral depende de quem fala <strong>e</strong> de quem escuta. Escuta atenta inclui acompanhar a linha de raciocínio, respeitar turno e tempo de fala, identificar dúvidas e registrar o que será necessário recuperar depois.</p>

        <div class="two-col">
          <div class="mini-card"><strong>Escuta passiva</strong><p>Ouvir sons sem acompanhar a organização da fala ou sem saber o que se procura.</p></div>
          <div class="mini-card"><strong>Escuta orientada</strong><p>Ouvir com um objetivo: localizar tese, etapas, dados, exemplos, dúvidas ou decisões.</p></div>
        </div>

        <h3>3. Tomar nota não é transcrever tudo</h3>
        <p>Tentar escrever cada palavra pode fazer o ouvinte perder a próxima ideia. Notas úteis selecionam <strong>palavras-chave, relações, dados importantes e perguntas</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Transcrição</strong><p>“O palestrante começou dizendo que o projeto foi desenvolvido durante...”</p><p><small>É lenta e pode capturar forma sem captar estrutura.</small></p></div>
          <div class="mini-card"><strong>Nota funcional</strong><p><strong>Projeto:</strong> 3 semanas → objetivo: reduzir desperdício → teste com 2 turmas → resultado: -18% → dúvida: como mediram?</p><p><small>Preserva relações e cria pontos para revisão.</small></p></div>
        </div>

        ${choice('3','Tomada de nota','Durante uma palestra, qual anotação tende a ser mais útil para estudar depois?',[['a','Copiar cada frase, mesmo sem conseguir acompanhar o restante'],['b','Registrar ideias centrais, dados, relações e dúvidas'],['c','Anotar somente palavras que o professor repetiu']], 'b','Notas funcionais selecionam o que precisa ser recuperado e deixam rastros do raciocínio.','Frequência de palavras não substitui a identificação da estrutura da fala.')}

        <h3>4. Antes de falar, construa um percurso</h3>
        <p>Uma apresentação clara costuma responder a uma sequência reconhecível. Não existe um único modelo, mas um percurso simples ajuda:</p>

        <div class="pt-process">
          <span>situação / pergunta</span><b>→</b>
          <span>ideia central</span><b>→</b>
          <span>evidências / exemplos</span><b>→</b>
          <span>conclusão</span><b>→</b>
          <span>perguntas</span>
        </div>

        <div class="note-box">
          <strong class="card-title">Planeje por tópicos, não por páginas de fala</strong>
          <p>Um roteiro pode conter palavras-chave, dados que não podem ser esquecidos, ordem dos exemplos e marcações de tempo. Se o apresentador depende de um texto integral, qualquer interrupção pode dificultar a retomada.</p>
        </div>

        ${choice('4','Planejamento','Um grupo terá 4 minutos para apresentar cinco resultados de pesquisa. Qual estratégia é mais adequada?',[['a','Colocar todo o relatório nos slides e tentar lê-lo rapidamente'],['b','Definir a mensagem central, selecionar os resultados essenciais e ensaiar o tempo'],['c','Falar sem roteiro para parecer espontâneo']], 'b','Tempo limitado exige seleção, hierarquia e ensaio.','Improviso total e excesso de conteúdo podem esconder a ideia central.')}

        <h3>5. A voz produz efeitos de sentido</h3>
        <p><strong>Volume, pausas, ritmo, intensidade e entonação</strong> ajudam o ouvinte a perceber organização e destaque. Falar muito rápido pode apagar relações; falar baixo demais pode tornar a mensagem inacessível; uma pausa pode marcar transição ou permitir que um dado seja processado.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Volume</strong><p>Precisa ser suficiente para o ambiente, sem confundir projeção com grito.</p></div>
          <div class="mini-card"><strong>Ritmo e pausa</strong><p>Permitem separar etapas, destacar ideias e dar tempo de processamento.</p></div>
          <div class="mini-card"><strong>Entonação</strong><p>Pode sinalizar pergunta, contraste, ênfase e fechamento.</p></div>
        </div>

        <div class="ok-box">
          <strong class="card-title">Não existe uma “voz escolar perfeita”</strong>
          <p>Sotaque e variedade linguística não medem inteligência. O objetivo é <strong>inteligibilidade e adequação ao contexto</strong>, preservando a diversidade legítima de modos de falar.</p>
        </div>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Instructor_speaking_to_students_in_classroom.jpg?width=1200" alt="Instrutor em pé falando para estudantes sentados em uma sala de aula">
          <figcaption>
            <strong>Uma apresentação é uma relação entre quem fala e quem escuta.</strong>
            <span>A foto ajuda a observar elementos concretos da situação oral: posição do falante, audiência, espaço, direção do olhar e condições de escuta. Nenhuma postura isolada garante uma boa apresentação; os recursos precisam servir à comunicação.</span>
            <small>Foto: Ryan Hagerty / U.S. Fish and Wildlife Service. Wikimedia Commons. Domínio público como obra do governo federal dos Estados Unidos. <a href="https://commons.wikimedia.org/wiki/File:Instructor_speaking_to_students_in_classroom.jpg" target="_blank" rel="noopener">Fonte e licença</a>.</small>
          </figcaption>
        </figure>

        <h3>6. Corpo e olhar também comunicam</h3>
        <p>Gestos, expressão facial, direção do olhar e posição no espaço podem apoiar a fala. O critério não é “parecer um apresentador profissional”, mas evitar que o corpo <strong>contradiga, esconda ou dificulte</strong> a mensagem.</p>

        <div class="two-col">
          <div class="mini-card"><strong>Recurso funcional</strong><p>Apontar para o dado que está sendo explicado, olhar para diferentes partes da audiência, aproximar-se de um objeto demonstrado.</p></div>
          <div class="mini-card"><strong>Ruído possível</strong><p>Ficar de costas lendo a tela, bloquear a projeção, repetir gestos sem função ou caminhar sem relação com a fala.</p></div>
        </div>

        <h3>7. Slide é apoio, não teleprompter</h3>
        <p>O 1 DS.pdf exige explicitamente o uso adequado de ferramentas de apoio a apresentações. Isso inclui <strong>fontes legíveis, conteúdo topicalizado, quantidade equilibrada de texto e imagem e uso harmônico de recursos visuais</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Slide que compete com a fala</strong><p>Parágrafo longo + fonte pequena + várias imagens + animações sem função.</p></div>
          <div class="mini-card"><strong>Slide que apoia a fala</strong><p>Uma ideia principal + dado/gráfico/imagem necessária + poucas palavras que orientam a audiência.</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Checklist de apoio visual</strong>
          <p><strong>Legibilidade:</strong> quem está no fundo consegue ler?</p>
          <p><strong>Hierarquia:</strong> fica claro o que é título, dado e conclusão?</p>
          <p><strong>Necessidade:</strong> a imagem ou gráfico ajuda a compreender algo?</p>
          <p><strong>Quantidade:</strong> há informação demais disputando atenção com a fala?</p>
          <p><strong>Coerência:</strong> o que aparece na tela corresponde ao que está sendo explicado?</p>
        </div>

        ${choice('5','Slides','Qual slide tende a apoiar melhor uma explicação oral?',[['a','Um parágrafo completo em fonte pequena para o apresentador ler'],['b','Um título claro, um gráfico necessário e uma frase curta com a conclusão principal'],['c','Várias animações para manter a audiência ocupada']], 'b','O slide apoia a estrutura da fala e oferece uma evidência visual que a audiência consegue ler.','Slides devem reduzir carga, não criar uma segunda apresentação paralela.')}

        <h3>8. Perguntas não são uma ameaça à apresentação</h3>
        <p>Escutar uma pergunta, confirmar o que foi entendido e responder com precisão faz parte da oralidade. Quando não souber, uma resposta responsável pode ser: <strong>“Não tenho esse dado agora; preciso verificar.”</strong></p>

        ${choice('6','Interação','Após a apresentação, alguém faz uma pergunta que o grupo não consegue responder com segurança. Qual atitude é mais adequada?',[['a','Inventar uma resposta para não demonstrar dúvida'],['b','Reconhecer o limite, registrar a pergunta e dizer que é preciso verificar'],['c','Ignorar a pessoa e encerrar']], 'b','Reconhecer limites preserva a confiabilidade e transforma a pergunta em caminho de investigação.','Oralidade responsável inclui escuta e capacidade de não afirmar o que não se sabe.')}

        <h3>9. Aplicação: transforme um texto em fala</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência — apresentação de 3 minutos</strong>
          <p>Escolha um texto curto de pesquisa produzido por você ou pelo grupo e transforme-o em uma apresentação oral de até <strong>3 minutos</strong>.</p>
          <ol>
            <li>Defina quem será a audiência e qual mensagem ela precisa levar.</li>
            <li>Crie um roteiro com no máximo seis tópicos.</li>
            <li>Selecione um dado, exemplo ou imagem indispensável.</li>
            <li>Produza no máximo três slides, sem parágrafos para leitura.</li>
            <li>Ensaie e marque o tempo.</li>
            <li>Peça a um colega para anotar a ideia central, um dado e uma dúvida enquanto escuta.</li>
            <li>Compare as notas do colega com o que você pretendia comunicar e revise a apresentação.</li>
          </ol>
          <details><summary>O que torna o desafio completo?</summary><p>A apresentação só está bem resolvida quando o que o falante pretendia comunicar também pode ser reconstruído por quem escutou. Por isso, a nota do colega funciona como evidência para a revisão.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Oralidade envolve planejamento, escuta, turnos, tempo, voz, corpo, recursos visuais e interação com a audiência.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso transformar um texto em fala, construir notas funcionais, usar slides como apoio e revisar minha apresentação a partir da compreensão do público.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Habilidades mobilizadas: EM13LP35, EM13LP13 e EM13LP01. Objetos relacionados: escuta atenta, turno e tempo de fala, tomada de nota, compreensão de textos orais, planejamento/produção/edição de textos orais, produção oral com recursos multissemióticos e uso adequado de ferramentas de apoio para apresentações.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('05 ', showChapter);
})();
