// Ajuste cirúrgico do módulo 0. Fundamentos: primeira alteração sobre o exemplo real do Snack.
(function () {
  if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

  const steps = modules.fundamentosMobile.steps || [];
  const primeira = steps.find(step => step.id === 'fund-primeira-alteracao-mbb');
  const leitura = steps.find(step => step.id === 'fund-o-que-apareceu-mbb');
  const fechamento = steps.find(step => step.id === 'fund-fechamento-mbb');

  if (primeira) {
    primeira.objective = 'Alterar somente um texto já existente no App.js e conferir o resultado no preview.';
    primeira.html = `
      <section class="mbb-fund-page">
        <div class="mbb-fund-kicker">Primeiro experimento</div>
        <h3>Abra o App.js e faça a primeira alteração</h3>
        <p class="mbb-fund-lead">Ao abrir o Snack, localize <b>App.js</b>, o editor e o preview como na imagem abaixo.</p>
        <figure class="mbb-fund-figure mbb-fund-figure--inicio">
          <img src="../img/reactnative/fundamentos/snack-inicial-livro.webp" alt="Ambiente inicial do Snack antes do login, com App.js aberto e preview à direita" loading="lazy" decoding="async">
          <figcaption>Tela inicial do Snack: App.js à esquerda, editor ao centro e preview à direita, antes do login e das alterações.</figcaption>
        </figure>
        <div class="mbb-fund-highlight">No <b>App.js</b>, procure o texto que também aparece no preview. Não apague o código inicial.</div>
        <div class="mbb-fund-before-after">
          <div><strong>Texto que aparece no exemplo</strong><code>Change code in the editor and watch it change on your phone! Save to get a shareable url.</code></div>
          <div><strong>Troque somente por</strong><code>Meu primeiro aplicativo</code></div>
        </div>
        <div class="mbb-fund-action"><strong>Faça agora</strong>
          <ol>
            <li>abra <b>App.js</b>;</li>
            <li>localize o texto mostrado acima dentro do componente <code>Text</code>;</li>
            <li>substitua somente esse texto por <code>Meu primeiro aplicativo</code>;</li>
            <li>não apague as tags nem altere outras linhas;</li>
            <li>observe o preview à direita.</li>
          </ol>
        </div>
        <div class="mbb-fund-evidence"><strong>Confira:</strong> O preview passou a mostrar “Meu primeiro aplicativo”? Isso confirma que a alteração no App.js foi refletida na interface.</div>
      </section>`;
  }

  if (leitura) {
    leitura.html = `
      <section class="mbb-fund-page">
        <div class="mbb-fund-kicker">Lendo o código</div>
        <h3>Identifique as peças que já apareceram</h3>
        <p class="mbb-fund-lead">Você já alterou um texto dentro do App.js. Agora reconheça os nomes das partes que estavam naquele código.</p>
        <div class="mbb-fund-highlight">JSX é a sintaxe usada com JavaScript para descrever a interface. No React Native, <b>View</b> agrupa elementos e <b>Text</b> exibe texto.</div>
        <pre class="mbb-fund-code">&lt;View style={styles.container}&gt;
  &lt;Text style={styles.paragraph}&gt;
    Meu primeiro aplicativo
  &lt;/Text&gt;
&lt;/View&gt;</pre>
        <div class="mbb-fund-grid">
          <article class="mbb-fund-card"><strong>JavaScript</strong><span>É a linguagem usada no arquivo. Valores, decisões e funções serão trabalhados no JS Essencial.</span></article>
          <article class="mbb-fund-card"><strong>JSX</strong><span>É a sintaxe usada para descrever a estrutura visual dentro do código.</span></article>
          <article class="mbb-fund-card"><strong>View</strong><span>Agrupa partes da interface.</span></article>
          <article class="mbb-fund-card"><strong>Text</strong><span>Mostra texto na interface.</span></article>
          <article class="mbb-fund-card"><strong>App.js</strong><span>É o arquivo em que você fez a primeira alteração.</span></article>
        </div>
        <div class="mbb-fund-evidence"><strong>Confira:</strong> No trecho acima, qual componente mostra o texto? E qual agrupa os elementos?</div>
      </section>`;
  }

  if (fechamento) {
    fechamento.html = fechamento.html.replace(
      'Consigo abrir App.js, usar o código-base e fazer uma alteração visível.',
      'Consigo abrir App.js, localizar um texto existente e fazer uma alteração visível.'
    );
  }
})();
