(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Para a feira de ciências da escola, seu grupo recebe uma tarefa: avaliar uma manchete que afirma que um planeta fora do Sistema Solar “poderia ter condições para a vida”.</strong>
        <p>O professor entrega uma ficha de um <strong>planeta hipotético</strong>: ele orbita uma estrela, recebe energia dela, pode ter temperaturas compatíveis com água líquida em parte da superfície e talvez possua atmosfera. A pergunta da equipe é simples, mas exige cuidado: <strong>isso basta para concluir que existe vida lá?</strong></p>
        <div class="quick-question" data-choice-question data-correct="c"><strong>Antes de continuar, faça uma aposta</strong><p>Se um planeta estiver numa região onde água líquida poderia existir, podemos afirmar que ele é habitado?</p><div class="choice-row"><button type="button" data-choice="a">Sim, água líquida prova que existe vida</button><button type="button" data-choice="b">Sim, desde que ele tenha tamanho parecido com o da Terra</button><button type="button" data-choice="c">Não. Isso pode indicar uma condição favorável, mas não prova a existência de vida</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Habitabilidade e existência de vida são perguntas diferentes." data-wrong-text="Separe duas ideias: condições que poderiam permitir vida e evidência de que a vida realmente existe."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> construir critérios para avaliar condições de habitabilidade sem transformar possibilidade em certeza, e aprender a distinguir observação, modelo e conclusão.</p>
      </div>
    </section>

    <section>
      <h3>1. “Poderia ter vida” não significa “tem vida”</h3>
      <p>Na investigação científica, uma condição favorável não é o mesmo que uma confirmação. Um planeta pode apresentar algumas características compatíveis com a vida como a conhecemos e ainda assim não possuir organismos.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Habitável</strong><p>Significa que certas condições físicas e químicas podem ser compatíveis com algum tipo de vida considerado no modelo.</p></div><div class="example-box"><strong class="card-title">Habitado</strong><p>Significa que existe vida. Essa afirmação exige evidências específicas; não pode ser concluída apenas pela posição do planeta ou por sua temperatura estimada.</p></div></div>
      <div class="note-box"><strong>Resposta à pergunta do início</strong><p>Estar numa região potencialmente favorável à água líquida é apenas <strong>uma pista</strong>. Não é prova de vida.</p></div>
    </section>

    <section>
      <h3>2. Quais condições favorecem a vida como a conhecemos?</h3>
      <p>A vida terrestre depende de interações entre matéria e energia. Por isso, ao procurar ambientes potencialmente habitáveis, investigamos um conjunto de condições, não uma única característica.</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">Água líquida</strong><p>É um solvente importante para processos biológicos conhecidos, mas sua presença depende de temperatura, pressão e composição do ambiente.</p></div><div class="example-box"><strong class="card-title">Fonte de energia</strong><p>A vida precisa de energia para manter processos e organização. Essa energia pode vir da radiação de uma estrela ou de processos químicos, entre outras possibilidades.</p></div><div class="example-box"><strong class="card-title">Matéria disponível</strong><p>Elementos químicos e moléculas adequadas precisam estar disponíveis para formar estruturas e sustentar reações.</p></div></div>
      <p>Também importam estabilidade ambiental, atmosfera, radiação, pressão e a duração das condições favoráveis. Além disso, a própria Terra mostra que organismos podem viver em ambientes extremos; por isso não devemos reduzir a vida a um único “padrão confortável”.</p>
    </section>

    <section>
      <h3>3. A distância da estrela ajuda, mas não decide tudo</h3>
      <p>Do capítulo anterior sabemos que a órbita depende da interação gravitacional e que a distância ao corpo central influencia o movimento. Agora essa distância também importa porque afeta a quantidade de energia que o planeta recebe de sua estrela.</p>
      <p>Chamamos de <strong>zona habitável</strong>, em um modelo simplificado, a faixa de distâncias em que poderia ser possível manter água líquida na superfície de um planeta com condições atmosféricas adequadas.</p>
      <div class="visual-box"><strong class="card-title">Uma faixa ao redor da estrela, não uma garantia</strong><svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Diagrama simplificado de uma estrela cercada por uma faixa anular potencialmente habitável, com um planeta muito perto, um planeta dentro da faixa e um planeta muito longe"><circle cx="180" cy="150" r="120" fill="none" stroke="#7aa56f" stroke-width="42" opacity="0.35"/><circle cx="180" cy="150" r="99" fill="none" stroke="#6f8f67" stroke-width="2" stroke-dasharray="7 6"/><circle cx="180" cy="150" r="141" fill="none" stroke="#6f8f67" stroke-width="2" stroke-dasharray="7 6"/><circle cx="180" cy="150" r="42" fill="#f6c453"/><text x="153" y="156" class="visual-note">estrela</text><circle cx="238" cy="150" r="14" fill="#b42318"/><text x="205" y="190" class="visual-note">muito perto</text><circle cx="300" cy="150" r="14" fill="#1967d2"/><text x="275" y="190" class="visual-note">na faixa</text><circle cx="515" cy="150" r="14" fill="#6f7782"/><text x="482" y="190" class="visual-note">muito longe</text><text x="315" y="58" class="visual-note">faixa potencialmente habitável</text><line x1="360" y1="66" x2="300" y2="103" stroke="#6f8f67" stroke-width="2"/></svg><p class="visual-caption">A faixa verde representa apenas um intervalo aproximado de distâncias ao redor da estrela. Estar nela não confirma água líquida nem vida: atmosfera, pressão, composição e outros fatores continuam necessários.</p></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Evite a conclusão apressada</strong><p>Um planeta está na zona habitável de sua estrela. Qual é a conclusão mais adequada?</p><div class="choice-row"><button type="button" data-choice="a">Ele certamente possui oceanos e seres vivos</button><button type="button" data-choice="b">A posição orbital pode favorecer certas condições, mas precisamos de muito mais informação</button><button type="button" data-choice="c">A gravidade deixou de atuar nele</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A distância ajuda a construir a hipótese, não encerra a investigação." data-wrong-text="Zona habitável é uma condição do modelo, não uma confirmação de oceanos ou vida."></div></div>
    </section>

    <section>
      <h3>4. Temperatura sozinha também não resolve: pressão e atmosfera mudam o cenário</h3>
      <p>A água não permanece líquida apenas por causa de um número de temperatura. A <strong>pressão</strong> também interfere no estado físico, e a atmosfera pode modificar fortemente a temperatura da superfície ao absorver, emitir e redistribuir energia.</p>
      <p>Dois planetas que recebem quantidades semelhantes de energia de suas estrelas podem apresentar condições superficiais muito diferentes se tiverem atmosferas distintas.</p>
      <div class="note-box"><strong>Por que não basta dizer “a temperatura é 20 °C”?</strong><p>Porque uma estimativa de temperatura precisa vir acompanhada das condições em que ela vale. Pressão, atmosfera, distribuição de energia e variações entre regiões e horários podem mudar completamente a interpretação.</p></div>
    </section>

    <section>
      <h3>5. Gravidade e massa do planeta também entram na investigação</h3>
      <p>Um planeta com massa diferente da Terra pode ter uma gravidade superficial diferente. Isso influencia a capacidade de reter gases, a estrutura da atmosfera e as condições físicas na superfície.</p>
      <p>Não existe uma regra simples do tipo “mais gravidade = mais vida” ou “menos gravidade = menos vida”. A gravidade é apenas uma das variáveis que precisa ser analisada junto com as demais.</p>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Qual raciocínio é mais científico?</strong><p>Ao descobrir que um planeta tem massa parecida com a da Terra, podemos concluir que:</p><div class="choice-row"><button type="button" data-choice="a">ele possui exatamente a mesma atmosfera da Terra</button><button type="button" data-choice="b">ele necessariamente abriga vida</button><button type="button" data-choice="c">essa semelhança é uma informação útil, mas não determina sozinha as demais condições</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Uma variável ajuda a restringir modelos, mas não substitui as outras evidências." data-wrong-text="Evite transformar uma semelhança em equivalência completa."></div></div>
    </section>

    <section>
      <h3>6. Como investigamos um planeta que não podemos visitar?</h3>
      <p>Grande parte do que sabemos sobre objetos distantes vem da <strong>luz</strong> que recebemos. Ao analisar brilho e espectro, cientistas podem inferir propriedades da estrela, do planeta e, em alguns casos, de atmosferas.</p>
      <p>Mas existe uma diferença importante entre <strong>medir um sinal</strong> e <strong>interpretar o que ele significa</strong>. Uma mesma observação pode ter mais de uma explicação possível, e hipóteses precisam ser comparadas com outras evidências.</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">Observação</strong><p>Um telescópio registra determinada variação de brilho ou assinatura espectral.</p></div><div class="example-box"><strong class="card-title">Inferência</strong><p>Modelos relacionam esse sinal a propriedades possíveis, como composição atmosférica ou tamanho.</p></div><div class="example-box"><strong class="card-title">Conclusão</strong><p>Só deve ir até onde as evidências permitem. “Compatível com” é diferente de “provado”.</p></div></div>
    </section>

    <section>
      <h3>7. Laboratório: avalie um planeta hipotético sem transformar o resultado em “detector de vida”</h3>
      <div class="interactive-lab" id="habitabilityLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Condições favoráveis não são prova de vida</h4></div>
        <div class="lab-controls"><label>Temperatura média estimada <strong><span id="planetTempValue">15</span> °C</strong><input id="planetTempRange" type="range" min="-100" max="100" step="5" value="15"></label><label>Pressão atmosférica relativa <strong><span id="planetPressureValue">1,0</span> × Terra</strong><input id="planetPressureRange" type="range" min="0" max="3" step="0.1" value="1"></label><label>Disponibilidade de água <select id="planetWaterSelect"><option value="unknown">Desconhecida</option><option value="possible">Possível</option><option value="evidence">Há evidência de água</option></select></label><label>Fonte de energia estável <select id="planetEnergySelect"><option value="unknown">Desconhecida</option><option value="yes">Provável</option><option value="no">Pouco favorável</option></select></label></div>
        <div class="lab-result" aria-live="polite"><span>Avaliação:</span><strong id="habitabilityStatus">Dados ainda insuficientes</strong></div>
        <p id="habitabilityConclusion">Algumas condições parecem favoráveis, mas faltam informações importantes. Nenhum resultado deste laboratório confirma vida.</p>
        <div class="note-box"><strong>Limite do modelo</strong><p>Este laboratório é apenas uma ferramenta didática para organizar variáveis. Ele <strong>não calcula uma probabilidade real de vida</strong> e não substitui modelos científicos de habitabilidade.</p></div>
      </div>
    </section>

    <section>
      <h3>8. Então, afinal, poderia existir vida em outro mundo?</h3>
      <p>A resposta cientificamente responsável é: <strong>é uma possibilidade que pode ser investigada</strong>. A Física ajuda a avaliar as condições do ambiente, mas condições favoráveis, sozinhas, não demonstram que a vida surgiu ou existe ali.</p>
      <p>Por isso uma boa investigação separa três perguntas:</p>
      <ol class="reason-steps"><li><strong>O ambiente poderia permitir determinados processos?</strong></li><li><strong>Temos evidências observacionais dessas condições?</strong></li><li><strong>Temos alguma evidência específica de atividade biológica?</strong></li></ol>
      <div class="note-box"><strong>Resposta final à manchete da feira</strong><p>Uma manchete que diga “planeta pode ter condições favoráveis à vida” pode ser compatível com evidências limitadas. Transformá-la em “cientistas encontraram vida” seria uma conclusão muito maior do que os dados permitem.</p></div>
    </section>

    <section>
      <h3>9. Atividade de investigação: monte uma ficha de evidências</h3>
      <div class="experiment-box"><strong class="card-title">Do dado à conclusão</strong><p>Escolha um planeta hipotético e monte uma tabela com quatro colunas: <strong>dado observado</strong>, <strong>o que podemos inferir</strong>, <strong>o que ainda não sabemos</strong> e <strong>qual nova observação ajudaria</strong>.</p><ol class="reason-steps"><li>Inclua distância à estrela.</li><li>Inclua uma estimativa de temperatura.</li><li>Inclua uma informação sobre atmosfera ou água.</li><li>Escreva uma conclusão que use expressões como “compatível com”, “sugere” ou “não permite concluir”.</li></ol></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Antes de apresentar a feira</span>
      <h3>10. Você consegue separar possibilidade, evidência e conclusão?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Habitabilidade</strong><p>Um planeta potencialmente habitável é necessariamente habitado?</p><div class="choice-row"><button type="button" data-choice="a">Sim</button><button type="button" data-choice="b">Não</button><button type="button" data-choice="c">Somente se tiver Lua</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Habitabilidade descreve condições possíveis; vida exige evidências próprias." data-wrong-text="Separe condição favorável de confirmação de vida."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Zona habitável</strong><p>Estar na zona habitável significa:</p><div class="choice-row"><button type="button" data-choice="a">ter oceanos confirmados</button><button type="button" data-choice="b">ter vida confirmada</button><button type="button" data-choice="c">estar numa faixa em que certas condições podem favorecer água líquida, dependendo de outros fatores</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. É uma condição do modelo, não uma garantia." data-wrong-text="Atmosfera e pressão continuam importantes."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Energia</strong><p>Por que uma fonte de energia importa para a vida?</p><div class="choice-row"><button type="button" data-choice="a">Porque processos biológicos precisam de energia para manter organização e transformações</button><button type="button" data-choice="b">Porque energia elimina a necessidade de matéria</button><button type="button" data-choice="c">Porque toda energia cria vida automaticamente</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto." data-wrong-text="Energia é necessária, mas não suficiente."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Atmosfera</strong><p>Por que dois planetas à mesma distância de estrelas semelhantes podem ter temperaturas diferentes?</p><div class="choice-row"><button type="button" data-choice="a">Porque distância nunca importa</button><button type="button" data-choice="b">Porque atmosfera, pressão, reflexão e redistribuição de energia podem ser diferentes</button><button type="button" data-choice="c">Porque gravidade desaparece</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A energia recebida é apenas parte do problema térmico." data-wrong-text="Considere como cada planeta absorve e redistribui energia."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Massa</strong><p>Um planeta com massa parecida com a da Terra:</p><div class="choice-row"><button type="button" data-choice="a">tem vida necessariamente</button><button type="button" data-choice="b">tem atmosfera idêntica necessariamente</button><button type="button" data-choice="c">fornece uma pista importante, mas não resolve sozinho a questão da habitabilidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Uma variável não determina o sistema inteiro." data-wrong-text="Evite equivalência automática com a Terra."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>6. Observação</strong><p>Detectar um sinal espectral significa automaticamente conhecer sua causa?</p><div class="choice-row"><button type="button" data-choice="a">Sim, sempre existe uma única interpretação</button><button type="button" data-choice="b">Não. O sinal precisa ser interpretado com modelos e outras evidências</button><button type="button" data-choice="c">Somente se o planeta for grande</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. Observação e interpretação são etapas diferentes." data-wrong-text="Um sinal pode admitir mais de uma explicação."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>7. Manchete</strong><p>Qual título é cientificamente mais cuidadoso quando os dados apenas indicam condições favoráveis?</p><div class="choice-row"><button type="button" data-choice="a">Planeta apresenta condições que podem ser compatíveis com habitabilidade</button><button type="button" data-choice="b">Vida extraterrestre encontrada</button><button type="button" data-choice="c">Novo planeta é uma segunda Terra comprovada</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A frase respeita o limite das evidências." data-wrong-text="Não transforme possibilidade em confirmação."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Método</strong><p>Qual sequência é mais adequada?</p><div class="choice-row"><button type="button" data-choice="a">Conclusão → manchete → procurar dados</button><button type="button" data-choice="b">Escolher a resposta desejada → descartar dados contrários</button><button type="button" data-choice="c">Observar → modelar → comparar hipóteses → concluir apenas o que as evidências permitem</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa sequência mantém evidência e conclusão conectadas." data-wrong-text="A conclusão deve vir depois da análise das evidências."></div></div>
      <div class="challenge-box"><strong>Desafio MbB — responda à manchete</strong><p>Escreva uma resposta de até cinco linhas para alguém que diz: “Se está na zona habitável, então encontraram vida”. Corrija a afirmação sem ridicularizá-la e use pelo menos três critérios físicos discutidos no capítulo.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>Este capítulo usa a pergunta sobre vida fora da Terra como <strong>contextualização integradora</strong> para mobilizar análise de modelos científicos, condições ambientais favoráveis ou limitantes à vida e movimentos no Sistema Solar e no Universo. A ideia de exoplaneta funciona como contexto didático; não constitui, por si só, um objeto de conhecimento adicional do plano.</p></details>
  `;

  function initHabitabilityLab(root){
    const temp=$('#planetTempRange',root),pressure=$('#planetPressureRange',root),water=$('#planetWaterSelect',root),energy=$('#planetEnergySelect',root),status=$('#habitabilityStatus',root),conclusion=$('#habitabilityConclusion',root);
    if(!temp||!pressure||!water||!energy||!status||!conclusion)return;
    const format=(v,d=1)=>Number(v).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
    const draw=()=>{
      const T=Number(temp.value),P=Number(pressure.value),W=water.value,E=energy.value;
      $('#planetTempValue',root).textContent=format(T,0);
      $('#planetPressureValue',root).textContent=format(P,1);
      let favorable=0,unknown=0;
      if(T>=0&&T<=50) favorable+=1; else if(T>-40&&T<80) unknown+=1;
      if(P>=0.3&&P<=2) favorable+=1; else if(P>0) unknown+=1;
      if(W==='evidence') favorable+=1; else if(W==='possible'||W==='unknown') unknown+=1;
      if(E==='yes') favorable+=1; else if(E==='unknown') unknown+=1;
      if(favorable>=3){status.textContent='Várias condições parecem favoráveis'; conclusion.textContent='O conjunto de dados justifica investigar mais, mas não confirma vida. Ainda faltam composição química, estabilidade ambiental e evidências específicas de processos biológicos.';}
      else if(favorable+unknown>=3){status.textContent='Dados ainda insuficientes'; conclusion.textContent='Há condições possíveis ou desconhecidas. A conclusão correta é pedir mais evidências, não preencher as lacunas com suposições.';}
      else{status.textContent='Condições pouco favoráveis neste modelo'; conclusion.textContent='Algumas condições do modelo dificultariam a vida como a conhecemos. Isso também não permite afirmar que toda forma possível de vida seria impossível.';}
    };
    [temp,pressure].forEach(input=>input.addEventListener('input',draw));
    [water,energy].forEach(input=>input.addEventListener('change',draw));
    draw();
  }

  MBB.enableChapter?.('09 Poderia existir vida em outro mundo?',()=>{MBB.showLesson({unit:'Terra e Cosmos',technical:'Modelos científicos • condições ambientais • habitabilidade • evidências',title:'Poderia existir vida em outro mundo?',objective:'<strong>Propósito:</strong> avaliar condições de habitabilidade de um planeta hipotético e aprender a separar possibilidade, evidência e conclusão científica.',html:lessonHtml,init:initHabitabilityLab});});
})();