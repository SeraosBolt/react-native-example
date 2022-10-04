import React from "react";
import { View, Button } from "react-native";
import Header from "../../components/Header/header";
import Conteudo from "../../components/Conteudo/conteudo";
import styles from "./home_styles";

export default function Home(props){
    return (
        <View style={styles.conteiner}>
            <Header  />
            <Conteudo/>
            <Button title='Ir para letra da Musica' onPress={()=>{props.navigation.navigate('Letra-Musica')}} />
        </View>
    )
}