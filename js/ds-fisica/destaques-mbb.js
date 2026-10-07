// Padrão MbB — revisão de destaques do módulo DS Física.
// Destaca somente a primeira ação executável em orientações, exercícios, experimentos e checkpoints.
// Conteúdo conceitual, fórmulas, gráficos, SVGs e interações permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-ds-fisica-acoes-style';
  const ACTION_CLASS='mbb-ds-fisica-action-key';
  const ACTION_RE=/\b(Não\s+(?:arredonde|confunda|ignore|troque|use)|Agora\s+(?:calcule|compare|determine|observe|represente|resolva|teste)|Analise|Aplique|Calcule|Classifique|Compare|Complete|Confira|Considere|Converta|Defina|Descreva|Determine|Diferencie|Encontre|Escolha|Estime|Explique|Faça|Identifique|Indique|Interprete|Justifique|Leia|Liste|Marque|Meça|Observe|Organize|Preencha|Represente|Resolva|Responda|Revise|Selecione|Substitua|Teste|Trace|Transforme|Use|Verifique)\b/i;

  function garantirEstilo(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`.${ACTION_CLASS}{font-weight:800!important;color:#123b73}`;
    document.head.appendChild(style);
  }

  function destacarPrimeiraAcao(root){
    if(!root || root.querySelector?.(`.${ACTION_CLASS}`)) return;

    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node=walker.nextNode();

    while(node){
      const parent=node.parentElement;
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,kbd,samp,a,svg')){
        node=walker.nextNode();
        continue;
      }

      const text=node.nodeValue||'';
      const match=text.match(ACTION_RE);
      if(match && typeof match.index==='number'){
        const fragment=document.createDocumentFragment();
        const before=text.slice(0,match.index);
        const action=match[0];
        const after=text.slice(match.index+action.length);

        if(before) fragment.appendChild(document.createTextNode(before));
        const strong=document.createElement('strong');
        strong.className=ACTION_CLASS;
        strong.textContent=action;
        fragment.appendChild(strong);
        if(after) fragment.appendChild(document.createTextNode(after));

        node.replaceWith(fragment);
        return;
      }

      node=walker.nextNode();
    }
  }

  function aplicarDestaques(){
    garantirEstilo();
    document.querySelectorAll([
      '#lessonObjective',
      '#lessonContent .quick-question p',
      '#lessonContent .experiment-box p',
      '#lessonContent .experiment-box li',
      '#lessonContent .challenge-box p',
      '#lessonContent .challenge-box li',
      '#lessonContent .chapter-checkpoint p',
      '#lessonContent .chapter-checkpoint li',
      '#lessonContent .reason-steps li',
      '#lessonContent details summary',
      '#lessonContent .interactive-lab .lab-result span'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.getElementById('lessonContent');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbDsFisicaDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
