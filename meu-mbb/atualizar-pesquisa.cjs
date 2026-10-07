// Atualiza o texto pesquisável dentro do catálogo pedagógico único.
// IDs, versões e localizações são editados no catálogo, nunca derivados aqui.
// Uso: node meu-mbb/atualizar-pesquisa.cjs [--check]
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const raiz = path.resolve(__dirname, '..');
const arquivo = path.join(__dirname, 'catalogo.json');
const catalogo = JSON.parse(fs.readFileSync(arquivo, 'utf8'));

function limpar(html, limite = 12000) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/\s+/g, ' ').trim().slice(0, limite);
}

const fonteGit = fs.readFileSync(path.join(raiz, 'js/git-conteudo-canonico.js'), 'utf8');
const fonteExercicios = fs.readFileSync(path.join(raiz, 'js/git-exercicios-canonico.js'), 'utf8');
const fonteComandos = fs.readFileSync(path.join(raiz, 'js/git-comandos-canonico.js'), 'utf8');
const conjuntosGit = {
  git: vm.runInNewContext(`${fonteGit}\ngitSteps`),
  github: vm.runInNewContext(`${fonteGit}\ngithubSteps`),
  exercicios: vm.runInNewContext(`${fonteExercicios}\nexerciseSteps`),
  comandos: vm.runInNewContext(`${fonteComandos}\ncommandSteps`)
};
const textoGit = new Map(Object.entries(conjuntosGit).flatMap(([grupo, etapas]) =>
  etapas.map(etapa => [`pages/git.html#${grupo}-${etapa.id}`, limpar(`${etapa.objective} ${etapa.content}`)])));

