# Reforma Mundo bit Byte — checkpoint 18

Foi preparada e ensaiada a execução local integrada da Cantina: aplicação, API e percurso no mesmo servidor, com banco temporário. Isso prepara a subetapa 5.4; a validação em navegador continua pendente. **22/31 concluídas; 9 pendentes**, sem mudança do denominador ou dos critérios.

| Macroetapa | Concluídas/total | Próxima subetapa |
|---|---:|---|
| Pedido persistente | 5/6 | 1.6: navegador |
| Cupom | 4/5 | 2.5: navegador |
| Estados | 4/5 | 3.5: navegador |
| Currículo | 7/9 | 4.8: falta VisuAlg; pdb já executado. Depois 4.9 |
| Entrega | 2/6 | Posição atual 5.3; preparação da 5.4 avançou. Depois 5.5–5.6 |

## Abrir no próprio computador

Com uma cópia da branch experimental, o ambiente Python ativado e as dependências já instaladas, execute na raiz do repositório:

```bash
python laboratorio/cantina-evolutiva/previa_local.py
```

O terminal imprime os endereços da aplicação e do percurso. Aguarde o servidor iniciar e abra esses endereços no mesmo computador. O guia do repositório contém a preparação do ambiente e a opção de outra porta, caso necessário.

O banco é criado fora do checkout e descartado ao encerrar com Ctrl+C. Recarregar a página preserva os pedidos enquanto a sessão permanece aberta; reiniciar o iniciador gera banco novo. Salve a tabela preenchida e as capturas antes de encerrar. A data do ensaio fica em 07/10/2026 para o cupom; não foi alterada a regra de data da aplicação existente.

## Evidência nova

O iniciador foi executado a partir de outra pasta em duas sessões independentes no Linux/Python 3.12. Foram conferidas 16 rotas de conteúdo/API com resposta 200 e cinco rotas restritas com resposta 404. Cada sessão iniciou com cinco produtos, Água a 300 centavos e estoque 20, schema 3 e nenhum pedido. Ambos os processos encerraram com código 0, suas portas fecharam e os bancos temporários foram descartados. Três parâmetros de porta inválidos foram recusados. Os arquivos protegidos, serviço e interface existentes permaneceram iguais por hash.

Essas verificações constam em `docs/reforma/evidencia-previa-local-18.json`. São ensaios do novo iniciador por HTTP, não nova execução das suítes antigas nem validação visual. Windows/macOS não foram ensaiados.

O roteiro manual foi completado com nove casos encadeados para pedido, consulta após recarga, estados, cupom abaixo do mínimo, aplicação do desconto, reutilização e cupom inexistente. Também registra 360 px, teclado, foco, leitor de tela, zoom, navegação e compreensão com participante. Todas as células de resultado continuam como **não executado**.

A verificação estrutural passou: 108 páginas, 3.395 referências locais, 104 botões de cópia e 48 arquivos canônicos, sem erros. O conteúdo central permanece com 81 etapas de ensino.

## Bloqueios que continuam

- O navegador deste ambiente não conseguiu alcançar o servidor no checkpoint 17. A tentativa idêntica não foi repetida; nenhuma validação visual foi declarada aprovada.
- VisuAlg não está instalado e não há controle de app nativo disponível. O pdb concluído não substitui esse ensaio.
- Uso e compreensão com participante ainda não ocorreram; a entrega final depende desses critérios.

Não há autorização pendente. O próximo avanço de conclusão exige um navegador com acesso ao servidor, execução real no VisuAlg e a rodada de compreensão. O novo iniciador facilita o ensaio em um computador compatível, mas não elimina esses requisitos.

## Escopo preservado

Somente o laboratório privado `mundobitbyte/site-reforma-mbb`, branch `preparacao/isolamento-inicial`, recebeu arquivos de preparação e evidência. Nenhuma publicação externa foi feita. O repositório oficial `mundobitbyte/site`, o domínio oficial, Firebase e os comandos SQL protegidos permanecem intactos.

Referências técnicas consultadas: [Uvicorn — execução/configuração](https://www.uvicorn.org/settings/) e [Starlette — arquivos estáticos](https://www.starlette.io/staticfiles/). Os resultados acima vêm do ensaio efetivamente executado, não dessas referências.
