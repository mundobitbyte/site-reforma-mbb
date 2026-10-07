// Padrão MbB — revisão cirúrgica de destaques da área Python.
// Destaca somente ações executáveis em passos, diagnóstico, aplicação e desafios.
// Código, saídas, referência, documentação e conteúdo conceitual permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-python-acoes-style';
  const ACTION_CLASS='mbb-python-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|confunda|copie|execute|ignore|instale|use)|Agora\s+(?:analise|compare|execute|resolva|teste)|Abra|Acesse|Adicione|Altere|Analise|Anote|Aplique|Associe|Calcule|Compare|Complete|Confira|Construa|Crie|Defina|Descreva|Digite|Escolha|Escreva|Execute|Explique|Faça|Identifique|Importe|Indique|Instale|Interprete|Justifique|Leia|Liste|Observe|Organize|Pesquise|Preencha|Registre|Relacione|Resolva|Responda|Revise|Rode|Salve|Selecione|Substitua|Teste|Use|Valide|Verifique)\b/i;

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
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,input,select,option,textarea,label,kbd,samp,a,svg,figure,table,.code-wrap,.output-wrap,.reference-card,.module-card')){
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
      '#content .step-card p',
      '#content .step-card li',
      '#content .diagnostic-box li',
      '#content .apply-box p',
      '#content .warning-box p',
      '#content details summary'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.getElementById('content');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbPythonDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
