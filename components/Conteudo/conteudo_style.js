import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#254689',
        alignItems: 'center',
        width: '100%'
        
      },
      text_color:{
        color: 'white',
        fontSize: 20,

      },
      image:{
        marginTop: 15,
        borderRadius: 25,
        width: 125,
        height: 125
      },
      btn_musica: {
        position: 'absolute',
        bottom: 15,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20
  
      },
      btn_planeta: {
        position: 'absolute',
        bottom: 70,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        borderRadius: 20
  
      },
      btn_gera_numero:{
        position: 'absolute',
        bottom: 125,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: 20
      },

      text_btn: {
        color: 'white',
        fontWeight: 'bold'
    },
    
})

export default styles 