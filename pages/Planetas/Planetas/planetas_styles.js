import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    paragrafo_text:{
        color: 'white',
        fontSize: 20,
        textAlign: 'left'
    },
    planetas_img:{
        width: '100%',
        height: 200,
        resizeMode: "center"
    },
    content:{
        marginTop: 25,
        marginBottom: 25
        
    },
    title_image:{
        width: '100%',
        height: 200,
        resizeMode: "center",
        alignItems: 'center',
        position: 'relative'
    },
    txt_image:{
        bottom: 0,
        color:'black',
        fontWeight: 'bold',
        fontSize: 50,
        position: 'absolute'
    }
})

export default style