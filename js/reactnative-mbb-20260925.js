// Mundo bit Byte — lapidação pedagógica React Native — 25/09/2026
// Regra: necessidade -> recurso -> aplicação -> consolidação -> reaproveitamento.
// Este arquivo executa por último e preserva a base técnica já aprovada.

(function () {
  if (typeof modules === 'undefined') return;

  const paginaConceito = (id, menu, title, objective, kicker, lead, highlight, boxes) => ({
    id,
    menu,
    title,
    objective,
    modulePage: true,
    kicker,
    lead,
    highlight,
    boxes,
  });

  const previewContato = (titulo, linhas, destaque = '') => `
    <div class="mbb-js-preview">
      <div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">${titulo}</div>
        ${linhas.map(linha => `<div class="mbb-js-preview-line">${linha}</div>`).join('')}
        ${destaque ? `<div class="mbb-js-preview-highlight">${destaque}</div>` : ''}
      </div>
    </div>`;

  // -----------------------------------------------------------------------
  // 0. FUNDAMENTOS — preservar o que já está correto e explicitar a ponte.
  // -----------------------------------------------------------------------
  if (modules.fundamentosMobile) {
    modules.fundamentosMobile.subtitle =
      'Mobile, React Native, Expo/Snack e a primeira leitura do código que será usado adiante.';

    const jsxVisao = modules.fundamentosMobile.steps?.find(step => step.id === 'mobile-jsx-visao');
    if (jsxVisao) {
      jsxVisao.note =
        'Aqui basta reconhecer JavaScript e JSX. O JavaScript necessário será praticado no próximo módulo; JSX será aprofundado quando React precisar dele.';
    }
  }

  // -----------------------------------------------------------------------
  // JS ESSENCIAL — reconstrução MbB com um único fio condutor.
  // -----------------------------------------------------------------------
  if (modules.javascriptEssencial) {
    const js = modules.javascriptEssencial;
    js.title = 'JS Essencial';
    js.subtitle = 'JavaScript que o React Native realmente vai exigir, aprendido quando a Agenda precisa dele.';

    js.steps = [
      paginaConceito(
        'js-intro-mbb',
        'Intro',
        'JavaScript Essencial — dados e regras da Agenda',
        'Entender por que JavaScript aparece antes de aprofundarmos React.',
        'Um aplicativo precisa de mais do que aparência',
        'Em Interfaces vamos montar a Agenda de Contatos. Antes disso, precisamos preparar os dados e as regras que essa interface usará: nomes, telefones, decisões, listas e transformações.',
        'Não vamos fazer um curso separado de JavaScript. Cada recurso entra porque resolve uma necessidade que reaparecerá em React Native.',
        [
          ['Guardar dados', 'const e let representam informações que o aplicativo precisa usar.'],
          ['Tomar decisões', 'comparações e if/else permitem escolher um caminho.'],
          ['Evitar repetição', 'funções agrupam uma ação que pode ser chamada novamente.'],
          ['Representar um contato', 'objetos agrupam informações relacionadas.'],
          ['Representar vários contatos', 'arrays guardam coleções de itens.'],
          ['Preparar para React', 'map(), desestruturação e spread reaparecerão em componentes, listas e state.'],
        ]
      ),
      {
        id: 'js-dados-mbb',
        menu: '1. Guardar dados',
        title: '1 — A Agenda precisa guardar informações',
        objective: 'Usar const, let e tipos básicos em uma necessidade real.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana Souza';
  const telefone = '(11) 99999-1234';
  let favorito = true;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato preparado</Text>
      <Text>{nome}</Text>
      <Text>{telefone}</Text>
      <Text>{favorito ? 'Favorito' : 'Contato comum'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`,
        addedTitle: 'Por que isso existe?',
        added: `A Agenda precisa lembrar informações.

const nome = 'Ana Souza';
-> texto que não será trocado neste exemplo.

let favorito = true;
-> valor que poderia mudar durante a execução.

Tipos vistos aqui:
texto (string) e verdadeiro/falso (boolean).`,
        preview: previewContato('Contato preparado', ['Ana Souza', '(11) 99999-1234'], 'Favorito'),
        note: 'Use const como padrão. Use let quando a variável realmente precisar receber outro valor por atribuição direta.',
      },
      {
        id: 'js-expressoes-mbb',
        menu: '2. Comparar valores',
        title: '2 — Ainda cabe outro contato?',
        objective: 'Usar operadores e expressões para responder a uma pergunta do aplicativo.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const quantidade = 8;
  const limite = 10;
  const vagas = limite - quantidade;
  const podeCadastrar = quantidade < limite;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text>Contatos: {quantidade}</Text>
      <Text>Vagas: {vagas}</Text>
      <Text>{podeCadastrar ? 'Pode cadastrar' : 'Limite atingido'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`,
        addedTitle: 'A expressão responde a uma necessidade',
        added: `limite - quantidade
-> calcula quantas vagas restam.

quantidade < limite
-> compara dois valores e produz true ou false.

Operadores não são uma lista para decorar. Eles formam perguntas e cálculos do programa.`,
        preview: previewContato('Agenda', ['Contatos: 8', 'Vagas: 2'], 'Pode cadastrar'),
        note: 'Depois veremos comparações novamente em decisões, renderização condicional e regras do aplicativo.',
      },
      {
        id: 'js-if-mbb',
        menu: '3. Decidir',
        title: '3 — A Agenda precisa tomar uma decisão',
        objective: 'Usar if/else quando o programa precisa escolher entre caminhos.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const telefone = '';
  let situacao;

  if (telefone === '') {
    situacao = 'Telefone pendente';
  } else {
    situacao = 'Contato completo';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Validação</Text>
      <Text>{situacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`,
        addedTitle: 'Primeiro a pergunta, depois o comando',
        added: `Problema:
o telefone está vazio?

telefone === ''
-> faz a comparação.

if (...) { ... } else { ... }
-> escolhe o que deve acontecer.

O if/else é usado quando existe uma regra a decidir, não apenas porque “faz parte de JavaScript”.`,
        preview: previewContato('Validação', ['Ana Souza'], 'Telefone pendente'),
        note: 'O operador ternário aparecerá quando uma escolha curta fizer sentido dentro de uma expressão; ele não substitui todo if/else.',
      },
      {
        id: 'js-funcoes-mbb',
        menu: '4. Reutilizar uma ação',
        title: '4 — Não vamos montar o mesmo resumo toda hora',
        objective: 'Criar uma função para representar uma tarefa reutilizável.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function montarResumo(nome, telefone) {
  return nome + ' — ' + telefone;
}

export default function App() {
  const resumo = montarResumo('Ana Souza', '(11) 99999-1234');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo</Text>
      <Text>{resumo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`,
        addedTitle: 'Função = tarefa com nome',
        added: `montarResumo(...)
recebe dados, executa uma tarefa e devolve um resultado.

Parâmetros:
nome e telefone.

return:
entrega o valor produzido pela função.

Em React, componentes e manipuladores de eventos também serão funções.`,
        preview: previewContato('Resumo', ['Ana Souza — (11) 99999-1234']),
        note: 'O objetivo é entender a ideia de função antes de encontrar funções em componentes, eventos e Hooks.',
      },
      {
        id: 'js-arrow-template-mbb',
        menu: '5. Forma moderna',
        title: '5 — Arrow function e texto dinâmico',
        objective: 'Reconhecer duas formas muito frequentes no código React Native.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana Souza';
  const criarMensagem = nomeContato => \`Olá, \${nomeContato}!\`;
  const mensagem = criarMensagem(nome);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mensagem</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`,
        addedTitle: 'Duas escritas que você verá muitas vezes',
        added: `nomeContato => ...
-> arrow function: outra forma de escrever uma função.

\`Olá, \${nomeContato}!\`
-> template literal: monta texto inserindo um valor com \${ }.

Não precisamos decorar variações agora. Precisamos reconhecer e usar a forma básica.`,
        preview: previewContato('Mensagem', ['Olá, Ana Souza!']),
        note: 'Arrow functions reaparecerão em map(), eventos e callbacks. Template literals ajudam a formar textos com dados.',
      },
      {
        id: 'js-objeto-mbb',
        menu: '6. Um contato',
        title: '6 — Um contato tem várias informações',
        objective: 'Usar um objeto para agrupar dados que pertencem à mesma entidade.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const contato = {
    id: 1,
    nome: 'Ana Souza',
    telefone: '(11) 99999-1234',
    favorito: true,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{contato.nome}</Text>
      <Text>{contato.telefone}</Text>
      <Text>{contato.favorito ? 'Favorito' : 'Contato comum'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`,
        addedTitle: 'Por que objeto?',
        added: `Antes, nome e telefone estavam soltos.
Agora pertencem ao mesmo contato.

contato.nome
contato.telefone

O ponto acessa uma propriedade do objeto.
Objetos serão muito usados em dados de APIs, props e listas.`,
        preview: previewContato('Ana Souza', ['(11) 99999-1234'], 'Favorito'),
        note: 'Um objeto representa bem uma entidade com várias características relacionadas.',
      },
      {
        id: 'js-array-mbb',
        menu: '7. Vários contatos',
        title: '7 — A Agenda não terá apenas um contato',
        objective: 'Usar arrays quando precisamos representar uma coleção.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nomes = ['Ana', 'Bruno', 'Carla'];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contatos</Text>
      <Text>Primeiro: {nomes[0]}</Text>
      <Text>Total: {nomes.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`,
        addedTitle: 'Coleção em uma única estrutura',
        added: `['Ana', 'Bruno', 'Carla']
-> array com três valores.

nomes[0]
-> acessa o primeiro item.

nomes.length
-> informa quantos itens existem.

O índice começa em 0.`,
        preview: previewContato('Contatos', ['Primeiro: Ana', 'Total: 3']),
        note: 'Array resolve a necessidade de guardar vários valores relacionados. No próximo passo, cada item ficará mais completo.',
      },
      {
        id: 'js-array-objetos-mbb',
        menu: '8. Lista completa',
        title: '8 — Vários contatos, cada um com seus próprios dados',
        objective: 'Combinar arrays e objetos para representar dados de um aplicativo.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const contatos = [
    { id: 1, nome: 'Ana', telefone: '1111-1111' },
    { id: 2, nome: 'Bruno', telefone: '2222-2222' },
    { id: 3, nome: 'Carla', telefone: '3333-3333' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text>{contatos[0].nome} — {contatos[0].telefone}</Text>
      <Text>Total: {contatos.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`,
        addedTitle: 'Estrutura que aparece em aplicativos reais',
        added: `contatos
-> array: a coleção.

{ id, nome, telefone }
-> objeto: um item da coleção.

Essa combinação prepara diretamente listas, respostas de API e componentes repetidos no React.`,
        preview: previewContato('Agenda', ['Ana — 1111-1111', 'Total: 3']),
        note: 'Aqui ocorre uma virada importante: os dados já têm a forma típica que usaremos em interfaces dinâmicas.',
      },
      {
        id: 'js-map-mbb',
        menu: '9. Transformar a lista',
        title: '9 — Precisamos fazer algo com cada contato',
        objective: 'Usar map() para transformar todos os itens de um array.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const contatos = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' },
    { id: 3, nome: 'Carla' },
  ];

  const nomes = contatos.map(contato => contato.nome);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nomes preparados</Text>
      <Text>{nomes.join(' • ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`,
        addedTitle: 'O map() percorre e devolve',
        added: `contatos.map(...)
-> passa por cada item do array.

contato => contato.nome
-> define o que será produzido a partir de cada contato.

Resultado:
['Ana', 'Bruno', 'Carla']

Mais adiante, React usará a mesma ideia para transformar dados em componentes visuais.`,
        preview: previewContato('Nomes preparados', ['Ana • Bruno • Carla']),
        note: 'Não é necessário decorar métodos de array. map() entra porque React o usa naturalmente para construir listas na tela.',
      },
      {
        id: 'js-desestruturacao-mbb',
        menu: '10. Ler melhor',
        title: '10 — Menos repetição ao acessar um objeto',
        objective: 'Usar desestruturação para tornar o código mais legível.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const contato = {
    nome: 'Ana Souza',
    telefone: '(11) 99999-1234',
  };

  const { nome, telefone } = contato;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nome}</Text>
      <Text>{telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`,
        addedTitle: 'A estrutura já existe; só estamos lendo melhor',
        added: `const { nome, telefone } = contato;

é uma forma curta de obter propriedades do objeto.

Isso aparecerá naturalmente em props e parâmetros de funções React.
Não é um novo tipo de dado; é uma forma de extrair valores de um objeto.`,
        preview: previewContato('Ana Souza', ['(11) 99999-1234']),
        note: 'A desestruturação entra agora porque já existe um objeto real para desestruturar.',
      },
      {
        id: 'js-spread-mbb',
        menu: '11. Criar nova versão',
        title: '11 — Atualizar sem desmontar o contato original',
        objective: 'Usar spread para criar novas versões de objetos e arrays.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const contato = { id: 1, nome: 'Ana', favorito: false };
  const contatoAtualizado = { ...contato, favorito: true };

  const contatos = [{ id: 2, nome: 'Bruno' }];
  const novaLista = [...contatos, contatoAtualizado];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova lista</Text>
      <Text>Total: {novaLista.length}</Text>
      <Text>{contatoAtualizado.nome}: favorito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`,
        addedTitle: 'Copiar e alterar em vez de destruir',
        added: `{ ...contato, favorito: true }
-> cria um novo objeto aproveitando o anterior.

[...contatos, contatoAtualizado]
-> cria um novo array incluindo os itens anteriores.

Essa ideia será muito importante quando React acompanhar mudanças de state.`,
        preview: previewContato('Nova lista', ['Total: 2'], 'Ana: favorito'),
        note: 'Spread é ensinado aqui porque será reutilizado na atualização de arrays e objetos em React.',
      },
      paginaConceito(
        'js-ponte-react-mbb',
        '12. Ponte para React',
        '12 — O JavaScript agora tem destino',
        'Relacionar o que foi estudado às próximas etapas do curso.',
        'Nada foi ensinado por acaso',
        'A Agenda já consegue representar dados e regras. Agora Interfaces cuidará da organização visual; depois React unirá dados, componentes e mudanças de estado.',
        'O ponto de chegada do JS Essencial não é “saber JavaScript inteiro”. É conseguir ler e usar o JavaScript que sustenta os próximos módulos.',
        [
          ['const / let', 'Dados usados no componente.'],
          ['if / comparações', 'Regras e decisões do aplicativo.'],
          ['funções / arrow', 'Componentes, eventos e callbacks.'],
          ['objetos', 'Contatos, props e dados vindos de APIs.'],
          ['arrays + map()', 'Listas de dados que depois gerarão componentes.'],
          ['desestruturação + spread', 'Leitura de props e atualização segura de state.'],
        ]
      ),
      {
        id: 'js-exercicios-mbb',
        menu: '99. Exercícios',
        title: '99 — Desafios de JavaScript Essencial',
        objective: 'Resolver necessidades da Agenda escolhendo os recursos já estudados.',
        exercisePage: true,
        html: `
          <div class="mbb-challenge-page mbb-js-challenges">
            <section class="mbb-challenge-hero">
              <span class="mbb-challenge-kicker">Consolidação MbB</span>
              <h2>Da necessidade ao recurso</h2>
              <p>Nos primeiros desafios há mais pistas. Depois elas diminuem. O objetivo não é repetir sintaxe: é reconhecer qual recurso resolve cada problema.</p>
              <div class="mbb-challenge-rule"><strong>Fluxo:</strong> leia o problema → pense nos dados → escolha o recurso → programe → teste no Snack → explique por que sua solução funciona.</div>
            </section>
            <div class="mbb-challenge-grid">
              <article class="mbb-challenge-card">
                <span class="mbb-level">1 · Guiado</span><h3>Contato básico</h3>
                <p><strong>Situação:</strong> a Agenda precisa guardar nome, telefone e se o contato é favorito.</p>
                <p><strong>Faça:</strong> declare os três dados e exiba um resumo.</p>
                <div class="mbb-resource-tags"><span>const</span><span>boolean</span><span>Text</span></div>
              </article>
              <article class="mbb-challenge-card">
                <span class="mbb-level">2 · Guiado</span><h3>Cadastro permitido?</h3>
                <p><strong>Situação:</strong> a Agenda aceita no máximo 20 contatos e já possui 18.</p>
                <p><strong>Faça:</strong> calcule quantas vagas restam e determine se ainda é possível cadastrar.</p>
                <div class="mbb-resource-tags"><span>operadores</span><span>comparação</span></div>
              </article>
              <article class="mbb-challenge-card">
                <span class="mbb-level">3 · Combinando</span><h3>Contato completo</h3>
                <p><strong>Situação:</strong> um telefone vazio deve gerar a mensagem “Telefone pendente”; caso contrário, “Contato completo”.</p>
                <p><strong>Faça:</strong> implemente a regra e mostre o resultado.</p>
                <details><summary>Pista</summary><p>Aqui existe uma decisão entre dois caminhos.</p></details>
              </article>
              <article class="mbb-challenge-card">
                <span class="mbb-level">4 · Combinando</span><h3>Ficha do contato</h3>
                <p><strong>Situação:</strong> nome, telefone e e-mail pertencem à mesma pessoa.</p>
                <p><strong>Faça:</strong> represente o contato em uma única estrutura e crie uma função que produza um resumo.</p>
                <details><summary>Pista</summary><p>Pense em objeto + função.</p></details>
              </article>
              <article class="mbb-challenge-card">
                <span class="mbb-level">5 · Decidindo</span><h3>Agenda com três pessoas</h3>
                <p><strong>Situação:</strong> agora existem três contatos completos.</p>
                <p><strong>Faça:</strong> guarde os três em uma coleção e produza uma nova coleção contendo apenas os nomes.</p>
                <p class="mbb-challenge-check"><strong>Teste mental:</strong> sua solução continuaria funcionando com 30 contatos?</p>
              </article>
              <article class="mbb-challenge-card">
                <span class="mbb-level">6 · Decidindo</span><h3>Favoritar sem perder dados</h3>
                <p><strong>Situação:</strong> Ana já existe e não é favorita. Precisamos criar uma nova versão dela marcada como favorita.</p>
                <p><strong>Faça:</strong> preserve o objeto original e crie o atualizado.</p>
                <p class="mbb-challenge-check"><strong>Critério:</strong> o objeto antigo deve continuar intacto.</p>
              </article>
              <article class="mbb-challenge-card mbb-challenge-wide">
                <span class="mbb-level">7 · Transferência</span><h3>Preparar dados para a interface</h3>
                <p><strong>Situação:</strong> você recebeu uma lista de quatro contatos. A próxima etapa do curso precisará mostrar essas pessoas na tela.</p>
                <p><strong>Faça:</strong> organize os dados como array de objetos, use uma transformação para obter os nomes e explique, em uma frase, como isso poderá ser aproveitado pela interface.</p>
                <p><strong>Sem lista de comandos:</strong> escolha sozinho quais recursos do módulo são necessários.</p>
              </article>
            </div>
          </div>`,
      },
    ];
  }

  // -----------------------------------------------------------------------
  // 1. INTERFACES — preservar laboratórios coerentes e reconstruir a prática.
  // -----------------------------------------------------------------------
  if (modules.interfaceBasica) {
    const ui = modules.interfaceBasica;
    ui.subtitle = 'Componentes, StyleSheet e Flexbox aplicados a interfaces que crescem por necessidade.';

    const bridge = ui.steps?.find(step => step.id === 'interfaces-flexbox-ponte');
    if (bridge) {
      bridge.highlight =
        'Você já sabe criar os blocos. Agora surge uma nova pergunta: como fazê-los ocupar o espaço certo? Flexbox entra como resposta a essa necessidade visual.';
    }

    const flexIntro = ui.steps?.find(step => step.id === 'flex-intro');
    if (flexIntro) {
      flexIntro.lead =
        'Neste laboratório, cada exemplo responde a uma pergunta visual: empilhar, colocar lado a lado, centralizar, distribuir ou permitir que um bloco cresça.';
      flexIntro.highlight =
        'Observe primeiro o problema visual. Só depois associe a propriedade que o resolve. O objetivo é escolher layout, não decorar nomes.';
    }

    const exercise = ui.steps?.find(step => step.id === 'exercicios-interface-flexbox')
      || ui.steps?.find(step => /exerc/i.test(String(step.id || '')));

    if (exercise) {
      exercise.id = 'exercicios-interface-flexbox';
      exercise.menu = '99. Exercícios';
      exercise.title = '99 — Desafios de Interfaces e Flexbox';
      exercise.objective = 'Construir interfaces escolhendo componentes e organização visual a partir da necessidade.';
      exercise.exercisePage = true;
      exercise.html = `
        <div class="mbb-challenge-page mbb-interface-challenges">
          <section class="mbb-challenge-hero">
            <span class="mbb-challenge-kicker">Interfaces + Flexbox</span>
            <h2>Você viu os recursos. Agora precisa decidir quando usá-los.</h2>
            <p>Os desafios começam próximos dos exemplos praticados e vão retirando as pistas. Não tente adivinhar propriedades: observe primeiro como a tela precisa se organizar.</p>
            <div class="mbb-challenge-rule"><strong>Método:</strong> imagine os blocos → identifique o container → decida linha ou coluna → alinhe/distribua → só então ajuste aparência.</div>
          </section>

          <section class="mbb-challenge-section">
            <div class="mbb-section-heading"><span>Parte 1</span><h3>Reconstruir o que você já entendeu</h3><p>Mais pistas, foco na relação entre necessidade visual e recurso.</p></div>
            <div class="mbb-challenge-grid">
              <article class="mbb-challenge-card">
                <span class="mbb-level">1 · Guiado</span><h3>Boas-vindas</h3>
                <p><strong>Contexto:</strong> uma tela inicial precisa mostrar um título e uma frase logo abaixo.</p>
                <div class="mbb-wireframe mbb-wireframe-column"><b>Bem-vindo</b><span>Escolha uma opção para continuar</span></div>
                <p><strong>Construa:</strong> dois textos centralizados, um abaixo do outro, com hierarquia visual clara.</p>
                <div class="mbb-resource-tags"><span>View</span><span>Text</span><span>coluna</span><span>alignItems</span></div>
              </article>

              <article class="mbb-challenge-card">
                <span class="mbb-level">2 · Guiado</span><h3>Placar</h3>
                <p><strong>Contexto:</strong> o resultado precisa caber em uma única faixa.</p>
                <div class="mbb-wireframe mbb-wireframe-row"><span>Azul FC</span><b>2 × 1</b><span>Sol FC</span></div>
                <p><strong>Construa:</strong> três informações lado a lado e distribuídas de forma equilibrada.</p>
                <div class="mbb-resource-tags"><span>row</span><span>justifyContent</span><span>Text</span></div>
              </article>

              <article class="mbb-challenge-card">
                <span class="mbb-level">3 · Guiado</span><h3>Perfil compacto</h3>
                <p><strong>Contexto:</strong> um perfil deve mostrar imagem à esquerda e dados à direita.</p>
                <div class="mbb-wireframe mbb-wireframe-profile"><span class="mbb-wire-avatar">IMG</span><span><b>Marina Costa</b><small>Desenvolvedora</small></span></div>
                <p><strong>Construa:</strong> combine imagem e textos sem deixar os elementos soltos na tela.</p>
                <div class="mbb-resource-tags"><span>Image</span><span>View</span><span>row</span><span>coluna interna</span></div>
              </article>
            </div>
          </section>

          <section class="mbb-challenge-section">
            <div class="mbb-section-heading"><span>Parte 2</span><h3>Combinar recursos</h3><p>Agora uma única tela exige mais de uma decisão de layout.</p></div>
            <div class="mbb-challenge-grid">
              <article class="mbb-challenge-card">
                <span class="mbb-level">4 · Combinando</span><h3>Previsão do tempo</h3>
                <p><strong>Contexto:</strong> a cidade fica no topo e três temperaturas aparecem na mesma linha abaixo.</p>
                <div class="mbb-wireframe"><b>Campinas</b><div class="mbb-wireframe-row"><span>18 °C<br><small>mín.</small></span><span>25 °C<br><small>agora</small></span><span>30 °C<br><small>máx.</small></span></div></div>
                <p><strong>Construa:</strong> uma coluna externa contendo uma linha interna. Centralize e distribua os valores.</p>
                <details><summary>Pista</summary><p>Uma View pode conter outra View com direção diferente.</p></details>
              </article>

              <article class="mbb-challenge-card">
                <span class="mbb-level">5 · Combinando</span><h3>Cartão de contato</h3>
                <p><strong>Contexto:</strong> foto e dados ficam na parte superior; duas ações ficam abaixo.</p>
                <div class="mbb-wireframe"><div class="mbb-wireframe-profile"><span class="mbb-wire-avatar">IMG</span><span><b>João Lima</b><small>(11) 98888-7777</small></span></div><div class="mbb-wireframe-row"><button>Ligar</button><button>Mensagem</button></div></div>
                <p><strong>Construa:</strong> organize a hierarquia em blocos. Não coloque todos os componentes no mesmo container.</p>
                <details><summary>Pista</summary><p>Pense em um container principal com duas áreas internas.</p></details>
              </article>

              <article class="mbb-challenge-card">
                <span class="mbb-level">6 · Combinando</span><h3>Painel de atalhos</h3>
                <p><strong>Contexto:</strong> quatro ações precisam formar duas linhas com dois atalhos em cada uma.</p>
                <div class="mbb-wireframe mbb-wire-grid"><span>Agenda</span><span>Fotos</span><span>Mapa</span><span>Ajustes</span></div>
                <p><strong>Construa:</strong> faça os atalhos ocuparem o espaço de maneira equilibrada.</p>
                <p class="mbb-challenge-check"><strong>Critério:</strong> nenhum atalho deve ficar espremido ou desalinhado.</p>
              </article>
            </div>
          </section>

          <section class="mbb-challenge-section">
            <div class="mbb-section-heading"><span>Parte 3</span><h3>Decidir sem receber a propriedade pronta</h3><p>O enunciado descreve a necessidade; você escolhe como resolver.</p></div>
            <div class="mbb-challenge-grid">
              <article class="mbb-challenge-card">
                <span class="mbb-level">7 · Decidindo</span><h3>Resumo financeiro</h3>
                <p><strong>Contexto:</strong> “Saldo” aparece acima. Abaixo, “Entradas” e “Saídas” precisam dividir a largura disponível igualmente.</p>
                <div class="mbb-wireframe"><b>Saldo: R$ 850</b><div class="mbb-wireframe-row"><span>Entradas<br><b>R$ 1.200</b></span><span>Saídas<br><b>R$ 350</b></span></div></div>
                <p><strong>Construa:</strong> escolha os containers e propriedades sem consultar uma receita pronta.</p>
              </article>

              <article class="mbb-challenge-card">
                <span class="mbb-level">8 · Decidindo</span><h3>Card de evento</h3>
                <p><strong>Contexto:</strong> imagem no topo, título e local no meio; na base, data à esquerda e botão à direita.</p>
                <div class="mbb-wireframe"><div class="mbb-wire-image">IMAGEM</div><b>Encontro de Tecnologia</b><small>Centro Cultural</small><div class="mbb-wireframe-row"><span>25 SET</span><button>Detalhes</button></div></div>
                <p><strong>Construa:</strong> identifique sozinho quais partes são linha, coluna e quais precisam ocupar espaço.</p>
              </article>
            </div>
          </section>

          <section class="mbb-challenge-section">
            <div class="mbb-section-heading"><span>Parte 4</span><h3>Transferir e criar</h3><p>Agora o resultado é especificado, mas não há lista de recursos.</p></div>
            <div class="mbb-challenge-grid">
              <article class="mbb-challenge-card mbb-challenge-wide">
                <span class="mbb-level">9 · Transferência</span><h3>Interface a partir de uma referência</h3>
                <p><strong>Desafio:</strong> reproduza a estrutura abaixo no Snack. Use nomes de estilos claros e divida a interface em containers coerentes.</p>
                <div class="mbb-wireframe mbb-wireframe-reference"><header>MINHA ROTINA</header><main><div class="mbb-wireframe-row"><span class="mbb-wire-big">08:00<br><small>Aula</small></span><span class="mbb-wire-big">10:00<br><small>Projeto</small></span></div><div class="mbb-wireframe-row"><button>Anterior</button><button>Próximo</button></div></main></div>
                <p class="mbb-challenge-check"><strong>Ao terminar:</strong> explique qual container controla cada alinhamento. Se não consegue explicar, ainda não terminou.</p>
              </article>

              <article class="mbb-challenge-card mbb-challenge-wide mbb-final-challenge">
                <span class="mbb-level">10 · Criação</span><h3>Miniinterface autoral</h3>
                <p>Escolha um contexto simples — música, esporte, estudos, comércio, evento ou outro — e crie uma tela contendo:</p>
                <ul><li>hierarquia clara de título e conteúdo;</li><li>pelo menos uma imagem ou área visual;</li><li>uma composição horizontal dentro de uma organização vertical;</li><li>duas ações visuais;</li><li>espaçamento e alinhamento coerentes.</li></ul>
                <p><strong>Não copie um exemplo anterior.</strong> Reaproveite os conhecimentos, não o desenho.</p>
                <p class="mbb-challenge-check"><strong>Checkpoint MbB:</strong> mostre a tela a outra pessoa e explique por que escolheu cada container e cada direção.</p>
              </article>
            </div>
          </section>
        </div>`;
    }
  }

  // Recria os menus depois de alterar os dados do módulo.
  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();

  // Mantém a etapa atual, quando possível; caso contrário, abre o início do módulo ativo.
  if (typeof showStep === 'function') {
    const currentModule = typeof currentModuleId !== 'undefined' ? modules[currentModuleId] : null;
    const activeButton = document.querySelector('#menu .nav-btn.active');
    const activeId = activeButton?.dataset?.step || activeButton?.id?.replace(/^btn-[^-]+-/, '');
    const existing = currentModule?.steps?.find(step => step.id === activeId);
    if (!existing && currentModule?.steps?.length) {
      showStep(currentModule.steps[0].id);
    }
  }
})();
