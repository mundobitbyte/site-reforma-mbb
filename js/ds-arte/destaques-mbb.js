// Padrão MbB — revisão de destaques do módulo DS Arte.
// Destaca somente a primeira ação executável em orientações, exercícios e processos de criação.
// Obras, imagens, fotografias, figuras e conteúdo conceitual permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-ds-arte-acoes-style';
  const ACTION_CLASS='mbb-ds-arte-action-key';
  const ACTION_RE=/\b(Não\s+(?:confunda|ignore|reduza|use)|Agora\s+(?:analise|compare|crie|experimente|observe)|Analise|Apresente|Associe|Avalie|Compare|Complete|Considere|Crie|Descreva|Desenhe|Destaque|Escolha|Escute|Experimente|Explique|Faça|Fotografe|Identifique|Indique|Interprete|Justifique|Leia|Liste|Monte|Observe|Organize|Pesquise|Produza|Recrie|Registre|Relacione|Responda|Revise|Selecione|Teste|Use|Verifique)\b/i;

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
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,kbd,samp,a,svg,blockquote,figure,.artwork-card,.visual-prompt')){
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
      '#lessonContent p',
      '#lessonContent li',
      '#lessonContent details summary'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.getElementById('lessonContent');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbDsArteDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
