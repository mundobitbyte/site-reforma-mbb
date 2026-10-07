window.infraestruturaModernLessons = Array.isArray(window.infraestruturaModernLessons) ? window.infraestruturaModernLessons : [];

window.infraestruturaModernLessons.push({
  id: 'moderna-persistencia',
  number: '04',
  unit: 'Portal de Eventos · Contêiner observável',
  menuTitle: 'Estado e persistência',
  technicalTitle: 'camada gravável • bind mount • volume • porta • log • recriação • evidência',
  title: 'Remover o contêiner remove o trabalho?',
  objective: 'Distinguir estado efêmero de dado persistente por um experimento antes/depois e limitar corretamente a conclusão.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Quarta-feira · 8h25 · teste de recuperação</span><h2>Caio alterou a página dentro do contêiner e chamou isso de implantação.</h2><p>A página mostra “Inscrições abertas”, mas ninguém registrou onde esse conteúdo vive. Joana exige uma previsão antes de remover o contêiner e prepara um arquivo no host, sob controle de versão didático.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · fronteiras de dados</span><h3>O que acompanha a recriação?</h3></div><div class="visual-body"><div class="service-stack"><div><strong>Imagem</strong><span>base imutável identificada</span></div><div><strong>Camada do contêiner</strong><span>mudança descartável na remoção</span></div><div><strong>Bind/volume</strong><span>estado fora do ciclo do contêiner</span></div></div><p class="visual-question">Onde deveria ficar um conteúdo que precisa sobreviver à troca da imagem? Quem precisa editá-lo diretamente no host?</p></div></div>

    <div class="task-box"><strong>Missão · perder de propósito, preservar com intenção</strong><ol><li>execute novamente <code>mbb-web</code> em loopback e registre o conteúdo inicial;</li><li>altere somente uma cópia de laboratório dentro do contêiner e preveja o resultado após remoção;</li><li>remova e recrie o contêiner com a mesma imagem; compare o conteúdo;</li><li>no host, crie <code>~/portal-lab/html/index.html</code> com conteúdo fictício;</li><li>recrie usando <code>-v $HOME/portal-lab/html:/usr/share/nginx/html:ro</code> e a mesma publicação em loopback;</li><li>teste, remova, recrie e teste novamente;</li><li>registre proprietário/permissões no host e mantenha o mount somente leitura;</li><li>remova o contêiner; preserve o diretório como evidência do teste.</li></ol></div>
    <div class="danger-box"><strong>Confirme os caminhos antes de montar</strong><p>Bind mounts dão ao contêiner acesso ao caminho do host. Use somente o diretório didático aprovado, nunca <code>/</code>, <code>/etc</code>, diretórios pessoais inteiros ou dados reais. <code>:ro</code> reduz escrita acidental, mas não corrige conteúdo sensível exposto.</p></div>

    <div class="state-comparison"><div><span>ANTES</span><strong>mudança na camada</strong><p>conteúdo existe apenas no contêiner.</p></div><div><span>INTERVENÇÃO</span><strong>remover e recriar</strong><p>mesma imagem, nova camada gravável.</p></div><div><span>DEPOIS</span><strong>bind mount somente leitura</strong><p>conteúdo do host permanece após nova recriação.</p></div></div>
    <div class="mbb-pause-question"><strong>O que isso prova?</strong><p>O arquivo persistiu em recriações controladas porque estava fora da camada do contêiner. Não prova backup, integridade futura, restauração nem persistência do banco de dados.</p></div>

    <div class="table-wrap"><table><thead><tr><th>Mecanismo</th><th>Uso adequado no cenário</th><th>Responsabilidade</th></tr></thead><tbody><tr><td>Camada gravável</td><td>cache/estado descartável do teste</td><td>não tratar como dado durável</td></tr><tr><td>Bind mount</td><td>arquivo que equipe edita diretamente no host</td><td>caminho, permissão e backup do host</td></tr><tr><td>Volume nomeado</td><td>dado persistente gerenciado pelo Docker</td><td>inventário, cópia e restauração testada</td></tr></tbody></table></div>
    <div class="note-box compact"><strong>Registro da Evolução · persistência</strong><p>Atualize o Registro da Evolução com previsão, comandos, caminho, conteúdo antes/depois, tipo de mount, permissões, resultado da recriação e limite da conclusão.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>O portal real precisa de aplicação e banco, dois ciclos de vida ligados por rede e dados persistentes. Repetir comandos manuais tornaria a configuração difícil de revisar e reproduzir.</p></div>
  `
});

window.infraestruturaModernLessons.push({
  id: 'moderna-compose',
  number: '05',
  unit: 'Portal de Eventos · Contêiner observável',
  menuTitle: 'Compose e serviço composto',
  technicalTitle: 'Compose • serviço • rede • volume • secret file • dependência • validação',
  title: 'Descreva o portal antes de iniciá-lo',
  objective: 'Ler e validar uma aplicação composta, separar tráfego e dados e iniciar o conjunto somente após revisar sua configuração.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Quarta-feira · 11h10 · revisão em dupla</span><h2>O Portal de Eventos precisa de WordPress e MariaDB, mas o banco não precisa ser publicado no host.</h2><p>Joana recebe o arquivo Compose da homologação. Ana representa a dona do serviço e confirma os campos fictícios; Caio revisa redes, volumes, portas e segredos. A equipe deve encontrar o alcance de cada componente <strong>antes</strong> de executar.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · arquitetura de homologação</span><h3>Uma porta publicada, uma rede interna, dois volumes</h3></div><div class="visual-body"><div class="diagnostic-flow"><div><span>1</span><strong>Navegador local</strong><small>127.0.0.1:8080</small></div><div><span>2</span><strong>WordPress</strong><small>rede front + back</small></div><div><span>3</span><strong>MariaDB</strong><small>somente rede back</small></div><div><span>4</span><strong>Volumes</strong><small>wp_data + db_data</small></div></div><p class="visual-question">Qual componente não precisa de <code>ports</code>? Que caminho permite ao WordPress encontrá-lo?</p></div></div>

    <div class="terminal-card"><strong>Arquivo de referência do laboratório</strong><pre>services:
  db:
    image: mariadb:11.8
    environment:
      MARIADB_DATABASE: escola_eventos
      MARIADB_USER: portal
      MARIADB_PASSWORD_FILE: /run/secrets/db_password
      MARIADB_ROOT_PASSWORD_FILE: /run/secrets/db_root_password
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - back
    secrets:
      - db_password
      - db_root_password

  web:
    image: wordpress:6-apache
    depends_on:
      - db
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_NAME: escola_eventos
      WORDPRESS_DB_USER: portal
      WORDPRESS_DB_PASSWORD_FILE: /run/secrets/db_password
    ports:
      - "127.0.0.1:8080:80"
    volumes:
      - wp_data:/var/www/html
    networks:
      - front
      - back
    secrets:
      - db_password

networks:
  front:
  back:
    internal: true

volumes:
  db_data:
  wp_data:

secrets:
  db_password:
    file: ./secrets/db_password.txt
  db_root_password:
    file: ./secrets/db_root_password.txt</pre></div>
    <div class="note-box compact"><strong>Tags são uma decisão registrada</strong><p><code>mariadb:11.8</code> e <code>wordpress:6-apache</code> são variantes oficiais e mantidas consultadas para esta revisão, mas tags podem apontar para conteúdo atualizado. Antes da implantação, registre os digests efetivamente baixados e confira as páginas oficiais de <a href="https://hub.docker.com/_/wordpress" target="_blank" rel="noopener">WordPress</a> e <a href="https://hub.docker.com/_/mariadb" target="_blank" rel="noopener">MariaDB</a>.</p></div>
    <div class="danger-box"><strong>Segredo em arquivo não é cofre</strong><p>Crie senhas fictícias fortes em <code>./secrets/</code>, aplique permissão restrita e nunca as copie para relatório, screenshot ou repositório. O Compose monta os arquivos para os serviços declarados; a proteção do host continua sendo responsabilidade da equipe.</p></div>

    <div class="task-box"><strong>Missão · revisar → iniciar → provar</strong><ol><li>salve o arquivo como <code>compose.yaml</code> em diretório exclusivo e crie os dois arquivos de segredo localmente;</li><li>use <code>sudo docker compose config</code> e revise imagem, mount, porta, rede e caminho de segredo;</li><li>execute <code>sudo docker compose pull</code> e registre tags/digests;</li><li>inicie com <code>sudo docker compose up -d</code>;</li><li>observe <code>sudo docker compose ps</code> e <code>sudo docker compose logs --tail=50</code>;</li><li>não suponha prontidão por causa de <code>depends_on</code>; repita <code>curl -I http://127.0.0.1:8080</code> até o critério da janela;</li><li>configure somente dados fictícios e registre uma inscrição de teste;</li><li>pare com <code>sudo docker compose down</code>, suba de novo e confirme o registro;</li><li>não use <code>down -v</code>: esse parâmetro removeria os volumes desta prática.</li></ol></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="depends_on organiza a ordem de criação/início; a prontidão funcional precisa de healthcheck ou teste explícito."><p>O contêiner web foi iniciado depois do banco. O que já pode ser concluído?</p><label><input type="radio" name="m05a" value="a"> o banco aceitou credenciais</label><label><input type="radio" name="m05a" value="b"> o portal está pronto para usuários</label><label><input type="radio" name="m05a" value="c"> apenas a ordem básica foi aplicada; logs e teste funcional ainda são necessários</label></div><div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Sem ports no serviço db e com rede interna, o banco atende ao serviço web pela rede back, não diretamente ao host."><p>Por que o serviço <code>db</code> não possui <code>ports</code>?</p><label><input type="radio" name="m05b" value="a"> MariaDB não usa porta</label><label><input type="radio" name="m05b" value="b"> somente o WordPress precisa alcançá-lo na rede back</label><label><input type="radio" name="m05b" value="c"> o volume substitui a rede</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir arquitetura</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>
    <div class="note-box compact"><strong>Registro da Evolução · Compose e serviços</strong><p>Atualize o Registro da Evolução com o Compose revisado sem valores secretos, digests, redes, volumes, portas, saída de <code>config</code>/<code>ps</code>, logs relevantes e teste de persistência.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>O portal sobreviveu à recriação, mas as imagens receberão atualizações. Trocar uma tag sem plano pode introduzir mudança irreversível no banco.</p></div>
  `
});

