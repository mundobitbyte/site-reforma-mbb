window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "exercicios-desafios",
  number: "99",
  unit: "Fechamento · Exercícios e desafios",
  menuTitle: "Exercícios e desafios",
  technicalTitle: "compreensão • diagnóstico • integração • aplicação",
  title: "Você consegue usar os fundamentos para explicar e resolver situações reais?",
  objective: "Consolidar o módulo distinguindo conceitos, interpretando situações, lendo especificações, diagnosticando por evidências e integrando as camadas de um sistema computacional.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Agora o conhecimento precisa trabalhar</span>
      <h2>Decorar que DNS significa Domain Name System é fácil. Perceber que o DNS é o suspeito quando IP funciona e nome não funciona é outra coisa.</h2>
      <p>Os exercícios abaixo começam separando conceitos que costumam ser confundidos e avançam até situações em que você precisa <strong>formular hipóteses, interpretar especificações, escolher evidências e conectar várias aulas ao mesmo tempo</strong>.</p>
    </div>

    <div class="note-box compact">
      <strong>Como usar esta aula</strong>
      <p>Responda primeiro sem voltar ao conteúdo. Depois confira. Quando errar, não memorize a letra correta: explique <strong>qual critério torna uma alternativa melhor que as outras</strong>. Nos desafios abertos, formule sua resposta antes de abrir o raciocínio sugerido.</p>
    </div>

    <h3>Nível 1 — Separar o que parece igual</h3>
    <p>Muitos erros em informática começam quando duas coisas relacionadas viram sinônimos. Aqui o objetivo é recuperar as distinções que sustentam o restante do módulo.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Compreensão</span>
      <h3>1. Qual conceito resolve qual problema?</h3>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Geração descreve uma etapa histórica marcada por tecnologias predominantes; mainframe e supercomputador são categorias de máquinas com finalidades diferentes.">
        <p>Um mainframe moderno pertence necessariamente a uma geração antiga?</p>
        <label><input type="radio" name="q99a1" value="a"> Sim, mainframe é sinônimo de segunda geração.</label>
        <label><input type="radio" name="q99a1" value="b"> Sim, porque mainframes não usam microprocessadores.</label>
        <label><input type="radio" name="q99a1" value="c"> Não. Geração histórica e categoria de uso são classificações diferentes.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Bit representa um de dois estados; byte é uma sequência de 8 bits.">
        <p>Qual afirmação diferencia corretamente bit e byte?</p>
        <label><input type="radio" name="q99a2" value="a"> Bit e byte são apenas dois nomes para a mesma unidade.</label>
        <label><input type="radio" name="q99a2" value="b"> Bit representa um estado binário; 8 bits formam um byte.</label>
        <label><input type="radio" name="q99a2" value="c"> Byte é sempre uma letra e bit é sempre um número.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="RAM é memória de trabalho volátil; SSD/HDD preservam dados de forma não volátil e possuem características de acesso diferentes.">
        <p>Por que 16 GB de RAM e 16 GB de armazenamento não significam o mesmo recurso?</p>
        <label><input type="radio" name="q99a3" value="a"> Porque medem capacidades de componentes com funções e características diferentes.</label>
        <label><input type="radio" name="q99a3" value="b"> Porque RAM é medida em bits e armazenamento somente em bytes.</label>
        <label><input type="radio" name="q99a3" value="c"> Porque armazenamento só existe enquanto o computador está ligado.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Programa é o conjunto de instruções armazenado; processo é uma instância desse programa em execução.">
        <p>O navegador está instalado no SSD e foi aberto duas vezes. Qual distinção faz sentido?</p>
        <label><input type="radio" name="q99a4" value="a"> Cada janela transforma o navegador em um novo sistema operacional.</label>
        <label><input type="radio" name="q99a4" value="b"> Programa e processo são sempre a mesma coisa.</label>
        <label><input type="radio" name="q99a4" value="c"> O programa está armazenado; sua execução envolve um ou mais processos.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Wi-Fi descreve uma tecnologia de rede local sem fio. A rede pode continuar conectada mesmo quando não há acesso externo à Internet.">
        <p>O celular mostra o ícone de Wi-Fi. O que isso prova?</p>
        <label><input type="radio" name="q99a5" value="a"> Que qualquer site da Internet está acessível.</label>
        <label><input type="radio" name="q99a5" value="b"> Que existe uma conexão com uma rede Wi-Fi; Internet é outra verificação.</label>
        <label><input type="radio" name="q99a5" value="c"> Que o DNS e o servidor Web estão funcionando.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Autenticação verifica a identidade apresentada; autorização determina quais ações essa identidade pode executar.">
        <p>Um aluno consegue entrar no sistema escolar, mas não pode alterar notas. O que aconteceu?</p>
        <label><input type="radio" name="q99a6" value="a"> Foi autenticado, mas não possui autorização para essa ação.</label>
        <label><input type="radio" name="q99a6" value="b"> Não foi autenticado.</label>
        <label><input type="radio" name="q99a6" value="c"> O sistema não possui segurança.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Banco de dados é a coleção organizada de dados; SGBD é o software que cria, consulta, controla e administra esses dados.">
        <p>Qual frase distingue banco de dados e SGBD?</p>
        <label><input type="radio" name="q99a7" value="a"> São obrigatoriamente o mesmo arquivo.</label>
        <label><input type="radio" name="q99a7" value="b"> SGBD é apenas outro nome para uma tabela.</label>
        <label><input type="radio" name="q99a7" value="c"> O banco contém dados organizados; o SGBD é o software que os gerencia.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Virtualização é uma tecnologia de abstração de recursos; computação em nuvem é um modelo de fornecimento sob demanda que pode usar virtualização, mas envolve mais que isso.">
        <p>Virtualização e nuvem são sinônimos?</p>
        <label><input type="radio" name="q99a8" value="a"> Sim, toda VM é automaticamente uma nuvem.</label>
        <label><input type="radio" name="q99a8" value="b"> Não. Virtualização é tecnologia; nuvem é um modelo de fornecimento de recursos.</label>
        <label><input type="radio" name="q99a8" value="c"> Sim, desde que o servidor use Linux.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Automação pode usar regras explícitas e funcionar sem aprendizado de máquina. IA é uma área mais ampla e não é requisito de toda automação.">
        <p>Um sistema liga o ventilador sempre que a temperatura ultrapassa 30 °C usando uma regra fixa. Isso é necessariamente IA?</p>
        <label><input type="radio" name="q99a9" value="a"> Não. Pode ser apenas automação baseada em regra explícita.</label>
        <label><input type="radio" name="q99a9" value="b"> Sim. Toda decisão feita por software é IA.</label>
        <label><input type="radio" name="q99a9" value="c"> Sim, porque existe um sensor.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="CPU descreve a unidade funcional de processamento; gabinete é a estrutura que abriga vários componentes.">
        <p>Alguém aponta para a torre do computador e diz: “essa é a CPU”. Qual correção é mais precisa?</p>
        <label><input type="radio" name="q99a10" value="a"> Está correto: CPU significa qualquer caixa de computador.</label>
        <label><input type="radio" name="q99a10" value="b"> A CPU é a placa-mãe inteira.</label>
        <label><input type="radio" name="q99a10" value="c"> Aquilo é o gabinete; CPU é a unidade de processamento.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Uma tela sensível ao toque exibe informação e também recebe toques; o papel depende da função analisada.">
        <p>Como classificar uma tela sensível ao toque em relação ao computador?</p>
        <label><input type="radio" name="q99a11" value="a"> Apenas entrada.</label>
        <label><input type="radio" name="q99a11" value="b"> Entrada e saída.</label>
        <label><input type="radio" name="q99a11" value="c"> Apenas armazenamento.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Python é uma linguagem formal; CPython é uma implementação de software que executa programas escritos em Python.">
        <p>Qual frase diferencia linguagem de programação e software?</p>
        <label><input type="radio" name="q99a12" value="a"> Toda linguagem é um sistema operacional.</label>
        <label><input type="radio" name="q99a12" value="b"> Python e CPython são exatamente a mesma categoria.</label>
        <label><input type="radio" name="q99a12" value="c"> Python é uma linguagem; CPython é software que a implementa.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir Nível 1</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <h3>Nível 2 — Ler situações, não palavras isoladas</h3>
    <p>Agora o nome do conceito já não basta. Em cada caso, procure o mecanismo que realmente explica o que aconteceu.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Aplicação</span>
      <h3>2. O que está acontecendo por baixo da aparência?</h3>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A extensão faz parte do nome. Renomear não converte a estrutura interna dos dados.">
        <p>Uma pessoa renomeia <code>foto.jpg</code> para <code>foto.pdf</code> e o arquivo deixa de abrir corretamente. Qual explicação é melhor?</p>
        <label><input type="radio" name="q99b1" value="a"> O sistema converteu JPEG para PDF e perdeu qualidade.</label>
        <label><input type="radio" name="q99b1" value="b"> O nome mudou, mas o formato interno continuou sendo JPEG.</label>
        <label><input type="radio" name="q99b1" value="c"> PDFs não podem ser armazenados em SSD.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="M.2 descreve um formato/especificação de módulo; SSDs M.2 podem usar SATA ou PCIe/NVMe conforme o dispositivo.">
        <p>Dois SSDs possuem formato M.2. Podemos concluir que ambos são NVMe e têm o mesmo desempenho?</p>
        <label><input type="radio" name="q99b2" value="a"> Sim, M.2 e NVMe são sinônimos.</label>
        <label><input type="radio" name="q99b2" value="b"> Sim, porque o formato físico determina o protocolo.</label>
        <label><input type="radio" name="q99b2" value="c"> Não. O formato não determina sozinho interface, protocolo ou desempenho.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Domínio é parte do sistema de nomes; URL identifica um recurso e inclui informações adicionais como esquema, host, caminho e possivelmente consulta.">
        <p>Em <code>https://exemplo.com/produtos/25</code>, qual afirmação é correta?</p>
        <label><input type="radio" name="q99b3" value="a"> <code>exemplo.com</code> é o domínio/host; o texto completo é uma URL.</label>
        <label><input type="radio" name="q99b3" value="b"> O texto inteiro é apenas um endereço IP.</label>
        <label><input type="radio" name="q99b3" value="c"> <code>https</code> é o nome do servidor físico.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="404 é uma resposta HTTP indicando que o recurso solicitado não foi encontrado; a comunicação com o servidor pode ter ocorrido normalmente.">
        <p>Um site devolve HTTP 404. O que isso demonstra?</p>
        <label><input type="radio" name="q99b4" value="a"> Que a Internet do usuário obrigatoriamente caiu.</label>
        <label><input type="radio" name="q99b4" value="b"> Que o servidor respondeu, mas não encontrou o recurso solicitado naquele endereço.</label>
        <label><input type="radio" name="q99b4" value="c"> Que o computador está sem RAM.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="JSON é um formato textual de dados; API é a interface/contrato de interação entre softwares.">
        <p>Um aplicativo recebe <code>{"temperatura":27}</code> de um serviço. Qual relação está correta?</p>
        <label><input type="radio" name="q99b5" value="a"> JSON é a própria API.</label>
        <label><input type="radio" name="q99b5" value="b"> API e JSON são duas linguagens de programação equivalentes.</label>
        <label><input type="radio" name="q99b5" value="c"> A API pode usar JSON como formato para transportar dados.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Um sistema embarcado pode executar automação local sem Internet. IoT envolve conectividade e integração por redes; a função local pode continuar mesmo sem nuvem se o projeto permitir.">
        <p>Uma irrigação mede o solo e liga a bomba localmente, mas não envia nada pela rede. O que podemos afirmar?</p>
        <label><input type="radio" name="q99b6" value="a"> É um sistema embarcado/automatizado; não precisa ser IoT.</label>
        <label><input type="radio" name="q99b6" value="b"> Não existe computação porque não há Internet.</label>
        <label><input type="radio" name="q99b6" value="c"> Todo sensor transforma automaticamente o projeto em IA.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="HTTPS protege a comunicação e autentica o servidor segundo o certificado, mas não garante que o conteúdo ou a organização sejam honestos.">
        <p>Uma página de phishing apresenta HTTPS e cadeado válido. Qual conclusão é correta?</p>
        <label><input type="radio" name="q99b7" value="a"> O cadeado garante que a empresa é honesta.</label>
        <label><input type="radio" name="q99b7" value="b"> A conexão pode estar protegida mesmo sendo um site malicioso.</label>
        <label><input type="radio" name="q99b7" value="c"> HTTPS impede engenharia social.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Nuvem abstrai infraestrutura, mas continua dependendo de servidores, armazenamento, rede, energia e datacenters físicos.">
        <p>Uma empresa move um sistema para a nuvem. O hardware físico deixou de existir?</p>
        <label><input type="radio" name="q99b8" value="a"> Sim, a nuvem substitui processadores por software.</label>
        <label><input type="radio" name="q99b8" value="b"> Sim, desde que seja SaaS.</label>
        <label><input type="radio" name="q99b8" value="c"> Não. A infraestrutura física continua existindo, apenas foi abstraída e administrada de outra forma.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="35 decimal é 32 + 2 + 1; em oito posições isso resulta em 00100011.">
        <p>Qual representação binária de 8 bits corresponde a <strong>35₁₀</strong>?</p>
        <label><input type="radio" name="q99b9" value="a"> <code>00100011</code></label>
        <label><input type="radio" name="q99b9" value="b"> <code>00110101</code></label>
        <label><input type="radio" name="q99b9" value="c"> <code>00011100</code></label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="16 GB é capacidade, DDR5 é geração e 5600 MT/s é taxa de transferências; são propriedades diferentes.">
        <p>Uma ficha anuncia <code>16 GB DDR5-5600</code>. Qual leitura está correta?</p>
        <label><input type="radio" name="q99b10" value="a"> DDR5 significa 5 GB de memória.</label>
        <label><input type="radio" name="q99b10" value="b"> 16 GB é capacidade; DDR5 é geração; 5600 MT/s é taxa.</label>
        <label><input type="radio" name="q99b10" value="c"> 5600 indica a quantidade de núcleos da RAM.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Threads lógicas podem compartilhar núcleos; uma ficha 8C/16T não representa automaticamente 16 núcleos físicos.">
        <p>Um processador é anunciado como <strong>8 núcleos / 16 threads</strong>. O que podemos afirmar?</p>
        <label><input type="radio" name="q99b11" value="a"> Possui obrigatoriamente 16 núcleos físicos.</label>
        <label><input type="radio" name="q99b11" value="b"> Threads e núcleos são sempre a mesma coisa.</label>
        <label><input type="radio" name="q99b11" value="c"> Possui oito núcleos anunciados e 16 fluxos lógicos; isso não equivale a 16 núcleos físicos.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="NPU é um acelerador para determinadas cargas de IA; software precisa ser compatível para utilizá-la.">
        <p>Um notebook possui NPU. Qual conclusão é segura?</p>
        <label><input type="radio" name="q99b12" value="a"> Ele possui um acelerador que pode executar cargas compatíveis de IA; o software precisa utilizá-lo.</label>
        <label><input type="radio" name="q99b12" value="b"> Todo programa ficará automaticamente mais rápido.</label>
        <label><input type="radio" name="q99b12" value="c"> A NPU substitui CPU, RAM e GPU.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir Nível 2</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <h3>Nível 3 — Diagnosticar por evidências</h3>
    <p>O sintoma é apenas o começo. Em cada caso, escolha a hipótese mais sustentada pelos testes apresentados — sem transformar uma evidência limitada em certeza absoluta.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Diagnóstico</span>
      <h3>3. Qual hipótese ganhou força?</h3>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Se IP externo responde e nomes não resolvem, a conectividade IP existe e a hipótese de falha de resolução DNS ganha força.">
        <p><code>ping 8.8.8.8</code> responde, mas <code>nslookup exemplo.com</code> falha. Qual hipótese merece prioridade?</p>
        <label><input type="radio" name="q99c1" value="a"> O monitor está sem driver.</label>
        <label><input type="radio" name="q99c1" value="b"> Há um problema relacionado à resolução DNS ou à configuração usada para acessá-la.</label>
        <label><input type="radio" name="q99c1" value="c"> O SSD obrigatoriamente queimou.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="RAM quase cheia com paginação intensa pode produzir lentidão mesmo sem CPU saturada, pois armazenamento é muito mais lento que RAM.">
        <p>Um PC está lento. CPU fica em 20%, RAM em 97% e o pagefile é usado intensamente. O que essa evidência sugere?</p>
        <label><input type="radio" name="q99c2" value="a"> O processador obrigatoriamente precisa ser trocado.</label>
        <label><input type="radio" name="q99c2" value="b"> O Wi-Fi é a única causa possível.</label>
        <label><input type="radio" name="q99c2" value="c"> Pressão de memória e paginação são hipóteses fortes para a lentidão.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Desempenho que cai sob carga acompanhado de temperatura elevada pode estar relacionado a thermal throttling; ainda é preciso validar refrigeração e outras evidências.">
        <p>Um notebook fica rápido ao ligar, mas perde desempenho sob carga enquanto a temperatura sobe muito. Qual hipótese faz sentido investigar?</p>
        <label><input type="radio" name="q99c3" value="a"> Limitação térmica e sistema de refrigeração.</label>
        <label><input type="radio" name="q99c3" value="b"> O arquivo mudou de extensão.</label>
        <label><input type="radio" name="q99c3" value="c"> O DNS está convertendo RAM em SSD.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="403 indica que a operação foi recusada no contexto apresentado; é diferente de um problema de autenticação indicado por 401.">
        <p>Uma API responde HTTP 403 para um usuário autenticado. Qual investigação é mais coerente?</p>
        <label><input type="radio" name="q99c4" value="a"> Trocar a placa de vídeo.</label>
        <label><input type="radio" name="q99c4" value="b"> Concluir que a senha está necessariamente errada.</label>
        <label><input type="radio" name="q99c4" value="c"> Verificar autorização/permissões para aquele recurso ou operação.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Sincronização pode propagar exclusão ou corrupção. Recuperação depende de cópias/versões independentes e testadas.">
        <p>Um arquivo é apagado e a exclusão se propaga para todos os dispositivos sincronizados. O que falhou como estratégia?</p>
        <label><input type="radio" name="q99c5" value="a"> A definição de byte.</label>
        <label><input type="radio" name="q99c5" value="b"> Confiar em sincronização como se fosse backup independente suficiente.</label>
        <label><input type="radio" name="q99c5" value="c"> O uso de um sistema de arquivos.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Wi-Fi conectado não garante que o gateway esteja alcançável. A falha pode estar na rede local, no ponto de acesso, na configuração IP ou no próprio gateway.">
        <p>O Wi-Fi aparece conectado, mas o computador não consegue alcançar o gateway da própria rede. Onde investigar primeiro?</p>
        <label><input type="radio" name="q99c6" value="a"> Na comunicação/configuração da rede local antes de culpar um site remoto.</label>
        <label><input type="radio" name="q99c6" value="b"> Apenas no servidor DNS mundial.</label>
        <label><input type="radio" name="q99c6" value="c"> Apenas no banco de dados do site.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="HTTP 500 indica que o servidor encontrou um problema interno ao processar a requisição; o cliente pode estar funcionando normalmente.">
        <p>O navegador alcança o serviço, que responde HTTP 500. Qual conclusão é mais adequada?</p>
        <label><input type="radio" name="q99c7" value="a"> O cabo do usuário está necessariamente rompido.</label>
        <label><input type="radio" name="q99c7" value="b"> Não houve qualquer comunicação com o servidor.</label>
        <label><input type="radio" name="q99c7" value="c"> O servidor recebeu a requisição e encontrou um problema interno; é preciso investigar o lado do serviço.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Modelos generativos podem produzir referências inexistentes. Fluência não substitui verificação em fontes confiáveis.">
        <p>Uma IA apresenta uma lei e uma fonte que não existem. Qual resposta é tecnicamente adequada?</p>
        <label><input type="radio" name="q99c8" value="a"> Aceitar porque o texto está bem escrito.</label>
        <label><input type="radio" name="q99c8" value="b"> Tratar como possível alucinação e verificar em fonte externa confiável.</label>
        <label><input type="radio" name="q99c8" value="c"> Concluir que todo uso de IA é impossível.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Alterar a ordem de boot pode fazer o firmware tentar iniciar por um dispositivo sem sistema; primeiro restaure/valide a configuração antes de formatar.">
        <p>Depois de alterar a ordem de boot no Setup, o PC passa a informar que não encontrou sistema. Qual é a primeira investigação coerente?</p>
        <label><input type="radio" name="q99c9" value="a"> Verificar a ordem/opção de boot e se o SSD do sistema está sendo detectado.</label>
        <label><input type="radio" name="q99c9" value="b"> Formatar imediatamente o SSD.</label>
        <label><input type="radio" name="q99c9" value="c"> Trocar a GPU.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir Nível 3</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <h3>Nível 4 — Integrar as camadas</h3>
    <p>Um sistema real não termina no nome de uma tecnologia. Agora cada questão atravessa mais de uma aula.</p>

    <div class="representation-flow" aria-label="Fluxo de uma compra on-line">
      <div><strong>Usuário</strong><span>toca em Comprar</span></div><span class="flow-arrow">→</span>
      <div><strong>Rede e Web</strong><span>DNS · IP · TLS · HTTP</span></div><span class="flow-arrow">→</span>
      <div><strong>Aplicação</strong><span>API · regras · segurança</span></div><span class="flow-arrow">→</span>
      <div><strong>Dados</strong><span>banco · transação · resposta</span></div>
    </div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Integração</span>
      <h3>4. O botão esconde uma cadeia inteira</h3>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="DNS relaciona nomes a informações de endereçamento. Ele não substitui roteamento, TLS ou HTTP.">
        <p>O aplicativo conhece <code>api.loja.com</code>, mas precisa localizar o serviço na rede. Qual mecanismo entra primeiro nessa necessidade?</p>
        <label><input type="radio" name="q99d1" value="a"> DNS.</label>
        <label><input type="radio" name="q99d1" value="b"> SGBD.</label>
        <label><input type="radio" name="q99d1" value="c"> GPU.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="TLS fornece proteção criptográfica à comunicação HTTPS; autenticação e autorização da aplicação continuam sendo controles separados.">
        <p>HTTPS está funcionando. Podemos concluir que qualquer usuário tem permissão para comprar?</p>
        <label><input type="radio" name="q99d2" value="a"> Sim, TLS substitui autorização.</label>
        <label><input type="radio" name="q99d2" value="b"> Não. TLS protege a comunicação; autorização decide o que a identidade pode fazer.</label>
        <label><input type="radio" name="q99d2" value="c"> Sim, se a porta for 443.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O cliente é uma entrada não confiável para regras críticas. Preço e estoque devem ser verificados no lado responsável pela regra de negócio.">
        <p>O aplicativo envia <code>preco = 1.00</code> para um produto que custa R$ 100. O servidor deveria aceitar esse valor como verdade?</p>
        <label><input type="radio" name="q99d3" value="a"> Sim, porque veio do aplicativo oficial.</label>
        <label><input type="radio" name="q99d3" value="b"> Sim, porque JSON é seguro por natureza.</label>
        <label><input type="radio" name="q99d3" value="c"> Não. O servidor deve validar a operação e consultar a fonte confiável da regra.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Transações e mecanismos de concorrência ajudam a evitar estados incoerentes quando operações relacionadas ocorrem quase ao mesmo tempo.">
        <p>Duas pessoas tentam comprar a última unidade simultaneamente. Qual conceito do banco de dados se torna especialmente importante?</p>
        <label><input type="radio" name="q99d4" value="a"> Transação/controle de concorrência.</label>
        <label><input type="radio" name="q99d4" value="b"> Extensão de arquivo.</label>
        <label><input type="radio" name="q99d4" value="c"> Pixel.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="APIs permitem integrar sistemas independentes segundo um contrato, mesmo quando pertencem a organizações e tecnologias diferentes.">
        <p>A loja envia uma cobrança para um serviço externo de pagamentos. Que ideia explica essa cooperação?</p>
        <label><input type="radio" name="q99d5" value="a"> A loja precisa ter o mesmo banco de dados da instituição financeira.</label>
        <label><input type="radio" name="q99d5" value="b"> Sistemas podem se integrar por APIs/serviços com contratos definidos.</label>
        <label><input type="radio" name="q99d5" value="c"> O pagamento ocorre porque ambos usam o mesmo monitor.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Cache acelera acesso a dados usados com frequência, mas precisa de estratégia de validade porque pode ficar desatualizado.">
        <p>O cache informa estoque 1, mas o banco já registra estoque 0. Qual lição aparece?</p>
        <label><input type="radio" name="q99d6" value="a"> Cache é sempre a fonte definitiva da verdade.</label>
        <label><input type="radio" name="q99d6" value="b"> Banco de dados não pode ser usado com cache.</label>
        <label><input type="radio" name="q99d6" value="c"> Cache melhora desempenho, mas exige controle de validade e atualização.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Serviços de nuvem continuam executando sobre processadores, memória, armazenamento, rede e energia em infraestrutura física.">
        <p>O servidor da loja está na nuvem. Onde as instruções realmente são executadas?</p>
        <label><input type="radio" name="q99d7" value="a"> Em hardware físico que sustenta a infraestrutura de nuvem.</label>
        <label><input type="radio" name="q99d7" value="b"> Em uma camada sem processadores.</label>
        <label><input type="radio" name="q99d7" value="c"> Somente no navegador do cliente.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="O texto visível é um sintoma. Falhas podem ocorrer em rede, DNS, autenticação, API, banco, pagamento ou outras camadas, por isso é preciso isolar por evidências.">
        <p>O usuário vê apenas “Não foi possível concluir a compra”. Qual é a primeira conclusão correta?</p>
        <label><input type="radio" name="q99d8" value="a"> O banco de dados está certamente fora do ar.</label>
        <label><input type="radio" name="q99d8" value="b"> Temos um sintoma; ainda precisamos localizar em qual camada está a causa.</label>
        <label><input type="radio" name="q99d8" value="c"> Basta formatar o celular.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir Nível 4</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <h3>Desafios abertos — pense antes de conferir</h3>
    <p>Agora não existe alternativa para reconhecer. Organize uma resposta com suas palavras. Uma boa resposta não precisa usar todas as siglas: precisa mostrar <strong>causa, relação entre conceitos e critério</strong>.</p>

    <div class="example-box">
      <strong>Desafio 1 — A média de 500 alunos</strong>
      <p>A escola precisa calcular média, situação e relatório de 500 alunos. Explique como decomposição, reconhecimento de padrões, abstração e algoritmo aparecem antes de escrever código.</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Decompor: separar entrada das notas, cálculo, decisão e registro. Padrão: o mesmo procedimento se repete para cada aluno. Abstração: usar apenas informações necessárias ao cálculo. Algoritmo: organizar a sequência que será aplicada a cada registro. O código vem depois desse raciocínio.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 2 — Irrigação que continua funcionando sem Internet</strong>
      <p>Uma estufa mede umidade, liga a bomba localmente e também envia histórico para a nuvem. A Internet cai. Explique o que pode continuar funcionando e por quê.</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Se a decisão essencial foi implementada no microcontrolador/edge, sensor, firmware e atuador podem continuar funcionando localmente. O envio para a nuvem, consulta remota e serviços externos podem falhar. Isso mostra que automação local, IoT e nuvem são camadas relacionadas, mas não idênticas.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 3 — “A Internet está lenta”</strong>
      <p>Uma chamada de vídeo demora a reagir, mas um arquivo grande ainda baixa a boa velocidade. Qual diferença de rede você investigaria e que evidências procuraria?</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Boa taxa de transferência não elimina alta latência, jitter ou perda. A chamada interativa é sensível ao tempo de resposta; o download grande pode aproveitar largura de banda mesmo com atraso maior. A investigação deve separar latência de taxa de transferência em vez de chamar tudo de “velocidade”.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 4 — Phishing no sistema escolar</strong>
      <p>Um funcionário entrega sua senha numa página falsa. Cite pelo menos quatro controles ou decisões que poderiam impedir o ataque, limitar o dano ou facilitar a recuperação.</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Exemplos: MFA pode dificultar uso da senha roubada; menor privilégio limita o que a conta consegue fazer; treinamento e verificação de domínio reduzem chance de phishing; logs e alertas ajudam a detectar acesso anormal; troca/revogação de credenciais ajuda na resposta; backups e recuperação protegem disponibilidade e dados em incidentes relacionados. Nenhum controle isolado resolve tudo — defesa em profundidade é o princípio central.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 5 — “Está tudo no Drive, então temos backup”</strong>
      <p>Explique por que uma pasta sincronizada não é automaticamente um plano de backup e proponha uma estratégia melhor.</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Sincronização pode propagar exclusões, corrupção ou alterações maliciosas. Uma estratégia melhor mantém cópias/versões independentes, em tecnologias ou meios distintos e pelo menos uma cópia separada do ambiente principal, além de testar restauração. O princípio 3-2-1 é uma referência útil.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 6 — Uma resposta de IA parece perfeita</strong>
      <p>Ela cita um estudo, um autor e números muito específicos. O texto é convincente. O que você faz antes de usar isso num trabalho?</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Separar fluência de evidência. Verificar se a fonte existe, consultar a fonte original, conferir se ela realmente sustenta a afirmação e considerar atualização/contexto. Modelos generativos podem produzir conteúdo plausível e incorreto; usar ferramenta de busca ou RAG pode ajudar, mas não elimina a necessidade de verificação conforme o risco.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 7 — A ficha técnica parece ótima</strong>
      <p>Um notebook anuncia: <strong>12 núcleos / 16 threads, até 5,0 GHz, 16 GB DDR5-5600, SSD NVMe PCIe 4.0 de 1 TB, GPU integrada e NPU</strong>. Explique o que você consegue entender dessa ficha e cite pelo menos três coisas que ainda precisaria investigar antes de decidir que ele é “mais rápido”.</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>A ficha informa paralelismo anunciado da CPU, frequência máxima, capacidade/geração/taxa da RAM, tecnologia do armazenamento e presença de aceleradores. Ainda faltam modelo/arquitetura da CPU, desempenho real por tarefa, configuração e expansão da RAM, qualidade do SSD, limites térmicos, potência, autonomia e se o software usa GPU/NPU. Números isolados não determinam o desempenho do conjunto.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 8 — Do número ao caractere</strong>
      <p>Mostre por que <code>35₁₀ = 00100011₂ = 23₁₆</code>. Depois explique por que <code>01000001</code> só pode ser chamado de letra <strong>A</strong> quando sabemos que o padrão está sendo interpretado segundo uma codificação como ASCII.</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>35 = 32 + 2 + 1, então os pesos 32, 2 e 1 recebem bit 1: <code>00100011</code>. Agrupando em 4 bits: <code>0010 = 2</code> e <code>0011 = 3</code>, portanto <code>23₁₆</code>. Já um padrão de bits não possui significado universal; em ASCII, o valor decimal 65/hex 41 é definido como o caractere A.</p></details>
    </div>

    <div class="example-box">
      <strong>Desafio 9 — O PC deixou de iniciar depois do Setup</strong>
      <p>Alguém entrou no Setup, alterou opções de boot e agora aparece “no boot device”. Antes de formatar, que sequência de observação e recuperação você proporia?</p>
      <details class="note-box compact"><summary><strong>Confira uma boa linha de raciocínio</strong></summary><p>Confirmar se o SSD do sistema é detectado, verificar a opção/ordem de boot, comparar com o estado anterior e restaurar a configuração correta ou padrão documentado quando apropriado. Registrar mudanças e testar uma variável por vez. Formatar não é a primeira ação quando o sintoma começou imediatamente após uma alteração de firmware.</p></details>
    </div>

    <h3>Missões práticas — observe sistemas reais</h3>
    <p>Estas atividades não exigem instalar software nem alterar configurações importantes. O objetivo é transformar conceitos em observação.</p>

    <div class="comparison-grid three">
      <article><strong>1. Rede do seu computador</strong><p>Execute <code>ipconfig</code>. Identifique uma interface ativa, endereço IP, prefixo/máscara e gateway. Depois explique por que cada informação existe.</p></article>
      <article><strong>2. Nome × endereço</strong><p>Use <code>nslookup example.com</code>. Explique por que isso não “abre o site” e qual problema o DNS está resolvendo.</p></article>
      <article><strong>3. Arquivos pelo CMD</strong><p>Dentro de uma pasta de laboratório, crie um arquivo com <code>echo</code>, liste com <code>dir</code>, redirecione a saída e explique o papel de <code>&gt;</code>, <code>&gt;&gt;</code> e <code>|</code>.</p></article>
      <article><strong>4. Raio-X do hardware</strong><p>No Windows, abra <strong>Gerenciador de Tarefas → Desempenho</strong>. Registre CPU, núcleos/processadores lógicos, RAM, discos e GPU; se houver NPU disponível, observe-a também. Explique o papel de cada recurso.</p></article>
      <article><strong>5. Leia sua memória</strong><p>Na área Memória, registre capacidade, velocidade exibida e slots usados quando disponíveis. Depois identifique no manual/ficha do equipamento se a RAM é DDR3, DDR4, DDR5, LPDDR ou outra e se pode ser expandida.</p></article>
      <article><strong>6. Setup sem mudanças</strong><p>Somente com orientação do manual do fabricante, entre no BIOS/UEFI Setup e <strong>apenas observe</strong>: CPU, RAM, armazenamento, boot, Secure Boot e virtualização. Saia sem salvar alterações.</p></article>
    </div>

    <div class="danger-box compact"><strong>Prática segura vem antes da curiosidade.</strong><p>Não atualize firmware, não desative Secure Boot/TPM e não altere tensões, clocks ou opções desconhecidas como exercício. A missão é <strong>reconhecer e explicar</strong>, não mudar.</p></div>

    <h3>Desafio final — explique um único clique</h3>
    <div class="hero-box">
      <span class="eyebrow">Síntese do módulo</span>
      <h2>Você toca em “Comprar” e alguns segundos depois aparece “Pedido confirmado”.</h2>
      <p>Explique a cadeia usando, sem simplesmente listar, pelo menos estes conceitos: <strong>processo, RAM, sistema operacional, Wi-Fi, IP, DNS, HTTPS/TLS, API, autenticação/autorização, servidor, banco de dados, transação e resposta ao usuário</strong>.</p>
    </div>

    <div class="mbb-pause-question">
      <strong>Depois acrescente o diagnóstico.</strong>
      <p>Escolha três pontos diferentes dessa cadeia e diga: <strong>se falhar aqui, qual sintoma o usuário poderia perceber e que teste ajudaria a localizar a causa?</strong></p>
    </div>

    <details class="note-box">
      <summary><strong>Critérios para avaliar sua própria resposta</strong></summary>
      <ul>
        <li>Você explicou <strong>por que</strong> cada camada entra, em vez de apenas citar siglas?</li>
        <li>Separou rede local, Internet, DNS e Web?</li>
        <li>Separou proteção da comunicação de autenticação e autorização?</li>
        <li>Mostrou que API, aplicação e banco de dados possuem papéis diferentes?</li>
        <li>Usou transação para justificar consistência quando várias operações dependem umas das outras?</li>
        <li>No diagnóstico, tratou a mensagem visível como sintoma e buscou evidências antes de afirmar a causa?</li>
      </ul>
    </details>

    <div class="essence">
      <strong>Conclusão do módulo</strong>
      <p>Se você consegue <strong>distinguir conceitos próximos, ler uma especificação sem se deixar enganar por números isolados, explicar mecanismos, formular hipóteses a partir de evidências e acompanhar uma informação atravessando várias camadas</strong>, Fundamentos cumpriu seu papel. O objetivo nunca foi decorar todas as siglas: foi construir um modelo mental que permita aprender o próximo assunto sem começar do zero.</p>
    </div>
  `
});
