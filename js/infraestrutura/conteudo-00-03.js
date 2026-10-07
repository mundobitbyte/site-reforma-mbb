window.infraestruturaLessons = Array.isArray(window.infraestruturaLessons) ? window.infraestruturaLessons : [];

window.infraestruturaLessons.push({
  id: 'diagnostico',
  number: '00',
  unit: 'Fundação · Ler antes de agir',
  menuTitle: 'Diagnóstico inicial',
  technicalTitle: 'estado inicial • risco • evidência • hipótese • teste • documentação',
  title: 'Você consegue investigar antes de mexer?',
  objective: 'Identificar o ponto de partida em decisões práticas de hardware, sistema, dados, permissões e diagnóstico, sem transformar o diagnóstico em revisão teórica.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Primeiro dia de suporte · pequena escola</span>
      <h2>A secretaria precisa atender famílias em 40 minutos, mas seu computador começou a falhar.</h2>
      <p>A atendente atualizou programas, um colega trocou cabos e alguém sugeriu formatar. A coordenadora sabe que há planilhas de matrícula apenas na máquina, mas ninguém registrou o que mudou. <strong>Sua primeira competência não é saber um comando: é saber o que ainda precisa ser descoberto.</strong></p>
    </div>

    <div class="note-box"><strong>Como usar este diagnóstico</strong><p>Responda pelo que você faria de verdade. O resultado não é nota. Ele mostra quais decisões ainda precisam de mais atenção nos próximos atendimentos.</p></div>

    <section class="checkpoint" data-quiz-group>
      <span class="eyebrow">Decisões de entrada</span>
      <h3>Escolha a ação tecnicamente mais defensável</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Antes de alterar o estado, registre o sintoma, o contexto e o que já foi tentado; isso preserva evidência e evita repetir intervenções.">
        <p>1. O computador está lento. Qual é o primeiro passo?</p>
        <label><input type="radio" name="d00a" value="a"> Formatar para eliminar qualquer erro de software.</label>
        <label><input type="radio" name="d00a" value="b"> Descrever quando a lentidão ocorre, registrar o estado e observar recursos.</label>
        <label><input type="radio" name="d00a" value="c"> Comprar mais memória RAM.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A prioridade é avaliar risco e preservar os dados antes de uma intervenção que possa agravar a perda.">
        <p>2. A unidade de armazenamento faz ruído incomum e há arquivos sem cópia. O que vem primeiro?</p>
        <label><input type="radio" name="d00b" value="a"> Repetir testes pesados até confirmar a falha.</label>
        <label><input type="radio" name="d00b" value="b"> Abrir a fonte para verificar a tensão.</label>
        <label><input type="radio" name="d00b" value="c"> Interromper ações desnecessárias, avaliar preservação dos dados e encaminhar se preciso.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Compatibilidade depende de especificação, formato físico, interface, energia, firmware e suporte; aparência semelhante não basta.">
        <p>3. Um SSD cabe fisicamente no conector. Isso prova que funcionará?</p>
        <label><input type="radio" name="d00c" value="a"> Não. Ainda é necessário conferir especificações e suporte do equipamento.</label>
        <label><input type="radio" name="d00c" value="b"> Sim. Encaixe físico garante compatibilidade.</label>
        <label><input type="radio" name="d00c" value="c"> Sim, desde que a capacidade seja maior.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Conta administrativa amplia o impacto de erros e ataques; o uso diário deve seguir o menor privilégio.">
        <p>4. Todos os usuários precisam ser administradores locais?</p>
        <label><input type="radio" name="d00d" value="a"> Sim, para evitar pedidos de senha.</label>
        <label><input type="radio" name="d00d" value="b"> Não. Privilégio administrativo deve ser usado apenas quando necessário.</label>
        <label><input type="radio" name="d00d" value="c"> Sim, se cada usuário tiver uma pasta própria.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Um evento só ganha valor diagnóstico quando coincide com o sintoma, o componente e o tempo observados; cor ou gravidade isolada não prova causa.">
        <p>5. O Visualizador de Eventos mostra uma linha de erro. O que ela prova?</p>
        <label><input type="radio" name="d00e" value="a"> Que o Windows precisa ser reinstalado.</label>
        <label><input type="radio" name="d00e" value="b"> Que o hardware está defeituoso.</label>
        <label><input type="radio" name="d00e" value="c"> Apenas que um evento foi registrado; é preciso relacioná-lo ao sintoma.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A restauração prova que a cópia está acessível e utilizável; ter um arquivo de backup sem testar não garante recuperação.">
        <p>6. Qual evidência demonstra melhor que um backup é utilizável?</p>
        <label><input type="radio" name="d00f" value="a"> Restaurar uma amostra em local separado e conferir o conteúdo.</label>
        <label><input type="radio" name="d00f" value="b"> Ver que a pasta de destino ocupa espaço.</label>
        <label><input type="radio" name="d00f" value="c"> Ler a mensagem “cópia concluída”.</label>
      </div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir raciocínio</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="note-box compact"><strong>Registro de partida</strong><p>Anote as questões em que sua justificativa foi diferente. No fechamento, refaça o diagnóstico e compare <em>como</em> você decidiu, não apenas quantos itens acertou.</p></div>
    <div class="essence"><strong>Essência</strong><p>Infraestrutura começa com uma disciplina: <strong>não destruir o estado que ainda precisa ser compreendido</strong>. Observe, limite o risco, produza evidência e só então intervenha.</p></div>
    <div class="bridge-box"><strong>O caso continua</strong><p>A equipe abre o Chamado 014 e identifica o equipamento como <strong>SEC-02</strong>. Antes de abrir ou alterar a estação, precisamos transformar “está ruim” em um registro que outra pessoa consiga continuar.</p></div>
  `
});

window.infraestruturaLessons.push({
  id: 'atendimento-inicial',
  number: '01',
  unit: 'Fundação · Ler antes de agir',
  menuTitle: 'Atendimento e triagem',
  technicalTitle: 'sintoma • contexto • escopo • risco • preservação • não intervenção',
  title: 'Antes de abrir ou alterar: o que realmente aconteceu?',
  objective: 'Transformar uma queixa vaga em um registro técnico, identificar risco aos dados e decidir o primeiro teste seguro ou quando não intervir.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Chamado 014 · Secretaria · SEC-02</span>
      <h2>“O computador trava e às vezes reinicia. Preciso dele hoje.”</h2>
      <p>A atendente da manhã relata que a falha começou após a queda de energia de ontem e aparece ao abrir duas planilhas de matrícula. A coordenadora confirma que esses arquivos não têm cópia recente; um colega já “limpou alguns arquivos”. O atendimento ao público depende da SEC-02, mas pode usar temporariamente outra estação. <strong>Cada nova informação muda a prioridade.</strong></p>
    </div>

    <h3>Queixa, sintoma e causa não são sinônimos</h3>
    <div class="comparison-grid three">
      <article><strong>Queixa</strong><p>Relato inicial: “está travando”. É importante, mas pode ser impreciso.</p></article>
      <article><strong>Sintoma observável</strong><p>O sistema deixa de responder ao abrir duas planilhas e reinicia sem aviso após alguns minutos.</p></article>
      <article><strong>Causa</strong><p>Ainda desconhecida. Energia, temperatura, armazenamento, memória, driver ou software são hipóteses, não respostas.</p></article>
    </div>

    <h3>Entender: construir uma linha do tempo</h3>
    <div class="task-box">
      <strong>Perguntas que reduzem incerteza</strong>
      <ul>
        <li>Quando ocorreu pela primeira vez e com que frequência?</li>
        <li>Qual ação estava sendo executada imediatamente antes?</li>
        <li>Houve queda de energia, atualização, instalação, transporte ou abertura do equipamento?</li>
        <li>Qual mensagem apareceu? Há foto, horário ou código?</li>
        <li>Quais dados são essenciais e onde estão salvos?</li>
        <li>O que já foi tentado e o que mudou depois?</li>
      </ul>
    </div>
    <div class="note-box compact"><strong>Ouvir não basta.</strong><p>Repita o entendimento com precisão: “Então a falha aparece ao abrir duas planilhas, começou depois da queda de energia e os arquivos de hoje só existem neste SSD. Está correto?”</p></div>

    <h3>Analisar: risco define a ordem</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Evidência</th><th>Risco principal</th><th>Decisão inicial</th></tr></thead>
      <tbody>
        <tr><td>Dados únicos, armazenamento instável</td><td>Perda ou agravamento</td><td>Reduzir uso; avaliar cópia/recuperação antes de testes intensivos.</td></tr>
        <tr><td>Cheiro, estalo, líquido, cabo danificado</td><td>Choque, incêndio ou dano maior</td><td>Desenergizar com segurança e não insistir.</td></tr>
        <tr><td>Falha reproduzível sem risco imediato</td><td>Alterar evidência</td><td>Registrar estado e repetir somente o necessário, com um teste controlado.</td></tr>
        <tr><td>Equipamento lacrado, em garantia ou fora da competência</td><td>Dano, garantia, responsabilidade</td><td>Não abrir; documentar e encaminhar pelo processo correto.</td></tr>
      </tbody>
    </table></div>

    <h3>Experimentar: primeiro teste do caso</h3>
    <p>Como os dados da SEC-02 são únicos, o primeiro objetivo não é “fazer parar de travar”. É verificar com a coordenadora se os arquivos críticos ainda podem ser lidos e copiados sem submeter a unidade a uma bateria de testes.</p>
    <ol>
      <li>registre data, horário, usuário, sintomas e alterações já relatadas;</li>
      <li>fotografe a mensagem de erro, se houver, sem expor dados pessoais;</li>
      <li>identifique as pastas críticas com o responsável;</li>
      <li>avalie uma cópia segura para mídia autorizada;</li>
      <li>se surgirem ruídos, desconexões ou erros crescentes, pare e encaminhe.</li>
    </ol>
    <div class="danger-box"><strong>Não transforme recuperação de dados em improviso.</strong><p>Quando a unidade apresenta sinais físicos, arquivos essenciais ou valor institucional, insistir pode piorar a possibilidade de recuperação profissional.</p></div>

    <h3>Aplicar: manter um registro que ajuda a próxima decisão</h3>
    <textarea id="ticket-template" class="report-template" aria-label="Modelo de registro de chamado" readonly>REGISTRO DE SUPORTE — SEC-02
CHAMADO:
Responsável e contato:
Equipamento / patrimônio:

SINTOMA OBSERVADO:
Quando começou / frequência:
Ação que antecede a falha:
Mensagem, código e horário:

CONTEXTO E ALTERAÇÕES RECENTES:
O que já foi tentado:
Dados essenciais e localização:

RISCOS IDENTIFICADOS:
ESTADO INICIAL REGISTRADO:
PRÓXIMO TESTE SEGURO:
Critério para interromper/encaminhar:</textarea>
    <p class="microcopy"><strong>Um registro, várias decisões.</strong> Continue neste mesmo registro enquanto o caso evolui. Acrescente somente fatos, evidências, mudanças e decisões que ajudem a próxima pessoa a continuar o atendimento.</p>
    <p><button class="action-button" type="button" data-copy-template="#ticket-template">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Decisão sob pressão</span><h3>O atendimento começa em 40 minutos</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A urgência operacional pode ser atendida com contingência; não justifica arriscar dados ou apagar evidências."><p>Qual plano é mais responsável?</p><label><input type="radio" name="q01a" value="a"> Formatar agora para ganhar tempo.</label><label><input type="radio" name="q01a" value="b"> Preservar dados, registrar o estado e providenciar outra estação para o atendimento.</label><label><input type="radio" name="q01a" value="c"> Continuar usando até a falha ficar permanente.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Bom atendimento técnico transforma urgência em <strong>prioridades controladas</strong>: pessoas, dados, segurança, continuidade e diagnóstico. Saber não intervir também é competência.</p></div>
    <div class="bridge-box"><strong>Próximo passo do caso</strong><p>A coordenadora abriu uma amostra na estação de contingência e confirmou a cópia. O Chamado 014 agora registra a SEC-02, a linha do tempo, o risco e o que já foi tentado. Com os dados preservados, podemos identificar a configuração real e investigar a lentidão.</p></div>
  `
});

