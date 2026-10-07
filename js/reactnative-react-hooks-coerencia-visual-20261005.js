// Coerência visual — React e Hooks
// Ajusta somente os códigos exibidos no módulo 2 para que o resultado no Snack
// reproduza a estrutura visual mostrada nas saídas do próprio material.
// Não altera navegação, ordem, textos pedagógicos nem o módulo Interfaces.

if (typeof modules !== 'undefined' && modules.state && Array.isArray(modules.state.steps)) {
  const steps = modules.state.steps;
  const setCode = (id, code) => {
    const step = steps.find(item => item && item.id === id);
    if (step) step.code = code;
  };

  setCode('mbb-react-jsx', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana';
  const pontos = 8;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Olá, {nome}!</Text>
        <Text style={styles.texto}>Você tem {pontos} pontos.</Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  texto: { fontSize: 16 },
});`);

  setCode('mbb-react-componente-titulo', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Titulo() {
  return <Text style={styles.titulo}>Clima das Cidades</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Titulo />
        <Text style={styles.subtitulo}>Primeiro componente personalizado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    shadowColor: '#0F172A',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  subtitulo: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
  },
});`);

  setCode('mbb-react-cartao-fixo', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima() {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>São Paulo</Text>
      <Text style={styles.temperatura}>26 °C</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Clima</Text>
        <CartaoClima />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  cartao: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
  },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  temperatura: { fontSize: 26, marginTop: 8 },
});`);

  setCode('mbb-react-props', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.temperatura}>{temperatura} °C</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Clima</Text>
        <View style={styles.lista}>
          <CartaoClima cidade="São Paulo" temperatura={26} />
          <CartaoClima cidade="Campinas" temperatura={28} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  lista: { gap: 10 },
  cartao: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
  },
  cidade: { fontWeight: 'bold' },
  temperatura: { marginTop: 4 },
});`);

  setCode('mbb-react-map', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text>
        <Text style={styles.cidade}>{cidade}</Text> — {temperatura} °C
      </Text>
    </View>
  );
}

export default function App() {
  const cidades = [
    { id: 1, cidade: 'São Paulo', temperatura: 26 },
    { id: 2, cidade: 'Campinas', temperatura: 28 },
    { id: 3, cidade: 'Santos', temperatura: 24 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cidades</Text>
        <View style={styles.lista}>
          {cidades.map(item => (
            <CartaoClima
              key={item.id}
              cidade={item.cidade}
              temperatura={item.temperatura}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  lista: { gap: 8 },
  cartao: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 9,
  },
  cidade: { fontWeight: 'bold' },
});`);

  setCode('mbb-react-scrollview', `import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const cidades = ['São Paulo', 'Campinas', 'Santos', 'Sorocaba', 'Ribeirão Preto'];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cidades</Text>
        <ScrollView style={styles.area}>
          {cidades.map((cidade, index) => (
            <View key={cidade}>
              <Text style={styles.item}>{cidade}</Text>
              {index < cidades.length - 1 && <View style={styles.separador} />}
            </View>
          ))}
        </ScrollView>
        <Text style={styles.rodape}>A lista continua para baixo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  area: {
    height: 175,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  item: { paddingVertical: 9 },
  separador: { height: 1, backgroundColor: '#E2E8F0' },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
});`);

  setCode('mbb-react-flatlist', `import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text>
        <Text style={styles.cidade}>{cidade}</Text> — {temperatura} °C
      </Text>
    </View>
  );
}

