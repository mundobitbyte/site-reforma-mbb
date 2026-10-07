(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;
  let audioContext = null;

  function playTimbre(type) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    audioContext = audioContext || new AudioCtx();
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(330, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.13, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.75);
    osc.connect(gain).connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 0.8);
  }

  function updateFinalChecklist(root) {
    const checks = $$('[data-final-skill]', root);
    const out = $('#finalChecklistFeedback', root);
    if (!checks.length || !out) return;
    const count = checks.filter(item => item.checked).length;
    const messages = count === checks.length
      ? 'Você marcou todos os pontos. Agora escolha dois deles e prove com uma produção ou análise concreta — marcar não substitui demonstrar.'
      : count >= 7
        ? 'Boa percepção do percurso. Os itens não marcados indicam o que vale retomar antes do desafio integrador.'
        : count >= 4
          ? 'Há uma base importante, mas ainda existem áreas que merecem nova experiência prática.'
          : 'Use esta lista como mapa de revisão. Retome capítulos específicos e volte depois para comparar sua percepção.';
    out.innerHTML = `<strong>${count}/10 dimensões reconhecidas.</strong><p>${messages}</p>`;
  }

  function init(root) {
    $('#playTimbreA', root)?.addEventListener('click', () => playTimbre('sine'));
    $('#playTimbreB', root)?.addEventListener('click', () => playTimbre('sawtooth'));
    $$('[data-final-skill]', root).forEach(item => item.addEventListener('change', () => updateFinalChecklist(root)));
    updateFinalChecklist(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'percepção • composição • materialidade • música • dança • teatro • audiovisual • patrimônio • cultura digital • curadoria • criação',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> integrar os conhecimentos dos capítulos 01–10 para observar, escutar, analisar, criar, revisar e compartilhar produções artísticas com intenção, repertório, responsabilidade e capacidade de justificar escolhas.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão final da 1ª série</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” abre amanhã — e surgiram problemas em todas as salas.</strong>
            <p>Uma obra perdeu a etiqueta. O cartaz não tem foco. Dois sons parecem iguais na partitura, mas não na escuta. Uma cena não deixa claro o que a personagem quer. Um vídeo muda de sentido quando os planos são reorganizados. Uma referência cultural foi tratada como estereótipo. Uma imagem digital foi remixada sem verificar a licença.</p>
            <p>Seu trabalho agora não é repetir definições. É <strong>tomar decisões usando o que aprendeu ao longo de todo o percurso</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> você consegue transferir seu repertório de Arte para situações novas, justificar suas escolhas e revisar quando a primeira solução não funciona?</p>
          </div>
        </section>

        <div class="note-box">
          <strong class="card-title">Como usar este fechamento</strong>
          <p>Tente responder antes de voltar aos capítulos. Quando errar, leia o feedback e identifique <strong>qual observação ou raciocínio faltou</strong>. Em Arte, resposta correta não é decorar vocabulário: é conseguir perceber evidências, relacionar contexto e fazer escolhas mais conscientes.</p>
        </div>

        <h3>1. “Isso é arte?” não se resolve olhando apenas para o objeto</h3>
        <p>Uma cadeira comum é colocada no centro da mostra, iluminada, acompanhada por um texto sobre espera em hospitais. Ao lado, outra cadeira idêntica continua sendo usada pelos visitantes.</p>
        ${choice('1','Arte, contexto e intenção','Qual análise é mais adequada?',[
          ['a','As duas cadeiras precisam ter exatamente o mesmo sentido porque são fisicamente idênticas'],
          ['b','Contexto, intenção, modo de apresentação e relação com o público podem transformar a maneira como o objeto é percebido'],
          ['c','Um objeto cotidiano nunca pode participar de uma proposição artística']
        ],'b','Correto. Materialidade importa, mas contexto, intenção, relação e circulação também participam da experiência artística.','Não tente definir arte olhando apenas para a matéria do objeto. Pergunte o que está sendo proposto, onde, para quem e em qual relação.')}

        <h3>2. Leia o movimento sem precisar que a imagem se mova</h3>
        <figure class="artwork-card">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Katsushika_Hokusai_The_Great_Wave_off_Kanagawa_1830.jpg?width=850" alt="A Grande Onda de Kanagawa, xilogravura de Hokusai, com ondas curvas, barcos e o Monte Fuji ao fundo.">
          <figcaption class="artwork-meta"><strong>A Grande Onda de Kanagawa — Hokusai</strong><small>Observe diagonais, curvas, repetições e contraste de escala.</small><a href="https://commons.wikimedia.org/wiki/File:Katsushika_Hokusai_The_Great_Wave_off_Kanagawa_1830.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></figcaption>
        </figure>
        ${choice('2','Linha, ritmo e escala','Qual leitura usa melhor evidências da própria imagem?',[
          ['a','Curvas, diagonais e repetição das ondas ajudam a conduzir o olhar e sugerir força e movimento'],
          ['b','A sensação de movimento existe apenas porque o título menciona uma onda'],
          ['c','A escala entre onda, barcos e montanha não interfere na percepção']
        ],'a','Isso. A análise parte de recursos visuais observáveis, não apenas do título ou de uma impressão sem evidência.','Procure direção, repetição, escala, contraste e relações entre formas.')}

        <h3>3. Contraste pode organizar a atenção</h3>
        <figure class="artwork-card portrait">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Girl_with_a_Pearl_Earring.jpg?width=700" alt="Moça com Brinco de Pérola, de Vermeer, com rosto e roupas iluminados diante de fundo escuro.">
          <figcaption class="artwork-meta"><strong>Moça com Brinco de Pérola — Vermeer</strong><small>Rosto e detalhes claros se destacam sobre um fundo escuro.</small><a href="https://commons.wikimedia.org/wiki/File:Girl_with_a_Pearl_Earring.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • domínio público</a></figcaption>
        </figure>
        ${choice('3','Foco e hierarquia','Se o cartaz da mostra precisa destacar primeiro a data, qual estratégia visual é mais coerente?',[
          ['a','Dar à data contraste, posição e escala que a façam se diferenciar dos demais elementos'],
          ['b','Colocar todas as informações com o mesmo tamanho, peso e cor'],
          ['c','Esconder a data no rodapé para evitar hierarquia']
        ],'a','Correto. Hierarquia visual organiza a ordem provável de atenção por contraste, escala, posição, espaço e outras diferenças perceptivas.','Se tudo recebe o mesmo peso visual, o visitante precisa descobrir sozinho o que é prioritário.')}

        <h3>4. Material não é embalagem neutra da ideia</h3>
        <p>Uma equipe quer representar uma lembrança que pareça frágil, transparente e sujeita a desaparecer.</p>
        ${choice('4','Materialidade','Qual decisão demonstra melhor raciocínio artístico?',[
          ['a','Escolher qualquer material e depois afirmar que todos produzem exatamente o mesmo efeito'],
          ['b','Testar papéis translúcidos, aquarela, projeção ou outras materialidades e comparar como cada uma altera a experiência'],
          ['c','Escolher sempre o material mais caro']
        ],'b','Isso. Material, suporte, ferramenta e processo abrem possibilidades e impõem limites que podem participar do sentido.','A pergunta produtiva é: o que esta materialidade permite, dificulta ou transforma?')}

        <h3>5. Processo de criação inclui versões</h3>
        <p>O primeiro protótipo de uma instalação não funciona: o visitante não percebe que pode interagir.</p>
        ${choice('5','Experimentação e revisão','Qual atitude combina melhor com processo de criação?',[
          ['a','Manter exatamente igual porque mudar prova que a ideia inicial estava errada'],
          ['b','Observar o uso, testar outra sinalização ou interação e comparar a nova versão'],
          ['c','Abandonar o projeto imediatamente']
        ],'b','Correto. Teste, erro, comparação e revisão são partes legítimas da criação.','Uma primeira versão é uma hipótese. A experiência oferece evidências para revisar.')}

        <h3>6. Escute antes de nomear: mesma altura, outro timbre</h3>
        <div class="studio-box">
          <strong class="card-title">Comparação sonora</strong>
          <p>Os dois botões tocam a <strong>mesma frequência</strong> e por duração semelhante. Escute A e B.</p>
          <div class="two-col">
            <button id="playTimbreA" class="action-button" type="button">Ouvir som A</button>
            <button id="playTimbreB" class="action-button" type="button">Ouvir som B</button>
          </div>
          <p><small>Os sons são sintetizados pelo navegador e não usam gravação comercial.</small></p>
        </div>
        ${choice('6','Timbre','Se a altura é a mesma, por que A e B ainda soam diferentes?',[
          ['a','Porque formas de onda e composição de frequências alteram o timbre'],
          ['b','Porque toda diferença sonora é causada apenas pelo volume'],
          ['c','Porque a frequência necessariamente mudou']
        ],'a','Isso. Timbre ajuda a distinguir sons mesmo quando altura e duração são semelhantes.','Altura responde principalmente à frequência percebida; timbre está ligado à qualidade sonora e à composição do espectro.')}

        <h3>7. Silêncio também organiza música</h3>
        <p>Uma vinheta de 12 segundos possui quatro ataques fortes seguidos sem interrupção. A equipe insere uma pausa curta antes do último ataque e ele passa a chamar muito mais atenção.</p>
        ${choice('7','Ritmo e silêncio','O que mudou?',[
          ['a','A pausa reorganizou expectativa e ritmo, dando mais peso ao último evento'],
          ['b','Silêncio não participa de organização musical'],
          ['c','Apenas notas longas podem criar expectativa']
        ],'a','Correto. Pausas e durações estruturam relações temporais e podem produzir tensão, respiração e destaque.','Pense ritmo como organização de eventos e silêncios no tempo.')}

        <h3>8. Dança não é apenas coleção de passos</h3>
        <p>Duas pessoas repetem o mesmo gesto. Na primeira versão ficam próximas, lentas e pesadas; na segunda ficam afastadas, rápidas e leves.</p>
        ${choice('8','Corpo, espaço e tempo','Qual conclusão é mais adequada?',[
          ['a','Como o gesto-base é igual, as duas versões produzem necessariamente a mesma experiência'],
          ['b','Espaço, tempo, peso, fluxo e relação entre corpos podem alterar profundamente a leitura do movimento'],
          ['c','Somente a roupa determina o sentido da dança']
        ],'b','Isso. Em dança, como o corpo organiza espaço e tempo é parte da linguagem.','Observe não só “qual passo”, mas direção, nível, velocidade, peso, fluxo, distância e relação.')}

        <h3>9. Cena precisa de ação com intenção</h3>
        <p>Na microcena da caixa, uma personagem anda até a porta. Na segunda versão, sabemos que ela quer sair antes que a outra descubra o segredo.</p>
        ${choice('9','Ação dramática','O que a segunda versão acrescenta?',[
          ['a','Objetivo e consequência, que transformam deslocamento em ação dramática mais legível'],
          ['b','A certeza de que a cena precisa ter gritos'],
          ['c','A necessidade de cenário caro']
        ],'a','Correto. Perguntar “o que a personagem quer agora?” ajuda a organizar ações e conflito.','Movimento descreve o corpo; ação dramática relaciona movimento, intenção, situação e consequência.')}

        <h3>10. Improvisar é construir com o outro</h3>
        ${choice('10','Improvisação','Durante uma improvisação, qual atitude tende a fazer a cena avançar?',[
          ['a','Ouvir a proposta do colega, aceitá-la como parte da situação e acrescentar uma ação coerente'],
          ['b','Ignorar o que o colega criou e iniciar outra história'],
          ['c','Competir para falar mais que todos']
        ],'a','Isso. Improvisação coletiva depende de atenção, resposta e construção compartilhada.','Improvisar não é fazer qualquer coisa: é tomar decisões em relação ao que já está acontecendo.')}

        <h3>11. Enquadrar é escolher — e excluir</h3>
        <div class="visual-prompt">
          <svg viewBox="0 0 640 250" role="img" aria-label="Comparação entre plano aberto, plano médio e detalhe de uma mesma cena" style="width:100%;border-radius:14px;background:#e7edf2">
            <rect x="20" y="25" width="185" height="190" rx="10" fill="#cdd8e4"/><rect x="228" y="25" width="185" height="190" rx="10" fill="#cdd8e4"/><rect x="436" y="25" width="185" height="190" rx="10" fill="#cdd8e4"/>
            <circle cx="113" cy="102" r="23" fill="#d6a382"/><rect x="86" y="125" width="54" height="62" rx="18" fill="#7a3e73"/><rect x="55" y="173" width="115" height="16" fill="#99704e"/>
            <circle cx="320" cy="96" r="37" fill="#d6a382"/><rect x="278" y="133" width="84" height="65" rx="22" fill="#7a3e73"/>
            <circle cx="528" cy="121" r="64" fill="#d6a382"/><circle cx="550" cy="105" r="7" fill="#172033"/>
            <text x="112" y="235" text-anchor="middle" font-size="14">plano aberto</text><text x="320" y="235" text-anchor="middle" font-size="14">plano médio</text><text x="528" y="235" text-anchor="middle" font-size="14">detalhe</text>
          </svg>
          <div><strong class="card-title">A mesma situação, informações diferentes</strong><p>Quanto mais o enquadramento se aproxima, menos contexto espacial aparece e mais um detalhe pode ganhar importância.</p></div>
        </div>
        ${choice('11','Fotografia e enquadramento','Se o objetivo é mostrar a relação entre uma pessoa e o espaço da exposição, qual escolha inicial tende a ajudar mais?',[
          ['a','Plano aberto ou geral que preserve informações do ambiente'],
          ['b','Detalhe extremo de um único olho'],
          ['c','Qualquer plano produz exatamente a mesma informação']
        ],'a','Correto. Plano aberto tende a preservar mais contexto; depois outros planos podem complementar a narrativa.','Escolha o plano de acordo com a informação que precisa tornar visível.')}

        <h3>12. Montagem cria relações que não estão em um plano isolado</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Plano A</strong><p>Uma estudante olha para fora do quadro.</p></div>
          <div class="mini-card"><strong>Plano B</strong><p>Uma obra rasgada aparece no chão.</p></div>
          <div class="mini-card"><strong>Plano C</strong><p>Um grupo entra correndo no corredor.</p></div>
        </div>
        ${choice('12','Sequência e montagem','Ao colocar A → B, qual relação o espectador pode construir?',[
          ['a','Pode interpretar que a estudante olha ou reage à obra rasgada, mesmo que os planos tenham sido gravados separadamente'],
          ['b','A ordem dos planos nunca interfere na narrativa'],
          ['c','Montagem serve apenas para encurtar vídeos']
        ],'a','Isso. A justaposição faz o espectador relacionar informações e construir continuidade, causa, contraste ou expectativa.','No audiovisual, significado também nasce entre os planos.')}

        <h3>13. Patrimônio não é sinônimo de edifício antigo</h3>
        ${choice('13','Patrimônio cultural','Qual conjunto contém exemplos possíveis de dimensões imateriais do patrimônio?',[
          ['a','Saberes, modos de fazer, celebrações e formas de expressão transmitidas e recriadas por grupos sociais'],
          ['b','Somente prédios de pedra com mais de cem anos'],
          ['c','Apenas objetos guardados em museus']
        ],'a','Correto. Patrimônio cultural pode envolver bens materiais e referências imateriais vivas.','Pense também em práticas, conhecimentos, música, festas, rituais, ofícios e formas de expressão.')}

        <h3>14. Identidade cultural não é caricatura</h3>
        <p>Uma equipe quer representar “a cultura brasileira” usando uma única imagem e afirma que ela representa igualmente todos os brasileiros.</p>
        ${choice('14','Identidade e diversidade','Qual revisão é mais rigorosa?',[
          ['a','Reconhecer que identidades são diversas, históricas e situadas, e explicitar de qual grupo, lugar, prática ou contexto se está falando'],
          ['b','Escolher um estereótipo mais conhecido e tratá-lo como essência nacional'],
          ['c','Concluir que identidade cultural não pode ser estudada']
        ],'a','Isso. Evitar estereótipo exige situar referências, reconhecer diversidade e não falar por grupos sem evidência.','Pergunte sempre: identidade de quem, em qual contexto, em qual tempo e segundo quais fontes?')}

        <h3>15. Regra também pode ser matéria de criação</h3>
        <p>Um programa desenha cem formas. O artista não posicionou cada forma manualmente; definiu regras de repetição, variação e cor e depois selecionou e revisou resultados.</p>
        ${choice('15','Arte generativa','Qual descrição é mais adequada?',[
          ['a','O processo criativo pode incluir projetar um sistema de regras que gera variações'],
          ['b','Se existe algoritmo, não existem escolhas artísticas'],
          ['c','Qualquer saída automática é automaticamente uma obra final']
        ],'a','Correto. Projetar regras, escolher parâmetros, selecionar resultados e revisar fazem parte das decisões do processo.','Código ou algoritmo podem participar da linguagem sem eliminar intenção, seleção e responsabilidade.')}

        <h3>16. Interatividade exige relação entre entrada e resposta</h3>
        <p>Uma instalação detecta o tempo que o visitante permanece diante da tela. Quanto mais tempo, mais camadas visuais aparecem.</p>
        ${choice('16','Interação','Qual esquema descreve melhor o funcionamento?',[
          ['a','Entrada: tempo de permanência → regra: mapear duração → resposta: adicionar camadas'],
          ['b','Entrada e resposta não possuem relação'],
          ['c','Interatividade significa apenas colocar um botão de play']
        ],'a','Isso. Em uma obra interativa, uma ação ou condição entra no sistema e produz uma resposta segundo alguma regra.','Pergunte: o que o sistema percebe, como interpreta e o que muda em consequência?')}

        <h3>17. “Achei na internet” não é uma licença</h3>
        ${choice('17','Remix e autoria','Antes de reutilizar uma imagem encontrada online em uma obra digital pública, qual procedimento é mais responsável?',[
          ['a','Localizar autoria e fonte original e verificar licença ou condição de uso antes de adaptar ou publicar'],
          ['b','Assumir que qualquer imagem visível no navegador é de domínio público'],
          ['c','Retirar a assinatura e usar sem crédito']
        ],'a','Correto. Fonte, autoria e licença precisam ser investigadas antes do remix e da circulação.','Disponível para visualizar não significa automaticamente disponível para reutilizar.')}

        <h3>18. IA não elimina as perguntas de autoria e responsabilidade</h3>
        <p>Uma equipe gera vinte imagens com IA, escolhe três, recorta, combina com fotografias próprias e publica o resultado na mostra.</p>
        ${choice('18','IA e processo criativo','Qual registro torna o processo mais transparente?',[
          ['a','Explicar intenção, ferramenta utilizada, seleção, materiais incorporados, edições humanas, fontes e decisões posteriores'],
          ['b','Dizer apenas “foi a IA” e apagar todas as decisões humanas e referências'],
          ['c','Afirmar que qualquer resultado de IA pode usar livremente imagem de colegas sem consentimento']
        ],'a','Isso. Transparência sobre etapas e materiais ajuda a discutir autoria, processo, direitos e responsabilidade de forma mais rigorosa.','IA é uma etapa possível do processo; não dispense perguntas sobre fonte, consentimento, transformação, seleção e circulação.')}

        <h3>19. Curadoria é construir relações</h3>
        <p>A turma possui 25 trabalhos, mas o espaço comporta apenas 12 sem comprometer circulação e leitura.</p>
        ${choice('19','Curadoria','Qual decisão demonstra melhor pensamento curatorial?',[
          ['a','Selecionar trabalhos segundo uma pergunta ou relação definida e explicar também por que outros ficaram de fora'],
          ['b','Colocar tudo amontoado para evitar qualquer escolha'],
          ['c','Escolher apenas os trabalhos das pessoas mais populares']
        ],'a','Correto. Curadoria envolve seleção, relação, contexto e responsabilidade; não é apenas premiar “os melhores”.','Pergunte que experiência e que relações a seleção pretende construir para o público.')}

        <h3>20. Acessibilidade muda o projeto — para melhor</h3>
        <p>A mostra tem vídeo sem legenda, corredor estreito, textos longos e pequenos e uma obra sonora sem alternativa de acesso ao conteúdo principal.</p>
        ${choice('20','Acesso e participação','Qual resposta é mais adequada?',[
          ['a','Pensar circulação, legibilidade, legendas, recursos visuais/sonoros equivalentes e outras barreiras ainda durante a concepção da exposição'],
          ['b','Esperar alguém reclamar depois da abertura'],
          ['c','Considerar acessibilidade apenas uma questão estética opcional']
        ],'a','Isso. Acessibilidade funciona melhor quando integra o projeto desde o início e influencia espaço, mídia, texto e mediação.','Não trate acesso como remendo final. Identifique barreiras enquanto ainda é possível mudar o projeto.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafios de transferência</span>
          <h3>21. Agora responda sem alternativas</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio A — Uma ideia, três linguagens</strong>
            <p>Escolha uma ideia simples: <strong>espera, pressa, memória, encontro, silêncio, excesso ou caminho</strong>. Proponha três versões:</p>
            <ol>
              <li>uma solução visual;</li>
              <li>uma solução sonora ou corporal;</li>
              <li>uma solução audiovisual, cênica ou digital.</li>
            </ol>
            <p>Em cada versão, explique <strong>qual elemento da linguagem faz o trabalho principal</strong>. Não vale apenas trocar o suporte e manter tudo igual.</p>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio B — Conserte a exposição</strong>
            <p>Você entra numa sala com cinco problemas: duas trilhas sonoras se misturam, um vídeo recebe luz direta do projetor vizinho, uma obra bloqueia a passagem, as etiquetas não têm autoria e uma instalação interativa não explica como participar.</p>
            <p>Proponha uma ordem de correção e justifique <strong>qual risco ou prejuízo cada mudança resolve</strong>.</p>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio C — Leia antes de julgar</strong>
            <p>Escolha uma obra, fotografia, música, dança, cena ou produção digital que você inicialmente não goste. Faça duas colunas:</p>
            <ol>
              <li><strong>Gosto pessoal:</strong> o que te aproxima ou afasta.</li>
              <li><strong>Análise:</strong> linguagem, materialidade, contexto, intenção, técnica, circulação e efeitos observáveis.</li>
            </ol>
            <p>Depois responda: <strong>é possível não gostar e ainda assim analisar com rigor?</strong> Use evidências.</p>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio D — 30 segundos para convidar</strong>
            <p>Crie um storyboard de 5 a 7 planos para divulgar uma mostra escolar. Inclua:</p>
            <ol>
              <li>um plano que situe o espaço;</li>
              <li>um detalhe que crie curiosidade;</li>
              <li>uma presença humana ou vestígio dela;</li>
              <li>uma decisão consciente de som ou silêncio;</li>
              <li>créditos e informações essenciais;</li>
              <li>pelo menos uma decisão de acessibilidade.</li>
            </ol>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio E — Caixa-preta final: “ATRAVESSAR”</strong>
            <p>Seu grupo recebe somente uma palavra-tema: <strong>ATRAVESSAR</strong>. Crie uma pequena proposição artística de 60–90 segundos ou uma experiência visual/digital equivalente.</p>
            <p>A solução precisa:</p>
            <ol>
              <li>definir uma intenção;</li>
              <li>usar conscientemente pelo menos <strong>duas linguagens</strong> estudadas;</li>
              <li>explicar uma escolha de materialidade;</li>
              <li>prever relação com espaço e público;</li>
              <li>registrar autoria, fontes e licenças quando houver materiais de terceiros;</li>
              <li>identificar pelo menos uma barreira de acesso e responder a ela;</li>
              <li>ser testada com outra pessoa e revisada.</li>
            </ol>
            <p><strong>Não explique primeiro.</strong> Apresente, observe o que o público percebe e só depois compare intenção × efeito.</p>
          </div>
        </section>

        <h3>22. Seu mapa de saída</h3>
        <div class="studio-box">
          <strong class="card-title">Não é nota: é autodiagnóstico de fechamento</strong>
          <p>Marque apenas o que você acredita conseguir <strong>demonstrar com um exemplo</strong>.</p>
          <div class="comparison-grid">
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Perceber</strong><p>Consigo observar elementos visuais, sonoros, corporais ou cênicos e apontar evidências.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Compor</strong><p>Consigo organizar foco, contraste, espaço, tempo ou sequência de acordo com uma intenção.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Experimentar</strong><p>Consigo testar materiais, procedimentos e versões antes de escolher.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Escutar</strong><p>Consigo distinguir ritmo, timbre, intensidade, duração, textura e silêncio em situações simples.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Corpo/cena</strong><p>Consigo analisar intenção, espaço, tempo, relação, ação e presença.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Audiovisual</strong><p>Consigo justificar enquadramento, plano, sequência, montagem e ponto de vista.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Cultura</strong><p>Consigo discutir identidade e patrimônio sem reduzir grupos a estereótipos.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Tecnologia</strong><p>Consigo usar regra, interação, remix ou IA com intenção e responsabilidade.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Curar</strong><p>Consigo selecionar e relacionar trabalhos pensando em espaço, público e mediação.</p></label>
            <label class="mini-card"><input type="checkbox" data-final-skill> <strong>Revisar</strong><p>Consigo comparar intenção e efeito, receber feedback e melhorar uma versão.</p></label>
          </div>
          <div id="finalChecklistFeedback" class="choice-feedback" aria-live="polite"></div>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box">
            <strong>Fechamento da 1ª série.</strong>
            <p>Você não precisava chegar aqui sabendo “desenhar”, tocar, dançar, atuar ou programar. O percurso buscou desenvolver algo mais amplo: <strong>perceber, experimentar, criar, analisar, contextualizar, justificar escolhas, respeitar autoria e diversidade e revisar a própria produção</strong>.</p>
            <p>O melhor sinal de aprendizagem não é lembrar todos os termos. É encontrar uma situação artística nova e saber <strong>o que observar, que perguntas fazer e como testar uma ideia</strong>.</p>
          </div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();