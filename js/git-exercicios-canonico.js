const exerciseSteps = [
  {
    "id": "inicio",
    "menu": "Como praticar",
    "title": "99 — Exercícios de Git e GitHub",
    "objective": "Transferir o que foi aprendido para outro projeto, em ordem crescente e sem depender do exemplo do Café Aurora.",
    "content": "\n        <div class=\"hero-box\">\n          <span class=\"part-badge\">Prática MbB</span>\n          <h3>Agora o projeto é outro</h3>\n          <p>Você vai cuidar dos arquivos da <strong>Feira Criativa do Bairro</strong>, um pequeno evento local. A organização precisa manter horário, local e avisos sem perder o histórico das mudanças.</p>\n        </div>\n        <p>O contexto mudou de propósito. Se você consegue aplicar o mesmo raciocínio em outro projeto, não está apenas repetindo comandos: está transferindo o aprendizado.</p>\n        <div class=\"concept-box\"><strong>Regra MbB:</strong> tente sozinho → use a dica se necessário → só depois abra uma possível resposta.</div>\n        <div class=\"flow\">criar → registrar → investigar → corrigir → recuperar → experimentar → publicar → enviar → receber → clonar → sincronizar cópias → publicar branch → integrar → diagnosticar</div>\n      <div class=\"note-box\" data-mbb-exp=\"exercise-understanding\"><strong>Antes de abrir uma resposta:</strong> tente dizer em voz alta o que cada comando deveria fazer e o que você espera observar depois. O objetivo dos exercícios não é decorar sequências, mas escolher comandos porque você entendeu a situação.</div>"
  },
  {
    "id": "e1",
    "menu": "1 Pasta",
    "title": "Exercício 1 — Preparando o projeto da feira",
    "objective": "Criar e localizar a pasta de trabalho sem depender de um caminho fixo de usuário.",
    "content": "\n      <div class=\"task-box\"><h4><span class=\"exercise-number\">1</span>Desafio</h4>\n      <p>Use o <strong>mesmo local-base que você escolheu no Café Aurora</strong>: usuário local ou sua pasta na rede. Dentro de <span class=\"inline-code\">meus-repositorios</span>, crie <span class=\"inline-code\">feira-criativa</span>, entre nela e confirme o local.</p></div>\n      <details class=\"answer-box\"><summary>Conferir uma possível resposta</summary><div class=\"answer-content\">\n        <p><strong>Se você trabalha no usuário local:</strong></p>\n        <pre class=\"command\">cd /d \"%USERPROFILE%\\meus-repositorios\"\nmkdir feira-criativa\ncd feira-criativa\ncd\ndir</pre>\n        <p><strong>Se você trabalha na rede:</strong></p>\n        <pre class=\"command\">pushd \\\\10.66.53.1\\Publica\\mtec2025\\nome.sobrenome\\meus-repositorios\nmkdir feira-criativa\ncd feira-criativa\ncd\ndir</pre>\n        <p>Na rede, substitua <span class=\"inline-code\">nome.sobrenome</span> pelo nome da sua pasta.</p>\n      </div></details>"
  },
  {
    "id": "e2",
    "menu": "2 Iniciar",
    "title": "Exercício 2 — Começando o histórico",
    "objective": "Transformar a pasta em repositório e conferir seu estado.",
    "content": "\n      <div class=\"task-box\"><h4><span class=\"exercise-number\">2</span>Desafio</h4>\n      <p>Transforme <span class=\"inline-code\">feira-criativa</span> em repositório e confirme se o Git o reconhece.</p></div>\n      <details class=\"answer-box\"><summary>Conferir resposta</summary><div class=\"answer-content\">\n        <pre class=\"command\">git init\ngit status</pre>\n        <div class=\"note-box\"><strong>Se a Feira Criativa estiver na rede</strong> e aparecer <span class=\"inline-code\">detected dubious ownership</span>, copie o comando sugerido pelo próprio Git. No Git CMD, troque somente as aspas simples por aspas duplas e preserve <span class=\"inline-code\">%(prefix)///</span> se aparecer. Depois execute <span class=\"inline-code\">git status</span> novamente. A autorização do Café Aurora não autoriza automaticamente este novo repositório.</div>\n      </div></details>"
  },
  {
    "id": "e3",
    "menu": "3 Primeiro commit",
    "title": "Exercício 3 — Registrando o primeiro estado aprovado",
    "objective": "Percorrer arquivo → status → add → status → commit → status.",
    "content": "\n        <div class=\"task-box\"><h4><span class=\"exercise-number\">3</span>Desafio</h4><p>Crie <span class=\"inline-code\">evento.txt</span> com <strong>Feira Criativa - sabado 10h</strong>. Confira, prepare e registre esse primeiro estado.</p></div>\n        <details class=\"answer-box\"><summary>Conferir uma possível resposta</summary><div class=\"answer-content\"><pre class=\"command\">echo Feira Criativa - sabado 10h &gt; evento.txt\ntype evento.txt\ngit status\ngit add evento.txt\ngit status\ngit commit -m \"Registra informacoes iniciais da feira\"\ngit status</pre></div></details>"
  },
  {
    "id": "e4",
    "menu": "4 Mudança",
    "title": "Exercício 4 — Descobrindo exatamente o que mudou",
    "objective": "Diferenciar o estado do repositório do conteúdo alterado.",
    "content": "\n        <div class=\"task-box\"><h4><span class=\"exercise-number\">4</span>Desafio</h4><p>A organização confirmou o local. Acrescente <strong>Local: Praca Central</strong> a <span class=\"inline-code\">evento.txt</span>. Descubra primeiro qual arquivo mudou e depois quais linhas mudaram.</p></div>\n        <h3>Dica</h3><p>Use um comando para o estado e outro para a diferença.</p>\n        <details class=\"answer-box\"><summary>Conferir resposta</summary><div class=\"answer-content\"><pre class=\"command\">echo Local: Praca Central &gt;&gt; evento.txt\ngit status\ngit diff</pre></div></details>"
  },
  {
    "id": "e5",
    "menu": "5 Histórico",
    "title": "Exercício 5 — Registrando e investigando a segunda versão",
    "objective": "Criar outro commit, localizar seu hash e investigar o que ele alterou.",
    "content": "\n        <div class=\"task-box\"><h4><span class=\"exercise-number\">5</span>Desafio</h4><p>Registre a mudança do local, consulte o histórico resumido e use o hash do commit mais recente para ver exatamente o que ele introduziu.</p></div>\n        <details class=\"answer-box\"><summary>Conferir roteiro</summary><div class=\"answer-content\"><pre class=\"command\">git add evento.txt\ngit commit -m \"Adiciona local da feira\"\ngit log --oneline\ngit show HASH</pre><p>Substitua <span class=\"inline-code\">HASH</span> pelo identificador real mostrado para <strong>Adiciona local da feira</strong>. Pressione <span class=\"inline-code\">q</span> se a visualização ocupar a tela.</p></div></details>"
  },
  {
    "id": "e6",
    "menu": "6 Ignorar",
    "title": "Exercício 6 — Um rascunho que não deve virar versão",
    "objective": "Usar .gitignore porque surgiu um arquivo temporário real no fluxo de trabalho.",
    "content": "\n        <div class=\"task-box\"><h4><span class=\"exercise-number\">6</span>Desafio</h4><p>Crie <span class=\"inline-code\">ideias.tmp</span>, veja que ele aparece no status e depois faça o Git ignorar todos os arquivos <span class=\"inline-code\">.tmp</span>. Registre a regra do projeto.</p></div>\n        <details class=\"answer-box\"><summary>Conferir resposta</summary><div class=\"answer-content\"><pre class=\"command\">echo ideias para divulgar a feira &gt; ideias.tmp\ngit status\necho *.tmp &gt; .gitignore\ngit status\ngit add .gitignore\ngit commit -m \"Ignora arquivos temporarios\"\ngit status</pre><p><span class=\"inline-code\">ideias.tmp</span> continua no computador, mas não deve aparecer para ser adicionado.</p></div></details>"
  },
  {
    "id": "e7",
    "menu": "7 Depois do commit",
    "title": "Exercício 7 — Corrigindo um erro que já virou commit",
    "objective": "Praticar revert como correção registrada, sem apagar o histórico.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">7</span>Desafio</h4><p>A organização publica por engano <strong>Evento cancelado</strong> em <span class=\"inline-code\">evento.txt</span> e registra a informação. Depois descobre que a feira continua confirmada. Faça o commit errado e corrija-o preservando os dois registros no histórico.</p></div>\n      <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">echo Evento cancelado &gt;&gt; evento.txt\ngit add evento.txt\ngit commit -m \"Informa cancelamento\"\ngit status\ngit revert --no-edit HEAD\ngit log --oneline\ntype evento.txt</pre></div></details>"
  },
  {
    "id": "e8",
    "menu": "8 Antes do commit",
    "title": "Exercício 8 — Corrigindo antes de registrar",
    "objective": "Distinguir alteração local de alteração preparada.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">8</span>Parte A</h4><p>Acrescente por engano <strong>Entrada: R$ 50</strong>, confira e descarte antes do add.</p></div>\n      <details class=\"answer-box\"><summary>Resposta da Parte A</summary><div class=\"answer-content\"><pre class=\"command\">echo Entrada: R$ 50 &gt;&gt; evento.txt\ngit status\ngit diff\ngit restore evento.txt\ngit status</pre></div></details>\n      <div class=\"task-box\"><h4>Parte B</h4><p>Acrescente <strong>Contato provisório</strong>, use git add, retire o arquivo da preparação sem perder a linha e depois descarte a mudança.</p></div>\n      <details class=\"answer-box\"><summary>Resposta da Parte B</summary><div class=\"answer-content\"><pre class=\"command\">echo Contato provisório &gt;&gt; evento.txt\ngit add evento.txt\ngit status\ngit restore --staged evento.txt\ngit status\ngit restore evento.txt\ngit status</pre></div></details>"
  },
  {
    "id": "e9",
    "menu": "9 Fluxo normal",
    "title": "Exercício 9 — Fazendo uma alteração sem erro",
    "objective": "Consolidar o ciclo normal depois de praticar correções.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">9</span>Desafio</h4><p>A organização confirma <strong>Credenciamento: a partir de 9h</strong>. Faça a alteração, confira, prepare, registre e termine com o repositório limpo.</p></div>\n      <details class=\"answer-box\"><summary>Conferir resposta</summary><div class=\"answer-content\"><pre class=\"command\">git status\necho Credenciamento: a partir de 9h &gt;&gt; evento.txt\ngit diff\ngit add evento.txt\ngit status\ngit commit -m \"Adiciona horario de credenciamento\"\ngit status\ngit log --oneline</pre></div></details>"
  },
  {
    "id": "e10",
    "menu": "10 Recuperar",
    "title": "Exercício 10 — Retomando uma versão aprovada",
    "objective": "Usar um commit anterior como fonte e registrar a recuperação no presente.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">10</span>Desafio</h4><p>Registre um teste acrescentando <strong>Domingo: 9h</strong>. Depois localize o commit imediatamente anterior, recupere os arquivos rastreados daquele estado e registre a decisão de cancelar o teste.</p></div>\n      <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">echo Domingo: 9h &gt;&gt; evento.txt\ngit add evento.txt\ngit commit -m \"Testa edicao de domingo\"\ngit log --oneline\ngit show HASH_APROVADO\ngit status\ngit restore --source=HASH_APROVADO -- .\ngit diff\ngit add evento.txt\ngit commit -m \"Cancela teste e retoma versao aprovada\"\ngit status</pre><p>Use o hash do commit logo abaixo de <strong>Testa edicao de domingo</strong>.</p></div></details>"
  },
  {
    "id": "e11",
    "menu": "11 Branch",
    "title": "Exercício 11 — Experimentando em uma branch",
    "objective": "Criar uma linha paralela para um teste ainda não aprovado.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">11</span>Desafio</h4><p>Crie a branch <span class=\"inline-code\">teste-divulgacao</span>, crie <span class=\"inline-code\">divulgacao.txt</span>, registre o teste e volte para a branch principal. Confirme que o arquivo não faz parte dela.</p></div>\n      <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">git status\ngit branch --show-current\ngit switch -c teste-divulgacao\necho Instagram: @feiracriativa &gt; divulgacao.txt\ngit add divulgacao.txt\ngit commit -m \"Testa divulgacao da feira\"\ngit switch BRANCH_PRINCIPAL\ndir\ngit branch</pre><p>Substitua <span class=\"inline-code\">BRANCH_PRINCIPAL</span> pela branch principal que você anotou. Deixe <span class=\"inline-code\">teste-divulgacao</span> guardada.</p></div></details>"
  },
  {
    "id": "e12",
    "menu": "12 Visitar passado",
    "title": "Exercício 12 — Visitando uma versão sem alterá-la",
    "objective": "Inspecionar um commit antigo e voltar à branch principal.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">12</span>Desafio</h4><p>Escolha um commit antigo em que <span class=\"inline-code\">evento.txt</span> já exista, visite-o com <span class=\"inline-code\">git switch --detach</span>, confira o arquivo e depois volte para sua branch principal.</p></div>\n      <details class=\"answer-box\"><summary>Conferir roteiro</summary><div class=\"answer-content\"><pre class=\"command\">git status\ngit branch --show-current\ngit log --oneline\ngit switch --detach HASH_ANTIGO\ntype evento.txt\ngit switch BRANCH_PRINCIPAL\ngit status</pre><p>A visita não cria uma versão nova nem recupera conteúdo para o presente.</p></div></details>"
  },
  {
    "id": "e13",
    "menu": "13 Publicar",
    "title": "Exercício 13 — Fazendo o projeto local existir no GitHub",
    "objective": "Publicar um histórico que já nasceu no computador sem criar uma segunda história remota.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">13</span>Desafio</h4><p>O projeto <span class=\"inline-code\">feira-criativa</span> já possui commits locais. Crie no GitHub um repositório <strong>vazio</strong> com esse nome, conecte o remoto e faça o primeiro push da branch principal.</p></div>\n        <h3>Antes de executar</h3><div class=\"concept-box\"><strong>Projeto nasceu no PC com histórico → GitHub começa vazio.</strong></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">git status\ngit remote add origin URL-DO-REPOSITORIO\ngit remote -v\ngit branch --show-current\ngit push -u origin BRANCH_PRINCIPAL</pre><p>Use o nome real mostrado pelo Git.</p></div></details>"
  },
  {
    "id": "e14",
    "menu": "14 PC → GitHub",
    "title": "Exercício 14 — Uma mudança local chega ao remoto",
    "objective": "Distinguir commit de push em uma alteração simples.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">14</span>Desafio</h4><p>Acrescente <strong>Entrada gratuita</strong> a <span class=\"inline-code\">evento.txt</span>, registre a versão e confirme que o GitHub só recebe a mudança depois do push.</p></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">echo Entrada gratuita &gt;&gt; evento.txt\ngit status\ngit diff\ngit add evento.txt\ngit commit -m \"Informa entrada gratuita\"\ngit status\ngit push</pre><p>Depois do commit, confira o GitHub antes e depois do push.</p></div></details>"
  },
  {
    "id": "e15",
    "menu": "15 GitHub → PC",
    "title": "Exercício 15 — Uma correção nasce no GitHub",
    "objective": "Perceber que uma alteração remota não chega automaticamente à cópia local.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">15</span>Desafio</h4><p>No GitHub, altere em <span class=\"inline-code\">evento.txt</span> o horário de sábado de <strong>10h</strong> para <strong>11h</strong> e crie o commit pelo navegador. No computador, comprove que o arquivo continua antigo e só então use pull.</p></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">type evento.txt\ngit status\ngit pull\ntype evento.txt\ngit log --oneline</pre><p>Antes do pull a cópia local ainda mostra o conteúdo anterior.</p></div></details>"
  },
  {
    "id": "e16",
    "menu": "16 Clone",
    "title": "Exercício 16 — Criando uma segunda cópia",
    "objective": "Clonar o repositório e reconhecer o que só existe localmente na cópia original.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">16</span>Desafio</h4><p>Simule outro computador em uma nova pasta e clone <span class=\"inline-code\">feira-criativa</span>. Confira arquivos, histórico, remoto e branches. Observe que <span class=\"inline-code\">teste-divulgacao</span> ainda não aparece, pois ela não foi publicada.</p></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">cd /d \"%USERPROFILE%\"\nmkdir outro-computador-exercicio\ncd outro-computador-exercicio\ngit clone URL-DO-REPOSITORIO\ncd feira-criativa\ngit status\ngit log --oneline\ngit remote -v\ngit branch -a</pre></div></details>"
  },
  {
    "id": "e17",
    "menu": "17 Duas cópias",
    "title": "Exercício 17 — Uma cópia muda e a outra fica para trás",
    "objective": "Produzir de propósito uma diferença entre duas cópias locais.",
    "content": "\n      <div class=\"task-box\"><h4><span class=\"exercise-number\">17</span>Desafio</h4><p>Na cópia clonada, acrescente <strong>Contato: feira@exemplo.com</strong>, faça commit e push. Depois volte à cópia original e apenas confira <span class=\"inline-code\">evento.txt</span>, sem usar fetch ou pull ainda.</p></div>\n      <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\">\n        <p><strong>Na cópia clonada:</strong></p>\n        <pre class=\"command\">git status\ngit pull\necho Contato: feira@exemplo.com &gt;&gt; evento.txt\ngit diff\ngit add evento.txt\ngit commit -m \"Adiciona contato da feira\"\ngit push</pre>\n        <p><strong>Volte à cópia original.</strong> Se ela estiver no usuário local:</p>\n        <pre class=\"command\">cd /d \"%USERPROFILE%\\meus-repositorios\\feira-criativa\"</pre>\n        <p>Se ela estiver na rede:</p>\n        <pre class=\"command\">pushd \\\\10.66.53.1\\Publica\\mtec2025\\nome.sobrenome\\meus-repositorios\\feira-criativa</pre>\n        <p>Então apenas confira:</p>\n        <pre class=\"command\">type evento.txt\ngit status</pre>\n        <p>O contato ainda não deve aparecer na cópia original.</p>\n      </div></details>"
  },
  {
    "id": "e18",
    "menu": "18 Fetch e pull",
    "title": "Exercício 18 — Descobrir primeiro, receber depois",
    "objective": "Observar na prática a diferença entre fetch e pull.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">18</span>Desafio</h4><p>Continue na cópia original. Use fetch e confirme que <span class=\"inline-code\">evento.txt</span> ainda não mudou. Depois use pull e confirme que o contato chegou.</p></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">type evento.txt\ngit status\ngit fetch\ngit status\ntype evento.txt\ngit pull\ntype evento.txt\ngit status</pre><p>Fetch atualiza as informações conhecidas sobre o remoto; pull incorpora os commits na branch atual.</p></div></details>"
  },
  {
    "id": "e19",
    "menu": "19 Publicar branch",
    "title": "Exercício 19 — Fazendo a branch de teste existir no GitHub",
    "objective": "Publicar uma branch local sem integrá-la à principal.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">19</span>Desafio</h4><p>Na cópia original, localize a branch <span class=\"inline-code\">teste-divulgacao</span>, publique-a no GitHub e depois volte para a branch principal. Não faça merge ainda.</p></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">git branch\ngit switch teste-divulgacao\ngit status\ngit push -u origin teste-divulgacao\ngit switch BRANCH_PRINCIPAL\ngit status</pre><p>Use como <span class=\"inline-code\">BRANCH_PRINCIPAL</span> a principal que você anotou anteriormente.</p></div></details>"
  },
  {
    "id": "e20",
    "menu": "20 Integrar branch",
    "title": "Exercício 20 — O teste foi aprovado",
    "objective": "Integrar uma branch aprovada e depois encerrar a linha de teste.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">20</span>Desafio</h4><p>A divulgação foi aprovada. Atualize a branch principal, faça merge de <span class=\"inline-code\">teste-divulgacao</span>, envie o resultado e remova a branch local e remota.</p></div>\n        <details class=\"answer-box\"><summary>Conferir sequência</summary><div class=\"answer-content\"><pre class=\"command\">git status\ngit branch --show-current\ngit switch BRANCH_PRINCIPAL\ngit pull\ngit merge --no-edit teste-divulgacao\ntype divulgacao.txt\ngit status\ngit push\ngit branch -d teste-divulgacao\ngit push origin --delete teste-divulgacao</pre>\n        <p>Substitua <span class=\"inline-code\">BRANCH_PRINCIPAL</span> pelo nome real da branch principal.</p></div></details>"
  },
  {
    "id": "e21",
    "menu": "21 Diagnóstico",
    "title": "Exercício 21 — Escolhendo o próximo passo",
    "objective": "Diagnosticar antes de executar comandos de correção ou sincronização.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">21</span>Responda</h4><ol><li>Você não sabe se está no repositório certo. O que deve conferir primeiro?</li><li>Quer descobrir qual branch está ativa.</li><li>Quer conferir para qual GitHub este projeto aponta.</li><li>Fez um commit local correto e o GitHub ainda não recebeu.</li><li>Outra cópia enviou um commit e você quer apenas descobrir a novidade, sem incorporá-la ainda.</li><li>Depois decidiu receber essa novidade na branch atual.</li><li>Um commit errado já foi enviado ao GitHub. Qual estratégia preserva a história?</li></ol></div>\n        <details class=\"answer-box\"><summary>Conferir respostas</summary><div class=\"answer-content\"><ol><li>Confira o caminho e use <span class=\"inline-code\">git status</span>.</li><li><span class=\"inline-code\">git branch --show-current</span>.</li><li><span class=\"inline-code\">git remote -v</span>.</li><li><span class=\"inline-code\">git push</span>.</li><li><span class=\"inline-code\">git fetch</span>.</li><li><span class=\"inline-code\">git pull</span>.</li><li><span class=\"inline-code\">git revert HASH</span> e depois <span class=\"inline-code\">git push</span>.</li></ol></div></details>"
  },
  {
    "id": "e22",
    "menu": "22 Desafio final",
    "title": "Exercício 22 — Projeto completo de sobrevivência",
    "objective": "Aplicar o percurso inteiro sem depender de uma sequência pronta de comandos.",
    "content": "<div class=\"task-box\"><h4><span class=\"exercise-number\">22</span>Projeto final</h4><p>Escolha um projeto pequeno e realista. Ele deve nascer localmente, possuir histórico útil, ser publicado no GitHub e depois usado em uma segunda cópia. Inclua uma situação de correção e uma experiência em branch.</p></div>\n        <h3>Seu projeto deve demonstrar</h3><ul class=\"check-list\"><li>repositório local e pelo menos três commits explicativos;</li><li>uso consciente de status e diff;</li><li>uma correção com restore ou revert, conforme a situação;</li><li>um caso de consulta ou recuperação histórica;</li><li>publicação em repositório remoto vazio;</li><li>push e pull em situações observáveis;</li><li>clone em outra pasta;</li><li>diferença concreta entre fetch e pull;</li><li>uma branch de teste publicada e depois integrada;</li><li>estado final limpo.</li></ul>\n        <pre class=\"command\">git status\ngit log --oneline\ngit branch --show-current\ngit remote -v</pre>\n        <div class=\"concept-box\"><strong>Critério de conclusão:</strong> você deve conseguir explicar por que escolheu cada comando, e não apenas reproduzir a sequência.</div>"
  }
];
