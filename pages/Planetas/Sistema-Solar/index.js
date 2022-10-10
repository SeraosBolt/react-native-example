import React from 'react'

import PlanetaHeader from '../../../components/Planetas-Headers'
import sistema_solar from '../../../assets/sistema_solar.jpg'

export default function SistemaSolar(props){
    const nav = props.navigation
    return(
        <PlanetaHeader nav={nav} image={sistema_solar} page="Planeta-Home" text="Sistema Solar"/>
    )
}