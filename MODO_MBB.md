# Modo MbB — padrão transversal do Mundo bit Byte

Este arquivo registra regras que devem ser aplicadas sempre que um conteúdo público do Mundo bit Byte for criado, revisado ou alterado. Elas valem para a Home, áreas, módulos, tópicos, etapas, capítulos, atividades e páginas de apoio.

## 1. Princípio pedagógico

O conteúdo deve avançar por necessidade real, e não por uma sequência de definições soltas:

**situação → problema → limite → necessidade → conceito → prática → evidência → próxima necessidade**

Cada página precisa justificar sua existência. Antes de escrever ou revisar, responda:

1. O que o aluno já sabe quando chega aqui?
2. Que dificuldade nova aparece agora?
3. Qual conceito novo é necessário para resolver essa dificuldade?
4. O que o aluno consegue compreender ou fazer ao sair daqui que não conseguia antes?

Se duas páginas tiverem praticamente a mesma resposta, revisar redundância, fusão ou função de cada uma.

## 2. Voz docente

O texto deve soar como um professor experiente ensinando um iniciante, sem infantilizar e sem produzir texto apenas para preencher cards.

- explicar antes de exigir;
- apresentar siglas, abreviações, símbolos, ferramentas e termos técnicos antes do uso;
- usar exemplos, contraexemplos, comparações e erros comuns quando eles ajudam a construir entendimento;
- não reiniciar o assunto a cada página: uma etapa deve nascer da anterior;
- variar o ritmo: nem todo conteúdo precisa virar card, lista, tabela ou bloco especial;
- preferir o texto necessário para produzir compreensão ao texto criado apenas para manter um molde visual.

## 3. Crítica e autocrítica circular e em espiral

Antes de ampliar o conteúdo, verificar o que já existe e reaproveitar o que está correto. Depois de cada alteração, voltar ao conjunto e perguntar se a mudança:

- melhorou a compreensão;
- preservou o que já estava aprovado;
- criou repetição ou contradição;
- introduziu uma nova necessidade de ajuste em outra parte;
- continua funcionando para um iniciante executando sozinho.

A revisão deve ser progressiva e cirúrgica. Não reformar por reformar.

## 4. Regra obrigatória de legibilidade e ampliação visual

Sempre que uma página, tópico ou módulo for criado ou alterado, verificar todos os elementos cuja compreensão possa ser prejudicada pelo tamanho da tela.

Isso inclui, quando aplicável:

- tabelas;
- diagramas, fluxogramas, UML, BPMN e DER;
- esquemas, circuitos, topologias e mapas;
- interfaces, capturas de tela e previews;
- blocos de programação visual;
- gráficos e outras figuras técnicas.

### Regra

**Se ampliar ajuda a compreender, o recurso de ampliar deve estar disponível.**

Usar preferencialmente o **visualizador global seletivo MbB** (`js/mbb-visualizador-site.js`). Não criar soluções particulares página por página quando o visualizador global já resolve o caso.

O visualizador deve continuar seletivo: elementos decorativos, logos, ícones, capas, fotografias sem necessidade técnica e tabelas pequenas que permanecem legíveis não recebem botão por obrigação.

O bootstrap transversal do site deve garantir o visualizador nas páginas públicas que carregam os recursos globais do Mundo bit Byte. Módulos com carregamento próprio podem manter seu gancho, desde que não dupliquem visualizadores.

## 5. Revisão transversal obrigatória ao tocar em conteúdo antigo

Ao modificar uma página ou módulo existente, não revisar apenas o trecho solicitado. Conferir também, naquilo que se aplica:

- navegação e continuidade entre etapas;
- pesquisa global;
- integração com Meu MbB;
- responsividade em desktop e celular;
- ausência de overflow horizontal global;
- legibilidade de tabelas e visuais técnicos;
- ampliação seletiva;
- acessibilidade básica, foco e rótulos;
- títulos claros e específicos;
- links, arquivos e práticas executáveis;
- coerência pedagógica com a etapa anterior e a seguinte.

Essa conferência não autoriza reescrever conteúdo aprovado sem necessidade. O princípio continua sendo **alteração mínima suficiente**.

## 6. Checklist antes do merge

Para toda alteração de conteúdo relevante:

- [ ] A página acrescenta algo que a anterior ainda não ensinava.
- [ ] Conceitos e siglas aparecem depois de sua necessidade ser compreendida.
- [ ] Não há repetição artificial de introduções ou cards.
- [ ] Tabelas e visuais técnicos foram avaliados quanto à ampliação.
- [ ] O visualizador global funciona quando necessário e não aparece quando não agrega valor.
- [ ] Desktop e celular foram considerados.
- [ ] Não há quebra de navegação, pesquisa ou Meu MbB.
- [ ] Os testes aplicáveis estão verdes.
- [ ] O PR descreve somente as mudanças realmente realizadas.

## 7. Fluxo operacional

Preferir branch → alterações cirúrgicas → validações → PR → merge. Não mesclar com testes falhando sem compreender e corrigir a causa.

O objetivo do Modo MbB não é padronizar a aparência de todas as páginas. É manter uma experiência de aprendizagem coerente, progressiva, legível e tecnicamente confiável em todo o Mundo bit Byte.
