// Padrão MbB — revisão de destaques da área Infraestrutura e Sistemas.
// Destaca somente a primeira ação executável em orientações, práticas e exercícios.
// Comandos, evidências, imagens, tabelas, controles e conteúdo técnico permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-infraestrutura-acoes-style';
  const ACTION_CLASS='mbb-infraestrutura-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|abra|execute|force|formate|ignore|instale|insista|reinicie|remova|use)|Nunca\s+(?:altere|apague|execute|force|formate|instale|use)|Acesse|Abra|Adicione|Anote|Atualize|Avalie|Capture|Compare|Confira|Configure|Confirme|Conecte|Consulte|Copie|Crie|Descreva|Desenergize|Desligue|Digite|Documente|Execute|Fotografe|Identifique|Instale|Interrompa|Investigue|Leia|Liste|Meça|Monte|Observe|Pare|Pesquise|Planeje|Preencha|Registre|Reinicie|Remova|Restaure|Rode|Salve|Selecione|Teste|Valide|Verifique)\b/i;

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
      '#lessonObjective',
      '#lessonContent p',
      '#lessonContent li',
      '#lessonContent details summary',
      '#lessonContent .quiz-result'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.getElementById('lessonContent');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbInfraestruturaDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();

(() => {
  if(window.__MBB_VISUALIZADOR_SITE__ || document.querySelector('script[data-mbb-visualizador-site]')) return;
  const script=document.createElement('script');
  script.src='/js/mbb-visualizador-site.js?v=20260927-1';
  script.dataset.mbbVisualizadorSite='1';
  document.body.appendChild(script);
})();
