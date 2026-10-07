function jumpToTop(){
  // A navegação entre capítulos deve ser imediata, sem percorrer visualmente o conteúdo.
  document.documentElement.style.scrollBehavior='auto';
  window.scrollTo(0,0);
  const main=document.querySelector('main');
  if(main) main.scrollTop=0;
}

function openExerciseChapter(id){
  const home = document.getElementById('exerciseHome');
  if(home) home.classList.add('hidden');
  document.querySelectorAll('.exercise-chapter-view').forEach(v=>v.classList.remove('active'));
  const view = document.getElementById(id);
  if(view) view.classList.add('active');
  jumpToTop();
}
function backToExerciseHome(){
  const home = document.getElementById('exerciseHome');
  if(home) home.classList.remove('hidden');
  document.querySelectorAll('.exercise-chapter-view').forEach(v=>v.classList.remove('active'));
  jumpToTop();
}

function showModule(id){
  document.querySelectorAll('.module').forEach(m=>m.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('active'));
  const mod=document.getElementById('mod-'+id);
  const btn=document.getElementById('btn-'+id);
  if(mod&&btn){
    mod.classList.add('active');
    btn.classList.add('active');
    if(id==='exercicios' && typeof backToExerciseHome === 'function'){
      backToExerciseHome();
    }
    jumpToTop();
  }
}
document.querySelectorAll('.nav-link[data-target]').forEach(btn=>btn.addEventListener('click',()=>showModule(btn.dataset.target)));
// Cada título de seção é um destino da pesquisa. Os IDs da unidade e o progresso
// continuam no catálogo; estes identificam apenas um ponto de leitura.
function slugTitulo(texto){
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
    .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,65);
}
document.querySelectorAll('section.module:not(#mod-inicio):not(#mod-exercicios)').forEach(modulo=>{
  const repetidos=new Map();
  modulo.querySelectorAll('h2').forEach(titulo=>{
    const texto=titulo.textContent.replace(/\s+/g,' ').trim();
    if(!texto || texto.length>125) return;
    const base=`bd-topico-${modulo.id.slice(4)}-${slugTitulo(texto)}`;
    const vezes=(repetidos.get(base)||0)+1;
    repetidos.set(base,vezes);
    if(!titulo.id) titulo.id=base+(vezes>1?`-${vezes}`:'');
  });
});
// Uma âncora de tópico pode abrir diretamente o capítulo que a contém.
function abrirTopicoDaUrl(){
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); }
  catch { return; }
  const topico = id && document.getElementById(id);
  const modulo = topico && topico.closest('.module');
  if (!modulo || !modulo.id.startsWith('mod-')) return;
  showModule(modulo.id.slice(4));
  requestAnimationFrame(() => topico.scrollIntoView({block:'start'}));
}
showModule('inicio');
if (location.hash) abrirTopicoDaUrl();
window.addEventListener('hashchange', abrirTopicoDaUrl);


document.addEventListener('click', function(e){
  const btn = e.target.closest('.copy-btn');
  if(!btn) return;
  const box = btn.closest('.codebox');
  const code = box ? box.querySelector('code') : null;
  if(!code) return;
  navigator.clipboard.writeText(code.innerText).then(function(){
    const old = btn.innerText;
    btn.innerText = 'Copiado!';
    btn.classList.add('copied');
    setTimeout(function(){ btn.innerText = old; btn.classList.remove('copied'); }, 1600);
  });
});

// Padrão MbB — revisão cirúrgica de destaques de ações.
(() => {
  'use strict';

  const STYLE_ID='mbb-bancodedados-acoes-style';
  const ACTION_CLASS='mbb-bancodedados-action-key';
  const ACTION_RE=/\b(Não\s+(?:altere|apague|confunda|execute|ignore|use)|Agora\s+(?:analise|compare|execute|responda|teste)|Abra|Acesse|Adicione|Analise|Anote|Associe|Atualize|Calcule|Classifique|Compare|Complete|Configure|Consulte|Copie|Cole|Crie|Defina|Descreva|Diferencie|Digite|Escolha|Execute|Explique|Faça|Identifique|Implemente|Indique|Insira|Interprete|Justifique|Leia|Liste|Modele|Observe|Organize|Pesquise|Preencha|Relacione|Remova|Responda|Revise|Selecione|Teste|Use|Valide|Verifique)\b/i;

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
      'main .module p',
      'main .module li',
      'main .module details summary'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  aplicarDestaques();
})();

(() => {
  if(window.__MBB_VISUALIZADOR_SITE__ || document.querySelector('script[data-mbb-visualizador-site]')) return;
  const script=document.createElement('script');
  script.src='/js/mbb-visualizador-site.js?v=20260927-1';
  script.dataset.mbbVisualizadorSite='1';
  document.body.appendChild(script);
})();
