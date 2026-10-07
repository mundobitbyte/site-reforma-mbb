(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Pessoa e tecnologia',
      technical:'tecnologia • bioética • autonomia • consentimento • benefício • dano • justiça • privacidade • IA em saúde • dados • edição genética • governança • responsabilidade',
      title:'Se uma tecnologia pode ser usada, isso significa que deve ser usada?',
      objective:'<strong>Objetivo:</strong> analisar problemas bioéticos produzidos por tecnologias aplicadas à vida e à saúde; distinguir possibilidade técnica de justificação ética; compreender consentimento, autonomia, benefício, risco, justiça, privacidade e responsabilidade como critérios de análise; avaliar IA em saúde e edição genética sem transformar inovação em promessa automática nem medo automático.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">O sistema recomenda. Quem decide?</strong>
            <p>Um hospital começa a usar um sistema de inteligência artificial para ajudar a organizar exames e indicar quais casos parecem exigir atenção mais rápida. O sistema processa milhares de registros em segundos e pode encontrar padrões difíceis de perceber manualmente.</p>
            <p>Mas surge uma situação concreta: a recomendação do sistema entra em conflito com a avaliação do profissional que está diante do paciente. Além disso, nem todos entendem como o algoritmo chegou àquela classificação.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quando uma tecnologia amplia nosso poder de agir, o que precisamos perguntar antes de decidir como ela deve ser usada?</p>
          </div>
        </section>

        <div class="argument-chain">
          <span>o que podemos fazer?</span><b>→</b><span>para quê?</span><b>→</b><span>com quais evidências?</span><b>→</b><span>quem é afetado?</span><b>→</b><span>quais riscos?</span><b>→</b><span>quem responde?</span>
        </div>

        ${choice('1','Poder técnico e dever moral','Uma nova técnica torna possível fazer algo que antes era impossível. O que podemos concluir imediatamente?',[['a','Se é tecnicamente possível, então é moralmente correto'],['b','A possibilidade técnica é um fato relevante, mas ainda precisamos discutir finalidade, riscos, direitos, alternativas e responsabilidades'],['c','Toda tecnologia nova deve ser rejeitada até desaparecer qualquer risco']],'b','Correto. Saber que algo pode ser feito não responde, por si só, se deve ser feito, em quais condições e por quem.','Bioética não transforma inovação em aprovação automática nem em proibição automática.')}

        <h3>1. Tecnologia não é apenas “uma máquina”</h3>
        <p>Chamamos de tecnologia não só aparelhos, mas também <strong>técnicas, sistemas, softwares, procedimentos, instrumentos e formas organizadas de intervir no mundo</strong>. Um ventilador mecânico, uma vacina, um prontuário eletrônico, uma técnica cirúrgica, uma ferramenta de edição genética e um algoritmo de apoio diagnóstico são tecnologias em sentidos diferentes.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Capacidade</strong><p>O que a tecnologia permite fazer que antes era impossível, mais lento ou menos preciso?</p></div>
          <div class="mini-card"><strong>Finalidade</strong><p>Que problema pretende resolver? A finalidade declarada coincide com o uso real?</p></div>
          <div class="mini-card"><strong>Efeitos</strong><p>Quem recebe benefícios, quem assume riscos e que efeitos não planejados podem surgir?</p></div>
        </div>

        <div class="concept-box"><strong>Eficiência é um valor importante, mas não é o único.</strong><p>Uma solução pode ser mais rápida ou barata e ainda exigir perguntas sobre segurança, privacidade, consentimento, acesso, responsabilidade e respeito às pessoas afetadas.</p></div>

        <h3>2. O que é bioética?</h3>
        <p><strong>Bioética</strong> é a reflexão ética sobre problemas ligados à vida, à saúde, à medicina, às ciências biológicas e às tecnologias associadas. Ela pergunta não apenas “funciona?”, mas também <strong>“como deve ser usado?”, “com que limites?”, “quem decide?”, “quem assume o risco?” e “que valores entram em conflito?”</strong>.</p>

        <p>A Declaração Universal sobre Bioética e Direitos Humanos da UNESCO, adotada em 2005, reúne princípios como dignidade humana, benefício e dano, autonomia, consentimento, privacidade, igualdade, justiça, solidariedade, responsabilidade social e proteção das gerações futuras. Ela não funciona como uma calculadora que produz automaticamente uma resposta para cada dilema: os princípios precisam ser interpretados e, às vezes, entram em tensão.</p>

        <div class="source-box">
          <strong class="card-title">Uma referência internacional</strong>
          <p>A declaração da UNESCO associa bioética a direitos humanos e destaca a importância de consentimento informado, privacidade, integridade científica, debate público e responsabilidade diante dos efeitos da ciência e da tecnologia.</p>
          <p><a href="https://www.unesco.org/en/ethics-science-technology/bioethics-and-human-rights" target="_blank" rel="noopener noreferrer">Fonte: UNESCO — Universal Declaration on Bioethics and Human Rights</a></p>
        </div>

        ${choice('2','Princípios não são botões','Dois princípios bioéticos parecem apontar para decisões diferentes num caso concreto. O que fazer?',[['a','Escolher qualquer um ao acaso, porque princípios sempre têm o mesmo peso'],['b','Reconstruir o conflito, examinar fatos, alternativas, consequências e justificativas para explicar por que um princípio deve ter maior peso naquele caso'],['c','Concluir que ética não serve para nada quando há conflito']],'b','Isso. Dilemas existem justamente porque valores importantes podem entrar em tensão e precisam ser justificados no contexto.','Princípios orientam a análise; eles não substituem argumentação.')}

        <h3>3. Consentimento e autonomia: o caso HeLa</h3>
        <p>Em 1951, células retiradas de uma amostra tumoral de <strong>Henrietta Lacks</strong> passaram a ser cultivadas e utilizadas em pesquisa sem que ela soubesse ou consentisse. Essas células, conhecidas como <strong>HeLa</strong>, tornaram-se uma ferramenta extremamente importante para a pesquisa biomédica.</p>

        <p>O caso é filosoficamente poderoso porque duas afirmações podem ser verdadeiras ao mesmo tempo: <strong>as células contribuíram enormemente para a ciência</strong> e <strong>a maneira como foram obtidas e utilizadas levanta questões sérias sobre consentimento, privacidade e respeito à pessoa</strong>. Reconhecer o benefício científico não apaga o problema ético; reconhecer o problema ético não apaga a contribuição científica.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:HeLa-I.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/HeLa-I.jpg?width=1200" alt="Imagem de microscopia de fluorescência de células HeLa cultivadas, com estruturas celulares marcadas em diferentes cores." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>HeLa: uma imagem científica e uma questão ética</strong>
            <span>A imagem mostra células HeLa cultivadas em laboratório. Elas ajudam a visualizar o material biológico que se tornou fundamental em inúmeras pesquisas — e a perceber que por trás de uma “linhagem celular” existe uma história humana concreta.</span>
            <small>Imagem: National Institutes of Health (NIH), 2007, via Wikimedia Commons — domínio público.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">O que o NIH registra hoje</strong>
          <p>O NIH reconhece que as amostras foram obtidas sem conhecimento ou consentimento de Henrietta Lacks e mantém um acordo com sua família para regular o acesso a dados genômicos de células HeLa em pesquisas apoiadas pelo instituto.</p>
          <p><a href="https://osp.od.nih.gov/hela-cells/" target="_blank" rel="noopener noreferrer">NIH — HeLa Cells</a> •
          <a href="https://www.grants.nih.gov/policy-and-compliance/policy-topics/sharing-policies/dms/privacy/nih-lacks-family-agreement" target="_blank" rel="noopener noreferrer">NIH-Lacks Family Agreement</a></p>
        </div>

        ${choice('3','Consentimento informado','Qual situação se aproxima mais de consentimento informado válido?',[['a','A pessoa recebe informação compreensível sobre finalidade, riscos relevantes, alternativas e possibilidade de recusar, e decide sem coerção indevida'],['b','A pessoa assina um formulário que não consegue compreender e é informada de que não pode fazer perguntas'],['c','A equipe decide que o benefício esperado torna desnecessário explicar o procedimento']],'a','Correto. Consentimento envolve informação adequada, compreensão, liberdade para decidir e possibilidade de retirar o consentimento dentro das regras aplicáveis.','Assinatura sozinha não transforma automaticamente um processo em consentimento informado.')}

        <h3>4. Benefício, dano, justiça e privacidade</h3>
        <p>Uma análise bioética precisa observar mais de uma dimensão. Quatro perguntas ajudam a tornar o problema concreto:</p>

        <div class="four-col">
          <div class="mini-card"><strong>Benefício</strong><p>Que melhora real é esperada? Há evidência de que a tecnologia produz esse benefício?</p></div>
          <div class="mini-card"><strong>Dano e risco</strong><p>Que prejuízos são possíveis? Qual é a gravidade, probabilidade e possibilidade de reversão?</p></div>
          <div class="mini-card"><strong>Justiça</strong><p>Como benefícios, custos e riscos são distribuídos? Os critérios de acesso são justificáveis?</p></div>
          <div class="mini-card"><strong>Privacidade</strong><p>Que dados íntimos são coletados? Quem acessa? Por quanto tempo? Para qual finalidade?</p></div>
        </div>

        <div class="note-box"><strong>“Benefício para muitos” não elimina automaticamente direitos individuais.</strong><p>Da mesma forma, proteger autonomia não significa ignorar qualquer efeito sobre terceiros. Bioética exige explicitar o conflito e justificar os limites propostos.</p></div>

        <h3>5. Tecnologia sofisticada não elimina responsabilidade humana</h3>
        <p>Cirurgias assistidas por sistemas robóticos mostram uma distinção importante: a máquina pode ampliar precisão, visão e alcance dos movimentos, mas isso não significa que ela se torne um <strong>agente moral independente</strong> no mesmo sentido de uma pessoa.</p>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:WBAMC_first_in_DoD_to_use_robot_for_surgery_160426-A-EK666-506.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/WBAMC_first_in_DoD_to_use_robot_for_surgery_160426-A-EK666-506.jpg?width=1400" alt="Equipe médica preparando um sistema cirúrgico robótico da Vinci Xi em ambiente hospitalar." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>O robô faz parte de uma rede de responsabilidade</strong>
            <span>Uma cirurgia assistida por robô envolve equipe médica, treinamento, protocolos, fabricante, manutenção, software, avaliação de risco e decisão clínica. Quanto mais complexa a tecnologia, mais importante se torna mapear quem decide e quem responde por cada etapa.</span>
            <small>Foto: U.S. Army / William Beaumont Army Medical Center, 2016, via Wikimedia Commons — domínio público.</small>
          </figcaption>
        </figure>

        <div class="concept-box"><strong>Automação pode redistribuir responsabilidade — não fazê-la desaparecer.</strong><p>Se um sistema recomenda uma conduta, precisamos saber quem pode aceitar, rejeitar ou revisar a recomendação, que informações estavam disponíveis e que mecanismos existem quando algo dá errado.</p></div>

        ${choice('4','Quem responde?','Um sistema de IA em saúde fornece uma recomendação que um profissional segue sem verificar, apesar de haver sinais claros de erro. Qual análise é mais adequada?',[['a','A culpa é sempre somente do software'],['b','Não existe responsabilidade porque a decisão foi automatizada'],['c','É preciso reconstruir a cadeia: projeto do sistema, validação, treinamento, condições de uso, supervisão humana e decisão concreta']],'c','Isso. Tecnologias complexas criam cadeias de responsabilidade que precisam ser analisadas, não apagadas.','Dizer “foi o algoritmo” não encerra a investigação ética.')}

        <h3>6. Inteligência artificial em saúde: promessa e limites</h3>
        <p>A Organização Mundial da Saúde reconhece que sistemas de IA podem apoiar diagnóstico, tratamento, pesquisa, desenvolvimento de medicamentos e gestão da saúde. Ao mesmo tempo, recomenda que o uso seja orientado por princípios como <strong>autonomia humana, segurança, transparência, responsabilidade, inclusão e sustentabilidade</strong>.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Transparência</strong><p>Que informação precisa estar disponível para que profissionais, gestores e pessoas afetadas entendam o papel do sistema?</p></div>
          <div class="mini-card"><strong>Validação</strong><p>O sistema foi testado para a finalidade e população em que será usado? Como erros são detectados?</p></div>
          <div class="mini-card"><strong>Supervisão</strong><p>Quem pode contestar a saída do sistema? Existe mecanismo de revisão e correção?</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">IA não deve substituir o julgamento ético</strong>
          <p>A orientação da OMS afirma que seres humanos devem permanecer no controle das decisões de saúde e que sistemas precisam de segurança, transparência, responsabilização e mecanismos de contestação.</p>
          <p><a href="https://www.who.int/publications/i/item/9789240029200" target="_blank" rel="noopener noreferrer">OMS — Ethics and governance of artificial intelligence for health</a></p>
        </div>

        ${choice('5','Precisão basta?','Um algoritmo acerta muitos casos em testes, mas ninguém sabe em quais situações ele falha mais nem existe mecanismo claro de revisão. O que falta para uma avaliação bioética adequada?',[['a','Nada; uma taxa alta de acerto resolve qualquer questão ética'],['b','Informação sobre limitações, validação, transparência, supervisão e consequências dos erros'],['c','Somente uma campanha publicitária mais convincente']],'b','Correto. Desempenho técnico é importante, mas precisa ser analisado junto com condições de uso, riscos e governança.','Uma métrica isolada não responde quem assume o erro nem quando o sistema deve ser contestado.')}

        <h3>7. Edição genética: nem toda intervenção é a mesma coisa</h3>
        <p>Tecnologias como <strong>CRISPR-Cas9</strong> permitem realizar alterações direcionadas no DNA. Mas “editar genes humanos” reúne situações muito diferentes, e a análise ética muda conforme o tipo de intervenção.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Edição somática</strong><p>Altera células do próprio paciente e, em princípio, não é transmitida aos descendentes. Pode ser investigada para tratar doenças.</p></div>
          <div class="mini-card"><strong>Edição germinativa não reprodutiva</strong><p>Pode ser estudada em células reprodutivas ou embriões sob condições de pesquisa, sem objetivo de estabelecer uma gestação.</p></div>
          <div class="mini-card"><strong>Edição hereditária</strong><p>Produz alterações que podem alcançar gerações futuras. Por isso levanta questões adicionais de segurança, consentimento das futuras pessoas e governança.</p></div>
        </div>

        <figure class="philo-figure">
          <a href="https://commons.wikimedia.org/wiki/File:CRISPR_Cas9.png" target="_blank" rel="noopener noreferrer">
            <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/CRISPR_Cas9.png?width=1200" alt="Diagrama didático do sistema CRISPR-Cas9 mostrando RNA guia, proteína Cas9, corte do DNA e reparo da sequência." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Antes da ética, precisamos compreender o que a técnica realmente faz</strong>
            <span>O diagrama mostra, de forma simplificada, como a proteína Cas9 é guiada a uma sequência de DNA e como o corte pode ser seguido por mecanismos de reparo. A análise bioética depende de fatos científicos corretos sobre capacidade, precisão, riscos e hereditariedade.</span>
            <small>Anna Drangowska-Way, Caitlin M. A. Simopoulos, Carla Bautista, Elisabeth Marnik, Thomas J. S. Merritt; versão em português via Wikimedia Commons — CC BY 4.0.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">A OMS recomenda governança robusta</strong>
          <p>A OMS diferencia edição somática, germinativa e hereditária e destaca que as aplicações hereditárias apresentam preocupações éticas e de segurança maiores. Suas recomendações tratam de supervisão, registro de pesquisas, colaboração internacional e resposta a atividades inseguras ou antiéticas.</p>
          <p><a href="https://www.who.int/health-topics/human-genome-editing" target="_blank" rel="noopener noreferrer">OMS — Human genome editing</a> •
          <a href="https://www.who.int/publications/i/item/9789240030381" target="_blank" rel="noopener noreferrer">OMS — Recommendations</a></p>
        </div>

        ${choice('6','Fato científico e decisão ética','Uma técnica de edição genética se torna mais precisa e segura. Isso resolve automaticamente todas as questões éticas sobre seu uso?',[['a','Sim; segurança técnica elimina questões de consentimento, finalidade, justiça e efeitos sobre futuras gerações'],['b','Não; melhor segurança muda uma parte importante da análise, mas outras questões normativas continuam exigindo argumentos'],['c','Não; portanto nenhuma edição genética deveria ser estudada']],'b','Isso. Evidências científicas podem alterar o peso de riscos e benefícios, mas não substituem a discussão sobre valores e responsabilidades.','Ciência informa a ética; não converte sozinha uma possibilidade em obrigação ou proibição.')}

        <h3>8. O que a ciência pode responder — e o que exige argumento ético?</h3>
        <div class="comparison-grid">
          <div class="mini-card">
            <strong>Perguntas predominantemente empíricas</strong>
            <p>Qual é a taxa de complicações? O sistema é mais preciso que a alternativa? A alteração é hereditária? Quais efeitos adversos foram observados? Que dados o algoritmo utiliza?</p>
          </div>
          <div class="mini-card">
            <strong>Perguntas normativas</strong>
            <p>Que nível de risco é aceitável? Quem deve decidir? Como equilibrar autonomia e proteção? Que distribuição de recursos é justa? Em quais situações uma intervenção deve ser permitida?</p>
          </div>
        </div>

        <div class="note-box"><strong>Não peça à ciência uma resposta que depende de valores — nem ignore a ciência ao discutir valores.</strong><p>Uma decisão bioética responsável precisa de fatos confiáveis e de argumentos normativos. Sem evidência, o debate moral pode partir de premissas falsas; sem reflexão ética, dados sozinhos não dizem o que devemos fazer.</p></div>

        <h3>9. Caderno de investigação — quarta etapa: audite uma tecnologia</h3>
        <div class="field-box">
          <strong class="card-title">Continue o mesmo caderno iniciado no capítulo 01</strong>
          <p>Escolha uma tecnologia não íntima que afete decisões humanas: IA para corrigir atividades, reconhecimento facial na entrada de um prédio, relógio que mede sinais corporais, aplicativo de localização, sistema de recomendação ou equipamento automatizado.</p>
          <p>Registre:</p>
          <ol>
            <li><strong>Finalidade:</strong> que problema a tecnologia pretende resolver?</li>
            <li><strong>Evidência:</strong> como sabemos que ela funciona?</li>
            <li><strong>Dados:</strong> que informações coleta ou produz?</li>
            <li><strong>Autonomia:</strong> quem aceita, recusa ou contesta seu uso?</li>
            <li><strong>Benefícios e riscos:</strong> para quem?</li>
            <li><strong>Responsabilidade:</strong> quem responde por erro, manutenção e decisão final?</li>
            <li><strong>Alternativa:</strong> existe solução menos invasiva ou mais segura?</li>
            <li><strong>Conclusão provisória:</strong> usar, não usar ou usar sob quais condições?</li>
          </ol>
          <p><strong>Regra MbB:</strong> diferencie o que você comprovou sobre a tecnologia do que está apenas supondo.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final</span>
          <div class="challenge-box">
            <strong class="card-title">O hospital quer adotar um novo sistema de IA</strong>
            <p>Um hospital testa um sistema que ajuda a priorizar exames. Nos testes internos, o desempenho médio é alto. Porém, o relatório ainda não explica claramente em quais situações os erros são mais frequentes, os profissionais receberam pouco treinamento e não existe um procedimento formal para contestar uma recomendação automática.</p>
            <p><strong>Sua tarefa não é ser “a favor” ou “contra IA”.</strong> Escreva uma recomendação em seis passos:</p>
            <ol>
              <li>aponte um benefício potencial;</li>
              <li>aponte dois riscos ou incertezas relevantes;</li>
              <li>explique que informação adicional deve ser obtida antes da adoção;</li>
              <li>defina onde deve permanecer a supervisão humana;</li>
              <li>proponha um mecanismo de revisão quando houver erro;</li>
              <li>conclua: rejeitar, adotar imediatamente ou realizar adoção controlada sob condições — justificando sua escolha.</li>
            </ol>
            <details>
              <summary>Ver uma resposta possível</summary>
              <p>Um benefício potencial é ajudar a equipe a identificar rapidamente casos que merecem atenção. Entre os riscos estão erros concentrados em situações ainda não identificadas e confiança excessiva de profissionais pouco treinados. Antes da adoção ampla, é necessário conhecer desempenho por tipo de caso, limitações, origem dos dados de validação e condições em que o sistema não deve ser usado. A decisão clínica final deve permanecer sujeita à avaliação humana, com possibilidade de discordar do sistema e registrar a justificativa. Também deve existir procedimento para relatar erros, revisar resultados e suspender o uso se surgirem problemas relevantes. Com essas informações, uma resposta defensável seria uma adoção controlada e monitorada, em vez de aprovação irrestrita ou rejeição automática.</p>
            </details>
          </div>

          <div class="curriculum-box">
            <details>
              <summary>Essência do capítulo</summary>
              <p><strong>Capacidade técnica não é justificativa ética automática.</strong> Bioética analisa finalidades, autonomia, consentimento, benefícios, danos, justiça, privacidade e responsabilidade. Tecnologias como IA em saúde e edição genética exigem evidência científica e governança. Ciência ajuda a estabelecer fatos e riscos; decisões sobre o que devemos fazer também exigem argumentos éticos explícitos.</p>
            </details>
          </div>
        </section>
      `
    });
  }

  MBB.enableChapter?.('04 Ser humano, tecnologia e bioética', showChapter);
})();