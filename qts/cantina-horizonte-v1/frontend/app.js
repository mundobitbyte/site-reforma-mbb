const estado = {
  produtos: [],
  carrinho: [],
  cupom: "",
};

const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const apiFetch = window.cantinaApiFetch ?? ((...args) => fetch(...args));

async function carregarProdutos() {
  const resposta = await apiFetch("/api/produtos");
  if (!resposta.ok) throw new Error("Falha ao carregar produtos.");
  estado.produtos = await resposta.json();
  renderizarProdutos();
}

function renderizarProdutos() {
  const area = document.querySelector("#produtos");
  const template = document.querySelector("#produtoTemplate");
  area.innerHTML = "";

  estado.produtos.forEach((produto) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".nome").textContent = produto.nome;
    node.querySelector(".preco").textContent = moeda.format(produto.preco);
    node.querySelector(".estoque").textContent = `Estoque: ${produto.estoque}`;
    const input = node.querySelector(".quantidade");
    node.querySelector(".adicionar").addEventListener("click", () => {
      const quantidade = Number(input.value);
      adicionarAoCarrinho(produto, quantidade);
    });
    area.appendChild(node);
  });
}

function adicionarAoCarrinho(produto, quantidade) {
  const existente = estado.carrinho.find((item) => item.produto.id === produto.id);
  if (existente) existente.quantidade += quantidade;
  else estado.carrinho.push({ produto, quantidade });
  renderizarCarrinho();
}

function subtotalCarrinho() {
  return estado.carrinho.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
}

function descontoPrevisto() {
  return estado.cupom.toUpperCase() === "MBB10" ? subtotalCarrinho() * 0.10 : 0;
}

function renderizarCarrinho() {
  const area = document.querySelector("#itensCarrinho");
  if (!estado.carrinho.length) {
    area.className = "itens-vazios";
    area.textContent = "Nenhum item adicionado.";
  } else {
    area.className = "";
    area.innerHTML = "";
    estado.carrinho.forEach((item, indice) => {
      const row = document.createElement("div");
      row.className = "item-carrinho";
      row.innerHTML = `<div><strong>${item.produto.nome}</strong><small>${item.quantidade} × ${moeda.format(item.produto.preco)}</small></div>`;
      const remover = document.createElement("button");
      remover.className = "remover";
      remover.textContent = "Remover";
      remover.addEventListener("click", () => {
        estado.carrinho.splice(indice, 1);
        renderizarCarrinho();
      });
      row.appendChild(remover);
      area.appendChild(row);
    });
  }

  const subtotal = subtotalCarrinho();
  const desconto = descontoPrevisto();
  document.querySelector("#subtotal").textContent = moeda.format(subtotal);
  document.querySelector("#desconto").textContent = moeda.format(desconto);
  document.querySelector("#total").textContent = moeda.format(subtotal - desconto);
}

function aplicarCupom() {
  estado.cupom = document.querySelector("#cupom").value.trim();
  const msg = document.querySelector("#cupomMsg");
  if (estado.cupom.toUpperCase() === "MBB10") msg.textContent = "Cupom aplicado: 10% de desconto.";
  else if (estado.cupom) msg.textContent = "Cupom não reconhecido.";
  else msg.textContent = "";
  renderizarCarrinho();
}

async function finalizarPedido() {
  const mensagem = document.querySelector("#mensagem");
  mensagem.className = "mensagem";

  if (!estado.carrinho.length) {
    mensagem.textContent = "Adicione ao menos um produto antes de finalizar.";
    mensagem.classList.add("erro");
    return;
  }

  const payload = {
    itens: estado.carrinho.map((item) => ({ produto_id: item.produto.id, quantidade: item.quantidade })),
    cupom: estado.cupom || null,
  };

  try {
    const resposta = await apiFetch("/api/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const dados = await resposta.json();

    if (!resposta.ok) {
      mensagem.textContent = dados.detail || "Não foi possível finalizar o pedido.";
      mensagem.classList.add("erro");
      return;
    }

    mensagem.textContent = `Pedido #${dados.id} realizado com sucesso. Total: ${moeda.format(dados.total)}`;
    mensagem.classList.add("ok");
    estado.carrinho = [];
    estado.cupom = "";
    document.querySelector("#cupom").value = "";
    document.querySelector("#cupomMsg").textContent = "";
    renderizarCarrinho();
    await carregarProdutos();
  } catch {
    mensagem.textContent = "Não foi possível conversar com o servidor. Tente novamente.";
    mensagem.classList.add("erro");
  }
}

document.querySelector("#aplicarCupom").addEventListener("click", aplicarCupom);
document.querySelector("#finalizar").addEventListener("click", finalizarPedido);
document.querySelector("#recarregar").addEventListener("click", carregarProdutos);

carregarProdutos().catch(() => {
  document.querySelector("#produtos").textContent = "Não foi possível carregar os produtos.";
});
renderizarCarrinho();
