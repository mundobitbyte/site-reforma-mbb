// Padrão MbB — revisão cirúrgica de destaques de ações.
(() => {
  'use strict';

  const STYLE_ID='mbb-bd-gestao-acoes-style';
  const ACTION_CLASS='mbb-bd-gestao-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|ignore|invente|use)|Agora\s+(?:analise|compare|observe|responda)|Analise|Anote|Associe|Avalie|Calcule|Classifique|Compare|Complete|Considere|Defina|Descreva|Diferencie|Escolha|Escreva|Explique|Faça|Identifique|Indique|Interprete|Justifique|Leia|Liste|Observe|Organize|Pesquise|Preencha|Produza|Registre|Relacione|Responda|Revise|Selecione|Sugira|Use|Verifique)\b/i;

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
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,input,select,option,textarea,label,kbd,samp,a,svg,figure,table')){
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
      'main .content > p',
      'main .activity-box li',
      'main .report-box li',
      'main .highlight',
      'main .note'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',aplicarDestaques);
  else aplicarDestaques();
})();
