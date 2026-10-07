// Mundo bit Byte — restaura os cinco exercícios completos de Interfaces no padrão original.
// Mantém os novos desafios antes deles e reaproveita o mecanismo showExerciseInterface() já aprovado.
(function () {
  if (typeof modules === 'undefined' || !modules.interfaceBasica) return;

  const exercise = modules.interfaceBasica.steps?.find(
    step => step.id === 'exercicios-interface-flexbox'
  );
  if (!exercise || typeof exercise.html !== 'string') return;
  if (exercise.html.includes('mbb-fullscreens-retained')) return;

  exercise.html += `
<div id="mbb-fullscreens-retained" class="exercise-clean" style="margin-top:30px;">
  <div class="topline exercise-clean-top">
    <div>
      <span class="tag">Consolidação MbB</span>
      <h2>Telas completas</h2>
    </div>
    <div class="objective"><strong>Objetivo:</strong> praticar a construção de interfaces completas como na Agenda de Contatos.</div>
  </div>

  <div class="panel exercise-menu-panel">
    <div class="panel-body gallery exercise-menu-gallery">
      <button class="thumb-card active" type="button" onclick="showExerciseInterface(1)">
        <div class="thumb-title">1. Tarefas</div>
        <div class="thumb-phone"><div class="thumb-bar purple">Tarefas</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-green">📋</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:32px"></div><div class="mini-btns"><div class="mini-btn btn-green"></div><div class="mini-btn btn-blue"></div><div class="mini-btn btn-red"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(2)">
        <div class="thumb-title">2. Produtos</div>
        <div class="thumb-phone"><div class="thumb-bar blue">Produtos</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-orange">📦</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line"></div><div class="mini-line"></div><div class="mini-btns"><div class="mini-btn btn-blue"></div><div class="mini-btn btn-gray"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(3)">
        <div class="thumb-title">3. Gastos</div>
        <div class="thumb-phone"><div class="thumb-bar green">Gastos</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-green">💰</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:40px"></div><div class="mini-btns"><div class="mini-btn btn-green"></div><div class="mini-btn btn-red"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(4)">
        <div class="thumb-title">4. Atendimento</div>
        <div class="thumb-phone"><div class="thumb-bar orange">Agenda</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-blue">👤</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line"></div><div class="mini-btns"><div class="mini-btn btn-orange"></div><div class="mini-btn btn-gray"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(5)">
        <div class="thumb-title">5. Biblioteca</div>
        <div class="thumb-phone"><div class="thumb-bar dark">Biblioteca</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-purple">📚</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:30px"></div><div class="mini-btns"><div class="mini-btn btn-purple"></div><div class="mini-btn btn-red"></div></div></div></div>
      </button>
    </div>
  </div>

  <section id="exercise-clean-1" class="exercise-clean-section active">
    <div class="exercise-grid">
      <div class="panel brief">
        <div class="panel-title">Enunciado</div>
        <div class="panel-body">
          <h3>Minhas Tarefas</h3>
          <p>Construa a interface de um aplicativo simples para registrar tarefas de estudo.</p>
          <ul>
            <li>Barra superior roxa com título.</li>
            <li>Ícone de tarefa à esquerda.</li>
            <li>Campos: Título, Categoria, Prioridade e Data Limite.</li>
            <li>Campo maior para Descrição.</li>
            <li>Botões: Adicionar, Editar e Excluir.</li>
          </ul>
          <div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/3209/3209265.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div>
          <div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div>
          <div class="tagline"><strong>Desafio:</strong> usar uma linha horizontal para colocar imagem e campos lado a lado.</div>
        </div>
      </div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar purple">Minhas Tarefas</div><div class="mock-body"><div class="row"><div class="photo-box b-green">📋</div><div class="field-group b-blue" style="flex:1"><div class="label">Título</div><div class="input small"></div><div class="label">Categoria</div><div class="input small"></div><div class="label">Prioridade</div><div class="input small"></div><div class="label">Data Limite</div><div class="input small"></div></div></div><div class="field-group b-orange"><div class="label">Descrição</div><div class="textarea"></div></div><div class="button-row b-purple"><div class="btn btn-green">Adicionar</div><div class="btn btn-blue">Editar</div><div class="btn btn-red">Excluir</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> este exercício é parecido com o app de contatos, mas troca o tema, os campos e as cores.</div>
  </section>

  <section id="exercise-clean-2" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Cadastro de Produtos</h3><p>Monte a interface de um aplicativo para cadastrar produtos de uma loja.</p><ul><li>Barra superior azul.</li><li>Ícone ou imagem de produto.</li><li>Campos: Produto, Código, Preço e Quantidade.</li><li>Área para Categoria e Fornecedor.</li><li>Botões: Novo, Salvar e Limpar.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/679/679720.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> organizar campos curtos e longos dentro do mesmo cartão.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar blue">Cadastro de Produtos</div><div class="mock-body"><div class="row"><div class="photo-box b-orange">📦</div><div class="field-group b-pink" style="flex:1"><div class="label">Produto</div><div class="input small"></div><div class="label">Código</div><div class="input small"></div><div class="label">Preço</div><div class="input small"></div><div class="label">Qtd.</div><div class="input small"></div></div></div><div class="field-group b-blue"><div class="label">Categoria</div><div class="input"></div><div class="label">Fornecedor</div><div class="input"></div></div><div class="button-row b-green"><div class="btn btn-gray">Novo</div><div class="btn btn-green">Salvar</div><div class="btn btn-red">Limpar</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> boa atividade para relacionar layout de app com banco de dados e sistemas administrativos.</div>
  </section>

  <section id="exercise-clean-3" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Controle de Gastos</h3><p>Crie a interface de um aplicativo para registrar despesas pessoais.</p><ul><li>Barra superior verde.</li><li>Ícone financeiro.</li><li>Campos: Descrição, Valor, Data e Tipo.</li><li>Área de resumo: Total previsto e Total gasto.</li><li>Botões: Registrar e Cancelar.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/3135/3135706.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> criar uma área de resumo visualmente separada dos campos.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar green">Controle de Gastos</div><div class="mock-body"><div class="row"><div class="photo-box b-green">💰</div><div class="field-group b-blue" style="flex:1"><div class="label">Descrição</div><div class="input small"></div><div class="label">Valor</div><div class="input small"></div><div class="label">Data</div><div class="input small"></div><div class="label">Tipo</div><div class="input small"></div></div></div><div class="field-group b-orange"><div class="label">Resumo</div><div class="input"></div><div class="input"></div></div><div class="button-row b-green"><div class="btn btn-green">Registrar</div><div class="btn btn-red">Cancelar</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> este layout ajuda a praticar separação entre entrada de dados e área informativa.</div>
  </section>

  <section id="exercise-clean-4" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Agendar Atendimento</h3><p>Desenvolva a interface de um aplicativo para agendar atendimentos.</p><ul><li>Barra superior laranja.</li><li>Ícone de pessoa ou atendimento.</li><li>Campos: Nome, Telefone, Data e Horário.</li><li>Campo para Observações.</li><li>Botões: Agendar, Alterar e Cancelar.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/149/149071.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> organizar campos de data e horário de maneira clara.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar orange">Agendar Atendimento</div><div class="mock-body"><div class="row"><div class="photo-box b-blue">👤</div><div class="field-group b-pink" style="flex:1"><div class="label">Nome</div><div class="input small"></div><div class="label">Telefone</div><div class="input small"></div><div class="label">Data</div><div class="input small"></div><div class="label">Horário</div><div class="input small"></div></div></div><div class="field-group b-orange"><div class="label">Observações</div><div class="textarea"></div></div><div class="button-row b-blue"><div class="btn btn-orange">Agendar</div><div class="btn btn-blue">Alterar</div><div class="btn btn-red">Cancelar</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> ideal para treinar formulários comuns em apps de serviços.</div>
  </section>

  <section id="exercise-clean-5" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Controle de Biblioteca</h3><p>Construa a interface de um app para cadastrar livros e controlar empréstimos.</p><ul><li>Barra superior escura.</li><li>Ícone de livro.</li><li>Campos: Título, Autor, Código e Situação.</li><li>Área para dados do aluno que pegou o livro.</li><li>Botões: Cadastrar, Emprestar e Devolver.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/2232/2232688.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> usar containers para separar dados do livro e dados do empréstimo.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar dark">Biblioteca Escolar</div><div class="mock-body"><div class="row"><div class="photo-box b-purple">📚</div><div class="field-group b-blue" style="flex:1"><div class="label">Título</div><div class="input small"></div><div class="label">Autor</div><div class="input small"></div><div class="label">Código</div><div class="input small"></div><div class="label">Situação</div><div class="input small"></div></div></div><div class="field-group b-green"><div class="label">Aluno / Turma</div><div class="input"></div><div class="input"></div></div><div class="button-row b-purple"><div class="btn btn-purple">Cadastrar</div><div class="btn btn-blue">Emprestar</div><div class="btn btn-green">Devolver</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> ótimo exercício para discutir depois estados, botões e regras simples de sistema.</div>
  </section>
</div>`;

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
