# Adaptação QTS e Git — mesma Cantina

## Decisão pedagógica
O acervo QTS já tem 17 etapas da Cantina. Em vez de reescrever os fundamentos ou editar a v1 intencionalmente defeituosa, esta passagem associa cada capítulo à evolução, aos critérios do dossiê e aos testes existentes. Os casos não são rebatizados como novas execuções.
Git transfere seus fundamentos do acervo para documentos de RF-03 e o parecer QTS. O núcleo não exige construir Café Aurora ou a feira de eventos para repetir conceitos. Esses materiais e os documentos administrativos continuam preservados.

## Revisão MbB
Especialista: distingue oráculo de caracterização da v1, domínio de transporte, snapshot de efeito real, histórico local de remoto e uso humano de teste automatizado.
Professor: cada etapa inicia por necessidade, declara pré-requisito, prática e evidência vinculada aos mesmos RF/RQ. O fechamento retorna à hipótese inicial e examina o próprio teste.
Iniciante: cada arquivo tem caminho, comando, contexto e interpretação do resultado. O banco é temporário. O comando Git do executor roda somente no repositório que ele próprio cria.
Micro: Q-07 revela validação por linha versus soma consolidada. Q-09 toma o snapshot após criar pedido e antes de avançar. Valores da v1 e da evolução têm unidades diferentes.
Macro: nenhuma classe de evidência encerra todas as demais. Passar a caracterização de defeitos não aprova a v1. Merge bem-sucedido não prova a regra. Tag não publica serviço.

## Arquivos e fatos conferidos
- matriz-qts.json: 17 etapas e seus capítulos reais.
- qts/matriz-casos.json: 17 ligações/pendências, 14 referências de funções existentes (uma função é usada em dois critérios), além de uso 360 px, compreensão humana e CI. Não significa 17 novos testes executados.
- qts/evidencias-comparacao.json: 9 cenários, duas versões, 18 observações isoladas.
- qts/evidencias-tdd.json: oito amostras em cada uma das três fases; não altera serviço.
- matriz-git.json: 10 etapas; matriz-git-acervo.json: 57 entradas existentes (12 Git, 10 GitHub, 23 exercícios, 12 comandos).
- git/evidencias-git-local.json: 62 comandos reais, remoto bare local, conflito esperado resolvido; GitHub não exercitado pelo roteiro.
- Navegação de origem com hash dinâmico conferida contra os arrays e o formato que git-core-canonico.js realmente aceita.
- 106 páginas HTML, 3348 referências locais, 100 botões de cópia, 48 arquivos canônicos exibidos; zero erros estruturais/de referência.
- Código Python adicional conferido e executado. Nenhuma nova suíte redundante foi criada para testar textos ou duplicar regras já protegidas.

## Reproduzir
Na raiz da cópia experimental, ambiente Python da Cantina ativado (requirements.txt já existente) e Git instalado:

```bash
python laboratorio/percurso-mbb/qts/exemplos/comparar_versoes.py
python laboratorio/percurso-mbb/qts/exemplos/ciclo_tdd.py
python laboratorio/percurso-mbb/git/exemplos/pratica_git.py
```

O primeiro roteiro usa TestClient e bancos temporários por cenário/versão. O último usa repositórios temporários, identidade didática por comando, hooks vazios e remoto local; não grava configuração global ou usa rede. Arquivos de evidência no percurso são snapshots desta execução, não atualização automática a cada abertura de página.
Receita-verificacao.txt orienta uma futura rodada completa; não é workflow ativo. Actions permanece desativado.

## Documentação primária consultada
- ISTQB CTFL v4.0.1 (referência de terminologia/técnicas, sem promessa de certificação): https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
- Isolamento pytest: https://docs.pytest.org/en/stable/how-to/tmp_path.html
- Git diff: https://git-scm.com/docs/git-diff
- Git revert: https://git-scm.com/docs/git-revert
- Git merge: https://git-scm.com/docs/git-merge
- Worktree: https://git-scm.com/docs/git-worktree
- Gitignore: https://git-scm.com/docs/gitignore

## Limites
87 testes Python e 26 JavaScript anteriores permanecem evidência anterior. Não houve nova execução integral, navegador, avaliação de uso, medição percentual de cobertura, pipeline remoto ou liberação do produto final.
Conteúdo central agora escrito; validação integral continua pendente. A v1, aplicação e acervo originais permanecem intactos. Escrita externa somente no laboratório e branch autorizados.
