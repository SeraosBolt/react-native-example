import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem:{
        width: '100%',
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
    }

    
})

export default styles