import React from 'react';
import { Text, ScrollView, View, Image, Pressable } from 'react-native';

import Capa from '../../assets/icon.png.png';
import estilos from './letra_musica_style';

export default function LetraMusica( props) {
  return (
    <View style={ estilos.container }>
      <View style={estilos.header}>
        <Image source={ Capa } style={ estilos.imagem }/>
        <Pressable
          style={estilos.btn_voltar}
          onPress={() =>{props.navigation.navigate('Home')}}>
           <Text style={estilos.txt_btn_voltar}>Voltar</Text> 
        </Pressable>
        <Text style={ estilos.titulo }>The Beatles</Text>
        <Text style={ estilos.subtitulo }>Help</Text>
      </View>

      <ScrollView>
        <Text style={ estilos.paragrafo }>
          Help, I need somebody
          Help, not just anybody
          Help, you know I need someone, help!
        </Text>

        <Text style={ estilos.paragrafo }>
          When I was younger, so much younger than today
          I never needed anybody's help in any way
          But now these days are gone, I'm not so self assured
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>

        <Text style={ estilos.paragrafo }>
          And now my life has changed in oh so many ways
          My independence seems to vanish in the haze
          But every now and then I feel so insecure
          I know that I just need you like I've never done before
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>

        <Text style={ estilos.paragrafo }>
          When I was younger, so much younger than today
          I never needed anybody's help in any way
          But now these days are gone, I'm not so self assured
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>
      </ScrollView>
    </View>
  );
}