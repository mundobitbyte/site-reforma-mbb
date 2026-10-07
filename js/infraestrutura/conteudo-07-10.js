window.infraestruturaLessons = Array.isArray(window.infraestruturaLessons) ? window.infraestruturaLessons : [];

window.infraestruturaLessons.push({
  id: 'usuarios-permissoes',
  number: '07',
  unit: 'Administrar · Controlar mudanças',
  menuTitle: 'Usuários e permissões',
  technicalTitle: 'conta padrão • administrador • grupo • NTFS • herança • menor privilégio',
  title: 'Quem precisa usar a estação — e quem pode alterá-la?',
  objective: 'Aplicar menor privilégio em contas e arquivos de laboratório, testar acesso com identidades diferentes e documentar a reversão sem antecipar compartilhamento em rede.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Entrega da SEC-02 · Responsabilidades de acesso</span>
      <h2>Duas atendentes e a coordenadora usarão a estação; o suporte só deve administrá-la quando necessário.</h2>
      <p>Na configuração antiga, todos usavam a mesma conta administrativa: uma extensão não autorizada foi instalada e um atalho comum foi apagado sem autoria identificável. A OS 006 só pode ser encerrada quando a rotina real estiver representada por identidades e acessos verificáveis. <strong>Cada pessoa precisa de identidade própria e apenas do privilégio necessário.</strong></p>
    </div>

    <h3>Entender: identidade, privilégio e recurso</h3>
    <div class="comparison-grid three">
      <article><strong>Usuário</strong><p>Identidade usada para entrar e receber configurações e permissões.</p></article>
      <article><strong>Grupo</strong><p>Reúne identidades com uma necessidade comum, reduzindo permissões individuais difíceis de manter.</p></article>
      <article><strong>Permissão</strong><p>Regra que permite ou nega uma ação sobre um recurso, como ler ou modificar uma pasta.</p></article>
    </div>
    <div class="mbb-pause-question"><strong>Autenticar não é autorizar tudo.</strong><p>Entrar com sucesso prova que a identidade foi aceita. A permissão decide o que ela pode fazer depois.</p></div>

    <h3>Contas para tarefas diferentes</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Necessidade</th><th>Privilégio adequado</th><th>Justificativa</th></tr></thead>
      <tbody>
        <tr><td>Editar documentos e usar aplicações aprovadas</td><td>Conta padrão</td><td>Reduz o impacto de erro e instalação indevida.</td></tr>
        <tr><td>Instalar driver aprovado ou alterar configuração protegida</td><td>Credencial administrativa no momento necessário</td><td>Elevação pontual é preferível ao uso diário como administrador.</td></tr>
        <tr><td>Manutenção por equipe técnica</td><td>Conta administrativa individual e controlada</td><td>Permite responsabilização e evita senha comum sem dono.</td></tr>
      </tbody>
    </table></div>

    <h3>Experimentar: laboratório de duas identidades</h3>
    <div class="danger-box compact"><strong>Ambiente de laboratório preparado para esta prática.</strong><p>Não altere permissões de pastas do Windows, perfis reais ou documentos institucionais. Use somente contas e uma pasta de teste criadas para a aula.</p></div>
    <div class="task-box">
      <strong>Missão</strong><p>A conta <strong>Secretaria</strong> deve criar e alterar arquivos da pasta de teste. A conta <strong>Consulta</strong> deve apenas ler. A conta técnica mantém controle para reverter.</p>
      <ol>
        <li>registre proprietário, herança e permissões iniciais da pasta;</li>
        <li>preveja o resultado de abrir, criar, editar, renomear e excluir com cada conta;</li>
        <li>aplique somente as permissões planejadas nas propriedades de Segurança;</li>
        <li>saia da sessão e teste com cada identidade — não simule apenas olhando a tela administrativa;</li>
        <li>registre o resultado de cada ação e compare com a previsão;</li>
        <li>restaure o estado inicial usando o registro feito antes.</li>
      </ol>
    </div>

    <section class="visual-lab" aria-labelledby="permission-visual-title">
      <div class="visual-lab-header"><span class="visual-kicker">Missão visual · preparar o teste real</span><h4 id="permission-visual-title">Onde olhar antes de trocar de identidade?</h4><p>A representação prepara a leitura da guia Segurança; ela não substitui entrar como cada usuário e executar as ações.</p></div>
      <div class="visual-body">
        <span class="representation-badge">Representação didática — nomes e disposição podem variar</span>
        <div class="ui-representation permission-window" role="img" aria-label="Representação das propriedades de Segurança de uma pasta com identidades e permissões">
          <div class="ui-topbar"><span>Propriedades: Pasta-Laboratório</span><span class="window-dots" aria-hidden="true"><span></span><span></span><span></span></span></div>
          <div class="window-tabs"><span>Geral</span><span>Compartilhamento</span><span class="active">Segurança</span><span>Versões anteriores</span></div>
          <div class="permission-body">
            <div><strong>Usuários ou grupos</strong><div class="identity-list"><span>Secretaria</span><span class="active">Consulta</span><span>Técnicos-Lab</span><span>Usuários</span></div></div>
            <div><strong>Permissões para Consulta</strong><div class="permission-list"><strong>Ação</strong><strong>Permitir</strong><strong>Negar</strong><span>Ler e executar</span><span class="mark">✓</span><span>—</span><span>Listar conteúdo</span><span class="mark">✓</span><span>—</span><span>Gravar</span><span>—</span><span>—</span><span>Modificar</span><span>—</span><span>—</span><span class="inherit">Permissões especiais</span><span class="inherit">herdada</span><span>—</span><small class="inherit-note">“Herdada” é uma pista: o acesso efetivo pode vir da pasta-pai ou de outro grupo.</small></div></div>
          </div>
        </div>
        <ol class="observation-prompts"><li><strong>Localize</strong>Qual identidade está selecionada e em qual guia?</li><li><strong>Preveja</strong>Consulta deve abrir? Deve criar, editar, renomear ou excluir?</li><li><strong>Investigue</strong>Se o teste divergir, quais grupos e permissões herdadas precisam ser revisados?</li></ol>

        <div class="evidence-switcher" data-evidence-switcher>
          <p><strong>Preveja e então compare os testes por identidade:</strong></p>
          <div class="switcher-buttons" role="group" aria-label="Selecionar identidade de teste"><button type="button" data-evidence-view="secretaria" aria-pressed="true">Secretaria</button><button type="button" data-evidence-view="consulta" aria-pressed="false">Consulta</button><button type="button" data-evidence-view="tecnico" aria-pressed="false">Técnico</button></div>
          <div class="evidence-panel" data-evidence-panel="secretaria"><h4>Teste como Secretaria</h4><div class="result-matrix"><div class="result-cell allowed"><strong>Abrir ✓</strong>observado</div><div class="result-cell allowed"><strong>Criar ✓</strong>observado</div><div class="result-cell allowed"><strong>Editar ✓</strong>observado</div><div class="result-cell allowed"><strong>Excluir ✓</strong>observado</div></div></div>
          <div class="evidence-panel" data-evidence-panel="consulta" hidden><h4>Teste como Consulta</h4><div class="result-matrix"><div class="result-cell allowed"><strong>Abrir ✓</strong>observado</div><div class="result-cell blocked"><strong>Criar bloqueado</strong>mensagem registrada</div><div class="result-cell blocked"><strong>Editar bloqueado</strong>mensagem registrada</div><div class="result-cell blocked"><strong>Excluir bloqueado</strong>mensagem registrada</div></div></div>
          <div class="evidence-panel" data-evidence-panel="tecnico" hidden><h4>Teste como Técnico</h4><div class="result-matrix"><div class="result-cell allowed"><strong>Abrir ✓</strong>observado</div><div class="result-cell allowed"><strong>Criar ✓</strong>observado</div><div class="result-cell allowed"><strong>Administrar ✓</strong>observado</div><div class="result-cell allowed"><strong>Reverter ✓</strong>testado</div></div></div>
        </div>
        <div class="visual-question"><strong>Evidência esperada:</strong> conta usada + ação tentada + resultado/mensagem + horário. A tela administrativa indica intenção; o teste com a identidade mostra o acesso observado.</div>
      </div>
    </section>

    <h3>Analisar: permitir é mais simples que explicar o resultado</h3>
    <div class="evidence-grid">
      <article><strong>Consulta abre, mas não salva</strong><p>O resultado corresponde à leitura sem modificação. A mensagem e a conta usada são evidências.</p></article>
      <article><strong>Consulta consegue excluir</strong><p>Há permissão efetiva adicional, possivelmente herdada ou vinda de outro grupo. Revise a composição, não apenas uma linha.</p></article>
      <article><strong>Secretaria perdeu acesso</strong><p>A alteração foi ampla demais. Use o registro inicial e reverta; não adicione “Controle total” a todos para esconder o erro.</p></article>
      <article><strong>Administrador acessa</strong><p>Isso não prova que usuários comuns terão o mesmo acesso. O teste deve usar a identidade real do cenário.</p></article>
    </div>
    <div class="note-box compact"><strong>Negação explícita exige cuidado.</strong><p>Ela pode prevalecer sobre permissões concedidas por outros grupos e tornar o resultado difícil para iniciantes. Neste laboratório, prefira conceder apenas o necessário e preservar a herança planejada.</p></div>

    <h3>Aplicar: matriz de acesso da organização</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Recurso</th><th>Secretaria</th><th>Consulta</th><th>Técnico</th><th>Evidência</th></tr></thead>
      <tbody><tr><td>Pasta de laboratório</td><td>Ler/modificar</td><td>Ler</td><td>Administrar/reverter</td><td>Testes de abrir, criar, editar e excluir.</td></tr></tbody>
    </table></div>
    <p>A matriz passa a integrar o termo de entrega da SEC-02: ela registra o estado esperado para as atendentes, para a coordenadora e para o suporte. Se um resultado futuro divergir, a equipe poderá comparar identidade, grupos, herança e permissão efetiva com esse estado.</p>

    <div class="state-comparison" aria-label="Antes, intervenção, depois e interpretação das permissões">
      <div class="state-step"><strong>Antes</strong><span>Consulta consegue excluir; estado inicial e herança registrados.</span></div>
      <div class="state-step"><strong>Intervenção</strong><span>Conceder somente leitura no recurso de laboratório.</span></div>
      <div class="state-step"><strong>Depois</strong><span>Consulta lê, mas criar/editar/excluir são bloqueados no teste real.</span></div>
      <div class="state-step"><strong>O que prova?</strong><span>Essa identidade, nesse recurso e nesse momento obteve o acesso previsto.</span></div>
    </div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Menor privilégio</span><h3>Instalar sem trabalhar sempre como administrador</h3>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A elevação pontual atende a tarefa sem manter privilégios amplos durante todo o uso diário."><p>Qual configuração é mais adequada?</p><label><input type="radio" name="q07a" value="a"> Usuário padrão no dia a dia e credencial administrativa controlada quando necessário.</label><label><input type="radio" name="q07a" value="b"> Todos administradores com a mesma senha.</label><label><input type="radio" name="q07a" value="c"> Nenhuma conta com senha.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O acesso efetivo precisa ser testado com a identidade do usuário; a visão do administrador não reproduz todas as regras aplicadas."><p>Como validar que “Consulta” não altera arquivos?</p><label><input type="radio" name="q07b" value="a"> Ler a lista de permissões como administrador.</label><label><input type="radio" name="q07b" value="b"> Perguntar se o usuário acha que consegue.</label><label><input type="radio" name="q07b" value="c"> Entrar como Consulta e testar ações previstas na pasta de laboratório.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Permissão profissional liga <strong>identidade, necessidade, recurso, ação e teste</strong>. Menor privilégio reduz impacto; conta individual e registro permitem continuidade e responsabilização.</p></div>
    <div class="bridge-box"><strong>Entrega concluída; novo chamado</strong><p>A OS 006 é encerrada com baseline e matriz de acesso. Na primeira manhã de uso, uma atendente relata lentidão dois minutos após entrar em sua conta; o suporte não observou o sintoma na conta técnica. Essa diferença de identidade e horário abre o Chamado 021.</p></div>
  `
});

window.infraestruturaLessons.push({
  id: 'processos-servicos-logs',
  number: '08',
  unit: 'Administrar · Observar o sistema',
  menuTitle: 'Processos, serviços e logs',
  technicalTitle: 'processo • serviço • inicialização • Task Manager • Event Viewer • correlação',
  title: 'O que está executando — e qual evidência liga isso à falha?',
  objective: 'Observar consumo, inicialização, serviços e eventos no Windows, realizar uma mudança controlada em laboratório e correlacionar horário, componente e sintoma.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Chamado 021 · Secretaria · SEC-02</span>
      <h2>Às 8h, a atendente entra em sua conta; às 8h02, a planilha de atendimento quase não responde.</h2>
      <p>Na validação da OS 006 e na conta técnica, o baseline não mostrou essa saturação. A diferença aponta para algo iniciado com a identidade da atendente, mas ainda não prova a causa. Encerrar tudo poderia destruir pistas e interromper trabalho. <strong>Primeiro precisamos correlacionar processo, recurso, evento, horário e conta.</strong></p>
    </div>

    <h3>Entender: programa, processo e serviço</h3>
    <div class="comparison-grid three">
      <article><strong>Programa</strong><p>Conjunto de instruções armazenado, como um navegador instalado.</p></article>
      <article><strong>Processo</strong><p>Instância em execução, com recursos e estado próprios.</p></article>
      <article><strong>Serviço</strong><p>Componente gerenciado pelo sistema que pode executar em segundo plano, muitas vezes sem janela aberta.</p></article>
    </div>
    <p>Um aplicativo pode criar vários processos; diversos serviços podem compartilhar um processo hospedeiro. Por isso, o nome visto na lista é uma pista, não uma explicação completa.</p>

    <h3>Experimentar: construir uma linha do tempo</h3>
    <div class="task-box">
      <ol>
        <li>registre a identidade, o horário do login e o momento em que a lentidão começa; compare com o baseline da OS 006;</li>
        <li>abra o <strong>Gerenciador de Tarefas</strong> e ordene por CPU, memória e disco, uma métrica por vez;</li>
        <li>anote nome, editor quando disponível, caminho/contexto e duração do pico;</li>
        <li>observe a área de <strong>Aplicativos de inicialização</strong>, sem desabilitar ainda;</li>
        <li>abra o <strong>Visualizador de Eventos</strong> e procure eventos de Aplicativo/Sistema próximos ao horário;</li>
        <li>relacione sintoma, processo, recurso e evento; descarte coincidências sem relação temporal ou funcional.</li>
      </ol>
    </div>

    <section class="visual-lab" aria-labelledby="taskmanager-visual-title">
      <div class="visual-lab-header"><span class="visual-kicker">Missão visual · interpretar consumo</span><h4 id="taskmanager-visual-title">Qual processo merece investigação — e qual ainda não merece encerramento?</h4><p>A amostra representa o estado dois minutos após o login, no momento da lentidão.</p></div>
      <div class="visual-body">
        <span class="representation-badge">Representação didática do Gerenciador de Tarefas</span>
        <div class="ui-representation task-window" role="img" aria-label="Representação do Gerenciador de Tarefas com CPU, memória, disco e lista de processos">
          <div class="ui-topbar"><span>Gerenciador de Tarefas · Processos</span><span>08:02:14</span></div>
          <div class="metric-strip"><div class="metric"><strong>23%</strong>CPU</div><div class="metric"><strong>61%</strong>Memória</div><div class="metric"><strong>96%</strong>Disco</div><div class="metric"><strong>2%</strong>GPU</div></div>
          <div class="process-rows"><div class="process-row header"><span>Nome</span><span>CPU</span><span>Memória</span><span>Disco</span></div><div class="process-row"><span class="process-name"><strong>Editor de planilhas</strong><span>documento aberto</span></span><span>12%</span><span>420 MB</span><span>1%</span></div><div class="process-row investigate"><span class="process-name"><strong>Sincronização Escola</strong><span>editor verificado · iniciou 08:01</span></span><span>3%</span><span>640 MB</span><span>88%</span></div><div class="process-row"><span class="process-name"><strong>Explorador do Windows</strong><span>Microsoft</span></span><span>1%</span><span>185 MB</span><span>0%</span></div><div class="process-row"><span class="process-name"><strong>Antimalware</strong><span>Microsoft</span></span><span>4%</span><span>310 MB</span><span>5%</span></div></div>
        </div>
        <ol class="observation-prompts"><li><strong>Observe</strong>Qual recurso está saturado no instante do sintoma?</li><li><strong>Relacione</strong>Qual processo concentra o uso desse recurso e quando iniciou?</li><li><strong>Limite</strong>Isso prova causa? Qual teste controlado preserva o trabalho e a evidência?</li></ol>
        <button class="action-button" type="button" data-reveal-answer="#task-evidence" aria-expanded="false">Conferir leitura da evidência</button>
        <div id="task-evidence" class="ok-box compact" hidden><strong>Hipótese, não sentença</strong><p>O disco está em 96% e “Sincronização Escola” responde pela maior atividade, no intervalo do sintoma. Isso fortalece a hipótese de relação com a lentidão. Registre duração e recorrência; depois teste apenas a inicialização automática aprovada. Não finalize o processo aleatoriamente.</p></div>
      </div>
    </section>

    <h3>Uma linha vermelha não é automaticamente a causa</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Campo do evento</th><th>Pergunta diagnóstica</th></tr></thead>
      <tbody>
        <tr><td>Data e hora</td><td>Coincide com a ocorrência observada?</td></tr>
        <tr><td>Origem/componente</td><td>Tem relação funcional com o sintoma?</td></tr>
        <tr><td>ID e mensagem</td><td>O que foi registrado literalmente, sem completar lacunas?</td></tr>
        <tr><td>Recorrência</td><td>Aparece em todas as ocorrências ou também quando tudo funciona?</td></tr>
        <tr><td>Mudança recente</td><td>Começou após atualização, instalação ou configuração documentada?</td></tr>
      </tbody>
    </table></div>
    <div class="note-box compact"><strong>Correlação não prova causalidade.</strong><p>Um evento no mesmo horário fortalece uma hipótese; repetir o sintoma e observar o mesmo vínculo produz evidência melhor.</p></div>

    <section class="visual-lab" aria-labelledby="event-visual-title">
      <div class="visual-lab-header"><span class="visual-kicker">Missão visual · correlacionar eventos</span><h4 id="event-visual-title">Qual evento merece entrar na linha do tempo?</h4><p>Não escolha pela cor: compare horário, origem, ID, mensagem e relação funcional.</p></div>
      <div class="visual-body">
        <span class="representation-badge">Representação didática do Visualizador de Eventos</span>
        <div class="ui-representation event-window" role="img" aria-label="Representação do Visualizador de Eventos com linhas de data, origem, ID e mensagem">
          <div class="ui-topbar"><span>Visualizador de Eventos · Logs do Windows · Aplicativo</span><span>Chamado: sintoma às 08:02</span></div>
          <div class="event-layout"><div class="event-tree"><strong>Logs do Windows</strong><span class="active">Aplicativo</span><span>Segurança</span><span>Instalação</span><span>Sistema</span></div><div class="event-content"><div class="event-row header"><span>Data e hora</span><span>Origem</span><span>ID</span><span>Resumo</span></div><div class="event-row"><span>07:44:09</span><span>DistributedCOM</span><span>10016</span><span>Aviso registrado antes do login</span></div><div class="event-row related"><span>08:02:18</span><span>SyncEscola</span><span>204</span><span>Varredura completa iniciada; 18.426 itens</span></div><div class="event-row"><span>08:17:51</span><span>Application Error</span><span>1000</span><span>Falha de aplicativo não reproduzida</span></div><div class="event-detail"><strong>Evento selecionado · SyncEscola · ID 204</strong>Horário coincide com o pico; componente tem relação funcional com a sincronização observada. A mensagem descreve início de varredura, mas não afirma que ela causou toda a lentidão.</div></div></div>
        </div>
        <ol class="observation-prompts"><li><strong>Localize</strong>Qual linha coincide com 08:02 e com o componente observado?</li><li><strong>Questione</strong>O aviso 10016 anterior prova algo sobre este sintoma?</li><li><strong>Próximo teste</strong>Que repetição permitiria comparar o mesmo intervalo com uma variável alterada?</li></ol>
        <div class="visual-question"><strong>Registro mínimo:</strong> “Na conta da atendente, às 08:02:18, origem SyncEscola, ID 204, registrou varredura de 18.426 itens; no mesmo intervalo, o processo usou 88% do disco. Relação causal ainda em teste.”</div>
      </div>
    </section>

    <h3>Intervenção segura: uma inicialização por vez</h3>
    <p>No Chamado 021, o aplicativo aprovado que sincroniza documentos da secretaria inicia com a atendente e executa uma varredura completa. A política permite alterar apenas sua inicialização automática; a sincronização ainda precisa ocorrer em horário definido.</p>
    <ol>
      <li>registre o estado “Habilitado”, o impacto indicado e a forma de reativar;</li>
      <li>desabilite somente esse item no ambiente de laboratório;</li>
      <li>reinicie ou entre novamente conforme o teste definido;</li>
      <li>repita a medição no mesmo intervalo e com a mesma carga;</li>
      <li>se o sintoma não mudar, reative e revise a hipótese.</li>
    </ol>
    <div class="state-comparison" aria-label="Antes, intervenção, depois e interpretação do teste de inicialização">
      <div class="state-step"><strong>Antes</strong><span>Após login: pico de disco 96%; sintoma em 2 min; evento 204 às 08:02.</span><small class="evidence-id">ANTES</small></div>
      <div class="state-step"><strong>Intervenção</strong><span>Desabilitar somente a inicialização automática aprovada.</span><small class="evidence-id">MUDANÇA AUTORIZADA</small></div>
      <div class="state-step"><strong>Depois</strong><span>Mesma carga: pico 24%; sintoma não observado em 10 min.</span><small class="evidence-id">DEPOIS</small></div>
      <div class="state-step"><strong>O que prova?</strong><span>A hipótese ficou mais forte nessa condição. Ainda é preciso repetir e manter a sincronização por outro fluxo.</span></div>
    </div>
    <div class="mbb-pause-question"><strong>Alívio não é solução completa.</strong><p>Se desabilitar a inicialização reduz a lentidão, ainda precisamos decidir quando e como a sincronização necessária ocorrerá. Uma correção não pode criar perda de proteção dos arquivos.</p></div>

    <h3>Serviços: laboratório reversível</h3>
    <div class="danger-box compact"><strong>Não pare serviços aleatoriamente.</strong><p>Em uma VM de laboratório, escolha somente um serviço indicado no cenário, registre estado/tipo de inicialização, pare, observe o efeito previsto e restaure imediatamente. Nunca use estação de produção.</p></div>
    <p>O objetivo é demonstrar a relação <strong>serviço → função → evidência → restauração</strong>, não decorar nomes nem “otimizar” o Windows removendo componentes.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Interpretação de evidência</span><h3>Evento e lentidão ocorreram às 8h02</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A coincidência temporal e funcional fortalece a hipótese, mas o teste controlado e repetível é necessário para sustentar causalidade."><p>O que podemos concluir?</p><label><input type="radio" name="q08a" value="a"> O evento prova definitivamente a causa.</label><label><input type="radio" name="q08a" value="b"> Há uma hipótese relevante que precisa ser testada de forma controlada.</label><label><input type="radio" name="q08a" value="c"> Todo evento de erro deve ser apagado.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Processos do sistema, trabalho não salvo e dependências podem ser afetados; observar e identificar precede encerrar."><p>Por que não usar “Finalizar tarefa” em tudo que consome recurso?</p><label><input type="radio" name="q08b" value="a"> Porque podemos interromper funções, perder trabalho e destruir evidências.</label><label><input type="radio" name="q08b" value="b"> Porque o botão nunca funciona.</label><label><input type="radio" name="q08b" value="c"> Porque consumo de recurso sempre é defeito físico.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Gerenciador de Tarefas mostra estado; serviços sustentam funções; logs registram eventos. O diagnóstico nasce da <strong>correlação entre horário, sintoma, componente, mudança e repetição</strong>.</p></div>
    <div class="bridge-box"><strong>Consequência do Chamado 021</strong><p>A equipe programou a sincronização fora do início do atendimento e anexou ao chamado a comparação antes → mudança → depois. Ao explicar a mudança, percebeu que sincronização era tratada como backup, mas ninguém havia testado uma restauração. A coordenação solicita um plano preventivo para a escola.</p></div>

    <details class="sources-box"><summary>Referência oficial</summary><ul><li><a href="https://learn.microsoft.com/en-us/shows/inside/event-viewer" target="_blank" rel="noopener">Microsoft Learn — Event Viewer</a></li></ul></details>
  `
});

