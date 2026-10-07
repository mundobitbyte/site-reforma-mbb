window.infraestruturaLessons = Array.isArray(window.infraestruturaLessons) ? window.infraestruturaLessons : [];

window.infraestruturaLessons.push({
  id: 'oficina-suporte',
  number: '99',
  unit: 'Fechamento · Oficina integradora',
  menuTitle: 'Oficina de suporte',
  technicalTitle: 'atendimento • inventário • intervenção • validação • recuperação • relatório',
  title: 'Você consegue entregar uma estação que outra pessoa sabe manter?',
  objective: 'Conduzir um atendimento técnico completo em caso real ou simulado, justificando decisões por evidências, preservando segurança e dados e entregando documentação reproduzível.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Plantão final · Mesma escola, nova equipe</span>
      <h2>O turno anterior deixou um atendimento aberto; sua equipe precisa assumir sem perder o histórico.</h2>
      <p>Você receberá um chamado da escola, registros parciais e um equipamento/VM de laboratório — não uma receita. A função afetada e o impacto são conhecidos, mas algumas informações ainda precisam ser solicitadas ou observadas. <strong>O resultado vale quando outra equipe consegue compreender a evidência, a intervenção, o limite da conclusão e o estado entregue.</strong></p>
    </div>

    <div class="danger-box"><strong>Contrato de segurança</strong><p>Trabalhe somente no alvo fornecido. Nenhuma ação destrutiva sem autorização e backup validado. Não abra fonte, não intervenha em circuito energizado, não exponha credenciais e pare quando o risco ultrapassar o laboratório ou a competência da equipe.</p></div>

    <h3>Escolha ou receba um caso</h3>
    <div class="comparison-grid">
      <article><strong>Caso A · SEC-03 · fila de atendimento</strong><p>Após o login da atendente, o disco fica ocupado e a abertura de cadastros atrasa. Há pouco espaço, um aplicativo inicia automaticamente e arquivos locais sem política clara de backup.</p></article>
      <article><strong>Caso B · COORD-01 · reunião em 30 min</strong><p>O Windows inicia após uma instalação recente, mas áudio e um periférico falham. Há atualização pendente e a origem dos drivers anteriores é desconhecida.</p></article>
      <article><strong>Caso C · LAB-06 · aula interrompida</strong><p>O monitor apaga sob uma condição ainda incompleta no chamado. Há cabos compatíveis known-good, inventário e outra estação para troca cruzada controlada.</p></article>
      <article><strong>Caso D · pasta do laboratório · integridade</strong><p>A identidade de consulta consegue modificar arquivos de atividade. A matriz de acesso prevê somente leitura, mas todos ainda trabalham com contas administrativas.</p></article>
    </div>
    <div class="note-box compact"><strong>Continue o trabalho; não comece do zero.</strong><p>Use o histórico recebido: chamado, inventário, baseline, acessos, linha do tempo e registros de manutenção/restauração. Se faltar uma informação, peça ou observe antes de agir e registre o limite da conclusão.</p></div>

    <h3>Fluxo obrigatório da entrega</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Fase</th><th>Pergunta central</th><th>Evidência mínima</th></tr></thead>
      <tbody>
        <tr><td>1. Atendimento</td><td>Qual é o sintoma, quando ocorre e o que mudou?</td><td>Chamado com linha do tempo, responsável e impacto.</td></tr>
        <tr><td>2. Segurança e dados</td><td>O que pode ser perdido ou danificado?</td><td>Riscos, backup/contingência e critério de parada.</td></tr>
        <tr><td>3. Inventário</td><td>Qual é o alvo real e seu estado inicial?</td><td>Modelo, sistema, componentes relevantes e fonte da informação.</td></tr>
        <tr><td>4. Hipóteses</td><td>Quais causas explicam o sintoma?</td><td>Lista priorizada por evidência, risco e custo.</td></tr>
        <tr><td>5. Teste</td><td>Qual resultado diferencia as hipóteses?</td><td>Previsão, uma variável, estado antes/depois.</td></tr>
        <tr><td>6. Intervenção</td><td>Qual é a menor mudança que resolve a causa sustentada?</td><td>Autorização, procedimento, origem e rollback.</td></tr>
        <tr><td>7. Validação</td><td>O sintoma deixou de ocorrer na mesma condição?</td><td>Repetição, funções essenciais e comparação com baseline.</td></tr>
        <tr><td>8. Entrega</td><td>Outra pessoa consegue continuar?</td><td>Relatório, pendências, limites e rotina preventiva.</td></tr>
      </tbody>
    </table></div>

    <h3>Evidências que sustentam o atendimento</h3>
    <p>Não basta contar o que ocorreu. Guarde apenas evidências que sustentem uma decisão, uma comparação ou o estado entregue, sem expor dados pessoais, senhas ou chaves.</p>
    <div class="artifact-grid" aria-label="Artefatos obrigatórios da oficina">
      <div class="artifact-card"><strong>Chamado e estado inicial</strong><span>Linha do tempo, impacto, fotografia/captura autorizada ou registro equivalente.</span></div>
      <div class="artifact-card"><strong>Inventário e riscos</strong><span>Alvo, fonte dos dados, itens críticos, preservação e critério de parada.</span></div>
      <div class="artifact-card"><strong>Hipótese e previsão</strong><span>O que o teste diferencia e qual resultado era esperado antes da ação.</span></div>
      <div class="artifact-card"><strong>Antes e depois</strong><span>Mesma métrica, identidade, carga ou condição; horário e unidade registrados.</span></div>
      <div class="artifact-card"><strong>Mudança e rollback</strong><span>Alvo exato, autorização, procedimento, forma de desfazer e resultado quando testado.</span></div>
      <div class="artifact-card"><strong>Validação e conclusão</strong><span>Repetição, funções essenciais, limites, pendências e próximo responsável.</span></div>
    </div>
    <div class="note-box compact"><strong>Evidência sem vínculo vira anexo decorativo.</strong><p>No relatório, ligue a evidência diretamente à decisão: “A hipótese H1 ganhou força porque o teste antes/depois mostrou...”. Se uma tela não ajuda a decidir ou provar um estado, ela não precisa ser incluída.</p></div>

    <h3>Prática: trabalhe em ciclos curtos</h3>
    <div class="process-flow" aria-label="Ciclo de trabalho da oficina">
      <div><strong>Prever</strong><span>resultado antes do teste</span></div>
      <div><strong>Executar</strong><span>somente no alvo autorizado</span></div>
      <div><strong>Observar</strong><span>registrar o que ocorreu</span></div>
      <div><strong>Decidir</strong><span>manter, reverter ou testar</span></div>
      <div><strong>Documentar</strong><span>permitir continuidade</span></div>
    </div>
    <p>Se um teste não mudar a probabilidade de nenhuma hipótese, ele consome tempo sem reduzir incerteza. Reformule antes de agir.</p>

    <h3>Checklist de entrega técnica</h3>
    <div class="task-box">
      <ul class="checklist" data-checklist>
        <li><label><input type="checkbox"> O sintoma foi descrito sem antecipar a causa.</label></li>
        <li><label><input type="checkbox"> Dados e riscos foram tratados antes de intervenção.</label></li>
        <li><label><input type="checkbox"> O alvo foi identificado por mais de um dado quando necessário.</label></li>
        <li><label><input type="checkbox"> Cada teste tinha pergunta, previsão e critério de interpretação.</label></li>
        <li><label><input type="checkbox"> Apenas uma variável relevante foi alterada por ciclo.</label></li>
        <li><label><input type="checkbox"> Mudanças privilegiadas/destrutivas tinham autorização e retorno.</label></li>
        <li><label><input type="checkbox"> A validação repetiu a condição original e verificou funções essenciais.</label></li>
        <li><label><input type="checkbox"> A conclusão não afirma mais do que as evidências permitem.</label></li>
        <li><label><input type="checkbox"> Pendências, riscos residuais e responsável foram registrados.</label></li>
        <li><label><input type="checkbox"> Senhas, chaves e dados pessoais não aparecem na documentação.</label></li>
      </ul>
      <p class="check-progress" data-check-progress></p>
    </div>

    <h3>Modelo de relatório</h3>
    <textarea id="final-report-template" class="report-template" aria-label="Modelo de relatório de atendimento de infraestrutura" readonly>RELATÓRIO DE ATENDIMENTO — INFRAESTRUTURA

1. IDENTIFICAÇÃO
Chamado:
Data / equipe:
Equipamento / patrimônio / modelo:
Responsável pelo equipamento:

2. SINTOMA E CONTEXTO
Descrição observável:
Quando/frequência/condição:
Alterações recentes e tentativas anteriores:
Impacto para a organização:

3. SEGURANÇA, DADOS E ESTADO INICIAL
Dados que precisavam ser preservados:
Riscos identificados:
Inventário e baseline relevante:
Critério de parada/encaminhamento:

4. HIPÓTESES PRIORIZADAS
H1 — evidência a favor/contra:
H2 — evidência a favor/contra:
H3 — evidência a favor/contra:

5. TESTES
Pergunta e resultado previsto:
Procedimento / variável controlada:
Resultado observado / evidência relacionada:
Interpretação e próxima decisão:

6. INTERVENÇÃO
Alteração realizada e motivo:
Autorização / fonte do procedimento:
Como desfazer:
Rollback foi necessário/testado? Resultado:

7. VALIDAÇÃO
Repetição da condição original:
Funções essenciais verificadas:
Comparação antes/depois (evidências relacionadas):

8. CONCLUSÃO E ENTREGA
Conclusão limitada às evidências:
Pendências e riscos residuais:
Rotina preventiva / próximo responsável:</textarea>
    <p><button class="action-button" type="button" data-copy-template="#final-report-template">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <h3>Critérios de avaliação</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Critério</th><th>Peso</th><th>O que demonstra domínio</th></tr></thead>
      <tbody>
        <tr><td>Raciocínio e evidência</td><td>35%</td><td>Separa sintoma de causa, prioriza hipóteses, prevê resultados e relaciona cada decisão a evidência identificada.</td></tr>
        <tr><td>Segurança e preservação</td><td>25%</td><td>Reconhece risco, protege dados e sabe parar/encaminhar.</td></tr>
        <tr><td>Execução e rollback</td><td>15%</td><td>Controla alvo e variável, usa fonte confiável e demonstra retorno aplicável.</td></tr>
        <tr><td>Validação</td><td>15%</td><td>Repete a condição, compara estados e testa funções relacionadas sem exagerar a conclusão.</td></tr>
        <tr><td>Documentação</td><td>10%</td><td>Outra pessoa entende o que aconteceu, o limite e o próximo passo.</td></tr>
      </tbody>
    </table></div>
    <div class="mbb-pause-question"><strong>Velocidade não é critério principal.</strong><p>Uma equipe que decide parar diante de risco não controlado pode demonstrar mais competência que outra que “faz funcionar” sem saber o que alterou.</p></div>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Decisão final</span><h3>O sintoma não reapareceu em um teste curto</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A conclusão deve informar condição e duração do teste; ausência breve do sintoma não prova correção definitiva."><p>Como registrar?</p><label><input type="radio" name="q99a" value="a"> Problema resolvido para sempre.</label><label><input type="radio" name="q99a" value="b"> Sintoma não observado durante o período e a condição testados; acompanhar recorrência.</label><label><input type="radio" name="q99a" value="c"> Equipamento sem qualquer defeito.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Encaminhar preservando dados e evidências é a resposta profissional quando risco ou competência ultrapassam o laboratório."><p>A unidade apresenta ruído incomum e contém dados únicos. A equipe não possui estrutura de recuperação.</p><label><input type="radio" name="q99b" value="a"> Executar teste intensivo até falhar.</label><label><input type="radio" name="q99b" value="b"> Abrir a unidade e observar.</label><label><input type="radio" name="q99b" value="c"> Interromper, documentar e encaminhar pelo processo adequado.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência do trabalho de suporte</strong><p>Administrar e manter sistemas é controlar estados: <strong>identificar, preservar, planejar, intervir, testar, recuperar e documentar</strong>. O técnico confiável não é o que tenta mais coisas; é o que produz evidência, reduz risco e deixa o ambiente compreensível.</p></div>
    <div class="bridge-box"><strong>O próximo problema nasce da própria operação</strong><p>A estação agora pode ser identificada, mantida e recuperada com método. Quando ela depende de impressoras, servidores, Wi-Fi e outros computadores, o diagnóstico precisa seguir o caminho da comunicação sem abandonar as mesmas regras: observar, testar, interpretar e só então alterar.</p></div>
  `
});
