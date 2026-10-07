// Lapidação final da camada explicativa do React Native.
// Atua depois de reactnative-explicacoes-visiveis-mbb.js sem alterar códigos,
// previews, exercícios, Flexbox, Fundamentos ou o roteiro próprio de Navegação.

(() => {
  if (typeof modules === 'undefined') return;

  const STYLE_ID = 'mbb-explicacoes-lapidacao-style';

  const interfaceGuides = {
    '1': {
      title: 'O que esta primeira etapa estabelece',
      text: `Todo aplicativo precisa de uma área principal onde os demais componentes serão colocados.

A View chamada viewTela é essa base. flex: 1 faz com que ela ocupe todo o espaço disponível da tela. backgroundColor define a cor de fundo.

Neste momento, o resultado ainda é simples de propósito: primeiro criamos o espaço principal; depois começamos a montar os blocos internos.`
    },
    '2': {
      title: 'Por que criar um cartão dentro da tela',
      text: `Agora a interface ganha uma área central para concentrar o conteúdo do aplicativo.

Na viewTela, padding cria uma margem interna para o cartão não encostar nas bordas. alignItems: 'center' mantém o cartão centralizado horizontalmente.

Na viewCartao, width: '100%' aproveita o espaço disponível, maxWidth: 400 evita que o cartão fique largo demais e borderRadius arredonda os cantos.

Observe no resultado a diferença entre o fundo azul-claro da tela e o cartão branco que começa a organizar a aplicação.`
    },
    '3': {
      title: 'A barra passa a fazer parte do cartão',
      text: `A tela já possui fundo e cartão. Agora criamos a faixa que identificará o aplicativo.

viewTitulo fica dentro de viewCartao, por isso visualmente pertence ao cartão. A altura fixa cria uma barra consistente e as cores diferenciam a faixa do restante do conteúdo.

overflow: 'hidden' em viewCartao tem uma função importante: impede que a barra azul ultrapasse os cantos arredondados do cartão.

No preview, observe principalmente como a barra respeita o formato do cartão.`
    },
    '4': {
      title: 'Transformando a barra em informação',
      text: `Até a etapa anterior a barra era apenas uma área visual. Agora ela recebe o nome do aplicativo.

Text precisa ser importado porque é o componente usado para exibir textos em React Native.

justifyContent: 'center' centraliza o conteúdo na direção principal da View e alignItems: 'center' centraliza na outra direção. Juntos, colocam o título no centro da barra.

textoTitulo define a aparência do texto: cor branca, tamanho maior e peso em negrito. A estrutura visual começa a ganhar significado para o usuário.`
    },
    '5': {
      title: 'Preparando a região onde foto e dados ficarão juntos',
      text: `Antes de inserir a imagem e os campos, criamos a estrutura que vai organizar essa parte da tela.

viewCorpo dá respiro interno ao conteúdo. Dentro dela, viewFotoDados será a linha que reúne duas áreas: foto e dados.

flexDirection: 'row' muda a disposição padrão e coloca os filhos lado a lado.

A cor amarela da viewFoto é temporária. Ela serve para enxergar claramente o espaço reservado enquanto a interface ainda está sendo construída.`
    },
    '6': {
      title: 'A área reservada passa a exibir uma imagem',
      text: `A caixa da foto já existia. Agora colocamos nela o componente Image.

Image precisa de duas informações básicas: source indica qual imagem deve ser exibida e style define como ela ocupará o espaço disponível.

fotoAvatar usa largura e altura menores que a caixa amarela para deixar uma pequena margem visual. resizeMode: 'contain' preserva a proporção da imagem sem cortá-la.

Compare com a etapa anterior: a estrutura não mudou; apenas a área preparada ganhou conteúdo.`
    },
    '7': {
      title: 'Criando a área de entrada de dados',
      text: `Foto e dados precisam aparecer lado a lado. Por isso viewDados entra como a segunda área dentro de viewFotoDados.

flex: 1 faz essa área ocupar o espaço restante da linha, enquanto marginLeft separa visualmente os campos da foto.

Text funciona como rótulo e TextInput cria o campo de digitação. keyboardType ajuda o teclado virtual a se adaptar ao tipo de dado, como telefone ou e-mail; autoCapitalize: 'none' evita capitalização automática no e-mail.

No preview, observe a divisão clara entre a imagem à esquerda e os campos à direita.`
    },
    '8': {
      title: 'Primeiro organizamos a área dos botões',
      text: `Antes de colocar os botões, criamos o container que irá recebê-los.

Essa separação é importante: primeiro resolvemos onde os controles ficarão; depois inserimos os controles dentro desse espaço.

flexDirection: 'row' prepara os botões para ficarem lado a lado. justifyContent e alignItems cuidam da distribuição e do alinhamento dentro da faixa.

A cor verde-clara é um apoio visual desta etapa para deixar evidente a nova região da interface.`
    },
    '9': {
      title: 'Transformando a faixa em ações visuais',
      text: `Agora o container criado na etapa anterior recebe três áreas clicáveis: Novo, Editar e Excluir.

TouchableOpacity é um componente de toque que permite montar botões personalizados com Text e estilos próprios.

flex: 1 faz os três botões dividirem o espaço disponível de forma equilibrada. marginHorizontal cria separação entre eles.

Ainda não existe comportamento associado ao toque. Nesta etapa, o objetivo é somente construir e organizar a interface dos comandos.`
    },
    '10': {
      title: 'Fechando a estrutura visual da Agenda',
      text: `A última faixa acrescenta as ações Salvar e Cancelar e completa a organização principal da tela.

Ela repete o padrão já aprendido: primeiro um container em linha; dentro dele, componentes TouchableOpacity estilizados.

As cores diferentes ajudam a comunicar papéis distintos: salvar confirma uma ação; cancelar interrompe ou desfaz a operação atual.

Ao final desta etapa, a Agenda possui fundo, cartão, título, foto, campos e grupos de botões. O layout está pronto para receber comportamento em módulos posteriores.`
    }
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #workspace.mbb-visible-explanation-workspace {
        grid-template-rows: minmax(320px, 1fr) minmax(280px, auto) !important;
      }

      #workspace.mbb-visible-explanation-workspace #resultCard {
        min-height: 612px !important;
      }

      #mbbStepExplanation {
        min-height: 280px !important;
      }

      #mbbStepExplanation .mbb-explanation-text {
        line-height: 1.62 !important;
      }

      @media (max-width: 1180px) and (min-width: 1051px) {
        #workspace.mbb-visible-explanation-workspace {
          grid-template-columns: minmax(500px, 1fr) minmax(340px, 410px) !important;
          grid-template-rows: minmax(300px, 1fr) minmax(300px, auto) !important;
        }

        #mbbStepExplanation {
          min-height: 300px !important;
        }
      }

      @media (max-width: 1050px) {
        #workspace.mbb-visible-explanation-workspace {
          height: auto !important;
          overflow: visible !important;
          grid-template-columns: 1fr !important;
          grid-template-rows: auto auto auto !important;
          align-content: start !important;
        }

        #workspace.mbb-visible-explanation-workspace #codeCard {
          grid-column: 1 !important;
          grid-row: 1 !important;
        }

        #mbbStepExplanation {
          grid-column: 1 !important;
          grid-row: 2 !important;
          min-height: 0 !important;
        }

        #workspace.mbb-visible-explanation-workspace #resultCard {
          grid-column: 1 !important;
          grid-row: 3 !important;
          min-height: 640px !important;
          height: auto !important;
        }
      }

      @media (max-width: 720px) {
        #workspace.mbb-visible-explanation-workspace #codeCard {
          order: 1 !important;
        }

        #mbbStepExplanation {
          order: 2 !important;
          width: 100% !important;
          min-height: 0 !important;
        }

        #workspace.mbb-visible-explanation-workspace #resultCard {
          order: 3 !important;
          min-height: 520px !important;
          height: auto !important;
        }

        #mbbStepExplanation .mbb-explanation-body {
          padding: 12px 13px 14px !important;
        }

        #mbbStepExplanation .mbb-explanation-text {
          font-size: 13px !important;
          line-height: 1.55 !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function activeModule() {
    if (typeof currentModuleKey === 'undefined') return null;
    return modules[currentModuleKey] || null;
  }

  function activeStep(id) {
    const module = activeModule();
    if (!module || !Array.isArray(module.steps)) return null;

    if (id !== undefined && id !== null) {
      return module.steps.find(step => String(step.id) === String(id)) || null;
    }

    return module.steps.find(step => {
      const button = document.getElementById(`btn-${currentModuleKey}-${step.id}`);
      return button && button.classList.contains('active');
    }) || null;
  }

  function isOrdinaryPracticalStep(step) {
    if (!step || typeof currentModuleKey === 'undefined') return false;
    if (currentModuleKey === 'navegacao') return false;

    if (
      step.modulePage ||
      step.customPage ||
      step.exercisePage ||
      step.flexLab ||
      step.glossaryPage
    ) return false;

    return typeof step.code === 'string' && step.code.trim() !== '';
  }

  function firstPracticalStep() {
    const module = activeModule();
    if (!module || !Array.isArray(module.steps)) return null;
    return module.steps.find(step => isOrdinaryPracticalStep(step)) || null;
  }

  function polishPanel(id) {
    const panel = document.getElementById('mbbStepExplanation');
    if (!panel) return;

    const step = activeStep(id);
    if (!isOrdinaryPracticalStep(step)) return;

    const action = panel.querySelector('.mbb-explanation-action');
    const first = firstPracticalStep();

    if (action && first !== step) {
      action.remove();
    } else if (action && first === step) {
      action.innerHTML = '<strong>Como usar esta sequência:</strong> observe as linhas destacadas no código completo, compare com o resultado e leia a explicação abaixo. O botão <strong>Copiar</strong> leva o arquivo completo no estado desta etapa.';
    }

    if (currentModuleKey === 'interfaceBasica') {
      const guide = interfaceGuides[String(step.id)];
      if (!guide) return;

      const title = panel.querySelector('.mbb-explanation-title');
      const text = panel.querySelector('.mbb-explanation-text');

      if (title) title.textContent = guide.title;
      if (text) text.textContent = guide.text;
    }
  }

  function installAcademiaPreviewLink() {
    const LINK_ID = 'mbb-academia-react-native-preview';
    if (document.getElementById(LINK_ID)) return;

    const header = document.querySelector('body > header');
    if (!header) return;

    const link = document.createElement('a');
    link.id = LINK_ID;
    link.href = 'https://raw.githack.com/mundobitbyte/site/academia-react-native-do-zero-zip-20260920/academia/cursos/react-native-do-zero/index.html';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '🎓 Academia React Native — prévia';
    link.title = 'Abrir a prévia da Academia React Native do Zero';
    link.style.cssText = 'display:inline-flex;align-items:center;min-height:30px;padding:5px 10px;border-radius:999px;background:#ffffff;color:#114b9e;text-decoration:none;font-size:12px;font-weight:900;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.18);';

    const brand = header.querySelector('.brand');
    if (brand) header.insertBefore(link, brand);
    else header.appendChild(link);
  }

  installStyles();
  installAcademiaPreviewLink();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbShowStepWithExplanationPolish(id) {
      const result = previousShowStep.apply(this, arguments);
      polishPanel(id);
      window.requestAnimationFrame(() => polishPanel(id));
      return result;
    };
  }

  window.requestAnimationFrame(() => polishPanel());
})();
