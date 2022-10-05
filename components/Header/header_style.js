import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card:{
        height: 110,
        backgroundColor: '#254689',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    header:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        width: '100%',
        alignItems:'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    
    text_header:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    icon:{
        width: 60,
        height: 60,
        borderRadius: 75,
        marginLeft: 20
    }

})

export default styles