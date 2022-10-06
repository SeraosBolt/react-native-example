import React from "react";
import { View, Pressable, Text } from "react-native";
import Header from "../../components/Header/header";
import Conteudo from "../../components/Conteudo/conteudo";
import styles from "./home_styles";

export default function Home(props){
    return (
        <View style={styles.conteiner}>
            <Header  />
            <Conteudo
             nav = {props.navigation}   
            />
        </View>
    )
}