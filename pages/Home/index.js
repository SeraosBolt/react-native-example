import React from "react";
import { View, Pressable, Text } from "react-native";
import Header from "../../components/Header/header";
import Conteudo from "../../components/Conteudo/conteudo";
import styles from "./home_styles";

export default function Home(props){
    return (
        <View style={styles.conteiner}>
            <Header  />
            <Conteudo/>
            <Pressable
                style={styles.btn_musica}
                onPress={()=>{props.navigation.navigate('Letra-Musica')}}>
                <Text style={styles.text_btn}>
                    VER LETRA DA MUSICA
                </Text>       
            </Pressable>
            <Pressable
                style={styles.btn_planeta}
                onPress={()=>{props.navigation.navigate('Planeta-Home')}}>
                <Text style={styles.text_btn}>
                    INFORMAÇÃO SOBRE O UNIVERSO
                </Text>       
            </Pressable>

        </View>
    )
}