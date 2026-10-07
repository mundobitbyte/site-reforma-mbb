window.infraestruturaNetworkLessons = Array.isArray(window.infraestruturaNetworkLessons) ? window.infraestruturaNetworkLessons : [];

window.infraestruturaNetworkLessons.push({
  id: 'redes-diagnostico',
  number: '00',
  unit: 'Rede da escola · Ler antes de testar',
  menuTitle: 'Diagnóstico de entrada',
  technicalTitle: 'escopo • evidência • conectividade • serviço • limite da conclusão',
  title: '“A rede caiu” ainda não é um diagnóstico',
  objective: 'Tomar decisões iniciais diante de sintomas de rede sem confundir alcance, resolução de nomes e disponibilidade de serviço.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Chamado 032 · 8h05 · escola em atendimento</span>
      <h2>A secretaria abre sites, mas não imprime. No laboratório, três computadores “estão sem internet”.</h2>
      <p>Em <strong>SEC-02</strong>, a atendente Ana acessa o portal da escola, mas a fila da impressora <strong>IMP-01</strong> não avança. Em <strong>LAB-06</strong>, o professor Caio relata que alguns alunos navegam e outros não. A coordenação pede que o roteador seja reiniciado. O histórico de suporte confirma que SEC-02 foi validado após a OS 006, mas não há mapa atual da rede.</p>
      <p>Há impacto real em dois setores, porém ainda não há evidência de uma única falha. <strong>Seu trabalho é reduzir o problema antes de alterar o ambiente.</strong></p>
    </div>

    <div class="note-box"><strong>Regra do plantão</strong><p>Não reinicie roteador, switch ou ponto de acesso durante o atendimento. Isso pode derrubar quem ainda trabalha e apagar pistas como tempo de atividade e estado dos links.</p></div>

    <section class="checkpoint" data-quiz-group>
      <span class="eyebrow">Decisões de entrada</span><h3>O que a evidência permite afirmar?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Abrir um site mostra que, naquele instante, SEC-02 obteve comunicação suficiente para esse serviço; não valida impressão nem toda a rede."><p>1. SEC-02 abre o portal da escola. Isso prova que a rede está normal?</p><label><input type="radio" name="r00a" value="a"> Sim, porque internet funcionando valida todos os serviços.</label><label><input type="radio" name="r00a" value="b"> Não; valida apenas parte do caminho e do serviço testado.</label><label><input type="radio" name="r00a" value="c"> Sim, então a impressora necessariamente está quebrada.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Primeiro delimite quais equipamentos, conexões e serviços falham; uma ação ampla antes disso eleva o impacto e reduz evidência."><p>2. Qual é a primeira resposta ao pedido “reinicie o roteador”?</p><label><input type="radio" name="r00b" value="a"> Reiniciar, pois é a tentativa mais rápida.</label><label><input type="radio" name="r00b" value="b"> Trocar o roteador.</label><label><input type="radio" name="r00b" value="c"> Registrar escopo, horários e estados antes de decidir.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A diferença entre máquinas do mesmo local torna mais útil comparar seus estados do que concluir que a internet inteira caiu."><p>3. Alguns computadores do laboratório navegam e outros não. Qual hipótese inicial ganhou força?</p><label><input type="radio" name="r00c" value="a"> Há diferença local entre estações, portas, cabos ou configurações.</label><label><input type="radio" name="r00c" value="b"> O provedor está totalmente indisponível.</label><label><input type="radio" name="r00c" value="c"> Todos os sistemas precisam ser reinstalados.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir raciocínio</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="task-box"><strong>Missão 00 · iniciar o Registro da Rede</strong><p>Para cada relato, escreva: pessoa e função, equipamento, local, conexão cabeada/sem fio, horário, o que funciona, o que falha, mudança recente, impacto e um próximo teste de baixo risco. Não escreva “sem internet” sem dizer qual ação falhou.</p></div>
    <div class="state-comparison"><div class="state-step"><strong>Relato</strong><span>“não imprime”</span></div><div class="state-step"><strong>Escopo</strong><span>SEC-02 → IMP-01</span></div><div class="state-step"><strong>Teste futuro</strong><span>caminho e porta do serviço</span></div><div class="state-step"><strong>Conclusão limitada</strong><span>ainda sem causa provada</span></div></div>
    <div class="note-box compact"><strong>Registro da Rede iniciado</strong><p>Use o mesmo Registro da Rede durante os atendimentos. Atualize-o somente quando uma observação, teste ou mudança ajudar a próxima decisão.</p></div>
    <div class="essence"><strong>Essência</strong><p>“Rede” não é um teste único. Investigue <strong>qual origem, qual destino, qual serviço, em qual horário e por qual meio</strong>.</p></div>
    <div class="bridge-box"><strong>A necessidade seguinte</strong><p>Para comparar LAB-06, SEC-02 e IMP-01, a equipe precisa saber onde eles se conectam e por quais equipamentos o tráfego passa. O Chamado 032 gera a <strong>OS 011 — Levantamento da rede</strong>.</p></div>
  `
});

window.infraestruturaNetworkLessons.push({
  id: 'redes-topologia',
  number: '01',
  unit: 'Rede da escola · Tornar o ambiente legível',
  menuTitle: 'Ambiente e topologia',
  technicalTitle: 'inventário • topologia física • topologia lógica • origem • destino • caminho',
  title: 'Desenhe o que existe antes de explicar o que falhou',
  objective: 'Construir e validar um mapa simples da rede da escola, distinguindo localização física, função lógica e lacunas de informação.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">OS 011 · Continuação do Chamado 032</span><h2>O armário tem cabos, mas não tem memória.</h2><p>A auxiliar Joana encontra um roteador identificado como <strong>RTR-01</strong>, um switch <strong>SW-01</strong>, um patch panel sem legenda e o ponto de acesso <strong>AP-01</strong> no corredor. O inventário recebido do suporte localiza SEC-02, LAB-06, SALA-04 e ADM-01, mas não registra portas de rede. Se alguém desconectar “um cabo qualquer”, não há como prever o impacto.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Representação didática</span><h3>Mapa parcial encontrado na pasta de suporte</h3><p>Observe as relações. Linha contínua indica cabo; linha pontilhada indica Wi-Fi. O desenho não é captura de um software.</p></div><div class="visual-body">
      <span class="representation-badge">Diagrama próprio · não representa marca ou interface</span>
      <div class="network-map" role="img" aria-label="Internet ligada ao roteador RTR-01, ligado ao switch SW-01. Switch ligado à secretaria SEC-02, laboratório LAB-06 e ponto de acesso AP-01. AP ligado por Wi-Fi à sala SALA-04. Impressora IMP-01 sem ligação documentada.">
        <div class="net-node cloud">Internet<br><small>provedor</small></div><div class="net-link"></div><div class="net-node router">RTR-01<br><small>gateway</small></div><div class="net-link"></div><div class="net-node switch">SW-01<br><small>porta ?</small></div>
        <div class="net-branches"><span>SEC-02 · porta ?</span><span>LAB-06 · porta ?</span><span>AP-01 · porta ?</span><span class="unknown">IMP-01 · caminho ?</span></div>
      </div>
      <ol class="observation-prompts"><li><strong>Localize</strong>Qual ativo concentra os enlaces cabeados?</li><li><strong>Questione</strong>O mapa mostra onde IMP-01 está conectada?</li><li><strong>Decida</strong>Qual lacuna impede correlacionar uma porta com um setor?</li></ol>
      <p class="visual-question"><strong>Não complete por suposição:</strong> que evidência física ou administrativa você buscaria para cada “?”?</p>
    </div></div>

    <h3>Inventário que ajuda a diagnosticar</h3>
    <div class="table-wrap"><table><thead><tr><th>ID</th><th>Função / responsável</th><th>Local</th><th>Conexão conhecida</th><th>Lacuna</th></tr></thead><tbody><tr><td>RTR-01</td><td>Gateway / TI</td><td>Armário</td><td>Provedor ↔ SW-01</td><td>porta WAN e plano atual</td></tr><tr><td>SW-01</td><td>Distribuição / TI</td><td>Armário</td><td>24 portas</td><td>mapa porta-setor</td></tr><tr><td>AP-01</td><td>Wi-Fi / TI</td><td>Corredor</td><td>ligado ao SW-01</td><td>porta, cobertura e SSIDs</td></tr><tr><td>IMP-01</td><td>Impressão / secretaria</td><td>Secretaria</td><td>desconhecida</td><td>IP, meio e serviço</td></tr></tbody></table></div>

    <div class="task-box"><strong>Missão 01 · validar sem interromper</strong><ol><li>Use etiquetas existentes, LEDs e documentação; não puxe cabos para “ver onde vai”.</li><li>Registre no <strong>Mapa e inventário</strong> apenas relações confirmadas.</li><li>Marque lacunas explicitamente. Um “desconhecido” honesto é mais útil que uma linha inventada.</li><li>Peça a outra equipe para localizar SEC-02 e AP-01 usando apenas seu mapa.</li></ol></div>
    <div class="two-col"><div class="definition-box"><strong>Físico</strong><p>Local, cabo, porta, patch panel, switch e ponto de acesso que o técnico encontra.</p></div><div class="definition-box"><strong>Lógico</strong><p>Endereço, rede, gateway, serviço e política que explicam comunicação. Um mesmo equipamento aparece nas duas leituras.</p></div></div>
    <div class="note-box compact"><strong>Mapa e inventário</strong><p>Inclua versão, data, responsável e fonte de cada relação. A equipe reutilizará o mapa nos testes físicos, no plano de endereçamento e na oficina final.</p></div>
    <div class="bridge-box"><strong>Nova evidência</strong><p>Ao validar o armário, Joana descobre que os móveis do laboratório foram mudados na véspera e um cabo agora atravessa a passagem. Às 8h32, surge o <strong>Chamado 033: LAB-06 perde o link quando a mesa é movida</strong>.</p></div>
  `
});

