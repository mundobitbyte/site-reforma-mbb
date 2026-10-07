// Cliente de exercício: a regra e a gravação continuam no serviço Cantina.
export async function solicitar(base, caminho, opcoes = {}) {
  let resposta;
  try {
    resposta = await fetch(new URL(`/api/${caminho}`, base), opcoes);
  } catch {
    throw new Error('Falha de comunicação. Este cliente não confirmou o resultado; não reenvie uma venda automaticamente.');
  }
  let dados;
  try {
    dados = await resposta.json();
  } catch {
    const erro = new Error('O servidor não devolveu JSON válido para esta operação.');
    erro.status = resposta.status;
    throw erro;
  }
  if (!resposta.ok) {
    const erro = new Error(dados.detail || 'A operação foi recusada pelo servidor.');
    erro.status = resposta.status;
    throw erro;
  }
  return dados;
}
