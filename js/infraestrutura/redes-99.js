window.infraestruturaNetworkLessons = Array.isArray(window.infraestruturaNetworkLessons) ? window.infraestruturaNetworkLessons : [];

window.infraestruturaNetworkLessons.push({
  id: 'redes-oficina',
  number: '99',
  unit: 'Oficina final · Plantão da rede',
  menuTitle: 'Plantão integrado',
  technicalTitle: 'triagem • topologia • configuração • serviço • Wi-Fi • segmentação • validação • relatório',
  title: 'Assuma o plantão e deixe a rede explicável',
  objective: 'Investigar falhas controladas usando evidência e os registros acumulados, aplicar correção segura quando autorizada e entregar documentação reutilizável.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Sexta-feira · 16h20 · passagem de turno</span><h2>A feira da escola começa amanhã. A rede “quase funciona”, mas a documentação está incompleta.</h2><p>Ana precisa de SEC-02 e IMP-01 para credenciamento; Caio prepara LAB-06 e SALA-04; Joana recebe o plantão. A direção autoriza testes nas estações e no cenário didático, mas <strong>não autoriza reset de RTR-01/SW-01, varredura, troca de cabeamento permanente ou mudança de produção sem janela</strong>.</p><p>O objetivo não é fazer tudo ficar verde a qualquer custo. É entregar decisões defensáveis, evidências rastreáveis e um ambiente que o próximo técnico compreenda.</p></div>

    <h3>Envelope de passagem — documentação recebida</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>Entrada e relatos</strong><span>dois relatos sem teste recente</span></div><div class="artifact-card"><strong>Mapa e inventário · v3</strong><span>AP-01 e IMP-01 presentes; porta 17 sem confirmação</span></div><div class="artifact-card"><strong>Portas e cabos</strong><span>porta 08 = LAB-06; cabo substituído</span></div><div class="artifact-card"><strong>Plano de endereçamento</strong><span>proposta /26 aprovada; implantação parcial</span></div><div class="artifact-card"><strong>Estado de referência</strong><span>SEC-02 completo; ADM-01 com registro antigo</span></div><div class="artifact-card"><strong>Matriz de serviços</strong><span>IMP-01 TCP 9100; intranet HTTPS</span></div><div class="artifact-card"><strong>Segmentação e acessos</strong><span>visitante → internet; visitante ↛ ativos internos</span></div><div class="artifact-card"><strong>Levantamento Wi-Fi</strong><span>pontos A/B/C, mas sem medida após mudança de mobiliário</span></div><div class="artifact-card"><strong>Chamados</strong><span>041 aberto; 042 chegou às 16h26</span></div></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Cenário controlado de laboratório</span><h3>Possíveis fronteiras de divergência — a causa não é informada</h3><p>O ambiente pode conter uma ou duas condições controladas em ativos de laboratório. A causa não é informada e nenhuma condição exige acesso à rede de produção.</p></div><div class="visual-body"><div class="scenario-grid"><article><strong>Físico</strong><p>Cabo de referência e cabo defeituoso identificados; um deles está no caminho de LAB-06.</p></article><article><strong>Configuração</strong><p>Uma estação controlada recebeu DNS ou gateway divergente do baseline.</p></article><article><strong>Serviço</strong><p>O ativo responde a alcance, mas a porta didática esperada não aceita conexão.</p></article><article><strong>Segmentação</strong><p>Uma porta de laboratório está associada ao grupo lógico errado no simulador/equipamento didático.</p></article><article><strong>Wi-Fi</strong><p>O teste é realizado em local/carga que reproduz cobertura ou capacidade insuficiente.</p></article></div><p class="visual-question"><strong>Não sorteie comandos.</strong> O envelope informa sintoma, origem, destino, horário e impacto; a equipe deve pedir a evidência que falta.</p></div></div>

    <h3>Chamados ativos</h3>
    <div class="two-col"><div class="note-box"><strong>Chamado 041 · Caio · LAB-06</strong><p>“Após mover a bancada para a feira, o ícone de rede alterna. Os outros PCs continuam.” Impacto: demonstração amanhã. Última mudança: mobiliário e extensão de energia.</p></div><div class="note-box"><strong>Chamado 042 · Ana · SEC-02 → IMP-01</strong><p>“A impressora responde no painel, mas o credenciamento não imprime.” Impacto: fila de famílias. Um notebook de referência imprime; origem e horário ainda precisam ser confirmados.</p></div></div>

    <h3>Contrato de trabalho</h3>
    <div class="checkpoint compact-check"><p class="check-progress" data-check-progress></p><ul class="checklist" data-checklist>
      <li><label><input type="checkbox"> Abrimos chamado com pessoa, função, ativo, origem, destino, serviço, horário e impacto.</label></li>
      <li><label><input type="checkbox"> Fotografamos/registramos o estado inicial sem expor senhas, dados pessoais ou perfis.</label></li>
      <li><label><input type="checkbox"> Consultamos as seções relevantes do Registro da Rede e marcamos lacunas ou divergências.</label></li>
      <li><label><input type="checkbox"> Escrevemos hipótese principal e alternativa antes do comando.</label></li>
      <li><label><input type="checkbox"> Previmos resultado para cada hipótese e escolhemos teste de baixo risco.</label></li>
      <li><label><input type="checkbox"> Identificamos alvo, autorização, risco, retorno e critério de parada.</label></li>
      <li><label><input type="checkbox"> Registramos saída relevante com origem, destino e horário.</label></li>
      <li><label><input type="checkbox"> Alteramos apenas uma variável autorizada ou encaminhamos.</label></li>
      <li><label><input type="checkbox"> Repetimos a função real e um teste relacionado após a intervenção.</label></li>
      <li><label><input type="checkbox"> Atualizamos mapa, baseline e matriz e entregamos conclusão limitada.</label></li>
    </ul></div>

    <div class="danger-box"><strong>Critérios de parada</strong><p>Pare e encaminhe se houver risco físico, perda de acesso administrativo, ausência de backup de configuração, necessidade de afetar produção, dados pessoais expostos, escopo não autorizado ou resultado diferente da previsão que possa ampliar impacto.</p></div>

    <h3>Evidências mínimas da entrega</h3>
    <div class="table-wrap"><table><thead><tr><th>Entrega</th><th>Evidência concreta</th><th>Não vale sozinho</th></tr></thead><tbody><tr><td>Estado inicial</td><td>registro datado, interface/porta/local e função testada</td><td>“estava sem internet”</td></tr><tr><td>Inventário/topologia</td><td>mapa, inventário, portas e cabos corrigidos, com lacunas marcadas</td><td>desenho sem fonte</td></tr><tr><td>Hipótese e teste</td><td>matriz hipótese–teste com previsão e resultado discriminante</td><td>lista de comandos</td></tr><tr><td>Antes/depois</td><td>mesma origem, destino, função e condição comparável</td><td>“voltou a funcionar”</td></tr><tr><td>Intervenção/rollback</td><td>alvo, mudança, autorização e retorno aplicável</td><td>tentativas sem registro</td></tr><tr><td>Conclusão</td><td>o que a evidência fortalece, enfraquece e não prova</td><td>causa definitiva por ausência breve</td></tr></tbody></table></div>

    <h3>Modelo de relatório do plantão</h3>
    <textarea id="network-final-report" class="report-template" readonly>PLANTÃO DE REDE — ESCOLA HORIZONTE
Equipe / papéis:
Data e janela:
Autorização e limites:

1. CHAMADO E IMPACTO
Pessoa/função:
Origem → destino → serviço:
Horário/condição:
Impacto observado:

2. ESTADO INICIAL
Ativos e interfaces:
Topologia/porta/SSID:
Configuração relevante:
Função que opera:
Função que falha:
Evidências relacionadas (horário e local):

3. REGISTRO DA REDE REUTILIZADO
Mapa, inventário, portas e cabos:
Endereçamento e estado de rede:
Serviços, segmentação, acessos e Wi-Fi:
Lacunas ou divergências:

4. HIPÓTESES E TESTE
Hipótese principal:
Hipótese alternativa:
Pergunta do teste:
Previsão para cada hipótese:
Ação/comando autorizado:
Resultado observado:
Interpretação e limite:

5. INTERVENÇÃO CONTROLADA
Alvo e responsável:
Risco e critério de parada:
Estado anterior:
Uma variável alterada:
Rollback preparado/aplicado:

6. VALIDAÇÃO
Mesmo teste antes/depois:
Função real:
Teste relacionado:
Duração/condição:
Risco residual e acompanhamento:

7. ATUALIZAÇÃO E PASSAGEM
Seções atualizadas:
Conclusão limitada:
Pendência:
Próximo responsável e próximo passo:</textarea>
    <p><button class="action-button" type="button" data-copy-template="#network-final-report">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <h3>Avaliação do trabalho</h3>
    <div class="table-wrap"><table><thead><tr><th>Critério</th><th>Peso</th><th>Domínio demonstrado</th></tr></thead><tbody><tr><td>Raciocínio e poder do teste</td><td>30%</td><td>separa hipóteses com previsão e reconhece limites</td></tr><tr><td>Evidência e correlação</td><td>25%</td><td>origem, destino, serviço, horário e antes/depois comparáveis</td></tr><tr><td>Segurança, autorização e rollback</td><td>20%</td><td>protege produção, dados e acesso; sabe parar</td></tr><tr><td>Validação da função real</td><td>15%</td><td>não confunde link, ping, porta e serviço</td></tr><tr><td>Documentação reutilizável</td><td>10%</td><td>atualiza os registros e permite continuidade</td></tr></tbody></table></div>

    <div class="mbb-pause-question"><strong>Uma equipe pode concluir “não corrigimos”.</strong><p>Se a correção exige mudança de produção sem backup ou autorização, a entrega competente é preservar evidência, limitar impacto e encaminhar com precisão.</p></div>
    <div class="note-box compact"><strong>Entrega acumulada</strong><p>O relatório final atualiza o mesmo Registro da Rede. O próximo técnico recebe chamados, mapa, estado de referência, serviços, acessos, levantamento Wi-Fi, evidências antes/depois e pendências com responsável — não uma pasta de exercícios isolados.</p></div>
    <div class="essence"><strong>Essência do trabalho em redes</strong><p>Redes na prática é tornar comunicação observável: <strong>mapear, prever, testar, interpretar, controlar a mudança, validar a função e registrar o limite</strong>.</p></div>
    <div class="bridge-box"><strong>A rede agora sustenta uma nova necessidade</strong><p>Mapa, endereçamento, serviços e políticas já permitem explicar como as estações se comunicam. Quando a escola precisa centralizar arquivos, páginas e outros serviços, o próximo problema deixa de ser apenas o caminho da rede e passa a incluir a máquina que deverá oferecer esses serviços com controle e recuperação.</p></div>
  `
});
