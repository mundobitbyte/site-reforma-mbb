window.infraestruturaIntegratorLessons = Array.isArray(window.infraestruturaIntegratorLessons) ? window.infraestruturaIntegratorLessons : [];

window.infraestruturaIntegratorLessons.push({
  id: 'integrador-final',
  number: '99',
  unit: 'Plantão da Feira · Passagem entre equipes',
  menuTitle: 'Feira de Projetos',
  technicalTitle: 'ativo • rede • servidor • VM • container • serviço • evidência • recuperação • passagem',
  title: 'Coloque a Feira de Projetos em operação — e entregue o plantão',
  objective: 'Assumir o ambiente da Feira de Projetos, recuperar ou preparar funções autorizadas, provar segurança e continuidade e transferir o plantão para outra equipe.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Sábado · 6h50 · Escola Horizonte</span><h2>A feira abre às 9h. Credenciamento, intranet e arquivos precisam funcionar, e o Portal de Eventos ainda não foi aceito.</h2><p>Ana coordena a recepção em <strong>SEC-02</strong>; Caio prepara <strong>LAB-06</strong> e os projetos; Joana assume o plantão técnico. O ambiente inclui rede documentada, <strong>SRV-01</strong>, APP-LAB-01/VPS-LAB-01, o Registro de Suporte da SEC-02, o Registro da Rede, o Registro do Servidor e o Registro da Evolução. Há dados fictícios de teste e documentação parcial. Uma ou mais condições controladas podem divergir do estado esperado, sem causa informada.</p><p><strong>A missão não é manter todas as luzes verdes.</strong> É proteger pessoas e dados, sustentar decisões com evidência, recuperar o que for autorizado e entregar um estado compreensível à equipe das 12h.</p></div>

    <div class="danger-box"><strong>Autoridade e limites do plantão</strong><p>Não há produção pública, cartão, domínio real ou dados pessoais nesta prática. Não resete equipamentos, não ligue réplicas com IP duplicado à rede real, não apague volumes, não ignore TLS, não abra portas amplamente e não altere SRV-01 sem vínculo, cópia e autorização. Parar e escalar pode ser a decisão correta.</p></div>

    <h3>Documentação recebida — confira, não confie cegamente</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>Registro de Suporte · SEC-02</strong><span>chamado, inventário, baseline, acesso, logs, manutenção e recuperação</span></div><div class="artifact-card"><strong>Registro da Rede</strong><span>topologia, portas, endereços, DNS, serviços, segmentação e Wi-Fi</span></div><div class="artifact-card"><strong>Registro do Servidor</strong><span>identidades, armazenamento, SSH, systemd, Nginx, Samba, UFW e backup</span></div><div class="artifact-card"><strong>Registro da Evolução</strong><span>requisitos, VM, Docker, Compose, persistência, exposição e decisão</span></div></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · mapa de investigação, não gabarito</span><h3>Uma função cruza várias fronteiras</h3></div><div class="visual-body"><div class="diagnostic-flow"><div><span>1</span><strong>Pessoa + estação</strong><small>Ana em SEC-02<br>Caio em LAB-06</small></div><div><span>2</span><strong>Rede</strong><small>porta/VLAN/IP/DNS</small></div><div><span>3</span><strong>Host + VM</strong><small>LAB-06 → APP-LAB-01</small></div><div><span>4</span><strong>Serviço + dado</strong><small>Compose, volume, log e função</small></div></div><p class="visual-question">Se o navegador mostra “conexão recusada”, em qual fronteira você observaria primeiro com as evidências já disponíveis? O que mudaria se apenas SEC-02 falhasse?</p></div></div>

    <h3>Estado esperado da feira</h3>
    <div class="table-wrap"><table><thead><tr><th>Função</th><th>Origem/identidade</th><th>Destino</th><th>Critério observável</th></tr></thead><tbody><tr><td>Credenciamento</td><td>Ana em SEC-02</td><td>Portal via caminho autorizado</td><td>consulta e registro fictício; horário/log correlacionáveis</td></tr><tr><td>Projetos</td><td>Caio em LAB-06</td><td>intranet</td><td>nome resolve e página correta responde</td></tr><tr><td>Arquivo da secretaria</td><td>Ana/grupo autorizado</td><td>Samba em SRV-01</td><td>leitura/escrita permitida; visitante negado</td></tr><tr><td>Administração</td><td>Joana em ADM-01</td><td>SRV-01 e VM do portal</td><td>SSH autenticado, mínimo privilégio e logs</td></tr><tr><td>Visitantes</td><td>Wi-Fi visitante</td><td>somente fluxo aprovado</td><td>ativos internos continuam negados</td></tr></tbody></table></div>

    <h3>Missão do plantão</h3>
    <div class="task-box"><strong>Fase 1 · receber e compreender</strong><ol><li><strong>Identifique o impacto:</strong> pessoa, função, ativo, origem, horário, condição e prioridade.</li><li><strong>Compare os quatro registros:</strong> Suporte, Rede, Servidor e Evolução; marque divergências, lacunas e o estado que deveria existir.</li><li><strong>Defina limites:</strong> dados, público, janela, autorização, exposição, recuperação e critérios de parada.</li></ol></div>
    <div class="task-box"><strong>Fase 2 · proteger e preparar</strong><ol start="4"><li><strong>Registre o baseline:</strong> estação, caminho de rede, servidor, VM, serviço, portas, dados e capacidade relevantes para a função.</li><li><strong>Confirme a arquitetura recebida:</strong> identidades, menor privilégio, Compose/imagens, digests, volumes, escutas e alcance permitido/negado.</li><li><strong>Prove recuperação antes de arriscar:</strong> faça backup autorizado e restaure uma amostra em destino separado.</li></ol></div>
    <div class="task-box"><strong>Fase 3 · investigar e intervir</strong><ol start="7"><li><strong>Reproduza a função:</strong> teste com a pessoa/origem do cenário e correlacione horário, log e mensagem sem alterar o ambiente por impulso.</li><li><strong>Formule H1 e H2:</strong> escreva o que cada hipótese prevê e escolha o teste observacional de menor risco que melhor as separa.</li><li><strong>Decida:</strong> faça uma única mudança autorizada com rollback preparado ou pare e encaminhe quando o risco superar a evidência.</li></ol></div>
    <div class="task-box"><strong>Fase 4 · validar e passar</strong><ol start="10"><li><strong>Valide novamente:</strong> repita a função principal e um teste relacionado, incluindo persistência, log e uma negação quando pertinente.</li><li><strong>Atualize somente o que mudou:</strong> registre antes/depois, limite da conclusão, risco residual, recuperação e pendências nos quatro registros correspondentes.</li><li><strong>Entregue o plantão:</strong> a equipe receptora deve localizar as evidências e repetir um teste sem ajuda de quem realizou a intervenção.</li></ol></div>

    <div class="mbb-pause-question"><strong>Antes de cada comando, complete a frase:</strong><p>“Estou perguntando ______. Se H1 estiver correta, espero ______; se H2 estiver correta, espero ______. O risco é ______ e paro quando ______.”</p></div>

    <h3>Possíveis fronteiras de divergência</h3>
    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Ambiente controlado · causa não informada</span><h3>Uma falha pode aparecer longe da camada que o usuário cita</h3></div><div class="visual-body"><div class="scenario-grid"><article><strong>Estação</strong><p>perfil, recurso ou permissão local diverge.</p></article><article><strong>Rede e DNS</strong><p>endereço, gateway, resolvedor, VLAN ou porta física diverge.</p></article><article><strong>Identidade</strong><p>grupo ou permissão não corresponde à matriz.</p></article><article><strong>Armazenamento</strong><p>mount, espaço ou dono impede a função.</p></article><article><strong>Serviço e systemd</strong><p>unidade parada ou configuração inválida.</p></article><article><strong>Firewall e porta</strong><p>alcance permitido/negado diverge do desenho.</p></article><article><strong>Contêiner e Compose</strong><p>estado, rede, porta, imagem ou configuração mudou.</p></article><article><strong>Volume</strong><p>persistência esperada não está conectada.</p></article><article><strong>TLS e certificado</strong><p>nome, validade ou confiança interna diverge.</p></article><article><strong>Capacidade</strong><p>disco/RAM afeta serviço e produz sintomas derivados.</p></article></div><p class="visual-question">O chamado informa relato, impacto e condição inicial. A causa não vem pronta: a equipe precisa separar hipóteses pelas evidências.</p></div></div>

    <div class="danger-box"><strong>Critérios de parada do Integrador</strong><p>Pare e encaminhe se houver risco físico, alvo não identificado, dado real sem proteção, ausência de retorno, perda possível do único acesso, necessidade de mudar produção/rede real, credencial exposta, Compose privilegiado, volume único ameaçado, certificado público para <code>.example</code>, custo/conta não autorizados ou resultado inesperado com impacto crescente.</p></div>

    <h3>Evidências do plantão</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>Chamado e impacto</strong><span>impacto, pessoa, função, origem e linha do tempo</span></div><div class="artifact-card"><strong>Estado comparado</strong><span>inventário/topologia/baseline comparados</span></div><div class="artifact-card"><strong>Decisão de arquitetura</strong><span>requisito, alternativas, decisão e limite</span></div><div class="artifact-card"><strong>Implantação</strong><span>sistema, rede, acesso, Compose e digests</span></div><div class="artifact-card"><strong>Segurança e limites</strong><span>riscos, autorização, exposição e negações</span></div><div class="artifact-card"><strong>Continuidade e recuperação</strong><span>backup, restauração e retorno provado</span></div><div class="artifact-card"><strong>Investigação</strong><span>H1/H2, previsão, teste e interpretação</span></div><div class="artifact-card"><strong>Validação antes/depois</strong><span>mesma identidade, origem, função e condição</span></div><div class="artifact-card"><strong>Passagem</strong><span>estado final, riscos, pendências e responsável</span></div></div>
    <div class="note-box compact"><strong>Evidência útil muda ou sustenta uma decisão.</strong><p>Uma captura sem ativo, horário, pergunta e interpretação vira decoração. Oculte senhas, chaves, tokens, dados pessoais e identificadores desnecessários.</p></div>

    <h3>Modelo de relatório e passagem</h3>
    <textarea id="integrator-final-report" class="report-template" aria-label="Modelo de relatório integrador da área" readonly>LABORATÓRIO INTEGRADOR — INFRAESTRUTURA E SISTEMAS
Equipe / papéis / data / turno:
Ativos e ambiente isolado:
Autorização, janela e critérios de parada:

1. CHAMADO E IMPACTO
Pessoa, identidade e função:
Origem → destino → serviço:
Sintoma, mensagem, horário e condição:
Impacto e prioridade:

2. REGISTROS E ESTADO
Registros consultados — Suporte / Rede / Servidor / Evolução:
Inventário/topologia/baseline esperado:
Estado observado e divergências:
Informações ainda ausentes:

3. REQUISITOS E ARQUITETURA
Dados, público, disponibilidade e recuperação:
Alternativas comparadas:
Decisão e evidências:
Limites e aprovador:

4. PREPARAÇÃO E IMPLANTAÇÃO
Hardware/VM/SO/storage/rede:
Identidades e mínimo privilégio:
Serviços/imagens/digests/Compose:
Portas, interfaces, firewall e exposição:
Segredos protegidos (sem valores):

5. OPERAÇÃO E CONTINUIDADE
Função testada / origem / identidade:
Logs correlacionados:
Backup / destino / horário:
Restauração de amostra / comparação:
Limites do teste:

6. INCIDENTE CONTROLADO
Sintoma reformulado:
H1 / H2 e indícios:
Pergunta e previsão:
Teste / saída relevante / interpretação:
Conclusão limitada:

7. INTERVENÇÃO E VALIDAÇÃO
Alvo, autorização e risco:
Estado anterior / variável alterada:
Rollback preparado/aplicado:
Antes/depois comparável:
Função, persistência, log e negação:

8. PASSAGEM
Documentos atualizados:
Estado final e risco residual:
Pendências, responsável e prazo:
Teste repetido pela equipe receptora:
Aceite / ressalvas:</textarea>
    <p><button class="action-button" type="button" data-copy-template="#integrator-final-report">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <h3>Avaliação — resultado sem método não basta</h3>
    <div class="table-wrap"><table><thead><tr><th>Critério</th><th>Peso</th><th>Indicador</th></tr></thead><tbody><tr><td>Diagnóstico e raciocínio</td><td>25%</td><td>usa baseline, hipóteses, previsão e teste discriminante</td></tr><tr><td>Segurança e controle</td><td>20%</td><td>respeita autoridade, privilégio, dados, exposição e parada</td></tr><tr><td>Integração técnica</td><td>20%</td><td>conecta estação, rede, servidor, VM, contêiner e serviço</td></tr><tr><td>Continuidade e recuperação</td><td>15%</td><td>prova backup/restauração e rollback compatível</td></tr><tr><td>Validação e limites</td><td>10%</td><td>repete função e declara o que não foi provado</td></tr><tr><td>Documentação e passagem</td><td>10%</td><td>outra equipe repete teste e assume pendências</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A divergência restrita a uma origem fortalece hipótese local/de caminho, mas ainda requer comparar configuração e teste de outra origem."><p>O portal abre em LAB-06 e falha apenas em SEC-02. Qual próximo passo é mais informativo?</p><label><input type="radio" name="i99a" value="a"> recriar todos os contêineres</label><label><input type="radio" name="i99a" value="b"> comparar configuração/caminho de SEC-02 com uma origem funcional antes de mudar o servidor</label><label><input type="radio" name="i99a" value="c"> abrir a porta em todas as interfaces</label></div><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Sem recuperação comprovada, uma mudança destrutiva não é autorizável; preservar evidência e escalar demonstra domínio."><p>A correção provável exige migrar o único volume, mas a restauração de amostra falhou. O que fazer?</p><label><input type="radio" name="i99b" value="a"> tentar porque a feira está próxima</label><label><input type="radio" name="i99b" value="b"> usar snapshot como garantia absoluta</label><label><input type="radio" name="i99b" value="c"> parar, preservar o estado e encaminhar com evidência e plano de recuperação</label></div><div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A validação sustenta somente as identidades, origens, funções e duração observadas; outros cenários permanecem em aberto."><p>Os testes funcionais passaram por 20 minutos. Qual conclusão é defensável?</p><label><input type="radio" name="i99c" value="a"> funções descritas operaram nas condições testadas; manter acompanhamento e riscos registrados</label><label><input type="radio" name="i99c" value="b"> a infraestrutura não falhará na feira</label><label><input type="radio" name="i99c" value="c"> todos os usuários estão autorizados</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir julgamento</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>

    <div class="essence"><strong>Essência do plantão</strong><p>Competência não é decorar telas ou comandos. É conectar <strong>pessoa, função, ativo, identidade, rede, serviço, dado, evidência, risco, recuperação e passagem</strong> — e saber quando não alterar.</p></div>
    <div class="bridge-box"><strong>Passagem concluída</strong><p>A equipe das 12h recebe um ambiente explicado, sabe o que funciona, o que ainda está em risco, onde estão as evidências e qual teste repetir primeiro. O trabalho deixa de depender da memória de quem estava no plantão anterior.</p></div>
  `
});
