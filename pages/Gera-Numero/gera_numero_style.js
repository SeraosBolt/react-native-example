
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6e5f4'
    },
    card: {
        height: 150,
        width: 150, 
        backgroundColor: '#f1b2c3',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 75
    },
    txt_numero: {
        fontSize:50,
        fontWeight: 'bold',
    }, 
    btn_gerar:{
        width: 170,
        height: 50,
        backgroundColor: "#a9b8c7",
        justifyContent: 'center',
        borderRadius: 30,
        padding: 10
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
        borderRadius: 20,
    },
    txt_btn_voltar:{
        color:'white',
        fontWeight: 'bold'
    },
})

export default styles