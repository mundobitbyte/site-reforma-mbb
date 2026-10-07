(function () {
  "use strict";

  const page = document.querySelector(".module-page");
  const content = document.querySelector(".web-content");
  const chapterMenu = document.querySelector(".chapter-menu");
  const chapters = Array.from(document.querySelectorAll("[data-chapter]"));
  const links = Array.from(document.querySelectorAll("[data-chapter-link]"));
  const moduleTitle = page?.dataset.moduleTitle || "Programação Web";

  if (!page || !chapters.length) return;

  const chapterIds = new Set(chapters.map((chapter) => chapter.id));

  function legacyCopyFallback(text) {
    if (typeof document.execCommand !== "function") return false;

    const previousFocus = document.activeElement;
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      return document.execCommand("copy");
    } catch (error) {
      return false;
    } finally {
      textArea.remove();
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus({ preventScroll: true });
      }
    }
  }

  function setupCopyButtons() {
    document.querySelectorAll("pre.code-block").forEach((codeBlock) => {
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrap";
      codeBlock.before(wrapper);
      wrapper.appendChild(codeBlock);

      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.type = "button";
      button.textContent = "Copiar";
      button.setAttribute("aria-label", "Copiar código");
      button.setAttribute("aria-live", "polite");
      wrapper.appendChild(button);

      button.addEventListener("click", async () => {
        let copied = false;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(codeBlock.textContent);
            copied = true;
          } else {
            copied = legacyCopyFallback(codeBlock.textContent);
          }
        } catch (error) {
          // Último recurso para navegadores sem a API moderna de Clipboard.
          copied = legacyCopyFallback(codeBlock.textContent);
        }

        button.textContent = copied ? "Copiado!" : "Não foi possível";
        button.classList.toggle("copy-error", !copied);
        window.clearTimeout(button.resetTimer);
        button.resetTimer = window.setTimeout(() => {
          button.textContent = "Copiar";
          button.classList.remove("copy-error");
        }, 1800);
      });
    });
  }

  function setupDemoForms() {
    document.querySelectorAll("[data-demo-form]").forEach((form) => {
      const status = form.querySelector("[data-demo-status]");

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!status) return;
        status.textContent = "Teste concluído: os campos passaram pela validação do navegador e nenhum dado foi enviado.";
        status.hidden = false;
      });

      form.addEventListener("input", () => {
        if (status) status.hidden = true;
      });
    });
  }

  function setupChapter10CheckpointNote() {
    const downloadLink = document.querySelector('a[href$="cafe-aurora-capitulo-10.zip"]');
    if (!downloadLink) return;

    const checkpoint = downloadLink.closest(".checkpoint-box");
    if (!checkpoint || checkpoint.querySelector("[data-capitulo-10-live-preview]")) return;

    const note = document.createElement("p");
    note.setAttribute("data-capitulo-10-live-preview", "");

    const strong = document.createElement("strong");
    strong.textContent = "Importante: ";
    note.appendChild(strong);
    note.append("depois de descompactar, abra a pasta no VS Code e execute o projeto pelo Live Preview (servidor local). Não abra index.html por duplo clique, pois o fetch() do JSON pode ser bloqueado em file://.");

    checkpoint.insertBefore(note, downloadLink);
  }

  function setupJavaScriptDemos() {
    document.querySelectorAll("[data-js-demo-filter]").forEach((demo) => {
      const controls = demo.querySelector("[data-demo-filter-controls]");
      const buttons = Array.from(demo.querySelectorAll("[data-demo-filter]"));
      const products = Array.from(demo.querySelectorAll("[data-demo-product]"));
      const status = demo.querySelector("[data-demo-filter-status]");

      if (!controls || !buttons.length || !products.length || !status) return;

      function applyFilter(category) {
        let visibleProducts = 0;

        products.forEach((product) => {
          const shouldShow = category === "todos" || product.dataset.demoProduct === category;
          product.hidden = !shouldShow;
          if (shouldShow) visibleProducts += 1;
        });

        status.textContent = `${visibleProducts} ${visibleProducts === 1 ? "produto encontrado" : "produtos encontrados"}.`;
      }

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((item) => item.setAttribute("aria-pressed", "false"));
          button.setAttribute("aria-pressed", "true");
          applyFilter(button.dataset.demoFilter);
        });
      });

      controls.hidden = false;
      applyFilter("todos");
    });

    document.querySelectorAll("[data-js-demo-counter]").forEach((demo) => {
      const field = demo.querySelector("[data-demo-counter-field]");
      const output = demo.querySelector("[data-demo-counter-output]");

      if (!field || !output) return;

      function updateCounter() {
        output.textContent = `${field.value.length} de ${field.maxLength} caracteres`;
      }

      field.addEventListener("input", updateCounter);
      updateCounter();
    });

    document.querySelectorAll("[data-js-demo-order]").forEach((demo) => {
      const controls = demo.querySelector("[data-demo-order-controls]");
      const result = demo.querySelector("[data-demo-order-result]");
      const status = demo.querySelector("[data-demo-order-status]");
      const clearButton = demo.querySelector("[data-demo-order-clear]");
      const inputs = Array.from(demo.querySelectorAll('input[type="checkbox"]'));

      if (!controls || !result || !status || !clearButton || !inputs.length) return;

      const products = inputs.map((input) => ({
        id: input.value,
        name: input.dataset.name,
        price: Number(input.dataset.price)
      }));

      function formatPrice(value) {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      }

      function updateOrder() {
        let quantity = 0;
        let total = 0;

        for (const input of inputs) {
          if (!input.checked) continue;
          const product = products.find((item) => item.id === input.value);
          if (!product) continue;
          quantity += 1;
          total += product.price;
        }

        status.textContent = quantity === 0
          ? "Nenhum produto selecionado."
          : `${quantity} ${quantity === 1 ? "item" : "itens"} — ${formatPrice(total)}`;
        clearButton.disabled = quantity === 0;
      }

      inputs.forEach((input) => input.addEventListener("change", updateOrder));
      clearButton.addEventListener("click", () => {
        inputs.forEach((input) => { input.checked = false; });
        updateOrder();
      });

      controls.hidden = false;
      result.hidden = false;
      updateOrder();
    });

    document.querySelectorAll("[data-js-demo-fetch]").forEach((demo) => {
      const loadButton = demo.querySelector("[data-demo-fetch-load]");
      const status = demo.querySelector("[data-demo-fetch-status]");
      const productsArea = demo.querySelector("[data-demo-fetch-products]");

      if (!loadButton || !status || !productsArea) return;

      function createProductCard(product) {
        const card = document.createElement("article");
        const image = document.createElement("img");
        const title = document.createElement("h5");
        const description = document.createElement("p");
        const price = document.createElement("strong");

        image.src = `../../img/programacao-web/${product.imagem}`;
        image.alt = product.alt;
        image.width = 1536;
        image.height = 1024;
        image.loading = "lazy";
        title.textContent = product.nome;
        description.textContent = `${product.descricao} `;
        price.textContent = product.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });

        description.append(price);
        card.append(image, title, description);
        return card;
      }

      loadButton.addEventListener("click", async () => {
        loadButton.disabled = true;
        status.textContent = "Carregando produtos...";

        try {
          const response = await fetch("../../downloads/programacao-web/produtos-cafe-aurora.json");
          if (!response.ok) throw new Error(`Falha HTTP: ${response.status}`);

          const products = await response.json();
          if (!Array.isArray(products) || products.length === 0) {
            throw new TypeError("A resposta não contém uma lista válida.");
          }

          const fragment = document.createDocumentFragment();
          products.forEach((product) => fragment.append(createProductCard(product)));
          productsArea.replaceChildren(fragment);
          productsArea.hidden = false;
          status.textContent = `Carregamento concluído: ${products.length} produtos.`;
          loadButton.textContent = "Carregar novamente";
        } catch (error) {
          console.error("Falha na demonstração de Fetch:", error);
          status.textContent = "Não foi possível carregar os dados. Tente novamente.";
        } finally {
          loadButton.disabled = false;
        }
      });
    });

    document.querySelectorAll("[data-js-demo-storage]").forEach((demo) => {
      const inputs = Array.from(demo.querySelectorAll('input[type="checkbox"]'));
      const result = demo.querySelector("[data-demo-storage-result]");
      const status = demo.querySelector("[data-demo-storage-status]");
      const saveButton = demo.querySelector("[data-demo-storage-save]");
      const clearButton = demo.querySelector("[data-demo-storage-clear]");
      const storageKey = "mbb:web1:pedido-demo-v1";

      if (!inputs.length || !result || !status || !saveButton || !clearButton) return;

      function formatPrice(value) {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      }

      function selectedIds() {
        return inputs.filter((input) => input.checked).map((input) => input.value);
      }

      function updateResult() {
        const selected = inputs.filter((input) => input.checked);
        const total = selected.reduce((sum, input) => sum + Number(input.dataset.price), 0);
        result.textContent = selected.length === 0
          ? "Nenhum produto selecionado."
          : `${selected.length} ${selected.length === 1 ? "item" : "itens"} — ${formatPrice(total)}`;
      }

      function restoreOrder() {
        try {
          const stored = localStorage.getItem(storageKey);
          if (!stored) return;

          const ids = JSON.parse(stored);
          const isValid = Array.isArray(ids) && ids.every((id) => typeof id === "string");
          if (!isValid) throw new TypeError("Formato de pedido inválido.");

          inputs.forEach((input) => { input.checked = ids.includes(input.value); });
          status.textContent = "Pedido anterior restaurado neste exemplo.";
        } catch (error) {
          console.error("Falha ao restaurar a demonstração de Web Storage:", error);
          status.textContent = "O pedido salvo não pôde ser lido. Faça uma nova seleção.";
        }
      }

      inputs.forEach((input) => input.addEventListener("change", updateResult));

      saveButton.addEventListener("click", () => {
        const ids = selectedIds();
        try {
          if (ids.length === 0) {
            localStorage.removeItem(storageKey);
            status.textContent = "Nenhum pedido salvo neste navegador.";
          } else {
            localStorage.setItem(storageKey, JSON.stringify(ids));
            status.textContent = "Pedido salvo. Recarregue a página para testar.";
          }
        } catch (error) {
          console.error("Falha ao salvar a demonstração de Web Storage:", error);
          status.textContent = "A seleção funciona, mas o navegador não permitiu salvá-la.";
        }
      });

      clearButton.addEventListener("click", () => {
        inputs.forEach((input) => { input.checked = false; });
        updateResult();
        try {
          localStorage.removeItem(storageKey);
          status.textContent = "Seleção e pedido salvo foram removidos.";
        } catch (error) {
          console.error("Falha ao limpar a demonstração de Web Storage:", error);
          status.textContent = "A seleção foi limpa, mas o dado salvo não pôde ser removido.";
        }
      });

      restoreOrder();
      updateResult();
    });

    document.querySelectorAll("[data-js-demo-release]").forEach((checklist) => {
      const items = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
      const status = checklist.querySelector("[data-demo-release-status]");

      if (!items.length || !status) return;

      function updateReleaseProgress() {
        const completed = items.filter((item) => item.checked).length;
        status.textContent = completed === items.length
          ? `${completed} de ${items.length} verificações concluídas. Faça a conferência final antes de publicar.`
          : `${completed} de ${items.length} verificações concluídas.`;
      }

      items.forEach((item) => item.addEventListener("change", updateReleaseProgress));
      updateReleaseProgress();
    });
  }

  function chapterFromHash() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return chapters[0].id; }
    const alvo = document.getElementById(id);
    return alvo?.closest('[data-chapter]')?.id || (chapterIds.has(id) ? id : chapters[0].id);
  }

  function abrirDestinoDaUrl() {
    const capitulo = chapterFromHash();
    showChapter(capitulo);
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    if (id && id !== capitulo) {
      const alvo = document.getElementById(id);
      if (alvo?.closest('[data-chapter]')?.id === capitulo) {
        requestAnimationFrame(() => alvo.scrollIntoView({ block: 'start' }));
      }
    }
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function keepActiveChapterVisible(activeLink) {
    if (!chapterMenu || !activeLink || window.innerWidth > 1050) return;

    const menuRect = chapterMenu.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const isOutside = linkRect.left < menuRect.left + 8 || linkRect.right > menuRect.right - 8;

    if (isOutside) {
      const targetLeft = activeLink.offsetLeft - (chapterMenu.clientWidth - activeLink.offsetWidth) / 2;
      chapterMenu.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    }
  }

  function showChapter(id, options = {}) {
    const activeId = chapterIds.has(id) ? id : chapters[0].id;
    const activeChapter = chapters.find((chapter) => chapter.id === activeId);
    let activeMenuLink = null;

    chapters.forEach((chapter) => {
      chapter.hidden = chapter.id !== activeId;
    });

    links.forEach((link) => {
      const isActive = link.dataset.chapterLink === activeId;
      link.classList.toggle("active", isActive);
      if (isActive && link.classList.contains("chapter-link")) {
        link.setAttribute("aria-current", "location");
        activeMenuLink = link;
      } else {
        link.removeAttribute("aria-current");
      }
    });

    keepActiveChapterVisible(activeMenuLink);

    const chapterNumber = activeId.replace("capitulo-", "");
    document.title = `${moduleTitle} — Capítulo ${chapterNumber} | Mundo bit Byte`;

    if (options.resetScroll) {
      if (content && window.innerWidth > 1050) {
        content.scrollTo({ top: 0, behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }

    if (options.focus) {
      window.setTimeout(() => {
        activeChapter.querySelector("h2")?.focus({ preventScroll: true });
      }, 180);
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.dataset.chapterLink;
      if (!chapterIds.has(id)) return;

      event.preventDefault();
      if (window.location.hash !== `#${id}`) {
        window.history.pushState({ chapter: id }, "", `#${id}`);
      }
      showChapter(id, { resetScroll: true, focus: true });
    });
  });

  window.addEventListener("popstate", abrirDestinoDaUrl);
  window.addEventListener("hashchange", abrirDestinoDaUrl);

  page.classList.add("js-ready");
  setupCopyButtons();
  setupDemoForms();
  setupChapter10CheckpointNote();
  setupJavaScriptDemos();
  abrirDestinoDaUrl();
}());

