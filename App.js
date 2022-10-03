import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text_color}>Hello World!</Text>
      <Text style={styles.text_color} >Matheus Soares!</Text>
      <Text style={styles.text_color} >Desenvolvedor Completo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#254689',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text_color:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
});
