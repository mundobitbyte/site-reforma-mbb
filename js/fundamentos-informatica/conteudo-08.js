window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "software-programacao",
  number: "08",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Software e programação",
  technicalTitle: "software de sistema • aplicativos • desenvolvimento • algoritmo • linguagem • compilação • processo • firmware • driver • bug",
  title: "Se o hardware executa instruções, quem diz o que fazer?",
  objective: "Organizar os principais tipos de software e relacionar problema, algoritmo, código e execução, distinguindo programa, processo, linguagem, firmware, driver e diferentes tipos de erro.",
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">A parte lógica</span><h2>As mesmas peças conseguem editar texto, tocar música ou executar um jogo.</h2><p>O hardware fornece capacidade de processamento. O que muda é <strong>quais instruções e dados serão usados</strong>. É isso que nos leva ao software.</p></div>

    <div class="definition-box featured"><span class="term">Software</span><p><strong>É o conjunto de programas, instruções e dados associados que fazem um sistema computacional realizar determinadas funções.</strong></p></div>

    <h3>Programa, software e aplicativo</h3>
    <div class="comparison-grid three"><article><strong>Programa</strong><p>Conjunto organizado de instruções capaz de realizar uma tarefa.</p></article><article><strong>Software</strong><p>Conceito mais amplo, podendo envolver programas, bibliotecas, configurações e dados associados.</p></article><article><strong>Aplicativo</strong><p>Software voltado principalmente a uma tarefa útil para o usuário, como navegador, planilha ou jogo.</p></article></div>

    <h3>Nem todo software faz o mesmo trabalho</h3>
    <p>Imagine um computador com Windows, driver de vídeo, navegador, editor de textos, VS Code e compilador. Chamar tudo apenas de “programa” é possível no uso cotidiano, mas não ajuda a entender <strong>o papel de cada software dentro do sistema</strong>.</p>
    <div class="comparison-grid three">
      <article><strong>Software de sistema</strong><p>Fornece a base para o funcionamento e a administração do computador. Sistema operacional, drivers e muitos utilitários entram aqui.</p></article>
      <article><strong>Software aplicativo</strong><p>Ajuda o usuário a realizar tarefas específicas: navegador, editor de texto, planilha, sistema de gestão, jogo, editor de imagem.</p></article>
      <article><strong>Software de desenvolvimento</strong><p>Ajuda a criar e testar outros programas: editores/IDEs, compiladores, interpretadores, depuradores e ferramentas de desenvolvimento.</p></article>
    </div>
    <div class="note-box compact"><strong>E “software básico”?</strong><p>Esse nome aparece em muitos materiais mais antigos como uma categoria ampla para software ligado ao funcionamento do computador. Ele continua compreensível, mas <strong>software de sistema</strong> é uma expressão mais clara para organizar sistema operacional, drivers e utilitários.</p></div>

    <h3>Firmware merece aparecer na classificação</h3>
    <p>Firmware é software, mas fica muito próximo do equipamento que controla. Ele aparece em placas-mãe, roteadores, SSDs, impressoras, câmeras e inúmeros sistemas embarcados.</p>
    <div class="concept-flow"><div><strong>Hardware</strong><span>parte física</span></div><span class="flow-arrow">↔</span><div><strong>Firmware / drivers / SO</strong><span>controle e serviços</span></div><span class="flow-arrow">↔</span><div><strong>Aplicativos</strong><span>tarefas do usuário</span></div></div>
    <p>Essa figura é uma simplificação: as camadas podem interagir de formas diferentes. O objetivo é perceber que <strong>software também possui papéis e níveis</strong>.</p>

    <div class="danger-box compact"><strong>Linguagem de programação não é uma categoria de software.</strong><p>Python, Java, C e JavaScript são <strong>linguagens formais</strong>. Já CPython, compiladores, IDEs e depuradores são softwares que implementam ou dão suporte ao uso dessas linguagens.</p></div>

    <h3>Antes do código existe um problema</h3>
    <div class="hero-box">
      <span class="eyebrow">Situação</span>
      <h2>Uma escola precisa calcular o resultado final de 500 alunos.</h2>
      <p>Fazer tudo como um único problema seria confuso. Então começamos perguntando: <strong>o que pode ser separado? o que se repete? quais informações realmente importam? qual sequência resolve o caso de cada aluno?</strong></p>
    </div>

    <h3>O raciocínio vai ganhando nomes</h3>
    <p>Primeiro separamos o trabalho: obter notas, calcular média, determinar situação e registrar resultado. Isso é <strong>decomposição</strong>.</p>
    <p>Depois percebemos que o mesmo procedimento se repete para cada aluno. Isso é <strong>reconhecimento de padrões</strong>.</p>
    <p>Para calcular a média, talvez não precisemos da cor do uniforme ou do endereço do estudante. Focamos apenas no que importa para aquele problema. Isso é <strong>abstração</strong>.</p>
    <p>Finalmente organizamos uma sequência de passos que pode ser repetida. Chegamos ao <strong>algoritmo</strong>.</p>

    <div class="definition-box featured"><span class="term">Pensamento computacional</span><p>É uma forma estruturada de formular problemas e soluções usando ideias como <strong>decomposição, reconhecimento de padrões, abstração e algoritmos</strong>.</p></div>
    <div class="definition-box"><span class="term">Algoritmo</span><p>É uma sequência finita e organizada de passos para resolver um problema ou realizar uma tarefa.</p></div>
    <div class="example-box compact"><strong>Para cada aluno:</strong><p>receber notas → calcular média → aplicar o critério → registrar o resultado.</p></div>

    <h3>Quando a solução vira código</h3>
    <div class="definition-box"><span class="term">Linguagem de programação</span><p>É uma linguagem formal usada para expressar instruções e estruturas de um programa segundo regras de sintaxe e significado.</p></div>
    <div class="example-box"><strong>Exemplo em Python</strong><p><code>nota1 = 8</code><br><code>nota2 = 6</code><br><code>media = (nota1 + nota2) / 2</code><br><code>print(media)</code></p></div>
    <p>Esse texto é o <strong>código-fonte</strong>: uma representação do programa escrita para pessoas e ferramentas de desenvolvimento.</p>

    <h3>A CPU não executa a palavra <code>print</code></h3>
    <p>Na Aula 05 vimos que instruções também precisam ser representadas em bits. Cada arquitetura de processador define operações que consegue executar e como essas instruções são codificadas.</p>
    <div class="two-col">
      <div class="definition-box"><span class="term">ISA — Instruction Set Architecture</span><p>É a interface arquitetural que define, entre outras coisas, o conjunto de instruções visível ao software, registradores e formas de operação da CPU. x86-64 e Arm são exemplos de famílias de ISA.</p></div>
      <div class="definition-box"><span class="term">Código de máquina</span><p>É a codificação das instruções em uma forma executável diretamente pela arquitetura do processador.</p></div>
    </div>
    <div class="representation-flow" aria-label="Do problema à execução"><div><strong>Problema</strong></div><span class="flow-arrow">→</span><div><strong>Algoritmo e código-fonte</strong></div><span class="flow-arrow">→</span><div><strong>Tradução / ambiente de execução</strong></div><span class="flow-arrow">→</span><div><strong>Instruções executáveis</strong></div></div>

    <h3>Como o código chega à máquina?</h3>
    <div class="comparison-grid"><article><strong>Compilador</strong><p>Traduz código para outra representação, que pode ser código de máquina ou uma forma intermediária.</p></article><article><strong>Interpretador</strong><p>Executa um programa por meio de outro software durante a execução, sem exigir necessariamente um executável nativo completo produzido antecipadamente.</p></article></div>
    <div class="note-box compact"><strong>“Compilada” × “interpretada” não é uma divisão absoluta.</strong><p>Implementações reais podem combinar tradução prévia, bytecode, máquina virtual e compilação durante a execução.</p></div>
    <details class="sources-box"><summary>Aprofunde: bytecode e JIT</summary><p>CPython transforma código Python em <strong>bytecode</strong> executado pela máquina virtual do Python. Plataformas como Java, .NET e motores modernos de JavaScript podem utilizar <strong>JIT — Just-In-Time Compilation</strong>, compilando partes do código durante a execução.</p></details>

    <h3>Programa armazenado × processo em execução</h3>
    <div class="two-col"><div class="definition-box"><span class="term">Programa</span><p>Conjunto de instruções armazenado em arquivos ou outra forma de software.</p></div><div class="definition-box"><span class="term">Processo</span><p>Uma instância de programa em execução, com estado, memória e recursos associados.</p></div></div>
    <p>O navegador instalado no SSD é software armazenado. Ao abri-lo, o sistema operacional cria processos para executar seu trabalho.</p>

    <h3>Firmware e driver</h3>
    <div class="comparison-grid"><article><strong>Firmware</strong><p>Software armazenado de forma não volátil no equipamento e fortemente ligado ao controle de suas funções.</p></article><article><strong>Driver</strong><p>Software que permite ao sistema operacional controlar e se comunicar com um dispositivo ou classe de dispositivos.</p></article></div>
    <p>Firmware continua sendo <strong>software</strong>. E um problema de driver pode produzir sintomas que parecem defeito físico.</p>

    <h3>Software livre, proprietário e código aberto</h3>
    <div class="comparison-grid three"><article><strong>Software livre</strong><p>Enfatiza liberdades para executar, estudar, modificar e redistribuir, conforme a licença.</p></article><article><strong>Proprietário</strong><p>Possui restrições definidas pelo detentor dos direitos, podendo limitar código-fonte, modificação e redistribuição.</p></article><article><strong>Código aberto</strong><p>É distribuído sob licenças que permitem acesso e direitos sobre o código segundo critérios de open source.</p></article></div>
    <div class="note-box compact"><strong>Preço não define liberdade.</strong><p>Software gratuito pode continuar sendo proprietário; software livre pode ser distribuído gratuitamente ou comercialmente.</p></div>

    <h3>Quando o programa não faz o que deveria</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/960px-First_Computer_Bug%2C_1947.jpg" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/330px-First_Computer_Bug%2C_1947.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/960px-First_Computer_Bug%2C_1947.jpg 960w" sizes="(max-width:700px) 92vw, 520px" alt="Página do registro do Harvard Mark II com uma mariposa colada e a anotação de 1947" width="960" height="759" loading="lazy" decoding="async">
        <figcaption><strong>A mariposa do Harvard Mark II, 1947.</strong> O registro brinca com um termo técnico que já existia: “First actual case of bug being found”.<span class="credit">U.S. Navy / Naval Surface Warfare Center · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div><div class="definition-box"><span class="term">Bug</span><p>É um defeito em hardware ou software que pode provocar comportamento incorreto ou inesperado.</p></div><p>Em 1947, uma mariposa foi encontrada presa em um relé do <strong>Harvard Mark II</strong> e colada ao registro com uma brincadeira sobre um “bug real”.</p><p><strong>A mariposa não criou o termo.</strong> O uso de <em>bug</em> para defeitos técnicos era anterior.</p></div>
    </div>
    <p>Grace Hopper esteve ligada à equipe e ajudou a tornar o episódio famoso, mas sua contribuição histórica vai muito além dessa história, incluindo trabalho importante no desenvolvimento inicial de compiladores e linguagens.</p>

    <h3>Debugging — depuração</h3>
    <div class="definition-box"><span class="term">Depuração</span><p>É o processo de reproduzir um problema, localizar sua causa, compreendê-la, corrigi-la e testar novamente.</p></div>
    <div class="comparison-grid three"><article><strong>Erro de sintaxe</strong><p>O código viola regras da linguagem.</p></article><article><strong>Erro de execução</strong><p>O programa começa a rodar, mas encontra uma situação que impede ou compromete a execução.</p></article><article><strong>Erro lógico</strong><p>O programa executa, porém a lógica produz resultado incorreto.</p></article></div>
    <div class="mbb-pause-question"><strong>Um programa pode executar sem estar correto.</strong><p>Se uma fórmula calcula 10% de desconto como 1%, o programa pode abrir e terminar normalmente — e ainda assim estar errado.</p></div>

    <section class="checkpoint compact-check" data-quiz-group><span class="eyebrow">Verificação rápida</span><h3>Você entendeu o caminho do problema até a execução?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Dividir o problema de 500 alunos em entrada, cálculo, decisão e registro é decomposição."><p>Ao separar o problema dos 500 alunos em partes menores, qual ideia está sendo usada?</p><label><input type="radio" name="q8a" value="a"> Compactação.</label><label><input type="radio" name="q8a" value="b"> Decomposição.</label><label><input type="radio" name="q8a" value="c"> Criptografia.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Código-fonte precisa passar por mecanismos de tradução ou execução até chegar às instruções que a arquitetura consegue executar."><p>A CPU executa diretamente palavras de Python como <code>print</code>?</p><label><input type="radio" name="q8b" value="a"> Sim, qualquer CPU entende Python nativamente.</label><label><input type="radio" name="q8b" value="b"> Sim, se houver RAM suficiente.</label><label><input type="radio" name="q8b" value="c"> Não. O código precisa chegar a uma forma executável pela arquitetura.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Erro lógico pode produzir uma resposta errada mesmo sem travamento."><p>Um programa executa até o fim, mas calcula uma média incorreta. Qual hipótese faz sentido?</p><label><input type="radio" name="q8c" value="a"> Erro lógico.</label><label><input type="radio" name="q8c" value="b"> Necessariamente defeito da placa-mãe.</label><label><input type="radio" name="q8c" value="c"> Não pode haver bug se não travou.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Python é uma linguagem; CPython é uma implementação de software que executa programas escritos nessa linguagem."><p>Qual frase é mais precisa?</p><label><input type="radio" name="q8d" value="a"> Python é um periférico de entrada.</label><label><input type="radio" name="q8d" value="b"> Python é uma linguagem de programação; uma implementação como CPython é software.</label><label><input type="radio" name="q8d" value="c"> Toda linguagem de programação é um sistema operacional.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Um navegador é aplicativo; sistema operacional e drivers pertencem ao software de sistema."><p>Qual exemplo é principalmente software aplicativo?</p><label><input type="radio" name="q8e" value="a"> Driver da placa de vídeo.</label><label><input type="radio" name="q8e" value="b"> Kernel do sistema operacional.</label><label><input type="radio" name="q8e" value="c"> Navegador Web.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Software pode cumprir papéis diferentes: <strong>sistema, aplicação, desenvolvimento e firmware</strong> são categorias úteis para organizar o ecossistema. Linguagem de programação é uma linguagem formal, não simplesmente “mais um tipo de programa”. Programação começa pela compreensão do problema; o código-fonte precisa chegar a instruções compatíveis com a arquitetura da CPU. Programa e processo são diferentes; firmware e drivers também são software.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se vários programas querem CPU, RAM, arquivos, rede e dispositivos ao mesmo tempo, quem organiza esse compartilhamento — e quem prepara o computador antes de o sistema operacional começar?</p></div>

    <details class="sources-box"><summary>Fontes e crédito da imagem</summary><ul>
      <li><a href="https://csrc.nist.gov/glossary/term/software" target="_blank" rel="noopener">NIST — Software</a></li>
      <li><a href="https://csrc.nist.gov/glossary/term/firmware" target="_blank" rel="noopener">NIST — Firmware</a></li>
      <li><a href="https://americanhistory.si.edu/collections/object/nmah_334663" target="_blank" rel="noopener">Smithsonian — registro do “computer bug”</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:First_Computer_Bug,_1947.jpg" target="_blank" rel="noopener">Wikimedia Commons — fotografia do registro</a></li>
    </ul></details>
  `
});
