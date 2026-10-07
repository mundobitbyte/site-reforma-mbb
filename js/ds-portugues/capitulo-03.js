(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Informação e mídia',
      technical:'fato • notícia • enquadramento • projeto editorial • fontes • parcialidade • pós-verdade • fake news • checagem',
      title:'03 — Jornalismo, notícia e checagem',
      objective:'<strong>Objetivo:</strong> analisar como notícias são selecionadas e construídas, comparar coberturas, reconhecer diferentes graus de parcialidade e aplicar procedimentos básicos de checagem de textos, dados e imagens.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">O fato é um; as manchetes são duas</strong>
          <p>Uma chuva forte interrompe o trânsito em uma avenida. Um portal publica: <strong>“Temporal paralisa avenida e provoca congestionamento”</strong>. Outro destaca: <strong>“Falha de drenagem agrava impactos da chuva em avenida”</strong>.</p>
          <p>Os dois textos podem se referir ao <strong>mesmo acontecimento</strong> e, ainda assim, escolher causas, fontes, palavras e ângulos diferentes. Isso não prova automaticamente que um deles seja falso. Mas obriga o leitor a perguntar: <strong>o que foi verificado, o que foi selecionado e o que ficou de fora?</strong></p>
          <p class="central-question"><strong>Pergunta central:</strong> como ler notícias criticamente sem cair nem na credulidade nem no “não dá para acreditar em nada”?</p>
        </div>

        ${choice('1','Fato e enquadramento','Dois veículos descrevem o mesmo acontecimento com títulos diferentes. Qual conclusão é mais cuidadosa?',[['a','Um dos dois necessariamente inventou o fato'],['b','É preciso comparar dados, fontes, recortes e evidências antes de julgar a cobertura'],['c','Todo título diferente prova manipulação']], 'b','Diferenças de enquadramento existem; a avaliação depende das evidências e das escolhas feitas em cada cobertura.','Títulos orientam a leitura, mas não permitem concluir sozinhos que uma notícia é falsa.')}

        <h3>1. Notícia é resultado de seleção e apuração</h3>
        <p>Um acontecimento pode produzir milhares de informações. O trabalho jornalístico seleciona o que será investigado, quais fontes serão consultadas, quais dados entram, em que ordem e com qual destaque.</p>

        <div class="pt-process">
          <span>acontecimento</span><b>→</b>
          <span>apuração</span><b>→</b>
          <span>seleção</span><b>→</b>
          <span>edição</span><b>→</b>
          <span>publicação</span>
        </div>

        <div class="three-col">
          <div class="mini-card"><strong>Fato verificável</strong><p>Algo que pode ser confrontado com registros, documentos, dados, testemunhos ou outras evidências.</p></div>
          <div class="mini-card"><strong>Interpretação</strong><p>Explicação sobre significado, causa, consequência ou importância do fato.</p></div>
          <div class="mini-card"><strong>Enquadramento</strong><p>Modo como a cobertura seleciona e organiza aspectos do acontecimento para apresentá-lo ao público.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Seleção não é sinônimo de mentira</strong>
          <p>Todo texto precisa selecionar informações. O problema aparece quando há omissões relevantes, distorções, fontes frágeis, dados fora de contexto ou afirmações apresentadas como fato sem evidência suficiente.</p>
        </div>

        ${choice('2','Leitura de notícia','Uma reportagem traz um número muito impactante. Antes de compartilhá-lo, o que vale observar?',[['a','Se o número é grande o bastante para chamar atenção'],['b','Fonte, período, definição usada, universo pesquisado e contexto do dado'],['c','Somente o título da matéria']], 'b','Dados precisam ser lidos com contexto: origem, período, definição e universo mudam o que podem significar.','Um número isolado pode ser verdadeiro e ainda assim produzir uma impressão enganosa.')}

        <h3>2. Projeto editorial: veículos não são caixas neutras</h3>
        <p>Veículos jornalísticos possuem <strong>projetos editoriais</strong>: definem público, temas prioritários, linguagem, formatos, critérios de relevância e procedimentos de edição. Podem ser públicos, privados, institucionais, independentes, comunitários ou especializados.</p>
        <p>Conhecer o projeto editorial ajuda a compreender a cobertura, mas não substitui a análise do texto. Um veículo com posição editorial conhecida ainda pode publicar informação factual bem apurada; outro pode apresentar uma notícia problemática mesmo declarando neutralidade.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Newsroom.jpg?width=1200" alt="Sala de redação com jornalistas trabalhando diante de computadores e mesas compartilhadas">
          <figcaption>
            <strong>Notícia é produção coletiva.</strong>
            <span>Uma redação reúne repórteres, editores e outros profissionais. A publicação final passa por escolhas de pauta, apuração, edição e hierarquização. A foto ajuda a lembrar que notícia não surge pronta no feed.</span>
            <small>Foto: Mephisto 97.6, redação em Leipzig, 2011. Wikimedia Commons, CC BY-SA 3.0. <a href="https://commons.wikimedia.org/wiki/File:Newsroom.jpg" target="_blank" rel="noopener">Fonte e licença</a>.</small>
          </figcaption>
        </figure>

        ${choice('3','Projeto editorial','Conhecer o projeto editorial de um veículo serve principalmente para:',[['a','Decidir automaticamente se tudo que ele publica é verdadeiro ou falso'],['b','Compreender critérios, público, prioridades e escolhas editoriais, sem dispensar a checagem de cada conteúdo'],['c','Evitar ler qualquer veículo que tenha linha editorial']], 'b','Projeto editorial contextualiza a produção, mas a qualidade de uma notícia precisa ser examinada pelas evidências e pelo método de apuração.','Contexto institucional ajuda, mas não substitui a análise da matéria.')}

        <h3>3. Parcialidade, imparcialidade e não neutralidade</h3>
        <p>Uma notícia pode buscar <strong>imparcialidade</strong> no sentido de tratar evidências e fontes com critérios consistentes. Isso não significa ausência total de escolhas: título, ordem dos parágrafos, fontes consultadas, imagem e espaço dado a cada aspecto interferem no modo como o acontecimento aparece.</p>
        <p>Por isso, o leitor crítico compara <strong>graus de parcialidade</strong> e pergunta se as escolhas são justificáveis, transparentes e compatíveis com as evidências.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Comparação fraca</strong><p>“Não gostei do veículo, então a notícia é falsa.”</p></div>
          <div class="mini-card"><strong>Comparação forte</strong><p>“Quais fatos cada texto apresenta? Quais fontes usa? O que destaca ou omite? Os dados permitem a conclusão proposta?”</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Uma regra útil para checagem</strong>
          <p>Organizações de fact-checking que seguem o Código de Princípios da IFCN devem identificar fontes significativas, priorizar fontes primárias quando adequadas e explicar sua metodologia. A ideia central é permitir que o leitor consiga <strong>refazer o caminho da verificação</strong>.</p>
          <p><a href="https://ifcncodeofprinciples.poynter.org/the-commitments" target="_blank" rel="noopener">IFCN — Code of Principles</a></p>
        </div>

        <h3>4. Pós-verdade não significa que “a verdade acabou”</h3>
        <p>O fenômeno da <strong>pós-verdade</strong> descreve situações em que crenças, identidades, emoções ou pertencimento podem pesar mais na formação de opinião do que fatos apurados. Isso ajuda a explicar por que uma informação corrigida às vezes continua circulando.</p>
        <p>O conceito não autoriza concluir que fatos deixaram de existir. Pelo contrário: torna ainda mais importante distinguir <strong>o que eu gostaria que fosse verdade</strong> daquilo que as melhores evidências disponíveis sustentam.</p>

        ${choice('4','Pós-verdade','Uma informação contradiz uma crença importante para você, mas é apoiada por documentos e fontes independentes. Qual postura é mais compatível com uma leitura crítica?',[['a','Descartar a evidência porque incomoda'],['b','Examinar as fontes e estar disposto a revisar a crença se as evidências forem consistentes'],['c','Escolher a versão mais compartilhada']], 'b','Pensamento crítico inclui revisar crenças quando evidências confiáveis as contradizem.','Convicção pessoal não substitui verificação.')}

        <h3>5. “Fake news” não é qualquer notícia de que discordamos</h3>
        <p>Na conversa cotidiana, a expressão <em>fake news</em> é usada de formas muito diferentes. Para análise, é melhor separar problemas:</p>

        <div class="three-col">
          <div class="mini-card"><strong>Erro</strong><p>Informação incorreta publicada sem intenção comprovada de enganar. Deve ser corrigida.</p></div>
          <div class="mini-card"><strong>Desinformação</strong><p>Conteúdo falso ou enganoso produzido ou difundido deliberadamente para enganar.</p></div>
          <div class="mini-card"><strong>Conteúdo fora de contexto</strong><p>Foto, vídeo, número ou frase reais reapresentados de modo que criam uma conclusão enganosa.</p></div>
        </div>

        <p>A UNESCO recomenda tratar o problema como um conjunto de formas de <strong>desinformação e informação enganosa</strong>, porque o rótulo “fake news” também pode ser usado apenas para atacar jornalismo de que alguém não gosta.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Gazeta_do_Rio_de_Janeiro_1808.png?width=900" alt="Primeira página da Gazeta do Rio de Janeiro, datada de 10 de setembro de 1808">
          <figcaption>
            <strong>Seleção e hierarquia são anteriores à internet.</strong>
            <span>A primeira página da <em>Gazeta do Rio de Janeiro</em>, de 1808, já organiza notícias por títulos, origem e ordem. Mudaram tecnologias e velocidade de circulação, mas o leitor continua precisando perguntar quem selecionou as informações e em qual contexto.</span>
            <small>Imagem: primeira página da <em>Gazeta do Rio de Janeiro</em>, Imprensa Régia, 10/09/1808. Wikimedia Commons, domínio público. <a href="https://commons.wikimedia.org/wiki/File:Gazeta_do_Rio_de_Janeiro_1808.png" target="_blank" rel="noopener">Fonte</a>.</small>
          </figcaption>
        </figure>

        <h3>6. Checagem de uma notícia: um roteiro prático</h3>
        <div class="evidence-grid">
          <div class="mini-card"><strong>1. Identifique a afirmação</strong><p>O que exatamente está sendo dito? É um fato verificável, interpretação, previsão ou opinião?</p></div>
          <div class="mini-card"><strong>2. Vá à origem</strong><p>Quem publicou primeiro? Há documento, dado, entrevista ou registro original?</p></div>
          <div class="mini-card"><strong>3. Confira data e local</strong><p>Conteúdo antigo reaparece com frequência como se fosse atual ou de outro lugar.</p></div>
          <div class="mini-card"><strong>4. Compare fontes</strong><p>Procure fontes independentes e verifique se confirmam os elementos centrais.</p></div>
          <div class="mini-card"><strong>5. Leia além do título</strong><p>Manchetes resumem e chamam atenção; a sustentação precisa estar no conteúdo.</p></div>
          <div class="mini-card"><strong>6. Preserve a dúvida</strong><p>Se não houver evidência suficiente, a resposta correta pode ser: “ainda não dá para confirmar”.</p></div>
        </div>

        ${choice('5','Checagem','Uma postagem afirma: “Estudo prova que 90% dos jovens fazem X”, mas não informa qual estudo. Qual é o próximo passo mais forte?',[['a','Compartilhar e procurar a fonte depois'],['b','Localizar o estudo original, conferir amostra, data, método e o que realmente foi medido'],['c','Confiar porque há um percentual preciso']], 'b','Números com aparência de precisão precisam ser rastreados até a fonte e o método.','Percentual sem fonte não é evidência suficiente.')}

        <h3>7. Fotos também precisam ser verificadas</h3>
        <p>Uma foto pode ser autêntica e ainda assim estar <strong>fora de contexto</strong>. Antes de usá-la como prova, verifique:</p>
        <div class="two-col">
          <div class="mini-card"><strong>Origem</strong><p>Quem publicou? Existe versão anterior ou arquivo original?</p></div>
          <div class="mini-card"><strong>Data e local</strong><p>A imagem foi feita quando e onde a legenda afirma?</p></div>
          <div class="mini-card"><strong>Busca reversa</strong><p>Pode ajudar a localizar aparições anteriores da mesma imagem ou versões semelhantes.</p></div>
          <div class="mini-card"><strong>Detalhes visuais</strong><p>Placas, clima, arquitetura, sombras, uniformes e outros elementos podem confirmar ou contradizer a legenda.</p></div>
        </div>
        <p><strong>Metadados</strong> podem ajudar, mas não são prova absoluta: podem estar ausentes, alterados ou removidos por plataformas.</p>

        ${choice('6','Foto fora de contexto','Uma fotografia real de uma enchente de 2022 é compartilhada como se mostrasse uma enchente ocorrida hoje. O principal problema é:',[['a','A imagem ser necessariamente falsa'],['b','O contexto atribuído à imagem ser falso, mesmo que a fotografia seja autêntica'],['c','Toda fotografia antiga ser inútil']], 'b','Uma imagem verdadeira pode desinformar quando data, local ou acontecimento são apresentados de forma incorreta.','Autenticidade da imagem e veracidade da legenda são questões diferentes.')}

        <h3>8. Compare coberturas, não torcidas</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência — laboratório de cobertura</strong>
          <p>Escolha um acontecimento recente <strong>não partidário</strong> — por exemplo, uma mudança no transporte, um evento climático, uma descoberta científica ou uma decisão administrativa da sua cidade — e localize três coberturas sobre ele.</p>
          <ol>
            <li>Registre título, veículo, data e autor quando disponível.</li>
            <li>Liste os fatos que aparecem nas três fontes.</li>
            <li>Identifique o que cada cobertura destaca ou deixa em segundo plano.</li>
            <li>Compare as fontes citadas por cada texto.</li>
            <li>Escolha um dado ou imagem e tente rastreá-lo até a fonte original.</li>
            <li>Escreva uma síntese que diferencie <strong>fatos confirmados, interpretações e pontos ainda incertos</strong>.</li>
          </ol>
          <details><summary>O que caracteriza uma boa resposta?</summary><p>Não é escolher “o jornal vencedor”. É mostrar critérios: evidência, rastreabilidade, diversidade de fontes, coerência entre título e conteúdo e capacidade de reconhecer incerteza.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Notícias resultam de apuração e escolhas editoriais. Enquadramento não é automaticamente falsidade, mas precisa ser analisado.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso comparar coberturas, rastrear dados e imagens, distinguir fato de interpretação e evitar compartilhar algo que ainda não foi confirmado.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Habilidades mobilizadas: EM13LP36, EM13LP37A, EM13LP37B, EM13LP38, EM13LP39, EM13LP40 e EM13LP42, além de EM13LGG102. Objetos relacionados: análise de textos jornalísticos; projetos editoriais; graus de parcialidade/imparcialidade; pós-verdade e fake news; checagem de fatos e fotos; curadoria de coberturas e comparação de enfoques.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('03 ', showChapter);
})();
