(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Cultura digital',
      technical:'multimodalidade • multissemiose • hipertexto • interface • circulação • contexto • autoria • acessibilidade • ética digital',
      title:'09 — Linguagem digital e multimodal',
      objective:'<strong>Objetivo:</strong> ler, analisar e produzir textos digitais e multissemióticos compreendendo como palavras, imagens, sons, organização visual, links, interfaces e modos de circulação participam da construção de sentidos.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">Uma captura de tela chega ao grupo: “Amanhã não haverá aula”.</strong>
          <p>A mensagem parece clara, mas a imagem está cortada. Não aparece o nome da escola, a data da publicação nem o restante do aviso. Um colega encaminha a captura e escreve: <strong>“Confirmado!”</strong>.</p>
          <p>Antes de decidir se a informação é verdadeira, você precisa ler mais do que a frase: <strong>fonte, data, enquadramento, imagem, interface, link, contexto e forma de circulação</strong> também produzem sentido.</p>
          <p class="central-question"><strong>Pergunta central:</strong> no ambiente digital, o que exatamente estamos lendo quando um texto mistura palavras, imagens, ícones, sons, links e ações da própria interface?</p>
        </div>

        ${choice('1','Ler o conjunto','Por que a frase “Amanhã não haverá aula” não basta para confirmar a informação de uma captura de tela?',[
          ['a','Porque toda captura de tela é falsa'],
          ['b','Porque é preciso recuperar fonte, data, contexto e conteúdo original antes de concluir'],
          ['c','Porque mensagens digitais nunca podem ser usadas como fonte']
        ],'b','Uma captura pode registrar algo real, mas o recorte pode retirar informações decisivas. Ler criticamente exige recuperar o contexto de origem.','Não descarte nem aceite a imagem automaticamente: investigue o que ela mostra e o que ficou de fora.')}

        <h3>1. Texto digital não é apenas texto escrito em uma tela</h3>
        <p>Em muitos ambientes digitais, o sentido nasce da combinação de diferentes modos de linguagem. Uma postagem pode reunir <strong>palavras, fotografia, ilustração, cor, tipografia, áudio, vídeo, movimento, ícones, disposição espacial e interação</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Verbal</strong><p>Palavras escritas ou faladas: título, legenda, comentário, narração, botão, aviso.</p></div>
          <div class="mini-card"><strong>Visual e sonoro</strong><p>Imagem, enquadramento, tamanho, sequência, música, ruído, ritmo e silêncio.</p></div>
          <div class="mini-card"><strong>Interativo</strong><p>Links, menus, botões, rolagem, comentários, reações e caminhos de navegação.</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Multimodal ou multissemiótico?</strong>
          <p>Os dois termos aparecem em estudos da linguagem para destacar que a comunicação pode articular diferentes recursos de produção de sentido. Para o aluno, a ideia essencial é simples: <strong>não basta ler as palavras quando outros elementos também estão dizendo alguma coisa</strong>.</p>
        </div>

        ${choice('2','Sentido multimodal','Um cartaz digital traz a frase “Inscrições abertas”, uma data pequena no rodapé e um botão destacado “PARTICIPE”. O que precisa ser lido?',[
          ['a','Somente a frase principal'],
          ['b','Somente o botão'],
          ['c','O conjunto: texto, hierarquia visual, data, botão e demais informações']
        ],'c','O sentido e a ação esperada dependem da relação entre os elementos, não de uma parte isolada.','Em textos multimodais, posição, destaque e relação entre elementos também orientam a leitura.')}

        <h3>2. Organização visual também argumenta</h3>
        <p>O design não é simples decoração. Tamanho, posição, contraste, repetição e proximidade ajudam a indicar <strong>o que deve ser visto primeiro, o que pertence ao mesmo grupo e qual ação parece mais importante</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Hierarquia clara</strong><p>Título visível → informação principal → data/local → ação. O leitor identifica rapidamente o caminho de leitura.</p></div>
          <div class="mini-card"><strong>Hierarquia confusa</strong><p>Muitos destaques competem entre si, informações essenciais ficam escondidas e o leitor precisa adivinhar onde começar.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Cuidado com interpretações automáticas</strong>
          <p>Cores, emojis, imagens e estilos não possuem um único significado universal. O efeito depende de contexto, cultura, gênero, público e combinação com outros elementos. <strong>Não transforme uma convenção frequente em regra absoluta.</strong></p>
        </div>

        ${choice('3','Design e sentido','Um botão “Cancelar” aparece pequeno e discreto, enquanto “Assinar agora” ocupa grande destaque. Qual análise é mais cuidadosa?',[
          ['a','O tamanho não interfere em nada na leitura'],
          ['b','A hierarquia visual pode orientar a atenção e favorecer uma ação, embora não determine obrigatoriamente a escolha do usuário'],
          ['c','Todo botão grande é necessariamente enganoso']
        ],'b','Interfaces direcionam atenção por escolhas visuais, mas o efeito precisa ser analisado no contexto e não como uma regra automática.','Evite extremos: o design influencia a leitura, mas não controla sozinho a decisão do usuário.')}

        <h3>3. Hipertexto: ler também é escolher caminhos</h3>
        <p>Na página impressa, a leitura costuma seguir uma sequência relativamente estável. No digital, links, menus, abas e resultados de busca permitem percursos diferentes. Isso é uma característica do <strong>hipertexto</strong>.</p>

        <div class="argument-chain">
          <span>texto inicial</span><b>→</b>
          <span>link</span><b>→</b>
          <span>nova fonte</span><b>→</b>
          <span>comparação</span><b>→</b>
          <span>decisão</span>
        </div>

        <p>Essa liberdade amplia possibilidades, mas cria uma responsabilidade: <strong>saber por que abrir um link, reconhecer para onde ele leva e voltar ao problema que orientava a pesquisa</strong>. Clicar em tudo não é pesquisar.</p>

        ${choice('4','Navegar com propósito','Você encontra um dado importante em uma postagem que aponta para um relatório. Qual é o melhor próximo passo?',[
          ['a','Usar apenas a postagem porque ela é mais curta'],
          ['b','Abrir o relatório original, identificar autoria, data e contexto e verificar se o dado foi representado corretamente'],
          ['c','Compartilhar primeiro e conferir depois']
        ],'b','O hipertexto pode aproximar o leitor da fonte de origem. Seguir esse caminho melhora a verificação e a compreensão do contexto.','Use os links para chegar às evidências, não apenas para acumular páginas abertas.')}

        <h3>4. A interface participa da mensagem</h3>
        <p>Uma mesma frase produz efeitos diferentes quando aparece em uma conversa privada, em um aviso institucional, em um comentário público ou em uma notificação. A plataforma acrescenta pistas: <strong>quem publicou, para quem, quando, em qual espaço, com quais possibilidades de resposta e circulação</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Perfil</strong><p>Quem assume a autoria ou aparece como emissor?</p></div>
          <div class="mini-card"><strong>Tempo</strong><p>Quando foi publicado? A informação ainda é atual?</p></div>
          <div class="mini-card"><strong>Alcance</strong><p>É privado, público, restrito a um grupo ou replicável?</p></div>
          <div class="mini-card"><strong>Ação</strong><p>A interface incentiva clicar, reagir, compartilhar, comprar ou continuar assistindo?</p></div>
        </div>

        <p>Além disso, plataformas podem ordenar conteúdos por busca, assinatura, recomendação ou outros critérios. Por isso, <strong>o que aparece primeiro na tela não deve ser confundido automaticamente com o que é mais importante ou mais verdadeiro</strong>.</p>

        <h3>5. Ler uma imagem digital: evidência e limite</h3>
        <p>Observe a fotografia abaixo. Antes de interpretar, separe o que está efetivamente visível daquilo que seria apenas hipótese.</p>

        <figure class="pt-figure">
          <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Smartphone_display_screen.jpg/960px-Smartphone_display_screen.jpg" alt="Parte da tela de um smartphone mostrando horário, ícone de modo avião, nível de bateria e ícone de usuário">
          <figcaption>
            <strong>Uma tela comunica por palavras, números, ícones, posição e convenções de interface.</strong>
            <span>É possível observar horário, bateria e um ícone associado ao modo avião. A fotografia, sozinha, não informa quem usava o aparelho, por que o modo estava ativo nem o que aconteceu antes ou depois.</span>
            <small>Imagem: Skitterphoto, via Wikimedia Commons. CC0 1.0. <a href="https://commons.wikimedia.org/wiki/File:Smartphone_display_screen.jpg" target="_blank" rel="noopener">Consultar arquivo e licença</a>.</small>
          </figcaption>
        </figure>

        ${choice('5','Evidência visual','A fotografia mostra o ícone de modo avião ativo. Qual conclusão é segura?',[
          ['a','A pessoa estava dentro de um avião quando a foto foi feita'],
          ['b','O aparelho exibia o indicador de modo avião; o motivo e o local não podem ser determinados apenas pela imagem'],
          ['c','O aparelho estava obrigatoriamente sem qualquer função disponível']
        ],'b','A leitura crítica distingue observação de inferência. O ícone é evidência visual; o contexto de uso exigiria outras informações.','Não transforme uma pista visual em uma história completa sem evidências suficientes.')}

        <h3>6. Captura de tela, recorte e perda de contexto</h3>
        <p>Capturas de tela são úteis para registrar o que apareceu em determinado momento, mas podem ser <strong>recortadas, reorganizadas, desatualizadas ou separadas do conteúdo original</strong>. Isso não significa que sejam falsas; significa que precisam ser contextualizadas.</p>

        <div class="source-box">
          <strong class="card-title">Protocolo simples antes de compartilhar</strong>
          <ol>
            <li>Procure a publicação ou página original.</li>
            <li>Confira autoria, endereço, data e atualização.</li>
            <li>Veja o conteúdo antes e depois do trecho recortado.</li>
            <li>Compare com outra fonte confiável quando a informação exigir confirmação.</li>
            <li>Separe o que a evidência mostra do que você concluiu sobre ela.</li>
          </ol>
        </div>

        <p>Esse procedimento retoma a checagem estudada no capítulo 03, mas agora com uma pergunta diferente: <strong>como o formato digital e o recorte alteram aquilo que o leitor consegue perceber?</strong></p>

        <h3>7. Linguagem de rede não é língua “sem regra”</h3>
        <p>Abreviações, emojis, hashtags, memes, gifs, marcas de oralidade e pontuação expressiva podem funcionar como recursos comunicativos. O uso adequado depende do <strong>gênero, relação entre interlocutores, finalidade e situação</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Grupo de amigos</strong><p>“blz, chego 19h 👍” pode ser plenamente eficiente em uma conversa informal.</p></div>
          <div class="mini-card"><strong>E-mail institucional</strong><p>“Confirmo minha presença às 19h.” pode ser mais adequado quando se espera registro formal e clareza.</p></div>
        </div>

        <p>Competência linguística não é usar sempre o mesmo registro. É <strong>reconhecer alternativas e escolher conscientemente a mais adequada ao contexto</strong>.</p>

        ${choice('6','Adequação digital','Um aluno envia ao setor de estágio da escola: “eae, manda os doc aí q preciso hj”. Qual revisão é mais adequada?',[
          ['a','Nenhuma, porque toda escrita digital deve ser informal'],
          ['b','Adaptar saudação, clareza e nível de formalidade ao interlocutor e à finalidade institucional'],
          ['c','Substituir todas as palavras por termos técnicos difíceis']
        ],'b','O meio digital não elimina a necessidade de adequação. Interlocutor, finalidade e gênero continuam orientando as escolhas.','Formalidade não significa complicação; significa adequar linguagem e organização à situação.')}

        <h3>8. Acessibilidade também faz parte da linguagem</h3>
        <p>Um conteúdo pode estar tecnicamente publicado e, mesmo assim, excluir parte do público. Produzir no digital exige pensar em diferentes formas de acesso.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Imagem</strong><p>Texto alternativo descreve a informação relevante quando a imagem precisa ser compreendida sem ser vista.</p></div>
          <div class="mini-card"><strong>Áudio e vídeo</strong><p>Legendas e, quando necessário, transcrição ampliam o acesso ao conteúdo verbal.</p></div>
          <div class="mini-card"><strong>Navegação</strong><p>Títulos claros, links descritivos e organização previsível ajudam leitores e tecnologias assistivas.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Texto alternativo não é legenda repetida</strong>
          <p>O texto alternativo deve comunicar a função ou informação importante da imagem naquele contexto. Em uma foto meramente decorativa, a decisão pode ser diferente. <strong>A pergunta é: o que alguém perderia se não pudesse ver esta imagem?</strong></p>
        </div>

        ${choice('7','Acessibilidade','Um gráfico é essencial para compreender os resultados de uma pesquisa escolar. Qual prática é melhor?',[
          ['a','Publicar apenas a imagem, sem nenhum apoio textual'],
          ['b','Oferecer descrição ou equivalente textual que comunique dados e relações essenciais'],
          ['c','Colocar como texto alternativo apenas “imagem do gráfico”']
        ],'b','Quando a imagem carrega informação indispensável, o equivalente textual deve transmitir o conteúdo relevante, e não apenas informar que existe uma imagem.','A acessibilidade precisa preservar a informação necessária para compreender a mensagem.')}

        <h3>9. Ética digital: produzir e circular também é responsabilidade</h3>
        <p>Antes de publicar, pergunte: <strong>tenho direito de usar este material? Estou expondo alguém sem necessidade? A fonte está identificada? O recorte preserva o sentido? Há dados pessoais que não deveriam aparecer?</strong></p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Autoria</strong><p>Crédito e licença precisam ser respeitados.</p></div>
          <div class="mini-card"><strong>Privacidade</strong><p>Dados, rostos, conversas e documentos podem exigir cuidado ou autorização.</p></div>
          <div class="mini-card"><strong>Contexto</strong><p>Recortar uma fala pode alterar o que ela significa.</p></div>
          <div class="mini-card"><strong>Responsabilidade</strong><p>Compartilhar amplia a circulação e também as consequências.</p></div>
        </div>

        <h3>10. Aplicação: produza uma mensagem multimodal que funcione</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <p>Situação: a escola realizará uma <strong>Mostra de Projetos de Desenvolvimento de Sistemas</strong> na sexta-feira, das 14h às 18h, no laboratório 3. A entrada é gratuita, mas visitantes externos precisam fazer inscrição prévia.</p>
          <ol>
            <li>Defina público e objetivo da publicação.</li>
            <li>Escreva um título e uma legenda curta com todas as informações indispensáveis.</li>
            <li>Planeje a hierarquia visual: o que deve ser visto primeiro, segundo e terceiro?</li>
            <li>Escolha uma imagem apenas se ela acrescentar informação ou ajudar a orientar a leitura.</li>
            <li>Escreva um texto alternativo adequado para a imagem escolhida.</li>
            <li>Crie um texto de link que indique claramente a ação, em vez de usar apenas “clique aqui”.</li>
            <li>Faça a revisão final: autoria, clareza, acessibilidade, privacidade, data e destino do link.</li>
          </ol>
          <p><strong>Critério de sucesso:</strong> outra pessoa deve conseguir compreender o evento e saber o que fazer sem depender de explicações extras.</p>
        </div>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> textos digitais articulam diferentes modos de linguagem.</p>
          <p><strong>Experimentar:</strong> observe como organização, interface, imagem, som e links mudam a leitura.</p>
          <p><strong>Analisar:</strong> separe evidência de inferência e recupere fonte, contexto e circulação.</p>
          <p><strong>Aplicar:</strong> produza conteúdos claros, éticos, acessíveis e adequados ao público e ao meio.</p>
        </div>
      `
    });
  }

  MBB.enableChapter('09 Linguagem', showChapter);
})();
