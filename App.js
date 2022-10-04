
import { StyleSheet, Text, View, Image } from 'react-native';


import Header from './components/Header/Header';
import Conteudo from './components/Conteudo/conteudo';

export default function App() {
  return (
    <View style={styles.conteiner}>
      <Header />
      <Conteudo />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1
  }


});
