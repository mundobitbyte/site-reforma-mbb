// React e Hooks — explicações MbB, parte 2.
// Somente conteúdo pedagógico do painel inferior. Não altera código, preview, layout ou navegação.
(() => {
  const guides = {
    'mbb-react-condicional': ['Quando a própria interface depende de uma condição', `Até aqui usamos decisões para calcular valores. Agora a decisão também controla o que aparece na tela.

media !== '' && (...) significa: só inclua este bloco no JSX quando já existir uma média. Antes do cálculo, o resultado não precisa ocupar a interface.

Já media >= 7 ? styles.aprovado : styles.reprovado escolhe entre duas possibilidades de estilo.

Isso não torna if/else desnecessário. No exemplo, if/else continua adequado para a regra do cálculo, enquanto && e o ternário resolvem decisões diretamente ligadas à renderização.`],

    'mbb-react-map': ['Do array de dados para vários componentes', `No JavaScript Essencial, map() já servia para percorrer um array e produzir novos valores. No React, a mesma ideia ganha um uso visual: cada item pode produzir um componente.

O array cidades concentra os dados. O map() percorre esse array e, para cada objeto, cria um CartaoClima recebendo cidade e temperatura por props.

Isso evita escrever manualmente um cartão para cada cidade. Se os dados mudarem, a estrutura visual continua definida em um único componente.

O React também precisa identificar cada elemento dessa sequência. Por isso aparece key={item.id}. A próxima etapa aprofunda essa necessidade.`],

    'mbb-react-scrollview': ['ScrollView resolve o problema de conteúdo que ultrapassa a tela', `Quando aumentamos a quantidade de conteúdo, surge um limite físico: a tela do celular tem altura finita.

ScrollView cria uma região rolável. Tudo o que colocamos como filho dentro dela passa a fazer parte desse conteúdo que continua para baixo.

contentContainerStyle estiliza o container interno que reúne os filhos da rolagem.

Para conteúdo pequeno e controlado, ScrollView é simples e adequado. Quando o problema passa a ser uma lista grande ou dinâmica, FlatList entra por uma necessidade diferente.`],

    'mbb-react-flatlist': ['FlatList: quando o problema é uma lista de dados', `ScrollView mostrou como tornar uma área rolável. FlatList parte de outra necessidade: exibir uma coleção de dados que pode crescer.

data recebe o array; renderItem explica como cada item vira interface; keyExtractor informa como obter uma identidade estável para cada registro.

CartaoClima continua sendo reutilizado. FlatList não substitui o componente: ela organiza a forma de percorrer e renderizar a coleção.

É um bom exemplo de composição: os dados ficam no array, FlatList administra a lista e CartaoClima cuida de como cada item aparece.`],

    'mbb-react-pressable': ['Pressable transforma uma área personalizada em interação', `Button resolve ações simples, mas às vezes queremos que um cartão inteiro, uma linha ou outra área personalizada responda ao toque.

Pressable envolve o conteúdo que deve ser interativo e recebe onPress.

No exemplo, abrirDetalhes ainda apenas registra uma mensagem. O objetivo é separar duas responsabilidades: o cartão define a aparência; Pressable acrescenta comportamento de interação.

Essa escolha faz sentido quando precisamos de mais controle visual e estrutural do que um Button pronto oferece.`],

    'mbb-react-pressed': ['O próprio estado do toque pode influenciar o estilo', `Pressable também informa se está sendo pressionado naquele instante. É daí que vem pressed.

Em style={({ pressed }) => [...]}, pressed é fornecido pelo próprio Pressable. Enquanto o toque está ativo ele é verdadeiro; depois volta a ser falso.

pressed && styles.botaoPressionado reaproveita a lógica condicional: o segundo estilo só entra quando a condição é verdadeira.

A aparência passa a ser consequência do estado atual da interação, em vez de ser alterada manualmente por comandos separados.`],

    'state-11-useref': ['useRef: acessar um elemento sem transformar isso em state', `Depois de limpar o formulário queremos devolver o cursor ao primeiro TextInput. Esse problema não é um valor que precisa aparecer na interface; precisamos de uma referência ao próprio campo.

useRef(null) cria a referência. ref={campoNota1} liga a referência ao TextInput. Depois, campoNota1.current?.focus() pede foco ao elemento referenciado.

current guarda o valor atual da referência. O ?. evita tentar executar focus() se a referência ainda não estiver disponível.

Compare com useState: alterar state participa da renderização. Alterar current em uma ref não provoca uma nova renderização. Por isso useRef é adequado para foco e referências a elementos.`],

    'mbb-react-ref-avancar': ['A mesma referência pode melhorar o fluxo entre campos', `Agora aplicamos useRef a uma situação de experiência do usuário: ao terminar a Nota 1, o foco avança para a Nota 2.

A referência é ligada ao segundo TextInput. O evento onSubmitEditing do primeiro chama campoNota2.current?.focus().

Perceba como conceitos diferentes trabalham juntos: o evento diz QUANDO agir; a ref informa QUAL elemento deve receber a ação; focus() executa a operação.

Não precisamos criar state apenas para controlar esse foco.`],

    'state-12-final': ['Consolidação: várias peças formando um comportamento único', `A Média Escolar final reúne conceitos que foram apresentados separadamente.

TextInput recebe os dados; useState acompanha os valores; eventos respondem aos botões; a função calcular aplica a regra; if/else decide a situação; a renderização apresenta o resultado; useRef melhora o fluxo de foco.

Nenhum desses recursos existe isoladamente em um aplicativo real. Cada peça mantém uma responsabilidade e, juntas, formam o comportamento da tela.

Tente explicar o fluxo sem olhar o código: o que acontece quando o usuário digita, calcula e depois limpa? Se esse caminho estiver claro, os Hooks deixam de parecer comandos soltos.`],

    'mbb-effect-timer': ['useEffect aparece porque surgiu uma sincronização externa', `Até agora quase tudo aconteceu porque o usuário digitou ou tocou em algo. O temporizador é diferente: ele precisa continuar trabalhando com a passagem do tempo, mesmo sem um novo toque.

useEffect configura essa relação depois que o componente é renderizado. Dentro dele, setInterval pertence ao ambiente externo ao React e chama uma função a cada 1000 ms.

A cada disparo, setSegundos atualiza state. React recebe o novo valor e renderiza novamente o número mostrado na tela.

O fluxo é: componente renderiza → Effect configura o intervalo → relógio externo dispara → state muda → interface atualiza.

Ainda falta uma parte importante: se iniciamos um intervalo, também precisamos saber como encerrá-lo.`],

    'mbb-effect-cleanup': ['Cleanup: toda sincronização precisa saber como terminar', `O Effect anterior criou um intervalo que continua ativo. Se o componente deixar de precisar dele, esse trabalho não deve ficar rodando sem controle.

A função retornada pelo useEffect é o cleanup. Neste caso ela chama clearInterval(intervalo), encerrando o recurso que o setup criou.

Uma regra mental útil é observar pares: iniciou intervalo → limpa intervalo; adicionou assinatura ou listener → remove quando deixar de ser necessário.

Cleanup não é um detalhe estético. Ele faz parte da correção do Effect e evita recursos permanecendo ativos indevidamente.`],

    'mbb-effect-api-ponte': ['A mesma ideia de Effect aplicada a uma fonte externa de dados', `Depois do temporizador, usamos uma API apenas para enxergar outro tipo de sistema externo. O foco desta etapa ainda é o Effect, não o estudo completo de HTTP.

Quando o componente entra, o Effect inicia a consulta. fetch solicita os dados; await aguarda as etapas assíncronas; resposta.json() transforma a resposta em objeto JavaScript; setPreco atualiza o state.

Quando preco muda, React renderiza novamente e a cotação aparece na interface.

O modelo mental continua: renderização → sistema externo → resposta → atualização de state → nova interface.

No próximo módulo entram cliente, servidor, request, response, HTTP, JSON e tratamento da requisição com mais profundidade.`]
  };

  function apply() {
    if (typeof modules === 'undefined' || !modules.state || !Array.isArray(modules.state.steps)) {
      setTimeout(apply, 50);
      return;
    }

    Object.entries(guides).forEach(([id, [title, text]]) => {
      const step = modules.state.steps.find(item => String(item?.id) === id);
      if (!step || step.modulePage || step.exercisePage) return;
      step.addedTitle = title;
      step.added = text;
    });

    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'state') return;
    const active = modules.state.steps.find(step => {
      const button = document.getElementById(`btn-state-${step.id}`);
      return button && button.classList.contains('active');
    });
    if (!active || !guides[String(active.id)]) return;

    const panel = document.getElementById('mbbStepExplanation');
    const title = panel?.querySelector('.mbb-explanation-title');
    const text = panel?.querySelector('.mbb-explanation-text');
    if (title) title.textContent = active.addedTitle;
    if (text) text.textContent = active.added;
  }

  apply();
})();
