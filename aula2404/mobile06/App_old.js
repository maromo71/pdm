// Arquivo trabalhado antes do intervalo
// Alteramos o App.js para um novo codigo
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxVermelho}>
        <Text style={styles.texto}>Box 1</Text>
      </View>
      <View style={styles.boxAzul}>
        <Text style={styles.texto}>Box 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupar a tela toda
    backgroundColor: '#f0f0f0',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  boxVermelho: {
    backgroundColor: '#ff0000',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  boxAzul: {
 backgroundColor: '#0000ff',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
