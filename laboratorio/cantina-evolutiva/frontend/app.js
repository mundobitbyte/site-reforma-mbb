'use strict';
const estado = { produtos: [], carrinho: [], enviando: false };
const moeda = centavos => (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const $ = seletor => document.querySelector(seletor);

function avisar(texto, erro = false) {
  $('#mensagem').textContent = texto;
  $('#mensagem').className = `mensagem ${erro ? 'erro' : 'ok'}`;
}

async function api(caminho, opcoes) {
  let resposta;
  try { resposta = await fetch(new URL(`./api/${caminho}`, location.href), opcoes); }
  catch { throw new Error('Não foi possível conversar com o servidor.'); }
  const dados = await resposta.json();
  if (!resposta.ok) throw new Error(dados.detail || 'Não foi possível concluir a operação.');
  return dados;
}

async function carregarProdutos() {
  const produtos = await api('produtos');
  estado.produtos = produtos;
  const area = $('#produtos');
  area.replaceChildren();
  for (const produto of produtos) {
    const node = $('#produtoTemplate').content.cloneNode(true);
    node.querySelector('.nome').textContent = produto.nome;
    node.querySelector('.estoque').textContent = `Estoque: ${produto.estoque}`;
    node.querySelector('.preco').textContent = moeda(produto.preco_centavos);
    const input = node.querySelector('.quantidade');
    const botao = node.querySelector('.adicionar');
    botao.disabled = produto.estoque === 0;
    botao.addEventListener('click', () => {
      if (estado.enviando) return;
      const quantidade = Number(input.value);
      const existente = estado.carrinho.find(item => item.produto.id === produto.id);
      const total = quantidade + (existente?.quantidade || 0);
      if (!Number.isInteger(quantidade) || quantidade < 1 || total > 10) {
        avisar('A quantidade total de cada produto deve ser inteira entre 1 e 10.', true);
        return;
      }
      if (total > produto.estoque) {
        avisar(`Estoque insuficiente para ${produto.nome}.`, true);
        return;
      }
      if (existente) existente.quantidade = total;
      else estado.carrinho.push({ produto, quantidade });
      renderizarCarrinho();
      avisar(`${produto.nome} adicionado ao pedido.`);
    });
    area.appendChild(node);
  }
}

function renderizarCarrinho() {
  const area = $('#itensCarrinho');
  area.replaceChildren();
  area.className = estado.carrinho.length ? '' : 'itens-vazios';
  if (!estado.carrinho.length) area.textContent = 'Nenhum item adicionado.';
  for (const item of estado.carrinho) {
    const row = document.createElement('div');
    row.className = 'item-carrinho';
    const detalhe = document.createElement('div');
    detalhe.textContent = `${item.produto.nome}: ${item.quantidade} × ${moeda(item.produto.preco_centavos)}`;
    const remover = document.createElement('button');
    remover.textContent = 'Remover';
    remover.className = 'remover';
    remover.setAttribute('aria-label', `Remover ${item.produto.nome}`);
    remover.addEventListener('click', () => {
      if (estado.enviando) return;
      estado.carrinho = estado.carrinho.filter(atual => atual !== item);
      renderizarCarrinho();
    });
    row.append(detalhe, remover);
    area.appendChild(row);
  }
  $('#total').textContent = moeda(estado.carrinho.reduce((total, item) => total + item.quantidade * item.produto.preco_centavos, 0));
}

async function registrarPedido() {
  if (estado.enviando) return;
  if (!estado.carrinho.length) return avisar('Adicione ao menos um produto ao pedido.', true);
  estado.enviando = true;
  $('#finalizar').disabled = true;
  try {
    const pedido = await api('pedidos', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itens: estado.carrinho.map(item => ({ produto_id: item.produto.id, quantidade: item.quantidade })), cupom: $('#cupom').value.trim() || null }),
    });
    estado.carrinho = [];
    $('#cupom').value = '';
    renderizarCarrinho();
    $('#pedido-id').value = pedido.id;
    avisar(`Pedido #${pedido.id} registrado. Desconto: ${moeda(pedido.desconto_centavos)}. Total: ${moeda(pedido.total_centavos)}. Estado: ${pedido.status}.`);
    try { await carregarProdutos(); }
    catch { avisar(`Pedido #${pedido.id} registrado. A atualização do cardápio falhou; use Atualizar estoque.`, true); }
  } catch (erro) {
    avisar(erro.message || 'Não foi possível conversar com o servidor.', true);
  } finally {
    estado.enviando = false;
    $('#finalizar').disabled = false;
  }
}

$('#finalizar').addEventListener('click', registrarPedido);
$('#recarregar').addEventListener('click', () => carregarProdutos().catch(erro => avisar(erro.message, true)));
$('#form-consulta').addEventListener('submit', async evento => {
  evento.preventDefault();
  const id = Number($('#pedido-id').value);
  if (!Number.isInteger(id) || id < 1) {
    $('#consulta-resultado').textContent = 'Informe um número de pedido inteiro positivo.';
    return;
  }
  try {
    const pedido = await api(`pedidos/${id}`);
    $('#consulta-resultado').textContent = `Pedido #${pedido.id} — ${pedido.status} — ${moeda(pedido.total_centavos)}. ` + pedido.itens.map(item => `${item.quantidade} × ${item.nome}`).join('; ');
  } catch (erro) { $('#consulta-resultado').textContent = erro.message; }
});
carregarProdutos().catch(erro => avisar(erro.message, true));
renderizarCarrinho();
