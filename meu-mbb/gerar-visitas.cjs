// Índice pequeno para reconhecer páginas catalogadas sem carregar a pesquisa inteira.
const fs = require('node:fs');
const path = require('node:path');

const catalogo = require('./catalogo.json');
const paginas = {};
for (const unidade of catalogo.unidades) {
  if (!['ativo', 'atualizado', 'movido'].includes(unidade.status)) continue;
  const pagina = unidade.localizacao_atual.split('#')[0];
  // O piloto Git já registra a etapa exibida, e uma visita à página não a identifica.
  if (pagina === 'pages/git.html') continue;
  if (paginas[pagina]) throw new Error(`Mais de uma unidade para ${pagina}`);
  paginas[pagina] = {
    conteudo_id: unidade.conteudo_id,
    titulo: unidade.titulo,
    versao_conteudo: unidade.versao_conteudo,
    localizacao_atual: unidade.localizacao_atual,
    ancoras: [...new Set((unidade.topicos_busca || []).map(topico => topico.ancora))]
  };
}
const destino = path.join(__dirname, 'visitas-diretas.json');
const conteudo = JSON.stringify(paginas, null, 2) + '\n';
if (process.argv.includes('--check')) {
  if (!fs.existsSync(destino) || fs.readFileSync(destino, 'utf8') !== conteudo) {
    console.error('Índice de visitas diretas desatualizado.');
    process.exitCode = 1;
  }
} else {
  fs.writeFileSync(destino, conteudo);
  console.log(`Índice de visitas diretas: ${Object.keys(paginas).length} páginas.`);
}
