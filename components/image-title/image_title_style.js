import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title_image:{
        width: '100%',
        height: 200,
        resizeMode: "center",
        alignItems: 'center',
        position: 'relative'
    },

    txt_white:{
        bottom: 0,
        color:'white',
        fontWeight: 'bold',
        fontSize: 50,
        position: 'absolute',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 4
    },

    txt_black:{
        bottom: 0,
        color:'black',
        fontWeight: 'bold',
        fontSize: 50,
        position: 'absolute',
        textShadowColor: 'white',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 2
    },
    
})

export default styles