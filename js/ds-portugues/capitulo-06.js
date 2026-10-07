(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;

    MBB.showLesson({
      unit:'Língua em uso',
      technical:'variação linguística • norma-padrão • adequação • níveis de variação • dimensões sociais • preconceito linguístico • gramática e uso',
      title:'06 — Variação linguística e norma-padrão',
      objective:'<strong>Objetivo:</strong> compreender a variação como característica natural das línguas, reconhecer diferentes níveis e dimensões de variação, distinguir adequação de preconceito linguístico e usar a norma-padrão de modo consciente nos contextos em que ela é exigida.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">Mandioca, aipim ou macaxeira: qual é a palavra certa?</strong>
          <p>Em diferentes regiões do Brasil, o mesmo alimento pode receber nomes distintos. Em uma conversa familiar, alguém pode dizer <strong>“macaxeira”</strong>; em outra região, <strong>“aipim”</strong>; em muitos lugares, <strong>“mandioca”</strong>. A diferença não significa que um grupo “sabe português” e outro não.</p>
          <p>Ao mesmo tempo, a escola também ensina formas de referência usadas em documentos, textos acadêmicos, provas e situações formais. O desafio é compreender duas ideias ao mesmo tempo: <strong>a língua varia</strong> e <strong>alguns contextos exigem convenções específicas</strong>.</p>
          <p class="central-question"><strong>Pergunta central:</strong> se a língua varia, por que existe norma-padrão — e quando precisamos usá-la?</p>
        </div>

        ${choice('1','Primeira análise','Um estudante diz “aipim” e outro diz “macaxeira” para o mesmo alimento. O que esse caso mostra?',[['a','Um deles necessariamente está errado'],['b','A língua pode apresentar variação lexical entre regiões e grupos'],['c','Palavras regionais não pertencem ao português']], 'b','Nomes diferentes para o mesmo referente são um exemplo de variação lexical.','Diferença regional de vocabulário não é sinônimo de erro linguístico.')}

        <h3>1. Toda língua viva varia</h3>
        <p>Falantes não usam a língua de forma idêntica. Pronúncia, vocabulário, construções gramaticais e modos de interação podem variar conforme <strong>região, época, grupo social, idade, profissão e situação comunicativa</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Regional</strong><p>Diferenças associadas a regiões e comunidades: vocabulário, pronúncia e algumas construções.</p></div>
          <div class="mini-card"><strong>Histórica</strong><p>A língua muda ao longo do tempo. Palavras, sentidos e estruturas podem surgir, desaparecer ou mudar de frequência.</p></div>
          <div class="mini-card"><strong>Social</strong><p>Grupos com experiências sociais, profissionais ou culturais distintas podem desenvolver usos característicos.</p></div>
          <div class="mini-card"><strong>Situacional</strong><p>A mesma pessoa muda sua forma de falar ou escrever conforme interlocutor, objetivo e grau de formalidade.</p></div>
          <div class="mini-card"><strong>Etária</strong><p>Gírias e hábitos de linguagem podem variar entre gerações.</p></div>
          <div class="mini-card"><strong>Ocupacional</strong><p>Profissões e áreas de conhecimento usam termos e gêneros próprios.</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Variação não significa ausência de regras</strong>
          <p>Uma variedade linguística não é um conjunto aleatório de “erros”. Falantes aprendem padrões de sua comunidade e os usam de forma regular. A Sociolinguística estuda justamente essas regularidades e as relações entre língua e sociedade.</p>
        </div>

        ${choice('2','Dimensão da variação','Um programador usa “commit”, “branch” e “deploy” no trabalho, mas evita esses termos ao explicar o mesmo processo a alguém que não é da área. Isso envolve principalmente:',[['a','Variação ocupacional e adequação ao interlocutor'],['b','Incapacidade de falar português'],['c','Mudança histórica da língua apenas']], 'a','Vocabulário profissional e adaptação ao público são dimensões reais do uso linguístico.','A escolha de palavras depende também da comunidade de prática e da situação.')}

        <h3>2. A variação ocorre em vários níveis</h3>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Fonético-fonológico</strong><p>Variações de pronúncia, como diferentes realizações de <em>r</em>, <em>s</em> ou vogais. Sotaques não são defeitos de fala.</p></div>
          <div class="mini-card"><strong>Lexical</strong><p>Palavras diferentes para referentes semelhantes: mandioca, aipim, macaxeira; tangerina, mexerica, bergamota.</p></div>
          <div class="mini-card"><strong>Sintático</strong><p>Diferenças na organização das frases e na concordância, que podem variar conforme comunidade e situação.</p></div>
          <div class="mini-card"><strong>Semântico</strong><p>Uma mesma palavra pode adquirir sentidos diferentes conforme região, grupo ou contexto.</p></div>
          <div class="mini-card"><strong>Estilístico-pragmático</strong><p>Escolhas como “Poderia me enviar o arquivo?” e “Manda o arquivo aí” realizam atos semelhantes com graus de formalidade distintos.</p></div>
          <div class="mini-card"><strong>Gráfico na escrita digital</strong><p>Abreviações, emojis, repetição de letras e pontuação expressiva podem construir tom e sentido em certos gêneros digitais.</p></div>
        </div>

        ${choice('3','Níveis','As formas “Poderia me informar o horário?” e “Que horas vai ser?” diferem principalmente porque:',[['a','Uma delas não possui sentido'],['b','Escolhem recursos diferentes de acordo com estilo, situação e interlocutor'],['c','A segunda não pertence à língua portuguesa']], 'b','A variação estilístico-pragmática envolve escolhas adequadas a situações e relações entre interlocutores.','Formalidade é uma dimensão do uso; não define sozinha se alguém domina ou não a língua.')}

        <h3>3. Mapas dialetais ajudam — mas não desenham fronteiras rígidas</h3>
        <p>Pesquisadores usam entrevistas, gravações e atlas linguísticos para estudar padrões regionais. Um mapa pode representar tendências, mas <strong>línguas não obedecem às fronteiras como estados em um mapa político</strong>. Migração, cidades, meios de comunicação e contato entre comunidades produzem zonas de transição e mistura.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Portugueselanguagedialects-Brazil.png?width=1000" alt="Mapa esquemático com zonas dialetais do português brasileiro">
          <figcaption>
            <strong>Uma representação de zonas dialetais — não um conjunto de fronteiras exatas.</strong>
            <span>Este mapa reúne propostas históricas e estudos posteriores sobre variedades do português brasileiro. A própria documentação da imagem alerta que classificações dialetais são simplificações e passam por revisão. Use-o para perceber diversidade, não para concluir que todas as pessoas de uma área falam do mesmo modo.</span>
            <small>Mapa: PedroPVZ e colaboradores, Wikimedia Commons, CC BY-SA 3.0. Baseado em trabalhos de Antenor Nascentes e referências posteriores. <a href="https://commons.wikimedia.org/wiki/File:Portugueselanguagedialects-Brazil.png" target="_blank" rel="noopener">Fonte, referências e licença</a>.</small>
          </figcaption>
        </figure>

        ${choice('4','Leitura do mapa','Um mapa dialetal colore uma região como “caipira”. Qual conclusão é mais cuidadosa?',[['a','Toda pessoa daquela área fala exatamente igual'],['b','O mapa representa tendências e classificações; dentro da área ainda há diversidade e transições'],['c','As fronteiras linguísticas são tão precisas quanto fronteiras estaduais']], 'b','Mapas dialetais simplificam padrões complexos e não eliminam variação interna.','Variedades não formam blocos humanos homogêneos.')}

        <h3>4. Então o que é norma-padrão?</h3>
        <p>A <strong>norma-padrão</strong> é um conjunto de convenções de referência usado especialmente em práticas formais de escrita e em situações institucionais. Ela é ensinada na escola porque amplia o acesso a gêneros valorizados socialmente: relatórios, documentos, textos acadêmicos, processos seletivos, comunicação profissional e outros.</p>

        <div class="note-box">
          <strong class="card-title">Aprender a norma-padrão é ampliar repertório, não apagar sua variedade</strong>
          <p>Um estudante não precisa abandonar a forma de falar de sua família ou comunidade para aprender a escrever uma redação formal. O objetivo é desenvolver <strong>mais possibilidades de escolha</strong>.</p>
        </div>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Conversa entre colegas</strong><p>“Me manda o link quando der.”</p><p><small>Pode ser perfeitamente adequado ao contexto informal.</small></p></div>
          <div class="mini-card"><strong>Solicitação institucional</strong><p>“Solicito o envio do endereço eletrônico assim que possível.”</p><p><small>O gênero e o contexto favorecem maior formalidade.</small></p></div>
        </div>

        <p>Isso não significa que a segunda frase seja “mais inteligente”. Ela apenas mobiliza convenções esperadas em determinada situação.</p>

        ${choice('5','Norma e adequação','Qual afirmação é mais adequada?',[['a','A norma-padrão deve substituir todas as formas de fala espontânea'],['b','A norma-padrão é uma referência importante em determinados gêneros e situações, enquanto outras variedades continuam funcionando em seus contextos'],['c','Como a língua varia, não existe nenhuma convenção que precise ser aprendida']], 'b','Domínio linguístico inclui compreender variação e saber mobilizar convenções conforme a situação.','Nem uniformização total nem abandono de convenções explica bem o funcionamento da língua.')}

        <h3>5. Gramática tradicional e gramáticas de uso podem olhar o mesmo fenômeno de formas diferentes</h3>
        <p>Uma gramática normativa costuma perguntar: <strong>“qual forma é prescrita pela norma-padrão?”</strong>. Uma gramática descritiva ou de uso também pode perguntar: <strong>“quais formas os falantes realmente usam, em quais contextos e com quais padrões?”</strong>.</p>

        <div class="two-col">
          <div class="mini-card"><strong>Perspectiva normativa</strong><p>É necessária quando precisamos aprender convenções valorizadas em gêneros formais.</p></div>
          <div class="mini-card"><strong>Perspectiva descritiva</strong><p>Ajuda a compreender a língua como ela funciona entre falantes reais, inclusive usos que a norma-padrão não recomenda.</p></div>
        </div>

        <p>As duas perguntas não são idênticas. Dizer que uma construção existe e é sistemática na fala de um grupo <strong>não significa</strong> afirmar que ela é recomendada em um texto formal; e dizer que uma forma não pertence à norma-padrão <strong>não prova</strong> que o falante seja incapaz de raciocinar ou se comunicar.</p>

        <h3>6. Preconceito linguístico não é o mesmo que ensinar revisão</h3>
        <p>Corrigir um texto escolar porque ele precisa seguir as convenções de um gênero formal pode fazer parte do ensino. O problema aparece quando uma forma de falar é usada para <strong>inferiorizar a pessoa ou o grupo</strong>, como se sotaque, origem regional ou variedade popular fossem sinais de menor inteligência ou valor.</p>

        <div class="field-box">
          <strong class="card-title">Troque o julgamento pela análise</strong>
          <p>Em vez de “essa pessoa fala errado”, experimente perguntar:</p>
          <ul>
            <li>qual variedade está sendo usada?</li>
            <li>em qual contexto?</li>
            <li>a comunicação está funcionando?</li>
            <li>o gênero exige alguma convenção específica?</li>
            <li>se for necessário revisar, qual mudança torna o texto mais adequado ao objetivo?</li>
          </ul>
        </div>

        ${choice('6','Preconceito ou adequação?','Um professor pede que o aluno revise uma carta formal para adequá-la às convenções do gênero, mas deixa claro que a fala regional do aluno não é sinal de inferioridade. Essa atitude:',[['a','Pode ensinar adequação sem desvalorizar a variedade do aluno'],['b','É necessariamente preconceito linguístico'],['c','Mostra que toda variedade deve ser usada em qualquer gênero']], 'a','Ensinar convenções formais e respeitar a diversidade linguística são objetivos compatíveis.','O ponto central é separar exigência do gênero de julgamento sobre a pessoa.')}

        <h3>7. Aplicação: três situações, três escolhas</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <p>Você precisa comunicar a mesma informação: <strong>“o prazo do projeto termina sexta-feira às 18h”</strong>.</p>
          <ol>
            <li>Escreva uma mensagem para um amigo próximo.</li>
            <li>Escreva um aviso oficial para a página da escola.</li>
            <li>Imagine que você explicará oralmente a informação para familiares de diferentes idades e regiões. Que escolhas faria para ser claro sem ridicularizar nenhuma variedade?</li>
            <li>Em cada versão, identifique duas escolhas de linguagem e explique por que são adequadas ao contexto.</li>
          </ol>
          <details><summary>O que caracteriza uma boa resposta?</summary><p>A informação central permanece igual, mas vocabulário, forma de tratamento, organização e grau de formalidade podem mudar. A justificativa deve falar de contexto e objetivo, não de “fala superior” e “fala inferior”.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>A língua varia em vários níveis e dimensões; norma-padrão e variedades linguísticas não são a mesma coisa.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso reconhecer variação, evitar preconceito e escolher uma forma linguística adequada ao gênero, público e objetivo.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Habilidades mobilizadas: EM13LP09 e EM13LP10, articuladas a EM13LP01. Objetos relacionados: variação linguística em níveis fonético-fonológico, lexical, sintático, semântico e estilístico-pragmático; dimensões regional, histórica, social, situacional, ocupacional e etária; comparação entre gramática tradicional e gramáticas de uso; norma-padrão e adequação aos contextos de produção.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('06 ', showChapter);
})();
