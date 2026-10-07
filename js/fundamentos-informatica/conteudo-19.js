window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "inteligencia-artificial",
  number: "19",
  unit: "Ato 4 · Computação no mundo atual",
  menuTitle: "Inteligência Artificial",
  technicalTitle: "IA • Machine Learning • dados • treinamento • modelo • inferência • classificação • regressão • overfitting • redes neurais • IA generativa • LLM • token • alucinação",
  title: "Como um programa reconhece padrões sem receber uma regra escrita para cada caso?",
  objective: "Construir um modelo mental de IA e aprendizado de máquina, distinguindo regras explícitas, treinamento, modelo, inferência e IA generativa e reconhecendo limites como erros, viés e alucinação.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Quando escrever todas as regras deixa de funcionar</span>
      <h2>Como programar uma regra que reconheça qualquer fotografia de gato?</h2>
      <p>“Tem orelhas pontudas” falha com muitos gatos e muitos cachorros. “Tem bigodes” também não resolve. Luz, ângulo, raça e posição mudam os pixels. <strong>Em certos problemas, escrever manualmente uma regra para cada caso possível se torna impraticável.</strong></p>
    </div>

    <h3>IA é uma área, não um único algoritmo</h3>
    <p>Um filtro de spam, um sistema de recomendação, um programa de xadrez e um gerador de texto podem ser chamados de IA e funcionar de formas bastante diferentes.</p>
    <div class="definition-box featured"><span class="term">Inteligência Artificial — IA</span><p>É uma área da computação dedicada a sistemas capazes de realizar tarefas como reconhecimento de padrões, previsão, decisão, linguagem, percepção ou geração de conteúdo por técnicas computacionais.</p></div>
    <div class="note-box compact"><strong>IA não implica consciência.</strong><p>Dizer que um sistema realiza uma tarefa associada à inteligência humana não demonstra que ele pense, compreenda ou tenha experiência consciente como uma pessoa.</p></div>

    <h3>Quando as regras são claras, programação tradicional continua excelente</h3>
    <p>Calcular a média de duas notas não exige um modelo treinado. Podemos escrever a regra diretamente:</p>
    <div class="example-box compact"><p><code>media = (nota1 + nota2) / 2</code></p></div>
    <div class="concept-flow"><div><strong>Regras</strong><span>escritas pelo programador</span></div><span class="flow-arrow">+</span><div><strong>Dados</strong><span>notas</span></div><span class="flow-arrow">→</span><div><strong>Resultado</strong><span>média</span></div></div>
    <p>IA não substitui automaticamente esse modelo. Ela se torna especialmente interessante quando padrões são difíceis de escrever como um conjunto completo de regras explícitas.</p>

    <h3>Em vez de listar toda regra, usamos exemplos para ajustar um modelo</h3>
    <p>Volte ao gato e cachorro. Podemos reunir muitas imagens já identificadas e utilizar um algoritmo de aprendizado para ajustar parâmetros que capturem padrões úteis à tarefa.</p>
    <div class="definition-box featured"><span class="term">Machine Learning — Aprendizado de Máquina</span><p>É uma área da IA em que sistemas constroem modelos a partir de dados para realizar tarefas sem depender de uma regra manual específica para cada situação possível.</p></div>
    <div class="representation-flow" aria-label="Treinamento e inferência"><div><strong>Dados + exemplos</strong></div><span class="flow-arrow">→</span><div><strong>Treinamento</strong><span>ajusta parâmetros</span></div><span class="flow-arrow">→</span><div><strong>Modelo</strong><span>padrões aprendidos</span></div><span class="flow-arrow">→</span><div><strong>Nova entrada</strong></div></div>

    <h3>O que exatamente sai do treinamento?</h3>
    <p>Não é simplesmente uma pasta contendo todas as respostas. O processo ajusta uma representação matemática capaz de produzir saídas para novas entradas.</p>
    <div class="definition-box"><span class="term">Modelo</span><p>É uma representação matemática parametrizada construída ou ajustada a partir de dados e usada para produzir previsões, classificações ou outras saídas.</p></div>
    <div class="comparison-grid"><article><strong>Treinamento</strong><p>Processo que ajusta parâmetros do modelo com base em dados e num objetivo.</p></article><article><strong>Inferência</strong><p>Uso do modelo já treinado para produzir uma saída diante de novos dados.</p></article></div>
    <p>Conversar com um modelo pronto é principalmente <strong>inferência</strong>; isso não significa que cada frase digitada esteja reescrevendo instantaneamente todos os parâmetros fundamentais do modelo.</p>

    <h3>Dados ruins podem ensinar o padrão errado</h3>
    <p>Imagine um milhão de registros, mas metade duplicada, vários rótulos errados e quase nenhum exemplo do mundo real em que o sistema será usado. “Tem muitos dados” não significa “tem bons dados”.</p>
    <div class="two-col"><div class="definition-box"><span class="term">Dataset</span><p>É um conjunto organizado de dados utilizado em desenvolvimento, treinamento ou avaliação.</p></div><div class="definition-box"><span class="term">Rótulo — label</span><p>É uma resposta conhecida associada ao exemplo em tarefas supervisionadas, como <code>spam</code> ou <code>não spam</code>.</p></div></div>
    <div class="note-box compact"><strong>Representatividade importa.</strong><p>Se os dados não representam adequadamente as situações reais de uso, um modelo pode funcionar muito bem no laboratório e mal no mundo.</p></div>

    <h3>Que tipo de resposta queremos?</h3>
    <p>Alguns problemas pedem uma categoria; outros pedem um número; outros procuram estrutura sem possuir respostas previamente marcadas.</p>
    <div class="comparison-grid three"><article><strong>Classificação</strong><p>Escolhe categorias, como fraude/legítimo ou gato/cachorro.</p></article><article><strong>Regressão</strong><p>Estima um valor numérico, como preço ou demanda.</p></article><article><strong>Agrupamento</strong><p>Procura grupos ou estruturas semelhantes em dados sem rótulo prévio para cada exemplo.</p></article></div>

    <h3>Um modelo pode decorar o treino e falhar na prova</h3>
    <p>Se avaliarmos o modelo apenas nas mesmas imagens usadas para ajustá-lo, ele pode parecer excelente. O verdadeiro teste é funcionar em exemplos novos.</p>
    <div class="definition-box featured"><span class="term">Generalização</span><p>É a capacidade de produzir resultados úteis em novos dados compatíveis com o problema aprendido.</p></div>
    <div class="definition-box"><span class="term">Overfitting — sobreajuste</span><p>Ocorre quando o modelo se adapta excessivamente aos dados de treinamento e não generaliza bem para novos casos.</p></div>
    <p>Por isso projetos costumam separar dados para <strong>treinamento, validação e teste</strong>, conforme a metodologia escolhida.</p>

    <h3>“95% de acerto” pode esconder o problema</h3>
    <p>Imagine uma doença rara presente em apenas 1% das pessoas. Um modelo que sempre responde “não tem” acertaria 99% das vezes — e seria inútil para localizar doentes.</p>
    <div class="definition-box"><span class="term">Métrica</span><p>É uma medida usada para avaliar o comportamento do modelo. Acurácia, precisão e recall são exemplos; a escolha depende do impacto dos tipos de erro.</p></div>
    <p><strong>Uma porcentagem isolada não conta toda a história.</strong></p>

    <h3>Dados históricos não são automaticamente neutros</h3>
    <p>Se decisões passadas continham práticas injustas, um dataset construído a partir delas pode refletir esses padrões. Um modelo matemático não se torna neutro só porque utiliza números.</p>
    <div class="definition-box"><span class="term">Viés</span><p>Em IA, vieses podem surgir da coleta, seleção e rotulagem dos dados, do modelo, das métricas, das decisões de projeto e do contexto de uso.</p></div>
    <div class="note-box compact"><strong>Correlação não prova causa.</strong><p>Um modelo pode descobrir associações úteis sem demonstrar que uma variável causa a outra. Isso é especialmente importante em decisões de alto impacto.</p></div>

    <h3>Redes neurais e Deep Learning: reconheça a família</h3>
    <p>Algumas técnicas modernas usam muitos parâmetros organizados em camadas para aprender representações complexas.</p>
    <div class="definition-box"><span class="term">Rede neural artificial</span><p>É um modelo computacional composto por unidades e conexões organizadas em camadas, cujos parâmetros podem ser ajustados durante treinamento.</p></div>
    <div class="definition-box compact"><span class="term">Deep Learning</span><p>É uma área de Machine Learning baseada em redes neurais com múltiplas camadas de representação.</p></div>
    <div class="concept-flow"><div><strong>IA</strong></div><span class="flow-arrow">→</span><div><strong>Machine Learning</strong></div><span class="flow-arrow">→</span><div><strong>Deep Learning</strong></div></div>
    <div class="note-box compact"><strong>Rede neural artificial não é um cérebro digital.</strong><p>O nome possui inspiração histórica em sistemas biológicos, mas a analogia tem limites importantes.</p></div>

    <h3>E quando o modelo produz conteúdo novo?</h3>
    <p>Classificar uma imagem é diferente de pedir “escreva uma explicação”, “gere uma imagem” ou “complete este código”. Aqui surge a IA generativa.</p>
    <div class="definition-box featured"><span class="term">IA generativa</span><p>É o uso de modelos capazes de gerar novos conteúdos — como texto, imagem, áudio ou código — a partir de padrões aprendidos e do contexto fornecido.</p></div>
    <p>Isso não significa procurar uma resposta pronta numa tabela. O modelo utiliza seus parâmetros e a entrada atual para construir uma nova saída.</p>

    <h3>Um modelo de linguagem trabalha com unidades menores que “ideias prontas”</h3>
    <div class="definition-box"><span class="term">LLM — Large Language Model</span><p>É um modelo de linguagem de grande escala, com grande quantidade de parâmetros, treinado para representar padrões e relações em sequências linguísticas.</p></div>
    <div class="definition-box compact"><span class="term">Token</span><p>É uma unidade de texto usada pelo modelo. Dependendo do tokenizador, pode corresponder a uma palavra, parte dela, pontuação ou outro fragmento.</p></div>
    <p>Em muitos LLMs autoregressivos, uma forma inicial de compreender a geração é:</p>
    <div class="concept-flow"><div><strong>Contexto</strong><span>tokens já presentes</span></div><span class="flow-arrow">→</span><div><strong>Modelo</strong><span>estima próximos tokens</span></div><span class="flow-arrow">→</span><div><strong>Sequência</strong><span>resposta cresce</span></div></div>
    <p>A operação parece simples quando descrita assim, mas o cálculo utiliza uma representação aprendida muito complexa.</p>

    <h3>Por que uma resposta bonita pode estar errada?</h3>
    <p>Um modelo de linguagem é treinado para produzir sequências plausíveis. Plausibilidade linguística e verdade factual não são a mesma propriedade.</p>
    <div class="definition-box featured"><span class="term">Alucinação</span><p>É o termo usado quando um sistema generativo produz conteúdo incorreto, inexistente ou sem sustentação adequada como se fosse uma resposta válida.</p></div>
    <div class="danger-box compact"><strong>Fluência não é evidência.</strong><p>Uma referência inventada pode estar escrita no formato perfeito. Uma explicação elegante pode conter uma data falsa. Em tarefas importantes, verifique fatos e fontes.</p></div>

    <h3>Ferramentas e recuperação de informação mudam a conversa</h3>
    <p>Se perguntamos a temperatura atual, um modelo treinado anteriormente não precisa “saber” a condição de agora. Ele pode chamar uma API, consultar uma base ou recuperar documentos e então produzir a resposta.</p>
    <div class="definition-box"><span class="term">RAG — Retrieval-Augmented Generation</span><p>É uma abordagem em que informação relevante é recuperada de fontes externas e fornecida ao modelo para apoiar a geração da resposta.</p></div>
    <p>Ferramentas e RAG podem melhorar fundamentação e atualidade, mas não eliminam a necessidade de avaliar a saída.</p>

    <h3>IA, automação e regra explícita não são sinônimos</h3>
    <div class="example-box"><strong>Automação por regra</strong><p><code>se temperatura &gt; 30: ligar ventilador</code></p></div>
    <p>Isso pode ser perfeitamente útil e automático sem usar Machine Learning. Um modelo que estima risco de superaquecimento a partir de muitos sinais seria outra abordagem.</p>
    <div class="note-box compact"><strong>Muitos <code>if</code> não viram Machine Learning por quantidade.</strong><p>A diferença central está em o comportamento ser especificado principalmente por regras explícitas ou ajustado a partir de dados.</p></div>

    <h3>Quanto maior o impacto, maior o rigor</h3>
    <p>Uma recomendação de música errada é inconveniente. Uma decisão sobre saúde, crédito, segurança ou direito pode afetar profundamente uma pessoa.</p>
    <div class="mbb-pause-question"><strong>Antes de confiar numa saída de IA, pergunte:</strong><p>Qual é o risco do erro? De onde vieram os dados? Há fonte verificável? Dados pessoais podem ser enviados? Existe supervisão adequada? Quem responde pela decisão final?</p></div>
    <p>Questões de privacidade, segurança, direitos de uso, vieses e impacto não desaparecem porque uma resposta foi produzida por um modelo.</p>

    <h3>A IA ainda depende de toda a informática que veio antes</h3>
    <p>Treinamento e inferência acontecem em hardware físico dentro de computadores e datacenters, usando memória, armazenamento, redes, APIs e software. O campo pode parecer novo, mas continua apoiado nas mesmas camadas fundamentais.</p>
    <div class="representation-flow" aria-label="IA como parte do sistema"><div><strong>Dados</strong></div><span class="flow-arrow">→</span><div><strong>Treinamento</strong></div><span class="flow-arrow">→</span><div><strong>Modelo</strong></div><span class="flow-arrow">→</span><div><strong>Inferência</strong></div></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Você separa capacidade de aparência de inteligência?</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Treinamento ajusta o modelo; inferência utiliza o modelo em novos dados."><p>Qual distinção está correta?</p><label><input type="radio" name="q19a" value="a"> Inferência cria obrigatoriamente todo o dataset.</label><label><input type="radio" name="q19a" value="b"> Treinamento e inferência são sinônimos.</label><label><input type="radio" name="q19a" value="c"> Treinamento ajusta o modelo; inferência usa o modelo.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Excelente desempenho nos dados de treinamento pode coexistir com sobreajuste e desempenho ruim em novos casos."><p>Um modelo acertou 100% dos exemplos usados para treiná-lo. Podemos concluir que funcionará perfeitamente no mundo real?</p><label><input type="radio" name="q19b" value="a"> Não. Precisamos avaliar generalização em dados adequados e novos.</label><label><input type="radio" name="q19b" value="b"> Sim, treinamento perfeito garante tudo.</label><label><input type="radio" name="q19b" value="c"> Sim, se tiver muitos parâmetros.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Modelos generativos podem produzir conteúdo fluente e incorreto; verificação continua necessária."><p>Uma IA respondeu com texto elegante e uma referência detalhada. Isso prova que a referência existe?</p><label><input type="radio" name="q19c" value="a"> Sim, estilo formal prova verdade.</label><label><input type="radio" name="q19c" value="b"> Não. A referência precisa ser verificada.</label><label><input type="radio" name="q19c" value="c"> Sim, se a resposta for longa.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Na programação tradicional, muitas regras são especificadas diretamente. Em <strong>Machine Learning</strong>, dados e algoritmos ajustam um <strong>modelo</strong>; treinamento constrói ou ajusta, inferência utiliza. Modelos precisam generalizar e podem sofrer sobreajuste, viés e erros. IA generativa produz novos conteúdos, mas <strong>fluência não garante verdade</strong>. Conhecimento do domínio e verificação continuam fundamentais.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Depois de tantas camadas, uma frase como “a Internet não funciona” pode esconder dezenas de causas. Como investigar sem sair formatando, trocando peças e alterando configurações ao acaso?</p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener">NIST — AI Risk Management Framework</a></li>
      <li><a href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" target="_blank" rel="noopener">NIST AI 600-1 — Generative AI Profile</a></li>
    </ul></details>
  `
});
