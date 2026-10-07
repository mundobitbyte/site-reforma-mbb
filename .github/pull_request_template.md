## Objetivo da alteração

Descreva de forma curta o que este PR muda e por quê.

## Segurança e privacidade — obrigatório antes do merge

- [ ] Não foram adicionadas senhas, tokens, chaves privadas, service accounts, arquivos `.env` ou outras credenciais.
- [ ] Configurações públicas de cliente foram diferenciadas de segredos reais; nenhum segredo foi colocado no navegador.
- [ ] Dados pessoais, autenticação e permissões foram revistos quando a alteração toca Firebase, Meu MbB ou Academia.
- [ ] Regras de acesso seguem o menor privilégio possível e impedem leitura/escrita entre usuários.
- [ ] Mudanças de regras Firebase passaram pelo emulador e por testes negativos de acesso indevido.
- [ ] Foi avaliado risco de abuso de quota, cadastros automatizados, gravações excessivas ou automação maliciosa.
- [ ] Se App Check estiver envolvido, o app foi registrado corretamente e as métricas foram observadas antes de qualquer enforcement.
- [ ] Nenhum mapa, auditoria, relatório, contrato, procedimento administrativo ou documentação interna foi publicado sem necessidade.
- [ ] Conteúdo autoral e materiais de terceiros permanecem compatíveis com direitos autorais e licenças aplicáveis.
- [ ] Dependências novas foram evitadas quando desnecessárias e avaliadas quanto a segurança e manutenção.
- [ ] A mudança é reversível e existe caminho claro de rollback.

## Preservação do site — Modo MbB

- [ ] Foram preservados IDs, classes, JavaScript, navegação e identidade visual que não precisavam mudar.
- [ ] A alteração foi cirúrgica e não recriou partes já aprovadas.
- [ ] Pesquisa, login e conteúdo público continuam independentes quando aplicável.

## Validação

- [ ] Testes automatizados aplicáveis foram executados e aprovados.
- [ ] Páginas afetadas foram conferidas sem login e, quando aplicável, com login.
- [ ] Desktop e celular foram considerados.
- [ ] Links, pesquisa, downloads e navegação afetados foram verificados.
- [ ] O diff final foi revisado antes do merge.

## Publicação

- [ ] Este PR não altera domínio, DNS, hospedagem, regras Firebase de produção ou outras configurações críticas sem autorização explícita.
- [ ] Merge na `main` somente após validação final e autorização.
