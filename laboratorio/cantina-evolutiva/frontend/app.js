'use strict';
const estado = { produtos: [], carrinho: [], enviando: false, consultado: null, consultando: false, alterando: false, versaoConsulta: 0 };
const moeda = centavos => (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const $ = seletor => document.querySelector(seletor);

function avisar(texto, erro = false) {
  $('#mensagem').textContent = texto;
  $('#mensagem').className = `mensagem ${erro ? 'erro' : 'ok'}`;
}

function recuperarFoco(origem, destino = origem) {
  // Só recupera o foco desta ação; não interrompe quem escolheu outro controle.
  if ((document.activeElement === origem || document.activeElement === document.body)
      && destino && !destino.disabled) destino.focus();
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
  const focoAnterior = area.contains(document.activeElement)
    ? { id: document.activeElement.id, valor: document.activeElement.value } : null;
  area.replaceChildren();
  for (const produto of produtos) {
    const node = $('#produtoTemplate').content.cloneNode(true);
    node.querySelector('.nome').textContent = produto.nome;
    node.querySelector('.estoque').textContent = `Estoque: ${produto.estoque}`;
    node.querySelector('.preco').textContent = moeda(produto.preco_centavos);
    const input = node.querySelector('.quantidade');
    const botao = node.querySelector('.adicionar');
    input.id = `quantidade-${produto.id}`;
    botao.id = `adicionar-${produto.id}`;
    input.setAttribute('aria-label', `Quantidade de ${produto.nome}`);
    botao.setAttribute('aria-label', `Adicionar ${produto.nome} ao pedido`);
    botao.disabled = produto.estoque === 0;
    botao.addEventListener('click', () => {
      if (estado.enviando) return;
      const quantidade = Number(input.value);
      const existente = estado.carrinho.find(item => item.produto.id === produto.id);
      const total = quantidade + (existente?.quantidade || 0);
      if (!Number.isInteger(quantidade) || quantidade < 1 || total > 10) {
        avisar('A quantidade total de cada produto deve ser inteira entre 1 e 10.', true);
        input.focus();
        return;
      }
      if (total > produto.estoque) {
        avisar(`Estoque insuficiente para ${produto.nome}.`, true);
        input.focus();
        return;
      }
      if (existente) existente.quantidade = total;
      else estado.carrinho.push({ produto, quantidade });
      renderizarCarrinho();
      avisar(`${produto.nome} adicionado ao pedido.`);
    });
    area.appendChild(node);
  }
  if (focoAnterior) {
    let destino = document.getElementById(focoAnterior.id);
    if (destino?.disabled) {
      destino = document.getElementById(focoAnterior.id.replace('adicionar-', 'quantidade-'));
    }
    if (destino) {
      if (focoAnterior.id.startsWith('quantidade-')) destino.value = focoAnterior.valor;
      destino.focus();
    }
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
      const destino = area.querySelector('.remover') || $('#cupom');
      destino.focus();
      avisar(`Produto removido do pedido: ${item.produto.nome}.`);
    });
    row.append(detalhe, remover);
    area.appendChild(row);
  }
  $('#total').textContent = moeda(estado.carrinho.reduce((total, item) => total + item.quantidade * item.produto.preco_centavos, 0));
}

async function registrarPedido() {
  if (estado.enviando) return;
  if (!estado.carrinho.length) return avisar('Adicione ao menos um produto ao pedido.', true);
  const origemFoco = $('#finalizar');
  let destinoFoco = origemFoco;
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
    estado.versaoConsulta++;
    mostrarPedido(pedido);
    destinoFoco = $('#consulta-resultado');
    avisar(`Pedido #${pedido.id} registrado. Desconto: ${moeda(pedido.desconto_centavos)}. Total: ${moeda(pedido.total_centavos)}. Estado: ${pedido.status}.`);
    try { await carregarProdutos(); }
    catch { avisar(`Pedido #${pedido.id} registrado. A atualização do cardápio falhou; use Atualizar estoque.`, true); }
  } catch (erro) {
    avisar(erro.message || 'Não foi possível conversar com o servidor.', true);
  } finally {
    estado.enviando = false;
    $('#finalizar').disabled = false;
    recuperarFoco(origemFoco, destinoFoco);
  }
}

