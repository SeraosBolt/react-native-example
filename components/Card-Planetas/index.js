import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import styles from './card_planetas_style'

export default function CardPlaneta(props) {
    return (
        <View style={styles.card}>
            <Image
                source={props.image}
                style={styles.cardImage}            
            />
                <Pressable 
                    style={styles.btn_planetas}
                    onPress={() => {props.nav.navigate(`${props.page}`)}}>
                    <Text style={styles.btn_text}>
                        {props.text}
                    </Text>
                </Pressable>
        </View>
    )
}