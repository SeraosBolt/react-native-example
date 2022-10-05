import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, ImageBackground } from 'react-native'
import styles from "./planetas_home_style";
import universo from '../../../assets/universo.jpg'

export default function PlanetasHome(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={universo} style={styles.img}>
                <Text style={styles.txt_header}>UNIVERSO</Text>
            </ImageBackground>
            <Pressable
                style={styles.btn_voltar}
                onPress={()=>{props.navigation.navigate("Home")}}
                >
                <Text style={styles.txt_btn_voltar}>VOLTAR</Text>    
            </Pressable>
            <StatusBar style="light" />
        </View>
    )
}