(() => {
  'use strict';

  const STYLE_ID = 'mbb-programacao-web-acoes-style';
  const ACTION_CLASS = 'mbb-programacao-web-action-key';
  const ACTION_RE = /\b(Não\s+(?:altere|apague|confunda|copie|execute|ignore|instale|publique|use)|Agora\s+(?:analise|compare|execute|teste)|Abra|Acesse|Adicione|Altere|Analise|Anote|Atualize|Clique|Compare|Confira|Configure|Copie|Cole|Crie|Defina|Descreva|Digite|Escolha|Execute|Explique|Faça|Identifique|Inspecione|Instale|Leia|Localize|Observe|Organize|Procure|Publique|Recarregue|Registre|Renomeie|Salve|Selecione|Teste|Troque|Use|Valide|Verifique)\b/i;

  function garantirEstilo() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `.${ACTION_CLASS}{font-weight:800!important;color:#123b73}`;
    document.head.appendChild(style);
  }

  function destacarPrimeiraAcao(root) {
    if (!root || root.querySelector?.(`.${ACTION_CLASS}`)) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
      const parent = node.parentElement;
      if (!parent || parent.closest([
        'strong','b','code','pre','script','style','button','input','select','option','textarea','label','kbd','samp','a','svg','figure','table','form',
        '.code-block-wrap','[data-js-demo-filter]','[data-js-demo-counter]','[data-js-demo-order]','[data-js-demo-fetch]','[data-js-demo-storage]','[data-js-demo-release]','[data-demo-form]'
      ].join(','))) {
        node = walker.nextNode();
        continue;
      }

      const text = node.nodeValue || '';
      const match = text.match(ACTION_RE);
      if (match && typeof match.index === 'number') {
        const fragment = document.createDocumentFragment();
        const before = text.slice(0, match.index);
        const action = match[0];
        const after = text.slice(match.index + action.length);
        if (before) fragment.appendChild(document.createTextNode(before));
        const strong = document.createElement('strong');
        strong.className = ACTION_CLASS;
        strong.textContent = action;
        fragment.appendChild(strong);
        if (after) fragment.appendChild(document.createTextNode(after));
        node.replaceWith(fragment);
        return;
      }

      node = walker.nextNode();
    }
  }

  function aplicarDestaques() {
    garantirEstilo();
    document.querySelectorAll([
      '.web-content .task-box p',
      '.web-content .task-box li',
      '.web-content .checkpoint-box p',
      '.web-content .checkpoint-box li',
      '.web-content .chapter section > ol > li',
      '.web-content .chapter section > p',
      '.web-content .chapter details summary'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  aplicarDestaques();
})();
