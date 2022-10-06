import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './conteudo_style'
import image from  '../../assets/icon.png.png'

export default function Conteudo(props){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.text_color} >Matheus Soares!</Text>
            <Text style={styles.text_color} >Desenvolvedor Completo!</Text>
            <Text style={styles.text_color} >Veja Alguns Exemplos!</Text>
            <Pressable
                style={styles.btn_musica}
                onPress={()=>{props.nav.navigate('Letra-Musica')}}>
                <Text style={styles.text_btn}>
                    VER LETRA DA MUSICA
                </Text>       
            </Pressable>
            <Pressable
                style={styles.btn_planeta}
                onPress={()=>{props.nav.navigate('Planeta-Home')}}>
                <Text style={styles.text_btn}>
                    INFORMAÇÃO SOBRE O UNIVERSO
                </Text>       
            </Pressable> 
            <Pressable
                style={styles.btn_gera_numero}
                onPress={()=>{props.nav.navigate('Gera-Numero')}}>
                <Text style={styles.text_btn}>
                    GERADOR DE NÚMERO
                </Text>       
            </Pressable> 
        </View>
    )
}