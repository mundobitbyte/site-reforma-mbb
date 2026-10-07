// Mundo bit Byte — módulo 0. Fundamentos — React Native
// Modo MbB aplicado na experiência: situação -> necessidade -> conceito -> prática -> evidência.
(function () {
  if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

  const fundamentos = modules.fundamentosMobile;

  const cards = itens => `
    <div class="mbb-fund-grid">
      ${itens.map(([titulo, texto]) => `
        <article class="mbb-fund-card">
          <strong>${titulo}</strong>
          <span>${texto}</span>
        </article>`).join('')}
    </div>`;

  const figura = (src, alt, legenda) => `
    <figure class="mbb-fund-figure">
      <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
      <figcaption>${legenda}</figcaption>
    </figure>`;

  const evidencia = texto => `
    <div class="mbb-fund-evidence"><strong>Confira:</strong> ${texto}</div>`;

  const pagina = ({ kicker, titulo, lead, destaque = '', corpo = '' }) => `
    <section class="mbb-fund-page">
      <div class="mbb-fund-kicker">${kicker}</div>
      <h3>${titulo}</h3>
      <p class="mbb-fund-lead">${lead}</p>
      ${destaque ? `<div class="mbb-fund-highlight">${destaque}</div>` : ''}
      ${corpo}
    </section>`;

  if (!document.getElementById('mbb-fundamentos-reactnative-style')) {
    const style = document.createElement('style');
    style.id = 'mbb-fundamentos-reactnative-style';
    style.textContent = `
      .mbb-fund-page{max-width:1100px;margin:0 auto;padding:2px 2px 20px;color:#172033;line-height:1.58}
      .mbb-fund-kicker{font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#1967d2;margin-bottom:6px}
      .mbb-fund-page h3{font-size:clamp(1.45rem,2.4vw,2rem);line-height:1.2;margin:0 0 10px;color:#10213c}
      .mbb-fund-lead{font-size:1.02rem;margin:0 0 14px;color:#334155}
      .mbb-fund-highlight{background:#eef6ff;border-left:4px solid #1967d2;border-radius:10px;padding:13px 15px;margin:14px 0;font-weight:650;color:#17375e}
      .mbb-fund-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(205px,1fr));gap:12px;margin:14px 0}
      .mbb-fund-card{display:flex;flex-direction:column;gap:5px;background:#fff;border:1px solid #dbe3ef;border-radius:12px;padding:14px;box-shadow:0 3px 10px rgba(15,23,42,.05)}
      .mbb-fund-card strong{color:#123b73}.mbb-fund-card span{color:#475569;font-size:.94rem}
      .mbb-fund-flow{display:flex;align-items:stretch;justify-content:center;gap:8px;flex-wrap:wrap;margin:18px 0}
      .mbb-fund-flow .box{min-width:150px;flex:1 1 180px;max-width:240px;border:1px solid #bfdbfe;border-radius:12px;padding:13px;background:#f8fbff;text-align:center}
      .mbb-fund-flow .box strong{display:block;color:#0f3f86;margin-bottom:4px}.mbb-fund-flow .arrow{display:flex;align-items:center;font-weight:900;color:#64748b;font-size:1.2rem}
      .mbb-fund-figure{margin:16px auto;background:#fff;border:1px solid #dbe3ef;border-radius:12px;padding:10px;max-width:980px}
      .mbb-fund-figure img{display:block;width:100%;height:auto;border-radius:8px}.mbb-fund-figure figcaption{font-size:.82rem;color:#64748b;margin-top:8px;text-align:center}
      .mbb-fund-figure--inicio{max-width:980px}
      .mbb-fund-twofig{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;align-items:start}
      .mbb-fund-twofig .mbb-fund-figure{margin:0;max-width:none}
      .mbb-fund-twofig .mbb-fund-figure img{width:auto;max-width:100%;margin-left:auto;margin-right:auto}
      .mbb-fund-action{border:1px solid #cfe7d4;background:#f2fbf4;border-radius:12px;padding:14px 16px;margin:14px 0}
      .mbb-fund-action strong{display:block;color:#176b34;margin-bottom:6px}.mbb-fund-action ol,.mbb-fund-action ul{margin:7px 0 0 20px;padding:0}
      .mbb-fund-code{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:16px;overflow:auto;font:14px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;margin:14px 0;white-space:pre}
      .mbb-fund-before-after{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}.mbb-fund-before-after>div{border:1px solid #dbe3ef;border-radius:12px;padding:12px;background:#fff}.mbb-fund-before-after strong{display:block;color:#123b73;margin-bottom:6px}.mbb-fund-before-after code{font-family:Consolas,"Courier New",monospace}
      .mbb-fund-evidence{margin:16px 0 0;padding:12px 14px;border-radius:10px;background:#fff8e8;border:1px solid #f0d38c;color:#624a16}.mbb-fund-evidence strong{color:#7a5612}
      .mbb-fund-check{list-style:none;padding:0;margin:14px 0;display:grid;gap:8px}.mbb-fund-check li{background:#fff;border:1px solid #dbe3ef;border-radius:10px;padding:10px 12px}.mbb-fund-check li::before{content:'□';font-weight:800;margin-right:8px;color:#1967d2}
      .mbb-fund-small{font-size:.9rem;color:#64748b}
      @media(max-width:760px){.mbb-fund-flow .arrow{display:none}.mbb-fund-before-after{grid-template-columns:1fr}}
      @media(max-width:480px){.mbb-fund-page{padding-bottom:12px}}
    `;
    document.head.appendChild(style);
  }

  fundamentos.title = '0. Fundamentos';
  fundamentos.subtitle = 'React Native, Snack e o primeiro contato prático com código mobile.';

  const codigoBase = `import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Olá, Snack!</Text>
    </View>
  );
}`;

  fundamentos.steps = [
    {
      id: 'fund-intro-mbb',
      menu: 'Intro',
      title: 'Antes do primeiro código',
      objective: 'Reconhecer React Native, Snack e o ciclo abrir → alterar → observar → salvar.',
      html: pagina({
        kicker: 'Antes de programar',
        titulo: 'Primeiro vamos nos localizar — depois fazemos o código responder',
        lead: 'Você começará no Snack, onde o código e o resultado aparecem lado a lado.',
        destaque: 'O primeiro contato será simples: reconhecer o ambiente, alterar uma linha, observar o resultado e salvar o projeto.',
        corpo: `${cards([
          ['React Native', 'Será a tecnologia usada para construir os aplicativos.'],
          ['Snack', 'É o ambiente online em que faremos o primeiro experimento.'],
          ['Código e preview', 'Uma pequena alteração no código produzirá uma mudança visível.'],
          ['JavaScript', 'É a linguagem que dará dados, regras e comportamento aos aplicativos.']
        ])}${evidencia('Qual ferramenta será usada no navegador para o primeiro experimento?')}`
      })
    },
    {
      id: 'fund-reactnative-mbb',
      menu: '1. React Native',
      title: '1 — Onde o React Native entra?',
      objective: 'Distinguir JavaScript, React e React Native.',
      html: pagina({
        kicker: 'Um mapa simples',
        titulo: 'JavaScript, React e React Native trabalham juntos — mas não são a mesma coisa',
        lead: 'Aplicativos podem ser criados diretamente com tecnologias específicas de cada plataforma ou com soluções que compartilham grande parte do desenvolvimento entre plataformas. React Native segue esse segundo caminho.',
        destaque: 'React Native não é uma linguagem. JavaScript é a linguagem; React organiza a aplicação em componentes; React Native oferece componentes e recursos voltados ao ambiente mobile.',
        corpo: `
          <div class="mbb-fund-flow">
            <div class="box"><strong>JavaScript</strong>linguagem usada para dados, expressões, funções e regras</div>
            <div class="arrow">→</div>
            <div class="box"><strong>React</strong>organiza a aplicação em componentes</div>
            <div class="arrow">→</div>
            <div class="box"><strong>React Native</strong>leva essa organização para aplicativos mobile</div>
          </div>
          ${cards([
            ['Aplicação web', 'Roda no navegador e usa tecnologias próprias da Web.'],
            ['Aplicativo mobile', 'É pensado para o ambiente móvel e pode integrar recursos do dispositivo.'],
            ['Nativo', 'Usa diretamente as tecnologias específicas de uma plataforma.'],
            ['Cross-platform', 'Permite compartilhar grande parte da base de desenvolvimento entre plataformas.']
          ])}
          <p class="mbb-fund-small">JavaScript é a linguagem; React organiza componentes; React Native fornece os componentes e recursos usados no aplicativo mobile.</p>
          ${evidencia('Qual deles é a linguagem: JavaScript, React ou React Native?')}`
      })
    },
    {
      id: 'fund-expo-snack-mbb',
      menu: '2. Snack',
      title: '2 — Nosso primeiro laboratório: Snack',
      objective: 'Entender por que começaremos no navegador e onde o Expo entra.',
      html: pagina({
        kicker: 'Começando pelo navegador',
        titulo: 'Um laboratório React Native no navegador',
        lead: 'O Snack permite escrever código React Native e observar o resultado sem instalar um ambiente local completo.',
        destaque: 'Usaremos o Snack, uma ferramenta online do ecossistema Expo. Expo é o ecossistema de ferramentas e serviços; Snack é o laboratório online que utilizaremos agora.',
        corpo: `${cards([
          ['Snack', 'Permite experimentar React Native diretamente no navegador.'],
          ['Expo', 'É o ecossistema maior ao qual o Snack pertence.'],
          ['Código e resultado', 'Você escreve, observa o preview e compara o que mudou.'],
          ['Primeiro experimento', 'O navegador já é suficiente para escrever o código e observar o resultado.']
        ])}${evidencia('Complete: Expo é o ecossistema; Snack é ______.')}`
      })
    },
    {
      id: 'fund-ambiente-snack-mbb',
      menu: '3. Ambiente',
      title: '3 — Conhecendo o ambiente do Snack',
      objective: 'Reconhecer as regiões principais antes de modificar qualquer código.',
      html: pagina({
        kicker: 'Conheça o ambiente',
        titulo: 'Estrutura do projeto, editor e preview',
        lead: 'Acesse snack.expo.dev e localize três áreas: estrutura do projeto, editor de código e preview.',
        destaque: 'A interface pode mudar um pouco ao longo do tempo, mas essas três referências continuam guiando o trabalho.',
        corpo: `
          ${figura('../img/reactnative/tela_do_snack_expo_8803449d.webp', 'Tela do Snack com estrutura do projeto, editor e preview', 'Ambiente do Snack: estrutura do projeto, editor de código e preview.')}
          ${cards([
            ['1. Estrutura do projeto', 'É onde ficam arquivos como App.js e, mais tarde, pastas como assets e components.'],
            ['2. Editor', 'É onde abrimos um arquivo e modificamos seu código.'],
            ['3. Preview', 'É onde observamos a execução e verificamos o efeito das alterações.']
          ])}
          <div class="mbb-fund-action"><strong>Faça agora</strong>Abra o Snack e localize as três regiões.</div>
          ${evidencia('Localize App.js no projeto e identifique onde o resultado aparece no preview.')}`
      })
    },
    {
      id: 'fund-primeira-alteracao-mbb',
      menu: '4. Primeira alteração',
      title: '4 — Faça o código responder',
      objective: 'Realizar uma alteração pequena, previsível e verificável no App.js.',
      html: pagina({
        kicker: 'Primeiro experimento',
        titulo: 'Abra o App.js e faça a primeira alteração',
        lead: 'Ao abrir o Snack, localize App.js, o editor e o preview como na imagem abaixo.',
        destaque: 'Abra <b>App.js</b> e substitua todo o conteúdo pelo código-base abaixo.',
        corpo: `
          <figure class="mbb-fund-figure mbb-fund-figure--inicio">
            <img src="../img/reactnative/fundamentos/snack-inicial-livro.webp" alt="Ambiente inicial do Snack antes do login, com App.js aberto e preview à direita" loading="lazy" decoding="async">
            <figcaption>Tela inicial do Snack: App.js à esquerda, editor ao centro e preview à direita, antes do login e das alterações.</figcaption>
          </figure>
          <pre class="mbb-fund-code">${codigoBase.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
          <div class="mbb-fund-action"><strong>Agora altere uma única linha</strong>
            <ol>
              <li>localize exatamente <code>&lt;Text&gt;Olá, Snack!&lt;/Text&gt;</code>;</li>
              <li>troque somente o texto para <code>Meu primeiro aplicativo</code>;</li>
              <li>não altere mais nada;</li>
              <li>observe o preview.</li>
            </ol>
          </div>
          <div class="mbb-fund-before-after">
            <div><strong>Antes</strong><code>&lt;Text&gt;Olá, Snack!&lt;/Text&gt;</code></div>
            <div><strong>Depois</strong><code>&lt;Text&gt;Meu primeiro aplicativo&lt;/Text&gt;</code></div>
          </div>
          ${evidencia('O preview passou a mostrar “Meu primeiro aplicativo”? Isso confirma que a alteração no código foi refletida na interface.')}`
      })
    },
    {
      id: 'fund-salvar-retomar-mbb',
      menu: '5. Salvar',
      title: '5 — Salve o projeto para continuar depois',
      objective: 'Entrar na conta, salvar o projeto e confirmar que ele pode ser retomado.',
      html: pagina({
        kicker: 'Salvando o trabalho',
        titulo: 'Você modificou o projeto. Agora vamos guardá-lo',
        lead: 'Depois da primeira alteração, entre na conta e salve o projeto para poder retomá-lo depois.',
        destaque: '<strong>Login e Save não são a mesma coisa.</strong> O login identifica sua conta; Save registra o projeto para que ele possa ser retomado.',
        corpo: `
          <div class="mbb-fund-twofig">
            ${figura('../img/reactnative/fundamentos/snack-menu-avatar-nitido.webp', 'Menu do avatar do Snack com acesso a My Snacks', 'Depois do login, o menu do avatar permite acessar My Snacks.')}
            ${figura('../img/reactnative/fundamentos/snack-save-modal.webp', 'Janela de salvamento de um projeto no Snack', 'Ao salvar, dê ao projeto um nome simples e reconhecível.')}
          </div>
          <div class="mbb-fund-action"><strong>Faça agora</strong>
            <ol>
              <li>entre na sua conta Expo, se ainda não estiver logado;</li>
              <li>confirme que seu avatar aparece;</li>
              <li>clique em <b>Save</b>;</li>
              <li>dê um nome simples ao projeto e confirme;</li>
              <li>abra <b>My Snacks</b> e localize o projeto salvo.</li>
            </ol>
          </div>
          ${figura('../img/reactnative/fundamentos/snack-my-snacks-vazio.webp', 'Área My Snacks em uma conta sem projetos anteriores', 'Em uma conta nova, My Snacks pode aparecer vazio antes do primeiro salvamento.')}
          ${evidencia('Feche o projeto, volte a My Snacks e localize o projeto salvo.')}`
      })
    },
    {
      id: 'fund-o-que-apareceu-mbb',
      menu: '6. O que apareceu?',
      title: '6 — O que são JavaScript, JSX, View e Text?',
      objective: 'Reconhecer JavaScript, JSX, View e Text depois de já ter visto o código funcionar.',
      html: pagina({
        kicker: 'Lendo o código',
        titulo: 'Identifique as peças que já apareceram',
        lead: 'No exemplo que funcionou, cada parte tem um papel. Agora identifique os nomes que aparecerão ao longo do módulo.',
        destaque: 'JSX é uma sintaxe usada com JavaScript para descrever a interface. No React Native, <b>View</b> funciona como container e <b>Text</b> exibe texto.',
        corpo: `
          <pre class="mbb-fund-code">import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    &lt;View&gt;
      &lt;Text&gt;Meu primeiro aplicativo&lt;/Text&gt;
    &lt;/View&gt;
  );
}</pre>
          ${cards([
            ['JavaScript', 'É a linguagem usada no arquivo. Funções e outras regras serão estudadas no JS Essencial.'],
            ['JSX', 'É a forma usada aqui para descrever a estrutura visual dentro do código.'],
            ['View', 'Agrupa partes da interface.'],
            ['Text', 'Mostra texto na interface.'],
            ['App.js', 'É o arquivo em que começamos a ler e modificar o exemplo.'],
            ['Leitura do código', 'Use esses nomes para identificar o que já apareceu no exemplo.']
          ])}
          ${evidencia('No código acima, qual componente mostra o texto? E qual funciona como container?')}`
      })
    },
    {
      id: 'fund-fechamento-mbb',
      menu: '7. Confira',
      title: '7 — Próximo passo: JavaScript Essencial',
      objective: 'Confirmar os conhecimentos necessários antes do JS Essencial.',
      html: pagina({
        kicker: 'Fechamento',
        titulo: 'Agora existe uma razão para estudar JavaScript',
        lead: 'Você já conseguiu produzir uma mudança visível. O próximo passo é sair de textos fixos e começar a trabalhar com valores, expressões, decisões e funções.',
        destaque: 'Com esse primeiro ciclo completo, você já reconhece o ambiente, altera o App.js, salva o projeto e identifica os elementos básicos do código.',
        corpo: `
          <ul class="mbb-fund-check">
            <li>Consigo explicar a diferença entre JavaScript, React e React Native.</li>
            <li>Sei que Expo é o ecossistema e Snack é a ferramenta online usada aqui.</li>
            <li>Reconheço estrutura do projeto, editor e preview no Snack.</li>
            <li>Consigo abrir App.js, usar o código-base e fazer uma alteração visível.</li>
            <li>Entendi que login e salvamento são ações diferentes.</li>
            <li>Consigo localizar novamente um projeto em My Snacks.</li>
            <li>Reconheço JSX, View e Text.</li>
            <li>Entendo por que o próximo passo é JS Essencial.</li>
          </ul>
          ${evidencia('Se algum item ainda não estiver claro, volte à etapa correspondente.')}`
      })
    }
  ];

  setTimeout(() => {
    const botao = document.getElementById('module-fundamentosMobile');
    if (botao && botao.classList.contains('active')) botao.click();
  }, 0);
})();
