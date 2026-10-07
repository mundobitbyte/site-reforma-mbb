(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'leitura • contexto • pesquisa • checagem • argumentação • oralidade • variação linguística • literatura • produção textual • multimodalidade',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> integrar os conhecimentos dos capítulos 01–09 para ler criticamente, pesquisar, checar informações, argumentar, adequar a linguagem, interpretar literatura e produzir textos verbais e multimodais com clareza, autoria e responsabilidade.',
      html:`
        <section class="pt-opening">
          <span class="lesson-kicker">Exercícios e desafios</span>
          <div class="hero-box">
            <strong class="card-title">Português não termina quando você identifica uma regra.</strong>
            <p>Na vida real, você precisa <strong>entender uma mensagem, reconhecer o contexto, avaliar a fonte, perceber escolhas de linguagem, interpretar efeitos de sentido e decidir como responder</strong>.</p>
            <p>Por isso, este capítulo mistura situações de leitura, pesquisa, mídia, argumentação, oralidade, literatura, produção textual e cultura digital.</p>
            <p class="central-question"><strong>Pergunta central:</strong> você consegue usar o que aprendeu para interpretar e produzir linguagem em situações novas?</p>
          </div>
        </section>

        <div class="note-box">
          <strong class="card-title">Como usar este capítulo</strong>
          <p>Responda primeiro sem voltar às aulas. Quando errar ou ficar em dúvida, retorne ao capítulo relacionado e revise o raciocínio. O objetivo não é decorar a alternativa correta, mas compreender <strong>por que ela é mais adequada</strong>.</p>
        </div>

        <h3>1. Contexto muda o sentido</h3>
        <p>Em uma conversa, alguém escreve apenas: <strong>“Ótimo. Era exatamente o que faltava.”</strong> A frase aparece depois de uma mensagem informando que o sistema caiu novamente.</p>

        ${choice('1','Leitura contextual','Qual interpretação é mais cuidadosa?',[
          ['a','A palavra “ótimo” prova que a pessoa ficou satisfeita'],
          ['b','O contexto permite interpretar a frase como possível ironia, porque o enunciado contrasta com a situação negativa'],
          ['c','A frase não pode produzir nenhum sentido porque está em ambiente digital']
        ],'b','O sentido não depende apenas das palavras isoladas. A relação entre enunciado, situação e intenção pode produzir ironia.','Leia o que foi dito em relação ao que aconteceu antes e ao contexto em que a fala circula.')}

        <h3>2. Pesquisar não é acumular links</h3>
        <p>Um aluno precisa descobrir o índice de vacinação de sua cidade e encontra três páginas: uma postagem sem fonte, uma notícia que cita dados oficiais e o painel do órgão público responsável.</p>

        ${choice('2','Curadoria de fontes','Qual procedimento é mais confiável?',[
          ['a','Usar a postagem porque aparece primeiro na busca'],
          ['b','Consultar o painel oficial, verificar data e metodologia e usar a notícia como apoio de contexto'],
          ['c','Misturar os três números e calcular uma média']
        ],'b','A fonte primária ajuda a verificar o dado diretamente; a notícia pode complementar a interpretação, desde que também seja lida criticamente.','A posição nos resultados de busca não substitui autoria, data, método e relação com a informação original.')}

        <h3>3. Manchete não substitui notícia</h3>
        <p>Uma manchete diz: <strong>“Uso de telas dobra risco entre adolescentes”</strong>. No texto completo, o estudo citado mostra apenas associação estatística em determinada amostra e não prova causalidade.</p>

        ${choice('3','Checagem e precisão','Qual é o problema principal da manchete?',[
          ['a','Transforma uma associação observada em uma afirmação causal mais forte do que a evidência permite'],
          ['b','Usa poucas palavras'],
          ['c','Fala sobre adolescentes']
        ],'a','Uma formulação pode exagerar o que os dados realmente sustentam. Ler criticamente exige comparar a manchete com a evidência citada.','Correlação, associação e causalidade não são automaticamente equivalentes.')}

        <h3>4. Argumentar é sustentar uma posição</h3>
        <p>Em um debate sobre uso de celulares durante a aula, um aluno diz: <strong>“Tem que proibir porque celular é ruim.”</strong></p>

        ${choice('4','Argumentação','Como fortalecer essa fala?',[
          ['a','Repetir a frase com mais volume'],
          ['b','Definir a tese, apresentar razões, usar evidências pertinentes e considerar possíveis contrapontos'],
          ['c','Atacar quem pensa diferente']
        ],'b','Argumentação consistente articula posição, justificativas e evidências, além de responder a objeções relevantes.','Opinião pode iniciar uma discussão, mas precisa ser sustentada para funcionar como argumento.')}

        <h3>5. Persuasão também usa escolhas visuais</h3>
        <p>Um anúncio mostra um produto em destaque, usa a frase <strong>“Últimas unidades”</strong> e coloca um contador regressivo ao lado do botão de compra.</p>

        ${choice('5','Publicidade e persuasão','Qual análise é mais adequada?',[
          ['a','Texto, organização visual e sensação de urgência trabalham juntos para influenciar a decisão do consumidor'],
          ['b','Somente o preço produz persuasão'],
          ['c','Todo anúncio que usa urgência é necessariamente falso']
        ],'a','A persuasão pode combinar recursos verbais e visuais. Isso não prova falsidade, mas exige leitura crítica das estratégias utilizadas.','Analise como diferentes recursos orientam atenção, emoção e ação.')}

        <h3>6. Falar bem não é decorar um texto inteiro</h3>
        <p>Uma estudante precisa apresentar um projeto em três minutos. Ela escreve duas páginas e tenta memorizar palavra por palavra.</p>

        ${choice('6','Oralidade','Qual estratégia tende a produzir uma apresentação mais eficiente?',[
          ['a','Organizar uma sequência de ideias-chave, ensaiar o tempo, falar para o público e usar apoio visual sem lê-lo integralmente'],
          ['b','Falar o mais rápido possível para caber tudo'],
          ['c','Projetar o texto inteiro e ler de costas para a plateia']
        ],'a','Apresentação oral envolve planejamento, seleção e adaptação ao tempo, ao público e ao suporte visual.','O objetivo não é reproduzir um texto escrito, mas comunicar uma ideia oralmente com clareza.')}

        <h3>7. Variedade linguística não é falta de inteligência</h3>
        <p>Em uma entrevista, uma pessoa usa formas linguísticas típicas de sua região. Um comentário afirma: <strong>“Quem fala assim não sabe português.”</strong></p>

        ${choice('7','Variação linguística','Qual resposta é mais adequada?',[
          ['a','Toda variedade linguística é igual em qualquer situação'],
          ['b','Diferenças regionais e sociais fazem parte da língua; adequação à norma-padrão pode ser exigida em certos contextos, mas isso não torna outras variedades inferiores'],
          ['c','Somente a escrita formal pode ser considerada língua portuguesa']
        ],'b','A língua varia. Saber adequar o registro a diferentes situações é diferente de tratar uma variedade como defeituosa ou intelectualmente inferior.','Separe diversidade linguística de adequação a um contexto específico.')}

        <h3>8. Norma-padrão em contexto</h3>
        <p>Um aluno precisa enviar um pedido formal à direção da escola. Em seu rascunho escreveu: <strong>“Oi, queria ver se vcs conseguem liberar a sala pra gente amanhã.”</strong></p>

        ${choice('8','Adequação','Qual revisão atende melhor ao contexto institucional?',[
          ['a','“Prezada Direção, solicitamos a possibilidade de utilização da sala amanhã.”'],
          ['b','“libera aí por favor”'],
          ['c','Manter abreviações porque mensagens digitais nunca exigem formalidade']
        ],'a','A versão adapta vocabulário, interlocução e nível de formalidade sem tornar a mensagem desnecessariamente complicada.','Norma e registro devem ser escolhidos de acordo com gênero, interlocutor e finalidade.')}

        <h3>9. Literatura não é apenas descobrir “o que o autor quis dizer”</h3>
        <p>Em um conto, a narrativa nunca afirma diretamente que o personagem está com medo, mas descreve mãos trêmulas, silêncio prolongado e hesitação diante da porta.</p>

        ${choice('9','Leitura literária','O leitor pode interpretar medo nessa passagem?',[
          ['a','Sim, desde que sustente a interpretação com elementos do texto e reconheça que a literatura pode sugerir sentidos sem declará-los literalmente'],
          ['b','Não, porque somente palavras como “medo” permitem essa interpretação'],
          ['c','Sim, porque qualquer interpretação é válida mesmo sem apoio textual']
        ],'a','A leitura literária constrói sentidos a partir de pistas textuais, relações internas, contexto e repertório; não é adivinhação livre nem simples caça a palavras explícitas.','Uma interpretação forte precisa mostrar onde encontra apoio no texto.')}

        <h3>10. Repertório ajuda quando realmente dialoga com o texto</h3>
        <p>Ao analisar um poema sobre migração, um estudante lembra de uma canção que também trata de deslocamento e saudade.</p>

        ${choice('10','Repertório cultural','Quando essa referência é útil?',[
          ['a','Quando o aluno explica a relação entre as duas obras e mostra como a comparação amplia a interpretação'],
          ['b','Sempre que citar qualquer obra famosa, mesmo sem relação'],
          ['c','Somente se as duas obras forem do mesmo autor']
        ],'a','Repertório não é enfeite. Ele precisa estabelecer uma relação pertinente que ajude a interpretar, comparar ou argumentar.','A qualidade está na conexão explicada, não na quantidade de referências mencionadas.')}

        <h3>11. Resumir não é copiar e cortar</h3>
        <p>Texto original: <strong>“A biblioteca fechará na quarta-feira para atualização do sistema de empréstimos e reabrirá normalmente às 8h de quinta-feira.”</strong></p>

        ${choice('11','Resumo','Qual opção preserva melhor o núcleo informativo?',[
          ['a','“Biblioteca, quarta, sistema, quinta.”'],
          ['b','“A biblioteca fecha na quarta para atualizar o sistema e reabre quinta às 8h.”'],
          ['c','“Acho ruim a biblioteca fechar.”']
        ],'b','O resumo reduz a extensão sem perder as informações essenciais e as relações de tempo e causa.','Resumir exige compreender e reorganizar, não apenas retirar palavras.')}

        <h3>12. Paráfrase exige reconstrução e autoria responsável</h3>
        <p>Um estudante lê uma explicação científica, muda várias palavras por sinônimos e mantém quase toda a estrutura original.</p>

        ${choice('12','Paráfrase','Qual avaliação é mais adequada?',[
          ['a','Isso sempre basta para caracterizar uma paráfrase autoral'],
          ['b','A reformulação precisa reconstruir a ideia com organização própria e a fonte continua devendo ser indicada quando a ideia veio de outro autor'],
          ['c','Se não houver aspas, a fonte nunca precisa ser citada']
        ],'b','Parafrasear não é mascarar a redação original. É compreender, reformular e manter a rastreabilidade da autoria da ideia.','Troca de sinônimos não resolve sozinha a questão da autoria.')}

        <h3>13. Retextualizar muda a forma, não os fatos</h3>
        <p>Um comunicado informa: <strong>“A reunião será terça-feira, às 18h, no auditório.”</strong> Um aluno transforma a informação em postagem e escreve que a reunião será às 19h porque “fica melhor para o público”.</p>

        ${choice('13','Retextualização','O que aconteceu?',[
          ['a','Uma adaptação legítima de linguagem'],
          ['b','Uma alteração indevida de informação essencial'],
          ['c','Uma mudança apenas de gênero textual']
        ],'b','Retextualizar permite mudar extensão, organização e linguagem, mas não autoriza modificar fatos centrais.','Separe forma de conteúdo: adaptar o gênero não significa reinventar os dados.')}

        <h3>14. Uma captura de tela não carrega necessariamente o contexto inteiro</h3>
        <p>Circula uma imagem com a frase de uma pessoa pública. Não aparecem data, perfil de origem nem as falas anteriores e posteriores.</p>

        ${choice('14','Linguagem digital','Qual atitude é mais segura antes de compartilhar?',[
          ['a','Buscar a publicação ou registro original e verificar autoria, data, contexto e integridade do trecho'],
          ['b','Confiar porque a imagem parece profissional'],
          ['c','Compartilhar primeiro para perguntar se alguém sabe a origem']
        ],'a','Capturas podem ser verdadeiras e ainda assim estar incompletas. Recuperar o contexto ajuda a evitar interpretações distorcidas.','A aparência de uma imagem não substitui verificação da origem.')}

        <h3>15. Multimodalidade: todos os elementos participam</h3>
        <p>Um vídeo mostra dados corretos na tela, mas usa música dramática, cortes acelerados e imagens de desastre que não correspondem ao evento analisado.</p>

        ${choice('15','Leitura multimodal','Por que esses elementos precisam ser analisados?',[
          ['a','Porque recursos sonoros e visuais podem produzir enquadramentos emocionais e alterar a forma como o conteúdo verbal é percebido'],
          ['b','Porque somente imagens importam em vídeos'],
          ['c','Porque dados deixam de ser dados quando há música']
        ],'a','Em textos multimodais, diferentes recursos atuam juntos. A informação verbal pode ser verdadeira e ainda assim ser enquadrada de modo tendencioso por outros elementos.','Leia palavras, imagens, som, ritmo e montagem como partes do mesmo texto.')}

        <h3>16. Acessibilidade também é produção de sentido</h3>
        <p>Uma postagem escolar divulga um gráfico importante apenas como imagem, sem descrição ou equivalente textual.</p>

        ${choice('16','Acessibilidade digital','Qual melhoria é mais adequada?',[
          ['a','Adicionar uma descrição que comunique os dados e relações essenciais do gráfico'],
          ['b','Escrever apenas “imagem” no texto alternativo'],
          ['c','Remover todos os gráficos do site']
        ],'a','Quando a imagem contém informação essencial, o conteúdo equivalente deve permitir que essa informação seja compreendida por quem não a vê.','Acessibilidade não é apenas indicar que existe uma imagem; é preservar a informação relevante.')}

        <h3>17. Integrando tudo</h3>
        <p>Uma publicação viral apresenta uma estatística surpreendente, uma imagem forte, uma frase curta e um link para um site desconhecido.</p>

        ${choice('17','Leitura crítica integrada','Qual sequência demonstra melhor competência de leitura?',[
          ['a','Reagir à imagem, aceitar o número e compartilhar'],
          ['b','Identificar a afirmação, verificar a fonte e o dado, analisar contexto e linguagem visual, comparar evidências e só então formar uma conclusão'],
          ['c','Ignorar a postagem apenas porque viralizou']
        ],'b','Leitura crítica integra conteúdo, fonte, evidência, contexto, linguagem e circulação. Nem popularidade nem desconfiança automática substituem análise.','O melhor caminho é investigar antes de aceitar ou rejeitar.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafios de produção</span>
          <h3>18. Agora responda sem alternativas</h3>

          <div class="challenge-box">
            <strong class="card-title">Desafio A — Uma notícia em três camadas</strong>
            <p>Escolha uma notícia recente de interesse público e faça três movimentos:</p>
            <ol>
              <li>resuma o fato principal em até três frases;</li>
              <li>identifique quais evidências a matéria apresenta e de onde elas vêm;</li>
              <li>aponte uma informação que ainda precisaria ser verificada antes de uma conclusão mais forte.</li>
            </ol>
            <details><summary>Critério de qualidade</summary><p>Separe fato relatado, evidência apresentada e interpretação. Não transforme hipótese em certeza.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio B — Do informal ao institucional</strong>
            <p>Mensagem original: <strong>“prof, n consegui entregar pq o site deu ruim ontem, tem como mandar hj?”</strong></p>
            <p>Transforme a mensagem em um e-mail curto e adequado a uma situação escolar formal, preservando o fato e o pedido.</p>
            <details><summary>Critério de qualidade</summary><p>A versão precisa ser clara, respeitosa, objetiva e adequada ao interlocutor, sem exagerar na formalidade nem alterar o conteúdo.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio C — Interpretação literária sustentada</strong>
            <p>Escolha um poema, conto curto ou trecho literário estudado em aula. Escreva um parágrafo interpretativo contendo:</p>
            <ul>
              <li>uma ideia central de interpretação;</li>
              <li>duas evidências do próprio texto;</li>
              <li>uma explicação de como essas evidências sustentam sua leitura;</li>
              <li>uma referência cultural adicional apenas se ela realmente ampliar a interpretação.</li>
            </ul>
            <details><summary>Critério de qualidade</summary><p>Não basta afirmar o que você sentiu. Mostre como o texto permite construir sua interpretação.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio D — Um conteúdo, três gêneros</strong>
            <p>Informação de origem: <strong>“A escola realizará uma mostra cultural no sábado, das 9h às 13h, com entrada gratuita.”</strong></p>
            <ol>
              <li>produza um aviso formal para o site;</li>
              <li>produza uma mensagem curta para o grupo da turma;</li>
              <li>produza um roteiro de até 20 segundos para anúncio oral.</li>
            </ol>
            <details><summary>Critério de qualidade</summary><p>Os fatos essenciais devem permanecer iguais; gênero, organização e linguagem podem mudar.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio E — Publicação multimodal responsável</strong>
            <p>Crie o planejamento de uma postagem para divulgar um projeto escolar. Inclua:</p>
            <ul>
              <li>público e objetivo;</li>
              <li>título e texto principal;</li>
              <li>hierarquia visual;</li>
              <li>imagem ou recurso visual realmente necessário;</li>
              <li>texto alternativo quando aplicável;</li>
              <li>fonte de dados ou créditos;</li>
              <li>checagem final de privacidade, clareza e contexto.</li>
            </ul>
            <details><summary>Critério de qualidade</summary><p>A publicação precisa funcionar para quem lê, ser verificável, respeitar autoria e privacidade e não depender de elementos visuais inacessíveis para transmitir informação essencial.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento da 1ª série</strong>
          <p><strong>Entender:</strong> linguagem produz sentido em contextos reais.</p>
          <p><strong>Experimentar:</strong> compare fontes, gêneros, registros e modos de linguagem.</p>
          <p><strong>Analisar:</strong> justifique interpretações com evidências e reconheça limites.</p>
          <p><strong>Aplicar:</strong> leia e produza textos claros, críticos, adequados, autorais e responsáveis.</p>
        </div>
      `
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();
