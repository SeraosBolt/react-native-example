import React from "react";
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native'

import PlanetaHeader from "../../../components/Planetas-Headers";

import planetas from '../../../assets/planetas.jpg'
import planetas2 from '../../../assets/planetas2.png'
import ptolemaic from '../../../assets/Ptolemaicsystem-small.png'

import styles from "./planetas_styles";

export default function Planetas(props){
    return (
        <View style={styles.container}>
            <PlanetaHeader nav={props.navigation} image={planetas} text="PLANETAS" page="Planeta-Home" />
            <ScrollView>
                <View style={styles.content}>
                    <Image source={planetas2} style={styles.planetas_img}/>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.paragrafo_text}>
                            Um planeta (do grego πλανήτης [planεːtεːs] {'\n'} 
                            viajante) é um corpo celeste que orbita uma {'\n'} 
                            estrela ou um remanescente de estrela, com massa suficiente para se tornar esférico {'\n'}
                            pela sua própria gravidade, mas não ao {'\n'}
                            ponto de causar fusão termonuclear, e {'\n'}
                            que tenha limpado de planetesimais a sua {'\n'}
                            região vizinha (dominância orbital).{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            O termo planeta é antigo, com ligações com {'\n'}
                            a história, astrologia, ciência, mitologia e {'\n'}
                            religião. Os planetas eram vistos por muitas {'\n'}
                            culturas antigas como divinos ou emissários {'\n'}
                            de deuses. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            À medida que o conhecimento científico {'\n'}
                            evoluiu, a percepção humana sobre os {'\n'}
                            planetas mudou, incorporando diversos tipos de objetos. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Em 2006, a União Astronômica Internacional {'\n'}
                            (UAI) adotou oficialmente uma resolução {'\n'}
                            definindo planetas dentro do Sistema {'\n'}
                            Solar, a qual tem sido elogiada e criticada, {'\n'}
                            permanecendo em discussão entre alguns cientistas.{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Ptolomeu imaginava que os planetas {'\n'}
                            orbitavam a Terra, em movimentos do {'\n'}
                            epiciclo e círculo deferente. {'\n'}
                            Embora a ideia de que os planetas orbitavam {'\n'}
                            o Sol tivesse sido sugerida muitas vezes, {'\n'}
                            somente no século XVII esta visão foi {'\n'}
                            suportada por evidências pelas primeiras {'\n'}
                            observações telescópicas, realizadas por {'\n'}
                            Galileu Galilei. Através da cuidadosa análise {'\n'}
                            dos dados das observações, Johannes Kepler {'\n'}
                            descobriu que as órbitas dos planetas não {'\n'}
                            são circulares, mas elípticas. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>    
                            À medida que as ferramentas de observação {'\n'}
                            foram desenvolvidas, os astrônomos {'\n'}
                            perceberam que os planetas, como a Terra, {'\n'}
                            giravam em torno de eixos inclinados e que {'\n'}
                            alguns compartilhavam características como {'\n'}
                            calotas polares e estações do ano. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Desde o início da era espacial, observações {'\n'}
                            mais próximas por meio de sondas {'\n'}
                            demonstraram que a Terra e os outros {'\n'}
                            planetas também compartilham {'\n'}
                            características como vulcanismo, furacões, {'\n'}
                            tectônica e até mesmo hidrologia.{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Os planetas do Sistema Solar são divididos {'\n'}
                            em dois tipos principais: os grandes planetas {'\n'}
                            gigantes gasosos (ou jovianos), de baixa {'\n'}
                            densidade, e os menores e rochosos planetas {'\n'}
                            telúricos ou terrestres. {'\n'}
                            Pelas definições da UAI, há oito planetas {'\n'}
                            no Sistema Solar: em ordem crescente de {'\n'}
                            distância do Sol, são os quatro planetas {'\n'}
                            telúricos Mercúrio, Vênus, Terra e Marte {'\n'}
                            e depois os quatro gigantes gasosos {'\n'}
                            Júpiter, Saturno, Urano e Netuno. {'\n'}
                            Seis dos planetas são orbitados por um ou 
                            mais satélites naturais. Além disso, o Sistema 
                            Solar possui pelo menos cinco planetas 
                            anões e centenas de milhares de corpos menores.{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Vários milhares de planetas orbitando 
                            outras estrelas (“planetas extrassolares” 
                            ou exoplanetas”) foram descobertos na Via 
                            Láctea. {'\n'}
                            Até 1º de março de 2021, foram descobertos 
                            4 687 planetas extrassolares, em 3 463 
                            sistemas planetários (incluindo 770 sistemas 
                            multiplanetários), variando em tamanho 
                            desde mais ou menos o tamanho da Lua até 
                            gigantes gasosos com aproximadamente 
                            duas vezes o tamanho de Júpiter, dos 
                            quais mais de cem com o mesmo tamanho 
                            da Terra, nove dos quais estão à mesma 
                            distância relativa de suas estrelas que a 
                            Terra do Sol, isto é, estão na zona habitável circunstelar.{'\n'} 
                            Em 20 de dezembro de 2011, a equipe do {'\n'}
                            telescópio espacial Kepler registrou 
                            a descoberta dos primeiros planetas 
                            extrassolares do tamanho da Terra, 
                            Kepler-20e e Kepler-20f, orbitando uma 
                            estrela similar ao Sol, Kepler-20.{'\n'} 
                            Um estudo de 2012, analisando dados de 
                            microlente gravitacional, estima uma média 
                            de 1,6 planeta ligado a cada estrela da Via Láctea. {'\n'}
                            Acredita-se que uma em cada cinco estrelas 
                            similares ao Sol possui um planeta do 
                            tamanho da Terra em sua zona habitável. Os planetas são mais numerosos que as estrelas.{'\n'}
                        </Text>
                    </View>
                </View>  
                <ImageBackground source={ptolemaic} style={styles.title_image}>
                    <Text style={styles.txt_image}>
                        HISTÓRIA
                    </Text>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.paragrafo_text}>
                            Um planeta (do grego πλανήτης [planεːtεːs] {'\n'} 
                            viajante) é um corpo celeste que orbita uma {'\n'} 
                            estrela ou um remanescente de estrela, com massa suficiente para se tornar esférico {'\n'}
                            pela sua própria gravidade, mas não ao {'\n'}
                            ponto de causar fusão termonuclear, e {'\n'}
                            que tenha limpado de planetesimais a sua {'\n'}
                            região vizinha (dominância orbital).{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            O termo planeta é antigo, com ligações com {'\n'}
                            a história, astrologia, ciência, mitologia e {'\n'}
                            religião. Os planetas eram vistos por muitas {'\n'}
                            culturas antigas como divinos ou emissários {'\n'}
                            de deuses. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            À medida que o conhecimento científico {'\n'}
                            evoluiu, a percepção humana sobre os {'\n'}
                            planetas mudou, incorporando diversos tipos de objetos. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Em 2006, a União Astronômica Internacional {'\n'}
                            (UAI) adotou oficialmente uma resolução {'\n'}
                            definindo planetas dentro do Sistema {'\n'}
                            Solar, a qual tem sido elogiada e criticada, {'\n'}
                            permanecendo em discussão entre alguns cientistas.{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Ptolomeu imaginava que os planetas {'\n'}
                            orbitavam a Terra, em movimentos do {'\n'}
                            epiciclo e círculo deferente. {'\n'}
                            Embora a ideia de que os planetas orbitavam {'\n'}
                            o Sol tivesse sido sugerida muitas vezes, {'\n'}
                            somente no século XVII esta visão foi {'\n'}
                            suportada por evidências pelas primeiras {'\n'}
                            observações telescópicas, realizadas por {'\n'}
                            Galileu Galilei. Através da cuidadosa análise {'\n'}
                            dos dados das observações, Johannes Kepler {'\n'}
                            descobriu que as órbitas dos planetas não {'\n'}
                            são circulares, mas elípticas. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>    
                            À medida que as ferramentas de observação {'\n'}
                            foram desenvolvidas, os astrônomos {'\n'}
                            perceberam que os planetas, como a Terra, {'\n'}
                            giravam em torno de eixos inclinados e que {'\n'}
                            alguns compartilhavam características como {'\n'}
                            calotas polares e estações do ano. {'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Desde o início da era espacial, observações {'\n'}
                            mais próximas por meio de sondas {'\n'}
                            demonstraram que a Terra e os outros {'\n'}
                            planetas também compartilham {'\n'}
                            características como vulcanismo, furacões, {'\n'}
                            tectônica e até mesmo hidrologia.{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Os planetas do Sistema Solar são divididos {'\n'}
                            em dois tipos principais: os grandes planetas {'\n'}
                            gigantes gasosos (ou jovianos), de baixa {'\n'}
                            densidade, e os menores e rochosos planetas {'\n'}
                            telúricos ou terrestres. {'\n'}
                            Pelas definições da UAI, há oito planetas {'\n'}
                            no Sistema Solar: em ordem crescente de {'\n'}
                            distância do Sol, são os quatro planetas {'\n'}
                            telúricos Mercúrio, Vênus, Terra e Marte {'\n'}
                            e depois os quatro gigantes gasosos {'\n'}
                            Júpiter, Saturno, Urano e Netuno. {'\n'}
                            Seis dos planetas são orbitados por um ou 
                            mais satélites naturais. Além disso, o Sistema 
                            Solar possui pelo menos cinco planetas 
                            anões e centenas de milhares de corpos menores.{'\n'}
                        </Text>
                        <Text style={styles.paragrafo_text}>
                            Vários milhares de planetas orbitando 
                            outras estrelas (“planetas extrassolares” 
                            ou exoplanetas”) foram descobertos na Via 
                            Láctea. {'\n'}
                            Até 1º de março de 2021, foram descobertos 
                            4 687 planetas extrassolares, em 3 463 
                            sistemas planetários (incluindo 770 sistemas 
                            multiplanetários), variando em tamanho 
                            desde mais ou menos o tamanho da Lua até 
                            gigantes gasosos com aproximadamente 
                            duas vezes o tamanho de Júpiter, dos 
                            quais mais de cem com o mesmo tamanho 
                            da Terra, nove dos quais estão à mesma 
                            distância relativa de suas estrelas que a 
                            Terra do Sol, isto é, estão na zona habitável circunstelar.{'\n'} 
                            Em 20 de dezembro de 2011, a equipe do {'\n'}
                            telescópio espacial Kepler registrou 
                            a descoberta dos primeiros planetas 
                            extrassolares do tamanho da Terra, 
                            Kepler-20e e Kepler-20f, orbitando uma 
                            estrela similar ao Sol, Kepler-20.{'\n'} 
                            Um estudo de 2012, analisando dados de 
                            microlente gravitacional, estima uma média 
                            de 1,6 planeta ligado a cada estrela da Via Láctea. {'\n'}
                            Acredita-se que uma em cada cinco estrelas 
                            similares ao Sol possui um planeta do 
                            tamanho da Terra em sua zona habitável. Os planetas são mais numerosos que as estrelas.{'\n'}
                        </Text>
                    </View>
                </View>  
            </ScrollView>
        </View>

    )
}