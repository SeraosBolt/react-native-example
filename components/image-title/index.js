import React from 'react'
import { ImageBackground, Text } from 'react-native'

import styles from './image_title_style'

export default function ImageTitle(props){
    return(
        <ImageBackground source={props.image} style={styles.title_image}>
            <Text style={props.color == 'black' ? styles.txt_black : styles.txt_white}>{props.text}</Text>
        </ImageBackground>
    )
}