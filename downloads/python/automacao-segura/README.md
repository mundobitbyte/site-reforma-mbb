# Automação segura — Organizador Horizonte

Projeto didático que planeja a padronização de nomes de arquivos sem apagar nada.

## Segurança por projeto

- Só trabalha na pasta `laboratorio/entrada`.
- O modo padrão é simulação.
- Gera `laboratorio/plano.json` antes de alterar.
- Recusa conflitos e nomes repetidos.
- Nunca remove arquivos.
- A aplicação real exige `--aplicar`.

## Testar

```bash
python -m unittest -v
```

## Experimentar

Crie arquivos fictícios dentro de `laboratorio/entrada` e execute:

```bash
python organizar.py
```

Leia o plano. Somente depois, em uma pasta de laboratório descartável:

```bash
python organizar.py --aplicar
```
