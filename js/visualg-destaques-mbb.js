// Padrão MbB — revisão cirúrgica de destaques do módulo VisuAlg.
// Destaca somente ações executáveis em orientações e exercícios.
// Código, saída simulada, fluxogramas, respostas e exemplos permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-visualg-acoes-style';
  const ACTION_CLASS='mbb-visualg-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|confunda|copie|execute|ignore|use)|Agora\s+(?:analise|compare|execute|resolva|teste)|Abra|Acesse|Altere|Analise|Anote|Aplique|Associe|Calcule|Classifique|Compare|Complete|Confira|Construa|Crie|Defina|Descreva|Desenhe|Digite|Escolha|Escreva|Execute|Explique|Faça|Identifique|Indique|Interprete|Justifique|Leia|Liste|Observe|Organize|Preencha|Registre|Relacione|Resolva|Responda|Revise|Rode|Selecione|Substitua|Teste|Use|Valide|Verifique)\b/i;

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
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,input,select,option,textarea,label,kbd,samp,a,svg,figure,table,.answer-box,.answer-content,.example-box,.visualg,.console')){
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
      '#objective',
      '#workspace .exercise-box',
      '#workspace .exercise-box p',
      '#workspace .exercise-box li',
      '#workspace .task-box p',
      '#workspace .task-box li',
      '#workspace details summary',
      '#note'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.querySelector('main');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbVisualgDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
