window.infraestruturaModernLessons = Array.isArray(window.infraestruturaModernLessons) ? window.infraestruturaModernLessons : [];

window.infraestruturaModernLessons.push({
  id: 'moderna-diagnostico',
  number: '00',
  unit: 'Portal de Eventos · Decidir antes de implantar',
  menuTitle: 'Novo serviço, novo risco',
  technicalTitle: 'requisito • impacto • isolamento • responsabilidade • evidência • decisão',
  title: 'O portal cabe no servidor que já existe?',
  objective: 'Traduzir uma demanda da Escola Horizonte em requisitos verificáveis e comparar alternativas sem escolher tecnologia por moda.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Segunda-feira · 8h10 · reunião da Feira de Projetos</span><h2>Ana precisa abrir inscrições, mas o SRV-01 já sustenta serviços importantes.</h2><p>A coordenação quer um <strong>Portal de Eventos</strong> para inscrições fictícias de homologação. Caio propõe instalar tudo no SRV-01; Joana lembra que ele já hospeda a intranet e o compartilhamento da secretaria. Uma falha no portal não pode interromper esses serviços.</p><p>A equipe recebeu quatro possibilidades: instalar diretamente no SRV-01, criar outra VM, executar contêineres ou contratar um serviço externo. <strong>Nenhuma alternativa vence antes de os requisitos aparecerem.</strong></p></div>

    <div class="danger-box"><strong>Ambiente sem dados pessoais reais</strong><p>As práticas usam nomes e inscrições fictícios, rede isolada e ativos de laboratório. Publicação externa, custos, domínio real, tratamento de dados e disponibilidade exigem autorização institucional posterior.</p></div>

    <h3>Entender · o pedido ainda não é uma especificação</h3>
    <div class="table-wrap"><table><thead><tr><th>Relato</th><th>Pergunta que falta</th><th>Evidência esperada</th></tr></thead><tbody><tr><td>“Precisa estar disponível na feira.”</td><td>para quem, em que horário e por quanto tempo?</td><td>janela, público e responsável</td></tr><tr><td>“Pode usar o servidor.”</td><td>qual servidor e quais funções não podem parar?</td><td>Registro do Servidor: necessidade, continuidade e impacto de indisponibilidade</td></tr><tr><td>“São poucas inscrições.”</td><td>quantas, com quais campos e qual retenção?</td><td>massa fictícia, volume e ciclo de vida</td></tr><tr><td>“Depois colocamos na internet.”</td><td>quem autoriza exposição, domínio, TLS e custo?</td><td>decisão formal, não suposição técnica</td></tr></tbody></table></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Representação didática · fronteiras de impacto</span><h3>Onde uma falha do portal alcançaria?</h3></div><div class="visual-body"><div class="service-stack"><div><strong>SRV-01</strong><span>intranet + arquivos<br>uso atual da escola</span></div><div><strong>APP-LAB-01</strong><span>VM separada<br>homologação</span></div><div><strong>Serviço externo</strong><span>outra responsabilidade<br>outra governança</span></div></div><p class="visual-question"><strong>Observe:</strong> qual opção amplia menos o domínio de falha do SRV-01? Que informação ainda falta para decidir se ela é viável?</p></div></div>

    <h3>Experimentar · transforme pedido em critérios</h3>
    <div class="task-box"><strong>Missão · ficha de necessidade</strong><ol><li>identifique solicitante, usuários, período, função e impacto;</li><li>liste dados permitidos e dados proibidos na homologação;</li><li>registre os serviços atuais que devem ser preservados;</li><li>defina evidências de sucesso: página abre, cadastro fictício persiste, restauração funciona e acesso indevido falha;</li><li>compare as quatro alternativas sem atribuir vencedor;</li><li>marque quem decide custo, privacidade e exposição externa.</li></ol></div>
    <div class="table-wrap"><table><thead><tr><th>Alternativa</th><th>Isolamento</th><th>Operação</th><th>Pergunta decisiva</th></tr></thead><tbody><tr><td>Direto no SRV-01</td><td>baixo entre funções</td><td>menos um sistema, maior acoplamento</td><td>o risco aos serviços existentes é aceitável?</td></tr><tr><td>Nova VM</td><td>sistema operacional separado</td><td>mais RAM, disco, atualização e backup</td><td>o host comporta outra máquina?</td></tr><tr><td>Contêineres</td><td>processos isolados, mesmo kernel</td><td>imagem, volume, rede e runtime</td><td>a equipe sabe operar e recuperar o conjunto?</td></tr><tr><td>Serviço externo</td><td>responsabilidade compartilhada</td><td>contrato, identidade, dados e custo</td><td>o fornecedor atende aos requisitos aprovados?</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Separar a homologação reduz o domínio de falha, mas capacidade e operação ainda precisam ser verificadas."><p>Qual conclusão é sustentada neste momento?</p><label><input type="radio" name="m00a" value="a"> contêiner sempre é mais seguro que VM</label><label><input type="radio" name="m00a" value="b"> nuvem elimina responsabilidade da escola</label><label><input type="radio" name="m00a" value="c"> não instalar no SRV-01 evita acoplar a homologação aos serviços atuais; a alternativa ainda depende de medidas</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir decisão</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>

    <div class="note-box compact"><strong>Registro da Evolução · necessidade e alternativas</strong><p>Crie <code>REGISTRO_DA_EVOLUCAO.md</code> e mantenha nele requisitos, responsáveis, impacto, restrições, critérios de sucesso e dúvidas. Confronte esse registro com as medições reais do laboratório antes de ampliar a solução.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>A equipe prefere testar uma VM separada, mas ainda não provou que o host suporta esse custo. O próximo passo é criar <strong>APP-LAB-01</strong> e medir antes/depois.</p></div>
  `
});

window.infraestruturaModernLessons.push({
  id: 'moderna-virtualizacao',
  number: '01',
  unit: 'Portal de Eventos · Decidir antes de implantar',
  menuTitle: 'VM com evidência',
  technicalTitle: 'hipervisor • host • guest • vCPU • memória • disco • rede virtual • snapshot',
  title: 'Crie APP-LAB-01 sem esconder o custo',
  objective: 'Reconhecer os componentes de uma VM, criar um laboratório isolado e medir o efeito real sobre host e convidado.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Segunda-feira · 10h20 · LAB-06</span><h2>Caio diz que a VM “não pesa nada” porque ainda está desligada.</h2><p>Joana prepara o host <strong>LAB-06</strong> com Oracle VirtualBox 7.2.x. A equipe precisa demonstrar que CPU, memória, disco e rede continuam pertencendo a equipamentos reais, mesmo quando apresentados como recursos virtuais.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · não é captura do VirtualBox</span><h3>Host, hipervisor e convidado</h3></div><div class="visual-body"><div class="service-stack"><div><strong>LAB-06 físico</strong><span>CPU · RAM · SSD · rede</span></div><div><strong>VirtualBox</strong><span>atribui recursos e dispositivos virtuais</span></div><div><strong>APP-LAB-01</strong><span>Ubuntu Server 24.04 LTS</span></div></div><p class="visual-question">Se APP-LAB-01 recebe 4 GB, onde essa memória existe enquanto a VM está ligada? O que deve ser medido no host?</p></div></div>

    <h3>Estado inicial e projeto</h3>
    <div class="table-wrap"><table><thead><tr><th>Item</th><th>Referência do laboratório</th><th>Limite</th></tr></thead><tbody><tr><td>Software</td><td>VirtualBox 7.2.x, pacote-base</td><td>Extension Pack não é necessário</td></tr><tr><td>Convidado</td><td>Ubuntu Server 24.04 LTS</td><td>ISO oficial e hash/origem registrados</td></tr><tr><td>Recursos</td><td>2 vCPU, 4 GB RAM, disco dinâmico 30 GB</td><td>reduza se o host não mantiver margem</td></tr><tr><td>Rede 1</td><td>rede interna MBB-MOD</td><td>tráfego do cenário controlado</td></tr><tr><td>Rede 2</td><td>NAT temporário, se autorizado</td><td>somente downloads/atualizações; desligar depois</td></tr></tbody></table></div>
    <div class="note-box compact"><strong>Referência da ferramenta</strong><p>Consulte o <a href="https://www.virtualbox.org/manual/" target="_blank" rel="noopener">manual oficial do VirtualBox 7.2</a> para criação, rede e snapshots. A escolha favorece acesso multiplataforma e uso do pacote-base; licenças e compatibilidade do host ainda devem ser verificadas pela instituição.</p></div>
    <div class="danger-box"><strong>Nunca ligue a réplica por bridge à rede real</strong><p>MBB-MOD pode reutilizar nomes e endereços do cenário apenas porque está isolada. A conexão simultânea à rede da escola pode produzir IP duplicado, rota indevida e impacto fora do laboratório. NAT não torna um serviço público por si só, mas também deve ser autorizado.</p></div>

    <section class="visual-lab" aria-labelledby="vbox-recognition-title">
      <div class="visual-lab-header"><span class="visual-kicker">Reconhecimento da interface · VirtualBox 7.2</span><h3 id="vbox-recognition-title">Localize as três decisões antes de clicar em Iniciar</h3><p>Estas são <strong>representações didáticas da interface</strong>, baseadas no fluxo atual do VirtualBox 7.2. A posição pode variar entre os modos Basic e Expert; os nomes e estados técnicos são o que você deve reconhecer.</p></div>
      <div class="visual-body">
        <span class="representation-badge">Representação didática — não é captura de tela</span>
        <div class="ui-representation" role="img" aria-label="Representação do fluxo Nova Máquina Virtual do VirtualBox com nome APP-LAB-01 e ISO do Ubuntu Server">
          <div class="ui-topbar"><span>Oracle VirtualBox Manager 7.2 · Nova Máquina Virtual</span><span>Basic</span></div>
          <div class="setting-row"><span>Nome</span><strong>APP-LAB-01</strong></div>
          <div class="setting-row"><span>Imagem ISO</span><strong>Ubuntu Server 24.04 LTS · ISO oficial</strong></div>
          <div class="setting-row"><span>Tipo / versão</span><strong>Linux · Ubuntu 64-bit</strong></div>
        </div>
        <div class="ui-representation" role="img" aria-label="Representação da etapa de hardware do VirtualBox com 4096 MB de memória, 2 processadores e disco de 30 GB">
          <div class="ui-topbar"><span>Hardware virtual</span><span>revisar antes de criar</span></div>
          <div class="setting-row"><span>Memória base</span><strong>4096 MB</strong></div>
          <div class="setting-row"><span>Processadores</span><strong>2 vCPU</strong></div>
          <div class="setting-row"><span>Disco</span><strong>30 GB · alocação dinâmica</strong></div>
        </div>
        <div class="ui-representation" role="img" aria-label="Representação das configurações de rede do VirtualBox com Adaptador 1 em Rede Interna MBB-MOD e sem modo bridge">
          <div class="ui-topbar"><span>Configurações → Rede → Adaptador 1</span><span>VM desligada</span></div>
          <div class="setting-row"><span>Placa de rede</span><strong>Habilitada</strong></div>
          <div class="setting-row"><span>Conectado a</span><strong>Rede Interna</strong></div>
          <div class="setting-row"><span>Nome</span><strong>MBB-MOD</strong></div>
          <div class="setting-row"><span>Bridge</span><strong>Não usar nesta réplica</strong></div>
        </div>
        <ol class="observation-prompts"><li><strong>Localize</strong>O nome da VM, a ISO e os recursos correspondem à necessidade registrada?</li><li><strong>Preveja</strong>Se você escolher Bridge em vez de Rede Interna, que fronteira deixa de existir?</li><li><strong>Decida</strong>O NAT temporário é realmente necessário nesta etapa ou pode permanecer desligado?</li></ol>
      </div>
    </section>

    <div class="task-box"><strong>Missão · antes → VM ligada → snapshot → retorno</strong><ol><li>no host, registre memória, CPU e espaço livres antes de criar a VM;</li><li>no VirtualBox, em <strong>Home → New/Nova</strong>, crie APP-LAB-01; se a sequência não aparecer, use o nível de experiência <strong>Basic</strong>;</li><li>selecione a ISO oficial do Ubuntu Server 24.04 LTS e confirme Linux/Ubuntu 64-bit;</li><li>na etapa de hardware, defina 2 vCPU, 4 GB de RAM e disco dinâmico de 30 GB, reduzindo os recursos se o host não mantiver margem;</li><li>com a VM desligada, abra <strong>Configurações → Rede → Adaptador 1</strong>, escolha <strong>Rede Interna</strong> e informe <strong>MBB-MOD</strong>; não use Bridge;</li><li>adicione NAT em outro adaptador somente se a janela autorizar downloads/atualizações e desligue-o depois;</li><li>inicie, instale sem dados reais e registre <code>hostnamectl</code>, <code>free -h</code>, <code>lsblk</code> e <code>ip -br addr</code>;</li><li>compare o host com a VM ligada e desligada;</li><li>com a VM desligada ou no estado compatível indicado pela ferramenta, crie snapshot <strong>base-limpa</strong>;</li><li>crie um arquivo-teste, registre o estado, restaure o snapshot e confirme o que voltou e o que se perdeu.</li></ol></div>

    <div class="state-comparison"><div><span>ANTES</span><strong>host sem APP-LAB-01 ativa</strong><p>RAM, CPU e disco disponíveis registrados.</p></div><div><span>INTERVENÇÃO</span><strong>VM ligada + alteração controlada</strong><p>Recursos consumidos e arquivo-teste criado.</p></div><div><span>DEPOIS</span><strong>snapshot restaurado</strong><p>Estado da VM comparado; host medido novamente.</p></div></div>
    <div class="mbb-pause-question"><strong>O que isso prova?</strong><p>O retorno do arquivo ao estado anterior demonstra o alcance daquele snapshot no cenário testado. Não prova backup independente nem recuperação após perda do host.</p></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Snapshot depende do mesmo conjunto de armazenamento/hipervisor e não substitui cópia independente testada."><p>O snapshot base-limpa substitui o backup do portal?</p><label><input type="radio" name="m01a" value="a"> sim, porque captura todo o estado</label><label><input type="radio" name="m01a" value="b"> não; ele facilita retorno do laboratório, mas compartilha falhas do host/armazenamento</label><label><input type="radio" name="m01a" value="c"> sim, se a VM estiver desligada</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>
    <div class="note-box compact"><strong>Registro da Evolução · VM e medições</strong><p>Registre versões, recursos, rede, origem da ISO, baseline do host/convidado, snapshot, retorno observado e o que o teste não provou.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>A VM isolou o sistema, mas consumiu memória, disco, boot, atualizações e uma nova rotina de backup. Antes de criar outra VM para cada parte do portal, a equipe precisa medir esse padrão.</p></div>
  `
});

