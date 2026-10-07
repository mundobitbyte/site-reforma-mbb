window.infraestruturaLessons = Array.isArray(window.infraestruturaLessons) ? window.infraestruturaLessons : [];

window.infraestruturaLessons.push({
  id: 'firmware-boot-midia',
  number: '04',
  unit: 'Instalar · Preparar com segurança',
  menuTitle: 'UEFI, boot e mídia',
  technicalTitle: 'firmware • UEFI • POST • boot • Secure Boot • TPM • GPT • mídia oficial',
  title: 'Como o computador encontra um sistema para iniciar?',
  objective: 'Observar firmware e boot, preparar mídia oficial de instalação e escolher o dispositivo de inicialização sem alterar proteções ou apagar mídias por engano.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Ordem de Serviço 006 · Padronização da SEC-02</span>
      <h2>O SSD novo está vazio; o disco antigo permanece preservado como contingência.</h2>
      <p>A escola autorizou uma instalação padronizada como trabalho planejado, não como tentativa de corrigir o Chamado 014. Ao preparar a SEC-02, um integrante encontra um pendrive sem etiqueta e a dica “desative o Secure Boot que funciona”. Isso cria duas perguntas: <strong>podemos confiar na mídia e sabemos o efeito de alterar o firmware?</strong></p>
    </div>

    <h3>Entender: a sequência antes da área de trabalho</h3>
    <div class="process-flow" aria-label="Fluxo simplificado de inicialização">
      <div><strong>Energia</strong><span>hardware recebe alimentação</span></div>
      <div><strong>Firmware UEFI</strong><span>inicializa e verifica componentes</span></div>
      <div><strong>Dispositivo de boot</strong><span>é escolhido pela ordem/menu</span></div>
      <div><strong>Gerenciador de boot</strong><span>localiza e carrega o sistema</span></div>
      <div><strong>Sistema operacional</strong><span>assume recursos e serviços</span></div>
    </div>
    <p>O desenho é propositalmente simplificado. Se o firmware não encontra um dispositivo inicializável, o problema ocorre <strong>antes</strong> do Windows carregar; reinstalar um aplicativo não teria relação com o sintoma.</p>

    <div class="comparison-grid three">
      <article><strong>UEFI</strong><p>Firmware moderno que inicializa o equipamento e oferece serviços de boot. Menus e teclas variam por fabricante.</p></article>
      <article><strong>GPT</strong><p>Esquema de particionamento usado no fluxo moderno UEFI do Windows. Não é um sistema de arquivos.</p></article>
      <article><strong>Secure Boot</strong><p>Recurso que ajuda o firmware a aceitar componentes de inicialização confiáveis/assinados. Não é “modo de segurança”.</p></article>
    </div>
    <div class="note-box compact"><strong>TPM e Secure Boot têm papéis diferentes.</strong><p>O TPM oferece funções de segurança baseadas em hardware; o Secure Boot protege a cadeia de inicialização. Ambos integram os requisitos do Windows 11, mas um não substitui o outro.</p></div>

    <section class="visual-lab" aria-labelledby="uefi-visual-title">
      <div class="visual-lab-header">
        <span class="visual-kicker">Missão visual · localizar e decidir</span>
        <h4 id="uefi-visual-title">Qual opção inicia a mídia uma vez sem mudar a ordem permanente?</h4>
        <p>Abaixo há uma <strong>representação didática</strong>. Cores, nomes e posição variam por fabricante; os estados técnicos são o que você deve reconhecer.</p>
      </div>
      <div class="visual-body">
        <span class="representation-badge">Representação didática — não é captura de uma UEFI real</span>
        <div class="ui-representation" role="img" aria-label="Representação de firmware UEFI com modo UEFI, Secure Boot habilitado, TPM 2.0 disponível e menu de boot temporário">
          <div class="ui-topbar"><span>Configuração do firmware</span><span class="window-dots" aria-hidden="true"><span></span><span></span><span></span></span></div>
          <div class="firmware-layout">
            <div class="firmware-nav"><span>Informações</span><span>Segurança</span><span>Inicialização</span><span class="active">Menu de boot único</span><span>Sair sem salvar</span></div>
            <div class="firmware-panel">
              <h4>Estado observado</h4>
              <div class="setting-row"><span>Modo de inicialização</span><span>UEFI</span></div>
              <div class="setting-row"><span>Secure Boot</span><span>Habilitado</span></div>
              <div class="setting-row"><span>TPM</span><span>2.0 disponível</span></div>
              <div class="boot-list"><strong>Escolher apenas para esta inicialização</strong><div class="boot-device"><b>1</b>Windows Boot Manager — SSD interno</div><div class="boot-device"><b>2</b>UEFI: USB MBB-W11 — pendrive validado</div></div>
            </div>
          </div>
        </div>
        <ol class="observation-prompts"><li><strong>Localize</strong>Quais três estados devem entrar no registro antes de qualquer mudança?</li><li><strong>Preveja</strong>O que deve acontecer ao escolher a opção 2 somente desta vez?</li><li><strong>Decida</strong>Há alguma evidência nesta tela que justifique desativar Secure Boot ou TPM?</li></ol>
        <button class="action-button" type="button" data-reveal-answer="#uefi-evidence" aria-expanded="false">Conferir leitura da evidência</button>
        <div id="uefi-evidence" class="ok-box compact" hidden><strong>Leitura defensável</strong><p>Registre UEFI, Secure Boot habilitado e TPM 2.0 disponível. A opção 2 deve iniciar a mídia validada uma única vez. A tela não apresenta falha que justifique desativar proteções.</p></div>
      </div>
    </section>

    <h3>Experimentar: observar sem modificar</h3>
    <div class="task-box">
      <ol>
        <li>no Windows, abra <strong>Informações do Sistema</strong> e registre “Modo da BIOS” e “Estado da Inicialização Segura”;</li>
        <li>compare fabricante, modelo e versão/data do firmware com o inventário anexado à OS 006;</li>
        <li>consulte o manual oficial do modelo para identificar a tecla do <strong>menu de boot temporário</strong> e a tecla de configuração;</li>
        <li>não salve mudanças: compare o que aparece com o registro do sistema e saia sem alterar.</li>
      </ol>
    </div>
    <div class="danger-box"><strong>Firmware não é lugar para tentativa aleatória.</strong><p>Alterações em modo UEFI/Legacy, Secure Boot, armazenamento ou chaves podem impedir a inicialização e acionar recuperação do BitLocker. Antes de qualquer mudança autorizada, registre o estado e confirme a chave de recuperação quando a criptografia estiver ativa.</p></div>

    <h3>Preparar a mídia oficial</h3>
    <p>Para a nova instalação da <strong>SEC-02</strong>, a plataforma principal é o <strong>Windows 11</strong>. O Windows 10 encerrou o suporte regular em 14 de outubro de 2025; por isso não é a base de uma instalação nova em 2026.</p>
    <div class="task-box">
      <strong>Em um computador confiável, com Internet e permissão</strong>
      <ol>
        <li>acesse a página oficial da Microsoft para criar mídia de instalação;</li>
        <li>baixe a ferramenta de criação de mídia do Windows 11;</li>
        <li>conecte um pendrive destinado ao laboratório e confirme sua identificação/capacidade;</li>
        <li>leia a tela que informa que o conteúdo do pendrive será removido;</li>
        <li>selecione somente a mídia conferida e aguarde a conclusão oficial;</li>
        <li>etiquete: sistema, arquitetura, data de criação e responsável.</li>
      </ol>
    </div>
    <div class="danger-box compact"><strong>O pendrive será apagado.</strong><p>Não prossiga pela letra da unidade apenas. Confira rótulo, capacidade e conteúdo; desconecte outras mídias removíveis que possam ser confundidas.</p></div>

    <h3>Inicializar sem alterar permanentemente o que não precisa</h3>
    <p>Quando o equipamento oferece menu de boot único, prefira-o para escolher o pendrive apenas nesta inicialização. Alterar a ordem permanente cria uma mudança desnecessária e pode fazer a máquina tentar iniciar por mídias futuras.</p>
    <div class="table-wrap"><table>
      <thead><tr><th>Sintoma</th><th>Hipótese inicial</th><th>Teste seguro</th></tr></thead>
      <tbody>
        <tr><td>Pendrive não aparece no menu</td><td>Mídia, porta, criação ou compatibilidade</td><td>Confirmar mídia em computador autorizado, outra porta e manual; não desativar segurança por impulso.</td></tr>
        <tr><td>SSD vazio aparece, mas não inicia</td><td>Comportamento esperado</td><td>Selecionar a mídia oficial de instalação no menu temporário.</td></tr>
        <tr><td>Pedido de chave BitLocker após mudança</td><td>Proteção reagiu à alteração de boot/firmware</td><td>Não improvisar; usar a chave institucional e revisar a mudança autorizada.</td></tr>
      </tbody>
    </table></div>

    <div class="state-comparison" aria-label="Antes, intervenção, depois e interpretação do teste de boot">
      <div class="state-step"><strong>Antes</strong><span>SSD vazio; firmware em UEFI; mídia validada presente.</span></div>
      <div class="state-step"><strong>Intervenção</strong><span>Selecionar UEFI: USB no menu temporário.</span></div>
      <div class="state-step"><strong>Depois</strong><span>O instalador oficial aparece sem mudança permanente na ordem.</span></div>
      <div class="state-step"><strong>O que prova?</strong><span>A mídia iniciou neste equipamento. Ainda não prova que o SSD-alvo foi identificado.</span></div>
    </div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Decisão no firmware</span><h3>A mídia não apareceu</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Desativar proteções sem compreender a causa amplia o risco. Primeiro valide mídia, porta, modo e instruções do modelo."><p>Qual é o próximo passo?</p><label><input type="radio" name="q04a" value="a"> Desativar Secure Boot e TPM imediatamente.</label><label><input type="radio" name="q04a" value="b"> Registrar o estado e verificar mídia, porta e orientação oficial do equipamento.</label><label><input type="radio" name="q04a" value="c"> Apagar todas as partições do SSD.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O menu temporário atende a necessidade atual sem introduzir uma alteração permanente desnecessária."><p>Para iniciar uma única vez pelo pendrive, o que é preferível?</p><label><input type="radio" name="q04b" value="a"> Alterar permanentemente a ordem de boot.</label><label><input type="radio" name="q04b" value="b"> Remover o SSD.</label><label><input type="radio" name="q04b" value="c"> Usar o menu de boot temporário, quando disponível.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Firmware prepara a máquina; boot escolhe de onde iniciar; GPT organiza partições; Secure Boot protege a cadeia de inicialização. <strong>Mídia oficial, estado registrado e mudança mínima</strong> reduzem risco.</p></div>
    <div class="bridge-box"><strong>A OS 006 continua</strong><p>A equipe etiquetou a mídia oficial e anexou o estado de UEFI, Secure Boot e TPM à ordem de serviço. Agora precisa usar o mapa de armazenamento da SEC-02 para instalar no SSD novo sem alterar o disco antigo de contingência.</p></div>

    <details class="sources-box"><summary>Documentação oficial atual</summary><ul>
      <li><a href="https://support.microsoft.com/pt-br/windows/deployment/install-upgrade/create-installation-media-for-windows" target="_blank" rel="noopener">Microsoft — criar mídia de instalação do Windows</a></li>
      <li><a href="https://support.microsoft.com/pt-br/windows/experience/compatibility/windows-11-system-requirements" target="_blank" rel="noopener">Microsoft — requisitos do Windows 11</a></li>
      <li><a href="https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/configure-uefigpt-based-hard-drive-partitions?view=windows-11" target="_blank" rel="noopener">Microsoft Learn — partições UEFI/GPT</a></li>
    </ul></details>
  `
});

window.infraestruturaLessons.push({
  id: 'instalacao-particionamento',
  number: '05',
  unit: 'Instalar · Preparar com segurança',
  menuTitle: 'Instalação limpa',
  technicalTitle: 'backup • edição • licença • unidade • partição • NTFS • instalação • baseline',
  title: 'Como instalar sem apagar o disco errado?',
  objective: 'Planejar e executar uma instalação limpa de Windows 11 em laboratório, distinguindo unidade, partição e sistema de arquivos e validando estados antes e depois.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Ordem de Serviço 006 · Instalação da SEC-02</span>
      <h2>O instalador mostra duas unidades. Uma é o SSD novo; a outra guarda a cópia de contingência.</h2>
      <p>A ficha da OS 006 traz capacidade, modelo e finalidade de cada disco, além da confirmação da cópia feita pela coordenadora. Mesmo assim, os botões “Excluir” e “Formatar” não sabem qual disco você pretendia usar. <strong>A diferença entre um procedimento profissional e uma perda de dados é conferir o alvo com o registro antes da ação.</strong></p>
    </div>

    <div class="danger-box"><strong>Laboratório autorizado somente</strong><p>Use apenas máquina ou VM de laboratório autorizada, preparada para esta prática. Não pratique instalação limpa no computador pessoal, de trabalho ou em equipamento que contenha dados não verificados. Excluir partição e formatar são ações destrutivas.</p></div>

    <h3>Entender: três níveis que não devem ser confundidos</h3>
    <div class="comparison-grid three">
      <article><strong>Unidade física/virtual</strong><p>O dispositivo de armazenamento, como SSD de 512 GB ou disco virtual de 80 GB.</p></article>
      <article><strong>Partição</strong><p>Uma região definida dentro da unidade. Uma unidade pode conter várias partições.</p></article>
      <article><strong>Sistema de arquivos</strong><p>Estrutura que organiza arquivos na partição, como NTFS. Formatar cria essa estrutura e remove o acesso normal ao conteúdo anterior.</p></article>
    </div>

    <h3>Preparar: autorização antes do instalador</h3>
    <ul class="checklist" data-checklist>
      <li><label><input type="checkbox"> Confirmei que o equipamento atende aos requisitos do Windows 11.</label></li>
      <li><label><input type="checkbox"> Registrei fabricante, modelo, patrimônio, firmware e armazenamento.</label></li>
      <li><label><input type="checkbox"> Confirmei edição/licença e política de contas da organização.</label></li>
      <li><label><input type="checkbox"> Os dados necessários foram copiados e uma amostra foi aberta no destino.</label></li>
      <li><label><input type="checkbox"> A chave de recuperação BitLocker foi confirmada quando aplicável.</label></li>
      <li><label><input type="checkbox"> Tenho mídia oficial, energia estável, rede autorizada e drivers essenciais se necessários.</label></li>
      <li><label><input type="checkbox"> Identifiquei o disco-alvo por capacidade, modelo e documentação — não apenas por “Disco 0”.</label></li>
      <li><label><input type="checkbox"> Defini o resultado esperado e a forma de recuperar/encaminhar se falhar.</label></li>
    </ul>
    <p class="check-progress" data-check-progress></p>

    <h3>Experimentar: ler a tela antes do clique destrutivo</h3>
    <section class="visual-lab" aria-labelledby="disk-visual-title">
      <div class="visual-lab-header">
        <span class="visual-kicker">Missão visual · seleção de armazenamento</span>
        <h4 id="disk-visual-title">Qual unidade NÃO deve ser alterada?</h4>
        <p>A aparência muda entre versões. Esta representação simplifica a tela para treinar leitura de unidade, partição e espaço não alocado.</p>
      </div>
      <div class="visual-body">
        <span class="representation-badge">Representação didática — confirme a interface oficial no laboratório</span>
        <div class="ui-representation disk-screen" role="img" aria-label="Representação da seleção de armazenamento do instalador do Windows com duas unidades de mesma capacidade">
          <div class="ui-topbar"><span>Instalação do Windows 11 · selecionar local</span><span>Avançar</span></div>
          <div class="disk-toolbar">Duas unidades de 512 GB foram detectadas. A ficha informa: SSD novo vazio + SSD antigo com cópia de contingência.</div>
          <div class="disk-list">
            <div class="disk-row"><div class="disk-label"><strong>Unidade 0</strong><span>476,9 GB</span></div><div class="disk-partitions"><div class="partition system"><strong>Partição 1</strong><span>Sistema · 260 MB</span></div><div class="partition primary do-not-touch"><strong>Partição 2</strong><span>Primária · 476,6 GB</span></div></div></div>
            <div class="disk-row"><div class="disk-label"><strong>Unidade 1</strong><span>476,9 GB</span></div><div class="disk-partitions"><div class="partition unallocated"><strong>Espaço não alocado</strong><span>476,9 GB</span></div></div></div>
          </div>
          <div class="disk-actions"><span class="fake-button">Atualizar</span><span class="fake-button">Carregar driver</span><span class="fake-button danger">Excluir</span><span class="fake-button danger">Formatar</span><span class="fake-button">Avançar</span></div>
        </div>
        <ol class="observation-prompts">
          <li><strong>Observe</strong>Qual unidade já possui partições? Qual está inteiramente não alocada?</li>
          <li><strong>Localize o risco</strong>Quais botões podem remover acesso aos dados se o alvo estiver errado?</li>
          <li><strong>Decida</strong>A tela e a ficha bastam? Que evidência adicional deve existir antes de avançar?</li>
        </ol>
        <div class="visual-question"><strong>Sua decisão deve conter evidência e limite:</strong> “Preservarei a Unidade ___ porque ___. Usarei a Unidade ___ somente após confirmar ___.”</div>
        <button class="action-button" type="button" data-reveal-answer="#disk-evidence" aria-expanded="false">Conferir leitura da evidência</button>
        <div id="disk-evidence" class="ok-box compact" hidden><strong>Leitura possível, ainda não autorização</strong><p>A Unidade 0 já contém partições e coincide com a descrição do disco de contingência; portanto não deve ser alterada. A Unidade 1 parece o SSD novo vazio. Antes de avançar, confirme o mapa registrado fora do instalador — modelo/serial quando disponível, backup testado e autorização. “Disco 0” nunca significa automaticamente “disco correto”.</p></div>
      </div>
    </section>

    <h4>Conduza a instalação por estados verificáveis</h4>
    <div class="state-comparison" aria-label="Sequência de estados verificáveis da instalação">
      <div class="state-step"><strong>Mídia e intenção</strong><span>Origem oficial; idioma, teclado, edição e instalação limpa planejada.</span><small class="evidence-id">origem e intenção conferidas</small></div>
      <div class="state-step"><strong>Alvo e partições</strong><span>Unidade identificada; backup validado; apenas o SSD novo será alterado.</span><small class="evidence-id">alvo confirmado</small></div>
      <div class="state-step"><strong>Primeiro reinício</strong><span>O equipamento inicia pelo SSD; a mídia não reabre o instalador.</span><small class="evidence-id">boot confirmado</small></div>
      <div class="state-step"><strong>Configuração inicial</strong><span>Nome, conta, privacidade e responsável seguem a política da organização.</span><small class="evidence-id">configuração inicial conferida</small></div>
    </div>
    <div class="mbb-pause-question"><strong>Se o instalador não permite identificar o alvo com segurança, pare.</strong><p>Desconectar fisicamente uma unidade pode reduzir ambiguidade, mas somente se o manual, a autorização e a competência permitirem. Não improvise com dados institucionais.</p></div>

    <h3>Analisar: erros não autorizam atalhos</h3>
    <div class="evidence-grid">
      <article><strong>“Este computador não atende aos requisitos”</strong><p>Confirme modelo, CPU suportada, TPM 2.0, firmware UEFI, capacidade de Secure Boot, RAM e armazenamento. Não use contorno não suportado em estação de produção.</p></article>
      <article><strong>“Nenhuma unidade encontrada”</strong><p>Registre a mensagem e investigue firmware, conexão e driver de armazenamento específico. Não altere modos aleatoriamente: isso pode afetar o sistema anterior.</p></article>
      <article><strong>Volta sempre ao instalador</strong><p>A mídia pode continuar como primeira opção. Use o menu de boot ou remova-a no momento apropriado, preservando o estado planejado.</p></article>
      <article><strong>Partição desconhecida</strong><p>Não exclua. Descubra a função e relacione-a ao mapa do disco. “Parece desnecessária” não é evidência.</p></article>
    </div>

    <h3>Aplicar: primeiro baseline</h3>
    <div class="note-box compact"><p><strong>Complete o primeiro baseline da OS 006</strong> antes de instalar aplicações:</p><ul>
      <li>edição, versão e compilação do Windows;</li>
      <li>data da instalação e nome do equipamento;</li>
      <li>capacidade/partições do disco-alvo;</li>
      <li>conta inicial e política de privilégio, sem registrar senha;</li>
      <li>itens ainda pendentes: atualização, driver, ativação, testes e backup.</li>
    </ul></div>

    <div class="state-comparison" aria-label="Antes, intervenção, depois e limite da conclusão da instalação">
      <div class="state-step"><strong>Antes</strong><span>SSD novo vazio; cópia preservada em outra unidade.</span></div>
      <div class="state-step"><strong>Intervenção</strong><span>Windows 11 instalado somente no alvo confirmado.</span></div>
      <div class="state-step"><strong>Depois</strong><span>Primeiro boot pelo SSD e baseline inicial registrado.</span></div>
      <div class="state-step"><strong>O que prova?</strong><span>Instalação e boot funcionaram. Ainda faltam drivers, atualização e testes funcionais.</span></div>
    </div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Momento irreversível</span><h3>Há duas unidades de 512 GB</h3>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Capacidades iguais eliminam um identificador; sem modelo/serial/documentação suficientes, a decisão segura é parar e identificar."><p>Qual é a ação correta?</p><label><input type="radio" name="q05a" value="a"> Parar e obter outra evidência para identificar o disco-alvo.</label><label><input type="radio" name="q05a" value="b"> Escolher “Disco 0”, que sempre é o principal.</label><label><input type="radio" name="q05a" value="c"> Excluir partições das duas para evitar conflito.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A instalação é apenas uma hipótese de correção e tem alto custo; o método exige diagnóstico e preservação antes de recorrer a ela."><p>Formatar deve ser a primeira resposta a qualquer lentidão?</p><label><input type="radio" name="q05b" value="a"> Sim, porque elimina todos os defeitos.</label><label><input type="radio" name="q05b" value="b"> Não. É uma intervenção ampla, destrutiva e incapaz de corrigir várias causas físicas ou externas.</label><label><input type="radio" name="q05b" value="c"> Sim, se houver pendrive disponível.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Instalação limpa começa antes do instalador: <strong>requisitos, licença, backup testado, alvo identificado e recuperação planejada</strong>. Dentro do instalador, cada clique deve confirmar um estado conhecido.</p></div>
    <div class="bridge-box"><strong>A OS 006 continua</strong><p>O Windows iniciou no SSD correto e as quatro verificações da instalação foram anexadas. A entrega à secretaria ainda está bloqueada: áudio, atualizações, dispositivos e funções essenciais não foram validados contra o baseline.</p></div>

    <details class="sources-box"><summary>Documentação oficial atual</summary><ul>
      <li><a href="https://support.microsoft.com/pt-br/windows/deployment/install-upgrade/ways-to-install-windows-11" target="_blank" rel="noopener">Microsoft — maneiras de instalar o Windows 11</a></li>
      <li><a href="https://support.microsoft.com/pt-br/windows/experience/compatibility/windows-11-on-devices-that-don-t-meet-minimum-system-requirements" target="_blank" rel="noopener">Microsoft — Windows 11 em hardware sem requisitos mínimos</a></li>
    </ul></details>
  `
});

