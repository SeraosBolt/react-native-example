import React from "react";
import {View, Text} from 'react-native'

import PlanetaHeader from "../../../components/Planetas-Headers";

import planetas from '../../../assets/planetas.jpg'

export default function Planetas(props){
    return (
        <View>
            <PlanetaHeader nav={props.navigation} image={planetas} text="PLANETAS" page="Planeta-Home" />
            <View>
                <Text>
                    planetas sao grandes
                </Text>
            </View>  
        </View>

    )
}