$('#finalizar').addEventListener('click', registrarPedido);
$('#recarregar').addEventListener('click', () => carregarProdutos().catch(erro => avisar(erro.message, true)));

function controlesConsulta() {
  const ocupado = estado.consultando || estado.alterando;
  $('#pedido-id').disabled = ocupado;
  $('#consultar').disabled = ocupado;
  $('#avancar').disabled = ocupado || !estado.consultado?.proximo_status;
}

function mostrarPedido(pedido) {
  estado.consultado = pedido;
  $('#consulta-resultado').textContent = `Pedido #${pedido.id} — ${pedido.status} — ${moeda(pedido.total_centavos)}. ` + pedido.itens.map(item => `${item.quantidade} × ${item.nome}`).join('; ');
  $('#acompanhamento').hidden = false;
  $('#avancar').textContent = pedido.proximo_status ? `Avançar para ${pedido.proximo_status}` : 'Pedido entregue';
  const lista = $('#historico');
  lista.replaceChildren();
  if (!pedido.historico_status.length) {
    const item = document.createElement('li');
    item.textContent = 'Nenhuma mudança registrada nesta evolução.';
    lista.appendChild(item);
  }
  for (const evento of pedido.historico_status) {
    const item = document.createElement('li');
    const data = new Date(evento.alterado_em.replace(' ', 'T') + 'Z').toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    item.textContent = `${evento.estado_anterior} → ${evento.estado_novo} — ${data}`;
    lista.appendChild(item);
  }
  controlesConsulta();
}

function limparConsulta() {
  estado.consultado = null;
  estado.versaoConsulta++;
  $('#acompanhamento').hidden = true;
  controlesConsulta();
}

$('#pedido-id').addEventListener('input', () => {
  limparConsulta();
  $('#consulta-resultado').textContent = '';
});
$('#form-consulta').addEventListener('submit', async evento => {
  evento.preventDefault();
  if (estado.consultando || estado.alterando) return;
  const origemFoco = document.activeElement === $('#pedido-id') ? $('#pedido-id') : $('#consultar');
  const id = Number($('#pedido-id').value);
  limparConsulta();
  if (!Number.isInteger(id) || id < 1) {
    $('#consulta-resultado').textContent = 'Informe um número de pedido inteiro positivo.';
    $('#pedido-id').focus();
    return;
  }
  const versao = estado.versaoConsulta;
  estado.consultando = true;
  controlesConsulta();
  try {
    const pedido = await api(`pedidos/${id}`);
    if (versao === estado.versaoConsulta) mostrarPedido(pedido);
  } catch (erro) {
    if (versao === estado.versaoConsulta) $('#consulta-resultado').textContent = erro.message;
  } finally {
    estado.consultando = false;
    controlesConsulta();
    if (versao === estado.versaoConsulta) recuperarFoco(origemFoco, $('#consulta-resultado'));
  }
});

$('#avancar').addEventListener('click', async () => {
  const pedido = estado.consultado;
  if (estado.alterando || estado.consultando || !pedido?.proximo_status) return;
  const versao = estado.versaoConsulta;
  let versaoParaFoco = versao;
  let destinoFoco = $('#avancar');
  estado.alterando = true;
  controlesConsulta();
  try {
    const atualizado = await api(`pedidos/${pedido.id}/status`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: pedido.proximo_status, estado_esperado: pedido.status }),
    });
    if (versao === estado.versaoConsulta) {
      mostrarPedido(atualizado);
      if (!atualizado.proximo_status) destinoFoco = $('#consulta-resultado');
    }
  } catch (erro) {
    if (versao === estado.versaoConsulta) {
      limparConsulta();
      $('#consulta-resultado').textContent = erro.message + ' Consulte o pedido para conferir o estado salvo.';
      destinoFoco = $('#consulta-resultado');
      versaoParaFoco = estado.versaoConsulta;
    }
  } finally {
    estado.alterando = false;
    controlesConsulta();
    if (versaoParaFoco === estado.versaoConsulta) recuperarFoco($('#avancar'), destinoFoco);
  }
});
carregarProdutos().catch(erro => avisar(erro.message, true));
renderizarCarrinho();
