# Central Horizonte — projeto integrador

Aplicação de terminal com dados fictícios para cadastrar, listar e concluir atendimentos de equipamentos.

## Requisitos

- Python 3.14 (o código também é compatível com versões recentes de Python 3).
- Nenhuma biblioteca externa.

## Executar

Na pasta `central-horizonte`:

```bash
python central.py
```

No Windows, se necessário:

```bash
py central.py
```

O banco didático será criado em `dados/horizonte.db`.

## Testar

```bash
python -m unittest -v
```

## Segurança e dados

- Use somente informações fictícias.
- SQL recebe valores por parâmetros.
- O banco local e ambientes virtuais são ignorados pelo Git.
- Exclua apenas o banco de laboratório se quiser reiniciar a atividade.

## Critérios de aceite

1. Prioridade aceita somente 1, 2 ou 3.
2. Cadastro recebe patrimônio e descrição não vazios.
3. Listagem mostra estado e prioridade por extenso.
4. Conclusão exige um id existente.
5. Dados continuam disponíveis após fechar e reabrir.
6. Testes passam sem digitação no terminal.
