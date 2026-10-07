window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "sistema-operacional",
  number: "09",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Sistema Operacional",
  technicalTitle: "SO • kernel • processos • arquivos • GUI • CLI • firmware • BIOS • UEFI • CMOS • POST • Secure Boot • boot",
  title: "Quem organiza os programas e o hardware?",
  objective: "Compreender o sistema operacional como gerente de recursos e acompanhar com segurança o que acontece desde o firmware/Setup até o carregamento do sistema.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">O gerente do sistema</span>
      <h2>Chrome, música, cópia de arquivos, Wi-Fi e antivírus podem trabalhar ao mesmo tempo.</h2>
      <p>Todos disputam CPU, RAM, armazenamento e dispositivos. <strong>O sistema operacional organiza esse compartilhamento e oferece serviços comuns aos programas.</strong></p>
    </div>

    <div class="definition-box featured"><span class="term">Sistema Operacional — SO</span><p><strong>É o conjunto de software fundamental que administra recursos do computador e fornece serviços e interfaces para programas e usuários.</strong></p></div>
    <p>Windows, Linux, macOS, Android e iOS resolvem problemas semelhantes, embora utilizem arquiteturas, ferramentas e interfaces diferentes.</p>

    <h3>O SO não é apenas a área de trabalho</h3>
    <div class="comparison-grid four">
      <article><strong>CPU</strong><p>distribui tempo de processamento entre tarefas.</p></article>
      <article><strong>Memória</strong><p>organiza e protege espaços usados pelos processos.</p></article>
      <article><strong>Arquivos</strong><p>organiza dados em sistemas de arquivos e controla acesso.</p></article>
      <article><strong>Dispositivos</strong><p>coordena entrada/saída por meio de drivers e serviços.</p></article>
    </div>
    <p>Menus, ícones e janelas são apenas a parte visível de uma infraestrutura muito maior.</p>

    <h3>Kernel: o núcleo</h3>
    <div class="definition-box"><span class="term">Kernel</span><p>É a parte central do sistema operacional responsável por controlar recursos fundamentais e intermediar operações como processos, memória, dispositivos e entrada/saída.</p></div>
    <div class="note-box compact"><strong>Linux: uma precisão útil</strong><p>Tecnicamente, <strong>Linux é o kernel</strong>. Distribuições como Ubuntu, Debian e Fedora combinam esse kernel com bibliotecas, utilitários e outros softwares. No uso cotidiano, “Linux” também é usado para a família completa de sistemas.</p></div>

    <h3>Processos e escalonamento</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Processo</span><p>É uma instância de programa em execução, com memória, estado e recursos associados.</p></div>
      <div class="definition-box"><span class="term">Escalonador — scheduler</span><p>É o mecanismo que decide quais tarefas receberão tempo de CPU e em que momento.</p></div>
    </div>
    <p>Num único núcleo, o sistema pode alternar rapidamente entre tarefas. Com vários núcleos, algumas tarefas podem realmente executar em paralelo. <strong>Multitarefa não cria recursos infinitos.</strong></p>

    <h3>Memória precisa ser protegida</h3>
    <p>Seria perigoso permitir que qualquer programa escrevesse em qualquer região da RAM. O SO, com apoio do hardware, organiza espaços de endereçamento e permissões para reduzir interferências entre processos. A memória virtual estudada na Aula 07 faz parte desse gerenciamento.</p>

    <h3>Entrar no sistema e poder alterar tudo são perguntas diferentes</h3>
    <div class="hero-box">
      <span class="eyebrow">Situação</span>
      <p>Um aluno entra no sistema escolar com sua própria conta. O sistema reconhece a identidade apresentada e permite consultar suas informações. Mas, se ele tentar alterar a nota de outro aluno, a operação deve ser recusada. <strong>Reconhecer quem entrou e decidir o que essa pessoa pode fazer são dois problemas diferentes.</strong></p>
    </div>
    <div class="comparison-grid"><article><strong>Autenticação</strong><p>Responde: <em>quem é você?</em> Pode usar senha, biometria, token ou outros fatores.</p></article><article><strong>Autorização</strong><p>Responde: <em>o que você pode fazer?</em> Estar autenticado não significa poder alterar qualquer recurso.</p></article></div>
    <div class="note-box compact"><strong>Menor privilégio</strong><p>Uma conta ou programa deve possuir apenas as permissões necessárias para realizar sua função. Privilégios administrativos ampliam o impacto de erros e ataques.</p></div>

    <h3>Arquivos e sistema de arquivos</h3>
    <div class="definition-box"><span class="term">Sistema de arquivos</span><p>É a estrutura usada para organizar, identificar e controlar arquivos e diretórios em um dispositivo de armazenamento.</p></div>
    <p>NTFS, exFAT, ext4 e APFS são exemplos. <strong>O SSD fornece armazenamento físico; o sistema de arquivos fornece organização lógica.</strong></p>

    <h3>GUI e CLI</h3>
    <div class="comparison-grid"><article><strong>GUI — interface gráfica</strong><p>Usa janelas, ícones, menus, botões e outros elementos visuais.</p></article><article><strong>CLI — linha de comando</strong><p>Permite solicitar operações digitando comandos. É muito usada em administração, automação, programação e diagnóstico.</p></article></div>
    <p>Não existe uma vencedora universal. <strong>A interface adequada depende da tarefa.</strong></p>

    <h3>Mas quem começa antes do sistema operacional?</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/InsydeH2O_UEFI_security_screenshot.jpg/960px-InsydeH2O_UEFI_security_screenshot.jpg"
          srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/InsydeH2O_UEFI_security_screenshot.jpg/330px-InsydeH2O_UEFI_security_screenshot.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/InsydeH2O_UEFI_security_screenshot.jpg/960px-InsydeH2O_UEFI_security_screenshot.jpg 960w"
          sizes="(max-width:700px) 92vw, 520px" alt="Tela de configuração de uma implementação de firmware compatível com UEFI" width="960" height="539" loading="lazy" decoding="async">
        <figcaption><strong>Tela de configuração do firmware de um PC moderno.</strong> Ela aparece antes de Windows, Linux ou outro sistema operacional ser carregado.<span class="credit">Captura por VulcanSphere; software InsydeH2O, Insyde Software · screenshot classificado no Wikimedia Commons como livre por inelegibilidade a copyright.</span></figcaption>
      </figure>
      <div>
        <p>Ao pressionar o botão de ligar, o sistema operacional ainda não está executando. Primeiro, o <strong>firmware da plataforma</strong> inicializa recursos básicos e prepara o ambiente de boot.</p>
        <div class="definition-box"><span class="term">UEFI</span><p><strong>UEFI é uma especificação que define uma interface padronizada entre o firmware da plataforma e o sistema operacional ou seu carregador.</strong> Ela inclui estruturas e serviços usados no ambiente de pré-inicialização.</p></div>
      </div>
    </div>
    <div class="note-box compact"><strong>UEFI não é simplesmente outro nome para “firmware”.</strong><p>O computador executa uma implementação de firmware que pode ser compatível com a especificação UEFI. No cotidiano, expressões como “entrar na UEFI” ou “entrar na BIOS” costumam se referir à tela de configuração desse firmware.</p></div>
    <p>PCs antigos utilizavam principalmente a <strong>BIOS tradicional</strong>. Em computadores modernos, implementações compatíveis com UEFI substituíram amplamente esse modelo.</p>

    <section class="hero-box">
      <span class="eyebrow">Especial · BIOS/UEFI Setup</span>
      <h2>O que aquela tela antes do Windows realmente controla?</h2>
      <p>O Setup não é “outro sistema operacional”. É uma interface de configuração fornecida pelo firmware da plataforma. As opções variam muito entre fabricantes, mas algumas ideias reaparecem.</p>
    </section>

    <h3>BIOS, UEFI, Setup e CMOS: quatro palavras que viraram sinônimos no uso cotidiano</h3>
    <div class="comparison-grid four">
      <article><strong>BIOS</strong><p>Nome histórico do firmware usado nos PCs clássicos para inicializar hardware e iniciar o carregamento do sistema.</p></article>
      <article><strong>UEFI</strong><p>Especificação moderna que define serviços e interfaces para o ambiente de firmware e inicialização.</p></article>
      <article><strong>Setup</strong><p>Utilitário/tela usada para consultar e alterar configurações oferecidas pelo firmware.</p></article>
      <article><strong>CMOS</strong><p>Tecnologia de circuitos e, historicamente nos PCs, nome associado à pequena memória alimentada por bateria usada para guardar certas configurações e ao relógio da máquina.</p></article>
    </div>
    <div class="note-box compact"><strong>“CMOS Setup” é um nome histórico útil, mas não descreve sozinho um PC atual.</strong><p>Em plataformas modernas, muitas variáveis de configuração do firmware ficam em <strong>memória não volátil/NVRAM</strong>. A bateria tipo moeda continua normalmente ligada ao relógio de tempo real e à manutenção de estado da plataforma, mas não devemos ensinar que “todas as configurações da UEFI ficam numa memória CMOS alimentada pela bateria”.</p></div>

    <h3>POST: o computador ainda está se preparando</h3>
    <div class="definition-box"><span class="term">POST — Power-On Self-Test</span><p>É o nome tradicional dado a verificações e testes iniciais realizados durante a partida para detectar e sinalizar problemas básicos antes de continuar a inicialização.</p></div>
    <p>Em PCs modernos, a inicialização da plataforma é mais complexa e varia conforme o firmware. Ainda assim, a ideia permanece útil: <strong>antes de carregar o sistema operacional, o computador precisa inicializar e verificar recursos essenciais.</strong></p>
    <div class="note-box compact"><strong>Bipes, LEDs ou códigos na placa podem ser pistas.</strong><p>Quando o firmware detecta uma falha muito cedo, talvez nem exista vídeo disponível. Alguns equipamentos usam padrões sonoros, LEDs ou códigos de diagnóstico — a interpretação correta depende do manual do fabricante.</p></div>

    <h3>O que normalmente encontramos no Setup?</h3>
    <div class="comparison-grid four">
      <article><strong>Informações de hardware</strong><p>modelo da CPU, quantidade de RAM, unidades detectadas, temperaturas e ventoinhas quando suportado.</p></article>
      <article><strong>Inicialização</strong><p>ordem de boot, entradas UEFI e seleção de dispositivos que podem iniciar o sistema.</p></article>
      <article><strong>Recursos da CPU/plataforma</strong><p>virtualização, recursos integrados, modos de energia e outras opções dependentes do hardware.</p></article>
      <article><strong>Segurança</strong><p>Secure Boot, TPM e senhas de firmware podem aparecer conforme a implementação.</p></article>
    </div>

    <h3>Ordem de boot: de onde o computador tenta iniciar?</h3>
    <p>Se existem SSD interno, pendrive e outras opções inicializáveis, o firmware precisa decidir qual caminho tentar. A <strong>ordem de boot</strong> organiza essa prioridade.</p>
    <div class="example-box compact"><strong>Uso legítimo</strong><p>Durante a instalação de um sistema operacional, pode ser necessário iniciar temporariamente por uma mídia USB. Depois, o SSD interno volta a ser a opção normal.</p></div>
    <div class="danger-box compact"><strong>Alterar a ordem sem entender pode produzir “não inicia”.</strong><p>O computador pode simplesmente estar tentando usar um dispositivo que não possui um sistema inicializável. Antes de mudar, registre como estava.</p></div>

    <h3>Secure Boot e TPM não são a mesma coisa</h3>
    <div class="comparison-grid">
      <article><strong>Secure Boot</strong><p>É um recurso do ecossistema UEFI que usa verificação criptográfica para permitir componentes de inicialização autorizados segundo as chaves e políticas configuradas, ajudando a proteger a cadeia de boot.</p></article>
      <article><strong>TPM</strong><p>É um recurso de segurança, em hardware dedicado ou implementação equivalente da plataforma, usado para proteger chaves e registrar medições/estado de segurança. Ele pode trabalhar junto com mecanismos do sistema, mas não é “o Secure Boot”.</p></article>
    </div>
    <div class="note-box compact"><strong>Desativar segurança “para ver se funciona” não deve ser o primeiro passo.</strong><p>Secure Boot e TPM podem estar ligados a recursos de proteção, criptografia e requisitos do sistema. Qualquer mudança precisa ter objetivo claro, documentação e possibilidade de retorno.</p></div>

    <h3>Virtualização pode estar habilitada no firmware</h3>
    <p>Recursos de virtualização assistida por hardware usados por hipervisores e sistemas como máquinas virtuais podem depender de opções da CPU/plataforma expostas no Setup. O nome varia entre fabricantes.</p>
    <div class="note-box compact"><strong>Ativar um recurso não cria uma VM sozinho.</strong><p>O firmware apenas disponibiliza capacidades do hardware; depois um hipervisor ou outro software precisa utilizá-las.</p></div>

    <h3>Atualizar o firmware não é como atualizar um aplicativo comum</h3>
    <p>Fabricantes podem publicar atualizações para corrigir falhas, melhorar compatibilidade ou segurança. Porém uma gravação de firmware interrompida ou realizada com arquivo incorreto pode impedir a inicialização do equipamento.</p>
    <div class="danger-box"><strong>Regra de segurança</strong><p>Atualize firmware apenas com procedimento e arquivo fornecidos pelo fabricante para o modelo correto, com alimentação confiável e motivo conhecido. <strong>Não faça atualização de BIOS/UEFI como experiência de sala de aula.</strong></p></div>

    <h3>Laboratório seguro: conheça o Setup sem alterar nada</h3>
    <div class="mbb-pause-question"><strong>Missão de observação</strong><p>Com o manual do fabricante, descubra a tecla ou procedimento para abrir o Setup. Entre apenas se puder fazer isso com segurança e <strong>não salve alterações</strong>. Tente localizar: modelo da CPU, memória instalada, armazenamento detectado, ordem de boot, estado de Secure Boot e opção de virtualização. Os nomes podem variar.</p></div>
    <div class="ok-box"><strong>Saia sem salvar.</strong><p>O objetivo é aprender a ler a tela. Fotografar ou anotar antes de qualquer mudança é uma boa prática de diagnóstico e administração.</p></div>

    <h3>Boot — a sequência de inicialização</h3>
    <p>Em muitos sistemas, o firmware localiza uma opção de inicialização e transfere o controle a software que conduz ao carregamento do sistema operacional. O desenho abaixo é uma simplificação útil, não uma exigência de que toda plataforma possua exatamente as mesmas etapas separadas.</p>
    <div class="representation-flow" aria-label="Inicialização simplificada">
      <div><strong>Energia + firmware</strong><span>inicializa e verifica recursos</span></div><span class="flow-arrow">→</span>
      <div><strong>Opção de boot</strong><span>firmware localiza o caminho</span></div><span class="flow-arrow">→</span>
      <div><strong>Gerenciador / bootloader</strong><span>conduz o carregamento</span></div><span class="flow-arrow">→</span>
      <div><strong>Kernel + serviços</strong><span>sistema assume a máquina</span></div>
    </div>
    <div class="definition-box compact"><span class="term">Bootloader</span><p>É um programa responsável por iniciar o carregamento de um sistema operacional. GRUB é um exemplo conhecido no ecossistema Linux.</p></div>

    <h3>Nem tudo que executa possui uma janela</h3>
    <div class="definition-box"><span class="term">Serviço</span><p>É um processo que executa funções em segundo plano, como rede, impressão, atualizações, sincronização ou outras tarefas do sistema. Em sistemas Unix/Linux também aparece o termo <em>daemon</em>.</p></div>

    <h3>A camada comum entre programas e hardware</h3>
    <div class="concept-flow"><div><strong>Aplicativos</strong><span>pedem serviços</span></div><span class="flow-arrow">→</span><div><strong>Sistema Operacional</strong><span>administra e protege</span></div><span class="flow-arrow">→</span><div><strong>Hardware</strong><span>executa operações físicas</span></div></div>
    <p>Em sistemas embarcados muito simples, um programa pode controlar hardware diretamente. Em um PC moderno, o SO fornece uma base comum para que muitos programas convivam de forma organizada.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>O que existe por baixo da interface?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Kernel é a parte central que administra recursos fundamentais do sistema operacional."><p>O que é kernel?</p><label><input type="radio" name="q9a" value="a"> Apenas a interface gráfica do sistema.</label><label><input type="radio" name="q9a" value="b"> A parte central do SO ligada à administração de recursos fundamentais.</label><label><input type="radio" name="q9a" value="c"> Um tipo de SSD.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Autenticação verifica identidade; autorização determina ações permitidas."><p>O aluno conseguiu entrar no sistema, mas não pode alterar notas de colegas. Qual distinção explica isso?</p><label><input type="radio" name="q9b" value="a"> Autorização descobre sua senha.</label><label><input type="radio" name="q9b" value="b"> Autenticação e autorização são sinônimos.</label><label><input type="radio" name="q9b" value="c"> Autenticação verifica quem é; autorização determina o que pode fazer.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="UEFI é uma especificação de interface; o equipamento executa uma implementação de firmware compatível com ela."><p>Qual frase é mais precisa?</p><label><input type="radio" name="q9c" value="a"> UEFI define uma interface entre firmware e software de inicialização/SO.</label><label><input type="radio" name="q9c" value="b"> UEFI é o próprio Windows antes de abrir.</label><label><input type="radio" name="q9c" value="c"> UEFI é um tipo de memória RAM.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="CMOS Setup é um nome histórico; computadores modernos podem manter variáveis de firmware em armazenamento não volátil/NVRAM."><p>Qual afirmação é mais atual sobre “CMOS Setup”?</p><label><input type="radio" name="q9d" value="a"> Todo firmware moderno guarda obrigatoriamente todas as configurações em RAM CMOS alimentada pela bateria.</label><label><input type="radio" name="q9d" value="b"> É um nome histórico ainda usado, mas configurações modernas podem ficar em NVRAM e a arquitetura varia.</label><label><input type="radio" name="q9d" value="c"> CMOS é outro nome para SSD NVMe.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Secure Boot protege a cadeia de inicialização; TPM é um recurso separado de segurança que pode proteger chaves e medições."><p>Secure Boot e TPM são:</p><label><input type="radio" name="q9e" value="a"> dois nomes para a mesma memória.</label><label><input type="radio" name="q9e" value="b"> recursos que substituem o sistema operacional.</label><label><input type="radio" name="q9e" value="c"> mecanismos diferentes que podem cooperar na segurança da plataforma.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>O sistema operacional administra <strong>processos, memória, arquivos, dispositivos, usuários e rede</strong>. Antes dele, o firmware prepara a máquina. BIOS é o modelo histórico dos PCs; UEFI é a especificação moderna dominante; Setup é a interface de configuração e “CMOS Setup” é um nome histórico que precisa de contexto. A inicialização conecta <strong>firmware → opção de boot → carregador → kernel e serviços</strong>.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se o sistema operacional organiza arquivos, como nomes, caminhos, extensões, permissões e comandos se relacionam na prática?</p></div>

    <details class="sources-box"><summary>Fontes e crédito da imagem</summary><ul>
      <li><a href="https://www.ibm.com/br-pt/think/topics/operating-systems" target="_blank" rel="noopener">IBM — Sistema Operacional</a></li>
      <li><a href="https://www.ibm.com/br-pt/think/topics/linux-kernel" target="_blank" rel="noopener">IBM — Kernel Linux</a></li>
      <li><a href="https://uefi.org/faq" target="_blank" rel="noopener">UEFI Forum — o que é UEFI</a></li>
      <li><a href="https://uefi.org/specifications" target="_blank" rel="noopener">UEFI Forum — especificações UEFI e Platform Initialization</a></li>
      <li><a href="https://uefi.org/specs/UEFI/2.11/" target="_blank" rel="noopener">UEFI Forum — UEFI Specification 2.11</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:InsydeH2O_UEFI_security_screenshot.jpg" target="_blank" rel="noopener">Wikimedia Commons — tela de configuração UEFI</a></li>
    </ul></details>
  `
});
