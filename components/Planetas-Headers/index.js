import React from "react";
import { ImageBackground, Text, Pressable, View } from "react-native";

import styles from "./planeta_headers_styles";

export default function PlanetaHeader(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={props.image} style={styles.img}>
                <Text style={styles.txt_header}>{props.text}</Text>
            </ImageBackground>
            <Pressable
            style={styles.btn_voltar}
            onPress={()=>{props.nav.navigate(`${props.page}`)}}
            >
                <Text style={styles.txt_btn_voltar}>VOLTAR</Text>    
            </Pressable>
        </View>
    )
}