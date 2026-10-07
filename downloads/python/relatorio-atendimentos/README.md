# Relatório de atendimentos

Projeto didático de análise de dados com pandas e Matplotlib. A pergunta é:
**como volume e tempo médio variam por prioridade?**

Os dados são inteiramente fictícios.

## Preparar e executar

```bash
python -m venv .venv
```

Ative o ambiente conforme seu sistema e instale:

```bash
python -m pip install -r requirements.txt
python analisar.py
```

O programa valida as colunas e os valores, mostra o resumo e cria em `saidas/`:

- `resumo.csv`, apropriado para outra análise;
- `tempo-medio.png`, apropriado para apresentação;
- `conclusao.txt`, que registra a leitura principal.

## Testar

```bash
python -m unittest -v
```

O teste usa uma pasta temporária e não altera a amostra do projeto.
