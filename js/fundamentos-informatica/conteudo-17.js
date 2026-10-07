window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "seguranca",
  number: "17",
  unit: "Ato 4 · Computação no mundo atual",
  menuTitle: "Segurança",
  technicalTitle: "ativo • confidencialidade • integridade • disponibilidade • ameaça • vulnerabilidade • risco • MFA • hash • criptografia • malware • phishing • firewall • backup",
  title: "Se tudo está conectado, o que impede alguém de acessar aquilo que não deveria?",
  objective: "Construir um modelo básico de segurança da informação, relacionando ativos, riscos e controles técnicos e humanos sem reduzir segurança a antivírus ou senha.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">O ataque que não precisou quebrar nada</span>
      <h2>Um funcionário recebe: “Sua conta será bloqueada. Confirme sua senha agora.” A página parece verdadeira.</h2>
      <p>Ele digita usuário e senha. Horas depois, outra pessoa entra no sistema com aquelas credenciais. Nenhum algoritmo precisou ser “quebrado”: <strong>o atacante convenceu alguém a entregar o acesso.</strong> Segurança precisa proteger tecnologia, dados e pessoas.</p>
    </div>

    <h3>Antes de proteger, precisamos saber o que possui valor</h3>
    <p>Num sistema escolar podem importar notas, dados pessoais, contas, disponibilidade do portal e até a reputação da instituição. Em uma empresa, um servidor ou uma chave de acesso também pode ser essencial.</p>
    <div class="definition-box featured"><span class="term">Ativo</span><p>É algo que possui valor para uma pessoa ou organização e, por isso, precisa ser protegido.</p></div>

    <h3>Três formas diferentes de um sistema dar errado</h3>
    <p>Considere três incidentes: alguém lê dados médicos sem autorização; alguém altera uma nota; o sistema de matrícula fica fora do ar. Nenhum deles é igual ao outro, embora todos sejam problemas de segurança.</p>
    <div class="comparison-grid three">
      <article><strong>Confidencialidade</strong><p>Busca garantir que informações sejam acessadas apenas por quem possui autorização.</p></article>
      <article><strong>Integridade</strong><p>Busca preservar correção e consistência, evitando ou detectando alterações indevidas.</p></article>
      <article><strong>Disponibilidade</strong><p>Busca manter sistemas e informações acessíveis quando necessários.</p></article>
    </div>
    <div class="note-box compact"><strong>Tríade CIA</strong><p>Em inglês: <em>Confidentiality, Integrity, Availability</em>. É um mapa inicial útil, não uma lista completa de tudo que segurança envolve.</p></div>

    <h3>Uma falha existe; alguém pode explorá-la; o impacto pode ser grande</h3>
    <p>Um servidor está desatualizado. Isso é uma fraqueza mesmo quando ninguém está atacando. Agora aparece alguém capaz de explorar essa fraqueza. Se o servidor guarda dados críticos e está exposto à Internet, a situação merece muito mais atenção.</p>
    <div class="comparison-grid three">
      <article><strong>Vulnerabilidade</strong><p>Fraqueza que pode ser explorada ou contribuir para um incidente.</p></article>
      <article><strong>Ameaça</strong><p>Algo capaz de causar dano explorando ou aproveitando uma condição adversa.</p></article>
      <article><strong>Risco</strong><p>Relaciona possibilidade de ocorrência e consequências para os ativos envolvidos.</p></article>
    </div>
    <p>O objetivo não é eliminar magicamente todo risco, mas <strong>reduzi-lo a níveis aceitáveis com controles proporcionais ao problema</strong>.</p>

    <h3>Entrar e poder fazer são duas etapas diferentes</h3>
    <div class="hero-box"><span class="eyebrow">Situação</span><p>A professora entra no sistema com sua conta e senha. O sistema reconhece a identidade. Ela pode lançar notas nas turmas pelas quais é responsável, mas não deveria administrar contas de todos os usuários. <strong>Identidade e permissão não são a mesma pergunta.</strong></p></div>
    <div class="comparison-grid"><article><strong>Autenticação</strong><p>Verifica a identidade apresentada: <em>quem é você?</em></p></article><article><strong>Autorização</strong><p>Determina ações permitidas: <em>o que você pode fazer?</em></p></article></div>
    <div class="definition-box compact"><span class="term">Menor privilégio</span><p>Usuários e processos devem possuir apenas as permissões necessárias para sua função. Quanto maior o privilégio de uma conta comprometida, maior tende a ser o impacto.</p></div>

    <h3>Uma senha descoberta não deveria ser suficiente para tudo</h3>
    <p>Se uma credencial vazar, podemos exigir outra evidência de identidade pertencente a uma categoria diferente.</p>
    <div class="comparison-grid three"><article><strong>Algo que você sabe</strong><p>senha ou PIN.</p></article><article><strong>Algo que você possui</strong><p>token, celular ou chave de segurança.</p></article><article><strong>Algo que você é</strong><p>característica biométrica usada por um sistema de autenticação.</p></article></div>
    <div class="definition-box featured"><span class="term">MFA — autenticação multifator</span><p>Combina fatores de categorias independentes para tornar a autenticação mais resistente ao comprometimento de um único fator.</p></div>
    <div class="note-box compact"><strong>Duas etapas não significam necessariamente dois fatores.</strong><p>Duas senhas continuam pertencendo à categoria “algo que você sabe”.</p></div>

    <h3>O banco deveria guardar sua senha em texto puro?</h3>
    <p>Imagine um vazamento contendo uma coluna <code>senha = minhasenha123</code>. O atacante não precisaria descobrir nada: a credencial já estaria legível. Sistemas de autenticação sérios precisam armazenar verificadores de senha resistentes a ataques offline.</p>
    <div class="definition-box featured"><span class="term">Hash de senha</span><p>Em vez de guardar a senha diretamente, o verificador armazena uma representação produzida por um esquema apropriado de derivação/hash de senha. Diretrizes atuais do NIST exigem uso de <strong>salt</strong> e de um esquema adequado com fator de custo.</p></div>
    <div class="definition-box compact"><span class="term">Salt</span><p>É um valor único combinado no processamento da senha, fazendo com que senhas iguais não resultem simplesmente no mesmo verificador armazenado.</p></div>

    <h3>Hash e criptografia resolvem problemas diferentes</h3>
    <p>Em HTTPS, precisamos proteger dados durante o trajeto e permitir que o destinatário autorizado os recupere. Já uma senha não precisa ser recuperada pelo servidor para ser comparada durante a autenticação.</p>
    <div class="comparison-grid"><article><strong>Hash criptográfico</strong><p>Produz um resumo e não é projetado para ser revertido para recuperar a entrada original.</p></article><article><strong>Criptografia</strong><p>Transforma dados de modo que possam ser recuperados por quem possui as chaves ou meios adequados.</p></article></div>
    <div class="note-box compact"><strong>HTTPS protege dados em trânsito; não resolve tudo.</strong><p>Arquivos e bancos no servidor também podem exigir controles para dados em repouso, identidade, permissões e backup.</p></div>

    <h3>Nem todo ataque começa com uma vulnerabilidade de software</h3>
    <p>O primeiro caso desta aula explorou medo e urgência. Isso tem nome.</p>
    <div class="definition-box"><span class="term">Engenharia social</span><p>É o uso de manipulação para induzir pessoas a revelar informações ou executar ações que favoreçam um ataque.</p></div>
    <div class="definition-box"><span class="term">Phishing</span><p>É uma forma comum de engenharia social em que mensagens ou páginas falsas tentam induzir a vítima a entregar credenciais, dados ou executar ações perigosas.</p></div>
    <div class="mbb-pause-question"><strong>Em vez de “não clique em links”, construa um critério.</strong><p>Eu esperava a mensagem? O domínio é realmente o da organização? Existe urgência artificial? Pedem senha? Posso abrir o serviço pelo endereço que já conheço, sem usar o link recebido?</p></div>
    <div class="note-box compact"><strong>O cadeado não salva você do phishing.</strong><p>Um site malicioso também pode ter HTTPS. A conexão pode estar protegida entre você e o servidor do criminoso.</p></div>

    <h3>Malware não significa apenas vírus</h3>
    <p>Se o usuário executar software malicioso, o problema pode assumir formas diferentes. O importante é compreender a família antes de decorar nomes.</p>
    <div class="comparison-grid four">
      <article><strong>Vírus</strong><p>Propaga-se associado a outros arquivos ou programas em determinadas condições.</p></article>
      <article><strong>Worm</strong><p>Pode se propagar entre sistemas explorando redes ou vulnerabilidades.</p></article>
      <article><strong>Trojan</strong><p>Apresenta-se ou é distribuído como algo legítimo enquanto executa ação maliciosa.</p></article>
      <article><strong>Ransomware</strong><p>Busca impedir acesso a dados ou sistemas e exigir pagamento ou condição para restauração.</p></article>
    </div>
    <p><strong>Malware</strong> é a categoria ampla. Vírus é apenas um tipo.</p>

    <h3>Atualizar também é segurança</h3>
    <p>Quando uma vulnerabilidade conhecida recebe correção, manter software antigo pode deixar aberta uma falha já tratada pelo fornecedor. Isso vale para sistema operacional, navegador, aplicativos, firmware e dispositivos IoT.</p>
    <div class="note-box compact"><strong>Atualizado não significa invulnerável.</strong><p>Atualizações reduzem riscos conhecidos; novas falhas podem existir. Segurança é processo contínuo.</p></div>

    <h3>Uma única defesa não basta</h3>
    <p>Se toda a segurança depende de uma senha, basta comprometer essa senha. Podemos combinar controles que reduzem probabilidade e impacto de diferentes falhas.</p>
    <div class="comparison-grid three"><article><strong>Firewall</strong><p>Controla tráfego de rede segundo regras; não é sinônimo de antivírus.</p></article><article><strong>Logs</strong><p>Registram eventos e ajudam em auditoria, diagnóstico e investigação.</p></article><article><strong>Backup</strong><p>Ajuda na recuperação após falha, erro, corrupção ou alguns incidentes como ransomware.</p></article></div>
    <div class="definition-box featured"><span class="term">Defesa em profundidade</span><p>É a combinação de múltiplas camadas de proteção para não depender de um único controle.</p></div>

    <h3>Backup só é útil se voltar</h3>
    <p>Uma empresa pode copiar dados todos os dias e descobrir, na emergência, que as cópias estavam incompletas. Por isso a proteção não termina em “o backup executou”.</p>
    <div class="ok-box"><strong>Recuperação faz parte da estratégia.</strong><p>Backups precisam ser protegidos, suficientemente independentes do ambiente principal e <strong>testados por restauração</strong> de acordo com a importância dos dados.</p></div>

    <h3>Segurança é prevenção, detecção, resposta e recuperação</h3>
    <p>Não existe configuração que permita afirmar seriamente “esse sistema nunca será comprometido”. Precisamos prevenir o que for possível, detectar comportamentos relevantes, responder ao incidente e recuperar o serviço.</p>
    <div class="representation-flow" aria-label="Ciclo simplificado de segurança"><div><strong>Prevenir</strong></div><span class="flow-arrow">→</span><div><strong>Detectar</strong></div><span class="flow-arrow">→</span><div><strong>Responder</strong></div><span class="flow-arrow">→</span><div><strong>Recuperar</strong></div></div>

    <h3>Auditoria pessoal — sem revelar nenhuma senha</h3>
    <div class="mbb-pause-question"><strong>Observe seus próprios hábitos</strong><p>Contas importantes usam MFA? Senhas são reutilizadas? O sistema está atualizado? Arquivos importantes possuem backup recuperável? O roteador ainda usa credenciais padrão? Você confere o domínio quando uma mensagem cria urgência?</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Segurança deixou de ser “instalar antivírus”?</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Ameaça é algo capaz de causar dano; vulnerabilidade é uma fraqueza; risco considera possibilidade e impacto."><p>Qual distinção é correta?</p><label><input type="radio" name="q17a" value="a"> Vulnerabilidade e ameaça são sinônimos.</label><label><input type="radio" name="q17a" value="b"> Risco é apenas o nome de um vírus.</label><label><input type="radio" name="q17a" value="c"> Uma ameaça pode explorar uma vulnerabilidade, gerando risco para um ativo.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Autenticação verifica identidade; autorização determina permissões depois que a identidade/contexto é conhecido."><p>Uma pessoa entra na conta, mas não pode alterar dados administrativos. O que isso demonstra?</p><label><input type="radio" name="q17b" value="a"> Autenticação e autorização resolvem perguntas diferentes.</label><label><input type="radio" name="q17b" value="b"> A senha está necessariamente errada.</label><label><input type="radio" name="q17b" value="c"> O banco está sem Internet.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="HTTPS protege a comunicação com o servidor apresentado, mas não garante a honestidade do conteúdo ou das intenções do site."><p>Um site de phishing pode usar HTTPS?</p><label><input type="radio" name="q17c" value="a"> Não, certificados só existem para empresas honestas.</label><label><input type="radio" name="q17c" value="b"> Sim. HTTPS não substitui a verificação do domínio e do contexto.</label><label><input type="radio" name="q17c" value="c"> Não, porque phishing só funciona por vírus.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Segurança começa pelos <strong>ativos</strong> e pelos riscos à confidencialidade, integridade e disponibilidade. Ameaças podem explorar vulnerabilidades; controles como autenticação, MFA, autorização, menor privilégio, hash adequado de senhas, criptografia, atualização, firewall, logs e backup reduzem diferentes partes do risco. Pessoas também são alvo, por isso phishing e engenharia social precisam de critérios de decisão, não só ferramentas.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Um aplicativo de clima não possui uma estação meteorológica dentro do celular. Como ele pede dados a outro sistema — e como dois programas combinam o formato da pergunta e da resposta?</p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://pages.nist.gov/800-63-4/sp800-63b.html" target="_blank" rel="noopener">NIST SP 800-63B — autenticação e armazenamento de senhas</a></li>
      <li><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener">NIST Cybersecurity Framework</a></li>
      <li><a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" target="_blank" rel="noopener">CISA — reconhecimento de phishing</a></li>
    </ul></details>
  `
});
