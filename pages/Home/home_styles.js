import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        width: '100%'
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
    text_btn: {
        color: 'white',
        fontWeight: 'bold'
    },
    
})

export default styles