window.infraestruturaLessons.push({
  id: 'drivers-validacao',
  number: '06',
  unit: 'Instalar · Validar o resultado',
  menuTitle: 'Drivers e pós-instalação',
  technicalTitle: 'driver • Windows Update • fabricante • Device Manager • baseline • validação',
  title: 'A área de trabalho abriu. Como provar que a estação está pronta?',
  objective: 'Atualizar Windows e drivers por fontes confiáveis, verificar dispositivos essenciais e produzir um baseline pós-instalação que permita comparação futura.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Ordem de Serviço 006 · Validação da SEC-02</span>
      <h2>A tela funciona, mas o áudio não aparece e há um dispositivo desconhecido.</h2>
      <p>A coordenadora precisa de áudio para atendimentos e de USB para o leitor autorizado; por isso, “chegou à área de trabalho” não atende ao termo de entrega. Um site promete detectar todos os drivers, mas retiraria controle sobre origem, versão e reversão. <strong>Uma estação pronta é a que passou pelos testes definidos para o trabalho real.</strong></p>
    </div>

    <h3>Entender: driver liga o sistema ao dispositivo</h3>
    <div class="definition-box featured"><span class="term">Driver</span><p>É o software que permite ao sistema operacional controlar e usar um dispositivo específico. Um driver incorreto, antigo ou ausente pode impedir funções ou causar instabilidade.</p></div>
    <p>O caminho confiável começa no <strong>Windows Update</strong>. Quando ele não resolve, use a página de suporte do fabricante do computador ou do componente, sempre para o modelo e sistema corretos.</p>
    <div class="danger-box compact"><strong>Evite agregadores e “atualizadores universais”.</strong><p>Eles podem instalar pacote inadequado, adicionar software indesejado ou eliminar a rastreabilidade da origem.</p></div>

    <h3>Experimentar: sequência controlada</h3>
    <ol>
      <li>retome o baseline da instalação e registre versão do Windows e estado inicial do Gerenciador de Dispositivos;</li>
      <li>execute o Windows Update e reinicie quando solicitado;</li>
      <li>repita a verificação até não haver atualização pendente relevante;</li>
      <li>revise atualizações opcionais de driver conscientemente — “opcional” não significa “instalar tudo”;</li>
      <li>para item não resolvido, identifique hardware e busque suporte oficial do modelo;</li>
      <li>instale uma mudança por vez e registre versão/origem;</li>
      <li>teste a função relacionada antes de seguir.</li>
    </ol>
    <div class="note-box compact"><strong>BIOS/firmware exige necessidade clara.</strong><p>Não atualize apenas porque existe versão mais nova. Leia correções, requisitos, alimentação e procedimento do fabricante; uma interrupção pode impedir o boot.</p></div>

    <h3>Validar: matriz de funções essenciais</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Função</th><th>Teste observável</th><th>Evidência</th></tr></thead>
      <tbody>
        <tr><td>Armazenamento</td><td>Criar, salvar, reabrir e excluir um arquivo de teste na pasta autorizada</td><td>Operação concluída e espaço/capacidade coerentes.</td></tr>
        <tr><td>Rede</td><td>Confirmar conexão da organização e acesso a recurso permitido</td><td>Interface reconhecida e função de conexão verificada; falhas de caminho exigem investigação própria.</td></tr>
        <tr><td>Áudio</td><td>Reproduzir som de teste em volume seguro e verificar entrada quando necessária</td><td>Dispositivo correto selecionado e funcionamento observado.</td></tr>
        <tr><td>Vídeo</td><td>Confirmar resolução, escala e monitores previstos</td><td>Sem dispositivo desconhecido ou resolução genérica inadequada.</td></tr>
        <tr><td>USB/periféricos</td><td>Conectar dispositivo de teste autorizado</td><td>Reconhecimento e remoção segura quando aplicável.</td></tr>
        <tr><td>Atualização</td><td>Buscar novamente após reinício</td><td>Estado e horário registrados; pendências justificadas.</td></tr>
      </tbody>
    </table></div>

    <h3>Analisar: “sem ícone amarelo” é necessário, mas não suficiente</h3>
    <div class="evidence-grid">
      <article><strong>Dispositivo reconhecido</strong><p>O Gerenciador de Dispositivos não mostra alerta. Ainda é preciso testar a função real.</p></article>
      <article><strong>Função falha após driver</strong><p>Relacione horário e alteração, teste reversão quando disponível ou retorne ao pacote oficial anterior.</p></article>
      <article><strong>Atualização não aparece</strong><p>Registre edição, versão, conexão, código e horário. Não conclua “servidor fora do ar” sem evidência.</p></article>
      <article><strong>Driver do fabricante é mais antigo</strong><p>Versão menor não é automaticamente pior; pacotes OEM podem conter validações e customizações do modelo.</p></article>
    </div>

    <h3>Aplicar: baseline pós-instalação</h3>
    <div class="note-box compact"><p><strong>Feche o baseline da OS 006.</strong> O registro deve permitir comparar o estado futuro:</p><ul>
      <li>edição, versão e compilação do sistema;</li>
      <li>data/hora da última busca de atualização;</li>
      <li>drivers críticos: origem e versão quando houve intervenção manual;</li>
      <li>resultado de armazenamento, rede, áudio, vídeo e periféricos;</li>
      <li>itens pendentes, motivo, risco e responsável;</li>
      <li>ponto de retorno disponível para alterações relevantes.</li>
    </ul></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Fonte e evidência</span><h3>O áudio continua ausente</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A investigação deve identificar o dispositivo e usar Windows Update ou suporte oficial do modelo, com uma mudança por vez."><p>Qual ação é mais segura?</p><label><input type="radio" name="q06a" value="a"> Instalar um pacote de drivers encontrado em anúncio.</label><label><input type="radio" name="q06a" value="b"> Atualizar simultaneamente áudio, vídeo, chipset e firmware.</label><label><input type="radio" name="q06a" value="c"> Identificar o dispositivo, consultar fonte oficial e testar somente a alteração relacionada.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Ausência de alerta indica reconhecimento básico, mas a função precisa ser testada com resultado observável."><p>O Gerenciador de Dispositivos não mostra alertas. A validação terminou?</p><label><input type="radio" name="q06b" value="a"> Sim, isso prova todas as funções.</label><label><input type="radio" name="q06b" value="b"> Não. Ainda é preciso testar as funções previstas.</label><label><input type="radio" name="q06b" value="c"> Sim, se o computador reiniciou.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Pós-instalação profissional segue uma cadeia: <strong>fonte confiável → uma mudança → teste da função → evidência → baseline</strong>. Iniciar não é o mesmo que estar pronto.</p></div>
    <div class="bridge-box"><strong>A entrega continua</strong><p>A SEC-02 está atualizada e suas funções foram validadas. Antes de devolvê-la, a equipe precisa traduzir as funções de duas atendentes, da coordenadora e do suporte técnico em contas e permissões — sem conceder administração a todos.</p></div>

    <details class="sources-box"><summary>Documentação oficial atual</summary><ul>
      <li><a href="https://support.microsoft.com/pt-br/windows/hardware/drivers/automatically-get-recommended-and-updated-hardware-drivers" target="_blank" rel="noopener">Microsoft — drivers recomendados e atualizados</a></li>
      <li><a href="https://support.microsoft.com/pt-br/windows/atualizar-drivers-por-meio-do-gerenciador-de-dispositivos-no-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6" target="_blank" rel="noopener">Microsoft — atualizar drivers pelo Gerenciador de Dispositivos</a></li>
    </ul></details>
  `
});
