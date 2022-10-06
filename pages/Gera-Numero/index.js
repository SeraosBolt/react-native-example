import React, {useState} from "react";
import { View, Pressable, Text } from "react-native";

import styles from './gera_numero_style'



export default function GeraNumero(props){
    const [numero, setNumero] = useState(0)
    const gerarNumero = () =>{
        const novo_numero = Math.floor(Math.random() *(100-1)+1)
        setNumero(novo_numero)
    }
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.txt_numero}>
                    {numero}
                </Text>
            </View>
            <Pressable
            onPress={gerarNumero}
            style={styles.btn_gerar}>
                <Text>
                    GERAR NOVO NUMERO
                </Text>
            </Pressable>
            <Pressable
                style={styles.btn_voltar}
                onPress={()=>{props.navigation.navigate('Home')}}
                >
                <Text style={styles.txt_btn_voltar}>
                    VOLTAR
                </Text>
            </Pressable>
        </View>
    )
}
