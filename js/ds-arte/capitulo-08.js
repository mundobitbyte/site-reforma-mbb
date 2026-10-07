(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  const heritageCases = {
    building:{
      title:'Conjunto urbano histórico',
      type:'Patrimônio material',
      evidence:'edificações, ruas, fachadas, traçado urbano, documentos, usos do espaço e transformações ao longo do tempo',
      care:'conservar sem apagar a vida cotidiana, pesquisar alterações, garantir uso responsável e envolver quem vive no território'
    },
    music:{
      title:'Forma de expressão musical e corporal',
      type:'Patrimônio imaterial',
      evidence:'músicas, passos, instrumentos, modos de aprender, festas, histórias de praticantes e formas atuais de transmissão',
      care:'fortalecer condições para que praticantes criem, ensinem e transmitam a manifestação, sem congelá-la como peça de museu'
    },
    craft:{
      title:'Saber e modo de fazer',
      type:'Patrimônio imaterial',
      evidence:'materiais, técnicas, vocabulário, etapas, relações de aprendizagem, mestres, aprendizes e contextos de uso',
      care:'valorizar os detentores do saber, apoiar transmissão, acesso a materiais, reconhecimento e continuidade do ofício'
    },
    archive:{
      title:'Acervo de fotografias e documentos',
      type:'Patrimônio material móvel / documental',
      evidence:'fotografias, negativos, papéis, legendas, autoria, datação, procedência e condições de conservação',
      care:'identificar, acondicionar, digitalizar quando adequado, contextualizar e preservar o original'
    }
  };

  function updateHeritageLens(root) {
    const select = $('#heritageCase', root);
    const out = $('#heritageLensOutput', root);
    if (!select || !out) return;
    const item = heritageCases[select.value] || heritageCases.building;
    out.innerHTML = `
      <strong>${item.title}</strong>
      <p><strong>Natureza:</strong> ${item.type}.</p>
      <p><strong>Que evidências observar?</strong> ${item.evidence}.</p>
      <p><strong>Preservar pode significar:</strong> ${item.care}.</p>
    `;
  }

  function updateSafeguardLab(root) {
    const threat = $('#heritageThreat', root);
    const action = $('#heritageAction', root);
    const out = $('#safeguardOutput', root);
    if (!threat || !action || !out) return;

    const threats = {
      neglect:'abandono físico e falta de manutenção',
      loss:'redução da transmissão entre gerações',
      tourism:'turismo que transforma a manifestação apenas em espetáculo para visitantes',
      stereotype:'divulgação que reduz uma cultura a estereótipos',
      displacement:'afastamento das comunidades que mantêm a prática ou o lugar vivo'
    };
    const actions = {
      restore:'restaurar ou conservar objetos e espaços com pesquisa e acompanhamento técnico',
      teach:'apoiar mestres, grupos, oficinas e formas comunitárias de transmissão',
      document:'registrar histórias, técnicas, imagens e depoimentos com contexto e autorização',
      participate:'construir decisões com participação de detentores, moradores e grupos envolvidos',
      advertise:'fazer uma campanha turística rápida sem consultar quem mantém o bem cultural'
    };

    const goodMatch = action.value !== 'advertise';
    out.innerHTML = `
      <strong>Seu plano de salvaguarda</strong>
      <p><strong>Risco observado:</strong> ${threats[threat.value]}.</p>
      <p><strong>Ação escolhida:</strong> ${actions[action.value]}.</p>
      <p>${goodMatch ? '<strong>Boa direção:</strong> agora pergunte se essa ação responde realmente ao risco e se as pessoas ligadas ao patrimônio participam das decisões.' : '<strong>Problema:</strong> divulgação pode até aumentar visibilidade, mas sem participação e contexto pode reforçar estereótipos ou transformar pessoas em cenário.'}</p>
    `;
  }

  function updateIdentityMap(root) {
    const source = $('#identitySource', root);
    const change = $('#identityChange', root);
    const out = $('#identityMapOutput', root);
    if (!source || !change || !out) return;

    const sources = {
      family:'memórias e práticas familiares',
      neighborhood:'lugares, sons, festas e histórias do bairro',
      music:'músicas e cenas culturais com as quais você convive',
      digital:'comunidades, linguagens e repertórios digitais',
      school:'experiências, grupos e projetos da escola'
    };
    const changes = {
      keep:'algo que permanece e cria continuidade',
      mix:'algo que se mistura com novas referências',
      dispute:'algo sobre o qual existem opiniões ou memórias diferentes',
      rediscover:'algo que voltou a ganhar importância depois de quase ser esquecido'
    };

    out.innerHTML = `<strong>Mapa de identidade:</strong><p>Você escolheu <strong>${sources[source.value]}</strong> e pensou em <strong>${changes[change.value]}</strong>. Isso mostra que identidade cultural pode envolver continuidade, mudança, mistura, conflito e redescoberta — não uma essência fixa.</p>`;
  }

  function init(root) {
    $('#heritageCase', root)?.addEventListener('change', () => updateHeritageLens(root));
    updateHeritageLens(root);

    ['#heritageThreat','#heritageAction'].forEach(sel => {
      $(sel, root)?.addEventListener('change', () => updateSafeguardLab(root));
    });
    updateSafeguardLab(root);

    ['#identitySource','#identityChange'].forEach(sel => {
      $(sel, root)?.addEventListener('change', () => updateIdentityMap(root));
    });
    updateIdentityMap(root);
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Cultura e memória',
      technical:'identidade cultural • memória • patrimônio material • patrimônio imaterial • referência cultural • tombamento • registro • inventário • salvaguarda • participação social',
      title:'08 — Arte, identidade e patrimônio',
      objective:'<strong>Objetivo:</strong> compreender como arte, memória e práticas culturais participam da construção de identidades e reconhecer patrimônio como escolha social que envolve pesquisa, participação, preservação e continuidade cultural.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão de memória</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” recebeu uma última sala — mas não há nenhuma obra escolhida.</strong>
            <p>A direção pediu que a turma apresente algo que ajude a responder: <strong>“O que merece continuar fazendo parte da memória de uma comunidade?”</strong></p>
            <p>Um grupo quer colocar a fotografia de um prédio antigo. Outro prefere registrar uma festa do bairro. Alguém sugere entrevistar uma pessoa que conhece um modo de fazer tradicional. Outro diz que patrimônio é só aquilo que o governo já reconheceu.</p>
            <p>Quem está certo? Antes de montar essa sala, será preciso entender que patrimônio pode ser <strong>material, imaterial, oficial, comunitário, vivido, disputado e continuamente reinterpretado</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quem decide o que merece ser lembrado — e como preservar sem transformar cultura viva em coisa parada?</p>
          </div>
        </section>

        <div class="art-dimensions" aria-label="Dimensões de cultura e patrimônio">
          <span>memória</span><span>identidade</span><span>referência</span><span>material</span><span>imaterial</span><span>registro</span><span>preservação</span><span>transmissão</span><span>participação</span>
        </div>

        <h3>1. Patrimônio não é sinônimo de coisa velha</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Pelourinho-Salvador.jpg?width=1000" alt="Conjunto arquitetônico do Pelourinho, em Salvador, com fachadas coloridas e igrejas históricas.">
          <div>
            <span class="lesson-kicker">Salvador, Bahia</span>
            <strong class="card-title">Um lugar pode guardar muitas camadas de memória</strong>
            <p>Um conjunto histórico pode reunir arquitetura, ruas, práticas religiosas, comércio, turismo, música, trabalho, moradia e lembranças de diferentes grupos. Preservar não significa fingir que o lugar ficou congelado no passado.</p>
            <p><strong>Observe:</strong> o que nesta imagem é material? E quais práticas humanas, histórias e relações sociais não cabem numa fotografia?</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Pelourinho-Salvador.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença da imagem: Wikimedia Commons • CC BY-SA 4.0</a></p>
          </div>
        </div>

        ${choice('1','Patrimônio e idade','Qual afirmação é mais adequada?',[
          ['a','Tudo o que é antigo é automaticamente patrimônio'],
          ['b','Patrimônio envolve valores, referências culturais, memória e reconhecimento social; idade sozinha não resolve a questão'],
          ['c','Somente edifícios podem ser patrimônio']
        ],'b','Correto. Antiguidade pode ser relevante, mas patrimônio depende de relações de valor, referência, memória e reconhecimento.','Pense menos em “velho ou novo” e mais em “referência para quem, por quê e de que modo”.')}

        <h3>2. Material e imaterial não significam importante e menos importante</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Patrimônio material</strong><p>Edificações, conjuntos urbanos, objetos, acervos, documentos, sítios arqueológicos, obras e outros bens com existência física.</p></div>
          <div class="mini-card"><strong>Patrimônio imaterial</strong><p>Saberes, ofícios, celebrações, formas de expressão, modos de fazer e lugares ligados a práticas culturais coletivas.</p></div>
        </div>
        <div class="source-box"><strong class="card-title">No Brasil</strong><p>A Constituição de 1988 ampliou a compreensão de patrimônio cultural, reconhecendo bens de natureza <strong>material e imaterial</strong>. No âmbito federal, o Iphan utiliza diferentes instrumentos, como tombamento, registro e inventários, conforme a natureza e a finalidade da proteção.</p><p><a href="https://www.gov.br/iphan/pt-br/patrimonio-cultural" target="_blank" rel="noopener noreferrer">Fonte: Iphan — Patrimônio Cultural</a></p></div>

        ${choice('2','Material × imaterial','Qual exemplo é mais claramente patrimônio imaterial?',[
          ['a','Um conjunto de edifícios históricos'],
          ['b','Um modo de fazer transmitido entre mestres e aprendizes'],
          ['c','Uma coleção de fotografias originais guardadas em arquivo']
        ],'b','Isso. O saber e sua transmissão são centrais num patrimônio imaterial.','Edifícios, objetos e documentos são materiais; saberes, práticas e formas de expressão são exemplos típicos de dimensões imateriais.')}

        <h3>3. Frevo: uma prática viva pode ser patrimônio</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Frevo.jpg?width=750" alt="Passista de frevo em Olinda usando sombrinha colorida durante apresentação.">
          <div>
            <span class="lesson-kicker">Recife e Olinda, Pernambuco</span>
            <strong class="card-title">Frevo — música, corpo, poesia e festa</strong>
            <p>O frevo é reconhecido como Patrimônio Cultural do Brasil. Ele não se reduz a um objeto guardado: depende de pessoas tocando, dançando, compondo, ensinando, organizando blocos e recriando a manifestação em novos contextos.</p>
            <p><strong>Preservar, aqui, não é impedir mudança.</strong> É favorecer condições para continuidade, transmissão e criação pelos próprios detentores.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Frevo.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença da imagem: Wikimedia Commons • CC BY 2.0</a></p>
            <p><a href="https://www.gov.br/iphan/pt-br/assuntos/noticias/tambor-de-crioula-frevo-e-oficio-das-paneleiras-de-goiabeiras-sao-revalidados-como-patrimonio-cultural-do-brasil" target="_blank" rel="noopener noreferrer">Fonte patrimonial: Iphan</a></p>
          </div>
        </div>

        ${choice('3','Cultura viva','Qual ação combina melhor com a ideia de salvaguarda de uma manifestação viva?',[
          ['a','Proibir qualquer mudança para que a prática fique idêntica para sempre'],
          ['b','Apoiar transmissão, participação dos praticantes, documentação e condições para continuidade'],
          ['c','Substituir os praticantes por apresentações gravadas']
        ],'b','Correto. Salvaguarda busca continuidade sustentável e envolve os próprios detentores do bem cultural.','Patrimônio imaterial existe porque pessoas mantêm, transformam e transmitem práticas; não porque ele ficou imutável.')}

        <h3>4. Capoeira: corpo, som, memória e resistência</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Capoeira_Salvador_da_bahia%2C_Farol_da_Barra.jpg?width=900" alt="Praticantes de capoeira em Salvador, Bahia, realizando movimentos em espaço aberto.">
          <div>
            <span class="lesson-kicker">Herança afro-brasileira</span>
            <strong class="card-title">Uma roda reúne muitas linguagens</strong>
            <p>Na capoeira se encontram movimento, canto, instrumentos, ritmo, jogo, símbolos, rituais, relações de aprendizagem e memória afro-brasileira. A roda e o ofício dos mestres foram registrados como Patrimônio Cultural do Brasil em 2008.</p>
            <p>Isso ajuda a perceber por que patrimônio pode envolver <strong>arte, identidade, história, resistência e transmissão de valores</strong> ao mesmo tempo.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:Capoeira_Salvador_da_bahia,_Farol_da_Barra.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença da imagem: Wikimedia Commons • CC BY-SA 4.0</a></p>
            <p><a href="https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-imaterial" target="_blank" rel="noopener noreferrer">Fonte patrimonial: Iphan</a></p>
          </div>
        </div>

        <div class="note-box"><strong>Cuidado com uma simplificação frequente.</strong><p>Reconhecer uma manifestação como patrimônio não significa que todas as pessoas daquele grupo fazem exatamente a mesma coisa nem que existe uma versão “pura” e eterna. Cultura é transmitida, mas também é recriada.</p></div>

        <h3>5. Heritage Lens — que tipo de patrimônio estamos observando?</h3>
        <div class="studio-box">
          <strong class="card-title">Lente do patrimônio</strong>
          <p>Escolha um caso. Em vez de decorar classificações, pergunte quais evidências precisam ser investigadas e que tipo de cuidado faria sentido.</p>
          <label class="mini-card"><strong>Caso</strong><select id="heritageCase" style="width:100%;margin-top:8px"><option value="building">Conjunto urbano histórico</option><option value="music">Expressão musical e corporal</option><option value="craft">Saber e modo de fazer</option><option value="archive">Acervo fotográfico</option></select></label>
          <div id="heritageLensOutput" class="source-box" aria-live="polite"></div>
        </div>

        <h3>6. Identidade cultural não é uma etiqueta única</h3>
        <div class="source-box"><strong class="card-title">Você participa de várias redes de pertencimento.</strong><p>Família, bairro, cidade, escola, religião, trabalho, música, esporte, internet, geração, língua, ancestralidade e muitos outros vínculos podem participar de como uma pessoa ou grupo se reconhece. Essas dimensões podem permanecer, mudar, misturar-se e até entrar em tensão.</p></div>
        <div class="studio-box">
          <strong class="card-title">Identity Map</strong>
          <p>Faça um mapa sem expor nada pessoal que você não queira compartilhar.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Fonte de repertório</strong><select id="identitySource" style="width:100%;margin-top:8px"><option value="family">Família</option><option value="neighborhood">Bairro / cidade</option><option value="music">Música e cenas culturais</option><option value="digital">Cultura digital</option><option value="school">Escola</option></select></label>
            <label class="mini-card"><strong>Como ela aparece hoje?</strong><select id="identityChange" style="width:100%;margin-top:8px"><option value="keep">Permanece</option><option value="mix">Mistura-se</option><option value="dispute">É disputada</option><option value="rediscover">Foi redescoberta</option></select></label>
          </div>
          <div id="identityMapOutput" class="choice-feedback" aria-live="polite"></div>
        </div>

        ${choice('4','Identidade','Qual afirmação evita melhor estereótipos?',[
          ['a','Toda pessoa de uma região possui a mesma identidade cultural'],
          ['b','Identidades são construídas por experiências, pertencimentos, memórias e relações que podem ser diversas e mutáveis'],
          ['c','Identidade cultural é definida apenas pela cidade onde alguém nasceu']
        ],'b','Correto. Identidade cultural é relacional, plural e histórica; não uma fórmula automática aplicada a indivíduos.','Evite transformar origem geográfica ou pertencimento a um grupo em previsão sobre como toda pessoa pensa, fala, veste-se ou cria.')}

        <h3>7. Quem escolhe o que vira patrimônio?</h3>
        <div class="three-col">
          <div class="mini-card"><strong>Comunidades e detentores</strong><p>São fundamentais para reconhecer sentidos, histórias, necessidades e formas de continuidade.</p></div>
          <div class="mini-card"><strong>Instituições</strong><p>Podem pesquisar, inventariar, reconhecer, proteger, financiar, conservar e promover políticas públicas.</p></div>
          <div class="mini-card"><strong>Sociedade</strong><p>Debates públicos revelam valores diferentes e lembram que memória coletiva não é neutra nem completa.</p></div>
        </div>
        <div class="note-box"><strong>Patrimônio é também escolha.</strong><p>Durante muito tempo, determinadas narrativas, grupos e tipos de bem receberam mais reconhecimento institucional que outros. Perguntar <strong>“quem foi lembrado, quem ficou de fora e quem participa da decisão?”</strong> faz parte de uma educação patrimonial crítica.</p></div>

        ${choice('5','Decisão patrimonial','Qual processo é mais coerente com uma preservação democrática?',[
          ['a','Uma instituição decide tudo sozinha sem ouvir quem vive ou pratica aquela referência cultural'],
          ['b','Pesquisa, documentação e decisões com participação dos grupos relacionados ao bem cultural'],
          ['c','Escolher apenas aquilo que atrai mais turistas']
        ],'b','Isso. Participação social e diálogo com detentores e comunidades são centrais para compreender valores e construir ações de salvaguarda.','Valor econômico ou turístico pode existir, mas não deve substituir os sentidos culturais atribuídos pelos grupos envolvidos.')}

        <h3>8. Preservar não é fazer sempre a mesma coisa</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Conservação</strong><p>Cuidar fisicamente de objetos, documentos, edifícios e materiais.</p></div>
          <div class="mini-card"><strong>Documentação</strong><p>Registrar informações, histórias, técnicas, imagens, sons e contextos.</p></div>
          <div class="mini-card"><strong>Transmissão</strong><p>Manter condições para que conhecimentos e práticas passem adiante.</p></div>
          <div class="mini-card"><strong>Salvaguarda</strong><p>Conjunto de ações que apoia continuidade e sustentabilidade de bens culturais vivos.</p></div>
        </div>

        <div class="studio-box">
          <strong class="card-title">Safeguard Lab</strong>
          <p>Escolha um risco e uma ação. Depois critique a combinação.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Risco</strong><select id="heritageThreat" style="width:100%;margin-top:8px"><option value="neglect">Abandono físico</option><option value="loss">Perda de transmissão</option><option value="tourism">Turistificação</option><option value="stereotype">Estereótipo</option><option value="displacement">Afastamento da comunidade</option></select></label>
            <label class="mini-card"><strong>Ação</strong><select id="heritageAction" style="width:100%;margin-top:8px"><option value="restore">Conservar / restaurar</option><option value="teach">Apoiar transmissão</option><option value="document">Documentar com contexto</option><option value="participate">Decidir com participação</option><option value="advertise">Fazer propaganda sem consulta</option></select></label>
          </div>
          <div id="safeguardOutput" class="source-box" aria-live="polite"></div>
        </div>

        <h3>9. Inventário afetivo não é inventar história</h3>
        <div class="challenge-box">
          <strong class="card-title">Mini-inventário da escola ou do bairro</strong>
          <p>Escolha uma referência cultural próxima que possa ser investigada sem invadir a privacidade de ninguém: um lugar, prática, evento, objeto, acervo, som, receita, técnica, grupo artístico ou memória compartilhada.</p>
          <ol>
            <li>Descreva <strong>o que é</strong> sem exagerar sua importância.</li>
            <li>Pergunte <strong>para quem</strong> aquilo funciona como referência.</li>
            <li>Registre evidências: fotografia autorizada, desenho, mapa, entrevista, áudio, documento ou observação.</li>
            <li>Separe <strong>observação, memória e interpretação</strong>.</li>
            <li>Descubra o que mudou e o que permaneceu.</li>
            <li>Identifique um risco real, se houver.</li>
            <li>Proponha uma ação possível e explique quem deveria participar da decisão.</li>
          </ol>
        </div>
        <div class="note-box"><strong>Importante.</strong><p>Seu mini-inventário escolar não transforma automaticamente algo em patrimônio oficial. Ele serve para aprender a <strong>observar referências culturais, documentar evidências e compreender vínculos de memória e pertencimento</strong>.</p></div>

        <h3>10. Missão final — a sala da memória</h3>
        <div class="challenge-box">
          <strong class="card-title">Curadoria: “O que queremos levar adiante?”</strong>
          <p>Em grupo, criem uma pequena proposta para a última sala da mostra. Ela deve reunir pelo menos <strong>uma dimensão material e uma imaterial</strong>.</p>
          <ol>
            <li>Escolham uma referência cultural investigável.</li>
            <li>Apresentem uma imagem, desenho, objeto, mapa ou documento contextualizado.</li>
            <li>Incluam voz, som, gesto, relato ou explicação de um saber/prática quando fizer sentido.</li>
            <li>Expliquem quem se relaciona com essa referência e evitem falar “em nome” de grupos sem fonte.</li>
            <li>Mostrem o que permanece e o que mudou.</li>
            <li>Proponham uma forma de preservação ou continuidade.</li>
            <li>Terminem com a pergunta ao visitante: <strong>“O que da sua comunidade merece ser investigado e transmitido — e por quê?”</strong></li>
          </ol>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Patrimônio cultural não é apenas coleção de coisas antigas. Ele envolve bens materiais, saberes, práticas, lugares, memórias e formas de expressão que funcionam como referências para grupos sociais. Preservar exige pesquisa, contexto, participação e escolhas responsáveis — e cultura viva pode continuar existindo justamente porque é transmitida e recriada.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('08 Arte', showChapter);
})();