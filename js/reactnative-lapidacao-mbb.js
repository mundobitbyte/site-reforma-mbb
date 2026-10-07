// Lapidação pedagógica MbB da reforma React Native.
// Executa depois de reactnative-hooks-mbb.js e ajusta somente conteúdo/ordem visível.

if (typeof modules !== 'undefined') {
  const stripNumber = (text = '') => String(text)
    .replace(/^\s*\d+[A-Za-z]?\s*[.\-—:]?\s*/, '')
    .trim();

  const isExercise = step => Boolean(
    step && (
      step.exercisePage ||
      /exerc/i.test(String(step.id || '')) ||
      /^99/i.test(String(step.menu || ''))
    )
  );

  const namespaceHtmlIds = (html = '', prefix = '') => {
    let result = String(html || '');
    const ids = [...result.matchAll(/id=["']([^"']+)["']/g)]
      .map(match => match[1])
      .filter((id, index, arr) => arr.indexOf(id) === index)
      .sort((a, b) => b.length - a.length);

    ids.forEach(id => {
      result = result.split(id).join(`${prefix}${id}`);
    });
    return result;
  };

  const renumberVisibleSteps = (module, introId) => {
    if (!module || !Array.isArray(module.steps)) return;

    let number = 0;
    module.steps.forEach((step, index) => {
      if (!step) return;

      if (isExercise(step)) {
        step.menu = '99. Exercícios';
        const cleanExerciseTitle = stripNumber(step.title || 'Exercícios');
        step.title = `99 — ${cleanExerciseTitle}`;
        return;
      }

      if (step.id === introId || index === 0) {
        step.menu = 'Intro';
        return;
      }

      number += 1;
      const cleanMenu = stripNumber(step.menu || step.title || 'Etapa');
      const cleanTitle = stripNumber(step.title || cleanMenu);
      step.menu = `${number}. ${cleanMenu}`;
      step.title = `${number} — ${cleanTitle}`;
    });
  };

  // 1. INTERFACES + FLEXBOX ------------------------------------------------
  if (modules.interfaceBasica) {
    const interfaceModule = modules.interfaceBasica;
    interfaceModule.subtitle = 'Componentes, StyleSheet, Agenda de Contatos e organização visual com Flexbox.';

    const flexBridge = interfaceModule.steps.find(s => s.id === 'interfaces-flexbox-ponte');
    if (flexBridge) {
      flexBridge.title = 'Organizando a interface com Flexbox';
      flexBridge.objective = 'Entender como os componentes ocupam e dividem o espaço da tela.';
      flexBridge.kicker = 'Quando a tela precisa se organizar';
      flexBridge.lead = 'Depois de criar os componentes, surge uma necessidade prática: decidir se eles ficam em linha, em coluna, centralizados, distribuídos ou ocupando o espaço disponível.';
      flexBridge.highlight = 'Flexbox é o sistema de layout usado no React Native para organizar os componentes dentro de seus containers.';
      flexBridge.boxes = [
        ['View', 'Cria containers que agrupam partes da interface.'],
        ['Flexbox', 'Define como os componentes dentro desses containers ocupam e dividem o espaço.'],
        ['Linha', "flexDirection: 'row' organiza os filhos horizontalmente."],
        ['Coluna', 'A direção padrão organiza os filhos verticalmente.'],
        ['Alinhamento', 'justifyContent e alignItems ajudam a distribuir e alinhar os componentes.'],
        ['Espaço disponível', 'flex permite que um componente cresça para ocupar parte do espaço da tela.']
      ];
    }

    const flexIntro = interfaceModule.steps.find(s => s.id === 'flex-intro');
    if (flexIntro) {
      flexIntro.menu = 'Laboratório Flexbox';
      flexIntro.title = 'Laboratório visual de Flexbox';
      if (Array.isArray(flexIntro.boxes)) {
        flexIntro.boxes = flexIntro.boxes.map(([label, text]) => {
          if (label === 'Regra do módulo') {
            return ['Como pensar', 'Não decore propriedades isoladas. Relacione cada propriedade ao problema visual que ela resolve.'];
          }
          return [label, text];
        });
      }
    }

    const exercises = interfaceModule.steps.filter(isExercise);
    if (exercises.length >= 2) {
      const interfaceExercise = exercises.find(s => /interface/i.test(`${s.id} ${s.title}`)) || exercises[0];
      const flexExercise = exercises.find(s => s !== interfaceExercise) || exercises[1];

      const mergedExercise = {
        ...interfaceExercise,
        id: 'exercicios-interface-flexbox',
        menu: '99. Exercícios',
        title: '99 — Exercícios de Interfaces e Flexbox',
        objective: 'Praticar construção de interfaces e organização visual com Flexbox.',
        exercisePage: true,
        html: `
          <div class="panel brief" style="margin-bottom:16px;">
            <div class="panel-body">
              <h3>Parte 1 — Construção de interfaces</h3>
              <p>Pratique componentes, campos, imagens, botões e organização da tela.</p>
            </div>
          </div>
          ${namespaceHtmlIds(interfaceExercise.html || '', 'if-')}
          <div class="panel brief" style="margin:20px 0 16px;">
            <div class="panel-body">
              <h3>Parte 2 — Flexbox</h3>
              <p>Pratique alinhamento, distribuição de espaço, linhas, colunas e layouts responsivos.</p>
            </div>
          </div>
          ${namespaceHtmlIds(flexExercise.html || '', 'fx-')}
        `
      };

      interfaceModule.steps = interfaceModule.steps
        .filter(step => !isExercise(step))
        .concat(mergedExercise);
    } else if (exercises.length === 1) {
      exercises[0].menu = '99. Exercícios';
      exercises[0].title = '99 — Exercícios de Interfaces e Flexbox';
    }

    renumberVisibleSteps(interfaceModule, interfaceModule.steps[0]?.id);
  }

  // 2. REACT E HOOKS -------------------------------------------------------
  if (modules.state) {
    const reactModule = modules.state;
    reactModule.subtitle = 'JSX, componentes, props, state, eventos, listas, interação, useRef e useEffect.';

    const intro = reactModule.steps.find(s => s.id === 'state-intro');
    if (intro) {
      intro.lead = 'Até aqui você construiu interfaces e estudou JavaScript essencial. Agora essas duas bases se encontram: React organiza a tela em componentes e acompanha dados que mudam durante o uso do aplicativo.';
      intro.highlight = 'Você começará lendo JSX, criará componentes reutilizáveis, passará dados com props e depois trabalhará com state, eventos, listas, referências e efeitos.';
    }

    const jsx = reactModule.steps.find(s => s.id === 'mbb-react-jsx');
    if (jsx) {
      delete jsx.modulePage;
      jsx.title = 'JSX: JavaScript e interface no mesmo arquivo';
      jsx.objective = 'Reconhecer onde está o JavaScript e onde está a descrição da interface.';
      jsx.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana';
  const pontos = 8;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, {nome}!</Text>
      <Text>Você tem {pontos} pontos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
});`;
      jsx.addedTitle = 'Observe a ligação';
      jsx.added = `const nome = 'Ana';
const pontos = 8;

Essas linhas são JavaScript.

<Text>Olá, {nome}!</Text>
<Text>Você tem {pontos} pontos.</Text>

Essas linhas fazem parte do JSX.
As chaves { } permitem usar uma expressão JavaScript dentro da interface.`;
      jsx.preview = `<div style="height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:18px;box-sizing:border-box;font-family:Arial,sans-serif;"><div><div style="font-size:24px;font-weight:800;margin-bottom:8px;">Olá, Ana!</div><div>Você tem 8 pontos.</div></div></div>`;
      jsx.note = 'JSX descreve o que aparece na tela; JavaScript fornece os valores e as regras usados nessa descrição.';
    }

    const cartaoFixo = reactModule.steps.find(s => s.id === 'mbb-react-cartao-fixo');
    if (cartaoFixo) {
      cartaoFixo.note = 'O cartão funciona para uma cidade. Agora surge a necessidade de reutilizar a mesma estrutura com valores diferentes.';
    }

    const propsState = reactModule.steps.find(s => s.id === 'mbb-react-props-state');
    if (propsState) {
      propsState.lead = 'Props e state aparecem juntos em muitos aplicativos, mas têm origens diferentes.';
      propsState.highlight = 'Props chegam ao componente. State pertence ao componente e pode mudar enquanto o aplicativo está sendo usado.';
      propsState.boxes = [
        ['props', 'Exemplo: cidade e temperatura recebidas por CartaoClima.'],
        ['state', 'Exemplo: nota digitada, resultado calculado ou texto que muda.'],
        ['Props chegam de fora', 'O componente recebe os valores definidos por quem o utiliza.'],
        ['State muda por dentro', 'O próprio componente atualiza o valor com uma função como setNota1.'],
        ['Na interface', 'Props e state podem ser usados dentro do JSX.'],
        ['Próxima necessidade', 'Na Média Escolar, as notas mudam enquanto você digita. É um caso natural para state.']
      ];
    }

    const conditional = reactModule.steps.find(s => s.id === 'mbb-react-condicional');
    if (conditional) {
      delete conditional.modulePage;
      conditional.title = 'Mostrando o resultado somente quando ele existe';
      conditional.objective = 'Aplicar && e operador ternário na própria Média Escolar.';
      conditional.code = `import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState('');
  const [situacao, setSituacao] = useState('');

  function calcular() {
    const resultado = (Number(nota1) + Number(nota2)) / 2;
    setMedia(resultado);

    if (resultado >= 7) {
      setSituacao('Aprovado');
    } else {
      setSituacao('Reprovado');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput value={nota1} onChangeText={setNota1} keyboardType="numeric" />
      <TextInput value={nota2} onChangeText={setNota2} keyboardType="numeric" />
      <Button title="Calcular" onPress={calcular} />

      {media !== '' && (
        <View style={styles.resultado}>
          <Text>Média: {media}</Text>
          <Text style={media >= 7 ? styles.aprovado : styles.reprovado}>
            {situacao}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  resultado: { marginTop: 18 },
  aprovado: { color: 'green', fontWeight: 'bold' },
  reprovado: { color: 'red', fontWeight: 'bold' },
});`;
      conditional.addedTitle = 'Duas decisões diferentes';
      conditional.added = `if/else continua fazendo a regra do cálculo:
se a média for 7 ou mais, a situação é Aprovado; caso contrário, Reprovado.

No JSX:
media !== '' && (...)
-> só mostra a área de resultado depois que existe uma média.

media >= 7 ? styles.aprovado : styles.reprovado
-> escolhe um dos dois estilos.

O ternário não substitui o if/else. Cada um está resolvendo uma necessidade diferente.`;
      conditional.preview = `<div style="height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:16px;box-sizing:border-box;font-family:Arial,sans-serif;"><div style="width:88%;max-width:280px;border:1px solid #cbd5e1;border-radius:14px;padding:18px;"><div style="font-weight:800;font-size:20px;margin-bottom:12px;">Média Escolar</div><div style="margin-bottom:6px;">Média: 8</div><div style="font-weight:800;color:#166534;">Aprovado</div></div></div>`;
      conditional.note = 'A interface passa a reagir ao state: antes do cálculo, o resultado não aparece; depois do cálculo, ele é exibido.';
    }

    const mapStep = reactModule.steps.find(s => s.id === 'mbb-react-map');
    if (mapStep) {
      mapStep.addedTitle = 'Do array para a tela';
      mapStep.added = `No JavaScript Essencial, você já trabalhou com arrays, objetos e map().

Agora voltamos aos cartões de clima porque já sabemos criar componentes e passar dados com props.

Cada objeto do array pode gerar um CartaoClima.
O map() percorre os dados e devolve componentes para a interface.`;
      mapStep.note = 'A mesma ideia de array e map() estudada em JavaScript agora produz elementos visuais no React.';
    }

    const keyStep = reactModule.steps.find(s => s.id === 'mbb-react-key');
    if (keyStep) {
      keyStep.menu = 'Identificar itens (key)';
      keyStep.title = 'Identificando cada item da lista com key';
      keyStep.kicker = 'Cada item precisa ter identidade';
      keyStep.lead = 'Quando vários componentes são criados a partir de uma lista, o React precisa distinguir um item do outro entre as renderizações.';
      keyStep.highlight = 'A propriedade key fornece uma identidade estável para cada item. Quando o dado já possui um id próprio, ele costuma ser a melhor escolha.';
    }

    const scrollCompare = reactModule.steps.find(s => s.id === 'mbb-react-listas-compare');
    if (scrollCompare && Array.isArray(scrollCompare.boxes)) {
      scrollCompare.boxes = scrollCompare.boxes.map(([label, text]) =>
        label === 'Didática'
          ? ['Caminho', 'Primeiro você entende uma área rolável simples; depois usa a ferramenta especializada para listas.']
          : [label, text]
      );
    }

    const flat = reactModule.steps.find(s => s.id === 'mbb-react-flatlist');
    if (flat) {
      flat.note = 'FlatList entra depois de array, map(), key e ScrollView porque agora já existe base para entender data, renderItem e keyExtractor.';
    }

    const buttons = reactModule.steps.find(s => s.id === 'mbb-react-botoes-compare');
    if (buttons) {
      buttons.lead = 'Button, TouchableOpacity e Pressable respondem ao toque, mas oferecem níveis diferentes de controle visual e estrutural.';
      buttons.highlight = 'TouchableOpacity continua sendo uma opção válida. Pressable oferece mais controle quando a interação precisa alterar aparência ou comportamento durante o toque.';
      if (Array.isArray(buttons.boxes)) {
        buttons.boxes = buttons.boxes.map(([label, text]) =>
          label === 'Preservação'
            ? ['TouchableOpacity na prática', 'Ele continua útil em áreas clicáveis personalizadas e aparece na Agenda de Contatos.']
            : [label, text]
        );
      }
    }

    const pressed = reactModule.steps.find(s => s.id === 'mbb-react-pressed');
    if (pressed) {
      pressed.menu = 'Toque ativo (pressed)';
      pressed.title = 'Mudando a aparência enquanto o botão está pressionado';
      pressed.objective = 'Usar o estado de toque pressed para alterar o estilo durante a interação.';
    }

    const refOptional = reactModule.steps.find(s => s.id === 'mbb-react-ref-avancar');
    if (refOptional) {
      refOptional.title = 'Complemento: avançando o foco para a Nota 2';
      refOptional.objective = 'Mover o foco para o próximo campo quando a edição da primeira nota terminar.';
      refOptional.addedTitle = 'Ao pressionar Avançar';
      refOptional.added = `onSubmitEditing
-> é disparado quando a edição do primeiro campo é concluída.

campoNota2.current?.focus()
-> coloca o cursor no segundo TextInput.

É outra aplicação prática da mesma ideia de referência usada no botão Limpar.`;
      refOptional.note = 'A referência permite controlar o foco do formulário sem transformar o foco em um state.';
    }

    const effectIntro = reactModule.steps.find(s => s.id === 'mbb-effect-intro');
    if (effectIntro) {
      effectIntro.menu = 'Sincronizar (useEffect)';
      effectIntro.title = 'Quando o componente precisa acompanhar algo de fora do React';
      effectIntro.objective = 'Entender a necessidade que leva ao uso de useEffect.';
      effectIntro.kicker = 'Uma necessidade diferente';
      effectIntro.lead = 'Algumas tarefas não acontecem apenas porque o usuário clicou ou porque um cálculo foi feito. O componente pode precisar manter algo sincronizado com um temporizador, uma assinatura, uma conexão ou outro sistema externo ao React.';
      effectIntro.highlight = 'useEffect é o Hook usado para configurar esse tipo de sincronização. Primeiro veremos isso com um temporizador, sem misturar ainda os detalhes de uma API.';
      effectIntro.boxes = [
        ['Algo externo', 'Temporizador, conexão, assinatura, API ou recurso do dispositivo.'],
        ['useEffect', 'Configura a sincronização necessária depois que a interface foi renderizada.'],
        ['Evento', 'Responde diretamente a uma ação do usuário, como tocar em Calcular.'],
        ['Cálculo simples', 'Se o valor pode ser calculado diretamente, não há motivo para criar um Effect.'],
        ['Primeiro exemplo', 'Um temporizador deixará visível a diferença entre state, evento e sincronização.'],
        ['Depois', 'A mesma ideia poderá ser aplicada a uma comunicação externa quando houver necessidade.']
      ];
    }

    const cleanup = reactModule.steps.find(s => s.id === 'mbb-effect-cleanup');
    if (cleanup) {
      cleanup.menu = 'Limpeza (cleanup)';
      cleanup.title = 'Encerrando o que o Effect iniciou';
      cleanup.objective = 'Entender por que uma sincronização também precisa saber como ser encerrada.';
      cleanup.note = 'Se o Effect inicia algo que continua ativo, como um intervalo, a função de cleanup deve encerrar esse trabalho quando ele deixar de ser necessário.';
    }

    const dependencies = reactModule.steps.find(s => s.id === 'mbb-effect-dependencias');
    if (dependencies) {
      dependencies.title = 'Dependências: quais valores a sincronização acompanha?';
      dependencies.objective = 'Relacionar o array de dependências aos valores reativos usados pelo Effect.';
      dependencies.kicker = 'O Effect depende de quê?';
      dependencies.lead = 'O array de dependências registra os valores reativos usados pela sincronização. Quando um desses valores muda, React pode precisar limpar a sincronização anterior e configurá-la novamente.';
      dependencies.highlight = 'Não pense em [] como um comando para “rodar uma vez”. Pense primeiro: quais props ou states este Effect usa para manter a sincronização correta?';
      dependencies.boxes = [
        ['Sem segundo argumento', 'O Effect é considerado depois de cada renderização.'],
        ['[]', 'Nenhuma prop ou state foi declarada como dependência da sincronização. O setup ocorre na montagem e o cleanup na desmontagem, com verificações extras possíveis em desenvolvimento.'],
        ['[cidade]', 'Se o Effect usa cidade como valor reativo, uma mudança em cidade pode exigir nova sincronização.'],
        ['Antes de refazer', 'React executa o cleanup da sincronização anterior.'],
        ['Regra prática', 'As dependências devem corresponder aos valores reativos realmente usados pelo Effect.'],
        ['Objetivo', 'Manter o componente e o sistema externo coerentes entre si.']
      ];
    }

    const strict = reactModule.steps.find(s => s.id === 'mbb-effect-strict');
    if (strict) {
      strict.title = 'Strict Mode: por que o Effect pode parecer repetir no desenvolvimento?';
      strict.objective = 'Reconhecer uma verificação comum do ambiente de desenvolvimento.';
      strict.kicker = 'Uma observação importante';
      strict.lead = 'Se Strict Mode estiver ativo no desenvolvimento, você pode observar uma sequência extra de setup e cleanup.';
      strict.highlight = 'Essa verificação ajuda a revelar Effects que não limpam corretamente o que iniciaram. Por isso, o código deve funcionar mesmo quando setup e cleanup forem executados em sequência.';
      strict.boxes = [
        ['Desenvolvimento', 'Pode ocorrer uma verificação extra de setup e cleanup.'],
        ['Produção', 'Essa verificação extra não deve ser tomada como o comportamento normal da aplicação publicada.'],
        ['Temporizador', 'Se um intervalo foi criado, ele deve ser removido no cleanup.'],
        ['Boa prática', 'Em vez de tentar impedir a verificação, escreva um cleanup correto.']
      ];
    }

    const effectEvent = reactModule.steps.find(s => s.id === 'mbb-effect-evento');
    if (effectEvent) {
      effectEvent.title = 'O que dispara a ação: evento ou Effect?';
      effectEvent.highlight = 'Se acontece porque o usuário fez algo agora, normalmente é evento. Se o componente precisa permanecer sincronizado com algo externo, use Effect.';
    }

    const noEffect = reactModule.steps.find(s => s.id === 'mbb-effect-nao-usar');
    if (noEffect) {
      noEffect.title = 'Quando useEffect não é necessário';
      noEffect.kicker = 'Nem toda lógica precisa de Effect';
      noEffect.lead = 'useEffect não é um lugar genérico para colocar qualquer lógica automática.';
      noEffect.highlight = 'Se um valor pode ser calculado diretamente a partir de props/state, calcule-o. Se algo acontece por causa de um toque, trate no evento correspondente.';
    }

    const apiBridgeEffect = reactModule.steps.find(s => s.id === 'mbb-effect-api-ponte');
    if (apiBridgeEffect) {
      apiBridgeEffect.title = 'Uma sincronização externa usando API';
      apiBridgeEffect.objective = 'Aplicar o conceito de Effect a uma fonte externa de dados sem antecipar o estudo completo de APIs.';
      apiBridgeEffect.addedTitle = 'Observe apenas a ligação com o Effect';
      apiBridgeEffect.added = `Neste exemplo, a API é apenas a fonte externa de dados.

Observe a sequência:
1. o componente é renderizado;
2. o Effect configura a consulta;
3. a resposta atualiza o state;
4. o novo state aparece na interface.

Cliente, servidor, HTTP, request, response, JSON e fetch serão estudados com detalhes no próximo módulo.`;
      apiBridgeEffect.note = 'O temporizador mostrou primeiro o conceito de sincronização. Agora a mesma ideia aparece ligada a uma fonte externa de dados.';
    }

    const hookSummary = reactModule.steps.find(s => s.id === 'mbb-hooks-resumo');
    if (hookSummary) {
      hookSummary.lead = 'useState, useRef e useEffect resolvem necessidades diferentes dentro do mesmo componente.';
      hookSummary.highlight = 'Antes de escolher um Hook, descreva o problema em uma frase simples: guardar um valor que muda, manter uma referência ou sincronizar com algo externo.';
    }

    const exercise = reactModule.steps.find(isExercise);
    if (exercise && exercise.html) {
      exercise.html = exercise.html.replace(
        /<div class="topline exercise-clean-top">\s*<h2>99\. Exercícios — Consolidação integrada de React e Hooks<\/h2>\s*<div class="objective"><strong>Objetivo:<\/strong> combinar componentes, props, state, eventos, listas, interação e Hooks em problemas reais\.<\/div>\s*<\/div>/,
        ''
      );
      exercise.menu = '99. Exercícios';
      exercise.title = '99 — Exercícios de React e Hooks';
      exercise.objective = 'Consolidar componentes, props, state, eventos, listas, interação, useRef e useEffect.';
    }

    renumberVisibleSteps(reactModule, 'state-intro');
  }

  // 3. WEB SERVICES/APIs ---------------------------------------------------
  if (modules.apiCep) {
    const apiModule = modules.apiCep;
    apiModule.subtitle = 'Cliente, servidor, HTTP, request/response, JSON, fetch e aplicações conectadas.';

    const intro = apiModule.steps.find(s => s.id === 'api-intro');
    const bridge = apiModule.steps.find(s => s.id === 'mbb-api-ponte-react');
    const climate = apiModule.steps.find(s => s.id === 'mbb-api-clima-espiral');
    const closing = apiModule.steps.find(s => s.id === 'api-fechamento');
    const exercises = apiModule.steps.filter(isExercise);

    if (bridge) {
      bridge.title = 'Ligando React aos dados da internet';
      bridge.objective = 'Relacionar state, eventos, componentes e listas ao consumo de dados externos.';
      bridge.kicker = 'As peças agora trabalham juntas';
      bridge.lead = 'Você já conhece state, eventos, componentes, props, listas e Effect. Agora vamos acompanhar o caminho da informação entre o aplicativo e um serviço na internet.';
      bridge.highlight = 'JavaScript trata dados e lógica; React organiza a interface; a API fornece dados externos; state guarda aquilo que a tela precisa mostrar.';
      bridge.boxes = [
        ['Evento', 'No ViaCEP, a consulta acontece quando você toca em Pesquisar.'],
        ['Effect', 'É útil quando existe uma necessidade real de sincronização automática com algo externo.'],
        ['State', 'Guarda CEP digitado, cidade, estado, cotação ou temperatura.'],
        ['Props', 'Permitem repassar os dados para componentes como CartaoClima.'],
        ['Lista', 'Coleções de dados podem virar componentes com map() ou FlatList.'],
        ['Escolha', 'Pergunte o que dispara a ação antes de decidir entre evento e Effect.']
      ];
    }

    if (climate) {
      climate.menu = 'Clima: do fixo aos dados reais';
      climate.title = 'Clima: do valor fixo aos dados reais';
      climate.objective = 'Entender como o mesmo aplicativo pode evoluir à medida que novos recursos são acrescentados.';
      climate.kicker = 'Do valor fixo ao aplicativo conectado';
      climate.lead = 'Você começou exibindo cidade e temperatura diretamente no código. Depois, o mesmo exemplo ganhou componentes reutilizáveis, props e listas. Agora os dados também podem chegar de um serviço externo.';
      climate.highlight = 'Valor fixo → componente → props → array/map → lista → API → localização do aparelho';
      climate.boxes = [
        ['1. Valor fixo', 'Cidade e temperatura aparecem diretamente no código.'],
        ['2. Componente', 'CartaoClima separa essa parte da interface em uma peça reutilizável.'],
        ['3. Props', 'O mesmo cartão passa a receber cidades e temperaturas diferentes.'],
        ['4. Lista', 'Um array com várias cidades gera vários cartões usando map() ou FlatList.'],
        ['5. API', 'A temperatura deixa de ser fixa e pode vir de um serviço na internet.'],
        ['6. Localização', 'Mais adiante, o GPS do aparelho poderá fornecer a posição usada para consultar o clima daquele local.']
      ];
    }

    if (closing) {
      closing.menu = 'Fechamento';
      closing.title = 'Fechamento: do pedido à tela';
      closing.objective = 'Reunir os conceitos principais do módulo em um único fluxo.';
      closing.kicker = 'O caminho completo da informação';
      closing.lead = 'Um aplicativo conectado combina várias peças: recebe uma entrada ou um gatilho, envia uma requisição, recebe dados, atualiza o state e mostra o resultado na interface.';
      closing.highlight = 'Gatilho → requisição → serviço externo → resposta → JSON → state → interface atualizada.';
      closing.boxes = [
        ['1. Gatilho', 'Uma ação do usuário ou uma necessidade de sincronização inicia o processo.'],
        ['2. Requisição', 'O aplicativo envia uma solicitação ao serviço externo.'],
        ['3. Resposta', 'O serviço devolve dados para o aplicativo.'],
        ['4. JSON', 'Os dados chegam organizados e podem ser lidos pelo JavaScript.'],
        ['5. State', 'Os valores necessários são guardados no componente.'],
        ['6. Interface', 'React renderiza a tela novamente com os novos dados.']
      ];
    }

    const middle = apiModule.steps.filter(step =>
      step &&
      step !== intro &&
      step !== bridge &&
      step !== climate &&
      step !== closing &&
      !isExercise(step)
    );

    apiModule.steps = [
      ...(intro ? [intro] : []),
      ...(bridge ? [bridge] : []),
      ...middle,
      ...(climate ? [climate] : []),
      ...(closing ? [closing] : []),
      ...exercises
    ];

    apiModule.steps.forEach(step => {
      if (!step) return;
      if (typeof step.code === 'string') {
        step.code = step.code.replaceAll('campoCep.current.focus()', 'campoCep.current?.focus()');
      }
      if (typeof step.added === 'string') {
        step.added = step.added.replaceAll('campoCep.current.focus()', 'campoCep.current?.focus()');
      }
    });

    renumberVisibleSteps(apiModule, 'api-intro');
  }

  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();
  if (typeof showStep === 'function' && typeof currentModuleKey !== 'undefined') {
    const current = modules[currentModuleKey] || modules.fundamentosMobile;
    if (current?.steps?.length) showStep(current.steps[0].id);
  }
}
