import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    card:{
        width: 150,   
        height: 250,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        margin:30
    },
    cardImage:{
        width: "100%",
        height: 250,
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 25
        
    },
    btn_planetas:{
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold',
        position: "absolute",
        bottom: 20,
        borderRadius: 25,
        shadowColor: 'black',
        shadowRadius: 2
    },
    btn_text:{
        fontWeight: 'bolt',
        fontSize: 13
    }
})

export default styles