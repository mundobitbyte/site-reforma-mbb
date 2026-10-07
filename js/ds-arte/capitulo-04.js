(() => {
  'use strict';

  const MBB = window.MBBArte = window.MBBArte || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const choice = MBB.choice;

  function audioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    return AudioCtx ? new AudioCtx() : null;
  }

  function tone(ctx, destination, frequency, start, duration, options = {}) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = options.type || 'sine';
    osc.frequency.setValueAtTime(frequency, start);

    const peak = Math.max(0.015, Math.min(options.volume || 0.13, 0.24));
    const attack = options.attack ?? 0.02;
    const release = options.release ?? 0.06;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(peak, start + attack);
    gain.gain.setValueAtTime(peak, Math.max(start + attack, start + duration - release));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(gain);
    gain.connect(destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }

  function noiseHit(ctx, destination, start, volume = 0.09) {
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.08), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    source.buffer = buffer;
    filter.type = 'highpass';
    filter.frequency.value = 2200;
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.07);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(destination);
    source.start(start);
  }

  function closeLater(ctx, seconds) {
    setTimeout(() => ctx.close?.(), Math.ceil((seconds + .25) * 1000));
  }

  function playPulse(root, mode) {
    const ctx = audioContext();
    const feedback = $('#pulseFeedback', root);
    if (!ctx) {
      if (feedback) feedback.textContent = 'Seu navegador não disponibilizou o recurso de áudio.';
      return;
    }

    const master = ctx.createGain();
    master.gain.value = 0.75;
    master.connect(ctx.destination);
    const now = ctx.currentTime + 0.04;
    const interval = mode === 'fast' ? 0.25 : 0.43;
    const accents = mode === 'rhythm' ? [1,.45,.7,.45,1,.7,.45,.7] : [1,.55,.55,.55,1,.55,.55,.55];

    accents.forEach((accent, i) => {
      tone(ctx, master, i % 4 === 0 ? 440 : 330, now + i * interval, 0.075, {
        type:'triangle', volume:0.11 * accent, attack:0.008, release:0.035
      });
    });

    closeLater(ctx, accents.length * interval + .2);
    if (feedback) {
      feedback.innerHTML = mode === 'rhythm'
        ? '<strong>Ritmo:</strong> o espaçamento e os acentos deixam de ser uniformes. O pulso pode continuar existindo por baixo, mesmo quando o desenho rítmico muda.'
        : `<strong>Pulso ${mode === 'fast' ? 'mais rápido' : 'mais lento'}:</strong> a regularidade continua, mas a velocidade da sequência mudou.`;
    }
  }

  function playTimbre(root, type) {
    const ctx = audioContext();
    const feedback = $('#timbreFeedback', root);
    if (!ctx) return;
    const master = ctx.createGain();
    master.gain.value = 0.7;
    master.connect(ctx.destination);
    const now = ctx.currentTime + 0.04;
    [261.63,329.63,392].forEach((frequency, i) => {
      tone(ctx, master, frequency, now + i * .34, .26, {type,volume:.13,attack:.018,release:.08});
    });
    closeLater(ctx, 1.25);
    if (feedback) {
      const names = {sine:'senoidal',triangle:'triangular',square:'quadrada',sawtooth:'dente de serra'};
      feedback.innerHTML = `<strong>Mesmo desenho de alturas, timbre diferente:</strong> a onda ${names[type] || type} altera a qualidade percebida do som. Em instrumentos reais, o timbre é ainda mais complexo e envolve harmônicos, ataque, ressonância e modo de tocar.`;
    }
  }

  function playArticulation(root, style) {
    const ctx = audioContext();
    const feedback = $('#articulationFeedback', root);
    if (!ctx) return;
    const master = ctx.createGain();
    master.gain.value = 0.72;
    master.connect(ctx.destination);
    const now = ctx.currentTime + .04;
    const notes = [261.63,293.66,329.63,392,329.63,293.66];
    const duration = style === 'staccato' ? .12 : style === 'silence' ? .24 : .34;
    notes.forEach((frequency,i) => {
      const extraGap = style === 'silence' && i >= 3 ? .42 : 0;
      tone(ctx, master, frequency, now + i * .37 + extraGap, duration, {
        type:'triangle', volume: style === 'accent' && i === 3 ? .21 : .11,
        attack: style === 'legato' ? .045 : .008,
        release: style === 'legato' ? .12 : .045
      });
    });
    closeLater(ctx, 3.2);
    if (feedback) {
      const texts = {
        legato:'notas mais longas e conectadas produzem maior continuidade.',
        staccato:'notas curtas criam separação e deixam o ritmo mais evidente.',
        accent:'um único ponto mais forte reorganiza a hierarquia da frase.',
        silence:'uma pausa maior interrompe a expectativa e passa a fazer parte do desenho.'
      };
      feedback.innerHTML = `<strong>O som não mudou apenas nas notas.</strong> ${texts[style]}`;
    }
  }

  function playTexture(root) {
    const ctx = audioContext();
    const feedback = $('#textureFeedback', root);
    if (!ctx) return;
    const master = ctx.createGain();
    master.gain.value = 0.64;
    master.connect(ctx.destination);
    const now = ctx.currentTime + .05;
    const melodyOn = $('#layerMelody', root)?.checked;
    const bassOn = $('#layerBass', root)?.checked;
    const pulseOn = $('#layerPulse', root)?.checked;

    if (bassOn) {
      [130.81,130.81,146.83,130.81].forEach((f,i) => tone(ctx, master, f, now + i*.75, .62, {type:'sine',volume:.11,attack:.03,release:.12}));
    }
    if (melodyOn) {
      [392,440,523.25,440,392,329.63,392,440].forEach((f,i) => tone(ctx, master, f, now + i*.36, .24, {type:'triangle',volume:.095,attack:.015,release:.07}));
    }
    if (pulseOn) {
      for (let i = 0; i < 12; i += 1) noiseHit(ctx, master, now + i*.25, i % 4 === 0 ? .085 : .045);
    }

    closeLater(ctx, 3.4);
    const layers = [melodyOn && 'melodia', bassOn && 'base grave', pulseOn && 'pulso/percussão'].filter(Boolean);
    if (feedback) feedback.innerHTML = layers.length
      ? `<strong>Textura:</strong> você ouviu ${layers.join(' + ')}. Quanto mais camadas independentes entram, mais relações o ouvido precisa acompanhar.`
      : '<strong>Nenhuma camada selecionada.</strong> O silêncio também pode ser uma decisão — mas aqui marque ao menos uma camada para comparar.';
  }

  function playDesigner(root) {
    const ctx = audioContext();
    const feedback = $('#soundDesignerFeedback', root);
    if (!ctx) return;

    const tempo = Number($('#soundTempo', root)?.value || 90);
    const timbre = $('#soundTimbre', root)?.value || 'triangle';
    const density = $('#soundDensity', root)?.value || 'medium';
    const dynamics = $('#soundDynamics', root)?.value || 'steady';
    const interval = 60 / Math.max(55,Math.min(160,tempo));
    const master = ctx.createGain();
    master.gain.value = .68;
    master.connect(ctx.destination);
    const now = ctx.currentTime + .05;
    const motif = density === 'sparse'
      ? [261.63,null,392,null,329.63,null,440,null]
      : density === 'dense'
        ? [261.63,293.66,329.63,392,440,392,329.63,293.66,261.63,329.63,392,440]
        : [261.63,329.63,392,329.63,293.66,392,440,329.63];

    motif.forEach((frequency,i) => {
      if (!frequency) return;
      const volume = dynamics === 'crescendo'
        ? .055 + (i / motif.length) * .11
        : dynamics === 'accent' && (i === 0 || i === Math.floor(motif.length/2)) ? .19 : .105;
      tone(ctx, master, frequency, now + i * interval * .55, interval * .42, {type:timbre,volume,attack:.012,release:.06});
    });
    closeLater(ctx, motif.length * interval * .6 + .3);

    if (feedback) feedback.innerHTML = `<strong>Sua identidade sonora:</strong> ${tempo} bpm, timbre ${timbre}, densidade ${density} e dinâmica ${dynamics}. Agora explique que sensação essas escolhas favorecem — sem tratar essa associação como uma regra universal.`;
  }

  function init(root) {
    $$('[data-pulse]', root).forEach(button => button.addEventListener('click', () => playPulse(root, button.dataset.pulse)));
    $$('[data-timbre]', root).forEach(button => button.addEventListener('click', () => playTimbre(root, button.dataset.timbre)));
    $$('[data-articulation]', root).forEach(button => button.addEventListener('click', () => playArticulation(root, button.dataset.articulation)));
    $('#playTexture', root)?.addEventListener('click', () => playTexture(root));
    $('#playDesigner', root)?.addEventListener('click', () => playDesigner(root));
  }

  function showChapter() {
    MBB.showLesson({
      unit:'Música',
      technical:'som • silêncio • pulso • ritmo • altura • intensidade • duração • timbre • articulação • textura • escuta',
      title:'04 — Som, ritmo, timbre e sentido',
      objective:'<strong>Objetivo:</strong> compreender e experimentar como diferentes parâmetros sonoros e modos de organização constroem identidade, expectativa e sentido, desenvolvendo escuta ativa e pequenas decisões de criação musical.',
      html:`
        <section class="art-opening">
          <span class="lesson-kicker">Missão sonora</span>
          <div class="hero-box">
            <strong class="card-title">A mostra “Isso é arte?” precisa de uma identidade sonora para a entrada.</strong>
            <p>Três alunos tocaram praticamente as mesmas notas. A primeira versão pareceu solene; a segunda, inquieta; a terceira, leve. Ninguém mudou o cartaz e ninguém acrescentou letra. O que mudou foi <strong>a organização do som</strong>.</p>
            <p>Sua equipe precisa criar uma vinheta curta que prepare o visitante para entrar na mostra. Antes de compor, você vai investigar <strong>o que faz o ouvido perceber movimento, peso, expectativa, contraste e pausa</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> se as notas podem ser as mesmas, de onde vem a diferença de sentido?</p>
          </div>
        </section>

        <div class="waveform" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div class="art-dimensions"><span>som</span><span>silêncio</span><span>pulso</span><span>ritmo</span><span>altura</span><span>intensidade</span><span>duração</span><span>timbre</span><span>textura</span></div>

        <h3>1. Escutar não é apenas “ouvir a música”</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Som</strong><p>É vibração percebida pelo sistema auditivo. Em música, importa também como esses sons são escolhidos, organizados e relacionados.</p></div>
          <div class="mini-card"><strong>Silêncio</strong><p>Não é simplesmente “falta de música”. Pausas delimitam frases, criam expectativa, dão espaço e podem se tornar parte expressiva da organização.</p></div>
        </div>
        ${choice('1','Escuta ativa','Qual atitude representa melhor uma escuta musical analítica?',[
          ['a','Tentar perceber relações entre repetição, contraste, intensidade, timbre, duração e silêncio'],
          ['b','Perguntar somente se a música é bonita'],
          ['c','Ouvir apenas a letra e ignorar todos os outros sons']
        ],'a','Isso. Escutar artisticamente envolve perceber relações e tentar explicar seus efeitos.','Gosto pessoal importa, mas a análise também observa como o som foi organizado.')}

        <h3>2. Pulso e ritmo não são a mesma coisa</h3>
        <div class="studio-box">
          <strong class="card-title">Pulse Lab</strong>
          <p>Use fones ou volume confortável. Compare regularidade, velocidade e acentos.</p>
          <div class="choice-row">
            <button type="button" data-pulse="slow">▶ Pulso lento</button>
            <button type="button" data-pulse="fast">▶ Pulso rápido</button>
            <button type="button" data-pulse="rhythm">▶ Desenho rítmico</button>
          </div>
          <div id="pulseFeedback" class="choice-feedback" aria-live="polite">Ouça pelo menos duas versões e compare.</div>
        </div>
        <div class="two-col">
          <div class="mini-card"><strong>Pulso</strong><p>É uma regularidade de referência, como uma sequência de batidas igualmente espaçadas.</p></div>
          <div class="mini-card"><strong>Ritmo</strong><p>É o desenho de durações, ataques, pausas e acentos que acontece no tempo. Pode coincidir com o pulso ou tensioná-lo.</p></div>
        </div>
        ${choice('2','Pulso × ritmo','Se uma música mantém batidas regulares enquanto a melodia usa notas longas, curtas e pausas, o que podemos dizer?',[
          ['a','Pulso e ritmo podem coexistir com organizações diferentes'],
          ['b','O pulso deixa de existir sempre que aparece uma pausa'],
          ['c','Ritmo é apenas a velocidade da música']
        ],'a','Correto. Velocidade é uma dimensão; ritmo envolve organização temporal mais ampla.','Não reduza ritmo a “rápido ou lento”. Observe durações, acentos e pausas.')}

        <h3>3. Timbre: por que a mesma nota não soa igual?</h3>
        <div class="studio-box">
          <strong class="card-title">Timbre Lab</strong>
          <p>A sequência de alturas será a mesma. Troque apenas uma simplificação da forma de onda e perceba a qualidade sonora.</p>
          <div class="choice-row">
            <button type="button" data-timbre="sine">▶ Senoidal</button>
            <button type="button" data-timbre="triangle">▶ Triangular</button>
            <button type="button" data-timbre="square">▶ Quadrada</button>
            <button type="button" data-timbre="sawtooth">▶ Dente de serra</button>
          </div>
          <div id="timbreFeedback" class="choice-feedback" aria-live="polite">Compare ao menos duas versões.</div>
        </div>
        <div class="source-box"><strong class="card-title">Modelo, não definição completa</strong><p>O laboratório usa ondas eletrônicas simples para tornar a diferença audível. <strong>Timbre real é mais complexo</strong>: envolve espectro de harmônicos, ataque, ressonância, material do instrumento, técnica de execução, ambiente e outros fatores.</p></div>

        <h3>4. A partitura não é a música</h3>
        <div class="visual-prompt">
          <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/BeethovenSinfonia5autografo.jpg?width=950" alt="Primeira página manuscrita da Quinta Sinfonia de Beethoven, cheia de notas, pautas, marcações e correções feitas à mão.">
          <div>
            <span class="lesson-kicker">Som representado visualmente</span>
            <strong class="card-title">Primeira página autógrafa da 5ª Sinfonia de Beethoven</strong>
            <p>A página registra alturas, durações, articulações, dinâmica e organização. Mas ninguém <em>ouve</em> o papel. A música acontece quando essas instruções são interpretadas e transformadas em som.</p>
            <p><strong>Observe as correções e a densidade:</strong> criação musical também envolve tentativa, revisão, decisão e registro.</p>
            <p><a href="https://commons.wikimedia.org/wiki/File:BeethovenSinfonia5autografo.jpg" target="_blank" rel="noopener noreferrer">Fonte/licença: Wikimedia Commons • reprodução de obra em domínio público</a></p>
          </div>
        </div>
        ${choice('3','Representação musical','Qual afirmação é mais adequada?',[
          ['a','Partitura é uma forma de representar e orientar aspectos da música, mas não substitui a experiência sonora'],
          ['b','Partitura contém literalmente o som dentro do papel'],
          ['c','Toda música precisa obrigatoriamente de partitura para existir']
        ],'a','Isso. Há muitas tradições baseadas em oralidade, memória, improvisação, gravação e outras formas de transmissão.','Não confunda sistema de notação com a própria prática musical.')}

        <h3>5. Intensidade, articulação e silêncio mudam a frase</h3>
        <div class="studio-box">
          <strong class="card-title">Expression Lab</strong>
          <p>A sequência de alturas permanece semelhante. Mude o modo de executá-la.</p>
          <div class="choice-row">
            <button type="button" data-articulation="legato">▶ Mais ligado</button>
            <button type="button" data-articulation="staccato">▶ Mais curto</button>
            <button type="button" data-articulation="accent">▶ Com destaque</button>
            <button type="button" data-articulation="silence">▶ Com grande pausa</button>
          </div>
          <div id="articulationFeedback" class="choice-feedback" aria-live="polite">Qual versão parece mais contínua? Qual cria mais expectativa?</div>
        </div>
        ${choice('4','Silêncio','Por que uma pausa pode ser uma escolha expressiva?',[
          ['a','Porque pode organizar a forma, interromper expectativa, separar ideias e criar tensão ou respiro'],
          ['b','Porque silêncio sempre significa que o músico errou'],
          ['c','Porque pausa elimina todo sentido anterior']
        ],'a','Correto. O silêncio participa da organização do tempo e das expectativas.','Pausa não é necessariamente falha: pode ser planejada e estrutural.')}

        <h3>6. Textura: quantas camadas seu ouvido acompanha?</h3>
        <div class="studio-box">
          <strong class="card-title">Layer Lab</strong>
          <p>Monte uma pequena textura ativando e desativando camadas.</p>
          <div class="three-col">
            <label class="mini-card"><strong>Melodia</strong><input id="layerMelody" type="checkbox" checked> linha mais aguda e móvel</label>
            <label class="mini-card"><strong>Base grave</strong><input id="layerBass" type="checkbox" checked> sustentação mais lenta</label>
            <label class="mini-card"><strong>Pulso</strong><input id="layerPulse" type="checkbox"> ataques percussivos</label>
          </div>
          <div class="choice-row"><button id="playTexture" type="button">▶ Ouvir camadas</button></div>
          <div id="textureFeedback" class="choice-feedback" aria-live="polite">Experimente uma, duas e três camadas.</div>
        </div>
        <div class="source-box"><strong class="card-title">Textura musical</strong><p>Textura ajuda a descrever como camadas sonoras se relacionam: uma linha sozinha, melodia com acompanhamento, várias linhas independentes, massas sonoras e muitas outras organizações possíveis.</p></div>

        <h3>7. O ambiente também pode virar matéria sonora</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Corredor da escola</strong><p>Passos, vozes, portas, ventilador, sinal, reverberação.</p></div>
          <div class="mini-card"><strong>Rua</strong><p>Motores, freios, vendedores, pássaros, vento, semáforo sonoro.</p></div>
          <div class="mini-card"><strong>Cozinha</strong><p>Água, metal, corte, panela, prato, eletrodomésticos.</p></div>
          <div class="mini-card"><strong>Seu quarto</strong><p>Respiração, teclado, notificações, janela, ruído externo, silêncio relativo.</p></div>
        </div>
        <div class="challenge-box"><strong class="card-title">Mapa sonoro de 60 segundos</strong><ol><li>Fique um minuto em silêncio num lugar seguro.</li><li>Liste sons próximos e distantes.</li><li>Classifique pelo menos três por duração, intensidade e timbre percebido.</li><li>Escolha um som que normalmente você ignoraria.</li><li>Explique como ele participa da identidade daquele lugar.</li></ol></div>

        <h3>8. Sound Designer: crie a vinheta da mostra</h3>
        <div class="studio-box">
          <strong class="card-title">Sound Designer</strong>
          <p>Faça escolhas e ouça uma composição original gerada pelo navegador. Depois justifique a relação entre suas escolhas e a intenção da entrada da mostra.</p>
          <div class="two-col">
            <label class="mini-card"><strong>Tempo</strong><input id="soundTempo" type="range" min="55" max="160" value="90" style="width:100%"><small>55–160 bpm</small></label>
            <label class="mini-card"><strong>Timbre</strong><select id="soundTimbre" style="width:100%;margin-top:8px"><option value="sine">Senoidal</option><option value="triangle" selected>Triangular</option><option value="square">Quadrada</option><option value="sawtooth">Dente de serra</option></select></label>
            <label class="mini-card"><strong>Densidade</strong><select id="soundDensity" style="width:100%;margin-top:8px"><option value="sparse">Poucos eventos</option><option value="medium" selected>Média</option><option value="dense">Muitos eventos</option></select></label>
            <label class="mini-card"><strong>Dinâmica</strong><select id="soundDynamics" style="width:100%;margin-top:8px"><option value="steady">Quase constante</option><option value="crescendo">Crescendo</option><option value="accent">Acentos</option></select></label>
          </div>
          <div class="choice-row"><button id="playDesigner" type="button">▶ Ouvir minha vinheta</button></div>
          <div id="soundDesignerFeedback" class="choice-feedback" aria-live="polite">Mude uma variável por vez para perceber melhor o efeito.</div>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Transferência — produza com o que você tem</strong>
          <p>Em dupla, crie uma vinheta de <strong>10 a 20 segundos</strong> usando voz, palmas, objetos seguros, instrumento, aplicativo ou combinação desses recursos.</p>
          <ol><li>Defina a intenção: acolher, surpreender, criar expectativa, acalmar...</li><li>Escolha um pulso ou decida conscientemente não usá-lo.</li><li>Use pelo menos dois timbres.</li><li>Planeje um contraste de intensidade, duração ou textura.</li><li>Inclua pelo menos um silêncio intencional.</li><li>Apresente e explique quais escolhas produziram o efeito pretendido.</li></ol>
        </div>

        <div class="chapter-checkpoint">
          <div class="ok-box"><strong>Essência do capítulo.</strong><p>Música não é apenas uma sequência de notas. Som e silêncio são organizados por duração, pulso, ritmo, altura, intensidade, timbre, articulação, textura, repetição e contraste. O sentido surge das relações entre essas escolhas, da escuta, do contexto e da experiência de quem participa.</p></div>
          <div class="art-dimensions"><span>Entender</span><span>Experimentar</span><span>Analisar</span><span>Aplicar</span></div>
        </div>
      `,
      init
    });
  }

  MBB.enableChapter('04 Som', showChapter);
})();