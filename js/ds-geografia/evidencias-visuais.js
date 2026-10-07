(() => {
  'use strict';

  const content = document.getElementById('lessonContent');
  const title = document.getElementById('lessonTitle');
  if (!content || !title) return;

  function figure05() {
    const figure = document.createElement('figure');
    figure.className = 'geo-figure';
    figure.dataset.evidenceEnhancement = '05';
    figure.innerHTML = `
      <a href="https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/45380-mais-de-60-dos-moradores-das-favelas-e-comunidades-urbanas-moravam-em-locais-sem-arvore" target="_blank" rel="noopener noreferrer">
        <img src="https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2025_12/Censo22-favela-entorno-grafico-32-ARVORES.png" alt="Gráfico do IBGE comparando moradores dentro e fora de Favelas e Comunidades Urbanas segundo o número de árvores no trecho da via; 64,6% dos moradores dentro dessas áreas viviam em trechos sem árvores, ante 31,0% fora delas." loading="lazy" decoding="async">
      </a>
      <figcaption>
        <strong>A desigualdade urbana também aparece na arborização</strong>
        <span>No Censo 2022, 64,6% dos moradores de Favelas e Comunidades Urbanas viviam em trechos sem árvores, contra 31,0% fora dessas áreas. Compare também as faixas com 1–2, 3–4 e 5 ou mais árvores: o gráfico transforma uma diferença territorial em evidência visual que pode ser localizada e investigada.</span>
        <small>Fonte/infográfico: IBGE, Censo Demográfico 2022 / Agência de Notícias IBGE. Reprodução com crédito à fonte, conforme as condições de uso da Agência.</small>
      </figcaption>`;
    return figure;
  }

  function figure06() {
    const figure = document.createElement('figure');
    figure.className = 'geo-figure';
    figure.dataset.evidenceEnhancement = '06';
    figure.innerHTML = `
      <a href="https://commons.wikimedia.org/wiki/File:TriagemDeLixo.jpg" target="_blank" rel="noopener noreferrer">
        <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/TriagemDeLixo.jpg?width=1200" alt="Trabalhadores realizando triagem manual de materiais recicláveis em uma esteira numa instalação de reciclagem no Brasil." loading="lazy" decoding="async">
      </a>
      <figcaption>
        <strong>Triagem: uma etapa que a lixeira esconde</strong>
        <span>A fotografia registra separação manual de materiais para reciclagem no Brasil. Ela torna visível um elo posterior à coleta: os materiais precisam ser recebidos, separados e encaminhados para rotas compatíveis. A cena é um exemplo de processo, não um retrato de todos os sistemas brasileiros.</span>
        <small>Foto: Ignácio Costa / Agência Minas, março de 2006, via Wikimedia Commons — CC BY 3.0.</small>
      </figcaption>`;
    return figure;
  }

  function enhance05() {
    if (content.querySelector('[data-evidence-enhancement="05"]')) return;

    const opening = content.querySelector('.geo-opening .hero-box');
    const central = opening?.querySelector('.central-question');
    if (opening && central && !opening.querySelector('[data-context-grounding="05"]')) {
      const paragraph = document.createElement('p');
      paragraph.dataset.contextGrounding = '05';
      paragraph.innerHTML = '<strong>Isso pode ser medido:</strong> no Censo 2022, o IBGE percorreu mais de 340 mil setores censitários com características urbanas e registrou elementos como calçadas, rampas, bueiros, pontos de ônibus e arborização para revelar como o entorno varia dentro das cidades.';
      opening.insertBefore(paragraph, central);
    }

    const heading = [...content.querySelectorAll('h3')].find(item => item.textContent.trim().startsWith('5. Favelas'));
    let node = heading?.nextElementSibling;
    while (node && !node.classList.contains('data-box')) node = node.nextElementSibling;
    if (node) node.insertAdjacentElement('afterend', figure05());
  }

  function enhance06() {
    if (content.querySelector('[data-evidence-enhancement="06"]')) return;
    const heading = [...content.querySelectorAll('h3')].find(item => item.textContent.trim().startsWith('3. O caminho dos resíduos'));
    let node = heading?.nextElementSibling;
    while (node && !node.classList.contains('four-col')) node = node.nextElementSibling;
    if (node) node.insertAdjacentElement('afterend', figure06());
  }

  function enhance() {
    const lessonTitle = title.textContent.trim();
    if (lessonTitle === 'Morar na mesma cidade significa ter o mesmo acesso à cidade?') enhance05();
    if (lessonTitle === 'Para onde vai aquilo que compramos depois que jogamos fora?') enhance06();
  }

  new MutationObserver(enhance).observe(content, { childList:true, subtree:true });
  enhance();
})();
