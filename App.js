import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import image from './assets/icon.png.png'

export default function App() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Matheus Soares Desenvolvedor Completo
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text_color}>Hello World!</Text>
        <Text style={styles.text_color} >Matheus Soares!</Text>
        <Text style={styles.text_color} >Desenvolvedor Completo!</Text>
        <Image style={styles.image} source={image}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    flex: 1,
    backgroundColor: '#254689',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },
  image:{
    marginTop: 15,
    borderRadius: 25,
    width: 250,
    height: 250
  },
  header:{
    height: 80,
    backgroundColor: 'white',
    width: 420,
    alignItems:'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text_header:{
    fontWeight: 'bold',
    fontSize: 20
  }

});
