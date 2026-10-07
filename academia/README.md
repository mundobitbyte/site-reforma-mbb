# Academia Mundo bit Byte

Estrutura independente da Academia.

Publicação recomendada:
1. Copiar a pasta `academia` para dentro do repositório `site`.
2. Executar `git add academia`.
3. Fazer commit e push.

URL esperada no domínio atual:
`https://www.mundobitbyte.com.br/academia/`

## Cursos

- `cursos/chatgpt-na-vida-real/`: curso existente, preservado.
- `cursos/sistemas-embarcados-iot/`: jornada completa de Sistemas Embarcados e IoT.

## Progresso e conta

- Sem login: o curso é público e o progresso fica apenas no navegador.
- Com login: Firebase Authentication e Cloud Firestore sincronizam o progresso.
- A configuração pública do projeto fica em `js/firebase-config.js`.
- As regras privadas por usuário ficam em `../firestore.rules`.

A documentação detalhada de operação e segurança é mantida fora da árvore pública do site.

## Testes locais

```bash
node --test academia/tests/academia-core.test.js
```

As regras devem ser testadas com o emulador do Firestore e as dependências de
`@firebase/rules-unit-testing` e `firebase` disponíveis no ambiente:

```bash
firebase emulators:exec --only firestore --project demo-mbb \
  "node academia/tests/firestore-rules.test.cjs"
```

O teste real cria e remove uma conta técnica temporária. Execute-o somente com
autorização explícita do proprietário e com o SDK Firebase disponível:

```bash
MBB_RUN_LIVE_TESTS=1 node --test academia/tests/firebase-live.test.cjs
```
