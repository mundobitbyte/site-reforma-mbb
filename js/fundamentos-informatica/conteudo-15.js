window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "nuvem-virtualizacao",
  number: "15",
  unit: "Ato 3 · Computadores se conectam",
  menuTitle: "Nuvem e virtualização",
  technicalTitle: "virtualização • VM • hipervisor • datacenter • nuvem • elasticidade • IaaS • PaaS • SaaS • disponibilidade • contêiner",
  title: "Se está na nuvem, em qual computador o sistema realmente está?",
  objective: "Compreender virtualização e computação em nuvem sem confundi-las, reconhecendo máquinas virtuais, hipervisores, datacenters, modelos de serviço, elasticidade, disponibilidade e contêineres.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">A nuvem tem endereço físico</span>
      <h2>Um sistema Web precisa de CPU, RAM, armazenamento e rede. Dizer que ele está “na nuvem” não faz esse hardware desaparecer.</h2>
      <p>A pergunta interessante é outra: <strong>como recursos físicos podem ser divididos, provisionados e oferecidos de modo que o usuário não precise administrar cada servidor como uma máquina isolada?</strong></p>
    </div>

    <h3>Quatro serviços, quatro servidores físicos?</h3>
    <p>Imagine uma empresa com servidor Web, banco de dados, sistema interno e servidor de arquivos. Comprar uma máquina física para cada função pode deixar grande parte da CPU e da RAM ociosa, além de aumentar espaço, energia e manutenção.</p>
    <div class="mbb-pause-question"><strong>Se uma máquina possui recursos sobrando, podemos criar vários ambientes separados dentro dela?</strong><p>Sim. Essa necessidade é uma das portas de entrada para a <strong>virtualização</strong>.</p></div>
    <div class="definition-box featured"><span class="term">Virtualização</span><p>É a criação de recursos computacionais virtuais que abstraem ou compartilham recursos físicos, permitindo ambientes logicamente separados.</p></div>

    <h3>Uma máquina física pode hospedar vários computadores virtuais</h3>
    <p>Considere um servidor com muitos núcleos, 64 GB de RAM e bastante armazenamento. Parte desses recursos pode ser atribuída a ambientes diferentes, cada um com seu próprio sistema operacional e configuração.</p>
    <div class="comparison-grid three">
      <article><strong>VM 1</strong><p>Linux · servidor Web · 8 GB RAM virtual.</p></article>
      <article><strong>VM 2</strong><p>Linux · banco de dados · 16 GB RAM virtual.</p></article>
      <article><strong>VM 3</strong><p>Windows · sistema interno · 8 GB RAM virtual.</p></article>
    </div>
    <div class="definition-box"><span class="term">Máquina virtual — VM</span><p>É um ambiente computacional que se comporta como uma máquina independente, embora utilize recursos fornecidos por um sistema físico hospedeiro.</p></div>

    <h3>Quem distribui os recursos?</h3>
    <p>Se três sistemas operacionais acreditam possuir CPU, memória, disco e interfaces de rede próprios, alguma camada precisa intermediar o acesso ao hardware real.</p>
    <div class="definition-box featured"><span class="term">Hipervisor — Hypervisor</span><p>É o software responsável por criar e administrar máquinas virtuais e por mediar seu uso dos recursos físicos.</p></div>
    <div class="concept-flow" aria-label="Virtualização simplificada"><div><strong>Hardware físico</strong><span>CPU, RAM, disco, rede</span></div><span class="flow-arrow">→</span><div><strong>Hipervisor</strong><span>virtualiza recursos</span></div><span class="flow-arrow">→</span><div><strong>VMs</strong><span>ambientes separados</span></div></div>
    <div class="note-box compact"><strong>Isolamento virtual não elimina dependência física.</strong><p>Se duas VMs estão no mesmo host e esse host sofre uma falha grave, as duas podem parar. Virtualização não substitui uma estratégia de disponibilidade.</p></div>

    <h3>Então onde ficam os computadores físicos?</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="../img/fundamentos-informatica/datacenter-racks.svg"
          alt="Corredor de datacenter com racks de servidores" width="960" height="640" loading="lazy" decoding="async">
        <figcaption><strong>Racks de servidores em um datacenter.</strong> A “nuvem” continua dependendo de máquinas, cabos, energia e refrigeração.<span class="credit">Ilustração didática · Mundo bit Byte.</span></figcaption>
      </figure>
      <div>
        <div class="definition-box"><span class="term">Datacenter</span><p>É uma instalação preparada para abrigar e operar infraestrutura computacional e de comunicação, incluindo servidores, armazenamento, redes, energia e refrigeração.</p></div>
        <p>Um datacenter pode existir sem oferecer “nuvem”. E um provedor de nuvem pode operar muitos datacenters. <strong>Datacenter é infraestrutura física; nuvem é um modelo de fornecimento de recursos.</strong></p>
      </div>
    </div>

    <h3>Quando comprar máquina vira provisionar recurso</h3>
    <p>Uma empresa precisa de um ambiente de teste para amanhã. No modelo tradicional, talvez tenha de comprar hardware, instalar, conectar e configurar. Em um serviço de nuvem, pode solicitar capacidade computacional por software e obtê-la rapidamente.</p>
    <div class="definition-box featured"><span class="term">Computação em nuvem — Cloud Computing</span><p>É um modelo que oferece acesso sob demanda, pela rede, a um conjunto compartilhado de recursos computacionais configuráveis que podem ser provisionados e liberados rapidamente.</p></div>
    <p>O NIST organiza essa ideia por características como <strong>autoatendimento sob demanda, amplo acesso pela rede, agrupamento de recursos, elasticidade rápida e serviço mensurado</strong>.</p>
    <div class="note-box compact"><strong>Nuvem ≠ Internet.</strong><p>A Internet pode ser o caminho usado para acessar o serviço. Nuvem descreve como capacidade computacional é fornecida e administrada.</p></div>

    <h3>De repente chegam cem vezes mais usuários</h3>
    <p>Uma loja recebe pouca movimentação na maior parte do ano, mas explode de acessos durante uma promoção. Comprar infraestrutura para o pico e deixá-la ociosa o restante do tempo pode ser caro. Precisamos ajustar capacidade conforme a demanda.</p>
    <div class="two-col"><div class="definition-box"><span class="term">Escalabilidade</span><p>É a capacidade de ampliar ou reduzir recursos para atender diferentes níveis de carga.</p></div><div class="definition-box"><span class="term">Elasticidade</span><p>É a capacidade de ajustar recursos de forma dinâmica conforme a demanda muda, característica central do modelo de nuvem.</p></div></div>
    <div class="comparison-grid"><article><strong>Escala vertical</strong><p>Dar mais CPU, RAM ou capacidade à mesma instância.</p></article><article><strong>Escala horizontal</strong><p>Adicionar mais instâncias e distribuir trabalho entre elas.</p></article></div>

    <h3>Quanto da pilha você quer administrar?</h3>
    <p>Uma pessoa pode querer controlar o sistema operacional inteiro; outra só quer publicar a aplicação; outra simplesmente quer usar um software pronto. Esses três problemas ajudam a entender os modelos de serviço.</p>
    <div class="comparison-grid three">
      <article><strong>IaaS — Infrastructure as a Service</strong><p>Entrega recursos de infraestrutura, como computação, rede e armazenamento. O cliente ainda administra boa parte do software acima dessa camada.</p></article>
      <article><strong>PaaS — Platform as a Service</strong><p>Entrega uma plataforma para desenvolver ou executar aplicações, reduzindo a administração direta da infraestrutura inferior.</p></article>
      <article><strong>SaaS — Software as a Service</strong><p>Entrega uma aplicação pronta para uso, normalmente com apenas configurações específicas sob responsabilidade do usuário.</p></article>
    </div>
    <p>Os limites práticos variam entre fornecedores, mas a progressão é útil: <strong>quanto mais o provedor entrega como serviço, menos camadas inferiores o cliente administra diretamente.</strong></p>

    <h3>Pública, privada ou híbrida?</h3>
    <div class="comparison-grid three"><article><strong>Nuvem pública</strong><p>Recursos são fornecidos por um provedor em infraestrutura compartilhada entre clientes, com isolamento lógico.</p></article><article><strong>Nuvem privada</strong><p>Infraestrutura de nuvem é dedicada a uma organização.</p></article><article><strong>Nuvem híbrida</strong><p>Combina ambientes de nuvem distintos de forma coordenada.</p></article></div>
    <div class="note-box compact"><strong>O nome do modelo não decide sozinho a segurança.</strong><p>“Privada” não significa automaticamente segura e “pública” não significa automaticamente insegura. Configuração, arquitetura, identidade, atualização e controles continuam importantes.</p></div>
    <details class="sources-box"><summary>Aprofunde: o quarto modelo do NIST</summary><p>O NIST também descreve a <strong>community cloud</strong>, destinada ao uso exclusivo de uma comunidade de organizações com preocupações compartilhadas. Ela aparece menos no vocabulário cotidiano, por isso fica como aprofundamento.</p></details>

    <h3>Redundância e backup resolvem o mesmo problema?</h3>
    <p>Se um servidor falhar, manter outro pronto pode reduzir indisponibilidade. Mas, se alguém apagar um registro e a exclusão for replicada para todos os nós, a redundância não recupera automaticamente o estado anterior.</p>
    <div class="comparison-grid"><article><strong>Redundância</strong><p>Usa recursos adicionais ou duplicados para reduzir o impacto da falha de um componente.</p></article><article><strong>Backup</strong><p>Preserva cópias ou versões voltadas à recuperação de dados.</p></article></div>
    <div class="definition-box compact"><span class="term">Disponibilidade</span><p>É a capacidade de um serviço permanecer acessível e operacional quando necessário. Nuvem pode facilitar arquiteturas disponíveis, mas <strong>usar nuvem não garante alta disponibilidade automaticamente</strong>.</p></div>

    <h3>Uma VM inteira para cada aplicação pode ser demais</h3>
    <p>Imagine um programa que funciona no notebook do desenvolvedor, mas falha no servidor porque falta uma biblioteca ou a versão é diferente. Queremos empacotar a aplicação com suas dependências, mas sem necessariamente carregar um sistema operacional convidado completo para cada pequena aplicação.</p>
    <div class="definition-box featured"><span class="term">Contêiner</span><p>É uma forma de executar uma aplicação em um ambiente isolado de processos e dependências, normalmente compartilhando o kernel do sistema hospedeiro em vez de possuir um kernel completo próprio como uma VM.</p></div>
    <div class="comparison-grid"><article><strong>Máquina virtual</strong><p>Virtualiza uma máquina e normalmente executa seu próprio sistema operacional convidado e kernel.</p></article><article><strong>Contêiner</strong><p>Isola processos e dependências sobre o sistema hospedeiro; tende a ser mais leve em muitos cenários.</p></article></div>
    <div class="note-box compact"><strong>Contêiner não é simplesmente “uma VM pequena”.</strong><p>O modelo de isolamento é diferente. Docker é uma plataforma muito conhecida para contêineres; Kubernetes aparece depois quando é necessário orquestrar muitos deles.</p></div>

    <h3>Quem cuida da segurança?</h3>
    <p>Contratar uma VM transfere ao provedor a operação do hardware físico, mas o cliente ainda pode ser responsável pelo sistema operacional, aplicações, contas e configurações. Em SaaS, o provedor assume muito mais camadas.</p>
    <div class="mbb-pause-question"><strong>“Está na nuvem, então segurança é problema do provedor.”</strong><p><strong>Não.</strong> As responsabilidades mudam conforme o serviço. Configuração insegura do cliente continua podendo causar incidentes.</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>A nuvem deixou de ser uma metáfora?</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Virtualização é uma tecnologia de abstração; nuvem é um modelo de fornecimento de recursos e pode usar virtualização entre várias tecnologias."><p>Virtualização e computação em nuvem são sinônimos?</p><label><input type="radio" name="q15a" value="a"> Sim, sempre.</label><label><input type="radio" name="q15a" value="b"> Sim, porque ambas eliminam hardware físico.</label><label><input type="radio" name="q15a" value="c"> Não. Virtualização é uma tecnologia; nuvem é um modelo de fornecimento de recursos.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="SaaS entrega principalmente uma aplicação pronta; o usuário não administra diretamente as camadas inferiores de infraestrutura."><p>Qual modelo está mais próximo de simplesmente usar um webmail pronto?</p><label><input type="radio" name="q15b" value="a"> IaaS.</label><label><input type="radio" name="q15b" value="b"> SaaS.</label><label><input type="radio" name="q15b" value="c"> Hipervisor.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Redundância ajuda na disponibilidade, mas uma alteração ruim pode ser replicada; backup tem objetivo de recuperação."><p>Dois servidores replicados tornam backup desnecessário?</p><label><input type="radio" name="q15c" value="a"> Não. Redundância e backup resolvem problemas diferentes.</label><label><input type="radio" name="q15c" value="b"> Sim, qualquer cópia simultânea é backup.</label><label><input type="radio" name="q15c" value="c"> Sim, desde que estejam em VMs.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>A <strong>virtualização</strong> permite criar ambientes virtuais sobre recursos físicos; máquinas virtuais são administradas por hipervisores. A <strong>nuvem</strong> oferece recursos sob demanda como serviço, apoiada em infraestrutura real de datacenters. IaaS, PaaS e SaaS transferem diferentes responsabilidades ao provedor. Contêineres oferecem outro modelo de isolamento, e disponibilidade, redundância e backup não são sinônimos.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Até agora pensamos em PCs, servidores e celulares. E quando a computação fica escondida dentro de uma máquina de lavar, um carro, uma estufa ou um sensor?</p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://csrc.nist.gov/pubs/sp/800/145/final" target="_blank" rel="noopener">NIST SP 800-145 — definição de computação em nuvem</a></li>
      <li><a href="https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/" target="_blank" rel="noopener">Docker Docs — contêineres</a></li>
    </ul></details>
  `
});