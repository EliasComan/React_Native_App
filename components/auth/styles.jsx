import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    containerKeyboard:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        width: '80%',
        maxWidth:400,
        padding: 12,
        margin: 12,
        borderColor: colors.blue,
        borderWidth:1,
        borderRadius:10,
    },
    title:{
        fontSize:18,
        marginBottom:12,
        textAlign:'center'
    },
    prompt:{
        alignItems:'center'
    },
    promptMessage:{
        fontSize:14,
        color:colors.blue
    },
    propmtButton:{
        fontSize:14,
        color:colors.darkBlue,
        marginVertical:20
    },
    button:{
        backgroundColor:colors.ligthBlue,
        margin: 20,
    },
    input:{
        padding: 10,
        marginVertical:15,
        borderColor:colors.darkBlue,
        borderWidth:1,
        borderRadius:10,
        width: '100%'
    }
})