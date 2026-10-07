// Módulo MbB — Navegação entre Telas no React Native com Snack.
// Carregado depois das lapidações existentes para acrescentar conteúdo sem alterar os módulos aprovados.
// Regra: continuidade conceitual, independência operacional.

if (typeof modules !== 'undefined') {
  const escapeNavHtml = (text = '') => String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

  const navPhonePreview = (title, items, footer = '') => `
    <div style="height:100%;display:flex;align-items:center;justify-content:center;background:#eef4fb;padding:16px;box-sizing:border-box;">
      <div style="width:88%;max-width:290px;background:#fff;border:1px solid #cbd5e1;border-radius:18px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,.12);font-family:Arial,sans-serif;">
        <div style="font-size:21px;font-weight:800;color:#0f172a;margin-bottom:14px;text-align:center;">${title}</div>
        <div style="display:grid;gap:10px;">${items.map(item => `<div style="padding:12px;border-radius:10px;background:#1967d2;color:#fff;font-weight:700;text-align:center;">${item}</div>`).join('')}</div>
        ${footer ? `<div style="font-size:12px;color:#64748b;margin-top:14px;text-align:center;">${footer}</div>` : ''}
      </div>
    </div>`;

  const packageDeps = `"@react-navigation/native": "^7.4.1",
"@react-navigation/native-stack": "^7.19.1",
"react-native-screens": "*",
"react-native-safe-area-context": "*"`;

  const appDuasTelas = `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Central de Consultas</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('BuscaCep')}
      >
        <Text style={styles.textoBotao}>Buscar CEP</Text>
      </TouchableOpacity>
    </View>
  );
}

function BuscaCep() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Busca CEP</Text>
      <Text>A consulta será colocada aqui.</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Central de Consultas' }}
        />

        <Stack.Screen
          name="BuscaCep"
          component={BuscaCep}
          options={{ title: 'Busca CEP' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#0F172A',
  },

  botao: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`;

  const inicioBase = `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Central de Consultas</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('BuscaCep')}
      >
        <Text style={styles.textoBotao}>Buscar CEP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#0F172A',
  },

  botao: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`;

  const buscaCepBase = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BuscaCep() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Busca CEP</Text>
      <Text>A consulta será colocada aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0F172A',
  },
});`;

  const appOrganizado = `import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import BuscaCep from './screens/BuscaCep';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Central de Consultas' }}
        />

        <Stack.Screen
          name="BuscaCep"
          component={BuscaCep}
          options={{ title: 'Busca CEP' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`;

  const buscaCepFinal = `import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function BuscaCep() {
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const campoCep = useRef(null);

  async function pesquisarCEP() {
    const somenteNumeros = cep.replace(/\D/g, '');

    if (somenteNumeros.length !== 8) {
      setMensagem('Digite um CEP com 8 números.');
      return;
    }

    try {
      setMensagem('Consultando...');

      const resposta = await fetch(
        'https://viacep.com.br/ws/' + somenteNumeros + '/json/'
      );

      const dados = await resposta.json();

      if (dados.erro) {
        setCidade('');
        setEstado('');
        setMensagem('CEP não encontrado.');
        return;
      }

      setCidade(dados.localidade);
      setEstado(dados.uf);
      setMensagem('');
    } catch (erro) {
      setCidade('');
      setEstado('');
      setMensagem('Não foi possível consultar o CEP.');
    }
  }

  function limpar() {
    setCep('');
    setCidade('');
    setEstado('');
    setMensagem('');
    campoCep.current?.focus();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Busca CEP</Text>

      <TextInput
        ref={campoCep}
        style={styles.campo}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        maxLength={9}
      />

      <View style={styles.linhaBotoes}>
        <TouchableOpacity style={styles.botao} onPress={pesquisarCEP}>
          <Text style={styles.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecundario} onPress={limpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {mensagem !== '' && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}

      {cidade !== '' && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>Cidade: {cidade}</Text>
          <Text style={styles.resultadoTexto}>Estado: {estado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0F172A',
  },

  campo: {
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#FFFFFF',
  },

  linhaBotoes: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },

  botao: {
    flex: 1,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },

  botaoSecundario: {
    flex: 1,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#475569',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  mensagem: {
    marginTop: 18,
    color: '#475569',
  },

  resultado: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#E0F2FE',
  },

  resultadoTexto: {
    fontSize: 18,
    marginBottom: 6,
  },
});`;

  const cotacaoDolar = `import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CotacaoDolar() {
  const [cotacao, setCotacao] = useState(null);
  const [mensagem, setMensagem] = useState('');

  async function consultar() {
    try {
      setMensagem('Consultando...');

      const resposta = await fetch(
        'https://economia.awesomeapi.com.br/json/last/USD-BRL'
      );

      const dados = await resposta.json();
      setCotacao(dados.USDBRL);
      setMensagem('');
    } catch (erro) {
      setCotacao(null);
      setMensagem('Não foi possível consultar a cotação.');
    }
  }

  function limpar() {
    setCotacao(null);
    setMensagem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cotação do Dólar</Text>

      <View style={styles.linhaBotoes}>
        <TouchableOpacity style={styles.botao} onPress={consultar}>
          <Text style={styles.textoBotao}>Consultar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecundario} onPress={limpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {mensagem !== '' && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}

      {cotacao && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>
            Atual: R$ {Number(cotacao.bid).toFixed(2)}
          </Text>
          <Text style={styles.resultadoTexto}>
            Máxima: R$ {Number(cotacao.high).toFixed(2)}
          </Text>
          <Text style={styles.resultadoTexto}>
            Mínima: R$ {Number(cotacao.low).toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0F172A',
  },

  linhaBotoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botao: {
    flex: 1,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },

  botaoSecundario: {
    flex: 1,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#475569',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  mensagem: {
    marginTop: 18,
    color: '#475569',
  },

  resultado: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#DCFCE7',
  },

  resultadoTexto: {
    fontSize: 18,
    marginBottom: 6,
  },
});`;

  const climaAtual = `import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ClimaAtual() {
  const [clima, setClima] = useState(null);
  const [mensagem, setMensagem] = useState('');

  async function consultar() {
    try {
      setMensagem('Consultando...');

      const resposta = await fetch(
        'https://api.open-meteo.com/v1/forecast' +
        '?latitude=-23.5505' +
        '&longitude=-46.6333' +
        '&current=temperature_2m,wind_speed_10m'
      );

      const dados = await resposta.json();
      setClima(dados.current);
      setMensagem('');
    } catch (erro) {
      setClima(null);
      setMensagem('Não foi possível consultar o clima.');
    }
  }

  function limpar() {
    setClima(null);
    setMensagem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Clima Atual</Text>
      <Text style={styles.cidade}>São Paulo</Text>

      <View style={styles.linhaBotoes}>
        <TouchableOpacity style={styles.botao} onPress={consultar}>
          <Text style={styles.textoBotao}>Consultar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecundario} onPress={limpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {mensagem !== '' && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}

      {clima && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>
            Temperatura: {clima.temperature_2m} °C
          </Text>
          <Text style={styles.resultadoTexto}>
            Vento: {clima.wind_speed_10m} km/h
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  cidade: {
    fontSize: 18,
    marginTop: 6,
    marginBottom: 20,
    color: '#475569',
  },

  linhaBotoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botao: {
    flex: 1,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },

  botaoSecundario: {
    flex: 1,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#475569',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  mensagem: {
    marginTop: 18,
    color: '#475569',
  },

  resultado: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
  },

  resultadoTexto: {
    fontSize: 18,
    marginBottom: 6,
  },
});`;

  const inicioDolar = `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Central de Consultas</Text>
      <Text style={styles.subtitulo}>Escolha um serviço:</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('BuscaCep')}
      >
        <Text style={styles.textoBotao}>Buscar CEP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CotacaoDolar')}
      >
        <Text style={styles.textoBotao}>Cotação do Dólar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  subtitulo: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
    color: '#475569',
  },

  botao: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#1967D2',
    marginBottom: 12,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`;

  const appDolar = `import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import BuscaCep from './screens/BuscaCep';
