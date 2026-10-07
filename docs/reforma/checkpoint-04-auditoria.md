# Reforma MbB — Checkpoint 04
Data: 7 de outubro de 2026. Continuação do Checkpoint 03.

## Estado e limites
A cópia fiel e o isolamento inicial já estavam concluídos e não foram refeitos. O laboratório continua em mundobitbyte/site-reforma-mbb; nenhuma escrita foi feita no repositório oficial nesta etapa. A referência é o snapshot 4f8a39322afff1b44df039bf6247c5f85135f973, não uma sincronização com alterações posteriores do oficial. Academia, Santa Filomena e aplicativos práticos de App Inventor permanecem fora da avaliação. Scripts SQL e registros foram preservados.

Não há autorização pendente para a auditoria. A prévia publicada continua pendente: Pages não estava disponível para o repositório privado no plano observado; a alternativa Sites provisiona outro repositório, fora da restrição atual. Nenhuma hospedagem foi criada.

## Auditoria realizada
- 123 HTML examinados por parser de tags. Nenhuma referência literal a script externo ou iframe externo. Existem links externos informativos; isso não equivale a chamadas ativas.
- Duas referências locais de scripts ausentes em pages/reactnative.html: reactnative-livro-dados-cap0.js e reactnative-livro-dados-cap1a.js.
- Meu MbB usa catálogos locais; o bloqueio de configuração Firebase já verificado no checkpoint anterior permanece. Importações Firebase remotas não significam ausência de dependência; estão impedidas pela configuração vazia antes da importação.
- Cantina usa API relativa /api; o modo demo possui interceptação local carregada antes do aplicativo. Não foi feita publicação nem teste visual completo.
- Exemplos de fetch ViaCEP/AwesomeAPI e da API FastAPI foram distinguidos de chamadas ativas: aparecem em material de aula.
- 31 arquivos ZIP examinados. 30 abriram, somando 802 entradas, sem erro CRC e sem caminhos de extração absolutos ou com subida por '..'.
- downloads/informatica-produtividade/projeto-integrador/pacote-final-feira.zip não abre como ZIP válido. Seus bytes coincidem com o snapshot original; não é dano introduzido na transferência. Blob e856029539ca991431ee7dff14a1f88b48c05f7d.
- Nos textos inspecionados dentro dos ZIPs válidos, a busca dirigida a referências Firebase, domínio oficial, Google APIs e webhooks encontrou apenas um link informativo no LEIA-ME do material Python. Essa busca dirigida não certifica todos os destinos nem executa os pacotes.

A auditoria estática não comprova todos os recursos gerados dinamicamente, código executado em aulas, integrações de servidor ou comportamento visual. Esses pontos continuam pendentes.

## Testes executados
Pesquisa/navegação: 14 testes existentes passaram.
Cantina: 3 testes smoke existentes passaram. Foram acrescentadas 11 sondagens de auditoria em bancos SQLite temporários, sem modificar o aplicativo ou banco do material.

| Cenário Cantina | Resultado observado |
|---|---|
| Pedido normal, 2 águas | HTTP 201; subtotal 6; estoque 20 → 18; pedido persistido e consultável |
| Quantidade zero | Aceita, HTTP 201 |
| Quantidade -1 | Aceita; estoque aumenta para 21 |
| Quantidade 11 | Rejeita, HTTP 400 |
| Quantidade 1,5 | Rejeita, HTTP 422 |
| Estoque insuficiente | Aceita; estoque fica -2 |
| Cupom abaixo do mínimo | Aplica desconto |
| Cupom vencido | Aplica desconto |
| Cupom já utilizado | Aplica desconto |
| Novo → Entregue diretamente | Aceita a mudança |
| Produto inexistente | Rejeita, HTTP 404 |

Essas falhas foram preservadas como evidência didática. Não são correções já implementadas. Os testes smoke não cobriam esses limites.

## Comparação provisória dos candidatos
| Candidato | Evidência disponível | Limitação para escolher como base |
|---|---|---|
| Cantina Horizonte | Aplicação web/API executável; SQLite; pedidos e itens; testes e sondagens executados | Regras de quantidade, estoque, cupom e estado incompletas; autenticação e integração ampliada ainda precisam avaliação |
| Água & Gás do Bairro (curso FastAPI) | 6 blocos, 45 aulas; conteúdo de persistência, autenticação, transações e testes | Nos blocos inspecionados não há links para pacote consolidado; os exemplos não foram executados como aplicação completa |
| Café Aurora Web 1/2 | Pacotes disponíveis; análise prévia de PHP/SQLite para mensagens | PHP não está instalado neste ambiente; execução do backend ainda bloqueada; não confundir mensagens com fluxo completo de pedidos/estoque |
| Central Horizonte | Aplicação Python/SQLite e 4 testes já aprovados no checkpoint anterior | Interface de terminal; ainda não comprova a experiência integrada web/mobile pretendida |
| Conecta | Material de análise e protótipo | Backend executável ainda não identificado |

A Cantina é a evidência executável mais direta desta etapa para estudar o fluxo de pedidos. Isso não constitui escolha da base principal. Água & Gás oferece conteúdo de evolução mais amplo, mas precisa de um artefato consolidado verificável antes de comparações equivalentes.

## Próximas ações
1. Completar o inventário de recursos dinâmicos e a inspeção de isolamento dos serviços.
2. Consolidar a matriz pedagógica e técnica com os requisitos originais antes de apresentar a escolha do sistema principal.
3. Tratar os dois scripts ausentes e o ZIP inválido em alterações pequenas e verificáveis no laboratório, após identificar a fonte correta; não fabricar conteúdo para substituir os originais.
4. Definir hospedagem compatível com a restrição de repositório antes de publicar prévia.