window.infraestruturaModernLessons.push({
  id: 'moderna-custo-vm',
  number: '02',
  unit: 'Portal de Eventos · Decidir antes de implantar',
  menuTitle: 'O custo da segunda VM',
  technicalTitle: 'capacidade • sobrecarga • sistema convidado • patch • backup • decisão',
  title: 'Cada serviço precisa de um sistema inteiro?',
  objective: 'Analisar o custo técnico e operacional de separar componentes em VMs e formular a pergunta que leva a contêineres.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Terça-feira · 9h00 · revisão do projeto</span><h2>O banco de dados ganhou uma VM própria no desenho — sem nenhuma medição.</h2><p>Caio duplicou APP-LAB-01 para “separar o banco”. O host LAB-06 agora demora a responder, e há dois sistemas para atualizar, monitorar e recuperar. A separação pode ser justificável, mas o custo precisa aparecer na comparação de capacidade.</p></div>

    <h3>Analisar · compare estados equivalentes</h3>
    <div class="task-box"><strong>Missão · uma VM versus duas</strong><ol><li>registre o host sem VMs ativas;</li><li>ligue APP-LAB-01, aguarde estabilização e meça CPU, RAM e disco;</li><li>ligue a cópia didática APP-DB-TEST, sem instalar serviço;</li><li>repita a medição na mesma condição e observe troca, espera e espaço;</li><li>liste tarefas duplicadas: conta, SSH, atualização, log, firewall, backup e inventário;</li><li>desligue e remova apenas a cópia temporária conforme orientação do responsável do laboratório; preserve APP-LAB-01.</li></ol></div>
    <div class="state-comparison"><div><span>ANTES</span><strong>uma VM</strong><p>um kernel convidado, uma rotina de atualização.</p></div><div><span>INTERVENÇÃO</span><strong>segunda VM vazia</strong><p>outro sistema completo e recursos reservados.</p></div><div><span>DEPOIS</span><strong>custo registrado</strong><p>benefício de isolamento comparado ao esforço.</p></div></div>
    <div class="table-wrap"><table><thead><tr><th>Afirmação</th><th>Evidência necessária</th><th>Conclusão limitada</th></tr></thead><tbody><tr><td>“Duas VMs deixaram lento.”</td><td>mesma carga, medidas antes/depois e repetição</td><td>associação na condição testada, não causa universal</td></tr><tr><td>“Separar é mais seguro.”</td><td>ameaça, fronteira e acesso comparados</td><td>isola sistemas, mas não corrige credenciais ou backup</td></tr><tr><td>“Uma VM basta.”</td><td>capacidade, impacto e recuperação dos componentes</td><td>válido somente para requisitos registrados</td></tr></tbody></table></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · unidade de isolamento</span><h3>O que é duplicado?</h3></div><div class="visual-body"><div class="service-stack"><div><strong>VM Web</strong><span>SO + bibliotecas + aplicação</span></div><div><strong>VM Banco</strong><span>SO + bibliotecas + banco</span></div><div><strong>Pergunta</strong><span>e se processos isolados compartilhassem o kernel da VM?</span></div></div><p class="visual-question">Quais riscos continuariam compartilhados mesmo com contêineres dentro de APP-LAB-01?</p></div></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Contêiner pode reduzir duplicação de sistemas convidados, mas não é uma VM menor nem elimina operação, persistência e segurança."><p>Qual hipótese merece o próximo teste?</p><label><input type="radio" name="m02a" value="a"> processos isolados em uma VM podem reduzir sobrecarga sem eliminar fronteiras e responsabilidades</label><label><input type="radio" name="m02a" value="b"> contêiner não usa CPU, memória ou disco</label><label><input type="radio" name="m02a" value="c"> toda aplicação deve ir para contêiner</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir hipótese</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>
    <div class="note-box compact"><strong>Registro da Evolução · capacidade e custo</strong><p>Anexe medições, tarefas duplicadas, benefício esperado, limites do teste e a pergunta: “precisamos de outro sistema operacional ou de processos isolados e reproduzíveis?”.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>A coordenação autoriza avaliar contêineres <strong>dentro de APP-LAB-01</strong>. SRV-01 permanece fora do experimento, e a equipe não recebe acesso irrestrito ao daemon.</p></div>
  `
});

window.infraestruturaModernLessons.push({
  id: 'moderna-containers',
  number: '03',
  unit: 'Portal de Eventos · Contêiner observável',
  menuTitle: 'Imagem, contêiner e processo',
  technicalTitle: 'Docker Engine • imagem • contêiner • processo • camada gravável • log • ciclo de vida',
  title: 'Execute sem confundir pacote, processo e dado',
  objective: 'Instalar o Docker Engine por fonte oficial, reconhecer imagem e contêiner e observar o ciclo de vida sem conceder privilégios desnecessários.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Terça-feira · 13h30 · APP-LAB-01</span><h2>A equipe ainda não tem Docker instalado — e copiar o primeiro comando da internet não é implantação.</h2><p>Joana mantém o experimento na VM. A referência consultada em 8 de setembro de 2026 registra Docker Engine 29.8.0, mas o laboratório não deve perseguir um número por memória: a evidência válida será o pacote oferecido pelo <strong>repositório APT oficial do Docker</strong>, a versão realmente instalada e sua origem.</p></div>

    <div class="danger-box"><strong>Controle do daemon equivale a alto privilégio</strong><p>Não adicione toda a turma ao grupo <code>docker</code>. Use <code>sudo docker</code> apenas na VM de laboratório, com ações previstas. Não monte <code>/</code>, não exponha o socket Docker e não use <code>--privileged</code>.</p></div>

    <h3>Instalar Docker Engine sem pular etapas</h3>
    <div class="note-box"><strong>Fonte de verdade desta instalação</strong><p>O roteiro abaixo segue a <a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noopener">documentação oficial do Docker Engine para Ubuntu</a>. Se a documentação oficial mudar de forma incompatível, pare e atualize o roteiro antes de improvisar.</p></div>

    <div class="terminal-card"><strong>1 · Pergunta: APP-LAB-01 é o Ubuntu esperado e há pacotes que podem conflitar?</strong><pre>cat /etc/os-release
uname -m
dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc docker-buildx podman-docker containerd runc 2&gt;/dev/null</pre><p>Confirme Ubuntu 24.04 LTS e a arquitetura antes de alterar repositórios. A lista vazia de conflitos é um resultado válido.</p></div>

    <div class="terminal-card"><strong>2 · Ação autorizada: remover somente pacotes conflitantes encontrados</strong><pre>sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc docker-buildx podman-docker containerd runc | cut -f1)</pre><p>O APT pode informar que nenhum pacote está instalado. Não remova <code>/var/lib/docker</code> nem dados existentes por impulso; este laboratório começa limpo e qualquer estado anterior deve ser registrado.</p></div>

    <div class="terminal-card"><strong>3 · Preparar a chave do repositório oficial</strong><pre>sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc</pre><p>Se o download da chave falhar, pare. Não substitua a origem por um mirror aleatório.</p></div>

    <div class="terminal-card"><strong>4 · Registrar o repositório APT oficial</strong><pre>sudo tee /etc/apt/sources.list.d/docker.sources &gt; /dev/null &lt;&lt;EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release &amp;&amp; echo "\${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF
sudo apt update
apt-cache policy docker-ce</pre><p>Antes de instalar, confira se <code>docker-ce</code> aparece vindo de <code>download.docker.com</code>. Isso liga o pacote à origem que você acabou de configurar.</p></div>

    <div class="terminal-card"><strong>5 · Instalar os componentes necessários ao laboratório</strong><pre>sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</pre><p>Leia o resumo do APT antes de confirmar. O Compose é instalado como plugin e será usado com <code>docker compose</code>, sem hífen.</p></div>

    <div class="terminal-grid"><div class="terminal-card"><strong>6 · O serviço iniciou?</strong><pre>systemctl status docker --no-pager</pre><p>Se não estiver ativo, investigue o estado antes de seguir.</p></div><div class="terminal-card"><strong>7 · Que versões foram realmente instaladas?</strong><pre>sudo docker version
sudo docker compose version</pre><p>Registre as versões observadas; não copie apenas a versão citada na aula.</p></div><div class="terminal-card"><strong>8 · O runtime consegue executar uma imagem de teste?</strong><pre>sudo docker run hello-world</pre><p>O teste valida o caminho básico do daemon/imagem/contêiner, não o Portal de Eventos.</p></div></div>

    <div class="state-comparison"><div><span>ANTES</span><strong>Docker ausente</strong><p>Ubuntu e possíveis conflitos registrados.</p></div><div><span>INTERVENÇÃO</span><strong>repositório oficial + pacotes</strong><p>chave, source e origem do candidato conferidos.</p></div><div><span>DEPOIS</span><strong>daemon + Compose + hello-world</strong><p>versões reais e teste básico registrados.</p></div></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · estados diferentes</span><h3>Imagem não é contêiner; contêiner não é aplicação validada</h3></div><div class="visual-body"><div class="diagnostic-flow"><div><span>1</span><strong>Imagem</strong><small>conteúdo somente leitura identificado por tag/digest</small></div><div><span>2</span><strong>Contêiner</strong><small>instância com configuração e camada gravável</small></div><div><span>3</span><strong>Processo</strong><small>estado em execução ou encerrado</small></div><div><span>4</span><strong>Função</strong><small>resposta testada por um cliente autorizado</small></div></div><p class="visual-question">Em qual etapa <code>docker image ls</code> produz evidência? Qual teste ainda falta para afirmar que Ana alcança a função?</p></div></div>

    <div class="task-box"><strong>Missão · observar o ciclo</strong><ol><li>registre no inventário do runtime a origem do repositório, <code>apt-cache policy docker-ce</code>, versões efetivas e resultado do <code>hello-world</code>;</li><li>liste imagens com <code>sudo docker image ls</code> e contêineres com <code>sudo docker ps -a</code>;</li><li>execute <code>sudo docker run --name mbb-web -d -p 127.0.0.1:8080:80 nginx:stable-alpine</code>;</li><li>preveja e teste <code>curl -I http://127.0.0.1:8080</code>;</li><li>correlacione <code>sudo docker ps</code>, <code>sudo docker logs mbb-web</code> e <code>sudo docker inspect mbb-web</code>;</li><li>pare com <code>sudo docker stop mbb-web</code>, confirme o estado em <code>docker ps -a</code>, inicie com <code>sudo docker start mbb-web</code> e repita o teste HTTP;</li><li>ao terminar o experimento, pare e remova somente <code>mbb-web</code>; preserve os registros do inventário do runtime.</li></ol></div>
    <div class="table-wrap"><table><thead><tr><th>Comando</th><th>Pergunta respondida</th><th>Não prova</th></tr></thead><tbody><tr><td><code>docker image ls</code></td><td>qual conteúdo está disponível localmente?</td><td>que há processo ativo</td></tr><tr><td><code>docker ps</code></td><td>qual contêiner está em execução?</td><td>que a função atende ao usuário</td></tr><tr><td><code>docker logs</code></td><td>o processo registrou eventos?</td><td>causa definitiva isoladamente</td></tr><tr><td><code>curl -I</code></td><td>houve resposta HTTP daquele ponto?</td><td>persistência, TLS ou acesso externo</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A publicação em loopback limita o alcance ao host; ainda exige teste e não equivale a exposição de rede."><p>Por que usar <code>127.0.0.1:8080:80</code> nesta fase?</p><label><input type="radio" name="m03a" value="a"> porque torna o contêiner invisível ao sistema</label><label><input type="radio" name="m03a" value="b"> porque publica a porta apenas no loopback enquanto a equipe valida localmente</label><label><input type="radio" name="m03a" value="c"> porque dispensa firewall</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>
    <div class="note-box compact"><strong>Registro da Evolução · runtime e contêineres</strong><p>Registre repositório, versão efetiva, imagem/tag/digest, nomes, portas, estados, teste HTTP, log relevante e remoção do recurso temporário.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>O Nginx respondeu e pôde ser recriado. Agora Ana pergunta o que acontece com uma inscrição gravada dentro do contêiner quando ele é removido.</p></div>
  `
});