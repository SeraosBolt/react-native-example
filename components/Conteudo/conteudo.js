import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './conteudo_style'
import image from  '../../assets/icon.png.png'

export default function Conteudo(props){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.text_color} >Matheus Soares!</Text>
            <Text style={styles.text_color} >Desenvolvedor Completo!</Text>
            <Text style={styles.text_color} >Veja Alguns Exemplos!</Text>
            
        </View>
    )
}