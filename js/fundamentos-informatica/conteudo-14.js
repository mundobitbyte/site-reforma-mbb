window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "dados-banco-dados",
  number: "14",
  unit: "Ato 3 · Computadores se conectam",
  menuTitle: "Dados e banco de dados",
  technicalTitle: "banco de dados • relacional • tabela • registro • atributo • chave primária • chave estrangeira • SGBD • SQL • CRUD • transação • integridade",
  title: "Quando os dados crescem, como encontrar e relacionar tudo sem se perder?",
  objective: "Compreender por que bancos de dados existem, distinguir banco e SGBD e reconhecer tabelas, chaves, relacionamentos, SQL, CRUD, transações e integridade.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Guardar é fácil; administrar é outra história</span>
      <h2>Uma escola poderia começar com <code>alunos.txt</code>, <code>notas.txt</code> e <code>turmas.txt</code>. E quando forem milhares de alunos?</h2>
      <p>Precisamos responder rapidamente quem pertence a qual turma, quais notas são de cada aluno, quem pode alterar um registro e o que acontece quando várias pessoas trabalham ao mesmo tempo. <strong>O problema deixou de ser apenas salvar arquivos: precisamos administrar dados relacionados.</strong></p>
    </div>

    <h3>Por que um arquivo deixa de ser suficiente em muitos sistemas?</h3>
    <p>Arquivos continuam sendo excelentes para documentos, fotografias, configurações e muitos outros usos. A dificuldade aparece quando precisamos consultar e relacionar grande quantidade de registros, aplicar regras de integridade e coordenar acessos simultâneos.</p>
    <div class="definition-box featured"><span class="term">Banco de dados</span><p>É uma coleção organizada de dados estruturados para que possam ser armazenados, consultados, relacionados e atualizados de forma sistemática.</p></div>
    <div class="note-box compact"><strong>Banco de dados não significa simplesmente “muitos dados”.</strong><p>Organização, relacionamento, consulta, integridade e controle são partes importantes do problema.</p></div>

    <h3>Vamos construir uma tabela porque precisamos identificar pessoas</h3>
    <p>Imagine cadastrar alunos com nome, nascimento e e-mail. Uma representação relacional pode organizar ocorrências em linhas e características em colunas:</p>
    <div class="table-wrap"><table><thead><tr><th>id_aluno</th><th>nome</th><th>nascimento</th><th>email</th></tr></thead><tbody><tr><td>1</td><td>Ana Silva</td><td>12/03/2009</td><td>ana@email.com</td></tr><tr><td>2</td><td>Bruno Lima</td><td>27/08/2008</td><td>bruno@email.com</td></tr></tbody></table></div>
    <div class="comparison-grid three">
      <article><strong>Tabela</strong><p>Organiza registros de um mesmo tipo dentro de um modelo relacional.</p></article>
      <article><strong>Linha / registro</strong><p>Representa uma ocorrência, como um aluno específico.</p></article>
      <article><strong>Coluna / atributo</strong><p>Representa uma característica que desejamos registrar, como nome ou data de nascimento.</p></article>
    </div>
    <p>Um <strong>campo</strong> é o valor que aparece na interseção de uma linha e uma coluna. Por exemplo, <code>Bruno Lima</code> é o valor do atributo nome em um registro específico.</p>

    <h3>E se existirem dois “João da Silva”?</h3>
    <p>Usar o nome para identificar uma pessoa parece natural até aparecerem homônimos, mudanças de nome ou erros de digitação. Precisamos de um identificador que não dependa da descrição humana.</p>
    <div class="definition-box featured"><span class="term">Chave primária — Primary Key</span><p>É um atributo, ou conjunto de atributos, escolhido para identificar unicamente cada registro de uma tabela.</p></div>
    <div class="example-box compact"><strong>Exemplo</strong><p><code>id_aluno = 27</code> pode continuar identificando o mesmo registro mesmo que o nome ou o e-mail sejam alterados.</p></div>

    <h3>Agora precisamos descobrir de quem é cada pedido</h3>
    <p>Uma tabela de pedidos poderia repetir nome, telefone e endereço do cliente em cada compra. Mas, se a pessoa fizer cinquenta pedidos e mudar o telefone, teremos cinquenta lugares para corrigir. É melhor relacionar os dados.</p>
    <div class="two-col">
      <div><strong>CLIENTE</strong><div class="table-wrap"><table><thead><tr><th>id_cliente</th><th>nome</th></tr></thead><tbody><tr><td>1</td><td>Ana</td></tr><tr><td>2</td><td>Bruno</td></tr></tbody></table></div></div>
      <div><strong>PEDIDO</strong><div class="table-wrap"><table><thead><tr><th>id_pedido</th><th>id_cliente</th><th>valor</th></tr></thead><tbody><tr><td>101</td><td>1</td><td>120</td></tr><tr><td>102</td><td>2</td><td>85</td></tr></tbody></table></div></div>
    </div>
    <div class="definition-box"><span class="term">Chave estrangeira — Foreign Key</span><p>É um atributo que referencia uma chave de outra tabela e permite estabelecer relações entre registros.</p></div>
    <p>Agora <code>id_cliente = 1</code> no pedido aponta para Ana sem precisar repetir todos os seus dados em cada compra.</p>

    <h3>Um pedido pode ter vários produtos — e um produto pode aparecer em vários pedidos</h3>
    <p>Se tentarmos guardar todos os produtos numa única célula do pedido, consultas e regras ficam difíceis. A relação “muitos para muitos” pede uma estrutura intermediária.</p>
    <div class="table-wrap"><table><thead><tr><th>ITEM_PEDIDO</th><th>id_pedido</th><th>id_produto</th><th>quantidade</th></tr></thead><tbody><tr><td></td><td>101</td><td>5</td><td>2</td></tr><tr><td></td><td>101</td><td>12</td><td>1</td></tr></tbody></table></div>
    <p>Essa tabela associativa relaciona pedidos e produtos e ainda pode guardar informações próprias da relação, como quantidade.</p>

    <h3>Quem administra tudo isso?</h3>
    <p>Até aqui desenhamos estruturas. Mas algum software precisa criar tabelas, executar consultas, controlar acessos, coordenar alterações concorrentes e manter regras. É aqui que aparece outra distinção importante.</p>
    <div class="comparison-grid">
      <article><strong>Banco de dados</strong><p>É o conjunto organizado de dados e estruturas.</p></article>
      <article><strong>SGBD — Sistema Gerenciador de Banco de Dados</strong><p>É o software que cria, administra e fornece acesso controlado aos bancos de dados.</p></article>
    </div>
    <p>MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database e SQLite são exemplos de SGBDs. Dizer “criei um banco no MySQL” faz sentido; tecnicamente, <strong>MySQL é o SGBD que administra esse banco</strong>.</p>

    <h3>Como pedir ao SGBD apenas o que queremos?</h3>
    <p>Imagine uma tabela com cem mil alunos. Percorrer visualmente todas as linhas para encontrar o registro 25 não seria uma estratégia aceitável. Precisamos formular consultas de maneira estruturada.</p>
    <div class="definition-box featured"><span class="term">SQL — Structured Query Language</span><p>É uma linguagem usada para definir, consultar e manipular dados em sistemas relacionais.</p></div>
    <div class="example-box"><strong>Consulta conceitual</strong><p><code>SELECT nome FROM alunos WHERE id_aluno = 25;</code></p><p>Leia como: selecione o nome, da tabela alunos, onde o identificador seja 25.</p></div>

    <h3>Quatro operações aparecem em quase todo cadastro</h3>
    <p>Cadastre um cliente. Consulte-o. Corrija o telefone. Remova um registro quando apropriado. Esse padrão aparece tanto em bancos quanto em APIs e interfaces de sistemas.</p>
    <div class="comparison-grid four">
      <article><strong>Create</strong><p>criar um registro.</p></article>
      <article><strong>Read</strong><p>consultar dados.</p></article>
      <article><strong>Update</strong><p>alterar dados existentes.</p></article>
      <article><strong>Delete</strong><p>remover registros.</p></article>
    </div>
    <div class="definition-box compact"><span class="term">CRUD</span><p>É a sigla formada por <strong>Create, Read, Update e Delete</strong>, operações básicas recorrentes em sistemas de informação.</p></div>

    <h3>Duas pessoas compram a última unidade</h3>
    <div class="hero-box">
      <span class="eyebrow">Quando vários usuários agem ao mesmo tempo</span>
      <p>O estoque mostra <strong>1</strong>. Pessoa A consulta: há uma unidade. Pessoa B consulta quase no mesmo instante: também vê uma unidade. Se as operações não forem coordenadas, as duas podem acreditar que compraram o último item. <strong>Um SGBD precisa ajudar a preservar coerência mesmo com operações concorrentes.</strong></p>
    </div>
    <div class="definition-box featured"><span class="term">Transação</span><p>É uma unidade lógica de trabalho composta por uma ou mais operações que precisam ser tratadas de forma controlada.</p></div>
    <p>Uma transferência bancária deixa a necessidade ainda mais clara: tirar R$ 100 da conta A e colocar R$ 100 na conta B não deveria terminar pela metade.</p>
    <div class="two-col"><div class="definition-box"><span class="term">COMMIT</span><p>Confirma as alterações de uma transação.</p></div><div class="definition-box"><span class="term">ROLLBACK</span><p>Desfaz alterações ainda não confirmadas da transação quando é necessário retornar ao estado anterior.</p></div></div>
    <div class="note-box compact"><strong>O nome “commit” também existe no Git, mas o contexto é outro.</strong><p>A palavra é semelhante; a operação e o sistema envolvidos não são a mesma coisa.</p></div>

    <h3>Dados também precisam obedecer regras</h3>
    <p>Um pedido apontando para um cliente inexistente ou um estoque que nunca deveria ser negativo revela que simplesmente aceitar qualquer valor não basta.</p>
    <div class="definition-box"><span class="term">Integridade dos dados</span><p>É a preservação da correção e da coerência dos dados segundo regras definidas para o sistema. Chaves, restrições e transações ajudam nesse trabalho.</p></div>

    <h3>Arquivo, planilha e banco não são inimigos</h3>
    <p>Uma planilha pode ser a ferramenta certa para uma pequena lista. Uma fotografia continua fazendo sentido como arquivo. Uma aplicação pode manter no banco o identificador e os metadados de uma foto enquanto os bytes da imagem ficam em um sistema de armazenamento próprio. <strong>A pergunta correta é qual estrutura resolve melhor o problema.</strong></p>

    <div class="representation-flow" aria-label="Fluxo de um formulário até o banco"><div><strong>Formulário</strong><span>dados do usuário</span></div><span class="flow-arrow">→</span><div><strong>Aplicação</strong><span>valida e aplica regras</span></div><span class="flow-arrow">→</span><div><strong>SGBD</strong><span>consulta ou grava</span></div><span class="flow-arrow">→</span><div><strong>Banco</strong><span>dados persistem</span></div></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>Guardar é diferente de administrar?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="O banco contém dados organizados; o SGBD é o software responsável por gerenciá-los."><p>Qual frase está correta?</p><label><input type="radio" name="q14a" value="a"> Banco e SGBD são sempre a mesma coisa.</label><label><input type="radio" name="q14a" value="b"> O SGBD administra bancos de dados.</label><label><input type="radio" name="q14a" value="c"> SQL é um tipo de SSD.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="A chave estrangeira referencia uma chave de outra tabela e permite estabelecer relações."><p>Como um pedido pode indicar qual cliente o realizou sem repetir todos os dados pessoais?</p><label><input type="radio" name="q14b" value="a"> Renomeando o arquivo.</label><label><input type="radio" name="q14b" value="b"> Usando apenas o nome do cliente como texto.</label><label><input type="radio" name="q14b" value="c"> Usando uma chave estrangeira que referencia o cliente.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Transações ajudam a manter operações relacionadas coerentes, especialmente quando não devem ficar concluídas pela metade."><p>Por que uma transferência bancária é um bom exemplo de transação?</p><label><input type="radio" name="q14c" value="a"> Porque débito e crédito precisam permanecer coerentes como uma unidade de trabalho.</label><label><input type="radio" name="q14c" value="b"> Porque toda transação transforma SQL em arquivo.</label><label><input type="radio" name="q14c" value="c"> Porque elimina a necessidade de backup.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>Bancos de dados existem porque sistemas precisam <strong>organizar, localizar, relacionar e manter coerentes</strong> muitos dados. Tabelas reúnem registros e atributos; chaves identificam e relacionam registros; o <strong>SGBD</strong> administra o banco; <strong>SQL</strong> permite definir e manipular dados; CRUD descreve operações recorrentes e transações ajudam a preservar coerência.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>O sistema Web e o banco precisam executar em computadores reais. Quando alguém diz que tudo está “na nuvem”, onde esses computadores estão — e como uma máquina física pode parecer várias?</p></div>

    <details class="sources-box"><summary>Fontes</summary><ul>
      <li><a href="https://www.postgresql.org/docs/current/tutorial-concepts.html" target="_blank" rel="noopener">PostgreSQL — conceitos de banco relacional</a></li>
      <li><a href="https://www.postgresql.org/docs/current/tutorial-sql.html" target="_blank" rel="noopener">PostgreSQL — linguagem SQL</a></li>
      <li><a href="https://www.postgresql.org/docs/current/tutorial-transactions.html" target="_blank" rel="noopener">PostgreSQL — transações</a></li>
    </ul></details>
  `
});
