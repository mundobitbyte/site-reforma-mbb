// Ajustes pedagógicos e visuais do módulo Navegação entre Telas.
// Preserva a estrutura e os códigos funcionais, acrescentando contexto de execução e explicação dos conceitos.

if (typeof modules !== 'undefined' && modules.navegacao) {
  const navModule = modules.navegacao;
  const navStep = id => navModule.steps.find(step => step.id === id);

  const intro = navStep('nav-intro');
  if (intro) {
    intro.objective = 'Entender por que separar funcionalidades em telas e preparar o projeto para executar a navegação no Snack.';
    intro.lead = 'Busca CEP, cotação do dólar e clima são funcionalidades úteis. Em vez de manter três projetos separados, a Central de Consultas reúne uma tela inicial e uma tela para cada serviço.';
    intro.highlight = 'Este módulo pode ser iniciado com um Snack novo. Os códigos necessários aparecem completos nas próprias etapas, mesmo quando retomam funcionalidades estudadas anteriormente.';
    intro.boxes = [
      ['Problema', 'Um único App.js com muitas responsabilidades começa a ficar difícil de ler e manter.'],
      ['Primeira navegação', 'Comece com apenas duas telas no App.js para entender Stack.Screen e navigate().'],
      ['Organização', 'Depois, separe as telas na pasta screens para deixar o projeto mais fácil de manter.'],
      ['Código disponível', 'CEP, dólar e clima aparecem novamente em versões completas quando forem necessários.'],
      ['Fluxo', 'Início → escolher serviço → abrir tela → voltar.'],
      ['Resultado esperado', 'Snack vazio + dependências + arquivos indicados = aplicativo funcionando.'],
    ];
  }

  const dependencias = navStep('nav-dependencias');
  if (dependencias) {
    dependencias.objective = 'Entender por que a navegação precisa de bibliotecas adicionais e registrá-las no package.json do Snack.';
    dependencias.addedTitle = 'Antes do código: o que estas dependências fazem';
    dependencias.added = `O package.json registra as bibliotecas usadas pelo projeto. Para navegar entre telas, o aplicativo precisa acrescentar quatro dependências.

@react-navigation/native
-> núcleo do React Navigation.

@react-navigation/native-stack
-> fornece o navegador em pilha usado neste módulo.

react-native-screens
-> integra as telas da navegação aos recursos nativos do React Native.

react-native-safe-area-context
-> ajuda a respeitar áreas seguras da tela, como regiões próximas à barra de status.

FAÇA AGORA
1. No painel Project do Snack, abra package.json.
2. Localize o objeto "dependencies".
3. Acrescente as quatro entradas mostradas no quadro de código.
4. Não apague as dependências que já existirem.
5. Aguarde o Snack concluir a atualização das bibliotecas.`;
    dependencias.note = 'Confira antes de avançar: o Snack deve voltar a exibir o projeto sem erro de dependência. Nesta aula, as bibliotecas são registradas diretamente no package.json; não é necessário executar comandos npm.';
  }

  const primeiroApp = navStep('nav-primeiro-app');
  if (primeiroApp) {
    primeiroApp.addedTitle = 'Entenda o que apareceu de novo';
    primeiroApp.added = `POR QUE AGORA
Antes de dividir o projeto em vários arquivos, vamos fazer a navegação funcionar com apenas duas telas no App.js. Assim fica mais fácil enxergar o mecanismo principal.

CONTEÚDOS NOVOS
NavigationContainer
-> envolve a área do aplicativo que participa da navegação.

createNativeStackNavigator()
-> cria um navegador em pilha: uma nova tela é colocada sobre a anterior.

Stack.Navigator
-> agrupa as telas que pertencem a esse navegador.

Stack.Screen
-> registra uma tela. O atributo name cria o nome usado pela navegação e component informa qual componente deve ser exibido.

navigation
-> objeto recebido pela tela Inicio com os recursos de navegação.

navigation.navigate('BuscaCep')
-> pede ao navegador para abrir a tela registrada com o name BuscaCep.

FAÇA E TESTE
Substitua o App.js pelo código completo. No preview, toque em Buscar CEP. A tela Busca CEP deve abrir e o cabeçalho deve permitir voltar.`;
    primeiroApp.note = 'Se a segunda tela abrir e o retorno funcionar, a base da navegação está correta. Na próxima etapa, a mesma aplicação começará a ser organizada em arquivos separados.';
  }

  const modeloMental = navStep('nav-modelo-mental');
  if (modeloMental) {
    modeloMental.lead = 'Criar uma tela, registrá-la e abrir essa tela são três ações diferentes. Separar essas ideias evita confusão quando o projeto ganhar vários arquivos.';
    modeloMental.highlight = 'Criar o componente → registrar com Stack.Screen → abrir com navigation.navigate().';
    modeloMental.boxes = [
      ['Criar', 'O arquivo ou componente define o conteúdo da tela.'],
      ['Importar', 'Quando a tela estiver em outro arquivo, App.js precisa importá-la para poder usá-la.'],
      ['Registrar', 'Stack.Screen associa um name ao componente importado.'],
      ['Navegar', 'navigate() abre uma tela pelo mesmo name usado no registro.'],
      ['Voltar', 'O Native Stack mantém a tela anterior na pilha e fornece o retorno no cabeçalho.'],
      ['Regra de conferência', 'O texto de navigate() precisa corresponder exatamente ao name da Stack.Screen.'],
    ];
  }

  const inicio = navStep('nav-criar-inicio');
  if (inicio) {
    inicio.objective = 'Criar screens/Inicio.js e entender a responsabilidade da tela inicial dentro do aplicativo.';
    inicio.addedTitle = 'Por que criar Inicio.js agora?';
    inicio.added = `NECESSIDADE
A navegação já funciona, mas as telas ainda estão misturadas dentro de App.js. A primeira separação será a tela Inicio, responsável por apresentar os caminhos para os serviços do aplicativo.

FAÇA AGORA
1. No painel Project, crie a pasta screens.
2. Dentro dela, crie Inicio.js.
3. Cole o código completo desta etapa.
4. Não altere App.js ainda.

CONTEÚDOS IMPORTANTES
export default function Inicio(...)
-> transforma Inicio no componente principal exportado por este arquivo. Isso permitirá importá-lo depois em App.js.

{ navigation }
-> a tela recebe o objeto navigation quando for registrada no Stack. É ele que permitirá chamar navigate().

navigation.navigate('BuscaCep')
-> continua apontando para o nome da rota, e não para o nome físico do arquivo.

O QUE JÁ É CONHECIDO
View, Text, TouchableOpacity e StyleSheet continuam com o mesmo papel estudado nas interfaces.

CONFIRA
Neste momento o preview não precisa mudar, porque App.js ainda usa as telas que estão dentro dele.`;
    inicio.note = 'Próximo passo: criar BuscaCep.js. Só depois que os dois arquivos existirem App.js será alterado para importá-los, evitando erro de arquivo não encontrado.';
    if (typeof inicio.preview === 'string') {
      inicio.preview = inicio.preview.replace('Ainda não mudamos App.js.', 'O App.js permanece sem alterações nesta etapa.');
    }
  }

  const cepBase = navStep('nav-criar-cep-base');
  if (cepBase) {
    cepBase.objective = 'Criar screens/BuscaCep.js e distinguir o arquivo da tela do registro que será feito em App.js.';
    cepBase.addedTitle = 'A segunda tela passa a ter seu próprio arquivo';
    cepBase.added = `NECESSIDADE
Inicio.js já existe em screens. Agora a tela que será aberta pelo botão Buscar CEP também precisa existir como componente independente antes de ser importada pelo App.js.

FAÇA AGORA
1. Dentro da pasta screens, crie BuscaCep.js.
2. Cole o código completo desta etapa.
3. Ainda não altere App.js.

O QUE ESTE ARQUIVO FAZ
BuscaCep.js define o conteúdo da tela Busca CEP. Por enquanto ela é simples de propósito: primeiro estamos organizando a navegação; a consulta real será recolocada depois.

CONTEÚDO IMPORTANTE
export default function BuscaCep()
-> exporta a tela para que outro arquivo possa importá-la.

ATENÇÃO
Criar BuscaCep.js não registra automaticamente a tela no navegador. O registro acontece em App.js com Stack.Screen.

CONFIRA
A estrutura do Project deve mostrar:
screens/Inicio.js
screens/BuscaCep.js

O preview ainda permanece igual.`;
    cepBase.note = 'Próximo passo: agora que os dois arquivos existem, App.js poderá importá-los e deixar de conter o código interno dessas telas.';
  }

  const organizar = navStep('nav-organizar-app');
  if (organizar) {
    organizar.objective = 'Importar as telas criadas, registrá-las no Stack e compreender a nova responsabilidade do App.js.';
    organizar.addedTitle = 'Criar a tela não é o mesmo que registrá-la';
    organizar.added = `NECESSIDADE
Inicio.js e BuscaCep.js já existem, mas App.js ainda usa as versões antigas que estavam declaradas dentro dele. Agora vamos ligar App.js aos novos arquivos.

FAÇA AGORA
Substitua App.js pelo código completo desta etapa.

CONTEÚDOS NOVOS DESTA ORGANIZAÇÃO
import Inicio from './screens/Inicio';
import BuscaCep from './screens/BuscaCep';
-> importam componentes próprios do projeto. O caminho começa em App.js, entra em screens e localiza cada arquivo.

component={Inicio}
component={BuscaCep}
-> Stack.Screen recebe o componente importado que será mostrado naquela rota.

RESPONSABILIDADES A PARTIR DE AGORA
App.js
-> configura a navegação e registra as telas.

screens/Inicio.js
-> contém a interface da tela inicial e os acessos aos serviços.

screens/BuscaCep.js
-> contém a interface da tela de consulta.

screens x components
-> screens guarda telas navegáveis; components pode guardar peças reutilizáveis dentro dessas telas.

TESTE
O comportamento deve continuar igual ao da etapa 2: toque em Buscar CEP, abra a segunda tela e volte pelo cabeçalho.`;
    organizar.note = 'A aparência praticamente não muda; o ganho está na arquitetura. Se a navegação continuar funcionando, a separação dos arquivos foi feita corretamente.';
  }

  const cepCompleto = navStep('nav-cep-completo');
  if (cepCompleto) {
    cepCompleto.objective = 'Substituir a tela provisória por uma Busca CEP funcional e reconhecer os recursos reutilizados no código.';
    cepCompleto.addedTitle = 'A tela já está registrada; agora ela ganha sua função real';
    cepCompleto.added = `NECESSIDADE
A navegação já abre BuscaCep.js corretamente. Agora podemos trocar o conteúdo provisório pela consulta real sem alterar o registro da rota.

FAÇA AGORA
1. Abra screens/BuscaCep.js.
2. Apague o conteúdo provisório.
3. Cole o código completo desta etapa.
4. App.js e Inicio.js não precisam ser alterados.

RECURSOS QUE REAPARECEM
useState
-> guarda CEP, cidade, estado e mensagem que podem mudar na tela.

useRef
-> mantém a referência do campo para devolver o foco ao limpar.

fetch()
-> faz a consulta ao ViaCEP.

try/catch
-> permite tratar uma falha da consulta sem interromper o aplicativo.

cep.replace(/\\D/g, '')
-> remove caracteres que não são números antes de montar a URL.

cidade !== '' && (...)
-> mostra a área de resultado somente quando existe uma cidade para exibir.

campoCep.current?.focus()
-> devolve o foco ao campo somente se a referência estiver disponível.

TESTE
Digite um CEP válido, toque em Pesquisar e confira cidade e estado. Depois toque em Limpar e verifique se os dados desaparecem e o foco volta ao campo.`;
    cepCompleto.note = 'A navegação não mudou: Inicio continua abrindo a rota BuscaCep. O que mudou foi apenas o componente exibido nessa rota. A próxima etapa mostrará como acrescentar uma nova tela ao aplicativo.';
  }

  const guideStyle = 'margin:14px 0 18px;padding:14px 16px;border:1px solid #dbe3ef;border-radius:12px;background:#f8fbff;line-height:1.55;';
  const guideItemStyle = 'margin-top:8px;';

  function makeGuide(title, introText, items = []) {
    return `
      <div class="nav-pedagogical-guide" style="${guideStyle}">
        <strong style="display:block;font-size:16px;color:#0f3f86;margin-bottom:6px;">${title}</strong>
        <div>${introText}</div>
        ${items.map(item => `<div style="${guideItemStyle}"><strong>${item[0]}:</strong> ${item[1]}</div>`).join('')}
      </div>
    `;
  }

  function enrichCustomPage(step, generalGuide, fileGuides = {}) {
    if (!step || typeof step.html !== 'string') return;

    const template = document.createElement('template');
    template.innerHTML = step.html.trim();

    const firstCode = template.content.querySelector('pre[id^="nav-code-"]');
    const firstPanel = firstCode?.closest('.panel.brief');
    if (firstPanel && generalGuide) {
      firstPanel.insertAdjacentHTML('beforebegin', generalGuide);
    }

    template.content.querySelectorAll('pre[id^="nav-code-"]').forEach(pre => {
      const panel = pre.closest('.panel.brief');
      const fileName = panel?.querySelector('.panel-title span')?.textContent?.trim();
      const guide = fileName ? fileGuides[fileName] : null;
      if (panel && guide) {
        panel.insertAdjacentHTML('beforebegin', guide);
      }
    });

    step.html = template.innerHTML;
  }

  const dolar = navStep('nav-dolar');
  if (dolar && typeof dolar.html === 'string') {
    dolar.title = '8 — Adicionando Cotação do Dólar: criar, registrar e abrir uma nova tela';
    dolar.objective = 'Aplicar o ciclo completo de inclusão de uma nova tela e entender o papel de cada arquivo alterado.';
    dolar.html = dolar.html
      .replace('Espiral MbB: repetir o mesmo ciclo com uma nova tela', 'Uma nova necessidade: acrescentar outro serviço')
      .replace(
        'Agora você já conhece o ciclo. Primeiro criamos a tela, depois registramos no Stack e só então colocamos o botão na tela inicial. Assim o projeto permanece executável durante a alteração.',
        'A Central de Consultas já abre Busca CEP. Agora ela precisa oferecer também a Cotação do Dólar. Para isso, três partes do projeto precisam trabalhar juntas: a nova tela, o registro da rota e o botão que leva até ela.'
      );

    enrichCustomPage(
      dolar,
      makeGuide(
        'Antes de copiar: entenda as três alterações',
        'Adicionar uma tela não significa apenas criar um novo arquivo. O navegador também precisa conhecer essa tela, e o usuário precisa ter um caminho para chegar até ela.',
        [
          ['1. Criar', 'screens/CotacaoDolar.js define o conteúdo e o comportamento da nova tela.'],
          ['2. Registrar', 'App.js importa CotacaoDolar e acrescenta uma nova Stack.Screen com o name CotacaoDolar.'],
          ['3. Abrir', 'Inicio.js ganha um botão cujo onPress chama navigation.navigate(\'CotacaoDolar\').'],
          ['Teste esperado', 'A tela inicial passa a mostrar dois serviços. Ao tocar em Cotação do Dólar, a nova tela abre e o botão de voltar retorna ao Início.']
        ]
      ),
      {
        'screens/CotacaoDolar.js': makeGuide(
          '1. Crie screens/CotacaoDolar.js',
          'Comece pela tela. Criar o arquivo primeiro evita que App.js tente importar algo que ainda não existe.',
          [
            ['useState', 'cotacao guarda o objeto recebido da API e mensagem informa o estado da consulta.'],
            ['fetch', 'consulta a AwesomeAPI e recebe o objeto USDBRL.'],
            ['Number(...).toFixed(2)', 'converte os valores recebidos e os apresenta com duas casas decimais.'],
            ['Ainda não navega', 'Neste ponto a tela existe, mas ainda não foi registrada no Stack.']
          ]
        ),
        'App.js': makeGuide(
          '2. Registre a nova tela em App.js',
          'Depois que CotacaoDolar.js existe, App.js pode importá-lo e associá-lo a uma rota.',
          [
            ['Novo import', "import CotacaoDolar from './screens/CotacaoDolar'; traz o componente para App.js."],
            ['Nova Stack.Screen', 'name="CotacaoDolar" cria o nome da rota e component={CotacaoDolar} liga esse nome ao componente.'],
            ['Atenção', 'O name escolhido aqui será usado exatamente igual no navigate() da tela inicial.']
          ]
        ),
        'screens/Inicio.js': makeGuide(
          '3. Acrescente o caminho na tela Inicio',
          'A rota já existe. Falta oferecer ao usuário uma ação para abri-la.',
          [
            ['Novo botão', 'O segundo TouchableOpacity representa o acesso à cotação.'],
            ['navigate()', "navigation.navigate('CotacaoDolar') usa o mesmo nome registrado em Stack.Screen."],
            ['Confira', 'Depois de salvar os três arquivos, teste Busca CEP e Cotação do Dólar. As duas rotas devem continuar funcionando.']
          ]
        )
      }
    );
  }

  const clima = navStep('nav-clima');
  if (clima && typeof clima.html === 'string') {
    clima.title = '9 — Adicionando Clima Atual e consolidando o ciclo de navegação';
    clima.objective = 'Repetir conscientemente o ciclo criar → registrar → abrir e reconhecer os dados usados pela nova tela.';

    enrichCustomPage(
      clima,
      makeGuide(
        'Agora o processo deve ficar previsível',
        'Clima Atual entra pela mesma arquitetura usada no Dólar. O objetivo desta etapa é perceber que novas funcionalidades podem ser acrescentadas repetindo um processo organizado.',
        [
          ['Criar', 'ClimaAtual.js será o componente da nova tela.'],
          ['Registrar', 'App.js importará o componente e registrará a rota ClimaAtual.'],
          ['Abrir', 'Inicio.js ganhará o terceiro botão com navigate(\'ClimaAtual\').'],
          ['Teste esperado', 'A tela inicial mostrará três serviços, e cada um abrirá sua própria tela sem quebrar os anteriores.']
        ]
      ),
      {
        'screens/ClimaAtual.js': makeGuide(
          '1. Crie screens/ClimaAtual.js',
          'A tela consulta o clima atual de São Paulo usando coordenadas fixas. Isso mantém a atenção na navegação e evita introduzir permissões de GPS.',
          [
            ['dados.current', 'é o bloco da resposta usado para guardar as condições atuais retornadas pela Open-Meteo.'],
            ['temperature_2m', 'é o campo de temperatura atual usado na interface.'],
            ['wind_speed_10m', 'é o campo de velocidade do vento usado na interface.'],
            ['useState e fetch', 'já conhecidos, reaparecem para guardar e buscar os dados da tela.']
          ]
        ),
        'App.js': makeGuide(
          '2. Registre ClimaAtual em App.js',
          'O padrão é o mesmo da tela anterior: importar primeiro e registrar depois.',
          [
            ['Novo import', "import ClimaAtual from './screens/ClimaAtual';"],
            ['Nova rota', 'Stack.Screen usa name="ClimaAtual" e component={ClimaAtual}.'],
            ['Leitura da arquitetura', 'App.js não contém a consulta do clima; ele apenas sabe qual componente deve abrir para essa rota.']
          ]
        ),
        'screens/Inicio.js': makeGuide(
          '3. Acrescente o terceiro acesso em Inicio.js',
          'A tela inicial passa a funcionar como um pequeno menu de serviços.',
          [
            ['Novo botão', 'Clima Atual é acrescentado sem remover Busca CEP nem Cotação do Dólar.'],
            ['navigate()', "navigation.navigate('ClimaAtual') aponta para a rota recém-registrada."],
            ['Confira', 'Teste os três botões e também o retorno pelo cabeçalho antes de avançar.']
          ]
        )
      }
    );
  }

  const projetoFinal = navStep('nav-projeto-final');
  if (projetoFinal && typeof projetoFinal.html === 'string') {
    projetoFinal.title = '10 — Projeto completo: conferir ou reconstruir a Central de Consultas';
    projetoFinal.objective = 'Reunir a versão final dos arquivos sem introduzir novos conceitos.';
    projetoFinal.html = projetoFinal.html
      .replace('Checkpoint operacional', 'Ponto de recuperação')
      .replace('<strong>Teste MbB:</strong>', '<strong>Teste de recuperação:</strong>');

    enrichCustomPage(
      projetoFinal,
      makeGuide(
        'Aqui não há conteúdo novo',
        'Esta etapa reúne a versão final do projeto em um único lugar. Use-a para conferir diferenças, recuperar um arquivo perdido ou reconstruir a Central de Consultas em um Snack novo.',
        [
          ['Antes de copiar', 'Confirme as quatro dependências da etapa 1 no package.json.'],
          ['Estrutura', 'App.js configura a navegação; screens contém as quatro telas do projeto.'],
          ['Se seu projeto já funciona', 'Use os arquivos apenas para conferência. Não é necessário recopiá-los sem motivo.'],
          ['Teste final', 'Abra CEP, Dólar e Clima a partir de Inicio e confirme o retorno para a tela anterior.']
        ]
      )
    );
  }

  const consolidacao = navStep('nav-consolidacao');
  if (consolidacao) {
    consolidacao.lead = 'Ao acrescentar CEP, Dólar e Clima, o mesmo padrão apareceu várias vezes. Agora vale nomear claramente cada responsabilidade.';
    consolidacao.highlight = 'Tela define o conteúdo → import torna o componente disponível → Stack.Screen registra a rota → navigate() abre essa rota.';
  }

  function markDarkCodePanels(html = '') {
    const template = document.createElement('template');
    template.innerHTML = String(html).trim();

    template.content.querySelectorAll('pre[id^="nav-code-"]').forEach(pre => {
      const panel = pre.closest('.panel.brief');
      if (panel) panel.classList.add('nav-code-dark');
    });

    return template.innerHTML;
  }

  ['nav-dolar', 'nav-clima', 'nav-projeto-final'].forEach(id => {
    const step = navStep(id);
    if (step && typeof step.html === 'string') {
      step.html = markDarkCodePanels(step.html);
    }
  });

  if (!document.getElementById('nav-code-dark-style')) {
    const style = document.createElement('style');
    style.id = 'nav-code-dark-style';
    style.textContent = `
      .nav-code-dark {
        background: var(--code-bg) !important;
        color: var(--code-text) !important;
        border-color: #333 !important;
        overflow: hidden !important;
      }

      .nav-code-dark .panel-title {
        background: var(--code-head) !important;
        color: #e5e7eb !important;
        border-bottom: 1px solid rgba(255,255,255,.12) !important;
      }

      .nav-code-dark .panel-body {
        background: var(--code-bg) !important;
        padding: 0 !important;
      }

      .nav-code-dark pre {
        background: var(--code-bg) !important;
        color: var(--code-text) !important;
        margin: 0 !important;
        padding: 16px 18px !important;
        white-space: pre !important;
        overflow: auto !important;
      }

      .nav-code-dark .btn-copy {
        background: #444 !important;
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
  }

  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();
  if (
    typeof showStep === 'function' &&
    typeof currentModuleKey !== 'undefined' &&
    currentModuleKey === 'navegacao'
  ) {
    const first = navModule.steps[0];
    if (first) showStep(first.id);
  }
}
