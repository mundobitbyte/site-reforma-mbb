(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Vida em comum',
      technical:'política • poder • autoridade • legitimidade • justiça • igualdade • direitos • maioria • minoria • pluralismo • tolerância • contrato social • democracia • Estado de Direito',
      title:'Se a maioria decide, a decisão é automaticamente justa?',
      objective:'<strong>Objetivo:</strong> distinguir poder, autoridade, legitimidade e justiça; compreender por que regras coletivas precisam de procedimentos e justificações; analisar maioria, direitos, igualdade e pluralismo sem reduzir democracia a contagem de votos; comparar respostas de Hobbes, Locke, Rousseau e Rawls sem transformar nenhuma corrente em doutrina obrigatória.',
      html:`
        <section class="philo-opening">
          <span class="lesson-kicker">Situação de partida</span>
          <div class="hero-box">
            <strong class="card-title">A maioria venceu. A discussão acabou?</strong>
            <p>Uma escola possui apenas uma sala multiuso livre no intervalo. Um grupo maior quer reservá-la todos os dias para jogos. Um grupo menor precisa do espaço duas vezes por semana para ensaio musical. Em votação simples, a proposta do grupo maior vence por ampla maioria.</p>
            <p>O procedimento foi claro e todos puderam votar. Ainda assim, surge uma pergunta: <strong>o fato de uma decisão ter sido aprovada pela maioria basta para torná-la justa?</strong></p>
            <p class="central-question"><strong>Pergunta central:</strong> como pessoas que discordam podem criar regras comuns sem transformar força, número ou preferência em razão suficiente?</p>
          </div>
        </section>

        <div class="argument-chain">
          <span>problema comum</span><b>→</b><span>quem decide?</span><b>→</b><span>por qual regra?</span><b>→</b><span>quais direitos?</span><b>→</b><span>quem ganha/perde?</span><b>→</b><span>como justificar?</span>
        </div>

        ${choice('1','Maioria e justiça','Uma proposta vence por 70% dos votos. O que podemos concluir apenas com essa informação?',[['a','Que a proposta é necessariamente justa'],['b','Que ela venceu segundo aquela regra de decisão; ainda é preciso analisar direitos, procedimento, informação, impactos e justificações'],['c','Que toda decisão majoritária é ilegítima']],'b','Correto. Maioria é um procedimento importante de decisão, mas não constitui sozinha uma teoria completa de justiça.','Nem aprovação automática nem rejeição automática: primeiro distinguimos procedimento, legitimidade e justiça.')}

        <h3>1. Política começa quando decisões deixam de ser apenas privadas</h3>
        <p>Em sentido amplo, <strong>política</strong> envolve decisões coletivas sobre regras, instituições, recursos, direitos, deveres e formas de exercer poder. Ela aparece no Estado, mas também em conselhos, associações, escolas, empresas e outras organizações.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Poder</strong><p>Capacidade de influenciar comportamentos, decisões ou resultados — pela força, recursos, posição, persuasão ou regras.</p></div>
          <div class="mini-card"><strong>Autoridade</strong><p>Reivindicação reconhecida de poder decidir ou ordenar dentro de determinado âmbito.</p></div>
          <div class="mini-card"><strong>Legitimidade</strong><p>Pergunta se o exercício daquele poder pode ser justificado segundo critérios aceitáveis, e não apenas se consegue ser obedecido.</p></div>
        </div>

        <div class="concept-box"><strong>Poder efetivo não é sinônimo de poder legítimo.</strong><p>Alguém pode conseguir impor uma decisão e ainda assim não ter uma boa justificativa para exercer aquele poder. Filosofia política pergunta justamente <strong>quando a autoridade é justificável</strong>.</p></div>

        <p><a href="https://plato.stanford.edu/entries/legitimacy/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Political Legitimacy</a></p>

        ${choice('2','Força e autoridade','Um grupo controla a entrada de um espaço apenas porque é fisicamente mais forte que os demais. Isso mostra automaticamente autoridade legítima?',[['a','Sim; quem consegue mandar tem direito de mandar'],['b','Não; eficácia e legitimidade são conceitos diferentes'],['c','Sim; poder físico elimina a necessidade de regras']],'b','Isso. Ter poder de fato não resolve a pergunta normativa sobre o direito de exercê-lo.','A filosofia política distingue “conseguir impor” de “ter autoridade justificável”.')}

        <h3>2. Justiça: igualar tudo ou tratar casos relevantes de modo adequado?</h3>
        <p>“Justiça” também não possui uma única definição consensual. Uma primeira distinção útil é perceber que <strong>igualdade</strong> pode significar coisas diferentes.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Igualdade formal</strong><p>A mesma regra vale para pessoas em condições comparáveis, sem privilégios arbitrários.</p></div>
          <div class="mini-card"><strong>Proporcionalidade</strong><p>Algumas distribuições levam em conta diferenças relevantes, como contribuição, responsabilidade ou necessidade específica do caso.</p></div>
          <div class="mini-card"><strong>Imparcialidade</strong><p>O critério não deve ser escolhido apenas para favorecer quem já sabe qual posição ocupará.</p></div>
        </div>

        <div class="note-box"><strong>“Tratar igualmente” não significa sempre “dar exatamente a mesma coisa”.</strong><p>Também não significa que qualquer diferença de tratamento seja justa. A pergunta é: <strong>qual diferença é relevante e por quê?</strong></p></div>

        <h3>3. Um experimento mental: escolha a regra antes de saber seu lugar</h3>
        <p>John Rawls propôs um experimento mental conhecido como <strong>posição original</strong>. Imagine pessoas escolhendo princípios básicos de justiça sem saber previamente qual posição ocuparão na sociedade — sua riqueza, talentos, profissão, religião ou outras circunstâncias particulares.</p>
        <p>A ideia do “véu de ignorância” não descreve um acontecimento histórico. É uma ferramenta de raciocínio para perguntar: <strong>eu aceitaria esta regra se não soubesse de antemão se ela me favoreceria?</strong></p>

        <div class="source-box">
          <strong class="card-title">Um teste de imparcialidade, não uma resposta obrigatória</strong>
          <p>Rawls usa a posição original para defender sua própria teoria de justiça. Outros filósofos discordam de suas conclusões. Aqui, o recurso interessa como exercício filosófico: separar o princípio que podemos justificar da vantagem que sabemos possuir.</p>
          <p><a href="https://plato.stanford.edu/entries/original-position/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia of Philosophy — Original Position</a></p>
        </div>

        ${choice('3','Regra antes da vantagem','Qual pergunta melhor aplica o raciocínio do véu de ignorância à sala multiuso?',[['a','Qual regra me favorece mais, já que sei que meu grupo é maioria?'],['b','Que regra eu consideraria aceitável sem saber se faria parte do grupo maior ou do menor?'],['c','Como impedir qualquer grupo de usar a sala?']],'b','Correto. O experimento tenta reduzir a influência do interesse particular conhecido na escolha do princípio.','A ideia não é eliminar interesses, mas testar se a regra pode ser defendida de forma mais imparcial.')}

        <h3>4. Por que obedecer a regras comuns? Contrato social, respostas diferentes</h3>
        <p>Hobbes, Locke e Rousseau são associados à tradição do <strong>contrato social</strong>, mas chegam a respostas diferentes. Colocá-los lado a lado ajuda a perceber que “contratualismo” não é uma única ideologia.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Hobbes</strong><p>Destaca o problema da insegurança e do conflito. Uma autoridade comum forte aparece como condição para paz e cooperação estável.</p></div>
          <div class="mini-card"><strong>Locke</strong><p>Enfatiza pessoas livres e iguais, direitos e consentimento; o poder político é limitado pelos fins para os quais foi instituído.</p></div>
          <div class="mini-card"><strong>Rousseau</strong><p>Pergunta como reconciliar liberdade e autoridade e desenvolve a ideia de vontade geral e interesse comum, distinta da simples soma de interesses privados.</p></div>
        </div>

        <div class="note-box"><strong>Compare antes de concordar.</strong><p>Hobbes aceita uma soberania muito mais ampla do que Locke; Rousseau critica formas de representação que hoje são comuns nas democracias representativas. Estudar essas posições significa reconstruir seus argumentos e também suas dificuldades.</p></div>

        <p><a href="https://plato.stanford.edu/archives/fall2023/entries/hobbes-moral/" target="_blank" rel="noopener noreferrer">Hobbes</a> •
        <a href="https://plato.stanford.edu/entries/locke-political/" target="_blank" rel="noopener noreferrer">Locke</a> •
        <a href="https://plato.stanford.edu/entries/rousseau/" target="_blank" rel="noopener noreferrer">Rousseau</a></p>

        ${choice('4','Mesmo método, respostas distintas','O que a comparação entre Hobbes, Locke e Rousseau mostra?',[['a','Que todo contrato social leva à mesma forma de governo'],['b','Que filósofos podem partir de problemas parecidos sobre autoridade e chegar a conclusões bastante diferentes'],['c','Que contrato social é um documento histórico assinado por toda população']],'b','Isso. A tradição contratualista contém divergências profundas sobre liberdade, autoridade, direitos e soberania.','O “contrato” é principalmente um recurso filosófico de justificação, não uma ata histórica assinada por todos.')}

        <h3>5. Democracia não é apenas contar votos</h3>
        <p>Votação majoritária é uma ferramenta fundamental para decidir quando não existe unanimidade. Mas democracias constitucionais também incluem <strong>direitos, regras de participação, instituições, limites ao poder, liberdade de expressão, oposição e possibilidade de revisão</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Maioria</strong><p>Permite chegar a uma decisão comum sem exigir unanimidade em tudo.</p></div>
          <div class="mini-card"><strong>Direitos básicos</strong><p>Estabelecem limites sobre o que pode ser retirado de alguém apenas porque perdeu uma votação.</p></div>
          <div class="mini-card"><strong>Procedimento</strong><p>Quem participa? Há informação? As regras eram conhecidas? Existe possibilidade de contestação?</p></div>
          <div class="mini-card"><strong>Revisão</strong><p>Decisões podem ser reavaliadas diante de novos argumentos, fatos, efeitos ou mudanças legítimas nas regras.</p></div>
        </div>

        <div class="concept-box"><strong>O problema das minorias persistentes.</strong><p>Teorias democráticas estudam o risco de um grupo ser derrotado sistematicamente em todas as votações. Isso mostra por que representação, direitos e desenho institucional importam além da contagem numérica.</p></div>

        <p><a href="https://plato.stanford.edu/entries/democracy/" target="_blank" rel="noopener noreferrer">Aprofundamento: Stanford Encyclopedia of Philosophy — Democracy</a></p>

        <h3>6. Uma Constituição transforma desacordo em regras públicas</h3>
        <p>A Constituição brasileira de 1988 define o Brasil como <strong>Estado Democrático de Direito</strong>, inclui entre seus fundamentos o <strong>pluralismo político</strong> e afirma que todo poder emana do povo, exercido por representantes eleitos ou diretamente nos termos constitucionais.</p>

        <figure class="philo-figure">
          <a href="https://www.camara.leg.br/tema/assets/images/foto-historica-26.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://www.camara.leg.br/tema/assets/images/foto-historica-26.jpg" alt="Fotografia em preto e branco de Ulysses Guimarães erguendo um exemplar da Constituição diante do plenário cheio em 1988." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Constituição: uma decisão coletiva vira regra institucional</strong>
            <span>Em 3 de outubro de 1988, Ulysses Guimarães mostrou no plenário o primeiro exemplar da nova Constituição. A fotografia permite ver que uma Constituição não nasce de uma opinião isolada: envolve debate, procedimentos, votação, texto público e instituições encarregadas de aplicá-lo e revisá-lo.</span>
            <small>Foto: Arquivo da Câmara dos Deputados, 03/10/1988. Fonte: Câmara dos Deputados.</small>
          </figcaption>
        </figure>

        <div class="source-box">
          <strong class="card-title">Leia a regra, não um slogan sobre ela</strong>
          <p>O art. 1º da Constituição reúne soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político. O art. 5º estabelece direitos e garantias fundamentais, incluindo igualdade perante a lei e liberdades de pensamento, consciência e crença.</p>
          <p><a href="https://www4.planalto.gov.br/legislacao/legis-federal/constituicao" target="_blank" rel="noopener noreferrer">Fonte oficial: Constituição da República Federativa do Brasil — texto compilado</a></p>
        </div>

        ${choice('5','Pluralismo','O que “pluralismo político” significa de forma filosoficamente cuidadosa?',[['a','Que toda afirmação factual passa a ser igualmente verdadeira'],['b','Que uma sociedade democrática admite diversidade de convicções e projetos políticos dentro das regras constitucionais, sem exigir uma única doutrina oficial'],['c','Que nenhuma regra comum pode existir porque pessoas discordam']],'b','Correto. Pluralismo protege a convivência entre diferenças; não transforma contradições factuais em verdades simultâneas nem elimina o Estado de Direito.','Pluralismo é compatível com regras comuns, direitos e contestação pública.')}

        <h3>7. Participação também produz evidência sobre interesses e conflitos</h3>
        <p>Durante a Assembleia Nacional Constituinte de 1987–1988, houve debates, audiências, emendas parlamentares e também <strong>emendas populares</strong>. Participar não significa que toda proposta será aceita; significa que cidadãos podem apresentar razões, demandas e alternativas dentro de procedimentos públicos.</p>

        <figure class="philo-figure">
          <a href="https://www.camara.leg.br/tema/assets/images/foto-historica-24.jpg" target="_blank" rel="noopener noreferrer">
            <img src="https://www.camara.leg.br/tema/assets/images/foto-historica-24.jpg" alt="Fotografia em preto e branco de Ulysses Guimarães recebendo pilhas de emendas populares durante a Assembleia Nacional Constituinte." loading="lazy" decoding="async">
          </a>
          <figcaption>
            <strong>Pluralismo não é silêncio: diferenças precisam entrar no processo</strong>
            <span>A fotografia mostra Ulysses Guimarães recebendo emendas populares para o texto constitucional. Ela ajuda a separar duas ideias: participar é ter canais para apresentar e contestar propostas; decidir exige transformar essa diversidade em procedimentos e regras comuns.</span>
            <small>Foto: Arquivo da Câmara dos Deputados, Assembleia Nacional Constituinte, 1987–1988. Fonte: Câmara dos Deputados.</small>
          </figcaption>
        </figure>

        <p><a href="https://www.camara.leg.br/historia-e-arquivo/" target="_blank" rel="noopener noreferrer">Fonte e acervo: História e Arquivo da Câmara dos Deputados</a></p>

        <h3>8. Direitos humanos: maioria também encontra limites</h3>
        <p>A Declaração Universal dos Direitos Humanos, adotada pela Assembleia Geral da ONU em 1948, afirma igualdade em dignidade e direitos, liberdade de pensamento, consciência, religião, opinião, expressão, reunião pacífica e participação no governo.</p>
        <p>Isso não quer dizer que todo direito seja ilimitado em qualquer situação. A própria declaração reconhece deveres para com a comunidade e admite limitações determinadas por lei para proteger direitos de outras pessoas e exigências justificáveis de uma sociedade democrática.</p>

        <div class="note-box"><strong>Direitos não são “prêmios” dados à maioria.</strong><p>Uma função importante dos direitos fundamentais é justamente proteger esferas da pessoa e da participação que não devem depender apenas da popularidade momentânea.</p></div>
        <p><a href="https://europe.ohchr.org/universal-declaration-human-rights" target="_blank" rel="noopener noreferrer">OHCHR — Universal Declaration of Human Rights</a></p>

        ${choice('6','Direito e votação','Uma assembleia aprova por 90% que os 10% restantes não podem mais expressar opinião nas próximas reuniões. Qual é o problema principal?',[['a','Nenhum; 90% sempre podem retirar direitos políticos dos demais'],['b','A votação majoritária está sendo usada para eliminar a própria condição de participação e contestação de quem perdeu'],['c','O único problema é que a votação deveria ter 100%']],'b','Isso. Uma democracia que elimina permanentemente a possibilidade de oposição corrói o próprio processo pelo qual decisões podem ser contestadas e revistas.','A maioria decide muitos assuntos; isso não significa poder ilimitado para destruir direitos e procedimentos básicos.')}

        <h3>9. Pluralismo não é relativismo</h3>
        <p>Pessoas podem divergir sobre religião, prioridades públicas, modelos econômicos, valores morais e concepções de vida boa. Uma sociedade plural precisa administrar esse desacordo sem obrigar todos a pensar igual.</p>
        <p>Mas <strong>pluralismo não exige dizer que todas as afirmações factuais têm o mesmo valor</strong>. Se a discussão envolve dados verificáveis, evidências continuam importando. E pluralismo também não obriga uma sociedade a aceitar violência, fraude ou supressão das condições mínimas de convivência democrática como se fossem apenas “mais uma opinião”.</p>

        <div class="source-box">
          <strong class="card-title">Rawls: o problema do pluralismo razoável</strong>
          <p>Rawls parte do fato de que cidadãos livres tendem a sustentar doutrinas religiosas, morais e filosóficas diferentes. Sua pergunta é como justificar regras políticas comuns sem transformar uma dessas doutrinas em crença oficial obrigatória.</p>
          <p><a href="https://plato.stanford.edu/entries/rawls/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia of Philosophy — John Rawls</a></p>
        </div>

        <h3>10. Caderno de investigação — sexta etapa: uma regra para quem discorda de você</h3>
        <div class="field-box">
          <strong class="card-title">Retome a mesma pergunta escolhida no capítulo 01</strong>
          <p>Agora transforme sua questão em um pequeno problema de convivência pública ou institucional. Não precisa envolver partido, eleição ou governo atual.</p>
          <ol>
            <li>Identifique <strong>duas posições diferentes</strong> sobre o problema.</li>
            <li>Escreva qual regra ou decisão cada posição defenderia.</li>
            <li>Indique um direito, dever ou interesse legítimo de cada lado.</li>
            <li>Proponha um <strong>procedimento de decisão</strong>: quem participa, como apresenta razões e como se decide.</li>
            <li>Teste sua regra perguntando: <strong>eu a aceitaria se estivesse na posição que perde?</strong></li>
            <li>Registre uma condição em que a decisão deveria ser revista.</li>
          </ol>
          <p><strong>Regra MbB:</strong> você não precisa abandonar sua opinião. Precisa demonstrar que consegue formular uma regra que continue defensável quando aplicada a quem discorda de você.</p>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio final — A sala multiuso</strong>
          <p>A escola precisa aprovar uma regra para uma sala disputada por quatro grupos: esporte, música, estudo silencioso e robótica. O espaço não comporta todos ao mesmo tempo.</p>
          <p><strong>Sua tarefa:</strong> escreva uma decisão de 8 a 12 linhas que:</p>
          <ol>
            <li>defina um procedimento para ouvir os quatro grupos;</li>
            <li>explique por que apenas “quem tem mais votos fica com tudo” pode ser insuficiente;</li>
            <li>use pelo menos <strong>dois critérios de justiça</strong>;</li>
            <li>proteja a possibilidade de o grupo derrotado continuar participando;</li>
            <li>indique quando a regra será reavaliada;</li>
            <li>apresente uma objeção à sua própria solução e responda a ela.</li>
          </ol>
          <div class="concept-box"><strong>Uma resposta forte não precisa agradar a todos.</strong><p>Ela precisa mostrar procedimento claro, critérios consistentes, respeito às posições afetadas, possibilidade de revisão e razões que não dependam apenas de “meu grupo ganhou”.</p></div>
        </div>

        <div class="chapter-checkpoint">
          <strong class="card-title">Essência do capítulo</strong>
          <p><strong>Poder</strong> é diferente de legitimidade. <strong>Legitimidade</strong> é diferente de justiça. <strong>Maioria</strong> é um procedimento importante, mas não elimina direitos nem resolve sozinha todos os conflitos. <strong>Pluralismo</strong> permite divergência sem transformar verdade factual em preferência. Filosofia política começa quando perguntamos não apenas <em>quem venceu</em>, mas <strong>que regra pode ser justificada também a quem perdeu</strong>.</p>
        </div>
      `,
      init: root => MBB.initChoiceQuestions(root)
    });
  }

  MBB.enableChapter?.('06 Justiça, política e pluralismo', showChapter);
})();
