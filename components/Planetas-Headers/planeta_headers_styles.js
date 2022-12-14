import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 210,
        width: '100%'
    },

    txt_header:{
        marginBottom: -150,
        color:'white',
        fontWeight: 'bold',
        fontSize: 50
    },
    img: {
        width: '100%',
        height: 210,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    txt_btn_voltar:{
        color:'white',
        fontWeight: 'bold'
    },
    btn_voltar:{
        borderWidth:2,
        borderColor: 'white',
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
})

export default styles