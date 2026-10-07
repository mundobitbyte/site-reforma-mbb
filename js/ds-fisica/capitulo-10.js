(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma situação real para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">A sala de informática da escola fica muito quente nas tardes de Sol. Antes de comprar um revestimento para o telhado, a direção pede à turma que avalie uma propaganda que promete: “reduz a temperatura em até 15 °C e economiza 40% de energia”.</strong>
        <p>A frase parece convincente, mas faltam informações importantes: <strong>15 °C em quê?</strong> Na superfície do telhado, no ar da sala ou no equipamento? Em qual horário, clima e tipo de construção? E de onde veio o número de 40%?</p>
        <div class="quick-question" data-choice-question data-correct="c"><strong>Antes de aceitar ou rejeitar a propaganda</strong><p>Qual deve ser o primeiro passo?</p><div class="choice-row"><button type="button" data-choice="a">Confiar porque há números exatos</button><button type="button" data-choice="b">Descartar porque é publicidade</button><button type="button" data-choice="c">Descobrir exatamente o que foi medido, como foi medido e em quais condições</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Um número só pode ser interpretado quando sabemos o que ele representa e como foi obtido." data-wrong-text="Antes de julgar o resultado, identifique variável, método, comparação e condições da medição."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> decidir o que a evidência realmente permite concluir e, ao mesmo tempo, escolher materiais usando propriedades físicas, segurança e sustentabilidade.</p>
      </div>
    </section>

    <section>
      <h3>1. Um número sem contexto não responde à pergunta</h3>
      <p>A afirmação “reduz 15 °C” parece objetiva, mas ainda está incompleta. Temperatura é uma grandeza que precisa estar ligada a <strong>um corpo, local, instante e procedimento de medida</strong>.</p>
      <div class="analysis-steps"><div><span>1</span><strong>O quê?</strong><p>Qual grandeza foi medida?</p></div><div><span>2</span><strong>Onde?</strong><p>Telhado, ar interno ou outro ponto?</p></div><div><span>3</span><strong>Quando?</strong><p>Qual horário e condição ambiental?</p></div><div><span>4</span><strong>Comparado com quê?</strong><p>Existe um caso de referência?</p></div><div><span>5</span><strong>Como?</strong><p>Qual instrumento e procedimento?</p></div></div>
      <div class="note-box"><strong>Resposta à primeira pergunta</strong><p>Os “15 °C” só têm significado científico suficiente quando sabemos <strong>qual temperatura</strong> diminuiu, em relação a qual situação e sob quais condições.</p></div>
    </section>

    <section>
      <h3>2. Fonte confiável não é sinônimo de “site bonito” nem de “texto com gráfico”</h3>
      <p>Uma fonte merece mais confiança quando deixa claro <strong>quem produziu a informação, quais dados foram usados, como as medições foram feitas e quais limites existem</strong>. Também é importante verificar se outras fontes independentes chegam a resultados compatíveis.</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">Autoria e responsabilidade</strong><p>É possível identificar autor, instituição ou equipe responsável e sua área de atuação?</p></div><div class="example-box"><strong class="card-title">Método e dados</strong><p>O texto mostra como os valores foram obtidos, unidades, condições e quantidade de medições?</p></div><div class="example-box"><strong class="card-title">Conferência externa</strong><p>Há documentos técnicos, estudos, normas ou fontes independentes que permitam comparar a afirmação?</p></div></div>
      <div class="note-box"><strong>Interesse comercial não torna um dado automaticamente falso</strong><p>Uma empresa pode apresentar dados corretos, mas a existência de interesse comercial torna ainda mais importante examinar método, comparação, limites e fontes independentes.</p></div>
    </section>

    <section>
      <h3>3. A turma recebe um pequeno conjunto de dados: agora é preciso ler, não apenas olhar</h3>
      <p>Para treinar a análise, considere os seguintes <strong>dados hipotéticos de um teste escolar</strong>. Duas caixas iguais foram colocadas sob a mesma fonte de radiação. Uma recebeu cobertura escura; a outra, cobertura clara e refletiva. A temperatura do ar interno foi registrada nos mesmos instantes.</p>
      <div class="table-wrap"><table aria-label="Dados hipotéticos de temperatura em duas caixas"><thead><tr><th>Tempo</th><th>Cobertura escura</th><th>Cobertura refletiva</th><th>Diferença</th></tr></thead><tbody><tr><td>0 min</td><td>27,0 °C</td><td>27,0 °C</td><td>0,0 °C</td></tr><tr><td>10 min</td><td>31,8 °C</td><td>29,7 °C</td><td>2,1 °C</td></tr><tr><td>20 min</td><td>35,2 °C</td><td>31,6 °C</td><td>3,6 °C</td></tr><tr><td>30 min</td><td>37,0 °C</td><td>32,5 °C</td><td>4,5 °C</td></tr></tbody></table></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>O que esses dados permitem afirmar?</strong><p>Qual conclusão é adequada?</p><div class="choice-row"><button type="button" data-choice="a">O produto comercial reduz qualquer sala em exatamente 15 °C</button><button type="button" data-choice="b">Neste teste hipotético, a caixa com cobertura refletiva apresentou menor aquecimento do ar interno</button><button type="button" data-choice="c">Toda cobertura clara economiza exatamente 40% de energia</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A conclusão deve permanecer dentro do que foi realmente testado." data-wrong-text="Não transforme um experimento específico em uma afirmação universal nem use números que não aparecem nos dados."></div></div>
      <div class="note-box"><strong>Por que o teste ainda não prova a propaganda?</strong><p>Uma caixa sob uma fonte de radiação não reproduz automaticamente uma sala real. Tamanho, ventilação, umidade, materiais das paredes, incidência solar, duração do teste e muitos outros fatores mudam o resultado.</p></div>
    </section>

    <section>
      <h3>4. Gráficos também podem esclarecer — ou induzir a uma impressão errada</h3>
      <p>Antes de interpretar um gráfico, leia <strong>título, eixos, unidades, origem dos dados e escala</strong>. Um eixo vertical iniciado muito perto dos valores medidos pode ampliar visualmente diferenças pequenas; uma escala muito ampla pode esconder diferenças importantes.</p>
      <div class="visual-box"><strong class="card-title">A mesma diferença deve conservar o mesmo significado físico</strong><svg class="lesson-visual" viewBox="0 0 760 280" role="img" aria-label="Dois termômetros esquemáticos mostrando 37 graus Celsius e 32,5 graus Celsius"><line x1="170" y1="45" x2="170" y2="225" stroke="#62748a" stroke-width="6"/><circle cx="170" cy="230" r="24" fill="#b42318"/><line x1="170" y1="92" x2="170" y2="225" stroke="#b42318" stroke-width="14"/><text x="115" y="265" class="visual-note">37,0 °C</text><line x1="555" y1="45" x2="555" y2="225" stroke="#62748a" stroke-width="6"/><circle cx="555" cy="230" r="24" fill="#1967d2"/><line x1="555" y1="115" x2="555" y2="225" stroke="#1967d2" stroke-width="14"/><text x="495" y="265" class="visual-note">32,5 °C</text><text x="282" y="42" class="visual-note">diferença observada: 4,5 °C</text></svg><p class="visual-caption">O desenho representa apenas os dois valores finais do teste hipotético; ele não acrescenta uma conclusão além dos dados.</p></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Leitura crítica</strong><p>Um gráfico tem barras muito diferentes visualmente, mas o eixo vertical começa em 31 °C e termina em 37 °C. O que fazer?</p><div class="choice-row"><button type="button" data-choice="a">Concluir que houve diferença enorme sem ler os números</button><button type="button" data-choice="b">Desconsiderar qualquer gráfico cujo eixo não comece em zero</button><button type="button" data-choice="c">Ler a escala e os valores antes de avaliar o tamanho físico da diferença</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A escala pode ser legítima, mas precisa ser lida para não confundir impacto visual com magnitude física." data-wrong-text="O problema não é automaticamente a escala escolhida; é interpretá-la sem atenção."></div></div>
    </section>

    <section>
      <h3>5. Mesmo com bons dados, ainda precisamos escolher o material certo para a aplicação</h3>
      <p>Não existe “o melhor material” em qualquer situação. A escolha depende das propriedades relevantes para o problema. Para reduzir a entrada de energia térmica numa cobertura, podem importar <strong>refletância, condutividade térmica, espessura, calor específico e capacidade térmica do conjunto</strong>. Para uso real também importam resistência mecânica, durabilidade e comportamento em caso de incêndio.</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">Cobertura refletiva</strong><p>Pode aumentar a fração da radiação solar refletida. Sua eficácia depende da superfície, conservação, sujeira, envelhecimento e condições de uso.</p></div><div class="example-box"><strong class="card-title">Material isolante</strong><p>Busca dificultar a transferência de energia por condução. Condutividade, espessura, instalação e segurança precisam ser considerados.</p></div><div class="example-box"><strong class="card-title">Estrutura metálica</strong><p>Pode ser adequada mecanicamente, mas metais costumam conduzir energia térmica com facilidade. Uma propriedade favorável não garante desempenho térmico ideal.</p></div></div>
      <div class="note-box"><strong>A Física ajuda a escolher; não substitui especificações técnicas</strong><p>Uma aplicação real precisa respeitar normas, instruções de instalação, classificação de segurança e condições da edificação. Um experimento escolar não autoriza improvisações em telhados ou instalações elétricas.</p></div>
    </section>

    <section>
      <h3>6. Segurança e sustentabilidade também fazem parte da decisão tecnológica</h3>
      <p>Uma solução não deve ser avaliada apenas pelo desempenho térmico inicial. É preciso perguntar quanto dura, como é mantida, se libera substâncias perigosas, como se comporta em incêndio, quanta matéria e energia são usadas e o que acontece ao fim de sua vida útil.</p>
      <div class="comparison-grid"><div class="example-box"><strong class="card-title">Desempenho</strong><p>Resolve o problema nas condições reais de uso?</p></div><div class="example-box"><strong class="card-title">Segurança</strong><p>É compatível com normas, instalação e riscos do ambiente?</p></div><div class="example-box"><strong class="card-title">Durabilidade</strong><p>Por quanto tempo mantém as propriedades necessárias?</p></div><div class="example-box"><strong class="card-title">Impacto</strong><p>Quais são os custos materiais, energéticos e ambientais ao longo do uso e descarte?</p></div></div>
      <div class="note-box"><strong>“Sustentável” também precisa de evidência</strong><p>O rótulo não basta. Uma alegação ambiental deve indicar quais critérios estão sendo considerados e quais dados sustentam a comparação.</p></div>
    </section>

    <section>
      <h3>7. Laboratório: descubra o que falta antes de confiar numa afirmação</h3>
      <div class="interactive-lab" id="sourceAuditLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Auditoria de uma afirmação científica</h4></div>
        <p>Imagine que você encontrou uma publicação com uma conclusão sobre um material. Informe o que a publicação apresenta.</p>
        <div class="lab-controls"><label>Autoria identificada<select id="auditAuthor"><option value="no">Não</option><option value="yes">Sim</option></select></label><label>Método descrito<select id="auditMethod"><option value="no">Não</option><option value="partial">Parcialmente</option><option value="yes">Sim</option></select></label><label>Dados e unidades disponíveis<select id="auditData"><option value="no">Não</option><option value="partial">Parcialmente</option><option value="yes">Sim</option></select></label><label>Comparação independente encontrada<select id="auditIndependent"><option value="no">Não</option><option value="yes">Sim</option></select></label></div>
        <div class="lab-result" aria-live="polite"><span>Situação:</span><strong id="auditStatus">Informação insuficiente</strong></div>
        <p id="auditConclusion">Ainda faltam elementos básicos para avaliar a afirmação com confiança.</p>
        <div class="note-box"><strong>O resultado não é um selo de verdade</strong><p>Mesmo uma fonte bem documentada pode conter erros. O laboratório apenas ajuda a verificar se existem elementos mínimos para uma análise crítica.</p></div>
      </div>
    </section>

    <section>
      <h3>8. Então devemos comprar o revestimento anunciado?</h3>
      <p>Com apenas a propaganda inicial, <strong>não temos informação suficiente para decidir</strong>. A promessa de “15 °C” precisa dizer o que foi medido e em quais condições; a economia de “40%” precisa mostrar consumo antes e depois, período de comparação, equipamentos e método.</p>
      <p>A decisão mais responsável seria buscar documentação técnica, comparar fontes independentes e realizar, se for adequado e seguro, um teste controlado em pequena escala antes de uma compra maior.</p>
      <div class="note-box"><strong>Resposta final à situação da escola</strong><p>A Física não diz “compre” ou “não compre” a partir de uma frase publicitária. Ela fornece critérios para <strong>medir, comparar, interpretar e decidir com evidências</strong>.</p></div>
    </section>

    <section>
      <h3>9. Atividade prática: transforme uma propaganda em perguntas investigáveis</h3>
      <div class="experiment-box"><strong class="card-title">Auditoria de uma afirmação</strong><p>Escolha uma afirmação sobre um produto ou tecnologia relacionada à Física e escreva quatro colunas: <strong>o que está sendo afirmado</strong>, <strong>qual evidência seria necessária</strong>, <strong>o que a fonte realmente apresenta</strong> e <strong>o que ainda não podemos concluir</strong>.</p><ol class="reason-steps"><li>Identifique todas as grandezas e unidades citadas.</li><li>Procure as condições em que os dados foram obtidos.</li><li>Separe dado observado de interpretação.</li><li>Verifique se há comparação adequada.</li><li>Procure pelo menos uma fonte independente quando isso for possível.</li></ol><p class="safety-note"><strong>Segurança:</strong> não teste materiais, equipamentos elétricos, produtos químicos ou estruturas físicas por conta própria. A atividade principal é de análise de informação.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Antes de recomendar uma tecnologia</span>
      <h3>10. Você consegue separar dado, argumento e conclusão?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Número</strong><p>Uma propaganda diz “reduz 12 °C”, mas não informa o que foi medido. A melhor avaliação é:</p><div class="choice-row"><button type="button" data-choice="a">o número prova a eficácia</button><button type="button" data-choice="b">a afirmação está incompleta sem variável, comparação e condições</button><button type="button" data-choice="c">12 °C é impossível em qualquer situação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O valor precisa de contexto experimental." data-wrong-text="Não aceite nem rejeite o número antes de saber o que ele representa."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Fonte</strong><p>Qual elemento mais ajuda a verificar uma afirmação científica?</p><div class="choice-row"><button type="button" data-choice="a">muitas animações</button><button type="button" data-choice="b">linguagem muito confiante</button><button type="button" data-choice="c">método, dados, autoria e possibilidade de comparação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Esses elementos permitem examinar a evidência." data-wrong-text="A aparência do texto não substitui transparência metodológica."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Tabela</strong><p>No teste hipotético, após 30 min, a diferença entre 37,0 °C e 32,5 °C foi:</p><div class="choice-row"><button type="button" data-choice="a">4,5 °C</button><button type="button" data-choice="b">15 °C</button><button type="button" data-choice="c">69,5 °C</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="37,0 − 32,5 = 4,5 °C." data-wrong-text="Subtraia as duas temperaturas medidas no mesmo instante."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Generalização</strong><p>Um teste com duas caixas permite concluir diretamente que:</p><div class="choice-row"><button type="button" data-choice="a">todo prédio terá o mesmo resultado</button><button type="button" data-choice="b">o resultado vale para aquelas condições testadas; aplicar a outros contextos exige nova evidência</button><button type="button" data-choice="c">experimentos pequenos nunca servem para nada</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A conclusão deve respeitar o alcance do experimento." data-wrong-text="Modelos e testes simplificados são úteis, mas possuem limites."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Material</strong><p>Por que não existe um único “melhor material” para toda aplicação?</p><div class="choice-row"><button type="button" data-choice="a">porque propriedades físicas não podem ser medidas</button><button type="button" data-choice="b">porque todos os materiais são iguais</button><button type="button" data-choice="c">porque diferentes aplicações exigem combinações diferentes de propriedades, segurança e durabilidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A escolha é feita em função dos requisitos da aplicação." data-wrong-text="Compare desempenho térmico, mecânico, segurança e uso real."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Sustentabilidade</strong><p>Uma solução ser chamada de “ecológica” significa que:</p><div class="choice-row"><button type="button" data-choice="a">a alegação ainda precisa de critérios e evidências</button><button type="button" data-choice="b">ela não causa nenhum impacto ambiental</button><button type="button" data-choice="c">ela sempre dura mais</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Rótulos ambientais também precisam ser sustentados por dados e critérios claros." data-wrong-text="Não transforme uma palavra de marketing em conclusão científica."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Gráfico</strong><p>Antes de comparar visualmente duas barras de um gráfico, é essencial:</p><div class="choice-row"><button type="button" data-choice="a">ver qual barra tem a cor mais forte</button><button type="button" data-choice="b">ler eixos, escala, unidades e valores</button><button type="button" data-choice="c">assumir que o eixo começa em zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A escala determina como a diferença visual deve ser interpretada." data-wrong-text="A aparência só faz sentido depois da leitura da escala."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Decisão</strong><p>Qual é a melhor sequência para uma decisão tecnológica?</p><div class="choice-row"><button type="button" data-choice="a">comprar → procurar justificativa → medir</button><button type="button" data-choice="b">escolher pela propaganda → ignorar limites</button><button type="button" data-choice="c">definir problema → buscar evidências → comparar alternativas → considerar riscos e impactos → decidir</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa sequência mantém a decisão ligada ao problema e às evidências." data-wrong-text="A decisão deve vir depois da definição do problema e da comparação das evidências."></div></div>
      <div class="challenge-box"><strong>Desafio MbB — parecer para a escola</strong><p>Escreva um parecer curto sobre a propaganda dos “15 °C e 40%”. Não diga apenas se acredita ou não. Liste quais informações faltam, quais dados seriam necessários, que propriedades dos materiais deveriam ser comparadas e quais critérios de segurança e sustentabilidade entrariam na decisão.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo desenvolve a interpretação de textos de divulgação científica, dados, tabelas, argumentos e conclusões, com atenção à <strong>confiabilidade das fontes</strong>. Também aplica a análise de <strong>propriedades dos materiais</strong> à escolha de soluções seguras e sustentáveis, articulando Física, tecnologia e tomada de decisão.</p></details>
  `;

  function initSourceAuditLab(root) {
    const author = $('#auditAuthor', root), method = $('#auditMethod', root), data = $('#auditData', root), independent = $('#auditIndependent', root);
    const status = $('#auditStatus', root), conclusion = $('#auditConclusion', root);
    if (!author || !method || !data || !independent || !status || !conclusion) return;

    const draw = () => {
      const score = (author.value === 'yes' ? 1 : 0) + (method.value === 'yes' ? 2 : method.value === 'partial' ? 1 : 0) + (data.value === 'yes' ? 2 : data.value === 'partial' ? 1 : 0) + (independent.value === 'yes' ? 1 : 0);
      if (score <= 2) {
        status.textContent = 'Informação insuficiente';
        conclusion.textContent = 'Faltam elementos básicos para avaliar a afirmação. Procure autoria, método, dados e condições da comparação.';
      } else if (score <= 4) {
        status.textContent = 'Evidência parcial';
        conclusion.textContent = 'Já existem elementos úteis, mas ainda há lacunas. A conclusão deve ser limitada ao que os dados e o método realmente sustentam.';
      } else {
        status.textContent = 'Melhor documentada para análise';
        conclusion.textContent = 'A afirmação está mais bem documentada e pode ser examinada com maior rigor. Ainda assim, isso não garante que esteja correta: compare métodos, limites e outras fontes.';
      }
    };

    [author, method, data, independent].forEach(control => {
      control.addEventListener('input', draw);
      control.addEventListener('change', draw);
    });
    draw();
  }

  MBB.enableChapter?.('10 Física, tecnologia e informação confiável', () => {
    MBB.showLesson({
      unit:'Ciência e tecnologia',
      technical:'Leitura de dados • fontes confiáveis • propriedades dos materiais • segurança • sustentabilidade',
      title:'Física, tecnologia e informação confiável',
      objective:'<strong>Propósito:</strong> avaliar uma afirmação tecnológica realista para aprender a interpretar dados e fontes e escolher materiais considerando propriedades físicas, segurança e sustentabilidade.',
      html:lessonHtml,
      init:initSourceAuditLab
    });
  });
})();