function vocabulario(texto, limite = Infinity) {
  const palavras = texto.match(/[\p{L}\p{N}_+#.-]{3,}/gu) || [];
  const vocabularioCompleto = Array.from(new Set(palavras)).join(' ');
  return Number.isFinite(limite) ? vocabularioCompleto.slice(0, limite) : vocabularioCompleto;
}

function textoPagina(localizacao) {
  const relativo = localizacao.split('#')[0];
  if (!/^[a-z0-9/_-]+\.html$/.test(relativo)) throw new Error(`Localização inválida: ${localizacao}`);
  const caminho = path.resolve(raiz, relativo);
  if (!caminho.startsWith(raiz + path.sep) || !fs.existsSync(caminho)) throw new Error(`Página ausente: ${relativo}`);
  const html = fs.readFileSync(caminho, 'utf8');
  const texto = limpar(html, Infinity);
  const scripts = Array.from(html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi), item => item[1].split('?')[0])
    .filter(src => !/^(?:https?:|\/)/.test(src))
    .map(src => path.resolve(path.dirname(caminho), src))
    .filter(src => src.startsWith(path.join(raiz, 'js') + path.sep) && fs.existsSync(src))
    .filter(src => !/visualizador|destaques|ajustes|navegacao|limpeza-editorial|integracao|mbb-busca-global/i.test(path.basename(src)));
  const fonte = scripts.map(src => fs.readFileSync(src, 'utf8')).join(' ');
  // Mantém texto corrido no início para relevância e inclui todo o vocabulário único
  // do restante da página e dos scripts. Assim páginas grandes não criam pontos cegos.
  return [texto.slice(0, 40000), vocabulario(texto.slice(40000)), vocabulario(fonte)]
    .filter(Boolean).join(' ');
}

// Tópicos são destinos dentro da unidade existente; não recebem IDs de progresso.
// O vocabulário vem do trecho real entre títulos/seções, sem lista manual de palavras.
function textoTopico(html, ancora) {
  const marcador = new RegExp(`<((?:h2)|(?:section))\\b[^>]*\\bid=["']${ancora}["'][^>]*>`, 'i');
  const inicio = marcador.exec(html);
  if (!inicio) throw new Error(`Âncora de tópico ausente: ${ancora}`);
  const restante = html.slice(inicio.index + inicio[0].length);
  const fim = inicio[1].toLowerCase() === 'h2'
    ? /<h2\b/i.exec(restante)
    : /<section\s+class=["']project["']\s+id=/i.exec(restante);
  return limpar(inicio[0] + restante.slice(0, fim?.index ?? restante.length), 12000);
}

function tituloHtml(html) { return limpar(html, 180).replace(/\s+/g, ' ').trim(); }
function slug(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 65);
}

// Destinos de pesquisa seguem os títulos pedagógicos reais; não são IDs de progresso.
// A etapa de Git continua sendo a unidade permanente do piloto.
function topicosBanco(html) {
  const modulos = [...html.matchAll(/<section\b[^>]*class=["'][^"']*\bmodule\b[^"']*["'][^>]*id=["'](mod-[^"']+)["'][^>]*>/gi)];
  const topicos = [];
  for (let i = 0; i < modulos.length; i++) {
    const modulo = modulos[i][1];
    if (modulo === 'mod-inicio' || modulo === 'mod-exercicios') continue;
    const corpo = html.slice(modulos[i].index, modulos[i + 1]?.index ?? html.length);
    const titulos = [...corpo.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi)];
    const repetidos = new Map();
    for (let j = 0; j < titulos.length; j++) {
      const titulo = tituloHtml(titulos[j][2]);
      if (!titulo || titulo.length > 125) continue;
      const existente = /\bid=["']([^"']+)["']/i.exec(titulos[j][1])?.[1];
      const base = `bd-topico-${modulo.slice(4)}-${slug(titulo)}`;
      const vezes = (repetidos.get(base) || 0) + 1;
      repetidos.set(base, vezes);
      const ancora = existente || `${base}${vezes > 1 ? `-${vezes}` : ''}`;
      const trecho = corpo.slice(titulos[j].index, titulos[j + 1]?.index ?? corpo.length);
      topicos.push({ titulo, ancora, texto_busca: limpar(trecho, 2200) });
    }
  }
  return topicos;
}

function topicosReactNative() {
  const fonte = fs.readFileSync(path.join(raiz, 'js/reactnative.js'), 'utf8');
  const inicio = fonte.split('    let currentModuleKey')[0];
  if (inicio === fonte) throw new Error('Não foi possível ler as etapas de React Native');
  const modulos = vm.runInNewContext(`${inicio}\nmodules`, {}, { timeout: 5000 });
  return Object.entries(modulos).flatMap(([chave, modulo]) => modulo.steps.map(etapa => ({
    titulo: `${modulo.title} — ${etapa.title}`,
    ancora: `rn-${chave}-${etapa.id}`,
    texto_busca: limpar([etapa.title, etapa.objective, etapa.lead, etapa.added, etapa.note,
      etapa.highlight, etapa.html, etapa.code].filter(Boolean).join(' '), 3300)
  })));
}

function topicosNavegacao(html) {
  const ids = new Set([...html.matchAll(/<a\b[^>]*href=["']#([a-z0-9_-]+)["'][^>]*>/gi)].map(item => item[1]));
  const secoes = [...html.matchAll(/<section\b[^>]*\bid=["']([^"']+)["'][^>]*>/gi)]
    .filter(item => ids.has(item[1]));
  if (secoes.length < 3) return [];
  return secoes.map((secao, i) => {
    const trecho = html.slice(secao.index, secoes[i + 1]?.index ?? html.length);
    const titulo = tituloHtml(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/i.exec(trecho)?.[1] || '');
    return titulo ? { titulo, ancora: secao[1], texto_busca: limpar(trecho, 2600) } : null;
  }).filter(Boolean);
}

function topicosEstaticos(html, pagina) {
  const principal = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html)?.[1];
  if (!principal || /class=["'][^"']*\bmodule\b[^"']*["']/i.test(principal)) return [];
  const titulos = [...principal.matchAll(/<h[23]\b([^>]*)>([\s\S]*?)<\/h[23]>/gi)];
  if (titulos.length < 3) return [];
  return titulos.slice(0, 120).map((match, i) => {
    const titulo = tituloHtml(match[2]);
    let id = /\bid=["']([^"']+)["']/i.exec(match[1])?.[1];
    if (!id && /pages\/programacao-web\/web[12]\.html/.test(pagina)) {
      const capitulo = [...principal.slice(0, match.index).matchAll(/<article\b[^>]*class=["'][^"']*\bchapter\b[^"']*["'][^>]*id=["']([^"']+)["']/gi)].at(-1);
      id = capitulo?.[1];
    }
    const trecho = principal.slice(match.index, titulos[i + 1]?.index ?? principal.length);
    return titulo.length >= 5 && titulo.length <= 110 ? {
      titulo, ancora: id || `:~:text=${encodeURIComponent(titulo)}`,
      texto_busca: limpar(trecho, 1500)
    } : null;
  }).filter(Boolean);
}

function topicosGerados(unidade, html) {
  const pagina = unidade.localizacao_atual.split('#')[0];
  if (pagina === 'pages/bancodedados.html') return topicosBanco(html);
  if (pagina === 'pages/reactnative.html') return topicosReactNative();
  if (pagina === 'pages/arduino.html') {
    return [...html.matchAll(/<section\b[^>]*class=["']project["'][^>]*id=["']([^"']+)["'][^>]*>/gi)]
      .map(match => ({ ancora: match[1], titulo: tituloHtml(/<h2[^>]*>([\s\S]*?)<\/h2>/i.exec(html.slice(match.index))?.[1] || ''),
        texto_busca: textoTopico(html, match[1]) })).filter(item => item.titulo);
  }
  if (pagina.startsWith('pages/git.html')) return [];
  if (pagina === 'pages/appinventor.html' || pagina === 'pages/tia.html' ||
      pagina === 'pages/ia/fundamentos.html' || /^pages\/arduino-[^/]+\.html$/.test(pagina)) {
    return topicosNavegacao(html);
  }
  return topicosEstaticos(html, pagina);
}

let diferencas = 0;
for (const unidade of catalogo.unidades) {
  if (!unidade.localizacao_atual) continue;
  const texto = textoGit.get(unidade.localizacao_atual) || textoPagina(unidade.localizacao_atual);
  if (texto !== unidade.texto_busca) { diferencas++; unidade.texto_busca = texto; }
  if (unidade.localizacao_atual.endsWith('.html') && !unidade.localizacao_atual.includes('#')) {
    const html = fs.readFileSync(path.join(raiz, unidade.localizacao_atual.split('#')[0]), 'utf8');
    const gerados = topicosGerados(unidade, html);
    if (gerados.length && JSON.stringify(unidade.topicos_busca) !== JSON.stringify(gerados)) {
      diferencas++; unidade.topicos_busca = gerados;
    }
  }
}
if (process.argv.includes('--check')) {
  if (diferencas) { console.error(`${diferencas} unidade(s) com índice desatualizado.`); process.exitCode = 1; }
} else {
  fs.writeFileSync(arquivo, JSON.stringify(catalogo, null, 2) + '\n');
  console.log(`Índice atualizado no próprio catálogo: ${diferencas} unidade(s).`);
}