import CotacaoDolar from './screens/CotacaoDolar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Central de Consultas' }}
        />

        <Stack.Screen
          name="BuscaCep"
          component={BuscaCep}
          options={{ title: 'Busca CEP' }}
        />

        <Stack.Screen
          name="CotacaoDolar"
          component={CotacaoDolar}
          options={{ title: 'Cotação do Dólar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`;

  const inicioFinal = `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Central de Consultas</Text>
      <Text style={styles.subtitulo}>Escolha um serviço:</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('BuscaCep')}
      >
        <Text style={styles.textoBotao}>Buscar CEP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CotacaoDolar')}
      >
        <Text style={styles.textoBotao}>Cotação do Dólar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('ClimaAtual')}
      >
        <Text style={styles.textoBotao}>Clima Atual</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  subtitulo: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
    color: '#475569',
  },

  botao: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#1967D2',
    marginBottom: 12,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`;

  const appFinal = `import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import BuscaCep from './screens/BuscaCep';
import CotacaoDolar from './screens/CotacaoDolar';
import ClimaAtual from './screens/ClimaAtual';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Central de Consultas' }}
        />

        <Stack.Screen
          name="BuscaCep"
          component={BuscaCep}
          options={{ title: 'Busca CEP' }}
        />

        <Stack.Screen
          name="CotacaoDolar"
          component={CotacaoDolar}
          options={{ title: 'Cotação do Dólar' }}
        />

        <Stack.Screen
          name="ClimaAtual"
          component={ClimaAtual}
          options={{ title: 'Clima Atual' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`;

  const finalFiles = [
    ['App.js', appFinal],
    ['screens/Inicio.js', inicioFinal],
    ['screens/BuscaCep.js', buscaCepFinal],
    ['screens/CotacaoDolar.js', cotacaoDolar],
    ['screens/ClimaAtual.js', climaAtual],
  ];

  const navCodePanels = (files) => files.map(([name, code]) => `
    <div class="panel brief" style="margin-bottom:16px;">
      <div class="panel-title" style="display:flex;justify-content:space-between;gap:12px;align-items:center;">
        <span>${name}</span>
        <button class="btn-copy" type="button" onclick="copyNavCode('${name.replaceAll('/', '-')}' )">Copiar</button>
      </div>
      <div class="panel-body">
        <pre id="nav-code-${name.replaceAll('/', '-')}" style="white-space:pre-wrap;overflow:auto;font-family:Consolas,'Courier New',monospace;font-size:13px;line-height:1.5;margin:0;">${escapeNavHtml(code)}</pre>
      </div>
    </div>
  `).join('');

  window.copyNavCode = function (key) {
    const element = document.getElementById('nav-code-' + key);
    if (element) navigator.clipboard.writeText(element.textContent);
  };

  const apiNumberMatch = String(modules.apiCep?.title || '').match(/^(\d+)/);
  const navModuleNumber = apiNumberMatch ? Number(apiNumberMatch[1]) + 1 : 4;

  modules.navegacao = {
    title: `${navModuleNumber}. Navegação entre Telas`,
    subtitle: 'Stack, telas, navigate() e organização de um aplicativo com várias funcionalidades.',
    steps: [
      {
        id: 'nav-intro',
        menu: 'Intro',
        title: 'Navegação entre Telas — quando um app começa a crescer',
        objective: 'Entender por que separar funcionalidades em telas e como este módulo será executado no Snack.',
        modulePage: true,
        kicker: 'Uma necessidade real de organização',
        lead: 'Busca CEP, cotação do dólar e clima são funcionalidades úteis, mas um aplicativo real não precisa virar três projetos separados. Vamos reuni-las em uma Central de Consultas com uma tela inicial e uma tela para cada serviço.',
        highlight: 'Regra MbB deste módulo: conhecimento anterior pode ser retomado, mas nenhum arquivo dos módulos anteriores é obrigatório. Tudo que você precisa para executar está novamente disponível aqui.',
        boxes: [
          ['Problema', 'Um único App.js com muitas responsabilidades começa a ficar difícil de ler e manter.'],
          ['Primeiro passo', 'Aprenderemos a navegação com apenas duas telas dentro do próprio App.js.'],
          ['Depois', 'Quando a navegação estiver clara, separaremos as telas na pasta screens.'],
          ['Sem caça a arquivos', 'CEP, dólar e clima serão fornecidos novamente em códigos completos.'],
          ['Fluxo', 'Início → escolher serviço → abrir tela → voltar.'],
          ['Meta', 'Abrir um Snack vazio, copiar os arquivos indicados e ter o aplicativo funcionando.'],
        ],
      },
      {
        id: 'nav-dependencias',
        menu: '1. Dependências',
        title: '1 — Preparando o Snack para usar React Navigation',
        objective: 'Adicionar ao package.json as bibliotecas necessárias para a navegação.',
        code: packageDeps,
        fileLabel: 'Trecho para adicionar dentro de dependencies — package.json',
        addedTitle: 'Onde colar',
        added: `1. No painel Project do Snack, abra package.json.

2. Localize o objeto "dependencies".

3. Acrescente as quatro entradas mostradas no código.

4. Se já existirem outras dependências, NÃO apague.

5. Aguarde o Snack resolver as bibliotecas antes de continuar.`,
        preview: navPhonePreview('Preparação', ['package.json', '4 dependências', 'Snack pronto'], 'No Snack, a dependência faz parte do projeto.'),
        note: 'Não use comandos npm no terminal: nesta aula, o próprio package.json do Snack registra as dependências. As versões principais do React Navigation ficam fixadas na linha estável 7; as dependências nativas usam * para o Snack resolver a versão compatível com o ambiente.',
      },
      {
        id: 'nav-primeiro-app',
        menu: '2. Duas telas',
        title: '2 — Primeiro app navegável: tudo em um único App.js',
        objective: 'Fazer a primeira navegação funcionar antes de criar vários arquivos.',
        code: appDuasTelas,
        fileLabel: 'Código completo — App.js',
        addedTitle: 'O que observar',
        added: `Este primeiro exemplo foi mantido em um único arquivo de propósito.

NavigationContainer
-> envolve a navegação do aplicativo.

createNativeStackNavigator()
-> cria o navegador em pilha.

Stack.Screen
-> registra cada tela.

navigation.navigate('BuscaCep')
-> abre a tela registrada com esse nome.`,
        preview: navPhonePreview('Central de Consultas', ['Buscar CEP'], 'Ao tocar, a tela Busca CEP é aberta.'),
        note: 'Primeiro isolamos o conceito de navegação. Só depois vamos organizar o projeto em arquivos separados.',
      },
      {
        id: 'nav-modelo-mental',
        menu: '3. Como funciona',
        title: '3 — O caminho do toque até a nova tela',
        objective: 'Criar um modelo mental simples para ler o código de navegação.',
        modulePage: true,
        kicker: 'Entenda antes de ampliar',
        lead: 'O botão não abre um arquivo diretamente. Ele pede ao navegador para localizar uma tela registrada pelo nome.',
        highlight: 'Toque → navigation.navigate() → Stack procura o name → componente da tela é exibido.',
        boxes: [
          ['NavigationContainer', 'É o contêiner que mantém o estado da navegação.'],
          ['Stack.Navigator', 'Organiza as telas como uma pilha de navegação.'],
          ['Stack.Screen', 'Registra um nome e liga esse nome a um componente.'],
          ['navigate()', 'Solicita a abertura de uma tela registrada.'],
          ['name', 'O texto usado em navigate() deve corresponder ao name da Stack.Screen.'],
          ['Voltar', 'Ao abrir a segunda tela, o Native Stack fornece o retorno para a tela anterior no cabeçalho.'],
        ],
      },
      {
        id: 'nav-criar-inicio',
        menu: '4. Inicio.js',
        title: '4 — Criando a primeira tela em arquivo próprio',
        objective: 'Criar a pasta screens e mover a tela inicial para screens/Inicio.js.',
        code: inicioBase,
        fileLabel: 'Código completo — screens/Inicio.js',
        addedTitle: 'Faça no Snack',
        added: `1. Crie a pasta screens.
2. Dentro dela, crie Inicio.js.
3. Cole o código completo desta etapa.
4. Não altere o App.js ainda.

O aplicativo continua funcionando com o App.js anterior enquanto preparamos os novos arquivos.`,
        preview: navPhonePreview('screens/Inicio.js', ['Tela inicial preparada'], 'Ainda não mudamos App.js.'),
        note: 'Criar o arquivo antes de importá-lo evita um erro temporário de “arquivo não encontrado”.',
      },
      {
        id: 'nav-criar-cep-base',
        menu: '5. BuscaCep.js',
        title: '5 — Criando a segunda tela em arquivo próprio',
        objective: 'Preparar screens/BuscaCep.js antes de reorganizar o App.js.',
        code: buscaCepBase,
        fileLabel: 'Código completo — screens/BuscaCep.js',
        addedTitle: 'Faça no Snack',
        added: `1. Dentro de screens, crie BuscaCep.js.
2. Cole o código completo.
3. Ainda não altere App.js.

Agora os dois arquivos que serão importados já existem.`,
        preview: navPhonePreview('screens/BuscaCep.js', ['Tela Busca CEP preparada'], 'Pronta para ser registrada no Stack.'),
        note: 'Neste momento a tela é simples porque o foco ainda é a arquitetura de navegação, não a API.',
      },
      {
        id: 'nav-organizar-app',
        menu: '6. Organizar App.js',
        title: '6 — App.js passa a organizar as telas',
        objective: 'Importar as telas da pasta screens e manter no App.js somente a configuração da navegação.',
        code: appOrganizado,
        fileLabel: 'Código completo — App.js',
        addedTitle: 'Mudança de responsabilidade',
        added: `Antes:
App.js continha as telas e a navegação.

Agora:
screens/Inicio.js -> interface da tela inicial.
screens/BuscaCep.js -> interface da consulta.
App.js -> registra e organiza a navegação.

components e screens não significam a mesma coisa:
components -> peças reutilizáveis.
screens -> telas navegáveis do aplicativo.`,
        preview: navPhonePreview('Estrutura', ['App.js', 'screens/Inicio.js', 'screens/BuscaCep.js'], 'A navegação continua igual; o projeto ficou melhor organizado.'),
        note: 'Esta reorganização não acrescenta uma funcionalidade nova. Ela melhora a estrutura do projeto sem alterar o comportamento.',
      },
      {
        id: 'nav-cep-completo',
        menu: '7. CEP completo',
        title: '7 — Trocando a tela simples pela Busca CEP completa',
        objective: 'Reutilizar uma funcionalidade conhecida sem depender do arquivo criado no módulo anterior.',
        code: buscaCepFinal,
        fileLabel: 'Código completo — screens/BuscaCep.js',
        addedTitle: 'Substitua o arquivo inteiro',
        added: `Abra screens/BuscaCep.js.

Apague o conteúdo simples da etapa anterior.

Cole este código completo.

Você não precisa voltar ao módulo de APIs: toda a funcionalidade necessária está novamente aqui.`,
        preview: navPhonePreview('Busca CEP', ['Digite o CEP', 'Pesquisar', 'Limpar'], 'A tela agora consulta o ViaCEP.'),
        note: 'A consulta é retomada como funcionalidade pronta. O conceito novo deste módulo continua sendo a navegação entre telas.',
      },
      {
        id: 'nav-dolar',
        menu: '8. Adicionar Dólar',
        title: '8 — Acrescentando uma nova funcionalidade sem quebrar a navegação',
        objective: 'Criar CotacaoDolar.js, registrar a tela e acrescentar o novo acesso na tela inicial.',
        customPage: true,
        html: `
          <div class="intro-kicker">Espiral MbB: repetir o mesmo ciclo com uma nova tela</div>
          <h3>Adicionar Cotação do Dólar</h3>
          <p class="intro-lead">Agora você já conhece o ciclo. Primeiro criamos a tela, depois registramos no Stack e só então colocamos o botão na tela inicial. Assim o projeto permanece executável durante a alteração.</p>
          <div class="intro-highlight">Ordem segura: criar arquivo → registrar tela → criar acesso com navigate().</div>
          ${navCodePanels([
            ['screens/CotacaoDolar.js', cotacaoDolar],
            ['App.js', appDolar],
            ['screens/Inicio.js', inicioDolar],
          ])}
          <div class="obs"><strong>Observação:</strong> copie os três arquivos na ordem apresentada. A cotação usa a mesma API estudada anteriormente, mas o código está completo aqui.</div>
        `,
      },
      {
        id: 'nav-clima',
        menu: '9. Adicionar Clima',
        title: '9 — Repetindo o ciclo com Clima Atual',
        objective: 'Consolidar a criação, o registro e a abertura de uma nova tela.',
        customPage: true,
        html: `
          <div class="intro-kicker">Agora o padrão deve ficar previsível</div>
          <h3>Adicionar Clima Atual</h3>
          <p class="intro-lead">A terceira funcionalidade não traz uma nova arquitetura. Ela repete o mesmo processo para consolidar a navegação.</p>
          <div class="intro-highlight">Criar → importar → registrar → navegar. Se essa sequência estiver clara, você já domina a base deste módulo.</div>
          ${navCodePanels([
            ['screens/ClimaAtual.js', climaAtual],
            ['App.js', appFinal],
            ['screens/Inicio.js', inicioFinal],
          ])}
          <div class="obs"><strong>Observação:</strong> o exemplo usa São Paulo com latitude e longitude fixas para manter o foco na navegação, sem introduzir permissões de GPS neste momento.</div>
        `,
      },
      {
        id: 'nav-projeto-final',
        menu: '10. Projeto completo',
        title: '10 — Checkpoint: projeto completo para copiar e recuperar',
        objective: 'Ter todos os arquivos finais em um único ponto de recuperação.',
        customPage: true,
        html: `
          <div class="intro-kicker">Checkpoint operacional</div>
          <h3>Central de Consultas — arquivos finais</h3>
          <p class="intro-lead">Se você começou por esta etapa, perdeu algum arquivo ou quer reconstruir o projeto, use este checkpoint. Ele não depende dos módulos anteriores.</p>
          <div class="intro-highlight">Antes dos arquivos abaixo, confirme apenas as quatro dependências da etapa 1 no package.json.</div>
          <div class="panel brief" style="margin-bottom:16px;">
            <div class="panel-body">
              <strong>Estrutura final</strong>
              <pre style="white-space:pre-wrap;font-family:Consolas,'Courier New',monospace;margin-bottom:0;">App.js
screens/
  Inicio.js
  BuscaCep.js
  CotacaoDolar.js
  ClimaAtual.js</pre>
            </div>
          </div>
          ${navCodePanels(finalFiles)}
          <div class="obs"><strong>Teste MbB:</strong> Snack vazio + dependências + estes cinco arquivos = projeto executável, sem precisar recuperar nenhum arquivo de capítulos anteriores.</div>
        `,
      },
      {
        id: 'nav-consolidacao',
        menu: '11. Consolidação',
        title: '11 — O que você realmente aprendeu',
        objective: 'Consolidar a arquitetura antes dos exercícios.',
        modulePage: true,
        kicker: 'Do código ao modelo mental',
        lead: 'A navegação deixou de ser um conjunto de comandos soltos e passou a ter um ciclo previsível.',
        highlight: 'Criar tela → importar → registrar em Stack.Screen → abrir com navigate().',
        boxes: [
          ['App.js', 'Mantém a configuração principal da navegação.'],
          ['screens/', 'Organiza os componentes que representam telas navegáveis.'],
          ['Stack.Screen', 'Liga um nome de rota a um componente.'],
          ['navigate()', 'Abre uma rota registrada pelo nome.'],
          ['Voltar', 'O Stack mantém o histórico e permite retornar à tela anterior.'],
          ['Escala', 'Novas funcionalidades podem entrar repetindo o mesmo ciclo sem transformar App.js em uma tela gigante.'],
        ],
      },
      {
        id: 'nav-exercicios',
        menu: '99. Exercícios',
        title: '99 — Exercícios de Navegação entre Telas',
        objective: 'Aplicar o ciclo criar → importar → registrar → navegar em novas situações.',
        modulePage: true,
        kicker: 'Agora é sua vez',
        lead: 'Parta da Central de Consultas pronta. Em cada exercício, acrescente uma tela sem remover as que já funcionam.',
        highlight: 'Antes de programar, escreva a sequência: arquivo que será criado → import no App.js → Stack.Screen → botão que chama navigate().',
        boxes: [
          ['1. Sobre o app', 'Crie screens/Sobre.js com nome do aplicativo, objetivo e tecnologias usadas. Adicione “Sobre” à tela inicial.'],
          ['2. Conversor', 'Crie screens/Conversor.js com dois campos e uma conversão simples de quilômetros para milhas. Registre e navegue até ela.'],
          ['3. Contador', 'Crie screens/Contador.js usando useState para aumentar e diminuir um valor. Integre sem alterar as outras telas.'],
          ['4. Diagnóstico', 'Troque propositalmente o texto usado em navigate() por um nome não registrado, observe o erro e depois corrija.'],
          ['5. Organização', 'Explique em uma frase por que Inicio.js fica em screens e por que um componente reutilizável, como um cartão, poderia ficar em components.'],
          ['6. Projeto pessoal', 'Adicione uma tela útil para um aplicativo que você realmente gostaria de construir e documente o ciclo completo de integração.'],
        ],
      },
    ],
  };

  if (typeof showStep === 'function') {
    const showStepNavBase = showStep;

    showStep = function (...args) {
      const result = showStepNavBase.apply(this, args);
      const id = args[0];
      const step = modules[currentModuleKey]?.steps?.find(item => String(item.id) === String(id));
      const codeTitle = document.querySelector('#codeCard .panel-title span');

      if (step?.fileLabel && codeTitle) {
        codeTitle.textContent = step.fileLabel;
      }

      return result;
    };
  }

  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();
  if (typeof showStep === 'function' && typeof currentModuleKey !== 'undefined') {
    const current = modules[currentModuleKey] || modules.fundamentosMobile;
    if (current?.steps?.length) showStep(current.steps[0].id);
  }
}
