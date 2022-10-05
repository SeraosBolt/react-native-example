import React from "react";
import { View, Text, Pressable, Image } from 'react-native'
import styles from "./planetas_home_style";
import universo from '../../../assets/universo.jpg'

export default function PlanetasHome(){
    return(
        <View style={styles.container}>
            <Image source={universo} style={styles.img}/>
        </View>
    )
}
