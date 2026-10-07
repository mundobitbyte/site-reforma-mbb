(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("demo") !== "1") return;

  const produtos = [
    { id: 1, nome: "Água", preco: 3.00, estoque: 20 },
    { id: 2, nome: "Suco", preco: 6.00, estoque: 15 },
    { id: 3, nome: "Salgado", preco: 8.00, estoque: 10 },
    { id: 4, nome: "Sanduíche", preco: 12.00, estoque: 8 },
    { id: 5, nome: "Chocolate", preco: 5.00, estoque: 12 },
  ];
  let proximoPedido = 1;

  function resposta(status, dados) {
    return {
      ok: status >= 200 && status < 300,
      status,
      async json() { return structuredClone(dados); },
    };
  }

  window.cantinaApiFetch = async (url, options = {}) => {
    if (url === "/api/produtos" && (!options.method || options.method === "GET")) {
      return resposta(200, produtos);
    }

    if (url === "/api/pedidos" && options.method === "POST") {
      const entrada = JSON.parse(options.body || "{}");
      const itens = Array.isArray(entrada.itens) ? entrada.itens : [];
      if (!itens.length) return resposta(400, { detail: "Pedido sem itens." });

      let subtotal = 0;
      for (const item of itens) {
        const produto = produtos.find((p) => p.id === item.produto_id);
        if (!produto) return resposta(404, { detail: "Produto não encontrado." });
        if (item.quantidade > 10) return resposta(400, { detail: "Quantidade inválida." });
        subtotal += produto.preco * item.quantidade;
      }

      subtotal = Math.round(subtotal * 100) / 100;
      const desconto = String(entrada.cupom || "").toUpperCase() === "MBB10"
        ? Math.round(subtotal * 10) / 100
        : 0;
      const total = Math.round((subtotal - desconto) * 100) / 100;

      for (const item of itens) {
        const produto = produtos.find((p) => p.id === item.produto_id);
        produto.estoque -= item.quantidade;
      }

      return resposta(201, {
        id: proximoPedido++,
        subtotal,
        desconto,
        total,
        cupom: entrada.cupom || null,
        status: "Novo",
      });
    }

    return resposta(404, { detail: "Recurso não encontrado." });
  };
})();
