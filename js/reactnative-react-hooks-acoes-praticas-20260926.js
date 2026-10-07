// Etapa 3 do padrão MbB — React e Hooks.
// Destaca ações práticas sem alterar códigos, previews ou arquitetura.
// Setas/círculos só são usados quando existe captura com alvo inequívoco;
// este módulo trabalha majoritariamente com previews gerados, então não cria marcações artificiais.
(() => {
  const STYLE_ID = 'mbb-react-hooks-acoes-praticas-style';
  const MAX_TRIES = 240;
  let tries = 0;

  const actionBox = (acao, contexto = '') => `
    <div class="mbb-react-hooks-action">
      <strong>Faça agora</strong>
      <span>${acao}</span>
    </div>
    ${contexto ? `<div class="mbb-react-hooks-note-context"><strong>Observe:</strong> ${contexto}</div>` : ''}
  `;

  const apply = () => {
    tries += 1;

    if (typeof modules === 'undefined' || !modules.state || !Array.isArray(modules.state.steps)) {
      if (tries < MAX_TRIES) setTimeout(apply, 50);
      return;
    }

    const react = modules.state;

    // Evolução pedagógica: primeiro o componente no App.js; depois, separado em arquivo próprio.
    const componentStep = react.steps.find(step => step?.id === 'mbb-react-componente-titulo');
    if (componentStep) {
      componentStep.addedTitle = 'Evolução: componente em arquivo separado';
      componentStep.added = `Até aqui, Titulo foi criado dentro do App.js.
Isso está correto e ajuda a entender primeiro o que é um componente.

Agora vamos organizar o projeto como acontece em aplicações maiores.

1. Crie uma pasta chamada components.

2. Dentro dela, crie o arquivo components/Titulo.js:

import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Titulo() {
  return (
    <Text style={styles.titulo}>
      Clima das Cidades
    </Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
});

3. No App.js, remova a função Titulo que estava no próprio arquivo e importe o componente:

import Titulo from './components/Titulo';

4. Continue usando normalmente no JSX:

<Titulo />

A saída visual permanece a mesma.
O que mudou foi a organização: o componente agora possui seu próprio arquivo e pode ser reutilizado por outras telas.`;
      componentStep.note = 'Começamos com o componente no App.js para entender a ideia sem criar complexidade desnecessária. Depois o separamos em components/Titulo.js para introduzir organização, reutilização e separação de responsabilidades.';
    }

    const actions = new Map([
      ['mbb-react-jsx', '<b>Altere</b> os valores de <code>nome</code> e <code>pontos</code> e <b>confira no preview</b> onde essas mudanças aparecem no JSX.'],
      ['mbb-react-componente-titulo', '<b>Crie</b> <code>components/Titulo.js</code>, mova o componente para esse arquivo, <b>importe-o no App.js</b> e confira que a saída visual continua igual.'],
      ['mbb-react-cartao-fixo', '<b>Altere</b> a cidade e a temperatura fixas dentro de <code>CartaoClima</code> e <b>observe o preview</b>.'],
      ['mbb-react-props', '<b>Altere</b> as props de uma das chamadas de <code>CartaoClima</code> e <b>compare no preview</b> os dois cartões reutilizando o mesmo componente.'],
      ['state-7-state', '<b>Digite valores diferentes</b> nos campos e <b>observe</b> como o conteúdo controlado acompanha o state.'],
      ['state-8-eventos', '<b>Digite duas notas</b>, <b>toque em Calcular</b> e <b>confira o resultado</b> produzido pelo evento.'],
      ['mbb-react-condicional', '<b>Teste uma média acima e outra abaixo de 7</b> e <b>observe</b> quando o resultado aparece e qual estilo é escolhido.'],
      ['mbb-react-map', '<b>Adicione mais uma cidade</b> ao array e <b>confira no preview</b> se um novo cartão é criado pelo <code>map()</code>.'],
      ['mbb-react-flatlist', '<b>Adicione um novo item</b> ao array <code>cidades</code> e <b>confira</b> se a <code>FlatList</code> passa a exibi-lo.'],
      ['mbb-react-pressable', '<b>Toque no cartão</b> e <b>confira</b> se a função ligada ao <code>onPress</code> é acionada.'],
      ['mbb-react-pressed', '<b>Pressione e mantenha</b> o botão por um instante e <b>observe</b> a mudança visual enquanto <code>pressed</code> está ativo.'],
      ['state-11-useref', '<b>Use o botão Limpar</b> e <b>confira</b> se o foco retorna com segurança ao primeiro campo.'],
      ['mbb-react-ref-avancar', '<b>Conclua a edição da Nota 1</b> e <b>confira</b> se o foco avança para a Nota 2.'],
      ['state-12-final', '<b>Teste a Média Escolar completa</b>: digite notas, calcule, limpe e <b>confira</b> o retorno do foco ao primeiro campo.'],
      ['mbb-effect-timer', '<b>Execute o exemplo</b> e <b>observe</b> o valor mudar com o temporizador sem precisar de um toque do usuário.'],
      ['mbb-effect-cleanup', '<b>Execute o exemplo</b> e <b>observe</b> como a função de cleanup encerra o trabalho iniciado pelo Effect quando ele deixa de ser necessário.'],
      ['mbb-effect-api-ponte', '<b>Execute o exemplo</b> e <b>acompanhe a sequência</b>: renderização → Effect → resposta externa → atualização do state → interface.']
    ]);

    const addAction = (step, acao) => {
      if (!step || step.modulePage || step.exercisePage || !acao) return;
      const original = typeof step.note === 'string' ? step.note : '';
      if (original.includes('mbb-react-hooks-action')) return;
      step.note = actionBox(acao, original);
    };

    react.steps.forEach(step => {
      if (!step) return;
      const id = String(step.id ?? '');

      if (actions.has(id)) {
        addAction(step, actions.get(id));
        return;
      }

      // Para laboratórios com código que não exigem instrução específica,
      // usa uma ação neutra e segura, sem inventar comportamento.
      if (typeof step.code === 'string' && step.code.trim() && !step.exercisePage) {
        addAction(
          step,
          '<b>Atualize o App.js</b> com o código desta etapa e <b>observe o preview</b> para identificar exatamente o efeito do recurso estudado.'
        );
      }
    });

    const exercise = react.steps.find(step => step?.id === 'exercicios-state' || step?.exercisePage);
    if (exercise && typeof exercise.html === 'string') {
      // Mantém o conteúdo aprovado e destaca visualmente apenas os pontos de execução.
      exercise.html = exercise.html
        .replace(/<strong>Faça:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Faça:</strong>')
        .replace(/<strong>Construa:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Construa:</strong>')
        .replace(/<strong>Teste:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Teste:</strong>')
        .replace(/<strong>Desafio:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Desafio:</strong>')
        .replace(/<strong>Implemente:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Implemente:</strong>');
    }

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = `
        .note:has(.mbb-react-hooks-action)>strong:first-child{display:none}
        .mbb-react-hooks-action{display:grid;gap:5px;margin:0 0 10px;padding:11px 12px;border:1px solid #cfe7d4;border-radius:10px;background:#f2fbf4;color:#24422c}
        .mbb-react-hooks-action>strong{color:#176b34}
        .mbb-react-hooks-action b{font-weight:800;color:#123b73}
        .mbb-react-hooks-action code{font-weight:700}
        .mbb-react-hooks-note-context{margin-top:6px;color:#475569}
        .mbb-react-hooks-note-context>strong{color:#475569}
        .mbb-react-hooks-exercise-label{font-weight:800!important;color:#123b73!important}
        .exercise-clean p:has(.mbb-react-hooks-exercise-label),
        .exercise-clean li:has(.mbb-react-hooks-exercise-label){padding:8px 10px;border-left:4px solid #1967d2;border-radius:8px;background:#f8fbff}
      `;
      document.head.appendChild(style);
    }

    if (typeof currentModuleKey !== 'undefined' && currentModuleKey === 'state' && typeof showStep === 'function') {
      const active = document.querySelector('#menu .nav-btn.active');
      const activeId = active?.dataset?.step;
      if (activeId != null) showStep(activeId);
    }
  };

  apply();
})();

// Encadeia a Etapa 4 sem alterar a estrutura principal da página.
(() => {
  if (document.querySelector('script[data-mbb-api-actions]')) return;
  const script = document.createElement('script');
  script.src = '../js/reactnative-api-acoes-praticas-20260926.js?v=20260926-1';
  script.dataset.mbbApiActions = 'true';
  script.async = false;
  document.body.appendChild(script);
})();
