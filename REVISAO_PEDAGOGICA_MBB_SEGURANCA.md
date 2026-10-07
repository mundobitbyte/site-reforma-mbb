# Revisão pedagógica MbB — Segurança de Dados e Informação

## Regra central

Cada etapa precisa justificar sua existência. Antes de escrever ou revisar uma página, responder:

1. O que o aluno já sabe quando chega aqui?
2. Que dificuldade nova aparece agora?
3. Qual conceito novo é realmente necessário?
4. O que o aluno consegue explicar, decidir ou fazer ao sair daqui que não conseguia antes?

## Encadeamento obrigatório

A sequência preferencial é:

**situação → problema → limite do que já sabemos → necessidade → conceito → exemplo/contraste → prática → evidência → próxima necessidade**

A página seguinte não reinicia o assunto. Ela parte explicitamente do que a anterior deixou resolvido e do que ainda ficou em aberto.

## Espinha conceitual do módulo

O percurso deve preservar uma distinção simples:

- **Objetivo da proteção:** CID — Confidencialidade, Integridade e Disponibilidade.
- **Três frentes didáticas de atuação:** Segurança Humana, Segurança Física e Segurança Tecnológica.
- **Camada organizacional:** políticas, responsabilidades, processos, fornecedores, gestão de riscos e melhoria contínua.

As três frentes são um mapa didático do módulo, não uma afirmação de que a ISO/IEC 27002:2022 possua exatamente essa estrutura. Quando a norma for apresentada, explicar que ela organiza controles nos temas **organizacionais, de pessoas, físicos e tecnológicos**.

A CID deve permanecer transversal: todo controle precisa conseguir responder qual problema reduz e qual propriedade da CID ajuda a preservar.

## Terminologia fixa

- usar **CID**, e não CIA, no texto em português;
- usar **Segurança Humana**, não “segurança de pessoas” como nome principal da frente;
- usar **Segurança Tecnológica**, não “segurança lógica” como nome principal da frente;
- manter **Segurança Física**;
- distinguir claramente identificação, autenticação, autorização e privilégio;
- não tratar criptografia, hash, certificado, assinatura digital, HTTPS/TLS ou VPN como sinônimos.

## Atualização sem modismo

Modernizar não significa substituir fundamentos por uma lista de termos novos. Conceitos atuais entram quando resolvem uma necessidade real do percurso. Priorizar:

- MFA e passkeys em identidade e acesso;
- ransomware no contexto de backup e recuperação;
- VPN no contexto de acesso remoto;
- LGPD e regulamentação vigente da ANPD quando houver dados pessoais;
- fornecedores, serviços externos e nuvem na governança;
- referências atuais de ISO/IEC 27001, ISO/IEC 27002 e NIST CSF quando agregarem contexto.

Não criar capítulos isolados sobre tendências apenas para parecer atual. O núcleo deve continuar compreensível mesmo quando ferramentas mudarem.

## Voz docente

O texto deve soar como um professor experiente ensinando um iniciante, e não como um verbete ou texto de preenchimento. Para isso:

- explicar antes de nomear quando o conceito for novo;
- comparar conceitos que o aluno tende a confundir;
- antecipar erros de interpretação;
- variar o ritmo: nem toda ideia precisa de card, lista ou tabela;
- usar exemplos concretos antes de abstrações quando isso facilitar a compreensão;
- evitar repetir a situação-problema completa em todas as etapas;
- não criar subtítulos genéricos apenas para preencher estrutura;
- manter termos técnicos oficiais, mas explicá-los no momento em que se tornam necessários;
- preservar práticas que produzam uma evidência observável de aprendizagem.

## Critério de corte

Se duas etapas respondem praticamente às mesmas quatro perguntas da regra central, elas estão redundantes e devem ser fundidas, reposicionadas ou diferenciadas.

Conteúdos históricos válidos, mas não essenciais ao núcleo introdutório — por exemplo detalhes de Needham-Schroeder, KDC, PGP, internals de IPSec ou algoritmos legados — devem aparecer apenas quando houver justificativa pedagógica ou como aprofundamento.

## Aplicação neste módulo

A Conecta Serviços funciona como uma narrativa contínua. Cada etapa deve herdar explicitamente a situação anterior:

- Etapa 0: valor da informação, CID e três frentes didáticas;
- Etapa 1: onde essa informação existe e de que depende;
- Etapa 2: como transformar ativos em cenários de risco e entender funções dos controles;
- Etapa 3: Segurança Humana e engenharia social;
- Etapa 4: como reduzir dano com identidade, autenticação, autorização e privilégio;
- Etapas 5 a 11: mecanismos que respondem a necessidades específicas de integridade, confidencialidade e disponibilidade;
- Etapa 12: Segurança Tecnológica, Segurança Física, acesso remoto e defesa em profundidade;
- Etapas 13 e 14: observação, investigação e resposta;
- Etapa 15: controles organizacionais, governança e SGSI;
- Etapa 16: integração de CID + frentes de proteção + organização em um diagnóstico completo.

O objetivo da revisão não é aumentar texto. É aumentar compreensão, continuidade e precisão pedagógica.
