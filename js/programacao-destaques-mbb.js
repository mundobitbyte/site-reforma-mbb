// Padrão MbB — revisão cirúrgica de destaques do módulo Programação de Computadores.
// Destaca somente ações executáveis em tarefas, exercícios e orientações práticas.
// Código, fluxogramas, respostas, exemplos e conteúdo conceitual permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-programacao-acoes-style';
  const ACTION_CLASS='mbb-programacao-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|confunda|copie|execute|ignore|use)|Agora\s+(?:analise|compare|execute|resolva|teste)|Abra|Acesse|Altere|Analise|Anote|Aplique|Associe|Calcule|Classifique|Compare|Complete|Confira|Construa|Crie|Defina|Descreva|Desenhe|Digite|Divida|Escolha|Escreva|Execute|Explique|Faça|Identifique|Indique|Interprete|Justifique|Leia|Liste|Observe|Organize|Preencha|Registre|Relacione|Resolva|Responda|Revise|Rode|Selecione|Substitua|Teste|Use|Valide|Verifique)\b/i;

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
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,input,select,option,textarea,label,kbd,samp,a,svg,figure,table,.answer-box,.answer-content,.placeholder-flow')){
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
      '#lesson .task-box p',
      '#lesson .task-box li',
      '#lesson .task-box details summary',
      '#lesson .exercise-box',
      '#lesson .challenge-box p',
      '#lesson .challenge-box li'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.getElementById('lesson');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbProgramacaoDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
