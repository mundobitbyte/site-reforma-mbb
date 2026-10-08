// Prática local: reutiliza os clientes existentes; nunca repete um POST.
import { consultarProdutos, consultarPedido } from './07-consulta.mjs';
import { registrarPedido } from './08-pedido.mjs';
import { avancarPedido } from './09-estados.mjs';
const [acao, argumento, base = 'http://127.0.0.1:8001'] = process.argv.slice(2);
try {
  let resultado;
  if (acao === 'produtos') resultado = await consultarProdutos(base);
  else if (acao === 'registrar') {
    resultado = await registrarPedido(base, [{ produto_id: 1, quantidade: 2 }]);
  } else if (['consultar', 'avancar', 'conflito'].includes(acao)) {
    const pedido = await consultarPedido(base, Number(argumento));
    if (acao === 'consultar') resultado = pedido;
    else if (acao === 'avancar') resultado = await avancarPedido(base, pedido);
    else {
      // Simula uma tela antiga, depois do primeiro avanço de Novo.
      if (pedido.status !== 'Confirmado') throw new Error('Execute conflito somente após Novo → Confirmado.');
      resultado = await avancarPedido(base, { ...pedido, status: 'Novo', proximo_status: 'Confirmado' });
    }
  } else throw new Error('Use produtos, registrar, consultar ID, avancar ID ou conflito ID.');
  console.log(JSON.stringify(resultado, null, 2));
} catch (erro) {
  console.error(erro.status ? `HTTP ${erro.status}: ${erro.message}` : erro.message);
  process.exitCode = 1;
}
