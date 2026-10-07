// Padrão MbB — revisão de destaques do módulo Arduino / Sistemas Embarcados.
// Destaca somente verbos de execução nas instruções práticas.
// Conteúdo, códigos, circuitos, imagens e exercícios permanecem intactos.
// Setas/círculos/retângulos só devem ser adicionados quando existir alvo visual inequívoco.
(() => {
  const STYLE_ID = 'mbb-arduino-acoes-praticas-style';
  const ACTION_CLASS = 'mbb-arduino-action-key';
  const ACTION_RE = /\b(Não\s+(?:altere|apague|conecte|execute|feche|force|ligue|mude|use)|Nunca\s+(?:conecte|ligue|use)|Acesse|Abra|Adicione|Afaste|Aguarde|Ajuste|Altere|Analise|Anote|Aponte|Aproxime|Arraste|Associe|Calcule|Carregue|Cite|Classifique|Clique|Cole|Compare|Complete|Conecte|Configure|Confirme|Confira|Continue|Copie|Crie|Cubra|Defina|Deixe|Descreva|Desenhe|Desligue|Determine|Diferencie|Digite|Entre|Envie|Escolha|Escreva|Execute|Explique|Faça|Feche|Gire|Grave|Identifique|Ilumine|Indique|Inicie|Insira|Instale|Justifique|Leia|Ligue|Liste|Localize|Mantenha|Marque|Meça|Monte|Mude|Observe|Ordene|Organize|Passe|Pesquise|Posicione|Pressione|Preencha|Procure|Realize|Reinicie|Relacione|Remova|Renomeie|Repita|Responda|Retire|Retome|Reutilize|Revise|Salve|Selecione|Solte|Substitua|Sugira|Teste|Toque|Troque|Use|Verifique|Volte)\b/i;

  function garantirEstilo(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #arduinoLayout .${ACTION_CLASS}{font-weight:800!important;color:#123b73}
    `;
    document.head.appendChild(style);
  }

  function destacarPrimeiraAcao(root){
    if(!root || root.querySelector?.(`.${ACTION_CLASS}`)) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while(node){
      const parent = node.parentElement;
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,kbd,samp,a')){
        node = walker.nextNode();
        continue;
      }

      const text = node.nodeValue || '';
      const match = text.match(ACTION_RE);
      if(match && typeof match.index === 'number'){
        const before = text.slice(0, match.index);
        const action = match[0];
        const after = text.slice(match.index + action.length);
        const fragment = document.createDocumentFragment();

        if(before) fragment.appendChild(document.createTextNode(before));
        const strong = document.createElement('strong');
        strong.className = ACTION_CLASS;
        strong.textContent = action;
        fragment.appendChild(strong);
        if(after) fragment.appendChild(document.createTextNode(after));

        node.replaceWith(fragment);
        return;
      }

      node = walker.nextNode();
    }
  }

  function aplicarDestaques(){
    garantirEstilo();

    document.querySelectorAll([
      '#arduinoLayout main ol > li',
      '#arduinoLayout main .project .card > p',
      '#arduinoLayout main .card.exercise p',
      '#arduinoLayout main .card.errors p',
      '#arduinoLayout main .circuitFigure figcaption',
      '#arduinoLayout main #fund-experimentar p',
      '#arduinoLayout main #fund-experimentar li',
      '#arduinoLayout main #fund-minilabs p',
      '#arduinoLayout main #fund-minilabs li',
      '#arduinoLayout main #fund-desafios p',
      '#arduinoLayout main #fund-desafios li',
      '#arduinoLayout main #exercicios p',
      '#arduinoLayout main #exercicios li',
      '#arduinoLayout main .review-head p',
      '#arduinoLayout main .review-question p',
      '#arduinoLayout main .assessment-note',
      '#arduinoLayout main .concept-question p',
      '#arduinoLayout main .hub-head p'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const main = document.querySelector('#arduinoLayout main');
    if(!main) return;
    const observer = new MutationObserver(() => window.requestAnimationFrame(aplicarDestaques));
    observer.observe(main, {childList:true, subtree:true});
  }

  window.MbbArduinoDestaques = { aplicar: aplicarDestaques };
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();

(() => {
  if(window.__MBB_VISUALIZADOR_SITE__ || document.querySelector('script[data-mbb-visualizador-site]')) return;
  const script=document.createElement('script');
  script.src='/js/mbb-visualizador-site.js?v=20260927-1';
  script.dataset.mbbVisualizadorSite='1';
  document.body.appendChild(script);
})();

(() => {
  const caminho = location.pathname || '';
  if(!caminho.endsWith('/arduino-conectividade.html')) return;
  if(document.querySelector('script[data-mbb-conectividade-wokwi]')) return;

  const script = document.createElement('script');
  script.src = '../js/arduino-conectividade-mbb-wokwi-20261005.js?v=20261005-1';
  script.dataset.mbbConectividadeWokwi = '1';
  document.body.appendChild(script);
})();
