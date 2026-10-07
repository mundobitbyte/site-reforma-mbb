window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "arquivos-linha-comando",
  number: "10",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Arquivos e linha de comando",
  technicalTitle: "arquivo • formato • extensão • diretório • caminho • metadados • backup • CLI • shell • redirecionamento • pipe • permissões • arquivo em lote",
  title: "Quando você salva um arquivo, onde ele fica — e como o sistema o encontra?",
  objective: "Compreender arquivos, formatos, caminhos, diretórios e permissões e experimentar operações seguras no Prompt de Comando, incluindo redirecionamento, pipes e automação em lote.",
  content: String.raw`
    <div class="hero-box story-opening">
      <span class="eyebrow">Do clique ao caminho</span>
      <h2>Salvar <code>relatorio.pdf</code> parece simples, mas várias ideias trabalham juntas.</h2>
      <p>Nome, extensão, formato, diretório, caminho, sistema de arquivos e permissões determinam <strong>o que o arquivo é, onde aparece e quem pode utilizá-lo</strong>.</p>
    </div>

    <h3>Arquivo, extensão e formato</h3>
    <div class="comparison-grid three">
      <article><strong>Arquivo</strong><p>Unidade de dados armazenada e identificada dentro de um sistema de arquivos.</p></article>
      <article><strong>Extensão</strong><p>Parte do nome, como <code>.jpg</code> ou <code>.pdf</code>, que ajuda a indicar o tipo esperado.</p></article>
      <article><strong>Formato</strong><p>Regras que definem como os dados estão estruturados para que um programa consiga interpretá-los.</p></article>
    </div>
    <div class="note-box compact"><strong>Renomear não converte.</strong><p>Mudar <code>foto.jpg</code> para <code>foto.pdf</code> altera o nome, não transforma automaticamente o conteúdo JPEG em PDF.</p></div>

    <h3>Diretórios formam uma árvore</h3>
    <div class="example-box"><strong>Exemplo</strong><p><code>Documentos/</code><br>&nbsp;&nbsp;├─ <code>Escola/</code><br>&nbsp;&nbsp;│&nbsp;&nbsp;├─ <code>notas.xlsx</code><br>&nbsp;&nbsp;│&nbsp;&nbsp;└─ <code>prova.pdf</code><br>&nbsp;&nbsp;└─ <code>Pessoal/</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ <code>contas.pdf</code></p></div>
    <div class="definition-box"><span class="term">Diretório / pasta</span><p>É uma estrutura usada pelo sistema de arquivos para organizar referências a arquivos e outros diretórios.</p></div>

    <h3>Caminho — path</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Caminho absoluto</span><p>Indica uma localização a partir de um ponto principal do sistema, como <code>C:\Aulas\Fundamentos\atividade.txt</code>.</p></div>
      <div class="definition-box"><span class="term">Caminho relativo</span><p>É interpretado a partir do diretório atual, como <code>Fundamentos\atividade.txt</code> se você já estiver em <code>C:\Aulas</code>.</p></div>
    </div>
    <p>Em muitos sistemas, <code>.</code> representa o diretório atual e <code>..</code> representa o diretório pai.</p>
    <div class="note-box compact"><strong>Windows e sistemas Unix usam separadores diferentes.</strong><p>Windows tradicionalmente usa <code>\</code>; Linux e macOS usam <code>/</code>. O conceito de caminho é o mesmo.</p></div>

    <h3>A pasta é uma organização lógica</h3>
    <p>O caminho que vemos não precisa corresponder a uma sequência física contínua no SSD. O sistema de arquivos mantém estruturas com nomes, referências, metadados, permissões e informações que permitem localizar os dados.</p>
    <div class="definition-box"><span class="term">Metadados</span><p>São dados que descrevem outros dados. Arquivos podem ter nome, tamanho, datas, proprietário e permissões; fotografias podem conter data de captura, modelo da câmera e outras informações.</p></div>

    <h3>Copiar, mover e excluir</h3>
    <div class="comparison-grid three"><article><strong>Copiar</strong><p>Cria outra cópia dos dados em um novo local e preserva o original.</p></article><article><strong>Mover</strong><p>Altera a localização lógica. Dentro do mesmo sistema de arquivos, pode exigir principalmente atualização de referências.</p></article><article><strong>Excluir</strong><p>Em muitos sistemas de arquivos, remove ou invalida referências e marca espaço como reutilizável; a recuperação posterior depende do sistema, do dispositivo e de mecanismos como TRIM em SSDs.</p></article></div>

    <h3>Sincronização não é automaticamente backup</h3>
    <div class="comparison-grid"><article><strong>Sincronização</strong><p>Propaga alterações entre locais. Uma exclusão ou corrupção também pode ser sincronizada.</p></article><article><strong>Backup</strong><p>Existe para permitir recuperação depois de perda, corrupção ou erro, idealmente mantendo cópias ou versões independentes.</p></article></div>
    <details class="sources-box"><summary>Aprofunde: regra 3-2-1</summary><p>Uma recomendação tradicional é manter <strong>3 cópias</strong> dos dados, usando <strong>2 tipos de mídia ou tecnologias</strong>, com <strong>1 cópia fora do ambiente principal</strong>. O princípio é mais importante que decorar os números: uma única cópia não oferece redundância.</p></details>

    <h3>Linha de comando: outra interface para o mesmo sistema</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Windows_11_Command_Prompt.png" alt="Janela do Prompt de Comando do Windows 11" width="979" height="512" loading="lazy" decoding="async">
        <figcaption><strong>Prompt de Comando no Windows.</strong> A linha de comando permite pedir operações ao sistema sem depender de menus e janelas.<span class="credit">Microsoft; captura enviada por Paowee · o texto exibido é tratado no Wikimedia Commons como inelegível a copyright; marcas permanecem protegidas.</span></figcaption>
      </figure>
      <div><div class="definition-box"><span class="term">CLI — Command-Line Interface</span><p>É uma interface em que o usuário digita comandos para solicitar operações ao sistema.</p></div><div class="definition-box compact"><span class="term">Shell</span><p>É o programa que interpreta comandos e fornece uma forma de interagir com os serviços do sistema operacional.</p></div></div>
    </div>
    <p>Windows possui CMD e PowerShell; Linux utiliza shells como Bash. As sintaxes mudam, mas conceitos como <strong>diretório atual, caminho, listar, copiar, mover, filtrar e redirecionar</strong> permanecem.</p>

    <h3>Laboratório seguro — Windows CMD</h3>
    <div class="ok-box"><strong>Regra de segurança</strong><p>Faça toda a experiência dentro de uma pasta criada para o laboratório. Não teste comandos de exclusão em pastas pessoais ou do sistema.</p></div>
    <div class="table-wrap"><table><thead><tr><th>Comando</th><th>Função</th></tr></thead><tbody>
      <tr><td><code>mkdir laboratorio_mbb</code></td><td>cria a pasta do laboratório</td></tr>
      <tr><td><code>cd laboratorio_mbb</code></td><td>entra na pasta</td></tr>
      <tr><td><code>dir</code></td><td>lista o conteúdo</td></tr>
      <tr><td><code>echo Meu primeiro arquivo &gt; teste.txt</code></td><td>grava uma linha em um arquivo</td></tr>
      <tr><td><code>type teste.txt</code></td><td>mostra o conteúdo</td></tr>
      <tr><td><code>copy teste.txt copia.txt</code></td><td>cria uma cópia</td></tr>
      <tr><td><code>mkdir documentos</code></td><td>cria uma subpasta</td></tr>
      <tr><td><code>move copia.txt documentos</code></td><td>move o arquivo</td></tr>
      <tr><td><code>cd ..</code></td><td>volta ao diretório pai</td></tr>
    </tbody></table></div>

    <h3>Quando a tela mostra dados demais</h3>
    <div class="hero-box">
      <span class="eyebrow">Situação</span>
      <p>Imagine uma pasta com centenas de arquivos. Você precisa encontrar apenas os nomes terminados em <code>.txt</code> e guardar essa lista para usar depois. Copiar manualmente o que aparece na tela seria lento e sujeito a erro. <strong>É aí que redirecionamento e composição de comandos deixam de ser símbolos estranhos e passam a resolver um problema real.</strong></p>
    </div>
    <div class="comparison-grid three"><article><strong><code>&gt;</code></strong><p>Redireciona a saída para um arquivo, normalmente substituindo o conteúdo existente.</p></article><article><strong><code>&gt;&gt;</code></strong><p>Acrescenta a saída ao final de um arquivo.</p></article><article><strong><code>|</code> — pipe</strong><p>Envia a saída de um comando para a entrada do próximo, permitindo composição.</p></article></div>
    <div class="example-box"><strong>Composição</strong><p><code>dir /b | findstr /L /E ".txt" &gt; lista.txt</code></p><p><code>dir /b</code> gera apenas os nomes → <code>findstr /L /E ".txt"</code> procura literalmente <code>.txt</code> no fim da linha → <code>&gt;</code> grava o resultado em <code>lista.txt</code>.</p></div>
    <p><strong>Pequenos comandos podem ser conectados para resolver tarefas maiores.</strong></p>

    <h3>Quando repetir comandos vira desperdício</h3>
    <p>Imagine executar a mesma sequência toda semana: criar um resumo, listar arquivos e gravar o resultado. Em vez de digitar tudo novamente, podemos guardar os comandos em um arquivo.</p>
    <div class="definition-box featured"><span class="term">Arquivo em lote — <code>.bat</code></span><p>É um arquivo de texto contendo uma sequência de comandos que o CMD pode executar em ordem. Ele permite automatizar tarefas repetitivas simples.</p></div>
    <div class="example-box"><strong>Dentro de <code>laboratorio_mbb</code>, crie <code>resumo.bat</code> com:</strong><p><code>@echo off</code><br><code>echo Relatorio do laboratorio &gt; resumo.txt</code><br><code>dir *.txt &gt;&gt; resumo.txt</code><br><code>echo Concluido.</code></p><p>Depois execute <code>resumo.bat</code>. O CMD realizará a sequência e criará/atualizará <code>resumo.txt</code>.</p></div>
    <div class="note-box compact"><strong>Automação aumenta poder e responsabilidade.</strong><p>Antes de executar um arquivo em lote obtido de outra pessoa, leia os comandos. Um script pode repetir rapidamente tanto operações úteis quanto operações destrutivas.</p></div>

    <h3>E no Linux?</h3>
    <div class="table-wrap"><table><thead><tr><th>Ideia</th><th>Windows CMD</th><th>Linux/Bash</th></tr></thead><tbody>
      <tr><td>listar</td><td><code>dir</code></td><td><code>ls</code></td></tr>
      <tr><td>criar diretório</td><td><code>mkdir</code></td><td><code>mkdir</code></td></tr>
      <tr><td>copiar</td><td><code>copy</code></td><td><code>cp</code></td></tr>
      <tr><td>mover/renomear</td><td><code>move</code> / <code>ren</code></td><td><code>mv</code></td></tr>
      <tr><td>mostrar arquivo</td><td><code>type</code></td><td><code>cat</code></td></tr>
      <tr><td>filtrar texto</td><td><code>findstr</code></td><td><code>grep</code></td></tr>
    </tbody></table></div>
    <p>O objetivo não é decorar duas listas. É compreender a operação e depois aprender a sintaxe do ambiente utilizado.</p>

    <h3>Permissões: agora olhando um arquivo real</h3>
    <div class="definition-box"><span class="term">Permissão</span><p>Define quais operações determinado usuário ou processo pode realizar sobre um recurso.</p></div>
    <p>No Windows, dentro do laboratório, você pode <strong>consultar</strong> as permissões de um arquivo sem alterá-las:</p>
    <div class="code-focus"><code>icacls teste.txt</code></div>
    <p>O resultado mostra entradas de controle de acesso associadas ao arquivo. Em Linux, <code>ls -l</code> exibe permissões como <code>r</code> (leitura), <code>w</code> (gravação) e <code>x</code> (execução), além de proprietário e grupo.</p>
    <div class="note-box compact"><strong>Primeiro observe; depois altere.</strong><p>Modificar permissões sem compreender o efeito pode bloquear acesso ao próprio arquivo ou ampliar acesso indevido. Nesta aula, a prática é de identificação e interpretação.</p></div>
    <div class="note-box compact"><strong>Oculto não significa protegido.</strong><p>Um arquivo oculto pode apenas estar fora da visualização normal. Segurança depende de permissões, criptografia e outros controles — não do fato de um ícone estar escondido.</p></div>

    <h3>Missão prática</h3>
    <div class="mbb-pause-question"><strong>Construa sem tocar em seus arquivos pessoais</strong><p>Dentro de <code>laboratorio_mbb</code>, crie <code>textos</code>, produza <code>aula1.txt</code>, acrescente uma segunda linha com <code>&gt;&gt;</code>, copie para <code>aula2.txt</code>, liste arquivos <code>.txt</code> com um pipe, grave essa listagem em <code>lista.txt</code>, execute o <code>resumo.bat</code> e consulte permissões com <code>icacls</code>.</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Checkpoint 3</span><h3>Você consegue localizar, transformar e automatizar sem se perder?</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A extensão faz parte do nome e sugere o formato; renomear não reestrutura os dados internos."><p>Renomear <code>foto.jpg</code> para <code>foto.pdf</code>:</p><label><input type="radio" name="q10a" value="a"> sempre converte a imagem em PDF.</label><label><input type="radio" name="q10a" value="b"> apaga o conteúdo.</label><label><input type="radio" name="q10a" value="c"> muda o nome, mas não necessariamente o formato interno.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Do diretório atual, .. representa normalmente o diretório pai."><p>Em muitos shells, <code>..</code> representa:</p><label><input type="radio" name="q10b" value="a"> a raiz de qualquer disco.</label><label><input type="radio" name="q10b" value="b"> o diretório pai.</label><label><input type="radio" name="q10b" value="c"> um arquivo oculto.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Sincronização pode propagar uma exclusão; backup existe para permitir recuperação independente."><p>Por que uma pasta sincronizada não é automaticamente um backup suficiente?</p><label><input type="radio" name="q10c" value="a"> Porque alterações ruins e exclusões também podem ser sincronizadas.</label><label><input type="radio" name="q10c" value="b"> Porque sincronização nunca copia arquivos.</label><label><input type="radio" name="q10c" value="c"> Porque backup só funciona em HDD.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Um .bat reúne comandos que podem ser executados em sequência pelo CMD."><p>Qual é a principal ideia de um arquivo <code>.bat</code>?</p><label><input type="radio" name="q10d" value="a"> Converter arquivos para binário.</label><label><input type="radio" name="q10d" value="b"> Criar uma nova partição.</label><label><input type="radio" name="q10d" value="c"> Automatizar uma sequência de comandos.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Arquivos têm <strong>conteúdo e formato</strong>; extensão faz parte do nome. Diretórios formam uma estrutura hierárquica e caminhos permitem localizar recursos. A linha de comando manipula os mesmos arquivos que a interface gráfica e permite <strong>automatizar, redirecionar e combinar operações</strong>. Arquivos em lote automatizam sequências; permissões controlam acesso; backup e sincronização não são a mesma coisa.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Até aqui os dados ficaram dentro de um computador. Como dois computadores separados conseguem trocar esses dados?</p></div>

    <details class="sources-box"><summary>Fontes e crédito da imagem</summary><ul>
      <li><a href="https://learn.microsoft.com/windows-server/administration/windows-commands/icacls" target="_blank" rel="noopener">Microsoft Learn — icacls</a></li>
      <li><a href="https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands" target="_blank" rel="noopener">Microsoft Learn — comandos do Windows</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Windows_11_Command_Prompt.png" target="_blank" rel="noopener">Wikimedia Commons — Prompt de Comando</a></li>
    </ul></details>
  `
});