window.infraestruturaLessons.push({
  id: 'componentes-compatibilidade',
  number: '02',
  unit: 'Fundação · Conhecer a máquina',
  menuTitle: 'Componentes e compatibilidade',
  technicalTitle: 'inventário • CPU • RAM • SSD • placa-mãe • fonte • interface • gargalo',
  title: 'Qual peça participa do problema — e ela realmente é compatível?',
  objective: 'Construir um inventário verificável, acompanhar o caminho dos dados e avaliar compatibilidade e gargalos sem culpar automaticamente a peça mais antiga.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Chamado 014 · Inventário da SEC-02</span>
      <h2>A estação tem 8 GB de RAM, SSD de 256 GB quase cheio e processador de quatro núcleos.</h2>
      <p>O inventário do Chamado 014 já registra esses dados; durante a condição registrada no chamado, a memória chega a 92%. Um fornecedor propõe trocar o processador e um colega quer instalar “mais memória de qualquer modelo”. Antes de a coordenação autorizar a compra, precisamos responder: <strong>qual recurso satura, qual expansão a placa aceita e qual problema a troca resolveria?</strong></p>
    </div>

    <h3>Observar: reconhecer antes de comparar</h3>
    <section class="visual-lab" aria-labelledby="lab-hardware-title">
      <div class="visual-lab-header">
        <span class="visual-kicker">Missão visual · objetos reais</span>
        <h4 id="lab-hardware-title">Localize forma, encaixe e pistas de interface</h4>
        <p>Olhe primeiro; não tente concluir compatibilidade só pela aparência.</p>
      </div>
      <div class="visual-body">
        <div class="photo-board">
          <figure class="object-card">
            <img src="../img/infraestrutura/placa-mae.webp" alt="Close de uma placa-mãe com slots de expansão, conectores e circuitos visíveis" width="1280" height="848" loading="lazy">
            <figcaption><strong>Placa-mãe</strong>Observe que ela reúne conectores e slots de formatos diferentes. A foto não revela, sozinha, modelo nem padrões suportados.<small class="source-credit">Lenharth Systems · CC0 · via <a href="https://commons.wikimedia.org/wiki/File:Computer_Motherboard_Closeup.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></small></figcaption>
          </figure>
          <figure class="object-card">
            <img src="../img/infraestrutura/memoria-ddr4.webp" alt="Módulo de memória RAM DDR4 de desktop visto pela frente e pelo verso, com contatos e entalhe visíveis" width="1280" height="798" loading="lazy">
            <figcaption><strong>RAM de desktop (DIMM DDR4)</strong>Localize contatos, entalhe e etiqueta. O entalhe evita alguns encaixes errados, mas não prova suporte da placa.<small class="source-credit">Rainer Knäpper · Free Art License · via <a href="https://commons.wikimedia.org/wiki/File:DDR4_DIMM_4GB_-2133_IMGP5813_smial_wp.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></small></figcaption>
          </figure>
          <figure class="object-card">
            <img src="../img/infraestrutura/ssd-sata.webp" alt="SSD SATA de 2,5 polegadas com os conectores de dados e energia visíveis" width="1280" height="720" loading="lazy">
            <figcaption><strong>SSD SATA de 2,5 polegadas</strong>Dois conectores na borda: dados e energia. Ele ainda precisa de baia/cabo/alimentação compatíveis.<small class="source-credit">Raimond Spekking · CC BY-SA 4.0 · conversão para WebP · via <a href="https://commons.wikimedia.org/wiki/File:Innovation_IT_SSD_2.5%22_1_TB_SATA_III_TLC-7140.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></small></figcaption>
          </figure>
          <figure class="object-card">
            <img src="../img/infraestrutura/ssd-m2-nvme.webp" alt="SSD M.2 NVMe 2280 com chips, contatos e chave do conector visíveis" width="1280" height="457" loading="lazy">
            <figcaption><strong>SSD M.2 NVMe 2280</strong>A placa estreita dispensa cabo SATA, mas M.2 descreve formato: interface, chave, comprimento e suporte ainda precisam ser confirmados.<small class="source-credit">D-Kuru · CC BY-SA 4.0 · conversão para WebP · via <a href="https://commons.wikimedia.org/wiki/File:Samsung_980_PRO_PCIe_4.0_NVMe_SSD_1TB-top_PNr%C2%B00915.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></small></figcaption>
          </figure>
        </div>
        <ol class="observation-prompts">
          <li><strong>1 · Localize</strong>Em quais objetos os contatos ficam expostos? Onde aparece uma chave ou entalhe?</li>
          <li><strong>2 · Compare</strong>Qual SSD usa cabos? Qual é fixado diretamente na placa-mãe?</li>
          <li><strong>3 · Decida</strong>Que informação ainda falta antes de afirmar que cada peça serve nesta estação?</li>
        </ol>
        <div class="visual-question"><strong>Registre antes de abrir o manual:</strong> “Acho que a peça é ___ porque vejo ___. Ainda preciso confirmar ___.”</div>
      </div>
    </section>

    <h3>Entender: acompanhar o caminho, não decorar uma lista</h3>
    <div class="process-flow" aria-label="Caminho simplificado ao abrir uma planilha">
      <div><strong>SSD lê</strong><span>arquivo e programa</span></div>
      <div><strong>RAM mantém</strong><span>dados em uso</span></div>
      <div><strong>CPU executa</strong><span>cálculos e instruções</span></div>
      <div><strong>GPU compõe</strong><span>interface quando necessário</span></div>
      <div><strong>Tela apresenta</strong><span>resultado ao usuário</span></div>
    </div>
    <p>O fluxo é simplificado. Ele serve para formular hipóteses: demora para ler, falta espaço, falta memória, um processo usa CPU ou há redução térmica?</p>

    <h3>Experimentar: inventário sem abrir</h3>
    <div class="task-box">
      <strong>Em uma estação Windows 11 autorizada</strong>
      <ol>
        <li>pesquise por <strong>Informações do Sistema</strong> e registre fabricante, modelo, processador, RAM instalada e modo da BIOS;</li>
        <li>abra <strong>Gerenciador de Tarefas → Desempenho</strong> e observe CPU, memória, disco e GPU durante a tarefa que provoca lentidão;</li>
        <li>abra <strong>Gerenciamento de Disco</strong> apenas para observar unidades, capacidades e partições — não exclua nem formate nada;</li>
        <li>consulte o manual do modelo para slots, limites e procedimentos de manutenção.</li>
      </ol>
    </div>

    <h3>Compatibilidade tem camadas</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Camada</th><th>Pergunta</th><th>Exemplo de evidência</th></tr></thead>
      <tbody>
        <tr><td>Física</td><td>Formato e dimensões cabem?</td><td>DIMM × SO-DIMM; SSD 2,5 pol. × M.2; altura do cooler.</td></tr>
        <tr><td>Elétrica/interface</td><td>Conector, padrão e alimentação correspondem?</td><td>DDR4 × DDR5; SATA × NVMe/PCIe; conectores de energia.</td></tr>
        <tr><td>Firmware/plataforma</td><td>Placa e firmware reconhecem o componente?</td><td>lista de CPUs suportadas; capacidade máxima; atualização exigida.</td></tr>
        <tr><td>Sistema/driver</td><td>O sistema oferece suporte e driver adequado?</td><td>arquitetura do SO; driver do fabricante; recurso habilitado.</td></tr>
      </tbody>
    </table></div>
    <div class="note-box compact"><strong>Modelo exato vence palpite.</strong><p>“É um Dell” ou “usa M.2” ainda é insuficiente. Use etiqueta, patrimônio, número do modelo, manual e especificação do componente.</p></div>

    <div class="visual-lab">
      <div class="visual-lab-header"><span class="visual-kicker">Decisão com evidência</span><h4>O M.2 da foto cabe no espaço disponível. Podemos comprar?</h4></div>
      <div class="visual-body">
        <p><strong>Previsão:</strong> escolha quais dados do manual precisam confirmar ou negar a compra.</p>
        <ul><li>tipo de soquete e chave;</li><li>interface aceita: SATA, PCIe/NVMe ou ambas;</li><li>comprimentos suportados, como 2230/2242/2280;</li><li>linhas/slots compartilhados e versão de firmware quando aplicável.</li></ul>
        <button class="action-button" type="button" data-reveal-answer="#compat-evidence" aria-expanded="false">Conferir leitura da evidência</button>
        <div id="compat-evidence" class="ok-box compact" hidden><strong>Conclusão limitada</strong><p>A foto permite reconhecer o formato M.2 e a chave visível. Ela <strong>não</strong> prova interface elétrica, comprimento aceito, suporte do firmware nem compartilhamento de portas. A compra só fica defensável quando o manual do modelo e a especificação do SSD concordam.</p></div>
      </div>
    </div>

    <h3>Analisar: o recurso que satura durante o sintoma</h3>
    <div class="evidence-grid">
      <article><strong>Observação A</strong><p>Memória em 92%, disco muito ativo e paginação ao abrir as planilhas. Fechar um aplicativo reduz o atraso.</p><p><strong>Hipótese fortalecida:</strong> pressão de memória. Ainda é preciso verificar expansão compatível e padrão de uso.</p></article>
      <article><strong>Observação B</strong><p>CPU em 18%, memória em 55%, disco em 30%, mas a aplicação aguarda um arquivo remoto.</p><p><strong>Hipótese enfraquecida:</strong> trocar CPU ou RAM. O gargalo pode estar fora da estação — sem concluir além da evidência disponível.</p></article>
    </div>
    <div class="mbb-pause-question"><strong>Uma peça antiga pode funcionar perfeitamente.</strong><p>Gargalo é a limitação que domina uma carga específica. Não é sinônimo de componente mais velho, menor número ou aparência desgastada.</p></div>

    <h3>Aplicar: inventário mínimo da estação</h3>
    <div class="note-box compact"><p><strong>Anexe ao Chamado 014:</strong></p><ul>
      <li>fabricante, modelo e patrimônio;</li>
      <li>CPU, RAM instalada e configuração de slots quando verificável;</li>
      <li>unidades de armazenamento, capacidade e espaço livre;</li>
      <li>GPU e interfaces relevantes;</li>
      <li>modo UEFI/firmware e versão do sistema;</li>
      <li>fonte das informações: ferramenta, etiqueta, manual ou inspeção.</li>
    </ul><p><strong>Não registre senhas, chaves de produto ou dados pessoais.</strong></p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Decisão de compra</span><h3>A RAM ficou em 92% durante a falha</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A observação fortalece a hipótese, mas a compra exige confirmar padrão, formato, capacidade, slots e suporte do equipamento."><p>Já podemos comprar qualquer módulo de 8 GB?</p><label><input type="radio" name="q02a" value="a"> Sim, capacidade igual basta.</label><label><input type="radio" name="q02a" value="b"> Sim, desde que seja novo.</label><label><input type="radio" name="q02a" value="c"> Não. Primeiro confirmamos compatibilidade e se a expansão resolve a carga observada.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Inventário identifica o que existe; medição mostra o que acontece; especificação limita o que pode ser instalado. <strong>Compra técnica conecta problema, evidência, compatibilidade e resultado esperado.</strong></p></div>
    <div class="bridge-box"><strong>Próximo passo do caso</strong><p>Inventário, medição e manual sustentaram a autorização de uma RAM compatível; a decisão de compra ficou anexada ao Chamado 014. Agora a intervenção física precisa preservar o estado registrado e não criar uma nova falha.</p></div>
  `
});

window.infraestruturaLessons.push({
  id: 'intervencao-segura',
  number: '03',
  unit: 'Fundação · Conhecer a máquina',
  menuTitle: 'Intervenção física segura',
  technicalTitle: 'desenergização • ESD • manual • RAM • SSD • cabos • ventilação • limites',
  title: 'Como trocar uma peça sem transformar manutenção em risco?',
  objective: 'Planejar e executar, em equipamento autorizado e supervisionado, uma intervenção simples com controle de energia, eletricidade estática, compatibilidade e validação antes/depois.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Chamado 014 · Intervenção na SEC-02</span>
      <h2>A memória compatível chegou. O computador não pode voltar com um problema novo.</h2>
      <p>O ticket acompanha a peça com o modelo aprovado, o inventário da SEC-02 e a fotografia do estado inicial. A equipe tem manual, bancada adequada, controle antiestático e autorização. <strong>A meta não é apenas encaixar a RAM: é controlar risco, alterar uma variável e provar que a estação continua íntegra.</strong></p>
    </div>

    <div class="danger-box"><strong>Limite absoluto de segurança</strong><p><strong>Nunca abra uma fonte de alimentação.</strong> Capacitores internos podem manter cargas perigosas mesmo desconectados. Não realize reparo elétrico, soldagem ou intervenção fora da sua formação, equipamento e supervisão.</p></div>

    <h3>Preparar: procedimento depende do modelo</h3>
    <p>Desktop, notebook e mini-PC têm travas, baterias, parafusos e sequências diferentes. Antes de abrir, consulte o manual de serviço do <strong>modelo exato</strong> e confirme garantia, autorização e ferramentas.</p>
    <div class="comparison-grid three">
      <article><strong>Pessoas</strong><p>responsável informado, área controlada, supervisão e limite de competência.</p></article>
      <article><strong>Dados</strong><p>backup avaliado, sistema encerrado corretamente e estado inicial registrado.</p></article>
      <article><strong>Equipamento</strong><p>manual, peça compatível, ferramentas corretas e bancada sem líquidos.</p></article>
    </div>

    <h3>Desenergizar e controlar descarga eletrostática</h3>
    <ol>
      <li>encerre o sistema normalmente;</li>
      <li>desconecte alimentação e cabos conforme o manual;</li>
      <li>quando aplicável, desconecte/remova bateria seguindo o procedimento do fabricante;</li>
      <li>use proteção ESD adequada e mantenha componentes em embalagem antiestática até o momento da instalação;</li>
      <li>segure módulos e placas pelas bordas; não toque contatos dourados, pinos ou circuitos.</li>
    </ol>
    <div class="note-box compact"><strong>Pulseira antiestática não substitui desenergização.</strong><p>Ela reduz risco de ESD aos componentes; não torna seguro trabalhar em circuito energizado.</p></div>

    <h3>Experimentar: intervenção guiada em uma variável</h3>
    <div class="task-box">
      <strong>Roteiro supervisionado — RAM, SSD ou cabo acessível</strong>
      <ul class="checklist" data-checklist>
        <li><label><input type="checkbox"> Conferi autorização, modelo, manual e compatibilidade.</label></li>
        <li><label><input type="checkbox"> Registrei o estado inicial e o resultado que espero.</label></li>
        <li><label><input type="checkbox"> Desliguei e desconectei as fontes de energia conforme o manual.</label></li>
        <li><label><input type="checkbox"> Preparei bancada, ferramentas e controle ESD.</label></li>
        <li><label><input type="checkbox"> Fotografei a posição inicial de cabos/peças sem expor dados.</label></li>
        <li><label><input type="checkbox"> Alterei apenas o componente planejado, sem forçar encaixes.</label></li>
        <li><label><input type="checkbox"> Recoloquei proteções, tampas e parafusos antes de energizar.</label></li>
        <li><label><input type="checkbox"> Validei inicialização, reconhecimento e função relacionada.</label></li>
      </ul>
      <p class="check-progress" data-check-progress></p>
    </div>
    <div class="ok-box compact"><strong>Alternativa inclusiva</strong><p>Sem hardware disponível ou quando a atividade física não for adequada, analise fotos do estado inicial/final, identifique riscos e produza o plano de intervenção e validação. O objetivo central é o raciocínio seguro.</p></div>

    <h3>Analisar: o que um resultado demonstra?</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Resultado</th><th>Conclusão permitida</th><th>Próximo passo</th></tr></thead>
      <tbody>
        <tr><td>RAM reconhecida na capacidade esperada</td><td>O firmware/sistema reconheceu a configuração atual.</td><td>Validar estabilidade e a carga que motivou a troca.</td></tr>
        <tr><td>Equipamento não liga após a intervenção</td><td>A mudança ou algo movimentado pode estar relacionado; não prova peça defeituosa.</td><td>Desenergizar, comparar com fotos/manual e revisar uma variável.</td></tr>
        <tr><td>Lentidão permanece</td><td>A expansão não resolveu o sintoma observado nessa condição.</td><td>Reavaliar evidências e outras hipóteses; não trocar peças em sequência.</td></tr>
      </tbody>
    </table></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Segurança aplicada</span><h3>Antes de energizar</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Tampas, proteções, parafusos e conexões precisam voltar ao estado definido pelo fabricante antes de energizar."><p>O módulo encaixou. Qual é a ação correta?</p><label><input type="radio" name="q03a" value="a"> Ligar imediatamente com o gabinete aberto para ganhar tempo.</label><label><input type="radio" name="q03a" value="b"> Conferir a montagem, recolocar proteções e então energizar conforme o manual.</label><label><input type="radio" name="q03a" value="c"> Tocar nos contatos para verificar se estão firmes.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Abertura de fonte foge do escopo e envolve risco elétrico; encaminhar é a decisão correta."><p>A fonte apresenta estalos. O que fazer?</p><label><input type="radio" name="q03b" value="a"> Abrir e procurar capacitor estufado.</label><label><input type="radio" name="q03b" value="b"> Continuar usando até confirmar.</label><label><input type="radio" name="q03b" value="c"> Desenergizar com segurança, documentar e encaminhar para procedimento especializado.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Intervenção segura combina <strong>manual do modelo, desenergização, controle ESD, manuseio correto, uma variável por vez e validação</strong>. Velocidade nunca compensa perda de dados, dano ou risco pessoal.</p></div>
    <div class="bridge-box"><strong>Encerramento e nova necessidade</strong><p>A SEC-02 reconheceu a RAM e repetiu a carga do chamado sem falha no período testado; o resultado e seu limite encerram o Chamado 014. Separadamente, a escola abre a <strong>Ordem de Serviço 006</strong>: padronizar a estação em um SSD novo, mantendo o disco antigo como contingência. Isso exige compreender firmware, boot e mídia sem tratar formatação como diagnóstico.</p></div>

    <details class="sources-box"><summary>Referência de segurança</summary><ul><li><a href="https://www.dell.com/support/kbdoc/en-us/000175301/safety-precautions-while-replacing-components-in-dell-device" target="_blank" rel="noopener">Dell — precauções ao substituir componentes</a></li></ul></details>
  `
});
