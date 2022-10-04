import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/header";
import Conteudo from "../../components/Conteudo/conteudo";
import styles from "./home_styles";

export default function Home(){
    return (
        <View style={styles.conteiner}>
            <Header />
            <Conteudo />
        </View>
    )
}