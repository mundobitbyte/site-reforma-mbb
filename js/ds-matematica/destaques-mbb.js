// Padrão MbB — revisão de destaques do módulo DS Matemática.
// Destaca somente a primeira ação executável em orientações, exercícios e passos práticos.
// Conteúdo matemático, fórmulas, gráficos, SVGs e tirinhas permanecem intactos.
(() => {
  'use strict';

  const STYLE_ID='mbb-ds-matematica-acoes-style';
  const ACTION_CLASS='mbb-ds-matematica-action-key';
  const ACTION_RE=/\b(Não\s+(?:arredonde|confunda|esqueça|ignore|troque|use)|Agora\s+(?:calcule|compare|complete|determine|escreva|observe|resolva|substitua|teste)|Analise|Aplique|Calcule|Classifique|Compare|Complete|Confira|Considere|Construa|Converta|Defina|Descreva|Determine|Diferencie|Divida|Encontre|Escolha|Escreva|Estime|Explique|Faça|Identifique|Indique|Interprete|Justifique|Leia|Liste|Marque|Monte|Observe|Organize|Pergunte|Preencha|Resolva|Responda|Revise|Selecione|Simplifique|Substitua|Teste|Trace|Transforme|Use|Verifique)\b/i;

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
      '#lessonContent p',
      '#lessonContent li',
      '#lessonContent .step',
      '#lessonContent .challenge',
      '#lessonContent .note-box',
      '#lessonContent .ok-box',
      '#lessonContent details summary',
      '#lessonObjective2',
      '#lessonContent2 p',
      '#lessonContent2 li',
      '#lessonContent2 .step',
      '#lessonContent2 .s2-question',
      '#lessonContent2 .s2-checkpoint',
      '#lessonContent2 .s2-annotation',
      '#lessonContent2 details summary'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    ['lessonContent','lessonContent2'].forEach(id=>{
      const root=document.getElementById(id);
      if(!root) return;
      const observer=new MutationObserver(()=>window.requestAnimationFrame(aplicarDestaques));
      observer.observe(root,{childList:true,subtree:true});
    });
  }

  window.MbbDsMatematicaDestaques={aplicar:aplicarDestaques};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar);
  else iniciar();
})();