export default function App() {
  const cidades = [
    { id: 'sp', cidade: 'São Paulo', temperatura: 26 },
    { id: 'campinas', cidade: 'Campinas', temperatura: 28 },
    { id: 'santos', cidade: 'Santos', temperatura: 24 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>FlatList</Text>
        <FlatList
          data={cidades}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CartaoClima cidade={item.cidade} temperatura={item.temperatura} />
          )}
          contentContainerStyle={styles.lista}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  lista: { gap: 8 },
  cartao: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 9,
  },
  cidade: { fontWeight: 'bold' },
});`);

  setCode('mbb-react-pressable', `import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  function abrirDetalhes() {
    console.log('Abrir detalhes');
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.tituloPainel}>Cartão clicável</Text>
        <Pressable style={styles.cartao} onPress={abrirDetalhes}>
          <Text style={styles.cidade}>São Paulo</Text>
          <Text style={styles.dica}>Toque para ver detalhes</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  tituloPainel: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  cartao: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderRadius: 12,
  },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  dica: { marginTop: 6, color: '#64748B' },
});`);

  setCode('mbb-react-pressed', `import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Pressable</Text>
        <Pressable
          onPress={() => console.log('Salvou')}
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.texto}>Salvar</Text>
        </Pressable>
        <Text style={styles.rodape}>Durante o toque, a opacidade muda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  botao: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },
  botaoPressionado: { opacity: 0.6 },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
});`);

  setCode('mbb-react-ref-avancar', `import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const campoNota2 = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Notas</Text>
        <TextInput
          style={styles.campo}
          placeholder="Nota 1"
          returnKeyType="next"
          onSubmitEditing={() => campoNota2.current?.focus()}
        />
        <TextInput
          ref={campoNota2}
          style={[styles.campo, styles.campoFoco]}
          placeholder="Nota 2 — foco"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  campoFoco: {
    borderWidth: 2,
    borderColor: '#1967D2',
    marginBottom: 0,
  },
});`);

  setCode('mbb-effect-timer', `import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(valorAtual => valorAtual + 1);
    }, 1000);

    // Ainda falta encerrar o intervalo.
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Tempo</Text>
        <Text style={styles.valor}>{segundos} s</Text>
        <Text style={styles.rodape}>O valor cresce a cada segundo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  valor: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
});`);

  setCode('mbb-effect-cleanup', `import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(valorAtual => valorAtual + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Effect + cleanup</Text>
        <Text style={styles.status}>Temporizador ativo</Text>
        <Text style={styles.tempo}>{segundos} s</Text>
        <Text style={styles.cleanup}>cleanup preparado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  status: { fontSize: 20, textAlign: 'center' },
  tempo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginTop: 8 },
  cleanup: { color: '#166534', textAlign: 'center', marginTop: 10 },
});`);

  setCode('mbb-effect-api-ponte', `import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [preco, setPreco] = useState('Carregando...');

  useEffect(() => {
    async function consultarBitcoin() {
      const resposta = await fetch(
        'https://economia.awesomeapi.com.br/json/last/BTC-BRL'
      );
      const dados = await resposta.json();
      setPreco(dados.BTCBRL.bid);
    }

    consultarBitcoin();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Bitcoin</Text>
        <Text style={styles.descricao}>Cotação recebida de serviço externo</Text>
        <Text style={styles.preco}>R$ {preco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  descricao: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
  },
  preco: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginTop: 12,
  },
});`);

  // A Média Escolar já possui sua progressão funcional. Aqui ajustamos apenas
  // a etapa de renderização condicional, preservando os campos e o botão.
  setCode('mbb-react-condicional', `import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState('');
  const [situacao, setSituacao] = useState('');

  function calcular() {
    const resultado = (Number(nota1) + Number(nota2)) / 2;
    setMedia(resultado);
    setSituacao(resultado >= 7 ? 'Aprovado' : 'Reprovado');
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Média Escolar</Text>
        <TextInput
          style={styles.campo}
          value={nota1}
          onChangeText={setNota1}
          keyboardType="numeric"
          placeholder="Nota 1"
        />
        <TextInput
          style={styles.campo}
          value={nota2}
          onChangeText={setNota2}
          keyboardType="numeric"
          placeholder="Nota 2"
        />
        <Button title="Calcular" onPress={calcular} />

        {media !== '' && (
          <View style={styles.resultado}>
            <Text>Média: {media}</Text>
            <Text style={media >= 7 ? styles.aprovado : styles.reprovado}>
              {situacao}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  painel: {
    width: '88%',
    maxWidth: 280,
    padding: 18,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 14,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  resultado: { marginTop: 18 },
  aprovado: { color: '#166534', fontWeight: 'bold' },
  reprovado: { color: '#B91C1C', fontWeight: 'bold' },
});`);
}
