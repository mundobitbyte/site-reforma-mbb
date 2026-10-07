// Padrão MbB — revisão de destaques da área Informática e Produtividade.
// Destaca somente a primeira ação executável em orientações, práticas e exercícios.
// Modelos, tabelas, controles, arquivos e conteúdo conceitual permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-produtividade-acoes-style';
  const ACTION_CLASS='mbb-produtividade-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|compartilhe|confie|edite|exclua|ignore|renomeie|salve|use)|Baixe|Abra|Acesse|Adicione|Anote|Atualize|Compare|Confira|Converta|Copie|Crie|Defina|Descreva|Digite|Edite|Exporte|Formate|Identifique|Importe|Insira|Localize|Mova|Nomeie|Observe|Organize|Pesquise|Preencha|Registre|Renomeie|Revise|Salve|Selecione|Separe|Substitua|Teste|Use|Valide|Verifique|Compartilhe)\b/i;

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
      '#lessonContent .choice-result',
      '#lessonContent .quiz-result',
      '#lessonContent .feedback'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.getElementById('lessonContent');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbProdutividadeDestaques={aplicar:aplicarDestaques};
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
