(() => {
  'use strict';

  const STYLE_ID = 'mbbDiagnosticMascotStyles';
  const MASCOT_ID = 'mbbDiagnosticMascot';
  let hideTimer = null;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .mbb-diagnostic-mascot{position:fixed;right:18px;bottom:18px;z-index:120;display:flex;align-items:flex-end;gap:12px;max-width:min(520px,calc(100vw - 24px));opacity:0;transform:translate3d(36px,16px,0) scale(.96);transition:opacity .25s ease,transform .32s cubic-bezier(.2,.8,.2,1);pointer-events:none}
      .mbb-diagnostic-mascot.is-visible{opacity:1;transform:translate3d(0,0,0) scale(1);pointer-events:auto}
      .mbb-diagnostic-mascot[hidden]{display:none!important}
      .mbb-diagnostic-character{position:relative;width:138px;height:210px;flex:0 0 138px;filter:drop-shadow(0 10px 10px rgba(18,54,82,.18));transform-origin:50% 100%}
      .mbb-robot-head{position:absolute;left:13px;top:0;width:112px;height:112px;border:3px solid #145b91;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 35% 28%,#80d7ff 0 10%,#2aa6e7 42%,#0872bc 78%,#07598f 100%);box-shadow:inset -12px -10px 18px rgba(0,44,89,.18),inset 9px 8px 15px rgba(255,255,255,.25)}
      .mbb-robot-head::before{content:'';position:absolute;left:27px;top:-8px;width:52px;height:124px;border-left:1px solid rgba(255,255,255,.55);border-right:1px solid rgba(255,255,255,.55);border-radius:50%}
      .mbb-robot-head::after{content:'';position:absolute;left:-8px;top:47px;width:124px;height:42px;border-top:1px solid rgba(255,255,255,.55);border-bottom:1px solid rgba(255,255,255,.45);border-radius:50%}
      .mbb-robot-land{position:absolute;z-index:1;background:#80c83d;opacity:.96;transform:rotate(-12deg)}
      .mbb-robot-land.land-a{left:10px;top:12px;width:37px;height:25px;border-radius:52% 48% 58% 38%}
      .mbb-robot-land.land-b{left:22px;top:34px;width:29px;height:38px;border-radius:45% 55% 40% 60%}
      .mbb-robot-bits{position:absolute;right:8px;top:19px;z-index:2;color:rgba(255,255,255,.86);font:700 9px/1.15 ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:1px;text-align:center}
      .mbb-robot-eye{position:absolute;z-index:3;top:39px;width:18px;height:28px;border-radius:50%;background:#082238;border:2px solid rgba(255,255,255,.8);box-shadow:inset 0 -5px 0 #0b7cc2}
      .mbb-robot-eye::after{content:'';position:absolute;left:4px;top:4px;width:6px;height:8px;border-radius:50%;background:#fff}
      .mbb-robot-eye.eye-left{left:31px}.mbb-robot-eye.eye-right{right:26px}
      .mbb-robot-mouth{position:absolute;z-index:3;left:47px;top:75px;width:24px;height:12px;border-bottom:3px solid #073b62;border-radius:0 0 50% 50%}
      .mbb-robot-neck{position:absolute;left:59px;top:108px;width:20px;height:12px;border-radius:4px;background:#203d55}
      .mbb-robot-body{position:absolute;left:31px;top:116px;width:76px;height:60px;border:3px solid #8296a6;border-radius:28px 28px 24px 24px;background:linear-gradient(145deg,#fff 0%,#e9eef2 55%,#cdd8df 100%);box-shadow:inset -7px -6px 10px rgba(40,70,90,.12)}
      .mbb-robot-logo{position:absolute;left:17px;top:15px;width:38px;height:28px;border-radius:50%;display:grid;place-items:center;background:#173a55;color:#fff;font:900 13px/1 Arial,sans-serif;letter-spacing:-1px}
      .mbb-robot-logo b:nth-child(1){color:#33a9e5}.mbb-robot-logo b:nth-child(2){color:#78c83d}.mbb-robot-logo b:nth-child(3){color:#f2a31a}
      .mbb-robot-arm{position:absolute;top:126px;width:17px;height:55px;border:3px solid #60788a;border-radius:12px;background:linear-gradient(#f7fafc,#c8d5dd);transform-origin:50% 8px;transition:transform .35s ease}
      .mbb-robot-arm::after{content:'';position:absolute;left:-5px;bottom:-9px;width:21px;height:21px;border:3px solid #36566d;border-radius:50%;background:#1c405a}
      .mbb-robot-arm.arm-left{left:15px;transform:rotate(24deg)}.mbb-robot-arm.arm-right{right:15px;transform:rotate(-24deg)}
      .mbb-robot-leg{position:absolute;top:170px;width:24px;height:31px;border:3px solid #60788a;border-radius:10px 10px 12px 12px;background:linear-gradient(#f7fafc,#c8d5dd)}
      .mbb-robot-leg::after{content:'';position:absolute;left:-7px;bottom:-10px;width:34px;height:14px;border:3px solid #36566d;border-radius:12px 12px 8px 8px;background:#eff4f7}
      .mbb-robot-leg.leg-left{left:37px}.mbb-robot-leg.leg-right{right:37px}
      .mbb-diagnostic-bubble{position:relative;min-width:235px;max-width:340px;margin-bottom:28px;padding:16px 36px 15px 17px;border:1px solid rgba(19,78,119,.2);border-radius:18px;background:#fff;box-shadow:0 12px 30px rgba(17,53,79,.18);color:var(--text,#183042)}
      .mbb-diagnostic-bubble::before{content:'';position:absolute;left:-10px;bottom:25px;width:18px;height:18px;background:#fff;border-left:1px solid rgba(19,78,119,.2);border-bottom:1px solid rgba(19,78,119,.2);transform:rotate(45deg)}
      .mbb-diagnostic-bubble strong{position:relative;display:block;margin-bottom:5px;color:var(--primary-dark,#135b8d);font-size:17px;line-height:1.2}
      .mbb-diagnostic-bubble p{position:relative;margin:0;font-size:14px;line-height:1.45}
      .mbb-diagnostic-close{position:absolute;right:8px;top:7px;width:28px;height:28px;border:0;border-radius:50%;background:transparent;color:#617484;font-size:21px;line-height:1;cursor:pointer}
      .mbb-diagnostic-close:hover,.mbb-diagnostic-close:focus-visible{background:#eef4f7;color:#173a55;outline:none}
      .mbb-diagnostic-confetti{position:absolute;left:-7px;top:-10px;width:160px;height:150px;pointer-events:none;overflow:visible}
      .mbb-diagnostic-confetti span{position:absolute;width:8px;height:8px;border-radius:2px;opacity:0;animation:mbbConfetti .9s ease-out forwards}
      .mbb-diagnostic-confetti span:nth-child(3n+1){background:#2b9fe6}.mbb-diagnostic-confetti span:nth-child(3n+2){background:#7bc43f}.mbb-diagnostic-confetti span:nth-child(3n){background:#f2a51a}
      .mbb-diagnostic-confetti span:nth-child(1){left:15%;top:10%;animation-delay:.05s}.mbb-diagnostic-confetti span:nth-child(2){left:35%;top:3%;animation-delay:.12s}.mbb-diagnostic-confetti span:nth-child(3){left:55%;top:9%;animation-delay:.02s}.mbb-diagnostic-confetti span:nth-child(4){left:75%;top:4%;animation-delay:.16s}.mbb-diagnostic-confetti span:nth-child(5){left:92%;top:20%;animation-delay:.08s}.mbb-diagnostic-confetti span:nth-child(6){left:8%;top:35%;animation-delay:.18s}.mbb-diagnostic-confetti span:nth-child(7){left:88%;top:42%;animation-delay:.03s}.mbb-diagnostic-confetti span:nth-child(8){left:24%;top:48%;animation-delay:.1s}.mbb-diagnostic-confetti span:nth-child(9){left:68%;top:49%;animation-delay:.2s}
      .mbb-diagnostic-mascot.is-perfect .mbb-diagnostic-character{animation:mbbMascotCelebrate .75s cubic-bezier(.2,.8,.2,1) .12s both}
      .mbb-diagnostic-mascot.is-perfect .arm-left{transform:translate(-8px,-20px) rotate(145deg)}
      .mbb-diagnostic-mascot.is-perfect .arm-right{transform:translate(8px,-20px) rotate(-145deg)}
      @keyframes mbbMascotCelebrate{0%{transform:translateY(14px) scale(.92)}45%{transform:translateY(-15px) scale(1.04)}70%{transform:translateY(3px) scale(.98)}100%{transform:translateY(0) scale(1)}}
      @keyframes mbbConfetti{0%{opacity:0;transform:translateY(-8px) rotate(0) scale(.6)}20%{opacity:1}100%{opacity:0;transform:translateY(85px) rotate(240deg) scale(1)}}
      @media(max-width:640px){.mbb-diagnostic-mascot{right:8px;bottom:8px;gap:5px;max-width:calc(100vw - 16px)}.mbb-diagnostic-character{width:102px;height:158px;flex-basis:102px;transform:scale(.75);transform-origin:100% 100%;margin-left:-23px}.mbb-diagnostic-bubble{min-width:0;max-width:calc(100vw - 105px);margin-bottom:10px;padding:13px 32px 12px 14px}.mbb-diagnostic-bubble strong{font-size:15px}.mbb-diagnostic-bubble p{font-size:13px}}
      @media(prefers-reduced-motion:reduce){.mbb-diagnostic-mascot,.mbb-diagnostic-character,.mbb-robot-arm,.mbb-diagnostic-confetti span{animation:none!important;transition:none!important}}
    `;
    document.head.appendChild(style);
  }

  function robotMarkup() {
    return `
      <div class="mbb-diagnostic-character" aria-hidden="true">
        <div class="mbb-robot-head">
          <span class="mbb-robot-land land-a"></span><span class="mbb-robot-land land-b"></span>
          <span class="mbb-robot-bits">01<br>10<br>01</span>
          <span class="mbb-robot-eye eye-left"></span><span class="mbb-robot-eye eye-right"></span>
          <span class="mbb-robot-mouth"></span>
        </div>
        <div class="mbb-robot-neck"></div>
        <div class="mbb-robot-body"><span class="mbb-robot-logo"><b>m</b><b>b</b><b>b</b></span></div>
        <span class="mbb-robot-arm arm-left"></span><span class="mbb-robot-arm arm-right"></span>
        <span class="mbb-robot-leg leg-left"></span><span class="mbb-robot-leg leg-right"></span>
      </div>`;
  }

  function ensureMascot() {
    let mascot = document.getElementById(MASCOT_ID);
    if (mascot) return mascot;
    ensureStyles();
    mascot = document.createElement('aside');
    mascot.id = MASCOT_ID;
    mascot.className = 'mbb-diagnostic-mascot';
    mascot.hidden = true;
    mascot.setAttribute('role', 'status');
    mascot.setAttribute('aria-live', 'polite');
    mascot.innerHTML = `${robotMarkup()}<div class="mbb-diagnostic-confetti" aria-hidden="true"></div><div class="mbb-diagnostic-bubble"><button class="mbb-diagnostic-close" type="button" aria-label="Fechar mensagem do mascote">×</button><strong></strong><p></p></div>`;
    document.body.appendChild(mascot);
    return mascot;
  }

  function hideMascot() {
    clearTimeout(hideTimer);
    const mascot = document.getElementById(MASCOT_ID);
    if (!mascot || mascot.hidden) return;
    mascot.classList.remove('is-visible');
    setTimeout(() => { mascot.hidden = true; }, 260);
  }

  function diagnosticScore() {
    const quiz = document.querySelector('#diagnosticQuiz');
    if (!quiz) return null;
    const items = [...quiz.querySelectorAll('.quiz-item')];
    if (!items.length) return null;
    let score = 0;
    let blank = 0;
    items.forEach((item) => {
      const selected = item.querySelector('input[type="radio"]:checked');
      if (!selected) blank += 1;
      else if (selected.value === item.dataset.answer) score += 1;
    });
    return { score, total: items.length, blank };
  }

  function showMascot() {
    const result = diagnosticScore();
    if (!result || result.blank) {
      hideMascot();
      return;
    }

    const mascot = ensureMascot();
    const title = mascot.querySelector('.mbb-diagnostic-bubble strong');
    const text = mascot.querySelector('.mbb-diagnostic-bubble p');
    const confetti = mascot.querySelector('.mbb-diagnostic-confetti');
    const perfect = result.score === result.total;
    const ratio = result.score / result.total;

    mascot.classList.remove('is-perfect', 'is-strong', 'is-review');
    if (perfect) {
      mascot.classList.add('is-perfect');
      title.textContent = `Perfeito! ${result.score}/${result.total}.`;
      text.textContent = 'Você acertou todas as questões da avaliação diagnóstica!';
      confetti.innerHTML = '<span></span>'.repeat(9);
    } else if (ratio >= .7) {
      mascot.classList.add('is-strong');
      title.textContent = 'Muito bem!';
      text.textContent = 'Sua base está boa. Confira os poucos pontos indicados para revisão.';
      confetti.innerHTML = '';
    } else {
      mascot.classList.add('is-review');
      title.textContent = 'Diagnóstico concluído.';
      text.textContent = 'Agora você já sabe o que vale revisar primeiro. Esse é o objetivo desta etapa.';
      confetti.innerHTML = '';
    }

    clearTimeout(hideTimer);
    mascot.hidden = false;
    mascot.classList.remove('is-visible');
    requestAnimationFrame(() => requestAnimationFrame(() => mascot.classList.add('is-visible')));
    hideTimer = setTimeout(hideMascot, perfect ? 10000 : 8000);
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('#checkDiagnostic')) setTimeout(showMascot, 30);
    if (event.target.closest('#resetDiagnostic')) hideMascot();
    if (event.target.closest('.mbb-diagnostic-close')) hideMascot();
  });

  window.addEventListener('hashchange', () => {
    if (location.hash !== '#diagnostico') hideMascot();
  });
})();
