import React from 'react'

import {View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import styles from './header_style'

export default function Header(){
 return(
    <View style={styles.card}>
        <View style={styles.header}>
            <Text style={styles.text_header}>
                Matheus Soares Desenvolvedor Completo
            </Text>
        </View>
        <StatusBar style="auto" />

    </View>
 )
}