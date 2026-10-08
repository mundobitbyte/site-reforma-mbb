# Publicação experimental — autorizada, hospedagem pendente

Professor autorizou em 08/10/2026: publicar fora de www.mundobitbyte.com.br, somente no repositório da reforma, preservando integralmente o oficial e sem mexer no Firebase. Não publicar no repositório mundobitbyte/site. A proposta anterior de integração oficial foi substituída antes de qualquer escrita oficial.

## Versão preparada
Destino exclusivo: mundobitbyte/site-reforma-mbb, branch publicacao/cantina-estatica. Origem: laboratório aprovado, comportamento39 e conclusão documental41. A branch de desenvolvimento preparacao/isolamento-inicial permanece disponível.

A versão estática conserva a home experimental com entrada Cantina Horizonte, seis disciplinas e cartão na área Programação e Desenvolvimento. Inclui percurso, exercícios, cadernos, exemplos e materiais de execução local. Acrescenta .nojekyll e muda somente o retorno do cabeçalho do percurso para “Executar a Cantina localmente”, na âncora #executar, evitando tratar frontend estático como API. [Patch](publicacao-navegacao.patch).

CNAME já ausente no experimental; não criar domínio customizado. Configuração de Firebase isolada já existente permanece como está. Não alterar Firebase, credenciais, conta ou repositório oficial. Não mudar o experimental de privado para público automaticamente.

## Bloqueio observado
Metadata do repositório: private=true, has_pages=false. O conector salva arquivos/branches, mas não oferece operação de ativação de GitHub Pages; endpoint /pages rejeitado pelo próprio conector. Assim, versão salva não significa site publicado. Ainda não há URL pública confirmada. Capacidade de Pages para este repositório privado deve ser verificada na configuração, sem pressupor o plano.

## Configuração necessária
Em Settings → Pages do repositório experimental, verificar a disponibilidade de publicação da branch publicacao/cantina-estatica e pasta / (root), sem domínio customizado. Não mudar as configurações do oficial nem ativar workflows de Firebase. Se a configuração exigir outro plano ou visibilidade pública, registrar o bloqueio e não executar essa alteração sem autorização específica.

Depois da ativação, conferir que a URL informada pelo GitHub não pertence a www.mundobitbyte.com.br, abrir home, percurso, seis disciplinas, retorno e instruções locais. Somente então marcar como publicado e fornecer o endereço efetivo. O servidor Python/API continuará local.

[Encerramento e evidências](parecer-final.md) · [Registro de autorização](checkpoint-41-reteste-e-parecer.md) · [Manifesto da preparação](publicacao-manifesto.json)
