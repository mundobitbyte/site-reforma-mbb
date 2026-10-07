// Padrão MbB — destaques de ações nas superfícies de aprendizagem da Academia.
// Atua somente em instruções; prompts, exemplos, código, controles e navegação permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-academia-acoes-style';
  const ACTION_CLASS='mbb-academia-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|confunda|ignore|tente|use)|Acesse|Abra|Acompanhe|Adicione|Analise|Anote|Aplique|Associe|Avalie|Calcule|Classifique|Compare|Complete|Conecte|Continue|Crie|Defina|Descreva|Digite|Escolha|Execute|Explique|Faça|Identifique|Indique|Instale|Interprete|Investigue|Justifique|Leia|Liste|Localize|Marque|Melhore|Monte|Observe|Organize|Peça|Pesquise|Preencha|Procure|Produza|Registre|Relacione|Repita|Responda|Revise|Selecione|Teste|Use|Verifique)\b/i;

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
      if(!parent || parent.closest('strong,b,code,pre,blockquote,script,style,button,input,select,option,textarea,label,kbd,samp,a,svg,figure,table')){
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
      'body.module-product-body .build-module-step > p',
      'body.module-product-body .activity > p',
      'body.module-product-body .challenge-block > p',
      'body.embedded-course-body [data-lesson-content] .learning-step p'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.querySelector('[data-lesson-content]') || document.querySelector('.module-main');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbAcademiaDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
