// React e Hooks — explicações MbB, parte 1.
// Somente conteúdo pedagógico do painel inferior. Não altera código, preview, layout ou navegação.
(() => {
  const guides = {
    'mbb-react-jsx': ['Como ler JSX sem misturar as duas camadas', `Até aqui você já viu JavaScript e já montou interfaces. O JSX é o ponto em que essas duas coisas se encontram.

Antes do return, const nome e const pontos são JavaScript comum: dados preparados pelo programa. Dentro do return começa a descrição da interface com componentes como View e Text.

Quando aparecem {nome} e {pontos}, as chaves dizem ao JSX para usar naquele ponto o valor de uma expressão JavaScript.

Uma boa leitura mental é: JavaScript prepara dados e regras; JSX descreve como essas informações aparecem na tela. JSX lembra HTML, mas aqui estamos usando componentes React Native dentro do código JavaScript.`],

    'mbb-react-componente-titulo': ['Por que criar um componente próprio', `Poderíamos escrever o título diretamente dentro de App, mas conforme a tela cresce isso mistura responsabilidades.

A função Titulo transforma aquela parte da interface em uma peça com nome próprio. Como ela retorna JSX, depois podemos usá-la como <Titulo />. Componentes personalizados começam com letra maiúscula para serem reconhecidos como componentes React.

No primeiro contato, manter Titulo no App.js ajuda a enxergar a ideia. Depois podemos mover a peça para components/Titulo.js e importá-la no App.js. A saída visual não muda; o que melhora é a organização.

Não é preciso criar um arquivo para qualquer detalhe. A separação faz sentido quando uma parte ganha identidade própria, pode crescer ou ser reutilizada.`],

    'mbb-react-cartao-fixo': ['Do componente simples para uma peça realmente útil', `CartaoClima reúne estrutura, conteúdo e estilo de uma parte da tela. Neste momento os valores São Paulo e 26 °C estão escritos dentro dele de propósito.

Primeiro comprovamos que a peça funciona. Depois percebemos seu limite: se quisermos Campinas ou Santos, copiar o componente inteiro seria repetição.

O desenho do cartão é o mesmo; apenas os dados mudam. É dessa necessidade que surgem as props na próxima etapa.`],

    'mbb-react-props': ['Props: a mesma peça recebendo dados diferentes', `Na etapa anterior, CartaoClima sabia mostrar apenas os valores escritos dentro dele. Agora separamos responsabilidades: o componente decide COMO os dados aparecem; quem usa o componente informa QUAIS dados serão mostrados.

Em function CartaoClima({ cidade, temperatura }), cidade e temperatura são valores recebidos pelo componente. Depois eles aparecem no JSX como {cidade} e {temperatura}.

Nas chamadas <CartaoClima cidade="São Paulo" temperatura={26} /> e <CartaoClima cidade="Campinas" temperatura={28} />, o componente é o mesmo, mas os dados são diferentes.

Uma boa forma de pensar é: props são informações de entrada do componente. Elas vêm de fora. A comparação com state, que pertence ao componente e pode mudar, vem logo depois.`],

    'state-1-app': ['Começando a Média Escolar pelo alicerce', `Agora iniciamos um aplicativo que crescerá em várias etapas. A intenção não é jogar toda a lógica de uma vez, mas acompanhar como uma interface estática ganha comportamento.

Observe a estrutura básica do App: imports, função principal, return e StyleSheet. Ela será a base para campos, botões, state e eventos.

Construir por camadas ajuda a perceber de onde veio cada recurso e qual problema ele resolveu.`],

    'state-2-vazia': ['Primeiro garantimos a área principal da tela', `Antes de pedir notas ou fazer cálculos, precisamos de um lugar estável para montar a interface.

A View principal funciona como o container do aplicativo. O estilo define como esse espaço ocupa a tela e como os próximos componentes serão organizados.

A tela ainda parece vazia porque estamos resolvendo primeiro a estrutura. O comportamento virá depois.`],

    'state-3-titulo': ['A tela começa a comunicar sua finalidade', `Com a estrutura principal pronta, acrescentamos um Text para identificar o aplicativo como Média Escolar.

View organiza; Text apresenta informação. O style modifica a aparência, mas não muda a responsabilidade do componente.

Separar mentalmente estrutura, conteúdo e estilo ajuda bastante quando o código começa a crescer.`],

    'state-4-campos': ['Criando os pontos de entrada de dados', `O aplicativo precisa receber duas notas. Por isso entram os TextInput.

Neste momento eles ainda são principalmente campos visuais. O usuário consegue digitar, mas React ainda não acompanha esses valores como state.

keyboardType="numeric" ajuda o dispositivo a oferecer um teclado adequado, mas não faz a conversão numérica por nós.

Guarde a diferença: criar um campo não é o mesmo que criar a memória do valor digitado. Essa necessidade aparece daqui a pouco.`],

    'state-5-botoes': ['A interface ganha ações, mas ainda não comportamento', `Agora aparecem os botões que representarão ações do usuário.

Um botão é o controle visual; a função ligada ao evento é o comportamento. O botão não executa uma regra sozinho.

Nas próximas etapas ligaremos essas ações a onPress e veremos como o aplicativo reage ao toque do usuário.`],

    'state-6-resultados': ['Preparando onde o resultado será apresentado', `A interface já possui entrada de dados e ações. Agora reservamos a região em que média e situação serão mostradas.

Até aqui estamos completando a camada visual. Falta guardar o que o usuário digita, responder aos botões e calcular o resultado.

É exatamente nesse ponto que state deixa de ser abstrato e passa a resolver uma necessidade concreta.`],

    'state-7-state': ['useState: quando a interface precisa lembrar de um valor', `useState cria uma memória reativa para o componente.

Leia const [nota1, setNota1] = useState('') em três partes: nota1 é o valor atual; setNota1 é a função que o atualiza; '' é o valor inicial.

No TextInput, value={nota1} mostra o valor atual e onChangeText={setNota1} atualiza o state conforme o usuário digita.

Quando setNota1 recebe um novo valor, React registra a mudança e renderiza novamente o que depende desse state.

Pergunta prática: este valor pode mudar durante o uso e essa mudança precisa participar da interface? Se sim, state provavelmente entra na conversa.`],

    'state-8-eventos': ['Eventos: ligando uma ação do usuário a uma função', `Agora já temos dados guardados em state. O próximo problema é decidir quando executar uma ação.

onPress recebe uma função para ser chamada quando o usuário toca no botão. O evento é o gatilho; a função contém o trabalho.

Em onPress={calcular}, estamos passando calcular para ser executada depois, no momento do toque.

Esse modelo aparece por toda a interface: digitação dispara onChangeText; toque dispara onPress; conclusão da edição pode disparar onSubmitEditing.`],

    'state-9-calculo': ['Transformando os dados digitados em uma regra do aplicativo', `As notas estão guardadas como state. Agora usamos esses valores para calcular a média e determinar a situação.

TextInput trabalha com texto, por isso Number(...) converte os valores antes da soma.

Depois do cálculo, as funções de atualização gravam média e situação. React então renderiza novamente a parte da interface que depende desses states.

Fluxo completo: usuário digita → state recebe os valores → evento chama calcular → a função aplica a regra → state muda → a interface mostra o resultado.`],

    'state-10-limpar': ['Limpar também significa atualizar o estado da aplicação', `O botão Limpar reforça uma ideia central: a interface reflete o state.

Em vez de apagar manualmente elementos da tela, atualizamos os states para seus valores iniciais. Como campos e resultados dependem desses valores, React redesenha a interface.

Na próxima parte acrescentaremos uma melhoria de uso: devolver o foco ao primeiro campo. Para esse problema, state não é a ferramenta adequada; entra useRef.`]
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
