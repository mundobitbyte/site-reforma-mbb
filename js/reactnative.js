const codes = {};

    codes[1] = `import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});`;

    codes[2] = `import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
  },
});`;

    codes[3] = `import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
  },
});`;

    codes[4] = `import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});`;

    codes[5] = `import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

        <View style={styles.viewCorpo}>

          <View style={styles.viewFotoDados}>

            <View style={styles.viewFoto}>

            </View>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewCorpo: {
    padding: 15,
  },

  viewFotoDados: {
    flexDirection: 'row',
  },

  viewFoto: {
    width: 100,
    height: 100,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
});`;

    codes[6] = `import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

        <View style={styles.viewCorpo}>

          <View style={styles.viewFotoDados}>

            <View style={styles.viewFoto}>
              <Image
                source={{
                  uri: '../img/reactnative/avatar.webp',
                }}
                style={styles.fotoAvatar}
              />
            </View>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewCorpo: {
    padding: 15,
  },

  viewFotoDados: {
    flexDirection: 'row',
  },

  viewFoto: {
    width: 100,
    height: 100,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotoAvatar: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
});`;

    codes[7] = `import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

        <View style={styles.viewCorpo}>

          <View style={styles.viewFotoDados}>

            <View style={styles.viewFoto}>
              <Image
                source={{
                  uri: '../img/reactnative/avatar.webp',
                }}
                style={styles.fotoAvatar}
              />
            </View>

            <View style={styles.viewDados}>

              <Text style={styles.label}>Nome</Text>
              <TextInput style={styles.input} />

              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />

            </View>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewCorpo: {
    padding: 15,
  },

  viewFotoDados: {
    flexDirection: 'row',
  },

  viewFoto: {
    width: 100,
    height: 100,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotoAvatar: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  viewDados: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#FCE7F3',
    padding: 8,
    borderWidth: 2,
    borderColor: '#F472B6',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 2,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 8,
    marginBottom: 4,
  },
});`;

    codes[8] = `import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

        <View style={styles.viewCorpo}>

          <View style={styles.viewFotoDados}>

            <View style={styles.viewFoto}>
              <Image
                source={{
                  uri: '../img/reactnative/avatar.webp',
                }}
                style={styles.fotoAvatar}
              />
            </View>

            <View style={styles.viewDados}>
              <Text style={styles.label}>Nome</Text>
              <TextInput style={styles.input} />

              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

          </View>

          <View style={styles.viewBotoesOperacao}>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewCorpo: {
    padding: 15,
  },

  viewFotoDados: {
    flexDirection: 'row',
  },

  viewFoto: {
    width: 100,
    height: 100,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotoAvatar: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  viewDados: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#FCE7F3',
    padding: 8,
    borderWidth: 2,
    borderColor: '#F472B6',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 2,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 8,
    marginBottom: 4,
  },

  viewBotoesOperacao: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#DCFCE7',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#22C55E',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});`;

    codes[9] = `import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

        <View style={styles.viewCorpo}>

          <View style={styles.viewFotoDados}>

            <View style={styles.viewFoto}>
              <Image
                source={{
                  uri: '../img/reactnative/avatar.webp',
                }}
                style={styles.fotoAvatar}
              />
            </View>

            <View style={styles.viewDados}>
              <Text style={styles.label}>Nome</Text>
              <TextInput style={styles.input} />

              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

          </View>

          <View style={styles.viewBotoesOperacao}>

            <TouchableOpacity style={styles.btnCinza}>
              <Text style={styles.textoBtn}>Novo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCinza}>
              <Text style={styles.textoBtn}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCinza}>
              <Text style={styles.textoBtn}>Excluir</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewCorpo: {
    padding: 15,
  },

  viewFotoDados: {
    flexDirection: 'row',
  },

  viewFoto: {
    width: 100,
    height: 100,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotoAvatar: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  viewDados: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#FCE7F3',
    padding: 8,
    borderWidth: 2,
    borderColor: '#F472B6',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 2,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 8,
    marginBottom: 4,
  },

  viewBotoesOperacao: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#DCFCE7',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#22C55E',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnCinza: {
    flex: 1,
    height: 40,
    backgroundColor: '#435061',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },

  textoBtn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});`;

    codes[10] = `import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTela}>

      <View style={styles.viewCartao}>

        <View style={styles.viewTitulo}>
          <Text style={styles.textoTitulo}>
            Agenda de Contatos
          </Text>
        </View>

        <View style={styles.viewCorpo}>

          <View style={styles.viewFotoDados}>

            <View style={styles.viewFoto}>
              <Image
                source={{
                  uri: '../img/reactnative/avatar.webp',
                }}
                style={styles.fotoAvatar}
              />
            </View>

            <View style={styles.viewDados}>
              <Text style={styles.label}>Nome</Text>
              <TextInput style={styles.input} />

              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

          </View>

          <View style={styles.viewBotoesOperacao}>
            <TouchableOpacity style={styles.btnCinza}>
              <Text style={styles.textoBtn}>Novo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCinza}>
              <Text style={styles.textoBtn}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCinza}>
              <Text style={styles.textoBtn}>Excluir</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewBotoesConfirmacao}>
            <TouchableOpacity style={styles.btnVerde}>
              <Text style={styles.textoBtn}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnVermelho}>
              <Text style={styles.textoBtn}>Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  viewCartao: {
    width: '100%',
    maxWidth: 400,
    minHeight: 690,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#93C5FD',
    overflow: 'hidden',
  },

  viewTitulo: {
    width: '100%',
    height: 65,
    backgroundColor: '#1967D2',
    borderBottomWidth: 2,
    borderBottomColor: '#114B9E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewCorpo: {
    padding: 15,
  },

  viewFotoDados: {
    flexDirection: 'row',
  },

  viewFoto: {
    width: 100,
    height: 100,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotoAvatar: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  viewDados: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#FCE7F3',
    padding: 8,
    borderWidth: 2,
    borderColor: '#F472B6',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 2,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 8,
    marginBottom: 4,
  },

  viewBotoesOperacao: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#DCFCE7',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#22C55E',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  viewBotoesConfirmacao: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#CFFAFE',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#06B6D4',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnCinza: {
    flex: 1,
    height: 40,
    backgroundColor: '#435061',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },

  btnVerde: {
    flex: 1,
    height: 40,
    backgroundColor: '#00853B',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },

  btnVermelho: {
    flex: 1,
    height: 40,
    backgroundColor: '#D11A1A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },

  textoBtn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});`;

    const steps = [
      { id: 0, menu: 'Intro', title: 'Construindo a Interface por Partes', objective: 'Aprender React Native montando uma Agenda de Contatos no Snack.', note: 'Use uma etapa por vez. O aluno vê o código, o resultado e o trecho novo no mesmo lugar.' },

      {
        id: 1,
        menu: '1 Fundo',
        title: '1 — Tela de Fundo',
        objective: 'Criar a tela principal.',
        code: codes[1],
        added: `<View style={styles.viewTela}>

</View>

viewTela: {
  flex: 1,
  backgroundColor: '#FFFFFF',
},`,
        note: 'A View principal ocupa a tela inteira do celular.'
      },

      {
        id: 2,
        menu: '2 Cartão',
        title: '2 — Cartão da Aplicação',
        objective: 'Criar a área principal do app.',
        code: codes[2],
        added: `// ALTERADO em viewTela
viewTela: {
  flex: 1,
  backgroundColor: '#DBEAFE',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: 20,
},

// NOVO JSX
<View style={styles.viewCartao}>

</View>

// NOVO STYLE
viewCartao: {
  width: '100%',
  maxWidth: 400,
  minHeight: 690,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  borderWidth: 2,
  borderColor: '#93C5FD',
},`,
        note: 'O padding do fundo evita que o cartão encoste nas laterais.'
      },

      {
        id: 3,
        menu: '3 Barra',
        title: '3 — Barra de Título',
        objective: 'Criar a barra superior.',
        code: codes[3],
        added: `// ALTERADO em viewCartao
viewCartao: {
  width: '100%',
  maxWidth: 400,
  minHeight: 690,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  borderWidth: 2,
  borderColor: '#93C5FD',
  overflow: 'hidden',
},

// NOVO JSX
<View style={styles.viewTitulo}>

</View>

// NOVO STYLE
viewTitulo: {
  width: '100%',
  height: 65,
  backgroundColor: '#1967D2',
  borderBottomWidth: 2,
  borderBottomColor: '#114B9E',
},`,
        note: 'O overflow hidden faz a barra respeitar os cantos arredondados do cartão.'
      },

      {
        id: 4,
        menu: '4 Título',
        title: '4 — Texto do Título',
        objective: 'Inserir o nome do aplicativo.',
        code: codes[4],
        added: `// ALTERADO no import
Text

// ALTERADO em viewTitulo
viewTitulo: {
  width: '100%',
  height: 65,
  backgroundColor: '#1967D2',
  borderBottomWidth: 2,
  borderBottomColor: '#114B9E',
  justifyContent: 'center',
  alignItems: 'center',
},

// NOVO JSX
<Text style={styles.textoTitulo}>
  Agenda de Contatos
</Text>

// NOVO STYLE
textoTitulo: {
  color: '#FFFFFF',
  fontSize: 22,
  fontWeight: 'bold',
},`,
        note: 'O Text deve ficar dentro da barra azul.'
      },

      {
        id: 5,
        menu: '5 Foto',
        title: '5 — Área da Foto',
        objective: 'Reservar o espaço da foto.',
        code: codes[5],
        added: `// NOVO JSX
<View style={styles.viewCorpo}>

  <View style={styles.viewFotoDados}>

    <View style={styles.viewFoto}>

    </View>

  </View>

</View>

// NOVO STYLE
viewCorpo: {
  padding: 15,
},

// NOVO STYLE
viewFotoDados: {
  flexDirection: 'row',
},

// NOVO STYLE
viewFoto: {
  width: 100,
  height: 100,
  backgroundColor: '#FEF3C7',
  borderWidth: 2,
  borderColor: '#F59E0B',
  justifyContent: 'center',
  alignItems: 'center',
},`,
        note: 'A cor amarela é temporária. Ela ajuda a enxergar onde fica a foto.'
      },

      {
        id: 6,
        menu: '6 Imagem',
        title: '6 — Imagem do Contato',
        objective: 'Inserir um avatar de exemplo.',
        code: codes[6],
        added: `// ALTERADO no import
Image

// NOVO JSX
<Image
  source={{
    uri: '../img/reactnative/avatar.webp',
  }}
  style={styles.fotoAvatar}
/>

// NOVO STYLE
fotoAvatar: {
  width: 90,
  height: 90,
  resizeMode: 'contain',
},`,
        note: 'A Image precisa de source e style para aparecer corretamente.'
      },

      {
        id: 7,
        menu: '7 Dados',
        title: '7 — Campos de Dados',
        objective: 'Criar Nome, Telefone e E-mail.',
        code: codes[7],
        added: `// ALTERADO no import
TextInput

// NOVO JSX
<View style={styles.viewDados}>

  <Text style={styles.label}>Nome</Text>
  <TextInput style={styles.input} />

  <Text style={styles.label}>Telefone</Text>
  <TextInput
    style={styles.input}
    keyboardType="phone-pad"
  />

  <Text style={styles.label}>E-mail</Text>
  <TextInput
    style={styles.input}
    keyboardType="email-address"
    autoCapitalize="none"
  />

</View>

// NOVO STYLE
viewDados: {
  flex: 1,
  marginLeft: 15,
  backgroundColor: '#FCE7F3',
  padding: 8,
  borderWidth: 2,
  borderColor: '#F472B6',
},

// NOVO STYLE
label: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#111827',
  marginTop: 2,
},

// NOVO STYLE
input: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#9CA3AF',
  borderRadius: 5,
  height: 30,
  paddingHorizontal: 8,
  marginBottom: 4,
},`,
        note: 'A viewFotoDados usa flexDirection row para colocar foto e campos lado a lado.'
      },

      {
        id: 8,
        menu: '8 Área',
        title: '8 — Área dos Botões',
        objective: 'Criar o container dos botões Novo, Editar e Excluir.',
        code: codes[8],
        added: `// NOVO JSX
<View style={styles.viewBotoesOperacao}>

</View>

// NOVO STYLE
viewBotoesOperacao: {
  flexDirection: 'row',
  height: 60,
  backgroundColor: '#DCFCE7',
  marginTop: 15,
  borderWidth: 2,
  borderColor: '#22C55E',
  padding: 8,
  justifyContent: 'space-between',
  alignItems: 'center',
},`,
        note: 'Primeiro criamos o container. Só depois colocamos os botões dentro dele.'
      },

      {
        id: 9,
        menu: '9 Botões',
        title: '9 — Botões de Operação',
        objective: 'Inserir Novo, Editar e Excluir.',
        code: codes[9],
        added: `// ALTERADO no import
TouchableOpacity

// NOVO JSX
<TouchableOpacity style={styles.btnCinza}>
  <Text style={styles.textoBtn}>Novo</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btnCinza}>
  <Text style={styles.textoBtn}>Editar</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btnCinza}>
  <Text style={styles.textoBtn}>Excluir</Text>
</TouchableOpacity>

// NOVO STYLE
btnCinza: {
  flex: 1,
  height: 40,
  backgroundColor: '#435061',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 4,
},

// NOVO STYLE
textoBtn: {
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: 14,
},`,
        note: 'Os botões ainda não têm eventos. Por enquanto são apenas layout.'
      },

      {
        id: 10,
        menu: '10 Final',
        title: '10 — Botões Finais',
        objective: 'Adicionar Salvar e Cancelar.',
        code: codes[10],
        added: `// NOVO JSX
<View style={styles.viewBotoesConfirmacao}>

  <TouchableOpacity style={styles.btnVerde}>
    <Text style={styles.textoBtn}>Salvar</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnVermelho}>
    <Text style={styles.textoBtn}>Cancelar</Text>
  </TouchableOpacity>

</View>

// NOVO STYLE
viewBotoesConfirmacao: {
  flexDirection: 'row',
  height: 60,
  backgroundColor: '#CFFAFE',
  marginTop: 15,
  borderWidth: 2,
  borderColor: '#06B6D4',
  padding: 8,
  justifyContent: 'space-between',
  alignItems: 'center',
},

// NOVO STYLE
btnVerde: {
  flex: 1,
  height: 40,
  backgroundColor: '#00853B',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 4,
},

// NOVO STYLE
btnVermelho: {
  flex: 1,
  height: 40,
  backgroundColor: '#D11A1A',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 4,
},`,
        note: 'Esta é a versão final do layout, ainda sem useState e sem eventos.'
      },

      {
        id: 11,
        menu: '11 Glossário',
        title: '11 — Glossário',
        objective: 'Consultar os principais conceitos de JSX e estilização usados no material.',
        note: 'Glossário de referência para revisar os conceitos trabalhados durante a construção da interface.'
      },
    ];

    const modules = {
      fundamentosMobile: {
        title: '0. Fundamentos',
        subtitle: 'Fundamentos mobile antes de aprofundar o código.',
        steps: [
          {
            id: "mobile-intro",
            menu: "Intro",
            title: "Fundamentos Mobile",
            objective: "Compreender o que muda quando desenvolvemos software para dispositivos móveis.",
            modulePage: true,
            kicker: "Antes do código",
            lead: "Antes de começar a programar em React Native, é importante compreender o aplicativo que será construído: qual problema ele resolve, quem vai utilizá-lo, quais telas serão necessárias, quais ações o usuário poderá realizar e quais dados serão manipulados.",
            highlight: "Esses fundamentos ajudam a planejar o aplicativo antes do código e servem de base para compreender como JavaScript, React e React Native participam do desenvolvimento mobile.",
            boxes: [
              ["O que é um app?", "Um software criado para funcionar em dispositivos móveis, com telas, ações, dados e uma finalidade."],
              ["Problema → solução", "Um aplicativo deve resolver uma necessidade. Antes da tecnologia, precisamos entender o que será construído."],
              ["Interface", "É o que o usuário vê e utiliza: textos, campos, imagens, botões, listas e telas."],
              ["Lógica", "É o comportamento do aplicativo: cálculos, decisões, eventos, regras e processamento."],
              ["Dados", "São as informações digitadas, recebidas, processadas, armazenadas ou enviadas pelo aplicativo."],
              ["Fluxo", "Problema → telas → ações → dados → resultado. Essa leitura ajuda a planejar antes de programar."]
            ]
          },
          {
            id: "mobile-app-site",
            menu: "1. App x Web",
            title: "1 — Aplicativo, site e aplicação web",
            objective: "Distinguir aplicações mobile de páginas e aplicações executadas no navegador.",
            modulePage: true,
            kicker: "Onde o software roda",
            lead: "Nem tudo que aparece no celular é um aplicativo mobile. O navegador também executa sites e aplicações web.",
            highlight: "Para este curso, o ponto principal é entender que o React Native será usado para construir aplicativos mobile, e não páginas HTML executadas dentro do navegador.",
            boxes: [
              ["Site", "Conteúdo acessado pelo navegador e normalmente organizado em páginas web."],
              ["Aplicação web", "Sistema executado no navegador, com interface, dados e interação."],
              ["Aplicativo mobile", "Aplicação criada para o ambiente móvel e integrada à experiência do dispositivo."],
              ["Em comum", "Todos podem ter telas, botões, dados, regras e comunicação com serviços."],
              ["O que muda", "Mudam o ambiente de execução, os componentes disponíveis e a forma de acessar recursos do dispositivo."],
              ["Foco do módulo", "Construir aplicativos mobile com React Native e Expo de maneira progressiva."]
            ]
          },
          {
            id: "mobile-plataformas",
            menu: "2. Plataformas",
            title: "2 — Android, iOS e plataformas móveis",
            objective: "Reconhecer as principais plataformas para as quais um aplicativo mobile pode ser desenvolvido.",
            modulePage: true,
            kicker: "O app precisa de uma plataforma",
            lead: "Android e iOS são as principais plataformas móveis encontradas no mercado. Cada uma possui seu próprio ambiente e características.",
            highlight: "Nesta etapa, basta compreender que o aplicativo será executado em uma plataforma móvel e poderá interagir com recursos do sistema e do dispositivo.",
            boxes: [
              ["Android", "Plataforma móvel presente em aparelhos de diferentes fabricantes."],
              ["iOS", "Plataforma móvel utilizada nos dispositivos móveis da Apple."],
              ["Plataforma", "É o ambiente no qual o aplicativo é executado e interage com o sistema e o hardware."],
              ["Componentes", "Textos, botões, imagens e outros elementos precisam virar elementos da interface da plataforma."],
              ["Recursos", "GPS, câmera, sensores e notificações dependem da interação com o sistema do aparelho."],
              ["Aplicação prática", "GPS, câmera, sensores e notificações serão estudados por meio de aplicativos que utilizam esses recursos."]
            ]
          },
          {
            id: "mobile-cross",
            menu: "3. Cross-platform",
            title: "3 — Nativo e cross-platform",
            objective: "Entender por que existem diferentes estratégias para desenvolver aplicativos mobile.",
            modulePage: true,
            kicker: "Uma ideia, diferentes plataformas",
            lead: "Um aplicativo pode ser criado especificamente para uma plataforma ou usar uma tecnologia que permite compartilhar grande parte do código entre plataformas.",
            highlight: "React Native permite criar aplicativos para plataformas móveis usando React. JavaScript expressa dados e lógica, React organiza componentes e atualizações, e React Native fornece componentes e APIs para a interface e os recursos mobile.",
            boxes: [
              ["Desenvolvimento nativo", "O aplicativo é desenvolvido diretamente com tecnologias próprias da plataforma."],
              ["Cross-platform", "Uma base de desenvolvimento é usada para atender mais de uma plataforma, compartilhando boa parte do código."],
              ["JavaScript", "É a linguagem utilizada nos exemplos deste curso."],
              ["React", "Organiza componentes, estado, propriedades e atualização da interface."],
              ["React Native", "Fornece componentes e recursos para transformar essa lógica em uma aplicação mobile."],
              ["Ideia central", "JavaScript + React + React Native/Mobile são camadas relacionadas, mas não são a mesma coisa."]
            ]
          },
          {
            id: "mobile-ciclo",
            menu: "4. Ciclo de vida",
            title: "4 — Uma visão simples do ciclo de vida",
            objective: "Entender que um aplicativo pode estar aberto, ativo, em segundo plano ou encerrado.",
            modulePage: true,
            kicker: "O aplicativo muda de estado",
            lead: "No celular, um app não fica necessariamente executando da mesma forma o tempo todo. O usuário abre, troca de aplicativo, volta e encerra.",
            highlight: "Por enquanto, guarde apenas o fluxo: não aberto → aberto/ativo → segundo plano → retorno → encerramento. Mais adiante, Hooks ajudarão a reagir a efeitos e mudanças.",
            boxes: [
              ["Não aberto", "O aplicativo ainda não está em execução."],
              ["Aberto e ativo", "O usuário está interagindo com a aplicação."],
              ["Segundo plano", "O usuário mudou de aplicativo, mas o sistema pode manter parte do estado."],
              ["Retorno", "O usuário volta ao aplicativo."],
              ["Encerramento", "O aplicativo deixa de permanecer em execução."],
              ["Por que importa?", "Timers, localização, notificações e outras operações podem depender desses momentos."]
            ]
          },
          {
            id: "mobile-snack",
            menu: "5. Snack/Expo",
            title: "5 — Ambiente do curso: Snack/Expo",
            objective: "Conhecer o ambiente principal usado para escrever e testar os exemplos do curso.",
            modulePage: true,
            kicker: "Aprender sem configurar um projeto local",
            lead: "Neste material, os primeiros módulos utilizam o snack.expo.dev para que o foco permaneça no código, no resultado e nos conceitos.",
            highlight: "Para os exemplos desta etapa, o Snack funciona diretamente no navegador e não exige a configuração de VS Code, Android Studio ou outro ambiente local. Ferramentas adicionais poderão ser apresentadas quando forem necessárias a um recurso específico.",
            snackGuide: true,
            note: "Nesta etapa, o objetivo é conhecer o ambiente Snack/Expo e aprender a criar, abrir, editar, executar e salvar um projeto React Native diretamente pelo navegador.",
            boxes: [
              ["Onde escrever", "O código dos exemplos será colocado no App.js do Snack."],
              ["Onde testar", "O próprio Snack mostra o resultado e permite experimentar o aplicativo."],
              ["Como aprender", "Conceito → pequeno exemplo → código no Snack → experimente → desafio."],
              ["Sem configuração local", "O Snack permite concentrar a atenção nos conceitos e no código antes de acrescentar outras ferramentas ao processo de desenvolvimento."],
              ["Código real", "Mesmo sendo um ambiente simplificado, os exemplos continuam sendo escritos em React Native."],
              ["Próximo passo", "Estudar os fundamentos de JavaScript necessários para ler, compreender e modificar os exemplos em React Native."]
            ]
          }
        ]
      },

      javascriptEssencial: {
        title: 'JS Essencial',
        subtitle: 'JavaScript necessário para compreender React Native.',
        steps: [
          {
            id: "js-intro",
            menu: "Intro",
            title: "JavaScript Essencial para React Native",
            objective: "Estudar os fundamentos de JavaScript necessários para compreender e construir aplicativos em React Native.",
            modulePage: true,
            kicker: "JavaScript aplicado",
            lead: "Não faremos aqui um curso completo de JavaScript. Vamos estudar os fundamentos necessários para compreender e desenvolver aplicações em React Native. Cada conceito será explicado com exemplos práticos que poderão ser testados diretamente no Snack.",
            highlight: "Ao ler os exemplos, observe três camadas: JavaScript define dados e lógica; React organiza componentes e atualização; React Native fornece os elementos e recursos da aplicação mobile.",
            boxes: [
              ["Lógica de programação", "Variáveis, condições e funções são fundamentos de programação. Nesta etapa, o foco é compreender como esses conceitos são escritos em JavaScript."],
              ["JavaScript", "Variáveis, tipos, funções, arrays, objetos, operadores e operações assíncronas."],
              ["React", "Estado, componentes, eventos e atualização da interface entram quando forem necessários."],
              ["React Native", "View, Text, TextInput, Button e outros componentes formam a interface mobile."],
              ["Ambiente", "Todos os pequenos exemplos deste módulo foram pensados para o snack.expo.dev."],
              ["Objetivo", "Ler o código com segurança e conseguir modificá-lo, não decorar toda a linguagem JavaScript."]
            ]
          },
          {
            id: "js-variaveis",
            menu: "1. Variáveis",
            title: "1 — const, let e tipos básicos",
            objective: "Compreender variáveis e tipos básicos usando um pequeno app no Snack.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const nome = 'Ana';\n  let idade = 16;\n  idade = 17; // let permite reatribuição\n  const altura = 1.65;\n  const matriculado = true;\n\n  return (\n    <View style={styles.container}>\n      <Text>Nome: {nome}</Text>\n      <Text>Idade: {idade}</Text>\n      <Text>Altura: {altura}</Text>\n      <Text>Matriculado: {matriculado ? 'Sim' : 'Não'}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "O que observar",
            added: "const cria uma variável que não será reatribuída.\nlet permite reatribuição. No exemplo, idade começa com 16 e depois recebe 17.\n\nO JavaScript identifica o tipo pelo valor:\n'Ana' → string\n16 → number\ntrue → boolean\n\nOutros valores importantes:\nnull → ausência intencional de valor\nundefined → valor ainda não definido\n\nComparação de sintaxe:\nJava: int idade = 16;\nJavaScript: let idade = 16;",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"width:100%;max-width:300px;border:1px solid #dbe3ef;border-radius:14px;padding:20px;line-height:1.8;font-family:Arial;color:#1e293b;\"><b>Nome:</b> Ana<br><b>Idade:</b> 17<br><b>Altura:</b> 1.65<br><b>Matriculado:</b> Sim</div></div>",
            note: "O foco não é decorar tipos. É perceber que o JavaScript usa uma sintaxe mais flexível que Java, mas continua trabalhando com dados e variáveis."
          },
          {
            id: "js-condicoes",
            menu: "2. if / else",
            title: "2 — Operadores e if / else",
            objective: "Compreender operadores de comparação e estruturas de decisão em JavaScript.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const media = 7;\n  let situacao = '';\n\n  if (media >= 6) {\n    situacao = 'Aprovado';\n  } else {\n    situacao = 'Reprovado';\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text>Média: {media}</Text>\n      <Text>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Trecho em foco",
            added: "if (media >= 6) {\n  situacao = 'Aprovado';\n} else {\n  situacao = 'Reprovado';\n}\n\nO operador >= compara dois valores. Outros operadores comuns são >, <, <=, === e !==.\n\nA estrutura if/else testa uma condição e escolhe qual bloco de código será executado.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"font-family:Arial;font-size:18px;line-height:1.8;\"><b>Média:</b> 7<br><b>Situação:</b> Aprovado</div></div>",
            note: "Essa mesma estrutura será aplicada no app Média Escolar do módulo React e Hooks."
          },
          {
            id: "js-funcoes",
            menu: "3. Funções",
            title: "3 — Funções e arrow functions",
            objective: "Comparar a função tradicional com a forma compacta de arrow function.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  function somar(a, b) {\n    return a + b;\n  }\n\n  const dobro = numero => numero * 2;\n\n  return (\n    <View style={styles.container}>\n      <Text>5 + 3 = {somar(5, 3)}</Text>\n      <Text>Dobro de 6 = {dobro(6)}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Duas formas",
            added: "function somar(a, b) {\n  return a + b;\n}\n\nconst dobro = numero => numero * 2;\n\nAs duas estruturas representam funções. Arrow functions aparecem com frequência em React.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"font-family:Arial;font-size:18px;line-height:1.8;\">5 + 3 = <b>8</b><br>Dobro de 6 = <b>12</b></div></div>",
            note: "Não é necessário escrever tudo com arrow function. O importante é saber reconhecer as duas formas."
          },
          {
            id: "js-arrays",
            menu: "4. Arrays",
            title: "4 — Arrays, objetos e map",
            objective: "Entender uma estrutura muito usada para representar listas de dados.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const alunos = [\n    { id: 1, nome: 'Ana', nota: 8 },\n    { id: 2, nome: 'Bruno', nota: 5 },\n    { id: 3, nome: 'Carla', nota: 9 },\n  ];\n\n  return (\n    <View style={styles.container}>\n      {alunos.map(aluno => (\n        <Text key={aluno.id}>\n          {aluno.nome} - Nota: {aluno.nota}\n        </Text>\n      ))}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Leitura do código",
            added: "alunos é um array.\nCada item do array é um objeto.\n\nmap percorre os itens e devolve algo para cada um deles.\nNeste exemplo, cada aluno vira um componente Text.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"font-family:Arial;font-size:17px;line-height:2;\">Ana - Nota: 8<br>Bruno - Nota: 5<br>Carla - Nota: 9</div></div>",
            note: "Arrays de objetos aparecem constantemente em cadastros, APIs e listas de aplicativos."
          },
          {
            id: "js-filter-find",
            menu: "5. filter / find",
            title: "5 — filter e find",
            objective: "Distinguir filtrar vários itens de localizar um item específico.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const alunos = [\n    { id: 1, nome: 'Ana', nota: 8 },\n    { id: 2, nome: 'Bruno', nota: 5 },\n    { id: 3, nome: 'Carla', nota: 9 },\n  ];\n\n  const aprovados = alunos.filter(aluno => aluno.nota >= 6);\n  const bruno = alunos.find(aluno => aluno.nome === 'Bruno');\n\n  return (\n    <View style={styles.container}>\n      <Text>Aprovados: {aprovados.length}</Text>\n      <Text>Nota de Bruno: {bruno.nota}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Diferença principal",
            added: "filter → devolve um novo array com os itens que passam na condição.\n\nfind → procura e devolve o primeiro item encontrado.\n\nmap → transforma/percorre todos os itens.\nfilter → seleciona vários.\nfind → localiza um.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"font-family:Arial;font-size:18px;line-height:1.8;\"><b>Aprovados:</b> 2<br><b>Nota de Bruno:</b> 5</div></div>",
            note: "Essas três operações serão muito úteis quando trabalharmos com listas e dados vindos de APIs."
          },
          {
            id: "js-destructuring",
            menu: "6. Objetos",
            title: "6 — Destructuring e spread",
            objective: "Reconhecer duas sintaxes comuns em código React.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const aluno = { nome: 'Ana', nota: 8, turma: '2º DS' };\n\n  const { nome, nota } = aluno;\n  const alunoAtualizado = { ...aluno, nota: 9 };\n\n  return (\n    <View style={styles.container}>\n      <Text>{nome} tinha nota {nota}.</Text>\n      <Text>Nova nota: {alunoAtualizado.nota}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Trecho em foco",
            added: "const { nome, nota } = aluno;\n→ retira propriedades do objeto e cria referências com esses nomes.\n\nconst alunoAtualizado = { ...aluno, nota: 9 };\n→ copia as propriedades e substitui apenas nota.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"font-family:Arial;font-size:18px;line-height:1.8;\">Ana tinha nota 8.<br>Nova nota: <b>9</b></div></div>",
            note: "Destructuring e spread aparecem muito em props, estados e objetos de dados. Não precisam ser decorados de uma vez."
          },
          {
            id: "js-operadores",
            menu: "7. Operadores",
            title: "7 — &&, ||, ! e operador ternário",
            objective: "Reconhecer operadores muito usados para decisões compactas na interface.",
            code: "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const nome = '';\n  const logado = true;\n  const idade = 20;\n\n  const nomeExibido = nome || 'Visitante';\n  const situacao = idade >= 18 ? 'Maior de idade' : 'Menor de idade';\n\n  return (\n    <View style={styles.container}>\n      <Text>Usuário: {nomeExibido}</Text>\n      {logado && <Text>Usuário autenticado</Text>}\n      <Text>{situacao}</Text>\n      <Text>Não está logado? {!logado ? 'Sim' : 'Não'}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Como ler",
            added: "nome || 'Visitante'\n→ usa Visitante quando nome está vazio/falso.\n\nlogado && <Text>...</Text>\n→ mostra o componente somente quando logado é verdadeiro.\n\n!logado\n→ inverte o valor lógico.\n\ncondição ? valor1 : valor2\n→ forma compacta de escolher entre dois valores.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"font-family:Arial;font-size:17px;line-height:1.9;\">Usuário: Visitante<br>Usuário autenticado<br>Maior de idade<br>Não está logado? Não</div></div>",
            note: "Essas formas aparecem muito no JSX. Use-as quando deixarem a leitura clara; if/else continua válido."
          },
          {
            id: "js-async",
            menu: "8. Assíncrono",
            title: "8 — Promise, async/await, try/catch e JSON",
            objective: "Ter um primeiro contato com operações que não terminam imediatamente.",
            code: "import React, { useState } from 'react';\nimport { View, Text, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [mensagem, setMensagem] = useState('Toque no botão');\n\n  async function carregar() {\n    try {\n      const resposta = await Promise.resolve(\n        '{\"curso\":\"React Native\",\"nivel\":\"Essencial\"}'\n      );\n\n      const dados = JSON.parse(resposta);\n      setMensagem(`${dados.curso} - ${dados.nivel}`);\n    } catch (erro) {\n      setMensagem('Erro ao carregar');\n    }\n  }\n\n  return (\n    <View style={styles.container}>\n      <Button title=\"Carregar\" onPress={carregar} />\n      <Text>{mensagem}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n    gap: 10,\n  },\n});",
            addedTitle: "Fluxo do exemplo",
            added: "1. carregar é uma função async.\n2. await aguarda a Promise.\n3. JSON.parse transforma o texto JSON em objeto.\n4. try/catch permite tratar um possível erro.\n5. useState aparece apenas para atualizar a mensagem na tela.\n\nNo módulo React e Hooks, useState será estudado no contexto do aplicativo.",
            preview: "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:24px;box-sizing:border-box;\"><div style=\"width:220px;font-family:Arial;text-align:center;\"><div style=\"background:#2563eb;color:white;border-radius:5px;padding:10px;font-weight:bold;\">CARREGAR</div><div style=\"margin-top:18px;\">React Native - Essencial</div></div></div>",
            note: "Este exemplo prepara o caminho para APIs. Depois, Promise.resolve será substituída por uma requisição real com fetch."
          },
          {
            id: "js-imports",
            menu: "9. Import/export",
            title: "9 — Módulos, import e export",
            objective: "Entender por que o código React Native começa importando recursos.",
            modulePage: true,
            kicker: "Organizando código",
            lead: "Os exemplos em React Native utilizam import para trazer recursos de bibliotecas e export para disponibilizar o componente principal do arquivo.",
            highlight: "Nesta etapa, os exemplos permanecem concentrados no App.js. O objetivo é reconhecer que import traz recursos para o arquivo e export disponibiliza um recurso para ser utilizado por outras partes da aplicação.",
            boxes: [
              ["import React", "Traz o recurso React quando o exemplo precisa dele."],
              ["import { View, Text }", "Traz componentes específicos da biblioteca react-native."],
              ["export default function App", "Disponibiliza o componente principal do arquivo App.js."],
              ["Módulos", "Arquivos e bibliotecas podem expor recursos para serem utilizados em outros pontos do projeto."],
              ["Projetos maiores", "Quando o aplicativo crescer, componentes, telas e serviços poderão ser separados em arquivos."],
              ["Nesta etapa", "Concentre-se no App.js e no entendimento dos conceitos principais."]
            ]
          },
          {
            id: 'js-exercicios',
            menu: '99. Exercícios',
            title: '99 — Exercícios JavaScript',
            objective: 'Praticar a sintaxe essencial de JavaScript em pequenos apps React Native.',
            customPage: true,
            html: "\n<div class=\"intro-kicker\">99. Exercícios — JavaScript Essencial</div>\n<h3>Pratique no snack.expo.dev</h3>\n<p class=\"intro-lead\">Crie um Snack para cada desafio. Use apenas os conceitos estudados e mantenha a interface simples.</p>\n<div class=\"intro-highlight\">A meta é modificar e escrever código, não copiar exatamente os exemplos anteriores.</div>\n<div class=\"module-page-grid\">\n  <div class=\"module-page-box\"><strong>1. Dados pessoais</strong><span>Crie const/let para nome, idade e cidade e mostre tudo com Text.</span></div>\n  <div class=\"module-page-box\"><strong>2. Situação do aluno</strong><span>Use if/else para mostrar Aprovado ou Reprovado a partir de uma média.</span></div>\n  <div class=\"module-page-box\"><strong>3. Função de cálculo</strong><span>Crie uma função que receba dois números e devolva o maior deles.</span></div>\n  <div class=\"module-page-box\"><strong>4. Lista de produtos</strong><span>Crie um array de objetos com nome e preço e use map para exibir os produtos.</span></div>\n  <div class=\"module-page-box\"><strong>5. Filtrando valores</strong><span>Use filter para mostrar apenas produtos com preço maior que um valor escolhido.</span></div>\n  <div class=\"module-page-box\"><strong>6. Objeto atualizado</strong><span>Use spread para criar uma nova versão de um objeto sem alterar o original.</span></div>\n</div>\n<div class=\"intro-highlight\" style=\"margin-top:16px;\"><b>Experimente:</b> altere valores e condições e observe imediatamente o resultado no Snack.</div>\n"
          }
        ]
      },

      interfaceBasica: {
        title: '1. Interfaces',
        subtitle: 'Da introdução ao glossário estrutural.',
        steps: [
          ...steps,
          {
            id: 'exercicios-interface',
            menu: '99. Exercícios',
            title: '99. Exercícios Interface',
            objective: 'Praticar construção de interfaces em React Native.',
            exercisePage: true,
            html: `
<div class="exercise-native exercise-clean">
  <div class="topline exercise-clean-top">
    <h2>99. Exercícios Interface</h2>
    <div class="objective"><strong>Objetivo:</strong> praticar construção de interfaces em React Native.</div>
  </div>

  <div class="panel exercise-menu-panel">
    <div class="panel-body gallery exercise-menu-gallery">
      <button class="thumb-card active" type="button" onclick="showExerciseInterface(1)">
        <div class="thumb-title">1. Tarefas</div>
        <div class="thumb-phone"><div class="thumb-bar purple">Tarefas</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-green">📋</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:32px"></div><div class="mini-btns"><div class="mini-btn btn-green"></div><div class="mini-btn btn-blue"></div><div class="mini-btn btn-red"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(2)">
        <div class="thumb-title">2. Produtos</div>
        <div class="thumb-phone"><div class="thumb-bar blue">Produtos</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-orange">📦</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line"></div><div class="mini-line"></div><div class="mini-btns"><div class="mini-btn btn-blue"></div><div class="mini-btn btn-gray"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(3)">
        <div class="thumb-title">3. Gastos</div>
        <div class="thumb-phone"><div class="thumb-bar green">Gastos</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-green">💰</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:40px"></div><div class="mini-btns"><div class="mini-btn btn-green"></div><div class="mini-btn btn-red"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(4)">
        <div class="thumb-title">4. Atendimento</div>
        <div class="thumb-phone"><div class="thumb-bar orange">Agenda</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-blue">👤</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line"></div><div class="mini-btns"><div class="mini-btn btn-orange"></div><div class="mini-btn btn-gray"></div></div></div></div>
      </button>

      <button class="thumb-card" type="button" onclick="showExerciseInterface(5)">
        <div class="thumb-title">5. Biblioteca</div>
        <div class="thumb-phone"><div class="thumb-bar dark">Biblioteca</div><div class="thumb-body"><div class="mini-row"><div class="mini-square b-purple">📚</div><div class="mini-col"><div class="mini-line"></div><div class="mini-line"></div><div class="mini-line"></div></div></div><div class="mini-line" style="height:30px"></div><div class="mini-btns"><div class="mini-btn btn-purple"></div><div class="mini-btn btn-red"></div></div></div></div>
      </button>
    </div>
  </div>

  <section id="exercise-clean-1" class="exercise-clean-section active">
    <div class="exercise-grid">
      <div class="panel brief">
        <div class="panel-title">Enunciado</div>
        <div class="panel-body">
          <h3>Minhas Tarefas</h3>
          <p>Construa a interface de um aplicativo simples para registrar tarefas de estudo.</p>
          <ul>
            <li>Barra superior roxa com título.</li>
            <li>Ícone de tarefa à esquerda.</li>
            <li>Campos: Título, Categoria, Prioridade e Data Limite.</li>
            <li>Campo maior para Descrição.</li>
            <li>Botões: Adicionar, Editar e Excluir.</li>
          </ul>
          <div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/3209/3209265.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div>
          <div class="exercise-guide-inline">
            <div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div>
            <div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div>
            <div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div>
          </div>
          <div class="tagline"><strong>Desafio:</strong> usar uma linha horizontal para colocar imagem e campos lado a lado.</div>
        </div>
      </div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar purple">Minhas Tarefas</div><div class="mock-body"><div class="row"><div class="photo-box b-green">📋</div><div class="field-group b-blue" style="flex:1"><div class="label">Título</div><div class="input small"></div><div class="label">Categoria</div><div class="input small"></div><div class="label">Prioridade</div><div class="input small"></div><div class="label">Data Limite</div><div class="input small"></div></div></div><div class="field-group b-orange"><div class="label">Descrição</div><div class="textarea"></div></div><div class="button-row b-purple"><div class="btn btn-green">Adicionar</div><div class="btn btn-blue">Editar</div><div class="btn btn-red">Excluir</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> este exercício é parecido com o app de contatos, mas troca o tema, os campos e as cores.</div>
  </section>

  <section id="exercise-clean-2" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Cadastro de Produtos</h3><p>Monte a interface de um aplicativo para cadastrar produtos de uma loja.</p><ul><li>Barra superior azul.</li><li>Ícone ou imagem de produto.</li><li>Campos: Produto, Código, Preço e Quantidade.</li><li>Área para Categoria e Fornecedor.</li><li>Botões: Novo, Salvar e Limpar.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/679/679720.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> organizar campos curtos e longos dentro do mesmo cartão.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar blue">Cadastro de Produtos</div><div class="mock-body"><div class="row"><div class="photo-box b-orange">📦</div><div class="field-group b-pink" style="flex:1"><div class="label">Produto</div><div class="input small"></div><div class="label">Código</div><div class="input small"></div><div class="label">Preço</div><div class="input small"></div><div class="label">Qtd.</div><div class="input small"></div></div></div><div class="field-group b-blue"><div class="label">Categoria</div><div class="input"></div><div class="label">Fornecedor</div><div class="input"></div></div><div class="button-row b-green"><div class="btn btn-gray">Novo</div><div class="btn btn-green">Salvar</div><div class="btn btn-red">Limpar</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> boa atividade para relacionar layout de app com banco de dados e sistemas administrativos.</div>
  </section>

  <section id="exercise-clean-3" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Controle de Gastos</h3><p>Crie a interface de um aplicativo para registrar despesas pessoais.</p><ul><li>Barra superior verde.</li><li>Ícone financeiro.</li><li>Campos: Descrição, Valor, Data e Tipo.</li><li>Área de resumo: Total previsto e Total gasto.</li><li>Botões: Registrar e Cancelar.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/3135/3135706.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> criar uma área de resumo visualmente separada dos campos.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar green">Controle de Gastos</div><div class="mock-body"><div class="row"><div class="photo-box b-green">💰</div><div class="field-group b-blue" style="flex:1"><div class="label">Descrição</div><div class="input small"></div><div class="label">Valor</div><div class="input small"></div><div class="label">Data</div><div class="input small"></div><div class="label">Tipo</div><div class="input small"></div></div></div><div class="field-group b-orange"><div class="label">Resumo</div><div class="input"></div><div class="input"></div></div><div class="button-row b-green"><div class="btn btn-green">Registrar</div><div class="btn btn-red">Cancelar</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> este layout ajuda a praticar separação entre entrada de dados e área informativa.</div>
  </section>

  <section id="exercise-clean-4" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Agendar Atendimento</h3><p>Desenvolva a interface de um aplicativo para agendar atendimentos.</p><ul><li>Barra superior laranja.</li><li>Ícone de pessoa ou atendimento.</li><li>Campos: Nome, Telefone, Data e Horário.</li><li>Campo para Observações.</li><li>Botões: Agendar, Alterar e Cancelar.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/149/149071.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> organizar campos de data e horário de maneira clara.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar orange">Agendar Atendimento</div><div class="mock-body"><div class="row"><div class="photo-box b-blue">👤</div><div class="field-group b-pink" style="flex:1"><div class="label">Nome</div><div class="input small"></div><div class="label">Telefone</div><div class="input small"></div><div class="label">Data</div><div class="input small"></div><div class="label">Horário</div><div class="input small"></div></div></div><div class="field-group b-orange"><div class="label">Observações</div><div class="textarea"></div></div><div class="button-row b-blue"><div class="btn btn-orange">Agendar</div><div class="btn btn-blue">Alterar</div><div class="btn btn-red">Cancelar</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> ideal para treinar formulários comuns em apps de serviços.</div>
  </section>

  <section id="exercise-clean-5" class="exercise-clean-section">
    <div class="exercise-grid">
      <div class="panel brief"><div class="panel-title">Enunciado</div><div class="panel-body"><h3>Controle de Biblioteca</h3><p>Construa a interface de um app para cadastrar livros e controlar empréstimos.</p><ul><li>Barra superior escura.</li><li>Ícone de livro.</li><li>Campos: Título, Autor, Código e Situação.</li><li>Área para dados do aluno que pegou o livro.</li><li>Botões: Cadastrar, Emprestar e Devolver.</li></ul><div style="margin:10px 0 12px;padding:9px 10px;border:1px solid #dbeafe;border-radius:10px;background:#f8fbff;font-size:.92rem;"><strong>🖼 Imagem (Image):</strong> <span style="color:#475569;">use este link no app.</span> <button type="button" onclick="copyImageLink('https://cdn-icons-png.flaticon.com/512/2232/2232688.png', this)" style="margin-left:8px;padding:5px 10px;border:0;border-radius:8px;background:#2563eb;color:white;cursor:pointer;font-weight:700;font-size:.82rem;">📋 Copiar link</button></div><div class="exercise-guide-inline"><div class="mini-card"><strong>1. Observe</strong><p>Analise o layout antes de programar.</p></div><div class="mini-card"><strong>2. Divida</strong><p>Identifique containers, linhas e colunas.</p></div><div class="mini-card"><strong>3. Construa</strong><p>Monte uma parte por vez no App.js.</p></div></div><div class="tagline"><strong>Desafio:</strong> usar containers para separar dados do livro e dados do empréstimo.</div></div></div>
      <div class="mockup-wrap"><div class="phone"><div class="appbar dark">Biblioteca Escolar</div><div class="mock-body"><div class="row"><div class="photo-box b-purple">📚</div><div class="field-group b-blue" style="flex:1"><div class="label">Título</div><div class="input small"></div><div class="label">Autor</div><div class="input small"></div><div class="label">Código</div><div class="input small"></div><div class="label">Situação</div><div class="input small"></div></div></div><div class="field-group b-green"><div class="label">Aluno / Turma</div><div class="input"></div><div class="input"></div></div><div class="button-row b-purple"><div class="btn btn-purple">Cadastrar</div><div class="btn btn-blue">Emprestar</div><div class="btn btn-green">Devolver</div></div></div></div></div>
    </div>
    <div class="obs"><strong>Observação:</strong> ótimo exercício para discutir depois estados, botões e regras simples de sistema.</div>
  </section>
</div>
`
          }
        ]
      },

      flexboxVisual: {
        "title": "2. Flexbox",
        "subtitle": "Layout mobile aprendido por problemas reais.",
        "steps": [
                {
                        "id": "flex-intro",
                        "menu": "Intro",
                        "title": "Flexbox Visual",
                        "objective": "Entender Flexbox como ferramenta para resolver problemas reais de layout.",
                        "modulePage": true,
                        "kicker": "Laboratório visual",
                        "lead": "Flexbox é a base da organização visual no React Native. Neste módulo, você vai comparar o código Antes e o Resultado Antes com o código Depois e o Resultado Depois, entendendo como pequenas mudanças nos estilos reorganizam a tela de forma prática, clara e profissional.",
                        "boxes": [
                                [
                                        "Ideia central",
                                        "Quero fazer X no layout → escolho os conceitos de Flexbox adequados."
                                ],
                                [
                                        "Como estudar",
                                        "Compare o Antes e o Depois. Depois leia o JSX e procure os mesmos nomes no StyleSheet.create."
                                ],
                                [
                                        "O que observar",
                                        "View, Text e estilos com nomes claros: styles.tela, styles.card, styles.titulo, styles.botao."
                                ],
                                [
                                        "Regra do módulo",
                                        "Não decorar propriedades soltas. Entender como elas resolvem problemas visuais."
                                ],
                                [
                                        "Resultado visual",
                                        "As janelinhas mostram somente Antes e Depois, sem rótulos internos para não confundir."
                                ],
                                [
                                        "Aplicação real",
                                        "Menus, cards, listas, dashboards, barras inferiores, chat e tela completa."
                                ]
                        ]
                },
                {
                        "id": "flex-1",
                        "menu": "1. Centralizar",
                        "title": "1 — Centralizar um item na tela",
                        "objective": "Quero colocar um aviso exatamente no centro da tela.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.caixaAviso}>
        <Text style={styles.textoAviso}>Aviso</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
  },

  caixaAviso: {
    width: 160,
    height: 90,
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoAviso: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#92400E',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.caixaAviso}>
        <Text style={styles.textoAviso}>Aviso</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#EFF6FF',
  },

  caixaAviso: {
    width: 160,
    height: 90,
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
  },

  textoAviso: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#92400E',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero colocar um aviso exatamente no centro da tela.<br><br><strong>Conceitos usados:</strong> flex: 1, justifyContent: 'center', alignItems: 'center'<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-box fx-orange left-text" style="width:160px;height:90px;">Aviso</div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-center"><div class="fx-box fx-orange" style="width:160px;height:90px;display:flex;align-items:center;justify-content:center;">Aviso</div></div></div>
  </div>
</div>`,
                                        "note": "Centralizar é muito usado em telas de login, carregamento, avisos e mensagens vazias."
                                }
                        ]
                },
                {
                        "id": "flex-2",
                        "menu": "2. Lado a lado",
                        "title": "2 — Colocar imagem e dados lado a lado",
                        "objective": "Quero montar um card de produto com imagem à esquerda e informações à direita.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.cardProduto}>
      <View style={styles.caixaImagem}>
        <Text style={styles.iconeProduto}>📦</Text>
      </View>

      <View style={styles.areaTexto}>
        <Text style={styles.nomeProduto}>Teclado Bluetooth</Text>
        <Text style={styles.precoProduto}>R$ 149,90</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#BFDBFE',
    borderRadius: 12,
  },

  caixaImagem: {
    width: 72,
    height: 72,
    borderRadius: 10,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconeProduto: {
    fontSize: 34,
  },

  areaTexto: {
    flex: 1,
  },

  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#172033',
  },

  precoProduto: {
    marginTop: 6,
    fontSize: 14,
    color: '#166534',
    fontWeight: 'bold',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.cardProduto}>
      <View style={styles.caixaImagem}>
        <Text style={styles.iconeProduto}>📦</Text>
      </View>

      <View style={styles.areaTexto}>
        <Text style={styles.nomeProduto}>Teclado Bluetooth</Text>
        <Text style={styles.precoProduto}>R$ 149,90</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProduto: {
    gap: 12,
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#BFDBFE',
    borderRadius: 12,
  },

  caixaImagem: {
    width: 72,
    height: 72,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#60A5FA',
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconeProduto: {
    fontSize: 34,
  },

  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#172033',
  },

  precoProduto: {
    marginTop: 6,
    fontSize: 14,
    color: '#166534',
    fontWeight: 'bold',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero montar um card de produto com imagem à esquerda e informações à direita.<br><br><strong>Conceitos usados:</strong> flexDirection: 'row', alignItems: 'center', gap, flex: 1<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-thumb" style="width:72px;height:72px;font-size:34px;">📦</div><div class="fx-prod-title">Teclado Bluetooth</div><div class="fx-prod-price">R$ 149,90</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-row centered"><div class="fx-thumb" style="width:72px;height:72px;font-size:34px;">📦</div><div class="fx-textblock grow"><div class="fx-prod-title">Teclado Bluetooth</div><div class="fx-prod-price">R$ 149,90</div></div></div></div>
  </div>
</div>`,
                                        "note": "Esse padrão aparece em lojas, notícias, contatos, mensagens e listas de pedidos."
                                }
                        ]
                },
                {
                        "id": "flex-3",
                        "menu": "3. Coluna",
                        "title": "3 — Empilhar elementos em coluna",
                        "objective": "Quero criar um formulário com rótulos e campos um abaixo do outro.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.formulario}>
      <Text style={styles.rotulo}>Nome</Text>
      <View style={styles.campo} />

      <Text style={styles.rotulo}>E-mail</Text>
      <View style={styles.campo} />

      <Text style={styles.rotulo}>Senha</Text>
      <View style={styles.campo} />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },

  rotulo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#172033',
  },

  campo: {
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#94A3B8',
    backgroundColor: '#F8FAFC',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.formulario}>
      <Text style={styles.rotulo}>Nome</Text>
      <View style={styles.campo} />

      <Text style={styles.rotulo}>E-mail</Text>
      <View style={styles.campo} />

      <Text style={styles.rotulo}>Senha</Text>
      <View style={styles.campo} />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#BFDBFE'
  },

  rotulo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#172033'
  },

  campo: {
    width: 104,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#94A3B8',
    backgroundColor: '#F8FAFC'
  }
});`,
                                        "explain": "<strong>Problema real:</strong> Quero criar um formulário com rótulos e campos um abaixo do outro.<br><br><strong>Conceitos usados:</strong> flexDirection: 'column' e gap<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-form-row"><span class="fx-label-text">Nome</span><div class="fx-mini-field"></div><span class="fx-label-text">E-mail</span><div class="fx-mini-field"></div><span class="fx-label-text">Senha</span><div class="fx-mini-field"></div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-stack"><span class="fx-label-text">Nome</span><div class="fx-input-real"></div><span class="fx-label-text">E-mail</span><div class="fx-input-real"></div><span class="fx-label-text">Senha</span><div class="fx-input-real"></div></div></div>
  </div>
</div>`,
                                        "note": "Coluna é o padrão natural de formulários, configurações e telas de cadastro."
                                }
                        ]
                },
                {
                        "id": "flex-4",
                        "menu": "4. Barra botões",
                        "title": "4 — Criar barra de botões",
                        "objective": "Quero colocar botões de ação na mesma linha.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.barraAcoes}>
      <Text style={styles.botaoSalvar}>Salvar</Text>
      <Text style={styles.botaoCancelar}>Cancelar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barraAcoes: {
    flexDirection: 'row',
    gap: 10,
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
  },

  botaoSalvar: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#16A34A',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  botaoCancelar: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#DC2626',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero colocar botões de ação na mesma linha.<br><br><strong>Conceitos usados:</strong> flexDirection: 'row' e gap<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-button green">Salvar</div><div class="fx-button red">Cancelar</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-row"><div class="fx-button green">Salvar</div><div class="fx-button red">Cancelar</div></div></div>
  </div>
</div>`,
                                        "note": "Barras de botões aparecem em formulários, confirmações e telas administrativas."
                                }
                        ]
                },
                {
                        "id": "flex-5",
                        "menu": "5. Igualar",
                        "title": "5 — Distribuir botões igualmente",
                        "objective": "Quero que todos os botões tenham o mesmo tamanho visual.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.barraBotoes}>
      <Text style={styles.botao}>Sim</Text>
      <Text style={styles.botao}>Não</Text>
      <Text style={styles.botao}>Talvez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barraBotoes: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
  },

  botao: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#DBEAFE',
    color: '#0F3F86',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.barraBotoes}>
      <Text style={styles.botao}>Sim</Text>
      <Text style={styles.botao}>Não</Text>
      <Text style={styles.botao}>Talvez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barraBotoes: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    alignItems: 'flex-start'
  },

  botao: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#475569',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});`,
                                        "explain": "<strong>Problema real:</strong> Quero que todos os botões tenham o mesmo tamanho visual.<br><br><strong>Conceitos usados:</strong> flex: 1 nos itens dentro de uma linha<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-row"><div class="fx-button small">Sim</div><div class="fx-button">Não</div><div class="fx-button large">Talvez</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-row"><div class="fx-button equal dark">Sim</div><div class="fx-button equal dark">Não</div><div class="fx-button equal dark">Talvez</div></div></div>
  </div>
</div>`,
                                        "note": "O flex: 1 faz os itens dividirem o espaço disponível."
                                }
                        ]
                },
                {
                        "id": "flex-6",
                        "menu": "6. Menu superior",
                        "title": "6 — Criar menu superior",
                        "objective": "Quero montar um topo com ícone, título central e ação à direita.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.topoApp}>
      <Text style={styles.iconeMenu}>☰</Text>
      <Text style={styles.tituloTopo}>Pedidos</Text>
      <Text style={styles.iconeBusca}>🔍</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topoApp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    padding: 14,
    backgroundColor: '#1967D2',
  },

  iconeMenu: {
    width: 36,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  tituloTopo: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  iconeBusca: {
    width: 36,
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'right',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.topoApp}>
      <Text style={styles.iconeMenu}>☰</Text>
      <Text style={styles.tituloTopo}>Pedidos</Text>
      <Text style={styles.iconeBusca}>🔍</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topoApp: {
    gap: 8,
    padding: 14,
  },

  iconeMenu: {
    borderWidth: 2,
    borderColor: '#60A5FA',
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: '#DBEAFE',
    color: '#0F3F86',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  tituloTopo: {
    borderWidth: 2,
    borderColor: '#60A5FA',
    borderRadius: 8,
    paddingVertical: 10,
    backgroundColor: '#BFDBFE',
    color: '#0F3F86',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  iconeBusca: {
    borderWidth: 2,
    borderColor: '#60A5FA',
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: '#DBEAFE',
    color: '#0F3F86',
    textAlign: 'center',
    fontSize: 16,
  }
});`,
                                        "explain": "<strong>Problema real:</strong> Quero montar um topo com ícone, título central e ação à direita.<br><br><strong>Conceitos usados:</strong> row, alignItems: 'center', justifyContent: 'space-between', flex: 1<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-box fx-soft">☰</div><div class="fx-box fx-soft-strong">Pedidos</div><div class="fx-box fx-soft">🔍</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-header"><div>☰</div><div class="fx-title-grow">Pedidos</div><div>🔍</div></div></div>
  </div>
</div>`,
                                        "note": "Menu superior é um dos padrões mais reconhecíveis de aplicativos."
                                }
                        ]
                },
                {
                        "id": "flex-7",
                        "menu": "7. Centro eixo",
                        "title": "7 — Alinhar itens no centro",
                        "objective": "Quero que ícone e texto fiquem alinhados no mesmo eixo visual.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.itemMenu}>

      <View style={styles.caixaIcone}>
        <Text style={styles.iconeItem}>⭐</Text>
      </View>

      <View style={styles.caixaTexto}>
        <Text style={styles.textoItem}>Favoritos</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },

  caixaIcone: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaTexto: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#93C5FD',
    backgroundColor: '#DBEAFE',
  },

  iconeItem: {
    fontSize: 34,
  },

  textoItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#172033',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.itemMenu}>

      <View style={styles.caixaIcone}>
        <Text style={styles.iconeItem}>⭐</Text>
      </View>

      <View style={styles.caixaTexto}>
        <Text style={styles.textoItem}>Favoritos</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },

  caixaIcone: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaTexto: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#93C5FD',
    backgroundColor: '#DBEAFE',
  },

  iconeItem: {
    fontSize: 34,
  },

  textoItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#172033',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero que ícone e texto fiquem alinhados no mesmo eixo visual.<br><br><strong>Conceitos usados:</strong> alignItems: 'center'<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-row"><div class="fx-big-icon">⭐</div><div class="fx-box dropped fx-soft">Favoritos</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-row centered"><div class="fx-big-icon">⭐</div><div class="fx-box fx-soft">Favoritos</div></div></div>
  </div>
</div>`,
                                        "note": "Esse ajuste tira a aparência torta de listas, cards, menus e botões com ícone."
                                }
                        ]
                },
                {
                        "id": "flex-8",
                        "menu": "8. Espaço restante",
                        "title": "8 — Fazer uma área ocupar o espaço restante",
                        "objective": "Quero que o conteúdo cresça entre o topo e o rodapé.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.telaApp}>
      <Text style={styles.topo}>Topo</Text>
      <Text style={styles.conteudo}>Conteúdo</Text>
      <Text style={styles.rodape}>Rodapé</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  telaApp: {
    flex: 1,
    padding: 12,
    gap: 8,
    backgroundColor: '#EFF6FF',
  },

  topo: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#60A5FA',
    backgroundColor: '#DBEAFE',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0F3F86',
  },

  conteudo: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F472B6',
    backgroundColor: '#FDF2F8',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#9D174D',
  },

  rodape: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#22C55E',
    backgroundColor: '#DCFCE7',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#166534',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.telaApp}>
      <Text style={styles.topo}>Topo</Text>
      <Text style={styles.conteudo}>Conteúdo</Text>
      <Text style={styles.rodape}>Rodapé</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  telaApp: {
    padding: 12,
    gap: 8,
    backgroundColor: '#EFF6FF',
  },

  topo: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#60A5FA',
    backgroundColor: '#DBEAFE',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0F3F86',
  },

  conteudo: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F472B6',
    backgroundColor: '#FDF2F8',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#9D174D',
  },

  rodape: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#22C55E',
    backgroundColor: '#DCFCE7',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#166534',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero que o conteúdo cresça entre o topo e o rodapé.<br><br><strong>Conceitos usados:</strong> flex: 1 na área principal<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-box blue">Topo</div><div class="fx-box pink">Conteúdo</div><div class="fx-box green">Rodapé</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-layout-vertical"><div class="fx-box blue">Topo</div><div class="fx-box pink fx-grow-area">Conteúdo</div><div class="fx-box green">Rodapé</div></div></div>
  </div>
</div>`,
                                        "note": "Esse conceito é essencial para telas completas, com conteúdo flexível."
                                }
                        ]
                },
                {
                        "id": "flex-9",
                        "menu": "9. Cards linha",
                        "title": "9 — Criar cards em linha",
                        "objective": "Quero mostrar pequenos cards lado a lado.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.linhaCards}>
      <View style={styles.card}>
        <Text style={styles.textoCard}>Aulas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Notas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Faltas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linhaCards: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
  },

  card: {
    width: 86,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#93C5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCard: {
    fontWeight: 'bold',
    color: '#0F3F86',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.linhaCards}>
      <View style={styles.card}>
        <Text style={styles.textoCard}>Aulas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Notas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Faltas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linhaCards: {
    gap: 8,
    padding: 12,
  },

  card: {
    width: 86,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#93C5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCard: {
    fontWeight: 'bold',
    color: '#0F3F86',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero mostrar pequenos cards lado a lado.<br><br><strong>Conceitos usados:</strong> flexDirection: 'row' e gap<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-card-mini">Aulas</div><div class="fx-card-mini">Notas</div><div class="fx-card-mini">Faltas</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-row"><div class="fx-card-mini">Aulas</div><div class="fx-card-mini">Notas</div><div class="fx-card-mini">Faltas</div></div></div>
  </div>
</div>`,
                                        "note": "Cards em linha aparecem em painéis, atalhos, categorias e resumos."
                                }
                        ]
                },
                {
                        "id": "flex-10",
                        "menu": "10. Quebrar linha",
                        "title": "10 — Quebrar itens para a próxima linha",
                        "objective": "Quero criar tags que não estourem a largura da tela.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.areaTags}>
      <Text style={styles.tag}>IA</Text>
      <Text style={styles.tag}>Mobile</Text>
      <Text style={styles.tag}>SQL</Text>
      <Text style={styles.tag}>Arduino</Text>
      <Text style={styles.tag}>UX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    padding: 12,
    width: 210,
  },

  tag: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#93C5FD',
    backgroundColor: '#DBEAFE',
    color: '#172033',
    fontWeight: 'bold',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.areaTags}>
      <Text style={styles.tag}>IA</Text>
      <Text style={styles.tag}>Mobile</Text>
      <Text style={styles.tag}>SQL</Text>
      <Text style={styles.tag}>Arduino</Text>
      <Text style={styles.tag}>UX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaTags: {
    gap: 8,
    padding: 12,
  },

  tag: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#93C5FD',
    backgroundColor: '#DBEAFE',
    color: '#172033',
    fontWeight: 'bold',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero criar tags que não estourem a largura da tela.<br><br><strong>Conceitos usados:</strong> flexDirection: 'row' e flexWrap: 'wrap'<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack" style="align-items:flex-start;"><div class="fx-chip tight">IA</div><div class="fx-chip tight">Mobile</div><div class="fx-chip tight">SQL</div><div class="fx-chip tight">Arduino</div><div class="fx-chip tight">UX</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-wrap narrow"><div class="fx-chip tight">IA</div><div class="fx-chip tight">Mobile</div><div class="fx-chip tight">SQL</div><div class="fx-chip tight">Arduino</div><div class="fx-chip tight">UX</div></div></div>
  </div>
</div>`,
                                        "note": "Wrap é muito usado em categorias, filtros, habilidades e interesses."
                                }
                        ]
                },
                {
                        "id": "flex-11",
                        "menu": "11. Barra inferior",
                        "title": "11 — Barra inferior de navegação",
                        "objective": "Quero criar abas distribuídas no rodapé visual do app.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <Text style={styles.conteudo}>Conteúdo</Text>

      <View style={styles.barraInferior}>
        <Text style={styles.aba}>Início</Text>
        <Text style={styles.aba}>Buscar</Text>
        <Text style={styles.aba}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 12,
    backgroundColor: '#EFF6FF',
  },

  conteudo: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F472B6',
    backgroundColor: '#FDF2F8',
    color: '#9D174D',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },

  barraInferior: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },

  aba: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#16A34A',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <Text style={styles.conteudo}>Conteúdo</Text>

      <View style={styles.barraInferior}>
        <Text style={styles.aba}>Início</Text>
        <Text style={styles.aba}>Buscar</Text>
        <Text style={styles.aba}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    padding: 12,
    backgroundColor: '#EFF6FF'
  },

  conteudo: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F472B6',
    backgroundColor: '#FDF2F8',
    color: '#9D174D',
    textAlign: 'center',
    padding: 16,
    fontWeight: 'bold'
  },

  barraInferior: {
    gap: 8,
    marginTop: 10
  },

  aba: {
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#22C55E',
    backgroundColor: '#DCFCE7',
    color: '#166534',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});`,
                                        "explain": "<strong>Problema real:</strong> Quero criar abas distribuídas no rodapé visual do app.<br><br><strong>Conceitos usados:</strong> flex: 1 no conteúdo, row na barra, flex: 1 nas abas<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-before-full"><div class="fx-content-card">Conteúdo</div><div class="fx-before-tabs"><div class="fx-home-card">Início</div><div class="fx-home-card">Buscar</div><div class="fx-home-card">Perfil</div></div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-layout-vertical"><div class="fx-content-card fx-grow-area">Conteúdo</div><div class="fx-row"><div class="fx-button equal green">Início</div><div class="fx-button equal green">Buscar</div><div class="fx-button equal green">Perfil</div></div></div></div>
  </div>
</div>`,
                                        "note": "Barra inferior conecta o aluno com padrões de apps reais."
                                }
                        ]
                },
                {
                        "id": "flex-12",
                        "menu": "12. Dashboard",
                        "title": "12 — Dashboard com cards",
                        "objective": "Quero montar um painel com indicadores em blocos.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.dashboard}>
      <View style={styles.card}>
        <Text style={styles.textoCard}>Vendas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Pedidos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Clientes</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Atrasos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 12,
  },

  card: {
    width: '47%',
    height: 72,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#93C5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCard: {
    fontWeight: 'bold',
    color: '#0F3F86',
  }
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.dashboard}>
      <View style={styles.card}>
        <Text style={styles.textoCard}>Vendas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Pedidos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Clientes</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Atrasos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    gap: 10,
    padding: 12
  },

  card: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#93C5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCard: {
    fontWeight: 'bold',
    color: '#0F3F86'
  }
});`,
                                        "explain": "<strong>Problema real:</strong> Quero montar um painel com indicadores em blocos.<br><br><strong>Conceitos usados:</strong> row, flexWrap, gap e largura percentual<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-card-mini">Vendas</div><div class="fx-card-mini">Pedidos</div><div class="fx-card-mini">Clientes</div><div class="fx-card-mini">Atrasos</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-dashboard"><div>Vendas</div><div>Pedidos</div><div>Clientes</div><div>Atrasos</div></div></div>
  </div>
</div>`,
                                        "note": "Dashboard mostra como Flexbox ajuda em painéis administrativos e escolares."
                                }
                        ]
                },
                {
                        "id": "flex-13",
                        "menu": "13. Lista",
                        "title": "13 — Lista com imagem e texto",
                        "objective": "Quero montar um item de lista com imagem, descrição e valor.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.itemLista}>
      <Text style={styles.imagemItem}>🍔</Text>

      <View style={styles.textosItem}>
        <Text style={styles.tituloItem}>Combo lanche</Text>
        <Text style={styles.descricaoItem}>Entrega em 30 minutos</Text>
      </View>

      <Text style={styles.precoItem}>R$ 28</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemLista: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },

  imagemItem: {
    width: 54,
    height: 54,
    borderRadius: 10,
    backgroundColor: '#FEF3C7',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
  },

  textosItem: {
    flex: 1,
  },

  tituloItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#172033',
  },

  descricaoItem: {
    marginTop: 4,
    fontSize: 12,
    color: '#64748B',
  },

  precoItem: {
    fontWeight: 'bold',
    color: '#166534',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero montar um item de lista com imagem, descrição e valor.<br><br><strong>Conceitos usados:</strong> row, alignItems: 'center', gap e flex: 1<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-thumb" style="background:#fef3c7;border-color:#f59e0b;">🍔</div><div class="fx-list-title">Combo lanche</div><div class="fx-list-desc">Entrega em 30 minutos</div><div class="fx-prod-price">R$ 28</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-row centered"><div class="fx-thumb" style="background:#fef3c7;border-color:#f59e0b;">🍔</div><div class="fx-textblock grow"><div class="fx-list-title">Combo lanche</div><div class="fx-list-desc">Entrega em 30 minutos</div></div><div class="fx-price">R$ 28</div></div></div>
  </div>
</div>`,
                                        "note": "Esse padrão aparece em delivery, e-commerce, contatos, notícias e playlists."
                                }
                        ]
                },
                {
                        "id": "flex-14",
                        "menu": "14. Chat",
                        "title": "14 — Layout estilo chat/mensagens",
                        "objective": "Quero diferenciar mensagem recebida e enviada.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.chat}>
      <Text style={styles.mensagemRecebida}>Oi, professor!</Text>
      <Text style={styles.mensagemEnviada}>Olá! Vamos estudar Flexbox.</Text>
      <Text style={styles.mensagemRecebida}>Agora entendi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    gap: 8,
    padding: 14,
    backgroundColor: '#F8FAFC',
  },

  mensagemRecebida: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    color: '#172033',
    fontWeight: 'bold',
  },

  mensagemEnviada: {
    alignSelf: 'flex-end',
    maxWidth: '75%',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    color: '#0F3F86',
    fontWeight: 'bold',
  },
});`,
                                        "explain": "<strong>Problema real:</strong> Quero diferenciar mensagem recebida e enviada.<br><br><strong>Conceitos usados:</strong> alignSelf: 'flex-start' e alignSelf: 'flex-end'<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-stack"><div class="fx-msg same">Oi, professor!</div><div class="fx-msg same" style="background:#dbeafe;color:#0f3f86;">Olá! Vamos estudar Flexbox.</div><div class="fx-msg same">Agora entendi.</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-chat"><div class="fx-msg left">Oi, professor!</div><div class="fx-msg right long">Olá! Vamos estudar Flexbox.</div><div class="fx-msg left">Agora entendi.</div></div></div>
  </div>
</div>`,
                                        "note": "Chat mostra que Flexbox também resolve alinhamento individual dos elementos."
                                }
                        ]
                },
                {
                        "id": "flex-15",
                        "menu": "15. Tela completa",
                        "title": "15 — Tela completa responsiva",
                        "objective": "Quero juntar topo, corpo flexível, menu e rodapé em uma tela de app.",
                        "flexLab": true,
                        "choices": [
                                {
                                        "label": "Código da solução",
                                        "code": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <Text style={styles.iconeTopo}>☰</Text>
        <Text style={styles.tituloTopo}>Painel</Text>
      </View>

      <View style={styles.corpo}>
        <View style={styles.menuLateral}>
          <Text style={styles.textoMenu}>Menu</Text>
        </View>

        <View style={styles.areaConteudo}>
          <Text style={styles.textoConteudo}>Conteúdo</Text>
        </View>
      </View>

      <View style={styles.rodape}>
        <View style={styles.aba}>
          <Text style={styles.textoAba}>Home</Text>
        </View>

        <View style={styles.aba}>
          <Text style={styles.textoAba}>Perfil</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    gap: 8,
    padding: 12,
    backgroundColor: '#EFF6FF',
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#60A5FA',
    backgroundColor: '#DBEAFE',
  },

  iconeTopo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F3F86',
  },

  tituloTopo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F3F86',
  },

  corpo: {
    flex: 0.20,
    flexDirection: 'row',
    gap: 8,
  },

  menuLateral: {
    width: 82,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F59E0B',
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoMenu: {
    fontWeight: 'bold',
    color: '#92400E',
  },

  areaConteudo: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F472B6',
    backgroundColor: '#FDF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoConteudo: {
    fontWeight: 'bold',
    color: '#9D174D',
  },

  rodape: {
    flexDirection: 'row',
    gap: 8,
  },

  aba: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#22C55E',
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoAba: {
    fontWeight: 'bold',
    color: '#166534',
  },
});`,
                                        "beforeCode": `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <Text style={styles.iconeTopo}>☰</Text>
        <Text style={styles.tituloTopo}>Painel</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.menuLateral}>Menu</Text>
        <Text style={styles.areaConteudo}>Conteúdo</Text>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.aba}>Home</Text>
        <Text style={styles.aba}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    gap: 8,
    padding: 12,
    backgroundColor: '#EFF6FF'
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#60A5FA',
    backgroundColor: '#DBEAFE'
  },

  iconeTopo: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  tituloTopo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F3F86'
  },

  corpo: {
    gap: 8
  },

  menuLateral: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F59E0B',
    backgroundColor: '#FFF7ED',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#92400E'
  },

  areaConteudo: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F472B6',
    backgroundColor: '#FDF2F8',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#9D174D'
  },

  rodape: {
    gap: 8
  },

  aba: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#22C55E',
    backgroundColor: '#DCFCE7',
    color: '#166534',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});`,
                                        "explain": "<strong>Problema real:</strong> Quero juntar topo, corpo flexível, menu e rodapé em uma tela de app.<br><br><strong>Conceitos usados:</strong> combinação de row, column, flex: 1, gap e alinhamento<br><br><strong>Leitura didática:</strong> compare o Antes e o Depois e observe quais estilos do código mudaram o comportamento visual.",
                                        "preview": `<div class="fx-compare">
  <div class="fx-window">
    <div class="fx-head">Antes</div>
    <div class="fx-body"><div class="fx-before-full"><div class="fx-topo-panel"><span>☰</span><span>Painel</span></div><div class="fx-menu-card">Menu</div><div class="fx-content-card">Conteúdo</div><div class="fx-home-card">Home</div><div class="fx-home-card">Perfil</div></div></div>
  </div>
  <div class="fx-window">
    <div class="fx-head">Depois</div>
    <div class="fx-body"><div class="fx-full"><div class="fx-header light" style="border:2px solid #60a5fa;"><div>☰</div><div class="fx-title-grow">Painel</div></div><div class="fx-full-body"><div class="fx-side">Menu</div><div class="fx-main">Conteúdo</div></div><div class="fx-row"><div class="fx-home-card" style="flex:1;">Home</div><div class="fx-home-card" style="flex:1;">Perfil</div></div></div></div>
  </div>
</div>`,
                                        "note": "A última etapa mostra a composição de vários conceitos em uma única tela."
                                }
                        ]
                },
                {
                        "id": "flex-exercicios",
                        "menu": "99. Exercícios Flexbox",
                        "title": "99 — Exercícios Flexbox",
                        "objective": "Praticar padrões reais de layout mobile.",
                        "exercisePage": true,
                        "html": `<div class="exercise-clean fx-enunciados-page">
  <style>
    .fx-enunciados-page{display:block;max-width:1280px;margin:0 auto;padding:8px 10px 24px;}
    .fx-ex-hero{background:#ffffff;border:1px solid #d6e0ee;border-radius:14px;padding:18px 20px;margin-bottom:14px;box-shadow:0 6px 18px rgba(15,23,42,.06);}
    .fx-ex-hero .badge{display:inline-flex;background:#eaf2ff;border:1px solid #bfdbfe;color:#0f3f86;border-radius:999px;padding:6px 11px;font-size:12px;font-weight:900;margin-bottom:10px;}
    .fx-ex-hero h2{color:#0f4a9c;font-size:26px;margin:0 0 8px;font-weight:900;}
    .fx-ex-hero p{font-size:14px;line-height:1.55;color:#334155;max-width:980px;margin:0 0 8px;}
    .fx-ex-rule{background:#fff7d6;border-left:5px solid #f59e0b;border-radius:10px;padding:11px 13px;margin-top:12px;font-size:13px;line-height:1.45;color:#334155;}
    .fx-ex-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;}
    .fx-ex-card{display:grid;grid-template-columns:48px 1fr;gap:12px;background:#ffffff;border:1px solid #d7e2f0;border-radius:14px;padding:14px;box-shadow:0 6px 18px rgba(24,43,77,.07);min-height:178px;}
    .fx-ex-number{width:42px;height:42px;border-radius:12px;background:#1967d2;color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:15px;box-shadow:0 4px 10px rgba(25,103,210,.24);}
    .fx-ex-content h3{font-size:16px;color:#0f4a9c;margin:0 0 8px;font-weight:900;line-height:1.2;}
    .fx-ex-content p{font-size:13px;line-height:1.45;color:#243047;margin:0 0 8px;}
    .fx-ex-concept{background:#edf5ff;border:1px solid #dbeafe;border-radius:9px;padding:7px 8px;color:#0f3f86!important;}
    .fx-ex-skills{background:#f8fbff;border:1px solid #dbe3ef;border-radius:9px;padding:8px;font-size:12.5px;line-height:1.4;color:#334155;}
    .fx-ex-footer{margin-top:14px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:12px 14px;color:#1e293b;font-size:13px;line-height:1.45;}
    @media(max-width:1100px){.fx-ex-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
    @media(max-width:720px){.fx-enunciados-page{padding:6px 4px 18px;}.fx-ex-grid{grid-template-columns:1fr;}.fx-ex-card{grid-template-columns:42px 1fr;min-height:auto;}.fx-ex-hero h2{font-size:22px;}}
  </style>

  <section class="fx-ex-grid">
<article class="fx-ex-card">
      <div class="fx-ex-number">01</div>
      <div class="fx-ex-content">
        <h3>Bilhete digital centralizado</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Centralização completa</p>
        <p>Monte uma tela de confirmação com um ícone de bilhete no centro, o texto “Entrada liberada” logo abaixo e uma frase curta de apoio. O conjunto deve ficar centralizado na horizontal e na vertical.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> justifyContent, alignItems, flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">02</div>
      <div class="fx-ex-content">
        <h3>Painel de clima rápido</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Elementos lado a lado</p>
        <p>Crie um card de clima com um ícone de sol à esquerda e, à direita, a cidade, a temperatura e uma descrição curta. A mudança principal deve ser organizar ícone e informações na mesma linha.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flexDirection: row, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">03</div>
      <div class="fx-ex-content">
        <h3>Formulário de endereço</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Organização em coluna</p>
        <p>Monte um pequeno formulário com Rua, Número, Bairro e Cidade. Cada rótulo deve aparecer acima do respectivo campo, formando uma leitura vertical clara.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flexDirection: column, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">04</div>
      <div class="fx-ex-content">
        <h3>Ações de aula</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Centralizar comandos</p>
        <p>Crie uma linha com três botões: Presença, Material e Avisos. Os botões devem ficar agrupados e centralizados dentro da área de ações.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> justifyContent: center</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">05</div>
      <div class="fx-ex-content">
        <h3>Votação de reunião</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Distribuir igualmente</p>
        <p>Monte três opções de votação: Aprovar, Revisar e Rejeitar. Todas devem ocupar a mesma largura visual, mesmo com textos diferentes.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">06</div>
      <div class="fx-ex-content">
        <h3>Topo de cinema</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Menu superior</p>
        <p>Crie um cabeçalho com ícone de menu à esquerda, título “Sessões” centralizado e ícone de busca à direita. O título deve ocupar o espaço principal.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, flex: 1, alignItems</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">07</div>
      <div class="fx-ex-content">
        <h3>Status da bateria</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Centro no eixo cruzado</p>
        <p>Monte uma linha com um ícone grande de bateria e um texto curto. O texto deve ficar alinhado verticalmente ao centro do ícone.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> alignItems: center</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">08</div>
      <div class="fx-ex-content">
        <h3>Página de artigo</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Área principal flexível</p>
        <p>Crie uma tela com título no topo, texto principal ocupando o espaço central e botão de continuar no rodapé. A área de leitura deve crescer.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">09</div>
      <div class="fx-ex-content">
        <h3>Categorias de loja</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Cards em linha</p>
        <p>Monte quatro categorias pequenas de uma loja: Livros, Jogos, Casa e Escola. Elas devem aparecer lado a lado no topo, com espaçamento uniforme.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flexDirection: row, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">10</div>
      <div class="fx-ex-content">
        <h3>Idiomas disponíveis</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Quebra de linha</p>
        <p>Crie chips compactos com Português, Inglês, Espanhol, Francês, Italiano e Libras. Quando faltar espaço, eles devem quebrar para a próxima linha.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flexWrap: wrap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">11</div>
      <div class="fx-ex-content">
        <h3>Controle de áudio</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Barra inferior</p>
        <p>Monte uma tela simples com uma área vazia de conteúdo e uma barra inferior com Voltar, Pausar e Avançar lado a lado.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flex: 1, row, flex: 1 nos botões</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">12</div>
      <div class="fx-ex-content">
        <h3>Resumo de leitura</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Dashboard em grade</p>
        <p>Crie quatro cards de métricas: Páginas, Tempo, Meta e Dias. Eles devem formar uma grade de duas colunas.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, wrap, largura percentual</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">13</div>
      <div class="fx-ex-content">
        <h3>Item de coleta</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Item de lista</p>
        <p>Monte um item de coleta seletiva com ícone à esquerda, nome e descrição no centro, e horário à direita.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, alignItems, flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">14</div>
      <div class="fx-ex-content">
        <h3>Conversa de suporte</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Mensagens alinhadas</p>
        <p>Crie três balões de conversa: dois recebidos à esquerda e um enviado à direita. As mensagens devem ter largura controlada.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> alignSelf, maxWidth</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">15</div>
      <div class="fx-ex-content">
        <h3>Tela de viagem</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Composição completa</p>
        <p>Monte uma tela com topo, mapa/conteúdo central, menu lateral pequeno e rodapé com duas ações. O objetivo é combinar vários conceitos.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, column, flex: 1, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">16</div>
      <div class="fx-ex-content">
        <h3>Selo de certificado</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Centralização simples</p>
        <p>Crie uma tela com um selo grande, o texto “Curso concluído” e um subtítulo. Tudo deve ficar no centro da tela.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> justifyContent, alignItems</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">17</div>
      <div class="fx-ex-content">
        <h3>Card de receita</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Imagem e texto em linha</p>
        <p>Monte um card com imagem de prato à esquerda e, ao lado, nome da receita, tempo de preparo e nível de dificuldade.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, gap, flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">18</div>
      <div class="fx-ex-content">
        <h3>Cadastro de contato escolar</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Coluna de campos</p>
        <p>Crie campos Nome do responsável, Telefone, Série e Observação. A tela deve ficar organizada de cima para baixo.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> column, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">19</div>
      <div class="fx-ex-content">
        <h3>Comandos de laboratório</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Ações centralizadas</p>
        <p>Monte botões Iniciar, Pausar e Limpar dentro de uma faixa. Eles devem ficar centralizados sem ocupar a tela toda.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> justifyContent: center</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">20</div>
      <div class="fx-ex-content">
        <h3>Comparador de preços</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Botões iguais</p>
        <p>Crie três botões: Mercado A, Mercado B e Mercado C. Eles devem ter a mesma largura dentro da linha.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">21</div>
      <div class="fx-ex-content">
        <h3>Topo de biblioteca digital</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Cabeçalho real</p>
        <p>Monte um cabeçalho com voltar, título “Biblioteca” e filtro. O título deve ficar visualmente centralizado.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, alignItems, flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">22</div>
      <div class="fx-ex-content">
        <h3>Linha de sensor</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Alinhamento vertical</p>
        <p>Monte uma linha com ícone de sensor, texto “Temperatura” e valor “26°C”. Todos devem ficar alinhados verticalmente.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> alignItems: center</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">23</div>
      <div class="fx-ex-content">
        <h3>Tela de leitura bíblica</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Conteúdo que cresce</p>
        <p>Crie uma tela com referência no topo, texto principal crescendo no centro e botões Anterior/Próximo no rodapé.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> flex: 1</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">24</div>
      <div class="fx-ex-content">
        <h3>Atalhos de oficina maker</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Linha de atalhos</p>
        <p>Crie atalhos LED, Motor, Sensor e Buzzer em uma linha com cards pequenos e espaçamento regular.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">25</div>
      <div class="fx-ex-content">
        <h3>Interesses culturais</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Chips com quebra</p>
        <p>Monte chips MPB, Samba, Cinema, Teatro, Violão, Fotografia e Dança com quebra automática.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> wrap, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">26</div>
      <div class="fx-ex-content">
        <h3>Mini player de estudo</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Rodapé funcional</p>
        <p>Monte uma tela com título da aula, área de conteúdo e barra inferior com Retroceder, Play e Próxima.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> column, flex: 1, row</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">27</div>
      <div class="fx-ex-content">
        <h3>Indicadores de treino</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Grade responsiva</p>
        <p>Crie quatro cards: Passos, Calorias, Água e Sono. Eles devem formar duas linhas de dois cards.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> wrap, width percentual</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">28</div>
      <div class="fx-ex-content">
        <h3>Consulta marcada</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Linha de agenda</p>
        <p>Monte um item com ícone de calendário, dados da consulta no centro e horário à direita.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> row, flex: 1, alignItems</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">29</div>
      <div class="fx-ex-content">
        <h3>Atendimento online</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Balões de mensagem</p>
        <p>Crie uma conversa curta com perguntas e respostas. Use alinhamento diferente para atendente e usuário.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> alignSelf, gap</div>
      </div>
    </article>
<article class="fx-ex-card">
      <div class="fx-ex-number">30</div>
      <div class="fx-ex-content">
        <h3>Painel de reserva</h3>
        <p class="fx-ex-concept"><strong>Conceito:</strong> Tela integrada</p>
        <p>Crie uma tela com topo, área principal de detalhes, painel lateral de resumo e rodapé com Confirmar/Cancelar.</p>
        <div class="fx-ex-skills"><strong>Use/observe:</strong> composição geral Flexbox</div>
      </div>
    </article>
  </section>

  <section class="fx-ex-footer">
    <strong>Orientação ao aluno:</strong> antes de escrever código, desenhe mentalmente os containers. Pergunte: o que é tela? o que é linha? o que é coluna? qual bloco deve crescer? quais itens precisam ser centralizados? Depois aplique as propriedades aos poucos e teste uma mudança por vez.
  </section>
</div>`
                }
        ]
},
      state: {
        title: '3. React e Hooks',
        subtitle: 'Estado, eventos, funções e Hooks: useState e useRef.',
        steps: [
          {
                    "id": "state-intro",
                    "menu": "Intro",
                    "title": "React e Hooks — A Inteligência do Aplicativo",
                    "objective": "Entender como um aplicativo recebe dados, processa informações, toma decisões e atualiza a tela.",
                    "modulePage": true,
                    "kicker": "Módulo 3 — React e Hooks",
                    "lead": "Até aqui, o aplicativo já conseguia mostrar elementos na tela e organizar o layout. Agora ele começa a reagir ao usuário. Mantemos a Calculadora de Média Escolar e passamos a enxergá-la também como a primeira entrada em React e Hooks.",
                    "highlight": "A ideia principal continua a mesma: o usuário digita as notas, o app guarda os valores, o botão chama uma função, a função calcula a média, toma uma decisão e a tela mostra o resultado. O ponto novo é perceber que useState é um Hook do React: ele guarda valores que mudam e provoca a atualização da interface.",
                    "boxes": [
                              [
                                        "Entrada",
                                        "O usuário digita Nota 1 e Nota 2 em campos TextInput."
                              ],
                              [
                                        "State",
                                        "O aplicativo guarda os valores digitados em variáveis que podem mudar."
                              ],
                              [
                                        "Evento",
                                        "O clique no botão Calcular executa uma função."
                              ],
                              [
                                        "Processamento",
                                        "A função transforma os textos digitados em números e calcula a média."
                              ],
                              [
                                        "Decisão",
                                        "Um if/else decide se a situação será Aprovado ou Reprovado."
                              ],
                              [
                                        "Saída",
                                        "A tela mostra a média e a situação atualizadas."
                              ],
                              [
                                        "React",
                                        "Controla estado, eventos e atualização da interface conforme os dados mudam."
                              ],
                              [
                                        "Hook",
                                        "useState é o primeiro Hook deste módulo. Depois, useRef será aplicado ao próprio app Média Escolar para devolver o foco ao campo da primeira nota; useEffect será o próximo avanço."
                              ]
                    ]
          },
          {
                    "id": "state-1-app",
                    "menu": "1. O App",
                    "title": "1 — O que o aplicativo vai fazer",
                    "objective": "Entender o funcionamento geral antes de programar.",
                    "modulePage": true,
                    "kicker": "Aplicativo do módulo",
                    "lead": "O aplicativo Média Escolar calcula a média de duas notas e informa a situação do aluno.",
                    "highlight": "Este módulo prepara o caminho para o próximo: no módulo 3 o resultado vem de um cálculo dentro do app; no módulo 4 o resultado virá de um serviço na internet.",
                    "boxes": [
                              [
                                        "1. Digitar",
                                        "O usuário informa Nota 1 e Nota 2."
                              ],
                              [
                                        "2. Calcular",
                                        "O botão Calcular chama uma função."
                              ],
                              [
                                        "3. Processar",
                                        "A função soma as notas, divide por 2 e calcula a média."
                              ],
                              [
                                        "4. Decidir",
                                        "Se a média for maior ou igual a 6, a situação será Aprovado; caso contrário, Reprovado."
                              ],
                              [
                                        "5. Mostrar",
                                        "O app exibe Média e Situação na tela."
                              ],
                              [
                                        "6. Limpar",
                                        "O botão Limpar apaga os campos e os resultados."
                              ]
                    ]
          },
          {
                    "id": "state-2-vazia",
                    "menu": "2. Tela vazia",
                    "title": "2 — Criando a tela vazia",
                    "objective": "Criar a estrutura inicial do aplicativo.",
                    "code": "import React from 'react';\nimport { View, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "<View style={styles.container}>\n\n</View>\n\ncontainer: {\n  flex: 1,\n  padding: 30,\n  marginTop: 50,\n},",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_01_tela_vazia.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "Começamos com uma View principal. Ela é o container da tela inteira."
          },
          {
                    "id": "state-3-titulo",
                    "menu": "3. Título",
                    "title": "3 — Adicionando o título",
                    "objective": "Mostrar o nome do aplicativo na tela.",
                    "code": "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "import { View, Text, StyleSheet } from 'react-native';\n\n<Text style={styles.titulo}>Média Escolar</Text>\n\ntitulo: {\n  fontSize: 24,\n  fontWeight: 'bold',\n  marginBottom: 20,\n},",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_02_titulo.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "O componente Text exibe textos na tela. O style define tamanho, negrito e espaçamento."
          },
          {
                    "id": "state-4-campos",
                    "menu": "4. Campos",
                    "title": "4 — Adicionando os campos de nota",
                    "objective": "Criar os campos onde o usuário digitará as notas.",
                    "code": "import React from 'react';\nimport { View, Text, TextInput, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        keyboardType=\"numeric\"\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "import { View, Text, TextInput, StyleSheet } from 'react-native';\n\n<Text>Nota 1:</Text>\n<TextInput\n  style={styles.campo}\n  keyboardType=\"numeric\"\n/>\n\n<Text>Nota 2:</Text>\n<TextInput\n  style={styles.campo}\n  keyboardType=\"numeric\"\n/>\n\ncampo: {\n  borderWidth: 1,\n  borderColor: '#999',\n  padding: 10,\n  marginVertical: 10,\n},",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_03_campos.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "TextInput cria um campo de digitação. keyboardType=\"numeric\" indica que o campo será usado para números."
          },
          {
                    "id": "state-5-botoes",
                    "menu": "5. Botões",
                    "title": "5 — Adicionando os botões",
                    "objective": "Criar os botões Calcular e Limpar lado a lado.",
                    "code": "import React from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" />\n        </View>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "import { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\n<View style={styles.botoes}>\n  <View style={styles.botao}>\n    <Button title=\"Calcular\" />\n  </View>\n\n  <View style={styles.botao}>\n    <Button title=\"Limpar\" />\n  </View>\n</View>\n\nbotoes: {\n  flexDirection: 'row',\n  marginTop: 10,\n},\n\nbotao: {\n  flex: 1,\n  marginHorizontal: 5,\n},",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_04_botoes.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "Os botões ainda não fazem nada. Nesta etapa, eles são apenas parte da interface."
          },
          {
                    "id": "state-6-resultados",
                    "menu": "6. Resultados",
                    "title": "6 — Mostrando a área de resultado",
                    "objective": "Reservar espaço para exibir a média e a situação.",
                    "code": "import React from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média:</Text>\n      <Text style={styles.resultado}>Situação:</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "<Text style={styles.resultado}>Média:</Text>\n<Text style={styles.resultado}>Situação:</Text>\n\nresultado: {\n  fontSize: 18,\n  marginTop: 20,\n},",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_05_resultado_vazio.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "Até aqui, construímos a tela. A inteligência do aplicativo começa nas próximas etapas."
          },
          {
                    "id": "state-7-state",
                    "menu": "7. State",
                    "title": "7 — Guardando dados com useState",
                    "objective": "Criar a memória do aplicativo.",
                    "code": "import React, { useState } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [nota1, setNota1] = useState('');\n  const [nota2, setNota2] = useState('');\n  const [media, setMedia] = useState('');\n  const [situacao, setSituacao] = useState('');\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota1}\n        onChangeText={setNota1}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota2}\n        onChangeText={setNota2}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média: {media}</Text>\n      <Text style={styles.resultado}>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "import React, { useState } from 'react';\n\nconst [nota1, setNota1] = useState('');\nconst [nota2, setNota2] = useState('');\nconst [media, setMedia] = useState('');\nconst [situacao, setSituacao] = useState('');\n\nvalue={nota1}\nonChangeText={setNota1}\n\nvalue={nota2}\nonChangeText={setNota2}",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_05_resultado_vazio.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "State é a memória do app. nota1 e nota2 guardam o que o usuário digita. media e situacao guardam o que será mostrado como resultado."
          },
          {
                    "id": "state-8-eventos",
                    "menu": "8. Eventos",
                    "title": "8 — Ligando os botões às funções",
                    "objective": "Fazer o clique do botão chamar uma função.",
                    "code": "import React, { useState } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [nota1, setNota1] = useState('');\n  const [nota2, setNota2] = useState('');\n  const [media, setMedia] = useState('');\n  const [situacao, setSituacao] = useState('');\n\n  function calcularMedia() {\n\n  }\n\n  function limpar() {\n\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota1}\n        onChangeText={setNota1}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota2}\n        onChangeText={setNota2}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" onPress={calcularMedia} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média: {media}</Text>\n      <Text style={styles.resultado}>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "function calcularMedia() {\n\n}\n\nfunction limpar() {\n\n}\n\n<Button title=\"Calcular\" onPress={calcularMedia} />\n<Button title=\"Limpar\" onPress={limpar} />",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_05_resultado_vazio.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "onPress é um evento. Quando o usuário clica no botão, o React Native executa a função indicada."
          },
          {
                    "id": "state-9-calculo",
                    "menu": "9. Cálculo e if",
                    "title": "9 — Calculando a média e decidindo a situação",
                    "objective": "Processar os dados digitados e tomar uma decisão simples.",
                    "code": "import React, { useState } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [nota1, setNota1] = useState('');\n  const [nota2, setNota2] = useState('');\n  const [media, setMedia] = useState('');\n  const [situacao, setSituacao] = useState('');\n\n  function calcularMedia() {\n    const resultado = (Number(nota1) + Number(nota2)) / 2;\n\n    setMedia(resultado);\n\n    if (resultado >= 6) {\n      setSituacao('Aprovado');\n    } else {\n      setSituacao('Reprovado');\n    }\n  }\n\n  function limpar() {\n\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota1}\n        onChangeText={setNota1}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota2}\n        onChangeText={setNota2}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" onPress={calcularMedia} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média: {media}</Text>\n      <Text style={styles.resultado}>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "function calcularMedia() {\n  const resultado = (Number(nota1) + Number(nota2)) / 2;\n\n  setMedia(resultado);\n\n  if (resultado >= 6) {\n    setSituacao('Aprovado');\n  } else {\n    setSituacao('Reprovado');\n  }\n}",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_06_aprovado.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "Number transforma o texto digitado em número. O if/else decide entre Aprovado e Reprovado."
          },
          {
                    "id": "state-10-limpar",
                    "menu": "10. Limpar",
                    "title": "10 — Limpando os dados da tela",
                    "objective": "Fazer o botão Limpar apagar os campos e os resultados.",
                    "code": "import React, { useState } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [nota1, setNota1] = useState('');\n  const [nota2, setNota2] = useState('');\n  const [media, setMedia] = useState('');\n  const [situacao, setSituacao] = useState('');\n\n  function calcularMedia() {\n    const resultado = (Number(nota1) + Number(nota2)) / 2;\n\n    setMedia(resultado);\n\n    if (resultado >= 6) {\n      setSituacao('Aprovado');\n    } else {\n      setSituacao('Reprovado');\n    }\n  }\n\n  function limpar() {\n    setNota1('');\n    setNota2('');\n    setMedia('');\n    setSituacao('');\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota1}\n        onChangeText={setNota1}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota2}\n        onChangeText={setNota2}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" onPress={calcularMedia} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média: {media}</Text>\n      <Text style={styles.resultado}>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "function limpar() {\n  setNota1('');\n  setNota2('');\n  setMedia('');\n  setSituacao('');\n}",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_05_resultado_vazio.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "Limpar também é atualização de state. Ao voltar os valores para vazio, a tela fica limpa automaticamente."
          },
          {
                    "id": "state-11-useref",
                    "menu": "11. useRef",
                    "title": "11 — Melhorando o app com useRef",
                    "objective": "Fazer o botão Limpar devolver o foco ao campo da primeira nota.",
                    "code": "import React, { useState, useRef } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [nota1, setNota1] = useState('');\n  const [nota2, setNota2] = useState('');\n  const [media, setMedia] = useState('');\n  const [situacao, setSituacao] = useState('');\n\n  const campoNota1 = useRef(null);\n\n  function calcularMedia() {\n    const resultado = (Number(nota1) + Number(nota2)) / 2;\n\n    setMedia(resultado);\n\n    if (resultado >= 6) {\n      setSituacao('Aprovado');\n    } else {\n      setSituacao('Reprovado');\n    }\n  }\n\n  function limpar() {\n    setNota1('');\n    setNota2('');\n    setMedia('');\n    setSituacao('');\n    campoNota1.current.focus();\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        ref={campoNota1}\n        style={styles.campo}\n        value={nota1}\n        onChangeText={setNota1}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota2}\n        onChangeText={setNota2}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" onPress={calcularMedia} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média: {media}</Text>\n      <Text style={styles.resultado}>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Trecho em foco",
                    "added": "1. Importe useRef junto com useState:\n\nimport React, { useState, useRef } from 'react';\n\n2. Crie uma referência para o primeiro campo:\n\nconst campoNota1 = useRef(null);\n\n3. Ligue a referência ao TextInput da Nota 1:\n\nref={campoNota1}\n\n4. Ao final da função limpar(), devolva o foco:\n\ncampoNota1.current.focus();\n\nuseState × useRef\n- useState guarda dados que participam da interface e sua atualização provoca nova renderização.\n- useRef permite manter uma referência ao TextInput sem precisar atualizar a interface quando current muda.",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_05_resultado_vazio.webp\" alt=\"Tela do app Média Escolar limpa, pronta para receber a primeira nota\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "Agora, ao tocar em Limpar, os dados são apagados e o cursor volta para o campo Nota 1. O useRef não substitui o useState: aqui ele é usado para acessar diretamente o TextInput e aplicar focus()."
          },
          {
                    "id": "state-12-final",
                    "menu": "12. Final",
                    "title": "12 — Código completo",
                    "objective": "Revisar a versão final do aplicativo Média Escolar com useState e useRef.",
                    "code": "import React, { useState, useRef } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [nota1, setNota1] = useState('');\n  const [nota2, setNota2] = useState('');\n  const [media, setMedia] = useState('');\n  const [situacao, setSituacao] = useState('');\n\n  const campoNota1 = useRef(null);\n\n  function calcularMedia() {\n    const resultado = (Number(nota1) + Number(nota2)) / 2;\n\n    setMedia(resultado);\n\n    if (resultado >= 6) {\n      setSituacao('Aprovado');\n    } else {\n      setSituacao('Reprovado');\n    }\n  }\n\n  function limpar() {\n    setNota1('');\n    setNota2('');\n    setMedia('');\n    setSituacao('');\n    campoNota1.current.focus();\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Média Escolar</Text>\n\n      <Text>Nota 1:</Text>\n      <TextInput\n        ref={campoNota1}\n        style={styles.campo}\n        value={nota1}\n        onChangeText={setNota1}\n        keyboardType=\"numeric\"\n      />\n\n      <Text>Nota 2:</Text>\n      <TextInput\n        style={styles.campo}\n        value={nota2}\n        onChangeText={setNota2}\n        keyboardType=\"numeric\"\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Calcular\" onPress={calcularMedia} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Média: {media}</Text>\n      <Text style={styles.resultado}>Situação: {situacao}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                    "addedTitle": "Resumo do app",
                    "added": "Código final do app Média Escolar.\n\nO aplicativo agora possui:\n- campos controlados por state;\n- botões com onPress;\n- função de cálculo;\n- decisão com if/else;\n- função limpar;\n- useRef ligado ao campo Nota 1;\n- foco automático na primeira nota após a limpeza;\n- atualização automática da tela.",
                    "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/media_escolar_06_aprovado.webp\" alt=\"Tela do app Média Escolar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                    "note": "A Média Escolar agora consolida useState e introduz useRef dentro do próprio aplicativo. O próximo Hook será useEffect, aplicado em um projeto com atualização automática."
          },
          {
                    "id": "exercicios-state",
                    "menu": "99. Exercícios",
                    "title": "99 — Exercícios",
                    "objective": "Praticar state, eventos, cálculos e decisões simples.",
                    "exercisePage": true,
                    "html": "\n<div class=\"exercise-native exercise-clean\">\n  <div class=\"topline exercise-clean-top\">\n    <h2>99. Exercícios — React e Hooks: A Inteligência do Aplicativo</h2>\n    <div class=\"objective\"><strong>Objetivo:</strong> praticar entrada de dados, cálculo, decisão e atualização da tela.</div>\n  </div>\n\n  <div class=\"panel exercise-menu-panel\">\n    <div class=\"panel-body gallery exercise-menu-gallery\">\n      <button class=\"thumb-card active\" type=\"button\" onclick=\"showExerciseInterface(1)\">\n        <div class=\"thumb-title\">1. Média 3 notas</div>\n        <div class=\"thumb-phone\"><div class=\"thumb-bar blue\">Média</div><div class=\"thumb-body\"><div class=\"mini-line\"></div><div class=\"mini-line\"></div><div class=\"mini-line\"></div><div class=\"mini-btns\"><div class=\"mini-btn btn-blue\"></div><div class=\"mini-btn btn-gray\"></div></div><div class=\"mini-line\" style=\"height:34px\"></div></div></div>\n      </button>\n\n      <button class=\"thumb-card\" type=\"button\" onclick=\"showExerciseInterface(2)\">\n        <div class=\"thumb-title\">2. Temperatura</div>\n        <div class=\"thumb-phone\"><div class=\"thumb-bar orange\">Conversor</div><div class=\"thumb-body\"><div class=\"mini-line\"></div><div class=\"mini-line\" style=\"height:30px\"></div><div class=\"mini-btns\"><div class=\"mini-btn btn-orange\"></div><div class=\"mini-btn btn-gray\"></div></div></div></div>\n      </button>\n\n      <button class=\"thumb-card\" type=\"button\" onclick=\"showExerciseInterface(3)\">\n        <div class=\"thumb-title\">3. Desconto</div>\n        <div class=\"thumb-phone\"><div class=\"thumb-bar green\">Desconto</div><div class=\"thumb-body\"><div class=\"mini-line\"></div><div class=\"mini-line\"></div><div class=\"mini-btns\"><div class=\"mini-btn btn-green\"></div><div class=\"mini-btn btn-gray\"></div></div><div class=\"mini-line\" style=\"height:30px\"></div></div></div>\n      </button>\n\n      <button class=\"thumb-card\" type=\"button\" onclick=\"showExerciseInterface(4)\">\n        <div class=\"thumb-title\">4. Média 7</div>\n        <div class=\"thumb-phone\"><div class=\"thumb-bar purple\">Regra</div><div class=\"thumb-body\"><div class=\"mini-line\"></div><div class=\"mini-line\"></div><div class=\"mini-btns\"><div class=\"mini-btn btn-purple\"></div><div class=\"mini-btn btn-gray\"></div></div><div class=\"mini-line\" style=\"height:34px\"></div></div></div>\n      </button>\n\n      <button class=\"thumb-card\" type=\"button\" onclick=\"showExerciseInterface(5)\">\n        <div class=\"thumb-title\">5. Maioridade</div>\n        <div class=\"thumb-phone\"><div class=\"thumb-bar dark\">Idade</div><div class=\"thumb-body\"><div class=\"mini-line\"></div><div class=\"mini-line\"></div><div class=\"mini-btns\"><div class=\"mini-btn btn-blue\"></div><div class=\"mini-btn btn-gray\"></div></div><div class=\"mini-line\" style=\"height:32px\"></div></div></div>\n      </button>\n    </div>\n  </div>\n\n  <section id=\"exercise-clean-1\" class=\"exercise-clean-section active\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\">\n        <div class=\"panel-title\">Enunciado</div>\n        <div class=\"panel-body\">\n          <h3>Média de 3 Notas</h3>\n          <p>Crie uma nova versão do aplicativo Média Escolar utilizando três notas em vez de duas.</p>\n          <ul>\n            <li>Campos: Nota 1, Nota 2 e Nota 3.</li>\n            <li>Botões: Calcular e Limpar.</li>\n            <li>Resultado: média final.</li>\n            <li>Situação: Aprovado quando a média for maior ou igual a 6.</li>\n          </ul>\n          <div class=\"exercise-guide-inline\">\n            <div class=\"mini-card\"><strong>1. Crie</strong><p>Adicione um novo state para a terceira nota.</p></div>\n            <div class=\"mini-card\"><strong>2. Calcule</strong><p>Some as três notas e divida por 3.</p></div>\n            <div class=\"mini-card\"><strong>3. Decida</strong><p>Use if/else para mostrar a situação.</p></div>\n          </div>\n          <div class=\"tagline\"><strong>Desafio:</strong> mantenha o botão Limpar apagando todos os campos e resultados.</div>\n        </div>\n      </div>\n      <div class=\"mockup-wrap\"><div class=\"phone\"><div class=\"appbar blue\">Média de 3 Notas</div><div class=\"mock-body\"><div class=\"field-group b-blue\"><div class=\"label\">Nota 1</div><div class=\"input\"></div><div class=\"label\">Nota 2</div><div class=\"input\"></div><div class=\"label\">Nota 3</div><div class=\"input\"></div></div><div class=\"button-row b-green\"><div class=\"btn btn-blue\">Calcular</div><div class=\"btn btn-gray\">Limpar</div></div><div class=\"field-group b-orange\"><div class=\"label\">Média</div><div class=\"input\"></div><div class=\"label\">Situação</div><div class=\"input\"></div></div></div></div></div>\n    </div>\n  </section>\n\n  <section id=\"exercise-clean-2\" class=\"exercise-clean-section\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\"><div class=\"panel-title\">Enunciado</div><div class=\"panel-body\"><h3>Conversor de Temperatura</h3><p>Construa um aplicativo que receba uma temperatura em Celsius e mostre o valor correspondente em Fahrenheit.</p><ul><li>Campo: Temperatura em Celsius.</li><li>Botões: Converter e Limpar.</li><li>Resultado: Temperatura em Fahrenheit.</li></ul><div class=\"exercise-guide-inline\"><div class=\"mini-card\"><strong>State</strong><p>Guarde o valor digitado e o resultado.</p></div><div class=\"mini-card\"><strong>Evento</strong><p>O botão Converter chama a função.</p></div><div class=\"mini-card\"><strong>Cálculo</strong><p>Use a fórmula: F = C × 9 / 5 + 32.</p></div></div><div class=\"tagline\"><strong>Desafio:</strong> exiba o resultado acompanhado de °F.</div></div></div>\n      <div class=\"mockup-wrap\"><div class=\"phone\"><div class=\"appbar orange\">Temperatura</div><div class=\"mock-body\"><div class=\"field-group b-orange\"><div class=\"label\">Celsius</div><div class=\"input\"></div></div><div class=\"button-row b-blue\"><div class=\"btn btn-orange\">Converter</div><div class=\"btn btn-gray\">Limpar</div></div><div class=\"field-group b-blue\"><div class=\"label\">Fahrenheit</div><div class=\"input\"></div></div></div></div></div>\n    </div>\n  </section>\n\n  <section id=\"exercise-clean-3\" class=\"exercise-clean-section\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\"><div class=\"panel-title\">Enunciado</div><div class=\"panel-body\"><h3>Calculadora de Desconto</h3><p>Monte um aplicativo para calcular o valor final de um produto depois de aplicar um desconto.</p><ul><li>Campos: Preço do produto e percentual de desconto.</li><li>Botões: Calcular e Limpar.</li><li>Resultado: Valor do desconto e preço final.</li></ul><div class=\"exercise-guide-inline\"><div class=\"mini-card\"><strong>Entrada</strong><p>Receba preço e desconto com TextInput.</p></div><div class=\"mini-card\"><strong>Processamento</strong><p>Calcule o desconto usando porcentagem.</p></div><div class=\"mini-card\"><strong>Saída</strong><p>Atualize a tela com os valores finais.</p></div></div><div class=\"tagline\"><strong>Desafio:</strong> mostre o preço final de forma clara para o usuário.</div></div></div>\n      <div class=\"mockup-wrap\"><div class=\"phone\"><div class=\"appbar green\">Desconto</div><div class=\"mock-body\"><div class=\"field-group b-green\"><div class=\"label\">Preço</div><div class=\"input\"></div><div class=\"label\">Desconto (%)</div><div class=\"input\"></div></div><div class=\"button-row b-green\"><div class=\"btn btn-green\">Calcular</div><div class=\"btn btn-gray\">Limpar</div></div><div class=\"field-group b-orange\"><div class=\"label\">Valor Final</div><div class=\"input\"></div></div></div></div></div>\n    </div>\n  </section>\n\n  <section id=\"exercise-clean-4\" class=\"exercise-clean-section\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\"><div class=\"panel-title\">Enunciado</div><div class=\"panel-body\"><h3>Média com Regra 7</h3><p>Altere a regra da Média Escolar para aprovar apenas alunos com média maior ou igual a 7.</p><ul><li>Campos: Nota 1 e Nota 2.</li><li>Botões: Calcular e Limpar.</li><li>Resultado: Média e situação.</li><li>Regra: média maior ou igual a 7 → Aprovado.</li></ul><div class=\"exercise-guide-inline\"><div class=\"mini-card\"><strong>Reaproveite</strong><p>Use a base do app Média Escolar.</p></div><div class=\"mini-card\"><strong>Altere</strong><p>Mude apenas a regra do if.</p></div><div class=\"mini-card\"><strong>Teste</strong><p>Use notas que aprovem e notas que reprovem.</p></div></div><div class=\"tagline\"><strong>Desafio:</strong> personalize a mensagem exibida quando o aluno não atingir a média.</div></div></div>\n      <div class=\"mockup-wrap\"><div class=\"phone\"><div class=\"appbar purple\">Média 7</div><div class=\"mock-body\"><div class=\"field-group b-purple\"><div class=\"label\">Nota 1</div><div class=\"input\"></div><div class=\"label\">Nota 2</div><div class=\"input\"></div></div><div class=\"button-row b-purple\"><div class=\"btn btn-purple\">Calcular</div><div class=\"btn btn-gray\">Limpar</div></div><div class=\"field-group b-orange\"><div class=\"label\">Situação</div><div class=\"input\"></div></div></div></div></div>\n    </div>\n  </section>\n\n  <section id=\"exercise-clean-5\" class=\"exercise-clean-section\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\"><div class=\"panel-title\">Enunciado</div><div class=\"panel-body\"><h3>Verificador de Maioridade</h3><p>Crie um aplicativo que receba a idade de uma pessoa e informe se ela é maior ou menor de idade.</p><ul><li>Campo: Idade.</li><li>Botões: Verificar e Limpar.</li><li>Resultado: Maior de idade ou Menor de idade.</li><li>Regra: idade maior ou igual a 18.</li></ul><div class=\"exercise-guide-inline\"><div class=\"mini-card\"><strong>Entrada</strong><p>Guarde a idade digitada em um state.</p></div><div class=\"mini-card\"><strong>Decisão</strong><p>Use if/else para verificar a regra.</p></div><div class=\"mini-card\"><strong>Resposta</strong><p>Mostre a situação na tela.</p></div></div><div class=\"tagline\"><strong>Desafio:</strong> limpe também a mensagem de resultado ao tocar em Limpar.</div></div></div>\n      <div class=\"mockup-wrap\"><div class=\"phone\"><div class=\"appbar dark\">Maioridade</div><div class=\"mock-body\"><div class=\"field-group b-blue\"><div class=\"label\">Idade</div><div class=\"input\"></div></div><div class=\"button-row b-blue\"><div class=\"btn btn-blue\">Verificar</div><div class=\"btn btn-gray\">Limpar</div></div><div class=\"field-group b-green\"><div class=\"label\">Resultado</div><div class=\"input\"></div></div></div></div></div>\n    </div>\n  </section>\n\n  <div class=\"obs\"><strong>Observação:</strong> todos os exercícios utilizam os mesmos conceitos estudados neste módulo: state, eventos, cálculos, condições e atualização automática da interface.</div>\n</div>"
          }
]
      },
      apiCep: {
        "title": "4. Web Services/APIs",
        "subtitle": "Cliente, servidor, APIs, JSON e Busca CEP.",
        "steps": [
                {
                        "id": "api-intro",
                        "menu": "Intro",
                        "title": "Web Services e Consumo de APIs",
                        "objective": "Entender como aplicativos obtêm informações da internet usando APIs.",
                        "modulePage": true,
                        "kicker": "Aplicativos conectados",
                        "lead": "Muitos aplicativos não guardam todas as informações dentro do próprio aparelho. Eles consultam serviços na internet para obter dados atualizados, como CEP, clima, mapas e cotação de moedas.",
                        "highlight": "Neste módulo, o projeto principal será o Busca CEP. O aplicativo enviará um CEP para o ViaCEP, receberá uma resposta em JSON e atualizará a tela com cidade e estado.",
                        "boxes": [
                                [
                                        "Problema inicial",
                                        "Como um aplicativo descobre a cidade e o estado a partir de um CEP digitado pelo usuário?"
                                ],
                                [
                                        "Ideia central",
                                        "O aplicativo faz uma consulta pela internet e recebe uma resposta organizada."
                                ],
                                [
                                        "Projeto principal",
                                        "Construir o aplicativo Consulta de CEP usando a API ViaCEP."
                                ],
                                [
                                        "Cuidado didático",
                                        "Sem validações avançadas, try/catch, loading ou ActivityIndicator nesta primeira versão."
                                ],
                                [
                                        "Formato usado",
                                        "JSON será usado na prática. XML será apenas citado."
                                ],
                                [
                                        "Roteiro do módulo",
                                        "Monta a tela → digita o CEP → faz a requisição → recebe a resposta → lê o JSON → atualiza a tela."
                                ]
                        ]
                },
                {
                        "id": "api-como-funciona",
                        "menu": "1 API",
                        "title": "1 — Como funciona uma API",
                        "objective": "Compreender a comunicação entre cliente, servidor, requisição e resposta.",
                        "modulePage": true,
                        "kicker": "Cliente, servidor e resposta",
                        "lead": "Quando o usuário digita um CEP e toca em Pesquisar, o aplicativo faz um pedido pela internet. Esse pedido chega a um serviço, que processa a consulta e devolve uma resposta organizada.",
                        "highlight": "No nosso exemplo, o aplicativo React Native é o cliente. O ViaCEP é o serviço que possui as informações. A API organiza como o pedido deve ser feito e como a resposta será devolvida.",
                        "boxes": [
                                [
                                        "Cliente",
                                        "É quem faz o pedido. Neste módulo, o cliente é o aplicativo React Native."
                                ],
                                [
                                        "Servidor",
                                        "É quem possui os dados e devolve a resposta. Neste módulo, o serviço usado será o ViaCEP."
                                ],
                                [
                                        "Requisição",
                                        "É o pedido enviado pelo aplicativo quando o usuário toca no botão Pesquisar."
                                ],
                                [
                                        "Resposta",
                                        "É o retorno enviado pelo servidor com as informações do CEP."
                                ],
                                [
                                        "HTTP GET",
                                        "É o tipo de requisição usado para buscar informações em uma API."
                                ],
                                [
                                        "Fluxo completo",
                                        "Aplicativo → API → Servidor → JSON → Tela atualizada."
                                ]
                        ]
                },
                {
                        "id": "api-viacep",
                        "menu": "2 ViaCEP",
                        "title": "2 — Conhecendo a API ViaCEP",
                        "objective": "Conhecer uma API real e entender como consultar um CEP.",
                        "customPage": true,
                        "html": `
          <div class="intro-kicker">API real para consulta de CEP</div>
          <h3>2 — Conhecendo a API ViaCEP</h3>
          <p class="intro-lead">O ViaCEP é um serviço gratuito que permite consultar informações de endereços a partir de um CEP brasileiro.</p>

          <div class="intro-highlight">
            Nesta etapa, o objetivo é entender como a URL da consulta é formada. Depois, o aplicativo usará essa mesma ideia para buscar os dados automaticamente.
          </div>

          <div class="intro-two-cols" style="align-items:stretch;">
            <div>
              <div class="module-page-grid" style="grid-template-columns:1fr;">
                <div class="module-page-box">
                  <strong>Site oficial</strong>
                  <span>https://viacep.com.br/</span>
                </div>
                <div class="module-page-box">
                  <strong>Exemplo de consulta</strong>
                  <span>https://viacep.com.br/ws/01001000/json/</span>
                </div>
                <div class="module-page-box">
                  <strong>CEP pesquisado</strong>
                  <span>01001000 é o CEP enviado para a API.</span>
                </div>
                <div class="module-page-box">
                  <strong>Formato da resposta</strong>
                  <span>json indica que queremos receber os dados em JSON. O ViaCEP também oferece XML, mas ele não será usado na prática aqui.</span>
                </div>
              </div>
            </div>

            <div class="module-page-box" style="display:flex;align-items:center;justify-content:center;min-height:360px;">
              <img src="../img/reactnative/api_cep_site_inicio.webp" alt="Site ViaCEP" style="max-width:100%;max-height:340px;object-fit:contain;display:block;" loading="lazy" decoding="async">
            </div>
          </div>

          <div class="intro-highlight" style="margin-top:14px;">
            A documentação da API mostra como montar a URL, quais formatos existem e quais campos podem ser retornados.
          </div>
        `
                },
                {
                        "id": "api-json",
                        "menu": "3 JSON",
                        "title": "3 — Entendendo o JSON",
                        "objective": "Entender como localizar cidade e estado dentro da resposta da API.",
                        "code": "{\n  \"cep\": \"01001-000\",\n  \"logradouro\": \"Praça da Sé\",\n  \"bairro\": \"Sé\",\n  \"localidade\": \"São Paulo\",\n  \"uf\": \"SP\",\n  \"ddd\": \"11\",\n  \"ibge\": \"3550308\"\n}",
                        "added": "JSON é um formato de dados baseado em chave e valor.\n\nNo Busca CEP vamos usar principalmente:\n\ndados.localidade → cidade\ndados.uf → estado\n\nNos exercícios, outros campos também serão aproveitados.",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/api_cep_json_viacep.webp\" alt=\"JSON do ViaCEP\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "O ViaCEP retorna vários campos. No aplicativo principal usaremos apenas cidade e estado para manter o foco."
                },
                {
                        "id": "api-tela-1",
                        "menu": "4 Tela",
                        "title": "4 — Tela vazia",
                        "objective": "Começar a construção visual do aplicativo.",
                        "code": "import React from 'react';\nimport { View, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n});",
                        "added": "1. Monta a tela\n\nA primeira View cria a área principal do aplicativo.",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/01_cep_tela_vazia.webp\" alt=\"Tela vazia do app Consulta de CEP\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "A tela ainda está vazia. A ideia é construir o aplicativo por partes."
                },
                {
                        "id": "api-tela-2",
                        "menu": "5 Título",
                        "title": "5 — Adicionando o título",
                        "objective": "Inserir o título do aplicativo.",
                        "code": "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Consulta de CEP</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n});",
                        "added": "Foi adicionado o título:\n\nConsulta de CEP\n\nTambém foi criado o estilo do título.",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/02_cep_tela_titulo.webp\" alt=\"Tela com título\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "O título ajuda o usuário a entender a finalidade da tela."
                },
                {
                        "id": "api-tela-3",
                        "menu": "6 Campo",
                        "title": "6 — Campo para digitar o CEP",
                        "objective": "Permitir que o usuário informe o CEP.",
                        "code": "import React, { useState, useRef } from 'react';\nimport { View, Text, TextInput, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [cep, setCep] = useState('');\n  const campoCep = useRef(null);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Consulta de CEP</Text>\n\n      <Text>Digite o CEP:</Text>\n\n      <TextInput\n        ref={campoCep}\n        style={styles.campo}\n        value={cep}\n        onChangeText={setCep}\n        keyboardType=\"numeric\"\n        maxLength={9}\n        autoFocus\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n});",
                        "added": "2. Digita o CEP\n\nFoi adicionado o campo de entrada.\n\nO valor digitado fica guardado no aplicativo para ser usado na consulta.",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/03_cep_tela_CEP.webp\" alt=\"Tela com campo de CEP\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "O campo recebe o CEP que será enviado para a API."
                },
                {
                        "id": "api-tela-4",
                        "menu": "7 Botões",
                        "title": "7 — Botões Pesquisar e Limpar",
                        "objective": "Criar os botões de ação do aplicativo.",
                        "code": "import React, { useState, useRef } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [cep, setCep] = useState('');\n  const campoCep = useRef(null);\n\n  function pesquisarCEP() {\n\n  }\n\n  function limpar() {\n    setCep('');\n    campoCep.current.focus();\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Consulta de CEP</Text>\n\n      <Text>Digite o CEP:</Text>\n\n      <TextInput\n        ref={campoCep}\n        style={styles.campo}\n        value={cep}\n        onChangeText={setCep}\n        keyboardType=\"numeric\"\n        maxLength={9}\n        autoFocus\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Pesquisar\" onPress={pesquisarCEP} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n});",
                        "added": "Foram adicionados dois botões:\n\nPesquisar → fará a consulta\nLimpar → apagará os dados e devolverá o foco ao campo CEP",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/04_cep_tela_botoes.webp\" alt=\"Tela com botões\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "Neste momento, o botão Pesquisar ainda não consulta a internet. A consulta será adicionada depois."
                },
                {
                        "id": "api-tela-5",
                        "menu": "8 Resultado",
                        "title": "8 — Área de resultado",
                        "objective": "Preparar a tela para exibir cidade e estado.",
                        "code": "import React, { useState, useRef } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [cep, setCep] = useState('');\n  const [cidade, setCidade] = useState('');\n  const [estado, setEstado] = useState('');\n\n  const campoCep = useRef(null);\n\n  function pesquisarCEP() {\n\n  }\n\n  function limpar() {\n    setCep('');\n    setCidade('');\n    setEstado('');\n    campoCep.current.focus();\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Consulta de CEP</Text>\n\n      <Text>Digite o CEP:</Text>\n\n      <TextInput\n        ref={campoCep}\n        style={styles.campo}\n        value={cep}\n        onChangeText={setCep}\n        keyboardType=\"numeric\"\n        maxLength={9}\n        autoFocus\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Pesquisar\" onPress={pesquisarCEP} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Cidade: {cidade}</Text>\n      <Text style={styles.resultado}>Estado: {estado}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                        "added": "Foram adicionados os textos de resultado:\n\nCidade:\nEstado:\n\nEles aparecem vazios porque a API ainda não retornou dados.",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/05_cep_tela_resultado_vazia.webp\" alt=\"Tela com resultado vazio\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "A tela já está preparada para receber a resposta da API."
                },
                {
                        "id": "api-final",
                        "menu": "9 Final",
                        "title": "9 — Consulta final com API",
                        "objective": "Consultar o ViaCEP, ler o JSON e atualizar a tela.",
                        "code": "import React, { useState, useRef } from 'react';\nimport { View, Text, TextInput, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [cep, setCep] = useState('');\n  const [cidade, setCidade] = useState('');\n  const [estado, setEstado] = useState('');\n\n  const campoCep = useRef(null);\n\n  async function pesquisarCEP() {\n    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);\n    const dados = await resposta.json();\n\n    setCidade(dados.localidade);\n    setEstado(dados.uf);\n  }\n\n  function limpar() {\n    setCep('');\n    setCidade('');\n    setEstado('');\n    campoCep.current.focus();\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Consulta de CEP</Text>\n\n      <Text>Digite o CEP:</Text>\n\n      <TextInput\n        ref={campoCep}\n        style={styles.campo}\n        value={cep}\n        onChangeText={setCep}\n        keyboardType=\"numeric\"\n        maxLength={9}\n        autoFocus\n      />\n\n      <View style={styles.botoes}>\n        <View style={styles.botao}>\n          <Button title=\"Pesquisar\" onPress={pesquisarCEP} />\n        </View>\n\n        <View style={styles.botao}>\n          <Button title=\"Limpar\" onPress={limpar} />\n        </View>\n      </View>\n\n      <Text style={styles.resultado}>Cidade: {cidade}</Text>\n      <Text style={styles.resultado}>Estado: {estado}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 30,\n    marginTop: 50,\n  },\n\n  titulo: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    marginBottom: 20,\n  },\n\n  campo: {\n    borderWidth: 1,\n    borderColor: '#999',\n    padding: 10,\n    marginVertical: 10,\n  },\n\n  botoes: {\n    flexDirection: 'row',\n    marginTop: 10,\n  },\n\n  botao: {\n    flex: 1,\n    marginHorizontal: 5,\n  },\n\n  resultado: {\n    fontSize: 18,\n    marginTop: 20,\n  },\n});",
                        "added": "3. Faz a requisição\n4. Recebe a resposta\n5. Lê o JSON\n6. Atualiza a tela\n\nfetch() envia a consulta.\nresposta.json() transforma a resposta em JSON.\ndados.localidade e dados.uf alimentam a tela.",
                        "preview": "<div style=\"height:100%;display:flex;align-items:center;justify-content:center;background:#fff;padding:0;box-sizing:border-box;\">\n  <img src=\"../img/reactnative/06_cep_tela_resultados.webp\" alt=\"Tela final com resultado\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\" loading=\"lazy\" decoding=\"async\">\n</div>",
                        "note": "Esta é a versão oficial final do aplicativo Busca CEP."
                },
                {
                        "id": "api-conceitos",
                        "menu": "10 Conceitos",
                        "title": "10 — Conceitos Utilizados",
                        "objective": "Revisar a lógica do aplicativo sem excesso de termos técnicos.",
                        "modulePage": true,
                        "kicker": "Do pedido à tela",
                        "lead": "O mais importante é entender o caminho completo da informação. O usuário digita o CEP, o aplicativo consulta a API, recebe o JSON e mostra os dados na tela.",
                        "highlight": "Como funciona o Busca CEP? 1. Monta a tela 2. Digita o CEP 3. Faz a requisição 4. Recebe a resposta 5. Lê o JSON 6. Atualiza a tela.",
                        "boxes": [
                                [
                                        "Interface do aplicativo",
                                        "É a tela com campo, botões e área de resultado."
                                ],
                                [
                                        "Entrada de dados",
                                        "É o CEP digitado pelo usuário."
                                ],
                                [
                                        "API",
                                        "É o serviço consultado pelo aplicativo. Neste módulo, o ViaCEP."
                                ],
                                [
                                        "Requisição HTTP",
                                        "É o pedido enviado pela internet."
                                ],
                                [
                                        "JSON",
                                        "É a resposta organizada devolvida pela API."
                                ],
                                [
                                        "Atualização da tela",
                                        "É quando cidade e estado aparecem para o usuário."
                                ]
                        ]
                },
                {
                        "id": "api-fechamento",
                        "menu": "11 Fechamento",
                        "title": "11 — Fechamento",
                        "objective": "Consolidar o caminho completo do consumo de APIs.",
                        "modulePage": true,
                        "kicker": "O caminho da informação",
                        "lead": "Neste módulo, o aplicativo deixou de trabalhar apenas com dados digitados pelo usuário e passou a buscar informações reais em um serviço externo.",
                        "highlight": "Aplicativo → API → Servidor → JSON → Tela atualizada. Essa é uma ideia central em muitos aplicativos modernos.",
                        "boxes": [
                                [
                                        "O que foi construído",
                                        "Um aplicativo que consulta um CEP pela internet."
                                ],
                                [
                                        "O que a API devolveu",
                                        "Uma resposta em JSON com dados do endereço."
                                ],
                                [
                                        "O que o app exibiu",
                                        "Cidade e estado retornados pelo ViaCEP."
                                ],
                                [
                                        "O que vem depois",
                                        "Exercícios com mais campos do ViaCEP, cotação do dólar e clima."
                                ],
                                [
                                        "Atenção",
                                        "Nem todo JSON terá a mesma estrutura. Alguns serão mais simples e outros mais elaborados."
                                ],
                                [
                                        "Ideia principal",
                                        "Não aprendemos apenas CEP. Aprendemos o caminho para consumir APIs."
                                ]
                        ]
                },
                {
                        "id": "exercicios-api",
                        "menu": "99. Exercícios",
                        "title": "99 — Exercícios",
                        "objective": "Praticar consumo de APIs, leitura de JSON e atualização da tela.",
                        "exercisePage": true,
                        "html": "\n<div class=\"exercise-native exercise-clean\">\n  <div class=\"topline exercise-clean-top\">\n    <h2>99. Exercícios — Web Services e APIs</h2>\n    <div class=\"objective\"><strong>Objetivo:</strong> praticar consumo de APIs, leitura de JSON e atualização da tela.</div>\n  </div>\n\n  <div class=\"panel exercise-menu-panel\">\n    <div class=\"panel-body gallery exercise-menu-gallery\">\n      <button class=\"thumb-card active\" type=\"button\" onclick=\"showExerciseInterface(1)\">\n        <div class=\"thumb-title\">1. Busca CEP+</div>\n        <div class=\"thumb-phone\"><img src=\"../img/reactnative/cep_expandido.webp\" alt=\"Busca CEP expandido\" style=\"width:100%;height:100%;object-fit:contain;display:block;\"></div>\n      </button>\n      <button class=\"thumb-card\" type=\"button\" onclick=\"showExerciseInterface(2)\">\n        <div class=\"thumb-title\">2. Dólar</div>\n        <div class=\"thumb-phone\"><img src=\"../img/reactnative/cotacao_dolar.webp\" alt=\"Cotação do dólar\" style=\"width:100%;height:100%;object-fit:contain;display:block;\"></div>\n      </button>\n      <button class=\"thumb-card\" type=\"button\" onclick=\"showExerciseInterface(3)\">\n        <div class=\"thumb-title\">3. Clima</div>\n        <div class=\"thumb-phone\"><img src=\"../img/reactnative/clima_atual.webp\" alt=\"Clima atual\" style=\"width:100%;height:100%;object-fit:contain;display:block;\"></div>\n      </button>\n    </div>\n  </div>\n\n  <section id=\"exercise-clean-1\" class=\"exercise-clean-section active\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\">\n        <div class=\"panel-title\">Enunciado</div>\n        <div class=\"panel-body\">\n          <h3>Expandindo o Busca CEP</h3>\n          <p>O aplicativo principal mostra apenas cidade e estado. Agora, explore melhor o JSON retornado pelo ViaCEP.</p>\n          <ul>\n            <li>Mostre também: logradouro, bairro, DDD e IBGE.</li>\n            <li>Mantenha os botões Pesquisar e Limpar.</li>\n            <li>Use a documentação do ViaCEP para conferir os nomes dos campos.</li>\n          </ul>\n          <div class=\"exercise-guide-inline\">\n            <div class=\"mini-card\"><strong>1. Consulte</strong><p>Veja a resposta JSON do ViaCEP.</p></div>\n            <div class=\"mini-card\"><strong>2. Localize</strong><p>Encontre os campos necessários.</p></div>\n            <div class=\"mini-card\"><strong>3. Exiba</strong><p>Atualize a tela com os novos dados.</p></div>\n          </div>\n          <div class=\"tagline\"><strong>Ideia central:</strong> usar a mesma API, mas aproveitar mais informações da resposta.</div>\n        </div>\n      </div>\n      <div class=\"mockup-wrap\"><img src=\"../img/reactnative/cep_expandido.webp\" alt=\"Exercício Busca CEP expandido\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\"></div>\n    </div>\n    <div class=\"obs\"><strong>Observação:</strong> este exercício não troca de API. Ele apenas amplia o uso dos dados retornados pelo ViaCEP.</div>\n  </section>\n\n  <section id=\"exercise-clean-2\" class=\"exercise-clean-section\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\">\n        <div class=\"panel-title\">Enunciado</div>\n        <div class=\"panel-body\">\n          <h3>Cotação do Dólar</h3>\n          <p>Crie um aplicativo simples que consulte a cotação do dólar em relação ao real.</p>\n          <ul>\n            <li>API: https://economia.awesomeapi.com.br/json/last/USD-BRL</li>\n            <li>Botões: Consultar e Limpar.</li>\n            <li>Exibir: valor atual, maior valor do dia e menor valor do dia.</li>\n          </ul>\n          <div class=\"exercise-guide-inline\">\n            <div class=\"mini-card\"><strong>1. Consulte</strong><p>Faça a requisição à API.</p></div>\n            <div class=\"mini-card\"><strong>2. Leia</strong><p>Observe o objeto USDBRL.</p></div>\n            <div class=\"mini-card\"><strong>3. Exiba</strong><p>Mostre os três valores na tela.</p></div>\n          </div>\n          <div class=\"tagline\"><strong>Conceito novo:</strong> o JSON possui dados dentro de um objeto interno.</div>\n        </div>\n      </div>\n      <div class=\"mockup-wrap\"><img src=\"../img/reactnative/cotacao_dolar.webp\" alt=\"Exercício Cotação do Dólar\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\"></div>\n    </div>\n    <div class=\"obs\"><strong>Observação:</strong> para acessar a cotação, o caminho será maior que no ViaCEP.</div>\n  </section>\n\n  <section id=\"exercise-clean-3\" class=\"exercise-clean-section\">\n    <div class=\"exercise-grid\">\n      <div class=\"panel brief\">\n        <div class=\"panel-title\">Enunciado</div>\n        <div class=\"panel-body\">\n          <h3>Clima Atual</h3>\n          <p>Crie um aplicativo simples que consulte a temperatura e o vento atual da cidade de São Paulo.</p>\n          <ul>\n            <li>API: https://api.open-meteo.com/v1/forecast?latitude=-23.5505&amp;longitude=-46.6333&amp;current_weather=true</li>\n            <li>Usar latitude e longitude de São Paulo.</li>\n            <li>Exibir: cidade, temperatura e velocidade do vento.</li>\n          </ul>\n          <div class=\"exercise-guide-inline\">\n            <div class=\"mini-card\"><strong>1. Local</strong><p>A API usa latitude e longitude.</p></div>\n            <div class=\"mini-card\"><strong>2. Consulte</strong><p>Faça a requisição à API.</p></div>\n            <div class=\"mini-card\"><strong>3. Exiba</strong><p>Mostre apenas os dados principais.</p></div>\n          </div>\n          <div class=\"tagline\"><strong>Conceito novo:</strong> a consulta depende de parâmetros na URL.</div>\n        </div>\n      </div>\n      <div class=\"mockup-wrap\"><img src=\"../img/reactnative/clima_atual.webp\" alt=\"Exercício Clima Atual\" style=\"max-width:100%;max-height:100%;object-fit:contain;display:block;\"></div>\n    </div>\n    <div class=\"obs\"><strong>Observação:</strong> latitude e longitude não precisam aparecer na tela do app, mas devem ser entendidas pelo aluno.</div>\n  </section>\n</div>\n"
                }
        ]
}

    };

    let currentModuleKey = 'fundamentosMobile';

    const moduleMenu = document.getElementById('moduleMenu');
    const menu = document.getElementById('menu');

    function renderModuleMenu() {
      moduleMenu.innerHTML = '';
      Object.entries(modules).forEach(([key, module]) => {
        const btn = document.createElement('button');
        btn.className = 'module-btn';
        btn.textContent = module.title;
        btn.onclick = () => {
          currentModuleKey = key;
          renderModuleMenu();
          renderStepMenu();
          showStep(modules[currentModuleKey].steps[0].id);
        };
        btn.id = `module-${key}`;
        if (key === currentModuleKey) btn.classList.add('active');
        moduleMenu.appendChild(btn);
      });
    }

    function renderStepMenu() {
      menu.innerHTML = '<h3>Etapas</h3>';
      modules[currentModuleKey].steps.forEach(step => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = step.menu;
        btn.onclick = () => showStep(step.id);
        btn.id = `btn-${currentModuleKey}-${step.id}`;
        menu.appendChild(btn);
      });
    }

    function previewHTML(step) {
      if (step === 0) {
        return `<div class="snack-real-img-wrap">
          <img class="snack-real-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB3oAAAO5CAYAAAD/9iTgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lSURBVHhe7N13eFRl2sfx7ySTZJKQBAIJJJDQQpPeBEGQIih2X1FYG4vroivWVdRV2cbquuLqWnBZRBEVl+aCotKkCNJ7bwklCQkkkEbKpM77x5TMnHQIEPD3ua5zyTzPc8qcc3IS5577fkw2m82GiIiIiIiIiIiIiIiIiIhcMUzGQK/NZqOoqAir1UpBQQH5+fmUlJS4DxERERERERERERERERERkYvEy8sLPz8/fH19sVgsmM1mTCaTxxiPQK/NZiMzM5Pc3Fz8/f1dK3p7e3usJCIiIiIiIiIiIiIiIiIiF0dxcTFWq5XCwkJyc3MJCAggJCTEI9jrCvQWFBRw9uxZfH19adiwoft2RERERERERERERERERETkMjl79iwFBQU0atQIHx8fcAZ6S0pKOH36NKGhofj5+RnXExERERERERERERERERGRy8hqtZKRkUF4eDheXl542Ww2MjIy8Pb2VpBXRERERERERERERERERKQOslgseHl5kZmZic1mw6ugoIC8vDzCw8ONY0VEREREREREREREREREpI4IDw8nJyeHgoICvLKzs/H19TWOERERERERERERERERERGROsZisZCTk2PP6PX39zf2i4iIiIiIiIiIiIiIiIhIHWM2m8nPz1egV0RERERERERERERERETkShEYGEhBQQGmuLg4W6tWrYz9IiIiIiIiIiIiIiIiV7yXFucyb08B2fk2Y5eUo56fiXs7+/KPEQHGLhGpQ44ePYqXsVFERERERERERERERORq8NLiXGZszVeQtway823M2JrPS4tzjV0iUsco0CsiIiIiIiIiIiIiIleleXsKjE1STTp3InWfAr0iIiIiIiIiIiIiInJVUibv+dO5E6n7NEevyBXk3LlzxMfHk5mZ6dEeEhJCdHQ0QUFBHu0iIiIiIiIiIiIiv2Thk9KNTVIDKRMbGJtEpI7QHL1Xop8m0b5HD9o/MJMTxr4LlTCTUT160L7HJNYY+y6QNS0La5GxVaqrpKSEvXv3cujQISIjI+nXr5/HEhkZyaFDh9i7dy8lJSXG1UVEREREREREREREROQqo0Cv07rX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" alt="Tela real do Snack Expo com o app Agenda de Contatos" />
        </div>`;
      }
      if (step === 1) return ``;
      let html = `<div class="mock-card">`;
      if (step >= 3) html += `<div class="mock-title">${step >= 4 ? 'Agenda de Contatos' : ''}</div>`;
      if (step >= 5) {
        html += `<div class="mock-body"><div class="mock-row"><div class="mock-photo-box">`;
        if (step >= 6) html += `<div class="mock-avatar">👤</div>`;
        html += `</div>`;
        if (step >= 7) {
          html += `<div class="mock-data">
            <div class="mock-label">Nome</div><div class="mock-input"></div>
            <div class="mock-label">Telefone</div><div class="mock-input"></div>
            <div class="mock-label">E-mail</div><div class="mock-input"></div>
          </div>`;
        }
        html += `</div>`;
        if (step >= 8) html += `<div class="mock-actions">${step >= 9 ? '<div class="mock-btn gray">Novo</div><div class="mock-btn gray">Editar</div><div class="mock-btn gray">Excluir</div>' : ''}</div>`;
        if (step >= 10) html += `<div class="mock-final"><div class="mock-btn green">Salvar</div><div class="mock-btn red">Cancelar</div></div>`;
        html += `</div>`;
      }
      html += `</div>`;
      return html;
    }

    function snackIntroPreview() {
      return `
        <div class="snack-intro-top-layout">
          <section class="snack-top-guide-card">
            <div class="snack-top-guide-title">Como abrir o Snack</div>

            <div class="snack-top-guide-list">
              <div class="snack-top-step">
                <span class="snack-top-num">1</span>
                <span>Acesse:<br><span class="snack-top-url">snack.expo.dev</span></span>
              </div>

              <div class="snack-top-step">
                <span class="snack-top-num">2</span>
                <span>Faça login com sua conta Google.</span>
              </div>

              <div class="snack-top-step">
                <span class="snack-top-num">3</span>
                <span>Avatar → <b>My Snacks</b> → <b>+ New Snack</b>.</span>
              </div>

              <div class="snack-top-step">
                <span class="snack-top-num">4</span>
                <span>Apague o código inicial.</span>
              </div>

              <div class="snack-top-step">
                <span class="snack-top-num">5</span>
                <span>Cole o código da aula.</span>
              </div>

              <div class="snack-top-step">
                <span class="snack-top-num">6</span>
                <span>O preview aparece automaticamente.</span>
              </div>

              <div class="snack-top-step">
                <span class="snack-top-num">7</span>
                <span>Clique no botão azul <span class="snack-top-save">Save</span>.</span>
              </div>
            </div>
          </section>

          <div class="snack-large-image-box">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdoAAAOtCAYAAACWhdd9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lSURBVHhe7L15eBRluvd//nv/+b3vNbzLMedMzsAMCjOOo2Y2dI5z5Iwz4pnNmXGO20gcR1EYwY3gxqKigrijCTsOCgqIgKKEfZM9BAgECAmQpUlCEgjp7Dvf33U/1dVdXVXd6e7qNXy/1/W5pKvqeeqp6gyjn7pz1z+BYRiGYRiGYRiGYRiGYRiGYZiI80/mDQzDMAzDMAzDMAzDMAzDMAzDhB6KdoZhGIZhGIZhGIZhGIZhGIZxEIp2hmEYhmEYhmEYhmEYJiZ5dWsbvv+2G//88kX8v6mkLwa91oCxX7TgYtsl861kGCbJQ9HOMAzDMAzDMAzDMAzDRD0i2UUcm2Uy6Zu/f07ZzjCpFop2hmEYhmEYhmEYhmEYJur52axGVrJHiDygqGzsNd9ShmGSOBTtDMMwDMMwDMMwDMMwTNRz3btui0AmoXPWTdHOMKkUinaGSYE0NTXh2LFj2L17tx+yTfYxDMMwDMMwDMMwTLKFot0ZFO0Mk1qhaE+VbJ+KoRkZGHrvIpSb9zmNaxHulLkzpmKHeZ/DtNc3or3bvJUJNb29vSgsLMSBAwdw8eJF8261TfbJMXIswzAMwzAMwzAMwyRLKNqdQdHOMKkVivZdE5GWlo4Baem4fXGdeW/yZMNYtcYBw+dGX7SXzsUwdQ/GYqN5XySpz0f2Azd676uQdksW1lSbD4xiWkqwY00u1hRE9h3WFuRizZpdKG4x70lcRJzv27cPlZWV5l2WyDFyLGU7wzAMwzAMwzAMkyyhaHcGRTvDpFYue9GeN3GwVwYPuGMpas0HJEtSRbSfmotb0z33M/1qrQp/iOfztROxo8M8IErZ73lgMnaLeU8IqcPiO2SNw5Fdat6XuEiVeiiSXY8cK2MYhmEYhmEYhmEYJhlC0e4MinaGSa3EVLRXVVXhyy+/xFtvvYU1a9aoz8mVfEwYmI4BI2bglUwRrXdhcRDT3l5fB3dfFc8tjaitbUS7ebslHXDX1sEdTDx3yzGeuYKKdm2u2qCTmeOZW9q69CXaQ72m7kK88hNNqg8amwu3oWWMO3cuFp8yHuxLSPfVk3Z3gOvU709A0R7sHrmQPbwP0a5/F8Ha4HTIferjOw0x0nddWsLYZdeuXQq7yBj2bGcYhmEYhmEYhmGSIRTtzqBoZ5jUSkxEe3NzM3bs2IGlS5eiuLhYbSspKcGyZcuwfft2td+cTz75BNOnT8cbb7yBw4cPm3fHJp4q6KHTClG7+K6A7WNqc7Nwswh5QysUnVEbPAfVb8GkWwzV8ekZGLXKMJcus5/YAveWqRimV32npePWuSW+41QakTfjdl/rlfThGDf2dotoby/dguyxt/m1aBmQMRYr+mjRUrtqLIZ6z5+BO5/IxFD1Z5No7+uaTGlfNUo7bshE5AUT0iodKF461u8+DLgpC2tKjZZaF+BZ2Chruclw7G/molidw4X5917t267juU993iPpfW/z3Xq/144SLB473G/fsPG5KDcus7sOK8Zm+B0z9IG5yKs3HBNm5CWndj3ZJcFEu4yRsQzDMAzDMAzDMAyT6FC0O4OinWFSK1EX7evXr8fChQuRn5+PS5cu+e2Tz7J9wYIFeP/9973bX331VSXi9SxZsgTLly/3fo5VtLYxgzFhv0GEZ672r9zePxGDZPuQUcjeVYgjS7NwvXxOH47M8VlYLJ063FswytMeZdjYuVixaCpuvVY+X63NLdHn94jloXeMxajf63LWv5K6OOc2z/YM3DomC+MyDaLYINqPTLvRO9e48Vm4UxfRQVrguDeM1a5H1pqZhXFj7jJId4NoD+WaTNn4hOfapvXdvsR7jenDcef4LMO9uA3Z3sp3XbR77lvGXRg15nbPQ4F0DMtxeUR7hk+W6+1qPC+N7fMeqZfM+kR92rXyUtgMTNouAr0E2SM8x9+UiXHjx3rugfwWhC76geIZ2jkG/WYq5q9ZrYn9IWOxxu273nCze/du86aQ42QswzAMwzAMwzAMw0QrFO3OoGiPX6qqq1HhcqG7u8/KUYYJmKiJ9jNnzmDFihV4+eWXsWrVKpw/f958iIpIwBEjRmDAgAFobGzEF198Yekr3dHRgX//93/32xb9FOIVJU3HYqP635D+ORMrDG1M9B7ud67ylTBvHCvH+eS4LlqHzTRUplcvwq0iZPVWJt72LMMxKb/Rc1Ad5v9GE7fe+VtWI1MddzVGbdCPA9rXeKrFja1jWupQbqyablmNO9XYQC1wSrytXW7OMay1aKaldUxI1+QXvc+5/72yjfcab8QrBb7NuhQf8ID+sMMn2odNzYfurWsXeKr7DQ9FynM8VefmtYV0j7ZglOe7MT7w8Fbo/2QGjuh/zxra42R6rlP7ebgak/INYzv6uAd9JJgsD1bRLgk2lmEYhmEYhmEYhmHiFYp2ZySDaP/8y6/w+lvv4LEnx2P8M88h69nn8XjWBHzw4UcoPnWq34jp3/zhT7juJzfgbGWytb1mJPIgZO/+PJwpLU3qnznHol2EulSxf/7553C5pMJYa3vx4YcfYu/evejs7FTb6urq8PjjjyM9PR3/9E//hJ///OdKtL/55pumGaEq4v/n//yf5s3RTcEMrTLaIGvtpLq+bVSud5OncttTCe+VwRkYtSAXa9boTNWktC7GA/RB1yStXp0tzjdLk7vXzsARw3HBerS3n9qFNYtmYNz4TK3aPlCvcddc3Kz2+z9MsK4txGvyi8tb/d2naNev5aaZ0BoLeXLKLPx9ot3bykVicy8CinZPgt8je9Hu/W6MDxvkIcRM/3N5z50+HKNytqA4xH7zwRJMlsv7DoRACTaWYRiGYRiGYRiGYeIVinZnJFK0i2C/8uprNd8RhF/95vc4VFCQ1PIzlGQM+5m6nrLyCvMuJoFZs3Ythvzger+fue9n/BiTXngJFy82mA9PeByJ9vnz5+Ojjz6y7QktVel79uxR+//+97/jyiuvxP/4H/9DSXajaM/OzvYbt3XrVnzve9/D//pf/8tve7RzZJqnVclArVWIQm8/Ymwfo7eOGTEDO1x1KN81Q5PV3j7kvipxW8IV7TYSOeD2U0uRmeE5z8AM3Jw5ytNLPoBoD7AG6/YQr8mUQGLaHG+luFmKd+R6Kt1HYYVy9VEQ7SHdIzvR3oEVD9ic2/jbBd7K+0bk5eh97j33YMoubwV+JAkmyynaGYZhGIZhGIZhmFQIRbszEiXapXr4+xk/URJ93sIP8OAjj+Jfv32Vnxua9vqbeHLC00gfPBTvzZqNlpYoVB0mMBTtyRejZM/82yi8+trreHz8BHzrqu+qbc9MnJx0st2RaP/jH/+IL7/8Em63vVKsqKhQle3f//738X/+z//xSnajaJdK9ylTpqh5HnnkEVx99dVq/7Bhw8zTRTF6m5h0DNIlu0Lv1W2s+O7wCmQvGaOw2NJH/EZM2lWH2loT9Z7qbovM1hJQtJurvS1yOR+TVA/1qzFqTZ2p1Urfon2N8UGjZW0hXpMp+gtlpdWK39rNsVyLJ1GvaA/1HtmJdpvvxhNzRbs3HXWqh7/+gtfblwZ+cWxfCfYy1GCinS9DZRiGYRiGYRiGYZIlFO3OSJRo16vZV67+QrXGLa9wYcOmLSg8dhxFJ4uxZdt2tLVpluW6n9yIvz70MC7UG/v2pl4o2pMvP77x5+o7Wf7ZSrS1+96oKQ+C5OdOKtulr34yxZFoX7duHZYtW4YXXnhBVdHqLz9taGjAli1bVM926d0u+eSTT5CRkYFvfOMbfqJdMmfOHPzrv/4r/r//7//DkCFDcMstt3jHxSR62xiz6JUq5kxNkur9t7FrItKkTcwuoN1dh1q3VTLr7WUGjd0SuIrZIrO1WGRu7VLcro7z71/uXprpL5f1+X5iEPLd+ZikHiAEEO3IxwRP1f6dq3z935E/1VON7VtbSNdkTssWjPLMf/PMEr+XyrYXzcW4uZ5Kd2+P9uF40/vAwiCwbXq0RyTaQ75H9qLdW3k/fKb3xafygtQ3PWvy/ozU18FtfHCR61mfWcSHkaamJhw4cMC8WSVYj3YZI2MZhmEYhmEYhmEup1xscGN//iHs3pfnx4FDBWhpbfX6injmdFk59uble9dypPA4WlvbErKWRCUeov2at92YtbcdByt7cLymB18VdeIvS5uRPs16bKqRLKI9WCjakzMHDh7CL//rt8iZMxdNzc22+1Z9sQbtBoGdTNGr2d99PwdNTf7rl8hvWgz+3g8sEj7RcSzaJbW1tUqWv/vuu1i5cqXqsX748GHz4SqvvfYaBg4ciCuuuEJVs+upr69XkrC4uBhtbW1+Y6Id/UWfQ6f5v4RV4q3K9she/fOgO2dghbdXeS42Frjgde7uLRilKqfTMfT3UzF/TS5W5GTh1mvvwvxqzzGhinY0emW/9Py+c3wWxmV6JLJRLnfrcvhq3DplEdYsmopbPVX6ZmFsjPeFo2kZuHVMFsaNud3Q8sSwtlCuySbuDWO1VjvCkNvU+u8cof+mgE+sF+fcFuAab0O25bcF+hbt0uInTY2/EZk5qzF/8RbUhnyPfC9yHfSbqZi/Yi5WyI9Gd4m37/yAmzIxTq7lJs/nEXM1+a4fc+3tmLRIfjYWYdyN2jFeER9h5CXBlZWV5s0BI8eaXyzMMAzDMAzDMAxzOeTQkUI89dwLGP3E035MmPwyKs5Worc3/sLyo08+xbgJz/utZ2zW81j5xVdojbH3SJbEWrTfkNOInWXd6OrxP29L1yW8s7Md35nRYBmTSlC0xy/9SbSLSL/6+h+r63k3O8ci2td8tRZDrrleVYQnq2x/8ZVpqkXMzt27bfv/61XtydY+JiqiXc/OnTvx29/+FkuXLsW5c+f89uk5cuQI/vrXv+L666/H+++/r8R6vKP1H9dfZmqKV4iP0trHdBcG7leefjvm67K2OhfjdAnrIe2WsVhcEGbrGIk7H6/8Xqso184zHJO2LNWksUEuuzdkmfqCb8GaZ2RcYNGO7jqsGOvpT6/IwJ2Lc/GmWrupd3tf1xQg7vy5vr7oOhmjkJ1vqKK36Ws+4NpM0zFhiHY0YuMTxuvS2v+EfI9OzcWtnpYvgvchjDsf2fca503H0HvnIs9b5t+IvAVjPX3fjedx1qNdIv8iuG/fvpBkuxwjxybiXx4ZhmEYhmEYhmESHV20f/jJclSfq0X9xQZFg9uNnh6ThY1TRLSPn/giCo4eU202jh47gamvvY1Hxz+Hz79ap95t198Ta9H+1s52NHVcwukLPbjnk2b8cKYb7+5qx/bSbvz2H03411esY1KJZBHtWc9OxMbNW21/ZinakytGyZ754CjUnT9vPkRl3oIP8J3vXpO0sj1U0S6922sNhdyJjiPRvn79er/P0qv9008/RW5uLl566SXVPqa1tVXtO3/+PF5++WX89Kc/Va1j7r77biXZpTf72rVrA4r5REervL4NbxYYepQXbcEET6WzuX+3ai9TWwd3FN4Boc3ViHbrz5MvHY3a+ax/1wVPS+jjIr4mzzns2u14090Bd5C+7+HGu1bjdKHeo2Br0e9XkHvQXm9zbocRcS5V6vLbHnY922Wb7JNjKNkZhmEYhmEYhrlco4v2ZZ99jvZ2//8oqz1/Hm+9PxvT33oPVdXn1H877dyzDy9Mex25G7egsakZCxd/gtkLP8RnX3yFCZOm4u9PPYuXZ7yN0vIK739riezZsGU7JkyeijFPPoOnnn8Bm7buQEdHp9/59BhFe3e3JvvLKirw/NRpeGn6m6ipq1NtZALP67sO+fOqNWuRNekl7zFf79mHrq4uHDl2ApNfmaG2jx3/HOb9YzEuXLiYFC1qYi3a5+d1oLXrEvLOduN7b9lXr/91RTO+LutCSycgd0Sq37ef6caPZroxZUMrXO5eHKvpwU/fb8Q/v3wRg6Y3YNOpLtQ2X8L0bW349msNmLG9HVWNvei9pI3fUxEfkZ8o0S4RkakLThHt3/zOEDz2VBZq6877/WxRtCdPQpXsepJZtktrmO8EaQ2Tf/CQemFvv6po/+yzz/w+66Jd0tnZiUWLFmHGjBmYPn266s9ufBmqiHa9R/vJkydVD/dZs2Yl2VuKPS/TNL+YVHqYT9WqnG9fnDxPTZj+G+m7Li85lXchGJFt7MnOMAzDMAzDMMzlnkAV7SLBRQpu27kbTz43RYn4mto6Jd2nvTkT5y/UK4nz3pwFqtJcWs188ukqzJq/COMmTPQeI7L901Vr8NiEiXj1jXfxxdoNePn1t9XnLdt3orOzy7wkW9He0dmJ7HkfYPzzL6oKdxGZat6nrfNu3v61cityzJJPV6r16MfIg4PDhcdQVVODqTPexqSXX8OGLduwcs1a5Mz/QD1cuBxE++SNbTjf0gvR0cXne9TnQa/5C/d5+ztQ39qLI+e6saG4CxdaL6GzF/ggv0NVwR+v7UFj+yVM3tCKga81IHN5M8ou9qLS3Yu7P2nG+7vb0dhxCfWtl5B7sguF53rQ2QP156Fv2sv9aBFP0S4/45NfehmPPv6khWE//wX+X/og5cGu+eFP8MGHi72Ftakq2k+fKcVLr07HtBlvYMabb+PbQ7+vru+5yS+oz89MnIK8A/nqYVYqxCjZ7w9BsutJVtl+WYr25557Dnl5ed5fwzKKdj2nT5/GlVde6SfZzaJd+rOvWrUKv/jFL3DixAm/8YlNB1Y84GkX8vssZK/QenBP+r2nlYjep5thGIZhGIZhGIZhmIQlUI92EewiyqT9RfbcD/DMlFew4MOPMX7iS8jLP6wktuwT0f7sC6/gTFm5Eo6dXV3Imf8PVTleUHgMFa5KTHn1dbw0/S1vJXpNbS1emPYGXnrNt80YO9Fu3i7zvvDqG6Z56/zmPXaiSFXZz3gnRz08MJ6nrMKFiVOnYdbCD9HUnEyFi1piLdqFmbvacbGtV1WrCyLe3/7a159dKtR/8I4baZ7q89l7tSr4/S6pgndjVWEn2rqAZUc6cdUbDXjra60dzbYz3bhjcTMKqnpwse0SXtqsSfw/L2lCyflelF/sVVXt/xLDqvZkFO3/9fs/YtvX8nBJ+02OVBXt77yXrV62+X/+5d/wv9PSLaQN/A6ezHomqSRusPzwhn8PW7LrSUbZrr8M9dkAIn3N2lwM/UEG3nk/O6kKUB2J9i+++EL1ZZdqdKlKtxPt8j9U6cduJ9pFsO/ZswcPPfSQ2nbttdfC5fJvxZLwdLiwZspdGHat3jN9MIbedBcmLS2Em5KdYRiGYRiGYRiGYRIeXbTPnD0f23ftwe59eQqR1nrrl9Nl5Xj+pWmqxYpUlesvCNRF+3Mvvur34tTVX+XisacnKVm/P/+Qmn/Rx8tUv3XjOJHgRSdPWXrB24l2OWbBRx9jvAj8o8dw4FCBkvn/UPNqL0iVed+fs1DNe+JkCb5avwlPPDMZn69db+mRLQ8E5n+4RL1kVeZZvuoLJaXM0j9RiYdoF/5rYROWFXTgQmsv5NI7uy9h/v4ODH69QYn2Z3JbVXsZd/sl1f5Foot22VfX0osTNT34/tturD3ZqUS7vEx13BctSna3d2t94I/X9OBEbY+ap6a5Fw+taEb6NOt6okU8Rbs50jqmwuVSD6OkdczQazPw1sz30Wx6sWaqinbJn+6+F//8b9/2vm/PyI9uvAmVVdXmIUkZ+a6u/fEwte5nJ01BQ4NVTAfLiy+/im9d+V01fteePbY90eMdvQe7yH/5OTTnd3/6b/XwR34zIZniSLRv2KC9oVL6q0uf9WXLlmHu3Ll+xwQS7SNGjMDjjz+OAQMGeLeJaK+oSN1eSAzDMAzDMAzDMAzDxD/BerTrOVRQqOS1VLpLi5lWg9i2E+3LV36hWrj0Jdqf0tvAhCDa3Y1NeO2t91VlfVm5CwcPHwko2mVe6b/+1fqNSrSv27RFtZ4xR9abf7hAtZWR3vLPvvCqeqiQDO/xipdo17nmbTe+KupCRzeUEBdx/unRTrR1a2J8WUEnVh+TCnZfRfsv5jXhSHUP6lou4dWtbSit71WCW9rGPLzKKtp1dpZ14b+XNOObr1rXES0SJdrNL0Od8tLLKC6xPkySpLJoP3S4ABk/vRH/O+3ffJL9inT8y8DvYPWaL9W1p0oile1Gyf7pylVJUc2uJ1D7GL2aPdlehCqJimjXk5+fr+T5jh07vE+4Aon2K664wrKNop1hGIZhGIZhGIZhmHDTl2hvbGrCa++8jxnvZCuJLRXlB48c9WsdYxTteusYvZf6qTOlqhpeervr7VukD/rU17T+6JXyktU+WsfImPWbt+KJZ6fg3Zx5ak3yslV5OarMe+Gi9gJTafvgnbfqHPIPH1XzSBW+vLg1UGSsvCD1yWenBJTy8U6sRfsfPmrCy1va8IO33epFprJNbw0jov1vn7WgqK5H9WV/8qtWfGt6g+q53tLpE+0yZmmBVsUuL0mVfuzri7X+67/5oEn1cG/uvIQZ27UXo5rXEEuSRbQHSyqLdsm0197EkGuuw//+F022/8ugwXjk0cdT8nrCle3JKtnlOia9+BK+dZW2NrNQf+mVad59v/z173Dg4MGkqMKXRFW0S+uY5cuXK+G+cOFCHD58OKBot+O6665DeXm535wMwzAMwzAMwzAMwzDBoot26aM++4OPMG/REsU/lixDeYULX63biPHPvaDayYjcluNEboss11+GKu1XRIBv3bFL9XGXava3s+fA3diovZB0+UrVSkZE/bavd+G92QswLut5fLpaehpbZaSI9sefnoQ3Zs7C3H8sxssz3lYvXJWK8zNlFcqX6C861efdaph3uWde6b3+1vtz1Ppy5n2gWuPIdW3ZsRMnik/hzfdmqfVUVtfgg8VL1TnlOpPhJY6xFO0/m9WI3eXd6sWk8qLSTSVd2HSqS/VT776k9Vy/8+NmFNb0qAp2qXT/8GCHqmyX9jFG0Z61thW1Lb1o7rikJP30bT6pPmdfB5o6L6Gh7RIW5Xdg2tY2Vc3++g5fH/hYQdEe+8hDtZt/NQL/51+/pcTtt4derdqRJEv7pXATqmxPVsmuv+RU1iVtYya9MBXHTmgvjtYj1zhr7jzcee9I/OugK9Vx2bPnJEWvdkeifdGiRX6fjT3a5c9bt25V4v173/ueRarb8X//7/+laGcYhmEYhmEYhmEYJqwEehnqY09PRO7GLXjuxWl4J2eukuaSDVu248nnXlDtYS42uJVof/K5KZj62lsYm/WcGjvtzZmqR7PegkVazYjgFiku+0V8L1+1Bs0t9i8hFdE+bsLz3rVIJbuMr6/XKtf16POKIPfOu3INmg0vN607fwHvzpqn9unHrFi9BiWnS70SXrZL6xiR7U1BKt/jmViKduH+T5uR5+pGh6GjifRnF6meMVOrcpcKd6lS1/ftrdBk/L4Kn2gfPrdJvfS0pxdwNfTiN4aXnEqP908Od6o59G9NWsnoL081rymaULTHJ+s3bsIPh/07Bl71Pcxb+A+0tLSaD0mpaLL9BiWr383O8b6PQs+ar9ZiyDXXJ51k1/uyy7rM7WICRW8jI7J95edfhDQmlnEk2kWqr1+/Huc9b7O1exmqiPNQRLu0kpkyZYp3LoZhGIZhGIZhGIZhmFjH3DpGBLeItkAVrXJ8g7sx6hXjoczb2tpme4yMlQcGHR2dAdediMRatOvckNOIB1e04G8rWvDdN31tZHREpD/0WQv+c14j/tUj0MNF+r//9VPtHN+zOUcsSJRoF+EpVcUi0EVC79y9x5ann5+E9MFD8d6s2WgJ8MApVfLne+/Dv//nLera+0PkOm773R+w6gv5zRh/+SyiffivbrPdl8g88uhjqkI9VMmuR6+CVy9OrbC+ODWecSTaJceOHcNHH32EPXv2oLa21iLa+2od8y//8i/44x//qOaJZ9rddXDH7O8AFxY/cBcm7Q/+1I+JbuS9AB98uBjV52rMu5gkzN59+/Hl2nXmzQzDMAzDMAzDMHGNWbQnw0tE+0viJdr7K4kS7ZIHR/8d/zJwsO8loQFIlWp2Ec85s+fi8fET8OjjT1p4+O/jMGrMWPz9sScs+3SOFBYmTS/w/pgf3fhzb7uYGW++HRY3/eJXuO4nN6S+aJd0dnYq0T5nzhy89dZbfvuCiXYR7DKuo49fQ4lFNo5Nx7CcWN18F+bfORwTtoR/XYcKChRM+KFoT61QtDMMwzAMwzAMkwyhaI9dKNqdkUjRLjmQf1BVF3+8bLktxadOpYx4/uLLr3DV96+zPCgIh5k5s5R7YqIfY9sYJ+zctTuhP5NREe16qqqq8NVXX2H16tWoqKhQ2+xE+zXXXKOq4BPZJia2oj3yiHwUmPBD0Z5aoWhnGIZhGIZhGCYZIq1WpIdxg9uNnh5Ds2/GcSjanZFo0d6fIiJXenibHxaEyrYdXydVm5X+GPmO9u7Ps7QoCpUzpaUJleySqIp2PWfOnMGKFSuwZcsW1NfXe0V7WloaXnrpJZSWlpqHxD1BRXt1LsaNuFp7GpJxF17Zor0sRaWjBPMfuBGDhgxG2sAMDM0QMjHfbyoX5t+bgUnbPR+3T8XQKVtQvGAUhqanY0B6BkatqjMOUNm8dTveePtdvDXzfeTMnY8yz4thTxSdxPuz5+K1N97CilWrVS98uxw8XIA3331P/cpE7vqNaGltVT9gR44WYta8BWq7iGh58Yr8FoK83KLc80BEonrsr1yFixcb1AOS/XkH8M572WpN27/e6fdUX/5FZPPWbWpuPTLnF1+tRWVllfocbN1yrcbKfblWWY/0mZN1y59PnT6jxq/fuNl7nB55A/ScBQvV3B9+/AkaGtxe0Z5/6DAW/OND733Q/0cm+zdu3qLur+xbt2GTd5+cf9OWrWqs3EPh+Iki7/mkN5Rcm9wPQb6fhYs+Qm1dnepDtnrNV2pOWa+sTY/dd2JMsDXJ/Za/yGW7zCHfgfEvDLk/IqqN2w4cPIRde/aqP9dfvIglS5ereyT3yrguuffyHeiR65Dv3rg++Y43bNqMwmPH1WdZj3wXcg49X+/ajYIjR9Wfg51P7u/mLduQdyBf/TydKS3zE+0yt+yXnzmGYRiGYRiGYRimf4Si3RkU7QyTWomJaNdTUFCA+fPn46qrrsLtt9+uPidLAor2li0YN+RqZC51QZ5TtRfNxM1pN+IVz9LzplyN66fmq32oz8WoG7Ow0dLr3YXs4ekYtcHzccNYDEjLwJ0LCtHeDbjXjEXawInIM41qb+/Aqi++xI6du5SAFYFacuo05n+wSIlQEZ979u5TYlneSm5MTW0tFi35WMlsOa7K82Z0eRGKSFU5XraLuBWJLfvkaY9IXj0ixkUY65J96aefKcEs6/gqd73ab4zI0mUrPlOCXSKV5Is/WabO1de6RbAaK/fl+I+Xfarmkmufu+ADJecbGxstFQVy7Huz5uBsZaWaW65drlPGiQBf9fkaJYzlgYK8LVp/YCHHnSwuVtcn++V+6dckc4oAzss/qM4nkl2kvb5eeagg907OJ/PK2pqamtR65R7I9en75DpE/Af6TowJtiYR1TKXXJt8B9XV5/zGypvt5Z7qFfz6WuR6ZW2yfpHgcm55+CH3xnX2rDrWXE0uc8jx5l+Bkp8d+e4l+pxyf2U98rMhYl2+h77OJ/dXHibIfZJ1yvUa17Bvf56S+Ob7wzAMwzAMwzAMw6RuKNqdQdHOMKmVmIr2ZE4g0d6+KhMDhs+Fpma1HJmWgQFPiJB2IXuEQaB7hPo4X2Gw33Y/0W6cszsXo9LuwuJa3wg9RgEt0lHEu1FIi9wUGWusFpacv3BBSWXZHugN4yLypTpZF9oiV0XUirCVc4mAP3b8hJ9A1SOi1NzmQ46TufQKdlmnXvne17r7Eu0i6Y3n12M3tx671jFShW7ueS/3R6S2cR7j+SUijhctXqLuq1TZy0MHOUYix8hnedAga5R7ZXwbslybHBvKd6LHbk0izGW8yPhAkfstD0wkct1LP12h1iLfo/F69GOlql4Sqmg3PjxRVelbt6mHMfIgQa5PziH7+jqf3A+5n8b7pK+hqLhYVdPLAwWGYRiGYRiGYRim/4Si3RkU7QyTWqFoN6U8ZzgGjPVVeXu3jdBEufw5bUwu3NKt49Rc3Jw+CitCqWj3k/dbMCptOLJtOugYBbRIS5GXuuA1bpMWHOZIGxgRs9K2Q+SlRASuVGfPmjdf9aKS+XUhKlXJUpktwljEqQhVvQWLtJp5L2e2qkrWMbYa0SOSV4SqzCeyVMRzKOvuS7Sbhbkeu7n12I0znkdeuivtYeT+SIsWEb+BRLt5LjlOKrv1ynLZJ/dKxklrl+w58/zulV5Fb/edGBNsTfp3J9+DPKSwe/AgDzlk3SKw9QcdErNI17fJAwJ5cGDeH0i0y7yfLF+Bqupz6jct5HpFtss/Ra7r1e7m+fRt+vnM91ffr37OZs1R5za31WEYhmEYhmEYhmFSOxTtzqBoZ5jUCkW7KbWL78KAO5bCWENcPNMg34vm4tZbbsPN0pt9xFjMzzf0b/cmOqJdpK7Ia2NFtohKEeJ2olmPVEDrLVOEjz5Z6pWYZuEpPclF9Mp2qf6WinGpUA4kds2pO39eVXRLixCR9nqbk77WHalot5tbj90443nkOvX2L+Z95vtinkvavsg9kfsq16HfG/3+Giu17WL8TowJtiY9sk+q4mW8VJEboz8skX7tUmmu/3aB3B+5T8b+7dK2RZfhZjEeSLRLZI3S2kV+40F/uCCyXbaLbJf0dT7z/ZXIGqTfvaxZ2saIyGcYhmEYhmEYhmH6TyjanUHRzjCpFYp2c6qX4va04XizqEP77N6CUUMGY9QG7fPGJ9IxKtd/iDWRi3aRl3pVskQEprE1iVRFy4s+pXe5MdLqRF5iKhFZvnL1FzhZUqLGy59lmwjb3Xv3+QlPEafSbmT5Zyv95L2IVL2CWyJ9y+36Z8s2kanSG1xvYSLpa90iYfV1iZyXlimhiHaJzP2Pj5aoa5bIQwQ5j904XVzrgv5o4TG1XY4XYR6qaJcWKHI/zZFzy1qML06VCm5JoO9ET19rkrH6NcrDD1mfVJabIz3dRfbrDzok8gBE+tzrDwSkT7zcf/388k9Zt8wra9uybbuqLrcT7SLTpcWQ/mJZ+ZmR71uq1XXx39f5zPdXYpT9crxU88sDDYZhGIZhGIZhGKZ/hKLdGRTtDJNauaxF+4A0f3Tx7t41FcPS0zEoIwODBg7GrTPy4faMa981EUPTtH1DFbdh1ALffi2Ri3apeH7z3fdUOw0RsCJBt27foba9P3uuaksi7UjM0ft5yzHSakTveS0Cc+Gij9Q22S9CVVrI6MJT780u+6RXux4ZK9vffi9bnVPmtTuvRFrPyHF6NbWkr3WLoJVrfPf9HNWP/fCRI951mSW3Oca5pWWLXJvMbTfOWCEu0lfWKWNE+q5dtyFk0S4V5W+8M9N7LXK/5LcBZC1SrS6tX2Qdsl/mkXsZ6DsxJtCajG1jZN/M7FkBXxYq55LzGB90SGTNcn/l/HKO3Xv3esfrDwjkBaVyPXL/1bptRLt8VzKPPByR6A8I5KGAUZwHO5/5/krMVfXyAEUe+jAMwzAMwzAMwzD9IxTtzqBoZ5jUymUr2vtOB9y1dXB7Ctu11GHxHbfhzVNAu7sOtbV1qHUtxZ0BpHmkEZEplcbmbSJH+3qppoyTl54aI2P0yuVwI2K0r/NKFbOIV6NE1RNs3bIe2RfJuiTB5g4Uu3vbV2TMmq9yVbW13FuR0VJZLg8IjFLf7t4H264n2Jr0l6Ta3Vs9UgkvgtruwYQ+3tjSJZR9kSYWczIMwzAMwzAMwzCpmZ/NasQ/v2wVyKRvBr3WgMrGyHwJwzCJyWUp2s2V7KGiVaJnYrGxfL1+Ke70vBDVfHwo6G1DUjG6wJcWInqv7v4YEevSOqW+/qJ324X6erVN2qgkMvKQQirNpT97pA8sGIZhGIZhGIZhGCYWeXVrmxLGZolM+ubvn7fgYlvohYUMwyQ+l6Vod5LixZkYOvBq3JyZhVF33IihN45Ctu0LUft/RK5L+xYRvf1d8h48XKDaokh7m0+Wr1BtZSpcNj3+4xjp4S591eW3CVoMbX8YhmEYhmEYhmEYJlkisv37b7tZ2R4i8mBi7BeU7AyTiqFojzDt9XVw021edpEK/mBtXBiGYRiGYRiGYRiGYRiGufxC0c4wDMMwDMMwDMMwDMMwDMMwDkLRzjAMwzAMwzAMwzAMwzAMwzAOQtHOMAzDMAzDMAzDMAzDMAzDMA5C0c4wDMMwDMMwDMMwDMMwDMMwDkLRzjAMwzAMwzAMwzAMwzAMwzAOQtHOMAzDMAzDMAzDMAzDMAzDMA5C0c4wDMMwDMMwDMMwDMMwDMMwDkLRzjAMwzAMwzAMwzAMwzAMwzAO8k9lZ6tBCCGEEEIIIYQQQgghhBAf4YQV7QyTgpH/oXf39BJCCCGEEEII6cfUXbiAmtq6sOns6rbMFQhXdS16enrM/9nJMAzDhBmKdoZJwVC0E0IIIYQQQkj/p+78eYtEDwWKdoZhmPiHop1hUjAU7YQQQgghhBDS/6FoZxiGSZ1QtDNMCoainRBCCCGEEEL6PxTtDMMwqROKdoZJwVC0++hqdqMtdxHatn6KrvZ2y34Sf7rKT6JtdY6i/cv56Ko7azkmEVRcyMPeU3NQ01Bk2ZfMuFtrse/UQpys3ojunh7LfkIIIYQQ0n+haGcYhkmdULQzTAomWUR7yelSHCwoRENjk2VfvEhW0d5VV4n2jR+r9Zn3BaOxvRtfllzE0mPnvWwoDW8OJ+jnP1rbYtkXCtr38aGS7eZ9iSZZRfsR18qgEp2inRBCCCHk8oWinWEYJnVC0c4wKZhEi/bWtg4UFJ5AWcVZHD56PKGiPVlxKtp10V3X0oXPTlzALlej5dhYYD5/uPiuu8GyL9GIaN93agHcrTWWfYkkVNEu6zfvI4QQQggh/RuKdoZhmNQJRTvDpGASLdpPl5UruS4kUrR3FO72tSjZm2vZ135gk1btnrsIHScP+B0nFdfyZ+Mc8md9vLdS3rPPWDEv/1SfPXP4WqRUWsf5tVCptFyDGbPo1j8bRbvs06vdlx+/gNKLbX5zyLHB9hvHC/rcUjlv3G7eHwqqbUzuIoto1+7ZCpt75msrY/wuhK5yrfJc3dOtK7TvU76ngh3q/pvHR4oI7IOlS1B18Qj2npqL3cU5OOL6zCu+WzoacbD0Y7XdvE/QRXig/ebxuuwXua5vM2Ie3xfHikqwduN21Jy/aNlHCCGEEEJSG4p25+nt7TVvYhiGiUko2hkmBZNo0a6TaNGuo6S6nWgXEVtVqqSsEuNVpd4qc72PuFe8SyW2CGKR5R6Rrot3/bP3WM9no5yXfcY1RKuiXSS5yHLj58+K6r3yXLZLxbtUvuv791c1e+cTSS7zybz68XbyPdD5Q8Usyb0PGNQ96fGKdv97ts633yTolZD3iHS9HY0cq31vs5SE1x+UmNcSLiLajQK8puEk9p9e6G0xIxXnuvzWpbmxAv14Za6S7fJnc/W5fnwwed5XRXtfULQTQgghhPRfKNqd5UK9G66qGpw8XY6iU2UkQioqq3kPE8D1b1/A/5t6MWX55qsNuP/TZtS1XD4Puy570d7uroO7w7yVYZI7FO3+BBTtImYN1edG+a2EbYAqdZ/09Ulyv7Em8a72m+dzKNoDVaSLODdWmPclxmXs5ycvKhFvVx1vpq/5+sIszL3bPaJdF+veY+WeeSrWzdJcRLxsk/3tGz/RHoJ473Obd795DeFi7t2uy3HZLuJc/mxsN6NXwLd02H+3RnEeSrsap6KdEEIIIYT0XyjaI8+F+gZU1tSio7PTvIsJM6fLz6Krq9u8ud8mGa5X1pDqov3/Ta3HN6e58afFzTjXfHnI9oSJ9vb6EuxYk4sdRY1oT8jPbiM2PpGBAQMzMPT3c1G8fypuf2ApytU+F7KHp2PUBvMYhkmOULT7E03RrsSuaZ/abyPa5TjzWuyON+8LhlF024nxQO1dzK1mjPv0ine933swiR5r0W53zwLti6doDyTOpbpdbydjxHi8XhFvRBfnJ6s3BZxbh6KdEEIIISR+2Anoru7I/j1MH2ec027+vjCOMa9FRPu5mlqLSO+LQOuw2x6KaDe3XzF/DpZLly4F/KzPE+p85uP1uezOUXmuDh0dXX7bmciSDOI5nkmG6+0fol2oV5XtpRdD+994qif+or27BIvvFcF9I24fk4mbh6RjwLWZWHzKfGCMU7sUt6dlYkWL9rF9y0QMu3MRRTuTEqFo9yeaoj1gRbthW7xEu3w2t4YR0R6sIl32G1vF2FW0B5PooRwTDCei3SjNjdsSLdoPlC4KWJGui3jji0rNFe2B5rY73ryPEEIIIYRc3rCiPfKcLjuLru7EytL+kmQQz/FMMlxv/xHtGmfqKdoDRv6inzrtNYx7crz6czjJm3g1BoyYi2Lvz2sHimfehgE/mYEj8fwZLp2LYWljsdG8XYWinUnuULT7Ew3RLsd7Rbrnhaa6xDVWuxs/20ljHX2OYMfYYRbd5qr2vnqsi2gXjGONol7mMX62wzhHuEQi2gXf/ff1aNc/J1K099Vj3dzPXa9u18W53rM9mEgPpeo9GNKj/YvcLahIkr8XCCGEEEJI9KBojzwU7dFLMojneCYZrpeiPTUTtmjXJfvdI/+qCEu2d2/BqLQMvFJg3r4LEwb6xHb5okzcOXcX1oy/DWlp6Rgw5DZM2tXoO96dj+wHbrTZ58L8ezMxP38LJt0yGAPS0pH2+5k44qla92UXJl2r7R+UkYE7F7mA7VMx9N7AFe21uVla9X3aYFz/wFLfgwL3Lu+5BmTchUkb6nyDGCZGSbRod1VWIe/QET8OFhTGVbjrstv+5ZshinbjWHMFu0eUm+c1njuQNPYeZziH9mLPSssxZsyiXTDLdfls1xpG9ukvT9X3ba9o9Fa06/OJbDeON1fI6y1mAu0PRqSiXVCy3e9+ndXGJlC0C7pst2sNI/ulIt3YUuZw+TK//bps148x92w3zx9I6gdCBLuI9r35R9Bls58QQgghhKQuFO2Rh6I9ekkG8RzPJMP1UrSnZsIS7UbJLoJdCEu2n5oZsIp8zZh0DMtxqT+X5wzHgCF3IXu/JtDduWMxKG2Up82LC9kj0nHzzBK0y8f6XIwaYtg3PB0DbpqIjbUdQEcJ3hyejtsXm+V3B9z5MzBM5qytg1vGbhiLAcPn2or29i1ZGDRkLNbUa2OL3x6O62eUqH0bn0jHsJnan1Gfj7x4t8BhLsskWrT3B8wV7YSkKrUXLiJ343ZWtBNCCCGE9EMo2iMPRXv0kgziOZ5JhuulaHeeZcuW4Re/+AV+9KMf2VJRUWEe4jghi3azZNe3hSXbt2RhQADRvnGsSbSP3WLYW4I3b/KI74IZGHrtDBwx7JWxmhS3VqIXzxyOtIn5hqM9MbeOCSjaO7AiMx13rurwH+s5Nm/iYAySCndL1TzDxC4U7c6haCepTltHJ7bvzmPbGEIIIYSQfgxFe+ShaI9ekkE8xzPJcL0U7bHJsWPHcM899+CnP/1pYkW7WbLrMcv2oPHI7TWWn1VNZgcW7Zr4vnVBnSbE0wZjaEaGH5O2+44zinbrXJ6ELNo9VfJD/M/nbTPT4dJa3KQPxs1jFyHP7TsFw8QqFO3OoWgnhBBCCCGEJDsU7ZGHoj16SQbxHM8kw/VStEc/umRfv349fv3rXydWtM+eNz+gSNer3YXgyVe92DON1eGSltXINPRut8rxQrxybTrGyab9E5Fmqmj3JRaivQ6L7zBVtNulow47pt2GAXcsRa15H8NEORTthBBCCCGEENL/oWiPPJGK9o7OTlyor0dXV5ff9u7ubpy/cAGtbW24dOmS375AkeMa3G7UyvdSU4vm5uaQxwbL+fMXkPXc89i7P8+yzlgkVPHc2tqKiw0Njn6e5NruuPsv2LxtOzo7O827+4yMn/D8ROzZtx+dNvfmHx8uxmNPTVDfZaAEu165xpenzcDa3PVoa1dNrb3b8w7kY+fuPai/eNH2e5afq63bd+DAwUNoaWmxPUZPJKL95jmNGLm8BVe/5cYVL2vb/vBRE+5Y3IRvTWtQn4dlNyJzeQt+mt2If3nFOofwXx804si5bqws7MT33tLGOSVWov2Pf/yjpSWMkePHj6O3t9dPsre3t6txCRXt0Urt4rswYMgoLC71iOsOFxY/cLWfoFZy/N6lcHt+pt0bxmLQwLHYKO1ZuvMxYchgjFrjezlqe4suwWMh2j1rHj4TxfppujvQ7vlz8f587zqRPxVDb5qJYs9HholVKNoJIYQQQgghpP9D0R55IhXt23Z8je9e+0OsWZurpLuer9atx+Crf4DFnyz1E6zBIvL1rw89giHXXI/vZ/wE/zroStz8q//C/gP5StxHmpraWowe+zh27d6TNKJdfoaynp2IH//sPxxdn1PRLvdmzLgnsHPXbtvx0RDtTz8/CSs//wJtnocuyz9biWt/cgNG/O4P+OV//RYDr/oeXn/7XTQ2au5Sjvno46W4+vof4/Y/34Wf33IrfnrTzdiyNfA1RiLaJ29sQ0VDLyZtbMW3X2vArz3C/FBVN659162OeX1HO05d6MHo1S341nR7iZ5qor0vYV5YWOgn2SWhjIskcRftQCPycjIxNC0daddmIC0tXbVh8UpsXY4Pvx23XpuBodcOxoD02/FKvk+s49RS3HmtNn5oxtUYdNMM5Knx0RLtHVjxQDoGZMxAnvrciB1ThmNA+tVa25ghGbhzhUs9JFgxfjjSBmrtZAYNzMC4DYZ1MkyMQtFOCCGEEEIIIf0fivbI40S03/zLEXhiwjOqGl0iwn3C85PwoxtuwtLln4Yt2j9duUqNkfs8/4NF+MVtv0HB0aMpc9+DiWc9ZyurMHrcE6q1tEhlufZI4lS09xWnot2cffvy8O+/+CXWrd+Ijg5tvQVHjuI/R/waX3y1Fu0dHaisqsbv/nSnengjnyWnTp9Gff1FVW1tl0hE+33LmlFyvhfz8zow5I0GPPVVK8ou9qLS3YuHV7aoqvZFBztw9FwPrveIdzv6k2g3V7Lr6WtcpEmAaPekuwPu2jq4bV4i6pPjckwj2gP8bLfX16HW3UdLl0ij1tcIv786OxpRa7eeQNsZJkahaCeEEEIIIYSQ/g9Fe+RxItof/vtY3HVfJk4Wl6CntxenTp/BI48+hl/95veqennDps146unnUH3unLf9x8fLPsWb776HxqYm71xm0S7p6OhQc82aOw/NLS2q8nvR4o9x7Y+H4Yp/+7aqlr5w4QJ27NyF8XKOat85Plj0Ed54ZyZKy8vxyNjHsHvvPlXRLt/fZ6s+V9Xk/+dfv4W77vsrSk6dVtvXb9yEG4ffgn/+t29j5AMPobzcFVDuBkoo4nnFqtWY9OJUfLLsU4x7Kku1ypF1S9X3i69Mw8rVX+Du++7Hvwy6Er/945+991aOWb9xM4bdNBzf/PZVeHD0o7jpF7di09ZtSrSvWLkKc+YvxHOTX8B1P75BtV6pPleD8c88j3+78rsY/L0fYOb7s+B2a4Wv0rZFhP+uPXtV65gLF+rVd5U+eChu+sWvcN8DD6nfBohUtMv1yHf05dpc9ecXpr6irk9a5uiRa3rtjbcw9omn1P+GS8vK8Ovb/4h1G0TGh+YxIxHt0jom/2w3Pj/Whe+95Ub27nYcrupB+cVevLOzHVe+3oBNp7oU17ztVm1kRKa723vR3QscOdejWs3cvqhJifZ9rm4l6bt6gNqWXry4qQ3fmRGZeE+EaNcl+4YNG9R9l9ZN+s9+sHFOkjjRHiQBq9AZhlGhaCeEEEIIIYSQ/g9Fe+RxItqfnPAsnp04BV/lalWwnyz/FO+8l40/3/0XJc3PVlbi7swH1LEic0WoPzTmUazxVDDrsRPtkvkL/4FxT2apiuYPl3ysqsBF5ou4nfTCS/h46XIlyv90573e9jDNzS3428NjsH7TZlRWVuFPd92LLdt3KBn94ZJP8IsRv8HeffuVUDxytFD1AN+6/Wv85o93qFYusn3uwg+UAHZ7WpqEmmDiWSIV/0+Mfxqfr/lSXYdcT/6hw+ohgtyDvz0yRj2k2J93QPUpz3xwFLJnz1Hic9uOnepBwFe561T/+01btuJnw2/Bhs1b1LV98OFi/OSmm/H+7Lm4UH8RTU1N6kHFiy+/qtrElFe48Ns//jfmLfyHumZVEX/PX7B563Y0NLjx8KPjMOaxJ1BVVa3O/egTT6nxkYp2/XqWr/gM58+fV9/vshWfqbUbIxX5997/AM6Ulqrvb/obb+KajJ9g6qvT1Vr6etgRiWgXvjjRibyz3bj2HTfWnuxSIv1IdQ8+K+xE5rJmHKrsVlXtQ99swNKCDiXhn/iyBb/5RxN2lXXjyxOduH95sxLt0oZG5PrvFzXh69JulFzowe0fNuNfX7Wety/iLdrr6uowcuRIr2Q3H7ts2TK4Pb+xEs0kp2hflImhU3aZNzMM4wlFOyGEEEIIIYT0fyjaI48T0S4V0Gu+ysWzk17A2bNnVRuZ7Tt24i9/fdArzd/LmY3pb7yl+nAfP1GE+0c9gtOlpX4CNZBoX7joIzz2VBbKyitw/4MPq4puve3Ids/5pRJ78otTkT17rhLS0o5Ezn/qzBn1clVdtIswvmvk/Vj26Wdoa/OdQyT3k08/q0R+i6eNy/Gik0o6V7hcQV/EaU4w8SyRiu3Mv43C8aIiJcdl/Ys855V78MDDo9VvAsiDBMmCDxbh+Skvqp/vp555Dq+/9Y63n7m5dYyI9ofGjMW5czVqzYcKjuA3f7gDhwuOeH9u167fgPseeBBl5eWoqzvvFe378g5YjnXaOsYo2l1nK/Hr2/+Ej5ctt4j2HV/vxL33/02Jdlm3nP/rXbvxp7vvxb9++yr1M3XO8BsR5kQq2qWKveR8DyZuaFWC/e2d7Vh9vBMHK3sweUMbiup6lDwXmX6spscr3WXsuzvbcaS6G6M+00S7sXWM9H8vb+jFZOn/HkFVe7xFu0Rku/FdAcGOjVaSUrQzDBM8FO1GtqDx7oFwj5+Ltm7zvhTnbC6eHj0e9z3yKla5eqz7402lCw8tLcKtijJsi+b9LizDiNUunInmnEnEjo1FGLG0GIvPyq/dWfcTQvoRx8rx689dKOnqieB/77WYsVz+ruhBp+3fh7K/CLepv4eL8ZEr0HFJStVZPLK8CCPW16CtK17/v3YIcx59GpmPjMf7uzvR0WXeHyJ5T8B97yC47/oW3Hf9J5pL29GdDPe+5Em88dUvsLaqPbV+FhKI69BteP2rb2HJyVZ0RPuelTyFN7+6BWur2qI/N7lsoWiPPE5FuwjSh/8+DkuWLkPWc8+jvKIC9z/0sFeaK/F9/99w+swZ1Xf91ddet1SKBxLtIulFtBaXnMIvf/0778tSr/nhTxVSUS/V2NL+RCSzVLDPmjPPW40uMloX7VIdbaxuN577gVGjLXOLrD97tjKg4LVLMPEskbYxV33/Ogz9QYY6h7R0+e+/ZOJcTY2taBd5LrLbdfasqtI37rMT7XKstNORbFcC+wEl9/VrkG233PYbHCksVC1rdNG+cfMWy7HRFO2ypgcfGYMlItpNPelF/t8z8q9e0a5H/ixtc0b89nbVaqfB0HLGmEhF+3PrWtXLTj861IHjtT14ZFULXtnahsJzPVh+pBMn63rwtxUteHhVi+rf3tp1Cc2dPgpruvHgCqton7ihDWfdvcje046rXk8N0W5OOMdGGop2hknBJFq0d3R24VhRCfIOHVGUnC61HBM/klS0u+ah8e6xaOmOVCRUY9XkLExYVRW2qNm+QaSuLsSLcOuGGr85ZP9Du91hz+tFCfcIRLufqNck0eJKj3iOtWiXcy+LYM1BqcH0ZUWYVmiW5258/Ln/9qQT7YVlHlFnRrtH0VijXLP8nEVX/Gj31u/ne2kRHoz6eeLMsTL81zLzd6F9H1uj9n2cxKjdbhvxU4PXRHyazv3q0TgJ3MqzeHhZGbZGJKUDU7anxP6ernbhVJTPZSGmot10XNii3Y1Pvjjp+9//6kjXGSHBRLvaV4YtXT3oNI+LBpXr8dyjC7CnoyuC+beh8b7BaNzdhu5IRX2sSFLRfnD3VZidX4x28/cccyqwcfOV+CSIRKdoJ6kGRXvkcSrapdf37HkLVMWy9FAXqWqU5tKO4tHHn8LK1Z/j0SfGY4vNyzvtRLu8YPXuzL+qOSurq3HXffdj3YZN3op2Y6TVich9mXvUmLHYvEXrW24U7TV1dUpMr/7iS7+XPUo7l78/9iQWLV7irWiPNMHEs5xn7JPj1XmkjYuI7rz8g/jdn/5b/bOxsSmgaJcWPKP+PhY5c7SqfUlfon3v/jzcfsddqnpe/+0BOfaeTE2oSxWzLtqln/uv//AnHDtRpPrBS6Ip2qWKfcZbb6v2NMbqdPnf07OTpuCFl1/1691uzD8+Wqwq3svLK2wfekQq2u/+pBknantU+5hDVT247l232iYvQM2v7EaBYdvJul58aKho17F7GerLW9pUK5mJ61vx7dco2gOFop1hUjCJFu2uyiqF/Lm1rQMFhSe8n4kHx6L9IGaNDr+SvXR3sSasbfbpJEa0B5LSHlJStHsE+oYaf7lhOJfttSYVmriOvhCPlWjXid26E4vvuqItaAKLdh1NuE+Ll2DXiZFo91GjKsDlugJfe5RJWtGuSfZRuxrQrsZ4pPsGG+mdCGIt2nvO4fMXX8Oq8s4w7pmHswvQ+JdxaGnvtO5LNEq0j8X+ro4Y3bfISGbRHlOUaB+LfZ3tSfV9kNSGoj3yREO0S9W6vLjzaOEx1RvcLM3Xrd+IP939F/z3vSNRVlZu6bttFu0i2Sc8Pwl33H0vSkvL0NPTq0Tt2CfGe196KmuWnt66fH1v1mzVz33k3x7ytnwxinYR9DPeekdVqrtcZ9V+6V0u4lpk8J/vuU/1e5e1SRsN6SlvJ3aDJZh4Frn953v+gvyDWk92iTyEkBeOikyWPuaBRLu0x5GHGXIt0ttdfg6lr/zP/tO/R7tRtMv3IvdbXgwrL5OV3vXyEMJY7a+L9tKyctz2uz+oY+Vhg+yXex2tHu0i2k+fKcUtt/0W78+ao17IKtew+os16sWrUmkv36W0kZGXucqx8j3I/Zn80stqm1yPXSIV7T96rxF7KrpxofUS1hzXXoo6cHoDNp/qwvnWS1hf3IXve7atK+5CUW0P7lvWjPRpDbhxViNumt3ofRmqjPnp+424IacR2850KYH/+xTp0W6XcI6NNBTtDJOCSbRoNyMV7Ymoam9bcYvnV7i/BffMzZZ9jSvmovGugXDfNRYt+8b6H7dvHNwzt/jN0biizDCHp1Jen3/8HEPFfDmaswaicV8PWmbqx/wCzRXyH5OmcV70/dbrsCcS0e7Gx6u16l47uaMkvLm6U/BUvHslveE/TO22BRbtpmpjYyW9iHTbMYb9q13YZlij+Tr812+eSxP51rH+231EqbpcVYb7S/XSPcU++a6ku/+a/c9pvWeaALJWxWvI9RRjSTTWrggirP2q3o33y7Pm1S6c1sfIscukCroXZ3YX21fLmx9IOMJ+3XLvR+12YdpSuadl2HpUW5ec2ytcTNXj5sptEdLm9fsq5mvwmunnLHrXJAQT7aZz7/Ido61Zqt89YrfShYeXacec3l1sX9ltvCf6/Hai/Vg5/mtDDU4Z5vmb4dxSOS4Cf+sGvZ2J8Z7KnB5p7JlPE/4N6Oi2r6RX7VAMxzsnsGiXtfyX+bye//2JgJ5uGKMq5DfUoN1QzWyumpfrVsd7RPuWXcZ7pstt39hfe8caz+0R6EddGKV/37ZV54FFu//cBnF9rBy/MT8A8MhtedDRqeYsw1aXC6P078Z0bvO6PzSfX85huCfquj337OtNJ/3vh/deGtvhGNHm7+jW9vt/h3bb+sKBaFdtY8ZaRbtXwG9UFe/q/++fykFbR5f3mJbsq+C+R/93AUPLmbwn4X5/DpqzvgP33f+J5l2z0PiX71jGR8rB3Vdidn4JSvNvVdXb07/8N1MF91YsW/sdvPblv6l9OQeK0WGU4krgD1L7rGM943MHe8dP35iN0q5OVHiqxfVxXr7ORXsI0k+qzefkl2D/zisx4yu7c1dgw+YrMcN73vfVeeVnVOT+654xRrIP6MLfuObh/lXnJU+pBxZ+gtyybZvfNWcfOBn2g4S8Oc/ir2PmYldbZxT/niP9HYr2yBMN0W6MWZpLRP7+5o9/xpSpr3h7jNuNSRs4GAPS0lVvbunNLpXcupQXUTz+2edx1TXX4+rrf4zvXf8jJWr1l6qK7P/BD3+K199616/q29guRubI8swx9NoM/Phn/6HazojYfvu991X7GJn7u9f9EO/nzFGCOpwEE89Ll69QLXakTYxR4Ou91aV1irSwCSTaZe2jxz2Ob135XdV65sHRf8cf77wHW+VFszaiXSKtV0Sgy/HfHvp9NUbuqf4QQhftMl6q3b//w59g8Pd+gBtv/gUeH/+0+k2EaIl2ibz49dbf/B7fuup7+OZ3huC6n9ygXlor1f4SeUmrPAj49nevwXe+ew3++d++rfrqy8MW88MZPZGKdmHF0U642y9h5u52XOlp8yK92GXbwgMdGPKGtu32D5uw39WN1i6gpfOSYtmRTiXe5aWpUsHe2HEJHT1ATXPk1ewCRTvDMEkbinZ/lCyfucW6TcntMjSPl9Yyc9DmmuurMhfRbhTvap8uwz0i3Svetc/qWPUfZJ7PBjnf8p5xf4Ir2m0ktZGAFe1KoBdjid7OxSP9LHMFEO2qZY1XrpvHasLbKsg9KBHvkfOy3yzmTZ/9HwD45KTxXH6SOkYV7dZzBRDkAarc/SviDdfR7asIV/fD73xxEO2VIvkMct3yQEG7bk00e+7BUeu1WeaNGvbrFtF+m3oo4MYS/WHAWbkWfe01eG2jQfgr6W5oz+L32fNAwSukzefUxLdFTDsikGg3bzef241PPi9Slckd3dqfzXNEXNEuot34sEJ99lWg67LZK99FMnv3BxPtnvkTVNGu1m1oI6Ndhyal5bvvS7T7H286p7oH2j1Tx3vuiffYqrOYscf/YYWvAl6Xzv5r8VWh6wQQ7Up0+85lnLtU/mypXjcKa/9zd5rPHXTd+rlt5LsJEe4P7zaKdg9BKtpljN/aPde52ebYwIQv2ttW3gb3vTYPz99Zj+7Obo9o/45BoHtazOzSWsy0rboN7gmzvOJcfb73UbS0d2ii/S+D1LEt74uMH+MR9rdGpf+7iHYlqr9epwS369AIvL4pB6VdXejyyOpZXrmuSfePvUJ7K5bt3owOXdLpVfOdetW8JqxlfCDRHGlFu97WRZfj6rNatybTXYeexIbqDs93qFWv+68jlIp2Wf+tyPVr76Jd08cnW7zb1Ll3yv2T768CG7dchVleua5Jd+PxoUDRTiKBoj3yRCraw0ljU5OSvNu/3qUqxZ1EBK7IX6mAjjQyh7QqMX+fInxlbqmkDreaXRJMPEcrTU3NSrqHuj45Tn5DQB4+9DVGKu3lvoR6byO5Xn098oDGfP/1yDrkewhlzU5Ee7hIq5gHV7RgWHYj/uUV/303z2nEyOUtuPotN6542To2VCjaGYZJ2iSTaK89X4+DBYVoaGyy7IsXAUW7kui+6nNNphtEu19fd8Nxss8syY1jLeLdUyGv5vOMcSra1YtQ52NfJOONvdBt2sgEFO3mfQGEuv12ka1l2G7cZtMOxtg/3k9GW471CGWP9N++0SyvDftlPXaV+MYK6piJdpMsDyDU7bdr98xvmwhtz7WINNZEu0He287jBLM81tDP7dtm8wBByfgyLDbfaw8JE+1qLfp6e9DpWaf9PRNhLQ8uNFGoKsMNld4iJuX7UJX7Ms/nhip+fb+lMtwJZqHuQSrUbc4t4td3nHYti3dpP0OnLA91HIj2z2U+XSj7y3OvgDauw7s/WUW73TajXO9LtNuNN2BpHdNHOxgRzN57YD3WIrSNc5qk9o5N/us2HrfNc+/9hb3xWq1zqnNb5Lxh3V4xbpDyZoFuIhLRbt4XcI4+yJv9DJ5ZeTZs+Ru8ov07XrEu26SCvfHTEnR3bvWT7tqYCjQ/c6XW633fk3A/PUdJeP8xURTtqspcxHovumvmY87acVqLGfnz5jm+fUoqj8DrO9cHqDoXCf0rJablZ8Msv63HOxTtxnXULMDctY8ZJL/d8drDBG1bpKLdPJeI9RFYpx8j65B71um7Zjn+jZ3r0KZEvPkchEQPivbIE0vRrlq8dHVh/sJ/4OFHH1N9yfsSp6mcSMRzKicZrjeeoj0exFK0/+hHPwoZinaGYSxJFtEucl0ku8h28754ElXRLhXqln32ol3NabMe7fhIRbtUsmfhvkm5qAj4H4ihorWSMbdsCSbajcJbZLXtcXai3Sj3jZjbzhjPY6y8DyraPZXF5rn1l6nq1fBm4iTajdXefm1jjMfYCXK1zWbd+n2QeWWuShembyjDNLlXMubzAPc0IuyFtfbyVuvaXjVV6msV5PYSO1lFu7U1jCY1ZZ8S594XkJrOEeiFpfEQ7XpVeV/nVsfZt16Jr2jX50lm0W4W32GI9ipZs3m8gT5Fu+mFpAq9Ct18rKd6OyTRbjev9jP+kasHp22luXEe65z+kl+b39dux7dure2M+T7bE1CSBxPtPW4s9XsgoLe7MR/XNyLb7x/9Cj4rC72yPbhol9YxHdYx6gWqZmkeX9EurWP82sHomNrC+Nq7+IS1iHJVEe/dr7VakXum9u0M3gommGg3z+1r7RKCaFeffS1vtHUb1xK5aPedqx2dZrGu2sjY3bNcinYScyjaI08sRXuF66zqy/2H/74HRSeLVa/1/pxkEM/xTDJcL0V7aoainWFSMMkg2nXJngwvQY2qaA9U0e63LZai3YOTinYjSoAb28H0Idq9gtuNJav9x/nPaSfawxPZfq1mQhDtlnYsOpaxNsRStHvbx8g9C7DOgKLdXlJ793+u9a2fLnNvcOGMXKudyI8Ye2EdkiT3VN+rvvrGfu3hzBEx9uvuS7T7i3QZ41/RbpHpxuuSfaaq8ugTRLQr2W0+3oDqy673pTf0a/cQX9GeihXtxm19iHZbUW+gD9EuVefStsa7P5SK9qCCXN9mXbd5XRZhb+nRbiPaPedWPdbN6zZVtAc8t4HIRHsvyvZ61nK0DL/ZaL4foSCtY57GrD2d6DCfuy8iFu3minbDtkSL9k2z/Srajajq9q8eNbxg1aaiPWD1u37+wKI9GJa5/US7tWVNNCvatSp2GduCsnytV7x3/SLaN83yq2gnJF5QtEeeWIr2yy3JIJ7jmWS4Xor21AxFO8OkYBIt2pNJsgvREO1aT3ddjGsvNDX3aLd8Diba9Tn2BjsmGJH1aDej9Wz3F8ze/uY2x/v2F+NB48tMjdhKdU/VeaAxFnw9vtXxFlnu3zrG7joCzmWLuZe6mWqsnpyFkY+8ipWu8IWfqgCXexagutteqvvuma2s84j2xRu0ljzbNxZj+oZi7ToNx+/LkXWPR/beHlM/91CwF9Zalb7IPptrURjvp/0cSnrbCHgv+xcgc/R43Pd+PjrDfqAU5Jx9iXbDmrTqdr2i3TPGLJq9aH3Rzec0s3/WBHVd2Xu6gx5nTwDRrp/b8BJS8zhjX3ZzCxxBiWKbljJ+54iCaFfn9vY+959THav6uRtEe6DzeqnG5y9MQOYjr+Kz8q4AxwTDTqpr67T0aPd+1qTxQ/oDAXPPdU+LFuN4v3OGItrVXPJzr1ehB6poD1QpbpXighLjgXrHe+Z6yNvv3dz/3TSnEt++l7wq0e4V/np1u0+MKxHuObedKNcJKNoDXqtxfzEeWq1V6NsfE4zwe7R7iUi0e16EmuV7ualfz3bp0Z4o0e7pye7r0e6/37+fu16B7qto1+T3t21ekGqco+/2MnaEItq9veT16nbTi1bVS1GDVtwHEu3a+efkr0PupseRZ3wxqqcnu69Hu3nO0NB6tL+CFaUdlnMTEgiK9shD0R69JIN4jmeS4Xop2lMzFO0Mk4JJtGiXF5/mHTriR/z7tPteSOqH5+WmIYl2v7Hm6nNNlPvN6/0PolBEu14Fr8+vv2jV5jhbIhHtmvz0bxlgJ6f1ljKeY8xy3NMGxiyl9RetBp7fI44N+3X5bTfWT4z3Idptz2853v/c5jYnmjzW91slsmv1NIwUQSrC2jguFPS5TdJctZIxXbd+z7RzBLhnag7PNelzes5huS6PsJ6wsip6ol3wu1/GdZvWpR/rfTmq/9zGnzP/cxzCrDFZGDlpLcpDlhbW+6XfM5m7L9GuxK/h5+TB3S5Mk9/4CFTRLvg9LPAfL4iE9Luu/QuROSYLE1ZWWu9pnwQS7UKgc3tehGqU6Kq63fgiV21udZzh+9D2aaLbfE+91xWKaDf9FoCffNYlteecWzcU+Ve0m4+RNieGCnjh7Oev4X718CJ6ol1Qst17zSY5rdrDeO7Lahe27Cr2exmqGi/i2XTPvGI+iGjXKth99/yVXdqDOF9Fu+F7kv3GtauXgPp/V3prGP3eaLLd/zvxX4tvfnno4ftthD7O7RHv5nUbxbom233j1fzqnlnn9t9vd33ai1WN35t6Karf9YRD/EW7oGT7Pfq/C/zdd2xCRbugyXZjCxafOPffl3MgG0u++qW3ol2N98h2bwsV1Q/eKNW1F67OsG3vEpjgot2z/6tvec47BmsP3IIZfhXtnvXnDvau39uaxrZljvYAwfdz5hlru15Ntvvfs/Behnr2i9fxwN+zkLWiAm2dgb4bQvyhaI88FO3RSzKI53gmGa6Xoj01Q9HOMCmYRIv2foGldUyyEYlojxK2FeuXAfsWYOToyCraE8rZdXh6dBZyIqpoTyTVWD0lCyOzI6lojwV2Fe1BHkQE4uw6PDMmCzkRVbSnHuaK9piwfyHuHxNpRTsJHfsq+WQicDV8KDgQ7YREi7x/4G+PTmNFe4Lpsvn3DrttoaCPM44PR3DbjTGvRUT7uZpai0jvi0DrMM8vhCLae3v9JVk4L/40H2v8rM9rPiZQ9OPM4+zWV3muDh0dXX7bmciSDOI5nkmG6+0/or0e33y1AaUXKdoZhknSULRHgaQX7dVYNTkLOfviLX01sRi8DUt/Q3sBbaRtYxKH3u4m0rYxiUN+eyDytjGxQqsY9xPtqhrepmrdFnlwMEH7Pi4TyS7EVrQfwuy/yz2lZI8PSS7aVbV7GTb30ZomIJXr8dyjC7Cnoyuy8YQ44jDmjnsGmY+wbQwJH1a0R54LFxtRWVOHjs5O8y4mzCSDeI5nkuF6+4dor8eVb7jx5yXNONdM0c4wTJKGoj0KJL1o11+IOh73PRKPynZDSw5zKxlCLhdsWseEJtkvX2Ir2kl8SVLR7m0nY20lExqHMOfRp5H5yHhkfXbWUX9tQghJBBTtznLhohuuqhqcPF2OolNlJEIqKqt5DxNAqot2qWS//9Nm1LVcHpJdQtHOMCkYinZCCCGEEEII6f9QtDuPua0MwzBMrELRzjApGIp2QgghhBBCCOn/ULQzDMOkTv6ptbUVhJDUgqKdEEIIIYQQQvo/FO0MwzCpE4p2QlIQinZCCCGEEEII6f9QtDMMw6ROKNoJSUEo2gkhhBBCCCGk/0PRzjAMkzqhaCckBaFoJ4QQQgghhJD+D0U7wzBM6oSinZAUhKKdEEIIIYQQQvo/FO0MwzCpE4p2QlKQRIv22vP1yDt0xEvJ6VLLMYQQQgghhBBCnEHRzjAMkzqhaCckBUm0aDfS0dmFY0UlcFVWWfYRQgghhBBCCImceIl2+W9MQgghVsIJRTshKYj8D938L0eJRCraKdoJIYQQQgghJLrES7Sfqu3CqbpeQgghJsIJRTshKUgyifbWtg4cPX4SDY1Nln2EEEIIIYQQQiKHop0QQhJLOKFoJyQFSQbRLhXs7NFOCCGEEEIIIbGDop0QQhJLOImbaP/ve0dakO0fL11uOZYQEpxkEO1GRLpLn3bp127eRwghhBBCCCEkMijaCSEksYSThIt2+acT2V5fWYFzddbtUaNuF575w9+w8LjNPkISRLKJdmkbI+1jpI2MeR8hhBBCCCGEkMigaCeEkMQSTpJCtEcs2+uW4460dAzIXI56875oUZeLJ3/2Z+RQtJMkItlEu7SOYfsYQgghhBBCCIkuFO2EEJJYwknSiPZIZHv90r9gyORX8ED63/BxLKvaCUkyEi3ajf3Z2aOdEEIIIYQQQmIDRTshhCSWcJJw0R45FVj4h8F4csdFfJyZjr8svejbt2EyhjyzHF+/+zcMSU/HgIE34C8Lj4a+348teOb6vyCn2PO58EP85fp0DEhLR9p/jsbCfYbzEhInEi3aCSGEEEIIIYTEHop2QghJLOEkoaLdDvO4gJR/iN8OfAYbG7XKdr/2MWtGY0DaDRizolhtqz/8Jn6edgNeOBzifj9y8UDaf+Ad1TqmGO/8ajAeWF2j9tUf3oKvz5mPJyT2ULQTQgghhBBCSP+Hop0QQhJLOImbaBcqXC5s2LQZY8Y9bhHs4Yr28oV/Rtr4Ldpn1av9L772MSLS/yMbRYbjVzycjp+8Wxzafj+Mol2q6NPx85e2oPyi+ThC4gdFOyGEEEIIIYT0fyjaCSEksYSTuIj22fPmY+TfRinkzyLcA8l281h7NOE9YOD1GHK9RlpaOu7Q28fYiPQvR6djwOMeMd/Xfj+Mor0VrZW78E7m9RiQfj1++/xqlDeajyck9lC0E0IIIYQQQkj/h6KdEEISSziJuWgXsW6W6bLt4KHDlu0hi3ZpG5M2Gh+XV6Dcw5F3f4cBf/G0j7GI9Iv4+C/p+Pn7gSraTfv9MIl2nbqjWJj5PaQ9s8tmDCGxhaKdEEIIIYQQQvo/FO2EEJJYwknMRbtUsZtlumyTqnbz9lBFu7SN8evJLpyZh1/q7WNEpP9gMr7W27sUZuPnRlkedH8NNr45GR8X6nP7t475eovW1132nfvwLxjw8GrL+giJNRTthBBCCCGEENL/oWgnhJDEEk4SJtpln3l7aKK9Ajn/ZWgT46UY7/yHZ7sS6bfilzdIW5nvYUDa9fjL0grfscH2X1yNv6QZq9sNor1yF6bfdT3SrvK0qxn4O7zjFfKExA+KdkIIIYQQQgjp/1C0E0JIYgknMRftgVrHyEtRzdtDE+0hYGgNU19ZgXPmF5f2sb/+XA3qvb3XbVrH1NWgvLzGv6KekDhC0U4IIYQQQggh/R+KdkIISSzhJOaiXTC/DNW8P+pYerCHud+IaknzZywst9lHSIKgaCeEEEIIIYSQ/g9FOyGEJJZwEhfRHnc2TMaQu+YFFul97ffw9TODMSAtHUMez2X1OkkqKNovL1reG4jGFWWW7cHZgsa7B8J917cUjZ+WobvbfEy4GOf8BZoremyOcUo5mrMGedftnrk5CuuOBlu1ax8/B23dsbjuxOJaPQ0js/PRabg22fb0qip0Obn/Z9fhmdFZuO+RV7Gyogdd5v2EEEIIISQoFO2EEJJYwkn/FO2E9HOSRbR3dHbhWFEJDhYUoqGxybL/ssY1D413j0VLFKRsJKJdxsROUotwv8VWtLe8N0hba4TnbfvslsTI7H3j4M6aG+S8CRTthWW4bWkRbt1Qg84I72tQ9i9A5uj52NtlFuGHMGtMFnL29kQo26uxekoWnl5ZFZt1E0IIIYRcBlC0E0JIYgknFO2EpCDJItpdlVVKtB89fpKi3UxCRbtUhQ9E417n57YndqJdG18a8fiI6VO0J44dG4swvbAG05aWYVt3b5Srwg8Gl+ln1+FpWwkfCiLqp2GVK5KxhBBCCCFEoGgnhJDEEk4o2glJQZJBtItYP3z0OGrP1ydQtGtC2a/NiL5PxKm0TNmni1PPsaoi2bN/5ha0rbjF117FT2b7t17xjjPMJXO3zDS3UjGN8xJOqxXTdZnXJmu/O9i82hrsRbtpbr8KbatAtxfn1uNUJbp3TQbCqqrX2sbYiXY1v3EuvwcZMk7Ws9lw7x81PeQwtaTR96t57L4v3/i2z37pu7Z3ZQ2m+2qew3CMjJX71zJzkHeOxr2h/0dPd08Npi8rxpKzvdi+QYS7QbRLpfuGGpzZXYwRUvG+tAgP7nZ7q8dL9xTjod1ubNtQ5N3/qnF8gJYxZvbnZKkWMuFXpVO0E0IIIYQ4haKdEEISSzihaCckBUm0aNdbxkhFe2tbR8JEu5LcXrnukd8GIa1JdE3Gqj+Pl4plz3iPiPeOd81F4926tDbP5ZHTXtHrk9X6MZZWLQ4q2s1z+VW0q3kNkltJd895zMLXi28dbZ+NQ7NLX5PhOtW5rAI9VNEe/Pi+6PvhRN+iXSS6HC//QWEW9p79arx1zYoQKtqVcLfMobWU8cnzrWi8ZyAaP9XOrUt6v89ZYbSfEZm+2oUz3Zo4H2FsH2NuKVPpwqhlxVh8VpPpcrzs98p3dbyxKr4aqycHqWbXkdYyk3NRHuqavVC0E0IIIYQ45XIT7QddPdhU3IOVR3vw4cEezNvXg1l7epCzp5sQcpkh/9ufu68H/zjQg+UFPVhX1IN95T0orrX+3RFLwglFOyEpSKJFu1Sxi2gX4Z440S5y1iSyRZYaZbpHxjeumINGc+W35VhflbqfvNaPVyLeKHZNYt07n2dMpKLdZpxRtMsDA//Ke8O6vduCVbT74y+wrQLdXpxbjwt+fKiYBbmPUES7sVLcT4rbfZ9mIhTtapu5b7thLssYfd1dgc9jRNrGSFW6EuGVLjy0zCDKDRJeO96Njz8vwjRP1boS7X593X3V8Zr4lrYxIYhw9ULTCNrHRDqOEEIIIYR4uRxE+9HqHqw/qcm0WTayjRBCjMzf34MvjvXg4NkelMRBuocTinZCUpBEinazWDd/jhtKfJsroM0tXgSPdDb3OA8k2uU4yz570e4vt83rswrzkLAZZxTtqtrdfM2qHUmIot2u6r2fi3ZbGW7GiWg3V7lHTbSbxbi/SA8k2kXMi1y3F+2G8ar/+jSs7Eu0h12Zrr1EdeSktRFUwRNCCCGEECP9WbSfONeLtSd6MGefT6DN3N6KF1aex4OzKzBiajEyxh/D4L8fwaDRBYSQy4zvjDmCa54oxH9OKcJ975XhuWW1eGtzM7J3d3n/zpDffimo7EWJzd8x0SKcULQTkoIkUrRLNXveoSO2lJwutRwfM/zEt81+hS7EN6PxLpMYt8j0Pira/bYlVrRbHhpYCCTaPds/9Ynwy6aivQ+JHsoxFmkeoKLd2B7GMiYc0a63hjGjy/MAop0V7YQQQggh/Yf+Ktp3lvZgYZ6vJcwray7iz2+dwVVjKdUJIcEZ8Uoxnv+0Du/t7FR/f8zZ14ONxT0oqrH+XRMNwglFOyEpSCJFu5mEVbQb27dY9mn49WUXkWroVW4W7cZ+7tYqeEO1u/FzMNEeUHb3hf84/WWt3nMr4W/3AtTAcwTcrle3+4l2X79x/QWnRjHvm8detKsxfVWPB6QP0e6dV+uL7nthaR+iXe+j7umTbj2vfi/kmgL/B4lFmnvH2fRo997DyEW7pSe7YOyzbhLtWk92X2sZs2iXNjQjVrtw2jsfe7QTQgghhCQ7/VG05xqq2F/LdeM3007hykcp2Akh4XHzpCJM+uwC3vcId6luP37O+neOU8LJP5k3MAyT/KFo1/HIdmMLFUMvc+PLNH3HemS6Eu/G9ivm6nNNOlvbq/jmCi7adSmuz9+XHA8wbuZma192v3kDr90q2n3yXB/X/Okv/K9Nze257pmbPT3uPaLduM+L+bpM34nffeuLwKJd3+c95945oVe0q226nNfXrUt63znUGO+98Zf4/tf8LbjfNctz39xGoW9ZR8ii3dQmxouh/Yul4t34olPfy1C9+/0ku4Zr9TSMnLwWFUEk+v6cLDy9qspf+IcERTshhBBCiFP6m2j//FgPZu/VJPtjH1bhu48dtcgzQggJh8zsMryzvV39vbLscA+OVVv/7nFCOKFoZ5gUTDKJ9pTF0jqGkBTD0jrGH3NFuz3SPiZIVbvq4x5p+xeKdkIIIYQQp4hoz8zMxO9///uwENlunisQ8RLtumR//+t23PlOKdvEEEKihrSTmbGhGTm7u6Iu28MJRTvDpGAo2qMARTtJdaIi2j2tYWxluvZS04ASvk+qsXqKjO+OcDwhhBBCCOkvol1vFyOS/XfT2SqGEBJ9pJXM9HVNSrZHs41MOKFoZ5gUDEV7FKBoJ6lOtES73kImOx+dhhYysk1axjiS5OqFqFm475FXsbLCLPIJIYQQQkhf9IfWMfLi03menux3vlvGSnZCSMyQyvY3trSpv2+i9YLUcELRzjApGIp2QgghhBBCCOn/pLpoP3GuF4sO9LAnOyEkbug92+fs60G+qxclNn83hUM4oWhnmBQMRTshhBBCCCGE9H9SXbTrLWNey3Xj+08WWoQYIYTEgmeW1+H9nZ1RaSETTijaGSYFQ9HeiwvnL1i2EUIIIYQQQkh/IpVF+9HqHizYr7WM+d1rp9mXnRASN6Rf+4zNWguZfeU9KKm1/h0VKuGEop1hUjAU7RTthBBCCCGEkP5PKov2DSd7MHdfN15ZcxHff4LV7ISQ+JL1cQ3e29mJz485q2oPJxTtDJOCoWinaCeEEEIIIYT0f1JZtC8+1INZfAEqISRB6C9Gnb+/B0errH9HhUo4oWhnmBQMRTtFOyGEEEIIIaT/k6qi/aCrB/P3d2Pm9lb84KljFgFGCCHx4MU1Dcje3YWdZ3pQHGH7mHBC0c4wKRiKdor20DiIWaNfxSpXj80+QgghhBBCSLKTqqJ9S4nWNubFVRdw9eNsG0MISQyPf1iNmV934qvjPTgRYfuYcELRzjApmESL9obGJhwsKETeoSNeSk6XWo6LJYkX7eVozhqIxn3JKrGrsWpyFiasqkKXZR8hhBBCCCEkFUhV0S49kWfv7cbD885i6LijFvlFCCHx4K63S/HWtnYsO9yDY9XWv6tCIZxQtDNMCiYZRPuJ4lPo6Oyy7IsXFO3Bca2ahpGTclHRbd1HCCGEEEIISQ1SVbQvPdyDWXu78bvXTuPKR9mfnRCSGG6eVIQZm9vwwYEeHKVoZxjGLhTtURDtrrlovHssWrq3oPHugXDf9S24x89Bm1dMayJdbRdmbka3Z1/Le4btBhpXlGlj942De/xctHXrEl7OcQuaKzyf9f0VsgbPXN755bxy7GbfvrtkneEIfbaMIYQQQgghpD+QqqJ9UX4PcvZ042cTi/CdMVb5RQgh8eCaJwoxbWMr5uzrwZEIX4gaTijaGSYFQ9EeLdEuIvsXHgGuCffGvZqcVjLdT34P9Il0RZCK9lBE+90Gge6ah8a79XXogt//s/+5+2DfAlazE0IIIYQQ0g9IVdH+QZ4m2q8bf8IivgghJF58Z8wRvLK+FbP2ULQzDBMgySDajT3aCwpPoLWtw3JcLImWaDeKcpHrmtAWMW6qIvfKc30Op6JdF+nmuazztq24xa+ivi9U25jsg+gK8XhCCCGEEEJIcpKqon1hXrcS7T8Yf9wivgghJJ6IaJe/jyjaGaYfZcOmzYpoJNGi3Yyrsirusj06oj1ASxZvtbupPYxNa5mIRbvffiPWecMV7ftysjAyO5+inRBCCCGEkBSHop0QQpxB0c5cFrkn868WJJ+t+tx8aNQze94Cy7nNRDMi2O8eeb8iGrI92US7VLgfPX6yn4n2APu8WIW4F4tIj69oZ0U7IYQQQggh/QOKdkIIcUa/Fu3t7jrU1uo0ot18QJgpXzoKt0/NdzwPE/+YxbYut+WfsZTtItkfeyrLvNkvFO2hI33ajxWVoOR0qWVfLImpaNf7pPcht/37uBtQrWH0uc0912Mv2tmjnRBCCCGEkP4BRTshhDijX4v2jWPTMWBgBoZmCFdjQFoG7lxcYj4s5JQvuAvDJm5xJNrLF2XizkUu82YmxjFLdqNoj6ZsN58jVKKd/tQ6RlrF6P3ZBflsPibWxFa0C7og97WOsb6QVHuBqt1+JeH17Xs3x7WivbvnIGaNzkLO3h50WfYRQgghhBBCUgWKdkIIcUbSi3b5i37qtNcw7snx6s/hRET7sByD1D41E8PShiO71HhUfFOeM9x/TUxcYhbbutw2fo6GbDefI1SSOYkW7cmAY9Hez1HtY1jVTgghhBBCSEpD0U4IIc5IatGuS/a7R/5VEa5st4h2uJA9PB2jNmh/nn9vJuYXbMG4jHQM+M0i1Mrm6lyMGyHV7+kYkHEXXtnS6B0t1ehDp+zyTWc4Nu3GUVh8yrcL9Vvwyh0Z2jwDb8O4DXXYMSUDg9J9VfaTthuOZ2Ias9iOldw2nyNUop3+VNGeDFC090U1Vk3OwoRVVaxqJ4QQQgghJEWhaCexwYXPK3vQcUlzDM2lNfjZ04U2x8WIjU1w6SdHB76ceBw/NB9DSJRIWtFulOwi2IVwZbtFtLtX405vRbtI98EYdNMoLC7tQHtHB9CyBeOGXI3MpS7VHqa9aCZuTrsRrxRow6UafcDYLdoHz7GjcjURL8cO+8kMFHv3pePmmYVo7xbpno+8U1rP+BWj0jFsWr7qG+/u8K6MiXHMYlvnF5MfxI/eGYVrZ49S/5y5f5V5aFgxz2/GfD75HG3R3p97tCcKivZQkBYyr2KVy65FDSGEEEIIISTZoWiPPw/vbsPFLuN/gXdhwwfHkTHOemzqcnmJ9htnuDDvcCvOtfSiVz+tpPsSmi+2Y8NXx/GjJ63jSP8gKUW7WbLr28KV7SLa024ZhXHjszBuzF0Ymp6OW0V+q71adfudq3y2u31VJgYMn4tywxxHpmVgwBOaXDeKdnVs5mpDv3aZT5P4dvPosch/Ji4xC2/hxhkPKuFt5oHPXzcPDznmc4RyPtkezVC0Rx+KdkIIIYQQQkh/h6I93pRjRUUP2k1uraqwHMOyjtgcn6pcLqL9JKbsaUVd5yUY/bo55YdO4MYs81jSX0hK0W6W7HrMsr2viNQeOmYR1qzJxZothahtMe41tpHR4lexbtw2QpPmxv3qz+lXe160qpOJ+S77efRQtCcmZuktleRG2S0xfo60st18nlifL1DYOia6ULQTQgghhBBC+jsU7XFmXj2OStWz+T/CLzZh3LPHMNR8fMpyOYj203i3sAPN0tWijyRGtB/Hn96vwuz8JhTWdaOrugH/8dwxm+NC58YZZ/DSugbsqujCha4OrJl8HD+yOe5yIylF++x58wOKdL3aXegrwaW2VbTXLr4LA+5YqvVq96R4pkmue/6sjvWraPfFbh49wdfExCpm8a23bwkkvkcsftY8RUgxnyfW54tHKNqdiXYnYwkhhBBCCCEkXlC0x5dxe9vQoLeNae5Gcy880r0L2z84jh/2m/Yx/V+0372pBXXec0guobq8AbP/cRrXPia/nXASdy+qxmfFHcjbewLD4i7aXVh9thvt+hLrnIv2Z/Yb2x514CuKdkVSivZoJbjUtop2VC/F7WnD8WaRp52MewtGDRmMURu0z36V6uZjpZ1Mi+fPat+NmLDL8yLV7kYUl2p/zps4GEOnFXrHMPGJWXwbhbc5wfb1FfN5Yn2+QGFFe3RxIsudjCWEEEIIIYSQeEHRHk/OYk2VTz6XHazH8fZe6N7ywokq3JB11GZcKtLPRfvz57C5rgedXs/eg4ObS/HTp5Kp/Q9Fe7ygaDeKdnHru6ZiWHo6BmVkYNDAwbh1Rj7cnn3mljDGY4deezWGZq729mX32zdwMIbNyNeq3/dPxdA0bXvm0jrvXExsYxbfsaowN58n1uezC3u0Rx8nstzJWEIIIYQQQgiJFxTtcWS5G2Vtei/vLmz74DgWFneiucfzH+LNzXjx2WP4nnnc6ALc+mEddlV3oUt3cu1d2LPxDFZUdKFVH9/eguznjuEa77jjGLXmIg5d6JF3cmrpvYTmumZ8/EkxrlNV19qxzx1oh1sXqGqeCsw+0IbqzktaxX1vD8qO12HkhEJc5bc26zk6W9rx2bJz2HE+gGh/2YXZh1twyt2r1u511d09KC++gMmvFeLqR633wJaXK/DB8Q7UGtZZXVyHzH2tqAkm2l+uwMJjHahtv+R9eWlnew+KD53DyKxCDDGfx8wXjXC1+arZO13nceezhbjSfFwAbpxVhaVF/udX383FVmxYcwY/etJf2M86Yfg5EWH+RhUWFnUq6a2Gd/bg2L4q/DHrqFrDM3nmF+4a04ODuScw7MnjeOjTC9he3okLbaZ1uNux4csz+LG+jo8u4lizTcsjT5pLa/HzZ/UHKSfxZG6D+ploMXy/cn/Lii9gyoxj+L7p+/3VojpsOtuFpm7jz8MlNFc34KXnjuH7NvcwmejXoj3ydMBdWwe3r1hdxSzatXiO9ev/rsd+HnQ0orbevJGJZcziO1Y9083nifX57ELRHn2cyHInYwkhhBBCCCEkXlC0x48XDnUqkaji6ck+/Ksm1HhLjrux59Pj+NFj/uN+9nEDTrd6RLJfulDlvoQer3w3ivbTeKMgWP/wHuSvO4UfP6GJVLNo317ajTabsfVF1bhxgq/q/p6NTajqsHkRaGcXqtsueeW7n2jf2ISzfi1X/NNZ14CsZ4/huzb30I/nPVXz1huD6os96PaaY3/RfuMHF3Cwodf38MEUOf+EPs7/bJ6hBZCI6/Un8NMnrcfZcfeXjSgVse1/WkMuob6oBn9+2ifu/UV7EzbV9SqJ7Z9LKNl9CjeMPxKiaHdhlbHi3RK5rlMYJlX6oYr2511YJj87gQ6UtLdj1ZLj+KHn5/zuDY04227zMyRpb8WsScdxrc19TCYo2sPIjmcGI21ivnkzk6J54PPX/WS3jmyPReJ5PraOiS5OZLmTsdFk+4YijFhajMWV1n2piGv1NIwcPR73PTIe92Xno6vbeoxzqrF6chZGPjIeE1ZWxegc/sTnuiJHX1/23p6kWZusKVO/Z+/no7O7x3JMQM6uwzNjsnDfI69iZUU3usz7CSGEEEIuIyja40UlNpzztRrxtomZWIfd7l7oTvtCcRVuMIjsQRPPYdv5XnTZWkhTDKL9nh0tuKCfrLMda1acxvWPF2Ps5mZV6a1VQbdi3vPH8AOzaA8Wo8yfV48jzb2w+F6b+In29Y0oqmjCinUVePDloxj6aAFunVeH/Q36dV5C4ea+xPVxvF5oeHARNAbR/nwV1tX4vof6U+cxbkYh/vPNKnxZ3YN2j/OsPlLh90DBjIhvn+juwJeTQmxNM7ceh0O6Z5dwbJtHcptFe7DUNeCu545hYoiifVlJGw4crMOMhafwA/kNh+dL8HJ+h+9nod6NJ58/hu+GJNpPYsbRDjSG8p00NOGZicfxvdGVWGtoMdRZ58aMnGO4ZuxJ3P1JHbYWuTHjuePqZ9RyL5MIivZQUis919MxIP12zC8172RSOVJJLm1bRHjLP6NZWW6XeJ8vGkkW0V5yuhR5h44o5M/m/bHEiSx3MrZPCsswYmkZtpm3V7rw0NIybDdsS07RronsHJG2ln2hocRvjIS0mntSLirCEbfC2XV4evR87A13nIFYXpcToi/afQ8zlCg3IA83OsM4hxLu2WGKdp39C5A5ORflXRGMJYQQQgjpJ1C0x4nPjG1jurHns+P40eOy7xT+ccpQAdzcjOnPHsPVnnF3bG3BeV8jcDS76jFtZiGuHnsS43e2qpYp3r1eCV6J9QapX7znlKF3uAtfePvES1X7cfz4Catol/O8MKMQt7xZha/O+USoLq0zpEL/oFGqXkL18Ro8Or0QQ6eVY2Zhp181feAe7cdxR3Y5xq6sw47aHnR67kPzqXMBjvfwZh32N/oeUKC1FStXnEbG4ydwx5J6HJGHF6Y1iwi/Y4vhBabNzZjxvK8tyY2bW1Ct76t3487njgVsBROpaJ9ilNieezb2tUJ899GTeHSNGxXGSnePNJc1+It2bdz9TxfiN3PrsO+i4UGMVIBP1CvAw+zR/vJpPLTgLN7ep90jbZh/H/agPdrfqMNew0MjtLZh1Wdn8MMnjuDGGS58csbQ5khk/zqR/bXYUdfjfU9BZ2U9HnzuWN+te5IMinaGYYIm0aK9o7MLx4pK4i7XjTiR5U7G2nI2V0ncfUom1mD60iJMK+z1E9Wlu4sxYkNNxPI6fiS3aN+Xk4WnV0VQyd6PRXtMEdkt960rsp8HR6K95xBmjVlgPbesKSfSOQkhhBBCUguK9vjw5vEunyhtb8H7hl7qdxirz/0kfAHePGYQrJ2tWPTcMUMbjeOYc9KmR/ucehwNqWpaXsh6AsPGm0S7nOd533lkfT7Zr4v2Mnxa3u2tAJdWOI89ewxDvWsL8jLU58vwxv4WVEs7HN8zBL8EFvMevmjEWW+P9Eso3HoCP33Kt99PmhtEe8hV8O2tyJkYuJJ61nGjaO/Bwa/6qsAXKrC6wnDPDCJdP+aVQ4aHF52t+GjicVxnFu0NTXhCqsw9Y14+1AG3PiZM0S690XdUdamHIvZfRRiiPbcJ5d6T6SLdcP1vXPAT8dXHKvDvT5fjo1PdaDW65t4e1Ne04Iu1ZfjtU1rPeeu9TC4o2hmGCZpEi/ba8/UJleyCE1nuZKyFffNV5W/OPp8MVJXqflLdjSWrDfJdVbcX4VaFTfV7jxsfr5Zqd88x+lyeqnjL8VJFv9qFM+bttlRjlV+1sk8+i8S2rWJWYlsT8NqffXNZtwUT0gcxa7S0BPFVR1uPCU5g0W6uwtavy/+cPl7FSpd8Z9p+/wcLdtv6vi793Obr8ms984in8tzm2szYVe/7bzOeV78emzm859aFueFhit+1iNiehlXGeYKIdr/2MN65bY6xFe1yLsP3ZdteJoBol/VPmYCRk9ay2p0QQggh/R6K9nhwDtsu9HqrdvuKsX3MnJOdPpFe14B/f8ZfPpt7qyvRvrgBJ217ultjK9rNL1Xd2IRKk7TOkMr4QCJdEUi0n8bsoi6//uKdnZfQ1NCB8+2X0GM53nwvfWvy9Xn3Vdkb97tsRPusIqMgD5I+RPuona2GhyNAfUk1/v3pwK1mNER893jFt1zjTabvU3qr+3q/d+ArT6W85WWoBmHu1489DNF+45KLONliaAfTfQmdHT2okhfbGqr1QxbtG4yi3bRP4V+9rvd1v3HheRy4aN8zv7O+Ce+8eRw/CPXluAmCop1hmKBJtGgXyX66rBwFhSe8rWNEvpuPiyVOZLmTsUZcq6Zh5COvKjHpt8/cPsambUyw7f6iXpPuD+52o0tVyxdjSaV/tXw4ol2tOfugjSzWCVzR7pO8nm2qkl+7/r6FtFnK28vsvggk2u3PaSBIRbt6wGAcu28BRtoca38O7bp8azJdV5Dz9oka6y/Q7a9fzmkS5IJJkqv1T16rJL39PGGIdpu5MyevRbnNPbMT7ftzFqjfANHm1KR7zt5um/XYiXZ9jgkYOXpewP2EEEIIIf0BivbY8zO/F56GEEPFu59oNwvw0afw8WlD25kAot2/dYw9TkW7SNz/ftZQnf18DbbW+x4ueMX5cjfOtOo94tuxNOc4rhsrY47jgxJfdX54or0H+bkn8BND9fTYPa24aKrCt4h2U+uYsPjoIk4YJbXnxaE/fTLYfQ6zot0j+0WaR1+0l2DBSd8Dj/oTVfjvpz3V44sv4pj32sIQ7eFWtBecxr8/rd+vk3hyzUXsO9flbR+kR9b282f6eoiRWCjaGYYJmkSKdr1tjEj21rYOtU0k+8GCQjQ0NlmOjxVOZLmTsTpa9bcIVOs+c/uYgG1jbEW7jDVt84p0qYz3iHZDdXvA+W3QHg4EE7+BRbsmdH1iXRPPVmlvK6RFGk+2qc72HGeu+tbxX0fgtWnjg1xXMOFt2mcvoSO7Lm1u+zWHgv9a5P7rLYqMx9mL9v05WZjlV7V+0CvSK1ZP88xruKf6fTCK6wCiXST3LD8xbiPpg4h2MzKfrMe//7tUrtsJeOP805EpDyP40lRCCCGE9FMo2mPNcbx33L+Cu+/0IH+t1jt9/H5T7/TS86qn99DJp/Dc7jbU2fZoP4et532Vw+juwvYNFbj7yaO4anQBbn23EgsL27F/z3H8ZLy2zvBFewFm+/Up70FxXhXuG38UV71cjtkn/SvHveLcKMh7u7BxeQl+KC9p/bIRrnbfw4E+RfuHDX6iu9PdjEXzinHduBO4Y8VFnGzs9VbHG0W7uRK92XUR0+cU4/vjtBeBjl1dj0MVjXj3We0lsZbzeinBwmJjz3Gt5Un58fN4ZfZJ73yZy2vxZUknDuw9gWFZJpHeV4/2cxfte7SHLNrLsKzU+CCmDQtm6Q82XFhlkPDN5XX427OFuFn1Uu82XJe/TH/o61ZDG6EeHNtSihv0hzgmkd5Xj/a9q07gp0+Y76v0iq/GJsMLa6Xy/T+eDfKzkARQtDMMEzTJINqNFex222KNE1nuZKzGQeQoKRxItBur0k1tY4zYiXa/tjIGPBXrMq/MdWZ3GaZvKFPSXUT7Q6ri3boOO4wtYlSFud/+wDJbH+sTtFaxKtgKaVUlbhXp95mPC4C2Zvv2KP7HeK7L3JYmmGj3u+ZAMtvBdRmPmaRVlJvnDojnhaBqjOpNftDmZaR2ot3cSkfHcw/3efqcu3IxK2c+cuQ7dVkfGtiL9j7mNqwtoGhX8/qPt3/RqibbRz5iX7muifZArWcIIYQQQlIfivYYM7EOu43ysa4Bf36mEIPNxy13o9T7slSgs6xOE83z6nHUr3I6SAyC3P9FpfbR28bI+SMR7Td+2YhzIVbqe8X5emMleuD0KdpHl/v3iA8an2i3vETVLlJJ/nzgtjFe3q3F11K13/floPzQCdyYVYBBc+txOKT++T04mOvr+x6ZaC9AjvT4t1yszH0Ou2tDuX/BqtZ90drAnMSMo33/3Ek6a92ePvO1WFvaio3bzmHc24X43tjj+NPiCzjc5PuO6k+yot0YinaGScEkUrQL0jrGVVnl/Xz5iXaNgK1jBL19TKULD5pluk5A0W7Th92DJtVrsGR1GbZXujBtt9sr380Ssm+0Nif+sj24aFfSWGSsK9cjZa3HBBTSZolrHmMjrEOtaPfHc11G2R5UtBvWLD33bar0/Y4J47rMqIcBYcl2n0SXsda+6v7H2N4ry/G+Svy9K6dh1r4qrMpZh4q98zHS/JLRIKI9WKW5jq1oP7sOz5haxdhXtHuq5ANUq7N1DCGEEEIuByjaY8sd24wvOgWqCsoxbLxde5EqbDjnq+KVF2HOe06qqo/jufx2NBqq2r1paUH++UvoMLRCefHZY/iezPe8C1+c7UFHEIfnVLTb9VvX01nXgpMtl7wS2ivOnz+HrdKn2+xqW1uRX9vrvZa+Rbv0GG9ASavdQ4ge5Jd2osN7EoNoH12AezY2oarD8JsA5oQq2mUNs85he53hewsQr2gfXYC75X62Bzk/LqH8kAs3evr0C5GK9j+ta1K/KeB/Lk3iT833r+7Xcgnlp6Xtjn3rmEFv1GLHeevDBb3fuvzcyX9fBRX4za2Y9dZxXKv6rvv3bbektRWz3taPTV4o2hmGCZpEi3YR6ubWMcbP8cCJLHcy1oLNy1A1tPYxD64u9r3M1IydaNdfhBpgjCbaXZim9tdg+uoyTNPbydgcHxztxajmqnZLz3LTGNVrfdKrAYW3rZC2k98REKitiz/mfvBCXz3hNVkt12WuytaJxnWpOUwvONXbywSqdtcEez5yAgp9O9GuP7wwS3LDOSfnYmW2Vr2/L2caZmW/anmxrb1o9wh0m+1mAov2aVhZ4RmrzqHdQ6tot+/RriQ7X4ZKCCGEkMsAivZYcgr/OGVo3YEubPvgOH44znycxqsFnWgytBUp3HTc03f8OMZvacKZRsPLQuuasWRRGb5yGea3vCz1JMZvbsYZt7GNirRG78bJY3WYOL0QV3sEZmSiXTiNN/a2oFp6wsshvZdQX1aPKTOqsfGc3ctQRU7XYFNlj7cXd/PFZszNPoYlp3ztZkIR7WquD+qwo6oLXfo9aO3A9o1n8KOdzbYvQ/WOm3UOK890qWv23pruS2iubcEXX5xW7U7M5wrMSTy1zo3DNd1o6TbM13tJ3euyMw14/b1juEa1bDGc/1Qn6qRdjj6guwf1NU34eGkJrn/c//yRinb52XlyUzMqmg3n8Yj2YU+exOQdzTirt+zp7kHJ/ir8aVUjTjYHEO2y9oV12F3T47vnRtHuuR9PbnLjWH0vug3HdLZ2ofDQOYx8uhBDvPNV4qPiTjR0AJf8fkZ7UHz8PCbPKMT3k1yyCxTtDMMETaJFuyAV7fqLUOMt2QUnstzJWFvUS0Gt7UZU+xhDr3Z9u+qpbm4N41fF7pHthv3ay1D1SnnfnNo5AlfA+6OJdb+WHxZxLGjy2NvSwyRflcC19HkP0E7Eb37/ea0V631jL9ptzm13XX5tXqxC3b7a3GZuy/zadRmPyfZcl7VS33zf+hbt+n6LzLdpv2K+Lsv5veeQfu3aAxUltz1zqXVbzmEv1DXZ7j+39jJUvd2LaW2G9i5aNbpv3Mps7XsNSbSrFjpsFUMIIYSQywOK9hTG01ZG96+drvMhyWlCSHShaGcYJmiSQbQnGiey3MlYold227dXiTX2oj06xHJuEgkBRDshhBBCyGUERXvyM6egDYeP1OG1hac8L9k8hXG5bhxv9lW4axXwJzwV8ISQeELRzjBM0FC0O5PlTsZe9qjqfa0vfSLkp337liigqt1tqs1J4vC8CJbtYQghhBByOUPRnvzMOdmJVps+6MZ01jVg/DOF+K7NeEJIbKFoZxgmaCjanclyJ2MvW5Rg11p9hNvuJbr4WrlYWqlEgredjLWVDEkQnpelai14+n7hKiGEEEJIf4aiPfnpS7R3upvx/hvHcE0K9LImpD9C0c4wTNBQtDuT5U7GEkIIIYQQQki8oGhPfsZ91YDD9b1Ktvu9uPNiK7ZuqcTdTx7FVTbjCCHxgaKdYZigoWh3JsudjCWEEEIIIYSQeEHRTgghzqBoZxgmaCjanclyJ2OjMZ4QQgghhBBCQoGinRBCnEHRzjBM0FC0O5PdTsZGYzwhhBBCCCGEhAJFOyGEOIOinWGYoKFodya7nYyNxnhCCCGEEEIICQWKdkIIccZlJ9pnz5uPu0f+NSgMw/hC0e5MdjsZG43xhBBCCCGEEBIKFO2EEOKMy0q0i2Qf9+R482a/ULQzjH8o2p3JbidjozGeEEIIIYQQQkKBop0QQpzRr0W7uVI9VJIjuzApYyp2mDczTJyTSNHe0dmFY0UlyDt0xI+DBYVoaGyyHB8rnMhuJ2OjMZ4QQgghhBBCQoGinRBCnEHRbkNyZAtGpY3FRvNmholzEina7ag9X4+CwhNobeuw7IsVTmS3k7HRGE8IIYQQQgghoUDRTgghzqBotyF4OlC+ZQYyb7oaA9LSMWDIXXizoMO7t3jxKAxNT8eAtMG4eexSHGkJvh3VuRg3Qpsr7cZRWHwKgGsR7rx2sNo2KCMDQ+9dhHI59tRSZGbIHOlIu2UsFhvOyzCxSrKJ9pLTpXBVVlm2xxInstvJ2GiMJ4QQQgghhJBQoGgnhBBnULTbEDwd2Dh3LnbUapLbvTQTA34yA8XywTUXNw8cizVu7bjiXflQfwy0vWULxg25GqNyG9Vc7UUzMUzm6u6AO38GhqWNworaOtTWy7lcyB4x2HDsLuSpSRgmtkkm0S7tYo4ePxnXanbBiex2MjYa4wkhhBBCCCEkFCjaCSHEGRTtNoSclkbUKiHuafFSuxS3p92GV3bVod14XIDt7asyMSBztWGbC9nDhyO7FEDpXN+8KnVYfEc6bp62Cx7HzzBxSTKJ9kRUswtOZLeTsdEYTwghhBBCCCGhQNFOCCHOoGi3oa+4989F5o0ZuP6OsZg0MRNDDUJc7ZP2Lhl3YVJunf8Y0/bynOEYkH41hkp7GC+ZmO+yE+0A6vOR/UAGBqRn4PYpuajtNu5kmNgkWUS7VLMfPno8ri9B1XEiu52MjcZ4QgghhBBCCAkFinZCCHEGRbsNQaOq0zOxuN7z2U6IS7W69FMfMhgT9gfeXrv4LlNFuyEB5lVpKcHiB65G2sR88x6GiXqSRbRLNbtg3h4PnMhuJ2OjMZ4QQgghhBBCQoGinRBCnEHRbkPQ7J+ItGunIs9TTe5eMxZpuhCvzseOUr2vSyMW35uOUbnBtou0H443i3y9YNpbPH/2CP0V+ktTUYe8XS6vlFe94cfIJAwT2ySDaE9kNbvgRHY7GRuN8YQQQgghhBASChTthBDiDIp2G4KmuwTZv0nHgCHS5mU4MnNm4E6PaHfvn4k7rx2MQdIC5trBSPvNXBR3B94uce+aimHp6Z59V2No5mqUqz11WHxnOgYMzMDQG6cirz4fb96bgTR13gykDbwd2af8l8YwsUiiRXtHZxeOFZUkrJpdcCK7nYyNxnhCCCGEEEIICQWKdkIIcQZFuw2hpL2+Du4ALyWVfbU2OwNtBzrgrq2D21u97ovlPPIC1tpG+3YzDBODJFq0JwNOZLeTsdEYTwghhBBCCCGhQNFOCCHO6NeinWEY56Fodya7nYyNxnhCCCGEEEIICQWKdkIIcQZFO8MwQUPR7kx2OxkbjfGEEEIIIYQQEgqpLtqvvHcp/vm3CwghJGFM/aqeop1hmMChaHcmu52MjcZ4QgghhBBCCAkFinZCCHEGRTvDMEFD0e5MdjsZG43xhBBCCCGEEBIKqS7amzvN/zXLMAwT33x8qIeinWGYwKFodya7nYyNxnhCCCGEEEIICQWKdoZhGGehaGcYJmgo2p3JbidjozGeEEIIIYQQQkKBop1hGMZZKNoZhgkainZnstvJ2GiMJ4QQQgghhJBQoGhnGIZxFop2hmGChqLdmex2MjYa4wkhhBBCCCEkFCjaGYZhnIWinWGYoKFodya7nYyNxvhoULq7GCOWFmFaYS+6bPanHgcxa3QW7ntkPO575FWsdPXE5Lr25WRhpJwjOx9d3db9UefsOjztva752NvdYz0mkejry85HZ7KtLQG4Vk9H5ujxuG/SWpR38X4QQgghJPFQtDMMwzgLRTvDMEGTDKK95HQp8g4d8VJ7vt5yTCxxIrudjI3G+MC48fHqIjy4222RzNs3FOEhw/ZkFe0isp9eVeVAYotwn4ZVsRDt+xZg5OjIZLfj61JCO7Jzx5RYivb9CzRprT88qYjed7o/ZwKeXlWJzki/jz7YPyu28xNCCCGEhApFO8MwjLNQtDMMEzSJFu2uyiol2vXPItkLCk+gta3DcmyscCK7nYyNxngzInEniMTVBfpqF874HVOD6UuLsaQyuaS6HY6FdAxFu2v1NIyMsJLd8XUlq2iPEXKvM0cbfzOhGqtz1qEiStcfa9GuHhLk5KPTVNUuFe/PrKqK3XkJIYQQQkxQtDMMwzgLRTvDMEGTaNEukl1ku/65obEJR4+fpGgPm2qsmpyF+yblokIXd5UuPGSW6oVlBvku0r0ItyqKsdhGvuvV7toxZdjmmdtcFa+hVdGHXBmvqsL1KuXx2gOCbo/ENmz34hHbar+6Tp+4tNsWTLT7nyN8aR1MtJvXn71XO795e8TXFVC0V2P1ZE87G8+8/hJXa6nj3T9pbYiy+iBmjclCjlyHdz7/bfv1NjryPa60eYhgrkjXvxPZPjkX5aZ1KLmu1q+fp9s6p5dD6hjvdb1vqKjX53fl4ukxnrY7nv3e1i7m78M4PtjcxvYwnv3ZdusMINpl7tkyt8xp2UcIIYQQEn0o2hmGYZyFop1hmKBJtGiXCna9XUxHZxeOFZX4VbjHAyey28nYaIzXEIEqYvWgSfJZ28fYC/IAVe4i5Q1y3Vghr/68ocaBaJc1v2orwXUCVn4r0WwcqwlmXdT7n8NGtJvavtjK7D4IKNoDSnAffV2XX+X2ZJtjA5xD9Yz3rsk6NuB5Q0CJdKO419fQ5X9v5TjLOdSx0/zluj727Do8YzOPV7TvNRxrsy7tnAuwr1vfr4lxr5hX5xLBPs93vjHTsLKi2ztfsIr2vueejz362tRnaWvjm1sRULQL1Vg9ZQJGso87IYQQQuIARTvDMIyzULQzDBM0iRbtglSvS7sYEe7G6vZ44UR2OxkbjfHdZ3Px9GhPNbh5n6V9TAChHmC7SHl/aV6D6cs8x4mE94h2n7w37LdZiz9adbVVjvsIJob99gUQz4FEu4zN2WfcZjjO74Wj1qpz2/Mbz+kZryq9TWvuc6x5X6Drst0u1zBfSWHvNk81t/4AQYn4kKvYTZjEuohwu2uwE+3WY7WHAJqwFnm9QJvXUN2+T8nvKnTu61u0m9HEuacli0V+a2LbWCEfTLSb8R2rzfP0Sv9xtnMpuR/8GqSPe+boeT5pTwghhBASAyjaGYZhnIWinWGYoEm0aJdK9oMFhapljC7cpapdqtvNx8YKJ7LbydhojHetmqbaWgQS7X7tY/zaxhixE+1adbqvbYypxYzMq+aqwfQNZZimpLuI9jJsD0FYKjwPCTSZbRbHwYW0qkr3SGSryNWxE+2m9ipejJXkgdHbvwQT6X4tcWzEtuPrshPtgR4Q+J3f/9pVSxvz3AHR5biMkT+b76uGnWg3tpUxorVZ8c21L2cBZmVr1yWifZbsD0W0+7Wl0ZD2NV7RLvI+SLW4rRz3m9v/vk5Qct0q7IPOpWR7ltZ6xmYtmmjX57ZZByGEEEJIFKBoZxiGcRaKdoZhgiaRol1vFWOsYtdluwh48/GxwonsdjI2GuM1ArWOEXztY7bZto0RAov2wG1gPFK9sEzNuW1DGbZ75bv52L5RAtsk24MKaa9Er8KqANI3mGgPKMoDCetQK9pN2FWRBx8bwnUFFO3WhxUBMVbe267Dit4up1P6nRsq5Y0EEu3mbf5jRKrnI0fm3Dsfs/YZrl21lgnSo90jsK0V6lEQ7QHnDlTRbretrzWwdQwhhBBC4gdFO8MwjLNQtDMMEzTJINqNPdmNFe7m42OFE9ntZGw0xvuweRmqB619TDEetMh0HTvRrr8I1dej3TJmWRmW7C5T4+RYqWy/1dK3PURMfdOFvnqna/tfxQS7XukKO9GuV6WHIaVtCNij3e64UF5wahkT5LpspbqnWj3QGAta6x6zaFcPBgJVu8t5J+di78ppmCWtd8z7A0l1vX2L3UMDXbSvWoscGedah2dy5iPHUMUu+9X35a1qr8bqnHXa/fP2XPfs81Sgh1PRrl5oOtlGdJv7uXvn1kS69iJUc492w2edgD3aPZJdHl5Y9hFCCCGERB+KdoZhGGe57ET77HnzcffIvwaFYRhfEinaBWN/diHekl1wIrudjI3GeDMiSi1tZFT7mCLcaq42Vy87DdAaxnOMJtsN+71zeFrL6J895zC+eDUoxvYqCjsRa2rzYpbISjjbtHGxzG2dX28B491v0+IlGIFEu2Vem5Y4oV2XtereOrd5fmtbHBHO2tyaWLff5yOoaPe2gTG3cjmoXhJqbg/jN7+lvYt/v3efiBf5rP0WgPRq951XZLs+Vnqu+87vt2/SWqzM1mR/qKLdK7z1tUl7F8+57ef2Vaxrst24LtOLUPVrtxHtMvYZfZ3mMYQQQgghMYCinWEYxlkuK9Eukn3ck+PNm/1C0c4w/km0aE8GnMhuJ2OjMf6yxrayOz4EEu1RIYHXRWJAANFOCCGEEBJvLmfR3rLsP9C88CqSJPQ2V5q/opDT8spWND21lpCI6a1rMf9YhZx+LdrNleqhwgRO+aJM3LnIZd7M9ONQtDuT3U7GRmP85YtWva2q92Mhu/vC8NJSyz5HaNdlab9CUhZ50altD3hCCCGEkDhD0W4VviQxULSTRELRHiBmgR4qTOCU5wzHsByK9sspFO3OZLeTsdEYf/lhaI8Sq4ryENHbrERnHclzXSQ6+NrKzLP2bSeEEEIISQAU7VehtzYXl5r3kwTRsuxnURPt3SfPo+dcMyEh0/yy9rND0R4gZoEeKn2mowSLx96GtLR0DEjPQObcQrTLdnc+sh+4Uds+8DaMWlqibVfZhUkZU7Eify4yM9IxIG0wbp1bgvbqXIy7ZbD6fPOUXXB7jlaV43N3Yc14z3mG3IZJuxq9s4Vyro1FizznSsfQsatR693fiLycUbh+oKz/aut5F+Rj4xTPeQfejjcLOtS+HVMyMChdtmVgaEYGJm2XdezCJLX+dAzIuAuTNtR5z8L0j1C0O5PdTsZGYzwhhBBCCCGEhAJFO0V7oqFoJ4mEor2PmAV6qASPC9kj0jFobC5qxT93lGBHvghwbfvN0/Lh7gZQn4tRQ9Jx5ypdjm/BKBHeo5aivANoL5qJYWlXY+i9M5BXL8cvxZ1pGXilQDtaKscHDLkL2fu18e7csRiUNgor1Hcd4rnuXYQjcrzsHzgYE/Z75p57GwaMmIliWX93I9aMuRqZqzSZrs6bPhwTNtShHR0ofns4BtyxVEn6dncdVoxKx7Bp+aitrYO7A9j4RDqGzSzRJq7PR94pzxKYfhOKdmey28nYaIwnhBBCCCGEkFCgaKdoTzQU7SSRULT3EbNAD5WgKZiBoWljsVEEdx/b21dlYsCIuShXn0R+D0d2qb63BG/elI5RG/TPLmQP931WwnvsFn2n//FhnwtYMyYdty+WavNCvHKtT+irbBjrPZflvKdmYtjAicjzfNw4Nt2vdUzexMEY9MBSFEf+M8gkeSjancluJ2OdjncylhBCCCGEEHJ5QdGenKK9uykf7Y0FaHEXouFiMarPu3DmXB2OnW3AgdIW7D7dgR3Fndh2skuxo6QDu0rasO9UEw6VXcRxVw1Kq12orSuBu74Qre7D6GrKt5wnGaBoJ4mEor2PmAV6qASNSOnhutDuY7tsS8vCRvXBLL/9xbr5s0V4e/bfuqAugnMZBblW7Z52rdb+xcuUXeo4y3lL52KYSH3LPJ50uLT2NumDcfPYRcjTe9Aw/SYU7c6EtZOxTsc7GUsIIYQQQgi5vKBoTx7R3tV0EA0XT+JsXRVOnbuI41UtKDjbhXzXJT8OVPQir6IX+8t7sbe0B7tOd2NHsSbche2ef+p8XdyOfaebUFBej5LKKpyrLUa7+xB6bdaQCCjaSSKhaO8jZoEeKkGzfyLSDBXeQbfnGoW4WX6HK9qlEj0d42RT2OcyCvJ8TBhoqmg3xHLevkS7no467Jh2m7fNDNN/QtHuTFg7Get0vJOxhBBCCCGEkMsLivbEiPbepv1KdPc0HUBrw1FU1FbjSGWnEukHTWI9VPLKe7H7dDe2G6S7GZHwwtfFHTheUYuL9cdV9by+JvM64wFFO0kkFO19xCzQQyVouvMxYUg6bl+kv/SzA+Wn6jzbB2PUGk+f9O4S1UfdJ6XN8jsE0X7vUq0Hu/Ro3zAWgwaOxUb5rsM+l78gz5t4NdLG5HrnRkcH2j1/7ku0S6uYodMKvbuL93v6xEvyp2LoTTNR7N3L9IdQtDsT1k7GOh3vZCwhhBBCCCHk8oKiPTGivc19BDUXylBS3YDDZ7st0twJByouqUr3nae6LaLdjLSfyT/jRmlVBZouHkNvc55lrbGGop0kEor2PmIW6KHSZ04txZ3XetqvDBmMoQ+s1irJjdsHDsbQsatR6+2jbpbfIYj24bfjVpnr2sEYkH47XlEvXfUkrHOZKtG7S7D43gwMGKi1jRk0ZDheyTe8DDWIaMf+qRialo5BGRnIXFyAFeOHI02fZ2AGxm0wrJHpF6FodyasnYx1Ot7JWEIIIYQQQsjlBUV7fEV7Z+MhnK2twtHKDhw822uR5NFEhLu0l5HWMmbBbkaE+66SdlXl3nzxSFyFO0U7SSQU7X3ELNBDJdS019fBbXPvA20PJz7h3QF3baO34twcR+dqaUStzG3e3lc6GlFbr4l57+cga2RSO8kg2ktOlyLv0BHFsaISdHR2WY6JJU6EtZOxTsc7GUsIIYQQQgi5vKBoj49olxeb1lwoR2FVKw66YivYzYhw31fWi10hVLgL8lLV01Vn0dRQGBfhTtFOEglFez+OpbKcYRKURIt2V2WVn1wX6S6Yj4slToS1k7FOxzsZSwghhBBCCLm8oGiPrWjvbcrD+fozOFHVHHfBbkYT7j34OgThLn3c951uQdm5CnR5erjHCop2kkgo2vtxyhdlYuiUXebNDBP3JFK0t7Z1oKDwBGrP13u3NTQ24ejxk2qf+fhY4URYOxnrdLyTsYQQQgghhJDLC4r22Ih2edGp9GE/c+48Drl6LNI7kRyo6MXuM91KppsFu1m2yz8Lyi6i4cIx9DTFprqdop0kEop2hmFinkSLdpHqIteDbYs1ToS1k7FOxzsZSwghhBBCCLm8oGiPvmjvaTqA8/WlSVHFHgxpJxNKdbuw93QLyqsr0NF00HK9TqFoJ4mEop1hmJgnkaJdMLeKkT8fLCikaA8BJ2MJIYQQQgghlxcU7dET7b1NUsmeh6rzVThc2W0R28lIXkUvvi6xinU7thd3ouhsDTrdB9W1mq8/UijaSSKhaGcYJuZJtGjX28foL0Otqq5RPdvZOqZvnIwlhBBCCCGEXF5QtEdHtIt4bnMfxZmaCzh0NrlaxfSFtJLZE0IrGZ1DZRdx8cLxqLWSoWgniYSinWGYmCfRot2MVLKfKD7lfTlqPHAirJ2MdTreyVhCCCGEEELI5QVFe3REe0djAYqr3UndKiYY8qLUvWd6sL3YKtbt2H+6GQ31x1UFv/lehAtFO0kkFO0Mw8Q8ySTaRbIfPno8rm1jBCfC2slYp+OdjCWEEEIIIYRcXlC0OxPtvU15aG44juNVLVGV7PvLe7DtRBPWHqrD5/ursHqfUGn4p/5nI77tn+2uwIqdZVi5uwKbjl7E/rLQWtnsK+3BjhBayUj1+57Tbag7X4zuxgOW+xIO8RXtp7HoT/+B7/zbUAxIexgf5bvQrO87uBh/vO6n+GfzdtKvoWhnGCbmSbRod1VWedvGSAuZeLaM0XEirJ2MdTreyVhCCCGEEELI5QVFuzPR3txwDEVVzTgUJckubVxErD83Zy3umTwPv33yHYwY+zp+9ffX8KtHZ2jIn3UCbBv+4BT87N7xuOm+LPz20Vcw7cPN2FXSZjmfHSLbQ6lsF9m+91QrauuKHbWRSZxoH4ofPv81zp5ya/so2i9LUk60t7a2ghCSWiRatCcDToS1k7FOxzsZSwghhBBCCLm8oGiPTLT3NktP9sM4UR09yb7jZAte/Mcm3Pzwy7jh/skYljkpYn5051P4we8fxjW/G6W49vZHMHXh+qjLdkEq2530bE+kaB+Q9mu8tKYUF89StF+uULQTQmIORbszYe1krNPxTsYSQgghhBBCLi8o2sMX7fLi09aGIzhZ3Ri1djGbChvw6JvLcfNDUy3SPBJ+eOeTfqJdkMr2NXlVyKsIbc17QpTtUtkuPdsvXjgRkWxPlGi/556Hkf6d6zFg2AzsPHIOHbai3Szmh+KHz30Nl6cKviJ7FK4Zeg0G3LMEX788UvuzkvdncPGzF3H99zO0cfcswZnjhrV9/pJvn5pzB1wlnsp6Elco2gkhMYei3ZmwdjLW6XgnYwkhhBBCCCGXFxTt4Yv2S815KK05j0NneyxyOhK+Lm7D/VP/gX9/4AWLMI8UO9H+ozvG4pNtJdhfHlq/dmljs+u0VawH4lDpRXQ0HrK5X8FJmGjPKcbKsf+Jod/RWsi4diwyifZtePZHP0O6R4Yb0WW7V7Sbjxn2a/zw367BP3u3/RovfXFGVc5X5NiPuSfnJGrKzOslsYainRAScyjanQlrJ2OdjncylhBCCCGEEHJ5QdEenmjvaTqAqvNVOHw2NFndFyKz31i+G78YPc0iy51gJ9rl81vLvsae0x2WdQRC1rfzVLdFqgfihKsG7e7wZHsiRXvN7sX4w3U/0eT6mvdwm1G0fy4V6df7vzTVtO2kLtqHvYavC86hw7vfU9V+1ifrNZF+GovuuNlzfo9Y16vbzVXvJC5QtBNCYg5FuzNh7WSs0/FOxhJCCCGEEEIuLyjaQxft0jKm7sJpFFR2WYR0pIj0vnviXNz41ykWWe4EO9Eu3HD3k/jLs+/hqbeXYcnmIuw902lZk5n9Zb3YUWKV6nZsL+5EWVUFuhrzLfcvEAkV7WXS/uUhfH+IyHK9Cl2X6A9528KcOeGZ19Rexiva9WMs7WfMYj1wlTxFe2KgaCeExByKdmfC2slYp+OdjCWEEEIIIYRcXlC0hy7a291HUFTVFLW+7MK83KO4ZUx0q9mFQKLdWN2e8ae/Y8LMFdhe1GRZl5m9IfZrF/aebkFD/Qn0NofWrz3Rot3ahz2CivYIRDtbxSQHFO2EkJhD0e5MWDsZ63S8k7GEEEIIIYSQy40em23RpT+IdpHGZVHsy64z9s3luOlvL1pEuVP6Eu060rf97aV9t5M54LqEXadDbyFTUH4x5BYyiRftxkp1g2gPp0d7yKI9UI/2UfjoQIXnBawknlC0E0JiDkW7M2HtZKzT8U7GEkIIIYQQQi43KNpDEe3n60/j8NnotYzR+UPWTNxw/2SLKHdKqKJd+OWDk7C5sMGyNjN55aG3kBFKqyrQ3dR3C5mkEO3nPC1klAA3VLBbqt39K9EjEe1qnEW2U7QnCop2QkjMoWh3JqydjHU63slYQgghhBBCyOUGRXtfor29sQAnqxuj2jJGyCvvwX899qZFkkeDcET7tbc/gnWH6izrs2PPmR5st5HqZuSYfadb4K4/1mcLmfiKdkL8oWgPkf++5z4Lsv3jpcstxxJC/KFodyasnYx1Ot7J2OhRg+nLinDrahfOWPalJvtysjDykfG475HxmLCyCl3d1mMcc3Ydnh6dhfseeRUrXT3oMu+PAXG5Lgfsz5mAkaPjdz98HMKsMVkYOWktyrui9x+frtXTkTlau9/3vZ+PzrDmPoTZsqZHxiN7Tzc6k+y7IoQQQkiqEs6/j0RGqov22gvlOHy22yKdnbI/BNF+w/2TcIPhn+b9gfjRXU/h2tsfxg9UP/ZR6p9mwa4jQn5tfo1lfXYcqOgNuVe7yPbTVZXo6qOqnaKdJBKK9hAxS3ZdtMs/ncj2+soKnKuzbo8adbvwzB8ewMLjNvsIiRPxEu2uyirkHTqC2vP1AfcJBYUn0NrWYTkmljgR1k7GOh3vZGxflO4uxgg7eV5YZtqepKJdiez52Nsd+X9MiJh+elUshHQ1Vk+OcO59CzByci4qkvK6nBF90e4R6J6HC0ay93Ybrj+YaK/G6ikTkON3fHgo4Z4drmj3cHYdnhkzH3u7uqN0TwghhBByeRPBv4+ESSqL9q7GQzhR1RL1anYhmGj/5SMv4ZV3FmDLV19ie+5azF6wGE++nI27x7+OWx+Zihv/am03IzL+llEv4s9PvIbRz7yGN197F1uXLMbeT5fhvdffxYjMJ3GtTZV7OKJd2BfGi1F3lbShsY+qdop2kkgo2kPELNmNoj1i2V63DHdc8U18Y+Qy1Jv3RYu6XDzxsz8jh6KdJJBYi/aOzi4cKyrB6bJyJdHNol0+G+V6yelSdbyMM88VK5wIaydjnY53MtYO16ppGJl9UBOKlS48tLQYSyp7/QTf9g1FeGi3O/mlX1KL9oOYNXoaVkUilPuxaI8lSnZPthPpfZFg0a7OPx2rKsyiXSreF1DAE0IIISRMIvn3kfBIZdF+tq4q6i9A1Qkk2m/62xTMWbAEjcfy0HvmMHpPH0bP6UNoPpGHqoO7cXL3duRv3YStX36FL1euxprPVmPTF19i/+YNOLFzK1wHdsJ98Gt0521Fb9429B7Yhu79W7Fq/kL85z2PWarbwxXtByouYeep0F+MeryiFp2NBy33lqKdJAMU7SFiluxm0R6JbK9fei+umvwKHvjmA1gSy6p2QhJMrEW7VKuLTBeRbhbtuoSXY/RtDY1NOHz0uPqnea5Y4URYOxnrdLyTsWa0tiJGMe3Gx6uL8KCfVJfqdZ98V1XvS4twq7Chxkb4eardPcd459Kr4k3iUs1nO48dIqul9YqnSnmSLp9N273oldLa/py9Rsltty2IkBbZrbcEiaj1SzDRrq3FW4U9aa12Xd5WM+br8nxnak2mBwv7FyDTvC3YdanjA1+Xa/U0w3VLVXiPdQ4Lnup9v1Y1vm2qJYpUbXuvTaq3zfdFZLPhnkgbFnVN2narBJcK9Wl+cjqQaLe0dzHcK63C3ny/pe1OpbZuuV+Tcw1zWs/rPYedaFfV6obv1La9TCDRrq/9Vay02UcIIYQQYo/53zWiT6qK9jb3ERyrbLWI5mgRSLT/eszLOLxtE7pPHcSlM4cj4/g+XMrfjksHtnmp2vwV7nzkGVx3u39Ve7iiXdgbRlX7zpI21F84EbCqPRGivfTIGWxYvxMfLfsSCxavJv2Ef3zyBb74ciuO551A+9kGy/duB0V7iJgluy7aI6cCC//wHTyx4yKWjPwm7l160bdv/WRc9fQyfP3OA7jqm9/EN741DPcuPBL6fj8245nr7kVOsefz0UW497pv4htXfBNXDB+NhfsM5yUkRsRatOvYiXbZdvT4Sa9U148J1GImVjgR1k7GOh3vZKyPaqyanOUR1f77LO1jLG1jDMdZBLkbH39uFPWadJ9W2IsuVS1fhm1257PMY09AWawTpKJdPVTIzveNtZPUgc6h5n3VJ8kDjA1OYNFue04jASvarQ8L9Os09/e2PYfnurxyXZf0uvTW76dFgveNEvSTPQ8M1DaPkDZfvxLu1nMo4a2uwyfXdUkv++Ra/K/RKrwDiXbfGj0y3HJfg1S0OxLtWg92mVdbu/bZK/H9zm8v2rU1LMT9Y7LYx50QQgghIWL+d53ok6qivfZCKQoquyySOVoEEu2/G/sqTu3drqrYLQI9VGxEe9OujfjLmOejItrzynuxo8Qq1e3YXtyJ01WugL3a4y3aD+8rxJfrtqPkdAU6Oh38ADFJl56eHlRW12Ldpl3YvSMfra6Llu/fDEV7iJgleyDM4wJSvgi//dbT2NCoVbb7tY9ZMxrfuGIYxqwoVtvqD7+Bn18xDC8cDnG/H7l44Iqf423VOqYYb//yO3hgdY3aV394M74+Zz6ekOiTDKL9wkW3qmzXBbu0jzFWuccaJ8LayVin452M1fBUfxulsxFT+5hAbWNsBbmMNVWt+44T6V6G7bLPUN0eaH47lET2VrFb9wcT7eZ9tuI5wHaRxv7btOpsXXBrvxlgroI2VYcHWZt2XUYpbSKgaPcIbe93GZ7MD3pdss1TUe/9bF5XUExiXQR1jo3UthXtMlZapBi2GQS3vu7ObkN1u7evuW9Msol22/VY5tPYP0seJpgFvAFPZbxV0hNCCCGEmDH/u070SUXR3tN0AKfOXYxJb3adYKL9dAxEe/PuTRj59+iIdmHX6dDbxxw440abu8Byn+Mt2qWSfe36r9HUHLlUZZI/Itw3bduLYyFUtlO0h0GFy4X1GzdhzLjHLII9XNFevvDPuOKpzdpn1av9Xl/7GBHpP38fRYbjV4z6Jn7yTnFo+/0winapov8mfv7SZpRfNB9HSOxItGg3V7Dr7WRY0d43TsYq9BYogUS7X/sY/7YxxuNsRbsIdL2tjBF1nFS7a3Nt31CGaRvKsN0j8lXFu2UddmgiWJfa5rYvwWS2vxwXIT0f+2yOsxPS9iLd5vy2eNrCBBPpputS7VmM+4OIdr9rVjL7oK14Dee6/NrDGFvLBL0GK/sN55Qq9Fl24tpOtPu1lTGgv7hUl/auXMzKmY8cOYdrHZ6Re9SX2DaQENFurnK3zOdDZHvANjHeFjTzsIc92wkhhBASFOu/Z0SbVBTtre6jOFLZYZHL0SSQaL8n63VUH9yl+rNbBHqo2Ij2rv1b8GjWi8j4wyNREe37y3tDbh+zo7gTF86fRG+TtX1MPEX7lk17VSV7d3ePeQqmn6Wyug4bN+1GU/kFy88BRXuYzJ43H/c98JBC/izCPZBsN4+1RxPe3/jWdbjqOo0rrvgm7tDbx9iI9C9HfxPfeMwj5vva74dRtLeitXIX3h55Hb7xzevw2+dWo7zRfDwh0SeRot2uR7u5nUw8cCKsnYx1Ot7JWB+BW8cI3vYxAdrGeI+xE+02fdh1NKleg2meuacXurFktb3I7xMlmE2yO6hoN1R/75vvewGs6ZhAQtq8zTzGKqxDr2j3w1hFrm8LJtoNDxBkHYGqz+2uwW5bMEScB39gYMIjkSu6D1or1HUCinZzlbtpzORc7F05DbP2VWFVzjpU7J1vqZhPStFuWo/dNuP57R6asHUMIYQQQsLD/O860ScVRfvZ2ti9BFVHF+03eAT7DfdPws/+Ohmfr1iF9pP5VnkeDjaiXdi/Yhl+ce/jPsn+u1G4NkLRLnwdzktRXXW2L0WNp2hfsWoj3I1N5uFMP4xUtX+2ZjMaSmstPwcU7WEgYt0s02XbwUOHLdtDFu3SNuaK0VhSXoFyDwXv/BbfuNfTPsYi0i9iyb3fxM/fD1TRbtrvh0m069QdwcKR38UVT++yGUNIdEmkaBdEsh8sKPSKdfks8l0kvHmOWOFEWDsZ63S8k7FmNEFsI3897WMetLwY1YetaPf0ZA80Ron23S5Mk/1yDqlsX+ppJ2NzfHCs/cntt5nHTMOESYZ+6yZs5bP6LQDri0LDI3BbF+txpmsw91I3o0T8q5gQpK2O7XWpavUg85qw9l03VLzbCmtPC5i98216qnuwleqeF6HazukT7Suztd9K2JczDbOyX8UE0znsJbZpf4Bz+PeIN+zz9LHfo9arCfGR8lAlBNGuV6Gbe7RbhXqQHu1KslvPRwghhBASGOu/60SbVBPt3U0HUVjZZpHK0WZ/eTeef2sRHnvpfTz+0vt4bvpsbFqzBm1OJXsQ0d6btw35qz7Fiy/OwKPjX8Lfn3oRj2a9hC1HzlvWFwp7wngp6tfF7Wi+eBSXTC9FjadoX/bZejQ1t5qHM/00n36+CRfPULQ7QqrYzTJdtklVu3l7qKJd2sb49WQXzszDLXr7GBHp10zG13p7l6Pv4+dGWR50fw02vDEZS47qc/u3jvl6s9bXXfadW3QvvjFqtWV9hESbWIt2EevSGsaMUbiLXNe3x1uyC06EtZOxTsc7GWuHa5VUeZuru7X2MSOWFmOxX7W5vt2uNYx+jCbbjfv11jBKznvn1F6cGqwC3h9Pb3lD1fiElTbV2HprHLuq8oD90K1zW+b3m1eweUARlECi3dNaJtB5PSjJ7T2/+dzaHNZx1rkt8xtbw+hze6S3/zn993nPEVS063NYvwfZ7n9e8/we2W5aty6oZ43Jwsj3PedUa8hCtqkC3V6063LcdG59Lu9xnnN4z+3rhS4SXl979t585Mj3qsR3kLn1NXhbvljn9V+jnWgXMS+/GWDeTgghhBASDOu/o0WbVBPtDReLUHA2di9B1ckr70ZzyVF0FOcruk8dQu9pG2keCQFEuy7be/K2onu/h7ytKDjdhPwI+tHvK+vFjhBF+/aTXaisOY3upgMU7UxcQtEeBQKJdtln3h6aaK9Azm2GNjFeivH2zz3blUj/FW4ZJm1lvotvXHEd7l1a4Ts22P6Lq3HvFcbqdoNor9yF6Xdehyuu8rSr+dZv8bZXyBMSO2It2lMBJ8LayVin452MJQEqu+NCINEeDWI5N4k/gUQ7IYQQQkgkULSbRXtV3VkcPtttkcrR5mBFLzrOHLNK8mgQRLTbUVjaallfKORV9IbVPubk2Rp0mdrHULQzsQpFexQI1DpGXopq3h6aaA8BQ2uY+soKnDO/uLSP/fXnalDv7b1u0zqmrgbl5TX+FfWExBCKdmfC2slYp+OdjL3sUVXp5mrweGF8Gat5nzNUlb6qKLfuIymIqnqX6n6KdkIIIYREg9j/u28qifae5nyU1pyPeX924aCrFx2lqS3aD7guYefp0EX74bIGtLkLKNqZuISiPUqYX4Zq3h91LD3Yw9xvRLWk+TMWltvsIyROULQ7E9ZOxjod72TsZYu37Yu1hUlc8bzoNFrr8L6E1dIKh6QmWs92+U7tW8oQQgghhERC7P89MZVEe0fjYZysalQS3CyVo01/EO3CnjPdqi2MWarbsf90M9wXC9Fr6NNO0c7EKhTtqcr6ybjqznmBRXpf+z18/fR38I0rvomrHstl9TpJKBTtzoS1k7FOxzsZSwghhBBCCLncoGg3ivY299G4vAhVoxdtpSeskjwahCHae/J34GhZ5Ne8ryz0F6LuLG7HhfNF6G2iaGdiH4p2QkhSQNHuTFg7Get0vJOxhBBCCCGEkMsNinajaHc3nIzLi1B1qsuq0HPmiFWUOyUM0X6h8BgKyjstawuVvPLekEW7UFV7Bj2GF6JStDOxCkU7ISQpoGh3JqydjHU63snYaIwnhBBCCCGEpBIU7UbRXnOhPC4vQtU56OpBeVktLpaeRs+ZAqswj5QQRHvz4XxUnziNgvIOy7rC4UBFL3aEIdpPVVWiqymfop2JeSjaCSFJAUW7M+HsZKzT8U7GRmM8IYQQQgghJJWgaDeKdldddVxehGrmkKsHLaVF6DUL80jpQ7R3H9yJwrIWyzoi5euS0F+Ieqy8Dp2NBynamZiHop0QkhRQtDsTzk7GOh3vZGw0xhNCCCGEEEJSCYp2o2g/XXMBBxMg2gWpau+NVlX78b1BRXvr4TwccVjJbmTX6dBF+8EzDehwH6JoZ2IeinZCSFJA0e5MODsZ63S8k7HRGE8IIYQQQghJJSjajaK9uLoRB129FpEcD6rLKqPXr70wuGivd9iX3cyeM93YbiPV7dh7qhntFO1MHELRTghJCijanQlnJ2OdjncyNhrjiQ1n1+Hp0Vm475HxuO+R+djbHYv/mKnG6slZGPnIeExYWYWubvP+GGC+rq4edJmPITYcwqwxWRg5aS3Ku6L4s3B2HZ4Zo38f87CnqzuM7+MQZv99gvr5yd7Tjc54/PwQQgghJEmI4r+PBCCVRPvxqui1UwmXU+UN6DxTaJXmkXB0d0DR3ntgGyqKKnCoInq96PeU9oT8QtRdJe1odx+maGdiHop2QkhSEC/R7qqsQt6hI6g9X2/ZJ5ScLsXBgkI0NDZZ9sUaJ8LZyVin452Mjcb4YJTuLsaIpUW41cxqF85ERey58fHnRZhW2BuGYAwVTWTn7HUgk5WYjo1od62ehpGTclER9tyG64r0O9CvK86ifX/OBDy9qiomUlibuzLMuauxeoomqzXZ7WPCSuNcwUS7NkfOXgeyWwl3+T7CEe2msZ0RjCWEEEJIimL+95Hok0qivbCqzSKR40VhRTuaS4udt485fRiXDu+0CHadzkN7UHy6PqqV+3vDEO07SjrQRtHOxCH9UrSbN/z/7P2Ll1X1meeP/wXftcb1XWvGmZ896W87E3+T6ckvznR/TdKZ1iQdMcl02x1ntNMtmKgEMNoxocAkgolGCk3SSYxVGAVjIhhIDFXeAAEveMEqsIpbAUUhVMGpAgEFChCoGz6/9dmXc/b+7L1PnXOes8+l6vVe67WaOnu/97kU0fJVTz+bEFL7SVu0Dw2PyM7uvbKv74Bs69odEe1nzw05j/cd7JetO3Yh2otA0y1HP0ynLJq5QFoy9g/vR2ThijSE+OQV7e3NDY50Ll6WI9rjKE20B9i0RKbNXCxvFf2ZVFm0O8+/UFoO2l0z8b4EAQ8AADAhKf/PpjZ1JdoHyre3vFiM+D7S269fH9PztnzYGT/Nbji5Y7ts7zsfeX4NxYh2A6KdVCKIdkJITSRt0W4m2Y1c94W6LdqNgDdy3YBoLw5Ntxz9LP2rZe7M2TLHyF/7WB7RHp5675NXfdk4kJFbl3fLLRsHs50Na7tlineO++fotHzw/PFwpsJn5qaQfaluJHb8lLIR266odt5nVozGPZZPtOfWvjjXbuooWnoni3br2oHVNYW8r/A1vcfs1TSJor3TndwOXTdw3JHR4ectRC6b71Owl+XhDhnOfrbe1Hjk2kYkW9PkzutokKa2UTnYsnD8a4dWtNjPG3xvUdGeaQ1c3/QCE+2bFs2Jfe7sNPymx2Xa/NWBKfgt8sisxqgUTxTt5vzA9zxxoj5OtPuvfYGsjDkGAAAA9Yz980D5qSfRvqOKot2w8+A5Ob9/d1SeF0OetTGjHa/L3nfek86D5b3hazuindRgEO2EkJpI2qLdJ0m0+yDai0fTLUffoX2JI6yTp78TRHtXX1acm68d6R5cK+Mc75GlAxdkxDrXRTHRnijBfZIn2iNrW5xruZP8tgCNew5HeGflepzgHp8k0e68trziPnmiPf59NcrKpPcVksq2lHfFd+55zNeN0c+oCJIn2l2Zbp7bPeY/92jotbjy3f1lQO5Y8NpxE+1J17LOTRDtPo60bgqL9txrT5hoV4l297pzs6/TW3PT1CFDodeQLNr913DTrAb2uAMAAEwo7J9Hyk89ifauw9VbHePT2/d+6bvaezrkwy2vRQS74ULHBhno7pWtZdzN7lPMRDurY0ilgmgnhNREEO064azpavuabjn6mZZGmTpjgSNj7WM54kW7mUoPP2bO65FlRqx7jznyfW1Glrba5xq0oj1epLski3Z3RU5OGifK7VjRbrqLpT34mPlFxXxPcIduOBogdP3k1+ZO6dvPGSRZtCe9r4hgjRPt5jH/PQRfi9M3j+Vkd/R5CyNRtBvRbJ47IJCzYjs0lb5YVq5cEHhN9rWjot25znxrEtxI9ZAAr0HR7ghy83oCj8Wd503Wx7338PVjfrkAAAAAdYr980j5qSfRvmugejdD9dmSGSt9hUzXW4nT7Cd27JAdfen8IqEY0f4GN0MlFQqinRBSE0G064Szpqvta7r6/mFpcdaUlCLaXUkeXf/iTbDb5609EiMwFaLd4E3i+2s1wjcWTZbZhtxEuTkvYVI7TrQnifTI88fjrn9xP+/I84XO8deQ2GI7n2gv8n0FpbK1Fib4C4Kg7M69d3sifnwSRXvSc1srXtxVKPHPm1e022K+XkS7/RrjzvNw19gkrInJrs55TN5iZzsAAMAEwP55pPzUk2jfc/hUWW8SWirbDo7I0d6DMrp/R1SmJ7HH7GaPTrNf8Pay7+w9k9p7e2v/qGyIkepxtO/7QM4PbkG0k9SDaCeE1EQQ7TrhrOlq+5puOfoOJa2OKUySm6n3WzcekWWtcfvXC7tGIThyOiS784v27BR6ZnVkkjtLomjPM3GeJOILnGgPYybU7Sny/KLdl8gFvS9btCedH4O7dz1eeieRV7TbUtnGO6dtZaNMtSfUxxPt1vlxj9WkaLcn2uMey/f82Q6rYwAAACYW9s8j5aeeRPu+d9+Xzkx595eXiplsz/QdkZFCZLu5AWrMyhizLuborh7ZfqC8Nz+1eXPfaESoJ9G5/4QMDXYi2knqQbQTQmoiiHadcNZ0tX1Ntxz9LCXcDNW9Eaq9dz1AcC+7c3PU8FoZg3NT1Nhp9+KI7CeP7FK3cYX1nHkLkoV3rFR3e8nXLYykHe1h4ve/++8rXpx6Hf99xZ0TJ9q9G6FGJ+gT8MR03J73pIl9R84bwR2R+cEd7DHPFdqz7u9zD0v1WHlu8Ka57R3t9o730kW7N00ed8yI9qwY93asm8+mENHu3QjV3tFuv2/38YQd7Y5kj3k+AAAAqHOiP4+Um3oS7f1HD8uW/toQ7QYzgX60b5w1Mkayb30jLNnN+pitb8iJ7t2y/UD6N3h9fW/hon3nwaMyfArRTtIPoj2lHHvvPbmv8QF55LHFzp8JIfmTtmg3Yn3zlu0RfOGeGTgUOda5rauiwl0jnDVdbV/TLUc/jJmgdm8KGn48XrQbXNkeWB3j3wzVkezhjiPVI6tl3Gv7/ejUezzuLvPg1LgtxA3uRLh/ji2Rk/ahR69tX98Xyrnj9rXHI160R6/rrm6x++77Slovk31fljROfF/Z81zZHnz+Jl/WR9a7xMn0/KLdlcKB64dWw7gCPPzcRoZ7jwfPdV6LvXPcF9kx186uTvE/L1tWJ4l265rBa4ekuivFc9+P3PXdlS7e+3mrQ5oDE+3uKhzr2ma9S1a4h69rnjd8I1T/NcaJ9i3yyG1LpI1VMQAAABMQ++eB8lNPov3I+wdka3/5bxaq4XDfoXjRvm+LfLh7k3y45fWwYN/2pnzYvck5/n7fAdmaSff9vH3wgrxW4H52wzuHBmTkdEdVRPvTLetk8NRpu04mYMbGxuSPz70kJ3sR7WWLkep/bHlG/nHq17Lc8e3ZzmOEkOSkLdrrAY1w1nS1fU23HP3JTOJNUCtAvGgvD4k3QYUJSJJoBwAAgIkLoj0o2gdP7pFt/SMRmVxNEkX73g75cHe7fLir3RXuZrLdyPfAOe/3HUxdtG8+cKHgG6EaDh3dJ2On366KaH95fZvs3XdQRkfH7EuQCZaBw8dk3fqNcvrA+5G/B4j2ErLh9TdCgt2m+sI9I01XXSLT19qPVybnN90n1359uRywDxCCaHfQCGdNV9vXdMvRn7Q461Pc6f1qCMrUJL/3vuInymHC4a+dYXIdAABgEoFoD4r2s4M7pGvgXEQmV5NE0V4AlRDt7X1jBYv2N3rOy/vvdcuF05urItp7t++XVS++LqfPlC5VSe3HTLOvf7VNdm7eLef7T0b+HiDai4y/KsaW6zZGtu/a3W3XK5Qqi/aX75Yrrv8Nop3EBtGuE86arrav6ZajP+kI3Kw0cTd7RcitibFXv5RE4H1l173Y58AEwqyGcdfaxK7CAQAAgAkMoj0o2odObZU9h045u9FtoVwtdKI9/dUxb/WOFizaN+07I6dO7JQLZ6oj2g1b27vk+TUbnMn2oWHFXyBSczGCfeDwUVmz/k3Z+FqHnM2ciHz/bRDtBcRMqhuBbv6vkelxgt0c81fLVCfVFe2E5AuiXSecNV1tX9MtRx8AAAAAAOoJRHtQtI+d6ZDeI+/VzA1RX+o6KfveychICaL9wv6tMrCvT17Z8b5sPpDO+3k786G88U7hN0Ld2ndCzg1uy37e1RDtBjPZvvbFN+TJFc/LkqWtMEF44nfPyrPPvyK7Cphk90G0F5A4me5Ldl+sBx8bPxlZ/E/TpGnDarnj85fKRRdfIn865T55bdA7fLxLls6+Ri77yCVy0cWXyidub5Wjwfrxl+X+6y53ehd95Bq5Y+2xqGgffFnu+PwN0tQ1JDJ6SrYvb5ArP+4+18Wful2ePpy73ODL98mVH/2YXPyRS+VPL79cLjPc86Z78PBquWPKx7zedFn6Tq4Xyob75LJ/yk209yydLpdd4r7+K29fLtv9v1+B6110+Q1y/8unwte452XpWeJ1L7lcpreY90bqPYh2nXDWdLV9TbccfQAAAAAAqCcQ7UHRbjj8Xn9Vb4hqbi76es9ZWbjsdfnmj5dK1/535dyRfrnQW5xsHzm8XwaOHpc5v/y93P3oGlm7/XjZhftm81qLEO17+t+VkVO5G6FWS7QD+CDaC4g9vW6m241wN5g/21Pu48eV4n96/aOy+bg4Ivy52z8mF329Vc6bw93L5f7n9sr5UREZ6pB5f3mJTGsZcqsfvCx3fPQSufKhLvf48Q7Z7MjvgGgf3StNUy6X6Wt9ib1Xlj64Wnqc7/GQbL7vU7nnOrpcrr1kmiw1r0OGpOdn18iVj2YCz/Uxmb7avc757ofkir98UHq8q4ay9na56KpHXdGeeVSu/Mjt8pzzi4Mh6XmzQ5w/etebtjzjPLe53pUXf0ru3xa4xsWXy/VL3Pc2+NztcvFH7pbNwechdRlEu044a7ravqar7Wu6AAAAAABQDRDttmiv1g1RNx0Ykxe3H5dfrNwkX5nbJJ/++g/ku81/kP7jZ+SDoREZefeAfFigbB/r75FzZ8/KqaEx+dnvXpTPfuNHcs3tP5b7fvuKPLvpsLTtH448fym0912Q1wpcG7Mh5kaoiHaoNoj2AmKvijGYm6MGp9hLEe2hNS/vPCRXXHy7rAs8ZCT14NFj8vT0S+SKZld+n2+ZlhPaofjXPCXrbr9crmzea5/g5PzgMTn69PTcNV5uCF/PyO4v/8aZoHeea5on5J2Y57hKmnqzD+QSFO1G3l98jdz/5rFAN/61b2+8XC6682X3i+A1TEZXy/SLb5CloXF+Uo9BtOuksaar7Wu62r6mCwAAAAAA1QDRbov2kdOdsvNQZW+I+vKuU/Kj374i193VLJ/+2j1yxbR58smb5svjL7wh730wLB+Mipw9PyyjA/vkw95tEbEekuwHuuTc6dPywciHTu+FjTvk6tsWOtc0fPnOn8nc5ufk+Y4j6gn3tt7iboR6+sSO0H52RDtUG0R7AbFFusFI9rKK9t5H5YqLr5XFZqXLUEaeM6tjPn6NXD/7QZn+dznRfqD5Krnodk9Mh+Je84op18jFl1wif3p3R+DYkBx4zqyOuVyunNYg999+bU5of/CyTP/IVfLTbjMxbyT9x+QTD7qS3nmuSz7mrpLJMk0WewPvoViSfHDTozLtcnc9zLzV7vqXuNfuPDbF69miXV6W6RcniH1SV0G066Sxpqvta7ravqYLAAAAAADVANFui3ZD/7HDqe9pN2tXNnR/ID9esVG+cNsDjlj3ZbjhUzfNl/Ude+Tk+TFHmLuyfVRGB/bKh/vjZfuFvi45f/pUVrIbtvceli//y4Oha5vn+swt98r3Hl0jL247Lpv6SnuvxayN2XnwqAyf6ox81oh2qCaI9gJii/RURPu2B+WyixucifbNd18qn7ivIzsNvu72nGg/uvQGuei65eGd7U7caxpp3WP2s380sJJl091y8V/eJ5u97TNhoW3k+lVyxZSr5LLLr5Jr71ktR81KGv+5QhPteRKR5G7Ov7Ncpn30UpmzKf619zwUkO+RayDaJ0oQ7TpprOlq+5qutq/pAgAAAABANUC0x4n2s4M7ZPvAUEQsazH71zf0nJOnNg7IAy3b5B/nLZa/uvmHIQmeFe1fu0e27Dskp4dz0txw7oMzMnawOyrZe7fJ0PFj8sFITswbBk58IH/77Z9Eru8L92tnPyTzl70lj7/SJ+t2nXFW2NivO45NB8x7iQr1OF7rGZb33+uWC6fD0+yIdqg2iPYCcl/jAxGZniTazb728eNK8euX+jvU3Unyi29/Wc7LMVl63SVy/XLv2NBe+amZVPdEuxw2a1k+JXPe9I6PnpKeXvPnsLwfXH27XHzVQ9Iz6gnuf1ru7kl39rBfFd6n/pmH4veuO8/lT7u7Of+B9+fRvfL0PQ/lbuAalOSHO+S1Xr9zSpb+0yUyfXXM9QZflukfvVSmr/W+RrRP2CDaddJY09X2NV1tX9OtObr6ZEprRvaPxhzT0r5Eps5fLQdH0/+PGgAAAACA/KT/M2k9inazR/ydwyekM3MhIpiL5e2DHzorWp7pfE/m/26z/OODz8rf3/e0/K8f/l4+841GuWJaeJI9KNr3HjoekuY52f6BjB3cGRLtI8cG5OxwWLIbBs+PybXf+dfI9X0+ffMP5Uvzlsnf3fe0XNfYIt95/HV56s0BeWv/iPPa7ffj8+a+wqfZ395/Us4Nbo18zoh2qDaI9gJibnpqpHrwpqe2aDfHzNeFxVvz8uVr5bKPXy6XfeQSuejLD8pmT1oPrm2Qyy651F3VMqVBmu66KifazfE375MrzHoYc/wjl8oVD5rpd3tK3hX2zq52M+H+8UvkYvNcl18jdzTfLVdkhXZGFn/5ErnoI7n1MFdcd588Z1bY2M/18Y/JZdNa3Z6zU/4SucPfBBOQ5IObHpLrP36p17lULv7yo47wt6/3px+5VK5+0LtRqnUNN4j2iZJKifbMwCHZvGW7HH3veOjxoeER2dm91zlm2LuvN9JNG4001nS1fU1X29d0g2xY2y1TlndLY9cFGYk5XhHqSrQfkYUr3M/s6uXdcsvGQRkp1+seyMitK/rk1dFSvheD8tQzVf4+AgAAAMA4lOtn0mTqUbQbjrzfK9sGSrspqpkKX9N1Sn77WkZ+9IdO+fov1sjf3fcHR64HmXLXr+XTN98Xkd+Gv77lh7L/3ZMRce5zfvCEjB3Y6exsHzlyQM4OjUbOMZiJ+Ovm/Fw+eVP0OT550z3yNw2/ki//YHnktf3TT56X7y9tk0fX75PnthyXtt7cZ7H5wAV5bW9UqMexoWdY9h3ql5HTHZHPGNEO1QbRXkR84W6L9sIFu5+AFB86JUeP5ybGs0l6PBv3RqmD+U4JxZx/Ss57wjubTXfLJ2atlsFR93pHjx6T1+77lLVL3Xsu6+/I+eOncmtlIpLcHD8mR2NfYLGvndR70hbtvkjf13dAtnXtjoh2I+AN5s9nzw055/hfVwqNNNZ0tX1NV9vXdHMYadwnG4zoXnukeoK2XkS7I8LDcr33rT55aqBMchvRDgAAADDBKcPPpONQr6L93OB22TlwNiLR8/F25kN5dsv7Mve3G+XGf31B/uH+lfK3lsAO8uUfrJCrvvkzR3jbEvyvbv6B7Hv3REScZxm5IEMnjsrooX1y9tz56PGsaL8gfz87fqL9MzMekC/OWxZ5XT7mtf/9j/4oX/3xs3LHo6/I7zYecm6A2ra/iJug7j0vJ97vjtwEFdEOtQCivYQY4b7h9Tdk1+5u58/Fx54+r17MzUgvuy9849TN930qe0PUQnN0ybWR/euE+ElbtBtpbuS6L9Ft0W5jJtorPdWukcaarrav6Wr7mm6WrOD2hHtIdLuT22ZqO0ePLM1K5fBxRz4Hr7v2iOzf2BOe/A48d2/gmENItIenxq9ee0SGi5DwmdZGmTpzttw4w2PeqoBoPyyt8xtkqn+sqaPgifTX1nU77yv5tVivO/Ke+uTVflfWh49bveDn3Z8T571v9cg1Mcec1xXpup+5/1rD3W5ZYAn5yPEdCHsAAACA8oNoTxLthv6jhwq+Kerr7wzJL1Z1yw0PPBsR1vm4es5i+fTX741IcLM6pjtzTM4Ebmwa5Mz5UTm5+x05tuZlOX3sZOgGqEHe/2BE/i5mdYyR+5//9qLYafYkjHS/9/cd8kznCXmlezgi1eNIugkqoh1qAUR7VZKRxf90uczbYD9ehQy+KfM+c6lc/KkbZPrsaXLlxy+XK2fnbog6fjpkjll9c/HlcsfLjKiT+KQt2n0Q7fFo+pqutq/p+pi1Mbc6Ajw6De2slPGn3M2kdWi9jHt+Tp67ojh73Ih2I2xN34he52t3Utt57rivA1J6w7qg9LeuPR5mgn3mYmnzxbo10d7e3CBTs3Ldle5zWw4VINvHex3uZ+J8ns613K9zYt6X6f7Eesz18k20D2RkYWiSvkeuac3Ivuzrjn4Ps3T1yTXZ5/W/Dkj8gYxMT3peAAAAACgjiPZ8on341BbZdegD6RhnV/vG/cPywxUd8pUFKyNyejy+NP8p+atbF0R2tX/qa/Nlc09GTg1fiMhzI9WPvdYmvXfdJ/tmzpH+R34rpxJke9+xU/K3d0Zvhvqpr/9Qrvn+b+R//XBF5DXl44vznpQZP39OWja9N65sf/Odc3LqeFfiNDuiHaoNop24MatqzGoZ+3FCypBaEu3mWOe2Ljl56nTkWJpopLGmq+1rutq+putiRG+PLPMm1J0J8+z6GFsCW2LdCGFr1UuoH1kFE3yuGCEcOT/MhnX+LwSix8K44ry5bSx3bki0d8qimYulPbhGpuDVMvZnYmHLbENInHufQWBC3Uyi58S8fX7McwSJyPGYzzXwuHme4CS+/9zOY8614roAAAAAUF7G+5lTTz2LdsOR9w/I1v7RiFz3MTc6faBlu1xXgmR3xfUy+atb74+I8E/eNF+ea9spx8+Fd6+fOTci77aukX3fvEveuflbLrfcKX3zfywnewfkg6HcDVHPjIq07RmQL97xYOT6RrRP+e4T8r9+ULho//I9y+Xzs5vl83c+LHc0rZYXtgxG5LrPhj0j8s5Av4ycit/NjmiHWgDRTghJPbUi2o1cN5I96XiaaKSxpqvta7ravqbrYMttZ2rdnzLPTWNnxfrynJTPTqzblEu0O9I6ugZlfAk8jmjvXyNzZzbkVsrErpZJogDRbv+yoKyi3fuehD6XwkW7/XhItPuv379uaFIeAAAAAMrHeD9z6ql30X5+cJvsOXxaOmOm2t8+eEGWvp6R6x94JiKlC8HsaP/stx6WT379BxERbkT74lVtcuj0iJz2xPmpkx/Iod8+LftuC0j2oGy/96dyvG9AzgxfcCT7iSGR1rbd8oVvLoxc/4qb5suV3/yZM1Fvv654Vsg13/21fP7bD8vn7vyl838X/qFDXtzxQaxkb993RgaP78w7zV5Z0b5PfvOVv5Y/+5PL5KKL4/iGPNmRkTORnsvBplvlzy/7c7noq8tk/+58zxPoNE93OxdfJv/9e69JZu9g5ByoLoh2QkjqqQXR7kv2St8E1UcjjTVdbV/T1fY1XYOzGsYW5YH1MPbxyA52WyoHiRwvQrRH1tSUcaLdEe2BtTJFYa+CsYibaA89phPtzh72oABXTbTHPZbnuQAAAACgTJTyc2hx1LtoN7x3fJ9s7R+JiHazl73hiTfl2h89HSOmx+dzCZLd5/4nV8ve4+flyJDIe0Mih46dkf33/0LeufXbUdF+87dk/7wHpL/3XTly7kN597zIwDmRR55/Sz47Izox78v2q27/mXz5nt9FXpuNEfJ/M3uRI9l9/nnBcvn9W0diV8j0HT4oo6ffjnyWNhNWtD/zQ/nEf708e31Ee22CaCeEpJ5qi/ZqS3aDRhprutq+pqvta7pJUja7lz003R6HO92dOGWeV7S74tx5noBYz94Y1Juez+4P9yatE5/LIrSD3Z9gz06sezdCLeIGqCG81xK8kWjvW33ylPO+Ap+Jc+2czHa/LkC055maD9+I1Z9uD0v5pJu1ujc6tXe0xwv97PmIdgAAAIAUQLQXItovnN4sfUeORW6M+uyW9+Wmn6+Wv733DxExPR5fvPtJZ31LRH4H+NbPfiddR844wtzh7IdysL1L9s3+gTPBHhLtM+fIgZfbZWBwOHv+gdNjct9vVslfT78vcu0gU+56PO8KGTN5f/VdS+Rz3jS7zxfn/koeWd0j63edD0n2bX0nZGhwS+RzjKNyoj3Iq/Ld//FpueTiL8m9z/XKiX77eJRiRXt2mr3A86E6INoJIaknbdFuxPrmLdsj+MLd3PjUPlbpPe0aaazpavuarrav6YbXxAQI3KTUnmiPTLV7UjhuGn480Z67Mai3/sTa+e6I+MAak6XZm7bGvJcIZg97g0x11sIslrbMapkb2sHuyfbA6pg5Kwu5GaqHtdYmJ9YNwfflrtLJSe9CRLt9ffuGpbnnXbAxI7dEZHn4+c1r85/fle0x140c874nCRIeAAAAADQg2gsR7YZzg9ul+1B4hcyvX+2T/7OwNSKmC+Ga7/92XNH+z/c8Ipv6jknm7Ic52X56VA6sfUPe+dY8eWf6d1y+MVv6/rBK+t87mzvvnEjPe+fkjp89JZ+5Of/zXD13SV7Rfs33nsiujLG576k2Wdt1NivZ2975QE68v8v55YT9GcZRW6LdnnrPTbnHinZnav0Tgan1152p9dcaPieX/Vl4Yv6rzXvkSJ/p3BuadL/o4uny5NsHvUn6V+W7f+G9rmd/L7d9wvzZPee32XPca1xuTcsf3Hsy5n3CeCDaCSGpJ23RXg9opLGmq+1rutq+pjsucSLe3tMOAAAAAABFgmgvVLRfOL1Jjr2/T7YNuCtk3s58KD95Zqd8pcSboJop8c98o9FZ32KL76wA/+ZCeanroBz84EJIoPcfOi4HftIkB36w0OMB6e8+IAPWeVsHTsoNdzfLp752T+TaPp+++V754rylkdfn86V5ZmXMIxHB7vPtR9bKqu1n3N3sPcPSd+iAjJwaf2WMT+2Idv8xa6XMFQ/I69vflf2WaD/YlNu/bgv1lbfHi/bOn8Z3crLdF+328ZxMD+59D12/qVve7bXfJ4wHop0QknoQ7TpprOlq+5qutq/pjktgst1/rHdjT+QxAAAAAAAoBkR7oaLdMHbmbRk4NiBb+kfl7YMfyv1Pb5V/uL800W6Yctev5VM33xuR3z5GkP92fYf0Do6EBHrmjc1yYOHPc6L9hw9IZtVLMnByKHTeqs53ZMrtD0Sum+Wm+fI3s38lX/7B8shrM5hfBnxhzmPyuTvjp9kNtz30vLyw9ZQj2rszR+R8gStjfGpGtPvT6Vc8IG9sf1eGstPt7jldDwVF+67s5HtuUt3r+yI+sjpmn/zmuiudTm5fu/3YS1nR7l/3tTmetP/qMtm3a2f2/K82e2L9WW+6/atLZd+uQt8/+CDaCSGpB9Guk8aarrav6Wr7mm4hRFfHINkBAAAAAHQg2osR7S6bpffoe9KZGZUf/WGLSrQbkX3lN/9VPnlT/MT5J2+aJ3f+YoXsPhZeCXPwtyvkwH0/Dky0L5SDv3xUBo7l9rn3nxW5/7dr5KpvJO9n/8yMhfLFecsir8t/bV+Yuziyl93GF+1bek/I0KniJLuhVkS7WQ3zX2MmxS/yzgmL9jXx0++GRNEeeM5n92fX1fgiPSzac+dkr2Mm67c9Lw0JE++I9tJAtBNCUg+iXSeNNV1tX9PV9jVdAAAAAACoBoj2YkW7WSFzbnCH7Dl0UhY83akS7QYz1f7pW5Jl+OdnNcqm3vek39vT3n/0lBx46FFnij0o2g/c/1Ppf2cguz5m38lhuf77zfKphNU0n/zaPXmm2Vfk3ctui/ZXuo7J8fd3y1iBe9mD1Jxoz060hzvhHe050Z6daLfPj4h2e3o930T7+KI9O9EeeW9QDIh2QkjqQbTrpLGmq+1rutq+pgsAAAAAANUA0V6saPc5P7hVft66Ub6y4I8xoroIfrBCPvsvDzni25bhjhC/ab48sfZt2X9yRAbOivTv6pUDP3k4LNkN9/1Y+tu3ycCpEWea/YWOvXL1N5PXxlx520/ly/Ofir4ec/PTu38rn/9Oc0Sq2xgR/+3mVjk00CFjZ4qX7IZaEe1JO9qdG5y+Mxi5GWr8jvbAzVMjoj3wmD2NHtnRniTa35X9sdewbpYKBYNoJ4SkHkS7Thprutq+pluOPgAAAAAA1BOI9lJF+4Uzm6R775vy7Ueekb//0R8isroYzFT5X8/8sSPVbSFuHvuXn/9Odh45LQNnP5TMa9Z+9uCe9udfkoET5+XAmTG594lVcuX0H0WuZ/irWxfE3wD1Byvkmu//Vj7/7aaIVLcxkv0ff/AreW3TWjl/oj3y+RRK7Yj24OPji3ZzflS25xftDs/cK58wO9X9jifQ3Qn68UW7Oc889t9Cz4toLxVEOyEk9SDadcJZ09X2Nd1y9AEAAAAAoJ5AtJcq2g1jp4xsf13uWNQi196nk+3XfO838pnpC+SKaVHZ/vezfy6v7u6XgyeH5WDLamdNTES0mz3tv/m9DBw5JdsGTsrXf7REPv31H0Su9embfyhfmLPY2cEeeQ13/1b+psBJ9v8z/xF5bdMaOXe8LfK5FEN1RDuAC6KdEJJ6EO064azpavuabjn6AAAAAABQTyDaNaLdcOF0uxweeFO+//iz8g9K2f6F2b+ST339hxE5/plbfihPvrRF9h85LQeWLJMD9z4YkewOP39E+g8ek1Ud78iXv/WTyIS8+fpzdz4sX77H2svuTLL/prBJ9jt/KdPuXyzbd74kI4M6yW5AtEM1QbQTQlIPol0nnDVdbV/TLUcfAAAAAADqCUS7VrQbjGw/eOBN+fHvV8lX7lfI9h+skM99u1k+GTOJPvvhP8ju7gNy4KdNUcHuc++Dktm5Txb+drVcOd26wepN8+WqO34R2ctuJtunfPdx+dx3xpfshm/94teyZcd6GT6pl+wGRDtUE0Q7IST1INp1wlnT1fY13XL0i+OwtM5vkOa2MRmJHAMAAAAAgPRBtJdDtBuMbB89tUmWvrhWblj4dFSiF4jZ137V7T+XT94UvjnqlbfeK+0ta6Wv8WdRwR7gnWfXyVe+Fd33/tezfixfmrcs/Fz3LJe/aXjUmXK3hbrNF77zsDzwm9/JiSNvOu/Vfv+lgmiHaoJoLzD/OPVrEUz+2PKMfSohxEqlRHtm4JBs3rJdjr53PPS4+do87rN3X2+kmzYa4azpavuabjn6RdG+RKbOXy0HR83Xg/LUM90yZXm3XG1xy8bB8oj4gYzcurxPXnWeDwAAAAAAEO3lE+0+QyfbZV3by3KnuUlqiatkvjTvKUeMB2X5J6fNk4XfWSDd90TlepDH5jTK578elux/9Y1GZwf8//qhv5d9hXMz1C80PBIR6jZmVcw/3fuoLH2hRY4feUMunI6+Zw3VEO292/fL2hffkCdXPC9LlrbCBOGJ3z0rzz7/iuzavFvO95+MfN/jQLQXGFuy+6Ld/N9SZPv5wWNy9KjPKTk/mu+4y6D9PfrglBw9PmQ9aHUHo8dldEgGY55TxDwefp7zx2NeR8wl1el9VK64+HZZZz9OJkTSFu1DwyOys3uv7Os7INu6dkdEe9y5Rsrbx9JEI5w1XW1f0y1HP0ynLJq5QFoy8T+8tzc3SHN7zDR7V59MSUOI5xXt5rUulvbR+NcKAAAAADAxSf/n38km2g1jp9ulP/Om/GTFKrnu/j/I395bvHD/0nwj28N71r9083zZ+P0F0hcj2A275zfK1On3yKeDkn16o1zz/d9mr2sm5qfctWTcVTHmhqef//Yv5TsPPSE7dr4kQ2VaFWNTadG+tb1Lnl+zQfbuOyhDw4q/QKTmMjY2JgOHj8qa9W/Kxtc65GzmROT7b4NoLzC2ZA+K9lJk+7rbL5GLPnK5XHa5y8WXXCpX3vOmDCYcN1z/m0zgCkPy9LRL5KJLpsvT1vcu1P3IJXLR5dOlqeNU7gRHal8i17dYxnzbg3LZxZfIFc3+82Sk6apL5KKPhl/HvA3hWlmCaJ/QSVu0G2lu5PrZc0PjinaDmWhHtBeGpluOfpb+1TJ35myZ03IoKtKzxxdLW5zYThTt1tT72iO5azudbmnsuuA95p3bmpH9o0dk4Yq4afkeWTrgn39BMq2NMnXmAlmZiZH/AAAAAAATkpifx8vMZBTtPiOD7fLSJm+6/UfFy3YjyP/nNxY6+9WNNP+fN82Txd++T/bETLUb+d4650fy5ZvnO9PvjmS/5Udy9dzHnd3vZhf7F+8ucIr92w/Ljfc9JstWtcqpYxsj76ucVFK0m0n2VS++LqfPlC5VSe3HCPf1r7bJzgIm2xHtBcaW7LZoL1a2GxmeE9oiMtgq11/8Kbm/O+G4nQ9a5fqP3yf3336JTLOEud0dXH27/OnF10hTr/eAkdp/+Sn5xHXL5Wj2LJHNd39Mrrjqqohon742cFJaQbRP6KQt2n0KEe3mnB279sjJU6cjx9JEI5w1XW1f0y1H38GshJk5O+/udTPNPtdI+IhMTxbtG9Z2y5SsXHdFenCtTO/GnmzP+bMj2QPXyDvR7lHAawcAAAAAmDgg2tMU7Qazz/zdgTflmdfWycxftsi190aFej6Cst0I9Ntn/UC2zmuMiPZ99yyUH9z+Q7nyprBkN3vYvzhvmXxh7mPyuW+PM8V+5y/lunmL5LGWlbL3nVdleDCdKfYglRTtL69vcybZR0fH7EuQCZaBw8dk3fqNcvrA+5G/B4j2EmJLdl+0lxpbhttSO3o8nKNLb5CL7+6Q8y3T5aKvt8r5wLG47mt3Xeqc78RI7evuljlXXSuLD3snjL4pc/7ybpkT6hYh2jfcJ5fd0yqbm6fLZZeYifprpemdITm6ukGuNFP1H7lG5r0ZmKqXU4Fzr5Hpjbcj2idwakG0+/vb2dFeHJpuOfqZlkaZOsOdCreP5citlImV2bGi3Uyl98mG4GPmPEumGxl/68aMNC7vkWWBaXWHQkS7oX+NzJ3ZIHNWJvwiAAAAAABgwpDv5/byMNlFu48R7sfffUuWPL9GvvavK+UfnJUyUbEexzV3Pymf8WS7EemvfPd+6bVE+7a7F8g/eNPsn775PvnC3MflS/OXydWOYE++2alZD3P17Ifl2u8tkgW//p307dsgoxUQ7D6VFO1Pt6yTwVOn7TqZgDFT7X987iU52Xs08vcA0V5CbMmeRKGxZfj57ofkiotz4tscv2zWb+S551a7bNgbkOnHZOl1l8qcN73J9ovD62PsaztZfbtcdNWjcsD82Yj2qx6V15ZcK1cvOeYef/Nu+cRdb8pzMaL96vu812DY5p1vZ+3tctHFl8u05Rk5L0PS87OrnJUz1zd2yOCoyODyaXLRxx+U7d7pBx69Ri766O3y3HF3Z/z2R2+QixHtEza1INqDGOlu9rSbfe32sbTQCGdNV9vXdPX9w9Iyv2Fc0e6saGnqTJbYcaLdkeT26pduudqeWneEfMINVIsU7TfOSFhtAwAAAAAwYUj/511Ee5SBg2/KM6+vl3m/flb+T+PT8rcxct3mmu89IZ/5RqMj2/9l1g9kR2Cqve+ehfIjb5r9Uzf/UD5358PyhTmPjjvBPqXhYZn1k8fliedWSnf3y86qG/u1pk0lRfuKP74op8+ctetkguYPz6yXE/sR7WWJLdSTKDShPeofv1QuuuQquWN1TmKb4xd/frrcMbvB5Wcv59a8HF0u137kbnnNuZmpu6s9uG89VrQbEW6J9gOHfyNXe4+tu/1jMmeT3XVF+yeu916DYWlX+Lp+gtc3ecf84iAgzkOrYbrk/o9bk/KsjpnQqTXRbtbGmPUx5nz7WFpohLOmq+1ruuXoO+Rdv3JYWuc3JBzzSBTt40lyd51MY9cRaQztay/iGnlfOwAAAADARAPRXg3RbqbbDcMn2+XggTflsefWyNQf/1H+7r78N041K2DMZPunb5ovz8z9kbMuxoj2N79/v3Oj1E997Qdy5Tf/NSLUc9Pr5ganD8uX5zTLjx5fJtu6XpIz778lo97rsV9nJUC0k7SCaC9jbKGeRKFxhHZjhxw9mpGnZ10qn2gMC+xYWe7FrI256OJLczcoNatZpuXWx8R1z7dMk4umWKLdmYz/lNy/7WWZ/pfutHmcaC9odYwt2m1xHvr6ZZl+8VW5nfGR42SipdZEu1kdU+n1MRrhrOlq+5puOfpZkm6GakT2/NVyMJ/sjhPt/s1NgzdAtQjtZY+9hjvtHhHwPo5k52aoAAAAADCZQLRXQ7TbXDizSU6/3yZvd22Q365ZK/ctfUFuX9QqX33wafm7+37vTLz7XPPdJ+Qz0xdIw6x7ZOvse2TPnd+Xxunfl89+/R7569t+LJ+/8yFnHYzhb77zS/nbu5rlpvsfkzlNv5Vfrvi9vNK2Wt47/IaMno6+jmqAaCdpBdFexthCPYlCExLah5fLtZZ4jpPlbowcv0SmtxyTo0c9uh+Vqy+ell0fE+2ecqbeP/HgXvfLrGg3An66XDHlGrnSO1Yp0X7HxZc6E/TZ2OeTCZW0RbsR6/7+9SC+cA/uZ2dHe3FouuXoh8ntYvcfy3sTVJ9YSW7wZHtgdYy/Isa9EWqPLM3uZffPta7jXNvvB883r3WxtLMqBgAAAAAmFen//ItoL44LpzfJuRPtcvTwRtnf+4Zs2rFBVr66Xn7+9PPy7UUr5KbG38iX5zbJtd/4kay6pUHeuPk78rVv/ED+Ye5DMu1Hj8q3fvFrWfjE7+TJ51fKhvY1sqfnFTmcecMR+WOnos9XbRDtJK0g2ssYW6gnUWhsGb698VPOVPpgwvFszNoYaye7ke+Lv5xbHxPqDh2T1xrdfejr/IsHRLvZ8T4tIPmLEe2Dbz4k85725H1Ron1Inv76JXLxrNXe+x2SHna0T+ikLdrrAY1w1nS1fU23HP28OFPu7D0HAAAAAKgd0v/ZHNEO+UC0k7SCaC9jbKGeRKGJiPQPXpbpH7lUpq8+lT1+0cUWt78sR5dcG1oT4+dA81XZx0PdSz4mV3z9UdlsbjrqJyjarcSJdvt1uMeH5Lnpl+TW0RQl2o2lf1nu+Li3p/7jn5Lrm++T6xHtEzaIdp1w1nS1fU23HH0AAAAAAKgnEO2I9uqCaCdpBdFexthCPYlJlaFTMlj63xsn548fk8HcfVzJBA2iXSecNV1tX9MtRx8AAAAAAOoJRDuivbog2klaQbQTQmoiiHadcNZ0tX1Ntxx9AAAAAACoJxDtUBsg2km5g2gnhNREEO064azpavuabjn6AAAAAABQTyDaoTZAtJNyB9FOCKmJINp1wlnT1fY1XQAAAAAAmGxMXtFOJk4Q7SQuiHZCSE0E0a4T1pqutq/pAgAAAADAZAPRTuo/iHYSF0Q7IaQmgmjXCWtNV9vXdAEAAAAAYLKBaCf1H0Q7iQuinRBSE0G064S1pqvta7oAAAAAADDZQLST+g+incQF0U4IqYkg2nXCWtPV9jXdkmhfIlPnrZaDozHHkhjIyK3Lu+XqtUdkxD4GAAAAAAAVBNFO6j+IdhIXRDshpCZSKdGeGTgkm7dsl6PvHY8cMwwNj8jO7r3Sua1LTp46HTmeJhphrelq+5pu8RyWlvkN0tw+JiNjg/JUa7fcsnEwIs83rO2WW4OPI9oBAAAAAGoERDup/yDaSVwQ7YSQmkjaot0X6Pv6Dsi2rt2Jot2IeHPejl17EO0FounGkWlplKlNnTISN7Hev1rmzs9Ns/du7JEprRnZHzrviCxc0SPLBi6kLtUzrY0yt+VQ/GsFAAAAAIAYEO2k/oNoJ3FBtBNCaiJpi3Yj0I1cP3tuKFG0G7G+dccu5xiivXA0XZv25gaZOmOxtI3G//Btjjti23/MmVS3pHpXX0i+m+n2KWaafXn89Ltzvnf86uU9stS7VmQq3mFQnnqmWxq7/OfrlEUzG+TGpg5kOwAAAABAQcT/rF9OEO0k7SDaSVwQ7YSQmkjaot0nSbT7E+9GyJtzEO2Fo+nmcFfC3Jhv97qZZp9pS/jo+ph4QZ7wuC3qHeneJ6+OetPykVUztmg3HJbW+Q3e3vj0/6MBAAAAAKC+Sf9nZkQ7STuIdhIXRDshpCZSbdFuvjai3Qh3RHtxaLouhU2FJ62UCa+PSV4bEyfaTTf8WECkG+nuifZcN/n6403jAwAAAACAIf2flxHtJO0g2klcEO2EkJpINUW7LdbtryuFRlhrutq+puvQvkSmzpw9jmg3Mn6BtGRifigPTqVba2OCxIn24FqZII5oN9c11xo9IgvX9kmjI92NaO+TDTGv0xXts2XOSna2AwAAAAAkE/MzfZlBtJO0g2gncUG0E0JqItUU7ebPm7dsj2Xvvt7INdJCI6w1XW1f080xzuoYI+OTjgXWx7waI9N9kkS7/VgOT6p39TnnvLq2TzZk5XvwPFbHAAAAAAAUTvo/MyPaSdopVLQ/3bJOBk+dtutkAmZsbEz++NxLcrIX0U4IqXKqKdptmGgvDk3XJn79iivhm9vHEoS4vz6mR26xb4waIFaqOzvZczdADXdc0b5sY59zTfMcZrL96tDedk+y553GBwAAAACAHIh2Uv8pVLS/vL5N9u47KKOjY/YlyATLwOFjsm79Rjl94P3I3wNEOyGkoklbtCdNrccJd0R7cWi6cUR2scfeBNXCWR/TLVdH1sYYWR5dDRO8eaor24PH3Zuh+vvanVU05mvvOYLdTGujzG1hVQwAAAAAQOHk+bm+TCDaSdopVLT3bt8vq158XU6fKV2qktqPmWZf/2qb7Ny8W873n4z8PUC0E0IqmrRFez2gEdaarrav6RaCmXJ3ZHbMMQAAAAAAqDcQ7aT+U6hoN2xt75Ln12xwJtuHhvkLNJFiBPvA4aOyZv2bsvG1DjmbORH5/tsg2gkhqQfRrhPWmq62r+kCAAAAAMBkA9FO6j/FiHaDmWxf++Ib8uSK52XJ0laYIDzxu2fl2edfkV0FTLL7INoJIakH0a4T1pqutq/pAgAAAADAZAPRTuo/xYp2AB9EOyEk9SDadcJa09X2NV0AAAAAAJhsINpJ/QfRDqWCaCeEpB5Eu05Ya7ravqYLAAAAAACTDUQ7qf8g2qFUEO2EkNSDaNcJa01X29d0AQAAAABgsoFoJ/UfRDuUCqKdEJJ6EO06Ya3pavuaLgAAAAAATDYQ7aT+g2iHUkG0E0JSD6JdJ6w1XW1f0wUAAAAAgMkGop3UfxDtUCqIdkJI6kG064S1pqvta7oAAAAAADDZQLST+g+iHUoF0U4IST2Idp2w1nS1fU0XAAAAAAAmG4h2Uv9BtEOpINoJIamnUqI9M3BINm/ZLkffOx56/OSp09K5rcs55rN3X2+knyYaYa3pavuaLgAAAAAATDYQ7aT+g2iHUkG0E0JST9qifWh4RHZ275V9fQdkW9fuWNG+u+cd5zy7Wyk0wlrT1fY1XQAAAAAAmGwg2kn9B9EOpYJoJ4SknrRFu5lkN3L97LkhRHsMmr6mCwAAAAAAkw1EO6n/INqhVBDthJDUk7Zo90G0x6Ppa7oAAAAAADDZQLST+k/hon2f/OYrfy1/9ieXyUUXB7jiQXlj+7syFDk/HQ42T5c/v+zP5aKvLpP9u96LfG2fD+mBaCeEpJ5aEO3BHe3mHHOu3U8TjbDWdLV9TRcAAAAAACYbiHZS/0G0Q6kg2gkhqafaot3GrJqptGzXCGtNV9vXdAEAAAAAYLKBaCf1n1JE+1ebe+RIn328OiDaqweinRCSempNtJsJ9x279iDaC0DTBQAAAACAyQaindR/0hXtr8p3/8en5ZKLvyT3Pvd7ue3/Z/58mSvFd+8KTMib4/vlRL/3PNddGZ6cv+IBeX2bOzVvi3X76+hrgLRAtBNCUk8tiXazp31n917Zu683cixNNMJa09X2NV0AAAAAAJhsINpJ/acU0R5cHfPfv/+6ZN4ZjDnf4It2a92M6V3xJfm3f/Lnuccc+W5eQ0InQazbX0dfA6QFop0QknrSFu1GrPv714P4wt2sigk+br62r5E2GmGt6Wr7mi4AAAAAAEw2EO2k/lMp0f7V5j1ypC9wDU+sH2zyRHlgaj10jWd+KJ/4r5dnj+9HtNcMiHZCSOpJW7TXAxphrelq+5ouAAAAAABMNhDtpP5TimiPWx1zsOlW+a9GeHsC3hXrwdUxvc5qmNcaPieX/dll8t+/5wl6R6R/IiDaEybaEe01B6KdEJJ6EO06Ya3pavuaLgAAAAAATDYQ7aT+U2ui3Rfpbj+wkx3RXnMg2gkhqQfRrhPWmq62r+kCAAAAAMBkA9FO6j+liPbQpPnF35AnOzJyJnK+oXTRHn4OJtprEUQ7IST1INp1wlrT1fY1XQAAAAAAmGwg2kn9p9ZEe2h1jHnssQb5c3a01ySIdkJI6kG064S1pqvta7oAAAAAADDZQLST+k/hoh0gDKKdEJJ6EO06Ya3pavuaLgAAAAAATDYQ7aT+g2iHUkG0E0JSD6JdJ6w1XW1f0wUAAAAAgMkGop3UfxDtUCqIdkJI6kG064S1pqvta7oAAAAAADDZQLST+g+iHUoF0U4IST2Idp2w1nS1fU0XAAAAAAAmG4h2Uv8pVrT3bt8va198Q55c8bwsWdoKE4QnfvesPPv8K7Jr8245338y8n2PA9FOCEk9iHadsNZ0tX1Nt3wckYUruuXq1ozsjxyrT9qbG2TqjNly44zZMmflIRkZjZ6jpn+NzJ3ZIDfOWCArM2MyYh9PgYq8LwWbmufI1JmV+zyqzaZFc2TazNly48MdMjyS/n/0AgAAACDayURIMaJ9a3uXPL9mg+zdd1CGhvkLNJEyNjYmA4ePypr1b8rG1zrkbOZE5Ptvg2gnhKSeSon2zMAh2bxluxx973jkmGHvvl7nuMH82T6eJhphrelq+5ruePRu7JEpcfK8q896vEZFuyOyF0vbaOn/MWHE9NyWNIT0YWmdX+K125fI1Pmr5WBNvi8d6Yn2LbJoVvCXDAMyXDPv/bC03jNHmttGa+g1AQAAwMSl9J8hCwXRTtJOoaLdTLKvevF1OX2mdKlKaj9GuK9/tU12FjDZjmgnhKSetEX70PCI7OzeK/v6Dsi2rt0R0e4fr7RcD6IR1pqutq/pxpFpaZSpTZ2ugB3IyK3Le2TZwIWQ9Nywtltu3ThYZhGaAjUt2jtl0cxGaSlFKE9g0Z4K/WvkrlkNzgS/L7IzrUuktZTPPiUyrQvlrpbc63MxAn6htBwcrZnXCQAAABOB0n+GLBREO0k7hYr2l9e3OZPso6Nj9iXIBMvA4WOybv1GOX3g/cjfA0Q7IaSiSVu0m0l2I9fPnhuKFe3m62pKdoNGWGu62r6ma+OuFQmK6UF5qrVbbglJdTO9npPvztT78m652rD2SIwQ9KbdvXOy1/Kn4i3R61wv9jpxGFltVq+4U8o3zvPls/V4Fn9S2j3e3BYUrXGP5RHSRnablR+h69qvLx/5RLv7Wvzp6xvnrXLfV3bVjP2+vO+Z85qsXyxsWiLT7MfyvS/n/OT3lWltDLzv2dJkPi/7GhG86f3QqprcY45cNjI8+94WS9uI/bkY6Rz4TMyqFec9uY+bafDw6zAT7I2OpG43U/JN/vn2a/PPDX/eB7JrXHLT5m3OtL33ufjy23xezR1yoKUx+7mFp+XzXTtHvGg3139cps1qkKa3mHYHAACAchH9WaTcINpJ2ilUtD/dsk4GT52262QCxky1//G5l+Rk79HI3wNEOyGkoklbtPskiXYj2f1pd391jH1O2miEtaar7Wu6OQ5Ly/wGT1SHj0XWx0TWxgTOiwjyQXnqmaCod6V7Y9cFGXGm5fvk1bjni1wnnkRZ7JNnot35pUJTR64bJ6mTnsO57oKcJE/o5idZtMc+Z5DEifboLwv892lL2tjn8N5XVq77kt6X3v7nGZHg4+MI+vneLwycxzwRbr9/R7hHn8NZKZOV5a5c9yW9OWbeS/g9+qK9Q5pnxYl4H1ekz83Kcffr8HPNcUS5L9DN803zjzufUUNO/DvT842eiM9zbUu2J4p2/zNxJvJrad0NAAAA1C/2z5DlB9FO0k6hon3FH1+U02fO2nUyQfOHZ9bLif2IdkJIlVNN0e6vjTGPm+PmMXO8c1uXnDx1OnKNtNAIa01X29d0Xbzp76B0DmKtj0laGxMryE3XmlrPnWeke59sMMcC0+1J14/DkcjZKfbo8Xyi3T4WK54THjfSOPyYO53tC273/zPAnjq3psPzvDb3fQWltEWiaPeEdvZ7WZzMz/u+zGPeRH32a/t15cUS694keGTKPFa0m+6S8GOmP3+1Mx3uv+7h0cB0uyOnzXU6nInyRNFu/zLBfw1O1zxmi/fwc4f+7PRzE/Aj7e6130q8tvU6Qtex2SKPmMl4bpoKAAAAatL/WQLRTtIOop3EBdFOCKmJ1IJoH++xtNEIa01X29d0HfwVKEmiPbQ+Jrw2JnherGg3At1fKxPEOc9Mu7vX2rC2TxrX9skGT+Q7E++R1xGHK4J9qW2vfckns8Ny3AjpxdIec16ckI4X6THPH4u3FiafSLfel7OeJXg8j2gPvWdHZnfGTkEX875C62GCq2XyvocomwLPaabCF8XJ7zjRHlorE8Bfw+JL+8xqWdS8WJrNc2TWyF3mMxrpHF+024I7RrQX3g9MsRvRnvfaMdeamTS57on24NoaAAAAgJIo/Oe3UkG0k7SDaCdxQbQTQmoi1RTtBrM6xuxx979GtBeOppsjeXWMIbs+JmFtTPacONEes4fdx5XqR6TRu/bCrkFZ1hov8sfFEcyW7M4r2gPT3+2LczeAtc5JEtL2Y3YnKqwLn2gPEZwi9x/LJ9oDv0AwryNp+jzuPcQ9lg8jzvP/wsDCk9IHR438tibUfRJFe4Kc9o/PXy1tKxtlUfshaWleIwfbFnsT895u96Qd7XET7aHHShPtiRPt3rVDj3mrY5x1NHHT6qyOAQAAgLIS8/NGmUG0k7SDaCdxQbQTQmoi1Rbt5mt7dUzw60qgEdaarrav6dq4gjhG/nrrY26J3Bg1R6xo93ayJ3Uc0b4xI43muHkOM9m+3FsnE3N+fqL7yeMfszuNMmdeYN+6Rax8dv6/AKI3Ci2O5LUu0fOs92DvUrdxRPwCmZNnrU7s+3IkcJ7rWkT3rgcm3mPFtrcCpm1xzE51j1ipPo4s90T7yib3/yuhvblRFjUtkDn+c3iT4k0BWZ5pXSKtzvt0b1aak9jxe9ULFe2OMM+K9PGunSNxR7sn2c0PcZFjAAAAACUR8/NUmUG0k7SDaCdxQbQTQmoiaYt2I879m5wGCQp3M9HuP15pyW7QCGtNV9vXdOPItJgpb3u6210fM2V5jywNTZv7j8ethvHPcWV78Li/GsaR89lrujdOzTcBH8bbLR+YGp+zMmYa21+NEzdVnrgPPXrtyPVD1zXE/IIiL0mi3Vstk/S8Ho7kzj6//dzuNaK96LUj1w+uhvGv7Unv8HOGj2WfI69o968R/T6Yx8PPa1/fk+3W63blsyu0nf3l/socS6z7j+W6Qdnt9f1r+9fJPu84oj30d+Uxa1o95toxU+vxot0890JpYVUMAAAAlJXozyLlBtFO0g6incQF0U4IqYmkLdrrAY2w1nS1fU0XEia7K0KSaC8HaV4bQkRWx5RGvGgHAAAASAPdzy2FgGgnaQfRTuKCaCeE1EQQ7Tphrelq+5rupMeZSrenwStF8Gas9jEdzpS+M1EePQZlpiyiPTc1z/cMAAAA0kfzc0thINpJ2kG0k7gg2gkhNRFEu05Ya7ravqY7acmufYmuMKko3o1Oy/U6sjdhjazCgdRQivZNi+a4K3PmrSr5GgAAAADFkf7PHIh2knYQ7SQuiHZCSE0E0a4T1pqutq/pAgAAAADAZAPRTuo/iHYSF0Q7IaQmgmjXCWtNV9vXdAEAAAAAYLKBaCf1H0Q7iQuinRBSE0G064S1pqvta7rl6AMAAAAAQD2BaCf1H0Q7iQuinRBSE0G064Szpqvta7rl6AMAAAAAQD2BaCf1H0Q7iQuinRBSE0G064Szpqvta7rl6AMAAAAAQD2BaCf1H0Q7iQuinRBSE0G064Szpqvta7rl6AMAAAAAQD2BaCf1H0Q7iQuinRBSE0G064Szpqvta7rl6AMAAAAAQD2BaCf1H0Q7iQuinRBSE6mUaM8MHJLNW7bL0feOZx8bGh6Rnd17nceDdG7rkpOnTkeukRYa4azpavuabjn6AAAAAABQTyDaSf0H0U7igmgnhNRE0hbtvkzf13dAtnXtDon2OMxxc97Zc0ORY2mhEc6arrav6ZajDwAAAAAA9QSindR/EO0kLoh2QkhNJG3RbibZjTw34rwQ0b53X6/TsR9PE41w1nS1fU23HH0AAAAAAKgnEO2k/oNoJ3FBtBNCaiJpi3afQkS7WRezY9eeik6zGzTCWdPV9jXdcvQBAAAAAKCeQLST+g+incQF0U4IqYnUkmivxjS7QSOcNV1tX9MtRx8AAAAAAOoJRDup/xQq2p9uWSeDp07bdTIBMzY2Jn987iU52YtoJ4RUObUi2s00+9Yduyp6E1QfjXDWdLV9TbccfQAAAAAAqCcQ7aT+U6hof3l9m+zdd1BGR8fsS5AJloHDx2Td+o1y+sD7kb8HiHZCSEVTK6LdTLMb7McrgUY4a7ravqZbjj4AAAAAANQTiHZS/ylUtPdu3y+rXnxdTp8pXaqS2o+ZZl//apvs3LxbzvefjPw9QLQTQiqaWhDt1ZxmN2iEs6ar7Wu65egDAAAAAEA9gWgn9Z9CRbtha3uXPL9mgzPZPjTMX6CJFCPYBw4flTXr35SNr3XI2cyJyPffBtFOCEk9aYt2I9Y3b9kewRfuQ8MjsrN7b9Wm2Q0a4azpavuabjn6AAAAAABQTyDaSf2nGNFuMJPta198Q55c8bwsWdoKE4QnfvesPPv8K7KrgEl2H0Q7IST1pC3a6wGNcNZ0tX1Ntxx9AAAAAACoJxDtpP5TrGgH8EG0E0JSD6JdJ5w1XW1f0y1HHwAAAAAA6glEO6n/INqhVBDthJDUg2jXCWdNV9vXdMvRBwAAAACAegLRTuo/iHYoFUQ7IST1INp1wlnT1fY13XL0AQAAAACgnkC0k/oPoh1KBdFOCEk9iHadcNZ0tX1Ntxx9AAAAAACoJxDtpP6DaIdSQbQTQlIPol0nnDVdbV/TLUcfAAAAAADqCUQ7qf8g2qFUEO2EkNSDaNcJZ01X29d0y9EHAAAAAIB6AtFO6j+IdigVRDshJPUg2nXCWdPV9jXdcvQBAAAAAKCeQLST+g+iHUoF0U4IST2Idp1w1nS1fU23HH0AAAAAAKgnEO2k/oNoh1JBtBNCUg+iXSecNV1tX9MtR78cbFjbLVOW98jSgQsyEnO87uhfI3NnNsiNM2bLjTMWS9toGv8xc1ha5zfI1BmzZc7KQzIyah9PAft9jYzV1verf43cNatBbny4Q4ZT+czrm02L5sjclgEZLsPflUzrQpk2c7bcOG+VHBjhswYAAKgv0v93N6KdpB1EO5QKop0QknoqJdozA4dk85btcvS945Fje/f1Osd84s5JE41w1nS1fU23HP1kjsjCFd3S2GXL80F56pnw47Up2l2R3dymkMmOmE5HtGdaG2XqvNVysOhrB95XqcLVf1+TRLRvap4jU41Udn7B4NLUNlrw51ea4D4srffMcX6Rknvex+StkdGSP/PSXkd+0rgmAAAApE35fk5KAtFO0g6iHUoF0U4IST1pi/ah4RHZ2b1X9vUdkG1duyMS3Qh4I9r9r81xc97Zc0ORa6WFRjhrutq+pluOfphOWTRzgbRk3B/eHYG+9khYDA5k5NblffJqzYu52hbt7c0NMrellEn2CSzaU8KIdo1MLk1Gu6J97spcz1xn2szSZXtpr2McNj0uNzV3yJA11W4m3u8q93MBAABAmSj/z6Y2iHaSdhDtUCqIdkJI6klbtBuRbuS5Eedxot1IdnOO//XJU6dlx649iPYC0HTL0c/Sv1rmzpwtc4z89R/r6pMpllTv3diTk++OdO+Wqx3i5Ls7/T7FPycr7aNT8S5mir5HlhU4Ge9MhQcmlX2pbiR2eJLYxV3R4opq531mX2/cY/lEe27ti3Ptpo6ipXeyaLeuHVhdU8j7Cl/Te8xeTZMo2jtl0azcc0RW2mxa4q4bCRwvSMQ6Pev5rMeCU+dx182uOvEmw4O9qHx2JXezN7Uef07StXPT7vbjWczEvS+m/Sn8yLGoaI97LPwcC2TlwaCEj07Fz0nszpamt0ZD73G84w4Jon10bIs8ctscmfrw2zHHAAAAoLqk/+9mRDtJO75oBygVRDshJLWkLdp9kkS7+dpfF+NPvwcn3CuBRjhrutq+pluOvkP7EkdyRqe/7fUxCYI8Yco9PBHvdm/ZOOh8bY7d6v05/HwFivZECe6TPNEeWdviXMud5A+dm/AcjvDOyvU4wT0+SaLdeW15xX3yRHv8+2qUlUnvKyTabSm/xZHuuecxXzdGP6OC8K+VW9diXuu0puiKGFeKW6LdkvKOQOj9xsIAAOzaSURBVJ7v7hZ3/hy5ThGi3bv2W/5n4XwdFt7Jk+Rb5BHvfbnH3K9dGR6V6v61zOt15HX/GnmkNfdeg+8rcq79Oowgn7VY3hr2XqfzdeB1O78AWCxt/vEkEkW7wX0P09jjDgAAUGOk/+9lRDtJO4h20IJoJ4SklmqL9uAxI9yD0+2VQiOcNV1tX9MtRz/T0ihTzSStty7GJiTLE4R6/ONGmvfJhuBjZkK+NSP7R93JeFe0B+R97HUS8G7sGSfSXZJFu7siJyeNE+V2rGg33cXSHnzM/KJivie4QzccDRC6fvJrc6f07ecMkizak95XRBDHiXbzmP8egq8lK7FdWR6Zci+QsFg3Ajde2seJdvPYotBOdU/6G6ncvkSmNbvXzQl1M5nvHbem5cOT4wky3BLzSaLdFuMORtTPXy0HRg7FXtv/xUCs2PbluFktE/yz/7qyryPhdQdfpzdpHzvFHveceYT8pkVz3ZU3ec4BAACAShLzc0SZQbQTQiZyEO2EkLyptmg3X3du63JWxvjnmKl2M91uXyMtNMJZ09X2NV19/7C0OGtKkkV7cH1MaG1MkDhBHlorE8AT7c51zbUGMrJwbZ80GuluOv5x+zni8CbxHXk6b5V1Y9FkmW3ITZSb8+Klb6xoTxLpkeePx13/4n7ekecLneOvCrHFdj7RXuT7iqxysd6T9wuC7LR46L3bE/HjYISu/5zmz0bqx8jmqGg3UjluZY4ny7PX6pRFzUuk2fmFhhHtS8ZZL+NfOzf5Hn4NBYp28/kUIdrDU+rR1TDZG6YWINpzk/T2cf+1mCl37/uVbyo9exPa+DUxrmgPr60BAACAahL993W5QbQTQiZyEO2EkLyppmj3V8UEp9jjzksbjXDWdLV9TbccfYfE1TEGf33MoCxrjVkbY0gU7Xmm0z2p/urGHvfaazPS68t3+9wCcOR0SHbnF+3ZKfTM6sgkd5ZE0Z5n4jxJxBc40R7GTKjbU+T5Rbsvegt6X7ZoTzo/BmdC3b5GXlxhbuTwwZbGyNS6T5Jot2V4DjPdvkTa2hY7vbamJdLuv3d/5co4on28PeoRge0RN9GeeyxOtLurZfzHHOkeFOCqifa4x3JEnsvHyHjnFwNx33dWxwAAANQm6f97GdFOCJnIQbQTQvKmFkR7cCd7cMLdvkZaaISzpqvta7rl6GeJuxmqh7M+prVHbkkS57FS3bsRapI490T7srV9ssF5jh5pXNuT3eEeOX8cIvvJI7vUbVxhPWfegmThHSvV3V7ydQsjaUd7mPj97/77ihOq2Y7/vuLOiRPt3o1QoxP0CcTd4NT/bBIm9s33aG5Lh6ycv0TaEwR9VLR78jryXD6uaG9ZudiZ3j/YulAWNS0OrLzJJ9pz1w7vaA98nSDUHbxJcHtHu/u1Lb696fWAtI6fbvcm2v1reatf/Bub+lPl2dcd2tEe+Drufca9h8Qd7Z5kb4qfcgcAAIBqkv6/mxHthJCJHEQ7ISRv0hbt/s1ObXzhHtzPbqi0ZDdohLOmq+1ruuXohzET1O5NQUOPO+tjuuVqS5o7q2Ts1TAh4e7J9sDxnEh3J+Wz1/SeI3ZiPgZ3l3lwatwW4gZ3Itw/x5bISfvQo9e2r+8L5dxx+9rjES/ao9d1V7fYffd9Ja2Xyb4vS0wnvq/sea5sDz5/ky/rI6tl4mR6ftHu73mf+rB981Lv8dDrct+X/9590Zw9nhXWlsD25HdwzUk+0R69dvhGqNn3FVzxYl5/aAo9+HfMEuvB9xTsxXSbVq7yfgESlOfe8Yc75EBLo9wVeB/5Xnfk8zICP07CJ4h20w8+FwAAANQS9s+85QfRTgiZyEG0E0LyJm3RXg9ohLOmq+1ruuXoT2YSb4JaAeJFe3lIvAkqgE2CaAcAAIBaJv1/byPaCSETOYh2QkjeINp1wlnT1fY13XL0Jy3O+hR3ej8y5VsBUpP83vuKnygHCJO0fx4AAABqGUQ7IYRogmgnhOQNol0nnDVdbV/TLUd/0hG4WWnibvaKkFsTY69+KYnA+8que7HPAfDIrZZJWCkDAAAANQyinRBCNEG0E0LyBtGuE86arrav6ZajDwAAAAAA9QSinRBCNEG0E0LyBtGuE86arrav6ZajDwAAAAAA9QSinRBCNEG0E0LyBtGuE86arrav6Wr7mi4AAAAAAFQDRDshhGiCaCeE5A2iXSeNNV1tX9PV9jVdAAAAAACoBoh2QgjRBNFOCMkbRLtOGmu62r6mq+1rugAAAAAAUA0Q7YQQogminRCSN4h2nTTWdLV9TVfb13QBAAAAAKAaINoJIUQTRDshJG8Q7TpprOlq+5qutq/pAgAAAABANUC0E0KIJoh2QkjeVEq0ZwYOyeYt2+Xoe8cjx/bu63WOGXZ275Wh4ZHIOWmikcaarrav6Wr7mi4AAAAAAFSDySva/6ajQf58480AAHLg/BH7HxEFB9FOCMmbtEW7keZGnu/rOyDbunZHRLsR8EG5bqS7wb5Ommiksaar7Wu62r6mCwAAAAAA1QDRDgCAaCeEpJa0RbsR6Uaunz03FBHtcY+dPHVaduza4xyzr5UWGmms6Wr7mq62r+kCAAAAAEA1QLRvOrdH9o+9CwCTkKs75yDaCSHpJm3R7hMn1c1jRqobuZ7vsbTRSGNNV9vXdLV9TRcAAAAAAKoBoh3RDjB5QbQTQlJPNUW7wV4VY/7cua0L0V4Amq62r+kCAAAAAEA1QLQj2gEmL4h2QkjqqbZo9x/3b4Z66PARZ2c7q2PGR9PV9jVdAAAAAACoBoh2RDvA5AXRTghJPdUW7TZmkn13zzvZm6NWAo001nS1fU1X29d0AQAAAACgGiDaEe0AkxdEOyEk9dSSaDeSfeuOXRVdG2PQSGNNV9vXdLV9TRcAAAAAAKoBoh3RDjB5QbQTQlJP2qLdiHV/LUwQX7hnBg5lHzMivpIrY3w00ljT1fY1XW1f0wUAAAAAgGqAaEe0A0xeEO2EkNSTtmivBzTSWNPV9jVdbV/TBQAAAACAaoBoR7QDTF4Q7YSQ1INo10ljTVfb13S1fU0XAAAAAACqAaJdK9pf3dshDzy+RG761ndlyvXT5fN//7UJzReuu0VumPEdmffQL+WFLW9Iz/n+yGdSDK++0ykP/HqJ3HTnd+WayfT5/eIheb7zddmj/Pw2vNMpDz7xuNx05/cm1ed3d5k+P0Q7IST1INp10ljT1fY1XW1f0wUAAAAAgGqAaNeI9p8++YR86R+/EZGBk4nv/evPZcfJ/ZHPphD+delv5MtfnRG55mTCfH7bT+yLfDaF8K/LfjvpP7/v/vRnsu34O5HPplAQ7YSQ1INo10ljTVfb13S1fU0XAAAAAACqAaK9VNE+72cPyTXX3xoRf5OR275/r2wtUnbO/8Uv5YuTYAK7EGZ9/17Z8t7eyGeUj3seepjPz2PW9+6VzmM9kc+oEBDthJDUg2jXSWNNV9vXdLV9TRcAAAAAAKoBor0U0c4ke5RiJtuZZI9SzGQ7k+xRSp1sR7QTQlIPot2VxidOnCgJTVfb13S1fU0XAAAAAAAqz/mhITl58mTk8fEYGRmN/DdUEhNNtJud7P9w0+0R0Qdfkz9ufGncne1mJ/tXvn5HpAtfk6ffXD/uznGzk/26m/8l0oWvyR/eWDfu52eDaCeEpB5EO6K9FDRdAAAAAACoPIj24kU70+zJFDLVzjR7MoVMtTPNnkwpU+2IdkJI6kG050S7/XghaFeoaPqarrav6QIAAAAAQDUobnXMycHBSS/aZ919r1x93c0RyQdfkxtmfGfcXdm3zbtPrr7ulkgXzOf3bXn7SP6/j7ff8yO5+n/z+cVxwze+LZvf3R35zPKBaCeEpB5EO6K9FDRdAAAAAACoBoj2YkX7Dd/4TkTwgcsXrrtFNr/bHfnMgvzjzIZID1zM57fp0K7IZxbkq7fNifTAxXx+bQM7I59ZPhDthJDUg2hHtJeCpls2BjJy6/JuuXrtERmxj9Up7c0NMnXGbLlxxmyZs/KQjIxGz1GzaYlMm2meY7G0jRb3H1ulsUUWzfLf1wJZmRmrse+X9/rmrZIDI5X4PNIn07rQ/R5PoPcEAAAA5aC4nwsQ7e/K/7n1zojggxzjTRRf/41vRzqQo30c0f6PM/hFTz7a+hHthJAaSyVE+4vrX5ZfNv/K4emWZ+Tc+aHQ8c0dndnjT/x2mZw6fSZyjTRBtBePppufQXnqmW65ZeNgRMZuWNsttwYfr1XR3r5Eps5fLQcVEtsI97ktaYj2Tlk0s0Ga28aKv7YR9Kr3ZYR2o7RMEtGeld3eL07cX54MyHChn3v/Grlr1mJpGxkt+fPatGiOzG0p4jkBAABgglPczzqIdkT7eCDadSDadSDaCSE1l7RF+zv7eh3Rbv5sBLsR7f7X/vGgXDfH4mR8miDai0fTjSMolns39siU1ozsD8nBI7JwRY8sG7hQsnSsGLUs2vvXyNyZJU6yT1jRng6OaG/qkOFS5X0ZRPvopsflpuYOGQq9hsPSes9CaTmouC4AAADUKcX9XIJoR7SPB6JdB6JdB6KdEFJzSVu025jpdV+k++LdPOYfP/TuUfn1b5Y6/9fupgWivXg03TCHpXW+mSY2Atd7zJlUt6R6V19Ivpvp9ilmmn15/PS7c753/OrlPbLUv5Z1HR9H7pvJ+ELEthHpgUnl7IoXR2I3hCaYXTyx7fQsyR33WB7RnmltDDx3tDcu+UR7dqVMEe9rZMx9TfNXhQR83GP5RLs5P/fc7nVz5xgxnFupEz2ehDup3tw2Gvgcw4+Fps4f7pDhyOcSXHsTmEjPSnDrdXi/jDCT8eOKducagc/VPL9z7hZ5JPCcORbIyoAcN9Pquc8sfCz3euJEu/f4rAZpemuUaXcAAIBJRcLPJQkg2hHt44Fo14Fo14FoJ4TUXKop2s0U+7IVf8hKdfO1mW43K2TMpLvdTQtEe/FoujncNSY3NnVYQjm6PiayNibf456oD8n15X3yqnkO55j350CncNFuXnO8LM6SONEeWNviPebsZI+8/wTRbkl5R2Y7v6CwnycPiaK9gPeVNNHuXLMxsHvd/eXJ3MiO+QTR7gj+nLR2pPv8VXIg8D4dYW0/bwFsap7jfL7ZboIgz0rx0HMYwT9H5mbXvQQlvfdebLldsGh3Zbq5ln9t83VotUyeiXbn2uYz8q7t/sJgsbxln5sk2rPXt54TAAAAJjgxPxPkAdGOaB8PRLsORLsORDshpOZSSdFuhPqiR5dkJbov2g9k+h357gt2sz4mOOWeNoj24tF0HfpXy9yZs2WOLZM9wutjktfGxIl20w0/5or7xi7TN9fqkw3muoHp9g3roteJx5XleW9UmijaPTmeFevJcjtOtJvHmtuD5wb77uuKTEHPs6bKk2R5Ie8rsWuEduD1+jLfnvZOEO1Ghi+KTJ3nznOn3eOuVwCWWDdC2rxOWyzHinbTNe83IKlz5xkJb17jqIwEniMo1+N2tDd5Yt0W5Q4BSR9+7bZo9yR9aBrd/aVATtzb79++RuBat82RqQ+/HS/jAQAAYIJR3L/vEe2I9vFAtOtAtOtAtBNCai6VEu3+tHpQoMdNsPvrZJhoHx9NV9vXdA2OcDarOBJEe2h9TMK6F0OcaA+ulQniinYj3d3rbljbJ41rXeluRLt7PPocEUKrVGKmw/OI9tBEuTmvqTP2/UdFu7dixxbpZmVIjKiP4L9mRxLHHA+e478vW2znEe3BY+Z7a/+SwCVOtBf2vpzJdE9am18GJL6HCO7aGXcKPSDHrfNiRbszaR+zMsdbMeP/guBgyxJZ1LTYeV8HWxfKXZ7IzzfRHnusKNFuT9MniPbsdRqc1x2V6Z5oT1o9AwAAABMM+2eB/CDaEe3jgWjXgWjXgWgnhNRcKiHafaEevAmqIW5Hu71OphIg2otH082RtDrGkFsf82qMTPdJEu32Y6GOI9WPSKOR9119srBrUJa1xk/Mj4e7Mz1m73qSkPbEslkf095kT6jnSBLtwbUzYbQT7WGy7yso2/N2Oz2Jfkha5tsy3SdZtIf3qOfDXd9SjGzPSu3M6siEeuScmM8qNHVude5q6ZCV85dIe2a1LGo9JG1Nuen8WJkefD5roj3yWF7Rbk+0xz3mrY5Jeg+sjgEAAJiExPxMkAdEO6J9PBDtOhDtOhDthJCaS9qiPUmy+xjJbtbJ+GI9uMPdPjctEO3Fo+mGibkZqoe7PqZHbrFvjBogVqo7O9kDO9rtjhHtGzPSaHpmct5Mti/31snEnJ+XuJuZOpPheSbNHRG/QObk2a8eFe0JUr9YEne0W1h703Pd4C72MO4NUBfIHOcXJ3HXjxPtbi/yXIm4E+pm/3tYKHs3co27oam3AqZtZaMsao8X+rGiPSv140W0K9pXSbPz/5XQKYvuWSLN8xZkJ83ziXZfcts72sMT6Qny3L8R6jxrR7u9isaQtKPde35uhgoAADDZiPm5JA+I9vKK9p+90S9nRj50Xs+hN2fL9VP9Y0/IKwfPyvCH9uO1T2VE+yrpPHpeRu1v6rub5J9vuT16fstOeffcmMjZd+Sp6d+Sv2tqk32nR+SCHJFXZ3xbvmKfX0XSFO0/3XBQTpm/VKGck11PN8j1/xw9vyAefkveOT0sF+SobJg5W66zj8fwu61H5eyoyNk9L8iNN98WOa4B0U4IqbmkLdqNODerYWyCq2GC51RashsQ7cWj6cYRJ5bd9THdcnVkbYzZsx5dDRO8eaor24PHczdAdQR+VsS7k/NJq2kiOGI9ecWJjyvF/XNssZ20Dz1+Kj14Xvi6MRPr45Ek2n1RXez7ioh4b+o+ToKH3lf4+q5sD78v92aorlgPfSZxMj2faM+unnnMkvnuuhX78w5fw5XtwXPMnnXn/XmrZfyvzXNMm/mYvBXYB58o2g3+ShfvurFCf9PjMi17Tni9iyPbs5+ZeV578j1JtJv3vTB6I1cAAACYBCT8XJIAoj090W4k8LJb/kX+1jmGaM9P+UX7v76WkdPDH8rZPc/LP319VvQaFQLRrgPRTgipuaQt2usBRHvxaLqQfBPU1EkS7eUg8SaoUDViRTsAAABMXor7mQDRnqJoF5EPup+Tf7zJSF5Ee3580X5Odv5htvyff7KPW9ii3T7+91+T5duPyTlH/k4C0X5kk0y99Y7I8ZIoQbSnCaKdEFJzQbQj2ktB053smOn9qbF76StBWpLfXQFkVrpU531BHGbqfW5LzKQ8AAAATFIQ7TUh2t89IofM98KI499/R677arxot8W8MwV/q5mCXyVbjg05E96586OP/ez1aP8ppx99baVSG6I9OPF+RF7deEjOJU60PyNv933gfNa5HJENM74tS7wp91zOyc6nvecLXGPnnjMyPPyhHNo4R/5xmv1aiqMqoj0ry90p83+++Tb56YYD3vS7EejfcQS6P4nu59DGufLVJy3RvnKHHDK/sTi3T34349tybcwEe/LX+2RgeFhGz+2T5V7Xfg/jgWgnhNRcEO2I9lLQdCcrjmD31qIUte6l3GRXuZRjst3bsW/el7Pj3D4O1cBZW+N8jxNWygAAAMAkpbif/RDtaYn2dvnqawfl6HlXBi+7ZaW0W6J9xY73xbjiSDzZ/itfor/bLv908+3y+eZ26T0zIh96x5/L0y+nbK+saA/n0MYGuWFa/DEnRYr21duPhcRy8NhXstfIpW5EezCOEL9Trl3Z5QpyR5i/Je+8e875Rcaup+fI9f/8a1m//4wMWU643KI9G0R7YhDthNRhEO050V4Kmq62r+lq+5ouAAAAAABUnvNDQ3Ly5MnI4+OBaI8KvlIIifavPx2YYn9Oth0PivbodHpkYv1JT6wbeTz9TlniiXdnHc3XXpEtx1z5HO7bj+mpumh/yVsTYz6Hb4T3r8eLdvec8VfHvCAdR7wpejPV/uucaC+HYPepmmg3QnxbWHj70+2fz0p4X7wHrmuvjtGIdoVg90G0E0JqLoh2RHspaLoAAAAAAFB5EO21JNq/6U6hf2Bk+Tn54OyH8qEv2i2J/g9O/wl5+UBQxvtfm3Uqz8qWY/6fvyP/+9dJfXeSu35Fe3R1TFaqB2+Mau9oL1C0m8eiE+22aPcm3COvsTQqItrt1TE+gRUywZUx2TUyRzbL1OlWr4yivRw3R0W0E0JqLoh23RoUTVfb13S1fU33wIEDkccAAAAAACBtilsdUwqI9mQioj1mD3vBE+2BHewfdL8j/SMjMhra4W5Pr8c9pqdmRHtgon359vfctTnFiHb/nCOb5MZb7gjsZJ+4ot2eaHfEujkvtFbGle9GsK9/8U65Pml1jPl6lrk56vPy9mGzhiZZrNtf26+rGBDthJCaC6JdJ401XW1f09X2NV1EOwAAAABANUC015poN5Pm/goZk0J3tDs71v297N6hoEDP158oO9qd9/L73fLumfDu9GwKEO1ujsiGp/fIe9YOdjcTQLRbMbvWn9zqTa2bSfQ/7JbDjjz3V8W8IG87O9ujvciO9offkr2n/Kl4k3Ny9tyHcuFCsli3v7ZfdzEg2gkhNRdEu04aa7ravqar7Wu6iHYAAAAAgGqAaK890R4W5kFZbk+7Oz1z49PsNXPrZJyJ7uyaGK/v3zA129/k3jg15rWVStVFuxHp/qoY/7E3+uX0OKtjchPrJvbNUI1cb5e+03E72ieAaD96VEbH3E/Tkec3BdbFZKfY7RuiehL+15ZoD66a8abYXz14Jq9Yt7+2X3cxINoJITUXRLtOGmu62r6mq+1ruoh2AAAAAIBqgGivpmifiFRGtE9c0hTtkwFEOyGk5oJo10ljTVfb13S1fU0X0Q4AAAAAUA0Q7Yj28oJo14Fo14FoJ4TUXCoh2vfu65XNW7Y77OzeK0PDI7HndG7rkpOnTkeOpY1GGmu62r6mq+1ruqmL9q4+mbK8W64O0SevjsacCwAAAAAwaUC0I9rLC6JdB6JdB6KdEFJzSVu0H33vuCPRzZ+NYDei3f/acPbckGzr2i19B/tl645diPYi0HS1fU237KK9f43MnblY2kat/3BwhDuCHQAAAADABdGOaC8viHYdiHYdiHZCSM0lbdFukxk4FJpq39d3wJHrBkR7cWi62r6mW1bR3r5Eps6cLc1tYzJiH4sV7Udk4Yo+Wbaxx5l6v2XjEVna2i1TlvfI0oEL3jXMOeYxbxp+7REZDlyj1+uGJuYD54SPu88feW0AAAAAABUH0Y5oLy+Idh2Idh2IdkJIzaXaot0H0V48mq62r+mWS7RnWhtl6swFsjITI9kNiaK9W6asPSIj3oqZxq4LsmFtt9y6cdC5zoZ1fbIh23HPN+c4zzGQkVtX9MjSfvfrDeu6ZUprRvb753f1yTUBue5I9+BxAAAAAICqgWhHtJcXRLsORLsORDshpOZSSdFuJLrZw27WycQdQ7QXh6ar7Wu65RDt7c0NMnVGzLqYIImivUeWmel1c9yT4EaY+6Ldvk7wWEScB8S6f25WygefzxPz9rUBAAAAACpHnp+dy8REE+03fAPRmcQXrrtFNr/bHfnMgvzjzIZID1zM57dpHNH+1dvmRHrgYj6/tgFEOyGkxlIp0e7vYjcT7fYxA6K9eDRdbV/T1Yv2Tlk0s0FuTEu0O/I8vBrmltAxa6I9uzZmUJ56JrByJkvu/MhrBAAAAACoGHl+di4TE020z7r7Xrn6upsjkg++JjfM+I50HuuJfGZBbpt3n1x93S2RLpjP79vy9pH8fx9vv+dHcvX/5vOL44ZvfHvc/48KG0Q7IST1VEK0+5I9eBNUG0R78Wi62r6mqxftLqWvjskj2s1qGG+djH/NkIR3VscEJXrw+q5oD0+0AwAAAADUCoj2YkX7T598Qr70j9+ISD74mnzvX38uO07uj3xmQf516W/ky1+dEemC+/ltP7Ev8pmFPr9lv+XzS+C7P/2ZbDv+TuQzyweinRCSetIW7YVIdgOivXg0XW1f0y2XaHco6Wao44n2wAS6N93uT7TnWzFjcG+Eyg1QAQAAAKAWQbQXK9pf3dsh/3DT7RHJB1+TP258SXrO90c+s9Dn906nfOXrd0S68DV5+s31smecz2/DO51y3c3/EunC1+QPb6wb9/OzQbQTQlJP2qLdrIrZvGV7BH9Pe9xxs8e9ksJdI401XW1f09X2Nd2yinZD/xqZOzOwRsa7yWl4fYsv3McR7f46GL/XmpGlgRulRifa7al2X7YHjnMzVAAAAACoCRDtxYp2A1PtUQqZZvdhqj1KIdPs2c+PqfYIpUyzGxDthJDUk7Zorwc00ljT1fY1XW1f0y27aK8gcRPt4T3tAAAAAAC1CqK9FNFumPezh+Sa62+NCL/JyG3fv1e2Fik55//il/LF66dHrjUZmfX9e2XLe3sjn1E+7nnoYT4/j1nfu3fcewMkgWgnhKQeRLtOGmu62r6mq+1ruvUr2t0d7GHRbibkAzdLBQAAAACoWRDtpYp2A5PtxU2y2zDZXtwkuw2T7aVPsvsg2gkhqQfRrpPGmq62r+lq+5pu/Yr2+NUxSHYAAAAAqA8Q7RrRbjA72x94fInc9K3vypRJMGH8hetukRtmfEfmPfRLeWHLG+PuZB8Ps7P9gV8vkZvu/K5cM5k+v188JM93vl70TnEbs7P9wScel5vu/N6k+vzuLtPnh2gnhKQeRLtOGmu62r6mq+1runUt2gEAAAAA6hZEu1a0A0D9gmgnhKQeRLtOGmu62r6mq+1ruoh2AAAAAIBqgGhHtANMXhDthJDUg2jXSWNNV9vXdLV9TVcr2jXPDQAAAAAweUG0I9oBJi+IdkJI6kG068Stpqvta7ravqaLaAcAAAAAqAaIdkQ7wOQF0U4IST2Idp241XS1fU1X29d0Ee0AAAAAANUA0Y5oB5i8INoJIakH0a4Tt5qutq/pavuaLqIdAAAAAKAaINoR7QCTF0Q7IST1INp14lbT1fY1XW1f00W0p0z/Gpk7s0FunLFAVmbGZMQ+vmmJTJs5W26csVjaRtP/jy0AAAAAqBXS/9kP0Q4AtQqinRCSeioh2vfu65XNW7Y77OzeK0PDI9lj5s/mMf+4Odfup41G3Gq62r6mq+1ruoj2NDksrfMbZG7LIRkZtY8ZOmXRzAZpbhtLOA4AAAAAExdEO6IdYPKCaCeEpJ60RfvR945n5bkv1YMyPTNwyMH8+ey5IdnWtTv7daXQiFtNV9vXdLV9TRfRniZGpDdKS9wku8GZdmeSHQAAAGBykv7PgLUu2gEAEO2EkNSStmi3MRLdnmoPYiR8pafaNeJW09X2NV1tX9OtBdGeaW2Uqc76FBdnwts/nl294h1v6shNf7cvkanzV8vBrKi2xLZ/PLM6d41g3z8n8NxzVganz92J86mxxwoB0Q4AAAAASaT/MyCiHQBqHUQ7ISS1INp14lbT1fY1XW1f0626aM8rmwOrVQJfZ4V3IaI9uP/cea7ArnTneMLu9MjaF/u1FAKiHQAAAACSSP9nwFoV7YQQUo4g2gkheVNJ0X7y1Gnp3NblrJOxjxnM4+a4Oc8+liYacavpavuarrav6daGaI8X2M6k+7ygSLfkekGiPSjSXXnuPpct0mNeV+ja3uvxJuLbm3OT7jksaT+eSDc3QrWeAwAAAAAmC+n/DIhoJ4RM5CDaCSF5UynRPt7+9fEkfJpoxK2mq+1rutq+plt10W4Irm+ZtyornoNiO3RuMaI9UWSPM6FurZSJXV2TiLdyJvBeQvjrcJo6ZHjcawEAAADAxCTm58Qyg2gnhEzkINoJIXlTCdHuS/aklTC+ZE+S8GmjEbearrav6Wr7mm5NiPYAzqS4J6jjJtpDj0VEejGiPTjdbh8br8tEOwAAAABoSf9nQEQ7IWQiB9FOCMmbtEV7rUt2g0bcarravqar7Wu6tSbaQyI9slbGmkJ3ps59ke2K86lB2T2OLHdvwpokwq198JHjhcCOdgAAAABIIv2fARHthJCJHEQ7ISRv0hbtRqBv3rI9gr8ixgh4+1il97RrxK2mq+1rutq+pltt0e7K7uBUuCWe/TUr3nFbfAcny5vbOqS54In2+OcPX99bAROYWm9KmoCPBdEOAAAAAEmk/zMgop0QMpGDaCeE5E3aor0e0IhbTVfb13S1fU232qJ9YoNoBwAAAIAk0v8ZENFOCJnIQbQTQvIG0a4Tt5qutq/pavuaLqI9TQJ74GPXz4wj4gEAAABgAoNoJ4QQTRDthJC8QbTrxK2mq+1rutq+potoT5ns6hvrRqk+5oaozuoaJtsBAAAAJhfp/+yHaCeETOQg2gkheYNo14lbTVfb13S1fU0X0Q4AAAAAUA0Q7YQQogminRCSN4h2nbjVdLV9TVfb13QR7QAAAAAA1QDRTgghmiDaCSF5g2jXiVtNV9vXdLV9Tbeaol3TBQAAAACobxDthBCiCaKdEJI3iHadfNV0tX1NV9vXdBHtAAAAAADVANFOCCGaINoJIXmDaNfJV01X29d0tX1NF9EOAAAAAFANyiPaT505KwPvHpXM4SNy4tQZGRnNXRfRTgiZyEG0E0LyBtGuk6+arrav6Wr7mi6iHQAAAACgGpRHtB86csz570iDke1DI6PZY4h2QshEDqKdEJI3iHadfNV0tX1NV9vXdBHtnbJoZoNMnbdKDgamf8rDAXlx/Udk4RvrQpNFo2Mvy+9e+JysOTwqI5FOfdHx5p/Koo5eGRmNHvPf/1M9IyW9T/fa+xOuXQrmc/+ILFy3SA6U/Xs9gdn7LXnQfG7P/4ksfP4qWX142Pl+drz5/8gDzmN/Is1v75Phsn+mL8vyVX8qD6xrlr7R+v/fStEcWSy/euEO2Tzift6R42my90758fpHpG+ktP/tpsdBWfvSpfK7PedkqGz/XIAo5nP+T/LgG6vlfEDWAUAalOffnUau+6LdMDRc+6L9ilf3yJ+s6QIAkN6zpf/DBNFOCMmbSoj2vft6ZfOW7Q47u/fK0PBI9tjR945njxnMuXY/bTTyVdPV9jVdbV/TRbTXqGh/91FZ9MLtsjnpNfXcIQ+s+1V1hbHzGu+QzUkStOdf5IF1j5T8GhHttcDLsvyFP5Wn9gzLcML3wQj3RR0liHYj8I3MTfr7M8lFe8ebl8qijndkyP9cHfH+p94vPDzeeFGGRgMi1D/Hftxcb+Ol8qDfM59pokQ3kvXP5Kk957Pf81D3+T+RZYFjsc8dlLNG2md/UWNe85rwpGXn1fLjF/5j6H3FXt+/1vpHpNd/7eY5V/0/ue66ptyxAB0b/5M8aH5JdCh4XVfa+78scn6JFDr+iqxY9WeB48Hru93gZ+JfY1XcNSKvK9+1Y953xUG0A1SOIv/dmQCiHQDqGUQ7ISS1pC3ajUj35bkR7Ea0J8l0/3hm4FDkWJpo5Kumq+1rutq+potoTxNXtDebie/Q4xNDtB/s/HyeaXZXlJc6ze73yyvaoWjefUwecX6Zkvx9TE+0T2ZekeWr/iU8zW6k8vpfJQpyI6wfXLdIVr/xp/KALdqNoH5znSe4XZHunBMnUcd5Hleof15WHx7KCmVHlq8PPHfcdR1cQb3o7b3ZXyCY7iPBXyjkwQjzfNPsjlAPiXxXaD/1dpM0v/A3lki32Hun/OSF22VT9jM33W/J5pGh+M/BZu+3vf6QDAe+XvX25+TB9c0xot29tnNuzeGK9kVv98j5kfG/LwCgoTz/G6tn0f7S6WHZNvIhAExCrnitB9FOCEk3aYt2GyPR7an2IEbCI9oLQ9PV9jXduhbt7Utk6vzVgUl0M53eKC2ZMVdo+Mczq2XuzAa5ccZsubGpIytuM62NMnXm7MjjIfrXON05Kw/FHy8JT7T3PCLNz3uTnNnJb2/qOjIp+VlXzDsCPjz96fJNT8qb/h3y9uFf5c6zp8rNpLn/vGbtR4wsN5L7AeeaSRJ0nF8WJE67W+8vNF1ufjFhnjf3vpqzot19X5sPPyKL/H4Rk+kHO/8m957fWBcrhUPnPP8n8tSekeznMt4x8wuBzUYyZo8PBz5T+33l+1yjr8m+9rLsdPlBeXH938iaw+vkqRf84+baAaHniHL775N1Tj6ctTHmFz7J5yeK9tDKGfO6PTHrvCZrMtvhNtnsychM5xfkQf/v7xtro9d23ntudU2w676m4LSwu+7GFZoHZe36L8iaw2vlqRf8/m2yKUkqx2IkeOC5nelw//uZfMwVyou879VtsmnP7e7nY0txX5q/sTY6rZ4kwM2xN9c755tJ+Adjrhm5/rpFsdcy0+uhSfoI5j2av3fe99N/7pFRd/I9r2h3r/9IRwmi3ZlevyMgwqNkOqfIjwPP37Fxirx4+LwMv2u644j2yPWLE+2dG/+T+74cMf2KrHjpUefzPbhlivy4rKLdSPCrZc3hF+V32an4WTnB71/70CPyiD/tb03LZ8xrsv898jrT6wDVYZx/9hUIoh0A6hFEOyEk9dSSaD97bkh27NojJ0+djhxLE4181XS1fU1X29d0J7xod0T6Ymkz5zjSfIGs9I97OMK94qLdCMigHDe7zAPyteSJ9vC1R4JT9VlhnUeQe4wn2s00+wNvrLdW4oT70Wl397XFif3scwYkeHiiPfi+zGvyPjMjvGOePwlHmMeIdlekJ7zfvf/iyWbvmPP152T1Yfe5fQlvfilgJJ7ztfPLDfc/cpOesxBM98Hstccs8e3LZiOSc1/npLf1tdPNvW77ucLP+wXneSMyPEZ6x4v2l2X5my/lHosT9gVMtDvCPfKc3vt2RHT0M3U6RiJ713Wl/Tc9mW5Eu/+ZGflupGXc60/CFenNb78Tc747KW4ktf/5ZyfHR0dduf3CZ2X14X2yZr1ZJ9IsfYd/5f5/DITksSWy/cfzifYAKtFeyF74PPvbxxft7nuzp+ELEe1mWj0o6KPk2d/uSPT8ot2X9DnZXIRoz0r6qDh3pHbZRbtZW5NbU9O58T87k/zua/fX0vjy3Zvq33PW/Vysz8LpOiI+z/ccAFIk6Z9pxYFoB4B6BNFOCEk9lRTtRqB3buty1skEHzfynR3txaPpavua7sQX7UGxflha5zdIc1sRoj0VorL77Tc/4opp/xyVaA9fOyzF88vuwhjvJqfmOT4fkfnO67Cn631iJuCjot1cM/ecpayWiZfeAWkfuZY7jW6eJyjoXLkcEOvBa2bXrbjvJa/EHwdHtIder9mZ7n8OrnAO7k8Pne+8DrPiw//Mxt+3HiFOkFvEi3Yb89xGHgdkXqmi3X9NMaLXeZ5V5j0GJbUr193Hgn8OP0eywLVejyOoY17z3m/Jj53VIYHXdcT7uzAyLAeyU+p93g70IXfS2hbbSSLb34Ge/cWHmcSPytFxRbt3neAOdp/sJH1ElHu/NPCeO2mHepJoD+1hH29Hu3XcxcjiL8SL8uAO+KQ954miPbgrfbwd7fbxHOFp9vCxZNEevnZ4t3s+Yn6hYNbUZHfXRz8rI9Mf6ehxXl/k9fgrb4ZLkf4AoCf6z41SQLQDQD2CaCeEpJ5KiXYzrb6ta/e4a2HyTbynhUa+arravqar7Wu6E160h47HMylEe1Bwh9bPlCCAx7nJqSv27RvA5ibW7ccdyiDa3Sn83PR1bu1M8LXFiHZHSCdNerui3fmlQuBaxYh2/3z/tfmT78Fr2a87Vpw75wdl+Tii3Tu3OTTRnl+aRyigkyTa7fflr3DJXqdE0W5PrIc7RrRbQr+Mot2spEmU2Ea0O4I88LqKFu3RG5Em4U7Im0n9sGzPL9pzE/nR95swSR8hN7lvXyNJtAfx97nHCnFPIj8QkfHhlTCJONI9uGfdI1G0B/Env2Mm4p1rGyH9ueg1xrl2RGzH4V27MNmeINqz++Hzi3b7udxpeNbGAFQP+5/FpYFoB4B6BNFOCEk9lRDtvmQvZFrdTL2b9TGmYx9LC4181XS1fU1X29d0Ee2TRLQnrHlxjj0fWItSAPFrYXySp92TBLxDGUR7IUSkuEP02jniJtrDj0WuGSPaw89l5HdYticRL9oLnGiP7DEP7ncvkBJFu7+uJdcr80R7Yi9uot08Vh7Rnjs3RkrGTbQHxG9Bor2Q1S0+Cecmi3Zvf3ySsE6apI8hafK9ENHuv+6IDA9cOyzVY8RyIlHJnH3OPDLcJ/96mvhrm2n23NoWu1OgaE+4djwxn0cRE+3uZ+HtbneYxTQ7QFWJ++dN8SDaAaAeQbQTQlJP2qK9GMluMOcVem650MhXTVfb13S1fU237kX7TG//urcWZuqMwKqYcoj21Ha0jyPa/XUmwb3tQRwxHbdr3bq2N72eeB3nxqhR0Z64oz1GiEeulzTt7nTjJXz2/Xo7191fANg3Q01LtHvv17m5alSWRVa/WDvbI9fMK9rjxH0ytmh3psS9aW5fpCeK9oCQtq8bxJ88j5XwGtEemDp3b05qTbRnV9vEC9fsdWzR7sn05rejU/Tu6/H2n3vPHX4tBYp2R5rH3KjUu5FrWOT72Pvbwzvbczc4TRbtRpLHTYpHCe9/Dx6LF+3jSPYiJun9a8WdW4hod8+JWw/jS3jr2t4vAPKLahdn8j1Oahci2sc5xxHq9mqacTqGQkR77LVjdrEHH8+JdncSf9HbnkgfR7SHpHvMaymIzb+Wm29rkBt/uVnODsV8HwGgCBT/WwyAaAeAegTRTghJPWmL9uD+9SD+nnb7eKUlu0EjXzVdbV/T1fY13boW7WMXpL3ZyHVzw9PZ0tzWIc0FT7T7Yt7tZrGFe9VEuze1nr0h5WcjUv1ghyujcytgzPt0hXVuWvFPwpLdEevBm1yamzNGhXCSaM83He/3kqfdc7I9+/yO3Pau1WMEtr/HeZ0c6Ph84Foa0e7K7fAaE/c5gqLWXj0T3Nnuynb/c/NvPho4lijaY547Io6TccR58PuVlezm+DiiPWai3WAL9dJEu7uWxr52Tn6Hjze/3SxPOd+/sFR3J9/993ebt3c9/nWHPzdXtufO8bv+ewruvza7zP1jStFu8GR77nvSHFgX4wnt7GvO9ccX7flXt7irYnJ/F8LrX6znDT7/iH8j1ujNbbO71hOm413C+9lDvQKfO3kHu7cqJtsz/9sKv/+8U+bB/ewGS1Y74j3yvv1d69E96SFhvvdO+Unw2pGpdU+ERx4PHAs9b+D1OetbAn+HXs93jXjRHrx2c1aym+P5RXt0ot1Q7FT7Vnn09rky7e4XZP95+58NAFAcMf9sKwFEOwDUI4h2QkjqSVu01wMa+arpavuarrav6da7aAebqMQvH+Nce7xpdygae6K9KOIm2hPFOVSbnIi3hWv6mCnzwibpK4wjhZPXzExO7In24oibaC9+T/u78uy9d8lNDzPRDqCnPP/cncyi/Q/9e+TWtU3yiUe/Jv/3g38j/9eCv4Yq8m8WflYua7pBrn+mUZbs3Sybzw9FvmdFsaVLts5vlK1XfUm2/sf/Ilv/3Z/J1n8LVePf/2fZ+hdXytbbZsu29a/JtjPno9+zIkC0E0JSD6JdJ181XW1f09X2NV1E+0RjHBkOdYVGtDvd0AS8vXom2gGAWkcj2k33PwXWzJjHXpEVqy91HjtfwDqZ/mcflK/PYm0MQPkY/393hTBZRfuslx6Vf/vjKRHZC7XDV1ruk9dOnYx87wph6/0/la1/9vGo7IXaYfq/yLZ334t87woF0U4IST2Idp181XS1fU1X29d0Ee0TDUT7REIj2mNXxyDZAeocjWj3/78EwqtjzOqZQiQ7AKRBef63NxlF+3XP/IgJ9jrhM0/eLq+cfD/yPczH1m/Oka3/8WNRsQu1x9/eINsy70a+h4WAaCeEpB5Eu06+arravqar7Wu6iHYAAAAAgGqAaC9FtDPJXn8UM9nOJHsdYibbDxc/2Y5oJ4SkHkS7Tr5qutq+pqvta7qI9srSe+wtecC6WSkAAEC1OXZ6f9mkHwAUSnn+NzeZRLvZyf6Rn18bEblQ+zy0c8P4O9vNTvb/9smoyIWaZ1vLC0XvbEe0E0JSD6JdJ181XW1f09X2Nd1qinYAAAAAgMkLor1Y0c40e/1SyFQ70+x1TAlT7Yh2QkjqQbTrxK2mq+1rutq+potoBwAAAACoBoj2YkX7/3zyDvk3Cz8bkbhQ+3y06XpZf/xo5HsaZOs//LNs/Q8fjUpcqH3+x1/Ltt7+yPc0H4h2QkjqQbTrxK2mq+1rutq+potoBwAAAACoBoj2YkX7R5tuiAhcqA/ML0jWvHc48j0NsvWKz8rWfxcjcaH2+ff/Wbbt7Yt8T/OBaCeEpB5Eu07carravqar7Wu6iHYAAAAAgGqAaC9WtF/6y/8dEbhQP6x571Dkexpk619cGRW4UDds6+mNfE/zgWgnhKQeRLtO3Gq62r6mq+1rulUX7f1rZO7MBrlxxgJZmRmTEet4e3ODTJ0xW25s6pCR0Zg+AAAAAEBdgmhHtE8uEO0TG0Q7IaTmUgnRvndfr2zest1hZ/deGRoeiZxjHjPHOrd1yclTpyPH00QjbjVdbV/T1fY13aqLdp/2JTJ1/mo5OBr3HxyHpXV+gzS3RUU8AAAAAEB9Evdzb/Eg2qFeQLRPbBDthJCaS9qi/eh7xx3Rbv7sy3T/6yCZgUPOsR279iDaC0TT1fY13ZoR7WOdsmjmYmmPFe0XJNPaKHNbDjHVDgAAAAAThPife4sF0Q71AqJ9YoNoJ4TUXNIW7Ta+UA9OtRuxvnXHLkfKI9oLR9PV9jVdRDsAAAAAQDWI/7m3WBDtUC8g2ic2iHZCSM2l2qLdn3I3j589N4RoLwJNV9vXdBHtAAAAAADVIP7n3mJBtEO9gGif2CDaCSE1l0qKdiPQzQ52M7nuP2b+7It3RHtxaLravqZbO6J9nD3seXe4AwAAAADUG+X5uRbRDvUCon1ig2gnhNRcKiXajUTf1rXbmVwPPhYU6/bXlUIjbjVdbV/T1fY13doR7QZXtk+dsVja4oS6ke0zZ8uclUy2AwAAAEC9E/Pzbgkg2qFeQLRPbBDthJCaSyVEuy/Z7Zugmmn2zVu2x2KfmyYacavpavuarrav6daOaDerYxqlJRM/0W5Wx0xt6kCwAwAAAMAEAdE+MUT772TD4DkZCb3DAflj01fkI5Fzw9yxa7+cHP1Q5MTL8l9/+b8ixycatSzaj2w4KGOhb+IZOfuzv5ad/yl6bmVYJKf6zsiH5nX8/Moqvo7CQbQTQmouaYv2JMkeBxPtxaHpavuabm2Jdna0AwAAAMBkIf7n3mJBtFeTOMlugmiPoyZF+7eekXMnztvfQER7CSDaCSE1l7RFu1kVY0+rG4J72n0Q7cWh6Wr7mi6iHQAAAACgGsT/3Fssh44cy0p2I92HRhDtFaO9UzLDo55Y/4esWP/5gQ757UOIdpvaE+3fkxNdJ+WC41sPyMm//Cvp8o5lVr4upxb+VRUFN6K9kCDaCSF5k7Zorwc04lbT1fY1XW1f00W0AwAAAABUg/ife4vl1JmzMvDuUUeynzh1RkYCP08j2lMmK9pFTg88Kf/fX1xjnfMT+cPR03L+w8CbH+qSHz98rfwHW7TvfEcOetJ+pT8N394ReGytbLen5x1B/7fOc/287105c8G8ji55Z3RYRoa65CcP/738f+zXXEVqTrQ//LoMnzGfaL7p9Ufk9AEjvAPpWyW7Lv8L5/iRV92VM2Mdi+RE98ns+pmh566SnR/zr/FdObHjhCf0TYw8957vl6/LkPMa3Ix1PCK7Pv6JGNFuX8P8pdsiR//iU7LD/GLgjztl9PwFkb4tcvb4eblw4YCcvOIz2V8cVAJEOyGk5oJo14lbTVfb13S1fU23ZkS7udHp/NVyMFa0uzdJbW6L398OAAAAAFB/xP3cW14Q7WnzE3naEulh4Z6wWubEy/KxX/4va6L90ayU3999vXz0ZzkRb675Xza8JTvPD4utBp1jv/hiVrRng2gfl8zKXTJm5PTpLXLkf3zSEdb2Oc5qmePR1TJGrBsh7ov2SBwJbq75iJx2hHkwrmh/d90uV45bGXrus7LrY7Zo97+20rdKdl/+lznRng2ivRCKCaKdkDoMol0nbjVdbV/T1fY13aqL9v41Mndmg9w4Y3asSG9vbpCpM2bLjfNWJUh4AAAAAIB6JP2fbRHtlSErzP0EptZD57Z3uBPw3vHvW6tj4sX7B9L+xv+WS3+a8JzeVHtWtNegYPepS9Ee03Enx92p9qxod4T3XwQm1A/Iyf/3r+TwH32Z7n6dE9+5CXUz/b7LTL/7Xedav8+/OuaXr7nnelPth7KivfKC3QfRTgipuSDadeJW09X2NV1tX9OtumgHAAAAAJiUINonimjPElgls7/7/8h//lnCRHuCaP+/XnjJnVo3x1/vlIz/54f/Xv7DC+tjJ9pt0e5PuEdeWw1Qa6K9oNUxCRPttmj3J9xz57tT68c7/eP+Shj/2otiJt29xIr2hIl2W7R7E+6R91EBEO2EkJoLol0nbjVdbV/T1fY1XUQ7AAAAAEA1QLTXvWhv75Rdvb+OXRVjRPuCXlekmz8HV8EkivYFP85NsQ9k5PzoqLUaJjfdnp1gR7QrMPvXP/DkdfzNUI9vMaI8t1P9yIbcBHshoj27Hia7SsZMo7fKiR+tlHPHXXGenWgPvbbw6ph317ki3V0rE9jJjmhHtBNCkoNo14lbTVfb13S1fU0X0Q4AAAAAUA0Q7RNBtPsT7OEMyB+bviI/sFfK+EkU7fYamtyNUSM72P0g2nVkp9rtuFPurmi3jxUu2nfOj5uIz7ej3ayYMatf4kV7JIh2RDshJDmIdp241XS1fU1X29d0Ee0AAAAAANUA0V73on3VS7Irss7FlexGjoduhmrk+u5eOZlnR7tzTX99jOmEHg+sjjnxsvz44HuxO9oR7aVgJtvttSzehHtwdUzfKjna9m7sjvZE0e6so7FviJrb157J7nAPHouK9tDqGCPXn9kjo3E72hHtRVFMEO2E1GEQ7Tpxq+lq+5qutq/pItoBAAAAAKoBor3uRTsURe2KdigHiHZCSM0F0a4Tt5qutq/pavuaLqIdAAAAAKAaINoR7ZMLRPvEBtFOCKm5INp14lbT1fY1XW1f053Qor1/jcyd2SA3zpgtN85YLG2jafzHzGFpnd8gU2fMljkrD8nIqH08Bez3NTImI/Y5abNpiUybaZ7fsEBWHqzCa6gTMq0L3c9q3io5MJLG30EAAACoT9L/uQDRDrUEon1ig2gnhNRcKiHa9+7rlc1btjvs7N4rQ8Mj2WMnT52Wzm1d2eMGc759jTTRiFtNV9vXdLV9Tbf2RbsrspvbFCLXEdPpiPZMa6NMnbdaDhZ97cD7KlXO+++r4qJ9iyyaZV77aPGv3Qj6+atLF86O4G+QGx/ukOGiP/N8HJbWe+Y472m42PdUIJsWzZG5LQOpXR8AAADqjXL+LBMPoh1qCUT7xAbRTgipuaQt2o++dzwrzo1gN6I9KNKNaN/d805IvlcajbjVdLV9TVfb13QR7Tramxtkbkspk+x1LNr718hdpT6vUrRvap4ji9o6pHnmktKeP5H0RfvopsflpuYOGSrxvQMAAMBEI/2fCRDtUEsg2ic2iHZCSM0lbdFukxk4FJpqR7SX3td0tX1NtxZEuzMVnl1DMjsr1Y3ENitZ/Md93BUtrqieE5LccY/lE+25tS/OtZs6ipbeyaLdunZgdU0h7yt8Te8xezVNomjvdCbO/eeIrLQJrX1xjxcll51+3PO638vgtZv8qXcj52f5626CPBa4jjspn/1sIqtWzPFGaTk4Ku2OcPcn6l1JPndlcFrcfsz9Ou7aZtI8+Jpzn0vgepsel2mB19/0VkDIG4FufnlwcHXuPT4cI9QR7QAAABAi/Z8JEO1QSyDaJzaIdkJIzQXRrhO3mq62r+lq+5pu1UV7ogT3SZ5oj6xtca61QFoy1rkJz+EI76xcjxPc45Mk2p3XllfcJ0+0x7+vRlmZ9L5CwtuW8v6aF/95PFltX6sAbImexV/jYgt452uzv30091yJE+0JYrwpsCIm0HX2ngeOOV/PD4r5nJQ3z51pXSKt2fdsP1fusfiJ9i3yyKJOGfav7Uj3xfLWiPe+jEB3BPtj7mPOLxUaw+/bPw/RDgAAAFnS/5lgoon2jzbdEJG3UB/8m4WflTXvHY58T4NsveKzsvXfRQUu1AH//j/Ltr19ke9pPhDthJDUU0nR7u9jN+tk7Mf8/ezbunbL2XNDkW6aaMStpqvta7ravqZbG6I9XqS7JIt2Z3J7Zk4aJ8rtWNFuuoulPfhY+xKZOt8T3KEbjgYIXT/5tblT+vZzBkkW7UnvKyKA40S7ecx/D8HXkpXSrniPTLkXgy3UHYyodgV/8HWaVS/mFxG56e8E0R53TUdY5x5zr+XJceuYLdad6zV35OS4RVbUZ4/nE+02W+SR0HMZ0R78hULCtbKv2RLwAAAAMEmJ/zmlnEw00f4/n7zDEba2xIXa56NN18v640cj39MgW//hn2Xrf/hoVOJC7fM//lq29fZHvqf5QLQTQlJPpUS7kedGopuJdvtYEHO80rJdI241XW1f09X2Nd2qi3aDEdz+pPS8VdaNRZNltiE3UW7OS5jUjhPtSSI98vzxuOtfFkSnzCPn+GtIbLGdT7QX+b6CctpaCxP8BUF2Mjz03m1hXgBxUtwT7fYNUosS7fbjIZluifSAzPafLyji3V3ugdcSt7rGTOIXKNqj62UCYt1fHWO/pzj81xG3WgYAAAAmGen/LDDRRPuslx6Vf/vjKRGJC7XPV1ruk9dOnYx8T4Nsvf+nsvXPPh6VuFD7TP8X2Xb4vcj3NB+IdkJI6qmEaPcle/AmqEmYCfcdu/Yg2gtA09X2Nd2aEO0BHDkdkt35RXt2Cj2zOjLJnSVRtOeZOE8S8QVOtIcxE+r2FHl+0e6L54Lely3ak86PwV0HY0vzccgj2sMT7TGPxQn1pGsGH3P+HPP98NfWhK5tdtQHb5bqT/HnVsUUM9HunDszsCombqI97j3ZFHoeAAAATBLS/5lgoon2P/TvkY/8/NqIxIXa56GdG2Tz+aHI9zTEli7Z+t8+GZW4UPNsa3lBtp05H/2e5gHRTghJPWmL9mIku9nTbva3F3JuOdGIW01X29d0tX1Nt9ZEe2Q/eWSXuo0rrOfMW5AsvGOluttLvm5hJO1oDxO//91/X7bYDXX89xV3Tpxo926EGp2gTyBOcPufTdLEfmwnRtrHnZe0vzwiw8N71O2d7MHX8VZIqC+RtrbF4Sn67J5668asoYl2b2o9JN/99xXe/+5Ot5cw0c6OdgAAAAiR/s8EE020G5hqrz8KmWb3Yaq9Dilhmt2AaCeEpJ60RbtZBePvXw/i72m3j4+3WiYNNOJW09X2NV1tX9Ottmh3d5kHp5RtIW5wJ8L9c2yJnLQPPXpt+/q+UM4dt689HvGiPXpdd3WL3XffV9J6mez7ihHase8re54r24PP3+TL+shqmTiZXppo919b7vrWjVCz55gJcf+cxyKT59nXnZ1Wj66JcbEEevba0ee1n3PlygXuLzlC0ttMqge/H770tx9fJc1mhz6iHQAAAFSk/zPBRBTthuue+ZH83w/+TUToQu3xmSdvl1dOvh/5HuZj6zfnyNb/+LGo0IXa429vkG2ZdyPfw0JAtBNCUk/aor0e0IhbTVfb13S1fU232qK9HCTeBLUCxIv28pB4E1SoTxDtAAAAECL9nwkmqmg3MNle+xQzyW7DZHsdYCbZ3y1+kt0H0U4IST2Idp241XS1fU1X29d06160O+tTFsTfLLQCpCb5vfcVO1EOdYlZOePfrNU+BgAAAJMRRLtGtBvMzvZb1zbJJx79GhPuNcC/WfhZuazpBrn+mUZZsnfz+DvZx8PsbJ/fKFuv+pJs/Y//Rbb+uxjZC5Xj3/9n2foXV8rW22bLtvWvFb2T3QbRTghJPYh2nbjVdLV9TVfb13TrVrQHblaauJu9IuTWxNirX0oi8L6y617sc6CuyK2teSxwQ1UAAAAARLtWtANA/YJoJ4SkHkS7Ttxqutq+pqvta7p1K9oBAAAAAOoaRDuiHWDygmgnhKQeRLtO3Gq62r6mq+1ruoh2AAAAAIBqgGhHtANMXhDthJDUg2jXiVtNV9vXdLV9TVcr2gEAAAAAoBQQ7Yh2gMkLop0QknoQ7TpprOlq+5qutq/pItoBAAAAAKoBoh3RDjB5QbQTQlIPol0njTVdbV/T1fY1XUQ7AAAAAEA1QLQj2gEmL4h2QkjqQbTrpLGmq+1rutq+potoBwAAAACoBoh2RDvA5AXRTghJPYh2nTTWdLV9TVfb13TLL9oPS+v8BmluG5ORyDEAAAAAAHBBtCPaASYviHZCSOqphGjfu69XNm/Z7rCze68MDY/kPcf82T6eJhpprOlq+5qutq/pll20ty+RqfNXy8HR9P/DAQAAAACgfkn/5+VaF+0AAIh2QkhqSVu0H33veFacG8FuRHtQpMc9Vmk00ljT1fY1XW1f0y23aG9vbpDm9uA0u5lwb5SWDBPuAAAAAAA5EO0AAIh2QkhqSVu022QGDoWm2oMivlpopLGmq+1rutq+pltW0d6/RubOXCxt9jS7mXKfOZt1MgAAAAAAWSavaCeEkHIE0U4IyZtqi3Yj2ff1HZBtXbuzq2OMfLd7aaKRxpqutq/pavuabjlFu5lmn9tySEZGo8dcCd8gc1YmHAcAAAAAmFQg2gkhRBNEOyEkbyop2k+eOi2d27qyIt1fG2Mk+9lzQ85j5pg5x5xr99NCI401XW1f09X2Nd3yifZOWTRzvBUx5pwGubGpA9kOAAAAAJMcRDshhGiCaCeE5E2lRLsR6Uaom4l2/zFftAcn2OMeSxuNNNZ0tX1NV9vXdMsl2jOtjTJ1XIHuifYZC2RlXiEPAAAAADDRQbQTQogmiHZCSN5UQrT7kj1uF7t5bDz5njYaaazpavuarrav6ZZHtJsbnjbk38HO6hgAAAAAgACIdkII0QTRTgjJm7RFez7JbjBC3V4dE/y6Emiksaar7Wu62r6mWxbRbm52On+1HLRvgurjSfa8Ih4AAAAAYFKR8LNzGUG0E0ImchDthJC8SVu0m2l1/yanQYIT68FzKi3ZDRpprOlq+5qutq/plkO0570JqjPtPt7udgAAAACAyQainRBCNEG0E0LyJm3RXg9opLGmq+1rutq+pqsW7c60+mJpS5pmBwAAAACAGNL/+RnRTgiZyEG0E0LyBtGuk8aarrav6Wr7mq5atAMAAAAAQAkg2gkhRBNEOyEkbxDtOmms6Wr7mq62r+ki2gEAAAAAqgGinRBCNEG0E0LyBtGuk8aarrav6Wr7mi6iHQAAAACgGiDaCSFEE0Q7ISRvEO06aazpavuarrav6SLaAQAAAACqAaKdEEI0QbQTQvIG0a6Txpqutq/pavuaLgAAAAAAVANEOyGEaIJoJ4TkDaJdJ401XW1f09X2NV0AAAAAAKgGiHZCCNEE0U4IyRtEu04aa7ravqar7Wu6AAAAAABQDRDthBCiCaKdEJI3iHadNNZ0tX1NV9vXdAEAAAAAoBog2gkhRBNEOyEkbxDtOmms6Wr7mq62r+mWQntzg8xtOSQjo9FjSfRu7JEpy7ulseuCjMQcBwAAAACYXCDaCSFEE0Q7ISRvKiHa9+7rlc1btjvs7N4rQ8MjzuPm/5qv/WM+ndu65OSp05HrpIVGGmu62r6mq+1rukXTv0bmzlwsbaPmPwyOyMIVcfJ8UJ56Jvw4oh0AAAAAIAiinRBCNEG0E0LyJm3RfvS9445oN3/2xbr/dRzm/G1du+XsuaHIsbTQSGNNV9vXdLV9TTeOfBPrmdbG0LENa7tlytojYXk+kJFbl/fJqzH98nJYWuc3SktmDHkPAAAAAHUGop0QQjRBtBNC8iZt0W6TGTgUmmq3MRLenGM/niYaaazpavuarrav6YYx4rpBps5bLQdjJXmnLJppie2uPpliSXVnej0r392pdzPNfvXyHlk6EJ1o96fdr3bwrxWdincx1+uRZf3e4+1LZOrM2dLchmwHAAAAgHoC0U4IIZog2gkheVNLot2si9mxa09Fp9kNGmms6Wr7mq62r+nmMBK9QW5s6oidZDeYafapkeP2+phxBLkt2i1R70j31ozsH70gG9Z1y60bB+Ov44t2g7POpkHmrIyfwgcAAAAAqD0Q7YQQogminRCSN5UU7Uakm/3rZj2MfcxQjWl2g0Yaa7ravqar7Wu6Dv2rZe7M2TInYV2MizvtHjc5Hlofk7g2Jl60G5kelvK584x0d0V7QN6b66+Iu/74vygAAAAAAKgdEO2EEKIJop0QkjeVEu1mSt3sXk8S6UbCb92xq6I3QfXRSGNNV9vXdLV9TdfgTKrPGEe0mxUt881KmZj/IAhMpYfXxgSJE+2uQM+tjfHxVsyY6649IsMDGVm4tk8ajXQ3ot2beA9f3xPtMxbISna2AwAAAEDNE/NzdZlBtBNCJnIQ7YSQvKmEaPcle76boJpj+Y6niUYaa7ravqar7Wu6OfJPhOe7QWpufcygLGu1J9SD58SL9vjzven41oy8urHHvfbajPT68j34OlgdAwAAAAB1B6KdEEI0QbQTQvImbdFeiGSv5jS7QSONNV1tX9PV9jXdMAk3Q3VE9mJpi5tm93DWx7T2yC2xa2MMcaLdvxFqQscT7UvX9skGZ2d7jzSu7ZFbgnvbPcket9IGAAAAAKB2Sf7Zulwg2gkhEzmIdkJI3qQt2s2qmM1btkfw97Sbm6Kam6PmE/Fpo5HGmq62r+lq+5puHPb0evxNUC2c9THdcrW9NsZ/PG41jHeOK9sDx7OrYdxJ+ewEe1efXLO8WxZkJ+DNLwYapYVVMQAAAABQdyDaCSFEE0Q7ISRv0hbt9YBGGmu62r6mq+1ruuNjVsogswEAAAAAyguinRBCNEG0E0LyBtGuk8aarrav6Wr7mi4AAAAAAFQDRDshhGiCaCeE5A2iXSeNNV1tX9PV9jVdAAAAAACoBoh2QgjRBNFOCMkbRLtOGmu62r6mq+1rugAAAAAAUA0Q7YQQogminRCSN4h2nTTWdLV9TVfb13QBAAAAAKAaINoJIUQTRDshJG8Q7TpprOlq+5qutq/pAgAAAABANUC0E0KIJoh2QkjeINp10ljT1fY1XW1f0wUAAAAAgGqAaCeEEE0Q7YSQvEG066Sxpqvta7ravqYLAAAAAADVANFOCCGaINoJIXmDaNdJY01X29d0tX1NFwAAAAAAqgGinRBCNEG0E0LyBtGuk8aarrav6Wr7mi4AAAAAAFQDRDshhGiCaCeE5E0lRPvefb2yect2h53de2VoeCTxuOHoe8cj10gTjTTWdLV9TVfb13QBAAAAAKAaINoJIUQTRDshJG/SFu1GmhuRbv5sBLsR7f7XhszAodDX5vxtXbvl7LmhyLXSQiONNV1tX9PV9jVdAAAAAACoBoh2QgjRBNFOCMmbtEW7jRHrwal2I9nNY/7xk6dOy45dexDtBaDpavuaLgAAAAAAVANEOyGEaIJoJ4TkTbVFu5lg99fFxE28VwKNNNZ0tX1NV9vXdAEAAAAAoBog2gkhRBNEOyEkbyop2s20eue2rsgOdjO9btbFGOEenG6vFBpprOlq+5qutq/pAgAAAABANUC0E0KIJoh2QkjeVEq0+zLdFulGuhv5biS8f07cDVPTRCONNV1tX9PV9jVdAAAAAACoBoh2QgjRBNFOCMmbSoh2X6DbK2H8VTFB+e6fa0+9p4lGGmu62r6mq+1rugAAAAAAUA0Q7YQQogminRCSN2mL9iTJbojbyR6ccLfPTwuNNNZ0tX1NV9vXdAEAAAAAoBog2gkhRBNEOyEkb9IW7WZa3exet/En1oP72Q2VluwGjTTWdLV9TVfb13QBAAAAAKAaINoJIUQTRDshJG/SFu31gEYaa7ravqar7Wu6AAAAAABQDRDthBCiCaKdEJI3iHadNNZ0tX1NV9vXdAEAAAAAoBog2gkhRBNEOyEkbxDtOmms6Wr7mq62r+kCAAAAAEA1QLQTQogmiHZCSN4g2nXSWNPV9jVdbV/TBQAAAACAaoBoJ4QQTRDthJC8QbTrpLGmq+1rutq+pgsAAAAAANUA0U4IIZog2gkheYNo10ljTVfb13S1fU0XAAAAAACqAaKdEEI0QbQTQvIG0a6Txpqutq/pavuaLgAAAAAAVANEOyGEaIJoJ4TkDaJdJ401XW1f09X2NV0AAAAAAKgGiHZCCNEE0U4IyRtEu04aa7ravqar7Wu6AAAAAABQDRDthBCiCaKdEJI3iHadNNZ0tX1NV9vXdMvGQEZuXd4tV689IiP2sTqlvblBps6YLTfOmC1zVh6SkdHoOWo2LZFpM81zLJa20fT/Y2t0bIssmuW/rwWyMjNWY98v7/XNWyUHRirxeZRA/xq5a9ZiaRsZLcNnt0UeuW2O8/1oemtUhtP4OwYAAAA1Svo/6yDaCSETOYh2QkjeVEK0793XK5u3bHfY2b1XhoZHijqeNhpprOlq+5qutq/p5mdQnnqmW27ZOBgRihvWdsutwcdrVbS3L5Gp81fLQYXENsJ9bksaor1TFs1skOa2seKvbQS96n0Zod0oLZNBtDu/zGhwfmHiM2flQOlSu6yi3cO/5nAZrwkAAAA1Tpl+1skDop0QMpGDaCeE5E3aov3oe8cdkW7+bAS6Een+14bMwKGQXDfHgscrgUYaa7ravqar7Wu6cQTFcu/GHpnSmpH9ISl5RBau6JFlAxdqXwrWsmjvXyNzZ5Y4yT5hRXsKOKJ9sbw14r1XR2o3lC7b0xDtY4el9Z6F0nLQvqaZeF+CgAcAAJiQlPpzXOEg2gkhEzmIdkJI3qQt2m2CYv3suSHZ1rXbkfH+8ZOnTsuOXXucY3Y3LTTSWNPV9jVdbV/TDXNYWuebaWIjcL3HnEl1S6p39YXku5lun2Km2ZfHT78753vHr17eI0v9a1nX8XHkvpmML0SCGpHurF6xVrw4Ejs8xeziiW2nZ0nuuMfyiPZMa2PguaO9cckn2rMrZYp4XyNj7muavyok4OMeyyfazfm553avmzvHCOHcSp3o8STcSfXmttHA5xh+LNO6MPe8D3fIcORzCa69CUylZ8W39Tq8X0YcaFscFu3+sdBjW+SRwLWd5w9O1G96XKbNCn7uj8lbAdG+adGcwGe2QFaGhLn5zNz1MHHd3Dlxot3/XOxrAgAAQP1j/6xTfhDthJCJHEQ7ISRvqi3ajVQ3ct0/HvdY2miksaar7Wu62r6mm8NdY3JjU4cllKPrYyJrY/I97on6kFxf3ievmudwjnl/DnQKF+3mNcfL4iyJE+2BtS3eY85O9sj7TxDtlpR3ZLbzCwr7efKQKNoLeF9JE+3ONRsDu9fdX57MjeyYTxDtnoD2pbUj3eevkgOB9zmtKU6Cj8+m5jnO55vtJghyRyxHnsOV1XOzU+hBSe+9F1tE5xPtznM3ZuX1pkVLpN2S7ubaOZGfO9eeaHder/mMPDHvinHzfIHjTR0ylHcVTrJod9/L43LTrAb2uAMAAEwo8v1sUB4Q7YSQiRxEOyEkbyop2o0879zWFZpgt1fFmD+bcxDt46PpavuarkP/apk7c7bMsWWyR3h9TPLamDjRbrrhx1xx39hl+uZafbLBXDcw3b5hXfQ68biyPO+NShNFuyfHs2I9WW7HiXbzWHN78Nxg331duQlmj3nWVHmSLC/kfSV2jdAOvF5f5tvT3gmi3cjwRZGp89x57rR73PUKwBLrRkCb12mL41jRbrrm/QZkde48I6nNaxyVkcBzZI+32dPrhgQ572Em1Oe2uFI/+Ofw+zBdT8qHBLj7SwFf1Nvi3X6uuOe0j+WeV7HyBgAAAGqM6M9x5QbRTgiZyEG0E0LyplKi3V8TYyba4x73b4Z66PARZ+Kd1THjo+lq+5quwRHOZhVHgmgPrY9JWPdiiBPtwbUyQVzRbqS7e90Na/ukca0r3Y1od49HnyNCaJVKzHR4HtEemig35zV1xr7/qGj3VuzYIt2sDIkR9RH81+xI4pjjwXP892WL7TyiPXjMfG/tXxK4xIn2wt6XM5nurUkxvwxIfA8R3LUz7hR6QI5b58WK9pgbmjp4K2b8XxAcbFkii5oWO+/rYOtCucuI/PYY0W5Pqcdc3xfaEQEeEe22sA+LdvNYcLVMPlHunpewJsYT7c7qGXa2AwAATABifo4rM4h2QshEDqKdEJI3lRDtvkwv5CanZpJ9d8872ZujVgKNNNZ0tX1NV9vXdHMkrY4x5NbHvBoj032SRLv9WKjjSPUj0mjkfVefLOwalGWt8RPz4+HuTI/Zu54kpD2xbNbHtDfZE+o5kkR7cO1MGO1Ee5js+7J3jCd2Oz2Jfkha5tsy3SdZtIf3qOfDXd9SjGzPSvTM6siEeuScmM/KX89iYzp3tXTIyvlLpD2zWha1HpK2Jm86P0a056bMx7wp+MCqGPVEe9xj4WO5FTg+UTkfgtUxAAAAE5D4n2vKCaKdEDKRg2gnhORN2qK9WMm+dceuiq6NMWiksaar7Wu62r6mGybmZqge7vqYHrnFvjFqgFip7uxkD+xotztGtG/MSKPpmcl5M9m+3FsnE3N+XuJuZupMhueZNHdE/AKZk2e/elS0J0j9Yknc0W5h7U3PdYO72MO4N0BdIHOcX5zEXT9OtBe7GsadUDf730Py17+Ra9wNTb0VMG0rG2VRe7zQjxXtWalvC+pc566WVdLs/H8ldMqie5ZI87wF7qS5Ldq96fWmpB3s3nH/ucI72P2bpuZuaOpMoc+zdrQHdraHsXfNBx9P2NHuSPaEKXcAAACoY+J+VigviHZCyEQOop0Qkjdpi3azKsZfCxPE39MePG6EfCVXxvhopLGmq+1rutq+phtHnFh218d0y9WRtTFmz3p0NUzw5qmubA8ez90A1RH4WRHvTs4nraaJ4Ij15BUnPq4U98+xxXbSPvT4qfTgeeHrxkysj0eSaPdFdbHvKyLivan7OAkeel/h67uyPfy+3JuhumI99JnEyfR8oj27euYxS+a7Atr+vMPXcGV78Bwjy533F5Dn5mvzHNNmGhk+JiORtTBRaR1c7WLe78om878BX4YHX5vpdkjzrCXZm6FG+gEJH/u+Ho67MWqSaN8ij9y2RNpYFQMAADABsX8eKD9piPZfb3bF1ukh+79mCSGkcvnwQ5FlW8Zk0VtjiHZCSHzSFu31gEYaa7ravqar7Wu6kHwT1NRJEu3lIPEmqFCbJIl2AAAAmLik8DOgRRqi/Tcdrmg/cU7kQ/s/aAkhpEIZGXNF+6/aEe2EkIQg2nXSWNPV9jVdbV/TneyY6f2psXvpK0Fakt9dAWRWulTnfUHR+HvfmVwHAACYRNSnaF++dcy5D05mUOQCpp0QUqWcPCfyZOeY/PrtMdlxOPrPqkIoJoh2QuowiHadNNZ0tX1NV9vXdCcrjmD31oQUte6l3GRXuZRjst3bsW/el7Pj3D4OtYdZDeOulknaPw8AAAATFe3PfuOThmh/ZueYPNI2Kjve/VBGi/NUhBBStvSd+FCeeHtUVmwdk52IdkJIXBDtOmms6Wr7mq62r+kCAAAAAEA1qE/R/vLeMXm0fVReeeeCDI3a/0VLCCGVSUf/BVmyeVRe2DUmu9+N/rOqEIoJop2QOgyiXSeNNV1tX9PV9jVdAAAAAACoBvUp2jszY7J406gs3TImZ0fs/6IlhJDK5Lnd7v93zRv7x6TnaPSfVYVQTBDthNRhEO06aazpavuarrZfrS4AAAAAAJRKfYp2g5Hsi94alf3vfyhjxbkqQghR59iZD+W3HaOyeNOY7CjxRqiGYoJoJ6QOg2jXiV9NV9vXdLX9anUBAAAAAKBU6le0r93jro9Z28P6GEJI5dN24ILz/1lj7hmxq8S1MYZigmgnpA6DaNeJX01X29d0tf1qdQEAAAAAoFTqV7TvODwmSzaNSvNbo5IZFLnwof1ftoQQkk5OnhN5snPM+edP+4Ex2Vvi2hhDMUG0E1KHQbTrxK+mq+1rutp+tboAAAAAAFAq9SvaDat3j8mv2kfl+d0X5DxT7YSQCuX13gvy2KZRWblDN81uKCaIdkLqMIh2nfjVdLV9TVfbr1YXksm0NsrUmbPlxhmz5camDhkejZ6j57C0zm+QqTNmy5yVh2QklecIY97XNP99PWzeV/r/geizqXlO9jOds3KgiM/0sLTeM0ea20ZL/Iy2yCOz3M/5xhkLZOXBURkJHu9fI3fNaog/NoHYtGiu3LVyQIZGoscAAACgFNL/OSpN0b773Qvym7fdqdLOgQsyMmb/1y0hhJQ3e9+7IL9+e1R+1T4mHZkLsjfmn03FUEwQ7YTUYdIW7SdPnZbObV2yect2h53de2VoeCR0TmbgUPb4tq7dcvbcUOQ6aaIRv5qutq/pavvV6o7PoDz1TLdMWd4tV1vcsnGwPEJyICO3ruiTV0sSqOPhiuzmtrGSX6sj3FMS7c6156+Sg8XK7v41MnfmYmkb0b2vac77KvK5y4AR7nNbKinafYxwb5SWJJm+6XG5af5qOTBS+Gfy2ro9cs3yHnmy3/9euP+bWbhjrIj3VwH618h3Zy2Rt4bd99731l754oro/66vbs3IO4q/V0HMZzN940kZqqXPAQAAoKwU/jNDqaQp2g1v9I7JY+3uChlujEoISTP+DVDNP2/W9YxJ95HoP5OKpZgg2gmpw6Qt2m327ut18L8++t7xkFw3x+JkfJpoxK+mq+1rutp+tbqx+BLXFrBdfTJleQpCfBKL9k3NDTK3pYRJdkR7iYwj2p3jS6RtxDpuBHxzhwzFCHhHJrf2OL94coVy9UR7pnWh3NQU/zozzyyUu1riptmPyAO/75bGFF5vsmg/LM/8YKG0HBwp+3MCAABUlui/c8tN2qLd4K+QeWLzmPSzr50QkkLMXvant4/JI23lWRnjU0wQ7YTUYSot2s30ui/ajUw3Ut085h83E/Bbd+xy/q/dTQuN+NV0tX1NV9uvVjdC+xJntUesmM4j2ns39gSm3gPnOJ1uWdBl/l9RzWPehHxrRvaPHpGFK+Km5Xtkab9//njkVq84q1Bm5H5B0N4cfDyHu6KlUxbNtAV83GP5RLt7vv8cpax+SRbtnbIou+pkttw4z5963xJ+PMsCWZkxr9s9HhbScY/lE+3h5zDvK/jejczNrp6ZMVuaSpDfiaJ90xKZNtOscLGv7Yv2DmnOfuaPyVuhXzQE18MkraYpUbR7zz913qrItLsrkzOywPllkXk9UdHuTr3n/n6b6fdh0995QL64NiNPtna7U/E7zC+d3P99vDPq/2/AFeH+/05uftMX+mHMWphpMx/LTqxH3tdt7vt2njdEHtG+84B8KTv1HnjdY4Pyu2f3yDXB6Xfv3AU7xmTfxoRp+bVH5Lz/HOaXF7MapOktZDsAANQz9s9R5acSot3wzE5XgBnZ3nucyXZCSPliJtn/4En2FVvHZOfh6D+DSqWYINoJqcNUUrT7Yt1MsZuvzRT7jl17slLdfG2m280KGf+cSqARv5qutq/pavvV6gZxd5L7wjZ6PFG0W4870t0R6YGvveP2MQfFRLsvwZNFb/JEuyPig13nlwzRSf540e5eNyfJA5I+8bVESRLtSY9nyTPR7uxBDwp0R15Hz40X7UYoN8jcrFy3JL2zyzx6rWKJF+1bZFFzp4xYr9uV6Z7oDuxQ37Rojvv6HfHtHp+bleuudDev236O0kS797rNcxqZHTjuivZB2bexRx7oMrI6LNqdFS0Bce6ubOmTV4yUN6Ldk9OvrjUyvk9eGTkiC39vftlkpPag/O6Zbrk1Oy0fJ8Xd9z5t3irpi5lkN5hp9qSJ/Phrmv9d9ss3VvivwxfpffJy9nvv9m5900ysx18jeaLdf44X5bu3NcicP/YnvDYAAIBaJ/1/f1VKtBt82c7OdkJIueLvZDf/XCm3ZDcUE0Q7IXWYSoh2I83jdrT7ov39E4PO475gNxPvwSn3tNGIX01X29d0tf1qdX3c6e+oZA6RINo3rOuWxuzEusFMqvfIMueH89w5t27MSOPyHllmT6trRXuMHM+RLNrtFTnmM4iT27Gi3XTnrw7tVg+eF7qRaoCmkIgPvDbrOY1oN9PTibvb84h2R4YHjrlSOzyV7r/eiGg3XfO+AtLTmWD3z/NuGmpPxxdLvGi3MZLfl+Ixq2OCIt68rnvCu9WzrzskcMcT7bnnSXpt7kR/Tvj7on2oPyPfeCYj+0Ki/Yg8sMIW0K48d453HZAvPuNK+Ox1HGntCe4B/5q577Mj6tce8eS1mVSfI1MffjuPqDZrWsx7Spocj5fk5nnc1xN43c/uCa/EcWR8nyx9s0euCU6re4wr2h0KeQ8AAAC1Svr/7qqkaDf4a2SMFHt+9wU5fJpVMoSQ4mNWxby674I8tsn950k518UEKSaIdkLqMJUQ7UGCO9njJtjtqfdKoBG/mq62r+lq+9XqurjT2MG1K7HEivakm6X2yNKAaHfle8INVBWi3RBcERNd35JHtIeOmc9gsbTHvP9Y0e5I3qhIv9E+LwFHpGfXvUSP2ytxwoJ+HNGefV9GShtZbSa0o+fFivak9/WwPSHvrXeJWaVSCEmi3Twefn5faMeI9uB0vbVyJvS6ixLtBn96Pjy57pNdnfOwOyGeE+RGLO+VZf2Dsiwk2gNT4Q5FiHZzPGEFiyOvvfUrN+aT1M4NXpOn3ZNEe3jdTQ4zfW8LeTOhn5t0D1+jYNE+Y4H88UDSLwMAAABqlaR/v5aPSot2g7lB6uObxxw5Znix54IcPMk6GULI+DFrYt7ovSCLPcH+q/axst34NI5igmgnpA5TadEeXBcTt6PdXidTCTTiV9PV9jVdbb9a3SClrY5xRXt4ot3GP+eINC6POVcp2nO4vzAIy/Z8oj2weqZ9sUxtMmtLks+JiHZroj3SiRHWhU60h3CkunVeXtEekOhtS2Ras70exjrHFu3zw5Ph+XDW1JQg2+NEuyuw/VUx5rECJtr911rw6x5PtOc/nm91jCOTAzvXkyfaA48VItqd4/HfZ5f8q2PM7va7VsbdBDXwehJE+7iS3KyTeSYjL2/scdfjWH8fx70Gq2MAAKDuSf/fX9UQ7Ybd716QVYHpdsPSLWOyYd8F6T72oRz7QGRolGl3QiZrPvxQnPVSJ86J7H//Q3nrwAX5vbeH3f9nhpli3zZwQfbG/DOmXBQTRDshdZhKi3Yj1YPrY8zXndu6smLdPl4JNOJX09X2NV1tv1rdCCXcDDW4gz1yPXtne1efs4c6fK477R4R8EVj7013iexiD2HkfKPMmZf8C4ZY0R4r9Ytn3F3sDv6e9KCQj3vM7oz/viKi3buufQPUJBw5Pt8S7d56mXzT7omiPXAtd7o9aaI9fid7/A1Qg+QX6fl2tDuSPeY9hUS780ulHrm1NTf57UyG2zva/a+NmM8n2rN70ONvgBp+fTE3Q+1fI9+dtSThBqk+8aLd3ckevAGqTbDnrpW51ZLq2fca9wshT7JzM1QAAKhv4n/WKSfVEu0+Ow6PyYt7xuSJt8dkkSfPAACSWLxpTJ7dOSad/WOy92j0nynlppgg2gmpw6Qt2oP72e0d7T5Gruc7njYa8avpavuarrZfrW4s1u7yLAmi3eDK9sCKCU+su48baehLdH/VjHUdR8AH1s7Ye9xjCa9XcYgV6q4UT1ov44j4yD70mGt7189JwfB1oxPr4xMv2jsd2R28rv2aHUJrXqJCPTttbr+ve2LeV3A1jCfbw+/LFdzZtSnZY49Fp+oTRXv0uu57y8ny4PE5K1dJ88zwRHv4M7Gluivb7dftnLPpcZlmXlPouXN71sPXiBHtZv1Kws1Ew6L9gvQ6q1TCK1bCa1i8G6Ga/rii3fRdoR3835e9vsXHfH9uasq9TufrhNedI0G0e6/vS6HVNf6KGO81Bfeye+fe7Nwc1b+GK+Cz7z17vtkbv1BaDiLZAQCg3sn379jyUG3RHqQzMybre8acKdXfdo7JY+1GvudWzADA5MH8b//RdveXcL/fNiZrusek/cCY9FRArgcpJoh2QuowaYv2ekAjfjVdbV/T1far1YXkm6BWgnjRXh6SboIK+UgQ7XWJ2X3u/qIifiIdAAAA9Ewu0Q4AUGsUE0Q7IXUYRLtO/Gq62r6mq+1XqzvpcVblxEzvV4j4tTRlwJl2T97hDgk4Nw4tZNc7AAAAgCH9nxkQ7QAAyRQTRDshdRhEu078arravqar7VerO2nxdtHHrVypLLkVNbHrYYolu06m2u+rzvDX3Zh1M29562bscwAAAAAiINoBAKpJMUG0E1KHQbTrxK+mq+1rutp+tboAAAAAAFAqiHYAgGpSTBDthNRhEO068avpavuarrZfrS4AAAAAAJQKoh0AoJoUE0Q7IXUYRLtO/Gq62r6mq+1XqwsAAAAAAKWCaAcAqCbFBNFOSB0G0a4Tv5qutq/pavvV6gIAAAAAQKkg2gEAqkkxQbQTUodBtOvEr6ar7Wu62n61ugAAAAAAUCqIdgCAalJMEO2E1GEQ7Trxq+lq+5qutl+tLgAAAAAAlAqiHQCgmhQTRDshdRhEu078arravqar7VerC/XIFlk0q0GmzpgtN85YICszYzISOacMbFoi02aa53hM2kZSeo4Q1vs6OFqB5wyzadEcmTazOs+dxKZFc93vw8Nvy9CI7j/mzbXuWjkgQyPRYwAAAFAKun83FwKiHQAgmWKCaCekDpO2aD956rR0buuSzVu2O+zs3itDwyOR8/bu63XOM+fbx9JGI341XW1f09X2q9Udn0F56plumbK8W662uGXjYHlk5EBGbl3RJ6+ORo/1buyJPndrRvbHnJsGr63rllvN+0zj+YzInr9aDo6W+h9oRkw3Sksqot2V3s1to0W/903Nc2Ruy4AMF9nL4b2vKsjuaol287z5P7PD0nrPHGluG8lzzjj0r5Hvzloibw1X9r0BAABMbEr9Oa5wEO0AAMkUE0Q7IXWYtEW7jRHqBv/rs+eGZFvXbuk72C9bd+xCtBeBpqvtV6sbS/8amTtzsbTZArirT6YsjxfiKvKIdh9HuFdQsPtMWtHev0bumrW4pEn2ehbt1WJ80X5BMq0L5a5xzslH5hm3H5xmj3sMAAAAiqHUn+MKB9EOAJBMMUG0E1KHqbRozwwcCon2fX0HHLluQLQXh6ar7VerG6F9iUydOVua22IEax7RHp48D5zjdLplQdcF73rehLwjzY/IwhVx0/I9srTfPz9w/YhoN9fqkWUDR6Qxex33ud2uuX6fvNpvRH50Gr73rR6ZsvZITlwGhL9zLPK6uuXq4PnjkV294jJn5SFX2Du/yGjIPp7DFduZ1kaZOn9VSMDHPZZPtJvzc89dgjDPI9qN8A2+ryZv6t1+PMvDHTI8at7XQpk2f5UcCKw/iXssWbS7U93uahnvulbvkezqmdly4zz7unlw3q//PXlM3hoJPrd53oXScrBDmrPXD5yz6XG5qblDDrTkPvM5K3NC3HmPTR25tS/+Zzs8muczi66J0Yn2LfLIbe5nOhx5fI5MjXk+AAAAKIT0//2JaAcASKaYINoJqcNUUrSblTFmdczR945HjiHai0fT1far1Q3iyFyzNiNG3DokiXbrcVuKuxLeE9hxwrzkiXZ/rY0v5t2vnQl057gv8n35Hjjuy/QE0e6//9In2jtl0cx4CZ4laaLdEfGNge/DYWmd3yBzfVGfPTdBtDuCPyfJHeluZLb9PPlIEu1JjwdInGh3uo2BtSyuOJ8bkNIu8aLdWevS5Mv1aLeQqfBxyb4/W7Qbwe+vlLGe24h2I+l9WW29z3yi3X+OQl67RrSbyXXzy4B4mX5YnvnBHJk2b5X0DSd/XwEAACCOuH+3lhdEOwBAMsUE0U5IHaYSot2I9fF2tCPai0fT1far1fVpbzaTujHrYoIkiPYN67qlMTuxbjCC20ya5x4z59y6MSONy3tkmTWtrhXtwed2zsvKc+91BJ4vKNfTF+0NuSn2yPE8ot2R1Q0ytyU4AR8nt+NFuxHdi0K71YPnBW84GsCe/vZeW2Qi3Jv8zre7PVG028cSpX2caDePLQmfa71GR8Tb76NY8oh2855jp9SNaA99VuHzyyXa3ecp5f25In28/e7uTVcfY4c7AABAURT77+XiQbQDACRTTBDthNRhKiHagxjpbnaym93swccR7cWj6Wr71eq6uFLYWTESI32zxIr2pJul9sjSgGj3p8tjb6BaadHuXSdd0W6viIkRynlEe/CYmUjPSvfQeXGi3Z1+j4h0M41tT77H4a9Q8da9RI4bnIl5733FiO18oj0ox42ANu8rel6MaA+tdkn6BUF4tYxZaRO99jiUUbT7E+9lE+0Gb3o+uJpmXDxB3zeOoHdF+2xpWMnOdgAAgMLJ/+/X/3977/YdxZnm6c4/sfdae/aqrpqLfTMX+3L3xb6ZqZ5VVT1/wb4w7lndnkGubldXNQKXXWDXwQi7qlw+SfIBfMSATyBXcbKxXT6CAEsYI4MQBgQ6gABztMFIwv3u9X6RkRnxRURKkW9mBoGe31rPKisjfpEZoQOqJz+90QwQ7QAA2eQJop2QEqbdol0F+4GDhxNCHdGeH0vX2i+qG6Wx0TFJ2Z0k3GdKujak7Ntu0d6WFe1xgmvryfZ6ol3f/HASfVI2rfBleki2aM9ecW5c0e6hUn2R160r2qsSPTyvtNXTWaI95c2KLCIr79NfRwZNFO3NXtGeOM48UYF+d115zugYAACAxsn373IjINoBALLJE0Q7ISVMu0W73gw1bXwMoj0/lq61X1Q3QQM3Q43OYE8cz5fkQ6Pyk8S+wWr3hIDPOkb18Zyi3Yn02v7R1e3Jee6V48X2MeDNTXePJWaxxwlugLpSlnYPyEyqjE8T7ZWZ7P5z5WWeYjvtZqZpjyU7wXmlr5pPEe3havXqjHa/4xPcGNUX7W68TMcS6d6VIeCbINqDG5yuro5giV+Pys1H9WaqEdE+1zUL98k9o318u/zyzjV1xsFUJHs3N0MFAABojNb/+4loBwDIJk8Q7YSUMK0W7dH57Gkz2lW8R7crg/uH2ircLeLX0rX2LV1rv6huKuFMcF+CZoh2JZDtkdEx4XgW93h4s1LdNxw14x3HCfjI2JnK/onjRo49P9EeH2uzMibzo2NvRmTt0Jjc4Yn2xGic6Ar4ejixPvfolmCle7hPmohXWXwjvjo9cezk8QPZ7q1Y9z+f9cgQ7YFEjj7vM4l9/BEuiTE0WXPeoyNpoufl3Tw1uhq/NkIlEOvp22pkifbkeQXntssJ93mI9thYG3/OefR1r5SNu7bKMm9Fe+LcwhurRl57I6JdO9k3QQ1ukqrHzF7tDgAAAPVJ/ze2mSDaAQCyyRNEOyElTKtFexmwiF9L19q3dK39orq3NsnRMaUi8yaobSBDtDeFVh67CBKjY1pDftGuq+eDvwyYTmwDAACA5tDaf/8VRDsAQDZ5gmgnpIRBtNvEr6Vr7Vu61n5R3VubMov2YNb6so1pN0FtB+H4lmbL8PiNQpPbS0hbRHu4qn7m1rluAAAAtwSt/Pc/ANEOAJBNniDaCSlhEO028WvpWvuWrrVfVPfWpoyiPRDsboSIm2Hub28j1RE1aeNh8hIZjeKPkik7LRbtejNT93nwb1gLAAAANwGt/7cZ0Q4AkE2eINoJKWEQ7Tbxa+la+5autV9UFwAAAAAAGgXRDgBQJHmCaCekhEG028SvpWvtW7rWflFdAAAAAABoFEQ7AECR5AminZASBtFuE7+WrrVv6Vr7RXUBAAAAAKBREO0AAEWSJ4h2QkoYRLtN/Fq61r6la+0X1QUAAAAAgEZBtAMAFEmeINoJKWEQ7Tbxa+la+5autV9UFwAAAAAAGgXRDgBQJHmCaCekhEG028SvpWvtW7rWflFdAAAAAABoFEQ7AECR5AminZASBtFuE7+WrrVv6Vr7RXUBAAAAAKBREO0AAEWSJ4h2QkqYVov2i5evyOD+Idm773PHF8NH5Pr0THW7/rc+Fm4/cvR44hitxiJ+LV1r39K19ovqAgAAAABAoyDaAQCKJE8Q7YSUMK0W7T4q0qMyfWxi0qH/ffXaddk/dKj6cbuwiF9L19q3dK39oroAAAAAANAoiHYAgCLJE0Q7ISVMu0W7SvR6q9Z9Ed8OLOLX0rX2LV1rv6guAAAAAAA0CqIdAKBI8gTRTkgJ007RHo6JOXPufGJbCKJ9/li61n5RXQAAAAAAaBREOwBAkeQJop2QEqYdol3FetaMdn8/neeuc939ba3EIn4tXWvf0rX2i+oCAAAAAECjINoBAIokTxDthJQw7RDtUVSm6xx2nccefTy8aWq91e6twiJ+LV1r39K19ovqAgAAAABAoyDaAQCKJE8Q7YSUMO0W7SrYDxw8HFu1Hkr2dt8ENcQifi1da9/StfaL6gIAAAAAQKMg2gEAiiRPEO2ElDDtFu0q06PjY4qW7IpF/Fq61r6la+0X1QUAAAAAgEZBtAMAFEmeINoJKWFaLdqj89nTZrTrjU+j25V2z2m3iF9L19q3dK39oroAAAAAANAoiHYAgCLJE0Q7ISVMq0V7GbCIX0vX2rd0rf2iugAAAAAA0CiIdgCAIskTRDshJQyi3SZ+LV1r39K19ovqAgAAAABAoyDaAQCKJE8Q7YSUMIh2m/i1dK19S9faL6oLAAAAAACNgmgHACiSPEG0E1LCINpt4tfStfYtXWu/qC4AAAAAADQKoh0AoEjyBNFOSAmDaLeJX0vX2rd0rf2iugAAAAAA0CiIdgCAIskTRDshJQyi3SZ+LV1r39K19ovqAgAAAABAoyDaAQCKJE8Q7YSUMIh2m/i1dK19S9faL6oLAAAAAACNgmgHACiSPEG0E1LCINpt4tfStfYtXWu/qC4AAAAAADQKoh0AoEjyBNFOSAmDaLeJX0vX2rd0rf2iugAAAAAA0CiIdgCAIskTRDshJQyi3SZ+LV1r39K19ovqQjZjfV2yqGOJ3LZ4idzWPSDTs8l97JySvhWdsmjxElm6cVJmWvIccfS8bg/P6wk9r9b/H8SQPT1Lq9d06caJHNf0lPTdt1R6+mcbvEb75Mk7g+t82+KVsvHkrMxEt49vl7vv7Ezf1mJGdx2Rv39lWH60YVh+9PaUXG/o/C7J+jeH5Sd6DNNxWsee3mVy98YJuT6T3AYAAFBeWv97FKIdACCbPEG0E1LCtFq0X7x8RQb3D8nefZ87vhg+ItenZ6rbz5w7X92mHDl6PHGMVmMRv5autW/pWvtFdefmkqx7c1h+HAq8CP+081JzhOTEmNzxyqi83xIxGIjsnv4bDb9WJ9xbJNrdsVdslZN5Zff4dlnWsVr6Z2zndbs7r5zP3QRUuC/b1E7RHqLCvUs2Zcn0Pc/KP6zYJidm5ntNgu+PquCOfn98cimX7HbCvUFB7rp9Y/LlbONfDy1l4i355U/XyK5pve6XZP2fD6des3/85GJD558keI5VB2406XgAAABZzPd3hsZBtAMAZJMniHZCSphWi3YfFelZMl0FvIr4sYnJxLZWYhG/lq61b+la+0V1Uwklri9gh0blxxtaIMQXsGjf09MpyzY1sJId0d4gc4h2t32N9M9421XA9wzI9XoC/osT8vevjMpfG5TdFtH+4Y7D8j935hP7zabeivXxNx+UuzelbPvihPz3V0blPcPXcTr1RPtpefP+VbLp5EyOrz8AAIAs6vxu0CQQ7QAA2eQJop2QEqbdol0lepZoV3Qbon1+WLrWflHdBLvXuNEeqWK6jmg/vnMksuo9so/rDMvKoe8qx6uskO8bk2OzU7LqlbTV8iOydjzcfy5qo1fcKJTFtTcIdvdEH68RjGgZlN4OX8CnPVZPtAf7h8/RyOiXbNE+KL3VUSdL5Lbl4ar3ffHHq6yUjWP6uoPtcSGd9lg90R5/Dj2v6LmP9a2qjZ5ZvES6G5DfmaJ9zxq5vUNHuPjHDkX7gPRUr/kzsismaKPjYbJG0zQo2ivPv2j51uzV7nVEe2w8zIY6+6SK9il58NXa98k/JlbKB2Nj7kgV7fHuj3TVe/Wa6bZReX98TP5n+H0Y2x6K8Nr35UvjN2Tae916bd68f6ncvnyrjE4nz8td05+uko0nUsR2HdHuX7PqPpPj8r9e0b8YqK1+//Cdw/L3lX0+cP/t/0wJVst/Gz7/nmflf9zZKd27Ul4TAABALjJ+L2giiHYAgGzyBNFOSAnTTtEerljXcTH+NuXqtety4OBhN27G39ZKLOLX0rX2LV1rv6hulGAmeShsk9szRbv3uJPuTqRHPq5s97c5DCvaQwmeLXqzV7Q7ER/tujcZkiv500V7cNyaJI9I+szXkiRLtGc9XqXOinY3Bz0q0J28Tu6bLtpVKHfKsqpc9yS9m2WePFZe0kX7PuntGZQZ73UHMr0iuiMz1Pf0Lg1evxPfwfZlVbkeSHd93f5zNCbaK69bn7NDBX/K9izR7j1eG/MSfzMpXbT7Ej0Q510Hbsj0rCfRI29UBULc7+oq72H5ydtTFeEc9kflr+4aR4+t35cqtPVNr4pcT5XiKtGXyqInPs1c7a+r2f+hJ2N76jGTj1evWbif2145z6G0Y9Rb0V7BjbNZKkvfGE9/bQAAAPOi9f+GINoBALLJE0Q7ISVMO0R7dA67P6Nd0RXszGjPj6Vr7RfVDQlWfyclc4wM0f7BjmHpqq5YV3Sl+oi8PFF7TPe5Y+eYdG0YkZf91epW0Z4ix2tki3Z/RI5egzS5nSratbtiW2y2enS/2I1UI3THRHzktXnPqaJdV09nzm6vI9qdDI9sC6R2fFV6+HoTol27el4R8ehWsIf7VW4a6q+Oz0u6aPdRyR9K8ZTRMVERr6/rvvhs9errjknUuUR77XmyXluwoj/lpqkZol3Huqwaqshr99iUPBgV2BVSRfvEmPyvN8fkaOSYyf18oe69nujXiJPnUbEefx3BCJpgpbg+T3wcTU1eByJ+u/zyp53uLwcSI2GqBKvde7NWjmeIdnfNYpJ8Sh4KX2vlseA6jMlLfcMpQn0eot2xT5785+CNgm+R7QAA0BCt//cD0Q4AkE2eINoJKWHaIdqjqHTfP3TIrV73tykq3dNkfCuxiF9L19q3dK39oroBwWrs6NiVVFJFe9bNUkdkbUS0B/I94waqBtGuREfEJMe31BHtsW16DVbL7pTzTxXtTvImRfpt/n4ZOJFeHfeS3O6PxIkL+jlEe/W8VEqrrNYV2sn9UkV71nk94a+Qr4x3qTdKpQ5Zol0fjz9/KLRTRHt0db03cib2unOJdiVcPZ++cr06OucJb2Z7qmgPJHjyxp/JMSxJgR4e0+8Oy4/mK9rf9EbB5BDt+t/J1z0sKyuiffzNVfIPHUuks55o19n29+lImeR1DF9jUrRn3Sy1cs2i56376Qr9xPPnFO2LV8obaaNtAAAA5iT/70F5QbQDAGSTJ4h2QkqYdov2ucbD6OO6PUvEtwKL+LV0rX1L19ovqhulsdExgWiPr2j3CfeZkq4NKfsaRXuN4A2DuGyvJ9ojo2d2r5ZF3Tq2JHufhGj3VrQnOinCer4r2mM4qe7tV1e0RyR6/xq5vccfD+Pt44v2FfGV4fVwY2oakO1poj0Q2OGoGH1sHivaw9c679c9l2ivvz3/6JhAgldXgfudCJmiXWW5P44mRh3R7q9or4jt+Yr28L+TzxlSf3RMvRukRl9PmmifS5LrXPb/uXNK1uq5R+a1z/sYjI4BAICm0Pp/QxDtAADZ5AminZASpt2ifa4V6zo6pt3jYyzi19K19i1da7+oboIGboYancGeOJ4/s31oVH6S2DdY7Z4Q8Lnx56YHJGaxx1A53yVLl2e/wZAq2lOlfn7mnMXuCOekR4V82mN+Z+7zSoj2ynH9G6Bm4eT4Ck+0V8bL1FvtninaI8cKVrdnrWhPn8mefgPUKPVFerA9fUa7k+x1zildtIc39Uw+7pMq2itz0+9I3AA1SoZoT3SDGe3xee/Zoj02Bz3xnFEybobqRsuskV1Zq9mVVNFeu2b+46k9d3PU+FgZxd0gNXW1e02yczNUAACwk/F7QRNBtAMAZJMniHZCSphWi/bofPa0Ge3R+ezMaM+HpWvtF9VNxZtdXiVDtCuBbI+MeaiI9eBxlWChRA9HzXjHcQK+NiKitn894uNVHKlCPZDiWeNlnIhPzENPOXbl+DUxFz9ucsX63KSL9kEnu6PH9V+zIzbmJSnUq6vN/fO6L+W8oqNhKrI9fl6B4K6OTalueya5qj5TtCePG5xbTZZHty/duFV6OuIr2uPXxJfqgWz3X7fbZ8+zcru+pthzp8xZzxLtOgKlxxsV45Mh2pVAHMe/P4KboWaMlokJ9+RNT8PxLcH2LNGe0q3eCDXcVke0V87pv8dG12TLb3/1et2boIZkiHYl9ZrpfpXXpNcgfJ1OqidGy+hc99q1/cdPLlbO/bS8ef8q2XQSyQ4AAM2gzr9zTQLRDgCQTZ4g2gkpYVot2suARfxauta+pWvtF9WF7JugtoN00d4csm6CCvXIEO2QEx0ps0o2MvccAABueRDtAABFkieIdkJKGES7Tfxauta+pWvtF9Vd8LhROSmr99tE+liaJuBWu2fPcIcMdOX6vGa9AwAAACit/50B0Q4AkE2eINoJKWEQ7Tbxa+la+5autV9Ud8FSmUWfNnKlvdRG1KSOh8lLdZxM0edVMsJxNzpuZldl3Iy/DwAAAEACRDsAQJHkCaKdkBIG0W4Tv5autW/pWvtFdQEAAAAAoFEQ7QAARZIniHZCShhEu038WrrWvqVr7RfVBQAAAACARkG0AwAUSZ4g2gkpYRDtNvFr6Vr7lq61X1QXAAAAAAAaBdEOAFAkeYJoJ6SEQbTbxK+la+1butZ+UV0AAAAAAGgURDsAQJHkCaKdkBIG0W4Tv5autW/pWvtFdQEAAAAAoFEQ7QAARZIniHZCShhEu038WrrWvqVr7RfVBQAAAACARkG0AwAUSZ4g2gkpYRDtNvFr6Vr7lq61X1QXAAAAAAAaBdEOAFAkeYJoJ6SEabVov3j5igzuH5K9+z53fDF8RK5PzyT208d0m+6rHX97K7GIX0vX2rd0rf2iunNzSda9OSw/3jAsP/L4p52XZCaxfwNMjMkdr4zK+7PJbcd3jiSfu29MjqXs2wo+3DEsd+h5tun5AAAAAKBMINoBAIokTxDthJQwrRbtPkeOHnf4j49NTDrRfuDgYUT7PLF0rf2iuqmMb5dlHaulf9b7Pw5Do/LjDelC3EQd0R7ihHsbBXsIoh0AAAAAskG0AwAUSZ4g2gkpYdot2lWo+6JdxfpnBw7KmXPnEe05sHSt/aK6CXavkUUdS6Sn/0ZytXod0R5feR7Zx3WGZeXQd5XjVVbIO2k+JateSVstPyJrx8P9I8dPiHY91oi8PDElXdXjBM8ddPX4o/L+uIr85Gr447tG5MdvT8l0eMyI8HfbEq9rWH4U3R8AAAAAFjiIdgCAIskTRDshJUw7RXs4HkaFuv+YCvir164j2nNg6Vr7RXWjjPV1yaKOlbJxLEWyK1mi3Xvcl+KBhK8I7DRh3vCK9nCsTSjmg4/dCnS3PRT5oXyPbA9leoZoD8+fFe0AAAAAkA2iHQCgSPIE0U5ICdMO0a5iPWtGu24LH0O058PStfaL6obs7umURYtTxsVEyRDtH+wYlq7qinVFBbeuNK89pvvcsXNMujaMyMveanWraI8+t9uvKs8rryPyfFG5jmgHAAAAABt1fnduEoh2AIBs8gTRTkgJ0w7RHkXF+v6hQ06q+2Ld/7hdWMSvpWvtW7rWflHdgEHp7eiU2xoS7Vk3Sx2RtRHRHq4uT72BartFe+U4iHYAAAAAsFHnd+cmgWgHAMgmTxDthJQw7RbtUZkeXenu489xbyUW8WvpWvuWrrVfVDdKY6NjkrI7SbjPlHRtSNm33aKdFe0AAAAA0BQQ7QAARZIniHZCSph2i3adxe6PjwlhRXs+LF1rv6huggZuhhqdwZ44ni/Jh0blJ4l9g9XuCQGfdYzq4zlFuxPptf2jq9uT89wrx4vtAwAAAAAQBdEOAFAkeYJoJ6SEabVo91etZ0l2BdGeD0vX2i+qm8r4dlnWkTJGJkO0K4Fsj4yOCcezuMfDm5XqvuGoGe84TsBHxs5U9k8cN3Ls+Yn2+FiblTGZHx17MyJrh8bkDk+0J0bjRFfAAwAAAMACB9EOAFAkeYJoJ6SEabVoLwMW8WvpWvuWrrVfVPfWJjk6BgAAAACgeSDaAQCKJE8Q7YSUMIh2m/i1dK19S9faL6p7a4NoBwAAAIBWgmgHACiSPEG0E1LCINpt4tfStfYtXWu/qO6tDaIdAAAAAFoJoh0AoEjyBNFOSAmDaLeJX0vX2rd0rf2iugAAAAAA0CiIdgCAIskTRDshJQyi3SZ+LV1r39K19ovqAgAAAABAoyDaAQCKJE8Q7YSUMIh2m/i1dK19S9faL6rbjD4AAAAAwMIE0Q4AUCR5gmgnpIRBtNvEraVr7Vu61n5R3Wb0AQAAAAAWJoh2AIAiyRNEOyElDKLdJm4tXWvf0rX2i+o2ow8AAAAAsDBBtAMAFEmeINoJKWEQ7TZxa+la+5autV9Utxl9AAAAAICFCaIdAKBI8gTRTkgJg2i3iVtL19q3dK39orrN6LeU8e2yrKNTblu8RG5bvFr6Z1vxf2ZOSd+KTlm0eIks3TgpM7P+9hbgn9fMDZnx92kp+6T3zk5ZtHyrnJhpxTVthMprWrxEuvtn2/N5AAAAADDR+t+jEO0AANnkCaKdkBKm1aL94uUrMrh/SPbu+9zxxfARuT49k7ldOXL0eOI4rcQibi1da9/StfaL6jajPzeByO7pN8hkJ6ZbI9rH+rpk0fJtcjL3sSPn1agUDs9rwYj2U9J331LpqSfSx7fL3XcWcU0AAAAA8tL636MQ7QAA2eQJop2QEqbVot1HJXpUpKtoPzTyZUy+txuLuLV0rX1L19ovqtuM/tzc3KJ9d0+nLNvUyEr2Mov2opiHaHf7dMmmsdkFck0AAACgvDT/d1MfRDsAQDZ5gmgnpIRpt2gfm5hEtDepb+la+0V1m9FX3KrwDh2DEhBKdZXYOgokfDwkGNESiOqlMcmd9lg90V4b++KO3T1QR+Cmky3avWNHRtfM57zix6w85o+myRTtg9UxKrXjRrbvWSO3R663bp9OvP509HNV7T4xINPRa6rH7RmQE5tq+0SPPda3yp1Xf3dn9fNdG/OSlOi6/+3dwXPs6Vka+xqpvfYJ77Uj2gEAAKAs+L+bNh9EOwBANnmCaCekhGmnaFeZrqNjzpw7X30M0d5439K19ovqNqOfLcFDsle0J8a2uGOtlE1j3r4Zz+GEd1WupwnuuckS7e611RX32Sva08+rSzZmnVdMtPtSPhjzUnse/VhFdPJ65sEJ94oErz4eCvxQwLuPa6/PifOOiHyPba8v2oPnSO6TBNEOAAAAZSHr99/mgWgHAMgmTxDthJQw7RDtKtbnO6N9/9AhuXrteuIYrcQibi1da9/StfaL6jajH97YM02kB2SLdrdyu6MmjTPldqpo1+5q2R19bPcaWbSiIrhjNxyNEDt+9msLVun7zxklW7RnnVdi1XmaaNfHwnOIvpaqsA7Ee2KVe04yRfuKbZG57RWpfzKQ3klxHt2elOjJ/ZP7pKGr35dt8le6AwAAANxsZP2e2DwQ7QAA2eQJop2QEqYdoj2KSvd6Ml1Hy9Tb3gos4tbStfYtXWu/qG4z+g4V3OFYkOVbvRuLZstspbaiXPfLWKmdJtqzRHri+dMJxr+sTK4yT+xTG6ESl8P1RHvO84qKdm8sTPQNgqqwjp27vyJ+fjRPtOs1UHGelOjJ/ZP7ZKGy/faOlbKx8tz+dgAAAIDimft3TiuIdgCAbPIE0U5ICdNu0a4C/cDBw24lu79N0cd1O6J9bixda7+objP6Pk5Ox2R3fdFeXYU+ti2xkrtKpmivs+I8S8TPc0V7HF2h7q8iry/aQ2k9r/PyRXvW/ikEM9fzy/bmifZmr2ifzz4AAAAANwPz+33NAqIdACCbPEG0E1LCtFu064p1f3xMSDjDPXqz1HZgEbeWrrVv6Vr7RXWb0fdJzCdPzFL3CYT10uUrs4V3qlQPetnHnR9ZM9rjpM9/D88rfcRJpROeV9o+aaK9ciPU5Ar6DLw56tHnrrdivxmi3d3gdPnWyv6BIF8W3tzUva7OxA1XXcd/3hjMaAcAAICykPX7TPNAtAMAZJMniHZCSphWi/bofPa0Ge0q3qPb9WP/GK3GIm4tXWvf0rX2i+o2ox/MMo+uGveFuBKsCA/38SVy1jz05LH944dCubbdP/ZcpIv25HGD0S1+PzivrPEy1fPyVptnnld1v0C2R5+/O5T1idEyaTI9S7SrxPbOS4ne/HQu0R597qpkrxx/fLvcfWfl87x8q/RvjM6WD19DMG6mds38WeyIdgAAACgL/u+8zQfRDgCQTZ4g2gkpYVot2suARdxauta+pWvtF9VtRr8ZZN4EtQ2ki/bmkHkT1JLir2hvDYh2AAAAKAut/J0oANEOAJBNniDaCSlhEO02cWvpWvuWrrVfVLcZfTNufMrK9JuFtoGWSf7KeSVXm5eXtoh2tyo++VcAAAAAADcfLfydqAKiHQAgmzxBtBNSwiDabeLW0rX2LV1rv6huM/oNE7lZaeZs9rZQGxPjj35piMh5Vce9+PuUlNaK9tpImeQ4GQAAAICbkVb8ThQH0Q4AkE2eINoJKWEQ7TZxa+la+5autV9Utxl9AAAAAICFCaIdAKBI8gTRTkgJg2i3iVtL19q3dK39orrN6AMAAAAALEwQ7QAARZIniHZCShhEu03cWrrWvqVr7RfVbUYfAAAAAGBhgmgHACiSPEG0E1LCINpt4tbStfYtXWu/qG4z+gAAAAAACxNEOwBAkeQJop2QEgbRbhO3lq61b+la+0V1m9EHAAAAAFiYINoBAIokTxDthJQwiHabuLV0rX1L19ovqtuMPgAAAADAwgTRDgBQJHmCaCekhEG028StpWvtW7rWflHdZvTH+rpk0fJtcnK2+f9Hwx27e0BmZpPb2s3unk5Ztmnypngt9XlP1m/5vvQMHJeZ009L75a/kXUjMzKT2C8N7f6dbD81O8/9S8rpZ+TJLXfJ3tnwPPW8fyA9A8dk+vTT8uSW78u6w9Ml+FwDAABAsTT/918fRDsAQDZ5gmgnpIRptWi/ePmKDO4fkr37Pnd8MXxErk/PJPY7cvR4dR/9b397K7GIW0vX2rd0rf2ius3oL0TR7l5XxxK5bbHH8q0tuQ75QLTPCaIdAAAAmkLrf+9DtAMAZJMniHZCSphWi3YflehRka7SXeV7u+V6FIu4tXStfUvX2i+q24z+QhTttccHpbejU3r6b9wUrzHghLz1zvcrcl0F8g9ziPOFKtr1mv1A1o2oXA+vwXzfnAAAAICFS/N///VBtAMAZJMniHZCSph2i/axicmYVD9z7nyhkl2xiFtL19q3dK39orrN6PuiXYX0osVLAvns9glkdLjqe+nGUFafkr4VnbI0Jq/jj4Wivb87OKb2u6vHrR073JZcUe5tj0r73Wtk0YptcnJsmywLX19M6gevpdqNvfb48eOiPejFpXzlsUpfz0u3J86ruv+g9N5Z25Z83kZRoawS+R1Zt+X7smrz92TV5n/2Vnb/nWwfeVJ6Nle27+iVE5FrOvDJD+RB11P+q2yrSvnw2Dsyjh0eP9z2PbeCfH7nlf/Yqz7eIdPRr4UjP5OHtvxNbXuiDwAAAJAXRDsAQJHkCaKdkBKmnaI9XL2ucj18TCX70dETsn/oUHV0THR7O7CIW0vX2rd0rf2ius3oR0W7k+wx2e3L9IiYTpH0s+PbZVnHStk0FtneERHNKsc7Vku/298X2hUxHpHlu3vWyO7qa4k/d3AsFdmV41Wee2Plud25xI7ly3PvmJHH08+rq3rsxHntWSO363nN6Pa4lJ+9sc9Jd/85GiNY7f5gRJA7cf7xDplxrzWU1aGEDj4OR8+cHPw7eXDHk1Xx7j6u7husCq8dO/i4JtP9jyvHPjyflePhsf+LbKusNA9fdyjTBz75mXwae8Ogcmx9LreC/YfVbnJFOwAAAEAjINoBAIokTxDthJQw7RDtKs7TZrSH4l0l+9Vr16v76kx3ne3uH6dVWMStpWvtW7rWflHdZvRDqbxRV2f7K8pVMOuq8chj8XEwKqq74mI9Irf9j2NiOybdI8/nPxYhJstdvybWQ1Hvjp1ynDyiPeu8pr3zCj8OVrBX9q9zzVQqh5Lenw/f3T87DxEfHStTeWzkZxF5nhwdo0K7V+e9z74bk+614+nIFX0s+t/BdifiQxmu8+LfeSq2Ov7k4H+LyfJsIscOz1FXqLvXPZuyf/i6j7lrPPDJf6r+t9uOaAcAAICmMNfvMHYQ7QAA2eQJop2QEqYdoj2KivRQrKetcE97rNVYxK2la+1butZ+Ud1m9KPiNzHipLpq3CN1pbiK7pqcrh47ZZxLVbR7Qjoh2lOeP7Y63u9nHSe3aJ/fecVFe+28bs+4ZnML6bnIEO2b/yWygr2eaPfnt+cQ7SP+6JbkiJf4WJroaJkM0b4lfN1po2GCPqIdAAAAWof1d7O5QbQDAGSTJ4h2QkqYdot2FewHDh6urljX0TE6tz3cjmifP5autV9Utxn96piUyqzz2mz2OWS2v4/2M1Zyx1e0V6R12or26GNOlsdfT2JFe9Zra4Jod+Ng5jiv1BXtKtqzXpf3xkbxK9qj41/mIdojY2fykSHawxXtTpxHRsWwoh0AAADaQiO/1+QD0Q4AkE2eINoJKWHaLdpVqkfHx0RXuKd93A4s4tbStfYtXWu/qG4z+lXRrgI1MY4lENGJle4xKnPcl6+MS/oU0R57rsSxvZnt3sz1cHX7vFa0p82Sj3bT9kucX+X1hOcV2e6L9j2x2fbB6vbkczUDX7QHorzHifTw4yzRXllxHrk5anxm+xyivfpc870Bqv+6o6K9dix3Df0Z7JXV7eF2N6KmOmbGn0PvPxcAAADAfEn7PbK5INoBALLJE0Q7ISVMq0V7dD67P6M9ROV7uL3dkl2xiFtL19q3dK39orrN6Mfld5qUDmR0dPV1qlD3V6enrd72Z8BXjr0oZSSN4m5oGunqHPl5rWhXomNnugfk5KaufCvao+flbnLqPz7Hed0Zee1uxXr6c+QjEO3x8SyhZFfqi/bw41o/KqvnEu3h8VVy154/381Q08bKpLyuHb2y7ePvR1axR/t6Q9Udso4V7QAAAGAm4/fIJoJoBwDIJk8Q7YSUMK0W7WXAIm4tXWvf0rX2i+o2o98M/JXrtwr+yvW5Hm89/or2suCvaAcAAAC4GUC0AwAUSZ4g2gkpYRDtNnFr6Vr7lq61X1S3GX0zlREv0ZuF3hL4o2siINrzgmgHAACAmxFEOwBAkeQJop2QEgbRbhO3lq61b+la+0V1m9FvmMrNStNGyZSayHlljXtBtOcF0Q4AAAA3I4h2AIAiyRNEOyElDKLdJm4tXWvf0rX2i+o2ow8AAAAAsDBBtAMAFEmeINoJKWEQ7TZxa+la+5autV9Utxl9AAAAAICFCaIdAKBI8gTRTkgJg2i3iVtL19q3dK39oroAAAAAANAoiHYAgCLJE0Q7ISUMot0mfi1da9/StfaL6gIAAAAAQKMg2gEAiiRPEO2ElDCIdpv4tXStfUvX2i+qCwAAAAAAjYJoBwAokjxBtBNSwiDabeLX0rX2LV1rv6guAAAAAAA0CqIdAKBI8gTRTkgJg2i3iV9L19q3dK39orrpnJK+FZ3S039DZhLbAAAAAAAgANEOAFAkeYJoJ6SEabVov3j5igzuH5K9+z53fDF8RK5Pz7ht+r/6cbgtRPfXnn+sVmERv5autW/pWvtFdVPZvUYWrdgmJ2db/38cAAAAAADKS+t/X0a0AwBkkyeIdkJKmFaLdp8jR487/MdDzpw7L/uHDsnVa9cT21qFRfxauta+pWvtF9VNY3dPp/Tsjq5m1xXuXbJpjBXuAAAAAAA1EO0AAEWSJ4h2QkqYdov2sYnJuqJdt+k+/uOtxCJ+LV1r39K19ovqJhjfLss6Vku/v5pdV7l3LGGcDAAAAABAFUQ7AECR5AminZASpp2iPRwVo6vW/W2Kjos5cPBwW1ezKxbxa+la+5autV9U10dXsy/bNCkzs8ltgYTvlKUbM7YDAAAAACwoEO0AAEWSJ4h2QkqYdoh2FetpM9p9iljNrljEr6Vr7Vu61n5R3TiD0tsx14gY3adTbuseQLYDAAAAwAIH0Q4AUCR5gmgnpIRph2iPkjWDXVezf3bgYFtvghpiEb+WrrVv6Vr7RXWjjPV1yaI5BXpFtC9eKRvrCnkAAAAAgFsdRDsAQJHkCaKdkBKm3aJdBbuOh/GF+lw3SW0lFvFr6Vr7lq61X1S3ht7wtLP+DHZGxwAAAAAAREC0AwAUSZ4g2gkpYdot2nU0jD8+psjV7IpF/Fq61r6la+0X1a2iNztdsU1O+jdBDalI9roiHgAAAABgQZHxu3MTQbQDAGSTJ4h2QkqYVov26Hz2tBnt4Q1Si1rNrljEr6Vr7Vu61n5R3ZC6N0F1q93nmt0OAAAAALDQQLQDABRJniDaCSlhWi3ay4BF/Fq61r6la+0X1XW41eqrpT9rNTsAAAAAAKTQ+t+fEe0AANnkCaKdkBIG0W4Tv5autW/pWvtFdQEAAAAAoFEQ7QAARZIniHZCShhEu038WrrWvqVr7RfVBQAAAACARkG0AwAUSZ4g2gkpYRDtNvFr6Vr7lq61X1QXAAAAAAAaBdEOAFAkeYJoJ6SEQbTbxK+la+1butZ+UV0AAAAAAGgURDsAQJHkCaKdkBIG0W4Tv5autW/pWvtFdQEAAAAAoFEQ7QAARZIniHZCShhEu038WrrWvqVr7RfVBQAAAACARkG0AwAUSZ4g2gkpYRDtNvFr6Vr7lq61X1QXAAAAAAAaBdEOAFAkeYJoJ6SEQbTbxK+la+1butZ+UV0AAAAAAGgURDsAQJHkCaKdkBIG0W4Tv5autW/pWvtFdQEAAAAAoFEQ7QAARZIniHZCSphWi/aLl6/I4P4h2bvvc8cXw0fk+vRMbJ8jR49Xtytnzp1PHKeVWMSvpWvtW7rWflFdAAAAAABoFEQ7AECR5AminZASptWi3UeluhJ+PDYxGftYJfv+oUNy9dr1RLdVWMSvpWvtW7rWflFdAAAAAABoFEQ7AECR5AminZASpt2i3Rfr+t/6WPixroA/cPAwon0eWLrWflFdAAAAAABoFEQ7AECR5AminZASpp2iXUfG6OiY6GgY/e9wXEy4PSri24FF/Fq61r6la+0X1QUAAAAAgEZBtAMAFEmeINoJKWHaIdpDmZ41o11Xr+u4GN0eXd3eLizi19K19i1da7+oLgAAAAAANAqiHQCgSPIE0U5ICdMO0R7Fn8GuH+vNUnVkTCjc02R8K7GIX0vX2rd0rf2iugAAAAAA0CiIdgCAIskTRDshJUy7RbvKdJ3BrmI9HBUTXcUeyvboeJlWYxG/lq61b+la+0V1AQAAAACgURDtAABFkieIdkJKmHaLdpXq4Yr1tJns0RXufrdVWMSvpWvtW7rWflFdAAAAAABoFEQ7AECR5AminZASptWiPTqfPW1Ge3Q+u9Juya5YxK+la+1butZ+UV0AAAAAAGgURDsAQJHkCaKdkBKm1aK9DFjEr6Vr7Vu61n5RXQAAAAAAaBREOwBAkeQJop2QEgbRbhO/lq61b+la+0V1AQAAAACgURDtAABFkieIdkJKGES7Tfxauta+pWvtF9UFAAAAAIBGQbQDABRJniDaCSlhEO028WvpWvuWrrVfVBcAAAAAABoF0Q4AUCR5gmgnpIRBtNvEr6Vr7Vu61n5RXQAAAAAAaBREOwBAkeQJop2QEgbRbhO/lq61b+la+0V1AQAAAACgURDtAABFkieIdkJKGES7Tfxauta+pWvtF9UFAAAAAIBGQbQDABRJniDaCSlhEO028WvpWvuWrrVfVBcAAAAAABoF0Q4AUCR5gmgnpIRBtNvEr6Vr7Vu61n5RXQAAAAAAaBREOwBAkeQJop2QEgbRbhO/lq61b+la+0V1IZuxvi5Z1LFEblu8RG7rHpDp2eQ+dk5J34pOWbR4iSzdOCkzLXmOOHpet4fn9YSeV+v/D2LInp6l1Wu6dONEjmt6SvruWyo9/bMNXqN98uSdwXW+bfFK2XhyVmai28e3y913dqZvKwFjfavkHzqWSPeumdg1DR8PPtefyvUZw+d6Yrv88qdrZNd0+a4PAABA6zD82zpPEO0AANnkCaKdkBKm1aL94uUrMrh/SPbu+9zxxfARuT49E9vnyNHjdbe3Gov4tXStfUvX2i+qOzeXZN2bw/LjDcPyI49/2nmpOcJtYkzueGVU3m9IoM5FILJ7+m80/FqdcG+RaHfHXrFVTuaV3ePbZVnHaumfsZ3X7e68cj53E1DhvmxTO0V7iAr3LtmUJdP3PCv/sGKbnMgjpCfG5H+94n9/jMpfZxv/3OQlS7RXt7+5Sv6hZ8Ak2vf0LpO7N07I9Rn9eEoefDX958LKAzdSX0Nuvjgh//3NMfnS8DUOAADQehr/t3W+INoBALLJE0Q7ISVMq0W7j0p1Jfx4bGIyJtf97e3AIn4tXWvf0rX2i+qmEkpcX8AOjcqPN7RAiC9g0b6np1OWbWpgJTuivUHmEO1u+xrpn/G2q4DPEtVOtLdXrOdlXqJdV6zfmbVifZ88+dM10p+ybXTXEfn7vhYI8Xqifc+z8j96BuTbeucDAADQFlr/bxGiHQAgmzxBtBNSwrRbtKtYD0X61WvXZf/QITlz7nx1u66AP3DwsNvmd1uFRfxauta+pWvtF9VNsHuNG+2RKqbriPbjO0ciq1sj+7jOsKwc+q5yvMoK+b4xOTY7JateSVsVOyJrx8P956I2esWNx1hce4Ngd0/08RrBiJZB6e3wBXzaY/VEe7B/+ByNjH7JFu2D0lsddbJEblsernrfF3+8ykrZOKavO9geF9Jpj9UT7fHn0PPyx5FUR88sXiLdDcjvTNG+Z43c3qEjXPxjh6J9QHqq1/wZ2RWTsNHxMFmjaRoU7ZXnX7R8a3K1u0W0O4G/TTYu19e9Ujbu2irLdIRN7HlUci+tfc5jI2Ci21bKGxnnNado19dxZ2fmivjxOv1s0X5J1v/5sPwk/L5+e0q+rRz7wx2H5e83jMp7YWdy3P1VwD99clGujwd/IZD8uRDZ/8ZpefP+ZXL78i0ymiL/AQAA2kfy38Zmg2gHAMgmTxDthJQw7RTtumpdV6+HYl1lukp1levhPmmPtRqL+LV0rX1L19ovqhslmEkeCtvk9kzR7j3upLsT6ZGPK9v9bQ7DivZQgmeL3uwV7U7ER7vuTYbkSv500R4ctybJI5I+87UkyRLtWY9XqbOi3c1Bjwp0J6+T+6aLdhXKnbKsKtc9Se9mmSePlZd00b5PensGZcZ73YFMr4juyAz1Pb1Lg9fv5G+wfVlVrgfSXV+3/xyNifbK69bn7FDBH9luFe1OcM9Kf0/l2NMD0vvT2mvc0/us7K4+XyDWexJCXB/PPq96ot1J9I5A0qdJ9vDYG0+kb88S7U6mV+V6IN3v2HlRrkc+/onb7m+rUG9FewUdZxNcs/TzBgAAaD3Jf1ubDaIdACCbPEG0E1LCtEO0q1jPmsHuj4rR/9aZ7oj2ubF0rf2iuiHB6u+kZI6RIdo/2DEsXdUV64quVB+Rlydqj+k+d+wck64NI/Kyv1rdKtpT5HiNbNHuj8jRa5Amt1NFu3ZXbIvNVo/uF7uRaoTumIiPvDbvOVW06+rpzNntdUS7k+GRbYHUjq9KD19vQrRrV88rImTdCvZwv8pNQ/3V8XlJF+0+KvlDeZwyOiYq4vV13RefrV593TG5PJdorz1P1msLVvRHbpqaNqNdxXNGP0ZkJvzu3vCaDNaV5m5WeuLaNSba5yWq9TXet1VGp1O+1jJFu85wH5X3o48lxPmUPPTqiKz9ZFR+kuin7Z/O+JsPyj/cuVLeOOG/+QAAANAOMn5XayKIdgCAbPIE0U5ICdMO0R5FpbuOiwlHw4TjY0IRP3lqysl4RsfMjaVr7RfVDQhWY0fHrqSSKtqzbpY6Imsjoj2Q7xk3UDWIdiU6IiY5vqWOaI9t02uwWnannH+qaHeSNynSb/P3y8CJ9Oq4l+R2fyROXNDPIdqr56VSWmW1rtBO7pcq2rPO6wl/hXxlvEvaKJV5kCXa9fH484dCO0W0R1fXeyNnYq87l2hXwtXz3sr1CtXROU9UxPWcK9rD49Vel65gd+c+H9FeWfUePa/kWJxGRHs4dqaeaD8lb96/VHoTK+hrpIr2yiiYxM8Ffz+V6a+MyEvjKTdQzSXag5E6zGwHAID20/p/exDtAADZ5AminZASpt2ifa7RMPr4oZEvY6veW41F/Fq61r6la+0X1Y3S2OiYQLTHV7T7hPtMSdeGlH2Nor1G8IZBXLbXE+2R0TO7V8uibh1bkr1PQrR7K9oTnRRhPd8V7TGcVPf2qyvaIxK9f43c3uOPh/H28UV7Rfz6+6fhxtQ0INvTRHsgsMNRMfrYPFa0h6913q97LtFef3tLRsfUE+2VvyCIzk5v5op2pe7oGL1B6k+zbpAakC3aR+WvGV+fsX0OjMrfvxKdv15hHqJ9XivyAQAAWkry39Zmg2gHAMgmTxDthJQw7RbtejNUf3xMiEr2zw4czJTwrcIifi1da9/StfaL6iZo4Gao0RnsieP5M9uHRuUniX2D1e4JAZ8bf256QGIWewyV812ydHn2Gwypoj1V6udnzlnsjnBOelTIpz3md+Y+r4RorxzXvwFqFk6Or/BEe0UO11vtninaI8cKVrdnrWhPn8meXOntU1+kB9vTZ7Q7yZ52Ti0X7V21MTWV1e3J82xctFdfR8rNUJ3U3zgh12dSOhVSRXtsBnuy489sj89zr+BEvN4YOWW1eyjZV3AzVAAAKJqMf1ubCKIdACCbPEG0E1LCtFq0R+ezp81oV/EebouOlGknFvFr6Vr7lq61X1Q3FW92eZUM0a4Esj0+IkLFevC4yrJQooejZrzjOAEfGTvjz3FPJT5exZEq1AMpnjVexon4xDz0lGNXjl+TfvHjJlesz026aB90sjt6XP81O2JjXpJCvbra3D+v+1LOKzoapiLb4+cVCO7q2JTqtmeSq+ozRXvyuMG51WR5dPvSjVulpyO+oj1+TVJkc8rrdvvseVZu98av1MbS+MdIEe0qorNEddqM9g3zFO9zifbqqu3Ka16+Vd7o1q+ZyrmnjJXR89LV6eE1u9273jpiJf08tssv74yuXq9/E9SQdNGuVGR75Lr84ycq1iuPRzvhqBlPtrtjV69tZNX7nmflf/QMMCoGAABuAlr/bxGiHQAgmzxBtBNSwrRatJcBi/i1dK19S9faL6oL2TdBbQfpor05ZN0EFeqRIdoXIG6kTNabCwAAAFCh9f9OItoBALLJE0Q7ISUMot0mfi1da9/StfaL6i543KiclNX7bSJ9LE0TcKvds2e4QwaRFeaJbQAAAAAJWv87A6IdACCbPEG0E1LCINpt4tfStfYtXWu/qO6CpTKLPm3kSnupjahJHQ+Tl+o4maLPq2SE42503Myu+qNSAAAAAGog2gEAiiRPEO2ElDCIdpv4tXStfUvX2i+qCwAAAAAAjYJoBwAokjxBtBNSwiDabeLX0rX2LV1rv6guAAAAAAA0CqIdAKBI8gTRTkgJg2i3iV9L19q3dK39oroAAAAAANAoiHYAgCLJE0Q7ISUMot0mfi1da9/StfaL6gIAAAAAQKMg2gEAiiRPEO2ElDCIdpv4tXStfUvX2i+qCwAAAAAAjYJoBwAokjxBtBNSwiDabeLX0rX2LV1rv6guAAAAAAA0CqIdAKBI8gTRTkgJg2i3iV9L19q3dK39oroAAAAAANAoiHYAgCLJE0Q7ISVMO0X7kaPHZe++z+XMufOxx8cmJt3jyv6hQ3L12vVEt5VYxK+la+1butZ+Ud25uSTr3hyWH28Ylh95/NPOSzKT2L8BJsbkjldG5f3Z5LbjO0eSz903JsdS9m0FH+4Yljv0PNv0fAAAAABQJhDtAABFkieIdkJKmHaJdpXrBw4edkRFu/53VK6rjP9i+Ihcn55JHKNVWMSvpWvtW7rWflHdVMa3y7KO1dI/6/0fh6FR+fGGdCFuoo5oD3HCvY2CPQTRDgAAAADZINoBAIokTxDthJQw7RDtKtFVpp+eOuskeijaVabrx7qiPdz34uUr8tmBg+5//eO0Cov4tXStfUvX2i+qm2D3GlnUsUR6+m8kV6vXEe3xleeRfVxnWFYOfVc5XmWFvJPmU7LqlbTV8iOydjzcP3L8hGjXY43IyxNT0lU9TvDcQVePPyrvj6vIT66GP75rRH789pRMh8eMCH+3LfG6huVH0f0BAAAAYIGDaAcAKJI8QbQTUsK0Q7TrKnUlFOuhaFcBryvcQ6keCvm08TKtxCJ+LV1r39K19ovqRhnr65JFHStl41iKZFeyRLv3uC/FAwlfEdhpwrzhFe3hWJtQzAcfuxXobnso8kP5HtkeyvQM0R6ePyvaAQAAACAbRDsAQJHkCaKdkBKm1aJdJbrKdJXoWaL9qwuX3OOhYFcpH13l3mos4tfStfYtXWu/qG7I7p5OWbQ4ZVxMlAzR/sGOYemqrlhXVHDrSvPaY7rPHTvHpGvDiLzsrVa3ivboc7v9qvK88joizxeV64h2AAAAALBR53fnJoFoBwDIJk8Q7YSUMK0U7b5Y9z9OW8Hu79MOLOLX0rX2LV1rv6huwKD0dnTKbQ2J9qybpY7I2ohoD1eXp95Atd2ivXIcRDsAAAAA2Kjzu3OTQLQDAGSTJ4h2QkqYVop2Xc0+uH/IiXQflelXv72emNHuj5NpBxbxa+la+5autV9UN0pjo2OSsjtJuM+UdG1I2bfdop0V7QAAAADQFBDtAABFkieIdkJKmFaKdp+01eoq2VXGh2JdP9Z9dF+/3yos4tfStfYtXWu/qG6CBm6GGp3BnjieL8mHRuUniX2D1e4JAZ91jOrjOUW7E+m1/aOr25Pz3CvHi+0DAAAAABAF0Q4AUCR5gmgnpIQpWrQrKtejK93bKdkVi/i1dK19S9faL6qbyvh2WdaRMkYmQ7QrgWyPjI4Jx7O4x8Obleq+4agZ7zhOwEfGzlT2Txw3cuz5ifb4WJuVMZkfHXszImuHxuQOT7QnRuNEV8ADAAAAwAIH0Q4AUCR5gmgnpIRpp2i/WbGIX0vX2rd0rf2iurc2ydExAAAAAADNA9EOAFAkeYJoJ6SEQbTbxK+la+1butZ+Ud1bG0Q7AAAAALQSRDsAQJHkCaKdkBIG0W4Tv5autW/pWvtFdW9tEO0AAAAA0EoQ7QAARZIniHZCShhEu038WrrWvqVr7RfVBQAAAACARkG0AwAUSZ4g2gkpYRDtNvFr6Vr7lq61X1QXAAAAAAAaBdEOAFAkeYJoJ6SEQbTbxK+la+1butZ+Ud1m9AEAAAAAFiaIdgCAIskTRDshJQyi3SZuLV1r39K19ovqNqMPAAAAALAwQbQDABRJniDaCSlhEO02cWvpWvuWrrVfVLcZfQAAAACAhQmiHQCgSPIE0U5ICYNot4lbS9fat3St/aK6zegDAAAAACxMEO0AAEWSJ4h2QkoYRLtN3Fq61r6la+0X1W1Gv6WMb5dlHZ1y2+Ilctvi1dI/24r/M3NK+lZ0yqLFS2TpxkmZmfW3twD/vGZuyIy/T0vZJ713dsqi5VvlxEwrrmkjVF7T4iXS3T/bns8DAAAAgInW/x6FaAcAyCZPEO2ElDDtFO1Hjh6Xvfs+lzPnzqduG9w/JBcvX0lsazUWcWvpWvuWrrVfVLcZ/bkJRHZPv0EmOzHdGtE+1tcli5Zvk5O5jx05r0alcHheC0a0n5K++5ZKTz2RPr5d7r6ziGsCAAAAkJfW/x6FaAcAyCZPEO2ElDDtEu0q1w8cPOyIivar167L/qFDMnpyXD47cBDRngNL19ovqtuM/tzc3KJ9d0+nLNvUyEr2Mov2opiHaHf7dMmmsdkFck0AAACgvDT/d1MfRDsAQDZ5gmgnpIRph2gPZfrpqbPyxfCRmGg/OnrCyXUF0Z4PS9faL6rbjL7iVoV36BiUgFCqq8TWUSDh4yHBiJZAVC+NSe60x+qJ9trYF3fs7oE6AjedbNHuHTsyumY+5xU/ZuUxfzRNpmgfrI5RqR03sn3PGrk9cr11+3Ti9aejn6tq94kBmY5eUz1uz4Cc2FTbJ3rssb5V7rz6uzurn+/amJekRNf9b+8OnmNPz9LY10jttU94rx3RDgAAAGXB/920+SDaAQCyyRNEOyElTDtEu46FUa5PzyREewiiPT+WrrVfVLcZ/WwJHpK9oj0xtsUda6VsGvP2zXgOJ7yrcj1NcM9Nlmh3r62uuM9e0Z5+Xl2yMeu8YqLdl/LBmJfa8+jHKqKT1zMPTrhXJHj18VDghwLefVx7fU6cd0Tke2x7fdEePEdynySIdgAAACgLWb//Ng9EOwBANnmCaCekhGm1aFdxruNidFU7oj2JpW/pWvtFdZvRD2/smSbSA7JFu1u53VGTxplyO1W0a3e17I4+tnuNLFpREdyxG45GiB0/+7UFq/T954ySLdqzziux6jxNtOtj4TlEX0tVWAfiPbHKPSeZon3Ftsjc9orUPxlI76Q4j25PSvTk/sl90tDV78s2+SvdAQAAAG42sn5PbB6IdgCAbPIE0U5ICdNK0e6Ldf/jKIj2/Fi61n5R3Wb0HSq4w7Egy7d6NxbNltlKbUW57pexUjtNtGeJ9MTzpxOMf1mZXGWe2Kc2QiUuh+uJ9pznFRXt3liY6BsEVWEdO3d/Rfz8aJ5o12ug4jwp0ZP7J/fJQmX77R0rZWPluf3tAAAAAMUz9++cVhDtAADZ5AminZASppWiXaX54P4h2bvv8wQq3FW8R/dFtOfD0rX2i+o2o+/j5HRMdtcX7dVV6GPbEiu5q2SK9jorzrNE/DxXtMfRFer+KvL6oj2U1vM6L1+0Z+2fQjBzPb9sb55ob/aK9vnsAwAAAHAzML/f1ywg2gEAsskTRDshJUwrRbsPK9qTWPqWrrVfVLcZfZ/EfPLELHWfQFgvXb4yW3inSvWgl33c+ZE1oz1O+vz38LzSR5xUOuF5pe2TJtorN0JNrqDPwJujHn3ueiv2myHa3Q1Ol2+t7B8I8mXhzU3d6+pM3HDVdfznjcGMdgAAACgLWb/PNA9EOwBANnmCaCekhClatI9NTCZWu+sq+HYKd4u4tXStfUvX2i+q24x+MMs8umrcF+JKsCI83MeXyFnz0JPH9o8fCuXadv/Yc5Eu2pPHDUa3+P3gvLLGy1TPy1ttnnle1f0C2R59/u5Q1idGy6TJ9CzRrhLbOy8levPTuUR79Lmrkr1y/PHtcvedlc/z8q3SvzE6Wz58DcG4mdo182exI9oBAACgLPi/8zYfRDsAQDZ5gmgnpIRpp2i/WbGIW0vX2rd0rf2ius3oN4PMm6C2gXTR3hwyb4JaUvwV7a0B0Q4AAABloZW/EwUg2gEAsskTRDshJQyi3SZuLV1r39K19ovqNqNvxo1PWZl+s9A20DLJXzmv5Grz8tIW0e5WxSf/CgAAAADg5qOFvxNVQLQDAGSTJ4h2QkoYRLtN3Fq61r6la+0X1W1Gv2EiNyvNnM3eFmpjYvzRLw0ROa/quBd/n5LSWtFeGymTHCcDAAAAcDPSit+J4iDaAQCyyRNEOyElDKLdJm4tXWvf0rX2i+o2ow8AAAAAsDBBtAMAFEmeINoJKWEQ7TZxa+la+5autV9Utxl9AAAAAICFCaIdAKBI8gTRTkgJg2i3iVtL19q3dK39orrN6AMAAAAALEwQ7QAARZIniHZCShhEu03cWrrWvqVr7RfVbUYfAAAAAGBhgmgHACiSPEG0E1LCINpt4tbStfYtXWu/qG4z+gAAAAAACxNEOwBAkeQJop2QEgbRbhO3lq61b+la+0V1m9EHAAAAAFiYINoBAIokTxDthJQwiHabuLV0rX1L19ovqtuM/lhflyxavk1Ozjb//2i4Y3cPyMxsclu72d3TKcs2Td4Ur6U+78n6Ld+XnoHjMnP6aend8jeybmRGZhL7tYrg+Vft6JUT3tfEwCc/kAc3f09Wbf6e9Awca+G1PCFvvfOD4LzTnuP0M/Lklrtk7+xsG69LBkf+VR7a8kPZdmpGTgz8N3lo8z/L3tl2fr4AAACgcZr/+68Poh0AIJs8QbQTUsK0U7QfOXpc9u77XM6cO1997Pr0jHwxfMQ9rug+fq/VWMStpWvtW7rWflHdZvQXomh3r6tjidy22GP51pZch3zcvKI9RIV7L6I9ANEOAABQYtJ/12kmiHYAgGzyBNFOSAnTLtGucv3AwcOOqGgfm5h06H9fvXZd9g8dqn7cLizi1tK19i1da7+objP6C1G01x4flN6OTunpv3FTvMYAlczfr8h1ld4/lO2nbgKhHAHRHqH6WmZkRqX7O0/K6Oxscj8AAAC4CWn+778+iHYAgGzyBNFOSAnTDtEeCvTTU2fd6vWoaPfRFe3tXtVuEbeWrrVv6Vr7RXWb0fdFuwrpRYuXBPLZ7RPI6HDV99KNoaw+JX0rOmVpTF7HHwtFe393cEztd1ePWzt2uC25otzbHpX2u9fIohXb5OTYNlkWvr6Y1A9eS7Ube+3x48dFe9CLS/nKY5W+npduT5xXdf9B6b2zti35vBYCER+OcFn18Q6ZqVyzk4N/J70DT8q6zd+XVbqyeuRf5MHNf5PYp9rd/F9lW0Tix7Z9vEOmM958aUy0B/K8evzEivnKSvrqa/uerDscEe1HfiYPbfmbyHZdOV557bptx5Ny4tRT0hse4+O3I6/fe+7YtuSxdSzOdOTcTg7qSvXa9pcPT8e2AwAAQFlJ/12nmSDaAQCyyRNEOyElTDtEeyjPwzExiPbm9C1da7+objP6UdHuJHtMdvsyPSKmUyT97Ph2WdaxUjaNRbZ3RESzyvGO1dLv9veFdkWMR2T57p41srv6WuLPHRxLRXbleJXn3lh5bncusWP58tw7ZuTx9PPqqh47cV571sjtel4zuj0u5Wdv7HPS3X+ORnFz0qviPJDubszMbCjKVZ4fl+0q41VmO/lcWf19+mlZPzBafR1ufxXUnlB3jzdZtJ8c/Jm8dTqU+oH4rgnt4GM9ZvTj6op2t2o8GM/i+v6K9qoor8h3b/+BT/6TPFiV6/5zqeD/O9keHtsnumLd3wYAAAAlJ/13nWaCaAcAyCZPEO2ElDCtFu0XL19x42J0Vftcol0fH9w/5Dr+tlZiEbeWrrVv6Vr7RXWb0Q+l8kZdne2vKFfBrKvGI4/Fx8GoqO6Ki/WI3PY/jontmHSPPJ//WISYLHf9mlgPRb07dspx8oj2rPMKVzH7Hwcr2Cv717lmKnpDSe/Ph+/un52HuFYpfJd8Gh2ZMvKzqiwPBfnMbGT8jJvznjFmJWNbK0S7j64Srz5HuCK9OnIlLtpVlNfEeJZoj4j4an9aZmaDaxY7R93/nfD5dHtU+nu45/q+rGMVOwAAwC1I+u86zQTRDgCQTZ4g2gkpYVop2n2x7n8cReW6Sva0ba3GIm4tXWvf0rX2i+o2ox8Vv4kRJ9VV4x6pK8VVdNfkdPXYKeNcqqLdE9IJ0Z7y/LHV8X4/6zi5Rfv8zisu2mvndXvGNcsS1/OmcnPU6HiV6BiWuUW7N3bGH8FSoVHR7lbbR46t8rq6j3sd8dEw1fE0zRDtsX70mgWiPP2aVfaP7ZO8HsENTyvXfUcvM9gBAABuGdJ/12kmiHYAgGzyBNFOSAnTStEeyvO9+z5PoMJdxXt0v3bfBDXEIm4tXWvf0rX2i+o2o18dk1KZdV6bzT6HzPb30X7GSu74ivaKtE5b0R59zMny+OtJrGjPem1NEO1uHMwc55W6ol1Fe9br8t7YyL2iPWMFeshcov1TFeHR2egZx2tUtGcTzF+Pivemr2ivK9qT55hFMI89RbZXcGNokO0AAAC3COm/6zQTRDsAQDZ5gmgnpIRppWj3SVvRXrRkVyzi1tK19i1da7+objP6VdGuwjMxjiUQ0YmV7jEqc9yXr4xL+hTRHnuuxLG9me3ezPVwdfu8VrSnzZKPdtP2S5xf5fWE5xXZ7ov2PbHZ9sHq9uRzNYPKivTIzU2jzEu0e/PdH0yRyq0S7dWbm4ar28PnSMxUD1bGh/s7KV8V6eFNU1NuhpoqvwNpX5vR7m/3cGNo/iVxTUKciEe0AwAA3CLM43cDI4h2AIBs8gTRTkgJU7Ro1xuf+qvd2z2n3SJuLV1r39K19ovqNqMfl99pUjqQ0dHV16lC3V+dnrZ6258BXzn2opSRNIq7oWmkq3Pk57WiXYmOnekekJObuvKtaI+el7vJqf/4HOd1Z+S1uxXr6c+Rn+T4l9jNUOuI9uC/a2NU1g30Ss/m6FiZ+OiX2HiXquCOb4+Nh6mDk+Wbw7E3/yzbBn4Yk/nR7XrMvR//QNaHN0ONvbb/IttO7ZB1813RXr1mybE27o2S6o1Uw216/NqNT4MV7tHtKvi5MSoAAMCtQcbvkU0E0Q4AkE2eINoJKWHaKdpvVizi1tK19i1da7+objP6zcBfuX6r4K9cn+txAAAAACgTiHYAgCLJE0Q7ISUMot0mbi1da9/StfaL6jajb6Yy4iV6s9BbAn90TQREOwAAAMCtAKIdAKBI8gTRTkgJg2i3iVtL19q3dK39orrN6DdM5WalaaNkSk3kvLLGvSDaAQAAAG4FEO0AAEWSJ4h2QkoYRLtN3Fq61r6la+0X1W1GHwAAAABgYYJoBwAokjxBtBNSwiDabeLW0rX2LV1rv6huM/oAAAAAAAsTRDsAQJHkCaKdkBIG0W4Tt5autW/pWvtFdZvRBwAAAABYmCDaAQCKJE8Q7YSUMIh2m7i1dK19S9faL6rbjD4AAAAAwMIE0Q4AUCR5gmgnpIRBtNvEraVr7Vu61n5R3Wb0AQAAAAAWJoh2AIAiyRNEOyElDKLdJm4tXWvf0rX2i+o2ow8AAAAAsDBBtAMAFEmeINoJKWEQ7TZxa+la+5autV9Utxn9W5tB6e3olEXLt8rJ2Sb+H6nx7bKso1NuW7xEblu8WvpnbshM1j7dAzLdzOeeg5ODfycPbv5n2Ts7K59+8gN5cEevnGjj82dy5Gfy0JYfyrZTM3Ji4L9VX2PiugEAAAC0jdb/joRoBwDIJk8Q7YSUMO0U7UeOHpe9+z6XM+fOVx/T/9bHQnQfv9dqLOLW0rX2LV1rv6huM/pmnFBeLf2Nytzda2RRhwprZaVsHEuR1g1TT7Sfkr4VndLTf0NmZv3ePAnPHdE+N4h2AAAAuOlo/e9IiHYAgGzyBNFOSAnTLtGuQv3AwcOOqGiPcn16Rr4YPiJjE5OJba3EIm4tXWvf0rX2i+o2o2/GINrH+rpkUUdUrp+Svp5tMtbAsfLTYtFeFCM/kwd3POnkupPuH++QmbZczzk4/bT0brkrkOsq3SuvMbEfAAAAQNto/e8iiHYAgGzyBNFOSAnTDtF+9dp12T90SE5PnXUiPUu0K7qiHdE+Pyxda7+objP6SiC801aV64rwLtkUWWW+u6dTlm2alJnZYLV40IkSX5Wu+y9K3Rb0nehOeU0BlRXpYb97oCrF9TXr6+jvrm3vjhwrdk5uVXntuPHXVGPpRj2vyn571sjt1WtSObYv5DNE+57I8WPHTDmuY/nWmHTW117bJ3n8RlHx3jtwXPZ+/H15cPP3ZNXm78m6wzORY78n67d83z3uiK2G1213yd5TT0pvuI+/Wn5EV63/TaX/X9zq9Wa8bgAAAIDWgGgHACiSPEG0E1LCtEO0qzxXwhXrWaJdhbyueL94+UpiWyuxiFtL19q3dK39orrN6Kss7t10KiawFy3fVhm1Uk+01/pZK9rjxwrld2VfNzImvReyu2eN7K5uj4v5UKRXRXbG8dx+nmgPqLeifVB6ewY96Z4ivDNEe4gK99i1SqCvIX59/edy0n1FXMQ3SjBW5nvSM3DcvSb3cXVl+Ql5650fSM/AscrrDT7WFfHB6JtQwocjX4KPq6LerVj/oWwP5bqT7v/CeBgAAAC4ibH/fjUXiHYAgGzyBNFOSAnTatGu0lzluUr0LNGuK9iZ0Z4fS9faL6rbjH6CmDi3iPa0FesRuZ0hxusRfe5QoNckdvK1Ko2Jdp9B6b0zeWyraA9X5Udf256epdLbPxvp7Is8t/53ymp8XRE/M/d1TIySiY5zSRPj0e1OrP9dTaTf+E4GPvmB9FbE/MnB/+ZWy9dedyDq143MZJ4/AAAAQLHM/fuTFUQ7AEA2eYJoJ6SEaaVo98W6/3EaKt11H93X39YqLOLW0rX2LV1rv6huM/qhcI7L22aJdl9O5xTtsRulxkexpIt2X+w3LtqT42VSbtRqEe3aXVFb7R99TQmRnvbcDTCnaPfnpucQ7frf4TiaKG7Fe9r5AwAAABROnd9DmwSiHQAgmzxBtBNSwrRStOtq9sH9Q9XV6lGyZHp0Bby/rVVYxK2la+1butZ+Ud1m9J1QXr61JnxbuqI98pjr+dsjpGxv14r22Iib8NhNXdGeMjIm9pqiK9qjtHlFe+yxuUV7+N/+8wIAAADcnMz9+5MVRDsAQDZ5gmgnpIRppWj3mc+K9nCeu/94K7GIW0vX2rd0rf2ius3oO9FeFdbhiuqoaK8zF90dI02oR44dkfj+zPZg1XhUaJ+Svp5tMqYfO4kdWcldWd2etaLdf66QbNFeO3d/m/86g5ubpqwqb1C0Zz0ePnfqPPgmUFe0V2au+zPaax/XF+2BlP8hN0AFAACAEoFoBwAokjxBtBNSwhQt2qPz2ZnRng9L19ovqtuMfrhyPFwd3bNxqyyNruaOjm/pHpD+7hRJHBvxEhfS8REsyZXv8e11usu3ysbIc4fSP7qquybZM0awJKR68CZBuF/tDQT/8a3SE1ktn3ju8NycHNfV78nnrh7b3ezU78bPO5Dtke26Yj3xFwP5qS/adZ/whqeV0S/VG6GG2+qIdn3Myfa/iYyOCW+cmnwtAAAAAMVj//1qLhDtAADZ5AminZASpp2i/WbFIm4tXWvf0rX2i+o2o19W/BXtAAAAAAD5QLQDABRJniDaCSlhEO02cWvpWvuWrrVfVLcZ/bKCaAcAAAAAG4h2AIAiyRNEOyElDKLdJm4tXWvf0rX2i+o2o19WEO0AAAAAYAPRDgBQJHmCaCekhEG028StpWvtW7rWflHdZvQBAAAAABYmiHYAgCLJE0Q7ISUMot0mbi1da9/StfaL6jajDwAAAACwMEG0AwAUSZ4g2gkpYRDtNnFr6Vr7lq61X1QXAAAAAAAaBdEOAFAkeYJoJ6SEQbTbxK+la+1butZ+UV0AAAAAAGgURDsAQJHkCaKdkBIG0W4Tv5autW/pWvtFdQEAAAAAoFEQ7QAARZIniHZCShhEu038WrrWvqVr7RfVBQAAAACARkG0AwAUSZ4g2gkpYRDtNvFr6Vr7lq61X1Q3nVPSt6JTevpvyExiGwAAAAAABCDaAQCKJE8Q7YSUMO0U7UeOHpe9+z6XM+fOJ7Zdn56RL4aPyOD+Ibl4+UpieyuxiF9L19q3dK39orqp7F4ji1Zsk5Ozrf8/DgAAAAAA5aX1vy8j2gEAsskTRDshJUy7RLvK9QMHDzvSRPvYxKQT7bod0T4/LF1rv6huGrt7OqVnd3Q1u65w75JNY6xwBwAAAACogWgHACiSPEG0E1LCtEO0X712XfYPHZLTU2edTPdFu4r1zw4crMp4RPv8sHSt/aK6Cca3y7KO1dLvr2bXVe4dSxgnAwAAAABQBdEOAFAkeYJoJ6SEaYdo15ExSjgeJiraw8d0RbsKeUT7/LF0rf2iuj66mn3ZpkmZmU1uCyR8pyzdmLEdAAAAAGBBgWgHACiSPEG0E1LCtFq0qzRXea4SPU2063/rY7oN0Z4PS9faL6obZ1B6O+YaEaP7dMpt3QPIdgAAAABY4CDaAQCKJE8Q7YSUMK0U7b5Y9z/2xbr/cbuwiF9L19q3dK39orpRxvq6ZNGcAr0i2hevlI11hTwAAAAAwK0Ooh0AoEjyBNFOSAnTStGuwnxw/5Ds3fd5AhXuU2fPJR4P0VEz/vFahUX8WrrWvqVr7RfVraE3PO2sP4Od0TEAAAAAABEQ7QAARZIniHZCSphWinYff0W7Dyva82HpWvtFdavozU5XbJOT/k1QQyqSva6IBwAAAABYUGT87txEEO0AANnkCaKdkBIG0W4Tv5autW/pWvtFdUPq3gTVrXafa3Y7AAAAAMBCA9EOAFAkeYJoJ6SEaadov1mxiF9L19q3dK39oroOt1p9tfRnrWYHAAAAAIAUWv/7M6IdACCbPEG0E1LCINpt4tfStfYtXWu/qC4AAAAAADQKoh0AoEjyBNFOSAmDaLeJX0vX2rd0rf2iugAAAAAA0CiIdgCAIskTRDshJQyi3SZ+LV1r39K19ovqAgAAAABAoyDaAQCKJE8Q7YSUMIh2m/i1dK19S9faL6oLAAAAAACNgmgHACiSPEG0E1LCINpt4tfStfYtXWvf0gUAAAAAgCJAtAMAFEmeINoJKWEQ7TZpbOla+5autW/pAgAAAABAESDaAQCKJE8Q7YSUMIh2mzS2dK19S9fat3QBAAAAAKAIEO0AAEWSJ4h2QkoYRLtNGlu61r6la+1bugAAAAAAUASIdgCAIskTRDshJQyi3SaNLV1r39K19i3dRtjd0ynLNk3KzGxyWxbHd47IjzcMS9fQdzKTsh0AAAAAYGGBaAcAKJI8QbQTUsK0U7QfOXpc9u77XM6cO1997OLlKzK4f8g9HqL7+d1WYpHGlq61b+la+5Zubsa3y7KO1dI/q//HYEpWvZImzy/JujfjjyPaAQAAAACiINoBAIokTxDthJQw7RLtKtcPHDzs8EX7oZEv5fr0TKLTLizS2NK19i1da9/STaPeivWxvq7Ytg/eHpYfvz0Vl+cTY3LHhlF5P6XfXE5J34ou2TR2A3kPAAAAACUD0Q4AUCR5gmgnpIRph2i/eu267B86JKenzsoXw0cQ7U3qW7rWvqUbR8V1pyxavk1OpkryQent8MT20Kj82JPqbvV6Vb4Hq951NfuPNozI2onkivZwtfuPHOGxkqviA/R4I/LyeOXx3WtkUccS6elHtgMAAABAmUC0AwAUSZ4g2gkpYdoh2nUUjKIyHdHevL6la+1bujVUonfKbd0DqSvZFV3Nviix3R8fM4cg90W7J+qddO8bk2Oz38kHO4bljp2X0o8TinbFjbPplKUb01fhAwAAAADcfCDaAQCKJE8Q7YSUMK0W7SrSdVyMrmrPEu3RGe268l339Y/TSizS2NK19i1da9/SdYxvk2UdS2RpxriYgGC1e9rK8dj4mMyxMemiXWV6XMrX9lPpHoj2iLzX47+Sdvy53ygAAAAAALh5QLQDABRJniDaCSlhWinafbHuf5zG2MRk22W7RRpbuta+pWvtW7qKW6m+eA7RriNaVuhImZT/QxBZlR4fGxMlTbQHAr02NiakMmJGj/v2lExPjMmqt0elS6W7ivbKivf48SuiffFK2cjMdgAAAAC46Un5vbrJINoBALLJE0Q7ISVMK0W7v1o9igr3tHEx0RXw/rZWYZHGlq61b+la+5ZujforwuvdILU2PuaSvNznr1CP7pMu2tP3r6yO7xuT93eOBMd+e0yOh/I9+joYHQMAAAAApQPRDgBQJHmCaCekhGmlaPeZa0V7uF3nufvbWolFGlu61r6la+1bunEybobqRPZq6U9bzV7BjY/pG5F/Sh0bo6SJ9vBGqBmdimhf+/aofOBmto9I19sj8k/Rue0VyZ420gYAAAAA4OYl+3frZoFoBwDIJk8Q7YSUMEWLdh0VE13prh/7vVZjkcaWrrVv6Vr7lm4a/ur19JugerjxMcPyI39sTPh42miYyj6BbI9sr46GCVbKV1ewD43KTzYMy8rqCnh9Y6BLNjEqBgAAAABKB6IdAKBI8gTRTkgJ007RfrNikcaWrrVv6Vr7lu7c6EgZZDYAAAAAQHNBtAMAFEmeINoJKWEQ7TZpbOla+5autW/pAgAAAABAESDaAQCKJE8Q7YSUMIh2mzS2dK19S9fat3QBAAAAAKAIEO0AAEWSJ4h2QkoYRLtNGlu61r6la+1bugAAAAAAUASIdgCAIskTRDshJQyi3SaNLV1r39K19i1dAAAAAAAoAkQ7AECR5AminZASBtFuk8aWrrVv6Vr7li4AAAAAABQBoh0AoEjyBNFOSAmDaLdJY0vX2rd0rX1LFwAAAAAAigDRDgBQJHmCaCekhEG026SxpWvtW7rWvqULAAAAAABFgGgHACiSPEG0E1LCINpt0tjStfYtXWvf0gUAAAAAgCJAtAMAFEmeINoJKWEQ7TZpbOla+5autW/pAgAAAABAESDaAQCKJE/+gwo7AAAAAAAAAAAAAACokSesaCeEEEIIIYQQQgghhBBCDEG0E0IIIYQQQgghhBBCCCGGINoJIYQQQgghhBBCCCGEEEMQ7YQQQgghhBBCCCGEEEKIIYh2QgghhBBCCCGEEFK63PjuO7l0+YpMnD4rR0+My/CXo/DlqHw5OiZjk1Ny/uIlmZm94V82Ms8cHjkim7dtl6fWPCd/eOQx+f3Dj0j3k0/L65velMF9+2V6etqvkAUeRDshhBBCCCGEEEIIKVW+unBZRo6ddJL98tffyPTMjPy7v9MCzezsrHx99ZqcPvuVjBw7IVNnz7s3Jcj8ooL92RfXOrH+4B8ezuSJJ5+WvZ8OINxbkCtfX5XJqbNy7MSEHD56IvFmUiN8eTx4A+rCxSvyXYu+HxDthBBCCCGEEEIIIaQUmZ6ZlbHJ007CXZ+eRq7PEZXuU+fOy4nxU3L12rfy7//OFauXT3b1yyOPdyekej22bNsu165d8w9FGogK9tGxSTk5cUrOXbgk17697v4qY/bGdyb0GN9en5YLl7+WidNnnMA/f+Fy04U7op0QQgghhBBCCCGkJJmZmZH169fL008/7VizZo1cuHBhQQhUlezHxyblqwuX5Lvvbv3zbWYuXflGjp2ckG+Q7ZlpRLIj25uXc+cvOsl+8fLXTZHr9dC/+Dg5cVpOnzknN240b7wSop0QQgghhBBCCCFtz+XLl2VgYEA++uij2OiFS5cuucf2798v3377baxDRM6dOycvvfRSVbQrJ06caPrKzJsx45NTbmQMkr2xqGxXuTjL3PZEdFzM4z29CYGeh9179jJGpsGoZB8/NeVWnftSvBHGL87Kwx9dlR+tuSzfX3VB/uMDF+Rvuy/L0m3fyOenZuTbmWCV+6mps02V7Yh2QgghhBBCCCGEtDUqhd944w159dVXnWzXVdphvvnmG9mzZ4+8+OKL8uGHHy54cXX+/Hk5dOiQfP31124MyN69e+W5556LifYPPvjAraa9fv26DA8Py9TU1C0n3lWwn3JC7NY6r3bnzFfn5exXF5nZ7mXthlfmnMk+Fzqz/fLlK/6hyRzRcTEnx0/JtW+bI9k3DU3L//3IRfnff3tB/rcU/o8HLsjDH34rF67ecLI9uHFwc8bIFCLa9V0C07vS383K5YvXpPbPcJCZK1fkqv8gIYQQQgghhBBS4qhcvXjpspy/cNFx9dq1lo5++Pb6dXn51Y2yd/AzmZmd9Tc3JVevXnWrsg8ePJi5klDl8V/+8hebP0jJzMysXLh4qXo9lctX0m+Op9f994/1yIEvDsnsjRvy4Se75I03N7s3A9oR/Txv3bpVVq9e7UbErF27Vp555pmYZA/R6/nss8+6/37ttdfcNbZEn/vK11/HrpNy/fp0S7/+0qJS+MvRMTevub3PfOtFf57otfy2CW9g6ffSxcr30sVLl9yxm5GDh0fkpQ2vy9mvvmrL11q91ewvvrxO9u3/3P0sOHfuK+l56pnEPlFatapdr8PX33wjFy4G34eXLl/J/Nlpif78f2Xjn2X3p4PuHgjtiP6VxcXLV5oyLkYl+39++GJCrqfxx4ps1zEyo2On3NezNW0X7fpFsG3bNtm8ebO/af459ZYs//m90r0nOvvojPz5gWXSPRh5iBBCCCGEEEIIKXmOnzgpv/rNKlm6/Ldy932/k1/88j757YMPy9j4RKocniuvbfqLDOzbX5ViYxOT8sL61+TCpUtO5qhoWfPSOtm159OmiIe06Ap2FcOfffZZppx7++235a233nKrtJuZfZ8PuWsZXk/l0d5nnLzypZ4v2t/74GP3JsTXXwei/fW+zfLp4P6WXaeRkRF5/vnnE1J9Puzbty/2lwJ5o18HTzz9rHQu/40sq1wnJfi6aPy4jeTSla/l9Nmvmr6aXc+x++nn5F+W3CMdP1/meOzJ1dXPb5j+vQNyz2+63NdO2tervvn1/Msb3HX6+S/vk77NWzPndR84OCz3r/yD/OKe+9338eiJsYa+jy3RVe3nL+qce9vz7j/whfzyvgfc99KSX/1afv7LFfLqpj/LlStfJ76X8kS/35554WU5c+6c6TjzzdvvvCcPP/p4QporG157XT4d3Cenp87I2bPn5hTtr76xSb75xvYmV1r0a7V3zQuydMVvZdmK30rnr37tvobe/3iXe/OrWdHneXH9a/Jx/56m/+xNi65m15uTfjs9k5DmedFxMX/7xKXMlew+urL9o2PTboyMjpC50IRV7W0V7fpit2/f7v7866uvvvI3zz8q2n/7oCy/Z70MVc8f0U4IIYQQQggh5NaLivZVf3pcxidPudnUKvpeXP+qPPXsi3L1arrMq5cX170qn+zeW5Wlevye1c/LV22+oaaOjenv78+Utm+++WZLRseoLP3TE0/Jua/Oz3m+vmj389L61+ST/j0ynXEO1vT19aWuYNcFjMeOHZOTJ0/K+++/X13JHuXll182rWoPRftHO/tlero15zffnDrzlZsvPtfnK2+uffutPP38S8HnN0Wga6bOnpM/PtbrPJSK5bT9Nr+1Q555fq1b1T115qz84fFe+eLQ4cQsdF2h/YfHemTw8wPua+bP296W519+Ra54Yj+MHmvPwD7ZuXtvlcHPPnefV8u1+ObqNZmcOmteEa3X45GeZ2Tq7Fn3evRaPfRIt7zWt9m9+VCWrF0/99iYA18cdJ+PuUR7q8bHhKL9AyfWAwH+6b798sAfHpWjx0+UdhSQvoH21cXL7kbHvjjPy2M7r8r/9fv5rWYP+dfNX8uZKzfk4pVvZOL02cT3bN60TbTrN6++E/3CCy+4G3eYoqL9gS3yzsv3y/ItZyoPJkX7uT0vya/vuVc6fn6vLHu4T/ZlfZ1/c1T+3P07uevflsld9/xR1n4R/jA4I+883iPvHPtMnl5xr3Q89J6ckyFZu+J12Tfxlqy8e5nc9cKQ2zP7udKOcU2G1v/RPV9H5+9k5frPxHhFCCGEEEIIIYTcovFFu2bf5wfk4SeelK/OX5C/fviJbHnrHXlh3aty9/0PuLEL5y9ckNUvrJOfL1suS5f/Rj7p3+vGDqx5MXjsF/fcJyseeMj17vn1Srmr8163KvXZl9Y7ubzmpfVudIxKRRVoez7d5/bX/R5/cnVVUqtMXPfaJvnz1rek81fB88xn3IwuxNPxJh9//HGmaN+4caP89a9/batod+c6sE9+9btV8q93L5fe1c/LfSt/L59/cdCJdl09uvaVN9zqf71WP797RfVaHhwecQLs7fc+kF/eH1zT3tUvyJmzwapcHU+jnZ27P5X7V/5enpzHGyUXLlyQTZs2xWT7jh07EitNd+3aFZPt69evl4mJxv7iIUyWaNdj/mX727L+9U3yzdWrzve88eYW+cu2t+XS5cvy8msb5b0PP3ZvUNy19FfywB8ekRMnx6uvRVcGP9a72m27+74H5ONde+YcUTE6PinXrjc2NkY/d3rdo3+x8Na7f3V/jTB5esr9NcOXx46nSmf9+lcRruf2xFPPpgp5lfU9zzzvVr2Hb7jo90Tf5m1y7Vp87JFKcr2m+n2rr+Xk+IT88fEn3f+mfa7On78gD/7pcfnpv/2yuuL+6efXJlbc542ew+jYZOJc8sYX7ZqhQ4fl9490y9j4pDsn/Zp4fu0G95c4+rPow539bhyUfs289d777vppVMzr50mv0edDB2X1Cy9XR8fo9+rTz62Vf122XP7t3vtlx18/cF+fwbFfqR37k373taSdD3fuct+H+tcK3U8/K5OTp1OvsebpNc8lhLnPfEW7Cnt9w6XZSRPt+rP6T91Pu59p+jWl/wboSnT9SwndV8fLqIz/zao/up9Hj/Y8477/9Pvx6edein3d6b8p+rWu3xMvrH/VfT2H1zLtGO5z8vxLMjzypfs6Onf+gjy55gX3/aZ/4fP1N1fd8Q4NH6n7daZjY77+5lpTxsb8f+u/lv9zZVKm1+P/6b4so+dn5fr0jJwYt4+PaYto10+a/smX/rnT2bNn/c3540T7W3L6m53ySOej8s55fTAu2q9+9pL84p6n5YMzeoFm5dhf/igdv+6TY4nvqTPy56575dd/ORHMfL+yV7rveVo+cf/W6THvlV888Jw7TnCxP5Pun98vv3i8T4au6GNzPVfKMT57SToe2CJjuv27KzJ0aNJ/UYQQQgghhBBCiIsv2lV8qMRTUaKidtuO9+Te36ySrTvedXJD5aeOw3i97y9ufIVKEZWJx06ccNL3j088JW+/976cPfeVG3GgYkZXoeqqSBV4Kr50fMbHu3Y7CT64f0hW/vFR+fL4qBMmm7fvcOMhvv32uhM8KrM2vN7npE+arPSj42J09rquuJ6cDGRcWnR+u46X0b+M//LLL+d17PlEX/PvHvqTvP3u+241us4i1rnHel337R9y0nzgs8+d4NcRO/qxij8V7dvfec9dd33TQkXTn7qfkrfefd9dV71WKtlVMKvIUjGmUl7FqgpBnQvf9cfH3YrmE2PjlVnn/qtL5tKlS+46hBJ9bCw5akRvmBrdp951nW9C0a5jJFSO6mrqQyOBNFNp/fATT7mxOfpmi8ri8clJJ0u1o28C6TXQmeo6akdFtF4D7enq8C1vv+u+No8cPe6k4N4BHXOTLbiOjo7P6w2ctKis1ec8qCvMb9xwr7HnmeecPNTvAf0c6l+IrH5xnbz7wcduLn0ojVU2PvXsS3L8xJhbpb5/KLmiXb/uH378yZiE168tXeHuC3F9XN/sCh/X7h+feDL1uGG0oyJZJbtK5qGDw+ZVtxrLNQ2TJtov6Of48SflswND7vtE//JGf17oOauo1q8PfWNDr+0TT6+pynT9+aM/dyZPnXbfoyp0dX8VyH94rFc2vL7JrRTXj/Vnmv6c089N7NjPPCtHjh13PzP161O/vvTr6tjoCfdzzX9jLUxZRfuRo8fk94/2uPPT7y39b/35ox/rz5fPDnwhDz7yhJPh+vNp2zvvueulX/f6V0zuTa7r0+5n69oNr7s3MPRNRBXm+jz6nPsPHJQHH+mWQ5Vj6M9APcaFC5dkzYvrY/vd3/UH6duy3X2P6efhsadWy/iE/ruV/bPo2IkJuXrtekKaN8L/2zv/sTEhOj7myNlZJ/qPnhg3/3VSU0W7/rDXP1+K/nDQL2J9t7Vpkl0TinZ9J3TLg3LX6s/kaky0X5MPupdFVrtrTsiGFcvk6c8iD2mO9cmyFX1yLPLQ3tXhcYJjPhJY90pUtP9ONlQLcz1XyjEOrZe7VMxP2H6gEUIIIYQQQgi59aPSSFdVP/7UGje3WMXk8t896GSVCgwV7d3PPOsEoebwl0fl4e6nqiupNeG4GN0nKtE1KrVUSoWrbFWahPuoTF/94svy7gcfVVc1B6NmXnCjZgb3H5AH//SEE1BZEsuPrlJXKayyXcfKZvXUMehqbl2dXW+We97o+er1637mOXc9ddXlybFxdz1UgurNTvW8Nf7omFC0q+TT66Sfk4927XZyRt+00Ouoq2pDWaOfA70+Q4eGnZjX/1bBm+dcihbt+ibMU8+95K7V9nffd49r9g585gSzStUPd+52Xx9pq+D160Vl38mxCdm551N3jVT0hZ/3N7dsd8fWN4myYpHC+jwvv/KGbN72tltJffTYqHvj6dTpM3L5ytfuTauDw4ednHz0yWfcinEVuvo1rZ/fY8dPuO8NPc80Ia5fI3rOen7hNa8n2vX5wrEq8xHt0VXtzVjNHsZyTcOkiXb3xsMTTznRrn9do9da5Xn41zgvv/qG+9mi1/eRnqfli0P6xsGs++sa91cS31x11yMU7f2fDrhV2/7PGJXM+vmKHnvdq2+470ede69ft+Hq+blSptEx4fejXtfO5b+VrW+/495EcF9Lj/e6Nw71e0/l+QvrXpG3//pB9a8G9A0+/cuA02fOujdbdQW8vlZ9s0N/5o98edT9bAtFu76Rq/vUO4a+EaffR3/e+rZs+ss295cI+maLSvy1r7zuttULor1O9E+a9Af7li1b3DeJ/oB55513nGQ/cyYqoo2JiHb5blievUfF92REtCfHyISP/Xqb9zoGn5OOf7tXfrHid7IswtoDtU78OCraH5Q/nwo/Ttsn+lxp22fl9K6X5Nd33yt3dT0n276s/6dihBBCCCGEEEIWblRU/vbBP8mWt951K7BHT47HpJyKdre6vSLvdATA0l/9JnazT2X33gG58s03uUR7IObXuBtiRo/1aO9qOX/xohPt2j13PjmGpV50tfiGDRtk586dmaNjdD65rmb3x6RYkzU6JirOw9eUR7SH+7oxM5UVx/qYjk7RvxpQuexvnys34+iYMPr1prJP3zz46qva147fGT05Jg/8/lG38l1l6jPPB38REEbHuLivoZRRPmEso2M0ugq8+5nn3de4jr3RFblpM8QnJifloUe75fCRI+5NF12N/cHH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" alt="Tela do Snack Expo" />
          </div>
        </div>`;
    }

    function showStep(id) {
      const activeModule = modules[currentModuleKey];
      const step = activeModule.steps.find(s => s.id === id);
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      const activeBtn = document.getElementById(`btn-${currentModuleKey}-${id}`);
      if (activeBtn) activeBtn.classList.add('active');
      document.getElementById('stepTitle').textContent = step.title;
      document.getElementById('objective').innerHTML = `<strong>Objetivo:</strong> ${step.objective}`;
      const resultTitle = document.querySelector('#resultCard .panel-title');
      if (resultTitle) {
        resultTitle.textContent = (currentModuleKey === 'interfaceBasica' && id === 0)
          ? 'Tela do snack.expo.dev'
          : 'Resultado visual';
      }

      const workspace = document.getElementById('workspace');
      let intro = document.getElementById('introView');
      if (intro) intro.remove();
      document.querySelectorAll('.flex-lab-after-preview-card, .flex-lab-final-card').forEach(el => el.remove());
      workspace.classList.remove('flex-lab-separated');

      const resultCard = document.getElementById('resultCard');
      resultCard.classList.toggle('snack-result-mode', currentModuleKey === 'interfaceBasica' && id === 0);


      if (step.exercisePage) {
        resultCard.classList.remove('snack-result-mode');
        resultCard.classList.add('flex-result-mode');
        document.getElementById('codeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('newCodeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('resultCard').style.setProperty('display', 'none', 'important');
        document.getElementById('noteWrap').style.setProperty('display', 'none', 'important');
        document.getElementById('preview').innerHTML = '';

        intro = document.createElement('section');
        intro.id = 'introView';
        intro.className = 'intro-view';
        intro.style.gridColumn = '1 / -1';
        intro.style.gridRow = '1 / 3';
        intro.innerHTML = step.html;
        workspace.appendChild(intro);

        window.showExerciseInterface = function(n){
          const root = intro.querySelector('.exercise-clean');
          if(!root) return;

          root.querySelectorAll('.exercise-clean-section').forEach(s => s.classList.remove('active'));
          root.querySelectorAll('.thumb-card').forEach(b => b.classList.remove('active'));

          const section = root.querySelector('#exercise-clean-' + n);
          const btn = root.querySelectorAll('.thumb-card')[n - 1];

          if(section) section.classList.add('active');
          if(btn) btn.classList.add('active');

          intro.scrollTo({top:0, behavior:'smooth'});
        };

        return;
      }


      if (step.customPage) {
        resultCard.classList.remove('snack-result-mode');
        document.getElementById('codeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('newCodeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('resultCard').style.setProperty('display', 'none', 'important');
        document.getElementById('noteWrap').style.setProperty('display', 'none', 'important');
        document.getElementById('preview').innerHTML = '';

        intro = document.createElement('section');
        intro.id = 'introView';
        intro.className = 'intro-view';
        intro.style.gridColumn = '1 / -1';
        intro.style.gridRow = '1 / 3';
        intro.innerHTML = step.html;
        workspace.appendChild(intro);
        return;
      }


      if (step.modulePage) {
        resultCard.classList.remove('snack-result-mode');
        document.getElementById('codeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('newCodeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('resultCard').style.setProperty('display', 'none', 'important');
        document.getElementById('noteWrap').style.setProperty('display', 'none', 'important');
        document.getElementById('preview').innerHTML = '';

        intro = document.createElement('section');
        intro.id = 'introView';
        intro.className = 'intro-view';
        intro.style.gridColumn = '1 / -1';
        intro.style.gridRow = '1 / 3';

        const cards = step.boxes.map(item => `
          <div class="module-page-box">
            <strong>${item[0]}</strong>
            <span>${item[1]}</span>
          </div>
        `).join('');

        intro.innerHTML = `
          <div class="intro-kicker">${step.kicker}</div>
          <h3>${step.title}</h3>
          <p class="intro-lead">${step.lead}</p>

          <div class="intro-highlight">
            ${step.highlight
              ? step.highlight
              : step.id === 'flex-intro'
                ? 'Neste módulo, cada exemplo mostra uma mudança visual concreta: primeiro você observa o problema no Antes, depois compara o código e o resultado do Depois. A ideia é aprender Flexbox olhando a tela, entendendo o código e percebendo como pequenas propriedades reorganizam a interface.'
                : 'Use estes desafios para praticar os mesmos conceitos do módulo em situações novas. Observe o resultado esperado, divida a tela em blocos, escolha as propriedades Flexbox adequadas e só depois monte o código no App.js.'}
          </div>

          <div class="module-page-grid">
            ${cards}
          </div>

          ${step.snackGuide ? `
            ${snackIntroPreview()}
            <div class="obs"><strong>Observação:</strong> ${step.note}</div>
          ` : ''}
        `;

        workspace.appendChild(intro);
        return;
      }


      if (currentModuleKey === 'interfaceBasica' && id === 11) {
        resultCard.classList.remove('snack-result-mode');
        document.getElementById('codeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('newCodeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('resultCard').style.setProperty('display', 'none', 'important');
        document.getElementById('noteWrap').style.setProperty('display', 'none', 'important');
        document.getElementById('preview').innerHTML = '';

        intro = document.createElement('section');
        intro.id = 'introView';
        intro.className = 'intro-view';
        intro.style.gridColumn = '1 / -1';
        intro.style.gridRow = '1 / 3';
        intro.innerHTML = `
          <div class="intro-kicker">Mapa estrutural do app final</div>
          <h3>Glossário Estrutural — App Agenda de Contatos</h3>
          <p class="intro-lead">Esta seção usa o aplicativo final como referência. Em vez de listar termos soltos, ela organiza os conceitos conforme as partes reais do app: estrutura geral, tela, cartão, título, corpo, imagem, dados, campos, botões e estilos.</p>

          <div class="intro-highlight">
            A ideia principal é simples: o app é montado por blocos. Primeiro vem a tela inteira; dentro dela fica o cartão; dentro do cartão ficam título, corpo, foto, dados e botões. O JSX monta as peças. O StyleSheet dá aparência e organização visual a cada peça.
          </div>

          
          <h4 class="intro-section-title">Mapa visual da estrutura final</h4>
          <div class="structure-final">
            <div class="structure-box">viewTela</div>
            <div class="structure-box">viewCartao</div>
            <div class="structure-box">viewTitulo</div>
            <div class="structure-box">viewCorpo</div>
            <div class="structure-row">
              <div class="structure-box structure-photo">viewFoto</div>
              <div class="structure-box structure-data">viewDados</div>
            </div>
            <div class="structure-box structure-buttons">viewBotoesOperacao</div>
            <div class="structure-box structure-confirm">viewBotoesConfirmacao</div>
          </div>

          <h4 class="intro-section-title">1. Estrutura principal do arquivo</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>import React from 'react'</strong><span>Carrega o React, base usada para criar componentes e montar a interface.</span></div>
            <div class="intro-step-card"><strong>import { ... } from 'react-native'</strong><span>Traz os componentes usados no app: View, Text, Image, TextInput e TouchableOpacity.</span></div>
            <div class="intro-step-card"><strong>export default function App()</strong><span>Define o componente principal. É a função que representa a tela exibida.</span></div>
            <div class="intro-step-card"><strong>return</strong><span>Indica o que será devolvido pela função e mostrado na tela.</span></div>
            <div class="intro-step-card"><strong>JSX</strong><span>Forma de escrever a estrutura visual dentro do JavaScript, com aparência parecida com HTML.</span></div>
            <div class="intro-step-card"><strong>StyleSheet.create</strong><span>Cria o conjunto de estilos que define aparência, tamanho, espaçamento e alinhamento.</span></div>
          </div>

          <h4 class="intro-section-title">2. Tela inteira e cartão principal</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>viewTela</strong><span>É a View principal. Representa a tela inteira do aplicativo.</span></div>
            <div class="intro-step-card"><strong>flex: 1</strong><span>Faz a tela ocupar todo o espaço disponível.</span></div>
            <div class="intro-step-card"><strong>backgroundColor</strong><span>Define a cor de fundo da tela ou de uma área.</span></div>
            <div class="intro-step-card"><strong>justifyContent</strong><span>Controla a distribuição dos elementos no eixo principal.</span></div>
            <div class="intro-step-card"><strong>alignItems</strong><span>Controla o alinhamento dos elementos no eixo transversal.</span></div>
            <div class="intro-step-card"><strong>padding</strong><span>Cria espaço interno para o conteúdo não encostar nas bordas.</span></div>
            <div class="intro-step-card"><strong>viewCartao</strong><span>É o cartão principal. Agrupa visualmente todo o app dentro de uma área branca.</span></div>
            <div class="intro-step-card"><strong>width / maxWidth / height</strong><span>Controlam largura, limite máximo de largura e altura do cartão.</span></div>
            <div class="intro-step-card"><strong>borderRadius</strong><span>Arredonda os cantos do cartão.</span></div>
            <div class="intro-step-card"><strong>borderWidth / borderColor</strong><span>Definem espessura e cor da borda.</span></div>
            <div class="intro-step-card"><strong>overflow: 'hidden'</strong><span>Impede que o conteúdo interno ultrapasse os cantos arredondados.</span></div>
          </div>

          <h4 class="intro-section-title">3. Barra de título</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>viewTitulo</strong><span>Caixa superior azul onde fica o nome do aplicativo.</span></div>
            <div class="intro-step-card"><strong>borderBottomWidth / borderBottomColor</strong><span>Criam a linha inferior da barra de título.</span></div>
            <div class="intro-step-card"><strong>&lt;Text&gt;</strong><span>Componente usado para exibir textos na interface.</span></div>
            <div class="intro-step-card"><strong>textoTitulo</strong><span>Estilo aplicado ao texto “Agenda de Contatos”.</span></div>
            <div class="intro-step-card"><strong>color / fontSize / fontWeight</strong><span>Definem cor, tamanho e peso visual do texto.</span></div>
          </div>

          <h4 class="intro-section-title">4. Corpo do aplicativo</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>viewCorpo</strong><span>Área interna do cartão. Agrupa foto, dados e botões.</span></div>
            <div class="intro-step-card"><strong>viewFotoDados</strong><span>Caixa que coloca a foto e os dados lado a lado.</span></div>
            <div class="intro-step-card"><strong>flexDirection: 'row'</strong><span>Organiza os elementos em linha, da esquerda para a direita.</span></div>
            <div class="intro-step-card"><strong>Linha visual</strong><span>Grupo horizontal formado pela foto e pelos campos de dados.</span></div>
            <div class="intro-step-card"><strong>Coluna visual</strong><span>Organização vertical usada nos rótulos e campos.</span></div>
            <div class="intro-step-card"><strong>Caixas dentro de caixas</strong><span>Ideia central: cada área do app fica dentro de outra área maior.</span></div>
          </div>

          <h4 class="intro-section-title">5. Área da imagem</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>viewFoto</strong><span>Caixa reservada para exibir a imagem do contato.</span></div>
            <div class="intro-step-card"><strong>&lt;Image /&gt;</strong><span>Componente usado para mostrar uma imagem na tela.</span></div>
            <div class="intro-step-card"><strong>source</strong><span>Propriedade que informa de onde a imagem será carregada.</span></div>
            <div class="intro-step-card"><strong>uri</strong><span>Endereço online da imagem.</span></div>
            <div class="intro-step-card"><strong>fotoAvatar</strong><span>Estilo aplicado à imagem do contato.</span></div>
            <div class="intro-step-card"><strong>resizeMode: 'contain'</strong><span>Faz a imagem caber no espaço sem cortar.</span></div>
          </div>

          <h4 class="intro-section-title">6. Área dos dados e campos</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>viewDados</strong><span>Caixa que agrupa os rótulos e campos de Nome, Telefone e E-mail.</span></div>
            <div class="intro-step-card"><strong>label</strong><span>Estilo dos textos que identificam cada campo.</span></div>
            <div class="intro-step-card"><strong>&lt;TextInput&gt;</strong><span>Componente usado para criar campos de digitação.</span></div>
            <div class="intro-step-card"><strong>input</strong><span>Estilo aplicado aos campos de entrada.</span></div>
            <div class="intro-step-card"><strong>keyboardType</strong><span>Define o tipo de teclado exibido, como telefone ou e-mail.</span></div>
            <div class="intro-step-card"><strong>autoCapitalize="none"</strong><span>Impede capitalização automática, útil para e-mail.</span></div>
            <div class="intro-step-card"><strong>paddingHorizontal</strong><span>Cria espaço interno nas laterais do campo.</span></div>
            <div class="intro-step-card"><strong>marginLeft / marginTop / marginBottom</strong><span>Criam espaçamentos externos entre áreas e elementos.</span></div>
          </div>

          <h4 class="intro-section-title">7. Área dos botões</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>viewBotoesOperacao</strong><span>Área dos botões Novo, Editar e Excluir.</span></div>
            <div class="intro-step-card"><strong>viewBotoesConfirmacao</strong><span>Área dos botões Salvar e Cancelar.</span></div>
            <div class="intro-step-card"><strong>&lt;TouchableOpacity&gt;</strong><span>Componente usado para criar uma área clicável com aparência de botão.</span></div>
            <div class="intro-step-card"><strong>btnCinza / btnVerde / btnVermelho</strong><span>Estilos visuais dos botões conforme sua função.</span></div>
            <div class="intro-step-card"><strong>textoBtn</strong><span>Estilo do texto dentro dos botões.</span></div>
            <div class="intro-step-card"><strong>marginHorizontal</strong><span>Cria distância lateral entre os botões.</span></div>
            <div class="intro-step-card"><strong>justifyContent: 'space-between'</strong><span>Distribui os botões com espaço entre eles.</span></div>
            <div class="intro-step-card"><strong>alignItems: 'center'</strong><span>Centraliza os botões verticalmente dentro da área.</span></div>
          </div>

          <h4 class="intro-section-title">8. Como ler o app completo</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>1. Tela</strong><span>Comece pela viewTela: ela é o fundo geral.</span></div>
            <div class="intro-step-card"><strong>2. Cartão</strong><span>Depois veja a viewCartao: ela concentra todo o app visível.</span></div>
            <div class="intro-step-card"><strong>3. Título</strong><span>A viewTitulo cria a barra superior.</span></div>
            <div class="intro-step-card"><strong>4. Corpo</strong><span>A viewCorpo organiza tudo que fica abaixo do título.</span></div>
            <div class="intro-step-card"><strong>5. Foto + dados</strong><span>A viewFotoDados forma a linha principal do formulário.</span></div>
            <div class="intro-step-card"><strong>6. Botões</strong><span>As Views de botões criam as ações inferiores.</span></div>
          </div>

          <div class="intro-highlight">
            Resumo mental: <b>o JSX monta as peças</b> e o <b>StyleSheet dá forma visual a cada peça</b>. Quando o aluno entende qual parte do app cada bloco representa, o código deixa de parecer comandos soltos e passa a ser uma estrutura organizada.
          </div>
        `;
        workspace.appendChild(intro);
        return;
      }

      if (id === 0) {
        document.getElementById('codeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('newCodeCard').style.setProperty('display', 'none', 'important');
        document.getElementById('resultCard').style.setProperty('display', 'flex', 'important');
        document.getElementById('noteWrap').style.setProperty('display', 'grid', 'important');

        intro = document.createElement('section');
        intro.id = 'introView';
        intro.className = 'intro-view';
        intro.innerHTML = `
          <div class="intro-kicker">Fundamentos de interface em React Native</div>
          <h3>Como o React Native constrói uma interface</h3>
          <p class="intro-lead">Antes de escrever muitos comandos, o aluno precisa entender uma ideia central: a interface de um aplicativo é formada por componentes organizados dentro de outros componentes.</p>

          <div class="intro-highlight">
            No React Native, a tela funciona como um conjunto de caixas agrupadas. Cada parte visual normalmente fica dentro de uma <b>View</b>. Essas caixas podem ficar uma dentro da outra, lado a lado ou empilhadas verticalmente. Programar interface é aprender a organizar essas caixas com clareza.
          </div>

          <h4 class="intro-section-title">1. A ideia principal: caixas dentro de caixas</h4>
          <div class="intro-two-cols">
            <div class="intro-step-card">
              <strong>Como pensar a tela</strong>
              <span>Primeiro observe o aplicativo como blocos: fundo, cartão, título, área da foto, área dos dados e área dos botões.</span>
            </div>
            <div class="intro-step-card">
              <strong>Como o código representa isso</strong>
              <span>Cada bloco visual é montado com componentes. A <b>View</b> é o container principal para agrupar outros componentes.</span>
            </div>
          </div>

          <div style="margin-top:14px;padding:14px;border:1px solid #dbe3ef;border-radius:12px;background:#f8fbff;">
            <div style="border:2px solid #93c5fd;border-radius:10px;padding:10px;background:white;font-size:13px;font-weight:800;color:#0f3f86;">
              viewTela
              <div style="margin-top:10px;border:2px solid #bfdbfe;border-radius:10px;padding:10px;background:#eff6ff;">
                viewCartao
                <div style="margin-top:10px;border:2px solid #60a5fa;border-radius:10px;padding:10px;background:white;">
                  viewTitulo
                </div>
                <div style="margin-top:10px;border:2px solid #60a5fa;border-radius:10px;padding:10px;background:white;">
                  viewCorpo
                  <div style="margin-top:10px;display:flex;gap:10px;">
                    <div style="flex:1;border:2px solid #f59e0b;border-radius:10px;padding:10px;background:#fff7ed;">viewFoto</div>
                    <div style="flex:1;border:2px solid #f472b6;border-radius:10px;padding:10px;background:#fdf2f8;">viewDados</div>
                  </div>
                  <div style="margin-top:10px;border:2px solid #22c55e;border-radius:10px;padding:10px;background:#f0fdf4;">viewBotoesOperacao</div>
                </div>
              </div>
            </div>
          </div>

          <h4 class="intro-section-title">2. Componentes mais usados nesta aula</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>View</strong><span>É o principal container. Serve para organizar e agrupar outros componentes.</span></div>
            <div class="intro-step-card"><strong>Text</strong><span>Exibe textos na tela, como títulos, rótulos e informações.</span></div>
            <div class="intro-step-card"><strong>TextInput</strong><span>Cria campos para digitação de dados.</span></div>
            <div class="intro-step-card"><strong>Image</strong><span>Mostra imagens dentro da interface.</span></div>
            <div class="intro-step-card"><strong>TouchableOpacity</strong><span>Representa ações do aplicativo, quando usado em etapas futuras.</span></div>
            <div class="intro-step-card"><strong>StyleSheet</strong><span>Organiza a aparência visual: cores, tamanhos, margens, bordas e alinhamentos.</span></div>
          </div>

          <h4 class="intro-section-title">3. Estrutura e estilo trabalham juntos</h4>
          <div class="intro-two-cols">
            <div class="intro-step-card">
              <strong>Componentes</strong>
              <span>Dizem o que existe na tela: View, Text, TextInput, Image e outros elementos.</span>
            </div>
            <div class="intro-step-card">
              <strong>Estilos</strong>
              <span>Dizem como esses elementos aparecem: cor, tamanho, posição, espaçamento, borda e alinhamento.</span>
            </div>
          </div>

          <div class="intro-highlight">
            Exemplo: uma <b>View</b> cria uma caixa. O <b>style</b> dessa View define se ela será grande, pequena, azul, arredondada, centralizada, em linha ou em coluna.
          </div>

          <h4 class="intro-section-title">4. Como o código vira interface</h4>
          <div class="intro-steps-grid">
            <div class="intro-step-card"><strong>1. Criar a estrutura</strong><span>Montamos os componentes na ordem correta.</span></div>
            <div class="intro-step-card"><strong>2. Agrupar os blocos</strong><span>Colocamos componentes dentro de Views para formar áreas visuais.</span></div>
            <div class="intro-step-card"><strong>3. Aplicar estilos</strong><span>Usamos StyleSheet para definir aparência e organização.</span></div>
            <div class="intro-step-card"><strong>4. Observar o resultado</strong><span>O preview mostra como o código aparece na tela do aplicativo.</span></div>
            <div class="intro-step-card"><strong>5. Ajustar aos poucos</strong><span>Melhoramos alinhamento, tamanho, espaçamento e hierarquia visual.</span></div>
            <div class="intro-step-card"><strong>6. Consolidar</strong><span>Ao final, o aluno entende a tela como blocos organizados.</span></div>
          </div>

          <h4 class="intro-section-title">5. Onde o Snack Expo entra</h4>
          <div class="intro-highlight">
            O <b>Snack Expo</b> permite escrever, testar e visualizar o app React Native direto no navegador. O arquivo principal é o <b>App.js</b>.
          </div>`;
        workspace.appendChild(intro);
        document.getElementById('preview').innerHTML = snackIntroPreview();
        document.getElementById('note').innerHTML = `<strong>Observação:</strong> Nesta introdução, o foco é entender a lógica estrutural das interfaces: componentes, containers, estilos e caixas dentro de caixas.`;
        return;
      }


      if (step.flexLab) {
        resultCard.classList.remove('snack-result-mode');
        resultCard.classList.add('flex-result-mode');
        workspace.classList.add('flex-lab-separated');

        ['codeCard', 'resultCard', 'newCodeCard'].forEach(x => document.getElementById(x).style.setProperty('display', 'flex', 'important'));
        document.getElementById('noteWrap').style.setProperty('display', 'none', 'important');

        const codeTitle = document.querySelector('#codeCard .panel-title span');
        const resultTitleFlex = document.querySelector('#resultCard .panel-title');
        const newTitle = document.querySelector('#newCodeCard .panel-title span');
        if (codeTitle) codeTitle.textContent = 'Comandos — Antes';
        if (resultTitleFlex) resultTitleFlex.textContent = 'Resultado — Antes';
        if (newTitle) newTitle.textContent = 'Comandos — Depois';

        let afterCard = document.getElementById('flexAfterPreviewCard');
        if (!afterCard) {
          afterCard = document.createElement('section');
          afterCard.id = 'flexAfterPreviewCard';
          afterCard.className = 'result-card card flex-lab-after-preview-card';
          afterCard.innerHTML = `<div class="panel-title">Resultado — Depois</div><div class="preview-area"><div class="device"><div class="screen" id="flexAfterPreview"></div></div></div>`;
          workspace.appendChild(afterCard);
        }

        let labCard = document.getElementById('flexLabFinalCard');
        if (!labCard) {
          labCard = document.createElement('section');
          labCard.id = 'flexLabFinalCard';
          labCard.className = 'flex-lab-final-card';
          workspace.appendChild(labCard);
        }

        const fullCode = document.getElementById('fullCode');
        const newCode = document.getElementById('newCode');
        const preview = document.getElementById('preview');
        const afterPreview = document.getElementById('flexAfterPreview');

        function splitFlexPreview(html) {
          const temp = document.createElement('div');
          temp.innerHTML = html;
          const windows = temp.querySelectorAll('.fx-window');
          const before = windows[0] ? windows[0].outerHTML : html;
          const after = windows[1] ? windows[1].outerHTML : html;
          return { before, after };
        }

        function makeSingleFlexPreview(windowHtml) {
          return `<div class="flex-single-result">${windowHtml}</div>`;
        }

        function makeBeforeCode(choice) {
          if (choice.beforeCode) return choice.beforeCode;
          const solution = choice.code || '';
          const lines = solution.split('\n');
          const filtered = lines.filter(line => {
            const t = line.trim();
            return !(
              t.startsWith('flexDirection:') ||
              t.startsWith('alignItems:') ||
              t.startsWith('justifyContent:') ||
              t.startsWith('alignSelf:') ||
              t.startsWith('flexWrap:') ||
              t.startsWith('flex: 1') ||
              t.startsWith('width:') ||
              t.startsWith('maxWidth:')
            );
          });
          return filtered.join('\n').replace(/,\n\s*}/g, '\n  }');
        }

        function renderFlexChoice(choiceIndex) {
          const choice = step.choices[choiceIndex];
          const parts = splitFlexPreview(choice.preview);

          fullCode.style.fontFamily = 'Consolas, "Courier New", monospace';
          fullCode.style.whiteSpace = 'pre';
          fullCode.textContent = makeBeforeCode(choice);

          newCode.style.fontFamily = 'Consolas, "Courier New", monospace';
          newCode.style.whiteSpace = 'pre';
          newCode.textContent = choice.code;

          preview.innerHTML = makeSingleFlexPreview(parts.before);
          afterPreview.innerHTML = makeSingleFlexPreview(parts.after);

          const conceitos = (choice.explain || '').replace(/<br><br>/g, '<br>');
          labCard.innerHTML = `<div class="flex-lab-explain-row"><div class="flex-lab-explain-box"><strong>Antes:</strong> observe o código inicial e compare com o resultado. Ele mostra o problema visual que ainda precisa ser resolvido.</div><div class="flex-lab-explain-box"><strong>Depois:</strong> os comandos novos reorganizam a tela. Compare os nomes dos estilos no código com o resultado visual.</div></div><div class="flex-lab-explain-final"><strong>Entenda a mudança:</strong><br>${conceitos}<br><br><strong>Observação:</strong> ${choice.note}</div>`;
        }

        window.renderFlexLabChoice = renderFlexChoice;
        renderFlexChoice(0);
        return;
      }

      ['codeCard', 'resultCard', 'newCodeCard'].forEach(x => document.getElementById(x).style.setProperty('display', 'flex', 'important'));
      document.getElementById('noteWrap').style.setProperty('display', 'grid', 'important');
      const codeTitleNormal = document.querySelector('#codeCard .panel-title span');
      if (codeTitleNormal) codeTitleNormal.textContent = 'Código completo — App.js';
      const ttlNormal = document.querySelector('#newCodeCard .panel-title span');
      if (ttlNormal) ttlNormal.textContent = step.addedTitle || 'O que foi adicionado';
      document.getElementById('newCode').style.fontFamily = 'Consolas, "Courier New", monospace';
      document.getElementById('newCode').style.whiteSpace = 'pre-wrap';
      document.getElementById('fullCode').textContent = step.code;
      document.getElementById('newCode').textContent = step.added;
      document.getElementById('note').innerHTML = `<strong>Observação:</strong> ${step.note}`;
      document.getElementById('preview').innerHTML = step.preview ? step.preview : previewHTML(id);
    }

    function copyText(id) {
      const text = document.getElementById(id).textContent;
      navigator.clipboard.writeText(text);
    }

    function copyImageLink(url, botao) {
      navigator.clipboard.writeText(url);
      const textoOriginal = botao.innerHTML;
      botao.innerHTML = '✅ Copiado!';
      setTimeout(() => {
        botao.innerHTML = textoOriginal;
      }, 1800);
    }

    window.copyImageLink = copyImageLink;

    renderModuleMenu();
    renderStepMenu();
    showStep(modules[currentModuleKey].steps[0].id);

    // A pesquisa usa as etapas já existentes, sem criar unidades de progresso.
    function abrirEtapaDaUrl() {
      let destino;
      try { destino = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      if (!destino.startsWith('rn-')) return;
      const encontrado = Object.entries(modules).find(([chave, modulo]) =>
        modulo.steps.some(etapa => destino === `rn-${chave}-${etapa.id}`));
      if (!encontrado) return;
      const [chave, modulo] = encontrado;
      const etapa = modulo.steps.find(item => destino === `rn-${chave}-${item.id}`);
      currentModuleKey = chave;
      renderModuleMenu();
      renderStepMenu();
      showStep(etapa.id);
      document.getElementById('stepTitle').scrollIntoView({ block: 'start' });
    }
    // Os scripts de complementos adicionam etapas e reinicializam o menu depois
    // deste arquivo. Abra o destino quando todos terminarem a inicialização.
    window.addEventListener('load', () => requestAnimationFrame(abrirEtapaDaUrl), { once: true });
    window.addEventListener('hashchange', abrirEtapaDaUrl);
