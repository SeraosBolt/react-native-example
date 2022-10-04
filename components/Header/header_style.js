import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        backgroundColor: '#254689',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    header:{
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    
    text_header:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: -80
    },
    icon:{
        width: 60,
        height: 60,
        marginBottom: -80
    }

})

export default styles