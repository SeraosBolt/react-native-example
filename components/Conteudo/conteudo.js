import { Text, View, Image } from 'react-native';

import styles from './conteudo_style'
import image from  '../../assets/icon.png.png'

export default function Conteudo(){
    return(
        <View style={styles.container}>
            <Text style={styles.text_color}>Hello World!</Text>
            <Text style={styles.text_color} >Matheus Soares!</Text>
            <Text style={styles.text_color} >Desenvolvedor Completo!</Text>
            <Image style={styles.image} source={image}/>
        </View>
    )
}