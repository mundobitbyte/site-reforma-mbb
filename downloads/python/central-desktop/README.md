# Central Horizonte Desktop

Aplicação didática completa com Tkinter e SQLite. Ela separa interface, regras e
persistência para que cada parte possa ser compreendida e testada isoladamente.

## Executar

Requer Python 3.14 com Tkinter disponível no sistema.

```bash
python app.py
```

O banco `dados/atendimentos.db` é criado dentro do projeto. Use somente dados
fictícios.

## Testar

Os testes não abrem uma janela:

```bash
python -m unittest -v
```

## Estrutura

- `app.py`: composição e início da aplicação;
- `horizonte_desktop/modelos.py`: objeto de domínio;
- `horizonte_desktop/regras.py`: validação;
- `horizonte_desktop/repositorio.py`: SQLite parametrizado;
- `horizonte_desktop/interface.py`: widgets e eventos;
- `tests/`: regras e persistência em banco temporário.

Feche a janela pelo botão do sistema para encerrar também a conexão com o banco.
