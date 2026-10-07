window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "diagnostico-manutencao",
  number: "20",
  unit: "Ato 4 · Computação no mundo atual",
  menuTitle: "Diagnóstico e manutenção",
  technicalTitle: "sintoma • causa • hipótese • evidência • teste • isolamento • camada • logs • manutenção preventiva • manutenção corretiva • monitoramento",
  title: "Quando algo não funciona, como descobrir a causa sem mexer em tudo ao mesmo tempo?",
  objective: "Aplicar um método de diagnóstico baseado em sintomas, hipóteses, evidências, testes controlados e isolamento, conectando hardware, sistema operacional, arquivos, rede e segurança.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">“A Internet não funciona” ainda não é diagnóstico</span>
      <h2>O Wi-Fi pode estar desligado, o computador pode estar sem IP, o DNS pode falhar ou apenas um site pode estar fora do ar.</h2>
      <p>Formatar o computador talvez até faça o sintoma desaparecer — e ainda assim não saberemos o que aconteceu. <strong>Corrigir por acaso não é o mesmo que descobrir a causa.</strong></p>
    </div>

    <h3>Primeiro separe aquilo que você vê daquilo que provoca o problema</h3>
    <p>“Computador lento”, “impressora não funciona” e “arquivo sumiu” descrevem manifestações. A causa pode estar em outra camada e ser completamente diferente do palpite inicial.</p>
    <div class="comparison-grid"><article><strong>Sintoma</strong><p>É o comportamento observável: o que aconteceu de diferente do esperado.</p></article><article><strong>Causa</strong><p>É o fator que produz ou contribui para o problema observado.</p></article></div>
    <div class="note-box compact"><strong>Sintoma ≠ causa.</strong><p>“Está lento” não prova falta de CPU. “Não abre site” não prova queda da Internet. A primeira tarefa é transformar uma descrição vaga em algo observável.</p></div>

    <h3>“Não funciona” precisa virar uma descrição testável</h3>
    <p>Compare:</p>
    <div class="comparison-grid"><article><strong>Vago</strong><p>“A impressora não funciona.”</p></article><article><strong>Observável</strong><p>“A impressora liga e aparece no Windows, mas o trabalho fica na fila e nenhuma página sai.”</p></article></div>
    <p>Perguntas úteis: <strong>o que deveria acontecer? o que acontece no lugar? desde quando? acontece sempre? em qual equipamento? o que mudou antes do problema começar?</strong></p>

    <h3>Uma boa hipótese pode ser testada</h3>
    <p>Se nenhum site abre, podemos levantar hipóteses: H1 — sem rede local; H2 — rede local existe, mas não há saída; H3 — conectividade IP funciona, mas DNS falha. Agora conseguimos escolher testes que produzam evidências.</p>
    <div class="definition-box featured"><span class="term">Hipótese</span><p>É uma explicação provisória para o sintoma que pode ser confrontada com observações ou testes.</p></div>
    <div class="definition-box"><span class="term">Evidência</span><p>É uma informação observável que aumenta ou diminui a plausibilidade de uma hipótese.</p></div>
    <div class="concept-flow"><div><strong>Observar</strong></div><span class="flow-arrow">→</span><div><strong>Hipótese + teste</strong></div><span class="flow-arrow">→</span><div><strong>Evidência</strong></div></div>

    <h3>Mudar cinco coisas de uma vez destrói parte da investigação</h3>
    <p>Trocar cabo, reiniciar roteador, mudar DNS, reinstalar driver e reiniciar o PC de uma vez pode terminar com “voltou”. Mas qual ação resolveu? Talvez nenhuma delas: um conector pode apenas ter sido reen-caixado durante o processo.</p>
    <div class="ok-box"><strong>Regra prática</strong><p>Quando for seguro e possível, <strong>altere uma variável por vez</strong>, registre o estado anterior e observe o resultado.</p></div>
    <div class="definition-box compact"><span class="term">Teste controlado</span><p>É um teste em que tentamos mudar o mínimo necessário para confrontar uma hipótese.</p></div>

    <h3>Reduza o problema até descobrir onde ele começa</h3>
    <p>Um caminho de rede pode envolver computador → cabo/Wi-Fi → switch → roteador → provedor → DNS → servidor. Em vez de suspeitar de tudo, testamos progressivamente os trechos.</p>
    <div class="definition-box featured"><span class="term">Isolamento</span><p>É o processo de reduzir as possíveis causas até localizar a camada, componente ou condição responsável pelo comportamento.</p></div>
    <div class="comparison-grid four"><article><strong>Hardware</strong><p>energia, cabo, memória, armazenamento, temperatura.</p></article><article><strong>Sistema</strong><p>processo, driver, serviço, permissão.</p></article><article><strong>Rede</strong><p>interface, IP, gateway, DNS, roteamento.</p></article><article><strong>Aplicação</strong><p>configuração, servidor, API, dados e regra de negócio.</p></article></div>

    <h3>Caso guiado: “nenhum site abre”</h3>
    <p>Em vez de formatar, vamos fazer perguntas em ordem. No Windows, comece observando a configuração:</p>
    <div class="code-focus"><code>ipconfig</code></div>
    <p>Há interface ativa, endereço IP, máscara/prefixo e gateway coerentes com a rede?</p>
    <p>Depois, um teste local da pilha TCP/IP:</p>
    <div class="code-focus"><code>ping 127.0.0.1</code></div>
    <p>Em seguida, se a rede e a política permitirem ICMP, teste o gateway:</p>
    <div class="code-focus"><code>ping &lt;endereço-do-gateway&gt;</code></div>
    <p>Depois, um endereço IP externo conhecido que aceite resposta ICMP:</p>
    <div class="code-focus"><code>ping 8.8.8.8</code></div>
    <p>Se IP externo funciona, mas nomes não, investigue resolução:</p>
    <div class="code-focus"><code>nslookup example.com</code></div>
    <div class="note-box compact"><strong>O importante não é decorar a sequência.</strong><p>Cada teste responde a uma pergunta diferente. Se o teste por IP funciona e a resolução por nome falha, a hipótese de DNS fica mais forte.</p></div>

    <h3>Ping que falhou não significa “computador desligado”</h3>
    <p>ICMP pode ser filtrado por firewall ou política. Um servidor pode estar atendendo HTTPS normalmente e ignorar ping.</p>
    <div class="danger-box compact"><strong>Interprete o limite do teste.</strong><p>“Não obtive resposta ICMP” é uma conclusão suportada. “A máquina está desligada” exige mais evidências.</p></div>

    <h3>Caso guiado: “o computador está lento”</h3>
    <p>Lentidão pode vir de recursos diferentes. O Gerenciador de Tarefas permite observar CPU, memória, disco e rede antes de comprar hardware.</p>
    <div class="comparison-grid four"><article><strong>CPU 100%</strong><p>Pode haver um processo usando toda a capacidade; não prova processador defeituoso.</p></article><article><strong>RAM quase cheia</strong><p>Pode aumentar paginação e tornar o sistema menos responsivo.</p></article><article><strong>Disco ocupado</strong><p>Muitos acessos pequenos podem saturar atividade mesmo sem grande MB/s.</p></article><article><strong>Rede alta</strong><p>Sincronização, download ou aplicação podem estar consumindo largura de banda.</p></article></div>
    <p>A Aula 07 volta aqui: <strong>latência e taxa de transferência são medidas diferentes</strong>. Um dispositivo pode ficar ocupado com muitos acessos pequenos sem atingir grande taxa sequencial.</p>

    <h3>Quando o problema aparece depois de alguns minutos</h3>
    <p>Um computador pode começar rápido e perder desempenho sob carga. Isso sugere observar temperatura, ventilação e frequência da CPU.</p>
    <div class="definition-box"><span class="term">Thermal throttling</span><p>É a redução controlada de desempenho/frequência adotada por componentes para permanecer dentro de limites térmicos e elétricos.</p></div>
    <p>Poeira, ventilação bloqueada ou sistema de refrigeração inadequado podem contribuir, mas novamente: <strong>meça e observe antes de concluir</strong>.</p>

    <h3>Mensagens de erro e logs são pistas, não incômodos</h3>
    <p>Fechar a janela de erro antes de lê-la pode apagar a melhor pista disponível. Código, caminho, componente e horário podem reduzir muito o espaço de busca.</p>
    <div class="definition-box"><span class="term">Log</span><p>É um registro de eventos produzido por sistemas e aplicações. Pode mostrar falhas de serviço, tentativas de login, erros de aplicativo e outros acontecimentos.</p></div>
    <p>No Windows, o <strong>Visualizador de Eventos</strong> reúne diversos registros. Mas encontrar uma linha vermelha não prova causalidade: relacione horário, sintoma, componente e recorrência.</p>

    <h3>Use algo que você sabe que funciona</h3>
    <p>Suspeitamos de um cabo. Em vez de desmontar todo o computador, podemos testar outro cabo compatível que sabemos funcionar. Suspeitamos do monitor? Uma troca cruzada entre dois computadores pode mostrar se o problema acompanha o monitor ou permanece no computador.</p>
    <div class="two-col"><div class="definition-box"><span class="term">Known-good</span><p>Componente, cabo, conta ou configuração conhecido como funcional e usado para comparação.</p></div><div class="definition-box"><span class="term">Troca cruzada</span><p>Move componentes entre um sistema funcional e outro problemático, quando seguro e compatível, para observar onde o defeito acompanha.</p></div></div>
    <div class="note-box compact"><strong>Mesmo assim, cuidado com conclusões apressadas.</strong><p>Ao trocar uma peça, você também pode reen-caixar conectores e alterar contatos. Pergunte sempre o que mais mudou durante o teste.</p></div>

    <h3>Reiniciar pode ser correto — mas não é uma explicação</h3>
    <p>Reiniciar encerra processos, libera recursos, reinicializa serviços e pode aplicar atualizações. É uma ação técnica válida. Porém também pode apagar evidências temporárias.</p>
    <div class="note-box compact"><strong>“Reiniciei e voltou” é resultado, não causa.</strong><p>Em um problema raro ou crítico, talvez seja melhor registrar estado e logs antes de reiniciar.</p></div>

    <h3>E formatar?</h3>
    <p>Reinstalar o sistema pode resolver determinados problemas de software, mas tem alto custo e pode mascarar a causa. Não corrige cabo ruim, RAM defeituosa, superaquecimento ou problema externo de rede.</p>
    <div class="mbb-pause-question"><strong>Comece pelo menos invasivo.</strong><p>Prefira testes simples, seguros, reversíveis e de baixo custo antes de intervenções amplas. Se precisar alterar configuração, registre como estava e como voltar.</p></div>

    <h3>Preserve os dados antes de uma intervenção arriscada</h3>
    <p>Um sistema que não inicia é ruim. Um sistema que não inicia <strong>e perdeu os documentos durante a tentativa de reparo</strong> é pior.</p>
    <div class="ok-box"><strong>Dados primeiro</strong><p>Antes de reinstalação, reparo destrutivo ou procedimentos de maior risco, avalie backup, cópia e possibilidade de recuperação dos dados importantes.</p></div>

    <h3>Conhecer limites também é competência técnica</h3>
    <p>Alguns equipamentos e componentes apresentam riscos elétricos e mecânicos. Fontes de alimentação, por exemplo, não devem ser abertas casualmente para “ver se há algo queimado”; componentes internos podem manter cargas perigosas.</p>
    <div class="danger-box compact"><strong>Quando o risco ultrapassa sua competência ou a segurança do procedimento, pare.</strong><p>Encaminhar para tratamento especializado pode ser a decisão tecnicamente correta.</p></div>

    <h3>Manutenção não começa somente depois da falha</h3>
    <div class="comparison-grid three"><article><strong>Preventiva</strong><p>Atualizações, backup, limpeza adequada, inspeção e acompanhamento para reduzir probabilidade de falhas.</p></article><article><strong>Corretiva</strong><p>Intervenção destinada a restaurar funcionamento após um problema.</p></article><article><strong>Monitoramento</strong><p>Acompanha indicadores como espaço, temperatura, recursos, logs e disponibilidade para detectar tendências.</p></article></div>

    <h3>Um método que pode atravessar todo o módulo</h3>
    <div class="fact-strip"><div><strong>1</strong><span>descreva o sintoma</span></div><div><strong>2</strong><span>colete contexto</span></div><div><strong>3</strong><span>formule hipóteses</span></div><div><strong>4</strong><span>priorize testes seguros</span></div></div>
    <div class="fact-strip"><div><strong>5</strong><span>teste uma variável</span></div><div><strong>6</strong><span>isole a causa</span></div><div><strong>7</strong><span>corrija</span></div><div><strong>8</strong><span>valide e documente</span></div></div>
    <p>A documentação transforma uma solução individual em conhecimento reutilizável. “Arrumei a Internet” ensina pouco; “IP externo respondia, nomes falhavam, DNS manual incorreto foi removido e a resolução foi validada” permite reconstruir o raciocínio.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Você está diagnosticando ou apenas tentando coisas?</h3>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="O sintoma é aquilo que observamos; a causa precisa ser investigada com hipóteses e evidências."><p>“O computador está lento” é:</p><label><input type="radio" name="q20a" value="a"> um sintoma que ainda pode ter várias causas.</label><label><input type="radio" name="q20a" value="b"> prova de que a CPU está defeituosa.</label><label><input type="radio" name="q20a" value="c"> prova de malware.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Alterar várias variáveis simultaneamente dificulta saber qual mudança teve efeito e destrói evidência sobre a causa."><p>Por que não é boa prática mudar cabo, DNS, driver e roteador ao mesmo tempo?</p><label><input type="radio" name="q20b" value="a"> Porque computadores só aceitam uma configuração por dia.</label><label><input type="radio" name="q20b" value="b"> Porque qualquer reinício danifica o SSD.</label><label><input type="radio" name="q20b" value="c"> Porque perdemos a capacidade de relacionar resultado a uma mudança específica.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="ICMP pode ser filtrado; falha do ping demonstra ausência de resposta ao teste, não necessariamente máquina desligada."><p>Um servidor não respondeu ao ping. O que podemos concluir com segurança?</p><label><input type="radio" name="q20c" value="a"> O servidor está definitivamente desligado.</label><label><input type="radio" name="q20c" value="b"> Não houve resposta ICMP ao teste; precisamos de outras evidências.</label><label><input type="radio" name="q20c" value="c"> O DNS está obrigatoriamente correto.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Diagnóstico começa separando <strong>sintoma</strong> de <strong>causa</strong>. O método é observar, formular hipóteses, testar, coletar evidências, isolar, corrigir e validar. Alterar uma variável por vez, começar pelo menos invasivo, preservar dados e reconhecer limites transforma tentativa e erro em investigação técnica.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Aprendemos cada camada separadamente. O que realmente acontece quando uma pessoa toca em “Comprar” no celular — do evento na tela até o banco, o pagamento e a resposta?</p></div>

    <details class="sources-box"><summary>Referências práticas</summary><ul>
      <li><a href="https://learn.microsoft.com/windows-server/administration/windows-commands/ipconfig" target="_blank" rel="noopener">Microsoft Learn — ipconfig</a></li>
      <li><a href="https://learn.microsoft.com/windows-server/administration/windows-commands/ping" target="_blank" rel="noopener">Microsoft Learn — ping</a></li>
      <li><a href="https://learn.microsoft.com/windows-server/administration/windows-commands/nslookup" target="_blank" rel="noopener">Microsoft Learn — nslookup</a></li>
    </ul></details>
  `
});
