// IA e Programação — botão Copiar alinhado ao padrão usado no módulo Arduino.
function copyCode(id){
  const code = document.getElementById(id);
  if(code && navigator.clipboard){
    navigator.clipboard.writeText(code.textContent);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let contador = 0;

  document.querySelectorAll('pre.code').forEach(bloco => {
    const texto = bloco.innerText;
    if (!texto.includes('# Windows PowerShell') || !texto.includes('# Linux/macOS')) return;

    const grupo = document.createElement('div');
    grupo.className = 'activation-options';
    grupo.innerHTML = `
      <p><strong>Windows PowerShell</strong></p>
      <pre class="code">.\\.venv\\Scripts\\Activate.ps1</pre>
      <p><strong>Windows Prompt de Comando (cmd)</strong></p>
      <pre class="code">.venv\\Scripts\\activate.bat</pre>
      <p><strong>Linux/macOS</strong></p>
      <pre class="code">source .venv/bin/activate</pre>`;
    bloco.replaceWith(grupo);
  });

  document.querySelectorAll('.prompt').forEach(prompt => {
    if (prompt.textContent.includes('Python 3.12 informa ModuleNotFoundError')) {
      prompt.textContent = prompt.textContent.replace(
        'Python 3.12 informa ModuleNotFoundError',
        'o Python selecionado informa ModuleNotFoundError'
      );
    }
  });

  const secaoLaboratorioFinal = Array.from(document.querySelectorAll('section.card'))
    .find(secao => secao.querySelector('h2')?.textContent.startsWith('16.'));
  const promptRegras = secaoLaboratorioFinal?.querySelector('.prompt');
  if (promptRegras && !promptRegras.textContent.includes('[COLE AQUI')) {
    promptRegras.textContent = `Estas são minhas regras de reserva:

[COLE AQUI AS REGRAS QUE VOCÊ ESCREVEU NA ETAPA A]

Antes de propor código, identifique no máximo cinco decisões que ainda estejam ambíguas e que possam alterar a implementação. Não invente respostas para elas.`;
  }

  const secaoAgente = Array.from(document.querySelectorAll('section.card'))
    .find(secao => secao.querySelector('h2')?.textContent.startsWith('15.'));

  if (secaoAgente && !secaoAgente.querySelector('.git-safety-mbb')) {
    const referencia = Array.from(secaoAgente.querySelectorAll('.note'))
      .find(nota => nota.querySelector('h3')?.textContent.includes('FAÇA AGORA'));

    const blocoSeguranca = document.createElement('div');
    blocoSeguranca.className = 'note warn git-safety-mbb';
    blocoSeguranca.innerHTML = `
      <h3>ANTES DE CONECTAR UM AGENTE — proteja o repositório</h3>
      <p>Esta etapa pressupõe que o projeto esteja em um repositório Git e que você saiba criar uma branch. Se isso ainda não faz parte do seu repertório, consulte primeiro o módulo <a href="../git.html"><strong>Git/GitHub</strong></a> ou trate esta parte como demonstração guiada.</p>
      <p>Não versione o ambiente virtual nem o arquivo local que pode conter nomes. Crie ou complete <code>.gitignore</code> com:</p>
      <pre class="code">.venv/
__pycache__/
.pytest_cache/
dados/equipamentos.json</pre>
      <p>Depois confira o que o Git enxerga:</p>
      <pre class="code">git status</pre>
      <p><strong>Importante:</strong> adicionar algo ao <code>.gitignore</code> não apaga arquivos que já tenham sido versionados nem remove dados do histórico. Se algum dado real já foi enviado ao repositório, interrompa a atividade e trate a exposição antes de conectar o agente.</p>`;

    if (referencia) referencia.insertAdjacentElement('beforebegin', blocoSeguranca);
  }

  const deveIgnorar = (elemento) => {
    if (elemento.classList.contains('prompt') && elemento.closest('.bad')) {
      return true;
    }

    if (elemento.classList.contains('code')) {
      const texto = elemento.innerText.trim();
      const secao = elemento.closest('section.card');
      const titulo = secao?.querySelector('h2')?.textContent || '';

      if (
        texto.startsWith('FileNotFoundError:') ||
        texto.startsWith('ModuleNotFoundError:') ||
        texto.startsWith('projeto_emprestimos/') ||
        titulo.startsWith('13.')
      ) {
        return true;
      }
    }

    return false;
  };

  document.querySelectorAll('.prompt, pre.code').forEach((elemento) => {
    if (deveIgnorar(elemento) || elemento.closest('.copy-wrap')) {
      return;
    }

    contador += 1;
    const id = elemento.id || `ia-copy-${contador}`;
    elemento.id = id;

    const envoltorio = document.createElement('div');
    envoltorio.className = 'copy-wrap';

    elemento.parentNode.insertBefore(envoltorio, elemento);
    envoltorio.appendChild(elemento);

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'copy-btn';
    botao.textContent = 'Copiar';
    botao.setAttribute('aria-label', 'Copiar conteúdo');
    botao.title = 'Copiar';

    botao.addEventListener('click', () => {
      copyCode(id);
      botao.textContent = 'Copiado!';
      botao.classList.add('copied');

      window.setTimeout(() => {
        botao.textContent = 'Copiar';
        botao.classList.remove('copied');
      }, 1400);
    });

    envoltorio.appendChild(botao);
  });

  const proximo = Array.from(document.querySelectorAll('section.card.next'))[0];
  if (proximo && !proximo.querySelector('a[href="etica-sociedade.html"]')) {
    const voltar = proximo.querySelector('a[href="index.html"]');
    const link = document.createElement('a');
    link.href = 'etica-sociedade.html';
    link.textContent = 'Continuar para IA, Ética e Sociedade';
    if (voltar) proximo.insertBefore(link, voltar);
    else proximo.appendChild(link);
  }
});

(() => {
  if (document.querySelector('script[data-ia-trilha-modulos]')) return;
  const script = document.createElement('script');
  script.src = '../../js/ia-trilha-modulos.js?v=5';
  script.defer = true;
  script.dataset.iaTrilhaModulos = '1';
  document.head.appendChild(script);
})();
