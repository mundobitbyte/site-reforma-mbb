(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Ler e compreender',
      technical:'contexto de produção • circulação • interlocutor • gênero • inferência • multissemiose • adequação',
      title:'01 — Leitura, contexto e sentidos',
      objective:'<strong>Objetivo:</strong> compreender como contexto, interlocutor, objetivo, gênero e recursos verbais e visuais participam da construção de sentidos e usar essa leitura para produzir mensagens adequadas a situações diferentes.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">A mesma frase não significa exatamente a mesma coisa em todo lugar</strong>
          <p>Você olha o celular e lê: <strong>“Você pode vir aqui agora?”</strong></p>
          <p>Se a mensagem veio de um amigo durante o intervalo, você pode entender como um convite. Se veio da direção da escola depois de um problema em sala, a mesma frase pode soar como convocação. As palavras são iguais, mas <strong>quem fala, para quem, em qual situação e com qual objetivo</strong> muda a leitura.</p>
          <p class="central-question"><strong>Pergunta central:</strong> quando lemos um texto, o sentido está apenas nas palavras?</p>
        </div>

        ${choice('1','Primeira leitura','A frase “Precisamos conversar” aparece em um bilhete da coordenação e em uma mensagem de um amigo. O que é mais adequado fazer para interpretá-la?',[['a','Ignorar quem escreveu'],['b','Considerar autor, destinatário, situação e objetivo'],['c','Procurar apenas o significado das palavras no dicionário']], 'b','O contexto de produção e circulação participa da construção do sentido.','As palavras importam, mas não bastam: precisamos observar a situação comunicativa.')}

        <h3>1. Texto não circula no vazio</h3>
        <p>Todo texto é produzido em uma situação. Mesmo uma frase muito curta costuma responder a perguntas como:</p>

        <div class="three-col">
          <div class="mini-card"><strong>Quem produz?</strong><p>Uma pessoa, uma instituição, um jornal, uma empresa, um grupo de estudantes?</p></div>
          <div class="mini-card"><strong>Para quem?</strong><p>Amigos, clientes, leitores, professores, cidadãos, seguidores?</p></div>
          <div class="mini-card"><strong>Para quê?</strong><p>Informar, orientar, pedir, explicar, convencer, divertir, registrar?</p></div>
          <div class="mini-card"><strong>Onde circula?</strong><p>Conversa, mural, aplicativo, site, jornal, sala de aula, documento?</p></div>
          <div class="mini-card"><strong>Quando?</strong><p>O momento histórico e a situação imediata podem alterar referências e expectativas.</p></div>
          <div class="mini-card"><strong>Em qual gênero?</strong><p>Notícia, aviso, meme, relatório, poema, mensagem, propaganda, requerimento?</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Condições de produção e circulação</strong>
          <p>São os elementos da situação em que o texto é produzido, recebido e compartilhado. Eles ajudam a explicar escolhas de linguagem, formato, conteúdo e tom.</p>
        </div>

        ${choice('2','Contexto','Um cartaz na porta de um laboratório diz “Entrada autorizada somente com equipamento de proteção”. O objetivo principal desse texto é:',[['a','Narrar uma história'],['b','Regular uma ação naquele espaço'],['c','Expressar gosto pessoal']], 'b','O local, o gênero e a formulação indicam uma função de orientação/regulação.','Observe onde o texto circula e o que ele tenta fazer com o leitor.')}

        <h3>2. Ler é relacionar pistas</h3>
        <p>Compreender um texto não é apenas somar significados de palavras. O leitor relaciona <strong>vocabulário, estrutura, contexto, conhecimentos prévios e pistas explícitas ou implícitas</strong>.</p>

        <div class="pt-process">
          <span>palavras</span><b>+</b>
          <span>organização</span><b>+</b>
          <span>contexto</span><b>+</b>
          <span>conhecimento prévio</span><b>→</b>
          <span>construção de sentidos</span>
        </div>

        <div class="text-box">
          <strong class="card-title">Exemplo</strong>
          <p>“Finalmente o ônibus chegou.”</p>
          <p>A palavra <em>finalmente</em> sugere algo que não está dito diretamente: provavelmente houve <strong>espera</strong> ou demora. Essa conclusão é uma <strong>inferência</strong>.</p>
        </div>

        ${choice('3','Inferência','Na frase “Até que enfim você respondeu”, o leitor pode inferir que:',[['a','A resposta era esperada havia algum tempo'],['b','Ninguém esperava resposta'],['c','A frase não contém qualquer pista sobre espera']], 'a','“Até que enfim” indica expectativa anterior e demora percebida.','Inferir é construir uma conclusão sustentada por pistas do texto e do contexto.')}

        <h3>3. Nem todo texto é feito só de palavras</h3>
        <p>Em muitos textos, o sentido é produzido por vários modos de linguagem ao mesmo tempo: palavras, cores, imagens, disposição espacial, sons, gestos e símbolos. Chamamos isso de <strong>multissemiose</strong>.</p>

        <figure class="pt-figure">
          <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/1999_Brazil_road_sign_R-01.svg?width=900" alt="Sinal brasileiro de parada obrigatória, octogonal e vermelho, com a palavra PARE em branco">
          <figcaption>
            <strong>Leia o conjunto, não apenas a palavra.</strong>
            <span>No sinal de parada obrigatória, palavra, cor, forma, posição na via e convenção social trabalham juntas. Mesmo antes de ler “PARE”, a forma octogonal vermelha já fornece informação a quem conhece o sistema de sinalização.</span>
            <small>Imagem: sinal R-01 brasileiro, design oficial, vetorização Big guy 637. Wikimedia Commons. Domínio público. <a href="https://commons.wikimedia.org/wiki/File:1999_Brazil_road_sign_R-01.svg" target="_blank" rel="noopener">Fonte e licença</a>.</small>
          </figcaption>
        </figure>

        ${choice('4','Texto multissemiótico','Se retirássemos a forma e a cor características do sinal e deixássemos apenas a palavra “PARE” impressa em uma folha comum, o efeito seria exatamente o mesmo?',[['a','Sim, porque apenas a palavra produz sentido'],['b','Não; forma, cor, suporte e local também participam da mensagem'],['c','Sim, em qualquer situação']], 'b','Recursos visuais, suporte e contexto de circulação também constroem sentido.','Em textos multissemióticos, diferentes recursos atuam em conjunto.')}

        <h3>4. O gênero cria expectativas</h3>
        <p>Quando reconhecemos um gênero, antecipamos parte de seu funcionamento. Uma notícia, uma receita, um requerimento e uma mensagem de grupo não são organizados da mesma maneira porque cumprem funções diferentes.</p>

        <div class="comparison-grid">
          <div class="mini-card">
            <strong>Mensagem no grupo da turma</strong>
            <p>“Pessoal, a apresentação mudou para sexta. Quem puder, confirma aqui.”</p>
            <p><small>Contexto próximo, interlocutores conhecidos, rapidez e interação imediata.</small></p>
          </div>
          <div class="mini-card">
            <strong>Comunicado institucional</strong>
            <p>“Informamos que a apresentação prevista para quinta-feira foi reagendada para sexta-feira. Solicitamos confirmação de ciência.”</p>
            <p><small>Maior formalidade, registro, finalidade institucional e público definido.</small></p>
          </div>
        </div>

        <p>As duas mensagens podem comunicar o mesmo fato básico. A diferença não é “uma certa e outra errada”: cada uma faz escolhas adequadas a um contexto.</p>

        ${choice('5','Adequação','Você precisa pedir à direção autorização para usar o auditório. Qual escolha tende a ser mais adequada?',[['a','Usar exatamente a mesma linguagem de uma conversa entre amigos'],['b','Adequar gênero, tom e informações ao contexto institucional'],['c','Escrever o mínimo possível, sem explicar finalidade']], 'b','Adequação considera interlocutor, objetivo, gênero e situação.','Escolhas linguísticas devem responder à situação comunicativa.')}

        <h3>5. Contexto ajuda a interpretar, mas não permite inventar</h3>
        <p>Conhecer o contexto amplia a compreensão, porém uma interpretação precisa continuar apoiada em <strong>evidências do texto</strong>. Não vale atribuir ao autor uma intenção sem pistas suficientes.</p>

        <div class="note-box">
          <strong class="card-title">Cuidado com dois extremos</strong>
          <p><strong>Extremo 1:</strong> “Só as palavras importam; contexto não muda nada.”</p>
          <p><strong>Extremo 2:</strong> “Qualquer interpretação vale, porque cada pessoa tem seu contexto.”</p>
          <p>Uma leitura responsável articula texto e contexto e consegue apontar <strong>quais pistas sustentam a interpretação</strong>.</p>
        </div>

        ${choice('6','Leitura responsável','Duas pessoas interpretam de maneira diferente uma postagem. Qual é a melhor forma de comparar as interpretações?',[['a','Ver qual pessoa fala mais alto'],['b','Examinar quais pistas do texto e do contexto sustentam cada leitura'],['c','Concluir que todas as leituras são igualmente fortes']], 'b','Interpretações podem ser comparadas pelas evidências que as sustentam.','Contexto amplia a leitura, mas não elimina a necessidade de justificá-la.')}

        <h3>6. Aplicação: uma informação, dois públicos</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <p>A escola vai realizar uma feira de projetos na sexta-feira, às 14h. Cada grupo deve chegar 30 minutos antes.</p>
          <p>Produza duas versões da informação:</p>
          <ol>
            <li>uma mensagem curta para o grupo dos estudantes;</li>
            <li>um comunicado para responsáveis e visitantes.</li>
          </ol>
          <p>Depois explique pelo menos <strong>três escolhas</strong> que você alterou entre as versões: vocabulário, grau de formalidade, quantidade de informação, forma de tratamento, organização ou outro recurso.</p>
          <details><summary>O que observar na resposta?</summary><p>As informações essenciais precisam permanecer corretas. O que muda é a forma de organizar e formular a mensagem em função do público, objetivo e gênero.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Texto, contexto, gênero, interlocutor e recursos multissemióticos trabalham juntos na construção de sentidos.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso justificar uma interpretação com pistas e adaptar uma mesma informação a públicos e situações diferentes.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Habilidades mobilizadas: EM13LP01 e EM13LGG101, EM13LGG103 e EM13LGG104. Objetos relacionados: relação entre textos e contextos de produção; leitura e compreensão de textos escritos e multissemióticos; efeitos de sentido; produção de gêneros adequados às diferentes plataformas e ambientes.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('01 ', showChapter);
})();
