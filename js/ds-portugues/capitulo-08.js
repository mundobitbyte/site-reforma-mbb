(() => {
  'use strict';

  const MBB = window.MBBPortugues = window.MBBPortugues || {};

  function showChapter() {
    const choice = MBB.choice;
    MBB.showLesson({
      unit:'Produzir textos',
      technical:'planejamento • síntese • resumo • esquema • paráfrase • textualização • retextualização • revisão • edição • norma-padrão',
      title:'08 — Produção, resumo e retextualização',
      objective:'<strong>Objetivo:</strong> planejar, produzir, resumir, transformar e revisar textos de acordo com gênero, público, finalidade e meio de circulação, preservando informações essenciais e autoria responsável.',
      html:`
        <div class="pt-opening hero-box">
          <span class="lesson-kicker">Situação real</span>
          <strong class="card-title">A mesma informação precisa virar três textos diferentes.</strong>
          <p>A escola informa que a feira de projetos ocorrerá na sexta-feira, das 14h às 18h, no pátio, com entrada gratuita. Sua equipe precisa transformar essa informação em <strong>um aviso formal no site, uma mensagem curta para o grupo da turma e um roteiro de 20 segundos para anúncio oral</strong>.</p>
          <p>Os fatos principais continuam os mesmos, mas <strong>gênero, público, extensão, organização e linguagem mudam</strong>.</p>
          <p class="central-question"><strong>Pergunta central:</strong> como transformar um conteúdo sem distorcê-lo — e como saber o que deve permanecer, mudar ou ser retirado?</p>
        </div>

        ${choice('1','Mesmo conteúdo, outro texto','Ao transformar um comunicado escolar em mensagem curta para a turma, o que deve acontecer?',[['a','Copiar o comunicado inteiro e apenas retirar o título'],['b','Preservar as informações essenciais e adaptar linguagem, extensão e organização ao novo contexto'],['c','Mudar dados para deixar a mensagem mais interessante']], 'b','Retextualizar exige manter o núcleo informativo e adaptar a forma ao novo gênero, público e finalidade.','Transformar a forma não autoriza alterar fatos essenciais.')}

        <h3>1. Escrever começa antes da primeira frase</h3>
        <p>Produção textual não é apenas “começar a escrever”. Antes, responda quatro perguntas:</p>
        <div class="four-col">
          <div class="mini-card"><strong>Para quê?</strong><p>Informar, narrar, explicar, argumentar, solicitar, orientar?</p></div>
          <div class="mini-card"><strong>Para quem?</strong><p>Colegas, professores, público geral, instituição, cliente?</p></div>
          <div class="mini-card"><strong>Qual gênero?</strong><p>Resumo, notícia, e-mail, relatório, postagem, roteiro, resenha?</p></div>
          <div class="mini-card"><strong>Onde circula?</strong><p>Site, caderno, formulário, rede social, apresentação, mensagem?</p></div>
        </div>

        <div class="pt-process">
          <span>propósito</span><b>→</b>
          <span>seleção</span><b>→</b>
          <span>organização</span><b>→</b>
          <span>primeira versão</span><b>→</b>
          <span>revisão</span><b>→</b>
          <span>edição</span>
        </div>

        ${choice('2','Planejamento','Você precisa escrever uma reclamação formal para um serviço. Qual decisão deve vir antes de escolher frases “bonitas”?',[['a','Definir o problema, o destinatário e o que você deseja solicitar'],['b','Escolher uma fonte diferente para cada parágrafo'],['c','Usar o maior número possível de palavras difíceis']], 'a','Propósito, destinatário e conteúdo necessário orientam as escolhas de linguagem e organização.','Forma eficiente nasce da situação de comunicação, não do enfeite.')}

        <h3>2. Esquema, síntese e resumo não são a mesma coisa</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Esquema</strong><p>Organiza relações por tópicos, setas, palavras-chave ou hierarquia. Ajuda a enxergar a estrutura.</p></div>
          <div class="mini-card"><strong>Resumo</strong><p>Condensa um texto maior, preservando ideias essenciais e relações importantes sem reproduzir tudo.</p></div>
          <div class="mini-card"><strong>Síntese</strong><p>Pode reunir e reorganizar ideias de um ou mais materiais para responder a uma questão ou construir uma visão integrada.</p></div>
        </div>

        <div class="text-box">
          <strong class="card-title">Exemplo: informação de origem</strong>
          <p>“A biblioteca ficará fechada na quarta-feira para atualização do sistema de empréstimos e reabrirá normalmente às 8h de quinta-feira.”</p>
          <p><strong>Esquema:</strong> quarta → fechada → atualização do sistema | quinta, 8h → reabertura.</p>
          <p><strong>Resumo:</strong> A biblioteca fecha na quarta para atualizar o sistema e reabre quinta às 8h.</p>
        </div>

        ${choice('3','Resumo de verdade','Qual versão caracteriza melhor um resumo?',[['a','Uma cópia quase integral com algumas palavras retiradas'],['b','Uma versão menor que preserva as ideias essenciais e suas relações'],['c','Uma opinião pessoal sobre o assunto']], 'b','Resumir exige compreender, selecionar e reorganizar, não simplesmente cortar frases.','Um resumo pode ser muito menor sem perder o núcleo necessário para entender o conteúdo.')}

        <h3>3. Paráfrase não é trocar palavras por sinônimos</h3>
        <p>Parafrasear significa <strong>reformular uma ideia mantendo seu sentido e reconhecendo sua origem quando ela vem de outra fonte</strong>. Trocar duas ou três palavras e conservar a estrutura da frase pode continuar sendo cópia disfarçada.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Troca superficial</strong><p>Original: “A leitura frequente amplia o repertório linguístico.”<br>Versão: “A leitura constante aumenta o repertório de linguagem.”</p><p><small>A estrutura quase não mudou.</small></p></div>
          <div class="mini-card"><strong>Reformulação</strong><p>“Ler com regularidade expõe o leitor a novas formas de organização e uso da língua, ampliando os recursos que ele reconhece e pode mobilizar.”</p><p><small>A ideia foi reconstruída, não apenas maquiada.</small></p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Autoria responsável</strong>
          <p>Parafrasear não apaga a autoria da ideia. Em trabalhos de pesquisa, a fonte continua precisando ser indicada quando a informação, interpretação ou argumento veio de outro autor.</p>
        </div>

        ${choice('4','Paráfrase e autoria','Você leu uma explicação em um artigo e a reescreveu completamente com suas palavras. Em um trabalho escolar, o que fazer?',[['a','Não citar, porque as palavras agora são suas'],['b','Indicar a fonte da ideia mesmo usando uma paráfrase'],['c','Colocar aspas como se fosse citação literal']], 'b','A formulação é sua, mas a origem intelectual da ideia precisa continuar rastreável.','Citação literal e paráfrase são formas diferentes de incorporar uma fonte.')}

        <h3>4. Textualizar é transformar organização em texto</h3>
        <p>Depois de levantar ideias, dados e argumentos, você precisa construir uma sequência compreensível. Isso envolve <strong>hierarquia, conexão e progressão</strong>.</p>

        <div class="source-box">
          <strong class="card-title">Do esquema ao parágrafo</strong>
          <p><strong>Esquema:</strong> problema → laboratório lotado | causa → poucos horários | efeito → grupos sem acesso | proposta → reserva on-line + horários extras.</p>
          <p><strong>Textualização possível:</strong> “O laboratório tem ficado lotado porque os horários disponíveis são insuficientes para todas as turmas. Como consequência, alguns grupos não conseguem utilizá-lo no período de que precisam. Uma alternativa seria combinar um sistema de reserva on-line com a abertura de horários extras.”</p>
        </div>

        <p>Conectivos como <em>porque, portanto, porém, além disso, por exemplo</em> ajudam a explicitar relações, mas não resolvem um texto cujas ideias estejam desorganizadas.</p>

        <h3>5. Retextualização: mudar o gênero sem perder o núcleo</h3>
        <p><strong>Retextualizar</strong> é transformar um texto ou conjunto de informações em outro gênero ou modalidade. Isso pode ocorrer entre escrita e oralidade, texto longo e postagem, entrevista e notícia, relatório e apresentação.</p>

        <div class="three-col">
          <div class="mini-card"><strong>O que tende a permanecer</strong><p>Fatos necessários, relações de causa/tempo, dados indispensáveis e sentido central.</p></div>
          <div class="mini-card"><strong>O que pode mudar</strong><p>Extensão, vocabulário, ordem, nível de formalidade, recursos visuais e explicações.</p></div>
          <div class="mini-card"><strong>O que exige cuidado</strong><p>Não transformar hipótese em certeza, opinião em fato nem retirar contexto que altera o sentido.</p></div>
        </div>

        ${choice('5','Retextualização','Uma entrevista de dez minutos será transformada em notícia curta. O redator deve:',[['a','Escolher apenas uma frase chamativa e ignorar o restante'],['b','Selecionar informações relevantes, preservar o contexto necessário e deixar claro o que foi dito pelo entrevistado'],['c','Completar falas com ideias que o entrevistado provavelmente teria']], 'b','Retextualizar envolve seleção e reorganização, mas não autoriza atribuir ao entrevistado o que ele não disse.','Mudança de gênero exige fidelidade responsável ao conteúdo de origem.')}

        <h3>6. Escrita publicada é resultado de processo</h3>
        <p>Um manuscrito ajuda a lembrar que o texto que chega ao leitor é resultado de decisões de composição, revisão, edição e circulação. A página abaixo pertence a um fac-símile de manuscrito de Machado de Assis preservado pela Biblioteca Nacional.</p>

        <figure class="pt-figure">
          <img src="https://objdigital.bn.br/objdigital2/acervo_digital/div_iconografia/icon1208230/icon1208230_6/icon1208230_6.jpg" alt="Fac-símile de página manuscrita por Machado de Assis para capítulo de Memórias Póstumas de Brás Cubas">
          <figcaption>
            <strong>Antes do livro, existe o processo de escrita.</strong>
            <span>A página manuscrita de Machado de Assis é uma evidência material de uma etapa da produção textual. Manuscrito, edição impressa, versão digital e adaptação não são o mesmo objeto, ainda que possam transmitir a mesma obra.</span>
            <small>Machado de Assis, capítulo “A moeda de Vespasiano”, fac-símile de manuscrito de <em>Memórias Póstumas de Brás Cubas</em>. Fundação Biblioteca Nacional/BNDigital. <a href="https://bdlb.bn.gov.br/acervo/handle/20.500.12156.3/272383" target="_blank" rel="noopener">Consultar registro no acervo</a>.</small>
          </figcaption>
        </figure>

        <h3>7. Revisar conteúdo não é o mesmo que caçar erros</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Revisão de conteúdo e estrutura</strong><p>O objetivo está claro? Falta informação? Há repetição? As ideias avançam? Algum parágrafo contradiz outro? O gênero está adequado?</p></div>
          <div class="mini-card"><strong>Edição linguística</strong><p>Frases estão claras? Concordância e regência funcionam? Pontuação ajuda a leitura? Há ambiguidades? O nível de formalidade combina com o contexto?</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Morfossintaxe em uso</strong>
          <p>Na revisão, observe como palavras e grupos de palavras se relacionam dentro da frase. Concordância, posição de termos, pronomes, verbos e conectivos afetam clareza e sentido. A pergunta útil não é apenas “qual regra decorar?”, mas <strong>“esta construção comunica com clareza e atende ao gênero e à norma esperada neste contexto?”</strong></p>
        </div>

        <div class="text-box">
          <strong class="card-title">Exemplo de revisão</strong>
          <p><strong>Primeira versão:</strong> “Os alunos que participou da oficina, eles entregou os projetos ontem, porém faltou duas fichas.”</p>
          <p><strong>Versão revisada para contexto formal:</strong> “Os alunos que participaram da oficina entregaram os projetos ontem; porém, faltaram duas fichas.”</p>
          <p>A revisão ajusta concordância e organização sem precisar ridicularizar a variedade de fala de quem escreveu a primeira versão.</p>
        </div>

        ${choice('6','Revisar de verdade','Depois de terminar um relatório, qual sequência tende a produzir uma revisão melhor?',[['a','Corrigir vírgulas primeiro e nunca reler o conteúdo'],['b','Rever objetivo, informações e organização; depois ajustar clareza, norma e apresentação'],['c','Trocar palavras simples por palavras difíceis']], 'b','Problemas de conteúdo e estrutura são mais fundamentais; depois vêm os ajustes linguísticos e de apresentação.','Revisão é mais ampla do que correção ortográfica.')}

        <h3>8. Aplicação: um conteúdo, quatro versões</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência</strong>
          <p>Informação de origem: <strong>“Na próxima terça-feira, a escola fará manutenção na rede. A internet ficará indisponível das 9h às 11h. Atividades que dependem de conexão deverão ser reorganizadas.”</strong></p>
          <ol>
            <li>Crie um <strong>esquema</strong> com as informações essenciais.</li>
            <li>Produza um <strong>resumo em uma frase</strong>.</li>
            <li>Retextualize para uma <strong>mensagem de grupo de turma</strong>.</li>
            <li>Retextualize para um <strong>comunicado formal no site da escola</strong>.</li>
            <li>Escreva um <strong>roteiro oral de até 20 segundos</strong>.</li>
            <li>Compare as quatro versões: o que permaneceu? O que mudou? Por quê?</li>
            <li>Revise a versão formal observando clareza, concordância, pontuação e adequação.</li>
          </ol>
          <details><summary>O que caracteriza uma boa resposta?</summary><p>As versões preservam data, motivo, horário e consequência, mas adaptam extensão, vocabulário, organização e grau de formalidade ao público e ao meio. Nenhuma delas inventa fatos.</p></details>
        </div>

        <section class="chapter-checkpoint">
          <h3>Checkpoint MbB</h3>
          <div class="two-col">
            <div class="mini-card"><strong>Eu entendi</strong><p>Resumir, sintetizar, parafrasear, textualizar e retextualizar são operações diferentes e exigem compreensão do conteúdo.</p></div>
            <div class="mini-card"><strong>Eu consigo aplicar</strong><p>Posso planejar um texto, selecionar o essencial, adaptar para outro gênero e revisar conteúdo, estrutura e linguagem antes de publicar.</p></div>
          </div>
        </section>

        <details class="curriculum-box">
          <summary>Alinhamento curricular</summary>
          <p><strong>Plano de Curso 1062 — 1ª série.</strong> Objetos mobilizados: procedimentos de estudo; sínteses, resumos e esquemas; textualização e retextualização; morfossintaxe; usos da norma-padrão; planejamento, produção e edição de textos escritos e multissemióticos; produção de gêneros de narrar, relatar, expor, argumentar e descrever em diferentes plataformas. Habilidades articuladas: EM13LP01, EM13LP12, EM13LP28 e EM13LP32A.</p>
        </details>
      `
    });
  }

  MBB.enableChapter?.('08 ', showChapter);
})();
