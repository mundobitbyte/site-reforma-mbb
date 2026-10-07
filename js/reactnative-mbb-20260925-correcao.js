// Correção de progressão MbB — evita usar recursos antes da necessidade.
(function () {
  if (typeof modules === 'undefined' || !modules.javascriptEssencial) return;

  const js = modules.javascriptEssencial;
  const intro = js.steps?.find(step => step.id === 'js-intro-mbb');
  if (intro) {
    intro.highlight =
      'Não vamos fazer um curso separado de JavaScript. Cada recurso entra porque resolve uma necessidade que reaparecerá em React Native. Nos códigos, concentre-se primeiro no JavaScript; a pequena interface serve apenas para tornar o resultado visível no Snack.';
  }

  const dados = js.steps?.find(step => step.id === 'js-dados-mbb');
  if (dados) {
    dados.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana Souza';
  const telefone = '(11) 99999-1234';
  const favorito = true;
  let quantidadeContatos = 1;

  quantidadeContatos = quantidadeContatos + 1;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato preparado</Text>
      <Text>{nome}</Text>
      <Text>{telefone}</Text>
      <Text>Total na agenda: {quantidadeContatos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`;
    dados.added = `A Agenda precisa lembrar informações.

const nome = 'Ana Souza';
-> texto guardado em uma constante.

const favorito = true;
-> boolean: verdadeiro ou falso. Vamos usá-lo quando surgir uma decisão.

let quantidadeContatos = 1;
quantidadeContatos = quantidadeContatos + 1;
-> aqui let faz sentido porque o valor recebe uma nova atribuição.

Tipos vistos: texto (string), número e boolean.`;
    dados.preview = `
      <div class="mbb-js-preview"><div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">Contato preparado</div>
        <div class="mbb-js-preview-line">Ana Souza</div>
        <div class="mbb-js-preview-line">(11) 99999-1234</div>
        <div class="mbb-js-preview-highlight">Total na agenda: 2</div>
      </div></div>`;
    dados.note = 'Use const como padrão. Use let quando o valor realmente precisar receber outra atribuição no JavaScript comum.';
  }

  const expressoes = js.steps?.find(step => step.id === 'js-expressoes-mbb');
  if (expressoes) {
    expressoes.menu = '2. Calcular';
    expressoes.title = '2 — Quantas vagas ainda restam?';
    expressoes.objective = 'Usar uma expressão aritmética para responder a uma necessidade da Agenda.';
    expressoes.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const quantidade = 8;
  const limite = 10;
  const vagas = limite - quantidade;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text>Contatos: {quantidade}</Text>
      <Text>Limite: {limite}</Text>
      <Text>Vagas restantes: {vagas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`;
    expressoes.addedTitle = 'A conta aparece porque existe uma pergunta';
    expressoes.added = `Problema:
quantas vagas ainda existem?

limite - quantidade
-> produz a resposta.

A expressão não entra como fórmula isolada. Ela resolve uma necessidade do aplicativo.

No próximo passo surge outra pergunta:
ainda é permitido cadastrar?`;
    expressoes.preview = `
      <div class="mbb-js-preview"><div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">Agenda</div>
        <div class="mbb-js-preview-line">Contatos: 8</div>
        <div class="mbb-js-preview-line">Limite: 10</div>
        <div class="mbb-js-preview-highlight">Vagas restantes: 2</div>
      </div></div>`;
    expressoes.note = 'Primeiro calculamos. A comparação entra somente quando o programa precisar decidir algo com esses valores.';
  }

  const decisao = js.steps?.find(step => step.id === 'js-if-mbb');
  if (decisao) {
    decisao.title = '3 — A Agenda precisa decidir se aceita outro contato';
    decisao.objective = 'Combinar comparação e if/else quando o programa precisa escolher entre dois caminhos.';
    decisao.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const quantidade = 8;
  const limite = 10;
  let mensagem;

  if (quantidade < limite) {
    mensagem = 'Pode cadastrar outro contato';
  } else {
    mensagem = 'Limite atingido';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`;
    decisao.addedTitle = 'Agora a comparação é necessária';
    decisao.added = `quantidade < limite
-> pergunta se 8 é menor que 10.

if (...) { ... } else { ... }
-> usa essa resposta para escolher uma mensagem.

Encadeamento:
primeiro calculamos as vagas;
agora usamos os mesmos dados para tomar uma decisão.`;
    decisao.preview = `
      <div class="mbb-js-preview"><div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">Cadastro</div>
        <div class="mbb-js-preview-highlight">Pode cadastrar outro contato</div>
      </div></div>`;
    decisao.note = 'O operador ternário ficará para quando uma escolha curta fizer sentido dentro da interface; aqui o if/else deixa a regra mais clara para o iniciante.';
  }

  // Padrão MbB: ações práticas ficam visualmente destacadas.
  const porId = id => js.steps?.find(step => step.id === id);
  const acrescentarAcao = (id, acao) => {
    const step = porId(id);
    if (!step) return;
    const notaOriginal = typeof step.note === 'string' ? step.note : '';
    if (notaOriginal.includes('mbb-js-action')) return;
    step.note = `
      <div class="mbb-js-action">
        <strong>Faça agora</strong>
        <span>${acao}</span>
      </div>
      ${notaOriginal ? `<div class="mbb-js-note-context"><strong>Observe:</strong> ${notaOriginal}</div>` : ''}
    `;
  };

  acrescentarAcao('js-dados-mbb', '<b>Altere</b> o valor inicial de <code>quantidadeContatos</code> de <code>1</code> para <code>2</code> e <b>observe o preview</b>: o total passa a <code>3</code>.');
  acrescentarAcao('js-expressoes-mbb', '<b>Altere</b> <code>quantidade</code> de <code>8</code> para <code>9</code> e <b>observe</b> <code>vagas</code> passar a <code>1</code>.');
  acrescentarAcao('js-if-mbb', '<b>Altere</b> <code>quantidade</code> para <code>10</code> e <b>observe o preview</b>: a mensagem passa para <code>Limite atingido</code>.');
  acrescentarAcao('js-funcoes-mbb', '<b>Altere</b> o nome usado na chamada da função e <b>observe</b> o resultado no preview.');
  acrescentarAcao('js-arrow-template-mbb', '<b>Altere</b> o nome usado no exemplo e <b>observe</b> a frase produzida pela arrow function e pelo template literal.');
  acrescentarAcao('js-objeto-mbb', '<b>Altere</b> o valor da propriedade <code>nome</code> do objeto e <b>observe</b> a mudança no preview.');
  acrescentarAcao('js-array-mbb', '<b>Adicione</b> <code>Diego</code> ao array de nomes e <b>observe</b> o total passar de <code>3</code> para <code>4</code>.');
  acrescentarAcao('js-array-objetos-mbb', '<b>Altere</b> o nome ou o telefone do primeiro contato do array e <b>observe</b> a informação atualizada no preview.');
  acrescentarAcao('js-map-mbb', '<b>Altere</b> o nome de um contato na lista de origem e <b>observe</b> o resultado produzido por <code>map()</code>.');
  acrescentarAcao('js-desestruturacao-mbb', '<b>Altere</b> uma propriedade do objeto de origem e <b>observe</b> o valor usado após a desestruturação.');
  acrescentarAcao('js-spread-mbb', '<b>Altere</b> o valor atualizado na cópia do objeto e <b>observe</b> o novo objeto criado com spread.');

  if (!document.getElementById('mbb-js-acoes-praticas-style')) {
    const style = document.createElement('style');
    style.id = 'mbb-js-acoes-praticas-style';
    style.textContent = `
      .note:has(.mbb-js-action)>strong:first-child{display:none}
      .mbb-js-action{display:grid;gap:5px;margin:0 0 10px;padding:11px 12px;border:1px solid #cfe7d4;border-radius:10px;background:#f2fbf4;color:#24422c}
      .mbb-js-action>strong{color:#176b34}
      .mbb-js-action b{font-weight:800;color:#123b73}
      .mbb-js-action code{font-weight:700}
      .mbb-js-note-context{margin-top:6px;color:#475569}
      .mbb-js-note-context>strong{color:#475569}
    `;
    document.head.appendChild(style);
  }


  // -----------------------------------------------------------------------
  // COERÊNCIA VISUAL JS ESSENCIAL — código do Snack = preview aprovado.
  // -----------------------------------------------------------------------
  const crase = String.fromCharCode(96);

  const montarCodigoVisual = (logica, render, usaLinha = true, usaDestaque = false) => {
    const estilos = [
      "const styles = StyleSheet.create({",
      "  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 18, backgroundColor: '#f3f7fc' },",
      "  card: { width: '88%', maxWidth: 290, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 16, padding: 18, shadowColor: '#0f172a', shadowOpacity: 0.10, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 4 },",
      "  titulo: { fontSize: 20, fontWeight: '900', color: '#0f3f86', marginBottom: 12 },",
    ];
    if (usaLinha) estilos.push("  linha: { fontSize: 14, color: '#334155', lineHeight: 21, marginVertical: 3 },");
    if (usaDestaque) estilos.push("  destaque: { alignSelf: 'stretch', marginTop: 12, paddingVertical: 8, paddingHorizontal: 10, borderRadius: 9, backgroundColor: '#eff6ff', color: '#0f4a9c', fontSize: 13, fontWeight: '800' },");
    estilos.push("});");

    return [
      "import React from 'react';",
      "import { View, Text, StyleSheet } from 'react-native';",
      "",
      ...logica,
      "",
      "  return (",
      "    <View style={styles.container}>",
      "      <View style={styles.card}>",
      ...render,
      "      </View>",
      "    </View>",
      "  );",
      "}",
      "",
      ...estilos,
    ].join("\n");
  };

  const trocarCodigo = (id, codigo) => {
    const step = js.steps?.find(item => item.id === id);
    if (step) step.code = codigo;
  };

  trocarCodigo('js-dados-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const nome = 'Ana Souza';",
      "  const telefone = '(11) 99999-1234';",
      "  const favorito = true;",
      "  let quantidadeContatos = 1;",
      "",
      "  quantidadeContatos = quantidadeContatos + 1;",
    ],
    [
      "        <Text style={styles.titulo}>Contato preparado</Text>",
      "        <Text style={styles.linha}>{nome}</Text>",
      "        <Text style={styles.linha}>{telefone}</Text>",
      "        <Text style={styles.destaque}>Total na agenda: {quantidadeContatos}</Text>",
    ],
    true, true
  ));

  trocarCodigo('js-expressoes-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const quantidade = 8;",
      "  const limite = 10;",
      "  const vagas = limite - quantidade;",
    ],
    [
      "        <Text style={styles.titulo}>Agenda</Text>",
      "        <Text style={styles.linha}>Contatos: {quantidade}</Text>",
      "        <Text style={styles.linha}>Limite: {limite}</Text>",
      "        <Text style={styles.destaque}>Vagas restantes: {vagas}</Text>",
    ],
    true, true
  ));

  trocarCodigo('js-if-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const quantidade = 8;",
      "  const limite = 10;",
      "  let mensagem;",
      "",
      "  if (quantidade < limite) {",
      "    mensagem = 'Pode cadastrar outro contato';",
      "  } else {",
      "    mensagem = 'Limite atingido';",
      "  }",
    ],
    [
      "        <Text style={styles.titulo}>Cadastro</Text>",
      "        <Text style={styles.destaque}>{mensagem}</Text>",
    ],
    false, true
  ));

  trocarCodigo('js-funcoes-mbb', montarCodigoVisual(
    [
      "function montarResumo(nome, telefone) {",
      "  return nome + ' — ' + telefone;",
      "}",
      "",
      "export default function App() {",
      "  const resumo = montarResumo('Ana Souza', '(11) 99999-1234');",
    ],
    [
      "        <Text style={styles.titulo}>Resumo</Text>",
      "        <Text style={styles.linha}>{resumo}</Text>",
    ]
  ));

  trocarCodigo('js-arrow-template-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const nome = 'Ana Souza';",
      "  const criarMensagem = nomeContato => " + crase + "Olá, $" + "{nomeContato}!" + crase + ";",
      "  const mensagem = criarMensagem(nome);",
    ],
    [
      "        <Text style={styles.titulo}>Mensagem</Text>",
      "        <Text style={styles.linha}>{mensagem}</Text>",
    ]
  ));

  trocarCodigo('js-objeto-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const contato = {",
      "    id: 1,",
      "    nome: 'Ana Souza',",
      "    telefone: '(11) 99999-1234',",
      "    favorito: true,",
      "  };",
    ],
    [
      "        <Text style={styles.titulo}>{contato.nome}</Text>",
      "        <Text style={styles.linha}>{contato.telefone}</Text>",
      "        <Text style={styles.destaque}>{contato.favorito ? 'Favorito' : 'Contato comum'}</Text>",
    ],
    true, true
  ));

  trocarCodigo('js-array-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const nomes = ['Ana', 'Bruno', 'Carla'];",
    ],
    [
      "        <Text style={styles.titulo}>Contatos</Text>",
      "        <Text style={styles.linha}>Primeiro: {nomes[0]}</Text>",
      "        <Text style={styles.linha}>Total: {nomes.length}</Text>",
    ]
  ));

  trocarCodigo('js-array-objetos-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const contatos = [",
      "    { id: 1, nome: 'Ana', telefone: '1111-1111' },",
      "    { id: 2, nome: 'Bruno', telefone: '2222-2222' },",
      "    { id: 3, nome: 'Carla', telefone: '3333-3333' },",
      "  ];",
    ],
    [
      "        <Text style={styles.titulo}>Agenda</Text>",
      "        <Text style={styles.linha}>{contatos[0].nome} — {contatos[0].telefone}</Text>",
      "        <Text style={styles.linha}>Total: {contatos.length}</Text>",
    ]
  ));

  trocarCodigo('js-map-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const contatos = [",
      "    { id: 1, nome: 'Ana' },",
      "    { id: 2, nome: 'Bruno' },",
      "    { id: 3, nome: 'Carla' },",
      "  ];",
      "",
      "  const nomes = contatos.map(contato => contato.nome);",
    ],
    [
      "        <Text style={styles.titulo}>Nomes preparados</Text>",
      "        <Text style={styles.linha}>{nomes.join(' • ')}</Text>",
    ]
  ));

  trocarCodigo('js-desestruturacao-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const contato = {",
      "    nome: 'Ana Souza',",
      "    telefone: '(11) 99999-1234',",
      "  };",
      "",
      "  const { nome, telefone } = contato;",
    ],
    [
      "        <Text style={styles.titulo}>{nome}</Text>",
      "        <Text style={styles.linha}>{telefone}</Text>",
    ]
  ));

  trocarCodigo('js-spread-mbb', montarCodigoVisual(
    [
      "export default function App() {",
      "  const contato = { id: 1, nome: 'Ana', favorito: false };",
      "  const contatoAtualizado = { ...contato, favorito: true };",
      "",
      "  const contatos = [{ id: 2, nome: 'Bruno' }];",
      "  const novaLista = [...contatos, contatoAtualizado];",
    ],
    [
      "        <Text style={styles.titulo}>Nova lista</Text>",
      "        <Text style={styles.linha}>Total: {novaLista.length}</Text>",
      "        <Text style={styles.destaque}>{contatoAtualizado.nome}: favorito</Text>",
    ],
    true, true
  ));

  // Enunciados dos exercícios 1–7 alinhados às respostas dos TXT OFICIAL.
  const exerciciosJs = js.steps?.find(step => step.id === 'js-exercicios-mbb');
  if (exerciciosJs && typeof exerciciosJs.html === 'string') {
    [
      [
        '<p><strong>Faça:</strong> declare os três dados e exiba um resumo.</p>',
        '<p><strong>Faça:</strong> declare nome, telefone e favorito. Exiba um resumo com o título “Resumo do contato” e mostre Nome, Telefone e Favorito, usando “Sim” ou “Não” para indicar se o contato é favorito.</p>'
      ],
      [
        '<p><strong>Faça:</strong> calcule quantas vagas restam e determine se ainda é possível cadastrar.</p>',
        '<p><strong>Faça:</strong> calcule as vagas restantes, determine se ainda é possível cadastrar e, sob o título “Agenda”, exiba Contatos cadastrados, Vagas restantes e “Pode cadastrar: Sim” ou “Pode cadastrar: Não”.</p>'
      ],
      [
        '<p><strong>Faça:</strong> implemente a regra e mostre o resultado.</p>',
        '<p><strong>Faça:</strong> aplique a regra com <code>if/else</code> e, sob o título “Validação”, mostre “Telefone pendente” quando o telefone estiver vazio; caso contrário, mostre “Contato completo”.</p>'
      ],
      [
        '<p><strong>Faça:</strong> represente o contato em uma única estrutura e crie uma função que produza um resumo.</p>',
        '<p><strong>Faça:</strong> reúna nome, telefone e e-mail em um único objeto, crie uma função que produza uma linha com os três dados e exiba o resultado sob o título “Ficha do contato”.</p>'
      ],
      [
        '<p><strong>Faça:</strong> guarde os três em uma coleção e produza uma nova coleção contendo apenas os nomes.</p>',
        '<p><strong>Faça:</strong> guarde os três contatos completos em um array de objetos, produza com <code>map()</code> uma nova coleção contendo apenas os nomes e, sob o título “Nomes”, exiba os nomes separados por “ • ”.</p>'
      ],
      [
        '<p><strong>Faça:</strong> preserve o objeto original e crie o atualizado.</p>',
        '<p><strong>Faça:</strong> preserve o objeto original, crie com spread uma nova versão com favorito igual a verdadeiro e, sob o título “Favoritar contato”, exiba o estado de favorito do original e da nova versão como “Sim” ou “Não”.</p>'
      ],
      [
        '<p><strong>Faça:</strong> organize os dados como array de objetos, use uma transformação para obter os nomes e explique, em uma frase, como isso poderá ser aproveitado pela interface.</p>',
        '<p><strong>Faça:</strong> organize quatro contatos em um array de objetos, use <code>map()</code> para obter uma nova coleção com os nomes e, sob o título “Contatos preparados”, exiba os nomes separados por “ • ”. Depois, explique em uma frase como essa transformação poderá ser aproveitada pela interface.</p>'
      ],
    ].forEach(([antes, depois]) => {
      exerciciosJs.html = exerciciosJs.html.replace(antes, depois);
    });
  }


  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
