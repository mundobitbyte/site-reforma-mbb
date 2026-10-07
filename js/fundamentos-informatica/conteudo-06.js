window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "hardware",
  number: "06",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Hardware",
  technicalTitle: "hardware • placa-mãe • CPU • núcleos • threads • cache • GPU • NPU • SoC • PCIe • interfaces • fonte",
  title: "Quem faz o quê dentro de um computador?",
  objective: "Reconhecer os principais componentes físicos, interpretar especificações básicas de um computador atual e compreender por que cada parte existe dentro do sistema.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Por baixo da tela</span>
      <h2>Uma fotografia aparece em segundos. Nenhuma peça fez tudo sozinha.</h2>
      <p>O arquivo precisou ser lido, dados ficaram disponíveis para uso, instruções foram executadas e o resultado chegou à tela. <strong>O computador funciona porque componentes diferentes cooperam.</strong></p>
    </div>

    <div class="definition-box featured">
      <span class="term">Hardware</span>
      <p><strong>É o conjunto dos componentes físicos de um sistema computacional.</strong> Processador, memória RAM, SSD, placa-mãe, teclado e monitor são exemplos de hardware.</p>
    </div>

    <h3>Gabinete não é CPU</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Gabinete</span><p>É a estrutura que abriga e protege componentes como placa-mãe, processador, memória, armazenamento e fonte.</p></div>
      <div class="definition-box"><span class="term">CPU</span><p>A <strong>Unidade Central de Processamento</strong> é a unidade funcional responsável por buscar, interpretar e executar instruções.</p></div>
    </div>
    <div class="note-box compact"><strong>Portanto:</strong><p>Apontar para o gabinete e chamá-lo de “CPU” é um uso popular, mas tecnicamente incorreto.</p></div>

    <h3>A placa-mãe: onde os componentes se conectam</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/960px-Computer_Motherboard_Closeup.jpg"
          srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/330px-Computer_Motherboard_Closeup.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/960px-Computer_Motherboard_Closeup.jpg 960w"
          sizes="(max-width:700px) 92vw, 520px" alt="Close de uma placa-mãe de computador mostrando chips e conectores" width="960" height="636" loading="lazy" decoding="async">
        <figcaption><strong>Placa-mãe de computador.</strong> Ela fornece conexões e caminhos para que os componentes trabalhem juntos.<span class="credit">Lenharth Systems · CC0 · Wikimedia Commons.</span></figcaption>
      </figure>
      <div>
        <div class="definition-box"><span class="term">Placa-mãe</span><p>É a principal placa de circuito do computador. Nela encontramos conexões para processador, RAM, armazenamento, placas de expansão, energia e interfaces externas.</p></div>
        <p>A placa-mãe <strong>não é o “cérebro”</strong> do computador. Sua função central é interligar e dar suporte aos componentes do sistema.</p>
      </div>
    </div>

    <h3>Reconhecendo três peças que aparecem o tempo todo</h3>
    <div class="comparison-grid three">
      <article>
        <figure class="historical-media">
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Cpu.jpg?width=500" alt="Processador visto de cima" width="500" height="375" loading="lazy" decoding="async">
          <figcaption><strong>CPU em um encapsulamento de processador.</strong><span class="credit">Poooow · domínio público · Wikimedia Commons.</span></figcaption>
        </figure>
        <strong>Processador</strong><p>Contém uma ou mais unidades de processamento responsáveis pela execução das instruções.</p>
      </article>
      <article>
        <figure class="historical-media">
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Graphic_card.jpg?width=500" alt="Placa de vídeo dedicada" width="500" height="375" loading="lazy" decoding="async">
          <figcaption><strong>Placa de vídeo dedicada.</strong><span class="credit">Drgulcu · CC BY-SA 3.0 · Wikimedia Commons.</span></figcaption>
        </figure>
        <strong>Placa de vídeo</strong><p>É um conjunto que pode reunir GPU, memória de vídeo, alimentação, refrigeração e interfaces.</p>
      </article>
      <article>
        <figure class="historical-media">
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Dysk%20SSD%20Kingston%20NV2%202TB.jpg?width=500" alt="SSD em formato M.2" width="500" height="196" loading="lazy" decoding="async">
          <figcaption><strong>SSD em formato M.2.</strong><span class="credit">Jacek Halicki · CC BY-SA 4.0 · Wikimedia Commons.</span></figcaption>
        </figure>
        <strong>SSD</strong><p>Armazena sistema, programas e arquivos de forma não volátil.</p>
      </article>
    </div>

    <h3>CPU: executar instruções</h3>
    <p>O processador recebe instruções codificadas e realiza operações sobre dados. Em um modelo introdutório:</p>
    <div class="concept-flow" aria-label="Ciclo básico da CPU">
      <div><strong>Buscar</strong><span>obter a próxima instrução</span></div><span class="flow-arrow">→</span>
      <div><strong>Decodificar</strong><span>identificar a operação</span></div><span class="flow-arrow">→</span>
      <div><strong>Executar</strong><span>realizar a operação</span></div>
    </div>
    <p>Processadores modernos são muito mais sofisticados que esse desenho, mas o ciclo ajuda a compreender sua função essencial.</p>

    <h3>GHz mede tudo?</h3>
    <p><strong>1 GHz corresponde a um bilhão de ciclos por segundo.</strong> Porém, comparar processadores apenas pelo número de GHz pode enganar: arquitetura, trabalho realizado por ciclo, núcleos, cache, limites térmicos e o próprio software influenciam o desempenho.</p>

    <div class="two-col">
      <div class="definition-box"><span class="term">Núcleo — core</span><p>É uma unidade de processamento capaz de executar instruções. Um processador moderno pode reunir vários núcleos.</p></div>
      <div class="definition-box"><span class="term">Cache</span><p>É uma memória pequena e muito rápida que mantém dados e instruções próximos da CPU, reduzindo espera.</p></div>
    </div>
    <p>Ter mais núcleos pode permitir mais trabalho em paralelo, mas <strong>dobrar os núcleos não significa dobrar automaticamente a velocidade</strong>. O software precisa conseguir aproveitar esse paralelismo.</p>

    <h3>Núcleo e thread não são a mesma coisa</h3>
    <div class="comparison-grid">
      <article><strong>Núcleo físico</strong><p>É uma unidade real de processamento dentro do chip. Vários núcleos podem executar trabalho em paralelo.</p></article>
      <article><strong>Thread de hardware / processador lógico</strong><p>Algumas CPUs conseguem manter mais de um fluxo de execução por núcleo por técnicas como SMT. Por isso, <strong>8 núcleos / 16 threads</strong> não significa 16 núcleos físicos.</p></article>
    </div>
    <div class="note-box compact"><strong>Nem todos os núcleos precisam ser iguais.</strong><p>Algumas famílias atuais combinam núcleos de perfis diferentes, por exemplo priorizando desempenho ou eficiência. Isso depende da arquitetura e não deve ser assumido para todo processador.</p></div>

    <details class="sources-box"><summary>Aprofunde: cache</summary><p>Caches costumam ser organizados em níveis como <strong>L1, L2 e L3</strong>. A organização exata depende da arquitetura. Mais cache pode ajudar em determinadas cargas, mas tamanho isolado também não determina desempenho total.</p></details>

    <h3>RAM e armazenamento: dois trabalhos diferentes</h3>
    <div class="comparison-grid">
      <article><strong>RAM</strong><p>Mantém temporariamente programas e dados em uso. A RAM principal convencional é volátil.</p></article>
      <article><strong>SSD / HDD</strong><p>Preservam sistema operacional, programas e arquivos mesmo depois que o equipamento é desligado.</p></article>
    </div>
    <div class="mbb-pause-question"><strong>“Meu computador tem 16 GB.”</strong><p>A frase está incompleta. São 16 GB de RAM? armazenamento? memória de vídeo? <strong>A unidade pode ser a mesma, mas o recurso medido é diferente.</strong></p></div>

    <h3>CPU, GPU e NPU: especializações diferentes</h3>
    <div class="comparison-grid three">
      <article><strong>CPU</strong><p>Processador de propósito geral. É flexível e executa grande variedade de instruções e tarefas do sistema.</p></article>
      <article><strong>GPU</strong><p>É especializada em grande quantidade de operações paralelas. Tornou-se fundamental para gráficos e também pode acelerar vídeo, computação científica e IA.</p></article>
      <article><strong>NPU</strong><p><strong>Neural Processing Unit</strong> é um acelerador especializado em operações usadas por modelos de aprendizado de máquina e IA, especialmente inferência local eficiente.</p></article>
    </div>
    <p><strong>GPU e placa de vídeo não são exatamente a mesma coisa.</strong> A GPU é o processador gráfico; uma placa de vídeo dedicada é o conjunto que a utiliza. Também existem GPUs integradas, sem placa dedicada separada.</p>
    <div class="note-box compact"><strong>Ter NPU não acelera qualquer programa automaticamente.</strong><p>O software precisa usar recursos compatíveis com esse acelerador. Em PCs que possuem NPU e suporte adequado, sistemas atuais já conseguem mostrar seu uso em ferramentas de desempenho.</p></div>

    <h3>Quando muitas funções entram no mesmo chip</h3>
    <div class="definition-box"><span class="term">SoC — System on a Chip</span><p>É um circuito integrado que reúne vários blocos de um sistema, como CPU, controladores, interfaces e, conforme o projeto, GPU, NPU, memória integrada ou outros recursos.</p></div>
    <p>SoCs são muito comuns em smartphones, tablets e sistemas embarcados e também aparecem em computadores pessoais. <strong>Integração física não apaga as funções:</strong> CPU, GPU e controladores continuam exercendo papéis diferentes mesmo quando estão no mesmo chip.</p>

    <h3>Como os componentes trocam dados?</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Barramento / interconexão</span><p>É o conjunto de caminhos e mecanismos usados para transportar dados e sinais entre partes do sistema.</p></div>
      <div class="definition-box"><span class="term">PCI Express — PCIe</span><p>É uma interconexão de alta velocidade usada por dispositivos como placas de vídeo, adaptadores de rede e SSDs NVMe.</p></div>
    </div>

    <h3>Interface, conector e protocolo</h3>
    <p>Três palavras aparecem juntas, mas não significam exatamente a mesma coisa.</p>
    <div class="comparison-grid three">
      <article><strong>Interface</strong><p>Define como partes de um sistema se conectam e trocam informações em determinado contexto.</p></article>
      <article><strong>Conector</strong><p>É a forma física usada para encaixar ou ligar dispositivos e cabos.</p></article>
      <article><strong>Protocolo</strong><p>É um conjunto de regras que organiza uma comunicação.</p></article>
    </div>
    <div class="note-box compact"><strong>O formato do conector não conta a história inteira.</strong><p>Um conector USB-C, por exemplo, não determina sozinho a velocidade ou todos os recursos disponíveis. A mesma forma física pode ser usada por implementações com capacidades diferentes.</p></div>

    <h3>Energia e calor também fazem parte do sistema</h3>
    <div class="comparison-grid">
      <article><strong>Fonte de alimentação — PSU</strong><p>Converte e fornece energia elétrica nas condições necessárias aos componentes. Potência nominal é capacidade de fornecimento, não consumo constante.</p></article>
      <article><strong>Refrigeração</strong><p>Dissipadores, ventoinhas e outros sistemas removem calor para manter componentes dentro de faixas adequadas de temperatura.</p></article>
    </div>

    <h3>Aprenda a ler uma ficha técnica sem cair em números isolados</h3>
    <div class="hero-box">
      <span class="eyebrow">Exemplo de computador atual</span>
      <p><strong>CPU:</strong> 12 núcleos / 16 threads · até 5,0 GHz · 24 MB de cache<br>
      <strong>Memória:</strong> 16 GB DDR5-5600<br>
      <strong>Armazenamento:</strong> SSD NVMe PCIe 4.0 de 1 TB<br>
      <strong>Gráficos:</strong> GPU integrada<br>
      <strong>IA:</strong> NPU dedicada</p>
    </div>
    <div class="comparison-grid three">
      <article><strong>O que você pode concluir</strong><p>Há vários núcleos, 16 fluxos lógicos anunciados, memória DDR5, armazenamento NVMe e aceleradores integrados.</p></article>
      <article><strong>O que ainda falta saber</strong><p>Modelo e arquitetura da CPU, limites térmicos, desempenho real, configuração da RAM, qualidade do SSD e comportamento do software.</p></article>
      <article><strong>O erro comum</strong><p>Escolher “o maior número” em GHz, núcleos ou GB e concluir que o computador inteiro será melhor em qualquer tarefa.</p></article>
    </div>
    <p>A Aula 07 vai abrir justamente o trecho <strong>16 GB DDR5-5600</strong> e mostrar o que capacidade, geração e taxa significam.</p>

    <h3>Observe seu próprio computador</h3>
    <div class="mbb-pause-question"><strong>Windows: Gerenciador de Tarefas → Desempenho</strong><p>Observe CPU, memória, discos e GPU. Registre o modelo da CPU, quantidade de núcleos e processadores lógicos, RAM instalada e tipo de disco. Se o equipamento possuir NPU com suporte do sistema, ela também pode aparecer. <strong>Não altere nada: apenas transforme a ficha do seu computador em informação compreensível.</strong></p></div>

    <h3>Uma fotografia aberta no computador</h3>
    <div class="representation-flow" aria-label="Fluxo simplificado ao abrir uma fotografia">
      <div><strong>SSD</strong><span>arquivo permanece armazenado</span></div><span class="flow-arrow">→</span>
      <div><strong>RAM</strong><span>dados ficam disponíveis</span></div><span class="flow-arrow">→</span>
      <div><strong>CPU / GPU</strong><span>instruções e processamento</span></div><span class="flow-arrow">→</span>
      <div><strong>Tela</strong><span>resultado</span></div>
    </div>
    <p>O fluxo real possui muitas operações simultâneas. A ideia importante é perceber que <strong>o resultado depende da cooperação entre componentes</strong>.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Você separa função de aparência?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Gabinete abriga componentes; CPU é a unidade funcional de processamento."><p>Qual afirmação é tecnicamente correta?</p><label><input type="radio" name="q6a" value="a"> O gabinete é a CPU.</label><label><input type="radio" name="q6a" value="b"> A CPU é uma unidade de processamento; o gabinete abriga vários componentes.</label><label><input type="radio" name="q6a" value="c"> A placa-mãe é sempre a CPU.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Clock é apenas um dos fatores de desempenho."><p>Um processador de 5 GHz é necessariamente mais rápido que um de 4 GHz em qualquer tarefa?</p><label><input type="radio" name="q6b" value="a"> Sim, sempre.</label><label><input type="radio" name="q6b" value="b"> Sim, se tiver mais RAM.</label><label><input type="radio" name="q6b" value="c"> Não. O desempenho depende de vários fatores.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="O conector é apenas a parte física; recursos dependem também das especificações e protocolos implementados."><p>Dois equipamentos usam conector USB-C. Podemos concluir que oferecem exatamente os mesmos recursos?</p><label><input type="radio" name="q6c" value="a"> Não.</label><label><input type="radio" name="q6c" value="b"> Sim, o formato determina tudo.</label><label><input type="radio" name="q6c" value="c"> Sim, desde que sejam computadores.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Threads lógicas podem compartilhar um núcleo físico; 16 threads não significam necessariamente 16 núcleos."><p>Uma ficha diz “8 núcleos / 16 threads”. O que ela NÃO permite afirmar?</p><label><input type="radio" name="q6d" value="a"> Que o processador anuncia oito núcleos físicos.</label><label><input type="radio" name="q6d" value="b"> Que existem 16 núcleos físicos.</label><label><input type="radio" name="q6d" value="c"> Que há mais de um fluxo lógico por núcleo em parte da arquitetura.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="NPU é um acelerador especializado; software precisa ser projetado para utilizá-la."><p>Um computador possui NPU. Qual conclusão é mais correta?</p><label><input type="radio" name="q6e" value="a"> Qualquer programa ficará automaticamente duas vezes mais rápido.</label><label><input type="radio" name="q6e" value="b"> A NPU substitui a CPU.</label><label><input type="radio" name="q6e" value="c"> Ela pode acelerar cargas compatíveis de IA quando o software sabe utilizá-la.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p><strong>Hardware</strong> é a parte física. CPU executa instruções; núcleos e threads descrevem formas diferentes de paralelismo; cache reduz espera; RAM mantém dados em uso; SSD/HDD preservam arquivos; GPU e NPU aceleram classes específicas de trabalho; SoCs integram várias funções; placa-mãe e interconexões permitem cooperação entre componentes. <strong>Ficha técnica precisa ser interpretada, não apenas comparada por números maiores.</strong></p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se cache, RAM e SSD conseguem guardar dados, por que o computador precisa dos três — e o que significam nomes como DDR4, DDR5 e NVMe?</p></div>

    <details class="sources-box"><summary>Fontes e créditos das imagens</summary><ul>
      <li><a href="https://csrc.nist.gov/glossary/term/hardware" target="_blank" rel="noopener">NIST — Hardware</a></li>
      <li><a href="https://www.ibm.com/think/topics/central-processing-unit" target="_blank" rel="noopener">IBM — CPU</a></li>
      <li><a href="https://learn.microsoft.com/pt-br/windows/ai/npu-devices/" target="_blank" rel="noopener">Microsoft Learn — NPU em PCs atuais</a></li>
      <li><a href="https://learn.microsoft.com/pt-br/windows/ai/faq" target="_blank" rel="noopener">Microsoft Learn — inspeção de GPU/NPU no Windows</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Computer_Motherboard_Closeup.jpg" target="_blank" rel="noopener">Wikimedia Commons — placa-mãe</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Cpu.jpg" target="_blank" rel="noopener">Wikimedia Commons — CPU</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Graphic_card.jpg" target="_blank" rel="noopener">Wikimedia Commons — placa de vídeo (Drgulcu, CC BY-SA 3.0)</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:2023_Dysk_SSD_Kingston_NV2_2TB.jpg" target="_blank" rel="noopener">Wikimedia Commons — SSD M.2 (Jacek Halicki, CC BY-SA 4.0)</a></li>
    </ul></details>
  `
});
