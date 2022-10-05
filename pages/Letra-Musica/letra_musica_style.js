import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem:{
        width: '50%',
        height: 100, 
        resizeMode: 'cover'

    },
    paragrafo: {
        fontSize: 22,
        marginBottom: 20,
        padding: 15
    },
    titulo:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitulo: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn_voltar:{
        position: 'absolute',
        top: 45,
        left: 10,
        width: 75,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20
    },
    txt_btn_voltar:{
        color:'white',
        fontWeight: 'bold'
    },
    header: {
        height: 250,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default styles