window.produtividadeLessons = [
  {
    id: 'organizacao-diagnostico',
    number: '00',
    menuTitle: 'A pasta que ninguém entrega',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Diagnóstico inicial · fonte, estado e impacto',
    title: 'A pasta que ninguém consegue entregar',
    objective: 'Observar um conjunto de arquivos sem apagar pistas nem concluir pela aparência dos nomes.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 8h15 · Escola Horizonte</span>
        <h2>Faltam dez dias para a Feira de Projetos, mas ninguém consegue dizer com segurança quais arquivos estão prontos.</h2>
        <p>Marina, da secretaria, recebeu inscrições no computador <strong>SEC-03</strong>. Paulo, da coordenação, enviou correções. Lia, monitora do laboratório, reuniu o material em <strong>LAB-04</strong>. Você vai ajudar Lia a organizar esse trabalho.</p>
        <p>Na pasta aparecem arquivos como <code>inscricoes nova.csv</code>, <code>cronograma NOVO.txt</code> e <code>orcamento_final_agora.csv</code>. Palavras como <em>nova</em>, <em>NOVO</em> e <em>final_agora</em> parecem indicar algo mais recente ou definitivo, mas o nome sozinho não prova isso.</p>
      </div>

      <h3>O problema de hoje</h3>
      <p>Lia recebe uma orientação curta: <strong>“Organize essa pasta para a Feira.”</strong> Antes de mover, apagar ou renomear qualquer coisa, precisamos descobrir o que realmente chegou.</p>

      <section class="decision-box">
        <h3>Primeiro, pense</h3>
        <p>Qual ação preserva melhor o material recebido?</p>
        <div class="choice-list" data-choice data-answer="c" data-explanation="A cópia de trabalho permite investigar sem alterar o pacote recebido. O nome de um arquivo é uma pista, não uma prova de aprovação.">
          <label><input type="radio" name="d00" value="a"> excluir os arquivos que parecem repetidos;</label>
          <label><input type="radio" name="d00" value="b"> escolher <code>orcamento_final_agora.csv</code> porque o nome parece indicar que está pronto;</label>
          <label><input type="radio" name="d00" value="c"> guardar o pacote recebido e investigar usando uma cópia.</label>
          <button class="action-button" type="button" data-check-choice>Conferir decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>Faça comigo · preserve o original</h3>
      <div class="task-box">
        <ol>
          <li>Baixe o <a href="../downloads/informatica-produtividade/caixa-entrada-feira.zip" download>pacote da Feira de Projetos</a>.</li>
          <li>Localize o ZIP em <strong>Downloads</strong>. Pense nele como a embalagem em que o material chegou.</li>
          <li>Não renomeie, apague nem altere o ZIP.</li>
          <li>No Windows, clique com o botão direito e escolha <strong>Extrair Tudo</strong>. Em outro sistema, use a opção equivalente.</li>
          <li>A partir daqui, investigue somente a pasta extraída.</li>
        </ol>
      </div>
      <div class="evidence-box"><strong>Antes de continuar</strong><p>Você deve ter duas coisas: o ZIP original intacto e uma pasta extraída para o trabalho.</p></div>

      <h3>Descubra o que realmente chegou</h3>
      <p>Abra primeiro <code>LEIA-ME.txt</code>. Depois observe os demais nomes sem mover, renomear ou excluir nada.</p>
      <div class="artifact-card">
        <strong>Você deve encontrar exatamente estes oito itens</strong>
        <ul>
          <li><code>LEIA-ME.txt</code></li>
          <li><code>autorizacao-v2.txt</code></li>
          <li><code>cartaz-sem-titulo.svg</code></li>
          <li><code>cronograma NOVO.txt</code></li>
          <li><code>inscricoes (1).csv</code></li>
          <li><code>inscricoes nova.csv</code></li>
          <li><code>orcamento_final_agora.csv</code></li>
          <li><code>recado coordenação.txt</code></li>
        </ul>
      </div>
      <div class="danger-box"><strong>Se aparecer algo diferente</strong><p>Não tente “consertar” a pasta. Confira a extração ou baixe outra cópia. O navegador pode acrescentar “(1)” ao nome do ZIP sem alterar os arquivos internos.</p></div>

      <h3>Registre o ponto de partida</h3>
      <p>Para que as decisões da Feira não se percam ao longo do trabalho, crie <code>CONTROLE_DA_FEIRA.txt</code>. Esse arquivo acompanhará o projeto e receberá apenas informações que precisem ser consultadas novamente.</p>
      <div class="task-box"><ol>
        <li>Crie <code>CONTROLE_DA_FEIRA.txt</code> fora da pasta extraída.</li>
        <li>Crie a seção <strong>[P-01] Arquivos recebidos</strong>.</li>
        <li>Anote apenas: <code>8 itens; duas listas de inscrições; ZIP preservado; investigação na cópia extraída.</code></li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>o ZIP continua intacto, a pasta extraída contém os oito itens e você consegue explicar por que ainda não escolheu nenhum arquivo como “o correto”.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos o que chegou. Falta descobrir o que a Escola Horizonte realmente precisa receber como entrega.</p></div>
    `
  },
  {
    id: 'organizacao-pedido',
    number: '01',
    menuTitle: 'O pedido antes da ferramenta',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Requisitos · entregáveis, responsáveis e critérios',
    title: 'O pedido vem antes da ferramenta',
    objective: 'Transformar uma solicitação vaga em decisões concretas sobre entregas, públicos e pendências.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 9h00 · reunião de alinhamento</span>
        <h2>“Organizem tudo para a Feira” parece uma ordem, mas ainda não explica o que significa terminar.</h2>
        <p>Lia pergunta a Paulo o que exatamente precisa sair desse trabalho. Paulo esclarece três entregas: <strong>lista pública de projetos</strong>, <strong>cronograma para revisão</strong> e <strong>pacote interno com as fontes</strong>.</p>
      </div>

      <h3>Classifique o que você já recebeu</h3>
      <p>Abra a pasta e tome três decisões usando os arquivos disponíveis.</p>

      <div class="task-box"><ol>
        <li>Abra <code>inscricoes (1).csv</code> e <code>inscricoes nova.csv</code>. Pergunte: algum deles já pode virar a lista pública sem nova conferência?</li>
        <li>Abra <code>cronograma NOVO.txt</code>. Localize 09:00 e a frase “acho que a abertura mudou para 08:30”.</li>
        <li>Abra <code>orcamento_final_agora.csv</code>. Localize a situação da Gráfica Bairro.</li>
        <li>Classifique mentalmente cada caso como <strong>pode seguir</strong>, <strong>precisa de revisão</strong> ou <strong>é material interno</strong>.</li>
      </ol></div>

      <section class="decision-box">
        <h3>Decisão 1 · o cronograma</h3>
        <p>O arquivo <code>cronograma NOVO.txt</code> permite publicar 08:30 como horário oficial?</p>
        <div class="choice-list" data-choice data-answer="b" data-explanation="O arquivo diz apenas “acho que...” e informa que não há aprovação anexada. Isso é uma hipótese, não uma autorização.">
          <label><input type="radio" name="d01a" value="a"> sim, porque o nome contém NOVO;</label>
          <label><input type="radio" name="d01a" value="b"> não; 08:30 continua pendente até Paulo confirmar;</label>
          <label><input type="radio" name="d01a" value="c"> sim, porque 08:30 aparece dentro do arquivo.</label>
          <button class="action-button" type="button" data-check-choice>Conferir decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <section class="decision-box">
        <h3>Decisão 2 · a lista pública</h3>
        <p>Uma lista destinada a famílias e visitantes deve carregar turno, status interno e observações de acompanhamento?</p>
        <div class="choice-list" data-choice data-answer="c" data-explanation="A lista pública deve conter apenas o necessário para o público. Informações internas permanecem nas fontes de trabalho.">
          <label><input type="radio" name="d01b" value="a"> sim, porque quanto mais informação melhor;</label>
          <label><input type="radio" name="d01b" value="b"> sim, desde que o arquivo esteja em PDF;</label>
          <label><input type="radio" name="d01b" value="c"> não; o público deve receber apenas os campos necessários.</label>
          <button class="action-button" type="button" data-check-choice>Conferir decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>O quadro de trabalho da equipe</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Entrega</th><th>Para quem</th><th>Estado agora</th><th>Próxima ação</th></tr></thead>
        <tbody>
          <tr><td>Lista pública</td><td>famílias e visitantes</td><td>fontes ainda divergentes</td><td>comparar e confirmar inscrições</td></tr>
          <tr><td>Cronograma</td><td>coordenação / depois público</td><td>08:30 não confirmado</td><td>Paulo precisa confirmar</td></tr>
          <tr><td>Pacote interno</td><td>equipe</td><td>fontes precisam ser preservadas</td><td>organizar sem apagar o recebido</td></tr>
        </tbody>
      </table></div>

      <h3>Registre só o que será reutilizado</h3>
      <p>No <code>CONTROLE_DA_FEIRA.txt</code>, acrescente a seção <strong>[P-00] Pedido</strong> e copie apenas as três linhas do quadro acima: entrega, público, estado e próxima ação.</p>
      <div class="note-box"><strong>Termo profissional</strong><p>Quando definimos o que precisa estar verdadeiro para considerar uma entrega pronta, estamos usando <strong>critérios de aceite</strong>. Eles ajudam a equipe a verificar se o resultado atende ao que foi combinado.</p></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue dizer, sem olhar um modelo, por que a lista ainda não está pronta, por que 08:30 não pode ser publicado e por que o pacote interno precisa preservar as fontes.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora precisamos descobrir exatamente o que mudou entre as duas listas de inscrições.</p></div>
    `
  },
  {
    id: 'organizacao-inventario',
    number: '02',
    menuTitle: 'Inventariar antes de organizar',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Inspeção · nome, tipo, origem, conteúdo e lacunas',
    title: 'Inventariar antes de organizar',
    objective: 'Usar propriedades e conteúdo para separar fatos, indícios e pendências.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 10h10 · LAB-04</span>
        <h2>Existem duas listas de inscrições. Qual delas representa melhor o estado atual?</h2>
        <p>O pacote contém <code>inscricoes (1).csv</code> e <code>inscricoes nova.csv</code>. O nome “nova” chama atenção, mas agora vamos olhar o conteúdo, não confiar no rótulo.</p>
      </div>

      <h3>Faça comigo · compare sem salvar</h3>
      <div class="task-box"><ol>
        <li>Abra os dois CSV apenas para leitura. Se o aplicativo oferecer conversão ou salvamento automático, cancele.</li>
        <li>Compare cabeçalho, quantidade de linhas, turno e status.</li>
        <li>Localize F002/Equipe Sol em ambos.</li>
        <li>Veja se F004 aparece nos dois arquivos.</li>
        <li>Abra <code>recado coordenação.txt</code> e relacione as dúvidas de Paulo ao que você encontrou.</li>
      </ol></div>
      <div class="danger-box"><strong>Por que não salvar agora?</strong><p>Converter ou salvar pode mudar delimitadores, acentos, datas ou outros detalhes. Nesta etapa queremos preservar exatamente o que foi recebido.</p></div>

      <h3>O que os arquivos realmente mostram</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Arquivo</th><th>Observação verificável</th><th>O que ainda não prova</th></tr></thead>
        <tbody>
          <tr><td><code>inscricoes (1).csv</code></td><td>3 equipes; F002/Equipe Sol de manhã e pendente</td><td>que seja a versão autorizada</td></tr>
          <tr><td><code>inscricoes nova.csv</code></td><td>4 equipes; F002/Equipe Sol à tarde e confirmada; F004 aparece como pendente</td><td>quem autorizou as mudanças</td></tr>
          <tr><td><code>orcamento_final_agora.csv</code></td><td>Gráfica Bairro com aprovação “não informado”</td><td>que “final_agora” signifique aprovado</td></tr>
        </tbody>
      </table></div>

      <section class="checkpoint" data-quiz-group>
        <h3>Interprete sem exagerar a conclusão</h3>
        <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="O conteúdo mostra diferenças reais, mas a autoridade sobre as inscrições ainda precisa ser confirmada com Marina.">
          <p>Qual conclusão é sustentada pela comparação?</p>
          <label><input type="radio" name="q02a" value="a"> <code>inscricoes nova.csv</code> está automaticamente aprovada;</label>
          <label><input type="radio" name="q02a" value="b"> existem mudanças de turno, status e quantidade que precisam ser confirmadas com Marina;</label>
          <label><input type="radio" name="q02a" value="c"> os dois arquivos são idênticos.</label>
        </div>
        <button class="action-button" type="button" data-check-quiz>Conferir interpretação</button>
        <div class="quiz-result" aria-live="polite"></div>
      </section>

      <h3>Atualização mínima do controle</h3>
      <p>Na seção <strong>[P-01] Arquivos recebidos</strong>, acrescente somente as diferenças encontradas entre as inscrições e a pendência da Gráfica Bairro.</p>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue explicar as diferenças entre os dois CSV sem afirmar que um deles já está oficialmente aprovado.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos o que cada fonte contém. Precisamos organizar o fluxo sem esconder o material recebido.</p></div>
    `
  },
  {
    id: 'organizacao-pastas',
    number: '03',
    menuTitle: 'Estruturar pelo fluxo',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Pastas · estados de trabalho e fonte preservada',
    title: 'Estruturar pelo fluxo do trabalho',
    objective: 'Criar pastas que expressem estado e responsabilidade sem depender da memória de uma pessoa.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 13h20 · decisão da equipe</span>
        <h2>Se organizarmos por pessoa, a estrutura quebra quando a pessoa muda de função. E se organizarmos pelo estado do trabalho?</h2>
        <p>Você e Lia já sabem o que chegou e o que precisa ser entregue. Agora vamos criar uma estrutura que continue fazendo sentido quando Paulo revisar o material em outro computador.</p>
      </div>

      <div class="visual-lab" aria-labelledby="fluxo-pastas-title">
        <div class="visual-header"><span>Fluxo de trabalho</span><h3 id="fluxo-pastas-title">A fonte fica preservada; as cópias avançam pelo fluxo</h3></div>
        <div class="file-flow">
          <div><strong>00_Entrada</strong><span>o que chegou</span></div>
          <div><strong>10_Em_trabalho</strong><span>cópias que podem ser editadas</span></div>
          <div><strong>20_Para_revisao</strong><span>candidatas aguardando conferência</span></div>
          <div><strong>30_Publicado</strong><span>entrega realmente liberada</span></div>
          <div><strong>90_Arquivo</strong><span>estados encerrados e referências</span></div>
        </div>
      </div>

      <h3>Faça comigo · monte a árvore</h3>
      <div class="task-box">
        <strong>Alvo</strong><p>Crie <code>Feira_Projetos_2026</code> em <code>Documentos/MbB</code> ou no local autorizado pela instituição.</p>
        <ol>
          <li>Crie as cinco pastas do diagrama.</li>
          <li>Copie o ZIP original para <code>00_Entrada</code>.</li>
          <li>Copie a pasta extraída para <code>10_Em_trabalho</code>.</li>
          <li>Mova <code>CONTROLE_DA_FEIRA.txt</code> para a raiz de <code>10_Em_trabalho</code>.</li>
          <li>Confira que o ZIP abre em <code>00_Entrada</code> e que a cópia de trabalho ainda contém os oito itens recebidos.</li>
        </ol>
      </div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue apontar onde está o original recebido e onde está a cópia que poderá ser trabalhada, sem misturar os dois.</p></div>
      <div class="note-box"><strong>Por que os números?</strong><p>Eles ajudam a manter as etapas na mesma ordem quando o gerenciador classifica pastas alfabeticamente. É uma convenção útil, não uma regra universal.</p></div>
      <p>No controle, acrescente em <strong>[P-02] Estrutura e nomes</strong> apenas os cinco nomes de pasta. Nada além disso por enquanto.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A estrutura mostra onde cada estado fica, mas nomes como <code>orcamento_final_agora.csv</code> ainda não explicam de modo consistente assunto, estado e versão.</p></div>
    `
  },
  {
    id: 'organizacao-nomes',
    number: '04',
    menuTitle: 'Nomes que respondem',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Nomenclatura · portabilidade, estado e versão',
    title: 'Nomes que respondem perguntas',
    objective: 'Definir nomes previsíveis sem inventar aprovação nem quebrar extensões.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Terça-feira · 8h30 · revisão do inventário</span>
        <h2><code>final_agora</code> parece definitivo hoje. Daqui a uma semana, continuará significando alguma coisa?</h2>
        <p>Você e Lia precisam de nomes que ajudem qualquer pessoa a localizar o assunto e entender o estado do arquivo sem transformar uma suposição em aprovação.</p>
      </div>

      <div class="naming-formula"><span>AAAA-MM-DD</span><b>_</b><span>tipo</span><b>_</b><span>assunto</span><b>_</b><span>estado</span><b>_</b><span>vNN.ext</span></div>
      <div class="comparison-grid">
        <div class="bad-card"><strong><code>orcamento_final_agora.csv</code></strong><p>“final” não tem aprovação demonstrada e “agora” perde sentido com o tempo.</p></div>
        <div class="good-card"><strong><code>2026-09-08_orcamento_fornecedores_em-revisao_v01.csv</code></strong><p>O nome descreve uma versão em revisão sem fingir que ela já foi aprovada.</p></div>
      </div>

      <section class="decision-box">
        <h3>Qual nome é defensável agora?</h3>
        <div class="choice-list" data-choice data-answer="b" data-explanation="O conteúdo real do orçamento mostra que a aprovação da Gráfica Bairro está 'não informado'. O nome deve refletir revisão, não aprovação.">
          <label><input type="radio" name="d04" value="a"> <code>2026-09-08_orcamento_aprovado_v99.csv</code></label>
          <label><input type="radio" name="d04" value="b"> <code>2026-09-08_orcamento_fornecedores_em-revisao_v01.csv</code></label>
          <label><input type="radio" name="d04" value="c"> <code>orçamento:final?.csv</code></label>
          <button class="action-button" type="button" data-check-choice>Conferir nome</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>Faça comigo · renomeie somente cópias</h3>
      <div class="task-box"><ol>
        <li>Em <code>10_Em_trabalho</code>, crie <code>fontes_recebidas</code>.</li>
        <li>Mova para essa subpasta os oito itens recebidos <strong>sem renomeá-los</strong>.</li>
        <li>Copie para a raiz apenas os arquivos que serão trabalhados.</li>
        <li>Renomeie uma cópia do orçamento usando o padrão acima e estado <code>em-revisao</code>.</li>
        <li>Abra a cópia renomeada e confirme que o conteúdo continua legível.</li>
      </ol></div>
      <div class="danger-box"><strong>Renomear extensão não converte formato</strong><p>Trocar <code>.csv</code> por <code>.xlsx</code> muda o rótulo, não o conteúdo. Uma conversão exige salvar ou exportar no formato adequado.</p></div>
      <p>No controle, complete <strong>[P-02] Estrutura e nomes</strong> com apenas uma linha: <code>Padrão: AAAA-MM-DD_tipo_assunto_estado_vNN.ext</code>.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O nome melhorou. Agora precisamos decidir o que fazer quando uma informação muda sem apagar o estado anterior.</p></div>
    `
  },
  {
    id: 'organizacao-versoes',
    number: '05',
    menuTitle: 'Copiar, mover ou versionar',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Mudança controlada · estado anterior e aprovação',
    title: 'Copiar, mover, substituir ou criar versão?',
    objective: 'Escolher a operação pelo efeito esperado e verificar o resultado sem sobrescrever a única fonte.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Terça-feira · 10h40 · nova informação da secretaria</span>
        <h2>Marina confirma que a Equipe Sol deve ficar no turno da tarde e com status confirmado.</h2>
        <p>Pouco depois, Marina envia a confirmação à equipe. Como ela é a responsável pelas inscrições, essa informação resolve a dúvida sobre F002. Agora você precisa incorporar a confirmação sem apagar o estado anterior.</p>
      </div>

      <div class="table-wrap"><table>
        <thead><tr><th>Operação</th><th>Quando faz sentido</th><th>Risco principal</th><th>Como conferir</th></tr></thead>
        <tbody>
          <tr><td>Copiar</td><td>manter a origem e criar outra instância</td><td>cópias divergirem</td><td>origem e destino abrem</td></tr>
          <tr><td>Mover</td><td>mudar localização ou estado</td><td>pessoas perderem a referência</td><td>está no destino certo</td></tr>
          <tr><td>Substituir</td><td>trocar conteúdo no mesmo lugar</td><td>perder a única versão válida</td><td>estado anterior foi preservado</td></tr>
          <tr><td>Nova versão</td><td>registrar evolução controlada</td><td>acumular versões sem contexto</td><td>mudança e autorização são identificáveis</td></tr>
        </tbody>
      </table></div>

      <h3>Faça comigo · uma mudança, uma prova</h3>
      <div class="task-box"><ol>
        <li>Confirme que os originais continuam em <code>fontes_recebidas</code>.</li>
        <li>Use uma cópia de <code>inscricoes nova.csv</code> como candidata.</li>
        <li>Confira F001, F002, F003 e F004; não valide somente a linha que motivou a mudança.</li>
        <li>Dê à cópia um nome com estado <code>em-revisao_v01</code>.</li>
        <li>Copie a candidata para <code>20_Para_revisao</code> e abra-a no destino.</li>
      </ol></div>

      <h3>Registre apenas o vínculo que não pode ser perdido</h3>
      <p>Na seção <strong>[P-03] Versões</strong> do controle, escreva uma única linha ligando: <em>arquivo candidato → fonte anterior → mudança → confirmação de Marina → ainda não publicado</em>.</p>
      <div class="evidence-box"><strong>O que este teste prova</strong><p>A candidata contém quatro equipes e está coerente com a confirmação sobre F002. Isso ainda não prova que a lista pública está pronta.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A candidata ainda é um CSV. Agora vamos experimentar a diferença entre formato de arquivo e simples troca de extensão.</p></div>
    `
  },
  {
    id: 'organizacao-formatos',
    number: '06',
    menuTitle: 'Trabalho e entrega',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Formatos · conteúdo real, conversão e entrega',
    title: 'Formato de trabalho e formato de entrega',
    objective: 'Experimentar a diferença entre renomear uma extensão, converter de verdade e escolher formato pelo uso.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Quarta-feira · 8h05 · preparação da revisão</span>
        <h2>Se eu trocar <code>.csv</code> por <code>.xlsx</code>, o arquivo vira uma planilha do Excel?</h2>
        <p>Para responder sem adivinhar, faça um teste em uma cópia segura: primeiro altere apenas a extensão e observe o resultado; depois faça a conversão corretamente.</p>
      </div>

      <h3>Experimento A · mudar o nome não muda o formato</h3>
      <div class="task-box"><ol>
        <li>Crie uma pasta temporária <code>teste_formato</code> dentro de <code>10_Em_trabalho</code>.</li>
        <li>Copie para ela <code>orcamento_final_agora.csv</code> a partir de <code>fontes_recebidas</code>.</li>
        <li>Na cópia, altere somente a extensão de <code>.csv</code> para <code>.xlsx</code>. Se o Windows avisar sobre mudança de extensão, confirme apenas porque esta é uma cópia de teste.</li>
        <li>Tente abrir o arquivo renomeado e observe o que o aplicativo faz: abre com aviso, recusa, tenta reparar ou mostra incompatibilidade.</li>
        <li>Feche sem salvar.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que você acabou de provar</strong><p>A extensão faz parte do nome e ajuda o sistema a escolher um aplicativo, mas trocar essas letras não reescreve o conteúdo interno do arquivo.</p></div>

      <h3>Experimento B · agora converta de verdade</h3>
      <div class="task-box"><ol>
        <li>Abra novamente a cópia CSV original no aplicativo de planilha disponível.</li>
        <li>Use <strong>Salvar como</strong> ou <strong>Exportar</strong> e escolha um formato de planilha real, como <code>.ods</code> ou <code>.xlsx</code>.</li>
        <li>Feche o aplicativo.</li>
        <li>Abra o arquivo convertido.</li>
        <li>Compare o arquivo convertido com o CSV: extensão, tamanho e recursos que agora podem ser preservados.</li>
      </ol></div>

      <div class="format-grid">
        <article><span class="format-tag">Trabalho</span><strong>Editável nativo</strong><p><code>.ods/.xlsx</code> pode preservar fórmulas, várias abas e recursos de planilha.</p></article>
        <article><span class="format-tag">Intercâmbio</span><strong>CSV</strong><p>É simples para troca de dados tabulares, mas não carrega toda a estrutura de uma planilha.</p></article>
        <article><span class="format-tag">Entrega</span><strong>PDF</strong><p>É útil quando o objetivo é leitura estável, mas o resultado precisa ser aberto e conferido.</p></article>
      </div>

      <section class="checkpoint" data-quiz-group>
        <h3>Escolha pelo uso</h3>
        <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Renato precisa recalcular. Uma planilha editável é mais adequada do que uma imagem ou apenas PDF.">
          <p>Renato, do financeiro, precisa recalcular o orçamento. Qual opção atende melhor?</p>
          <label><input type="radio" name="q06a" value="a"> fotografia da tela</label>
          <label><input type="radio" name="q06a" value="b"> somente PDF</label>
          <label><input type="radio" name="q06a" value="c"> planilha editável</label>
        </div>
        <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Exportar não substitui a conferência do arquivo gerado.">
          <p>Exportar para PDF prova que a entrega está correta?</p>
          <label><input type="radio" name="q06b" value="a"> sim, sempre</label>
          <label><input type="radio" name="q06b" value="b"> não; o arquivo exportado precisa ser aberto e validado</label>
          <label><input type="radio" name="q06b" value="c"> somente se o nome contiver “final”</label>
        </div>
        <button class="action-button" type="button" data-check-quiz>Conferir escolhas</button>
        <div class="quiz-result" aria-live="polite"></div>
      </section>

      <div class="note-box"><strong>O que importa aqui</strong><p>Formato é conteúdo estruturado, não apenas extensão. Antes de escolher como entregar um arquivo, pense em quem precisa editar, recalcular, revisar ou apenas consultar.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Mesmo um arquivo correto pode chegar à pessoa errada com poder demais. Agora vamos testar decisões de compartilhamento.</p></div>
    `
  },
  {
    id: 'organizacao-compartilhamento',
    number: '07',
    menuTitle: 'Permissão necessária',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Compartilhamento · decisão de acesso e herança',
    title: 'Compartilhar com a permissão necessária',
    objective: 'Tomar decisões de acesso em situações concretas antes de testar compartilhamento em um serviço autorizado.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Quarta-feira · 10h30 · preparação do compartilhamento</span>
        <h2>Lia precisa organizar. Paulo precisa revisar. Renato precisa ver o orçamento. O público só precisa consultar o que foi publicado.</h2>
        <p>O problema não é decorar “visualizador”, “comentarista” ou “editor”. É escolher o menor acesso que ainda permite a cada pessoa fazer seu trabalho.</p>
      </div>

      <h3>Simulação 1 · público</h3>
      <section class="decision-box">
        <p>Você quer facilitar e pensa em compartilhar a pasta <code>Feira_Projetos_2026</code> inteira com o público como visualizador. Qual é o problema?</p>
        <div class="choice-list" data-choice data-answer="b" data-explanation="Mesmo como visualizador, o público poderia enxergar materiais internos se o acesso for concedido na pasta-pai. O correto é expor somente o conteúdo publicado.">
          <label><input type="radio" name="d07a" value="a"> nenhum; visualizador nunca oferece risco;</label>
          <label><input type="radio" name="d07a" value="b"> a pasta-pai pode expor também conteúdo interno;</label>
          <label><input type="radio" name="d07a" value="c"> o problema é apenas o nome da pasta.</label>
          <button class="action-button" type="button" data-check-choice>Testar decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>Simulação 2 · Renato</h3>
      <section class="decision-box">
        <p>Renato precisa conferir o orçamento, mas não precisa acessar inscrições. Qual opção é mais defensável?</p>
        <div class="choice-list" data-choice data-answer="c" data-explanation="O acesso deve acompanhar a necessidade. Renato recebe somente o orçamento e apenas o papel necessário para a conferência.">
          <label><input type="radio" name="d07b" value="a"> editor da pasta inteira;</label>
          <label><input type="radio" name="d07b" value="b"> acesso às inscrições e ao orçamento, para evitar trabalho depois;</label>
          <label><input type="radio" name="d07b" value="c"> acesso somente ao orçamento, com o menor papel suficiente.</label>
          <button class="action-button" type="button" data-check-choice>Testar decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>Simulação 3 · Paulo</h3>
      <section class="decision-box">
        <p>Paulo precisa revisar uma candidata antes de aprovar. O serviço oferece comentário no arquivo. O que tentar primeiro?</p>
        <div class="choice-list" data-choice data-answer="a" data-explanation="Se comentar resolve a revisão, dar edição seria poder além do necessário. O papel pode ser ampliado depois se a tarefa exigir.">
          <label><input type="radio" name="d07c" value="a"> comentário no arquivo;</label>
          <label><input type="radio" name="d07c" value="b"> editor de toda a pasta;</label>
          <label><input type="radio" name="d07c" value="c"> link público editável.</label>
          <button class="action-button" type="button" data-check-choice>Testar decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>Se houver serviço autorizado, prove uma decisão</h3>
      <div class="task-box"><ol>
        <li>Use apenas uma pasta fictícia chamada <code>MBB_Feira_Compartilhamento_Teste</code>.</li>
        <li>Conceda visualização a uma conta de teste indicada pelo professor.</li>
        <li>Confirme, com a conta de teste, que o arquivo abre mas não pode ser editado.</li>
        <li>Remova o acesso e confirme que deixou de funcionar.</li>
        <li>Se não houver serviço autorizado, fique apenas nas três simulações acima; não use conta pessoal para “dar um jeito”.</li>
      </ol></div>

      <h3>Registre as permissões definidas</h3>
      <p>Na seção <strong>[P-04] Acessos</strong> do controle, escreva: <code>Lia=editar trabalho; Paulo=revisar; Renato=somente orçamento; Público=somente publicado.</code></p>
      <div class="danger-box"><strong>Não amplie acesso para resolver erro</strong><p>Se um teste falhar, verifique conta, pasta-pai e papel. Não use “qualquer pessoa com o link” por conveniência.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos limitar acesso. Falta provar que uma alteração errada pode ser recuperada.</p></div>
    `
  },
  {
    id: 'organizacao-recuperacao',
    number: '08',
    menuTitle: 'Provar recuperação',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Continuidade · sincronização, histórico, cópia e restauração',
    title: 'A pasta aparece em dois computadores. Está protegida?',
    objective: 'Executar restauração controlada e registrar o que o teste demonstra e o que permanece fora do alcance.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Quinta-feira · 8h20 · teste de continuidade</span>
        <h2>Paulo abre COORD-02 e percebe que a mesma pasta de trabalho usada em SEC-03 também está disponível ali. Isso significa que existe backup?</h2>
        <p>A presença da pasta nos dois computadores mostra disponibilidade naquele momento. Ainda não sabemos, porém, se uma exclusão ou alteração errada poderá ser desfeita.</p>
      </div>

      <section class="decision-box">
        <h3>Preveja antes do teste</h3>
        <div class="choice-list" data-choice data-answer="c" data-explanation="Ver a pasta em dois computadores não mostra, sozinho, se uma exclusão será propagada nem se existe uma versão recuperável.">
          <label><input type="radio" name="d08" value="a"> a pasta está protegida contra qualquer perda;</label>
          <label><input type="radio" name="d08" value="b"> os dois computadores são automaticamente backups independentes;</label>
          <label><input type="radio" name="d08" value="c"> ainda não há evidência suficiente de recuperação.</label>
          <button class="action-button" type="button" data-check-choice>Conferir previsão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <div class="comparison-grid four">
        <div><strong>Sincronização</strong><p>Mantém estados alinhados e pode propagar uma exclusão.</p></div>
        <div><strong>Histórico</strong><p>Guarda versões anteriores conforme as regras do serviço.</p></div>
        <div><strong>Lixeira</strong><p>Retém itens excluídos por um período.</p></div>
        <div><strong>Cópia independente</strong><p>Reduz dependência do mesmo fluxo, mas também precisa ser testada.</p></div>
      </div>

      <h3>Experimento · recupere de verdade</h3>
      <div class="task-box"><ol>
        <li>Escolha um arquivo fictício de <code>10_Em_trabalho</code> e copie-o para <code>90_Arquivo/teste-recuperacao</code>.</li>
        <li>Anote uma linha que permita reconhecer o conteúdo original.</li>
        <li>Na cópia de trabalho, altere essa linha e salve.</li>
        <li>Recupere o estado anterior a partir de <code>90_Arquivo</code>, usando outro nome dentro de <code>restaurado_teste</code>.</li>
        <li>Abra o restaurado e confira a linha original.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que isso prova</strong><p>Você demonstrou recuperação daquele arquivo a partir daquele local. Como as duas pastas podem estar no mesmo disco, ainda não demonstrou recuperação após falha física do equipamento.</p></div>

      <h3>Se houver histórico de versões autorizado</h3>
      <div class="task-box"><ol>
        <li>Use apenas um arquivo fictício na pasta <code>MBB_Feira_Compartilhamento_Teste</code>.</li>
        <li>Altere uma linha e aguarde a sincronização terminar.</li>
        <li>Abra o histórico de versões e identifique o estado anterior.</li>
        <li>Restaure e confira o conteúdo.</li>
      </ol></div>
      <p>Na seção <strong>[P-05] Recuperação</strong>, escreva somente: cenário testado, resultado e limite do que o teste não prova.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O projeto já pode ser organizado, revisado, compartilhado e recuperado. Falta provar que outra pessoa consegue continuar o trabalho sem depender da memória de Lia.</p></div>
    `
  },
  {
    id: 'organizacao-integrador',
    number: '99',
    menuTitle: 'Entrega da Feira',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Desafio integrador · organizar, validar, entregar e transferir',
    title: 'Entrega da Feira',
    objective: 'Entregar um conjunto rastreável que preserve fontes, sinalize pendências e possa ser continuado por outra pessoa.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Sexta-feira · 14h00 · troca de responsável</span>
        <h2>Lia ficará no auditório. Outra pessoa precisa continuar o trabalho sem perguntar “onde está o arquivo certo?”.</h2>
        <p>Você tem o pacote inicial, a árvore de trabalho e um único <code>CONTROLE_DA_FEIRA.txt</code> com as seções P-00 a P-05. Marina confirmou a situação da Equipe Sol. O horário de abertura e a aprovação da Gráfica Bairro continuam pendentes.</p>
      </div>

      <h3>Missão · entregue algo que outra pessoa consegue continuar</h3>
      <div class="task-box"><ol>
        <li><strong>Preserve a origem.</strong> Confirme o ZIP em <code>00_Entrada</code> e os oito arquivos recebidos em <code>fontes_recebidas</code>.</li>
        <li><strong>Confira o pedido.</strong> Use [P-00] para manter lista pública, cronograma e pacote interno separados.</li>
        <li><strong>Confira as fontes.</strong> Use [P-01] para lembrar as divergências das inscrições e do orçamento.</li>
        <li><strong>Confira estrutura e nomes.</strong> Use [P-02] e não renomeie as fontes recebidas.</li>
        <li><strong>Confira a candidata.</strong> [P-03] deve ligar a versão com quatro equipes à confirmação de Marina.</li>
        <li><strong>Produza a lista pública.</strong> Crie um CSV apenas com inscrições confirmadas e apenas as colunas <code>equipe</code> e <code>projeto</code>.</li>
        <li><strong>Separe revisão de publicação.</strong> Não coloque o cronograma em <code>30_Publicado</code> enquanto o horário estiver pendente.</li>
        <li><strong>Confira acesso.</strong> [P-04] deve mostrar quem precisa ver ou editar o quê.</li>
        <li><strong>Prove recuperação.</strong> Repita uma restauração curta e confira [P-05].</li>
        <li><strong>Entregue.</strong> Dê a outra pessoa apenas a estrutura e o controle; não explique oralmente onde está cada coisa.</li>
      </ol></div>

      <h3>Checklist de aceite</h3>
      <div class="check-card">
        <ul data-checklist>
          <li><label><input type="checkbox"> fonte recebida preservada e legível;</label></li>
          <li><label><input type="checkbox"> o controle resume pedido, fontes, nomes, versões, acessos e recuperação sem virar relatório longo;</label></li>
          <li><label><input type="checkbox"> lista pública contém somente os campos autorizados;</label></li>
          <li><label><input type="checkbox"> horário e gráfica permanecem pendentes sem invenção;</label></li>
          <li><label><input type="checkbox"> outra pessoa localizou a candidata e explicou o próximo passo.</label></li>
        </ul>
        <p class="check-progress" data-check-progress>0/5 itens conferidos</p>
      </div>

      <h3>Validação cruzada</h3>
      <div class="two-col">
        <div class="artifact-card"><strong>Quem entrega</strong><p>Entrega a árvore e <code>CONTROLE_DA_FEIRA.txt</code>. Não faz uma explicação oral complementar.</p></div>
        <div class="artifact-card"><strong>Quem recebe</strong><p>Localiza a lista candidata, identifica as duas pendências, confere a fonte e aponta a próxima autorização necessária.</p></div>
      </div>
      <div class="evidence-box"><strong>Critério de sucesso</strong><p>Se quem recebe consegue continuar sem depender da memória de Lia, a organização cumpriu sua função. Se precisa adivinhar, o trabalho ainda não está realmente entregue.</p></div>

      <h3>O que você construiu neste módulo</h3>
      <div class="rubric-grid">
        <article><strong>Entender</strong><p>transformou pedido vago em decisões claras;</p></article>
        <article><strong>Experimentar</strong><p>trabalhou em cópias e provocou testes controlados;</p></article>
        <article><strong>Analisar</strong><p>comparou conteúdo e separou fato, indício e pendência;</p></article>
        <article><strong>Aplicar</strong><p>entregou um conjunto que outra pessoa consegue continuar.</p></article>
      </div>
      <div class="bridge-box"><strong>Ponte para Documentos Profissionais</strong><p>No próximo módulo, o mesmo cenário continuará. Agora os arquivos organizados serão transformados em documentos estruturados, revisáveis e adequados para uso profissional.</p></div>
    `
  }
];
