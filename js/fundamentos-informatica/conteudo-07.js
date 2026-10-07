window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "memoria-armazenamento",
  number: "07",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Memória e armazenamento",
  technicalTitle: "registradores • cache • RAM • DDR3 • DDR4 • DDR5 • MT/s • DIMM • SSD • HDD • SATA • NVMe • memória virtual",
  title: "Se todos guardam dados, por que precisamos de vários níveis?",
  objective: "Entender a hierarquia de memória, interpretar especificações de RAM atuais e diferenciar capacidade, taxa, volatilidade, armazenamento e memória virtual.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Velocidade × capacidade × permanência</span>
      <h2>Por que não usar apenas o SSD, que tem muito mais espaço que a RAM?</h2>
      <p>Porque nenhuma tecnologia oferece ao mesmo tempo <strong>velocidade máxima, capacidade enorme, baixo custo e permanência dos dados</strong>. O computador combina níveis diferentes para equilibrar essas características.</p>
    </div>

    <h3>Memória e armazenamento: uma distinção útil</h3>
    <div class="comparison-grid">
      <article><strong>Memória de trabalho</strong><p>Registradores, cache e RAM mantêm dados e instruções muito próximos do processamento. A RAM principal é normalmente volátil.</p></article>
      <article><strong>Armazenamento</strong><p>SSD e HDD preservam arquivos e programas de forma não volátil, mesmo quando o computador é desligado.</p></article>
    </div>
    <p>No cotidiano, “memória” também é usada para falar do armazenamento de celulares. O contexto importa; tecnicamente, nesta aula, vamos separar os papéis.</p>

    <h3>A hierarquia</h3>
    <div class="fact-strip" aria-label="Hierarquia simplificada de memória">
      <div><strong>Registradores</strong><span>mínimos e muito próximos da CPU</span></div>
      <div><strong>Cache</strong><span>muito rápida e pequena</span></div>
      <div><strong>RAM</strong><span>área principal de trabalho</span></div>
      <div><strong>SSD / HDD</strong><span>armazenamento persistente</span></div>
    </div>
    <div class="note-box compact"><strong>É uma tendência geral:</strong><p>quanto mais perto do processamento, menor e mais rápido tende a ser o nível; quanto mais buscamos capacidade e baixo custo por byte, maior tende a ser a distância e o tempo de acesso.</p></div>

    <h3>Registradores e cache</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Registradores</span><p>São pequenas áreas de armazenamento dentro da CPU usadas diretamente durante a execução das instruções.</p></div>
      <div class="definition-box"><span class="term">Cache</span><p>Mantém cópias de dados e instruções que provavelmente serão necessários em breve, evitando acessos mais demorados à RAM.</p></div>
    </div>
    <details class="sources-box"><summary>Aprofunde: por que cache costuma funcionar tão bem?</summary><p>Programas apresentam padrões. <strong>Localidade temporal</strong>: algo usado recentemente pode ser usado de novo. <strong>Localidade espacial</strong>: dados próximos de um dado acessado têm boa chance de também serem necessários. Caches exploram esses padrões.</p><p>É comum encontrar níveis <strong>L1, L2 e L3</strong>. A organização exata varia conforme o processador.</p></details>

    <h3>RAM: a área de trabalho</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/960px-Memoria_RAM.JPG" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/330px-Memoria_RAM.JPG 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/960px-Memoria_RAM.JPG 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/1280px-Memoria_RAM.JPG 1280w" sizes="(max-width:700px) 92vw, 520px" alt="Módulos de memória RAM instalados em slots de uma placa-mãe" width="960" height="720" loading="lazy" decoding="async">
        <figcaption><strong>Módulos de RAM instalados na placa-mãe.</strong><span class="credit">Chrihern · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div><div class="definition-box"><span class="term">RAM — Random Access Memory</span><p>É a memória principal usada para manter temporariamente dados e instruções necessários aos programas em execução.</p></div><div class="definition-box compact"><span class="term">Volátil</span><p>Precisa de energia para manter os dados. Desligar o equipamento apaga o conteúdo da RAM convencional.</p></div></div>
    </div>
    <p>“Acesso aleatório” não significa bagunça. Significa que uma posição pode ser acessada diretamente, sem precisar percorrer todas as anteriores como num meio puramente sequencial.</p>

    <h3>DDR3, DDR4, DDR5: gerações da memória, não tamanhos</h3>
    <p>Ao pesquisar um computador atual, é comum encontrar algo como <strong>16 GB DDR5-5600</strong>. Essa expressão mistura informações diferentes: capacidade, geração da tecnologia e taxa de transferência.</p>
    <div class="definition-box featured"><span class="term">DDR SDRAM</span><p><strong>Double Data Rate Synchronous Dynamic RAM</strong> é uma família de memória principal síncrona capaz de transferir dados em mais de um momento por ciclo de sinal. As gerações DDR evoluíram em padrões sucessivos.</p></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Geração</th><th>Como pensar nela</th><th>Compatibilidade</th></tr></thead>
        <tbody>
          <tr><td><strong>DDR</strong></td><td>primeira geração da família DDR usada em PCs</td><td>plataformas próprias daquela geração</td></tr>
          <tr><td><strong>DDR2</strong></td><td>evolução da interface e das taxas disponíveis</td><td>não é substituição direta em slot DDR</td></tr>
          <tr><td><strong>DDR3</strong></td><td>muito comum em PCs de gerações anteriores</td><td>exige plataforma compatível com DDR3</td></tr>
          <tr><td><strong>DDR4</strong></td><td>tornou-se padrão dominante por vários anos</td><td>usa plataforma compatível com DDR4</td></tr>
          <tr><td><strong>DDR5</strong></td><td>geração atual em muitas plataformas recentes</td><td>exige suporte específico de CPU/placa-mãe</td></tr>
        </tbody>
      </table>
    </div>
    <div class="danger-box compact"><strong>DDR5 não é “DDR4 mais rápida que encaixa no mesmo lugar”.</strong><p>As gerações possuem diferenças elétricas, mecânicas e de interface. <strong>Compatibilidade depende da plataforma</strong>; não se escolhe RAM apenas pela capacidade.</p></div>

    <h3>16 GB DDR5-5600: leia cada parte</h3>
    <div class="comparison-grid three">
      <article><strong>16 GB</strong><p>É a <strong>capacidade</strong> de memória disponível naquele conjunto.</p></article>
      <article><strong>DDR5</strong><p>É a <strong>geração</strong> da tecnologia de memória.</p></article>
      <article><strong>5600 MT/s</strong><p>É uma <strong>taxa de transferências</strong> anunciada. MT/s significa milhões de transferências por segundo.</p></article>
    </div>
    <div class="note-box compact"><strong>MHz e MT/s não são a mesma unidade.</strong><p>Em anúncios, é comum ver “5600 MHz” como atalho informal para uma memória DDR5-5600. Tecnicamente, porém, a taxa de dados é expressa em <strong>MT/s</strong>; a frequência do sinal não é simplesmente igual ao número de transferências por segundo.</p></div>

    <h3>DIMM e SO-DIMM: forma física também importa</h3>
    <div class="comparison-grid">
      <article><strong>DIMM</strong><p>Formato de módulo muito usado em computadores de mesa e servidores, com dimensões maiores.</p></article>
      <article><strong>SO-DIMM</strong><p>Formato compacto usado tradicionalmente em muitos notebooks e equipamentos pequenos.</p></article>
    </div>
    <p>Alguns computadores atuais usam memória soldada à placa em vez de módulos removíveis. Por isso <strong>“tem 16 GB de RAM” não informa sozinho se a memória pode ser expandida</strong>.</p>

    <h3>E os canais de memória?</h3>
    <div class="definition-box"><span class="term">Canal de memória</span><p>É um caminho de comunicação entre o controlador de memória e a RAM. Plataformas podem usar mais de um canal para aumentar a largura de banda disponível.</p></div>
    <p>Expressões como <strong>single channel</strong> e <strong>dual channel</strong> descrevem a organização desse acesso, não “dois tipos de RAM”. A configuração correta depende da CPU, placa-mãe e quantidade/disposição dos módulos.</p>
    <div class="note-box compact"><strong>Mais módulos não significam automaticamente mais canais utilizáveis.</strong><p>É preciso consultar o manual da plataforma para saber como os slots estão ligados e qual combinação oferece o modo desejado.</p></div>

    <h3>LPDDR, GDDR e HBM: reconheça sem misturar</h3>
    <div class="comparison-grid three">
      <article><strong>LPDDR</strong><p>Família de memória de baixo consumo, muito usada em dispositivos móveis e também em computadores compactos.</p></article>
      <article><strong>GDDR</strong><p>Família de memória projetada para altas taxas em aplicações gráficas, comum em placas de vídeo dedicadas.</p></article>
      <article><strong>HBM</strong><p>Memória de alta largura de banda usada em determinados aceleradores e sistemas de alto desempenho.</p></article>
    </div>
    <p>Essas famílias resolvem necessidades diferentes. <strong>Não são versões que o usuário simplesmente troca umas pelas outras no mesmo slot.</strong></p>

    <h3>Latência também existe na RAM</h3>
    <p>Além da taxa de transferência, módulos podem apresentar parâmetros de temporização, como valores de <strong>CAS latency — CL</strong>. Para Fundamentos, basta guardar o critério: <strong>um único número não descreve todo o desempenho da memória</strong>. Taxa, latências, controlador, canais e carga de trabalho interagem.</p>

    <h3>Salvar é tornar persistente</h3>
    <p>Enquanto você edita um documento, informações ficam na RAM. Ao <strong>salvar</strong>, os dados são registrados em armazenamento não volátil, como SSD ou HDD. É por isso que perder energia antes de salvar pode eliminar alterações que ainda não foram persistidas.</p>

    <h3>SSD e HDD</h3>
    <div class="media-text reverse">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/960px-Open_hard-drive.jpg" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/330px-Open_hard-drive.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/960px-Open_hard-drive.jpg 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/1280px-Open_hard-drive.jpg 1280w" sizes="(max-width:700px) 92vw, 520px" alt="Disco rígido aberto mostrando prato e braço de leitura e gravação" width="960" height="837" loading="lazy" decoding="async">
        <figcaption><strong>HDD aberto.</strong> O prato magnético e o braço de leitura/gravação deixam claro que existe movimento mecânico.<span class="credit">Zzubnik · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div><div class="comparison-grid"><article><strong>HDD</strong><p>Armazena dados magneticamente em discos giratórios. O deslocamento mecânico da cabeça influencia o tempo de acesso.</p></article><article><strong>SSD</strong><p>Usa memória eletrônica não volátil, normalmente flash NAND, sem os discos giratórios de um HDD.</p></article></div><p>SSD costuma oferecer respostas muito mais rápidas no uso cotidiano. HDD continua útil quando grande capacidade por custo é uma prioridade.</p></div>
    </div>

    <h3>“Mais rápido” pode significar coisas diferentes</h3>
    <div class="two-col"><div class="definition-box"><span class="term">Taxa de transferência</span><p>Quantidade de dados que pode ser transferida em determinado intervalo de tempo, por exemplo MB/s.</p></div><div class="definition-box"><span class="term">Latência</span><p>Tempo de espera até que uma operação de acesso produza resposta.</p></div></div>
    <p>Copiar um vídeo enorme valoriza alta transferência sequencial. Abrir milhares de arquivos pequenos pode depender muito de latência e de acessos aleatórios. <strong>Uma única medida não descreve todo o desempenho.</strong></p>

    <h3>SATA, PCIe, NVMe e M.2</h3>
    <div class="comparison-grid four"><article><strong>SATA</strong><p>Interface usada historicamente por HDDs e também por SSDs.</p></article><article><strong>PCIe</strong><p>Interconexão de alta velocidade usada por diversos dispositivos.</p></article><article><strong>NVMe</strong><p>Protocolo projetado para armazenamento não volátil rápido, normalmente sobre PCIe.</p></article><article><strong>M.2</strong><p>Formato/especificação física de módulos; um M.2 pode usar SATA ou PCIe/NVMe conforme o dispositivo.</p></article></div>
    <div class="note-box compact"><strong>M.2 não significa automaticamente NVMe.</strong><p>Dois módulos visualmente parecidos podem usar interfaces diferentes e não oferecer a mesma compatibilidade ou desempenho.</p></div>

    <h3>Juntando tudo: duas fichas que parecem parecidas</h3>
    <div class="comparison-grid">
      <article><strong>Computador A</strong><p>16 GB DDR4-3200<br>SSD SATA 1 TB</p></article>
      <article><strong>Computador B</strong><p>16 GB DDR5-5600<br>SSD NVMe PCIe 4.0 1 TB</p></article>
    </div>
    <p>Os dois anunciam <strong>16 GB de RAM e 1 TB de armazenamento</strong>, mas geração, interface e características de desempenho são diferentes. Mesmo assim, a ficha ainda não basta para declarar um vencedor absoluto: CPU, controlador, qualidade dos componentes, refrigeração e uso real também importam.</p>

    <h3>E quando a RAM não é suficiente?</h3>
    <div class="definition-box"><span class="term">Memória virtual</span><p>É um mecanismo de gerenciamento de memória que fornece aos processos espaços de endereçamento organizados e permite que partes menos necessárias naquele momento sejam mantidas fora da RAM física, inclusive em armazenamento.</p></div>
    <p>Windows pode usar um <em>pagefile</em>; sistemas Linux podem usar <em>swap</em>. Isso <strong>não transforma SSD em RAM</strong>. Se o sistema precisa mover dados entre RAM e armazenamento com frequência, o desempenho pode cair bastante.</p>

    <h3>Um dado pode passar por vários níveis</h3>
    <div class="concept-flow"><div><strong>SSD</strong><span>arquivo persistente</span></div><span class="flow-arrow">→</span><div><strong>RAM / cache</strong><span>dados próximos do processamento</span></div><span class="flow-arrow">→</span><div><strong>Registradores</strong><span>uso imediato pela CPU</span></div></div>
    <p>A mesma informação pode existir simultaneamente em mais de um nível. O sistema cria cópias e movimenta dados para equilibrar desempenho e capacidade.</p>

    <h3>Observe a RAM do seu computador</h3>
    <div class="mbb-pause-question"><strong>Windows: Gerenciador de Tarefas → Desempenho → Memória</strong><p>Observe a capacidade instalada e as informações que o sistema disponibilizar, como velocidade e slots usados. Depois responda: <strong>o que é capacidade? o que é taxa? sua memória é removível/expansível ou isso ainda precisa ser confirmado no manual?</strong></p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Checkpoint 2</span><h3>Memória não é uma coisa só</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="RAM é volátil e foi projetada para memória de trabalho; SSD é persistente e possui características de acesso diferentes."><p>Por que um SSD grande não substitui simplesmente a RAM?</p><label><input type="radio" name="q7a" value="a"> Porque SSD não consegue armazenar dados.</label><label><input type="radio" name="q7a" value="b"> Porque RAM só serve para arquivos.</label><label><input type="radio" name="q7a" value="c"> Porque possuem funções e características de desempenho diferentes.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="M.2 descreve formato/especificação do módulo; NVMe é um protocolo de armazenamento normalmente usado sobre PCIe."><p>Qual afirmação é correta?</p><label><input type="radio" name="q7b" value="a"> Todo M.2 é NVMe.</label><label><input type="radio" name="q7b" value="b"> Um M.2 pode usar SATA ou PCIe/NVMe, conforme o dispositivo.</label><label><input type="radio" name="q7b" value="c"> NVMe é o formato físico do conector.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Memória virtual pode usar armazenamento como apoio, mas ele continua muito mais lento que a RAM."><p>Quando a RAM fica insuficiente, o uso intenso de paginação pode:</p><label><input type="radio" name="q7c" value="a"> reduzir muito o desempenho.</label><label><input type="radio" name="q7c" value="b"> transformar permanentemente o SSD em RAM.</label><label><input type="radio" name="q7c" value="c"> aumentar a quantidade de núcleos da CPU.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="16 GB indica capacidade; DDR5 indica a geração; 5600 MT/s indica uma taxa de transferências."><p>Em <code>16 GB DDR5-5600</code>, o que significa <strong>DDR5</strong>?</p><label><input type="radio" name="q7d" value="a"> A capacidade total.</label><label><input type="radio" name="q7d" value="b"> O formato M.2 da memória.</label><label><input type="radio" name="q7d" value="c"> A geração da tecnologia DDR.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="DDR4 e DDR5 pertencem a gerações diferentes e exigem suporte específico da plataforma; não são módulos intercambiáveis livremente."><p>Uma placa-mãe para DDR4 aceita automaticamente um módulo DDR5?</p><label><input type="radio" name="q7e" value="a"> Sim, se ambos tiverem a mesma capacidade.</label><label><input type="radio" name="q7e" value="b"> Não. A plataforma precisa ser compatível com a geração da memória.</label><label><input type="radio" name="q7e" value="c"> Sim, desde que o SSD seja NVMe.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="MT/s mede transferências por segundo; tratá-lo como se fosse a mesma coisa que a frequência em MHz apaga a característica double data rate."><p>Qual frase é mais precisa para DDR5-5600?</p><label><input type="radio" name="q7f" value="a"> O número 5600 descreve a taxa de 5600 MT/s; não é simplesmente a frequência física em MHz.</label><label><input type="radio" name="q7f" value="b"> Significa 5600 GB de capacidade.</label><label><input type="radio" name="q7f" value="c"> Significa que a RAM possui 5600 núcleos.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>A hierarquia existe porque precisamos equilibrar <strong>velocidade, capacidade, custo e permanência</strong>. Na RAM, aprenda a separar <strong>capacidade (GB), geração (DDR3/DDR4/DDR5), taxa (MT/s), formato e canais</strong>. No armazenamento, separe formato, interface e protocolo: M.2, SATA, PCIe e NVMe não são sinônimos. Memória virtual ajuda a administrar RAM limitada sem transformar armazenamento em RAM física.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se o hardware apenas executa instruções, quem organiza essas instruções e como diferentes tipos de software se encaixam no sistema?</p></div>
    <details class="sources-box"><summary>Fontes e créditos das imagens</summary><ul>
      <li><a href="https://www.jedec.org/" target="_blank" rel="noopener">JEDEC — padrões de memória DDR, LPDDR e HBM</a></li>
      <li><a href="https://www.ibm.com/think/topics/central-processing-unit" target="_blank" rel="noopener">IBM — CPU, memória e armazenamento</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Memoria_RAM.JPG" target="_blank" rel="noopener">Wikimedia Commons — RAM</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Open_hard-drive.jpg" target="_blank" rel="noopener">Wikimedia Commons — HDD aberto</a></li>
    </ul></details>
  `
});