window.infraestruturaNetworkLessons.push({
  id: 'redes-fisica',
  number: '02',
  unit: 'Rede da escola · Reconhecer e testar o meio',
  menuTitle: 'Ethernet, Wi-Fi e organização',
  technicalTitle: '8P8C/RJ45 • cabo • porta • link • switch • ponto de acesso • patch panel',
  title: 'O link muda quando a mesa se move: onde olhar primeiro?',
  objective: 'Reconhecer componentes físicos e executar comparação segura de cabo, porta e link sem transformar troca aleatória em diagnóstico.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Chamado 033 · LAB-06</span><h2>A falha tem movimento, horário e um caminho físico.</h2><p>Caio demonstra que LAB-06 perde conectividade quando a mesa encosta no cabo azul. Os demais computadores continuam ativos. O mapa e inventário aponta o setor, mas o patch panel e o SW-01 ainda não relacionam a tomada à porta. Antes de discutir endereços, a equipe precisa reconhecer objetos e comparar estados de link.</p></div>
    <div class="danger-box"><strong>Segurança física</strong><p>Não trabalhe em equipamento energizado aberto, não olhe em conectores de fibra e não improvise passagem de cabo. Isole risco de tropeço e acione o responsável pela infraestrutura quando o caminho físico exigir obra.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Fotos reais · missão de reconhecimento</span><h3>O que cada objeto permite observar — e o que não permite concluir?</h3><p>As fotos preparam a inspeção do laboratório. Elas não substituem a identificação no equipamento real.</p></div><div class="visual-body"><div class="photo-board">
      <figure class="object-card"><img src="../img/infraestrutura/rede-rj45.webp" alt="Conector modular 8P8C transparente em cabo Ethernet, com contatos e trava visíveis" loading="lazy"><figcaption><strong>Conector Ethernet (comumente chamado RJ45)</strong>Localize trava, contatos e capa. Aparência íntegra não prova continuidade elétrica.<span class="source-credit">Foto: David Monniaux, <a href="https://commons.wikimedia.org/wiki/File:Ethernet_RJ45_connector_p1160054.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, CC BY-SA 3.0; redimensionada.</span></figcaption></figure>
      <figure class="object-card"><img src="../img/infraestrutura/rede-switch.webp" alt="Switch Ethernet de cinco portas com um cabo conectado e LED de link aceso" loading="lazy"><figcaption><strong>Switch e estado de link</strong>Compare porta ocupada, cabo conectado e LED. LED aceso sugere link físico; não prova IP, DNS ou serviço.<span class="source-credit">Foto: Simon A. Eugster, <a href="https://commons.wikimedia.org/wiki/File:Netgear_Gigabit_Switch_5-port.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, CC BY-SA 3.0; redimensionada.</span></figcaption></figure>
      <figure class="object-card"><img src="../img/infraestrutura/rede-patch-panel-rack.webp" alt="Rack de rede com patch panels numerados, cabos de manobra e switches abaixo" loading="lazy"><figcaption><strong>Patch panel no rack</strong>Compare as fileiras passivas numeradas com os switches que exibem LEDs. Sem mapa/etiqueta, o número não revela sozinho o destino.<span class="source-credit">Foto: Dsimic, <a href="https://commons.wikimedia.org/wiki/File:19-inch_rackmount_Ethernet_switches_and_patch_panels.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, CC BY-SA 4.0; redimensionada.</span></figcaption></figure>
      <figure class="object-card"><img src="../img/infraestrutura/rede-ap.webp" alt="Ponto de acesso Wi-Fi branco instalado no alto de uma parede interna" loading="lazy"><figcaption><strong>Ponto de acesso</strong>Observe posição, obstáculos e alimentação/cabo. Estar alto não garante cobertura ou capacidade adequadas.<span class="source-credit">Foto: Rodrigo César, <a href="https://commons.wikimedia.org/wiki/File:Access-point-wireless.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, domínio público; redimensionada.</span></figcaption></figure>
    </div><ol class="observation-prompts"><li><strong>Localize</strong>Qual objeto relaciona tomada e switch?</li><li><strong>Preveja</strong>Se o LED apagar ao mover o cabo, qual hipótese se fortalece?</li><li><strong>Limite</strong>Se o LED ficar aceso, o que ainda falta testar?</li></ol></div></div>

    <h3>Teste controlado: uma variável por vez</h3>
    <div class="state-comparison"><div class="state-step"><strong>Antes</strong><span>link alterna ao mover a mesa</span><span class="evidence-id">ANTES</span></div><div class="state-step"><strong>Intervenção</strong><span>cabo de referência, mesma porta</span></div><div class="state-step"><strong>Depois</strong><span>link permanece estável por 10 min</span><span class="evidence-id">DEPOIS</span></div><div class="state-step"><strong>O que prova?</strong><span>cabo/caminho original fica mais suspeito; causa exata requer inspeção</span></div></div>
    <div class="task-box"><strong>Missão 02 · mapear portas e cabos</strong><p>Com autorização, registre tomada → patch panel → porta do switch → ativo. Fotografe/identifique antes de mover qualquer cabo. Use um cabo de referência conhecido, mantenha a mesma porta e repita a condição do sintoma. Depois, devolva o estado original ou formalize a substituição e atualize o mapa.</p></div>
    <div class="note-box"><strong>Ausência momentânea não encerra o caso</strong><p>Dez minutos estáveis não provam que a falha nunca voltará. Registre condição, duração, variável alterada e limite.</p></div>
    <div class="note-box compact"><strong>O mapa físico atualiza o mapa da rede</strong><p>A equipe confirma LAB-06 na porta 08 de SW-01 e AP-01 na porta 12. O cabo defeituoso é retirado de uso e identificado; o caminho pelo corredor é encaminhado para organização segura.</p></div>
    <div class="bridge-box"><strong>A escola vai crescer</strong><p>Com o laboratório estável, a direção anuncia oito novos computadores e Wi-Fi para visitantes. O inventário mostra uma rede única, sem reserva documentada. A <strong>OS 012 — Plano de endereçamento</strong> nasce dessa necessidade, não de uma conta isolada.</p></div>
  `
});

window.infraestruturaNetworkLessons.push({
  id: 'redes-ipv4',
  number: '03',
  unit: 'Rede da escola · Planejar antes de configurar',
  menuTitle: 'IPv4, prefixos e sub-redes',
  technicalTitle: 'plano IPv4 • prefixo • capacidade • rede • broadcast • faixa utilizável • reserva',
  title: 'Quantos grupos a escola precisa sustentar?',
  objective: 'Aplicar prefixos IPv4 para criar um plano simples, justificável e documentado, sem rever a teoria básica já estudada em Fundamentos.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">OS 012 · decisão de capacidade e organização</span><h2>Uma rede plana atende hoje, mas não expressa a nova escola.</h2><p>O mapa e inventário registra 18 dispositivos de funcionários, 22 do laboratório e até 25 visitantes em eventos. A faixa disponível é <strong>192.168.10.0/24</strong>. A direção quer crescimento sem renumerar tudo no próximo mês; a equipe ainda não implementará VLANs, apenas preparará um plano que possa ser usado depois.</p></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Representação didática</span><h3>Divisão proposta para análise</h3><p>Quatro blocos /26. Observe capacidade e fronteiras antes de aprovar.</p></div><div class="visual-body"><span class="representation-badge">Diagrama próprio · escala proporcional simplificada</span><div class="subnet-strip" role="img" aria-label="Rede 192.168.10.0 barra 24 dividida em quatro blocos barra 26: funcionários, laboratório, visitantes e reserva"><div><strong>192.168.10.0/26</strong><span>Funcionários · 62 endereços utilizáveis</span></div><div><strong>192.168.10.64/26</strong><span>Laboratório · 62 utilizáveis</span></div><div><strong>192.168.10.128/26</strong><span>Visitantes · 62 utilizáveis</span></div><div><strong>192.168.10.192/26</strong><span>Reserva · 62 utilizáveis</span></div></div><p class="visual-question"><strong>Decida:</strong> o bloco atende o número atual e a expansão prevista? Que dispositivos devem receber reserva/documentação, em vez de endereço manual aleatório?</p></div></div>

    <div class="table-wrap"><table><thead><tr><th>Grupo</th><th>Rede/prefixo</th><th>Faixa utilizável</th><th>Broadcast</th><th>Uso previsto</th></tr></thead><tbody><tr><td>Funcionários</td><td>192.168.10.0/26</td><td>.1–.62</td><td>.63</td><td>18 + expansão</td></tr><tr><td>Laboratório</td><td>192.168.10.64/26</td><td>.65–.126</td><td>.127</td><td>30 previstos</td></tr><tr><td>Visitantes</td><td>192.168.10.128/26</td><td>.129–.190</td><td>.191</td><td>até 25 clientes</td></tr><tr><td>Reserva</td><td>192.168.10.192/26</td><td>.193–.254</td><td>.255</td><td>não consumir sem decisão</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><span class="eyebrow">Revisão pela necessidade</span><h3>Aprovar, corrigir ou pedir evidência?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Cada /26 oferece 64 endereços totais e 62 utilizáveis no IPv4 tradicional; 30 dispositivos cabem com margem."><p>O laboratório terá 30 dispositivos. O /26 proposto comporta esse uso?</p><label><input type="radio" name="r03a" value="a"> Não, porque /26 aceita apenas 26 dispositivos.</label><label><input type="radio" name="r03a" value="b"> Sim, há 62 endereços utilizáveis.</label><label><input type="radio" name="r03a" value="c"> Só se todos forem estáticos.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O plano precisa reservar endereços de infraestrutura e indicar DHCP; escolher manualmente um IP 'que parece livre' pode causar conflito."><p>Como escolher o endereço de IMP-01?</p><label><input type="radio" name="r03b" value="a"> Usar qualquer endereço que responda lentamente.</label><label><input type="radio" name="r03b" value="b"> Fixar .1 porque é fácil lembrar.</label><label><input type="radio" name="r03b" value="c"> Definir no plano uma reserva/faixa de infraestrutura e evitar conflito com DHCP.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="task-box"><strong>Missão 03 · planejar o endereçamento</strong><p>Registre grupo, prefixo, capacidade necessária, rede, faixa utilizável, broadcast, gateway proposto, intervalo DHCP, reservas e justificativa. Faça uma equipe revisar fronteiras e outra comparar com o mapa e inventário. <strong>Não aplique o plano na rede em produção nesta missão.</strong></p></div>
    <div class="note-box"><strong>O plano não é a segmentação</strong><p>Separar faixas no papel não cria isolamento. Quando a segmentação for testada, VLANs e políticas deverão partir deste plano.</p></div>
    <div class="note-box compact"><strong>Plano de endereçamento</strong><p>Aprovado como proposta, versionado e anexado à OS 012. Ele será usado para interpretar configurações reais no próximo chamado.</p></div>
    <div class="bridge-box"><strong>Chamado 034 · após troca do equipamento do provedor</strong><p>SEC-02 funciona, ADM-01 recebe <strong>169.254.44.18</strong> e SALA-04 acessa um servidor por endereço, mas não por nome. Agora o plano permite perguntar: <strong>qual parte da configuração cada estação recebeu?</strong></p></div>
    <details class="sources-box"><summary>Referência técnica</summary><ul><li><a href="https://www.rfc-editor.org/rfc/rfc4632" target="_blank" rel="noopener noreferrer">RFC 4632 — Classless Inter-domain Routing (CIDR)</a>. A atividade aplica prefixos já estudados; não substitui o material de Fundamentos.</li></ul></details>
  `
});
