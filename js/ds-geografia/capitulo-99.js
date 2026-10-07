(() => {
  'use strict';

  const MBB = window.MBBGeografia = window.MBBGeografia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'evidências • mapas • imagens • dados • escalas • relações espaciais • agentes • hipóteses • decisões • síntese territorial',
      title:'Você consegue explicar um território usando evidências?',
      objective:'<strong>Objetivo:</strong> integrar os conceitos e procedimentos dos capítulos 01–10 para observar, localizar, comparar, explicar relações espaciais, identificar agentes e interesses, distinguir evidência de hipótese e construir uma interpretação territorial sustentada por mapas, imagens, dados e observação direta.',
      html:`
        <section class="geo-opening">
          <span class="lesson-kicker">Exercícios e desafios</span>
          <div class="hero-box">
            <strong class="card-title">Aqui não basta lembrar uma definição</strong>
            <p>Nos capítulos anteriores você observou paisagens, mapas, imagens de satélite, dados populacionais, redes, infraestrutura, cadeias produtivas, riscos e decisões ambientais. Agora o desafio é <strong>juntar essas pistas</strong>.</p>
            <p>Uma boa resposta geográfica não começa com “eu acho”. Ela começa perguntando: <strong>o que a evidência mostra, onde isso acontece, em que escala, quais relações podem explicar o padrão e o que ainda não sabemos?</strong></p>
            <p class="central-question"><strong>Pergunta central:</strong> você consegue construir uma explicação territorial sem confundir observação, interpretação, hipótese e opinião?</p>
          </div>
        </section>

        <div class="note-box"><strong>Como usar este capítulo.</strong><p>Faça primeiro as questões sem voltar aos capítulos. Depois, quando errar ou ficar em dúvida, retorne à evidência original e revise o raciocínio. O objetivo não é decorar respostas, mas aprender a justificar.</p></div>

        <h3>1. Ler paisagem sem inventar história</h3>
        <p>Retome mentalmente a comparação da <strong>Avenida Paulista no início do século XX e no presente</strong>, usada no capítulo 01.</p>

        ${choice('1','Paisagem como evidência','Duas fotografias do mesmo lugar, produzidas em épocas diferentes, mostram mudanças intensas na ocupação e nas construções. Qual conclusão é mais cuidadosa?',[['a','As imagens provam sozinhas todos os motivos econômicos e políticos de cada mudança'],['b','As imagens evidenciam transformação da paisagem; explicar causas exige relacioná-las a outras fontes e processos'],['c','Se o nome do lugar permaneceu, o espaço geográfico não mudou']],'b','Correto. A fotografia permite observar mudanças visíveis; causas e agentes precisam ser investigados com outras evidências.','Separe o que está visível da explicação sobre por que a mudança aconteceu.')}

        <h3>2. Mapa não é fotografia neutra do território</h3>
        <p>Um mapa temático destaca determinados dados, usa símbolos e depende de escala, legenda, projeção, fonte e recorte.</p>

        ${choice('2','Cartografia crítica','Dois mapas do mesmo município podem parecer muito diferentes sem que um deles esteja necessariamente errado. Por quê?',[['a','Porque podem selecionar variáveis, escalas, classificações e formas de representação diferentes'],['b','Porque mapas nunca usam dados'],['c','Porque toda projeção elimina qualquer possibilidade de localização']],'a','Isso. Um mapa é uma representação construída para responder a perguntas específicas.','Compare título, fonte, legenda, escala, data e método antes de comparar os padrões.')}

        <h3>3. Transformação não significa o mesmo efeito para todos</h3>
        <p>No capítulo 03, o reservatório de Porto Primavera foi analisado como transformação territorial que alterou água, vegetação, circulação e usos do espaço.</p>

        ${choice('3','Sociedade e natureza','Uma grande obra produz energia e melhora determinada infraestrutura regional, mas também inunda áreas e altera modos de vida locais. Qual interpretação é mais completa?',[['a','A obra é apenas positiva porque gera energia'],['b','A obra é apenas negativa porque transforma a natureza'],['c','É preciso analisar benefícios, impactos, escalas, grupos afetados e alternativas, porque os resultados são distribuídos de forma desigual']],'c','Correto. Transformações territoriais produzem efeitos diferentes conforme lugar, escala e grupo social.','Evite substituir análise por um rótulo de “bom” ou “ruim”.')}

        <h3>4. Circular não é sempre migrar</h3>
        <p>Uma estudante mora no município A e cruza diariamente a divisa para estudar no município B, retornando à residência no fim do dia.</p>

        ${choice('4','Fluxos de pessoas','Como esse movimento deve ser classificado?',[['a','Migração internacional'],['b','Deslocamento pendular'],['c','Mudança definitiva de residência']],'b','Isso. Há circulação frequente entre municípios sem mudança da residência habitual.','Migração envolve mudança de residência; deslocamento pendular é recorrente e mantém a residência.')}

        <h3>5. Distância não é a mesma coisa que acesso</h3>
        <p>Duas pessoas moram a 4 km de uma unidade de saúde. A primeira possui linha direta de ônibus e calçadas contínuas; a segunda precisa fazer duas baldeações e atravessar trechos sem acessibilidade.</p>

        ${choice('5','Acesso à cidade','O que esse caso demonstra?',[['a','A mesma distância geométrica pode corresponder a níveis muito diferentes de acessibilidade'],['b','Quem mora mais perto em quilômetros sempre chega mais rápido'],['c','Infraestrutura e mobilidade não fazem parte da análise geográfica']],'a','Correto. Tempo, custo, conectividade, segurança e acessibilidade alteram o acesso efetivo.','Não use distância em quilômetros como única medida de acesso.')}

        <h3>6. Seguir o resíduo depois da lixeira</h3>
        <p>Uma escola instala recipientes separados para recicláveis, mas o município recolhe todo o conteúdo no mesmo caminhão e envia a mesma mistura diretamente para disposição final.</p>

        ${choice('6','Rede dos resíduos','Qual é o principal problema do raciocínio “a escola já recicla porque tem lixeiras separadas”?',[['a','A separação inicial precisa estar conectada a coleta, transporte, triagem e recuperação compatíveis'],['b','Reciclagem ocorre automaticamente dentro da lixeira'],['c','Todo material descartado é rejeito']],'a','Isso. A lixeira é apenas um ponto da rede; o destino depende das etapas seguintes.','Siga o fluxo completo depois que o material sai do ponto de geração.')}

        <h3>7. Produto pronto esconde uma cadeia territorial</h3>
        <p>Uma lata de milho reúne pelo menos uma cadeia agrícola, uma cadeia industrial ligada ao metal, energia, embalagem, transporte, distribuição e comércio.</p>

        ${choice('7','Cadeia produtiva','Qual procedimento ajuda mais a explicar geograficamente esse produto?',[['a','Identificar origem das matérias-primas, etapas de transformação, rotas, nós logísticos, agentes, mercados e impactos'],['b','Olhar apenas o preço no supermercado'],['c','Considerar que todo o processo ocorre no mesmo município']],'a','Correto. Cadeias produtivas conectam lugares e agentes diferentes por fluxos de materiais, energia, trabalho, informação e capital.','Reconstrua os elos e localize onde eles acontecem.')}

        <h3>8. Ameaça não é desastre</h3>
        <p>Dois bairros recebem chuva intensa. Um possui drenagem adequada, baixa exposição e alerta eficiente; o outro tem alta impermeabilização, ocupação em área suscetível e pouca capacidade de resposta.</p>

        ${choice('8','Risco de desastre','Por que os impactos podem ser muito diferentes?',[['a','Porque desastre depende apenas da quantidade de chuva'],['b','Porque o risco resulta da relação entre ameaça, exposição, vulnerabilidade e capacidade'],['c','Porque risco é uma característica fixa de quem mora no bairro']],'b','Isso. O mesmo tipo de ameaça pode produzir consequências diferentes conforme a organização do território e as capacidades existentes.','Não transforme fenômeno natural em explicação única do desastre.')}

        <h3>9. Fluxos globais também dependem de lugares concretos</h3>
        <p>Um bloqueio em um canal estratégico ou uma falha em um cabo submarino pode afetar redes localizadas a milhares de quilômetros.</p>

        ${choice('9','Globalização','Qual interpretação é mais adequada?',[['a','A globalização eliminou a importância da localização'],['b','Redes globais dependem de infraestruturas, nós e corredores específicos, portanto alguns lugares concentram poder e vulnerabilidade'],['c','Fluxos digitais não dependem de infraestrutura física']],'b','Correto. Conectividade global aumenta a importância estratégica de certos nós, rotas e infraestruturas.','Procure onde a rede se concentra e o que acontece quando um nó falha.')}

        <h3>10. Decisão ambiental precisa ser acompanhada</h3>
        <p>Uma área degradada recebe um projeto de restauração. Dois anos depois, a superfície está verde, mas quase toda a cobertura é formada por uma única espécie exótica e o solo continua erodindo.</p>

        ${choice('10','Governança e restauração','Qual conclusão é mais consistente?',[['a','A cor verde prova que a restauração foi bem-sucedida'],['b','É necessário avaliar objetivos e indicadores ecológicos; aparência verde sozinha não comprova recuperação das funções do ecossistema'],['c','Depois de iniciar uma política ambiental, monitoramento não é mais necessário']],'b','Isso. Restaurar exige objetivos, indicadores e acompanhamento, e decisões precisam poder ser revistas.','Pergunte quais funções deveriam ter sido recuperadas e quais indicadores mostram isso.')}

        <h3>11. Evidência, interpretação ou hipótese?</h3>
        <div class="concept-box">
          <div class="three-col">
            <div class="mini-card"><strong>Evidência</strong><p>O dado, mapa, imagem, documento ou observação que pode ser verificado.</p></div>
            <div class="mini-card"><strong>Interpretação</strong><p>Relação construída entre evidências e conceitos para explicar um padrão.</p></div>
            <div class="mini-card"><strong>Hipótese</strong><p>Explicação possível que ainda precisa ser testada com novas evidências.</p></div>
          </div>
        </div>

        ${choice('11','Raciocínio geográfico','Uma imagem mostra aumento de área construída junto a um córrego. Um aluno afirma: “isso ocorreu porque a população de baixa renda foi obrigada a ocupar o local”. Como classificar essa frase sem outras fontes?',[['a','Evidência diretamente visível na imagem'],['b','Hipótese que pode ser relevante, mas precisa de dados sociais, históricos e territoriais para ser sustentada'],['c','Coordenada geográfica']],'b','Correto. A imagem mostra mudança espacial; atribuir causa social específica exige outras evidências.','Não transforme uma explicação possível em fato comprovado.')}

        ${choice('12','Correlação não basta','Um município ampliou áreas verdes no mesmo período em que a temperatura média de alguns bairros diminuiu. O que seria necessário antes de afirmar que uma ação causou a outra?',[['a','Analisar localização, série temporal, método de medição, outras variáveis e mecanismos plausíveis'],['b','Apenas escolher o gráfico mais bonito'],['c','Nenhum dado adicional, porque eventos simultâneos provam causalidade']],'a','Isso. Coincidência temporal ou correlação espacial não demonstram causalidade sozinhas.','Teste mecanismos e explicações alternativas antes de afirmar causa.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafios de análise</span>
          <h3>12. Agora responda sem alternativas</h3>

          <div class="challenge-box">
            <strong class="card-title">Desafio A — Uma avenida mudou. Explique sem cair no “antes era melhor”</strong>
            <p>Escolha uma avenida, praça ou rua que possua fotografias de épocas diferentes. Compare pelo menos duas evidências e produza uma explicação contendo:</p>
            <ul>
              <li>três mudanças observáveis na paisagem;</li>
              <li>uma permanência;</li>
              <li>dois agentes que podem ter participado da transformação;</li>
              <li>uma hipótese causal;</li>
              <li>uma fonte adicional necessária para testar essa hipótese.</li>
            </ul>
            <details><summary>Critério de qualidade</summary><p>Não confunda “o que vejo” com “por que aconteceu”. A resposta forte separa observação, interpretação e hipótese.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio B — O mapa mais convincente pode ser o mais enganoso</strong>
            <p>Encontre dois mapas sobre o mesmo tema ou território. Compare título, data, fonte, escala, legenda, unidade de medida e classificação. Depois responda: <strong>qual decisão errada alguém poderia tomar se ignorasse essas diferenças?</strong></p>
            <details><summary>Critério de qualidade</summary><p>A resposta deve mostrar que mapas selecionam e organizam informações; não basta dizer que “um está certo e o outro errado”.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio C — Um produto, três escalas</strong>
            <p>Escolha um alimento, combustível, aparelho eletrônico ou objeto de uso cotidiano. Reconstrua pelo menos quatro elos de sua cadeia produtiva e explique o produto em três escalas:</p>
            <ul>
              <li><strong>local:</strong> onde ele chega até você e que infraestrutura usa;</li>
              <li><strong>regional/nacional:</strong> onde pode ser produzido, transformado ou distribuído;</li>
              <li><strong>global:</strong> que matéria-prima, tecnologia, mercado ou rota internacional pode participar da cadeia.</li>
            </ul>
            <details><summary>Critério de qualidade</summary><p>Use pelo menos duas evidências verificáveis e indique explicitamente o que permanece como hipótese.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio D — Decidir sob risco e incerteza</strong>
            <p>Uma prefeitura possui recursos para executar apenas uma intervenção neste ano: melhorar a drenagem de uma área com alagamentos frequentes, estabilizar uma encosta ocupada ou recuperar mata ciliar degradada junto a um rio.</p>
            <p>Você não deve escolher imediatamente. Primeiro liste <strong>quais dados são necessários</strong> para comparar risco, população exposta, urgência, custo, efeitos ambientais e capacidade de redução de danos. Só depois apresente uma prioridade provisória.</p>
            <details><summary>Critério de qualidade</summary><p>A resposta forte justifica a decisão e mostra que prioridade pública depende de evidências, não apenas da opção que parece mais visível.</p></details>
          </div>
        </section>

        <h3>13. Observatório do lugar onde vivo — síntese final</h3>
        <div class="field-box">
          <strong class="card-title">Volte ao mesmo lugar escolhido no capítulo 01</strong>
          <p>Agora você possui dez lentes para reler esse território. Monte uma síntese final com <strong>um mapa ou croqui, uma fotografia própria ou imagem pública adequada e pelo menos um dado verificável</strong>.</p>
          <div class="two-col">
            <div class="mini-card"><strong>Localize e descreva</strong><p>Onde fica? Que paisagem aparece? Que elementos naturais e sociais se relacionam?</p></div>
            <div class="mini-card"><strong>Identifique fluxos</strong><p>Que pessoas, mercadorias, resíduos, água, veículos, informações ou serviços entram, saem ou atravessam o lugar?</p></div>
            <div class="mini-card"><strong>Explique desigualdades e riscos</strong><p>Quem acessa o lugar com facilidade? Que barreiras existem? Há exposição a alguma ameaça ou problema ambiental?</p></div>
            <div class="mini-card"><strong>Proponha uma decisão</strong><p>O que deveria ser mantido, transformado, protegido, restaurado ou monitorado? Quem precisaria participar da decisão?</p></div>
          </div>
          <div class="note-box"><strong>Regra de segurança e privacidade.</strong><p>Não registre endereço residencial, rostos identificáveis sem autorização, placas de veículos ou informações pessoais. Trabalhe com o território, não com a exposição de pessoas.</p></div>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafio final da 1ª série</span>
          <div class="challenge-box">
            <strong class="card-title">Explique um território usando evidências</strong>
            <p>Produza uma explicação curta do lugar observado, como se você tivesse de convencer alguém que nunca esteve ali. Sua resposta precisa conter:</p>
            <ul>
              <li><strong>1 pergunta geográfica</strong> clara;</li>
              <li><strong>3 evidências diferentes</strong> — por exemplo mapa, imagem, dado ou observação de campo;</li>
              <li><strong>2 escalas</strong> relacionadas;</li>
              <li><strong>2 agentes</strong> que atuam ou tomam decisões no território;</li>
              <li><strong>1 relação sociedade–natureza</strong>;</li>
              <li><strong>1 fluxo ou rede</strong>;</li>
              <li><strong>1 desigualdade, risco ou conflito</strong>;</li>
              <li><strong>1 decisão possível</strong> e quem deveria participar dela;</li>
              <li><strong>1 incerteza</strong> ou dado que ainda falta.</li>
            </ul>
            <details>
              <summary>Checklist de uma explicação geográfica forte</summary>
              <p><strong>Localiza.</strong> Diz onde e em que escala ocorre.</p>
              <p><strong>Compara.</strong> Não interpreta um dado isolado quando existe contexto possível.</p>
              <p><strong>Relaciona.</strong> Liga processos naturais, sociais, econômicos, técnicos e políticos.</p>
              <p><strong>Usa evidências.</strong> Diferencia o que foi observado do que está sendo inferido.</p>
              <p><strong>Identifica agentes.</strong> Mostra que o espaço é produzido por decisões e relações de poder.</p>
              <p><strong>Reconhece limites.</strong> Diz o que ainda não pode ser concluído.</p>
            </details>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Como este capítulo fecha o Plano 1064</summary>
          <p>Os exercícios retomam espaço geográfico, paisagem, lugar, território, cartografia, sociedade–natureza, migrações e redes, cidade e desigualdade, produção e resíduos, cadeias produtivas, riscos, mudanças climáticas, globalização, sustentabilidade e governança. O foco final é aplicar conceitos e procedimentos para interpretar situações territoriais reais usando evidências e diferentes escalas.</p>
        </details>

        <div class="ok-box"><strong>Essência da 1ª série:</strong> Geografia não é decorar nomes de lugares. É aprender a localizar, observar padrões, comparar escalas, seguir fluxos, relacionar sociedade e natureza, identificar agentes e interesses, avaliar riscos e construir explicações sustentadas por evidências — sabendo também reconhecer quando os dados ainda não permitem concluir.</div>
      `
    });
  }

  MBB.enableChapter?.('99 Exercícios', showChapter);
})();
