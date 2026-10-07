(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Memória e sociedade',
      technical:'memória • identidade • patrimônio • monumentos • usos do passado • fontes • disputas públicas',
      title:'Por que sociedades ainda disputam o passado?',
      objective:'<strong>Objetivo:</strong> distinguir História, memória e patrimônio; compreender como grupos selecionam o que lembrar, preservar ou homenagear; e analisar disputas públicas sobre o passado com evidências, contexto e argumentação.',
      html:`
        <section class="history-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">Uma praça muda de nome. O passado mudou?</strong>
            <p>Uma cidade decide discutir o nome de uma rua e a permanência de um monumento dedicado a uma figura do passado. Alguns defendem que retirar a homenagem seria “apagar a História”. Outros afirmam que manter a homenagem sem crítica também comunica uma escolha no presente.</p>
            <p class="central-question"><strong>Pergunta central:</strong> lembrar, preservar e homenagear são a mesma coisa?</p>
          </div>
        </section>

        <h3>1. Passado, memória e História não são sinônimos</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Passado</strong><p>É tudo o que aconteceu antes do presente, inclusive experiências que deixaram poucos ou nenhum registro acessível.</p></div>
          <div class="mini-card"><strong>Memória</strong><p>É a maneira como indivíduos e grupos recordam, selecionam, narram e dão sentido a experiências vividas ou transmitidas.</p></div>
          <div class="mini-card"><strong>História</strong><p>É uma investigação construída com perguntas, fontes, comparação de evidências, métodos e debate entre interpretações.</p></div>
        </div>
        <div class="note-box"><strong>Memória é fonte, mas não é reprodução perfeita do passado.</strong><p>Ela pode preservar experiências que documentos oficiais ignoraram, mas também é seletiva, muda ao longo do tempo e precisa ser contextualizada como qualquer outra fonte.</p></div>

        ${choice('1','História e memória','Qual afirmação é mais adequada?',[['a','Se uma lembrança é sincera, ela reproduz perfeitamente tudo o que ocorreu'],['b','Memórias podem ser fontes valiosas, mas devem ser contextualizadas e comparadas com outras evidências'],['c','Historiadores não podem trabalhar com relatos de memória']],'b','Correto. A memória pode revelar experiências importantes sem deixar de ser seletiva e situada.','Sinceridade e precisão histórica não são a mesma coisa; fontes de memória também precisam ser analisadas.')}

        <h3>2. Identidades também são construídas historicamente</h3>
        <p>Pessoas pertencem a muitos grupos ao mesmo tempo: família, bairro, religião, profissão, geração, comunidade, região, povo ou nação. Essas identidades não são imutáveis; ganham sentidos diferentes conforme experiências, conflitos e mudanças sociais.</p>
        <p>Datas comemorativas, heróis, símbolos, festas, museus, livros escolares e monumentos ajudam a produzir narrativas sobre “quem somos”. Por isso, identidade e memória frequentemente aparecem juntas.</p>
        <div class="concept-box"><strong>Construída não significa falsa.</strong><p>Dizer que uma identidade é histórica significa reconhecer que ela foi formada, transmitida e transformada em processos sociais — não que ela seja imaginária ou sem importância para quem a vive.</p></div>

        ${choice('2','Identidade','Por que identidades coletivas interessam ao historiador?',[['a','Porque permanecem exatamente iguais desde a origem de um grupo'],['b','Porque símbolos, narrativas e experiências de pertencimento mudam e podem revelar relações sociais e políticas'],['c','Porque identidade não tem relação com memória']],'b','Isso. Identidades possuem história e podem ser transformadas por experiências, disputas e novas interpretações.','Pertencimento não é congelado no tempo; investigue como ele é construído e modificado.')}

        <h3>3. Patrimônio é aquilo que uma sociedade decide reconhecer e preservar</h3>
        <p>No Brasil, a noção de patrimônio cultural inclui bens de natureza <strong>material e imaterial</strong>. Edificações, documentos, sítios arqueológicos, coleções e paisagens podem ser bens materiais; saberes, ofícios, celebrações, formas de expressão e práticas coletivas podem constituir patrimônio imaterial.</p>
        <div class="two-col">
          <div class="mini-card"><strong>Material</strong><p>Tem suporte físico: construções, objetos, documentos, acervos, sítios arqueológicos, paisagens e outros bens tangíveis.</p></div>
          <div class="mini-card"><strong>Imaterial</strong><p>Envolve práticas, conhecimentos, celebrações, modos de fazer e formas de expressão transmitidas e recriadas por grupos e comunidades.</p></div>
        </div>
        <div class="ok-box"><strong>Preservar não é guardar “tudo”.</strong><p>Reconhecer patrimônio envolve escolhas, critérios, instituições e participação social. Perguntar quem escolheu e quais grupos foram representados é parte da investigação.</p></div>

        ${choice('3','Patrimônio','Qual exemplo representa melhor um patrimônio imaterial?',[['a','Um edifício histórico preservado'],['b','Um modo de fazer tradicional transmitido entre gerações'],['c','Uma peça arqueológica guardada em museu']],'b','Correto. Saberes e modos de fazer podem integrar o patrimônio cultural imaterial.','Edifícios e objetos são materiais; práticas e saberes transmitidos socialmente podem ser imateriais.')}

        <h3>4. Monumento não é o passado: é uma escolha sobre como representá-lo</h3>
        <p>Uma estátua erguida em 1920 sobre uma pessoa de 1700 informa tanto sobre o homenageado quanto sobre <strong>quem decidiu homenageá-lo em 1920</strong>. Monumentos possuem data, autores, financiadores, localização, linguagem visual e intenção.</p>
        <div class="method-box"><strong class="card-title">Como analisar um monumento</strong><div class="method-grid">
          <div class="method-step"><span>1</span><strong>Identifique</strong><p>Quem ou o que é representado?</p></div>
          <div class="method-step"><span>2</span><strong>Contextualize</strong><p>Quando e por quem foi criado?</p></div>
          <div class="method-step"><span>3</span><strong>Interrogue</strong><p>Que valores procura transmitir?</p></div>
          <div class="method-step"><span>4</span><strong>Observe silêncios</strong><p>Quem ou o que fica fora da representação?</p></div>
        </div></div>

        ${choice('4','Monumentos','Uma estátua erguida muito tempo depois da vida do homenageado pode ser fonte sobre quais períodos?',[['a','Somente sobre a época do homenageado'],['b','Somente sobre o presente do estudante'],['c','Sobre a figura representada e também sobre o período em que a homenagem foi construída']],'c','Correto. Monumentos são objetos históricos com contexto próprio de produção.','Pergunte sempre quando a homenagem foi criada e quais valores aquele momento queria destacar.')}

        <h3>5. Retirar uma homenagem não apaga automaticamente a História</h3>
        <p>Uma pessoa ou acontecimento pode continuar sendo estudado em livros, arquivos, aulas e museus mesmo que uma sociedade decida alterar o nome de uma rua ou retirar uma homenagem pública. Da mesma forma, manter um monumento não obriga a aceitá-lo sem contextualização.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Estudar</strong><p>Investigar criticamente uma pessoa, acontecimento ou processo histórico.</p></div>
          <div class="mini-card"><strong>Homenagear</strong><p>Conferir reconhecimento simbólico em um espaço público. É uma decisão social e política do presente.</p></div>
        </div>
        <div class="note-box"><strong>Não existe solução automática para toda controvérsia.</strong><p>Manter, retirar, deslocar, renomear ou contextualizar são decisões diferentes. Uma análise histórica ajuda a compreender o objeto e o conflito, mas a decisão pública também envolve valores e regras da sociedade atual.</p></div>

        ${choice('5','Uso público do passado','Qual distinção é mais importante numa disputa sobre monumentos?',[['a','Estudar historicamente e homenagear publicamente são ações diferentes'],['b','Retirar uma estátua torna impossível pesquisar o personagem'],['c','Todo monumento representa de modo neutro todos os grupos sociais']],'a','Isso. Conhecimento histórico e homenagem pública não são a mesma coisa.','Uma sociedade pode continuar estudando criticamente algo sem necessariamente mantê-lo como homenagem.')}

        <h3>6. Quem não aparece na narrativa também importa</h3>
        <p>Arquivos oficiais, monumentos e antigos livros escolares frequentemente deram mais visibilidade a governantes, elites políticas e grupos com maior acesso à escrita e às instituições. Isso não significa que trabalhadores, mulheres, povos indígenas, populações negras e outros grupos “não tinham História”.</p>
        <p>Historiadores ampliaram perguntas e conjuntos de fontes: relatos orais, processos judiciais, jornais, objetos, fotografias, registros de trabalho, arqueologia, cultura material e documentos produzidos por diferentes comunidades.</p>
        <div class="ok-box"><strong>Ausência em uma fonte não é ausência no passado.</strong><p>O silêncio pode resultar de desigualdades de poder, conservação seletiva de documentos ou das perguntas que pesquisadores de outras épocas decidiram fazer.</p></div>

        <h3>7. Memória digital também seleciona e transforma</h3>
        <p>Hoje fotografias, vídeos, mensagens, postagens e bancos de dados multiplicam registros do presente. Mesmo assim, “ter muitos dados” não garante memória completa: plataformas desaparecem, arquivos são apagados, algoritmos dão visibilidade desigual e conteúdos circulam fora de contexto.</p>
        <div class="source-box">
          <span class="source-label">Situação didática simulada</span>
          <p>Um vídeo curto de uma manifestação circula nas redes acompanhado da frase: “isto prova o que realmente aconteceu”. O vídeo começa depois do início do evento e termina antes de seu encerramento.</p>
          <p class="source-meta">Pergunta histórica: o que o vídeo mostra diretamente? O que ficou fora do enquadramento? Quem publicou? Quando? Há outras gravações ou documentos?</p>
        </div>

        ${choice('6','Memória digital','Por que um vídeo autêntico ainda precisa de contexto?',[['a','Porque imagens verdadeiras nunca servem como fontes'],['b','Porque enquadramento, duração, autoria, data e seleção do trecho influenciam o que podemos concluir'],['c','Porque somente textos escritos podem registrar acontecimentos']],'b','Correto. Autenticidade é importante, mas não elimina a necessidade de contextualização.','Uma fonte verdadeira pode sustentar interpretações erradas quando é recortada ou retirada de contexto.')}

        <h3>8. Disputar o passado é também disputar o presente</h3>
        <p>Debates sobre patrimônio, racismo, colonialismo, ditaduras, guerras, migrações ou identidades não ocorrem apenas porque pessoas “não conhecem História”. Muitas vezes existem conflitos reais sobre quais experiências merecem reconhecimento, quais valores devem orientar espaços públicos e como lidar com heranças históricas.</p>
        <p>O trabalho histórico não é escolher uma versão por preferência. É formular perguntas, localizar evidências, reconhecer silêncios, comparar interpretações e indicar com clareza o que as fontes permitem sustentar.</p>
        <div class="concept-box"><strong>Pluralidade não é relativismo total.</strong><p>Pode haver interpretações diferentes e bem fundamentadas sobre um mesmo processo. Isso não significa que afirmações sem evidências ou contraditas pelas fontes tenham o mesmo valor histórico.</p></div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint — conselho de memória da cidade</h3>
          <div class="source-box">
            <span class="source-label">Caso didático simulado</span>
            <p>Uma praça possui um monumento inaugurado há 90 anos em homenagem a um líder político. Novas pesquisas mostram participação desse personagem em práticas hoje fortemente contestadas. Um grupo quer retirar o monumento; outro quer mantê-lo; um terceiro propõe transferi-lo para um museu com contextualização.</p>
          </div>
          <div class="challenge-box">
            <strong>Desafio: decida sem apagar a complexidade</strong>
            <p>Escreva de 5 a 7 frases propondo o que deveria ser feito. Sua resposta precisa diferenciar estudo histórico de homenagem, considerar o contexto em que o monumento foi criado, reconhecer pelo menos dois pontos de vista e justificar a decisão com critérios.</p>
            <details><summary>O que uma boa resposta precisa mostrar?</summary><p>Não existe uma única decisão correta prevista no exercício. A qualidade está em argumentar com contexto, evidências e consequências: manter, retirar, deslocar ou contextualizar precisam ser tratados como escolhas públicas justificáveis, não como maneiras automáticas de “preservar” ou “apagar” a História.</p></details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo se conecta ao Plano 1064</summary>
          <p>O capítulo retoma memória, cultura, identidade e diversidade; patrimônio material e imaterial; imagens e objetos como fontes históricas; diferentes narrativas e protagonismos; além da análise crítica das relações entre passado, poder e sociedade.</p>
        </details>

        <div class="ok-box"><strong>Essência:</strong> sociedades não apenas recebem o passado: elas escolhem como lembrar, preservar, estudar e representar experiências anteriores. História ajuda a tornar essas escolhas mais conscientes ao exigir contexto, fontes, comparação e argumentos sustentados por evidências.</div>
      `
    });
  }

  MBB.enableChapter?.('10 Memória', showChapter);
})();
