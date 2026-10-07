(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Convencer e argumentar',
      technical:'publicidade • público-alvo • persuasão • argumento • apelo • recursos multissemióticos • publicidade digital • leitura crítica',
      title:'04 — Publicidade, persuasão e argumentação',
      objective:'<strong>Objetivo:</strong> analisar como anúncios e campanhas combinam linguagem verbal, visual e sonora para persuadir, distinguir argumentos de apelos e avaliar criticamente promessas, evidências e estratégias de publicidade em diferentes mídias.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">Você pesquisou uma mochila. Depois, ela começou a aparecer em todo lugar.</strong>
          <p>Um anúncio mostra a mochila em uma viagem, outro oferece <strong>“últimas unidades”</strong>, um influenciador faz um vídeo de unboxing e uma terceira peça diz que o produto é <strong>“a escolha de quem não para”</strong>. Nenhuma dessas mensagens apenas descreve o objeto: elas tentam criar razões, emoções e associações para orientar uma decisão.</p>
          <p>Persuadir não é necessariamente enganar. O problema começa quando a mensagem <strong>esconde informação relevante, apresenta opinião como fato, usa evidência fraca como prova ou cria uma impressão que não consegue sustentar</strong>.</p>
          <p class="central-question"><strong>Pergunta central:</strong> como uma publicidade tenta nos convencer — e como podemos analisar suas estratégias sem aceitar nem rejeitar tudo automaticamente?</p>
        </div>

        ${choice('1','Primeira leitura','Um anúncio mostra um tênis ao lado de atletas e usa a frase “Feito para quem supera limites”. Qual leitura é mais cuidadosa?',[['a','A imagem prova que qualquer pessoa correrá melhor com o tênis'],['b','O anúncio associa o produto a desempenho e superação, mas essa associação não prova sozinha um efeito do produto'],['c','Imagens não participam da persuasão']], 'b','A peça constrói uma associação simbólica. Para comprovar desempenho, seriam necessárias evidências adequadas.','Publicidade combina linguagem e associação; isso não transforma automaticamente a mensagem em prova factual.')}

        <h3>1. Publicidade é comunicação orientada a um objetivo</h3>
        <p>Uma peça publicitária costuma ser planejada para <strong>um público, uma ação desejada e um contexto de circulação</strong>. Pode vender um produto, divulgar um serviço, promover uma ideia, incentivar um comportamento ou fortalecer a imagem de uma marca ou instituição.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Público-alvo</strong><p>Quem a mensagem tenta alcançar? Idade, interesses, hábitos, necessidades ou contexto podem influenciar escolhas de linguagem.</p></div>
          <div class="mini-card"><strong>Objetivo</strong><p>Comprar? Clicar? Conhecer? Participar? Doar? Votar? Mudar um comportamento?</p></div>
          <div class="mini-card"><strong>Meio</strong><p>Outdoor, vídeo, rádio, rede social, anúncio em jogo, embalagem, influenciador, site?</p></div>
        </div>

        ${choice('2','Público e estratégia','Uma campanha para adolescentes usa vídeo curto, música, linguagem informal e publicação em rede social. Isso mostra principalmente que:',[['a','A forma da mensagem pode ser ajustada ao público e ao meio'],['b','Toda linguagem informal é incorreta'],['c','O conteúdo é verdadeiro porque parece próximo do público']], 'a','Escolhas de linguagem, formato e plataforma costumam considerar público e contexto.','Adequação ao público ajuda a explicar a forma do anúncio, mas não comprova suas afirmações.')}

        <h3>2. Persuasão trabalha com argumentos e apelos</h3>
        <p>Um anúncio pode oferecer <strong>razões verificáveis</strong> — preço, duração, composição, garantia, comparação técnica — e também usar <strong>apelos</strong> ligados a emoção, identidade, pertencimento, medo, humor, urgência ou prestígio.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Argumento verificável</strong><p>“A bateria tem autonomia declarada de até 18 horas em determinada condição de teste.”</p><p><small>É possível perguntar pelo método, condição e fonte do dado.</small></p></div>
          <div class="mini-card"><strong>Apelo associativo</strong><p>“Para quem nasceu para ir mais longe.”</p><p><small>Cria uma identidade desejável, mas não descreve uma propriedade mensurável do produto.</small></p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Apelo não é sinônimo de mentira</strong>
          <p>Humor, emoção, narrativa e beleza visual são recursos legítimos de comunicação. A leitura crítica pergunta <strong>qual efeito eles produzem</strong> e se estão sendo usados para substituir uma prova que a mensagem precisaria apresentar.</p>
        </div>

        ${choice('3','Argumento ou apelo?','A frase “9 em cada 10 usuários do teste preferiram este produto” funciona como argumento mais forte quando:',[['a','A propaganda não informa nada sobre o teste'],['b','Há informação verificável sobre quem realizou o teste, amostra, método e comparação'],['c','A frase aparece em letras grandes']], 'b','Um dado ganha força argumentativa quando sua origem e condições podem ser verificadas.','O tamanho da frase ou sua repetição não substitui método e fonte.')}

        <h3>3. Palavra, imagem, som e espaço trabalham juntos</h3>
        <p>Publicidade é frequentemente <strong>multissemiótica</strong>. Cor, enquadramento, tipografia, trilha sonora, ritmo de edição, posição dos elementos, expressão facial e cenário podem direcionar atenção e criar associações.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Kodak_advertisement.jpg?width=1000" alt="Anúncio de câmera Kodak publicado em 1916, combinando imagem e texto para promover fotografia">
          <figcaption>
            <strong>Publicidade não começou com as redes sociais.</strong>
            <span>Este anúncio da Kodak, de 1916, já combina composição visual, produto, estilo de vida e texto para construir desejo e identidade. Ao analisá-lo, observe não apenas o que é dito, mas o que a cena convida o público a imaginar sobre usar o produto.</span>
            <small>Publicidade Kodak, 1916, publicada em <em>Lectures pour tous</em>. Wikimedia Commons. Obra em domínio público. <a href="https://commons.wikimedia.org/wiki/File:Kodak_advertisement.jpg" target="_blank" rel="noopener">Fonte e licença</a>.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">Roteiro de leitura de uma peça</strong>
          <p><strong>1. O que vejo/escuto literalmente?</strong> Separe descrição de interpretação.</p>
          <p><strong>2. Quem parece ser o público?</strong> Que pistas indicam isso?</p>
          <p><strong>3. Qual ação é desejada?</strong> Comprar, clicar, aderir, lembrar, compartilhar?</p>
          <p><strong>4. Quais recursos chamam atenção?</strong> Palavra, imagem, som, cor, repetição, humor, testemunho?</p>
          <p><strong>5. Quais afirmações podem ser verificadas?</strong> Há fonte, condição, comparação ou evidência?</p>
          <p><strong>6. O que fica implícito?</strong> Que identidade, medo, desejo ou estilo de vida é associado ao produto ou ideia?</p>
        </div>

        ${choice('4','Multissemiose','Um vídeo de 15 segundos mostra um produto quase sem explicá-lo, mas usa música acelerada, cortes rápidos e pessoas sorrindo. Para analisar a persuasão, devemos:',[['a','Considerar apenas as palavras faladas'],['b','Analisar também ritmo, som, enquadramento e associações produzidas pelas imagens'],['c','Concluir que o produto é bom porque as pessoas sorriem']], 'b','Recursos sonoros e visuais também orientam atenção e constroem sentidos.','Em textos multissemióticos, a persuasão não fica restrita ao texto verbal.')}

        <h3>4. Técnicas frequentes de persuasão</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Urgência e escassez</strong><p>“Só hoje”, “últimas unidades”. Pode informar uma condição real ou criar pressão; é preciso verificar.</p></div>
          <div class="mini-card"><strong>Prova social</strong><p>“Mais vendido”, avaliações, depoimentos. A pergunta é: qual a origem e a qualidade desses sinais?</p></div>
          <div class="mini-card"><strong>Autoridade</strong><p>Especialistas, selos e instituições. Importa saber se a autoridade é competente para aquela afirmação.</p></div>
          <div class="mini-card"><strong>Identidade</strong><p>Associa o produto a um grupo, estilo de vida ou valor desejado.</p></div>
          <div class="mini-card"><strong>Comparação</strong><p>Destaca diferenças. Uma comparação séria precisa usar critérios equivalentes e condições claras.</p></div>
          <div class="mini-card"><strong>Emoção e narrativa</strong><p>Histórias tornam a mensagem memorável, mas emoção não funciona como prova de uma afirmação factual.</p></div>
        </div>

        <h3>5. Publicidade digital pode parecer conteúdo comum</h3>
        <p>Na internet, publicidade pode aparecer como anúncio tradicional, <em>unboxing</em>, conteúdo patrocinado, inserção em vídeo, publicação de influenciador, <em>advergame</em> ou narrativa de marca. Por isso, além de analisar a mensagem, é importante perguntar <strong>se existe relação comercial ou patrocínio</strong>.</p>

        <div class="concept-box">
          <strong class="card-title">Conteúdo patrocinado</strong>
          <p>Quando uma publicação faz parte de uma ação publicitária, a identificação dessa relação ajuda o público a interpretar a mensagem. Saber que há patrocínio não torna o conteúdo automaticamente falso; torna explícita uma informação relevante sobre sua produção.</p>
        </div>

        ${choice('5','Publicidade digital','Um influenciador elogia um produto em um vídeo patrocinado. Qual postura é mais adequada?',[['a','Descartar tudo automaticamente'],['b','Aceitar tudo porque ele usa o produto'],['c','Reconhecer o vínculo comercial e avaliar separadamente as afirmações, evidências e experiência apresentada']], 'c','O patrocínio é parte importante do contexto, mas as afirmações ainda precisam ser analisadas por seus próprios méritos.','Nem aceitação automática nem rejeição automática substituem análise.')}

        <h3>6. Persuasão política também pode ser analisada como linguagem</h3>
        <p>Campanhas políticas usam muitos dos mesmos recursos: slogans, imagens, música, testemunhos, recortes de dados, comparação, emoção e repetição. A análise escolar não precisa dizer <strong>em quem votar</strong>. Ela pode perguntar:</p>
        <div class="two-col">
          <div class="mini-card"><strong>Qual é a afirmação?</strong><p>É fato verificável, promessa, opinião, interpretação ou ataque?</p></div>
          <div class="mini-card"><strong>Qual é a evidência?</strong><p>Existe fonte? O dado está completo? O recorte altera a interpretação?</p></div>
          <div class="mini-card"><strong>Qual recurso persuasivo aparece?</strong><p>Medo, esperança, identidade, autoridade, comparação, repetição?</p></div>
          <div class="mini-card"><strong>O que está ausente?</strong><p>Há informação necessária para avaliar a proposta ou comparação?</p></div>
        </div>

        ${choice('6','Leitura crítica','Uma campanha usa um número verdadeiro, mas apresenta apenas um período muito curto que favorece sua mensagem. Qual é a melhor atitude?',[['a','Aceitar o número sem olhar o contexto'],['b','Conferir fonte, período, definição, série histórica e comparação pertinente'],['c','Concluir que todo número em campanha é falso']], 'b','Um dado pode ser verdadeiro e ainda assim ser apresentado com um recorte que limita a interpretação.','Leitura crítica verifica o dado e também o contexto em que ele foi selecionado.')}

        <h3>7. Aplicação: desmonte uma peça publicitária</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <p>Escolha um anúncio real que você encontre em uma revista, site, vídeo, rede social ou espaço público. Não precisa ser de uma marca conhecida.</p>
          <ol>
            <li>Registre onde a peça apareceu e qual parece ser seu público.</li>
            <li>Descreva literalmente os elementos verbais, visuais e/ou sonoros.</li>
            <li>Identifique a ação que a peça deseja provocar.</li>
            <li>Separe pelo menos uma <strong>afirmação verificável</strong> de um <strong>apelo ou associação</strong>.</li>
            <li>Explique dois mecanismos de persuasão usados.</li>
            <li>Diga que informação adicional você buscaria antes de tomar uma decisão.</li>
            <li>Reescreva a peça de modo mais informativo, preservando o objetivo sem usar uma estratégia que você considere enganosa.</li>
          </ol>
          <details><summary>O que caracteriza uma boa análise?</summary><p>Ela descreve antes de julgar, identifica recursos concretos, separa prova de apelo e justifica suas conclusões com elementos observáveis da peça.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Publicidade combina argumentos, apelos e recursos multissemióticos para orientar atenção, desejo e decisão.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso identificar público, objetivo, mecanismos de persuasão e verificar se uma afirmação está realmente sustentada.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Habilidades mobilizadas: EM13LP44A e EM13LP44C, articuladas a EM13LGG103 e EM13LGG104. Objetos relacionados: contexto de produção, circulação e recepção de textos publicitários; campanhas publicitárias e políticas; mecanismos de persuasão e argumentação; efeitos de sentido produzidos por recursos linguístico-discursivos, imagéticos, sonoros, gestuais e espaciais.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('04 ', showChapter);
})();
