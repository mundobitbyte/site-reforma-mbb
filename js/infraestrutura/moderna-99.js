window.infraestruturaModernLessons = Array.isArray(window.infraestruturaModernLessons) ? window.infraestruturaModernLessons : [];

window.infraestruturaModernLessons.push({
  id: 'moderna-oficina',
  number: '99',
  unit: 'Oficina final · Evolução controlada',
  menuTitle: 'Migrar e recuperar',
  technicalTitle: 'requisitos • VM • Compose • persistência • exposição • falha • rollback • passagem',
  title: 'Receba o portal, evolua uma camada e prove continuidade',
  objective: 'Assumir um ambiente documentado por outra equipe, executar uma evolução autorizada e diagnosticar uma falha sem sacrificar dados ou rastreabilidade.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Sexta-feira · 13h30 · passagem entre equipes</span><h2>O Portal de Eventos precisa ser preparado para o ensaio da feira — e o ambiente recebido não coincide totalmente com a documentação.</h2><p>A equipe recebe APP-LAB-01 ou VPS-LAB-01, o Registro da Evolução atualizado e uma solicitação: validar uma atualização ou reproduzir o serviço em outra VM. O ambiente contém uma condição controlada cuja causa não foi informada. <strong>O resultado válido pode ser implantar, reverter ou parar com evidência.</strong></p></div>

    <h3>Envelope recebido</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>Necessidade e alternativas</strong><span>público, impacto, dado e limite</span></div><div class="artifact-card"><strong>VM e medições</strong><span>host, recursos, rede e snapshot</span></div><div class="artifact-card"><strong>Capacidade e custo</strong><span>uma/duas VMs e custo operacional</span></div><div class="artifact-card"><strong>Runtime e contêineres</strong><span>Docker, versões e estados</span></div><div class="artifact-card"><strong>Persistência</strong><span>camada, bind e evidência</span></div><div class="artifact-card"><strong>Compose e serviços</strong><span>serviços, redes, volumes e digests</span></div><div class="artifact-card"><strong>Atualização e retorno</strong><span>backup, teste, parada e rollback</span></div><div class="artifact-card"><strong>Hospedagem e responsabilidades</strong><span>responsabilidade e decisão condicional</span></div><div class="artifact-card"><strong>Implantação remota</strong><span>host remoto, túnel e passagem</span></div><div class="artifact-card"><strong>Exposição e TLS</strong><span>DNS, porta, TLS e escopo</span></div><div class="artifact-card"><strong>Decisão arquitetural</strong><span>decisão, limites e gatilhos</span></div></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Ambiente controlado · causa desconhecida</span><h3>A equipe recebe o sintoma, não a causa pronta</h3></div><div class="visual-body"><div class="scenario-grid"><article><strong>capacidade</strong><p>disco ou memória não coincide com o baseline.</p></article><article><strong>Compose</strong><p>porta, rede ou mount diverge do manifesto Compose aprovado.</p></article><article><strong>persistência</strong><p>um volume esperado não está associado.</p></article><article><strong>imagem</strong><p>tag/digest recebido difere do aprovado.</p></article><article><strong>aplicação</strong><p>web iniciou antes de o banco ficar pronto.</p></article><article><strong>exposição</strong><p>porta escuta em endereço mais amplo que o previsto.</p></article><article><strong>segredo</strong><p>arquivo ausente, permissão inadequada ou valor incompatível.</p></article><article><strong>recuperação</strong><p>a cópia existe, mas a restauração de amostra falha.</p></article></div><p class="visual-question">Qual evidência separa sua hipótese de uma alternativa sem modificar o ambiente?</p></div></div>

    <h3>Contrato da oficina</h3>
    <div class="checkpoint compact-check"><p class="check-progress" data-check-progress></p><ul class="checklist" data-checklist>
      <li><label><input type="checkbox"> Confirmamos ativo, solicitante, função, impacto, janela e autorização.</label></li>
      <li><label><input type="checkbox"> Comparamos o inventário real com as seções de VM, runtime e Compose antes de executar o conjunto.</label></li>
      <li><label><input type="checkbox"> Preservamos segredos e dados; nenhum valor entrou no relatório.</label></li>
      <li><label><input type="checkbox"> Registramos tags/digests, mounts, redes, portas e escutas.</label></li>
      <li><label><input type="checkbox"> Formulamos H1/H2, previsão e teste observacional.</label></li>
      <li><label><input type="checkbox"> Provamos restauração de amostra em destino separado.</label></li>
      <li><label><input type="checkbox"> Revisamos Compose como entrada confiável antes de executá-lo.</label></li>
      <li><label><input type="checkbox"> Mudamos somente uma variável autorizada e mantivemos retorno.</label></li>
      <li><label><input type="checkbox"> Testamos processo, HTTP, função, persistência e acesso negado.</label></li>
      <li><label><input type="checkbox"> Entregamos estado, limite, risco residual e próximo responsável.</label></li>
    </ul></div>
    <div class="danger-box"><strong>Pare e encaminhe</strong><p>Não prossiga se o ambiente for produção, houver dados pessoais reais, faltar cópia recuperável, o único acesso administrativo puder ser perdido, o Compose solicitar privilégio/mount não previsto, a migração de dados for incompatível, a exposição alcançar rede não autorizada ou o resultado sair da previsão com risco crescente.</p></div>

    <h3>Sequência de evidência</h3>
    <div class="task-box"><strong>Missão de evolução</strong><p>Receba sem ligar/desligar por impulso; compare o estado, proteja os dados, escolha um teste, execute somente a mudança autorizada e peça que outra equipe repita a validação. A tabela transforma cada fase em uma entrega verificável.</p></div>
    <div class="table-wrap"><table><thead><tr><th>Fase</th><th>Produção concreta</th><th>Critério de avanço</th></tr></thead><tbody><tr><td>Receber</td><td>inventário e divergências</td><td>alvo e limites inequívocos</td></tr><tr><td>Entender</td><td>impacto, H1/H2 e previsão</td><td>teste distingue hipóteses</td></tr><tr><td>Proteger</td><td>backup + restauração de amostra</td><td>retorno praticável</td></tr><tr><td>Intervir</td><td>mudança única registrada</td><td>resultado dentro do esperado</td></tr><tr><td>Validar</td><td>antes/depois comparável</td><td>função e persistência verificadas</td></tr><tr><td>Entregar</td><td>Registro da Evolução atualizado</td><td>outra equipe consegue continuar</td></tr></tbody></table></div>

    <h3>Pacote de evidências</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>estado inicial</strong><span>host/VM, versão, recurso, rede e horário</span></div><div class="artifact-card"><strong>manifesto</strong><span>configuração efetiva sem segredos</span></div><div class="artifact-card"><strong>hipótese/teste</strong><span>previsão, saída relevante e limite</span></div><div class="artifact-card"><strong>recuperação</strong><span>amostra restaurada separadamente</span></div><div class="artifact-card"><strong>intervenção</strong><span>autorização, mudança e rollback</span></div><div class="artifact-card"><strong>validação</strong><span>processo, função, dado e acesso</span></div><div class="artifact-card"><strong>passagem</strong><span>estado final, risco e responsável</span></div></div>

    <textarea id="modern-final-report" class="report-template" aria-label="Modelo de relatório da oficina moderna" readonly>OFICINA DE INFRAESTRUTURA MODERNA — ESCOLA HORIZONTE
Equipe / papéis / data:
Solicitante, função e impacto:
Ativo e fase: homologação fictícia
Janela, autorização e critérios de parada:

1. ESTADO RECEBIDO
Host / VM / recursos / rede:
Docker / Compose / origem:
Imagens, tags e digests:
Serviços, portas, redes, volumes e mounts:
Divergências do Registro da Evolução:

2. DADOS E RECUPERAÇÃO
Dados permitidos / proibidos:
Backup e destino:
Restauração de amostra e evidência:
Limites do retorno:

3. DIAGNÓSTICO
Sintoma, origem, horário e condição:
H1 / evidência a favor e contra:
H2 / evidência a favor e contra:
Teste / previsão / resultado:
O que ficou provado e não provado:

4. EVOLUÇÃO OU CORREÇÃO
Necessidade e autorização:
Estado anterior:
Uma variável alterada:
Validação da configuração:
Rollback preparado/aplicado:

5. VALIDAÇÃO
Processo e logs:
HTTP e função real:
Persistência após recriação:
Acesso autorizado e negado:
Comparação antes/depois:

6. PASSAGEM
Seções do Registro da Evolução atualizadas:
Estado final e risco residual:
Pendências / próximo responsável / prazo:</textarea>
    <p><button class="action-button" type="button" data-copy-template="#modern-final-report">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <h3>Avaliação</h3>
    <div class="table-wrap"><table><thead><tr><th>Critério</th><th>Peso</th><th>Domínio demonstrado</th></tr></thead><tbody><tr><td>Raciocínio e evidência</td><td>25%</td><td>compara baseline, prevê e separa hipóteses</td></tr><tr><td>Segurança e recuperação</td><td>25%</td><td>protege segredo/dado/acesso e prova retorno</td></tr><tr><td>VM e contêineres</td><td>20%</td><td>interpreta recursos, imagem, processo, rede e volume</td></tr><tr><td>Validação de serviço</td><td>20%</td><td>testa função, persistência e alcance permitido/negado</td></tr><tr><td>Documentação e passagem</td><td>10%</td><td>atualiza o Registro da Evolução e explicita limites</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Persistência em um volume e retorno de página não substituem restauração independente nem validam todos os fluxos."><p>Após recriar os contêineres, a inscrição fictícia reapareceu. Qual registro é correto?</p><label><input type="radio" name="m99a" value="a"> backup comprovado</label><label><input type="radio" name="m99a" value="b"> arquitetura pronta para produção</label><label><input type="radio" name="m99a" value="c"> persistência funcionou naquele volume/cenário; restauração independente e produção continuam não provadas</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir conclusão</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>

    <div class="essence"><strong>Essência da oficina</strong><p>Modernizar não é empilhar ferramentas. É <strong>mudar uma fronteira com requisitos, dados recuperáveis, configuração revisada, evidência comparável e responsabilidade explícita</strong>.</p></div>
    <div class="bridge-box"><strong>A infraestrutura agora precisa funcionar como um todo</strong><p>O Portal de Eventos deixou evidências sobre atendimento, rede, servidor, virtualização, contêineres, dados e recuperação. A próxima decisão da Escola Horizonte não pode olhar essas partes isoladamente: outra equipe deverá receber o ambiente, entender o estado e continuar o trabalho sem depender da memória de quem o montou.</p></div>
  `
});