window.infraestruturaModernLessons.push({
  id: 'moderna-atualizacao',
  number: '06',
  unit: 'Portal de Eventos · Operar e expor com controle',
  menuTitle: 'Atualização e rollback',
  technicalTitle: 'digest • supply chain • configuração confiável • backup • teste • rollback • mínimo privilégio',
  title: 'Atualize a imagem sem apostar os dados',
  objective: 'Planejar uma atualização reproduzível, revisar a cadeia de fornecimento e provar retorno sem confundir tag com conteúdo imutável.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Quinta-feira · 8h40 · alerta de manutenção</span><h2>Há uma imagem mais nova. “Dar pull e ver no que acontece” não é um plano.</h2><p>Ana precisa preservar as inscrições fictícias. Joana separa configuração, dados e imagem; Caio registra o digest atual e prepara uma cópia/restauração antes de substituir qualquer contêiner.</p></div>

    <div class="table-wrap"><table><thead><tr><th>Objeto</th><th>Risco</th><th>Controle</th></tr></thead><tbody><tr><td>Compose recebido</td><td>pode montar caminhos, publicar portas ou elevar privilégios</td><td>tratar como entrada confiável somente após revisão e <code>docker compose config</code></td></tr><tr><td>Tag</td><td>pode apontar para novo conteúdo</td><td>registrar digest e origem oficial</td></tr><tr><td>Digest fixo</td><td>não recebe correção automaticamente</td><td>ciclo deliberado de revisão e atualização</td></tr><tr><td>Volume</td><td>migração pode alterar formato</td><td>backup consistente e restauração testada</td></tr><tr><td>Usuário/capabilities</td><td>processo pode receber mais privilégio que o necessário</td><td>inspecionar usuário efetivo e reduzir capabilities somente quando a imagem suportar e o teste validar</td></tr><tr><td>Daemon/socket</td><td>controle amplo do host</td><td>acesso mínimo; nunca montar socket na aplicação</td></tr></tbody></table></div>

    <div class="task-box"><strong>Missão · candidato controlado</strong><ol><li>registre imagens e digests atuais com <code>sudo docker image inspect mariadb:11.8 wordpress:6-apache</code>;</li><li>observe processos com <code>sudo docker compose top</code> e o usuário configurado com <code>sudo docker inspect &lt;ID_DO_CONTAINER_WEB&gt;</code>; proponha usuário não-root e capabilities mínimas apenas se a documentação da imagem e um teste isolado sustentarem;</li><li>exporte conteúdo/configuração pelos mecanismos suportados pela aplicação e copie os dados autorizados para destino separado;</li><li>prove uma restauração de amostra sem sobrescrever o único estado válido;</li><li>baixe a imagem candidata sem remover a anterior;</li><li>revise notas oficiais, compatibilidade e mudança de dados;</li><li>clone o laboratório ou use snapshot apenas como retorno auxiliar, não como único backup;</li><li>implante o candidato na cópia isolada, valide logs, HTTP, cadastro e persistência;</li><li>se aprovado, execute em janela e compare antes/depois;</li><li>se falhar, volte à configuração/digest anterior e restaure dados somente pelo procedimento testado.</li></ol></div>
    <div class="state-comparison"><div><span>ANTES</span><strong>digest atual + dado recuperável</strong><p>baseline e restauração de amostra.</p></div><div><span>INTERVENÇÃO</span><strong>imagem candidata em cópia</strong><p>compatibilidade, log e função real.</p></div><div><span>DEPOIS</span><strong>aprovar ou reverter</strong><p>digest, dados e evidência comparados.</p></div></div>
    <div class="danger-box"><strong>Rollback de imagem não desfaz migração de dados</strong><p>Se a nova aplicação altera o volume/banco, iniciar a imagem anterior sobre dados migrados pode piorar o incidente. Pare quando a compatibilidade não estiver documentada ou a restauração não tiver sido provada.</p></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Fixar o digest melhora reprodutibilidade, mas cria a obrigação de revisar e atualizar deliberadamente."><p>Qual registro é mais preciso?</p><label><input type="radio" name="m06a" value="a"> digest fixa conteúdo; atualização de segurança continua sendo uma decisão operacional</label><label><input type="radio" name="m06a" value="b"> digest torna a imagem permanentemente segura</label><label><input type="radio" name="m06a" value="c"> usar latest elimina rollback</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>
    <div class="note-box compact"><strong>Registro da Evolução · atualização e retorno</strong><p>Registre origem, tag/digest atual e candidato, compatibilidade, backup/restauração, critérios de aprovação/parada, evidência antes/depois e rollback de imagem e dados.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>A homologação local está controlada. Para a feira, surge uma nova pergunta: manter o serviço na escola ou contratar capacidade externa?</p></div>
  `
});

window.infraestruturaModernLessons.push({
  id: 'moderna-nuvem',
  number: '07',
  unit: 'Portal de Eventos · Operar e expor com controle',
  menuTitle: 'Nuvem sem propaganda',
  technicalTitle: 'IaaS • PaaS • SaaS • responsabilidade compartilhada • custo • privacidade • disponibilidade',
  title: 'Mover para a nuvem muda quem faz o quê',
  objective: 'Comparar modelos de serviço por responsabilidade, custo, privacidade e disponibilidade, sem conta paga nem escolha universal.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Quinta-feira · 10h15 · decisão da coordenação</span><h2>A direção quer acesso fora da escola, mas não aprovou fornecedor, orçamento ou dados reais.</h2><p>A equipe não abrirá conta nem informará cartão. Em vez disso, compara cenários com base nos requisitos já registrados. “Nuvem” significa acesso sob demanda a recursos compartilhados; não significa ausência de servidores, operação ou responsabilidade.</p></div>
    <div class="note-box compact"><strong>Referências de decisão</strong><p>A definição vem do <a href="https://csrc.nist.gov/pubs/sp/800/145/final" target="_blank" rel="noopener">NIST SP 800-145</a>. A separação de responsabilidades pode ser conferida em um modelo oficial como o de <a href="https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility" target="_blank" rel="noopener">responsabilidade compartilhada do Azure</a>; o fornecedor é exemplo, não destino obrigatório.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Representação didática · responsabilidade muda, não desaparece</span><h3>Quem administra cada camada?</h3></div><div class="visual-body"><div class="service-stack"><div><strong>IaaS</strong><span>provedor: físico/virtualização<br>escola: SO até dados</span></div><div><strong>PaaS</strong><span>provedor: plataforma<br>escola: aplicação/dados/acessos</span></div><div><strong>SaaS</strong><span>provedor: aplicação<br>escola: configuração, identidades e dados</span></div></div><p class="visual-question">Em qual modelo a escola ainda decide quem acessa os dados? Em todos. O que muda é a camada operada pelo fornecedor.</p></div></div>

    <div class="table-wrap"><table><thead><tr><th>Critério</th><th>Local/VM</th><th>IaaS</th><th>PaaS/SaaS</th></tr></thead><tbody><tr><td>Operação</td><td>equipe controla mais camadas</td><td>equipe mantém SO e serviço</td><td>mais camadas gerenciadas</td></tr><tr><td>Custo</td><td>equipamento, energia e equipe</td><td>consumo + operação</td><td>assinatura/uso + limites</td></tr><tr><td>Disponibilidade</td><td>depende de local, energia e link</td><td>depende de projeto e região</td><td>depende de contrato e arquitetura</td></tr><tr><td>Privacidade</td><td>controle local não elimina risco</td><td>localização, contrato e configuração</td><td>termos, exportação e identidade</td></tr><tr><td>Saída</td><td>migração de hardware/software</td><td>imagem, dados e rede</td><td>exportação, formato e dependência</td></tr></tbody></table></div>
    <div class="note-box compact"><strong>A decisão reúne papéis diferentes</strong><p>Ana confirma o impacto da feira e os dados permitidos; Joana estima operação, recuperação e risco; a direção aprova custo e tratamento de dados. Uma pontuação técnica não substitui essas responsabilidades.</p></div>

    <div class="task-box"><strong>Missão · conselho de mudança</strong><ol><li>retome público, janela, dados, RTO/RPO didáticos e responsáveis já registrados;</li><li>compare local, IaaS e PaaS/SaaS em uma matriz ponderada;</li><li>identifique custos visíveis e ocultos, inclusive transferência, backup, suporte e saída;</li><li>marque responsabilidades que nunca saem da escola: classificação do dado, identidade, configuração e governança;</li><li>proponha uma opção de homologação e uma condição para produção;</li><li>registre incertezas que exigem decisão administrativa ou jurídica.</li></ol></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O provedor opera partes da pilha; a escola continua responsável por dados, acessos, configuração e escolhas de serviço conforme o modelo."><p>Qual frase descreve responsabilidade compartilhada?</p><label><input type="radio" name="m07a" value="a"> o provedor responde por toda perda de dado</label><label><input type="radio" name="m07a" value="b"> a escola responde pelo datacenter físico em SaaS</label><label><input type="radio" name="m07a" value="c"> cada modelo transfere certas camadas, mas a escola mantém decisões sobre dados, acessos e configuração</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir análise</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>
    <div class="note-box compact"><strong>Registro da Evolução · hospedagem e responsabilidades</strong><p>Atualize o Registro da Evolução com critérios, pesos, evidências, responsáveis, custos/limites desconhecidos e recomendação condicional. Não escreva “nuvem é melhor” sem contexto.</p></div>
    <div class="bridge-box"><strong>Consequência</strong><p>Sem contrato aprovado, a equipe simulará IaaS em uma segunda VM do laboratório. A meta é ensaiar implantação e acesso remoto sem conta, cartão ou internet pública.</p></div>
  `
});
