// Padrão MbB — revisão de destaques da trilha de Inteligência Artificial.
// Destaca somente a primeira ação executável em orientações, atividades e laboratórios.
// Prompts copiáveis, respostas-modelo, código, fontes, tabelas, figuras e conteúdo conceitual permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-ia-acoes-style';
  const ACTION_CLASS='mbb-ia-action-key';
  const ACTION_RE=/\b(Não\s+(?:aceite|cole|confie|copie|execute|ignore|invente|presuma|reduza|use)|Agora\s+(?:analise|compare|execute|observe|responda|teste)|Abra|Acesse|Adicione|Ajuste|Analise|Anote|Avalie|Classifique|Cole|Compare|Complete|Confira|Considere|Copie|Crie|Defina|Descreva|Divida|Escolha|Escreva|Execute|Explique|Faça|Identifique|Indique|Interprete|Justifique|Leia|Liste|Observe|Organize|Peça|Pergunte|Pesquise|Preencha|Reescreva|Reformule|Registre|Relacione|Responda|Revise|Selecione|Separe|Teste|Use|Valide|Verifique)\b/i;

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
      if(!parent || parent.closest([
        'strong','b','code','pre','script','style','button','input','select','option','textarea','label','kbd','samp','a','svg','figure','table','blockquote',
        '.prompt','.prompt-text','.codebox','.code-box','.source-box','.source','.model-answer','.resposta-modelo','.example-response','.ia-response','.output'
      ].join(','))){
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
      'main p','main li','main details summary',
      '.container p','.container li','.container details summary'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const root=document.querySelector('main,.container');
    if(!root) return;
    const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
    observer.observe(root,{childList:true,subtree:true});
  }

  window.MbbIaDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
