import React from 'react'
import { Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import styles from './header_style'
import image from  '../../assets/icon.png.png'

export default function Header(){
 return(
    <View style={styles.card}>

        <View style={styles.header}>        
            <Image source={image} style={styles.icon}/>    
            <Text style={styles.text_header}>
                Matheus Soares Desenvolvedor{'\n'} 
                Completo
            </Text>
        </View>
        <StatusBar style='auto'/>
    </View>
 )
}