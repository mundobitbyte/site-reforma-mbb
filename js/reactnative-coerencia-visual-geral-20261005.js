// Coerência visual geral — React Native MbB
// Ajustes cirúrgicos: JS Essencial, Navegação e dois resíduos de React e Hooks.
// Não altera Fundamentos, Interfaces, Web Services/APIs, ordem, navegação ou conteúdo pedagógico.

(() => {
  if (typeof modules === 'undefined') return;

  const setCode = (moduleKey, id, code) => {
    const step = modules[moduleKey]?.steps?.find(item => item && String(item.id) === String(id));
    if (step) step.code = code;
  };

  const setPreview = (moduleKey, id, preview) => {
    const step = modules[moduleKey]?.steps?.find(item => item && String(item.id) === String(id));
    if (step) step.preview = preview;
  };

  // ---------------------------------------------------------------------
  // JS ESSENCIAL — o código passa a reproduzir a saída visual mostrada.
  // ---------------------------------------------------------------------

  setCode('javascriptEssencial', 'js-variaveis', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana';
  let idade = 16;
  idade = 17;
  const altura = 1.65;
  const matriculado = true;

  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Text style={styles.linha}><Text style={styles.rotulo}>Nome:</Text> {nome}</Text>
        <Text style={styles.linha}><Text style={styles.rotulo}>Idade:</Text> {idade}</Text>
        <Text style={styles.linha}><Text style={styles.rotulo}>Altura:</Text> {altura}</Text>
        <Text style={styles.linha}><Text style={styles.rotulo}>Matriculado:</Text> {matriculado ? 'Sim' : 'Não'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  cartao: {
    width: '100%',
    maxWidth: 300,
    padding: 20,
    borderWidth: 1,
    borderColor: '#DBE3EF',
    borderRadius: 14,
  },
  linha: {
    fontSize: 16,
    lineHeight: 29,
    color: '#1E293B',
  },
  rotulo: { fontWeight: 'bold' },
});`);

  setCode('javascriptEssencial', 'js-condicoes', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const media = 7;
  let situacao = '';

  if (media >= 6) {
    situacao = 'Aprovado';
  } else {
    situacao = 'Reprovado';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.linha}><Text style={styles.rotulo}>Média:</Text> {media}</Text>
      <Text style={styles.linha}><Text style={styles.rotulo}>Situação:</Text> {situacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  linha: { fontSize: 18, lineHeight: 32 },
  rotulo: { fontWeight: 'bold' },
});`);

  setCode('javascriptEssencial', 'js-funcoes', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  function somar(a, b) {
    return a + b;
  }

  const dobro = numero => numero * 2;

  return (
    <View style={styles.container}>
      <Text style={styles.linha}>5 + 3 = <Text style={styles.destaque}>{somar(5, 3)}</Text></Text>
      <Text style={styles.linha}>Dobro de 6 = <Text style={styles.destaque}>{dobro(6)}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  linha: { fontSize: 18, lineHeight: 32 },
  destaque: { fontWeight: 'bold' },
});`);

  setCode('javascriptEssencial', 'js-arrays', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const alunos = [
    { id: 1, nome: 'Ana', nota: 8 },
    { id: 2, nome: 'Bruno', nota: 5 },
    { id: 3, nome: 'Carla', nota: 9 },
  ];

  return (
    <View style={styles.container}>
      {alunos.map(aluno => (
        <Text key={aluno.id} style={styles.linha}>
          {aluno.nome} - Nota: {aluno.nota}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  linha: { fontSize: 17, lineHeight: 34 },
});`);

  setCode('javascriptEssencial', 'js-filter-find', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const alunos = [
    { id: 1, nome: 'Ana', nota: 8 },
    { id: 2, nome: 'Bruno', nota: 5 },
    { id: 3, nome: 'Carla', nota: 9 },
  ];

  const aprovados = alunos.filter(aluno => aluno.nota >= 6);
  const bruno = alunos.find(aluno => aluno.nome === 'Bruno');

  return (
    <View style={styles.container}>
      <Text style={styles.linha}><Text style={styles.rotulo}>Aprovados:</Text> {aprovados.length}</Text>
      <Text style={styles.linha}><Text style={styles.rotulo}>Nota de Bruno:</Text> {bruno.nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  linha: { fontSize: 18, lineHeight: 32 },
  rotulo: { fontWeight: 'bold' },
});`);

  setCode('javascriptEssencial', 'js-destructuring', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const aluno = { nome: 'Ana', nota: 8, turma: '2º DS' };

  const { nome, nota } = aluno;
  const alunoAtualizado = { ...aluno, nota: 9 };

  return (
    <View style={styles.container}>
      <Text style={styles.linha}>{nome} tinha nota {nota}.</Text>
      <Text style={styles.linha}>Nova nota: <Text style={styles.destaque}>{alunoAtualizado.nota}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  linha: { fontSize: 18, lineHeight: 32 },
  destaque: { fontWeight: 'bold' },
});`);

  setCode('javascriptEssencial', 'js-operadores', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = '';
  const logado = true;
  const idade = 20;

  const nomeExibido = nome || 'Visitante';
  const situacao = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

  return (
    <View style={styles.container}>
      <Text style={styles.linha}>Usuário: {nomeExibido}</Text>
      {logado && <Text style={styles.linha}>Usuário autenticado</Text>}
      <Text style={styles.linha}>{situacao}</Text>
      <Text style={styles.linha}>Não está logado? {!logado ? 'Sim' : 'Não'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  linha: { fontSize: 17, lineHeight: 32 },
});`);

  setCode('javascriptEssencial', 'js-async', `import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Toque no botão');

  async function carregar() {
    try {
      const resposta = await Promise.resolve(
        '{"curso":"React Native","nivel":"Essencial"}'
      );

      const dados = JSON.parse(resposta);
      setMensagem(\`${'${dados.curso}'} - ${'${dados.nivel}'}\`);
    } catch (erro) {
      setMensagem('Erro ao carregar');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Pressable style={styles.botao} onPress={carregar}>
          <Text style={styles.textoBotao}>CARREGAR</Text>
        </Pressable>
        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  area: { width: 220, alignItems: 'stretch' },
  botao: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mensagem: {
    marginTop: 18,
    textAlign: 'center',
  },
});`);

  // ---------------------------------------------------------------------
  // REACT E HOOKS — mantém o código pedagógico e torna a prévia fiel.
  // ---------------------------------------------------------------------

  setPreview('state', 'mbb-effect-cleanup', `
    <div style="height:100%;display:flex;align-items:center;justify-content:center;background:#eef4fb;padding:16px;box-sizing:border-box;">
      <div style="width:88%;max-width:290px;background:#fff;border:1px solid #cbd5e1;border-radius:18px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,.12);font-family:Arial,sans-serif;">
        <div style="font-size:21px;font-weight:800;color:#0f172a;margin-bottom:14px;text-align:center;">Effect + cleanup</div>
        <div style="font-size:20px;text-align:center;">Temporizador ativo</div>
        <div style="font-size:26px;font-weight:800;text-align:center;margin-top:8px;">12 s</div>
        <div style="margin-top:10px;color:#166534;text-align:center;">cleanup preparado</div>
      </div>
    </div>`);

  setPreview('state', 'mbb-react-condicional', `
    <div style="height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:16px;box-sizing:border-box;font-family:Arial,sans-serif;">
      <div style="width:88%;max-width:280px;border:1px solid #cbd5e1;border-radius:14px;padding:18px;">
        <div style="font-weight:800;font-size:20px;margin-bottom:12px;">Média Escolar</div>
        <div style="border:1px solid #cbd5e1;border-radius:8px;padding:10px;margin-bottom:10px;color:#94a3b8;">Nota 1</div>
        <div style="border:1px solid #cbd5e1;border-radius:8px;padding:10px;margin-bottom:10px;color:#94a3b8;">Nota 2</div>
        <div style="background:#1967d2;color:white;border-radius:5px;padding:9px;text-align:center;font-weight:700;">CALCULAR</div>
        <div style="margin-top:18px;">Média: 8</div>
        <div style="font-weight:800;color:#166534;margin-top:4px;">Aprovado</div>
      </div>
    </div>`);

  // ---------------------------------------------------------------------
  // NAVEGAÇÃO — saída real onde há app; esquema identificado onde é guia.
  // ---------------------------------------------------------------------

  const navAppPreview = (body) => `
    <div style="height:100%;background:#f8fafc;box-sizing:border-box;font-family:Arial,sans-serif;display:flex;flex-direction:column;">
      <div style="height:48px;background:#fff;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;padding:0 14px;font-size:14px;font-weight:700;color:#0f172a;box-sizing:border-box;">Central de Consultas</div>
      ${body}
    </div>`;

  setPreview('navegacao', 'nav-primeiro-app', navAppPreview(`
    <div style="flex:1;padding:24px;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;">
      <div style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:24px;">Central de Consultas</div>
      <div style="padding:14px;border-radius:10px;background:#1967d2;color:#fff;font-weight:700;text-align:center;">Buscar CEP</div>
    </div>`));

  setPreview('navegacao', 'nav-organizar-app', navAppPreview(`
    <div style="flex:1;padding:24px;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;">
      <div style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:24px;">Central de Consultas</div>
      <div style="padding:14px;border-radius:10px;background:#1967d2;color:#fff;font-weight:700;text-align:center;">Buscar CEP</div>
    </div>`));

  setPreview('navegacao', 'nav-cep-completo', `
    <div style="height:100%;background:#f8fafc;box-sizing:border-box;font-family:Arial,sans-serif;display:flex;flex-direction:column;">
      <div style="height:48px;background:#fff;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;padding:0 14px;font-size:14px;font-weight:700;color:#0f172a;box-sizing:border-box;">‹ &nbsp; Busca CEP</div>
      <div style="flex:1;padding:24px;box-sizing:border-box;">
        <div style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:20px;">Busca CEP</div>
        <div style="border:1px solid #94a3b8;border-radius:10px;padding:12px;background:#fff;color:#94a3b8;">Digite o CEP</div>
        <div style="display:flex;gap:10px;margin-top:14px;">
          <div style="flex:1;padding:13px;border-radius:10px;background:#1967d2;color:#fff;font-weight:700;text-align:center;">Pesquisar</div>
          <div style="flex:1;padding:13px;border-radius:10px;background:#475569;color:#fff;font-weight:700;text-align:center;">Limpar</div>
        </div>
      </div>
    </div>`);

  const schemeLabels = new Map([
    ['nav-dependencias', 'Esquema da preparação no Snack'],
    ['nav-criar-inicio', 'Esquema da etapa — arquivo preparado'],
    ['nav-criar-cep-base', 'Esquema da etapa — arquivo preparado'],
  ]);

  const outputLabels = new Map([
    ['js-async', 'Tela após tocar em CARREGAR'],
    ['nav-primeiro-app', 'Tela do app no Snack'],
    ['nav-organizar-app', 'Tela do app após reorganizar os arquivos'],
    ['nav-cep-completo', 'Tela após abrir Busca CEP'],
  ]);

  function adjustResultLabel(id) {
    const title = document.querySelector('#resultCard > .panel-title');
    if (!title || typeof currentModuleKey === 'undefined') return;

    if (currentModuleKey === 'navegacao' && schemeLabels.has(String(id))) {
      title.textContent = schemeLabels.get(String(id));
      return;
    }

    if (outputLabels.has(String(id))) {
      title.textContent = outputLabels.get(String(id));
      return;
    }

    title.textContent = 'Tela do snack.expo.dev';
  }

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbCoerenciaVisualGeral(id) {
      const result = previousShowStep.apply(this, arguments);
      adjustResultLabel(id);
      return result;
    };
  }

  // Atualiza a etapa já aberta, caso este arquivo seja carregado depois dela.
  if (typeof currentModuleKey !== 'undefined') {
    const active = document.querySelector('#menu .nav-btn.active');
    const activeId = active?.dataset?.stepId || active?.dataset?.id;
    if (activeId) adjustResultLabel(activeId);
  }
})();
