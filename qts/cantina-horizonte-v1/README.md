# Cantina Horizonte — QTS v1

Protótipo isolado que servirá como sistema-fio-condutor do módulo **QTS — Qualidade e Teste de Software** do Mundo bit Byte.

A aplicação foi mantida pequena de propósito: produtos, pedido, cupom, estoque e total. Assim, o foco do aluno permanece em qualidade e testes, e não na construção de um sistema grande.

## Antes dos comandos: o que são essas tecnologias?

- **Python** é a linguagem usada no servidor da Cantina Horizonte.
- **FastAPI** é o framework em Python usado para criar a parte do servidor que recebe e responde às requisições da aplicação. Um *framework* é uma estrutura pronta que ajuda a organizar o desenvolvimento.
- **SQLite** é o sistema de banco de dados usado neste projeto. Ele guarda os dados em um arquivo local e não exige a instalação de um servidor de banco separado.
- **Uvicorn** é o servidor que executa a aplicação FastAPI durante as práticas.
- **Ambiente virtual** é uma pasta isolada onde instalamos as dependências Python do projeto sem misturá-las com outros projetos do computador.

Você não precisa dominar essas tecnologias para começar QTS. Elas entram apenas como suporte ao sistema que será testado.

## Caminho mais simples no Windows

1. Dê dois cliques em `iniciar_windows.bat`.
2. Aguarde a preparação do ambiente na primeira execução.
3. Abra `http://127.0.0.1:8000` no navegador.

Para encerrar, volte à janela do servidor e pressione `Ctrl+C`.

## Execução manual

Na pasta do projeto, crie um ambiente virtual do Python:

```bash
python -m venv .venv
```

Ative o ambiente virtual e instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie o servidor local:

```bash
python -m uvicorn backend.app:app --reload
```

Abra no navegador:

```text
http://127.0.0.1:8000
```

O banco de dados SQLite `cantina.db` é criado automaticamente.

## Modo de demonstração

As primeiras etapas do módulo podem abrir a interface em modo de demonstração. Assim, o aluno consegue experimentar a Cantina Horizonte antes de precisar configurar Python, FastAPI ou SQLite. Esses recursos entram somente quando passarem a ser necessários para o conteúdo.

## Restaurar os dados iniciais

Durante as atividades, os pedidos alteram o estoque. Para recomeçar a experiência com os dados originais, encerre o servidor e execute:

```bash
python resetar_dados.py
```

No Windows também é possível dar dois cliques em `resetar_dados_windows.bat`.

## Materiais usados nas etapas

A pasta `docs/` contém artefatos que fazem parte das atividades do módulo, como os requisitos-base da Cantina Horizonte, os materiais de revisão estática, o modelo de plano e casos de teste, o registro de defeito e o roteiro de API com Bruno. Eles aparecem quando o problema pedagógico exige documentação real, e não como burocracia separada da prática.

## Testes Python

```bash
pytest
```

Para executar também a cobertura:

```bash
pytest --cov=backend --cov-report=term-missing
```

## Teste de ponta a ponta com Playwright

Nesta parte do módulo entra também o **Node.js**, ambiente usado para executar as ferramentas JavaScript do Playwright fora do navegador. O **npm** instala os pacotes do projeto, e o **npx** executa ferramentas instaladas nele.

Instale as dependências JavaScript e o Chromium:

```bash
npm install
npx playwright install chromium
```

Antes do teste E2E, encerre com `Ctrl+C` qualquer servidor da Cantina que esteja aberto manualmente. Depois execute:

```bash
npm run test:e2e
```

O arquivo `playwright.config.js` restaura os dados iniciais e inicia um servidor próprio para a execução do teste.

## Integração Contínua

O workflow `.github/workflows/qts-cantina-horizonte.yml` executa os testes Python com cobertura e o teste E2E da Cantina Horizonte no GitHub Actions. Esse arquivo faz parte da Etapa 15 e existe para que a automação seja estudada a partir de um processo real do próprio projeto.