window.infraestruturaLessons.push({
  id: 'manutencao-backup',
  number: '09',
  unit: 'Manter · Prevenir e recuperar',
  menuTitle: 'Manutenção e backup',
  technicalTitle: 'atualização • espaço • temperatura • limpeza • backup • sincronização • restauração',
  title: 'Como evitar falhas — e provar que a recuperação funciona?',
  objective: 'Montar uma rotina preventiva de baixo risco, diferenciar backup de sincronização e validar restauração de arquivos antes de depender dela.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Plano preventivo 003 · Pequena escola</span>
      <h2>O Chamado 021 terminou, mas revelou um risco que pertence à organização inteira.</h2>
      <p>Os registros da SEC-02 mostram espaço crescendo, atualização pendente e sincronização sem restauração testada; a inspeção das outras estações revela entradas de ar bloqueadas e nenhum calendário comum. A coordenadora quer saber quem verifica cada item e qual evidência recebe. <strong>Manutenção preventiva transforma surpresas em estados observáveis e recuperáveis.</strong></p>
    </div>

    <h3>Entender: manutenção não é “limpeza milagrosa”</h3>
    <div class="comparison-grid three">
      <article><strong>Preventiva</strong><p>Reduz probabilidade e impacto de falhas por inspeção, atualização, limpeza adequada, espaço e testes.</p></article>
      <article><strong>Corretiva</strong><p>Restaura uma função depois que a falha ocorreu.</p></article>
      <article><strong>Monitoramento</strong><p>Acompanha sinais ao longo do tempo para perceber tendência antes da indisponibilidade.</p></article>
    </div>
    <div class="danger-box compact"><strong>Evite “otimizadores” e limpeza automática sem alvo.</strong><p>Excluir cache, registro ou arquivos com ferramenta desconhecida pode remover evidência e criar falhas. Primeiro identifique consumo, finalidade e impacto.</p></div>

    <h3>Experimentar: inspeção preventiva documentada</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Item</th><th>Observar</th><th>Ação de baixo risco</th><th>Evidência</th></tr></thead>
      <tbody>
        <tr><td>Atualizações</td><td>Pendências, falhas, reinício exigido</td><td>Aplicar em janela planejada e validar funções</td><td>Data, resultado e pendências.</td></tr>
        <tr><td>Armazenamento</td><td>Espaço livre e crescimento por categoria</td><td>Revisar arquivos conhecidos com o responsável</td><td>Antes/depois e o que foi removido/movido.</td></tr>
        <tr><td>Inicialização</td><td>Itens desnecessários e impacto observado</td><td>Desabilitar somente item aprovado e reversível</td><td>Tempo/recursos comparados na mesma condição.</td></tr>
        <tr><td>Ventilação</td><td>Entradas bloqueadas, ruído e temperatura sob carga</td><td>Reposicionar; limpeza externa e interna apenas conforme manual</td><td>Condição visual e comportamento antes/depois.</td></tr>
        <tr><td>Backup</td><td>Última execução, erros, destino e retenção</td><td>Executar política e restaurar uma amostra</td><td>Arquivo restaurado e conferido.</td></tr>
      </tbody>
    </table></div>
    <div class="note-box compact"><strong>SSD não precisa de desfragmentação tradicional manual.</strong><p>Use a manutenção nativa do sistema conforme planejada. Não aplique receitas antigas de HDD a qualquer dispositivo de armazenamento.</p></div>

    <h3>Backup, sincronização e restauração</h3>
    <div class="comparison-grid three">
      <article><strong>Sincronização</strong><p>Mantém locais alinhados. Exclusão ou corrupção pode se propagar.</p></article>
      <article><strong>Backup</strong><p>Mantém cópias recuperáveis conforme uma política de versões, retenção e proteção.</p></article>
      <article><strong>Restauração</strong><p>Recupera dados para uso. É o teste que transforma promessa em evidência.</p></article>
    </div>
    <p>Uma política robusta costuma manter múltiplas cópias em meios/localizações diferentes, com ao menos uma protegida contra o mesmo incidente. O desenho exato depende do valor, volume, tempo de recuperação e recursos da organização.</p>

    <h3>Prática guiada: recuperar sem sobrescrever</h3>
    <div class="task-box">
      <ol>
        <li>crie três arquivos fictícios de secretaria, sem dados pessoais, e registre conteúdo, data e tamanho;</li>
        <li>execute o método de backup fornecido pelo laboratório;</li>
        <li>altere um arquivo e exclua outro na origem;</li>
        <li>restaure versões para uma <strong>pasta separada</strong>, preservando o estado atual;</li>
        <li>abra os arquivos restaurados e compare conteúdo, data e tamanho;</li>
        <li>registre tempo de recuperação, falhas e limite do que foi testado.</li>
      </ol>
    </div>
    <div class="state-comparison" aria-label="Antes, intervenção, depois e interpretação do teste de restauração">
      <div class="state-step"><strong>Antes</strong><span>Três arquivos conhecidos; conteúdo, data e tamanho registrados.</span><small class="evidence-id">AMOSTRA REGISTRADA</small></div>
      <div class="state-step"><strong>Intervenção</strong><span>Alterar/excluir na origem e restaurar em pasta separada.</span><small class="evidence-id">ALTERAÇÃO CONTROLADA</small></div>
      <div class="state-step"><strong>Depois</strong><span>Arquivos restaurados abrem e correspondem ao registro da amostra.</span><small class="evidence-id">RESTAURAÇÃO CONFERIDA</small></div>
      <div class="state-step"><strong>O que prova?</strong><span>Essa amostra foi recuperada por esse caminho; não prova todo o ambiente.</span></div>
    </div>
    <div class="mbb-pause-question"><strong>“Backup concluído” não basta.</strong><p>O teste com três arquivos prova apenas essa amostra e esse caminho de restauração. Documente a conclusão no tamanho correto: não afirme que todo o ambiente é recuperável sem testar o necessário.</p></div>

    <h3>Aplicar: calendário com responsável</h3>
    <div class="note-box compact"><ul>
      <li><strong>semanal:</strong> atualizações, espaço, alertas e resultado do backup;</li>
      <li><strong>mensal:</strong> teste de restauração de amostra e revisão de inicialização;</li>
      <li><strong>conforme ambiente:</strong> inspeção física e limpeza pelo procedimento do fabricante;</li>
      <li><strong>antes de mudança relevante:</strong> backup, ponto de retorno e janela de validação.</li>
    </ul><p>Cada item precisa de responsável, data, evidência e ação quando houver falha.</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Recuperação real</span><h3>A pasta sincronizada sumiu em todos os dispositivos</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Sincronização pode propagar exclusões; recuperação depende de lixeira, histórico de versões, retenção ou outro backup independente."><p>O que isso demonstra?</p><label><input type="radio" name="q09a" value="a"> Sincronização sempre substitui backup.</label><label><input type="radio" name="q09a" value="b"> A organização precisa verificar versões/retenção e manter recuperação adequada ao risco.</label><label><input type="radio" name="q09a" value="c"> O SSD está necessariamente defeituoso.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Restaurar em local separado preserva o estado atual e permite comparar antes de substituir qualquer arquivo."><p>Onde restaurar primeiro um documento de teste?</p><label><input type="radio" name="q09b" value="a"> Em uma pasta separada para conferir.</label><label><input type="radio" name="q09b" value="b"> Diretamente sobre o arquivo atual.</label><label><input type="radio" name="q09b" value="c"> Na lixeira.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Manutenção preventiva observa tendências e reduz risco. Backup só cumpre sua função quando existe <strong>cópia adequada, retenção, proteção e restauração testada</strong>.</p></div>
    <div class="bridge-box"><strong>O ambiente mudou</strong><p>O Plano 003 atribui responsáveis, reúne baselines e registra uma restauração de amostra. Com referências confiáveis para mais de uma estação, a equipe pode atender novas falhas sem reiniciar o raciocínio do zero.</p></div>

    <details class="sources-box"><summary>Documentação oficial atual</summary><ul>
      <li><a href="https://support.microsoft.com/pt-br/windows/experience/backup-recovery/backup-restore-and-recovery-in-windows" target="_blank" rel="noopener">Microsoft — backup, restauração e recuperação no Windows</a></li>
      <li><a href="https://support.microsoft.com/pt-br/windows/experience/backup-recovery/backup-and-restore-with-file-history" target="_blank" rel="noopener">Microsoft — Histórico de Arquivos</a></li>
    </ul></details>
  `
});

window.infraestruturaLessons.push({
  id: 'diagnostico-substituicao',
  number: '10',
  unit: 'Manter · Prevenir e recuperar',
  menuTitle: 'Diagnóstico controlado',
  technicalTitle: 'hipótese • teste seguro • known-good • troca cruzada • isolamento • validação',
  title: 'Como isolar uma falha sem trocar tudo ao mesmo tempo?',
  objective: 'Aplicar o ciclo completo de diagnóstico em casos de hardware, armazenamento e periféricos, usando comparação conhecida e substituição controlada somente quando segura.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Fila de segunda-feira · Três novos chamados</span>
      <h2>O monitor da LAB-06 apaga durante a aula; a SALA-04 não reconhece a mídia da professora; a ADM-01 fica lenta após dez minutos.</h2>
      <p>Os impactos são diferentes, mas nenhum relato prova a causa. O Plano 003 fornece inventários, baselines, cabos e uma mídia de teste conhecidos; cada responsável informa horário e condição do sintoma. <strong>Diagnosticar é escolher a comparação que reduz possibilidades sem criar outro problema.</strong></p>
    </div>

    <h3>O ciclo que atravessa todos os casos</h3>
    <div class="process-flow" aria-label="Ciclo resumido de diagnóstico">
      <div><strong>Sintoma</strong><span>descrever sem concluir</span></div>
      <div><strong>Hipóteses</strong><span>ordenar por evidência, risco e custo</span></div>
      <div><strong>Teste</strong><span>uma variável e resultado previsto</span></div>
      <div><strong>Isolamento</strong><span>reduzir causas possíveis</span></div>
      <div><strong>Validação</strong><span>repetir carga e documentar</span></div>
    </div>
    <p>Um bom teste produz resultados diferentes para hipóteses diferentes. “Reiniciar para ver” pode ser válido, mas é fraco se você não registrou o estado e não sabe o que o resultado distinguirá.</p>

    <h3>Ferramentas de comparação</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Known-good</span><p>Componente, cabo, porta, conta, mídia ou configuração que sabemos funcionar e usamos como referência.</p></div>
      <div class="definition-box"><span class="term">Troca cruzada</span><p>Compara dois sistemas compatíveis e observa se o sintoma acompanha o item trocado ou permanece no sistema.</p></div>
    </div>
    <div class="note-box compact"><strong>Troca cruzada também altera encaixe e contato.</strong><p>Se o problema some, registre tudo o que mudou. Reencaixar um cabo pode ter sido a variável real; a peça removida não está automaticamente condenada.</p></div>

    <h3>Caso A · LAB-06: “o monitor apaga por alguns segundos”</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Hipótese</th><th>Teste discriminante</th><th>Interpretação limitada</th></tr></thead>
      <tbody>
        <tr><td>Cabo/conexão</td><td>Usar cabo known-good compatível e manter mesma porta/carga</td><td>Se estabilizar, cabo/conexão ganha força; repetir para confirmar.</td></tr>
        <tr><td>Monitor</td><td>Ligar o monitor em outra fonte compatível conhecida</td><td>Se o sintoma acompanhar o monitor, a hipótese do monitor ganha força.</td></tr>
        <tr><td>Saída/driver da estação</td><td>Usar outro monitor conhecido na mesma saída e correlacionar logs/horário</td><td>Se permanecer, investigar estação, driver, saída ou energia.</td></tr>
      </tbody>
    </table></div>

    <h3>Caso B · SALA-04: “a mídia da professora não aparece”</h3>
    <ol>
      <li>registre porta, dispositivo, horário e sinais físicos;</li>
      <li>observe Gerenciador de Dispositivos e Gerenciamento de Disco sem formatar;</li>
      <li>teste outra porta conhecida na mesma máquina;</li>
      <li>teste um pendrive known-good na porta original;</li>
      <li>se autorizado e seguro, teste o pendrive original em outra máquina;</li>
      <li>interrompa se houver calor, cheiro, conector danificado ou dados importantes sem cópia.</li>
    </ol>
    <div class="danger-box compact"><strong>“Formatar para reconhecer” pode destruir dados.</strong><p>Uma partição sem letra, um sistema de arquivos não suportado e uma mídia fisicamente falhando exigem decisões diferentes. Preserve antes de alterar.</p></div>

    <h3>Caso C · ADM-01: “a estação fica lenta depois de dez minutos”</h3>
    <div class="evidence-grid">
      <article><strong>Recurso</strong><p>Compare CPU, RAM e disco no mesmo intervalo e carga do baseline.</p></article>
      <article><strong>Temperatura</strong><p>Observe ventilação, ruído, ambiente e comportamento sob carga; não conclua sem medida confiável.</p></article>
      <article><strong>Processo</strong><p>Relacione o pico a processo, inicialização e evento, sem encerrar aleatoriamente.</p></article>
      <article><strong>Armazenamento</strong><p>Espaço, erros, latência e desconexões podem orientar encaminhamento; teste pesado pode ser inadequado em unidade instável.</p></article>
    </div>

    <h3>Decidir substituir</h3>
    <p>Substituição é justificável quando compatibilidade foi confirmada, o teste isolou o componente com evidência suficiente, o custo/risco é aceitável e existe plano de validação. “É velho” ou “o novo é mais rápido” não constitui diagnóstico.</p>
    <div class="note-box compact"><strong>Conclusão técnica curta · LAB-06</strong><p>“O sintoma acompanhou o cabo em três repetições; com cabo conhecido, os dois monitores permaneceram estáveis sob a mesma carga. Substituição do cabo aprovada. Limite: a falha não reapareceu durante 30 minutos de teste.”</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Isolamento</span><h3>O problema mudou depois da troca</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A troca pode ter alterado peça, contato, cabo ou posição; é preciso controlar e repetir para saber o que acompanhou o sintoma."><p>Podemos declarar a peça antiga defeituosa?</p><label><input type="radio" name="q10a" value="a"> Sim, qualquer melhora prova defeito.</label><label><input type="radio" name="q10a" value="b"> Sim, se a peça for mais velha.</label><label><input type="radio" name="q10a" value="c"> Ainda não. Precisamos considerar tudo o que mudou e repetir o teste controlado.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="O teste deve separar hipóteses e prever resultados; múltiplas mudanças simultâneas impedem atribuir efeito."><p>Qual é a principal vantagem de alterar uma variável por vez?</p><label><input type="radio" name="q10b" value="a"> Relacionar o resultado à mudança específica.</label><label><input type="radio" name="q10b" value="b"> Garantir que nenhuma falha volte.</label><label><input type="radio" name="q10b" value="c"> Evitar qualquer documentação.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Diagnóstico controlado descreve, prevê, testa e limita a conclusão. <strong>Known-good e troca cruzada só valem quando compatibilidade, segurança e variáveis estão sob controle.</strong></p></div>
    <div class="bridge-box"><strong>O plantão muda de equipe</strong><p>Os três chamados deixam informações ainda ausentes, testes possíveis e limites. Outra equipe receberá um desses atendimentos e precisará continuar a investigação a partir do estado encontrado, sem inventar o que não foi observado.</p></div>
  `
});
