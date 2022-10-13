import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native'

import styles from "./planetas_home_style";
import universo from '../../../assets/universo.jpg'
import planetas from '../../../assets/planetas.jpg'
import sistema_solar from '../../../assets/sistema_solar.jpg'
import galaxia from '../../../assets/galaxia.jpg'
import buraco_negro from '../../../assets/buraco_negro.webp'
import meteoro from '../../../assets/meteoro.png'
import estrela from '../../../assets/estrela.jpg'

import PlanetaHeader from "../../../components/Planetas-Headers";
import CardPlaneta from "../../../components/Card-Planetas";

export default function PlanetasHome(props){
    const nav = props.navigation
    return(
        <View style={styles.container}>
            <PlanetaHeader nav={nav} text="UNIVERSO" image={universo} page="Home" />
            <ScrollView>
                <View style={styles.card_display}>
                    <CardPlaneta image={planetas} text="PLANETAS" nav={nav} page="Planetas"/>
                    <CardPlaneta image={sistema_solar} text="SISTE MA SOLAR" nav={nav} page="Sistema-Solar" />
                </View>
                <View style={styles.card_display}>
                    <CardPlaneta image={galaxia} text="GALAXIAS"/>
                    <CardPlaneta image={buraco_negro} text="BURACO NEGRO" />
                </View>
                <View style={styles.card_display}>
                    <CardPlaneta image={meteoro} text="METEOROS"/>
                    <CardPlaneta image={estrela} text="ESTRELAS" />
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </View>
    )
}